/* improve20-m-nov1 (audit3 #1, IMPROVE20 round 3 item 6): Middle and High School questions are long (a passage, a table's setup, a
   program). At the plate's fixed type the question sat in a narrow parchment that scrolled inside itself, its picture was centred far
   below the fold and most of the card stayed empty; on a phone the plate ran over the answers. fitQuestion() fits the asked card
   (quiz, practice, test, placement) to the screen:
   - a card that fits is left exactly as it was (short questions and Elementary cards keep their large type); a card that nearly fits
     only loses the empty placeholder where the answer's notes will appear;
   - one that would scroll or spill goes dense (a smaller guide, the picture at the top of its column), then the question's type steps
     down to a floor (16px on a computer, 14px on a phone); on a computer the question then takes the full width, its picture under it;
   - one that still cannot fit lets the dialog scroll once, as a page does; the question never scrolls inside its own box.
   It runs again when the answer's notes appear and when the window changes size. Layout only: no save, no scoring. */
/* improve20-r20g-nov4 #2 (audit14 #7, shot 08: the phone quiz prompt stepped from 26px straight to 14px, which the pixel font draws about 9px
   tall; R11F found 16px is the font's own size and the smallest that reads): a phone steps down 22, 20, 18 and stops at 16; a card still too
   tall then pins its answers and the question scrolls in its own box (q-pin, below) at 16px */
const DESK=[24,22,20,19,18,17,16],STACK=[20,19,18,17,16],PHONE=[22,20,18,16];
let ro=null,mo=null,busy=false;
const shown=e=>e.offsetParent!==null&&e.getClientRects().length>0;
export function fitQuestion(doc=globalThis.document){
 const q=doc?.querySelector?.('dialog:is([data-view=placement],[data-view=lesson-quiz]) .question'),r=q?.querySelector(':scope>.question-reading'),mc=doc?.getElementById?.('modal-content');
 if(!q||!r||!mc||busy)return null;busy=true;
 try{
  const win=doc.defaultView,phone=doc.documentElement.classList.contains('m-mode')||win.innerHeight<=500,form=q.querySelector(':scope>#quiz-form');
  q.classList.remove('q-room','q-dense','q-stack','q-flow','q-pin','q-more','q-desk','q-fbgrow');r.classList.remove('q-fit');r.style.removeProperty('--q-fs');
  /* too tall: the reading scrolls inside itself, the dialog clips or scrolls, or a part of the question lies over an answer or a button */
  const box=e=>e.getBoundingClientRect(),hit=(a,b)=>a.left<b.right-4&&b.left<a.right-4&&a.top<b.bottom-4&&b.top<a.bottom-4,scrolls=e=>/auto|scroll/.test(win.getComputedStyle(e).overflowY);
  const over=()=>{if(scrolls(r)&&r.scrollHeight>r.clientHeight+1)return true;if(mc.scrollHeight>mc.clientHeight+1)return true;
   const ctl=[...q.querySelectorAll(':scope>#quiz-form :is(button,input,a),:scope>.modal-actions button')].filter(shown).map(box);
   return [...r.children].filter(shown).some(k=>{const b=box(k);return ctl.some(c=>hit(b,c));});};
  let step='fits';
  /* first the notes' empty placeholder gives its room back (its own design: it is the first thing to go) */
  if(over()){q.classList.add('q-room');step='room';}
  if(over()){
   q.classList.add('q-dense');step='dense';
   const h=r.querySelector(':scope>h3'),base=h?parseFloat(win.getComputedStyle(h).fontSize)||99:99;
   for(const fs of (phone?PHONE:DESK).filter(v=>v<base)){if(!over())break;r.classList.add('q-fit');r.style.setProperty('--q-fs',fs+'px');step=fs;}
   /* a computer: still too tall beside its picture, the question takes the full width and the picture goes under it */
   if(over()&&!phone&&r.querySelector(':scope>:is(#quiz-pic,.question-text-card)')){q.classList.add('q-stack');step='stack';for(const fs of STACK.filter(v=>v<base)){r.style.setProperty('--q-fs',fs+'px');r.classList.add('q-fit');step='stack-'+fs;if(!over())break;}}
   /* still too tall: the dialog scrolls once; a phone then keeps its normal type, since the smaller one no longer buys a screen */
   /* improve20-r9d-nov1 #3 (audit8 a5): in phone mode the dialog no longer scrolls (the answer row went below the sheet): the answer row and
      the row under it are pinned (style.css) and the question scrolls inside its own box above them, at its fitted type (.q-pin) */
   if(over()&&doc.documentElement.classList.contains('m-mode')){q.classList.add('q-pin');step='pin';const more=()=>q.classList.toggle('q-more',r.scrollTop+r.clientHeight<r.scrollHeight-2);r.onscroll=more;more();}
   /* improve20-r22a-nov4 #3 (R20O finding 3, Ezra: the History placement's corroboration table put the answer box at y=713 on a 720 px screen):
      on a computer too, a question still too tall before it is answered pins its answer row and Check (q-pin, q-desk) and the question scrolls in
      its own box above them, with the fade while more is below; once answered the card flows as before, so the explanation can push the row down */
   else if(over()&&!phone&&!q.querySelector('#quiz-feedback')?.textContent.trim()){q.classList.add('q-pin','q-desk');step='pin-desk';const more=()=>q.classList.toggle('q-more',r.scrollTop+r.clientHeight<r.scrollHeight-2);r.onscroll=more;more();if(pinCut(q)){q.classList.remove('q-pin','q-desk','q-more');r.onscroll=null;q.classList.add('q-flow');step='flow';}}
   else if(over()){q.classList.add('q-flow');step='flow';if(phone){r.classList.remove('q-fit');r.style.removeProperty('--q-fs');}}
  }
  /* improve20-r22a-nov4 #4 (R20O finding 6, shot 02: a wrong answer's explanation sat below the notes' 150px box, under the action row): on a
     computer, notes taller than their box take the room they need and the answered question above them scrolls in its own box instead;
     kept only while the whole of the notes and the action row stay in the window, else the notes keep their own scroll */
  const fb=q.querySelector(':scope>#quiz-feedback');if(!phone&&fb?.textContent.trim()&&fb.scrollHeight>fb.clientHeight+1){q.classList.add('q-fbgrow');const h=win.innerHeight,b=box(fb);if(fb.scrollHeight>fb.clientHeight+1||b.bottom>h+1||[...q.querySelectorAll(':scope>.modal-actions button')].filter(shown).some(e=>box(e).bottom>h+1))q.classList.remove('q-fbgrow');else step+='+fb';}
  q.dataset.fit=String(step);watch(q,mc,doc);return step;
 }finally{busy=false;}
}
/* improve20-r22a-nov4 #3: a desktop pin is kept only when every answer control and the action row are in the window */
const pinCut=q=>{const h=q.ownerDocument.defaultView.innerHeight;return [...q.querySelectorAll(':scope>#quiz-form :is(button,input),:scope>.modal-actions button')].filter(shown).some(e=>{const b=e.getBoundingClientRect();return b.bottom>h+1||b.top<0;});};
/* the answer's notes change the card's layout; a new size of window changes the room */
function watch(q,mc,doc){
 const win=doc.defaultView,fb=q.querySelector('#quiz-feedback');
 if(!mo&&typeof win.MutationObserver==='function')mo=new win.MutationObserver(()=>{if(mo.q?.isConnected)fitQuestion(doc);});
 if(mo&&mo.q!==q){mo.disconnect();if(fb)mo.observe(fb,{childList:true});mo.q=q;}
 if(!ro&&typeof win.ResizeObserver==='function')ro=new win.ResizeObserver(()=>{const d=ro.el;if(!d?.isConnected||(d.clientWidth===ro.w&&d.clientHeight===ro.h))return;ro.w=d.clientWidth;ro.h=d.clientHeight;fitQuestion(doc);});
 const d=mc.closest('dialog')||mc;if(ro&&ro.el!==d){ro.disconnect();ro.observe(d);ro.el=d;}if(ro){ro.w=d.clientWidth;ro.h=d.clientHeight;}
}
