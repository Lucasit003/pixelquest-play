// Middle School topic (Grade 7, CSTA 2-AP-12): while loops. Every answer comes from running the program in
// its own question here: the condition is tested before every pass, the body's lines run in order on each
// pass that finds it true, and the loop ends at the first test that is false. The questions ask how many
// times the body runs, what a variable holds when the loop ends (often past the limit), and how doubling or
// halving reaches a limit. Every halving divides an even number, so every value stays whole, and no value
// ever goes below zero. Each prompt describes its program in words, and its picture lists the same program.
const OPS={'<':(a,b)=>a<b,'>':(a,b)=>a>b,'≤':(a,b)=>a<=b,'≥':(a,b)=>a>=b};
const val=(e,x)=>typeof x==='number'?x:e[x];
const DO={add:(e,s)=>{e[s.to]+=val(e,s.x);},take:(e,s)=>{e[s.to]-=val(e,s.x);},double:(e,s)=>{e[s.to]*=2;},half:(e,s)=>{e[s.to]/=2;}};
const code=s=>s.op==='add'?`add ${s.x} to ${s.to}`:s.op==='take'?`take ${s.x} away from ${s.to}`:`set ${s.to} to ${s.to} ${s.op==='double'?'× 2':'÷ 2'}`;
const said=s=>s.op==='add'?`adds ${s.x} to ${s.to}`:s.op==='take'?`takes ${s.x} away from ${s.to}`:`sets ${s.to} to ${s.to} ${s.op==='double'?'× 2':'÷ 2'}`;
const and=a=>a.length<2?a.join(''):`${a.slice(0,-1).join(', ')} and ${a.at(-1)}`;
/* A program: {init:[[name,value]], v op w (the condition; w is a number or a name), body:[statements]}. */
const cond=P=>`${P.v} ${P.op} ${P.w}`;
const lines=P=>[...P.init.map(([k,v])=>`set ${k} to ${v}`),`while ${cond(P)}:`,...P.body.map(s=>`    ${code(s)}`)].map((l,i)=>`${i+1}. ${l}`);
const words=P=>`A program sets ${and(P.init.map(([k,v])=>`${k} to ${v}`))}. Then, while ${cond(P)}, it ${and(P.body.map(said))}.`;
const run=P=>{const e=Object.fromEntries(P.init),trace=[{...e}];
 while(OPS[P.op](e[P.v],val(e,P.w))){for(const s of P.body)DO[s.op](e,s);trace.push({...e});if(trace.length>60)throw new Error(`runs on: ${words(P)}`);}
 return {env:e,trace,passes:trace.length-1};};
const pic=P=>({t:'program',title:'Program',lines:lines(P)});
const lc=s=>s.replace(/^A /,'a ');
const RUNS='How many times does the loop body run?',END=v=>`What is ${v} when the loop ends?`;
/* The values the condition is tested on, in order: one variable, or the pair when it compares two. */
const seen=(P,R)=>R.trace.map(e=>typeof P.w==='number'?`${e[P.v]}`:`(${e[P.v]}, ${e[P.w]})`).join(', ');
const tested=P=>typeof P.w==='number'?P.v:`(${P.v}, ${P.w})`;
const why=(P,R)=>R.passes?`At each test ${tested(P)} is ${seen(P,R)}. The test ${cond(P)} is true ${R.passes} time${R.passes===1?'':'s'} and false at the last value, so the body runs ${R.passes} time${R.passes===1?'':'s'}.`:`${cond(P)} is false at the very first test, so the body never runs.`;
const ok=R=>R.trace.every(e=>Object.values(e).every(v=>Number.isInteger(v)&&v>=0&&v<=5000));
/* The lesson's examples and the three Try-its (the Try-it programs are kept out of the pool). */
const EX1={init:[['x',20]],v:'x',op:'>',w:5,body:[{op:'take',x:4,to:'x'}]};
const EX0={init:[['x',3]],v:'x',op:'>',w:5,body:[{op:'take',x:4,to:'x'}]};
const EX2={init:[['score',3]],v:'score',op:'<',w:20,body:[{op:'add',x:6,to:'score'}]};
const EX3={init:[['a',2],['b',20]],v:'a',op:'<',w:'b',body:[{op:'add',x:3,to:'a'},{op:'take',x:1,to:'b'}]};
const EX4={init:[['n',3]],v:'n',op:'<',w:100,body:[{op:'double',to:'n'}]};
const EX5={init:[['n',96]],v:'n',op:'>',w:5,body:[{op:'half',to:'n'}]};
const TA={init:[['fuel',40]],v:'fuel',op:'>',w:9,body:[{op:'take',x:6,to:'fuel'}]};
const TB={init:[['a',1],['b',30]],v:'a',op:'<',w:'b',body:[{op:'add',x:4,to:'a'},{op:'take',x:2,to:'b'}]};
const TC={init:[['n',5]],v:'n',op:'<',w:150,body:[{op:'double',to:'n'}]};
const SKIP=new Set([`${words(TA)} ${RUNS}`,`${words(TB)} ${END('a')}`,`${words(TC)} ${END('n')}`]);
export default {
id:'cs-m-while-loops',subject:'cs',level:4,grade:7,standard:'CSTA 2-AP-12',
title:'While loops',
goal:'Trace a while loop: count how many times its body runs, find what its variables hold when it ends, and follow doubling and halving up to a limit.',
points:20,
skills:{runs:'How many times it runs',final:'Values when it ends',limit:'Doubling and halving to a limit'},
steps:[
 {skill:'runs',say:'A while loop repeats the lines indented under it for as long as its condition is true. It tests the condition before every pass, so it suits jobs where you do not know in advance how many passes it will take. This loop takes 4 away from x while x > 5.',eq:'while x > 5: take 4 away from x',pic:pic(EX1)},
 {skill:'runs',say:'Trace it with a table. x is 20, 16, 12 and 8 at the four tests that are true, so the body runs 4 times. At the fifth test x is 4, the condition is false, and the loop ends. The test always runs one more time than the body.',eq:'4 true tests, then 1 false test',pic:{t:'setups',title:'Tracing while x > 5',head:'test',rows:[['x at the test','20','16','12','8','4'],['x > 5','true','true','true','true','false']],cols:['1','2','3','4','5']},
  check:{prompt:`Try it: ${lc(words(TA))} ${RUNS}`,answer:6,options:[6,5,7],hint:'Write fuel at each test: 40, 34, 28, and so on. Count the values that are more than 9.',pic:pic(TA)}},
 {skill:'runs',say:'If the condition is false the first time it is tested, the body runs 0 times. Here x starts at 3, so x > 5 is false at once and the indented line never runs. If the body never moved x towards the limit, the loop would never end, which is a bug.',eq:'3 > 5 is false: 0 passes',pic:pic(EX0)},
 {skill:'final',say:'A while loop ends at the first value that makes its condition false, and that value is often past the limit. score goes 3, 9, 15, 21, and the test score < 20 first fails at 21, so score ends at 21, not 20.',eq:'3, 9, 15, 21: ends at 21',pic:pic(EX2)},
 {skill:'final',say:'When the body changes two variables, run every line of the body in order, then test again. Here a goes up by 3 and b goes down by 1 on each pass. After 5 passes a is 17 and b is 15, so a < b is false and the loop ends.',eq:'(2, 20), (5, 19), (8, 18), (11, 17), (14, 16), (17, 15)',pic:pic(EX3),
  check:{prompt:`Try it: ${lc(words(TB))} ${END('a')}`,answer:21,options:[21,17,25],hint:'Track the pair (a, b) at each test: (1, 30), (5, 28), and so on. Stop at the first pair where a is not less than b.',pic:pic(TB)}},
 {skill:'limit',say:'Doubling grows fast. Starting at 3 and doubling while n < 100 gives 6, 12, 24, 48, 96 and then 192, the first value that is not less than 100. That is 6 passes, and n ends at 192.',eq:'3, 6, 12, 24, 48, 96, 192',pic:pic(EX4)},
 {skill:'limit',say:'Halving works the other way. 96 halves to 48, 24, 12, 6 and 3, and 3 is the first value that is not more than 5, so the loop ends after 5 passes. Every pass here halves an even number, so the values stay whole.',eq:'96, 48, 24, 12, 6, 3',pic:pic(EX5),
  check:{prompt:`Try it: ${lc(words(TC))} ${END('n')}`,answer:160,options:[160,80,150],hint:'Keep doubling 5 until a value is no longer less than 150. That value is where n ends.',pic:pic(TC)}}],
progression:{requires:['cs-m-loops-conditions','cs-e-loop-totals'],operations:3,demand:'Test a condition before every pass, run a body of one or two changes in order, stop at the first false test, and see doubling and halving cross a limit.'},
items(add){
 const done=new Set(SKIP);
 const A=(skill,P,ask,answer,explain)=>{const p=`${words(P)} ${ask}`;if(done.has(p))return false;done.add(p);add(skill,p,answer,pic(P),explain);return true;};
 const good=(P,lo,hi)=>{let R;try{R=run(P);}catch{return null;}return ok(R)&&R.passes>=lo&&R.passes<=hi?R:null;};
 /* How many times it runs: counting down, counting up, two variables meeting, and a total whose step grows. */
 const NAMES=['x','fuel','health','coins','energy','n'];
 for(let i=0;i<16;i++){const d=3+(i%7),S=31+6*i+(i%4)*3,L=d+((i*5)%9),v=NAMES[i%6],P={init:[[v,S]],v,op:i%2?'>':'≥',w:L,body:[{op:'take',x:d,to:v}]},R=good(P,2,12);
  if(R)A('runs',P,RUNS,R.passes,why(P,R));}
 for(let i=0;i<10;i++){const d=4+(i%5),S=2+((i*3)%7),L=30+9*i,v=['score','x','steps','gems'][i%4],P={init:[[v,S]],v,op:i%3?'<':'≤',w:L,body:[{op:'add',x:d,to:v}]},R=good(P,2,12);
  if(R)A('runs',P,RUNS,R.passes,why(P,R));}
 for(let i=0;i<12;i++){const p=2+(i%4),q=1+((i*2)%3),B=24+5*i,a0=1+(i%3),P={init:[['a',a0],['b',B]],v:'a',op:i%2?'<':'≤',w:'b',body:[{op:'add',x:p,to:'a'},{op:'take',x:q,to:'b'}]},R=good(P,2,12);
  if(R)A('runs',P,RUNS,R.passes,why(P,R));}
 for(let i=0;i<8;i++){const k0=1+(i%3),s=1+(i%2),L=18+7*i,P={init:[['total',0],['k',k0]],v:'total',op:'<',w:L,body:[{op:'add',x:'k',to:'total'},{op:'add',x:s,to:'k'}]},R=good(P,2,12);
  if(R)A('runs',P,RUNS,R.passes,why(P,R));}
 /* Three loops whose condition is false at the first test, so the body runs 0 times. */
 for(const [v,S,op,L,d] of [['x',4,'>',9,2],['lives',12,'<',10,3],['n',0,'≥',1,5]]){const body=[{op:op==='<'?'add':'take',x:d,to:v}],P={init:[[v,S]],v,op,w:L,body},R=good(P,0,0);
  if(R)A('runs',P,RUNS,0,why(P,R));}
 /* Values when it ends: one variable past its limit, a counter beside it, two variables, and a growing total. */
 for(let i=0;i<12;i++){const up=i%2===0,d=3+((i*3)%7),v=['score','x','height','time','depth'][i%5];
  const P=up?{init:[[v,1+(i%5)]],v,op:i%4?'<':'≤',w:25+6*i,body:[{op:'add',x:d,to:v}]}:{init:[[v,40+5*i]],v,op:'>',w:4+(i%6),body:[{op:'take',x:d,to:v}]},R=good(P,2,12);
  if(R)A('final',P,END(v),R.env[v],`${why(P,R)} So ${v} ends at ${R.env[v]}.`);}
 for(let i=0;i<12;i++){const d=2+(i%6),v=['x','water','miles','points','n'][i%5],P={init:[[v,3+((i*4)%9)],['count',0]],v,op:i%2?'<':'≤',w:20+4*i,body:[{op:'add',x:d,to:v},{op:'add',x:1,to:'count'}]},R=good(P,2,12),ask=i%2?'count':v;
  if(R)A('final',P,END(ask),R.env[ask],`${why(P,R)} So ${ask} ends at ${R.env[ask]}.`);}
 for(let i=0;i<12;i++){const p=2+((i+1)%4),q=1+(i%3),P={init:[['a',(i*2)%5],['b',20+6*i]],v:'a',op:i%3?'<':'≤',w:'b',body:[{op:'add',x:p,to:'a'},{op:'take',x:q,to:'b'}]},R=good(P,2,12),ask=i%2?'b':'a';
  if(R)A('final',P,END(ask),R.env[ask],`${why(P,R)} So ${ask} ends at ${R.env[ask]}.`);}
 for(let i=0;i<10;i++){const k0=1+((i+1)%3),s=1+((i+1)%2),P={init:[['total',(i%3)*2],['k',k0]],v:'total',op:i%2?'<':'≤',w:15+8*i,body:[{op:'add',x:'k',to:'total'},{op:'add',x:s,to:'k'}]},R=good(P,2,12),ask=i%3===1?'k':'total';
  if(R)A('final',P,END(ask),R.env[ask],`${why(P,R)} So ${ask} ends at ${R.env[ask]}.`);}
 /* Doubling up to a limit, and halving an even start down to a limit. */
 for(let i=0;i<12;i++){const s=[1,2,3,5,7,9,11,4,6,13,15,25][i],L=[50,40,100,90,200,300,120,64,500,1000,250,800][i],v=['n','cells','x','views'][i%4],P={init:[[v,s]],v,op:i%3===2?'≤':'<',w:L,body:[{op:'double',to:v}]},R=good(P,2,12);
  if(!R)continue;
  A('limit',P,RUNS,R.passes,`${v} doubles: ${seen(P,R)}. ${why(P,R).replace(/^At each test.*?\. /,'')}`);
  A('limit',P,END(v),R.env[v],`${v} doubles: ${seen(P,R)}. ${R.env[v]} is the first value where ${cond(P)} is false, so ${v} ends at ${R.env[v]}.`);}
 for(let i=0;i<12;i++){const c=[3,5,1,7,3,9,5,11,1,3,7,15][i],m=[5,4,7,3,6,3,5,2,8,4,4,3][i],L=[5,8,3,10,4,12,9,15,2,6,10,20][i],v=['n','size','x','pile'][i%4];
  const P={init:[[v,c*2**m]],v,op:i%3===1?'≥':'>',w:L,body:[{op:'half',to:v}]},R=good(P,2,12);
  if(!R)continue;
  A('limit',P,RUNS,R.passes,`${v} halves: ${seen(P,R)}. ${why(P,R).replace(/^At each test.*?\. /,'')}`);
  A('limit',P,END(v),R.env[v],`${v} halves: ${seen(P,R)}. ${R.env[v]} is the first value where ${cond(P)} is false, so ${v} ends at ${R.env[v]}.`);}
}
};
