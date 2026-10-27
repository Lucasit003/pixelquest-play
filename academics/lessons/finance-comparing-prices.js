// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: The cheaper choice leaves money for something else. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-comparing-prices",subject:"finance",level:3,grade:2,standard:"NSFEC 3",
 title:"Comparing prices",goal:"The cheaper choice leaves money for something else.",points:20,
 skills:{"read":"Reading a price","compare":"Which costs less","spend":"Spending well"},
 steps:[
 {skill:"read",say:"Let's look at two toys.  One costs 23 cents and the other costs 45 cents.  We need to read the prices carefully.",pic:[{"t":"pair","a":"23 cents","b":"45 cents"}],eq:"23 cents, 45 cents"},
 {skill:"read",say:"The first toy costs 23 cents.  That's 2 dimes and 3 pennies.",pic:[{"t":"coins","coins":["d","d","p","p","p"]}],eq:"23 cents",
  check:{prompt:"A ball costs 3 dimes and 4 pennies. How much does the ball cost?",answer:"34 cents",options:["34 cents","43 cents","7 cents"],hint:"Count the dimes by tens: 10, 20, 30. Then add 1 cent for each penny.",pic:{"t":"coins","coins":["d","d","d","p","p","p","p"]}}},
 {skill:"read",say:"The second toy costs 45 cents.  That's 4 dimes and 5 pennies.",pic:[{"t":"coins","coins":["d","d","d","d","p","p","p","p","p"]}],eq:"45 cents"},
 {skill:"compare",say:"Now, let's compare the prices.  Which toy costs less?  We need to look at the tens and ones.",pic:[{"t":"pair","a":"23 cents","b":"45 cents"}],eq:"23 cents < 45 cents",
  check:{prompt:"Which toy costs less, the one that costs 23 cents or the one that costs 45 cents?",answer:"23 cents",options:["23 cents","45 cents","34 cents"],hint:"Compare the tens first, then the ones.",pic:{"t":"pair","a":"23 cents","b":"45 cents"}}},
 {skill:"compare",say:"23 cents is less than 45 cents because 2 tens is less than 4 tens.",pic:[{"t":"pair","a":"23 cents","b":"45 cents"}],eq:"23 cents < 45 cents"},
 {skill:"spend",say:"If you choose the cheaper toy, you'll have more money left for other things.  Spending wisely means choosing the cheaper option.",pic:[{"t":"pair","a":"23 cents","b":"45 cents"}],eq:"23 cents < 45 cents",
  check:{"prompt":"A ball costs 30 cents and a kite costs 18 cents. Which one leaves you more money for other things?","answer":"the kite","options":["the kite","the ball","they leave the same"],"hint":"The cheaper one leaves more. Compare the tens: 1 ten is less than 3 tens.","pic":{"t":"pair","a":"ball 30¢","b":"kite 18¢"}}}],
 items(add){
  const _SKIP=new Set(["How much does the first toy cost?","Which toy costs less, the one that costs 23 cents or the one that costs 45 cents?","If you choose the cheaper toy, how much money do you have left for other things?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["read","compare","spend"];let _q=0;const _P=[];
for(let a=5;a<=99;a++)for(let b=5;b<=99;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.min(a,b));
add(_SK[_q++%_SK.length],"Which costs less, "+(a)+" cents or "+(b)+" cents?",r,{"t":"pair","a":a+" cents","b":b+" cents"},"Compare the tens first, then the ones: "+(a)+" cents "+(sym)+" "+(b)+" cents.");}}
{const _SK=["read","compare","spend"];let _q=0;const _P=[];
for(let a=5;a<=99;a++)for(let b=5;b<=99;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.min(a,b));
/* 26 Oct (elemfix): "If you have 65 cents and 89 cents, which one is cheaper?" mixed money you have with prices; both numbers are now prices. */
add(_SK[_q++%_SK.length],"A pencil costs "+(a)+" cents and a marker costs "+(b)+" cents. How much does the cheaper one cost?",r,{"t":"pair","a":a+" cents","b":b+" cents"},"Compare the tens first, then the ones: "+(a)+" cents "+(sym)+" "+(b)+" cents.");}}
{const _SK=["read","compare","spend"];let _q=0;const _P=[];
for(let a=5;a<=99;a++)for(let b=5;b<=99;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.min(a,b));
add(_SK[_q++%_SK.length],"Which toy costs less, the one that costs "+(a)+" cents or the one that costs "+(b)+" cents?",r,{"t":"pair","a":a+" cents","b":b+" cents"},"Compare the tens first, then the ones: "+(a)+" cents "+(sym)+" "+(b)+" cents.");}}
 }};
