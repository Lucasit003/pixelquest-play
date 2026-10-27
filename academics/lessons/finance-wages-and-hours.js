// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Calculate pay before deductions from hourly rate and hours, find hours for a target, and compare rates. Use a constant hourly rate in these examples. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-wages-and-hours",subject:"finance",level:3,grade:5,standard:"Jump$tart Earning Income (by end of grade 5)",
 title:"Wages and the hours behind them",goal:"Calculate pay before deductions from hourly rate and hours, find hours for a target, and compare rates. Use a constant hourly rate in these examples.",points:20,
 skills:{"wage":"Wage times hours","hours":"Hours to reach a goal","compare":"Comparing two jobs"},
 steps:[
 {skill:"wage",say:"An hourly wage is pay for each hour worked. We use the same rate for every hour in this lesson and calculate pay before any deductions. At $12 an hour, each hour earns $12.",pic:[{"t":"line","max":36,"jumps":3,"hop":12}],eq:"$12 for each hour"},
 {skill:"wage",say:"Pay is the wage times the hours. Work 8 hours at $12 an hour and you earn 8 x 12 = $96.",pic:[{"t":"array","r":8,"c":12}],eq:"8 x 12 = $96",
  check:{prompt:"Your wage is $9 an hour and you work 7 hours. How many dollars do you earn?",answer:63,options:[63,16,56,72],hint:"Multiply the wage by the hours.",pic:{"t":"line","max":63,"jumps":7,"hop":9}}},
 {skill:"wage",say:"At a constant $12 an hour, 40 hours earns $480 before deductions. Multiply the hourly rate by the hours: 40 times 12 is 480.",pic:[{"t":"pair","a":"40 hours","b":"$12/hour"}],eq:"40 hours x $12 = $480"},
 {skill:"hours",say:"Divide a pay target by the hourly rate. To earn $96 before deductions at $12 an hour takes 8 hours. Money available to spend may be lower after deductions.",pic:[{"t":"line","max":96,"jumps":8,"hop":12}],eq:"96 / 12 = 8 hours",
  check:{prompt:"A skateboard costs $84 and your wage is $12 an hour. How many hours must you work to earn exactly $84?",answer:7,options:[7,6,8,72],hint:"Divide the cost by the wage.",pic:{"t":"line","max":84,"jumps":7,"hop":12}}},
 {skill:"hours",say:"A lower wage means more hours for the same goal. The same $96 at $8 an hour takes 96 / 8 = 12 hours.",pic:[{"t":"pair","a":"$96 at $12/h","b":"$96 at $8/h"}],eq:"96 / 8 = 12 hours"},
 {skill:"compare",say:"To compare two jobs that take the same hours, compare the wages. The higher wage earns more, because every single hour pays more.",pic:[{"t":"pair","a":"$13/hour","b":"$10/hour"}],eq:"$13 an hour beats $10 an hour",
  check:{prompt:"For the same 8 hours, which wage earns more in all: $11 an hour or $14 an hour?",answer:"$14 an hour",options:["$14 an hour","$11 an hour","they earn the same"],hint:"Same hours, so the higher wage earns more.",pic:{"t":"pair","a":"$11/hour","b":"$14/hour"}}},
 {skill:"compare",say:"The gap between two wages grows with the hours. $13 an hour is $3 more than $10 an hour, and over 40 hours that is 40 x 3 = $120 more.",pic:[{"t":"pair","a":"40 hours","b":"$3/hour more"}],eq:"40 x 3 = $120 more"}],
 items(add){
  const _SKIP=new Set(["Your wage is $9 an hour and you work 7 hours. How many dollars do you earn?","A skateboard costs $84 and your wage is $12 an hour. How many hours must you work to earn exactly $84?","For the same 8 hours, which wage earns more in all: $11 an hour or $14 an hour?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=8;a<=16;a++)for(let b=4;b<=8;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("wage","Your wage is $"+(a)+" an hour and you work "+(b)+" hours on Saturday. How many dollars do you earn?",r,{"t":"pair","a":""+(b)+" hours","b":"$"+(a)+"/hour"},""+(b)+" hours at $"+(a)+" each is "+(b)+" x "+(a)+" = $"+(total)+".");}}
{const _P=[];
for(let a=8;a<=16;a++)for(let b=20;b<=40;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("wage","You work "+(b)+" hours in one week. At a wage of $"+(a)+" an hour, how many dollars is that week's pay?",r,{"t":"word","base":""+(b)+" x $"+(a)+""},""+(b)+" hours x $"+(a)+" an hour = $"+(total)+" for the week.");}}
{const _P=[];
for(let a=40;a<=400;a++)for(let b=8;b<=16;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("hours","You want a game that costs $"+(a)+". Your wage is $"+(b)+" an hour. How many hours must you work to earn exactly that much?",r,{"t":"word","base":"$"+(a)+" at $"+(b)+" an hour"},"$"+(a)+" divided by $"+(b)+" an hour is "+(r)+" hours.");}}
{const _P=[];
for(let a=8;a<=16;a++)for(let b=5;b<=30;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=b;
add("hours","Your wage is $"+(a)+" an hour. You are saving $"+(total)+" for a bike. How many hours of work will it take to earn all of it?",r,{"t":"word","base":"$"+(total)+" at $"+(a)+" an hour"},"$"+(a)+" an hour for "+(b)+" hours makes $"+(total)+", so it takes "+(b)+" hours.");}}
{const _P=[];
for(let a=7;a<=18;a++)for(let b=7;b<=18;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.max(a,b));
add("compare","Two jobs each take the same 10 hours. One wage is "+(a)+" dollars an hour and the other is "+(b)+" dollars an hour. Which wage, "+(a)+" or "+(b)+", earns more in all? Type just the number.",r,{"t":"pair","a":""+(a)+"/hour","b":""+(b)+"/hour"},"The hours are the same, so the higher wage earns more: "+(r)+" dollars an hour.",[r+' '+"dollars",r+"dollars"]);}}
{const _P=[];
for(let a=8;a<=18;a++)for(let b=7;b<=17;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("compare","One job's wage is $"+(a)+" an hour and another job's wage is $"+(b)+" an hour. How many more dollars does the better-paying job give for each hour?",r,{"t":"pair","a":"$"+(a)+"/hour","b":"$"+(b)+"/hour"},"$"+(a)+" - $"+(b)+" = $"+(r)+" more for every hour.");}}
{const _P=[];
for(let a=1;a<=6;a++)for(let b=5;b<=20;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("compare","Two jobs both take "+(b)+" hours. One wage is $"+(a)+" an hour higher than the other. How many more dollars does the better-paying job earn over those "+(b)+" hours?",r,{"t":"pair","a":""+(b)+" hours","b":"$"+(a)+"/hour"},"$"+(a)+" more each hour for "+(b)+" hours is "+(b)+" x "+(a)+" = $"+(total)+" more.");}}
 }};
