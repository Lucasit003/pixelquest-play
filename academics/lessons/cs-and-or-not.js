// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Join two true-or-false statements with and, or and not, and work out the result. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-and-or-not",subject:"cs",level:3,grade:5,standard:"CSTA 1B-AP-10 (extends to 2-AP-12)",
 title:"And, or, not",goal:"Join two true-or-false statements with and, or and not, and work out the result.",points:20,
 skills:{"and":"Both must be true","or":"One is enough","not":"Flipping it over"},
 steps:[
 {skill:"and",say:"A computer joins tests together.  With and, both parts must be true or the whole thing is false.",pic:[{"t":"rule","cond":"raining AND cold?","yes":"wear a coat","no":"do not"}]},
 {skill:"and",say:"'It is raining and it is cold' is only true when both are true.",pic:[{"t":"pair","a":"true and true","b":"true"}],eq:"true and false = false",
  check:{prompt:"'It is raining' is true and 'it is cold' is false. Is 'raining AND cold' true or false?",answer:"false",options:["false","true"],hint:"And needs both parts to be true.",pic:{"t":"pair","a":"true and false","b":"?"}}},
 {skill:"or",say:"With or, one true part is enough.  'It is raining or it is cold' is true if either is.",pic:[{"t":"pair","a":"true or false","b":"true"}],eq:"false or false = false",
  check:{"prompt":"'The cat is asleep' is false and 'the dog is asleep' is true. Is 'cat asleep OR dog asleep' true or false?","answer":"true","options":["true","false"],"hint":"Or needs at least one part to be true; both can be true too.","pic":{"t":"pair","a":"false or true","b":"?"}}},
 {skill:"or",say:"Or is only false when both parts are false.",pic:[{"t":"rule","cond":"raining OR cold?","yes":"take a coat","no":"leave it"}]},
 {skill:"not",say:"Not flips a statement over.  Not true is false, and not false is true.",pic:[{"t":"pair","a":"not true","b":"false"}],eq:"not false = true",
  check:{prompt:"'The door is open' is false. Is 'NOT the door is open' true or false?",answer:"true",options:["true","false"],hint:"Not flips it over.",pic:{"t":"pair","a":"not false","b":"?"}}},
 {skill:"and",say:"And needs both, or needs at least one, and not reverses true and false. These are three ways to combine conditions.",pic:[{"t":"rule","cond":"the test","yes":"true","no":"false"}]}],
 items(add){
  const _SKIP=new Set(["'It is raining' is true and 'it is cold' is false. Is 'raining AND cold' true or false?","'It is raining' is true and 'it is cold' is false. Is 'raining OR cold' true or false?","'The door is open' is false. Is 'NOT the door is open' true or false?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _R=[["cats have four legs",true],["a week has seven days",true],["ice is cold",true],["spiders have eight legs",true],["a triangle has three sides",true],["cows can fly",false],["snow is hot",false],["a triangle has five sides",false],["the moon is made of cheese",false],["cats have six legs",false]];const _P=[];for(const [_t,_v] of _R)_P.push([_t,_v]);const _Q=[];
for(let i=0;i<_P.length;i++)for(let j=0;j<_P.length;j++)if(i!==j)_Q.push([_P[i],_P[j]]);
const _n=Math.min(_Q.length,120),_st=_n?Math.max(1,Math.floor(_Q.length/_n)):1;for(let _i=0;_i<_Q.length;_i+=_st){const [_A,_B]=_Q[_i],a=_A[0],b=_B[0],_x=_A[1],_y=_B[1],r=String(_x&&_y);
add("and","Is this true or false: '"+(a)+"' AND '"+(b)+"'?",r,{"t":"rule","cond":"both true?","yes":"true","no":"false"},"And needs both parts true, so the answer is "+(r)+".");}}
{const _R=[["cats have four legs",true],["a week has seven days",true],["ice is cold",true],["spiders have eight legs",true],["a triangle has three sides",true],["cows can fly",false],["snow is hot",false],["a triangle has five sides",false],["the moon is made of cheese",false],["cats have six legs",false]];const _P=[];for(const [_t,_v] of _R)_P.push([_t,_v]);const _Q=[];
for(let i=0;i<_P.length;i++)for(let j=0;j<_P.length;j++)if(i!==j)_Q.push([_P[i],_P[j]]);
const _n=Math.min(_Q.length,120),_st=_n?Math.max(1,Math.floor(_Q.length/_n)):1;for(let _i=0;_i<_Q.length;_i+=_st){const [_A,_B]=_Q[_i],a=_A[0],b=_B[0],_x=_A[1],_y=_B[1],r=String(_x||_y);
add("or","Is this true or false: '"+(a)+"' OR '"+(b)+"'?",r,{"t":"rule","cond":"either true?","yes":"true","no":"false"},"Or needs one part true, so the answer is "+(r)+".");}}
{/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["1","odd"],["2","even"],["3","odd"],["4","even"],["5","odd"],["6","even"],["7","odd"],["8","even"],["9","odd"],["10","even"],["11","odd"],["12","even"],["13","odd"],["14","even"],["15","odd"],["16","even"],["17","odd"],["18","even"],["19","odd"],["20","even"],["21","odd"],["22","even"],["23","odd"],["24","even"],["25","odd"],["26","even"],["27","odd"],["28","even"],["29","odd"],["30","even"],["31","odd"],["32","even"],["33","odd"],["34","even"],["35","odd"],["36","even"],["37","odd"],["38","even"],["39","odd"],["40","even"],["41","odd"],["42","even"],["43","odd"],["44","even"],["45","odd"],["46","even"],["47","odd"],["48","even"],["49","odd"],["50","even"],["51","odd"],["52","even"],["53","odd"],["54","even"],["55","odd"],["56","even"],["57","odd"],["58","even"],["59","odd"],["60","even"]],_A=[(x,r,labels)=>"A test asks: is "+(x)+" even? What is the answer, even or odd?",(x,r,labels)=>"The rule checks "+(x)+". Even or odd?"],_W=[(x,r,labels)=>""+(x)+" is "+(r)+", so 'not even' would be the other one."],labels="even or odd";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add("not",_A[_j](x,r,labels),r,{"t":"rule","cond":"Is "+(x)+" even?","yes":"true","no":"false"},_W[_j%_W.length](x,r,labels),_V(r));}
 }};
