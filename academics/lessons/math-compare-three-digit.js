// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Compare the hundreds first, then the tens, then the ones. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
/* A place-value table stays in the canvas even with nine hundreds. */
const places=(h,ten,one)=>({t:'setups',title:'Place value',head:'Place',cols:['Digit'],rows:[['hundreds',String(h)],['tens',String(ten)],['ones',String(one)]]});
export default {
 id:"math-e-compare-three-digit",subject:"math",level:3,grade:2,standard:"CCSS 2.NBT.A.4",
 title:"Comparing bigger numbers",goal:"Compare the hundreds first, then the tens, then the ones.",points:20,
 skills:{"hundreds":"Start with the hundreds","tens":"Then the tens","symbols":"Using > < and ="},
 steps:[
 {skill:"hundreds",say:"Let's compare 345 and 278.  First, look at the hundreds place.  345 has 3 hundreds, and 278 has 2 hundreds.",pic:[places(3,4,5)],eq:"345 and 278",
  check:{prompt:"Compare 345 and 278. Which number has more hundreds?",answer:"345",options:["345","278"],hint:"Look at the hundreds place.",pic:places(3,4,5)}},
 {skill:"hundreds",say:"Since 3 hundreds is more than 2 hundreds, 345 is greater than 278.",pic:[places(3,4,5)],eq:"345 > 278"},
 {skill:"tens",say:"Now, let's compare 456 and 432.  The hundreds are the same, so we look at the tens place.  The tens digits are 5 in 456 and 3 in 432.",pic:[places(4,5,6)],eq:"456 and 432",
  check:{prompt:"Compare 456 and 432. Which number has more tens?",answer:"456",options:["456","432"],hint:"Look at the tens place.",pic:places(4,5,6)}},
 {skill:"tens",say:"Since 5 tens is more than 3 tens, 456 is greater than 432.",pic:[places(4,5,6)],eq:"456 > 432"},
 {skill:"symbols",say:"When the hundreds and tens match, compare the ones. In 562 and 567, only the ones differ: 2 is less than 7, so 562 is less than 567.",pic:[places(5,6,2)],eq:"562 < 567"},
 {skill:"symbols",say:"Let's compare 567 and 567.  The hundreds and tens are the same, so we look at the ones place.  Both have 7 ones.",pic:[places(5,6,7)],eq:"567 and 567",
  check:{prompt:"Compare 567 and 567. How do they compare?",answer:"=",options:["=",">","<"],hint:"All the digits are the same.",pic:places(5,6,7)}},
 {skill:"symbols",say:"Since all the digits are the same, 567 is equal to 567.",pic:[places(5,6,7)],eq:"567 = 567"}],
 items(add){
  const _SKIP=new Set(["Compare 345 and 278. Which number has more hundreds?","Compare 456 and 432. Which number has more tens?","Compare 567 and 567. How do they compare?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=101;a<=999;a++)for(let b=100;b<=999;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.max(a,b));
add("hundreds","Which number is greater: "+(a)+" or "+(b)+"?",r,places(ha,ta,oa),"Compare the hundreds first, then the tens, then the ones: "+(a)+" "+(sym)+" "+(b)+".");}}
{const _P=[];
for(let a=100;a<=999;a++)for(let b=100;b<=999;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.max(a,b));
add("tens","Which number is greater: "+(a)+" or "+(b)+"?",r,places(ha,ta,oa),"Compare the hundreds first, then the tens, then the ones: "+(a)+" "+(sym)+" "+(b)+".");}}
{const _P=[];
for(let a=100;a<=999;a++)for(let b=100;b<=999;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=sym;
add("symbols","Which symbol goes between "+(a)+" and "+(b)+": >, < or =?",r,places(ha,ta,oa),"Compare the hundreds first, then the tens, then the ones: "+(a)+" "+(sym)+" "+(b)+".");}}
 }};
