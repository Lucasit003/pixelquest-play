/* improve26-r26f-nov6 #1 (audit17 #17, shot 200: on a 667x375 Grade 7 lesson step Aldous's caption was half cut behind "More ↓" and "Read to me"
   sat below the body, off-screen; at 740x360 four lines showed). main.js fitLessonPic calls phoneSay on every phone lesson step (not a tablet),
   after its own fit. On a short phone (SAY_H tall or less):
   - a text-card step (a table or a word card) takes the phone's compact frame, as a drawn picture's step already did: the guide's portrait steps
     aside and the Read to me and Narration buttons sit in the caption's corner, so the caption has the card's width;
   - Read to me is pinned: it moves up into the sheet's head, beside the close button, which never scrolls, so it is on screen however far the
     body is scrolled (style.css "improve26-r26f-nov6 #1"); the Narration switch stays in the caption's corner;
   - the eyebrow over the title goes (CSS), which gives the body its height back.
   A caption still longer than the body scrolls, with the footer's "More ↓". Nothing is folded or hidden from the step; type sizes never change.
   Returns what it did ('' when nothing), kept on the body as data-say-fit. */
export const SAY_H=430;
export function phoneSay(b,{tablet=false}={}){const doc=b?.ownerDocument,win=doc?.defaultView,dlg=b?.closest('dialog');if(!b||!win||!dlg||tablet||!doc.documentElement.classList.contains('m-mode')||win.innerHeight>SAY_H)return '';
 const out=[];if(b.classList.contains('text-pic')&&!dlg.classList.contains('lesson-compact')){dlg.classList.add('lesson-compact');b.classList.add('no-guide');out.push('compact');}
 const head=dlg.querySelector('#modal-content>.modal-head'),rd=b.querySelector('.edu-speech .edu-speak');if(head&&rd){const x=head.querySelector(':scope>.close');rd.classList.add('r26f-head');if(x)x.before(rd);else head.append(rd);b.closest('.lesson')?.classList.add('r26f-pinned');out.push('pin');}
 b.dataset.sayFit=out.join('+')||b.dataset.sayFit||'';return b.dataset.sayFit;}
