// High School course unit (Math 1, Unit 5; CCSS N-RN.1, N-RN.2, A-SSE.2, 8.EE.1; brought to docs/design/COURSE_QUALITY.md's
// bar on 10 Oct): exponent rules. The integer rules are 8.EE.1, reviewed; N-RN.1, N-RN.2 and A-SSE.2 sit in Math II of the
// Common Core integrated pathway (Appendix A) and come early here so Unit 6, exponential functions, can use them. For the same base, multiplying
// adds the exponents, dividing subtracts them, and a power of a power multiplies them. Any nonzero number to
// the power 0 is 1, a negative exponent means one over the power (b⁻ⁿ = 1/bⁿ), and a fractional exponent is a
// root: b^(p/q) is the q-th root of b, raised to the power p. Every answer is computed from the exponents and
// bases printed in its own prompt, and every fractional power uses a perfect power, so its value is whole.
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const SUP=n=>String(n).split('').map(ch=>({'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'}[ch])).join('');
/* x to a power, written the usual way: x for the first power. */
const pw=(v,e)=>e===1?v:`${v}${SUP(e)}`;
const gcd=(p,q)=>q?gcd(q,p%q):Math.abs(p);
const simp=(title,expr,ask)=>({t:'setups',title,head:'',rows:[[expr,ask]],cols:['Simplify']});
const val=(title,expr)=>({t:'setups',title,head:'',rows:[[expr,'?']],cols:['Value']});
/* Letters for the base; k and n are kept for the answers (kxⁿ). */
const VARS=['x','a','y','m','t','p','b','c'];
/* The three Try-it questions in pool form. The checks ask them; the generator below skips them, so a Try-it is never also a pool question. */
const TRY=['x⁵ · x⁶ = xⁿ. What is n?','(x⁴)³ = xⁿ. What is n?','What is the value of 27^(2/3)?'];
const tryIt=s=>`Try it: ${/^[A-Z](?!\()/.test(s)?s[0].toLowerCase()+s.slice(1):s}`;
export default {
id:'math-h-exponent-rules',subject:'math',level:5,grade:9,standard:'CCSS N-RN.1, N-RN.2, A-SSE.2, 8.EE.1',
title:'Exponent rules',
goal:'Use the product, quotient and power rules to simplify powers, find the value of zero, negative and fractional exponents and explain why they work, and move between radicals and rational exponents.',
points:20,
skills:{prodquot:'Product and quotient rules',power:'Power of a power',special:'Zero, negative and fractional exponents',why:'Why the rules work',radicals:'Radicals and rational exponents'},
outline:[['N-RN.1','Explain zero, negative and rational exponents from the rules for whole-number exponents',['special','why']],['N-RN.2','Rewrite expressions with radicals and rational exponents',['radicals']],
 ['A-SSE.2','Rewrite expressions with the product, quotient and power rules',['prodquot','power']]],
steps:[
 {skill:'prodquot',say:'An exponent counts repeated factors: x³ means x · x · x. So x³ · x⁵ is 3 + 5 = 8 factors of x, and x³ · x⁵ = x⁸. When you multiply powers of the same base, add the exponents.',eq:'x^m · x^n = x^(m + n)',
  pic:{t:'board',title:'Multiply: add the exponents',lines:['x³ · x⁵ = (x · x · x) · (x · x · x · x · x)','= x⁸'],why:['write out the factors','3 + 5 = 8 factors'],box:true}},
 {skill:'prodquot',say:'When you divide powers of the same base, take away the exponents: x⁸ ÷ x³ = x⁵, because three of the eight factors cancel. Numbers in front multiply as usual: (2x⁴)(6x³) = 2 · 6 · x⁴ · x³ = 12x⁷.',eq:'x^m ÷ x^n = x^(m - n)',
  pic:{t:'board',title:'Divide: take away the exponents',lines:['x⁸ ÷ x³ = x⁸⁻³','= x⁵','(2x⁴)(6x³) = 2 · 6 · x⁴ · x³','= 12x⁷'],why:['three factors cancel','','numbers multiply','exponents add'],box:true},
  check:{prompt:tryIt(TRY[0]),answer:11,options:[11,30,1],hint:'Multiplying powers of the same base adds the exponents: 5 + 6.',pic:tab('Same base',[['x⁵ · x⁶','xⁿ']],['Simplify'])}},
 {skill:'power',say:'A power of a power multiplies the exponents. (x³)⁵ means x³ five times, so it has 3 + 3 + 3 + 3 + 3 = 15 factors of x, and (x³)⁵ = x¹⁵.',eq:'(x^m)^n = x^(mn)',
  pic:{t:'board',title:'A power of a power',lines:['(x³)⁵ = x³ · x³ · x³ · x³ · x³','= x³ˣ⁵','= x¹⁵'],why:['five copies of x³','3 × 5',''],box:true}},
 {skill:'power',say:'A power of a product raises every factor in the brackets: (3x⁴)² = 3² · (x⁴)² = 9x⁸. Remember to raise the number in front too; leaving it as 3x⁸ is the most common slip.',eq:'(3x⁴)² = 9x⁸',
  pic:{t:'board',title:'A power of a product',lines:['(3x⁴)² = 3² · (x⁴)²','= 9x⁸'],why:['raise every factor','3² = 9 and 4 × 2 = 8'],box:true},
  check:{prompt:tryIt(TRY[1]),answer:12,options:[12,7,64],hint:'A power of a power multiplies the exponents: 4 × 3.',pic:tab('Power of a power',[['(x⁴)³','xⁿ']],['Simplify'])}},
 {skill:'special',say:'Any nonzero number to the power 0 is 1. The quotient rule shows why: x⁴ ÷ x⁴ = x⁴⁻⁴ = x⁰, and any nonzero number divided by itself is 1. So 11⁰ = 1, and so is every other nonzero base to the power 0.',eq:'x⁰ = 1 (x ≠ 0)',
  pic:{t:'board',title:'Why x⁰ = 1',lines:['x⁴ ÷ x⁴ = x⁴⁻⁴ = x⁰','x⁴ ÷ x⁴ = 1','so x⁰ = 1'],why:['the quotient rule','a nonzero number ÷ itself',''],box:true}},
 {skill:'special',say:'A negative exponent means one over the power: 2⁻⁴ = 1/2⁴ = 1/16. The quotient rule gives the same thing: 2³ ÷ 2⁷ = 2⁻⁴, and 8 ÷ 128 = 1/16.',eq:'x⁻ⁿ = 1/xⁿ',
  pic:{t:'board',title:'A negative exponent',lines:['2³ ÷ 2⁷ = 2³⁻⁷ = 2⁻⁴','2³ ÷ 2⁷ = 8 ÷ 128 = 1/16','so 2⁻⁴ = 1/16'],why:['the quotient rule','divide the numbers',''],box:true}},
 {skill:'special',say:'A fractional exponent is a root. 216^(1/3) is the cube root of 216, which is 6, because 6³ = 216. For 216^(2/3), take the root first, then the power: (216^(1/3))² = 6² = 36.',eq:'x^(m/n): the nth root, raised to the power m',
  pic:{t:'board',title:'A fractional exponent',lines:['216^(2/3) = (216^(1/3))²','= 6²','= 36'],why:['root first, then the power','6³ = 216',''],box:true},
  check:{prompt:tryIt(TRY[2]),answer:9,options:[9,18,3],hint:'Take the cube root of 27 first, then square it.',pic:tab('A fractional exponent',[['27^(2/3)','?']],['Value'])}},
 {skill:'why',say:'The rules for zero, negative and fractional exponents are not new rules; they keep the old ones working. Since (3^(1/2))² = 3^(1/2 × 2) = 3 by the power of a power rule, 3^(1/2) is a number whose square is 3: the square root of 3. In x^(m/n), the denominator n names the root and the numerator m the power.',eq:'(3^(1/2))² = 3^(1/2 × 2) = 3',
  pic:{t:'board',title:'Why 3^(1/2) = √3',lines:['(3^(1/2))² = 3^(1/2 × 2)','= 3¹ = 3','so 3^(1/2) = √3'],why:['the power of a power rule','','its square is 3'],box:true}},
 {skill:'radicals',say:'Radicals and rational exponents are two ways to write the same thing: √x = x^(1/2), ∛x = x^(1/3) and √(x³) = x^(3/2). To simplify a square root, pull out the largest perfect square factor: √48 = √(16 × 3) = 4√3. For a cube root, pull out a perfect cube: ∛16 = ∛(8 × 2) = 2∛2.',eq:'√48 = √16 × √3 = 4√3',
  pic:{t:'board',title:'Simplify a root',lines:['√48 = √(16 × 3)','= √16 × √3','= 4√3','∛16 = ∛(8 × 2) = 2∛2'],why:['16 is the largest square factor','','','8 is a perfect cube'],box:false}},
 {skill:'radicals',summary:true,say:'Putting Unit 5 together: multiplying powers of one base adds exponents, dividing subtracts them, and a power of a power multiplies them; a power of a product raises every factor; x⁰ = 1, x⁻ⁿ = 1 ÷ xⁿ and x^(m/n) is the nth root raised to the m, all because the rules must keep working; and radicals can be simplified by pulling out perfect squares or cubes. Traps: (3x⁴)² is 9x⁸, not 3x⁸, and x³ · x⁵ is x⁸, not x¹⁵.',pic:{t:'setups',title:'Unit 5 at a glance',head:'',rows:[['x^m · x^n','x^(m + n)'],['x^m ÷ x^n','x^(m - n)'],['(x^m)^n','x^(mn)'],['x^(1/n)','nth root']],cols:['Rule']}}],
progression:{requires:['math-m-exponents-scientific'],operations:2,demand:'Add, take away or multiply exponents of one base, raise every factor of a product, and read zero, negative and fractional exponents as 1, one over a power, and a root.'},
items(add){
 const seen=new Set(TRY);
 /* seen starts with the Try-it questions, so the generator skips them (27^(2/3) is one of the fractional powers below) and never repeats a prompt. */
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept?.length?accept:undefined);};
 let i=0;const V=()=>VARS[i++%VARS.length];
 /* Product rule: add the exponents (a first power is written without an exponent). */
 for(const [p,q] of [[3,4],[2,5],[6,3],[7,2],[4,4],[5,9],[8,3],[2,10],[1,6],[-2,7],[5,-3],[9,1]]){const v=V(),e=`${pw(v,p)} · ${pw(v,q)}`;
  put('prodquot',`${e} = ${v}ⁿ. What is n?`,p+q,simp('Same base',e,`${v}ⁿ`),`Multiplying powers of the same base adds the exponents: ${p} + ${q<0?`(${q})`:q} = ${p+q}.`);}
 /* Three factors of the same base. */
 for(const [p,q,r] of [[2,5,3],[4,1,6],[3,3,3],[6,2,5]]){const v=V(),e=`${pw(v,p)} · ${pw(v,q)} · ${pw(v,r)}`;
  put('prodquot',`${e} = ${v}ⁿ. What is n?`,p+q+r,simp('Same base',e,`${v}ⁿ`),`Add all three exponents: ${p} + ${q} + ${r} = ${p+q+r}.`);}
 /* Quotient rule: take away the exponents, which can give 0 or a negative. */
 for(const [p,q] of [[9,4],[7,2],[10,3],[5,5],[3,7],[2,6],[8,1],[6,9],[12,4],[4,-2]]){const v=V(),e=`${pw(v,p)} ÷ ${pw(v,q)}`;
  put('prodquot',`${e} = ${v}ⁿ. What is n?`,p-q,simp('Same base',e,`${v}ⁿ`),`Dividing powers of the same base takes away the exponents: ${p} - ${q<0?`(${q})`:q} = ${p-q}.`);}
 /* Numbers in front: multiply or divide them, and use the rules on the letters. */
 for(const [c,p,d,q] of [[3,2,4,5],[2,3,5,4],[6,1,2,7],[5,4,3,3],[7,2,2,6]]){const v=V(),e=`(${c}${pw(v,p)})(${d}${pw(v,q)})`;
  put('prodquot',`${e} = k${v}ⁿ. What is k?`,c*d,simp('Numbers and letters',e,`k${v}ⁿ`),`Multiply the numbers: ${c} × ${d} = ${c*d}. The exponents add to ${p+q}, so the answer is ${c*d}${pw(v,p+q)}.`);
  put('prodquot',`${e} = k${v}ⁿ. What is n?`,p+q,simp('Numbers and letters',e,`k${v}ⁿ`),`The numbers give ${c*d}, and the exponents add: ${p} + ${q} = ${p+q}, so the answer is ${c*d}${pw(v,p+q)}.`);}
 for(const [c,p,d,q] of [[12,7,3,2],[20,9,4,3],[18,6,6,5],[15,8,5,4],[24,5,8,1],[30,10,6,4]]){const v=V(),e=`${c}${pw(v,p)} ÷ ${d}${pw(v,q)}`,ask=i%2?'k':'n';
  put('prodquot',`${e} = k${v}ⁿ. What is ${ask}?`,ask==='k'?c/d:p-q,simp('Numbers and letters',e,`k${v}ⁿ`),`Divide the numbers: ${c} ÷ ${d} = ${c/d}. Take away the exponents: ${p} - ${q} = ${p-q}. The answer is ${c/d}${pw(v,p-q)}.`);}
 /* Values: use the rule first, then work out the single power. */
 for(const [b,p,q] of [[2,3,2],[3,2,2],[5,1,2],[10,2,3],[2,4,3]]){const e=`${pw(String(b),p)} · ${pw(String(b),q)}`;
  put('prodquot',`What is the value of ${e}?`,b**(p+q),val('Same base',e),`Add the exponents: ${e} = ${b}${SUP(p+q)} = ${b**(p+q)}.`);}
 for(const [b,p,q] of [[3,7,5],[2,10,6],[5,6,4],[10,8,5],[7,5,3]]){const e=`${b}${SUP(p)} ÷ ${b}${SUP(q)}`;
  put('prodquot',`What is the value of ${e}?`,b**(p-q),val('Same base',e),`Take away the exponents: ${e} = ${b}${SUP(p-q)} = ${b**(p-q)}.`);}
 /* Power of a power: multiply the exponents. */
 for(const [p,q] of [[3,4],[2,5],[5,2],[4,4],[6,3],[2,7],[7,2],[3,3],[-2,3],[4,-1],[10,2],[2,9]]){const v=V(),e=`(${pw(v,p)})${SUP(q)}`;
  put('power',`${e} = ${v}ⁿ. What is n?`,p*q,simp('Power of a power',e,`${v}ⁿ`),`A power of a power multiplies the exponents: ${p} × ${q<0?`(${q})`:q} = ${p*q}.`);}
 /* Power of a product of two letters: every exponent is multiplied. */
 for(const [p,q,r] of [[2,3,4],[1,5,3],[4,2,2],[3,1,5],[2,6,3],[5,3,2]]){const e=`(${pw('x',p)}${pw('y',q)})${SUP(r)}`;
  for(const w of ['x','y'])put('power',`When ${e} is simplified, what is the exponent of ${w}?`,(w==='x'?p:q)*r,simp('Power of a product',e,`x^? y^?`),`Raise each factor: ${w==='x'?p:q} × ${r} = ${(w==='x'?p:q)*r}, so the answer is ${pw('x',p*r)}${pw('y',q*r)}.`);}
 /* Power of a number times a letter: raise the number too. */
 for(const [c,p,q] of [[2,3,4],[3,2,3],[5,4,2],[2,5,5],[10,2,3],[4,3,2]]){const v=V(),e=`(${c}${pw(v,p)})${SUP(q)}`;
  put('power',`${e} = k${v}ⁿ. What is k?`,c**q,simp('Raise every factor',e,`k${v}ⁿ`),`Raise the number: ${c}${SUP(q)} = ${c**q}. The letter gives ${pw(v,p*q)}, so the answer is ${c**q}${pw(v,p*q)}.`);
  put('power',`${e} = k${v}ⁿ. What is n?`,p*q,simp('Raise every factor',e,`k${v}ⁿ`),`Multiply the exponents: ${p} × ${q} = ${p*q}. The number gives ${c}${SUP(q)} = ${c**q}, so the answer is ${c**q}${pw(v,p*q)}.`);}
 /* A power of a power, then the product or quotient rule. */
 for(const [p,q,r,op] of [[2,3,4,'·'],[5,2,3,'÷'],[3,3,1,'·'],[4,2,6,'÷'],[2,5,2,'·'],[3,4,5,'÷'],[2,4,3,'÷'],[6,2,4,'÷']]){const v=V(),e=`(${pw(v,p)})${SUP(q)} ${op} ${pw(v,r)}`,n=op==='·'?p*q+r:p*q-r;
  put('power',`${e} = ${v}ⁿ. What is n?`,n,simp('Two rules',e,`${v}ⁿ`),`First (${pw(v,p)})${SUP(q)} = ${pw(v,p*q)}. Then ${op==='·'?`add: ${p*q} + ${r}`:`take away: ${p*q} - ${r}`} = ${n}.`);}
 for(const [b,p,q] of [[2,2,3],[3,2,2],[2,3,2],[10,2,2],[2,2,4],[2,5,2]]){const e=`(${b}${SUP(p)})${SUP(q)}`;
  put('power',`What is the value of ${e}?`,b**(p*q),val('Power of a power',e),`Multiply the exponents: ${e} = ${b}${SUP(p*q)} = ${b**(p*q)}.`);}
 /* Zero exponents: any nonzero base to the power 0 is 1. */
 for(const b of [7,12,25,1000])put('special',`What is the value of ${b}⁰?`,1,val('The zero exponent',`${b}⁰`),`Any nonzero number to the power 0 is 1.`);
 for(const [c,b] of [[5,4],[9,3],[6,10]])put('special',`What is the value of ${c} · ${b}⁰?`,c*1,val('The zero exponent',`${c} · ${b}⁰`),`${b}⁰ = 1, so ${c} · ${b}⁰ = ${c} · 1 = ${c}.`);
 for(const [a,b] of [[3,8],[15,2]])put('special',`What is the value of ${a}⁰ + ${b}⁰?`,2,val('The zero exponent',`${a}⁰ + ${b}⁰`),`Each power is 1, so ${a}⁰ + ${b}⁰ = 1 + 1 = 2.`);
 /* Negative exponents: b⁻ⁿ = 1/bⁿ, asked as the k in 1/k, or as a decimal. */
 for(const [b,e] of [[2,3],[2,5],[3,2],[3,4],[4,3],[5,2],[10,3],[6,2],[7,2],[2,6],[9,2],[10,4]])
  put('special',`${b}${SUP(-e)} = 1/k. What is k?`,b**e,val('A negative exponent',`${b}${SUP(-e)} = 1/k`),`A negative exponent means one over the power: ${b}${SUP(-e)} = 1/${b}${SUP(e)} = 1/${b**e}.`);
 for(const [b,e] of [[2,1],[2,2],[4,1],[5,1],[10,2],[5,2],[2,3],[10,3],[4,2],[20,1]])
  put('special',`What is ${b}${SUP(-e)} as a decimal?`,1/b**e,val('A negative exponent',`${b}${SUP(-e)}`),`${b}${SUP(-e)} = ${e===1?'':`1/${b}${SUP(e)} = `}1/${b**e} = ${1/b**e}.`);
 /* Fractional exponents: b^(p/q) is the q-th root of b, to the power p, built from perfect powers r^q. */
 const ROOT={2:'square root',3:'cube root',4:'fourth root',5:'fifth root'};
 for(const [r,q,ps] of [[2,2,[1,3]],[2,3,[1,2]],[3,2,[1,3]],[3,3,[1,2]],[4,2,[1,3]],[4,3,[1,2]],[5,2,[1,3]],[5,3,[1,2]],[10,2,[1,3]],[10,3,[1,2]],[2,4,[1,3]],[3,4,[1,3]],[2,5,[1,2,3]]])for(const p of ps){if(gcd(p,q)!==1)continue;const b=r**q,e=`${b}^(${p}/${q})`;
  put('special',`What is the value of ${e}?`,r**p,val('A fractional exponent',e),`The ${ROOT[q]} of ${b} is ${r}, because ${r}${SUP(q)} = ${b}.${p===1?'':` Then ${r}${SUP(p)} = ${r**p}.`}`);}
 for(const [r,q,p] of [[2,3,2],[3,2,3],[4,2,1],[5,3,1],[2,5,3],[10,2,3]]){const b=r**q,e=`${b}^(-${p}/${q})`;
  put('special',`${e} = 1/k. What is k?`,r**p,val('A negative fractional exponent',`${e} = 1/k`),`The minus sign means one over the power: 1/${b}^(${p}/${q}). The ${ROOT[q]} of ${b} is ${r}${p===1?'':`, and ${r}${SUP(p)} = ${r**p}`}, so k = ${r**p}.`);}
 for(const [b,q] of [[7,2],[5,3],[11,2],[6,3]]){const e=`(${b}^(1/${q}))${SUP(q)}`;
  put('special',`What is the value of ${e}?`,b,val('A root, then a power',e),`${b}^(1/${q}) is the ${ROOT[q]} of ${b}, and raising it to the power ${q} undoes the root: (1/${q}) × ${q} = 1, so the value is ${b}.`);}
 /* radicals: simplest radical form, and moving between radicals and rational exponents */
 const pick=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
 for(const [n,k] of [[72,2],[45,5],[50,2],[98,2],[75,3],[128,2]]){const a=Math.sqrt(n/k);
  put('radicals',`Written in simplest form, √${n} = a√${k}. What is a?`,a,val('Simplify a square root',`√${n} = a√${k}`),`${n} = ${a*a} × ${k}, and ${a*a} is a perfect square, so √${n} = √${a*a} × √${k} = ${a}√${k}.`,[]);}
 for(const [n,k] of [[54,2],[250,2],[40,5]]){const a=Math.round(Math.cbrt(n/k));
  put('radicals',`Written in simplest form, ∛${n} = a∛${k}. What is a?`,a,val('Simplify a cube root',`∛${n} = a∛${k}`),`${n} = ${a**3} × ${k}, and ${a**3} is a perfect cube, so ∛${n} = ∛${a**3} × ∛${k} = ${a}∛${k}.`,[]);}
 [['Which is x^(1/2) written as a radical?','√x',['x²','1 ÷ x²'],'A denominator of 2 in the exponent means a square root, so x^(1/2) = √x. The power x² squares instead, and 1 ÷ x² is x⁻².'],['Which is x^(3/2) written as a radical?','√(x³)',['∛(x²)','x³ ÷ 2'],'In x^(m/n) the denominator n names the root and m the power, so x^(3/2) is the square root of x³: √(x³). ∛(x²) swaps them; it is x^(2/3).'],
  ['Which is ∛(x²) written with a rational exponent?','x^(2/3)',['x^(3/2)','x^6'],'A cube root is the power 1/3, so ∛(x²) = (x²)^(1/3) = x^(2 × 1/3) = x^(2/3). x^(3/2) swaps the root and the power.'],['What is √x · √x, for x ≥ 0?','x',['2√x','x²'],'√x · √x = x^(1/2) · x^(1/2) = x^(1/2 + 1/2) = x¹ = x. It is not 2√x, which is √x + √x.']].forEach(([q,right,wrong,why],k)=>{const c=pick(right,wrong,k);
  put('radicals',`${q} ${c.text}. Answer A, B or C.`,c.letter,{t:'setups',title:'Radicals and exponents',head:'',rows:[['x^(1/n)','the nth root of x'],['x^(m/n)','the nth root of x, raised to the m']],cols:['Means']},why||`The answer is ${right}.`,[right]);});
 /* why: rational exponents follow from the rules for whole-number exponents */
 for(const [b,q] of [[5,3],[2,4],[10,2]])put('why',`By the power of a power rule, (${b}^(1/${q}))${SUP(q)} = ${b}^k. What is k?`,1,val('Power of a power',`(${b}^(1/${q}))${SUP(q)}`),`Multiply the exponents: (1/${q}) × ${q} = 1, so (${b}^(1/${q}))${SUP(q)} = ${b}¹ = ${b}. That is why ${b}^(1/${q}) is the ${ROOT[q]} of ${b}.`,[]);
 put('why',`What is the value of (16^(1/4))${SUP(4)}?`,16,val('A root, then a power',`(16^(1/4))${SUP(4)}`),'Multiplying the exponents gives (1/4) × 4 = 1, so the value is 16¹ = 16.',[]);
 [['Why is 5^(1/3) the cube root of 5?','because (5^(1/3))³ = 5^(1/3 × 3) = 5, by the power of a power rule',['because 5 ÷ 3 is about 1.67','because a third of 5 is about 1.67'],'The power of a power rule gives (5^(1/3))³ = 5^(1/3 × 3) = 5¹ = 5. A number whose cube is 5 is the cube root of 5; dividing 5 by 3 is a different thing.'],
  ['Why is 7⁰ equal to 1?','because 7ⁿ ÷ 7ⁿ = 7⁰, and a nonzero number divided by itself is 1',['because 7 × 0 = 0','because 0 is the first exponent'],'The quotient rule gives 7ⁿ ÷ 7ⁿ = 7ⁿ⁻ⁿ = 7⁰, and a nonzero number divided by itself is 1, so 7⁰ = 1. An exponent does not mean 7 × 0.'],
  ['Why is 2⁻³ equal to 1/8?','because 2² ÷ 2⁵ = 2⁻³, and 4 ÷ 32 = 1/8',['because -3 × 2 = -6','because a negative power is a negative number'],'The quotient rule gives 2² ÷ 2⁵ = 2²⁻⁵ = 2⁻³, and 4 ÷ 32 = 1/8. So 2⁻³ = 1/2³ = 1/8: a negative exponent means one over the power, not a negative number.'],
  ['Which rule shows that (x^(1/2))² = x?','the power of a power rule',['the zero exponent rule','the quotient rule'],'A power of a power multiplies the exponents: (1/2) × 2 = 1, so (x^(1/2))² = x¹ = x. That is the power of a power rule.'],
  ['In 8^(2/3), what does the denominator 3 tell you?','which root to take',['which power to raise to','how many times to divide'],'In 8^(2/3) the denominator 3 says take the cube root: ∛8 = 2. The numerator 2 then squares it, so 8^(2/3) = 2² = 4.'],
  ['In 8^(2/3), what does the numerator 2 tell you?','which power to raise to',['which root to take','what to divide by'],'In 8^(2/3) the numerator 2 is the power: after the cube root ∛8 = 2, square it to get 2² = 4. The denominator 3 names the root.']].forEach(([q,right,wrong,why],k)=>{const c=pick(right,wrong,k+1);
  put('why',`${q} ${c.text}. Answer A, B or C.`,c.letter,{t:'setups',title:'Why the rules work',head:'',rows:[['x⁰','x to the n over x to the n'],['x to a negative power','one over the power'],['x^(1/n)','the nth root']],cols:['Comes from']},why||`The answer is ${right}.`,[right]);});
}
};
