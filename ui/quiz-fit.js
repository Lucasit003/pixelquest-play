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
const DESK=[24,22,20,19,18,17,16],STACK=[20,19,18,17,16],PHONE=[15,14];
let ro=null,mo=null,busy=false;
const shown=e=>e.offsetParent!==null&&e.getClientRects().length>0;
export function fitQuestion(doc=globalThis.document){
 const q=doc?.querySelector?.('dialog:is([data-view=placement],[data-view=lesson-quiz]) .question'),r=q?.querySelector(':scope>.question-reading'),mc=doc?.getElementById?.('modal-content');
 if(!q||!r||!mc||busy)return null;busy=true;
 try{
  const win=doc.defaultView,phone=doc.documentElement.classList.contains('m-mode')||win.innerHeight<=500,form=q.querySelector(':scope>#quiz-form');
  q.classList.remove('q-room','q-dense','q-stack','q-flow','q-pin','q-more');r.classList.remove('q-fit');r.style.removeProperty('--q-fs');
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
   else if(over()){q.classList.add('q-flow');step='flow';if(phone){r.classList.remove('q-fit');r.style.removeProperty('--q-fs');}}
  }
  q.dataset.fit=String(step);watch(q,mc,doc);return step;
 }finally{busy=false;}
}
/* the answer's notes change the card's layout; a new size of window changes the room */
function watch(q,mc,doc){
 const win=doc.defaultView,fb=q.querySelector('#quiz-feedback');
 if(!mo&&typeof win.MutationObserver==='function')mo=new win.MutationObserver(()=>{if(mo.q?.isConnected)fitQuestion(doc);});
 if(mo&&mo.q!==q){mo.disconnect();if(fb)mo.observe(fb,{childList:true});mo.q=q;}
 if(!ro&&typeof win.ResizeObserver==='function')ro=new win.ResizeObserver(()=>{const d=ro.el;if(!d?.isConnected||(d.clientWidth===ro.w&&d.clientHeight===ro.h))return;ro.w=d.clientWidth;ro.h=d.clientHeight;fitQuestion(doc);});
 const d=mc.closest('dialog')||mc;if(ro&&ro.el!==d){ro.disconnect();ro.observe(d);ro.el=d;}if(ro){ro.w=d.clientWidth;ro.h=d.clientHeight;}
}
