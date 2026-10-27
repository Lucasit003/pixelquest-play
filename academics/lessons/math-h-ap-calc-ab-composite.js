// High School course unit (docs/design/COURSES.md, brought to docs/design/COURSE_QUALITY.md's bar on 10 Oct): AP Calculus AB, Unit 3, Differentiation: Composite, Implicit, and
// Inverse Functions (the course's public outline; our own wording and questions, nothing copied). The chain rule:
// (f(g(x)))' = f'(g(x))·g'(x). Implicit differentiation treats y as a function of x, so the derivative of y² is 2y·y'.
// The derivative of an inverse: if f(a) = b then (f⁻¹)'(b) = 1 ÷ f'(a). Inverse trig: (arcsin x)' = 1 ÷ √(1 - x²),
// (arccos x)' = -1 ÷ √(1 - x²), (arctan x)' = 1 ÷ (1 + x²). Second derivatives are the derivative of the derivative.
// Every answer is computed here from the numbers in its own prompt and is a whole number or a terminating decimal; the
// prime is written with a plain apostrophe, so strings holding one are template literals.
const SUP={2:'²',3:'³',4:'⁴',5:'⁵'};
const term=(c,p)=>{const a=Math.abs(c);return (p===0?String(a):a===1?'':String(a))+(p===0?'':p===1?'x':'x'+SUP[p]);};
const poly=ts=>{const n=ts.filter(([c])=>c);return n.length?n.map(([c,p],i)=>(i?(c<0?' - ':' + '):(c<0?'-':''))+term(c,p)).join(''):'0';};
const at=(ts,x)=>ts.reduce((s,[c,p])=>s+c*x**p,0);
const dpoly=ts=>ts.filter(([,p])=>p>0).map(([c,p])=>[c*p,p-1]);
const num=v=>String(Math.round(v*1e6)/1e6);
const par=v=>v<0?`(${num(v)})`:num(v);
const r6=v=>Math.round(v*1e6)/1e6;
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const lin=(a,b)=>poly([[a,1],[b,0]]);
/* The three Try-it questions in pool form; the generator skips them. */
/* points along arctan x, x³ and 3x², for their graphs */
const ATAN=Array.from({length:81},(_,i)=>{const x=-4+8*i/80;return [x,Math.atan(x)];});
const CUBEP=Array.from({length:81},(_,i)=>{const x=-2+4*i/80;return [x,x**3];}),SQ3=CUBEP.map(([x])=>[x,3*x*x]);
const fig=(title,o)=>({t:'figure',title,...o});
/* f(x) = x³ + x for 0 ≤ x ≤ 1.35, so that both f and its inverse stay inside a 4 by 4 grid */
const FX=Array.from({length:55},(_,i)=>{const x=1.35*i/54;return [x,x**3+x];});
const TRY=[`h(x) = (2x + 1)³. What is h'(1)?`,`The point (3, 4) lies on the circle x² + y² = 25. What is dy/dx there?`,`f(x) = x³ + x, so f(1) = 2. What is the derivative of the inverse function of f at x = 2?`];
const tryIt=s=>`Try it: ${s}`;
export default {
id:'math-h-ap-calc-ab-composite-implicit-and-inverse-functions',subject:'math',level:5,grade:9,standard:'AP Calculus AB, Unit 3',
title:'Chain rule, implicit and inverse derivatives',
goal:'Differentiate composite functions with the chain rule, find slopes on curves by implicit differentiation, find derivatives of inverse and inverse trig functions, and take second derivatives.',
points:20,
skills:{chain:'The chain rule',implicit:'Implicit differentiation',inverse:'Inverse functions',arctrig:'Inverse trig functions',select:'Choosing procedures',second:'Higher-order derivatives'},
outline:[['3.1','The chain rule',['chain']],['3.2','Implicit differentiation',['implicit']],['3.3','Differentiating inverse functions',['inverse']],['3.4','Differentiating inverse trigonometric functions',['arctrig']],['3.5','Selecting procedures for calculating derivatives',['select']],['3.6','Calculating higher-order derivatives',['second']]],
steps:[
 {skill:'chain',say:`A composite function f(g(x)) has an inside and an outside. The chain rule: differentiate the outside, keep the inside, then multiply by the derivative of the inside: (f(g(x)))' = f'(g(x))·g'(x).`,eq:`(f(g(x)))' = f'(g(x))·g'(x)`,pic:{t:'board',title:'The chain rule on (3x + 1)²',lines:['d/dx (3x + 1)² = 2(3x + 1) · 3','= 6(3x + 1)','= 18x + 6'],why:['outside u² gives 2u; inside gives 3','',''],box:true},
  check:{prompt:tryIt(TRY[0]),answer:54,options:[54,27,18],hint:`h'(x) = 3(2x + 1)² · 2. Put in x = 1.`,pic:tab('h(x) = (2x + 1)³',[['outside','u³'],['inside','2x + 1']])}},
 {skill:'chain',say:`The chain rule works on every kind of outside: the derivative of sin(kx) is k·cos(kx), of e^(kx) is k·e^(kx), and of ln(g(x)) is g'(x) ÷ g(x). From a table, h'(c) = f'(g(c))·g'(c): find g(c) first, then look up f' there.`,pic:{t:'board',title:'The chain rule on other outsides',lines:['d/dx sin(4x) = 4cos(4x)','d/dx e^(2x) = 2e^(2x)','d/dx ln(x² + 1) = 2x ÷ (x² + 1)'],why:['the inside 4x gives 4','the inside 2x gives 2','g\'(x) ÷ g(x)']}},
 {skill:'implicit',say:`Some curves are not written as y = ..., like the circle x² + y² = 25. Differentiate both sides with respect to x, remembering that y depends on x, so y² becomes 2y·y'. Then solve for y'. For the circle, 2x + 2y·y' = 0, so y' = -x ÷ y.`,eq:`x² + y² = r²  →  dy/dx = -x ÷ y`,pic:fig('x² + y² = 25: the tangent at (3, 4) has slope -3 ÷ 4',{grid:{x:[-6,8],y:[-6,6]},pts:{O:[0,0],P:[3,4],Q:[7,1]},hide:'PQ',dots:'OP',circles:[{c:'O',r:5,col:0}],segs:[{v:'OP',col:3,w:2},{v:'PQ',line:true,col:1}],angles:[{v:'OPQ',right:true}],notes:[{at:[3.9,4.6],text:'(3, 4)'}]}),
  check:{prompt:tryIt(TRY[1]),answer:-0.75,options:[-0.75,0.75,-1.33],hint:'dy/dx = -x ÷ y at (3, 4).',pic:tab('The circle',[['point','(3, 4)'],['rule','-x ÷ y']])}},
 {skill:'implicit',say:`A worked example with a product in it: for x² + xy + y² = 7, differentiating term by term gives 2x + (y + x·y') + 2y·y' = 0 (the product rule on xy). Gather the y' terms: y'(x + 2y) = -(2x + y), so y' = -(2x + y) ÷ (x + 2y). At (2, 1) that is -5 ÷ 4 = -1.25. The usual mistake is forgetting the y' that comes with every y term.`,eq:`y' = -(2x + y) ÷ (x + 2y)`,pic:{t:'board',title:'x² + xy + y² = 7: find y\' at (2, 1)',lines:['2x + (y + x · y\') + 2y · y\' = 0','y\'(x + 2y) = -(2x + y)','y\' = -(2x + y) ÷ (x + 2y)','at (2, 1): y\' = -5 ÷ 4 = -1.25'],why:['the product rule on xy','gather the y\' terms','','']}},
 {skill:'inverse',say:`An inverse function undoes f. If f(a) = b, the slopes at matching points are reciprocals: (f⁻¹)'(b) = 1 ÷ f'(a). So first find the a with f(a) = b.`,eq:`(f⁻¹)'(b) = 1 ÷ f'(a)`,pic:{t:'board',title:'f(x) = x³ + x: find (f⁻¹)\'(2)',lines:['f(1) = 1 + 1 = 2','f\'(x) = 3x² + 1, so f\'(1) = 4','(f⁻¹)\'(2) = 1 ÷ f\'(1) = 0.25'],why:['the a with f(a) = 2 is 1','','the reciprocal slope'],box:true},
  check:{prompt:tryIt(TRY[2]),answer:0.25,options:[0.25,4,0.5],hint:`f'(x) = 3x² + 1, so f'(1) = 4. Take its reciprocal.`,pic:tab('f(x) = x³ + x',[['f(1)','2']])}},
 {skill:'inverse',say:`Why reciprocals: the graph of f⁻¹ is the graph of f reflected over the line y = x, which swaps rise and run. So if f climbs 4 for each 1 across at (1, 2), the inverse climbs 1 for each 4 across at (2, 1). Watch the inputs: (f⁻¹)'(b) uses f' at a, the x-value that f sends to b, not f'(b).`,eq:`(f⁻¹)'(f(a)) = 1 ÷ f'(a)`,pic:{t:'plot',title:'f and its inverse are mirror images in y = x',x:[0,4],y:[0,4],lines:[{m:1,b:0,label:'y = x',dash:true}],paths:[{pts:FX,label:'f'},{pts:FX.map(([x,y])=>[y,x]).sort((a,b)=>a[0]-b[0]),label:'f⁻¹'}],points:[{x:1,y:2,label:'(1, 2): slope 4'},{x:2,y:1,label:'(2, 1): slope 1/4'}]}},
 {skill:'arctrig',say:`Inverse trig functions have algebraic derivatives: (arcsin x)' = 1 ÷ √(1 - x²), (arccos x)' = -1 ÷ √(1 - x²), and (arctan x)' = 1 ÷ (1 + x²). At x = 1, arctan is changing at 1 ÷ 2 = 0.5.`,eq:`(arctan x)' = 1 ÷ (1 + x²)`,pic:{t:'plot',title:'arctan x has slope 1 ÷ (1 + 1²) = 0.5 at x = 1',x:[-4,4],y:[-1.8,1.8],lines:[{m:0.5,b:Math.atan(1)-0.5,label:'slope 0.5',dash:true}],paths:[{pts:ATAN,label:'arctan x'}],points:[{x:1,y:Math.atan(1),label:'(1, π/4)'}]}},
 {skill:'select',say:`Real problems mix the rules. Work from the outside in and name each layer. For h(x) = x²·e^(3x), the outside is a product, so h' = 2x·e^(3x) + x²·3e^(3x) (product rule, with the chain rule inside the second part). For ln(x² + 1), the outside is ln, so h' = 2x ÷ (x² + 1). For √(x² + 9) = (x² + 9)^(1/2), h' = x ÷ √(x² + 9).`,eq:`(x²·e^(3x))' = 2x·e^(3x) + 3x²·e^(3x)`,pic:{t:'board',title:'Name the outside layer first',lines:['x² · e^(3x): a product first','→ 2x · e^(3x) + x² · 3e^(3x)','ln(x² + 1): ln on the outside','→ 2x ÷ (x² + 1)'],why:['','the chain rule inside the second part','','']}},
 {skill:'second',say:`The second derivative f'' is the derivative of f'. It tells how the slope is changing: for position, the first derivative is velocity and the second is acceleration. With implicit curves, differentiate y' again: for x² + y² = r², y' = -x ÷ y and y'' = -r² ÷ y³.`,eq:`f''(x) = (f'(x))'`,pic:{t:'plot',title:'x³, its slope 3x², and that slope\'s slope 6x',x:[-2,2],y:[-8,8],lines:[{m:6,b:0,label:'f\'\' = 6x'}],paths:[{pts:CUBEP,label:'f = x³'},{pts:SQ3,label:'f\' = 3x²'}]}},
 {skill:'second',summary:true,say:`Putting Unit 3 together: peel composites from the outside in with the chain rule; differentiate equations in x and y implicitly, tacking y' onto every y term; turn a slope of f into a slope of its inverse with 1 ÷ f'(a) at the matching point; use the arcsin, arccos and arctan formulas; and differentiate again for second derivatives. Check each answer's sign and units: a slope, a rate, or an acceleration.`,pic:tab('Unit 3 at a glance',[['composite','chain rule'],['equation in x and y','implicit'],['inverse',`1 ÷ f'(a)`],['arcsin, arccos, arctan','their formulas'],['second derivative','differentiate twice']],['Tool'])}],
progression:{requires:['math-h-ap-calc-ab-differentiation-definition-and-properties'],operations:3,demand:'Peel a composite function from the outside in, solve an implicit derivative for dy/dx, and turn a slope of f into a slope of its inverse.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 /* chain: powers of linear insides, sin/e/ln insides, and tables */
 for(const [a,b,n,x] of [[2,1,3,0],[3,-1,2,1],[1,2,4,-1],[2,-3,3,2],[5,0,2,1],[4,1,2,0],[1,-1,5,2],[3,2,3,-1]]){const ans=n*(a*x+b)**(n-1)*a;
  put('chain',`h(x) = (${lin(a,b)})${SUP[n]??'^'+n}. What is h'(${x})?`,ans,tab(`h(x) = (${lin(a,b)})${SUP[n]??'^'+n}`,[['outside',`u${SUP[n]??'^'+n}`],['inside',lin(a,b)]]),`h'(x) = ${n}(${lin(a,b)})${n-1>1?(SUP[n-1]??'^'+(n-1)):''} · ${a}. At x = ${x}: ${n} × ${par(a*x+b)}${n-1>1?(SUP[n-1]??'^'+(n-1)):''} × ${a} = ${ans}.`);}
 for(const [k,f] of [[3,'sin'],[5,'sin'],[-2,'sin'],[4,'e'],[-3,'e'],[0.5,'e'],[2,'tan'],[6,'tan']]){const g=f==='sin'?`sin(${k}x)`:f==='e'?`e^(${k}x)`:`tan(${k}x)`;
  put('chain',`h(x) = ${g}. What is h'(0)?`,k,tab(`h(x) = ${g}`,[['x','0']]),`By the chain rule h'(x) = ${k} · ${f==='sin'?`cos(${k}x)`:f==='e'?`e^(${k}x)`:`sec²(${k}x)`}, and at x = 0 the outside part is 1, so h'(0) = ${k}.`);}
 for(const [a,b,x] of [[2,1,2],[3,1,1],[4,4,1],[1,3,1],[5,5,3],[2,6,2]]){const ans=a/(a*x+b);
  put('chain',`h(x) = ln(${lin(a,b)}). What is h'(${x})? Give a decimal if it is not a whole number.`,r6(ans),tab(`h(x) = ln(${lin(a,b)})`,[['x',`${x}`]]),`h'(x) = ${a} ÷ (${lin(a,b)}). At x = ${x}: ${a} ÷ ${a*x+b} = ${num(ans)}.`);}
 for(const [c,gc,dgc,dfg] of [[1,3,2,5],[2,0,-1,4],[0,2,3,-2],[3,1,4,6],[-1,4,0.5,8],[2,5,-3,2]]){const ans=dfg*dgc;
  put('chain',`g(${c}) = ${gc}, g'(${c}) = ${dgc} and f'(${gc}) = ${dfg}. If h(x) = f(g(x)), what is h'(${c})?`,r6(ans),tab('Values',[[`g(${c})`,`${gc}`],[`g'(${c})`,`${dgc}`],[`f'(${gc})`,`${dfg}`]]),`h'(${c}) = f'(g(${c})) · g'(${c}) = f'(${gc}) × ${par(dgc)} = ${dfg} × ${par(dgc)} = ${num(ans)}.`);}
 /* implicit: circles at Pythagorean points, xy = k, x² + xy + y² = c */
 for(const [x,y] of [[3,4],[4,3],[-3,4],[6,8],[5,12],[-8,6],[12,5],[3,-4]]){const r2=x*x+y*y,ans=-x/y;
  if(!Number.isInteger(ans*10000)&&Math.abs(ans*10000-Math.round(ans*10000))>1e-9)continue;
  put('implicit',`The point (${x}, ${y}) lies on the circle x² + y² = ${r2}. What is dy/dx there?`,r6(ans),tab('The circle',[['curve',`x² + y² = ${r2}`],['point',`(${x}, ${y})`]]),`2x + 2y·y' = 0, so y' = -x ÷ y = -${par(x)} ÷ ${par(y)} = ${num(ans)}.`);}
 for(const [x,y] of [[0,5],[-6,8],[15,20],[0,-3]]){const r2=x*x+y*y,ans=-x/y+0;
  put('implicit',`The point (${x}, ${y}) lies on the circle x² + y² = ${r2}. What is dy/dx there?`,r6(ans),tab('The circle',[['curve',`x² + y² = ${r2}`],['point',`(${x}, ${y})`]]),`2x + 2y·y' = 0, so y' = -x ÷ y = -${par(x)} ÷ ${par(y)} = ${num(ans)}.`);}
 for(const [x,y] of [[5,4],[2,1],[3,2],[4,2],[5,-4],[10,8]]){const k=x*x-y*y,ans=x/y;
  put('implicit',`The point (${x}, ${y}) lies on the curve x² - y² = ${k}. What is dy/dx there?`,r6(ans),tab('The curve',[['curve',`x² - y² = ${k}`],['point',`(${x}, ${y})`]]),`2x - 2y·y' = 0, so y' = x ÷ y = ${par(x)} ÷ ${par(y)} = ${num(ans)}.`);}
 for(const [x,y] of [[2,6],[4,2],[5,1],[1,8],[-2,5],[10,4]]){const ans=-y/x;
  put('implicit',`The point (${x}, ${y}) lies on the curve xy = ${x*y}. What is dy/dx there?`,r6(ans),tab('The curve',[['curve',`xy = ${x*y}`],['point',`(${x}, ${y})`]]),`y + x·y' = 0, so y' = -y ÷ x = -${par(y)} ÷ ${par(x)} = ${num(ans)}.`);}
 for(const [x,y] of [[1,1],[2,0],[1,-2],[0,2],[3,-1],[2,1],[1,2]]){const c=x*x+x*y+y*y,den=x+2*y;if(!den||!c)continue;const ans=-(2*x+y)/den;
  if(Math.abs(ans*1e4-Math.round(ans*1e4))>1e-9)continue;
  put('implicit',`The point (${x}, ${y}) lies on the curve x² + xy + y² = ${c}. What is dy/dx there?`,r6(ans),tab('The curve',[['curve',`x² + xy + y² = ${c}`],['point',`(${x}, ${y})`]]),`2x + (y + x·y') + 2y·y' = 0, so y' = -(2x + y) ÷ (x + 2y) = -(${2*x+y}) ÷ ${den} = ${num(ans)}.`);}
 /* inverse: from formulas (find a with f(a) = b) and from tables */
 for(const [ts,a] of [[[[1,3],[1,1]],-1],[[[1,3],[2,1]],1],[[[2,1],[1,0]],4],[[[1,3],[4,1]],0],[[[1,3],[5,1]],1],[[[2,3],[2,1]],1],[[[1,3],[2,1],[1,0]],0],[[[4,1],[-3,0]],5],[[[2,3],[4,1]],1],[[[1,5],[3,1]],1]]){const b=at(ts,a),d=at(dpoly(ts),a),ans=1/d;
  if(Math.abs(ans*1e4-Math.round(ans*1e4))>1e-9)continue;
  put('inverse',`f(x) = ${poly(ts)}, so f(${a}) = ${b}. What is the derivative of the inverse function of f at x = ${b}?`,r6(ans),tab(`f(x) = ${poly(ts)}`,[[`f(${a})`,`${b}`]]),`f'(x) = ${poly(dpoly(ts))}, so f'(${a}) = ${d}, and (f⁻¹)'(${b}) = 1 ÷ ${d} = ${num(ans)}.`);}
 for(const [a,b,d] of [[2,5,4],[1,3,-2],[0,7,0.5],[3,10,5],[-1,2,8],[4,9,-0.25],[5,1,2.5],[2,-3,10]]){const ans=1/d;
  put('inverse',`f(${a}) = ${b} and f'(${a}) = ${d}. If g is the inverse function of f, what is g'(${b})?`,r6(ans),tab('Values of f',[[`f(${a})`,`${b}`],[`f'(${a})`,`${d}`]]),`g'(${b}) = 1 ÷ f'(${a}) = 1 ÷ ${par(d)} = ${num(ans)}.`);}
 for(const [s,yes] of [[`If f'(a) = 3, then the inverse has slope 1 ÷ 3 at the matching point.`,'yes'],[`The derivative of an inverse function at b equals f'(b).`,'no'],[`If f is increasing, its inverse is increasing too.`,'yes'],[`If f'(a) = 0, the inverse's derivative at f(a) is 0.`,'no']])
  put('inverse',`True or false, answered yes or no: ${s}`,yes,tab('Inverses',[['statement',s]],['']),yes==='yes'?'Yes: slopes of a function and its inverse at matching points are reciprocals.':`No: the inverse's slope is 1 ÷ f'(a), at the point matching a, and is undefined when f'(a) = 0.`);
 /* arctrig: exact values of the three derivatives, and with a constant factor */
 /* arcsin and arccos terminate only at 0 and ±0.6; elsewhere the answer is asked to two decimal places, never near a rounding edge */
 const two=v=>{const f=Math.abs(v*100)-Math.floor(Math.abs(v*100));return Math.abs(f-.5)<.05?null:Math.round(v*100)/100;};
 for(const [f,sg] of [['arcsin',1],['arccos',-1]])for(const x of [0,0.6,-0.6,0.8,-0.8,0.28,0.96]){const v=sg/Math.sqrt(1-x*x),exact=Math.abs(v*1e4-Math.round(v*1e4))<1e-9,ans=exact?r6(v):two(v);if(ans===null)continue;
  put('arctrig',`What is the derivative of ${f} x at x = ${x}?${exact?'':' Give it to two decimal places.'}`,ans,tab(`${f} x`,[['x',`${x}`]]),`(${f} x)' = ${sg<0?'-':''}1 ÷ √(1 - x²) = ${sg<0?'-':''}1 ÷ √${num(1-x*x)} = ${sg<0?'-':''}1 ÷ ${num(Math.sqrt(1-x*x))}${exact?` = ${num(v)}`:`, about ${ans}`}.`);}
 for(const x of [0,1,2,3,0.5,7,-1,-2])put('arctrig',`What is the derivative of arctan x at x = ${x}?`,r6(1/(1+x*x)),tab('arctan x',[['x',`${x}`]]),`(arctan x)' = 1 ÷ (1 + x²) = 1 ÷ ${num(1+x*x)} = ${num(1/(1+x*x))}.`);
 for(const [k,f,x] of [[4,'arctan',1],[10,'arctan',2],[5,'arcsin',0.6],[3,'arctan',3],[-2,'arctan',0],[8,'arcsin',-0.6]]){const d=f==='arctan'?1/(1+x*x):1/Math.sqrt(1-x*x),ans=k*d;
  put('arctrig',`h(x) = ${k} ${f} x. What is h'(${x})?`,r6(ans),tab(`h(x) = ${k} ${f} x`,[['x',`${x}`]]),`h'(x) = ${k} × (${f} x)', and at x = ${x} that is ${k} × ${num(d)} = ${num(ans)}.`);}
 /* select (3.5): mixed derivatives that need two rules, chosen by the layers, and which rule to start with */
 for(const [f,x,ans,how] of [['x·e^(2x)',0,1,'product: 1·e^(2x) + x·2e^(2x)'],['(x² + 1)³',1,24,'chain: 3(x² + 1)²·2x'],['ln(x² + 1)',1,1,'chain: 2x ÷ (x² + 1)'],['ln(x² + 1)',2,0.8,'chain: 2x ÷ (x² + 1)'],['ln(x² + 1)',3,0.6,'chain: 2x ÷ (x² + 1)'],
  ['x·ln x',1,1,'product: ln x + x·(1 ÷ x)'],['sin(3x)·cos(3x)',0,3,'product with chain: 3cos²(3x) - 3sin²(3x)'],['(2x + 1) ÷ (x² + 1)',0,2,'quotient: (2(x² + 1) - (2x + 1)·2x) ÷ (x² + 1)²'],['(2x + 1) ÷ (x² + 1)',1,-0.5,'quotient: (2(x² + 1) - (2x + 1)·2x) ÷ (x² + 1)²'],
  ['√(x² + 9)',4,0.8,'chain: x ÷ √(x² + 9)'],['√(x² + 9)',0,0,'chain: x ÷ √(x² + 9)'],['e^(2x)·(x + 1)',0,3,'product with chain: 2e^(2x)(x + 1) + e^(2x)'],['arctan(2x)',0,2,'chain: 2 ÷ (1 + 4x²)'],['arctan(2x)',1,0.4,'chain: 2 ÷ (1 + 4x²)'],
  ['x²·e^(3x)',0,0,'product with chain: 2x·e^(3x) + 3x²·e^(3x)'],['(3x - 1)⁴',1,96,'chain: 4(3x - 1)³·3'],['sin²(x)',0,0,'chain: 2 sin x · cos x'],['x ÷ √(x² + 1)',0,1,'quotient with chain: 1 ÷ (x² + 1)^(3/2)']])
  put('select',`h(x) = ${f}. What is h'(${x})? Give a decimal if it is not a whole number.`,ans,tab(`h(x) = ${f}`,[['x',`${x}`]]),`${how[0].toUpperCase()+how.slice(1)}; at x = ${x} this is ${ans}.`);
 for(const [c,f,df,g,dg] of [[1,2,3,1,4],[0,3,-1,2,1],[2,1,2,-1,3],[-1,4,0,2,-2]]){const ans=df*g*g+2*f*g*dg;
  put('select',`f(${c}) = ${f}, f'(${c}) = ${df}, g(${c}) = ${g} and g'(${c}) = ${dg}. If h(x) = f(x)·(g(x))², what is h'(${c})?`,ans,tab(`Values at x = ${c}`,[[`f(${c})`,`${f}`],[`f'(${c})`,`${df}`],[`g(${c})`,`${g}`],[`g'(${c})`,`${dg}`]]),`Product, then chain on the square: h' = f'·g² + f·2g·g' = ${par(df)} × ${g*g} + ${par(f)} × 2 × ${par(g)} × ${par(dg)} = ${ans}.`);}
 [['sin(x³)','the chain rule',['the product rule','the quotient rule']],['x²·eˣ','the product rule',['the chain rule','implicit differentiation']],['(x + 1) ÷ (x - 1)','the quotient rule',['implicit differentiation','the chain rule']],
  ['y² + x = 3, to find dy/dx','implicit differentiation',['the quotient rule','the product rule']],['e^(5x)','the chain rule',['the quotient rule','the product rule']]].forEach(([f,right,wrong],k)=>{const o=[...wrong];o.splice(k%3,0,right);
  put('select',`To differentiate ${f}, which rule do you need first? ${o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', ')}. Answer A, B or C.`,'ABC'[o.indexOf(right)],tab('Which rule?',[['function',f]],['']),`The outermost layer of ${f} calls for ${right}.`,[right]);});
 /* second (3.6): implicit second derivatives on circles, y'' = -r² ÷ y³ */
 for(const [x,y] of [[1,2],[2,2],[3,2],[0,5],[12,5],[1,1]]){const r2=x*x+y*y,ans=-r2/(y**3);
  put('second',`The point (${x}, ${y}) lies on the circle x² + y² = ${r2}. What is d²y/dx² there?`,r6(ans),tab('The circle',[['curve',`x² + y² = ${r2}`],['point',`(${x}, ${y})`]]),`y' = -x ÷ y, and differentiating again gives y'' = -(y² + x²) ÷ y³ = -${r2} ÷ ${par(y)}³ = ${num(ans)}.`);}
 /* second: polynomials, e^(kx) and positions */
 for(const [ts,x] of [[[[1,3]],2],[[[2,3],[-3,2],[1,1]],1],[[[1,4]],1],[[[-1,3],[6,2]],0],[[[3,4],[-2,1]],-1],[[[1,3],[-6,2],[4,1]],2],[[[5,2],[3,1],[-7,0]],4],[[[2,4],[-1,3]],1]]){const d2=dpoly(dpoly(ts)),ans=at(d2,x);
  put('second',`f(x) = ${poly(ts)}. What is f''(${x})?`,ans,tab(`f(x) = ${poly(ts)}`,[[`f'(x)`,poly(dpoly(ts))],['x',`${x}`]]),`f'(x) = ${poly(dpoly(ts))} and f''(x) = ${poly(d2)}, so f''(${x}) = ${ans}.`);}
 for(const k of [2,3,-1,0.5,5])put('second',`f(x) = e^(${k}x). What is f''(0)?`,r6(k*k),tab(`f(x) = e^(${k}x)`,[['x','0']]),`Each derivative brings out a factor of ${k}: f''(x) = ${num(k*k)}e^(${k}x), and e⁰ = 1, so f''(0) = ${num(k*k)}.`);
 for(const [ts,t] of [[[[1,3],[-6,2],[9,1]],2],[[[2,3],[-1,1]],1],[[[-4.9,2],[20,1],[2,0]],3],[[[1,3]],4],[[[1,3],[-3,2]],0],[[[3,2],[2,1],[1,0]],5],[[[1,4],[-2,2]],1]]){const ans=at(dpoly(dpoly(ts)),t);
  put('second',`A particle's position is s(t) = ${poly(ts).replace(/x/g,'t')}. What is its acceleration at t = ${t}?`,r6(ans),tab('Position',[['s(t)',poly(ts).replace(/x/g,'t')],['t',`${t}`]]),`Velocity is s'(t) = ${poly(dpoly(ts)).replace(/x/g,'t')}; acceleration is s''(t) = ${poly(dpoly(dpoly(ts))).replace(/x/g,'t')}, so at t = ${t} it is ${num(ans)}.`);}
}};
