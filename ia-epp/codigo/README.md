# Inspección de EPP con IA: código de la prueba

Prueba de modelos de visión de NVIDIA (build.nvidia.com) para detectar personas sin casco en fotos reales de faena.
Resultados y conclusiones: https://jsnn15.github.io/ia-epp/

## Datos
[Hard Hat Workers](https://huggingface.co/datasets/Voxel51/hard-hat-detection), 5.000 imágenes, licencia CC0.
Descargar `samples.json` en `data/` y las imágenes de `split.json` en `img/`.

## Pasos
1. `export NVIDIA_API_KEY=...` (clave propia de build.nvidia.com).
2. `python run_vlm.py nemotron-super-vl 4` (y `nemotron-bolt`, `nemotron-omni`): modelos sin entrenar, una consulta por foto.
3. `python retry_omni.py`: reintenta con más presupuesto de tokens las respuestas vacías del modelo de razonamiento.
4. `python embed.py`: vectores de imagen y de recortes de cabeza con `nvidia/llama-nemotron-embed-vl-1b-v2`.
5. `python probe.py`: clasificadores entrenados (regresión logística) y curva de aprendizaje.
6. `python analyze.py`: métricas y tasas para el análisis de ahorro (`results.json`).

`split.json` contiene la partición exacta usada (semilla 42). Los archivos `res_*.jsonl` tienen la respuesta de cada modelo para cada foto.
