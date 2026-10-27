// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Work out what the same amount saved every week adds up to, and how long a goal takes. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-saving-each-week",subject:"finance",level:3,grade:3,standard:"Jump$tart 1-4",
 title:"Saving week by week",goal:"Work out what the same amount saved every week adds up to, and how long a goal takes.",points:20,
 skills:{"total":"What it adds up to","weeks":"How many weeks","left":"How much is left to save"},
 steps:[
 {skill:"total",say:"Saving the same amount every week adds up faster than it looks.",pic:[{"t":"coins","coins":["q","d","n"],"count":true}]},
 {skill:"total",say:"Save $3 a week.  After 4 weeks that is 3 four times, which is $12.",pic:[{"t":"line","max":12,"jumps":4,"hop":3}],eq:"3 x 4 = 12",
  check:{prompt:"You save $4 every week. How much have you saved after 5 weeks?",answer:20,options:[20,9,16,25],hint:"4 five times.",pic:{"t":"word","base":"$4 a week"}}},
 {skill:"weeks",say:"Turn it around to find the weeks.  A $20 goal at $5 a week takes 4 weeks, because 5 goes into 20 four times.",pic:[{"t":"line","max":20,"jumps":4,"hop":5}],eq:"20 divided by 5 = 4 weeks"},
 {skill:"weeks",say:"The bigger the amount you put away each week, the fewer weeks you wait.",pic:[{"t":"line","max":20,"jumps":2,"hop":10}],eq:"20 divided by 10 = 2 weeks",
  check:{prompt:"A game costs $24 and you save $6 a week. How many weeks until you can buy it?",answer:4,options:[4,3,6,18],hint:"How many 6s fit into 24?",pic:{"t":"word","base":"$24"}}},
 {skill:"left",say:"To see how much is still to come, take what you have saved away from the price.",pic:[{"t":"bar","parts":30,"shade":18}],eq:"30 - 18 = 12 left"},
 {skill:"total",say:"Same amount each week, times the weeks, and you know exactly where you stand.",pic:[{"t":"line","max":12,"jumps":4,"hop":3}],
  check:{prompt:"A scooter costs $40 and you have saved $25. How much more do you need?",answer:15,options:[15,10,20,65],hint:"Take 25 away from 40.",pic:{"t":"word","base":"$40 - $25"}}}],
 items(add){
  const _SKIP=new Set(["You save $4 every week. How much have you saved after 5 weeks?","A game costs $24 and you save $6 a week. How many weeks until you can buy it?","A scooter costs $40 and you have saved $25. How much more do you need?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=12;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,130),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("total","You save $"+(a)+" every week. How much have you saved after "+(b)+" weeks?",r,{"t":"word","base":"$"+(a)+" a week"},"$"+(a)+" a week for "+(b)+" weeks is "+(a)+" x "+(b)+" = $"+(r)+".");}}
{const _P=[];
for(let a=10;a<=99;a++)for(let b=2;b<=10;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,130),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("weeks","Something costs $"+(a)+" and you save $"+(b)+" every week. How many weeks until you have enough?",r,{"t":"word","base":"$"+(a)+""},"$"+(b)+" goes into $"+(a)+" exactly "+(r)+" times, so it takes "+(r)+" weeks.");}}
{const _P=[];
for(let a=20;a<=99;a++)for(let b=5;b<=90;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,130),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("left","Something costs $"+(a)+" and you have saved $"+(b)+". How much more do you need?",r,{"t":"word","base":"$"+(a)+" - $"+(b)+""},"$"+(a)+" take away $"+(b)+" leaves $"+(r)+" still to save.");}}
 }};
