// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Work out the price of one item from the price of a pack, and use it to compare deals. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-unit-price",subject:"finance",level:3,grade:5,standard:"Jump$tart 2-3",
 title:"What one costs",goal:"Work out the price of one item from the price of a pack, and use it to compare deals.",points:20,
 skills:{"one":"The price of one","many":"The price of several","pack":"How many in the pack"},
 steps:[
 {skill:"one",say:"A shop sells things in packs.  To compare two packs fairly, work out what one item costs.",pic:[{"t":"groups","n":4,"k":3}],eq:"pack price / how many = one"},
 {skill:"one",say:"A pack of 6 pencils costs 30 cents.  One pencil costs 30 divided by 6, which is 5 cents.",pic:[{"t":"coins","coins":["n"],"count":true}],eq:"30 / 6 = 5 cents each",
  check:{"prompt":"A pack of 4 erasers costs 28 cents. What does one eraser cost?","answer":7,"options":[7,4,24,112],"hint":"Share 28 between 4.","pic":{"t":"groups","n":4,"k":1}}},
 {skill:"many",say:"Once you know one, you can price any number.  Four pencils at 5 cents each is 20 cents.",pic:[{"t":"coins","coins":["n","n","n","n"],"count":true}],eq:"4 x 5 = 20 cents",
  check:{prompt:"Pencils cost 5 cents each. What do 7 cost?",answer:35,options:[35,12,30,57],hint:"7 lots of 5.",pic:{"t":"coins","coins":["n","n","n"],"count":true}}},
 {skill:"pack",say:"It also works backwards.  If the pack cost 30 cents and each one is 5 cents, the pack held 6.",pic:[{"t":"groups","n":6,"k":1}],eq:"30 / 5 = 6 in the pack"},
 {skill:"one",say:"Now the deals can be compared: 5 cents each beats 6 cents each, however big the packs are.",pic:[{"t":"coins","coins":["n","p"],"count":true}],eq:"5 cents each is cheaper",
  check:{"prompt":"One shop sells pens at 9 cents each, another at 7 cents each. Which is the better deal?","answer":"7 cents each","options":["7 cents each","9 cents each"],"hint":"Cheaper for the same thing is the better deal.","pic":{"t":"pair","a":"9¢ each","b":"7¢ each"}}},
 {skill:"many",say:"Price per item first, then decide.  That is how to tell a real bargain from a big box.",pic:[{"t":"groups","n":3,"k":4}]}],
 items(add){
  const _SKIP=new Set(["A pack of 4 erasers costs 20 cents. What does one eraser cost?","Pencils cost 5 cents each. What do 7 cost?","One shop sells pens at 8 cents each, another at 6 cents each. Which is the better deal?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=12;a<=99;a++)for(let b=2;b<=12;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("one","A pack of "+(b)+" costs "+(a)+" cents. What does one cost?",r,{"t":"groups","n":b,"k":1},""+(a)+" cents shared between "+(b)+" is "+(r)+" cents each.");}}
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=20;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("many","One costs "+(b)+" cents. What do "+(a)+" of them cost?",r,{"t":"groups","n":a,"k":1},""+(a)+" lots of "+(b)+" cents is "+(r)+" cents.");}}
{const _P=[];
for(let a=12;a<=99;a++)for(let b=2;b<=12;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("pack","A pack costs "+(a)+" cents and each one in it costs "+(b)+" cents. How many are in the pack?",r,{"t":"groups","n":r,"k":1},""+(a)+" divided by "+(b)+" is "+(r)+", so the pack holds "+(r)+".");}}
 }};
