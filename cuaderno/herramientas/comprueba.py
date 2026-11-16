"""Comprueba que las cifras escritas en el texto del cuaderno calzan con las que calculó. Uso: python herramientas/comprueba.py cuaderno.ipynb"""
import json, re, sys

nb = json.load(open(sys.argv[1], encoding='utf-8'))
salida = ''.join(''.join(o.get('text', [])) for c in nb['cells'] for o in c.get('outputs', []) if o.get('output_type') == 'stream')
r = json.loads(salida[salida.rindex('{\n  "datos"') :])['resultados']
esperado = {
    'calidad_defectos_encontrados': '7 de 7',
    'calidad_tramos_de_mas': 0,
    'ph_veredictos_correctos': '4 de 4',
    'pronostico_gana_a_persistencia': False,
    'vibracion_avisos': 2,
    'alarmas_por_10min': 0.05,
}
mal = [f'{k}: texto dice {v!r}, el cuaderno calculó {r[k]!r}' for k, v in esperado.items() if r[k] != v]
if round(r['catodo_semana_t']) != 962: mal.append(f"cátodo: texto dice 962, calculó {r['catodo_semana_t']}")
for patron, que in [(r'Semana: 962 t de 1084 t', 'plan'), (r'Total de la semana: 50 → 28', 'alarmas con retardo'), (r'Aviso de tendencia: 4\.3 h antes del disparo\. La alarma de zona C llegó 155 min', 'aviso de vibración')]:
    if not re.search(patron, salida): mal.append(f'no aparece en las salidas: {que}')
if not all(-60 < e < 0 for e in r['vibracion_error_disparo_min']): mal.append(f"error del disparo fuera de lo descrito: {r['vibracion_error_disparo_min']}")
print('\n'.join(mal) if mal else 'ok: el texto calza con las salidas')
sys.exit(1 if mal else 0)
