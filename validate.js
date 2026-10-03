// Validates lesson files. Usage: node validate.js src/levels/a2-1.js [more files]
// Each level file must contain:  LESSONS.push( {lesson}, {lesson}, ... );
const fs = require("fs");
const files = process.argv.slice(2);
global.LESSONS = [];
eval(fs.readFileSync(__dirname + "/src/data.js", "utf8").replace("const LESSONS", "LESSONS"));
const base = LESSONS.length;
for (const f of files) eval(fs.readFileSync(f, "utf8"));
const errs = [], seen = {};
const norm = s => s.toLowerCase().replace(/[^\p{L}\p{N} ]/gu, "").replace(/\s+/g, " ").trim();
LESSONS.forEach((L, idx) => {
  const where = `L${L.id}`;
  for (const k of ["id", "title", "en", "level", "cando", "vocab", "grammar", "ex", "speak", "shadow"]) if (L[k] == null && !(k === "level" && idx < base)) errs.push(`${where}: missing ${k}`);
  (L.vocab || "").trim().split("\n").forEach(line => {
    const parts = line.split("|").map(s => s.trim());
    if (parts.length < 3) errs.push(`${where}: bad vocab line "${line}"`);
    const [de, pl, en, ex] = parts;
    if (seen[de]) errs.push(`${where}: duplicate word "${de}" (already in L${seen[de]})`); else seen[de] = L.id;
    if (/^(der|die|das) /.test(de) && !pl) errs.push(`${where}: noun without plural column "${de}" (use — or Pl.)`);
    if (!en) errs.push(`${where}: no English for "${de}"`);
    if (ex && !ex.includes(" = ")) errs.push(`${where}: example without " = " translation: "${ex}"`);
  });
  (L.grammar || []).forEach(g => { if (!g.t || !g.html) errs.push(`${where}: grammar topic needs t and html`); });
  (L.ex || []).forEach((e, i) => {
    const w = `${where} ex${i}`;
    if (e.type === "mc") { if (!Array.isArray(e.opts) || !(e.a >= 0 && e.a < e.opts.length)) errs.push(`${w}: mc a out of range`); }
    else if (e.type === "gap") { const n = (e.q.match(/___/g) || []).length; if (!Array.isArray(e.a) || n !== e.a.length || !n) errs.push(`${w}: gap count ${n} != answers ${e.a && e.a.length}`); }
    else if (e.type === "order") { if (norm(e.words.join(" ").split(" ").sort().join(" ")) !== norm(e.a.split(" ").sort().join(" "))) errs.push(`${w}: order words don't match answer`); if (/[.?!,]$/.test(e.a)) errs.push(`${w}: order answer must have no final punctuation`); }
    else errs.push(`${w}: unknown type ${e.type}`);
  });
  if ((L.ex || []).length < 8) errs.push(`${where}: need at least 8 exercises`);
  (L.speak || []).forEach((s, i) => { if (!s.q || !s.en || !Array.isArray(s.accept) || !s.accept.length || !Array.isArray(s.model) || !s.model.length) errs.push(`${where} speak${i}: needs q, en, accept[], model[]`);
    else for (const m of s.model) if (!s.accept.some(a => (" " + norm(m) + " ").includes(norm(a)))) errs.push(`${where} speak${i}: model "${m}" matches no accept phrase`); });
  if ((L.shadow || []).length < 5) errs.push(`${where}: need at least 5 shadow sentences`);
});
const ids = LESSONS.map(L => L.id); ids.forEach((id, i) => { if (i && id <= ids[i - 1]) errs.push(`ids must increase, got ${id} after ${ids[i - 1]}`); });
console.log(errs.length ? errs.join("\n") : `OK: ${LESSONS.length} lessons, ${Object.keys(seen).length} words`);
process.exit(errs.length ? 1 : 0);
