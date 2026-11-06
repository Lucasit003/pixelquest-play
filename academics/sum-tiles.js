/* improve20-r18c-nov3 #2 (audit13 #11: Mia's first quiz asked her to type "3" for one question and tap for the next): the save's FIRST topic's
   summed quiz (lessons.js quizSumOn) taps every answer it can. The tiles come from the machinery that already exists, in this order:
     - the quiz's word tiles (word-choices.js) and the young player's tiles (tile-choices.js), now for every age on this one quiz;
     - the placement check's named options and closed sets (placement-choices.js);
   and three narrow, reviewed rules for answers those miss on the first rung's starter and common topics:
     - options the prompt itself lists: `which comes first: "X" or "Y"?` (the quoted pair) and `what comes first|last: a, b, c?` (the list
       after the last colon), as history-e-timelines asks them; the events are the prompt's own, so exactly one is the timeline's answer;
     - a count with a unit ("2 beats", language-e-syllables): the count one either side and two up, with the same unit (singular for 1);
     - contractions (language-e-contractions only): other answers of the same topic in the same form ("can't" beside "won't", "We have"
       beside "They have"); each contraction stands for one pair of words, so another one is never right.
   Every option set is checked against the answer key (game/math.js accepts: the answer and its alternatives): exactly one option may be
   accepted and there must be 2-4 options, or the question keeps its typing box. A tap fills the same hidden input a typed answer would
   (ui/answer-choices.js tileFormHTML), so grading, retirement and ids are unchanged. Pure: no DOM, no save. Other quizzes do not call it. */
import {accepts,choicesOf,/* improve26-r26b-nov6 #1 */acceptsExact} from '../game/math.js';
import {wordChoicesFor} from './word-choices.js';
import {tileChoices} from './tile-choices.js';
import {namedOptions,closedOptions,coinOptions} from './placement-choices.js';
import {POOL,ITEMS} from './lessons.js';
/* improve20-r18e-nov3 #1 */import {SUM_DISTRACTORS} from './sum-distractors.js';

export const SUM_TILE_MAX=4;
const h=s=>{let x=2166136261;for(const c of String(s)){x^=c.charCodeAt(0);x=Math.imul(x,16777619)>>>0;}return x;};
const low=v=>String(v??'').trim().toLowerCase();
/* 2-4 different options, exactly one accepted, the answer kept, in a fixed order from the item's id: [{value,label}] or null */
function settle(q,opts,max=SUM_TILE_MAX){
 const seen=new Set(),out=[];for(const o of opts){const v=String(o??'').trim();if(!v||v.length>60||seen.has(low(v)))continue;seen.add(low(v));out.push(v);}
 const right=out.filter(v=>accepts(v,q));if(right.length!==1/* improve26-r26b-nov6 #1: the accepted option is the key itself */||!acceptsExact(right[0],q))return null;
 const wrong=out.filter(v=>v!==right[0]).sort((a,b)=>h(q.id+'#'+a)-h(q.id+'#'+b)).slice(0,max-1);if(wrong.length<1)return null;
 return [right[0],...wrong].sort((a,b)=>h(q.id+'|'+low(a))-h(q.id+'|'+low(b))).map(v=>({value:v,label:v}));}
const unq=s=>s.trim().replace(/^["“‘']|["”’']$/g,'').trim();
export function listedOptions(q){
 const p=String(q?.prompt||'').trim();if(!/\?\s*$/.test(p))return null;
 /* `... which comes first: "X" or "Y"?` */
 const pair=/["“]([^"“”]{1,60})["”]\s+or\s+["“]([^"“”]{1,60})["”]\s*\?\s*$/.exec(p);if(pair)return settle(q,[pair[1],pair[2]]);
 /* `... what comes first: a, b, c?` */
 const at=p.lastIndexOf(':');if(at<0)return null;const list=p.slice(at+1).replace(/\?\s*$/,'');if(/["“”]/.test(list))return null;
 const items=list.split(/\s*,\s*(?:or\s+)?|\s+or\s+/).map(unq).filter(Boolean);if(items.length<2||items.length>8)return null;
 if(!items.some(x=>accepts(x,q)))return null;
 /* the answer and up to three of the other listed events */
 return settle(q,items);}
export function unitCount(q){
 const m=/^(\d{1,3}) ([a-z]{2,12})$/i.exec(String(q?.answer??'').trim());if(!m)return null;const n=+m[1],w=m[2],one=w.replace(/s$/i,''),many=/s$/i.test(w)?w:w+'s';
 const say=k=>`${k} ${k===1?one:many}`,r=settle(q,[say(n),...[n-1,n+1,n+2].filter(k=>k>=1).map(say)]);
 /* counts in order, as the young tiles show numbers */return r&&r.sort((x,y)=>parseInt(x.value)-parseInt(y.value));}
export const PEER_TOPICS=Object.freeze(new Set(['language-e-contractions']));
const shape=a=>/['’]/.test(a)?'short':/\s/.test(a)?'pair':'word';
export function peerOptions(q){
 if(!PEER_TOPICS.has(q?.topic))return null;const a=String(q.answer??'').trim(),k=shape(a);
 const peers=[...new Set((POOL[q.topic]||[]).map(id=>String(ITEMS[id]?.answer??'').trim()).filter(x=>x&&low(x)!==low(a)&&shape(x)===k&&!accepts(x,q)))].sort((x,y)=>h(q.id+'~'+x)-h(q.id+'~'+y)).slice(0,SUM_TILE_MAX-1);
 return peers.length>=2?settle(q,[a,...peers]):null;}
/* improve20-r18e-nov3 #1: the reviewed wrong options (sum-distractors.js, keyed by question id) for the 5 topics the rules above miss;
   the same check applies (exactly one accepted, 2-4 options) or the question stays typed. Numbers show in order, as the young tiles do. */
const PLAIN=/^\d+(\.\d+)?$/;
export function reviewedOptions(q){const w=q&&SUM_DISTRACTORS[q.id];if(!w)return null;const r=settle(q,[q.answer,...w]);
 return r&&r.every(x=>PLAIN.test(x.value))?r.sort((x,y)=>parseFloat(x.value)-parseFloat(y.value)):r;}
/* The tiles for one question of the first topic's summed quiz, or null (a choice question keeps choiceFormHTML's buttons; else typing) */
export function sumTiles(t,q){
 if(!q||choicesOf(q))return null;
 return wordChoicesFor(t,q)||/* improve20-r20g-nov4 #1 (kidsim5 #8): the coin a child counts first is tapped by name */coinOptions(q)||tileChoices(q)||namedOptions(q)||closedOptions(q)||listedOptions(q)||unitCount(q)||peerOptions(q)||/* improve20-r18e-nov3 #1 */reviewedOptions(q);}
/* true when the question is answered by tapping in that quiz (buttons or tiles) */
export const sumTaps=(t,q)=>!!(q&&(choicesOf(q)||sumTiles(t,q)));
/* improve20-r20g-nov4 #1 (kidsim5 #4: Ava typed money amounts in the Money placement; audit14 #6): an Elementary placement question that the
   check's own tiles miss taps from the same machinery as the first topic's summed quiz, for every age: a number's tiles (off by one and by
   ten, always wrong), a count with its unit, a contraction's peers and the reviewed wrong options (sum-distractors.js). Each set has exactly
   one accepted option or the question stays typed. main.js placementQuestion calls it after placementTiles. */
export const placementSumTiles=(t,q)=>t&&t.grade<6?sumTiles(t,q):null;
/* improve20-r20i-nov4 #2 (kidsim5 #7: Ivy, a 35% non-reader, sat the first quiz 5 times and reached 2 of 4): from the 3rd full sitting of the summed
   first quiz (two missed sittings in a row, lessons.js qmiss), a question with 4 tiles shows 3: the right one and two wrong ones, in the order they had.
   The wrong tile dropped is the one nearest the answer for numbers (9 beside 10 is the hardest to tell apart), else the last wrong one. The
   4-different-right rule is unchanged; only the number of tiles is. Pure. */
export const FEWER_AFTER=2,FEWER_TILES=3;
export const fewerDue=(rec)=>(rec?.qmiss|0)>=FEWER_AFTER;
export function fewerTiles(q,tiles,n=FEWER_TILES){
 if(!Array.isArray(tiles)||tiles.length<=n)return tiles;const right=tiles.filter(x=>accepts(x.value,q));if(right.length!==1)return tiles;
 const wrong=tiles.filter(x=>x!==right[0]),a=parseFloat(right[0].value),num=Number.isFinite(a)&&wrong.every(x=>Number.isFinite(parseFloat(x.value)));
 const keep=new Set([right[0],...(num?[...wrong].sort((x,y)=>Math.abs(parseFloat(y.value)-a)-Math.abs(parseFloat(x.value)-a)):wrong).slice(0,n-1)]);
 return tiles.filter(x=>keep.has(x));}
