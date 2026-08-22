const OFFICIAL = {"csc":"https://www.csc.gov.in/","aadhaar":"https://myaadhaar.uidai.gov.in/","ayushman":"https://pmjay.gov.in/","abha":"https://abha.abdm.gov.in/","jeevan":"https://jeevanpramaan.gov.in/","pension":"https://nsap.nic.in/","rto":"https://parivahan.gov.in/","challan":"https://echallan.parivahan.gov.in/","fastag":"https://www.npci.org.in/what-we-do/netc-fastag/product-overview","edistrict":"https://esathi.up.gov.in/","ration":"https://fcs.up.gov.in/","bhulekh":"https://upbhulekh.gov.in/bhulekh/","bhunaksha":"https://upbhunaksha.gov.in/","marriage":"https://www.igrsup.gov.in/igrsup/defaultAction.action","police":"https://uppolice.gov.in/","udid":"https://www.swavlambancard.gov.in/","gst":"https://www.gst.gov.in/","itr":"https://www.incometax.gov.in/iec/foportal/","fssai":"https://foscos.fssai.gov.in/","udyam":"https://udyamregistration.gov.in/","dsc":"https://cca.gov.in/","nsp":"https://scholarships.gov.in/","abc":"https://www.abc.gov.in/","digilocker":"https://www.digilocker.gov.in/","irctc":"https://www.irctc.co.in/","bus":"https://www.redbus.in/","flight":"https://www.airindia.com/","passport":"https://www.passportindia.gov.in/","pmkisan":"https://pmkisan.gov.in/","kcc":"https://www.jansamarth.in/","epfo":"https://www.epfindia.gov.in/","recharge":"https://www.bharatbillpay.com/","eshram":"https://eshram.gov.in/","lpg":"https://www.pmuy.gov.in/","esign":"https://cca.gov.in/","nps":"https://www.npscra.nsdl.co.in/","gem":"https://gem.gov.in/","telelaw":"https://www.tele-law.in/","insurance":"https://www.irdai.gov.in/","vishwakarma":"https://pmvishwakarma.gov.in/","skill":"https://www.skillindia.gov.in/","myscheme":"https://www.myscheme.gov.in/","sim":"https://www.airtel.in/","voter":"https://voters.eci.gov.in/","uppcl":"https://consumer.uppcl.org/wss/home","birthdeath":"https://services.india.gov.in/service/detail/civil-registration-system-birth-and-death-certificate","ncs":"https://www.ncs.gov.in/","esic":"https://www.esic.gov.in/","maandhan":"https://maandhan.in/","india":"https://www.india.gov.in/"};
const DEFAULT_SERVICES = [{"icon":"🏦","title":"बैंकिंग एवं आधार सेवाएँ","desc":"दैनिक डिजिटल और नागरिक सेवाएँ एक ही जगह।","portals":[["CSC Official Portal","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["myAadhaar","https://myaadhaar.uidai.gov.in/"]],"items":[["AEPS बैंकिंग – जमा / निकासी","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["बैलेंस, मिनी स्टेटमेंट","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["वृद्धावस्था / विधवा / दिव्यांग पेंशन","https://nsap.nic.in/"],["जीवन प्रमाण पत्र (Jeevan Pramaan)","https://jeevanpramaan.gov.in/"],["आधार में पता अपडेट","https://myaadhaar.uidai.gov.in/"],["आयुष्मान कार्ड – नया / पात्रता जाँच","https://pmjay.gov.in/"],["ABHA Health ID","https://abha.abdm.gov.in/"]]},{"icon":"🚗","title":"RTO / वाहन सेवाएँ","desc":"ड्राइविंग लाइसेंस और वाहन संबंधी सेवाएँ।","portals":[["Parivahan","https://parivahan.gov.in/"],["e-Challan","https://echallan.parivahan.gov.in/"]],"items":[["ड्राइविंग लाइसेंस – नया / रिन्यू / डुप्लीकेट","https://parivahan.gov.in/"],["वाहन ट्रांसफर, परमिट, फिटनेस","https://parivahan.gov.in/"],["HSRP नंबर प्लेट – बुकिंग + ट्रैकिंग","https://parivahan.gov.in/"],["फैंसी नंबर प्लेट (पसंदीदा नंबर)","https://parivahan.gov.in/"],["e-Challan भुगतान – ऑनलाइन","https://echallan.parivahan.gov.in/"],["वाहन बीमा / FASTag","https://www.npci.org.in/what-we-do/netc-fastag/product-overview"],["जिले: संत कबीर नगर, सिद्धार्थनगर, गोरखपुर, महाराजगंज, बस्ती","https://parivahan.gov.in/"]]},{"icon":"📜","title":"प्रमाण पत्र एवं सरकारी दस्तावेज","desc":"सरकारी प्रमाण-पत्र और ऑनलाइन दस्तावेजी सेवाएँ।","portals":[["UP e-Sathi / e-District","https://esathi.up.gov.in/"],["UP Food & Ration","https://fcs.up.gov.in/"]],"items":[["आय / जाति / निवास / राशन कार्ड","https://esathi.up.gov.in/"],["खतौनी (प्रमाणित / अभिलेख)","https://upbhulekh.gov.in/bhulekh/"],["भू-नक्शा / भूमि नक्शा","https://upbhunaksha.gov.in/"],["विवाह पंजीकरण","https://www.igrsup.gov.in/igrsup/defaultAction.action"],["चरित्र प्रमाण पत्र (Police Verification)","https://uppolice.gov.in/"],["UDID कार्ड / दिव्यांग प्रमाण पत्र","https://www.swavlambancard.gov.in/"],["e-District – सभी प्रमाण पत्र","https://esathi.up.gov.in/"]]},{"icon":"📊","title":"टैक्स / व्यवसाय सेवाएँ","desc":"व्यापार, टैक्स और पंजीकरण संबंधी ऑनलाइन काम।","portals":[["GST Portal","https://www.gst.gov.in/"],["Income Tax e-Filing","https://www.incometax.gov.in/iec/foportal/"],["Udyam Registration","https://udyamregistration.gov.in/"]],"items":[["GST रजिस्ट्रेशन – नया / संशोधन","https://www.gst.gov.in/"],["GST फाइलिंग – मासिक / वार्षिक","https://www.gst.gov.in/"],["ITR फाइलिंग – सभी आय वर्ग","https://www.incometax.gov.in/iec/foportal/"],["FSSAI लाइसेंस – नया / रिन्यूअल","https://foscos.fssai.gov.in/"],["MSME / उद्यम रजिस्ट्रेशन","https://udyamregistration.gov.in/"],["DSC / डिजिटल सिग्नेचर","https://cca.gov.in/"]]},{"icon":"🎓","title":"शिक्षा / छात्र सेवाएँ","desc":"छात्रों और शिक्षा से जुड़ी सुविधाएँ।","portals":[["National Scholarship Portal","https://scholarships.gov.in/"],["ABC / APAAR","https://www.abc.gov.in/"]],"items":[["छात्रवृत्ति आवेदन – राज्य / केंद्र","https://scholarships.gov.in/"],["ABC ID / APAAR","https://www.abc.gov.in/"],["बोर्ड / यूनिवर्सिटी रिजल्ट","https://www.digilocker.gov.in/"],["कॉलेज प्रवेश फॉर्म","https://scholarships.gov.in/"],["उत्तर प्रदेश छात्रवृत्ति (UP Scholarship)","https://scholarship.up.gov.in/"]]},{"icon":"✈️","title":"यात्रा / टिकटिंग सेवाएँ","desc":"रेल, बस, फ्लाइट और पासपोर्ट सेवाएँ।","portals":[["IRCTC","https://www.irctc.co.in/"],["Passport Seva","https://www.passportindia.gov.in/"]],"items":[["रेलवे टिकट – PNR स्टेटस","https://www.irctc.co.in/"],["बस टिकट (रीजनल / इंटरस्टेट)","https://www.redbus.in/"],["फ्लाइट टिकट (Domestic / International)","https://www.airindia.com/"],["पासपोर्ट सेवाएँ – PSK / ऑनलाइन","https://www.passportindia.gov.in/"]]},{"icon":"🌾","title":"कृषि व किसान सेवाएँ","desc":"किसानों के लिए डिजिटल सहायता।","portals":[["PM-KISAN","https://pmkisan.gov.in/"],["Jan Samarth","https://www.jansamarth.in/"]],"items":[["किसान पंजीकरण","https://pmkisan.gov.in/"],["PM-Kisan स्थिति / सुधार","https://pmkisan.gov.in/"],["कृषि सहायता / मुद्रा प्रशिक्षण","https://www.myscheme.gov.in/"],["KCC लोन आवेदन","https://www.jansamarth.in/"],["MPACS समिति सेवाएँ","https://www.myscheme.gov.in/"]]},{"icon":"🧰","title":"अन्य आवश्यक सेवाएँ","desc":"रोजमर्रा की कई ऑनलाइन सुविधाएँ।","portals":[["CSC Official Portal","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["e-Shram","https://eshram.gov.in/"]],"items":[["सभी ऑनलाइन फॉर्म","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["फोटो / फोटो कॉपी / स्कैन / PDF","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["Resume (CV) बनाना (Excel/Word)","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["मोबाइल / DTH रिचार्ज","https://www.bharatbillpay.com/"],["बिजली बिल भुगतान / नया कनेक्शन","https://www.myscheme.gov.in/"],["ई-श्रम / श्रम कार्ड","https://eshram.gov.in/"],["उज्ज्वला – LPG कनेक्शन","https://www.pmuy.gov.in/"],["EPFO – UAN / PF Withdrawal","https://www.epfindia.gov.in/"],["Airtel / Jio नई SIM","https://www.airtel.in/"],["Cyber Cafe सभी सेवाएँ","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["केंद्र व राज्य की सभी योजनाएँ","https://www.myscheme.gov.in/"],["UPPCL बिजली बिल भुगतान / नया कनेक्शन / शिकायत","https://consumer.uppcl.org/wss/home"]]},{"icon":"🚀","title":"नई एवं एडवांस सेवाएँ (2026–2027)","desc":"नई डिजिटल सुविधाएँ समय के साथ जोड़ी जा सकती हैं।","portals":[["DigiLocker","https://www.digilocker.gov.in/"],["GeM","https://gem.gov.in/"],["myScheme","https://www.myscheme.gov.in/"]],"items":[["PAN कार्ड – नया / सुधार — Protean / NSDL","https://www.protean-tinpan.com/"],["PAN कार्ड — UTIITSL विकल्प","https://www.utiitsl.com/"],["DigiLocker दस्तावेज सेवाएँ","https://www.digilocker.gov.in/"],["eSign – डिजिटल हस्ताक्षर","https://cca.gov.in/"],["NPS / APY पेंशन सेवाएँ","https://www.npscra.nsdl.co.in/"],["Ayushman 2.0 & Health Services","https://pmjay.gov.in/"],["PM Vishwakarma योजना","https://pmvishwakarma.gov.in/"],["Skill India / रोजगार पंजीकरण","https://www.skillindia.gov.in/"],["GeM Seller Registration सहायता","https://gem.gov.in/"],["Tele-Law – कानूनी सहायता","https://www.tele-law.in/"],["Insurance – Life / Health / Motor","https://www.irdai.gov.in/"],["e-Shram 2.0 अपडेट","https://eshram.gov.in/"],["CSC के नए G2C / B2C डिजिटल सेवाएँ","https://www.google.com/search?q=VIKAS+CSC+e-governance+BLS+CSC+Uttar+Pradesh+Jan+Sewa+Kendra+Near+CSC+Center+Cyber+Cafe"],["आधार आधारित e-KYC व वेरिफिकेशन","https://myaadhaar.uidai.gov.in/"],["ऑनलाइन प्रीपेड / अन्य कोई भी नई डिजिटल सेवा","https://www.myscheme.gov.in/"]]}];
function normalizeService(s){const items=(s.items||[]).map(x=>Array.isArray(x)?{text:String(x[0]),url:x[1]||OFFICIAL.csc}:{text:String(x.text||x),url:x.url||OFFICIAL.csc});return {...s,portals:s.portals||[['CSC Official Portal',OFFICIAL.csc]],items};}
let services=DEFAULT_SERVICES.map(normalizeService);

// ===== VIKAS CSC SMART AI — FREE ADVANCED MODE =====
const AI_API_ENDPOINT = window.VIKAS_AI_API_ENDPOINT || '/api/chat';
const GEMINI_API_KEY = window.VIKAS_GEMINI_API_KEY || '';
const GEMINI_MODEL = window.VIKAS_GEMINI_MODEL || 'gemini-2.5-flash';

const AI_RULES = [
  {keys:['श्रमिक','ई-श्रम','e-shram','eshram'], title:'ई-श्रम / श्रमिक कार्ड', url:OFFICIAL.eshram, answer:'ई-श्रम असंगठित श्रमिकों के पंजीकरण और संबंधित सेवाओं के लिए आधिकारिक पोर्टल है।'},
  {keys:['आधार','aadhaar','aadhar'], title:'आधार सेवाएँ', url:OFFICIAL.aadhaar, answer:'आधार की उपलब्ध ऑनलाइन सेवाओं के लिए MyAadhaar official portal देखें।'},
  {keys:['पैन','pan card','pancard'], title:'PAN Card', url:'https://www.protean-tinpan.com/', answer:'PAN आवेदन/सुधार से जुड़ी सहायता के लिए अधिकृत PAN portal का उपयोग करें।'},
  {keys:['ड्राइविंग','driving','dl','लाइसेंस','licence','license','rto'], title:'Driving Licence / RTO', url:OFFICIAL.rto, answer:'Parivahan पर Driving Licence और वाहन संबंधी सेवाएँ उपलब्ध हैं।'},
  {keys:['राशन','ration'], title:'राशन कार्ड', url:OFFICIAL.ration, answer:'UP Food & Civil Supplies portal पर राशन संबंधी सेवाएँ उपलब्ध हैं।'},
  {keys:['आय प्रमाण','जाति','निवास','domicile','income certificate','caste certificate'], title:'UP e-District प्रमाण पत्र', url:OFFICIAL.edistrict, answer:'आय, जाति और निवास प्रमाण पत्र के लिए UP e-District/e-Sathi portal देखें।'},
  {keys:['वोटर','voter','मतदाता','epic'], title:'Voter Services', url:OFFICIAL.voter, answer:'Voter Services portal पर registration, correction, e-EPIC और status जैसी सुविधाएँ हैं।'},
  {keys:['बिजली','uppcl','electricity','बिल'], title:'UPPCL बिजली सेवाएँ', url:OFFICIAL.uppcl, answer:'UPPCL पर बिजली बिल, payment history और अन्य consumer services उपलब्ध हैं।'},
  {keys:['जन्म','मृत्यु','birth','death'], title:'Birth / Death Certificate', url:OFFICIAL.birthdeath, answer:'जन्म और मृत्यु पंजीकरण/प्रमाण पत्र के लिए सरकारी CRS service देखें।'},
  {keys:['छात्रवृत्ति','scholarship','up scholarship'], title:'UP Scholarship', url:'https://scholarship.up.gov.in/', answer:'UP Scholarship portal पर छात्रवृत्ति आवेदन और status की सुविधा उपलब्ध है।'},
  {keys:['नौकरी','job','रोजगार','career'], title:'National Career Service', url:OFFICIAL.ncs, answer:'National Career Service नौकरी खोज और career guidance के लिए सरकारी platform है।'},
  {keys:['पेंशन','pension'], title:'Pension Services', url:OFFICIAL.pension, answer:'वृद्धावस्था, विधवा और दिव्यांग पेंशन जैसी सेवाओं की सहायता उपलब्ध है।'},
  {keys:['आयुष्मान','ayushman','health card'], title:'Ayushman / Health Services', url:OFFICIAL.ayushman, answer:'Ayushman Bharat/PM-JAY से पात्रता और कार्ड संबंधी जानकारी के लिए official portal देखें।'},
  {keys:['किसान','pm kisan','pm-kisan','kcc'], title:'Kisan Services', url:OFFICIAL.pmkisan, answer:'PM-KISAN status/eKYC और किसान सेवाओं के लिए official portal देखें।'},
  {keys:['gst','जीएसटी'], title:'GST Services', url:OFFICIAL.gst, answer:'GST registration और return services official GST portal पर उपलब्ध हैं।'},
  {keys:['itr','income tax','आयकर'], title:'Income Tax / ITR', url:OFFICIAL.itr, answer:'Income Tax e-Filing portal पर ITR और tax services उपलब्ध हैं।'},
  {keys:['पासपोर्ट','passport'], title:'Passport Services', url:OFFICIAL.passport, answer:'Passport Seva portal पर application, appointment और status services उपलब्ध हैं।'},
  {keys:['रेल','rail','irctc','ट्रेन','pnr'], title:'Railway / IRCTC', url:OFFICIAL.irctc, answer:'IRCTC पर ticketing और PNR services उपलब्ध हैं।'},
  {keys:['डिजीलॉकर','digilocker','document'], title:'DigiLocker', url:OFFICIAL.digilocker, answer:'DigiLocker में digital documents access, share और verify किए जा सकते हैं।'},
  {keys:['योजना','scheme','my scheme','myscheme'], title:'Government Schemes', url:OFFICIAL.myscheme, answer:'myScheme पर केंद्र और राज्य सरकार की योजनाएँ खोजी जा सकती हैं।'},
  {keys:['epfo','pf','uan'], title:'EPFO / PF', url:OFFICIAL.epfo, answer:'EPFO portal पर UAN, PF और employee services उपलब्ध हैं।'}
];

const AI_STOP = new Set(['का','के','की','में','और','को','से','पर','क्या','कैसे','कहाँ','है','हैं','मुझे','चाहिए','बताओ','बताइए','करना','करवाना','online','सेवा','service','please','the','for','how','what','where']);
let aiHistory = [];

function aiTokens(q){
  return q.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,' ').split(/\s+/)
    .filter(w=>w.length>1&&!AI_STOP.has(w));
}
function scoreText(q,text){
  const qt=aiTokens(q),t=text.toLowerCase(); let score=0;
  for(const w of qt){if(t.includes(w))score+=w.length>=5?3:1;}
  return score;
}
function aiAddMessage(role,text){
  const log=document.getElementById('aiChatLog'); if(!log)return;
  const div=document.createElement('div');
  div.className='ai-msg '+role;
  div.innerHTML=role==='user'
    ? `<b>आप</b><div>${escapeHtml(text)}</div>`
    : `<b>Vikas CSC AI</b><div>${escapeHtml(text).replace(/\n/g,'<br>')}</div>`;
  log.appendChild(div); log.scrollTop=log.scrollHeight;
}
function clearAIChat(){
  aiHistory=[]; const log=document.getElementById('aiChatLog'); if(log)log.innerHTML='';
  aiAddMessage('assistant','नमस्कार! अपना सवाल लिखिए या 🎙️ दबाकर बोलिए।');
}
function stopAISpeech(){if('speechSynthesis' in window)window.speechSynthesis.cancel();}
function localAI(q){
  const n=q.toLowerCase();
  if(/^(नमस्ते|hello|hi|हाय|hey)\b/.test(n)) return {title:'Vikas CSC AI',text:'नमस्ते! मैं Vikas CSC AI हूँ। आप सेवा, योजना या सामान्य सवाल पूछ सकते हैं।'};
  if(/(पता|address|location|लोकेशन)/.test(n)) return {title:'हमारा पता',text:'Vikas Chaurasiya CSC Jan Sewa Kendra, ग्राम व पोस्ट – मुसहरा, तहसील – मेहदावल, जनपद – संत कबीर नगर, उत्तर प्रदेश – 272154।',url:'https://www.google.com/maps/search/?api=1&query=27.063557%2C83.123799'};
  if(/(फोन|मोबाइल|contact|number|नंबर|call|whatsapp)/.test(n)) return {title:'संपर्क',text:'मोबाइल: 7355353841। Call और WhatsApp दोनों विकल्प उपलब्ध हैं।',url:'tel:+917355353841'};
  if(/(फीस|fee|charge|शुल्क|कितना पैसा)/.test(n)) return {title:'शुल्क',text:'सरकारी शुल्क और CSC सेवा शुल्क सेवा के अनुसार अलग हो सकते हैं। वर्तमान शुल्क केंद्र या संबंधित official portal से पुष्टि करें।'};
  let best=[];
  for(const x of services){
    const score=scoreText(q,x.title+' '+x.desc+' '+x.items.map(i=>Array.isArray(i)?i[0]:i.text).join(' '));
    if(score>0)best.push({x,score});
  }
  best.sort((a,b)=>b.score-a.score);
  for(const r of AI_RULES) if(r.keys.some(k=>n.includes(k))) return {title:r.title,text:r.answer,url:r.url};
  if(best.length){
    const x=best[0].x;
    const items=x.items.slice(0,6).map(i=>({text:Array.isArray(i)?i[0]:i.text,url:Array.isArray(i)?i[1]:i.url}));
    return {title:x.title,text:`आपके सवाल के लिए यह सबसे संबंधित सेवा है:\n${x.desc}`,items,url:(x.portals&&x.portals[0]?x.portals[0][1]:OFFICIAL.csc)};
  }
  return {title:'Vikas CSC AI',text:'मैं अभी Free Smart Mode में हूँ। मैं आपकी वेबसाइट की सेवाएँ, official portals, संपर्क और सामान्य CSC जानकारी समझा सकती हूँ।'};
}
function renderAIAnswer(a){
  const answer=document.getElementById('aiAnswer');
  if(!answer)return;
  let html=`<div class="ai-result-title">🤖 ${escapeHtml(a.title||'Ask AI')}</div><div class="ai-result-text">${escapeHtml(a.text||'').replace(/\n/g,'<br>')}</div>`;
  if(a.items?.length)html+='<div class="ai-result-list">'+a.items.map(i=>`<a href="${safeUrl(i.url)}" target="_blank" rel="noopener">${escapeHtml(i.text)} ↗</a>`).join('')+'</div>';
  if(a.url)html+=`<a class="ai-result-link" href="${safeUrl(a.url)}" target="_blank" rel="noopener">🔗 संबंधित official portal खोलें</a>`;
  html+=`<div class="ai-result-actions"><button type="button" onclick="copyAIAnswer()">📋 Copy</button><button type="button" onclick="speakAI(${JSON.stringify(a.text||'')})">🔊 सुनें</button></div>`;
  answer.innerHTML=html;
}
function copyAIAnswer(){
  const text=document.getElementById('aiAnswer')?.innerText||'';
  navigator.clipboard?.writeText(text).then(()=>{}).catch(()=>{});
}
async function askSiteAI(){
  const input=document.getElementById('aiQuestion'), answer=document.getElementById('aiAnswer');
  const q=(input?.value||'').trim(); if(!q){answer.innerHTML='<b>अपना सवाल लिखिए या 🎙️ से बोलिए।</b>';return;}
  aiAddMessage('user',q); input.value='';
  answer.innerHTML='<div class="ai-thinking">🤖 सोच रही हूँ…</div>';
  let a=null;

  // Optional server endpoint. It is safe to use if you later deploy a backend.
  try{
    const r=await fetch(AI_API_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({message:q,language:document.getElementById('aiLanguage')?.value||'hi-IN',
      history:aiHistory.slice(-8),context:'Vikas CSC Jan Sewa Kendra, Musahra, Sant Kabir Nagar, Uttar Pradesh',services})});
    if(r.ok){const j=await r.json();if(j?.answer)a={title:j.title||'Ask AI',text:j.answer,url:j.url,items:j.items};}
  }catch(e){}

  // Optional Gemini test mode. Keep the key OUT of a public repository for production.
  if(!a && GEMINI_API_KEY){
    try{
      const prompt=`You are Vikas CSC AI for Vikas Chaurasiya CSC Jan Sewa Kendra, Musahra, Sant Kabir Nagar, Uttar Pradesh.
Reply in the user's language. Be concise, helpful and safe. Do not invent government fees, legal/medical facts, or official procedures.
Use the supplied website services when relevant. If unsure, say so and point to the official portal.
User: ${q}
Recent chat: ${JSON.stringify(aiHistory.slice(-8))}
Services: ${JSON.stringify(services)}`;
      const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent`,
        {method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':GEMINI_API_KEY},
        body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:{temperature:.55,maxOutputTokens:900}})});
      const j=await r.json();
      const text=j?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('').trim();
      if(r.ok&&text)a={title:'Ask AI',text};
    }catch(e){}
  }

  if(!a)a=localAI(q);
  aiHistory.push({role:'user',content:q},{role:'assistant',content:a.text});
  renderAIAnswer(a); aiAddMessage('assistant',a.text); speakAI(a.text);
}
function aiQuick(topic){document.getElementById('aiQuestion').value=topic;askSiteAI();}
function toggleAIHelp(){
  const p=document.getElementById('aiHelpPanel'),b=document.querySelector('.ai-float');
  const show=!p.classList.contains('show');
  p.classList.toggle('show',show);p.setAttribute('aria-hidden',String(!show));b.setAttribute('aria-expanded',String(show));
  if(show){stopServiceMotion();if(!document.getElementById('aiChatLog')?.children.length)clearAIChat();}
}
function startAIListen(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){alert('इस browser में voice input उपलब्ध नहीं है।');return;}
  const r=new SR(),lang=document.getElementById('aiLanguage')?.value||'hi-IN';
  r.lang=lang;r.interimResults=false;r.maxAlternatives=1;
  r.onstart=()=>document.getElementById('aiVoiceBtn')?.classList.add('listening');
  r.onend=()=>document.getElementById('aiVoiceBtn')?.classList.remove('listening');
  r.onerror=()=>document.getElementById('aiVoiceBtn')?.classList.remove('listening');
  r.onresult=e=>{document.getElementById('aiQuestion').value=e.results[0][0].transcript;askSiteAI();};
  r.start();
}
function speakAI(text){
  if(!('speechSynthesis' in window))return;
  stopAISpeech();
  const u=new SpeechSynthesisUtterance(String(text).replace(/\*\*/g,''));
  u.lang=document.getElementById('aiLanguage')?.value||'hi-IN';u.rate=.95;u.pitch=1.05;
  window.speechSynthesis.speak(u);
}

// ===== FREE UPI QR =====
const VIKAS_UPI_IDS=['vikas3841@nyes','vikas.1240@superyes'];
function generateUPI(){
  const select=document.getElementById('upiId'), name=document.getElementById('upiName'), qr=document.getElementById('qrcode'), err=document.getElementById('upiError');
  if(!select||!qr)return;
  const pa=select.value;
  if(!VIKAS_UPI_IDS.includes(pa)){if(err)err.textContent='UPI account उपलब्ध नहीं है।';return;}
  const pn=(name?.value||'Vikas CSC Jan Sewa Kendra').trim()||'Vikas CSC Jan Sewa Kendra';
  const upi=`upi://pay?pa=${encodeURIComponent(pa)}&pn=${encodeURIComponent(pn)}&cu=INR`;
  qr.innerHTML='';
  if(window.QRCode)new QRCode(qr,{text:upi,width:220,height:220,correctLevel:QRCode.CorrectLevel.M});
  else qr.textContent='QR library load नहीं हुई।';
  const link=document.getElementById('upiLink');
  if(link){link.href=upi;link.classList.remove('hidden');}
  const pay=document.getElementById('payByUPI');
  if(pay){pay.href=upi;pay.classList.remove('hidden');}
  if(err)err.textContent='';
}
function payByUPI(){
  const a=document.getElementById('payByUPI');
  if(a?.href && a.href.startsWith('upi://')) window.location.href=a.href;
  else generateUPI();
}

// ===== Service movement: ONE 3x3 grid, reversible 360-style back-and-forth =====
 ONE 3x3 grid, reversible 360-style back-and-forth =====
let serviceTimer=null, serviceAnim=null, serviceDragging=false, serviceIntent=null, serviceX=0, serviceStartX=0, serviceStartY=0, serviceBaseX=0, serviceLastActivity=Date.now(), serviceMaxShift=0, serviceDirection=-1, serviceAutoPaused=false;
function serviceViewport(){return document.getElementById('serviceViewport')}
function computeMaxShift(){const vp=serviceViewport();if(!vp)return 0;return Math.max(70,Math.round(vp.clientWidth*0.12));}
function applyServiceX(x){const grid=document.getElementById('serviceGrid');if(!grid)return;serviceMaxShift=computeMaxShift();serviceX=Math.max(-serviceMaxShift,Math.min(0,x));grid.style.transform=`translate3d(${serviceX}px,0,0)`;}
function stopServiceMotion(pause=true){if(serviceAnim){cancelAnimationFrame(serviceAnim);serviceAnim=null;}clearTimeout(serviceTimer);serviceTimer=null;serviceAutoPaused=pause;serviceLastActivity=Date.now();}
function scheduleServiceMotion(){clearTimeout(serviceTimer);serviceTimer=setTimeout(()=>{serviceAutoPaused=false;startServiceAuto();},6000);}
function startServiceAuto(){if(serviceDragging||document.visibilityState==='hidden'||document.getElementById('serviceSearch')?.value.trim())return;serviceMaxShift=computeMaxShift();if(serviceMaxShift<=1)return;serviceAutoPaused=false;let last=performance.now();const speed=52;function step(t){if(serviceDragging||serviceAutoPaused||document.visibilityState==='hidden'||document.getElementById('serviceSearch')?.value.trim()){serviceAnim=null;return;}const dt=Math.min(40,t-last);last=t;let next=serviceX+serviceDirection*speed*(dt/1000);if(next<=-serviceMaxShift){next=-serviceMaxShift;serviceDirection=1;}else if(next>=0){next=0;serviceDirection=-1;}applyServiceX(next);serviceAnim=requestAnimationFrame(step);}if(!serviceAnim)serviceAnim=requestAnimationFrame(step);}
function resetServiceMotion(){stopServiceMotion(false);serviceDragging=false;serviceIntent=null;serviceDirection=-1;applyServiceX(0);startServiceAuto();}
function initServiceTouch(){const vp=serviceViewport(),grid=document.getElementById('serviceGrid');if(!vp||!grid)return;const onStart=e=>{stopServiceMotion(true);serviceDragging=false;serviceIntent=null;serviceStartX=e.clientX;serviceStartY=e.clientY;serviceBaseX=serviceX;serviceLastActivity=Date.now();};const onMove=e=>{const dx=e.clientX-serviceStartX,dy=e.clientY-serviceStartY;if(!serviceIntent&&Math.max(Math.abs(dx),Math.abs(dy))>8)serviceIntent=Math.abs(dx)>Math.abs(dy)?'x':'y';if(serviceIntent==='x'){serviceDragging=true;e.preventDefault();applyServiceX(serviceBaseX+dx);}};const onEnd=()=>{if(serviceDragging){serviceDragging=false;serviceLastActivity=Date.now();}serviceIntent=null;scheduleServiceMotion();};grid.addEventListener('pointerdown',onStart,{passive:true});grid.addEventListener('pointermove',onMove,{passive:false});grid.addEventListener('pointerup',onEnd);grid.addEventListener('pointercancel',onEnd);vp.addEventListener('mouseenter',()=>stopServiceMotion(true));vp.addEventListener('mouseleave',()=>scheduleServiceMotion());vp.addEventListener('wheel',()=>{stopServiceMotion(true);scheduleServiceMotion();},{passive:true});}

function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'})}
function boot(){document.getElementById('year').textContent=new Date().getFullYear();renderServices();renderTicker();initServiceTouch();resetServiceMotion();window.addEventListener('resize',()=>{computeMaxShift();applyServiceX(serviceX);});document.addEventListener('visibilitychange',()=>{if(document.hidden)stopServiceMotion();else scheduleServiceMotion();});window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();}});document.getElementById('serviceModal').addEventListener('click',e=>{if(e.target.id==='serviceModal')closeModal()});document.getElementById('serviceSearch').addEventListener('input',()=>{stopServiceMotion();renderServices();if(!document.getElementById('serviceSearch').value.trim())scheduleServiceMotion();});}
boot();
