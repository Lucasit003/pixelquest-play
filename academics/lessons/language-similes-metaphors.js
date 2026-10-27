// Original language lesson. Every sentence is built from one of three fixed frames -- an "as ... as" simile
// ("The pond was as calm as a mirror."), a "like" simile ("The pond was like glass."), or a metaphor with no
// as and no like ("The pond was an icebox.") -- and one hand-picked (target, trait) pair for the subject. The
// frame used for a given sentence is fixed by its slot (0/1/2) in SUBJECT_PAIRS, never by a rotation over an
// unrelated pair table, so kind is read straight off the frame and every pairing below was chosen because the
// target genuinely fits the subject (a tired horse can be a snail, a statue or a wall; a rusty gate cannot be
// a mouse). Fifteen subjects times three curated pairs gives 45 sentences. compared always names the subject
// and the target the sentence actually used; its wrong choice is either an absent target from a different
// pair on the same subject (metaphors) or the trait word itself, which is a description and not a second
// thing (similes) -- a real mistake a child makes when they have not yet separated "what is compared" from
// "how it is described". meaning always contrasts the correct figurative trait with a wrong option: for a
// metaphor the wrong option is a literal transformation ("X literally turned into TARGET"), which nothing in
// the fictional Oakhaven setting ever does; for a simile the wrong option is a different, genuinely false
// trait for that same subject (each subject has its own single false trait below, picked so it is never also
// true of that subject), so the child must connect the target to the right trait rather than just spotting
// the word "literally". The two lettered answers (A/B) for compared and for meaning are each picked by a
// hash of the subject and slot index that does not depend on which frame (kind) the sentence uses, so neither
// skill can be answered by pattern-matching the sentence shape. No pairing below claims a subject IS or moves
// like something outside everyday sense for a 9-year-old (CCSS L.5.5a).
const SUBJECTS=['pond','old bridge','crowd at the fair','north wind','tired horse','fresh bread','schoolyard','new coat','winter morning',"miller's argument",'empty barn','harvest field','lantern light','rusty gate','long road'];
const SUBJECT_PAIRS=[
 {pairs:[{target:'a mirror',trait:'calm'},{target:'an icebox',trait:'cold'},{target:'glass',trait:'smooth'}],wrong:'loud'},
 {pairs:[{target:'a stone giant',trait:'heavy'},{target:'a skeleton',trait:'bare'},{target:'a rusty hinge',trait:'creaky'}],wrong:'quick'},
 {pairs:[{target:'a circus',trait:'busy'},{target:'a drum',trait:'loud'},{target:'a herd of ponies',trait:'wild'}],wrong:'cold'},
 {pairs:[{target:'an icebox',trait:'cold'},{target:'a lion',trait:'fierce'},{target:'a whirlwind',trait:'wild'}],wrong:'warm'},
 {pairs:[{target:'a snail',trait:'slow'},{target:'a statue',trait:'still'},{target:'a wall',trait:'stubborn'}],wrong:'loud'},
 {pairs:[{target:'a furnace',trait:'hot'},{target:'a feather',trait:'soft'},{target:'sunshine',trait:'warm'}],wrong:'cold'},
 {pairs:[{target:'a circus',trait:'busy'},{target:'a drum',trait:'loud'},{target:'a herd of ponies',trait:'wild'}],wrong:'quiet'},
 {pairs:[{target:'a blanket',trait:'warm'},{target:'armor',trait:'tough'},{target:'a cloud',trait:'soft'}],wrong:'cold'},
 {pairs:[{target:'an icebox',trait:'cold'},{target:'a ghost',trait:'quiet'},{target:'a blanket of snow',trait:'soft'}],wrong:'hot'},
 {pairs:[{target:'a volcano',trait:'angry'},{target:'thunder',trait:'loud'},{target:'a wall',trait:'stubborn'}],wrong:'quiet'},
 {pairs:[{target:'a cave',trait:'hollow'},{target:'a ghost',trait:'quiet'},{target:'a shell',trait:'bare'}],wrong:'busy'},
 {pairs:[{target:'sunshine',trait:'golden'},{target:'a treasure chest',trait:'rich'},{target:'a thick blanket',trait:'thick'}],wrong:'empty'},
 {pairs:[{target:'a firefly',trait:'gentle'},{target:'a star',trait:'bright'},{target:'a candle flame',trait:'warm'}],wrong:'heavy'},
 {pairs:[{target:'thunder',trait:'loud'},{target:'a stone',trait:'heavy'},{target:'a wall',trait:'stubborn'}],wrong:'soft'},
 {pairs:[{target:'an arrow',trait:'straight'},{target:'a ribbon',trait:'winding'},{target:'a maze',trait:'confusing'}],wrong:'soft'}
];
export default {
id:"language-e-similes-metaphors",
subject:"language",
level:3,
grade:5,
title:"Similes and metaphors",
goal:"Tell a simile from a metaphor, name the two things a figurative sentence compares, and read what it means without taking it literally.",
standard:"CCSS L.5.5a: interpret figurative language, including similes and metaphors",
points:20,
skills:{"kind":"Simile or metaphor","compared":"What is compared","meaning":"What it means"},
steps:[
{"skill":"kind","say":"A simile compares two things using the word like, or the pattern as ... as, such as \"The pond was as smooth as glass.\" Both things stay themselves; the sentence only says they are alike in one way.","pic":{"t":"passages","title":"A simile","texts":["The pond was as smooth as glass."]}},
{"skill":"kind","say":"A metaphor goes a step further and says one thing IS another, with no like or as, such as \"The pond was a mirror.\" It still only means the pond seemed that way; it did not turn into glass or a mirror.","pic":{"t":"passages","title":"A metaphor","texts":["The pond was a mirror."]},"check":{"prompt":"Is \"The gym was as noisy as a marching band.\" a simile or a metaphor?","answer":"simile","options":["simile","metaphor"],"hint":"Look for the word as, used twice.","pic":{"t":"passages","title":"Read the sentence","texts":["The gym was as noisy as a marching band."]}}},
{"skill":"kind","say":"A simile can also use the word like on its own, such as \"The pond was like glass.\" Like as ... as, it still only says the two things are alike, not the same.","pic":{"t":"passages","title":"A simile with like","texts":["The pond was like glass."]}},
{"skill":"compared","say":"To find what a simile or metaphor compares, look for the thing being described and the thing it is said to be like or to be. In \"The pond was a mirror,\" the two things compared are the pond and a mirror.","pic":{"t":"passages","title":"Two things compared","texts":["The pond was a mirror."]}},
{"skill":"compared","say":"A sentence can only compare the two things it actually names. A describing word such as an adjective is not a second thing, and a word that never appears in the sentence cannot be one of the two things compared either.","pic":{"t":"passages","title":"Only what is named","texts":["The pond was a mirror."]},"check":{"prompt":"In \"The kitchen was a furnace by midday.\" which two things are compared: A, \"the kitchen and a furnace\", or B, \"the kitchen and a mirror\"?","answer":"A","options":["A","B"],"hint":"Find the subject, then what the sentence says it was.","pic":{"t":"passages","title":"Read the sentence","texts":["The kitchen was a furnace by midday."]}}},
{"skill":"meaning","say":"A simile or metaphor is true in spirit, not literally. \"The pond was a mirror\" tells us the pond was calm and reflected things clearly; it does not tell us the pond changed into glass.","pic":{"t":"passages","title":"Figurative, not literal","texts":["The pond was a mirror."]}},
{"skill":"meaning","say":"The right meaning is the trait that the target is known for, matched to the actual subject of the sentence. Reading it literally, or borrowing a trait that fits a different subject, both give the wrong meaning.","pic":{"t":"passages","title":"Figurative, not literal","texts":["Her voice was a trumpet across the yard."]},"check":{"prompt":"In \"Her voice was a trumpet across the yard.\" what does this tell us: A, \"her voice was very loud\", or B, \"her voice turned into a trumpet\"?","answer":"A","options":["A","B"],"hint":"One reading is sensible; the other is not literally possible.","pic":{"t":"passages","title":"Read the sentence","texts":["Her voice was a trumpet across the yard."]}}}],
progression:{"requires":["language-e-context-clues"],"operations":2,"demand":"Tell a simile from a metaphor by its wording, name only the two things a sentence actually names, and choose the figurative meaning over a literal or borrowed one."},
items(add){
 const pic=s=>({t:'passages',title:'Read the sentence',texts:[s]});
 const two=(bit,right,wrong)=>bit?[`A, "${wrong}", or B, "${right}"`,'B']:[`A, "${right}", or B, "${wrong}"`,'A'];
 SUBJECTS.forEach((subj,i)=>{
  const {pairs,wrong:wrongTrait}=SUBJECT_PAIRS[i];
  /* The as...as comparison said as a metaphor too, so similes and metaphors are asked equally often. */
  {const m=`The ${subj} was ${pairs[0].target}.`;add('kind',`Is "${m}" a simile or a metaphor?`,'metaphor',pic(m),'It says one thing IS the other, with no as and no like.',['a metaphor']);}
  pairs.forEach((pair,j)=>{
   const {target,trait}=pair,kind=j===1?'metaphor':'simile',
    sentence=j===0?`The ${subj} was as ${trait} as ${target}.`:j===1?`The ${subj} was ${target}.`:`The ${subj} was like ${target}.`,
    comparedBit=(i+(j===1?1:0))%2,meaningBit=(i+1+(j===1?1:0))%2;
   add('kind',`Is "${sentence}" a simile or a metaphor?`,kind,pic(sentence),kind==='metaphor'?'It says one thing IS the other, with no as and no like.':j===0?'It compares the two with as ... as, using the word as twice.':'It compares the two with the word like.',[kind==='metaphor'?'a metaphor':'a simile']);
   const comparedWrong=kind==='metaphor'?`the ${subj} and ${pairs[(j+1)%3].target}`:`the ${subj} and ${trait}`,
    [comparedChoice,comparedKey]=two(comparedBit,`the ${subj} and ${target}`,comparedWrong);
   add('compared',`In "${sentence}" which two things are compared: ${comparedChoice}?`,comparedKey,pic(sentence),kind==='metaphor'?`The sentence only names the ${subj} and ${target}; ${pairs[(j+1)%3].target} never appears in it.`:`The sentence names the ${subj} and ${target}; ${trait} only describes them, it is not a second thing.`,[`the ${subj} and ${target}`]);
   const meaningWrong=kind==='metaphor'?`the ${subj} literally turned into ${target}`:`the ${subj} was very ${wrongTrait}`,
    [meaningChoice,meaningKey]=two(meaningBit,`the ${subj} was very ${trait}`,meaningWrong);
   add('meaning',`In "${sentence}" what does this tell us: ${meaningChoice}?`,meaningKey,pic(sentence),kind==='metaphor'?`Figurative language is not literal: it tells us the ${subj} was ${trait}, not that it became ${target}.`:`${target==='a wall'?`A wall does not move or give way, so being like one means being ${trait}`:`${target[0].toUpperCase()+target.slice(1)} is known for being ${trait}`}, not ${wrongTrait}: the sentence tells us the ${subj} was ${trait}.`,[`the ${subj} was very ${trait}`]);
  });
 });
}
};
