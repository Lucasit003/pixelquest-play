// Middle School topic (Grade 8, CCSS L.8.1c): verb moods. Every sentence is built here from a template whose mood
// is recorded, using the definitions the lesson states: indicative states a fact or opinion; imperative gives a
// command or request with no stated subject; interrogative asks a question; conditional uses would or could for
// what depends on a condition; and subjunctive expresses a wish with "were" or a demand with "that" plus the
// base verb. The templates keep the moods apart: no sentence fits two definitions.
const PEOPLE=[['Mia','she'],['Leo','he'],['Ana','she'],['Sam','he'],['Ruth','she'],['Omar','he']];
const ACTS=[['close','closes','the gate'],['water','waters','the plants'],['feed','feeds','the cat'],['lock','locks','the shed'],['fold','folds','the towels'],['sweep','sweeps','the porch'],['check','checks','the map'],['pack','packs','the lunch']];
const ADJS=['taller','older','braver','faster','closer'];
const build=(mood,k)=>{const [p,pr]=PEOPLE[k%PEOPLE.length],[base,third,obj]=ACTS[k%ACTS.length],q=PEOPLE[(k+2)%PEOPLE.length][0];
 if(mood==='indicative')return `${p} ${third} ${obj} every morning.`;
 if(mood==='imperative')return `${base[0].toUpperCase()+base.slice(1)} ${obj} before dinner.`;
 if(mood==='interrogative')return `Does ${p} ${base} ${obj} every morning?`;
 if(mood==='conditional')return `${p} would ${base} ${obj} if ${pr} had more time.`;
 return k%2?`${p} wishes that ${q} were ${ADJS[k%ADJS.length]}.`:`The coach insists that ${p} ${base} ${obj} today.`;};
const MOODS=['indicative','imperative','interrogative','conditional','subjunctive'];
const OPTS='Answer indicative, imperative, interrogative, conditional or subjunctive.';
const pic=(rows,hint)=>({t:'setups',title:'Verb moods',head:'Sentence',rows,cols:['Mood'],...(hint?{hint:true}:{})});
export default {
id:'language-m-verb-moods',subject:'language',level:4,grade:8,standard:'CCSS L.8.1c',
title:'Verb moods',
goal:'Name the mood of a verb, choose the verb form a mood needs, and pick the mood that fits what a writer wants to do.',
points:20,
skills:{name:'Naming the mood',form:'Choosing the form',purpose:'Mood and purpose'},
steps:[
 {skill:'name',say:'A verb’s mood shows what the writer is doing with a sentence. The indicative states a fact or an opinion: "Mia closes the gate every morning." The imperative gives a command or request, with "you" understood: "Close the gate before dinner." The interrogative asks: "Does Mia close the gate?"',pic:pic([['Mia closes the gate every morning.','indicative'],['Close the gate before dinner.','imperative'],['Does Mia close the gate?','interrogative']])},
 {skill:'name',say:'The conditional uses would or could for something that depends on a condition: "Leo would water the plants if he had more time." The subjunctive expresses a wish or a demand: "Ana wishes that Sam were taller" and "The coach insists that Leo sweep the porch today".',pic:pic([['Leo would water the plants if he had more time.','conditional'],['Ana wishes that Sam were taller.','subjunctive']]),
  check:{prompt:'Try it: what is the mood of the verb in "Feed the cat before dinner."? Answer indicative, imperative, interrogative, conditional or subjunctive.',answer:'imperative',options:['imperative','indicative','interrogative'],hint:'It gives a command, and the subject "you" is understood.',pic:pic([['Feed the cat before dinner.','?']])}},
 {skill:'form',say:'The subjunctive has its own forms. After a wish it uses "were" for every subject: "I wish that Sam were here", not "was". After demand words such as insist, suggest or require followed by "that", it uses the base verb with no -s: "The coach insists that Mia arrive early."',pic:pic([['wishes that Sam were here','were, not was'],['insists that Mia arrive','arrive, not arrives']])},
 {skill:'form',say:'The conditional pairs "would" with the base verb and a condition, often with "if": "Omar would pack the lunch if he had more time." The indicative uses the ordinary form: "Omar packs the lunch."',pic:pic([['Omar would pack the lunch if he had more time.','conditional'],['Omar packs the lunch.','indicative']]),
  check:{prompt:'Try it: which verb completes the subjunctive sentence "Ruth wishes that Leo ___ braver.": was or were?',answer:'were',options:['were','was'],hint:'After a wish, the subjunctive uses "were" for every subject.',pic:pic([['Ruth wishes that Leo ___ braver.','subjunctive']])}},
 {skill:'purpose',say:'Choose the mood for the job. To give an instruction, use the imperative. To report what happens, use the indicative. To ask, use the interrogative. To imagine a result that depends on something, use the conditional. To wish or to demand, use the subjunctive.',pic:pic([['give an instruction','imperative'],['report a fact','indicative'],['ask','interrogative'],['imagine a result','conditional'],['wish or demand','subjunctive']])},
 {skill:'purpose',say:'Writers mix moods on purpose: a recipe uses the imperative for its steps, a news report the indicative, and a speech about the future the conditional. Spotting the mood tells you what a sentence is for.',pic:pic([['recipe steps','imperative'],['news report','indicative'],['speech about what could be','conditional']]),
  check:{prompt:'Try it: a writer wants to give an instruction. Which sentence fits: A "Check the map before you leave." or B "Sam checks the map every morning."?',answer:'A',options:['A','B'],hint:'An instruction is a command.',pic:pic([['A Check the map before you leave.','?'],['B Sam checks the map every morning.','?']])}}],
progression:{requires:['language-e-perfect-tenses','language-m-sentence-types'],operations:2,demand:'Match a sentence to one of five mood definitions, choose were or the base verb for the subjunctive, and match a mood to a purpose.'},
items(add){
 const ab=[];
 /* Naming the mood (the Try-it's "Feed the cat before dinner." is left out). */
 for(let k=0;k<16;k++)for(const mood of MOODS){const s=build(mood,k);if(s==='Feed the cat before dinner.')continue;if(mood==='imperative'&&k>=8)continue;
  add('name',`What is the mood of the verb in "${s}"? ${OPTS}`,mood,pic([[s,'?']]),mood==='indicative'?'It states a fact.':mood==='imperative'?'It gives a command, with "you" understood.':mood==='interrogative'?'It asks a question.':mood==='conditional'?'It uses "would" for something that depends on a condition.':s.includes('wishes')?'It expresses a wish with "were".':'It states a demand with "that" and the base verb.');}
 /* Choosing the form: were after a wish, the base verb after a demand, and would for a condition (the Try-it's Ruth and Leo is left out). */
 PEOPLE.forEach(([p],k)=>{const q=PEOPLE[(k+1)%PEOPLE.length][0],a=ADJS[k%ADJS.length];if(p==='Ruth'&&q==='Omar')return;
  add('form',`Which verb completes the subjunctive sentence "${p} wishes that ${q} ___ ${a}.": was or were?`,'were',pic([[`${p} wishes that ${q} ___ ${a}.`,'subjunctive']]),'After a wish, the subjunctive uses "were" for every subject.');});
 ACTS.forEach(([base,third,obj],k)=>{const [p]=PEOPLE[k%PEOPLE.length],word=['insists','suggests','requires','asks'][k%4],sub=k%2===0;
  add('form',`Which verb completes the subjunctive sentence "The teacher ${word} that ${p} ___ ${obj} today.": ${sub?`${base} or ${third}`:`${third} or ${base}`}?`,base,pic([[`The teacher ${word} that ${p} ___ ${obj} today.`,'subjunctive']]),`After "${word} that", the subjunctive uses the base verb with no -s: "${base}".`);
  add('form',`Which verb completes the indicative sentence "${p} ___ ${obj} every morning.": ${sub?`${base} or ${third}`:`${third} or ${base}`}?`,third,pic([[`${p} ___ ${obj} every morning.`,'indicative']]),`A fact about one person in the present uses the -s form: "${third}".`);
  add('form',`Which word completes the conditional sentence "${p} ___ ${base} ${obj} if ${PEOPLE[k%PEOPLE.length][1]} had more time.": would or will?`,'would',pic([[`${p} ___ ${base} ${obj} if ${PEOPLE[k%PEOPLE.length][1]} had more time.`,'conditional']]),'The conditional mood uses "would" for a result that depends on a condition.');});
 /* Purpose: which sentence fits what the writer wants (the Try-it's map instruction is left out). */
 const JOB={imperative:'give an instruction',indicative:'state a fact',interrogative:'ask a question',conditional:'imagine a result that depends on a condition',subjunctive:'express a wish'};
 for(let k=0;k<20;k++){const want=MOODS[k%5],other=MOODS[(k%5+1+(k%3))%5];if(want===other)continue;const kk=want==='subjunctive'?(k|1):k,ko=other==='subjunctive'?(k|1):k+1;
  const A=build(want,kk),B=build(other,ko),first=k%2===0;if(A.startsWith('Check the map'))continue;
  add('purpose',`A writer wants to ${JOB[want]}. Which sentence fits: A "${first?A:B}" or B "${first?B:A}"?`,first?'A':'B',pic([[`A ${first?A:B}`,'?'],[`B ${first?B:A}`,'?']]),`To ${JOB[want]}, use the ${want} mood: "${A}"`,[first?'a':'b']);ab.push(first?'a':'b');}
 for(const [job,mood] of [['a recipe’s steps','imperative'],['a news report of what happened','indicative'],['a quiz question','interrogative'],['a plan that depends on the weather, using would','conditional'],['a wish using were','subjunctive'],['a sign telling visitors what to do','imperative'],['a science fact','indicative'],['an interview question','interrogative']])
  add('purpose',`Which mood best fits ${job}? ${OPTS}`,mood,pic([[job,'?']]),`${job[0].toUpperCase()+job.slice(1)} calls for the ${mood} mood.`);
}
};
