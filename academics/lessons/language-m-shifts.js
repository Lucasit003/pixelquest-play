// Middle School topic (Grade 8, CCSS L.8.1d): shifts in verb voice and mood. Every sentence is built here from two
// clauses whose voice or mood is recorded, so whether it shifts follows from how it was built: a voice shift joins an
// active clause to a passive one about the same doer ("Mia painted the fence, and the gate was painted by her
// too."); a mood shift joins an imperative to a non-imperative ("Close the door, and you should turn off the
// light."). A consistent sentence keeps both clauses in the same voice or mood.
const DO=[['Mia','her','painted','painted','the fence','the gate'],['Leo','him','washed','washed','the plates','the cups'],['Ana','her','wrote','written','the invitation','the menu'],['Sam','him','fixed','fixed','the bike','the scooter'],['Ruth','her','planted','planted','the roses','the herbs'],['Omar','him','cleaned','cleaned','the kitchen','the hall'],['Ivy','her','drew','drawn','the map','the key'],['Theo','him','packed','packed','the tent','the stove'],['Nina','her','baked','baked','the bread','the muffins'],['Ezra','him','mended','mended','the net','the sail'],['Lena','her','sorted','sorted','the books','the papers'],['Hugo','him','polished','polished','the shoes','the boots']];
const CMD=[['close the door','turn off the light'],['read the question','check your answer'],['wash your hands','set the table'],['pack your bag','find your ticket'],['take a deep breath','count to ten'],['open the window','water the plants'],['sharpen your pencil','write your name'],['feed the dog','fill its bowl'],['turn off the oven','open the door'],['find a partner','choose a topic'],['tie your laces','zip your coat'],['rinse the brush','dry it carefully']];
const SHE=new Set(['Mia','Ana','Ruth','Ivy','Nina','Lena']);
const cap=s=>s[0].toUpperCase()+s.slice(1);
const plural=o=>/s$/.test(o)&&!/^the (bus|class)$/.test(o);
const vOk=r=>`${r[0]} ${r[2]} ${r[4]}, and ${SHE.has(r[0])?'she':'he'} ${r[2]} ${r[5]} too.`;
const vShift=r=>`${r[0]} ${r[2]} ${r[4]}, and ${r[5]} ${plural(r[5])?'were':'was'} ${r[3]} by ${r[1]} too.`;
const mOk=c=>`${cap(c[0])}, and ${c[1]}.`;
const mShift=(c,k)=>`${cap(c[0])}, and ${['you should','you will','you can'][k%3]} ${c[1]}.`;
const pic=(rows,hint)=>({t:'setups',title:'Keeping verbs consistent',head:'Sentence',rows,cols:['Check'],...(hint?{hint:true}:{})});
export default {
id:'language-m-shifts',subject:'language',level:4,grade:8,standard:'CCSS L.8.1d',
title:'Shifts in voice and mood',
goal:'Spot a sentence that shifts verb voice or mood without reason, say which kind of shift it is, and choose the consistent version.',
points:20,
skills:{spot:'Spotting a shift',kind:'Voice or mood',fix:'Choosing the consistent version'},
steps:[
 {skill:'spot',say:'Within a sentence, verbs about the same action should keep the same voice and mood. "Mia painted the fence, and the gate was painted by her too" shifts from active to passive for no reason. "Mia painted the fence, and she painted the gate too" keeps both active.',pic:pic([['Mia painted the fence, and the gate was painted by her too.','voice shift'],['Mia painted the fence, and she painted the gate too.','consistent']])},
 {skill:'spot',say:'Moods shift too. "Close the door, and you should turn off the light" starts with a command (imperative) and switches to advice (indicative with should). "Close the door, and turn off the light" keeps both commands.',pic:pic([['Close the door, and you should turn off the light.','mood shift'],['Close the door, and turn off the light.','consistent']]),
  check:{prompt:'Try it: does the sentence "Leo washed the plates, and the cups were washed by him too." shift verb voice or mood: yes or no?',answer:'yes',options:['yes','no'],hint:'Is the second clause active like the first?',pic:pic([['Leo washed the plates, and the cups were washed by him too.','?']])}},
 {skill:'kind',say:'A voice shift mixes active and passive: look for was or were plus a past participle in one clause but not the other. A mood shift mixes a command with a statement or a question: look for a clause that starts with a bare verb next to one with a subject such as "you should".',pic:pic([['active + passive','voice shift'],['command + statement','mood shift']])},
 {skill:'kind',say:'Name the shift by what changes. If both clauses give commands but one is passive, that is still about voice; if both clauses are active but one is a command and the other a statement, that is mood.',pic:pic([['changes active to passive','voice'],['changes command to statement','mood']]),
  check:{prompt:'Try it: "Read the question, and you should check your answer." shifts. Is it a shift in voice or in mood?',answer:'mood',options:['mood','voice'],hint:'The first clause is a command; is the second?',pic:pic([['Read the question, and you should check your answer.','?']])}},
 {skill:'fix',say:'To fix a voice shift, make both clauses active: name the doer as the subject each time. To fix a mood shift, make both clauses commands: drop "you should" and start the second clause with the verb.',pic:pic([['the gate was painted by her','she painted the gate'],['you should turn off the light','turn off the light']])},
 {skill:'fix',say:'Shifts are not always wrong: a writer may switch on purpose, for instance to the passive when the doer is unknown. But when the same person does both actions in one sentence, keeping the same voice and mood reads more clearly.',pic:pic([['same doer, both actions','keep the same voice']]),
  check:{prompt:'Try it: which sentence keeps the same voice: A "Sam fixed the bike, and he fixed the scooter too." or B "Sam fixed the bike, and the scooter was fixed by him too."?',answer:'A',options:['A','B'],hint:'Which sentence keeps Sam as the doer in both clauses?',pic:pic([['A Sam fixed the bike, and he fixed the scooter too.','?'],['B Sam fixed the bike, and the scooter was fixed by him too.','?']])}}],
progression:{requires:['language-m-sentence-types','language-e-perfect-tenses'],operations:2,demand:'Compare the voice and the mood of two clauses, name what changes, and pick the version that keeps them the same.'},
items(add){
 const yn=[],ab=[];
 DO.forEach((r,k)=>{const ok=vOk(r),sh=vShift(r);
  /* Spot a voice shift (the Try-it's Leo sentence is left out of the shifted form). */
  if(r[0]!=='Leo')add('spot',`Does the sentence "${sh}" shift verb voice or mood: yes or no?`,'yes',pic([[sh,'?']]),'It starts active and switches to passive for the same doer.');
  add('spot',`Does the sentence "${ok}" shift verb voice or mood: yes or no?`,'no',pic([[ok,'?']]),'Both clauses are active, with the same doer as the subject.');
  /* Voice or mood. */
  add('kind',`"${sh}" shifts. Is it a shift in voice or in mood?`,'voice',pic([[sh,'?']]),`The second clause is passive ("${plural(r[5])?'were':'was'} ${r[3]} by ${r[1]}"), the first active.`);
  /* Choose the consistent version (the Try-it's Sam sentence is left out). */
  if(r[0]!=='Sam'){const first=k%2===0;add('fix',`Which sentence keeps the same voice: A "${first?ok:sh}" or B "${first?sh:ok}"?`,first?'A':'B',pic([[`A ${first?ok:sh}`,'?'],[`B ${first?sh:ok}`,'?']]),`"${ok}" keeps both clauses active.`,[first?'a':'b']);}
  add('fix',`To remove the shift in "${sh}", what should the second clause be: "${SHE.has(r[0])?'she':'he'} ${r[2]} ${r[5]} too" or "${r[5]} ${plural(r[5])?'were':'was'} ${r[3]} too"?`,`${SHE.has(r[0])?'she':'he'} ${r[2]} ${r[5]} too`,pic([[sh,'shift']]),'Making the second clause active, with the same doer as subject, removes the shift.');});
 CMD.forEach((c,k)=>{const ok=mOk(c),sh=mShift(c,k);
  /* Spot a mood shift. */
  add('spot',`Does the sentence "${sh}" shift verb voice or mood: yes or no?`,'yes',pic([[sh,'?']]),'It starts with a command and switches to a statement with a subject.');
  if(c[0]!=='close the door')add('spot',`Does the sentence "${ok}" shift verb voice or mood: yes or no?`,'no',pic([[ok,'?']]),'Both clauses are commands.');
  /* Voice or mood (the Try-it's reading sentence is left out). */
  if(sh!=='Read the question, and you should check your answer.')add('kind',`"${sh}" shifts. Is it a shift in voice or in mood?`,'mood',pic([[sh,'?']]),'The first clause is a command (imperative); the second is a statement.');
  /* Choose the consistent version. */
  const first=k%2===1;add('fix',`Which sentence keeps the same mood: A "${first?ok:sh}" or B "${first?sh:ok}"?`,first?'A':'B',pic([[`A ${first?ok:sh}`,'?'],[`B ${first?sh:ok}`,'?']]),`"${ok}" keeps both clauses as commands.`,[first?'a':'b']);
  add('fix',`To remove the shift in "${sh}", what should the second clause be: "${c[1]}" or "${sh.split(', and ')[1].replace(/\.$/,'')}"?`,c[1],pic([[sh,'shift']]),`Dropping "${['you should','you will','you can'][k%3]}" makes the second clause a command like the first.`);});
 /* Voice shifts inside commands, and statements that change mood to a question, for variety. */
 DO.forEach((r,k)=>{if(k%2)return;const s=`${r[0]} ${r[2]} ${r[4]}, and did ${SHE.has(r[0])?'she':'he'} ${r[2].replace(/ed$/,'').replace(/^bak$/,'bake').replace(/^wrote$/,'write').replace(/^drew$/,'draw')} ${r[5]} too?`;
  add('kind',`"${s}" shifts. Is it a shift in voice or in mood?`,'mood',pic([[s,'?']]),'It starts as a statement and switches to a question.');
  add('spot',`Does the sentence "${s}" shift verb voice or mood: yes or no?`,'yes',pic([[s,'?']]),'It switches from a statement to a question.');});
}
};
