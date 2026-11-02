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
 return wordChoicesFor(t,q)||namedOptions(q)||closedOptions(q)||(!numeric(q)&&youngFor(save,t)?tileChoices(q):null);}
