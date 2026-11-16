# Cuaderno de planta

**Una semana de la [planta virtual LX-SX-EW](https://jsnn15.github.io/planta-virtual/) leída desde sus datos crudos, en un notebook de Jupyter que también se ejecuta en el navegador.**

[Abrir el cuaderno](https://jsnn15.github.io/cuaderno/) · [`cuaderno.ipynb`](cuaderno.ipynb) (GitHub lo muestra con sus salidas)

## Qué responde

| | Pregunta | Lo que salió |
|---|---|---|
| 1 | ¿Qué datos hay? | 8 archivos crudos, cada uno con su huella SHA-256 |
| 2 | ¿Se puede confiar en el historiador? | Las pruebas encuentran los 7 defectos sembrados y ninguno de más |
| 3 | ¿Qué le pasó a la planta? | 962 t de 1.084 t planificadas: un cambio de mineral explica la baja |
| 4 | ¿Las alarmas ayudan o estorban? | Pocas en promedio, pero dos alarmas que repican suman 29 de las 50 |
| 5 | ¿Cuánto aviso da la vibración? | 4,3 h antes del disparo; la alarma por límite llegó 2,6 h más tarde |
| 6 | ¿El pHmetro se descalibró o cambió el proceso? | 4 de 4 casos bien separados, con ayuda del laboratorio |
| 7 | ¿Sirve un modelo para anticipar la producción? | No con una semana de datos: no le gana a suponer que nada cambia |

## De dónde salen los datos

```mermaid
flowchart LR
    S["planta-virtual/sim.js<br/>el motor de la sala de control"] --> G["herramientas/genera.js<br/>una semana, 12 fallas, un operador"]
    G --> D["datos/<br/>8 CSV + manifiesto + verdad"]
    D --> N["cuaderno.py → cuaderno.ipynb<br/>pandas, scikit-learn, matplotlib"]
    N --> P["La página<br/>salidas guardadas o Python en vivo"]
```

El generador corre el mismo motor de la planta virtual durante una semana simulada (2 al 9 de noviembre de 2026), dispara fallas a horas fijas y hace responder a un operador según un guion. Todo es determinista: con la misma versión de `sim.js` salen los mismos archivos, y el manifiesto guarda la huella de cada uno.

| Archivo | Sistema que imita | Contenido |
|---|---|---|
| `historiador.csv` | DCS / historiador | 49 tags de proceso, una fila por minuto |
| `alarmas.csv` | Sistema de alarmas | Activación, reconocimiento y normalización |
| `bitacora.csv` | Sala de control | Órdenes, disparos, secuencias y mantenimiento |
| `vibraciones.csv` | Monitoreo de condición | 16 motores, una lectura cada 5 min |
| `laboratorio.csv` | Laboratorio | pH del PLS cada 2 h y compósito de cátodo por turno |
| `turnos.csv` | Reporte de turno | Producción, consumos, pérdidas y alarmas |
| `tags.csv`, `equipos.csv` | Configuración | Diccionario de tags y límites de vibración por motor |
| `verdad.json` | No existe en una planta | Lo que se sembró. El cuaderno no lo lee para detectar, solo para medir si detectó |

### Qué agrega el generador sobre el motor

- **Ruido de medición:** gaussiano, 0,15 % del rango de cada instrumento. El motor entrega el valor del proceso sin ruido.
- **Defectos de adquisición en el historiador:** una pérdida de comunicación de 47 min, un transmisor congelado 3 h 20 min, tres lecturas imposibles, dos filas repetidas y 12 minutos sin registros.
- **Respuestas del operador:** tiempos de reconocimiento y maniobras de recuperación. Son un guion; no dicen nada sobre operadores reales.

## Repetirlo

```bash
node herramientas/genera.js ../planta-virtual/sim.js datos/      # los datos, desde el motor
python herramientas/ejecuta.py claro cuaderno.ipynb             # ejecuta el cuaderno con Jupyter
python herramientas/comprueba.py cuaderno.ipynb                 # las cifras del texto calzan con las salidas
python herramientas/publica.py && (cd web && npm install && npm run build)   # la página
```

Necesita Node y Python con `pandas`, `scikit-learn`, `matplotlib`, `jupytext`, `nbclient` e `ipykernel`. Las salidas publicadas se ejecutaron con Node 22, Python 3.13, pandas 3.0 y scikit-learn 1.9.

## Python en el navegador

El botón «Arrancar Python» carga [Pyodide](https://pyodide.org) 314 en un Web Worker, trae los mismos archivos de datos y ejecuta las celdas tal como están escritas. Se puede editar cualquier celda, agregar otras y subir un CSV propio, que no sale del navegador. Baja unos 25 MB la primera vez; la sección 7 usa scikit-learn y suma 18 MB.

En la prueba, el cuaderno completo corrió en vivo en unos 12 segundos después de arrancar, sin errores, y dio los mismos resultados que la versión guardada. Las versiones de las librerías en Pyodide (Python 3.14, pandas 3.0.2, scikit-learn 1.8) no son idénticas a las de la ejecución guardada.

## Límites

- Son datos de un simulador. Las fallas avanzan más rápido que en una planta: el rodamiento pasa de sano a disparo en cuatro horas.
- El pronóstico de vibración se probó en dos episodios del mismo motor. Muestra el método; no lo valida.
- El umbral que separa «sensor» de «proceso» en el pH (0,05) se eligió mirando esta misma semana.
- Los valores de referencia de alarmas son los de ISA-18.2; con una semana y un solo operador simulado, los porcentajes por prioridad son poco representativos.
- La sección 7 no publica un modelo porque no le gana a la persistencia. Con meses de historiador puede ser distinto.

## Archivos

| Ruta | Qué es |
|---|---|
| `cuaderno.py` | El cuaderno en texto (formato de celdas de jupytext). Es la fuente que se edita |
| `cuaderno.ipynb` | El mismo cuaderno ejecutado, con sus salidas |
| `datos/` | Los archivos crudos, el manifiesto con huellas y `verdad.json` |
| `herramientas/genera.js` | Genera los datos con el motor de la planta virtual |
| `herramientas/ejecuta.py`, `comprueba.py`, `publica.py` | Ejecuta el cuaderno, comprueba las cifras del texto y arma la página |
| `claro.mplstyle`, `oscuro.mplstyle` | Estilo de los gráficos para cada tema |
| `web/` | Código de la página: celdas, panel de datos y el kernel de Pyodide (`web/public/kernel.js`) |
| `planilla/`, `fuente/` | La herramienta anterior: analizar una planilla propia sin escribir código |

---

<sub>Proyecto personal de **Julián Neira Nova**, ingeniero eléctrico · Servicio y Soluciones Tecnológicas DelaCruz SpA. Nada de lo publicado proviene de clientes ni de empleadores.
[Portafolio](https://jsnn15.github.io/) · [LinkedIn](https://www.linkedin.com/in/julian-neira-nova/) · [Todas las herramientas](https://github.com/JSNN15)</sub>
