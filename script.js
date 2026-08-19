const DEFAULT_SERVICES = [
 {icon:"🏦",title:"बैंकिंग एवं आधार सेवाएँ",desc:"दैनिक डिजिटल और नागरिक सेवाएँ एक ही जगह।",items:["AEPS बैंकिंग – जमा / निकासी","बैलेंस, मिनी स्टेटमेंट","वृद्धावस्था / विधवा / दिव्यांग पेंशन","जीवन प्रमाण पत्र (Jeevan Pramaan)","आधार में पता अपडेट","आयुष्मान कार्ड – नया / पात्रता जाँच","ABHA Health ID"]},
 {icon:"🚗",title:"RTO / वाहन सेवाएँ",desc:"ड्राइविंग लाइसेंस और वाहन संबंधी सेवाएँ।",items:["ड्राइविंग लाइसेंस – नया / रिन्यू / डुप्लीकेट","वाहन ट्रांसफर, परमिट, फिटनेस","HSRP नंबर प्लेट – बुकिंग + ट्रैकिंग","फैंसी नंबर प्लेट (पसंदीदा नंबर)","e-Challan भुगतान – ऑनलाइन","वाहन बीमा / FASTag","जिले: संत कबीर नगर, सिद्धार्थनगर, गोरखपुर, महाराजगंज, बस्ती"]},
 {icon:"📜",title:"प्रमाण पत्र एवं सरकारी दस्तावेज",desc:"सरकारी प्रमाण-पत्र और ऑनलाइन दस्तावेजी सेवाएँ।",items:["आय / जाति / निवास / राशन कार्ड","खतौनी (प्रमाणित / अभिलेख)","भू-नक्शा / भूमि नक्शा","विवाह पंजीकरण","चरित्र प्रमाण पत्र (Police Verification)","UDID कार्ड / दिव्यांग प्रमाण पत्र","e-District – सभी प्रमाण पत्र"]},
 {icon:"📊",title:"टैक्स / व्यवसाय सेवाएँ",desc:"व्यापार, टैक्स और पंजीकरण संबंधी ऑनलाइन काम।",items:["GST रजिस्ट्रेशन – नया / संशोधन","GST फाइलिंग – मासिक / वार्षिक","ITR फाइलिंग – सभी आय वर्ग","FSSAI लाइसेंस – नया / रिन्यूअल","MSME / उद्यम रजिस्ट्रेशन","DSC / डिजिटल सिग्नेचर"]},
 {icon:"🎓",title:"शिक्षा / छात्र सेवाएँ",desc:"छात्रों और शिक्षा से जुड़ी सुविधाएँ।",items:["छात्रवृत्ति आवेदन – राज्य / केंद्र","ABC ID / APAAR","बोर्ड / यूनिवर्सिटी रिजल्ट","कॉलेज प्रवेश फॉर्म"]},
 {icon:"✈️",title:"यात्रा / टिकटिंग सेवाएँ",desc:"रेल, बस, फ्लाइट और पासपोर्ट सेवाएँ।",items:["रेलवे टिकट – PNR स्टेटस","बस टिकट (रीजनल / इंटरस्टेट)","फ्लाइट टिकट (Domestic / International)","पासपोर्ट सेवाएँ – PSK / ऑनलाइन"]},
 {icon:"🌾",title:"कृषि व किसान सेवाएँ",desc:"किसानों के लिए डिजिटल सहायता।",items:["किसान पंजीकरण","PM-Kisan स्थिति / सुधार","कृषि सहायता / मुद्रा प्रशिक्षण","KCC लोन आवेदन","MPACS समिति सेवाएँ"]},
 {icon:"🧰",title:"अन्य आवश्यक सेवाएँ",desc:"रोजमर्रा की कई ऑनलाइन सुविधाएँ।",items:["सभी ऑनलाइन फॉर्म","फोटो / फोटो कॉपी / स्कैन / PDF","Resume (CV) बनाना (Excel/Word)","मोबाइल / DTH रिचार्ज","बिजली बिल भुगतान / नया कनेक्शन","ई-श्रम / श्रम कार्ड","उज्ज्वला – LPG कनेक्शन","EPFO – UAN / PF Withdrawal","Airtel / Jio नई SIM","Cyber Cafe सभी सेवाएँ","केंद्र व राज्य की सभी योजनाएँ"]},
 {icon:"🚀",title:"नई एवं एडवांस सेवाएँ (2026–2027)",desc:"नई डिजिटल सुविधाएँ समय के साथ जोड़ी जा सकती हैं।",items:["PAN कार्ड – नया / सुधार","DigiLocker दस्तावेज सेवाएँ","eSign – डिजिटल हस्ताक्षर","NPS / APY पेंशन सेवाएँ","Ayushman 2.0 & Health Services","PM Vishwakarma योजना","Skill India / रोजगार पंजीकरण","GeM Seller Registration सहायता","Tele-Law – कानूनी सहायता","Insurance – Life / Health / Motor","e-Shram 2.0 अपडेट","CSC के नए G2C / B2C डिजिटल सेवाएँ","आधार आधारित e-KYC व वेरिफिकेशन","ऑनलाइन प्रीपेड / अन्य कोई भी नई डिजिटल सेवा"]}
];

let services = JSON.parse(localStorage.getItem("vikas_csc_services") || "null") || DEFAULT_SERVICES;
let isAdmin = false;

function renderServices(){
  const grid = document.getElementById("serviceGrid");
  const q = (document.getElementById("serviceSearch").value || "").toLowerCase().trim();
  const filtered = services.filter(s => (s.title+" "+s.desc+" "+s.items.join(" ")).toLowerCase().includes(q));
  grid.innerHTML = filtered.map((s,i)=>`
    <article class="service-card" onclick='openService(${JSON.stringify(s).replace(/'/g,"&#39;")})'>
      <div class="service-icon">${s.icon}</div>
      <h3>${escapeHtml(s.title)}</h3>
      <p>${escapeHtml(s.desc)}</p>
      <ul>${s.items.slice(0,6).map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
      ${s.items.length>6?'<small style="color:#ffd65a">+ और सेवाएँ…</small>':''}
    </article>`).join("") || '<div class="service-card"><h3>कोई सेवा नहीं मिली</h3><p>दूसरा शब्द खोजकर देखें।</p></div>';
}

function escapeHtml(str){return String(str).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function openService(s){
 document.getElementById("modalIcon").textContent=s.icon;
 document.getElementById("modalTitle").textContent=s.title;
 document.getElementById("modalDescription").textContent=s.desc;
 document.getElementById("modalItems").innerHTML=s.items.map(x=>`<li>${escapeHtml(x)}</li>`).join("");
 document.getElementById("serviceModal").classList.add("show");
}
function closeModal(){document.getElementById("serviceModal").classList.remove("show")}
function openAdmin(){document.getElementById("adminModal").classList.add("show")}
function closeAdmin(){document.getElementById("adminModal").classList.remove("show")}
function adminLogin(){
 const pass=document.getElementById("adminPass").value;
 if(pass==="Vikas@2026"){
   isAdmin=true;document.getElementById("loginView").classList.add("hidden");document.getElementById("adminView").classList.remove("hidden");
 }else alert("गलत Admin Password");
}
function adminLogout(){isAdmin=false;document.getElementById("loginView").classList.remove("hidden");document.getElementById("adminView").classList.add("hidden");document.getElementById("adminPass").value=""}
function addService(){
 if(!isAdmin)return;
 const title=document.getElementById("newTitle").value.trim();
 const icon=document.getElementById("newIcon").value.trim()||"⭐";
 const desc=document.getElementById("newDesc").value.trim()||"नई ऑनलाइन सेवा";
 const items=document.getElementById("newItems").value.split("\n").map(x=>x.trim()).filter(Boolean);
 if(!title || !items.length){alert("Title और कम-से-कम एक Service लिखें.");return}
 services.push({icon,title,desc,items});
 localStorage.setItem("vikas_csc_services",JSON.stringify(services));
 ["newTitle","newDesc","newItems"].forEach(id=>document.getElementById(id).value="");
 renderServices();alert("नई Service जोड़ दी गई।");
}
function resetServices(){
 if(confirm("क्या आप सभी custom services हटाकर default services वापस लाना चाहते हैं?")){
   services=DEFAULT_SERVICES;localStorage.removeItem("vikas_csc_services");renderServices();
 }
}
function generateUPI(){
 const id=document.getElementById("upiId").value.trim(vikas3841@nyes);
 const name=document.getElementById("upiName").value.trim()||"Vikas CSC";
 const err=document.getElementById("upiError"),box=document.getElementById("qrcode"),link=document.getElementById("upiLink");
 if(!id || !id.includes("@")){err.textContent="कृपया सही UPI ID डालें, जैसे name@upi";return}
 err.textContent="";
 const upi=`upi://pay?pa=${encodeURIComponent(id)}&pn=${encodeURIComponent(name)}&cu=INR`;
 box.innerHTML="";
 new QRCode(box,{text:upi,width:200,height:200,correctLevel:QRCode.CorrectLevel.H});
 link.href=upi;link.classList.remove("hidden");
}
function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}
document.getElementById("year").textContent=new Date().getFullYear();
renderServices();
window.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeAdmin()}});
