// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: A computer compares two values and answers true or false, and that answer steers the program. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-comparing-values",subject:"cs",level:3,grade:4,standard:"CSTA 1B-AP-09",
 title:"Comparing two values",goal:"A computer compares two values and answers true or false, and that answer steers the program.",points:20,
 skills:{"test":"Is it true","keep":"Keeping the bigger","equal":"When they are equal"},
 steps:[
 {skill:"test",say:"A comparison asks one question about two values, and the answer is true or false.",pic:[{"t":"rule","cond":"is 7 bigger than 4?","yes":"true","no":"false"}]},
 {skill:"test",say:"'Is 7 bigger than 4? ' is true.  'Is 4 bigger than 7? ' is false.  Order matters.",pic:[{"t":"pair","a":"7 > 4 true","b":"4 > 7 false"}],
  check:{"prompt":"Is this true or false: 3 is bigger than 9?","answer":"false","options":["false","true"],"hint":"Read it in the order it is written.","pic":{"t":"pair","a":"3 > 9","b":"?"}}},
 {skill:"keep",say:"A program that finds the biggest keeps the winner and throws the other away, one comparison at a time.",pic:[{"t":"tiles","seq":["7","4"]}],eq:"keep 7"},
 {skill:"keep",say:"Compare the winner with the next value, and keep going to the end of the list.",pic:[{"t":"tiles","seq":["7","9","2"]}],eq:"keep 9",
  check:{prompt:"A program keeps the bigger value. It holds 7 and meets 9. What does it keep?",answer:9,options:[9,7,16,2],hint:"The bigger of the two.",pic:{"t":"tiles","seq":["7","9"]}}},
 {skill:"equal",say:"When two values are the same, 'bigger than' is false both ways.  Equal is its own answer.",pic:[{"t":"pair","a":"5 and 5","b":"equal"}],eq:"5 = 5",
  check:{"prompt":"Is this true or false: 8 is bigger than 8?","answer":"false","options":["false","true"],"hint":"They are the same size.","pic":{"t":"pair","a":"8 > 8","b":"?"}}},
 {skill:"test",say:"In these comparisons, we ask one question about two numbers and get a true-or-false answer.",pic:[{"t":"rule","cond":"a bigger than b?","yes":"true","no":"false"}]}],
 items(add){
  const _SKIP=new Set(["Is this true or false: 4 is bigger than 7?","A program keeps the bigger value. It holds 7 and meets 9. What does it keep?","Is this true or false: 5 is bigger than 5?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=1;a<=99;a++)for(let b=1;b<=99;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.max(a,b));
add("keep","A program keeps the bigger value. Given "+(a)+" and "+(b)+", which does it keep?",r,{"t":"tiles","seq":[a,b]},"It keeps "+(r)+".");}}
{const _P=[];
for(let a=1;a<=99;a++)for(let b=1;b<=99;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.min(a,b));
add("test","A program keeps the smaller value. Given "+(a)+" and "+(b)+", which does it keep?",r,{"t":"tiles","seq":[a,b]},"It keeps "+(r)+".");}}
{const _P=[];
for(let a=1;a<=60;a++)for(let b=1;b<=60;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=sym;
add("equal","Which symbol makes this true: "+(a)+" __ "+(b)+"? Answer >, < or =.",r,{"t":"rule","cond":"compare "+(a)+" and "+(b)+"","yes":"one symbol","no":"not two"},""+(a)+" "+(sym)+" "+(b)+".");}}
 }};
