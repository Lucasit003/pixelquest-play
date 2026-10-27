// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Find the rule behind a growing pattern and work out a later step. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
/* 25 Oct (learning-loop playtest): a fixed stride that divides an inner loop's length only ever picked some of its values (every "x 2" or "x 6", never "x 7"). The stride picks stay exactly as they were, and half as many again are added, drawn by a fixed-seed hash (the same items every load) so every value turns up. */
const _spread=(L,s,n)=>{const o=[];for(let i=0;i<L;i+=s)o.push(i);const seen=new Set(o),want=o.length+Math.ceil(n/2);let h=2654435761;for(let k=1;o.length<want&&k<=8*L;k++){h=Math.imul(h^h>>>15,2246822519)+k>>>0;const i=h%L;if(!seen.has(i)){seen.add(i);o.push(i);}}return o;};
export default {
 id:"cs-e-growing-patterns",subject:"cs",level:3,grade:3,standard:"CSTA 1B-AP-08",
 title:"Patterns that grow",goal:"Find the rule behind a growing pattern and work out a later step.",points:20,
 skills:{"step":"The step each time","next":"The next number","far":"Jumping ahead"},
 steps:[
 {skill:"step",say:"A repeating pattern goes back to the start.  A growing pattern gets bigger by the same amount each time.",pic:[{"t":"line","max":20,"jumps":4,"hop":5}],eq:"5, 10, 15, 20"},
 {skill:"step",say:"Take one number from the next to find the step: 10 take 5 is 5, so the step is 5.",pic:[{"t":"line","max":20,"jumps":4,"hop":5}],eq:"the step is 5",
  check:{"prompt":"In the pattern 3, 7, 11, 15, what is the step each time?","answer":4,"options":[4,3,7,15],"hint":"Take one number away from the one after it.","pic":{"t":"tiles","seq":[3,7,11,15]}}},
 {skill:"next",say:"Add the step to the last number to get the next: 20 and 5 make 25.",pic:[{"t":"line","max":25,"jumps":5,"hop":5}],eq:"20 + 5 = 25",
  check:{"prompt":"What comes after 15 in the pattern 3, 7, 11, 15?","answer":19,"options":[19,16,20,30],"hint":"The step is 4. Add it to 15.","pic":{"t":"tiles","seq":[3,7,11,15,null],"fill":19}}},
 {skill:"far",say:"To jump a long way, multiply.  Start at 0 and take ten steps of 5: you reach 50.",pic:[{"t":"array","r":5,"c":10}],eq:"5 x 10 = 50",
  check:{"prompt":"Start at 0 and take ten steps of 4. Which number do you reach?","answer":40,"options":[40,14,44,400],"hint":"Ten steps of four: 10 x 4.","pic":{"t":"array","r":4,"c":10}}},
 {skill:"far",say:"That is faster than writing out every step, and a computer does the same thing.",pic:[{"t":"line","max":50,"jumps":10,"hop":5}]},
 {skill:"next",say:"Find the step, then add it on, or multiply to jump ahead.",pic:[{"t":"line","max":30,"jumps":6,"hop":5}]}],
 items(add){
  const _SKIP=new Set(["In the pattern 5, 10, 15, 20, what is the step each time?","What comes after 20 in the pattern 5, 10, 15, 20?","Starting at 0 with a step of 5, what is the tenth number?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=0;a<=20;a++)for(let b=2;b<=9;b++)for(let n=2;n<=9;n++)_P.push([a,b,n]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b,n]=_P[_i],end=a+b*n,r=end;
add("next","A pattern starts at "+(a)+" and grows by "+(b)+" each time. What is it after "+(n)+" steps?",r,{"t":"line","max":end<=20?20:end<=50?50:end<=100?100:110,"from":a,"jumps":n,"hop":b},"Start at "+(a)+" and add "+(b)+", "+(n)+" times: "+(r)+".");}}
{const _P=[];
for(let a=0;a<=20;a++)for(let b=2;b<=9;b++)for(let n=2;n<=9;n++)_P.push([a,b,n]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b,n]=_P[_i],end=a+b*n,r=b;
add("step","A pattern starts at "+(a)+" and reaches "+(end)+" after "+(n)+" steps. How big is each step?",r,{"t":"line","max":end<=20?20:end<=50?50:end<=100?100:110,"from":a,"jumps":n,"hop":b,"hint":true},"From "+(a)+" to "+(end)+" in "+(n)+" steps means a step of "+(r)+".");}}
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=12;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
/* 26 Oct (elemfix): "the 5th number" counted the numbers after 0, so a child who counts 0 as first got a different answer, and b=2,3 printed "2th"/"3th". The prompt now says how many jumps from 0. */
add("far","Start at 0 and take "+(b)+" jumps of "+(a)+". Where do you land?",r,{"t":"array","r":a,"c":b},"Start at 0 and take "+(b)+" jumps of "+(a)+": "+(b)+" x "+(a)+" = "+(r)+".");}}
 }};
