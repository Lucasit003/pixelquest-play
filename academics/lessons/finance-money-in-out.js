// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Take what you spend away from what you get, and see what is left over each week. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-money-in-out",subject:"finance",level:3,grade:4,standard:"Jump$tart 2-2",
 title:"Money in, money out",goal:"Take what you spend away from what you get, and see what is left over each week.",points:20,
 skills:{"left":"What is left","spend":"What was spent","lasts":"How long it lasts"},
 steps:[
 {skill:"left",say:"Money comes in and money goes out.  What is left is what comes in take away what goes out.",pic:[{"t":"coins","coins":["q","q","d"],"count":true}],eq:"in - out = left"},
 {skill:"left",say:"You get $12 and spend $7.  That leaves $5.",pic:[{"t":"bar","parts":12,"shade":7}],eq:"12 - 7 = 5",
  check:{prompt:"You get $15 and spend $9. How much is left?",answer:6,options:[6,24,5,9],hint:"Take 9 away from 15.",pic:{"t":"bar","parts":15,"shade":9}}},
 {skill:"spend",say:"It works backwards too.  If you got $12 and have $5 left, you spent $7.",pic:[{"t":"bar","parts":12,"shade":5}],eq:"12 - 5 = 7",
  check:{"prompt":"You got $20 and have $6 left. How much did you spend?","answer":14,"options":[14,26,6,20],"hint":"Take what is left away from what you got.","pic":{"t":"bar","parts":20,"shade":6}}},
 {skill:"lasts",say:"Spending the same amount each week, your money lasts as many weeks as that amount goes into it.",pic:[{"t":"line","max":12,"jumps":4,"hop":3}],eq:"12 / 3 = 4 weeks"},
 {skill:"lasts",say:"$20 with $5 spent each week lasts 4 weeks.  Spend $10 a week and the same $20 lasts 2.",pic:[{"t":"line","max":20,"jumps":4,"hop":5}],eq:"20 / 5 = 4 weeks",
  check:{prompt:"You have $18 and spend $6 a week. How many weeks does it last?",answer:3,options:[3,12,6,24],hint:"How many 6s fit into 18?",pic:{"t":"line","max":18,"jumps":3,"hop":6}}},
 {skill:"left",say:"In, out, what is left.  Those three numbers tell you where you stand.",pic:[{"t":"bar","parts":20,"shade":12}]}],
 items(add){
  const _SKIP=new Set(["You get $15 and spend $9. How much is left?","You got $20 and have $8 left. How much did you spend?","You have $18 and spend $6 a week. How many weeks does it last?","You get $75 and spend $53. How much is left?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=15;a<=99;a++)for(let b=5;b<=90;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("left","You get $"+(a)+" and spend $"+(b)+". How much is left?",r,{"t":"bar","parts":a,"shade":b},"$"+(a)+" take away $"+(b)+" leaves $"+(r)+".");}}
{const _P=[];
for(let a=15;a<=99;a++)for(let b=5;b<=90;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("spend","You got $"+(a)+" and have $"+(b)+" left. How much did you spend?",r,{"t":"bar","parts":a,"shade":b},"$"+(a)+" take away the $"+(b)+" you still have leaves $"+(r)+" spent.");}}
{const _P=[];
for(let a=12;a<=96;a++)for(let b=2;b<=12;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("lasts","You have $"+(a)+" and spend $"+(b)+" every week. How many weeks does it last?",r,{"t":"word","base":"$"+(a)+""},"$"+(b)+" goes into $"+(a)+" exactly "+(r)+" times, so it lasts "+(r)+" weeks.");}}
 }};
