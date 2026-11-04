/* improve20-r20g-nov4 #3 (audit14 #16): a money answer was shown as the bare number it is stored as ("Not quite. The answer is 3.2", Try-it
   buttons "49.68" and "50"), where the question asks for dollars. Where an item is clearly money, its answer and its number options are
   shown as money: "$3.20". Clearly money means a number answer to a question whose last sentence asks for dollars ("in dollars", "how many
   dollars", "to the cent"), or, in a question that itself gives amounts in dollars ("$12.50"), asks "how much ..." or for a balance, total,
   price, cost, income or pay, and never a percent, a rate or a count of something else (hours, weeks, payments, items). Amounts show with
   cents ("$3.20", "$63.00") when the answer has cents or the question writes its own amounts with cents; whole-dollar questions keep whole
   dollars ("$8"), as their prompts do. Display only: the stored answer, grading ("3.2", "3.20" and "$3.20" all pass, game/math.js), ids,
   prompts and retirement are untouched. Pure. */
const ASK=s=>{const p=String(s||'').trim(),m=p.match(/[^.?!]*\?[^?]*$/);return (m?m[0]:p.split(/(?<=[.!?])\s+/).at(-1)||p).trim();};
const NOT_MONEY=/\bpercent|%|\brate\b|\bratio\b|\bhow many (?!dollars\b|more dollars\b)|\bhow long\b|\bhow much (?:time|longer|faster|further|farther|bigger|larger|taller|heavier|water|space|memory|energy)\b|\bin (?:billions|millions|thousands)\b|\bper cent\b|\bCPI\b|\bindex\b|\belasticity\b|\bprice level\b|\bmultiplier\b/i;
export function isMoneyItem(q){
 if(!q||typeof q!=='object')return false;const a=String(q.answer??'').trim();if(!(q.numeric||typeof q.answer==='number')||!/^-?\d+(?:\.\d{1,2})?$/.test(a))return false;
 const p=String(q.prompt||''),ask=ASK(p);
 if(/\b(?:in (?:whole )?dollars|how many (?:more )?dollars|to the (?:nearest )?cent)\b/i.test(ask))return !/\bin (?:billions|millions|thousands) of dollars\b|\bper cent\b|\bdollars? per\b|\belasticity\b|\bprice level\b|\bmultiplier\b/i.test(ask);
 if(!/\$\d/.test(p)||NOT_MONEY.test(ask))return false;
 return /^(?:[^,]*,\s*)?(?:how much\b|what (?:is|was|are|were) (?:the |your |its |their |his |her |this |that )?(?:new |final |starting |ending |total |weekly |monthly |yearly |annual )?(?:balance|total|price|cost|income|pay|profit|amount|fixed spending|spending|savings|budget|bill|fee|interest|change|goal)\b)/i.test(ask);
}
const cents=q=>/\$\d[\d,]*\.\d\d\b/.test(String(q?.prompt||''));
const group=s=>s.replace(/\B(?=(\d{3})+(?!\d))/g,',');
/* one amount as money, in the item's style */
export function moneyText(v,q){const n=Number(v);if(!Number.isFinite(n))return String(v);const neg=n<0,x=Math.abs(n),two=!Number.isInteger(Math.round(x*1e6)/1e6)||cents(q);
 const s=two?x.toFixed(2):String(Math.round(x));const [i,f]=s.split('.');return `${neg?'-':''}$${group(i)}${f?'.'+f:''}`;}
/* the answer as a child should see it: money for a money item, else exactly as stored */
export const shownAnswer=q=>isMoneyItem(q)?moneyText(q.answer,q):String(q?.answer??'');
/* a number option of a money item (a Try-it's or a choice's), shown as money; any other option is unchanged */
export const shownOption=(v,q)=>isMoneyItem(q)&&/^-?\d+(?:\.\d+)?$/.test(String(v).trim())?moneyText(v,q):String(v);
/* The explanation's closing amount, when it is the answer written bare at the very end ("4 / 2 = 2 dollars.", "... = 2.4 dollars.",
   "P = 32."), reads as money too ("4 / 2 = $2.", "= $2.40.", "P = $32."). Nothing else in the explanation changes, and an explanation whose
   last words are not the answer is shown as written. */
export function shownExplanation(q){const e=String(q?.explanation??'');if(!e||!isMoneyItem(q))return e;const a=String(q.answer).trim(),n=Number(a);
 const re=new RegExp(`(?<![\\d.$,\\w])(${a.replace(/[.\-]/g,'\\$&')}|${Number.isInteger(n)?n:n.toFixed(2)})(?: dollars?)?(\\s*[.)]?\\s*)$`);return e.replace(re,(m,x,tail)=>moneyText(n,q)+tail);}
