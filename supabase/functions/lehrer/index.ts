// Lehrer: the in-app German teacher. Holds the model API keys server-side and only
// answers Or's signed-in account. Deploy: supabase functions deploy lehrer
// Secrets (any of them; each key set adds a model to the picker in the app):
//   GEMINI_API_KEY (Google, free tier), MOONSHOT_API_KEY (Kimi), ANTHROPIC_API_KEY (Claude).
// Optional: ALLOWED_EMAIL, GEMINI_MODEL, KIMI_MODEL, CLAUDE_MODEL, CLAUDE_FAST_MODEL.
// The spoken lesson conversation sends {fast:true, stream:true}: a smaller, quicker setup whose
// answer streams back as plain text, so the app can show and speak the first sentence early.
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
// quick replies in the spoken conversation: Haiku answers in about a second
const CLAUDE_FAST = env("CLAUDE_FAST_MODEL") || "claude-haiku-4-5";
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
- Don't invent facts about the app; if Or asks about a feature you don't know, say so.
- Never use emojis, emoticons or smileys: your German is read aloud.`;

// The spoken conversation: the lesson brief comes as the first message; this only keeps it quick.
const FAST = `You are in a spoken conversation with Or, a German learner, inside the app "Sprechstunde". Follow the app's brief in the first message.
- Speak German only. Keep it short, like a real conversation: one or two short sentences, then stop.
- Never use emojis, emoticons, smileys, lists or headings: everything you write is read aloud.
- The only English allowed is the help line the brief asks for, on its own last line in round brackets.`;
// emoji, pictographs and their joiners/variation selectors; models add them despite the rules
const EMOJI = /[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}\u200D\uFE0F\u20E3]|[:;]-?[)(DP](?=\s|$)/gu;
const noEmoji = (s: string) => s.replace(EMOJI, "").replace(/[ \t]{2,}/g, " ").replace(/ +([.,!?])/g, "$1");

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

  let body: { messages?: Turn[]; profile?: string; provider?: string; list?: boolean; fast?: boolean; stream?: boolean };
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
  const fast = !!body.fast;
  // the conversation needs only the start of the profile (level, lesson, recent mistakes) and no memory rules
  const system = fast ? FAST : TEACHER + "\n\n" + MEMORY_RULES;
  const profile = "Learner profile and teacher notes (from the app, updated now):\n" + String(body.profile || "").slice(0, fast ? 2500 : 12000);
  const t0 = Date.now();

  try {
    if (body.stream) {
      // Plain-text stream. Errors before the first word still come back as JSON with a status;
      // a failure mid-answer ends the text with a line the app shows as an error.
      const parts = id === "claude" ? streamClaude(system, profile, messages, fast) : streamOpenAICompat(PROVIDERS[id], system + "\n\n" + profile, messages, fast);
      const first = await parts.next();
      const tFirst = Date.now() - t0;
      const enc = new TextEncoder();
      const out = new ReadableStream({
        async start(ctl) {
          try {
            if (!first.done) ctl.enqueue(enc.encode(noEmoji(first.value)));
            for await (const p of parts) ctl.enqueue(enc.encode(noEmoji(p)));
          } catch (e) {
            console.error(id, "stream", e instanceof Error ? e.message : e);
            ctl.enqueue(enc.encode("\n[[FEHLER]]"));
          }
          console.log(id, fast ? "fast" : "full", "first", tFirst, "ms, total", Date.now() - t0, "ms");
          ctl.close();
        },
      });
      return new Response(out, { headers: { ...CORS, "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Provider": id, "X-First-Ms": String(tFirst), "Access-Control-Expose-Headers": "X-Provider, X-First-Ms" } });
    }
    const raw = id === "claude" ? await askClaude(system, profile, messages, fast) : await askOpenAICompat(PROVIDERS[id], system + "\n\n" + profile, messages, fast);
    const { reply, add, remove } = splitMemory(raw);
    console.log(id, fast ? "fast" : "full", "total", Date.now() - t0, "ms");
    return json({ reply: noEmoji(reply), memory: { add, remove }, provider: id, ms: Date.now() - t0 });
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

function claudeParams(system: string, profile: string, messages: Turn[], fast: boolean) {
  const sys = [
    { type: "text" as const, text: system, cache_control: { type: "ephemeral" as const } },
    { type: "text" as const, text: profile },
  ];
  if (fast) return { model: CLAUDE_FAST, max_tokens: 400, system: sys, messages };
  return { model: PROVIDERS.claude.model, max_tokens: 2000, output_config: { effort: "low" as const }, betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const, system: sys, messages };
}
const claude = () => new Anthropic({ apiKey: env("ANTHROPIC_API_KEY"), timeout: TIMEOUT, maxRetries: 1 });

async function askClaude(system: string, profile: string, messages: Turn[], fast = false): Promise<string> {
  // deno-lint-ignore no-explicit-any
  const res = await claude().beta.messages.create(claudeParams(system, profile, messages, fast) as any);
  if (res.stop_reason === "refusal") return "Darauf kann ich leider nicht antworten. Lass uns mit Deutsch weitermachen!";
  return res.content.flatMap((b) => (b.type === "text" ? [b.text] : [])).join("\n").trim();
}

async function* streamClaude(system: string, profile: string, messages: Turn[], fast: boolean): AsyncGenerator<string> {
  // deno-lint-ignore no-explicit-any
  const s = claude().beta.messages.stream(claudeParams(system, profile, messages, fast) as any);
  for await (const ev of s) {
    if (ev.type === "content_block_delta" && ev.delta.type === "text_delta") yield ev.delta.text;
  }
}

// Gemini thinks before answering; for the conversation ask for as little thinking as it allows
// ("minimal"), and fall back to "low" for a model that doesn't take it.
async function compatFetch(p: Provider, system: string, messages: Turn[], fast: boolean, stream: boolean): Promise<Response> {
  const send = (effort?: string) => fetch(p.url!, {
    method: "POST",
    signal: AbortSignal.timeout(TIMEOUT),
    headers: { Authorization: "Bearer " + env(p.key), "Content-Type": "application/json" },
    body: JSON.stringify({
      model: p.model,
      max_tokens: fast ? 2000 : 8000, // room for the model's thinking plus a short answer
      ...(effort ? { reasoning_effort: effort } : {}),
      ...(stream ? { stream: true } : {}),
      messages: [{ role: "system", content: system }, ...messages],
    }),
  });
  const gem = p === PROVIDERS.gemini;
  let r = await send(gem ? (fast ? "minimal" : "low") : undefined);
  if (gem && fast && r.status === 400) r = await send("low");
  if (!r.ok) {
    const d = await r.json().catch(() => ({}));
    const err = new Error((Array.isArray(d) ? d[0]?.error?.message : d?.error?.message) || "HTTP " + r.status) as Error & { status: number };
    err.status = r.status;
    throw err;
  }
  return r;
}

async function* streamOpenAICompat(p: Provider, system: string, messages: Turn[], fast: boolean): AsyncGenerator<string> {
  const r = await compatFetch(p, system, messages, fast, true);
  const reader = r.body!.pipeThrough(new TextDecoderStream()).getReader();
  let buf = "", any = false;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += value;
    const lines = buf.split("\n"); buf = lines.pop() || "";
    for (const line of lines) {
      const m = line.match(/^data:\s*(.*)$/); if (!m || m[1] === "[DONE]") continue;
      let d; try { d = JSON.parse(m[1]); } catch (_) { continue; }
      const c = d?.choices?.[0]?.delta?.content;
      const t = Array.isArray(c) ? c.map((x: { text?: string }) => x?.text || "").join("") : String(c || "");
      if (t) { any = true; yield t; }
    }
  }
  if (!any) throw new Error(`${p.label} sent an empty answer`);
}

async function askOpenAICompat(p: Provider, system: string, messages: Turn[], fast = false): Promise<string> {
  const r = await compatFetch(p, system, messages, fast, false);
  const d = await r.json().catch(() => ({}));
  const c = d?.choices?.[0]?.message?.content;
  const text = (Array.isArray(c) ? c.map((x: { text?: string }) => x?.text || "").join("") : String(c || "")).trim();
  if (!text) {
    console.error("empty answer", JSON.stringify(d).slice(0, 1000));
    throw new Error(`${p.label} sent an empty answer (finish: ${d?.choices?.[0]?.finish_reason || "unknown"})`);
  }
  return text;
}
