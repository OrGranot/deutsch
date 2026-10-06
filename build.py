# Inlines src/ into one HTML file. Run: python3 build.py
from pathlib import Path
src = Path(__file__).parent / "src"
css = (src / "style.css").read_text()
import json
LEVEL_FILES = [f"levels/{n}.js" for n in ["a2-1", "a2-2", "b1-1", "b1-2", "b2-1", "b2-2"] if (src / "levels" / f"{n}.js").exists() and n.split("-")[0] in __import__("os").environ.get("LEVELS", "a2 b1 b2").split()]
BUILD_FILES = [f"build/{f.name}" for f in sorted((src / "build").glob("*.js"))]
import re
EXAM_FILES = [f"exam/{f.name}" for f in sorted((src / "exam").glob("x-*.js"), key=lambda f: int(re.findall(r"\d+", f.name)[0]))]
js = "\n".join(["const EXAM = [];"] + [(src / f).read_text() for f in ["audio-index.js", "data.js", *LEVEL_FILES, *BUILD_FILES, *EXAM_FILES, "sounds.js", "app.js"]])
audio = {}
AUDIO_DIR = Path(__file__).parent / "audio"
if not AUDIO_DIR.exists(): AUDIO_DIR = Path(__file__).parent / "docs" / "audio"
for f in sorted(AUDIO_DIR.glob("p*.json")): audio.update(json.loads(f.read_text()))
inline = "<script>window.AUDIO_INLINE=" + json.dumps(audio, separators=(",", ":")) + ";</script>\n"
head = """<title>Sprechstunde</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Bricolage+Grotesque:opsz,wght@12..96,600..800&display=swap">
<style>""" + css + "</style>"
body = '<div id="app"></div>\n<script>' + js + "</script>"
out = Path(__file__).parent
(out / "sprechstunde.html").write_text('<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' + head + "\n</head>\n<body>\n" + inline + body + "\n</body>\n</html>\n")
(out / "artifact.html").write_text(head + "\n" + body + "\n")
print("built", len(js), "bytes js")

# Hosted build (GitHub Pages serves docs/): docs/index.html loads audio packs from docs/audio/
# and the Supabase settings from docs/config.js.
web = out / "docs"; (web / "audio").mkdir(parents=True, exist_ok=True)
for f in AUDIO_DIR.glob("p*.json"):
    dst = web / "audio" / f.name
    if not dst.exists() or dst.read_bytes() != f.read_bytes(): dst.write_bytes(f.read_bytes())
if not (web / "config.js").exists(): (web / "config.js").write_text('window.SYNC_CONFIG = { url: "", key: "", email: "" };\n')
(web / "manifest.webmanifest").write_text(json.dumps({"name": "Sprechstunde", "short_name": "Deutsch", "start_url": "./", "display": "standalone", "background_color": "#f4f1ea", "theme_color": "#e8a317", "icons": [{"src": "icon-512.png", "sizes": "512x512", "type": "image/png"}]}))
(web / ".nojekyll").write_text("")
# service worker: only shows Lehrer's daily reminder (no caching, so updates arrive as before)
(web / "sw.js").write_text("""self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Lehrer", { body: d.body || "Zeit für Deutsch!", icon: "icon-512.png", badge: "icon-512.png", tag: "erinnerung", data: { url: d.url || "./" } }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(ws => ws.length ? ws[0].focus() : clients.openWindow(e.notification.data.url)));
});
""")
(web / "index.html").write_text('<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<meta name="robots" content="noindex, nofollow">\n<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-title" content="Deutsch">\n<link rel="apple-touch-icon" href="apple-touch-icon.png">\n<link rel="manifest" href="manifest.webmanifest">\n' + head + '\n<script src="config.js"></script>\n</head>\n<body>\n' + body + "\n</body>\n</html>\n")
print("web build ready")
