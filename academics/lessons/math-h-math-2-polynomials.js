// High School course unit (docs/design/COURSES.md, docs/design/COURSE_QUALITY.md): Math 2, Unit 4, Polynomials and
// Factoring, written to the Common Core integrated pathway's Math II standards (A-APR.1, A-SSE.2); our own wording and
// questions. Polynomials add and subtract by combining like terms and multiply by multiplying every term by every term;
// like the integers they are closed under addition, subtraction and multiplication but not division. Factoring undoes
// multiplication: take out the greatest common factor first, then factor a trinomial into two binomials, use the special
// patterns a² - b² = (a + b)(a - b) and a² ± 2ab + b² = (a ± b)², or group terms. Polynomials are kept as arrays of
// coefficients, lowest power first, so every product and sum is exact.
const fig=(title,o)=>({t:'figure',title,...o});
/* area model: x drawn as 5 units, so the rectangle is (5 + 7) wide and (5 + 3) tall; I is where the cuts cross */
const AREA={A:[0,8],B:[12,8],C:[12,0],D:[0,0],E:[5,8],F:[12,3],G:[5,0],H:[0,3],I:[5,3]};
/* a = 7, b = 3: an L-shape of area 49 - 9 = 40 beside a 10 by 4 rectangle */
const DIFF={A:[0,0],B:[7,0],C:[7,4],D:[4,4],E:[4,7],F:[0,7],G:[7,7],H:[0,0],J:[10,1.5],K:[20,1.5],L:[20,5.5],M:[10,5.5],N:[0,0]};
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const SUP=['','','²','³','⁴','⁵','⁶'];
/* a polynomial from its coefficients [c0, c1, c2, ...], written from the highest power down */
const show=cs=>{const ts=[];for(let p=cs.length-1;p>=0;p--){const c=cs[p];if(!c)continue;const a=Math.abs(c),body=p===0?String(a):`${a===1?'':a}x${SUP[p]}`;ts.push([c<0,body]);}
 return ts.length?ts.map(([neg,b],i)=>i?`${neg?'-':'+'} ${b}`:`${neg?'-':''}${b}`).join(' '):'0';};
const addP=(p,q,s=1)=>Array.from({length:Math.max(p.length,q.length)},(_,i)=>(p[i]||0)+s*(q[i]||0));
const mulP=(p,q)=>{const r=Array(p.length+q.length-1).fill(0);p.forEach((a,i)=>q.forEach((b,j)=>{r[i+j]+=a*b;}));return r;};
const deg=p=>{for(let i=p.length-1;i>=0;i--)if(p[i])return i;return 0;};
/* lettered choices, the right one moved to position k */
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
const YN={yes:['y'],no:['n']};
/* The three Try-it questions in pool form; the generator skips them. */
const TRY=['When (x + 6)(x - 2) is multiplied out, what is the coefficient of x?',
 'x² + 9x + 20 = (x + p)(x + q) with p < q. What is q?',
 'x² - 64 = (x + a)(x - a) with a > 0. What is a?'];
const tryIt=s=>`Try it: ${s[0].toLowerCase()+s.slice(1)}`;
export default {
id:'math-h-math-2-polynomials-and-factoring',subject:'math',level:5,grade:9,standard:'CCSS A-APR.1, A-SSE.2',
title:'Polynomials and factoring',
goal:'Add, subtract and multiply polynomials and explain why the results are polynomials, then factor them by taking out a greatest common factor, splitting trinomials into binomials, using the special patterns and grouping.',
points:20,
skills:{operations:'Adding, subtracting and multiplying',closure:'Closure and degree',gcf:'Greatest common factor',trinomials:'Factoring trinomials',special:'Special patterns'},
outline:[['A-APR.1','Add, subtract and multiply polynomials, and know they stay polynomials',['operations','closure']],['A-SSE.2 (common factors)','Take out the greatest common factor',['gcf']],['A-SSE.2 (trinomials)','Factor trinomials into binomials, and factor by grouping',['trinomials']],['A-SSE.2 (special products)','Factor differences of squares and perfect squares',['special']]],
steps:[
 {skill:'operations',say:'To add polynomials, combine like terms, the terms with the same power of x: x² terms with x² terms, x terms with x terms, numbers with numbers. So (2x² + 3x - 1) + (x² - 5x + 4) = 3x² - 2x + 3.',eq:'combine like terms',
  pic:{t:'board',title:'Add (2x² + 3x - 1) + (x² - 5x + 4)',lines:['(2x² + 3x - 1) + (x² - 5x + 4)','= (2x² + x²) + (3x - 5x) + (-1 + 4)','= 3x² - 2x + 3'],why:['','group like terms',''],box:true}},
 {skill:'operations',say:'Subtracting a polynomial changes the sign of every term in it, not just the first. So (5x² - 2x + 7) - (3x² + 4x - 1) = 5x² - 2x + 7 - 3x² - 4x + 1, which combines to 2x² - 6x + 8.',
  pic:{t:'board',title:'Subtract (5x² - 2x + 7) - (3x² + 4x - 1)',lines:['(5x² - 2x + 7) - (3x² + 4x - 1)','= 5x² - 2x + 7 - 3x² - 4x + 1','= 2x² - 6x + 8'],why:['','every sign in the second changes','combine like terms'],box:true}},
 {skill:'operations',say:'To multiply, multiply every term by every term, then combine. An area model shows why: a rectangle x + 7 wide and x + 3 tall splits into four pieces, x², 7x, 3x and 21, so (x + 3)(x + 7) = x² + 10x + 21.',eq:'(x + 3)(x + 7) = x² + 10x + 21',
  pic:fig('(x + 3)(x + 7) as an area',{pts:AREA,dots:'',hide:'ABCDEFGHI',polys:[{v:'AEIH',col:0,label:'x²'},{v:'EBFI',col:1,label:'7x'},{v:'HIGD',col:1,label:'3x'},{v:'IFCG',col:2,label:'21'}],segs:[{v:'AE',label:'x',side:-1,col:0},{v:'EB',label:'7',side:-1,col:1},{v:'AH',label:'x',side:1,col:0},{v:'HD',label:'3',side:1,col:1}]}),
  check:{prompt:tryIt(TRY[0]),answer:4,options:[4,-12,8],hint:'The x terms come from x · (-2) and 6 · x.',pic:tab('(x + 6)(x - 2)',[['outer','x · (-2)'],['inner','6 · x']],['Terms'])}},
 {skill:'operations',say:'With negative terms, keep each sign with its term. (x + 4)(x - 6) = x² - 6x + 4x - 24, and the middle terms combine: -6x + 4x = -2x, so the product is x² - 2x - 24.',
  pic:{t:'board',title:'Multiply (x + 4)(x - 6)',lines:['(x + 4)(x - 6) = x² - 6x + 4x - 24','= x² - 2x - 24'],why:['every term times every term','combine -6x and 4x'],box:true}},
 {skill:'closure',say:'Adding, subtracting or multiplying polynomials always gives another polynomial, just as those operations on integers always give an integer: polynomials are closed under them. Degrees add when you multiply. Division is different: (x + 1) ÷ x = 1 + x⁻¹, which is not a polynomial.',
  pic:{t:'board',title:'Closed under +, - and ×, but not ÷',lines:['(x³ + 1) + (x² - 4) = x³ + x² - 3','(x³ + 1)(x² - 4) = x⁵ - 4x³ + x² - 4','(x + 1) ÷ x = 1 + x⁻¹'],why:['a polynomial','degree 3 + 2 = 5','not a polynomial']}},
 {skill:'gcf',say:'Factoring undoes multiplying, and the first step is always the greatest common factor: the largest number and highest power of x that divide every term. In 6x³ - 9x², every term has a factor of 3 and of x², so 6x³ - 9x² = 3x²(2x - 3). Check by multiplying back.',eq:'6x³ - 9x² = 3x²(2x - 3)',
  pic:{t:'board',title:'Take out the greatest common factor',lines:['6x³ - 9x² = 3x² · 2x - 3x² · 3','= 3x²(2x - 3)'],why:['3 and x² divide both terms','check: 3x²(2x - 3) = 6x³ - 9x²'],box:true}},
 {skill:'trinomials',say:'To factor x² + bx + c, find two numbers that multiply to c and add to b. For x² + 7x + 12 they are 3 and 4, because 3 × 4 = 12 and 3 + 4 = 7, so x² + 7x + 12 = (x + 3)(x + 4).',eq:'x² + 7x + 12 = (x + 3)(x + 4)',
  pic:{t:'board',title:'Factor x² + 7x + 12',lines:['multiply to 12, add to 7: 3 and 4','x² + 7x + 12 = (x + 3)(x + 4)'],why:['',''],box:true},
  check:{prompt:tryIt(TRY[1]),answer:5,options:[5,4,9],hint:'Find two numbers that multiply to 20 and add to 9.',pic:tab('x² + 9x + 20',[['multiply to','20'],['add to','9']],['Find'])}},
 {skill:'trinomials',say:'When a is not 1, as in 2x² + 7x + 3, find two numbers that multiply to a × c = 6 and add to 7: they are 1 and 6. Split the middle term with them and group: 2x² + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3).',eq:'2x² + 7x + 3 = (2x + 1)(x + 3)',
  pic:{t:'board',title:'Factor 2x² + 7x + 3 by grouping',lines:['2x² + 7x + 3 = 2x² + x + 6x + 3','= x(2x + 1) + 3(2x + 1)','= (2x + 1)(x + 3)'],why:['a × c = 6 = 1 × 6, and 1 + 6 = 7','factor each pair','take out (2x + 1)'],box:true}},
 {skill:'special',say:'A difference of squares factors as a² - b² = (a + b)(a - b), so x² - 49 = (x + 7)(x - 7). The picture shows why: cut a b-by-b square from an a-by-a square, and the L-shape left over has the same area as a rectangle a + b long and a - b wide.',eq:'a² - b² = (a + b)(a - b)',
  pic:fig('a² - b² = (a + b)(a - b)',{pts:DIFF,dots:'',hide:'ABCDEFGHJKLMN',polys:[{v:'ABCDEF',col:0,label:'a² - b²'},{v:'DCGE',col:3,fill:false,dash:true},{v:'JKLM',col:0,label:'(a + b)(a - b)'}],segs:[{v:'AB',label:'a',side:1,col:0},{v:'CG',label:'b',side:1,col:3},{v:'JK',label:'a + b',side:1,col:0},{v:'KL',label:'a - b',side:1,col:0}]}),
  check:{prompt:tryIt(TRY[2]),answer:8,options:[8,32,64],hint:'64 is a perfect square: which number squared is 64?',pic:tab('x² - 64',[['pattern','a² - b²']],[''])}},
 {skill:'special',say:'A perfect square trinomial factors as a² + 2ab + b² = (a + b)²: x² + 10x + 25 = (x + 5)², because 2 · x · 5 = 10x and 5² = 25. The difference of squares also makes mental math quick: 49 × 51 = (50 - 1)(50 + 1) = 2,500 - 1 = 2,499.',eq:'a² + 2ab + b² = (a + b)²',
  pic:{t:'board',title:'Two patterns at work',lines:['x² + 10x + 25 = (x + 5)²','49 × 51 = (50 - 1)(50 + 1)','= 50² - 1² = 2,499'],why:['2 · x · 5 = 10x and 5² = 25','a difference of squares',''],box:true}},
 {skill:'special',summary:true,say:'Putting Unit 4 together: add and subtract polynomials by combining like terms, multiply every term by every term, and know that the result is always a polynomial; to factor, first take out the greatest common factor, then look for a special pattern (a difference of squares or a perfect square), then factor a trinomial into two binomials or by grouping. Always check by multiplying back. Traps: subtracting a polynomial changes every sign in it, and x² + 49 does not factor over the real numbers.',pic:tab('Unit 4 at a glance',[['first','greatest common factor'],['then','special patterns'],['then','trinomial or grouping'],['always','multiply back to check']],['Factoring order'])}],
progression:{requires:['math-h-quadratics','math-h-exponent-rules'],operations:3,demand:'Multiply and combine terms of polynomials, find greatest common factors, find number pairs with a given product and sum, and recognize the special patterns.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 const pw=p=>p===0?'constant term':p===1?'coefficient of x':`coefficient of x${SUP[p]}`;
 /* operations: sums, differences and products, read off by coefficient */
 for(const [P,Q,s,p] of [[[-2,3,2],[4,-5,1],1,1],[[-2,3,2],[4,-5,1],1,0],[[7,0,4,-1],[2,-6,1],1,2],[[5,-2,3],[1,4,-6],-1,2],[[5,-2,3],[1,4,-6],-1,1],[[0,8,0,2],[3,-8,5],-1,1],[[6,1,-1],[-6,2,4],1,0],[[2,0,-3],[9,1,-3],-1,2]]){const r=addP(P,Q,s),e=`(${show(P)}) ${s>0?'+':'-'} (${show(Q)})`;
  put('operations',`When ${e} is simplified, what is the ${pw(p)}?`,r[p]||0,tab('Combine like terms',[['expression',e]],['']),`${s>0?'Add':'Subtract'} like terms${s<0?', changing every sign in the second polynomial':''}: ${show(r)}. The ${pw(p)} is ${r[p]||0}.`);}
 for(const [P,Q,p] of [[[3,1],[-6,1],1],[[3,1],[-6,1],0],[[1,2],[4,1],1],[[-2,3],[-5,2],1],[[-2,3],[-5,2],2],[[4,-1],[-3,2],0],[[-1,5],[2,3],1],[[7,-2],[1,1],1]]){const r=mulP(P,Q),e=`(${show(P)})(${show(Q)})`;
  put('operations',`When ${e} is multiplied out, what is the ${pw(p)}?`,r[p],tab('Multiply',[['product',e]],['']),`Multiply every term by every term: ${show(r)}. The ${pw(p)} is ${r[p]}.`);}
 for(const [P,Q,p] of [[[-1,2],[2,3,1],2],[[-1,2],[2,3,1],1],[[2,1],[4,-1,1],2],[[2,1],[4,-1,1],0],[[-3,1],[1,0,2],1],[[5,-1],[-1,2,3],2]]){const r=mulP(P,Q),e=`(${show(P)})(${show(Q)})`;
  put('operations',`When ${e} is multiplied out, what is the ${pw(p)}?`,r[p],tab('Multiply',[['product',e]],['']),`Multiply every term by every term and combine: ${show(r)}. The ${pw(p)} is ${r[p]}.`);}
 for(const [e,P] of [['(x³ + 2)(x² - x)',mulP([2,0,0,1],[0,-1,1])],['(4x² - 1) + (-4x² + 3x)',addP([-1,0,4],[0,3,-4])],['(x² + 1)(x² + 1)(x² + 1)',mulP(mulP([1,0,1],[1,0,1]),[1,0,1])],['(2x - 5)(3x + 1)',mulP([-5,2],[1,3])]])
  put('operations',`What is the degree of ${e}?`,deg(P),tab('Degree',[['expression',e]],['']),`Simplified, it is ${show(P)}, whose highest power of x is ${deg(P)}.`);
 /* closure: what stays a polynomial, and degrees */
 [['When you add two polynomials, is the result always a polynomial?','yes',['no','only if they have the same degree'],'Adding polynomials only combines like terms, so every exponent stays a whole number: the sum is always a polynomial. The degrees need not match.'],
  ['When you multiply two polynomials, is the result always a polynomial?','yes',['no','only if both are linear'],'Multiplying terms adds their whole-number exponents, like x² · x³ = x⁵, so the product is always a polynomial, whatever the degrees.'],
  ['When you divide one polynomial by another, is the result always a polynomial?','no: (x + 1) ÷ x is not a polynomial',['yes, always','yes, if the degrees match'],'(x + 1) ÷ x = 1 + 1/x = 1 + x⁻¹, and a polynomial cannot have a negative exponent. So division does not always give a polynomial.'],
  ['Polynomials are closed under addition, subtraction and multiplication. Which numbers behave the same way?','the integers',['the whole numbers under subtraction','the integers under division'],'Adding, subtracting or multiplying two integers always gives an integer. Whole numbers fail under subtraction (2 - 5 = -3), and integers under division.'],
  ['Is 3x² - 5x + 2√x a polynomial?','no, because √x is x to the power one half',['yes, it has three terms','yes, because 2 is a whole number'],'√x = x^(1/2), and a polynomial may only have whole-number exponents on the variable. So the term 2√x stops it being a polynomial.'],
  ['Is 4x³ - x + 7 a polynomial?','yes',['no, because it has a negative term','no, because it has no x² term'],'Every exponent on x (3, 1 and 0) is a whole number, so it is a polynomial. Negative coefficients and missing terms are allowed.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('closure',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Closure',[['add, subtract, multiply','always a polynomial'],['divide','not always']],['Result']),why||`The answer is ${right}.`,[right]);});
 for(const [q,v,why] of [['A degree-3 polynomial is multiplied by a degree-2 polynomial. What is the degree of the product?',5,'degrees add when you multiply: 3 + 2 = 5'],['A degree-4 polynomial is multiplied by a degree-4 polynomial. What is the degree of the product?',8,'the degrees add when you multiply: 4 + 4 = 8'],
  ['Two polynomials of degree 4 are added. What is the highest degree the sum can have?',4,'adding cannot create a higher power; the x⁴ terms might even cancel'],['A degree-1 polynomial is used as a factor three times, as in (2x + 1)³. What is the degree?',3,'1 + 1 + 1 = 3']])
  put('closure',q,v,tab('Degree',[['multiply','degrees add'],['add','at most the larger degree']],['Rule']),`${why[0].toUpperCase()+why.slice(1)}.`);
 /* gcf: the common number and power, and factored forms */
 for(const [terms,k,p] of [[['12x⁴','18x²'],6,2],[['6x³','15x²'],3,2],[['8x⁵','20x³','4x²'],4,2],[['15x²','25x'],5,1],[['14x⁶','21x⁴'],7,4]]){const e=terms.join(' + ');
  put('gcf',`What is the coefficient of the greatest common factor of ${e}?`,k,tab('Common factor',[['terms',terms.join(', ')]],['']),`The largest number dividing ${terms.map(t=>t.match(/^\d+/)[0]).join(', ')} is ${k}.`);
  put('gcf',`What power of x is in the greatest common factor of ${e}? Answer with the exponent.`,p,tab('Common factor',[['terms',terms.join(', ')]],['']),`The smallest power of x among the terms is x${SUP[p]||'¹'}, so the exponent is ${p}.`);}
 [['9x³ - 6x²','3x²(3x - 2)',['3x(3x² - 2)','9x²(x - 6)']],['10x² + 15x','5x(2x + 3)',['5(2x² + 3x) ','10x(x + 15)']],['4x³ + 8x² - 12x','4x(x² + 2x - 3)',['4(x³ + 2x² - 3x)','2x(2x² + 4x - 12)']],['7x⁴ - 14x²','7x²(x² - 2)',['7x(x³ - 2x)','x²(7x² - 14)']]].forEach(([e,right,wrong],k)=>{const c=choose(right,[wrong[0].trim(),wrong[1]],k);
  put('gcf',`Which shows ${e} with its greatest common factor taken out? ${c.text}. Answer A, B or C.`,c.letter,tab('Common factor',[['expression',e]],['']),`Take out the largest number and the highest power of x that divide every term: ${right}. The other choices leave a common factor inside or do not multiply back to the expression.`,[right]);});
 /* trinomials: monic, non-monic and grouping */
 for(const [p,q] of [[3,5],[-2,-6],[-5,3],[1,8],[-7,2],[4,6],[-9,-1],[2,-11],[-4,10],[6,-3]]){const e=show(mulP([p,1],[q,1])),lo=Math.min(p,q),hi=Math.max(p,q);
  put('trinomials',`${e} = (x + p)(x + q) with p < q. What is q?`,hi,tab('Factor',[['trinomial',e]],['']),`Find two numbers that multiply to ${p*q} and add to ${p+q}: ${lo} and ${hi}. So q = ${hi}.`);}
 [[[2,7],'(x + 2)(x + 7)',['(x + 1)(x + 14)','(x + 3)(x + 4)']],[[-2,-5],'(x - 2)(x - 5)',['(x + 2)(x + 5)','(x - 1)(x - 10)']],[[6,-4],'(x + 6)(x - 4)',['(x - 6)(x + 4)','(x + 8)(x - 3)']],
  [[-8,1],'(x - 8)(x + 1)',['(x + 8)(x - 1)','(x - 4)(x + 2)']],[[4,4],'(x + 4)²',['(x + 16)(x + 1)','(x - 4)²']],[[-3,9],'(x - 3)(x + 9)',['(x + 3)(x - 9)','(x - 3)(x - 9)']]].forEach(([[p,q],right,wrong],k)=>{const e=show(mulP([p,1],[q,1])),c=choose(right,wrong,k);
  put('trinomials',`Which is the factored form of ${e}? ${c.text}. Answer A, B or C.`,c.letter,tab('Factor',[['trinomial',e]],['']),`Multiply back: ${right} gives ${e}.`,[right]);});
 [[[3,2],[1,1],'(2x + 3)(x + 1)',['(2x + 1)(x + 3)','(2x - 3)(x - 1)']],[[-1,3],[-2,1],'(3x - 1)(x - 2)',['(3x - 2)(x - 1)','(3x + 1)(x + 2)']],[[5,2],[-1,1],'(2x + 5)(x - 1)',['(2x - 5)(x + 1)','(2x + 1)(x - 5)']],
  [[3,4],[-1,1],'(4x + 3)(x - 1)',['(4x - 3)(x + 1)','(2x + 3)(2x - 1)']],[[-3,2],[-3,2],'(2x - 3)²',['(2x + 3)²','(4x - 3)(x - 3)']],[[1,5],[-2,1],'(5x + 1)(x - 2)',['(5x - 1)(x + 2)','(5x - 2)(x + 1)']]].forEach(([P,Q,right,wrong],k)=>{const e=show(mulP(P,Q)),c=choose(right,wrong,k+1);
  put('trinomials',`Which is the factored form of ${e}? ${c.text}. Answer A, B or C.`,c.letter,tab('Factor',[['trinomial',e]],['']),`Split the middle term using a × c, then group; check by multiplying back: ${right} gives ${e}.`,[right]);});
 for(const [P,Q,p] of [[[3,2],[1,3],0],[[-5,3],[2,1],0],[[1,4],[-3,1],1],[[7,2],[-1,3],2]]){const r=mulP(P,Q);
  put('trinomials',`${show(r)} factors as (${show(P)})(${show(Q)}). Multiplying back, what is the ${pw(p)}?`,r[p],tab('Check by multiplying',[['factors',`(${show(P)})(${show(Q)})`]],['']),`Multiplying back gives ${show(r)}, so the ${pw(p)} is ${r[p]}.`);}
 [['x³ + 2x² + 3x + 6','(x² + 3)(x + 2)',['(x² + 2)(x + 3)','(x + 3)(x + 2)']],['x³ - 4x² + 5x - 20','(x² + 5)(x - 4)',['(x² - 5)(x + 4)','(x² + 4)(x - 5)']],['2x³ + x² + 6x + 3','(x² + 3)(2x + 1)',['(2x² + 3)(x + 1)','(x² + 1)(2x + 3)']],['x³ - x² - 7x + 7','(x² - 7)(x - 1)',['(x² + 7)(x - 1)','(x² - 1)(x - 7)']]].forEach(([e,right,wrong],k)=>{const c=choose(right,wrong,k+2);
  put('trinomials',`Factor by grouping: which is the factored form of ${e}? ${c.text}. Answer A, B or C.`,c.letter,tab('Grouping',[['expression',e]],['']),`Group the first two terms and the last two, take a common factor from each, then take out the common binomial: ${right}.`,[right]);});
 /* special: differences of squares, perfect squares, and mental math */
 for(const a of [9,11,12,1.5])put('special',`x² - ${a*a} = (x + a)(x - a) with a > 0. What is a?`,a,tab('Difference of squares',[['expression',`x² - ${a*a}`]],['']),`${a*a} = ${a}², so x² - ${a*a} = (x + ${a})(x - ${a}).`);
 for(const [k,a] of [[2,5],[3,4]])put('special',`${k*k}x² - ${a*a} = (${k}x + a)(${k}x - a) with a > 0. What is a?`,a,tab('Difference of squares',[['expression',`${k*k}x² - ${a*a}`]],['']),`${k*k}x² = (${k}x)² and ${a*a} = ${a}², so the factors are (${k}x + ${a})(${k}x - ${a}).`);
 [['x² - 36','(x + 6)(x - 6)',['(x - 6)²','(x + 6)²'],'36 = 6², so x² - 36 is a difference of squares: a² - b² = (a + b)(a - b) gives (x + 6)(x - 6). (x - 6)² would be x² - 12x + 36.'],['x² - 1','(x + 1)(x - 1)',['(x - 1)²','x(x - 1)'],'1 = 1², so x² - 1 is a difference of squares: (x + 1)(x - 1). Check: x² - x + x - 1 = x² - 1.'],['9x² - 16','(3x + 4)(3x - 4)',['(9x + 4)(x - 4)','(3x - 4)²'],'9x² = (3x)² and 16 = 4², so a² - b² = (a + b)(a - b) gives (3x + 4)(3x - 4). Check: 9x² - 12x + 12x - 16 = 9x² - 16.'],['x² + 49','it does not factor over the real numbers',['(x + 7)(x - 7)','(x + 7)²'],'x² + 49 is a sum of squares, and x² + 49 is at least 49 for every real x, so it is never 0 and has no real factors. (x + 7)(x - 7) is x² - 49.']].forEach(([e,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('special',`Which is the factored form of ${e}? ${c.text}. Answer A, B or C.`,c.letter,tab('Special patterns',[['a² - b²','(a + b)(a - b)'],['a² + b²','no real factors']],['Factors as']),why||`The answer is ${right}.`,[right]);});
 for(const [b,a] of [[12,6],[-14,7],[6,3]])put('special',`x² ${b<0?'-':'+'} ${Math.abs(b)}x + ${a*a} = (x ${b<0?'-':'+'} a)² with a > 0. What is a?`,a,tab('Perfect square',[['trinomial',`x² ${b<0?'-':'+'} ${Math.abs(b)}x + ${a*a}`]],['']),`${a*a} = ${a}² and ${Math.abs(b)} = 2 × ${a}, so it is (x ${b<0?'-':'+'} ${a})².`);
 for(const [k,a] of [[3,2],[2,5]])put('special',`${k*k}x² - ${2*k*a}x + ${a*a} = (${k}x - a)² with a > 0. What is a?`,a,tab('Perfect square',[['trinomial',`${k*k}x² - ${2*k*a}x + ${a*a}`]],['']),`${k*k}x² = (${k}x)², ${a*a} = ${a}² and ${2*k*a} = 2 × ${k} × ${a}, so it is (${k}x - ${a})².`);
 for(const [e,ok] of [['x² + 6x + 8',false],['x² + 6x + 9',true],['4x² - 20x + 25',true]])put('special',`Is ${e} a perfect square trinomial? Answer yes or no.`,ok?'yes':'no',tab('Perfect squares',[['expression',e]],['']),ok?'Its first and last terms are squares and its middle term is twice their product: yes.':'8 is not a perfect square, so it cannot be (x + a)²: no.',YN[ok?'yes':'no']);
 for(const [a,b] of [[48,52],[38,42]]){const m=(a+b)/2,d=(b-a)/2;
  put('special',`Use a difference of squares: what is ${a} × ${b}?`,a*b,tab('Mental math',[['product',`${a} × ${b}`]],['']),`${a} × ${b} = (${m} - ${d})(${m} + ${d}) = ${m}² - ${d}² = ${m*m} - ${d*d} = ${a*b}.`);}
}};
