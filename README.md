# Sprechstunde

Or's private German course, A1 to B2: a guided daily lesson with spaced repetition, checked speaking and typed answers, placement and level checks.

- Live app: GitHub Pages serves `docs/`.
- Edit content in `src/` (`data.js` is A1, `src/levels/*.js` are A2–B2, rules in `src/levels/BRIEF.md`), check with `node validate.js src/levels/*.js`, then `python3 build.py`.
- Audio: `node collect.js > texts.json`, then `gen_audio.py` with the Coqui Thorsten VITS voice (CC0); packs go to `docs/audio/`.
- Progress syncs to a private Supabase table when `docs/config.js` has the project URL and anon key.

All lesson content was written for this app.
