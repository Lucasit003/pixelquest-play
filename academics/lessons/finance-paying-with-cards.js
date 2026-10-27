// UNVERIFIED: 10 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Compare debit and credit, subtract completed debit purchases, track credit purchases and repayments, and add a stated fee. Assume no overdraft and no other charges. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-paying-with-cards",subject:"finance",level:3,grade:4,standard:"Jump$tart 2-6",
 title:"Paying with cards",goal:"Compare debit and credit, subtract completed debit purchases, track credit purchases and repayments, and add a stated fee. Assume no overdraft and no other charges.",points:20,
 skills:{"kind":"Debit or credit","balance":"The debit balance","owed":"What credit owes","cost":"Credit can cost extra"},
 steps:[
 {skill:"kind",say:"A debit card normally pays from your bank account. A credit card borrows money you must repay. These examples use debit accounts without overdraft and count only the charges stated.",pic:[{"t":"pair","a":"Debit funds","b":"Credit loan"}]},
 {skill:"kind",say:"A credit card borrows. The bank pays the store for you now, and you must pay the bank back later, so every credit card purchase is money you owe.",pic:[{"t":"timeline","events":["tap credit card","bank pays store","bill arrives","you pay the bank"]}],
  check:{"prompt":"You pay for a $25 game with a card, and the money comes straight out of your own bank account. Which kind of card is that: debit or credit?","answer":"debit","options":["debit","credit"],"hint":"Money taken from your own account is not borrowed.","pic":{"t":"timeline","events":["tap card","money leaves your account"]}}},
 {skill:"balance",say:"Once a $20 debit purchase has been taken from a $50 account, $30 remains. Real purchases can take time to finish processing; our examples show the completed balance.",pic:[{"t":"line","max":50,"from":50,"back":true,"jumps":1,"hop":20}],eq:"50 - 20 = 30 balance"},
 {skill:"balance",say:"To find the balance from before a debit purchase, add the payment back on. If the balance is $30 after paying $20, it was $50 before.",pic:[{"t":"pair","a":"$30 + $20","b":"$50 before"}],eq:"30 + 20 = 50 before",
  check:{prompt:"Your debit card account holds $60. You pay $25 for a book with the card. What is the balance now?",answer:35,options:[35,85,45,25],hint:"A debit card takes the money out of the account, so subtract.",pic:{"t":"line","max":60,"jumps":1,"hop":25,"from":60,"back":true}}},
 {skill:"owed",say:"With a credit card each purchase adds to what you owe. Buy a $40 jacket and a $15 hat on credit, and you owe the bank $55.",pic:[{"t":"pair","a":"$40 + $15","b":"owe $55"}],eq:"40 + 15 = 55 owed"},
 {skill:"owed",say:"Paying the bank shrinks what you owe. Owe $55, pay the bank $30, and $25 is still owed until the bill reaches $0.",pic:[{"t":"line","max":55,"from":55,"back":true,"jumps":1,"hop":30}],eq:"55 - 30 = 25 still owed",
  check:{"prompt":"Your credit card bill is $80 and you pay the bank $35. How much is still owed?","answer":45,"options":[45,115,35,80],"hint":"Take the payment away from what you owe.","pic":{"t":"line","max":80,"jumps":1,"hop":35,"from":80,"back":true}}},
 {skill:"cost",say:"Credit can cost extra through interest or fees. In this example the card agreement adds a $25 late fee to a $60 bill, so the new amount owed is $85. Actual fees depend on the agreement.",pic:[{"t":"pair","a":"Bill $60","b":"Fee $25"}],eq:"60 + 25 = 85 with the fee"},
 {skill:"kind",say:"In these examples debit uses account money and credit creates a debt. Real accounts have rules about fees, overdrafts, and interest, so the account terms matter.",pic:[{"t":"pair","a":"Debit funds","b":"Credit: debt"}]}],
 items(add){
  const _SKIP=new Set(["You buy a $25 game with a card. The bank pays the store today and you pay the bank back next month. Which kind of card is that: debit or credit?","Your debit card account holds $60. You pay $25 for a book with the card. What is the balance now?","Your credit card bill is $70 and you pay the bank $45. How much is still owed?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["A completed card purchase is taken from money already in your checking account.","debit"],["You pay from your checking account rather than taking a card loan.","debit"],["The shop receives the money you already held in your checking account.","debit"],["Your card draws on your account funds, with no overdraft or borrowing in this example.","debit"],["You use $12 of your checking balance to pay for a purchase with this card.","debit"],["The lender pays for a purchase and you must repay the lender later.","credit"],["The card purchase creates a debt to the card issuer.","credit"],["You use a card loan for a purchase and receive a bill to repay it.","credit"],["Buying a book with this card adds the price to the debt you owe the card issuer.","credit"],["The card issuer lends the purchase money within an agreed borrowing limit.","credit"]],_A=[(x,r,labels)=>""+(x)+" Which kind of card is that: "+(labels)+"?",(x,r,labels)=>"Which card is being described, "+(labels)+"? "+(x)+""],_W=[(x,r,labels)=>"That is how a "+(r)+" card works.",(x,r,labels)=>"A "+(r)+" card is the one that works this way."],labels="debit or credit";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add("kind",_A[_j](x,r,labels),r,{"t":"pair","a":"Your funds","b":"Card loan"},_W[_j%_W.length](x,r,labels),_V(r));}
{const _P=[];
for(let a=20;a<=99;a++)for(let b=3;b<=60;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,45),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("balance","Your debit card account holds $"+(a)+". You pay $"+(b)+" for a game with the card. What is the balance now?",r,{"t":"line","max":a,"jumps":1,"hop":b,"from":a,"back":true},"A debit card spends your own money: "+(a)+" - "+(b)+" = "+(r)+", so the balance is $"+(r)+".");}}
{const _P=[];
for(let a=20;a<=99;a++)for(let b=3;b<=60;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,40),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=a;
add("balance","After you pay $"+(b)+" with your debit card, the account balance is $"+(total)+". What was the balance before you paid?",r,{"t":"pair","a":"$"+(total)+" + $"+(b)+"","b":null,"fill":"$"+(r)+" before"},"Add the payment back on: "+(total)+" + "+(b)+" = "+(r)+", so the balance was $"+(r)+" before.");}}
{const _P=[];
for(let a=5;a<=60;a++)for(let b=5;b<=60;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,45),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("owed","You use a credit card to buy a backpack for $"+(a)+" and a lunch box for $"+(b)+". How much do you owe the bank?",r,{"t":"pair","a":"$"+(a)+" + $"+(b)+"","b":null,"fill":"owe $"+(r)+""},"A credit card borrows: "+(a)+" + "+(b)+" = "+(r)+", so you owe the bank $"+(r)+".");}}
{const _P=[];
for(let a=20;a<=99;a++)for(let b=5;b<=90;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,45),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("owed","Your credit card bill says you owe $"+(a)+". You pay the bank $"+(b)+". How much do you still owe?",r,{"t":"line","max":a,"jumps":1,"hop":b,"from":a,"back":true},""+(a)+" - "+(b)+" = "+(r)+", so $"+(r)+" is still owed to the bank.");}}
{const _P=[];
for(let a=20;a<=99;a++)for(let b=5;b<=90;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,35),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=b;
add("owed","You owed $"+(a)+" on your credit card. After one payment you owe $"+(total)+". How much did you pay the bank?",r,{"t":"pair","a":"$"+(a)+" - $"+(total)+"","b":null,"fill":"paid $"+(r)+""},""+(a)+" - "+(total)+" = "+(r)+", so the payment was $"+(r)+".");}}
{const _P=[];
for(let a=35;a<=95;a++)for(let b=10;b<=30;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,40),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("cost","Your credit card bill is $"+(a)+". You pay it late, so the bank adds a late fee of $"+(b)+". How much do you owe now?",r,{"t":"pair","a":"$"+(a)+" + $"+(b)+" fee","b":null,"fill":"owe $"+(r)+""},"Paying late costs extra: "+(a)+" + "+(b)+" = "+(r)+", so you owe $"+(r)+".");}}
 }};
