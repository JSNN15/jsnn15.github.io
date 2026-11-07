(async () => {
  const $ = (id) => document.getElementById(id);
  const nf = new Intl.NumberFormat('es-CL');
  const hm = (d = new Date()) => d.toLocaleTimeString('es-CL', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  const FR = await (await fetch('frames.json')).json();
  const loadImg = (src) => new Promise((ok, ko) => { const i = new Image(); i.onload = () => ok(i); i.onerror = ko; i.src = src; });

  try { await Vigia.load(); } catch (e) { $('loading').innerHTML = '<div>No se pudo cargar el modelo en este navegador.</div><div class="small">Prueba con Chrome, Edge o Safari actualizados.</div>'; return; }
  $('loading').classList.add('hide');
  $('pill').innerHTML = `<i></i>IA local · ${Vigia.backend === 'webgpu' ? 'GPU' : 'CPU'}`;

  /* ---------------- pestañas ---------------- */
  let view = (location.hash || '#sala').slice(1);
  const show = (v) => { view = ['sala', 'vivo', 'foto'].includes(v) ? v : 'sala'; document.querySelectorAll('.view').forEach((e) => e.classList.toggle('show', e.id === 'v-' + view)); document.querySelectorAll('#tabs button').forEach((b) => b.classList.toggle('on', b.dataset.v === view)); if (view !== 'vivo') stopCam(); history.replaceState(null, '', '#' + view); };
  $('tabs').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) show(b.dataset.v); });

  /* ---------------- sala de control ---------------- */
  const CAMS = [['CAM 01', 'Acceso a faena'], ['CAM 02', 'Losa nivel 3'], ['CAM 03', 'Taller de mantención'], ['CAM 04', 'Patio de acopio']];
  const st = {frames: 0, ppl: 0, ok: 0, bad: 0, incidents: [], seen: new Set(), cam: CAMS.map(() => ({ok: 0, bad: 0})), start: new Date()};
  $('cams').innerHTML = CAMS.map(([id, n], i) => `<div class="cam" id="cam${i}"><canvas width="416" height="416"></canvas><div class="hud"><span><span class="rec"></span><b>${id}</b> · ${n}</span><span data-clock></span></div><div class="foot"><span data-info>analizando…</span><span data-tag></span></div></div>`).join('');
  const seq = CAMS.map((_, i) => FR.filter((_, k) => k % 4 === i));
  const pos = CAMS.map(() => 0);
  const runCam = async (i) => {
    const el = $('cam' + i), cv = el.querySelector('canvas'), ctx = cv.getContext('2d');
    const name = seq[i][pos[i] % seq[i].length]; pos[i]++;
    const img = await loadImg('frames/' + name);
    const r = await Vigia.detect(img);
    Vigia.render(ctx, img, r.boxes, {W: 416, H: 416});
    const bad = r.boxes.filter((b) => b.cls === 1).length, ok = r.boxes.length - bad;
    st.frames++; st.ppl += r.boxes.length; st.ok += ok; st.bad += bad; st.cam[i].ok += ok; st.cam[i].bad += bad;
    el.classList.toggle('alert', bad > 0);
    el.querySelector('[data-info]').textContent = `${r.boxes.length} personas · ${Math.round(r.ms)} ms`;
    el.querySelector('[data-tag]').innerHTML = bad ? `<span class="tag">${bad} SIN CASCO</span>` : '';
    if (bad && !st.seen.has(i + ':' + name)) {
      st.seen.add(i + ':' + name);
      st.incidents.unshift({id: st.incidents.length + 1, cam: i, t: new Date(), n: bad, thumb: cv.toDataURL('image/jpeg', 0.7), status: 'nuevo'});
      renderFeed();
    }
    renderKPI();
  };
  const renderKPI = () => {
    const tot = st.ok + st.bad;
    const c = $('k-comp'); c.textContent = tot ? Math.round(100 * st.ok / tot) + ' %' : '—'; c.className = 'v ' + (tot && st.ok / tot < 0.9 ? 'bad' : 'ok');
    const open = st.incidents.filter((x) => x.status !== 'cerrado').length; const o = $('k-open'); o.textContent = open; o.className = 'v ' + (open ? 'bad' : 'ok');
    $('k-ppl').textContent = nf.format(st.ppl); $('k-fr').textContent = nf.format(st.frames);
    $('bars').innerHTML = CAMS.map(([id, n], i) => { const t = st.cam[i].ok + st.cam[i].bad, p = t ? st.cam[i].ok / t : 1; return `<div class="r"><span>${id} · ${n.split(' ')[0]}</span><span class="t"><i style="width:${p * 100}%;background:${p < 0.9 ? 'var(--bad)' : 'var(--ok)'}"></i></span><span style="font-family:var(--mono);text-align:right">${t ? Math.round(p * 100) + '%' : '—'}</span></div>`; }).join('');
  };
  const renderFeed = () => {
    $('feed').innerHTML = st.incidents.slice(0, 30).map((x) => `<div class="inc ${x.status === 'cerrado' ? 'done' : ''}"><img src="${x.thumb}" alt="Cuadro del incidente ${x.id}"><div class="m"><b>${x.n} ${x.n > 1 ? 'personas' : 'persona'} sin casco</b><span>#${x.id} · ${CAMS[x.cam][0]} ${CAMS[x.cam][1]} · ${hm(x.t)}</span><span>Estado: ${x.status}</span><div class="act">${x.status === 'nuevo' ? `<button data-notify="${x.id}">Avisar al supervisor</button>` : ''}${x.status !== 'cerrado' ? `<button data-close="${x.id}">Cerrar</button>` : ''}</div></div></div>`).join('') || '<p class="muted small" style="margin:0">Sin incidentes todavía.</p>';
  };
  $('feed').addEventListener('click', (e) => {
    const n = e.target.closest('[data-notify]'), c = e.target.closest('[data-close]');
    if (n) { const x = st.incidents.find((i) => i.id === +n.dataset.notify); x.status = 'notificado'; toast(x); renderFeed(); renderKPI(); }
    if (c) { const x = st.incidents.find((i) => i.id === +c.dataset.close); x.status = 'cerrado'; renderFeed(); renderKPI(); }
  });
  let tt;
  const toast = (x) => {
    const t = $('toast'); clearTimeout(tt);
    t.innerHTML = `<b>Aviso enviado al supervisor de turno</b><div class="wa">⚠️ <b>Vigía EPP</b> · ${CAMS[x.cam][0]} ${esc(CAMS[x.cam][1])}<br>${x.n} ${x.n > 1 ? 'personas' : 'persona'} sin casco a las ${hm(x.t)}. Foto adjunta, rostros anonimizados.</div><small>Demostración: en una implementación real el aviso llega por WhatsApp, correo o radio.</small>`;
    t.classList.add('show'); tt = setTimeout(() => t.classList.remove('show'), 6000);
  };
  setInterval(() => document.querySelectorAll('[data-clock]').forEach((e) => { e.textContent = hm(); }), 1000);
  // ciclo de cámaras escalonado
  let salaBusy = false;
  const salaLoop = async () => {
    if (view === 'sala' && !document.hidden && !salaBusy) { salaBusy = true; try { for (let i = 0; i < 4; i++) await runCam(i); } finally { salaBusy = false; } }
    setTimeout(salaLoop, 2600);
  };
  salaLoop();

  /* ---------------- informe ---------------- */
  $('btn-rep').onclick = () => {
    const tot = st.ok + st.bad, dur = Math.max(1, Math.round((new Date() - st.start) / 60000));
    const r = $('report');
    r.innerHTML = `<div class="noprint"><button onclick="window.print()">Imprimir o guardar PDF</button><button id="rep-x">Cerrar</button></div>
      <h2>Informe de turno · Vigía EPP</h2><div class="meta">${new Date().toLocaleDateString('es-CL', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})} · desde las ${hm(st.start)} (${dur} min) · 4 cámaras · generado automáticamente</div>
      <div class="grid"><div>Cumplimiento<b>${tot ? Math.round(100 * st.ok / tot) : 0} %</b></div><div>Personas revisadas<b>${nf.format(st.ppl)}</b></div><div>Incidentes<b>${st.incidents.length}</b></div><div>Cerrados<b>${st.incidents.filter((x) => x.status === 'cerrado').length}</b></div></div>
      <table><thead><tr><th>Cámara</th><th>Con casco</th><th>Sin casco</th><th>Cumplimiento</th></tr></thead><tbody>${CAMS.map(([id, n], i) => { const t = st.cam[i].ok + st.cam[i].bad; return `<tr><td>${id} · ${n}</td><td>${st.cam[i].ok}</td><td>${st.cam[i].bad}</td><td>${t ? Math.round(100 * st.cam[i].ok / t) + ' %' : '—'}</td></tr>`; }).join('')}</tbody></table>
      <p style="font-size:.9rem">${resumen()}</p>
      <h3 style="font-size:1rem;margin:16px 0 6px">Registro de incidentes</h3>
      <div class="imgs">${st.incidents.slice().reverse().map((x) => `<figure><img src="${x.thumb}" alt=""><figcaption>#${x.id} · ${CAMS[x.cam][0]} · ${hm(x.t)} · ${x.n} sin casco · ${x.status}</figcaption></figure>`).join('') || '<p>Sin incidentes.</p>'}</div>
      <p style="font-size:.75rem;color:#666;margin-top:16px">Rostros anonimizados automáticamente. Imágenes de demostración del conjunto público Hard Hat Workers (CC0).</p>`;
    $('modal').classList.add('show');
    $('rep-x').onclick = () => $('modal').classList.remove('show');
  };
  const resumen = () => {
    const worst = CAMS.map((c, i) => ({i, t: st.cam[i].ok + st.cam[i].bad, p: st.cam[i].bad / Math.max(1, st.cam[i].ok + st.cam[i].bad)})).sort((a, b) => b.p - a.p)[0];
    const open = st.incidents.filter((x) => x.status !== 'cerrado').length;
    return `Resumen: ${st.incidents.length} incidentes en el período. El punto más crítico fue ${CAMS[worst.i][0]} ${CAMS[worst.i][1]}, con ${Math.round(worst.p * 100)} % de las personas sin casco. ${open ? `Quedan ${open} incidentes sin cerrar para el turno siguiente.` : 'Todos los incidentes quedaron cerrados.'}`;
  };
  $('modal').addEventListener('click', (e) => { if (e.target.id === 'modal') $('modal').classList.remove('show'); });

  /* ---------------- cámara en vivo ---------------- */
  let stream = null, facing = 'environment', liveOn = false, lastT = 0, fps = 0;
  const vid = $('vid'), cvl = $('cv-live'), cl = cvl.getContext('2d');
  const stopCam = () => { liveOn = false; if (stream) { stream.getTracks().forEach((t) => t.stop()); stream = null; } $('btn-cam').textContent = 'Encender cámara'; $('ov-live').textContent = 'Cámara apagada'; };
  const startCam = async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: facing, width: {ideal: 1280}, height: {ideal: 720}}, audio: false});
      vid.srcObject = stream; await vid.play(); liveOn = true; $('btn-cam').textContent = 'Apagar cámara';
      cvl.width = vid.videoWidth; cvl.height = vid.videoHeight; liveLoop();
    } catch (e) { $('ov-live').textContent = 'No hay permiso de cámara o el equipo no tiene cámara'; $('banner').textContent = 'Permite el uso de la cámara para probar'; }
  };
  const liveLoop = async () => {
    if (!liveOn) return;
    const r = await Vigia.detect(vid);
    Vigia.render(cl, vid, r.boxes, {W: cvl.width, H: cvl.height, anon: $('chk-anon').checked});
    const bad = r.boxes.filter((b) => b.cls === 1).length, ok = r.boxes.length - bad;
    $('l-ok').textContent = ok; $('l-bad').textContent = bad; $('l-ms').textContent = Math.round(r.ms) + ' ms';
    const now = performance.now(); if (lastT) fps = fps * 0.8 + 0.2 * (1000 / (now - lastT)); lastT = now; $('l-fps').textContent = fps.toFixed(1);
    const bn = $('banner'); bn.className = 'banner ' + (bad ? 'bad' : (ok ? 'ok' : '')); bn.textContent = bad ? `⚠ ${bad} ${bad > 1 ? 'PERSONAS' : 'PERSONA'} SIN CASCO` : (ok ? '✓ Todos con casco' : 'Sin personas a la vista');
    $('ov-live').textContent = `EN VIVO · ${Vigia.backend === 'webgpu' ? 'GPU' : 'CPU'} · ${Math.round(r.ms)} ms`;
    requestAnimationFrame(liveLoop);
  };
  $('btn-cam').onclick = () => (liveOn ? stopCam() : startCam());
  $('btn-flip').onclick = async () => { facing = facing === 'environment' ? 'user' : 'environment'; if (liveOn) { stopCam(); await startCam(); } };

  /* ---------------- foto ---------------- */
  const cvf = $('cv-foto'), cf = cvf.getContext('2d');
  const analyze = async (img) => {
    const W = img.naturalWidth || img.width, H = img.naturalHeight || img.height, k = Math.min(1, 1280 / Math.max(W, H));
    cvf.width = Math.round(W * k); cvf.height = Math.round(H * k);
    const r = await Vigia.detect(img);
    Vigia.render(cf, img, r.boxes, {W: cvf.width, H: cvf.height});
    const bad = r.boxes.filter((b) => b.cls === 1).length, ok = r.boxes.length - bad;
    const bn = $('banner-f'); bn.className = 'banner ' + (bad ? 'bad' : (ok ? 'ok' : '')); bn.textContent = bad ? `⚠ ${bad} sin casco · ${ok} con casco` : (ok ? `✓ ${ok} con casco` : 'No se ven personas');
    $('ov-foto').textContent = `${r.boxes.length} personas · ${Math.round(r.ms)} ms en tu equipo`;
  };
  $('thumbs').innerHTML = FR.slice(0, 10).map((n) => `<img src="frames/${n}" data-f="${n}" alt="Foto de ejemplo">`).join('');
  $('thumbs').addEventListener('click', async (e) => { const t = e.target.closest('img'); if (t) analyze(await loadImg('frames/' + t.dataset.f)); });
  const useFile = (f) => { if (!f || !f.type.startsWith('image/')) return; const u = URL.createObjectURL(f); loadImg(u).then(analyze).finally(() => URL.revokeObjectURL(u)); };
  $('file').addEventListener('change', (e) => useFile(e.target.files[0]));
  const dr = $('drop');
  ['dragenter', 'dragover'].forEach((t) => dr.addEventListener(t, (e) => { e.preventDefault(); dr.classList.add('hov'); }));
  ['dragleave', 'drop'].forEach((t) => dr.addEventListener(t, (e) => { e.preventDefault(); dr.classList.remove('hov'); }));
  dr.addEventListener('drop', (e) => useFile(e.dataTransfer.files[0]));

  show(view);
})();
