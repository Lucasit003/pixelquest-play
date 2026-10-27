// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Multiplying by ten moves every digit up one place. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-times-ten",subject:"math",level:3,grade:3,standard:"CCSS 3.NBT.A.3",
 title:"Multiplying by ten",goal:"Multiplying by ten moves every digit up one place.",points:20,
 skills:{"ten":"Times ten","digits":"What the digits do","back":"Dividing by ten"},
 steps:[
 {skill:"ten",say:"When you multiply a number by ten, each digit moves one place to the left.",pic:[{"t":"blocks","ten":0,"one":3,"count":true}],eq:"3 × 10"},
 {skill:"ten",say:"For example, 3 becomes 30 when you multiply it by ten.",pic:[{"t":"blocks","ten":3,"one":0,"count":true}],eq:"3 × 10 = 30",
  check:{prompt:"What is 4 × 10?",answer:40,options:[40,4,44],hint:"Each digit moves one place to the left.",pic:{"t":"blocks","ten":4,"one":0,"count":true}}},
 {skill:"digits",say:"The digit 3 in 30 is now in the tens place.",pic:[{"t":"blocks","ten":3,"one":0,"count":true}],eq:"30"},
 {skill:"digits",say:"The digit 0 in 30 is in the ones place.",pic:[{"t":"blocks","ten":3,"one":0,"count":true}],eq:"30",
  check:{prompt:"What is the digit in the ones place of 50?",answer:0,options:[0,5,10],hint:"The ones place is now empty.",pic:{"t":"blocks","ten":5,"one":0,"count":true}}},
 {skill:"back",say:"Dividing by ten moves each digit one place to the right.",pic:[{"t":"blocks","ten":3,"one":0,"count":true}],eq:"30 ÷ 10"},
 {skill:"back",say:"For example, 30 becomes 3 when you divide it by ten.",pic:[{"t":"blocks","ten":0,"one":3,"count":true}],eq:"30 ÷ 10 = 3",
  check:{prompt:"What is 60 ÷ 10?",answer:6,options:[6,60,66],hint:"Each digit moves one place to the right.",pic:{"t":"blocks","ten":0,"one":6,"count":true}}}],
 items(add){
  const _SKIP=new Set(["What is 4 × 10?","What is the digit in the ones place of 50?","What is 60 ÷ 10?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["ten","digits"];let _q=0;const _P=[];
for(let a=1;a<=99;a++)for(let b=10;b<=10;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add(_SK[_q++%_SK.length],"What is "+(a)+" × 10?",r,{"t":"blocks","ten":ta,"one":oa,"count":true},"Multiplying by ten moves each digit one place to the left. So "+(a)+" becomes "+(r)+".");}}
{const _SK=["back","digits"];let _q=0;const _P=[];
for(let a=10;a<=990;a++)for(let b=10;b<=10;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add(_SK[_q++%_SK.length],"What is "+(a)+" ÷ 10?",r,{"t":"blocks","ten":ta,"one":oa,"count":true},"Dividing by ten moves each digit one place to the right. So "+(a)+" becomes "+(r)+".");}}
 }};
