/* The learner picker (v2:ui): who is playing on this device. Opened from the title screen and from
   Settings. Switching saves the current learner and reloads straight into the chosen one. */
import {CLASSES} from '../game/data.js';
import {readProfiles,profileSummary,switchProfile,addProfile,renameProfile,deleteProfile,markAutoContinue,profileRaw} from './profiles.js';
import {drawHeroBust} from '../gfx/actors/hero-sprites.js';
import {openParentGate} from './parent-gate.js';
import {openSheet,sheetHeader,closeSheet} from './sheet.js';
import {icon} from './icons.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let persistRef=null;
export function setProfilePersist(fn){persistRef=fn;}
/* improve20-r11d-nov2 #1 (audit9 a7, shot 13): Remove sat one tap from Play. Rename and Remove now sit behind a "Manage" toggle; the plain
   sheet shows only Play (and Add). The toggle is not a gate by itself: Remove still asks the grown-up gate. */
let manageOn=false;
export const manageToggleHTML=on=>`<p class="learner-manage"><button type="button" class="ghost" data-act="manage" aria-pressed="${on}">${on?'Done managing':'Manage'}</button></p>`;
export function html(manage=manageOn){
 const idx=readProfiles();
 const rows=idx.list.map(p=>{const s=profileSummary(p.id),c=CLASSES[s.hero],active=p.id===idx.active;
  return `<li class="learner-row${active?' active':''}" data-id="${p.id}">${icon(active?'key':'book-open',{size:32})}<div><strong>${esc(p.name)}</strong><small>${s.started&&c?`${esc(c.name)} · Level ${s.level}`:'New adventure'}</small></div>`+
   (active?'<span class="tag">Playing now</span>':`<button class="primary" data-act="play">Play</button>`)+
   (manage?`<button data-act="rename" aria-label="Rename ${esc(p.name)}">Rename</button>${active||idx.list.length<2?'':`<button data-act="remove" class="danger" aria-label="Remove ${esc(p.name)}">Remove</button>`}`:'')+`</li>`;}).join('');
 return `<div class="learners${manage?' is-managing':''}"><p class="subtle">Each learner keeps their own heroes and progress on this device.</p><ul>${rows}</ul>${manageToggleHTML(manage)}`+
  `<form class="learner-new"><label for="learner-name">New learner</label><input id="learner-name" maxlength="20" placeholder="Name" autocomplete="off"><button type="submit">Add</button></form><p id="learner-msg" class="subtle" aria-live="polite"></p></div>`;
}
export function openProfiles({manage=false}={}){
 manageOn=!!manage;const d=openSheet('learners',sheetHeader('Who is playing?','LEARNERS')+html(manageOn));
 const msg=t=>{const m=d.querySelector('#learner-msg');if(m)m.textContent=t;};
 d.querySelector('.learner-new')?.addEventListener('submit',e=>{e.preventDefault();const n=d.querySelector('#learner-name').value;const p=addProfile(n);openProfiles({manage:manageOn});globalThis.document.querySelector('#learner-msg').textContent=`${p.name} added. Press Play to start.`;});
 d.querySelectorAll('.learner-row button').forEach(b=>b.addEventListener('click',()=>{
  const id=b.closest('.learner-row').dataset.id,act=b.dataset.act;
  if(act==='play'){msg('Saving and switching…');switchProfile(id,{persist:persistRef});}
  else if(act==='rename'){const row=b.closest('.learner-row'),cur=row.querySelector('strong').textContent;
   row.querySelector('strong').outerHTML=`<input class="learner-rename" maxlength="20" value="${esc(cur)}" aria-label="New name">`;const inp=row.querySelector('.learner-rename');inp.focus();inp.select();
   const done=()=>{renameProfile(id,inp.value);openProfiles({manage:true});};inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();done();}});inp.addEventListener('blur',done);}
  else if(act==='remove')openRemove(d,id);
 }));
 d.querySelector('[data-act="manage"]')?.addEventListener('click',()=>{const nd=openProfiles({manage:!manageOn});nd.querySelector('[data-act="manage"]')?.focus?.({preventScroll:true});});
 return d;
}

/* improve20-r8c-nov1 #2 (audit7 d14): Remove was two taps ("Remove? Yes"), with no grown-up check and no undo. It now opens a grown-up
   check under the row: export the save first (a .json file the Settings import reads back), then press Remove. improve20-r9f-nov1 #1 (audit8 a4):
   the name box showed the name as its placeholder and the hold was child-proof only on paper, so Remove now opens the one grown-up
   gate (ui/parent-gate.js); only a right answer deletes. */
const fileName=n=>`pixelquest-${String(n||'learner').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'learner'}-save.json`;
export function exportLearner(id,name,doc=globalThis.document){const raw=profileRaw(id);if(!raw||!doc)return false;try{const url=URL.createObjectURL(new Blob([raw],{type:'application/json'})),a=doc.createElement('a');a.href=url;a.download=fileName(name);doc.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);return true;}catch{return false;}}
export const removeGateHTML=(name,hasSave)=>`<div class="learner-remove" role="group" aria-label="Remove ${esc(name)}"><p><strong>Remove ${esc(name)}?</strong> This deletes ${esc(name)}’s heroes and progress on this device. It cannot be undone.</p>${hasSave?`<button type="button" data-act="export">Export ${esc(name)}’s save first</button>`:''}<p class="subtle learner-remove-type">A grown-up works out a quick multiplication to remove.</p><div class="learner-remove-acts"><button type="button" data-act="remove-gate" class="danger">Remove ${esc(name)}</button><button type="button" data-act="remove-cancel" class="ghost">Keep ${esc(name)}</button></div></div>`;
function openRemove(d,id){
 const row=d.querySelector(`.learner-row[data-id="${id}"]`),p=readProfiles().list.find(x=>x.id===id);if(!row||!p)return;
 d.querySelectorAll('.learner-remove').forEach(x=>x.remove());row.insertAdjacentHTML('afterend',`<li class="learner-remove-li">${removeGateHTML(p.name,!!profileRaw(id))}</li>`);
 const g=row.nextElementSibling,msg=t=>{const m=d.querySelector('#learner-msg');if(m)m.textContent=t;},gone=()=>{if(deleteProfile(id)){openProfiles({manage:true});globalThis.document.querySelector('#learner-msg').textContent=`${p.name} was removed from this device.`;}};
 const go=g.querySelector('[data-act="remove-gate"]');
 go.addEventListener('click',()=>openParentGate({why:`Removing ${p.name} deletes their progress on this device.`,onPass:gone}));
 g.querySelector('[data-act="export"]')?.addEventListener('click',()=>msg(exportLearner(id,p.name)?`${p.name}’s save was saved as a file. Settings → Load a save file brings it back.`:'The save could not be exported here.'));
 g.querySelector('[data-act="remove-cancel"]').addEventListener('click',()=>{g.remove();msg('');});
 go.focus({preventScroll:true});g.scrollIntoView?.({block:'nearest'});
}
/* improve20-r8c-nov1 #2: "Who is playing?" before Continue, with two or more learners. One big tap per learner: their hero's bust, name,
   hero and level. The learner already loaded carries straight on (onContinue); another learner switches, and the title that boots next
   continues as them (profiles.js markAutoContinue). Cloud learners (ui/account-sync.js) are ordinary rows of readProfiles, so they show
   here too. "Manage learners" opens the full sheet (add, rename, remove). */
export function whoPlaysHTML(){const idx=readProfiles();
 return `<div class="who-plays"><p class="subtle">Tap your name to carry on your adventure.</p><ul class="who-row">${idx.list.map(p=>{const m=profileSummary(p.id),c=CLASSES[m.hero];
  return `<li><button type="button" class="who-card${p.id===idx.active?' last':''}" data-who="${p.id}" aria-label="${esc(p.name)}${m.started&&c?`, ${esc(c.name)}, level ${m.level}`:', new adventure'}">${m.started&&c?`<canvas class="who-bust" data-who-hero="${esc(m.hero)}" width="64" height="64" aria-hidden="true"></canvas>`:`<span class="who-bust who-new" aria-hidden="true">${icon('book-open',{size:32})}</span>`}<strong>${esc(p.name)}</strong><small>${m.started&&c?`${esc(c.name)} · Lv ${m.level}`:'New adventure'}</small></button></li>`;}).join('')}</ul><p class="who-manage"><button type="button" class="ghost" data-who-manage>Manage learners</button></p></div>`;}
export function openWhoPlays({onContinue}={}){
 const d=openSheet('who-plays',sheetHeader('Who is playing?','LEARNERS')+whoPlaysHTML()),idx=readProfiles();
 d.querySelectorAll('canvas[data-who-hero]').forEach(cv=>{try{drawHeroBust(cv,cv.dataset.whoHero,64);}catch{}});
 d.querySelectorAll('[data-who]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.who;
  if(id===idx.active){closeSheet();onContinue?.();return;}
  const m=profileSummary(id);if(m.started)markAutoContinue(id);switchProfile(id,{persist:persistRef});}));
 d.querySelector('[data-who-manage]')?.addEventListener('click',()=>openProfiles());
 d.querySelector('[data-who]')?.focus?.({preventScroll:true});
 return d;
}
