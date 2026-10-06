# Writing level-exam items for Sprechstunde

The app has an adaptive level exam (Einstufungstest). It climbs from A1 upward, and where the learner starts to struggle it digs into that level lesson by lesson to find the right starting lesson. Every item is tied to ONE course lesson (`lesson`), so a miss tells the app which lesson the learner still needs. The learner is Or, an adult Hebrew/English speaker in Israel.

You write the items for a range of lessons. The lesson reference (grammar explanations, vocabulary, and the list of sentences that have recorded audio) is in the file named in your task. Read it fully first.

## Hard rules
- Write every item yourself. Never copy text, exercises or dialogues from coursebooks or exam publishers (Goethe, telc, Menschen, Netzwerk, Schritte, Aspekte...). Don't reuse the course's own exercise sentences either; the learner may have seen them. (Listening items are the exception: they MUST use the recorded sentences exactly.)
- Correct, natural, standard German (post-2006 spelling, ß where it belongs). Double-check articles, cases, endings, verb forms and word order.
- Exactly ONE correct answer per item. Distractors must be clearly wrong for a competent speaker, yet plausible for a learner (typical mistakes: wrong case, wrong ending, wrong auxiliary, wrong word order, false friend, similar word). Never two options that could both be right in some reading.
- Test the lesson's own grammar and vocabulary at that lesson's level. A B2 item must be noticeably harder than an A2 item. Use only words a learner at the end of that lesson could know (earlier lessons + this one), except in reading texts, where a few guessable words are fine.
- Keep English short and clear. Every grammar item gets a `why`: one short English sentence giving the rule (shown in the end review).
- No two items may test the exact same sentence.

## Output
One file, exactly this shape (path given in your task):
```
// Level exam items, lessons <a>-<b>, written for this app.
EXAM.push(
{ id: "L13-g1", lesson: 13, skill: "grammar", topic: "Wohin? + Akkusativ", type: "mc", q: "Ich stelle die Vase auf ___ Tisch.", opts: ["den", "dem", "der", "des"], a: 0, why: "Movement to a place (wohin?) takes the accusative: auf den Tisch." },
...
);
```
`id` = `L<lesson>-<g|v|w|r|l><n>`, unique. `topic` = a short English label for what is tested (used to tell the learner their weak areas, e.g. "Perfekt with sein", "Adjective endings after ein", "Food vocabulary").

## Item types
- grammar, `type: "mc"`: `q` a German sentence with one `___`, `opts` 3–4 German options, `a` index of the right one, `why`.
- vocab, `type: "mc"`: tests word meaning or the right word in context (incl. collocations at B1/B2). `q` a German sentence with `___` (add the English in brackets only if needed to make it unambiguous), `opts` 3–4 German words, `a`. Nouns with the article when the article is part of what's tested. `why` optional.
- writing, `type: "gap"`: produce forms by typing. `q` a German sentence with one or two `___` (each blank ONE word), base form hint in brackets at the end, e.g. `"Gestern ___ wir ins Kino ___. (gehen)"`, `a: ["sind", "gegangen"]`; real alternatives with "/" e.g. `"weil/da"`. `why`.
- writing, `type: "tr"`: translate English into German (typed or spoken). `en` the English sentence (A1: 4–8 words; B2: up to ~16), `de` the best German sentence (with final punctuation), `alt` an array with EVERY other correct translation a good learner might produce (word-order variants like time first, du/Sie if the English allows both, synonyms from the lessons, contracted/uncontracted forms). Make the English specific enough that few translations are possible; you may add `hint` (e.g. "use weil", "formal you", "Perfekt") which is shown under the English. `why` optional (the key point).
- reading, `type: "mc"`: `text` a short German text you write (A1 30–60 words, A2 60–90, B1 90–130, B2 120–170: a note, email, ad, message, short article, forum post), `q` an English question, `opts` 3–4 English options, `a`. The answer must follow clearly from the text; wrong options must be clearly contradicted by the text (not merely "not mentioned").
- listening, `type: "mc"`: `audio` = one sentence copied EXACTLY (character for character) from the "Recorded sentences" list of that lesson, `q` an English question about what was said, `opts` 3–4 English options, `a`. The learner only hears the sentence (not shown). Prefer longer sentences.
- listening, `type: "dict"`: `audio` = an exact recorded sentence, `q` = the same sentence with exactly ONE word replaced by `___` (choose a word that tests listening + grammar, e.g. an ending, a verb form, a separable prefix, not a name), `a: ["word"]`. Filling the blank with a[0] must give back `audio` exactly.

## How many
Per lesson: 3 grammar mc (cover all of the lesson's grammar topics), 1 vocab mc, 1 writing gap, 1 writing tr.
Per file (all lessons together): 4 reading (each tagged with the lesson whose topic and grammar it uses most), 3 listening mc, 2 listening dict (spread over different lessons).

## Check
Run `node /home/claude/deutsch/validate-exam.js <your file>` and fix every error until it prints OK. Then reread every item once more as a strict German teacher: is the German correct, is there exactly one right answer, would a native speaker accept every `de`/`alt`? Fix what you find.

Return a short summary: number of items per skill and anything you were unsure about.
