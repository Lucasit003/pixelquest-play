// High School course unit (docs/design/COURSES.md, brought to docs/design/COURSE_QUALITY.md's bar on 10 Oct): AP
// Calculus AB, Unit 2, Differentiation: Definition and Fundamental Properties (the course's public outline, topics 2.1 to
// 2.10; our own wording and questions, nothing copied). The average rate of change of f on [a, b] is (f(b) - f(a)) ÷
// (b - a), the slope of the secant line. The derivative f'(a) is the limit of the difference quotient, the slope of the
// tangent line and the instantaneous rate of change; the tangent line is y = f(a) + f'(a)(x - a), and near a it is a good
// approximation of f (local linearity). From a table the derivative is estimated with a difference quotient. A function is
// differentiable at a only if it is continuous there with matching slopes on both sides: corners, cusps, vertical
// tangents and jumps have no derivative. The rules: power, constant multiple, sum, sin x, cos x, eˣ, ln x, tan x, cot x,
// sec x, csc x, product and quotient. Angles are in radians. The prime is written f'(x) with a plain apostrophe (the pixel
// font has no ′), so every string holding one is a template literal. Every answer is computed here from the numbers in
// its own prompt and is a whole number or a terminating decimal; the lettered choices are the standard meanings.
const SUP={2:'²',3:'³',4:'⁴'};
const term=(c,p)=>{const a=Math.abs(c);return (p===0?String(a):a===1?'':String(a))+(p===0?'':p===1?'x':'x'+SUP[p]);};
/* [[coefficient, power], ...] -> "2x³ - 3x² + x - 5" */
const poly=ts=>{const n=ts.filter(([c])=>c);return n.length?n.map(([c,p],i)=>(i?(c<0?' - ':' + '):(c<0?'-':''))+term(c,p)).join(''):'0';};
const at=(ts,x)=>ts.reduce((s,[c,p])=>s+c*x**p,0);
const dpoly=ts=>ts.filter(([,p])=>p>0).map(([c,p])=>[c*p,p-1]);
/* a decimal printed without floating-point noise (every value here terminates within six places) */
const num=v=>String(Math.round(v*1e6)/1e6);
const r6=v=>Math.round(v*1e6)/1e6;
const par=v=>v<0?`(${num(v)})`:num(v);
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const quadPlot=(p,q,r,a,b)=>{const f=x=>p*x*x+q*x+r,xs=[Math.min(a,b)-1,Math.max(a,b)+1],ys=[f(xs[0]),f(xs[1]),f(a),f(b)],h=-q/(2*p);if(h>xs[0]&&h<xs[1])ys.push(f(h));
 return {t:'plot',title:`f(x) = ${poly([[p,2],[q,1],[r,0]])}`,x:xs,y:[Math.floor(Math.min(...ys))-2,Math.ceil(Math.max(...ys))+2],curves:[{a:p,h,k:f(h)}],points:[{x:a,y:f(a),label:`(${a}, ${f(a)})`},{x:b,y:f(b),label:`(${b}, ${f(b)})`}]};};
const PI={0:'0','pi/2':'π/2',pi:'π'};
/* a coefficient before a named function: 3 -> "3 ", 1 -> "", -1 -> "-"; tail adds a signed term after the first */
const co=a=>a===1?'':a===-1?'-':`${a} `;
const tail=(b,name)=>b?` ${b<0?'-':'+'} ${name==='x'?(Math.abs(b)===1?'':Math.abs(b)):co(Math.abs(b))}${name}`:'';
/* lettered choices, the right one moved to position k */
const L='ABC';
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${L[i]}: ${x}`).join(', '),letter:L[o.indexOf(right)]};};
/* The four Try-it questions in pool form; the generator skips them, so a Try-it is never also a pool question. */
/* points along sin, cos and a shifted cube root, for drawing their graphs */
const SIN=Array.from({length:97},(_,i)=>{const x=-3.2+9.6*i/96;return [x,Math.sin(x)];}),COS=SIN.map(([x])=>[x,Math.cos(x)]);
const CUBE=Array.from({length:61},(_,i)=>{const x=2.6+2.8*i/60;return [x,2+Math.cbrt(x-4)];});
const TRY=[`f(x) = x² + 2x. What is the average rate of change of f on the interval [1, 4]?`,`f(x) = 2x³ - x + 4. What is f'(2)?`,`f(1) = 2, f'(1) = 3, g(1) = 4 and g'(1) = -1. If h(x) = f(x)g(x), what is h'(1)?`,
 `f(x) = x² + 3, so f(1) = 4 and f'(1) = 2. Use the tangent line at x = 1 to estimate f(1.1).`];
const tryIt=s=>`Try it: ${s}`;
export default {
id:'math-h-ap-calc-ab-differentiation-definition-and-properties',subject:'math',level:5,grade:9,standard:'AP Calculus AB, Unit 2 (topics 2.1-2.10)',
title:'Derivatives: definition and rules',
goal:'Find average and instantaneous rates of change, read and write derivative notation, estimate derivatives from tables, write tangent lines, decide where a function is differentiable, and use the power, sum, trig, exponential, log, product and quotient rules.',
points:20,
skills:{rate:'Average rate of change',definition:'The derivative and its notation',tangent:'Tangent lines and local linearity',estimate:'Estimating derivatives',differentiable:'Differentiability and continuity',power:'Power and sum rules',special:'Derivatives of sin, cos, eˣ and ln x',trig:'Derivatives of tan, cot, sec and csc',product:'The product rule',quotient:'The quotient rule'},
outline:[['2.1','Average and instantaneous rates of change at a point',['rate']],['2.2','Defining the derivative and using derivative notation',['definition','tangent']],['2.3','Estimating derivatives of a function at a point',['estimate']],
 ['2.4','Connecting differentiability and continuity',['differentiable']],['2.5','Applying the power rule',['power']],['2.6','Constant, sum, difference and constant multiple rules',['power']],['2.7','Derivatives of cos x, sin x, eˣ and ln x',['special']],
 ['2.8','The product rule',['product']],['2.9','The quotient rule',['quotient']],['2.10','Derivatives of tan x, cot x, sec x and csc x',['trig']]],
steps:[
 {skill:'rate',say:'The average rate of change of f on [a, b] is how much f changes for each unit of x: (f(b) - f(a)) ÷ (b - a). It is the slope of the secant line through the two points. For f(x) = x² on [1, 3] it is (9 - 1) ÷ (3 - 1) = 4. Keep the order the same on top and bottom: b first both times.',eq:'(f(b) - f(a)) ÷ (b - a)',pic:{t:'plot',title:'f(x) = x² and a secant line',x:[0,4],y:[0,12],curves:[{a:1,h:0,k:0}],lines:[{m:4,b:-3,label:'secant'}],points:[{x:1,y:1,label:'(1, 1)'},{x:3,y:9,label:'(3, 9)'}]}},
 {skill:'rate',say:'Over the interval from a to a + h the same idea is the difference quotient (f(a + h) - f(a)) ÷ h. Making h smaller and smaller moves the second point toward the first, and the secant line turns toward the tangent line.',eq:'(f(a + h) - f(a)) ÷ h',pic:quadPlot(1,0,0,1,2),
  check:{prompt:tryIt(TRY[0]),answer:7,options:[7,21,10],hint:'f(4) = 24 and f(1) = 3. Divide the change in f by the change in x.',pic:quadPlot(1,2,0,1,4)}},
 {skill:'definition',say:`The derivative f'(a) is the limit of the difference quotient as h goes to 0. It is the instantaneous rate of change at a, and the slope of the tangent line there. For f(x) = x² the tangent at x = 2 has slope 4.`,eq:`f'(a) = lim (h → 0) (f(a + h) - f(a)) ÷ h`,pic:{t:'plot',title:'The tangent to f(x) = x² at x = 2',x:[0,4],y:[-2,12],curves:[{a:1,h:0,k:0}],lines:[{m:4,b:-4,label:'tangent'}],points:[{x:2,y:4,label:'(2, 4)'}]}},
 {skill:'definition',say:`Worked from the definition: for f(x) = x², (f(a + h) - f(a)) ÷ h = ((a + h)² - a²) ÷ h = (2ah + h²) ÷ h = 2a + h, which goes to 2a as h goes to 0. The same derivative is written f'(x), y', dy/dx or d/dx f(x). If s(t) is a position, s'(4) = 3 means the velocity at t = 4 is 3 units per unit of time.`,eq:`((a + h)² - a²) ÷ h = 2a + h → 2a`,pic:{t:'board',title:'The derivative of x² from the definition',lines:['((a + h)² - a²) ÷ h = (a² + 2ah + h² - a²) ÷ h','= (2ah + h²) ÷ h','= 2a + h','→ 2a as h → 0'],why:['expand the square','a² cancels','divide by h','the limit']}},
 {skill:'tangent',say:`The tangent line at x = a goes through (a, f(a)) with slope f'(a): y = f(a) + f'(a)(x - a). Close to a it hugs the curve, so it gives good estimates: this is local linearity. For f(x) = √x at x = 4, the tangent line is y = 2 + 0.25(x - 4), so √4.1 ≈ 2.025.`,eq:`y = f(a) + f'(a)(x - a)`,pic:{t:'plot',title:'Local linearity: f(x) = x² near x = 2',x:[1,3],y:[0,9],curves:[{a:1,h:0,k:0}],lines:[{m:4,b:-4,label:'tangent'}],points:[{x:2,y:4,label:'(2, 4)'}]},
  check:{prompt:tryIt(TRY[3]),answer:4.2,options:[4.2,4.21,6],hint:'The estimate is f(1) + f\'(1) × 0.1.',pic:tab('At x = 1',[['f(1)','4'],[`f'(1)`,'2'],['step','0.1']])}},
 {skill:'estimate',say:`From a table of values, estimate f'(c) with a difference quotient of nearby points. The symmetric difference (f(c + h) - f(c - h)) ÷ 2h, using one point on each side, is usually the best estimate. With only c and one nearby point, use (f(c + h) - f(c)) ÷ h.`,eq:`f'(c) ≈ (f(c + h) - f(c - h)) ÷ 2h`,pic:{t:'plot',title:'f(1) = 3 and f(3) = 11: estimate f\'(2)',x:[0,4],y:[0,16],curves:[{a:1,h:0,k:2}],lines:[{m:4,b:-1,dash:true}],points:[{x:1,y:3,label:'(1, 3)'},{x:3,y:11,label:'(3, 11)'},{x:2,y:6,label:'x = 2'}]}},
 {skill:'differentiable',say:'A function is differentiable at a point only when it is continuous there and its slope from the left equals its slope from the right. A jump breaks continuity; a corner (like |x| at 0) or a cusp has different slopes on each side; a vertical tangent (like the cube root of x at 0) has no finite slope. Differentiable always means continuous, but continuous does not always mean differentiable.',pic:{t:'plot',title:'Three places with no derivative',x:[-6,6],y:[-1,5],paths:[{pts:[[-6,2],[-4,0],[-2,2]]},{pts:[[-1,1],[1.2,1]]},{pts:[[1.2,3],[2.2,3]]},{pts:CUBE}],points:[{x:-4,y:0,label:'corner'},{x:1.2,y:3,label:'jump'},{x:4,y:2,label:'vertical tangent'}]}},
 {skill:'power',say:'The power rule: the derivative of xⁿ is n·xⁿ⁻¹, for any power n. A constant multiple stays, a sum is differentiated term by term, and a constant has derivative 0. So the derivative of 3x² - 5x + 2 is 6x - 5. Rewrite roots and fractions as powers first: √x = x^(1/2) and 1 ÷ x² = x^(-2).',eq:'d/dx xⁿ = n·xⁿ⁻¹',pic:{t:'board',title:'The power rule at work',lines:['d/dx x³ = 3x²','d/dx 5x² = 5 · 2x = 10x','d/dx √x = d/dx x^(1/2) = (1/2)x^(-1/2)','d/dx (3x² - 5x + 2) = 6x - 5'],why:['bring down 3, lower the power','a constant multiple stays','the root as a power','term by term; a constant gives 0']}},
 {skill:'power',say:`To find f' at a number, differentiate first, then substitute. For f(x) = 3x² - 5x + 2, f'(x) = 6x - 5, so f'(2) = 12 - 5 = 7. A common mistake is putting the number in before differentiating, which gives the derivative of a constant: 0.`,eq:`f'(2) = 6(2) - 5 = 7`,pic:{t:'board',title:'f(x) = 3x² - 5x + 2: find f\'(2)',lines:['f\'(x) = 6x - 5','f\'(2) = 6(2) - 5','= 7'],why:['differentiate first','then substitute',''],box:true},
  check:{prompt:tryIt(TRY[1]),answer:23,options:[23,24,18],hint:`f'(x) = 6x² - 1. Substitute x = 2.`,pic:tab('f(x) = 2x³ - x + 4',[[`f'(x)`,'?'],[`f'(2)`,'?']])}},
 {skill:'special',say:'Four derivatives to know by heart: sin x gives cos x, cos x gives -sin x (watch the minus), eˣ gives itself, and ln x gives 1 ÷ x. Useful values: sin 0 = 0, cos 0 = 1, sin(π/2) = 1, cos(π/2) = 0, sin π = 0 and cos π = -1.',eq:`(sin x)' = cos x   (cos x)' = -sin x`,pic:{t:'plot',title:'The slope of sin x at 0 is cos 0 = 1',x:[-3.2,6.4],y:[-1.6,1.6],lines:[{m:1,b:0,label:'slope 1',dash:true}],paths:[{pts:SIN,label:'sin x'},{pts:COS,label:'cos x'}],points:[{x:0,y:0,label:'(0, 0)'},{x:0,y:1,label:'cos 0 = 1'}]}},
 {skill:'trig',say:'The other four trig functions: tan x gives sec²x, cot x gives -csc²x, sec x gives sec x·tan x, and csc x gives -csc x·cot x. The co-functions (cot, csc) carry the minus signs. Useful values: tan(π/4) = 1, sec(π/4)² = 2, csc(π/6) = 2, sec 0 = 1.',eq:`(tan x)' = sec²x   (cot x)' = -csc²x`,pic:{t:'board',title:'More trig derivatives',lines:['d/dx tan x = sec²x','d/dx cot x = -csc²x','d/dx sec x = sec x · tan x','d/dx csc x = -csc x · cot x'],why:['','the co-functions carry the minus','','the co-functions carry the minus']}},
 {skill:'product',say:`The product rule: (fg)' = f'g + fg'. It is not f'g': the derivative of a product is not, in general, the product of the derivatives. From a table, read f(c), f'(c), g(c) and g'(c) and put them in their places.`,eq:`(fg)' = f'g + fg'`,pic:{t:'board',title:'The product rule on x² · sin x',lines:['(fg)\' = f\'g + fg\'','d/dx (x² sin x) = 2x · sin x + x² · cos x'],why:['','f = x², g = sin x']},
  check:{prompt:tryIt(TRY[2]),answer:10,options:[10,14,-3],hint:`f'(1)g(1) = 3 × 4 and f(1)g'(1) = 2 × (-1). Add them.`,pic:tab('Values at x = 1',[['f(1)','2'],[`f'(1)`,'3'],['g(1)','4'],[`g'(1)`,'-1']])}},
 {skill:'quotient',say:`The quotient rule: (f ÷ g)' = (f'g - fg') ÷ g². The order on top matters, because of the minus sign: the derivative of the top comes first. A memory line: "low d-high minus high d-low, over low squared".`,eq:`(f ÷ g)' = (f'g - fg') ÷ g²`,pic:{t:'board',title:'The quotient rule on x ÷ (x + 1)',lines:['(f ÷ g)\' = (f\'g - fg\') ÷ g²','d/dx (x ÷ (x + 1)) = (1 · (x + 1) - x · 1) ÷ (x + 1)²','= 1 ÷ (x + 1)²'],why:['low d-high minus high d-low','f = x, g = x + 1','the x terms cancel'],box:true}},
 {skill:'quotient',summary:true,say:'Choosing a rule: a sum of powers takes the power rule term by term; a product takes the product rule; a fraction with x on the bottom takes the quotient rule (or rewrite it as a power first if the bottom is a single term like x³); trig, eˣ and ln x have their own derivatives. Then substitute. Most mistakes come from multiplying derivatives, dropping a minus sign on cos, cot or csc, or swapping the top of the quotient rule.',pic:{t:'board',title:'Which rule?',lines:['3x⁴ - 2x + 7: power rule, term by term','x³ · cos x: product rule','(x² + 1) ÷ (x - 4): quotient rule','5 ÷ x³ = 5x⁻³: rewrite, then the power rule'],why:[]}}],
progression:{requires:['math-h-quadratics','math-h-exponent-rules'],operations:3,demand:'Turn a difference quotient or a table into a rate, read derivative notation, write a tangent line, decide differentiability from continuity and matching slopes, and apply the right derivative rule before substituting a value.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 /* rate (2.1): average rates of quadratics, (f(b) - f(a)) ÷ (b - a) = p(a + b) + q; difference quotients; cubics */
 {let k=0;for(const [p,q,r] of [[1,0,1],[2,-3,1],[-1,4,0],[3,1,-2],[1,-4,5],[2,0,-3],[-2,3,1],[1,3,0]])for(const [a,b] of [[0,2],[1,4],[-1,3],[2,5]]){if((k++)%2)continue;
  const ts=[[p,2],[q,1],[r,0]],fa=at(ts,a),fb=at(ts,b),ans=(fb-fa)/(b-a);
  put('rate',`f(x) = ${poly(ts)}. What is the average rate of change of f on the interval [${a}, ${b}]?`,ans,quadPlot(p,q,r,a,b),`f(${b}) = ${fb} and f(${a}) = ${fa}, so the average rate of change is (${fb} - ${par(fa)}) ÷ (${b} - ${par(a)}) = ${fb-fa} ÷ ${b-a} = ${num(ans)}.`);}}
 for(const [p,q,a,h] of [[1,3,2,0.5],[2,-1,1,0.5],[1,0,3,0.1],[3,2,1,0.1],[-1,4,2,0.5],[2,5,0,1],[1,-2,4,0.1],[-2,1,1,1]]){const ts=[[p,2],[q,1]],fa=at(ts,a),fah=at(ts,a+h),ans=p*(2*a+h)+q;
  put('rate',`For f(x) = ${poly(ts)}, what is the difference quotient (f(${a} + h) - f(${a})) ÷ h when h = ${h}?`,r6(ans),tab(`f(x) = ${poly(ts)}`,[['a',`${a}`],['h',`${h}`]]),`f(${num(a+h)}) = ${num(fah)} and f(${a}) = ${fa}, so the quotient is (${num(fah)} - ${par(fa)}) ÷ ${h} = ${num(ans)}.`);}
 for(const [q,a,b] of [[0,1,2],[-3,0,2],[2,-1,1],[0,1,3],[-1,2,3],[4,-2,0]]){const ts=[[1,3],[q,1]],fa=at(ts,a),fb=at(ts,b),ans=(fb-fa)/(b-a);
  put('rate',`f(x) = ${poly(ts)}. What is the average rate of change of f on the interval [${a}, ${b}]?`,ans,tab(`f(x) = ${poly(ts)}`,[['a',`${a}`],['b',`${b}`]]),`f(${b}) = ${fb} and f(${a}) = ${fa}, so the average rate of change is (${fb} - ${par(fa)}) ÷ (${b} - ${par(a)}) = ${num(ans)}.`);}
 /* definition (2.2): limits that are derivatives of xⁿ at c; the difference quotient limit for a quadratic; notation */
 {let k=0;for(const n of [2,3,4])for(const c of [1,2,3,-1,-2,4]){if(n===4&&Math.abs(c)>2)continue;if((k++)%3===2)continue;const ans=n*c**(n-1);
  put('definition',`What is the value of lim (h → 0) of [(${c} + h)${SUP[n]} - ${par(c)}${SUP[n]}] ÷ h?`,ans,tab('The limit',[['x',`${c}`],['power',`${n}`]]),`This is the derivative of x${SUP[n]} at x = ${c}: ${n}·x${n-1>1?SUP[n-1]:''} at x = ${c} is ${n} × ${par(c)}${n-1>1?SUP[n-1]:''} = ${ans}.`);}}
 for(const [a,b,c0] of [[3,-1,2],[1,4,-1],[2,0,3],[-1,6,1],[5,2,0],[4,-3,2],[1,-6,3],[-2,1,-2]]){const ts=[[a,2],[b,1]],ans=2*a*c0+b;
  put('definition',`For f(x) = ${poly(ts)}, what is lim (h → 0) of [f(${c0} + h) - f(${c0})] ÷ h?`,ans,tab(`f(x) = ${poly(ts)}`,[['at x',`${c0}`]]),`The limit is f'(${c0}). Expanding, [f(${c0} + h) - f(${c0})] ÷ h = ${2*a*c0+b}${a?` ${a<0?'-':'+'} ${Math.abs(a)===1?'':Math.abs(a)}h`:''}, which goes to ${ans} as h goes to 0.`);}
 const MEAN=[[`f'(3) = 5. Which statement is true?`,'the tangent line to f at x = 3 has slope 5',['f(3) = 5','the average rate of change of f from 0 to 3 is 5']],
  [`s(t) is a car's position in meters after t seconds, and s'(4) = 12. What does s'(4) = 12 mean?`,'at t = 4 the car is moving at 12 meters per second',['at t = 4 the car is 12 meters from the start','the car went 12 meters in the first 4 seconds']],
  [`V(t) is the liters of water in a tank after t minutes, and V'(10) = -2. What does it mean?`,'at t = 10 the water is draining at 2 liters per minute',['at t = 10 the tank holds -2 liters','2 liters drained in the first 10 minutes']],
  ['Which notation means the derivative of f at x = a?',`f'(a)`,[`f(a)'`,`f(a')`]],
  [`P(d) is the price in dollars of d pounds of apples, and P'(5) = 1.5. What does it mean?`,'near 5 pounds, each extra pound adds about $1.50',['5 pounds cost $1.50','the price of 1.5 pounds is $5']],
  [`dy/dx = 0 at x = 2. What does this say about the graph of y at x = 2?`,'its tangent line is horizontal',['it crosses the x-axis','it has no tangent line']],
  [`f'(1) is negative. What does that say about f near x = 1?`,'f is decreasing there',['f is negative there','f is increasing there']],
  [`T(t) is a pie's temperature in °C after t minutes, and T'(20) = -3. What does it mean?`,'at 20 minutes the pie is cooling at 3 °C per minute',['after 20 minutes the pie is at -3 °C','the pie cooled 3 °C in 20 minutes']]];
 MEAN.forEach(([q,right,wrong],k)=>{const c=choose(right,wrong,k);put('definition',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('The derivative',[['question',q]],['']),`The derivative is an instantaneous rate of change, the slope of the tangent line: ${right}.`,[right.toLowerCase()]);});
 /* tangent (2.2): y-intercepts of tangent lines, and estimates by local linearity */
 for(const [ts,a] of [[[[1,2],[1,0]],2],[[[1,3]],1],[[[2,2],[-3,1]],2],[[[-1,2],[4,1]],1],[[[1,3],[-2,1]],-1],[[[3,2],[1,0]],-1],[[[1,2],[-4,1],[5,0]],3],[[[2,3]],1]]){const fa=at(ts,a),m=at(dpoly(ts),a),b0=fa-m*a;
  put('tangent',`What is the y-intercept of the line tangent to f(x) = ${poly(ts)} at x = ${a}?`,b0,tab(`f(x) = ${poly(ts)}`,[['at x',`${a}`]]),`f(${a}) = ${fa} and f'(${a}) = ${m}, so the tangent line is y = ${fa} + ${par(m)}(x - ${par(a)}). At x = 0 that is ${fa} - ${par(m)} × ${par(a)} = ${b0}.`);}
 for(const [f,a,fa,m,x,label] of [['√x',4,2,0.25,4.1,'√4.1'],['√x',9,3,1/6,9.6,'√9.6'],['eˣ',0,1,1,0.1,'e^0.1'],['ln x',1,0,1,1.05,'ln 1.05'],['x³',2,8,12,2.1,'2.1³'],['1 ÷ x',2,0.5,-0.25,2.2,'1 ÷ 2.2'],['√x',16,4,0.125,16.4,'√16.4'],['x²',5,25,10,5.02,'5.02²']]){const ans=fa+m*(x-a);
  put('tangent',`Use the line tangent to f(x) = ${f} at x = ${a} to estimate ${label}.`,r6(ans),tab(`f(x) = ${f}`,[['a',`${a}`],[`f(${a})`,`${fa}`],['x',`${x}`]]),`f(${a}) = ${fa} and f'(${a}) = ${num(m)}, so the estimate is ${fa} + ${num(m)} × (${x} - ${a}) = ${num(ans)}.`);}
 /* estimate (2.3): symmetric differences from tables, and one-sided differences */
 for(const [c,h,fa,k,fc] of [[2,1,3,5,7],[4,0.5,10,6,13],[1,0.5,-2,4,0],[3,2,8,-1,5],[5,1,20,3,24],[0,0.5,1,-2,0],[6,2,4,7,15],[10,0.5,30,-4,28]]){const fb=fa+2*h*k;
  put('estimate',`A table gives f(${num(c-h)}) = ${fa}, f(${c}) = ${fc} and f(${num(c+h)}) = ${fb}. Using the symmetric difference (f(c + h) - f(c - h)) ÷ 2h, what is the estimate of f'(${c})?`,k,tab('A table of f',[[`f(${num(c-h)})`,`${fa}`],[`f(${c})`,`${fc}`],[`f(${num(c+h)})`,`${fb}`]]),`(f(${num(c+h)}) - f(${num(c-h)})) ÷ (2 × ${h}) = (${fb} - ${par(fa)}) ÷ ${num(2*h)} = ${k}.`);}
 for(const [c,h,fc,fch,ctx] of [[2,0.1,5,5.4,'f'],[0,0.5,3,2,'f'],[10,2,40,46,'T'],[3,0.2,7,7.5,'f'],[60,5,120,135,'D'],[1,0.01,2,2.03,'f']]){const ans=(fch-fc)/h,fn=ctx==='T'?'T':ctx==='D'?'D':'f';
  put('estimate',`${fn}(${c}) = ${fc} and ${fn}(${num(c+h)}) = ${fch}. Using these two values, what is the estimate of ${fn}'(${c})?`,r6(ans),tab('Two values',[[`${fn}(${c})`,`${fc}`],[`${fn}(${num(c+h)})`,`${fch}`]]),`(${fch} - ${fc}) ÷ ${h} = ${num(ans)}.`);}
 /* differentiable (2.4): two-piece functions at the join, and the shapes with no derivative */
 for(const [c,e] of [[2,1],[1,-3],[3,0],[-1,2]])for(const kind of ['yes','corner','jump']){
  const m=kind==='corner'?2*c+1:2*c,b=c*c+e-m*c+(kind==='jump'?2:0),lin=[[m,1],[b,0]],sq=[[1,2],[e,0]],yes=kind==='yes';
  put('differentiable',`f(x) = ${poly(lin)} for x < ${c}, and f(x) = ${poly(sq)} for x ≥ ${c}. Is f differentiable at x = ${c}? Answer yes or no.`,yes?'yes':'no',tab(`The join at x = ${c}`,[['left piece',poly(lin)],['right piece',poly(sq)]]),
   `At x = ${c} the left piece gives ${m*c+b} and the right piece gives ${c*c+e}${kind==='jump'?', so f jumps there and cannot be differentiable':`, so f is continuous. The slopes there are ${m} and 2 × ${par(c)} = ${2*c}, ${yes?'which match, so the answer is yes':'which differ, so there is a corner and the answer is no'}`}.`);}
 for(const [s,yes,why] of [['Is f(x) = |x - 3| differentiable at x = 3?','no','the graph has a corner at x = 3: slope -1 on the left, 1 on the right'],['Is f(x) = the cube root of x differentiable at x = 0?','no','the tangent line at 0 is vertical, so the slope is not a number'],
  ['Is f(x) = x³ - 2x + 7 differentiable at every x?','yes','polynomials are smooth everywhere'],['If f is differentiable at x = a, must f be continuous at x = a?','yes','differentiable always means continuous'],
  ['If f is continuous at x = a, must f be differentiable at x = a?','no','a corner, like |x| at 0, is continuous but not differentiable'],['A function has a jump at x = 2. Can it be differentiable at x = 2?','no','a jump breaks continuity, and without continuity there is no derivative'],
  ['Is f(x) = |x| differentiable at x = 5?','yes','for x > 0, |x| is the line y = x, which is smooth'],['Is f(x) = x^(2/3) differentiable at x = 0?','no','it has a cusp at 0: the slopes shoot to minus and plus infinity on the two sides']])
  put('differentiable',`${s} Answer yes or no.`,yes,tab('Differentiability',[['question',s]],['']),`${yes==='yes'?'Yes':'No'}: ${why}.`);
 /* power (2.5, 2.6): polynomials at a point; k√x; k ÷ x */
 {let k=0;for(const [a,b,c,d] of [[1,0,-5,7],[2,-3,1,4],[-1,2,4,0],[3,0,0,-2],[1,-3,2,1],[2,1,-4,3],[-2,0,6,5],[1,2,0,-1]])for(const x0 of [-1,1,2,3]){if((k++)%2)continue;
  const ts=[[a,3],[b,2],[c,1],[d,0]],ds=dpoly(ts),ans=at(ds,x0);
  put('power',`f(x) = ${poly(ts)}. What is f'(${x0})?`,ans,tab(`f(x) = ${poly(ts)}`,[[`f'(x)`,'?'],[`f'(${x0})`,'?']]),`f'(x) = ${poly(ds)}, so f'(${x0}) = ${ans}.`);}}
 for(const [k,x] of [[2,4],[6,4],[1,16],[10,25],[4,1],[20,100],[3,16]]){const r=Math.sqrt(x),ans=k/(2*r);
  put('power',`f(x) = ${k===1?'':k}√x. What is f'(${x})?`,ans,tab(`f(x) = ${k===1?'':k}√x`,[['x',`${x}`]]),`√x = x^(1/2), so f'(x) = ${k} ÷ (2√x). At x = ${x}, √${x} = ${r}, so f'(${x}) = ${k} ÷ ${2*r} = ${num(ans)}.`);}
 for(const [k,x] of [[8,2],[3,2],[1,4],[20,10],[5,5],[12,2],[2,1]]){const ans=-k/(x*x);
  put('power',`f(x) = ${k} ÷ x. What is f'(${x})?`,ans,tab(`f(x) = ${k} ÷ x`,[['x',`${x}`]]),`${k} ÷ x = ${k}x^(-1), so f'(x) = -${k} ÷ x². At x = ${x} that is -${k} ÷ ${x*x} = ${num(ans)}.`);}
 /* special (2.7): a sin x + b cos x at 0, π/2, π; eˣ; ln x */
 {let k=0;for(const [a,b] of [[3,-2],[2,5],[-4,1],[5,3],[1,-6]])for(const p of ['0','pi/2','pi']){if((k++)%5===4)continue;
  const f=`${co(a)}sin x${tail(b,'cos x')}`,ans=p==='0'?a:p==='pi'?-a:-b;
  put('special',`f(x) = ${f}. What is f'(${PI[p]})?`,ans,tab(`f(x) = ${f}`,[['x',PI[p]]]),`f'(x) = ${co(a)}cos x${tail(-b,'sin x')}. At x = ${PI[p]}, cos x = ${p==='0'?1:p==='pi'?-1:0} and sin x = ${p==='pi/2'?1:0}, so f'(${PI[p]}) = ${ans}.`);}}
 for(const [a,b] of [[3,2],[-2,5],[4,-1],[1,3],[6,0]]){const f=`${co(a).trim()}eˣ${tail(b,'x')}`,ans=a+b;
  put('special',`f(x) = ${f}. What is f'(0)?`,ans,tab(`f(x) = ${f}`,[['x','0']]),`f'(x) = ${a===1?'':a}eˣ${b?` ${b<0?'-':'+'} ${Math.abs(b)}`:''}, and e⁰ = 1, so f'(0) = ${a}${b?` ${b<0?'-':'+'} ${Math.abs(b)}`:''} = ${ans}.`);}
 for(const [a,b,c] of [[2,0,4],[4,1,2],[10,-3,5],[3,2,1],[-5,4,10],[6,0,8],[1,-1,2]]){const f=`${co(a)}ln x${tail(b,'x')}`,ans=a/c+b;
  put('special',`f(x) = ${f}. What is f'(${c})? Give a decimal if it is not a whole number.`,r6(ans),tab(`f(x) = ${f}`,[['x',`${c}`]]),`f'(x) = ${a} ÷ x${b?` ${b<0?'-':'+'} ${Math.abs(b)}`:''}. At x = ${c} that is ${a} ÷ ${c}${b?` ${b<0?'-':'+'} ${Math.abs(b)}`:''} = ${num(ans)}.`);}
 /* trig (2.10): tan, cot, sec, csc at exact angles, and which derivative goes with which */
 for(const [a,b] of [[3,0],[2,-5],[-1,4],[5,1]]){const f=`${co(a)}tan x${tail(b,'x')}`,ans=a+b;
  put('trig',`f(x) = ${f}. What is f'(0)?`,ans,tab(`f(x) = ${f}`,[['x','0']]),`f'(x) = ${a} sec²x${b?` ${b<0?'-':'+'} ${Math.abs(b)}`:''}, and sec 0 = 1, so f'(0) = ${a}${b?` ${b<0?'-':'+'} ${Math.abs(b)}`:''} = ${ans}.`);}
 for(const [k,fn,ang,v,why] of [[1,'tan','π/4',2,'sec²(π/4) = (√2)² = 2'],[1,'tan','π/3',4,'sec²(π/3) = 2² = 4'],[3,'tan','π/4',6,'3 sec²(π/4) = 3 × 2'],[1,'cot','π/4',-2,'-csc²(π/4) = -(√2)² = -2'],[1,'cot','π/2',-1,'-csc²(π/2) = -1'],[1,'cot','π/6',-4,'-csc²(π/6) = -2² = -4'],
  [2,'cot','π/4',-4,'2 × (-csc²(π/4)) = 2 × (-2)'],[1,'sec','0',0,'sec 0 · tan 0 = 1 × 0'],[4,'sec','π',0,'4 sec π · tan π = 4 × (-1) × 0'],[1,'csc','π/2',0,'-csc(π/2)·cot(π/2) = -1 × 0'],[5,'sec','0',0,'5 sec 0 · tan 0 = 0']])
  put('trig',`f(x) = ${k===1?'':k+' '}${fn} x. What is f'(${ang})?`,v,tab(`f(x) = ${k===1?'':k+' '}${fn} x`,[['x',ang]]),`The derivative of ${fn} x is ${{tan:'sec²x',cot:'-csc²x',sec:'sec x · tan x',csc:'-csc x · cot x'}[fn]}, so f'(${ang}) = ${why} = ${v}.`);
 const D={tan:'sec²x',cot:'-csc²x',sec:'sec x · tan x',csc:'-csc x · cot x'};
 ['tan','cot','sec','csc'].forEach((fn,k)=>{const wrong=Object.entries(D).filter(([g])=>g!==fn).map(([,v])=>v).slice(0,2),c=choose(D[fn],wrong,k);
  put('trig',`What is the derivative of ${fn} x? ${c.text}. Answer A, B or C.`,c.letter,tab('Trig derivatives',[['function',`${fn} x`]],['']),`The derivative of ${fn} x is ${D[fn]}.`,[D[fn].toLowerCase()]);});
 /* product (2.8) and quotient (2.9): from tables of values, and h(x) = x²·f(x) */
 const vals=(c,f,df,g,dg)=>`f(${c}) = ${f}, f'(${c}) = ${df}, g(${c}) = ${g} and g'(${c}) = ${dg}`;
 const vtab=(c,f,df,g,dg)=>tab(`Values at x = ${c}`,[[`f(${c})`,`${f}`],[`f'(${c})`,`${df}`],[`g(${c})`,`${g}`],[`g'(${c})`,`${dg}`]]);
 const SETS=[[2,3,-1,4,5],[1,2,3,4,-1],[0,5,2,-1,3],[3,-2,4,1,2],[-1,4,1,2,-3],[2,1,-2,5,1],[4,6,1,-2,4],[1,-3,5,2,2],[5,2,2,4,0],[0,-4,3,5,-1],[2,7,-1,1,3],[3,1,6,-2,-1],[-2,3,0,4,2]];
 for(const [c,f,df,g,dg] of SETS){const ans=df*g+f*dg;
  put('product',`${vals(c,f,df,g,dg)}. If h(x) = f(x)g(x), what is h'(${c})?`,ans,vtab(c,f,df,g,dg),`h'(${c}) = f'(${c})g(${c}) + f(${c})g'(${c}) = ${par(df)} × ${par(g)} + ${par(f)} × ${par(dg)} = ${ans}.`);
  const q=(df*g-f*dg)/(g*g);
  put('quotient',`${vals(c,f,df,g,dg)}. If h(x) = f(x) ÷ g(x), what is h'(${c})? Give a decimal if it is not a whole number.`,r6(q),vtab(c,f,df,g,dg),`h'(${c}) = (f'(${c})g(${c}) - f(${c})g'(${c})) ÷ g(${c})² = (${par(df)} × ${par(g)} - ${par(f)} × ${par(dg)}) ÷ ${g*g} = ${df*g-f*dg} ÷ ${g*g} = ${num(q)}.`);}
 for(const [c,f,df] of [[2,3,1],[1,-2,4],[3,1,-1],[-1,5,2],[2,-1,3]]){const ans=2*c*f+c*c*df;
  put('product',`f(${c}) = ${f} and f'(${c}) = ${df}. If h(x) = x²f(x), what is h'(${c})?`,ans,tab(`Values at x = ${c}`,[[`f(${c})`,`${f}`],[`f'(${c})`,`${df}`]]),`By the product rule h'(x) = 2x·f(x) + x²·f'(x), so h'(${c}) = 2 × ${par(c)} × ${par(f)} + ${par(c)}² × ${par(df)} = ${ans}.`);}
 for(const [a,x] of [[1,1],[2,0],[3,1],[1,3],[4,1]]){const ans=a/((x+a)**2);
  put('quotient',`f(x) = x ÷ (x + ${a}). What is f'(${x})? Give a decimal if it is not a whole number.`,r6(ans),tab(`f(x) = x ÷ (x + ${a})`,[['x',`${x}`]]),`By the quotient rule f'(x) = ((x + ${a}) · 1 - x · 1) ÷ (x + ${a})² = ${a} ÷ (x + ${a})². At x = ${x}: ${a} ÷ ${(x+a)**2} = ${num(ans)}.`);}
 [[`What is the derivative of f(x) ÷ g(x)?`,`(f'g - fg') ÷ g²`,[`(fg' - f'g) ÷ g²`,`f' ÷ g'`],'quotient',1],[`What is the derivative of f(x)g(x)?`,`f'g + fg'`,[`f'g'`,`f'g - fg'`],'product',2]].forEach(([s,right,wrong,sk,k])=>{const c=choose(right,wrong,k);
  put(sk,`${s} ${c.text}. Answer A, B or C.`,c.letter,tab('The rule',[['asked',s]],['']),`The ${sk} rule: ${right}.`);});
}};
