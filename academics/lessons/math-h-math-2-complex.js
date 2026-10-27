// High School course unit (docs/design/COURSES.md, docs/design/COURSE_QUALITY.md): Math 2, Unit 1, Radicals and Complex
// Numbers, written to the Common Core integrated pathway's Math II standards (N-RN.2 radicals, N-RN.3, N-CN.1, N-CN.2,
// N-CN.7); our own wording and questions. √a · √b = √(ab) for a, b ≥ 0; like radicals (the same root of the same number)
// add like terms; a denominator √k is cleared by multiplying top and bottom by √k. The sum of a rational number and an
// irrational number is irrational, and so is the product of a nonzero rational number and an irrational number; two
// irrational numbers can add or multiply to a rational one (√2 + (-√2) = 0, √2 · √2 = 2). i is the number with i² = -1,
// so the powers of i repeat i, -1, -i, 1; a complex number a + bi has real part a and imaginary part b, and complex
// numbers add part by part and multiply like binomials, with i² replaced by -1. A quadratic with a negative discriminant
// has two complex solutions, a ± bi, and no real ones.
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const fig=(title,o)=>({t:'figure',title,...o});
const num=v=>String(Math.round(v*1e6)/1e6);
/* a complex number a + bi, written the usual way: 3 + 2i, 4 - i, -6i, 5 */
const cx=(a,b)=>b===0?num(a):a===0?`${b===1?'':b===-1?'-':num(b)}i`:`${num(a)} ${b<0?'-':'+'} ${Math.abs(b)===1?'':num(Math.abs(b))}i`;
const mul=([a,b],[c,d])=>[a*c-b*d,a*d+b*c];
/* lettered choices, the right one moved to position k */
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
/* The three Try-it questions in pool form; the generator skips them. */
const TRY=['Written in simplest form, √27 + √48 = a√3. What is a?',
 'When (5 + 2i)(3 - i) is written as a + bi, what is a?',
 'Which are the solutions of x² + 36 = 0? A: x = 6i or x = -6i, B: x = 6 or x = -6, C: x = 36i or x = -36i. Answer A, B or C.'];
const tryIt=s=>`Try it: ${s[0].toLowerCase()+s.slice(1)}`;
export default {
id:'math-h-math-2-radicals-and-complex-numbers',subject:'math',level:5,grade:9,standard:'CCSS N-RN.2, N-RN.3, N-CN.1, N-CN.2, N-CN.7',
title:'Radicals and complex numbers',
goal:'Simplify, combine and rationalize radical expressions, explain when sums and products are rational or irrational, use i to add, subtract and multiply complex numbers, and solve quadratic equations whose solutions are complex.',
points:20,
skills:{simplify:'Radical expressions',rational:'Rational and irrational numbers',complex:'Complex numbers',quadratic:'Complex solutions'},
outline:[['N-RN.2','Simplify, multiply, add and rationalize radical expressions',['simplify']],['N-RN.3','Explain when sums and products are rational or irrational',['rational']],
 ['N-CN.1, N-CN.2','Know that i² = -1, and add, subtract and multiply complex numbers',['complex']],['N-CN.7','Solve quadratic equations that have complex solutions',['quadratic']]],
steps:[
 {skill:'simplify',say:'Radicals follow their own rules. Multiply under one root: √2 · √32 = √64 = 8. To simplify a root, pull out its largest perfect square factor: √28 = √4 · √7 = 2√7, because √4 is 2.',eq:'√a · √b = √(ab)',
  pic:{t:'board',title:'Multiply and simplify roots',lines:['√2 · √32 = √64','= 8','√28 = √4 · √7','= 2√7'],why:['multiply under one root','64 is 8²','4 is the largest square factor','√4 = 2'],box:false}},
 {skill:'simplify',say:'Only like radicals, the same root of the same number, combine: 4√3 + 2√3 = 6√3, but √2 + √3 stays as it is, and it is not √5. To clear a root from a denominator, multiply top and bottom by it: 9 ÷ √3 = 9√3 ÷ 3 = 3√3.',eq:'9 ÷ √3 = 9√3 ÷ 3 = 3√3',
  pic:{t:'board',title:'Add like roots; clear a denominator',lines:['4√3 + 2√3 = 6√3','9 ÷ √3 = (9 × √3) ÷ (√3 × √3)','= 9√3 ÷ 3','= 3√3'],why:['like radicals add','multiply top and bottom by √3','√3 × √3 = 3',''],box:true},
  check:{prompt:tryIt(TRY[0]),answer:7,options:[7,5,12],hint:'√27 = 3√3 and √48 = 4√3.',pic:tab('Simplify first',[['√27','= √9 · √3'],['√48','= √16 · √3']],[''])}},
 {skill:'rational',say:'A rational number can be written as a fraction of two integers, with a denominator that is not 0: 0.6, -8, 5/7 and √25 = 5 are rational, and so is every repeating decimal. An irrational number cannot be written that way: √7, √15 and 2π are irrational, and their decimals never end or repeat.',
  pic:{t:'board',title:'Rational or irrational?',lines:['rational: 0.6 = 3/5,  -8 = -8/1,  5/7,  √25 = 5','irrational: √7,  √15,  2π'],why:[]}},
 {skill:'rational',say:'Some sums and products are always irrational: a rational number plus an irrational one, and a nonzero rational number times an irrational one. But two irrational numbers can make a rational one: √2 · √2 = 2, and √5 + (-√5) = 0.',
  pic:{t:'board',title:'Sums and products',lines:['3 + √2 is irrational','4√5 is irrational','but √2 · √2 = 2','and √5 + (-√5) = 0'],why:['rational + irrational','nonzero rational × irrational','two irrationals, a rational product','two irrationals, a rational sum']}},
 {skill:'complex',say:'No real number squares to a negative, so mathematicians use i, a number with i² = -1. Then √(-25) = 5i, because (5i)² = 25 · i² = -25. A complex number a + bi has a real part a and an imaginary part b.',eq:'i² = -1',
  pic:{t:'board',title:'The number i',lines:['i² = -1','√(-25) = √25 · √(-1) = 5i','check: (5i)² = 25i² = -25'],why:['its definition','',''],box:false}},
 {skill:'complex',say:'The powers of i repeat every four: i, -1, -i, 1, and round again. On the complex plane each multiplication by i is a quarter turn about 0. So to find i⁶, divide 6 by 4: the remainder is 2, and i⁶ = i² = -1.',eq:'i⁶ = i⁴ · i² = -1',
  pic:fig('Each × i is a quarter turn',{grid:{x:[-1.8,1.8],y:[-1.5,1.5]},pts:{O:[0,0],A:[1,0],B:[0,1],C:[-1,0],D:[0,-1]},hide:'OABCD',dots:'ABCD',circles:[{c:'O',r:1,col:3}],arcs:[{c:'O',from:'A',to:'B',col:1,w:3},{c:'O',from:'B',to:'C',col:1,w:3},{c:'O',from:'C',to:'D',col:1,w:3}],notes:[{at:[1.42,0.18],text:'1 = i⁴'},{at:[0.32,1.22],text:'i'},{at:[-1.42,0.18],text:'i² = -1'},{at:[0.4,-1.22],text:'i³ = -i'}]})},
 {skill:'complex',say:'A complex number a + bi can be plotted at the point (a, b). Complex numbers add part by part, real with real and imaginary with imaginary: (4 + i) + (2 - 3i) = 6 - 2i. On the plane the sum is the fourth corner of the parallelogram the two numbers make with 0.',eq:'(4 + i) + (2 - 3i) = 6 - 2i',
  pic:fig('(4 + i) + (2 - 3i) = 6 - 2i',{grid:{x:[-1,7],y:[-4,2]},pts:{O:[0,0],P:[4,1],Q:[2,-3],S:[6,-2]},hide:'OPQS',segs:[{v:'OP',col:0},{v:'OQ',col:1},{v:'PS',dash:true,col:1,w:2},{v:'QS',dash:true,col:0,w:2},{v:'OS',col:2}],notes:[{at:[4.3,1.55],text:'4 + i'},{at:[2,-3.55],text:'2 - 3i'},{at:[6.3,-2.5],text:'6 - 2i'}]})},
 {skill:'complex',say:'Multiply complex numbers like binomials, then replace i² by -1. (2 + 3i)(4 - i) = 8 - 2i + 12i - 3i², and -3i² = +3, so the product is 8 + 10i + 3 = 11 + 10i.',eq:'(2 + 3i)(4 - i) = 11 + 10i',
  pic:{t:'board',title:'Multiply (2 + 3i)(4 - i)',lines:['(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i²','= 8 + 10i + 3','= 11 + 10i'],why:['multiply like binomials','-3i² = +3',''],box:true},
  check:{prompt:tryIt(TRY[1]),answer:17,options:[17,13,1],hint:'Multiply out: 15 - 5i + 6i - 2i², and -2i² = +2.',pic:tab('(5 + 2i)(3 - i)',[['multiply out','15 - 5i + 6i - 2i²']],['Step'])}},
 {skill:'complex',say:'The conjugate of a + bi is a - bi, and a number times its conjugate is always real, because the i terms cancel: (5 - i)(5 + i) = 25 + 5i - 5i - i² = 25 + 1 = 26.',eq:'(a + bi)(a - bi) = a² + b²',
  pic:{t:'board',title:'A number times its conjugate',lines:['(5 - i)(5 + i) = 25 + 5i - 5i - i²','= 25 + 1','= 26'],why:['','the i terms cancel; -i² = +1','a real number'],box:true}},
 {skill:'quadratic',say:'With i, every quadratic equation has solutions. x² = -49 has no real solution, but x = 7i and x = -7i both work, because (7i)² = 49i² = -49 and (-7i)² = -49 too.',
  pic:{t:'board',title:'Solve x² = -49',lines:['x² = -49','x = ±√(-49)','x = 7i or x = -7i'],why:['','take both square roots','√(-49) = 7i'],box:true}},
 {skill:'quadratic',say:'When the discriminant b² - 4ac is negative, the quadratic formula gives two complex solutions. For x² - 6x + 10 = 0, b² - 4ac = 36 - 40 = -4, so x = (6 ± 2i) ÷ 2 = 3 + i or 3 - i. The graph of y = x² - 6x + 10 never meets the x-axis, which is why no solution is real.',eq:'x = (-b ± √(b² - 4ac)) ÷ (2a)',
  pic:{t:'plot',title:'y = x² - 6x + 10 never meets the x-axis',x:[-1,7],y:[-2,10],curves:[{a:1,h:3,k:1,label:'y = (x - 3)² + 1'}],points:[{x:3,y:1,label:'vertex (3, 1)'}]},
  check:{prompt:tryIt(TRY[2]),answer:'A',options:['A','B','C'],hint:'x² = -36, and √(-36) = 6i.',pic:tab('x² + 36 = 0',[['subtract 36','x² = -36']],['Step'])}},
 {skill:'quadratic',summary:true,say:'Putting Unit 1 together: radicals multiply under one root, simplify by pulling out perfect squares, add only when alike, and clear a root from a denominator by multiplying top and bottom by it; rational plus irrational is irrational; i² = -1 lets every quadratic be solved, with complex solutions a ± bi when the discriminant is negative; and complex numbers add part by part and multiply like binomials. Traps: √2 + √3 is not √5, and i² is -1, not 1.',pic:tab('Unit 1 at a glance',[['√a · √b','√(ab)'],['like radicals','add their coefficients'],['i²','-1'],['negative discriminant','two complex solutions']],['Rule'])}],
progression:{requires:['math-h-exponent-rules','math-h-quadratics'],operations:3,demand:'Pull out perfect squares and combine like radicals, decide rationality from how numbers combine, multiply complex binomials using i² = -1, and solve quadratics with negative discriminants.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 /* simplify: products, like radicals, rationalizing, simplest form */
 for(const [a,b] of [[3,12],[2,18],[5,20],[6,6],[8,2],[3,27],[10,40]]){const v=Math.round(Math.sqrt(a*b));
  put('simplify',`What is √${a} · √${b}?`,v,tab('Multiply',[['under one root',`√(${a} × ${b}) = √${a*b}`]],['']),`√${a} · √${b} = √${a*b} = ${v}.`);}
 for(const [expr,k,a,how] of [['3√2 + 5√2',2,8,'3 + 5 = 8'],['7√5 - 2√5',5,5,'7 - 2 = 5'],['√18 + √8',2,5,'√18 = 3√2 and √8 = 2√2, so 3 + 2 = 5'],['√50 - √32',2,1,'√50 = 5√2 and √32 = 4√2, so 5 - 4 = 1'],
  ['2√12 + √27',3,7,'2√12 = 4√3 and √27 = 3√3, so 4 + 3 = 7'],['√75 - √12',3,3,'√75 = 5√3 and √12 = 2√3, so 5 - 2 = 3']])
  put('simplify',`Written in simplest form, ${expr} = a√${k}. What is a?`,a,tab('Like radicals',[['expression',expr]],['']),`${how}: ${a === 1 ? '' : a}√${k}.`);
 for(const [n,k] of [[6,3],[10,5],[12,6],[15,3],[8,2],[14,7]]){const a=n/k;
  put('simplify',`Written with no root in the denominator, ${n} ÷ √${k} = a√${k}. What is a?`,a,tab('Rationalize',[['expression',`${n} ÷ √${k}`]],['']),`Multiply top and bottom by √${k}: ${n}√${k} ÷ ${k} = ${a}√${k}.`);}
 for(const [n,k,root] of [[200,2,'√'],[48,3,'√'],[108,3,'√'],[63,7,'√'],[180,5,'√'],[16,2,'∛'],[81,3,'∛']]){const e=root==='√'?2:3,a=Math.round((n/k)**(1/e));
  put('simplify',`Written in simplest form, ${root}${n} = a${root}${k}. What is a?`,a,tab('Simplest form',[['expression',`${root}${n}`]],['']),`${n} = ${a**e} × ${k}, and ${a**e} is a perfect ${e===2?'square':'cube'}, so ${root}${n} = ${a}${root}${k}.`);}
 [['Which pair are like radicals?','3√5 and -2√5',['3√5 and 3√2','√5 and 5'],'Like radicals have the same root of the same number: 3√5 and -2√5 both have √5, so they combine to √5. 3√5 and 3√2 have different numbers under the root.'],
  ['Can √2 + √3 be written as a single radical?','no, because they are not like radicals',['yes, it equals √5','yes, it equals 2√5'],'Only like radicals combine. √2 + √3 is about 1.41 + 1.73 = 3.14, but √5 is about 2.24, so √2 + √3 is not √5.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('simplify',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Like radicals',[['like','same root of the same number'],['unlike','cannot be combined']],['']),why||`The answer is ${right}.`,[right]);});
 /* rational: classifying numbers, and the rules for sums and products */
 for(const [x,k] of [['√9','rational'],['√10','irrational'],['π','irrational'],['0.75','rational'],['2/3','rational'],['-5','rational'],['√(4/9)','rational'],['the repeating decimal 0.181818...','rational'],
  ['the decimal 1.010010001..., whose runs of zeros keep growing','irrational'],['√2 · √8','rational'],['3 + √2','irrational'],['5√3','irrational'],['√2 + (-√2)','rational'],['π ÷ 2','irrational'],['√16','rational'],['√0.25','rational'],['√50','irrational'],['-√49','rational']])
  put('rational',`Is ${x} rational or irrational?`,k,tab('A number',[['number',x]],['']),k==='rational'?`It can be written as a fraction of two integers${/√2 · √8/.test(x)?': √2 · √8 = √16 = 4':/√2 \+/.test(x)?': it equals 0':''}, so it is rational.`:`It cannot be written as a fraction of two integers${/\+|√3|÷/.test(x)?' (a rational number plus an irrational one, or a nonzero rational number times an irrational one, is irrational)':''}, so it is irrational.`);
 [['The sum of a rational number and an irrational number is always what?','irrational',['rational','either one'],'If r + x were rational, then x = (r + x) - r would be a difference of two rationals, so rational too. That is impossible, so the sum is irrational.'],
  ['The product of a nonzero rational number and an irrational number is always what?','irrational',['rational','either one'],'If r × x were rational with r ≠ 0, then x = (r × x) ÷ r would be rational too, which is impossible. So the product, like 3√2, is irrational.'],
  ['The sum of two rational numbers is always what?','rational',['irrational','either one'],'a/b + c/d = (ad + bc)/(bd), a fraction of two integers with bd ≠ 0, so the sum of two rational numbers is always rational.'],
  ['The sum of two irrational numbers is what?','sometimes rational and sometimes irrational',['always irrational','always rational'],'It depends: √2 + √2 = 2√2 is irrational, but √2 + (-√2) = 0 is rational. So the sum can be either.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+1);
  put('rational',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Sums and products',[['rational + irrational','irrational'],['nonzero rational × irrational','irrational'],['irrational + irrational','either']],['Gives']),why||`The answer is ${right}.`,[right]);});
 /* complex: powers of i, sums, differences, products and conjugates */
 const POW={1:'i',2:'-1',3:'-i',0:'1'};
 for(const n of [3,4,7,10,25,42,13,100]){const v=POW[n%4];
  put('complex',`What is i^${n}? Answer 1, -1, i or -i.`,v,tab('Powers of i',[['n',`${n}`],['n ÷ 4 leaves',`${n%4}`]]),n<=4?`Multiply by i each time: i, -1, -i, 1. So i^${n} = ${v}.`:`The powers of i repeat every 4. ${n} leaves ${n%4} when divided by 4, so i^${n} = i^${n%4||4} = ${v}.`,[v]);}
 for(const [[a,b],[c,d],op] of [[[3,2],[1,-5],'+'],[[6,-1],[2,4],'-'],[[-2,7],[5,-3],'+'],[[5,2],[5,-2],'-']]){const r=op==='+'?[a+c,b+d]:[a-c,b-d],e=`(${cx(a,b)}) ${op} (${cx(c,d)})`;
  for(const part of ['real','imaginary'])put('complex',`When ${e} is written as a + bi, what is ${part==='real'?'a':'b'}?`,part==='real'?r[0]:r[1],tab('Complex numbers',[['expression',e]],['']),`${op==='+'?'Add':'Subtract'} the real parts and the imaginary parts: ${cx(...r)}.`);}
 for(const [z,w] of [[[2,5],[3,-1]],[[1,1],[1,-1]],[[3,-2],[3,2]],[[0,2],[5,-3]],[[4,1],[4,1]],[[1,-2],[3,1]],[[2,-1],[2,-1]]]){const r=mul(z,w),e=z[0]===w[0]&&z[1]===w[1]?`(${cx(...z)})²`:`(${cx(...z)})(${cx(...w)})`;
  for(const part of ['real','imaginary'])put('complex',`When ${e} is written as a + bi, what is ${part==='real'?'a':'b'}?`,part==='real'?r[0]:r[1],tab('Multiply',[['expression',e]],['']),`Multiply out and use i² = -1: ${cx(z[0]*w[0],0)} ${sg(z[0]*w[1]+z[1]*w[0])}i ${sg(-z[1]*w[1])} = ${cx(...r)}.`);}
 function sg(v){return v<0?`- ${num(-v)}`:`+ ${num(v)}`;}
 [['What is i² equal to?','-1',['1','i'],'The imaginary unit i is defined so that i² = -1; that is what lets square roots of negative numbers exist, like √-9 = 3i.'],['What is the conjugate of 4 - 7i?','4 + 7i',['-4 + 7i','-4 - 7i'],'The conjugate of a + bi is a - bi: keep the real part and change the sign of the imaginary part. So 4 - 7i becomes 4 + 7i.'],['A complex number is multiplied by its conjugate. What kind of number is the result?','a real number',['an imaginary number','always zero'],'(a + bi)(a - bi) = a² - b²i² = a² + b², because i² = -1. No i is left, so it is real: (4 - 7i)(4 + 7i) = 16 + 49 = 65.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+2);
  put('complex',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Complex numbers',[['i²','-1'],['conjugate of a + bi','a - bi']],['Rule']),why||`The answer is ${right}.`,[right]);});
 /* quadratic: complex solutions, discriminants and how many real solutions */
 const sol=(p,q)=>p===0?`x = ${q===1?'':q}i or x = -${q===1?'':q}i`:`x = ${cx(p,q)} or x = ${cx(p,-q)}`;
 for(const [eq,p,q,w1,w2,i] of [['x² = -16',0,4,[4,0],[0,16]],['x² + 9 = 0',0,3,[3,0],[0,9]],['x² + 25 = 0',0,5,[5,0],[0,25]],['3x² + 12 = 0',0,2,[2,0],[0,4]],['(x - 1)² = -4',1,2,[1,4],[-1,2]],
  ['x² + 4x + 13 = 0',-2,3,[2,3],[-2,13]],['x² - 4x + 5 = 0',2,1,[-2,1],[2,5]],['x² + 2x + 10 = 0',-1,3,[1,3],[-1,9]]].map((r,i)=>[...r,i])){
  const right=sol(p,q),wrong1=w1[1]===0?`x = ${w1[0]} or x = -${w1[0]}`:sol(...w1),wrong2=sol(...w2),c=choose(right,[wrong1,wrong2],i);
  put('quadratic',`Which are the solutions of ${eq}? ${c.text}. Answer A, B or C.`,c.letter,tab('The equation',[['equation',eq]],['']),`${p===0?`Get x² alone, then take square roots of a negative number: ${right}.`:`The discriminant is negative, so the solutions are complex: ${right}.`}`,[right]);}
 for(const [a,b,c] of [[1,4,13],[1,-2,5],[2,4,5],[1,0,9]]){const D=b*b-4*a*c,eq=`${a===1?'':a}x² ${b<0?'-':'+'} ${Math.abs(b)}x + ${c} = 0`.replace(' + 0x','');
  put('quadratic',`What is the discriminant b² - 4ac of ${eq}?`,D,tab('The equation',[['a',`${a}`],['b',`${b}`],['c',`${c}`]]),`b² - 4ac = ${b*b} - ${4*a*c} = ${D}${D<0?', so the solutions are complex':''}.`);}
 for(const [a,b,c] of [[1,4,13],[1,-6,9],[1,5,6],[2,1,3],[1,-2,-8],[4,4,1]]){const D=b*b-4*a*c,k=D<0?'none':D===0?'one':'two',eq=`${a===1?'':a}x² ${b<0?'-':'+'} ${Math.abs(b)===1?'':Math.abs(b)}x ${c<0?'-':'+'} ${Math.abs(c)} = 0`;
  put('quadratic',`How many real solutions does ${eq} have: none, one, or two?`,k,tab('The equation',[['equation',eq]],['']),`The discriminant is ${D}: ${D<0?'negative, so no real solutions (two complex ones)':D===0?'zero, so one real solution':'positive, so two real solutions'}.`,[k==='none'?'0':k==='one'?'1':'2',k==='none'?'zero':k]);}
}};
