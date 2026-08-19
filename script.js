const services=[
{name:'Aadhaar Services',cat:'Government',icon:'🪪',desc:'Aadhaar से जुड़े ऑनलाइन कार्य और सहायता'},
{name:'PAN Card',cat:'Government',icon:'💳',desc:'PAN आवेदन, सुधार और ऑनलाइन सहायता'},
{name:'Ayushman Bharat',cat:'Government',icon:'🏥',desc:'Ayushman कार्ड संबंधी सहायता'},
{name:'PM Kisan',cat:'Government',icon:'🌾',desc:'PM-Kisan पंजीकरण और संबंधित कार्य'},
{name:'e-Shram Card',cat:'Government',icon:'👷',desc:'e-Shram पंजीकरण और सहायता'},
{name:'Voter ID',cat:'Government',icon:'🗳️',desc:'मतदाता पहचान पत्र आवेदन/सुधार'},
{name:'Income / Caste / Residence',cat:'Government',icon:'📜',desc:'आय, जाति और निवास प्रमाण-पत्र सहायता'},
{name:'Birth / Death Certificate',cat:'Government',icon:'📄',desc:'जन्म एवं मृत्यु प्रमाण-पत्र संबंधी कार्य'},
{name:'Online Forms',cat:'Online Form',icon:'📝',desc:'सरकारी/शैक्षणिक ऑनलाइन फॉर्म भरना'},
{name:'Bill Payment',cat:'Banking & Payment',icon:'💡',desc:'बिजली, पानी और अन्य बिल भुगतान'},
{name:'Mobile Recharge',cat:'Banking & Payment',icon:'📱',desc:'मोबाइल और DTH रिचार्ज'},
{name:'Banking / BC Services',cat:'Banking & Payment',icon:'🏦',desc:'उपलब्ध बैंकिंग/BC सेवाओं में सहायता'},
{name:'Insurance',cat:'Banking & Payment',icon:'🛡️',desc:'बीमा संबंधी ऑनलाइन सहायता'},
{name:'Pension Services',cat:'Government',icon:'👴',desc:'पेंशन से जुड़े ऑनलाइन कार्य'},
{name:'Railway Ticket',cat:'Online Form',icon:'🚆',desc:'रेल टिकट संबंधी ऑनलाइन सहायता'},
{name:'Passport Services',cat:'Government',icon:'🌐',desc:'पासपोर्ट आवेदन संबंधी सहायता'},
{name:'Print / Scan',cat:'Document',icon:'🖨️',desc:'प्रिंट, स्कैन और दस्तावेज़ सेवाएँ'},
{name:'Photo / Typing',cat:'Document',icon:'⌨️',desc:'फोटो, टाइपिंग और डिजिटल दस्तावेज़'},
];
let added=JSON.parse(localStorage.getItem('vikas_csc_services')||'[]');
function all(){return [...services,...added]}
function render(filter=''){const grid=document.getElementById('serviceGrid');const q=filter.trim().toLowerCase();const list=all().filter(s=>(s.name+' '+s.cat+' '+s.desc).toLowerCase().includes(q));grid.innerHTML=list.map((s,i)=>`<article class="service-card"><div class="service-icon">${s.icon||'🧾'}</div><h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.desc||'Digital service')}</p><span class="tag">${escapeHtml(s.cat||'Other')}</span></article>`).join('');document.getElementById('emptyState').hidden=list.length!==0}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
async function sha256(s){const b=new TextEncoder().encode(s);const h=await crypto.subtle.digest('SHA-256',b);return [...new Uint8Array(h)].map(x=>x.toString(16).padStart(2,'0')).join('')}
const modal=document.getElementById('adminModal');
document.getElementById('adminOpen').onclick=()=>{modal.classList.add('show');modal.setAttribute('aria-hidden','false')};
document.getElementById('adminClose').onclick=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true')};
document.getElementById('serviceSearch').oninput=e=>render(e.target.value);
document.getElementById('copyUpi').onclick=async()=>{await navigator.clipboard.writeText('vikas3841@nyes');document.getElementById('copyUpi').textContent='कॉपी हो गया ✓';setTimeout(()=>document.getElementById('copyUpi').textContent='UPI ID कॉपी करें',1600)};
document.getElementById('loginBtn').onclick=async()=>{const pass=document.getElementById('adminPassword').value;const ok=(await sha256(pass))===window.ADMIN_HASH;const msg=document.getElementById('loginMsg');if(ok){document.getElementById('loginView').hidden=true;document.getElementById('adminView').hidden=false;msg.textContent=''}else{msg.textContent='गलत password।';document.getElementById('adminPassword').value=''}};
document.getElementById('addService').onclick=()=>{const name=document.getElementById('newName').value.trim();if(!name){document.getElementById('addMsg').textContent='Service name डालें।';return}added.push({name,cat:document.getElementById('newCat').value,icon:document.getElementById('newIcon').value.trim()||'🧾',desc:'नई जोड़ी गई सेवा'});localStorage.setItem('vikas_csc_services',JSON.stringify(added));render(document.getElementById('serviceSearch').value);document.getElementById('newName').value='';document.getElementById('newIcon').value='';document.getElementById('addMsg').textContent='Service जोड़ दी गई ✓'};
document.getElementById('logoutBtn').onclick=()=>{document.getElementById('adminView').hidden=true;document.getElementById('loginView').hidden=false;document.getElementById('adminPassword').value=''};
render();
