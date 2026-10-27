// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: A machine follows one rule: whatever goes in, the same rule decides what comes out. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-rule-machine",subject:"cs",level:3,grade:2,standard:"CSTA 1A-AP-14",
 title:"What goes in, what comes out",goal:"A machine follows one rule: whatever goes in, the same rule decides what comes out.",points:20,
 skills:{"out":"What comes out","in":"What went in","rule":"Finding the rule"},
 steps:[
 {skill:"out",say:"Think of a machine with a rule.  Something goes in, the rule is followed, and something comes out.",pic:[{"t":"pair","a":"in","b":"out"}],eq:"in -> rule -> out"},
 {skill:"out",say:"If the rule is add 3, then 5 goes in and 8 comes out.  Every time.",pic:[{"t":"line","max":10,"jumps":1,"hop":3}],eq:"5 + 3 = 8",
  check:{prompt:"This machine's rule is add 3. You put in 6. What comes out?",answer:9,options:[9,3,18,63],hint:"Add 3 to the number that went in.",pic:{"t":"line","max":10,"jumps":1,"hop":3}}},
 {skill:"out",say:"The same rule works on any number: 10 goes in, 13 comes out.",pic:[{"t":"line","max":15,"jumps":1,"hop":3}],eq:"10 + 3 = 13"},
 {skill:"in",say:"Run it backwards to find what went in.  If add 3 gave 12, then 9 went in.",pic:[{"t":"line","max":12,"jumps":1,"hop":3}],eq:"12 - 3 = 9",
  check:{prompt:"This machine's rule is add 3, and 11 came out. What number was put in?",answer:8,options:[8,14,33,5],hint:"Take 3 away from what came out.",pic:{"t":"line","max":12,"jumps":1,"hop":3}}},
 {skill:"rule",say:"Watch a few pairs and you can work out the rule: 2 gave 4, 5 gave 7, 9 gave 11.  The rule is add 2.",pic:[{"t":"pair","a":"2 -> 4","b":"5 -> 7"}],eq:"the rule is add 2",
  check:{"prompt":"A machine turned 1 into 6, 3 into 8 and 7 into 12. What is its rule?","answer":"add 5","options":["add 5","add 6","times 2"],"hint":"Compare each pair: how much bigger is what came out?","pic":{"t":"passages","title":"Rule machine","texts":["1 -> 6","3 -> 8","7 -> 12"]}}},
 {skill:"rule",say:"One rule, followed the same way every time.  That is what a computer does.",pic:[{"t":"pair","a":"any number","b":"the rule"}]}],
 items(add){
  const _SKIP=new Set(["The rule is add 3. What comes out when 5 goes in?","The rule is add 3, and 12 came out. What went in?","2 gave 4, 5 gave 7 and 9 gave 11. What is the rule?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=1;a<=20;a++)for(let b=2;b<=9;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a+b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("out","The rule is add "+(b)+". What comes out when "+(a)+" goes in?",r,{"t":"line","max":30,"jumps":1,"hop":b},""+(a)+" plus "+(b)+" is "+(r)+".");}}
{const _P=[];
for(let a=5;a<=30;a++)for(let b=2;b<=9;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("in","The rule is add "+(b)+", and "+(a)+" came out. What went in?",r,{"t":"line","max":30,"jumps":1,"hop":b},"Run it backwards: "+(a)+" take away "+(b)+" is "+(r)+".");}}
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=9;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("rule","The rule is times "+(b)+". What comes out when "+(a)+" goes in?",r,{"t":"array","r":a,"c":b},""+(a)+" times "+(b)+" is "+(r)+".");}}
 }};
