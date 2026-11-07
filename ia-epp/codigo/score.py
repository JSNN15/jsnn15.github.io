import json, sys, statistics as st
def load(k):
    return [json.loads(l) for l in open(f'res_{k}.jsonl')]
def score(rows):
    tp=fp=tn=fn=0; ae_wo=[]; ae_w=[]; lat=[]; bad=0; toks=[]
    for r in rows:
        p=r.get('pred')
        nores = not p or not isinstance(p.get('without_helmet'),(int,float))
        if nores: bad+=1; pv=0; pw=0
        else: pv=p['without_helmet']; pw=p.get('with_helmet',0) or 0
        y=r['gt_head']>0; yh=pv>0 or nores   # sin respuesta = se manda a revisión humana
        tp+=y and yh; fn+=y and not yh; fp+=(not y) and yh; tn+=(not y) and (not yh)
        ae_wo.append(abs(pv-r['gt_head'])); ae_w.append(abs(pw-r['gt_helmet']))
        if r.get('lat'): lat.append(r['lat'] + r.get('lat2', 0))
        if r.get('usage'): toks.append(r['usage'].get('total_tokens',0) + (r.get('usage2') or {}).get('total_tokens',0))
    n=len(rows); prec=tp/(tp+fp) if tp+fp else 0; rec=tp/(tp+fn) if tp+fn else 0
    return dict(n=n, acc=(tp+tn)/n, prec=prec, rec=rec, f1=2*prec*rec/(prec+rec) if prec+rec else 0, tp=tp, fp=fp, tn=tn, fn=fn, mae_sin=st.mean(ae_wo), mae_con=st.mean(ae_w), exact_sin=sum(a==0 for a in ae_wo)/n, lat_med=st.median(lat) if lat else None, lat_p90=sorted(lat)[int(.9*len(lat))-1] if lat else None, tok=st.mean(toks) if toks else None, invalid=bad)
if __name__=='__main__':
    for k in sys.argv[1:]:
        s=score(load(k)); print(k, {a:(round(b,3) if isinstance(b,float) else b) for a,b in s.items()})
