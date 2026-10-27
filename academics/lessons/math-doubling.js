// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Doubling is adding a number to itself. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-doubling",subject:"math",level:3,grade:2,standard:"CCSS 2.OA.B.2, 2.NBT.B.5",
 title:"Doubling",goal:"Doubling is adding a number to itself.",points:20,
 skills:{"double":"Doubling","half":"Halving","facts":"Double facts"},
 steps:[
 {skill:"double",say:"Doubling means adding a number to itself. For example, 3 + 3 is 6.",pic:[{"t":"array","r":2,"c":3}],eq:"3 + 3 = 6",
  check:{prompt:"What is 5 doubled?",answer:10,options:[10,9,11,12],hint:"Double means adding the number to itself.",pic:{"t":"array","r":2,"c":5}}},
 {skill:"double",say:"Let's double 4. That means 4 + 4, which equals 8.",pic:[{"t":"array","r":2,"c":4}],eq:"4 + 4 = 8"},
 {skill:"half",say:"Halving is the opposite of doubling. If we have 8, halving means splitting it into 2 equal groups, which gives 4 in each group.",pic:[{"t":"array","r":2,"c":4}],eq:"4 + 4 = 8, so half of 8 is 4",
  check:{prompt:"What is half of 6?",answer:3,options:[3,2,4,6],hint:"Halving means splitting into two equal parts.",pic:{"t":"array","r":2,"c":3}}},
 {skill:"half",say:"Now, let's halve 10. Split 10 into 2 equal groups. Each group has 5.",pic:[{"t":"array","r":2,"c":5}],eq:"5 + 5 = 10, so half of 10 is 5"},
 {skill:"facts",say:"5 doubled is 10. So half of 10 is 5. Doubling and halving undo each other.",pic:[{"t":"array","r":2,"c":5}],eq:"5 + 5 = 10",
  check:{prompt:"Doubling a number gives 14. What was the number?",answer:7,options:[7,6,8,12],hint:"What number added to itself makes 14? Count one row of dots.",pic:{"t":"array","r":2,"c":7}}},
 {skill:"facts",say:"6 doubled is 12. So half of 12 is 6.",pic:[{"t":"array","r":2,"c":6}],eq:"6 + 6 = 12"}],
 items(add){
  const _SKIP=new Set(["What is 5 doubled?","What is half of 6?","Doubling a number gives 14. What was the number?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=2;a<=2;a++)for(let b=1;b<=50;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("double","What is double "+(b)+"?",r,{"t":"array","r":2,"c":b},"Doubling "+(b)+" means adding "+(b)+" to itself, which gives "+(r)+".");}}
{const _P=[];
for(let a=2;a<=20;a++)for(let b=2;b<=2;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("half","What is half of "+(a)+"?",r,{"t":"array","r":2,"c":r},"Half of "+(a)+" is "+(r)+", because "+(r)+" + "+(r)+" = "+(a)+".");}}
{const _P=[];
for(let a=2;a<=2;a++)for(let b=1;b<=50;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=b;
add("facts","Doubling a number gives "+(total)+". What was the number?",r,{"t":"array","r":2,"c":b},"Half of "+(total)+" is "+(b)+", so doubling "+(b)+" gives "+(total)+".");}}
 }};
