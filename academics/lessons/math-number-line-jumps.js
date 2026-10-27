// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Adding is a jump forward; subtracting is a jump back. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-number-line-jumps",subject:"math",level:3,grade:2,standard:"CCSS 2.MD.B.6",
 title:"Jumping on a number line",goal:"Adding is a jump forward; subtracting is a jump back.",points:20,
 skills:{"forward":"Jumping forward","back":"Jumping back","land":"Where you land"},
 steps:[
 {skill:"forward",say:"Let's start at 5 on the number line. If we jump forward 3, we land on 8.",pic:[{"t":"line","max":20,"jumps":1,"hop":3,"from":5}],eq:"5 + 3 = 8",
  check:{prompt:"If you start at 3 and jump forward 5, where do you land?",answer:8,options:[8,6,7,9],hint:"Jump forward means adding.",pic:{"t":"line","max":20,"jumps":1,"hop":5,"from":3}}},
 {skill:"forward",say:"If we start at 7 and jump forward 4, we land on 11.",pic:[{"t":"line","max":20,"jumps":1,"hop":4,"from":7}],eq:"7 + 4 = 11"},
 {skill:"back",say:"Now, let's start at 10 and jump back 2. We land on 8.",pic:[{"t":"line","max":20,"jumps":1,"hop":2,"from":10,"back":true}],eq:"10 - 2 = 8",
  check:{prompt:"If you start at 9 and jump back 4, where do you land?",answer:5,options:[5,4,6,7],hint:"Jump back means subtracting.",pic:{"t":"line","max":20,"jumps":1,"hop":4,"from":9,"back":true}}},
 {skill:"back",say:"If we start at 15 and jump back 5, we land on 10.",pic:[{"t":"line","max":20,"jumps":1,"hop":5,"from":15,"back":true}],eq:"15 - 5 = 10"},
 {skill:"land",say:"Let's start at 6 and jump forward 4. We land on 10.",pic:[{"t":"line","max":20,"jumps":1,"hop":4,"from":6}],eq:"6 + 4 = 10",
  check:{prompt:"If you start at 4 and jump forward 6, where do you land?",answer:10,options:[10,8,9,11],hint:"Add the numbers to find out.",pic:{"t":"line","max":20,"jumps":1,"hop":6,"from":4}}},
 {skill:"land",say:"Let's start at 12 and jump back 3. We land on 9.",pic:[{"t":"line","max":20,"jumps":1,"hop":3,"from":12,"back":true}],eq:"12 - 3 = 9"}],
 items(add){
  const _SKIP=new Set(["If you start at 3 and jump forward 5, where do you land?","If you start at 9 and jump back 4, where do you land?","If you start at 4 and jump forward 6, where do you land?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["forward","land"];let _q=0;const _P=[];
for(let a=1;a<=50;a++)for(let b=1;b<=50;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add(_SK[_q++%_SK.length],"If you start at "+(a)+" and jump forward "+(b)+", where do you land?",r,{"t":"line","max":100,"jumps":1,"hop":b,"from":a},"Jumping forward means adding. So, "+(a)+" + "+(b)+" = "+(r)+".");}}
{const _SK=["back","land"];let _q=0;const _P=[];
for(let a=1;a<=50;a++)for(let b=1;b<=50;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add(_SK[_q++%_SK.length],"If you start at "+(a)+" and jump back "+(b)+", where do you land?",r,{"t":"line","max":100,"jumps":1,"hop":b,"from":a,"back":true},"Jumping back means subtracting. So, "+(a)+" - "+(b)+" = "+(r)+".");}}
 }};
