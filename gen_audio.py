# Generates natural German audio for every text in texts.json with the Thorsten VITS voice (CC0),
# then writes audio/p<pack>.json (base64 mp3 per text) and src/audio-index.js (key -> pack).
# Run with the coqui-tts venv: <venv>/bin/python gen_audio.py <model_dir>
import json, sys, os, base64, subprocess, io, wave
import numpy as np
from TTS.utils.synthesizer import Synthesizer
here = os.path.dirname(os.path.abspath(__file__)); M = sys.argv[1]
def key(t):
    h = 0x811c9dc5
    for c in t.strip():
        h ^= ord(c); h = (h * 0x01000193) & 0xffffffff
    d = "0123456789abcdefghijklmnopqrstuvwxyz"; s = ""
    while True:
        s = d[h % 36] + s; h //= 36
        if not h: return s
texts = json.load(open(os.environ.get("TEXTS") or os.path.join(here, "texts.json")))
cache_dir = os.path.join(here, ".audio-cache"); os.makedirs(cache_dir, exist_ok=True)
syn = Synthesizer(tts_checkpoint=f"{M}/model_file.pth", tts_config_path=f"{M}/config.json", use_cuda=False)
packs, index = {}, {}
ONLY = os.environ.get("ONLY_PACKS")  # cache-only mode for parallel runs, e.g. ONLY_PACKS=13,14
for n, (t, p) in enumerate(texts.items()):
    if ONLY and str(p) not in ONLY.split(","): continue
    k = key(t); f = os.path.join(cache_dir, k + ".mp3")
    if not os.path.exists(f):
        wav = np.clip(np.array(syn.tts(t)), -1, 1)
        # trim leading/trailing silence, add a short pad
        nz = np.where(np.abs(wav) > 0.02)[0]
        if len(nz): wav = wav[max(0, nz[0] - 1500): nz[-1] + 2500]
        pcm = (wav * 32767).astype("<i2").tobytes()
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "s16le", "-ar", "22050", "-ac", "1", "-i", "-", "-b:a", "48k", f], input=pcm, check=True)
    packs.setdefault(p, {})[k] = base64.b64encode(open(f, "rb").read()).decode()
    index[k] = p
    if n % 100 == 0: print(n, t, flush=True)
if ONLY: print("cached", ONLY); sys.exit(0)
os.makedirs(os.path.join(here, "audio"), exist_ok=True)
for p, d in packs.items(): json.dump(d, open(os.path.join(here, "audio", f"p{p}.json"), "w"), separators=(",", ":"))
open(os.path.join(here, "src", "audio-index.js"), "w").write("window.AUDIO_INDEX=" + json.dumps(index, separators=(",", ":")) + ";\n")
print("done", len(index))
