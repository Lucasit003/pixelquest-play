// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Find half, a quarter, or a tenth of a price, then subtract the discount to find the sale price. Use only the stated prices and discounts. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-discounts",subject:"finance",level:3,grade:5,standard:"Financial literacy: fractions of prices and comparing costs",
 title:"Sales and discounts",goal:"Find half, a quarter, or a tenth of a price, then subtract the discount to find the sale price. Use only the stated prices and discounts.",points:20,
 skills:{"half":"Half off","quarter":"A quarter off","tenth":"A tenth off","sale":"The price after a discount"},
 steps:[
 {skill:"half",say:"A discount is an amount taken off a price. Half off means saving half of the original price and paying the other half. Half of $24 is $12, so half off $24 leaves $12 to pay.",pic:[{"t":"bar","parts":2,"shade":1}],eq:"24 / 2 = 12 saved; 24 - 12 = 12 to pay"},
 {skill:"half",say:"Split an original $40 price into two equal $20 parts. With half off, one part is the saving and the other part is the sale price.",pic:[{"t":"pair","a":"Save $20","b":"Pay $20"}],eq:"40 - 20 = 20",
  check:{prompt:"A $30 game is half off. How many dollars is the sale price?",answer:15,options:[15,30,60,20],hint:"Half off leaves the other half to pay: split 30 into two equal parts.",pic:{"t":"bar","parts":2,"shade":1}}},
 {skill:"quarter",say:"A quarter off means saving one of four equal parts. Divide the original price by 4. One quarter of $32 is $8; the sale price is $32 minus $8, which is $24.",pic:[{"t":"bar","parts":4,"shade":1}],eq:"32 / 4 = 8 saved; 32 - 8 = 24 to pay"},
 {skill:"quarter",say:"The discount and the sale price are different amounts. With a quarter off, you save one quarter and still pay the other three quarters.",pic:[{"t":"bar","parts":4,"shade":3}],eq:"1 quarter saved; 3 quarters paid",
  check:{prompt:"A $48 kite has a quarter off. How many dollars do you save?",answer:12,options:[12,36,24,4],hint:"The saving is one quarter of 48: divide 48 by 4.",pic:{"t":"bar","parts":4,"shade":1}}},
 {skill:"tenth",say:"10% off means saving one tenth of the original price. Divide by 10: one tenth of $70 is $7. Take $7 away from $70 to get the $63 sale price.",pic:[{"t":"bar","parts":10,"shade":1}],eq:"70 / 10 = 7 saved; 70 - 7 = 63 to pay"},
 {skill:"sale",say:"If the discount is already given in dollars, subtract it directly. An $18 discount from an $80 price leaves $62 to pay.",pic:[{"t":"line","max":80,"from":80,"back":true,"hop":18,"jumps":1}],eq:"80 - 18 = 62",
  check:{prompt:"A bag originally costs $90. The discount is $14. How many dollars is the sale price?",answer:76,options:[76,104,14,86],hint:"Subtract the discount from the original price.",pic:{"t":"pair","a":"Original $90","b":"Save $14"}}},
 {skill:"sale",say:"You can also find the saving by subtracting the sale price from the original price. From $50 down to $35 is a $15 saving. Compare final prices and any other costs before choosing.",pic:[{"t":"pair","a":"Original $50","b":"Sale $35"}],eq:"50 - 35 = 15 saved"}],
 items(add){
  const _SKIP=new Set(["A $30 game is half off. How many dollars is the sale price?","A $48 kite has a quarter off. How many dollars do you save?","A bag originally costs $90. The discount is $14. How many dollars is the sale price?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=4;a<=200;a++)for(let b=2;b<=2;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("half","A game originally costs $"+(a)+". It is half off. How many dollars is the sale price?",r,{"t":"bar","parts":2,"shade":1},"Half off leaves half to pay: "+(a)+" / 2 = "+(r)+" dollars.");}}
{const _P=[];
for(let a=8;a<=400;a++)for(let b=4;b<=4;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("quarter","A kite originally costs $"+(a)+". The discount is a quarter of the price. How many dollars do you save?",r,{"t":"bar","parts":4,"shade":1},"A quarter is one of four equal parts: "+(a)+" / 4 = "+(r)+" dollars saved.");}}
{const _P=[];
for(let a=20;a<=990;a++)for(let b=10;b<=10;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("tenth","A backpack originally costs $"+(a)+". The sale takes 10% off. How many dollars do you save?",r,{"t":"bar","parts":10,"shade":1},"10% is one tenth: "+(a)+" / 10 = "+(r)+" dollars saved.");}}
{const _P=[];
for(let a=2;a<=99;a++)for(let b=9;b<=9;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("tenth","A tent originally costs $"+(a)+"0. The sale takes 10% off. How many dollars is the sale price?",r,{"t":"bar","parts":10,"shade":9},"One tenth of "+(a)+"0 is "+(a)+". Pay the other nine tenths: 9 x "+(a)+" = "+(r)+" dollars.");}}
{const _P=[];
for(let a=20;a<=99;a++)for(let b=2;b<=40;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("sale","A scooter originally costs $"+(a)+". A coupon takes $"+(b)+" off. How many dollars is the price after the coupon?",r,{"t":"pair","a":"Original $"+(a)+"","b":"Discount $"+(b)+""},"Original price minus discount: "+(a)+" - "+(b)+" = "+(r)+" dollars to pay.");}}
{const _P=[];
for(let a=20;a<=99;a++)for(let b=5;b<=90;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("sale","A jacket originally costs $"+(a)+". Its sale price is $"+(b)+". How many dollars do you save?",r,{"t":"pair","a":"Original $"+(a)+"","b":"Sale $"+(b)+""},"Original minus sale price: "+(a)+" - "+(b)+" = "+(r)+" dollars saved.");}}
 }};
