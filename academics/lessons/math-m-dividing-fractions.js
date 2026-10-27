// Middle School topic (Grade 6, CCSS 6.NS.A.1): dividing fractions. Every answer is computed with exact
// integer arithmetic on numerators and denominators: a/b ÷ c/d = (a×d)/(b×c), reduced by the greatest
// common divisor. A whole-number answer is a number; a fraction answer is written in lowest terms and
// also accepts its mixed-number form and, when it is exact to three places, its decimal. Contexts are fictional.
const gcd=(a,b)=>b?gcd(b,a%b):a;
const reduce=(n,d)=>{const g=gcd(n,d);return [n/g,d/g];};
/* The answer value and the other ways a child may type it. */
const ans=(n,d)=>{[n,d]=reduce(n,d);if(d===1)return {a:n,acc:[]};const acc=[];if(n>d)acc.push(`${Math.floor(n/d)} ${n%d}/${d}`);if((n*1000)%d===0)acc.push(String(n*1000/d/1000));return {a:`${n}/${d}`,acc};};
const f=(n,d)=>`${n}/${d}`;
export default {
id:'math-m-dividing-fractions',subject:'math',level:4,grade:6,standard:'CCSS 6.NS.A.1',
title:'Dividing fractions',
goal:'Divide a whole number or a fraction by a fraction by asking how many pieces fit, and share a fraction equally.',
points:20,
skills:{whole:'How many pieces fit',frac:'A fraction divided by a fraction',share:'Sharing a fraction equally'},
steps:[
 {skill:'whole',say:'Dividing by a fraction asks how many of those pieces fit. 3 ÷ 1/4 asks how many quarter pieces fit in 3 wholes. Each whole holds 4 quarters, so 3 wholes hold 12.',eq:'3 ÷ 1/4 = 12',pic:{t:'fit',total:[3,1],piece:[1,4],solve:true}},
 {skill:'whole',say:'When a piece is more than one part, group the parts. 2 ÷ 2/3: two wholes make six thirds, and six thirds make three pieces of 2/3.',eq:'2 ÷ 2/3 = 3',pic:{t:'fit',total:[2,1],piece:[2,3],solve:true},
  check:{prompt:'Try it: how many 1/3-cup scoops of flour are in 4 cups of flour?',answer:12,options:[12,7,1],hint:'Each cup holds 3 scoops of 1/3 cup, and there are 4 cups.',pic:{t:'fit',total:[4,1],piece:[1,3],unit:'cups'}}},
 {skill:'frac',say:'To divide by a fraction, multiply by its reciprocal, the fraction turned upside down. 3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6.',eq:'3/4 ÷ 1/8 = 3/4 × 8 = 6',pic:{t:'fit',total:[3,4],piece:[1,8],solve:true}},
 {skill:'frac',say:'Check a quotient by multiplying back: 6 pieces of 1/8 make 6/8, which is 3/4. If quotient × divisor gives the number you started with, the division is right.',eq:'6 × 1/8 = 6/8 = 3/4',pic:{t:'fit',total:[3,4],piece:[1,8],solve:true},
  check:{prompt:'Try it: what is 2/3 ÷ 1/6?',answer:4,options:[4,'1/9',3],hint:'Multiply 2/3 by 6/1, the reciprocal of 1/6.',pic:{t:'fit',total:[2,3],piece:[1,6]}}},
 {skill:'share',say:'Dividing a fraction by a whole number shares it equally. 2/3 of a pan of cornbread shared by 4 friends is 2/3 ÷ 4 = 2/3 × 1/4 = 2/12 = 1/6 of the pan each.',eq:'2/3 ÷ 4 = 1/6',pic:{t:'fit',total:[2,3],share:4,solve:true}},
 {skill:'share',say:'Each share is a fraction of the whole pan, not of the piece that was left. The answer is 1/6 of the pan, not 1/4.',eq:'1/6 of the whole pan',pic:{t:'fit',total:[2,3],share:4,solve:true},
  check:{prompt:'Try it: 3/4 of a pizza is shared equally among 3 friends. What fraction of the whole pizza does each friend get?',answer:'1/4',options:['1/4','1/3','9/4'],hint:'Divide 3/4 by 3: multiply 3/4 by 1/3.',pic:{t:'fit',total:[3,4],share:3}}}],
progression:{requires:['math-e-add-unlike-fractions','math-e-equivalent-fractions'],operations:2,demand:'Read division as "how many fit" or "share equally", multiply by the reciprocal, and give the answer in lowest terms.'},
items(add){
 /* How many fit: a whole number divided by a fraction, only where a whole number of pieces fits. */
 const FIT=[(w,p)=>`How many ${p}-cup scoops are in ${w} cups of rice?`,(w,p)=>`A ${w}-metre ribbon is cut into pieces ${p} m long. How many pieces are there?`,(w,p)=>`How many ${p}-hour practice sessions fit into ${w} hours?`,(w,p)=>`What is ${w} ÷ ${p}?`];
 let k=0;
 for(let b=2;b<=8;b++)for(let a=1;a<b;a++){if(gcd(a,b)!==1)continue;for(let w=1;w<=6;w++){if((w*b)%a)continue;if(a===1&&w===1)continue;const n=w*b/a,p=f(a,b);
  add('whole',FIT[k++%FIT.length](w,p),n,{t:'fit',total:[w,1],piece:[a,b],hint:true},`${w} ÷ ${p} = ${w} × ${b}/${a} = ${n}: ${n} pieces of ${p} fit in ${w}.`);}}
 /* A fraction divided by a fraction, reduced. */
 const seen=new Set();let j=0;
 for(const [a,b] of [[1,2],[3,4],[2,3],[5,6],[3,8],[7,8],[2,5],[4,5],[9,10],[5,8],[1,3],[3,5]])for(const [c,d] of [[1,4],[1,6],[1,8],[2,3],[3,4],[1,2],[3,10],[2,5],[1,12],[5,6]]){
  const [n,dd]=reduce(a*d,b*c);if(dd>12||n/dd>12||(a===c&&b===d))continue;const key=`${a}/${b}:${c}/${d}`;if(seen.has(key))continue;seen.add(key);
  const r=ans(a*d,b*c),pic={t:'fit',total:[a,b],piece:[c,d],hint:true};
  if(j++%3===2&&dd===1)add('frac',`A fictional bag holds ${f(a,b)} kg of seed. Each scoop holds ${f(c,d)} kg. How many scoops does the bag fill?`,r.a,pic,`${f(a,b)} ÷ ${f(c,d)} = ${f(a,b)} × ${d}/${c} = ${f(a*d,b*c)} = ${r.a}.`,r.acc);
  else add('frac',`What is ${f(a,b)} ÷ ${f(c,d)}? Give a fraction in lowest terms or a whole number.`,r.a,pic,`${f(a,b)} ÷ ${f(c,d)} = ${f(a,b)} × ${d}/${c} = ${f(a*d,b*c)} = ${r.a}.`,r.acc);}
 /* Sharing a fraction equally: a fraction divided by a whole number. */
 const FOOD=[['pizza','friends'],['pan of cornbread','friends'],['bag of rice','jars'],['litre of juice','cups'],['loaf of bread','plates']];
 let i=0;
 for(const [a,b] of [[1,2],[2,3],[3,4],[1,3],[3,5],[4,5],[5,6],[2,5],[5,8],[7,8],[3,10],[1,4]])for(const n of [2,3,4,5,6]){if(b*n>48)continue;const [food,whom]=FOOD[i++%FOOD.length],r=ans(a,b*n);
  add('share',`${f(a,b)} of a ${food} is shared equally among ${n} ${whom}. What fraction of the whole ${food} does each ${whom.replace(/s$/,'')} get?`,r.a,{t:'fit',total:[a,b],share:n,hint:true},`${f(a,b)} ÷ ${n} = ${f(a,b)} × 1/${n} = ${f(a,b*n)} = ${r.a} of the whole ${food}.`,r.acc);}
}
};
