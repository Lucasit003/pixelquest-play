// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Look at the ones to decide which ten a number is closest to. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-round-to-ten",subject:"math",level:3,grade:3,standard:"CCSS 3.NBT.A.1",
 title:"Rounding to the nearest ten",goal:"Look at the ones to decide which ten a number is closest to.",points:20,
 skills:{"look":"Looking at the ones","near":"The nearer ten","round":"Rounding"},
 steps:[
 {skill:"look",say:"Let's look at the number 37.  The ones digit is 7.",pic:[{"t":"blocks","ten":3,"one":7,"count":true}],eq:"37"},
 {skill:"look",say:"If the ones digit is 5 or more, we round up to the next ten.  If it's less than 5, we round down to the current ten.",pic:[{"t":"blocks","ten":3,"one":7,"count":true}],eq:"37"},
 {skill:"near",say:"For 37, the ones digit is 7, which is more than 5.  So, we round up to 40.",pic:[{"t":"blocks","ten":4,"one":0,"count":true}],eq:"37 rounds to 40",
  check:{"prompt":"Round 68 to the nearest ten. Which ten is it closest to?","answer":70,"options":[70,60,75],"hint":"The ones digit is 8, so round up.","pic":{"t":"blocks","ten":6,"one":8}}},
 {skill:"near",say:"Let's try another number, 23.  The ones digit is 3, which is less than 5.  So, we round down to 20.",pic:[{"t":"blocks","ten":2,"one":3,"count":true}],eq:"23 rounds to 20",
  check:{"prompt":"Round 41 to the nearest ten. Which ten is it closest to?","answer":40,"options":[40,50,45],"hint":"The ones digit is 1, so round down.","pic":{"t":"blocks","ten":4,"one":1}}},
 {skill:"round",say:"To round 48 to the nearest ten, look at the ones digit.  It's 8, so we round up to 50.",pic:[{"t":"blocks","ten":4,"one":8,"count":true}],eq:"48 rounds to 50"},
 {skill:"round",say:"Finally, let's round 55 to the nearest ten.  The ones digit is 5, so we round up to 60.",pic:[{"t":"blocks","ten":5,"one":5,"count":true}],eq:"55 rounds to 60",
  check:{"prompt":"Round 85 to the nearest ten. Which ten is it closest to?","answer":90,"options":[90,80,95],"hint":"The ones digit is 5, so round up.","pic":{"t":"blocks","ten":8,"one":5}}}],
 items(add){
  const _SKIP=new Set(["Round 37 to the nearest ten.","Round 23 to the nearest ten.","Round 55 to the nearest ten."]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["look","near","round"];let _q=0;const _P=[];for(let n=11;n<=99;n++)_P.push(n);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],h=Math.floor(n/100)%10,t=Math.floor(n/10)%10,o=n%10,ten=t,one=o,hundred=h,r=Math.round(n/10)*10;
add(_SK[_q++%_SK.length],"Round "+(n)+" to the nearest ten.",r,{"t":"blocks","ten":t,"one":o,"count":true},"The ones digit of "+(n)+" is "+(o)+". 5 or more rounds up, less than 5 rounds down, so "+(n)+" rounds to "+(r)+".");}}
{const _SK=["look","near","round"];let _q=0;const _P=[];for(let n=11;n<=99;n++)_P.push(n);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],h=Math.floor(n/100)%10,t=Math.floor(n/10)%10,o=n%10,ten=t,one=o,hundred=h,r=n%10;
add(_SK[_q++%_SK.length],"What is the ones digit in "+(n)+"?",r,{"t":"blocks","ten":t,"one":o,"count":true},"The ones digit in "+(n)+" is "+(o)+".");}}
 }};
