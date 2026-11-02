/* improve20-r9d-nov1 #2 (audit8 a3): every Elementary quiz question was a typing box, even "What comes next: circle, square, star..." where a
   7-year-old had to type "square", while the lesson's own Try-its were buttons. An Elementary item whose answer is one word from a small known
   set is answered by tapping one of 3-4 tiles, for every Elementary player (academics/tile-choices.js keeps its number tiles for the
   youngest). Numbers and open answers stay typed. The sets, and where each tile comes from:
     - the item's own pieces: a pattern's tiles (cs-e-patterns: "What comes next", "Which color is missing"), a list's own entries
       (cs-e-lists, a colour answer), a map key's own shapes (geography-e-map-key, "Which shape represents...");
       a pattern of only two pieces adds one more from its own family (a colour or shape the pattern does not use, so never right);
     - compass points: the other three of north, south, east and west;
     - yes / no; the days of the week (none in the bank today; kept for new items, always checked).
   Every distractor is checked against the answer key (accepts: the answer, its alternatives and typo forgiveness) and dropped if it would be
   marked right, so exactly one tile is right; with fewer than two distractors left the item keeps its typing box. A tap fills the same hidden
   input a typed answer would (ui/answer-choices.js tileFormHTML), so grading, XP, retirement and mastery are unchanged. Prompts and ids are
   untouched. Pure: no save reads or writes. */
import {accepts,choicesOf} from '../game/math.js';

export const WORD_MAX=4;
export const COLORS=Object.freeze(['red','blue','green','yellow']);
export const SHAPES=Object.freeze(['circle','square','triangle','star']);
export const COMPASS=Object.freeze(['north','south','east','west']);
export const YES_NO=Object.freeze(['yes','no']);
export const DAYS=Object.freeze(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
const ALL_COLORS=['red','blue','green','yellow','orange','purple','pink','brown','black','white','grey','gray'];
const low=v=>String(v??'').trim().toLowerCase();
const h=s=>{let x=2166136261;for(const c of String(s)){x^=c.charCodeAt(0);x=Math.imul(x,16777619)>>>0;}return x;};
const pics=q=>[].concat(q?.pic||[]).filter(p=>p&&typeof p==='object');

/* The words the item itself offers as its pieces, answer included, or null. */
function pieces(q,a){
 for(const p of pics(q)){
  if(p.t==='tiles'&&Array.isArray(p.seq)){const seq=[...new Set(p.seq.filter(x=>typeof x==='string').map(low))];if(!seq.includes(a))continue;
   const fam=SHAPES.includes(a)?SHAPES:COLORS.includes(a)?COLORS:null;if(!fam||!seq.every(x=>fam.includes(x)))continue;
   /* a two-piece pattern gets one more of its own family that the pattern never shows, so it can never be the answer */
   return seq.length>=3?seq:[...seq,...fam.filter(x=>!seq.includes(x)).sort((x,y)=>h(q.id+'#'+x)-h(q.id+'#'+y)).slice(0,3-seq.length)];}
  if(p.t==='program'&&Array.isArray(p.lines)&&ALL_COLORS.includes(a)){const ls=p.lines.map(low);if(ls.length>=3&&ls.length<=8&&ls.every(x=>ALL_COLORS.includes(x))&&new Set(ls).size===ls.length&&ls.includes(a))return ls;}
  if(p.t==='gridmap'&&Array.isArray(p.key)&&SHAPES.includes(a)){const ks=p.key.map(k=>low(k?.symbol));if(ks.length>=3&&ks.every(x=>SHAPES.includes(x))&&new Set(ks).size===ks.length&&ks.includes(a))return ks;}
 }
 return null;
}
function candidates(q){
 const a=low(q.answer);if(!a||!/^[a-z]+$/.test(a))return null;
 const own=pieces(q,a);if(own)return own;
 if(COMPASS.includes(a))return COMPASS;
 /* only a plain yes-or-no question ("Is ...?", "Can ...?"); a fill-the-blank whose word happens to be "no" (know / no) is not one */
 if(YES_NO.includes(a)&&/^(is|are|am|does|do|did|can|could|will|would|was|were|has|have|should)\b/i.test(String(q.prompt||'').trim())&&!/_{2,}|\(/.test(q.prompt))return YES_NO;
 const d=DAYS.map(low);if(d.includes(a))return d;
 return null;
}

/* [{value,label}] (answer included, 3-4 tiles; yes/no gives 2) or null. The right tile's value is the answer exactly as written; the order is
   fixed by the item's id, so the answer is not always first and a retake shows the same tiles. */
export function wordChoices(q){
 if(!q||choicesOf(q))return null;const set=candidates(q);if(!set)return null;
 const ans=String(q.answer).trim(),a=low(ans),yn=set===YES_NO,d=[];
 for(const c of set){if(low(c)===a||d.some(x=>low(x)===low(c))||accepts(c,q))continue;d.push(c);}
 if(d.length<(yn?1:2))return null;
 const pick=d.sort((x,y)=>h(q.id+'|'+x)-h(q.id+'|'+y)).slice(0,WORD_MAX-1);
 const cap=w=>DAYS.includes(w)?w:w[0].toUpperCase()+w.slice(1);
 return [ans,...pick].sort((x,y)=>h(q.id+'|'+low(x))-h(q.id+'|'+low(y))).map(v=>({value:v,label:cap(low(v)===a?a:v)}));
}
/* Elementary topics only (grades 2-5; lessons.js stageOf) */
export const wordChoicesFor=(t,q)=>t&&t.grade<6?wordChoices(q):null;
