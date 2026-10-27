// Middle School topic (Grade 7, CSTA 2-AP-10): three algorithms over a list. Every prompt says that positions
// start at 0, and every answer comes from running the algorithm on the list in its own question here. A
// linear search checks one item at a time from index 0 and stops at the first item equal to the target,
// giving its index, or "not found" after checking every item. A running variable starts at the first item
// and is replaced whenever a later item is bigger (or smaller), so it ends at the biggest (or smallest). A
// count starts at 0 and gains 1 on each pass whose test is true. The picture lists exactly the program the
// prompt describes. Found and not-found searches are kept close to half each.
const RULE='Positions start at 0 in this language.';
const lit=v=>typeof v==='number'?String(v):`"${v}"`;
const listLit=L=>`[${L.map(lit).join(', ')}]`;
const and=a=>a.length<2?a.join(''):`${a.slice(0,-1).join(', ')} and ${a.at(-1)}`;
const acc=v=>typeof v==='number'?[]:[`"${v}"`];
const prog=lines=>({t:'program',title:'Program',lines:lines.map((l,i)=>`${i+1}. ${l}`)});
const at=L=>L.map((v,i)=>`index ${i}: ${lit(v)}`).join(', ');
const lc=s=>s[0].toLowerCase()+s.slice(1);
/* Linear search. */
const search=(L,x)=>{const k=L.indexOf(x);return k<0?{give:'not found',checks:L.length}:{give:k,checks:k+1};};
const searchLines=(name,L,x)=>['function find(L, x):','    for i from 0 to length(L) - 1:','        if L[i] = x:','            return i','    return "not found"',`set ${name} to ${listLit(L)}`,`set where to find(${name}, ${lit(x)})`];
const searchWords=(name,L,x)=>`${RULE} ${name} is ${listLit(L)}. A linear search checks ${name} one item at a time from index 0 and stops at the first item equal to ${lit(x)}, giving its index, or "not found" if no item is equal.`;
const GIVE='What does the search give?',CHECKS='How many items does it check before it stops?';
const searchWhy=(L,x)=>{const k=L.indexOf(x);return k<0?`No item is ${lit(x)}, so the search checks all ${L.length} items and gives "not found".`:`It checks ${L.slice(0,k+1).map((v,i)=>`index ${i} (${lit(v)})`).join(', ')}, and index ${k} is the first item equal to ${lit(x)}: ${k+1} check${k?'s':''}, and it gives ${k}.`;};
/* A running biggest (high, >) or smallest (low, <). */
const runExtreme=(L,big)=>{let best=L[0],changes=0;const after=[];for(let i=1;i<L.length;i++){if(big?L[i]>best:L[i]<best){best=L[i];changes++;}after.push(best);}return {best,changes,after};};
const exName=big=>big?'high':'low';
const exLines=(name,L,big)=>{const v=exName(big);return [`set ${name} to ${listLit(L)}`,`set ${v} to ${name}[0]`,`for i from 1 to ${L.length-1}:`,`    if ${name}[i] ${big?'>':'<'} ${v}:`,`        set ${v} to ${name}[i]`];};
const exWords=(name,L,big)=>{const v=exName(big);return `${RULE} ${name} is ${listLit(L)}. A program sets ${v} to ${name}[0]. Then for i from 1 to ${L.length-1}: if ${name}[i] ${big?'>':'<'} ${v}, it sets ${v} to ${name}[i].`;};
const exTrace=(L,big)=>{const r=runExtreme(L,big);return `${exName(big)} starts at ${L[0]}, then after each pass: ${r.after.map((b,i)=>`i = ${i+1}: ${b}`).join(', ')}`;};
/* Counting the items that pass a test. */
const TESTS={gt:[k=>`> ${k}`,(v,k)=>v>k],lt:[k=>`< ${k}`,(v,k)=>v<k],ge:[k=>`≥ ${k}`,(v,k)=>v>=k],le:[k=>`≤ ${k}`,(v,k)=>v<=k],eq:[k=>`= ${lit(k)}`,(v,k)=>v===k],even:[()=>'is even',v=>v%2===0],odd:[()=>'is odd',v=>v%2===1],mult:[k=>`is a multiple of ${k}`,(v,k)=>v%k===0]};
const tcode=([kind,k])=>TESTS[kind][0](k);
const countRun=(L,T)=>{let c=0;return L.map(v=>(c+=TESTS[T[0]][1](v,T[1])?1:0));};
const countLines=(name,L,T)=>[`set ${name} to ${listLit(L)}`,'set count to 0',`for i from 0 to ${L.length-1}:`,`    if ${name}[i] ${tcode(T)}:`,'        add 1 to count'];
const countWords=(name,L,T)=>`${RULE} ${name} is ${listLit(L)}. A program sets count to 0. Then for i from 0 to ${L.length-1}: if ${name}[i] ${tcode(T)}, it adds 1 to count.`;
const passed=(L,T)=>L.filter(v=>TESTS[T[0]][1](v,T[1]));
/* The lists. Some hold an item twice, so the first match and repeated counts both come up. */
const NUMS=[
 ['scores',[12,7,30,24,18,9],[[24,99],[9,15]]],
 ['temps',[21,17,25,19,23,16],[[16,20],[25,18]]],
 ['heights',[140,152,147,160,138],[[147,150],[138,145]]],
 ['levels',[13,9,14,26,11,20,8],[[11,12],[8,10]]],
 ['coins',[5,12,5,30,8,12],[[12,6],[5,7]]],
 ['times',[48,35,52,35,41],[[35,40],[41,36]]],
 ['ages',[11,14,12,13,11,15],[[13,16],[11,10]]],
 ['laps',[3,8,6,9,2,7,5],[[2,4],[5,1]]],
 ['prices',[25,40,15,60,35],[[60,45],[40,30]]],
 ['depths',[70,45,90,30,85,55],[[30,50],[55,65]]],
 ['steps',[600,450,820,390,710],[[390,500],[450,700]]],
 ['marks',[18,20,15,20,17,12],[[20,19],[12,14]]]];
const WORDS=[
 ['pets',['cat','dog','fish','bird','frog'],['bird','owl','frog','hen']],
 ['colours',['red','blue','green','red','gold'],['red','pink','gold','grey']],
 ['fruits',['fig','mango','grape','lemon','plum'],['grape','pear','plum','kiwi']],
 ['tools',['saw','drill','rake','saw','axe'],['saw','hoe','axe','map']]];
/* The lesson's examples and the three Try-its (kept out of the pool). */
const PETS=['cat','dog','fish','bird','frog'],TEMPS=[21,17,25,19,23],SC=[12,7,30,24,18];
const TA=['gems',[4,9,2,9,7],9],TB=['weights',[15,22,9,30,12,8]],TC=['votes',[6,11,4,15,8,20],['even']];
const SKIP=new Set([`${searchWords(...TA)} ${CHECKS}`,`${exWords(...TB,false)} What is low just after the pass when i = 3?`,`${countWords(...TC)} What is count at the end?`]);
export default {
id:'cs-m-list-algorithms',subject:'cs',level:4,grade:7,standard:'CSTA 2-AP-10',
title:'Searching, finding the biggest and counting',
goal:'Run a linear search to find an item or report "not found", find the biggest or smallest item with a running variable, and count the items that pass a test.',
points:20,
skills:{search:'Linear search',extreme:'Biggest and smallest',count:'Counting matches'},
steps:[
 {skill:'search',say:'A linear search looks at a list one item at a time, starting at index 0, and stops at the first item that matches. find(pets, "fish") checks cat, then dog, then fish. Fish matches, so the search returns 2 after 3 checks.',eq:'checks index 0, 1, 2: returns 2',pic:prog(searchLines('pets',PETS,'fish'))},
 {skill:'search',say:'When nothing matches, the search must check every item before it can give "not found": searching these 5 pets for "owl" takes 5 checks. When an item appears twice, the search stops at the first one and never sees the second.',eq:'"owl": 5 checks, "not found"',pic:prog(searchLines('pets',PETS,'owl')),
  check:{prompt:`Try it: ${lc(searchWords(...TA))} ${CHECKS}`,answer:2,options:[2,4,1],hint:'Count the checks up to and including the first 9, starting at index 0.',pic:prog(searchLines(...TA))}},
 {skill:'extreme',say:'To find the biggest item, keep a running variable. high starts at the first item, and then each later item is compared with it: whenever an item is bigger than high, high becomes that item. At the end high holds the biggest item.',eq:'high = temps[0], then keep the bigger',pic:prog(exLines('temps',TEMPS,true))},
 {skill:'extreme',say:'Trace it pass by pass. high starts at 21, stays 21 at 17, becomes 25 at 25, and stays 25 at 19 and 23. Start the running variable at the first item, not at 0: a search for the smallest that starts at 0 would end at 0, which is not even in the list.',eq:'21, 21, 25, 25, 25',pic:{t:'setups',title:'Tracing high in [21, 17, 25, 19, 23]',head:'i',rows:[['temps[i]','17','25','19','23'],['high after','21','25','25','25']],cols:['1','2','3','4']},
  check:{prompt:`Try it: ${lc(exWords(...TB,false))} What is low just after the pass when i = 3?`,answer:9,options:[9,8,15],hint:'low starts at 15. Compare 22, then 9, then 30, and stop after the pass when i = 3.',pic:prog(exLines(...TB,false))}},
 {skill:'count',say:'To count the items that pass a test, start count at 0 and look at every item once. On each pass where the test is true, add 1; when it is false, count stays the same.',eq:'count = 0, then add 1 for each match',pic:prog(countLines('scores',SC,['gt',15]))},
 {skill:'count',say:'In [12, 7, 30, 24, 18] the test > 15 is true for 30, 24 and 18, so count ends at 3. Just after the pass when i = 2 it is only 1, because only 30 has passed so far.',eq:'12 no, 7 no, 30 yes, 24 yes, 18 yes: 3',pic:{t:'setups',title:'Counting scores > 15',head:'i',rows:[['scores[i]','12','7','30','24','18'],['> 15','no','no','yes','yes','yes'],['count after','0','0','1','2','3']],cols:['0','1','2','3','4']},
  check:{prompt:`Try it: ${lc(countWords(...TC))} What is count at the end?`,answer:4,options:[4,3,5],hint:'Test each vote: 6, 11, 4, 15, 8, 20. Count the even ones.',pic:prog(countLines(...TC))}}],
progression:{requires:['cs-m-lists-indexing','cs-m-loops-conditions'],operations:3,demand:'Step an index from 0, stop a search at the first match or report "not found", keep a running best through a pass, and count the passes whose test is true.'},
items(add){
 const done=new Set(SKIP),A=(skill,p,answer,pic,why,accept)=>{if(done.has(p))return;done.add(p);add(skill,p,answer,pic,why,accept);};
 /* Linear search: what it gives and how many items it checks, for items that are there and items that are not. */
 const S=(name,L,x,ask)=>{const r=search(L,x),p=`${searchWords(name,L,x)} ${ask}`,pic=prog(searchLines(name,L,x));
  if(ask===GIVE)A('search',p,r.give,pic,searchWhy(L,x),r.give==='not found'?['"not found"']:[]);else A('search',p,r.checks,pic,searchWhy(L,x));};
 NUMS.forEach(([name,L,[[x1,y1]]],li)=>{if(li%2){S(name,L,x1,GIVE);S(name,L,y1,CHECKS);}else{S(name,L,y1,GIVE);S(name,L,x1,CHECKS);}});
 NUMS.forEach(([name,L,[,[x2,y2]]],li)=>{if(li%3===0){S(name,L,x2,GIVE);S(name,L,y2,CHECKS);}});
 WORDS.forEach(([name,L,[a,b,c,d]])=>{S(name,L,a,GIVE);S(name,L,b,GIVE);S(name,L,c,CHECKS);S(name,L,d,CHECKS);});
 /* The biggest or smallest with a running variable: the value at the end, how often it is replaced, and its value after a chosen pass. */
 NUMS.forEach(([name,L],li)=>{const n=L.length;
  for(const [q,big] of [[0,li%2===0],[1,li%2===1],[2,li%2===0]]){const v=exName(big),r=runExtreme(L,big),pic=prog(exLines(name,L,big)),lead=exWords(name,L,big);
   if(q===0)A('extreme',`${lead} What is ${v} at the end?`,r.best,pic,`${exTrace(L,big)}. So ${v} ends at ${r.best}, the ${big?'biggest':'smallest'} item.`);
   else if(q===1)A('extreme',`${lead} How many times does the line "set ${v} to ${name}[i]" run?`,r.changes,pic,`${exTrace(L,big)}. ${v} is replaced ${r.changes} time${r.changes===1?'':'s'}, once for each item ${big?'bigger':'smaller'} than every item before it.`);
   else{const i=1+((li*2+1)%(n-2));A('extreme',`${lead} What is ${v} just after the pass when i = ${i}?`,r.after[i-1],pic,`${exTrace(L.slice(0,i+1),big)}. So just after the pass when i = ${i}, ${v} is ${r.after[i-1]}.`);}}});
 /* Counting the items that pass a test, at the end and just after a chosen pass. */
 const KINDS=[['gt'],['lt'],['even'],['ge'],['le'],['odd'],['mult'],['eq'],['gt'],['lt'],['mult'],['ge']];
 NUMS.forEach(([name,L],li)=>{const sorted=[...L].sort((a,b)=>a-b),n=L.length,mid=sorted[Math.floor(n/2)];
  const tests=[KINDS[li],KINDS[(li+4)%12],KINDS[(li+7)%12]].map(([kind])=>kind==='mult'?[kind,[3,5,4][li%3]]:kind==='eq'?[kind,L.find((v,i)=>L.indexOf(v)!==i)??L[1]]:kind==='even'||kind==='odd'?[kind]:[kind,kind==='gt'||kind==='ge'?mid:sorted[Math.floor(n/2)-1]]);
  tests.forEach((T,ti)=>{const run=countRun(L,T),pic=prog(countLines(name,L,T)),lead=countWords(name,L,T),hit=passed(L,T);
   if(ti<2)A('count',`${lead} What is count at the end?`,run.at(-1),pic,`The test ${name}[i] ${tcode(T)} is true for ${hit.length?and(hit):'no item'}, so count ends at ${run.at(-1)}.`);
   else{const i=1+((li+ti)%(n-2));A('count',`${lead} What is count just after the pass when i = ${i}?`,run[i],pic,`Up to index ${i} the items are ${L.slice(0,i+1).join(', ')}, and the test ${tcode(T)} is true for ${and(passed(L.slice(0,i+1),T))||'none of them'}: count is ${run[i]}.`);}});});
 WORDS.forEach(([name,L],wi)=>{const T=['eq',L[wi%2?0:3]],run=countRun(L,T),hit=passed(L,T);
  A('count',`${countWords(name,L,T)} What is count at the end?`,run.at(-1),prog(countLines(name,L,T)),`The test ${name}[i] = ${lit(T[1])} is true ${hit.length} time${hit.length===1?'':'s'} (${at(L)}), so count ends at ${run.at(-1)}.`);});
}
};
