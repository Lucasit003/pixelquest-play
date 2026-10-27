// Middle School topic (Grade 8, CCSS L.8.1b): active and passive voice. Every sentence is built here from a row of
// parts [doer, past verb, past participle, receiver, receiver is plural], so its voice and its doer follow from how
// it was built: active puts the doer first ("The chef cooked the soup."); passive puts the receiver first with
// was/were and the past participle, and may name the doer after "by" ("The soup was cooked by the chef.").
const ROWS=[
 ['the chef','cooked','cooked','the soup',false],['Maya','wrote','written','the letters',true],['the wind','broke','broken','the window',false],['the team','won','won','the trophy',false],
 ['the dog','chased','chased','the ducks',true],['the students','painted','painted','the mural',false],['the storm','damaged','damaged','the roofs',true],['Leo','drove','driven','the van',false],
 ['the council','approved','approved','the plan',false],['the bees','made','made','the honey',false],['Grandma','baked','baked','the pies',true],['the goalkeeper','caught','caught','the ball',false],
 ['the gardener','planted','planted','the trees',true],['the artist','drew','drawn','the map',false]];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const active=r=>`${cap(r[0])} ${r[1]} ${r[3]}.`;
const passive=(r,by=true)=>`${cap(r[3])} ${r[4]?'were':'was'} ${r[2]}${by?` by ${r[0]}`:''}.`;
/* A wrong passive with the roles swapped, which says the receiver did the action to the doer. */
const PLURAL_DOER=new Set(['the students','the bees']);
const swapped=r=>`${cap(r[0])} ${PLURAL_DOER.has(r[0])?'were':'was'} ${r[2]} by ${r[3]}.`;
const pic=(rows,hint)=>({t:'setups',title:'Active and passive',head:'Sentence',rows,cols:['Voice'],...(hint?{hint:true}:{})});
export default {
id:'language-m-active-passive',subject:'language',level:4,grade:8,standard:'CCSS L.8.1b',
title:'Active and passive voice',
goal:'Tell active sentences from passive ones, find who did the action in a passive sentence, and change a sentence from one voice to the other.',
points:20,
skills:{identify:'Active or passive',doer:'Finding the doer',change:'Changing the voice'},
steps:[
 {skill:'identify',say:'In the active voice the subject does the action: "The chef cooked the soup." In the passive voice the subject receives the action: "The soup was cooked by the chef." The passive uses a form of be, such as was or were, plus the past participle.',pic:pic([['The chef cooked the soup.','active'],['The soup was cooked by the chef.','passive']])},
 {skill:'identify',say:'To spot the passive, look for was or were followed by a past participle such as cooked, written or broken, with the receiver of the action as the subject. "The window was broken by the wind" is passive; "The wind broke the window" is active.',pic:pic([['was + broken','passive sign']]),
  check:{prompt:'Try it: is the sentence "The mural was painted by the students." active or passive?',answer:'passive',options:['active','passive'],hint:'Look for was or were plus a past participle.',pic:pic([['The mural was painted by the students.','?']])}},
 {skill:'doer',say:'In a passive sentence the doer comes after "by". In "The letters were written by Maya", Maya did the writing, even though "the letters" is the subject.',pic:pic([['The letters were written by Maya.','doer: Maya']])},
 {skill:'doer',say:'A passive sentence can leave the doer out: "The window was broken." It is useful when the doer is unknown or unimportant, but it can also hide who is responsible, so writers choose it on purpose.',pic:pic([['The window was broken.','doer not named']]),
  check:{prompt:'Try it: in the sentence "The ball was caught by the goalkeeper.", who did the action?',answer:'the goalkeeper',options:['the goalkeeper','the ball'],hint:'The doer of a passive sentence comes after "by".',pic:pic([['The ball was caught by the goalkeeper.','?']])}},
 {skill:'change',say:'To make an active sentence passive, move the receiver to the front, add was or were, use the past participle, and put the doer after "by": "Leo drove the van" becomes "The van was driven by Leo". Use were when the new subject is plural.',pic:pic([['Leo drove the van.','active'],['The van was driven by Leo.','passive']])},
 {skill:'change',say:'To make a passive sentence active, put the doer first and use the past tense verb: "The pies were baked by Grandma" becomes "Grandma baked the pies". Keep who did what: "Grandma was baked by the pies" swaps the roles and changes the meaning.',pic:pic([['The pies were baked by Grandma.','passive'],['Grandma baked the pies.','active']]),
  check:{prompt:'Try it: which sentence is the passive form of "The council approved the plan.": A "The plan was approved by the council." or B "The council was approved by the plan."?',answer:'A',options:['A','B'],hint:'The receiver, the plan, moves to the front.',pic:pic([['The council approved the plan.','active']])}}],
progression:{requires:['language-e-perfect-tenses','language-m-sentence-types'],operations:2,demand:'Find the subject and verb, check for was/were plus a past participle, find the doer after "by", and rebuild a sentence keeping who did what.'},
items(add){
 const vo=[],ab=[];
 ROWS.forEach((r,k)=>{
  /* Active or passive, with and without the doer named. */
  for(const [s,v] of [[active(r),'active'],[passive(r),'passive'],[passive(r,false),'passive']]){if(s===passive(ROWS[5])||(v==='passive'&&!s.includes(' by ')&&k%2))continue;
   add('identify',`Is the sentence "${s}" active or passive?`,v,pic([[s,'?']]),v==='active'?`The subject, ${r[0]}, does the action.`:`"${r[4]?'were':'was'} ${r[2]}" is a form of be plus a past participle, and the subject receives the action.`);vo.push(v);}
  /* The doer: after "by" in a passive sentence, and whether one is named. */
  if(r[3]!=='the ball')add('doer',`In the sentence "${passive(r)}", who or what did the action?`,r[0],pic([[passive(r),'?']]),`The doer comes after "by": ${r[0]}.`,[r[0].replace(/^the /,'')]);
  add('doer',`Does the sentence "${k%2?passive(r,false):passive(r)}" name who did the action: yes or no?`,k%2?'no':'yes',pic([[k%2?passive(r,false):passive(r),'?']]),k%2?'There is no "by" phrase, so the doer is not named.':`Yes: "by ${r[0]}" names the doer.`);
  /* Changing the voice: pick the correct version, the right helper verb, and the participle. */
  const right=passive(r),wrong=k%3===0?swapped(r):r[1]!==r[2]?`${cap(r[3])} ${r[4]?'were':'was'} ${r[1]} by ${r[0]}.`:`${cap(r[3])} ${r[4]?'was':'were'} ${r[2]} by ${r[0]}.`,first=k%2===0;
  if(r[3]!=='the plan'&&wrong!==right){add('change',`Which sentence is the passive form of "${active(r)}": A "${first?right:wrong}" or B "${first?wrong:right}"?`,first?'A':'B',pic([[active(r),'active']]),`The receiver, ${r[3]}, moves to the front with "${r[4]?'were':'was'} ${r[2]}", and the doer goes after "by": "${right}"`,[first?'a':'b']);ab.push(first?'a':'b');}
  add('change',`Which sentence is the active form of "${passive(r)}": A "${!first?active(r):`${cap(r[3])} ${r[1]} ${r[0]}.`}" or B "${!first?`${cap(r[3])} ${r[1]} ${r[0]}.`:active(r)}"?`,!first?'A':'B',pic([[passive(r),'passive']]),`The doer, ${r[0]}, comes first and does the action: "${active(r)}"`,[!first?'a':'b']);ab.push(!first?'a':'b');
  add('change',`To make "${active(r)}" passive, which helping verb goes before "${r[2]}": was or were?`,r[4]?'were':'was',pic([[active(r),'active']]),`The new subject, ${r[3]}, is ${r[4]?'plural, so "were"':'singular, so "was"'}.`);});
}
};
