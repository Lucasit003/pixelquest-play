// Original CS lesson. No fact table at all: a robot's grid is simulated one square at a time by the
// code below, so every planned square, every actual square, the bug step and the fix all come out of
// that simulation -- nothing here is a written-down, borderline fact.
const COLS='ABCDE',DIRV={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]},ORDER=['up','down','left','right'];
const sq=(c,r)=>COLS[c]+(r+1);
const startOf=s=>[COLS.indexOf(s[0]),Number(s.slice(1))-1];
const sim=(start,moves)=>{let c=start[0],r=start[1];const path=[];
 for(const m of moves){const [dc,dr]=DIRV[m];c+=dc;r+=dr;if(c<0||c>4||r<0||r>4)return null;path.push([c,r]);}
 return path;};
/* Builds one scenario: a start, a planned route of moves, and (when bugpos is given) one step of the
   actually-written program swapped for a different direction. Every square in planned and actual is
   checked to stay on the grid, so an invalid scenario is simply never produced. */
const scenario=(start,route,bugpos,wrong)=>{const s=startOf(start),planned=sim(s,route);if(!planned)return null;
 const actualMoves=bugpos==null?route:route.slice(0,bugpos).concat([wrong],route.slice(bugpos+1)),actual=sim(s,actualMoves);
 if(!actual)return null;
 return {start,c:s[0],r:s[1],route,planned,bugpos,correct:bugpos==null?null:route[bugpos],wrong,actualMoves,actual};};
const STARTS=['C3','C2','D3','B2','D4','B3'];
const ROUTES=[['right','right','down','down'],['down','left','up','left'],['left','up','right','up'],['up','right','down','right']];
const squareList=squares=>squares.map(p=>sq(p[0],p[1])).join(', ');
/* Every valid (start,route,bugpos) below is a real simulation: the wrong direction at bugpos is the
   first direction, in a rotation offset by the scenario itself, whose resulting program still keeps
   every square on the 5x5 grid. Bugpos and start/route pairs are plain nested loops, never a table. */
const SCENARIOS=[];
STARTS.forEach((S,si)=>ROUTES.forEach((R,ri)=>{
 R.forEach((correct,bp)=>{
  for(let k=1;k<4;k++){
   const alt=ORDER[(ORDER.indexOf(correct)+k+si+ri)%4];if(alt===correct)continue;
   const sc=scenario(S,R,bp,alt);if(!sc)continue;
   SCENARIOS.push(sc);break;
  }
 });
}));
const EX_RUN=scenario('A1',['right','right','down'],null,null);
const EX_BUG=scenario('A2',['right','down','right','up'],1,'left');
/* A separate scenario for the step-6 Try-it check only, so its answer is never shown by any earlier
   caption or picture (those still use EX_BUG). */
const EX_FIX=scenario('D4',['up','left','up','right'],2,'down');
export default {
id:"cs-e-find-the-bug",
subject:"cs",
level:3,
grade:3,
title:"Finding the bug",
goal:"Compare a written program to its planned route, find the one step that sends a robot off course, and say what that step should have been.",
standard:"CSTA 1B-AP-15: test and debug a program",
points:20,
skills:{"run":"Where the program ends","bug":"Find the wrong step","fix":"Say what it should be"},
steps:[
{skill:"run",say:"A robot moves on a 5x5 grid: columns A to E across, rows 1 to 5 down from the top, north up. A program is a list of single-square moves, up, down, left or right, done one at a time in order, starting from the robot's square.",pic:[{t:"gridmap",start:[EX_RUN.c,EX_RUN.r]}]},
{skill:"run",say:"To find where a program ends, start at the robot's square and apply each move in turn. Starting at "+EX_RUN.start+", the program right, right, down lands on "+squareList(EX_RUN.planned)+" in order, so it ends on "+sq(EX_RUN.planned[2][0],EX_RUN.planned[2][1])+".",pic:[{t:"gridmap",marks:EX_RUN.planned.map((p,i)=>({at:p,symbol:i===EX_RUN.planned.length-1?'square':'circle'})),start:[EX_RUN.c,EX_RUN.r],key:[{symbol:'square',name:'square after the last step'}]}],check:{prompt:"A robot starts at B1. The program moves it: down, right, right. Which square does it end on?",answer:sq(sim(startOf('B1'),['down','right','right'])[2][0],sim(startOf('B1'),['down','right','right'])[2][1]),options:[sq(sim(startOf('B1'),['down','right','right'])[2][0],sim(startOf('B1'),['down','right','right'])[2][1]),"B1","C1"],hint:"Apply each move in order, starting at B1.",pic:{t:"gridmap",start:[1,0]}}},
{skill:"bug",say:"A plan gives the PLANNED route: the square the robot should land on after each step. The PROGRAM actually written is a separate list of moves, and Oakhaven's robots sometimes have exactly one wrong step in that list.",pic:[{t:"program",title:"Planned route from "+EX_BUG.start,lines:EX_BUG.planned.map((p,i)=>`${i+1}. land on ${sq(p[0],p[1])}`)}]},
{skill:"bug",say:"Compare the program's landing squares to the planned route, step by step, from the start. Every step before the bug still lands on its planned square. The bug step lands somewhere else, and because every later step moves from that wrong square, every step after the bug also lands off the plan.",pic:[{t:"program",title:"Program actually written from "+EX_BUG.start,lines:EX_BUG.actualMoves.map((m,i)=>`${i+1}. move ${m}`)}],check:{prompt:"A robot starts at "+EX_BUG.start+". The planned route lands it on "+squareList(EX_BUG.planned)+" in order. The program written moves it: "+EX_BUG.actualMoves.join(', ')+". Which step number first sends the robot off the planned route?",answer:EX_BUG.bugpos+1,options:[EX_BUG.bugpos,EX_BUG.bugpos+1,EX_BUG.bugpos+2].filter(n=>n>=1&&n<=EX_BUG.route.length),hint:"Follow the program from "+EX_BUG.start+" and compare each landing square to the planned route.",pic:{t:"gridmap",start:[EX_BUG.c,EX_BUG.r]}}},
{skill:"fix",say:"To fix a bug, change only the wrong step to the direction the plan needed, and leave every other step exactly as written. Here step "+(EX_BUG.bugpos+1)+" was written as "+EX_BUG.wrong+", but the plan needed the robot to move "+EX_BUG.correct+" to reach "+sq(EX_BUG.planned[EX_BUG.bugpos][0],EX_BUG.planned[EX_BUG.bugpos][1])+".",pic:[{t:"program",title:"Fixed program from "+EX_BUG.start,lines:EX_BUG.route.map((m,i)=>`${i+1}. move ${m}`)}]},
{skill:"fix",say:"Once every step matches the square it should land on, running the fixed program follows the planned route exactly, step after step.",pic:[{t:"gridmap",marks:EX_BUG.planned.map(p=>({at:p,symbol:'circle'})),start:[EX_BUG.c,EX_BUG.r]}],check:{prompt:"A robot starts at "+EX_FIX.start+". The planned route lands it on "+squareList(EX_FIX.planned)+" in order. The program written moves it: "+EX_FIX.actualMoves.join(', ')+". Step "+(EX_FIX.bugpos+1)+" is the bug. What should step "+(EX_FIX.bugpos+1)+" be instead: up, down, left or right?",answer:EX_FIX.correct,options:ORDER,hint:"From "+sq(EX_FIX.planned[EX_FIX.bugpos-1]?.[0]??EX_FIX.c,EX_FIX.planned[EX_FIX.bugpos-1]?.[1]??EX_FIX.r)+", which single move reaches "+sq(EX_FIX.planned[EX_FIX.bugpos][0],EX_FIX.planned[EX_FIX.bugpos][1])+"?",pic:{t:"gridmap",start:[EX_FIX.c,EX_FIX.r]}}}],
progression:{requires:["cs-e-steps-in-order","cs-e-lists"],operations:3,demand:"Simulate a program of moves square by square, compare it to a stated planned route to find the single step that first disagrees, and name the direction that step should have been."},
items(add){
 SCENARIOS.forEach(sc=>{
  const routeText=squareList(sc.planned),programText=sc.actualMoves.map((m,i)=>`step ${i+1}: ${m}`).join(', '),
   pic={t:'gridmap',start:[sc.c,sc.r]},
   lead=`A robot on a 5x5 grid (columns A-E, rows 1-5 from the top, north up) starts at ${sc.start}. The planned route lands it on these squares in order: ${routeText}. The program actually written is: ${programText}. `,
   finalSquare=sq(sc.actual[sc.actual.length-1][0],sc.actual[sc.actual.length-1][1]);
  add('run',lead+'Follow the program exactly as written. Which square does the robot end on?',finalSquare,pic,`Applying every written move in order from ${sc.start} lands on ${finalSquare}.`);
  add('bug',lead+'The program has exactly one step that does not match the planned route. Which step number first sends the robot off the planned route?',String(sc.bugpos+1),pic,`Steps before step ${sc.bugpos+1} still land on the planned squares; step ${sc.bugpos+1} moves ${sc.wrong} instead of ${sc.correct}, so it is the first to land off the plan.`,[`step ${sc.bugpos+1}`,`step number ${sc.bugpos+1}`,`no. ${sc.bugpos+1}`,`number ${sc.bugpos+1}`]);
  add('fix',lead+`Step ${sc.bugpos+1} was written as ${sc.wrong}. What should step ${sc.bugpos+1} be instead: up, down, left or right?`,sc.correct,pic,`The planned route needs the robot on ${sq(sc.planned[sc.bugpos][0],sc.planned[sc.bugpos][1])} after step ${sc.bugpos+1}, which takes moving ${sc.correct}.`);
 });
}
};
