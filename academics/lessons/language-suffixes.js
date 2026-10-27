// Original language lesson. Every question is built from a small, certain, hand-written table of base
// words and the four suffixes below; the answer always follows mechanically from that table, never from
// judgement (CCSS L.3.4b: determine the meaning of a word formed when a known affix is added).
// Suffix meanings (hand-checked, regular only): -ful = full of (careful = full of care), -less = without
// (careless = without care), -ly = in a ___ way (quickly = in a quick way), -able = can be ___ (washable
// = can be washed). Base words below were chosen because every suffixed form is real, common, regular in
// spelling (plain concatenation, no doubling or dropped letters) and not idiomatic.
const BOTH=['care','hope','help','fear','use','pain','harm','power','cheer','joy'];
const FUL_ONLY=['thank'];
const LY=['quick','slow','soft','loud','kind','sad','brave','quiet'];
const ABLE=['wash','read','break','enjoy','fix'];
const PP={wash:'washed',read:'read',break:'broken',enjoy:'enjoyed',fix:'fixed'};
/* thank is a noun that stays plural in these phrases (full of thanks / without thanks); every
   other base word here is used unchanged (full of care, without care). */
const NOUN={thank:'thanks'};
const WORDS=[];
BOTH.forEach(b=>{WORDS.push({base:b,suffix:'ful'});WORDS.push({base:b,suffix:'less'});});
FUL_ONLY.forEach(b=>WORDS.push({base:b,suffix:'ful'}));
LY.forEach(b=>WORDS.push({base:b,suffix:'ly'}));
ABLE.forEach(b=>WORDS.push({base:b,suffix:'able'}));
const SUF=['ful','less','ly','able'],DIST={ful:'less',less:'ful',ly:'ful',able:'less'};
const LY_IDX=Object.fromEntries(LY.map((b,idx)=>[b,idx]));
const ABLE_IDX=Object.fromEntries(ABLE.map((b,idx)=>[b,idx]));
const meaning=(suffix,base)=>{
 const n=NOUN[base]||base;
 return suffix==='ful'?`full of ${n}`:suffix==='less'?`without ${n}`:suffix==='ly'?`in a ${base} way`:`can be ${PP[base]}`;
};
/* The wrong option in a "meaning" question must stay grammatical, so a child cannot rule it out
   just by ear -- they have to actually know the suffix. For -ful/-less the opposite suffix on the
   same base is already a real phrase (full of care / without care). For -ly and -able, swapping the
   suffix gives nonsense (full of quick, without wash), so instead we borrow the true meaning of a
   different word that takes the same suffix (in a slow way, can be broken). */
const wrongMeaning=(suffix,base)=>{
 if(suffix==='ly'){const other=LY[(LY_IDX[base]+1)%LY.length];return meaning('ly',other);}
 if(suffix==='able'){const other=ABLE[(ABLE_IDX[base]+1)%ABLE.length];return meaning('able',other);}
 return meaning(DIST[suffix],base);
};
const cap=s=>s[0].toUpperCase()+s.slice(1);
export default {
id:"language-e-suffixes",
subject:"language",
level:3,
grade:3,
title:"Suffixes change meaning",
goal:"Work out the meaning a suffix gives a word, and choose or build the matching word.",
standard:"CCSS L.3.4b: determine the meaning of a word formed when a known affix is added",
points:20,
skills:{"meaning":"What a suffix changes a word to mean","suffix":"Choosing the right suffix","build":"Building the right word"},
steps:[{"skill":"meaning","say":"A suffix is added to the end of a word, and it changes what the word means. Care means a feeling of looking after something. Careful, with -ful added, means full of care. Careless, with -less added, means without care.","pic":{"t":"passages","title":"Two suffixes, opposite meanings","texts":["care + -ful = careful, full of care","care + -less = careless, without care"]}},
{"skill":"meaning","say":"Read the base word first, then the suffix, to work out the meaning. Fear means being afraid. Fearless, with -less added, means without fear.","pic":{"t":"passages","title":"Read the base, then the suffix","texts":["fear + -less = fearless, without fear"]},"check":{"prompt":"Mia says, \"I felt joyless after the rain stopped the picnic.\" What does joyless mean: A \"full of joy\" or B \"without joy\"?","answer":"B","options":["A","B"],"hint":"The suffix -less means without.","pic":{"t":"passages","title":"Read it","texts":["Mia felt joyless after the rain stopped the picnic."]},"accept":["without joy"]}},
{"skill":"suffix","say":"The suffix -ly does a different job: added to a word like quick, it makes quickly, which means in a quick way. It describes how something is done.","pic":{"t":"passages","title":"One suffix, a new job","texts":["quick + -ly = quickly, in a quick way"]}},
{"skill":"suffix","say":"To find the suffix, think about what the finished word means, then check which ending gives that meaning. Brave becomes bravely, meaning in a brave way, once -ly is added.","pic":{"t":"passages","title":"Match the meaning","texts":["brave + -ly = bravely, in a brave way"]},"check":{"prompt":"The word softly means \"in a soft way.\" Which suffix was added to soft to make softly: -ly, -ful or -less?","answer":"-ly","options":["-ly","-ful","-less"],"hint":"This suffix describes how something is done.","pic":{"t":"passages","title":"Read it","texts":["soft + ? = softly, in a soft way"]},"accept":["ly"]}},
{"skill":"build","say":"The suffix -able means can be. Wash becomes washable, once -able is added, and washable means can be washed.","pic":{"t":"passages","title":"A suffix for verbs","texts":["wash + -able = washable, can be washed"]}},
{"skill":"build","say":"When a base word can take more than one suffix, its meaning changes each time. Harm can take -ful, giving harmful, full of harm, or -less, giving harmless, without harm.","pic":{"t":"passages","title":"Same base, opposite meanings","texts":["harm + -ful = harmful, full of harm","harm + -less = harmless, without harm"]},"check":{"prompt":"Which word means full of hope: hopeful or hopeless?","answer":"hopeful","options":["hopeful","hopeless"],"hint":"The suffix -ful means full of; -less means without.","pic":{"t":"passages","title":"Same base, opposite meanings","texts":["hope + -ful = ?","hope + -less = ?"]}}}],
progression:{"requires":["language-e-prefixes","language-e-parts-of-speech"],"operations":2,"demand":"Read a suffixed word, work out the meaning its suffix gives it, and choose or build the word that matches a stated meaning."},
items(add){
 WORDS.forEach((w,i)=>{
  const word=w.base+w.suffix,disp='-'+w.suffix,correct=meaning(w.suffix,w.base),wrong=wrongMeaning(w.suffix,w.base);
  const pic={t:'passages',title:'Build the word',texts:[`${w.base} + ${disp} = ${word}`]};
  [0,1].forEach(ti=>{
   const flip=(i+ti)%2===0,optA=flip?correct:wrong,optB=flip?wrong:correct,ansLetter=flip?'A':'B';
   const prompt=ti===0?`What does ${word} mean: A "${optA}" or B "${optB}"?`:`${cap(word)} means: A "${optA}" or B "${optB}"?`;
   add('meaning',prompt,ansLetter,pic,`${word} is ${w.base} plus ${disp}, which means ${correct}.`,[correct]);
  });
  const others=SUF.filter(s=>s!==w.suffix),opt2=others[i%3],opt3=others[(i+1)%3];
  [0,1].forEach(ti=>{
   const order=(i+ti)%3,arr=[w.suffix,opt2,opt3],rot=arr.slice(order).concat(arr.slice(0,order)),disps=rot.map(s=>'-'+s);
   const optsText=`${disps[0]}, ${disps[1]} or ${disps[2]}`;
   const prompt=ti===0?`Which suffix turns ${w.base} into a word meaning "${correct}": ${optsText}?`:`Add which suffix to ${w.base} to get a word meaning "${correct}": ${optsText}?`;
   const spic={t:'passages',title:'Suffix needed',texts:[`Base: ${w.base}`,`Target meaning: "${correct}"`]};
   add('suffix',prompt,disp,spic,`${w.base} plus ${disp} gives ${word}, which means ${correct}.`,[w.suffix]);
  });
 });
 BOTH.forEach((b,i)=>{
  ['full of','without'].forEach((m,mi)=>{
   const correctWord=m==='full of'?b+'ful':b+'less',wrongWord=m==='full of'?b+'less':b+'ful';
   [0,1].forEach(ti=>{
    const flip=(i+mi+ti)%2===0,first=flip?correctWord:wrongWord,second=flip?wrongWord:correctWord;
    const prompt=ti===0?`Which word means "${m} ${b}": ${first} or ${second}?`:`Choose the word that means "${m} ${b}": ${first} or ${second}?`;
    const bpic={t:'passages',title:'Choose the word',texts:[`Base: ${b}`,`Meaning needed: ${m} ${b}`]};
    add('build',prompt,correctWord,bpic,`${correctWord} means ${m} ${b}.`);
   });
  });
 });
}
};
