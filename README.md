# Sprechstunde

Or's private German course, A1 to B2: a guided daily lesson with spaced repetition, checked speaking and typed answers, placement and level checks.

- Live app: GitHub Pages serves `docs/`.
- Edit content in `src/` (`data.js` is A1, `src/levels/*.js` are A2–B2, rules in `src/levels/BRIEF.md`), check with `node validate.js src/levels/*.js`, then `python3 build.py`.
- Audio: `node collect.js > texts.json`, then `gen_audio.py` with the Coqui Thorsten VITS voice (CC0); packs go to `docs/audio/`.
- Progress syncs to a private Supabase table when `docs/config.js` has the project URL and anon key.


## Lehrer (AI teacher)

The Lehrer tab is a chat with a German teacher that gets a short learner profile with every message: level, current lesson and grammar, words Or keeps missing, wrong articles, and recent word and exercise mistakes (`learnerProfile()` in `src/app.js`).

- Without setup it offers "Open in Claude" / "Open in ChatGPT", which start a chat on Or's own subscription with the teacher instructions and profile filled in.
- The in-app chat calls the Supabase function in `supabase/functions/lehrer/`, which holds the Claude API key (Claude Sonnet 5.5) and only answers Or's account. To turn it on: create an API key in the Anthropic Console with a monthly spend limit, deploy the function (`supabase functions deploy lehrer`, or paste `index.ts` into a new function named `lehrer` in the Supabase dashboard), and add the secret `ANTHROPIC_API_KEY` under Edge Functions → Secrets.

All lesson content was written for this app.
