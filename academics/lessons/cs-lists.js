// UNVERIFIED: 45 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Find what is at a position in a list, and which position a thing is in. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-lists",subject:"cs",level:3,grade:3,standard:"CSTA 1B-AP-09",
 title:"Lists and positions",goal:"Find what is at a position in a list, and which position a thing is in.",points:20,
 skills:{"at":"What is at a position","where":"Which position","ends":"First and last"},
 steps:[
 {skill:"at",say:"A list keeps things in order, and each place in it has a number.",pic:[{"t":"tiles","seq":["1st","2nd","3rd","4th"]}]},
 {skill:"at",say:"In the list red, blue, green, yellow, the third thing is green.",pic:[{"t":"tiles","seq":["red","blue","green","yellow"]}],eq:"position 3 is green",
  check:{"prompt":"In the list cat, dog, fish, bird, what is in position 3?","answer":"fish","options":["fish","dog","bird"],"hint":"Count from the front: cat, dog, then fish.","pic":{"t":"tiles","seq":["cat","dog","fish","bird"]}}},
 {skill:"where",say:"It works the other way: blue is in position 2.",pic:[{"t":"tiles","seq":["red","blue","green","yellow"]}],eq:"blue is 2nd",
  check:{"prompt":"In the list red, blue, green, yellow, which position is yellow in?","answer":4,"options":[4,3,1],"hint":"Count from the front: red is 1, blue is 2, green is 3.","pic":{"t":"tiles","seq":["red","blue","green","yellow"]}}},
 {skill:"ends",say:"The first is at the front, and the last is at the end, however long the list.",pic:[{"t":"tiles","seq":["first","...","last"]}],
  check:{prompt:"In the list red, blue, green, yellow, what is last?",answer:"yellow",options:["yellow","red","green"],hint:"The end of the list.",pic:{"t":"tiles","seq":["red","blue","green","yellow"]}}},
 {skill:"ends",say:"Adding to the end does not move anything already in the list.",pic:[{"t":"tiles","seq":["red","blue","green","yellow","black"]}]},
 {skill:"at",say:"Count from the front, and the position tells you exactly where to look.",pic:[{"t":"tiles","seq":["1","2","3","4","5"]}]}],
 items(add){
  const _SKIP=new Set(["In the list red, blue, green, yellow, what is in position 3?","In the same list, which position is blue in?","In the list red, blue, green, yellow, what is last?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["at","where","ends"];let _q=0;const _C={"red, blue, green, yellow":["red","blue","green","yellow"],"the shopping list":["bread","milk","eggs","apples","rice"],"the queue at the door":["Ana","Ben","Chen","Dara"],"the playlist":["drums","piano","guitar","flute","violin"],"the tool box":["hammer","screwdriver","spanner","pliers"],"the bookshelf":["atlas","dictionary","novel","comic","poems"],"the lunch tray":["soup","bread","cheese","apple"],"the paint set":["white","grey","brown","black","gold"],"the seed packets":["beans","carrots","peas","onions"],"the stops on the bus route":["market","school","park","library","station"]};
for(const name of Object.keys(_C)){const _L=_C[name];/* the list itself, one item to a line, large enough to read on a phone (word tiles were not) */const _PIC={"t":"program","title":/^the /.test(name)?"T"+name.slice(1):"The list","lines":[..._L]};
 /* A step that shows up twice in one chain has two different answers to "what comes
    after it", so it is not a fair question and the two prompts collide anyway. */
 /* 26 Oct (elemfix): "In the list the shopping list" read badly; a named list is now "In the shopping list". */
 const _IN=name==="the stops on the bus route"?"In the list of stops on the bus route":/^the /.test(name)?"In "+name:"In the list "+name;const _seen={};for(const _s of _L)_seen[_s]=(_seen[_s]||0)+1;const _ok=_s=>_seen[_s]===1;
 for(let i=0;i<_L.length-1;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i+1],r=_L[i+1];
  add(_SK[_q++%_SK.length],_IN+", what comes straight after '"+(x)+"'?",r,_PIC,"'"+(r)+"' comes straight after '"+(x)+"'.");}
 for(let i=1;i<_L.length;i++){if(!_ok(_L[i]))continue;const x=_L[i],y=_L[i-1],r=_L[i-1];add(_SK[_q++%_SK.length],_IN+", what comes straight before '"+(x)+"'?",r,_PIC,"'"+(r)+"' comes straight before '"+(x)+"'.");}
 for(let _k=0;_k<_L.length;_k++){const i=_k+1,x=_L[_k],y=_L[_k],r=_L[_k];add(_SK[_q++%_SK.length],_IN+", what is in position "+(i)+"?",r,_PIC,"Counting from the front, position "+(i)+" holds '"+(r)+"'.");}
 for(let _a=0;_a<_L.length;_a++)for(let _b=_a+1;_b<_L.length;_b++){if(!_ok(_L[_a])||!_ok(_L[_b]))continue;/* Alternate which of the pair is named first, or the answer is always the second
      one named and a child learns the trick rather than the order. Parity, not a
      random number: a topic file has to be the same every time it loads. */
   const _flip=(_a+_b)%2===0,i=_a+1,x=_flip?_L[_a]:_L[_b],y=_flip?_L[_b]:_L[_a],r=_L[_a];add(_SK[_q++%_SK.length],_IN+", which comes earlier: '"+(x)+"' or '"+(y)+"'?",r,_PIC,"'"+(r)+"' is nearer the front.");}
 {const i=1,x=name,y=name,r=_L[0];add(_SK[_q++%_SK.length],_IN+", what is first?",r,_PIC,"'"+(r)+"' is at the front.");}
 {const i=_L.length,x=name,y=name,r=_L[_L.length-1];add(_SK[_q++%_SK.length],_IN+", what is last?",r,_PIC,"'"+(r)+"' is at the end.");}}}
 }};
