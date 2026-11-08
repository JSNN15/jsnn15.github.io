/* Servicio intermedio entre la planta virtual y la API de NVIDIA (Cloudflare Worker).
   - Guarda la clave como secreto (NVIDIA_API_KEY); nunca llega al navegador ni al repositorio.
   - Fija el modelo, el mensaje de sistema y el largo de la respuesta: no sirve como acceso general a un modelo de lenguaje.
   - Solo acepta llamadas desde el sitio publicado y limita consultas por IP. */
const MODEL = 'nvidia/nemotron-3.5-super-vl-120b-a12b'; // probado: ~2 s, español correcto, reconoce cuando no tiene datos
const API = 'https://integrate.api.nvidia.com/v1/chat/completions';
const ORIGINS = ['https://jsnn15.github.io', 'http://localhost:8765', 'http://127.0.0.1:8765'];
const MAX_CONTEXT = 11000, MAX_QUESTION = 500, MAX_TOKENS = 450;
const LIMIT = 12, WINDOW_MS = 10 * 60 * 1000; // consultas por IP en 10 min (por instancia del Worker)

export const SYSTEM = `Eres el asistente de turno de la sala de control de una planta de cobre LX-SX-EW (lixiviación en pilas, extracción por solventes y electroobtención). Es un simulador de entrenamiento de operadores; los datos vienen de su modelo.
Reglas:
- Responde en español de Chile, claro y directo, como un jefe de turno con experiencia. Máximo 120 palabras.
- Escribe texto plano con tildes y ortografía correctas: sin negritas, sin títulos, sin markdown. Puedes usar una lista numerada corta (1., 2., 3.).
- Usa solo los datos y las relaciones del estado de planta que recibes; recomienda solo acciones de la lista de acciones disponibles. Si algo no está en los datos, dilo. Nunca inventes valores, tags, equipos ni relaciones de causa que los datos no muestren.
- Nombra los tags exactos (por ejemplo P-201A, LIT-204, IIC-401) y los valores con su unidad.
- Prioriza: primero seguridad de personas y equipos, luego la causa raíz, luego producción y calidad del cátodo.
- Las acciones van en pasos cortos que el operador hace desde la sala: partir, detener, rearmar, cambiar modo o consigna, usar una secuencia, o pedir a mantenimiento o terreno que verifique.
- Antes de rearmar tras un disparo o de intervenir algo eléctrico, indica verificar en terreno.`;

const rate = new Map();
const json = (obj, status, cors) => new Response(JSON.stringify(obj), {status, headers: {...cors, 'Content-Type': 'application/json; charset=utf-8'}});

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const allowed = ORIGINS.includes(origin);
    const cors = {'Access-Control-Allow-Origin': allowed ? origin : ORIGINS[0], 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400', 'Vary': 'Origin'};
    if (req.method === 'OPTIONS') return new Response(null, {status: 204, headers: cors});
    if (req.method !== 'POST') return json({error: 'Usa POST.'}, 405, cors);
    if (!allowed) return json({error: 'Origen no permitido.'}, 403, cors);
    if (!env.NVIDIA_API_KEY) return json({error: 'El servicio no tiene la clave de NVIDIA configurada.'}, 500, cors);

    const ip = req.headers.get('CF-Connecting-IP') || 'local', now = Date.now();
    const hits = (rate.get(ip) || []).filter((t) => now - t < WINDOW_MS);
    if (hits.length >= LIMIT) return json({error: 'Demasiadas consultas seguidas. Prueba en unos minutos.'}, 429, cors);
    hits.push(now); rate.set(ip, hits);

    let body;
    try { body = await req.json(); } catch (e) { return json({error: 'Cuerpo JSON inválido.'}, 400, cors); }
    const question = String(body.question || '').trim().slice(0, MAX_QUESTION);
    const context = String(body.context || '').slice(0, MAX_CONTEXT);
    if (!question) return json({error: 'Falta la pregunta.'}, 400, cors);

    const t0 = Date.now();
    let r;
    try {
      r = await fetch(API, {
        method: 'POST',
        headers: {'Authorization': `Bearer ${env.NVIDIA_API_KEY}`, 'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({
          model: MODEL, temperature: 0.2, max_tokens: MAX_TOKENS,
          chat_template_kwargs: {enable_thinking: false},
          messages: [{role: 'system', content: SYSTEM}, {role: 'user', content: `ESTADO DE LA PLANTA\n${context}\n\nPREGUNTA DEL OPERADOR\n${question}`}]
        })
      });
    } catch (e) { return json({error: 'No se pudo contactar a NVIDIA.'}, 502, cors); }
    if (!r.ok) return json({error: `NVIDIA respondió ${r.status}.`}, 502, cors);
    const d = await r.json();
    const answer = ((d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content) || '').replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    if (!answer) return json({error: 'La IA no devolvió texto.'}, 502, cors);
    return json({answer, model: MODEL, ms: Date.now() - t0, tokens: d.usage ? d.usage.total_tokens : null}, 200, cors);
  }
};
