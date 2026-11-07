/* Vigía EPP · detector en el navegador (ONNX Runtime Web). Las imágenes no salen del equipo. */
window.Vigia = (() => {
  const SIZE = 320, NAMES = ['casco', 'sin_casco'];
  let session = null, loading = null, backend = 'wasm';
  // El modelo se publica en dos partes (límite de carga del repositorio) y se une en el navegador.
  const fetchModel = async (parts) => {
    const bufs = await Promise.all(parts.map((p) => fetch(p).then((r) => { if (!r.ok) throw new Error(p); return r.arrayBuffer(); })));
    const n = bufs.reduce((s, b) => s + b.byteLength, 0), out = new Uint8Array(n); let o = 0;
    for (const b of bufs) { out.set(new Uint8Array(b), o); o += b.byteLength; }
    return out;
  };
  const load = (url = ['model.onnx.part0', 'model.onnx.part1']) => {
    if (session) return Promise.resolve(session);
    if (loading) return loading;
    ort.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 2);
    loading = (async () => {
      const model = Array.isArray(url) ? await fetchModel(url) : url;
      const opts = ['webgpu', 'wasm'];
      for (const ep of opts) {
        try {
          if (ep === 'webgpu' && !navigator.gpu) continue;
          session = await ort.InferenceSession.create(model, {executionProviders: [ep], graphOptimizationLevel: 'all'});
          backend = ep; return session;
        } catch (e) { /* intenta el siguiente */ }
      }
      throw new Error('No se pudo cargar el modelo');
    })();
    return loading;
  };
  const cv = document.createElement('canvas'); cv.width = SIZE; cv.height = SIZE;
  const cx = cv.getContext('2d', {willReadFrequently: true});
  const iou = (a, b) => { const x1 = Math.max(a.x, b.x), y1 = Math.max(a.y, b.y), x2 = Math.min(a.x + a.w, b.x + b.w), y2 = Math.min(a.y + a.h, b.y + b.h); const i = Math.max(0, x2 - x1) * Math.max(0, y2 - y1); return i / (a.w * a.h + b.w * b.h - i + 1e-9); };
  // src: imagen, video o canvas. Devuelve cajas en coordenadas de la fuente.
  const detect = async (src, {conf = 0.3, nms = 0.45} = {}) => {
    await load();
    const W = src.videoWidth || src.naturalWidth || src.width, H = src.videoHeight || src.naturalHeight || src.height;
    const s = SIZE / Math.max(W, H), nw = Math.round(W * s), nh = Math.round(H * s), dx = (SIZE - nw) / 2, dy = (SIZE - nh) / 2;
    cx.fillStyle = 'rgb(114,114,114)'; cx.fillRect(0, 0, SIZE, SIZE); cx.drawImage(src, dx, dy, nw, nh);
    const px = cx.getImageData(0, 0, SIZE, SIZE).data, N = SIZE * SIZE, inp = new Float32Array(3 * N);
    for (let i = 0; i < N; i++) { inp[i] = px[i * 4] / 255; inp[N + i] = px[i * 4 + 1] / 255; inp[2 * N + i] = px[i * 4 + 2] / 255; }
    const t0 = performance.now();
    const out = await session.run({[session.inputNames[0]]: new ort.Tensor('float32', inp, [1, 3, SIZE, SIZE])});
    const ms = performance.now() - t0;
    const o = out[session.outputNames[0]], d = o.data, A = o.dims[2], C = o.dims[1] - 4;
    let boxes = [];
    for (let a = 0; a < A; a++) {
      let best = 0, bc = 0; for (let c = 0; c < C; c++) { const v = d[(4 + c) * A + a]; if (v > best) { best = v; bc = c; } }
      if (best < conf) continue;
      const bx = d[a], by = d[A + a], bw = d[2 * A + a], bh = d[3 * A + a];
      boxes.push({x: (bx - bw / 2 - dx) / s, y: (by - bh / 2 - dy) / s, w: bw / s, h: bh / s, cls: bc, name: NAMES[bc], score: best});
    }
    boxes.sort((p, q) => q.score - p.score);
    const keep = [];
    for (const b of boxes) if (!keep.some((k) => iou(k, b) > nms)) keep.push(b);   // NMS sin distinguir clase: una cabeza, una decisión
    return {boxes: keep, ms, backend};
  };
  // Dibuja el cuadro anonimizado: pixela la cara (parte baja de cada caja) y marca las cajas.
  const render = (ctx, src, boxes, {W, H, anon = true, labels = true} = {}) => {
    W = W || ctx.canvas.width; H = H || ctx.canvas.height;
    const sw = src.videoWidth || src.naturalWidth || src.width, sh = src.videoHeight || src.naturalHeight || src.height, k = W / sw;
    ctx.drawImage(src, 0, 0, W, H);
    if (anon) for (const b of boxes) {
      const fy = b.cls === 0 ? b.y + b.h * 0.42 : b.y + b.h * 0.15;
      const x0 = Math.max(0, b.x * k), y0 = Math.max(0, fy * k), w = Math.min(W - x0, b.w * k), h = Math.min(H - y0, (b.y + b.h - fy) * k * 1.05);
      if (w < 3 || h < 3) continue;
      const blk = Math.max(3, Math.round(w / 5)), tmp = pix(blk, w, h);
      const tx = tmp.getContext('2d'); tx.imageSmoothingEnabled = true; tx.drawImage(ctx.canvas, x0, y0, w, h, 0, 0, Math.ceil(w / blk), Math.ceil(h / blk));
      ctx.imageSmoothingEnabled = false; ctx.drawImage(tmp, 0, 0, Math.ceil(w / blk), Math.ceil(h / blk), x0, y0, w, h); ctx.imageSmoothingEnabled = true;
    }
    for (const b of boxes) {
      const bad = b.cls === 1, col = bad ? '#ff3b30' : '#34c759';
      ctx.lineWidth = Math.max(2, W / 260); ctx.strokeStyle = col; ctx.strokeRect(b.x * k, b.y * k, b.w * k, b.h * k);
      if (labels) {
        const t = bad ? 'SIN CASCO' : 'CASCO', fs = Math.max(10, Math.round(W / 46));
        ctx.font = `600 ${fs}px "IBM Plex Mono", ui-monospace, monospace`; const tw = ctx.measureText(t).width + 8;
        const ly = b.y * k - fs - 4 < 0 ? b.y * k + b.h * k : b.y * k - fs - 4;
        ctx.fillStyle = col; ctx.fillRect(b.x * k, ly, tw, fs + 4); ctx.fillStyle = bad ? '#fff' : '#062b12'; ctx.fillText(t, b.x * k + 4, ly + fs - 1);
      }
    }
  };
  const pixCv = document.createElement('canvas');
  const pix = (blk, w, h) => { pixCv.width = Math.ceil(w / blk) + 1; pixCv.height = Math.ceil(h / blk) + 1; return pixCv; };
  return {load, detect, render, NAMES, get backend() { return backend; }};
})();
