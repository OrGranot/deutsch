// Lehrer: the in-app German teacher. Holds the Claude API key server-side and only
// answers Or's signed-in account. Deploy: supabase functions deploy lehrer
// Secrets: ANTHROPIC_API_KEY (required), ALLOWED_EMAIL (defaults to Or's), LEHRER_MODEL (optional).
import Anthropic from "npm:@anthropic-ai/sdk@0.131.0";

const MODEL = Deno.env.get("LEHRER_MODEL") || "claude-sonnet-5-5";
const ALLOWED = (Deno.env.get("ALLOWED_EMAIL") || "orgranot91@gmail.com").toLowerCase();
const client = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY") });
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

// Stable teacher instructions (cached). The learner profile changes per request and goes after it.
const TEACHER = `You are Or's personal German teacher inside the learning app "Sprechstunde". Or is working from A1 towards B2 and reads English well. Address Or with "du".

How you teach:
- You are a German teacher first. Every answer should help Or learn German; for unrelated requests, answer in one line and bring the talk back to German.
- Use the learner profile below: Or's level, the current lesson and grammar topic, words Or keeps missing, recent exercise mistakes and check results. Refer to them concretely ("you mixed up der/die Tür twice this week").
- Match the level. At A1/A2 write German in short, simple sentences and add the English translation in brackets for anything new; explanations of grammar go in English. At B1 explain mostly in German with English for hard points. At B2 speak German only unless Or asks.
- When Or writes German, first reply to the content, then correct mistakes briefly: show the corrected sentence, mark what changed in **bold**, and give the rule in one line. Don't correct more than three things at once; pick the ones that matter most for Or's level.
- When Or asks what to practise, pick one or two concrete things from the profile and give a short exercise right away (3 to 5 items), then check Or's answers when they come.
- Keep replies short: usually under 120 words, since Or often reads on a phone. One question at a time.
- For nouns always give the article (der/die/das) and plural. Be encouraging but honest; never pretend a wrong answer was right.
- Don't invent facts about the app; if Or asks about a feature you don't know, say so.`;

type Turn = { role: "user" | "assistant"; content: string };

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  // The Supabase gateway verifies the JWT signature (verify_jwt is on by default); here we only check whose it is.
  const token = (req.headers.get("authorization") || "").replace(/^Bearer /, "");
  let email = "";
  try { email = String(JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))).email || "").toLowerCase(); } catch (_) { /* no token */ }
  if (email !== ALLOWED) return json({ error: "This teacher is private." }, 403);
  if (!Deno.env.get("ANTHROPIC_API_KEY")) return json({ error: "not_configured" }, 503);

  let body: { messages?: Turn[]; profile?: string };
  try { body = await req.json(); } catch (_) { return json({ error: "Bad request" }, 400); }
  // keep the conversation bounded so a long chat can't run up the bill
  const messages = (body.messages || [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return json({ error: "Bad request" }, 400);
  const profile = String(body.profile || "").slice(0, 8000);

  try {
    const res = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 2000,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: [
        { type: "text", text: TEACHER, cache_control: { type: "ephemeral" } },
        { type: "text", text: "Learner profile (from the app, updated now):\n" + profile },
      ],
      messages,
    });
    if (res.stop_reason === "refusal") return json({ reply: "Darauf kann ich leider nicht antworten. Lass uns mit Deutsch weitermachen!" });
    const reply = res.content.flatMap((b) => (b.type === "text" ? [b.text] : [])).join("\n").trim();
    return json({ reply, usage: { in: res.usage.input_tokens, cached: res.usage.cache_read_input_tokens, out: res.usage.output_tokens } });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) return json({ error: "Too many messages right now. Try again in a minute." }, 429);
    if (e instanceof Anthropic.AuthenticationError) return json({ error: "The API key isn't valid." }, 502);
    if (e instanceof Anthropic.APIError) {
      const msg = /credit|billing|spend/i.test(e.message) ? "The teacher's API credit is used up for now." : "The teacher couldn't answer: " + e.message;
      return json({ error: msg }, 502);
    }
    return json({ error: "The teacher couldn't answer right now." }, 500);
  }
});
