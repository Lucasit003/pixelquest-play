// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Divide when it does not come out even, and say how many are left over. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-divide-remainder",subject:"math",level:3,grade:4,standard:"CCSS 4.NBT.B.6",
 title:"Sharing with some left over",goal:"Divide when it does not come out even, and say how many are left over.",points:20,
 skills:{"each":"How many in each group","over":"How many are left over","check":"Checking the answer"},
 steps:[
 {skill:"each",say:"Sharing does not always come out even. 17 marbles shared between 5 friends will leave some over.",pic:[{"t":"groups","n":5,"k":3}],eq:"17 shared between 5"},
 {skill:"each",say:"Give one to each friend, again and again. Each friend gets 3, because 5 threes are 15.",pic:[{"t":"array","r":5,"c":3}],eq:"5 x 3 = 15",
  check:{prompt:"23 marbles shared between 5 friends. How many does each friend get?",answer:4,options:[4,3,5,23],hint:"5 fours are 20, and 5 fives would be 25, which is too many.",pic:{"t":"array","r":5,"c":4}}},
 {skill:"over",say:"15 of the 17 marbles are handed out. The 2 that are left cannot be shared without breaking one, so they are the remainder.",pic:[{"t":"tiles","seq":["1","2"]}],eq:"17 - 15 = 2 left over"},
 {skill:"over",say:"We say 17 divided by 5 is 3, remainder 2.",pic:[{"t":"word","base":"3 remainder 2"}],eq:"17 / 5 = 3 r 2",
  check:{"prompt":"26 marbles shared between 5 friends. How many are left over?","answer":1,"options":[1,5,6,26],"hint":"5 fives are 25, and 26 take away 25 is 1.","pic":{"t":"word","base":"26 / 5"}}},
 {skill:"check",say:"Check it by going backwards: 5 groups of 3 is 15, and the 2 left over make 17 again.",pic:[{"t":"array","r":5,"c":3}],eq:"5 x 3 + 2 = 17"},
 {skill:"check",say:"The remainder is always smaller than the number of groups. If it is not, each group can take one more.",pic:[{"t":"word","base":"remainder < groups"}],
  check:{prompt:"You divide by 6 and get a remainder. What is the biggest the remainder can be?",answer:5,options:[5,6,7,1],hint:"If 6 were left over, every group could take one more.",pic:{"t":"word","base":"6 groups"}}}],
 items(add){
  const _SKIP=new Set(["23 marbles shared between 5 friends. How many does each friend get?","23 marbles shared between 5 friends. How many are left over?","You divide by 6 and get a remainder. What is the biggest the remainder can be?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=13;a<=99;a++)for(let b=3;b<=9;b++)if(b!==0&&a%b!==0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=Math.floor(a/b);
add("each",""+(a)+" shared equally between "+(b)+". How many does each one get?",r,{"t":"word","base":""+(a)+" / "+(b)+""},""+(b)+" x "+(r)+" is as close to "+(a)+" as you can get without going over, so each one gets "+(r)+".");}}
{const _P=[];
for(let a=13;a<=99;a++)for(let b=3;b<=9;b++)if(b!==0&&a%b!==0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=a%b;
add("over",""+(a)+" shared equally between "+(b)+". How many are left over?",r,{"t":"word","base":""+(a)+" / "+(b)+""},"After the sharing, the remainder is "+(r)+", and "+(r)+" is smaller than "+(b)+".");}}
{const _P=[];
for(let a=13;a<=99;a++)for(let b=3;b<=9;b++)if(b!==0&&a%b!==0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=Math.floor(a/b);
add("check","You share "+(a)+" between "+(b)+" and want to check. What number goes in the blank: "+(b)+" x ___ plus the remainder makes "+(a)+"?",r,{"t":"word","base":""+(b)+" x ?"},""+(b)+" x "+(r)+" plus the remainder is "+(a)+".");}}
 }};
