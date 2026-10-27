// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Compare two numbers by looking at the tens first, then the ones. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-compare-numbers",subject:"math",level:3,grade:2,standard:"CCSS 2.NBT.A.4",
 title:"Comparing numbers",goal:"Compare two numbers by looking at the tens first, then the ones.",points:20,
 skills:{"tens":"Compare the tens","ones":"Compare the ones","symbols":"Using > < and ="},
 steps:[
 {skill:"tens",say:"Let's compare 34 and 52.  First, look at the tens.",pic:[{"t":"blocks","ten":3,"one":4}],eq:"34"},
 {skill:"tens",say:"52 has more tens than 34.  So, 52 is greater than 34.",pic:[{"t":"blocks","ten":5,"one":2}],eq:"52",
  check:{prompt:"Which number has the most tens: 52, 34 or 45?",answer:"52",options:["52","34","45"],hint:"Count the tens: 52 has 5 tens, and 34 has 3 tens.",pic:{"t":"blocks","ten":5,"one":2}}},
 {skill:"ones",say:"If the tens were the same, we would look at the ones.  But they're not, so we're done.",pic:[{"t":"blocks","ten":3,"one":4}],eq:"34"},
 {skill:"symbols",say:"Since 52 is greater than 34, we use the > symbol.",pic:[{"t":"blocks","ten":5,"one":2}],eq:"52 > 34"},
 {skill:"tens",say:"Now let's compare 45 and 42.  First, look at the tens.",pic:[{"t":"blocks","ten":4,"one":5}],eq:"45",
  check:{prompt:"Which number has the most ones: 45, 42 or 23?",answer:"45",options:["45","42","23"],hint:"Count the ones: 45 has 5 ones, and 42 has 2 ones.",pic:{"t":"blocks","ten":4,"one":5}}},
 {skill:"tens",say:"Both numbers have the same number of tens.  So, we look at the ones.",pic:[{"t":"blocks","ten":4,"one":2}],eq:"42"},
 {skill:"ones",say:"45 has more ones than 42.  So, 45 is greater than 42.",pic:[{"t":"blocks","ten":4,"one":5}],eq:"45"},
 {skill:"symbols",say:"Since 45 is greater than 42, we use the > symbol.",pic:[{"t":"blocks","ten":4,"one":5}],eq:"45 > 42",
  check:{prompt:"Which number is equal to 20 + 3?",answer:"23",options:["23","34","45"],hint:"Both numbers have the same number of tens and ones.",pic:{"t":"blocks","ten":2,"one":3}}},
 {skill:"tens",say:"Finally, compare 23 and 23. Both have 2 tens and 3 ones, so they are equal. Use < when the left number is smaller, > when it is greater, and = when both are equal.",pic:[{"t":"blocks","ten":2,"one":3}],eq:"23 = 23"}],
 items(add){
  const _SKIP=new Set(["Which number has the most tens: 52, 34 or 45?","Which number has the most ones: 45, 42 or 23?","Which number is equal to 20 + 3?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=10;a<=99;a++)for(let b=10;b<=99;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=sym;
add("symbols","Which symbol goes between "+(a)+" and "+(b)+": >, < or =?",r,{"t":"blocks","ten":ta,"one":oa},"Compare the tens first. If they are the same, compare the ones.");}}
{const _P=[];
for(let a=10;a<=99;a++)for(let b=10;b<=99;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.max(a,b));
add("tens","Which number is greater: "+(a)+" or "+(b)+"?",r,{"t":"blocks","ten":ta,"one":oa},"Compare the tens first. If they are the same, compare the ones.");}}
{const _P=[];
for(let a=10;a<=99;a++)for(let b=10;b<=99;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.min(a,b));
add("ones","Which number is smaller: "+(a)+" or "+(b)+"?",r,{"t":"blocks","ten":ta,"one":oa},"Compare the tens first. If they are the same, compare the ones.");}}
 }};
