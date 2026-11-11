# Arma una página que usa el intermediario de NVIDIA: reemplaza __NV__, escribe samples.js y copia recursos.
import sys, os, json, shutil
src, out = sys.argv[1], sys.argv[2]
url = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'url.txt')).read().strip()
nv = f"((location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 'http://localhost:8787' : '{url}')"
d = os.path.dirname(os.path.abspath(src))
h = open(src).read().replace('__NV__', nv)
for extra in sys.argv[3:]:
    k, f = extra.split('=', 1); h = h.replace(k, open(os.path.join(d, f)).read())
os.makedirs(out, exist_ok=True); open(os.path.join(out, 'index.html'), 'w').write(h)
if 'src="samples.js"' in h:
    data = json.dumps(json.load(open(os.path.join(d, 'samples.json'))), ensure_ascii=False, indent=2)
    open(os.path.join(out, 'samples.js'), 'w').write('// Ejemplos de demostración: imagen, crédito y licencia de cada caso.\nconst SAMPLES = ' + data + ';\n')
if os.path.isdir(os.path.join(d, 's')): shutil.copytree(os.path.join(d, 's'), os.path.join(out, 's'), dirs_exist_ok=True)
print('ok', out)
