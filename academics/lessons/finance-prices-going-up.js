// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Work out a new price after it rises by an amount or by 10%, and how many you can still afford. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
/* 25 Oct (learning-loop playtest): a fixed stride that divides an inner loop's length only ever picked some of its values (every "x 2" or "x 6", never "x 7"). The stride picks stay exactly as they were, and half as many again are added, drawn by a fixed-seed hash (the same items every load) so every value turns up. */
const _spread=(L,s,n)=>{const o=[];for(let i=0;i<L;i+=s)o.push(i);const seen=new Set(o),want=o.length+Math.ceil(n/2);let h=2654435761;for(let k=1;o.length<want&&k<=8*L;k++){h=Math.imul(h^h>>>15,2246822519)+k>>>0;const i=h%L;if(!seen.has(i)){seen.add(i);o.push(i);}}return o;};
export default {
 id:"finance-e-prices-going-up",subject:"finance",level:3,grade:5,standard:"Jump$tart 4-1",
 title:"Prices going up",goal:"Work out a new price after it rises by an amount or by 10%, and how many you can still afford.",points:20,
 skills:{"rise":"A price going up by an amount","tenth":"A price going up by 10%","afford":"How many you can still buy"},
 steps:[
 {skill:"rise",say:"Prices can rise, fall, or stay the same. This lesson studies a rise: the new price is higher than the old one. These are made-up prices for practice.",pic:[{"t":"timeline","events":["comic 30 cents","comic 40 cents","comic 50 cents"]}]},
 {skill:"rise",say:"A comic cost 40 cents. Its price goes up by 5 cents, so the new price is the old price plus the rise: 45 cents.",pic:[{"t":"line","max":50,"hop":5,"jumps":1,"from":40,"mark":45}],eq:"40 + 5 = 45 cents",
  check:{prompt:"A sticker cost 60 cents. The price goes up by 8 cents. What does it cost now?",answer:68,options:[68,52,78,608],hint:"New price is the old price plus the rise.",pic:{"t":"pair","a":"Was 60 cents","b":"Up 8 cents"}}},
 {skill:"rise",say:"To find the size of a rise, subtract the old price from the new one. A ticket that went from 8 dollars to 12 dollars rose by 4 dollars.",pic:[{"t":"line","max":13,"hop":4,"jumps":1,"from":8,"mark":12}],eq:"12 - 8 = 4 dollars"},
 {skill:"tenth",say:"A price rise can be given as a percentage. 10% means one tenth of the old price, so divide the old price by 10 to find the amount of a 10% rise.",pic:[{"t":"bar","parts":10,"shade":1}],eq:"10% of 50 = 50 / 10 = 5"},
 {skill:"tenth",say:"A game costs 50 dollars. Ten hops of 5 make 50, and 10% is one more hop of 5, so after a 10% rise the game costs 55 dollars.",pic:[{"t":"line","max":60,"hop":5,"jumps":1,"from":50,"mark":55}],eq:"50 + 5 = 55 dollars",
  check:{prompt:"A bike costs 70 dollars and its price goes up by 10%. What is the new price in dollars?",answer:77,options:[77,80,71,63],hint:"10% of 70 is 70 divided by 10; add that on.",pic:{"t":"pair","a":"Old price $70","b":"10% rise"}}},
 {skill:"afford",say:"When a price goes up, the same money buys less. With 60 cents you could buy six 10-cent stickers, but at 12 cents each you can only buy five.",pic:[{"t":"coins","coins":["d","d","d","d","d","d"],"count":true}],eq:"60 / 12 = 5 stickers",
  check:{prompt:"Erasers now cost 9 cents each. You have 84 cents. How many erasers can you buy?",answer:9,options:[9,10,8,76],hint:"How many 9s fit into 84?",pic:{"t":"pair","a":"84 cents","b":"9 cents each"}}},
 {skill:"afford",say:"Divide your money by the new price. The whole-number part is how many you can buy, and anything left over is change you keep.",pic:[{"t":"rule","cond":"Enough for another?","yes":"one more fits","no":"keep remainder","input":"65 cents; 12 cents each"}],eq:"65 / 12 = 5, 5 cents left"},
 {skill:"rise",say:"Add the rise to the old price to get the new price. Subtract old from new to find the rise. Divide by 10 to find a 10% rise.",pic:[{"t":"timeline","events":["old price","plus the rise","new price"]}]}],
 items(add){
  const _SKIP=new Set(["A sticker cost 60 cents. The price goes up by 8 cents. What does it cost now?","A bike costs 70 dollars and its price goes up by 10%. What is the new price in dollars?","Erasers now cost 9 cents each. You have 84 cents. How many erasers can you buy?","A snack cost 44 cents. Its price goes up by 27 cents. What does the snack cost now?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=20;a<=95;a++)for(let b=3;b<=30;b++)if(a+b<100)_P.push([a,b]);
const _n=Math.min(_P.length,60),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("rise","A snack cost "+(a)+" cents. Its price goes up by "+(b)+" cents. What does the snack cost now?",r,{"t":"pair","a":"was "+(a)+" cents","b":"up "+(b)+" cents"},"New price is the old price plus the rise: "+(a)+" + "+(b)+" = "+(r)+" cents.");}}
{const _P=[];
for(let a=12;a<=60;a++)for(let b=5;b<=50;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,60),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("rise","A ticket used to cost "+(b)+" dollars. Now it costs "+(a)+" dollars. By how many dollars did the price go up?",r,{"t":"pair","a":"Was $"+(b)+"","b":"Now $"+(a)+""},"The rise is the new price minus the old: "+(a)+" - "+(b)+" = "+(r)+" dollars.");}}
{const _P=[];
for(let a=20;a<=990;a++)for(let b=10;b<=10;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,60),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("tenth","A jacket costs "+(a)+" dollars. Its price is going up by 10%. How many dollars is the rise?",r,{"t":"bar","parts":10,"shade":1},"10% is one tenth, so the rise is "+(a)+" / 10 = "+(r)+" dollars.");}}
{const _P=[];
for(let a=2;a<=60;a++)for(let b=11;b<=11;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,60),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("tenth","A bike costs "+(a)+"0 dollars. The price goes up by 10%. What is the new price in dollars?",r,{"t":"pair","a":"Old $"+(a)+"0","b":"10% rise"},"10% of "+(a)+"0 is "+(a)+", and "+(a)+"0 + "+(a)+" = "+(r)+" dollars.");}}
{const _P=[];
for(let a=25;a<=99;a++)for(let b=6;b<=15;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,60),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=Math.floor(a/b);
add("afford","After a price rise, pencils cost "+(b)+" cents each. You have "+(a)+" cents. How many pencils can you afford?",r,{"t":"pair","a":""+(a)+" cents","b":""+(b)+" cents each"},"Count how many "+(b)+"s fit inside "+(a)+": "+(r)+". So you can afford "+(r)+" pencils and no more.");}}
{const _P=[];
for(let a=25;a<=99;a++)for(let b=6;b<=15;b++)if(a-b>0&&b!==0&&a%b!==0)_P.push([a,b]);
const _n=Math.min(_P.length,50),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=a%b;
add("afford","Erasers now cost "+(b)+" cents each. You have "+(a)+" cents and buy as many as you can. How many cents are left over?",r,{"t":"pair","a":""+(a)+" cents","b":""+(b)+" cents each"},"Take away "+(b)+" cents for each eraser until less than "+(b)+" is left. What remains of "+(a)+" is "+(r)+" cents.");}}
 }};
