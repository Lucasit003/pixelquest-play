// UNVERIFIED: 27 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Name the planets in order from the sun, and say what makes each one different. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"science-e-solar-system",subject:"science",level:3,grade:5,standard:"NGSS 5-ESS1-2",
 title:"The solar system",goal:"Name the planets in order from the sun, and say what makes each one different.",points:20,
 skills:{"order":"The order from the sun","which":"Which planet is which","facts":"What each one is like"},
 steps:[
 {skill:"order",say:"Eight planets go around the sun.  In order from the sun they are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.",pic:[{"t":"timeline","events":["Mercury","Venus","Earth","Mars"]}]},
 {skill:"order",say:"The four closest are small and rocky.  The four furthest are huge and made mostly of gas and ice.",pic:[{"t":"pair","a":"rocky: Mercury to Mars","b":"giant: Jupiter to Neptune"}],
  check:{prompt:"Which planet is closest to the sun?",answer:"Mercury",options:["Mercury","Earth","Neptune"],hint:"It is first in the order.",pic:{"t":"timeline","events":["?","Venus","Earth"]}}},
 {skill:"which",say:"Mercury is closest to the sun.  Neptune is furthest away.",pic:[{"t":"timeline","events":["Mercury","...","Neptune"]}]},
 {skill:"facts",say:"Jupiter is the biggest planet, and Saturn is the one with the bright rings.",pic:[{"t":"pair","a":"Jupiter: biggest","b":"Saturn: rings"}],
  check:{"prompt":"Look back at the order: which planet is furthest from the sun?","answer":"Neptune","options":["Neptune","Mercury","Mars"],"hint":"It is last in the order.","pic":{"t":"pair","a":"furthest","b":null}}},
 {skill:"facts",say:"Mars looks red because its dust is full of rust.  Venus is the hottest, under thick clouds.",pic:[{"t":"pair","a":"Mars: red dust","b":"Venus: hottest"}],
  check:{prompt:"Which planet is known for its bright rings?",answer:"Saturn",options:["Saturn","Mars","Venus"],hint:"It comes straight after Jupiter.",pic:{"t":"pair","a":"rings","b":null}}},
 {skill:"which",say:"Learn the order first, then hang one fact on each planet.",pic:[{"t":"timeline","events":["sun","planets in order"]}]}],
 items(add){
  const _SKIP=new Set(["Which planet is closest to the sun?","Which planet is the biggest?","Which planet is known for its bright rings?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["order","which"];let _q=0;const _C={"the solar system":["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]};
for(const name of Object.keys(_C)){const _L=_C[name];
 /* A step that shows up twice in one chain has two different answers to "what comes
    after it", so it is not a fair question and the two prompts collide anyway. */
 const _seen={};for(const _s of _L)_seen[_s]=(_seen[_s]||0)+1;const _ok=_s=>_seen[_s]===1;
 for(let i=0;i<_L.length-1;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i+1],r=_L[i+1];
  add(_SK[_q++%_SK.length],"In "+(name)+", which planet comes straight after "+(x)+"?",r,{"t":"timeline","events":["nearer the sun","further away"]},""+(r)+" comes straight after "+(x)+".");}
 for(let i=1;i<_L.length;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i-1],r=_L[i-1];add(_SK[_q++%_SK.length],"In "+(name)+", which planet comes straight before "+(x)+"?",r,{"t":"timeline","events":["nearer the sun","further away"]},""+(r)+" comes just before "+(x)+".");}
 for(let _k=0;_k<_L.length;_k++){const i=_k+1,x=_L[_k],y=_L[_k],r=_L[_k];add(_SK[_q++%_SK.length],"In "+(name)+", which planet is number "+(i)+" from the sun?",r,{"t":"timeline","events":["nearer the sun","further away"]},"Counting out from the sun, planet "+(i)+" is "+(r)+".");}
 for(let _a=0;_a<_L.length;_a++)for(let _b=_a+1;_b<_L.length;_b++){if(!_ok(_L[_a])||!_ok(_L[_b]))continue;/* Alternate which of the pair is named first, or the answer is always the second
      one named and a child learns the trick rather than the order. Parity, not a
      random number: a topic file has to be the same every time it loads. */
   const _flip=(_a+_b)%2===0,i=_a+1,x=_flip?_L[_a]:_L[_b],y=_flip?_L[_b]:_L[_a],r=_L[_a];add(_SK[_q++%_SK.length],"Which planet is closer to the sun: "+(x)+" or "+(y)+"?",r,{"t":"timeline","events":["nearer the sun","further away"]},""+(r)+" is closer to the sun.");}
 {const i=1,x=name,y=name,r=_L[0];add(_SK[_q++%_SK.length],"In "+(name)+", which planet is closest to the sun?",r,{"t":"timeline","events":["nearer the sun","further away"]},""+(r)+" is the closest of them to the sun.");}
 {const i=_L.length,x=name,y=name,r=_L[_L.length-1];add(_SK[_q++%_SK.length],"In "+(name)+", which planet is furthest from the sun?",r,{"t":"timeline","events":["nearer the sun","further away"]},""+(r)+" is the furthest of them from the sun.");}}}
/* 28 Oct (elfact): the second fact prompt read "is the fourth planet from the sun. Which planet is it?" with no subject; it now starts "Clue: this planet". */
{const _T=[["is the biggest planet","Jupiter"],["has the brightest rings","Saturn"],["is closest to the sun","Mercury"],["is furthest from the sun","Neptune"],["is the hottest planet","Venus"],["looks red because of rusty dust","Mars"],["is the planet we live on","Earth"],["is the only planet known to have life","Earth"],["is the smallest planet","Mercury"],["has a huge storm called the Great Red Spot","Jupiter"],["spins on its side","Uranus"],["is nearly the same size as Earth","Venus"],["has two small moons called Phobos and Deimos","Mars"],["is the second largest planet","Saturn"],["takes 365 days to go around the sun","Earth"],["takes the longest of the eight to go around the sun","Neptune"],["is covered in thick clouds that trap the heat","Venus"],["is the fourth planet from the sun","Mars"],["is the third planet from the sun","Earth"]],_X={},_A=[(k,r)=>"Which planet "+(k)+"?",(k,r)=>"Clue: this planet "+(k)+". Which planet is it?",(k,r)=>"Name the planet that "+(k)+"."],_W=[(k,r)=>""+(r)+" "+(k)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("facts",_A[_j](k,r),r,{"t":"pair","a":k,"b":null},_W[_j%_W.length](k,r),_X[k]);}
 }};
