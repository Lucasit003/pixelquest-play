/* improve20-r11a-nov2 #1 (audit9 a2): the placement check asked a 9-year-old to type "adjective" for "Is 'old' a noun or an adjective?",
   "right" for "(write or right)" and "Africa" for "Which continent...", while the quiz gave the same kid buttons. The check now answers
   by tapping wherever the quiz would (choicesOf, then the quiz's word tiles, then a young player's tiles for a non-number answer) and
   also wherever the answer is one of the options the prompt itself names, or one of a small closed set:
     - named options: a closing "(A or B)" / "(A / B)", a closing "Choose: a, b, c." list, or a question that ends "... X or Y?" (the
       last "or" of the last sentence; X is read back to a stop word or an article, or is the shortest ending of the clause the answer key
       accepts);
     - closed sets: the seven continents ("continent" in the prompt), and the four parts of speech ("part of speech" or "job of").
   Every option is checked against the answer key (game/math.js accepts: the answer, its alternatives and typo forgiveness): exactly one
   option may be accepted, or the item keeps its typing box. Open answers (numbers, opposites, contractions, spellings) stay typed, as in
   the quiz for an older player. A tap fills the same hidden input a typed answer would (ui/answer-choices.js tileFormHTML), so
   answerPlacement grades it exactly as before: PLACEMENT_STREAK, placementGrade and gradeOpen are untouched. Pure: no DOM, no save. */
import {accepts,choicesOf} from '../game/math.js';
import {wordChoicesFor} from './word-choices.js';
import {tileChoices,youngFor} from './tile-choices.js';

export const CONTINENTS=Object.freeze(['Africa','Antarctica','Asia','Australia','Europe','North America','South America']);
export const PARTS=Object.freeze(['noun','verb','adjective','adverb']);
export const CHOICE_MAX=4;
const h=s=>{let x=2166136261;for(const c of String(s)){x^=c.charCodeAt(0);x=Math.imul(x,16777619)>>>0;}return x;};
const low=v=>String(v??'').trim().toLowerCase();
const bare=v=>String(v??'').trim().replace(/^(?:a|an|the)\s+/i,'').trim();
const numeric=q=>!!q?.numeric||/^[-$]?\d[\d.,/]*%?$/.test(String(q?.answer??'').trim());
const STOP=new Set(['is','are','was','were','be','it','its','if','does','do','did','has','have','had','can','could','would','will','should','that','this','these','those','which','what','who','whom','whose','why','how','where','when','or','and','of','to','in','on','at','by','for','from','with','me','you','tell']);
const ART=new Set(['a','an','the']);
/* exactly one accepted option, at least two, all different: [{value,label}] in a fixed order from the item's id, or null */
/* bareLabels: show each option without a leading a/an/the ("noun", "adjective"); the value graded stays as the option reads */
function settle(q,opts,bareLabels=false){
 const seen=new Set(),out=[];for(const o of opts){const v=String(o||'').trim();if(!v||v.length>40||seen.has(low(bare(v))))continue;seen.add(low(bare(v)));out.push(v);}
 if(out.length<2||out.length>8||out.filter(v=>accepts(v,q)).length!==1)return null;
 return out.sort((x,y)=>h(q.id+'|'+low(bare(x)))-h(q.id+'|'+low(bare(y)))).map(v=>({value:v,label:bareLabels&&bare(v)?bare(v):v}));}
const split=s=>s.split(/\s*\/\s*|\s*,\s*(?:or\s+)?|\s+or\s+/).map(x=>x.replace(/^["'“‘]|["'”’]$/g,'').trim()).filter(Boolean);
/* the options the prompt names */
export function namedOptions(q){
 const p=String(q?.prompt||'').trim();if(!p)return null;
 const par=/\(([^()]{2,80})\)\s*[.?!]?\s*$/.exec(p)||/\(([^()]{2,80})\)\s*\?\s*$/.exec(p);
 if(par&&/\sor\s|\//.test(par[1])){const r=settle(q,split(par[1]));if(r)return r;}
 const ch=/\b(?:Choose|Pick)(?: one)?:\s*([^.?!]{2,80})[.?!]?\s*$/i.exec(p);
 if(ch){const r=settle(q,split(ch[1]));if(r)return r;}
 /* "... X or Y?": the question's last clause */
 const end=/\?\s*$/.exec(p);if(!end)return null;
 const body=p.slice(0,end.index),cut=Math.max(...['. ','? ','! ',': ','; ','" ','” ',"' ",'’ ',', '].map(k=>{const i=body.lastIndexOf(k);return i<0?-1:i+k.length;}));
 const clause=body.slice(Math.max(0,cut)),at=clause.lastIndexOf(' or ');if(at<0)return null;
 const right=clause.slice(at+4).trim(),words=clause.slice(0,at).trim().split(/\s+/);if(!right||right.split(/\s+/).length>6)return null;
 const rw=bare(right).split(/\s+/).length;
 if(accepts(right,q)||accepts(bare(right),q)){const left=[];for(let i=words.length-1;i>=0&&left.length<=rw;i--){const w=words[i],k=low(w).replace(/[^a-z']/g,'');if(/["'“”‘’]/.test(w)||STOP.has(k))break;left.unshift(w);if(ART.has(k))break;}
  return left.length?settle(q,[left.join(' '),right],true):null;}
 /* the answer is X: the shortest ending of the clause the key accepts, widened to Y's length when that still reads as the answer ("the one
    that costs 5 cents" beside "the one that costs 6 cents"); Y loses a trailing comparison ("shorter shadow than a high Sun" -> "shorter") */
 for(let n=1;n<=Math.min(5,words.length);n++){const w=words.slice(-n),k=low(w[0]).replace(/[^a-z']/g,'');if(w.some(x=>/["'“”‘’]/.test(x)))break;const left=w.join(' ');if(accepts(left,q)||accepts(bare(left),q)){
   const wide=words.slice(-right.split(/\s+/).length).join(' '),ok=v=>v&&!/["'“”‘’]/.test(v)&&!v.split(/\s+/).some(x=>STOP.has(low(x)))&&(accepts(v,q)||accepts(bare(v),q));
   /* "the one that costs 5 cents or the one that costs 6 cents": the words both sides start with go, leaving "5 cents" and "6 cents" */
   {const a=wide.split(/\s+/),b=right.split(/\s+/);let k=0;while(k<a.length-1&&k<b.length-1&&low(a[k])===low(b[k]))k++;const x=a.slice(k).join(' '),y=b.slice(k).join(' ');if(k>0&&(accepts(x,q)||accepts(bare(x),q)))return settle(q,[x,y],true);}
   const r2=right.replace(/\s+(?:than|change[sd]?)\b.*$/i,'').trim()||right;return settle(q,[ok(bare(wide))?wide:left,r2],true);}
  if(STOP.has(k))break;}
 return null;}
/* a small closed set the answer belongs to */
export function closedOptions(q){
 const p=String(q?.prompt||''),a=bare(q?.answer),pick=set=>{const others=set.filter(x=>low(x)!==low(a)&&!accepts(x,q)).sort((x,y)=>h(q.id+'#'+x)-h(q.id+'#'+y)).slice(0,CHOICE_MAX-1);return settle(q,[String(q.answer).trim(),...others],true);};
 if(/\bcontinent/i.test(p)&&CONTINENTS.includes(a))return pick(CONTINENTS);
 if(/\bpart of speech\b|\bjob of\b/i.test(p)&&PARTS.includes(low(a)))return pick(PARTS);
 return null;}
/* The tap tiles for a placement question ([{value,label}]), or null when it keeps choiceFormHTML's buttons (choicesOf) or a typing box.
   Order: the quiz's own word tiles, the prompt's named options, a closed set, then a young player's tiles (never for a number). */
export function placementTiles(q,t,save){
 if(!q||choicesOf(q))return null;
 return wordChoicesFor(t,q)||/* improve20-r21a-nov4 #6 */compareOptions(q)||(t&&t.grade<6?fractionTiles(q):null)||/* improve20-r20g-nov4 #1 */(t&&t.grade<6?coinOptions(q):null)||namedOptions(q)||closedOptions(q)||/* improve20-r20g-nov4 #1 */listOptions(q,t)||(!numeric(q)&&youngFor(save,t)?tileChoices(q):null);}
/* improve20-r20g-nov4 #1 (audit14 #6, shot 07): a Grade 4 child still typed 8 of 12 Elementary placement answers, among them a step copied
   from the plan beside the question ("rinse them") and a whole sorted list ("57, 70, 7, 83"). Two more ways to tap, Elementary topics only:
     - listOptions: the answer is one entry of the item's own list, the plan or list it shows (a program picture's lines), the stages or
       events of its timeline picture, or the chain its prompt writes out ("grass -> rabbit -> fox"). Up to CHOICE_MAX of the list's own
       entries are offered; the list's entries are different things, the question asks for one place in it, and settle() keeps the set
       only when exactly one entry is accepted by the answer key, so every other entry is wrong;
     - orderPieces: the answer is the prompt's own list of numbers in a new order (one bubble-sort pass). The child taps the numbers in
       order; the taps build the same "a, b, c, d" text a typed answer would, so the same key grades it. Exactly one order is accepted.
   Pure: no DOM, no save. Items, prompts and ids are untouched. */
const strip=v=>String(v??'').replace(/^\s*\d+[.)]\s+/,'').trim();
export function listEntries(q){
 const out=[];for(const p of [].concat(q?.pic||[])){if(!p||typeof p!=='object')continue;
  if(p.t==='program'&&Array.isArray(p.lines))out.push(p.lines.map(strip));
  if(p.t==='timeline'&&Array.isArray(p.events)){const ev=p.events.map(e=>e==null?p.fill:e);if(ev.every(e=>typeof e==='string'&&e.trim()&&!/^(?:\?|\.\.\.|…|older|newer)$/i.test(e.trim())))out.push(ev.map(strip));}}
 const ch=/((?:[A-Za-z][A-Za-z' ]*?)(?:\s*->\s*[A-Za-z][A-Za-z' ]*?){2,})(?=[,.?:;]|$)/.exec(String(q?.prompt||''));if(ch)out.push(ch[1].split(/\s*->\s*/).map(x=>x.trim()));
 return out.filter(l=>l.length>=3&&l.length<=10);}
export function listOptions(q,t){
 if(!q||!t||t.grade>=6||numeric(q))return null;
 /* a question that names its own two candidates ("which is done first: X or Y?") is answered from those two only (namedOptions): an entry
    earlier than both would also be "first" */
 if(/\sor\s/i.test(String(q.prompt||'')))return null;
 for(const list of listEntries(q)){const ok=list.filter(v=>accepts(v,q)||accepts(bare(v),q));if(ok.length!==1)continue;
  const others=[...new Set(list.filter(v=>v!==ok[0]))].sort((x,y)=>h(q.id+'~'+low(x))-h(q.id+'~'+low(y))).slice(0,CHOICE_MAX-1);
  const r=settle(q,[ok[0],...others]);if(r)return r;}
 return null;}
const NUMS=/(?:^|[:\s])(\d{1,4}(?:,\s*\d{1,4}){2,9})(?=[.?!]|\s|,\s*swapping|$)/;
export function orderPieces(q,t){
 if(!q||!t||t.grade>=6||choicesOf(q))return null;const a=String(q.answer??'').trim();if(!/^\d{1,4}(?:,\s*\d{1,4}){2,9}$/.test(a))return null;
 const m=NUMS.exec(String(q.prompt||''));if(!m)return null;const src=m[1].split(/,\s*/),ans=a.split(/,\s*/);
 if([...src].sort().join()!==[...ans].sort().join()||!accepts(ans.join(', '),q))return null;
 /* exactly one order is accepted: every other order of the same numbers is marked wrong (checked in full up to 6 numbers) */
 if(src.length<=6){const perms=xs=>xs.length<2?[xs]:xs.flatMap((x,i)=>perms([...xs.slice(0,i),...xs.slice(i+1)]).map(r=>[x,...r]));const seen=new Set();let n=0;for(const p of perms(src)){const k=p.join(', ');if(seen.has(k))continue;seen.add(k);if(accepts(k,q))n++;}if(n!==1)return null;}
 return src.map((v,i)=>({value:v,label:v,i}));}
/* improve20-r20g-nov4 #1 (kidsim5 #8: a non-reader got "Which coin do you count first? Give its value in cents." wrong 3 times; its tiles were
   the prompt's coin counts, 1, 2, 3): the tiles are the coins in the picture, by name and value ("dime (10¢)"), and the tap still answers
   with the value in cents, so the key grades it unchanged. US coins: penny 1¢, nickel 5¢, dime 10¢, quarter 25¢ (US Mint). Each coin has its
   own value, so exactly one tile is the coin worth the most, the one the lesson counts first; settle() checks it against the key. */
export const COIN_CENTS=Object.freeze({q:25,d:10,n:5,p:1}),COIN_NAME=Object.freeze({q:'quarter',d:'dime',n:'nickel',p:'penny'});
export function coinOptions(q){
 const pic=[].concat(q?.pic||[]).find(p=>p&&p.t==='coins'&&Array.isArray(p.coins));if(!pic||!/\bwhich coin\b/i.test(String(q.prompt||''))||!/^\d+$/.test(String(q.answer??'').trim()))return null;
 const kinds=[...new Set(pic.coins)].filter(k=>COIN_CENTS[k]);if(kinds.length<2)return null;
 const out=kinds.map(k=>({value:String(COIN_CENTS[k]),label:`${COIN_NAME[k]} (${COIN_CENTS[k]}¢)`}));if(out.filter(o=>accepts(o.value,q)).length!==1)return null;
 return out.sort((a,b)=>+b.value-+a.value);}
/* improve20-r21a-nov4 #6 (audit15 #15, shot 16: a Grade 4 check typed "1/2" for "Which is bigger: 1/6 or 1/2 of the same sandwich?" and "10/11"
   for "9/11 + 1/11"):
     - compareOptions: a two-way comparison ("Which is bigger|smaller|...: X ... or Y ...?") whose two sides start with a number is a tap
       with those two tiles, exactly as written in the prompt;
     - fractionTiles (Elementary): a fraction sum or difference with a fraction answer gets the answer and three common slips as tiles: the
       denominators added too ((a+c)/(b+d)), and the answer's numerator one either side. settle() keeps the set only when the key accepts
       exactly one tile, so an equivalent fraction can never be a second right one. The value graded is the tile's text; ids are untouched. */
const NUMLIKE=/^-?\d+(?:[.\/]\d+)?%?$/;
export function compareOptions(q){
 const m=/\b(?:which|what)(?: one)? is (?:bigger|smaller|larger|greater|less|more|longer|shorter|heavier|lighter|taller|wider)\b[^:?]*:\s*(\S+?)[,]?\s(?:.*?\s)?or\s+(\S+?)[,?]?(?:\s|$)/i.exec(String(q?.prompt||''));
 if(!m||!NUMLIKE.test(m[1])||!NUMLIKE.test(m[2])||m[1]===m[2])return null;return settle(q,[m[1],m[2]]);}
export function fractionTiles(q){
 const a=String(q?.answer??'').trim(),m=/(\d+)\/(\d+)\s*([+\-−])\s*(\d+)\/(\d+)/.exec(String(q?.prompt||''));const f=/^(\d+)\/(\d+)$/.exec(a);if(!m||!f)return null;
 const [x,b,op,y,d]=[+m[1],+m[2],m[3],+m[4],+m[5]],n=+f[1],den=+f[2],top=op==='+'?x+y:x-y;
 const opts=[a,top>0?`${top}/${b+d}`:null,`${n+1}/${den}`,n>1?`${n-1}/${den}`:`${n+2}/${den}`].filter(Boolean);return settle(q,opts);}
