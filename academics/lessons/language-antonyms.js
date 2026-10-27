// UNVERIFIED: 52 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Some words mean the opposite of each other. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"language-e-antonyms",subject:"language",level:3,grade:2,standard:"CCSS L.2.5",
 title:"Opposites",goal:"Some words mean the opposite of each other.",points:20,
 skills:{"opposite":"Opposite words","pairs":"Making pairs","use":"Using opposites"},
 steps:[
 {skill:"opposite",say:"Words can mean the opposite of each other.  For example, 'big' and 'small' are opposites.",pic:[{"t":"pair","a":"big","b":"small"}],eq:"big, small"},
 {skill:"opposite",say:"Another pair of opposites is 'hot' and 'cold'.",pic:[{"t":"pair","a":"hot","b":"cold"}],eq:"hot, cold",
  check:{prompt:"Look back at the first pair of opposites. What is the opposite of 'big'?",answer:"small",options:["small","tall","big"],hint:"Think of size. What is the opposite of being big?",pic:{"t":"word","base":"big"}}},
 {skill:"pairs",say:"Let's make pairs of opposite words.  Here is 'up' and 'down'.",pic:[{"t":"pair","a":"up","b":"down"}],eq:"up, down"},
 {skill:"pairs",say:"Now, 'fast' and 'slow' are opposites too.",pic:[{"t":"pair","a":"fast","b":"slow"}],eq:"fast, slow",
  check:{prompt:"Look back at the pair before. Make a pair of opposite words: 'up' and ?",answer:"down",options:["down","over","up"],hint:"Think of which way something moves. What is the opposite of going up?",pic:{"t":"word","base":"up"}}},
 {skill:"use",say:"We can use opposites in sentences.  The glass is full, but the jug is empty.",pic:[{"t":"pair","a":"full","b":"empty"}],eq:"full, empty"},
 {skill:"use",say:"Opposites help us describe things better.  Like, 'She is happy, but he is sad. '",pic:[{"t":"pair","a":"happy","b":"sad"}],eq:"happy, sad",
  check:{prompt:"Look back at the glass and the jug. What is the opposite of 'empty'?",answer:"full",options:["full","cold","small"],hint:"The glass was full, but the jug was empty.",pic:{"t":"word","base":"empty"}}}],
 items(add){
  const _SKIP=new Set(["What is the opposite of 'hot'?","Make a pair of opposite words: 'fast' and ?","The sun is bright, but the moon is dim. What is the opposite of dim?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["opposite","pairs","use"];let _q=0;const _T=[["big","small"],["hot","cold"],["fast","slow"],["up","down"],["happy","sad"],["light","dark"],["tall","short"],["old","young"],["heavy","lightweight"],["loud","quiet"],["wet","dry"],["full","empty"],["alive","dead"],["sharp","blunt"],["small","big"],["slow","fast"],["down","up"],["sad","happy"],["dark","light"],["short","tall"],["young","old"],["quiet","loud"],["dry","wet"],["empty","full"],["dead","alive"],["dull","sharp"],["bright","dark"],["noisy","quiet"],["high","low"],["quick","slow"],["above","below"],["cheerful","sad"],["dim","bright"],["below","above"],["weak","strong"],["soft","hard"],["calm","stormy"],["wide","narrow"],["shallow","deep"],["thin","thick"],["smooth","rough"],["flat","bumpy"],["early","late"],["strong","weak"],["hard","soft"],["stormy","calm"],["narrow","wide"],["deep","shallow"],["thick","thin"],["rough","smooth"],["bumpy","flat"],["late","early"]],_X={"heavy":["light"],"sharp":["dull"],"slow":["quick"],"sad":["cheerful"],"dark":["bright"],"quiet":["noisy"],"bright":["dim"]},_A=[(k,r)=>"What is the opposite of "+(k)+"?",(k,r)=>"Make a pair of opposite words: "+(k)+" and ?"],_W=[(k,r)=>""+(k)+": "+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](k,r),r,null,_W[_j%_W.length](k,r),_X[k]);}
 }};
