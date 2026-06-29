var USERS = {
  'msdalumpines':{pw:'900591',role:'manager',name:'Marvin S. Dalumpines',area:'All Areas',init:'MD',email:'msdalumpines@virginiafood.com.ph'},
  'brmselim':    {pw:'901439',role:'supervisor',name:'B.R.M. Selim',area:'Mindanao',init:'BS',email:'brmselim@virginiafood.com.ph'},
  'kas1':        {pw:'kas2024',role:'kas',name:'KAS User',area:'All Areas',init:'KA',email:'kas@virginiafood.com.ph'},
  'aorteza':     {pw:'904361',role:'tms',name:'Airen C. Orteza',area:'Ozamiz',init:'AO',email:'vfitrademarketingozamiz@gmail.com'},
  'mggumapon':   {pw:'904959',role:'tms',name:'Mary Gleezel Gumapon',area:'Mindanao',init:'MG',email:'mggumapon.vfitms@gmail.com'},
  'hagimal':     {pw:'903280',role:'tms',name:'Hazel Ann Gimal',area:'Mindanao',init:'HG',email:'hazelann369@gmail.com'},
  'jmlaluna':    {pw:'904478',role:'tms',name:'Joana Marie Laluna',area:'Mindanao',init:'JL',email:'jmlaluna.gmcitms@gmail.com'},
  'aidaaca':     {pw:'904820',role:'tms',name:'Alyanna Isabelle Daaca',area:'Mindanao',init:'AD',email:'daacaalyanna.gmcitms@gmail.com'},
  'afcampos':    {pw:'906102',role:'tms',name:'Angelica Flor Campos',area:'Mindanao',init:'AC',email:'afvcampos28@gmail.com'},
  'pphalud':     {pw:'905730',role:'tms',name:'Perlilac P. Halud',area:'Mindanao',init:'PH',email:'lachalud26@gmail.com'},
  'ammundala':   {pw:'904918',role:'tms',name:'Angelie Mae Mundala',area:'Mindanao',init:'AM',email:'amguape.abcd@gmail.com'},
  'mmligaray':   {pw:'904643',role:'tms',name:'Marianne M. Ligaray',area:'Mindanao',init:'ML',email:'ligaraymariane31@gmail.com'},
  'vcplena':     {pw:'904896',role:'tms',name:'Vaelia Cassandra T. Plena',area:'Mindanao',init:'VP',email:'vaeliacassandrap@gmail.com'},
  'fksandigan':  {pw:'903203',role:'tms',name:'Fatima K. Sandigan',area:'Davao',init:'FS',email:'vfidavaoevents@yahoo.com'},
  'ckavasquez':  {pw:'905821',role:'tms',name:'Caryl Key A. Vasquez',area:'Cebu',init:'CV',email:'ckavasquez@virginiafood.com.ph'},
  'hmjopog':     {pw:'905274',role:'tms',name:'Hazel Marie Joy M. Opog',area:'Cebu',init:'HO',email:'hmjmopog@vigriniafood.com.ph'},
  'jmbfale':     {pw:'904684',role:'tms',name:'Jezza Mae B. Fale',area:'Cebu',init:'JF',email:'jmbfale@virginiafood.com.ph'},
  'raescobar':   {pw:'905342',role:'tms',name:'Rona A. Escobar',area:'Cebu',init:'RE',email:'raescobar@virginiafood.com.ph'},
  'fddaclan':    {pw:'906237',role:'tms',name:'Fiona D. Daclan',area:'Cebu',init:'FD',email:'fddaclan@virginiafood.com.ph'},
  'jgjungco':    {pw:'905343',role:'tms',name:'Jesiel G. Jungco',area:'Cebu',init:'JJ',email:'jgjungco@virginiafood.com.ph'},
  'cgenrique':   {pw:'904965',role:'tms',name:'Charlie G. Enrique',area:'Cebu',init:'CE',email:'cgenrique@gmci.com.ph'},
  'mtgravata':   {pw:'905465',role:'tms',name:'Mikaella T. Gravata',area:'Cebu',init:'MG',email:'mtgravata@virginiafood.com.ph'},
  'mlfmayner':   {pw:'905825',role:'tms',name:'Ma. Lovely F. Mayner',area:'Cebu',init:'LM',email:'mlfmayner@gmci.com.ph'},
  'jgfontanilla':{pw:'904560',role:'tms',name:'Jerome G. Fontanilla',area:'Cebu',init:'JF',email:'jgfontanilla@virginiafood.com.ph'},
  'gcpasignace': {pw:'903898',role:'tms',name:'Gelli C. Pasignace',area:'Cebu',init:'GP',email:'gcpasignace@virginiafood.com.ph'}
};

var CL_SECTIONS=[
  {id:1,title:'SKU Completeness & Availability',items:['All required SKUs present','No critical Out of Stocks','Correct SKUs per channel','Within expiry window','Packaging in good condition']},
  {id:2,title:'Product Placement – Frozen',items:['Correct freezer location','Virginia grouped together','Proper brand blocking','Hero SKUs at eye level','No competitor blocking','Price tags visible & correct']},
  {id:3,title:'Product Placement – Canned / Shelf',items:['Correct shelf location','Vertical brand blocking','Hero SKUs at eye level','Clean shelves','Accurate price labels']},
  {id:4,title:'Gondola / Shelf Planogram',items:['Approved planogram followed','Correct number of facings','Proper SKU sequence','Virginia space respected','No unauthorized SKUs']},
  {id:5,title:'Promotional Area / Secondary Display',items:['Promo display present','Correct SKUs used','Promo price reflected','Display full & neat','No competitor mixing']},
  {id:6,title:'POSM Compliance',items:['Shelf talkers installed','Wobblers / price cards present','Posters / danglers visible','POSMs clean & updated','Old POSMs removed']},
  {id:7,title:'Store Dominance & Visibility',items:['Visible from main aisle','Multiple brand touchpoints','Strong presence vs competitors','Opportunity for added exposure']}
];

var STORES=[
  {name:'SM City Cebu',area:'Cebu',ch:'MT'},{name:'Ayala Center Cebu',area:'Cebu',ch:'MT'},{name:'Gaisano Capital',area:'Cebu',ch:'MT'},
  {name:'Robinsons Galleria Cebu',area:'Cebu',ch:'MT'},{name:'SM Consolacion',area:'Cebu',ch:'MT'},{name:'Gaisano Fiesta Mall',area:'Cebu',ch:'MT'},
  {name:'Metro Mandaue',area:'Cebu',ch:'MT'},{name:'Robinsons Mandaue',area:'Cebu',ch:'MT'},{name:'SM Seaside City',area:'Cebu',ch:'MT'},
  {name:'Puregold Mandaue',area:'Cebu',ch:'MT'},{name:'Taboan Public Market',area:'Cebu',ch:'GT'},{name:'Carbon Market',area:'Cebu',ch:'GT'},
  {name:'Mandaue Wet Market',area:'Cebu',ch:'GT'},{name:'Lapu-Lapu Public Market',area:'Cebu',ch:'GT'},
  {name:'SM City Davao',area:'Davao',ch:'MT'},{name:'Gaisano Mall Davao',area:'Davao',ch:'MT'},
  {name:'NCCC Mall Davao',area:'Davao',ch:'MT'},{name:'Robinsons Davao',area:'Davao',ch:'MT'},
  {name:'Bankerohan Public Market',area:'Davao',ch:'GT'},{name:'Agdao Public Market',area:'Davao',ch:'GT'},
  {name:'Limketkai Center',area:'Cagayan de Oro',ch:'MT'},{name:'SM City CDO',area:'Cagayan de Oro',ch:'MT'},
  {name:'Gaisano CDO',area:'Cagayan de Oro',ch:'MT'},{name:'CDO Public Market',area:'Cagayan de Oro',ch:'GT'},
  {name:'SM City Ozamiz',area:'Ozamiz',ch:'MT'},{name:'Ozamiz Public Market',area:'Ozamiz',ch:'GT'}
];

var BASE_PROGRAMS=[
  {id:'p1',name:'Giniling Promo – MT Cebu',type:'Promotion',ch:'MT',end:'2026-05-31',target:50,done:34,status:'active',desc:'Consumer promo for Giniling in all MT outlets'},
  {id:'p2',name:'Freezer Dominance Drive',type:'Visibility',ch:'MT+GT',end:'2026-06-30',target:50,done:41,status:'active',desc:'Ensure Virginia freezer dominance across key accounts'},
  {id:'p3',name:'POSM Q2 Rollout',type:'POSM',ch:'MT+GT',end:'2026-06-15',target:40,done:22,status:'active',desc:'Deploy Q2 POSM kit: shelf talkers, wobblers, posters'},
  {id:'p4',name:'GT Visibility Push – Mindanao',type:'Visibility',ch:'GT',end:'2026-06-30',target:40,done:16,status:'active',desc:'Increase Virginia visibility in Mindanao GT accounts'},
  {id:'p5',name:'SKU Expansion – Shelf Ready',type:'Distribution',ch:'GT',end:'2026-07-31',target:60,done:0,status:'upcoming',desc:'New SKU rollout to GT shelf-ready program'}
];

var ACHIEVEMENTS=[
  {ico:'🏆',name:'Store Champion',desc:'Top coverage in a month',pts:200,unlocked:true},
  {ico:'⚡',name:'Speed Checker',desc:'5 checks in one day',pts:100,unlocked:true},
  {ico:'📸',name:'Photo Master',desc:'3+ photos on 10 checks',pts:80,unlocked:true},
  {ico:'🎯',name:'Perfect Week',desc:'All targets hit in a week',pts:150,unlocked:true},
  {ico:'💎',name:'Platinum TMS',desc:'Reach Platinum level',pts:500,unlocked:false},
  {ico:'🔥',name:'30-Day Streak',desc:'Active 30 days straight',pts:300,unlocked:false},
  {ico:'🌟',name:'Dominance King',desc:'100% dominance x5',pts:400,unlocked:false},
  {ico:'🚀',name:'Launch Hero',desc:'Lead 3 new product intros',pts:250,unlocked:false}
];

var LEVELS=[
  {name:'Rookie',min:0,color:'#9CA3AF'},{name:'Field Agent',min:500,color:'#3B82F6'},
  {name:'Trade Warrior',min:1200,color:'#D4952A'},{name:'Gold Specialist',min:2000,color:'#C8202C'},
  {name:'Platinum Elite',min:3500,color:'#7C3AED'}
];

var COLORS=['#C8202C','#9B59B6','#1A7A4A','#D4621A','#1A2540','#D4952A','#3B82F6','#06B6D4','#7C3AED','#DC2626'];

var ACT_TYPES=[
  'Trade Check / Store Visit','POSM Installation / Update','Planogram Reset','Promo Display Setup',
  'Competitor Monitoring','OOS Report & Follow-up','Store Meeting / Negotiation',
  'Sponsorship / Events Sampling',
  'Admin / Report Writing','Team Meeting / Briefing','Training / Coaching','New Product Introduction'
];

var MERIT_PTS={base:50,excellent:150,good:80,fair:30,photos:30,posm:40,planogram:50,promo:60,oos:20,competitor:25,sponsorship:35};
var DEMO_PTS=[1950,1840,1700,1620,1560,1490,1430,1380,1340,1280,1220,1180,1120,1060,1010,970,930,890,850,800,760,710];

var MEM = {};
var S = {
  get: function(k, d) { return (MEM.hasOwnProperty(k)) ? MEM[k] : d; },
  set: function(k, v) {
    if(v === null || v === undefined) { delete MEM[k]; if(window.storage) window.storage.delete(k).catch(function(){}); }
    else { MEM[k] = v; if(window.storage) { try { window.storage.set(k, JSON.stringify(v)).catch(function(){}); } catch(e){} } }
  },
  push: function(k, item) {
    var a = S.get(k, []), na = [item];
    for(var i=0;i<a.length&&i<299;i++) na.push(a[i]);
    S.set(k, na); return na;
  },
  init: function(cb) {
    if(!window.storage) { if(cb) cb(); return; }
    window.storage.list().then(function(res) {
      var keys = (res && res.keys) ? res.keys : [];
      if(keys.length === 0) { if(cb) cb(); return; }
      var rem = keys.length;
      for(var i=0;i<keys.length;i++) {
        (function(key){
          window.storage.get(key).then(function(data){
            if(data && data.value){ try{ MEM[key]=JSON.parse(data.value); }catch(e){} }
            rem--; if(rem<=0 && cb) cb();
          }).catch(function(){ rem--; if(rem<=0 && cb) cb(); });
        })(keys[i]);
      }
    }).catch(function(){ if(cb) cb(); });
  }
};

var SESSION = null, clRating = '', clPhotos = 0, clScores = {}, _cSlot = null;

function today(){ return new Date().toISOString().split('T')[0]; }
function monthKey(){ var d=new Date(); return d.getFullYear()+'-'+(d.getMonth()<9?'0':'')+(d.getMonth()+1); }
function fmtDate(d){ if(!d)return'—'; var dt=new Date((typeof d==='string'?d+' 00:00':d)); return dt.toLocaleDateString('en-PH',{month:'short',day:'numeric',year:'numeric'}); }
function genId(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,5); }
function getLevel(pts){ var l=LEVELS[0]; for(var i=0;i<LEVELS.length;i++) if(pts>=LEVELS[i].min) l=LEVELS[i]; return l; }
function pct(a,b){ return b?Math.round((a/b)*100):0; }
function scoreColor(s){ return s>=85?'pf-green':s>=65?'pf-gold':'pf-red'; }
function ratingBadge(r){ if(!r)return'<span class="text-muted">—</span>'; var m={excellent:'b-green',good:'b-navy',fair:'b-gold',poor:'b-red'}; return'<span class="badge '+(m[r]||'b-navy')+'">'+r.charAt(0).toUpperCase()+r.slice(1)+'</span>'; }
function pb(p,c){ return'<div class="pb"><div class="pf '+c+'" style="width:'+Math.min(100,p)+'%"></div></div>'; }
function mkAva(init,i,sz){ sz=sz||28; return'<div class="ava" style="background:'+COLORS[i%COLORS.length]+';width:'+sz+'px;height:'+sz+'px;font-size:'+Math.floor(sz*.38)+'px">'+init+'</div>'; }
function sd(lbl){ return'<div class="sec-div mb12">'+lbl+'</div>'; }
function fmtDur(ti,to){ if(!ti||!to)return'—'; var p1=ti.split(':'),p2=to.split(':'); var m=(+p2[0]*60+ +p2[1])-(+p1[0]*60+ +p1[1]); if(m<=0)return'—'; var h=Math.floor(m/60),mn=m%60; return h?(h+'h'+(mn?' '+mn+'m':'')):(mn+'m'); }
function gv(id){ var e=document.getElementById(id); return e?(e.value||'').trim():''; }
function esc(v){ return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
function allProgs(){ var cp=S.get('custom_progs',[]); return BASE_PROGRAMS.concat(cp); }
function getMyStores(u){ var ms=S.get('my_stores_'+u,null); if(!ms||ms.length===0) return STORES; var r=[]; for(var i=0;i<STORES.length;i++) for(var j=0;j<ms.length;j++) if(STORES[i].name===ms[j]){r.push(STORES[i]);break;} return r.length?r:STORES; }
function isAdmin(){ return !!(SESSION&&SESSION.role==='manager'); }
function requireAdmin(){
  if(isAdmin()) return true;
  toast('Admin rights required.','err');
  return false;
}

function toast(msg,type,dur){
  dur=dur||3000; var tc=document.getElementById('toast-wrap');
  var el=document.createElement('div'); el.className='toast'+(type?' t-'+type:''); el.textContent=msg;
  tc.appendChild(el);
  setTimeout(function(){el.style.opacity='0';el.style.transform='translateY(10px)';el.style.transition='all .3s';setTimeout(function(){el.remove();},300);},dur);
}
function openModal(html){ document.getElementById('modalBody').innerHTML=html; document.getElementById('modalEl').classList.add('open'); }
function closeModal(){ document.getElementById('modalEl').classList.remove('open'); }
function toggleSB(){ document.getElementById('sidebar').classList.toggle('open'); }

function findUserByEmail(email){
  var em=(email||'').toLowerCase().trim(), keys=Object.keys(USERS);
  for(var i=0;i<keys.length;i++){ var u=USERS[keys[i]]; if(u.email&&u.email.toLowerCase()===em) return[keys[i],u]; }
  return null;
}

function doLogin(){
  var email=document.getElementById('lgEmail').value.trim(), pw=document.getElementById('lgPass').value;
  var err=document.getElementById('lgErr'), found=findUserByEmail(email);
  if(!found||found[1].pw!==pw){ err.style.display='block'; return; }
  err.style.display='none';
  SESSION={username:found[0],name:found[1].name,role:found[1].role,area:found[1].area,init:found[1].init,email:found[1].email};
  S.set('session',SESSION); initApp();
}

function doLogout(){
  S.set('session',null); SESSION=null;
  document.getElementById('appScreen').style.display='none';
  document.getElementById('loginScreen').style.display='flex';
  document.getElementById('lgPass').value='';
}

function showForgot(){
  openModal('<div class="md-hd"><div class="md-title">🔑 Forgot Password</div><button class="xbtn" id="closeForgot">✕</button></div>'
    +'<div class="md-bd"><p class="text-sm text-muted mb16">Enter your registered email to retrieve your credentials.</p>'
    +'<div class="fg mb16"><label class="fl">Email Address</label><input class="fc" type="email" id="fgt_email" placeholder="your@email.com"><div class="err-msg" id="fgt_err">No account found with that email.</div></div>'
    +'<div id="fgt_result"></div></div>'
    +'<div class="md-ft"><button class="btn btn-outline" id="closeForgot2">Close</button><button class="btn btn-primary" id="doForgotBtn">Look Up Account</button></div>');
  document.getElementById('closeForgot').addEventListener('click',closeModal);
  document.getElementById('closeForgot2').addEventListener('click',closeModal);
  document.getElementById('doForgotBtn').addEventListener('click',doForgot);
}

function doForgot(){
  var email=document.getElementById('fgt_email').value.trim();
  var err=document.getElementById('fgt_err'), result=document.getElementById('fgt_result');
  var found=findUserByEmail(email);
  if(!found){err.style.display='block';result.innerHTML='';return;}
  err.style.display='none';
  var uname=found[0], u=found[1];
  var rl={tms:'TM Specialist',supervisor:'TM Supervisor',kas:'Key Account Specialist',lead:'Team Lead',manager:'Manager'};
  result.innerHTML='<div class="notice-g notice mb12">✅ Account found!</div>'
    +'<div class="email-sim"><div class="email-sim-hd">📧 Simulated Recovery Email</div>'
    +'<div style="border-top:1px solid rgba(212,149,42,.3);margin:6px 0;padding-top:6px">Hi <strong>'+u.name+'</strong>,<br><br>'
    +'• <strong>Email:</strong> '+email+'<br>• <strong>Username:</strong> '+uname+'<br>• <strong>Password:</strong> '+u.pw+'<br>• <strong>Role:</strong> '+(rl[u.role]||u.role)+'<br><br>— Virginia Food TM Team</div></div>';
}

function initApp(){
  document.getElementById('loginScreen').style.display='none';
  document.getElementById('appScreen').style.display='flex';
  document.getElementById('tbDate').textContent=new Date().toLocaleDateString('en-PH',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  if(!S.get('acts_'+SESSION.username,[]).length) seedDemo();
  var rn={tms:'TM Specialist',supervisor:'TM Supervisor',kas:'Key Account Specialist',lead:'Team Lead / KAS',manager:'Marketing Manager'};
  document.getElementById('sbRoleVal').textContent=rn[SESSION.role]||SESSION.role;
  var av=document.getElementById('sbAva'); av.textContent=SESSION.init; av.style.background=COLORS[SESSION.username.charCodeAt(0)%COLORS.length];
  document.getElementById('sbName').textContent=SESSION.name;
  document.getElementById('sbEmail').textContent=SESSION.email||SESSION.username;
  buildNav(); nav('dashboard');
}

function seedDemo(){
  var t=today();
  S.set('acts_'+SESSION.username,[
    {id:'d1',date:t,time:'08:00',timeOut:'10:15',type:'Trade Check / Store Visit',store:'SM City Ozamiz',ch:'MT',area:'Ozamiz',rating:'excellent',notes:'Excellent display.',score:94,photos:3,merits:230},
    {id:'d2',date:t,time:'10:30',timeOut:'11:45',type:'POSM Installation / Update',store:'SM City Davao',ch:'MT',area:'Davao',rating:'',notes:'Installed 6 POSMs.',score:0,photos:2,merits:70},
    {id:'d3',date:t,time:'12:30',timeOut:'13:30',type:'OOS Report & Follow-up',store:'Gaisano Mall Davao',ch:'MT',area:'Davao',rating:'fair',notes:'3 SKUs OOS.',score:65,photos:1,merits:20},
    {id:'d4',date:t,time:'14:00',timeOut:'15:30',type:'Trade Check / Store Visit',store:'Limketkai Center',ch:'MT',area:'Cagayan de Oro',rating:'good',notes:'Good execution.',score:88,photos:2,merits:130}
  ]);
}

var NAV_CONFIG={
  tms:[
    {sec:'Overview',items:[{id:'dashboard',lbl:'Dashboard'},{id:'activity',lbl:'Daily Activity'}]},
    {sec:'Planning',items:[{id:'schedule',lbl:'📅 Weekly Schedule'}]},
    {sec:'Field Work',items:[{id:'checklist',lbl:'Trade Checklist'},{id:'stores',lbl:'Store Coverage'},{id:'programs',lbl:'Programs & Promos'}]},
    {sec:'Performance',items:[{id:'merits',lbl:'Merits & Rewards'},{id:'leaderboard',lbl:'Leaderboard'}]},
    {sec:'Reports',items:[{id:'reports',lbl:'My Reports'},{id:'forms',lbl:'Forms Generator'}]},
    {sec:'Account',items:[{id:'settings',lbl:'Account Settings'}]}
  ],
  supervisor:[
    {sec:'Overview',items:[{id:'dashboard',lbl:'Area Dashboard'}]},
    {sec:'Supervision',items:[{id:'tmslookup',lbl:'TMS Activity Lookup'},{id:'stores',lbl:'Store Coverage'}]},
    {sec:'Reports',items:[{id:'reports',lbl:'Area Reports'},{id:'forms',lbl:'Forms Generator'}]},
    {sec:'Account',items:[{id:'settings',lbl:'Account Settings'}]}
  ],
  kas:[
    {sec:'Overview',items:[{id:'dashboard',lbl:'My Dashboard'}]},
    {sec:'Stores',items:[{id:'storesview',lbl:'Store Overview'},{id:'checksview',lbl:'Trade Check Results'}]},
    {sec:'Reports',items:[{id:'forms',lbl:'Forms Generator'}]},
    {sec:'Account',items:[{id:'settings',lbl:'Account Settings'}]}
  ],
  manager:[
    {sec:'Overview',items:[{id:'dashboard',lbl:'Executive Dashboard'},{id:'team',lbl:'All TMS Tracker'}]},
    {sec:'TMS Activity',items:[{id:'tmsmonitor',lbl:'📊 Activity Monitor'},{id:'tmsreports',lbl:'📋 Detailed Reports'}]},
    {sec:'Operations',items:[{id:'stores',lbl:'Store Coverage'},{id:'programs',lbl:'Programs'}]},
    {sec:'Performance',items:[{id:'leaderboard',lbl:'Leaderboard'}]},
    {sec:'Reports',items:[{id:'reports',lbl:'Reports & Export'},{id:'forms',lbl:'Forms Generator'}]},
    {sec:'Admin',items:[{id:'usermgmt',lbl:'User Management'}]},
    {sec:'Account',items:[{id:'settings',lbl:'Account Settings'}]}
  ]
};

var PAGE_TITLES={dashboard:'Dashboard',activity:'Daily Activity Log',checklist:'Trade Check Form',stores:'Store Coverage',programs:'Programs & Promotions',merits:'Merits & Rewards',leaderboard:'Team Leaderboard',reports:'Reports & Export',forms:'Forms Generator',team:'Team Tracker',settings:'Account Settings',usermgmt:'User Management',tmslookup:'TMS Activity Lookup',storesview:'Store Overview',checksview:'Trade Check Results',schedule:'Weekly Schedule',tmsmonitor:'TMS Activity Monitor',tmsreports:'Detailed TMS Reports'};

function buildNav(){
  var cfg=NAV_CONFIG[SESSION.role]||NAV_CONFIG.tms, h='';
  for(var i=0;i<cfg.length;i++){
    h+='<span class="nav-sec-lbl">'+cfg[i].sec+'</span>';
    for(var j=0;j<cfg[i].items.length;j++){var it=cfg[i].items[j];h+='<div class="ni" id="ni-'+it.id+'" data-page="'+it.id+'"><div class="ni-dot"></div>'+it.lbl+'</div>';}
  }
  document.getElementById('sbNav').innerHTML=h;
  var nis=document.querySelectorAll('.ni[data-page]');
  for(var i=0;i<nis.length;i++){(function(ni){ni.addEventListener('click',function(){nav(ni.getAttribute('data-page'));});})(nis[i]);}
  var acts='';
  if(SESSION.role==='tms') acts='<button class="btn btn-outline btn-sm" id="tb-log">+ Log Activity</button><button class="btn btn-primary btn-sm" id="tb-check">New Trade Check</button>';
  else if(SESSION.role==='supervisor') acts='<button class="btn btn-primary btn-sm" id="tb-lookup">🔍 TMS Lookup</button>';
  else if(SESSION.role==='kas') acts='<button class="btn btn-navy btn-sm" id="tb-stores">My Stores</button>';
  else acts='<button class="btn btn-primary btn-sm" id="tb-report">Extract Report</button>';
  document.getElementById('tbActs').innerHTML=acts;
  var tb=function(id,pg){var b=document.getElementById(id);if(b)b.addEventListener('click',function(){nav(pg);});};
  tb('tb-log','activity'); tb('tb-check','checklist'); tb('tb-lookup','tmslookup'); tb('tb-stores','storesview'); tb('tb-report','reports');
}

function nav(id){
  var nis=document.querySelectorAll('.ni');for(var i=0;i<nis.length;i++)nis[i].classList.remove('active');
  var ni=document.getElementById('ni-'+id);if(ni)ni.classList.add('active');
  document.getElementById('pgTitle').textContent=PAGE_TITLES[id]||id;
  document.getElementById('sidebar').classList.remove('open');
  var pw=document.getElementById('pgWrap');pw.innerHTML='';
  var pages={dashboard:pgDashboard,activity:pgActivity,checklist:pgChecklist,stores:pgStores,programs:pgPrograms,merits:pgMerits,leaderboard:pgLeaderboard,reports:pgReports,forms:pgForms,team:pgTeam,settings:pgSettings,usermgmt:pgUserMgmt,tmslookup:pgTMSLookup,storesview:pgStoresView,checksview:pgChecksView,schedule:pgSchedule,tmsmonitor:pgTMSMonitor,tmsreports:pgTMSReports};
  if(pages[id])pages[id](pw);
  window.scrollTo(0,0);
}

function calcMerits(act){
  var pts=0;
  if(act.type==='Trade Check / Store Visit')pts+=MERIT_PTS.base;
  if(act.rating==='excellent')pts+=MERIT_PTS.excellent;else if(act.rating==='good')pts+=MERIT_PTS.good;else if(act.rating==='fair')pts+=MERIT_PTS.fair;
  if(act.photos>=3)pts+=MERIT_PTS.photos;
  if(act.type==='POSM Installation / Update')pts+=MERIT_PTS.posm;
  if(act.type==='Planogram Reset')pts+=MERIT_PTS.planogram;
  if(act.type==='Promo Display Setup')pts+=MERIT_PTS.promo;
  if(act.type==='OOS Report & Follow-up')pts+=MERIT_PTS.oos;
  if(act.type==='Competitor Monitoring')pts+=MERIT_PTS.competitor;
  if(act.type==='Sponsorship / Events Sampling')pts+=MERIT_PTS.sponsorship;
  return pts;
}
function monthPts(u){var acts=S.get('acts_'+u,[]);var s=0;for(var i=0;i<acts.length;i++)if(acts[i].date&&acts[i].date.indexOf(monthKey())===0)s+=acts[i].merits||0;return s;}
function storesCovered(u){var m=monthKey(),acts=S.get('acts_'+u,[]),set={};for(var i=0;i<acts.length;i++)if(acts[i].date&&acts[i].date.indexOf(m)===0&&acts[i].store)set[acts[i].store]=1;return Object.keys(set).length;}
function checksThisMonth(u){var acts=S.get('acts_'+u,[]),n=0;for(var i=0;i<acts.length;i++)if(acts[i].date&&acts[i].date.indexOf(monthKey())===0&&acts[i].type==='Trade Check / Store Visit')n++;return n;}
function lbData(){
  var keys=Object.keys(USERS),res=[],di=0;
  for(var i=0;i<keys.length;i++){var u=USERS[keys[i]];if(u.role!=='tms')continue;res.push({u:keys[i],name:u.name,area:u.area,init:u.init,pts:monthPts(keys[i])||(DEMO_PTS[di]||700)});di++;}
  res.sort(function(a,b){return b.pts-a.pts;});for(var j=0;j<res.length;j++)res[j].rank=j+1;return res;
}

function pgDashboard(el){
  if(SESSION.role==='supervisor'){pgSuperDash(el);return;}
  if(SESSION.role==='kas'){pgKASDash(el);return;}
  var u=SESSION.username,acts=S.get('acts_'+u,[]),td=today(),tdActs=[];
  for(var i=0;i<acts.length;i++)if(acts[i].date===td)tdActs.push(acts[i]);
  var mp=monthPts(u)||1840,sc=storesCovered(u)||12,ch=checksThisMonth(u)||8;
  var days=['Mon','Tue','Wed','Thu','Fri'],cnts=[5,8,6,9,tdActs.length||7],mx=0;
  for(var i=0;i<cnts.length;i++)if(cnts[i]>mx)mx=cnts[i];
  var bars='';
  for(var i=0;i<days.length;i++){var isT=i===4,h=Math.round((cnts[i]/mx)*90);
    bars+='<div class="barcol"><div class="bar-val" style="color:'+(isT?'var(--red)':'var(--muted)')+'">'+cnts[i]+'</div><div class="bar" style="height:'+h+'px;background:'+(isT?'var(--red)':'var(--navy-l)')+'"></div><div class="bar-lbl" style="'+(isT?'color:var(--red);font-weight:700':'')+'">'+(isT?'Today':days[i])+'</div></div>';}
  var rHtml='',shown=Math.min(4,acts.length);
  for(var i=0;i<shown;i++){var a=acts[i],dc=a.rating==='excellent'?'var(--green)':a.rating==='good'?'var(--navy)':a.rating==='fair'?'var(--gold)':'var(--red)';
    rHtml+='<div class="ai"><div class="ai-dot" style="background:'+dc+'"></div><div><div style="font-size:13px">'+a.type+' — <strong>'+(a.store||'—')+'</strong></div><div class="flex gap8"><span class="text-muted text-sm">'+(a.time||'')+' · '+(a.area||'')+'</span><span class="ai-merit">+'+(a.merits||0)+' pts</span></div></div></div>';}
  if(!rHtml)rHtml='<div class="text-muted text-sm">No activities yet today.</div>';
  var progs=allProgs(),progsHtml='';
  for(var i=0;i<progs.length&&progsHtml.split('mb12').length<=4;i++){var p=progs[i];if(p.status!=='active')continue;var pp=pct(p.done,p.target),bc=pp>=70?'pf-green':pp>=40?'pf-gold':'pf-red';progsHtml+='<div class="mb12"><div class="flex jbet text-sm" style="margin-bottom:4px"><span class="f600">'+p.name+'</span><span style="color:var(--red);font-weight:700">'+pp+'%</span></div>'+pb(pp,bc)+'<div class="text-xs text-muted" style="margin-top:3px">Ends '+fmtDate(p.end)+' · '+p.done+'/'+p.target+' stores</div></div>';}
  var teamBlock=SESSION.role!=='tms'?'<div class="notice notice-b mb16">👥 Team view: aggregated data for all TMS</div><div class="g4 mb20"><div class="sc sc-red"><div class="sc-label">Active in Field</div><div class="sc-val">8</div><div class="sc-ico">🟢</div></div><div class="sc sc-green"><div class="sc-label">Team Stores Today</div><div class="sc-val">47</div></div><div class="sc sc-gold"><div class="sc-label">Avg Team Score</div><div class="sc-val">82%</div></div><div class="sc sc-navy"><div class="sc-label">Open Issues</div><div class="sc-val">12</div></div></div>':'';
  var scRows='<div><div class="flex jbet text-sm" style="margin-bottom:4px"><span>SKU Completeness</span><span class="f600">92%</span></div>'+pb(92,'pf-green')+'</div><div><div class="flex jbet text-sm" style="margin-bottom:4px"><span>Frozen Placement</span><span class="f600">88%</span></div>'+pb(88,'pf-navy')+'</div><div><div class="flex jbet text-sm" style="margin-bottom:4px"><span>Planogram</span><span class="f600">79%</span></div>'+pb(79,'pf-gold')+'</div><div><div class="flex jbet text-sm" style="margin-bottom:4px"><span>POSM Compliance</span><span class="f600">84%</span></div>'+pb(84,'pf-red')+'</div><div><div class="flex jbet text-sm" style="margin-bottom:4px"><span>Store Dominance</span><span class="f600">81%</span></div>'+pb(81,'pf-navy')+'</div>';
  var draftNote='',draft=S.get('act_draft_'+SESSION.username,null);
  if(draft&&draft.type)draftNote='<div class="draft-badge mb16">📝 You have an unsaved activity draft.<span><button class="btn btn-xs btn-gold" id="resumeDraft">Resume</button></span></div>';
  el.innerHTML=(SESSION.role==='tms'?'<div class="notice mb16">⚡ 3 store visits scheduled today</div>':'')+draftNote+teamBlock
    +'<div class="g4 mb20"><div class="sc sc-red"><div class="sc-label">Stores This Month</div><div class="sc-val">'+sc+'</div><div class="sc-ico">🏪</div></div><div class="sc sc-gold"><div class="sc-label">Merit Points</div><div class="sc-val">'+mp.toLocaleString()+'</div><div class="sc-ico">⭐</div></div><div class="sc sc-green"><div class="sc-label">Avg Exec. Score</div><div class="sc-val">86%</div><div class="sc-ico">📈</div></div><div class="sc sc-navy"><div class="sc-label">Trade Checks</div><div class="sc-val">'+ch+'</div><div class="sc-ico">✅</div></div></div>'
    +'<div class="g2 mb20"><div class="card"><div class="flex items-center jbet mb12"><div class="card-title" style="margin:0">Weekly Coverage</div><span class="badge b-navy">Week '+Math.ceil(new Date().getDate()/7)+'</span></div><div class="barchart">'+bars+'</div></div>'
    +'<div class="card"><div class="card-title">Execution Scores by Section</div><div class="flex flex-col gap12">'+scRows+'</div></div></div>'
    +'<div class="g2"><div class="card"><div class="flex items-center jbet mb12"><div class="card-title" style="margin:0">Recent Activity</div><button class="btn btn-outline btn-sm" id="viewAllBtn">View All</button></div>'+rHtml+'</div>'
    +'<div class="card"><div class="flex items-center jbet mb12"><div class="card-title" style="margin:0">Active Programs</div><button class="btn btn-outline btn-sm" id="allProgsBtn">All Programs</button></div>'+progsHtml+'</div></div>';
  var rd=document.getElementById('resumeDraft');if(rd)rd.addEventListener('click',function(){nav('activity');});
  var va=document.getElementById('viewAllBtn');if(va)va.addEventListener('click',function(){nav('activity');});
  var ap=document.getElementById('allProgsBtn');if(ap)ap.addEventListener('click',function(){nav('programs');});
}

function pgActivity(el){
  var u=SESSION.username,acts=S.get('acts_'+u,[]),td=today(),tdActs=[];
  for(var i=0;i<acts.length;i++)if(acts[i].date===td)tdActs.push(acts[i]);
  var tdPts=0;for(var i=0;i<tdActs.length;i++)tdPts+=tdActs[i].merits||0;
  var typeOpts='';for(var i=0;i<ACT_TYPES.length;i++)typeOpts+='<option>'+ACT_TYPES[i]+'</option>';
  var storeOpts='';for(var i=0;i<STORES.length;i++)storeOpts+='<option value="'+STORES[i].name+'">';
  var rows='',shown=Math.min(30,acts.length);
  for(var i=0;i<shown;i++){
    var a=acts[i],isT=a.date===td,isSpon=a.type==='Sponsorship / Events Sampling';
    rows+='<tr><td><div style="font-size:11px;font-family:monospace;color:var(--muted)">'+(a.time||'—')+'–'+(a.timeOut||'—')+'</div><div class="text-xs" style="color:'+(isT?'var(--red)':'var(--muted)')+';">'+(isT?'TODAY':fmtDate(a.date))+'</div></td>'
      +'<td><div class="f600 text-sm">'+a.type+'</div>'+(isSpon&&a.eventTitle?'<div class="text-xs text-muted">'+a.eventTitle+'</div>':'')+'</td>'
      +'<td><div class="f600 text-sm">'+(a.store||'—')+'</div><div class="text-xs text-muted">'+(a.area||'')+'</div></td>'
      +'<td><span class="badge '+(a.ch==='MT'?'b-navy':a.ch==='GT'?'b-orange':'b-purple')+'">'+(a.ch||'—')+'</span></td>'
      +'<td class="text-sm">'+fmtDur(a.time,a.timeOut)+'</td><td>'+ratingBadge(a.rating)+'</td>'
      +'<td style="color:var(--gold);font-weight:700">+'+(a.merits||0)+'</td>'
      +'<td><button class="btn btn-xs btn-outline del-act" data-id="'+a.id+'">✕</button></td></tr>';
  }
  if(!rows)rows='<tr><td colspan="8" style="text-align:center;padding:24px;color:var(--muted)">No activities yet.</td></tr>';
  var tdStores={};for(var i=0;i<tdActs.length;i++)if(tdActs[i].store)tdStores[tdActs[i].store]=1;
  var moCount=0;for(var i=0;i<acts.length;i++)if(acts[i].date&&acts[i].date.indexOf(monthKey())===0)moCount++;
  var draft=S.get('act_draft_'+SESSION.username,null);
  var draftNote=draft&&draft.type?'<div class="draft-badge mb12"><span>📝 Unsaved draft restored — '+(draft.type||'')+(draft.store?' @ '+draft.store:'')+'</span><button class="btn btn-xs btn-outline" id="clearDraftBtn">Clear</button></div>':'';
  el.innerHTML='<div class="g4 mb20"><div class="sc sc-red"><div class="sc-label">Activities Today</div><div class="sc-val">'+tdActs.length+'</div></div><div class="sc sc-gold"><div class="sc-label">Points Today</div><div class="sc-val">+'+tdPts+'</div></div><div class="sc sc-green"><div class="sc-label">Stores Today</div><div class="sc-val">'+Object.keys(tdStores).length+'</div></div><div class="sc sc-navy"><div class="sc-label">Total This Month</div><div class="sc-val">'+moCount+'</div></div></div>'
    +sd('Log New Activity')+draftNote
    +'<div class="card mb20">'
    +'<div class="fr"><div class="fg"><label class="fl">Activity Type</label><select class="fc" id="at_type">'+typeOpts+'</select></div><div class="fg"><label class="fl">Store / Outlet</label><input class="fc" type="text" id="at_store" placeholder="e.g. SM City Ozamiz" list="slAct"><datalist id="slAct">'+storeOpts+'</datalist></div><div class="fg" style="flex:.6"><label class="fl">Channel</label><select class="fc" id="at_ch"><option value="MT">MT</option><option value="GT">GT</option><option value="Office">Office</option><option value="Event">Event</option></select></div></div>'
    +'<div class="sponsor-fields" id="sponsorFields" style="display:none"><div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Sponsorship / Event Title</label><input class="fc" type="text" id="at_eventTitle" placeholder="e.g. Fiesta Sampling 2026"></div><div class="fg"><label class="fl">Venue / Outlet Name</label><input class="fc" type="text" id="at_venue" placeholder="e.g. Plaza Rizal, Ozamiz City"></div></div></div>'
    +'<div class="fr"><div class="fg" style="flex:.5"><label class="fl">Date</label><input class="fc" type="date" id="at_date" value="'+td+'"></div><div class="fg" style="flex:.5"><label class="fl">Time In</label><input class="fc" type="time" id="at_in" value="'+new Date().toTimeString().slice(0,5)+'"></div><div class="fg" style="flex:.5"><label class="fl">Time Out</label><input class="fc" type="time" id="at_out"></div><div class="fg"><label class="fl">Area</label><input class="fc" type="text" id="at_area" placeholder="e.g. Ozamiz"></div></div>'
    +'<div class="fr"><div class="fg" style="flex:.6"><label class="fl">Rating</label><select class="fc" id="at_rating"><option value="">— N/A —</option><option value="excellent">⭐ Excellent</option><option value="good">👍 Good</option><option value="fair">📋 Fair</option><option value="poor">⚠️ Poor</option></select></div><div class="fg"><label class="fl">Notes</label><textarea class="fc" id="at_notes" rows="2" placeholder="What was accomplished?"></textarea></div></div>'
    +'<div class="flex jbet items-center flex-wrap gap8"><div class="text-sm text-muted">💡 Excellent trade check = up to <strong style="color:var(--gold)">+230 pts</strong></div><button class="btn btn-primary" id="submitActBtn">Log Activity</button></div></div>'
    +sd('Recent Entries')+'<div class="card oa"><table class="dt" style="min-width:700px"><thead><tr><th>Time</th><th>Type</th><th>Store</th><th>Ch</th><th>Duration</th><th>Rating</th><th>Merits</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div>';
  document.getElementById('submitActBtn').addEventListener('click',submitAct);
  var cd=document.getElementById('clearDraftBtn');if(cd)cd.addEventListener('click',function(){S.set('act_draft_'+SESSION.username,null);nav('activity');});
  if(draft&&draft.type) restoreActDraft(draft);
  var typeSelect=document.getElementById('at_type');
  typeSelect.addEventListener('change',toggleSponsorFields); toggleSponsorFields();
  var draftFields=['at_type','at_store','at_ch','at_date','at_in','at_out','at_area','at_rating','at_notes','at_eventTitle','at_venue'];
  for(var i=0;i<draftFields.length;i++){(function(fid){var el2=document.getElementById(fid);if(el2)el2.addEventListener('input',saveActDraft);if(el2)el2.addEventListener('change',saveActDraft);})(draftFields[i]);}
  var delBtns=document.querySelectorAll('.del-act');
  for(var i=0;i<delBtns.length;i++){(function(btn){btn.addEventListener('click',function(){delAct(btn.getAttribute('data-id'));});})(delBtns[i]);}
}

function toggleSponsorFields(){
  var t=gv('at_type'),sf=document.getElementById('sponsorFields');
  if(sf) sf.style.display=(t==='Sponsorship / Events Sampling')?'':'none';
}
function saveActDraft(){
  var draft={type:gv('at_type'),store:gv('at_store'),ch:gv('at_ch'),date:gv('at_date'),time:gv('at_in'),timeOut:gv('at_out'),area:gv('at_area'),rating:gv('at_rating'),notes:gv('at_notes'),eventTitle:gv('at_eventTitle'),venue:gv('at_venue')};
  S.set('act_draft_'+SESSION.username,draft);
}
function restoreActDraft(draft){
  var fmap={at_type:'type',at_store:'store',at_ch:'ch',at_date:'date',at_in:'time',at_out:'timeOut',at_area:'area',at_rating:'rating',at_notes:'notes',at_eventTitle:'eventTitle',at_venue:'venue'};
  var keys=Object.keys(fmap);
  for(var i=0;i<keys.length;i++){var el=document.getElementById(keys[i]);if(el&&draft[fmap[keys[i]]])el.value=draft[fmap[keys[i]]];}
  toggleSponsorFields();
}
function submitAct(){
  var type=gv('at_type'),store=gv('at_store'),ch=gv('at_ch'),date=gv('at_date'),time=gv('at_in'),timeOut=gv('at_out'),area=gv('at_area'),rating=gv('at_rating'),notes=gv('at_notes'),eventTitle=gv('at_eventTitle'),venue=gv('at_venue');
  if(!date){toast('Please set a date.','err');return;}
  if(!store){toast('Please enter a store/outlet.','err');return;}
  var act={id:genId(),type:type,store:store,ch:ch,date:date,time:time,timeOut:timeOut,area:area,rating:rating,notes:notes,photos:0,merits:0};
  if(eventTitle)act.eventTitle=eventTitle; if(venue)act.venue=venue;
  act.merits=calcMerits(act);
  S.push('acts_'+SESSION.username,act);
  S.set('act_draft_'+SESSION.username,null);
  toast('Logged! '+(act.merits>0?'+'+act.merits+' pts earned.':'Activity saved.'),'ok');
  nav('activity');
}
function delAct(id){
  var k='acts_'+SESSION.username,acts=S.get(k,[]),na=[];
  for(var i=0;i<acts.length;i++)if(acts[i].id!==id)na.push(acts[i]);
  S.set(k,na); toast('Activity removed.'); nav('activity');
}

function pgChecklist(el){
  clRating='';clPhotos=0;clScores={};
  var td=today(),storeOpts='';for(var i=0;i<STORES.length;i++)storeOpts+='<option value="'+STORES[i].name+'">';
  var secHtml='';
  for(var si=0;si<CL_SECTIONS.length;si++){
    var sec=CL_SECTIONS[si],rHtml='';
    for(var idx=0;idx<sec.items.length;idx++){
      rHtml+='<tr><td style="width:36px;text-align:center"><input type="checkbox" class="cl-cb" data-sec="'+sec.id+'" data-idx="'+idx+'" style="width:16px;height:16px;accent-color:var(--red);cursor:pointer"></td>'
        +'<td style="font-size:13px">'+sec.items[idx]+'</td>'
        +'<td><textarea class="fi" rows="1" id="cr_'+sec.id+'_'+idx+'" placeholder="Remarks..."></textarea></td>'
        +'<td><textarea class="fi" rows="1" id="co_'+sec.id+'_'+idx+'" placeholder="Opportunities..."></textarea></td></tr>';
    }
    secHtml+='<div class="mb16" style="border-radius:var(--r);overflow:hidden;border:1px solid var(--border)">'
      +'<div class="sh"><span class="sh-title">'+sec.title+'</span><span class="sh-score"><span id="clsc_'+sec.id+'">0</span>/'+sec.items.length+'</span></div>'
      +'<div class="oa"><table class="clt"><colgroup><col style="width:36px"><col><col style="width:34%"><col style="width:26%"></colgroup>'
      +'<thead><tr><th></th><th>Check Item</th><th>Remarks</th><th>Opportunities</th></tr></thead>'
      +'<tbody>'+rHtml+'</tbody></table></div></div>';
  }
  var photoSlots=[{id:'ph1',lbl:'Shelf / Planogram'},{id:'ph2',lbl:'Freezer Display'},{id:'ph3',lbl:'POSM / Promo Area'},{id:'ph4',lbl:'Competitor Observation'},{id:'ph5',lbl:'Brand Dominance'},{id:'ph6',lbl:'Other / Issues'}];
  var phHtml='';for(var i=0;i<photoSlots.length;i++){var ps=photoSlots[i];phHtml+='<div><div class="fl mb8">'+ps.lbl+'</div><div class="photo-drop" id="pd_'+ps.id+'" data-slot="'+ps.id+'"><div style="font-size:24px;margin-bottom:5px">📸</div><div class="text-sm text-muted">Tap to add photo</div></div></div>';}
  el.innerHTML='<div class="notice mb16">📋 Complete all 7 sections. <strong>Excellent</strong> = <strong style="color:var(--gold)">+200 bonus pts!</strong></div>'
    +'<div class="card mb16"><div class="card-title">Store Information</div>'
    +'<div class="fr"><div class="fg"><label class="fl">Store Name *</label><input class="fc" type="text" id="cl_store" placeholder="e.g. SM City Ozamiz" list="clSL"><datalist id="clSL">'+storeOpts+'</datalist></div>'
    +'<div class="fg" style="flex:.6"><label class="fl">Outlet Type</label><select class="fc" id="cl_outlet"><option value="MT">Modern Trade (MT)</option><option value="GT">General Trade (GT)</option></select></div>'
    +'<div class="fg" style="flex:.6"><label class="fl">Date</label><input class="fc" type="date" id="cl_date" value="'+td+'"></div></div>'
    +'<div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Address / Area</label><input class="fc" type="text" id="cl_addr" placeholder="e.g. Ozamiz City"></div>'
    +'<div class="fg"><label class="fl">TMS Name</label><input class="fc" type="text" id="cl_tms" value="'+SESSION.name+'" readonly></div>'
    +'<div class="fg"><label class="fl">KAS / Team Lead</label><input class="fc" type="text" id="cl_kas" placeholder="Optional"></div></div></div>'
    +secHtml
    +'<div class="card mb16"><div class="card-title">📷 Photo Documentation</div><div class="g3 mb8">'+phHtml+'</div>'
    +'<input type="file" id="cl_file" accept="image/*" style="display:none">'
    +'<div class="text-sm text-muted">Attach 3+ photos for Photo Master bonus (+30 pts)</div></div>'
    +'<div class="card mb16"><div class="card-title">Overall Assessment</div>'
    +'<div class="fr"><div class="fg"><label class="fl">Execution Rating *</label>'
    +'<div class="rg" style="margin-top:4px">'
    +'<button class="rb" id="rb_excellent" type="button">⭐ Excellent</button>'
    +'<button class="rb" id="rb_good" type="button">👍 Good</button>'
    +'<button class="rb" id="rb_fair" type="button">📋 Fair</button>'
    +'<button class="rb" id="rb_poor" type="button">⚠️ Poor</button>'
    +'</div></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Key Wins</label><textarea class="fc" id="cl_wins" rows="2" placeholder="What was executed well?"></textarea></div>'
    +'<div class="fg"><label class="fl">Issues / Action Items</label><textarea class="fc" id="cl_issues" rows="2" placeholder="Issues found..."></textarea></div></div>'
    +'<div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Competitor Observations</label><textarea class="fc" id="cl_comp" rows="2" placeholder="Competitor notes..."></textarea></div>'
    +'<div class="fg"><label class="fl">Recommendations</label><textarea class="fc" id="cl_reco" rows="2" placeholder="Follow-up actions..."></textarea></div></div></div>'
    +'<div class="card" style="background:var(--navy-l);border-color:rgba(26,37,64,.12)">'
    +'<div class="flex items-center jbet flex-wrap gap12">'
    +'<div class="score-box"><div><div class="score-num" id="cl_score">0%</div><div class="text-sm text-muted">Execution Score</div></div>'
    +'<div><div style="font-size:13px;font-weight:700;color:var(--gold)" id="cl_pts">+0 pts estimated</div><div class="text-xs text-muted">score + rating + photos</div></div></div>'
    +'<div class="flex gap8 flex-wrap"><button class="btn btn-outline" id="saveDraftBtn">💾 Save Draft</button><button class="btn btn-primary" id="submitCheckBtn">✅ Submit Trade Check</button></div>'
    +'</div></div>';
  var ratingMap={excellent:'rb-exc',good:'rb-good',fair:'rb-fair',poor:'rb-poor'},ratingIds=['excellent','good','fair','poor'];
  for(var ri=0;ri<ratingIds.length;ri++){
    (function(r){
      var btn=document.getElementById('rb_'+r);if(!btn)return;
      btn.addEventListener('click',function(e){
        e.preventDefault(); clRating=r;
        for(var j=0;j<ratingIds.length;j++){var b=document.getElementById('rb_'+ratingIds[j]);if(b)b.className='rb'+(ratingIds[j]===r?' '+ratingMap[r]:'');}
        clRefresh();
      });
    })(ratingIds[ri]);
  }
  var cbs=document.querySelectorAll('.cl-cb');
  for(var i=0;i<cbs.length;i++){(function(cb){cb.addEventListener('change',function(){clScore(parseInt(cb.getAttribute('data-sec')));});})(cbs[i]);}
  var pdrops=document.querySelectorAll('.photo-drop[data-slot]');
  for(var i=0;i<pdrops.length;i++){(function(pd){pd.addEventListener('click',function(){_cSlot=pd.getAttribute('data-slot');document.getElementById('cl_file').click();});})(pdrops[i]);}
  document.getElementById('cl_file').addEventListener('change',clHandleFile);
  document.getElementById('saveDraftBtn').addEventListener('click',clSaveDraft);
  document.getElementById('submitCheckBtn').addEventListener('click',clSubmit);
  var draft=S.get('cl_draft_'+SESSION.username,null);if(draft)clLoadDraft(draft);
}

function clScore(sid){
  var sec=null;for(var i=0;i<CL_SECTIONS.length;i++)if(CL_SECTIONS[i].id===sid){sec=CL_SECTIONS[i];break;}if(!sec)return;
  var n=0,cbs=document.querySelectorAll('.cl-cb[data-sec="'+sid+'"]');
  for(var i=0;i<cbs.length;i++)if(cbs[i].checked)n++;
  clScores[sid]=n;var el=document.getElementById('clsc_'+sid);if(el)el.textContent=n;clRefresh();
}
function clRefresh(){
  var total=0,max=0;for(var i=0;i<CL_SECTIONS.length;i++){max+=CL_SECTIONS[i].items.length;total+=clScores[CL_SECTIONS[i].id]||0;}
  var p=max?Math.round((total/max)*100):0;
  var se=document.getElementById('cl_score'),pe=document.getElementById('cl_pts');
  if(se)se.textContent=p+'%';
  var est=50;if(p>=90)est+=150;else if(p>=70)est+=80;else if(p>=50)est+=30;if(clPhotos>=3)est+=30;
  if(pe)pe.textContent='+'+est+' pts estimated';
  return{p:p,est:est};
}
function clHandleFile(e){
  var f=e.target.files[0];if(!f||!_cSlot)return;
  var r=new FileReader();
  r.onload=function(ev){
    var d=document.getElementById('pd_'+_cSlot);
    if(d){d.innerHTML='<img src="'+ev.target.result+'" class="photo-preview"><div class="text-xs text-muted" style="margin-top:4px">✓ Photo added</div>';d.style.padding='6px';}
    clPhotos++;clRefresh();
  };
  r.readAsDataURL(f);e.target.value='';
}
function clGetData(){
  var sections=[];
  for(var si=0;si<CL_SECTIONS.length;si++){
    var sec=CL_SECTIONS[si],items=[];
    for(var idx=0;idx<sec.items.length;idx++){
      var cb=document.querySelector('.cl-cb[data-sec="'+sec.id+'"][data-idx="'+idx+'"]');
      var re=document.getElementById('cr_'+sec.id+'_'+idx),oe=document.getElementById('co_'+sec.id+'_'+idx);
      items.push({label:sec.items[idx],checked:cb?cb.checked:false,remark:re?(re.value||'').trim():'',opp:oe?(oe.value||'').trim():''});
    }
    sections.push({id:sec.id,title:sec.title,items:items});
  }
  return{store:gv('cl_store'),outlet:gv('cl_outlet')||'MT',date:gv('cl_date'),addr:gv('cl_addr'),kas:gv('cl_kas'),wins:gv('cl_wins'),issues:gv('cl_issues'),comp:gv('cl_comp'),reco:gv('cl_reco'),rating:clRating,photos:clPhotos,sections:sections};
}
function clSaveDraft(){S.set('cl_draft_'+SESSION.username,clGetData());toast('Draft saved.','ok');}
function clLoadDraft(d){
  var f={cl_store:'store',cl_outlet:'outlet',cl_date:'date',cl_addr:'addr',cl_kas:'kas',cl_wins:'wins',cl_issues:'issues',cl_comp:'comp',cl_reco:'reco'};
  var keys=Object.keys(f);for(var i=0;i<keys.length;i++){var el=document.getElementById(keys[i]);if(el&&d[f[keys[i]]])el.value=d[f[keys[i]]];}
  if(d.sections){
    for(var si=0;si<d.sections.length;si++){
      var sec=d.sections[si];
      for(var idx=0;idx<sec.items.length;idx++){
        var cb=document.querySelector('.cl-cb[data-sec="'+sec.id+'"][data-idx="'+idx+'"]');if(cb)cb.checked=sec.items[idx].checked||false;
        var re=document.getElementById('cr_'+sec.id+'_'+idx);if(re)re.value=sec.items[idx].remark||'';
        var oe=document.getElementById('co_'+sec.id+'_'+idx);if(oe)oe.value=sec.items[idx].opp||'';
      }
    }
    for(var i=0;i<CL_SECTIONS.length;i++)clScore(CL_SECTIONS[i].id);
  }
  if(d.rating){
    clRating=d.rating;
    var ratingMap={excellent:'rb-exc',good:'rb-good',fair:'rb-fair',poor:'rb-poor'},ratingIds=['excellent','good','fair','poor'];
    for(var j=0;j<ratingIds.length;j++){var b=document.getElementById('rb_'+ratingIds[j]);if(b)b.className='rb'+(ratingIds[j]===d.rating?' '+ratingMap[d.rating]:'');}
  }
}
function clSubmit(){
  try{
    var d=clGetData();
    if(!d.store){toast('Please enter the store name.','err');return;}
    if(!d.rating){toast('Please select an execution rating.','err');return;}
    var res=clRefresh();
    var act={id:genId(),type:'Trade Check / Store Visit',store:d.store,ch:d.outlet,date:d.date,time:new Date().toTimeString().slice(0,5),timeOut:'',area:d.addr,rating:d.rating,notes:d.wins,score:res.p,photos:d.photos,merits:0};
    act.merits=calcMerits(act)+(res.p>=90?50:0);
    S.push('acts_'+SESSION.username,act);
    var shared=S.get('all_checks',[]);
    shared.unshift({id:act.id,store:act.store,ch:act.ch,date:act.date,time:act.time,area:act.area,rating:act.rating,score:act.score,merits:act.merits,tmsName:SESSION.name,tmsUser:SESSION.username});
    if(shared.length>500)shared.splice(500);
    S.set('all_checks',shared);
    S.set('cl_draft_'+SESSION.username,null);
    toast('Submitted! +'+act.merits+' merit pts earned.','ok',4000);
    nav('activity');
  }catch(err){toast('Submission error. Please try again.','err');console.error('clSubmit error:',err);}
}

function pgSchedule(el){
  var u=SESSION.username,schedule=S.get('schedule_'+u,{}),today_d=new Date(),dayOfWeek=today_d.getDay(),mondayOffset=dayOfWeek===0?-6:1-dayOfWeek,monday=new Date(today_d);
  monday.setDate(today_d.getDate()+mondayOffset);
  var dayNames=['MON','TUE','WED','THU','FRI','SAT','SUN'];
  var storeOpts='';for(var i=0;i<STORES.length;i++)storeOpts+='<option value="'+STORES[i].name+'">';
  var calHtml='';
  for(var d=0;d<7;d++){
    var dt=new Date(monday);dt.setDate(monday.getDate()+d);
    var dKey=dt.toISOString().split('T')[0],isToday=dKey===today(),dayItems=schedule[dKey]||[],itemsHtml='';
    for(var j=0;j<dayItems.length;j++){
      var item=dayItems[j];
      itemsHtml+='<div class="cal-item'+(item.done?' cal-item-done':'')+'">'
        +'<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:80px">'+(item.store||item.notes||'Visit')+'</span>'
        +'<span style="display:flex;gap:2px">'
        +'<button class="btn btn-xs" style="padding:1px 4px;background:'+(item.done?'var(--muted)':'var(--green)')+';color:#fff;border-radius:3px;min-width:18px" data-day="'+dKey+'" data-idx="'+j+'" data-action="'+(item.done?'undone':'done')+'">'+( item.done?'↩':'✓')+'</button>'
        +'<button class="btn btn-xs" style="padding:1px 4px;background:var(--red-l);color:var(--red);border-radius:3px;min-width:18px" data-day="'+dKey+'" data-idx="'+j+'" data-action="del">✕</button>'
        +'</span></div>';
    }
    calHtml+='<div class="cal-day'+(isToday?' cal-today':'')+'" id="calday_'+dKey+'">'
      +'<div class="cal-day-hd">'+dayNames[d]+'</div><div class="cal-day-num">'+dt.getDate()+'</div>'
      +itemsHtml+'<button class="btn btn-xs btn-outline" style="width:100%;margin-top:4px" data-day="'+dKey+'" data-action="add">+ Add</button></div>';
  }
  var mon2=new Date(monday),sun=new Date(monday);sun.setDate(monday.getDate()+6);
  el.innerHTML='<div class="notice-b notice mb16">📅 Plan your weekly store visits and activities.</div>'
    +'<div class="flex items-center jbet mb16"><div class="f700" style="font-size:15px">Week of '+mon2.toLocaleDateString('en-PH',{month:'long',day:'numeric'})+' – '+sun.toLocaleDateString('en-PH',{month:'long',day:'numeric',year:'numeric'})+'</div></div>'
    +'<div class="cal-grid mb20">'+calHtml+'</div>'
    +'<div class="card"><div class="card-title">Upcoming Schedule Summary</div><div id="scheduleSummary">'+buildScheduleSummary(schedule,monday)+'</div></div>';
  var calBtns=el.querySelectorAll('[data-action]');
  for(var i=0;i<calBtns.length;i++){(function(btn){btn.addEventListener('click',function(e){e.stopPropagation();var action=btn.getAttribute('data-action'),day=btn.getAttribute('data-day'),idx=parseInt(btn.getAttribute('data-idx'));if(action==='add')showAddSchedule(day);else if(action==='done'||action==='undone')toggleScheduleDone(day,idx);else if(action==='del')deleteScheduleItem(day,idx);});})(calBtns[i]);}
}
function buildScheduleSummary(schedule,monday){
  var rows='',anyItems=false;
  for(var d=0;d<7;d++){
    var dt=new Date(monday);dt.setDate(monday.getDate()+d);
    var dKey=dt.toISOString().split('T')[0],items=schedule[dKey]||[];
    for(var j=0;j<items.length;j++){anyItems=true;rows+='<tr><td class="text-sm text-muted">'+fmtDate(dKey)+'</td><td class="f600 text-sm">'+(items[j].store||'—')+'</td><td class="text-sm">'+(items[j].channel||'MT')+'</td><td class="text-sm text-muted">'+(items[j].notes||'—')+'</td><td>'+(items[j].done?'<span class="badge b-green">Done</span>':'<span class="badge b-gold">Planned</span>')+'</td></tr>';}
  }
  if(!anyItems)return'<div class="text-muted text-sm">No visits scheduled. Click "+ Add" on any day to plan a store visit.</div>';
  return'<div class="oa"><table class="dt" style="min-width:480px"><thead><tr><th>Date</th><th>Store</th><th>Channel</th><th>Notes</th><th>Status</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function showAddSchedule(dKey){
  var storeOpts='';for(var i=0;i<STORES.length;i++)storeOpts+='<option value="'+STORES[i].name+'">';
  openModal('<div class="md-hd"><div class="md-title">📅 Add Planned Visit — '+fmtDate(dKey)+'</div><button class="xbtn" id="closeSchBtn">✕</button></div>'
    +'<div class="md-bd"><div class="fr"><div class="fg"><label class="fl">Store / Outlet</label><input class="fc" type="text" id="sch_store" placeholder="Store name" list="schSL"><datalist id="schSL">'+storeOpts+'</datalist></div></div>'
    +'<div class="fr"><div class="fg" style="flex:.5"><label class="fl">Channel</label><select class="fc" id="sch_ch"><option value="MT">MT</option><option value="GT">GT</option><option value="Event">Event</option></select></div><div class="fg"><label class="fl">Notes / Purpose</label><input class="fc" type="text" id="sch_notes" placeholder="e.g. Trade check, POSM installation"></div></div></div>'
    +'<div class="md-ft"><button class="btn btn-outline" id="closeSchBtn2">Cancel</button><button class="btn btn-primary" id="saveSchBtn">Add to Schedule</button></div>');
  document.getElementById('closeSchBtn').addEventListener('click',closeModal);
  document.getElementById('closeSchBtn2').addEventListener('click',closeModal);
  document.getElementById('saveSchBtn').addEventListener('click',function(){
    var store=gv('sch_store');if(!store){toast('Please enter a store name.','err');return;}
    var sched=S.get('schedule_'+SESSION.username,{});if(!sched[dKey])sched[dKey]=[];
    sched[dKey].push({store:store,channel:gv('sch_ch'),notes:gv('sch_notes'),done:false});
    S.set('schedule_'+SESSION.username,sched);closeModal();toast('Added to schedule!','ok');nav('schedule');
  });
}
function toggleScheduleDone(dKey,idx){var sched=S.get('schedule_'+SESSION.username,{});if(sched[dKey]&&sched[dKey][idx]){sched[dKey][idx].done=!sched[dKey][idx].done;S.set('schedule_'+SESSION.username,sched);}nav('schedule');}
function deleteScheduleItem(dKey,idx){var sched=S.get('schedule_'+SESSION.username,{});if(sched[dKey]){sched[dKey].splice(idx,1);S.set('schedule_'+SESSION.username,sched);}nav('schedule');}

function pgStores(el){
  var u=SESSION.username,acts=S.get('acts_'+u,[]),mo=monthKey(),visited={};
  for(var i=0;i<acts.length;i++)if(acts[i].date&&acts[i].date.indexOf(mo)===0&&acts[i].store)visited[acts[i].store]=1;
  var myStores=getMyStores(u),visitedCount=Object.keys(visited).length,rows='';
  for(var i=0;i<myStores.length;i++){
    var s=myStores[i],last=null;for(var j=0;j<acts.length;j++)if(acts[j].store===s.name){last=acts[j];break;}
    var scCell='<span class="text-muted">—</span>';if(last&&last.score){scCell='<div class="flex items-center gap8"><div class="pb" style="width:55px"><div class="pf '+scoreColor(last.score)+'" style="width:'+last.score+'%"></div></div><span class="text-xs f600">'+last.score+'%</span></div>';}
    rows+='<tr><td><div class="f600 text-sm">'+s.name+'</div></td><td class="text-sm">'+s.area+'</td>'
      +'<td><span class="badge '+(s.ch==='MT'?'b-navy':'b-orange')+'">'+s.ch+'</span></td>'
      +'<td class="text-sm text-muted">'+(last?fmtDate(last.date):'—')+'</td><td>'+scCell+'</td>'
      +'<td>'+(visited[s.name]?'<span class="badge b-green">✓ Visited</span>':'<span class="badge b-gold">Pending</span>')+'</td>'
      +'<td><button class="btn btn-xs btn-primary start-check" data-name="'+s.name+'" data-ch="'+s.ch+'" data-area="'+s.area+'">Check</button></td></tr>';
  }
  var myStoresCount=S.get('my_stores_'+u,null);
  el.innerHTML='<div class="g3 mb20"><div class="sc sc-red"><div class="sc-label">My Stores</div><div class="sc-val">'+myStores.length+'</div><div class="sc-sub">'+(myStoresCount&&myStoresCount.length?'Assigned stores':'All stores')+'</div></div><div class="sc sc-green"><div class="sc-label">Visited This Month</div><div class="sc-val">'+visitedCount+'</div><div class="sc-sub"><span class="tu">'+pct(visitedCount,myStores.length)+'% coverage</span></div></div><div class="sc sc-gold"><div class="sc-label">Pending</div><div class="sc-val">'+(myStores.length-visitedCount)+'</div></div></div>'
    +'<div class="card oa"><div class="flex items-center jbet mb12 flex-wrap gap8"><div class="card-title" style="margin:0">Store List</div>'
    +'<div class="flex gap8"><button class="btn btn-outline btn-sm" id="myStoresSettingsBtn">⚙️ My Store Assignments</button><button class="btn btn-primary btn-sm" id="newCheckBtn">+ New Trade Check</button></div></div>'
    +'<table class="dt" style="min-width:600px"><thead><tr><th>Store</th><th>Area</th><th>Channel</th><th>Last Visit</th><th>Score</th><th>Status</th><th>Action</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
  var ncb=document.getElementById('newCheckBtn');if(ncb)ncb.addEventListener('click',function(){nav('checklist');});
  var msb=document.getElementById('myStoresSettingsBtn');if(msb)msb.addEventListener('click',function(){nav('settings');});
  var scbs=el.querySelectorAll('.start-check');
  for(var i=0;i<scbs.length;i++){(function(btn){btn.addEventListener('click',function(){startCheck(btn.getAttribute('data-name'),btn.getAttribute('data-ch'),btn.getAttribute('data-area'));});})(scbs[i]);}
}
function startCheck(name,ch,area){
  nav('checklist');
  setTimeout(function(){var s=document.getElementById('cl_store');if(s)s.value=name;var c=document.getElementById('cl_outlet');if(c)c.value=ch;var a=document.getElementById('cl_addr');if(a)a.value=area;},80);
}

function pgPrograms(el){
  var progs=allProgs(),cards='';
  for(var i=0;i<progs.length;i++){
    var p=progs[i],pp=pct(p.done,p.target),bc=pp>=70?'pf-green':pp>=40?'pf-gold':'pf-red';
    var sb=p.status==='active'?'<span class="badge b-green">Active</span>':p.status==='upcoming'?'<span class="badge b-navy">Upcoming</span>':'<span class="badge b-gold">Done</span>';
    var isCustom=!p.id.startsWith('p');
    cards+='<div class="card"><div class="flex jbet items-center mb8 flex-wrap gap4"><div><div class="f700" style="font-size:14px">'+p.name+(isCustom?' <span class="badge b-gold" style="font-size:10px">Custom</span>':'')+'</div><div class="text-xs text-muted" style="margin-top:2px">Ends '+fmtDate(p.end)+'</div></div>'+sb+'</div>'
      +'<div class="flex gap4" style="margin-bottom:8px"><span class="badge b-orange">'+p.type+'</span><span class="badge b-navy">'+p.ch+'</span></div>'
      +'<div class="text-sm text-muted mb12">'+p.desc+'</div>'
      +'<div class="flex jbet text-sm" style="margin-bottom:4px"><span>'+p.done+'/'+p.target+' stores</span><span class="f700" style="color:'+(pp>=70?'var(--green)':pp>=40?'var(--gold)':'var(--red)')+'">'+pp+'%</span></div>'+pb(pp,bc)
      +(p.status!=='done'?'<div class="flex gap8" style="margin-top:12px"><button class="btn btn-outline btn-sm flex1 log-prog" data-id="'+p.id+'">+ Log Progress</button>'+(isCustom?'<button class="btn btn-xs btn-outline del-prog" data-id="'+p.id+'">🗑</button>':'')+'</div>':'')
      +'</div>';
  }
  el.innerHTML='<div class="flex jbet items-center mb16"><div class="f700" style="font-size:15px">Programs & Promotions</div><button class="btn btn-primary btn-sm" id="addProgBtn">+ Add Promo</button></div>'
    +'<div class="g2">'+cards+'</div>';
  var apb=document.getElementById('addProgBtn');if(apb)apb.addEventListener('click',showAddProg);
  var lps=el.querySelectorAll('.log-prog');for(var i=0;i<lps.length;i++){(function(btn){btn.addEventListener('click',function(){logProg(btn.getAttribute('data-id'));});})(lps[i]);}
  var dps=el.querySelectorAll('.del-prog');for(var i=0;i<dps.length;i++){(function(btn){btn.addEventListener('click',function(){deleteCustomProg(btn.getAttribute('data-id'));});})(dps[i]);}
}
function showAddProg(){
  openModal('<div class="md-hd"><div class="md-title">+ Add New Promo / Program</div><button class="xbtn" id="closeProgBtn">✕</button></div>'
    +'<div class="md-bd"><div class="fr"><div class="fg"><label class="fl">Program Name *</label><input class="fc" type="text" id="np_name" placeholder="e.g. Summer Promo – Davao MT"></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Type</label><select class="fc" id="np_type"><option>Promotion</option><option>Visibility</option><option>POSM</option><option>Distribution</option><option>Sampling</option><option>Event</option><option>Other</option></select></div>'
    +'<div class="fg"><label class="fl">Channel</label><select class="fc" id="np_ch"><option value="MT">MT</option><option value="GT">GT</option><option value="MT+GT">MT+GT</option><option value="Event">Event</option></select></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Target Stores</label><input class="fc" type="number" id="np_target" placeholder="e.g. 20" min="1"></div>'
    +'<div class="fg"><label class="fl">End Date</label><input class="fc" type="date" id="np_end"></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Status</label><select class="fc" id="np_status"><option value="active">Active</option><option value="upcoming">Upcoming</option></select></div></div>'
    +'<div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Description</label><textarea class="fc" id="np_desc" rows="2" placeholder="Brief description..."></textarea></div></div></div>'
    +'<div class="md-ft"><button class="btn btn-outline" id="closeProgBtn2">Cancel</button><button class="btn btn-primary" id="saveProgBtn">Add Program</button></div>');
  document.getElementById('closeProgBtn').addEventListener('click',closeModal);
  document.getElementById('closeProgBtn2').addEventListener('click',closeModal);
  document.getElementById('saveProgBtn').addEventListener('click',function(){
    var name=gv('np_name');if(!name){toast('Please enter a program name.','err');return;}
    var prog={id:'c'+genId(),name:name,type:gv('np_type')||'Promotion',ch:gv('np_ch')||'MT',end:gv('np_end')||'2026-12-31',target:parseInt(document.getElementById('np_target').value)||10,done:0,status:gv('np_status')||'active',desc:gv('np_desc')||''};
    var cp=S.get('custom_progs',[]);cp.push(prog);S.set('custom_progs',cp);
    closeModal();toast('Program added!','ok');nav('programs');
  });
}
function deleteCustomProg(id){var cp=S.get('custom_progs',[]),nc=[];for(var i=0;i<cp.length;i++)if(cp[i].id!==id)nc.push(cp[i]);S.set('custom_progs',nc);toast('Program removed.');nav('programs');}
function logProg(id){
  var progs=allProgs(),p=null;for(var i=0;i<progs.length;i++)if(progs[i].id===id){p=progs[i];break;}if(!p)return;
  var storeOpts='';for(var i=0;i<STORES.length;i++)storeOpts+='<option value="'+STORES[i].name+'">';
  openModal('<div class="md-hd"><div class="md-title">Log Progress — '+p.name+'</div><button class="xbtn" id="closeLPBtn">✕</button></div>'
    +'<div class="md-bd"><div class="fg mb12"><label class="fl">Store Name</label><input class="fc" type="text" id="pg_store" list="pgSl"><datalist id="pgSl">'+storeOpts+'</datalist></div>'
    +'<div class="fg mb12"><label class="fl">Status</label><select class="fc" id="pg_stat"><option>Implemented</option><option>Partially Implemented</option><option>Not Yet</option><option>Issue Found</option></select></div>'
    +'<div class="fg"><label class="fl">Notes</label><textarea class="fc" id="pg_notes" rows="2"></textarea></div></div>'
    +'<div class="md-ft"><button class="btn btn-outline" id="closeLPBtn2">Cancel</button><button class="btn btn-primary" id="saveLPBtn">Submit</button></div>');
  document.getElementById('closeLPBtn').addEventListener('click',closeModal);
  document.getElementById('closeLPBtn2').addEventListener('click',closeModal);
  document.getElementById('saveLPBtn').addEventListener('click',function(){
    var store=gv('pg_store');if(!store){toast('Enter store name.','err');return;}
    var cp=S.get('custom_progs',[]);for(var i=0;i<cp.length;i++)if(cp[i].id===id){cp[i].done=(cp[i].done||0)+1;break;}S.set('custom_progs',cp);
    S.push('prog_logs',{id:genId(),pid:id,store:store,status:gv('pg_stat'),notes:gv('pg_notes'),date:today(),tms:SESSION.username});
    closeModal();toast('Progress logged!','ok');
  });
}

function pgMerits(el){
  var u=SESSION.username,pts=monthPts(u)||1840,lvl=getLevel(pts),nextLvl=null;
  for(var i=0;i<LEVELS.length;i++)if(LEVELS[i].min>pts){nextLvl=LEVELS[i];break;}
  var fillP=nextLvl?pct(pts-lvl.min,nextLvl.min-lvl.min):100;
  var ri=[['Complete trade check',MERIT_PTS.base],['Excellent execution',MERIT_PTS.excellent],['Good execution',MERIT_PTS.good],['3+ photos attached',MERIT_PTS.photos],['POSM installed',MERIT_PTS.posm],['Planogram reset',MERIT_PTS.planogram],['Promo display setup',MERIT_PTS.promo],['Sponsorship / Sampling',MERIT_PTS.sponsorship],['OOS reported',MERIT_PTS.oos],['Competitor monitoring',MERIT_PTS.competitor]];
  var rHtml='';for(var i=0;i<ri.length;i++)rHtml+='<div class="flex jbet text-sm"><span>'+ri[i][0]+'</span><span class="f700" style="color:var(--gold)">+'+ri[i][1]+'</span></div>';
  var achHtml='';for(var i=0;i<ACHIEVEMENTS.length;i++){var a=ACHIEVEMENTS[i];achHtml+='<div class="ac '+(a.unlocked?'':'ac-locked')+'"><div class="ac-ico">'+a.ico+'</div><div class="ac-name">'+a.name+'</div><div class="ac-desc">'+a.desc+'</div><div class="ac-pts">+'+a.pts+' pts</div></div>';}
  var acts=S.get('acts_'+u,[]),hist='',shown=Math.min(10,acts.length);
  for(var i=0;i<shown;i++){var a=acts[i];hist+='<tr><td class="text-sm text-muted">'+fmtDate(a.date)+'</td><td class="text-sm">'+a.type+'</td><td class="text-sm f600">'+(a.store||a.eventTitle||'—')+'</td><td style="color:var(--gold);font-weight:700">+'+(a.merits||0)+'</td></tr>';}
  if(!hist)hist='<tr><td colspan="4" style="text-align:center;padding:20px;color:var(--muted)">No activities yet.</td></tr>';
  el.innerHTML='<div class="g2 mb20"><div class="merit-card"><div class="mlvl" style="background:'+lvl.color+'">🏆 '+lvl.name+'</div><div class="mpts">'+pts.toLocaleString()+'</div><div style="font-size:11px;opacity:.5;margin-top:2px">Merit Points — '+new Date().toLocaleString('en-PH',{month:'long',year:'numeric'})+'</div>'+(nextLvl?'<div style="font-size:11px;opacity:.5;margin:12px 0 4px">'+((nextLvl.min-pts).toLocaleString())+' pts to '+nextLvl.name+'</div><div class="mbar"><div class="mfill" style="width:'+fillP+'%"></div></div>':'<div style="font-size:11px;opacity:.5;margin-top:10px">Max level! 🎉</div>')+'</div>'
    +'<div class="card"><div class="card-title">How to Earn Points</div><div class="flex flex-col gap8">'+rHtml+'</div></div></div>'
    +sd('Achievements')+'<div class="ag mb20">'+achHtml+'</div>'
    +sd('Points History')+'<div class="card oa"><table class="dt"><thead><tr><th>Date</th><th>Activity</th><th>Store</th><th>Points</th></tr></thead><tbody>'+hist+'</tbody></table></div>';
}

function pgLeaderboard(el){
  var lb=lbData(),u=SESSION.username,emojis=['🥇','🥈','🥉'];
  var aData=[{area:'Mindanao',tms:10,avg:85,c:'pf-red'},{area:'Cebu',tms:9,avg:83,c:'pf-navy'},{area:'Davao',tms:1,avg:80,c:'pf-gold'},{area:'Ozamiz',tms:1,avg:82,c:'pf-green'}];
  var lbRows='';
  for(var i=0;i<lb.length;i++){var p=lb[i],isMe=p.u===u,rc=i===0?'lbr-1':i===1?'lbr-2':i===2?'lbr-3':'',lvl=getLevel(p.pts);
    lbRows+='<div class="lb-row" style="'+(isMe?'background:var(--red-l);margin:0 -14px;padding:10px 14px;border-radius:var(--rsm);':'')+'"><div class="lb-rank '+rc+'">'+(i<3?emojis[i]:(i+1))+'</div>'+mkAva(p.init,i,34)+'<div class="lb-info"><div class="lb-name">'+p.name+(isMe?' <span class="badge b-red" style="font-size:10px">You</span>':'')+'</div><div class="lb-meta">'+p.area+' · <span style="color:'+lvl.color+'">'+lvl.name+'</span></div></div><div class="lb-pts">'+p.pts.toLocaleString()+'</div></div>';}
  var aHtml='';for(var i=0;i<aData.length;i++){var a=aData[i];aHtml+='<div><div class="flex jbet text-sm" style="margin-bottom:4px"><span><strong>'+a.area+'</strong> — '+a.tms+' TMS</span><span class="f700">Avg '+a.avg+'%</span></div>'+pb(a.avg,a.c)+'</div>';}
  var lvlHtml='';for(var i=0;i<LEVELS.length;i++){var lv=LEVELS[i];lvlHtml+='<div class="flex items-center gap8 text-sm"><div style="width:10px;height:10px;border-radius:50%;background:'+lv.color+';flex-shrink:0"></div><span class="flex1 f600">'+lv.name+'</span><span class="text-muted">'+lv.min.toLocaleString()+'+ pts</span></div>';}
  el.innerHTML='<div class="g2"><div class="card"><div class="flex items-center jbet mb16"><div class="card-title" style="margin:0">'+new Date().toLocaleString('en-PH',{month:'long',year:'numeric'})+' Rankings</div><span class="badge b-gold">Live</span></div><div style="padding:0 14px">'+lbRows+'</div></div><div><div class="card mb16"><div class="card-title">Area Performance</div><div class="flex flex-col gap12">'+aHtml+'</div></div><div class="card"><div class="card-title">Level Guide</div><div class="flex flex-col gap8">'+lvlHtml+'</div></div></div></div>';
}

function pgTeam(el){
  if(SESSION.role==='tms'||SESSION.role==='kas'){el.innerHTML='<div class="notice notice-r">Access restricted.</div>';return;}
  var lb=lbData();
  var fM=['field','field','field','office','field','field','field','office','field','field','field','office','field','field','field','office','field','field','field','office','field','field'];
  var lM=['SM City Ozamiz','Gaisano CDO','SM City Davao','Office','NCCC Mall Davao','Robinsons Davao','SM City CDO','Office','Limketkai Center','Bankerohan Market','Agdao Market','Office','SM Consolacion','Metro Mandaue','Gaisano Capital','Office','SM City Cebu','Robinsons Galleria','SM Seaside','Office','Ayala Center Cebu','Gaisano Fiesta'];
  var sT=[7,6,8,2,5,6,5,3,4,6,7,2,5,6,7,2,7,6,5,2,5,4],scT=[88,82,91,79,74,86,83,77,85,80,88,79,76,84,82,78,90,83,87,79,85,81];
  var fCnt=0,totSt=0,totSc=0;
  for(var i=0;i<Math.min(lb.length,fM.length);i++){if(fM[i]==='field')fCnt++;totSt+=sT[i]||0;totSc+=scT[i]||0;}
  var totPts=0;for(var i=0;i<lb.length;i++)totPts+=lb[i].pts;
  var rows='';
  for(var i=0;i<lb.length;i++){var p=lb[i],isF=(fM[i]||'field')==='field';
    rows+='<tr><td><div class="flex items-center gap8">'+mkAva(p.init,i,30)+'<div><div class="f600 text-sm">'+p.name+'</div><div class="text-xs" style="color:'+getLevel(p.pts).color+'">'+getLevel(p.pts).name+'</div></div></div></td><td class="text-sm">'+p.area+'</td><td><span class="badge '+(isF?'b-green':'b-navy')+'">'+(isF?'🟢 In Field':'🔵 Office')+'</span></td><td class="text-sm text-muted">'+(lM[i]||'—')+'</td><td class="text-sm f600">'+(sT[i]||0)+'</td><td><div class="flex items-center gap8"><div class="pb" style="width:50px"><div class="pf '+(scT[i]?scoreColor(scT[i]):'pf-navy')+'" style="width:'+(scT[i]||0)+'%"></div></div><span class="text-xs">'+(scT[i]||0)+'%</span></div></td><td style="color:var(--gold);font-weight:700">'+p.pts.toLocaleString()+'</td></tr>';}
  el.innerHTML='<div class="notice notice-b mb16">👁️ Live team view.</div><div class="g4 mb20"><div class="sc sc-red"><div class="sc-label">Active in Field</div><div class="sc-val">'+fCnt+'</div><div class="sc-sub">of '+lb.length+' TMS</div></div><div class="sc sc-green"><div class="sc-label">Team Stores Today</div><div class="sc-val">'+totSt+'</div></div><div class="sc sc-gold"><div class="sc-label">Avg Team Score</div><div class="sc-val">'+Math.round(totSc/Math.max(lb.length,1))+'%</div></div><div class="sc sc-navy"><div class="sc-label">Total Team Pts</div><div class="sc-val">'+totPts.toLocaleString()+'</div></div></div>'
    +'<div class="card oa"><div class="flex items-center jbet mb12"><div class="card-title" style="margin:0">TMS Daily Status</div><div class="text-sm text-muted">Updated '+new Date().toLocaleTimeString('en-PH',{hour:'2-digit',minute:'2-digit'})+'</div></div><table class="dt" style="min-width:700px"><thead><tr><th>TMS Name</th><th>Area</th><th>Status</th><th>Location</th><th>Stores</th><th>Score</th><th>Merits</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}

var DEFAULT_FORM_ENTITIES=[
  {id:'vfi-is',name:'Virginia Food Inc.',address:'Sitio Younglife, Cogon, Compostela, Cebu',department:'Information System',process:'APPLICATION DEVELOPMENT',title:'MODIFICATION FORM',revNo:'01',docNo:'FIN-IT-APPDEV-FORM-02',revisionDate:'2026-01-01',effectiveDate:'2026-01-01'},
  {id:'vfi-tm',name:'Virginia Food Inc.',address:'Trade Marketing Department',department:'Trade Marketing',process:'TRADE MARKETING',title:'REQUEST FORM',revNo:'01',docNo:'TM-REQ-FORM-01',revisionDate:'2026-01-01',effectiveDate:'2026-01-01'},
  {id:'vfi-ops',name:'Virginia Food Inc.',address:'Operations Department',department:'Operations',process:'OPERATIONS',title:'APPROVAL FORM',revNo:'01',docNo:'OPS-APP-FORM-01',revisionDate:'2026-01-01',effectiveDate:'2026-01-01'}
];

function formEntities(){
  var saved=S.get('form_entities',null);
  return saved&&saved.length?saved:DEFAULT_FORM_ENTITIES.slice();
}

function saveFormEntities(list){
  S.set('form_entities',list);
}

function selectedFormEntity(){
  var list=formEntities(),id=gv('fg_entity');
  for(var i=0;i<list.length;i++) if(list[i].id===id) return list[i];
  return list[0];
}

function formatFormDate(d){
  if(!d)return'';
  var dt=new Date(d+' 00:00');
  if(isNaN(dt.getTime()))return d;
  var mon=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  return (dt.getDate()<10?'0':'')+dt.getDate()+mon[dt.getMonth()]+dt.getFullYear();
}

function collectFormData(){
  var rows=[],trs=document.querySelectorAll('#fg_rows tr');
  for(var i=0;i<trs.length;i++){
    rows.push({
      no:trs[i].querySelector('.fg-no').value.trim()||String(i+1),
      detail:trs[i].querySelector('.fg-detail').value.trim(),
      remarks:trs[i].querySelector('.fg-remarks').value.trim()
    });
  }
  while(rows.length<3) rows.push({no:String(rows.length+1),detail:'',remarks:''});
  return {
    entity:selectedFormEntity(),
    project:gv('fg_project'),
    requester:gv('fg_requester')||SESSION.name,
    client:gv('fg_client'),
    targetDate:gv('fg_target'),
    approvedName:gv('fg_approved_name'),
    approvedPosition:gv('fg_approved_position'),
    approvedDate:gv('fg_approved_date'),
    rows:rows
  };
}

function formDocumentHtml(data,withToolbar){
  var e=data.entity,rowHtml='',logoText=(e.name||'V').charAt(0).toUpperCase();
  for(var i=0;i<data.rows.length;i++){
    rowHtml+='<tr><td class="num">'+esc(data.rows[i].no)+'</td><td>'+esc(data.rows[i].detail)+'</td><td>'+esc(data.rows[i].remarks)+'</td></tr>';
  }
  return '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>'+esc(e.title||'Form')+'</title><style>'
    +'@page{size:A4 landscape;margin:16mm}body{font-family:Arial,Helvetica,sans-serif;color:#000;margin:0;background:#fff;font-size:12px}.toolbar{margin:0 0 14px}.toolbar button{background:#1A2540;color:#fff;border:0;border-radius:6px;padding:8px 14px;margin-right:6px;cursor:pointer}.toolbar .alt{background:#fff;color:#1A2540;border:1px solid #999}.sheet{width:100%;max-width:1120px;margin:0 auto}.doc-table{width:100%;border-collapse:collapse;table-layout:fixed}.doc-table td,.doc-table th{border:1px solid #000;padding:5px 8px;vertical-align:middle}.head td{height:44px}.brand{display:grid;grid-template-columns:116px 1fr;gap:10px;align-items:center;height:112px}.logo{width:104px;height:76px;background:#d71920;color:#fff;font-size:48px;font-weight:800;display:flex;align-items:center;justify-content:center}.company{font-size:12px;text-align:center;line-height:2}.center{text-align:center}.bold{font-weight:700}.small{font-size:11px}.meta td{height:34px}.field td{height:22px}.field .label{width:19%;font-weight:700}.mod th{background:#555;color:#fff;text-align:center;font-size:12px}.mod td{height:36px}.mod .num{width:7%;text-align:center}.approval{margin-top:22px;line-height:1.8}.approval .title{font-weight:700;margin-bottom:18px}@media print{.toolbar{display:none}.sheet{max-width:none}}'
    +'</style></head><body>'
    +(withToolbar?'<div class="toolbar"><button onclick="window.print()">Print / Save PDF</button><button class="alt" onclick="window.close()">Close</button></div>':'')
    +'<div class="sheet"><table class="doc-table head"><colgroup><col style="width:34%"><col style="width:33%"><col style="width:14%"><col style="width:19%"></colgroup>'
    +'<tr><td rowspan="2"><div class="brand"><div class="logo">'+esc(logoText)+'</div><div class="company"><div>'+esc(e.name)+'</div><div>'+esc(e.address)+'</div><div>'+esc(e.department)+'</div></div></div></td><td class="center">'+esc(e.process)+'</td><td>Rev. No. '+esc(e.revNo)+'</td><td>'+esc(e.docNo)+'</td></tr>'
    +'<tr><td class="center bold">'+esc(e.title)+'</td><td class="center small">Revision Date:<br><br>'+esc(formatFormDate(e.revisionDate))+'</td><td class="center small">Effectivity Date:<br><br>'+esc(formatFormDate(e.effectiveDate))+'</td></tr></table>'
    +'<table class="doc-table meta" style="margin-top:32px"><tr><td class="bold" style="width:19%">Field</td><td class="bold">Details</td></tr>'
    +'<tr><td>Project Name:</td><td>'+esc(data.project)+'</td></tr><tr><td>Requestor Name:</td><td>'+esc(data.requester)+'</td></tr><tr><td>Client / Department:</td><td>'+esc(data.client)+'</td></tr><tr><td>Target Completion Date:</td><td>'+esc(formatFormDate(data.targetDate)||data.targetDate)+'</td></tr></table>'
    +'<table class="doc-table mod" style="margin-top:26px"><thead><tr><th style="width:7%">No.</th><th>Modification Details</th><th>Remarks</th></tr></thead><tbody>'+rowHtml+'</tbody></table>'
    +'<div class="approval"><div class="title">Approved by:</div><div>Name and Signature: '+esc(data.approvedName)+'</div><div>Position: '+esc(data.approvedPosition)+'</div><div>Date: '+esc(formatFormDate(data.approvedDate)||data.approvedDate)+'</div></div></div></body></html>';
}

function openGeneratedForm(){
  var data=collectFormData();
  if(!data.project){toast('Enter a project name first.','err');return;}
  var win=window.open('','_blank','width=1100,height=780');if(!win){toast('Allow popups to generate the form.','err');return;}
  win.document.write(formDocumentHtml(data,true));
  win.document.close();
}

function downloadGeneratedWord(){
  var data=collectFormData();
  if(!data.project){toast('Enter a project name first.','err');return;}
  var html=formDocumentHtml(data,false),blob=new Blob(['\ufeff',html],{type:'application/msword'});
  var a=document.createElement('a'),name=(data.project||data.entity.title||'generated-form').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').toLowerCase();
  a.href=URL.createObjectURL(blob);a.download=name+'.doc';document.body.appendChild(a);a.click();
  setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},100);
  toast('Word document generated.','ok');
}

function addFormRow(detail,remarks){
  var tbody=document.getElementById('fg_rows'),idx=tbody.children.length+1,tr=document.createElement('tr');
  tr.innerHTML='<td><input class="fc fg-no" value="'+idx+'"></td><td><textarea class="fc fg-detail" rows="2">'+esc(detail||'')+'</textarea></td><td><textarea class="fc fg-remarks" rows="2">'+esc(remarks||'')+'</textarea></td><td><button class="btn btn-outline btn-xs fg-remove" type="button">Remove</button></td>';
  tbody.appendChild(tr);
  tr.querySelector('.fg-remove').addEventListener('click',function(){tr.remove();renumberFormRows();});
}

function renumberFormRows(){
  var rows=document.querySelectorAll('#fg_rows tr');
  for(var i=0;i<rows.length;i++) rows[i].querySelector('.fg-no').value=i+1;
}

function showEntityEditor(){
  var e=selectedFormEntity();
  openModal('<div class="md-hd"><div class="md-title">Entity / Form Template</div><button class="xbtn" id="closeEntBtn">x</button></div>'
    +'<div class="md-bd"><div class="fr"><div class="fg"><label class="fl">Entity Name</label><input class="fc" id="ent_name" value="'+esc(e.name)+'"></div><div class="fg"><label class="fl">Department</label><input class="fc" id="ent_dept" value="'+esc(e.department)+'"></div></div>'
    +'<div class="fg mb12"><label class="fl">Address / Location</label><input class="fc" id="ent_addr" value="'+esc(e.address)+'"></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Process / Header</label><input class="fc" id="ent_process" value="'+esc(e.process)+'"></div><div class="fg"><label class="fl">Form Title</label><input class="fc" id="ent_title" value="'+esc(e.title)+'"></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Rev. No.</label><input class="fc" id="ent_rev" value="'+esc(e.revNo)+'"></div><div class="fg"><label class="fl">Document No.</label><input class="fc" id="ent_doc" value="'+esc(e.docNo)+'"></div></div>'
    +'<div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Revision Date</label><input class="fc" type="date" id="ent_revdate" value="'+esc(e.revisionDate)+'"></div><div class="fg"><label class="fl">Effectivity Date</label><input class="fc" type="date" id="ent_effdate" value="'+esc(e.effectiveDate)+'"></div></div></div>'
    +'<div class="md-ft"><button class="btn btn-outline" id="closeEntBtn2">Cancel</button><button class="btn btn-primary" id="saveEntBtn">Save Entity</button></div>');
  document.getElementById('closeEntBtn').addEventListener('click',closeModal);
  document.getElementById('closeEntBtn2').addEventListener('click',closeModal);
  document.getElementById('saveEntBtn').addEventListener('click',function(){
    var list=formEntities(),id=gv('fg_entity')||('ent_'+genId()),found=false;
    var next={id:id,name:gv('ent_name'),address:gv('ent_addr'),department:gv('ent_dept'),process:gv('ent_process'),title:gv('ent_title'),revNo:gv('ent_rev'),docNo:gv('ent_doc'),revisionDate:gv('ent_revdate'),effectiveDate:gv('ent_effdate')};
    for(var i=0;i<list.length;i++) if(list[i].id===id){list[i]=next;found=true;break;}
    if(!found)list.push(next);
    saveFormEntities(list);closeModal();toast('Entity saved.','ok');nav('forms');
  });
}

function pgForms(el){
  var ents=formEntities(),opts='';
  for(var i=0;i<ents.length;i++) opts+='<option value="'+esc(ents[i].id)+'">'+esc(ents[i].name+' - '+ents[i].title)+'</option>';
  el.innerHTML='<div class="notice notice-b mb16">Generate a controlled form for any entity, then export it as Word or print/save it as PDF.</div>'
    +'<div class="card mb16"><div class="flex items-center jbet flex-wrap gap8 mb16"><div><div class="card-title" style="margin:0">Entity & Form Details</div><div class="text-sm text-muted">Use the default template or save a new entity profile.</div></div><button class="btn btn-outline btn-sm" id="editEntityBtn">Edit Selected Entity</button></div>'
    +'<div class="fr"><div class="fg" style="flex:2"><label class="fl">Entity / Template</label><select class="fc" id="fg_entity">'+opts+'</select></div><div class="fg"><label class="fl">Target Completion Date</label><input class="fc" type="date" id="fg_target"></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Project Name</label><input class="fc" id="fg_project" placeholder="Project or request name"></div><div class="fg"><label class="fl">Requestor Name</label><input class="fc" id="fg_requester" value="'+esc(SESSION.name)+'"></div><div class="fg"><label class="fl">Client / Department</label><input class="fc" id="fg_client" value="'+esc(SESSION.area)+'"></div></div></div>'
    +'<div class="card mb16"><div class="flex items-center jbet mb12"><div class="card-title" style="margin:0">Modification Details</div><button class="btn btn-navy btn-sm" id="addFormRowBtn">Add Row</button></div><div class="oa"><table class="dt fg-table" style="min-width:760px"><thead><tr><th style="width:70px">No.</th><th>Modification Details</th><th>Remarks</th><th style="width:90px"></th></tr></thead><tbody id="fg_rows"></tbody></table></div></div>'
    +'<div class="card"><div class="card-title">Approval</div><div class="fr"><div class="fg"><label class="fl">Name and Signature</label><input class="fc" id="fg_approved_name"></div><div class="fg"><label class="fl">Position</label><input class="fc" id="fg_approved_position"></div><div class="fg"><label class="fl">Date</label><input class="fc" type="date" id="fg_approved_date"></div></div><div class="flex gap8 flex-wrap" style="justify-content:flex-end"><button class="btn btn-primary" id="genPdfFormBtn">Generate PDF</button><button class="btn btn-navy" id="genWordFormBtn">Generate Word</button></div></div>';
  addFormRow('','');addFormRow('','');addFormRow('','');
  document.getElementById('addFormRowBtn').addEventListener('click',function(){addFormRow('','');});
  document.getElementById('editEntityBtn').addEventListener('click',showEntityEditor);
  document.getElementById('genPdfFormBtn').addEventListener('click',openGeneratedForm);
  document.getElementById('genWordFormBtn').addEventListener('click',downloadGeneratedWord);
}

function pgReports(el){
  var u=SESSION.username,acts=S.get('acts_'+u,[]),mo=monthKey(),moActs=[],checks=[],stores={},posm=[],sponsorship=[];
  for(var i=0;i<acts.length;i++){if(!acts[i].date||acts[i].date.indexOf(mo)<0)continue;moActs.push(acts[i]);if(acts[i].type==='Trade Check / Store Visit')checks.push(acts[i]);if(acts[i].store)stores[acts[i].store]=1;if(acts[i].type==='POSM Installation / Update')posm.push(acts[i]);if(acts[i].type==='Sponsorship / Events Sampling')sponsorship.push(acts[i]);}
  var totalPts=0;for(var i=0;i<moActs.length;i++)totalPts+=moActs[i].merits||0;
  var scSum=0;for(var i=0;i<checks.length;i++)scSum+=checks[i].score||0;
  var avgSc=checks.length?Math.round(scSum/checks.length):0;
  var ml=new Date().toLocaleString('en-PH',{month:'long',year:'numeric'}),sumRows='',shown=Math.min(30,moActs.length);
  for(var i=0;i<shown;i++){var a=moActs[i],isSpon=a.type==='Sponsorship / Events Sampling';
    sumRows+='<tr><td class="text-muted text-sm">'+fmtDate(a.date)+'</td><td class="text-sm">'+(isSpon&&a.eventTitle?'<div>'+a.type+'</div><div class="text-xs text-muted">'+a.eventTitle+'</div>':a.type)+'</td>'
    +'<td class="f600 text-sm">'+(a.store||a.venue||'—')+'</td>'
    +'<td><span class="badge '+(a.ch==='MT'?'b-navy':a.ch==='GT'?'b-orange':'b-purple')+'">'+(a.ch||'—')+'</span></td>'
    +'<td>'+ratingBadge(a.rating)+'</td><td class="text-sm">'+(a.score?a.score+'%':'—')+'</td>'
    +'<td style="color:var(--gold);font-weight:700">+'+(a.merits||0)+'</td></tr>';}
  if(!sumRows)sumRows='<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--muted)">No activities this month yet.</td></tr>';
  el.innerHTML='<div class="g3 mb24">'
    +'<div class="card" style="text-align:center;padding:24px"><div style="font-size:36px;margin-bottom:8px">📋</div><div class="f700 mb4">Weekly Report</div><button class="btn btn-primary w-full" style="margin-bottom:8px" id="rptWeekly">Generate & Print</button><button class="btn btn-outline w-full" id="emailWeekly">📧 Send to Email</button></div>'
    +'<div class="card" style="text-align:center;padding:24px"><div style="font-size:36px;margin-bottom:8px">📊</div><div class="f700 mb4">Monthly Report</div><button class="btn btn-navy w-full" style="margin-bottom:8px" id="rptMonthly">Generate & Print</button><button class="btn btn-outline w-full" id="emailMonthly">📧 Send to Email</button></div>'
    +'<div class="card" style="text-align:center;padding:24px"><div style="font-size:36px;margin-bottom:8px">🗂️</div><div class="f700 mb4">Quarterly Report</div><button class="btn btn-outline w-full" style="margin-bottom:8px" id="rptQtly">Generate & Print</button><button class="btn btn-outline w-full" id="emailQtly">📧 Send to Email</button></div>'
    +'</div>'
    +sd(ml+' — Summary')
    +'<div class="g4 mb20"><div class="sc sc-red"><div class="sc-label">Stores Visited</div><div class="sc-val">'+Object.keys(stores).length+'</div></div><div class="sc sc-navy"><div class="sc-label">Trade Checks</div><div class="sc-val">'+checks.length+'</div><div class="sc-sub">avg '+avgSc+'%</div></div><div class="sc sc-gold"><div class="sc-label">Sponsorships</div><div class="sc-val">'+sponsorship.length+'</div></div><div class="sc sc-green"><div class="sc-label">Merit Points</div><div class="sc-val">'+totalPts.toLocaleString()+'</div></div></div>'
    +sd('All Activities — '+ml)
    +'<div class="card oa"><table class="dt" style="min-width:680px"><thead><tr><th>Date</th><th>Activity</th><th>Store / Venue</th><th>Ch</th><th>Rating</th><th>Score</th><th>Points</th></tr></thead><tbody>'+sumRows+'</tbody></table></div>';
  var wire=function(id,type){var b=document.getElementById(id);if(b)b.addEventListener('click',function(){if(id.startsWith('rpt'))genReport(type);else emailReport(type);});};
  wire('rptWeekly','weekly');wire('rptMonthly','monthly');wire('rptQtly','quarterly');
  wire('emailWeekly','weekly');wire('emailMonthly','monthly');wire('emailQtly','quarterly');
}

function emailReport(type){
  var typeLabel=type==='weekly'?'Weekly':type==='monthly'?'Monthly':'Quarterly',email=SESSION.email||'';
  openModal('<div class="md-hd"><div class="md-title">📧 Send Report via Email</div><button class="xbtn" id="closeEmailBtn">✕</button></div>'
    +'<div class="md-bd"><div class="notice-b notice mb16">Simulates sending the '+typeLabel+' Report to your email.</div>'
    +'<div class="fg mb12"><label class="fl">Send To</label><input class="fc" type="email" id="er_email" value="'+email+'"></div>'
    +'<div class="fg mb12"><label class="fl">CC (optional)</label><input class="fc" type="text" id="er_cc" placeholder="Additional recipients..."></div>'
    +'<div class="fg"><label class="fl">Note</label><textarea class="fc" id="er_msg" rows="2"></textarea></div>'
    +'<div class="email-sim" style="margin-top:12px"><div class="email-sim-hd">📧 Preview</div><div style="border-top:1px solid rgba(212,149,42,.3);margin:6px 0;padding-top:6px;font-size:12px">To: '+email+'<br>Subject: Virginia Food TM Tracker — '+typeLabel+' Report<br><br>Hi '+SESSION.name+', your '+typeLabel+' report is attached.<br>— Virginia Food Trade Marketing System</div></div></div>'
    +'<div class="md-ft"><button class="btn btn-outline" id="closeEmailBtn2">Cancel</button><button class="btn btn-primary" id="sendEmailBtn">📤 Send Report</button></div>');
  document.getElementById('closeEmailBtn').addEventListener('click',closeModal);
  document.getElementById('closeEmailBtn2').addEventListener('click',closeModal);
  document.getElementById('sendEmailBtn').addEventListener('click',function(){
    var e=document.getElementById('er_email').value.trim();if(!e){toast('Enter recipient email.','err');return;}
    closeModal();toast('Report sent to '+e+' (simulated).','ok',5000);
  });
}

function genReport(type){
  var u=SESSION.username,acts=S.get('acts_'+u,[]),d=new Date(),mo=monthKey(),fActs=[],title='',ml=d.toLocaleString('en-PH',{month:'long',year:'numeric'});
  if(type==='weekly'){var wa=new Date(d);wa.setDate(wa.getDate()-7);for(var i=0;i<acts.length;i++)if(new Date(acts[i].date+' 00:00')>=wa)fActs.push(acts[i]);title='Weekly Report — '+d.toLocaleString('en-PH',{month:'long',day:'numeric',year:'numeric'});}
  else if(type==='monthly'){for(var i=0;i<acts.length;i++)if(acts[i].date&&acts[i].date.indexOf(mo)===0)fActs.push(acts[i]);title='Monthly Report — '+ml;}
  else{for(var i=0;i<acts.length;i++){if(!acts[i].date)continue;var m=parseInt(acts[i].date.split('-')[1]);if(m>=4&&m<=6)fActs.push(acts[i]);}title='Q2 Report — April–June '+d.getFullYear();}
  var checks=[],stores={};
  for(var i=0;i<fActs.length;i++){if(fActs[i].type==='Trade Check / Store Visit')checks.push(fActs[i]);if(fActs[i].store)stores[fActs[i].store]=1;}
  var totalPts=0;for(var i=0;i<fActs.length;i++)totalPts+=fActs[i].merits||0;
  var scSum=0;for(var i=0;i<checks.length;i++)scSum+=checks[i].score||0;
  var avgSc=checks.length?Math.round(scSum/checks.length):0,lvl=getLevel(totalPts);
  var rows='';for(var i=0;i<fActs.length;i++){var a=fActs[i];rows+='<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:8px;font-size:12px;color:#6b7280">'+fmtDate(a.date)+'</td><td style="padding:8px;font-size:12px">'+(a.type+(a.eventTitle?' — '+a.eventTitle:''))+'</td><td style="padding:8px;font-size:12px;font-weight:600">'+(a.store||a.venue||'—')+'</td><td style="padding:8px;font-size:12px">'+(a.ch||'—')+'</td><td style="padding:8px;font-size:12px">'+(a.rating?a.rating.charAt(0).toUpperCase()+a.rating.slice(1):'—')+'</td><td style="padding:8px;font-size:12px">'+(a.score?a.score+'%':'—')+'</td><td style="padding:8px;font-size:12px;font-weight:700;color:#D4952A">+'+(a.merits||0)+'</td></tr>';}
  if(!rows)rows='<tr><td colspan="7" style="padding:16px;text-align:center;color:#9ca3af">No activities.</td></tr>';
  var win=window.open('','_blank','width=920,height=720');if(!win){toast('Allow popups to print.','err');return;}
  win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>'+title+'</title><style>body{font-family:-apple-system,sans-serif;margin:0;padding:32px;color:#1A2540}@media print{.no-print{display:none}}.hdr{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;padding-bottom:16px;border-bottom:2px solid #1A2540}.lb{width:42px;height:42px;background:#C8202C;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:20px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:0 0 24px}.st{background:#F5F4F1;border-radius:8px;padding:12px;border-top:3px solid #C8202C}.st:nth-child(2){border-color:#D4952A}.st:nth-child(3){border-color:#15803D}.st:nth-child(4){border-color:#1A2540}.sl{font-size:10px;text-transform:uppercase;color:#6b7280;margin-bottom:3px}.sv{font-size:22px;font-weight:800}table{width:100%;border-collapse:collapse}th{text-align:left;padding:8px;background:#1A2540;color:#fff;font-size:11px;text-transform:uppercase}.pbt{background:#C8202C;color:#fff;border:none;padding:10px 20px;border-radius:8px;font-size:13px;cursor:pointer;margin-right:8px}.cbt{background:#fff;color:#1A2540;border:1.5px solid #d1d5db;padding:10px 20px;border-radius:8px;font-size:13px;cursor:pointer}</style></head><body>'
    +'<div class="no-print" style="margin-bottom:20px"><button class="pbt" onclick="window.print()">🖨️ Print / Save PDF</button><button class="cbt" onclick="window.close()">✕ Close</button></div>'
    +'<div class="hdr"><div style="display:flex;align-items:center;gap:12px"><div class="lb">V</div><div><div style="font-size:16px;font-weight:700">Virginia Food, Inc.</div><div style="font-size:11px;color:#6b7280;text-transform:uppercase">Trade Marketing Division</div></div></div><div style="text-align:right;font-size:12px;color:#6b7280"><div>Generated: '+new Date().toLocaleString('en-PH')+'</div><div>By: '+SESSION.name+'</div><div>Area: '+SESSION.area+'</div></div></div>'
    +'<h1 style="font-size:20px;font-weight:800;margin-bottom:18px">'+title+'</h1>'
    +'<div class="stats"><div class="st"><div class="sl">Stores Visited</div><div class="sv">'+Object.keys(stores).length+'</div></div><div class="st"><div class="sl">Trade Checks</div><div class="sv">'+checks.length+'</div></div><div class="st"><div class="sl">Avg Score</div><div class="sv">'+avgSc+'%</div></div><div class="st"><div class="sl">Merit Points</div><div class="sv">'+totalPts+'</div></div></div>'
    +'<table><thead><tr><th>Date</th><th>Activity</th><th>Store / Venue</th><th>Ch</th><th>Rating</th><th>Score</th><th>Points</th></tr></thead><tbody>'+rows+'</tbody></table>'
    +'<p style="margin-top:24px;font-size:12px;color:#374151;line-height:1.7">'+SESSION.name+' completed <strong>'+fActs.length+' activities</strong> covering <strong>'+Object.keys(stores).length+' unique stores</strong>. Avg score: <strong>'+avgSc+'%</strong>. Merit pts: <strong>'+totalPts.toLocaleString()+'</strong> ('+lvl.name+' level).</p>'
    +'<div style="margin-top:40px;padding-top:14px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;font-size:11px;color:#9ca3af"><span>Virginia Food, Inc. — Confidential</span><span>Page 1 of 1</span></div></body></html>');
  win.document.close();
}

function pgSettings(el){
  var u=SESSION.username,isTMS=SESSION.role==='tms',admin=isAdmin();
  var roleLabel={tms:'TM Specialist',supervisor:'TM Supervisor',kas:'Key Account Specialist',lead:'Team Lead / KAS',manager:'Administrator'};
  var myStoresSection='';
  if(isTMS){
    var myS=S.get('my_stores_'+u,null)||[],chips='';
    for(var i=0;i<STORES.length;i++){var s=STORES[i],isSel=false;for(var j=0;j<myS.length;j++)if(myS[j]===s.name){isSel=true;break;}chips+='<span class="store-chip'+(isSel?' sel':'')+'" data-store="'+s.name+'">'+(isSel?'✓ ':'')+s.name+' <span class="text-xs" style="opacity:.6">'+s.ch+'</span></span>';}
    myStoresSection=sd('My Assigned Stores')+'<div class="card mb16"><div class="card-title">Store Account Assignments</div><div class="notice-b notice mb12" style="font-size:12px">Select the stores assigned to your account / KAS. These will appear in your Store Coverage page.</div><div style="margin-bottom:12px" id="storeChips">'+chips+'</div><div class="flex gap8"><button class="btn btn-primary btn-sm" id="saveStoresBtn">💾 Save Store Assignments</button><button class="btn btn-outline btn-sm" id="clearStoresBtn">Clear All (Show All Stores)</button></div></div>';
  }
  var rightsSection='';
  if(admin){
    var keys=Object.keys(USERS),adminCount=0,tmsCount=0,supervisorCount=0,kasCount=0;
    for(var r=0;r<keys.length;r++){
      if(USERS[keys[r]].role==='manager')adminCount++;
      else if(USERS[keys[r]].role==='tms')tmsCount++;
      else if(USERS[keys[r]].role==='supervisor')supervisorCount++;
      else if(USERS[keys[r]].role==='kas')kasCount++;
    }
    rightsSection=sd('Rights & Access')
      +'<div class="card mb16"><div class="flex items-center jbet mb12 flex-wrap gap8"><div><div class="card-title" style="margin:0">Admin Rights Control</div><div class="text-sm text-muted">Only administrators can view users, add accounts, reset passwords, or change roles.</div></div><button class="btn btn-primary btn-sm" id="manageRightsBtn">Manage User Rights</button></div>'
      +'<div class="g4"><div class="sc sc-red" style="padding:12px"><div class="sc-label">Admins</div><div class="sc-val">'+adminCount+'</div></div><div class="sc sc-gold" style="padding:12px"><div class="sc-label">TMS</div><div class="sc-val">'+tmsCount+'</div></div><div class="sc sc-navy" style="padding:12px"><div class="sc-label">Supervisors</div><div class="sc-val">'+supervisorCount+'</div></div><div class="sc sc-green" style="padding:12px"><div class="sc-label">KAS</div><div class="sc-val">'+kasCount+'</div></div></div></div>';
  }
  el.innerHTML='<div class="g2"><div>'
    +sd('Profile Information')
    +'<div class="card mb16"><div class="card-title">Display Name & Area</div><div class="fr"><div class="fg"><label class="fl">Display Name</label><input class="fc" type="text" id="st_name" value="'+SESSION.name+'"></div></div><div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Area</label><input class="fc" type="text" id="st_area" value="'+SESSION.area+'"></div></div><div style="margin-top:14px;display:flex;justify-content:flex-end"><button class="btn btn-navy" id="saveProfileBtn">💾 Save Profile</button></div></div>'
    +sd('Email & Password')
    +'<div class="card mb16"><div class="card-title">Update Email</div><div class="fr"><div class="fg"><label class="fl">Current Email</label><input class="fc" type="text" value="'+(SESSION.email||'—')+'" readonly style="opacity:.6;cursor:not-allowed"></div></div><div class="fr"><div class="fg"><label class="fl">New Email</label><input class="fc" type="email" id="st_newemail" placeholder="new@email.com"></div></div><div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Current Password</label><input class="fc" type="password" id="st_emailpw"></div></div><div style="margin-top:14px;display:flex;justify-content:flex-end"><button class="btn btn-gold" id="saveEmailBtn">✉️ Update Email</button></div></div>'
    +'<div class="card"><div class="card-title">Change Password</div><div class="fr"><div class="fg"><label class="fl">Current Password</label><input class="fc" type="password" id="st_oldpw"></div></div><div class="fr"><div class="fg"><label class="fl">New Password</label><input class="fc" type="password" id="st_newpw" placeholder="Min 6 characters"></div></div><div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Confirm New Password</label><input class="fc" type="password" id="st_confpw"></div></div><div style="margin-top:14px;display:flex;justify-content:flex-end"><button class="btn btn-primary" id="savePwBtn">🔒 Update Password</button></div></div>'
    +'</div><div>'+sd('Account Info')
    +'<div class="card mb16" style="background:var(--navy-l)"><div class="flex flex-col gap12"><div class="flex jbet text-sm"><span class="text-muted">Email</span><span class="f600">'+(SESSION.email||'—')+'</span></div><div class="flex jbet text-sm"><span class="text-muted">Name</span><span class="f600">'+SESSION.name+'</span></div><div class="flex jbet text-sm"><span class="text-muted">Area</span><span class="f600">'+SESSION.area+'</span></div><div class="flex jbet text-sm"><span class="text-muted">Role</span><span class="f600">'+(roleLabel[SESSION.role]||SESSION.role)+'</span></div></div></div>'
    +rightsSection+myStoresSection+'</div></div>';
  document.getElementById('saveProfileBtn').addEventListener('click',saveProfile);
  document.getElementById('saveEmailBtn').addEventListener('click',saveEmail);
  document.getElementById('savePwBtn').addEventListener('click',savePassword);
  var mrb=document.getElementById('manageRightsBtn');if(mrb)mrb.addEventListener('click',function(){nav('usermgmt');});
  if(isTMS){
    var chips=document.querySelectorAll('#storeChips .store-chip');
    for(var i=0;i<chips.length;i++){(function(chip){chip.addEventListener('click',function(){chip.classList.toggle('sel');chip.textContent=(chip.classList.contains('sel')?'✓ ':'')+chip.getAttribute('data-store')+' ';var sp=document.createElement('span');sp.className='text-xs';sp.style.opacity='.6';var sName=chip.getAttribute('data-store'),sCh='';for(var k=0;k<STORES.length;k++)if(STORES[k].name===sName){sCh=STORES[k].ch;break;}sp.textContent=sCh;chip.appendChild(sp);});})(chips[i]);}
    document.getElementById('saveStoresBtn').addEventListener('click',function(){
      var selChips=document.querySelectorAll('#storeChips .store-chip.sel'),storeNames=[];
      for(var i=0;i<selChips.length;i++)storeNames.push(selChips[i].getAttribute('data-store'));
      S.set('my_stores_'+SESSION.username,storeNames);toast('Store assignments saved! ('+storeNames.length+' stores)','ok');
    });
    document.getElementById('clearStoresBtn').addEventListener('click',function(){S.set('my_stores_'+SESSION.username,[]);var allChips=document.querySelectorAll('#storeChips .store-chip');for(var i=0;i<allChips.length;i++)allChips[i].classList.remove('sel');toast('Cleared — all stores will show.','ok');});
  }
}

function saveProfile(){var name=gv('st_name'),area=gv('st_area');if(!name){toast('Name cannot be empty.','err');return;}USERS[SESSION.username].name=name;USERS[SESSION.username].area=area;SESSION.name=name;SESSION.area=area;var parts=name.split(' '),init=(parts[0].charAt(0)+(parts[1]?parts[1].charAt(0):'')).toUpperCase();SESSION.init=init;USERS[SESSION.username].init=init;document.getElementById('sbName').textContent=name;document.getElementById('sbAva').textContent=init;S.set('session',SESSION);toast('Profile updated!','ok');}
function saveEmail(){var ne=gv('st_newemail'),pw=document.getElementById('st_emailpw').value,u=SESSION.username;if(!ne){toast('Enter new email.','err');return;}if(!pw){toast('Enter your password.','err');return;}if(USERS[u].pw!==pw){toast('Incorrect password.','err');return;}var ex=findUserByEmail(ne);if(ex&&ex[0]!==u){toast('Email already registered.','err');return;}USERS[u].email=ne;SESSION.email=ne;document.getElementById('sbEmail').textContent=ne;S.set('session',SESSION);toast('Email updated!','ok');}
function savePassword(){var op=document.getElementById('st_oldpw').value,np=document.getElementById('st_newpw').value,cp=document.getElementById('st_confpw').value,u=SESSION.username;if(!op||!np||!cp){toast('Fill in all fields.','err');return;}if(USERS[u].pw!==op){toast('Incorrect current password.','err');return;}if(np.length<6){toast('Min 6 characters.','err');return;}if(np!==cp){toast('Passwords do not match.','err');return;}USERS[u].pw=np;document.getElementById('st_oldpw').value='';document.getElementById('st_newpw').value='';document.getElementById('st_confpw').value='';toast('Password updated!','ok');}

function pgSuperDash(el){
  var tmsList=[],keys=Object.keys(USERS);
  for(var i=0;i<keys.length;i++){var u=USERS[keys[i]];if(u.role==='tms'&&u.area.toLowerCase().indexOf(SESSION.area.toLowerCase())>=0)tmsList.push({key:keys[i],user:u});}
  var totalChecks=0,totalStores={},totalPts=0;
  for(var i=0;i<tmsList.length;i++){var acts=S.get('acts_'+tmsList[i].key,[]);for(var j=0;j<acts.length;j++){if(acts[j].date&&acts[j].date.indexOf(monthKey())===0){if(acts[j].type==='Trade Check / Store Visit')totalChecks++;if(acts[j].store)totalStores[acts[j].store]=1;totalPts+=acts[j].merits||0;}}}
  var tmsOpts='<option value="">— Select TMS —</option>';for(var i=0;i<tmsList.length;i++)tmsOpts+='<option value="'+tmsList[i].key+'">'+tmsList[i].user.name+'</option>';
  el.innerHTML='<div class="notice notice-p mb16">🔎 Supervisor View — <strong>'+SESSION.area+' Area</strong></div>'
    +'<div class="g4 mb20"><div class="sc sc-navy"><div class="sc-label">TMS in Area</div><div class="sc-val">'+tmsList.length+'</div><div class="sc-ico">👤</div></div><div class="sc sc-red"><div class="sc-label">Stores Covered</div><div class="sc-val">'+Object.keys(totalStores).length+'</div></div><div class="sc sc-green"><div class="sc-label">Trade Checks</div><div class="sc-val">'+totalChecks+'</div></div><div class="sc sc-gold"><div class="sc-label">Total Merit Pts</div><div class="sc-val">'+totalPts.toLocaleString()+'</div></div></div>'
    +sd('Quick TMS Lookup')+'<div class="card mb20"><div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Select TMS</label><select class="fc" id="sup_tms">'+tmsOpts+'</select></div><div class="fg" style="flex:.5;align-self:flex-end"><button class="btn btn-primary w-full" id="supViewBtn">View Activity</button></div></div><div id="sup_result" style="margin-top:16px"></div></div>'
    +sd('TMS Overview')+'<div class="card oa"><table class="dt" style="min-width:580px"><thead><tr><th>TMS Name</th><th>Area</th><th>Stores (Mo.)</th><th>Checks (Mo.)</th><th>Merit Pts</th><th>Action</th></tr></thead><tbody>'+buildSuperTable(tmsList)+'</tbody></table></div>';
  document.getElementById('supViewBtn').addEventListener('click',function(){supViewTMS(gv('sup_tms'));});
  var qvBtns=el.querySelectorAll('.sup-qv');for(var i=0;i<qvBtns.length;i++){(function(btn){btn.addEventListener('click',function(){document.getElementById('sup_tms').value=btn.getAttribute('data-key');supViewTMS(btn.getAttribute('data-key'));});})(qvBtns[i]);}
}
function buildSuperTable(tmsList){
  var rows='';
  for(var i=0;i<tmsList.length;i++){var t=tmsList[i],sc=storesCovered(t.key),ch=checksThisMonth(t.key),mp=monthPts(t.key)||(DEMO_PTS[i]||700);
    rows+='<tr><td><div class="f600 text-sm">'+t.user.name+'</div><div class="text-xs text-muted">'+t.user.email+'</div></td><td class="text-sm">'+t.user.area+'</td><td class="f600 text-sm">'+sc+'</td><td class="f600 text-sm">'+ch+'</td><td style="color:var(--gold);font-weight:700">'+mp.toLocaleString()+'</td><td><button class="btn btn-xs btn-primary sup-qv" data-key="'+t.key+'">View</button></td></tr>';}
  if(!rows)rows='<tr><td colspan="6" style="text-align:center;padding:20px;color:var(--muted)">No TMS found for this area.</td></tr>';
  return rows;
}
function supViewTMS(tmsKey){
  var result=document.getElementById('sup_result');if(!tmsKey||!result)return;
  var u=USERS[tmsKey];if(!u)return;
  var acts=S.get('acts_'+tmsKey,[]),rows='',shown=Math.min(10,acts.length);
  for(var i=0;i<shown;i++){var a=acts[i];rows+='<tr><td class="text-sm text-muted">'+fmtDate(a.date)+'</td><td class="text-sm f600">'+a.type+'</td><td class="text-sm">'+(a.store||a.venue||'—')+'</td><td>'+ratingBadge(a.rating)+'</td><td class="text-sm">'+(a.score?a.score+'%':'—')+'</td><td style="color:var(--gold);font-weight:700">+'+(a.merits||0)+'</td></tr>';}
  if(!rows)rows='<tr><td colspan="6" style="text-align:center;padding:16px;color:var(--muted)">No activities logged yet.</td></tr>';
  result.innerHTML='<div style="border-top:1px solid var(--border);padding-top:16px"><div class="flex items-center jbet mb12 flex-wrap gap8"><div><div class="f700">'+u.name+'</div><div class="text-sm text-muted">'+u.area+' · '+u.email+'</div></div><button class="btn btn-navy btn-sm" id="supRptBtn">📊 Monthly Report</button></div>'
    +'<div class="oa"><table class="dt" style="min-width:500px"><thead><tr><th>Date</th><th>Activity</th><th>Store</th><th>Rating</th><th>Score</th><th>Merits</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
  document.getElementById('supRptBtn').addEventListener('click',function(){supGenReport(tmsKey);});
}
function pgTMSLookup(el){
  if(SESSION.role!=='supervisor'){el.innerHTML='<div class="notice notice-r">Access restricted.</div>';return;}
  var all=[],keys=Object.keys(USERS);for(var i=0;i<keys.length;i++)if(USERS[keys[i]].role==='tms')all.push({key:keys[i],user:USERS[keys[i]]});
  var tmsOpts='<option value="">— Select TMS —</option>';for(var i=0;i<all.length;i++)tmsOpts+='<option value="'+all[i].key+'">'+all[i].user.name+' ('+all[i].user.area+')</option>';
  el.innerHTML='<div class="notice notice-p mb20">🔎 Look up any TMS and view their activity log.</div>'
    +'<div class="card mb20"><div class="card-title">Search TMS Activity</div><div class="fr"><div class="fg"><label class="fl">Area</label><input class="fc" type="text" id="lkp_area" value="'+SESSION.area+'" placeholder="e.g. Mindanao"></div><div class="fg"><label class="fl">TMS Name</label><select class="fc" id="lkp_tms">'+tmsOpts+'</select></div><div class="fg" style="flex:.5;align-self:flex-end"><button class="btn btn-primary w-full" id="lkpBtn">View Activity</button></div></div><div id="lkp_result"></div></div>';
  document.getElementById('lkpBtn').addEventListener('click',function(){
    var tmsKey=gv('lkp_tms');if(!tmsKey){toast('Select a TMS.','err');return;}
    var u=USERS[tmsKey];if(!u)return;
    var result=document.getElementById('lkp_result'),acts=S.get('acts_'+tmsKey,[]);
    var sc=storesCovered(tmsKey),ch=checksThisMonth(tmsKey),mp=monthPts(tmsKey);
    var rows='',shown=Math.min(20,acts.length);
    for(var i=0;i<shown;i++){var a=acts[i];rows+='<tr><td class="text-sm text-muted">'+fmtDate(a.date)+'</td><td class="text-sm f600">'+a.type+'</td><td class="text-sm">'+(a.store||a.venue||'—')+'</td><td><span class="badge '+(a.ch==='MT'?'b-navy':'b-orange')+'">'+(a.ch||'—')+'</span></td><td>'+ratingBadge(a.rating)+'</td><td class="text-sm">'+(a.score?a.score+'%':'—')+'</td><td style="color:var(--gold);font-weight:700">+'+(a.merits||0)+'</td></tr>';}
    if(!rows)rows='<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--muted)">No activities logged yet.</td></tr>';
    result.innerHTML='<div style="border-top:1px solid var(--border);padding-top:16px"><div class="flex items-center jbet mb16 flex-wrap gap8"><div><div class="f700" style="font-size:15px">'+u.name+'</div><div class="text-sm text-muted">'+u.area+' · '+u.email+'</div></div><button class="btn btn-navy btn-sm" id="lkpRptBtn">📊 Monthly Report</button></div>'
      +'<div class="g3 mb16"><div class="sc sc-red" style="padding:12px"><div class="sc-label">Stores</div><div class="sc-val">'+sc+'</div></div><div class="sc sc-navy" style="padding:12px"><div class="sc-label">Checks</div><div class="sc-val">'+ch+'</div></div><div class="sc sc-gold" style="padding:12px"><div class="sc-label">Merit Pts</div><div class="sc-val">'+mp+'</div></div></div>'
      +'<div class="oa"><table class="dt" style="min-width:640px"><thead><tr><th>Date</th><th>Activity</th><th>Store</th><th>Ch</th><th>Rating</th><th>Score</th><th>Merits</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
    document.getElementById('lkpRptBtn').addEventListener('click',function(){supGenReport(tmsKey);});
  });
}

function supGenReport(tmsKey){
  var u=USERS[tmsKey];if(!u)return;
  var acts=S.get('acts_'+tmsKey,[]),mo=monthKey(),fActs=[],checks=[],stores={};
  for(var i=0;i<acts.length;i++)if(acts[i].date&&acts[i].date.indexOf(mo)===0)fActs.push(acts[i]);
  for(var i=0;i<fActs.length;i++){if(fActs[i].type==='Trade Check / Store Visit')checks.push(fActs[i]);if(fActs[i].store)stores[fActs[i].store]=1;}
  var totalPts=0;for(var i=0;i<fActs.length;i++)totalPts+=fActs[i].merits||0;
  var scSum=0;for(var i=0;i<checks.length;i++)scSum+=checks[i].score||0;
  var avgSc=checks.length?Math.round(scSum/checks.length):0,ml=new Date().toLocaleString('en-PH',{month:'long',year:'numeric'});
  var rows='';for(var i=0;i<fActs.length;i++){var a=fActs[i];rows+='<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:8px;font-size:12px;color:#6b7280">'+fmtDate(a.date)+'</td><td style="padding:8px;font-size:12px">'+(a.type+(a.eventTitle?' — '+a.eventTitle:''))+'</td><td style="padding:8px;font-size:12px;font-weight:600">'+(a.store||a.venue||'—')+'</td><td style="padding:8px;font-size:12px">'+(a.ch||'—')+'</td><td style="padding:8px;font-size:12px">'+(a.rating?a.rating.charAt(0).toUpperCase()+a.rating.slice(1):'—')+'</td><td style="padding:8px;font-size:12px">'+(a.score?a.score+'%':'—')+'</td><td style="padding:8px;font-size:12px;font-weight:700;color:#D4952A">+'+(a.merits||0)+'</td></tr>';}
  if(!rows)rows='<tr><td colspan="7" style="padding:16px;text-align:center;color:#9ca3af">No activities this month.</td></tr>';
  var win=window.open('','_blank','width=920,height=720');if(!win){toast('Allow popups to print.','err');return;}
  win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Monthly Report — '+u.name+'</title><style>body{font-family:-apple-system,sans-serif;margin:0;padding:32px;color:#1A2540}@media print{.no-print{display:none}}.hdr{display:flex;justify-content:space-between;margin-bottom:24px;padding-bottom:16px;border-bottom:2px solid #1A2540}.lb{width:42px;height:42px;background:#C8202C;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:20px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:0 0 24px}.st{background:#F5F4F1;border-radius:8px;padding:12px;border-top:3px solid #C8202C}.sl{font-size:10px;text-transform:uppercase;color:#6b7280;margin-bottom:3px}.sv{font-size:22px;font-weight:800}table{width:100%;border-collapse:collapse}th{text-align:left;padding:8px;background:#1A2540;color:#fff;font-size:11px;text-transform:uppercase}.pbt{background:#C8202C;color:#fff;border:none;padding:10px 20px;border-radius:8px;font-size:13px;cursor:pointer;margin-right:8px}.cbt{background:#fff;color:#1A2540;border:1.5px solid #d1d5db;padding:10px 20px;border-radius:8px;font-size:13px;cursor:pointer}</style></head><body>'
    +'<div class="no-print" style="margin-bottom:20px"><button class="pbt" onclick="window.print()">🖨️ Print / Save PDF</button><button class="cbt" onclick="window.close()">✕ Close</button></div>'
    +'<div class="hdr"><div style="display:flex;align-items:center;gap:12px"><div class="lb">V</div><div><div style="font-size:16px;font-weight:700">Virginia Food, Inc.</div><div style="font-size:11px;color:#6b7280;text-transform:uppercase">Trade Marketing Division</div></div></div><div style="text-align:right;font-size:12px;color:#6b7280"><div>Generated by: <strong>'+SESSION.name+'</strong> (Supervisor)</div><div>TMS: <strong>'+u.name+'</strong></div><div>Area: <strong>'+u.area+'</strong></div><div>Period: <strong>'+ml+'</strong></div></div></div>'
    +'<h1 style="font-size:20px;font-weight:800;margin-bottom:18px">Monthly Report — '+u.name+'</h1>'
    +'<div class="stats"><div class="st"><div class="sl">Stores Visited</div><div class="sv">'+Object.keys(stores).length+'</div></div><div class="st"><div class="sl">Trade Checks</div><div class="sv">'+checks.length+'</div></div><div class="st"><div class="sl">Avg Score</div><div class="sv">'+avgSc+'%</div></div><div class="st"><div class="sl">Merit Points</div><div class="sv">'+totalPts+'</div></div></div>'
    +'<table><thead><tr><th>Date</th><th>Activity</th><th>Store / Venue</th><th>Ch</th><th>Rating</th><th>Score</th><th>Points</th></tr></thead><tbody>'+rows+'</tbody></table>'
    +'<div style="margin-top:40px;padding-top:14px;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af">Virginia Food, Inc. — Confidential — Prepared by '+SESSION.name+' (TM Supervisor)</div></body></html>');
  win.document.close();
}

function pgKASDash(el){
  var checks=S.get('all_checks',[]),stores={},totalChecks=checks.length,ratings={excellent:0,good:0,fair:0,poor:0};
  for(var i=0;i<checks.length;i++){if(checks[i].store)stores[checks[i].store]=1;if(checks[i].rating)ratings[checks[i].rating]=(ratings[checks[i].rating]||0)+1;}
  var recentHtml='',shown=Math.min(8,checks.length);
  for(var i=0;i<shown;i++){var c=checks[i];recentHtml+='<tr><td class="text-sm text-muted">'+fmtDate(c.date)+'</td><td class="f600 text-sm">'+(c.store||'—')+'</td><td>'+ratingBadge(c.rating)+'</td><td class="text-sm">'+(c.score?c.score+'%':'—')+'</td><td class="text-sm text-muted">'+(c.tmsName||'—')+'</td></tr>';}
  if(!recentHtml)recentHtml='<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--muted)">No trade checks submitted yet.</td></tr>';
  el.innerHTML='<div class="notice notice-b mb16">👁️ <strong>KAS View</strong> — Read-only access to store visits and trade check results.</div>'
    +'<div class="g4 mb20"><div class="sc sc-navy"><div class="sc-label">Total Stores</div><div class="sc-val">'+STORES.length+'</div><div class="sc-ico">🏪</div></div><div class="sc sc-red"><div class="sc-label">Stores with Checks</div><div class="sc-val">'+Object.keys(stores).length+'</div><div class="sc-ico">✅</div></div><div class="sc sc-green"><div class="sc-label">Total Trade Checks</div><div class="sc-val">'+totalChecks+'</div><div class="sc-ico">📋</div></div><div class="sc sc-gold"><div class="sc-label">Excellent Ratings</div><div class="sc-val">'+(ratings.excellent||0)+'</div><div class="sc-ico">⭐</div></div></div>'
    +sd('Recent Trade Check Activity')
    +'<div class="card oa"><table class="dt" style="min-width:500px"><thead><tr><th>Date</th><th>Store</th><th>Rating</th><th>Score</th><th>TMS</th></tr></thead><tbody>'+recentHtml+'</tbody></table>'
    +'<div style="margin-top:12px;text-align:right"><button class="btn btn-outline btn-sm" id="viewAllStoresBtn">View All Stores →</button></div></div>';
  var vsb=document.getElementById('viewAllStoresBtn');if(vsb)vsb.addEventListener('click',function(){nav('storesview');});
}

function pgStoresView(el){
  var checks=S.get('all_checks',[]),lastCheck={};
  for(var i=0;i<checks.length;i++)if(checks[i].store&&!lastCheck[checks[i].store])lastCheck[checks[i].store]=checks[i];
  var rows='';
  for(var i=0;i<STORES.length;i++){
    var s=STORES[i],lc=lastCheck[s.name],scCell='<span class="text-muted">—</span>';
    if(lc&&lc.score){scCell='<div class="flex items-center gap8"><div class="pb" style="width:55px"><div class="pf '+scoreColor(lc.score)+'" style="width:'+lc.score+'%"></div></div><span class="text-xs f600">'+lc.score+'%</span></div>';}
    rows+='<tr><td><div class="f600 text-sm">'+s.name+'</div></td><td class="text-sm">'+s.area+'</td>'
      +'<td><span class="badge '+(s.ch==='MT'?'b-navy':'b-orange')+'">'+s.ch+'</span></td>'
      +'<td class="text-sm text-muted">'+(lc?fmtDate(lc.date):'Not yet visited')+'</td>'
      +'<td>'+scCell+'</td><td>'+(lc?ratingBadge(lc.rating):'<span class="text-muted">—</span>')+'</td>'
      +'<td class="text-sm text-muted">'+(lc?lc.tmsName||'—':'—')+'</td></tr>';
  }
  el.innerHTML='<div class="notice notice-b mb16">👁️ Read-only view — latest trade check result per store.</div>'
    +'<div class="g3 mb16"><div class="sc sc-navy"><div class="sc-label">Total Stores</div><div class="sc-val">'+STORES.length+'</div></div><div class="sc sc-green"><div class="sc-label">Stores Visited</div><div class="sc-val">'+Object.keys(lastCheck).length+'</div></div><div class="sc sc-gold"><div class="sc-label">Pending Visit</div><div class="sc-val">'+(STORES.length-Object.keys(lastCheck).length)+'</div></div></div>'
    +'<div class="card oa"><div class="flex items-center jbet mb12"><div class="card-title" style="margin:0">All Store Coverage</div><div class="text-sm text-muted">View only · Last trade check per store</div></div>'
    +'<table class="dt" style="min-width:720px"><thead><tr><th>Store</th><th>Area</th><th>Ch</th><th>Last Visit</th><th>Score</th><th>Rating</th><th>TMS</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}

function pgChecksView(el){
  var checks=S.get('all_checks',[]),rows='',shown=Math.min(50,checks.length);
  for(var i=0;i<shown;i++){var c=checks[i];rows+='<tr><td class="text-sm text-muted">'+fmtDate(c.date)+'</td><td class="f600 text-sm">'+(c.store||'—')+'</td><td><span class="badge '+(c.ch==='MT'?'b-navy':'b-orange')+'">'+(c.ch||'—')+'</span></td><td>'+ratingBadge(c.rating)+'</td><td class="text-sm">'+(c.score?c.score+'%':'—')+'</td><td class="text-sm text-muted">'+(c.tmsName||'—')+'</td></tr>';}
  if(!rows)rows='<tr><td colspan="6" style="text-align:center;padding:20px;color:var(--muted)">No trade checks submitted yet.</td></tr>';
  el.innerHTML='<div class="notice notice-b mb16">👁️ Read-only — all submitted trade checks.</div>'
    +'<div class="card oa"><div class="card-title">All Trade Check Results</div><table class="dt" style="min-width:580px"><thead><tr><th>Date</th><th>Store</th><th>Ch</th><th>Rating</th><th>Score</th><th>TMS</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}

function pgUserMgmt(el){
  if(!isAdmin()){el.innerHTML='<div class="notice notice-r">Access restricted to Administrators only.</div>';return;}
  var keys=Object.keys(USERS),tmsCount=0,otherCount=0;
  for(var i=0;i<keys.length;i++){if(USERS[keys[i]].role==='tms')tmsCount++;else otherCount++;}
  var rows='';
  for(var i=0;i<keys.length;i++){
    var uname=keys[i],u=USERS[uname];
    var rColor={tms:'b-navy',supervisor:'b-purple',kas:'b-orange',lead:'b-gold',manager:'b-red'};
    var rLabel={tms:'TM Specialist',supervisor:'TM Supervisor',kas:'KAS',lead:'Team Lead',manager:'Manager'};
    rows+='<tr><td>'+mkAva(u.init,i,30)+'</td><td><div class="f600 text-sm">'+u.name+'</div><div class="text-xs text-muted">'+uname+'</div></td><td class="text-sm">'+(u.email||'—')+'</td><td><span class="badge '+(rColor[u.role]||'b-navy')+'">'+(rLabel[u.role]||u.role)+'</span></td><td class="text-sm">'+u.area+'</td>'
      +'<td><div style="display:flex;align-items:center;gap:6px"><input type="password" value="'+u.pw+'" id="pw_'+uname+'" style="width:110px;padding:4px 8px;border:1px solid var(--bord-m);border-radius:6px;font-size:12px;font-family:inherit" readonly><button class="btn btn-xs btn-outline tgl-pw" data-uname="'+uname+'" title="Show">👁</button><button class="btn btn-xs btn-gold rst-pw" data-uname="'+uname+'">Reset</button></div></td>'
      +'<td><button class="btn btn-xs btn-outline edt-usr" data-uname="'+uname+'">✏️ Edit</button></td></tr>';
  }
  el.innerHTML='<div class="notice notice-b mb16">🔐 Admin View — only administrators can view and add rights.</div>'
    +'<div class="g3 mb20"><div class="sc sc-navy"><div class="sc-label">Total Users</div><div class="sc-val">'+keys.length+'</div></div><div class="sc sc-gold"><div class="sc-label">TM Specialists</div><div class="sc-val">'+tmsCount+'</div></div><div class="sc sc-red"><div class="sc-label">Supervisors / KAS / Mgrs</div><div class="sc-val">'+otherCount+'</div></div></div>'
    +'<div class="card oa mb16"><div class="flex items-center jbet mb12"><div class="card-title" style="margin:0">All User Accounts</div><button class="btn btn-primary btn-sm" id="addUserBtn">+ Add User</button></div>'
    +'<table class="dt" style="min-width:820px"><thead><tr><th></th><th>Name / Username</th><th>Email</th><th>Role</th><th>Area</th><th>Password</th><th>Actions</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
  document.getElementById('addUserBtn').addEventListener('click',showAddUser);
  var tpws=el.querySelectorAll('.tgl-pw');for(var i=0;i<tpws.length;i++){(function(b){b.addEventListener('click',function(){var inp=document.getElementById('pw_'+b.getAttribute('data-uname'));if(inp)inp.type=inp.type==='password'?'text':'password';});})(tpws[i]);}
  var rpws=el.querySelectorAll('.rst-pw');for(var i=0;i<rpws.length;i++){(function(b){b.addEventListener('click',function(){showAdminResetPw(b.getAttribute('data-uname'));});})(rpws[i]);}
  var edts=el.querySelectorAll('.edt-usr');for(var i=0;i<edts.length;i++){(function(b){b.addEventListener('click',function(){showAdminEdit(b.getAttribute('data-uname'));});})(edts[i]);}
}

function showAdminResetPw(uname){
  if(!requireAdmin())return;
  var u=USERS[uname];if(!u)return;
  openModal('<div class="md-hd"><div class="md-title">Reset Password — '+u.name+'</div><button class="xbtn" id="closeRstBtn">✕</button></div>'
    +'<div class="md-bd"><div class="notice mb12" style="font-size:12px">⚠️ This immediately changes the user\'s password.</div>'
    +'<div class="fg mb12"><label class="fl">New Password</label><input class="fc" type="text" id="ar_pw" placeholder="Min 6 characters"></div></div>'
    +'<div class="md-ft"><button class="btn btn-outline" id="closeRstBtn2">Cancel</button><button class="btn btn-primary" id="doRstBtn">Reset Password</button></div>');
  document.getElementById('closeRstBtn').addEventListener('click',closeModal);
  document.getElementById('closeRstBtn2').addEventListener('click',closeModal);
  document.getElementById('doRstBtn').addEventListener('click',function(){var pw=document.getElementById('ar_pw').value.trim();if(!pw||pw.length<6){toast('Min 6 characters.','err');return;}USERS[uname].pw=pw;closeModal();toast('Password for '+USERS[uname].name+' reset.','ok',4000);nav('usermgmt');});
}

function showAdminEdit(uname){
  if(!requireAdmin())return;
  var u=USERS[uname];if(!u)return;
  openModal('<div class="md-hd"><div class="md-title">Edit User — '+u.name+'</div><button class="xbtn" id="closeEdtBtn">✕</button></div>'
    +'<div class="md-bd"><div class="fr"><div class="fg"><label class="fl">Display Name</label><input class="fc" type="text" id="ae_name" value="'+u.name+'"></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Email</label><input class="fc" type="email" id="ae_email" value="'+(u.email||'')+'"></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Area</label><input class="fc" type="text" id="ae_area" value="'+u.area+'"></div></div>'
    +'<div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Role</label><select class="fc" id="ae_role"><option value="tms" '+(u.role==='tms'?'selected':'')+'>TM Specialist</option><option value="supervisor" '+(u.role==='supervisor'?'selected':'')+'>TM Supervisor</option><option value="kas" '+(u.role==='kas'?'selected':'')+'>Key Account Specialist</option><option value="lead" '+(u.role==='lead'?'selected':'')+'>Team Lead</option><option value="manager" '+(u.role==='manager'?'selected':'')+'>Manager</option></select></div></div></div>'
    +'<div class="md-ft"><button class="btn btn-outline" id="closeEdtBtn2">Cancel</button><button class="btn btn-primary" id="saveEdtBtn">Save Changes</button></div>');
  document.getElementById('closeEdtBtn').addEventListener('click',closeModal);
  document.getElementById('closeEdtBtn2').addEventListener('click',closeModal);
  document.getElementById('saveEdtBtn').addEventListener('click',function(){
    var name=gv('ae_name'),email=gv('ae_email'),area=gv('ae_area'),role=gv('ae_role');
    if(!name){toast('Name cannot be empty.','err');return;}
    var parts=name.split(' '),init=(parts[0].charAt(0)+(parts[1]?parts[1].charAt(0):'')).toUpperCase();
    USERS[uname].name=name;USERS[uname].email=email;USERS[uname].area=area;USERS[uname].role=role;USERS[uname].init=init;
    if(SESSION.username===uname){SESSION.name=name;SESSION.email=email;SESSION.area=area;SESSION.role=role;SESSION.init=init;document.getElementById('sbName').textContent=name;document.getElementById('sbEmail').textContent=email;document.getElementById('sbAva').textContent=init;S.set('session',SESSION);}
    closeModal();toast(name+'\'s account updated.','ok');nav('usermgmt');
  });
}

function showAddUser(){
  if(!requireAdmin())return;
  openModal('<div class="md-hd"><div class="md-title">➕ Add New User</div><button class="xbtn" id="closeAUBtn">✕</button></div>'
    +'<div class="md-bd"><div class="fr"><div class="fg"><label class="fl">Full Name *</label><input class="fc" type="text" id="nu_name" placeholder="e.g. Juan dela Cruz"></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Email *</label><input class="fc" type="email" id="nu_email" placeholder="juan@virginiafood.com.ph"></div></div>'
    +'<div class="fr"><div class="fg"><label class="fl">Username *</label><input class="fc" type="text" id="nu_user" placeholder="e.g. jdelacruz"></div><div class="fg"><label class="fl">Password *</label><input class="fc" type="text" id="nu_pw" placeholder="Min 6 characters"></div></div>'
    +'<div class="fr" style="margin-bottom:0"><div class="fg"><label class="fl">Area</label><input class="fc" type="text" id="nu_area" placeholder="e.g. Mindanao"></div>'
    +'<div class="fg"><label class="fl">Role</label><select class="fc" id="nu_role"><option value="tms">TM Specialist</option><option value="supervisor">TM Supervisor</option><option value="kas">Key Account Specialist</option><option value="lead">Team Lead</option><option value="manager">Manager</option></select></div></div></div>'
    +'<div class="md-ft"><button class="btn btn-outline" id="closeAUBtn2">Cancel</button><button class="btn btn-primary" id="saveAUBtn">Create Account</button></div>');
  document.getElementById('closeAUBtn').addEventListener('click',closeModal);
  document.getElementById('closeAUBtn2').addEventListener('click',closeModal);
  document.getElementById('saveAUBtn').addEventListener('click',function(){
    var name=gv('nu_name'),email=gv('nu_email'),uname=gv('nu_user').toLowerCase(),pw=document.getElementById('nu_pw').value.trim(),area=gv('nu_area'),role=gv('nu_role');
    if(!name||!email||!uname||!pw){toast('Fill in all required fields.','err');return;}
    if(pw.length<6){toast('Min 6 characters.','err');return;}
    if(USERS[uname]){toast('Username already exists.','err');return;}
    if(findUserByEmail(email)){toast('Email already registered.','err');return;}
    var parts=name.split(' '),init=(parts[0].charAt(0)+(parts[1]?parts[1].charAt(0):'')).toUpperCase();
    USERS[uname]={pw:pw,role:role,name:name,area:area||'—',init:init,email:email};
    closeModal();toast('Account created for '+name+'.','ok',4000);nav('usermgmt');
  });
}

function filterActsByPeriod(acts,period){
  var d=new Date(),mo=monthKey(),fActs=[];
  if(period==='week'){var dow=d.getDay(),off=dow===0?-6:1-dow,mon=new Date(d);mon.setDate(d.getDate()+off);mon.setHours(0,0,0,0);for(var i=0;i<acts.length;i++)if(acts[i].date&&new Date(acts[i].date+' 00:00')>=mon)fActs.push(acts[i]);}
  else if(period==='month'){for(var i=0;i<acts.length;i++)if(acts[i].date&&acts[i].date.indexOf(mo)===0)fActs.push(acts[i]);}
  else if(period==='lastmonth'){var lm=new Date(d.getFullYear(),d.getMonth()-1,1),lmk=lm.getFullYear()+'-'+(lm.getMonth()<9?'0':'')+(lm.getMonth()+1);for(var i=0;i<acts.length;i++)if(acts[i].date&&acts[i].date.indexOf(lmk)===0)fActs.push(acts[i]);}
  else if(period==='q2'){for(var i=0;i<acts.length;i++){if(!acts[i].date)continue;var m=parseInt(acts[i].date.split('-')[1]);if(m>=4&&m<=6)fActs.push(acts[i]);}}
  else fActs=acts.slice();
  return fActs;
}
function getPeriodLabel(period){
  if(period==='week')return'This Week';
  if(period==='month')return new Date().toLocaleString('en-PH',{month:'long',year:'numeric'});
  if(period==='lastmonth'){var lm=new Date(new Date().getFullYear(),new Date().getMonth()-1,1);return lm.toLocaleString('en-PH',{month:'long',year:'numeric'});}
  if(period==='q2')return'Q2 April–June '+new Date().getFullYear();
  return'All Time';
}
function catActs(fActs){
  var c={checks:[],posm:[],planogram:[],promo:[],oos:[],competitor:[],sponsorship:[],meeting:[],training:[],npi:[],other:[]};
  for(var i=0;i<fActs.length;i++){var t=fActs[i].type;
    if(t==='Trade Check / Store Visit')c.checks.push(fActs[i]);
    else if(t==='POSM Installation / Update')c.posm.push(fActs[i]);
    else if(t==='Planogram Reset')c.planogram.push(fActs[i]);
    else if(t==='Promo Display Setup')c.promo.push(fActs[i]);
    else if(t==='OOS Report & Follow-up')c.oos.push(fActs[i]);
    else if(t==='Competitor Monitoring')c.competitor.push(fActs[i]);
    else if(t==='Sponsorship / Events Sampling')c.sponsorship.push(fActs[i]);
    else if(t.indexOf('Meeting')>=0||t.indexOf('Negotiation')>=0)c.meeting.push(fActs[i]);
    else if(t.indexOf('Training')>=0)c.training.push(fActs[i]);
    else if(t==='New Product Introduction')c.npi.push(fActs[i]);
    else c.other.push(fActs[i]);
  }
  return c;
}
function buildStoreMap(fActs){
  var m={};
  for(var i=0;i<fActs.length;i++){var a=fActs[i];if(!a.store)continue;if(!m[a.store])m[a.store]={visits:0,lastDate:'',lastScore:0,lastRating:'',ch:a.ch||'—'};m[a.store].visits++;if(!m[a.store].lastDate||a.date>m[a.store].lastDate){m[a.store].lastDate=a.date;m[a.store].lastScore=a.score||0;m[a.store].lastRating=a.rating||'';}if(a.ch)m[a.store].ch=a.ch;}
  return m;
}
function getCheckStats(checks){
  var scSum=0,scCount=0,ratings={excellent:0,good:0,fair:0,poor:0};
  for(var i=0;i<checks.length;i++){if(checks[i].score){scSum+=checks[i].score;scCount++;}if(checks[i].rating)ratings[checks[i].rating]=(ratings[checks[i].rating]||0)+1;}
  return{avgScore:scCount?Math.round(scSum/scCount):0,ratings:ratings};
}
function getSectionCompliance(checks){
  var tot={},cnt={};
  for(var i=0;i<checks.length;i++){if(!checks[i].checkData||!checks[i].checkData.sections)continue;var secs=checks[i].checkData.sections;for(var j=0;j<secs.length;j++){var sid=secs[j].id,items=secs[j].items||[],chk=0;for(var k=0;k<items.length;k++)if(items[k].checked)chk++;tot[sid]=(tot[sid]||0)+chk;cnt[sid]=(cnt[sid]||0)+items.length;}}
  return{totals:tot,counts:cnt};
}
function getCompObs(checks){
  var items=[];for(var i=0;i<checks.length;i++){var cd=checks[i].checkData;if(cd&&cd.comp&&cd.comp.trim())items.push({store:checks[i].store,date:checks[i].date,text:cd.comp.trim()});}
  return items;
}

function pgTMSMonitor(el){
  if(SESSION.role!=='manager'){el.innerHTML='<div class="notice notice-r">Access restricted to Managers.</div>';return;}
  var tmsOpts='<option value="">— Select a TMS —</option>',keys=Object.keys(USERS);
  for(var i=0;i<keys.length;i++)if(USERS[keys[i]].role==='tms')tmsOpts+='<option value="'+keys[i]+'">'+USERS[keys[i]].name+' ('+USERS[keys[i]].area+')</option>';
  el.innerHTML='<div class="notice notice-b mb16">📊 Select any TMS to view their full activity breakdown, store coverage, trade check performance, and generate reports.</div>'
    +'<div class="card mb20"><div class="card-title">Select TMS & Period</div>'
    +'<div class="fr"><div class="fg" style="flex:2"><label class="fl">TMS Name</label><select class="fc" id="mon_tms">'+tmsOpts+'</select></div>'
    +'<div class="fg"><label class="fl">Period</label><select class="fc" id="mon_period"><option value="week">This Week</option><option value="month" selected>This Month</option><option value="lastmonth">Last Month</option><option value="q2">Q2 (Apr–Jun)</option><option value="all">All Time</option></select></div>'
    +'<div class="fg" style="flex:.5;align-self:flex-end"><button class="btn btn-primary w-full" id="monViewBtn">View →</button></div></div></div>'
    +'<div id="mon_result"></div>';
  document.getElementById('monViewBtn').addEventListener('click',function(){
    var k=gv('mon_tms'),p=gv('mon_period');if(!k){toast('Please select a TMS.','err');return;}
    buildTMSMonitorView(k,p,document.getElementById('mon_result'));
  });
}

function buildTMSMonitorView(tmsKey,period,resultEl){
  if(!resultEl)return;
  var u=USERS[tmsKey];if(!u)return;
  var allActs=S.get('acts_'+tmsKey,[]),fActs=filterActsByPeriod(allActs,period),periodLabel=getPeriodLabel(period);
  var c=catActs(fActs),storeMap=buildStoreMap(fActs),cs=getCheckStats(c.checks);
  var totalPts=0;for(var i=0;i<fActs.length;i++)totalPts+=fActs[i].merits||0;
  var lvl=getLevel(totalPts),dressups=c.posm.length+c.planogram.length+c.promo.length,storeCount=Object.keys(storeMap).length;
  var actTypes=[['Trade Check / Store Visit',c.checks.length,'pf-red'],['POSM Install / Update',c.posm.length,'pf-navy'],['Planogram Reset',c.planogram.length,'pf-gold'],['Promo Display Setup',c.promo.length,'pf-green'],['OOS Report',c.oos.length,'pf-red'],['Competitor Monitoring',c.competitor.length,'pf-navy'],['Sponsorship / Events',c.sponsorship.length,'pf-gold'],['Meetings & Training',c.meeting.length+c.training.length,'pf-navy'],['Other',c.other.length+c.npi.length,'pf-gold']];
  var maxAct=0;for(var i=0;i<actTypes.length;i++)if(actTypes[i][1]>maxAct)maxAct=actTypes[i][1];
  var actHtml='';for(var i=0;i<actTypes.length;i++){if(!actTypes[i][1])continue;var pct_val=maxAct?Math.round((actTypes[i][1]/maxAct)*100):0;actHtml+='<div style="margin-bottom:7px"><div class="flex jbet text-sm" style="margin-bottom:3px"><span>'+actTypes[i][0]+'</span><span class="f600">'+actTypes[i][1]+'</span></div><div class="pb"><div class="pf '+actTypes[i][2]+'" style="width:'+pct_val+'%"></div></div></div>';}
  var sc=cs.avgScore,scC=cs.ratings,scCol=sc>=85?'var(--green)':sc>=65?'var(--gold)':'var(--red)';
  var ratingBars='',rData=[['Excellent',scC.excellent||0,'pf-green'],['Good',scC.good||0,'pf-navy'],['Fair',scC.fair||0,'pf-gold'],['Poor',scC.poor||0,'pf-red']];
  for(var i=0;i<rData.length;i++){var pp=c.checks.length?Math.round((rData[i][1]/c.checks.length)*100):0;ratingBars+='<div style="margin-bottom:6px"><div class="flex jbet text-sm" style="margin-bottom:2px"><span>'+rData[i][0]+'</span><span class="f600">'+rData[i][1]+'</span></div><div class="pb"><div class="pf '+rData[i][2]+'" style="width:'+pp+'%"></div></div></div>';}
  var secComp=getSectionCompliance(c.checks),secBars='';
  for(var i=0;i<CL_SECTIONS.length;i++){var s=CL_SECTIONS[i];if(!secComp.totals[s.id])continue;var sp=Math.round((secComp.totals[s.id]/secComp.counts[s.id])*100),sc2=sp>=85?'pf-green':sp>=65?'pf-gold':'pf-red';secBars+='<div style="margin-bottom:5px"><div class="flex jbet" style="font-size:11px;margin-bottom:2px"><span>'+s.title.split('–')[0].trim()+'</span><span class="f600">'+sp+'%</span></div><div class="pb"><div class="pf '+sc2+'" style="width:'+sp+'%"></div></div></div>';}
  var storeRows='',sNames=Object.keys(storeMap);
  for(var i=0;i<sNames.length;i++){var sn=sNames[i],sd2=storeMap[sn],scCell='<span class="text-muted">—</span>';if(sd2.lastScore){scCell='<div class="flex items-center gap4"><div class="pb" style="width:40px"><div class="pf '+scoreColor(sd2.lastScore)+'" style="width:'+sd2.lastScore+'%"></div></div><span class="text-xs f600">'+sd2.lastScore+'%</span></div>';}storeRows+='<tr><td class="f600 text-sm">'+sn+'</td><td><span class="badge '+(sd2.ch==='MT'?'b-navy':'b-orange')+'">'+sd2.ch+'</span></td><td class="text-sm">'+sd2.visits+'x</td><td class="text-sm text-muted">'+fmtDate(sd2.lastDate)+'</td><td>'+scCell+'</td><td>'+ratingBadge(sd2.lastRating)+'</td></tr>';}
  if(!storeRows)storeRows='<tr><td colspan="6" style="padding:16px;text-align:center;color:var(--muted)">No stores visited in this period.</td></tr>';
  var winsHtml='',issuesHtml='';
  for(var i=0;i<c.checks.length;i++){var cd=c.checks[i].checkData||{};if(cd.wins&&cd.wins.trim())winsHtml+='<div style="padding:8px 0;border-bottom:1px solid var(--border)"><div class="flex gap8 mb4"><span class="badge b-green" style="font-size:10px">'+c.checks[i].store+'</span></div><div class="text-sm">'+cd.wins+'</div></div>';if(cd.issues&&cd.issues.trim())issuesHtml+='<div style="padding:8px 0;border-bottom:1px solid var(--border)"><div class="flex gap8 mb4"><span class="badge b-red" style="font-size:10px">'+c.checks[i].store+'</span></div><div class="text-sm">'+cd.issues+'</div></div>';}
  if(!winsHtml)winsHtml='<div class="text-muted text-sm">No key wins recorded.</div>';
  if(!issuesHtml)issuesHtml='<div class="text-muted text-sm">No issues recorded.</div>';
  var compHtml='',compObs=getCompObs(c.checks);
  for(var i=0;i<c.competitor.length;i++){var a=c.competitor[i];compHtml+='<div style="padding:8px;background:var(--navy-l);border-radius:var(--rsm);margin-bottom:6px"><div class="flex jbet text-sm mb4"><span class="f600">'+(a.store||'—')+'</span><span class="text-muted">'+fmtDate(a.date)+'</span></div><div class="text-sm text-muted">'+(a.notes||'No notes')+'</div></div>';}
  for(var i=0;i<compObs.length;i++){compHtml+='<div style="padding:8px;background:var(--red-l);border-radius:var(--rsm);margin-bottom:6px"><div class="flex jbet text-sm mb4"><span class="f600">'+compObs[i].store+'</span><span class="text-muted">'+fmtDate(compObs[i].date)+'</span></div><div class="text-sm">'+compObs[i].text+'</div></div>';}
  if(!compHtml)compHtml='<div class="text-muted text-sm">No competitor intelligence recorded.</div>';
  var sponHtml='';
  if(c.sponsorship.length){var sponRows='';for(var i=0;i<c.sponsorship.length;i++){var a=c.sponsorship[i];sponRows+='<tr><td class="text-sm text-muted">'+fmtDate(a.date)+'</td><td class="f600 text-sm">'+(a.eventTitle||'—')+'</td><td class="text-sm">'+(a.venue||a.store||'—')+'</td><td><span class="badge b-purple">'+(a.ch||'Event')+'</span></td><td class="text-sm text-muted">'+(a.notes||'—')+'</td></tr>';}sponHtml='<div class="oa"><table class="dt"><thead><tr><th>Date</th><th>Event Title</th><th>Venue</th><th>Channel</th><th>Notes</th></tr></thead><tbody>'+sponRows+'</tbody></table></div>';}
  var tmsIdx=Object.keys(USERS).indexOf(tmsKey);
  resultEl.innerHTML=
    '<div class="card mb16" style="background:var(--navy);color:#fff"><div class="flex items-center gap12 flex-wrap">'+mkAva(u.init,tmsIdx,52)+'<div><div style="font-size:18px;font-weight:800">'+u.name+'</div><div style="opacity:.6;font-size:13px">'+u.area+' · '+u.email+'</div><div style="margin-top:8px"><span style="background:'+lvl.color+';color:#fff;padding:3px 12px;border-radius:20px;font-size:12px;font-weight:700">🏆 '+lvl.name+'</span></div></div><div style="margin-left:auto;text-align:right"><div style="font-size:32px;font-weight:800">'+totalPts.toLocaleString()+'</div><div style="opacity:.6;font-size:11px;text-transform:uppercase;letter-spacing:.07em">Merit Points</div><div style="opacity:.5;font-size:12px;margin-top:4px">'+periodLabel+'</div></div></div></div>'
    +'<div class="g4 mb16"><div class="sc sc-red"><div class="sc-label">Total Activities</div><div class="sc-val">'+fActs.length+'</div><div class="sc-sub">'+storeCount+' unique stores</div><div class="sc-ico">📊</div></div><div class="sc sc-navy"><div class="sc-label">Trade Checks</div><div class="sc-val">'+c.checks.length+'</div><div class="sc-sub">avg score: '+cs.avgScore+'%</div><div class="sc-ico">✅</div></div><div class="sc sc-gold"><div class="sc-label">Store Dress-ups</div><div class="sc-val">'+dressups+'</div><div class="sc-sub">POSM · Planogram · Promo</div><div class="sc-ico">🎨</div></div><div class="sc sc-green"><div class="sc-label">Excellent Ratings</div><div class="sc-val">'+(scC.excellent||0)+'</div><div class="sc-sub">of '+c.checks.length+' checks</div><div class="sc-ico">⭐</div></div></div>'
    +'<div class="g4 mb16"><div class="sc sc-navy"><div class="sc-label">OOS Reports</div><div class="sc-val">'+c.oos.length+'</div></div><div class="sc sc-red"><div class="sc-label">Competitor Intel</div><div class="sc-val">'+(c.competitor.length+compObs.length)+'</div></div><div class="sc sc-gold"><div class="sc-label">Sponsorships</div><div class="sc-val">'+c.sponsorship.length+'</div></div><div class="sc sc-green"><div class="sc-label">Meetings & Training</div><div class="sc-val">'+(c.meeting.length+c.training.length)+'</div></div></div>'
    +'<div class="g2 mb16"><div class="card"><div class="card-title">Activity Breakdown</div>'+(actHtml||'<div class="text-muted text-sm">No activities in this period.</div>')+'</div>'
    +'<div class="card"><div class="card-title">Trade Check Performance</div><div class="flex gap12 mb12" style="align-items:center"><div style="text-align:center;padding:12px 16px;background:var(--bg);border-radius:var(--rsm)"><div style="font-size:32px;font-weight:800;color:'+scCol+'">'+cs.avgScore+'%</div><div style="font-size:11px;color:var(--muted)">Avg Score</div></div><div style="flex:1">'+ratingBars+'</div></div>'+(secBars?'<div class="text-xs text-muted f700" style="text-transform:uppercase;letter-spacing:.07em;margin:8px 0 6px">Section Compliance</div>'+secBars:'')+'</div></div>'
    +'<div class="card mb16"><div class="flex items-center jbet mb12"><div class="card-title" style="margin:0">Store Coverage — '+storeCount+' stores visited</div></div><div class="oa"><table class="dt" style="min-width:500px"><thead><tr><th>Store</th><th>Ch</th><th>Visits</th><th>Last Visit</th><th>Score</th><th>Rating</th></tr></thead><tbody>'+storeRows+'</tbody></table></div></div>'
    +'<div class="g2 mb16"><div class="card"><div class="card-title">✅ Key Wins</div>'+winsHtml+'</div><div class="card"><div class="card-title">⚠️ Issues & Action Items</div>'+issuesHtml+'</div></div>'
    +'<div class="card mb16"><div class="card-title">🕵️ Competitor Intelligence</div>'+compHtml+'</div>'
    +(c.sponsorship.length?'<div class="card mb16"><div class="card-title">🎪 Sponsorships & Events ('+c.sponsorship.length+')</div>'+sponHtml+'</div>':'')
    +'<div class="card" style="background:var(--navy-l);border-color:rgba(26,37,64,.12)"><div class="flex items-center jbet flex-wrap gap8"><div><div class="f700">Export Reports for '+u.name+'</div><div class="text-sm text-muted">'+periodLabel+'</div></div><div class="flex gap8 flex-wrap"><button class="btn btn-outline" id="mon_dl_weekly">📋 Weekly</button><button class="btn btn-navy" id="mon_dl_monthly">📊 Monthly</button><button class="btn btn-primary" id="mon_dl_full">📈 Full Detailed Report</button></div></div></div>';
  document.getElementById('mon_dl_weekly').addEventListener('click',function(){genDetailedTMSReport(tmsKey,'week');});
  document.getElementById('mon_dl_monthly').addEventListener('click',function(){genDetailedTMSReport(tmsKey,'month');});
  document.getElementById('mon_dl_full').addEventListener('click',function(){var p=gv('mon_period')||'month';genDetailedTMSReport(tmsKey,p);});
}

function pgTMSReports(el){
  if(SESSION.role!=='manager'){el.innerHTML='<div class="notice notice-r">Access restricted to Managers.</div>';return;}
  var keys=Object.keys(USERS),tmsList=[];
  for(var i=0;i<keys.length;i++)if(USERS[keys[i]].role==='tms')tmsList.push({key:keys[i],user:USERS[keys[i]]});
  var tmsOpts='<option value="">— All TMS (Team Report) —</option>';
  for(var i=0;i<tmsList.length;i++)tmsOpts+='<option value="'+tmsList[i].key+'">'+tmsList[i].user.name+' ('+tmsList[i].user.area+')</option>';
  el.innerHTML='<div class="notice notice-b mb16">📋 Generate printable reports for individual TMS or the full team. Select below and choose your period.</div>'
    +'<div class="card mb20"><div class="card-title">Report Configuration</div>'
    +'<div class="fr"><div class="fg" style="flex:2"><label class="fl">TMS (or leave blank for Team Report)</label><select class="fc" id="rpt_tms">'+tmsOpts+'</select></div>'
    +'<div class="fg"><label class="fl">Period</label><select class="fc" id="rpt_period"><option value="week">This Week</option><option value="month" selected>This Month</option><option value="lastmonth">Last Month</option><option value="q2">Q2 (Apr–Jun)</option><option value="all">All Time</option></select></div></div>'
    +'<div class="flex gap8 flex-wrap"><button class="btn btn-primary" id="rptGenIndiv">📋 Individual Report</button><button class="btn btn-navy" id="rptGenTeam">👥 Team Summary Report</button><button class="btn btn-outline" id="rptGenAll">📊 All TMS Table</button></div></div>'
    +'<div id="rpt_quickview">'+buildAllTMSTable(tmsList,'month')+'</div>';
  document.getElementById('rptGenIndiv').addEventListener('click',function(){
    var k=gv('rpt_tms'),p=gv('rpt_period');
    if(!k){toast('Please select a TMS for individual report.','err');return;}
    genDetailedTMSReport(k,p);
  });
  document.getElementById('rptGenTeam').addEventListener('click',function(){
    genTeamReport(gv('rpt_period'));
  });
  document.getElementById('rptGenAll').addEventListener('click',function(){
    var p=gv('rpt_period'),tbl=buildAllTMSTable(tmsList,p);
    document.getElementById('rpt_quickview').innerHTML=tbl;
  });
}

function buildAllTMSTable(tmsList,period){
  var rows='',totActs=0,totChecks=0,totStores=0,totPts=0;
  for(var i=0;i<tmsList.length;i++){
    var t=tmsList[i],acts=S.get('acts_'+t.key,[]),fActs=filterActsByPeriod(acts,period),c=catActs(fActs);
    var storeMap=buildStoreMap(fActs),storeCount=Object.keys(storeMap).length,cs=getCheckStats(c.checks);
    var mp=0;for(var j=0;j<fActs.length;j++)mp+=fActs[j].merits||0;
    totActs+=fActs.length;totChecks+=c.checks.length;totStores+=storeCount;totPts+=mp;
    var scC=sc=cs.avgScore,scCol=sc>=85?'var(--green)':sc>=65?'var(--gold)':'var(--red)';
    rows+='<tr><td>'+mkAva(t.user.init,i,28)+'</td><td><div class="f600 text-sm">'+t.user.name+'</div><div class="text-xs text-muted">'+t.user.area+'</div></td>'
      +'<td class="text-sm f600">'+fActs.length+'</td>'
      +'<td class="text-sm f600">'+storeCount+'</td>'
      +'<td class="text-sm f600">'+c.checks.length+'</td>'
      +'<td><div class="flex items-center gap6"><div class="pb" style="width:50px"><div class="pf '+(sc>=85?'pf-green':sc>=65?'pf-gold':'pf-red')+'" style="width:'+sc+'%"></div></div><span class="text-xs f600" style="color:'+scCol+'">'+sc+'%</span></div></td>'
      +'<td style="color:var(--gold);font-weight:700">'+mp.toLocaleString()+'</td>'
      +'<td><button class="btn btn-xs btn-primary at-view" data-key="'+t.key+'">📊 View</button> <button class="btn btn-xs btn-outline at-rpt" data-key="'+t.key+'">📋 Report</button></td></tr>';
  }
  if(!rows)rows='<tr><td colspan="8" style="padding:16px;text-align:center;color:var(--muted)">No TMS found.</td></tr>';
  var footRow='<tr style="border-top:2px solid var(--border);font-weight:700"><td colspan="2" style="padding:10px 12px;font-size:13px;background:var(--bg)">TOTAL / AVG ('+tmsList.length+' TMS)</td>'
    +'<td style="padding:10px 12px;font-size:13px;background:var(--bg)">'+totActs+'</td>'
    +'<td style="padding:10px 12px;font-size:13px;background:var(--bg)">'+totStores+'</td>'
    +'<td style="padding:10px 12px;font-size:13px;background:var(--bg)">'+totChecks+'</td>'
    +'<td style="padding:10px 12px;font-size:13px;background:var(--bg)">—</td>'
    +'<td style="padding:10px 12px;font-size:13px;background:var(--bg);color:var(--gold)">'+totPts.toLocaleString()+'</td>'
    +'<td style="padding:10px 12px;background:var(--bg)"></td></tr>';
  var html='<div class="card oa"><div class="flex items-center jbet mb12 flex-wrap gap8"><div class="card-title" style="margin:0">All TMS — '+getPeriodLabel(period||'month')+'</div>'
    +'<button class="btn btn-primary btn-sm" id="genTeamRptBtn">📋 Print Team Report</button></div>'
    +'<table class="dt" style="min-width:700px"><thead><tr><th></th><th>TMS Name</th><th>Total Acts</th><th>Stores</th><th>Checks</th><th>Avg Score</th><th>Merits</th><th>Actions</th></tr></thead>'
    +'<tbody>'+rows+footRow+'</tbody></table></div>';
  setTimeout(function(){
    var gb=document.getElementById('genTeamRptBtn');if(gb)gb.addEventListener('click',function(){genTeamReport(document.getElementById('rpt_period')?gv('rpt_period'):'month');});
    var vbs=document.querySelectorAll('.at-view');for(var i=0;i<vbs.length;i++){(function(btn){btn.addEventListener('click',function(){document.getElementById('rpt_tms').value=btn.getAttribute('data-key');var res=document.getElementById('rpt_quickview');buildTMSMonitorView(btn.getAttribute('data-key'),gv('rpt_period')||'month',res);});})(vbs[i]);}
    var rbs=document.querySelectorAll('.at-rpt');for(var i=0;i<rbs.length;i++){(function(btn){btn.addEventListener('click',function(){genDetailedTMSReport(btn.getAttribute('data-key'),gv('rpt_period')||'month');});})(rbs[i]);}
  },80);
  return html;
}

function genDetailedTMSReport(tmsKey,period){
  var u=USERS[tmsKey];if(!u){toast('TMS not found.','err');return;}
  var acts=S.get('acts_'+tmsKey,[]),fActs=filterActsByPeriod(acts,period||'month'),periodLabel=getPeriodLabel(period||'month');
  var c=catActs(fActs),storeMap=buildStoreMap(fActs),cs=getCheckStats(c.checks);
  var totalPts=0;for(var i=0;i<fActs.length;i++)totalPts+=fActs[i].merits||0;
  var lvl=getLevel(totalPts),storeCount=Object.keys(storeMap).length;
  var dressups=c.posm.length+c.planogram.length+c.promo.length;
  var actRows='';
  for(var i=0;i<fActs.length;i++){var a=fActs[i];
    actRows+='<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:7px 10px;font-size:11px;color:#6b7280;white-space:nowrap">'+fmtDate(a.date)+'</td>'
      +'<td style="padding:7px 10px;font-size:12px">'+(a.type+(a.eventTitle?' — <em>'+a.eventTitle+'</em>':''))+'</td>'
      +'<td style="padding:7px 10px;font-size:12px;font-weight:600">'+(a.store||a.venue||'—')+'</td>'
      +'<td style="padding:7px 10px;font-size:11px;color:#6b7280">'+(a.ch||'—')+'</td>'
      +'<td style="padding:7px 10px;font-size:12px">'+(a.rating?a.rating.charAt(0).toUpperCase()+a.rating.slice(1):'—')+'</td>'
      +'<td style="padding:7px 10px;font-size:12px">'+(a.score?a.score+'%':'—')+'</td>'
      +'<td style="padding:7px 10px;font-size:12px;font-weight:700;color:#D4952A">+'+(a.merits||0)+'</td>'
      +'<td style="padding:7px 10px;font-size:11px;color:#6b7280">'+(a.notes?a.notes.slice(0,40)+(a.notes.length>40?'…':''):'—')+'</td></tr>';
  }
  if(!actRows)actRows='<tr><td colspan="8" style="padding:16px;text-align:center;color:#9ca3af">No activities recorded for this period.</td></tr>';
  var storeRows='',sNames=Object.keys(storeMap);
  for(var i=0;i<sNames.length;i++){var sn=sNames[i],sd2=storeMap[sn];
    storeRows+='<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:7px 10px;font-size:12px;font-weight:600">'+sn+'</td>'
      +'<td style="padding:7px 10px;font-size:11px">'+sd2.ch+'</td>'
      +'<td style="padding:7px 10px;font-size:12px">'+sd2.visits+'</td>'
      +'<td style="padding:7px 10px;font-size:11px;color:#6b7280">'+fmtDate(sd2.lastDate)+'</td>'
      +'<td style="padding:7px 10px;font-size:12px">'+(sd2.lastScore?sd2.lastScore+'%':'—')+'</td>'
      +'<td style="padding:7px 10px;font-size:12px">'+(sd2.lastRating?sd2.lastRating.charAt(0).toUpperCase()+sd2.lastRating.slice(1):'—')+'</td></tr>';
  }
  if(!storeRows)storeRows='<tr><td colspan="6" style="padding:14px;text-align:center;color:#9ca3af">No stores visited.</td></tr>';
  var ratData=[['Excellent',cs.ratings.excellent||0,'#15803D'],['Good',cs.ratings.good||0,'#1A2540'],['Fair',cs.ratings.fair||0,'#D4952A'],['Poor',cs.ratings.poor||0,'#C8202C']];
  var ratRows='';for(var i=0;i<ratData.length;i++){var pp=c.checks.length?Math.round((ratData[i][1]/c.checks.length)*100):0;ratRows+='<div style="margin-bottom:7px"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span>'+ratData[i][0]+'</span><span style="font-weight:600">'+ratData[i][1]+' ('+pp+'%)</span></div><div style="height:6px;background:#e5e7eb;border-radius:3px;overflow:hidden"><div style="height:100%;width:'+pp+'%;background:'+ratData[i][2]+';border-radius:3px"></div></div></div>';}
  var sponSection='';
  if(c.sponsorship.length){var sr='';for(var i=0;i<c.sponsorship.length;i++){var a=c.sponsorship[i];sr+='<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:7px 10px;font-size:11px;color:#6b7280">'+fmtDate(a.date)+'</td><td style="padding:7px 10px;font-size:12px;font-weight:600">'+(a.eventTitle||'—')+'</td><td style="padding:7px 10px;font-size:12px">'+(a.venue||a.store||'—')+'</td><td style="padding:7px 10px;font-size:11px;color:#6b7280">'+(a.notes||'—')+'</td></tr>';}sponSection='<h3 style="font-size:14px;font-weight:700;margin:22px 0 10px;padding-bottom:6px;border-bottom:1.5px solid #1A2540">🎪 Sponsorships & Events ('+c.sponsorship.length+')</h3><table style="width:100%;border-collapse:collapse"><thead><tr><th style="text-align:left;padding:7px 10px;background:#1A2540;color:#fff;font-size:11px;text-transform:uppercase">Date</th><th style="text-align:left;padding:7px 10px;background:#1A2540;color:#fff;font-size:11px;text-transform:uppercase">Event Title</th><th style="text-align:left;padding:7px 10px;background:#1A2540;color:#fff;font-size:11px;text-transform:uppercase">Venue</th><th style="text-align:left;padding:7px 10px;background:#1A2540;color:#fff;font-size:11px;text-transform:uppercase">Notes</th></tr></thead><tbody>'+sr+'</tbody></table>';}
  var win=window.open('','_blank','width=960,height=780');if(!win){toast('Allow popups to print.','err');return;}
  win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>TMS Report — '+u.name+'</title><style>body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;margin:0;padding:28px 32px;color:#1A2540;font-size:13px}@media print{.no-print{display:none}}.hdr{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;padding-bottom:14px;border-bottom:3px solid #C8202C}.logo-box{display:flex;align-items:center;gap:12px}.logo{width:48px;height:48px;background:#C8202C;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:22px}.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}.stat{background:#F5F4F1;border-radius:8px;padding:11px 14px;border-top:3px solid #C8202C}.stat:nth-child(2){border-color:#1A2540}.stat:nth-child(3){border-color:#15803D}.stat:nth-child(4){border-color:#D4952A}.stat-lbl{font-size:10px;text-transform:uppercase;letter-spacing:.07em;color:#6b7280;margin-bottom:3px}.stat-val{font-size:22px;font-weight:800}.stat-sub{font-size:11px;color:#6b7280;margin-top:2px}table{width:100%;border-collapse:collapse}th{text-align:left;padding:7px 10px;background:#1A2540;color:#fff;font-size:11px;text-transform:uppercase;letter-spacing:.05em}h2{font-size:16px;font-weight:800;margin:20px 0 6px}h3{font-size:14px;font-weight:700;margin:20px 0 8px;padding-bottom:6px;border-bottom:1.5px solid #1A2540}.pbt{background:#C8202C;color:#fff;border:none;padding:9px 18px;border-radius:8px;font-size:13px;cursor:pointer;margin-right:8px}.cbt{background:#fff;color:#1A2540;border:1.5px solid #d1d5db;padding:9px 18px;border-radius:8px;font-size:13px;cursor:pointer}.lvl-badge{display:inline-block;background:'+lvl.color+';color:#fff;padding:3px 12px;border-radius:20px;font-size:11px;font-weight:700;margin-top:4px}</style></head><body>'
    +'<div class="no-print" style="margin-bottom:18px"><button class="pbt" onclick="window.print()">🖨️ Print / Save as PDF</button><button class="cbt" onclick="window.close()">✕ Close</button></div>'
    +'<div class="hdr"><div class="logo-box"><div class="logo">V</div><div><div style="font-size:17px;font-weight:800">Virginia Food, Inc.</div><div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:.1em">Trade Marketing Division</div></div></div><div style="text-align:right;font-size:11px;color:#6b7280;line-height:1.8"><strong>Prepared by:</strong> '+SESSION.name+'<br><strong>Designation:</strong> Marketing Manager<br><strong>Period:</strong> '+periodLabel+'<br><strong>Generated:</strong> '+new Date().toLocaleString('en-PH')+'</div></div>'
    +'<h2 style="font-size:18px;font-weight:800;margin-bottom:4px">TMS Performance Report</h2>'
    +'<div style="font-size:14px;color:#6b7280;margin-bottom:16px">'+u.name+' · '+u.area+' Area · '+u.email+'<br><span class="lvl-badge">🏆 '+lvl.name+'</span></div>'
    +'<div class="stats-grid"><div class="stat"><div class="stat-lbl">Total Activities</div><div class="stat-val">'+fActs.length+'</div><div class="stat-sub">'+storeCount+' unique stores</div></div><div class="stat"><div class="stat-lbl">Trade Checks</div><div class="stat-val">'+c.checks.length+'</div><div class="stat-sub">avg score '+cs.avgScore+'%</div></div><div class="stat"><div class="stat-lbl">Store Dress-ups</div><div class="stat-val">'+dressups+'</div><div class="stat-sub">POSM · Planogram · Promo</div></div><div class="stat"><div class="stat-lbl">Merit Points</div><div class="stat-val">'+totalPts.toLocaleString()+'</div><div class="stat-sub">'+lvl.name+' level</div></div></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px"><div><h3 style="margin-top:0">Activity Breakdown</h3><table><thead><tr><th>Activity Type</th><th>Count</th></tr></thead><tbody>'
    +'<tr><td style="padding:6px 10px;font-size:12px">Trade Check / Store Visit</td><td style="padding:6px 10px;font-size:12px;font-weight:700">'+c.checks.length+'</td></tr>'
    +'<tr style="background:#f9fafb"><td style="padding:6px 10px;font-size:12px">POSM Installation</td><td style="padding:6px 10px;font-size:12px;font-weight:700">'+c.posm.length+'</td></tr>'
    +'<tr><td style="padding:6px 10px;font-size:12px">Planogram Reset</td><td style="padding:6px 10px;font-size:12px;font-weight:700">'+c.planogram.length+'</td></tr>'
    +'<tr style="background:#f9fafb"><td style="padding:6px 10px;font-size:12px">Promo Display Setup</td><td style="padding:6px 10px;font-size:12px;font-weight:700">'+c.promo.length+'</td></tr>'
    +'<tr><td style="padding:6px 10px;font-size:12px">OOS Report & Follow-up</td><td style="padding:6px 10px;font-size:12px;font-weight:700">'+c.oos.length+'</td></tr>'
    +'<tr style="background:#f9fafb"><td style="padding:6px 10px;font-size:12px">Competitor Monitoring</td><td style="padding:6px 10px;font-size:12px;font-weight:700">'+c.competitor.length+'</td></tr>'
    +'<tr><td style="padding:6px 10px;font-size:12px">Sponsorship / Sampling</td><td style="padding:6px 10px;font-size:12px;font-weight:700">'+c.sponsorship.length+'</td></tr>'
    +'<tr style="background:#f9fafb"><td style="padding:6px 10px;font-size:12px">Meetings & Training</td><td style="padding:6px 10px;font-size:12px;font-weight:700">'+(c.meeting.length+c.training.length)+'</td></tr>'
    +'<tr><td style="padding:6px 10px;font-size:12px;font-weight:700;background:#eef2f8">TOTAL</td><td style="padding:6px 10px;font-size:12px;font-weight:700;background:#eef2f8">'+fActs.length+'</td></tr>'
    +'</tbody></table></div>'
    +'<div><h3 style="margin-top:0">Trade Check Rating Distribution</h3>'+ratRows+'<div style="margin-top:12px;padding:10px;background:#F5F4F1;border-radius:8px;font-size:12px"><strong>Total Checks:</strong> '+c.checks.length+' · <strong>Avg Score:</strong> '+cs.avgScore+'%</div></div></div>'
    +'<h3>Store Coverage — '+storeCount+' Stores Visited</h3>'
    +'<table><thead><tr><th>Store Name</th><th>Channel</th><th>Visits</th><th>Last Visit</th><th>Score</th><th>Rating</th></tr></thead><tbody>'+storeRows+'</tbody></table>'
    +sponSection
    +'<h3>Full Activity Log ('+fActs.length+' entries)</h3>'
    +'<table><thead><tr><th>Date</th><th>Activity</th><th>Store / Venue</th><th>Ch</th><th>Rating</th><th>Score</th><th>Pts</th><th>Notes</th></tr></thead><tbody>'+actRows+'</tbody></table>'
    +'<div style="margin-top:32px;padding-top:12px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;font-size:11px;color:#9ca3af"><span>Virginia Food, Inc. — Strictly Confidential — For Internal Use Only</span><span>Generated: '+new Date().toLocaleString('en-PH')+'</span></div>'
    +'</body></html>');
  win.document.close();
}

function genTeamReport(period){
  period=period||'month';
  var keys=Object.keys(USERS),tmsList=[];
  for(var i=0;i<keys.length;i++)if(USERS[keys[i]].role==='tms')tmsList.push({key:keys[i],user:USERS[keys[i]]});
  var periodLabel=getPeriodLabel(period);
  var totActs=0,totChecks=0,totStores=0,totPts=0,totSc=0,totScCount=0;
  var tmsData=[];
  for(var i=0;i<tmsList.length;i++){
    var t=tmsList[i],acts=S.get('acts_'+t.key,[]),fActs=filterActsByPeriod(acts,period),c=catActs(fActs);
    var storeMap=buildStoreMap(fActs),storeCount=Object.keys(storeMap).length,cs=getCheckStats(c.checks);
    var mp=0;for(var j=0;j<fActs.length;j++)mp+=fActs[j].merits||0;
    totActs+=fActs.length;totChecks+=c.checks.length;totStores+=storeCount;totPts+=mp;
    if(cs.avgScore){totSc+=cs.avgScore;totScCount++;}
    var lvl=getLevel(mp);
    tmsData.push({name:t.user.name,area:t.user.area,acts:fActs.length,stores:storeCount,checks:c.checks.length,avgScore:cs.avgScore,posm:c.posm.length,planogram:c.planogram.length,promo:c.promo.length,oos:c.oos.length,competitor:c.competitor.length,sponsorship:c.sponsorship.length,pts:mp,lvl:lvl.name,exRatings:cs.ratings.excellent||0});
  }
  var teamAvgSc=totScCount?Math.round(totSc/totScCount):0;
  var rows='';
  for(var i=0;i<tmsData.length;i++){var t=tmsData[i];
    rows+='<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:8px 10px;font-size:12px;font-weight:600">'+t.name+'</td><td style="padding:8px 10px;font-size:11px;color:#6b7280">'+t.area+'</td>'
      +'<td style="padding:8px 10px;font-size:12px;font-weight:700;text-align:center">'+t.acts+'</td>'
      +'<td style="padding:8px 10px;font-size:12px;font-weight:700;text-align:center">'+t.stores+'</td>'
      +'<td style="padding:8px 10px;font-size:12px;font-weight:700;text-align:center">'+t.checks+'</td>'
      +'<td style="padding:8px 10px;font-size:12px;text-align:center;color:'+(t.avgScore>=85?'#15803D':t.avgScore>=65?'#D4952A':'#C8202C')+';font-weight:700">'+t.avgScore+'%</td>'
      +'<td style="padding:8px 10px;font-size:12px;text-align:center">'+t.posm+'</td>'
      +'<td style="padding:8px 10px;font-size:12px;text-align:center">'+t.planogram+'</td>'
      +'<td style="padding:8px 10px;font-size:12px;text-align:center">'+t.promo+'</td>'
      +'<td style="padding:8px 10px;font-size:12px;text-align:center">'+t.oos+'</td>'
      +'<td style="padding:8px 10px;font-size:12px;font-weight:700;text-align:center;color:#D4952A">'+t.pts.toLocaleString()+'</td>'
      +'<td style="padding:8px 10px;font-size:11px;color:#6b7280">'+t.lvl+'</td></tr>';
  }
  var footRow='<tr style="border-top:2px solid #1A2540;background:#eef2f8"><td style="padding:8px 10px;font-size:12px;font-weight:800">TOTALS / AVG</td><td style="padding:8px 10px;font-size:11px;color:#6b7280">'+tmsList.length+' TMS</td>'
    +'<td style="padding:8px 10px;font-weight:800;text-align:center">'+totActs+'</td>'
    +'<td style="padding:8px 10px;font-weight:800;text-align:center">'+totStores+'</td>'
    +'<td style="padding:8px 10px;font-weight:800;text-align:center">'+totChecks+'</td>'
    +'<td style="padding:8px 10px;font-weight:800;text-align:center;color:'+(teamAvgSc>=85?'#15803D':teamAvgSc>=65?'#D4952A':'#C8202C')+'">'+teamAvgSc+'%</td>'
    +'<td colspan="4" style="padding:8px 10px;text-align:center;font-size:11px;color:#6b7280">Sum per column above</td>'
    +'<td style="padding:8px 10px;font-weight:800;text-align:center;color:#D4952A">'+totPts.toLocaleString()+'</td>'
    +'<td style="padding:8px 10px"></td></tr>';
  var win=window.open('','_blank','width=1100,height=780');if(!win){toast('Allow popups to print.','err');return;}
  win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Team Report — Virginia Food TM</title><style>body{font-family:-apple-system,sans-serif;margin:0;padding:28px;color:#1A2540;font-size:12px}@media print{.no-print{display:none}}.hdr{display:flex;justify-content:space-between;margin-bottom:22px;padding-bottom:12px;border-bottom:3px solid #C8202C}.logo{width:44px;height:44px;background:#C8202C;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:20px}.stats-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:20px}.stat{background:#F5F4F1;border-radius:8px;padding:10px 12px;border-top:3px solid #C8202C}.stat:nth-child(2){border-color:#1A2540}.stat:nth-child(3){border-color:#15803D}.stat:nth-child(4){border-color:#D4952A}.stat:nth-child(5){border-color:#7C3AED}.stat-lbl{font-size:9px;text-transform:uppercase;letter-spacing:.07em;color:#6b7280;margin-bottom:2px}.stat-val{font-size:20px;font-weight:800}table{width:100%;border-collapse:collapse;font-size:11px}th{text-align:left;padding:7px 10px;background:#1A2540;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:.05em}.pbt{background:#C8202C;color:#fff;border:none;padding:8px 16px;border-radius:8px;font-size:12px;cursor:pointer;margin-right:8px}.cbt{background:#fff;color:#1A2540;border:1.5px solid #d1d5db;padding:8px 16px;border-radius:8px;font-size:12px;cursor:pointer}</style></head><body>'
    +'<div class="no-print" style="margin-bottom:16px"><button class="pbt" onclick="window.print()">🖨️ Print / Save PDF</button><button class="cbt" onclick="window.close()">✕ Close</button></div>'
    +'<div class="hdr"><div style="display:flex;align-items:center;gap:10px"><div class="logo">V</div><div><div style="font-size:16px;font-weight:800">Virginia Food, Inc.</div><div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.1em">Trade Marketing Division</div></div></div><div style="text-align:right;font-size:11px;color:#6b7280;line-height:1.8"><strong>Prepared by:</strong> '+SESSION.name+'<br><strong>Role:</strong> Marketing Manager<br><strong>Period:</strong> '+periodLabel+'<br><strong>Generated:</strong> '+new Date().toLocaleString('en-PH')+'</div></div>'
    +'<h2 style="font-size:16px;font-weight:800;margin-bottom:14px">Team Performance Summary — '+periodLabel+'</h2>'
    +'<div class="stats-grid"><div class="stat"><div class="stat-lbl">Total TMS</div><div class="stat-val">'+tmsList.length+'</div></div><div class="stat"><div class="stat-lbl">Total Activities</div><div class="stat-val">'+totActs+'</div></div><div class="stat"><div class="stat-lbl">Stores Covered</div><div class="stat-val">'+totStores+'</div></div><div class="stat"><div class="stat-lbl">Trade Checks</div><div class="stat-val">'+totChecks+'</div></div><div class="stat"><div class="stat-lbl">Avg Score / Merit Pts</div><div class="stat-val">'+teamAvgSc+'% · '+totPts.toLocaleString()+'</div></div></div>'
    +'<table><thead><tr><th>TMS Name</th><th>Area</th><th>Acts</th><th>Stores</th><th>Checks</th><th>Avg Score</th><th>POSM</th><th>Plano</th><th>Promo</th><th>OOS</th><th>Pts</th><th>Level</th></tr></thead><tbody>'+rows+footRow+'</tbody></table>'
    +'<div style="margin-top:28px;padding-top:12px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;font-size:10px;color:#9ca3af"><span>Virginia Food, Inc. — Strictly Confidential</span><span>Generated: '+new Date().toLocaleString('en-PH')+'</span></div>'
    +'</body></html>');
  win.document.close();
}

// ── Event wiring & boot ──────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function(){});

document.getElementById('hamBtn').addEventListener('click', toggleSB);

document.getElementById('settingsLink').addEventListener('click', function(){
  if(SESSION) nav('settings');
});

document.getElementById('logoutBtn').addEventListener('click', function(e){
  e.stopPropagation(); doLogout();
});

document.getElementById('loginBtn').addEventListener('click', doLogin);

document.getElementById('lgPass').addEventListener('keydown', function(e){
  if(e.key === 'Enter') doLogin();
});

document.getElementById('lgEmail').addEventListener('keydown', function(e){
  if(e.key === 'Enter') document.getElementById('lgPass').focus();
});

document.getElementById('pwEye').addEventListener('click', function(){
  var p = document.getElementById('lgPass');
  p.type = p.type === 'password' ? 'text' : 'password';
});

document.getElementById('forgotBtn').addEventListener('click', showForgot);

document.getElementById('modalEl').addEventListener('click', function(e){
  if(e.target === document.getElementById('modalEl')) closeModal();
});

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeModal();
});

// Boot sequence
window.addEventListener('load', function(){
  S.init(function(){
    var savedSession = S.get('session', null);
    document.getElementById('loadingScreen').style.display = 'none';
    if(savedSession && savedSession.username && USERS[savedSession.username]){
      SESSION = savedSession;
      initApp();
    } else {
      document.getElementById('loginScreen').style.display = 'flex';
    }
  });
});
