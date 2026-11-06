/* improve25-r25s-nov5 #3 (kidsim8 #4: at 1280x720 Zoe's and Ava's lesson, quiz and test summaries still ran "YOUR NEXT ABILITY", the seal line and
   the "Scholar badges" line under the fold; R25P's grid covers only a practice or quiz summary with the goal card). main.js calls sumFit on every
   Library summary on a computer once it is drawn. A summary (lesson, quiz, practice or test; pass or fail) that still runs past its sheet takes two
   columns (style.css "improve25-r25s-nov5 #3": the next-ability card on the right, the score, lines, progress row and seal line on the left, the
   buttons in one row under both); still over, the seal line joins the card on the right (div.r25s-sum-side); still over, the lower-value lines (Take your time, Toward mastery, the subtle note) fold under Details, as R25P's
   sumFold does. A summary that fits is left as it was (R25F's line on the mastery summary). Font sizes never change (the 16 px desktop floor).
   mc: #modal-content. Returns what it did ('' when nothing), also kept on the summary as data-sum-fit. */
export const SUM_LOW=[':scope>p.take-time',':scope>.edu-mastery',':scope>p.subtle'];
export function sumFit(mc){const r=mc?.querySelector(':scope>.result,:scope>.lesson');if(!r||!r.querySelector(':scope>.am-goal,:scope>.r25s-sum-side>.am-goal'))return '';const over=()=>mc.scrollHeight>mc.clientHeight+1;if(!over())return r.dataset.sumFit||'';const out=[];
 if(!r.classList.contains('r25s-sum2')){r.classList.add('r25s-sum2');out.push('sum2');}
 /* the seal line joins the next-ability card in the right column, so the left one keeps the buttons' room */
 if(over()){const g=r.querySelector(':scope>.am-goal'),sl=r.querySelector(':scope>.seal-hint');if(g&&sl){const side=(r.ownerDocument||globalThis.document).createElement('div');side.className='r25s-sum-side';g.before(side);side.append(g,sl);out.push('sum-side');}}
 if(over()){const low=SUM_LOW.map(q=>r.querySelector(q)).filter(e=>e&&!e.closest('details'));if(low.length){let d=r.querySelector(':scope>.sum-more');if(!d){d=(r.ownerDocument||globalThis.document).createElement('details');d.className='sum-more';d.dataset.sumMore='';d.innerHTML='<summary>Details</summary>';(r.querySelector(':scope>.edu-progress')||r.querySelector(':scope>.am-goal,:scope>.r25s-sum-side')).after(d);}d.append(...low);out.push('sum-low');}}
 r.dataset.sumFit=[r.dataset.sumFit,...out].filter(Boolean).join('+');return r.dataset.sumFit;}
