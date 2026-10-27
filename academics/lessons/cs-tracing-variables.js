// Original computer science lesson. Each program is run here, line by line, so every traced value and every fix is computed.
// Only add, subtract and double are used, and no value goes below zero, so a grade 4 learner can trace it by hand.
const OPS=[['add',n=>x=>x+n,n=>`add ${n} to score`],['sub',n=>x=>x-n,n=>`take ${n} away from score`],['dbl',()=>x=>x*2,()=>'double score']];
const run=(start,prog)=>prog.reduce((v,[o,n])=>[...v,OPS.find(p=>p[0]===o)[1](n)(v[v.length-1])],[start]);
const lines=(start,prog)=>[`1. set score to ${start}`,...prog.map(([o,n],i)=>`${i+2}. ${OPS.find(p=>p[0]===o)[2](n)}`)];
export default {
id:"cs-e-tracing-variables",
subject:"cs",
level:3,
grade:4,
title:"Tracing a variable",
goal:"Follow a variable through a program line by line, find its value at any line, and fix a line that gives the wrong result.",
standard:"CSTA 1B-AP-09 and 1B-AP-15: use variables; test and debug a program",
points:20,
skills:{"trace":"Trace to the end","line":"Value after a line","debug":"Fix the wrong line"},
steps:[{"skill":"trace","say":"A variable is a named box that holds a value. This program has a variable called score. Line 1 puts 5 in the box.","pic":{"t":"program","title":"Program","lines":["1. set score to 5","2. add 3 to score","3. double score"]}},
{"skill":"trace","say":"Run the lines in order and keep track of the box. After line 1, score is 5. Line 2 adds 3: score is 8. Line 3 doubles it: score is 16.","pic":{"t":"program","title":"Trace: 5, then 8, then 16","lines":["1. set score to 5  → score = 5","2. add 3 to score  → score = 8","3. double score  → score = 16"]},"check":{"prompt":"A program sets score to 4, then adds 6 to score, then takes 3 away from score. What is score at the end?","answer":7,"options":[7,13,10],"hint":"4, then 10, then 7.","pic":{"t":"program","title":"Program","lines":["1. set score to 4","2. add 6 to score","3. take 3 away from score"]}}},
{"skill":"line","say":"Each line changes the box, so the value depends on where you stop. To find score after line 3, run lines 1, 2 and 3 only.","pic":{"t":"program","title":"Stop after line 3","lines":["1. set score to 2","2. double score","3. add 5 to score","4. double score"]}},
{"skill":"line","say":"Order matters. Adding 5 then doubling gives a different result from doubling then adding 5. Trace the lines exactly as written.","pic":{"t":"program","title":"Order matters","lines":["set score to 2, add 5, double → 14","set score to 2, double, add 5 → 9"]},"check":{"prompt":"A program: line 1 sets score to 2, line 2 doubles score, line 3 adds 5 to score, line 4 doubles score. What is score after line 3?","answer":9,"options":[9,18,14],"hint":"Stop after line 3: 2, 4, 9.","pic":{"t":"program","title":"Program","lines":["1. set score to 2","2. double score","3. add 5 to score","4. double score"]}}},
{"skill":"debug","say":"A bug is a mistake that makes a program give the wrong result. If you know what the answer should be, you can work backwards to find what one line should say.","pic":{"t":"program","title":"Should end at 20","lines":["1. set score to 3","2. add 4 to score","3. double score"]}},
{"skill":"debug","say":"This program ends at 14, but it should end at 20. Work back: before doubling, score must be 10. Score was 3, so line 2 should add 7, not 4.","pic":{"t":"program","title":"Fix line 2","lines":["1. set score to 3","2. add 7 to score  (was: add 4)","3. double score  → 20"]},"check":{"prompt":"A program sets score to 6, then adds a number to score, then doubles score. It should end at 22. What number should line 2 add?","answer":5,"options":[5,8,16],"hint":"Before doubling, score must be 11. From 6, add 5.","pic":{"t":"program","title":"Program","lines":["1. set score to 6","2. add ? to score","3. double score"]}}}],
progression:{"requires":["cs-e-counting-loops","cs-e-rule-machine"],"operations":3,"demand":"Hold a changing value through several lines, stop at a chosen line, and undo later lines to repair an earlier one."},
items(add){
 const SHAPES=[['add','dbl','sub'],['dbl','add','dbl'],['add','sub','dbl'],['sub','dbl','add'],['dbl','sub','add','dbl'],['add','dbl','add','sub']];
 for(let s=0;s<SHAPES.length;s++)for(let k=0;k<8;k++){const start=2+((s*5+k*3)%9),prog=SHAPES[s].map((o,i)=>[o,o==='dbl'?0:1+((s*3+k*7+i*5)%8)]),vals=run(start,prog);
  if(vals.some(v=>v<0))continue;const text=lines(start,prog),pic={t:'program',title:'Program',lines:text},listing='Program: '+text.join('; ')+'. ';
  add('trace',listing+'What is score at the end?',vals[vals.length-1],pic,'Trace: '+vals.join(', ')+'.');
  const stop=2+(k%(prog.length-1));add('line',listing+`What is score after line ${stop}?`,vals[stop-1],pic,`Run lines 1 to ${stop} only: ${vals.slice(0,stop).join(', ')}.`);
  /* Debug: an add line has the wrong number. Undo the later lines from the target to find what it should add. */
  const i=prog.findIndex(p=>p[0]==='add');if(i<0)continue;const fixN=1+((s+k*3)%9);if(fixN===prog[i][1])continue;
  const good=prog.map((p,j)=>j===i?['add',fixN]:p),target=run(start,good).at(-1);
  if(run(start,good).some(v=>v<0))continue;
  add('debug',listing+`It should end at ${target}, but it ends at ${vals.at(-1)}. The number in line ${i+2} is wrong. What number should line ${i+2} add?`,fixN,pic,`Work back from ${target} through the lines after line ${i+2}, then subtract the value before it.`);
 }
}
};
