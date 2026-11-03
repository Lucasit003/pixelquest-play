/* improve20-r9f-nov1 #1 (audit8 a4): ONE grown-up gate. Remove asked the grown-up to type the child's name with the name already in the
   box's placeholder, and the report and the account block opened on a two-second hold any child can do. Every grown-up door now asks a
   small sum a 7-12 year old is unlikely to answer fast but an adult does in a few seconds: a two-step sum such as "(13 × 4) − 9", or a
   four-digit number written in words to type in digits. A new problem each time; an on-screen number pad (touch) and the digit keys
   (keyboard); no placeholder and no hint. Three wrong answers close the gate (R11D: and keep it shut for five minutes, see below).
   Escape or Cancel backs out and does nothing. Store apps (Apple's Kids Category) want such a gate before any link out of the game, any
   account action and any purchase, so it guards: Remove learner, the grown-ups report, the account block (and its Sign out and Delete),
   Share on the hero card, and every link that leaves the game (guardLinksOut). Styles: ui/parent-gate.css, linked once. */
const ONES=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const TENS=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
/* 0..9999 in words, American style without "and": 4271 -> "four thousand two hundred seventy-one" */
export function numberWords(n){n=Math.floor(Math.abs(+n||0));if(n<20)return ONES[n];const out=[];const th=Math.floor(n/1000),hu=Math.floor(n%1000/100),r=n%100;
 if(th)out.push(`${numberWords(th)} thousand`);if(hu)out.push(`${ONES[hu]} hundred`);if(r)out.push(r<20?ONES[r]:TENS[Math.floor(r/10)]+(r%10?`-${ONES[r%10]}`:''));return out.join(' ');}
export const GATE={tries:3,maxDigits:5,lockMs:5*60*1000,lockKey:'pixelquest.gate.lock'};
const pickInt=(rng,lo,hi)=>lo+Math.floor(Math.max(0,Math.min(.999999,rng()))*(hi-lo+1));
/* improve20-r11d-nov2 #1 (audit9 a7) asked a two-digit by two-digit product ("47 × 38"), which audit10 a7 found is Grade 4-5 maths (CCSS
   4.NBT.5 / 5.NBT.5): the game's own learners can do it. improve20-r13b-nov2 #3: the sum is now a three-digit by two-digit product
   ("473 × 38"), or that product less a two-digit number. It stays only the first step: the gate becomes a parent PIN once one is set (below).
   Factors: 3-digit 102..999 and 2-digit 12..98, each ones digit 2, 3, 4, 6, 7, 8 or 9 (no 0s, 1s or 5s to shortcut), tens digit not 0 on the
   two-digit factor. Answers 1,126..97,902 (at most 5 digits). */
export const GATE_ONES=[2,3,4,6,7,8,9];
const factor=rng=>{for(let i=0;i<20;i++){const t=pickInt(rng,1,9),o=GATE_ONES[pickInt(rng,0,GATE_ONES.length-1)];if(t!==o)return t*10+o;}return 47;};
const factor3=rng=>pickInt(rng,1,9)*100+pickInt(rng,0,9)*10+GATE_ONES[pickInt(rng,0,GATE_ONES.length-1)];
export function makeProblem(rng=Math.random,avoid=null){for(let i=0;i<20;i++){const a=factor3(rng),b=factor(rng),two=rng()<.5;let p;
  if(two){const c=pickInt(rng,12,98);p={kind:'twostep',text:`(${a} × ${b}) − ${c}`,ask:'Work it out and type the answer.',answer:String(a*b-c)};}
  else p={kind:'product',text:`${a} × ${b}`,ask:'Work it out and type the answer.',answer:String(a*b)};
  if(!avoid||p.text!==avoid)return p;}return avoid==='(473 × 38) − 26'?{kind:'twostep',text:'(462 × 37) − 29',ask:'Work it out and type the answer.',answer:'17065'}:{kind:'twostep',text:'(473 × 38) − 26',ask:'Work it out and type the answer.',answer:'17948'};}
/* improve20-r11d-nov2 #1: closing the panel after misses used to give three fresh tries. Tries left and a lockout now live in session
   memory (and the lockout's end in localStorage, outside the save), so closing and reopening the gate keeps the count, and three misses
   keep it shut for GATE.lockMs (5 minutes) whatever is opened. A right answer resets the count. */
let triesLeft=GATE.tries,lockUntil=0;
const store=()=>{try{return globalThis.localStorage||null;}catch{return null;}};
export function gateLockedUntil(now=Date.now()){let t=lockUntil;try{const v=+(store()?.getItem(GATE.lockKey)||0);if(v>t)t=v;}catch{}if(t>now+GATE.lockMs){t=lockUntil=now+GATE.lockMs;try{store()?.setItem(GATE.lockKey,String(t));}catch{}}/* a lock end saved under a wrong clock never holds longer than GATE.lockMs */if(t&&t<=now){lockUntil=0;triesLeft=GATE.tries;try{store()?.removeItem(GATE.lockKey);}catch{}return 0;}return t;}
export const gateTriesLeft=()=>triesLeft;
function lockGate(now){lockUntil=now+GATE.lockMs;triesLeft=0;try{store()?.setItem(GATE.lockKey,String(lockUntil));}catch{}}
export function resetGateLock(){lockUntil=0;triesLeft=GATE.tries;try{store()?.removeItem(GATE.lockKey);}catch{}}
const minsLeft=ms=>Math.max(1,Math.ceil(ms/60000));
let lastText=null,openEl=null;
export const gateOpen=()=>!!(openEl&&openEl.isConnected);
export function ensureGateStyles(doc=globalThis.document){if(!doc?.head||doc.querySelector('link[data-gate-styles]'))return false;const l=doc.createElement('link');l.rel='stylesheet';l.href=new URL('./parent-gate.css',import.meta.url).href;l.dataset.gateStyles='';doc.head.append(l);return true;}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const PAD_KEYS=['1','2','3','4','5','6','7','8','9','back','0','ok'];
/* ---- improve20-r13b-nov2 #3 (audit10 a7): the parent PIN ------------------------------------------------------------------------------
   The first time the sum is answered, the grown-up is asked to choose a 4-digit PIN (entered twice); Skip is allowed, and until a PIN is set
   the gate stays the sum with a "Set a PIN" link. Once set, only the PIN opens a grown-up door (the parents page, the report, Remove,
   Manage, the account block, links out); three misses lock the gate as before (GATE.lockMs, kept across reopening). "Forgot PIN?" asks the
   sum and then a 5-second hold, and clears the PIN. This is a device-local gate, not an account password: the PIN lives in this browser's
   localStorage under PIN.key, outside every learner's save (one PIN per device), only as a salted, iterated SHA-256 hash (never the PIN
   itself); it is never synced (ui/account-sync.js reads only the save keys) and never sent anywhere. Without storage there is no PIN and the
   gate stays the sum. */
export const PIN={key:'pixelquest.gate.pin',offerKey:'pixelquest.gate.pinOffered',len:4,iter:2000,holdMs:5000};
/* SHA-256 (FIPS 180-4), synchronous, on a UTF-8 string -> 64 hex digits; small and dependency-free so the gate works without crypto.subtle */
const K256=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
export function sha256(str){const b=Array.from(new TextEncoder().encode(String(str))),l=b.length*8;b.push(0x80);while(b.length%64!==56)b.push(0);for(let i=7;i>=0;i--)b.push(i>3?0:(l>>>(i*8))&255);
 const H=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],w=new Array(64),r=(x,n)=>(x>>>n)|(x<<(32-n));
 for(let o=0;o<b.length;o+=64){for(let i=0;i<16;i++)w[i]=(b[o+i*4]<<24)|(b[o+i*4+1]<<16)|(b[o+i*4+2]<<8)|b[o+i*4+3];for(let i=16;i<64;i++){const s0=r(w[i-15],7)^r(w[i-15],18)^(w[i-15]>>>3),s1=r(w[i-2],17)^r(w[i-2],19)^(w[i-2]>>>10);w[i]=(w[i-16]+s0+w[i-7]+s1)|0;}
  let [a,bb,c,d,e,f,g,h]=H;for(let i=0;i<64;i++){const t1=(h+(r(e,6)^r(e,11)^r(e,25))+((e&f)^(~e&g))+K256[i]+w[i])|0,t2=((r(a,2)^r(a,13)^r(a,22))+((a&bb)^(a&c)^(bb&c)))|0;h=g;g=f;f=e;e=(d+t1)|0;d=c;c=bb;bb=a;a=(t1+t2)|0;}
  H[0]=(H[0]+a)|0;H[1]=(H[1]+bb)|0;H[2]=(H[2]+c)|0;H[3]=(H[3]+d)|0;H[4]=(H[4]+e)|0;H[5]=(H[5]+f)|0;H[6]=(H[6]+g)|0;H[7]=(H[7]+h)|0;}
 return H.map(x=>(x>>>0).toString(16).padStart(8,'0')).join('');}
const randHex=n=>{const a=new Uint8Array(n);try{globalThis.crypto.getRandomValues(a);}catch{for(let i=0;i<n;i++)a[i]=Math.floor(Math.random()*256);}return Array.from(a,x=>x.toString(16).padStart(2,'0')).join('');};
export const pinHash=(salt,pin,iter=PIN.iter)=>{let h=sha256(`${salt}:${pin}`);for(let i=1;i<iter;i++)h=sha256(salt+h);return h;};
const pinRecord=()=>{try{const v=JSON.parse(store()?.getItem(PIN.key)||'null');return v&&typeof v.salt==='string'&&/^[0-9a-f]{64}$/.test(v.hash||'')?v:null;}catch{return null;}};
export const pinStorable=()=>!!store();
export const pinSet=()=>!!pinRecord();
export function setPin(pin){pin=String(pin??'');if(!new RegExp(`^\\d{${PIN.len}}$`).test(pin))return false;const st=store();if(!st)return false;const salt=randHex(16);try{st.setItem(PIN.key,JSON.stringify({v:1,salt,iter:PIN.iter,hash:pinHash(salt,pin)}));st.setItem(PIN.offerKey,'1');return true;}catch{return false;}}
export function checkPin(pin){const v=pinRecord();if(!v)return false;return pinHash(v.salt,String(pin??''),v.iter|0||PIN.iter)===v.hash;}
export function clearPin(){try{store()?.removeItem(PIN.key);}catch{}}
const pinOffered=()=>{try{return store()?.getItem(PIN.offerKey)==='1';}catch{return true;}};
const markOffered=()=>{try{store()?.setItem(PIN.offerKey,'1');}catch{}};
const entryHTML=(mode,label)=>`<input class="pgate-entry" data-pg-entry type="${mode==='sum'||mode==='forgot'?'text':'password'}" inputmode="numeric" pattern="[0-9]*" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="${mode==='sum'||mode==='forgot'?GATE.maxDigits:PIN.len}" aria-label="${esc(label)}">`;
const padHTML=()=>`<div class="pgate-pad" role="group" aria-label="Number pad">${PAD_KEYS.map(k=>`<button type="button" data-pg-key="${k}"${k==='ok'?' class="primary"':''} aria-label="${k==='back'?'Delete last digit':k==='ok'?'Check answer':k}">${k==='back'?'⌫':k==='ok'?'OK':k}</button>`).join('')}</div>`;
export function gateHTML(p,why='',left=GATE.tries,{mode='sum',link=''}={}){
 const tries=left<GATE.tries?`${left} ${left===1?'try':'tries'} left.`:'';
 const head={sum:'Ask a grown-up',forgot:'Forgot the PIN?',pin:'Ask a grown-up',set1:'Choose a parent PIN',set2:'Choose a parent PIN'}[mode]||'Ask a grown-up';
 const how={sum:p?.ask,forgot:'Work out the sum to clear the PIN.',pin:'Enter the parent PIN.',set1:'Choose 4 digits only a grown-up knows. The PIN stays on this device.',set2:'Enter the same 4 digits again.'}[mode]||'';
 const q=mode==='sum'||mode==='forgot'?`<p class="pgate-q pgate-${p.kind}" data-pg-q>${esc(p.text)}</p>`:'';
 const links=mode==='pin'?'<button type="button" class="pgate-link" data-pg-forgot>Forgot PIN?</button>':mode==='sum'&&link?`<button type="button" class="pgate-link" data-pg-setpin>${esc(link)}</button>`:'';
 const cancel=mode==='set1'||mode==='set2'?'<button type="button" data-pg-skip>Skip for now</button>':'<button type="button" data-pg-cancel>Cancel</button>';
 return `<div class="pgate-body" data-pg-mode="${mode}"><div class="pgate-ask"><span class="eyebrow">GROWN-UPS ONLY</span><h2 id="pgate-title" tabindex="-1">${head}</h2>${why&&mode!=='set1'&&mode!=='set2'?`<p class="pgate-why">${esc(why)}</p>`:''}<p class="pgate-how" data-pg-how>${esc(how)}</p>${q}${entryHTML(mode,mode==='pin'||mode.startsWith('set')?'PIN':'Answer')}<p class="pgate-msg" data-pg-msg role="alert">${mode==='sum'||mode==='pin'||mode==='forgot'?tries:''}</p></div>${padHTML()}<div class="pgate-acts">${links}${cancel}</div></div>`;}
/* Opens the gate over everything (a modal dialog, so it stacks over Settings and the sheets). onPass runs only after a right answer (the PIN
   once one is set, else the sum); onCancel runs on Cancel, Escape, or after the third wrong answer ({closed:true}). Returns the dialog. */
export function openParentGate({why='',onPass,onCancel,rng=Math.random,doc=globalThis.document,now=()=>Date.now(),holdMs=PIN.holdMs}={}){
 if(!doc?.body)return null;closeParentGate();ensureGateStyles(doc);
 const d=doc.createElement('dialog');d.id='parent-gate';d.className='pgate';d.setAttribute('aria-modal','true');d.setAttribute('aria-labelledby','pgate-title');
 let p=makeProblem(rng,lastText),typed='',first='',done=false,gone=false,wantSet=false,mode=pinSet()?'pin':'sum',holdT=null,holdAt=0;const locked=gateLockedUntil(now());let left=triesLeft;lastText=p.text;
 const max=()=>mode==='sum'||mode==='forgot'?GATE.maxDigits:PIN.len;
 const draw=(msg='')=>{d.innerHTML=gateHTML(p,why,left,{mode,link:mode==='sum'&&pinStorable()&&!pinSet()?'Set a PIN':''});wire();show();if(msg){const m=$('[data-pg-msg]');if(m)m.textContent=msg;}};
 const $=q=>d.querySelector(q),show=()=>{const e=$('[data-pg-entry]');if(e&&e.value!==typed)e.value=typed;const ok=$('[data-pg-key="ok"]');if(ok)ok.disabled=mode==='sum'||mode==='forgot'?!typed:typed.length!==PIN.len;};
 const finish=(pass)=>{if(gone)return;gone=done=true;clearTimeout(holdT);try{d.close?.();}catch{}d.remove();if(openEl===d)openEl=null;if(pass)onPass?.();else onCancel?.(pass===null?{closed:true}:{});};
 const shut=(until)=>{done=true;const mins=minsLeft(until-now());d.innerHTML=`<div class="pgate-body pgate-shut"><span class="eyebrow">GROWN-UPS ONLY</span><h2 id="pgate-title" tabindex="-1">The gate is closed</h2><p>That was ${GATE.tries} tries. Ask a grown-up to open it.</p><p class="pgate-wait" data-pg-wait>It opens again in about ${mins} ${mins===1?'minute':'minutes'}.</p><div class="pgate-acts"><button type="button" class="primary" data-pg-close>OK</button></div></div>`;
  const c=$('[data-pg-close]');c.onclick=()=>finish(null);c.focus?.({preventScroll:true});};
 const go=(m,msg='')=>{mode=m;typed='';draw(msg);$('[data-pg-key="1"]')?.focus?.({preventScroll:true});};
 const miss=(again)=>{left=triesLeft=Math.max(0,triesLeft-1);typed='';if(left<=0){const t=now();lockGate(t);shut(lockUntil);return;}if(again){p=makeProblem(rng,p.text);lastText=p.text;}draw(`${mode==='pin'?'That is not the PIN.':'Not quite. Here is a new one.'} ${left} ${left===1?'try':'tries'} left.`);$('[data-pg-key="1"]')?.focus?.({preventScroll:true});};
 /* the reset hold: the button must be held for holdMs (pointer or key); letting go early starts it again */
 const hold=()=>{done=true;d.innerHTML=`<div class="pgate-body pgate-hold-body"><span class="eyebrow">GROWN-UPS ONLY</span><h2 id="pgate-title" tabindex="-1">Clear the PIN</h2><p>Press and hold the button for 5 seconds to clear the parent PIN on this device.</p><button type="button" class="primary pgate-hold" data-pg-hold><span>Hold to clear the PIN</span><i aria-hidden="true"></i></button><div class="pgate-acts"><button type="button" data-pg-cancel>Cancel</button></div></div>`;
  const b=$('[data-pg-hold]'),cleared=()=>{clearTimeout(holdT);holdT=null;holdAt=0;clearPin();done=false;go('set1','The PIN is cleared. Choose a new one, or skip.');};
  const start=e=>{e?.preventDefault?.();if(holdAt)return;holdAt=now();b.classList.add('holding');holdT=setTimeout(cleared,holdMs);};
  const stop=()=>{if(!holdAt)return;const held=now()-holdAt;if(held>=holdMs){cleared();return;}clearTimeout(holdT);holdT=null;holdAt=0;b.classList.remove('holding');};
  b.addEventListener('pointerdown',start);b.addEventListener('pointerup',stop);b.addEventListener('pointerleave',stop);b.addEventListener('pointercancel',stop);
  b.addEventListener('keydown',e=>{if((e.key===' '||e.key==='Enter')&&!e.repeat)start(e);});b.addEventListener('keyup',e=>{if(e.key===' '||e.key==='Enter')stop();});
  $('[data-pg-cancel]')?.addEventListener('click',()=>finish(false));b.focus?.({preventScroll:true});};
 const check=()=>{if(done||!typed)return;
  if(mode==='sum'){if(typed!==p.answer)return miss(true);triesLeft=GATE.tries;left=triesLeft;if(pinStorable()&&(wantSet||!pinOffered())){markOffered();return go('set1');}return finish(true);}
  if(mode==='forgot'){if(typed!==p.answer)return miss(true);triesLeft=GATE.tries;left=triesLeft;return hold();}
  if(mode==='pin'){if(typed.length!==PIN.len)return;if(!checkPin(typed))return miss(false);triesLeft=GATE.tries;return finish(true);}
  if(mode==='set1'){if(typed.length!==PIN.len)return;first=typed;return go('set2');}
  if(mode==='set2'){if(typed.length!==PIN.len)return;if(typed!==first){first='';return go('set1','The two PINs were different. Try again.');}const ok=setPin(typed);first='';typed='';if(!ok)return go('set1','The PIN could not be saved on this device.');return finish(true);}};
 const key=k=>{if(done)return;if(k==='ok')return check();if(k==='back')typed=typed.slice(0,-1);else if(/^\d$/.test(k)&&typed.length<max())typed+=k;show();if(k!=='back'&&(mode==='pin'||mode.startsWith('set'))&&typed.length===PIN.len)check();};
 function wire(){d.querySelectorAll('[data-pg-key]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();key(b.dataset.pgKey);}));$('[data-pg-cancel]')?.addEventListener('click',()=>finish(false));$('[data-pg-skip]')?.addEventListener('click',()=>finish(true));
  $('[data-pg-forgot]')?.addEventListener('click',()=>{p=makeProblem(rng,p.text);lastText=p.text;go('forgot');});
  $('[data-pg-setpin]')?.addEventListener('click',()=>{wantSet=true;const m=$('[data-pg-msg]');if(m)m.textContent='Answer the sum first, then choose your PIN.';});
  /* phones type on their own number pad (inputmode="numeric"); the input keeps digits only */
  const e=$('[data-pg-entry]');e?.addEventListener('input',()=>{typed=String(e.value||'').replace(/\D/g,'').slice(0,max());show();if((mode==='pin'||mode.startsWith('set'))&&typed.length===PIN.len)check();});}
 /* keys belong to the gate: digits, Backspace, Enter, Escape; nothing reaches the game or the panel underneath */
 d.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Escape'){e.preventDefault();if(d.querySelector('[data-pg-close]'))finish(null);else finish(false);return;}if(done)return;if(/^\d$/.test(e.key)){e.preventDefault();key(e.key);}else if(e.key==='Backspace'){e.preventDefault();key('back');}else if(e.key==='Enter'&&!e.target.closest?.('[data-pg-cancel],[data-pg-skip],[data-pg-forgot],[data-pg-setpin]')){e.preventDefault();key('ok');}});
 d.addEventListener('cancel',e=>{e.preventDefault();if(d.querySelector('[data-pg-close]'))finish(null);else finish(false);});
 (doc.querySelector('#app')||doc.body).append(d);openEl=d;if(locked)shut(locked);else draw();
 if(typeof d.showModal==='function'){try{d.showModal();}catch{d.setAttribute('open','');}}else d.setAttribute('open','');
 $('#pgate-title')?.focus?.({preventScroll:true});
 return d;}
export function closeParentGate(){if(openEl){try{openEl.close?.();}catch{}openEl.remove();openEl=null;}}
/* A button that opens the gate; its action runs only after a right answer. */
export function guardButton(b,action,opts={}){if(!b)return false;b.addEventListener('click',e=>{e.preventDefault();openParentGate({...opts,doc:b.ownerDocument||globalThis.document,onPass:action});});return true;}
/* Every link that leaves the game (another origin, or target=_blank) asks the gate first, then opens in a new tab. Installed once. */
export const linkLeaves=(a,here=globalThis.location)=>{if(!a?.getAttribute)return false;const h=a.getAttribute('href')||'';if(!h||h.startsWith('#')||/^(blob|data|javascript):/i.test(h)||a.hasAttribute('download'))return false;if(a.target==='_blank')return true;try{return new URL(h,here?.href).origin!==here?.origin;}catch{return false;}};
let linksOn=false;
export function guardLinksOut(doc=globalThis.document){if(!doc||linksOn)return false;linksOn=true;doc.addEventListener('click',e=>{const a=e.target?.closest?.('a[href]');if(!a||!linkLeaves(a,doc.defaultView?.location))return;e.preventDefault();e.stopPropagation();const url=a.href;openParentGate({doc,why:'This link opens a page outside the game.',onPass:()=>{try{doc.defaultView?.open?.(url,'_blank','noopener');}catch{}}});},true);return true;}
