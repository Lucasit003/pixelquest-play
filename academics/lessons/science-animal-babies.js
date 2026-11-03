// Facts reviewed 3 Nov 2026 (improve20-r16c): 50 rows and the 3 Try-its checked against National Geographic Kids and Britannica young-animal names; 2 fixed ("What does a kid grow up to be?" fits a human child, so it names a baby farm animal, ids kept; colt, filly, pup, larva and polliwog now accepted).
// Limits: one reader, row by row, against those references as known to the reviewer; no page was fetched live. Generated sums are computed, not reviewed.
// Elementary topic: A baby animal has its own name, and grows up to look like its parent. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"science-e-animal-babies",subject:"science",level:3,grade:2,standard:"NGSS 1-LS3-1",
 title:"Animal babies",goal:"A baby animal has its own name, and grows up to look like its parent.",points:20,
 skills:{"names":"Baby names","grown":"The grown-up","match":"Matching them"},
 steps:[
 {skill:"names",say:"Animals have special names for their babies.  For example, a baby cat is called a kitten, and a baby horse is called a foal.",pic:[{"t":"pair","a":"cat","b":"kitten"}],eq:"cat: kitten, horse: foal"},
 {skill:"grown",say:"The baby grows up to look like its parent.  A kitten grows up to be a cat.",pic:[{"t":"pair","a":"kitten","b":"cat"}],eq:"kitten: cat",
  check:{prompt:"Look back: a foal grows up to look like its parent. What will it be?",answer:"a horse",options:["a horse","a cat","a dog"],hint:"A foal is a baby horse, so it grows up to be a horse.",pic:{"t":"pair","a":"foal","b":null,"fill":"a horse"}}},
 {skill:"match",say:"Let's match the baby animals with their parents.  A puppy is the baby of a dog.",pic:[{"t":"pair","a":"dog","b":"puppy"}],eq:"dog: puppy"},
 {skill:"match",say:"A baby rabbit is called a kit (people often say bunny). It grows up to be a rabbit.",pic:[{"t":"pair","a":"rabbit","b":"bunny"}],eq:"rabbit: bunny",
  check:{prompt:"Look back: what is the baby of a dog called?",answer:"puppy",options:["puppy","kitten","chick"],hint:"Look back: a puppy is the baby of a dog.",pic:{"t":"pair","a":"dog","b":null,"fill":"puppy"}}},
 {skill:"match",say:"A baby chicken is called a chick.  It grows up to be a chicken.",pic:[{"t":"pair","a":"chicken","b":"chick"}],eq:"chicken: chick"},
 {skill:"match",say:"A baby fish is called a fry.  It grows up to be a fish.",pic:[{"t":"pair","a":"fish","b":"fry"}],eq:"fish: fry",
  check:{prompt:"Look back: a chick grows up. What will it be?",answer:"chicken",options:["chicken","fish","dog"],hint:"Look back: a chick is the baby of a chicken.",pic:{"t":"pair","a":"chick","b":null,"fill":"chicken"}}}],
 items(add){
  const _SKIP=new Set(["What is the grown-up of a kitten?","What is the baby of a rabbit?","What is the grown-up of a fry?"]),_add=add;
  add=(s,p,a,pic,why,acc,key)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc,key);};
  /* 3 Nov (improve20-r16c): "What does a kid grow up to be?" fits a human child too (an adult), so that row names a baby farm animal, its ids kept from
     the old text (the key argument); a foal is also a colt or filly, a puppy a pup, a caterpillar a larva and a tadpole a polliwog, all now accepted. */
{const _SK=["names","match"];let _q=0;const _T=[["cat","kitten"],["dog","puppy"],["rabbit","bunny"],["chicken","chick"],["fish","fry"],["horse","foal"],["cow","calf"],["sheep","lamb"],["goat","kid"],["elephant","calf"],["giraffe","calf"],["hippo","calf"],["kangaroo","joey"],["koala","joey"],["panda","cub"],["lion","cub"],["tiger","cub"],["polar bear","cub"],["bear","cub"],["zebra","foal"],["deer","fawn"],["whale","calf"],["dolphin","calf"],["seal","pup"],["wolf","pup"],["fox","kit"],["owl","owlet"],["frog","tadpole"],["butterfly","caterpillar"],["pig","piglet"],["duck","duckling"],["goose","gosling"],["swan","cygnet"],["eagle","eaglet"],["penguin","chick"],["camel","calf"],["bat","pup"],["cheetah","cub"]],_X={"rabbit":["kit"],"wolf":["cub"],"fox":["cub","pup"],"horse":["colt","filly"],"zebra":["colt","filly"],"dog":["pup"],"butterfly":["larva"],"frog":["polliwog"]},_A=[(k,r)=>"What is the baby of a "+(k)+" called?",(k,r)=>"What do we call a baby "+(k)+"?"],_W=[(k,r)=>"A baby "+(k)+" is called a "+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](k,r),r,null,_W[_j%_W.length](k,r),_X[k]);}
{const _T=[["puppy","dog"],["kitten","cat"],["bunny","rabbit"],["lamb","sheep"],["kid","goat"],["tadpole","frog"],["piglet","pig"],["duckling","duck"],["gosling","goose"],["cygnet","swan"],["eaglet","eagle"],["owlet","owl"]],_X={},_A=[(k,r)=>"What does a "+(k)+" grow up to be?",(k,r)=>"A "+(k)+" is a baby. What is the grown-up called?"],_W=[(k,r)=>"A "+(k)+" grows up to be a "+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("grown",_A[_j](k==="kid"?"kid (a baby farm animal, not a child)":k,r),r,null,_W[_j%_W.length](k,r),_X[k],k==="kid"?_A[_j](k,r):undefined);}
 }};
