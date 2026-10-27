/* Placement items that need a calculation (26 Oct, docs/playtest/oct26-histplace/REPORT.md). The placement check for a
   non-math subject should test that subject, not a sum worked out on paper: "A fictional tax charges 10 percent on the first
   10,000 dollars... How much tax does a person with 40,000 dollars pay?" is arithmetic in a History check. needsCalc(q) reads
   the item itself (the question asked, its options and its answer), not just digits in the prompt: years and dates ("in
   1877"), counts named in a fact ("How many voting members does the House have?") and percentages quoted as facts are
   fine; reading a value off a table, counting things in a text or comparing two numbers is not a calculation. A calculation
   is adding, subtracting, multiplying, dividing, finding a percent, a rate, a share, a difference or a span the child has
   to work out to choose or type the answer. Tuned by hand against the Middle and High pools of every non-math subject
   (tools/placement-calc-scan.mjs prints hits and near-misses); items, ids and prompts are untouched. */
export {question as calcQuestion};
const UNIT='(kg|g|km|m|units?|items?|people|persons|residents|homes|households|voters|adults|respondents|cases|hectares|tons?|dollars|pounds|miles|seats|members|workers|soldiers|acres|bushels|goods|baskets|days|hours)\\b',YEAR=new RegExp(`\\b(c\\. ?)?((1[0-9]{3}|20[0-9]{2})(?!\\s+${UNIT})(?!\\s+(to|and)\\s+[\\d,]+\\s+${UNIT})|[1-9][0-9]{0,2} (BCE|CE|BC|AD))s?\\b`,'g');
/* where the multiple-choice options start: the last "A: " with a "B: " after it ("copied from account A: ..." is not one) */
const optAt=s=>{let at=-1;for(const m of s.matchAll(/(^|\s)A: /g))if(/\sB: /.test(s.slice(m.index+1)))at=m.index;return at;};
/* the multiple-choice options, if any */
const options=p=>{const s=String(p).replace(/\s*(Answer|Choose|Pick) [A-F](, [A-F])*,? or [A-F]\.?\s*$/,''),o=optAt(s);if(o<0)return [];return s.slice(o).trim().split(/[,;]?\s*\b[B-F]: /).map((x,i)=>i?x:x.replace(/^A: /,'')).map(x=>x.replace(/\.$/,'').trim());};
/* the question asked: the sentence ending in the last '?' before the options */
const question=p=>{let s=String(p).replace(/\s*(Answer|Choose|Pick) [A-F](, [A-F])*,? or [A-F]\.?\s*$/,'');const o=optAt(s);let head=o>=0?s.slice(0,o):s;const i=head.lastIndexOf('?');if(i>=0)head=head.slice(0,i+1);
 const parts=head.trim().split(/(?<=[.?!][”"’)]?)\s+(?=[A-Z0-9“"])/);return parts[parts.length-1]||head;};
const stemOf=p=>{const s=String(p),o=optAt(s);return o>=0?s.slice(0,o):s;};
const LABEL=/\b(Period|Unit|Article|Amendment|No\.|Proposition|Title|Section|Chapter|Book|Grade|Phase|Stage|Federalist)\s+\d+/gi;
const WORDS={two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90,hundred:100,thousand:1000};
const words=s=>String(s).replace(/(?<!-)\b[A-Za-z]+\b(?!-)(?!\s+[A-Z])/g,w=>WORDS[w.toLowerCase()]?' '+WORDS[w.toLowerCase()]+' ':w);
const nums=(s,w=true)=>((w?words:String)(String(s).replace(LABEL,' ').replace(YEAR,' ')).match(/\d[\d,]*(\.\d+)?/g)||[]).map(x=>+x.replace(/,/g,''));
/* reading, counting and comparing: not a calculation */
const READ=/\b(how many (independent |different )?(accounts|sources|of the (four |five )?(accounts|sources|listed events|atlas years|provinces|events))\b|how many links|how many (wet|dry) months|how many sites|which numbered rule|how many different rulers|how many provinces did|first appear|did it lose|is the entry largest|did the population fall\?|did (prices|the entries) fall\?|earliest year it could|latest year it could|did the overlap begin|did their reigns overlap:|how many (independent )?clauses|how many (words|syllables|sentences|reasons|lines|stanzas|paragraphs|beats|stressed)|most variety|sentences in the paragraph|how many times in\b|which line|where does the poem|citation|heading|rhyme|how many parents does|how many grandparents does|share the highest score|score\?|which (detail|province)|who won|which came first|which way is faster|surplus or a (trade )?deficit|quantitative or qualitative|which stage|what category|what number stands for|how many districts does|which hemispheres?|farther (north|south|east|west)|which (original )?(agglomeration )?qualifies)/i;
const CALC=/(\bpercent\b|percentage points?|\bhow (many|much)\b[^?]*\b(more|less|fewer|longer|shorter|sooner|later|earlier|older|younger|warmer|colder|higher|lower|apart|in all|altogether|left|remain|short|ahead|behind)\b|\bby how (many|much)\b|\btotal\b|\bdifference\b|\baverage\b|\bper (person|head|house|\d|year|day|hour|second|minute|km|capita)|\bper [\d,]+|\brate\b|\bratio\b|\btimes as\b|how many years (passed|did|does|was|were|is|are|after|before|between|long)|how many (days|hours|weeks|months|minutes|seconds|generations|ancestors|great-grandparents|great-great-grandparents)\b|how (long|far|old|high|big|deep|wide|fast)\b|what (year|hour|time)\b|what is (its|the) (balance|deficit|surplus|change|area|grade|gradient|speed|discharge|elevation|temperature|range|score|net)|\bdeficit\b|\bsurplus\b|\bbalance of trade\b|\brise or fall\b|\bgrow or shrink\b|majority of the (votes|seats)|for a majority|buy more|can [^?]*buy|rounded|in real terms|how many (votes|seats|senators|states|people|kilometres|km|metres|miles|degrees|cubic|crowns|dollars|units|soldiers|bales|carts|sacks|members|baptisms|houses|million|thousand|tons|acres|centimetres)|what (area|share)|which century|century (BCE|CE)|how many contour|grow by the most|rise fastest|most people per|most land|at least double|how many different years|how many years do|in \d+ money|how many of [^?]*ancestors|how many (millimetres|mm|centimetres|cm)\b|temperature range|gradient|\bgrade\b|below freezing|\bminus\b|natural (increase|decrease)|what day is it|\b(bids?|pays?|costs?|earns?) more\b|\bsteeper\b|(latitude|longitude) now|\blarger discharge\b|how (does|do) interaction [^?]*compare\b)/i;
const AVG=/\baverage\b/i,SPAN=/how many years|how long|overlap|\bspan\b|passed|separate/i;
const SHAREQ=/\b(what|which|its|the) share\b|\bshare (of|is)\b|\b(what is|how (many|much)|what happens)\b[^?]*\b(when|if)\b[^?]*\b(becomes?|falls?|rises?|grows?|doubles?|halves?|changes?|drops?|increases?|decreases?)\b|\bnet\b|\bper\b|percent|\brate\b|sav(e|ed|ing)\b|\bbuy\b|\bhow (do|does|did)\b[^?]*\bchange\b|\bthe change\b|\bchange in\b|difference|which comparison (is|of)|which statement is (true|accurate|correct)|what happens to|how (many|much) (more|less|fewer)|fall short|balance|deficit|surplus|(the|does|is) gap\b/i;
/* "Between 1100 and 1150, did its area grow or shrink?": reading when it only gained or only lost provinces */
function areaNeedsCalc(p){
 const m=String(p).match(/Between (\d+) and (\d+), did .* area grow or shrink\?/);if(!m)return null;
 const held=y=>new Set((String(p).match(new RegExp(`in ${y}, ([^;.]+)`))||['',''])[1].split(/, | and /));
 const a=held(m[1]),b=held(m[2]);return [...b].some(x=>!a.has(x))&&[...a].some(x=>!b.has(x));
}
/* "Which came first: the X or the Y?" over clues like "The school opened 7 years before the bridge was built": reading when the
   clues order X and Y directly or through a chain of befores and afters, a calculation when only the years settle it */
function orderNeedsCalc(p){
 const m=String(p).match(/Which came first: the (.+?) or the (.+?)\?/);if(!m)return null;
 const norm=c=>c.toLowerCase().replace(/^.*?\bthe /,'').replace(/ in \d+$/,'').replace(/[.,]$/,'').trim(),edges=[],nodes=new Set();
 for(const s of p.split(/(?<=\.)\s+/)){const r=s.match(/^(.*?)\s\d+ years? (before|after) (.*?)\.?$/);if(!r)continue;
  const L=norm(r[1]),R=norm(r[3]);nodes.add(L);nodes.add(R);edges.push(r[2]==='before'?[L,R]:[R,L]);}
 const score=(ph,c)=>ph.toLowerCase().split(' ').filter(w=>c.split(' ').some(x=>x.slice(0,4)===w.slice(0,4))).length;
 const pick=ph=>[...nodes].sort((x,y)=>score(ph,y)-score(ph,x))[0];
 const a=pick(m[1]),b=pick(m[2]);
 const reach=(f,t,seen=new Set())=>f===t||!seen.has(f)&&(seen.add(f),edges.some(([u,v])=>u===f&&reach(v,t,seen)));
 return !(reach(a,b)||reach(b,a));
}
/* rules a lesson states once and the question then applies: settling them needs a sum of the listed figures */
const SUMS=[[/yearly rainfall total is under/,/\bdry\b/],[/mm of rain in winter/,/\bzone\b/],[/Here winter is/,/season gets the most/],[/larger percent of its people/,/older population/]];
export function needsCalc(q){
 if(!q||typeof q.prompt!=='string')return false;if(memo.has(q))return memo.get(q);const r=calc(q);memo.set(q,r);return r;
}
const memo=new WeakMap();
function calc(q){
 const Q=question(q.prompt).replace(/“[^”]*”/g,'“”');
 for(const f of [orderNeedsCalc,areaNeedsCalc]){const r=f(q.prompt);if(r!==null)return r;}
 if(SUMS.some(([p,a])=>p.test(q.prompt)&&a.test(Q)))return true;if(READ.test(Q))return false;
 const opts=options(q.prompt);
 if(opts.length>=2){
  /* multiple choice: the stem gives numbers (or two dates for a span) and the right option is a new number worked out from them, or the question asks for a quantity */
  const stem=stemOf(q.prompt),given=nums(stem),span=SPAN.test(Q)&&(stem.match(YEAR)||[]).length>=2;
  if(!given.length&&!span)return AVG.test(Q)&&opts.every(o=>nums(o).length);
  const on=o=>nums(o,o.split(/\s+/).length<=3),all=new Set([...given,...opts.flatMap(on)]);if(all.size<2&&!span)return false;
  const right=opts['ABCDEF'.indexOf(String(q.answer).trim().toUpperCase())]||'';
  const rv=on(right);if(rv.length&&rv.every(v=>given.includes(v))&&!SHAREQ.test(Q))return false;
  const quantities=opts.filter(o=>on(o).length).length>=opts.length-1||/\d-point/.test(right);
  return (quantities&&rv.some(v=>!given.includes(v)))||SHAREQ.test(Q)||CALC.test(Q);
 }
 /* a typed number: worked out, unless the question only reads, counts or classifies */
 return q.numeric||CALC.test(Q);
}
