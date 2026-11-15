"""Referencia independiente con pandas y scikit-learn: los mismos pasos que hace el cuaderno, para comparar número a número."""
import json, sys, numpy as np, pandas as pd
from sklearn.linear_model import Ridge
f = sys.argv[1]
d = pd.read_csv(f, decimal=',', parse_dates=['date'])
out = {'filas': len(d)}
c = d['Amina Flow']
med = c.median(); mad = (c - med).abs().median()
out['perfil'] = dict(media=c.mean(), desv=c.std(), mediana=med, mad=mad, p01=c.quantile(0.01), p99=c.quantile(0.99), min=c.min(), max=c.max(),
                     atipicos=int(((c - med).abs() > 6 * 1.4826 * mad).sum()))
# repartir las 6 filas de cada hora y promediar por hora
k = d.groupby('date').cumcount(); n = d.groupby('date')['date'].transform('size')
d['t'] = d['date'] + pd.to_timedelta(k / n * 3600, unit='s')
h = d.drop(columns=['date']).set_index('t').resample('1h').mean()
out['hora'] = dict(filas=len(h), vacias=int(h['Amina Flow'].isna().sum()), media_amina=h['Amina Flow'].mean(), suma_silice=h['% Silica Concentrate'].sum())
y = '% Silica Concentrate'
out['r'] = {col: h[col].corr(h[y]) for col in ['% Iron Concentrate', 'Amina Flow', 'Ore Pulp pH', 'Flotation Column 01 Air Flow']}
ent = [c for c in h.columns if c not in (y, '% Iron Concentrate')]
def correr(usar_ultimo, D=2):
    X = h[ent].copy()
    ult = h[y].shift(D)
    if usar_ultimo: X['ultimo'] = ult
    ok = h[y].notna() & X.notna().all(axis=1)
    idx = np.flatnonzero(ok.values)
    corte = int(np.floor(len(idx) * 0.7)); e, p = idx[:corte], idx[corte:]
    Xv, yv = X.values, h[y].values
    def ridge(filas, lam):
        mu, sd = Xv[filas].mean(0), Xv[filas].std(0); sd[sd == 0] = 1
        m = Ridge(alpha=lam, fit_intercept=True, solver='cholesky').fit((Xv[filas] - mu) / sd, yv[filas])
        return lambda Z: m.predict((Z - mu) / sd), m
    c2 = int(np.floor(len(e) * 0.75)); mejor = None
    for l in [0.01, 0.1, 1, 10, 100, 1000]:
        lam = l * c2 / 100
        pred, _ = ridge(e[:c2], lam)
        se = float(((yv[e[c2:]] - pred(Xv[e[c2:]])) ** 2).sum())
        if mejor is None or se < mejor[0]: mejor = (se, lam * len(e) / c2)
    pred, m = ridge(e, mejor[1])
    est = pred(Xv[p]); real = yv[p]
    met = lambda a, b: dict(mae=float(np.abs(a - b).mean()), rmse=float(np.sqrt(((a - b) ** 2).mean())), r2=float(1 - ((a - b) ** 2).sum() / ((a - a.mean()) ** 2).sum()))
    return dict(n_ent=len(e), n_pru=len(p), lam=mejor[1], beta=m.coef_.tolist(), b0=float(m.intercept_), modelo=met(real, est),
                promedio=met(real, np.full(len(p), yv[e].mean())), ultimo=met(real, ult.values[p]))
out['solo_proceso'] = correr(False); out['con_ultimo'] = correr(True)
print(json.dumps(out))
