# Removes vocab lines from later level files when the word already exists earlier in the course.
import re, subprocess, sys
order = ["a2-1", "a2-2", "b1-1", "b1-2", "b2-1", "b2-2"]
files = [f"src/levels/{n}.js" for n in sys.argv[1:]]
out = subprocess.run(["node", "validate.js", *files], capture_output=True, text=True).stdout
dups = re.findall(r'^L(\d+): duplicate word "(.+)" \(already', out, re.M)
for lid, de in dups:
    for f in files:
        s = open(f).read()
        m = re.search(r"\{\s*id:\s*%s\b" % lid, s)
        if not m: continue
        start = m.start(); nxt = re.search(r"\{\s*id:\s*\d+", s[start + 5:]); end = start + 5 + nxt.start() if nxt else len(s)
        block = s[start:end]
        new = re.sub(r"^" + re.escape(de) + r" \|.*\n", "", block, count=1, flags=re.M)
        assert new != block, (lid, de)
        open(f, "w").write(s[:start] + new + s[end:]); print("removed", lid, de)
