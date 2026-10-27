// Original language lesson. Every sentence is built from a noun of a known kind (person, thing or
// place) plus a clause and a tail, all from fixed lists below, so the right relative word always
// follows mechanically from which list the noun came from (CCSS L.4.1a). Rule used throughout:
// who for people, which or that for things and animals (both accepted), where for places, whose
// for something belonging to the noun before it. Decision, kept consistent everywhere in this file:
// a person blank is only ever asked with "who" as the answer, and "that" is never accepted for a
// person (a real fifth-grade grammar rule some usage guides relax, but this file avoids the
// question entirely rather than asking a child to weigh it).
const PEOPLE=['baker','shepherd','mayor','apprentice','farmer','teacher','carpenter','fisherman','gardener','librarian'];
const PCLAUSE=['bakes bread every morning','tends the sheep on the hill','runs the town meetings','learns the trade each day','plants the wheat in spring','teaches the children to read','builds sturdy wooden chairs','mends the fishing nets','waters the garden at dawn','keeps the old books in order'];
const THINGS=['wagon','goat','lantern','horse','bell','fox','basket','duck','ladder','kettle'];
const TCLAUSE=['lost a wheel on the road','ate the cabbage in the garden','ran out of oil last night','pulled the heavy cart uphill','rang loudly at noon','stole bread from the window','held the ripe apples','swam across the pond','leaned against the barn wall','boiled over on the stove'];
const PLACES=['market','meadow','bridge','workshop','orchard','harbor','schoolhouse','mill','garden','village'];
const PLCLAUSE=['farmers sold their vegetables','the children played every afternoon','carts crossed the river safely every day','the carpenter kept his tools','apples were picked each fall','the ships came in to load grain','lessons were taught each morning','flour was ground into sacks','the flowers bloomed all summer','the fair was held every year'];
const OWNED=['oven','cart','goat','ladder','lantern','boots','basket','roof','horse','apron'];
const OCLAUSE=['cracked in the heat','broke a wheel','ran away at dawn','fell over in the wind','ran out of oil','wore through at the toe','was overturned by the wind','began to leak','went lame on the road','tore at the seam'];
const OACT1=['baked bread outdoors instead','walked to town instead','called for help at once','mended it before dinner','lit a candle instead','patched them with cloth','fixed it before dark','patched it the next day','borrowed a neighbor’s mule','sewed it up that evening'];
const OACT2=['sold rolls from a cart instead','rode a borrowed cart instead','searched the meadow all day','propped it up with a beam','used a candle stub instead','wore an older pair','carried apples in a sack','slept in the workshop that night','walked the long way home','stitched it by the fire'];
const PTAIL1='lives near the square.',PTAIL2='is known all over Oakhaven.';
const TTAIL1='belongs to the village.',TTAIL2='is kept behind the mill.';
const PLTAIL1='is well known in Oakhaven.',PLTAIL2='is loved by the villagers.';
const rotate3=(i,a,b,c)=>[[a,b,c],[b,a,c],[b,c,a]][i%3];
const rotate4=(i,a,b,c,d)=>[[a,b,c,d],[b,a,c,d],[b,c,a,d],[b,c,d,a]][i%4];
/* Picks one of three (or four) fixed words by index, cycling through every one in turn -- unlike
   rotate3/rotate4 above, which reorder a full list for multiple-choice display. */
const pick3=(i,a,b,c)=>[a,b,c][i%3];
export default {
id:"language-e-relative-pronouns",
subject:"language",
level:3,
grade:4,
title:"Who, which, where and whose",
goal:"Choose the relative word that fits a person, a thing, an animal or a place, and fix a sentence that uses the wrong one.",
standard:"CCSS L.4.1a: use relative pronouns (who, whose, whom, which, that) and relative adverbs (where, when, why)",
points:20,
skills:{"choose":"Pick the right relative word","kind":"Person, thing or place","fix":"Fix the wrong word"},
steps:[{"skill":"choose","say":"A relative word joins a describing clause onto a noun. Who points back to a person: the baker who bakes bread. Which or that points back to a thing or an animal: the wagon which lost a wheel. Where points back to a place: the market where farmers sold vegetables. Whose shows something belongs to the noun before it: the baker whose oven cracked.","pic":{"t":"passages","title":"Four relative words","texts":["Who: a person. The baker who bakes bread.","Which or that: a thing or animal. The wagon which lost a wheel.","Where: a place. The market where farmers sold vegetables.","Whose: it belongs to the noun. The baker whose oven cracked."]}},
{"skill":"kind","say":"Before picking the word, name what the first noun is: a person, a thing (including an animal) or a place. The shepherd is a person. The goat is a thing. The meadow is a place. Read the clause too. A place can take which when it is the subject or object: the bridge which collapsed. We sometimes use who for a pet.","pic":{"t":"passages","title":"Name the noun first","texts":["The shepherd: a person, so who.","The goat: a thing, so which or that.","The meadow: a place, so where."]}},
{"skill":"choose","say":"Read the whole sentence first and find the noun the blank follows, then ask what kind of noun it is before choosing the word.","pic":{"t":"passages","title":"Read the noun first","texts":["The farmer ___ plants the wheat in spring lives near the square."]},"check":{"prompt":"Fill in the blank: \"The farmer ___ plants the wheat in spring lives near the square.\" Which word fits: which, who or where?","answer":"who","options":["which","who","where"],"hint":"A farmer is a person.","pic":{"t":"passages","title":"Fill in the blank","texts":["The farmer ___ plants the wheat in spring lives near the square."]}}},
{"skill":"kind","say":"A harbor, a workshop and a schoolhouse are all places: somewhere something happens, not someone who acts or something you could pick up.","pic":{"t":"passages","title":"Places, not people or things","texts":["the harbor","the workshop","the schoolhouse"]},"check":{"prompt":"Which kind of noun is \"the harbor\": a person, a thing or a place?","answer":"place","options":["person","thing","place"],"hint":"A harbor is somewhere ships come in, not someone or something you can carry.","pic":{"t":"passages","title":"Read it","texts":["the harbor"]}}},
{"skill":"fix","say":"To fix these sentences, read both the noun and the clause. \"The wagon where lost a wheel\" needs which or that in place of where: \"the wagon which lost a wheel\".","pic":{"t":"passages","title":"Fixed","texts":["Wrong: The wagon where lost a wheel.","Fixed: The wagon which lost a wheel."]}},
{"skill":"fix","say":"In this sentence, carts crossed the river at the bridge, so where fits. In a different clause, which can fit: the bridge which crosses the river.","pic":{"t":"passages","title":"Check the noun again","texts":["The bridge who carts crossed the river safely every day is well known in Oakhaven."]},"check":{"prompt":"Find the mistake: \"The workshop who the carpenter built the cart is behind the mill.\" Which word should replace \"who\": which, where, whose or who?","answer":"where","options":["which","where","whose","who"],"hint":"A workshop is a place.","pic":{"t":"passages","title":"Find the mistake","texts":["The workshop who the carpenter built the cart is behind the mill."]}}}],
progression:{"requires":["language-e-complete-sentences"],"operations":2,"demand":"Tell whether a noun names a person, a thing or a place, pick the relative word that matches it, and fix a sentence that uses the wrong one."},
items(add){
 const passage=text=>({t:'passages',title:'Read it',texts:[text]});
 PEOPLE.forEach((n,i)=>{
  const s1=`Does "the ${n}" name a person, a thing or a place?`;
  add('kind',s1,'person',passage(`the ${n}`),`A ${n} is a person.`,['a person']);
  const s2=`In this sentence about Oakhaven, is "${n}" a person, a thing or a place: "The ${n} ${PCLAUSE[i]}."?`;
  add('kind',s2,'person',passage(`The ${n} ${PCLAUSE[i]}.`),`A ${n} is a person, so it takes who.`,['a person']);
  [PTAIL1,PTAIL2].forEach((tail,k)=>{
   const opts=rotate3(i+k,'who','which','where'),sent=`The ${n} ___ ${PCLAUSE[i]} ${tail}`;
   add('choose',`Fill in the blank: "${sent}" Choose: ${opts.join(', ')}.`,'who',passage(sent),`A ${n} is a person, so the word is who.`);
  });
  const wrong=pick3(i,'which','where','whose'),fixSent=`The ${n} ${wrong} ${PCLAUSE[i]} ${PTAIL1}`,fopts=rotate4(i,'who','which','where','whose');
  add('fix',`Find the mistake: "${fixSent}" Which word should replace "${wrong}": ${fopts.join(', ')}?`,'who',passage(fixSent),`A ${n} is a person, so who belongs there instead of "${wrong}".`);
 });
 const ANIMALS=new Set(['goat','horse','fox','duck']);
 THINGS.forEach((n,i)=>{
  const thingAccept=ANIMALS.has(n)?['a thing','an animal','animal']:['a thing'];
  const s1=`Does "the ${n}" name a person, a thing or a place?`;
  add('kind',s1,'thing',passage(`the ${n}`),ANIMALS.has(n)?`A ${n} is an animal, a kind of thing.`:`A ${n} is a thing, not a person or a place.`,thingAccept);
  const s2=`In this sentence about Oakhaven, is "${n}" a person, a thing or a place: "The ${n} ${TCLAUSE[i]}."?`;
  add('kind',s2,'thing',passage(`The ${n} ${TCLAUSE[i]}.`),`A ${n} is a thing, so it takes which or that.`,thingAccept);
  [TTAIL1,TTAIL2].forEach((tail,k)=>{
   const opts=rotate3(i+k,'which','who','where'),sent=`The ${n} ___ ${TCLAUSE[i]} ${tail}`;
   add('choose',`Fill in the blank: "${sent}" Choose: ${opts.join(', ')}.`,'which',passage(sent),`Which or that fits this clause.`+(ANIMALS.has(n)?' Who is also used for animals, especially pets.':''),ANIMALS.has(n)?['that','who']:['that']);
  });
  const w0=pick3(i,'who','where','whose'),wrong=ANIMALS.has(n)&&w0==='who'?'where':w0,fixSent=`The ${n} ${wrong} ${TCLAUSE[i]} ${TTAIL1}`,fopts=rotate4(i,'which','who','where','whose');
  add('fix',`Find the mistake: "${fixSent}" Which word should replace "${wrong}": ${fopts.join(', ')}?`,'which',passage(fixSent),ANIMALS.has(n)?`A ${n} is an animal, so which or that belongs there instead of "${wrong}" (who is also used for animals, especially pets).`:`A ${n} is a thing, so which (or that) belongs there instead of "${wrong}".`,ANIMALS.has(n)?['that','who']:['that']);
 });
 PLACES.forEach((n,i)=>{
  const s1=`Does "the ${n}" name a person, a thing or a place?`;
  add('kind',s1,'place',passage(`the ${n}`),`A ${n} is a place.`,['a place']);
  const s2=`In this sentence about Oakhaven, is "${n}" a person, a thing or a place: "The ${n} is where ${PLCLAUSE[i]}."?`;
  add('kind',s2,'place',passage(`The ${n} is where ${PLCLAUSE[i]}.`),`A ${n} is a place, so it takes where.`,['a place']);
  [PLTAIL1,PLTAIL2].forEach((tail,k)=>{
   const opts=rotate3(i+k,'where','who','which'),sent=`The ${n} ___ ${PLCLAUSE[i]} ${tail}`;
   add('choose',`Fill in the blank: "${sent}" Choose: ${opts.join(', ')}.`,'where',passage(sent),`A ${n} is a place, so the word is where.`);
  });
  const wrong=pick3(i,'who','which','whose'),fixSent=`The ${n} ${wrong} ${PLCLAUSE[i]} ${PLTAIL1}`,fopts=rotate4(i,'where','who','which','whose');
  add('fix',`Find the mistake: "${fixSent}" Which word should replace "${wrong}": ${fopts.join(', ')}?`,'where',passage(fixSent),`A ${n} is a place, so where belongs there instead of "${wrong}".`);
 });
 PEOPLE.forEach((n,i)=>{
  [OACT1[i],OACT2[i]].forEach((act,k)=>{
   const opts=rotate3(i+k,'whose','who','which'),sent=`The ${n} ___ ${OWNED[i]} ${OCLAUSE[i]} ${act}.`;
   add('choose',`Fill in the blank: "${sent}" Choose: ${opts.join(', ')}.`,'whose',passage(sent),`The ${OWNED[i]} belongs to the ${n}, so the word is whose.`);
  });
  const wrong=pick3(i,'who','which','where'),fixSent=`The ${n} ${wrong} ${OWNED[i]} ${OCLAUSE[i]} ${OACT1[i]}.`,fopts=rotate4(i,'whose','who','which','where');
  add('fix',`Find the mistake: "${fixSent}" Which word should replace "${wrong}": ${fopts.join(', ')}?`,'whose',passage(fixSent),`The ${OWNED[i]} belongs to the ${n}, so whose belongs there instead of "${wrong}".`);
 });
}
};
