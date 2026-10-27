// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Add purchase prices and stated extras, calculate repeated costs, and find totals over a stated period. Count only the costs named in each example. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-real-cost",subject:"finance",level:3,grade:4,standard:"Jump$tart 1-4",
 title:"What things really cost",goal:"Add purchase prices and stated extras, calculate repeated costs, and find totals over a stated period. Count only the costs named in each example.",points:20,
 skills:{"price":"The price plus the extra","repeat":"Costs that come back every week","total":"The real cost over weeks","after":"Working back to the extras"},
 steps:[
 {skill:"price",say:"A price tag may leave out extras. This toy robot costs $20 and needs a $4 battery pack sold separately. In this lesson, total cost means the named costs over the stated time.",pic:[{"t":"pair","a":"$20 robot","b":"$4 batteries"}]},
 {skill:"price",say:"Add the extra to the price to see what it costs to take home and switch on. $20 for the robot plus $4 for batteries is $24.",pic:[{"t":"pair","a":"$20 robot","b":"$4 batteries"}],eq:"20 + 4 = 24",
  check:{prompt:"A kite costs $15 and the string it needs costs $3. How many dollars does it cost to get the kite flying?",answer:18,options:[18,15,12,45],hint:"Add the price and the extra.",pic:{"t":"pair","a":"$15 kite","b":"$3 string"}}},
 {skill:"repeat",say:"Some costs come back every week. A hamster eats $3 of food a week, so each basket here is one week of food. After 6 weeks that is $18.",pic:[{"t":"groups","n":6,"k":3}],eq:"3 x 6 = 18"},
 {skill:"repeat",say:"Multiply the weekly cost by the number of weeks. A cost that looks small grows every time it repeats: $4 a week is $24 after 6 weeks.",pic:[{"t":"line","max":24,"hop":4,"jumps":6,"solve":true}],eq:"4 x 6 = 24",
  check:{prompt:"A goldfish's food costs $2 every week. How many dollars is that over 8 weeks?",answer:16,options:[16,10,6,28],hint:"Multiply the weekly cost by the number of weeks.",pic:{"t":"line","max":16,"hop":2,"jumps":8}}},
 {skill:"total",say:"Count every named cost for the period. A $10 fish plus $2 of food each week for 8 weeks totals $26 for the fish and food only. A tank, supplies, and other care would cost extra.",pic:[{"t":"timeline","events":["fish $10","food $2/week","8 weeks","named costs $26"]}],eq:"10 + (2 x 8) = 26"},
 {skill:"total",say:"Calculate repeated costs first, then add the price. A $12 toy plus $3 of batteries each week for 5 weeks totals $27. Compare the same time period and include all costs being compared.",pic:[{"t":"groups","n":5,"k":3}],eq:"12 + (3 x 5) = 27"},
 {skill:"after",say:"You can work backwards too. If $30 has been spent on a pet in all and the pet itself cost $18, then $12 went on its food and care.",pic:[{"t":"pair","a":"$30 in all","b":"$18 pet"}],eq:"30 - 18 = 12",
  check:{prompt:"You have spent $45 on a pet in all. The pet itself cost $32. How many dollars went on its food and care?",answer:13,options:[13,77,32,19],hint:"Take the pet's price away from the total spent.",pic:{"t":"pair","a":"$45 in all","b":"$32 pet"}}}],
 items(add){
  const _SKIP=new Set(["A kite costs $15 and the string it needs costs $3. How many dollars does it cost to get the kite flying?","A goldfish's food costs $2 every week. How many dollars is that over 8 weeks?","You have spent $45 on a pet in all. The pet itself cost $32. How many dollars went on its food and care?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=10;a<=60;a++)for(let b=2;b<=9;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,36),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("price","A toy robot costs $"+(a)+" and the batteries it needs cost $"+(b)+". How many dollars does it cost to take home and switch on?",r,{"t":"pair","a":"$"+(a)+" robot","b":"$"+(b)+" batteries"},"$"+(a)+" for the robot plus $"+(b)+" for the batteries is $"+(r)+".");}}
{const _P=[];
for(let a=20;a<=80;a++)for(let b=5;b<=15;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,40),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=b;
add("after","A scooter costs $"+(a)+". With the helmet it needs, the bill came to $"+(total)+". How many dollars did the helmet cost?",r,{"t":"pair","a":"$"+(a)+" scooter","b":"$"+(total)+" in all"},"$"+(total)+" in all take away the $"+(a)+" scooter leaves $"+(r)+" for the helmet.");}}
{const _P=[];
for(let a=2;a<=9;a++)for(let b=2;b<=12;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,40),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("repeat","A hamster's food costs $"+(a)+" every week. How many dollars does its food cost over "+(b)+" weeks?",r,{"t":"pair","a":"$"+(a)+"/week","b":""+(b)+" weeks"},"$"+(a)+" a week for "+(b)+" weeks is $"+(r)+".");}}
{const _P=[];
for(let a=4;a<=60;a++)for(let b=2;b<=10;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,30),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("repeat","Over "+(b)+" weeks, a rabbit's hay cost $"+(a)+" in all. How many dollars did the hay cost each week?",r,{"t":"pair","a":"$"+(a)+" total","b":""+(b)+" weeks"},"$"+(a)+" shared over "+(b)+" weeks is $"+(r)+" a week.");}}
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=9;b++)for(let c=2;c<=9;c++)if(true&&a+b*c!==(a+b)*c)_P.push([a,b,c]);
const _n=Math.min(_P.length,45),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c]=_P[_i],r=a+b*c,slip=(a+b)*c;
add("total","A pet fish costs $"+(a)+". Its food costs $"+(b)+" every week. Counting only the fish and food, how many dollars are spent after "+(c)+" weeks?",r,{"t":"groups","n":c,"k":b},"First the food, $"+(b)+" a week for "+(c)+" weeks, then add the $"+(a)+" price: "+(a)+" + ("+(b)+" x "+(c)+") = "+(r)+".");}}
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=9;b++)for(let c=2;c<=9;c++)if(true&&a+b*c!==(a+b)*c)_P.push([a,b,c]);
const _n=Math.min(_P.length,40),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c]=_P[_i],r=a+b*c,slip=(a+b)*c;
add("total","A toy car costs $"+(a)+" and needs $"+(b)+" of batteries every week. Counting only the toy and batteries, how many dollars are spent after "+(c)+" weeks?",r,{"t":"groups","n":c,"k":b},""+(c)+" weeks of batteries at $"+(b)+" each, plus the $"+(a)+" price: "+(a)+" + ("+(b)+" x "+(c)+") = "+(r)+".");}}
{const _P=[];
for(let a=20;a<=60;a++)for(let b=5;b<=19;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,36),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("after","You have spent $"+(a)+" on a pet in all. The pet itself cost $"+(b)+". How many dollars went on its food and care?",r,{"t":"pair","a":"$"+(a)+" in all","b":"$"+(b)+" pet"},"$"+(a)+" in all take away the $"+(b)+" pet leaves $"+(r)+" for food and care.");}}
 }};
