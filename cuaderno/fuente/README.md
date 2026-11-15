# Cuaderno de planta

Abre el archivo que exporta la planta y revisa, limpia y modela los datos en el navegador. El archivo no sale del equipo y no hay licencias que pagar.

**Probar:** https://jsnn15.github.io/cuaderno/

## Por qué existe

En muchas plantas el análisis de datos de proceso se hace en Excel: cada mes se repite a mano la misma limpieza y nadie puede decir con qué reglas se hizo la del mes anterior. Las plataformas que lo resuelven cuestan licencias que un área chica no puede justificar. Este cuaderno hace el trabajo de base sin instalar nada.

## Qué hace

| Paso | Qué entrega |
|---|---|
| Datos | Lee CSV, TXT y Excel, con coma o punto decimal y fechas día-mes-año o ISO. |
| Calidad | Avisa marcas de tiempo repetidas, huecos, columnas vacías o constantes, sensores pegados, valores atípicos y datos de laboratorio mezclados con sensores en línea. |
| Receta | Cada arreglo queda como un paso con nombre. La receta se guarda en un archivo y se aplica igual al archivo del mes siguiente. |
| Explorar | Series de tiempo y correlación de cada variable con la que interesa. |
| Modelo | Regresión lineal regularizada, entrenada con la primera parte del período y probada con la última. Se compara con usar el último valor conocido y con el promedio. |
| Vigilar | La misma receta y el mismo modelo sobre datos nuevos: error, y qué entradas cambiaron respecto del entrenamiento. |

Dos reglas que evitan los errores más comunes:

- **La prueba es por fecha.** Mezclar al azar filas de entrenamiento y de prueba hace que cualquier modelo parezca bueno.
- **Lo que sale del mismo análisis de laboratorio no entra al modelo.** Si una columna cambia en los mismos momentos que la variable a estimar, no se conoce antes que ella. El cuaderno la detecta y la deja fuera.

## El ejemplo

Datos públicos de una planta de flotación de hierro («Quality Prediction in a Mining Process», Kaggle), una fila de cada treinta: 20.118 filas de marzo a agosto de 2017 para trabajar y 4.464 del mes siguiente para vigilar.

El resultado del ejemplo es incómodo y real: con estos datos, el modelo evita mejor los errores grandes que usar el último laboratorio (RMSE 0,853 contra 0,935), pero en lo habitual se equivoca un 8 % más (error medio 0,627 contra 0,581). El cuaderno lo dice así y no lo presenta como una mejora.

## Cómo se comprobó

`test/referencia.py` repite los mismos pasos con pandas y scikit-learn, y `test/nucleo.test.mjs` compara el resultado número a número: lectura, perfil de una columna, promedio por hora, correlaciones, coeficientes del modelo y métricas de los tres estimadores, más tres formatos de archivo y la ida y vuelta de exportar y volver a leer. **95 de 95 comprobaciones coinciden.** La salida completa está en `test/resultado.txt`.

Para repetirlo, copia `flotacion.csv` y `flotacion_nuevo.csv` (están junto a la página) a una carpeta `public/` y corre:

```
python3 test/referencia.py public/flotacion.csv > test/referencia.json
node test/nucleo.test.mjs
```

## Límites

- El modelo es lineal. Sirve para saber rápido si hay señal; no reemplaza un estudio.
- Todo corre en la memoria del navegador. Probado con 20.000 filas y 24 columnas; archivos de cientos de miles de filas pueden tardar o no caber.
- Lee la primera hoja de un Excel y espera el encabezado en la primera fila.
- No tiene asistente de IA: los avisos y veredictos los calcula el código.

## Archivos

| Archivo | Qué es |
|---|---|
| `src/nucleo.js` | Todo el cálculo, sin pantalla. Corre igual en el navegador y en Node. |
| `src/App.jsx`, `src/Grafico.jsx` | La página. |
| `test/` | Referencia en pandas y scikit-learn, comparación y resultado. |
| `public/flotacion.csv`, `public/flotacion_nuevo.csv` | Los datos del ejemplo. |

---

<sub>Proyecto personal de **Julián Neira Nova**, ingeniero eléctrico con 10 años en faena · Servicio y Soluciones Tecnológicas DelaCruz SpA. Nada de lo publicado proviene de clientes ni de empleadores.
[Portafolio](https://jsnn15.github.io/) · [LinkedIn](https://www.linkedin.com/in/julian-neira-nova/) · [Todas las herramientas](https://github.com/JSNN15)</sub>
