// UNVERIFIED: 14 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Distinguish pay from gifts, multiply pay by hours or jobs, and add earnings. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-earning",subject:"finance",level:3,grade:3,standard:"Jump$tart 1-2",
 title:"Earning money",goal:"Distinguish pay from gifts, multiply pay by hours or jobs, and add earnings.",points:20,
 skills:{"paid":"Pay and gifts","hourly":"Pay by the hour","perjob":"Pay for each job","hours":"Working back to the hours","total":"Adding it all up"},
 steps:[
 {skill:"paid",say:"Some work is paid and some is unpaid, such as helping at home or volunteering. Money paid for doing a job is earned income. A gift is given without payment for work.",pic:[{"t":"pair","a":"Paid work","b":"Gift"}]},
 {skill:"hourly",say:"Some jobs pay by the hour. A job that pays $6 an hour gives you $6 for every hour you work.",pic:[{"t":"line","max":18,"jumps":3,"hop":6}],eq:"$6 each hour"},
 {skill:"hourly",say:"Work 3 hours at $6 an hour and you earn 6 + 6 + 6. That is 3 x 6 = $18.",pic:[{"t":"array","r":3,"c":6}],eq:"3 x 6 = 18",
  check:{prompt:"A job pays $5 an hour. You work 4 hours. How much do you earn?",answer:20,options:[20,9,15,25],hint:"Multiply the pay for one hour by the number of hours.",pic:{"t":"line","max":20,"jumps":4,"hop":5}}},
 {skill:"perjob",say:"Other jobs pay for each job done. Mow one lawn and get $8. Mow 4 lawns and get 4 x 8 = $32.",pic:[{"t":"groups","n":4,"k":8}],eq:"4 x 8 = 32"},
 {skill:"perjob",say:"Count the jobs, then multiply by the pay for one job. Wash 3 cars at $7 each and you earn $21.",pic:[{"t":"groups","n":3,"k":7}],eq:"3 x 7 = 21",
  check:{"prompt":"You get $6 for each dog you walk. You walk 4 dogs. How much do you earn?","answer":24,"options":[24,10,18,30],"hint":"Multiply the pay for one dog by the number of dogs.","pic":{"t":"line","max":24,"jumps":4,"hop":6}}},
 {skill:"hours",say:"You can work backwards. If a job pays $4 an hour and you earned $12, you worked 12 / 4 = 3 hours.",pic:[{"t":"line","max":12,"jumps":3,"hop":4}],eq:"12 / 4 = 3 hours"},
 {skill:"total",say:"Earnings from different jobs add up. $10 from raking leaves and $6 from walking a dog makes $16.",pic:[{"t":"pair","a":"$10","b":"$6"}],eq:"10 + 6 = 16",
  check:{prompt:"You earn $9 walking dogs and $8 raking leaves. How much did you earn in all?",answer:17,options:[17,1,16,72],hint:"Add the two amounts together.",pic:{"t":"pair","a":"$9","b":"$8"}}},
 {skill:"paid",say:"For these paid jobs, multiply the agreed pay by the hours or jobs. Add earnings from different jobs to find total earned income.",pic:[{"t":"pair","a":"$10 earned","b":"$6 earned"}]}],
 items(add){
  const _SKIP=new Set(["A job pays $5 an hour. You work 4 hours. How much do you earn?","You get $7 for each car you wash. You wash 3 cars. How much do you earn?","You earn $9 walking dogs and $8 raking leaves. How much did you earn in all?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["You mow a neighbor's lawn and get $10.","earned"],["Your grandma gives you $10 for your birthday.","gift"],["You walk a neighbor's dog and get $3.","earned"],["You find $5 in a birthday card from your uncle.","gift"],["You wash a car and get $7.","earned"],["A friend hands you $2 just because.","gift"],["You rake leaves for two hours and get $12.","earned"],["Your aunt gives you $20 as a holiday present.","gift"],["You babysit for an hour and get $8.","earned"],["A relative sends $15 in a get-well card.","gift"],["You shovel snow off a driveway and get $9.","earned"],["You help paint a fence and get $11.","earned"],["The tooth fairy leaves $1 under your pillow.","gift"],["You receive $6 as payment for making lemonade for a party.","earned"]],_A=[(x,r,labels)=>""+(x)+" Is that money earned or a gift?"],_W=[(x,r,labels)=>"Money you work for is earned. Money someone simply gives you is a gift."],labels="earned or gift";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add("paid",_A[_j](x,r,labels),r,{"t":"pair","a":"Paid work","b":"Gift"},_W[_j%_W.length](x,r,labels),_V(r));}
{const _P=[];
for(let a=2;a<=9;a++)for(let b=2;b<=9;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("hourly","A job pays $"+(a)+" an hour. You work "+(b)+" hours. How much do you earn?",r,{"t":"pair","a":""+(b)+" hours","b":"$"+(a)+"/hour"},""+(b)+" hours at $"+(a)+" each hour is "+(b)+" x "+(a)+" = $"+(total)+".");}}
{const _P=[];
for(let a=2;a<=9;a++)for(let b=2;b<=8;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("perjob","You get $"+(a)+" for each lawn you mow. You mow "+(b)+" lawns. How much do you earn?",r,{"t":"groups","n":b,"k":a},""+(b)+" lawns at $"+(a)+" each is "+(b)+" x "+(a)+" = $"+(total)+".");}}
{const _P=[];
for(let a=2;a<=9;a++)for(let b=2;b<=9;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=b;
add("hours","A job pays $"+(a)+" an hour. You earned $"+(total)+". How many hours did you work?",r,{"t":"tiles","seq":["$"+(a)+" an hour",null,"$"+(total)+" earned"]},"$"+(a)+" an hour for "+(b)+" hours makes $"+(total)+", so you worked "+(b)+" hours.");}}
{const _P=[];
for(let a=5;a<=60;a++)for(let b=5;b<=60;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("total","You earn $"+(a)+" raking leaves and $"+(b)+" washing cars. How much did you earn in all?",r,{"t":"pair","a":"$"+(a)+"","b":"$"+(b)+""},"$"+(a)+" plus $"+(b)+" is $"+(total)+" earned altogether.");}}
 }};
