// Facts reviewed 3 Nov 2026 (improve20-r16c): 39 timeline entries and the 3 Try-its checked against Britannica (steam locomotive 1804, Benz petrol car 1886, Wright flyer 1903, telegraph 1830s-40s, telephone 1876, phonograph 1877, icebox early 1800s, electric refrigerator 1910s, washboard 1797, cassette 1963, CD 1982, abacus, adding machine); 0 fixed (the one hedged link, the cellar, is dropped: below).
// 3 Nov 2026 (improve20-r18d-nov3 #4): "a cool cellar", the first link of how people kept food cold, is dropped. Cool cellars and stored ice both go back to ancient
// times and no source orders them (R16C). The chain is now blocks of ice, the ice box, the electric refrigerator. Sources: stored natural ice is ancient (ice houses at Mari,
// Mesopotamia, c. 1780 BC, and in ancient China: Wikipedia "Ice house"; the 19th-century ice trade, Frederic Tudor from 1806, cut and sold blocks of ice: Britannica
// "refrigeration"); an ice box is a box cooled by a block of ice, so ice blocks came first (Thomas Moore's 1803 icebox: Wikipedia "Icebox"); home electric
// refrigerators from the 1910s (Britannica, as R16C checked). An order by necessity (the ice box needs the ice) plus dates, not a single page. The 6 questions that named the cellar, and "number 4 in order", are no longer served; a save holding their ids still loads (their answers are
// kept and simply match no pool question). The other questions of the chain keep their prompts and ids; "number 1/2/3" and "first of all" now answer from the shorter chain.
// Limits: one reader, row by row, against those references as known to the reviewer; no page was fetched live. Generated sums are computed, not reviewed.
// Elementary topic: Everyday things were invented in an order, and each one came after the one before it. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"history-e-how-things-changed",subject:"history",level:3,grade:3,standard:"NCSS Theme 2",
 title:"How things changed",goal:"Everyday things were invented in an order, and each one came after the one before it.",points:20,
 skills:{"order":"What came first","after":"What came next","compare":"Which is older"},
 steps:[
 {skill:"order",say:"People made many everyday tools over time. Our timelines show just a few examples. Not every place changed in the same way.",pic:[{"t":"timeline","events":["horse and cart","steam train","car","airplane"]}]},
 {skill:"order",say:"People traveled by horse and cart long before engines.",pic:[{"t":"word","base":"horse and cart"}],eq:"horse and cart, then the steam train",
  check:{prompt:"Which came first: the horse and cart, or the car?",answer:"the horse and cart",options:["the horse and cart","the car"],hint:"Engines came much later than horses.",pic:{"t":"word","base":"horse and cart"}}},
 {skill:"after",say:"First came the steam train. Then came the car with a petrol engine. The airplane came after that. In this lesson, the car means a petrol car.",pic:[{"t":"word","base":"steam train"}],eq:"train, car, airplane"},
 {skill:"after",say:"Oil lamps were used in ancient times, before candles. Gas lights and electric light bulbs came much later. For a long time, people used more than one kind.",pic:[{"t":"word","base":"light bulb"}],eq:"fire, oil lamp, candle, gas lamp, light bulb",
  check:{"prompt":"Look back: which came first, the steam train or the airplane?","answer":"the steam train","options":["the steam train","the airplane"],"hint":"The steam train came first. The airplane came much later.","pic":{"t":"pair","a":"steam train","b":"airplane"}}},
 {skill:"compare",say:"On a timeline, the thing that comes first is the older one.",pic:[{"t":"timeline","events":["firelight","oil lamp","candle","gas lamp","light bulb"]}]},
 {skill:"compare",say:"The telephone is older than television. People talked over wires long before anyone watched TV.",pic:[{"t":"word","base":"telephone"}],eq:"telephone, then television",
  check:{"prompt":"Look back: which came first in homes, candles or the electric light bulb?","answer":"candles","options":["candles","the electric light bulb"],"hint":"Candles came long before electric light.","pic":{"t":"pair","a":"candles","b":"light bulb"}}},
 {skill:"order",say:"Read the order of the examples. Coming first does not mean it caused the next one. Straight before means the entry just before it on our timeline. Straight after means the entry just after it.",pic:[{"t":"timeline","events":["letter","telegraph","telephone","radio","television","internet"]}]}],
 items(add){
  const _SKIP=new Set(["Which came first: the horse and cart, or the car?","People lit their homes with candles before which of these?","Which is older: the telephone or the television?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
  /* "the computer" before "the electronic calculator" is true only of the first, room-sized electronic computers, so say so; and start every why with a capital letter. */
  const _CALC=" The first electronic computers were room-sized machines of the 1940s; the first electronic desk calculators came in the 1960s.",_add2=add;
  add=(s,p,a,pic,why,acc)=>{why=why.charAt(0).toUpperCase()+why.slice(1);_add2(s,p,a,pic,/the computer|electronic calculator/.test(p+" "+a)?why+_CALC:why,acc);};
{const _SK=["order","after","compare"];let _q=0;const _C={"how people traveled":["the horse and cart","the steam train","the car","the airplane","the rocket to space"],"how people sent messages":["a handwritten letter","the telegraph","the telephone","the radio","the television","the internet"],"how people lit their homes":["firelight","the oil lamp","the candle","the gas lamp","the electric light bulb"],"how people kept food cold":["blocks of ice","the ice box","the electric refrigerator"],"how people washed clothes":["washing by hand in a river","the washboard and tub","the hand-cranked washer","the electric washing machine"],"how people listened to music":["live players only","the phonograph","the radio","the cassette player","the compact disc","music on a phone"],"how people took pictures":["the black-and-white film camera","the color film camera","the digital camera","the camera in a phone"],"how people worked out sums":["counting on fingers","the abacus","the adding machine","the computer","the electronic calculator"]};
for(const name of Object.keys(_C)){const _L=_C[name];
 /* A step that shows up twice in one chain has two different answers to "what comes
    after it", so it is not a fair question and the two prompts collide anyway. */
 const _seen={};for(const _s of _L)_seen[_s]=(_seen[_s]||0)+1;const _ok=_s=>_seen[_s]===1;
 for(let i=0;i<_L.length-1;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i+1],r=_L[i+1];
  add(_SK[_q++%_SK.length],"In "+(name)+", what came straight after "+(x)+"?",r,{"t":"timeline","events":["older","...","newer"]},""+(r)+" came straight after "+(x)+".");}
 for(let i=1;i<_L.length;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i-1],r=_L[i-1];add(_SK[_q++%_SK.length],"In "+(name)+", what came straight before "+(x)+"?",r,{"t":"timeline","events":["older","...","newer"]},""+(r)+" came before "+(x)+".");}
 for(let _k=0;_k<_L.length;_k++){const i=_k+1,x=_L[_k],y=_L[_k],r=_L[_k];add(_SK[_q++%_SK.length],"In "+(name)+", which one is number "+(i)+" in order?",r,{"t":"timeline","events":["older","...","newer"]},"Counting from the oldest, number "+(i)+" is "+(r)+".");}
 for(let _a=0;_a<_L.length;_a++)for(let _b=_a+1;_b<_L.length;_b++){if(!_ok(_L[_a])||!_ok(_L[_b]))continue;/* Alternate which of the pair is named first, or the answer is always the second
      one named and a child learns the trick rather than the order. Parity, not a
      random number: a topic file has to be the same every time it loads. */
   const _flip=(_a+_b)%2===0,i=_a+1,x=_flip?_L[_a]:_L[_b],y=_flip?_L[_b]:_L[_a],r=_L[_a];add(_SK[_q++%_SK.length],"Which came first: "+(x)+" or "+(y)+"?",r,{"t":"timeline","events":["older","...","newer"]},""+(r)+" came first.");}
 {const i=1,x=name,y=name,r=_L[0];add(_SK[_q++%_SK.length],"In "+(name)+", which came first of all?",r,{"t":"timeline","events":["older","...","newer"]},""+(r)+" is the oldest of them.");}
 {const i=_L.length,x=name,y=name,r=_L[_L.length-1];add(_SK[_q++%_SK.length],"In "+(name)+", which is the newest?",r,{"t":"timeline","events":["older","...","newer"]},""+(r)+" is the newest of them.");}
 /* improve20-r18d-nov3 #4: the food chain lost its first link (6 fewer questions); the later chains keep the skills they had */if(name==="how people kept food cold")_q+=6;}}
 }};
