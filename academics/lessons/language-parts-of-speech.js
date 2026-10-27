// UNVERIFIED: 48 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Name the job a word does in a sentence: noun, verb, adjective or adverb. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"language-e-parts-of-speech",subject:"language",level:3,grade:3,standard:"CCSS L.3.1a",
 title:"Parts of speech",goal:"Name the job a word does in a sentence: noun, verb, adjective or adverb.",points:20,
 skills:{"name":"Naming the part","job":"What each part does","spot":"Spotting it in a sentence"},
 steps:[
 {skill:"job",say:"Every word in a sentence has a job.  A noun names a person, a place or a thing.",pic:[{"t":"pair","a":"noun","b":"dog, city, cup"}]},
 {skill:"job",say:"A verb is what happens: run, eat, think, is.",pic:[{"t":"pair","a":"verb","b":"run, eat, think"}],
  check:{prompt:"In 'I jump over the puddles', what part of speech is 'jump'?",answer:"verb",options:["verb","noun","adjective"],hint:"It is what the sentence says you do.",pic:{"t":"word","base":"jump"}}},
 {skill:"job",say:"An adjective describes a noun: a red cup, a tall tree.",pic:[{"t":"pair","a":"adjective","b":"red, tall"}]},
 {skill:"name",say:"An adverb describes a verb, and often tells how: she ran quickly, he spoke softly.",pic:[{"t":"pair","a":"adverb","b":"quickly, softly"}],
  check:{"prompt":"In 'the cat purred happily', what part of speech is 'happily'?","answer":"adverb","options":["adverb","adjective","verb"],"hint":"It tells you how the cat purred.","pic":{"t":"word","base":"happily"}}},
 {skill:"spot",say:"In 'the small dog barked loudly', small describes the dog and loudly describes the barking.",pic:[{"t":"word","base":"loudly"}],eq:"small: adjective, loudly: adverb",
  check:{prompt:"In 'the small dog barked loudly', what part of speech is 'small'?",answer:"adjective",options:["adjective","adverb","noun"],hint:"It describes the dog.",pic:{"t":"word","base":"small"}}},
 {skill:"spot",say:"Ask what the word is doing.  Naming, happening, describing a thing, or describing an action.",pic:[{"t":"pair","a":"the word","b":"its job"}]}],
 items(add){
  const _SKIP=new Set(["In 'I jump over the puddles', what part of speech is 'jump'?","What part of speech is 'quickly'?","In 'the small dog barked loudly', what part of speech is 'small'?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["name","spot"];let _q=0;const _T=[["'dog' in 'The dog barked'","a noun"],["'city' in 'We drove into the city'","a noun"],["'cup' in 'She filled the cup'","a noun"],["'teacher' in 'Our teacher smiled'","a noun"],["'river' in 'The river froze'","a noun"],["'bicycle' in 'My bicycle has a bell'","a noun"],["'happiness' in 'Her happiness showed'","a noun"],["'jump' in 'He won the long jump'","a noun"],["'run' in 'They went for a run'","a noun"],["'sister' in 'My sister waited'","a noun"],["'barked' in 'The dog barked'","a verb"],["'filled' in 'She filled the cup'","a verb"],["'jump' in 'I jump over the puddles'","a verb"],["'run' in 'We run to school'","a verb"],["'thinks' in 'He thinks about it'","a verb"],["'sings' in 'She sings every day'","a verb"],["'built' in 'They built a den'","a verb"],["'slept' in 'The cat slept'","a verb"],["'carried' in 'He carried the box'","a verb"],["'listen' in 'Please listen carefully'","a verb"],["'red' in 'the red cup'","an adjective"],["'tall' in 'a tall tree'","an adjective"],["'happy' in 'a happy child'","an adjective"],["'cold' in 'the cold water'","an adjective"],["'heavy' in 'a heavy box'","an adjective"],["'noisy' in 'the noisy room'","an adjective"],["'soft' in 'a soft blanket'","an adjective"],["'empty' in 'an empty jar'","an adjective"],["'wooden' in 'a wooden spoon'","an adjective"],["'bright' in 'a bright light'","an adjective"],["'quickly' in 'She ran quickly'","an adverb"],["'slowly' in 'He walked slowly'","an adverb"],["'softly' in 'They spoke softly'","an adverb"],["'loudly' in 'The dog barked loudly'","an adverb"],["'carefully' in 'She carried it carefully'","an adverb"],["'badly' in 'He sang badly'","an adverb"],["'neatly' in 'He wrote neatly'","an adverb"],["'suddenly' in 'It suddenly rained'","an adverb"],["'rarely' in 'We rarely go there'","an adverb"],["'everywhere' in 'Crumbs were everywhere'","an adverb"]],_X={},_A=[(k,r)=>"What part of speech is "+(k)+"?",(k,r)=>"Name the job of "+(k)+": noun, verb, adjective or adverb.",(k,r)=>"In that sentence, is "+(k)+" a noun, a verb, an adjective or an adverb?"],_W=[(k,r)=>"There, "+(k)+" is "+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](k,r),r,{"t":"passages","title":"Find "+k.split(" in ")[0],"texts":[k.slice(k.indexOf(" in '")+5,-1)]},_W[_j%_W.length](k,r),_X[k]);}
{const _T=[["names a person, a place or a thing","a noun"],["says what happens","a verb"],["describes a noun","an adjective"],["describes a verb","an adverb"],["tells you how something was done","an adverb"],["names an idea like happiness","a noun"],["describes how an action is done","an adverb"],["comes after 'the' and names a thing","a noun"]],_X={},_A=[(k,r)=>"Which part of speech "+(k)+"?",(k,r)=>"A word that "+(k)+" is called what?"],_W=[(k,r)=>"A word that "+(k)+" is "+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("job",_A[_j](k,r),r,{"t":"pair","a":k,"b":null},_W[_j%_W.length](k,r),_X[k]);}
 }};
