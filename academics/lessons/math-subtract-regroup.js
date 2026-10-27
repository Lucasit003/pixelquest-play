// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Trade a ten for ten ones when there are not enough ones, then subtract. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-subtract-regroup",subject:"math",level:3,grade:2,standard:"CCSS 2.NBT.B.5",
 title:"Subtracting with regrouping",goal:"Trade a ten for ten ones when there are not enough ones, then subtract.",points:20,
 skills:{"ones":"Ones after the trade","trade":"Tens after the trade","diff":"Two-digit differences"},
 steps:[
 {skill:"ones",say:"Here is 52: 5 tens and 2 ones. We are going to take 27 away from it.",pic:[{"t":"blocks","ten":5,"one":2,"count":true}],eq:"52 - 27"},
 {skill:"ones",say:"Subtract the ones first. 52 has only 2 ones, and 27 wants 7 of them, so there are not enough.",pic:[{"t":"blocks","ten":5,"one":2,"count":true}],eq:"2 ones: not enough to take away 7 ones",
  check:{prompt:"Ben works out 43 - 18. Are 3 ones enough to take 8 ones away?",answer:"no",options:["no","yes"],hint:"Count: 3 is smaller than 8.",pic:{"t":"blocks","ten":4,"one":3,"count":true}}},
 {skill:"trade",say:"So trade one of the tens for ten ones. The 5 tens become 4 tens, and the 2 ones become 12 ones.",pic:[{"t":"blocks","ten":5,"one":2,"regroup":"split"}],dur:3.5},
 {skill:"trade",say:"Now there are enough ones. 12 ones take away 7 ones leaves 5 ones.",pic:[{"t":"blocks","ten":4,"one":12,"count":true}],eq:"12 - 7 = 5",
  check:{prompt:"Mia trades a ten in 61 - 24. How many ones does she have after the trade?",answer:11,options:[11,10,1],hint:"The 1 one gains ten more ones.",pic:{"t":"blocks","ten":6,"one":1,"regroup":"split"}}},
 {skill:"diff",say:"Then subtract the tens. 4 tens take away 2 tens leaves 2 tens, so the answer is 25.",pic:[{"t":"blocks","ten":2,"one":5,"count":true}],eq:"52 - 27 = 25",
  check:{prompt:"What is 74 - 36?",answer:38,options:[38,42,48],hint:"Trade a ten: 14 - 6 = 8 ones, then 6 tens - 3 tens = 3 tens.",pic:{"t":"blocks","ten":3,"one":8,"count":true}}},
 {skill:"diff",say:"Ones first, trade a ten when there are not enough, then the tens. That is subtracting with regrouping.",pic:[{"t":"blocks","ten":2,"one":5,"count":true}]}],
 items(add){
  const _SKIP=new Set(["Ben works out 43 - 18. Are 3 ones enough to take 8 ones away?","Mia trades a ten in 61 - 24. How many ones does she have after the trade?","What is 74 - 36?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=21;a<=98;a++)for(let b=12;b<=79;b++)if(a-b>0&&a%10<b%10)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("diff","What is "+(a)+" - "+(b)+"?",r,{"t":"blocks","ten":ta,"one":oa,"hint":true},""+(oa)+" is smaller than "+(ob)+", so trade a ten: "+(a)+" becomes "+(ta-1)+" tens and "+(oa+10)+" ones. Take "+(ob)+" ones away, then take "+(tb)+" tens away. "+(a)+" - "+(b)+" = "+(r)+".");}}
{const _P=[];
for(let a=21;a<=98;a++)for(let b=12;b<=79;b++)if(a-b>0&&a%10<b%10)_P.push([a,b]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=oa+10;
add("ones","In "+(a)+" - "+(b)+" you trade one ten for ten ones. How many ones does "+(a)+" have then?",r,{"t":"blocks","ten":ta,"one":oa,"regroup":"split","hint":true},""+(a)+" has "+(oa)+" in the ones place. Ten more ones from the traded ten makes "+(r)+".");}}
{const _P=[];
for(let a=21;a<=98;a++)for(let b=12;b<=79;b++)if(a-b>0&&a%10<b%10)_P.push([a,b]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=ta-1;
add("trade","In "+(a)+" - "+(b)+" you trade one ten for ten ones. How many tens are left in "+(a)+" after the trade?",r,{"t":"blocks","ten":ta,"one":oa,"regroup":"split","hint":true},""+(a)+" has "+(ta)+" tens. Trading one of them away leaves "+(r)+".");}}
 }};
