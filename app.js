(() => {
const S=window.SCENARIO;
const $=s=>document.querySelector(s);
const state={index:0,choices:[],risk:0,strong:0,cautious:0,triggered:new Set(),start:Date.now()};
const startScreen=$('#startScreen'),game=$('#gameScreen'),end=$('#endScreen'),choicePanel=$('#choicePanel'),resultPanel=$('#resultPanel');
$('#appTitle').textContent=S.meta.title; $('#subtitle').textContent=S.meta.subtitle; $('#status').textContent=S.meta.status; $('#building').textContent=S.meta.building;
$('#principles').innerHTML=S.meta.principles.map(x=>`<div class="principle">${x}</div>`).join('');

function esc(x){return String(x).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
const terms=Object.keys(S.glossary).sort((a,b)=>b.length-a.length);
function linkTerms(text){
 let s=esc(text);
 for(const term of terms){
   const re=new RegExp(`\\b${term.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')}\\b`,'gi');
   s=s.replace(re,m=>`<span class="term" data-term="${esc(term)}">${m}</span>`);
 }
 return s;
}
function bindTerms(root=document){root.querySelectorAll('.term').forEach(el=>el.addEventListener('click',()=>showTerm(el.dataset.term)));}
function showTerm(term){const g=S.glossary[term]; if(!g)return; $('#modalContent').innerHTML=`<h2>${esc(term)}</h2><p>${esc(g.definition)}</p><div class="operational"><strong>Operationeel in deze casus</strong><br>${esc(g.operational)}</div>`; $('#modal').classList.remove('hidden');}
function showGlossary(){let h='<h2>Begrippen</h2><p class="small">Klik tijdens de casus op onderstreepte begrippen om deze uitleg direct te openen.</p>'; for(const [t,g] of Object.entries(S.glossary)){h+=`<div class="glossItem"><h3>${esc(t)}</h3><div>${esc(g.definition)}</div><div class="operational"><strong>Operationeel:</strong> ${esc(g.operational)}</div></div>`;} $('#modalContent').innerHTML=h; $('#modal').classList.remove('hidden');}
$('#glossaryBtn').addEventListener('click',showGlossary); $('#modalClose').addEventListener('click',()=>$('#modal').classList.add('hidden')); $('#modal').addEventListener('click',e=>{if(e.target.id==='modal')$('#modal').classList.add('hidden')});

function renderNode(){
 const n=S.nodes[state.index];
 $('#progressText').textContent=`Keuzemoment ${n.id} van ${S.nodes.length}`; $('#progressBar').style.width=`${(n.id-1)/S.nodes.length*100}%`;
 $('#roleBadge').textContent=n.role; $('#roleNote').textContent=n.roleNote;
 $('#incidentTime').textContent=`INCIDENT • beslismoment ${n.id}`; $('#nodeTitle').textContent=n.title;
 $('#situation').innerHTML=linkTerms(n.situation); bindTerms($('#situation'));
 choicePanel.innerHTML=''; resultPanel.classList.add('hidden'); resultPanel.innerHTML='';
 n.choices.forEach(c=>{const b=document.createElement('button'); b.className='choiceBtn'; b.innerHTML=`<span class="choiceKey">${c.id}</span><span class="choiceText">${linkTerms(c.text)}</span>`; b.addEventListener('click',()=>choose(n,c)); choicePanel.appendChild(b); bindTerms(b);});
 choicePanel.classList.remove('hidden'); window.scrollTo({top:0,behavior:'smooth'});
}
function choiceCode(n,c){return `${n.id}${c.id}`}
function has(code){return state.choices.some(x=>x.code===code)}
function delayedRules(){
 const out=[];
 for(let i=0;i<S.combinationRules.length;i++){
   if(state.triggered.has(i))continue; const r=S.combinationRules[i]; let ok=true;
   if(r.if) ok=r.if.every(has);
   if(r.ifAny) ok=r.ifAny.some(has) && (!r.and || has(r.and));
   if(r.requiresDelay) ok=ok && (state.risk>=5 || state.cautious>=3 || state.index>=16);
   if(ok){state.triggered.add(i);out.push(r.text);state.risk+=1;}
 }
 return out;
}
function choose(n,c){
 const code=choiceCode(n,c); state.choices.push({node:n.id,title:n.title,choice:c.id,text:c.text,consequence:c.consequence,rationale:c.rationale,label:c.label,quality:c.quality,code});
 if(c.quality>0)state.strong+=1; if(c.quality<0)state.risk+=Math.abs(c.quality);
 const low=(c.rationale+' '+c.text).toLowerCase(); if(low.includes('te traag')||low.includes('tijd +2')||low.includes('voorzichtig')||low.includes('uitgesteld'))state.cautious+=1;
 const delayed=delayedRules();
 choicePanel.classList.add('hidden'); resultPanel.classList.remove('hidden');
 let d=delayed.map(x=>`<div class="delayed"><strong>Later gevolg van eerdere keuzes</strong><br>${linkTerms(x)}</div>`).join('');
 resultPanel.innerHTML=`<div class="resultCard"><div class="small">GEVOLG VAN JE KEUZE</div><h3>${esc(n.title)}</h3><div class="consequence">${linkTerms(c.consequence)}</div>${d}<button class="feedbackToggle" id="whyBtn">Waarom deze keuze zo uitpakt</button><div id="feedback" class="feedback hidden"><div class="label">${esc(c.label)}</div><p>${linkTerms(c.rationale)}</p>${n.role==='Manschappen'?'<p class="small"><strong>Rolafspraak:</strong> binnen mag je zelf beslissen zolang het veilig en verantwoord is; deel en toets relevante afwijkingen/waarnemingen met de bevelvoerder.</p>':''}</div><div class="nextRow"><button class="secondary" id="nextBtn">${state.index===S.nodes.length-1?'Naar nabespreking':'Verder met de inzet'}</button></div></div>`;
 bindTerms(resultPanel); $('#whyBtn').addEventListener('click',()=>$('#feedback').classList.toggle('hidden')); $('#nextBtn').addEventListener('click',next);
 resultPanel.scrollIntoView({behavior:'smooth',block:'start'});
}
function next(){if(state.index<S.nodes.length-1){state.index++;renderNode()}else finish()}
function outcome(){
 const robust=S.robustChain.filter(has).length;
 const severe=has('14B') || ((has('17B')||has('17C'))&&(state.risk>=5||state.cautious>=3)) || state.risk>=13;
 if(severe) return {key:'C',title:'Ernstige operationele verslechtering',text:'Een combinatie van keuzes heeft geleid tot bedreigde vluchtwegen, vastlopende inzet, verlies van voorzieningen of te late ontruiming. In deze simulatie kunnen bewoners en/of een brandweerploeg in de problemen komen.'};
 if(state.cautious>=5 && state.risk<9) return {key:'D',title:'Te conservatief / gemiste kans',text:'Veel keuzes waren op zichzelf veilig, maar de inzet verloor structureel tijd. De brand ontwikkelde door terwijl beschikbare voorzieningen en veilige aanvalskansen onvoldoende werden benut.'};
 if(state.risk>=6 || state.triggered.size>=2) return {key:'B',title:'Herstel na verslechtering',text:'De inzet is onderweg verslechterd, maar door latere keuzes en heroverweging bleef herstel mogelijk. De nabespreking richt zich vooral op het herkennen en corrigeren van de keten.'};
 return {key:'A',title:'Beheerst',text:'De inzet bleef organisatorisch en tactisch voldoende beheerst. Vluchtwegbescherming, inzetvoorwaarden en heroverweging bleven in balans.'};
}
function themeReviews(){
 const groups={
  'Beeldvorming':[1,8,12,18], 'Vluchtwegen':[3,5,10,11,16,17], 'Bluswater & aanval':[7,9], 'Liftgebruik':[2,14], 'Communicatie':[6,13], 'Logistiek':[4,15]
 };
 return Object.entries(groups).map(([name,ids])=>{const arr=state.choices.filter(c=>ids.includes(c.node)); const q=arr.reduce((a,c)=>a+c.quality,0); const txt=q>=2?'Sterk in deze inzet':q>=0?'Overwegend beheerst':q>=-2?'Aandachtspunt':'Duidelijk verbeterpunt'; return {name,txt};});
}
function finish(){
 game.classList.add('hidden'); end.classList.remove('hidden'); $('#progressBar').style.width='100%'; const o=outcome();
 const reviews=themeReviews().map(r=>`<div class="reviewItem"><strong>${esc(r.name)}</strong><div>${esc(r.txt)}</div></div>`).join('');
 const hist=state.choices.map(c=>`<details class="historyItem"><summary>Keuzemoment ${c.node} – ${esc(c.title)} • keuze ${c.choice}</summary><p><strong>Besluit:</strong> ${linkTerms(c.text)}</p><p><strong>Gevolg:</strong> ${linkTerms(c.consequence)}</p><p><strong>Duiding:</strong> ${linkTerms(c.rationale)}</p></details>`).join('');
 const triggers=state.triggered.size?`<div class="outcome"><strong>Vertraagde/combinatiegevolgen:</strong> ${state.triggered.size}. Deze ontstonden pas door combinaties van keuzes.</div>`:'';
 end.innerHTML=`<div class="card endCard"><span class="status">UITKOMST ${o.key}</span><h2>${esc(o.title)}</h2><p class="lead">${esc(o.text)}</p>${triggers}<h3>Nabespreking per thema</h3><div class="reviewGrid">${reviews}</div><div class="note"><strong>Didactische vergelijking:</strong> gebruik VRICOL hier uitsluitend om terug te kijken of Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek voldoende aandacht kregen. Het is in deze casus geen VGGM-inzetprocedure.</div><h3>Je beslissingen terugkijken</h3><div class="history">${hist}</div><div class="nextRow"><button class="primary" id="restartBtn">Casus opnieuw spelen</button></div></div>`;
 bindTerms(end); $('#restartBtn').addEventListener('click',()=>location.reload()); window.scrollTo({top:0,behavior:'smooth'});
}
$('#startBtn').addEventListener('click',()=>{startScreen.classList.add('hidden');game.classList.remove('hidden');renderNode();});
})();
