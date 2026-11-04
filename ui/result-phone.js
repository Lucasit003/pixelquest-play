/* improve20-r16b-nov3 #4 (audit12 a13, shot 04: on the 844x390 m7 card the notes column ended mid-line, "Its chapter seal hangs in..." cut, beside
   four buttons). Phone-only steps of main.js resultFrame, kept apart so tests can drive them with measured boxes:
   - phoneFold: a notes column (.level-highlights) whose scroll box (.level-result-body) still overflows folds its later notes, one at a time from
     the last, behind the same "More: N notes" toggle desktop uses (details.level-more); the first note always stays.
   - phoneButtons: a win card (no Retry) shows at most 3 buttons; the non-primary "Play X again" replay goes first (the map's pad replays it),
     then Refill. */
export function phoneFold(card,hl,out){const box=hl?.closest('.level-result-body')||hl?.parentElement;if(!hl||!box)return;const over=()=>box.scrollHeight>box.clientHeight+1;if(!over())return;
 let det=hl.querySelector(':scope>.level-more');const rows=[...hl.children].filter(e=>e.tagName==='P');if(rows.length<2)return;if(!det){det=(card.ownerDocument||globalThis.document).createElement('details');det.className='level-more';det.innerHTML='<summary></summary>';hl.append(det);}const sum=det.querySelector('summary');let n=0;
 for(let i=rows.length-1;i>=1&&over();i--){sum.after(rows[i]);n++;}const k=det.querySelectorAll(':scope>p').length;sum.textContent=`More: ${k} more ${k===1?'note':'notes'}`;if(n)out.push('phone-fold');}
export function phoneButtons(card,out){const row=card.querySelector(':scope>.modal-actions');if(!row||row.querySelector('#retry'))return;const vis=()=>[...row.querySelectorAll('button')].filter(b=>!b.hidden);/* improve20-r18a-nov3 #4: the wake hold's Try Heroic (a secondary) goes before the new pad's Go to */for(const id of ['restart','refill-potions','try-heroic'])if(vis().length>3){const b=row.querySelector('#'+id);if(b&&!b.classList.contains('primary')){b.hidden=true;b.style.display='none';out.push('phone-3');}}}
/* improve20-r18a-nov3 #6 (audit13 #9 at 844x390: on the busiest m7 card, a level-up and the Echo, the buttons ended 13 px under the screen): while
   the phone card still runs past its sheet, the rating key goes, then the grade tip moves under Details (the stars and grade badge stay) */
export function phoneFit(card,out){const mc=card.closest('#modal-content');if(!mc)return;const over=()=>mc.scrollHeight>mc.clientHeight+1;if(!over())return;
 const key=card.querySelector(':scope>.rating-key');if(key){key.hidden=true;key.style.display='none';out.push('phone-key');}if(!over())return;
 const tip=card.querySelector(':scope>.grade-next'),ex=card.querySelector('#result-extra');if(tip&&ex){ex.prepend(tip);out.push('phone-tip');}}
