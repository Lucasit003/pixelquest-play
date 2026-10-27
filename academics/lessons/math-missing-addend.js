// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Work backwards from the total to the number that is missing. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-missing-addend",subject:"math",level:3,grade:2,standard:"CCSS 1.OA.D.8",
 title:"Finding the missing number",goal:"Work backwards from the total to the number that is missing.",points:20,
 skills:{"back":"Working backwards","check":"Checking by adding","missing":"The missing number"},
 steps:[
 {skill:"back",say:"Here is a problem: 5 + ? = 8. We need to find the missing number.",pic:[{"t":"line","max":20,"from":5,"jumps":0,"hop":5,"mark":8}],eq:"5 + ? = 8"},
 {skill:"back",say:"To find the missing number, we start from the total and count backwards.",pic:[{"t":"line","max":20,"from":8,"back":true,"jumps":1,"hop":5}],eq:"8 - 5 = ?",
  check:{prompt:"What is the missing number in 7 + ? = 10?",answer:3,options:[3,2,4,5],hint:"Start at 10 and count back 7: 9, 8, 7, 6, 5, 4, 3. We land on 3, so the missing number is 3.",pic:{"t":"line","max":20,"from":10,"back":true,"jumps":1,"hop":7,"mark":3}}},
 {skill:"back",say:"Start at 8 and count back 5: 7, 6, 5, 4, 3. We land on 3, so the missing number is 3.",pic:[{"t":"line","max":20,"from":8,"back":true,"jumps":1,"hop":5,"mark":3,"solve":true}],eq:"8 - 5 = 3"},
 {skill:"check",say:"To check, we add the missing number back to the first number: 5 + 3 = 8.",pic:[{"t":"line","max":20,"from":5,"jumps":1,"hop":3,"mark":8,"solve":true}],eq:"5 + 3 = 8",
  check:{prompt:"Check: What is 7 + 3?",answer:10,options:[10,9,11,12],hint:"Add the missing number back to the first number: 7 + 3 = 10.",pic:{"t":"line","max":20,"from":7,"jumps":1,"hop":3,"mark":10}}},
 {skill:"missing",say:"So, the missing number in 5 + ? = 8 is 3.",pic:[{"t":"line","max":20,"from":5,"jumps":1,"hop":3,"mark":8,"solve":true}],eq:"5 + 3 = 8"},
 {skill:"missing",say:"Remember, to find the missing number, work backwards from the total.",pic:[{"t":"line","max":20,"from":8,"back":true,"jumps":1,"hop":5,"mark":3}],eq:"5 + ? = 8",
  check:{prompt:"What is the missing number in 6 + ? = 11?",answer:5,options:[5,4,6,7],hint:"Work backwards from the total: 11 - 6 = 5.",pic:{"t":"line","max":20,"from":11,"back":true,"jumps":1,"hop":6,"mark":5}}}],
 items(add){
  const _SKIP=new Set(["What is the missing number in 7 + ? = 10?","Check: What is 7 + 3?","What is the missing number in 6 + ? = 11?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=1;a<=10;a++)for(let b=1;b<=10;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=b;
add("missing",""+(a)+" + ? = "+(total)+". What is the missing number?",r,{"t":"line","max":20,"from":total,"back":true,"jumps":1,"hop":a},"Work backwards from the total: "+(total)+" - "+(a)+" = "+(r)+". Check: "+(a)+" + "+(r)+" = "+(total)+".");}}
{const _P=[];
for(let a=1;a<=10;a++)for(let b=1;b<=10;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("check","Check: What is "+(a)+" + "+(b)+"?",r,{"t":"line","max":20,"from":a,"jumps":1,"hop":b},"Add the two numbers: "+(a)+" + "+(b)+" = "+(r)+". If "+(a)+" + ? = "+(r)+", this shows the missing number is "+(b)+".");}}
{const _P=[];
for(let a=1;a<=10;a++)for(let b=1;b<=10;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=b;
add("back","What is the missing number in "+(a)+" + ? = "+(total)+"?",r,{"t":"line","max":20,"from":total,"back":true,"jumps":1,"hop":a},"Work backwards from the total: "+(total)+" - "+(a)+" = "+(r)+". Check: "+(a)+" + "+(r)+" = "+(total)+".");}}
 }};
