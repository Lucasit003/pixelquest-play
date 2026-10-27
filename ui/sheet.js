/* A second top-layer panel for UI that is not part of main.js's #modal flow: Stats, Credits.
   It stacks over whatever is open (the title screen, the pause menu, the world map), pauses the
   world while it is up and gives the previous state back when it closes. Escape and the close
   button close it; keys never reach the game underneath. */
import {sfx,duck} from '../core/audio.js';
let dlg=null,state=null,world=null;
export function setSheetWorld(w){world=w;}
const doc=()=>globalThis.document;
function ensure(){
 if(dlg&&dlg.isConnected)return dlg;
 dlg=doc().createElement('dialog');dlg.id='ui-sheet';dlg.className='sheet';dlg.setAttribute('aria-modal','true');
 (doc().querySelector('#app')||doc().body).appendChild(dlg);
 dlg.addEventListener('cancel',e=>{e.preventDefault();closeSheet();});
 dlg.addEventListener('click',e=>{if(e.target.closest('[data-sheet-close]'))closeSheet();});
 dlg.addEventListener('keydown',e=>e.stopPropagation());
 return dlg;
}
export const sheetOpen=()=>!!(dlg&&dlg.open);
export function sheetHeader(title,eyebrow='',sub=''){
 return `<div class="sheet-head">${eyebrow?`<span class="eyebrow">${eyebrow}</span>`:''}<h2 tabindex="-1">${title}</h2>${sub?`<p class="subtle">${sub}</p>`:''}<button class="close" data-sheet-close aria-label="Close">×</button></div>`;
}
export function openSheet(view,html,{onClose}={}){
 const d=ensure();
 if(!d.open)state={paused:world?world.paused:undefined,onClose,focus:doc().activeElement};
 else if(state){state.onClose?.();state.onClose=onClose;}
 d.dataset.view=view;d.innerHTML=`<div class="sheet-body">${html}</div>`;
 if(!d.open){if(typeof d.showModal==='function')d.showModal();else d.open=true;}
 if(world)world.paused=true;
 duck(true);sfx('ui.open');
 d.querySelector('h2')?.focus?.({preventScroll:true});
 return d;
}
export function closeSheet(){
 if(!dlg||!dlg.open)return;
 const st=state;state=null;
 if(typeof dlg.close==='function')dlg.close();else dlg.open=false;
 if(world&&st&&st.paused!==undefined)world.paused=st.paused;
 if(!doc().querySelector('#modal')?.open)duck(false);
 sfx('ui.back');
 st?.onClose?.();
 try{st?.focus?.focus?.({preventScroll:true});}catch{}
}
/* While the sheet is up, keys belong to it: Escape closes it, everything else is kept from main.js. */
export function installSheetKeys(win=globalThis){
 win.addEventListener?.('keydown',e=>{
  if(!sheetOpen())return;
  if(e.key==='Escape'){e.preventDefault();closeSheet();e.stopImmediatePropagation();return;}
  /* Keys typed inside the sheet (a name field) reach their target, then stop at the dialog (below);
     keys aimed anywhere else never reach the game. */
  if(!dlg.contains(e.target))e.stopImmediatePropagation();
 },{capture:true});
}
