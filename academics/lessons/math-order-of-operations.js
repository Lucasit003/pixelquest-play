// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Multiply and divide before you add and subtract, unless brackets say otherwise. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
/* 25 Oct (learning-loop playtest): a fixed stride that divides an inner loop's length only ever picked some of its values (every "x 2" or "x 6", never "x 7"). The stride picks stay exactly as they were, and half as many again are added, drawn by a fixed-seed hash (the same items every load) so every value turns up. */
const _spread=(L,s,n)=>{const o=[];for(let i=0;i<L;i+=s)o.push(i);const seen=new Set(o),want=o.length+Math.ceil(n/2);let h=2654435761;for(let k=1;o.length<want&&k<=8*L;k++){h=Math.imul(h^h>>>15,2246822519)+k>>>0;const i=h%L;if(!seen.has(i)){seen.add(i);o.push(i);}}return o;};
export default {
 id:"math-e-order-of-operations",subject:"math",level:3,grade:5,standard:"CCSS 5.OA.A.1",
 title:"Which part comes first",goal:"Multiply and divide before you add and subtract, unless brackets say otherwise.",points:20,
 skills:{"rule":"The order rule","brackets":"Brackets first","slip":"The common slip"},
 steps:[
 {skill:"rule",say:"In 2 + 3 x 4, the multiplying is done first.  That gives 2 + 12, which is 14.",pic:[{"t":"word","base":"2 + 3 x 4"}],eq:"2 + 3 x 4 = 14",
  check:{"prompt":"Work it out in the right order: what is 5 + 2 x 3?","answer":11,"options":[11,21,10,30],"hint":"Do the multiplying first: 2 x 3 is 6.","pic":{"t":"word","base":"5 + 2 x 3"}}},
 {skill:"slip",say:"Working left to right instead gives 5 x 4, which is 20.  That is the usual slip, and it is wrong.",pic:[{"t":"word","base":"not 20"}],eq:"(2 + 3) x 4 = 20, a different sum"},
 {skill:"rule",say:"So the rule is: multiply and divide first, then add and subtract.",pic:[{"t":"word","base":"x and / first"}],eq:"10 - 2 x 3 = 4",
  check:{prompt:"What is 10 - 2 x 3?",answer:4,options:[4,24,30,11],hint:"Multiply before you take away.",pic:{"t":"word","base":"10 - 2 x 3"}}},
 {skill:"brackets",say:"Brackets beat the rule.  Anything inside them is done first.",pic:[{"t":"word","base":"(2 + 3) x 4"}],eq:"(2 + 3) x 4 = 20",
  check:{prompt:"What is (2 + 3) x 4?",answer:20,options:[20,14,9,24],hint:"The brackets go first.",pic:{"t":"word","base":"(2 + 3) x 4"}}},
 {skill:"brackets",say:"That is how you write the other meaning on purpose.",pic:[{"t":"word","base":"brackets first"}],eq:"(6 + 4) x 2 = 20"},
 {skill:"rule",say:"Look for brackets, then multiplying and dividing, then adding and taking away.",pic:[{"t":"word","base":"order"}]}],
 items(add){
  const _SKIP=new Set(["What is 2 + 3 x 4?","What is 10 - 2 x 3?","What is (2 + 3) x 4?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=9;b++)for(let c=2;c<=9;c++)if(true&&a+b*c!==(a+b)*c)_P.push([a,b,c]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b,c]=_P[_i],r=a+b*c,slip=(a+b)*c;
add("rule","What is "+(a)+" + "+(b)+" x "+(c)+"?",r,{"t":"word","base":""+(a)+" + "+(b)+" x "+(c)+""},"Multiply first: "+(b)+" x "+(c)+", then add "+(a)+". That gives "+(r)+", not "+(slip)+".");}}
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=9;b++)for(let c=2;c<=9;c++)if(a-b*c>0&&a-b*c!==(a-b)*c)_P.push([a,b,c]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c]=_P[_i],r=a-b*c,slip=(a-b)*c;
add("slip","What is "+(a)+" - "+(b)+" x "+(c)+"?",r,{"t":"word","base":""+(a)+" - "+(b)+" x "+(c)+""},"Multiply first: "+(b)+" x "+(c)+", then take it from "+(a)+". That gives "+(r)+", not "+(slip)+".");}}
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=9;b++)for(let c=2;c<=9;c++)if(true&&(a+b)*c!==a+b*c)_P.push([a,b,c]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b,c]=_P[_i],r=(a+b)*c,slip=a+b*c;
add("brackets","What is ("+(a)+" + "+(b)+") x "+(c)+"?",r,{"t":"word","base":"("+(a)+" + "+(b)+") x "+(c)+""},"The brackets go first: "+(a)+" + "+(b)+", then times "+(c)+". That gives "+(r)+", not "+(slip)+".");}}
 }};
