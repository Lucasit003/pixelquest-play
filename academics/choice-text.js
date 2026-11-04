/* improve20-m-nov1 (audit3 #12 and #14): choice questions print their options inside the prompt ("... A: The key had been found by Rosa. |
   B: ... | C: ... Answer A, B or C.") and a Try-it could give buttons that say only "A", "B", "C". The options are shown once, on the
   buttons, and the prompt is shown as its question only, rendered around the stored text: a question's id hashes its prompt, so the
   prompt itself is never changed (the "Read to me" button still reads it whole). Pure: no DOM, no save.
   - optionTexts(prompt,letters): the text after each letter marker ("A: ...", "A, ...", 'A "..."'), or null (game/math.js markers).
   - questionStem(prompt,letters): the prompt without its inline options or its "Answer A, B or C." line; the prompt when nothing parses.
   - letterButtons(check): Try-it buttons for letter options: {letter,label} in letter order, with the option text, or the thing the
     letter names in the prompt ("Tray A", "Block B"), or a reviewed label from TRYIT_LABELS. */
import {markers,letterTexts,choicesOf} from '../game/math.js';

const LETTERS=/^[A-F]$/;
export const isLetter=v=>LETTERS.test(String(v).trim());
/* "A: ..., B: ..., C: ..." markers, taken from the LAST "A:" whose B:, C: ... follow in order, so a prompt that names "Text A, ..." in its
   passage before its options still finds the options; otherwise game/math.js markers (also "A, ..." and 'A "..."'). */
function colonAt(p,letters){
 const at=re=>[...p.matchAll(re)].map(m=>[m.index+m[0].indexOf(letters[0]),m.index+m[0].length]);
 for(const [s0,e0] of at(new RegExp(`(?:^|[\\s(|;,])${letters[0]}:\\s+`,'g')).reverse()){
  const out=[[s0,e0]];let from=e0,ok=true;
  for(const L of letters.slice(1)){const m=new RegExp(`(?:^|[\\s(|;,])${L}:\\s+`).exec(p.slice(from));if(!m){ok=false;break;}const s=from+m.index+m[0].indexOf(L);out.push([s,from+m.index+m[0].length]);from=from+m.index+m[0].length;}
  if(ok)return out;}
 return null;
}
const lastPiece=rest=>rest.split(/(?<=[.?!])(?<!\b(?:Mr|Mrs|Ms|Dr|St|Mt|Jr|Sr|Prof|Gen|Gov|Capt|Lt|Col|Sgt|vs|etc|approx|No|U\.S|e\.g|i\.e|a\.m|p\.m)\.)\s+(?=[A-Z(])|(?<=(?<!\.)[.?!]["”’])\s+(?=(?:Which|What|Who|Whom|Whose|Why|How|Where|When)\b)|\s+(?=(?:Answer|Type|Choose|Pick|Select)\b)/)[0];
const clean=x=>x.replace(/[\s,;|]*(?:\bor)?[\s,;|]*$/,'').replace(/[.?!;:,\s]+$/,'').trim();
function parse(prompt,letters){
 const p=String(prompt||'');if(!letters?.length)return null;
 const c=colonAt(p,letters);
 if(c){const texts=c.map(([,e],i)=>clean(i+1<c.length?p.slice(e,c[i+1][0]):lastPiece(p.slice(e))));if(texts.every(x=>x&&x.length<=160))return {at:c,texts};}
 const texts=letterTexts(p,letters),at=texts&&markers(p,letters);return at?{at,texts}:null;
}
export const optionTexts=(prompt,letters)=>parse(prompt,letters)?.texts||null;
/* "Answer A, B or C." and its kin, at the end or before a closing remark */
const ASK=/\s*\(?(?:answer|type|choose|pick|select|reply|circle)\b:?\s+(?:(?:[A-F1-8]|one)\s*,\s*)*[A-F1-8]\s+or\s+[A-F1-8]\s*[.?!)]*\s*/gi;/* improve20-r20i-nov4 #5: and "Answer 1 or 2." */
const tidy=s=>s.replace(/\s+([?.!,;:])/g,'$1').replace(/[\s:;,|–—-]+([?.!])(?=\s|$)/g,'$1').replace(/[\s:;,|–—-]+$/,'').replace(/^[\s.;:,|]+/,'').replace(/\s{2,}/g,' ').trim();
export function questionStem(prompt,letters){
 const p=String(prompt||''),r=parse(p,letters);if(!r)return p;const at=r.at;
 /* the last option ends where its text ends: at the next sentence, or before "Answer ..." */
 const lastStart=at[at.length-1][1],piece=lastPiece(p.slice(lastStart));
 let before=p.slice(0,at[0][0]),after=p.slice(lastStart+piece.length);
 /* the last option's own closing mark (a "?" ending the question) stays with the question */
 const close=/[?]["”’)]*\s*$/.exec(piece);if(close&&!/[?]/.test(before.slice(-2)))after=close[0].trim()+' '+after;
 const stem=tidy((before+' '+after).replace(ASK,' '));
 return stem.length>=8?stem:p;
}
/* The question shown above choice buttons: the stem when every button carries its option's text, else the prompt as stored. */
/* improve20-r20i-nov4 #5 (kidsim5 #20: context-clue buttons said only "1" and "2", the options inside the prompt): numbered options ("1: the season
   after winter. 2: a coiled piece of metal. Answer 1 or 2.") give their text to the buttons, as letterButtons does for A/B, and the prompt shows its stem.
   Values 1..n in order only; null when the texts do not parse. Labels only: the value graded stays the number and the stored prompt is untouched. */
export function numberTexts(q){const c=choicesOf(q);if(!c||c.length<2||!c.every((x,i)=>String(x.value).trim()===String(i+1)&&String(x.label).trim()===String(i+1)))return null;const t=optionTexts(q.prompt,c.map(x=>String(x.value).trim()));return t&&t.length===c.length&&t.every(x=>x&&x.length<=160)?t:null;}
export function shownPrompt(q){
 {const nt=numberTexts(q);if(nt){const st=questionStem(q.prompt,nt.map((_,i)=>String(i+1)));return st;}}
 const c=choicesOf(q);if(!c||!c.every(x=>x.text)||!c.every(x=>isLetter(x.value)))return String(q?.prompt||'');
 return questionStem(q.prompt,c.map(x=>x.value));
}
/* Try-its whose letters name nothing the prompt spells out: labels reviewed by eye (display only; the graded value is the letter). */
export const TRYIT_LABELS=Object.freeze({
 /* the step's card shows the two speakers' claims in boxes A and B */
 'language-e-compare-viewpoints#3':Object.freeze({A:'Speaker A',B:'Speaker B'}),
});
/* the word before each letter, when it is the same word for every letter ("Tray A ... tray B" -> Tray A, Tray B) */
function namedThings(prompt,letters){
 const p=String(prompt||''),words=letters.map(L=>{const m=[...p.matchAll(new RegExp(`\\b([A-Za-z]{3,})\\s+${L}\\b(?![’'][a-z])`,'g'))].map(x=>x[1]);return m;});
 const pick=words[0].find(w=>words.every(ws=>ws.some(x=>x.toLowerCase()===w.toLowerCase()))&&!/^(answer|choose|pick|type|select|and|or|than|between|is|was|from|to|of|the|option|options)$/i.test(w));
 if(!pick)return null;const W=pick[0].toUpperCase()+pick.slice(1).toLowerCase();return letters.map(L=>`${W} ${L}`);
}
/* improve20-y-nov1 #8 (lane M's note): quiz (not Try-it) buttons for "Shop A ... Shop B: A or B?" said bare "A" and "B". The same rule
   names them ("Shop A", "Shop B"); a prompt that names nothing before its letters but asks "Which slope ...: A or B?" gives "Slope A".
   Labels only: the graded value stays the letter and the prompt is untouched. null when nothing names them. */
const NOT_A_THING=/^(has|have|had|is|are|was|were|does|do|did|of|one|ones|letter|the|option|options|answer|choice|choices|sentence|statement|claim|line|text|version|can|will|would|could|should)$/i;
export function letterNames(prompt,letters){
 const p=String(prompt||'');if(!letters?.length||!letters.every(isLetter))return null;const named=namedThings(p,letters);if(named)return named;
 const m=new RegExp(`\\bwhich\\s+([a-z]{3,})\\b[^?:]*:?\\s*${letters.slice(0,-1).join('\\s*,\\s*')}\\s*,?\\s+or\\s+${letters[letters.length-1]}\\s*\\?\\s*$`,'i').exec(p);
 if(!m||NOT_A_THING.test(m[1]))return null;const W=m[1][0].toUpperCase()+m[1].slice(1).toLowerCase();return letters.map(L=>`${W} ${L}`);
}
export function letterButtons(check,id=''){
 const opts=(check?.options||[]).map(String);if(!opts.length||!opts.every(isLetter))return null;
 const letters=[...opts].sort(),texts=optionTexts(check.prompt,letters),named=texts?null:namedThings(check.prompt,letters),own=TRYIT_LABELS[id];
 return letters.map((L,i)=>({letter:L,label:own?.[L]?own[L]:texts?`${L}: ${texts[i]}`:named?named[i]:L,stem:!own&&!!texts}));
}
/* "Code: x = 6 | print(x) What is printed?": the CS lessons store a program's lines joined by " | " (their L(...) helper), so the prompt
   showed raw bars. codeParts splits it into the lines and the question after them (the first capitalised word outside quotes and
   brackets on the last line); promptHTML shows the lines as a code block. Display only, like questionStem. */
export function codeParts(text){
 const p=String(text||''),m=/^((?:Try it:\s*)?[^|]{0,40}?Code:)\s+/.exec(p);if(!m||!p.includes(' | '))return null;
 const segs=p.slice(m[0].length).split(' | '),last=segs.pop();let q=-1,dq=0,sq=0,par=0;
 for(let i=0;i<last.length;i++){const ch=last[i];
  if(ch==='"'&&!sq)dq^=1;else if(ch==="'"&&!dq&&(sq||!/[a-z0-9]/i.test(last[i-1]||'')))sq^=1;
  else if(!dq&&!sq){if('([{'.includes(ch))par++;else if(')]}'.includes(ch))par--;else if(ch===' '&&par<=0&&/^[A-Z][a-z]+\b/.test(last.slice(i+1))){q=i;break;}}}
 return {head:m[1],lines:[...segs,q<0?last:last.slice(0,q)],ask:q<0?'':last.slice(q+1).trim()};
}
const H=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function promptHTML(text){
 const r=codeParts(text);if(!r)return H(text);
 return `${H(r.head)}<span class="q-code">${r.lines.map(l=>`<code>${H(l)}</code>`).join('')}</span>${r.ask?`<span class="q-code-ask">${H(r.ask)}</span>`:''}`;
}
/* a question as shown above its choices: the stem when the buttons carry the options, code lines as a block, every character escaped */
/* improve20-r21a-nov4 #7 (audit15 #19): a shown multiplication reads "4 × 8", not "4 x 8" (display only: the stored prompt, its id and its narration are unchanged) */
export const timesSign=t=>String(t??'').replace(/(\d)\s?x\s?(?=\d)/g,'$1 × ');
export const questionHTML=q=>promptHTML(timesSign(shownPrompt(q)));
