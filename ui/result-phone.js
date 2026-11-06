/* improve20-r16b-nov3 #4 (audit12 a13, shot 04: on the 844x390 m7 card the notes column ended mid-line, "Its chapter seal hangs in..." cut, beside
   four buttons). Phone-only steps of main.js resultFrame, kept apart so tests can drive them with measured boxes:
   - phoneFold: a notes column (.level-highlights) whose scroll box (.level-result-body) still overflows folds its later notes, one at a time from
     the last, behind the same "More: N notes" toggle desktop uses (details.level-more); the first note always stays.
   - phoneButtons: a win card (no Retry) shows at most 3 buttons; the non-primary "Play X again" replay goes first (the map's pad replays it),
     then Refill. */
/* improve20-r20d-nov4 #4 (audit14 #9, shot 10: the m7 card's level-up box ended in a half-cut "More: 2 more notes" row at 1280x720): box, when given,
   is the scroll box to fit (desktop's .result-mid), so the same fold runs there after the tight and packed steps */
export function phoneFold(card,hl,out,boxIn=null){const box=boxIn||hl?.closest('.level-result-body')||hl?.parentElement;if(!hl||!box)return;const over=()=>box.scrollHeight>box.clientHeight+1;if(!over())return;
 let det=hl.querySelector(':scope>.level-more');const rows=[...hl.children].filter(e=>e.tagName==='P');if(rows.length<2)return;if(!det){det=(card.ownerDocument||globalThis.document).createElement('details');det.className='level-more';det.innerHTML='<summary></summary>';hl.append(det);}const sum=det.querySelector('summary');let n=0;
 for(let i=rows.length-1;i>=1&&over();i--){sum.after(rows[i]);n++;}const k=det.querySelectorAll(':scope>p').length;sum.textContent=`More: ${k} more ${k===1?'note':'notes'}`;if(n)out.push('phone-fold');}
export function phoneButtons(card,out,max=3/* improve24-r24m-nov5 #5: desktop calls it with WIN_MAX */){const row=card.querySelector(':scope>.modal-actions');if(!row||row.querySelector('#retry'))return;const vis=()=>[...row.querySelectorAll('button')].filter(b=>!b.hidden);/* improve20-r18a-nov3 #4: the wake hold's Try Heroic (a secondary) goes before the new pad's Go to */for(const id of ['restart','refill-potions','try-heroic'].concat(max>3?['win-library']:[]/* improve24-r24m-nov5 #5 */))if(vis().length>max){const b=row.querySelector('#'+id);if(b&&!b.classList.contains('primary')){b.hidden=true;b.style.display='none';out.push(max===3?'phone-3':'win-'+max);}}}
/* improve20-r18a-nov3 #6 (audit13 #9 at 844x390: on the busiest m7 card, a level-up and the Echo, the buttons ended 13 px under the screen): while
   the phone card still runs past its sheet, the rating key goes, then the grade tip moves under Details (the stars and grade badge stay) */
export function phoneFit(card,out){const mc=card.closest('#modal-content');if(!mc)return;const over=()=>mc.scrollHeight>mc.clientHeight+1;if(!over())return;
 const key=card.querySelector(':scope>.rating-key');if(key){key.hidden=true;key.style.display='none';out.push('phone-key');}if(!over())return;
 const tip=card.querySelector(':scope>.grade-next'),ex=card.querySelector('#result-extra');if(tip&&ex){ex.prepend(tip);out.push('phone-tip');}}
/* improve20-r20d-nov4 #1 (audit14 #3, shot 02: Details, Refill and Retry, then Return, then Place runes: 5 buttons in 3 rows): every loss card (main.js levelEnd: row = the card's .modal-actions, ex = #result-extra)
   shows Details and at most 3 buttons in one row, the one red last: Retry now (when something else is red), Return, one help button when Retry
   is red (the runes, else the Library, else Refill), then the red. When the refill is red (it retries too), a first loss's rune button takes Retry now's place. Start over and anything else move behind Details, in their own row. */
export function lossRow(row,ex){if(!row||!ex)return;
 const units=[...row.children].filter(e=>e.id!=='result-details'&&!e.classList.contains('defeat-easier')),btn=u=>u.matches('button')?u:u.querySelector('button'),find=id=>units.find(u=>btn(u)?.id===id);
 const red=units.find(u=>btn(u)?.classList.contains('primary')),keep=[];const rt=find('retry'),ru=find('place-runes');if(red&&btn(red).id==='refill-potions'&&ru)keep.push(ru);else if(red&&btn(red).id!=='retry'||!red){if(rt){keep.push(rt);if(red){const t=rt.querySelector('span:not([class])');(t||rt).textContent='Retry now';}}}
 const ld=find('level-done');if(ld)keep.push(ld);if(red&&btn(red).id==='retry'){const h=['place-runes','defeat-library','refill-potions'].map(find).find(Boolean);if(h)keep.push(h);}if(red)keep.push(red);
 row.dataset.lossRow='';const rest=units.filter(u=>!keep.includes(u));for(const u of keep){/* a kept rune secondary leaves its own-row wrapper */if(u.classList.contains('defeat-runes')&&!u.hasAttribute('data-row')){const b=btn(u);b.dataset.lead='secondary';row.append(b);u.remove();}else row.append(u);}if(rest.length){const box=row.ownerDocument.createElement('div');box.className='modal-actions loss-more';box.dataset.lossMore='';for(const u of rest){if(u.dataset)delete u.dataset.row;box.append(u);}ex.append(box);}}
/* improve24-r24m-nov5 #2/#3/#5 (audit16 #2, #5, #9; shots 08, 09, 10, 12): steps run on every result card once its buttons are final (main.js, the
   frame after the card is drawn), at every size:
   - goalCap: NEXT GOAL is its one lead plus at most GOAL_LINES more line (the first in the box's order); later lines move behind Details
     (#result-extra, a .goal-more box), so the m7 card no longer stacks Veilmoor, "Echo fades", the runes and the Ground Slam meter;
   - rowFit: a button whose text is wider than the button, or a row wider than the card, wraps the row to a second line (data-fit="wrap"),
     and a button still too narrow wraps its own text (data-fit-wrap), so no label is cut or spills at 1280x720, 1366x768 or 1920x1080;
   - noteFit (desktop): a middle box that still runs past its height after the fold moves the "More: N notes" toggle, then the hero-level bar,
     behind Details, so the first note (a seal line) is never cut under the NEXT GOAL divider.
   WIN_MAX: a win card shows at most 4 buttons (phoneButtons with max 4). Each returns what it did into out, for the shot driver and tests. */
export const GOAL_LINES=1,WIN_MAX=4;
const shown=e=>!!e&&!e.hidden&&e.style?.display!=='none';
export function goalCap(card,ex,out=[]){const g=card?.querySelector(':scope>.result-goal');if(!g||!ex)return out;const ls=[...g.children].filter(e=>e.tagName==='SPAN'&&shown(e)),more=ls.slice(GOAL_LINES);if(!more.length)return out;
 let box=ex.querySelector(':scope>.goal-more');if(!box){box=(card.ownerDocument||globalThis.document).createElement('div');box.className='goal-more';box.dataset.goalMore='';ex.prepend(box);}for(const e of more)box.append(e);out.push('goal-cap');return out;}
export const clippedButton=b=>!!b&&b.scrollWidth>b.clientWidth+1;
export function rowFit(card,out=[]){const row=card?.querySelector(':scope>.modal-actions');if(!row)return out;const bs=()=>[...row.querySelectorAll('button')].filter(b=>shown(b)&&!b.closest('[hidden]'));const bad=()=>row.scrollWidth>row.clientWidth+1||bs().some(clippedButton);if(!bad())return out;
 row.dataset.fit='wrap';out.push('row-wrap');for(const b of bs())if(clippedButton(b)){b.dataset.fitWrap='';out.push('text-wrap');}return out;}
export const NOTE_MASK=28;
export function noteFit(card,ex,out=[]){const mid=card?.querySelector(':scope>.result-mid');if(!mid||!ex)return out;const over=()=>mid.scrollHeight>mid.clientHeight+1;
 /* improve26-r26a-nov6 #4: the 3rd star's line (data-star-goal, main.js) stays on the face; the middle box scrolls instead */for(const sel of ['.level-highlights>.level-more','.level-result-detail>.level-hero-progress',':scope>.grade-next:not([data-star-goal])']){if(!over())break;const e=(sel[0]===':'?card:mid).querySelector(sel);if(e){ex.append(e);out.push('note-fit');}}
 /* the busiest first clear (Wear it, chests, the level-up ribbon): the first note still sits under the box's fade or below it, so it leaves the
    scrolling box and stands, one compact line, just over NEXT GOAL (the box keeps scrolling for the rest) */
 const first=mid.querySelector('.level-highlights>p.level-record');if(first&&over()){const b=mid.getBoundingClientRect(),r=first.getBoundingClientRect();if(r.bottom>b.bottom-NOTE_MASK||r.top<b.top-1){first.classList.add('note-lifted');mid.after(first);out.push('note-lift');/* the lifted line takes the place of NEXT GOAL's extra line, so the box keeps its height for the ribbon and rewards */const g=card.querySelector(':scope>.result-goal');for(const e of g?[...g.children].filter(e=>e.tagName==='SPAN'&&shown(e)):[]){let box=ex.querySelector(':scope>.goal-more');if(!box){box=(card.ownerDocument||globalThis.document).createElement('div');box.className='goal-more';box.dataset.goalMore='';ex.prepend(box);}box.prepend(e);out.push('goal-lead-only');}}}{const hl=mid.querySelector('.level-highlights');if(hl&&!hl.children.length){hl.hidden=true;hl.style.display='none';}/* an emptied notes box leaves no frame behind */}return out;}
/* improve25-r25s-nov5 #2 (kidsim8 #3, shot 11: Sam's first Goblin Camp win at 844x390 put Details / Return to map / Finish practice under the
   sheet's fold; R24M's fitCard fit desktop sizes only). On a phone (main.js fitCard, m-mode) a card whose button row still runs past the sheet
   gives up, one step at a time while it does: NEXT GOAL's "Next ability" line (to Details, as goalCap does), the cheer line, the boss's parting words (to Details), the level-up
   ribbon's second line (to Details), the tier word, and last the card's height cap, so the row's own sticky bottom holds it in view. Sizes are
   never shrunk, so R24L's 11 px label floor and the 14 px Pixel Operator floor stand. */
export function phoneRow(card,ex,out=[]){const mc=card?.closest('#modal-content'),row=card?.querySelector(':scope>.modal-actions');if(!mc||!row)return out;const doc=card.ownerDocument||globalThis.document;
 const over=()=>mc.scrollHeight>mc.clientHeight+1||row.getBoundingClientRect().bottom>mc.getBoundingClientRect().bottom+1;if(!over())return out;
 const toEx=(e,cls)=>{if(!e||!ex)return false;let box=ex.querySelector(':scope>.goal-more');if(!box){box=doc.createElement('div');box.className='goal-more';box.dataset.goalMore='';ex.prepend(box);}if(cls){const p=doc.createElement('p');p.className=cls;p.append(e);box.append(p);}else box.append(e);return true;};
 const hide=e=>{if(!e||!shown(e))return false;e.hidden=true;e.style.display='none';return true;};
 const steps=[['row-lib',()=>toEx(card.querySelector(':scope>.result-goal>.result-library'))],['row-cheer',()=>hide(card.querySelector(':scope>.victory-cheer'))],['row-quote',()=>toEx(card.querySelector(':scope>.f2-boss-talk')||card.querySelector(':scope>.level-quote'))],['row-meaning',()=>toEx(card.querySelector('.f2-lv-ribbon .f2-level-meaning'),'level-record r25s-lv-meaning')],['row-tier',()=>hide(card.querySelector(':scope>.level-tier'))],['row-pin',()=>{card.classList.add('r25s-row-pin');return true;}]];
 for(const [k,f] of steps){if(!over())break;if(f())out.push(k);}return out;}
/* improve26-r26c-nov6 #1 (audit17 #4, shots 29b, 67, 143, 150: the level-up ribbon and the chest row sat cut under the seal note or inside the scroll
   box on e2, e3, m2, m3 Heroic, v3-v5 and the Sleeper's Heroic and Legendary). Runs on every result card once its buttons are final (main.js fitCard,
   after noteFit or phoneRow), at every size. While the ribbon or the chests are under MOMENT_SEEN of their height in view, or a button under MOMENT_BTN (R25S #2: the row in view on first paint):
   - hoist (desktop): the boss's words, YOU GOT, the chest row and the ribbon leave the scrolling middle and stand above the seal note, outside the scroll body;
   - then the lower-value lines go behind Details (#result-extra), one at a time: the boss's parting words, the grade tip (never the 3rd star's
     data-star-goal line, R26A), the cheer line (hidden), on a phone the hero's picture beside the chests (hidden: its 64 px kept the box scrolling, so its fade lay over them), then the seal note (Details then says "Details: rune seal"), and last the other notes in the scroll box;
   - a hoisted desktop middle that still scrolls drops the hero's picture (decor), so its notes show in the room left; a middle under MOMENT_MID px tall gives its notes to Details too (and goes when only the hero's picture is left), so nothing sits in a sliver of a scroll box.
   seen(e) is the share of e's height in view, clipped by every scrolling box (less its 28 px fade) and the screen. Sizes never change. */
export const MOMENT_SEEN=.9,MOMENT_BTN=.99,MOMENT_MID=48;
export function seenShare(e){if(!e||!e.getClientRects?.().length)return 1;const b=e.getBoundingClientRect();if(!b.height)return 1;let t=b.top,bo=b.bottom,a=e.parentElement;const win=e.ownerDocument?.defaultView||globalThis;
 while(a&&a!==e.ownerDocument?.documentElement){const cs=win.getComputedStyle?.(a);if(cs&&!/visible/.test(cs.overflowY||'visible')){const q=a.getBoundingClientRect();t=Math.max(t,q.top);bo=Math.min(bo,q.bottom-(a.classList.contains('more-below')?NOTE_MASK:0));}a=a.parentElement;}
 bo=Math.min(bo,win.innerHeight||bo);t=Math.max(t,0);return Math.max(0,bo-t)/b.height;}
export const momentParts=card=>{const q=s=>[...card.querySelectorAll(s)].filter(e=>shown(e)&&!e.closest('#result-extra,details:not([open]),[hidden]'));return [...q('.level-levelup.f2-lv-ribbon,.level-levelup:not(.level-ups)').slice(0,1),...q('.result-chests'),...q(':scope>.modal-actions>button')];};
export function momentFit(card,ex,out=[],{phone=false}={}){if(!card||!ex||card.dataset.outcome!=='won')return out;const parts=()=>momentParts(card),mid=card.querySelector(':scope>.result-mid');
 /* the per-frame fade cue (main.js resultFrame), brought up to date before each measure */const cue=()=>{for(const el of card.querySelectorAll('.result-mid,.level-result-body'))el.classList.toggle('more-below',el.scrollHeight-el.scrollTop-el.clientHeight>8);};
 const short=()=>{cue();return parts().some(e=>seenShare(e)<(e.tagName==='BUTTON'?MOMENT_BTN:MOMENT_SEEN));};if(!short())return out;const doc=card.ownerDocument||globalThis.document;
 const more=()=>{let box=ex.querySelector(':scope>.goal-more');if(!box){box=doc.createElement('div');box.className='goal-more';box.dataset.goalMore='';ex.prepend(box);}return box;};
 const hint=t=>{const b=card.querySelector('#result-details');if(b&&!b.dataset.more){b.dataset.more=t;b.textContent=`Details: ${t}`;}};
 if(mid&&!phone){const top=[':scope>.f2-boss-talk',':scope>.level-quote',':scope>.you-got',':scope>.result-chests',':scope>.f2-lv-ribbon'].map(s=>mid.querySelector(s)).filter(Boolean);if(top.length){for(const e of top)mid.before(e);card.classList.add('r26c-hoist');out.push('moment-hoist');}}
 const notes=()=>{const hl=card.querySelector('.level-highlights:not(#result-extra *)');if(!hl||!hl.children.length)return false;const box=more();if(hl.querySelector('[data-seal-run]'))hint('rune seal');for(const e of [...hl.children]){e.classList.remove('note-lifted');box.append(e);}hl.hidden=true;hl.style.display='none';return true;};
 const seal=()=>card.querySelector(':scope>.note-lifted')||card.querySelector('[data-seal-run]:not(#result-extra *)');
 const steps=[['moment-quote',()=>{const e=card.querySelector('.f2-boss-talk:not(#result-extra *)')||card.querySelector('.level-quote:not(#result-extra *)');if(!e)return false;more().append(e);return true;}],
  ['moment-tip',()=>{const e=card.querySelector(':scope>.grade-next:not([data-star-goal])');if(!e||!shown(e))return false;more().append(e);return true;}],
  ['moment-cheer',()=>{const e=card.querySelector(':scope>.victory-cheer');if(!e||!shown(e))return false;e.hidden=true;e.style.display='none';return true;}],
  ['moment-hero',()=>{const e=phone&&card.querySelector('.level-result-body>canvas.level-hero');if(!e||!shown(e))return false;e.hidden=true;e.style.display='none';return true;}],
  ['moment-seal',()=>{const e=seal();if(!e||e.closest('#result-extra'))return false;e.classList.remove('note-lifted');more().append(e);if(e.matches('[data-seal-run]'))hint('rune seal');return true;}],
  ['moment-notes',()=>notes()]];
 for(const [k,f] of steps){if(!short())break;if(f())out.push(k);}
 if(mid&&!phone&&out.includes('moment-hoist')&&mid.scrollHeight>mid.clientHeight+1){const hc=mid.querySelector('.level-result-body>canvas.level-hero');if(hc&&shown(hc)){hc.hidden=true;hc.style.display='none';out.push('moment-hero');}}
 if(mid&&!phone&&mid.clientHeight<MOMENT_MID&&mid.scrollHeight>mid.clientHeight+1){if(!out.includes('moment-notes')&&notes())out.push('moment-notes');if(!mid.textContent.trim()){mid.hidden=true;mid.style.display='none';out.push('moment-mid');}}
 cue();return out;}
