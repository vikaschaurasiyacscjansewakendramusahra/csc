const OFFICIAL = {"csc":"https://www.csc.gov.in/","aadhaar":"https://myaadhaar.uidai.gov.in/","ayushman":"https://pmjay.gov.in/","abha":"https://abha.abdm.gov.in/","jeevan":"https://jeevanpramaan.gov.in/","pension":"https://nsap.nic.in/","rto":"https://parivahan.gov.in/","challan":"https://echallan.parivahan.gov.in/","fastag":"https://www.npci.org.in/what-we-do/netc-fastag/product-overview","edistrict":"https://esathi.up.gov.in/","ration":"https://fcs.up.gov.in/","bhulekh":"https://upbhulekh.gov.in/bhulekh/","bhunaksha":"https://upbhunaksha.gov.in/","marriage":"https://www.igrsup.gov.in/igrsup/defaultAction.action","police":"https://uppolice.gov.in/","udid":"https://www.swavlambancard.gov.in/","gst":"https://www.gst.gov.in/","itr":"https://www.incometax.gov.in/iec/foportal/","fssai":"https://foscos.fssai.gov.in/","udyam":"https://udyamregistration.gov.in/","dsc":"https://cca.gov.in/","nsp":"https://scholarships.gov.in/","abc":"https://www.abc.gov.in/","digilocker":"https://www.digilocker.gov.in/","irctc":"https://www.irctc.co.in/","bus":"https://www.redbus.in/","flight":"https://www.airindia.com/","passport":"https://www.passportindia.gov.in/","pmkisan":"https://pmkisan.gov.in/","kcc":"https://www.jansamarth.in/","epfo":"https://www.epfindia.gov.in/","recharge":"https://www.bharatbillpay.com/","eshram":"https://eshram.gov.in/","lpg":"https://www.pmuy.gov.in/","esign":"https://cca.gov.in/","nps":"https://www.npscra.nsdl.co.in/","gem":"https://gem.gov.in/","telelaw":"https://www.tele-law.in/","insurance":"https://www.irdai.gov.in/","vishwakarma":"https://pmvishwakarma.gov.in/","skill":"https://www.skillindia.gov.in/","myscheme":"https://www.myscheme.gov.in/","sim":"https://www.airtel.in/","voter":"https://voters.eci.gov.in/","uppcl":"https://consumer.uppcl.org/wss/home","birthdeath":"https://services.india.gov.in/service/detail/civil-registration-system-birth-and-death-certificate","ncs":"https://www.ncs.gov.in/","esic":"https://www.esic.gov.in/","maandhan":"https://maandhan.in/","india":"https://www.india.gov.in/"};
const DEFAULT_SERVICES = [{"icon":"🏦","title":"बैंकिंग एवं आधार सेवाएँ","desc":"दैनिक डिजिटल और नागरिक सेवाएँ एक ही जगह।","portals":[["CSC Official Portal","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["myAadhaar","https://myaadhaar.uidai.gov.in/"]],"items":[["AEPS बैंकिंग – जमा / निकासी","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["बैलेंस, मिनी स्टेटमेंट","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["वृद्धावस्था / विधवा / दिव्यांग पेंशन","https://sspy-up.gov.in/HindiPages/index_h.aspx"],["जीवन प्रमाण पत्र (Jeevan Pramaan)","https://jeevanpramaan.gov.in/"],["आधार में पता अपडेट","https://myaadhaar.uidai.gov.in/"],["आयुष्मान कार्ड – नया / पात्रता जाँच","https://beneficiary.nha.gov.in/"],["ABHA Health ID","https://abha.abdm.gov.in/"],["NPCI","https://www.npci.org.in/"]]},{"icon":"🚗","title":"RTO / वाहन सेवाएँ","desc":"ड्राइविंग लाइसेंस और वाहन संबंधी सेवाएँ।","portals":[["Parivahan","https://parivahan.gov.in/"],["e-Challan","https://echallan.parivahan.gov.in/"]],"items":[["ड्राइविंग लाइसेंस – नया / रिन्यू / डुप्लीकेट","https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do"],["वाहन ट्रांसफर, परमिट, फिटनेस","https://vahan.parivahan.gov.in/vahanservice/vahan/ui/statevalidation/homepage.xhtml"],["HSRP नंबर प्लेट – बुकिंग + ट्रैकिंग","https://bookmyhsrp.com/"],["फैंसी नंबर प्लेट (पसंदीदा नंबर)","https://fancy.parivahan.gov.in/fancy/faces/public/login.xhtml"],["e-Challan भुगतान – ऑनलाइन","https://echallan.parivahan.gov.in/"],["वाहन बीमा / FASTag","https://www.netc.org.in/"],["जिले: संत कबीर नगर, सिद्धार्थनगर, गोरखपुर, महाराजगंज, बस्ती","https://parivahan.gov.in/"]]},{"icon":"📜","title":"प्रमाण पत्र एवं सरकारी दस्तावेज","desc":"सरकारी प्रमाण-पत्र और ऑनलाइन दस्तावेजी सेवाएँ।","portals":[["UP e-Sathi / e-District","https://esathi.up.gov.in/"],["UP Food & Ration","https://fcs.up.gov.in/"]],"items":[["आय / जाति / निवास / राशन कार्ड","https://esathi.up.gov.in/"],["खतौनी (प्रमाणित / अभिलेख)","https://upbhulekh.gov.in/"],["भू-नक्शा / भूमि नक्शा","https://upbhunaksha.gov.in/"],["विवाह पंजीकरण","https://www.igrsup.gov.in/igrsup/defaultAction.action"],["चरित्र प्रमाण पत्र (Police Verification)","https://uppolice.gov.in/"],["UDID कार्ड / दिव्यांग प्रमाण पत्र","https://www.swavlambancard.gov.in/"],["e-District – सभी प्रमाण पत्र","https://esathi.up.gov.in/"],["निर्वाचन वोटर कार्ड","https://voters.eci.gov.in/"],["शादी अनुदान यूपी","https://shadianudan.upsdc.gov.in/"],["जनसुनवाई समाधान पोर्टल","https://jansunwai.up.nic.in/#smooth-scroll-top"],["PAN कार्ड – नया / सुधार — Protean / NSDL","https://www.protean-tinpan.com/"],["PAN कार्ड — UTIITSL विकल्प","https://www.utiitsl.com/"],["DigiLocker दस्तावेज सेवाएँ","https://www.digilocker.gov.in/"],["Ayushman 2.0 & Health Services","https://pmjay.gov.in/"]]},{"icon":"📊","title":"टैक्स / व्यवसाय सेवाएँ","desc":"व्यापार, टैक्स और पंजीकरण संबंधी ऑनलाइन काम।","portals":[["GST Portal","https://www.gst.gov.in/"],["Income Tax e-Filing","https://www.incometax.gov.in/iec/foportal/"],["Udyam Registration","https://udyamregistration.gov.in/"]],"items":[["GST रजिस्ट्रेशन – नया / संशोधन","https://www.gst.gov.in/"],["GST फाइलिंग – मासिक / वार्षिक","https://www.gst.gov.in/"],["ITR फाइलिंग – सभी आय वर्ग","https://www.incometax.gov.in/iec/foportal/"],["FSSAI लाइसेंस – नया / रिन्यूअल","https://foscos.fssai.gov.in/"],["MSME / उद्यम रजिस्ट्रेशन","https://udyamregistration.gov.in/"],["DSC / डिजिटल सिग्नेचर","https://cca.gov.in/"]]},{"icon":"🎓","title":"शिक्षा / छात्र सेवाएँ","desc":"छात्रों और शिक्षा से जुड़ी सुविधाएँ।","portals":[["National Scholarship Portal","https://scholarships.gov.in/"],["ABC / APAAR","https://www.abc.gov.in/"]],"items":[["छात्रवृत्ति आवेदन – राज्य / केंद्र","https://scholarships.gov.in/"],["ABC ID / APAAR","https://www.abc.gov.in/"],["बोर्ड / यूनिवर्सिटी रिजल्ट","https://erp.suksn.in/SUK_Result_Portal.aspx"],["कॉलेज प्रवेश फॉर्म","https://scholarships.gov.in/"],["उत्तर प्रदेश छात्रवृत्ति (UP Scholarship)","https://scholarship.up.gov.in/"],["NIELIT Sevices","https://student.nielit.gov.in/"],["माध्यमिक शिक्षा परिषद उत्तर प्रदेश","https://results.upmsp.edu.in/"]]},{"icon":"✈️","title":"यात्रा / टिकटिंग सेवाएँ","desc":"रेल, बस, फ्लाइट और पासपोर्ट सेवाएँ।","portals":[["IRCTC","https://www.irctc.co.in/"],["Passport Seva","https://www.passportindia.gov.in/"]],"items":[["रेलवे टिकट – PNR स्टेटस","https://www.irctc.co.in/"],["बस टिकट (रीजनल / इंटरस्टेट)","https://www.redbus.in/"],["फ्लाइट टिकट (Domestic / International)","https://www.air.irctc.co.in/"],["पासपोर्ट सेवाएँ – PSK / ऑनलाइन","https://www.passportindia.gov.in/"]]},{"icon":"🌾","title":"कृषि व किसान सेवाएँ","desc":"किसानों के लिए डिजिटल सहायता।","portals":[["PM-KISAN","https://pmkisan.gov.in/"],["Jan Samarth","https://www.jansamarth.in/"]],"items":[["किसान पंजीकरण","https://pmkisan.gov.in/"],["PM-Kisan स्थिति / सुधार","https://pmkisan.gov.in/"],["कृषि सहायता / मुद्रा प्रशिक्षण","https://www.myscheme.gov.in/"],["KCC लोन आवेदन","https://www.jansamarth.in/"],["MPACS समिति सेवाएँ","https://pacsmember.in/"]]},{"icon":"🧰","title":"अन्य आवश्यक सेवाएँ","desc":"रोजमर्रा की कई ऑनलाइन सुविधाएँ।","portals":[["CSC Official Portal","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["e-Shram","https://eshram.gov.in/"]],"items":[["सभी ऑनलाइन फॉर्म","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["फोटो / फोटो कॉपी / स्कैन / PDF","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["Resume (CV) बनाना (Excel/Word)","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["मोबाइल / DTH रिचार्ज","https://www.bharatbillpay.com/"],["बिजली बिल भुगतान / नया कनेक्शन","https://consumer.uppcl.org/wss/pay_bill_home"],["ई-श्रम / श्रम कार्ड","https://eshram.gov.in/"],["उज्ज्वला – LPG कनेक्शन","https://www.pmuy.gov.in/"],["EPFO – UAN / PF Withdrawal","https://www.epfindia.gov.in/"],["Airtel / Jio नई SIM","https://www.airtel.in/"],["Cyber Cafe सभी सेवाएँ","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["केंद्र व राज्य की सभी योजनाएँ","https://www.myscheme.gov.in/"],["UPPCL बिजली बिल भुगतान / नया कनेक्शन / शिकायत","https://consumer.uppcl.org/wss/pay_bill_home"],["लेबर कार्ड (श्रमिक कार्ड) BOCW","https://website.upbocw.in/"]]},{"icon":"🚀","title":"नई एवं एडवांस सेवाएँ (2026–2027)","desc":"नई डिजिटल सुविधाएँ समय के साथ जोड़ी जा सकती हैं।","portals":[["DigiLocker","https://www.digilocker.gov.in/"],["GeM","https://gem.gov.in/"],["myScheme","https://www.myscheme.gov.in/"]],"items":[["eSign – डिजिटल हस्ताक्षर","https://cca.gov.in/"],["NPS / APY पेंशन सेवाएँ","https://www.npscra.nsdl.co.in/"],["PM Vishwakarma योजना","https://pmvishwakarma.gov.in/"],["Skill India / रोजगार पंजीकरण","https://www.skillindia.gov.in/"],["GeM Seller Registration सहायता","https://gem.gov.in/"],["Tele-Law – कानूनी सहायता","https://www.tele-law.in/"],["Insurance – Life / Health / Motor","https://www.irdai.gov.in/"],["e-Shram 2.0 अपडेट","https://eshram.gov.in/"],["CSC के नए G2C / B2C डिजिटल सेवाएँ","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["आधार आधारित e-KYC व वेरिफिकेशन","https://uidai.gov.in/en/component/search?searchword=ekyc&searchphrase=all&limit=20"],["ऑनलाइन प्रीपेड / अन्य कोई भी नई डिजिटल सेवा","https://digitalseva.csc.gov.in/"],["रोजगार संगम पोर्टल","https://sewayojan.up.nic.in/"]]},{"icon":"🖼️","title":"Compress, Resize & Edit Pictures","desc":"Image editing, resizing, background और conversion tools।","portals":[],"items":[["Image Size In Kb","https://image.pi7.org/reduce-image-size-in-kb"],["Remove Background In Pi7","https://image.pi7.org/remove-image-background"],["Remove Background","https://www.remove.bg/uploads"],["Image to Pdf Pi7","https://image.pi7.org/image-to-pdf"],["PNG to JPEG","https://image.pi7.org/png-to-jpeg"],["Merge Photo and Signature","https://image.pi7.org/merge-photo-and-signature"],["Convert Dpi And Pixel","https://image.pi7.org/convert-dpi"],["Pdf to Word Pi7","https://pdf.pi7.org/pdf-to-word"]]}];
function normalizeItem(i){
  if(Array.isArray(i)){ return [String(i[0] ?? i[1] ?? ''), String(i[1] ?? '')]; }
  if(i && typeof i==='object'){
    const text=i.text ?? i.name ?? i.label ?? i.title ?? i.service ?? i.serviceName ?? '';
    const url=i.url ?? i.link ?? i.href ?? i.website ?? '';
    return [String(text), String(url)];
  }
  return [String(i ?? ''), ''];
}
function normalizePortal(p){
  if(Array.isArray(p)) return [String(p[0] ?? ''), String(p[1] ?? '')];
  if(p && typeof p==='object') return [String(p.text ?? p.name ?? p.label ?? p.title ?? ''), String(p.url ?? p.link ?? p.href ?? '')];
  return [String(p ?? ''), ''];
}
function normalizeService(s){
  return {
    icon:String(s?.icon ?? s?.emoji ?? '💼'),
    title:String(s?.title ?? s?.name ?? s?.heading ?? s?.category ?? 'सेवा'),
    desc:String(s?.desc ?? s?.description ?? ''),
    portals:Array.isArray(s?.portals)?s.portals.map(normalizePortal).filter(p=>p[0]):[],
    items:Array.isArray(s?.items)?s.items.map(normalizeItem).filter(i=>i[0]):[]
  };
}
let services = DEFAULT_SERVICES.map(normalizeService);
let isAdmin = false;
async function loadPublicServices(){
  try{
    const res=await fetch('./services.json?v=20260823fix',{cache:'no-store'});
    if(!res.ok) throw new Error('services.json '+res.status);
    const data=await res.json();
    if(Array.isArray(data) && data.length){
      services=data.map(normalizeService);
      renderServices(); renderTicker();
    }
  }catch(e){
    console.warn('Public services file unavailable; using built-in services.',e);
  }
}
const CURRENT_PASSWORD_SHA256='929dfb98067eccee61b09e7cac9d7c5b473f13f7f5c4b38378b09f9c43f8e4cc';
function escapeHtml(str){return String(str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function safeUrl(url){try{const u=new URL(url);return /^https?:$/.test(u.protocol)?u.href:'#'}catch{return '#'}}
function itemText(i){return Array.isArray(i)?String(i[0]||''):String(i?.text||'')}
function itemUrl(i){return Array.isArray(i)?String(i[1]||''):String(i?.url||'')}
function matchesQuery(s,q){const hay=(s.title+' '+s.desc+' '+(s.items||[]).map(itemText).join(' ')).toLowerCase();return hay.includes(q)||q.split(/\s+/).filter(w=>w.length>1).some(w=>hay.includes(w));}
function renderServices(){
 const grid=document.getElementById('serviceGrid'), input=document.getElementById('serviceSearch'); if(!grid)return;
 const q=(input?.value||'').toLowerCase().trim(); const source = services.length>2 ? [services[2],services[0],services[1],...services.slice(3)] : services; const filtered=q?source.filter(s=>matchesQuery(s,q)):source;
 grid.innerHTML=filtered.map(s=>{
   const isImageTools=s.title==='Compress, Resize & Edit Pictures';
   const items=(s.items||[]).map(x=>`<li><a href="${safeUrl(itemUrl(x))}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${escapeHtml(itemText(x))} ↗</a></li>`).join('');
   return `<article class="service-card ${isImageTools?'image-tools-card':''}" data-service-title="${escapeHtml(s.title)}" onclick='openService(${JSON.stringify(s).replace(/'/g,'&#39;')})'><div class="service-icon">${s.icon}</div><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.desc)}</p><ul>${items}</ul><div class="more">🔗 सेवा पर टच करें • आधिकारिक पोर्टल खुलेगा</div></article>`;
 }).join('')||'<div class="service-card"><h3>कोई सेवा नहीं मिली</h3><p>दूसरा शब्द खोजकर देखें।</p></div>';
 layoutServiceMasonry();
 resetServiceMotion();
}

function layoutServiceMasonry(){
 const grid=document.getElementById('serviceGrid'); if(!grid)return;
 const cards=[...grid.children];
 if(!cards.length)return;
 cards.forEach(c=>{c.style.gridRowEnd='';c.style.gridRowStart='';c.style.gridColumn='';});
 requestAnimationFrame(()=>{
   const styles=getComputedStyle(grid);
   const rowH=parseFloat(styles.gridAutoRows)||8;
   const gap=parseFloat(styles.rowGap)||8;
   const cols=Math.max(1,Math.min(3,parseInt(styles.gridTemplateColumns.split(' ').length,10)||3));
   const heights=new Array(cols).fill(0);

   // Place each card in the currently shortest column. This keeps the existing
   // service order while filling the empty space instead of leaving a large
   // vertical gap. The Image Tools card is intentionally treated like every
   // other card, so it can occupy the open left column after the first nine.
   cards.forEach(card=>{
     const h=card.getBoundingClientRect().height;
     const span=Math.max(1,Math.ceil((h+gap)/(rowH+gap)));
     let col=0;
     for(let i=1;i<cols;i++) if(heights[i]<heights[col]) col=i;
     const start=heights[col]+1;
     card.style.gridColumn=`${col+1}`;
     card.style.gridRowStart=String(start);
     card.style.gridRowEnd=`span ${span}`;
     heights[col]=start+span-1;
   });
 });
}
window.addEventListener('resize',()=>layoutServiceMasonry());

function generateUPI(){
  const upiId=(document.getElementById('upiId')?.value||'').trim();
  const name=(document.getElementById('upiName')?.value||'Vikas Chaurasiya Csc Jan Sewa Kendra').trim();
  const error=document.getElementById('upiError');
  const box=document.getElementById('qrcode');
  const link=document.getElementById('upiLink');
  if(error) error.textContent='';
  if(upiId !== '7355353841@okbizaxis'){
    if(error) error.textContent='कृपया सही UPI ID दर्ज करें।';
    return;
  }
  const upiUrl='upi://pay?pa='+encodeURIComponent(upiId)+'&pn='+encodeURIComponent(name)+'&cu=INR';
  if(link){ link.href=upiUrl; link.classList.remove('hidden'); }
  if(!box) return;
  box.innerHTML='';
  const img=document.createElement('img');
  img.alt='UPI QR Code';
  img.width=190; img.height=190;
  img.loading='eager';
  img.src='./upi-qr.png?v=20260823upi';
  box.appendChild(img);
}

function renderTicker(){const labels=services.map(s=>`${s.icon} ${s.title}`);document.getElementById('serviceTicker').innerHTML=labels.map(x=>`<span class="ticker-chip">${escapeHtml(x)}</span>`).join('');}
function openService(s){document.getElementById('modalIcon').textContent=s.icon;document.getElementById('modalTitle').textContent=s.title;document.getElementById('modalDescription').textContent=s.desc;document.getElementById('modalPortals').innerHTML=(s.portals||[]).map(p=>`<a class="portal-btn" href="${safeUrl(p[1])}" target="_blank" rel="noopener">${escapeHtml(p[0])} ↗</a>`).join('');document.getElementById('modalItems').innerHTML=(s.items||[]).map(x=>`<li><a href="${safeUrl(itemUrl(x))}" target="_blank" rel="noopener">${escapeHtml(itemText(x))} ↗</a></li>`).join('');document.getElementById('serviceModal').classList.add('show');document.getElementById('serviceModal').setAttribute('aria-hidden','false');stopServiceMotion();}
function closeModal(){document.getElementById('serviceModal').classList.remove('show');document.getElementById('serviceModal').setAttribute('aria-hidden','true');}
function openAdmin(){document.getElementById('adminModal').classList.add('show');document.getElementById('adminModal').setAttribute('aria-hidden','false');stopServiceMotion();}
function closeAdmin(){document.getElementById('adminModal').classList.remove('show');document.getElementById('adminModal').setAttribute('aria-hidden','true');}
async function adminLogin(){const pass=document.getElementById('adminPass').value;try{const hash=await sha256(pass);if(hash===CURRENT_PASSWORD_SHA256){isAdmin=true;document.getElementById('loginView').classList.add('hidden');document.getElementById('adminView').classList.remove('hidden');}else alert('गलत Admin Password');}catch(e){alert('इस browser में secure login उपलब्ध नहीं है।')}}
function adminLogout(){isAdmin=false;document.getElementById('loginView').classList.remove('hidden');document.getElementById('adminView').classList.add('hidden');document.getElementById('adminPass').value='';}
function loadAdminDraft(){try{const raw=localStorage.getItem('vikas_csc_admin_draft');if(raw){const data=JSON.parse(raw);if(Array.isArray(data))return data.map(normalizeService);}}catch(e){}return services;}
function addService(){if(!isAdmin)return;services=loadAdminDraft();const title=document.getElementById('newTitle').value.trim(),icon=document.getElementById('newIcon').value.trim()||'⭐',desc=document.getElementById('newDesc').value.trim()||'नई ऑनलाइन सेवा',customUrl=document.getElementById('newUrl').value.trim();const items=document.getElementById('newItems').value.split('\n').map(x=>x.trim()).filter(Boolean).map(x=>({text:x,url:customUrl||OFFICIAL.csc}));if(!title||!items.length){alert('Title और कम-से-कम एक Service लिखें।');return}services.push({icon,title,desc,portals:[[title+' — Official Portal',customUrl||OFFICIAL.csc]],items});localStorage.setItem('vikas_csc_admin_draft',JSON.stringify(services));renderServices();renderTicker();['newTitle','newDesc','newItems','newUrl'].forEach(id=>document.getElementById(id).value='');alert('नई Service जोड़ दी गई। Public Services Data export करें।');}
function exportPublicServices(){if(!isAdmin)return;services=loadAdminDraft();const blob=new Blob([JSON.stringify(services,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='services.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
function resetServices(){if(confirm('क्या आप सभी custom services हटाकर default services वापस लाना चाहते हैं?')){services=DEFAULT_SERVICES.map(normalizeService);localStorage.removeItem('vikas_csc_admin_draft');renderServices();renderTicker();}}

// ===== FREE SMART AI =====
const AI_API_ENDPOINT = '';
const AI_LANG = {value:'hi-IN'};
let lastAIText = '';

const AI_RULES = [
  {keys:['आधार','aadhaar','aadhar'], title:'आधार सेवाएँ', url:OFFICIAL.aadhaar, answer:'आधार से जुड़ी उपलब्ध सेवाओं के लिए MyAadhaar का official portal देखें। आपकी CSC पर उपलब्ध सेवाओं के बारे में भी मैं बता सकती हूँ।'},
  {keys:['पैन','pan card','pancard'], title:'PAN Card', url:'https://www.protean-tinpan.com/', answer:'PAN आवेदन और सुधार से जुड़ी सहायता के लिए अधिकृत PAN portal उपलब्ध है।'},
  {keys:['राशन','ration'], title:'राशन कार्ड', url:OFFICIAL.ration, answer:'राशन कार्ड संबंधी सेवाओं के लिए UP Food & Civil Supplies का official portal देखें।'},
  {keys:['आय प्रमाण','जाति','निवास','domicile','income certificate','caste certificate'], title:'UP e-District', url:OFFICIAL.edistrict, answer:'आय, जाति और निवास जैसे प्रमाण पत्रों के लिए UP e-District/e-Sathi portal उपयोग किया जाता है।'},
  {keys:['ड्राइविंग','driving','dl','लाइसेंस','licence','license','rto'], title:'Driving Licence / RTO', url:OFFICIAL.rto, answer:'Driving Licence और वाहन सेवाओं के लिए Parivahan का official portal उपलब्ध है।'},
  {keys:['बिजली','uppcl','electricity','बिल'], title:'UPPCL बिजली सेवा', url:OFFICIAL.uppcl, answer:'UPPCL पर बिजली बिल और consumer services उपलब्ध हैं।'},
  {keys:['आयुष्मान','ayushman','health'], title:'Ayushman / Health', url:OFFICIAL.ayushman, answer:'Ayushman Bharat/PM-JAY से जुड़ी जानकारी official portal पर मिलती है।'},
  {keys:['पेंशन','pension'], title:'Pension Services', url:OFFICIAL.pension, answer:'पेंशन संबंधी सहायता के लिए उपलब्ध pension services और official portal देखे जा सकते हैं।'},
  {keys:['श्रमिक','e-shram','eshram','लेबर'], title:'ई-श्रम / श्रमिक कार्ड', url:OFFICIAL.eshram, answer:'ई-श्रम portal पर registration और संबंधित services उपलब्ध हैं।'},
  {keys:['छात्रवृत्ति','scholarship','up scholarship'], title:'UP Scholarship', url:'https://scholarship.up.gov.in/', answer:'UP Scholarship portal पर छात्रवृत्ति आवेदन और status से जुड़ी सुविधाएँ उपलब्ध हैं।'},
  {keys:['किसान','pm kisan','pm-kisan','kcc'], title:'Kisan Services', url:OFFICIAL.pmkisan, answer:'PM-KISAN और किसान सेवाओं की official जानकारी यहाँ मिल सकती है।'},
  {keys:['epfo','pf','uan'], title:'EPFO / PF', url:OFFICIAL.epfo, answer:'EPFO portal पर UAN, PF और employee services उपलब्ध हैं।'},
  {keys:['पासपोर्ट','passport'], title:'Passport Seva', url:OFFICIAL.passport, answer:'Passport Seva पर application, appointment और status सेवाएँ उपलब्ध हैं।'},
  {keys:['रेल','rail','irctc','ट्रेन','pnr'], title:'IRCTC / Railway', url:OFFICIAL.irctc, answer:'IRCTC पर railway ticketing और PNR services उपलब्ध हैं।'},
  {keys:['डिजीलॉकर','digilocker'], title:'DigiLocker', url:OFFICIAL.digilocker, answer:'DigiLocker में digital documents access और share किए जा सकते हैं।'},
  {keys:['योजना','scheme','myscheme'], title:'Government Schemes', url:OFFICIAL.myscheme, answer:'myScheme पर सरकारी योजनाएँ खोजी जा सकती हैं।'}
];

function escapeHtml(str){return String(str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function safeUrl(url){try{const u=new URL(url);return /^https?:$/.test(u.protocol)||u.protocol==='tel:'?u.href:'#'}catch{return '#'}}
function setAILang(lang){AI_LANG.value=lang; const q=document.getElementById('aiQuestion'); if(q)q.focus();}
function aiTokens(q){return q.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,' ').split(/\s+/).filter(w=>w.length>1);}
function scoreText(q,text){let s=0;for(const w of aiTokens(q)){if(text.toLowerCase().includes(w))s+=w.length>=5?3:1;}return s;}

function localAI(q){
  const n=q.toLowerCase();
  if(/(नमस्ते|hello|hi|हाय|hey|namaste)/.test(n))return {title:'नमस्ते 👋',text:'नमस्ते! मैं Vikas CSC AI हूँ। आप service, document, योजना, संपर्क या payment के बारे में पूछ सकते हैं।'};
  if(/(क्या क्या|services|service|सेवाएं|सेवा)/.test(n))return {title:'CSC Services',text:'हमारे केंद्र पर कई CSC/digital services उपलब्ध हैं। नीचे service list में अपनी जरूरत चुनें।'};
  if(/(समय|timing|open|खुला|बंद)/.test(n))return {title:'केंद्र का समय',text:'Exact current opening time वेबसाइट पर दर्ज नहीं है। आने से पहले 7355353841 पर संपर्क करके पुष्टि करें।',url:'tel:+917355353841'};

  if(/(नमस्ते|hello|hi|हाय|hey)/.test(n))return {title:'नमस्ते 👋',text:'नमस्ते! मैं Vikas CSC AI हूँ। आप किसी भी CSC service, योजना, document या contact के बारे में पूछ सकते हैं।'};
  if(/(फोन|मोबाइल|contact|number|नंबर|call|whatsapp)/.test(n))return {title:'संपर्क',text:'Vikas CSC Jan Sewa Kendra का मोबाइल नंबर 7355353841 है।',url:'tel:+917355353841'};
  if(/(पता|address|location|लोकेशन)/.test(n))return {title:'हमारा पता',text:'ग्राम व पोस्ट – मुसहरा, तहसील – मेहदावल, जनपद – संत कबीर नगर, उत्तर प्रदेश – 272154।',url:'https://www.google.com/maps/search/?api=1&query=27.063557%2C83.123799'};
  if(/(फीस|fee|charge|शुल्क)/.test(n))return {title:'शुल्क',text:'सेवा के अनुसार सरकारी शुल्क और CSC सेवा शुल्क अलग हो सकते हैं। सही वर्तमान शुल्क official portal या केंद्र से पुष्टि करें।'};

  for(const r of AI_RULES){
    if(r.keys.some(k=>n.includes(k))) return {title:r.title,text:r.answer,url:r.url};
  }

  let best=[];
  for(const x of services){
    const text=x.title+' '+x.desc+' '+x.items.map(i=>i.text).join(' ');
    const score=scoreText(q,text);
    if(score>0)best.push({x,score});
  }
  best.sort((a,b)=>b.score-a.score);
  if(best.length){
    const x=best[0].x;
    return {title:x.title,text:`आपके सवाल से सबसे संबंधित सेवा:\n${x.desc}`,items:x.items.slice(0,6),url:x.portals?.[0]?.[1]||OFFICIAL.csc};
  }
  return {title:'Ask AI',text:'मैं अभी Free Smart Mode में हूँ। आप “आधार”, “पैन कार्ड”, “राशन”, “RTO”, “बिजली बिल”, “पेंशन”, “श्रमिक कार्ड”, “Scholarship” या अपनी किसी CSC service का नाम लिखकर पूछें।'};
}

function addAIMessage(role,text){
  const log=document.getElementById('aiChatLog'); if(!log)return;
  const d=document.createElement('div'); d.className='ai-msg '+role;
  d.innerHTML=`<b>${role==='user'?'आप':'Vikas CSC AI'}</b><div>${escapeHtml(text).replace(/\n/g,'<br>')}</div>`;
  log.appendChild(d); log.scrollTop=log.scrollHeight;
}
function clearAIChat(){
  const log=document.getElementById('aiChatLog'); if(log)log.innerHTML='';
  lastAIText=''; addAIMessage('assistant','नमस्कार! सेवा या कोई सवाल पूछिए।');
}
function renderAIAnswer(a){
  lastAIText=a.text||'';
  const answer=document.getElementById('aiAnswer'); if(!answer)return;
  let html=`<div class="ai-result-title">🤖 ${escapeHtml(a.title||'Ask AI')}</div><div class="ai-result-text">${escapeHtml(a.text||'').replace(/\n/g,'<br>')}</div>`;
  if(a.items?.length) html+=`<div class="ai-result-list">${a.items.map(i=>`<a href="${safeUrl(i.url)}" target="_blank" rel="noopener">${escapeHtml(i.text)} ↗</a>`).join('')}</div>`;
  if(a.url) html+=`<a class="ai-result-link" href="${safeUrl(a.url)}" target="_blank" rel="noopener">🔗 संबंधित official portal खोलें</a>`;
  answer.innerHTML=html;
}

function aiRelatedServices(q){
  const n=String(q).toLowerCase();
  const hits=services.map(x=>{
    const hay=(x.title+' '+x.desc+' '+x.items.map(i=>i.text).join(' ')).toLowerCase();
    let score=0;
    for(const token of aiTokens(n)){if(token.length>2&&hay.includes(token))score+=token.length;}
    return {x,score};
  }).filter(v=>v.score>0).sort((a,b)=>b.score-a.score).slice(0,3);
  if(!hits.length)return;
  const ans=document.getElementById('aiAnswer'); if(!ans)return;
  ans.insertAdjacentHTML('beforeend',`<div class="ai-result-card"><b>🔎 संबंधित services</b><div class="ai-suggestions">${hits.map(h=>`<button class="ai-suggestion" type="button" onclick="openServiceByTitle(${JSON.stringify(h.x.title)})">${escapeHtml(h.x.title)}</button>`).join('')}</div></div>`);
}
function openServiceByTitle(title){
  const idx=services.findIndex(x=>x.title===title);
  if(idx>=0)openService(idx);
}

function askSiteAI(){
  const input=document.getElementById('aiQuestion'); const answer=document.getElementById('aiAnswer');
  const q=(input?.value||'').trim(); if(!q){answer.innerHTML='<b>अपना सवाल लिखें या 🎙️ से बोलें।</b>';return;}
  addAIMessage('user',q); input.value='';
  const a=localAI(q); renderAIAnswer(a); aiRelatedServices(q); addAIMessage('assistant',a.text); speakAI(a.text);
}
function aiQuick(q){const input=document.getElementById('aiQuestion');input.value=q;askSiteAI();}
function toggleAIHelp(){
  const p=document.getElementById('aiHelpPanel'), b=document.querySelector('.ai-float');
  const show=!p.classList.contains('show'); p.classList.toggle('show',show);
  p.setAttribute('aria-hidden',String(!show)); b.setAttribute('aria-expanded',String(show));
  if(show) stopServiceMotion(true); else scheduleServiceMotion();
}
function startAIListen(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){alert('इस browser में voice input उपलब्ध नहीं है।');return;}
  const r=new SR(); r.lang=AI_LANG.value||'hi-IN'; r.interimResults=false; r.maxAlternatives=1;
  r.onstart=()=>document.getElementById('aiVoiceBtn')?.classList.add('listening');
  r.onend=()=>document.getElementById('aiVoiceBtn')?.classList.remove('listening');
  r.onerror=()=>document.getElementById('aiVoiceBtn')?.classList.remove('listening');
  r.onresult=e=>{document.getElementById('aiQuestion').value=e.results[0][0].transcript;askSiteAI();};
  r.start();
}
function speakAI(text){
  if(!('speechSynthesis' in window))return;
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(String(text).replace(/\*\*/g,''));
  u.lang=AI_LANG.value||'hi-IN'; u.rate=.95; u.pitch=1.05; window.speechSynthesis.speak(u);
}
function speakLastAI(){if(lastAIText)speakAI(lastAIText);}


// ===== Service grid: smooth left-right auto scroll + 6s touch/mouse pause + manual drag =====
let serviceTimer=null, serviceAnim=null, serviceResumeTimer=null;
let serviceDragging=false, serviceX=0, serviceDir=-1, serviceLast=0;
let servicePointerId=null, serviceStartX=0, serviceStartY=0, serviceDragStartX=0, serviceDragActive=false;
function serviceViewport(){return document.getElementById('serviceViewport')}
function computeMaxShift(){
 const vp=serviceViewport(), grid=document.getElementById('serviceGrid');
 if(!vp||!grid)return 0;
 return Math.max(0, grid.scrollWidth-vp.clientWidth);
}
function applyServiceX(x){
 const grid=document.getElementById('serviceGrid'); if(!grid)return;
 const max=computeMaxShift(), half=max/2;
 serviceX=Math.max(-half,Math.min(half,Number(x)||0));
 grid.style.transform=`translate3d(${serviceX}px,0,0)`;
}
function stopServiceMotion(){
 if(serviceAnim){cancelAnimationFrame(serviceAnim);serviceAnim=null;}
 clearTimeout(serviceTimer); serviceTimer=null;
 clearTimeout(serviceResumeTimer); serviceResumeTimer=null;
 serviceLast=0;
}
function scheduleServiceMotion(delay=900){
 clearTimeout(serviceTimer);
 serviceTimer=setTimeout(startServiceAuto,delay);
}
function pauseServiceForSixSeconds(){
 stopServiceMotion();
 clearTimeout(serviceResumeTimer);
 serviceResumeTimer=setTimeout(()=>scheduleServiceMotion(0),6000);
}
function startServiceAuto(){
 stopServiceMotion();
 if(serviceDragging)return;
 serviceLast=performance.now();
 const tick=(now)=>{
  if(serviceDragging)return;
  const max=computeMaxShift();
  if(max<=1){serviceAnim=null;return;}
  const half=max/2, dt=Math.min(40,now-serviceLast)/1000; serviceLast=now;
  const speed=Math.max(14,Math.min(30,max/8));
  serviceX += serviceDir*speed*dt;
  if(serviceX<=-half){serviceX=-half;serviceDir=1;}
  if(serviceX>=half){serviceX=half;serviceDir=-1;}
  applyServiceX(serviceX);
  serviceAnim=requestAnimationFrame(tick);
 };
 serviceAnim=requestAnimationFrame(tick);
}
function resetServiceMotion(){
 stopServiceMotion();
 serviceDragging=false;serviceDragActive=false;servicePointerId=null;serviceX=0;serviceDir=-1;
 applyServiceX(0);scheduleServiceMotion(900);
}
function initServiceTouch(){
 const vp=serviceViewport(),grid=document.getElementById('serviceGrid');
 if(!vp||!grid)return;
 applyServiceX(0);
 const pointerDown=(e)=>{
  if(e.pointerType==='mouse' && e.button!==0)return;
  servicePointerId=e.pointerId;
  serviceStartX=e.clientX;serviceStartY=e.clientY;serviceDragStartX=serviceX;
  serviceDragActive=false;
  pauseServiceForSixSeconds();
  try{vp.setPointerCapture(e.pointerId)}catch(_){ }
 };
 const pointerMove=(e)=>{
  if(servicePointerId!==e.pointerId)return;
  const dx=e.clientX-serviceStartX, dy=e.clientY-serviceStartY;
  if(!serviceDragActive){
   if(Math.abs(dx)<8 && Math.abs(dy)<8)return;
   if(Math.abs(dx)<=Math.abs(dy)){return;}
   serviceDragActive=true;
  }
  e.preventDefault();
  applyServiceX(serviceDragStartX+dx);
 };
 const pointerUp=(e)=>{
  if(servicePointerId!==e.pointerId)return;
  servicePointerId=null;serviceDragActive=false;
  try{vp.releasePointerCapture(e.pointerId)}catch(_){ }
  // Keep auto-scroll paused for the full 6 seconds after the touch/mouse interaction.
  pauseServiceForSixSeconds();
 };
 vp.addEventListener('pointerdown',pointerDown,{passive:true});
 vp.addEventListener('pointermove',pointerMove,{passive:false});
 vp.addEventListener('pointerup',pointerUp,{passive:true});
 vp.addEventListener('pointercancel',pointerUp,{passive:true});
 vp.addEventListener('lostpointercapture',()=>{servicePointerId=null;serviceDragActive=false;});
}

function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'})}
function boot(){document.getElementById('year').textContent=new Date().getFullYear();renderServices();renderTicker();loadPublicServices();initServiceTouch();resetServiceMotion();window.addEventListener('resize',()=>{computeMaxShift();applyServiceX(serviceX);});document.addEventListener('visibilitychange',()=>{if(document.hidden)stopServiceMotion();else scheduleServiceMotion();});window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeAdmin();}});document.getElementById('serviceModal').addEventListener('click',e=>{if(e.target.id==='serviceModal')closeModal()});document.getElementById('adminModal').addEventListener('click',e=>{if(e.target.id==='adminModal')closeAdmin()});document.getElementById('serviceSearch').addEventListener('input',()=>{stopServiceMotion();renderServices();if(!document.getElementById('serviceSearch').value.trim())scheduleServiceMotion();});}
boot();
