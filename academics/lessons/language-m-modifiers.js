// Middle School topic (Grade 7, CCSS L.7.1c): dangling modifiers. Every sentence is built here from a row of parts
// [opening phrase, person, what the person did, a thing, what the thing did], so whether it dangles follows from how
// it was built: an opening phrase describes the subject that comes right after the comma. "Running for the bus, Mia
// dropped her keys" is clear; "Running for the bus, Mia's keys fell out of her bag" says the keys were running. Each
// thing is chosen so it cannot do what the opening phrase says, so each sentence has one right reading.
const ROWS=[
 ['Running for the bus','Mia','dropped her keys','Mia’s keys','fell out of her bag'],['Hungry after the long hike','Leo','ate three sandwiches','Leo’s sandwiches','disappeared fast'],
 ['Climbing the ladder','Ana','painted the ceiling','Ana’s paintbrush','slipped from her hand'],['Excited about the trip','Sam','packed his bag early','Sam’s bag','was ready by noon'],
 ['Reading by the window','Ruth','heard the thunder','the thunder','surprised Ruth'],['Tired from practice','Omar','skipped dessert','Omar’s dessert','went uneaten'],
 ['Walking through the park','Ivy','spotted a red kite','a red kite','caught Ivy’s eye'],['Laughing at the joke','Theo','spilled his juice','Theo’s juice','splashed onto the table'],
 ['Nervous before the test','Nina','checked her pencils twice','Nina’s pencils','lay in a neat row'],['Racing to the finish','Ezra','tripped over his laces','Ezra’s laces','came undone'],
 ['Singing in the shower','Lena','missed the phone call','Lena’s phone','rang three times'],['Baking all morning','Hugo','filled the house with smells','Hugo’s house','smelled of bread'],
 ['Searching for her glasses','Grandma','checked every drawer','Grandma’s glasses','sat on her head'],['Waiting for the train','Kai','read a whole chapter','Kai’s train','arrived late'],
 ['Shivering in the cold','Mateo','zipped up his coat','Mateo’s coat','hung by the door'],['Jumping off the diving board','Priya','made a huge splash','the water','splashed Priya’s friends']];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const clear=r=>`${r[0]}, ${r[1]} ${r[2]}.`;
const dangle=r=>`${r[0]}, ${r[3]} ${r[4]}.`;
const pic=(rows,hint)=>({t:'setups',title:'Opening phrases',head:'Sentence',rows,cols:['Check'],...(hint?{hint:true}:{})});
export default {
id:'language-m-modifiers',subject:'language',level:4,grade:7,standard:'CCSS L.7.1c',
title:'Dangling modifiers',
goal:'Spot an opening phrase that does not describe the subject after it, choose the clear sentence, and fix a dangling modifier by naming the right subject.',
points:20,
skills:{spot:'Spotting a dangling modifier',choose:'Choosing the clear sentence',fix:'Fixing the sentence'},
steps:[
 {skill:'spot',say:'An opening phrase such as "Running for the bus" is a modifier: it describes someone. English attaches it to the subject that comes right after the comma. In "Running for the bus, Mia dropped her keys", Mia is running, which makes sense.',pic:pic([['Running for the bus, Mia dropped her keys.','clear: Mia is running']])},
 {skill:'spot',say:'If the subject after the comma is the wrong one, the modifier dangles. "Running for the bus, Mia’s keys fell out of her bag" says the keys were running for the bus. Ask who or what is doing the action in the opening phrase.',pic:pic([['Running for the bus, Mia’s keys fell out of her bag.','dangling: the keys are running']]),
  check:{prompt:'Try it: does the opening phrase dangle in "Reading by the window, the thunder surprised Ruth.": yes or no?',answer:'yes',options:['yes','no'],hint:'Who is reading by the window? Is that the subject after the comma?',pic:pic([['Reading by the window, the thunder surprised Ruth.','?']])}},
 {skill:'choose',say:'To choose the clear sentence, check the first noun after the comma. It must be able to do what the opening phrase describes: a person can be hungry, tired or excited; sandwiches, desserts and bags cannot.',pic:pic([['Hungry after the long hike, Leo ate three sandwiches.','clear'],['Hungry after the long hike, Leo’s sandwiches disappeared fast.','dangling']])},
 {skill:'choose',say:'A possessive is a trap. In "Climbing the ladder, Ana’s paintbrush slipped", the subject is the paintbrush, not Ana, so the paintbrush is climbing. The name with ’s only describes the paintbrush.',pic:pic([['Climbing the ladder, Ana’s paintbrush slipped from her hand.','subject: paintbrush']]),
  check:{prompt:'Try it: which sentence is clear: A "Tired from practice, Omar’s dessert went uneaten." or B "Tired from practice, Omar skipped dessert."?',answer:'B',options:['A','B'],hint:'Who can be tired: Omar or the dessert?',pic:pic([['A Tired from practice, Omar’s dessert went uneaten.','?'],['B Tired from practice, Omar skipped dessert.','?']])}},
 {skill:'fix',say:'To fix a dangling modifier, put the person the phrase describes right after the comma: "Singing in the shower, Lena missed the phone call." Another fix turns the phrase into a full clause: "While Lena was singing in the shower, her phone rang three times."',pic:pic([['Singing in the shower, Lena missed the phone call.','fixed'],['While Lena was singing in the shower, her phone rang three times.','fixed']])},
 {skill:'fix',say:'Check a fix by asking the question again: who is doing the opening action? If the answer is the subject right after the comma, the sentence is clear.',pic:pic([['Who is singing in the shower?','Lena, right after the comma']]),
  check:{prompt:'Try it: to fix "Baking all morning, Hugo’s house smelled of bread.", who should come right after the comma: Hugo or Hugo’s house?',answer:'Hugo',options:['Hugo','Hugo’s house'],hint:'Who was baking all morning?',pic:pic([['Baking all morning, Hugo’s house smelled of bread.','dangling']])}}],
progression:{requires:['language-e-complete-sentences','language-m-parenthetical-commas'],operations:2,demand:'Find the subject right after the comma, test it against the opening phrase, and name the subject the phrase really describes.'},
items(add){
 const yn=[],ab=[];
 ROWS.forEach((r,k)=>{const c=clear(r),d=dangle(r);
  /* Spot: clear and dangling forms (the Try-it's thunder sentence is left out). */
  add('spot',`Does the opening phrase dangle in "${c}": yes or no?`,'no',pic([[c,'?']]),`${r[1]} is the one ${r[0].toLowerCase()}, and ${r[1]} comes right after the comma.`);yn.push('no');
  if(r[3]!=='the thunder'){add('spot',`Does the opening phrase dangle in "${d}": yes or no?`,'yes',pic([[d,'?']]),`The subject after the comma is ${r[3]}, but ${r[3]} cannot be the one ${r[0].toLowerCase()}: ${r[1]} is.`);yn.push('yes');}
  add('spot',`In "${d}", what is the subject right after the comma?`,r[3],pic([[d,'?']]),`The subject is ${r[3]}${/’s /.test(r[3])?`; the name with ’s only describes it`:''}.`,[...new Set([r[3].replace(/^the /,''),r[3].replace(/^.*’s /,''),r[3].replace(/^.*’s /,'the '),r[3].replace('’',"'")])]);
  /* Choose the clear sentence (the Try-it's Omar pair is left out). */
  if(r[1]!=='Omar'){const first=k%2===0;add('choose',`Which sentence is clear: A "${first?c:d}" or B "${first?d:c}"?`,first?'A':'B',pic([[`A ${first?c:d}`,'?'],[`B ${first?d:c}`,'?']]),`In "${c}", ${r[1]} is the one ${r[0].toLowerCase()}.`,[first?'a':'b']);ab.push(first?'a':'b');}
  /* Fix: the person who should follow the comma (the Try-it's Hugo is left out). */
  if(r[1]!=='Hugo')add('fix',`To fix "${d}", who should come right after the comma: ${k%2?`${r[1]} or ${r[3]}`:`${r[3]} or ${r[1]}`}?`,r[1],pic([[d,'dangling']]),`${r[1]} is the one ${r[0].toLowerCase()}, so ${r[1]} must come right after the comma.`);
  add('fix',`Who is really ${r[0][0].toLowerCase()+r[0].slice(1)} in "${d}"?`,r[1],pic([[d,'?']]),`Only ${r[1]} can be ${r[0][0].toLowerCase()+r[0].slice(1)}; the sentence puts ${r[3]} in that place by mistake.`);
  add('choose',`Which version fixes "${d}": A "${k%2?`${r[0]}, ${r[3]} ${r[4]} for ${r[1]}.`:`${r[0]}, ${r[1]} ${r[2]}.`}" or B "${k%2?`${r[0]}, ${r[1]} ${r[2]}.`:`${r[0]}, ${r[3]} ${r[4]} for ${r[1]}.`}"?`,k%2?'B':'A',pic([[d,'dangling']]),`Only "${c}" puts ${r[1]} right after the comma.`,[k%2?'b':'a']);ab.push(k%2?'b':'a');});
}
};
