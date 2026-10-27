// Middle School topic (Grade 8, CSTA 2-AP-12): how the work an algorithm does grows with its input. Every answer
// is computed here from the step counts the question states or the algorithm it describes: a linear search checks
// up to n items, a binary search up to (the number of times n halves, rounding down, before reaching 1) + 1, a loop
// inside a loop over every pair makes n × n comparisons, and comparing each pair of different items once makes
// n × (n - 1) ÷ 2. Comparisons evaluate both step formulas at the stated n; no two are ever equal there.
const most=n=>Math.floor(Math.log2(n))+1;
const tab=(title,rows)=>({t:'setups',title,head:'',rows,cols:['Steps']});
/* A step formula: [text, function]. */
const F={sq:['n × n',n=>n*n],k:k=>[`${k} × n`,n=>k*n],plus:c=>[`n + ${c}`,n=>n+c],lin:(k,c)=>[`${k} × n + ${c}`,n=>k*n+c]};
export default {
id:'cs-m-algorithm-efficiency',subject:'cs',level:4,grade:8,standard:'CSTA 2-AP-12',
title:'How algorithms grow',
goal:'Count the steps an algorithm takes for an input of size n, see how the steps grow when n grows, and choose the algorithm that takes fewer steps.',
points:20,
skills:{count:'Counting steps',growth:'How steps grow',compare:'Choosing the faster algorithm'},
steps:[
 {skill:'count',say:'Computer scientists compare algorithms by counting the steps they take for an input of size n, such as a list of n items. A linear search checks up to n items. A binary search on a sorted list checks far fewer: 100 items need at most 7 checks.',pic:tab('Searching 100 sorted items',[['linear search, at most','100'],['binary search, at most','7']])},
 {skill:'count',say:'A loop inside a loop that compares every item with every item, itself included, makes n × n comparisons: 6 items make 6 × 6 = 36. Comparing each pair of different items only once makes n × (n - 1) ÷ 2: 6 × 5 ÷ 2 = 15.',eq:'6 × 5 ÷ 2 = 15',pic:tab('Comparing 6 items',[['every item with every item','36'],['each pair once','15']]),
  check:{prompt:'Try it: a program compares every item of a list of 9 items with every item, itself included, using a loop inside a loop. How many comparisons does it make?',answer:81,options:[81,18,36],hint:'n × n with n = 9.',pic:tab('A list of 9 items',[['comparisons','?']])}},
 {skill:'growth',say:'How the steps grow matters more than the count for one size. When n doubles, n steps double too, but n × n steps become 2 × 2 = 4 times as many: 10 items take 100 comparisons and 20 items take 400.',eq:'400 ÷ 100 = 4',pic:tab('n × n steps',[['n = 10','100'],['n = 20','400']])},
 {skill:'growth',say:'Binary search grows the slowest: doubling the list adds just one more check. Growing a list from 16 to 64 items, two doublings, raises the most checks from 5 to 7.',pic:tab('Binary search, most checks',[['16 items','5'],['32 items','6'],['64 items','7']]),
  check:{prompt:'Try it: an algorithm takes n × n steps. How many times as many steps does it take for n = 30 as for n = 10?',answer:9,options:[9,3,20],hint:'n is 3 times as big, and both factors grow.',pic:tab('n × n steps',[['n = 10','100'],['n = 30','?']])}},
 {skill:'compare',say:'An algorithm with more steps for small inputs can still win for big ones. Algorithm A takes n × n steps and algorithm B takes 20 × n. For n = 10, A takes 100 and B takes 200, so A is faster; for n = 50, A takes 2,500 and B takes 1,000, so B is faster.',pic:{t:'setups',title:'n × n against 20 × n',head:'n',rows:[['10','100','200'],['50','2,500','1,000']],cols:['A','B']}},
 {skill:'compare',say:'To find where they swap, find when the steps are equal: n × n = 20 × n when n = 20. From n = 21 on, A takes more steps than B, and it only gets worse as n grows.',eq:'21 × 21 = 441, 20 × 21 = 420',pic:{t:'setups',title:'Around the swap',head:'n',rows:[['20','400','400'],['21','441','420']],cols:['A','B']},
  check:{prompt:'Try it: algorithm A takes n × n steps and algorithm B takes 8 × n steps. For n = 12, which takes fewer steps: A or B?',answer:'B',options:['A','B'],hint:'Work out 12 × 12 and 8 × 12.',pic:{t:'setups',title:'n = 12',head:'Algorithm',rows:[['A','n × n'],['B','8 × n']],cols:['Steps']}}}],
progression:{requires:['cs-m-nested-loops','cs-m-binary-search-steps'],operations:3,demand:'Evaluate a step formula, compare its values at two sizes as a ratio or a difference, and find where two formulas swap order.'},
items(add){
 /* Counting steps for a described algorithm (the Try-it's 9 items, every pair, is left out). */
 for(const n of [4,5,7,8,10,12,15,20]){
  add('count',`A program compares every item of a list of ${n} items with every item, itself included, using a loop inside a loop. How many comparisons does it make?`,n*n,tab(`A list of ${n} items`,[['comparisons','?']]),`${n} × ${n} = ${n*n}.`);
  add('count',`A program compares each pair of different items in a list of ${n} items exactly once. How many comparisons does it make?`,n*(n-1)/2,tab(`A list of ${n} items`,[['pairs','?']]),`${n} × ${n-1} ÷ 2 = ${n*(n-1)/2}.`);}
 for(const n of [9,16,30,50,100,250,500,1000]){
  add('count',`In the worst case, how many items does a binary search check in a sorted list of ${n} items?`,most(n),tab(`A sorted list of ${n} items`,[['binary search, at most','?']]),`${n} halves ${most(n)-1} times, rounding down, before reaching 1, so at most ${most(n)} checks.`);}
 for(const [f,n] of [[F.lin(3,10),12],[F.plus(50),40],[F.k(15),8],[F.lin(2,25),30],[F.plus(200),75],[F.k(6),45],[F.sq,13],[F.lin(4,15),20],[F.k(25),12],[F.sq,25],[F.plus(75),125],[F.lin(10,5),9]]){
  add('count',`An algorithm takes ${f[0]} steps for an input of size n. How many steps does it take for n = ${n}?`,f[1](n),tab(`Steps: ${f[0]}`,[[`n = ${n}`,'?']]),`${f[0].replace(/n/g,n)} = ${f[1](n)}.`);}
 /* Growth: ratios and differences between two sizes (the Try-it's n × n from 10 to 30 is left out). */
 for(const [a,b] of [[10,20],[5,15],[4,16],[6,24],[8,40],[3,30],[7,14],[12,36]]){
  add('growth',`An algorithm takes n × n steps. How many times as many steps does it take for n = ${b} as for n = ${a}?`,b*b/(a*a),tab('n × n steps',[[`n = ${a}`,`${a*a}`],[`n = ${b}`,'?']]),`${b} × ${b} = ${b*b} and ${a} × ${a} = ${a*a}, and ${b*b} ÷ ${a*a} = ${b*b/(a*a)}.`);
  add('growth',`An algorithm takes n × n steps. How many more steps does it take for n = ${b} than for n = ${a}?`,b*b-a*a,tab('n × n steps',[[`n = ${a}`,`${a*a}`],[`n = ${b}`,'?']]),`${b} × ${b} - ${a} × ${a} = ${b*b} - ${a*a} = ${b*b-a*a}.`);
  add('growth',`An algorithm takes 4 × n steps. How many more steps does it take for n = ${b} than for n = ${a}?`,4*(b-a),tab('4 × n steps',[[`n = ${a}`,`4 × ${a}`],[`n = ${b}`,`4 × ${b}`],['more steps','?']]),`4 × ${b} - 4 × ${a} = ${4*b} - ${4*a} = ${4*(b-a)}.`);}
 for(const [a,b] of [[8,32],[16,128],[10,40],[100,400],[50,800],[64,1024]]){
  add('growth',`A sorted list grows from ${a} items to ${b} items. How many more checks can a binary search need, at most?`,most(b)-most(a),tab('Binary search, most checks',[[`${a} items`,`${most(a)}`],[`${b} items`,'?']]),`At most ${most(a)} checks for ${a} items and ${most(b)} for ${b}, so ${most(b)-most(a)} more.`);}
 for(const [a,b] of [[10,30],[20,40],[25,100],[6,18]]){
  add('growth',`A linear search checks up to n items. How many times as many checks can it need for a list of ${b} items as for ${a} items?`,b/a,tab('Linear search, most checks',[[`${a} items`,`${a}`],[`${b} items`,'?']]),`${b} ÷ ${a} = ${b/a}: the checks grow at the same rate as the list.`);}
 /* Choosing: which formula is smaller at n, how many fewer steps, and the first n where the order swaps
    (the Try-it's n × n against 8 × n at n = 12 is left out). */
 const PAIRS=[[F.sq,F.k(8)],[F.sq,F.k(20)],[F.sq,F.plus(30)],[F.k(10),F.plus(90)],[F.k(6),F.lin(2,40)],[F.sq,F.lin(5,24)],[F.sq,F.k(12)],[F.k(3),F.plus(60)]];
 PAIRS.forEach(([A,B],j)=>{for(const n of [[4,12,15],[10,15,50],[3,6,9],[5,8,25],[6,15,20],[4,10,12],[6,10,16],[20,25,40]][j]){if(j===0&&n===12)continue;const a=A[1](n),b=B[1](n);if(a===b)continue;const w=a<b?'A':'B';
   add('compare',`Algorithm A takes ${A[0]} steps and algorithm B takes ${B[0]} steps. For n = ${n}, which takes fewer steps: A or B?`,w,{t:'setups',title:`n = ${n}`,head:'Algorithm',rows:[['A',A[0]],['B',B[0]]],cols:['Steps']},`A takes ${a} and B takes ${b}, so ${w} takes fewer.`,[`algorithm ${w.toLowerCase()}`]);
   if(n%2===0)add('compare',`Algorithm A takes ${A[0]} steps and algorithm B takes ${B[0]} steps. For n = ${n}, how many fewer steps does the faster one take?`,Math.abs(a-b),{t:'setups',title:`n = ${n}`,head:'Algorithm',rows:[['A',A[0]],['B',B[0]]],cols:['Steps']},`A takes ${a} and B takes ${b}: a difference of ${Math.abs(a-b)}.`);}
  let s=2;while(!(A[1](s)>B[1](s)&&A[1](s-1)<=B[1](s-1))){s++;if(s>10000)throw new Error(`no swap for ${A[0]} and ${B[0]}`);}
  add('compare',`Algorithm A takes ${A[0]} steps and algorithm B takes ${B[0]} steps. What is the smallest n at which A takes more steps than B?`,s,{t:'setups',title:'Where they swap',head:'Algorithm',rows:[['A',A[0]],['B',B[0]]],cols:['Steps']},`At n = ${s-1}, A takes ${A[1](s-1)} and B takes ${B[1](s-1)}; at n = ${s}, A takes ${A[1](s)} and B takes ${B[1](s)}.`);});
}
};
