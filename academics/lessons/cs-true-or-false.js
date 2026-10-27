// UNVERIFIED: 39 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: A computer checks whether something is true before it decides. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-true-or-false",subject:"cs",level:3,grade:2,standard:"CSTA 1A-AP-11",
 title:"True or false",goal:"A computer checks whether something is true before it decides.",points:20,
 skills:{"true":"True statements","false":"False statements","check":"Checking first"},
 steps:[
 {skill:"true",say:"A true statement is something that is correct.  For example, 'Birds have feathers' is true.",pic:[{"t":"rule","cond":"Do birds have feathers?","yes":"true","no":"false"}],eq:"Birds have feathers",
  check:{prompt:"On a sunny day with no clouds, is 'The sky is blue' true or false?",answer:"true",options:["true","false"],hint:"Think about the sky on a clear, sunny day. Is the sentence correct?",pic:{"t":"word","base":"sky","suffix":"is blue","solve":true}}},
 {skill:"false",say:"A false statement is something that is not correct.  For example, 'Dogs can fly' is false because dogs cannot fly.",pic:[{"t":"rule","cond":"Can dogs fly?","yes":"true","no":"false"}],eq:"Dogs can fly"},
 {skill:"check",say:"Before a computer decides what to do, it checks if something is true.  If 'it is raining' is true, it can decide to close the window.",pic:[{"t":"rule","cond":"Is it raining?","yes":"close the window","no":"leave it open"}],eq:"If it is raining, close the window",
  check:{prompt:"The rule says: if it is raining, close the window. It is raining. Should the window be closed?",answer:"yes",options:["yes","no"],hint:"The rule is true, so the computer does what it says.",pic:{"t":"matter","jars":[{"state":"liquid","hide":true},{"state":"liquid"}]}}},
 {skill:"true",say:"Another true statement is 'The sun is a star'.  The sun is the star closest to Earth, so this is true.",pic:[{"t":"rule","cond":"Is the sun a star?","yes":"true","no":"false"}],eq:"The sun is a star"},
 {skill:"false",say:"An example of a false statement is 'The sun is cold'.  The sun is very hot, and its light warms the Earth.",pic:[{"t":"rule","cond":"Is the sun cold?","yes":"true","no":"false"}],eq:"The sun is cold",
  check:{"prompt":"Look back: is the sentence 'Dogs can fly' true or false?","answer":"false","options":["false","true"],"hint":"Dogs have no wings and cannot fly, so the sentence is not correct.","pic":{"t":"word","base":"Dogs can fly"}}},
 {skill:"check",say:"Checking if something is true or false helps a computer make the right decisions.  For example, if you have enough cookies, it might decide to share them.",pic:[{"t":"rule","cond":"Are there enough cookies?","yes":"share them","no":"bake more"}],eq:"If you have enough cookies, share them"}],
 items(add){
  const _SKIP=new Set(["Is 'Birds have feathers' true or false?","The rule says: if it is raining, close the window. It is raining. Should the window be closed?","Is 'The sun is cold' true?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["true","false","check"];let _q=0;/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["Cats have four legs","true"],["Dogs can fly","false"],["The sun is cold","false"],["The sun rises in the east","true"],["The moon is made of cheese","false"],["Apples grow on trees","true"],["Bananas grow on the ground","false"],["Elephants are small","false"],["Ducks are mammals","false"],["Monkeys can fly","false"],["Penguins can fly","false"],["Horses have four legs","true"],["Snakes have legs","false"],["Bears can fly","false"],["Giraffes have long necks","true"],["Kangaroos have tails","true"],["Pandas eat bamboo","true"],["Sharks have fur","false"],["Whales live on land","false"],["Spiders have six legs","false"],["Dolphins are fish","false"],["Octopuses have eight arms","true"],["Bees make honey","true"],["Flowers can walk","false"],["Trees can fly","false"],["Rocks can swim","false"],["Stars can talk","false"],["Clouds can eat","false"],["Rain can dance","false"],["Dogs bark","true"],["Birds have feathers","true"],["Fish live in water","true"],["Penguins waddle","true"],["Spiders have eight legs","true"],["Frogs can jump","true"],["Ice is cold","true"],["A week has seven days","true"],["Snow is hot","false"],["Cows can fly","false"]],_A=[(x,r,labels)=>"Is "+(x)+" true or false?",(x,r,labels)=>"Is the statement '"+(x)+"' correct?",(x,r,labels)=>"True or false: "+(x)+""],_W=[(x,r,labels)=>""+(x)+" is "+(r)+"."],labels="true or false";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](x,r,labels),r,null,_W[_j%_W.length](x,r,labels),_V(r));}
 }};
