// Middle School topic (Grade 8, CCSS 8.EE.A.1, 8.EE.A.3, 8.EE.A.4): exponent rules and scientific notation.
// Every answer is computed: the exponent rules add, subtract or multiply exponents (checked against the
// actual powers), and scientific notation is found by counting place values of an exact number. Contexts
// are fictional.
const sci=n=>{let e=0,m=n;while(m>=10){m/=10;e++;}while(m<1){m*=10;e--;}return {m:+m.toFixed(6),e};};
const fmt=n=>n.toLocaleString('en-US',{maximumFractionDigits:12});
export default {
id:'math-m-exponents-scientific',subject:'math',level:4,grade:8,standard:'CCSS 8.EE.A.1, 8.EE.A.3, 8.EE.A.4',
title:'Exponents and scientific notation',
goal:'Use the exponent rules to simplify powers, and write very large and very small numbers in scientific notation and back.',
points:20,
skills:{rules:'Exponent rules',toSci:'Writing scientific notation',fromSci:'Reading scientific notation'},
steps:[
 {skill:'rules',say:'An exponent counts how many times a number is multiplied by itself: 2⁴ = 2 × 2 × 2 × 2 = 16. Multiplying powers of the same base adds the exponents: 2³ × 2⁴ = 2⁷.',eq:'2³ × 2⁴ = 2³⁺⁴ = 2⁷',pic:{t:'setups',title:'Powers of 2',head:'',rows:[['2³','2 × 2 × 2','8'],['2⁴','2 × 2 × 2 × 2','16'],['2⁷','8 × 16','128']],cols:['Means','Value']}},
 {skill:'rules',say:'Dividing powers of the same base subtracts the exponents: 5⁶ ÷ 5² = 5⁴. A power of a power multiplies them: (3²)³ = 3⁶.',eq:'(3²)³ = 3²ˣ³ = 3⁶',pic:{t:'setups',title:'Three rules',head:'Rule',rows:[['multiply','add exponents'],['divide','subtract exponents'],['power of a power','multiply exponents']],cols:['What to do']},
  check:{prompt:'Try it: 7⁵ × 7³ = 7 to what power?',answer:8,options:[8,15,2],hint:'Multiplying powers of the same base adds the exponents.',pic:{t:'setups',title:'Same base',head:'',rows:[['7⁵ × 7³','7^?']],cols:['Simplify']}}},
 {skill:'toSci',say:'Scientific notation writes a number as (a number from 1 to 10) × (a power of 10). 45,000 = 4.5 × 10⁴, because the decimal point moves 4 places.',eq:'45,000 = 4.5 × 10⁴',pic:{t:'setups',title:'Moving the point',head:'',rows:[['45,000','4.5 × 10 × 10 × 10 × 10'],['power of 10','4']],cols:['Value']}},
 {skill:'toSci',say:'Small numbers get a negative power: 0.0062 = 6.2 × 10⁻³, because the point moves 3 places to the right.',eq:'0.0062 = 6.2 × 10⁻³',pic:{t:'setups',title:'A small number',head:'',rows:[['0.0062','6.2 ÷ 10 ÷ 10 ÷ 10'],['power of 10','-3']],cols:['Value']},
  check:{prompt:'Try it: written in scientific notation, 3,800,000 = 3.8 × 10 to what power?',answer:6,options:[6,5,7],hint:'Count how many places the point moves from the end of 3,800,000 to after the 3.',pic:{t:'setups',title:'A large number',head:'',rows:[['3,800,000','3.8 × 10^?']],cols:['Value']}}},
 {skill:'fromSci',say:'To read scientific notation, move the point the other way. 2.7 × 10³ = 2,700, and 5 × 10⁻² = 0.05.',eq:'2.7 × 10³ = 2,700',pic:{t:'setups',title:'Back to ordinary numbers',head:'',rows:[['2.7 × 10³','2,700'],['5 × 10⁻²','0.05']],cols:['Value']}},
 {skill:'fromSci',say:'To compare numbers in scientific notation, compare the powers of 10 first: 9 × 10³ is smaller than 1 × 10⁴, because 9,000 is less than 10,000.',pic:{t:'setups',title:'Compare the powers first',head:'',rows:[['9 × 10³','9,000'],['1 × 10⁴','10,000']],cols:['Value']},
  check:{prompt:'Try it: what is 6.1 × 10⁴ written as an ordinary number? Type it without commas or with them.',answer:61000,options:[61000,6100,610000],hint:'Move the point 4 places to the right.',pic:{t:'setups',title:'Scientific notation',head:'',rows:[['6.1 × 10⁴','?']],cols:['Value']}}}],
progression:{requires:['math-m-expressions-equations'],operations:2,demand:'Add, subtract or multiply exponents of one base, and move the decimal point by a power of 10 in either direction.'},
items(add){
 const SUP=n=>String(n).split('').map(ch=>({'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'}[ch])).join('');
 /* Exponent rules: the answer is the exponent. */
 for(const base of [2,3,5,7,10])for(const [p,q] of [[3,4],[5,2],[6,3],[2,7],[4,4]]){
  add('rules',`${base}${SUP(p)} × ${base}${SUP(q)} = ${base} to what power?`,p+q,{t:'setups',title:'Same base',head:'',rows:[[`${base}${SUP(p)} × ${base}${SUP(q)}`,`${base}^?`]],cols:['Simplify']},`Multiplying adds the exponents: ${p} + ${q} = ${p+q}.`);
  if(p!==q)add('rules',`${base}${SUP(Math.max(p,q)+2)} ÷ ${base}${SUP(Math.min(p,q))} = ${base} to what power?`,Math.max(p,q)+2-Math.min(p,q),{t:'setups',title:'Same base',head:'',rows:[[`${base}${SUP(Math.max(p,q)+2)} ÷ ${base}${SUP(Math.min(p,q))}`,`${base}^?`]],cols:['Simplify']},`Dividing subtracts the exponents: ${Math.max(p,q)+2} - ${Math.min(p,q)} = ${Math.max(p,q)+2-Math.min(p,q)}.`);
  add('rules',`(${base}${SUP(p)})${SUP(q)} = ${base} to what power?`,p*q,{t:'setups',title:'Power of a power',head:'',rows:[[`(${base}${SUP(p)})${SUP(q)}`,`${base}^?`]],cols:['Simplify']},`A power of a power multiplies the exponents: ${p} × ${q} = ${p*q}.`);}
 /* Writing numbers in scientific notation: the power of 10. */
 const BIG=[45000,3800000,720,9100000000,56000,230000000,6400,180000,7020000,15000000000,830,4400000];
 const SMALL=[0.0062,0.00045,0.031,0.0000072,0.0089,0.00056,0.27,0.0000041,0.0013,0.064];
 for(const n of [...BIG,...SMALL]){const {m,e}=sci(n);
  add('toSci',`Written in scientific notation, ${fmt(n)} = ${m} × 10 to what power?`,e,{t:'setups',title:'Scientific notation',head:'',rows:[[fmt(n),`${m} × 10^?`]],cols:['Value']},`The point moves ${Math.abs(e)} place${Math.abs(e)===1?'':'s'} ${e>0?'left':'right'}, so ${fmt(n)} = ${m} × 10${SUP(e)}.`);
  /* A small number is graded exactly as written (the numeric grader allows ±0.01, far too loose for 0.0062). */
  add('fromSci',`What is ${m} × 10${SUP(e)} written as an ordinary number?`,n<1?String(n):n,{t:'setups',title:'Scientific notation',head:'',rows:[[`${m} × 10${SUP(e)}`,'?']],cols:['Value']},`Move the point ${Math.abs(e)} place${Math.abs(e)===1?'':'s'} ${e>0?'right':'left'}: ${fmt(n)}.`,n<1?[String(n).replace(/^0/,'')]:[fmt(n)]);}
 /* Comparing two numbers in scientific notation: which is larger. */
 const PAIRS=[[[9,3],[1,4]],[[2.5,6],[8,5]],[[4,-3],[3,-2]],[[7.2,8],[7.2,9]],[[1.1,5],[9.9,4]],[[6,-4],[5,-4]],[[3.3,7],[3.1,7]],[[8,2],[2,3]],[[5.5,-1],[5.5,-2]],[[1,10],[9,9]],[[4.4,3],[4,4]],[[2,-5],[1,-4]]];
 PAIRS.forEach(([[a,x],[b,y]],i)=>{const va=a*10**x,vb=b*10**y,big=va>vb?'A':'B';
  add('fromSci',`Which is larger: A = ${a} × 10${SUP(x)} or B = ${b} × 10${SUP(y)}? Answer A or B.`,big,{t:'setups',title:'Compare',head:'',rows:[['A',`${a} × 10${SUP(x)}`],['B',`${b} × 10${SUP(y)}`]],cols:['Number']},x!==y?`Compare the powers of 10 first: 10${SUP(Math.max(x,y))} is bigger, so ${big} is larger.`:`The powers are equal, so compare ${a} and ${b}: ${big} is larger.`,[big.toLowerCase()]);});
}
};
