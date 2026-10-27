// High School course unit (Math 1, Unit 3; CCSS A-REI.5, A-REI.6, A-REI.11, A-CED.2, A-CED.3; brought to
// docs/design/COURSE_QUALITY.md's bar on 10 Oct): systems of two linear equations. Every solvable system is
// built from its whole-number solution (x, y), so each equation's right side is computed from it; the
// story systems are built from their whole-number answers the same way. A system has one solution when the
// two lines have different slopes, none when they are parallel (same slope, different intercept), and
// infinitely many when both equations describe the same line. Places, people and prices are fictional. Also taught:
// why adding equations (or multiples of them) keeps the same solutions, the multiplier that cancels a letter, and
// solutions as the points where graphs cross (f(x) = g(x)).
const sgn=n=>n<0?`- ${-n}`:`+ ${n}`;
/* A negative number in a worked line goes in brackets: 3 - (-2). */
const par=n=>n<0?`(${n})`:`${n}`;
const lin=(m,b,v='x')=>`${m===1?'':m===-1?'-':m}${v}${b?` ${sgn(b)}`:''}`;
/* ax + by = c, written the usual way: x, -x, + y, - 3y. */
const std=(a,b,c)=>`${a===1?'':a===-1?'-':a}x ${b<0?'-':'+'} ${Math.abs(b)===1?'':Math.abs(b)}y = ${c}`;
/* A slope -a/b in lowest terms: -2/3, 4. */
const gcd=(p,q)=>q?gcd(q,p%q):Math.abs(p);
const fr=(p,q)=>{const g=gcd(p,q)*(q<0?-1:1),n=p/g,d=q/g;return d===1?`${n}`:`${n}/${d}`;};
const eqs=(e1,e2)=>({t:'setups',title:'The system',head:'',rows:[['first',e1],['second',e2]],cols:['Equation']});
/* Hint picture: both lines drawn from their own equations (ax + by = c gives y = -a/b x + c/b). */
const lines=(L,e1,e2)=>({t:'plot',title:'The two lines',x:[-6,6],y:[-12,12],lines:[{...L[0],label:e1},{...L[1],label:e2}],hint:true});
const HOW='one, none or infinitely many';
const ACCEPT={one:['1','one solution','exactly one'],none:['no solution','no solutions','0','zero'],'infinitely many':['infinite','infinitely many solutions','infinity']};
/* The three Try-it questions in pool form. The checks ask them; the generator below skips them, so a Try-it is never also a pool question. */
const TRY=['Solve the system y = x + 3 and 2x + y = 15. What is x?','At a fictional cinema, adult tickets cost $9 and child tickets cost $6. A family buys 5 tickets for $36. How many adult tickets did they buy?',`How many solutions does the system y = 3x + 1 and y = 3x - 4 have: ${HOW}?`];
const tryIt=s=>`Try it: ${/^[A-Z](?!\()/.test(s)?s[0].toLowerCase()+s.slice(1):s}`;
export default {
id:'math-h-systems',subject:'math',level:5,grade:9,standard:'CCSS A-REI.5, A-REI.6, A-REI.11, A-CED.2, A-CED.3',
title:'Systems of linear equations',
goal:'Solve a pair of linear equations by substitution or elimination and explain why elimination works, read solutions where graphs cross, set up and solve systems from stories, and tell whether a system has one solution, none or infinitely many.',
points:20,
skills:{solve:'Substitution or elimination',why:'Why elimination works',graphs:'Solutions on a graph',story:'Story systems',count:'How many solutions'},
outline:[['A-REI.5','Explain why adding equations keeps the same solutions',['why']],['A-REI.6','Solve systems of linear equations exactly',['solve','count']],
 ['A-REI.11','Read solutions as the points where graphs cross',['graphs']],['A-CED.2, A-CED.3','Write and solve systems from situations',['story']]],
steps:[
 {skill:'solve',say:'A system is two equations that share the same x and y. Its solution is the pair (x, y) that makes both equations true. On a graph, it is the point where the two lines cross.',pic:{t:'plot',title:'y = 2x + 1 and x + y = 7',x:[-1,6],y:[-2,12],lines:[{m:2,b:1,label:'y = 2x + 1'},{m:-1,b:7,label:'x + y = 7'}],points:[{x:2,y:5,label:'(2, 5)'}]}},
 {skill:'solve',say:'Substitution: when one equation says what y is, put that into the other one. With y = 2x + 1 and x + y = 7, write x + (2x + 1) = 7. Then 3x + 1 = 7, so x = 2, and y = 2 × 2 + 1 = 5.',eq:'x + (2x + 1) = 7  →  x = 2, y = 5',pic:{t:'plot',title:'The lines cross at (2, 5)',x:[-1,6],y:[-2,12],lines:[{m:2,b:1,label:'y = 2x + 1'},{m:-1,b:7,label:'x + y = 7'}],points:[{x:2,y:5,label:'(2, 5)'}]},
  check:{prompt:tryIt(TRY[0]),answer:4,options:[4,7,5],hint:'Put x + 3 in place of y: 2x + (x + 3) = 15, so 3x + 3 = 15.',pic:eqs('y = x + 3','2x + y = 15')}},
 {skill:'solve',say:'Elimination: add or take away the two equations so that one letter cancels. With 3x + 2y = 16 and x - 2y = 0, adding them gives 4x = 16, so x = 4. Then 4 - 2y = 0 gives y = 2.',eq:'(3x + 2y) + (x - 2y) = 16 + 0  →  4x = 16',pic:{t:'board',title:'Eliminate y',lines:['3x + 2y = 16','x - 2y = 0','4x = 16','x = 4, then 4 - 2y = 0, so y = 2'],why:['','','add: the y terms cancel',''],box:true}},
 {skill:'why',say:'Elimination works because of a simple fact: if two equations are true, their sum is true too, and so is any equation multiplied through by the same nonzero number. For 4x + 3y = 18 and 2x - y = 4, multiply the second by 3 and add: 10x = 30, so x = 3, and then y = 2. Replacing an equation by such a sum never changes the solutions.',eq:'4x + 3y = 18 plus 3(2x - y = 4) gives 10x = 30',pic:{t:'board',title:'Multiply, then add',lines:['4x + 3y = 18','6x - 3y = 12','10x = 30','x = 3 and y = 2'],why:['','3 × (2x - y = 4)','add: y cancels','then 2(3) - y = 4'],box:true}},
 {skill:'graphs',say:'On a graph, each equation is a line, and the solution of the system is the point where the lines cross, because only that point lies on both. The same idea works for two functions: f(x) = g(x) where their graphs meet. For f(x) = 2x + 1 and g(x) = -x + 7, set 2x + 1 = -x + 7, so x = 2 and both equal 5. To check any point, put it into both equations.',eq:'2x + 1 = -x + 7  →  x = 2',pic:lines([{m:2,b:1},{m:-1,b:7}],'f(x) = 2x + 1','g(x) = -x + 7')},
 {skill:'story',say:'For a story, name the two unknowns and write one equation for each fact. Fictional tickets cost $10 for an adult and $6 for a child, and a group buys 13 tickets for $98. With a adults and c children, a + c = 13 and 10a + 6c = 98.',eq:'a + c = 13 and 10a + 6c = 98',pic:{t:'setups',title:'Fictional tickets',head:'',rows:[['price','$10','$6'],['how many','a','c'],['in all','13 tickets','$98']],cols:['Adult','Child']}},
 {skill:'story',say:'Then solve it like any system. Put c = 13 - a into the second equation: 10a + 6(13 - a) = 98, so 4a + 78 = 98 and a = 5. That makes 5 adult and 8 child tickets. Check: 5 × 10 + 8 × 6 = 50 + 48 = 98.',eq:'10a + 6(13 - a) = 98  →  a = 5',pic:{t:'board',title:'Solve a + c = 13 and 10a + 6c = 98',lines:['10a + 6(13 - a) = 98','10a + 78 - 6a = 98','4a = 20','a = 5, so c = 8'],why:['put c = 13 - a','distribute','subtract 78','check: 50 + 48 = 98'],box:true},
  check:{prompt:tryIt(TRY[1]),answer:2,options:[2,3,4],hint:'a + c = 5 and 9a + 6c = 36. Put c = 5 - a into the second equation.',pic:{t:'setups',title:'Fictional cinema tickets',head:'',rows:[['price','$9','$6'],['in all','5 tickets','$36']],cols:['Adult','Child']}}},
 {skill:'count',say:'To count the solutions, write both equations as y = mx + b. Different slopes mean the lines cross once: one solution. The same slope with a different b means parallel lines that never meet: no solution.',eq:'y = 2x + 3 and y = 2x - 1: no solution',pic:{t:'plot',title:'Parallel lines never meet',x:[-5,5],y:[-10,10],lines:[{m:2,b:3,label:'y = 2x + 3'},{m:2,b:-1,label:'y = 2x - 1'}]}},
 {skill:'count',say:'If both equations describe the same line, every point on it works: infinitely many solutions. 2x + y = 3 and 4x + 2y = 6 are the same line, because the second equation is the first one times 2.',eq:'4x + 2y = 6 is 2 × (2x + y = 3)',pic:{t:'plot',title:'One line, written twice',x:[-5,5],y:[-10,10],lines:[{m:-2,b:3,label:'2x + y = 3'},{m:-2,b:3,label:'4x + 2y = 6'}]},
  check:{prompt:tryIt(TRY[2]),answer:'none',options:['one','none','infinitely many'],hint:'Both lines have slope 3, but they cross the y-axis at 1 and at -4.',pic:eqs('y = 3x + 1','y = 3x - 4')}},
 {skill:'count',summary:true,say:'Putting Unit 3 together: a system\'s solution is the point on both lines; substitute when one equation gives y, eliminate when a letter can be made to cancel, and know why adding equations is safe; put the answer back into both equations to check; turn stories into two equations; and count solutions from slopes and intercepts. Traps: multiply every term when you scale an equation, and 0 = 0 means the same line while 0 = 5 means parallel lines.',pic:{t:'setups',title:'Unit 3 at a glance',head:'',rows:[['substitution','put one equation into the other'],['elimination','make a letter cancel'],['graph','where the lines cross'],['count','slopes and intercepts']],cols:['Key idea']}}],
progression:{requires:['math-m-linear-equations','math-m-slope-lines'],operations:3,demand:'Substitute one equation into the other or add multiples of them to cancel a letter, turn a story into two equations, and compare slopes and intercepts to count the solutions.'},
items(add){
 const seen=new Set(TRY);
 /* seen starts with the Try-it questions, so the generator skips them and never repeats a prompt. */
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 const SOLS=[[2,5],[3,-1],[-2,4],[4,3],[1,-3],[5,2],[-3,-2],[6,1],[-1,6],[2,-4]];
 /* Substitution: y = mx + b and ax + cy = d, with a + cm never 0, so the solution is unique. */
 const SUB=[[2,3,1],[-1,2,3],[3,1,-2],[1,4,2],[-2,5,1],[4,1,1]];
 SOLS.forEach(([x,y],k)=>[k%6,(k+3)%6].forEach((j,n)=>{const [m,a,c]=SUB[j],b=y-m*x,d=a*x+c*y,e1=`y = ${lin(m,b)}`,e2=std(a,c,d),ask=(k+n)%2?'y':'x';
  put('solve',`Solve the system ${e1} and ${e2}. What is ${ask}?`,ask==='x'?x:y,eqs(e1,e2),`Put ${lin(m,b)} in place of y: ${lin(a+c*m,c*b)} = ${d}, so x = ${x}. Then y = ${m} × ${par(x)} ${sgn(b)} = ${y}.`);}));
 /* Elimination: a1x + b1y = d1 and a2x + b2y = d2, with a1b2 - a2b1 never 0. */
 const ELIM=[[2,3,4,-3],[1,1,1,-1],[3,2,5,-2],[2,-1,3,1],[1,2,3,-4],[4,3,2,-3]];
 SOLS.forEach(([x,y],k)=>[(k+1)%6,(k+4)%6].forEach((j,n)=>{const [a1,b1,a2,b2]=ELIM[j],d1=a1*x+b1*y,d2=a2*x+b2*y,e1=std(a1,b1,d1),e2=std(a2,b2,d2),ask=(k+n)%2?'x':'y';
  let how;
  if(b1===-b2)how=`Add the equations so the y terms cancel: ${lin(a1+a2,0)} = ${d1+d2}, so x = ${x}.`;
  else if(b1===b2)how=`Take the second equation from the first so the y terms cancel: ${lin(a1-a2,0)} = ${d1-d2}, so x = ${x}.`;
  else{const p=Math.abs(b2),q=Math.abs(b1),plus=b1*b2<0;how=`Multiply the first equation by ${p} and the second by ${q}, then ${plus?'add':'subtract'} them so the y terms cancel: ${lin(plus?a1*p+a2*q:a1*p-a2*q,0)} = ${plus?d1*p+d2*q:d1*p-d2*q}, so x = ${x}.`;}
  put('solve',`Solve the system ${e1} and ${e2}. What is ${ask}?`,ask==='x'?x:y,eqs(e1,e2),`${how} Then ${e1} with x = ${x} gives y = ${y}.`);}));
 /* Stories: tickets of two prices. a + c = total and pa + qc = cost. */
 const PLACES=['a fictional fair','a fictional museum','a fictional zoo','a fictional concert','a fictional water park','a fictional ice rink'];
 const PRICES=[[8,5],[9,6],[12,7],[10,4],[15,9],[7,3]],COUNTS=[[5,4],[3,6],[7,2],[4,4],[6,5],[2,7]];
 PRICES.forEach(([p,q],k)=>[k,(k+2)%6].forEach((j,n)=>{const [A,C]=COUNTS[j],ask=(k+n)%2?'child':'adult';
  put('story',`At ${PLACES[k]}, adult tickets cost $${p} and child tickets cost $${q}. A group buys ${A+C} tickets for $${p*A+q*C}. How many ${ask} tickets did they buy?`,ask==='adult'?A:C,{t:'setups',title:'Fictional tickets',head:'',rows:[['price',`$${p}`,`$${q}`],['in all',`${A+C} tickets`,`$${p*A+q*C}`]],cols:['Adult','Child']},`a + c = ${A+C} and ${p}a + ${q}c = ${p*A+q*C}. Put c = ${A+C} - a into the second: ${p-q}a + ${q*(A+C)} = ${p*A+q*C}, so a = ${A} and c = ${C}.`);}));
 /* Stories: two things bought together twice, with whole-dollar prices. */
 const GOODS=[['a fictional bakery','muffin','muffins','roll','rolls'],['a fictional stationery shop','pen','pens','notebook','notebooks'],['a fictional market stall','apple','apples','pear','pears'],['a fictional cafe','juice','juices','sandwich','sandwiches'],['a fictional hobby shop','brush','brushes','paint pot','paint pots'],['a fictional garden shop','seed packet','seed packets','plant pot','plant pots']];
 const PAY=[[2,3],[3,1],[4,2],[1,5],[5,2],[3,4]],QTY=[[2,3,4,1],[1,2,3,1],[3,1,1,2],[2,1,1,3]];
 const many=(n,one,lots)=>`${n} ${n===1?one:lots}`,co=n=>n===1?'':`${n}`;
 GOODS.forEach(([where,u1,uN,v1,vN],k)=>[k%4,(k+1)%4].forEach((j,n)=>{const [u,v]=PAY[k],[a1,b1,a2,b2]=QTY[j],c1=a1*u+b1*v,c2=a2*u+b2*v,first=(k+n)%2===0;
  put('story',`At ${where}, ${many(a1,u1,uN)} and ${many(b1,v1,vN)} cost $${c1}, and ${many(a2,u1,uN)} and ${many(b2,v1,vN)} cost $${c2}. How many dollars does one ${first?u1:v1} cost?`,first?u:v,{t:'setups',title:`Fictional ${uN} and ${vN}`,head:'',rows:[['first buy',`${a1} and ${b1}`,`$${c1}`],['second buy',`${a2} and ${b2}`,`$${c2}`]],cols:[`${uN} and ${vN}`,'cost']},`${co(a1)}u + ${co(b1)}v = ${c1} and ${co(a2)}u + ${co(b2)}v = ${c2}, where u is the price of one ${u1} and v is the price of one ${v1}. Solving gives u = ${u} and v = ${v}.`);}));
 /* Stories: two numbers from their sum and difference. */
 [[16,9],[20,13],[31,17],[12,5],[25,24],[40,22],[18,3],[27,14]].forEach(([L,S],k)=>{const big=k%2===0;
  put('story',`Two numbers add up to ${L+S} and their difference is ${L-S}. What is the ${big?'larger':'smaller'} number?`,big?L:S,{t:'setups',title:'Two numbers',head:'',rows:[['sum',`${L+S}`],['difference',`${L-S}`]],cols:['Value']},`x + y = ${L+S} and x - y = ${L-S}. Adding gives 2x = ${2*L}, so x = ${L} and y = ${S}.`);});
 /* Stories: a jar of two kinds of fictional coins. */
 [[[5,10],[12,8]],[[5,10],[6,14]],[[10,25],[7,5]],[[10,25],[3,9]],[[5,25],[10,4]],[[5,25],[8,6]],[[2,5],[9,11]],[[2,5],[15,4]]].forEach(([[s,t],[f,g]],k)=>{const big=k%2===1;
  put('story',`A fictional jar holds ${f+g} coins, all ${s}-cent and ${t}-cent coins, worth ${s*f+t*g} cents in all. How many ${big?t:s}-cent coins are there?`,big?g:f,{t:'setups',title:'A fictional coin jar',head:'',rows:[['coins',`${f+g}`],['value',`${s*f+t*g} cents`]],cols:['In all']},`p + q = ${f+g} and ${s}p + ${t}q = ${s*f+t*g}. Put p = ${f+g} - q into the second: ${t-s}q + ${s*(f+g)} = ${s*f+t*g}, so q = ${g} and p = ${f}: there are ${g} coins worth ${t} cents and ${f} coins worth ${s} cents.`);});
 /* How many solutions. Slope-intercept pairs: one (different slopes) or none (same slope, new intercept). */
 const ask=(e1,e2)=>`How many solutions does the system ${e1} and ${e2} have: ${HOW}?`;
 for(const [m1,b1,m2,b2] of [[2,1,-1,4],[3,-2,1,2],[-2,5,2,5],[4,0,-3,1],[1,-6,5,2],[-1,3,-4,-2],[6,2,3,-1],[2,3,2,-1],[-3,4,-3,1],[5,-2,5,6],[1,7,1,-4],[-1,0,-1,5],[4,2,4,-3],[3,-5,3,1]]){
  const e1=`y = ${lin(m1,b1)}`,e2=`y = ${lin(m2,b2)}`,ans=m1!==m2?'one':b1!==b2?'none':'infinitely many';
  put('count',ask(e1,e2),ans,lines([{m:m1,b:b1},{m:m2,b:b2}],e1,e2),m1!==m2?`The slopes ${m1} and ${m2} are different, so the lines cross once.`:`Both slopes are ${m1} but the intercepts ${b1} and ${b2} differ, so the lines are parallel.`,ACCEPT[ans]);}
 /* A line in slope-intercept form against a multiple of it in standard form: the same line. */
 for(const [m,b,k] of [[2,3,2],[-1,4,3],[3,-2,-1],[4,1,2],[-2,-5,3],[1,6,-2],[5,0,2]]){
  const e1=`y = ${lin(m,b)}`,e2=std(k*m,-k,-k*b);
  put('count',ask(e1,e2),'infinitely many',lines([{m,b},{m,b}],e1,e2),`${e2} is ${k} × (${std(m,-1,-b)}), and ${std(m,-1,-b)} is ${e1} rearranged, so both equations are the same line.`,ACCEPT['infinitely many']);}
 /* Standard-form pairs: a multiple (the same line), a multiple with a new right side (parallel), or a different ratio (one). */
 for(const [a,b,c,k,e] of [[2,3,6,2,0],[1,-1,4,3,0],[3,2,5,-2,0],[1,4,-3,5,0],[2,-5,1,3,0],[3,1,2,4,0],[2,3,6,2,1],[1,-1,4,3,-2],[3,2,5,2,3],[4,-2,7,1,1],[5,1,2,-1,4],[1,3,2,2,-5],[2,1,5,3,2]]){
  const e1=std(a,b,c),e2=std(k*a,k*b,k*c+e),ans=e?'none':'infinitely many';
  put('count',ask(e1,e2),ans,lines([{m:-a/b,b:c/b},{m:-a/b,b:(k*c+e)/b}],e1,e2),e?(k===1?`The left sides are the same but the right sides ${c} and ${c+e} are different. The lines are parallel.`:`The left side of ${e2} is ${k} × the left side of ${e1}, but ${k} × ${par(c)} = ${k*c}, not ${k*c+e}. The lines are parallel.`):`${e2} is ${k} × (${e1}), so both equations are the same line.`,ACCEPT[ans]);}
 for(const [a1,b1,c1,a2,b2,c2] of [[2,3,6,4,1,5],[1,-1,4,3,2,7],[3,2,5,1,-2,3],[1,4,-3,2,-1,6],[2,-5,1,3,4,-2],[5,1,2,1,5,2],[4,3,12,3,4,12]]){
  const e1=std(a1,b1,c1),e2=std(a2,b2,c2);
  put('count',ask(e1,e2),'one',lines([{m:-a1/b1,b:c1/b1},{m:-a2/b2,b:c2/b2}],e1,e2),`Written as y = mx + b, the slopes are ${fr(-a1,b1)} and ${fr(-a2,b2)}. They are different, so the lines cross once.`,ACCEPT.one);}
 /* why: what elimination does, and the multiplier that cancels a letter */
 const pick=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
 [['Why may you add the two equations of a system together?','adding equal amounts to both sides keeps them equal, so the sum with either original equation has the same solutions',['adding always makes the numbers smaller','it changes the solution to a simpler one'],'If a = b and c = d, then a + c = b + d, so any solution of both equations also solves their sum. With either original, the system keeps the same solutions.'],
  ['You multiply one equation of a system by 3. What happens to the system\'s solutions?','they stay the same',['they are multiplied by 3','they disappear'],'Multiplying every term by 3 gives an equivalent equation for the same line, so the system\'s solutions stay the same.'],
  ['How does elimination make a letter disappear?','it makes that letter\'s coefficients opposites, so they cancel when the equations are added',['it sets that letter equal to zero','it divides both equations by that letter'],'Elimination makes one letter\'s coefficients opposites, like 2y and -2y. Adding the equations gives 2y + (-2y) = 0y, so that letter cancels.'],
  ['After eliminating y and finding x, what do you do next?','put x back into either equation to find y',['stop, because x is the whole answer','eliminate x as well'],'Put the x-value into either original equation and solve for y. The solution is the pair (x, y), not x alone.'],
  ['A fictional student adds two equations and gets 0 = 0. What does that mean?','the equations describe the same line, so there are infinitely many solutions',['the system has no solution','x = 0 and y = 0'],'Getting 0 = 0 means one equation is the other times -1, so both describe the same line. Every point on it is a solution: infinitely many.']].forEach(([q,right,wrong,why],k)=>{const c=pick(right,wrong,k);
  put('why',`${q} ${c.text}. Answer A, B or C.`,c.letter,{t:'setups',title:'Elimination',head:'',rows:[['add equations','equal amounts on both sides'],['scale an equation','multiply every term'],['goal','one letter cancels']],cols:['Rule']},why||`The answer is ${right}.`,[right]);});
 for(const [e1,e2,which,v,letter] of [['2x + 3y = 7','5x - y = 4','second',3,'y'],['4x - 2y = 6','x + 5y = 8','second',-4,'x'],['3x + 4y = 10','2x + y = 5','second',-4,'y'],['x - 3y = 2','2x + 6y = 1','first',2,'y'],['6x + y = 9','2x + 3y = 11','second',-3,'x']])
  put('why',`To eliminate ${letter} from ${e1} and ${e2} by adding the equations, what number should the ${which} equation be multiplied by?`,v,eqs(e1,e2),`Multiplying the ${which} equation by ${v} makes the ${letter} terms opposites, so they cancel when the equations are added.`);
 /* graphs: solutions as points where lines meet, and checking a point in both equations */
 for(const [x,y,e1,e2] of [[2,5,'y = 2x + 1','x + y = 7'],[3,1,'y = x - 2','2x + y = 7'],[1,4,'y = 3x + 1','x + y = 6'],[-1,2,'y = -2x','3x + y = -1'],[4,0,'y = x - 4','x + 2y = 4'],[2,3,'y = x + 1','2x - y = 2']]){
  const ok=(s=>{const [l,r]=s.split(' = '),ev=t=>Function('x','y',`return ${t.replace(/(\d)([xy])/g,'$1*$2')};`)(x,y);return Math.abs(ev(l)-ev(r))<1e-9;}),both=ok(e1)&&ok(e2);
  put('graphs',`Is the point (${x}, ${y}) a solution of the system ${e1} and ${e2}? Answer yes or no.`,both?'yes':'no',eqs(e1,e2),both?`It makes both equations true, so it is where the lines cross: yes.`:`It does not make both equations true, so it is not where the lines cross: no.`,both?['y']:['n']);}
 for(const [m1,b1,m2,b2] of [[2,1,-1,7],[3,-4,1,2],[-2,5,1,-1],[4,-3,-1,12]]){const x=(b2-b1)/(m1-m2),f=lin(m1,b1),g=lin(m2,b2);
  put('graphs',`The graphs of f(x) = ${f} and g(x) = ${g} cross at one point. What is its x-coordinate, where f(x) = g(x)?`,x,lines([{m:m1,b:b1},{m:m2,b:b2}],`f(x) = ${f}`,`g(x) = ${g}`),`Set ${f} = ${g}: ${lin(m1-m2,0)} = ${b2-b1}, so x = ${x}. Both functions give ${m1*x+b1} there.`);}
 [['What does the point where the graphs of two equations cross show?','the solution of the system',['the slope of each line','the y-intercept of each line'],'The crossing point lies on both graphs, so its coordinates make both equations true: it is the solution of the system.'],
  ['The graphs of a system are two parallel lines. How many solutions does it have?','none',['one','infinitely many'],'Parallel lines have the same slope and never meet, so no point lies on both lines: the system has no solution.']].forEach(([q,right,wrong,why],k)=>{const c=pick(right,wrong,k+1);
  put('graphs',`${q} ${c.text}. Answer A, B or C.`,c.letter,{t:'setups',title:'Systems on a graph',head:'',rows:[['lines cross once','one solution'],['parallel lines','no solution'],['the same line','infinitely many']],cols:['Means']},why||`The answer is ${right}.`,[right]);});
}
};
