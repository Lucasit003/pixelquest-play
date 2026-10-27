// Middle School topic (Grade 8, CSTA 2-AP-12): nested loops. Every answer comes from running the program in its
// own question here, pass by pass: the inner loop runs all the way through on every pass of the outer loop. The
// questions ask how many times the innermost line runs, what a running total holds at the end or partway, and
// how an inner loop whose limit depends on the outer variable builds a triangle. Each prompt describes its
// program in words, and its picture lists the same program.
const num=L=>L.map((l,i)=>`${i+1}. ${l}`);
const pic=L=>({t:'program',title:'Program',lines:num(L)});
/* A program: outer i from 1 to a; inner j from j0 to j1 (numbers, or 'i'); body adds what (1, 'i', 'j', 'i × j', 2) to v. */
const run=P=>{let v=0,trace=[];for(let i=1;i<=P.a;i++){const lo=P.lo==='i'?i:P.lo,hi=P.hi==='i'?i:P.hi;for(let j=lo;j<=hi;j++)v+=P.add===1?1:P.add==='i'?i:P.add==='j'?j:P.add==='i × j'?i*j:P.add;trace.push(v);}return {v,trace};};
const lines=P=>[...(P.star?[]:[`set ${P.v} to 0`]),`for i from 1 to ${P.a}:`,`    for j from ${P.lo} to ${P.hi}:`,P.star?'        print "*"':`        add ${P.add} to ${P.v}`];
const words=P=>P.star?`A program runs a loop for i from 1 to ${P.a}, and inside it a loop for j from ${P.lo} to ${P.hi} that prints one star each time.`:`A program sets ${P.v} to 0. Then, for i from 1 to ${P.a}, and for j from ${P.lo} to ${P.hi} inside that loop, it adds ${P.add} to ${P.v}.`;
const VARS=['count','total','score','steps','sum','points'];
export default {
id:'cs-m-nested-loops',subject:'cs',level:4,grade:8,standard:'CSTA 2-AP-12',
title:'Nested loops',
goal:'Trace a loop inside a loop: count how many times the inner line runs, find a running total at the end or partway, and follow an inner loop that grows with the outer one.',
points:20,
skills:{count:'Counting inner passes',total:'Totals in nested loops',triangle:'Inner loops that change'},
steps:[
 {skill:'count',say:'A nested loop is a loop inside another loop. On every pass of the outer loop, the inner loop runs all the way through. Here the outer loop makes 3 passes and the inner loop makes 4 passes each time, so the innermost line runs 3 × 4 = 12 times.',eq:'3 × 4 = 12',pic:pic(lines({v:'count',a:3,lo:1,hi:4,add:1}))},
 {skill:'count',say:'Trace it with a table: after the pass with i = 1, count is 4; after i = 2 it is 8; after i = 3 it is 12. Each outer pass adds one full run of the inner loop. Watch where a loop starts: j from 0 to 3 runs 4 times, not 3.',pic:{t:'setups',title:'count after each outer pass',head:'i',rows:[['1','4'],['2','8'],['3','12']],cols:['count']},
  check:{prompt:'Try it: a program sets count to 0. Then, for i from 1 to 5, and for j from 1 to 6 inside that loop, it adds 1 to count. What is count at the end?',answer:30,options:[30,11,36],hint:'The inner loop runs 6 times on each of the 5 outer passes.',pic:pic(lines({v:'count',a:5,lo:1,hi:6,add:1}))}},
 {skill:'total',say:'The inner line can use the loop variables. If it adds i, every inner pass adds the outer pass number: with i from 1 to 3 and j from 1 to 2, the total is 1 + 1 + 2 + 2 + 3 + 3 = 12.',eq:'1 + 1 + 2 + 2 + 3 + 3 = 12',pic:pic(lines({v:'total',a:3,lo:1,hi:2,add:'i'}))},
 {skill:'total',say:'If it adds j instead, each outer pass adds 1 + 2 = 3, so 3 outer passes make 3 × 3 = 9. Adding i × j multiplies the two: with i from 1 to 2 and j from 1 to 3, the passes add 1, 2, 3, then 2, 4, 6, which is 18.',eq:'1 + 2 + 3 + 2 + 4 + 6 = 18',pic:pic(lines({v:'total',a:2,lo:1,hi:3,add:'i × j'})),
  check:{prompt:'Try it: a program sets total to 0. Then, for i from 1 to 4, and for j from 1 to 2 inside that loop, it adds i to total. What is total at the end?',answer:20,options:[20,10,8],hint:'Each outer pass adds i twice: 1 + 1, then 2 + 2, and so on.',pic:pic(lines({v:'total',a:4,lo:1,hi:2,add:'i'}))}},
 {skill:'triangle',say:'The inner loop’s limit can be the outer variable. With j from 1 to i, the inner loop runs once when i = 1, twice when i = 2, and so on. Printing a star each time draws a triangle: for i from 1 to 4 that is 1 + 2 + 3 + 4 = 10 stars.',eq:'1 + 2 + 3 + 4 = 10',pic:pic(lines({v:'stars',a:4,lo:1,hi:'i',star:true}))},
 {skill:'triangle',say:'Going the other way, j from i to 4 runs 4 times when i = 1, then 3, 2 and 1 times: the same 10 stars, in rows that shrink. To count one row, count the j values for that pass: when i = 2, j from i to 4 runs 4 - 2 + 1 = 3 times.',eq:'4 - 2 + 1 = 3',pic:pic(lines({v:'stars',a:4,lo:'i',hi:4,star:true})),
  check:{prompt:'Try it: a program runs a loop for i from 1 to 6, and inside it a loop for j from 1 to i that prints one star each time. How many stars does it print in all?',answer:21,options:[21,36,6],hint:'Add the stars on each pass: 1 + 2 + 3 + 4 + 5 + 6.',pic:pic(lines({v:'stars',a:6,lo:1,hi:'i',star:true}))}}],
progression:{requires:['cs-m-while-loops','cs-e-loops-in-loops'],operations:3,demand:'Multiply the passes of two loops, add a loop variable over every inner pass, and add up passes that change from row to row.'},
items(add){
 let k=0;
 const V=()=>VARS[k++%VARS.length];
 /* How many times the inner line runs (the Try-it's 5 by 6 is left out). */
 for(const a of [2,3,4,6,7])for(const b of [2,3,4,5,8]){const P={v:V(),a,lo:1,hi:b,add:1},R=run(P);
  add('count',`${words(P)} What is ${P.v} at the end?`,R.v,pic(lines(P)),`The inner loop runs ${b} times on each of ${a} outer passes: ${a} × ${b} = ${R.v}.`);}
 for(const [a,b] of [[3,3],[4,5],[2,9],[5,4],[6,2],[3,7]]){const P={v:V(),a,lo:0,hi:b,add:1},R=run(P);
  add('count',`${words(P)} What is ${P.v} at the end?`,R.v,pic(lines(P)),`j from 0 to ${b} takes ${b+1} values, so each of ${a} outer passes adds ${b+1}: ${a} × ${b+1} = ${R.v}.`);}
 for(const [a,b,i] of [[5,3,2],[4,6,3],[6,4,4],[3,8,2],[7,2,5],[5,5,3]]){const P={v:V(),a,lo:1,hi:b,add:1},R=run(P);
  add('count',`${words(P)} What is ${P.v} just after the outer pass with i = ${i}?`,R.trace[i-1],pic(lines(P)),`Each outer pass adds ${b}, so after ${i} passes ${P.v} is ${i} × ${b} = ${R.trace[i-1]}.`);}
 for(const [a,b] of [[3,4],[5,2],[2,7],[4,4],[6,3],[3,6]]){const P={v:'stars',a,lo:1,hi:b,star:true};
  add('count',`${words(P)} How many stars does it print in all?`,a*b,pic(lines(P)),`${a} outer passes, each printing ${b} stars: ${a} × ${b} = ${a*b}.`);}
 /* Totals that add a loop variable (the Try-it's i, 4 by 2 is left out). */
 for(const add_ of ['i','j','i × j',2])for(const [a,b] of [[3,2],[2,4],[4,3],[3,3],[5,2],[2,5]]){if(add_==='i'&&a===4&&b===2)continue;const P={v:V(),a,lo:1,hi:b,add:add_},R=run(P);
  const how=add_==='i'?`Each outer pass adds i, ${b} times: ${Array.from({length:a},(_,x)=>`${b} × ${x+1}`).join(' + ')} = ${R.v}.`:add_==='j'?`Each outer pass adds ${Array.from({length:b},(_,x)=>x+1).join(' + ')} = ${b*(b+1)/2}, and ${a} passes make ${a} × ${b*(b+1)/2} = ${R.v}.`:add_===2?`The inner line runs ${a} × ${b} = ${a*b} times, adding 2 each time: ${R.v}.`:`Pass i adds i × (${Array.from({length:b},(_,x)=>x+1).join(' + ')}) = i × ${b*(b+1)/2}, so the total is (${Array.from({length:a},(_,x)=>x+1).join(' + ')}) × ${b*(b+1)/2} = ${R.v}.`;
  add('total',`${words(P)} What is ${P.v} at the end?`,R.v,pic(lines(P)),how);}
 for(const [a,b,add_,i] of [[4,3,'i',2],[3,4,'j',2],[5,2,'i',3],[4,2,'i × j',3],[3,5,'j',1],[4,3,2,3]]){const P={v:V(),a,lo:1,hi:b,add:add_},R=run(P);
  add('total',`${words(P)} What is ${P.v} just after the outer pass with i = ${i}?`,R.trace[i-1],pic(lines(P)),`Running the first ${i} outer passes in full gives ${R.trace.slice(0,i).join(', then ')}.`);}
 /* Triangles: j from 1 to i, and j from i to a (the Try-it's 6 rows of j from 1 to i is left out). */
 for(const a of [3,4,5,7,8,10]){
  for(const [lo,hi] of [[1,'i'],['i',a]]){if(a===6&&lo===1)continue;const P={v:'stars',a,lo,hi,star:true},n=a*(a+1)/2;
   add('triangle',`${words(P)} How many stars does it print in all?`,n,pic(lines(P)),`The rows have ${lo===1?Array.from({length:a},(_,x)=>x+1).join(', '):Array.from({length:a},(_,x)=>a-x).join(', ')} stars, which add to ${n}.`);
   const i=Math.ceil(a/2)+(lo===1?0:-1),row=lo===1?i:a-i+1;
   add('triangle',`${words(P)} How many stars does it print during the outer pass with i = ${i}?`,row,pic(lines(P)),lo===1?`When i = ${i}, j runs from 1 to ${i}: ${i} stars.`:`When i = ${i}, j runs from ${i} to ${a}: ${a} - ${i} + 1 = ${row} stars.`);}}
 for(const [a,add_] of [[4,1],[5,'j'],[3,'j'],[6,1],[4,'j'],[5,2]]){const P={v:V(),a,lo:1,hi:'i',add:add_},R=run(P);
  add('triangle',`${words(P)} What is ${P.v} at the end?`,R.v,pic(lines(P)),`Pass by pass ${P.v} becomes ${R.trace.join(', ')}, so it ends at ${R.v}.`);}
}
};
