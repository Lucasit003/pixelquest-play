// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Use an imaginary 10% yearly rate to calculate one interest payment, the ending balance, and the starting savings. No fees, deposits, or withdrawals during the year. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-interest",subject:"finance",level:3,grade:5,standard:"Jump$tart 4-1",
 title:"Interest on savings",goal:"Use an imaginary 10% yearly rate to calculate one interest payment, the ending balance, and the starting savings. No fees, deposits, or withdrawals during the year.",points:20,
 skills:{"tenth":"Finding 10% interest","total":"The new total after a year","back":"From the interest back to the savings","more":"More saved, more interest"},
 steps:[
 {skill:"tenth",say:"Some savings accounts pay extra money called interest. For this lesson, imagine a fixed 10% yearly rate with interest added once at the end of one year. This is a practice rate, not a promise from a bank.",pic:[{"t":"bar","parts":10,"shade":1}],eq:"10% = 1 out of 10"},
 {skill:"tenth",say:"Keep the starting balance unchanged all year, with no fees or money added or taken out. At our practice rate, 10% means one tenth: 10% of $250 is $25.",pic:[{"t":"bar","parts":10,"shade":1}],eq:"250 / 10 = 25"},
 {skill:"tenth",say:"Divide by 10 to find one tenth. Ten equal parts of $30 make $300, so 10% of $300 is $30.",pic:[{"t":"bar","parts":10,"shade":1}],eq:"300 / 10 = 30",
  check:{"prompt":"You keep $200 in a savings account that pays 10% interest a year. How much interest do you earn in one year?","answer":20,"options":[20,2,200,220],"hint":"10% is one tenth. Divide 200 by 10.","pic":{"t":"bar","parts":10,"shade":1}}},
 {skill:"total",say:"After one year the bank adds the interest to what you saved. Saved $300, earned $30, so the account now holds $330.",pic:[{"t":"timeline","events":["save $300","one year passes","bank adds $30","$330 in the account"]}],eq:"300 + 30 = 330"},
 {skill:"total",say:"Two steps every time: find 10%, then add it on. Saved $480: 10% is $48, and $480 plus $48 is $528.",pic:[{"t":"bar","parts":10,"shade":1}],eq:"480 + 48 = 528",
  check:{"prompt":"You put $350 in a savings account paying 10% a year. How much is in the account after one year?","answer":385,"options":[385,35,353,450],"hint":"Find 10% of 350, then add it to 350.","pic":{"t":"pair","a":"Start $350","b":"10% / year"}}},
 {skill:"back",say:"You can work backwards too. If one tenth is $25, the full starting balance is ten times as much: 10 times $25 is $250.",pic:[{"t":"pair","a":"One tenth $25","b":"Whole $250"}],eq:"25 x 10 = 250"},
 {skill:"more",say:"With the same yearly rate and the same time saved, a larger starting balance earns more interest. At 10% for one year, $600 earns $60 and $400 earns $40.",pic:[{"t":"pair","a":"$600 → $60","b":"$400 → $40"}],eq:"60 is more than 40",
  check:{prompt:"Two savers each get 10% interest a year. Which earns more interest: $700 saved or $500 saved?",answer:"$700 saved",options:["$700 saved","$500 saved","they earn the same"],hint:"10% of a bigger amount is a bigger amount.",pic:{"t":"pair","a":"$700 saved","b":"$500 saved"}}}],
 items(add){
  const _SKIP=new Set(["You keep $300 in a savings account that pays 10% interest a year. How much interest do you earn in one year?","You put $480 in a savings account paying 10% a year. How much is in the account after one year?","Two savers each get 10% interest a year. Which earns more interest: $700 saved or $500 saved?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=20;a<=1000;a++)for(let b=10;b<=10;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("tenth","You keep $"+(a)+" in a savings account. The bank pays 10% interest a year. How much interest do you earn in one year?",r,{"t":"bar","parts":10,"shade":1},"10% is one tenth. $"+(a)+" divided by 10 is $"+(r)+", so the bank pays $"+(r)+" interest.");}}
{const _P=[];
for(let a=2;a<=99;a++)for(let b=11;b<=11;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("total","You save $"+(a)+"0 in an account that pays 10% interest a year. How much money is in the account after one year?",r,{"t":"pair","a":"Start $"+(a)+"0","b":"10% / year"},"10% of $"+(a)+"0 is $"+(a)+". Add it on: $"+(a)+"0 + $"+(a)+" = $"+(r)+".");}}
{const _P=[];
for(let a=2;a<=99;a++)for(let b=10;b<=10;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("back","Your savings account pays 10% interest a year, and this year the bank paid you $"+(a)+" in interest. How much had you saved at the start of the year?",r,{"t":"pair","a":"10% = $"+(a)+"","b":null},"10% is one tenth, so the savings were ten times the interest: $"+(a)+" x 10 = $"+(r)+".");}}
{const _P=[];
for(let a=10;a<=99;a++)for(let b=10;b<=99;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,100),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.max(a,b));
add("more","Two savings accounts both pay 10% interest a year. One holds "+(a)+" dollars and the other holds "+(b)+" dollars. Which amount earns more interest? Type the starting amount in dollars.",r,{"t":"pair","a":"$"+(a)+"","b":"$"+(b)+""},"10% of more money is more interest, so the bigger amount, "+(r)+" dollars, earns more.",[r+' '+"dollars",r+"dollars"]);}}
 }};
