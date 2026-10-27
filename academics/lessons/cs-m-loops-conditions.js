// Middle School topic (Grade 6, CSTA 2-AP-12): loops that contain an if-statement. Every answer comes from
// running the program in its own question here, pass by pass, with the loop counter i taking each value from
// the first to the last in turn: the value at the end, how many passes make the test true (or run the
// otherwise part), and the value just after a chosen pass. Each prompt describes its program in words, and
// its picture lists exactly the same program as numbered code. No total ever goes below zero.
const TESTS={
 even:{code:()=>'i is even',ok:i=>i%2===0},
 odd:{code:()=>'i is odd',ok:i=>i%2===1},
 gt:{code:k=>`i > ${k}`,ok:(i,k)=>i>k},
 lt:{code:k=>`i < ${k}`,ok:(i,k)=>i<k},
 mult:{code:k=>`i is a multiple of ${k}`,ok:(i,k)=>i%k===0}};
const doCode=a=>a.op==='i'?'add i to total':a.op==='add'?`add ${a.n} to total`:`take ${a.n} away from total`;
const doWords=a=>a.op==='i'?'adds i to total':a.op==='add'?`adds ${a.n} to total`:`takes ${a.n} away from total`;
const apply=(a,t,i)=>a.op==='i'?t+i:a.op==='add'?t+a.n:t-a.n;
/* A program: total starts at s, i runs from a to b, and each pass runs `then` when the test is true and
   `other` (the otherwise part, if there is one) when it is false. */
const cond=P=>TESTS[P.test[0]].code(P.test[1]);
const lines=P=>[`1. set total to ${P.s}`,`2. for i from ${P.a} to ${P.b}:`,`3.     if ${cond(P)}:`,`4.         ${doCode(P.then)}`,...(P.other?['5.     otherwise:',`6.         ${doCode(P.other)}`]:[])];
const words=P=>`A program sets total to ${P.s}. Then for i from ${P.a} to ${P.b}: if ${cond(P)}, it ${doWords(P.then)}${P.other?`; otherwise it ${doWords(P.other)}`:''}.`;
const run=P=>{const out=[];let t=P.s;for(let i=P.a;i<=P.b;i++){const hit=TESTS[P.test[0]].ok(i,P.test[1]);if(hit)t=apply(P.then,t,i);else if(P.other)t=apply(P.other,t,i);out.push({i,hit,t});}return out;};
const pic=P=>({t:'program',title:'Program',lines:lines(P)});
const trace=R=>R.map(p=>`i = ${p.i}: ${p.t}`).join(', ');
const lc=s=>s.replace(/^A /,'a ');
/* The lesson's own examples and the three Try-its (the Try-it programs never appear in the pool). */
const EVEN={s:0,a:1,b:6,test:['even'],then:{op:'i'},other:null};
const OVER3={s:0,a:1,b:7,test:['gt',3],then:{op:'add',n:2},other:null};
const SPLIT={s:0,a:1,b:5,test:['gt',3],then:{op:'add',n:10},other:{op:'add',n:1}};
const TA={s:0,a:1,b:7,test:['odd'],then:{op:'i'},other:null};
const TB={s:0,a:1,b:9,test:['mult',3],then:{op:'add',n:10},other:{op:'add',n:1}};
const TC={s:5,a:2,b:8,test:['gt',4],then:{op:'i'},other:{op:'take',n:1}};
export default {
id:'cs-m-loops-conditions',subject:'cs',level:4,grade:6,standard:'CSTA 2-AP-12',
title:'Loops with if-statements',
goal:'Trace a loop that holds an if-statement: find the value at the end, count how often the test is true, and find the value just after a chosen pass.',
points:20,
skills:{end:'Value at the end',count:'How often the test is true',pass:'Value after a chosen pass'},
steps:[
 {skill:'end',say:'A loop can hold an if-statement. On every pass the loop runs the test first, and the indented line under the if runs only when the test is true. This program adds i to total only when i is even.',eq:'for i from 1 to 6: if i is even, add i to total',pic:pic(EVEN)},
 {skill:'end',say:'Trace it one pass at a time. When i is 1, 3 or 5 the test is false and nothing happens. When i is 2, 4 and 6 the test is true, so total ends at 2 + 4 + 6 = 12.',eq:'0 + 2 + 4 + 6 = 12',pic:{t:'setups',title:'Tracing the even-number loop',head:'i',rows:[['i is even?','no','yes','no','yes','no','yes'],['total after','0','2','2','6','6','12']],cols:['1','2','3','4','5','6']},
  check:{prompt:`Try it: ${lc(words(TA))} What is total at the end?`,answer:16,options:[16,28,12],hint:'Only the odd values of i are added: 1 + 3 + 5 + 7.',pic:pic(TA)}},
 {skill:'count',say:'To count how often the test is true, check every value of i, including the passes that change nothing. With i from 1 to 7 and the test i > 3, the test is true when i is 4, 5, 6 and 7: four times out of seven passes.',eq:'true for i = 4, 5, 6, 7',pic:pic(OVER3)},
 {skill:'count',say:'An if-statement can have an otherwise part, which runs on every pass where the test is false. Each pass runs exactly one of the two parts: here i = 1, 2 and 3 run the otherwise part and i = 4 and 5 run the if part, so the two counts add up to all five passes.',eq:'3 otherwise passes + 2 true passes = 5 passes',pic:pic(SPLIT),
  check:{prompt:`Try it: ${lc(words(TB))} How many times does the otherwise part run?`,answer:6,options:[6,3,9],hint:'The test is true for i = 3, 6 and 9. The otherwise part runs on every other pass.',pic:pic(TB)}},
 {skill:'pass',say:'To find the value just after a chosen pass, stop the trace there. In the even-number program total is 0 after the pass when i = 1, then 2, then still 2, and 6 just after the pass when i = 4.',eq:'i = 1: 0, i = 2: 2, i = 3: 2, i = 4: 6',pic:pic(EVEN)},
 {skill:'pass',say:'When i does not start at 1, the pass number and the value of i are different. For i from 2 to 8, the pass when i = 6 is the fifth pass, so trace five passes and keep the otherwise part in the trace as well.',pic:pic(TC),
  check:{prompt:`Try it: ${lc(words(TC))} What is total just after the pass when i = 6?`,answer:13,options:[13,7,20],hint:'Start at 5. i = 2 gives 4, i = 3 gives 3, i = 4 gives 2, i = 5 gives 7, and then comes i = 6.',pic:pic(TC)}}],
progression:{requires:['cs-e-loop-totals','cs-e-if-then-rules'],operations:3,demand:'Run a test on every pass of a loop, apply only the branch it picks, count the passes on each branch, and stop the trace at a chosen value of the loop counter.'},
items(add){
 /* Forty programs: eight ranges for i, five kinds of test, and four shapes of body (add i, add a number,
    either of those with an otherwise part). A program whose test is always true or always false is skipped,
    because then the if-statement changes nothing. */
 const RANGES=[[1,6],[1,8],[2,9],[3,10],[1,10],[4,12],[2,7],[5,11]],KINDS=['even','odd','gt','lt','mult'];
 RANGES.forEach(([a,b],r)=>KINDS.forEach((kind,c)=>{
  const k=kind==='gt'||kind==='lt'?a+Math.floor((b-a)/2)+((r+c)%3)-1:kind==='mult'?3+(r%2):undefined;
  const v=(r+c)%4,n=2+((r*3+c*5)%8),m=1+((r+c*2)%3);
  const P={a,b,test:k===undefined?[kind]:[kind,k],s:v===3?8+2*((r+c)%5):(r+c)%3?((r*2+c)%6)+1:0,
   then:v%2?{op:'add',n}:{op:'i'},other:v===2?{op:'add',n:m}:v===3?{op:'take',n:m}:null};
  let R=run(P);if(R.some(p=>p.t<0)){P.other={op:'add',n:m};R=run(P);}
  const hits=R.filter(p=>p.hit),lead=words(P);if(!hits.length||hits.length===R.length)return;
  add('end',`${lead} What is total at the end?`,R.at(-1).t,pic(P),`After each pass: ${trace(R)}.`);
  const other=P.other&&(r+c)%2===0,cnt=other?R.length-hits.length:hits.length;
  add('count',other?`${lead} How many times does the otherwise part run?`:`${lead} How many times is the test "${cond(P)}" true?`,cnt,pic(P),
   `The test "${cond(P)}" is true only for i = ${hits.map(p=>p.i).join(', ')}`+(other?`, so the otherwise part runs on the other ${cnt} of the ${R.length} passes.`:`: ${cnt} time${cnt===1?'':'s'}.`));
  const p=1+((r*2+c)%(R.length-2)),at=R[p];
  add('pass',`${lead} What is total just after the pass when i = ${at.i}?`,at.t,pic(P),`Stop after the pass when i = ${at.i}: ${trace(R.slice(0,p+1))}.`);}));
}
};
