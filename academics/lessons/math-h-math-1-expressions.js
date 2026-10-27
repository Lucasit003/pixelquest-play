// High School course unit (docs/design/COURSES.md, docs/design/COURSE_QUALITY.md): Math 1, Unit 1, Expressions, Equations
// and Units, written to the Common Core integrated pathway's Math I standards (N-Q.1, A-SSE.1, A-REI.1, A-REI.3, A-CED.1,
// A-CED.4); our own wording and questions. Units convert by multiplying by factors equal to 1 (12 inches = 1 foot, 5,280
// feet = 1 mile, 1,000 meters = 1 kilometer, 60 seconds = 1 minute, 60 minutes = 1 hour, 4 quarts = 1 gallon, 4 cups =
// 1 quart, 16 ounces = 1 pound, 1,000 grams = 1 kilogram); a term is a part added or subtracted, a coefficient the
// number multiplying a variable; each step of solving an equation keeps both sides equal (the addition, subtraction,
// multiplication and division properties of equality) or rewrites one side (the distributive, commutative and
// associative properties). Every equation is built from its answer, so each answer is exact; stories and prices are
// fictional.
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const num=v=>String(Math.round(v*1e6)/1e6);
const n=v=>v.toLocaleString('en-US');
const sgn=v=>v<0?`- ${num(-v)}`:`+ ${num(v)}`;
const par=v=>v<0?`(${num(v)})`:num(v);
const co=(c,v='x')=>c===1?v:c===-1?`-${v}`:`${num(c)}${v}`;
/* lettered choices, the right one moved to position k */
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
/* The three Try-it questions in pool form; the generator skips them. */
const TRY=['Convert 72 kilometers per hour to meters per second.',
 'Solve 4(x - 1) + 2 = x + 16. What is x?',
 'A fictional bike rental costs $8 plus $3 for each hour. A rider pays $26. For how many hours did the rider rent the bike?'];
const tryIt=s=>`Try it: ${s[0].toLowerCase()+s.slice(1)}`;
export default {
id:'math-h-math-1-expressions-equations-and-units',subject:'math',level:5,grade:9,standard:'CCSS N-Q.1, A-SSE.1, A-REI.1, A-REI.3, A-CED.1, A-CED.4',
title:'Expressions, equations and units',
goal:'Convert units and rates, read the parts of an expression, justify each step of solving an equation, solve linear equations in one variable, write equations from situations, and rearrange formulas.',
points:20,
skills:{units:'Units and conversions',parts:'Parts of an expression',properties:'Why each step works',solve:'Solving linear equations',create:'Equations from situations',literal:'Rearranging formulas'},
outline:[['N-Q.1','Use units to understand problems and convert them',['units']],['A-SSE.1','Interpret the parts of an expression',['parts']],['A-REI.1','Explain each step in solving an equation',['properties']],
 ['A-REI.3','Solve linear equations in one variable',['solve']],['A-CED.1','Create equations from situations and solve them',['create']],['A-CED.4','Rearrange formulas to highlight a quantity',['literal']]],
steps:[
 {skill:'units',say:'Units tell you what a number measures. To change units, multiply by a fraction equal to 1, such as 12 inches ÷ 1 foot, set up so the old unit cancels: 3 feet × (12 inches ÷ 1 foot) = 36 inches. The number changes but the length does not.',eq:'12 inches ÷ 1 foot = 1',
  pic:{t:'board',title:'Change 3 feet to inches',lines:['3 feet = 3 feet × (12 inches ÷ 1 foot)','= 36 inches'],why:['a factor equal to 1','feet cancel'],box:true}},
 {skill:'units',say:'Rates convert the same way, one unit at a time. For 54 kilometers per hour in meters per second, multiply by 1,000 meters per kilometer, then divide by the 3,600 seconds in an hour: 54 × 1,000 ÷ 3,600 = 15 meters per second.',eq:'54 km/h × 1,000 m/km ÷ 3,600 s/h = 15 m/s',
  pic:{t:'board',title:'Change 54 km per hour to m per second',lines:['54 km per hour = 54,000 m per hour','= 54,000 m ÷ 3,600 s','= 15 m per second'],why:['× 1,000 m per km','one hour is 3,600 s',''],box:true},
  check:{prompt:tryIt(TRY[0]),answer:20,options:[20,72,1.2],hint:'Multiply by 1,000 meters per kilometer, then divide by 3,600 seconds per hour.',pic:tab('The rate',[['72 km per hour','to meters per second']],[''])}},
 {skill:'parts',say:'An expression is built from terms, the parts that are added or subtracted. In 3x² - 8x + 5 the terms are 3x², -8x and 5. The coefficient of x is -8, because the sign belongs to the term, and 5 is the constant term.',
  pic:{t:'board',title:'The parts of 3x² - 8x + 5',lines:['terms: 3x², -8x, 5','coefficient of x²: 3','coefficient of x: -8','constant term: 5'],why:['added or subtracted parts','','keep the sign','no variable']}},
 {skill:'parts',say:'In a situation, each part of an expression means something. A fictional bowling alley charges 6 + 4.5g dollars for g games: the 6 is a one-time shoe rental, and the 4.5 is the price of each game, so 3 games cost 6 + 13.5 = $19.50.',
  pic:{t:'board',title:'A fictional bowling bill: 6 + 4.5g',lines:['6: the shoe rental, paid once','4.5: dollars for each game','g: the number of games','3 games: 6 + 4.5 × 3 = $19.50'],why:[]}},
 {skill:'properties',say:'Every step in solving an equation has a reason. Distributing uses the distributive property. Adding, subtracting, multiplying or dividing both sides by the same nonzero number keeps them equal: these are the properties of equality. Here 3(x - 2) = 21 gives x = 9.',
  pic:{t:'board',title:'A reason for every step',lines:['3(x - 2) = 21','3x - 6 = 21','3x = 27','x = 9'],why:['','distributive property','addition property of equality','division property of equality'],box:true}},
 {skill:'properties',say:'Most linear equations have one solution, but not all. 4x + 2 = 4x + 7 becomes 2 = 7 when you subtract 4x, which is never true, so it has no solution. 3(x + 2) = 3x + 6 becomes 6 = 6, always true, so every number is a solution.',
  pic:{t:'board',title:'One, none or infinitely many',lines:['4x + 2 = 4x + 7','2 = 7','3(x + 2) = 3x + 6','6 = 6'],why:['','never true: no solution','','always true: infinitely many']}},
 {skill:'solve',say:'To solve a linear equation, simplify each side, gather the x terms on one side and the numbers on the other, then divide. For 5(x - 3) + 4 = 3x + 9, distribute and combine to get 5x - 11 = 3x + 9, so 2x = 20 and x = 10. Check: both sides are 39.',eq:'5(x - 3) + 4 = 3x + 9  →  x = 10',
  pic:{t:'board',title:'Solve 5(x - 3) + 4 = 3x + 9',lines:['5x - 15 + 4 = 3x + 9','5x - 11 = 3x + 9','2x - 11 = 9','2x = 20','x = 10'],why:['distribute the 5','combine -15 and 4','subtract 3x','add 11','divide by 2'],box:true},
  check:{prompt:tryIt(TRY[1]),answer:6,options:[6,5,18],hint:'Distribute first: 4x - 4 + 2 = x + 16, so 4x - 2 = x + 16.',pic:tab('The equation',[['left','4(x - 1) + 2'],['right','x + 16']])}},
 {skill:'solve',say:'With a fraction, multiply both sides by the denominator first, so the fraction disappears. For (2x - 1) ÷ 3 = 5, multiplying by 3 gives 2x - 1 = 15, then 2x = 16 and x = 8. Check: (16 - 1) ÷ 3 = 5.',
  pic:{t:'board',title:'Solve (2x - 1) ÷ 3 = 5',lines:['(2x - 1) ÷ 3 = 5','2x - 1 = 15','2x = 16','x = 8'],why:['','multiply both sides by 3','add 1','divide by 2'],box:true}},
 {skill:'create',say:'To write an equation from a situation, name the unknown, then turn each fact into algebra. A fictional electrician charges $70 to visit plus $45 an hour, and a bill is $250. With h hours, 70 + 45h = 250, so 45h = 180 and h = 4 hours. Check that the answer makes sense in the story.',eq:'70 + 45h = 250  →  h = 4',
  pic:{t:'board',title:'A fictional electrician\'s bill',lines:['70 + 45h = 250','45h = 180','h = 4'],why:['visit fee + hourly charge = bill','subtract 70','divide by 45'],box:true},
  check:{prompt:tryIt(TRY[2]),answer:6,options:[6,11,8.67],hint:'Write 8 + 3h = 26 and solve for h.',pic:tab('A fictional bike rental',[['fee','$8'],['per hour','$3'],['paid','$26']])}},
 {skill:'literal',say:'A formula can be rearranged to solve for any letter, using the same steps as an equation. The circumference of a circle is C = 2πr; dividing both sides by 2π gives r = C ÷ (2π), so a circle with a circumference of 10π has a radius of 5.',eq:'C = 2πr  →  r = C ÷ (2π)',
  pic:{t:'board',title:'Solve C = 2πr for r',lines:['C = 2πr','C ÷ (2π) = r','r = C ÷ (2π)'],why:['','divide both sides by 2π','read it the other way round'],box:true}},
 {skill:'literal',say:'To find one letter when you know the others, put in what you know and solve. In 4x + 2y = 20 with x = 3, put in 3: 12 + 2y = 20, so 2y = 8 and y = 4.',
  pic:{t:'board',title:'4x + 2y = 20 when x = 3',lines:['4(3) + 2y = 20','12 + 2y = 20','2y = 8','y = 4'],why:['put in x = 3','','subtract 12','divide by 2'],box:true}},
 {skill:'literal',summary:true,say:'Putting Unit 1 together: track units and convert them with factors equal to 1; read an expression\'s terms, coefficients and constants and what each means in a story; solve a linear equation step by step, giving the property behind each step and checking the answer; turn a situation into an equation; and rearrange a formula the same way. Traps: keep the sign with a coefficient, distribute to every term in the brackets, and do the same thing to both sides.',pic:tab('Unit 1 at a glance',[['units','multiply by factors equal to 1'],['expressions','terms, coefficients, constants'],['equations','same step on both sides'],['stories','name the unknown, write the facts'],['formulas','solve for any letter']],['Key idea'])}],
progression:{requires:['math-m-linear-equations','math-m-ratios'],operations:3,demand:'Chain unit factors, simplify and solve multi-step linear equations, translate a situation into an equation, and isolate one letter in a formula.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 /* units: lengths, times, volumes and masses, then rates (every factor exact) */
 const F={inches:['in',1/12,'feet'],feet:['ft',1,'feet'],yards:['yd',3,'feet'],miles:['mi',5280,'feet'],centimeters:['cm',0.01,'meters'],meters:['m',1,'meters'],kilometers:['km',1000,'meters'],
  seconds:['s',1,'seconds'],minutes:['min',60,'seconds'],hours:['h',3600,'seconds'],days:['d',86400,'seconds'],cups:['c',1,'cups'],quarts:['qt',4,'cups'],gallons:['gal',16,'cups'],ounces:['oz',1,'ounces'],pounds:['lb',16,'ounces'],grams:['g',1,'grams'],kilograms:['kg',1000,'grams']};
 const conv=(v,a,b)=>v*F[a][1]/F[b][1],one=u=>({feet:'foot',inches:'inch'})[u]||u.replace(/s$/,'');
 /* how to change one unit into another, in words: "multiply by 12 inches per foot" or "divide by 16 ounces per pound" */
 const step=(a,b)=>{const k=F[a][1]/F[b][1];return k>=1?`multiply by ${n(k)} ${b} per ${one(a)}`:`divide by ${n(1/k)} ${a} per ${one(b)}`;};
 for(const [v,a,b] of [[12,'feet','inches'],[3.5,'yards','feet'],[2,'miles','feet'],[450,'centimeters','meters'],[2.4,'kilometers','meters'],[3,'hours','seconds'],[4.5,'days','hours'],[6,'gallons','cups'],[40,'ounces','pounds'],[3250,'grams','kilograms']]){const r=conv(v,a,b);
  put('units',`Convert ${n(v)} ${a} to ${b}.`,Math.round(r*1e6)/1e6,tab('Convert',[['from',`${n(v)} ${a}`],['to',b]]),`To change ${a} to ${b}, ${step(a,b)}: ${n(v)} ${a} = ${num(r)} ${b}.`);}
 for(const [v,a,ad,b,bd] of [[90,'kilometers','hours','meters','seconds'],[60,'miles','hours','feet','seconds'],[3,'gallons','minutes','quarts','hours'],[18,'inches','seconds','feet','minutes'],[1.2,'kilometers','minutes','meters','seconds'],[5,'meters','seconds','kilometers','hours']]){const r=v*F[a][1]/F[b][1]*F[bd][1]/F[ad][1];
  put('units',`Convert ${n(v)} ${a} per ${ad.replace(/s$/,'')} to ${b} per ${bd.replace(/s$/,'')}.`,Math.round(r*1e6)/1e6,tab('Convert a rate',[['from',`${n(v)} ${a} per ${ad.replace(/s$/,'')}`],['to',`${b} per ${bd.replace(/s$/,'')}`]]),`Change one unit at a time. First ${step(a,b)}: ${n(v)} ${a} per ${one(ad)} is ${n(conv(v,a,b))} ${b} per ${one(ad)}. ${F[ad][1]>F[bd][1]?`One ${one(ad)} is ${n(F[ad][1]/F[bd][1])} ${bd}, so divide by ${n(F[ad][1]/F[bd][1])}`:`One ${one(bd)} is ${n(F[bd][1]/F[ad][1])} ${ad}, so multiply by ${n(F[bd][1]/F[ad][1])}`}: ${num(r)} ${b} per ${one(bd)}.`);}
 /* parts: coefficients, constants, terms and values, then what each part means in a story */
 const POLY=[[[4,2],[-7,1],[3,0]],[[-2,2],[5,1],[-8,0]],[[6,1],[-1,2],[9,0]],[[1,3],[-4,1],[-6,0]],[[3,2],[1,1],[-5,0]],[[-5,1],[2,3],[7,0]]];
 const show=ts=>ts.map(([c,p],i)=>{const a=Math.abs(c),body=p===0?String(a):`${a===1?'':a}x${p===2?'²':p===3?'³':''}`;return (i?(c<0?' - ':' + '):(c<0?'-':''))+body;}).join('');
 POLY.forEach((ts,k)=>{const e=show(ts),pic=tab('The expression',[['expression',e]],['']),x=[2,-1,3,-2,1,4][k],val=ts.reduce((s,[c,p])=>s+c*x**p,0),lead=ts.find(([,p])=>p===1);
  put('parts',`In the expression ${e}, what is the coefficient of x?`,lead[0],pic,`The x term is ${lead[0]<0?'-':''}${Math.abs(lead[0])===1?'':Math.abs(lead[0])}x, so the coefficient is ${lead[0]}: keep its sign.`);
  if(k%2===0)put('parts',`In the expression ${e}, what is the constant term?`,ts.find(([,p])=>p===0)[0],pic,`The term with no x is ${ts.find(([,p])=>p===0)[0]}.`);
  else put('parts',`What is the value of ${e} when x = ${x}?`,val,pic,`Put ${par(x)} in for x: ${ts.map(([c,p])=>p===0?par(c):`${par(c)} × ${par(x)}${p>1?`^${p}`:''}`).join(' + ')} = ${val}.`);});
 [['A fictional gym charges 25 + 15m dollars for m months. What does 15 stand for?','the cost for each month',['the joining fee','the number of months'],'15 multiplies m, the number of months, so it is the cost for each month. The 25 is added once, whatever m is.'],
  ['A fictional gym charges 25 + 15m dollars for m months. What does 25 stand for?','a one-time joining fee',['the cost for each month','the number of months'],'25 is added once, however many months: at m = 0 the cost is 25. So it is a one-time joining fee; 15 is the monthly cost.'],
  ['A fictional tank holds 500 - 12t liters of water t minutes after a drain opens. What does 12 stand for?','the liters drained each minute',['the liters in the tank at the start','the minutes until it is empty'],'12 multiplies t, the minutes, and is taken away, so each minute the tank loses 12 liters. The 500 is what it holds at the start.'],
  ['A fictional taxi fare is 3.5 + 2.25d dollars for a ride of d miles. What does 3.5 stand for?','a starting fee charged before any miles',['the cost for each mile','the number of miles'],'3.5 is added once, even when d = 0, so it is a starting fee. The 2.25 multiplies d, so it is the cost for each mile.'],
  ['A rectangle\'s perimeter is 2(l + w). What does l + w stand for?','one length plus one width, half the perimeter',['the area','the number of sides'],'2(l + w) is two copies of l + w, so l + w is one length plus one width: half the perimeter. The area would be l × w.'],
  ['A fictional store\'s sale price is 0.8p for an item whose original price is p. What does 0.8 show?','the customer pays 80% of the original price',['the item costs $0.80','the price rises by 80%'],'0.8 = 80%, so 0.8p is 80% of the original price p. The customer pays 80%, which is a 20% discount.'],
  ['How many terms does the expression 5x³ - 2x + 9 have?','three',['two','five'],'Terms are the parts added or subtracted: 5x³, -2x and 9. That is three terms; the exponent 3 is not a term.'],
  ['In 7(x + 2), which part is a factor of the whole expression?','7',['2','x alone'],'A factor is a part that is multiplied. 7(x + 2) is 7 times (x + 2), so 7 is a factor of the whole. The 2 is a term inside the brackets.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('parts',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Parts of an expression',[['term','a part added or subtracted'],['coefficient','the number times a variable'],['constant','a term with no variable'],['factor','a part multiplied']],['Means']),why||`The answer is ${right}.`,[right]);});
 /* properties: the reason for a step, and how many solutions an equation has */
 [['Going from 3x + 5 = 20 to 3x = 15 uses which property?','the subtraction property of equality',['the distributive property','the division property of equality'],'Taking 5 from both sides keeps the equation balanced: 3x + 5 - 5 = 20 - 5, so 3x = 15. That is the subtraction property of equality.'],
  ['Going from 5x = 30 to x = 6 uses which property?','the division property of equality',['the subtraction property of equality','the commutative property of addition'],'Dividing both sides by 5 keeps the equation true: 5x ÷ 5 = 30 ÷ 5, so x = 6. That is the division property of equality.'],
  ['Going from 2(x + 4) = 18 to 2x + 8 = 18 uses which property?','the distributive property',['the division property of equality','the associative property of addition'],'The distributive property multiplies 2 by each term in the brackets: 2 · x + 2 · 4 = 2x + 8.'],
  ['Going from x ÷ 4 = 7 to x = 28 uses which property?','the multiplication property of equality',['the addition property of equality','the distributive property'],'Multiplying both sides by 4 undoes the division: (x ÷ 4) × 4 = 7 × 4, so x = 28. That is the multiplication property of equality.'],
  ['Going from x - 9 = 2 to x = 11 uses which property?','the addition property of equality',['the multiplication property of equality','the commutative property of addition'],'Adding 9 to both sides undoes the subtraction: x - 9 + 9 = 2 + 9, so x = 11. That is the addition property of equality.'],
  ['Rewriting 3 + x as x + 3 uses which property?','the commutative property of addition',['the associative property of addition','the distributive property'],'Commutative means the order can change: a + b = b + a, so 3 + x = x + 3. The associative property is about grouping, not order.'],
  ['Rewriting (2 + x) + 5 as 2 + (x + 5) uses which property?','the associative property of addition',['the commutative property of addition','the distributive property'],'Only the brackets moved; the order 2, x, 5 stayed the same. Regrouping is the associative property: (a + b) + c = a + (b + c).']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+1);
  put('properties',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Properties',[['properties of equality','do the same to both sides'],['distributive','a(b + c) = ab + ac'],['commutative','order can change'],['associative','grouping can change']],['Means']),why||`The answer is ${right}.`,[right]);});
 const HOW={one:['1','one solution','exactly one'],none:['no solution','no solutions','0','zero'],'infinitely many':['infinite','infinitely many solutions','infinity']};
 for(const [l,r,k] of [['2(x + 3)','2x + 6','infinitely many'],['3x + 1','3x - 4','none'],['4x - 2','2x + 6','one'],['5(x - 1)','5x - 5','infinitely many'],['2x + 7','2(x + 3)','none'],['6x + 1','3(2x + 1) - 2','infinitely many'],['7 - x','x + 1','one']])
  put('properties',`How many solutions does the equation ${l} = ${r} have: one, none, or infinitely many?`,k,tab('The equation',[['left',l],['right',r]]),k==='one'?'The x terms differ, so they can be gathered on one side: one solution.':k==='none'?'Both sides have the same x terms but different numbers, so no x can make them equal: no solution.':'Both sides simplify to the same expression, so every x works: infinitely many solutions.',HOW[k]);
 /* solve: equations built from their answers */
 const EQ=[[3,-4,5,2],[4,-2,3,1],[2,5,-3,-1],[5,1,-6,3],[-2,3,4,1],[6,-1,2,4],[3,2,-1,-2],[-3,4,1,2],[2,-6,7,5],[4,3,-5,-2],[5,-2,4,3],[-4,1,6,-1]];
 const X=[14,3,-4,6,-2,5,9,-3,7,2,-5,8];
 EQ.forEach(([a,b,c,d],k)=>{const x=X[k],e=a*(x+b)+c-d*x,L=`${a}(x ${sgn(b)}) ${sgn(c)}`,R=`${co(d)} ${sgn(e)}`;
  put('solve',`Solve ${L} = ${R}. What is x?`,x,tab('The equation',[['left',L],['right',R]]),`Distribute: ${co(a)} ${sgn(a*b+c)} = ${R}. Gather the x terms: ${co(a-d)} = ${num(e-a*b-c)}, so x = ${x}.`);});
 for(const [d,b,x] of [[4,3,20],[5,-2,15],[3,7,-6],[2,-5,9],[6,1,24],[8,-3,4]]){const c=x/d+b;
  put('solve',`Solve x ÷ ${d} ${sgn(b)} = ${num(c)}. What is x?`,x,tab('The equation',[['equation',`x ÷ ${d} ${sgn(b)} = ${num(c)}`]],['']),`${b<0?'Add':'Subtract'} ${Math.abs(b)}: x ÷ ${d} = ${num(c-b)}. Multiply by ${d}: x = ${x}.`);}
 for(const [a,b,c,d,x] of [[0.5,3,1.25,-1.5,6],[1.5,-2,0.5,4,6],[2.5,1,1.5,6,5],[0.2,7,0.6,3,10],[1.25,-3,0.75,2,10],[0.4,2.6,1.2,-1,4.5]]){
  put('solve',`Solve ${a}x ${sgn(b)} = ${c}x ${sgn(d)}. What is x?`,x,tab('The equation',[['left',`${a}x ${sgn(b)}`],['right',`${c}x ${sgn(d)}`]]),`Gather the x terms: ${num(a-c)}x = ${num(d-b)}, so x = ${num(d-b)} ÷ ${par(a-c)} = ${x}.`);}
 /* create: situations, each with its equation written out */
 for(const [q,eq,v,unit] of [
  ['A fictional phone plan costs $20 a month plus $0.10 for each text. One month\'s bill is $32.50. How many texts were sent?','20 + 0.10t = 32.50',125,'texts'],
  ['A fictional gym charges a $40 joining fee and $25 a month. A member has paid $265 in all. For how many months has the member belonged?','40 + 25m = 265',9,'months'],
  ['A fictional taxi charges $3.50 plus $2.25 a mile. A ride costs $21.50. How many miles long was it?','3.50 + 2.25d = 21.50',8,'miles'],
  ['A fictional car rental costs $30 plus $0.20 a mile. The bill is $78. How many miles were driven?','30 + 0.20d = 78',240,'miles'],
  ['A fictional saver has $150 and adds $35 each week. After how many weeks will the savings reach $640?','150 + 35w = 640',14,'weeks'],
  ['A fictional tank holds 500 liters and drains 12 liters a minute. After how many minutes are 140 liters left?','500 - 12t = 140',30,'minutes'],
  ['Three consecutive whole numbers add up to 141. What is the smallest of them?','n + (n + 1) + (n + 2) = 141',46,''],
  ['A rectangle\'s length is 3 more than twice its width, and its perimeter is 54. What is its width?','2w + 2(2w + 3) = 54',8,''],
  ['In a fictional family, Ana is 4 years older than twice Ben\'s age, and their ages add up to 31. How old is Ben?','b + (2b + 4) = 31',9,'years'],
  ['A fictional club sells tickets for $6 each. After paying $150 for costumes, it has $420 left. How many tickets did it sell?','6t - 150 = 420',95,'tickets'],
  ['A fictional cyclist rides at 18 kilometers an hour. How many hours does a 63-kilometer ride take?','18h = 63',3.5,'hours'],
  ['A fictional printer has printed 240 pages and prints 15 more each minute. After how many more minutes will it have printed 600 pages in all?','240 + 15m = 600',24,'minutes'],
  ['A fictional school pays $480 for a trip bus plus $12 for each student. The total is $1,140. How many students went?','480 + 12s = 1,140',55,'students'],
  ['Two fictional friends share $96 so that one gets $18 more than the other. How many dollars does the smaller share hold?','s + (s + 18) = 96',39,'dollars'],
  ['A fictional candle is 30 centimeters tall and burns 2.5 centimeters an hour. After how many hours is it 12 centimeters tall?','30 - 2.5h = 12',7.2,'hours'],
  ['A triangle\'s angles are x, 2x and 3x degrees. What is x?','x + 2x + 3x = 180',30,'degrees']])
  put('create',q,v,tab('The equation',[['equation',eq]],['']),`Write ${eq} and solve it: ${num(v)}${unit?` ${unit}`:''}.`);
 /* literal: rearranged formulas, and one letter found from the others */
 [['Solve d = rt for t.','t = d ÷ r',['t = dr','t = d - r']],['Solve A = lw for w.','w = A ÷ l',['w = Al','w = A - l']],['Solve P = 2l + 2w for w.','w = (P - 2l) ÷ 2',['w = P - 2l','w = (P ÷ 2) - 2l']],
  ['Solve y = mx + b for x.','x = (y - b) ÷ m',['x = y - b - m','x = (y + b) ÷ m']],['Solve A = ½bh for h.','h = 2A ÷ b',['h = A ÷ 2b','h = 2Ab']],['Solve I = Prt for r.','r = I ÷ (Pt)',['r = IPt','r = I - Pt']],
  ['Solve C = (5 ÷ 9)(F - 32) for F.','F = (9 ÷ 5)C + 32',['F = (5 ÷ 9)C + 32','F = (9 ÷ 5)(C - 32)']]].forEach(([q,right,wrong],k)=>{const c=choose(right,wrong,k+2);
  put('literal',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Rearrange',[['formula',q.replace(/^Solve (.+) for .+$/,'$1')]],['']),`Undo each step on both sides to leave the letter alone: ${right}.`,[right]);});
 for(const [a,b,c,x] of [[2,3,12,3],[5,-2,4,2],[4,1,10,1.5],[3,-4,18,2],[1,5,20,5],[6,3,9,-1],[2,-5,-1,2]]){const y=(c-a*x)/b,eq=`${co(a)} ${b<0?'-':'+'} ${Math.abs(b)===1?'':Math.abs(b)}y = ${c}`;
  put('literal',`In ${eq}, what is y when x = ${x}?`,Math.round(y*1e6)/1e6,tab('The equation',[['equation',eq],['x',`${x}`]]),`Put in x = ${x}: ${num(a*x)} ${b<0?'-':'+'} ${Math.abs(b)===1?'':Math.abs(b)}y = ${c}, so ${b}y = ${num(c-a*x)} and y = ${num(y)}.`);}
}};
