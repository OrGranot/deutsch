// Lists every text the app can speak, grouped into audio packs. Run: node collect.js > texts.json
const fs = require("fs");
const lv = ["a2-1", "a2-2", "b1-1", "b1-2", "b2-1", "b2-2"].filter(n => (process.env.LEVELS || "a2 b1 b2").split(" ").includes(n.split("-")[0])).map(n => __dirname + "/src/levels/" + n + ".js").filter(f => fs.existsSync(f)).map(f => fs.readFileSync(f, "utf8")).join("\n");
const bd = fs.readdirSync(__dirname + "/src/build").sort().map(f => fs.readFileSync(__dirname + "/src/build/" + f, "utf8")).join("\n");
eval(fs.readFileSync(__dirname + "/src/data.js", "utf8") + lv + bd + fs.readFileSync(__dirname + "/src/sounds.js", "utf8") + ";global.LESSONS=LESSONS;global.SOUNDS=SOUNDS;global.BUILD=BUILD;");
const out = {}; // text -> pack
const add = (t, p) => { t = String(t || "").trim(); if (t && !(t in out)) out[t] = String(p); };
const bare = w => w.replace(/[^\p{L}\p{N}'’-]/gu, "");
const sentences = [], built = [];
for (const L of LESSONS) {
  for (const line of L.vocab.trim().split("\n")) {
    const [de, , , ex] = line.split("|").map(s => (s || "").trim());
    add(de.replace(/\s*\([^)]*\)/g, ""), L.id); if (ex) { const s = ex.split(" = ")[0]; add(s, L.id); sentences.push([s, L.id]); }
  }
  for (const s of L.shadow) { add(s, L.id); sentences.push([s, L.id]); }
  for (const ch of BUILD[L.id] || []) for (const st of ch ? ch.steps : []) { add(st.de, L.id); built.push([st.de, L.id]); }
  for (const q of L.speak) { add(q.q, L.id); for (const m of q.model) { add(m, L.id); sentences.push([m, L.id]); } }
}
for (const S of SOUNDS) { for (const w of S.words) add(w, "s"); for (const p of S.pairs) p.forEach(w => add(w, "s")); }
add("Hallo! Schön, dass du Deutsch lernst. Wie geht es dir?", "s");
for (const [s, p] of [...sentences, ...built]) for (const w of s.split(" ")) { const b = bare(w); if (b) add(b, p); }
process.stdout.write(JSON.stringify(out));
