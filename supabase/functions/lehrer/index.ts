// Lehrer: the in-app German teacher. Holds the model API keys server-side and only
// answers Or's signed-in account. Deploy: supabase functions deploy lehrer
// Secrets (any of them; each key set adds a model to the picker in the app):
//   GEMINI_API_KEY (Google, free tier), MOONSHOT_API_KEY (Kimi), ANTHROPIC_API_KEY (Claude).
// Optional: ALLOWED_EMAIL, GEMINI_MODEL, KIMI_MODEL, CLAUDE_MODEL.
// Memory lives in the app, not with the model provider: the app sends its saved teacher notes
// with every message, and the teacher returns new notes in a <memory> block that the app stores.
import Anthropic from "npm:@anthropic-ai/sdk@0.131.0";

const env = (k: string) => Deno.env.get(k) || "";
type Provider = { label: string; key: string; model: string; url?: string };
const PROVIDERS: Record<string, Provider> = {
  gemini: { label: "Gemini 3.8 Flash (free)", key: "GEMINI_API_KEY", model: env("GEMINI_MODEL") || "gemini-3.8-flash", url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions" },
  kimi: { label: "Kimi K3", key: "MOONSHOT_API_KEY", model: env("KIMI_MODEL") || "kimi-k3", url: "https://api.moonshot.ai/v1/chat/completions" },
  claude: { label: "Claude Sonnet 5.5", key: "ANTHROPIC_API_KEY", model: env("CLAUDE_MODEL") || "claude-sonnet-5-5" },
};
const available = () => Object.keys(PROVIDERS).filter((id) => env(PROVIDERS[id].key));
const ALLOWED = (env("ALLOWED_EMAIL") || "orgranot91@gmail.com").toLowerCase();
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

// Stable teacher instructions. The learner profile and notes change per request and go after it.
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

const MEMORY_RULES = `Memory: you have no memory of your own; the app keeps "Teacher notes" for you (listed in the profile, numbered) and gives them to whichever model is teaching. When you learn something worth remembering for future lessons (a recurring mistake, a goal, an interest, what you agreed to practise next, something Or now knows well), end your reply with a block like this, which the app hides from Or:
<memory>
add: Or mixes up "seit" and "vor" for time
remove: 3
</memory>
Only add short, lasting facts that aren't already in the notes; use "remove: n" for notes that are wrong or out of date. Leave the block out when there is nothing new.`;

type Turn = { role: "user" | "assistant"; content: string };
const TIMEOUT = 60_000; // answer before the app gives up at 90s and the Supabase limit

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  // The Supabase gateway verifies the JWT signature (verify_jwt is on by default); here we only check whose it is.
  const token = (req.headers.get("authorization") || "").replace(/^Bearer /, "");
  let email = "";
  try { email = String(JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))).email || "").toLowerCase(); } catch (_) { /* no token */ }
  if (email !== ALLOWED) return json({ error: "This teacher is private." }, 403);

  let body: { messages?: Turn[]; profile?: string; provider?: string; list?: boolean };
  try { body = await req.json(); } catch (_) { return json({ error: "Bad request" }, 400); }
  const ids = available();
  if (body.list) return json({ providers: ids.map((id) => ({ id, label: PROVIDERS[id].label })) });
  if (!ids.length) return json({ error: "not_configured" }, 503);
  const id = body.provider && ids.includes(body.provider) ? body.provider : ids[0];

  // keep the conversation bounded so a long chat can't run up the bill
  const messages = (body.messages || [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return json({ error: "Bad request" }, 400);
  const system = TEACHER + "\n\n" + MEMORY_RULES;
  const profile = "Learner profile and teacher notes (from the app, updated now):\n" + String(body.profile || "").slice(0, 12000);

  try {
    const raw = id === "claude" ? await askClaude(system, profile, messages) : await askOpenAICompat(PROVIDERS[id], system + "\n\n" + profile, messages);
    const { reply, add, remove } = splitMemory(raw);
    return json({ reply, memory: { add, remove }, provider: id });
  } catch (e) {
    const status = e instanceof Anthropic.APIError ? e.status : (e as { status?: number }).status;
    const msg = e instanceof Error ? e.message : String(e);
    console.error(id, status, msg);
    if (/abort|timed? ?out/i.test(msg) || (e as Error)?.name === "TimeoutError") return json({ error: `${PROVIDERS[id].label} took too long to answer. Try again or pick another model.` }, 504);
    if (status === 429) return json({ error: "Too many messages right now. Try again in a minute, or pick another model." }, 429);
    if (status === 401 || status === 403) return json({ error: `The ${PROVIDERS[id].label} API key isn't valid.` }, 502);
    if (status === 402 || /credit|billing|balance|quota|spend/i.test(msg)) return json({ error: `The ${PROVIDERS[id].label} credit is used up. Pick another model.` }, 502);
    return json({ error: "The teacher couldn't answer: " + msg.slice(0, 200) }, 502);
  }
});

// Pull the <memory> block out of the answer. Lines are "add: ..." or "remove: n".
function splitMemory(raw: string) {
  const add: string[] = [], remove: number[] = [];
  const reply = raw.replace(/<memory>([\s\S]*?)(<\/memory>|$)/gi, (_, block: string) => {
    for (const line of block.split("\n")) {
      const a = line.match(/^\s*[-*]?\s*add:\s*(.+)$/i), r = line.match(/^\s*[-*]?\s*remove:\s*(\d+)/i);
      if (a) add.push(a[1].trim().slice(0, 200));
      if (r) remove.push(+r[1]);
    }
    return "";
  }).trim();
  return { reply, add: add.slice(0, 5), remove };
}

async function askClaude(system: string, profile: string, messages: Turn[]): Promise<string> {
  const res = await new Anthropic({ apiKey: env("ANTHROPIC_API_KEY"), timeout: TIMEOUT, maxRetries: 1 }).beta.messages.create({
    model: PROVIDERS.claude.model,
    max_tokens: 2000,
    output_config: { effort: "low" },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: [
      { type: "text", text: system, cache_control: { type: "ephemeral" } },
      { type: "text", text: profile },
    ],
    messages,
  });
  if (res.stop_reason === "refusal") return "Darauf kann ich leider nicht antworten. Lass uns mit Deutsch weitermachen!";
  return res.content.flatMap((b) => (b.type === "text" ? [b.text] : [])).join("\n").trim();
}

async function askOpenAICompat(p: Provider, system: string, messages: Turn[]): Promise<string> {
  const r = await fetch(p.url!, {
    method: "POST",
    signal: AbortSignal.timeout(TIMEOUT),
    headers: { Authorization: "Bearer " + env(p.key), "Content-Type": "application/json" },
    body: JSON.stringify({
      model: p.model,
      max_tokens: 8000, // room for the model's thinking plus a short answer
      ...(p === PROVIDERS.gemini ? { reasoning_effort: "low" } : {}),
      messages: [{ role: "system", content: system }, ...messages],
    }),
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) {
    const err = new Error((Array.isArray(d) ? d[0]?.error?.message : d?.error?.message) || "HTTP " + r.status) as Error & { status: number };
    err.status = r.status;
    throw err;
  }
  const c = d?.choices?.[0]?.message?.content;
  const text = (Array.isArray(c) ? c.map((x: { text?: string }) => x?.text || "").join("") : String(c || "")).trim();
  if (!text) {
    console.error("empty answer", JSON.stringify(d).slice(0, 1000));
    throw new Error(`${p.label} sent an empty answer (finish: ${d?.choices?.[0]?.finish_reason || "unknown"})`);
  }
  return text;
}
