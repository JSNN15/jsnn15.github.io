import json, numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import normalize
from sklearn.metrics import precision_recall_fscore_support, accuracy_score
E = normalize(np.load('emb.npy')); meta = json.load(open('emb_meta.json'))
idx = lambda split, kind: [i for i, m in enumerate(meta) if m['split'] == split and m['kind'] == kind]
y = np.array([m['y'] for m in meta])
out = {}
# 1) imagen completa
tr, te = idx('train', 'full'), idx('test', 'full')
clf = LogisticRegression(C=2, max_iter=3000, class_weight='balanced').fit(E[tr], y[tr])
p = clf.predict(E[te]); pr, rc, f1, _ = precision_recall_fscore_support(y[te], p, average='binary')
out['full'] = dict(acc=accuracy_score(y[te], p), prec=pr, rec=rc, f1=f1)
# 2) recortes por persona (detector perfecto)
trc, tec = idx('train', 'crop'), idx('test', 'crop')
clc = LogisticRegression(C=2, max_iter=3000, class_weight='balanced').fit(E[trc], y[trc])
pc = clc.predict(E[tec]); prob = clc.predict_proba(E[tec])[:, 1]
pr, rc, f1, _ = precision_recall_fscore_support(y[tec], pc, average='binary')
out['crop_person'] = dict(n=len(tec), acc=accuracy_score(y[tec], pc), prec=pr, rec=rc, f1=f1)
# imagen = alguna persona sin casco
files = [r['f'] for r in json.load(open('split.json'))['test']]
gt = {m['f']: m['y'] for m in meta if m['split'] == 'test' and m['kind'] == 'full'}
agg = {f: 0 for f in files}; cnt = {f: 0 for f in files}
for k, i in enumerate(tec):
    f = meta[i]['f']; agg[f] = max(agg[f], pc[k]); cnt[f] += pc[k]
yp = np.array([agg[f] for f in files]); yt = np.array([gt[f] for f in files])
pr, rc, f1, _ = precision_recall_fscore_support(yt, yp, average='binary')
out['crop_image'] = dict(acc=accuracy_score(yt, yp), prec=pr, rec=rc, f1=f1)
# conteo
sp = {r['f']: r for r in json.load(open('split.json'))['test']}
out['crop_count_mae'] = float(np.mean([abs(cnt[f] - sp[f]['head']) for f in files]))
out['crop_count_exact'] = float(np.mean([cnt[f] == sp[f]['head'] for f in files]))
# curva de aprendizaje con pocos ejemplos (recortes)
rng = np.random.default_rng(0); lc = []
for n in (20, 50, 100, 200, 500, 1000, len(trc)):
    accs = []
    for rep in range(5):
        sel = rng.choice(trc, size=min(n, len(trc)), replace=False)
        if len(set(y[sel])) < 2: continue
        c = LogisticRegression(C=2, max_iter=3000, class_weight='balanced').fit(E[sel], y[sel]); accs.append(accuracy_score(y[tec], c.predict(E[tec])))
    lc.append((int(n), float(np.mean(accs))))
out['learning_curve'] = lc
json.dump({k: ({a: float(b) for a, b in v.items()} if isinstance(v, dict) else v) for k, v in out.items()}, open('probe_res.json', 'w'), indent=1)
print(json.dumps(json.load(open('probe_res.json')), indent=1))
# predicciones por imagen para el análisis de triage
pf = clf.predict_proba(E[te])[:, 1]
per = {meta[i]['f']: {'full_p': float(pf[k]), 'full': int(p[k])} for k, i in enumerate(te)}
for f in files: per[f].update({'crop': int(agg[f]), 'crop_count': int(cnt[f])})
json.dump(per, open('probe_per_image.json', 'w'))
