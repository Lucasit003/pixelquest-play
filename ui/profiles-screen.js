/* The learner picker (v2:ui): who is playing on this device. Opened from the title screen and from
   Settings. Switching saves the current learner and reloads straight into the chosen one. */
import {CLASSES} from '../game/data.js';
import {readProfiles,profileSummary,switchProfile,addProfile,renameProfile,deleteProfile,markAutoContinue,profileRaw,nameMatches} from './profiles.js';
import {drawHeroBust} from '../gfx/actors/hero-sprites.js';
import {wireHold} from './edu-report.js';
import {openSheet,sheetHeader,closeSheet} from './sheet.js';
import {icon} from './icons.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let persistRef=null;
export function setProfilePersist(fn){persistRef=fn;}
function html(){
 const idx=readProfiles();
 const rows=idx.list.map(p=>{const s=profileSummary(p.id),c=CLASSES[s.hero],active=p.id===idx.active;
  return `<li class="learner-row${active?' active':''}" data-id="${p.id}">${icon(active?'key':'book-open',{size:32})}<div><strong>${esc(p.name)}</strong><small>${s.started&&c?`${esc(c.name)} · Level ${s.level}`:'New adventure'}</small></div>`+
   (active?'<span class="tag">Playing now</span>':`<button class="primary" data-act="play">Play</button>`)+
   `<button data-act="rename" aria-label="Rename ${esc(p.name)}">Rename</button>${active||idx.list.length<2?'':`<button data-act="remove" aria-label="Remove ${esc(p.name)}">Remove</button>`}</li>`;}).join('');
 return `<div class="learners"><p class="subtle">Each learner keeps their own heroes and progress on this device.</p><ul>${rows}</ul>`+
  `<form class="learner-new"><label for="learner-name">New learner</label><input id="learner-name" maxlength="20" placeholder="Name" autocomplete="off"><button type="submit">Add</button></form><p id="learner-msg" class="subtle" aria-live="polite"></p></div>`;
}
export function openProfiles(){
 const d=openSheet('learners',sheetHeader('Who is playing?','LEARNERS')+html());
 const msg=t=>{const m=d.querySelector('#learner-msg');if(m)m.textContent=t;};
 d.querySelector('.learner-new')?.addEventListener('submit',e=>{e.preventDefault();const n=d.querySelector('#learner-name').value;const p=addProfile(n);openProfiles();globalThis.document.querySelector('#learner-msg').textContent=`${p.name} added. Press Play to start.`;});
 d.querySelectorAll('.learner-row button').forEach(b=>b.addEventListener('click',()=>{
  const id=b.closest('.learner-row').dataset.id,act=b.dataset.act;
  if(act==='play'){msg('Saving and switching…');switchProfile(id,{persist:persistRef});}
  else if(act==='rename'){const row=b.closest('.learner-row'),cur=row.querySelector('strong').textContent;
   row.querySelector('strong').outerHTML=`<input class="learner-rename" maxlength="20" value="${esc(cur)}" aria-label="New name">`;const inp=row.querySelector('.learner-rename');inp.focus();inp.select();
   const done=()=>{renameProfile(id,inp.value);openProfiles();};inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();done();}});inp.addEventListener('blur',done);}
  else if(act==='remove')openRemove(d,id);
 }));
 return d;
}

/* improve20-r8c-nov1 #2 (audit7 d14): Remove was two taps ("Remove? Yes"), with no grown-up check and no undo. It now opens a grown-up
   check under the row: export the save first (a .json file the Settings import reads back), then either type the learner's name or hold
   the grown-up button for two seconds (the same hold as Settings -> Grown-ups, edu-report.js wireHold). Only then is it deleted. */
const fileName=n=>`pixelquest-${String(n||'learner').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'learner'}-save.json`;
export function exportLearner(id,name,doc=globalThis.document){const raw=profileRaw(id);if(!raw||!doc)return false;try{const url=URL.createObjectURL(new Blob([raw],{type:'application/json'})),a=doc.createElement('a');a.href=url;a.download=fileName(name);doc.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);return true;}catch{return false;}}
export const removeGateHTML=(name,hasSave)=>`<div class="learner-remove" role="group" aria-label="Remove ${esc(name)}"><p><strong>Remove ${esc(name)}?</strong> This deletes ${esc(name)}’s heroes and progress on this device. It cannot be undone.</p>${hasSave?`<button type="button" data-act="export">Export ${esc(name)}’s save first</button>`:''}<label class="learner-remove-type">A grown-up types the name to confirm <input data-remove-name maxlength="20" autocomplete="off" placeholder="${esc(name)}" aria-label="Type ${esc(name)} to confirm"></label><div class="learner-remove-acts"><button type="button" data-act="remove-typed" class="danger" disabled>Remove</button><span class="subtle">or</span><button type="button" data-act="remove-hold" class="learner-hold">Grown-up: hold to remove</button><button type="button" data-act="remove-cancel" class="ghost">Keep ${esc(name)}</button></div></div>`;
function openRemove(d,id){
 const row=d.querySelector(`.learner-row[data-id="${id}"]`),p=readProfiles().list.find(x=>x.id===id);if(!row||!p)return;
 d.querySelectorAll('.learner-remove').forEach(x=>x.remove());row.insertAdjacentHTML('afterend',`<li class="learner-remove-li">${removeGateHTML(p.name,!!profileRaw(id))}</li>`);
 const g=row.nextElementSibling,msg=t=>{const m=d.querySelector('#learner-msg');if(m)m.textContent=t;},gone=()=>{if(deleteProfile(id)){openProfiles();globalThis.document.querySelector('#learner-msg').textContent=`${p.name} was removed from this device.`;}};
 const inp=g.querySelector('[data-remove-name]'),go=g.querySelector('[data-act="remove-typed"]');
 inp.addEventListener('input',()=>{go.disabled=!nameMatches(p.name,inp.value);});inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();if(!go.disabled)gone();}});
 go.addEventListener('click',()=>{if(nameMatches(p.name,inp.value))gone();});
 g.querySelector('[data-act="export"]')?.addEventListener('click',()=>msg(exportLearner(id,p.name)?`${p.name}’s save was saved as a file. Settings → Load a save file brings it back.`:'The save could not be exported here.'));
 g.querySelector('[data-act="remove-cancel"]').addEventListener('click',()=>{g.remove();msg('');});
 wireHold(g.querySelector('[data-act="remove-hold"]'),gone);
 inp.focus({preventScroll:true});g.scrollIntoView?.({block:'nearest'});
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
