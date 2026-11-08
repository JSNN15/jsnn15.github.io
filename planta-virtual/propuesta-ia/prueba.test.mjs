/* Pruebas de la propuesta de IA (sin red: se reemplaza la llamada a NVIDIA). Ejecutar: node planta-virtual/propuesta-ia/prueba.test.mjs */
import assert from 'assert';
import {createRequire} from 'module';
import worker, {SYSTEM} from './servicio.js';
const require = createRequire(import.meta.url);

let sent = null;
globalThis.fetch = async (url, init) => { sent = {url, init, body: JSON.parse(init.body)}; return new Response(JSON.stringify({choices: [{message: {content: '<think>x</think>Respuesta de prueba.'}}], usage: {total_tokens: 42}}), {status: 200}); };
const env = {NVIDIA_API_KEY: 'clave-de-prueba'};
const call = (body, origin = 'https://jsnn15.github.io', method = 'POST', ip = '1.1.1.1') => worker.fetch(new Request('https://planta-ia.example/', {method, headers: {'Origin': origin, 'CF-Connecting-IP': ip, 'Content-Type': 'application/json'}, body: method === 'POST' ? JSON.stringify(body) : undefined}), env);
let n = 0; const test = async (name, fn) => { await fn(); n++; console.log('ok ·', name); };

await test('preflight CORS solo para el sitio permitido', async () => {
  const r = await call(null, 'https://jsnn15.github.io', 'OPTIONS');
  assert.strictEqual(r.status, 204); assert.strictEqual(r.headers.get('Access-Control-Allow-Origin'), 'https://jsnn15.github.io');
});
await test('rechaza otros orígenes', async () => { const r = await call({question: 'hola'}, 'https://otro.sitio'); assert.strictEqual(r.status, 403); });
await test('fija modelo, sistema y límites; la clave va en el encabezado', async () => {
  const r = await call({question: 'q'.repeat(2000), context: 'c'.repeat(50000), model: 'otro/modelo', max_tokens: 99999}, undefined, 'POST', '2.2.2.2');
  const d = await r.json();
  assert.strictEqual(r.status, 200); assert.strictEqual(d.answer, 'Respuesta de prueba.');
  assert.strictEqual(sent.url, 'https://integrate.api.nvidia.com/v1/chat/completions');
  assert.strictEqual(sent.init.headers.Authorization, 'Bearer clave-de-prueba');
  assert.match(sent.body.model, /^nvidia\//); assert.ok(sent.body.max_tokens <= 700);
  assert.strictEqual(sent.body.messages[0].content, SYSTEM);
  assert.ok(sent.body.messages[1].content.length < 12000, 'el contexto y la pregunta deben quedar recortados');
});
await test('sin clave configurada responde error claro', async () => {
  const r = await worker.fetch(new Request('https://x/', {method: 'POST', headers: {'Origin': 'https://jsnn15.github.io'}, body: '{"question":"a"}'}), {});
  assert.strictEqual(r.status, 500);
});
await test('limita consultas por IP', async () => {
  let last; for (let i = 0; i < 13; i++) last = await call({question: 'a'}, undefined, 'POST', '3.3.3.3');
  assert.strictEqual(last.status, 429);
});
await test('el contexto de la planta resume alarmas, equipos y variables', async () => {
  require('../sim.js'); require('./contexto.js');
  const P = globalThis.PlantSim.create(); for (let i = 0; i < 600; i++) P.step(); P.scenario('mcc'); for (let i = 0; i < 300; i++) P.step();
  const c = globalThis.PlantIA.context(P, []);
  assert.match(c, /MCC-200/); assert.match(c, /P-201A/); assert.match(c, /ALARMAS ACTIVAS \(\d+/); assert.match(c, /RELACIONES DEL MODELO/);
  assert.ok(c.length < 11000, `contexto de ${c.length} caracteres`);
});
console.log(`${n} pruebas OK`);
