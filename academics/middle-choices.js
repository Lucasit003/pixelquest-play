/* improve20-r20o-nov4 #4 (R20O, a Grade 6-8 kid's first hour): Middle School questions whose answer is one of a few options the question
   itself names were still typing boxes ("Did the population grow or shrink during spring?", "does the word 'skinny' have a positive or a
   negative connotation?", "Which source was made the longest time after the event? Answer with its letter."). Elementary gets tiles for
   these (R9D, R20G); Middle typed them. These rules give Middle topics (grades 6-8) only the same kind of tap, from options the prompt
   itself names, never guessed:
     - pairOptions: the question's last clause names its choices as "X or Y" or "X, Y or Z" (one word each, an article or "as" before a
       choice and one shared word after both are allowed: "an independent clause or a dependent clause");
     - letterOptions: a one-letter answer when the prompt labels its sources, accounts or documents "Source A", "Account B"...;
     - setOptions: a season answer to a question that asks for a season, from the four seasons when the prompt names at least two of them, or a day
       of the week to a question that asks for a day, from the
       prompt's own days and the days either side of the answer. Months stay typed: a climograph names 12, and 4 of them would make
       "which month is wettest" a smaller question.
   Every set is checked against the answer key (game/math.js accepts: the answer, its alternatives and typo forgiveness): exactly one option
   may be accepted and there must be 2-4 options, or the question keeps its typing box. Numbers and open answers stay typed, as they do for an
   older Elementary player. A tap fills the same hidden input a typed answer would (ui/answer-choices.js tileFormHTML), so grading,
   retirement, mastery and ids are unchanged. Pure: no DOM, no save. */
import {accepts,choicesOf,/* improve26-r26b-nov6 #1 */acceptsExact} from '../game/math.js';

export const MIDDLE_TILE_MAX=4;
const h=s=>{let x=2166136261;for(const c of String(s)){x^=c.charCodeAt(0);x=Math.imul(x,16777619)>>>0;}return x;};
const low=v=>String(v??'').trim().toLowerCase();
const isMiddle=t=>!!t&&t.grade>=6&&t.grade<=8;
const numeric=q=>/^[-$]?\d[\d.,/]*%?$/.test(String(q?.answer??'').trim());
/* 2-4 different options, exactly one accepted: [{value,label}] in a fixed order from the item's id, or null */
function settle(q,opts,{keep=false,label=v=>v}={}){
 const seen=new Set(),out=[];for(const o of opts){const v=String(o??'').trim();if(!v||v.length>40||seen.has(low(v)))continue;seen.add(low(v));out.push(v);}
 if(out.length<2||out.length>MIDDLE_TILE_MAX||out.filter(v=>accepts(v,q)).length!==1/* improve26-r26b-nov6 #1: the accepted option is the key itself */||!out.some(v=>acceptsExact(v,q)))return null;
 const list=keep?out:out.sort((x,y)=>h(q.id+'|'+low(x))-h(q.id+'|'+low(y)));return list.map(v=>({value:v,label:label(v)}));}
/* the question's last sentence (after the last ". " / ": " that ends a sentence before it) */
const lastAsk=p=>{const s=String(p||'').trim();if(!/\?\s*$/.test(s))return '';/* quoted sentences are the material, not the choices */const b=s.replace(/\?\s*$/,'').replace(/["“][^"“”]*["”]/g,'"…"');const cut=Math.max(b.lastIndexOf('. '),b.lastIndexOf('! '),b.lastIndexOf('? '));return b.slice(cut+1).trim();};
const W="[A-Za-z][A-Za-z’'-]*",ART='(?:(?:as )?(?:a|an|the) |as )?';
const PAIR=new RegExp(`(?:^|[\\s:(“"])((?:${W}, )*)${ART}(${W})( ${W})? or ${ART}(${W})(?:( ${W}))?(?=$|[\\s,?.”"])`,'gi');
export function pairOptions(q){
 const ask=lastAsk(q?.prompt);if(!ask)return null;let m,found=null;PAIR.lastIndex=0;
 while((m=PAIR.exec(ask))){const shared=(m[3]||'').trim(),after=(m[5]||'').trim();
  /* "X N or Y N": one shared word after both; "X or Y N" with no word after X is the plain pair */
  if(shared&&low(shared)!==low(after)){PAIR.lastIndex=m.index+1;continue;}
  const list=[...(m[1]?m[1].split(', ').filter(Boolean):[]),m[2],m[4]];const r=settle(q,list,{keep:true});if(r){found=r;break;}PAIR.lastIndex=m.index+1;}
 return found;}
const LETTER=/\b(Source|Account|Document|Record|Letter|Map|Witness)\s+([A-F])\b/g;
export function letterOptions(q){
 const a=String(q?.answer??'').trim();if(!/^[A-F]$/.test(a))return null;const p=String(q?.prompt||''),got=new Map();let m;LETTER.lastIndex=0;
 while((m=LETTER.exec(p)))if(!got.has(m[2]))got.set(m[2],m[1]);if(!got.has(a))return null;
 const letters=[...got.keys()].sort();if(letters.length>MIDDLE_TILE_MAX){/* the answer and the three letters nearest it */const i=letters.indexOf(a);letters.splice(0,Math.max(0,Math.min(i-1,letters.length-MIDDLE_TILE_MAX)));letters.length=Math.min(letters.length,MIDDLE_TILE_MAX);}
 return settle(q,letters,{keep:true,label:v=>`${got.get(v)} ${v}`});}
export const SEASONS=Object.freeze(['spring','summer','autumn','winter']);
export const DAYS=Object.freeze(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
const named=(p,set)=>set.filter(x=>new RegExp(`\\b${x}\\b`,'i').test(p));
export function setOptions(q){
 const a=low(q?.answer),p=String(q?.prompt||''),ask=lastAsk(p);
 /* only a question that asks for a season or a day ("After which word..." with the answer "spring" asks for a word) */
 for(const set of [SEASONS]){const i=set.findIndex(x=>low(x)===a);if(i<0||!/\bseasons?\b/i.test(ask))continue;const here=named(p,set);if(here.length<2||!here.some(x=>low(x)===a))return null;
  /* all four seasons, in calendar order */
  return settle(q,set,{keep:true});}
 const d=DAYS.findIndex(x=>low(x)===a);if(d<0||!/\bday\b/i.test(ask))return null;
 const near=[DAYS[(d+6)%7],DAYS[(d+1)%7]],pick=new Set([DAYS[d],...named(p,DAYS),...near]);const list=DAYS.filter(x=>pick.has(x));
 /* keep the answer, the prompt's days and the days either side, at most 4 in week order */
 const keep=list.length<=MIDDLE_TILE_MAX?list:DAYS.filter(x=>x===DAYS[d]||near.includes(x)||named(p,DAYS).slice(0,1).includes(x)).slice(0,MIDDLE_TILE_MAX);
 return settle(q,keep,{keep:true});}
/* The tap tiles for a Middle School question ([{value,label}]), or null (a choice question keeps choiceFormHTML's buttons; else typing) */
export function middleTiles(t,q){
 if(!isMiddle(t)||!q||choicesOf(q)||numeric(q))return null;
 return pairOptions(q)||letterOptions(q)||setOptions(q);}
