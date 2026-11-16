"""Arma lo que la página necesita a partir de los dos cuadernos ejecutados (tema claro y oscuro):
celdas con sus salidas, figuras como archivos, catálogo de datos con vista previa. Uso: python herramientas/publica.py"""
import base64, hashlib, json, re, shutil
from pathlib import Path

import pandas as pd

RAIZ = Path(__file__).resolve().parent.parent
WEB, PUB = RAIZ / 'web' / 'src', RAIZ / 'web' / 'public'
claro = json.load(open(RAIZ / 'cuaderno.ipynb', encoding='utf-8'))
oscuro = json.load(open(RAIZ / 'cuaderno.oscuro.ipynb', encoding='utf-8'))
shutil.rmtree(PUB / 'fig', ignore_errors=True)
(PUB / 'fig').mkdir(parents=True)


def limpia_html(h):
    h = re.sub(r'<style.*?</style>', '', h, flags=re.S)
    h = re.sub(r'<div>\s*(<table.*?</table>)\s*</div>', r'\1', h, flags=re.S)
    return h.replace(' border="1"', '').replace(' style="text-align: right;"', '').strip()


def png_tam(b):
    return int.from_bytes(b[16:20], 'big'), int.from_bytes(b[20:24], 'big')


celdas = []
for i, (c, o) in enumerate(zip(claro['cells'], oscuro['cells'])):
    fuente = ''.join(c['source'])
    if c['cell_type'] == 'markdown':
        celdas.append({'id': i, 'tipo': 'md', 'fuente': fuente})
        continue
    salidas = []
    for k, (a, b) in enumerate(zip(c.get('outputs', []), o.get('outputs', []))):
        if a['output_type'] == 'stream':
            salidas.append({'t': 'texto', 'texto': ''.join(a['text'])})
            continue
        d = a.get('data', {})
        if 'image/png' in d:
            pa, pb = base64.b64decode(d['image/png']), base64.b64decode(b['data']['image/png'])
            (PUB / 'fig' / f'c{i}-{k}.png').write_bytes(pa)
            (PUB / 'fig' / f'o{i}-{k}.png').write_bytes(pb)
            w, h = png_tam(pa)
            salidas.append({'t': 'img', 'claro': f'fig/c{i}-{k}.png', 'oscuro': f'fig/o{i}-{k}.png', 'w': w, 'h': h})
        elif 'text/html' in d:
            salidas.append({'t': 'html', 'html': limpia_html(''.join(d['text/html'])), 'valor': a['output_type'] == 'execute_result'})
        elif 'text/plain' in d:
            salidas.append({'t': 'texto', 'texto': ''.join(d['text/plain']), 'valor': a['output_type'] == 'execute_result'})
    celdas.append({'id': i, 'tipo': 'code', 'fuente': fuente, 'n': c.get('execution_count'), 'salidas': salidas})

# versiones con que se ejecutó, tomadas del registro que imprime la última celda
registro = json.loads(next(s['texto'] for s in reversed(celdas[-1]['salidas']) if s['t'] == 'texto'))
# Peso de la ejecución en vivo, medido el 15-11-2026 contra el CDN de Pyodide 314.0.8 (tamaños transferidos):
# núcleo 6,2 MB + numpy, pandas, matplotlib y dependencias 17,1 MB + datos ~1,5 MB; scikit-learn con scipy suma 18,5 MB.
import datetime
json.dump({'celdas': celdas, 'versiones': registro['versiones'], 'datos': registro['datos'], 'ejecutado': datetime.date.today().isoformat(), 'descarga_mb': 25, 'sklearn_mb': 18}, open(WEB / 'cuaderno.json', 'w', encoding='utf-8'), ensure_ascii=False)

# catálogo de datos con vista previa
man = json.load(open(RAIZ / 'datos' / 'manifiesto.json', encoding='utf-8'))
TIPO = {'int64': 'entero', 'float64': 'decimal', 'object': 'texto', 'str': 'texto', 'bool': 'lógico'}
cat = []
for nombre, m in man['archivos'].items():
    df = pd.read_csv(RAIZ / 'datos' / nombre)
    cat.append({
        'nombre': nombre, 'que': m['que'], 'sistema': m['sistema'], 'filas': m['filas'], 'bytes': m['bytes'], 'sha256': m['sha256'],
        'columnas': [{'nombre': c, 'tipo': 'fecha y hora' if c.startswith('fecha') else TIPO.get(str(df[c].dtype), str(df[c].dtype))} for c in df.columns],
        'muestra': json.loads(df.head(6).to_json(orient='values', force_ascii=False)),
    })
json.dump({'archivos': cat, 'desde': man['desde'], 'hasta': man['hasta'], 'motor_sha256': man['motor_sha256'], 'ruido': man['ruido_medicion']}, open(WEB / 'catalogo.json', 'w', encoding='utf-8'), ensure_ascii=False)

# archivos que la página sirve tal cual: datos, estilos de gráfico y el cuaderno
shutil.rmtree(PUB / 'datos', ignore_errors=True)
shutil.copytree(RAIZ / 'datos', PUB / 'datos')
for f in ('claro.mplstyle', 'oscuro.mplstyle', 'planta.mplstyle', 'cuaderno.ipynb'):
    shutil.copy(RAIZ / f, PUB / f)
print(len(celdas), 'celdas ·', sum(1 for _ in (PUB / 'fig').iterdir()), 'figuras ·', len(cat), 'archivos de datos')
