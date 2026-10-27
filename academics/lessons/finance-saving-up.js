// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Saving a little at a time gets you to a bigger goal. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-saving-up",subject:"finance",level:3,grade:2,standard:"NSFEC 2",
 title:"Saving up",goal:"Saving a little at a time gets you to a bigger goal.",points:20,
 skills:{"goal":"The goal","saved":"How much is saved","togo":"How much is left"},
 steps:[
 {skill:"goal",say:"Imagine you want to buy a toy that costs $50.  That is your goal.",pic:[{"t":"theater","scene":"savings","part":"goal"}],eq:"Goal = $50"},
 {skill:"saved",say:"You have saved $20 so far.",pic:[{"t":"theater","scene":"savings","part":"saved"}],eq:"Saved = $20",
  check:{"prompt":"If your goal is $50 and you have saved $20, how much more do you need?","answer":"$30","options":["$30","$20","$40"],"hint":"Subtract what you have saved from your goal.","pic":{"t":"pair","a":"Goal $50","b":"Saved $20"}}},
 {skill:"togo",say:"To find out how much more you need, subtract what you have saved from your goal.",pic:[{"t":"theater","scene":"savings","part":"subtract"}],eq:"To go = Goal - Saved"},
 {skill:"togo",say:"So, $50 - $20 = $30.  You need $30 more to reach your goal.",pic:[{"t":"theater","scene":"savings","part":"reach"}],eq:"$50 - $20 = $30",
  check:{"prompt":"If your goal is $60 and you have saved $45, how much more do you need?","answer":"$15","options":["$15","$25","$105"],"hint":"Subtract what you have saved from your goal: $60 - $45.","pic":{"t":"pair","a":"Goal $60","b":"Saved $45"}}},
 {skill:"goal",say:"Remember, your goal is to save up to $50 for the toy.",pic:[{"t":"word","base":"Goal: $50"}],eq:"Goal = $50"},
 {skill:"saved",say:"Keep saving your coins.  Every time you save more, subtract from your goal to see how much is left.",pic:[{"t":"pair","a":"goal - saved","b":"still needed"}],eq:"Goal - Saved = Still needed",
  check:{"prompt":"If your goal is $100 and you have saved $60, how much more do you need?","answer":"$40","options":["$40","$50","$30"],"hint":"Subtract what you have saved from your goal.","pic":{"t":"pair","a":"Goal $100","b":"Saved $60"}}}],
 items(add){
  const _SKIP=new Set(["If your goal is $50 and you have saved $20, how much more do you need?","If your goal is $75 and you have saved $45, how much more do you need?","If your goal is $100 and you have saved $60, how much more do you need?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=20;a<=100;a++)for(let b=5;b<=95;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("togo","If your goal is $"+(a)+" and you have saved $"+(b)+", how much more do you need?",r,{"t":"pair","a":"Goal $"+a,"b":"Saved $"+b},"Take what you have saved from your goal: $"+(a)+" - $"+(b)+" = $"+(r)+".");}}
{const _P=[];
for(let a=20;a<=100;a++)for(let b=5;b<=95;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("saved","If your goal is $"+(a)+" and you still need $"+(b)+", how much have you saved?",r,{"t":"pair","a":"Goal $"+a,"b":"Still need $"+b},"Take what you still need from your goal: $"+(a)+" - $"+(b)+" = $"+(r)+".");}}
{const _P=[];
for(let a=5;a<=60;a++)for(let b=5;b<=40;b++)if(a+b<100)_P.push([a,b]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("goal","If you have saved $"+(a)+" and you still need $"+(b)+", what is your goal?",r,{"t":"pair","a":"Saved $"+a,"b":"Still need $"+b},"Your goal is what you have saved plus what you still need: $"+(a)+" + $"+(b)+" = $"+(r)+".");}}
 }};
