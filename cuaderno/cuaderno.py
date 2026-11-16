# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .py
#       format_name: percent
#   kernelspec:
#     display_name: Python 3
#     language: python
#     name: python3
# ---

# %% [markdown]
# # Cuaderno de planta
#
# **Una semana de la planta virtual LX-SX-EW, leída desde sus datos crudos.**
#
# Los datos salen del mismo motor que mueve la [planta virtual](https://jsnn15.github.io/planta-virtual/). Se corrió una semana, del 2 al 9 de noviembre de 2026, con doce fallas programadas y un operador que responde según un guion. Lo exportado imita lo que entregan los sistemas de una planta: historiador, alarmas, bitácora, monitoreo de condición, laboratorio y cierre de turno.
#
# Por ser un simulador, se sabe qué falló y cuándo (`datos/verdad.json`). Ese archivo no se usa para detectar nada. Sirve para medir, al final de cada sección, si el análisis encontró lo que había.
#
# | | Pregunta | Lo que salió |
# |---|---|---|
# | 1 | ¿Qué datos hay? | 8 archivos crudos, cada uno con su huella para saber si cambia |
# | 2 | ¿Se puede confiar en el historiador? | Las pruebas encuentran los 7 defectos sembrados y ninguno de más |
# | 3 | ¿Qué le pasó a la planta? | 962 t de 1.084 t planificadas: un cambio de mineral explica la baja |
# | 4 | ¿Las alarmas ayudan o estorban? | Pocas en promedio, pero dos alarmas que repican suman 29 de las 50 |
# | 5 | ¿Cuánto aviso da la vibración? | 4,3 h antes del disparo; la alarma por límite llegó 2,6 h más tarde |
# | 6 | ¿El pHmetro se descalibró o cambió el proceso? | 4 de 4 casos bien separados, con ayuda del laboratorio |
# | 7 | ¿Sirve un modelo para anticipar la producción? | No con una semana de datos: no le gana a suponer que nada cambia |

# %%
import hashlib
import json
from pathlib import Path

import matplotlib.dates as mdates
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

DATOS = Path('datos')
if not DATOS.exists():  # fuera del repositorio (solo se bajó el .ipynb): trae los datos publicados
    from urllib.request import urlretrieve

    DATOS.mkdir()
    for nombre in ('planta.mplstyle', 'datos/manifiesto.json', 'datos/verdad.json'):
        urlretrieve('https://jsnn15.github.io/cuaderno/' + nombre, nombre)
    for nombre in json.loads((DATOS / 'manifiesto.json').read_text(encoding='utf-8'))['archivos']:
        urlretrieve('https://jsnn15.github.io/cuaderno/datos/' + nombre, DATOS / nombre)

plt.style.use('planta.mplstyle')
pd.set_option('display.precision', 3, 'display.max_columns', 12, 'display.max_colwidth', 100)
AZUL, NARANJA, VERDE, AMARILLO = plt.rcParams['axes.prop_cycle'].by_key()['color']
ALERTA, GRAVE, CRITICO = '#fab219', '#ec835a', '#d03b3b'  # solo para límites y estados
TENUE = plt.rcParams['xtick.color']

# %% [markdown]
# ## 1. Qué datos hay
#
# Ocho archivos CSV, uno por sistema de origen. El manifiesto guarda la huella SHA-256 de cada uno: si un archivo cambia, la comprobación de abajo lo dice.

# %%
manifiesto = json.loads((DATOS / 'manifiesto.json').read_text(encoding='utf-8'))
catalogo = pd.DataFrame(manifiesto['archivos']).T
catalogo['huella_ok'] = [hashlib.sha256((DATOS / n).read_bytes()).hexdigest() == h for n, h in catalogo['sha256'].items()]
catalogo['kB'] = (catalogo['bytes'] / 1024).astype(float).round(0).astype(int)
catalogo[['sistema', 'que', 'filas', 'kB', 'huella_ok']]

# %% [markdown]
# El historiador es una tabla ancha: una fila por minuto y una columna por tag. El diccionario de tags dice qué mide cada columna, en qué unidad, el rango del instrumento y la banda normal de operación.

# %%
crudo = pd.read_csv(DATOS / 'historiador.csv', parse_dates=['fecha'])
tags = pd.read_csv(DATOS / 'tags.csv', index_col='tag')
print(f'{len(crudo):,} filas × {crudo.shape[1] - 1} tags · {crudo.fecha.min()} a {crudo.fecha.max()}'.replace(',', '.'))
crudo.iloc[:4, :8]

# %%
tags.loc[['AIT-206', 'AIT-207', 'IIT-401', 'TIT-403', 'KY-405', 'KY-406']]

# %% [markdown]
# ## 2. Se puede confiar en el historiador
#
# Antes de calcular nada, cinco pruebas sobre el archivo tal como llegó. Cada una busca un defecto típico de la adquisición de datos:
#
# | Prueba | Qué busca |
# |---|---|
# | Filas repetidas | La misma marca de tiempo dos veces |
# | Filas que faltan | Minutos sin registro |
# | Sin dato | Celdas vacías |
# | Fuera de rango | Valores que el instrumento no puede medir |
# | Congelado | Un transmisor que repite el mismo valor 20 minutos o más |

# %%
def tramos(mascara):
    """Convierte una tabla de verdadero/falso (minutos × tags) en una lista de tramos."""
    filas = []
    for tag in mascara.columns[mascara.any()]:
        m = mascara[tag]
        grupo = (m != m.shift()).cumsum()[m]
        for _, g in m[m].groupby(grupo):
            filas.append({'tag': tag, 'desde': g.index[0], 'hasta': g.index[-1], 'minutos': len(g)})
    return pd.DataFrame(filas, columns=['tag', 'desde', 'hasta', 'minutos'])


# 1 · filas repetidas
repetidas = crudo[crudo.duplicated('fecha')]
h = crudo.drop_duplicates('fecha').set_index('fecha')

# 2 · filas que faltan: se compara con la malla completa de minutos
malla = pd.date_range(h.index[0], h.index[-1], freq='1min')
faltantes = malla.difference(h.index)
h = h.reindex(malla)

# 3 · sin dato: celdas vacías que venían así en el archivo
sin_dato = h.isna() & ~h.index.isin(faltantes)[:, None]

# 4 · fuera del rango del instrumento
fuera = (h < tags.rango_min) | (h > tags.rango_max)

# 5 · congelado: 20 min o más con el mismo valor, sin estar pegado a un extremo del rango
largo = h.apply(lambda s: s.groupby((s != s.shift()).cumsum()).transform('size'))
congelado = (largo >= 20) & h.notna() & (h > tags.rango_min) & (h < tags.rango_max)

pruebas = pd.DataFrame(
    [
        ['Filas repetidas', len(repetidas), 'filas'],
        ['Filas que faltan', len(faltantes), 'minutos'],
        ['Sin dato', int(sin_dato.values.sum()), 'celdas'],
        ['Fuera de rango', int(fuera.values.sum()), 'celdas'],
        ['Congelado', int(congelado.values.sum()), 'celdas'],
    ],
    columns=['prueba', 'encontrado', 'unidad'],
).set_index('prueba')
pruebas['% del archivo'] = (100 * pruebas['encontrado'] / [len(crudo), len(malla), h.size, h.size, h.size]).round(3)
pruebas

# %% [markdown]
# Dónde y cuándo. Cada barra es un tramo con datos no válidos.

# %%
hallazgos = pd.concat(
    [tramos(sin_dato).assign(prueba='Sin dato'), tramos(fuera).assign(prueba='Fuera de rango'), tramos(congelado).assign(prueba='Congelado')],
    ignore_index=True,
)
orden = hallazgos.groupby('tag').desde.min().sort_values(ascending=False).index
fila = {tag: i for i, tag in enumerate(orden)}
fig, ax = plt.subplots(figsize=(9, 0.32 * len(orden) + 0.9))
for prueba, color in [('Sin dato', AZUL), ('Congelado', NARANJA), ('Fuera de rango', VERDE)]:
    t = hallazgos[hallazgos.prueba == prueba]
    ancho = (t.hasta - t.desde).clip(lower=pd.Timedelta('40min'))  # un minuto suelto no se vería
    ax.barh(t.tag.map(fila), ancho, left=t.desde, height=0.5, color=color, label=prueba)
ax.set_yticks(range(len(orden)), orden)
ax.set_xlim(malla[0], malla[-1])
ax.set_title('Tramos no válidos por tag')
ax.legend(ncols=3, loc='lower right', bbox_to_anchor=(1, 1), borderaxespad=0.2)
plt.show()

# %% [markdown]
# **Contra lo sembrado.** El generador dejó anotados los defectos que metió en el historiador. Se cruza cada uno con lo encontrado.

# %%
verdad = json.loads((DATOS / 'verdad.json').read_text(encoding='utf-8'))
sembrado = pd.DataFrame(verdad['defectos'])
sembrado[['desde', 'hasta']] = sembrado[['desde', 'hasta']].apply(pd.to_datetime)


def encontrado(d):
    if d.tipo == 'duplicado':
        return repetidas.fecha.between(d.desde, d.hasta).sum() == 2
    if d.tipo == 'filas_faltantes':
        return set(pd.date_range(d.desde, d.hasta, freq='1min')) <= set(faltantes)
    mascara = {'sin_dato': sin_dato, 'congelado': congelado, 'fuera_de_rango': fuera}[d.tipo]
    return bool(mascara.loc[d.desde : d.hasta, d.tags].all().all())


sembrado['encontrado'] = sembrado.apply(encontrado, axis=1)
sembrado['tags'] = sembrado.tags.map(lambda x: ', '.join(x[:3]) + (f' y {len(x) - 3} más' if len(x) > 3 else ''))

# falsos positivos: tramos encontrados que no calzan con ningún defecto sembrado
calza = lambda t: any((t.desde <= d.hasta) and (t.hasta >= d.desde) for d in sembrado.itertuples())
de_mas = hallazgos[~hallazgos.apply(calza, axis=1)]
print(f'Defectos sembrados encontrados: {sembrado.encontrado.sum()} de {len(sembrado)} · tramos de más: {len(de_mas)}')
sembrado[['tipo', 'tags', 'desde', 'hasta', 'nota', 'encontrado']]

# %% [markdown]
# Para el resto del cuaderno se trabaja con `h`: sin filas repetidas, con la malla completa de minutos y con lo no válido marcado como vacío. No se rellena nada.

# %%
h = h.mask(fuera | congelado)
print(f'Celdas válidas: {100 * h.notna().values.mean():.2f} %')

# %% [markdown]
# ## 3. Qué le pasó a la planta
#
# Cuatro variables bastan para ver la semana: el cobre que llega desde las pilas, la corriente de la nave, la temperatura del electrolito y el cátodo producido. Las líneas verticales son los disparos anotados en la bitácora.

# %%
bitacora = pd.read_csv(DATOS / 'bitacora.csv', parse_dates=['fecha'])
disparos = bitacora[bitacora.clase == 'trip']

ver = ['AIT-206', 'IIT-401', 'TIT-403', 'KY-405']
media10 = h[ver].resample('10min').mean()
fig, ejes = plt.subplots(len(ver), 1, figsize=(9, 6.4), sharex=True)
for ax, tag in zip(ejes, ver):
    ax.axhspan(tags.normal_min[tag], tags.normal_max[tag], color=TENUE, alpha=0.10, lw=0)
    for f in disparos.fecha:
        ax.axvline(f, color=TENUE, lw=0.8, alpha=0.7)
    ax.plot(media10.index, media10[tag], color=AZUL)
    ax.set_title(f'{tags.descripcion[tag]} · {tag} ({tags.unidad[tag]})', fontsize=9.5, pad=4)
    ax.margins(x=0)
ejes[0].annotate('banda normal', (media10.index[6], tags.normal_max['AIT-206']), xytext=(0, -11), textcoords='offset points', fontsize=8, color=TENUE)
plt.show()

disparos[['fecha', 'mensaje']].reset_index(drop=True)

# %% [markdown]
# **Lectura.** El cobre en el PLS cae desde el jueves 5 y vuelve el sábado 7: es un cambio de mineral, no un disparo, y arrastra a la corriente y a la producción durante dos días. La temperatura baja el sábado 7 por la madrugada sin que la bitácora anote ninguna falla hasta que mantenimiento repara el intercambiador. El disparo del rectificador del viernes 6 se ve como un corte breve.
#
# **Una comprobación física.** La ley de Faraday fija cuánto cobre deposita la corriente: 1,1855 g por ampere-hora y por celda, por la eficiencia de corriente. Si las unidades y los tags están bien, el cátodo medido tiene que calzar con ese cálculo.

# %%
CELDAS = 160
faraday = h['IIT-401'] * 1.1855 * CELDAS / 1000 * h['KY-406'] / 100  # t/h
con_corriente = h['IIT-401'] > 5
diferencia = (100 * (h['KY-405'] - faraday) / faraday)[con_corriente]
print(f'Cátodo medido contra Faraday: mediana {diferencia.median():+.2f} %, 90 % de los minutos dentro de ±{diferencia.abs().quantile(0.9):.1f} %')

# %% [markdown]
# El cierre de turno resume lo mismo en toneladas. La línea es el plan.

# %%
turnos = pd.read_csv(DATOS / 'turnos.csv', parse_dates=['fecha_cierre'])
etiqueta = turnos.fecha_cierre.sub(pd.Timedelta('1min')).dt.strftime('%d') + ' ' + turnos.turno
fig, ax = plt.subplots(figsize=(9, 2.6))
ax.bar(etiqueta, turnos.catodo_t, width=0.62, color=AZUL)
ax.axhline(turnos.plan_t.iloc[0], color=TENUE, lw=1)
ax.annotate(f'plan {turnos.plan_t.iloc[0]:.1f} t', (len(turnos) - 0.6, turnos.plan_t.iloc[0]), xytext=(0, 4), textcoords='offset points', ha='right', fontsize=8.5, color=TENUE)
ax.set_title('Cátodo por turno (t)')
ax.grid(axis='x', visible=False)
ax.margins(x=0.01)
plt.show()

print(f'Semana: {turnos.catodo_t.sum():.0f} t de {turnos.plan_t.sum():.0f} t planificadas ({100 * turnos.catodo_t.sum() / turnos.plan_t.sum():.0f} %)')

# %% [markdown]
# ## 4. Alarmas: ayudan o estorban
#
# La norma ISA-18.2 da valores de referencia para saber si un operador puede atender lo que el sistema le anuncia. Se calculan sobre el registro de alarmas de la semana.

# %%
alarmas = pd.read_csv(DATOS / 'alarmas.csv', parse_dates=['fecha'])
activas = alarmas[alarmas.evento == 'ACTIVA']
ventanas = pd.date_range(malla[0], malla[-1], freq='10min')
por_10min = activas.set_index('fecha').resample('10min').size().reindex(ventanas, fill_value=0)

# repique: la misma alarma se activa 3 veces o más en un minuto
veces_1min = activas.set_index('fecha').groupby('alarma').alarma.rolling('60s').count()
repican = veces_1min[veces_1min >= 3].index.get_level_values(0).unique().tolist()

# alarmas pegadas: activas más de 24 h seguidas
fin = alarmas[alarmas.evento == 'NORMALIZA'].groupby('alarma').fecha.apply(list)
dura = activas.apply(lambda a: min([f for f in fin.get(a.alarma, []) if f >= a.fecha], default=malla[-1]) - a.fecha, axis=1)

indicadores = pd.DataFrame(
    [
        ['Alarmas por 10 min, promedio', round(por_10min.mean(), 2), 'cerca de 1 es aceptable; 2 es el máximo manejable'],
        ['Máximo en 10 min', int(por_10min.max()), '10 o menos'],
        ['Ventanas de 10 min con más de 10 alarmas', f'{100 * (por_10min > 10).mean():.2f} %', 'menos de 1 %'],
        ['Alarmas que repican', len(repican), 'ninguna'],
        ['Alarmas activas más de 24 h', int((dura > pd.Timedelta('24h')).sum()), 'menos de 5 por día'],
        ['Prioridad 1 · 2 · 3', ' · '.join(f'{100 * (activas.prioridad == p).mean():.0f} %' for p in (1, 2, 3)), 'cerca de 5 % · 15 % · 80 %'],
    ],
    columns=['indicador', 'esta semana', 'referencia ISA-18.2'],
).set_index('indicador')
pegadas = activas[dura > pd.Timedelta('24h')].assign(horas=(dura.dt.total_seconds() / 3600).round(0))
indicadores

# %% [markdown]
# La alarma que estuvo activa más de un día:

# %%
pegadas[['fecha', 'alarma', 'descripcion', 'horas']]

# %%
conteo = activas.alarma.value_counts().head(8).sort_values()
fig, ax = plt.subplots(figsize=(9, 2.9))
ax.barh(conteo.index, conteo.values, height=0.62, color=AZUL)
for y, v in enumerate(conteo.values):
    ax.annotate(str(v), (v, y), xytext=(4, 0), textcoords='offset points', va='center', fontsize=8.5, color=TENUE)
ax.set_title(f'Las 8 alarmas más frecuentes (de {len(activas)} activaciones en la semana)')
ax.grid(axis='y', visible=False)
ax.set_xlim(0, conteo.max() * 1.08)
plt.show()

# %% [markdown]
# **Lectura.** En promedio la planta anuncia poco, pero casi toda la carga viene de una sola fuente: las alarmas de vibración del tambor M-103, que repican cuando el valor cruza el límite ida y vuelta. Se puede medir cuánto bajaría con un retardo de 60 segundos antes de volver a anunciar.

# %%
separadas = activas.groupby('alarma').fecha.diff().fillna(pd.Timedelta('1D')) > pd.Timedelta('60s')
antes, despues = activas.alarma.value_counts(), activas[separadas].alarma.value_counts()
comparacion = pd.DataFrame({'activaciones': antes, 'con retardo de 60 s': despues}).loc[repican]
print(f'Total de la semana: {len(activas)} → {int(separadas.sum())} activaciones')
comparacion

# %% [markdown]
# ## 5. Vibraciones: cuánto aviso da la tendencia
#
# El monitoreo de condición entrega una lectura cada 5 minutos por motor. Primero, dónde está cada equipo respecto de las zonas de ISO 20816-3 (A: recién puesto en marcha; B: operación sin restricción; C: no apto para operar en forma continua; D: daño).

# %%
vib = pd.read_csv(DATOS / 'vibraciones.csv', parse_dates=['fecha'])
equipos = pd.read_csv(DATOS / 'equipos.csv', index_col='equipo')
andando = vib[vib.estado == 'RUN']


def zona(v, eq):
    return 'ABCD'[int(np.searchsorted(equipos.loc[eq, ['limite_ab', 'limite_bc', 'limite_cd']].astype(float).values, v))]


resumen = andando.groupby('equipo').vibracion_mm_s.agg(horas=lambda s: round(len(s) / 12), mediana='median', maximo='max')
resumen['zona habitual'] = [zona(v, e) for e, v in resumen.mediana.items()]
resumen['peor zona'] = [zona(v, e) for e, v in resumen.maximo.items()]
resumen.join(equipos[['descripcion', 'potencia_kw']]).sort_values('maximo', ascending=False).head(6)

# %% [markdown]
# Solo el tambor M-103 salió de la zona B. Un detector simple para todos los motores: la pendiente de la última hora, por mínimos cuadrados. Avisa si supera 0,25 mm/s por hora en un motor que lleva al menos dos horas andando (así no confunde una partida con una falla).

# %%
v = vib.pivot(index='fecha', columns='equipo', values='vibracion_mm_s')
marcha = vib.pivot(index='fecha', columns='equipo', values='estado').eq('RUN')
estable = marcha.rolling(24).sum() == 24  # 24 lecturas = 2 h seguidas andando

x = np.arange(12) * 5 / 60  # horas
x = x - x.mean()
pendiente = v.where(marcha).rolling(12).apply(lambda y: (x * (y - y.mean())).sum() / (x**2).sum(), raw=True)
aviso = (pendiente > 0.25) & estable
inicio = aviso & ~aviso.shift(1, fill_value=False)
avisos = inicio.stack().loc[lambda s: s].index.to_frame(index=False).rename(columns={'fecha': 'aviso de tendencia'})
avisos

# %% [markdown]
# Dos avisos en la semana, los dos en M-103, ninguno en los otros quince motores. Ahora el pronóstico: con cada lectura nueva se ajusta un crecimiento exponencial a la última hora y se calcula a qué hora cruzaría el límite de disparo.

# %%
m103 = v['M-103'].where(marcha['M-103'])
lim_c, lim_d = equipos.loc['M-103', ['limite_bc', 'limite_cd']].astype(float)
lim_disparo = 1.25 * lim_d


def pronostico(ahora, limite, lecturas=12):
    """Hora en que la vibración cruzaría `limite`, con lo visto hasta `ahora`."""
    base = m103.loc[: ahora - pd.Timedelta('3h')].tail(144).median()  # nivel sano: mediana de 12 h
    ventana = m103.loc[:ahora].tail(lecturas)
    horas = (ventana.index - ahora).total_seconds() / 3600
    tasa, nivel = np.polyfit(horas, np.log((ventana - base).clip(lower=1e-3)), 1)
    return ahora + pd.Timedelta(hours=(np.log(limite - base) - nivel) / tasa) if tasa > 0 else pd.NaT


def hora_real(patron, desde):
    f = bitacora[bitacora.mensaje.str.contains(patron) & (bitacora.fecha >= desde)].fecha
    return f.iloc[0] if len(f) else pd.NaT


alarma_c = activas[activas.alarma == 'M-103.VIB'].fecha
filas = []
for n, t0 in enumerate(avisos['aviso de tendencia'], 1):
    disparo = hora_real('M-103 disparado', t0)
    disparo = disparo if disparo - t0 < pd.Timedelta('12h') else pd.NaT
    cruce_c = alarma_c[alarma_c >= t0].iloc[0]
    for minutos in (60, 90, 120, 180):
        ahora = t0 + pd.Timedelta(minutes=minutos)
        if ahora >= cruce_c:
            continue
        p_c, p_disp = pronostico(ahora, lim_c), pronostico(ahora, lim_disparo)
        filas.append({'episodio': n, 'pronóstico hecho a las': ahora, 'zona C: error (min)': round((p_c - cruce_c).total_seconds() / 60), 'disparo pronosticado': p_disp.round('min'), 'disparo real': disparo.round('s'), 'disparo: error (min)': round((p_disp - disparo).total_seconds() / 60) if pd.notna(disparo) else None})
evaluacion = pd.DataFrame(filas).set_index(['episodio', 'pronóstico hecho a las'])
evaluacion

# %%
t0 = avisos['aviso de tendencia'].iloc[0]
disparo = hora_real('M-103 disparado', t0)
tramo = m103.loc[t0 - pd.Timedelta('3h') : disparo]
ahora = t0 + pd.Timedelta('90min')
base = m103.loc[: ahora - pd.Timedelta('3h')].tail(144).median()
ventana = m103.loc[:ahora].tail(12)
tasa, nivel = np.polyfit((ventana.index - ahora).total_seconds() / 3600, np.log(ventana - base), 1)
futuro = pd.date_range(ahora, pronostico(ahora, lim_disparo), freq='5min')

fig, ax = plt.subplots(figsize=(9, 3.6))
for limite, color, nombre in [(lim_c, ALERTA, 'zona C'), (lim_d, GRAVE, 'zona D'), (lim_disparo, CRITICO, 'disparo')]:
    ax.axhline(limite, color=color, lw=1)
    ax.annotate(f'{nombre} · {limite:.1f}', (tramo.index[0], limite), xytext=(2, 3), textcoords='offset points', fontsize=8.5, color=plt.rcParams['axes.labelcolor'])
ax.plot(tramo.index, tramo, color=AZUL, label='medido')
ax.plot(futuro, base + np.exp(nivel + tasa * (futuro - ahora).total_seconds() / 3600), color=NARANJA, lw=1.5, ls=(0, (4, 3)), label=f'pronóstico hecho a las {ahora:%H:%M}')
ax.axvline(t0, color=TENUE, lw=0.8)
ax.annotate('aviso de tendencia', (t0, 0.4), xytext=(4, 0), textcoords='offset points', fontsize=8.5, color=TENUE)
ax.set_ylim(0, lim_disparo * 1.08)
ax.set_title(f'M-103, primer episodio ({t0:%d-%m}): vibración (mm/s) y pronóstico')
ax.xaxis.set_major_formatter(mdates.DateFormatter('%H:%M'))
ax.legend(loc='lower right')
ax.margins(x=0.01)
plt.show()

antes_alarma = (alarma_c[alarma_c >= t0].iloc[0] - t0).total_seconds() / 60
print(f'Aviso de tendencia: {(disparo - t0).total_seconds() / 3600:.1f} h antes del disparo. La alarma de zona C llegó {antes_alarma:.0f} min después del aviso.')

# %% [markdown]
# **Lectura.** La tendencia avisa horas antes que la alarma por límite, y desde la primera hora pone el disparo dentro de un margen de menos de una hora, siempre por el lado temprano. En el segundo episodio mantenimiento cambió el rodamiento antes del disparo, así que ahí solo se puede comprobar el cruce a zona C. Son dos episodios del mismo motor y de un simulador: el método queda mostrado, no validado para una planta.

# %% [markdown]
# ## 6. El pHmetro: se descalibró o cambió el proceso
#
# El pH del PLS se mide en línea (AIT-207) y el laboratorio toma una muestra cada 2 horas. Un detector estadístico mira solo el sensor: compara su media de 30 minutos con la mediana de las 6 horas anteriores y avisa si se separan más de 0,015 pH durante 10 minutos seguidos. En las horas tranquilas del lunes esa diferencia nunca pasó de 0,004.

# %%
ph = h['AIT-207']
lab = pd.read_csv(DATOS / 'laboratorio.csv', parse_dates=['fecha']).query("analito == 'pH'").set_index('fecha').valor

corto = ph.rolling(30, min_periods=20).mean()
referencia = ph.rolling(360, min_periods=120).median().shift(60)
separacion = corto - referencia
fuera_banda = (separacion.abs() > 0.015).rolling(10).sum() == 10
inicios = fuera_banda.index[fuera_banda & ~fuera_banda.shift(1, fill_value=False)]

calibraciones = bitacora[bitacora.mensaje.str.contains('AIT-207 calibrado')].fecha
filas = []
for t in inicios:
    muestra = lab[lab.index >= t].index[0]  # primera muestra de laboratorio después del aviso
    dif = ph.loc[muestra - pd.Timedelta('5min') : muestra].mean() - lab[muestra]
    tras_calibrar = ((t - calibraciones) > pd.Timedelta(0)) & ((t - calibraciones) < pd.Timedelta('45min'))
    veredicto = 'calibración (bitácora)' if tras_calibrar.any() else 'sensor' if abs(dif) > 0.05 else 'proceso'
    filas.append({'aviso': t, 'muestra de laboratorio': muestra, 'sensor − laboratorio': round(dif, 3), 'veredicto': veredicto})
avisos_ph = pd.DataFrame(filas)
avisos_ph

# %%
fig, ax = plt.subplots(figsize=(9, 3.3))
ax.plot(ph.index, ph.rolling(10, min_periods=5).mean(), color=AZUL, label='sensor AIT-207 (media de 10 min)')
ax.plot(lab.index, lab, ls='none', marker='o', ms=4.5, mfc=NARANJA, mec=plt.rcParams['axes.facecolor'], mew=1, label='laboratorio')
for a in avisos_ph.itertuples():
    ax.axvline(a.aviso, color=TENUE, lw=0.8)
    ax.annotate(a.veredicto.split(' ')[0], (a.aviso, 2.36), xytext=(3, 0), textcoords='offset points', fontsize=8, color=TENUE, rotation=90, va='top')
ax.set_ylim(1.85, 2.37)
ax.set_title('pH del PLS: sensor, laboratorio y avisos del detector')
ax.legend(loc='lower right', bbox_to_anchor=(1, 1), ncols=2, borderaxespad=0.2)
ax.margins(x=0)
plt.show()

# %% [markdown]
# **Contra lo sembrado.** Se compara cada aviso con lo que el generador hizo en ese momento, y con la hora en que saltó la alarma que ya trae la planta (desviación mayor a 0,15 pH contra el laboratorio).

# %%
fallas = pd.DataFrame(verdad['fallas'])
fallas['inicio'] = pd.to_datetime(fallas.inicio)
causa = {'ph': 'sensor', 'ph_lenta': 'sensor', 'ore': 'proceso'}
sembradas = fallas[fallas.id.isin(causa)].assign(real=lambda d: d.id.map(causa))
alarma_ph = activas[activas.alarma == 'AIT-207.DEV'].fecha

filas = []
for f in sembradas.itertuples():
    a = avisos_ph[avisos_ph.aviso >= f.inicio].iloc[0]
    al = alarma_ph[alarma_ph >= f.inicio]
    con_alarma = f.real == 'sensor' and len(al) > 0
    filas.append({'sembrado': f.nombre, 'inicio': f.inicio, 'aviso (min después)': round((a.aviso - f.inicio).total_seconds() / 60), 'alarma de planta (min después)': round((al.iloc[0] - f.inicio).total_seconds() / 60) if con_alarma else None, 'veredicto': a.veredicto, 'real': f.real})
resultado_ph = pd.DataFrame(filas)
print(f'Veredictos correctos: {(resultado_ph.veredicto == resultado_ph.real).sum()} de {len(resultado_ph)}')
resultado_ph

# %% [markdown]
# **Lectura.** El detector solo no distingue un sensor que deriva de un mineral distinto: en los dos casos el valor se mueve. La muestra de laboratorio lo resuelve. Si el sensor y el laboratorio coinciden, cambió el proceso; si no, es el instrumento. En la deriva rápida el aviso llega bastante antes que la alarma de planta. En la lenta también, pero ahí la ganancia viene sobre todo de usar un umbral más fino contra el laboratorio (0,05 en vez de 0,15 pH). Ese umbral se eligió mirando esta semana; habría que probarlo con otra.

# %% [markdown]
# ## 7. Sirve un modelo para anticipar la producción
#
# La pregunta es razonable: el cobre tarda horas en pasar de las pilas a la nave, así que lo que se ve aguas arriba debería anticipar el cátodo. Se prueba pronosticar la producción media de la hora que termina cuatro horas después, con dos modelos de scikit-learn y dos cortes en el tiempo: se entrena con lo anterior al corte y se evalúa con lo posterior. La vara es la persistencia: suponer que en cuatro horas se producirá lo mismo que ahora.

# %%
from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.linear_model import RidgeCV
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

HORAS = 4
entradas = ['AIT-206', 'KY-304', 'AIT-405', 'IIT-401', 'KY-405', 'AIT-302', 'FIT-205', 'KY-303', 'AIT-208', 'TIT-403', 'AIT-407']
m10 = h.resample('10min').mean()
X = m10[entradas].copy()
for tag in ('AIT-206', 'KY-304', 'AIT-405'):
    X[tag + ' cambio 2 h'] = m10[tag] - m10[tag].shift(12)
ahora_ = m10['KY-405'].rolling(6).mean()
tabla = X.assign(objetivo=ahora_.shift(-6 * HORAS), persistencia=ahora_).dropna()

filas = []
for corte in ('2026-11-06 08:00', '2026-11-07 00:00'):
    entrena = tabla.loc[:corte]
    prueba = tabla.loc[pd.Timestamp(corte) + pd.Timedelta(hours=HORAS) :]  # se deja un hueco: el objetivo mira 4 h adelante
    Xe, Xp = entrena.drop(columns=['objetivo', 'persistencia']), prueba.drop(columns=['objetivo', 'persistencia'])
    modelos = {
        'regresión ridge': make_pipeline(StandardScaler(), RidgeCV(alphas=np.logspace(-2, 3, 12))),
        'gradient boosting': HistGradientBoostingRegressor(max_depth=3, learning_rate=0.05, max_iter=300, random_state=0),
    }
    fila = {'corte': corte, 'horas de entrenamiento': round(len(entrena) / 6), 'horas de prueba': round(len(prueba) / 6), 'persistencia': (prueba.objetivo - prueba.persistencia).abs().mean()}
    for nombre, modelo in modelos.items():
        fila[nombre] = np.abs(prueba.objetivo - modelo.fit(Xe, entrena.objetivo).predict(Xp)).mean()
    filas.append(fila)
errores = pd.DataFrame(filas).set_index('corte')
errores.columns = pd.MultiIndex.from_tuples([('', c) if 'horas' in c else ('error absoluto medio (t/h)', c) for c in errores.columns])
errores

# %% [markdown]
# **Lectura.** No. La regresión gana por poco en un corte y pierde por mucho en el otro; el gradient boosting pierde en los dos. Una semana trae un solo cambio de mineral: no alcanza para que un modelo aprenda cómo responde la planta. Con meses de historiador la respuesta puede ser otra; con estos datos, lo honesto es no publicar un modelo.

# %% [markdown]
# ## Registro de la corrida
#
# Lo necesario para repetir este cuaderno y comparar con una corrida futura: de qué datos salió, con qué versiones y qué números dio.

# %%
import platform

import matplotlib
import sklearn

registro = {
    'datos': {'desde': manifiesto['desde'], 'hasta': manifiesto['hasta'], 'motor_sha256': manifiesto['motor_sha256'][:12], 'historiador_sha256': manifiesto['archivos']['historiador.csv']['sha256'][:12]},
    'versiones': {'python': platform.python_version(), 'pandas': pd.__version__, 'numpy': np.__version__, 'scikit-learn': sklearn.__version__, 'matplotlib': matplotlib.__version__},
    'resultados': {
        'calidad_defectos_encontrados': f'{int(sembrado.encontrado.sum())} de {len(sembrado)}',
        'calidad_tramos_de_mas': int(len(de_mas)),
        'celdas_validas_pct': round(100 * h.notna().values.mean(), 2),
        'catodo_semana_t': round(float(turnos.catodo_t.sum()), 1),
        'alarmas_por_10min': round(float(por_10min.mean()), 2),
        'alarmas_que_repican': repican,
        'vibracion_avisos': len(avisos),
        'vibracion_error_disparo_min': evaluacion['disparo: error (min)'].dropna().astype(int).tolist(),
        'ph_veredictos_correctos': f'{int((resultado_ph.veredicto == resultado_ph.real).sum())} de {len(resultado_ph)}',
        'pronostico_gana_a_persistencia': bool((errores['error absoluto medio (t/h)'].drop(columns='persistencia').min(axis=1) < errores['error absoluto medio (t/h)']['persistencia']).all()),
    },
}
print(json.dumps(registro, indent=2, ensure_ascii=False))
