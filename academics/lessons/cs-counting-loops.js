// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: A loop adds the same amount again and again, and you can work out where it ends. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
/* 25 Oct (learning-loop playtest): a fixed stride that divides an inner loop's length only ever picked some of its values (every "x 2" or "x 6", never "x 7"). The stride picks stay exactly as they were, and half as many again are added, drawn by a fixed-seed hash (the same items every load) so every value turns up. */
const _spread=(L,s,n)=>{const o=[];for(let i=0;i<L;i+=s)o.push(i);const seen=new Set(o),want=o.length+Math.ceil(n/2);let h=2654435761;for(let k=1;o.length<want&&k<=8*L;k++){h=Math.imul(h^h>>>15,2246822519)+k>>>0;const i=h%L;if(!seen.has(i)){seen.add(i);o.push(i);}}return o;};
export default {
 id:"cs-e-counting-loops",subject:"cs",level:3,grade:3,standard:"CSTA 1A-AP-10",
 title:"Counting by steps",goal:"A loop adds the same amount again and again, and you can work out where it ends.",points:20,
 skills:{"start":"Where it starts","step":"How big each step is","end":"Where it ends up"},
 steps:[
 {skill:"start",say:"Let's start counting from 0.  We'll add 2 each time.",pic:[{"t":"line","max":20,"jumps":4,"hop":2}],eq:"0, 2, 4, 6, 8"},
 {skill:"step",say:"Each time, we add 2 to the last number.  This is our step size.",pic:[{"t":"line","max":20,"jumps":5,"hop":2}],eq:"2, 4, 6, 8, 10",
  check:{prompt:"If you start at 0 and add 2 each time, where do you end up after 4 steps?",answer:8,options:[8,6,10,12],hint:"Start at 0, add 2 four times: 0 + 2 + 2 + 2 + 2 = 8.",pic:{"t":"line","max":20,"jumps":4,"hop":2}}},
 {skill:"end",say:"If we keep adding 2, starting from 0, after 5 steps, we end up at 10.",pic:[{"t":"line","max":20,"jumps":5,"hop":2}],eq:"0 + 2×5 = 10"},
 {skill:"start",say:"Now, let's start from 3 and add 3 each time.",pic:[{"t":"line","max":20,"from":3,"jumps":4,"hop":3}],eq:"3, 6, 9, 12, 15",
  check:{prompt:"If you start at 3 and add 3 each time, where do you end up after 3 steps?",answer:12,options:[12,9,15,18],hint:"Start at 3, add 3 three times: 3 + 3 + 3 + 3 = 12.",pic:{"t":"line","max":20,"from":3,"jumps":3,"hop":3}}},
 {skill:"step",say:"Each time, we add 3 to the last number.  This is our step size.",pic:[{"t":"line","max":20,"from":3,"jumps":5,"hop":3}],eq:"6, 9, 12, 15, 18"},
 {skill:"end",say:"If we keep adding 3, starting from 3, after 5 steps, we end up at 18.",pic:[{"t":"line","max":20,"from":3,"jumps":5,"hop":3}],eq:"3 + 3×5 = 18",
  check:{prompt:"If you start at 5 and add 4 each time, where do you end up after 5 steps?",answer:25,options:[25,21,29,30],hint:"Start at 5, add 4 five times: 5 + 4 + 4 + 4 + 4 + 4 = 25.",pic:{"t":"line","max":50,"from":5,"jumps":5,"hop":4}}}],
 items(add){
  const _SKIP=new Set(["If you start at 0 and add 2 each time, where do you end up after 4 steps?","If you start at 3 and add 3 each time, where do you end up after 3 steps?","If you start at 5 and add 4 each time, where do you end up after 5 steps?"]),_add=add;
  add=(s,p,a,pic,why)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why);};
{const _P=[];
for(let a=0;a<=20;a++)for(let b=2;b<=9;b++)for(let n=2;n<=9;n++)_P.push([a,b,n]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b,n]=_P[_i],end=a+b*n,r=end;
add("end","If you start at "+(a)+" and add "+(b)+" each time, where do you end up after "+(n)+" steps?",r,{"t":"line","max":end<=20?20:end<=50?50:end<=100?100:110,"from":a,"jumps":n,"hop":b},"Start at "+(a)+" and add "+(b)+", "+(n)+" times: "+(a)+" + "+(b)+" × "+(n)+" = "+(r)+".");}}
{const _P=[];
for(let a=0;a<=20;a++)for(let b=2;b<=9;b++)for(let n=2;n<=9;n++)_P.push([a,b,n]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,n]=_P[_i],end=a+b*n,r=a;
add("start","If you add "+(b)+" each time and end up at "+(end)+" after "+(n)+" steps, where did you start?",r,{"t":"line","max":end<=20?20:end<=50?50:end<=100?100:110,"from":end,"back":true,"jumps":n,"hop":b},"End at "+(end)+", take away "+(b)+", "+(n)+" times: "+(end)+" - "+(b)+" × "+(n)+" = "+(a)+".");}}
{const _P=[];
for(let a=0;a<=20;a++)for(let b=2;b<=9;b++)for(let n=2;n<=9;n++)_P.push([a,b,n]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,n]=_P[_i],end=a+b*n,r=b;
add("step","If you start at "+(a)+" and end up at "+(end)+" after "+(n)+" steps, how big is each step?",r,{"t":"line","max":end<=20?20:end<=50?50:end<=100?100:110,"from":a,"jumps":n,"hop":b,"hint":true},"From "+(a)+" to "+(end)+" is "+(end)+" - "+(a)+". Share that over "+(n)+" steps: each step is "+(b)+".");}}
 }};
