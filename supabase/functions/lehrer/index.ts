// Lehrer: the in-app German teacher. Holds the model API key server-side and only
// answers Or's signed-in account. Deploy: supabase functions deploy lehrer
// Secrets: one of GEMINI_API_KEY (Google, free tier), MOONSHOT_API_KEY (Kimi) or ANTHROPIC_API_KEY (Claude).
// Optional: LEHRER_PROVIDER (gemini | kimi | claude, when more than one key is set), LEHRER_MODEL, ALLOWED_EMAIL.
import Anthropic from "npm:@anthropic-ai/sdk@0.131.0";

const env = (k: string) => Deno.env.get(k) || "";
// OpenAI-compatible chat endpoints; Claude goes through its own SDK below.
const OPENAI_COMPAT: Record<string, { url: string; key: string; model: string }> = {
  gemini: { url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions", key: "GEMINI_API_KEY", model: "gemini-3.8-flash" },
  kimi: { url: "https://api.moonshot.ai/v1/chat/completions", key: "MOONSHOT_API_KEY", model: "kimi-k3" },
};
const PROVIDER = env("LEHRER_PROVIDER") || (env("GEMINI_API_KEY") ? "gemini" : env("MOONSHOT_API_KEY") ? "kimi" : env("ANTHROPIC_API_KEY") ? "claude" : "");
const KEY = PROVIDER === "claude" ? env("ANTHROPIC_API_KEY") : OPENAI_COMPAT[PROVIDER] ? env(OPENAI_COMPAT[PROVIDER].key) : "";
const MODEL = env("LEHRER_MODEL") || (PROVIDER === "claude" ? "claude-sonnet-5-5" : OPENAI_COMPAT[PROVIDER]?.model || "");
const ALLOWED = (env("ALLOWED_EMAIL") || "orgranot91@gmail.com").toLowerCase();
const client = PROVIDER === "claude" ? new Anthropic({ apiKey: KEY }) : null;
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
  if (!KEY) return json({ error: "not_configured" }, 503);

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
    const reply = client ? await askClaude(client, profile, messages) : await askOpenAICompat(OPENAI_COMPAT[PROVIDER], profile, messages);
    return json({ reply });
  } catch (e) {
    const status = e instanceof Anthropic.APIError ? e.status : (e as { status?: number }).status;
    const msg = e instanceof Error ? e.message : String(e);
    if (status === 429) return json({ error: "Too many messages right now. Try again in a minute." }, 429);
    if (status === 401 || status === 403) return json({ error: "The API key isn't valid." }, 502);
    if (status === 402 || /credit|billing|balance|quota|spend/i.test(msg)) return json({ error: "The teacher's API credit is used up for now." }, 502);
    return json({ error: "The teacher couldn't answer: " + msg.slice(0, 200) }, 502);
  }
});

async function askClaude(c: Anthropic, profile: string, messages: Turn[]): Promise<string> {
  const res = await c.beta.messages.create({
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
  if (res.stop_reason === "refusal") return "Darauf kann ich leider nicht antworten. Lass uns mit Deutsch weitermachen!";
  return res.content.flatMap((b) => (b.type === "text" ? [b.text] : [])).join("\n").trim();
}

async function askOpenAICompat(p: { url: string }, profile: string, messages: Turn[]): Promise<string> {
  const r = await fetch(p.url, {
    method: "POST",
    headers: { Authorization: "Bearer " + KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 4000, // room for the model's thinking plus a short answer
      messages: [{ role: "system", content: TEACHER + "\n\nLearner profile (from the app, updated now):\n" + profile }, ...messages],
    }),
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) {
    const err = new Error((Array.isArray(d) ? d[0]?.error?.message : d?.error?.message) || "HTTP " + r.status) as Error & { status: number };
    err.status = r.status;
    throw err;
  }
  const text = String(d?.choices?.[0]?.message?.content || "").trim();
  if (!text) throw new Error("empty answer");
  return text;
}
