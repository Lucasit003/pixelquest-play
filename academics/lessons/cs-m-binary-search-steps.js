// Middle School topic (Grade 8, CSTA 2-AP-10): binary search. Every answer comes from running the search in its
// own question here: on a list sorted smallest first, check the item at index (low + high) ÷ 2 rounded down; stop
// if it is the target, keep only the right part if the target is bigger and the left part if it is smaller, and
// give "not found" when no items are left. The questions ask which item is checked first or next, how many items
// are checked, and the most checks a list of a given length can ever need, compared with a linear search.
const RULE='Positions start at 0 in this language.';
const lit=L=>`[${L.join(', ')}]`;
const run=(L,x)=>{let lo=0,hi=L.length-1;const seen=[];while(lo<=hi){const m=Math.floor((lo+hi)/2);seen.push(m);if(L[m]===x)return {seen,found:true};if(x>L[m])lo=m+1;else hi=m-1;}return {seen,found:false};};
const most=n=>Math.floor(Math.log2(n))+1;
const lines=(name,L,x)=>['set low to 0',`set high to ${L.length-1}`,'while low ≤ high:','    set mid to (low + high) ÷ 2, rounded down',`    if ${name}[mid] = ${x}: stop, found`,`    if ${name}[mid] < ${x}: set low to mid + 1`,'    otherwise: set high to mid - 1','stop, not found'].map((l,i)=>`${i+1}. ${l}`);
const pic=(name,L,x)=>({t:'program',title:`Binary search of ${name} = ${lit(L)}`,lines:lines(name,L,x)});
const lead=(name,L,x)=>`${RULE} ${name} is ${lit(L)}, sorted smallest first. A binary search for ${x} checks the item at index (low + high) ÷ 2, rounded down, and keeps only the part of the list that could still hold ${x}.`;
const LISTS=[['ages',[3,7,9,12,15,18,21]],['scores',[10,14,19,23,28,31,36,40]],['heights',[102,108,115,121,126,130,137,142,149,155]],['codes',[5,11,17,24,30,36,41,47,52,58,63,70]],['prices',[2,4,6,9,13,16,20,25,27,31,34,38,43,47,50]],['times',[8,12,15,19,22,26,29,33,37,40,44,48,51,55,59,62]]];
export default {
id:'cs-m-binary-search-steps',subject:'cs',level:4,grade:8,standard:'CSTA 2-AP-10',
title:'Binary search',
goal:'Trace a binary search on a sorted list: find which item it checks first and next, count the items it checks, and work out the most checks a list can need.',
points:20,
skills:{mid:'The middle item',steps:'Counting checks',most:'The most checks'},
steps:[
 {skill:'mid',say:'Binary search finds an item in a list sorted smallest first. It checks the middle item. If that is the target it stops; if the target is bigger it keeps only the right part, and if smaller only the left part. Each check throws away about half of what is left.',pic:pic('ages',[3,7,9,12,15,18,21],18)},
 {skill:'mid',say:'The middle is at index (low + high) ÷ 2, rounded down. In ages = [3, 7, 9, 12, 15, 18, 21], low is 0 and high is 6, so the first check is index (0 + 6) ÷ 2 = 3, the value 12. Searching for 18, which is bigger, low becomes 4, and the next check is index (4 + 6) ÷ 2 = 5, the value 18: found.',eq:'(0 + 6) ÷ 2 = 3',pic:{t:'setups',title:'Searching ages for 18',head:'Check',rows:[['1st','0','6','3','12'],['2nd','4','6','5','18']],cols:['low','high','mid','value']},
  check:{prompt:'Try it: positions start at 0 in this language. nums is [4, 8, 13, 17, 22, 26, 31, 35, 40], sorted smallest first. A binary search for 31 checks the item at index (low + high) ÷ 2, rounded down. Which index does it check first?',answer:4,options:[4,6,5],hint:'low is 0 and high is 8. Find (0 + 8) ÷ 2.',pic:pic('nums',[4,8,13,17,22,26,31,35,40],31)}},
 {skill:'steps',say:'Count the checks until the search stops. Searching ages for 9: index 3 holds 12, too big, so high becomes 2; index (0 + 2) ÷ 2 = 1 holds 7, too small, so low becomes 2; index 2 holds 9. That is 3 checks.',pic:{t:'setups',title:'Searching ages for 9',head:'Check',rows:[['1st','3','12, too big'],['2nd','1','7, too small'],['3rd','2','9, found']],cols:['index','value']}},
 {skill:'steps',say:'A target that is not in the list is reported only when no items are left, when low has passed high. Searching ages for 10 checks 12, then 7, then 9, and then low is 3 and high is 2, so the search stops after 3 checks with "not found".',pic:{t:'setups',title:'Searching ages for 10',head:'Check',rows:[['1st','3','12, too big'],['2nd','1','7, too small'],['3rd','2','9, too small'],['then','low 3, high 2','not found']],cols:['index','value']},
  check:{prompt:'Try it: positions start at 0 in this language. nums is [4, 8, 13, 17, 22, 26, 31, 35, 40], sorted smallest first. A binary search for 40 checks the item at index (low + high) ÷ 2, rounded down, and keeps only the part that could still hold 40. How many items does it check before it stops?',answer:4,options:[4,9,3],hint:'Index 4 holds 22, too small. Then search indexes 5 to 8.',pic:pic('nums',[4,8,13,17,22,26,31,35,40],40)}},
 {skill:'most',say:'Each check halves what is left, so the most checks a list can need grows slowly. A list of 7 items needs at most 3 checks, 15 items at most 4, and 31 items at most 5: doubling the list adds only one more check.',pic:{t:'setups',title:'Most checks for binary search',head:'Items in the list',rows:[['7','3'],['15','4'],['31','5'],['1,000','10']],cols:['Most checks']}},
 {skill:'most',say:'To find the most checks, count how many times you can halve the list, rounding down, before 1 item is left, then add 1. 20 halves to 10, 5, 2 and 1, four halvings, so 20 items need at most 4 + 1 = 5 checks. A linear search, checking from the start, can need all 20.',eq:'4 + 1 = 5',pic:{t:'setups',title:'20 items, most checks',head:'Search',rows:[['binary','5'],['linear','20']],cols:['Most checks']},
  check:{prompt:'Try it: at most how many items does a binary search check in a sorted list of 40 items?',answer:6,options:[6,5,40],hint:'Halve 40, rounding down, until 1 is left: 20, 10, 5, 2, 1. Then add 1.',pic:{t:'setups',title:'A sorted list of 40 items',head:'Search',rows:[['binary','?']],cols:['Most checks']}}}],
progression:{requires:['cs-m-list-algorithms','cs-e-guess-number'],operations:3,demand:'Find a middle index by halving and rounding down, keep the half that could hold the target, count the checks, and count halvings for the worst case.'},
items(add){
 LISTS.forEach(([name,L],j)=>{
  /* Targets: a few in the list and one that is not, every one asked about differently. */
  const inList=[L[0],L[1],L[Math.floor(L.length/2)],L[L.length-2],L.at(-1)],miss=[L[0]+1,L[Math.floor(L.length/3)]+1,L.at(-1)+3];
  inList.forEach((x,k)=>{const R=run(L,x),P=pic(name,L,x),Ld=lead(name,L,x);
   add('steps',`${Ld} How many items does it check before it finds ${x}?`,R.seen.length,P,`It checks index${R.seen.length>1?'es':''} ${R.seen.join(', ')}, holding ${R.seen.map(i=>L[i]).join(', ')}: ${R.seen.length} check${R.seen.length>1?'s':''}.`);
   if(R.seen.length>=2){if(k%2===0)add('mid',`${Ld} Which index does it check second?`,R.seen[1],P,`The first check is index ${R.seen[0]}, holding ${L[R.seen[0]]}. ${x>L[R.seen[0]]?`${x} is bigger, so low becomes ${R.seen[0]+1}`:`${x} is smaller, so high becomes ${R.seen[0]-1}`}, and the next middle is index ${R.seen[1]}.`);
    else add('mid',`${Ld} Which value does it check second?`,L[R.seen[1]],P,`The first check is index ${R.seen[0]}, holding ${L[R.seen[0]]}; the second is index ${R.seen[1]}, holding ${L[R.seen[1]]}.`);}});
  miss.forEach(x=>{if(L.includes(x))return;const R=run(L,x);
   add('steps',`${lead(name,L,x)} How many items does it check before it stops with "not found"?`,R.seen.length,pic(name,L,x),`It checks ${R.seen.map(i=>L[i]).join(', ')}, and then low has passed high: ${R.seen.length} checks.`);});
  /* The first check: an index, and a value. */
  const x=L[L.length-3],first=Math.floor((L.length-1)/2);
  add('mid',`${lead(name,L,x)} Which index does it check first?`,first,pic(name,L,x),`low is 0 and high is ${L.length-1}, so the first check is (0 + ${L.length-1}) ÷ 2 = ${first}${(L.length-1)%2?', rounded down':''}.`);
  add('mid',`${lead(name,L,L[1])} Which value does it check first?`,L[first],pic(name,L,L[1]),`The first check is index (0 + ${L.length-1}) ÷ 2${(L.length-1)%2?', rounded down,':''} = ${first}, which holds ${L[first]}.`);
  /* How many items are left after the first check. */
  const y=L[L.length-1],left=L.length-1-first,z=L[0],right=first;
  add('mid',`${lead(name,L,y)} After its first check, how many items are left that could still hold ${y}?`,left,pic(name,L,y),`The first check is index ${first}, holding ${L[first]}. ${y} is bigger, so only indexes ${first+1} to ${L.length-1} are left: ${left} items.`);
  add('mid',`${lead(name,L,z)} After its first check, how many items are left that could still hold ${z}?`,right,pic(name,L,z),`The first check is index ${first}, holding ${L[first]}. ${z} is smaller, so only indexes 0 to ${first-1} are left: ${right} items.`);});
 /* The most checks for a list of n items, and the gap to a linear search (the Try-it's 12 items is left out). */
 for(const n of [3,5,7,8,10,15,16,20,25,31,32,50,63,64,100,127,200,1000]){
  add('most',`At most how many items does a binary search check in a sorted list of ${n} items?`,most(n),{t:'setups',title:`A sorted list of ${n} items`,head:'Search',rows:[['binary','?']],cols:['Most checks']},`Halve ${n}, rounding down, until 1 is left: ${(()=>{const h=[];let m=n;while(m>1){m=Math.floor(m/2);h.push(m);}return h.join(', ');})()}. That is ${most(n)-1} halvings, so at most ${most(n)} checks.`);}
 for(const n of [6,9,14,30,40,60,128,500]){
  add('most',`In a sorted list of ${n} items, a linear search checks items one at a time from the start and a binary search halves the list. In the worst case, how many more items does the linear search check than the binary search?`,n-most(n),{t:'setups',title:`A sorted list of ${n} items`,head:'Search',rows:[['linear','?'],['binary','?']],cols:['Most checks']},`Linear: at most ${n}. Binary: at most ${most(n)}. The difference is ${n} - ${most(n)} = ${n-most(n)}.`);}
}
};
