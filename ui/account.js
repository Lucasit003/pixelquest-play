/* Grown-ups account block and the newer-cloud card (accounts-nov1). Parent accounts only: the block sits in Settings ->
   Grown-ups behind the one grown-up gate (ui/parent-gate.js, improve20-r9f-nov1 #1), as the learning record is, so a child
   does not wander in; Sign out and Delete for good ask the gate again, since the block can be left open. Learners stay the local nickname profiles (ui/profiles.js); the child never types an email.
   - Empty cloud-config.js: "Cloud saves are coming soon" and no network call at all.
   - Signed out: email -> Send code -> 6-digit code -> Sign in, with plain errors (wrong, expired, too many tries, offline).
     The email is held only in this closure until sign-in; the stored session keeps it masked.
   - Signed in: masked email, last sync, Sync now, Sign out (keeps local saves) and Delete account and cloud saves (type
     DELETE; keeps local saves).
   Styles: ui/account.css, linked once like library.css. */
import {maskEmail} from '../core/cloud.js';
import {currentCloud,signedIn,syncStatus,onSyncStatus,reconcile,flush,clearSync,initSync,useCloudCopy,keepDeviceCopy} from './account-sync.js';
import {openParentGate} from './parent-gate.js';
import {openSheet,closeSheet,sheetHeader} from './sheet.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function ensureAccountStyles(doc=globalThis.document){
 if(!doc?.head||doc.querySelector('link[data-account-styles]'))return false;
 const l=doc.createElement('link');l.rel='stylesheet';l.href=new URL('./account.css',import.meta.url).href;l.dataset.accountStyles='';doc.head.append(l);return true;
}
export const PRIVACY_NOTE='We store the grown-up’s email, each learner’s nickname and their game progress, so saves can move between devices. No ads, and it is never sold. Children never enter an email. You can delete the account and every cloud save at any time.';
export const ERRORS={email:'Check the email address and try again.',offline:'You are offline. Connect to the internet and try again.',timeout:'The server did not answer. Try again in a minute.',rate:'Too many tries. Wait a few minutes, then try again.',wrong:'That code is not right. Check the newest email and try again.',expired:'That code has expired. Press “Send a new code”.',auth:'You were signed out. Sign in again.',server:'Something went wrong. Try again later.',backup:'There is no room on this device to keep a backup, so nothing was replaced.'};
const errText=e=>ERRORS[e]||ERRORS.server;
const when=ms=>{if(!ms)return '';const d=new Date(ms);try{return d.toLocaleString(undefined,{dateStyle:'medium',timeStyle:'short'});}catch{return d.toISOString();}};
export function statusLine(st=syncStatus()){
 if(st.state==='syncing')return 'Syncing…';
 if(st.queued&&(st.state==='offline'||globalThis.navigator?.onLine===false))return 'Will sync when online.';
 if(st.state==='error'&&st.detail==='too-big')return 'This save is too large for the cloud. It is safe on this device.';
 if(st.state==='error')return 'The last sync did not finish. It will try again.';
 return st.last?`Last synced ${when(st.last)}.`:'Not synced yet.';
}
export const accountGateHTML=()=>`<h4>Account and cloud saves</h4><p class="subtle">A grown-up can sign in by email to keep a safe copy of every learner’s progress and carry on from another device. Playing never needs an account.</p><button type="button" id="acct-open" class="edu-grownups" aria-describedby="acct-open-help">Account and cloud saves</button><small id="acct-open-help" class="subtle">A grown-up answers a quick sum to open it.</small><div id="acct-block" class="acct" hidden></div>`;
/* view: {step:'email'|'code', email, msg, err, del} */
export function accountHTML(view={},c=currentCloud()){
 const note=`<p class="subtle acct-privacy">${PRIVACY_NOTE}</p>`,msg=`<p id="acct-msg" class="acct-msg${view.err?' is-error':''}" role="status" aria-live="polite">${esc(view.msg||'')}</p>`;
 if(!c.on)return `<div class="acct-soon"><strong>Cloud saves are coming soon.</strong><p class="subtle">Progress is saved on this device. To move it now, use “Copy my save code” in the Save tab.</p></div>`;
 const s=c.session();
 if(!s){
  if(view.step==='code')return `<p class="subtle">We sent a 6-digit code to <strong>${esc(maskEmail(view.email))}</strong>. It works for 15 minutes. It can take a minute to arrive.</p><form class="acct-row" id="acct-verify"><label for="acct-code">Code</label><input id="acct-code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" placeholder="123456" required><button type="submit" class="primary">Sign in</button></form><div class="acct-row acct-links"><button type="button" id="acct-resend">Send a new code</button><button type="button" id="acct-back">Use another email</button></div>${msg}${note}`;
  return `<form class="acct-row" id="acct-send"><label for="acct-email">Grown-up’s email</label><input id="acct-email" type="email" autocomplete="email" inputmode="email" maxlength="254" placeholder="name@example.com" required value="${esc(view.email||'')}"><button type="submit" class="primary">Send code</button></form><p class="subtle">We email a 6-digit code: no password to remember.</p>${msg}${note}`;
 }
 const del=view.del?`<div class="acct-delete" role="group" aria-label="Delete account"><p>This deletes the account and every cloud save. Saves on this device stay.</p><div class="acct-row"><label for="acct-del-text">Type DELETE</label><input id="acct-del-text" autocomplete="off" autocapitalize="characters" maxlength="6"><button type="button" id="acct-del-go" class="acct-danger" disabled>Delete for good</button><button type="button" id="acct-del-cancel">Cancel</button></div></div>`:`<button type="button" id="acct-del" class="acct-del-open">Delete account and cloud saves</button>`;
 return `<p class="acct-who">Signed in as <strong>${esc(s.user?.email||'a grown-up')}</strong></p><p class="subtle" id="acct-status">${esc(statusLine())}</p><div class="acct-row acct-links"><button type="button" id="acct-sync" class="primary">Sync now</button><button type="button" id="acct-out">Sign out</button></div>${msg}${del}${note}`;
}
export function renderAccount(el,view={}){
 if(!el)return;const c=currentCloud(),again=v=>renderAccount(el,{...view,...v});
 el.innerHTML=accountHTML(view,c);el.hidden=false;
 const $=q=>el.querySelector(q),busy=(b,on)=>{if(b){b.disabled=on;b.setAttribute('aria-busy',String(on));}};
 if(!c.on)return;
 const send=async email=>{const b=$('#acct-send button')||$('#acct-resend');busy(b,true);const r=await c.sendCode(email);if(r.ok)again({step:'code',email,msg:'Code sent.',err:false});else{busy(b,false);again({email,msg:errText(r.error),err:true,step:view.step});}};
 $('#acct-send')?.addEventListener('submit',e=>{e.preventDefault();send($('#acct-email').value.trim());});
 $('#acct-verify')?.addEventListener('submit',async e=>{e.preventDefault();const b=$('#acct-verify button');busy(b,true);const r=await c.verify(view.email,$('#acct-code').value);
  if(!r.ok){again({msg:errText(r.error),err:true});return;}
  renderAccount(el,{msg:'Signed in. Checking cloud saves…'});const rr=await reconcile({onNewer:showNewerCard});
  renderAccount(el,{msg:rr.ok?(rr.added?.length?`Brought down ${rr.added.map(esc).join(', ')} from the cloud: find them in “Who is playing?”.`:'Signed in. Saves are synced.'):errText(rr.error),err:!rr.ok});});
 $('#acct-resend')?.addEventListener('click',()=>send(view.email));
 $('#acct-back')?.addEventListener('click',()=>again({step:'email',msg:'',err:false}));
 $('#acct-sync')?.addEventListener('click',async()=>{busy($('#acct-sync'),true);const st=$('#acct-status');if(st)st.textContent='Syncing…';await flush();const r=await reconcile({onNewer:showNewerCard});renderAccount(el,{msg:r.ok?(r.added?.length?`Brought down ${r.added.join(', ')}.`:'All saves are synced.'):errText(r.error),err:!r.ok});});
 $('#acct-out')?.addEventListener('click',()=>openParentGate({why:'Signing out is for grown-ups.',onPass:async()=>{busy($('#acct-out'),true);await flush();await c.signOut();clearSync();renderAccount(el,{msg:'Signed out. Saves on this device are kept.'});}}));
 $('#acct-del')?.addEventListener('click',()=>again({del:true,msg:''}));
 $('#acct-del-cancel')?.addEventListener('click',()=>again({del:false}));
 const dt=$('#acct-del-text'),go=$('#acct-del-go');
 dt?.addEventListener('input',()=>{go.disabled=dt.value.trim()!=='DELETE';});
 go?.addEventListener('click',()=>{if(dt.value.trim()!=='DELETE')return;openParentGate({why:'Deleting the account is for grown-ups.',onPass:async()=>{busy(go,true);const r=await c.deleteAccount();
  if(r.ok){clearSync();renderAccount(el,{msg:'The account and its cloud saves are deleted. Saves on this device are kept.'});}else again({del:true,msg:errText(r.error),err:true});}});});
 dt?.focus?.();
 const stop=onSyncStatus(()=>{if(!el.isConnected){stop();return;}const st=el.querySelector('#acct-status');if(st)st.textContent=statusLine();});
}
/* Settings -> Grown-ups: the grown-up gate opens the block in place. */
export function wireAccountGate(root,{rng}={}){
 const b=root?.querySelector?.('#acct-open'),el=root?.querySelector?.('#acct-block');if(!b||!el)return false;ensureAccountStyles(root.ownerDocument||globalThis.document);
 b.addEventListener('click',e=>{e.preventDefault();openParentGate({doc:root.ownerDocument||globalThis.document,rng,why:'Accounts and cloud saves are for grown-ups.',onPass:()=>{b.hidden=true;const h=root.querySelector('#acct-open-help');if(h)h.hidden=true;renderAccount(el);el.querySelector('input,button')?.focus?.();}});});return true;
}
/* The newer-cloud card: one at a time; closing it without a choice changes nothing (it asks again next boot). */
const cardQueue=[];let cardOpen=false;
export function showNewerCard(card){cardQueue.push(card);if(!cardOpen)nextCard();}
export function newerCardHTML(card){
 const date=when(Date.parse(card.updated_at)),dev=card.device||'another device';
 return sheetHeader('Cloud save is newer','CLOUD SAVE')+`<div class="acct-card"><p>Your cloud save from <strong>${esc(date)}</strong> on <strong>${esc(dev)}</strong> is newer.</p><p class="subtle">Learner: ${esc(card.name)}. Whichever copy you do not pick is kept as a backup on this device.</p><div class="acct-row acct-links"><button type="button" class="primary" data-cloud-pick="cloud">Use cloud</button><button type="button" data-cloud-pick="keep">Keep this device</button></div><p class="acct-msg" role="status" aria-live="polite"></p></div>`;
}
function nextCard(){
 const card=cardQueue.shift();if(!card){cardOpen=false;return;}cardOpen=true;ensureAccountStyles();
 const d=openSheet('cloud-card',newerCardHTML(card),{onClose:()=>{cardOpen=false;setTimeout(nextCard,0);}});
 d.querySelectorAll('[data-cloud-pick]').forEach(b=>b.addEventListener('click',async()=>{
  d.querySelectorAll('[data-cloud-pick]').forEach(x=>{x.disabled=true;});const m=d.querySelector('.acct-msg');
  const r=b.dataset.cloudPick==='cloud'?useCloudCopy(card):await keepDeviceCopy(card);
  if(r.reloading){if(m)m.textContent='Loading the cloud save…';return;}
  if(!r.ok&&r.error==='backup'){if(m)m.textContent=ERRORS.backup;d.querySelectorAll('[data-cloud-pick]').forEach(x=>{x.disabled=false;});return;}
  closeSheet();
 }));
}
let started=false;
export function initAccount({persist}={}){if(started)return;started=true;if(!currentCloud().on)return;initSync({persist,onNewer:showNewerCard});}
export {signedIn};
