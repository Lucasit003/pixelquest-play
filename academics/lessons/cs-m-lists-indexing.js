// Middle School topic (Grade 6, CSTA 2-AP-11): lists and zero-based indexes. Every prompt says that positions
// start at 0 in this language, and every answer is read from the list after actually running the lines in the
// question here: L[k] is the item k places after the first, length(L) counts the items, the last index is one
// less than the length, append adds an item at the end, and removing the item at an index slides every later
// item down one place. Every list holds different items, so "at which index" has one answer. The picture
// lists exactly the code the prompt describes.
const RULE='Positions start at 0 in this language.';
const LISTS=[
 ['pets',['cat','dog','fish','bird','frog'],'owl'],
 ['colours',['red','blue','green','pink','gold'],'grey'],
 ['fruits',['apple','mango','grape','lemon'],'pear'],
 ['tools',['saw','drill','rake','spade','axe'],'hoe'],
 ['pack',['sword','map','rope','lamp','key'],'torch'],
 ['towns',['Oakhaven','Ashby','Fenwick','Dale'],'Elmwood'],
 ['scores',[12,7,30,24,18],15],
 ['temps',[21,17,25,19,23,16],20],
 ['heights',[140,152,147,160],155],
 ['levels',[13,9,14,26,11,20,8],17]];
const lit=v=>typeof v==='number'?String(v):`"${v}"`;
const listLit=L=>`[${L.map(lit).join(', ')}]`;
const acc=v=>typeof v==='number'?[]:[`"${v}"`];
const setLine=(name,L)=>`set ${name} to ${listLit(L)}`;
const opLine=(name,[op,x])=>op==='append'?`append ${lit(x)} to ${name}`:`remove the item at index ${x} from ${name}`;
/* Run a list of operations on a copy; a remove at an index that does not exist is a bug in the generator. */
const runOps=(L,ops)=>ops.reduce((cur,[op,x])=>{if(op==='append')return [...cur,x];if(!(x>=0&&x<cur.length))throw new Error(`no index ${x}`);return cur.filter((_,i)=>i!==x);},L);
const prog=(name,L,ops=[])=>({t:'program',title:'Program',lines:[`1. ${setLine(name,L)}`,...ops.map((o,i)=>`${i+2}. ${opLine(name,o)}`)]});
const table=(name,L,title)=>({t:'setups',title,head:'index',rows:[[name,...L.map(String)]],cols:L.map((_,i)=>String(i))});
const at=L=>L.map((v,i)=>`${i}: ${v}`).join(', ');
const PETS=['cat','dog','fish','bird'];
const TA=['colours',['red','blue','green','yellow']],TB=['scores',[14,9,27,3,18,11]],TC=['fruits',['fig','lime','pear','plum'],[['remove',0],['append','kiwi']]];
export default {
id:'cs-m-lists-indexing',subject:'cs',level:4,grade:6,standard:'CSTA 2-AP-11',
title:'Lists and indexes',
goal:'Find an item by its index when positions start at 0, use a list\'s length and last index, and track a list as items are appended and removed.',
points:20,
skills:{index:'Reading by index',length:'Length and last index',change:'Appending and removing'},
steps:[
 {skill:'index',say:'Positions start at 0 in this language. The first item of a list is at index 0, the next at index 1, and so on. pets[2] means the item at index 2, which is the third item: fish.',eq:'pets[2] = "fish"',pic:table('pets',PETS,'pets = ["cat", "dog", "fish", "bird"]')},
 {skill:'index',say:'It works the other way too: dog is at index 1, not 2. Counting from 0 makes every index one less than the item\'s place in the line, so the second item has index 1.',eq:'"dog" is at index 1',pic:table('pets',PETS,'pets = ["cat", "dog", "fish", "bird"]'),
  check:{prompt:`Try it: ${RULE.toLowerCase()} ${TA[0]} is ${listLit(TA[1])}. What is ${TA[0]}[1]?`,answer:'blue',options:['blue','red','green'],hint:'Index 0 is the first item, so index 1 is the second.',pic:prog(...TA)}},
 {skill:'length',say:'length(pets) counts the items, and pets holds 4. Because the first index is 0, the last index is always one less than the length: 3.',eq:'last index = length - 1 = 4 - 1 = 3',pic:table('pets',PETS,'length(pets) = 4')},
 {skill:'length',say:'So pets[length(pets) - 1] is always the last item, however long the list is. Asking for pets[4] in a list of length 4 is an error, because there is no index 4.',eq:'pets[length(pets) - 1] = pets[3] = "bird"',pic:table('pets',PETS,'The last index is 3'),
  check:{prompt:`Try it: ${RULE.toLowerCase()} ${TB[0]} is ${listLit(TB[1])}. What is the last index of ${TB[0]}?`,answer:5,options:[5,6,4],hint:'Count the items, then take away 1 because the first index is 0.',pic:prog(...TB)}},
 {skill:'change',say:'append adds an item at the end: the length grows by 1 and nothing else moves. Removing the item at index 1 takes dog out, and every item after it slides down one index.',eq:'"fish" moves from index 2 to index 1',pic:{t:'setups',title:'One list, line by line',head:'index',rows:[['start','cat','dog','fish','bird',''],['append "frog"','cat','dog','fish','bird','frog'],['remove index 1','cat','fish','bird','frog','']],cols:['0','1','2','3','4']}},
 {skill:'change',say:'Trace the list one line at a time and rewrite the indexes after every remove. An index always means a place in the list as it is now, not where an item started.',pic:prog(TC[0],TC[1],TC[2]),
  check:{prompt:`Try it: ${RULE.toLowerCase()} A program runs: ${[setLine(TC[0],TC[1]),...TC[2].map(o=>opLine(TC[0],o))].join('; ')}. What is ${TC[0]}[2] now?`,answer:'plum',options:['plum','pear','kiwi'],hint:'After the remove the list is lime, pear, plum. Then kiwi goes on the end.',pic:prog(TC[0],TC[1],TC[2])}}],
progression:{requires:['cs-e-lists'],operations:3,demand:'Count positions from 0, connect the length to the last index, and re-index a list after every append and remove.'},
items(add){
 LISTS.forEach(([name,L,extra],li)=>{const n=L.length,head=`${RULE} ${name} is ${listLit(L)}.`,pic=prog(name,L);
  /* Reading by index: every index, then the index of two of the items. */
  L.forEach((v,k)=>add('index',`${head} What is ${name}[${k}]?`,v,pic,`Counting from 0: ${at(L)}. So ${name}[${k}] is ${lit(v)}.`,acc(v)));
  for(const k of [(li+1)%n,(li+3)%n]){const v=L[k];add('index',`${head} At which index is ${lit(v)}?`,k,pic,`Counting from 0: ${at(L)}. ${lit(v)} is at index ${k}.`);}
  /* Length and last index. */
  add('length',`${head} What is length(${name})?`,n,pic,`${name} holds ${n} items, so its length is ${n}.`);
  add('length',`${head} What is the last index of ${name}?`,n-1,pic,`The length is ${n} and the first index is 0, so the last index is ${n} - 1 = ${n-1}.`);
  add('length',`${head} What is ${name}[length(${name}) - 1]?`,L[n-1],pic,`length(${name}) - 1 = ${n-1}, the last index, which holds ${lit(L[n-1])}.`,acc(L[n-1]));
  add('length',`${head} What is ${name}[length(${name}) - 2]?`,L[n-2],pic,`length(${name}) - 2 = ${n-2}, one before the last index, which holds ${lit(L[n-2])}.`,acc(L[n-2]));
  /* Appending and removing: three programs per list, each asked one or two ways. */
  const j1=1+(li%(n-2)),j2=(li*2)%n,j3=1+((li+1)%(n-2));
  const progs=[[['append',extra],['remove',j1]],[['remove',j2],['append',extra]],[['remove',0],['remove',j3]]];
  progs.forEach((ops,pi)=>{const F=runOps(L,ops),code=[setLine(name,L),...ops.map(o=>opLine(name,o))],lead=`${RULE} A program runs: ${code.join('; ')}.`,p=prog(name,L,ops),why=`After the lines run, ${name} is ${listLit(F)}: ${at(F)}.`;
   const k=(li+pi)%F.length;
   add('change',`${lead} What is ${name}[${k}] now?`,F[k],p,`${why} So ${name}[${k}] is ${lit(F[k])}.`,acc(F[k]));
   if(pi===0||(li+pi)%2)add('change',`${lead} What is length(${name}) now?`,F.length,p,`${why} That is ${F.length} items.`);
   else{const w=F[F.length-1-(li%2)],wi=F.indexOf(w);add('change',`${lead} At which index is ${lit(w)} now?`,wi,p,`${why} So ${lit(w)} is at index ${wi}.`);}});});
}
};
