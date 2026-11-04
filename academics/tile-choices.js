/* kidfix-c-oct31 (kid-appeal playtest, problem 2: "This is homework"): tap instead of type for young players.
   A question whose answer is one short word or number can be answered by tapping one of 3-4 tiles when the child said
   Grade 2 or 3 at the title (s.schoolGrade), or said nothing / "Not sure" and the topic is a Grade 2-3 rung.
   Distractors come only from rules that are clearly correct, never from a guess:
     - numbers: off by one, and off by ten from 10 up (a counting slip, a regrouping slip); a "which digit" question offers
     digits only, a "which one / keeps the bigger" question offers the other number it names first, and a binary numeral
     answer keeps its typed box;
     - plurals (language-e-plurals): the singular, and for -es words the -s ending (peach -> peachs), for -s words the
     apostrophe slip (frog -> frog's);
     - compass: the other three of north, south, east and west, when the answer is one of them;
     - "What comes next: a, b, a, ___": the other members of the listed pattern.
   Every distractor is then checked against the answer key (accepts: the answer and its alternatives) and dropped if
   it would be marked right. With fewer than two left, the question keeps its typed box. A tapped tile fills the same
   hidden input a typed answer would, so it is graded by the same code: nothing new for XP, retirement or mastery. */
import {accepts,choicesOf} from '../game/math.js';
import {rungOf} from './lessons.js';
/* improve20-r20m-nov4 #4 */import {isMoneyItem} from './money-shown.js';

export const TILE_MAX=4;
const CARDINAL=['north','south','east','west'];
const SHORT=/^(?:[A-Za-z]{1,12}|\d{1,4})$/;

/* Young: the stated grade is 2 or 3; with no stated grade (null or 0 "Not sure"), an Elementary topic on the Grade 2-3 rungs. */
export function youngFor(save,t){const g=save?.schoolGrade;if(g===2||g===3)return true;if(g>=4)return false;return !!t&&t.grade<6&&rungOf(t)<=3;}

function candidates(q){
 const a=String(q.answer??'').trim(),p=String(q.prompt||'');
 if(/^\d{1,4}$/.test(a)){const n=+a;
  /* a binary numeral is not a counting answer: off-by-one decimals would not even be binary */
  if(/binary/i.test(p)&&/^[01]+$/.test(a))return [];
  /* "which digit": only digits; "which one / keeps the bigger / costs less": the other number named in the question first */
  if(/\bdigit\b/i.test(p))return [n-1,n+1,n+2,n-2].filter(x=>x>=0&&x<=9).map(String);
  const named=/\bwhich\b|\bkeeps?\b|\bcheaper\b/i.test(p)?(p.match(/\d+/g)||[]).filter(x=>x!==a):[];
  return [...named,n-1,n+1,...(n>=10?[n+10,n-10]:[n+2])].filter(x=>+x>=0).map(String);}
 const pic=q.pic&&!Array.isArray(q.pic)?q.pic:null;
 if(q.topic==='language-e-plurals'&&pic?.t==='word'&&typeof pic.base==='string'&&(pic.suffix==='s'||pic.suffix==='es')&&a===pic.base+pic.suffix){
  const w=pic.base,out=[w];
  if(pic.suffix==='es'&&!/s$/.test(w))out.push(w+'s');
  /* review (31 Oct): base+'es' on an -s word is often a real word (cares, hates, stares, and one unsuitable for children), so an
     -s plural offers the apostrophe slip instead (cat's), the commonest plural mistake, which is never another plural */
  if(pic.suffix==='s')out.push(w+"'s");
  return out;}
 if(CARDINAL.includes(a.toLowerCase())&&/\bdirection\b|\bopposite\b/i.test(p))return CARDINAL.filter(d=>d!==a.toLowerCase());
 const m=/what comes next:\s*([^?]*?),\s*_{2,}/i.exec(p);
 if(m){const seq=m[1].split(',').map(x=>x.trim()).filter(Boolean);return [...new Set(seq)];}
 return [];
}

const key=v=>String(v).trim().toLowerCase();
const h=s=>{let x=2166136261;for(const c of String(s)){x^=c.charCodeAt(0);x=Math.imul(x,16777619)>>>0;}return x;};

/* improve20-r20m-nov4 #4 (R20G open: the sales-tax tiles offered "$0.00" from the off-by-one rule): a money amount of tax that is not zero never
   offers zero as a wrong tile (no tax on a priced item is never a sensible slip); the tiles still keep exactly one accepted option */
export const noZeroTax=q=>Number(String(q?.answer??'').trim())>0&&/\btax(?:es)?\b/i.test(String(q?.prompt||''))&&isMoneyItem(q);
/* [{value,label}] (answer included, 3-4 tiles) or null. Numbers in order; words in a fixed order from the item's id, so the
   answer is not always first and a retake shows the same tiles. */
export function tileChoices(q){
 if(!q||choicesOf(q))return null;const a=String(q.answer??'').trim();if(!SHORT.test(a))return null;
 const seen=new Set([key(a)]),d=[],nz=noZeroTax(q);
 for(const c of candidates(q)){const k=key(c);if(!c||nz&&Number(c)===0||seen.has(k)||!(SHORT.test(c)||/^[A-Za-z]{1,12}'s$/.test(c))||accepts(c,q))continue;seen.add(k);d.push(c);if(d.length>=TILE_MAX-1)break;}
 if(d.length<2)return null;
 const all=[a,...d];
 if(/^\d+$/.test(a))all.sort((x,y)=>x-y);else all.sort((x,y)=>h(q.id+'|'+x)-h(q.id+'|'+y));
 return all.map(v=>({value:v,label:v}));
}
