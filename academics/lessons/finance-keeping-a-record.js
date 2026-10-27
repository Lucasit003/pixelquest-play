// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Write down money in and money out, and work out the running balance line by line. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
/* 25 Oct (learning-loop playtest): a fixed stride that divides an inner loop's length only ever picked some of its values (every "x 2" or "x 6", never "x 7"). The stride picks stay exactly as they were, and half as many again are added, drawn by a fixed-seed hash (the same items every load) so every value turns up. */
const _spread=(L,s,n)=>{const o=[];for(let i=0;i<L;i+=s)o.push(i);const seen=new Set(o),want=o.length+Math.ceil(n/2);let h=2654435761;for(let k=1;o.length<want&&k<=8*L;k++){h=Math.imul(h^h>>>15,2246822519)+k>>>0;const i=h%L;if(!seen.has(i)){seen.add(i);o.push(i);}}return o;};
export default {
 id:"finance-e-keeping-a-record",subject:"finance",level:3,grade:3,standard:"Jump$tart 2-1",
 title:"Keeping a record",goal:"Write down money in and money out, and work out the running balance line by line.",points:20,
 skills:{"in":"Writing money in","out":"Writing money out","balance":"The running balance"},
 steps:[
 {skill:"in",say:"A money record is a list of lines. Each line says what came in or went out, and the balance is how much you have right now.",pic:[{"t":"timeline","events":["start $5","in $3","balance $8"]}],eq:"5 + 3 = 8"},
 {skill:"in",say:"Money in is money you get: allowance, a gift, or pay for a chore. Write it in the In column and add it to the balance.",pic:[{"t":"timeline","events":["balance $10","in $4 gift","balance $14"]}],eq:"10 + 4 = 14",
  check:{prompt:"Your record shows a balance of $10. You write $4 in the In column for a gift. What is the new balance?",answer:14,options:[14,6,4,10],hint:"Money in is added to the balance.",pic:{"t":"timeline","events":["balance $10","in $4 gift",null],"fill":"$14"}}},
 {skill:"out",say:"Money out is money you spend or give away. Write it in the Out column and take it away from the balance.",pic:[{"t":"timeline","events":["balance $14","out $6 snack","balance $8"]}],eq:"14 - 6 = 8",
  check:{prompt:"Your record shows a balance of $14. You write $6 in the Out column for a snack. What is the new balance?",answer:8,options:[8,20,6,14],hint:"Money out is taken away from the balance.",pic:{"t":"timeline","events":["balance $14","out $6 snack",null],"fill":"$8"}}},
 {skill:"out",say:"The record works backwards too. If the balance was $20 before a line and $12 after it, that line took $8 out.",pic:[{"t":"timeline","events":["balance $20",null,"balance $12"],"fill":"out $8","solve":true}],eq:"20 - 12 = 8"},
 {skill:"balance",say:"Every new line starts from the balance above it. Start at $0, write $9 in, then $4 out, and the balance runs 0, 9, 5.",pic:[{"t":"timeline","events":["start $0","in $9","out $4","balance $5"]}],eq:"0 + 9 - 4 = 5",
  check:{prompt:"A record starts at $0. Line one is $12 in. Line two is $5 out. What is the balance at the end?",answer:7,options:[7,17,12,5],hint:"Add the money in, then take away the money out.",pic:{"t":"timeline","events":["start $0","in $12","out $5",null],"fill":"$7"}}},
 {skill:"balance",say:"A record can run for many lines in a row, and each one starts from the balance the line before left behind. Start at $10, write $5 in, then $3 out, then $2 in: the balance runs 10, 15, 12, 14.",pic:[{"t":"timeline","events":["start $10","in $5","out $3","in $2","balance $14"]}],eq:"10 + 5 - 3 + 2 = 14"},
 {skill:"balance",say:"Compare the last balance with the money you have. If they differ, check for missing entries, copied amounts, or arithmetic mistakes. A matching balance is a useful check, but you should still review the entries.",pic:[{"t":"rule","cond":"Balances match?","yes":"review entries","no":"check for errors"}]}],
 items(add){
  const _SKIP=new Set(["Your record shows a balance of $10. You write $4 in the In column for a gift. What is the new balance?","Your record shows a balance of $14. You write $6 in the Out column for a snack. What is the new balance?","A record starts at $0. Line one is $12 in. Line two is $5 out. What is the balance at the end?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=5;a<=60;a++)for(let b=2;b<=39;b++)if(a+b<100)_P.push([a,b]);
const _n=Math.min(_P.length,60),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("in","Your record shows a balance of $"+(a)+". You write $"+(b)+" in the In column. What is the new balance?",r,{"t":"timeline","events":["balance $"+(a)+"","in $"+(b)+"",null],"fill":"$"+(r)+""},"Money in is added: $"+(a)+" plus $"+(b)+" makes a balance of $"+(r)+".");}}
{const _P=[];
for(let a=5;a<=60;a++)for(let b=2;b<=39;b++)if(a+b<100)_P.push([a,b]);
const _n=Math.min(_P.length,50),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=b;
add("in","The balance on your record was $"+(a)+". After one line in the In column it is $"+(total)+". How much came in?",r,{"t":"timeline","events":["balance $"+(a)+"",null,"balance $"+(total)+""],"fill":"in $"+(r)+""},"$"+(total)+" take away $"+(a)+" is $"+(r)+", so $"+(r)+" came in.");}}
{const _P=[];
for(let a=10;a<=99;a++)for(let b=2;b<=60;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,60),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("out","Your record shows a balance of $"+(a)+". You write $"+(b)+" in the Out column. What is the new balance?",r,{"t":"timeline","events":["balance $"+(a)+"","out $"+(b)+"",null],"fill":"$"+(r)+""},"Money out is taken away: $"+(a)+" minus $"+(b)+" leaves a balance of $"+(r)+".");}}
{const _P=[];
for(let a=10;a<=99;a++)for(let b=2;b<=60;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,50),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=b;
add("out","The balance on your record was $"+(a)+". After one line in the Out column it is $"+(total)+". How much went out?",r,{"t":"timeline","events":["balance $"+(a)+"",null,"balance $"+(total)+""],"fill":"out $"+(r)+""},"The balance fell from $"+(a)+" to $"+(total)+", a drop of $"+(r)+", so $"+(r)+" went out.");}}
{const _P=[];
for(let a=10;a<=99;a++)for(let b=2;b<=60;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,60),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("balance","A record starts at $0. The first line is $"+(a)+" in and the second line is $"+(b)+" out. What is the balance after both lines?",r,{"t":"timeline","events":["start $0","in $"+(a)+"","out $"+(b)+"",null],"fill":"$"+(r)+""},"0 plus $"+(a)+" is $"+(a)+", then $"+(a)+" minus $"+(b)+" is $"+(r)+".");}}
{const _P=[];
for(let a=5;a<=60;a++)for(let b=2;b<=39;b++)if(a+b<100)_P.push([a,b]);
const _n=Math.min(_P.length,50),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("balance","A record starts at $0. The first line is $"+(a)+" in and the second line is $"+(b)+" in. What is the balance after both lines?",r,{"t":"timeline","events":["start $0","in $"+(a)+"","in $"+(b)+"",null],"fill":"$"+(r)+""},"0 plus $"+(a)+" is $"+(a)+", then $"+(a)+" plus $"+(b)+" is $"+(r)+".");}}
{const _P=[];
for(let a=0;a<=20;a++)for(let b=2;b<=9;b++)for(let n=2;n<=9;n++)_P.push([a,b,n]);
const _n=Math.min(_P.length,60),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b,n]=_P[_i],end=a+b*n,r=end;
add("balance","Your record starts at $"+(a)+". Every week for "+(n)+" weeks you write $"+(b)+" in. What is the balance at the end?",r,{"t":"timeline","events":["start $"+(a)+"","$"+(b)+" in each week",""+(n)+" weeks",null],"fill":"$"+(r)+""},"$"+(a)+" plus $"+(b)+" added "+(n)+" times is $"+(r)+".");}}
 }};
