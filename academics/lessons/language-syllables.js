// UNVERIFIED: 60 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Every word has beats you can clap. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"language-e-syllables",subject:"language",level:3,grade:2,standard:"CCSS RF.2.3.C",
 title:"Beats in a word",goal:"Every word has beats you can clap.",points:20,
 skills:{"clap":"Clapping beats","count":"Counting beats","sort":"Sorting words"},
 steps:[
 {skill:"clap",say:"Let's clap the beats in the word 'cat'.  It has one beat: /cat/.",pic:[{"t":"tiles","seq":["cat"]}],eq:"/cat/"},
 {skill:"clap",say:"Now let's clap the beats in 'apple'.  It has two beats: /ap/ /ple/.",pic:[{"t":"tiles","seq":["ap","ple"]}],eq:"/ap/ /ple/",
  check:{prompt:"How many beats are in 'apple'?",answer:"2",options:["2","1","3"],hint:"Clap the beats: /ap/ /ple/.",pic:{"t":"word","base":"apple"}}},
 {skill:"clap",say:"Here's 'banana'.  It has three beats: /ba/ /na/ /na/.",pic:[{"t":"tiles","seq":["ba","na","na"]}],eq:"/ba/ /na/ /na/"},
 {skill:"count",say:"How many beats are in 'cat'?  It has one beat.",pic:[{"t":"tiles","seq":["cat"]}],eq:"/cat/",
  check:{prompt:"Clap the beats in 'cat'. How many beats are there?",answer:"1",options:["1","2","3"],hint:"Clap the beat: /cat/.",pic:{"t":"word","base":"cat"}}},
 {skill:"count",say:"How many beats are in 'apple'?  It has two beats.",pic:[{"t":"tiles","seq":["ap","ple"]}],eq:"/ap/ /ple/"},
 {skill:"sort",say:"Let's sort these words by their beats.  'Cat' has one beat, 'apple' has two beats, and 'banana' has three beats.",pic:[{"t":"tiles","seq":["ba","na","na"]}],eq:"/cat/, /ap/ /ple/, /ba/ /na/ /na/",
  check:{prompt:"Sort 'banana' by its beats. How many beats does it have?",answer:"3",options:["3","1","2"],hint:"Clap the beats: /ba/ /na/ /na/.",pic:{"t":"word","base":"banana"}}}],
 items(add){
  const _SKIP=new Set(["How many beats are in 'apple'?","Clap the beats in 'cat'. How many beats are there?","Sort 'banana' by its beats. How many beats does it have?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["sort","clap","count"];let _q=0;/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["cat","1 beat"],["dog","1 beat"],["hat","1 beat"],["sun","1 beat"],["bird","1 beat"],["boat","1 beat"],["tree","1 beat"],["book","1 beat"],["house","1 beat"],["chair","1 beat"],["moon","1 beat"],["plane","1 beat"],["bus","1 beat"],["star","1 beat"],["train","1 beat"],["truck","1 beat"],["fish","1 beat"],["frog","1 beat"],["cake","1 beat"],["ship","1 beat"],["apple","2 beats"],["pencil","2 beats"],["rabbit","2 beats"],["monkey","2 beats"],["table","2 beats"],["window","2 beats"],["doctor","2 beats"],["baby","2 beats"],["water","2 beats"],["tiger","2 beats"],["zebra","2 beats"],["candy","2 beats"],["basket","2 beats"],["rocket","2 beats"],["button","2 beats"],["pizza","2 beats"],["turtle","2 beats"],["muffin","2 beats"],["kitten","2 beats"],["garden","2 beats"],["banana","3 beats"],["elephant","3 beats"],["bicycle","3 beats"],["dinosaur","3 beats"],["butterfly","3 beats"],["kangaroo","3 beats"],["tomato","3 beats"],["potato","3 beats"],["computer","3 beats"],["octopus","3 beats"],["telephone","3 beats"],["hamburger","3 beats"],["pajamas","3 beats"],["umbrella","3 beats"],["animal","3 beats"],["vanilla","3 beats"],["gorilla","3 beats"],["spaghetti","3 beats"],["tornado","3 beats"],["volcano","3 beats"]],_A=[(x,r,labels)=>"How many beats are in '"+(x)+"'?",(x,r,labels)=>"How many times can you clap for the word '"+(x)+"'?",(x,r,labels)=>"If you were counting the claps for '"+(x)+"', how many would you say?",(x,r,labels)=>"Can you tell me how many beats are in the word '"+(x)+"' by counting your claps?"],_W=[(x,r,labels)=>""+(x)+" is "+(r)+"."],labels="1 beat or 2 beats or 3 beats";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](x,r,labels),r,{"t":"word","base":x},_W[_j%_W.length](x,r,labels),_V(r));}
 }};
