/* The learner picker (v2:ui): who is playing on this device. Opened from the title screen and from
   Settings. Switching saves the current learner and reloads straight into the chosen one. */
import {CLASSES} from '../game/data.js';
import {readProfiles,profileSummary,switchProfile,addProfile,renameProfile,deleteProfile} from './profiles.js';
import {openSheet,sheetHeader} from './sheet.js';
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
  else if(act==='remove'){if(b.dataset.sure){deleteProfile(id);openProfiles();}else{b.dataset.sure='1';b.textContent='Remove? Yes';msg('This deletes that learner’s progress on this device. Press again to confirm.');}}
 }));
 return d;
}
