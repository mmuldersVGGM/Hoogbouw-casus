(() => {
const S=window.SCENARIO;
const $=s=>document.querySelector(s);
const state={index:0,choices:[]};
const startScreen=$('#startScreen'),game=$('#gameScreen'),end=$('#endScreen'),choicePanel=$('#choicePanel'),resultPanel=$('#resultPanel');
$('#appTitle').textContent=S.meta.title; $('#subtitle').textContent=S.meta.subtitle; $('#status').textContent=S.meta.status; $('#building').textContent=S.meta.building;
$('#principles').innerHTML=S.meta.principles.map(x=>`<div class="principle">${esc(x)}</div>`).join('');

function esc(x){return String(x??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function paras(t){return String(t||'').split(/\n\s*\n/).filter(Boolean).map(x=>`<p>${linkTerms(x)}</p>`).join('')}
const terms=Object.keys(S.glossary||{}).sort((a,b)=>b.length-a.length);
const MEDIA={
  terms:{
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
    'Kenmerkenschema':{src:'assets/custom/kenmerkenschema_user.png',caption:'Kenmerkenschema',source:'Aangeleverde afbeelding'},
    'Kwadrantenmodel':{src:'assets/custom/kwadrantenmodel_user.jpg',caption:'Kwadrantenmodel – klik voor vergroting',source:'Aangeleverde afbeelding'},
    'CAN':null,
    'FABCM':null,
    'Deurcontrole':{src:'assets/custom/deurcontrole_user.png',caption:'Deurcontrole',source:'Aangeleverde afbeelding'},
    'Anti-ventilatie':{src:'assets/vggm/ventilatie_opening.png',caption:'Beheersen van openingen en ventilatie',source:'VGGM lesmateriaal'},
    'Rookgaskoeling':{src:'assets/vggm/straalpijp.gif',caption:'Rookgaskoeling / straalpijptechniek',source:'VGGM lesmateriaal'},
    'Laag voortbewegen':{src:'assets/custom/laag_voortbewegen_user.png',caption:'Laag voortbewegen',source:'Aangeleverde afbeelding'},
    'O-bundel':{src:'assets/custom/o_bundel_user.png',caption:'O-bundel',source:'Aangeleverde afbeelding'},
    'Opruimen':null,
    'Smokestopper':{src:'assets/custom/smokestopper_user.png',caption:'Smokestopper in deuropening',source:'Aangeleverde afbeelding'},
    'Offensief binnen':{src:'assets/custom/kwadrantenmodel_user.jpg',caption:'Kwadrantenmodel als tactisch denkkader',source:'Aangeleverde afbeelding'},
    'Defensief binnen':{src:'assets/custom/kwadrantenmodel_user.jpg',caption:'Kwadrantenmodel als tactisch denkkader',source:'Aangeleverde afbeelding'},
    'Snelle lijn':{src:'assets/bpbb/snelle_lijn_systeem1.png',caption:'Systeem 1: LD afleggen met snelle lijn',source:'Train de trainer BPBB 2026 – slide 6'},
    'Snelle toevoer':{src:'assets/bpbb/snelle_toevoer_systeem2.png',caption:'Systeem 2: LD afleggen met verdeelstuk / snelle toevoer',source:'Train de trainer BPBB 2026 – slide 7'},
    'Hoogtetas':{src:'assets/bpbb/droge_stijgleiding_binnen.png',caption:'Inhoud hoogtetas bij werken op hoogte',source:'Train de trainer BPBB 2026 – slide 9/10'},
    'Transporttas':{src:'assets/bpbb/transporttas_systeem3.png',caption:'Systeem 3: transporttas / transportslang',source:'Train de trainer BPBB 2026 – slide 8'},
    'Droge stijgleiding':{src:'assets/bpbb/droge_stijgleiding_binnen.png',caption:'Werken met droge stijgleiding',source:'Train de trainer BPBB 2026 – slide 9'},
    'Verdeelstuk buitenom':{src:'assets/bpbb/verdeelstuk_buitenom_1.png',caption:'Verdeelstuk buitenom',source:'Train de trainer BPBB 2026 – slide 10'},
    'LD op hoogte':{src:'assets/bpbb/droge_stijgleiding_binnen.png',caption:'LD op hoogte via gebouwvoorziening en hoogtetas',source:'Train de trainer BPBB 2026'},
    'Do’s & Don’ts':{src:'assets/bpbb/dos_donts.png',caption:'Do’s & Don’ts bij LD/O-bundels',source:'Train de trainer BPBB 2026 – slide 11'}
  },
  systems:{
    'Snelle lijn':{src:'assets/bpbb/snelle_lijn_systeem1.png',caption:'Systeem 1: LD afleggen met snelle lijn',source:'Train de trainer BPBB 2026 – slide 6'},
    'Snelle toevoer':{src:'assets/bpbb/snelle_toevoer_systeem2.png',caption:'Systeem 2: LD afleggen met verdeelstuk / snelle toevoer',source:'Train de trainer BPBB 2026 – slide 7'},
    'Transporttas':{src:'assets/bpbb/transporttas_systeem3.png',caption:'Systeem 3: LD afleggen met transporttas',source:'Train de trainer BPBB 2026 – slide 8'},
    'Droge stijgleiding binnen':{src:'assets/bpbb/droge_stijgleiding_binnen.png',caption:'Werken met droge stijgleiding',source:'Train de trainer BPBB 2026 – slide 9'},
    'Verdeelstuk buitenom':{src:'assets/bpbb/verdeelstuk_buitenom_1.png',caption:'Verdeelstuk buitenom',source:'Train de trainer BPBB 2026 – slide 10'},
    'O-bundel':{src:'assets/bpbb/o_bundel_detail.png',caption:'O-bundel',source:'Train de trainer BPBB 2026'},
    'Hoogtetas':{src:'assets/bpbb/droge_stijgleiding_binnen.png',caption:'Hoogtetas',source:'Train de trainer BPBB 2026'},
    'LD op hoogte':{src:'assets/bpbb/droge_stijgleiding_binnen.png',caption:'LD op hoogte',source:'Train de trainer BPBB 2026'},
    'Klepel / straalpijp':{src:'assets/bpbb/snelle_lijn_systeem1.png',caption:'Klepel / straalpijp',source:'Train de trainer BPBB 2026'}
  }
};

function mediaFigure(m, cls='termMedia'){
 if(!m) return '';
 return `<figure class="${cls}"><button class="mediaZoom" type="button" data-img="${esc(m.src)}" data-caption="${esc(m.caption)}" aria-label="Afbeelding vergroten"><img src="${esc(m.src)}" alt="${esc(m.caption)}" loading="lazy"></button><figcaption><span>${esc(m.caption)}</span><small>${esc(m.source||'VGGM lesmateriaal')}</small></figcaption></figure>`;
}
function termExtras(g){let h='';if(g?.video)h+=`<a class="videoLink" href="${esc(g.video)}" target="_blank" rel="noopener noreferrer">▶ Bekijk uitlegvideo op YouTube</a>`;if(g?.pdf)h+=`<button type="button" class="pdfExpand" data-pdf="${esc(g.pdf)}">Bekijk volledige aandachtskaart</button>`;return h;}
function bindMedia(root=document){root.querySelectorAll('.mediaZoom').forEach(b=>b.addEventListener('click',()=>openModal(`<div class="imageModal"><img src="${b.dataset.img}" alt="${esc(b.dataset.caption)}"><p>${esc(b.dataset.caption)}</p></div>`)));}
function bindExtras(root=document){root.querySelectorAll('.pdfExpand').forEach(b=>b.addEventListener('click',()=>{const pdf=b.dataset.pdf;openModal(`<div class="pdfViewer"><h2>Bruggenhoofd – volledige aandachtskaart</h2><div class="pdfPages"><img src="assets/custom/bruggenhoofd_preview.png" alt="Bruggenhoofd aandachtskaart pagina 1"><img src="assets/custom/bruggenhoofd_page2.png" alt="Bruggenhoofd aandachtskaart pagina 2"></div><a class="videoLink" href="${esc(pdf)}" target="_blank" rel="noopener noreferrer">Open PDF in nieuw tabblad</a></div>`)}));}
function linkTerms(text){let s=esc(text); for(const term of terms){const re=new RegExp(`\b${term.replace(/[.*+?^${}()|[\]\\]/g,'\$&')}\b`,'gi');s=s.replace(re,m=>`<span class="term" data-term="${esc(term)}">${m}</span>`);}return s;}
function openModal(html){$('#modalContent').innerHTML=html;$('#modal').classList.remove('hidden');bindTerms($('#modalContent'));bindSystems($('#modalContent'));bindMedia($('#modalContent'));bindExtras($('#modalContent'));}
function showTerm(term){const g=S.glossary?.[term];if(!g)return;openModal(`<div class="termHeader"><div class="small">BEGRIP</div><h2>${esc(term)}</h2></div>${mediaFigure(MEDIA.terms[term],'termMedia')}<p>${esc(g.definition)}</p><div class="operational"><strong>Operationeel in deze casus</strong><br>${esc(g.operational)}</div>${termExtras(g)}`)}
function showGlossary(){let h='<h2>Begrippen</h2><p class="small">Klik tijdens de casus op onderstreepte begrippen om deze uitleg direct te openen.</p>';for(const [k,v] of Object.entries(S.glossary||{}))h+=`<div class="glossItem"><h3>${esc(k)}</h3>${mediaFigure(MEDIA.terms[k],'glossMedia')}<div>${esc(v.definition)}</div><div class="operational"><strong>Operationeel:</strong> ${esc(v.operational)}</div>${termExtras(v)}</div>`;openModal(h)}
function showSources(){openModal(`<h2>Bronnen en status</h2><p>Deze webcasus is een didactische oefentoepassing en geen vastgesteld inzetprotocol.</p><ul><li>VGGM – Brandbestrijding hoogbouw (lesmateriaal)</li><li>Concept Handboek Brandbestrijding Hoogbouw VGGM 2026</li><li>Scenario / Stroomschema Hoogbouw VGGM 2026</li><li>Handboek Incidentbestrijding Hoogbouw, Brandweer Rotterdam-Rijnmond (2024)</li><li>BPBB Train-de-trainer 2026 – LD en watertransport op hoogte</li></ul><div class="sourceNote">${esc(S.meta.sourceNote)}</div>`)}
function showScenarios(){const g=S.meta.scenarioGuide;if(!g)return;let h=`<div class="small">DENKKADER</div><h2>${esc(g.title)}</h2><p>${esc(g.intro)}</p>`;for(const i of g.items)h+=`<section class="guideItem"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></section>`;h+=`<div class="roleBox"><strong>Belangrijk:</strong> het scenario is geen vast label. Nieuwe informatie kan betekenen dat het incident opnieuw moet worden geclassificeerd en dat prioriteiten, opdrachten en capaciteit moeten veranderen.</div>`;openModal(h)}
function bindTerms(root=document){root.querySelectorAll('.term').forEach(el=>el.addEventListener('click',()=>showTerm(el.dataset.term)))}
function systemPanel(n){if(!n.systems?.length)return '';return `<section class="systemsPanel"><div class="systemsHead"><strong>VGGM / BPBB-systemen die hier meespelen</strong><span class="systemsHint">klik voor uitleg</span></div><div class="systemChips">${n.systems.map(k=>`<button class="systemChip" data-system="${esc(k)}">${esc(k)}</button>`).join('')}</div></section>`}
function bindSystems(root=document){root.querySelectorAll('.systemChip').forEach(b=>b.addEventListener('click',()=>{const t=S.systemDefinitions?.[b.dataset.system];const text=typeof t==='string'?t:(t?.text||'Geen aanvullende uitleg beschikbaar.');openModal(`<div class="small">VGGM / BPBB</div><h2>${esc(b.dataset.system)}</h2>${mediaFigure(MEDIA.systems[b.dataset.system]||MEDIA.terms[b.dataset.system],'termMedia')}<p>${linkTerms(text)}</p>`)}))}
function mediaHtml(n){if(!n.media)return '';return `${mediaFigure(n.media,'scenarioMedia')}${(n.mediaGallery||[]).map(m=>mediaFigure(m,'scenarioMedia')).join('')}`}
function renderNode(){const n=S.nodes[state.index];$('#progressText').textContent=`Keuzemoment ${n.id} van ${S.nodes.length}`;$('#progressBar').style.width=`${((n.id-1)/S.nodes.length)*100}%`;$('#roleBadge').textContent=n.role;$('#roleNote').textContent=n.roleNote;$('#incidentTime').textContent=`INCIDENT • beslismoment ${n.id}`;$('#nodeTitle').textContent=n.title;let extra=(S.meta.scenarioGuide&&[8,16,17].includes(n.id))?'<button class="scenarioGuideInline" id="scenarioInline">Bekijk scenario-uitleg</button>':'';$('#situation').innerHTML=paras(n.situation)+extra+mediaHtml(n)+systemPanel(n);bindTerms($('#situation'));bindSystems($('#situation'));if($('#scenarioInline'))$('#scenarioInline').addEventListener('click',showScenarios);choicePanel.innerHTML='';resultPanel.classList.add('hidden');n.choices.forEach(c=>{const b=document.createElement('button');b.className='choiceBtn';b.innerHTML=`<span class="choiceKey">${c.id}</span><span>${linkTerms(c.text)}</span>`;b.addEventListener('click',()=>choose(n,c));choicePanel.appendChild(b);bindTerms(b)});choicePanel.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'})}
function deepDive(n,c){const alt=n.choices.filter(x=>x.id!==c.id).map(x=>`<div class="compareItem"><strong>Keuze ${x.id}</strong><p>${linkTerms(x.text)}</p><div class="small">${linkTerms(x.rationale)}</div></div>`).join('');return `<div class="deepDive"><div class="small">VERDIEPENDE NABESPREKING • KEUZEMOMENT ${n.id}</div><h2>${esc(n.title)}</h2>${n.deepDive?`<div class="deepText">${paras(n.deepDive)}</div>`:''}<h3>Jouw keuze ${c.id}</h3><p><strong>${linkTerms(c.text)}</strong></p><p>${linkTerms(c.deepDive||c.rationale)}</p>${n.discussionQuestion?`<div class="discussionQuestion"><strong>Bespreekvraag</strong><p>${linkTerms(n.discussionQuestion)}</p></div>`:''}<h3>Andere opties</h3><div class="compareGrid">${alt}</div><div class="sourceNote">${esc(S.meta.sourceNote)}</div></div>`}
function choose(n,c){state.choices.push({node:n.id,choice:c.id});choicePanel.classList.add('hidden');resultPanel.classList.remove('hidden');resultPanel.innerHTML=`<div class="resultCard"><div class="small">GEVOLG VAN JE KEUZE</div><h3>${esc(n.title)}</h3><div class="consequence">${linkTerms(c.consequence)}</div><div class="feedbackActions"><button class="feedbackToggle" id="whyBtn">Korte duiding</button><button class="deepDiveBtn" id="deepBtn">Verdiepende uitleg</button></div><div id="feedback" class="feedback hidden"><p>${linkTerms(c.rationale)}</p></div><div class="nextRow"><button class="secondary" id="nextBtn">${state.index===S.nodes.length-1?'Naar einddebrief':'Verder met de inzet'}</button></div></div>`;bindTerms(resultPanel);$('#whyBtn').addEventListener('click',()=>$('#feedback').classList.toggle('hidden'));$('#deepBtn').addEventListener('click',()=>openModal(deepDive(n,c)));$('#nextBtn').addEventListener('click',()=>{if(state.index<S.nodes.length-1){state.index++;renderNode()}else finish()});resultPanel.scrollIntoView({behavior:'smooth',block:'start'})}
function finish(){game.classList.add('hidden');end.classList.remove('hidden');let sections=(S.debriefSections||[]).map(s=>`<section class="debriefTheme"><h3>${esc(s.title)}</h3><p class="debriefQ">${esc(s.question)}</p><ul>${(s.points||[]).map(x=>`<li>${linkTerms(x)}</li>`).join('')}</ul></section>`).join('');let hist=state.choices.map(ch=>{const n=S.nodes.find(x=>x.id===ch.node),c=n.choices.find(x=>x.id===ch.choice);return `<details class="historyItem"><summary>Keuzemoment ${n.id} – ${esc(n.title)} <span>keuze ${c.id}</span></summary><div class="historyBody"><p><strong>Jouw besluit:</strong> ${linkTerms(c.text)}</p><p><strong>Operationeel gevolg:</strong> ${linkTerms(c.consequence)}</p><p><strong>Duiding:</strong> ${linkTerms(c.rationale)}</p>${n.discussionQuestion?`<div class="discussionQuestion"><strong>Bespreekvraag</strong><p>${linkTerms(n.discussionQuestion)}</p></div>`:''}</div></details>`}).join('');let close=(S.closingQuestions||[]).map(q=>`<p class="closingQuestion">${esc(q)}</p>`).join('');end.innerHTML=`<div class="card endCard"><span class="status">EINDDEBRIEF</span><h2>Terugkijken op de totale inzet</h2><p class="lead">Geen score en geen goed/fout-eindoordeel. Gebruik de vragen hieronder om te beoordelen hoe je beeldvorming, tactiek en organisatie zich tijdens de inzet hebben ontwikkeld.</p>${S.meta.scenarioGuide?'<button class="scenarioGuideInline" id="scenarioEnd">Bekijk scenario-uitleg</button>':''}<div class="debriefGrid">${sections}</div><section class="closingBlock"><h3>Als je deze inzet opnieuw zou doen</h3>${close}</section><h3>Jouw beslissingen</h3><div class="history">${hist}</div><div class="nextRow"><button class="primary" id="restartBtn">Casus opnieuw spelen</button></div></div>`;bindTerms(end);if($('#scenarioEnd'))$('#scenarioEnd').addEventListener('click',showScenarios);$('#restartBtn').addEventListener('click',()=>location.reload());window.scrollTo({top:0,behavior:'smooth'})}
$('#glossaryBtn').addEventListener('click',showGlossary);$('#sourcesBtn').addEventListener('click',showSources);if($('#scenarioBtn'))$('#scenarioBtn').addEventListener('click',showScenarios);$('#modalClose').addEventListener('click',()=>$('#modal').classList.add('hidden'));$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')$('#modal').classList.add('hidden')});$('#startBtn').addEventListener('click',()=>{startScreen.classList.add('hidden');game.classList.remove('hidden');renderNode()});
})();
