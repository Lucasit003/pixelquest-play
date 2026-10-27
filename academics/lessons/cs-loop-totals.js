// Original computer science lesson. Every value is the result of actually running the tiny program
// described in the prompt (a repeat loop that adds a fixed amount, a for-each loop that adds the
// loop counter, or a repeat loop that doubles), so every answer is computed, never asserted.
// Totals are kept under 200 so a grade 4 learner can trace each program by hand.
const linesAdd=(a,n,k)=>[`1. set total to ${a}`,`2. repeat ${n} times:`,`3.     add ${k} to total`];
const linesSum=n=>['1. set total to 0',`2. for each number n from 1 to ${n}:`,'3.     add n to total'];
const linesDbl=n=>['1. set x to 1',`2. repeat ${n} times:`,'3.     double x'];
const runAdd=(a,n,k)=>{const v=[];let t=a;for(let i=0;i<n;i++){t+=k;v.push(t);}return v;};
const runSum=n=>{const v=[];let t=0;for(let i=1;i<=n;i++){t+=i;v.push(t);}return v;};
const runDbl=n=>{const v=[];let x=1;for(let i=0;i<n;i++){x*=2;v.push(x);}return v;};
export default {
id:"cs-e-loop-totals",
subject:"cs",
level:3,
grade:4,
title:"Loops that build a total",
goal:"Run a loop that adds to a variable, find its value at the end or after a chosen pass, and find how many passes it takes to first reach a target.",
standard:"CSTA 1B-AP-10: programs with loops and variables",
points:20,
skills:{"end":"Value at the end","pass":"Value after a pass","until":"How many passes until"},
steps:[{"skill":"end","say":"This program starts total at 5, then repeats 3 times, each time adding 4 to total. Every repeat is called a pass, and the value at the end is what total holds once every pass has finished: 5, then 9, then 13, then 17.","pic":{"t":"program","title":"Program","lines":linesAdd(5,3,4)}},
{"skill":"end","say":"You can skip straight to the end without listing every pass: the start plus the number of passes times the amount added gives the same answer.","pic":{"t":"program","title":"Program","lines":linesAdd(6,5,3)},"check":{"prompt":"Try it: a program sets total to 6, then repeats 5 times, each time adding 3 to total. What is total at the end?","answer":21,"options":[21,15,24],"hint":"6, then add 3 five times: 6 + 5 x 3 = 21.","pic":{"t":"program","title":"Program","lines":linesAdd(6,5,3)}}},
{"skill":"pass","say":"A for-each loop runs once for every number in a list, in order. This program starts total at 0, then for each number n from 1 to 5, adds n to total. After pass 1, n is 1 and total is 1. After pass 2, n is 2 and total is 3. After pass 3, n is 3 and total is 6.","pic":{"t":"program","title":"Program","lines":linesSum(5)}},
{"skill":"pass","say":"To find the value after a chosen pass, stop the trace there instead of running every pass.","pic":{"t":"program","title":"Program","lines":linesSum(6)},"check":{"prompt":"Try it: a program sets total to 0, then for each number n from 1 to 6, adds n to total. What is total after pass 4 of the loop?","answer":10,"options":[10,4,15],"hint":"After pass 4, n has taken 1, 2, 3, 4: total = 1+2+3+4 = 10.","pic":{"t":"program","title":"Program","lines":linesSum(6)}}},
{"skill":"until","say":"A doubling loop grows fast. This program sets x to 1, then repeats 6 times, doubling x each pass: 2, 4, 8, 16, 32, 64. To find how many passes it takes to first reach a target, keep doubling until you meet or pass it.","pic":{"t":"program","title":"Program","lines":linesDbl(6)}},
{"skill":"until","say":"Our doubling loops start with a positive number, so each pass increases it. The first pass that reaches or passes a target is the earliest such pass.","pic":{"t":"program","title":"Program","lines":linesDbl(6)},"check":{"prompt":"Try it: a program sets x to 1, then repeats 6 times, doubling x each pass. After which pass does x first reach at least 20?","answer":5,"options":[5,4,6],"hint":"x is 2, 4, 8, 16, 32, 64: pass 5 is 32, the first at least 20.","pic":{"t":"program","title":"Program","lines":linesDbl(6)}}}],
progression:{"requires":["cs-e-tracing-variables","cs-e-loops-in-loops"],"operations":3,"demand":"Run a loop that changes a variable every pass, stop the trace at a chosen pass, and find the first pass where a growing value meets a target."},
items(add){
 {const _P=[];
 for(let a=0;a<=20;a+=4)for(let n=3;n<=9;n+=2)for(let k=2;k<=14;k+=3)if(a+n*k<200)_P.push([a,n,k]);
 const _n=Math.min(_P.length,20),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;
 for(let _i=0;_i<_P.length;_i+=_st){const [a,n,k]=_P[_i],v=runAdd(a,n,k),end=v[v.length-1],pic={t:'program',title:'Program',lines:linesAdd(a,n,k)},lead=`A program sets total to ${a}, then repeats ${n} times, each time adding ${k} to total. `;
  add('end',lead+'What is total at the end?',end,pic,`total starts at ${a} and gains ${k} for each of the ${n} passes: ${a} + ${n} x ${k} = ${end}.`);
  const p=1+((a+k)%(n-1)),pv=v[p-1];
  add('pass',lead+`What is total after pass ${p} of the loop?`,pv,pic,`After ${p} pass${p===1?'':'es'}, total has gained ${k} each time: ${a} + ${p} x ${k} = ${pv}.`);
  /* Half the targets fall between two pass values, so "at least" is really tested, not "equals". */
  const m=1+((a*2+k)%n),before=m>1?v[m-2]:a,T=(a/4+n+k)%2?before+1:v[m-1];
  add('until',lead+`After which pass does total first reach at least ${T}?`,m,pic,`total is ${before} before pass ${m} and ${v[m-1]} after it, so pass ${m} is the first to reach at least ${T}.`);
 }}
 {const _P=[];
 for(let n=3;n<=19;n++)_P.push([n]);
 for(let _i=0;_i<_P.length;_i++){const [n]=_P[_i],v=runSum(n),end=v[v.length-1],pic={t:'program',title:'Program',lines:linesSum(n)},lead=`A program sets total to 0, then for each number n from 1 to ${n}, adds n to total. `;
  add('end',lead+'What is total at the end?',end,pic,`total is ${n<=5?Array.from({length:n},(_,j)=>j+1).join('+'):'1+2+...+'+n}, which is ${n} x ${n+1} / 2 = ${end}.`);
  const p=Math.max(1,Math.min(n-1,Math.round(n/2))),pv=v[p-1];
  add('pass',lead+`What is total after pass ${p} of the loop?`,pv,pic,`After pass ${p}, n has taken 1 up to ${p}: total = ${v.slice(0,p).map((_,j)=>j+1).join('+')} = ${pv}.`);
  const m=Math.max(1,Math.min(n,Math.round(n*0.75))),before=m>1?v[m-2]:0,T=n%2&&m>1?before+1:v[m-1];
  add('until',lead+`After which pass does total first reach at least ${T}?`,m,pic,`total is ${before} before pass ${m} and ${v[m-1]} after it, so pass ${m} is the first to reach at least ${T}.`);
 }}
 {const _P=[];
 for(let n=3;n<=7;n++)_P.push([n]);
 for(let _i=0;_i<_P.length;_i++){const [n]=_P[_i],v=runDbl(n),end=v[v.length-1],pic={t:'program',title:'Program',lines:linesDbl(n)},lead=`A program sets x to 1, then repeats ${n} times, doubling x each pass. `;
  add('end',lead+'What is x at the end?',end,pic,`x doubles ${n} times from 1: ${v.join(', ')}.`);
  const p=Math.max(1,Math.min(n-1,Math.round(n/2))),pv=v[p-1];
  add('pass',lead+`What is x after pass ${p} of the loop?`,pv,pic,`After pass ${p}, x has doubled ${p} times from 1: ${pv}.`);
  const m=Math.max(1,Math.min(n,Math.round(n*0.75))),before=m>1?v[m-2]:1,T=n%2&&m>1?before+1:v[m-1];
  add('until',lead+`After which pass does x first reach at least ${T}?`,m,pic,`x is ${before} before pass ${m} and ${v[m-1]} after it, so pass ${m} is the first to reach at least ${T}.`);
 }}
}
};
