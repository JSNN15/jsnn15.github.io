# Servicio intermedio de IA (Cloudflare Worker)

La pestaña **Asistente** de la planta virtual puede preguntarle a un modelo de lenguaje de NVIDIA qué está pasando en la planta. La página arma un resumen en texto del estado actual (alarmas, equipos detenidos, lazos en modo no habitual, variables clave, secuencias y últimos eventos) y lo envía junto con la pregunta del operador.

## Por qué hace falta este servicio

- La API de NVIDIA (`integrate.api.nvidia.com`) no acepta llamadas desde páginas web: no responde con el encabezado CORS que el navegador exige.
- La clave no puede quedar en un sitio público, porque cualquiera la copiaría.

Este Worker resuelve las dos cosas:
- Guarda la clave como secreto.
- Fija el modelo, el mensaje de sistema y el largo de la respuesta, así que no sirve como acceso general a la IA.
- Solo acepta llamadas desde `https://jsnn15.github.io`.
- Limita a 12 consultas por IP cada 10 minutos.
- No guarda las conversaciones.

## Desplegar (unos 5 minutos)

Requisitos: una cuenta de Cloudflare (el plan gratuito alcanza), Node.js y la clave de build.nvidia.com.

Primero, entra a la carpeta del servicio:

```bash
cd planta-virtual/ia-proxy
```

Inicia sesión en Cloudflare:

```bash
npx wrangler login
```

Publica el Worker:

```bash
npx wrangler deploy
```

Guarda la clave como secreto (la pide sin mostrarla):

```bash
npx wrangler secret put NVIDIA_API_KEY
```

`wrangler deploy` muestra la URL del servicio, del tipo `https://planta-ia.<tu-subdominio>.workers.dev`.

## Activarlo en la página

- **Para probar sin tocar el código:** abre `https://jsnn15.github.io/planta-virtual/?ia=https://planta-ia.<tu-subdominio>.workers.dev`. Ese navegador recuerda la URL; para olvidarla, abre la página con `?ia=` vacío.
- **Para todos los visitantes:** pon la URL en `DEFAULT_ENDPOINT` de `planta-virtual/ia.js` y publica.

Sin URL configurada, la página no muestra la consulta a la IA, y el asistente local (predicción de alarmas, causa probable, anomalías y recomendaciones) sigue funcionando igual.

## Modelo

`nvidia/nemotron-3.5-super-vl-120b-a12b`, sin modo de razonamiento.

Lo elegí tras probar cuatro escenarios de la planta: caída del MCC-200, racha de cortocircuitos, disparo del rectificador y resumen de cambio de turno. Respondió en 1,7 a 4,6 s, en español, nombrando tags y valores reales, y reconoció cuando los datos no alcanzaban.

| Modelo | Tiempo | Resultado |
|---|---|---|
| `nvidia/nemotron-3.5-super-vl-120b-a12b` | 1,7 a 4,6 s | El elegido |
| `nvidia/nemotron-3.5-lightning-30b-a3b` | 2 a 4 s | Atribuyó causas que los datos no mostraban |
| `nvidia/nemotron-3-ultra-550b-a55b` | unos 13 s | Buen razonamiento, pero lento y extenso |

## Pruebas

Las pruebas no usan red: reemplazan la llamada a NVIDIA por una respuesta simulada.

```bash
node planta-virtual/test/proxy.test.mjs
```

Revisan:
- CORS solo para el sitio;
- rechazo de otros orígenes;
- modelo y mensaje de sistema fijos;
- recorte del contexto;
- error claro sin clave;
- límite por IP;
- contenido del resumen de la planta.
