(() => {
const S=window.SCENARIO;
const $=s=>document.querySelector(s);
const state={index:0,choices:[],risk:0,strong:0,cautious:0,triggered:new Set(),start:Date.now()};
const startScreen=$('#startScreen'),game=$('#gameScreen'),end=$('#endScreen'),choicePanel=$('#choicePanel'),resultPanel=$('#resultPanel');
$('#appTitle').textContent=S.meta.title; $('#subtitle').textContent=S.meta.subtitle; $('#status').textContent=S.meta.status; $('#building').textContent=S.meta.building;
$('#principles').innerHTML=S.meta.principles.map(x=>`<div class="principle">${x}</div>`).join('');

function esc(x){return String(x??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
const terms=Object.keys(S.glossary).sort((a,b)=>b.length-a.length);
const MEDIA={
  nodes:{
    1:{src:'assets/vggm/verkenning_gevel.jpeg',caption:'Verkenning van rookgedrag aan de gevel',source:'VGGM lesmateriaal – slide 67'},
    2:{src:'assets/vggm/hoogbouw_object.png',caption:'Hoogbouw vraagt om bewust gebruik van gebouwvoorzieningen en verticale logistiek',source:'VGGM lesmateriaal – slide 31'},
    3:{src:'assets/vggm/stijgleiding_afnamepunt.jpg',caption:'Afnamepunt / bluswatervoorziening als onderdeel van de routekeuze',source:'VGGM lesmateriaal – slide 73'},
    4:{src:'assets/vggm/bruggenhoofd_schema.jpg',caption:'Schematische weergave van het bruggenhoofd in hoogbouw',source:'VGGM lesmateriaal – slide 69'},
    5:{src:'assets/vggm/rook_gang.png',caption:'Rookverspreiding in een verkeersruimte: deurmanagement bepaalt mede het verloop',source:'VGGM lesmateriaal – slide 63'},
    6:{src:'assets/vggm/wdf_profiel.png',caption:'Wind Driven Fire: ventilatieprofiel bij een door wind beïnvloede brand',source:'VGGM lesmateriaal – slide 51'},
    7:{src:'assets/vggm/straalpijp.gif',caption:'Koelend vermogen en straalpijptechniek moeten passen bij het brandbeeld',source:'VGGM lesmateriaal – slide 55'},
    8:{src:'assets/vggm/kwadrantenmodel.png',caption:'Tactische positionering en keuze van inzetstrategie',source:'VGGM lesmateriaal – slide 67'},
    9:{src:'assets/vggm/toetreding_deur.jpeg',caption:'Toetreding: reddingsdruk moet worden afgewogen tegen veilige interventievoorwaarden',source:'VGGM lesmateriaal – slide 58'},
    10:{src:'assets/vggm/rook_trappenhuis.png',caption:'Rookverspreiding richting trappenhuis vormt een zelfstandig tactisch probleem',source:'VGGM lesmateriaal – slide 61'},
    11:{src:'assets/vggm/hoogbouw_gevel.jpeg',caption:'Bij hoogbouw kunnen bewonersstromen en ontruiming over veel bouwlagen tegelijk ontstaan',source:'VGGM lesmateriaal – slide 59'},
    12:{src:'assets/vggm/stack_reverse.png',caption:'Stack-effect en reverse stack-effect veranderen verticale lucht- en rookstromen',source:'VGGM lesmateriaal – slide 40'},
    13:{src:'assets/vggm/aandachtskaart_bruggenhoofd.png',caption:'Een vaste informatie- en terugmeldstructuur ondersteunt de inzet op hoogte',source:'VGGM lesmateriaal – slide 23'},
    14:{src:'assets/vggm/hoogbouw_object.png',caption:'Verticale bereikbaarheid is een kritieke voorziening; uitval verandert de inzet direct',source:'VGGM lesmateriaal – slide 31'},
    15:{src:'assets/vggm/logistiek_materiaal.jpeg',caption:'Materiaal, fysieke belasting en aflossing worden op hoogte een zelfstandig proces',source:'VGGM lesmateriaal – slide 74'},
    16:{src:'assets/vggm/rook_deurzone.png',caption:'Rook buiten het oorspronkelijke compartiment is een belangrijk omslagpunt',source:'VGGM lesmateriaal – slide 60'},
    17:{src:'assets/vggm/gevelbrand.jpeg',caption:'Geveluitbreiding kan meerdere bovenliggende bouwlagen tegelijk bedreigen',source:'VGGM lesmateriaal – slide 38'},
    18:{src:'assets/vggm/orientatie_object.jpg',caption:'Heroriëntatie: object, omstandigheden, inzetstrategie en resterende veiligheidsmarges opnieuw beoordelen',source:'VGGM lesmateriaal – slide 76'}
  },
  terms:{
    'Coandă-effect':{src:'assets/vggm/coanda_schema.png',caption:'Schematische weergave van het Coandă-effect',source:'VGGM lesmateriaal – slide 34'},
    'Stack-effect':{src:'assets/vggm/stack_schema.png',caption:'Stack-effect in een hoog gebouw',source:'VGGM lesmateriaal – slide 39'},
    'Reverse stack':{src:'assets/vggm/reverse_stack.jpg',caption:'Gevolgen van reverse stack-effect bij brand',source:'VGGM lesmateriaal – slide 43'},
    'Wind Driven Fire':{src:'assets/vggm/wdf_profiel.png',caption:'Ventilatieprofiel bij Wind Driven Fire',source:'VGGM lesmateriaal – slide 51'},
    'Flowpath':{src:'assets/vggm/flowpath_schema.png',caption:'Wind en openingen kunnen het stromingspad door het compartiment bepalen',source:'VGGM lesmateriaal – slide 53'},
    'Bruggenhoofd':{src:'assets/vggm/bruggenhoofd_schema.jpg',caption:'Doel en positionering van het bruggenhoofd',source:'VGGM lesmateriaal – slide 69'},
    'Transitional attack':{src:'assets/vggm/transitional_attack.png',caption:'Transitional attack vanaf een redvoertuig',source:'VGGM lesmateriaal – slide 56'},
    'Offensief binnen':{src:'assets/vggm/kwadrantenmodel.png',caption:'Kwadrantenmodel als tactisch denkkader',source:'VGGM lesmateriaal – slide 67'},
    'Defensief binnen':{src:'assets/vggm/kwadrantenmodel.png',caption:'Kwadrantenmodel als tactisch denkkader',source:'VGGM lesmateriaal – slide 67'},
    'Smokestopper':{src:'assets/vggm/smokestopper_deur.png',caption:'Deuropening en rookbeheersing',source:'VGGM lesmateriaal – slide 63'}
  },
  systems:{
    'Snelle lijn':{src:'assets/bpbb/snelle_lijn_systeem1.png',caption:'Systeem 1: LD afleggen met snelle lijn',source:'Train de trainer BPBB 2026 – slide 6'},
    'Snelle toevoer':{src:'assets/bpbb/snelle_toevoer_systeem2.png',caption:'Systeem 2: LD afleggen met verdeelstuk / snelle toevoer',source:'Train de trainer BPBB 2026 – slide 7'},
    'Transporttas':{src:'assets/bpbb/transporttas_systeem3.png',caption:'Systeem 3: LD afleggen met verdeelstuk, verlengen met transporttas',source:'Train de trainer BPBB 2026 – slide 8'},
    'Droge stijgleiding binnen':{src:'assets/bpbb/droge_stijgleiding_binnen.png',caption:'Systeem 4 binnen: werken met droge stijgleiding',source:'Train de trainer BPBB 2026 – slide 9'},
    'Verdeelstuk buitenom':{src:'assets/bpbb/verdeelstuk_buitenom_1.png',caption:'Systeem 4 buiten: verdeelstuk buitenom bij galerij/woonflat',source:'Train de trainer BPBB 2026 – slide 10'},
    'O-bundel':{src:'assets/bpbb/o_bundel_detail.png',caption:'O-bundels en oprolsystematiek als onderdeel van LD op hoogte',source:'Train de trainer BPBB 2026'},
    'O-bundel oprollen':{src:'assets/bpbb/bundlewheel.jpeg',caption:'Bundlewheel / oprolsysteem voor O-bundels',source:'Train de trainer BPBB 2026 – slide 13'},
    'Do’s & Don’ts LD/O-bundels':{src:'assets/bpbb/dos_donts.png',caption:'Do’s & Don’ts bij snelle lijn, snelle toevoer en O-bundels',source:'Train de trainer BPBB 2026 – slide 11'},
    'Hoogtetas':{src:'assets/bpbb/droge_stijgleiding_binnen.png',caption:'Inhoud hoogtetas bij werken op hoogte: Y-verdeelstuk, koppelslang, slangophouders, blinddekselsleutels en touw',source:'Train de trainer BPBB 2026 – slide 9/10'},
    'LD op hoogte':{src:'assets/bpbb/droge_stijgleiding_binnen.png',caption:'LD op hoogte via gebouwvoorziening, O-bundels en hoogtetas',source:'Train de trainer BPBB 2026'},
    'Klepel / straalpijp':{src:'assets/bpbb/snelle_lijn_systeem1.png',caption:'Klepelgebruik: tot aan klepel circa 200 l/min, voorbij klepel circa 450 l/min',source:'Train de trainer BPBB 2026 – slide 6/7'}
  }
};

// v9 – media-keuzes uit de gefinetunede begrippenlijst.
Object.assign(MEDIA.terms, {
  'Stack-effect':{src:'assets/custom/stack_reverse_user.png',caption:'Stack-effect en reverse stack-effect – winter/zomer',source:'Aangeleverde afbeelding'},
  'Reverse stack':{src:'assets/custom/stack_reverse_user.png',caption:'Stack-effect en reverse stack-effect – winter/zomer',source:'Aangeleverde afbeelding'},
  'Coandă-effect':{src:'assets/custom/coanda_user.png',caption:'Praktijkbeeld Coandă-effect langs de gevel',source:'Aangeleverde afbeelding'},
  'Wind Driven Fire':{src:'assets/custom/wdf_flowpath_user.png',caption:'Windrichting, brandzone en flowpath',source:'Aangeleverde afbeelding'},
  'Flowpath':{src:'assets/custom/wdf_flowpath_user.png',caption:'Windrichting, openingen en flowpath',source:'Aangeleverde afbeelding'},
  'Wokkeltrappenhuis':{src:'assets/vggm/stijgleiding_afnamepunt.jpg',caption:'Wokkeltrappenhuis / afnamepunt als onderdeel van de routekeuze',source:'Bestaande afbeelding uit de webapp'},
  'Bruggenhoofd':{src:'assets/custom/bruggenhoofd_preview.png',caption:'Aandachtskaart Bruggenhoofd – klik voor vergroting',source:'VGGM aandachtskaart 12003'},
  'Compartimentering':{src:'assets/custom/compartimentering_wbdbo_user.jpeg',caption:'Legenda rook- en brandwerende scheidingen',source:'Aangeleverde afbeelding'},
  'WBDBO':{src:'assets/custom/compartimentering_wbdbo_user.jpeg',caption:'Legenda rook- en brandwerende scheidingen',source:'Aangeleverde afbeelding'},
  'Overdrukinstallatie':{src:'assets/custom/overdruk_user.png',caption:'Schema overdrukinstallatie en luchtstromen',source:'Aangeleverde afbeelding'},
  'Brandweerlift':null,
  'Ontruimingslift':null,
  'Commandoruimte':null,
  'Transitional attack':{src:'assets/custom/transitional_attack_user.webp',caption:'Transitional Attack – externe koeling voorafgaand aan binneninzet',source:'Aangeleverde afbeelding'},
  'Floor-below nozzle':null,
  'Basisprincipes':{src:'assets/custom/basisprincipes_user.png',caption:'Basisprincipes brandbestrijding',source:'Aangeleverde afbeelding'},
  'Branddriehoek':{src:'assets/custom/branddriehoek_user.png',caption:'Branddriehoek: zuurstof, temperatuur en brandstof',source:'Aangeleverde afbeelding'},
  'RSTV': MEDIA.systems?.['RSTV'] || undefined,
  'Kenmerkenschema':{src:'assets/custom/kenmerkenschema_user.png',caption:'Kenmerkenschema',source:'Aangeleverde afbeelding'},
  'Kwadrantenmodel':{src:'assets/custom/kwadrantenmodel_user.jpg',caption:'Kwadrantenmodel – klik voor vergroting',source:'Aangeleverde afbeelding'},
  'CAN':null,
  'FABCM':null,
  'Deurcontrole':{src:'assets/custom/deurcontrole_user.png',caption:'Deurcontrole',source:'Aangeleverde afbeelding'},
  'Anti-ventilatie': MEDIA.systems?.['Anti-ventilatie'] || {src:'assets/vggm/ventilatie_opening.png',caption:'Beheersen van openingen en ventilatie',source:'VGGM lesmateriaal'},
  'Rookgaskoeling': MEDIA.systems?.['Rookgaskoeling'] || {src:'assets/vggm/straalpijp.gif',caption:'Rookgaskoeling / straalpijptechniek',source:'VGGM lesmateriaal'},
  'Laag voortbewegen':{src:'assets/custom/laag_voortbewegen_user.png',caption:'Laag voortbewegen',source:'Aangeleverde afbeelding'},
  'O-bundel':{src:'assets/custom/o_bundel_user.png',caption:'O-bundel',source:'Aangeleverde afbeelding'},
  'Opruimen':null,
  'Smokestopper':{src:'assets/custom/smokestopper_user.png',caption:'Smokestopper in deuropening',source:'Aangeleverde afbeelding'},
  'Snelle lijn':MEDIA.systems['Snelle lijn'],
  'Snelle toevoer':MEDIA.systems['Snelle toevoer'],
  'Snelle aanval':MEDIA.systems['Snelle aanval'],
  'Hoogtetas':MEDIA.systems['Hoogtetas'],
  'Transporttas':MEDIA.systems['Transporttas'],
  'Droge stijgleiding':MEDIA.systems['Droge stijgleiding binnen'],
  'Verdeelstuk buitenom':MEDIA.systems['Verdeelstuk buitenom'],
  'LD op hoogte':MEDIA.systems['LD op hoogte'],
  'Do’s & Don’ts':MEDIA.systems['Do’s & Don’ts LD/O-bundels']
});

// Geen expliciete nieuwe media gekozen voor deze technieken: bestaande/bronafbeelding blijft waar aanwezig.
if (!MEDIA.terms['3D-puls'] && MEDIA.systems?.['3D-puls']) MEDIA.terms['3D-puls']=MEDIA.systems['3D-puls'];
if (!MEDIA.terms['Boogmethode'] && MEDIA.systems?.['Boogmethode']) MEDIA.terms['Boogmethode']=MEDIA.systems['Boogmethode'];
if (!MEDIA.terms['Massieve Aanval'] && MEDIA.systems?.['Massieve Aanval']) MEDIA.terms['Massieve Aanval']=MEDIA.systems['Massieve Aanval'];

function mediaHtml(m, cls='scenarioMedia'){
  if(!m) return '';
  return `<figure class="${cls}"><button class="mediaZoom" type="button" data-img="${esc(m.src)}" data-caption="${esc(m.caption)}" aria-label="Afbeelding vergroten"><img src="${esc(m.src)}" alt="${esc(m.caption)}" loading="lazy"></button><figcaption><span>${esc(m.caption)}</span><small>${esc(m.source||'VGGM lesmateriaal')}</small></figcaption></figure>`;
}
function bindMedia(root=document){root.querySelectorAll('.mediaZoom').forEach(b=>b.addEventListener('click',()=>openModal(`<div class="imageModal"><img src="${b.dataset.img}" alt="${esc(b.dataset.caption)}"><p>${esc(b.dataset.caption)}</p></div>`)));}
function termExtras(g, term, compact=false){
  let h='';
  if(g?.video){h+=`<a class="videoLink" href="${esc(g.video)}" target="_blank" rel="noopener noreferrer">▶ Bekijk uitlegvideo op YouTube</a>`;}
  if(g?.pdf){h+=`<button type="button" class="pdfExpand" data-pdf="${esc(g.pdf)}">Bekijk volledige aandachtskaart</button>`;}
  return h;
}
function bindExtras(root=document){
  root.querySelectorAll('.pdfExpand').forEach(b=>b.addEventListener('click',()=>{
    const pdf=b.dataset.pdf;
    openModal(`<div class="pdfViewer"><h2>Bruggenhoofd – volledige aandachtskaart</h2><div class="pdfPages"><img src="assets/custom/bruggenhoofd_preview.png" alt="Bruggenhoofd aandachtskaart pagina 1"><img src="assets/custom/bruggenhoofd_page2.png" alt="Bruggenhoofd aandachtskaart pagina 2"></div><a class="videoLink" href="${esc(pdf)}" target="_blank" rel="noopener noreferrer">Open PDF in nieuw tabblad</a></div>`);
  }));
}
function linkTerms(text){
 let s=esc(text);
 for(const term of terms){
   const re=new RegExp(`\\b${term.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')}\\b`,'gi');
   s=s.replace(re,m=>`<span class="term" data-term="${esc(term)}">${m}</span>`);
 }
 return s;
}
function paragraphs(text){return String(text||'').split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${linkTerms(p)}</p>`).join('');}

function richSituation(n){
 if(!n.situationDetail) return linkTerms(n.situation);
 const d=n.situationDetail;
 let h='';
 if(d.time) h+=`<div class="scenarioTime">${linkTerms(d.time)}</div>`;
 (d.intro||[]).forEach(x=>h+=`<p>${linkTerms(x)}</p>`);
 if(d.observations?.length) h+=`<ul class="scenarioList">${d.observations.map(x=>`<li>${linkTerms(x)}</li>`).join('')}</ul>`;
 if(d.groups?.length) h+=`<div class="scenarioGroups">${d.groups.map(g=>`<div class="scenarioGroup"><h3>${esc(g.title)}</h3><ul>${(g.items||[]).map(x=>`<li>${linkTerms(x)}</li>`).join('')}</ul></div>`).join('')}</div>`;
 (d.after||[]).forEach(x=>h+=`<p>${linkTerms(x)}</p>`);
 if(d.prompt) h+=`<div class="scenarioPrompt">${linkTerms(d.prompt)}</div>`;
 h+=mediaHtml(n.media||MEDIA.nodes[n.id]);
 return h;
}
function consequenceHtml(c){
 if(!c.consequenceDetail) return linkTerms(c.consequence);
 const d=c.consequenceDetail; let h='';
 if(d.time) h+=`<div class="scenarioTime">${linkTerms(d.time)}</div>`;
 (d.paragraphs||[]).forEach((x,i)=>{h+=`<p>${linkTerms(x)}</p>`; if(i===0 && d.bullets?.length) h+=`<ul class="scenarioList">${d.bullets.map(v=>`<li>${linkTerms(v)}</li>`).join('')}</ul>`;});
 if(!(d.paragraphs||[]).length && d.bullets?.length) h+=`<ul class="scenarioList">${d.bullets.map(v=>`<li>${linkTerms(v)}</li>`).join('')}</ul>`;
 return h;
}
function detailedDebrief(c){
 const d=c.debrief; if(!d) return paragraphs(c.deepDive||c.rationale);
 let h='';
 (d.sections||[]).forEach(sec=>{h+=`<section class="debriefSection"><h3>${esc(sec.title)}</h3>`;(sec.paragraphs||[]).forEach(x=>h+=`<p>${linkTerms(x)}</p>`);if(sec.bullets?.length)h+=`<ul>${sec.bullets.map(x=>`<li>${linkTerms(x)}</li>`).join('')}</ul>`;h+='</section>';});
 if(d.assessment){h+=`<section class="assessmentBox"><div class="small">BEOORDELING</div><h3>${esc(d.assessment)}</h3>`;if(d.strengths?.length)h+=`<div class="assessmentCols"><div><strong>Sterk</strong><ul>${d.strengths.map(x=>`<li>${linkTerms(x)}</li>`).join('')}</ul></div>${d.risks?.length?`<div><strong>Kwetsbaar / aandachtspunt</strong><ul>${d.risks.map(x=>`<li>${linkTerms(x)}</li>`).join('')}</ul></div>`:''}</div>`;h+='</section>';}
 if(d.stateEffects?.length)h+=`<section class="stateBox"><strong>Gevolgen die de casus onthoudt</strong><div class="stateChips">${d.stateEffects.map(x=>`<span>${linkTerms(x)}</span>`).join('')}</div></section>`;
 if(d.closing)h+=`<div class="roleBox">${linkTerms(d.closing)}</div>`;
 return h;
}

function bindTerms(root=document){root.querySelectorAll('.term').forEach(el=>el.addEventListener('click',()=>showTerm(el.dataset.term))); bindMedia(root); bindExtras(root);}
function openModal(html){$('#modalContent').innerHTML=html; $('#modal').classList.remove('hidden'); bindTerms($('#modalContent')); bindSystems($('#modalContent'));}
function showTerm(term){const g=S.glossary[term]; if(!g)return; const m=MEDIA.terms[term]; openModal(`<div class="termHeader"><div><div class="small">BEGRIP</div><h2>${esc(term)}</h2></div></div>${mediaHtml(m,'termMedia')}<p>${esc(g.definition)}</p><div class="operational"><strong>Operationeel in deze casus</strong><br>${esc(g.operational)}</div>${termExtras(g,term)}`);}
function showGlossary(){let h='<h2>Begrippen</h2><p class="small">Klik tijdens de casus op onderstreepte begrippen om deze uitleg direct te openen.</p>'; for(const [t,g] of Object.entries(S.glossary)){h+=`<div class="glossItem"><h3>${esc(t)}</h3>${mediaHtml(MEDIA.terms[t],'glossMedia')}<div>${esc(g.definition)}</div><div class="operational"><strong>Operationeel:</strong> ${esc(g.operational)}</div>${termExtras(g,t,true)}</div>`;} openModal(h);}

function showSources(){
 const items=(S.meta.sources||[
   'VGGM – Brandbestrijding hoogbouw (lesmateriaal 2020/2021)',
   'Concept Handboek Brandbestrijding Hoogbouw VGGM 2026',
   'Scenario / Stroomschema Hoogbouw VGGM 2026',
   'Brandweer Rotterdam-Rijnmond – Handboek Incidentbestrijding Hoogbouw (2024)',
   'BPBB – Train de trainer 2026: LD en watertransport op hoogte',
   'Aangeleverde oefenplattegrond Arnhem Building, 7e verdieping'
 ]);
 openModal(`<h2>Bronnen en onderleggers</h2><p>Deze webcasus is een didactische toepassing. Regionale procedures, objectdetails en fictieve injects moeten vóór formele inzet worden gevalideerd.</p><ul>${items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="sourceFrame"><strong>Status</strong><p>${esc(S.meta.sourceNote||'Concept – niet vastgesteld beleid.')}</p></div>`);
}

$('#glossaryBtn').addEventListener('click',showGlossary); if($('#sourcesBtn'))$('#sourcesBtn').addEventListener('click',showSources); $('#modalClose').addEventListener('click',()=>$('#modal').classList.add('hidden')); $('#modal').addEventListener('click',e=>{if(e.target.id==='modal')$('#modal').classList.add('hidden')});


function systemPanelHtml(n){
 if(!n.systems?.length || !S.systemDefinitions) return '';
 return `<section class="systemsPanel"><div class="systemsHead"><div><div class="small">VGGM / BPBB-LAAG</div><strong>Systemen die hier meespelen</strong></div><span class="systemsHint">klik voor uitleg</span></div><div class="systemChips">${n.systems.map(k=>`<button type="button" class="systemChip" data-system="${esc(k)}">${esc(k)}</button>`).join('')}</div></section>`;
}
function showSystem(key){const d=S.systemDefinitions?.[key];if(!d)return;const m=MEDIA.systems?.[key]||MEDIA.terms?.[key];openModal(`<div class="small">VGGM / BPBB-SYSTEEM</div><h2>${esc(d.title||key)}</h2>${mediaHtml(m,'termMedia')}<p>${linkTerms(d.text||'')}</p><div class="sourceNote"><strong>Positie in deze casus:</strong> dit is de VGGM/BPBB-didactische laag. De uitgebreide hoogbouwduiding in de nabespreking blijft afzonderlijk gebaseerd op het aangeleverde VRR-handboek.</div>`);}
function bindSystems(root=document){root.querySelectorAll('.systemChip').forEach(b=>b.addEventListener('click',()=>showSystem(b.dataset.system)));}
function renderNode(){
 const n=S.nodes[state.index];
 $('#progressText').textContent=`Keuzemoment ${n.id} van ${S.nodes.length}`; $('#progressBar').style.width=`${(n.id-1)/S.nodes.length*100}%`;
 $('#roleBadge').textContent=n.role; $('#roleNote').textContent=n.roleNote;
 $('#incidentTime').textContent=`INCIDENT • beslismoment ${n.id}`; $('#nodeTitle').textContent=n.title;
 $('#situation').innerHTML=richSituation(n)+systemPanelHtml(n); bindTerms($('#situation')); bindSystems($('#situation'));
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
function deepDiveHtml(n,c){
 const alternatives=n.choices.filter(x=>x.id!==c.id).map(x=>`<div class="compareItem"><strong>Keuze ${x.id}</strong><div>${linkTerms(x.text)}</div><div class="small compareWhy">${linkTerms(x.rationale)}</div></div>`).join('');
 return `<div class="deepDive">
   <div class="small">VERDIEPENDE NABESPREKING • KEUZEMOMENT ${n.id}</div>
   <h2>${esc(n.title)}</h2>
   ${mediaHtml(n.media||MEDIA.nodes[n.id],'debriefMedia')}${systemPanelHtml(n)}<div class="sourceFrame"><strong>VRR-bronkader</strong>${paragraphs(n.sourceFrame||'')}</div>
   <h3>Jouw keuze ${c.id}</h3>
   <p><strong>${linkTerms(c.text)}</strong></p>
   <div class="deepText">${detailedDebrief(c)}</div>
   <div class="roleBox"><strong>Rol in deze casus</strong><br>${esc(n.roleNote)}</div>
   ${c.debrief?'':`<h3>Vergelijking met de andere opties</h3><div class="compareGrid">${alternatives}</div>`}
   <div class="sourceNote"><strong>Brongebruik:</strong> ${esc(S.meta.sourceNote||'De inhoudelijke duiding is gebaseerd op de aangeleverde hoogbouwbronnen. VRICOL wordt alleen gebruikt als didactisch vergelijkingsmodel en niet als vastgestelde VGGM-inzetprocedure.')}</div>
 </div>`;
}
function choose(n,c){
 const code=choiceCode(n,c); state.choices.push({node:n.id,title:n.title,choice:c.id,text:c.text,consequence:c.consequence,rationale:c.rationale,deepDive:c.deepDive,sourceFrame:n.sourceFrame,label:c.label,quality:c.quality,role:n.role,roleNote:n.roleNote,code});
 if(c.quality>0)state.strong+=1; if(c.quality<0)state.risk+=Math.abs(c.quality);
 const low=(c.rationale+' '+c.text).toLowerCase(); if(low.includes('te traag')||low.includes('tijd +2')||low.includes('voorzichtig')||low.includes('uitgesteld'))state.cautious+=1;
 const delayed=delayedRules();
 choicePanel.classList.add('hidden'); resultPanel.classList.remove('hidden');
 let d=delayed.map(x=>`<div class="delayed"><strong>Later gevolg van eerdere keuzes</strong><br>${linkTerms(x)}</div>`).join('');
 resultPanel.innerHTML=`<div class="resultCard">
   <div class="small">GEVOLG VAN JE KEUZE</div><h3>${esc(n.title)}</h3>
   <div class="consequence">${consequenceHtml(c)}</div>${d}
   <div class="feedbackActions">
     <button class="feedbackToggle" id="whyBtn">Korte duiding</button>
     <button class="deepDiveBtn" id="deepBtn">Verdiepende uitleg nu bekijken</button>
   </div>
   <div id="feedback" class="feedback hidden"><div class="label">${esc(c.label)}</div><p>${linkTerms(c.rationale)}</p>${n.role==='Manschappen'?'<p class="small"><strong>Rolafspraak:</strong> binnen mag je zelf beslissen zolang het veilig en verantwoord is; deel en toets relevante afwijkingen/waarnemingen met de bevelvoerder.</p>':''}</div>
   <p class="small afterHint">De volledige brongebaseerde uitwerking van dit keuzemoment komt ook terug in de nabespreking na afloop.</p>
   <div class="nextRow"><button class="secondary" id="nextBtn">${state.index===S.nodes.length-1?'Naar nabespreking':'Verder met de inzet'}</button></div>
 </div>`;
 bindTerms(resultPanel);
 $('#whyBtn').addEventListener('click',()=>$('#feedback').classList.toggle('hidden'));
 $('#deepBtn').addEventListener('click',()=>openModal(deepDiveHtml(n,c)));
 $('#nextBtn').addEventListener('click',next);
 resultPanel.scrollIntoView({behavior:'smooth',block:'start'});
}
function next(){if(state.index<S.nodes.length-1){state.index++;renderNode()}else finish()}
function outcome(){
 if(S.nodes.length===16){
   if(state.risk>=10) return {key:'C',title:'Inzet loopt operationeel vast',text:'Een combinatie van keuzes heeft geleid tot onvoldoende water, bedreigde rookvrije routes of onvoldoende capaciteit voor redding en ontruiming.'};
   if(state.risk>=5) return {key:'B',title:'Beheerst na kwetsbare momenten',text:'De inzet kende duidelijke kwetsbare momenten, maar bleef door heroverweging en aanvullende maatregelen herstelbaar.'};
   return {key:'A',title:'Beheerst',text:'Water, redding, rookbeheersing en opschaling bleven voldoende in balans. Gebruik de nabespreking om de alternatieve keuzes te vergelijken.'};
 }
 const severe=has('14B') || ((has('17B')||has('17C'))&&(state.risk>=5||state.cautious>=3)) || state.risk>=13;
 if(severe) return {key:'C',title:'Ernstige operationele verslechtering',text:'Een combinatie van keuzes heeft geleid tot bedreigde vluchtwegen, vastlopende inzet, verlies van voorzieningen of te late ontruiming. In deze simulatie kunnen bewoners en/of een brandweerploeg in de problemen komen.'};
 if(state.cautious>=5 && state.risk<9) return {key:'D',title:'Te conservatief / gemiste kans',text:'Veel keuzes waren op zichzelf veilig, maar de inzet verloor structureel tijd. De brand ontwikkelde door terwijl beschikbare voorzieningen en veilige aanvalskansen onvoldoende werden benut.'};
 if(state.risk>=6 || state.triggered.size>=2) return {key:'B',title:'Herstel na verslechtering',text:'De inzet is onderweg verslechterd, maar door latere keuzes en heroverweging bleef herstel mogelijk. De nabespreking richt zich vooral op het herkennen en corrigeren van de keten.'};
 return {key:'A',title:'Beheerst',text:'De inzet bleef organisatorisch en tactisch voldoende beheerst. Vluchtwegbescherming, inzetvoorwaarden en heroverweging bleven in balans.'};
}
function themeReviews(){
 const groups=S.meta.themeGroups||(
   S.nodes.length===16
   ? {'Beeldvorming':[1,2,12],'Tactiek & redding':[3,11,13],'Bluswater':[5,6,7,8],'Rookbeheersing':[9,10],'Ontruiming & opschaling':[4,14,15,16]}
   : {'Beeldvorming':[1,8,12,18], 'Vluchtwegen':[3,5,10,11,16,17], 'Bluswater & aanval':[7,9], 'Liftgebruik':[2,14], 'Communicatie':[6,13], 'Logistiek':[4,15]}
 );
 return Object.entries(groups).map(([name,ids])=>{const arr=state.choices.filter(c=>ids.includes(c.node)); const q=arr.reduce((a,c)=>a+c.quality,0); const txt=q>=2?'Sterk in deze inzet':q>=0?'Overwegend beheerst':q>=-2?'Aandachtspunt':'Duidelijk verbeterpunt'; return {name,txt};});
}
function historyItem(c){
 const n=S.nodes.find(x=>x.id===c.node); const choice=n.choices.find(x=>x.id===c.choice);
 return `<details class="historyItem"><summary><span>Keuzemoment ${c.node} – ${esc(c.title)}</span><span class="historyChoice">keuze ${c.choice}</span></summary>
   <div class="historyBody">
     <p><strong>Jouw besluit:</strong> ${linkTerms(c.text)}</p>
     <p><strong>Operationeel gevolg:</strong> ${linkTerms(c.consequence)}</p>
     <div class="compactDuiding"><strong>Korte duiding:</strong> ${linkTerms(c.rationale)}</div>
     <div class="fullDebrief"><h4>Uitgebreide VRR-duiding</h4><div class="sourceFrame">${paragraphs(c.sourceFrame||'')}</div>${detailedDebrief(choice)}<div class="roleBox"><strong>Rol:</strong> ${esc(c.role)} — ${esc(c.roleNote)}</div></div>
     <button class="reviewModalBtn" data-node="${c.node}" data-choice="${c.choice}">Open volledige vergelijking A/B/C</button>
   </div>
 </details>`;
}
function finish(){
 game.classList.add('hidden'); end.classList.remove('hidden'); const o=outcome();
 const reviews=themeReviews().map(r=>`<div class="reviewItem"><strong>${esc(r.name)}</strong><div>${esc(r.txt)}</div></div>`).join('');
 const hist=state.choices.map(historyItem).join('');
 const triggers=state.triggered.size?`<div class="outcome"><strong>Vertraagde/combinatiegevolgen:</strong> ${state.triggered.size}. Deze ontstonden pas door combinaties van keuzes en worden hieronder bij de gemaakte beslissingen zichtbaar.</div>`:'';
 end.innerHTML=`<div class="card endCard"><span class="status">UITKOMST ${o.key}</span><h2>${esc(o.title)}</h2><p class="lead">${esc(o.text)}</p>${triggers}
 <h3>Nabespreking per thema</h3><div class="reviewGrid">${reviews}</div>
 <div class="note"><strong>Didactische vergelijking:</strong> VRICOL helpt hier terugkijken of Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek voldoende aandacht kregen. Het is in deze casus geen VGGM-inzetprocedure.</div>
 <h3>Volledige nabespreking van je beslissingen</h3><p>Open een keuzemoment om de uitgebreide brongebaseerde uitleg terug te lezen. Via de knop onder ieder moment kun je jouw keuze ook rechtstreeks vergelijken met de twee alternatieven.</p>
 <div class="history">${hist}</div><div class="nextRow"><button class="primary" id="restartBtn">Casus opnieuw spelen</button></div></div>`;
 bindTerms(end);
 end.querySelectorAll('.reviewModalBtn').forEach(btn=>btn.addEventListener('click',()=>{const n=S.nodes.find(x=>x.id===Number(btn.dataset.node)); const c=n.choices.find(x=>x.id===btn.dataset.choice); openModal(deepDiveHtml(n,c));}));
 $('#restartBtn').addEventListener('click',()=>location.reload()); window.scrollTo({top:0,behavior:'smooth'});
}
$('#startBtn').addEventListener('click',()=>{startScreen.classList.add('hidden');game.classList.remove('hidden');renderNode();});
})();
