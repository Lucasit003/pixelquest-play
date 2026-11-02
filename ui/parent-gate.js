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
/* improve20-r11d-nov2 #1 (audit9 a7): the R9F items ("(18 × 3) − 7", a four-digit number in words) were Grade 3-4 maths, and place value
   is the game's first lesson. The gate now asks adult-level arithmetic a 7-12 year old cannot do quickly in their head: a two-digit by
   two-digit product ("47 × 38"), or that product less a two-digit number ("(47 × 38) − 26"). Each factor is 12..98 with a ones digit of
   2, 3, 4, 6, 7, 8 or 9 and no repeated digit pair (no 10s, 11s, 5s or 1s to shortcut). Answers 46..9604 (at most 4 digits). */
export const GATE_ONES=[2,3,4,6,7,8,9];
const factor=rng=>{for(let i=0;i<20;i++){const t=pickInt(rng,1,9),o=GATE_ONES[pickInt(rng,0,GATE_ONES.length-1)];if(t!==o)return t*10+o;}return 47;};
export function makeProblem(rng=Math.random,avoid=null){for(let i=0;i<20;i++){const a=factor(rng),b=factor(rng),two=rng()<.5;let p;
  if(two){const c=pickInt(rng,12,98);p={kind:'twostep',text:`(${a} × ${b}) − ${c}`,ask:'Work it out and type the answer.',answer:String(a*b-c)};}
  else p={kind:'product',text:`${a} × ${b}`,ask:'Work it out and type the answer.',answer:String(a*b)};
  if(!avoid||p.text!==avoid)return p;}return avoid==='(47 × 38) − 26'?{kind:'twostep',text:'(46 × 37) − 29',ask:'Work it out and type the answer.',answer:'1673'}:{kind:'twostep',text:'(47 × 38) − 26',ask:'Work it out and type the answer.',answer:'1760'};}
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
export function gateHTML(p,why='',left=GATE.tries){return `<div class="pgate-body"><div class="pgate-ask"><span class="eyebrow">GROWN-UPS ONLY</span><h2 id="pgate-title" tabindex="-1">Ask a grown-up</h2>${why?`<p class="pgate-why">${esc(why)}</p>`:''}<p class="pgate-how" data-pg-how>${esc(p.ask)}</p><p class="pgate-q pgate-${p.kind}" data-pg-q>${esc(p.text)}</p><div class="pgate-entry" data-pg-entry role="status" aria-live="polite" aria-label="Answer typed so far"></div><p class="pgate-msg" data-pg-msg role="alert">${left<GATE.tries?`${left} ${left===1?'try':'tries'} left.`:''}</p></div><div class="pgate-pad" role="group" aria-label="Number pad">${PAD_KEYS.map(k=>`<button type="button" data-pg-key="${k}"${k==='ok'?' class="primary"':''} aria-label="${k==='back'?'Delete last digit':k==='ok'?'Check answer':k}">${k==='back'?'⌫':k==='ok'?'OK':k}</button>`).join('')}</div><div class="pgate-acts"><button type="button" data-pg-cancel>Cancel</button></div></div>`;}
/* Opens the gate over everything (a modal dialog, so it stacks over Settings and the sheets). onPass runs only after a right answer;
   onCancel runs on Cancel, Escape, or after the third wrong answer ({closed:true}). Returns the dialog. */
export function openParentGate({why='',onPass,onCancel,rng=Math.random,doc=globalThis.document,now=()=>Date.now()}={}){
 if(!doc?.body)return null;closeParentGate();ensureGateStyles(doc);
 const d=doc.createElement('dialog');d.id='parent-gate';d.className='pgate';d.setAttribute('aria-modal','true');d.setAttribute('aria-labelledby','pgate-title');
 let p=makeProblem(rng,lastText),typed='',done=false,gone=false;const locked=gateLockedUntil(now());let left=triesLeft;lastText=p.text;
 const draw=()=>{d.innerHTML=gateHTML(p,why,left);wire();show();};
 const $=q=>d.querySelector(q),show=()=>{const e=$('[data-pg-entry]');if(e)e.textContent=typed;const ok=$('[data-pg-key="ok"]');if(ok)ok.disabled=!typed;};
 const finish=(pass)=>{if(gone)return;gone=done=true;try{d.close?.();}catch{}d.remove();if(openEl===d)openEl=null;if(pass)onPass?.();else onCancel?.(pass===null?{closed:true}:{});};
 const shut=(until)=>{done=true;const mins=minsLeft(until-now());d.innerHTML=`<div class="pgate-body pgate-shut"><span class="eyebrow">GROWN-UPS ONLY</span><h2 id="pgate-title" tabindex="-1">The gate is closed</h2><p>That was ${GATE.tries} tries. Ask a grown-up to open it.</p><p class="pgate-wait" data-pg-wait>It opens again in about ${mins} ${mins===1?'minute':'minutes'}.</p><div class="pgate-acts"><button type="button" class="primary" data-pg-close>OK</button></div></div>`;
  const c=$('[data-pg-close]');c.onclick=()=>finish(null);c.focus?.({preventScroll:true});};
 const check=()=>{if(done||!typed)return;if(typed===p.answer){triesLeft=GATE.tries;finish(true);return;}left=triesLeft=Math.max(0,triesLeft-1);typed='';if(left<=0){const t=now();lockGate(t);shut(lockUntil);return;}p=makeProblem(rng,p.text);lastText=p.text;draw();const m=$('[data-pg-msg]');if(m)m.textContent=`Not quite. Here is a new one. ${left} ${left===1?'try':'tries'} left.`;$('[data-pg-key="1"]')?.focus?.({preventScroll:true});};
 const key=k=>{if(done)return;if(k==='ok')return check();if(k==='back')typed=typed.slice(0,-1);else if(/^\d$/.test(k)&&typed.length<GATE.maxDigits)typed+=k;show();};
 function wire(){d.querySelectorAll('[data-pg-key]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();key(b.dataset.pgKey);}));$('[data-pg-cancel]')?.addEventListener('click',()=>finish(false));}
 /* keys belong to the gate: digits, Backspace, Enter, Escape; nothing reaches the game or the panel underneath */
 d.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Escape'){e.preventDefault();if(d.querySelector('[data-pg-close]'))finish(null);else finish(false);return;}if(done)return;if(/^\d$/.test(e.key)){e.preventDefault();key(e.key);}else if(e.key==='Backspace'){e.preventDefault();key('back');}else if(e.key==='Enter'&&!e.target.closest?.('[data-pg-cancel]')){e.preventDefault();key('ok');}});
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
