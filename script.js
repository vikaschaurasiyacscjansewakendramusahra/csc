const OFFICIAL = {
  csc:'https://www.csc.gov.in/', aadhaar:'https://myaadhaar.uidai.gov.in/', ayushman:'https://pmjay.gov.in/', abha:'https://abha.abdm.gov.in/', jeevan:'https://jeevanpramaan.gov.in/',
  pension:'https://nsap.nic.in/', rto:'https://parivahan.gov.in/', challan:'https://echallan.parivahan.gov.in/', fastag:'https://www.npci.org.in/what-we-do/netc-fastag/product-overview',
  edistrict:'https://esathi.up.gov.in/', ration:'https://fcs.up.gov.in/', bhulekh:'https://upbhulekh.gov.in/bhulekh/', bhunaksha:'https://upbhunaksha.gov.in/', marriage:'https://www.igrsup.gov.in/igrsup/defaultAction.action', police:'https://uppolice.gov.in/', udid:'https://www.swavlambancard.gov.in/',
  gst:'https://www.gst.gov.in/', itr:'https://www.incometax.gov.in/iec/foportal/', fssai:'https://foscos.fssai.gov.in/', udyam:'https://udyamregistration.gov.in/', dsc:'https://cca.gov.in/',
  nsp:'https://scholarships.gov.in/', abc:'https://www.abc.gov.in/', results:'https://www.digilocker.gov.in/', irctc:'https://www.irctc.co.in/', bus:'https://www.redbus.in/', flight:'https://www.airindia.com/', passport:'https://www.passportindia.gov.in/',
  pmkisan:'https://pmkisan.gov.in/', kcc:'https://www.jansamarth.in/', epfo:'https://www.epfindia.gov.in/', recharge:'https://www.bharatbillpay.com/', eshram:'https://eshram.gov.in/', lpg:'https://www.pmuy.gov.in/',
  digilocker:'https://www.digilocker.gov.in/', esign:'https://cca.gov.in/', nps:'https://www.npscra.nsdl.co.in/', apy:'https://www.npscra.nsdl.co.in/', gem:'https://gem.gov.in/', telelaw:'https://www.tele-law.in/', insurance:'https://www.irdai.gov.in/',
  vishwakarma:'https://pmvishwakarma.gov.in/', skill:'https://www.skillindia.gov.in/', myscheme:'https://www.myscheme.gov.in/', sim:'https://www.airtel.in/', cyber:'https://www.csc.gov.in/'
};

const DEFAULT_SERVICES = [
 {icon:'🏦',title:'बैंकिंग एवं आधार सेवाएँ',desc:'दैनिक डिजिटल और नागरिक सेवाएँ एक ही जगह।',portals:[['CSC Official Portal',OFFICIAL.csc],['myAadhaar',OFFICIAL.aadhaar]],items:[['AEPS बैंकिंग – जमा / निकासी',OFFICIAL.csc],['बैलेंस, मिनी स्टेटमेंट',OFFICIAL.csc],['वृद्धावस्था / विधवा / दिव्यांग पेंशन',OFFICIAL.pension],['जीवन प्रमाण पत्र (Jeevan Pramaan)',OFFICIAL.jeevan],['आधार में पता अपडेट',OFFICIAL.aadhaar],['आयुष्मान कार्ड – नया / पात्रता जाँच',OFFICIAL.ayushman],['ABHA Health ID',OFFICIAL.abha]]},
 {icon:'🚗',title:'RTO / वाहन सेवाएँ',desc:'ड्राइविंग लाइसेंस और वाहन संबंधी सेवाएँ।',portals:[['Parivahan',OFFICIAL.rto],['e-Challan',OFFICIAL.challan]],items:[['ड्राइविंग लाइसेंस – नया / रिन्यू / डुप्लीकेट',OFFICIAL.rto],['वाहन ट्रांसफर, परमिट, फिटनेस',OFFICIAL.rto],['HSRP नंबर प्लेट – बुकिंग + ट्रैकिंग',OFFICIAL.rto],['फैंसी नंबर प्लेट (पसंदीदा नंबर)',OFFICIAL.rto],['e-Challan भुगतान – ऑनलाइन',OFFICIAL.challan],['वाहन बीमा / FASTag',OFFICIAL.fastag],['जिले: संत कबीर नगर, सिद्धार्थनगर, गोरखपुर, महाराजगंज, बस्ती',OFFICIAL.rto]]},
 {icon:'📜',title:'प्रमाण पत्र एवं सरकारी दस्तावेज',desc:'सरकारी प्रमाण-पत्र और ऑनलाइन दस्तावेजी सेवाएँ।',portals:[['UP e-Sathi / e-District',OFFICIAL.edistrict],['UP Food & Ration',OFFICIAL.ration]],items:[['आय / जाति / निवास / राशन कार्ड',OFFICIAL.edistrict],['खतौनी (प्रमाणित / अभिलेख)',OFFICIAL.bhulekh],['भू-नक्शा / भूमि नक्शा',OFFICIAL.bhunaksha],['विवाह पंजीकरण',OFFICIAL.marriage],['चरित्र प्रमाण पत्र (Police Verification)',OFFICIAL.police],['UDID कार्ड / दिव्यांग प्रमाण पत्र',OFFICIAL.udid],['e-District – सभी प्रमाण पत्र',OFFICIAL.edistrict]]},
 {icon:'📊',title:'टैक्स / व्यवसाय सेवाएँ',desc:'व्यापार, टैक्स और पंजीकरण संबंधी ऑनलाइन काम।',portals:[['GST Portal',OFFICIAL.gst],['Income Tax e-Filing',OFFICIAL.itr],['Udyam Registration',OFFICIAL.udyam]],items:[['GST रजिस्ट्रेशन – नया / संशोधन',OFFICIAL.gst],['GST फाइलिंग – मासिक / वार्षिक',OFFICIAL.gst],['ITR फाइलिंग – सभी आय वर्ग',OFFICIAL.itr],['FSSAI लाइसेंस – नया / रिन्यूअल',OFFICIAL.fssai],['MSME / उद्यम रजिस्ट्रेशन',OFFICIAL.udyam],['DSC / डिजिटल सिग्नेचर',OFFICIAL.dsc]]},
 {icon:'🎓',title:'शिक्षा / छात्र सेवाएँ',desc:'छात्रों और शिक्षा से जुड़ी सुविधाएँ।',portals:[['National Scholarship Portal',OFFICIAL.nsp],['ABC / APAAR',OFFICIAL.abc]],items:[['छात्रवृत्ति आवेदन – राज्य / केंद्र',OFFICIAL.nsp],['ABC ID / APAAR',OFFICIAL.abc],['बोर्ड / यूनिवर्सिटी रिजल्ट',OFFICIAL.digilocker],['कॉलेज प्रवेश फॉर्म',OFFICIAL.nsp]]},
 {icon:'✈️',title:'यात्रा / टिकटिंग सेवाएँ',desc:'रेल, बस, फ्लाइट और पासपोर्ट सेवाएँ।',portals:[['IRCTC',OFFICIAL.irctc],['Passport Seva',OFFICIAL.passport]],items:[['रेलवे टिकट – PNR स्टेटस',OFFICIAL.irctc],['बस टिकट (रीजनल / इंटरस्टेट)',OFFICIAL.bus],['फ्लाइट टिकट (Domestic / International)',OFFICIAL.flight],['पासपोर्ट सेवाएँ – PSK / ऑनलाइन',OFFICIAL.passport]]},
 {icon:'🌾',title:'कृषि व किसान सेवाएँ',desc:'किसानों के लिए डिजिटल सहायता।',portals:[['PM-KISAN',OFFICIAL.pmkisan],['Jan Samarth',OFFICIAL.kcc]],items:[['किसान पंजीकरण',OFFICIAL.pmkisan],['PM-Kisan स्थिति / सुधार',OFFICIAL.pmkisan],['कृषि सहायता / मुद्रा प्रशिक्षण',OFFICIAL.myscheme],['KCC लोन आवेदन',OFFICIAL.kcc],['MPACS समिति सेवाएँ',OFFICIAL.myscheme]]},
 {icon:'🧰',title:'अन्य आवश्यक सेवाएँ',desc:'रोजमर्रा की कई ऑनलाइन सुविधाएँ।',portals:[['CSC Official Portal',OFFICIAL.csc],['e-Shram',OFFICIAL.eshram]],items:[['सभी ऑनलाइन फॉर्म',OFFICIAL.csc],['फोटो / फोटो कॉपी / स्कैन / PDF',OFFICIAL.csc],['Resume (CV) बनाना (Excel/Word)',OFFICIAL.csc],['मोबाइल / DTH रिचार्ज',OFFICIAL.recharge],['बिजली बिल भुगतान / नया कनेक्शन',OFFICIAL.myscheme],['ई-श्रम / श्रम कार्ड',OFFICIAL.eshram],['उज्ज्वला – LPG कनेक्शन',OFFICIAL.lpg],['EPFO – UAN / PF Withdrawal',OFFICIAL.epfo],['Airtel / Jio नई SIM',OFFICIAL.sim],['Cyber Cafe सभी सेवाएँ',OFFICIAL.csc],['केंद्र व राज्य की सभी योजनाएँ',OFFICIAL.myscheme]]},
 {icon:'🚀',title:'नई एवं एडवांस सेवाएँ (2026–2027)',desc:'नई डिजिटल सुविधाएँ समय के साथ जोड़ी जा सकती हैं।',portals:[['DigiLocker',OFFICIAL.digilocker],['GeM',OFFICIAL.gem],['myScheme',OFFICIAL.myscheme]],items:[['PAN कार्ड – नया / सुधार — Protean / NSDL', 'https://www.protean-tinpan.com/'],['PAN कार्ड — UTIITSL विकल्प','https://www.utiitsl.com/'],['DigiLocker दस्तावेज सेवाएँ',OFFICIAL.digilocker],['eSign – डिजिटल हस्ताक्षर',OFFICIAL.esign],['NPS / APY पेंशन सेवाएँ',OFFICIAL.nps],['Ayushman 2.0 & Health Services',OFFICIAL.ayushman],['PM Vishwakarma योजना',OFFICIAL.vishwakarma],['Skill India / रोजगार पंजीकरण',OFFICIAL.skill],['GeM Seller Registration सहायता',OFFICIAL.gem],['Tele-Law – कानूनी सहायता',OFFICIAL.telelaw],['Insurance – Life / Health / Motor',OFFICIAL.insurance],['e-Shram 2.0 अपडेट',OFFICIAL.eshram],['CSC के नए G2C / B2C डिजिटल सेवाएँ',OFFICIAL.csc],['आधार आधारित e-KYC व वेरिफिकेशन',OFFICIAL.aadhaar],['ऑनलाइन प्रीपेड / अन्य कोई भी नई डिजिटल सेवा',OFFICIAL.myscheme]]}
];

function normalizeService(s){
  const items=(s.items||[]).map(x=>{ const text=Array.isArray(x)?x[0]:String(x); const raw=Array.isArray(x)?(x[1]||autoOfficialUrl(text)):autoOfficialUrl(text); return {text,url:normalizeFallbackUrl(raw)}; });
  const portals=(s.portals||[['CSC Official Portal',OFFICIAL.csc]]).map(p=>[p[0],normalizeFallbackUrl(p[1])]);
  return {...s,portals,items};
}
let services=DEFAULT_SERVICES.map(normalizeService);
async function loadPublicServices(){
  try{ const r=await fetch('./services.json?v=6',{cache:'no-store'}); if(!r.ok) throw new Error('services.json unavailable'); const data=await r.json(); if(Array.isArray(data)){ services=data.map(normalizeService); renderServices(); renderTicker(); } }catch(e){ console.warn('Public services data could not be loaded; using built-in services.',e); }
}
function loadAdminDraft(){ try{ const raw=localStorage.getItem('vikas_csc_admin_draft'); if(raw){ const data=JSON.parse(raw); if(Array.isArray(data)) return data.map(normalizeService); } }catch(e){} return services; }

function normalizeFallbackUrl(url){
  const u=String(url||'').trim();
  if(!u || u==='https://www.csc.gov.in/' || u==='https://www.csc.gov.in')
    return 'https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe';
  return u;
}
const AUTO_OFFICIAL = [
  [['pan','पैन'], 'https://www.protean-tinpan.com/'],
  [['utiitsl','uti','पैन कार्ड'], 'https://www.utiitsl.com/'],
  [['aadhar','aadhaar','आधार'], OFFICIAL.aadhaar],
  [['ayushman','आयुष्मान'], OFFICIAL.ayushman],
  [['ration','राशन'], OFFICIAL.ration],
  [['income','आय प्रमाण','आय प्रमाण पत्र','income certificate'], OFFICIAL.edistrict],
  [['caste','जाति प्रमाण','caste certificate'], OFFICIAL.edistrict],
  [['domicile','निवास प्रमाण','residence certificate'], OFFICIAL.edistrict],
  [['e-district','edistrict','e district'], OFFICIAL.edistrict],
  [['khatoni','खतौनी','भू-नक्शा','bhulekh'], OFFICIAL.bhulekh],
  [['marriage','विवाह पंजीकरण'], OFFICIAL.marriage],
  [['police','चरित्र प्रमाण','police verification'], OFFICIAL.police],
  [['udid','दिव्यांग'], OFFICIAL.udid],
  [['gst'], OFFICIAL.gst], [['itr','income tax','आयकर'], OFFICIAL.itr],
  [['fssai'], OFFICIAL.fssai], [['udyam','msme'], OFFICIAL.udyam],
  [['scholarship','छात्रवृत्ति'], OFFICIAL.nsp], [['digilocker'], OFFICIAL.digilocker],
  [['irctc','railway','रेलवे'], OFFICIAL.irctc], [['passport','पासपोर्ट'], OFFICIAL.passport],
  [['pm kisan','pm-kisan','किसान'], OFFICIAL.pmkisan], [['kcc'], OFFICIAL.kcc],
  [['epfo','pf withdrawal','uan'], OFFICIAL.epfo], [['e-shram','e shram'], OFFICIAL.eshram],
  [['gem','seller registration'], OFFICIAL.gem], [['tele-law','telelaw'], OFFICIAL.telelaw],
  [['vishwakarma'], OFFICIAL.vishwakarma], [['skill india','रोजगार'], OFFICIAL.skill],
  [['nps'], OFFICIAL.nps], [['apy'], OFFICIAL.apy], [['insurance','बीमा'], OFFICIAL.insurance],
  [['rto','driving licence','driving license','वाहन','dl','परमिट'], OFFICIAL.rto],
  [['challan','e-challan'], OFFICIAL.challan], [['fastag'], OFFICIAL.fastag],
  [['recharge','dth','mobile recharge'], OFFICIAL.recharge], [['lpg','ujjwala'], OFFICIAL.lpg],
  [['csc'], OFFICIAL.csc], [['scheme','योजना'], OFFICIAL.myscheme]
];
function autoOfficialUrl(text){ const t=String(text||'').toLowerCase(); for(const [keys,url] of AUTO_OFFICIAL){ if(keys.some(k=>t.includes(k))) return url; } return OFFICIAL.csc; }

let isAdmin=false;
function escapeHtml(str){return String(str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function safeUrl(url){try{const u=new URL(url);return /^https?:$/.test(u.protocol)?u.href:'#'}catch{return '#'}}
function renderServices(){
 const grid=document.getElementById('serviceGrid'); const q=(document.getElementById('serviceSearch').value||'').toLowerCase().trim();
 const filtered=services.filter(s=>(s.title+' '+s.desc+' '+s.items.map(i=>i.text).join(' ')).toLowerCase().includes(q));
 grid.innerHTML=filtered.map((s,i)=>`<article class="service-card" onclick='openService(${JSON.stringify(s).replace(/'/g,'&#39;')})'><div class="service-icon">${s.icon}</div><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.desc)}</p><ul>${s.items.map(x=>`<li><a href="${safeUrl(x.url)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${escapeHtml(x.text)} ↗</a></li>`).join('')}</ul><div class="more">🔗 हर सेवा पर टच करें • आधिकारिक पोर्टल खुलेगा</div></article>`).join('')||'<div class="service-card"><h3>कोई सेवा नहीं मिली</h3><p>दूसरा शब्द खोजकर देखें।</p></div>';
}
function renderTicker(){const labels=services.map(s=>`${s.icon} ${s.title}`);const doubled=labels.concat(labels);document.getElementById('serviceTicker').innerHTML=doubled.map(x=>`<span class="ticker-chip">${escapeHtml(x)}</span>`).join('')}
function openService(s){
 document.getElementById('modalIcon').textContent=s.icon;document.getElementById('modalTitle').textContent=s.title;document.getElementById('modalDescription').textContent=s.desc;
 document.getElementById('modalPortals').innerHTML=(s.portals||[]).map(p=>`<a class="portal-btn" href="${safeUrl(p[1])}" target="_blank" rel="noopener">${escapeHtml(p[0])} ↗</a>`).join('');
 document.getElementById('modalItems').innerHTML=s.items.map(x=>`<li><a href="${safeUrl(x.url)}" target="_blank" rel="noopener">${escapeHtml(x.text)} ↗</a></li>`).join('');
 document.getElementById('serviceModal').classList.add('show');document.getElementById('serviceModal').setAttribute('aria-hidden','false');
}
function closeModal(){document.getElementById('serviceModal').classList.remove('show');document.getElementById('serviceModal').setAttribute('aria-hidden','true')}
function openAdmin(){document.getElementById('adminModal').classList.add('show');document.getElementById('adminModal').setAttribute('aria-hidden','false')}
function closeAdmin(){document.getElementById('adminModal').classList.remove('show');document.getElementById('adminModal').setAttribute('aria-hidden','true')}
async function adminLogin(){const pass=document.getElementById('adminPass').value;const data=new TextEncoder().encode(pass);const digest=await crypto.subtle.digest('SHA-256',data);const hash=Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,'0')).join('');if(hash==='929dfb98067eccee61b09e7cac9d7c5b473f13f7f5c4b38378b09f9c43f8e4cc'){isAdmin=true;document.getElementById('loginView').classList.add('hidden');document.getElementById('adminView').classList.remove('hidden');document.getElementById('adminPass').value=''}else alert('गलत Admin Password')}
function adminLogout(){isAdmin=false;document.getElementById('loginView').classList.remove('hidden');document.getElementById('adminView').classList.add('hidden');document.getElementById('adminPass').value=''}
function addService(){
 if(!isAdmin)return;
 services=loadAdminDraft();
 const title=document.getElementById('newTitle').value.trim(), icon=document.getElementById('newIcon').value.trim()||'⭐', desc=document.getElementById('newDesc').value.trim()||'नई ऑनलाइन सेवा', customUrl=document.getElementById('newUrl').value.trim();
 const items=document.getElementById('newItems').value.split('\n').map(x=>x.trim()).filter(Boolean).map(x=>({text:x,url:customUrl||autoOfficialUrl(x)}));
 if(!title||!items.length){alert('Title और कम-से-कम एक Service लिखें।');return}
 const portalUrl=customUrl||autoOfficialUrl(title);
 services.push({icon,title,desc,portals:[[title+' — Official Portal',portalUrl]],items});
 localStorage.setItem('vikas_csc_admin_draft',JSON.stringify(services));
 ['newTitle','newDesc','newItems','newUrl'].forEach(id=>document.getElementById(id).value='');
 renderServices();renderTicker();alert('नई Service जोड़ दी गई। Public site के लिए Services Data export करें।');
}
function exportPublicServices(){
 if(!isAdmin)return;
 services=loadAdminDraft();
 const blob=new Blob([JSON.stringify(services,null,2)],{type:'application/json'});
 const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='services.json'; a.click(); URL.revokeObjectURL(a.href);
 alert('services.json तैयार है। इसे GitHub repository में index.html के साथ upload/replace करें।');
}

function resetServices(){if(confirm('क्या आप सभी custom services हटाकर default services वापस लाना चाहते हैं?')){services=DEFAULT_SERVICES.map(normalizeService);localStorage.removeItem('vikas_csc_admin_draft');renderServices();renderTicker()}}

function toggleAIHelp(){
  const p=document.getElementById('aiHelpPanel'), b=document.querySelector('.ai-float');
  const show=!p.classList.contains('show');
  p.classList.toggle('show',show); p.setAttribute('aria-hidden',String(!show)); b.setAttribute('aria-expanded',String(show));
}

function askSiteAI(){
  const input=document.getElementById('aiQuestion'), answer=document.getElementById('aiAnswer');
  const q=(input.value||'').trim();
  if(!q){answer.textContent='कृपया अपना सवाल लिखें।';input.focus();return;}
  const prompt=`Vikas Chaurasiya CSC Jan Sewa Kendra, Musahra के लिए इस ग्राहक के सवाल का सरल हिंदी में उत्तर दें। उपलब्ध हो तो संबंधित official website भी बताएं। ग्राहक का सवाल: ${q}`;
  const geminiUrl='https://gemini.google.com/app?q='+encodeURIComponent(prompt);
  const direct=document.getElementById('geminiDirectLink');
  if(direct) direct.href=geminiUrl;
  window.open(geminiUrl,'_blank','noopener');
  answer.innerHTML='<b>Gemini खोला जा रहा है…</b><br>आपका सवाल Gemini में भेज दिया गया है।';
}


function aiQuick(topic){
  const msg=`Vikas CSC Jan Sewa Kendra, Musahra में ${topic} के बारे में जानकारी चाहिए। उपलब्ध सेवा, जरूरी दस्तावेज और official portal बताइए।`;
  const panel=document.getElementById('aiHelpPanel');
  const p=panel.querySelector('p');
  p.textContent=`आपने “${topic}” चुना है। नीचे Gemini में यही सवाल पूछ सकते हैं: ${msg}`;
  const a=panel.querySelector('.ai-gemini');
  a.href='https://gemini.google.com/app?q='+encodeURIComponent(msg);
}

function generateUPI(){const id='7355353841@okbizaxis',name=(document.getElementById('upiName').value||'Vikas CSC Jan Sewa Kendra').trim(),box=document.getElementById('qrcode'),link=document.getElementById('upiLink'),err=document.getElementById('upiError');const upiUrl=`upi://pay?pa=${encodeURIComponent(id)}&pn=${encodeURIComponent(name)}&cu=INR`;document.getElementById('upiId').value=id;err.textContent='';box.innerHTML='';if(window.QRCode){new QRCode(box,{text:upiUrl,width:220,height:220,colorDark:'#111',colorLight:'#fff'});}else{box.innerHTML='<span>QR library load नहीं हुई। Internet चालू करके फिर try करें।</span>'}link.href=upiUrl;link.classList.remove('hidden')}
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'})}
document.getElementById('year').textContent=new Date().getFullYear();renderServices();renderTicker();loadPublicServices();window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeAdmin()}});document.getElementById('serviceModal').addEventListener('click',e=>{if(e.target.id==='serviceModal')closeModal()});document.getElementById('adminModal').addEventListener('click',e=>{if(e.target.id==='adminModal')closeAdmin()});

let serviceAutoTimer=null;
function startServiceAutoScroll(){
  const grid=document.getElementById('serviceGrid'); if(!grid) return;
  if(serviceAutoTimer) clearInterval(serviceAutoTimer);
  serviceAutoTimer=setInterval(()=>{
    if(document.hidden || grid.matches(':hover')) return;
    const max=grid.scrollWidth-grid.clientWidth;
    if(max<=0) return;
    const step=grid.querySelector('.service-card')?.getBoundingClientRect().width||320;
    const next=grid.scrollLeft+Math.max(1,Math.round(step*0.035));
    if(next>=max-2) grid.scrollTo({left:0,behavior:'auto'}); else grid.scrollLeft=next;
  },80);
  grid.addEventListener('mouseenter',()=>grid.classList.add('auto-scrolling'));
  grid.addEventListener('mouseleave',()=>grid.classList.remove('auto-scrolling'));
}
window.addEventListener('load',startServiceAutoScroll);
const _renderServicesOriginal=renderServices;
renderServices=function(){_renderServicesOriginal();startServiceAutoScroll();};
