// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Take away the ones, then the tens, when every digit is big enough. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-subtract-no-regroup",subject:"math",level:3,grade:2,standard:"CCSS 2.NBT.B.5",
 title:"Subtracting without regrouping",goal:"Take away the ones, then the tens, when every digit is big enough.",points:20,
 skills:{"ones":"Subtract the ones","tens":"Subtract the tens","diff":"Two-digit differences"},
 steps:[
 {skill:"ones",say:"Here is 57: 5 tens and 7 ones.  We are going to take 23 away from it.",pic:[{"t":"blocks","ten":5,"one":7,"count":true}],eq:"57 - 23"},
 {skill:"ones",say:"Subtract the ones first.  57 has 7 ones, and 23 wants 3 of them.  7 - 3 = 4 ones.",pic:[{"t":"blocks","ten":5,"one":4,"count":true}],eq:"7 - 3 = 4",
  check:{prompt:"In 57 - 23, how many ones are left?",answer:4,options:[4,3,5],hint:"7 - 3 = 4",pic:{"t":"blocks","ten":5,"one":7,"count":true}}},
 {skill:"tens",say:"Now subtract the tens.  57 has 5 tens, and 23 wants 2 of them.  5 - 2 = 3 tens.",pic:[{"t":"blocks","ten":3,"one":4,"count":true}],eq:"5 - 2 = 3"},
 {skill:"diff",say:"So the answer is 34.  We took away the ones first, then the tens.",pic:[{"t":"blocks","ten":3,"one":4,"count":true}],eq:"57 - 23 = 34"},
 {skill:"ones",say:"Let's try another one.  Here is 68: 6 tens and 8 ones.  We are going to take 25 away from it.",pic:[{"t":"blocks","ten":6,"one":8,"count":true}],eq:"68 - 25"},
 {skill:"ones",say:"Subtract the ones first.  68 has 8 ones, and 25 wants 5 of them.  8 - 5 = 3 ones.",pic:[{"t":"blocks","ten":6,"one":3,"count":true}],eq:"8 - 5 = 3",
  check:{prompt:"In 68 - 25, how many ones are left?",answer:3,options:[3,2,4],hint:"8 - 5 = 3",pic:{"t":"blocks","ten":6,"one":8,"count":true}}},
 {skill:"tens",say:"Now subtract the tens.  68 has 6 tens, and 25 wants 2 of them.  6 - 2 = 4 tens.",pic:[{"t":"blocks","ten":4,"one":3,"count":true}],eq:"6 - 2 = 4"},
 {skill:"diff",say:"So the answer is 43.  We took away the ones first, then the tens.",pic:[{"t":"blocks","ten":4,"one":3,"count":true}],eq:"68 - 25 = 43",
  check:{prompt:"What is 45 - 30?",answer:15,options:[15,25,5],hint:"Ones first: 5 - 0 = 5. Then tens: 4 - 3 = 1.",pic:{"t":"blocks","ten":4,"one":5,"count":true}}}],
 items(add){
  const _SKIP=new Set(["In 57 - 23, how many ones are left?","In 68 - 25, how many ones are left?","What is 45 - 30?","What is 45 - 30?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=21;a<=98;a++)for(let b=12;b<=79;b++)if(a-b>0&&a%10>=b%10)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r%10;
add("ones","In "+(a)+" - "+(b)+", how many ones are left?",r,{"t":"blocks","ten":ta,"one":oa,"hint":true},"Take the ones: "+(oa)+" - "+(ob)+" = "+(r)+".");}}
{const _P=[];
for(let a=21;a<=98;a++)for(let b=12;b<=79;b++)if(a-b>0&&a%10>=b%10)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=Math.floor(_r/10);
add("tens","In "+(a)+" - "+(b)+", how many tens are left?",r,{"t":"blocks","ten":ta,"one":oa,"hint":true},"Take the tens: "+(ta)+" - "+(tb)+" = "+(r)+".");}}
{const _P=[];
for(let a=21;a<=98;a++)for(let b=12;b<=79;b++)if(a-b>0&&a%10>=b%10)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("diff","What is "+(a)+" - "+(b)+"?",r,{"t":"blocks","ten":ta,"one":oa,"hint":true},"Ones first: "+(oa)+" - "+(ob)+". Then tens: "+(ta)+" - "+(tb)+". So "+(a)+" - "+(b)+" = "+(r)+".");}}
 }};
