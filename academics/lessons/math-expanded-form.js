// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Break a number into its hundreds, tens and ones. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-expanded-form",subject:"math",level:3,grade:2,standard:"CCSS 2.NBT.A.1",
 title:"Expanded form",goal:"Break a number into its hundreds, tens and ones.",points:20,
 skills:{"hundreds":"The hundreds","tens":"The tens","ones":"The ones"},
 steps:[
 {skill:"hundreds",say:"Let's look at the number 345. It has 3 hundreds, 4 tens, and 5 ones.",pic:[{"t":"blocks","ten":4,"one":5,"h":3,"count":true}],eq:"345 = ? + 40 + 5",
  check:{prompt:"What is the 3 in 345 worth?",answer:300,options:[300,3,30],hint:"The 3 is in the hundreds place.",pic:{"t":"blocks","ten":4,"one":5,"h":3}}},
 {skill:"tens",say:"The 4 in 345 is in the tens place. That is 4 tens, or 40.",pic:[{"t":"blocks","ten":4,"one":5,"h":3,"count":true}],eq:"345 = 300 + 40 + 5"},
 {skill:"ones",say:"The 5 in 345 is in the ones place. That is 5 ones, or 5.",pic:[{"t":"blocks","ten":4,"one":5,"h":3,"count":true}],eq:"345 = 300 + 40 + ?",
  check:{prompt:"What is the 5 in 345 worth?",answer:5,options:[5,50,500],hint:"The 5 is in the ones place.",pic:{"t":"blocks","ten":4,"one":5,"h":3}}},
 {skill:"hundreds",say:"Now let's look at another number, 472. It has 4 hundreds, 7 tens, and 2 ones.",pic:[{"t":"blocks","ten":7,"one":2,"h":4,"count":true}],eq:"472 = 400 + 70 + 2"},
 {skill:"tens",say:"The 7 in 472 is in the tens place. That is 7 tens, or 70.",pic:[{"t":"blocks","ten":7,"one":2,"h":4,"count":true}],eq:"472 = 400 + ? + 2",
  check:{prompt:"What is the 7 in 472 worth?",answer:70,options:[70,7,700],hint:"The 7 is in the tens place.",pic:{"t":"blocks","ten":7,"one":2,"h":4}}},
 {skill:"ones",say:"The 2 in 472 is in the ones place. That is 2 ones, or 2.",pic:[{"t":"blocks","ten":7,"one":2,"h":4,"count":true}],eq:"472 = 400 + 70 + 2"}],
 items(add){
  const _SKIP=new Set(["What is the 3 in 345 worth?","What is the 5 in 345 worth?","What is the 7 in 472 worth?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];for(let n=100;n<=499;n++)_P.push(n);
const _n=Math.min(_P.length,128),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],h=Math.floor(n/100)%10,t=Math.floor(n/10)%10,o=n%10,ten=t,one=o,hundred=h,r=Math.floor(n/100)%10*100;
add("hundreds","What is the value of the hundreds digit in "+(n)+"?",r,{"t":"blocks","ten":t,"one":o,"h":h},"The hundreds digit of "+(n)+" is "+(h)+", and it is worth "+(r)+".");}}
{const _P=[];for(let n=100;n<=499;n++)_P.push(n);
const _n=Math.min(_P.length,128),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],h=Math.floor(n/100)%10,t=Math.floor(n/10)%10,o=n%10,ten=t,one=o,hundred=h,r=Math.floor(n/10)%10*10;
add("tens","What is the value of the tens digit in "+(n)+"?",r,{"t":"blocks","ten":t,"one":o,"h":h},"The tens digit of "+(n)+" is "+(t)+", and it is worth "+(r)+".");}}
{const _P=[];for(let n=100;n<=499;n++)_P.push(n);
const _n=Math.min(_P.length,128),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],h=Math.floor(n/100)%10,t=Math.floor(n/10)%10,o=n%10,ten=t,one=o,hundred=h,r=n%10;
add("ones","What is the value of the ones digit in "+(n)+"?",r,{"t":"blocks","ten":t,"one":o,"h":h},"The ones digit of "+(n)+" is "+(o)+", and it is worth "+(r)+".");}}
{const _P=[];for(let n=100;n<=499;n++)_P.push(n);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],h=Math.floor(n/100)%10,t=Math.floor(n/10)%10,o=n%10,ten=t,one=o,hundred=h,r=n%10;
add("ones",""+(n)+" = "+(hundred)+" hundreds + "+(ten)+" tens + how many ones?",r,{"t":"blocks","ten":t,"one":o,"h":h},""+(n)+" is "+(hundred)+" hundreds, "+(ten)+" tens, and "+(one)+" ones.");}}
 }};
