/* Selector IA · clasificador de calidad de fruta en el navegador (MobileNetV3 + ONNX Runtime Web). */
window.Selector = (() => {
  const S = 192, FR = ['apple', 'banana', 'grape', 'guava', 'jujube', 'orange', 'pomegranate', 'strawberry'];
  const ES = {apple: 'manzana', banana: 'plátano', grape: 'uva', guava: 'guayaba', jujube: 'azufaifa', orange: 'naranja', pomegranate: 'granada', strawberry: 'frutilla'};
  const MEAN = [0.485, 0.456, 0.406], STD = [0.229, 0.224, 0.225];
  let session = null, loading = null, backend = 'wasm';
  const load = () => {
    if (session) return Promise.resolve(session);
    if (loading) return loading;
    ort.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 2);
    loading = (async () => {
      for (const ep of ['webgpu', 'wasm']) {
        try { if (ep === 'webgpu' && !navigator.gpu) continue; session = await ort.InferenceSession.create('model.onnx', {executionProviders: [ep]}); backend = ep; return session; } catch (e) { /* siguiente */ }
      }
      throw new Error('modelo');
    })();
    return loading;
  };
  const cv = document.createElement('canvas'); cv.width = S; cv.height = S;
  const cx = cv.getContext('2d', {willReadFrequently: true});
  // Recorte central cuadrado, igual que en el entrenamiento.
  const classify = async (src) => {
    await load();
    const W = src.videoWidth || src.naturalWidth || src.width, H = src.videoHeight || src.naturalHeight || src.height, m = Math.min(W, H);
    cx.drawImage(src, (W - m) / 2, (H - m) / 2, m, m, 0, 0, S, S);
    const px = cx.getImageData(0, 0, S, S).data, N = S * S, x = new Float32Array(3 * N);
    for (let i = 0; i < N; i++) for (let c = 0; c < 3; c++) x[c * N + i] = (px[i * 4 + c] / 255 - MEAN[c]) / STD[c];
    const t0 = performance.now();
    const out = await session.run({images: new ort.Tensor('float32', x, [1, 3, S, S])});
    const p = out.probs.data, ms = performance.now() - t0;
    let bad = 0, best = 0, bi = 0; for (let i = 0; i < p.length; i++) { if (i % 2) bad += p[i]; if (p[i] > best) { best = p[i]; bi = i; } }
    const f = FR[Math.floor(bi / 2)];
    return {fruit: f, fruitEs: ES[f], pBad: bad, ms};
  };
  return {load, classify, ES, get backend() { return backend; }};
})();
