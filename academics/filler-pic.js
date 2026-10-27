/* Filler question pictures (26 Oct leftovers, docs/playtest/oct26-leftovers/REPORT.md). Some lesson items carry a picture
   that teaches nothing: a board under a unit title saying only "Read the question and compare the choices", or a board or
   "Read and decide" card that re-types the question already printed below it, or a card holding only a word from the prompt. In a quiz, practice, test, exam review or
   placement it only costs screen space, so shownPic(q) gives no picture for it. Pictures that carry information are kept:
   maps, charts, plots, timelines, sources, figures, data boards, worked boards (non-empty why) and method cards.
   Pictures are not part of a question's id (ids hash the prompt only), so nothing here changes an id. */
/* Lines that are only instructions about reading the question; none says anything about the item. */
export const FILLER_LINES=Object.freeze([
 'Read the question and compare the choices','Choose the answer the historical evidence supports',
 'Choose the answer the document, case or principle supports','Choose the answer the definition, data or principle supports',
 'Read the context and compare the choices','Choose the claim the evidence supports','Which claim does the evidence support?',
 'Read the setting and identify the historical claim','Use the evidence to compare the choices',
 'Identify the setting and the historical relationship','Compare the evidence with each proposed claim',
 'Read the account terms and the stated facts.','Read what each choice actually covers.','Compare all three choices before deciding.',
 'Compare all three choices.','Read both choices.','Which claim follows from the facts?','Identify the loan feature.','Compare the two claims.',
 'Use the scenario in the question.','Use the information in the question.','Read the study and compare the claims.',
 'Define the event or variable','Check what is given','Choose the justified conclusion']);
/* Card titles that only say "read this": a passages card under one of them that re-types the question is filler. A passages card
   under any other title is a source (a quoted poem, a speech, a fictional passage) and is always kept. */
export const RETYPE_TITLES=Object.freeze(['Read and decide','Read the sentence and the task']),WORD_TITLES=Object.freeze(['Read it','Choose one']);
const FILL=new Set(FILLER_LINES),norm=s=>String(s).toLowerCase().replace(/[“”"‘’'`]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
/* One picture part: is it filler for this question? */
export function fillerPart(q,p){
 if(!p||typeof p!=='object')return false;
 const lines=p.t==='board'?p.lines:p.t==='passages'?p.texts:null;
 if(!Array.isArray(lines)||!lines.length||lines.some(l=>typeof l!=='string'))return false;
 if(Array.isArray(p.why)&&p.why.some(Boolean))return false;
 if(p.t==='board'&&lines.every(l=>FILL.has(l.trim())))return true;
 /* a card holding only a word or two from the prompt ("Read it: Beach" for "A beach is what kind of feature?"): an almost empty box,
    and on a phone an empty-looking thumbnail. A sentence under study (four words or more, or a blank to fill) and a quoted source ("Et tu, Brute?") are kept. */
 {const P=' '+norm(q?.prompt)+' ',words=norm(lines.join(' ')).split(' ').filter(Boolean);
  if(p.t==='passages'&&WORD_TITLES.includes(p.title)&&words.length&&words.length<=3&&!lines.some(l=>l.includes('_'))&&lines.every(l=>P.includes(' '+norm(l)+' ')))return true;}
 /* the question re-typed: every word of the card, in order, is in the prompt, and the card holds the question itself */
 if(p.t==='passages'&&!RETYPE_TITLES.includes(p.title))return false;
 const raw=lines.join(' '),j=norm(raw);return !!j&&raw.includes('?')&&(' '+norm(q?.prompt)+' ').includes(' '+j+' ');
}
export const isFiller=(q,pic=q?.pic)=>!!pic&&[].concat(pic).filter(Boolean).length>0&&[].concat(pic).filter(Boolean).every(p=>fillerPart(q,p));
/* The picture a question shows when it is asked (quiz, practice, test, review, exam, Seal, placement). */
export function shownPic(q,pic=q?.pic){
 if(!pic)return null;if(!Array.isArray(pic))return fillerPart(q,pic)?null:pic;
 const kept=pic.filter(p=>p&&!fillerPart(q,p));return kept.length===pic.filter(Boolean).length?pic:kept.length?kept:null;
}
