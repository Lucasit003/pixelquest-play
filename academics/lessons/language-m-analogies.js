// Middle School topic (Grade 7, CCSS L.7.5b): word relationships and analogies. Every question is built here from a
// table of word pairs, each tagged with one relationship (synonyms, antonyms, part to whole, young to adult, tool to
// worker, item to category). An analogy is completed by the word that stands in the same relationship to the given
// word, and the wrong options come from other rows, so they never stand in that relationship. The pairs are
// ordinary word knowledge: animal young, tools of a trade, members of a category.
const REL={
 synonyms:[['big','large'],['quick','fast'],['begin','start'],['shout','yell'],['tiny','small'],['glad','happy'],['silent','quiet'],['close','shut'],['gift','present'],['chilly','cold']],
 antonyms:[['hot','cold'],['up','down'],['early','late'],['full','empty'],['rough','smooth'],['ancient','modern'],['brave','cowardly'],['generous','selfish'],['shallow','deep'],['victory','defeat']],
 'part to whole':[['petal','flower'],['wheel','bicycle'],['page','book'],['key','keyboard'],['finger','hand'],['branch','tree'],['room','house'],['string','guitar'],['lens','camera'],['chapter','novel']],
 'young to adult':[['puppy','dog'],['kitten','cat'],['calf','cow'],['foal','horse'],['lamb','sheep'],['cub','bear'],['chick','hen'],['tadpole','frog'],['duckling','duck'],['piglet','pig']],
 'tool to worker':[['hammer','carpenter'],['stethoscope','doctor'],['brush','painter'],['needle','tailor'],['oven','baker'],['whistle','referee'],['shovel','gardener'],['microscope','scientist'],['scissors','hairdresser'],['easel','artist']],
 'item to category':[['apple','fruit'],['oak','tree'],['robin','bird'],['salmon','fish'],['carrot','vegetable'],['violin','instrument'],['rose','flower'],['granite','rock'],['chess','game'],['July','month']]};
const NAMES=Object.keys(REL);
const ALLP=NAMES.flatMap(r=>REL[r].map(p=>({r,p})));
const relOf=(a,b)=>ALLP.find(x=>x.p[0]===a&&x.p[1]===b)?.r;
const an=w=>`${/^[aeiou]/.test(w)?'an':'a'} ${w}`;
const kind=r=>r==='synonyms'||r==='antonyms'?`a pair of ${r}`:r;
const list=a=>`${a.slice(0,-1).join(', ')} or ${a.at(-1)}`;
const pic=(rows,hint)=>({t:'setups',title:'Word pairs',head:'Pair',rows,cols:['Relationship'],...(hint?{hint:true}:{})});
export default {
id:'language-m-analogies',subject:'language',level:4,grade:7,standard:'CCSS L.7.5b',
title:'Word relationships and analogies',
goal:'Name the relationship between two words, complete an analogy with a word in the same relationship, and pick the pair that matches a given pair.',
points:20,
skills:{name:'Naming the relationship',complete:'Completing an analogy',match:'Matching pairs'},
steps:[
 {skill:'name',say:'Words can be linked in many ways. Synonyms mean nearly the same (big, large); antonyms mean the opposite (hot, cold). One word can be part of another (petal, flower), the young of an animal (puppy, dog), a tool of a worker (hammer, carpenter), or a member of a category (apple, fruit).',pic:pic([['big : large','synonyms'],['hot : cold','antonyms'],['petal : flower','part to whole'],['puppy : dog','young to adult'],['hammer : carpenter','tool to worker'],['apple : fruit','item to category']])},
 {skill:'name',say:'Order matters. "Petal : flower" is part to whole, because a petal is part of a flower; written "flower : petal", the same pair would be whole to part. This topic always writes the part, the young, the tool or the item first.',pic:pic([['petal : flower','part to whole']]),
  check:{prompt:'Try it: what is the relationship in the pair "calf : cow"? Answer synonyms, antonyms, part to whole, young to adult, tool to worker or item to category.',answer:'young to adult',options:['young to adult','part to whole','item to category'],hint:'What is a calf?',pic:pic([['calf : cow','?']])}},
 {skill:'complete',say:'An analogy says two pairs share a relationship: "puppy is to dog as kitten is to cat". To complete one, name the relationship in the first pair, then find the word that has that relationship with the third word.',pic:pic([['puppy : dog','young to adult'],['kitten : ?','young to adult']])},
 {skill:'complete',say:'Check the wrong options against the relationship, not against the topic. In "hot is to cold as up is to ___", the options down, high and sky all go with "up", but only down is its opposite.',pic:pic([['hot : cold','antonyms'],['up : down','antonyms']]),
  check:{prompt:'Try it: page is to book as petal is to which word: flower, stem or leaf?',answer:'flower',options:['flower','stem','leaf'],hint:'A page is part of a book. A petal is part of what?',pic:pic([['page : book','part to whole'],['petal : ?','?']])}},
 {skill:'match',say:'To match pairs, name the relationship of the given pair, then name each choice’s relationship. "Hammer : carpenter" is tool to worker, so it matches "oven : baker" and not "oven : kitchen".',pic:pic([['hammer : carpenter','tool to worker'],['oven : baker','tool to worker']])},
 {skill:'match',say:'Two pairs can use similar words and still differ. "Rose : flower" is item to category, but "petal : flower" is part to whole: a rose is a kind of flower, while a petal is a piece of one.',pic:pic([['rose : flower','item to category'],['petal : flower','part to whole']]),
  check:{prompt:'Try it: which pair has the same relationship as "big : large": A "full : empty" or B "quick : fast"?',answer:'B',options:['A','B'],hint:'Big and large mean nearly the same.',pic:pic([['big : large','?'],['A full : empty','?'],['B quick : fast','?']])}}],
progression:{requires:['language-e-antonyms','language-e-context-clues'],operations:2,demand:'Name a pair’s relationship, keep the order of the pair, and test each option against that one relationship.'},
items(add){
 const OPTS='Answer synonyms, antonyms, part to whole, young to adult, tool to worker or item to category.';
 /* Naming the relationship of a pair (the Try-it's calf : cow is left out). */
 ALLP.forEach(({r,p},k)=>{if(p[0]==='calf')return;if(k%2===1&&r!=='synonyms'&&r!=='antonyms')return;
  add('name',`What is the relationship in the pair "${p[0]} : ${p[1]}"? ${OPTS}`,r,pic([[`${p[0]} : ${p[1]}`,'?']]),`${r==='synonyms'?`${p[0]} and ${p[1]} mean nearly the same`:r==='antonyms'?`${p[0]} and ${p[1]} are opposites`:r==='part to whole'?`a ${p[0]} is part of a ${p[1]}`:r==='young to adult'?`a young ${p[1]} is a ${p[0]}`:r==='tool to worker'?`${an(p[1])} uses ${p[0]==='scissors'?'scissors':an(p[0])}`:`${p[0]} is a kind of ${p[1]}`}, so the relationship is ${r}.`,r==='synonyms'?['synonym']:r==='antonyms'?['antonym']:[]);});
 /* Completing analogies: the stem pair and the third word come from the same relationship; the wrong options are the other words in other rows of the table. */
 NAMES.forEach((r,i)=>{const P=REL[r];for(let k=0;k<P.length;k++){const a=P[k],b=P[(k+3)%P.length];if(r==='part to whole'&&b[0]==='petal')continue;
  const w1=REL[NAMES[(i+1)%6]][k][1],w2=REL[NAMES[(i+3)%6]][(k+4)%10][0];
  const opts=[b[1],w1,w2];if(new Set(opts).size<3||relOf(b[0],w1)||relOf(b[0],w2))continue;const order=[opts[k%3],opts[(k+1)%3],opts[(k+2)%3]];
  add('complete',`${a[0]} is to ${a[1]} as ${b[0]} is to which word: ${list(order)}?`.replace(/^./,c=>c.toUpperCase()),b[1],pic([[`${a[0]} : ${a[1]}`,r],[`${b[0]} : ?`,'?']],true),`${a[0]} and ${a[1]} are ${r==='synonyms'||r==='antonyms'?r:`linked ${r}`}, and so are ${b[0]} and ${b[1]}.`);}});
 /* Matching: which of two pairs has the same relationship as a given pair. */
 NAMES.forEach((r,i)=>{const P=REL[r];for(let k=0;k<P.length;k+=2){const g=P[k],right=P[(k+1)%P.length],other=REL[NAMES[(i+1+k%5)%6]][(k+2)%10],first=(i+k)%4<2;if(r==='synonyms'&&g[0]==='big')continue;
  const A=first?right:other,B=first?other:right;
  add('match',`Which pair has the same relationship as "${g[0]} : ${g[1]}": A "${A[0]} : ${A[1]}" or B "${B[0]} : ${B[1]}"?`,first?'A':'B',pic([[`${g[0]} : ${g[1]}`,'?'],[`A ${A[0]} : ${A[1]}`,'?'],[`B ${B[0]} : ${B[1]}`,'?']]),`"${g[0]} : ${g[1]}" is ${kind(r)}; so is "${right[0]} : ${right[1]}", but "${other[0]} : ${other[1]}" is ${kind(relOf(other[0],other[1]))}.`,[first?'a':'b']);}});
}
};
