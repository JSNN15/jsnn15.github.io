const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for (const u of ['','consulta-electrica/','supervisor/','inspector/','lector/','normativa/','vigia/','vigia/app.html#sala','vigia/app.html#vivo','monitor-correas/','selector-fruta/','planta-virtual/','ia-epp/','centinela-correas/','planta-virtual/test/sim.test.js']) {
 const p=await b.newPage({viewport:{width:1280,height:800}}); const bad=new Set();
 p.on('response',r=>{if(r.status()>=400)bad.add(r.status()+' '+r.url().replace('https://jsnn15.github.io/',''))});
 p.on('pageerror',e=>bad.add('PE '+String(e.message).slice(0,80)));
 try{await p.goto('https://jsnn15.github.io/'+u,{waitUntil:'networkidle',timeout:45000});}catch(e){bad.add('TIMEOUT')}
 await p.waitForTimeout(4000); await p.evaluate(()=>window.scrollTo(0,document.body.scrollHeight)); await p.waitForTimeout(2500);
 console.log((u||'/'), bad.size? [...bad].slice(0,6).join(' ; ') : 'OK'); await p.close(); }
await b.close();})();
