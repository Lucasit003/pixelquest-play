// UNVERIFIED: 56 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Follow the energy from the sun through a plant to the animals that eat it. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"science-e-food-chains",subject:"science",level:3,grade:5,standard:"NGSS 5-LS2-1",
 title:"Food chains",goal:"Follow the energy from the sun through a plant to the animals that eat it.",points:20,
 skills:{"order":"The order of a chain","roles":"Producers and consumers","eats":"Who eats whom"},
 steps:[
 {skill:"roles",say:"A food chain shows who eats whom.  It starts with a producer: a plant or another living thing that makes its own food from sunlight.",pic:[{"t":"theater","scene":"food-chain","part":"producer"}]},
 {skill:"roles",say:"An animal cannot make its own food, so it eats.  Animals are called consumers.",pic:[{"t":"theater","scene":"food-chain","part":"consumer"}],
  check:{prompt:"A plant makes its own food from sunlight. What is a plant called in a food chain?",answer:"a producer",options:["a producer","a consumer","a predator"],hint:"It produces its own food.",pic:{"t":"pair","a":"grass","b":null}}},
 {skill:"order",say:"Grass is eaten by a rabbit, and the rabbit is eaten by a fox.  The arrow points the way the food goes.",pic:[{"t":"theater","scene":"food-chain","part":"chain"}],eq:"grass -> rabbit -> fox",
  check:{"prompt":"In the food chain seeds -> mouse -> owl, what does the mouse eat?","answer":"seeds","options":["seeds","the owl","nothing"],"hint":"Follow the arrow backwards from the mouse.","pic":{"t":"word","base":"seeds -> mouse -> owl"}}},
 {skill:"eats",say:"An animal that hunts another is a predator, and the one it hunts is its prey.",pic:[{"t":"theater","scene":"food-chain","part":"hunt"}],
  check:{"prompt":"An owl hunts a mouse. What is the mouse called?","answer":"prey","options":["prey","a predator","a producer"],"hint":"The hunter is the predator.","pic":{"t":"pair","a":"owl","b":"mouse"}}},
 {skill:"order",say:"In the sea the chain works the same way: tiny phytoplankton make food from sunlight, then a small fish eats them, then a bigger fish, then a seal.",pic:[{"t":"timeline","events":["phytoplankton","small fish","big fish","seal"]}]},
 {skill:"roles",say:"Follow the arrows and you are following the energy, which the producer captured from sunlight.",pic:[{"t":"theater","scene":"food-chain","part":"energy"}]}],
 items(add){
  /* 28 Oct (elfact): every why in this topic started with a lower-case letter ("dog is living."); each now starts with a capital. */
  {const _a0=add;add=(s,p,a,pic,why,acc)=>_a0(s,p,a,pic,typeof why==="string"?why.charAt(0).toUpperCase()+why.slice(1):why,acc);}
  const _SKIP=new Set(["A plant makes its own food from sunlight. What is a plant called in a food chain?","In the food chain grass -> rabbit -> fox, what does the rabbit eat?","A fox hunts a rabbit. What is the rabbit called?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["order","eats"];let _q=0;const _C={"grass -> rabbit -> fox":["grass","rabbit","fox"],"phytoplankton -> small fish -> big fish -> seal":["phytoplankton","small fish","big fish","seal"],"pond weed -> tadpole -> dragonfly larva -> heron":["pond weed","tadpole","dragonfly larva","heron"],"leaf -> caterpillar -> blue tit -> sparrowhawk":["leaf","caterpillar","blue tit","sparrowhawk"],"grass -> zebra -> lion":["grass","zebra","lion"],"oak tree -> squirrel -> fox":["oak tree","squirrel","fox"],"wheat -> field mouse -> kestrel":["wheat","field mouse","kestrel"],"algae -> krill -> cod -> seal -> polar bear":["algae","krill","cod","seal","polar bear"],"river weed -> snail -> trout -> otter":["river weed","snail","trout","otter"],"clover -> cow -> human":["clover","cow","human"]};
for(const name of Object.keys(_C)){const _L=_C[name];/* 28 Oct (elfact): each picture is now the chain itself, producer first, its ends labelled for a food chain (a timeline says earlier/later); it was a three-box first/then/then placeholder for chains of three to five links */
 /* A step that shows up twice in one chain has two different answers to "what comes
    after it", so it is not a fair question and the two prompts collide anyway. */
 const _seen={};for(const _s of _L)_seen[_s]=(_seen[_s]||0)+1;const _ok=_s=>_seen[_s]===1;
 for(let i=0;i<_L.length-1;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i+1],r=_L[i+1];
  add(_SK[_q++%_SK.length],"In the food chain "+(name)+", what eats the "+(x)+"?",r,{"t":"timeline","events":[..._L],"ends":["← the producer","is eaten by →"]},"The "+(r)+" eats the "+(x)+".");}
 for(let i=1;i<_L.length;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i-1],r=_L[i-1];add(_SK[_q++%_SK.length],"In the food chain "+(name)+", what does the "+(x)+" eat?",r,{"t":"timeline","events":[..._L],"ends":["← the producer","is eaten by →"]},"The "+(x)+" eats the "+(r)+".");}
 for(let _k=0;_k<_L.length;_k++){const i=_k+1,x=_L[_k],y=_L[_k],r=_L[_k];add(_SK[_q++%_SK.length],"In the food chain "+(name)+", what is number "+(i)+"?",r,{"t":"timeline","events":[..._L],"ends":["← the producer","is eaten by →"]},"Counting from the producer, number "+(i)+" is "+(r)+".");}
 for(let _a=0;_a<_L.length;_a++)for(let _b=_a+1;_b<_L.length;_b++){if(!_ok(_L[_a])||!_ok(_L[_b]))continue;/* Alternate which of the pair is named first, or the answer is always the second
      one named and a child learns the trick rather than the order. Parity, not a
      random number: a topic file has to be the same every time it loads. */
   const _flip=(_a+_b)%2===0,i=_a+1,x=_flip?_L[_a]:_L[_b],y=_flip?_L[_b]:_L[_a],r=_L[_a];add(_SK[_q++%_SK.length],"In the food chain "+(name)+", which comes first: "+(x)+" or "+(y)+"?",r,{"t":"timeline","events":[..._L],"ends":["← the producer","is eaten by →"]},""+(r)+" comes first in that chain.");}
 {const i=1,x=name,y=name,r=_L[0];add(_SK[_q++%_SK.length],"In the food chain "+(name)+", what is at the start?",r,{"t":"timeline","events":[..._L],"ends":["← the producer","is eaten by →"]},""+(r)+" is at the start: it is the producer, which makes its own food.");}
 {const i=_L.length,x=name,y=name,r=_L[_L.length-1];add(_SK[_q++%_SK.length],"In the food chain "+(name)+", what is at the end?",r,{"t":"timeline","events":[..._L],"ends":["← the producer","is eaten by →"]},"Nothing in that chain eats the "+(r)+".");}}}
{/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["grass","a producer"],["an oak tree","a producer"],["pond weed","a producer"],["algae","a producer"],["a sunflower","a producer"],["wheat","a producer"],["clover","a producer"],["seaweed","a producer"],["moss","a producer"],["a fern","a producer"],["a rabbit","a consumer"],["a fox","a consumer"],["a heron","a consumer"],["a caterpillar","a consumer"],["a zebra","a consumer"],["a lion","a consumer"],["an owl","a consumer"],["a trout","a consumer"],["a polar bear","a consumer"],["a cow","a consumer"]],_A=[(x,r,labels)=>"In a food chain, is "+(x)+" a producer or a consumer?",(x,r,labels)=>"Producer or consumer: "+(x)+"?"],_W=[(x,r,labels)=>""+(x)+" is "+(r)+"."],labels="a producer or a consumer";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add("roles",_A[_j](x,r,labels),r,{"t":"pair","a":x,"b":null},_W[_j%_W.length](x,r,labels),_V(r));}
 }};
