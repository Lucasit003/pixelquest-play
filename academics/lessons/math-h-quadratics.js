// High School course unit (Math 2, Unit 2, Quadratic Functions; CCSS F-IF.2, A-SSE.3a, F-IF.7a, F-IF.8a, F-BF.3, F-IF.4,
// F-IF.6; brought to docs/design/COURSE_QUALITY.md's bar on 10 Oct): quadratics. Every equation with
// roots is built from its two whole-number roots, a(x - r)(x - s), so factoring always works; every vertex
// question is built from a whole-number vertex (h, k), a(x - h)² + k, written out or expanded. The axis of
// symmetry of ax² + bx + c is x = -b ÷ (2a), halfway between the roots. Every answer is computed from the
// numbers printed in its own prompt. Objects and heights are fictional. Also taught: the y-intercept c, a maximum when
// a < 0 and a minimum when a > 0, the average rate of change, range and where the graph rises; moving y = x² (a(x - h)² + k
// is shifted right h and up k, reflected when a < 0, narrower when |a| > 1); and heights and revenue modeled by quadratics.
const sgn=n=>n<0?`- ${-n}`:`+ ${n}`;
/* A negative number in a worked line goes in brackets: 3 - (-2). */
const par=n=>n<0?`(${n})`:`${n}`;
const lead=a=>a===1?'':a===-1?'-':`${a}`;
/* ax² + bx + c and a(x - h)² + k, written the usual way. */
const quad=(a,b,c)=>`${lead(a)}x²${b?` ${b<0?'-':'+'} ${Math.abs(b)===1?'':Math.abs(b)}x`:''}${c?` ${sgn(c)}`:''}`;
const vform=(a,h,k)=>`${lead(a)}${h?`(x ${h<0?'+':'-'} ${Math.abs(h)})²`:'x²'}${k?` ${sgn(k)}`:''}`;
const fac=r=>r===0?'x':`(x ${r<0?'+':'-'} ${Math.abs(r)})`;
/* The worked line for f(x) = ax² + bx + c at one x, leaving out zero terms. */
const work=(a,b,c,x)=>{const t=[[`${a} × ${par(x)}²`,a*x*x]];if(b)t.push([`${par(b)} × ${par(x)}`,b*x]);if(c)t.push([par(c),c]);return `${t.map(q=>q[0]).join(' + ')} = ${t.map(q=>par(q[1])).join(' + ')}`;};
/* Two factors, with a bare x first: x(x - 4). */
const facs=(r,s)=>s===0?`x${fac(r)}`:`${fac(r)}${fac(s)}`;
const ask=(title,rows)=>({t:'setups',title,head:'',rows,cols:['Value']});
/* Hint picture: the parabola a(x - h)² + k drawn from the question's own numbers. */
const curve=(a,h,k,label,lo=h-4,hi=h+4)=>({t:'plot',title:label,x:[Math.min(lo,h-4)-1,Math.max(hi,h+4)+1],y:a>0?[Math.min(k,0)-2,Math.max(k,0)+12]:[Math.min(k,0)-12,Math.max(k,0)+2],curves:[{a,h,k,label}],hint:true});
/* The three Try-it questions in pool form. The checks ask them; the generator below skips them, so a Try-it is never also a pool question. */
const TRY=['f(x) = x² + 2x - 3. What is f(3)?','The equation x² - 7x + 10 = 0 has two roots. What is the larger root?','f(x) = x² - 12x + 20. What is the x-coordinate of the vertex?'];
const tryIt=s=>`Try it: ${/^[A-Z](?!\()/.test(s)?s[0].toLowerCase()+s.slice(1):s}`;
export default {
id:'math-h-quadratics',subject:'math',level:5,grade:9,standard:'CCSS F-IF.2, A-SSE.3a, F-IF.7a, F-IF.8a, F-BF.3, F-IF.4, F-IF.6',
title:'Quadratic functions',
goal:'Evaluate a quadratic function, find its roots by factoring, find its vertex and axis of symmetry, read its intercepts, extreme value, range and rate of change, describe how its graph moves from y = x², and use it to model heights and revenue.',
points:20,
skills:{evaluate:'Evaluate a quadratic',roots:'Roots by factoring',vertex:'Vertex and axis of symmetry',features:'Reading the graph',transform:'Moving y = x²',context:'Quadratic models'},
outline:[['F-IF.2','Evaluate quadratic functions',['evaluate']],['A-SSE.3a, F-IF.8a','Find zeros by factoring',['roots']],['F-IF.7a, F-IF.4, F-IF.6','Find the vertex, intercepts, extreme value, range and rate of change',['vertex','features']],
 ['F-BF.3','Describe how the graph moves from y = x²',['transform']],['F-IF.4 (in context)','Model heights and revenue with quadratic functions',['context']]],
steps:[
 {skill:'evaluate',say:'A quadratic function has an x² term, like f(x) = x² - 4x + 3. Its graph is a curve called a parabola. To evaluate it, put the number in for every x: f(5) = 5² - 4 × 5 + 3 = 25 - 20 + 3 = 8.',eq:'f(5) = 25 - 20 + 3 = 8',pic:{t:'plot',title:'f(x) = x² - 4x + 3',x:[-1,6],y:[-2,10],curves:[{a:1,h:2,k:-1,label:'f(x) = x² - 4x + 3'}],points:[{x:5,y:8,label:'(5, 8)'}]}},
 {skill:'evaluate',say:'Square first, then multiply, then add. Keep a negative input in brackets: f(-2) = (-2)² - 4 × (-2) + 3 = 4 + 8 + 3 = 15.',eq:'(-2)² = 4, not -4',pic:{t:'board',title:'f(x) = x² - 4x + 3: find f(-2)',lines:['f(-2) = (-2)² - 4 × (-2) + 3','= 4 + 8 + 3','= 15'],why:['brackets round the -2','square first, then multiply',''],box:true},
  check:{prompt:tryIt(TRY[0]),answer:12,options:[12,6,18],hint:'3² = 9 and 2 × 3 = 6. Then 9 + 6 - 3.',pic:ask('f(x) = x² + 2x - 3',[['x','3'],['f(x)','?']])}},
 {skill:'roots',say:'The roots are the x values that make f(x) = 0. They are where the parabola crosses or touches the x-axis. To find them, factor: x² - 4x + 3 = (x - 1)(x - 3).',eq:'x² - 4x + 3 = (x - 1)(x - 3)',pic:{t:'plot',title:'Where f(x) = 0',x:[-1,6],y:[-2,10],curves:[{a:1,h:2,k:-1,label:'f(x) = x² - 4x + 3'}],points:[{x:1,y:0,label:'(1, 0)'},{x:3,y:0,label:'(3, 0)'}]}},
 {skill:'roots',say:'A product is 0 only when one of its factors is 0. So x - 1 = 0 or x - 3 = 0, and the roots are 1 and 3. To factor x² + bx + c, find two numbers that multiply to c and add to b. Here they are -1 and -3.',eq:'(x - 1)(x - 3) = 0  →  x = 1 or x = 3',pic:{t:'board',title:'Solve x² - 4x + 3 = 0',lines:['x² - 4x + 3 = (x - 1)(x - 3) = 0','x - 1 = 0 or x - 3 = 0','x = 1 or x = 3'],why:['-1 × (-3) = 3 and -1 + (-3) = -4','a zero product',''],box:true},
  check:{prompt:tryIt(TRY[1]),answer:5,options:[5,2,10],hint:'Find two numbers that multiply to 10 and add to -7.',pic:ask('x² - 7x + 10 = 0',[['larger root','?']])}},
 {skill:'vertex',say:'The vertex is the turning point of the parabola. It sits on the axis of symmetry, the line halfway between the roots. For roots 1 and 3, the axis of symmetry is x = 2.',eq:'(1 + 3) ÷ 2 = 2',pic:{t:'plot',title:'The vertex and the axis',x:[-1,6],y:[-2,10],lines:[],curves:[{a:1,h:2,k:-1,label:'f(x) = x² - 4x + 3'}],points:[{x:2,y:-1,label:'(2, -1)'},{x:1,y:0},{x:3,y:0}]}},
 {skill:'vertex',say:'For f(x) = ax² + bx + c, the axis of symmetry is x = -b ÷ (2a). For x² - 4x + 3 that is 4 ÷ 2 = 2. Then f(2) = 4 - 8 + 3 = -1, so the vertex is (2, -1).',eq:'x = -b ÷ (2a) = 4 ÷ 2 = 2',pic:{t:'board',title:'The vertex of x² - 4x + 3',lines:['x = -b ÷ (2a) = 4 ÷ 2 = 2','f(2) = 4 - 8 + 3 = -1','vertex: (2, -1)'],why:['a = 1, b = -4','put x = 2 back in',''],box:true},
  check:{prompt:tryIt(TRY[2]),answer:6,options:[6,-6,12],hint:'Here a = 1 and b = -12. Work out -b ÷ (2a).',pic:ask('f(x) = x² - 12x + 20',[['vertex x','?']])}},
 {skill:'vertex',say:'In vertex form f(x) = a(x - h)² + k, the vertex is (h, k). So f(x) = 2(x - 3)² + 1 has its vertex at (3, 1). When a is positive the vertex is the lowest point, and when a is negative it is the highest.',eq:'2(x - 3)² + 1: vertex (3, 1)',pic:{t:'plot',title:'f(x) = 2(x - 3)² + 1',x:[-1,7],y:[-1,12],curves:[{a:2,h:3,k:1,label:'f(x) = 2(x - 3)² + 1'}],points:[{x:3,y:1,label:'(3, 1)'}]}},
 {skill:'features',say:'A parabola\'s graph tells a lot. It crosses the y-axis at c, the constant term. If a > 0 it opens up and its vertex is a minimum; if a < 0 it opens down and the vertex is a maximum. So f(x) = (x - 2)² + 3 has range y ≥ 3, falls for x < 2 and rises for x > 2. The average rate of change from x = a to x = b is (f(b) - f(a)) ÷ (b - a), the slope of the line joining the two points.',eq:'average rate = (f(b) - f(a)) ÷ (b - a)',pic:curve(1,2,3,'f(x) = (x - 2)² + 3')},
 {skill:'transform',say:'Every parabola is y = x² moved. In y = a(x - h)² + k, the graph shifts right h (left if h is negative) and up k; a negative a flips it over the x-axis; and |a| > 1 stretches it so it looks narrower, while |a| < 1 makes it look wider. So y = -2(x + 1)² + 5 is y = x² shifted left 1 and up 5, flipped, and narrower, with vertex (-1, 5).',pic:curve(-2,-1,5,'y = -2(x + 1)² + 5')},
 {skill:'context',say:'Quadratics model many things. A fictional ball thrown upward has height h(t) = -16t² + 32t + 48 feet after t seconds. Its greatest height is at the vertex, t = -b ÷ (2a) = 1 second, where h(1) = 64 feet. It hits the ground when h(t) = 0: -16(t - 3)(t + 1) = 0, so after 3 seconds. It was thrown from h(0) = 48 feet.',pic:{t:'plot',title:'A fictional ball: h(t) = -16t² + 32t + 48',x:[0,3.5],y:[0,72],curves:[{a:-16,h:1,k:64}],points:[{x:0,y:48,label:'thrown from 48 ft'},{x:1,y:64,label:'top: 64 ft at t = 1'},{x:3,y:0,label:'lands at t = 3'}]}},
 {skill:'context',summary:true,say:'Putting Unit 2 together: evaluate by squaring first; factor to find the zeros; the vertex sits at x = -b ÷ (2a) on the axis of symmetry and gives the maximum or minimum; c is the y-intercept; a(x - h)² + k moves y = x² right h and up k, flips it if a < 0 and narrows it if |a| > 1; and in a story the vertex answers "how high" or "how much" and the zeros answer "when does it land". Traps: (x + 3)² has its vertex at x = -3, and a negative a means a maximum.',pic:ask('Unit 2 at a glance',[['vertex','x = -b ÷ (2a)'],['y-intercept','c'],['a < 0','opens down: maximum'],['a(x - h)² + k','right h, up k']])}],
progression:{requires:['math-m-linear-equations','math-m-exponents-scientific'],operations:3,demand:'Square, multiply and add to evaluate, factor into two brackets and set each to 0 for the roots, and use x = -b ÷ (2a) or vertex form for the vertex.'},
items(add){
 const seen=new Set(TRY);
 /* seen starts with the Try-it questions, so the generator skips them and never repeats a prompt. */
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 let i=0;
 /* Evaluate ax² + bx + c, including negative inputs. */
 for(const [a,b,c] of [[1,-3,2],[1,2,-5],[2,-1,3],[-1,4,6],[3,0,-7],[1,5,0],[2,3,-4],[-2,1,8],[1,-6,9],[1,0,-10]])for(let n=0;n<2;n++){const x=[3,-2,4,-1,5,-3,2,6][i++%8],v=a*x*x+b*x+c,f=quad(a,b,c);
  put('evaluate',`f(x) = ${f}. What is f(${x})?`,v,ask(`f(x) = ${f}`,[['x',`${x}`],['f(x)','?']]),`f(${x}) = ${work(a,b,c,x)} = ${v}.`);}
 /* Evaluate vertex form a(x - h)² + k. */
 for(const [a,h,k] of [[2,1,3],[1,-2,-5],[-1,3,4],[3,2,-1],[1,4,0],[-2,-1,7]])for(const d of [3,-2]){const x=h+d,v=a*(x-h)**2+k,f=vform(a,h,k);
  put('evaluate',`f(x) = ${f}. What is f(${x})?`,v,ask(`f(x) = ${f}`,[['x',`${x}`],['f(x)','?']]),`f(${x}) = ${a} × (${x} - ${par(h)})²${k?` + ${par(k)}`:''} = ${a} × ${(x-h)**2}${k?` + ${par(k)}`:''} = ${v}.`);}
 /* A fictional thrown object: h(t) = -5t² + vt + s metres, at times while it is still in the air. */
 const THROWN=['ball','toy rocket','water balloon','beanbag','foam dart'];
 [[20,2],[30,0],[15,10],[25,5],[10,20]].forEach(([u,s],k)=>{for(const t of [1,2,3]){const v=-5*t*t+u*t+s;if(v<0)continue;
  put('evaluate',`A fictional ${THROWN[k]} is thrown upward. Its height in metres after t seconds is h(t) = ${quad(-5,u,s).replace(/x/g,'t')}. What is h(${t})?`,v,ask(`h(t) = ${quad(-5,u,s).replace(/x/g,'t')}`,[['t',`${t}`],['h(t)','?']]),`h(${t}) = -5 × ${t*t} + ${u} × ${t}${s?` + ${s}`:''} = ${-5*t*t} + ${u*t}${s?` + ${s}`:''} = ${v} metres.`);}});
 /* Roots by factoring: a(x - r)(x - s) expanded, asking for the smaller and the larger root. */
 for(const [r,s,a] of [[2,3,1],[1,5,1],[-2,4,1],[-3,-1,1],[-5,2,1],[0,6,1],[-4,4,1],[3,7,1],[-6,1,1],[1,8,1],[2,6,2],[-1,3,2],[-2,5,-1],[1,4,-1],[-3,3,3],[-5,0,1],[-7,-2,1],[4,9,1],[-8,3,1],[2,10,1],[-3,6,-2],[5,6,1]]){
  const b=-a*(r+s),c=a*r*s,e=quad(a,b,c),pic=curve(a,(r+s)/2,-a*((s-r)/2)**2,`f(x) = ${e}`,r,s),f=`${lead(a)}${facs(r,s)}`;
  for(const which of ['smaller','larger'])put('roots',`The equation ${e} = 0 has two roots. What is the ${which} root?`,which==='smaller'?Math.min(r,s):Math.max(r,s),pic,`Factor: ${e} = ${f}. A factor is 0 when x = ${r} or x = ${s}, so the ${which} root is ${which==='smaller'?r:s}.`);}
 /* Roots read from a factored equation. */
 for(const [r,s] of [[-5,3],[-7,-2],[0,4]])for(const which of ['smaller','larger'])
  put('roots',`The equation ${facs(r,s)} = 0 has two roots. What is the ${which} root?`,which==='smaller'?Math.min(r,s):Math.max(r,s),ask(`${facs(r,s)} = 0`,[[`${which} root`,'?']]),`The product is 0 when ${r===0?'x = 0':`${fac(r).slice(1,-1)} = 0`} or ${fac(s).slice(1,-1)} = 0, so x = ${r} or x = ${s}. The ${which} root is ${which==='smaller'?r:s}.`);
 /* The vertex of ax² + bx + c, built from a whole-number vertex (h, k): b = -2ah and c = ah² + k. */
 for(const [a,h,k] of [[1,3,-4],[1,-2,1],[-1,1,5],[2,2,-3],[1,4,-9],[-1,-3,2],[2,-1,4],[-2,2,6],[1,-5,-2],[3,1,-1],[1,1,-6],[-1,4,3]]){const b=-2*a*h,c=a*h*h+k,e=quad(a,b,c),pic=curve(a,h,k,`f(x) = ${e}`);
  put('vertex',`f(x) = ${e}. What is the x-coordinate of the vertex?`,-b/(2*a),pic,`The axis of symmetry is x = -b ÷ (2a) = ${par(-b)} ÷ ${par(2*a)} = ${h}, so the vertex has x = ${h}.`);
  put('vertex',`f(x) = ${e}. What is the y-coordinate of the vertex?`,a*h*h+b*h+c,pic,`The vertex is at x = -b ÷ (2a) = ${h}. Then f(${h}) = ${work(a,b,c,h)} = ${k}.`);}
 /* Vertex form a(x - h)² + k: the vertex is (h, k). */
 for(const [a,h,k] of [[2,3,1],[-1,-2,5],[1,4,-3],[3,-1,-2],[-2,5,8],[1,-6,7]]){const e=vform(a,h,k),pic=curve(a,h,k,`f(x) = ${e}`);
  put('vertex',`f(x) = ${e}. What is the x-coordinate of the vertex?`,h,pic,`In vertex form a(x - h)² + k the vertex is (h, k). Here it is (${h}, ${k}).`);
  put('vertex',`f(x) = ${e}. What is the y-coordinate of the vertex?`,k,pic,`In vertex form a(x - h)² + k the vertex is (h, k). Here it is (${h}, ${k}).`);}
 /* The axis of symmetry from the two places a parabola crosses the x-axis. */
 for(const [r,s] of [[2,8],[-4,2],[-6,0],[1,9],[-5,-1],[3,5]])
  put('vertex',`A parabola crosses the x-axis at x = ${r} and x = ${s}. Its axis of symmetry is the line x = c. What is c?`,(r+s)/2,{t:'plot',title:'Where it crosses',x:[Math.min(r,s)-2,Math.max(r,s)+2],y:[-6,6],points:[{x:r,y:0,label:`(${r}, 0)`},{x:s,y:0,label:`(${s}, 0)`}]},`The axis of symmetry is halfway between the roots: (${r} + ${par(s)}) ÷ 2 = ${(r+s)/2}.`);
 /* The greatest or least value: the y-coordinate of the vertex. */
 for(const [a,h,k] of [[-1,2,5],[1,3,-7],[-2,1,9],[2,-2,-3],[-1,-4,10],[1,5,1]]){const b=-2*a*h,c=a*h*h+k,e=quad(a,b,c),most=a<0?'greatest':'least';
  put('vertex',`f(x) = ${e}. What is the ${most} value f(x) can take?`,a*h*h+b*h+c,curve(a,h,k,`f(x) = ${e}`),`The vertex is at x = -b ÷ (2a) = ${h}, and f(${h}) = ${k}. Because a is ${a<0?'negative, the vertex is the highest point':'positive, the vertex is the lowest point'}, so the ${most} value is ${k}.`);}
 const pick=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
 /* features: intercepts, maximum or minimum, average rate of change, range and where it rises */
 for(const [a,b,c] of [[1,-4,7],[2,3,-5],[-1,6,4],[-3,0,12]])put('features',`f(x) = ${quad(a,b,c)}. What is the y-intercept of its graph?`,c,ask(`f(x) = ${quad(a,b,c)}`,[['find','where the graph meets the y-axis']]),`Put x = 0: every x term vanishes, leaving f(0) = ${c}.`);
 for(const [a,b,c] of [[2,-8,1],[-1,4,3],[-2,2,0],[3,6,-2]]){const k=a<0?'maximum':'minimum';
  put('features',`Does f(x) = ${quad(a,b,c)} have a maximum or a minimum value?`,k,ask(`f(x) = ${quad(a,b,c)}`,[['look at','the sign of the x² coefficient']]),`The x² coefficient is ${a<0?'negative, so the parabola opens down and its vertex is a maximum':'positive, so the parabola opens up and its vertex is a minimum'}.`,[k]);}
 for(const [a,b,c,x1,x2] of [[1,-4,1,1,4],[1,2,-3,0,2],[-1,6,0,1,5],[2,0,-1,-1,3]]){const f=x=>a*x*x+b*x+c,r=(f(x2)-f(x1))/(x2-x1);
  put('features',`What is the average rate of change of f(x) = ${quad(a,b,c)} from x = ${x1} to x = ${x2}?`,r,ask(`f(x) = ${quad(a,b,c)}`,[['from',`${x1}`],['to',`${x2}`]]),`f(${x1}) = ${f(x1)} and f(${x2}) = ${f(x2)}, so the average rate is (${f(x2)} - ${par(f(x1))}) ÷ (${x2} - ${par(x1)}) = ${r}.`);}
 [[1,2,3],[-2,-1,5]].forEach(([a,h,k],i)=>{const e=vform(a,h,k),right=a>0?`y ≥ ${k}`:`y ≤ ${k}`,c=pick(right,[a>0?`y ≤ ${k}`:`y ≥ ${k}`,'all real numbers'],i);
  put('features',`What is the range of f(x) = ${e}? ${c.text}. Answer A, B or C.`,c.letter,ask(`f(x) = ${e}`,[['form','vertex form']]),`The vertex is (${h}, ${k}) and the parabola opens ${a>0?'up':'down'}, so every output is ${a>0?'at least':'at most'} ${k}: ${right}.`,[right]);});
 [[1,1,-4],[-1,-3,2]].forEach(([a,h,k],i)=>{const e=vform(a,h,k),right=a>0?`x > ${h}`:`x < ${h}`,c=pick(right,[a>0?`x < ${h}`:`x > ${h}`,'every x'],i+1);
  put('features',`On which interval does f(x) = ${e} increase? ${c.text}. Answer A, B or C.`,c.letter,ask(`f(x) = ${e}`,[['form','vertex form']]),`The parabola opens ${a>0?'up, so it falls to the vertex at':'down, so it rises to the vertex at'} x = ${h} and ${a>0?'rises after it':'falls after it'}: it increases for ${right}.`,[right]);});
 /* transform: the vertex of a moved parabola, how it moved, and which way it opens */
 for(const [a,h,k] of [[-2,-1,5],[3,4,-6],[4,-2,1]])for(const ax of ['x','y'])put('transform',`f(x) = ${vform(a,h,k)}. What is the ${ax}-coordinate of the vertex?`,ax==='x'?h:k,ask(`f(x) = ${vform(a,h,k)}`,[['form','a(x - h)² + k']]),`In vertex form a(x - h)² + k the vertex is (h, k) = (${h}, ${k}): mind the sign inside the brackets.`);
 [['How is the graph of y = (x - 3)² + 2 related to the graph of y = x²?','shifted right 3 and up 2',['shifted left 3 and up 2','shifted right 3 and down 2'],'In y = (x - h)² + k the vertex moves to (h, k). Here h = 3 and k = 2, so the graph shifts right 3 and up 2. The minus inside means right.'],
  ['How is the graph of y = (x + 4)² - 1 related to the graph of y = x²?','shifted left 4 and down 1',['shifted right 4 and down 1','shifted left 4 and up 1'],'x + 4 = x - (-4), so h = -4 and k = -1: the vertex moves to (-4, -1), which is left 4 and down 1.'],
  ['How is the graph of y = -x² related to the graph of y = x²?','reflected over the x-axis',['shifted down 1','reflected over the y-axis'],'The minus sign multiplies every y-value by -1, so each point (x, y) goes to (x, -y): a reflection over the x-axis. The parabola opens down.'],
  ['How is the graph of y = 3x² related to the graph of y = x²?','stretched vertically, so it looks narrower',['compressed vertically, so it looks wider','shifted up 3'],'Every y-value is multiplied by 3, so the graph is stretched vertically. It rises faster, so it looks narrower.'],
  ['How is the graph of y = 0.5x² related to the graph of y = x²?','compressed vertically, so it looks wider',['stretched vertically, so it looks narrower','shifted down 0.5'],'Every y-value is multiplied by 0.5, so the graph is compressed vertically. It rises more slowly, so it looks wider.'],
  ['How is the graph of y = x² + 7 related to the graph of y = x²?','shifted up 7',['shifted right 7','shifted left 7'],'Adding 7 outside the square adds 7 to every y-value, so the graph shifts up 7. A change inside the brackets would move it left or right.'],
  ['How is the graph of y = (x - 5)² related to the graph of y = x²?','shifted right 5',['shifted left 5','shifted down 5'],'Replacing x with x - 5 moves the vertex to (5, 0), so the graph shifts right 5. The minus sign inside means right.']].forEach(([q,right,wrong,why],k)=>{const c=pick(right,wrong,k);
  put('transform',`${q} ${c.text}. Answer A, B or C.`,c.letter,ask('Moving y = x²',[['(x - h)²','right h'],['+ k','up k'],['-x²','flip over the x-axis']]),why||`The answer is ${right}.`,[right]);});
 for(const [a,h,k] of [[-2,1,3],[2,-3,-2],[-1,0,6]]){const d=a>0?'up':'down';
  put('transform',`Does the graph of f(x) = ${vform(a,h,k)} open up or down?`,d,ask(`f(x) = ${vform(a,h,k)}`,[['look at','the sign of a']]),`a = ${a} is ${a>0?'positive':'negative'}, so the parabola opens ${d}.`,[d]);}
 /* context: thrown objects and revenue */
 for(const [a,b,c,unit] of [[-16,64,80,'feet'],[-5,20,0,'meters'],[-16,48,0,'feet']]){const f=x=>a*x*x+b*x+c,t=-b/(2*a),land=(-b-Math.sqrt(b*b-4*a*c))/(2*a),e=quad(a,b,c).replace(/x/g,'t'),lead=`A fictional ball is thrown so that its height in ${unit} after t seconds is h(t) = ${e}.`,pic=ask(`h(t) = ${e}`,[['units',unit]]);
  put('context',`${lead} What is its greatest height, in ${unit}?`,f(t),pic,`The vertex is at t = -b ÷ (2a) = ${t}, and h(${t}) = ${f(t)} ${unit}: the greatest height.`);
  put('context',`${lead} After how many seconds does it reach its greatest height?`,t,pic,`The greatest height is at the vertex: t = -b ÷ (2a) = ${-b} ÷ ${2*a} = ${t}.`);
  put('context',`${lead} After how many seconds does it hit the ground?`,land,pic,`It hits the ground when h(t) = 0. ${c?`Factor: ${a}(t² ${sgn(b/a)}t ${sgn(c/a)}) = ${a}(t - ${land})(t + ${-(c/a)/land}) = 0`:`Factor: t(${a}t + ${b}) = 0`}, and the positive root is t = ${land}.`);
  if(c)put('context',`${lead} From what height was it thrown, in ${unit}?`,c,pic,`At the start t = 0, and h(0) = ${c} ${unit}.`);}
 put('context','A fictional shop\'s revenue is R(p) = -10p² + 400p dollars when it charges p dollars. What price gives the most revenue, in dollars?',20,ask('R(p) = -10p² + 400p',[['units','dollars']]),'The vertex is at p = -400 ÷ (2 × -10) = 20 dollars.');
 put('context','A fictional shop\'s revenue is R(p) = -10p² + 400p dollars when it charges p dollars. What is the most revenue it can make, in dollars?',4000,ask('R(p) = -10p² + 400p',[['units','dollars']]),'At p = 20: R(20) = -10 × 400 + 400 × 20 = -4,000 + 8,000 = 4,000 dollars.');
}
};
