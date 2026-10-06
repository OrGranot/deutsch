// Validates level-exam item files. Usage: node validate-exam.js src/exam/*.js
const fs = require("fs");
global.window = {};
eval(fs.readFileSync(__dirname + "/src/audio-index.js", "utf8"));
const AIDX = window.AUDIO_INDEX;
const audioKey = t => { let h = 0x811c9dc5; for (const c of String(t).trim()) { h ^= c.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(36); };
global.LESSONS = [];
eval(fs.readFileSync(__dirname + "/src/data.js", "utf8").replace("const LESSONS", "LESSONS"));
for (const n of ["a2-1", "a2-2", "b1-1", "b1-2", "b2-1", "b2-2"]) eval(fs.readFileSync(__dirname + "/src/levels/" + n + ".js", "utf8"));
const LESSON = Object.fromEntries(LESSONS.map(L => [L.id, L]));
const files = process.argv.slice(2).filter(f => f.endsWith(".js"));
global.EXAM = [];
for (const f of files) eval(fs.readFileSync(f, "utf8"));
const norm = s => String(s).toLowerCase().replace(/[^\p{L}\p{N} ]/gu, " ").replace(/\s+/g, " ").trim();
const errs = [], ids = new Set(), qs = new Map();
const courseQ = new Set(LESSONS.flatMap(L => L.ex.map(e => norm(e.q || e.a))));
const SK = { grammar: ["mc"], vocab: ["mc"], writing: ["gap", "tr"], reading: ["mc"], listening: ["mc", "dict"] };
for (const x of EXAM) {
  const w = x.id || JSON.stringify(x).slice(0, 60);
  if (!x.id || !/^L\d+-[gvwrl]\d+$/.test(x.id)) errs.push(`${w}: bad id`);
  if (ids.has(x.id)) errs.push(`${w}: duplicate id`); ids.add(x.id);
  if (!LESSON[x.lesson]) errs.push(`${w}: unknown lesson ${x.lesson}`);
  if (!SK[x.skill] || !SK[x.skill].includes(x.type)) errs.push(`${w}: skill/type ${x.skill}/${x.type} not allowed`);
  if (!x.topic) errs.push(`${w}: missing topic`);
  if (x.skill === "grammar" && !x.why) errs.push(`${w}: grammar item needs why`);
  if (x.type === "mc") {
    if (!Array.isArray(x.opts) || x.opts.length < 3 || x.opts.length > 4) errs.push(`${w}: mc needs 3-4 opts`);
    else { if (!(Number.isInteger(x.a) && x.a >= 0 && x.a < x.opts.length)) errs.push(`${w}: a out of range`); if (new Set(x.opts.map(norm)).size !== x.opts.length) errs.push(`${w}: duplicate options`); }
    if (!x.q) errs.push(`${w}: missing q`);
    if ((x.skill === "grammar" || x.skill === "vocab") && (x.q.match(/___/g) || []).length !== 1) errs.push(`${w}: grammar/vocab mc needs exactly one ___`);
    if (x.skill === "reading" && (!x.text || x.text.split(/\s+/).length < 25)) errs.push(`${w}: reading needs a text (25+ words)`);
  }
  if (x.type === "gap") { const n = (String(x.q).match(/___/g) || []).length; if (!Array.isArray(x.a) || !n || n !== x.a.length) errs.push(`${w}: gap blanks ${n} != answers`); if (Array.isArray(x.a) && x.a.some(a => /\s/.test(a.replace(/\s*\/\s*/g, "/")))) errs.push(`${w}: each blank must be one word`); }
  if (x.type === "tr") { if (!x.en || !x.de) errs.push(`${w}: tr needs en and de`); if (x.alt && !Array.isArray(x.alt)) errs.push(`${w}: alt must be an array`); }
  if (x.skill === "listening") {
    if (!x.audio || !(audioKey(x.audio) in AIDX)) errs.push(`${w}: audio has no recording (copy a recorded sentence exactly): "${x.audio}"`);
    if (x.type === "dict") { if ((String(x.q).match(/___/g) || []).length !== 1 || !Array.isArray(x.a) || x.a.length !== 1) errs.push(`${w}: dict needs one ___ and a: [word]`); else if (x.q.replace("___", x.a[0]) !== x.audio) errs.push(`${w}: dict q with the answer filled in must equal audio`); }
  }
  const key = norm(x.q && x.type !== "dict" && x.skill !== "reading" && x.skill !== "listening" ? x.q : x.type === "tr" ? x.en : x.skill === "reading" ? x.text + x.q : x.q || x.audio + x.q);
  if (qs.has(key)) errs.push(`${w}: same question as ${qs.get(key)}`); else qs.set(key, x.id);
  if (x.q && courseQ.has(norm(x.q))) errs.push(`${w}: copies a course exercise`);
}
const by = {}; EXAM.forEach(x => { const k = x.skill + (x.type === "dict" ? "/dict" : x.type === "tr" ? "/tr" : x.type === "gap" ? "/gap" : ""); by[k] = (by[k] || 0) + 1; });
console.log(errs.length ? errs.join("\n") : `OK: ${EXAM.length} items ${JSON.stringify(by)}`);
process.exit(errs.length ? 1 : 0);
