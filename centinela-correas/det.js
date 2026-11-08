/* Centinela de correas · detector de grietas en el navegador (ONNX Runtime Web). */
window.Centinela = (() => {
  const IW = 640, IH = 384;
  let session = null, loading = null, backend = 'wasm';
  const fetchModel = async (parts) => {
    const bufs = await Promise.all(parts.map((p) => fetch(p).then((r) => { if (!r.ok) throw new Error(p); return r.arrayBuffer(); })));
    const out = new Uint8Array(bufs.reduce((s, b) => s + b.byteLength, 0)); let o = 0;
    for (const b of bufs) { out.set(new Uint8Array(b), o); o += b.byteLength; }
    return out;
  };
  const load = (parts = ['model.onnx.part0', 'model.onnx.part1']) => {
    if (session) return Promise.resolve(session);
    if (loading) return loading;
    ort.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 2);
    loading = (async () => {
      const model = await fetchModel(parts);
      for (const ep of ['webgpu', 'wasm']) {
        try {
          if (ep === 'webgpu' && !navigator.gpu) continue;
          session = await ort.InferenceSession.create(model, {executionProviders: [ep], graphOptimizationLevel: 'all'});
          backend = ep; return session;
        } catch (e) { /* siguiente */ }
      }
      throw new Error('modelo');
    })();
    return loading;
  };
  const cv = document.createElement('canvas'); cv.width = IW; cv.height = IH;
  const cx = cv.getContext('2d', {willReadFrequently: true});
  const iou = (a, b) => { const x1 = Math.max(a.x, b.x), y1 = Math.max(a.y, b.y), x2 = Math.min(a.x + a.w, b.x + b.w), y2 = Math.min(a.y + a.h, b.y + b.h); const i = Math.max(0, x2 - x1) * Math.max(0, y2 - y1); return i / (a.w * a.h + b.w * b.h - i + 1e-9); };
  // Devuelve cajas en coordenadas de la imagen de entrada.
  const detect = async (src, {conf = 0.3, nms = 0.45} = {}) => {
    await load();
    const W = src.videoWidth || src.naturalWidth || src.width, H = src.videoHeight || src.naturalHeight || src.height;
    const s = Math.min(IW / W, IH / H), nw = Math.round(W * s), nh = Math.round(H * s), dx = (IW - nw) / 2, dy = (IH - nh) / 2;
    cx.fillStyle = 'rgb(114,114,114)'; cx.fillRect(0, 0, IW, IH); cx.drawImage(src, dx, dy, nw, nh);
    const px = cx.getImageData(0, 0, IW, IH).data, N = IW * IH, inp = new Float32Array(3 * N);
    for (let i = 0; i < N; i++) { inp[i] = px[i * 4] / 255; inp[N + i] = px[i * 4 + 1] / 255; inp[2 * N + i] = px[i * 4 + 2] / 255; }
    const t0 = performance.now();
    const out = await session.run({[session.inputNames[0]]: new ort.Tensor('float32', inp, [1, 3, IH, IW])});
    const ms = performance.now() - t0;
    const o = out[session.outputNames[0]], d = o.data, A = o.dims[2];
    let boxes = [];
    for (let a = 0; a < A; a++) {
      const sc = d[4 * A + a]; if (sc < conf) continue;
      const bx = d[a], by = d[A + a], bw = d[2 * A + a], bh = d[3 * A + a];
      boxes.push({x: (bx - bw / 2 - dx) / s, y: (by - bh / 2 - dy) / s, w: bw / s, h: bh / s, score: sc});
    }
    boxes.sort((p, q) => q.score - p.score);
    const keep = []; for (const b of boxes) if (!keep.some((k) => iou(k, b) > nms)) keep.push(b);
    return {boxes: keep, ms, backend, W, H};
  };
  return {load, detect, iou, get backend() { return backend; }};
})();
