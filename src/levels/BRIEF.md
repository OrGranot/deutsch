# Writing lessons for Sprechstunde (A2–B2)

You are writing course content for a German learning app for Or, a Hebrew/English speaker in Israel, adult, learns German for life and work. The app already has 12 A1 lessons in /home/claude/gapp/src/data.js. READ lesson 1 and lesson 6 there first: copy their exact structure and tone.

## Hard rules
- Everything is written by you. Never copy or paraphrase text, dialogues, exercises or word lists from any coursebook (Menschen, Netzwerk, Schritte, Aspekte, Sicher, etc.). Topics follow the public CEFR / Goethe-Zertifikat topic areas, that's all.
- Output exactly one file (path given in your task) containing ONLY:
  ```
  // <Level> lessons <first id>-<last id>, written for this app.
  LESSONS.push(
  { id: ..., level: "A2", title: "...", en: "...", cando: [...], vocab: `...`, grammar: [...], ex: [...], speak: [...], shadow: [...] },
  ...
  );
  ```
- `level` is "A2", "B1" or "B2".
- vocab: 30–36 lines per lesson, format `German | plural | English | example = translation` (example optional, give one for ~60% of lines, natural and level-appropriate). Nouns ALWAYS with der/die/das and a plural column (use `—` for no plural, `Pl.` for plural-only). Verbs as infinitive; for separable verbs write e.g. `sich bewerben` / `anrufen` normally. Adjectives/adverbs/phrases fine.
- No word (the exact German column text) may repeat any word already in the course: check /home/claude/gapp/src/levels/existing-a1.txt and don't repeat words within your own lessons. Pick words that are genuinely new and useful at this level.
- grammar: 2–3 topics per lesson, `{ t: "Title", html: \`...\` }` in the same HTML style as A1 (short <p>, <table> with <th>, <b> for endings, `<p class="tip">` for a tip). Explanations in clear simple English, examples in German. Contrast with English/Hebrew when helpful.
- ex: 10–12 exercises per lesson, spread over the grammar topics IN ORDER (the app splits the list into equal chunks per grammar topic, so first third = topic 1 etc. if there are 3 topics). Types:
  - `{ type: "gap", q: "Ich ___ dich morgen ___. (anrufen)", a: ["rufe", "an"] }` → each ___ is one blank, `a` has one answer per blank; alternatives with "/" e.g. `a: ["weil/da"]`. Put a hint in parentheses at the end when needed. Keep each blank to ONE word (split separable verbs into two blanks as above).
  - `{ type: "mc", q: "... ___ ...", opts: [...], a: <index>, why?: "..." }` (2–4 options; add `why` when the reason is the point).
  - `{ type: "order", words: [...], a: "..." }` — words shuffled, `a` the correct sentence with NO final punctuation; words joined with spaces must be exactly the words of `a`.
- speak: 5 questions `{ q, en, accept: [...], model: [...] }`. `accept` = lowercase key words/phrases, any one of which shows the learner answered the question (the app checks if the spoken answer contains one). Every `model` answer must contain at least one accept phrase. Models are full sentences at the target level, personal (Or lives in Israel, works, has family) but generic enough.
- shadow: 6 sentences for repeat-after-me, natural spoken German at the level, 6–18 words, practising the lesson's words and grammar.
- `cando`: 3–4 "can-do" statements in English.
- Level calibration: A2 = everyday situations, Perfekt, Dativ, Nebensätze; B1 = opinions, experiences, plans, Konjunktiv II, Passiv, Relativsätze; B2 = argue, abstract topics, nuanced connectors, Nominalisierung, Konjunktiv I, Partizipialattribute. Example sentences and models must match the level (B2 sentences should be noticeably richer than A2).
- Correct German only. Double-check articles, plurals, endings, cases, word order. Use ß correctly and standard spelling (post-2006 reform).

## Validate
Run `node /home/claude/gapp/validate.js <your file>` and fix every error until it prints OK. (Duplicates against other new levels are resolved later; you only need to avoid A1 words and duplicates inside your file.)

Return a short summary: lesson ids + titles + grammar topics, word count.
