// Erinnerung: the daily reminder from Lehrer, sent as a push notification to the home-screen app.
// Setup (once): run supabase/reminders.sql in the SQL editor, then create a function named
// "erinnerung" with this file (or: supabase functions deploy erinnerung). No secrets needed:
// the push keys are made on first use and kept in public.push_keys, which only this function reads.
//
// The app calls it with Or's sign-in to get the public key and to save this device's subscription
// and reminder time. A cron job calls {"action":"tick"} every 15 minutes; a reminder goes out once a
// day, after the chosen time, and only when today's lesson isn't done yet. Calling tick early or
// twice does nothing extra, so it's fine that the cron job uses the public anon key.

const env = (k: string) => (typeof Deno !== "undefined" ? Deno.env.get(k) : "") || "";
const ALLOWED = (env("ALLOWED_EMAIL") || "orgranot91@gmail.com").toLowerCase();
const APP_URL = env("APP_URL") || "https://orgranot.github.io/deutsch/";
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

// ---------- database (REST with the service role; the tables have RLS on and no policies) ----------
async function db(path: string, opts: RequestInit = {}) {
  const key = env("SUPABASE_SERVICE_ROLE_KEY");
  const r = await fetch(env("SUPABASE_URL") + "/rest/v1/" + path, { ...opts, headers: { apikey: key, Authorization: "Bearer " + key, "Content-Type": "application/json", ...(opts.headers || {}) } });
  const txt = await r.text();
  if (!r.ok) throw new Error(`db ${r.status}: ${txt.slice(0, 200)}`);
  return txt ? JSON.parse(txt) : null;
}
type Keys = { public_key: string; private_jwk: JsonWebKey };
async function vapidKeys(): Promise<Keys> {
  const rows = await db("push_keys?select=public_key,private_jwk&id=eq.1");
  if (rows.length) return rows[0];
  const k = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]) as CryptoKeyPair;
  const row = { id: 1, public_key: b64u(new Uint8Array(await crypto.subtle.exportKey("raw", k.publicKey))), private_jwk: await crypto.subtle.exportKey("jwk", k.privateKey) };
  await db("push_keys?on_conflict=id", { method: "POST", headers: { Prefer: "resolution=ignore-duplicates" }, body: JSON.stringify(row) });
  return (await db("push_keys?select=public_key,private_jwk&id=eq.1"))[0];
}

// ---------- Web Push (RFC 8291 encryption, RFC 8292 VAPID), WebCrypto only ----------
const te = new TextEncoder();
export const b64u = (b: Uint8Array) => btoa(String.fromCharCode(...b)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
export const unb64u = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4)), (c) => c.charCodeAt(0));
const cat = (...a: Uint8Array[]) => { const o = new Uint8Array(a.reduce((n, x) => n + x.length, 0)); let i = 0; for (const x of a) { o.set(x, i); i += x.length; } return o; };
async function hkdf(salt: Uint8Array, ikm: Uint8Array, info: Uint8Array, len: number) {
  const k = await crypto.subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt, info }, k, len * 8));
}
export type Sub = { endpoint: string; keys: { p256dh: string; auth: string } };
export async function encrypt(sub: Sub, payload: string) {
  const uaPub = unb64u(sub.keys.p256dh), secret = unb64u(sub.keys.auth);
  const as = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]) as CryptoKeyPair;
  const asPub = new Uint8Array(await crypto.subtle.exportKey("raw", as.publicKey));
  const ua = await crypto.subtle.importKey("raw", uaPub, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const shared = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: ua }, as.privateKey, 256));
  const ikm = await hkdf(secret, shared, cat(te.encode("WebPush: info\0"), uaPub, asPub), 32);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const cek = await crypto.subtle.importKey("raw", await hkdf(salt, ikm, te.encode("Content-Encoding: aes128gcm\0"), 16), "AES-GCM", false, ["encrypt"]);
  const iv = await hkdf(salt, ikm, te.encode("Content-Encoding: nonce\0"), 12);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, cek, cat(te.encode(payload), new Uint8Array([2]))));
  return cat(salt, new Uint8Array([0, 0, 16, 0]), new Uint8Array([asPub.length]), asPub, ct); // record size 4096
}
export async function vapidHeader(endpoint: string, keys: Keys, subject = APP_URL) {
  const enc = (o: unknown) => b64u(te.encode(JSON.stringify(o)));
  const unsigned = enc({ typ: "JWT", alg: "ES256" }) + "." + enc({ aud: new URL(endpoint).origin, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: subject });
  const pk = await crypto.subtle.importKey("jwk", keys.private_jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, pk, te.encode(unsigned)));
  return `vapid t=${unsigned}.${b64u(sig)}, k=${keys.public_key}`;
}
async function sendPush(sub: Sub, msg: unknown, keys: Keys) {
  const r = await fetch(sub.endpoint, {
    method: "POST",
    headers: { Authorization: await vapidHeader(sub.endpoint, keys), TTL: "43200", Urgency: "normal", "Content-Encoding": "aes128gcm", "Content-Type": "application/octet-stream" },
    body: await encrypt(sub, JSON.stringify(msg)),
  });
  return { status: r.status, text: r.ok ? "" : (await r.text()).slice(0, 200) };
}

// ---------- what Lehrer says ----------
// progress.data is the app's state: days[date] = { lessons, sec, rev, spoke }, where = today's lesson (weekly: the check-in is due)
type Day = { lessons?: number; sec?: number; rev?: number; spoke?: number };
type Data = { days?: Record<string, Day>; where?: { level?: string; lesson?: number; title?: string; check?: string; remedial?: string; placed?: boolean; weekly?: boolean } };
const GOAL_SINCE = "2026-10-04";
const met = (d: Data, k: string) => { const x = d.days?.[k]; return !!x && ((x.lessons || 0) > 0 || (x.sec || 0) >= 600 || (k < GOAL_SINCE && !!(x.rev || x.spoke))); };
const shift = (k: string, n: number) => { const t = new Date(k + "T12:00:00Z"); t.setUTCDate(t.getUTCDate() + n); return t.toISOString().slice(0, 10); };
export function streakBefore(d: Data, k: string) { let n = 0; while (met(d, shift(k, -1 - n))) n++; return n; }
export function message(d: Data, k: string) {
  const w = d.where || {}, n = streakBefore(d, k), dayNo = Math.floor(Date.parse(k) / 864e5);
  const what = !w.placed ? "Heute finden wir dein Level: ein kurzer Test, etwa 5 Minuten."
    : w.check ? `Heute ist dein ${w.check}-Test dran. Du schaffst das!`
    : w.remedial ? `Heute üben wir noch einmal ${w.remedial}, dann kommt der Test.`
    : `Weiter mit Lektion ${w.lesson}: ${w.title}${/[.?!]$/.test(w.title || "") ? "" : "."} Etwa 10 Minuten.`;
  const open = n >= 2 ? `Dein ${n}-Tage-Streak 🔥 wartet auf dich.` : n === 1 ? "Gestern hast du geübt. Mach heute weiter!" : ["Hallo Or! Zeit für Deutsch.", "Na, Or? Eine Lektion heute?", "Guten Abend, Or! Hast du 10 Minuten?"][dayNo % 3];
  const weekly = w.weekly ? " Heute auch: unser Wochenrückblick." : "";
  return { title: n >= 2 ? `Lehrer · 🔥 ${n}` : "Lehrer", body: `${open} ${what}${weekly}` };
}
// local date "YYYY-MM-DD" and minutes since midnight in a time zone
function localNow(tz: string) {
  let p: Record<string, string> = {};
  try { p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date()).map((x) => [x.type, x.value])); }
  catch (_) { return localNow("Europe/Berlin"); }
  return { date: `${p.year}-${p.month}-${p.day}`, min: +p.hour * 60 + +p.minute };
}
const toMin = (hhmm: string) => { const [h, m] = String(hhmm || "19:00").split(":").map(Number); return (h || 0) * 60 + (m || 0); };

type Row = { endpoint: string; user_id: string; sub: Sub; remind_at: string; tz: string; last_sent: string | null; app_url: string | null };
async function tick() {
  const subs: Row[] = await db("push_subs?select=*");
  let keys: Keys | null = null, sent = 0;
  const data: Record<string, Data> = {};
  for (const s of subs) {
    const now = localNow(s.tz), at = toMin(s.remind_at);
    if (s.last_sent === now.date || now.min < at || now.min > at + 180) continue;
    if (!(s.user_id in data)) data[s.user_id] = ((await db(`progress?select=data&user_id=eq.${s.user_id}`))[0] || {}).data || {};
    const d = data[s.user_id];
    await db(`push_subs?endpoint=eq.${encodeURIComponent(s.endpoint)}`, { method: "PATCH", body: JSON.stringify({ last_sent: now.date }) });
    if (met(d, now.date)) continue; // today's lesson is done: no reminder
    keys ||= await vapidKeys();
    const r = await sendPush(s.sub, { ...message(d, now.date), url: s.app_url || APP_URL }, keys);
    if (r.status === 404 || r.status === 410) await db(`push_subs?endpoint=eq.${encodeURIComponent(s.endpoint)}`, { method: "DELETE" });
    else if (r.status >= 400) console.error("push failed", r.status, r.text);
    else sent++;
  }
  return { checked: subs.length, sent };
}

if (typeof Deno !== "undefined") Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);
  let body: { action?: string; sub?: Sub; at?: string; tz?: string; url?: string; endpoint?: string };
  try { body = await req.json(); } catch (_) { return json({ error: "Bad request" }, 400); }
  try {
    if (body.action === "tick") return json(await tick());
    // everything else is for Or's signed-in account (the gateway has checked the token's signature)
    const token = (req.headers.get("authorization") || "").replace(/^Bearer /, "");
    let claims: { email?: string; sub?: string } = {};
    try { claims = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))); } catch (_) { /* no token */ }
    if (String(claims.email || "").toLowerCase() !== ALLOWED || !claims.sub) return json({ error: "This app is private." }, 403);
    if (body.action === "key") return json({ key: (await vapidKeys()).public_key });
    if (body.action === "subscribe") {
      const s = body.sub;
      if (!s?.endpoint || !s.keys?.p256dh || !s.keys?.auth || !/^https:\/\//.test(s.endpoint)) return json({ error: "Bad subscription" }, 400);
      const at = /^\d{1,2}:\d{2}$/.test(body.at || "") ? body.at : "19:00";
      const row = { endpoint: s.endpoint, user_id: claims.sub, sub: { endpoint: s.endpoint, keys: s.keys }, remind_at: at, tz: body.tz || "Europe/Berlin", app_url: body.url || null };
      // a new time today may still fire today; saving the same time again doesn't resend
      const old: Row[] = await db(`push_subs?select=remind_at,last_sent&endpoint=eq.${encodeURIComponent(s.endpoint)}`);
      await db("push_subs?on_conflict=endpoint", { method: "POST", headers: { Prefer: "resolution=merge-duplicates" }, body: JSON.stringify({ ...row, last_sent: old[0] && old[0].remind_at === at ? old[0].last_sent : null }) });
      return json({ ok: true });
    }
    if (body.action === "unsubscribe") {
      if (body.endpoint) await db(`push_subs?endpoint=eq.${encodeURIComponent(body.endpoint)}&user_id=eq.${claims.sub}`, { method: "DELETE" });
      return json({ ok: true });
    }
    if (body.action === "test") {
      const rows: Row[] = await db(`push_subs?select=*&user_id=eq.${claims.sub}&endpoint=eq.${encodeURIComponent(body.endpoint || "")}`);
      if (!rows.length) return json({ error: "This device isn't signed up for reminders." }, 404);
      const d = ((await db(`progress?select=data&user_id=eq.${claims.sub}`))[0] || {}).data || {};
      const r = await sendPush(rows[0].sub, { ...message(d, localNow(rows[0].tz).date), url: rows[0].app_url || APP_URL }, await vapidKeys());
      return r.status < 300 ? json({ ok: true }) : json({ error: `The push service said ${r.status}. ${r.text}` }, 502);
    }
    return json({ error: "Unknown action" }, 400);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error(msg);
    if (/relation .* does not exist|push_subs|push_keys/.test(msg) && /42P01|does not exist|404/.test(msg)) return json({ error: "not_configured" }, 503);
    return json({ error: msg.slice(0, 200) }, 500);
  }
});
