// UNVERIFIED: 29 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: An adjective tells you more about a noun. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"language-e-adjectives",subject:"language",level:3,grade:2,standard:"CCSS L.2.1.E",
 title:"Describing words",goal:"An adjective tells you more about a noun.",points:20,
 skills:{"spot":"Spotting adjectives","use":"Using them","sort":"Adjective or noun"},
 steps:[
 {skill:"spot",say:"An adjective describes a noun.  For example, in 'big dog', 'big' is an adjective that tells us more about 'dog'.",pic:[{"t":"pair","a":"big","b":"dog"}],eq:"big dog"},
 {skill:"spot",say:"In 'red ball', 'red' is an adjective that describes 'ball'.  It tells us the color of the ball.",pic:[{"t":"pair","a":"red","b":"ball"}],eq:"red ball",
  check:{prompt:"What is the adjective in 'blue sky'?",answer:"blue",options:["blue","sky","blue sky"],hint:"An adjective describes a noun. In 'blue sky', 'blue' describes 'sky'.",pic:{"t":"word","base":"blue sky"}}},
 {skill:"use",say:"You can use adjectives to make your descriptions more interesting.  For example, instead of just saying 'dog', you can say 'big, fluffy dog'.",pic:[{"t":"pair","a":"fluffy","b":"dog"}],eq:"big fluffy dog"},
 {skill:"use",say:"Adjectives can describe things in many ways.  For example, 'fast car' tells us how the car moves, and 'old house' tells us how old the house is.",pic:[{"t":"pair","a":"fast","b":"car"}],eq:"fast car",
  check:{prompt:"What is the noun in 'tall tree'?",answer:"tree",options:["tree","tall","tall tree"],hint:"An adjective describes a noun. In 'tall tree', 'tree' is the noun.",pic:{"t":"word","base":"tall tree"}}},
 {skill:"sort",say:"Now, let's sort words into adjectives and nouns.  'Cat' is a noun, and 'black' is an adjective that describes the cat.",pic:[{"t":"pair","a":"black","b":"cat"}],eq:"black cat"},
 {skill:"sort",say:"In 'happy children', 'happy' is an adjective that describes the children, and 'children' is a noun.",pic:[{"t":"pair","a":"happy","b":"children"}],eq:"happy children",
  check:{prompt:"Is 'quick' an adjective or a noun?",answer:"adjective",options:["adjective","noun","quickly"],hint:"An adjective describes a noun. 'Quick' describes how something moves.",pic:{"t":"word","base":"quick fox"}}}],
 items(add){
  const _SKIP=new Set(["What is the adjective in 'blue sky'?","What is the noun in 'tall tree'?","Is 'quick' an adjective or a noun?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["sort","spot","use"];let _q=0;/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _EG={"black":"cat","fast":"car","old":"house","blue":"sky","tall":"tree","happy":"child","red":"ball","big":"dog","fluffy":"cat","quick":"fox","green":"apple","yellow":"sun","small":"bird","heavy":"book","lazy":"dog"},_NG={"cat":"black","dog":"big","house":"old","sky":"blue","tree":"tall","children":"happy","car":"fast","ball":"red","fox":"quick","apple":"green","sun":"yellow","bicycle":"red","bird":"small","book":"heavy"},_T=[["cat","noun"],["black","adjective"],["dog","noun"],["fast","adjective"],["house","noun"],["old","adjective"],["sky","noun"],["blue","adjective"],["tree","noun"],["tall","adjective"],["children","noun"],["happy","adjective"],["car","noun"],["red","adjective"],["ball","noun"],["big","adjective"],["fluffy","adjective"],["fox","noun"],["quick","adjective"],["apple","noun"],["green","adjective"],["sun","noun"],["yellow","adjective"],["bicycle","noun"],["bird","noun"],["small","adjective"],["book","noun"],["heavy","adjective"],["lazy","adjective"]],_A=[(x,r,labels)=>"Is '"+(x)+"' a noun or an adjective?",(x,r,labels)=>"What part of speech is '"+(x)+"'?",(x,r,labels)=>"Can you tell me if '"+(x)+"' is a noun or a word that describes something?",(x,r,labels)=>"Is '"+(x)+"' a thing or a word that tells us more about a thing?"],_W=[(x,r,labels)=>r==="adjective"?"'"+(x)+"' describes a noun, as in 'the "+(x)+" "+(_EG[x]||"thing")+"', so it is an adjective.":"'"+(x)+"' is a noun: it names a person, animal, place or thing."],labels="noun or adjective";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
/* 26 Oct (elemfix): a bare word such as fast, black or blue can also be a noun or an adverb, so every word is now asked inside a short sentence that settles it. */
/* 28 Oct (elfact): the last two questions offer their own two choices ("a noun or a word that describes something", "a thing or a word that tells us more about a thing"), so the key is the choice they offer; noun and adjective are still accepted. Before, a child who typed the offered choice was marked wrong. */
{const _K=_j===2?(r==="noun"?"a noun":"a word that describes something"):_j===3?(r==="noun"?"a thing":"a word that tells us more about a thing"):r,_O=_j<2?_V(r):[...new Set([r,..._V(r),...(r==="noun"?(_j===3?["thing"]:["noun"]):["a describing word","describing word",_K.replace(/^a /,'')])])].filter(v=>v!==_K);
add(_SK[_q++%_SK.length],"Read: 'We saw the "+(r==="adjective"?x+" "+_EG[x]:_NG[x]+" "+x)+".' "+_A[_j](x,r,labels),_K,null,_W[_j%_W.length](x,r,labels),_O);}}
 }};
