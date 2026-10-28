// UNVERIFIED: 46 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Some steps must come before others. A plan works when those steps are in the right order; other steps can sometimes swap. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-steps-in-order",subject:"cs",level:3,grade:2,standard:"CSTA 1A-AP-10",
 title:"Steps in order",goal:"Some steps must come before others. A plan works when those steps are in the right order; other steps can sometimes swap.",points:20,
 skills:{"next":"What comes next","first":"What comes first","order":"Why order matters"},
 steps:[
 {skill:"first",say:"Our plan is a list of steps to follow in order, one at a time. Some computer programs can also run tasks at the same time.",pic:[{"t":"timeline","events":["step 1","step 2","step 3"]}]},
 {skill:"first",say:"To post a letter you write it, fold it, put it in the envelope, seal it, then add a stamp.",pic:[{"t":"timeline","events":["write it","fold it","put it in","seal it","stamp it"]}],
  check:{"prompt":"When you wash your hands, which of these steps comes first?","answer":"wet your hands","options":["wet your hands","rub on soap","rinse the soap off"],"hint":"The soap lathers on wet hands, and there is nothing to rinse until the soap is on.","pic":{"t":"timeline","events":["wet your hands","soap","rinse","dry"]}}},
 {skill:"order",say:"To mail a letter inside an envelope, put the letter in before sealing it. Otherwise you would need to reopen the envelope.",pic:[{"t":"pair","a":"put it in","b":"seal it"}]},
 {skill:"next",say:"To plant a seed: dig a hole, drop the seed in, cover it with soil, then water it.",pic:[{"t":"timeline","events":["dig","drop in","cover","water"]}],
  check:{prompt:"In posting a letter, what comes straight after you seal it?",answer:"add a stamp",options:["add a stamp","fold it","write it"],hint:"Remember the letter plan: write, fold, put it in, seal, then the last step.",pic:{"t":"timeline","events":["seal it","?"]}}},
 {skill:"order",say:"In this planting plan, put the seed in the hole before covering it. Some seeds can sprout on the surface, so being on top does not always prevent growth.",pic:[{"t":"pair","a":"drop in","b":"cover"}],
  check:{prompt:"Why can't you cover the hole before dropping the seed in?",answer:"the seed would be left on top",options:["the seed would be left on top","it would grow faster","it makes no difference"],hint:"Think about where the seed ends up.",pic:{"t":"pair","a":"cover","b":"drop in"}}},
 {skill:"next",say:"Find the step you are on, and the next one is the one that needs it done.",pic:[{"t":"timeline","events":["now","next"]}]}],
 items(add){
  const _SKIP=new Set(["In posting a letter, what comes straight after you fold it?","In planting a seed, what comes first?","Why can't you cover the hole before dropping the seed in?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["next","first","order"];let _q=0;const _C={"posting a letter":["write the letter","fold it","put it in the envelope","seal the envelope","add a stamp"],"planting a seed":["dig a hole","drop the seed in","cover it with soil","water it"],"making toast":["take out a slice of bread","put it in the toaster","push the lever down","wait for it to pop up","spread the butter"],"washing your hands":["turn on the tap","wet your hands","rub on the soap","scrub them","rinse them","dry them"],"riding a bike":["put on your helmet","get on the seat","push off with one foot","start pedalling"],"brushing your teeth":["wet the brush","squeeze on the toothpaste","brush your teeth","spit it out","rinse the brush"],"baking a cake":["mix the ingredients","pour it into the tin","bake it in the oven","let it cool","ice the top"],"borrowing a library book":["find the book on the shelf","take it to the desk","scan your card","take the book home"],"getting dressed for the rain":["put on your coat","do up the zip","pull up your hood","open the umbrella"],"feeding a fish":["open the tank lid","shake in the food","watch the fish eat","close the lid"]};
for(const name of Object.keys(_C)){const _L=_C[name];/* 28 Oct (elfact): the plan itself, numbered, so "which step is number 4" can be answered (the old picture was a blank first/then/then timeline) */const _PIC={"t":"program","title":"The plan for "+name,"lines":_L.map((s,i)=>(i+1)+". "+s)};
 /* A step that shows up twice in one chain has two different answers to "what comes
    after it", so it is not a fair question and the two prompts collide anyway. */
 const _seen={};for(const _s of _L)_seen[_s]=(_seen[_s]||0)+1;const _ok=_s=>_seen[_s]===1;
 for(let i=0;i<_L.length-1;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i+1],r=_L[i+1];
  add(_SK[_q++%_SK.length],"In the plan for "+(name)+", what comes straight after '"+(x)+"'?",r,_PIC,"'"+(r)+"' comes straight after '"+(x)+"'.");}
 for(let i=1;i<_L.length;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i-1],r=_L[i-1];add(_SK[_q++%_SK.length],"In the plan for "+(name)+", what comes straight before '"+(x)+"'?",r,_PIC,"'"+(r)+"' has to be done before '"+(x)+"'.");}
 for(let _k=0;_k<_L.length;_k++){const i=_k+1,x=_L[_k],y=_L[_k],r=_L[_k];add(_SK[_q++%_SK.length],"In the plan for "+(name)+", which step is number "+(i)+"?",r,_PIC,"Counting from the start, step "+(i)+" is '"+(r)+"'.");}
 for(let _a=0;_a<_L.length;_a++)for(let _b=_a+1;_b<_L.length;_b++){if(!_ok(_L[_a])||!_ok(_L[_b]))continue;/* Alternate which of the pair is named first, or the answer is always the second
      one named and a child learns the trick rather than the order. Parity, not a
      random number: a topic file has to be the same every time it loads. */
   const _flip=(_a+_b)%2===0,i=_a+1,x=_flip?_L[_a]:_L[_b],y=_flip?_L[_b]:_L[_a],r=_L[_a];add(_SK[_q++%_SK.length],"In the plan for "+(name)+", which is done first: '"+(x)+"' or '"+(y)+"'?",r,_PIC,"'"+(r)+"' is done first.");}
 {const i=1,x=name,y=name,r=_L[0];add(_SK[_q++%_SK.length],"In the plan for "+(name)+", which step is first?",r,_PIC,"'"+(r)+"' starts the plan.");}
 {const i=_L.length,x=name,y=name,r=_L[_L.length-1];add(_SK[_q++%_SK.length],"In the plan for "+(name)+", which step is last?",r,_PIC,"'"+(r)+"' finishes the plan.");}}}
 }};
