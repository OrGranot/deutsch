// Sprechstunde: German trainer A1 to B2. Plain JS, no build step, progress in localStorage.
(() => {
"use strict";

// ---------- helpers ----------
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const MIN = 60e3, DAY = 864e5;
const today = () => dkey(new Date());
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const ICON = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
  cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="14" height="15" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v13"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  repeat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>'
};

// ---------- content ----------
const WORDS = {};
const LEVELS = ["A1", "A2", "B1", "B2"];
LESSONS.forEach(L => {
  L.level ||= "A1";
  L.words = [];
  L.vocab.trim().split("\n").forEach(line => {
    let [de, pl, en, exRaw] = line.split("|").map(s => (s || "").trim());
    if (!de) return;
    const id = de, hint = (de.match(/\(([^)]*)\)/) || [])[1];
    if (hint) { de = de.replace(/\s*\([^)]*\)/g, "").trim(); en += ` (${/^\+/.test(hint) ? hint : "+ " + hint})`; }
    const m = de.match(/^(der|die|das) (.+)$/);
    const [ex, exEn] = exRaw ? exRaw.split(" = ") : [];
    const w = { id, de, en, lesson: L.id, art: m ? m[1] : null, word: m ? m[2] : de, pl: pl || "", plOnly: pl === "Pl.", ex, exEn };
    WORDS[w.id] = w; L.words.push(w.id);
  });
});
const LESSON = Object.fromEntries(LESSONS.map(L => [L.id, L]));
const gClass = w => w.art ? "g-" + w.art : "";
const deHTML = w => w.art ? `<span class="${gClass(w)}">${w.art}</span> ${esc(w.word)}` : esc(w.de);
const plText = w => !w.art ? "" : w.plOnly ? "plural only" : (w.pl === "—" || !w.pl) ? "no plural" : "Pl. die " + w.pl;

// ---------- state ----------
const KEY = "sprechstunde-a1-v1";
const fresh = () => ({ cards: {}, sents: {}, lessons: { 1: { started: Date.now() } }, ex: {}, gender: {}, shadow: {}, sounds: {}, days: {}, settings: { newPerDay: 12, rate: 0.9, voice: "" } });
let S;
try { S = JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch (e) { S = fresh(); }
S = Object.assign(fresh(), S);
// scores saved before lesson steps existed still count as a passed exercise step
for (const [id, sc] of Object.entries(S.ex || {})) { const L = LESSONS.find(x => x.id === +id); if (L && sc >= Math.ceil(L.ex.length * 0.7)) { const st = (S.lessons[id] ||= {}); st.parts ||= {}; st.parts.ex ||= Date.now(); } }
const save = () => { S.updatedAt = Date.now(); try { S.where = whereNow(); } catch (e) {} try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} queueSync(); };
const day = () => (S.days[today()] ||= { rev: 0, ok: 0, nw: 0, spoke: 0 });
const started = () => LESSONS.filter(L => S.lessons[L.id]?.started).map(L => L.id);
const card = id => S.cards[id] || { s: "new", step: 0, due: 0, ivl: 0, ease: 2.5, reps: 0, fails: 0, lapses: 0, cons: 0 };
// ---------- daily goal and streak ----------
// The daily goal is one lesson, or 10 minutes of practice. A day counts toward the streak when the
// goal is met; days from before the goal existed count if anything was practised.
const GOAL_MIN = 10, GOAL_SINCE = "2026-10-04";
const dkey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const daysAgo = n => { const d = new Date(); d.setDate(d.getDate() - n); return d; };
const goalMet = k => { const x = S.days[k]; return !!x && ((x.lessons || 0) > 0 || (x.sec || 0) >= GOAL_MIN * 60 || (k < GOAL_SINCE && !!(x.rev || x.spoke))); };
const runFrom = n => { let r = 0; while (goalMet(dkey(daysAgo(n + r)))) r++; return r; };
// today counts once the goal is met; until then the streak still stands on yesterday
function streak() { return goalMet(today()) ? runFrom(0) : runFrom(1); }
// a streak that ended yesterday (nothing yesterday, but the days before were a run)
const lostStreak = () => goalMet(today()) || goalMet(dkey(daysAgo(1))) ? 0 : runFrom(2);
const bestStreak = () => Math.max(S.best || 0, streak());
const goalPct = () => goalMet(today()) ? 100 : Math.min(95, Math.round(100 * (day().sec || 0) / (GOAL_MIN * 60)));
function goalReached() {
  const n = streak(), record = n > 2 && n > (S.best || 0); S.best = Math.max(S.best || 0, n); save();
  celebrate({ title: "Tagesziel geschafft!", big: true, sub: n > 1 ? `🔥 ${n} Tage in Folge. ${record ? "Your best streak so far. " : ""}See you tomorrow.` : "🔥 Day 1 of your streak. Come back tomorrow to make it two." });
}
// call around anything that adds practice to today; celebrates the moment the goal is reached
// practice time: counted while a practice screen is open and in use (a tap or key in the last 2 minutes)
let lastAct = Date.now();
["pointerdown", "keydown"].forEach(e => document.addEventListener(e, () => { lastAct = Date.now(); }, true));
setInterval(() => {
  if (document.hidden || !["teach", "review", "speak", "sounds", "lehrer"].includes(view) || Date.now() - lastAct > 2 * MIN || document.querySelector(".celebrate")) return;
  const was = goalMet(today()), d = day(); d.sec = (d.sec || 0) + 15;
  if (d.sec % 60 === 0) save();
  if (!was && goalMet(today())) goalReached();
}, 15e3);

// ---------- spaced repetition ----------
// SM-2 style. Words you keep missing ("struggling") get their interval capped so they
// come back every few days until you get them right several times in a row.
const STEPS = [1, 10]; // learning steps in minutes
const struggling = c => c.s !== "new" && ((c.fails >= 3 && c.cons < 4) || (c.lapses >= 2 && c.cons < 4));
function schedule(c0, r, now = Date.now()) {
  const c = { ...c0 }; c.reps++; c.last = now;
  if (r === 0) { c.fails++; c.cons = 0; } else if (r >= 2) c.cons++;
  if (c.s === "new") { c.s = "learn"; c.step = 0; }
  const grad = ivl => { c.s = "rev"; c.ivl = ivl; c.due = now + ivl * DAY; c.step = 0; delete c.relearn; };
  if (c.s === "learn") {
    if (r === 0) { c.step = 0; c.due = now + STEPS[0] * MIN; }
    else if (r === 1) c.due = now + (c.step === 0 ? 5 : STEPS[c.step]) * MIN;
    else if (r === 2) { c.step++; if (c.step >= STEPS.length) grad(c.relearn || 1); else c.due = now + STEPS[c.step] * MIN; }
    else grad(c.relearn ? c.relearn + 1 : struggling(c) ? 2 : 4);
    return c;
  }
  // review card
  if (r === 0) { c.lapses++; c.ease = Math.max(1.3, c.ease - 0.2); c.relearn = Math.max(1, Math.round(c.ivl * 0.4)); c.s = "learn"; c.step = 1; c.due = now + STEPS[1] * MIN; return c; }
  const late = Math.max(0, (now - c.due) / DAY);
  let ivl;
  if (r === 1) { ivl = c.ivl * 1.2; c.ease = Math.max(1.3, c.ease - 0.15); }
  else if (r === 2) ivl = (c.ivl + late / 2) * c.ease;
  else { ivl = (c.ivl + late) * c.ease * 1.3; c.ease += 0.15; }
  ivl = Math.max(ivl, c.ivl + 1);
  if (struggling(c)) ivl = Math.min(ivl, 1 + c.cons * 2);
  ivl = Math.min(365, Math.round(ivl * (0.95 + Math.random() * 0.1)));
  c.ivl = ivl; c.due = now + ivl * DAY;
  return c;
}
const fmtIvl = ms => ms < 60 * MIN ? Math.max(1, Math.round(ms / MIN)) + " min" : ms < DAY ? Math.round(ms / 3600e3) + " h" : ms < 30 * DAY ? Math.round(ms / DAY) + " d" : (ms / (30 * DAY)).toFixed(1) + " mo";
function deckIds() { return started().flatMap(id => LESSON[id].words); }
function buildQueue() {
  const now = Date.now(), ids = deckIds();
  const due = ids.filter(id => S.cards[id] && S.cards[id].s !== "new" && S.cards[id].due <= now + 5 * MIN);
  due.sort((a, b) => (struggling(card(b)) - struggling(card(a))) || (card(a).due - card(b).due));
  const newLeft = Math.max(0, S.settings.newPerDay - day().nw);
  const fresh = ids.filter(id => !S.cards[id]).slice(0, newLeft);
  const q = []; let n = 0;
  for (const id of due) { q.push(id); if (++n % 3 === 0 && fresh.length) q.push(fresh.shift()); }
  return q.concat(fresh);
}
function counts() {
  const ids = deckIds(), now = Date.now();
  const due = ids.filter(id => S.cards[id] && S.cards[id].due <= now + 5 * MIN).length;
  const unseen = ids.filter(id => !S.cards[id]).length;
  return { due, newToday: Math.min(unseen, Math.max(0, S.settings.newPerDay - day().nw)), unseen };
}

// ---------- text comparison ----------
const ONES = ["null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn"];
const TENS = ["", "", "zwanzig", "dreißig", "vierzig", "fünfzig", "sechzig", "siebzig", "achtzig", "neunzig"];
function numWord(n) {
  if (n < 20) return ONES[n];
  if (n < 100) { const o = n % 10; return (o ? (o === 1 ? "ein" : ONES[o]) + "und" : "") + TENS[Math.floor(n / 10)]; }
  if (n < 1000) { const h = Math.floor(n / 100), r = n % 100; return (h === 1 ? "ein" : ONES[h]) + "hundert" + (r ? numWord(r) : ""); }
  if (n < 10000) { const t = Math.floor(n / 1000), r = n % 1000; return (t === 1 ? "ein" : ONES[t]) + "tausend" + (r ? numWord(r) : ""); }
  return String(n);
}
function norm(s) {
  return String(s).toLowerCase()
    .replace(/(\d+)[.,](\d+)/g, "$1 $2")
    .replace(/\d+/g, d => numWord(+d))
    .replace(/['’`]/g, "")
    .replace(/[.,!?;:"„“”«»()\[\]\-–—…/]/g, " ")
    .replace(/ß/g, "ss").replace(/\s+/g, " ").trim();
}
const loose = s => norm(s).replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue");
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let p = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) { const c = [i]; for (let j = 1; j <= n; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = c; }
  return p[n];
}
const near = (a, b) => a === b || (a.length >= 4 && lev(loose(a), loose(b)) <= (a.length >= 8 ? 2 : 1));
// word-level alignment; returns matched flags for target tokens + score 0..1
function align(target, heard) {
  const t = target, h = heard, m = t.length, n = h.length;
  const L = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) L[i][j] = near(t[i], h[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  // st[i]: "ok" (exact), "close" (recognised as a similar word) or "miss"; got[i]: what was heard there
  const st = new Array(m).fill("miss"), got = new Array(m).fill("");
  const pairs = []; let i = 0, j = 0;
  while (i < m && j < n) { if (near(t[i], h[j])) { pairs.push([i, j]); i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
  let pi = 0, pj = 0;
  for (const [a, b] of [...pairs, [m, n]]) {
    // words in the gap before this anchor: pair up missed target words with stray heard words
    for (let x = pi, y = pj; x < a; x++, y++) if (y < b) got[x] = h[y];
    if (a < m) { st[a] = t[a] === h[b] ? "ok" : "close"; got[a] = h[b]; }
    pi = a + 1; pj = b + 1;
  }
  const pts = st.reduce((s, v) => s + (v === "ok" ? 1 : v === "close" ? 0.6 : 0), 0);
  return { st, got, hit: st.map(v => v !== "miss"), score: m ? (2 * pts) / (m + Math.max(n, 1)) : 0 };
}
// pronunciation tips for a word: which hard sounds it contains
function tipsFor(word) {
  const w = String(word).replace(/[^\p{L}]/gu, "");
  return SOUNDS.filter(s => s.id !== "len" && s.match.test(w)).slice(0, 2);
}

// ---------- speech ----------
const synth = window.speechSynthesis;
let voices = [];
const loadVoices = () => { voices = synth ? synth.getVoices().filter(v => /^de/i.test(v.lang)) : []; };
if (synth) { loadVoices(); synth.onvoiceschanged = () => { loadVoices(); if (view === "stats") render(); }; }
function pickVoice() {
  if (S.settings.voice) { const v = voices.find(v => v.voiceURI === S.settings.voice); if (v) return v; }
  return voices.find(v => /de-DE/i.test(v.lang) && /google|anna|helena|katja|petra|neural|natural/i.test(v.name)) || voices.find(v => /de-DE/i.test(v.lang)) || voices[0];
}
// Recorded audio: every word and sentence was pre-generated with a natural German voice
// (Thorsten, CC0). Clips live in per-lesson packs; device text-to-speech is only a fallback.
const audioKey = t => { let h = 0x811c9dc5; for (const c of String(t).trim()) { h ^= c.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(36); };
const AIDX = window.AUDIO_INDEX || {};
const packs = {};
function loadPack(id) {
  if (window.AUDIO_INLINE) return Promise.resolve(window.AUDIO_INLINE);
  return packs[id] ||= fetch(`audio/p${id}.json`).then(r => { if (!r.ok) throw r.status; return r.json(); }).catch(e => { delete packs[id]; throw e; });
}
let player = null;
const hasClip = text => audioKey(text) in AIDX;
async function playClip(text, rate) {
  const k = audioKey(text), pack = await loadPack(AIDX[k]);
  if (!pack[k]) throw "missing";
  if (player) player.pause();
  player = new Audio("data:audio/mpeg;base64," + pack[k]);
  player.preservesPitch = true; player.playbackRate = rate || S.settings.rate || 1;
  await player.play();
  return player;
}
function say(text, rate) {
  if (!S.settings.deviceVoice && hasClip(text)) { if (synth) synth.cancel(); playClip(text, rate).catch(() => sayDevice(text, rate)); return; }
  sayDevice(text, rate);
}
function sayDevice(text, rate) {
  if (!synth) return toast("This browser has no text-to-speech.");
  if (player) player.pause();
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text); u.lang = "de-DE";
  const v = pickVoice(); if (v) u.voice = v;
  u.rate = rate || S.settings.rate; synth.speak(u);
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let micBlocked = !SR, rec = null;
function listen(onInterim) {
  return new Promise((resolve, reject) => {
    if (!SR) return reject("unsupported");
    if (synth) synth.cancel();
    if (player) player.pause();
    rec = new SR(); rec.lang = "de-DE"; rec.interimResults = true; rec.maxAlternatives = 5; rec.continuous = false;
    let finals = [], interim = "";
    rec.onresult = e => {
      interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) finals = Array.from(r).map(a => a.transcript); else interim += r[0].transcript;
      }
      onInterim && onInterim(finals[0] || interim);
    };
    rec.onerror = e => { rec = null; reject(e.error); };
    rec.onend = () => { rec = null; resolve(finals.length ? finals : interim ? [interim] : []); };
    try { rec.start(); } catch (e) { reject("start"); }
  });
}
function micError(err) {
  if (err === "no-speech") return toast("I didn't hear anything. Tap the mic and speak.");
  if (err === "aborted") return;
  micBlocked = true;
  toast(err === "not-allowed" || err === "service-not-allowed" ? "Microphone is blocked here. Switched to typing." : "Speech recognition isn't available. Switched to typing.");
}

// ---------- ui state ----------
let view = "home", lessonId = 1, lessonTab = "start";
try { if (["lehrer", "stats"].includes(localStorage.getItem("sprechstunde-view"))) view = localStorage.getItem("sprechstunde-view"); } catch (e) {}
let sess = null;      // flashcard session
let gsess = null;     // gender drill
let sp = null;        // speaking session
let toastT;
function toast(msg) {
  let t = $(".toast"); if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.append(t); }
  t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 2600);
}
// ---------- rewards ----------
const PARTS = [["words", "Words"], ["grammar", "Grammar"], ["ex", "Exercises"], ["speak", "Speaking"]];
const lessonState = id => (S.lessons[id] ||= {});
const partsDone = id => PARTS.filter(([k]) => lessonState(id).parts?.[k]).length;
const stars = id => { const L = LESSON[id], b = S.ex[id]; if (b == null) return 0; const r = b / L.ex.length; return r === 1 ? 3 : r >= 0.8 ? 2 : r >= 0.5 ? 1 : 0; };
const starHTML = n => `<span class="stars" aria-label="${n} of 3 stars">${[0, 1, 2].map(i => `<span class="${i < n ? "on" : ""}">★</span>`).join("")}</span>`;
function addXP(n, label) {
  if (!n) return;
  const d = day(), before = d.xp || 0;
  d.xp = before + n; S.xp = (S.xp || 0) + n; save();
  popXP(n, label);
}
function popXP(n, label) {
  const el = document.createElement("div"); el.className = "xppop"; el.textContent = `+${n} XP${label ? " · " + label : ""}`;
  document.body.append(el); setTimeout(() => el.remove(), 1600);
}
function chime(big) {
  try {
    const ac = chime.ac ||= new (window.AudioContext || window.webkitAudioContext)();
    const notes = big ? [523.25, 659.25, 783.99, 1046.5] : [659.25, 987.77];
    notes.forEach((f, i) => { const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + i * 0.11; o.type = "triangle"; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45); o.connect(g).connect(ac.destination); o.start(t); o.stop(t + 0.5); });
  } catch (e) {}
}
function confetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = document.createElement("canvas"); c.className = "confetti"; document.body.append(c);
  const ctx = c.getContext("2d"), W = c.width = innerWidth, H = c.height = innerHeight;
  const cols = ["#2a62c9", "#cc2f47", "#1d8551", "#e3a21a", "#7a4bd6"];
  const ps = Array.from({ length: 140 }, () => ({ x: W / 2 + (Math.random() - 0.5) * 80, y: H * 0.35, vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 4, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6, va: (Math.random() - 0.5) * 0.4 }));
  let t = 0;
  (function f() { ctx.clearRect(0, 0, W, H); for (const p of ps) { p.vy += 0.35; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.restore(); } if (++t < 150) requestAnimationFrame(f); else c.remove(); })();
}
// overlay with title, stars and next action
const celQueue = [];
function closeCel() { document.querySelector(".celebrate")?.remove(); const n = celQueue.shift(); if (n) setTimeout(() => celebrate(n), 250); }
function celebrate(opts) {
  if (document.querySelector(".celebrate")) { celQueue.push(opts); return; }
  const { title, sub, starsN, actions = "", big } = opts;
  chime(big); confetti();
  const o = document.createElement("div"); o.className = "celebrate"; o.setAttribute("role", "dialog"); o.setAttribute("aria-modal", "true");
  o.innerHTML = `<div class="celebrate-box"><div class="celebrate-title">${esc(title)}</div>${starsN != null ? `<div class="bigstars">${starHTML(starsN)}</div>` : ""}<div class="celsub">${sub}</div><div class="row" style="justify-content:center">${actions}<button class="btn ${actions ? "" : "primary"}" data-act="closeCelebrate" autofocus>${actions ? "Close" : "Weiter"}</button></div></div>`;
  document.body.append(o); o.querySelector("[autofocus]")?.focus();
}
function finishPart(id, part) {
  const st = lessonState(id); st.parts ||= {};
  if (st.parts[part]) return false;
  st.parts[part] = Date.now(); save();
  const L = LESSON[id];
  if (partsDone(id) === PARTS.length && !st.done) {
    st.done = Date.now(); save(); addXP(50, "lesson");
    const next = LESSON[id + 1];
    celebrate({ title: `Lektion ${id} geschafft!`, starsN: stars(id), big: true, sub: `You finished every part of "${esc(L.title)}". Its words keep coming back in your cards so you don't forget them.`, actions: next ? `<button class="btn primary" data-act="openLesson" data-id="${next.id}">Start Lektion ${next.id}: ${esc(next.title)}</button>` : "" });
  } else { addXP(10, "step done"); chime(false); }
  return true;
}
const nextPart = part => { const i = PARTS.findIndex(([k]) => k === part); return PARTS[i + 1]; };
function stepFooter(L, part, label = "I've done this step") {
  const st = lessonState(L.id), done = st.parts?.[part], nx = nextPart(part);
  return `<div class="stepfoot">${done ? `<span class="donetag">✓ Step done</span>` : `<button class="btn primary" data-act="finishPart" data-part="${part}">✓ ${label}</button>`}${nx ? `<button class="btn" data-act="ltab" data-tab="${nx[0]}">Next: ${nx[1]} →</button>` : ""}</div>`;
}

const playBtn = (text, label = "Listen") => `<button class="icon-btn" data-act="say" data-text="${esc(text)}" aria-label="${label}">${ICON.play}</button>`;

// ---------- views ----------
function render() {
  const tabs = [["home", "Lernen", ICON.home], ["lehrer", "Lehrer", ICON.chat], ["stats", "Fortschritt", ICON.chart]];
  if (CFG && !auth) { $("#app").innerHTML = `<main id="main">${vSignin()}</main>`; const f = $("[autofocus]"); if (f) f.focus(); return; }
  $("#app").innerHTML = `
  <header class="top"><div class="top-in">
    <div class="brand">Sprechstunde <small>${curLesson().level}</small></div>
    <nav class="tabs" aria-label="Sections" ${view === "teach" ? "hidden" : ""}>${tabs.map(([k, l, i]) => `<button class="tab" data-act="nav" data-view="${k}" ${view === k || (k === "home" && ["review", "speak", "sounds"].includes(view)) || (k === "stats" && view === "course") ? 'aria-current="page"' : ""}>${i}<span>${l}</span></button>`).join("")}</nav>
  </div></header>
  <main id="main">${({ home: vHome, course: vCourse, review: vReview, speak: vSpeak, stats: vStats, sounds: vSounds, teach: vTeach, lehrer: vLehrer })[view]()}</main>`;
  const f = $("[autofocus]"); if (f) f.focus();
}

function vHome() {
  const d = day(), st = streak(), L = curLesson(), rd = lessonReady(L), c = course();
  const hour = new Date().getHours();
  const greet = hour < 11 ? "Guten Morgen, Or!" : hour < 18 ? "Guten Tag, Or!" : "Guten Abend, Or!";
  const doneToday = (d.lessons || 0) > 0;
  let label, items, btn, note;
  if (!c.placed) {
    label = "First: find your level"; btn = "Start the check";
    items = ["About 10 questions per level, starting with A1", "80% on a level and we try the next one", "Then I plan your lessons from there"];
    note = "About 5 minutes. No mic needed.";
  } else if (c.check) {
    label = `Today: ${c.check} level check`; btn = "Start the check";
    items = ["A short warm-up", `12 questions from all of ${c.check}`, `80% and you move on${nextLevelOf(c.check) ? " to " + nextLevelOf(c.check) : ""}`];
    note = "If it's not 80% yet, I'll give you focused practice first.";
  } else {
    const { plan, tasks } = planPreview();
    label = `${doneToday ? "Today's lesson is done. Another one?" : "Today's lesson"} · ${plan.remedial ? `Strengthen ${plan.remedial}` : `${L.level} · Lektion ${L.id}: ${esc(L.title)}`}`;
    btn = doneToday ? "Start another lesson" : "Start";
    items = pathSteps(tasks);
    if (plan.remedial) items.push(`${c.remedial.left} practice lesson${c.remedial.left > 1 ? "s" : ""}, then the ${plan.remedial} check again`);
    note = (plan.pace ? plan.pace + " " : "") + `About 15 minutes. I check every answer${micBlocked ? " (here by typing; the microphone is blocked on this page)" : ""}.`;
  }
  const met = goalMet(today()), lost = lostStreak(), mins = Math.floor((d.sec || 0) / 60);
  const week = [...Array(7)].map((_, i) => daysAgo(6 - i)).map(x => ({ k: dkey(x), l: x.toLocaleDateString("de-DE", { weekday: "short" }).slice(0, 2) }));
  return `
  <section class="hero"><h1>${greet}</h1><p class="muted">${met ? `Today's goal is done. ${st > 1 ? `${st} days in a row.` : ""}` : st ? `Day ${st + 1} in a row is one lesson away.` : "One lesson a day. I'll tell you what to do."}</p></section>
  ${weeklyHome()}
  <section class="panel today">
    <span class="label">${label}</span>
    ${c.placed && !c.check ? teacherSays(doneToday ? "Good work today. If you want more, I've planned another lesson." : "Here's today's plan. Tap Start and I'll take you through it, one step at a time.") : ""}
    <ol class="plan ${c.placed && !c.check ? "path" : ""}">${items.map(x => `<li>${x}</li>`).join("")}</ol>
    <button class="btn primary big" data-act="teachStart" autofocus>${ICON.mic} ${btn}</button>
    <p class="small muted">${note}</p>
  </section>
  <section class="goal panel"><div class="ring ${met ? "met" : ""}" style="--p:${goalPct()}"><b class="num">${st}</b><span class="small muted">🔥 ${st === 1 ? "day" : "days"}</span></div>
    <div class="stack" style="gap:6px;min-width:0"><h3>${met ? "Today's goal: done ✓" : "Today's goal: one lesson"}</h3>
    <p class="small">${met ? "Your streak is safe. See you tomorrow." : st ? `Finish one lesson (or ${GOAL_MIN} minutes of practice) to keep your ${st}-day streak.` : lost > 1 ? `Your ${lost}-day streak ended yesterday. One lesson today starts a new one.` : `One lesson (or ${GOAL_MIN} minutes of practice) every day builds a streak.`}</p>
    <div class="week" aria-label="This week">${week.map(x => `<span class="${goalMet(x.k) ? "on" : ""} ${x.k === today() ? "now" : ""}"><i>${goalMet(x.k) ? "🔥" : ""}</i>${x.l}</span>`).join("")}</div>
    <p class="small muted">${mins ? `${mins} min today · ` : ""}best streak ${bestStreak()} · ${S.xp || 0} XP</p></div></section>
  ${remindHome()}
  ${c.placed ? `<section class="panel"><div class="row between"><span class="label">Your way to B2</span><b class="num">${journey().pct}%</b></div>${journeyHTML()}
    <p class="small muted">Lektion ${L.id} of ${LESSONS.length}. ${nextMilestone()}</p>${levelPath(L)}
    ${!c.check && !c.remedial ? `<div class="partdots small">${[["Words", rd.words], ["Grammar", rd.gram], ["Exercises", rd.ex], ...(chainsOf(L.id).length ? [["Sentences", rd.build]] : []), ["Speaking", rd.talk]].map(([l, ok]) => `<span class="${ok ? "on" : ""}">${ok ? "✓" : "○"} ${l}</span>`).join(" ")}</div>` : ""}</section>` : ""}`;
}
// ---------- the way to B2 ----------
// one bar for the whole course, a segment per level; finishing a level (the level check, or
// passing it in the placement) is a milestone
const lessonDone = id => !!(S.lessons[id]?.done || S.lessons[id]?.skipped);
const levelPassed = lv => !!(course().passed?.[lv] || levelLessons(lv).every(x => S.lessons[x.id]?.skipped));
function journey() { const n = LESSONS.filter(L => lessonDone(L.id)).length; return { n, pct: Math.round(100 * n / LESSONS.length) }; }
function journeyHTML(hi) {
  return `<div class="journey" role="img" aria-label="${journey().pct}% of the way from A1 to B2">${LEVELS.map(lv => { const ls = levelLessons(lv), nd = ls.filter(x => lessonDone(x.id)).length, ok = levelPassed(lv);
    return `<div class="jseg ${ok ? "passed" : ""} ${lv === hi ? "hi" : ""}" style="flex:${ls.length}"><span class="bar"><i style="width:${Math.round(100 * nd / ls.length)}%"></i></span><span class="jlv">${ok ? "✓ " : ""}${lv}</span></div>`; }).join("")}</div>`;
}
function nextMilestone() {
  const c = course(), L = curLesson(), lv = L.level;
  if (levelPassed("B2")) return "You've reached B2. Herzlichen Glückwunsch!";
  if (c.check) return `Next milestone: pass the ${c.check} level check.`;
  if (c.remedial) return `Next milestone: ${c.remedial.lv}, after ${c.remedial.left} practice lesson${c.remedial.left > 1 ? "s" : ""} and the check.`;
  const left = levelLessons(lv).filter(x => !lessonDone(x.id)).length;
  return `Next milestone: ${lv} done, ${left} lesson${left === 1 ? "" : "s"} and the level check to go.`;
}
const weeklyHome = () => "";
// ---------- daily reminder from Lehrer (push notification, hosted build only) ----------
// iPhone: works in the app opened from the Home Screen (iOS 16.4+). The server side is the
// "erinnerung" Supabase function; it sends one note a day after the chosen time, only when
// today's lesson isn't done. The subscription belongs to this device, so it's kept locally.
const RKEY = "sprechstunde-remind";
let remind = {}; try { remind = JSON.parse(localStorage.getItem(RKEY)) || {}; } catch (e) {}
const saveRemind = () => { try { localStorage.setItem(RKEY, JSON.stringify(remind)); } catch (e) {} };
const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const standalone = () => !!(navigator.standalone || matchMedia("(display-mode: standalone)").matches);
const pushOk = () => !!(CFG && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && (location.protocol === "https:" || location.hostname === "localhost"));
function whereNow() { const c = course(), L = curLesson(); return { placed: !!c.placed, level: L.level, lesson: L.id, title: L.title, check: c.check || null, remedial: c.remedial ? c.remedial.lv : null }; }
async function remindFn(body) {
  if (!(await freshToken())) throw new Error("Sign in first.");
  const r = await fetch(CFG.url + "/functions/v1/erinnerung", { method: "POST", headers: { apikey: CFG.key, Authorization: "Bearer " + auth.access_token, "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const d = await r.json().catch(() => ({}));
  if (r.status === 404 || d.error === "not_configured") throw new Error("The reminder isn't set up on the server yet.");
  if (!r.ok) throw new Error(d.error || d.message || "Error " + r.status);
  return d;
}
const keyBytes = k => Uint8Array.from(atob(k.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((k.length + 3) % 4)), c => c.charCodeAt(0));
async function remindOn(at) {
  remind.busy = true; remind.err = null; render();
  try {
    const perm = await Notification.requestPermission();
    if (perm !== "granted") throw new Error(isIOS ? "Notifications are off for this app. Turn them on in Settings › Notifications › Deutsch, then try again." : "Notifications are blocked for this page. Allow them in the browser's site settings, then try again.");
    const reg = await navigator.serviceWorker.register("sw.js"); await navigator.serviceWorker.ready;
    const { key } = await remindFn({ action: "key" });
    let sub = await reg.pushManager.getSubscription();
    if (sub && remind.key && remind.key !== key) { await sub.unsubscribe(); sub = null; }
    sub ||= await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(key) });
    await remindFn({ action: "subscribe", sub: sub.toJSON(), at, tz: Intl.DateTimeFormat().resolvedOptions().timeZone, url: location.origin + location.pathname });
    remind = { on: true, at, endpoint: sub.endpoint, key, synced: today() }; saveRemind();
    toast(`Done. I'll remind you at ${at} if today's lesson isn't done yet.`);
  } catch (e) { remind.err = e.message || String(e); }
  remind.busy = false; render();
}
async function remindOff() {
  try { const reg = await navigator.serviceWorker.getRegistration(); const sub = reg && await reg.pushManager.getSubscription(); if (sub) { await remindFn({ action: "unsubscribe", endpoint: sub.endpoint }).catch(() => {}); await sub.unsubscribe(); } } catch (e) {}
  remind = { off: true }; saveRemind(); toast("Reminders are off on this device."); render();
}
async function remindTest() {
  try { await remindFn({ action: "test", endpoint: remind.endpoint }); toast("Sent. It should arrive in a few seconds."); } catch (e) { toast(e.message); }
}
// once a day, make sure the server still has this device's current subscription
async function remindRefresh() {
  if (!remind.on || remind.synced === today() || !pushOk() || !auth) return;
  try {
    const reg = await navigator.serviceWorker.getRegistration(); let sub = reg && await reg.pushManager.getSubscription();
    if (!sub) { if (Notification.permission !== "granted") { remind = {}; saveRemind(); return; } sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(remind.key) }); }
    await remindFn({ action: "subscribe", sub: sub.toJSON(), at: remind.at, tz: Intl.DateTimeFormat().resolvedOptions().timeZone, url: location.origin + location.pathname });
    remind.endpoint = sub.endpoint; remind.synced = today(); saveRemind();
  } catch (e) {}
}
const timeIn = (v = "19:00") => `<input id="remindAt" class="field" type="time" value="${esc(v)}" step="900" aria-label="Reminder time" style="width:auto">`;
// the one-time offer on the home screen
function remindHome() {
  if (!CFG || !auth || remind.on || remind.off || !course().placed) return "";
  if (isIOS && !standalone()) return `<section class="panel today">${teacherSays("I can remind you every day on your phone. That works in the app on your Home Screen: tap Share, then “Add to Home Screen”, and open Deutsch from there.")}<button class="linkbtn small" data-act="remindNo">Not now</button></section>`;
  if (!pushOk()) return "";
  return `<section class="panel today">${teacherSays("Shall I remind you every day? Pick a time. If today's lesson isn't done by then, I'll send you a short note.")}
    <div class="row" style="flex-wrap:wrap">${timeIn(remind.at)}<button class="btn primary" data-act="remindOn" ${remind.busy ? "disabled" : ""}>${remind.busy ? "One moment…" : "Remind me"}</button><button class="linkbtn small" data-act="remindNo">Not now</button></div>
    ${remind.err ? `<p class="note small">${esc(remind.err)}</p>` : ""}</section>`;
}
// settings row in Fortschritt
function remindSettings() {
  if (!CFG || !auth) return "";
  let body;
  if (remind.on) body = `<p class="small">Every day at <b>${esc(remind.at)}</b> on this device, when today's lesson isn't done yet.</p><div class="row" style="flex-wrap:wrap">${timeIn(remind.at)}<button class="btn" data-act="remindOn" ${remind.busy ? "disabled" : ""}>Change time</button><button class="btn" data-act="remindTest">Send a test</button><button class="btn ghost" data-act="remindOff">Turn off</button></div>`;
  else if (isIOS && !standalone()) body = `<p class="small muted">Open the app from your Home Screen to turn on reminders (Share › Add to Home Screen).</p>`;
  else if (!pushOk()) body = `<p class="small muted">This browser can't receive reminders.</p>`;
  else body = `<p class="small">A short note from me if today's lesson isn't done by this time.</p><div class="row" style="flex-wrap:wrap">${timeIn(remind.at)}<button class="btn" data-act="remindOn" ${remind.busy ? "disabled" : ""}>Remind me</button></div>`;
  return `<section class="panel"><h2>Daily reminder</h2>${body}${remind.err ? `<p class="note small">${esc(remind.err)}</p>` : ""}</section>`;
}
// today's steps for the home screen, read from the planned lesson
const PART = { "Aufwärmen": "Warm-up", "Neue Wörter": "New words", "Grammatik": "Grammar", "Bauen": "Build sentences", "Sprechen": "Speaking", "Gespräch": "Conversation with Lehrer", "Wiederholung": "Review" };
function pathSteps(tasks) {
  const parts = [];
  let cur = null;
  for (const t of tasks) {
    if (t.type === "intro") { cur = parts.find(p => p.part === t.part); if (!cur) parts.push(cur = { part: t.part, title: t.title, n: {} }); }
    else if (cur && t.type !== "summary") cur.n[t.type] = (cur.n[t.type] || 0) + 1;
  }
  return parts.map(({ part, title, n }) => {
    const name = `<b>${PART[part] || esc(part)}</b>`;
    if (part === "Aufwärmen") return `${name}: ${[n.recall && `${n.recall} words`, n.build && `${n.build} sentence${n.build > 1 ? "s" : ""}`].filter(Boolean).join(" and ")} from before`;
    if (part === "Neue Wörter") return `${name}: ${n.learn || 0} to learn and recall`;
    if (part === "Grammatik") return `${name}: ${esc(title)}`;
    if (part === "Bauen") return `${name}: ${n.build} from English, out loud`;
    if (part === "Sprechen") return `${name}: repeat after me, answer questions`;
    if (part === "Gespräch") return `${name}: a short talk about today's topic`;
    return `${name}: ${esc(title)}`;
  });
}
function levelPath(L) {
  const ls = levelLessons(L.level);
  return `<div class="lpath" aria-label="${L.level} lessons">${ls.map(x => `<span class="${S.lessons[x.id]?.done || S.lessons[x.id]?.skipped ? "on" : x.id === L.id ? "cur" : ""}" title="Lektion ${x.id}: ${esc(x.title)}">${S.lessons[x.id]?.done || S.lessons[x.id]?.skipped ? "✓" : x.id}</span>`).join("")}</div>`;
}
function planPreview() { const keep = JSON.stringify(S); const r = planSession(); S = JSON.parse(keep); return r; }

// ----- course -----
function vCourse() {
  if (lessonId && view === "course" && lessonTab !== "list") return vLesson(LESSON[lessonId]);
  const cur = curLesson();
  return `<section class="hero"><h1>Kurs</h1><p class="muted">${LESSONS.length} lessons from A1 to B2, following the CEFR topics. Your daily lesson works through them in order; you're in ${cur.level}, Lektion ${cur.id}. Open any lesson to look things up.</p></section>
  ${LEVELS.filter(lv => LESSONS.some(L => L.level === lv)).map(lv => { const ls = LESSONS.filter(L => L.level === lv), nd = ls.filter(L => S.lessons[L.id]?.done).length; return `<h2 class="levelhead">${lv} <span class="small muted">${nd}/${ls.length} done</span></h2>
  <section class="stack">${ls.map(L => {
    const st = S.lessons[L.id] || {}, seen = L.words.filter(id => S.cards[id]).length;
    return `<button class="lesson ${st.done ? "done" : st.started ? "on" : ""}" data-act="openLesson" data-id="${L.id}">
      <span class="n">${st.done ? "✓" : L.id}</span><span><h3>${esc(L.title)}</h3><span class="muted small">${esc(L.en)}</span></span>
      <span class="stack" style="gap:4px;justify-items:end">${st.done ? `<span class="badge win">Geschafft</span>` : `<span class="small muted num">${partsDone(L.id)}/4 steps</span>`}<span class="partdots">${PARTS.map(([k, l]) => `<i class="${st.parts?.[k] ? "on" : ""}" title="${l}"></i>`).join("")}</span>${S.ex[L.id] != null ? starHTML(stars(L.id)) : ""}</span></button>`;
  }).join("")}</section>`; }).join("")}`;
}
function vLesson(L) {
  const st = S.lessons[L.id] || {};
  const tabs = [["start", "Overview"], ["words", "Words"], ["grammar", "Grammar"], ["ex", "Exercises"], ["speak", "Speaking"]];
  let body = "";
  if (lessonTab === "start") {
    body = `<div class="panel"><span class="label">By the end you can</span><ul style="margin:0;padding-left:1.2em;display:grid;gap:4px">${L.cando.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
      <p class="muted small">${L.words.length} words · ${L.grammar.length} grammar topics · ${L.ex.length} exercises · ${L.speak.length + L.shadow.length} speaking tasks</p>
      <div class="row">${st.started ? `<button class="btn primary" data-act="ltab" data-tab="words">Study the words</button>` : `<button class="btn primary" data-act="startLesson" data-id="${L.id}">Start lesson: add ${L.words.length} words to my cards</button>`}
      ${st.done ? `<span class="badge win">Geschafft</span>` : ""}</div>
</div>
      <div class="panel"><span class="label">Your path through this lesson</span>
        ${PARTS.map(([k, l], i) => `<button class="pathstep ${st.parts?.[k] ? "on" : ""}" data-act="ltab" data-tab="${k}"><span class="pn">${st.parts?.[k] ? "✓" : i + 1}</span><span><b>${l}</b><span class="small muted">${{ words: "Listen to each word and say it out loud", grammar: "Read the grammar for this lesson", ex: "Score at least " + Math.ceil(L.ex.length * 0.7) + "/" + L.ex.length + " to pass", speak: "Finish one round of speaking" }[k]}</span></span>${k === "ex" && S.ex[L.id] != null ? starHTML(stars(L.id)) : ""}</button>`).join("")}
        <p class="small muted">Finish all four to complete the lesson. After that, its words keep coming back in your daily cards.</p></div>`;
  } else if (lessonTab === "words") {
    body = `<div class="panel"><div class="row between"><p class="muted small">Tap the speaker, then say the word out loud with its article.</p>${st.started ? "" : `<button class="btn" data-act="startLesson" data-id="${L.id}">Add to my cards</button>`}</div>
      <div class="wordlist">${L.words.map(id => { const w = WORDS[id], c = S.cards[id]; return `<div class="word">${playBtn(w.de)}<div style="min-width:0"><div class="de">${deHTML(w)} ${c && struggling(c) ? '<span class="badge hard">tricky</span>' : ""}</div><div class="meta">${esc(w.en)}${plText(w) ? " · " + esc(plText(w)) : ""}</div>${w.ex ? `<div class="meta"><i>${esc(w.ex)}</i> ${esc(w.exEn || "")}</div>` : ""}</div></div>`; }).join("")}</div>${stepFooter(L, "words", "I've listened to all the words")}</div>`;
  } else if (lessonTab === "grammar") {
    body = L.grammar.map(g => `<article class="panel gram"><h2>${esc(g.t)}</h2>${g.html.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, "</table></div>")}</article>`).join("") + `<div class="panel">${stepFooter(L, "grammar", "I've read the grammar")}</div>`;
  } else if (lessonTab === "ex") {
    const best = S.ex[L.id];
    body = `<div class="panel"><div class="row between"><p class="small">${best != null ? `Your best: <b>${best}/${L.ex.length}</b> ${starHTML(stars(L.id))}` : `<span class="muted">Answer everything, then check. ${Math.ceil(L.ex.length * 0.7)}/${L.ex.length} passes this step.</span>`}</p><button class="btn ghost" data-act="resetEx">Try again</button></div>
      <div>${L.ex.map((e, i) => exHTML(e, i)).join("")}</div>
      <div class="row"><button class="btn primary" data-act="checkEx">Check answers</button><span id="exScore" class="fb"></span></div>
      ${lessonState(L.id).parts?.ex ? stepFooter(L, "ex") : ""}</div>`;
  } else if (lessonTab === "speak") {
    body = `<div class="panel"><p>Speaking for this lesson: ${L.shadow.length} sentences to repeat and ${L.speak.length} questions to answer.</p>
      <div class="row"><button class="btn primary" data-act="startSpeak" data-kind="shadow" data-lesson="${L.id}">${ICON.repeat} Repeat after me</button><button class="btn primary" data-act="startSpeak" data-kind="talk" data-lesson="${L.id}">${ICON.chat} Answer questions</button></div></div>
      <div class="panel"><span class="label">Questions in this lesson</span>${L.speak.map(s => `<div class="model">${playBtn(s.q)}<span><b>${esc(s.q)}</b> <span class="muted small">${esc(s.en)}</span></span></div>`).join("")}</div>
      ${lessonState(L.id).parts?.speak ? `<div class="panel"><span class="donetag">✓ Speaking done</span></div>` : `<p class="small muted">Finish one round of either drill to complete this step.</p>`}`;
  }
  return `<div class="row"><button class="btn ghost" data-act="ltab" data-tab="list">${ICON.back} All lessons</button></div>
  <section class="hero"><span class="label">Lektion ${L.id}</span><h1>${esc(L.title)}</h1><p class="muted">${esc(L.en)}</p></section>
  <nav class="subtabs" aria-label="Lesson parts">${tabs.map(([k, l]) => `<button class="subtab" data-act="ltab" data-tab="${k}" aria-current="${lessonTab === k}">${st.parts?.[k] ? "✓ " : ""}${l}</button>`).join("")}</nav>
  ${body}`;
}
function exHTML(e, i) {
  if (e.type === "mc") return `<div class="ex" data-i="${i}"><div class="q">${esc(e.q)}</div><div class="opts">${e.opts.map((o, k) => `<button class="opt" data-act="pick" data-i="${i}" data-k="${k}">${esc(o)}</button>`).join("")}</div><div class="fb"></div></div>`;
  if (e.type === "gap") { let k = 0; const q = esc(e.q).replace(/___/g, () => `<input class="gapin" data-i="${i}" data-k="${k++}" aria-label="Blank ${k}" autocomplete="off" autocapitalize="off" spellcheck="false">`); return `<div class="ex" data-i="${i}"><div class="q">${q}</div><div class="fb"></div></div>`; }
  if (e.type === "order") { const words = shuffleNot(e.words, e.a); return `<div class="ex" data-i="${i}"><div class="muted small">Put the words in order</div><div class="tiles answerline" data-line="${i}"></div><div class="tiles" data-pool="${i}">${words.map(w => `<button class="tile" data-act="tile" data-i="${i}">${esc(w)}</button>`).join("")}</div><div class="fb"></div></div>`; }
  return "";
}
function shuffleNot(words, ans) { for (let t = 0; t < 10; t++) { const s = shuffle(words); if (norm(s.join(" ")) !== norm(ans)) return s; } return words; }

// ----- flashcards -----
function startReview(mode) {
  const q = buildQueue();
  if (!q.length) { toast(deckIds().length ? "Nothing due right now. Start the next lesson for new words." : "Start a lesson first."); return; }
  sess = { mode, q, total: q.length, done: 0, ok: 0, cur: q[0], phase: "ask", typed: "", result: null, heard: "" };
  view = "review"; render();
}
function vReview() {
  if (gsess) return vGender();
  if (!sess) {
    const c = counts();
    return `<section class="hero"><h1>Karten</h1><p class="muted">${c.due} due and ${c.newToday} new today. Pick how you want to answer.</p></section>
    <section class="stack">
      <button class="action main" data-act="startReview" data-mode="speak"><span class="ico">${ICON.mic}</span><span><h3>Speak the answer</h3><span class="muted small">See the English, say the German. I check it instantly and tell you what was wrong: the article, the word or the pronunciation.</span></span><span>${ICON.arrow}</span></button>
      <button class="action" data-act="startReview" data-mode="flip"><span class="ico">${ICON.cards}</span><span><h3>Flip cards</h3><span class="muted small">See the English, say the German with its article, flip and rate yourself.</span></span><span>${ICON.arrow}</span></button>
      <button class="action" data-act="startReview" data-mode="type"><span class="ico">${ICON.book}</span><span><h3>Type the answer</h3><span class="muted small">Write the word with der/die/das. Checked automatically.</span></span><span>${ICON.arrow}</span></button>
      <button class="action" data-act="startGender"><span class="ico">${ICON.tag}</span><span><h3>der, die oder das?</h3><span class="muted small">Fast article drill on every noun you've started.</span></span><span>${ICON.arrow}</span></button>
    </section>
    <p class="muted small">How it works: a word you miss comes back within minutes, then the next day. Words you know well wait days, then weeks, then months. Words you've missed three or more times are marked tricky and keep coming back every few days until you get them right four times in a row.</p>`;
  }
  if (!sess.cur) {
    return `<section class="cardbox"><span class="badge">Session done</span><div class="answer">Gut gemacht!</div><p class="sub">${sess.done} reviews, ${sess.ok} right first time.</p>
      <div class="row" style="justify-content:center"><button class="btn primary" data-act="startReview" data-mode="${sess.mode}">Check for more</button><button class="btn" data-act="nav" data-view="speak">Speaking practice</button></div></section>`;
  }
  if (sess.mode === "speak" && !micBlocked) return vSpeakCard();
  const w = WORDS[sess.cur], c = card(sess.cur), isNew = c.s === "new";
  const head = `<div class="progress"><button class="btn ghost" data-act="endReview" aria-label="End session">${ICON.back}</button><span class="bar"><i style="width:${Math.round(100 * sess.done / Math.max(1, sess.done + sess.q.length))}%"></i></span><span class="small muted num">${sess.q.length} left</span></div>`;
  const prompt = `<span class="prompt">${esc(w.en)}</span>${w.art ? `<span class="sub small">noun · say it with der, die or das</span>` : ""}`;
  const back = `<div class="answer">${deHTML(w)}</div>${plText(w) ? `<div class="sub">${esc(plText(w))}</div>` : ""}${w.ex ? `<p class="example"><i>${esc(w.ex)}</i><br><span class="muted">${esc(w.exEn || "")}</span></p>` : ""}<div class="row" style="justify-content:center">${playBtn(w.de)}${w.ex ? `<button class="btn ghost" data-act="say" data-text="${esc(w.ex)}">${ICON.play} Example</button>` : ""}</div>`;
  if (isNew && sess.phase === "ask") {
    return head + `<section class="cardbox"><span class="badge new">New word</span><span class="prompt">${esc(w.en)}</span>${back}<button class="btn primary big" data-act="learnt" autofocus>Got it</button><span class="kbd">Space to continue</span></section>`;
  }
  const badge = struggling(c) ? `<span class="badge hard">Tricky word</span>` : "";
  if (sess.phase === "ask") {
    if (sess.mode === "type") return head + `<section class="cardbox">${badge}${prompt}<input id="typein" class="typein" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${w.art ? "der/die/das …" : "Deutsch …"}" autofocus><div class="umlauts">${["ä", "ö", "ü", "ß"].map(u => `<button data-act="ins" data-ch="${u}">${u}</button>`).join("")}</div><button class="btn primary" data-act="checkType">Check</button></section>`;
    if (sess.mode === "speak" && !micBlocked) return head + `<section class="cardbox">${badge}${prompt}<button class="mic" data-act="speakWord" aria-label="Speak">${ICON.mic}</button><div class="heard" id="heard">${esc(sess.heard) || "Tap and say it"}</div><button class="btn ghost" data-act="reveal">Show answer</button></section>`;
    return head + `<section class="cardbox">${badge}${prompt}${sess.mode === "speak" ? `<p class="muted small">Say it out loud, then flip.</p>` : ""}<button class="btn primary big" data-act="reveal" autofocus>Show answer</button><span class="kbd">Space to flip</span></section>`;
  }
  // answer phase
  const now = Date.now(), lab = r => fmtIvl(schedule(c, r, now).due - now);
  let res = "";
  if (sess.result) res = `<div class="result ${sess.result.cls}">${sess.result.msg}</div>`;
  const grades = sess.result && sess.result.auto != null
    ? `<div class="row" style="justify-content:center"><button class="btn primary big" data-act="grade" data-r="${sess.result.auto}" autofocus>Next</button>${sess.result.auto === 0 ? `<button class="btn ghost" data-act="grade" data-r="2">I was right</button>` : sess.result.auto === 2 ? `<button class="btn ghost" data-act="grade" data-r="3">Too easy</button>` : ""}</div>`
    : `<div class="grades">${[["Again", 0], ["Hard", 1], ["Good", 2], ["Easy", 3]].map(([l, r]) => `<button class="grade g${r}" data-act="grade" data-r="${r}">${l}<span>${lab(r)}</span></button>`).join("")}</div><span class="kbd">Keys 1 to 4</span>`;
  return head + `<section class="cardbox">${badge}<span class="sub">${esc(w.en)}</span>${res}${back}${grades}</section>`;
}
function checkWord(answer, w) {
  const a = norm(answer), t = norm(w.de);
  if (a === t || loose(answer) === loose(w.de)) return { ok: true };
  if (w.art) {
    const parts = a.split(" "), art = parts[0], rest = parts.slice(1).join(" ");
    const nounOk = near(rest || art, norm(w.word)) || near(a, norm(w.word));
    if (nounOk && ["der", "die", "das"].includes(art) && art !== w.art) return { ok: false, article: art };
    if (nounOk && !["der", "die", "das"].includes(art)) return { ok: false, noArticle: true };
    if (nounOk && art === w.art) return { ok: true, typo: true };
  } else if (near(a, t)) return { ok: true, typo: true };
  // speech: accept if the target appears inside a longer transcript
  if ((" " + a + " ").includes(" " + t + " ")) return { ok: true };
  return { ok: false };
}
function feedback(res, w, said, typed) {
  const verb = typed ? "wrote" : "said";
  if (res.ok && !res.typo) return { cls: "ok", msg: "Richtig!", auto: 2 };
  if (res.ok) return { cls: "meh", msg: `Almost: check the spelling.${said ? ` You ${verb} "${esc(said)}".` : ""}`, auto: 1 };
  if (res.article) return { cls: "bad", msg: `Wrong article: it's <span class="${gClass(w)}">${w.art}</span>, not ${esc(res.article)}.`, auto: 0 };
  if (res.noArticle) return { cls: "bad", msg: `Right word, but say it with the article: <span class="${gClass(w)}">${w.art}</span>.`, auto: 0 };
  return { cls: "bad", msg: said ? `Not quite. You ${verb} "${esc(said)}".` : "Not quite.", auto: 0 };
}
function gradeCard(r) {
  const id = sess.cur, c = card(id), wasNew = !S.cards[id];
  const n = schedule(c, r);
  S.cards[id] = n; const d = day(); d.rev++;
  if (wasNew) d.nw++;
  if (r >= 2) sess.ok++;
  sess.done++;
  sess.q.shift();
  if (n.due - Date.now() < 20 * MIN) sess.q.splice(Math.min(sess.q.length, r === 0 ? 3 : r === 1 ? 5 : 8), 0, id);
  addXP(r >= 2 ? 2 : 1);
  nextCard(); save(); render();
  if (!sess.cur && sess.done >= 5) celebrate({ title: "Karten geschafft!", sub: `${sess.done} reviews, ${sess.ok} right. Every word is scheduled: the ones you missed come back soon, the ones you know wait longer.` });
}
function nextCard() { sess.cur = sess.q[0]; sess.phase = "ask"; sess.result = null; sess.heard = ""; }

// ----- gender drill -----
function startGender() {
  const ids = deckIds().filter(id => WORDS[id].art && !WORDS[id].plOnly);
  if (!ids.length) return toast("Start a lesson first.");
  const weight = id => { const g = S.gender[id] || { r: 0, w: 0 }; return Math.max(0.3, 1 + g.w * 3 - g.r * 0.5) * (S.cards[id] ? 1 : 0.6); };
  const pool = ids.map(id => ({ id, k: Math.random() ** (1 / weight(id)) })).sort((a, b) => b.k - a.k).slice(0, 20).map(x => x.id);
  gsess = { q: pool, i: 0, ok: 0, picked: null }; view = "review"; render();
}
function vGender() {
  const g = gsess;
  if (g.i >= g.q.length) return `<section class="cardbox"><span class="badge">Done</span><div class="answer num">${g.ok}/${g.q.length}</div><p class="sub">Articles you missed will come up more often next time.</p><div class="row" style="justify-content:center"><button class="btn primary" data-act="startGender">Again</button><button class="btn" data-act="endGender">Back</button></div></section>`;
  const w = WORDS[g.q[g.i]];
  return `<div class="progress"><button class="btn ghost" data-act="endGender" aria-label="End drill">${ICON.back}</button><span class="bar"><i style="width:${Math.round(100 * g.i / g.q.length)}%"></i></span><span class="small muted num">${g.i + 1}/${g.q.length}</span></div>
  <section class="cardbox"><span class="label">der, die oder das?</span><div class="answer">${g.picked ? deHTML(w) : esc(w.word)}</div><span class="sub">${esc(w.en)}</span>
  <div class="gbtns">${["der", "die", "das"].map((a, k) => `<button class="gbtn ${a} ${g.picked === a ? "picked" : ""}" data-act="gpick" data-a="${a}" ${g.picked && a !== w.art && a !== g.picked ? "disabled" : ""}><span>${a}</span></button>`).join("")}</div>
  ${g.picked ? `<div class="result ${g.picked === w.art ? "ok" : "bad"}">${g.picked === w.art ? "Richtig!" : `It's ${w.art} ${esc(w.word)}.`}</div>${w.ex ? `<p class="example"><i>${esc(w.ex)}</i></p>` : ""}<button class="btn primary" data-act="gnext" autofocus>Next</button>` : `<span class="kbd">Keys 1, 2, 3</span>`}</section>`;
}

// ----- speaking -----
function speakPool(kind, lesson) {
  const ls = lesson ? [LESSON[lesson]] : started().map(id => LESSON[id]);
  if (kind === "talk") return shuffle(ls.flatMap(L => L.speak.map(s => ({ ...s, lesson: L.id })))).slice(0, 10);
  const items = ls.flatMap(L => [...L.shadow, ...L.words.map(id => WORDS[id].ex).filter(Boolean)]);
  const sc = t => S.shadow[t] ? S.shadow[t].best : -1;
  return shuffle(items).sort((a, b) => sc(a) - sc(b)).slice(0, 10).map(t => ({ text: t }));
}
function startSpeak(kind, lesson) {
  const items = speakPool(kind, lesson ? +lesson : 0);
  if (!items.length) return toast("Start a lesson first.");
  sp = { kind, items, i: 0, heard: "", result: null, hide: false, lesson: lesson ? +lesson : 0, total: 0 };
  view = "speak"; render();
  setTimeout(() => sayCurrent(), 250);
}
function sayCurrent(rate) { if (!sp || sp.i >= sp.items.length) return; const it = sp.items[sp.i]; say(it.text || it.q, rate); }
function vSpeak() {
  if (!sp) {
    const ls = started();
    return `<section class="hero"><h1>Sprechen</h1><p class="muted">Practise from every lesson you've started (${ls.length ? ls.map(i => "L" + i).join(", ") : "none yet"}).</p></section>
    <section class="stack">
      <button class="action main" data-act="startSpeak" data-kind="shadow"><span class="ico">${ICON.repeat}</span><span><h3>Repeat after me</h3><span class="muted small">Hear a sentence, say it back, see which words came through. Your weakest sentences come first.</span></span><span>${ICON.arrow}</span></button>
      <button class="action" data-act="startSpeak" data-kind="talk"><span class="ico">${ICON.chat}</span><span><h3>Answer questions</h3><span class="muted small">A short conversation: you hear a question and answer in your own words.</span></span><span>${ICON.arrow}</span></button>
      <button class="action" data-act="openSound" data-id=""><span class="ico">${ICON.mic}</span><span><h3>Pronunciation trainer</h3><span class="muted small">ü, ö, ch, R and the other hard sounds: how to make them, listening tests, and checks on every word you say.</span></span><span>${ICON.arrow}</span></button>
      <button class="action" data-act="startReview" data-mode="speak"><span class="ico">${ICON.cards}</span><span><h3>Say your flashcards</h3><span class="muted small">Your due words, answered out loud with the article.</span></span><span>${ICON.arrow}</span></button>
    </section>
    ${micBlocked ? `<p class="note">${SR ? "The microphone isn't available on this page" : "This browser can't recognise speech"}, so you'll check yourself: listen, say it aloud, then reveal. For automatic checking open the app file in Chrome, Edge or Safari and allow the microphone.</p>` : `<p class="muted small">Tip: speak at normal speed in a quiet room. Speech recognition sometimes mishears short words like articles, so use "I was right" if it got you wrong.</p>`}`;
  }
  const head = `<div class="progress"><button class="btn ghost" data-act="endSpeak" aria-label="End">${ICON.back}</button><span class="bar"><i style="width:${Math.round(100 * sp.i / sp.items.length)}%"></i></span><span class="small muted num">${Math.min(sp.i + 1, sp.items.length)}/${sp.items.length}</span></div>`;
  if (sp.i >= sp.items.length) return head + `<section class="cardbox"><span class="badge">Done</span><div class="answer">Super!</div><p class="sub">You spoke ${sp.total} times this round.</p><div class="row" style="justify-content:center"><button class="btn primary" data-act="startSpeak" data-kind="${sp.kind}" data-lesson="${sp.lesson || ""}">Another round</button><button class="btn" data-act="endSpeak">Back</button></div></section>`;
  const it = sp.items[sp.i];
  const blockedNote = micBlocked ? `<p class="note small">Nobody is checking you on this page: claude.ai blocks the microphone. Use the app from its own website or the downloaded file to get checked and earn XP.</p>` : "";
  const mic = micBlocked
    ? (sp.result ? "" : `<p class="muted small">Say it out loud now.</p><button class="btn primary big" data-act="selfReveal">${sp.kind === "talk" ? "Show sample answers" : "I said it"}</button>`)
    : `<button class="mic" data-act="spListen" aria-label="Speak">${ICON.mic}</button><div class="heard" id="heard">${esc(sp.heard) || "Tap the mic and speak"}</div>`;
  const listenRow = `<div class="row" style="justify-content:center"><button class="btn" data-act="spSay">${ICON.play} Listen</button><button class="btn" data-act="spSay" data-slow="1">${ICON.slow} Slowly</button></div>`;
  if (sp.kind === "shadow") {
    const r = sp.result && !sp.result.self ? sp.result : null;
    const sent = r ? markWords(it.text, r) : esc(it.text);
    const res = r ? `<div class="score">${Math.round(r.score * 100)}%</div><div class="result ${r.score >= 0.9 ? "ok" : r.score >= 0.6 ? "meh" : "bad"}">${r.score >= 0.9 ? "Sehr gut! Every word came through clearly." : r.score >= 0.6 ? "Close. Work on the words below, then try the whole sentence again." : "Listen slowly, then try again in short chunks."}</div>` : "";
    return head + blockedNote + `<section class="cardbox"><span class="label">Repeat after me</span><div class="sentence ${sp.hide && !sp.result ? "hidden-text" : ""}" data-act="unhide">${sent}</div>${r ? `<p class="small muted">Green: clear · Orange: heard as a similar word · Red: not recognised</p>` : ""}${listenRow}${res}${r ? coachHTML(it.text, r) : ""}${mic}${recorderHTML(it.text)}
      <div class="row" style="justify-content:center">${sp.result && !micBlocked ? `<button class="btn" data-act="spRetry">Try again</button>` : ""}<button class="btn ${sp.result ? "primary" : "ghost"}" data-act="spNext">${sp.result ? "Next" : "Skip"}</button>${!sp.result ? `<button class="btn ghost" data-act="spHide">${sp.hide ? "Show text" : "Hide text"}</button>` : ""}</div></section>`;
  }
  // talk
  let res = "";
  if (sp.result && !sp.result.self) {
    const m = sp.result.model;
    res = `<div class="result ${sp.result.ok ? "ok" : "meh"}">${sp.result.ok ? "Gut! That answers the question." : "That doesn't answer the question yet. Look at the sample, then try again."}</div>
      <div class="models"><span class="label">You said</span><div class="model"><span>${esc(sp.heard)}</span></div>
      <span class="label">Closest sample answer</span><div class="model">${playBtn(m.text)}<span>${markWords(m.text, m)}</span></div><p class="small muted">Words in green match what you said.</p></div>`;
  }
  const models = sp.result ? `<div class="models"><span class="label">All sample answers</span>${it.model.map(m => `<div class="model">${playBtn(m)}<span>${esc(m)}</span></div>`).join("")}</div>` : "";
  return head + blockedNote + `<section class="cardbox"><span class="label">Answer the question</span><div class="sentence ${sp.hide && !sp.result ? "hidden-text" : ""}" data-act="unhide">${esc(it.q)}</div><span class="sub">${sp.hide && !sp.result ? "Listen first. Tap the text to show it." : esc(it.en)}</span>${listenRow}${res}${models}${mic}
    <div class="row" style="justify-content:center">${sp.result && !micBlocked ? `<button class="btn" data-act="spRetry">Try again</button>` : ""}<button class="btn ${sp.result ? "primary" : "ghost"}" data-act="spNext">${sp.result ? "Next" : "Skip"}</button>${!sp.result ? `<button class="btn ghost" data-act="spHide">${sp.hide ? "Show text" : "Listening mode"}</button>` : ""}</div></section>`;
}
async function spListen() {
  const btn = $(".mic"); if (rec) { rec.stop(); return; }
  btn && btn.classList.add("live");
  try {
    const alts = await listen(t => { const h = $("#heard"); if (h) h.textContent = t; });
    btn && btn.classList.remove("live");
    if (!alts.length) return toast("I didn't hear anything. Tap the mic and speak.");
    sp.total++; day().spoke++;
    const it = sp.items[sp.i];
    setTimeout(() => addXP(sp.kind === "shadow" && sp.result?.score >= 0.9 ? 5 : 3, sp.result?.score >= 0.9 ? "clear!" : ""), 50);
    if (sp.kind === "shadow") {
      const tgt = norm(it.text).split(" ");
      let best = null;
      for (const a of alts) { const r = align(tgt, norm(a).split(" ")); if (!best || r.score > best.score) best = { ...r, heard: a }; }
      sp.heard = best.heard; sp.result = best;
      const prev = S.shadow[it.text] || { best: 0, tries: 0 };
      S.shadow[it.text] = { best: Math.max(prev.best, best.score), tries: prev.tries + 1, last: best.score };
    } else {
      const acc = it.accept.map(norm);
      const hitAlt = alts.find(a => { const n = " " + norm(a) + " "; return acc.some(p => n.includes(" " + p + " ") || n.includes(p)); });
      sp.heard = hitAlt || alts[0];
      const heard = norm(sp.heard).split(" ");
      const model = it.model.map(t => ({ text: t, ...align(norm(t).split(" "), heard) })).sort((a, b) => b.score - a.score)[0];
      sp.result = { ok: !!hitAlt && heard.length >= 2 || (!!hitAlt && it.accept.some(p => ["ja", "nein"].includes(p))), model };
    }
    save(); render();
  } catch (err) { btn && btn.classList.remove("live"); micError(err); render(); }
}
async function speakWord() {
  const btn = $(".mic"); if (rec) { rec.stop(); return; }
  btn && btn.classList.add("live");
  const w = WORDS[sess.cur];
  try {
    const alts = await listen(t => { const h = $("#heard"); if (h) h.textContent = t; });
    btn && btn.classList.remove("live");
    if (!alts.length) return toast("I didn't hear anything. Tap the mic and speak.");
    day().spoke++;
    let res = null, said = alts[0];
    for (const a of alts) { const r = checkWord(a, w); if (r.ok) { res = r; said = a; break; } if (!res || r.article || r.noArticle) { res = r; said = a; } }
    sess.heard = said; sess.result = feedback(res, w, said); sess.phase = "show";
    if (!res.ok && !res.article && !res.noArticle) { const t = tipsFor(w.word)[0]; if (t) sess.result.msg += `<div class="small" style="font-weight:400;margin-top:6px"><b>${esc(t.label)}:</b> ${esc(t.how)}</div>`; }
    say(w.de); render();
  } catch (err) { btn && btn.classList.remove("live"); micError(err); render(); }
}

// ----- speak-first cards: English prompt → you speak → instant verdict -----
const WORD_BY_NORM = {};
for (const w of Object.values(WORDS)) { WORD_BY_NORM[norm(w.de)] = w; WORD_BY_NORM[norm(w.word)] ||= w; }
function soundTip(target, heard) {
  const tips = SOUNDS.filter(x => x.id !== "len" && x.match.test(target));
  return tips.find(x => !x.match.test(heard || "")) || tips[0];
}
function diagnose(alts, w) {
  const T = norm(w.de), N = norm(w.word);
  const ns = alts.map(a => norm(a)).filter(Boolean);
  const pad = a => " " + a + " ";
  if (ns.some(a => pad(a).includes(pad(T)))) return { v: "ok", grade: 2, title: "Richtig!", heard: alts[0] };
  if (w.art) {
    for (const a of ns) {
      const toks = a.split(" "), i = toks.findIndex((t, k) => toks.slice(k, k + N.split(" ").length).join(" ") === N);
      if (i < 0) continue;
      const art = toks[i - 1];
      if (["der", "die", "das", "den", "dem", "des"].includes(art)) return { v: "bad", grade: 0, kind: "article", title: "Wrong article", detail: `It's <b class="${gClass(w)}">${w.art}</b> ${esc(w.word)}, not ${esc(art)}.${genderHint(w)}`, heard: alts[ns.indexOf(a)] };
      return { v: "close", grade: 0, kind: "noart", title: "Right word, missing article", detail: `Say it with the article: <b class="${gClass(w)}">${w.art}</b> ${esc(w.word)}.${genderHint(w)}`, heard: alts[ns.indexOf(a)] };
    }
  }
  // close: the recogniser heard a similar-sounding word → pronunciation
  let best = null;
  for (const a of ns) {
    const cand = w.art ? a.replace(/^(der|die|das|den|dem) /, "") : a;
    const d = lev(loose(cand), loose(N)), lim = Math.max(1, Math.floor(N.length / 4));
    if (d <= lim && (!best || d < best.d)) best = { d, a, cand };
  }
  if (best) {
    const tip = soundTip(w.word, best.cand);
    return { v: "close", grade: 1, kind: "pron", title: "Almost: check your pronunciation", detail: `I heard “${esc(best.a)}” instead of “${esc(w.de)}”.${tip ? `<div class="tipline"><b>${esc(tip.label)}</b> ${esc(tip.how)}</div>` : ""}`, heard: best.a, tip };
  }
  // a different word from the deck
  for (const a of ns) {
    const o = WORD_BY_NORM[a] || WORD_BY_NORM[a.replace(/^(der|die|das) /, "")];
    if (o && o.id !== w.id) return { v: "bad", grade: 0, kind: "other", title: "That's a different word", detail: `You said <b>${deHTML(o)}</b>, which means “${esc(o.en)}”. “${esc(w.en)}” is <b>${deHTML(w)}</b>.`, heard: a };
  }
  const tip = soundTip(w.word, ns[0]);
  return { v: "bad", grade: 0, kind: "miss", title: "Not quite", detail: `I heard “${esc(alts[0])}”. The answer is <b>${deHTML(w)}</b>.${tip ? `<div class="tipline"><b>${esc(tip.label)}</b> ${esc(tip.how)}</div>` : ""}`, heard: alts[0] };
}
function genderHint(w) {
  const x = w.word.toLowerCase();
  const h = /(ung|heit|keit|ion|schaft)$/.test(x) ? "Words ending in -ung, -heit, -keit, -ion are always die." : /(chen|lein)$/.test(x) ? "Words ending in -chen or -lein are always das." : /e$/.test(x) && w.art === "die" ? "Most nouns ending in -e are die." : /(tag|woch|monat)/.test(x) || ["januar","februar","märz","april","mai","juni","juli","august","september","oktober","november","dezember","frühling","sommer","herbst","winter"].includes(x) ? "Days, months and seasons are der." : "";
  return h ? ` <span class="muted">${h}</span>` : "";
}
function vSpeakCard() {
  const w = WORDS[sess.cur], c = card(sess.cur), isNew = c.s === "new", r = sess.verdict;
  const head = `<div class="progress"><button class="btn ghost" data-act="endReview" aria-label="End session">${ICON.back}</button><span class="bar"><i style="width:${Math.round(100 * sess.done / Math.max(1, sess.done + sess.q.length))}%"></i></span><span class="small muted num">${sess.ok} ✓ · ${sess.q.length} left</span></div>`;
  const live = !!rec;
  const mic = `<button class="mic ${live ? "live" : ""}" data-act="cardListen" aria-label="${live ? "Stop" : "Speak"}">${ICON.mic}</button><div class="heard" id="heard">${live ? "Listening…" : r ? "" : "Tap and say it in German"}</div>`;
  const answer = `<div class="answer">${deHTML(w)}</div>${w.ex ? `<p class="example"><i>${esc(w.ex)}</i><br><span class="muted">${esc(w.exEn || "")}</span></p>` : ""}<div class="row" style="justify-content:center">${playBtn(w.de)}<button class="icon-btn" data-act="saySlow" data-text="${esc(w.de)}" aria-label="Listen slowly">${ICON.slow}</button></div>`;
  if (isNew) {
    // first meeting: hear it, then say it once so I can check the pronunciation
    const msg = r ? `<div class="verdict ${r.v}"><b>${r.v === "ok" ? "Perfekt! Learned." : esc(r.title)}</b>${r.v === "ok" ? "" : `<div>${r.detail}</div>`}</div>` : "";
    return head + `<section class="cardbox speakcard"><span class="badge new">New word</span><span class="prompt">${esc(w.en)}</span>${answer}${msg}
      ${r && r.v === "ok" ? `<button class="btn primary big" data-act="learnt" autofocus>Next</button>` : `<p class="small muted">Listen, then repeat it out loud.</p>${mic}<button class="btn ghost" data-act="learnt">Skip</button>`}</section>`;
  }
  const badge = struggling(c) ? `<span class="badge hard">Tricky word</span>` : "";
  if (!r) return head + `<section class="cardbox speakcard">${badge}<span class="label">Say it in German</span><span class="prompt big">${esc(w.en)}</span>${w.art ? `<span class="sub small">noun · include der, die or das</span>` : ""}${mic}
    <button class="btn ghost" data-act="dontKnow">I don't know</button></section>`;
  const retryOk = sess.retry && sess.retry.v === "ok";
  return head + `<section class="cardbox speakcard">${badge}<span class="sub">${esc(w.en)}</span>
    <div class="verdict ${r.v}"><div class="vicon">${r.v === "ok" ? "✓" : r.v === "close" ? "~" : "✗"}</div><div><b>${esc(r.title)}</b>${r.detail ? `<div>${r.detail}</div>` : ""}${r.v !== "ok" && r.heard && r.kind !== "dk" ? "" : ""}</div></div>
    ${answer}
    ${r.v === "ok" ? `<p class="small muted">${sess.auto ? "Next card in a moment…" : ""}</p><button class="btn primary big" data-act="cardNext" autofocus>Next</button>`
      : `${sess.retry ? `<div class="result ${retryOk ? "ok" : "bad"} small">${retryOk ? "Now you've got it! This card will come back soon to lock it in." : `Still not right. I heard “${esc(sess.retry.heard || "")}”.`}</div>` : `<p class="small muted">Listen, then say it again to practise.</p>`}
        <div class="row" style="justify-content:center"><button class="btn" data-act="cardRetry">${ICON.mic} Say it again</button><button class="btn primary" data-act="cardNext">Next</button>${r.v !== "ok" && r.kind !== "dk" ? `<button class="btn ghost" data-act="cardOverride">I said it right</button>` : ""}</div>`}
  </section>`;
}
async function cardListen(retry) {
  if (rec) { rec.stop(); return; }
  const id = sess.cur, w = WORDS[id], tok = sess.tok = (sess.tok || 0) + 1;
  try {
    const pr = listen(t => { const h = $("#heard"); if (h) h.textContent = t || "Listening…"; });
    render();
    const alts = await pr;
    if (!sess || sess.cur !== id || sess.tok !== tok) return;
    if (!alts.length) { render(); return toast("I didn't hear anything. Tap the mic and speak."); }
    day().spoke++;
    const d = diagnose(alts, w);
    sess.listenOk = true;
    if (card(id).s === "new") { sess.verdict = d; render(); if (d.v === "ok") { addXP(2, "new word"); chime(false); } else say(w.de); return; }
    if (retry) { sess.retry = d; if (d.v === "ok") addXP(1); render(); if (d.v !== "ok") say(w.de); return; }
    sess.verdict = d; sess.grade = d.grade;
    render();
    if (d.v === "ok") { chime(false); const p = await playAnswer(w); if (sess && sess.cur === id && sess.verdict === d) { sess.auto = true; render(); setTimeout(() => { if (sess && sess.cur === id && sess.verdict === d) A.cardNext(); }, 700); } }
    else say(w.de);
  } catch (err) { micError(err); render(); }
}
function playAnswer(w) {
  return new Promise(res => {
    if (!S.settings.deviceVoice && hasClip(w.de)) playClip(w.de).then(p => { p.onended = res; p.onerror = res; }).catch(() => res());
    else { say(w.de); setTimeout(res, 900); }
    setTimeout(res, 3500);
  });
}
function cardAdvance() {
  const g = sess.grade ?? 0;
  sess.verdict = null; sess.retry = null; sess.grade = null; sess.auto = false;
  gradeCard(g);
  // hands-free: once the mic has worked, listen for the next card straight away
  if (sess && sess.cur && sess.mode === "speak" && sess.listenOk && card(sess.cur).s !== "new") setTimeout(() => { if (sess && sess.cur && !sess.verdict && !rec && view === "review") cardListen(); }, 500);
}


// ===================== Guided daily lesson ("Unterricht") =====================
// One path, planned by the app, built on what language research supports:
// spaced retrieval of old words, hear-then-say for new words, immediate retrieval
// of new words, a short explicit grammar point checked right away, shadowing with
// word-level feedback, short spoken answers, and corrective feedback on every answer.
const NEW_PER_SESSION = 8;
let T = null; // current session
const course = () => (S.course ||= { lesson: (LESSONS.find(L => !S.lessons[L.id]?.done) || LESSONS[LESSONS.length - 1]).id, gi: {}, talk: {}, exOk: {} });
const curLesson = () => LESSON[Math.min(course().lesson, LESSONS.length)];
function lessonReady(L) {
  const c = course();
  const words = L.words.every(id => S.cards[id]);
  const gram = (c.gi[L.id] || 0) >= L.grammar.length;
  const ex = L.ex.every((_, i) => c.exOk[L.id + ":" + i]);
  const talk = L.speak.every((_, i) => c.talk[L.id + ":" + i]);
  const build = chainsOf(L.id).every(g => (c.built || {})[L.id + ":" + g]);
  return { words, gram, ex, talk, build, all: words && gram && ex && talk && build };
}
function exChunk(L, gi) { const n = L.ex.length, g = L.grammar.length; return L.ex.map((_, i) => i).slice(Math.floor(gi * n / g), Math.floor((gi + 1) * n / g)); }
// ----- adaptive teacher: placement, level checks, pace, review of earlier levels -----
// The learner never picks lessons. A short check places them; finishing a level triggers a
// level check (80% to pass); a failed check gives focused review sessions, then the check again.
const PASS = 0.8;
const levelLessons = lv => LESSONS.filter(L => L.level === lv);
const nextLevelOf = lv => LEVELS[LEVELS.indexOf(lv) + 1];
function wordOpts(id, ls) {
  const w = WORDS[id];
  const pool = ls.flatMap(L => L.words).filter(x => x !== id && !!WORDS[x].art === !!w.art && WORDS[x].en !== w.en);
  const opts = shuffle(pool).slice(0, 3).map(x => WORDS[x].de);
  if (w.art) opts[0] = shuffle(["der", "die", "das"].filter(a => a !== w.art))[0] + " " + w.word;
  return shuffle([w.de, ...opts]);
}
function checkItems(lv, n) {
  const ls = levelLessons(lv), nWords = Math.round(n * 0.6), items = [];
  const pools = shuffle(ls).map(L => shuffle(L.words));
  for (let k = 0; items.length < nWords && k < 99; k++) { const p = pools[k % pools.length]; if (p.length) items.push(p.pop()); }
  const words = items.map(id => ({ type: "pq", kind: "word", id, lv, opts: wordOpts(id, ls) }));
  const exs = shuffle(ls.flatMap(L => L.ex.map((e, i) => ({ L, e, i })).filter(x => x.e.type === "mc"))).slice(0, n - words.length)
    .map(x => ({ type: "pq", kind: "ex", lesson: x.L.id, i: x.i, lv }));
  return shuffle([...words, ...exs]);
}
const hasProgress = () => Object.keys(S.cards).length > 0 || LESSONS.some(L => S.lessons[L.id]?.done);
function startPlacement() {
  const tasks = [{ type: "intro", part: "Einstufung", title: "Let's find your level", text: "A short check, about 10 questions per level. Pick the right German, or tap “I don't know” instead of guessing. If you get 80% of a level, we try the next one." },
    ...checkItems("A1", 10), { type: "pcheck", lv: "A1" }];
  T = { mode: "placement", tasks, i: 0, r: null, tries: 0, ok: 0, n: 0, mistakes: [], learned: [], xp0: S.xp || 0, tally: {}, lesson: curLesson().id };
  view = "teach"; render(); window.scrollTo(0, 0);
}
function startLevelCheck(lv) {
  const due = dueWords(6);
  const tasks = [];
  if (due.length) { tasks.push({ type: "intro", part: "Aufwärmen", title: "Warm-up", text: "A few words from before, then the level check." }); due.forEach(id => tasks.push({ type: "recall", id, graded: true })); }
  tasks.push({ type: "intro", part: "Prüfung", title: `${lv} level check`, text: `You've finished every ${lv} lesson. 12 questions from the whole level. With 80% you move on to ${nextLevelOf(lv) || "the end of the course"}; otherwise we strengthen what's missing first.` },
    ...checkItems(lv, 12), { type: "lcheck", lv });
  T = { mode: "check", tasks, i: 0, r: null, tries: 0, ok: 0, n: 0, mistakes: [], learned: [], xp0: S.xp || 0, tally: {}, lesson: curLesson().id };
  view = "teach"; render(); window.scrollTo(0, 0); onTask();
}
function tallyOf(lv) { return (T.tally[lv] ||= { ok: 0, n: 0, words: [], lessons: [] }); }
function pqPick(k) {
  const t = task(); if (T.r) return;
  const right = t.kind === "word" ? t.opts[k] === WORDS[t.id].de : k === LESSON[t.lesson].ex[t.i].a;
  const ty = tallyOf(t.lv); ty.n++; T.n++;
  if (right) { ty.ok++; T.ok++; chime(false); }
  else { if (t.kind === "word") ty.words.push(t.id); ty.lessons.push(t.kind === "word" ? WORDS[t.id].lesson : t.lesson); }
  T.r = { pick: k, right }; render();
  setTimeout(() => { if (task() === t) nextTask(); }, right ? 600 : 1400);
}
function tPq(t) {
  const r = T.r, w = t.kind === "word" ? WORDS[t.id] : null, e = w ? null : LESSON[t.lesson].ex[t.i];
  const opts = w ? t.opts : e.opts, rightK = w ? opts.indexOf(w.de) : e.a;
  const q = w ? `<span class="prompt big">${esc(w.en)}</span><span class="sub small">in German</span>` : `<div class="sentence">${esc(e.q)}</div>`;
  return `<span class="label">${T.mode === "placement" ? "Einstufung" : "Level check"} · ${t.lv}</span>${q}
    <div class="opts pqopts">${opts.map((o, k) => `<button class="opt ${r ? (k === rightK ? "right" : r.pick === k ? "wrong" : "") : ""}" data-act="pqPick" data-k="${k}" ${r ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div>
    ${r ? "" : `<button class="btn ghost" data-act="pqPick" data-k="-1">I don't know</button>`}`;
}
// called by nextTask when the session reaches a pcheck / lcheck marker
function evalCheck(t) {
  const c = course(), ty = tallyOf(t.lv), rate = ty.n ? ty.ok / ty.n : 0, nx = nextLevelOf(t.lv);
  (c.results ||= {})[t.lv] = { rate, at: Date.now(), kind: t.type };
  ty.words.forEach(id => { if (!S.cards[id]) { S.cards[id] = { ...card(id), s: "learn", step: 0, due: Date.now() + MIN, last: Date.now() }; } });
  if (t.type === "pcheck") {
    if (rate >= PASS && nx && nx !== "B2") {
      levelLessons(t.lv).forEach(L => { S.lessons[L.id] = { ...(S.lessons[L.id] || {}), started: S.lessons[L.id]?.started || Date.now(), done: S.lessons[L.id]?.done || Date.now(), skipped: true }; });
      T.tasks.splice(T.i, 1, { type: "intro", part: "Einstufung", title: `${t.lv}: ${Math.round(rate * 100)}%`, text: `That's a pass. Let's see how you do with ${nx}.` }, ...checkItems(nx, 10), { type: "pcheck", lv: nx });
    } else {
      if (rate >= PASS && nx === "B2") levelLessons(t.lv).forEach(L => { S.lessons[L.id] = { ...(S.lessons[L.id] || {}), started: Date.now(), done: Date.now(), skipped: true }; });
      const lv = rate >= PASS ? nx : t.lv, first = levelLessons(lv)[0].id;
      c.lesson = Math.max(c.lesson || 1, first); c.placed = { at: Date.now(), level: lv };
      T.tasks.splice(T.i, 1, { type: "placed", lv, rate });
    }
  } else {
    if (rate >= PASS) {
      c.check = null; c.remedial = null; c.passed = { ...(c.passed || {}), [t.lv]: Date.now() };
      if (nx) c.lesson = levelLessons(nx)[0].id;
      addXP(50, `${t.lv} passed`);
    } else {
      c.check = null; c.remedial = { lv: t.lv, left: 2, lessons: [...new Set(ty.lessons)], words: ty.words };
    }
    T.tasks.splice(T.i, 1, { type: "checked", lv: t.lv, rate, pass: rate >= PASS });
  }
  save();
}
function tPlaced(t) {
  const c = course(), res = c.results || {}, L = curLesson();
  return `<span class="label">Einstufung</span><div class="celebrate-title sumtitle">Your level: ${t.lv}</div>${journeyHTML()}
    <div class="models">${Object.entries(res).filter(([, r]) => r.kind === "pcheck").map(([lv, r]) => `<div class="model"><span class="pn ${r.rate >= PASS ? "on" : ""}">${r.rate >= PASS ? "✓" : "·"}</span><span><b>${lv}</b> ${Math.round(r.rate * 100)}%</span></div>`).join("")}</div>
    ${teacherSays(`We start with ${L.level}, Lektion ${L.id}: ${esc(L.title)}${/[.?!]$/.test(L.title) ? "" : "."}${LESSONS.some(x => S.lessons[x.id]?.skipped) ? " Earlier levels you passed still come back: a few of their words in every lesson, and the ones you missed today are already in your review." : ""}`)}
    <div class="row" style="justify-content:center"><button class="btn primary" data-act="teachAgain">Start my first lesson</button><button class="btn" data-act="teachDone">Later</button></div>`;
}
function tChecked(t) {
  const c = course(), nx = nextLevelOf(t.lv);
  if (t.pass && !t.shown) { t.shown = true; setTimeout(() => celebrate({ title: `Meilenstein: ${t.lv}!`, big: true, sub: `${Math.round(t.rate * 100)}% in the level check. ${t.lv} is done.${journeyHTML(t.lv)}<span class="small muted">${journey().pct}% of the way to B2${nx ? `. Next time we start ${nx}.` : ". You've finished the course!"}</span>` }), 300); }
  return `<span class="label">Level check · ${t.lv}</span><div class="celebrate-title sumtitle">${Math.round(t.rate * 100)}%</div>
    ${teacherSays(t.pass ? `You passed ${t.lv}.${nx ? ` Your next lesson is ${nx}, Lektion ${curLesson().id}: ${esc(curLesson().title)}${/[.?!]$/.test(curLesson().title) ? "" : "."} ${t.lv} words keep coming back in your reviews.` : ""}` : `Not yet: you need 80%. The next ${c.remedial.left} lessons strengthen the parts you missed${c.remedial.lessons.length ? ` (${c.remedial.lessons.slice(0, 3).map(id => esc(LESSON[id].title)).join(", ")}${c.remedial.lessons.length > 3 ? ` and ${c.remedial.lessons.length - 3} more` : ""})` : ""}, then we do the check again.`)}
    <div class="row" style="justify-content:center"><button class="btn primary" data-act="teachDone">Fertig</button></div>`;
}
function dueWords(cap) {
  const now = Date.now();
  return Object.keys(S.cards).filter(id => WORDS[id] && S.cards[id].s !== "new" && S.cards[id].due <= now + 5 * MIN)
    .sort((a, b) => (struggling(card(b)) - struggling(card(a))) || (card(a).due - card(b).due)).slice(0, cap);
}
function pace() {
  const r = (course().rates || []).slice(-3);
  if (r.length < 2) return { fresh: 8, review: 12, label: "" };
  const avg = r.reduce((a, b) => a + b, 0) / r.length;
  if (avg >= 0.9) return { fresh: 12, review: 12, label: "You've been getting almost everything right, so today has more new words." };
  if (avg < 0.7) return { fresh: 5, review: 18, label: "The last lessons were hard, so today has fewer new words and more practice." };
  return { fresh: 8, review: 12, label: "" };
}
// words from levels passed in the placement that aren't in the review yet
const oldWords = n => shuffle(LESSONS.filter(L => S.lessons[L.id]?.skipped).flatMap(L => L.words).filter(id => !S.cards[id])).slice(0, n);
function reviewExercise(L) {
  const done = LESSONS.filter(x => x.id < L.id && S.lessons[x.id]?.done);
  const all = shuffle(done.flatMap(x => x.ex.map((e, i) => ({ lesson: x.id, i, e })).filter(y => y.e.type !== "order" || true)));
  return all.slice(0, 1).map(y => ({ type: "ex", lesson: y.lesson, i: y.i, review: true }));
}
function remedialPlan(rm) {
  const tasks = [], lv = rm.lv;
  const weak = Object.keys(S.cards).filter(id => WORDS[id]?.lesson && LESSON[WORDS[id].lesson].level === lv)
    .sort((a, b) => (rm.words.includes(b) - rm.words.includes(a)) || (card(b).fails - card(a).fails) || (card(a).ease - card(b).ease)).slice(0, 15);
  tasks.push({ type: "intro", part: "Wiederholung", title: `Strengthen ${lv}`, text: `Practice for the ${lv} check: the words you're least sure of first.` });
  weak.forEach(id => tasks.push({ type: "recall", id, graded: true }));
  const ls = rm.lessons.length ? rm.lessons : levelLessons(lv).map(L => L.id);
  const exs = shuffle(ls.flatMap(id => LESSON[id].ex.map((e, i) => ({ lesson: id, i })))).slice(0, 8);
  tasks.push({ type: "intro", part: "Grammatik", title: "Grammar you missed", text: "Exercises from the lessons where the check went wrong. Wrong answers come back a moment later." });
  exs.forEach(x => tasks.push({ type: "ex", ...x }));
  const bs = shuffle(ls.flatMap(id => chainsOf(id).flatMap(gi => BUILD[id][gi].steps.map((_, si) => ({ lesson: id, gi, si }))))).slice(0, 4);
  if (bs.length) { tasks.push({ type: "intro", part: "Bauen", title: "Build sentences", text: "Sentences from those lessons. I give you English, you build the German." }); bs.forEach(x => tasks.push({ type: "build", ...x, review: true })); }
  const talk = shuffle(ls.flatMap(id => LESSON[id].speak.map((q, i) => ({ q, key: id + ":" + i })))).slice(0, 2);
  tasks.push({ type: "intro", part: "Sprechen", title: "Speaking", text: "Two questions from those lessons." });
  talk.forEach(x => tasks.push({ type: "talk", item: x.q, key: x.key }));
  tasks.push({ type: "summary" });
  return tasks;
}

function planSession() {
  const L = curLesson(), c = course(), tasks = [];
  if (c.remedial) return { tasks: remedialPlan(c.remedial), plan: { remedial: c.remedial.lv }, mode: "remedial" };
  const pc = pace();
  if (!S.lessons[L.id]?.started) S.lessons[L.id] = { ...(S.lessons[L.id] || {}), started: Date.now() };
  const now = Date.now();
  const due = dueWords(pc.review), old = oldWords(4), sents = warmSents(2);
  const fresh = L.words.filter(id => !S.cards[id]).slice(0, pc.fresh);
  const gi = c.gi[L.id] || 0;
  const plan = { lesson: L.id, warm: due.length + old.length, fresh: fresh.length, pace: pc.label, grammar: gi < L.grammar.length ? L.grammar[gi].t : null };
  if (due.length + old.length + sents.length) {
    const n = due.length + old.length, ns = sents.length;
    tasks.push({ type: "intro", part: "Aufwärmen", title: "Warm-up", text: `${pc.label ? pc.label + " " : ""}${n ? `${n} words from before. Say each one from memory${[...due, ...old].some(id => WORDS[id].art) ? ", nouns with der, die or das" : ""}` : ""}${n && ns ? `, then ${ns === 1 ? "a sentence" : ns + " sentences"} to build` : ns ? `${ns === 1 ? "A sentence" : ns + " sentences"} from before to build` : ""}. Pulling it out of memory is what makes it stick.` });
    shuffle([...due.map(id => ({ id })), ...old.map(id => ({ id, old: true }))]).forEach(x => tasks.push({ type: "recall", id: x.id, graded: true, old: x.old }));
    sents.forEach(k => { const [lesson, gi, si] = k.split(":").map(Number); tasks.push({ type: "build", lesson, gi, si, review: true }); });
  }
  if (fresh.length) {
    tasks.push({ type: "intro", part: "Neue Wörter", title: "New words", text: `${fresh.length} new words from Lektion ${L.id}. Listen to each one and repeat it. I'll check your pronunciation, then ask you for them again.` });
    fresh.forEach(id => tasks.push({ type: "learn", id }));
    tasks.push({ type: "intro", part: "Neue Wörter", title: "Do you remember them?", text: "Now from memory: I show the English, you say the German." });
    shuffle(fresh).forEach(id => tasks.push({ type: "recall", id, graded: true }));
  }
  if (gi < L.grammar.length) {
    tasks.push({ type: "intro", part: "Grammatik", title: L.grammar[gi].t, text: "A short explanation, then I'll check that you can use it." });
    tasks.push({ type: "grammar", lesson: L.id, gi });
    exChunk(L, gi).forEach(i => tasks.push({ type: "ex", lesson: L.id, i }));
    tasks.push(...reviewExercise(L));
  } else {
    const open = L.ex.map((_, i) => i).filter(i => !c.exOk[L.id + ":" + i]);
    if (open.length) { tasks.push({ type: "intro", part: "Grammatik", title: "Fix the last ones", text: "These exercises didn't work out last time. Let's try them again." }); open.forEach(i => tasks.push({ type: "ex", lesson: L.id, i })); }
  }
  const bg = pickChain(L, gi);
  if (bg >= 0) tasks.push(...chainTasks(L.id, bg));
  if (fresh.length >= 4) { tasks.push({ type: "intro", part: "Neue Wörter", title: "One more time", text: "The new words again, a few minutes later. Spacing is what moves them into long-term memory." }); shuffle(fresh).slice(0, 5).forEach(id => tasks.push({ type: "recall", id, graded: false })); }
  // speaking: shadow 2 sentences (weakest first), answer 2 questions (unanswered first)
  const sc = t => S.shadow[t] ? S.shadow[t].best : -1;
  const shadows = [...L.shadow].sort((a, b) => sc(a) - sc(b)).slice(0, 2);
  const talks = L.speak.map((q, i) => ({ q, i })).sort((a, b) => (!!c.talk[L.id + ":" + a.i]) - (!!c.talk[L.id + ":" + b.i])).slice(0, 2);
  tasks.push({ type: "intro", part: "Sprechen", title: micBlocked ? "Listening and answering" : "Speaking", text: micBlocked ? "The microphone isn't available here, so you'll write what you hear and type your answers. I check everything." : "Repeat after me. I'll show you exactly which words came through. Then answer two questions out loud." });
  shadows.forEach(t => tasks.push({ type: "shadow", text: t }));
  talks.forEach(({ q, i }) => tasks.push({ type: "talk", item: q, key: L.id + ":" + i }));
  if (CFG && auth && !chat.off) {
    tasks.push({ type: "intro", part: "Gespräch", title: "Talk with me", text: `Now a short conversation about today's topic, ${CONVO_TURNS} answers from you. ${micBlocked ? "Type" : "Speak"} your answers in German; I'll correct one thing at a time and keep the talk going.` });
    tasks.push({ type: "convo" });
  }
  tasks.push({ type: "summary" });
  return { tasks, plan, mode: "lesson" };
}
function startTeach() {
  const c = course();
  if (!c.placed) return startPlacement();
  if (c.check) return startLevelCheck(c.check);
  const { tasks, mode } = planSession(); save();
  T = { mode, tasks, i: 0, r: null, tries: 0, hint: 0, ok: 0, n: 0, mistakes: [], learned: [], bmiss: [], xp0: S.xp || 0, lesson: curLesson().id };
  view = "teach"; render(); window.scrollTo(0, 0); onTask();
}
const task = () => T && T.tasks[T.i];
function onTask() {
  const t = task(); if (!t) return;
  if (t.type === "learn") setTimeout(() => task() === t && say(WORDS[t.id].de), 250);
  if (t.type === "shadow" || t.type === "talk") setTimeout(() => task() === t && say(t.text || t.item.q), 250);
  if (t.type === "recall" && !micBlocked && T.listenOk) setTimeout(() => { if (task() === t && !T.r && !rec && view === "teach") teachListen(); }, 450);
}
function nextTask() {
  if (rec) rec.abort();
  const cur = task();
  if (cur && cur.type === "learn" && !S.cards[cur.id]) addCard(cur.id);
  if (cur && cur.type === "grammar") { const c = course(); c.gi[cur.lesson] = Math.max(c.gi[cur.lesson] || 0, cur.gi + 1); save(); }
  if (cur && cur.type === "build" && cur.last && !cur.retest) finishChain(cur.lesson, cur.gi);
  T.i++;
  if (task() && (task().type === "pcheck" || task().type === "lcheck")) evalCheck(task());
  if (task() && task().type === "summary") finishSession(); T.r = null; T.tries = 0; T.hint = 0; T.retry = null; render(); window.scrollTo(0, 0); onTask(); }
function requeue(t, gap = 3) { if ((t.rn || 0) >= 2) return; T.tasks.splice(Math.min(T.tasks.length - 1, T.i + 1 + gap), 0, { ...t, retest: true, graded: false, rn: (t.rn || 0) + 1 }); }

function vTeach() {
  const t = task(); if (!t) return "";
  const total = T.tasks.length, pct = Math.round(100 * T.i / Math.max(1, total - 1));
  const part = [...T.tasks.slice(0, T.i + 1)].reverse().find(x => x.type === "intro")?.part || "";
  const head = `<div class="progress"><button class="btn ghost" data-act="teachEnd" aria-label="End lesson">${ICON.back}</button><span class="bar"><i style="width:${pct}%"></i></span><span class="small muted">${esc(part)}</span></div>`;
  return head + `<section class="cardbox teach">${({ intro: tIntro, recall: tRecall, learn: tLearn, grammar: tGrammar, ex: tEx, shadow: tShadow, talk: tTalk, build: tBuild, convo: tConvo, summary: tSummary, pq: tPq, placed: tPlaced, checked: tChecked })[t.type](t)}</section>`;
}
const teacherSays = html => `<div class="teacher"><span class="avatar" aria-hidden="true">L</span><div class="bubble">${html}</div></div>`;
const micOrType = (act, ph) => micBlocked
  ? `<input id="typein" class="typein" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(ph)}" autofocus><div class="umlauts">${["ä", "ö", "ü", "ß"].map(u => `<button data-act="ins" data-ch="${u}">${u}</button>`).join("")}</div><button class="btn primary" data-act="${act}Type">Check</button>`
  : `<button class="mic ${rec ? "live" : ""}" data-act="${act}" aria-label="Speak">${ICON.mic}</button><div class="heard" id="heard">${rec ? "Listening…" : "Tap and speak"}</div>`;
const verdictHTML = r => `<div class="verdict ${r.v}"><div class="vicon">${r.v === "ok" ? "✓" : r.v === "close" ? "~" : "✗"}</div><div><b>${esc(r.title)}</b>${r.detail ? `<div>${r.detail}</div>` : ""}</div></div>`;
const nextBtn = (label = "Weiter") => `<button class="btn primary big" data-act="teachNext" autofocus>${label}</button>`;

function tIntro(t) { return `<span class="label">${esc(t.part)}</span><h2>${esc(t.title)}</h2>${teacherSays(t.html || esc(t.text))}${nextBtn("Los geht's")}`; }
function tRecall(t) {
  const w = WORDS[t.id], r = T.r;
  const ans = `<div class="answer">${deHTML(w)}</div><div class="row" style="justify-content:center">${playBtn(w.de)}<button class="icon-btn" data-act="saySlow" data-text="${esc(w.de)}" aria-label="Listen slowly">${ICON.slow}</button></div>`;
  if (!r) return `${t.retest ? `<span class="badge hard">Once more</span>` : struggling(card(t.id)) ? `<span class="badge hard">Tricky word</span>` : ""}<span class="label">Say it in German</span><span class="prompt big">${esc(w.en)}</span>${w.art ? `<span class="sub small">noun · with der, die or das</span>` : ""}${micOrType("teachListen", w.art ? "der/die/das …" : "Deutsch …")}<button class="btn ghost" data-act="teachDontKnow">I don't know</button>`;
  const fix = r.v === "ok" ? "" : T.retry ? `<div class="result ${T.retry.v === "ok" ? "ok" : "bad"} small">${T.retry.v === "ok" ? "Now it's right. I'll ask you again in a moment." : "Not yet. Listen once more."}</div>` : `<p class="small muted">${micBlocked ? "Type it correctly once to fix it in memory." : "Listen, then say it correctly once."}</p>`;
  return `<span class="sub">${esc(w.en)}</span>${verdictHTML(r)}${ans}${r.v === "ok" ? nextBtn() : `${fix}${(T.retry && T.retry.v === "ok") ? "" : micOrType("teachRetry", "…")}<div class="row" style="justify-content:center">${nextBtn()}${r.kind !== "dk" && !micBlocked ? `<button class="btn ghost" data-act="teachOverride">I said it right</button>` : ""}</div>`}`;
}
function tLearn(t) {
  const w = WORDS[t.id], r = T.r;
  const done = r && r.v === "ok";
  return `<span class="badge new">New word</span><span class="prompt">${esc(w.en)}</span><div class="answer">${deHTML(w)}</div>${plText(w) ? `<div class="sub">${esc(plText(w))}</div>` : ""}
    <div class="row" style="justify-content:center">${playBtn(w.de)}<button class="icon-btn" data-act="saySlow" data-text="${esc(w.de)}" aria-label="Listen slowly">${ICON.slow}</button></div>
    ${w.ex ? `<p class="example"><i>${esc(w.ex)}</i> ${playBtn(w.ex, "Listen to example")}<br><span class="muted">${esc(w.exEn || "")}</span></p>` : ""}
    ${w.art ? `<p class="small muted">${w.art === "der" ? "Blue" : w.art === "die" ? "Red" : "Green"} = ${w.art}. ${genderHint(w).replace(/<[^>]+>/g, "").trim() || "Learn the article as part of the word."}</p>` : ""}
    ${r ? verdictHTML(done ? { v: "ok", title: micBlocked ? "Good." : "Perfekt ausgesprochen!" } : r) : ""}
    ${done || T.tries >= 3 ? nextBtn() : `${teacherSays(micBlocked ? "Type it once while you say it out loud." : "Listen, then repeat it.")}${micOrType("teachListen", w.de)}${T.tries ? `<button class="btn ghost" data-act="teachNext">Skip</button>` : ""}`}`;
}
function tGrammar(t) { const L = LESSON[t.lesson], g = L.grammar[t.gi]; return `<span class="label">Grammatik · Lektion ${L.id}</span><article class="gram" style="text-align:left;width:100%">${g.html.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, "</table></div>")}</article>${nextBtn("Verstanden, check me")}`; }
function tEx(t) {
  const e = LESSON[t.lesson].ex[t.i], r = T.r;
  return `<span class="label">${t.review ? `Wiederholung · Lektion ${t.lesson}` : t.retest ? "Once more" : "Check yourself"}</span><div style="width:100%;text-align:left" data-lesson="${t.lesson}">${exHTML(e, t.i)}</div>${r ? verdictHTML(r) + nextBtn() : `<button class="btn primary" data-act="teachExCheck">Check</button>`}`;
}
function tShadow(t) {
  const r = T.r;
  const sent = r && r.score != null ? markWords(t.text, r) : micBlocked && !r ? "<span class='muted'>(listen and write what you hear)</span>" : esc(t.text);
  const pass = r && r.score >= 0.9;
  const msg = !r ? "" : pass ? verdictHTML({ v: "ok", title: micBlocked ? "Perfectly written!" : "Sehr gut! Every word came through." }) : verdictHTML({ v: r.score >= 0.6 ? "close" : "bad", title: `${Math.round(r.score * 100)}%: ${r.score >= 0.6 ? "almost" : "not yet"}`, detail: micBlocked ? `Correct: <b>${esc(t.text)}</b>` : "Work on the marked words, then try again." });
  return `<span class="label">${micBlocked ? "Write what you hear" : "Repeat after me"}</span><div class="sentence">${sent}</div>
    <div class="row" style="justify-content:center"><button class="btn" data-act="say" data-text="${esc(t.text)}">${ICON.play} Listen</button><button class="btn" data-act="saySlow" data-text="${esc(t.text)}">${ICON.slow} Slowly</button></div>
    ${msg}${r && !pass && !micBlocked ? coachHTML(t.text, r) : ""}
    ${pass || T.tries >= 3 ? nextBtn() : `${micOrType("teachShadow", "Type the sentence…")}${T.tries ? `<button class="btn ghost" data-act="teachNext">Skip</button>` : ""}`}`;
}
function tTalk(t) {
  const it = t.item, r = T.r;
  return `<span class="label">Answer the question</span><div class="sentence">${esc(it.q)}</div><span class="sub">${esc(it.en)}</span>
    <div class="row" style="justify-content:center"><button class="btn" data-act="say" data-text="${esc(it.q)}">${ICON.play} Listen</button></div>
    ${r ? verdictHTML(r.ok ? { v: "ok", title: "Gut! That answers the question.", detail: `${micBlocked ? "You wrote" : "You said"}: “${esc(r.heard)}”` } : { v: "close", title: "Not an answer yet", detail: `${micBlocked ? "You wrote" : "I heard"}: “${esc(r.heard)}”. Try a full sentence like the sample.` }) + `<div class="models"><span class="label">Sample answer${it.model.length > 1 ? "s" : ""}</span>${it.model.map(m => `<div class="model">${playBtn(m)}<span>${esc(m)}</span></div>`).join("")}</div>` : teacherSays("Answer in a short, full sentence.")}
    ${r && (r.ok || T.tries >= 3) ? nextBtn() : `${micOrType("teachTalk", "Ich …")}${T.tries ? `<button class="btn ghost" data-act="teachNext">Skip</button>` : ""}`}`;
}
function tSummary() {
  const L = LESSON[T.lesson], rd = lessonReady(L), xp = (S.xp || 0) - T.xp0;
  const rate = T.n ? Math.round(100 * T.ok / T.n) : 100;
  const steps = [["words", "All words learned", rd.words], ["gram", "All grammar covered", rd.gram], ["ex", "All exercises right", rd.ex], ["talk", "All questions answered", rd.talk], ...(chainsOf(L.id).length ? [["build", "All sentences built", rd.build]] : [])];
  return `<span class="label">Stunde beendet</span><div class="celebrate-title sumtitle">${rate >= 85 ? "Ausgezeichnet!" : rate >= 65 ? "Gut gemacht!" : "Geschafft!"}</div>
    <div class="sumgrid"><div><b class="num">${rate}%</b><span class="small muted">right first time</span></div><div><b class="num">${T.learned.length}</b><span class="small muted">new words</span></div><div><b class="num">+${xp}</b><span class="small muted">XP</span></div></div>
    ${T.mistakes.length ? `<div class="models"><span class="label">Practise these, they'll come back soon</span>${[...new Set(T.mistakes)].slice(0, 8).map(id => `<div class="model">${playBtn(WORDS[id].de)}<span>${deHTML(WORDS[id])} <span class="muted small">${esc(WORDS[id].en)}</span></span></div>`).join("")}</div>` : ""}
    ${T.mode === "remedial" ? "" : `<div class="models"><span class="label">Lektion ${L.id}: ${esc(L.title)}</span>${steps.map(([, l, ok]) => `<div class="model"><span class="pn ${ok ? "on" : ""}">${ok ? "✓" : "·"}</span><span>${l}</span></div>`).join("")}</div>`}
    <div class="row" style="justify-content:center"><button class="btn primary" data-act="teachDone">Fertig</button><button class="btn" data-act="teachAgain">Another lesson</button></div>`;
}
function finishSession() {
  const L = LESSON[T.lesson], rd = lessonReady(L), st = lessonState(L.id), c = course(); st.parts ||= {};
  if (T.n >= 5) { (c.rates ||= []).push(T.ok / T.n); c.rates = c.rates.slice(-5); }
  if (T.mode === "remedial") {
    const was = goalMet(today());
    day().lessons = (day().lessons || 0) + 1; addXP(10, "lesson done");
    const rm = c.remedial; rm.left--; if (rm.left <= 0) { c.check = rm.lv; c.remedial = null; }
    save();
    celebrate({ title: "Stunde geschafft!", sub: c.check ? `Next time: the ${c.check} level check again.` : `One more practice lesson, then the ${rm.lv} check again.` });
    if (!was) goalReached();
    return;
  }
  if (rd.words) st.parts.words ||= Date.now(); if (rd.gram) st.parts.grammar ||= Date.now(); if (rd.ex) st.parts.ex ||= Date.now(); if (rd.talk) st.parts.speak ||= Date.now();
  const was = goalMet(today());
  day().lessons = (day().lessons || 0) + 1;
  addXP(10, "lesson done");
  save();
  if (rd.all && !st.done) {
    st.done = Date.now(); addXP(50, "Lektion");
    const nx = LESSON[L.id + 1];
    if (!nx || nx.level !== L.level) { c.check = L.level; save(); celebrate({ title: `Lektion ${L.id} geschafft!`, big: true, sub: `That was the last ${L.level} lesson. Next time: the ${L.level} level check. Pass it with 80% and you move on${nx ? ` to ${nx.level}` : ""}.` }); }
    else { c.lesson = nx.id; save(); celebrate({ title: `Lektion ${L.id} geschafft!`, big: true, sub: `You finished “${esc(L.title)}”. Next time we start Lektion ${nx.id}: ${esc(nx.title)}.${journeyHTML(L.level)}<span class="small muted">${journey().pct}% of the way to B2</span>` }); }
  } else celebrate({ title: "Stunde geschafft!", sub: "See you tomorrow. Your missed words are already scheduled to come back." });
  if (!was) goalReached();
}

// --- answering ---
function judgeWord(w, alts, typed) {
  const d = diagnose(alts, w);
  if (typed && d.detail) d.detail = d.detail.replace(/I heard/g, "You wrote").replace(/You said/g, "You wrote");
  if (typed && d.kind === "pron") d.title = "Almost: check the spelling";
  return d;
}
async function getAnswer(typedSel) {
  if (micBlocked) { const i = $("#typein"); const v = i ? i.value.trim() : ""; if (!v) { i && i.focus(); return null; } return { alts: [v], typed: true }; }
  if (rec) { rec.stop(); return null; }
  const pr = listen(x => { const h = $("#heard"); if (h) h.textContent = x || "Listening…"; });
  render();
  const alts = await pr;
  if (!alts.length) { render(); toast("I didn't hear anything. Tap the mic and speak."); return null; }
  T.listenOk = true; day().spoke++;
  return { alts, typed: false };
}
async function teachListen(retry) {
  const t = task();
  try {
    const a = await getAnswer(); if (!a || task() !== t) return;
    if (t.type === "learn") {
      const w = WORDS[t.id], d = judgeWord(w, a.alts, a.typed); T.tries++; T.r = d;
      if (d.v === "ok" || T.tries >= 3) { if (!S.cards[t.id]) addCard(t.id); if (d.v === "ok") { addXP(2); chime(false); } save(); }
      else say(w.de);
      render(); return;
    }
    if (t.type === "recall") {
      const w = WORDS[t.id], d = judgeWord(w, a.alts, a.typed);
      if (retry) { T.retry = d; if (d.v !== "ok") say(w.de); render(); return; }
      T.r = d; T.n++;
      if (d.v === "ok") { T.ok++; addXP(2); chime(false); } else { T.mistakes.push(t.id); requeue(t, 3); logMiss({ w: t.id, k: d.kind }); }
      if (t.graded && !t.retest) {
        T.prev = card(t.id);
        if (t.old && !S.cards[t.id] && d.v === "ok") { S.cards[t.id] = { ...card(t.id), s: "rev", ivl: 10, due: Date.now() + 10 * DAY, reps: 1, cons: 1, last: Date.now() }; save(); }
        else gradeWord(t.id, d.grade);
      }
      render();
      if (d.v === "ok") { await playAnswer(w); if (task() === t && T.r === d) setTimeout(() => task() === t && T.r === d && nextTask(), 500); }
      else say(w.de);
    }
  } catch (err) { micError(err); render(); }
}
function addCard(id) { S.cards[id] = { ...card(id), s: "learn", step: 0, due: Date.now() + MIN, last: Date.now() }; day().nw++; T.learned.push(id); save(); }
function gradeWord(id, g) {
  const n = schedule(card(id), g); S.cards[id] = n; day().rev++; save();
}
async function teachShadow() {
  const t = task();
  try {
    const a = await getAnswer(); if (!a || task() !== t) return;
    const tgt = norm(t.text).split(" ");
    let best = null; for (const x of a.alts) { const r = align(tgt, norm(x).split(" ")); if (!best || r.score > best.score) best = { ...r, heard: x }; }
    T.r = best; T.tries++;
    const prev = S.shadow[t.text] || { best: 0, tries: 0 }; S.shadow[t.text] = { best: Math.max(prev.best, best.score), tries: prev.tries + 1, last: best.score };
    if (best.score >= 0.9) { addXP(T.tries === 1 ? 5 : 3); chime(false); }
    save(); render();
  } catch (err) { micError(err); render(); }
}
async function teachTalk() {
  const t = task();
  try {
    const a = await getAnswer(); if (!a || task() !== t) return;
    const it = t.item, acc = it.accept.map(norm);
    const hit = a.alts.find(x => { const n = " " + norm(x) + " "; return acc.some(p => n.includes(p)); });
    const heard = hit || a.alts[0], ok = !!hit && (norm(heard).split(" ").length >= 2 || it.accept.some(p => ["ja", "nein"].includes(p)));
    T.r = { ok, heard }; T.tries++;
    if (ok) { course().talk[t.key] = Date.now(); addXP(5); chime(false); }
    save(); render();
  } catch (err) { micError(err); render(); }
}
// ----- Bauen: build sentences from English, the way Language Transfer teaches -----
// One insight, then English prompts that grow step by step; the learner builds the German
// out loud. Wrong answers get the reason, the right sentence, a repeat, and come back later.
// The last sentences of each chain go into a sentence deck that returns in the warm-up.
const chainOf = (l, g) => (typeof BUILD !== "undefined" && BUILD[l] && BUILD[l][g]) || null;
const chainsOf = l => (typeof BUILD !== "undefined" && BUILD[l] || []).map((ch, g) => ch ? g : -1).filter(g => g >= 0);
const bstepOf = k => { const [l, g, s] = String(k).split(":"); return chainOf(l, g)?.steps[s] || null; };
const bstep = t => chainOf(t.lesson, t.gi).steps[t.si];
const bkey = t => `${t.lesson}:${t.gi}:${t.si}`;
function pickChain(L, gi) {
  const built = course().built || {}, open = chainsOf(L.id).filter(g => !built[L.id + ":" + g]);
  if (gi < L.grammar.length && open.includes(gi)) return gi;
  const done = open.filter(g => g < gi);
  return done.length ? done[0] : -1;
}
function chainTasks(l, g) {
  const ch = chainOf(l, g), n = ch.steps.length;
  return [{ type: "intro", part: "Bauen", title: "Build it yourself", html: `${ch.tip}<br><br>I give you English, you build the German out loud. Take your time to think it through: working it out is the practice.` },
    ...ch.steps.map((_, si) => ({ type: "build", lesson: l, gi: g, si, last: si === n - 1 }))];
}
function finishChain(l, g) {
  const c = course(), ch = chainOf(l, g), now = Date.now(); (c.built ||= {})[l + ":" + g] = now;
  const n = ch.steps.length, missed = T.bmiss.filter(k => k.startsWith(l + ":" + g + ":"));
  // the two longest (last) sentences plus anything missed come back from tomorrow
  for (const k of new Set([`${l}:${g}:${n - 2}`, `${l}:${g}:${n - 1}`, ...missed])) if (!S.sents[k]) {
    const miss = missed.includes(k);
    S.sents[k] = { ...card(""), s: "rev", ivl: 1, due: now + 20 * 3600e3, reps: 1, fails: miss ? 1 : 0, cons: miss ? 0 : 1, last: now };
  }
  save();
}
function gradeSent(k, g) {
  const now = Date.now(), c0 = S.sents[k] || { ...card(""), s: "rev", ivl: g ? 3 : 0, due: now, reps: 0 };
  S.sents[k] = schedule(c0, g, now); save();
}
function warmSents(cap) {
  const now = Date.now(), ks = Object.keys(S.sents || {}).filter(k => bstepOf(k) && S.sents[k].due <= now + 5 * MIN).sort((a, b) => S.sents[a].due - S.sents[b].due).slice(0, cap);
  if (ks.length < cap) {
    // lessons finished or skipped before their chains existed: bring their sentences in too
    const old = LESSONS.filter(L => (S.lessons[L.id]?.done || S.lessons[L.id]?.skipped) && L.id !== curLesson().id)
      .flatMap(L => chainsOf(L.id).flatMap(g => chainOf(L.id, g).steps.map((_, s) => `${L.id}:${g}:${s}`))).filter(k => !S.sents[k]);
    ks.push(...shuffle(old).slice(0, cap - ks.length));
  }
  return ks;
}
const btoks = s => norm(String(s).replace(/€/g, " Euro ")).split(" ").filter(Boolean);
const sameTok = (a, b) => a === b || loose(a) === loose(b);
function judgeBuild(st, alts) {
  let best = null;
  for (const h of alts) {
    const hw = btoks(h);
    for (const tg of [st.de, ...(st.alt || [])]) {
      const tw = btoks(tg);
      if (hw.length === tw.length && hw.every((x, i) => sameTok(x, tw[i]))) return { v: "ok", heard: h, target: tg, umlaut: hw.some((x, i) => x !== tw[i]) };
      const al = align(tw, hw);
      if (!best || al.score > best.al.score) best = { al, heard: h, target: tg, hw, tw };
    }
  }
  const { al, hw, tw, heard, target } = best, issues = [], bag = a => a.map(loose).sort().join(" ");
  const order = bag(hw) === bag(tw), wrong = wordStates(target, al).filter(w => w.st !== "ok" && bare(w.wd));
  if (order) issues.push("All the right words, but the order is off.");
  else for (const w of wrong) {
    if (issues.length >= 2) continue;
    issues.push(w.got ? `You said “${esc(w.got)}”, it's “${esc(bare(w.wd))}”.` : `Missing: “${esc(bare(w.wd))}”.`);
  }
  if (!issues.length && hw.length > tw.length) issues.push("There are extra words in your sentence.");
  return { v: "bad", heard, target, al, issues, order, wrong: wrong.map(w => bare(w.wd).toLowerCase()) };
}
async function teachBuild() {
  const t = task(), st = bstep(t);
  try {
    const a = await getAnswer(); if (!a || task() !== t) return;
    if (T.r) { // saying the right sentence once after a miss
      T.r.again = judgeBuild(st, a.alts); T.tries++;
      if (T.r.again.v === "ok") { addXP(1); chime(false); }
      save(); render(); return;
    }
    const j = judgeBuild(st, a.alts); T.r = j; T.tries++; j.typed = a.typed;
    if (!t.retest) T.n++;
    if (j.v === "ok") { if (!t.retest && !T.hint) T.ok++; addXP(T.hint ? 2 : 4); chime(false); }
    else { requeue(t, 3); T.bmiss.push(bkey(t)); logMiss({ b: bkey(t), got: j.heard }); }
    if (t.review && !t.retest) { T.prevSent = S.sents[bkey(t)]; gradeSent(bkey(t), j.v !== "ok" ? 0 : T.hint ? 1 : 2); }
    save(); render(); say(st.de);
  } catch (err) { micError(err); render(); }
}
function teachBuildShow() {
  const t = task(), st = bstep(t);
  T.r = { v: "bad", gave: true, target: st.de, issues: [] };
  if (!t.retest) T.n++;
  requeue(t, 3); T.bmiss.push(bkey(t)); logMiss({ b: bkey(t), k: "dk" });
  if (t.review && !t.retest) gradeSent(bkey(t), 0);
  save(); render(); say(st.de);
}
function teachBuildOverride() {
  // the recogniser misheard a right answer: undo the miss
  const t = task(); if (!T.r || T.r.v === "ok" || T.r.gave) return;
  if (!t.retest && !T.hint) T.ok++;
  T.bmiss = T.bmiss.filter(k => k !== bkey(t)); if (S.mlog?.length && S.mlog[S.mlog.length - 1].b === bkey(t)) S.mlog.pop();
  const k = T.tasks.findIndex((x, j) => j > T.i && x.retest && x.type === "build" && bkey(x) === bkey(t)); if (k > 0) T.tasks.splice(k, 1);
  if (t.review && !t.retest) { if (T.prevSent) S.sents[bkey(t)] = T.prevSent; else delete S.sents[bkey(t)]; gradeSent(bkey(t), 2); }
  addXP(3); nextTask();
}
function tBuild(t) {
  const st = bstep(t), r = T.r, L = LESSON[t.lesson];
  const badge = t.retest ? `<span class="badge hard">Once more</span>` : t.review ? `<span class="badge">From Lektion ${L.id}</span>` : `<span class="badge">${t.si + 1} of ${chainOf(t.lesson, t.gi).steps.length}</span>`;
  const head = `${badge}<span class="label">Say it in German</span><span class="prompt big">${esc(st.en)}</span>${st.nw ? `<span class="sub small">New: ${esc(st.nw)}</span>` : ""}`;
  if (!r) {
    const words = st.de.split(" ");
    return head + (T.hint ? `<div class="sentence hintline">${esc(words.slice(0, T.hint).join(" "))} …</div>` : "")
      + micOrType("teachBuild", "Auf Deutsch …")
      + `<div class="row" style="justify-content:center">${T.hint < words.length - 1 ? `<button class="btn ghost" data-act="teachBuildHint">${T.hint ? "One more word" : "Give me a start"}</button>` : ""}<button class="btn ghost" data-act="teachBuildShow">Show me</button></div>`;
  }
  const said = r.typed ? "You wrote" : "I heard";
  if (r.v === "ok") return `<span class="sub">${esc(st.en)}</span>` + verdictHTML({ v: "ok", title: T.hint ? "Richtig! Next time without the start." : "Richtig!", detail: r.umlaut ? "Watch the umlauts: ä, ö, ü." : "" })
    + `<div class="models"><div class="model">${playBtn(st.de)}<span>${esc(st.de)}</span></div>${r.target !== st.de ? `<div class="model">${playBtn(r.target)}<span>${esc(r.target)} <span class="muted small">(yours, also right)</span></span></div>` : ""}</div>` + nextBtn();
  // the reason only when it's about the mistake actually made
  const why = st.why && (r.gave || (r.order ? /end|first|second|goes|position|behind|order/i.test(st.why) : r.wrong.some(w => st.why.toLowerCase().includes(w))));
  const detail = [r.gave ? "" : `${said}: “${esc(r.heard)}”`, ...r.issues, why ? `<b>Why:</b> ${esc(st.why)}` : ""].filter(Boolean).join("<br>");
  const again = r.again;
  const fix = r.gave || r.typed || micBlocked ? "" : again && again.v === "ok" ? verdictHTML({ v: "ok", title: "Gut, that's it. It comes back in a moment." })
    : `${teacherSays(again ? `Not yet, I heard “${esc(again.heard)}”. Listen once more and say it.` : "Now say it right, once.")}${micOrType("teachBuild", "")}`;
  const done = r.gave || r.typed || micBlocked || (again && again.v === "ok") || T.tries >= 4;
  return `<span class="sub">${esc(st.en)}</span>${verdictHTML({ v: "bad", title: r.gave ? "Here it is" : "Not quite", detail })}
    <div class="models"><span class="label">Right</span><div class="model">${playBtn(r.target)}<span class="sentence">${r.al ? markWords(r.target, r.al) : esc(r.target)}</span></div></div>
    ${fix}<div class="row" style="justify-content:center">${done ? nextBtn() : `<button class="btn ghost" data-act="teachSkip">Skip</button>`}${!r.gave && !r.typed && !micBlocked && !again ? `<button class="btn ghost" data-act="teachBuildOverride">I said it right</button>` : ""}</div>`;
}
// ----- Gespräch: a short spoken conversation with Lehrer at the end of the lesson -----
// Runs on the same Supabase function as the Lehrer tab. The lesson brief goes in as the first
// (hidden) message, so no server change is needed. Skipped quietly when the teacher isn't set up.
const CONVO_TURNS = 4;
async function askLehrer(msgs) {
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 90e3);
  try {
    if (!(await freshToken())) throw new Error("Sign in again to talk to your teacher.");
    const r = await fetch(CFG.url + "/functions/v1/lehrer", { method: "POST", signal: ctl.signal, headers: { apikey: CFG.key, Authorization: "Bearer " + auth.access_token, "Content-Type": "application/json" }, body: JSON.stringify({ provider: S.settings.lehrerModel || "", messages: msgs.map(({ role, content }) => ({ role, content })), profile: learnerProfile() }) });
    const d = await r.json().catch(() => ({}));
    if (r.status === 404 || d.error === "not_configured") { chat.off = true; chat.providers = []; const e = new Error("off"); e.off = true; throw e; }
    if (!r.ok || !d.reply) throw new Error(d.error || d.message || `The teacher couldn't answer (error ${r.status}).`);
    applyMemory(d.memory); save();
    return { content: d.reply, by: d.provider };
  } catch (e) { throw e.name === "AbortError" ? new Error("No answer after 90 seconds.") : e; } finally { clearTimeout(timer); }
}
function convoBrief() {
  const L = LESSON[T.lesson], c = course(), ch = T.tasks.find(x => x.type === "build" && !x.review);
  const gi = ch ? ch.gi : Math.max(0, (c.gi[L.id] || 1) - 1);
  const built = T.tasks.filter(x => x.type === "build" && !x.review && !x.retest).map(x => bstep(x).de).slice(-3);
  return `[Lesson conversation. This message comes from the app, not from Or. Your replies appear in Or's daily lesson and the German is read aloud.]
Today's lesson: ${L.level} Lektion ${L.id} "${L.title}" (${L.en || ""}). Grammar: ${L.grammar[gi]?.t || L.grammar[0].t}.
New words today: ${T.learned.length ? T.learned.map(id => WORDS[id].de).join(", ") : "none (review lesson)"}.${built.length ? `\nSentences Or built today: ${built.join(" / ")}` : ""}
Hold a short spoken conversation with Or about this lesson's topic, using today's words and grammar, at Or's level (see the profile).
- One short question per message: at most two simple German sentences at A1/A2, a bit more from B1.
- Put any English help on its own last line, in round brackets. No lists, no headings.
- When Or answers: react to what Or said in one German sentence. If there is a mistake, give Or's sentence corrected with the change in **bold**, and the rule in a few English words in the bracket line. One correction at most. Then ask the next question, building on Or's answer and nudging Or to say a little more each time.
- After Or's ${CONVO_TURNS}th answer, don't ask anything new: give a warm one-line wrap-up in German, put the one thing to practise in the bracket line, and end with [ENDE].
Start now: greet Or briefly and ask the first question.`;
}
const convoSpeak = s => sayDevice(s.replace(/\[ENDE\]/g, "").replace(/\([^)]*\)/g, "").replace(/\*\*?/g, "").trim());
const convoShow = s => mdLite(s.replace(/\[ENDE\]/g, "").trim());
async function convoNext(t) {
  const cv = t.cv; cv.busy = true; cv.err = null; render();
  try {
    const m = await askLehrer([{ role: "user", content: convoBrief() }, ...cv.msgs]);
    if (task() !== t) return;
    cv.msgs.push({ role: "assistant", ...m, t: Date.now() });
    if (/\[ENDE\]/.test(m.content) || cv.turns >= CONVO_TURNS + 1) convoFinish(t);
    convoSpeak(m.content);
  } catch (e) {
    if (task() !== t) return;
    if (e.off) { cv.busy = false; toast("Lehrer isn't switched on yet, so the conversation is skipped."); return nextTask(); }
    cv.err = e.message || "Couldn't reach the teacher.";
  }
  cv.busy = false; render(); $(".convo-log")?.lastElementChild?.scrollIntoView({ block: "nearest" });
}
function convoFinish(t) {
  const cv = t.cv; if (cv.done) return; cv.done = true;
  // keep it in the Lehrer tab's conversations, without the app's brief
  (S.chats ||= []).push({ id: Date.now(), t: Date.now(), msgs: [{ role: "user", content: `(Gespräch in Lektion ${T.lesson})`, t: Date.now() }, ...cv.msgs].map(m => ({ ...m, content: m.content.replace(/\[ENDE\]/g, "").trim() })) });
  S.chats = S.chats.slice(-20); save();
}
async function teachConvo() {
  const t = task(), cv = t.cv; if (!cv || cv.busy || cv.done) return;
  try {
    const a = await getAnswer(); if (!a || task() !== t) return;
    cv.msgs.push({ role: "user", content: a.alts[0], t: Date.now() }); cv.turns++; addXP(5); save();
    convoNext(t);
  } catch (err) { micError(err); render(); }
}
function tConvo(t) {
  const cv = t.cv ||= { msgs: [], turns: 0 };
  if (!cv.msgs.length && !cv.busy && !cv.err) setTimeout(() => task() === t && !cv.busy && !cv.msgs.length && convoNext(t), 0);
  const log = cv.msgs.map(m => m.role === "assistant"
    ? `<div class="teacher"><span class="avatar" aria-hidden="true">L</span><div class="bubble">${convoShow(m.content)}<div><button class="icon-btn" data-act="convoSay" data-i="${cv.msgs.indexOf(m)}" aria-label="Read aloud">${ICON.play}</button></div></div></div>`
    : `<div class="me"><div class="bubble">${esc(m.content)}</div></div>`).join("");
  return `<span class="label">Gespräch mit Lehrer · ${Math.min(cv.turns, CONVO_TURNS)} of ${CONVO_TURNS}</span>
    <div class="convo-log">${log}${cv.busy ? `<div class="teacher"><span class="avatar" aria-hidden="true">L</span><div class="bubble muted">…</div></div>` : ""}</div>
    ${cv.err ? verdictHTML({ v: "bad", title: cv.err, detail: `<button class="btn small" data-act="convoRetry">Try again</button>` }) : ""}
    ${cv.done ? nextBtn() : cv.busy || cv.err ? "" : `${micOrType("teachConvo", "Antworte auf Deutsch …")}<button class="btn ghost" data-act="teachSkip">Skip the conversation</button>`}`;
}
function teachExCheck() {
  const t = task(), e = LESSON[t.lesson].ex[t.i], box = $(`.ex[data-i="${t.i}"]`); let ok = false, answered = true;
  if (e.type === "mc") { const p = box.querySelector('[aria-pressed="true"]'); if (!p) answered = false; else { box.querySelectorAll(".opt").forEach((o, k) => { o.classList.toggle("right", k === e.a); if (o === p && k !== e.a) o.classList.add("wrong"); }); ok = +p.dataset.k === e.a; } }
  if (e.type === "gap") { const ins = [...box.querySelectorAll(".gapin")]; if (ins.some(i => !i.value.trim())) answered = false; else ok = ins.every((inp, k) => e.a[k].split("/").some(x => norm(x) === norm(inp.value))); }
  if (e.type === "order") { const got = [...box.querySelectorAll(`[data-line="${t.i}"] .tile`)].map(x => x.textContent); if (got.length < e.words.length) answered = false; else ok = norm(got.join(" ")) === norm(e.a); }
  if (!answered) return toast("Answer first, then check.");
  const full = e.type === "gap" ? (() => { let k = 0; return e.q.replace(/___/g, () => e.a[k++].split("/")[0]).replace(/\s*\([^)]*\)\s*$/, ""); })() : e.type === "mc" ? e.q.replace("___", e.opts[e.a]) : e.a;
  T.n++;
  if (ok) { T.ok++; course().exOk[t.lesson + ":" + t.i] = Date.now(); addXP(t.retest ? 2 : 5); chime(false); }
  else { requeue(t, 2); logMiss({ ex: t.lesson + ":" + t.i, got: e.type === "mc" ? e.opts[+box.querySelector('[aria-pressed="true"]').dataset.k] : e.type === "gap" ? [...box.querySelectorAll(".gapin")].map(i => i.value.trim()).join(" … ") : [...box.querySelectorAll(`[data-line="${t.i}"] .tile`)].map(x => x.textContent).join(" ") }); }
  T.r = ok ? { v: "ok", title: "Richtig!", detail: e.why ? esc(e.why) : "" } : { v: "bad", title: "Not quite", detail: `Correct: <b>${esc(full)}</b>${e.why ? `<br>${esc(e.why)}` : ""}<br><span class="muted">You'll get this one again in a moment.</span>` };
  if (e.type === "gap") box.querySelectorAll(".gapin").forEach((inp, k) => { const r = e.a[k].split("/").some(x => norm(x) === norm(inp.value)); inp.classList.add(r ? "right" : "wrong"); inp.readOnly = true; });
  box.querySelectorAll("button").forEach(b => b.disabled = true);
  save();
  // keep the learner's answer on screen and show the verdict under it
  const btn = $('[data-act="teachExCheck"]'); if (btn) btn.outerHTML = verdictHTML(T.r) + nextBtn();
  $('[data-act="teachNext"]')?.focus();
}

function teachDontKnow() {
  const t = task(), w = WORDS[t.id];
  T.r = { v: "bad", grade: 0, kind: "dk", title: "Here it is", detail: "Listen, then say it once. It comes back in a moment." }; T.n++; T.mistakes.push(t.id); requeue(t, 3); logMiss({ w: t.id, k: "dk" });
  if (t.graded && !t.retest) { T.prev = card(t.id); gradeWord(t.id, 0); }
  render(); say(w.de);
}
function teachOverride() {
  // the recogniser got it wrong: undo the miss
  const t = task(); if (!T.r) return;
  if (t.graded && !t.retest && T.prev) { S.cards[t.id] = T.prev; gradeWord(t.id, 2); }
  T.ok++; T.mistakes = T.mistakes.filter(x => x !== t.id); if (S.mlog?.length && S.mlog[S.mlog.length - 1].w === t.id) S.mlog.pop();
  const k = T.tasks.findIndex((x, j) => j > T.i && x.retest && x.id === t.id); if (k > 0) T.tasks.splice(k, 1);
  addXP(2); nextTask();
}

// ----- feedback helpers -----
// colour each original word by how the recogniser heard its tokens
function wordStates(text, r) {
  let k = 0;
  return text.split(" ").map(wd => {
    const toks = norm(wd).split(" ").filter(Boolean), sts = toks.map(() => r.st[k]), got = toks.map(() => r.got[k++]);
    const st = !toks.length ? "ok" : sts.includes("miss") ? "miss" : sts.includes("close") ? "close" : "ok";
    return { wd, st, got: got.filter(Boolean).join(" ") };
  });
}
const markWords = (text, r) => wordStates(text, r).map(w => `<span class="w-${w.st}">${esc(w.wd)}</span>`).join(" ");
const bare = w => w.replace(/[^\p{L}\p{N}'’-]/gu, "");
function coachHTML(text, r) {
  const seen = new Set();
  const bad = wordStates(text, r).filter(w => w.st !== "ok" && bare(w.wd) && !seen.has(bare(w.wd)) && seen.add(bare(w.wd))).slice(0, 4);
  if (!bad.length) return "";
  return `<div class="coach"><span class="label">Work on these words</span>${bad.map(w => {
    const word = bare(w.wd), tips = tipsFor(word);
    return `<div class="coach-item"><div class="row between"><span><b class="w-${w.st}">${esc(word)}</b> <span class="muted small">${w.got ? `I heard “${esc(w.got)}”` : "I didn't catch this word"}</span></span>
      <span class="row">${playBtn(word)}<button class="icon-btn" data-act="saySlow" data-text="${esc(word)}" aria-label="Listen slowly">${ICON.slow}</button><button class="btn" data-act="check" data-text="${esc(word)}">${ICON.mic} Say it</button></span></div>
      ${checkHTML(word)}
      ${tips.map(t => `<div class="tip"><b>${esc(t.label)}</b> ${esc(t.how)} <button class="linkbtn" data-act="openSound" data-id="${t.id}">Practise ${esc(t.label)}</button></div>`).join("")}
      ${tips.length ? "" : `<div class="tip">Listen slowly and copy the rhythm. Stress is usually on the first syllable in German.</div>`}</div>`;
  }).join("")}</div>`;
}
// single word / phrase check with strict matching
const chk = {};
function checkHTML(text, partner) {
  const c = chk[text]; if (!c) return "";
  return `<div class="result ${c.ok ? "ok" : "bad"} small">${c.ok ? "Clear! I heard exactly that." : c.partner ? `That sounded like “${esc(c.partner)}”, not “${esc(text)}”. Listen to both and try again.` : c.heard ? `I heard “${esc(c.heard)}”. Listen again and try once more.` : "I didn't hear anything."}</div>`;
}
async function checkSay(text, partner, btn) {
  if (micBlocked) return toast("Speech checking needs the microphone. Open the app outside claude.ai (see Fortschritt).");
  if (rec) { rec.stop(); return; }
  btn && btn.classList.add("live");
  try {
    const alts = await listen();
    const t = norm(text), pt = partner && norm(partner);
    const has = a => (" " + norm(a) + " ").includes(" " + t + " ");
    const ok = alts.some(has);
    const heard = alts[0] || "";
    chk[text] = { ok, heard, partner: !ok && pt && alts.some(a => (" " + norm(a) + " ").includes(" " + pt + " ")) ? partner : "" };
    if (heard) day().spoke++;
    if (ok) addXP(2);
    const s0 = soundOf(text); if (s0) { const x = S.sounds[s0] ||= { ok: 0, n: 0 }; x.n++; if (ok) x.ok++; }
    save(); render();
  } catch (err) { micError(err); render(); }
}
function soundOf(text) { if (!soundId) return null; const s = SOUNDS.find(x => x.id === soundId); return s && (s.words.includes(text) || s.pairs.some(p => p.includes(text))) ? s.id : null; }

// ----- record yourself and compare -----
let recState = null; // { text, url, live, mr }
function recorderHTML(text) {
  if (!navigator.mediaDevices || !window.MediaRecorder || micBlocked) return "";
  const r = recState && recState.text === text ? recState : null;
  return `<div class="recorder"><span class="label">Record yourself and compare</span><div class="row" style="justify-content:center">
    ${r && r.live ? `<button class="btn rec-live" data-act="recStop">■ Stop recording</button>` : `<button class="btn" data-act="recStart" data-text="${esc(text)}">● ${r && r.url ? "Record again" : "Record"}</button>`}
    ${r && r.url ? `<button class="btn" data-act="say" data-text="${esc(text)}">${ICON.play} Original</button><button class="btn" data-act="recPlay">${ICON.play} Mine</button><button class="btn primary" data-act="recCompare">Original, then mine</button>` : ""}
  </div></div>`;
}
async function recStart(text) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream), chunks = [];
    if (recState && recState.url) URL.revokeObjectURL(recState.url);
    recState = { text, live: true, mr };
    mr.ondataavailable = e => chunks.push(e.data);
    mr.onstop = () => { stream.getTracks().forEach(t => t.stop()); recState.url = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType })); recState.live = false; render(); };
    mr.start(); render();
    setTimeout(() => { if (recState && recState.mr === mr && mr.state === "recording") mr.stop(); }, 10000);
  } catch (e) { toast("Couldn't use the microphone here."); }
}
function playMine() { return new Promise(res => { const a = new Audio(recState.url); a.onended = res; a.onerror = res; a.play().catch(res); }); }
async function recCompare() {
  const text = recState.text;
  try { const p = hasClip(text) && !S.settings.deviceVoice ? await playClip(text, 1) : null; if (p) await new Promise(r => { p.onended = r; }); else { say(text); await new Promise(r => setTimeout(r, 400 + text.length * 70)); } } catch (e) {}
  await new Promise(r => setTimeout(r, 300)); await playMine();
}

// ----- pronunciation trainer -----
let soundId = null, quiz = null;
function vSounds() {
  if (!soundId) return `<div class="row"><button class="btn ghost" data-act="nav" data-view="speak">${ICON.back} Sprechen</button></div>
    <section class="hero"><h1>Aussprache</h1><p class="muted">The German sounds that trip up most learners. Each one has a how-to, words to say, a listening test and a speaking test. The app checks every word you say.</p></section>
    <section class="soundgrid">${SOUNDS.map(s => { const x = S.sounds[s.id]; return `<button class="soundcard" data-act="openSound" data-id="${s.id}"><span class="glyph">${esc(s.label)}</span><span><b>${esc(s.title)}</b><span class="small muted">${x ? `${x.ok}/${x.n} said clearly` : "Not practised yet"}</span></span></button>`; }).join("")}</section>`;
  const s = SOUNDS.find(x => x.id === soundId);
  const sayBtn = (t, partner) => `<button class="btn" data-act="check" data-text="${esc(t)}" ${partner ? `data-partner="${esc(partner)}"` : ""}>${ICON.mic} Say</button>`;
  let q = "";
  if (quiz) {
    if (quiz.n >= 8) q = `<div class="result ok">Listening test: ${quiz.ok}/8 right.</div><button class="btn" data-act="quizStart">Test again</button>`;
    else {
      const [a, b] = quiz.cur.pair;
      q = `<p>Round ${quiz.n + 1} of 8: which word did you hear?</p><div class="row"><button class="btn" data-act="quizReplay">${ICON.play} Play again</button></div>
        <div class="gbtns" style="grid-template-columns:1fr 1fr">${[a, b].map(w => `<button class="opt ${quiz.picked ? (w === quiz.cur.ans ? "right" : w === quiz.picked ? "wrong" : "") : ""}" data-act="quizPick" data-w="${esc(w)}" ${quiz.picked ? "disabled" : ""}>${esc(w)}</button>`).join("")}</div>
        ${quiz.picked ? `<button class="btn primary" data-act="quizNext" autofocus>Next</button>` : ""}`;
    }
  }
  return `<div class="row"><button class="btn ghost" data-act="openSound" data-id="">${ICON.back} All sounds</button></div>
  <section class="hero"><span class="label">Aussprache</span><h1>${esc(s.title)}</h1></section>
  <section class="panel"><span class="label">How to make it</span><p>${esc(s.how)}</p></section>
  <section class="panel"><span class="label">1 · Listen, then say each word</span>
    ${s.words.map(w => `<div class="drill"><div class="row between"><span class="row">${playBtn(w)}<button class="icon-btn" data-act="saySlow" data-text="${esc(w)}" aria-label="Listen slowly">${ICON.slow}</button><b class="drillword">${esc(w)}</b></span>${sayBtn(w)}</div>${checkHTML(w)}</div>`).join("")}
  </section>
  <section class="panel"><span class="label">2 · Hear the difference</span><p class="muted small">These pairs differ only in this sound. Play both, then take the test.</p>
    ${s.pairs.map(([a, b]) => `<div class="pair"><span class="row">${playBtn(a)}<b>${esc(a)}</b></span><span class="muted">vs</span><span class="row">${playBtn(b)}<b>${esc(b)}</b></span></div>`).join("")}
    ${quiz ? q : `<div class="row"><button class="btn primary" data-act="quizStart">Start listening test</button></div>`}
  </section>
  <section class="panel"><span class="label">3 · Say the pair</span><p class="muted small">If you say one word and I hear the other one, I'll tell you.</p>
    ${s.pairs.map(([a, b]) => [[a, b], [b, a]]).flat().map(([t, o]) => `<div class="drill"><div class="row between"><b class="drillword">${esc(t)}</b>${sayBtn(t, o)}</div>${checkHTML(t)}</div>`).join("")}
  </section>
  ${recorderHTML(s.words[0])}`;
}
function quizRound() { const s = SOUNDS.find(x => x.id === soundId); const pair = s.pairs[Math.floor(Math.random() * s.pairs.length)]; quiz.cur = { pair: Math.random() < 0.5 ? pair : [pair[1], pair[0]], ans: pair[Math.random() < 0.5 ? 0 : 1] }; quiz.picked = null; render(); setTimeout(() => say(quiz.cur.ans, 1), 200); }

// ----- stats -----
function vStats() {
  const ids = deckIds(), all = Object.keys(WORDS).length;
  const cs = ids.map(card);
  const solid = cs.filter(c => c.s === "rev" && c.ivl >= 21).length, learning = cs.filter(c => c.s !== "new" && !(c.s === "rev" && c.ivl >= 21)).length;
  const hard = ids.filter(id => struggling(card(id))).sort((a, b) => card(b).fails - card(a).fails);
  const g = Object.entries(S.gender).filter(([id, x]) => x.w > 0 && WORDS[id]).sort((a, b) => b[1].w - a[1].w).slice(0, 12);
  const last7 = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - 6 + i); const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; return { k, l: d.toLocaleDateString("de-DE", { weekday: "short" }), v: (S.days[k]?.rev || 0) + (S.days[k]?.spoke || 0), met: goalMet(k) }; });
  const mx = Math.max(10, ...last7.map(x => x.v));
  return `<section class="hero"><h1>Fortschritt</h1><p class="muted">${Object.keys(S.cards).length} of ${all} words seen so far (A1 to B2).</p></section>
  <section class="stats">
    <div class="stat"><span class="label">Solid</span><b>${solid}</b><span class="small muted">3+ weeks apart</span></div>
    <div class="stat"><span class="label">Learning</span><b>${learning}</b></div>
    <div class="stat"><span class="label">Tricky</span><b>${hard.length}</b></div>
    <div class="stat"><span class="label">Streak</span><b>${streak()}</b><span class="small muted">days · best ${bestStreak()}</span></div>
  </section>
  <section class="panel"><span class="label">Last 7 days (reviews + spoken, 🔥 = daily goal)</span>
    <svg viewBox="0 0 350 120" role="img" aria-label="Activity over the last 7 days" style="width:100%;height:auto">
      ${last7.map((x, i) => { const h = Math.round(80 * x.v / mx); return `<rect x="${i * 50 + 10}" y="${92 - h}" width="30" height="${Math.max(h, 2)}" rx="4" fill="var(--ink)" opacity="${x.v ? 1 : .2}"></rect><text x="${i * 50 + 25}" y="${88 - h}" text-anchor="middle" font-size="11" fill="var(--muted)">${x.v || ""}</text><text x="${i * 50 + 25}" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">${x.met ? "🔥" : ""}${x.l}</text>`; }).join("")}
    </svg></section>
  <section class="panel"><div class="row between"><span class="label">Your way to B2</span><b class="num">${journey().pct}%</b></div>${journeyHTML()}<p class="small muted">${journey().n} of ${LESSONS.length} lessons done. ${nextMilestone()}</p>${LEVELS.map(lv => { const ls = levelLessons(lv), c = course(), nd = ls.filter(L => S.lessons[L.id]?.done).length, skipped = ls.every(L => S.lessons[L.id]?.skipped), passed = c.passed?.[lv];
      const status = skipped ? "Passed in the placement check" : passed ? `Passed the level check, ${new Date(passed).toLocaleDateString("de-DE", { day: "numeric", month: "short" })}` : c.check === lv ? "Level check is next" : c.remedial?.lv === lv ? "Strengthening before the check" : nd ? `${nd} of ${ls.length} lessons` : curLesson().level === lv ? "Started" : "Not yet";
      return `<div class="lvrow"><b>${lv}</b><span class="bar"><i style="width:${Math.round(100 * nd / ls.length)}%"></i></span><span class="small muted">${status}</span></div>`; }).join("")}
    <p class="small muted">I decide when you move up: every lesson part done, then a level check with 80%.</p>
    <div class="row" style="flex-wrap:wrap"><button class="linkbtn small" data-act="nav" data-view="course">Look up a lesson</button><button class="linkbtn small" data-act="startReview" data-mode="${micBlocked ? "type" : "speak"}">Extra word cards</button><button class="linkbtn small" data-act="openSound">Pronunciation trainer</button></div></section>
  <section class="panel"><span class="label">Tricky words</span>${hard.length ? `<div class="chips">${hard.map(id => `<span class="chip">${playBtn(WORDS[id].de)}${deHTML(WORDS[id])} <span class="muted small">missed ${card(id).fails}×</span></span>`).join("")}</div>` : `<p class="muted">None yet. Words you miss 3 times land here.</p>`}</section>
  ${g.length ? `<section class="panel"><span class="label">Articles you mix up</span><div class="chips">${g.map(([id, x]) => `<span class="chip">${playBtn(WORDS[id].de)}${deHTML(WORDS[id])} <span class="muted small">${x.w}× wrong</span></span>`).join("")}</div></section>` : ""}
  <section class="panel"><h2>Settings</h2>
    <div class="row between"><label for="rate">Speech speed</label><select id="rate" data-set="rate">${[[0.7, "Slow"], [0.85, "Calm"], [0.9, "Learner"], [1, "Normal"]].map(([v, l]) => `<option value="${v}" ${S.settings.rate === v ? "selected" : ""}>${l}</option>`).join("")}</select></div>
    <div class="row between"><label for="voice">German voice</label><select id="voice" data-set="voice"><option value="">Automatic</option>${voices.map(v => `<option value="${esc(v.voiceURI)}" ${S.settings.voice === v.voiceURI ? "selected" : ""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("")}</select></div>
    <div class="row"><button class="btn" data-act="say" data-text="Hallo! Schön, dass du Deutsch lernst. Wie geht es dir?">${ICON.play} Test voice</button></div>
    ${voices.length ? "" : `<p class="note">No German voice found on this device. On Windows, add German under Settings › Time & language › Speech; on a phone, install German text-to-speech in the system settings.</p>`}
  </section>
  ${remindSettings()}
  ${syncHTML()}
  <section class="panel"><h2>Backup</h2><p class="muted small">Progress is stored in this browser only. Copy the code below to move it to another browser or device, and paste a code to restore.</p>
    <textarea id="backup" class="field" spellcheck="false" aria-label="Backup code"></textarea>
    <div class="row"><button class="btn" data-act="exportData">Show my backup code</button><button class="btn" data-act="copyData">Copy</button><button class="btn" data-act="importData">Restore from code</button><button class="btn ghost" data-act="resetAsk">Reset all progress</button></div>
    <div id="resetBox" hidden><p class="note">This deletes all progress in this browser. <button class="btn" data-act="resetDo">Yes, delete everything</button></p></div>
  </section>`;
}

// ---------- Lehrer: chat with a German teacher that knows this progress ----------
// In-app chat goes through the Supabase function "lehrer" (it holds the Claude API key).
// Without it, the same teacher prompt and profile open in claude.ai or ChatGPT on Or's subscription.
// The teacher's memory lives here, in the progress that syncs to Supabase, not with the model
// provider: S.chats (conversations) and S.tnotes (notes the teacher asked to keep), so any
// model picks up where the last one stopped.
let chat = { busy: false, off: false, draft: "", providers: null, err: null };
// S.chats: [{ id, t, msgs }], oldest first; S.chatId is the one on screen.
function curChat() {
  if (S.chat) { if (S.chat.length) (S.chats ||= []).push({ id: Date.now(), t: Date.now(), msgs: S.chat }); delete S.chat; } // single-chat format from before
  S.chats ||= [];
  let c = S.chats.find(x => x.id === S.chatId);
  if (!c) { c = S.chats[S.chats.length - 1]; if (!c) S.chats.push(c = { id: Date.now(), t: Date.now(), msgs: [] }); S.chatId = c.id; }
  return c;
}
const cmsgs = () => curChat().msgs;
const chatTitle = c => { const m = c.msgs.find(x => x.role === "user"); return m ? (m.content.length > 60 ? m.content.slice(0, 57) + "…" : m.content) : "New conversation"; };
const tnotes = () => (S.tnotes ||= []);
try { const old = JSON.parse(localStorage.getItem("sprechstunde-chat")); if (old && old.length && !S.chat && !S.chats) S.chat = old; localStorage.removeItem("sprechstunde-chat"); } catch (e) {}
const saveChat = () => { const c = curChat(); c.msgs = c.msgs.slice(-40); S.chats = S.chats.filter(x => x.msgs.length || x.id === S.chatId).slice(-20); save(); };
function applyMemory(m) {
  if (!m) return;
  const keep = tnotes().filter((_, i) => !(m.remove || []).includes(i + 1));
  for (const text of m.add || []) if (text && !keep.some(n => n.text.toLowerCase() === text.toLowerCase())) keep.push({ text, t: Date.now() });
  S.tnotes = keep.slice(-40);
}
function logMiss(o) { (S.mlog ||= []).push({ ...o, t: Date.now() }); S.mlog = S.mlog.slice(-40); }
const wordLine = w => `${w.de}${w.pl && w.art ? ` (Pl. ${w.pl})` : ""} = ${w.en}`;
function learnerProfile() {
  const c = course(), L = curLesson(), now = Date.now(), out = [];
  const gi = c.gi?.[L.id] || 0;
  out.push(`Level: ${c.placed ? L.level : "not placed yet (placement check not done)"}. Current lesson: ${L.level} Lektion ${L.id} "${L.title}" (${L.en || ""}).`);
  out.push(`Grammar in this lesson: ${L.grammar.map((g, i) => g.t + (i < gi ? " (covered)" : i === gi ? " (next)" : "")).join("; ")}.`);
  if (L.cando) out.push(`Lesson goals: ${L.cando.join("; ")}.`);
  const done = LESSONS.filter(x => S.lessons[x.id]?.done).length, skipped = LESSONS.filter(x => S.lessons[x.id]?.skipped).length;
  out.push(`Lessons finished: ${done} of ${LESSONS.length}${skipped ? `, ${skipped} skipped after the placement check` : ""}. Words seen: ${Object.keys(S.cards).length}. Streak: ${streak()} days.`);
  const res = Object.entries(c.results || {}).map(([lv, r]) => `${lv} ${r.kind === "pcheck" ? "placement" : "level check"} ${Math.round(r.rate * 100)}%`);
  if (res.length) out.push(`Checks: ${res.join(", ")} (80% passes).`);
  if (c.remedial) out.push(`Currently in strengthening lessons for ${c.remedial.lv || "the last level"} before retaking the check.`);
  const rates = (c.rates || []).slice(-5); if (rates.length) out.push(`Right first time in the last lessons: ${rates.map(r => Math.round(r * 100) + "%").join(", ")}.`);
  const hard = Object.keys(S.cards).filter(id => WORDS[id] && struggling(card(id))).sort((a, b) => card(b).fails - card(a).fails).slice(0, 15);
  if (hard.length) out.push(`Words Or keeps missing: ${hard.map(id => `${wordLine(WORDS[id])} [missed ${card(id).fails}x]`).join("; ")}.`);
  const art = Object.entries(S.gender || {}).filter(([id, x]) => WORDS[id] && x.w > x.r / 2).sort((a, b) => b[1].w - a[1].w).slice(0, 8).map(([id]) => WORDS[id].de);
  if (art.length) out.push(`Articles Or gets wrong: ${art.join(", ")}.`);
  const recent = (S.mlog || []).filter(m => now - m.t < 14 * DAY).slice(-20);
  const kinds = { article: "wrong article", noart: "forgot the article", pron: "pronunciation/spelling close but off", other: "said a different word", miss: "wrong", dk: "didn't know it" };
  const wm = recent.filter(m => m.w && WORDS[m.w]).map(m => `${WORDS[m.w].de} (${kinds[m.k] || m.k || "missed"})`);
  if (wm.length) out.push(`Recent word mistakes (last 2 weeks): ${[...new Set(wm)].join("; ")}.`);
  const em = recent.filter(m => m.ex).map(m => { const [lid, i] = m.ex.split(":"), e = LESSON[lid]?.ex[i]; return e ? `"${e.q || e.a}" → correct: ${e.type === "mc" ? e.opts[e.a] : e.type === "gap" ? e.a.join(" … ") : e.a}${m.got ? ` (Or answered: ${m.got})` : ""}` : null; }).filter(Boolean);
  if (em.length) out.push(`Recent exercise mistakes: ${[...new Set(em)].slice(-8).join("; ")}.`);
  const bm = recent.filter(m => m.b && bstepOf(m.b)).map(m => `"${bstepOf(m.b).en}" → ${bstepOf(m.b).de}${m.got ? ` (Or said: ${m.got})` : ""}`);
  if (bm.length) out.push(`Recent sentence-building mistakes (English prompt → correct German): ${[...new Set(bm)].slice(-8).join("; ")}.`);
  const today_ = S.days[today()]; out.push(`Today: ${today_ ? `${today_.lessons || 0} lesson(s), ${Math.floor((today_.sec || 0) / 60)} min practice, ${today_.xp || 0} XP` : "no practice yet"}. Daily goal (one lesson or ${GOAL_MIN} minutes) ${goalMet(today()) ? "met" : "not met yet"}; best streak ${bestStreak()} days. Course progress: ${journey().pct}% of the way to B2.`);
  out.push(`How the app works: it leads Or through one planned daily lesson (warm-up of due words and sentences, new words, a grammar point with checked exercises, building sentences from English out loud, repeat-after-me, questions, and a short conversation with you). Or doesn't choose what to practise; the app and you do. ${today_?.lessons ? "Today's lesson is done, so in this chat give extra practice on Or's weak points from this profile." : "Today's lesson isn't done yet: if Or asks what to do, send them to start it (\"Start today's lesson\" on the Lernen tab) before extra practice."}`);
  out.push(tnotes().length ? `Teacher notes (kept by the app from earlier conversations, any model):\n${tnotes().map((n, i) => `${i + 1}. ${n.text} (${new Date(n.t).toISOString().slice(0, 10)})`).join("\n")}` : "Teacher notes: none yet.");
  return out.join("\n");
}
const TEACHER_PROMPT = `You are my personal German teacher. I'm working from A1 towards B2 with my app "Sprechstunde". Below is my current progress from the app. Use it: match my level (simple German with English help at A1/A2, more German from B1), focus on the words and grammar I keep getting wrong, and refer to them concretely. When I write German, answer the content first, then correct up to three mistakes (corrected sentence, changes in bold, the rule in one line). When I ask what to practise, give me a short exercise (3 to 5 items) right away and check my answers. Keep replies short, one question at a time, always give der/die/das and the plural for nouns, and be honest when I'm wrong.`;
const subPrompt = () => `${TEACHER_PROMPT}\n\nMy progress:\n${learnerProfile()}\n\nStart by telling me in two lines what you'd work on with me today, then give me the first exercise.`;
const chatUrl = (site) => (site === "claude" ? "https://claude.ai/new?q=" : "https://chatgpt.com/?q=") + encodeURIComponent(subPrompt());
const mdLite = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<i>$2</i>").replace(/\n/g, "<br>");
const STARTERS = ["Was soll ich heute üben?", "Explain my most common mistake", "Lass uns auf Deutsch plaudern", "Quiz me on my tricky words"];
const lehrerReady = () => CFG && auth && !chat.off;
async function loadProviders() {
  chat.providers = "loading";
  try {
    if (!(await freshToken())) throw 0;
    const r = await fetch(CFG.url + "/functions/v1/lehrer", { method: "POST", headers: { apikey: CFG.key, Authorization: "Bearer " + auth.access_token, "Content-Type": "application/json" }, body: JSON.stringify({ list: true }) });
    const d = await r.json().catch(() => ({}));
    chat.providers = r.ok && d.providers ? d.providers : [];
  } catch (e) { chat.providers = []; }
  chat.off = !chat.providers.length;
  if (view === "lehrer") render();
}
const modelLabel = id => (Array.isArray(chat.providers) && chat.providers.find(p => p.id === id) || {}).label || id;
function memoryPanel() {
  const n = tnotes();
  return `<details class="panel"><summary class="small">What I remember about you (${n.length})</summary>
    ${n.length ? `<ol class="notes">${n.map((x, i) => `<li><span>${esc(x.text)}</span><button class="linkbtn small" data-act="noteDel" data-i="${i}" aria-label="Forget this">Forget</button></li>`).join("")}</ol>` : `<p class="small muted">Nothing yet. I write notes here as we talk: your goals, mistakes you repeat, what we agreed to practise.</p>`}
    <p class="small muted">These notes are saved with your progress in the app, so every model (and Claude or ChatGPT through the buttons) gets them.</p></details>`;
}
function historyPanel() {
  curChat();
  const old = S.chats.filter(c => c.msgs.length).slice().reverse();
  if (!old.length || (old.length === 1 && old[0].id === S.chatId)) return "";
  const day = t => new Date(t).toLocaleDateString("de-DE", { day: "numeric", month: "short" });
  return `<details class="panel history" ${chat.histOpen ? "open" : ""}><summary class="small" data-act="histToggle">Conversations (${old.length})</summary>
    <ul class="convs">${old.map(c => `<li class="${c.id === S.chatId ? "on" : ""}"><button class="conv" data-act="chatOpen" data-id="${c.id}" ${chat.busy ? "disabled" : ""}><span>${esc(chatTitle(c))}</span><span class="small muted">${day(c.t || c.id)} · ${c.msgs.length} messages</span></button><button class="linkbtn small" data-act="chatDel" data-id="${c.id}" aria-label="Delete this conversation">Delete</button></li>`).join("")}</ul></details>`;
}
// the teacher sends Or to today's lesson first; free chat is for extra questions
function lessonNudge() {
  const c = course();
  if ((day().lessons || 0) > 0) return "";
  return `<section class="panel today">${teacherSays(c.placed ? "Today's lesson first: words, grammar, sentences, speaking and a talk with me. I've planned it all. Come back here any time with questions." : "First let's find your level with a short check. Then I plan every lesson for you.")}<button class="btn primary" data-act="teachGo">${ICON.mic} Start today's lesson</button></section>`;
}
function vLehrer() {
  setTimeout(() => { const l = $("#chatlog"); if (l && !l.dataset.seen) { l.dataset.seen = 1; l.scrollTop = l.scrollHeight; } }, 0);
  if (CFG && auth && chat.providers === null) loadProviders();
  const sub = `<div class="row" style="flex-wrap:wrap;justify-content:center"><a class="btn" href="${esc(chatUrl("claude"))}" target="_blank" rel="noopener">Open in Claude</a><a class="btn" href="${esc(chatUrl("chatgpt"))}" target="_blank" rel="noopener">Open in ChatGPT</a><button class="btn ghost" data-act="copyTeacher">Copy prompt</button></div>`;
  if (!lehrerReady()) return `<section class="hero"><h1>Lehrer</h1><p class="muted">Your German teacher, with your progress.</p></section>${lessonNudge()}
    <section class="panel today">${teacherSays(chat.off ? "The in-app teacher isn't switched on yet. Until then, open me in Claude or ChatGPT: your level, your tricky words, recent mistakes and my notes go along." : "Open me in Claude or ChatGPT. Your level, your tricky words, recent mistakes and my notes go along, so I know where to start.")}${sub}<p class="small muted">Uses your own Claude or ChatGPT subscription.</p></section>${memoryPanel()}`;
  const provs = Array.isArray(chat.providers) ? chat.providers : [];
  const cur = provs.some(p => p.id === S.settings.lehrerModel) ? S.settings.lehrerModel : provs[0]?.id;
  const picker = provs.length > 1 ? `<label class="small muted modelpick">Model <select class="field" data-set="lehrerModel">${provs.map(p => `<option value="${p.id}" ${p.id === cur ? "selected" : ""}>${esc(p.label)}</option>`).join("")}</select></label>` : provs.length ? `<span class="small muted">Model: ${esc(provs[0].label)}</span>` : "";
  const msgs = cmsgs().map((m, i) => m.role === "assistant"
    ? `<div class="teacher"><span class="avatar" aria-hidden="true">L</span><div class="bubble">${mdLite(m.content)}<div class="row between"><button class="icon-btn" data-act="chatSay" data-i="${i}" aria-label="Read aloud">${ICON.play}</button>${m.by ? `<span class="small muted">${esc(modelLabel(m.by))}</span>` : ""}</div></div></div>`
    : `<div class="me"><div class="bubble">${esc(m.content).replace(/\n/g, "<br>")}</div></div>`).join("");
  return `<section class="hero"><h1>Lehrer</h1><p class="muted">Ask anything. I know your level and what you keep missing.</p>${picker}</section>
  ${lessonNudge()}${historyPanel()}
  <section class="panel chat">
    <div class="chatlog" id="chatlog">
    ${msgs || teacherSays(`Hallo Or! You're at ${curLesson().level}, Lektion ${curLesson().id}. Ask me a question, write me a sentence in German, or pick one below.`)}
    ${chat.busy ? `<div class="teacher"><span class="avatar" aria-hidden="true">L</span><div class="bubble muted">…</div></div>` : ""}
    ${chat.err && !chat.busy ? `<div class="verdict bad"><div class="vicon">!</div><div><b>${esc(chat.err)}</b>${cmsgs().length && cmsgs()[cmsgs().length - 1].role === "user" ? `<div><button class="btn small" data-act="chatRetry">Try again</button></div>` : ""}</div></div>` : ""}
    ${!cmsgs().length && !chat.busy ? `<div class="row" style="flex-wrap:wrap">${STARTERS.map(s => `<button class="btn ghost small starter" data-act="chatStarter" data-text="${esc(s)}">${esc(s)}</button>`).join("")}</div>` : ""}
    </div>
    <div class="chatin"><textarea id="lehrerIn" class="field ${dict ? "live" : ""}" rows="2" placeholder="Schreib mir … (Enter sends)" ${chat.busy ? "disabled" : "autofocus"}>${esc(chat.draft)}</textarea>
      ${dict ? `<div class="recording" role="status"><span class="dot"></span> Recording… speak German, tap Stop when you're done</div>` : ""}
      <div class="row">${micBlocked ? "" : dict ? `<button class="btn rec-stop" data-act="chatMic" aria-label="Stop recording">■ Stop</button>` : `<button class="icon-btn" data-act="chatMic" aria-label="Start recording">${ICON.mic}</button>`}<div class="umlauts">${["ä", "ö", "ü", "ß"].map(u => `<button data-act="chatIns" data-ch="${u}">${u}</button>`).join("")}</div><button class="btn primary" data-act="chatSend" ${chat.busy ? "disabled" : ""}>Send</button></div></div>
    ${cmsgs().length ? `<button class="linkbtn small" data-act="chatNew" ${chat.busy ? "disabled" : ""}>New conversation (this one is kept, and my notes stay)</button>` : ""}
  </section>
  ${memoryPanel()}
  <details class="panel"><summary class="small">Use my Claude or ChatGPT subscription instead</summary>${sub}</details>`;
}
async function chatSend(text, retry) {
  if (chat.busy) return;
  if (dict) { stopDictation(); if (text == null) text = chat.draft; }
  const conv = curChat();
  if (!retry) { text = (text ?? $("#lehrerIn")?.value ?? "").trim(); if (!text) return; conv.msgs.push({ role: "user", content: text, t: Date.now() }); chat.draft = ""; }
  conv.t = Date.now();
  chat.err = null; chat.busy = true; saveChat(); render(); scrollChat();
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 90e3);
  try {
    if (!(await freshToken())) throw new Error("Sign in again to talk to your teacher.");
    const r = await fetch(CFG.url + "/functions/v1/lehrer", { method: "POST", signal: ctl.signal, headers: { apikey: CFG.key, Authorization: "Bearer " + auth.access_token, "Content-Type": "application/json" }, body: JSON.stringify({ provider: S.settings.lehrerModel || "", messages: conv.msgs.map(({ role, content }) => ({ role, content })), profile: learnerProfile() }) });
    const d = await r.json().catch(() => ({}));
    if (r.status === 404 || d.error === "not_configured") { chat.off = true; chat.providers = []; throw new Error("The teacher isn't set up on the server yet."); }
    if (!r.ok || !d.reply) throw new Error(d.error || d.message || `The teacher couldn't answer (error ${r.status}).`);
    applyMemory(d.memory);
    conv.msgs.push({ role: "assistant", content: d.reply, by: d.provider, t: Date.now() }); conv.t = Date.now(); saveChat();
  } catch (e) {
    // keep Or's message; show what went wrong in the chat with a retry button
    chat.err = e.name === "AbortError" ? "No answer after 90 seconds. Try again, or pick another model." : (e.message || "Couldn't reach the teacher. Check your connection.");
  } finally { clearTimeout(timer); }
  chat.busy = false; if (view === "lehrer") { render(); scrollChat(); }
}
const scrollChat = () => { const l = $("#chatlog"); if (l) l.scrollTop = l.scrollHeight; const b = $(".chatin"); if (b) b.scrollIntoView({ block: "nearest" }); };
// Dictation in the chat: adds to what's already typed and keeps listening (restarting after
// pauses) until Or taps Stop or sends.
let dict = null;
const joinText = (a, b) => !b ? a : !a ? b : a + (/\s$/.test(a) ? "" : " ") + b.trim();
function chatMic() {
  if (dict) return stopDictation();
  if (!SR) { micBlocked = true; return render(); }
  if (synth) synth.cancel(); if (player) player.pause();
  dict = { base: $("#lehrerIn")?.value || chat.draft || "", interim: "" };
  const show = () => { const v = joinText(dict.base, dict.interim); chat.draft = dict.base; const i = $("#lehrerIn"); if (i) { i.value = v; i.scrollTop = i.scrollHeight; } };
  const start = () => {
    const r = new SR(); r.lang = "de-DE"; r.interimResults = true; r.continuous = true; dict.rec = r;
    r.onresult = e => {
      if (!dict || dict.rec !== r) return;
      let interim = "";
      for (let k = e.resultIndex; k < e.results.length; k++) { const x = e.results[k]; if (x.isFinal) dict.base = joinText(dict.base, x[0].transcript); else interim += x[0].transcript; }
      dict.interim = interim; show();
    };
    r.onerror = e => { if (!dict || dict.rec !== r) return; if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "audio-capture") { const err = e.error; stopDictation(); micError(err); render(); } };
    r.onend = () => { if (dict && dict.rec === r) { dict.base = joinText(dict.base, dict.interim); dict.interim = ""; show(); try { start(); } catch (e) { stopDictation(); } } };
    r.start();
  };
  try { start(); } catch (e) { dict = null; return toast("Couldn't start the microphone."); }
  render();
}
function stopDictation() {
  if (!dict) return;
  const d = dict; dict = null;
  d.base = joinText(d.base, d.interim); chat.draft = d.base;
  try { d.rec && d.rec.stop(); } catch (e) {}
  if (view === "lehrer") { render(); const i = $("#lehrerIn"); if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); } }
}

// ---------- actions ----------
// ---------- cloud sync (hosted build only, configured by window.SYNC_CONFIG) ----------
// Progress lives in localStorage as before; when signed in it is also saved to a private
// Supabase table (row-level security: only the owner's account can read or write it).
var CFG = window.SYNC_CONFIG && window.SYNC_CONFIG.url ? window.SYNC_CONFIG : null;
var AUTH_KEY = "sprechstunde-auth", auth = null, syncT = null, syncStatus = "off", signin = { sent: false };
try { auth = JSON.parse(localStorage.getItem(AUTH_KEY)); } catch (e) {}
function setAuth(d) {
  auth = d && d.access_token ? { access_token: d.access_token, refresh_token: d.refresh_token, expires_at: +d.expires_at || Math.floor(Date.now() / 1000) + (+d.expires_in || 3600), email: (d.user && d.user.email) || jwt(d.access_token).email } : null;
  try { auth ? localStorage.setItem(AUTH_KEY, JSON.stringify(auth)) : localStorage.removeItem(AUTH_KEY); } catch (e) {}
}
function jwt(t) { try { return JSON.parse(decodeURIComponent(escape(atob(t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))))); } catch (e) { return {}; } }
async function sb(path, opts = {}) {
  const r = await fetch(CFG.url + path, { ...opts, headers: { apikey: CFG.key, "Content-Type": "application/json", ...(auth && !opts.anon ? { Authorization: "Bearer " + auth.access_token } : {}), ...(opts.headers || {}) } });
  const txt = await r.text(); let body = null; try { body = txt ? JSON.parse(txt) : null; } catch (e) {}
  if (!r.ok) { const err = new Error((body && (body.msg || body.message || body.error_description)) || r.status); err.status = r.status; throw err; }
  return body;
}
async function freshToken() {
  if (!auth) return false;
  if (auth.expires_at * 1000 - Date.now() > 60e3) return true;
  try { setAuth(await sb("/auth/v1/token?grant_type=refresh_token", { method: "POST", anon: true, body: JSON.stringify({ refresh_token: auth.refresh_token }) })); return true; }
  catch (e) { if (e.status === 400 || e.status === 401) { setAuth(null); render(); } return false; }
}
// back from the email link: the tokens arrive in the address after #
function readAuthHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  if (h.get("access_token")) setAuth({ access_token: h.get("access_token"), refresh_token: h.get("refresh_token"), expires_at: h.get("expires_at"), expires_in: h.get("expires_in") });
  else if (h.get("error_description")) setTimeout(() => toast(h.get("error_description")), 300);
  if (h.get("access_token") || h.get("error_description")) history.replaceState(null, "", location.pathname + location.search);
}
function queueSync() { if (!CFG || !auth) return; clearTimeout(syncT); syncT = setTimeout(() => push().catch(() => { syncStatus = "error"; }), 3000); }
async function push() {
  if (!(await freshToken())) return;
  syncStatus = "saving";
  await sb("/rest/v1/progress?on_conflict=user_id", { method: "POST", headers: { Prefer: "resolution=merge-duplicates,return=minimal" }, body: JSON.stringify({ user_id: jwt(auth.access_token).sub, data: S, updated_at: new Date().toISOString() }) });
  syncStatus = "ok";
}
async function pull() {
  if (!(await freshToken())) return;
  try {
    const rows = await sb("/rest/v1/progress?select=data");
    const remote = rows && rows[0] && rows[0].data;
    if (remote && (remote.updatedAt || 0) > (S.updatedAt || 0)) {
      S = Object.assign(fresh(), remote); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
      syncStatus = "ok"; if (view !== "teach") render();
    } else await push();
  } catch (e) { syncStatus = "error"; if (e.status === 401 || e.status === 403) toast("Couldn't load your progress: this account has no access."); }
}
async function sendSignin(email) {
  email = email.trim().toLowerCase();
  if (CFG.email && email !== CFG.email.toLowerCase()) return toast("This app is private.");
  try { await sb(`/auth/v1/otp?redirect_to=${encodeURIComponent(location.origin + location.pathname)}`, { method: "POST", anon: true, body: JSON.stringify({ email, create_user: true }) }); signin = { sent: true, email }; render(); }
  catch (e) { toast("Couldn't send the email: " + e.message); }
}
async function verifyCode(code) {
  try { setAuth(await sb("/auth/v1/verify", { method: "POST", anon: true, body: JSON.stringify({ type: "email", email: signin.email, token: code.trim() }) })); signin = { sent: false }; render(); pull(); }
  catch (e) { toast("That code didn't work. Use the newest email, or tap its link."); }
}
async function passwordSignin(email, pw) {
  if (CFG.email && email.trim().toLowerCase() !== CFG.email.toLowerCase()) return toast("This app is private.");
  try { setAuth(await sb("/auth/v1/token?grant_type=password", { method: "POST", anon: true, body: JSON.stringify({ email: email.trim(), password: pw }) })); signin = { sent: false }; render(); pull(); }
  catch (e) { toast(/confirm/i.test(e.message) ? "Confirm your email first: tap the link in the email from Supabase." : "Wrong email or password."); }
}
async function createPassword(email, pw) {
  if (CFG.email && email.trim().toLowerCase() !== CFG.email.toLowerCase()) return toast("This app is private.");
  if ((pw || "").length < 8) return toast("Use at least 8 characters.");
  try {
    const d = await sb(`/auth/v1/signup?redirect_to=${encodeURIComponent(location.origin + location.pathname)}`, { method: "POST", anon: true, body: JSON.stringify({ email: email.trim(), password: pw }) });
    if (d && d.access_token) { setAuth(d); render(); pull(); return; }
    signin = { mode: "confirm", email: email.trim() }; render();
  } catch (e) { toast(/registered|exists/i.test(e.message) ? "This email already has an account. Sign in, or use “Email me a link” in Safari and set a password under Fortschritt." : "Couldn't create it: " + e.message); }
}
async function setPassword(pw) {
  if ((pw || "").length < 8) return toast("Use at least 8 characters.");
  if (!(await freshToken())) return;
  try { await sb("/auth/v1/user", { method: "PUT", body: JSON.stringify({ password: pw }) }); toast("Password saved. Use it to sign in on the home-screen app."); $("#newpw").value = ""; }
  catch (e) { toast("Couldn't save it: " + e.message); }
}
function vSignin() {
  const m = signin.mode;
  const email = `<label class="label" for="email">Email</label><input id="email" class="typein" type="email" autocomplete="username" value="${esc(signin.email || CFG.email || "")}">`;
  let body;
  if (signin.sent) body = `<p>I sent a sign-in link to <b>${esc(signin.email)}</b>. Open it on this device. If you're using the home-screen app, sign in with your password instead.</p><button class="linkbtn small" data-act="signinAgain">Back</button>`;
  else if (m === "confirm") body = `<p>Almost done. Supabase sent an email to <b>${esc(signin.email)}</b>: tap the confirm link in it, then come back here and sign in with your password.</p><button class="btn primary big" data-act="signinAgain">Sign in</button>`;
  else if (m === "create") body = `${email}<label class="label" for="pw">Choose a password (8+ characters)</label><input id="pw" class="typein" type="password" autocomplete="new-password" autofocus>
    <button class="btn primary big" data-act="createPassword">Create my account</button><button class="linkbtn small" data-act="signinAgain">I already have one</button>`;
  else body = `${email}<label class="label" for="pw">Password</label><input id="pw" class="typein" type="password" autocomplete="current-password" autofocus>
    <button class="btn primary big" data-act="pwSignin">Sign in</button>
    <div class="row" style="flex-wrap:wrap;justify-content:center"><button class="linkbtn small" data-act="createMode">First time? Create a password</button><button class="linkbtn small" data-act="sendSignin">Email me a sign-in link</button></div>`;
  return `<section class="hero"><h1>Sprechstunde</h1><p class="muted">Your private German course. Sign in to keep your progress on every device.</p></section><section class="panel today">${body}</section>`;
}
const syncHTML = () => !CFG ? "" : `<section class="panel"><h2>Account</h2><p class="small">${auth ? `Signed in as <b>${esc(auth.email || "")}</b>. ${syncStatus === "error" ? "Couldn't reach the server; your progress is safe on this device and syncs when it can." : "Progress is saved to your account automatically."}` : "Not signed in."}</p>${auth ? `<div class="row" style="flex-wrap:wrap"><input id="newpw" class="field" type="password" autocomplete="new-password" placeholder="New password (8+ characters)" style="max-width:260px"><button class="btn" data-act="setPassword">Set password</button></div><p class="small muted">The password is for the iPhone home-screen app, where email links don't open.</p><button class="btn" data-act="signOut">Sign out</button>` : ""}</section>`;

const A = {
  remindOn: () => { const v = ($("#remindAt") || {}).value || "19:00"; remindOn(v); },
  remindOff: () => remindOff(),
  remindTest: () => remindTest(),
  remindNo: () => { remind = { off: true }; saveRemind(); render(); },
  sendSignin: () => sendSignin($("#email").value),
  pwSignin: () => passwordSignin($("#email").value, $("#pw").value),
  createMode: () => { signin = { mode: "create", email: $("#email").value }; render(); },
  createPassword: () => createPassword($("#email").value, $("#pw").value),
  setPassword: () => setPassword($("#newpw").value),
  signinAgain: () => { signin = { email: signin.email }; render(); },
  signOut: () => { setAuth(null); render(); },
  chatSend: () => chatSend(),
  chatRetry: () => chatSend(null, true),
  chatStarter: d => chatSend(d.text),
  chatSay: d => sayDevice(cmsgs()[+d.i].content.replace(/\*\*?|\([^)]*\)/g, "")),
  chatMic: () => chatMic(),
  chatIns: d => { const i = $("#lehrerIn"); if (!i) return; const p = i.selectionStart ?? i.value.length; i.value = i.value.slice(0, p) + d.ch + i.value.slice(p); chat.draft = i.value; i.focus(); i.setSelectionRange(p + 1, p + 1); },
  noteDel: d => { tnotes().splice(+d.i, 1); save(); render(); },
  chatNew: () => { if (chat.busy) return; if (dict) stopDictation(); const c = { id: Date.now(), t: Date.now(), msgs: [] }; curChat(); S.chats.push(c); S.chatId = c.id; chat.err = null; chat.draft = ""; saveChat(); render(); },
  chatOpen: d => { if (chat.busy) return; if (dict) stopDictation(); S.chatId = +d.id; chat.err = null; chat.histOpen = false; saveChat(); render(); const l = $("#chatlog"); if (l) l.scrollTop = l.scrollHeight; },
  chatDel: d => { S.chats = (S.chats || []).filter(c => c.id !== +d.id); if (S.chatId === +d.id) S.chatId = null; chat.histOpen = true; saveChat(); render(); },
  histToggle: (d, el) => { chat.histOpen = el.parentElement.open = !el.parentElement.open; },
  copyTeacher: () => navigator.clipboard?.writeText(subPrompt()).then(() => toast("Copied. Paste it into Claude or ChatGPT."), () => toast("Couldn't copy")),
  teachStart: () => { closeCel(); startTeach(); },
  pqPick: d => pqPick(+d.k),
  teachNext: () => nextTask(),
  teachEnd: () => { if (rec) rec.abort(); T = null; view = "home"; render(); },
  teachDone: () => { closeCel(); T = null; view = "home"; render(); window.scrollTo(0, 0); },
  teachAgain: () => { closeCel(); startTeach(); },
  teachListen: () => teachListen(false), teachListenType: () => teachListen(false),
  teachRetry: () => teachListen(true), teachRetryType: () => teachListen(true),
  teachShadow: () => teachShadow(), teachShadowType: () => teachShadow(),
  teachTalk: () => teachTalk(), teachTalkType: () => teachTalk(),
  teachDontKnow: () => teachDontKnow(), teachOverride: () => teachOverride(),
  teachExCheck: () => teachExCheck(),
  teachBuild: () => teachBuild(), teachBuildType: () => teachBuild(),
  teachBuildHint: () => { T.hint++; render(); $("#typein")?.focus(); },
  teachBuildShow: () => teachBuildShow(), teachBuildOverride: () => teachBuildOverride(),
  teachSkip: () => nextTask(),
  teachGo: () => { if (dict) stopDictation(); view = "home"; try { localStorage.setItem("sprechstunde-view", view); } catch (e) {} startTeach(); },
  teachConvo: () => teachConvo(), teachConvoType: () => teachConvo(),
  convoRetry: () => { const t = task(); if (!t?.cv) return; t.cv.err = null; convoNext(t); },
  convoSay: d => { const m = task()?.cv?.msgs[+d.i]; if (m) convoSpeak(m.content); },
  nav: d => { if (dict) stopDictation(); view = d.view; try { localStorage.setItem("sprechstunde-view", view); } catch (e) {} if (view === "lehrer" && chat.off) { chat.off = false; chat.providers = null; } if (view === "course") lessonTab = "list"; if (view !== "review") { gsess = null; } if (view === "review" && sess && !sess.cur) sess = null; if (view === "speak") sp = null; render(); window.scrollTo(0, 0); },
  say: d => say(d.text),
  openLesson: d => { closeCel(); lessonId = +d.id; lessonTab = "start"; view = "course"; render(); window.scrollTo(0, 0); },
  ltab: d => { lessonTab = d.tab; render(); window.scrollTo(0, 0); },
  startLesson: d => { S.lessons[d.id] = { ...(S.lessons[d.id] || {}), started: Date.now() }; save(); toast(`${LESSON[d.id].words.length} words added to your cards`); lessonTab = "words"; render(); },
  finishPart: d => { finishPart(lessonId, d.part); render(); },
  closeCelebrate: () => closeCel(),
  ltabClose: d => { closeCel(); lessonTab = d.tab; render(); window.scrollTo(0, 0); },
  pick: (d, el) => { el.parentElement.querySelectorAll(".opt").forEach(o => o.removeAttribute("aria-pressed")); el.setAttribute("aria-pressed", "true"); el.parentElement.querySelectorAll(".opt").forEach(o => o.style.boxShadow = ""); el.style.boxShadow = "0 0 0 2px var(--ink)"; },
  tile: (d, el) => { const i = d.i, line = $(`[data-line="${i}"]`), pool = $(`[data-pool="${i}"]`); (el.parentElement === pool ? line : pool).append(el); },
  resetEx: () => render(),
  checkEx: () => {
    const L = LESSON[lessonId]; let score = 0;
    L.ex.forEach((e, i) => {
      const box = $(`.ex[data-i="${i}"]`), fb = box.querySelector(".fb"); let ok = false;
      if (e.type === "mc") { const p = box.querySelector('[aria-pressed="true"]'); box.querySelectorAll(".opt").forEach((o, k) => { o.classList.toggle("right", k === e.a); if (o === p && k !== e.a) o.classList.add("wrong"); }); ok = p && +p.dataset.k === e.a; }
      if (e.type === "gap") { ok = true; box.querySelectorAll(".gapin").forEach((inp, k) => { const r = e.a[k].split("/").some(x => norm(x) === norm(inp.value)); inp.classList.toggle("right", r); inp.classList.toggle("wrong", !r); ok = ok && r; }); if (!ok) fb.dataset.ans = e.a.join(" … "); }
      if (e.type === "order") { const got = [...box.querySelectorAll(`[data-line="${i}"] .tile`)].map(t => t.textContent).join(" "); ok = norm(got) === norm(e.a); }
      fb.className = "fb " + (ok ? "ok" : "bad");
      fb.innerHTML = ok ? "Richtig!" : `Answer: ${esc(e.type === "mc" ? e.opts[e.a] : e.type === "gap" ? e.a.map(x => x.split("/")[0]).join(" … ") : e.a)}`;
      if (e.why) fb.innerHTML += ` <span class="muted">${esc(e.why)}</span>`;
      if (ok) score++;
    });
    const prev = S.ex[lessonId] || 0;
    S.ex[lessonId] = Math.max(prev, score); save();
    $("#exScore").textContent = `${score} / ${L.ex.length}`;
    addXP(Math.max(0, score - prev) * 5, "exercises");
    const pass = score >= Math.ceil(L.ex.length * 0.7), n = stars(lessonId);
    if (pass) {
      const first = finishPart(lessonId, "ex");
      if (!lessonState(lessonId).done || !first) {
        celebrate({ title: score === L.ex.length ? "Perfekt!" : "Bestanden!", starsN: score === L.ex.length ? 3 : score / L.ex.length >= 0.8 ? 2 : 1, sub: `${score} of ${L.ex.length} right.${score < L.ex.length ? " Fix the red ones and check again for 3 stars." : ""}${score > prev && prev ? " New best!" : ""}`, big: score === L.ex.length, actions: `<button class="btn primary" data-act="ltabClose" data-tab="speak">Next: Speaking →</button>` });
      }
    } else { $("#exScore").textContent += ` · ${Math.ceil(L.ex.length * 0.7)} needed to pass. Look at the answers and try again.`; }
  },
  startReview: d => { gsess = null; startReview(d.mode || "flip"); },
  endReview: () => { if (rec) rec.abort(); sess = null; render(); },
  learnt: () => { sess.verdict = null; const id = sess.cur; S.cards[id] = { ...card(id), s: "learn", step: 0, due: Date.now() + MIN, last: Date.now() }; day().nw++; sess.q.shift(); sess.q.splice(Math.min(sess.q.length, 3), 0, id); nextCard(); save(); render(); },
  reveal: () => { sess.phase = "show"; sess.result = null; render(); say(WORDS[sess.cur].de); },
  grade: d => gradeCard(+d.r),
  ins: d => { const i = $("#typein"); if (!i) return; const p = i.selectionStart ?? i.value.length; i.value = i.value.slice(0, p) + d.ch + i.value.slice(p); i.focus(); i.setSelectionRange(p + 1, p + 1); },
  checkType: () => { const i = $("#typein"); const v = i ? i.value.trim() : ""; if (!v) return i && i.focus(); const w = WORDS[sess.cur]; sess.result = feedback(checkWord(v, w), w, v, true); sess.phase = "show"; render(); say(w.de); },
  speakWord: () => speakWord(),
  cardListen: () => cardListen(false),
  cardRetry: () => cardListen(true),
  cardNext: () => cardAdvance(),
  cardOverride: () => { sess.grade = 2; cardAdvance(); },
  dontKnow: () => { const w = WORDS[sess.cur]; sess.verdict = { v: "bad", grade: 0, kind: "dk", title: "Here it is", detail: "Listen, then say it out loud. It comes back in a few minutes." }; sess.grade = 0; render(); say(w.de); },
  startGender: () => { sess = null; startGender(); },
  endGender: () => { gsess = null; render(); },
  gpick: d => { if (gsess.picked) return; const w = WORDS[gsess.q[gsess.i]]; gsess.picked = d.a; const g = S.gender[w.id] ||= { r: 0, w: 0 }; if (d.a === w.art) { g.r++; gsess.ok++; } else g.w++; day().rev++; save(); render(); say(w.de); },
  gnext: () => { gsess.i++; gsess.picked = null; render(); if (gsess.i >= gsess.q.length) { addXP(gsess.ok, "articles"); if (gsess.ok / gsess.q.length >= 0.8) celebrate({ title: gsess.ok === gsess.q.length ? "Alle richtig!" : "Sehr gut!", sub: `${gsess.ok} of ${gsess.q.length} articles right.` }); } },
  startSpeak: d => startSpeak(d.kind, d.lesson),
  endSpeak: () => { if (rec) rec.abort(); sp = null; render(); },
  spSay: d => sayCurrent(d.slow ? 0.65 : undefined),
  spListen: () => spListen(),
  spRetry: () => { sp.result = null; sp.heard = ""; for (const k in chk) delete chk[k]; render(); },
  spNext: () => {
    if (rec) rec.abort(); recState = null; sp.i++; sp.result = null; sp.heard = ""; render();
    if (sp.i >= sp.items.length) {
      if (sp.total) { if (!micBlocked) addXP(5, "round"); if (!(sp.lesson && finishPart(sp.lesson, "speak") && lessonState(sp.lesson).done)) celebrate({ title: "Gut gesprochen!", sub: `You spoke ${sp.total} times this round.${sp.lesson && lessonState(sp.lesson).parts?.speak ? ` Speaking step for Lektion ${sp.lesson} is done.` : ""}` }); }
      return;
    }
    setTimeout(() => sayCurrent(), 200);
  },
  spHide: () => { sp.hide = !sp.hide; render(); },
  saySlow: d => say(d.text, 0.7),
  check: (d, el) => checkSay(d.text, d.partner, el),
  recStart: d => recStart(d.text),
  recStop: () => { if (recState && recState.mr && recState.mr.state === "recording") recState.mr.stop(); },
  recPlay: () => playMine(),
  recCompare: () => recCompare(),
  openSound: d => { soundId = d.id || null; quiz = null; view = "sounds"; render(); window.scrollTo(0, 0); },
  quizStart: () => { quiz = { n: 0, ok: 0 }; quizRound(); },
  quizReplay: () => say(quiz.cur.ans, 1),
  quizPick: d => { quiz.picked = d.w; if (d.w === quiz.cur.ans) quiz.ok++; render(); },
  quizNext: () => { quiz.n++; if (quiz.n < 8) quizRound(); else render(); },
  unhide: () => { if (sp && sp.hide && !sp.result) { sp.hide = false; render(); } },
  selfReveal: () => { sp.total++; day().spoke++; sp.result = { self: true }; save(); render(); },
  exportData: () => { $("#backup").value = btoa(unescape(encodeURIComponent(JSON.stringify(S)))); },
  copyData: () => { const t = $("#backup"); if (!t.value) A.exportData(); navigator.clipboard?.writeText(t.value).then(() => toast("Copied"), () => { t.select(); toast("Select all and copy"); }) ?? (t.select(), toast("Select all and copy")); },
  importData: () => { try { const v = $("#backup").value.trim(); const o = JSON.parse(decodeURIComponent(escape(atob(v)))); if (!o.cards) throw 0; S = Object.assign(fresh(), o); save(); toast("Progress restored"); render(); } catch (e) { toast("That code didn't work. Paste the whole backup code."); } },
  resetAsk: () => { $("#resetBox").hidden = false; },
  resetDo: () => { S = fresh(); save(); sess = gsess = sp = null; toast("Progress reset"); render(); }
};

document.addEventListener("click", e => {
  if (e.target.classList.contains("celebrate")) return closeCel();
  const el = e.target.closest("[data-act]"); if (!el) return;
  const f = A[el.dataset.act]; if (f) { e.preventDefault(); f(el.dataset, el); }
});
document.addEventListener("input", e => { if (e.target.id === "lehrerIn") { chat.draft = e.target.value; if (dict) { dict.base = e.target.value; dict.interim = ""; } } });
document.addEventListener("change", e => {
  const k = e.target.dataset.set; if (!k) return;
  S.settings[k] = k === "voice" || k === "lehrerModel" ? e.target.value : +e.target.value; save(); toast("Saved");
});
document.addEventListener("keydown", e => {
  const cel = document.querySelector(".celebrate");
  if (cel) { if (e.key === "Escape") { e.preventDefault(); closeCel(); } return; }
  if (view === "teach" && T) {
    if (e.key !== "Enter" && !(e.key === " " && !e.target.matches("input, textarea"))) return;
    const b = $('#main [data-act="teachNext"]') || $('#main [data-act$="Type"]') || $('#main .mic') || $('#main [data-act="teachExCheck"]');
    if (b && !(e.key === "Enter" && e.target.matches("button"))) { e.preventDefault(); b.click(); }
    return;
  }
  if (e.target.id === "lehrerIn") { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); chatSend(); } return; }
  if (e.target.matches("input, textarea, select")) { if (e.key === "Enter" && e.target.id === "typein") { e.preventDefault(); A.checkType(); } if (e.key === "Enter" && e.target.id === "pw") (signin.mode === "create" ? A.createPassword() : A.pwSignin()); return; }
  if (view === "review" && gsess && gsess.i < gsess.q.length) {
    if (!gsess.picked && ["1", "2", "3"].includes(e.key)) A.gpick({ a: ["der", "die", "das"][+e.key - 1] });
    else if (gsess.picked && (e.key === " " || e.key === "Enter")) { e.preventDefault(); A.gnext(); }
    return;
  }
  if (view === "review" && sess && sess.cur && sess.mode === "speak" && !micBlocked) {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); if (sess.verdict) { card(sess.cur).s === "new" ? A.learnt() : A.cardNext(); } else A.cardListen(); }
    return;
  }
  if (view === "review" && sess && sess.cur) {
    const c = card(sess.cur);
    if (sess.phase === "ask" && (e.key === " " || e.key === "Enter")) { e.preventDefault(); c.s === "new" ? A.learnt() : sess.mode === "type" ? null : A.reveal(); }
    else if (sess.phase === "show" && !(sess.result && sess.result.auto != null) && ["1", "2", "3", "4"].includes(e.key)) gradeCard(+e.key - 1);
    else if (sess.phase === "show" && sess.result && sess.result.auto != null && (e.key === " " || e.key === "Enter")) { e.preventDefault(); gradeCard(sess.result.auto); }
  }
});

if (CFG) { readAuthHash(); pull().then(remindRefresh); window.addEventListener("focus", () => pull()); }
render();
})();
