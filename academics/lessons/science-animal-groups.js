// UNVERIFIED: 52 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Animals that are alike in certain ways belong to the same group. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"science-e-animal-groups",subject:"science",level:3,grade:2,standard:"NGSS 1-LS3-1",
 title:"Animal groups",goal:"Animals that are alike in certain ways belong to the same group.",points:20,
 skills:{"mammals":"Mammals","birds":"Birds","sort":"Sorting animals"},
 steps:[
 {skill:"mammals",say:"Mammals are animals that have fur or hair, and they usually give birth to live young.  Examples include dogs, cats, and elephants.",pic:[{"t":"tiles","seq":["dog","cat","elephant"]}],eq:"Mammals: fur, hair, live birth"},
 {skill:"birds",say:"Birds are animals that have feathers and lay eggs.  Examples include chickens, eagles, and sparrows.",pic:[{"t":"tiles","seq":["chicken","eagle","sparrow"]}],eq:"Birds: feathers, lay eggs"},
 {skill:"sort",say:"Let's sort these animals into groups.  Mammals go in one group, and birds go in another.",pic:[{"t":"tiles","seq":["dog","cat","elephant","chicken","eagle","sparrow"]}],eq:"Sort: mammals, birds",
  check:{prompt:"Which group is the dog in?",answer:"mammal",options:["mammal","bird","fish"],hint:"Dogs have fur and give birth to live young.",pic:{"t":"tiles","seq":["dog"]}}},
 {skill:"sort",say:"Fish live in water.  They breathe through gills and swim with fins.  A shark is a fish.",pic:[{"t":"tiles","seq":["dog","cat","elephant","chicken","eagle","sparrow","fish","insect","reptile"]}],eq:"Sort: mammals, birds, fish, insects, reptiles",
  check:{prompt:"Which group is the chicken in?",answer:"bird",options:["bird","mammal","reptile"],hint:"Chickens have feathers and lay eggs.",pic:{"t":"tiles","seq":["chicken"]}}},
 {skill:"sort",say:"Remember, mammals have fur or hair and usually give birth to live young.  Birds have feathers and lay eggs.",pic:[{"t":"tiles","seq":["dog","cat","elephant","chicken","eagle","sparrow","fish","insect","reptile"]}],eq:"Sort: mammals, birds, fish, insects, reptiles",
  check:{prompt:"Which group is the shark in?",answer:"fish",options:["fish","mammal","reptile"],hint:"Fish live in water and have scales.",pic:{"t":"tiles","seq":["fish"]}}},
 {skill:"sort",say:"Insects have six legs, like ants and bees.  Reptiles have dry, scaly skin, like snakes and lizards.",pic:[{"t":"tiles","seq":["dog","cat","elephant","chicken","eagle","sparrow","fish","insect","reptile"]}],eq:"Sort: mammals, birds, fish, insects, reptiles"}],
 items(add){
  const _SKIP=new Set(["Which group is the dog in?","Which group is the chicken in?","Which group is the shark in?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["mammals","birds","sort"];let _q=0;/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["dog","mammal"],["cat","mammal"],["elephant","mammal"],["chicken","bird"],["eagle","bird"],["sparrow","bird"],["shark","fish"],["butterfly","insect"],["ladybug","insect"],["turtle","reptile"],["snake","reptile"],["cow","mammal"],["horse","mammal"],["lion","mammal"],["penguin","bird"],["dolphin","mammal"],["kangaroo","mammal"],["guppy","fish"],["parrot","bird"],["robin","bird"],["bee","insect"],["lizard","reptile"],["gecko","reptile"],["mosquito","insect"],["dragonfly","insect"],["whale","mammal"],["bat","mammal"],["mouse","mammal"],["bear","mammal"],["rabbit","mammal"],["monkey","mammal"],["owl","bird"],["duck","bird"],["ostrich","bird"],["pigeon","bird"],["salmon","fish"],["goldfish","fish"],["tuna","fish"],["trout","fish"],["crocodile","reptile"],["alligator","reptile"],["tortoise","reptile"],["ant","insect"],["beetle","insect"],["grasshopper","insect"],["zebra","mammal"],["tiger","mammal"],["giraffe","mammal"],["flamingo","bird"],["cod","fish"],["iguana","reptile"],["wasp","insect"]],_A=[(x,r,labels)=>"Is the "+(x)+" a mammal, a bird, a fish, an insect or a reptile?",(x,r,labels)=>"Which animal group is the "+(x)+" in: mammal, bird, fish, insect or reptile?"],_W=[(x,r,labels)=>"The "+(x)+" is a "+(r)+"."],labels="mammal or bird or fish or insect or reptile";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](x,r,labels),r,{"t":"tiles","seq":["dog","cat","elephant","chicken","eagle","sparrow","fish","insect","reptile"]},_W[_j%_W.length](x,r,labels),_V(r));}
 }};
