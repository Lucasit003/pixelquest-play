// High School course unit (docs/design/COURSES.md, docs/design/COURSE_QUALITY.md): Math 2, Unit 3, Quadratic Equations,
// written to the Common Core integrated pathway's Math II standards (A-REI.4a, A-REI.4b, A-SSE.3a, A-SSE.3b, A-CED.1);
// our own wording and questions. x² = k has solutions ±√k; a product is zero only when a factor is; completing the
// square turns x² + bx into (x + b ÷ 2)² - (b ÷ 2)²; the quadratic formula x = (-b ± √(b² - 4ac)) ÷ (2a) comes from
// completing the square on ax² + bx + c = 0. Every equation is built from its solutions, so answers are exact; where the
// solutions are irrational, they are offered as lettered choices in radical form. Stories and their numbers are
// fictional.
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const fig=(title,o)=>({t:'figure',title,...o});
const num=v=>String(Math.round(v*1e6)/1e6);
/* ax² + bx + c = 0 written the usual way */
const lead=a=>a===1?'':a===-1?'-':num(a);
const q=(a,b,c)=>`${lead(a)}x²${b?` ${b<0?'-':'+'} ${Math.abs(b)===1?'':num(Math.abs(b))}x`:''}${c?` ${c<0?'-':'+'} ${num(Math.abs(c))}`:''}`;
/* lettered choices, the right one moved to position k */
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
/* The three Try-it questions in pool form; the generator skips them. */
const TRY=['What is the larger solution of (x - 4)² = 36?',
 'Written as (x + h)² + k, x² + 10x + 7 has what value of k?',
 'What is the larger solution of 2x² + x - 6 = 0?'];
const tryIt=s=>`Try it: ${s[0].toLowerCase()+s.slice(1)}`;
export default {
id:'math-h-math-2-quadratic-equations',subject:'math',level:5,grade:9,standard:'CCSS A-REI.4a, A-REI.4b, A-SSE.3a, A-SSE.3b, A-CED.1',
title:'Quadratic equations',
goal:'Solve quadratic equations by taking square roots, factoring, completing the square and the quadratic formula, choose the best method, and write and solve quadratic equations from situations.',
points:20,
skills:{sqrt:'Taking square roots',factor:'Factoring',complete:'Completing the square',formula:'The quadratic formula',model:'Quadratic equations from situations'},
outline:[['A-REI.4b (roots)','Solve by taking square roots',['sqrt']],['A-SSE.3a, A-REI.4b','Solve by factoring, including when a is not 1',['factor']],['A-REI.4a, A-SSE.3b','Complete the square to solve and to find the vertex',['complete']],
 ['A-REI.4a, A-REI.4b','Derive and use the quadratic formula, and choose a method',['formula']],['A-CED.1','Write and solve quadratic equations from situations',['model']]],
steps:[
 {skill:'sqrt',say:'When an equation is just a square equal to a number, take the square root of both sides, and remember the negative root: x² = 49 gives x = 7 or x = -7. In the same way, (x - 3)² = 25 gives x - 3 = 5 or x - 3 = -5, so x = 8 or x = -2.',eq:'(x - 3)² = 25  →  x - 3 = ±5',
  pic:{t:'board',title:'Solve (x - 3)² = 25',lines:['(x - 3)² = 25','x - 3 = 5 or x - 3 = -5','x = 8 or x = -2'],why:['','both square roots','add 3'],box:true}},
 {skill:'sqrt',say:'The two answers show up on a graph. The parabola y = (x - 3)² meets the line y = 25 twice, at x = -2 and x = 8, one on each side of the vertex. Get the square alone first: 2x² - 18 = 0 means 2x² = 18, so x² = 9 and x = 3 or x = -3.',
  pic:{t:'plot',title:'y = (x - 3)² meets y = 25 twice',x:[-4,10],y:[-2,44],curves:[{a:1,h:3,k:0}],lines:[{m:0,b:25,dash:true}],points:[{x:-2,y:25,label:'x = -2'},{x:8,y:25,label:'x = 8'}]},
  check:{prompt:tryIt(TRY[0]),answer:10,options:[10,6,-2],hint:'x - 4 = 6 or x - 4 = -6.',pic:tab('(x - 4)² = 36',[['square roots','x - 4 = ±6']],['Step'])}},
 {skill:'factor',say:'If a product is zero, one of its factors must be zero. So write the quadratic as a product: x² - 2x - 15 factors as (x - 5)(x + 3), because -5 × 3 = -15 and -5 + 3 = -2. Then x - 5 = 0 or x + 3 = 0, so x = 5 or x = -3.',eq:'ab = 0 means a = 0 or b = 0',
  pic:{t:'board',title:'Solve x² - 2x - 15 = 0',lines:['x² - 2x - 15 = 0','(x - 5)(x + 3) = 0','x - 5 = 0 or x + 3 = 0','x = 5 or x = -3'],why:['','-5 × 3 = -15, -5 + 3 = -2','a zero product','']},},
 {skill:'factor',say:'On a graph, the solutions of x² - 2x - 15 = 0 are where y = x² - 2x - 15 crosses the x-axis, because that is where y is 0. The parabola crosses at x = -3 and x = 5, and its vertex sits halfway between them, at x = 1.',
  pic:{t:'plot',title:'y = x² - 2x - 15 crosses at -3 and 5',x:[-5,7],y:[-17,10],curves:[{a:1,h:1,k:-16,label:'y = x² - 2x - 15'}],points:[{x:-3,y:0,label:'(-3, 0)'},{x:5,y:0,label:'(5, 0)'},{x:1,y:-16,label:'vertex (1, -16)'}]}},
 {skill:'factor',say:'When a is not 1, factor the whole trinomial: 2x² - 5x - 3 = (2x + 1)(x - 3), so x = -0.5 or x = 3. Move every term to one side first: x² = 6x becomes x² - 6x = 0, then x(x - 6) = 0, so x = 0 or x = 6. Dividing both sides by x would lose the solution 0.',
  pic:{t:'board',title:'Two more to factor',lines:['2x² - 5x - 3 = (2x + 1)(x - 3) = 0','x = -0.5 or x = 3','x² - 6x = x(x - 6) = 0','x = 0 or x = 6'],why:['check: 2x² - 6x + x - 3','2x + 1 = 0 or x - 3 = 0','after moving 6x across','never divide by x']}},
 {skill:'complete',say:'Completing the square rewrites x² + bx as a square: add and take away (b ÷ 2)². For x² - 8x + 10, half of -8 is -4 and (-4)² = 16, so x² - 8x + 10 = (x - 4)² - 16 + 10 = (x - 4)² - 6.',eq:'x² - 8x + 10 = (x - 4)² - 6',
  pic:{t:'board',title:'Complete the square on x² - 8x + 10',lines:['x² - 8x + 10 = x² - 8x + 16 - 16 + 10','= (x - 4)² - 6'],why:['add and take away 16','16 = (-8 ÷ 2)²'],box:true}},
 {skill:'complete',say:'The completed square shows the vertex. Since (x - 4)² is never negative, y = (x - 4)² - 6 is smallest when x = 4, where y = -6: the vertex is (4, -6). It also shows the solutions of x² - 8x + 10 = 0: (x - 4)² = 6, so x = 4 ± √6.',
  pic:{t:'plot',title:'y = (x - 4)² - 6',x:[-1,9],y:[-8,10],curves:[{a:1,h:4,k:-6,label:'y = (x - 4)² - 6'}],points:[{x:4,y:-6,label:'vertex (4, -6)'},{x:4-Math.sqrt(6),y:0,label:'4 - √6'},{x:4+Math.sqrt(6),y:0,label:'4 + √6'}]},
  check:{prompt:tryIt(TRY[1]),answer:-18,options:[-18,7,32],hint:'Half of 10 is 5, and 5² = 25. Then 7 - 25.',pic:tab('x² + 10x + 7',[['half of 10','5']],['Step'])}},
 {skill:'complete',say:'To solve by completing the square, add (b ÷ 2)² to both sides. For x² + 4x = 21, add (4 ÷ 2)² = 4: x² + 4x + 4 = 25, so (x + 2)² = 25, x + 2 = ±5, and x = 3 or x = -7.',
  pic:{t:'board',title:'Solve x² + 4x = 21',lines:['x² + 4x = 21','x² + 4x + 4 = 25','(x + 2)² = 25','x = 3 or x = -7'],why:['','add (4 ÷ 2)² = 4 to both sides','','x + 2 = 5 or x + 2 = -5'],box:true}},
 {skill:'formula',say:'Completing the square on ax² + bx + c = 0 gives the quadratic formula, which solves every quadratic: x = (-b ± √(b² - 4ac)) ÷ (2a). For 2x² - 3x - 2 = 0, a = 2, b = -3 and c = -2, so b² - 4ac = 9 + 16 = 25 and x = (3 ± 5) ÷ 4, which is 2 or -0.5.',eq:'x = (-b ± √(b² - 4ac)) ÷ (2a)',
  pic:{t:'board',title:'Solve 2x² - 3x - 2 = 0',lines:['a = 2, b = -3, c = -2','b² - 4ac = 9 - (-16) = 25','x = (3 ± 5) ÷ 4','x = 2 or x = -0.5'],why:['','','-b = 3 and 2a = 4',''],box:true},
  check:{prompt:tryIt(TRY[2]),answer:1.5,options:[1.5,-2,2],hint:'b² - 4ac = 1 + 48 = 49, so x = (-1 ± 7) ÷ 4.',pic:tab('2x² + x - 6 = 0',[['a, b, c','2, 1, -6']],['Values'])}},
 {skill:'formula',say:'The discriminant b² - 4ac tells how many real solutions there are before you solve: positive gives two, zero gives one, and negative gives none, as the graph crosses the x-axis twice, touches it once, or misses it. Choose a method: square roots when there is no x term, factoring when it factors easily, and the formula otherwise.',eq:'b² - 4ac > 0: two;  = 0: one;  < 0: none',
  pic:{t:'plot',title:'Two, one or no real solutions',x:[-4,4],y:[-5,8],curves:[{a:1,h:0,k:-4},{a:1,h:0,k:0},{a:1,h:0,k:3}],points:[{x:-2,y:0},{x:2,y:0},{x:0,y:-4,label:'x² - 4: two'},{x:0,y:0,label:'x²: one'},{x:0,y:3,label:'x² + 3: none'}]}},
 {skill:'model',say:'Many situations lead to quadratic equations. A fictional rectangle is 4 meters longer than it is wide and has an area of 45 square meters: w(w + 4) = 45, so w² + 4w - 45 = 0 and (w + 9)(w - 5) = 0. A width cannot be negative, so the width is 5 meters and the length 9.',eq:'w(w + 4) = 45  →  w = 5',
  pic:fig('Width w, length w + 4, area 45',{pts:{A:[0,0],B:[9,0],C:[9,5],D:[0,5]},hide:'ABCD',dots:'',polys:[{v:'ABCD',col:0,label:'area 45'}],segs:[{v:'AB',label:'w + 4 = 9',col:0},{v:'BC',label:'w = 5',col:1}],angles:[{v:'DAB',right:true}]})},
 {skill:'model',summary:true,say:'Putting Unit 3 together: take square roots when the equation is a square equal to a number, keeping both signs; factor and set each factor to zero; complete the square by adding (b ÷ 2)², which also shows the vertex; and use the quadratic formula, which always works. In a story, write the equation, solve it, and keep only the solutions that make sense. Traps: forgetting the negative square root, and dividing by x, which loses the solution x = 0.',pic:tab('Unit 3 at a glance',[['x² = k','x = ±√k'],['factor','each factor = 0'],['complete the square','add (b ÷ 2)²'],['formula','(-b ± √(b² - 4ac)) ÷ (2a)']],['Method'])}],
progression:{requires:['math-h-quadratics','math-h-math-2-radicals-and-complex-numbers'],operations:3,demand:'Take square roots keeping both signs, factor quadratics with any leading coefficient, complete the square, apply the quadratic formula, and choose among the methods.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 /* sqrt: x² = k², (x - h)² = k², ax² + c = 0 */
 for(const k of [11,9,12,1.5])put('sqrt',`What is the positive solution of x² = ${num(k*k)}?`,k,tab('The equation',[['equation',`x² = ${num(k*k)}`]],['']),`Take square roots: x = ±${num(k)}. The positive solution is ${num(k)}.`);
 for(const [h,k] of [[3,7],[-2,4],[6,1],[-4,3],[1,0.5]]){const e=`(x ${h<0?'+':'-'} ${Math.abs(h)})² = ${num(k*k)}`;
  for(const which of ['larger','smaller'])put('sqrt',`What is the ${which} solution of ${e}?`,which==='larger'?h+k:h-k,tab('The equation',[['equation',e]],['']),`Take square roots: x ${h<0?'+':'-'} ${Math.abs(h)} = ±${num(k)}, so x = ${num(h+k)} or x = ${num(h-k)}. The ${which} is ${num(which==='larger'?h+k:h-k)}.`);}
 for(const [a,c] of [[2,-50],[3,-75],[4,-1],[5,-80]]){const r=Math.sqrt(-c/a);
  put('sqrt',`What is the positive solution of ${q(a,0,c)} = 0?`,r,tab('The equation',[['equation',`${q(a,0,c)} = 0`]],['']),`Get x² alone: x² = ${num(-c/a)}. Then x = ±${num(r)}, and the positive solution is ${num(r)}.`);}
 /* factor: monic and non-monic quadratics built from their roots */
 for(const [r,s] of [[-6,4],[2,6],[0,5],[-4,-1],[7,-7],[3,3]]){const b=-(r+s),c=r*s,e=`${q(1,b,c)} = 0`,hi=Math.max(r,s),lo=Math.min(r,s),f=x=>x===0?'x':`(x ${x<0?'+':'-'} ${Math.abs(x)})`;
  for(const which of r===s?['larger']:['larger','smaller'])put('factor',`What is the ${which} solution of ${e}?`,which==='larger'?hi:lo,tab('The equation',[['equation',e]],['']),r===s?`It factors as ${f(r)}² = 0, a double root: x = ${r}.`:`Factor: ${f(lo)}${f(hi)} = 0, so x = ${lo} or x = ${hi}. The ${which} is ${which==='larger'?hi:lo}.`);}
 for(const [a,b,c,f1,f2,r1,r2] of [[2,7,3,'2x + 1','x + 3',-0.5,-3],[2,-1,-6,'2x + 3','x - 2',-1.5,2],[4,0,-9,'2x + 3','2x - 3',-1.5,1.5],[5,-20,0,'5x','x - 4',0,4],[2,1,-10,'2x + 5','x - 2',-2.5,2],[4,-4,-3,'2x - 3','2x + 1',1.5,-0.5]]){const e=`${q(a,b,c)} = 0`;
  for(const which of ['larger','smaller'])put('factor',`What is the ${which} solution of ${e}?`,which==='larger'?Math.max(r1,r2):Math.min(r1,r2),tab('The equation',[['equation',e]],['']),`Factor: (${f1})(${f2}) = 0. Set each factor to zero: x = ${num(r1)} or x = ${num(r2)}.`);}
 /* complete: (x + h)² + k form, the number on the right, and the solutions it leads to */
 for(const [b,c] of [[8,9],[-6,2],[10,30],[-4,-1],[2,7],[-12,40]]){const h=b/2,k=c-h*h,e=q(1,b,c);
  put('complete',`Written as (x + h)² + k, ${e} has what value of k?`,k,tab('Complete the square',[['expression',e]],['']),`Half of ${b} is ${h}, and ${h<0?`(${h})`:h}² = ${h*h}. So ${e} = (x ${h<0?'-':'+'} ${Math.abs(h)})² ${k<0?'-':'+'} ${Math.abs(k)}, and k = ${k}.`);
  if(b>0||c===2)put('complete',`Written as (x + h)² + k, ${e} has what value of h?`,h,tab('Complete the square',[['expression',e]],['']),`h is half the x coefficient: ${b} ÷ 2 = ${h}.`);}
 for(const [b,c] of [[6,7],[-10,-9],[4,12],[-2,8],[8,-7]]){const h=b/2,R=c+h*h,e=`x² ${b<0?'-':'+'} ${Math.abs(b)}x = ${c}`,r=Math.sqrt(R);
  put('complete',`To solve ${e} by completing the square, it becomes (x ${h<0?'-':'+'} ${Math.abs(h)})² = n. What is n?`,R,tab('The equation',[['equation',e]],['']),`Add (${b} ÷ 2)² = ${h*h} to both sides: (x ${h<0?'-':'+'} ${Math.abs(h)})² = ${c} + ${h*h} = ${R}.`);
  put('complete',`What is the larger solution of ${e}?`,-h+r,tab('The equation',[['equation',e]],['']),`Complete the square: (x ${h<0?'-':'+'} ${Math.abs(h)})² = ${R}, so x = ${-h} ± ${r}; the larger is ${-h+r}.`);}
 [['To complete the square on x² + bx, what do you add?','(b ÷ 2)²',['b²','2b'],'(x + b/2)² = x² + bx + (b/2)², so adding (b ÷ 2)² to x² + bx makes a perfect square. For example, x² + 6x + 9 = (x + 3)².'],
  ['Why does completing the square help solve an equation?','it turns the equation into (x + h)² = k, which taking square roots can solve',['it removes the x² term','it makes every solution a whole number'],'Once it is (x + h)² = k, take square roots: x + h = ±√k, so x = -h ± √k. The x² term is still there, and the answers need not be whole numbers.'],
  ['What does completing the square on a quadratic function show?','the vertex of its parabola',['its y-intercept only','how many terms it has'],'Completing the square gives vertex form y = a(x - h)² + k, so you can read the vertex (h, k). For example, x² - 4x + 1 = (x - 2)² - 3, vertex (2, -3).']].forEach(([qq,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('complete',`${qq} ${c.text}. Answer A, B or C.`,c.letter,tab('Completing the square',[['x² + bx','(x + b ÷ 2)² - (b ÷ 2)²']],['Becomes']),why||`The answer is ${right}.`,[right]);});
 /* formula: rational solutions, radical forms, b² - 4ac, and choosing a method */
 for(const [a,b,c] of [[4,-4,-15],[4,4,-3],[1,-4,-21],[2,5,-3],[8,-2,-1],[5,-3,-2]]){const D=b*b-4*a*c,s=Math.sqrt(D),r1=(-b+s)/(2*a),r2=(-b-s)/(2*a),e=`${q(a,b,c)} = 0`;
  for(const which of ['larger','smaller'])put('formula',`Using the quadratic formula, what is the ${which} solution of ${e}?`,which==='larger'?Math.max(r1,r2):Math.min(r1,r2),tab('The formula',[['a',`${a}`],['b',`${b}`],['c',`${c}`]]),`b² - 4ac = ${b*b} - ${4*a*c<0?`(${4*a*c})`:4*a*c} = ${D}, so x = (${-b} ± ${s}) ÷ ${2*a}: ${num(r1)} or ${num(r2)}.`);}
 for(const [a,b,c] of [[2,-7,3],[1,6,4],[3,-5,1],[1,-1,-1]]){const D=b*b-4*a*c;
  put('formula',`In the quadratic formula for ${q(a,b,c)} = 0, what is b² - 4ac?`,D,tab('The equation',[['a',`${a}`],['b',`${b}`],['c',`${c}`]]),`b² - 4ac = ${b*b} - ${4*a*c} = ${D}.`);}
 [['x² + 2x - 4 = 0','x = -1 ± √5',['x = 1 ± √5','x = -1 ± √3']],['x² - 6x + 7 = 0','x = 3 ± √2',['x = -3 ± √2','x = 3 ± √7']],['x² + 4x + 1 = 0','x = -2 ± √3',['x = 2 ± √3','x = -2 ± √5']],['2x² - 4x - 1 = 0','x = (2 ± √6) ÷ 2',['x = (2 ± √2) ÷ 2','x = (-2 ± √6) ÷ 2']]].forEach(([e,right,wrong],k)=>{const c=choose(right,wrong,k+1);
  put('formula',`Which are the solutions of ${e}? ${c.text}. Answer A, B or C.`,c.letter,tab('The equation',[['equation',e]],['']),`b² - 4ac is not a perfect square, so the formula gives irrational solutions: ${right}.`,[right]);});
 [['Which method suits x² = 81 best?','taking square roots',['the quadratic formula','completing the square'],'There is no x term, so take square roots of both sides: x = ±√81 = ±9. No formula is needed.'],['Which method suits x² - 5x + 6 = 0 best?','factoring',['taking square roots','completing the square'],'-2 × -3 = 6 and -2 + -3 = -5, so x² - 5x + 6 = (x - 2)(x - 3) = 0 and x = 2 or x = 3. Factoring is quickest.'],
  ['Which method suits x² + 3x - 7 = 0, which has no whole-number factors?','the quadratic formula',['factoring','taking square roots'],'No two whole numbers multiply to -7 and add to 3, so it will not factor. The formula works on every quadratic: x = (-3 ± √37) ÷ 2.'],
  ['Where does the quadratic formula come from?','completing the square on ax² + bx + c = 0',['factoring every quadratic','graphing y = x²'],'Completing the square on ax² + bx + c = 0 gives (x + b/(2a))² = (b² - 4ac)/(4a²); taking square roots gives x = (-b ± √(b² - 4ac)) ÷ (2a).']].forEach(([qq,right,wrong,why],k)=>{const c=choose(right,wrong,k+2);
  put('formula',`${qq} ${c.text}. Answer A, B or C.`,c.letter,tab('Choosing a method',[['no x term','square roots'],['factors easily','factoring'],['otherwise','the formula']],['Use']),why||`The answer is ${right}.`,[right]);});
 /* model: areas, numbers, heights and profit */
 for(const [qq,v,how] of [
  ['A fictional rectangle is 5 meters longer than it is wide, and its area is 84 square meters. How wide is it, in meters?',7,'w(w + 5) = 84, so (w + 12)(w - 7) = 0 and w = 7'],
  ['A fictional rectangle\'s length is 2 meters more than twice its width, and its area is 60 square meters. How wide is it, in meters?',5,'w(2w + 2) = 60, so w² + w - 30 = 0, (w + 6)(w - 5) = 0 and w = 5'],
  ['Each side of a fictional square garden is made 3 meters longer, and the new area is 81 square meters. How long was each side at first, in meters?',6,'(s + 3)² = 81, so s + 3 = 9 and s = 6'],
  ['Two consecutive positive whole numbers have a product of 132. What is the smaller one?',11,'n(n + 1) = 132, so (n + 12)(n - 11) = 0 and n = 11'],
  ['Two consecutive positive even numbers have a product of 168. What is the smaller one?',12,'n(n + 2) = 168, so (n + 14)(n - 12) = 0 and n = 12'],
  ['A positive number plus its square is 56. What is the number?',7,'n² + n = 56, so (n + 8)(n - 7) = 0 and n = 7'],
  ['A fictional ball\'s height is h(t) = -5t² + 30t meters after t seconds. At what time is it first 40 meters high?',2,'-5t² + 30t = 40, so t² - 6t + 8 = 0, (t - 2)(t - 4) = 0, and the first time is 2'],
  ['A fictional ball\'s height is h(t) = -5t² + 30t meters after t seconds. At what later time is it 40 meters high again?',4,'(t - 2)(t - 4) = 0, and the later time is 4'],
  ['A fictional ball\'s height is h(t) = -16t² + 64t feet after t seconds. At what time is it first 48 feet high?',1,'-16t² + 64t = 48, so t² - 4t + 3 = 0, (t - 1)(t - 3) = 0, and the first time is 1'],
  ['A fictional 8-by-10-inch photo gets a frame of the same width all round, and the framed area is 120 square inches. How wide is the frame, in inches?',1,'(8 + 2x)(10 + 2x) = 120, so x² + 9x - 10 = 0, (x + 10)(x - 1) = 0 and x = 1'],
  ['A right triangle has legs x and x + 7 and a hypotenuse of 13. What is x?',5,'x² + (x + 7)² = 169, so x² + 7x - 60 = 0, (x + 12)(x - 5) = 0 and x = 5'],
  ['A fictional triangle\'s base is 4 more than its height, and its area is 30. What is its height?',6,'h(h + 4) ÷ 2 = 30, so h² + 4h - 60 = 0, (h + 10)(h - 6) = 0 and h = 6'],
  ['A fictional company\'s profit is P(x) = -x² + 40x - 300 thousand dollars when it makes x thousand items. At what smaller x is the profit zero?',10,'-x² + 40x - 300 = 0, so x² - 40x + 300 = 0, (x - 10)(x - 30) = 0, and the smaller is 10'],
  ['A fictional company\'s profit is P(x) = -x² + 40x - 300 thousand dollars when it makes x thousand items. At what larger x is the profit zero again?',30,'(x - 10)(x - 30) = 0, and the larger is 30']])
  put('model',qq,v,tab('Write the equation',[['story','a quadratic equation']],['']),`${how}. Keep only the solution that makes sense.`);
}};
