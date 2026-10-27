// Middle School topic (Grade 8, CCSS L.8.2a, L.8.2b): the ellipsis and the dash. Every question is built here from
// recorded parts, with the rules the lesson states: an ellipsis (...) marks words left out of a quotation, or a voice
// that trails off; a dash (—) marks a sudden break or an interruption. A shortened quotation is built from a fictional
// original [start, middle, end] by replacing the middle with an ellipsis, so the words left out and their number
// follow from how it was built. Every speaker and report is fictional.
const Q=[
 ['The old bridge','over the river near the mill','carried trains for a century.','a fictional town history'],
 ['Our team','after months of early practice','finally won the regional final.','a fictional school newsletter'],
 ['The storm','which arrived just after midnight','knocked out power to the whole valley.','a fictional weather report'],
 ['The new library','with its glass roof and long reading room','opened to the public on Saturday.','a fictional city notice'],
 ['Scientists at the fictional lab','working through the night','found a way to clean the water.','a fictional science article'],
 ['The museum','now more than a hundred years old','will close for repairs in June.','a fictional museum leaflet'],
 ['Volunteers','from every school in the district','planted four hundred trees.','a fictional community report'],
 ['The mayor','speaking to a crowd outside the town hall','promised a new park by spring.','a fictional local paper'],
 ['The ferry','which had been late all week','left the harbour on time today.','a fictional travel update'],
 ['Our garden club','started by three neighbours in a single yard','now has fifty members.','a fictional club newsletter'],
 ['The festival','held every summer since the town was founded','drew its largest crowd yet.','a fictional events page'],
 ['The hikers','tired and soaked by the rain','reached the shelter before dark.','a fictional ranger’s log'],
 ['The puppy','that had been hiding under the porch all morning','finally came out to eat.','a fictional pet shelter post'],['The coach','who has led the team for ten years','announced her retirement.','a fictional sports page'],
 ['The river','swollen by a week of heavy rain','flooded the low fields.','a fictional farm report'],['Our class','working in small groups after lunch','built a model of the solar system.','a fictional class blog']];
const words=s=>s.split(' ').length;
const orig=r=>`${r[0]} ${r[1]} ${r[2]}`;
const short=r=>`${r[0]} ... ${r[2]}`;
const bare=r=>`${r[0]} ${r[2]}`;
/* Dialogue lines: [speaker, words before the mark, what happens: 'cut' (interrupted) or 'fade' (trails off), the narration after]. */
const D=[['Mia','I was just about to tell you','cut','The door burst open before she could finish.'],['Leo','Maybe if we wait a little longer','fade','His voice drifted away as he stared at the clock.'],
 ['Ana','Watch out for the','cut','A ball flew past her head and she ducked.'],['Sam','I suppose we could try again tomorrow','fade','He shrugged, too tired to say more.'],
 ['Ruth','Give me that','cut','Her brother snatched the map first.'],['Omar','I remember a summer, long ago, when','fade','He smiled and said nothing more.'],
 ['Ivy','Stop the bus, I left my','cut','The doors slammed shut.'],['Theo','So that means the answer is','fade','He trailed off, lost in thought.'],
 ['Nina','If you just hold the ladder steady while I','cut','The ladder wobbled and she grabbed the wall.'],['Ezra','Well, I was going to say','fade','His words faded as the music started.'],
 ['Lena','Don’t open that','cut','Too late: the box was already open.'],['Hugo','Perhaps one day we will see it again','fade','He looked out at the sea and fell quiet.']];
const pic=(rows,hint)=>({t:'setups',title:'Ellipsis and dash',head:'',rows,cols:['Text'],...(hint?{hint:true}:{})});
export default {
id:'language-m-ellipsis-dash',subject:'language',level:4,grade:8,standard:'CCSS L.8.2a, L.8.2b',
title:'The ellipsis and the dash',
goal:'Use an ellipsis to show words left out of a quotation, find what was left out, and choose between an ellipsis and a dash for a pause or a break.',
points:20,
skills:{omit:'Words left out',count:'Counting what was cut',mark:'Ellipsis or dash'},
steps:[
 {skill:'omit',say:'When you quote a writer but leave some words out, you must show the gap with an ellipsis, three dots (...). Quoting "The old bridge over the river near the mill carried trains for a century" as "The old bridge ... carried trains for a century" is honest: the dots tell the reader words are missing.',pic:pic([['original','The old bridge over the river near the mill carried trains for a century.'],['shortened','The old bridge ... carried trains for a century.']])},
 {skill:'omit',say:'Leaving words out without an ellipsis makes it look as if the writer said exactly that. And an ellipsis must never hide words that change the meaning: cut only words the sentence can do without.',pic:pic([['with an ellipsis','honest'],['without one','misleading']]),
  check:{prompt:'Try it: a fictional report says "The storm which arrived just after midnight knocked out power to the whole valley." A writer quotes it as "The storm ... knocked out power to the whole valley." Which words does the ellipsis stand for: A "which arrived just after midnight" or B "knocked out power"?',answer:'A',options:['A','B'],hint:'Find the words in the original that are missing from the quotation.',pic:pic([['original','The storm which arrived just after midnight knocked out power to the whole valley.'],['quoted','The storm ... knocked out power to the whole valley.']])}},
 {skill:'count',say:'To see how much was cut, line the two versions up word by word. Everything in the original that is missing from the quotation is what the ellipsis replaced: in the bridge example, "over the river near the mill", which is 6 words.',pic:pic([['cut','over the river near the mill'],['words','6']])},
 {skill:'count',say:'The words before and after the ellipsis must match the original exactly. Only the middle may change, and only by being replaced with the three dots.',pic:pic([['before the dots','The old bridge'],['after the dots','carried trains for a century.']]),
  check:{prompt:'Try it: a fictional newsletter says "Our team after months of early practice finally won the regional final." A writer quotes it as "Our team ... finally won the regional final." How many words does the ellipsis replace?',answer:5,options:[5,4,6],hint:'Count the words of "after months of early practice".',pic:pic([['original','Our team after months of early practice finally won the regional final.'],['quoted','Our team ... finally won the regional final.']])}},
 {skill:'mark',say:'In dialogue the two marks show different pauses. An ellipsis shows a voice that trails off: "Maybe if we wait a little longer..." A dash shows a sudden break, when a speaker is cut off: "Watch out for the—"',pic:pic([['trails off','ellipsis ...'],['cut off suddenly','dash —']])},
 {skill:'mark',say:'Read what happens next to decide. If something interrupts the speaker, use a dash. If the speaker drifts into silence, use an ellipsis.',pic:pic([['the door burst open','dash'],['his voice drifted away','ellipsis']]),
  check:{prompt:'Try it: "Give me that___" Ruth said. Her brother snatched the map before she finished. Using this topic’s rules, which mark belongs in the blank: an ellipsis or a dash?',answer:'dash',options:['dash','ellipsis'],hint:'Was she cut off, or did her voice trail away?',pic:pic([['line','Give me that___'],['then','Her brother snatched the map before she finished.']])}}],
progression:{requires:['language-m-parenthetical-commas','language-m-active-passive'],operations:2,demand:'Line up a quotation with its original to find and count the words replaced, and choose an ellipsis or a dash from what happens to the speaker.'},
items(add){
 const ab=[],md=[];
 Q.forEach((r,k)=>{const lead=`${r[3][0].toUpperCase()+r[3].slice(1)} says "${orig(r)}"`;
  /* Which words the ellipsis stands for (the Try-it's storm report is left out). */
  if(r[0]!=='The storm'){const wrong=r[2].split(' ').slice(0,3).join(' ').replace(/\.$/,''),first=k%2===0;
   add('omit',`${lead} A writer quotes it as "${short(r)}" Which words does the ellipsis stand for: A "${first?r[1]:wrong}" or B "${first?wrong:r[1]}"?`,first?'A':'B',pic([['original',orig(r)],['quoted',short(r)]]),`"${r[1]}" is in the original but not in the quotation.`,[first?'a':'b']);ab.push(first?'a':'b');}
  /* Which shortened quotation is punctuated honestly. */
  const first=k%2===1;
  add('omit',`${lead} Which shortened quotation correctly shows that words were left out: A "${first?short(r):bare(r)}" or B "${first?bare(r):short(r)}"?`,first?'A':'B',pic([['original',orig(r)]]),`Only "${short(r)}" marks the missing words with an ellipsis.`,[first?'a':'b']);ab.push(first?'a':'b');
  /* Counting the words replaced (the Try-it's newsletter is left out). */
  if(r[0]!=='Our team')add('count',`${lead} A writer quotes it as "${short(r)}" How many words does the ellipsis replace?`,words(r[1]),pic([['original',orig(r)],['quoted',short(r)]]),`It replaces "${r[1]}": ${words(r[1])} words.`);
  add('count',`${lead} If a writer keeps only "${r[0]}" and "${r[2]}", how many words in all are left out of the middle?`,words(r[1]),pic([['original',orig(r)]]),`Between them sits "${r[1]}": ${words(r[1])} words.`);
  add('count',`${lead} A writer quotes it as "${short(r)}" How many words of the original does the quotation keep?`,words(r[0])+words(r[2]),pic([['original',orig(r)],['quoted',short(r)]]),`"${r[0]}" has ${words(r[0])} and "${r[2]}" has ${words(r[2])}: ${words(r[0])+words(r[2])} words.`);});
 /* Ellipsis or dash in dialogue (the Try-it's Ruth line is left out). */
 D.forEach(([who,line,kind,after],k)=>{if(who==='Ruth')return;const ans=kind==='cut'?'dash':'ellipsis';
  add('mark',`"${line}___" ${who} said. ${after} Using this topic’s rules, which mark belongs in the blank: an ellipsis or a dash?`,ans,pic([['line',`${line}___`],['then',after]]),kind==='cut'?`${who} is cut off suddenly, so a dash.`:`${who}’s voice trails away, so an ellipsis.`,[`a ${ans}`,`an ${ans}`,ans==='dash'?'—':'...']);md.push(ans);
  const right=`"${line}${kind==='cut'?'—':'...'}" ${who} said.`,wrong=`"${line}${kind==='cut'?'...':'—'}" ${who} said.`,first=k%2===0;
  add('mark',`${after} Which line fits what happened: A ${first?right:wrong} or B ${first?wrong:right}`,first?'A':'B',pic([['then',after]]),`${kind==='cut'?'An interruption takes a dash':'A voice that trails off takes an ellipsis'}: ${right}`,[first?'a':'b']);ab.push(first?'a':'b');});
 for(const [s,ans] of [['a speaker is interrupted mid-word','dash'],['a quotation leaves out words in the middle','ellipsis'],['a speaker’s voice fades into silence','ellipsis'],['a sudden noise cuts a speaker off','dash'],['a writer skips part of a long sentence they are quoting','ellipsis'],['a speaker is stopped by someone grabbing their arm','dash']])
  add('mark',`Using this topic’s rules, which mark shows that ${s}: an ellipsis or a dash?`,ans,pic([['situation',s]]),ans==='dash'?'A sudden break or interruption takes a dash.':'Left-out words and voices that trail off take an ellipsis.',[`a ${ans}`,`an ${ans}`]);
}
};
