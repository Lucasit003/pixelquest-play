// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Add two small numbers and know the answer without counting every time. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-add-within-20",subject:"math",level:3,grade:2,standard:"CCSS 2.OA.B.2",
 title:"Adding within 20",goal:"Add two small numbers and know the answer without counting every time.",points:20,
 skills:{"count":"Counting on","facts":"Number facts","sums":"Sums to 20"},
 steps:[
 {skill:"count",say:"Adding means putting two groups together and counting them all. Let's add 5 and 3. Start at 5 and count on 3 more: 6, 7, 8. So, 5 + 3 = 8.",pic:[{"t":"line","max":20,"hop":1,"jumps":3,"from":5,"solve":true}],eq:"5 + 3 = 8",
  check:{prompt:"What is 6 + 3?",answer:"9",options:["9","8","10"],hint:"Count on from 6: 7, 8, 9.",pic:{"t":"line","max":20,"hop":1,"jumps":3,"from":6}}},
 {skill:"count",say:"Now, let's add 7 and 2. We start at 7 and count on 2 more: 8, 9. So, 7 + 2 = 9.",pic:[{"t":"line","max":20,"hop":1,"jumps":2,"from":7,"solve":true}],eq:"7 + 2 = 9"},
 {skill:"facts",say:"Now let's add 8 and 5. First make a ten: 8 + 2 = 10. We used 2, so 3 are left. 10 + 3 = 13. So, 8 + 5 = 13.",pic:[{"t":"line","max":20,"hop":1,"jumps":5,"from":8,"mark":10,"solve":true}],eq:"8 + 5 = 13",
  check:{prompt:"What is 7 + 5?",answer:"12",options:["12","11","13"],hint:"Make a ten first: 7 + 3 = 10. Then add the 2 that are left.",pic:{"t":"line","max":20,"hop":1,"jumps":5,"from":7,"mark":10}}},
 {skill:"facts",say:"Let's add 9 and 6 the same way. 9 + 1 = 10. We used 1, so 5 are left. 10 + 5 = 15. So, 9 + 6 = 15.",pic:[{"t":"line","max":20,"hop":1,"jumps":6,"from":9,"mark":10,"solve":true}],eq:"9 + 6 = 15"},
 {skill:"sums",say:"Adding to 10 is quick. 10 and 7 more is 17. Ten and some ones makes a teen number. So, 10 + 7 = 17.",pic:[{"t":"blocks","ten":1,"one":7,"count":true}],eq:"10 + 7 = 17",
  check:{prompt:"What is 10 + 8?",answer:"18",options:["18","17","19"],hint:"10 and 8 more. Ten and 8 ones is eigh-teen.",pic:{"t":"blocks","ten":1,"one":8}}},
 {skill:"sums",say:"Let's try another one: 12 + 5 = 17. Count on from 12 by 5: 13, 14, 15, 16, 17.",pic:[{"t":"line","max":20,"hop":1,"jumps":5,"from":12,"solve":true}],eq:"12 + 5 = 17"}],
 items(add){
  const _SKIP=new Set(["What is 6 + 3?","What is 7 + 5?","What is 10 + 8?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=1;a<=10;a++)for(let b=1;b<=10;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("facts","What is "+(a)+" + "+(b)+"?",r,{"t":"line","max":20,"hop":1,"jumps":b,"from":a},"Start at "+(a)+" and count on "+(b)+" more. You land on "+(r)+".");}}
{const _P=[];
for(let a=1;a<=10;a++)for(let b=1;b<=10;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("count","You have "+(a)+" apples and get "+(b)+" more. What number of apples is that?",r,{"t":"line","max":20,"hop":1,"jumps":b,"from":a},"Start with "+(a)+" apples and count on "+(b)+" more. That makes "+(r)+" apples.");}}
{const _P=[];
for(let a=1;a<=10;a++)for(let b=1;b<=10;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("sums","What is the total if you add "+(a)+" and "+(b)+"?",r,{"t":"line","max":20,"hop":1,"jumps":b,"from":a},""+(a)+" and "+(b)+" together make "+(r)+".");}}
 }};
