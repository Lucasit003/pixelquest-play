// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: A computer checks a condition, then does one thing if it is true and another if it is not. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-if-then-rules",subject:"cs",level:3,grade:3,standard:"CSTA 1B-AP-10",
 title:"If this, then that",goal:"A computer checks a condition, then does one thing if it is true and another if it is not.",points:20,
 skills:{"branch":"Which way it goes","test":"Testing the number","else":"The other branch"},
 steps:[
 {skill:"test",say:"A computer decides by asking a question that is either true or false.",pic:[{"t":"rule","cond":"Is the number even?","yes":"go left","no":"go right"}]},
 {skill:"branch",say:"If the answer is yes, it takes one path.  If no, it takes the other.  Never both.",pic:[{"t":"rule","cond":"Is it raining?","yes":"take a coat","no":"leave it"}]},
 {skill:"test",say:"Say the rule is: if the number is even, it goes in the blue box.  8 is even, so blue.",pic:[{"t":"rule","cond":"Is 8 even?","yes":"blue box","no":"red box"}],
  check:{"prompt":"The rule is: if the number is even it goes in the blue box, otherwise the red box. Where does 6 go?","answer":"blue box","options":["blue box","red box","both boxes"],"hint":"6 can be shared into two equal parts.","pic":{"t":"rule","cond":"Is 6 even?","yes":"blue box","no":"red box"}}},
 {skill:"else",say:"7 is not even, so it takes the other path and goes in the red box.",pic:[{"t":"rule","cond":"Is 7 even?","yes":"blue box","no":"red box"}],
  check:{"prompt":"Same rule. Where does 9 go?","answer":"red box","options":["red box","blue box","both boxes"],"hint":"9 leaves one over when you pair it up.","pic":{"t":"rule","cond":"Is 9 even?","yes":"blue box","no":"red box"}}},
 {skill:"branch",say:"The question always has the same two answers, so the path is never in doubt.",pic:[{"t":"rule","cond":"true or false?","yes":"this way","no":"that way"}],
  check:{prompt:"Can a number take both paths at once?",answer:"no",options:["no","yes"],hint:"The question has one answer.",pic:{"t":"rule","cond":"one answer","yes":"one way","no":"the other"}}},
 {skill:"else",say:"Check the question, pick the branch.  That is a computer making a decision.",pic:[{"t":"rule","cond":"the test","yes":"yes","no":"no"}]}],
 items(add){
  const _SKIP=new Set(["The rule is: if the number is even it goes in the blue box, otherwise the red box. Where does 8 go?","Same rule. Where does 7 go?","Can a number take both paths at once?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["1","odd"],["2","even"],["3","odd"],["4","even"],["5","odd"],["6","even"],["7","odd"],["8","even"],["9","odd"],["10","even"],["11","odd"],["12","even"],["13","odd"],["14","even"],["15","odd"],["16","even"],["17","odd"],["18","even"],["19","odd"],["20","even"],["21","odd"],["22","even"],["23","odd"],["24","even"],["25","odd"],["26","even"],["27","odd"],["28","even"],["29","odd"],["30","even"],["31","odd"],["32","even"],["33","odd"],["34","even"],["35","odd"],["36","even"],["37","odd"],["38","even"],["39","odd"],["40","even"],["41","odd"],["42","even"],["43","odd"],["44","even"],["45","odd"],["46","even"],["47","odd"],["48","even"],["49","odd"],["50","even"],["51","odd"],["52","even"],["53","odd"],["54","even"],["55","odd"],["56","even"],["57","odd"],["58","even"],["59","odd"],["60","even"]],_A=[(x,r,labels)=>"The rule asks: is "+(x)+" even or odd?",(x,r,labels)=>"A computer tests "+(x)+". Is it even or odd?"],_W=[(x,r,labels)=>""+(x)+" is "+(r)+"."],labels="even or odd";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add("test",_A[_j](x,r,labels),r,{"t":"rule","cond":"Is "+(x)+" even?","yes":"true","no":"false"},_W[_j%_W.length](x,r,labels),_V(r));}
{/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["1","one digit"],["2","one digit"],["3","one digit"],["4","one digit"],["5","one digit"],["6","one digit"],["7","one digit"],["8","one digit"],["9","one digit"],["10","two digits"],["11","two digits"],["12","two digits"],["13","two digits"],["14","two digits"],["15","two digits"],["16","two digits"],["17","two digits"],["18","two digits"],["19","two digits"],["20","two digits"],["21","two digits"],["22","two digits"],["23","two digits"],["24","two digits"],["25","two digits"],["26","two digits"],["27","two digits"],["28","two digits"],["29","two digits"],["30","two digits"],["31","two digits"],["32","two digits"],["33","two digits"],["34","two digits"],["35","two digits"],["36","two digits"],["37","two digits"],["38","two digits"],["39","two digits"],["40","two digits"],["41","two digits"],["42","two digits"],["43","two digits"],["44","two digits"],["45","two digits"],["46","two digits"],["47","two digits"],["48","two digits"],["49","two digits"],["50","two digits"],["51","two digits"],["52","two digits"],["53","two digits"],["54","two digits"],["55","two digits"],["56","two digits"],["57","two digits"],["58","two digits"],["59","two digits"],["60","two digits"]],_A=[(x,r,labels)=>"The rule sorts by length: does "+(x)+" have one digit or two?",(x,r,labels)=>"A computer checks "+(x)+". One digit or two digits?"],_W=[(x,r,labels)=>""+(x)+" has "+(r)+"."],labels="one digit or two digits";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add("branch",_A[_j](x,r,labels),r,{"t":"rule","cond":"Is "+(x)+" under ten?","yes":"one digit","no":"two digits"},_W[_j%_W.length](x,r,labels),_V(r));}
{const _P=[];
for(let a=1;a<=60;a++)for(let b=1;b<=60;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.max(a,b));
add("else","The rule keeps the bigger of two numbers. Given "+(a)+" and "+(b)+", which does it keep?",r,{"t":"rule","cond":"Is "+(a)+" bigger than "+(b)+"?","yes":"keep "+(a)+"","no":"keep "+(b)+""},"It keeps "+(r)+".");}}
 }};
