// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Understand that borrowed money is owed, split it into equal payments, and track what is still owed. In these examples there are no interest charges or fees. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-borrowing",subject:"finance",level:3,grade:3,standard:"Jump$tart Credit and Debt (by end of grade 5)",
 title:"Borrowing and paying back",goal:"Understand that borrowed money is owed, split it into equal payments, and track what is still owed. In these examples there are no interest charges or fees.",points:20,
 skills:{"owe":"Borrowing means owing","each":"Equal payments","left":"What is still owed","count":"Payments left"},
 steps:[
 {skill:"owe",say:"Borrowing means receiving money that you agree to pay back. In this lesson there are no interest charges or fees: borrow $10 and you owe $10.",pic:[{"t":"groups","n":1,"k":10}]},
 {skill:"owe",say:"Borrow again and the amount you owe grows. Borrow $10, then $5 more, and now you owe $15.",pic:[{"t":"pair","a":"Borrow $10","b":"Borrow $5"}],eq:"10 + 5 = 15 owed",
  check:{prompt:"You borrow $8 from your brother and $6 more the next day. How much do you owe in all?",answer:14,options:[14,2,12,16],hint:"Add both amounts you borrowed.",pic:{"t":"pair","a":"$8 then $6","b":null}}},
 {skill:"each",say:"Paying back in equal payments means splitting what you owe into parts of the same size. $12 owed in 3 payments is $4 each.",pic:[{"t":"groups","n":3,"k":4}],eq:"12 / 3 = 4 each"},
 {skill:"each",say:"With one payment each week and no extra charges, more equal payments make each smaller but take more weeks. $12 in 4 weekly payments is $3 each.",pic:[{"t":"groups","n":4,"k":3}],eq:"12 / 4 = 3 each",
  check:{prompt:"You owe $20 for a scooter ride and pay it back in 4 equal payments. How much is each?",answer:5,options:[5,4,16,24],hint:"Split 20 into 4 equal parts.",pic:{"t":"groups","n":4,"k":5}}},
 {skill:"left",say:"After a payment you still owe the rest. Owe $20, pay back $8, and $12 is still owed.",pic:[{"t":"line","max":20,"from":20,"back":true,"jumps":1,"hop":8}],eq:"20 - 8 = 12 still owed"},
 {skill:"count",say:"To count the payments left, see how many times one payment fits into what you still owe. $12 owed at $4 a payment is 3 more payments.",pic:[{"t":"line","max":12,"jumps":3,"hop":4}],eq:"12 / 4 = 3 payments",
  check:{"prompt":"You still owe $20 for a kite and pay $10 each time. How many payments are left?","answer":2,"options":[2,10,20,30],"hint":"Count how many tens make 20.","pic":{"t":"line","max":20,"jumps":2,"hop":10}}},
 {skill:"left",say:"When what you owe reaches zero, the debt is paid off and you owe nothing more.",pic:[{"t":"line","max":12,"jumps":3,"hop":4,"from":12,"back":true}],eq:"12 - 4 - 4 - 4 = 0 owed"}],
 items(add){
  const _SKIP=new Set(["You borrow $8 from your brother and $6 more the next day. How much do you owe in all?","You owe $20 for a scooter ride and pay it back in 4 equal payments. How much is each?","You still owe $15 for a kite and pay $5 each time. How many payments are left?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=2;a<=45;a++)for(let b=2;b<=45;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("owe","You borrow $"+(a)+" from a friend on Monday and $"+(b)+" more on Friday. How much do you owe in all?",r,{"t":"pair","a":"$"+(a)+" then $"+(b)+"","b":null,"fill":"owe $"+(r)+""},"Borrowed money is owed: "+(a)+" + "+(b)+" = "+(r)+", so you owe $"+(r)+".");}}
{const _P=[];
for(let a=4;a<=60;a++)for(let b=2;b<=9;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("each","You owe $"+(a)+" and pay it back in "+(b)+" equal payments. How much is each payment?",r,{"t":"pair","a":"Owe $"+(a)+"","b":""+(b)+" payments"},""+(a)+" split into "+(b)+" equal payments is $"+(r)+" each.");}}
{const _P=[];
for(let a=10;a<=60;a++)for(let b=1;b<=59;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("left","You borrowed $"+(a)+" and have paid back $"+(b)+" so far. How much do you still owe?",r,{"t":"line","max":a,"from":a,"back":true,"jumps":1,"hop":b},""+(a)+" - "+(b)+" = "+(r)+", so $"+(r)+" is still owed.");}}
{const _P=[];
for(let a=4;a<=60;a++)for(let b=2;b<=10;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("count","You still owe $"+(a)+" and each payment is $"+(b)+". How many payments are left?",r,{"t":"pair","a":"Owe $"+(a)+"","b":"Pay $"+(b)+""},""+(a)+" divided by "+(b)+" is "+(r)+", so "+(r)+" more payments.");}}
 }};
