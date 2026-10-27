// High School course unit (docs/design/COURSES.md, docs/design/COURSE_QUALITY.md): Math 1, Unit 4, Linear Inequalities,
// written to the Common Core integrated pathway's Math I standards (A-REI.3, A-CED.1, A-CED.3, A-REI.12); our own wording
// and questions. An inequality is solved like an equation, except that multiplying or dividing both sides by a negative
// number reverses its sign; an open dot on a number line leaves its number out (< or >) and a closed dot keeps it (≤ or
// ≥); "and" needs both conditions, "or" either one; a two-variable inequality is the half-plane on one side of its line,
// dashed for < or > and solid for ≤ or ≥, and a system's solutions are where the half-planes overlap. Every inequality is
// built from its boundary number, and every story's numbers are fictional.
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const num=v=>String(Math.round(v*1e6)/1e6);
const sgn=v=>v<0?`- ${num(-v)}`:`+ ${num(v)}`;
const co=(c,v='x')=>c===1?v:c===-1?`-${v}`:`${num(c)}${v}`;
const FLIP={'<':'>','>':'<','≤':'≥','≥':'≤'};
/* lettered choices, the right one moved to position k */
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
const YN={yes:['y'],no:['n']};
/* The three Try-it questions in pool form; the generator skips them. */
const TRY=['Solve -3x + 4 > 19. A: x < -5, B: x > -5, C: x < 5. Answer A, B or C.',
 'A fictional arcade charges a $4 entry fee and $1.50 for each game, and a player has $16. At most how many games can the player play?',
 'Which point is a solution of y > 2x - 4? A: (0, -5), B: (3, 1), C: (1, 0). Answer A, B or C.'];
const tryIt=s=>`Try it: ${s[0].toLowerCase()+s.slice(1)}`;
export default {
id:'math-h-math-1-linear-inequalities',subject:'math',level:5,grade:9,standard:'CCSS A-REI.3, A-CED.1, A-CED.3, A-REI.12',
title:'Linear inequalities',
goal:'Solve linear inequalities and compound inequalities, show them on a number line, write inequalities and constraints from situations, and graph two-variable inequalities and systems of them.',
points:20,
skills:{solve:'Solving inequalities',compound:'Compound inequalities',words:'Inequalities from situations',constraints:'Constraints',graph:'Graphing inequalities'},
outline:[['A-REI.3','Solve linear inequalities in one variable, including compound inequalities',['solve','compound']],['A-CED.1','Create inequalities from situations and solve them',['words']],
 ['A-CED.3','Represent constraints with inequalities and judge whether a plan works',['constraints']],['A-REI.12','Graph a two-variable inequality as a half-plane, and a system as the overlap',['graph']]],
steps:[
 {skill:'solve',say:'Solve an inequality like an equation, with one new rule: multiplying or dividing both sides by a negative number reverses the sign. For -3x + 5 ≤ 17, subtract 5 to get -3x ≤ 12, then divide by -3 and reverse: x ≥ -4. Check with a number that should work: x = 0 gives 5 ≤ 17, which is true.',eq:'-3x ≤ 12  →  x ≥ -4 (divided by a negative)',
  pic:{t:'board',title:'Solve -3x + 5 ≤ 17',lines:['-3x + 5 ≤ 17','-3x ≤ 12','x ≥ -4'],why:['','subtract 5','divide by -3 and reverse the sign'],box:true},
  check:{prompt:tryIt(TRY[0]),answer:'A',options:['A','B','C'],hint:'Subtract 4, then divide by -3 and reverse the sign.',pic:{t:'board',title:'-3x + 4 > 19',lines:['-3x + 4 > 19','-3x > 15'],why:['','subtract 4']}}},
 {skill:'solve',say:'Why does the sign flip? Multiplying by a negative number reflects every number across 0, so the order turns around. 2 is less than 5, but -2 is greater than -5, because -2 sits to the right of -5 on the number line.',
  pic:{t:'chart',kind:'numline',title:'Times -1 flips the order',axis:[-6,6],rows:[{label:'2 < 5',span:{from:2,to:5,closedFrom:true,closedTo:true}},{label:'-2 > -5',span:{from:-5,to:-2,closedFrom:true,closedTo:true}}]}},
 {skill:'solve',say:'On a number line, a closed dot means the number itself is included (≤ or ≥) and an open dot means it is left out (< or >); the arrow points toward all the other solutions. So x ≥ -4 is a closed dot at -4 with an arrow to the right, and x < 2 is an open dot at 2 with an arrow to the left.',
  pic:{t:'chart',kind:'numline',title:'Closed and open dots',axis:[-6,6],rows:[{label:'x ≥ -4',ray:{at:-4,dir:'right',closed:true}},{label:'x < 2',ray:{at:2,dir:'left',closed:false}}]}},
 {skill:'compound',say:'A compound inequality joins two conditions. "And" means both must hold: in -5 ≤ 3x + 1 < 10, subtract 1 from all three parts and divide all three by 3 to get -2 ≤ x < 3, the numbers between -2 and 3.',eq:'-5 ≤ 3x + 1 < 10  →  -2 ≤ x < 3',
  pic:{t:'board',title:'Solve -5 ≤ 3x + 1 < 10',lines:['-5 ≤ 3x + 1 < 10','-6 ≤ 3x < 9','-2 ≤ x < 3'],why:['','subtract 1 from all three parts','divide all three parts by 3'],box:true}},
 {skill:'compound',say:'On a number line, "and" is the stretch between the two ends: the integers in -2 ≤ x < 3 are -2, -1, 0, 1 and 2, but not 3. "Or" means either condition may hold, so x < -1 or x > 4 is two separate rays pointing away from each other.',
  pic:{t:'chart',kind:'numline',title:'"And" between, "or" outside',axis:[-6,6],rows:[{label:'-2 ≤ x < 3',span:{from:-2,to:3,closedFrom:true,closedTo:false},ints:true},{label:'x < -1 or x > 4',rays:[{at:-1,dir:'left',closed:false},{at:4,dir:'right',closed:false}]}]}},
 {skill:'words',say:'To write an inequality from a situation, look for limit words. "At most" and "no more than" mean ≤, "at least" and "no less than" mean ≥, "more than" means >, and "fewer than" or "less than" means <.',
  pic:{t:'board',title:'Limit words',lines:['at most, no more than:  ≤','at least, no less than:  ≥','more than:  >','fewer than, less than:  <'],why:[]}},
 {skill:'words',say:'A fictional fair charges a $7 entry fee and $4.25 a ride, and a visitor has $40. With r rides, 7 + 4.25r ≤ 40, so 4.25r ≤ 33 and r ≤ 7.76. Nobody can take part of a ride, so the most is 7 rides: round down when the limit says at most.',eq:'7 + 4.25r ≤ 40  →  r ≤ 7.76, so at most 7',
  pic:{t:'board',title:'A fictional fair: $40 to spend',lines:['7 + 4.25r ≤ 40','4.25r ≤ 33','r ≤ 7.76','at most 7 rides'],why:['fee + rides ≤ money','subtract 7','divide by 4.25','whole rides only'],box:true},
  check:{prompt:tryIt(TRY[1]),answer:8,options:[8,10,7],hint:'Write 4 + 1.5g ≤ 16 and solve for g.',pic:tab('A fictional arcade',[['entry fee','$4'],['per game','$1.50'],['money','$16']])}},
 {skill:'constraints',say:'Real plans often face several limits at once, called constraints. A fictional café has 90 minutes; a sandwich takes 3 minutes and a salad 2, and it can make at most 40 items. With s sandwiches and t salads: 3s + 2t ≤ 90 and s + t ≤ 40. Ten sandwiches and 30 salads take exactly 90 minutes and make 40 items, so that plan works.',
  pic:{t:'board',title:'A fictional café\'s constraints',lines:['3s + 2t ≤ 90','s + t ≤ 40','10 and 30: 30 + 60 = 90 ≤ 90','20 and 25: 60 + 50 = 110 > 90'],why:['minutes','items','works','too long']}},
 {skill:'constraints',say:'Graphing the constraints shows every plan at once. Each one keeps the side of its line that holds the origin, and the plans that meet them all form the shaded region where those sides overlap. The plan (10, 30) sits on its corner, while (20, 25) lies outside it.',
  pic:{t:'plot',title:'Plans that meet both limits',x:[0,40],y:[0,50],lines:[{m:-1.5,b:45,label:'3s + 2t = 90'},{m:-1,b:40,label:'s + t = 40'}],areas:[{pts:[[0,0],[30,0],[10,30],[0,40]],col:2}],points:[{x:10,y:30,label:'(10, 30)'},{x:20,y:25,label:'(20, 25)'}]}},
 {skill:'graph',say:'A two-variable inequality such as y > x - 2 holds on a half-plane. Draw the line y = x - 2, dashed because > leaves the line out (solid for ≤ or ≥), then test a point off the line: at (0, 0), 0 > -2 is true, so shade the side that holds the origin.',
  pic:{t:'plot',title:'y > x - 2',x:[-5,5],y:[-6,6],lines:[{m:1,b:-2,label:'y = x - 2',dash:true}],areas:[{pts:[[-6,-8],[6,4],[6,7],[-6,7]],edge:false}],points:[{x:0,y:0,label:'(0, 0)'}]},
  check:{prompt:tryIt(TRY[2]),answer:'C',options:['A','B','C'],hint:'Put each point in: is its y greater than 2x - 4?',pic:{t:'plot',title:'y > 2x - 4',x:[-2,5],y:[-6,6],lines:[{m:2,b:-4,label:'y = 2x - 4',dash:true}]}}},
 {skill:'graph',summary:true,say:'Putting Unit 4 together: solve an inequality as you would an equation, but reverse the sign when you multiply or divide by a negative; show it with open or closed dots; "and" keeps the numbers between, "or" keeps both rays; turn limit words into signs and round to whole items in a story; check a plan against every constraint; and graph y > mx + b as a dashed line with one side shaded. Traps: forgetting to reverse the sign, and rounding up when the limit says at most.',pic:tab('Unit 4 at a glance',[['negative multiply or divide','reverse the sign'],['open dot','< or >'],['closed dot','≤ or ≥'],['dashed line','< or >'],['system','where shadings overlap']],['Rule'])}],
progression:{requires:['math-h-math-1-expressions-equations-and-units','math-m-slope-lines'],operations:3,demand:'Solve multi-step inequalities, reversing the sign when needed, translate limits into inequalities and whole-number answers, and test points against lines and systems.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 /* solve: ax + b op c, and ax + b op dx + e, built from the boundary k; the wrong choices forget to reverse, or flip the sign of k */
 const ONE=[[2,-5,'>',4],[-2,5,'≤',-3],[3,7,'<',-2],[-4,-1,'≥',2],[5,2,'≤',3],[-3,-8,'<',-3],[6,-1,'≥',0.5],[-5,4,'>',-1],[4,9,'<',-1.5],[-2,-7,'≤',3],[7,-3,'>',2],[-6,5,'≥',-0.5],[3,-2,'≥',-4],[-1,6,'<',2],[2,3,'≤',6],[-4,10,'>',4]];
 ONE.forEach(([a,b,op,k],i)=>{const c=a*k+b,L=`${co(a)} ${sgn(b)}`,r=a<0?FLIP[op]:op,right=`x ${r} ${num(k)}`,wrong=[`x ${FLIP[r]} ${num(k)}`,`x ${r} ${num(k===0?1:-k)}`],ch=choose(right,wrong,i);
  put('solve',`Solve ${L} ${op} ${num(c)}. ${ch.text}. Answer A, B or C.`,ch.letter,tab('The inequality',[['inequality',`${L} ${op} ${num(c)}`]],['']),`${b<0?'Add':'Subtract'} ${num(Math.abs(b))}: ${co(a)} ${op} ${num(c-b)}. Divide by ${num(a)}${a<0?' and reverse the sign, because it is negative':''}: ${right}.`,[right]);});
 const TWO=[[5,-3,2,'<',4],[-3,8,1,'≥',2],[4,1,7,'>',-2],[2,-9,-4,'≤',1.5],[-1,5,3,'<',-1],[6,2,1,'≥',-3],[3,-5,5,'>',1],[-2,1,-5,'≤',-2]];
 TWO.forEach(([a,b,d,op,k],i)=>{const e=(a-d)*k+b,L=`${co(a)} ${sgn(b)}`,R=`${co(d)}${e?` ${sgn(e)}`:''}`,r=a-d<0?FLIP[op]:op,right=`x ${r} ${num(k)}`,ch=choose(right,[`x ${FLIP[r]} ${num(k)}`,`x ${r} ${num(-k)}`],i+1);
  put('solve',`Solve ${L} ${op} ${R}. ${ch.text}. Answer A, B or C.`,ch.letter,tab('The inequality',[['left',L],['right',R]]),`Gather the x terms on the left: ${co(a-d)} ${op} ${num(e-b)}. Divide by ${num(a-d)}${a-d<0?' and reverse the sign':''}: ${right}.`,[right]);});
 [['On a number line, how is x ≥ -2 drawn?','a closed dot at -2 with an arrow to the right',['an open dot at -2 with an arrow to the right','a closed dot at -2 with an arrow to the left'],'≥ includes -2, so the dot is closed (filled in). Greater than means the values to the right, so the arrow points right.'],
  ['On a number line, how is x < 5 drawn?','an open dot at 5 with an arrow to the left',['a closed dot at 5 with an arrow to the left','an open dot at 5 with an arrow to the right'],'< leaves 5 out, so the dot is open. Less than means the values to the left of 5, so the arrow points left.'],
  ['A number line shows a closed dot at 3 and an arrow to the left. Which inequality is it?','x ≤ 3',['x < 3','x ≥ 3'],'A closed dot means 3 is included, and an arrow to the left means smaller values, so x ≤ 3. The inequality x < 3 would need an open dot.'],
  ['A number line shows an open dot at -1 and an arrow to the right. Which inequality is it?','x > -1',['x ≥ -1','x < -1'],'An open dot means -1 is left out, and an arrow to the right means larger values, so x > -1. The inequality x ≥ -1 would need a closed dot.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+2);
  put('solve',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Number lines',[['open dot','left out: < or >'],['closed dot','included: ≤ or ≥']],['Means']),why||`The answer is ${right}.`,[right]);});
 /* compound: "and" inequalities solved through all three parts, integer counts, and "or" membership */
 const AND=[[-3,2,1,'<','≤',9],[1,-2,5,'≤','<',9],[-7,3,2,'<','<',11],[0,4,-4,'≤','≤',12],[-5,-1,1,'<','≤',4],[2,5,-3,'≤','<',22]];
 AND.forEach(([p,a,b,o1,o2,q],i)=>{const lo=(p-b)/a,hi=(q-b)/a,neg=a<0,L=neg?hi:lo,H=neg?lo:hi,oL=neg?o2:o1,oH=neg?o1:o2,mid=`${co(a)} ${sgn(b)}`;
  const right=`${num(L)} ${oL} x ${oH} ${num(H)}`,swap=s=>s==='<'?'≤':'<',ch=choose(right,[`${num(L)} ${swap(oL)} x ${swap(oH)} ${num(H)}`,`${num(L+1)} ${oL} x ${oH} ${num(H+1)}`],i);
  put('compound',`Solve ${p} ${o1} ${mid} ${o2} ${q}. ${ch.text}. Answer A, B or C.`,ch.letter,tab('The inequality',[['compound',`${p} ${o1} ${mid} ${o2} ${q}`]],['']),`${b<0?'Add':'Subtract'} ${num(Math.abs(b))} in all three parts, then divide by ${num(a)}${neg?' and reverse both signs':''}: ${right}.`,[right]);
  const ints=[];for(let x=Math.ceil(L-1);x<=Math.floor(H+1);x++){const okL=oL==='<'?x>L:x>=L,okH=oH==='<'?x<H:x<=H;if(okL&&okH)ints.push(x);}
  if(i<5)put('compound',`How many integers x satisfy ${p} ${o1} ${mid} ${o2} ${q}?`,ints.length,tab('The inequality',[['compound',`${p} ${o1} ${mid} ${o2} ${q}`]],['']),`It means ${right}: the integers ${ints.join(', ')}, which is ${ints.length}.`);});
 /* "or" inequalities: each part solved on its own, both rays kept */
 const half=(a,b,op,c)=>{const k=(c-b)/a;return {k,op:a<0?FLIP[op]:op,text:`${co(a)}${b?` ${sgn(b)}`:''} ${op} ${num(c)}`};};
 [[[2,-1,'<',-5],[3,2,'>',14]],[[-1,3,'>',5],[2,0,'≥',10]],[[3,1,'≤',-8],[-2,4,'<',-6]],[[4,-2,'<',2],[1,-3,'>',4]]].forEach(([p1,p2],i)=>{const A=half(...p1),B=half(...p2);
  const right=`x ${A.op} ${num(A.k)} or x ${B.op} ${num(B.k)}`,ch=choose(right,[`x ${FLIP[A.op]} ${num(A.k)} or x ${FLIP[B.op]} ${num(B.k)}`,`${num(A.k)} ${A.op==='<'||A.op==='>'?'<':'≤'} x ${B.op==='<'||B.op==='>'?'<':'≤'} ${num(B.k)}`],i+1);
  put('compound',`Solve ${A.text.replace(/ \+ 0 /,' ')} or ${B.text.replace(/ \+ 0 /,' ')}. ${ch.text}. Answer A, B or C.`,ch.letter,tab('An "or" inequality',[['first',A.text],['second',B.text]]),`Solve each part on its own${A.op!==p1[2]||B.op!==p2[2]?', reversing a sign where you divide by a negative':''}: ${right}. "Or" keeps both rays.`,[right]);});
 for(const [x,a,b] of [[7,-1,5],[2,-1,5],[-3,-1,5],[0,-4,6],[-5,-4,6],[6,-4,6]]){const ok=x<a||x>b;
  put('compound',`Is ${x} a solution of x < ${a} or x > ${b}? Answer yes or no.`,ok?'yes':'no',tab('An "or" inequality',[['x',`${x}`],['condition',`x < ${a} or x > ${b}`]]),`${x} ${ok?`is ${x<a?`less than ${a}`:`more than ${b}`}, and "or" needs only one condition`:`is neither less than ${a} nor more than ${b}`}: ${ok?'yes':'no'}.`,YN[ok?'yes':'no']);}
 /* words: the most or least whole number allowed by a limit */
 for(const [q,ineq,v] of [
  ['A fictional player has $50. The arcade charges a $5 fee and $6.25 for each game. At most how many games can the player play?','5 + 6.25g ≤ 50',7],
  ['A fictional elevator holds at most 1,200 kilograms. An 80-kilogram operator rides with boxes of 45 kilograms each. At most how many boxes can go up at once?','80 + 45b ≤ 1,200',24],
  ['A fictional student needs an average of at least 85 on five tests. The first four scores are 82, 90, 78 and 88. What is the lowest score the fifth test can have?','(82 + 90 + 78 + 88 + s) ÷ 5 ≥ 85',87],
  ['A fictional phone plan costs $15 plus $0.05 a minute, and the bill must stay at or below $40. At most how many minutes can be used?','15 + 0.05m ≤ 40',500],
  ['A fictional saver has $120 and adds $18 each week. After at least how many weeks will the savings be more than $500?','120 + 18w > 500',22],
  ['A fictional school club has $380 and makes $12 on each shirt it sells. It needs at least $2,000. At least how many shirts must it sell?','380 + 12s ≥ 2,000',135],
  ['A fictional garage charges $4 plus $2.50 for each whole hour, and a driver has $20. At most how many whole hours can the driver park?','4 + 2.5h ≤ 20',6],
  ['A fictional bridge allows at most 10,000 kilograms. A truck weighs 3,200 kilograms empty and carries crates of 85 kilograms. At most how many crates can it carry across?','3,200 + 85c ≤ 10,000',80],
  ['A fictional runner has run 12 kilometers this month and runs 4.5 kilometers a day. After at least how many more days will the month\'s total be more than 42 kilometers?','12 + 4.5d > 42',7],
  ['A fictional plant is 14 centimeters tall and grows 1.5 centimeters a week. After at least how many weeks will it be at least 32 centimeters tall?','14 + 1.5w ≥ 32',12],
  ['A fictional club has $300. The hall costs $120 and snacks cost $4.50 a person. At most how many people can come?','120 + 4.5p ≤ 300',40],
  ['After a fictional power cut, a freezer at -18 °C warms 2.5 °C each hour. For at most how many whole hours does it stay below 4 °C?','-18 + 2.5h < 4',8],
  ['A fictional print shop charges $3 to set up plus $0.08 a page, and the budget is $15. At most how many pages can be printed?','3 + 0.08p ≤ 15',150],
  ['A fictional van seats at most 12 people. The driver and 2 helpers ride along. At most how many students can ride?','3 + s ≤ 12',9],
  ['A fictional jar holds at most 3 liters, and water is poured in by cups of 0.25 liters. At most how many full cups fit?','0.25c ≤ 3',12],
  ['A fictional seller makes $7.50 on each bracelet and wants to make more than $90. At least how many bracelets must the seller sell?','7.5b > 90',13],
  ['A fictional swimmer has swum 800 meters and swims laps of 50 meters. At least how many more laps will make at least 2,000 meters?','800 + 50l ≥ 2,000',24]])
  put('words',q,v,tab('The inequality',[['inequality',ineq]],['']),`Write ${ineq} and solve it; since only whole numbers make sense here, the answer is ${v}.`);
 /* constraints: does a plan meet every limit? */
 for(const [q,ok,why] of [
  ['A fictional bakery has 150 minutes. A muffin takes 2 minutes and a cookie 1 minute, and it can bake at most 100 items. Can it bake 40 muffins and 60 cookies? Answer yes or no.','yes','2 × 40 + 60 = 140 ≤ 150 minutes and 40 + 60 = 100 ≤ 100 items'],
  ['A fictional bakery has 150 minutes. A muffin takes 2 minutes and a cookie 1 minute, and it can bake at most 100 items. Can it bake 60 muffins and 40 cookies? Answer yes or no.','no','2 × 60 + 40 = 160 minutes, more than 150'],
  ['A fictional bakery has 150 minutes. A muffin takes 2 minutes and a cookie 1 minute, and it can bake at most 100 items. Can it bake 50 muffins and 50 cookies? Answer yes or no.','yes','2 × 50 + 50 = 150 ≤ 150 minutes and 50 + 50 = 100 ≤ 100 items'],
  ['A fictional bakery has 150 minutes. A muffin takes 2 minutes and a cookie 1 minute, and it can bake at most 100 items. Can it bake 30 muffins and 75 cookies? Answer yes or no.','no','30 + 75 = 105 items, more than 100'],
  ['A fictional farmer has at most 80 acres and $20,000. Corn costs $300 an acre and wheat $200 an acre. Can the farmer plant 40 acres of corn and 30 of wheat? Answer yes or no.','yes','40 + 30 = 70 ≤ 80 acres and 300 × 40 + 200 × 30 = $18,000 ≤ $20,000'],
  ['A fictional farmer has at most 80 acres and $20,000. Corn costs $300 an acre and wheat $200 an acre. Can the farmer plant 50 acres of corn and 30 of wheat? Answer yes or no.','no','300 × 50 + 200 × 30 = $21,000, more than $20,000'],
  ['A fictional farmer has at most 80 acres and $20,000. Corn costs $300 an acre and wheat $200 an acre. Can the farmer plant 20 acres of corn and 60 of wheat? Answer yes or no.','yes','20 + 60 = 80 ≤ 80 acres and 300 × 20 + 200 × 60 = $18,000 ≤ $20,000'],
  ['A fictional farmer has at most 80 acres and $20,000. Corn costs $300 an acre and wheat $200 an acre. Can the farmer plant 60 acres of corn and 10 of wheat? Answer yes or no.','yes','60 + 10 = 70 ≤ 80 acres and 300 × 60 + 200 × 10 = $20,000 ≤ $20,000'],
  ['A fictional theater must sell at least 200 tickets and take in at least $2,000. Adult tickets cost $12 and student tickets $8. Do 100 adult and 100 student tickets meet both goals? Answer yes or no.','yes','100 + 100 = 200 ≥ 200 tickets and 12 × 100 + 8 × 100 = $2,000 ≥ $2,000'],
  ['A fictional theater must sell at least 200 tickets and take in at least $2,000. Adult tickets cost $12 and student tickets $8. Do 150 adult and 40 student tickets meet both goals? Answer yes or no.','no','150 + 40 = 190 tickets, fewer than 200'],
  ['A fictional theater must sell at least 200 tickets and take in at least $2,000. Adult tickets cost $12 and student tickets $8. Do 60 adult and 150 student tickets meet both goals? Answer yes or no.','no','12 × 60 + 8 × 150 = $1,920, less than $2,000'],
  ['A fictional theater must sell at least 200 tickets and take in at least $2,000. Adult tickets cost $12 and student tickets $8. Do 120 adult and 90 student tickets meet both goals? Answer yes or no.','yes','120 + 90 = 210 ≥ 200 tickets and 12 × 120 + 8 × 90 = $2,160 ≥ $2,000']])
  put('constraints',q,ok,tab('Check every constraint',[['plan',q.match(/(?:bake|plant|Do) (.+?)(?: meet| of wheat|\?)/)?.[1]||'the plan']],['']),`${ok==='yes'?'It meets every limit':'It breaks a limit'}: ${why}.`,YN[ok]);
 /* graph: points tested against half-planes and systems, and how to draw them */
 for(const [m,b,op,x,y] of [[2,-4,'>',1,0],[2,-4,'>',3,1],[-1,3,'≤',1,2],[-1,3,'≤',2,2],[3,1,'<',0,1],[3,1,'≥',0,1],[0.5,2,'>',4,5],[-2,5,'≥',1,2],[1,-3,'<',5,1],[-3,0,'≤',-1,4],[1,0,'≥',2,2],[2,1,'<',1,3],[-0.5,4,'>',2,3],[4,-1,'≤',0,-1]]){
  const rhs=m*x+b,ok=op==='>'?y>rhs:op==='<'?y<rhs:op==='≥'?y>=rhs:y<=rhs,L=`y ${op} ${co(m)}${b?` ${sgn(b)}`:''}`;
  put('graph',`Is the point (${x}, ${y}) a solution of ${L}? Answer yes or no.`,ok?'yes':'no',tab('Test the point',[['point',`(${x}, ${y})`],['inequality',L]]),`Put x = ${x} in: ${co(m)}${b?` ${sgn(b)}`:''} = ${num(rhs)}. Is ${y} ${op} ${num(rhs)}? ${ok?'Yes':'No'}${y===rhs?`: the point is on the line, which ${op==='≤'||op==='≥'?'is':'is not'} included`:''}.`,YN[ok?'yes':'no']);}
 for(const [x,y,c1,c2] of [[1,2,'y > x','y < 3'],[4,2,'y > x','y < 3'],[0,1,'y ≥ 2x - 1','y ≤ -x + 2'],[2,1,'y ≥ 2x - 1','y ≤ -x + 2']]){
  const t=s=>{const [,op,r]=s.match(/^y ([<>≤≥]) (.+)$/),v=r.replace(/x/g,`*${x}`).replace(/^(-?\d*)\*/,(_,c)=>c===''?'':c==='-'?'-':`${c}*`);const rv=Function(`return ${v.replace(/^\*/,'')}`)();return op==='>'?y>rv:op==='<'?y<rv:op==='≥'?y>=rv:y<=rv;},ok=t(c1)&&t(c2);
  put('graph',`Is the point (${x}, ${y}) a solution of the system ${c1} and ${c2}? Answer yes or no.`,ok?'yes':'no',tab('The system',[['first',c1],['second',c2],['point',`(${x}, ${y})`]]),`A solution of a system must make both inequalities true. ${c1}: ${t(c1)?'true':'false'}; ${c2}: ${t(c2)?'true':'false'}. So ${ok?'yes':'no'}.`,YN[ok?'yes':'no']);}
 [['When you graph y < 3x + 1, is the boundary line solid or dashed, and why?','dashed, because points on the line are not solutions',['solid, because points on the line are solutions','dashed, because the slope is positive'],'< is strict, so points on y = 3x + 1 do not make it true, and the line is dashed. The slope does not decide dashed or solid.'],
  ['When you graph y ≥ -2x + 5, is the boundary line solid or dashed, and why?','solid, because points on the line are solutions',['dashed, because points on the line are not solutions','solid, because the slope is negative'],'≥ includes equality, so points on y = -2x + 5 are solutions and the line is solid. The sign of the slope does not decide this.'],
  ['For y > x + 2, which side of the line is shaded?','above the line',['below the line','neither side'],'y > x + 2 asks for y-values bigger than the line\'s, which lie above it. Check (0, 5): 5 > 0 + 2 is true, and (0, 5) is above the line.'],
  ['For y ≤ -x + 3, which side of the line is shaded?','below the line',['above the line','only the line itself'],'y ≤ -x + 3 asks for y-values at or below the line\'s. Check (0, 0): 0 ≤ 3 is true, and (0, 0) is below the line, so shade below.'],
  ['On a graph, what is the solution of a system of two inequalities?','the region where both shadings overlap',['only the point where the lines cross','everything shaded by either one'],'A solution must make both inequalities true, so it lies in both shaded regions at once: where they overlap. A point shaded by only one fails the other.'],
  ['The test point (0, 0) makes y > 2x - 4 true. What does that tell you?','shade the side of the line that holds (0, 0)',['shade the other side of the line','the boundary line is solid'],'At (0, 0), y > 2x - 4 reads 0 > -4, which is true. So (0, 0) is a solution, and you shade the side of the line that holds it.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('graph',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Graphing inequalities',[['< or >','dashed line'],['≤ or ≥','solid line'],['y > or y ≥','shade above'],['y < or y ≤','shade below']],['Rule']),why||`The answer is ${right}.`,[right]);});
}};
