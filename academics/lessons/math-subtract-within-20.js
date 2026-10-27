// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Take a small number away and check by adding it back. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-subtract-within-20",subject:"math",level:3,grade:2,standard:"CCSS 2.OA.B.2",
 title:"Subtracting within 20",goal:"Take a small number away and check by adding it back.",points:20,
 skills:{"count":"Counting back","facts":"Number facts","diff":"Differences under 20"},
 steps:[
 {skill:"count",say:"Let's start with 15. If we take away 3, we count back: 14, 13, 12. So, 15 - 3 = 12.",pic:[{"t":"line","max":20,"from":15,"jumps":3,"hop":1,"back":true,"mark":12}],eq:"15 - 3 = 12",
  check:{prompt:"What is 14 - 3?",answer:11,options:[11,12,10],hint:"Start at 14 and count back 3 hops.",pic:{"t":"line","max":20,"from":14,"jumps":3,"hop":1,"back":true,"mark":11}}},
 {skill:"count",say:"Now, let's try 18 - 5. Count back: 17, 16, 15, 14, 13. So, 18 - 5 = 13.",pic:[{"t":"line","max":20,"from":18,"jumps":5,"hop":1,"back":true,"mark":13}],eq:"18 - 5 = 13"},
 {skill:"facts",say:"Here is 10 - 4. Count back 4 from 10: 9, 8, 7, 6. So 10 - 4 = 6. Now check it: 6 + 4 = 10. It works!",pic:[{"t":"line","max":20,"from":10,"jumps":4,"hop":1,"back":true,"mark":6}],eq:"10 - 4 = 6",
  check:{prompt:"What is 10 - 3?",answer:7,options:[7,6,8],hint:"Count back 3 from 10, then check: does 7 + 3 make 10?",pic:{"t":"line","max":20,"from":10,"jumps":3,"hop":1,"back":true,"mark":7}}},
 {skill:"facts",say:"Try 12 - 7. Count back 7 from 12: 11, 10, 9, 8, 7, 6, 5. So 12 - 7 = 5. Check: 5 + 7 = 12. Right!",pic:[{"t":"line","max":20,"from":12,"jumps":7,"hop":1,"back":true,"mark":5}],eq:"12 - 7 = 5"},
 {skill:"diff",say:"Let's look at 19 - 9. Watch the jumps: count back 9 from 19, one at a time, and you land on 10. There is also a shortcut: taking away 9 is almost like taking away 10. 19 - 10 = 9, and since we only meant to take away 9, we give 1 back: 9 + 1 = 10. Either way, 19 - 9 = 10.",pic:[{"t":"line","max":20,"from":19,"jumps":9,"hop":1,"back":true,"mark":10}],eq:"19 - 9 = 10",
  check:{prompt:"Count back 9 hops from 17. What is 17 - 9?",answer:8,options:[8,9,7],hint:"Start at 17 and count back 9 hops, or take away 10 and give 1 back.",pic:{"t":"line","max":20,"from":17,"jumps":9,"hop":1,"back":true}}},
 {skill:"diff",say:"Finally, let's try 17 - 8. Watch the jumps: count back 8 from 17, one at a time, and you land on 9. Shortcut: take away 10 first, 17 - 10 = 7, but that is 2 too many, so give 2 back: 7 + 2 = 9. Either way, 17 - 8 = 9.",pic:[{"t":"line","max":20,"from":17,"jumps":8,"hop":1,"back":true,"mark":9}],eq:"17 - 8 = 9"}],
 items(add){
  const _SKIP=new Set(["What is 14 - 3?","What is 10 - 3?","What is 18 - 9?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["count","facts","diff"];let _q=0;const _P=[];
for(let a=5;a<=20;a++)for(let b=1;b<=10;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add(_SK[_q++%_SK.length],"What is "+(a)+" - "+(b)+"?",r,{"t":"line","max":20,"from":a,"jumps":b,"hop":1,"back":true,"mark":r},"To find "+(a)+" - "+(b)+", we count back "+(b)+" from "+(a)+". This gives us "+(r)+". We can check by adding "+(b)+" to "+(r)+" to get back to "+(a)+".");}}
 }};
