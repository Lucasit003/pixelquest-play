// Middle School topic (Grade 6, CCSS L.6.2a): commas, dashes and parentheses around extra (non-essential)
// information. Every sentence is put together here from a core (a named subject and what it did) and one insert
// placed between them, so each answer follows from how the sentence was built: the insert is the extra information,
// and a sentence is punctuated correctly exactly when the insert has a matching mark on each side (two commas, two
// dashes or a pair of parentheses). Each subject is a name (Kai, Maple Park, Dr. Banks), so the insert can never be
// needed to tell which one is meant: that keeps every insert non-essential and avoids the essential/non-essential
// question entirely. Inserts are always in the middle of the sentence, never at the end, so the rule needs no
// exception. A wrong version either leaves one side open or mixes two kinds of mark. A comma-opened appositive with
// no closing mark (Kai, my oldest cousin won) is never shown as a sentence to judge, because it can be read as
// speaking to Kai; it is only used when the question says a comma is missing. The people and places are made up.
// Extends language-e-complete-sentences and language-e-joining-words.
const CORE=[
 {s:'Mr. Ortiz',ins:['our science teacher','who once worked as a park ranger'],pred:['coached the chess club','planted a tree by the gate']},
 {s:'Ms. Lee',ins:['the school librarian','who reads a book every week'],pred:['ran the book fair','fixed the old printer']},
 {s:'Kai',ins:['my oldest cousin','who had just moved to town'],pred:['won the spelling bee','joined the soccer team']},
 {s:'Maple Park',ins:['the biggest park in town','which opened last spring'],pred:['hosted the summer fair','closed for repairs']},
 {s:'Pinecrest Library',ins:['the oldest building on Elm Street','which has a reading garden'],pred:['added two hundred new books','stayed open late on Friday']},
 {s:'Grandma Rosa',ins:['a retired pilot','who grew up on a farm'],pred:['taught us to fly kites','baked bread for the whole street']},
 {s:'Dr. Banks',ins:['the town vet','who owns three cats'],pred:['checked our puppy','gave a talk at school']},
 {s:'Lake Willow',ins:['the coldest lake in the valley','which freezes every winter'],pred:['held a fishing contest','flooded the path in April']},
 {s:'Coach Kim',ins:['a former track star','who trains every morning'],pred:['timed the race','handed out the medals']},
 {s:'The Red Barn Cafe',ins:['our favorite place for lunch','which sells fresh pies'],pred:['hired two new cooks','painted its front door']},
 {s:'Rex',ins:['the old dog next door','who barks at every bike'],pred:['slept on our porch','chased a squirrel up a tree']},
 {s:'Aunt May',ins:['a nurse at the city hospital','who lives next door'],pred:['planned the picnic','drove us to the zoo']}];
const OPEN={none:' ',comma:', ',dash:'—',paren:' ('},CLOSE={none:' ',comma:', ',dash:'—',paren:') '};
const KINDS=['comma','dash','paren'];
/* Wrong versions: one side left open, or two kinds of mark mixed. */
const WRONG=[['none','comma'],['comma','dash'],['none','dash'],['dash','comma'],['paren','none'],['paren','comma'],['none','paren'],['comma','paren'],['dash','paren'],['paren','dash']];
const NAME={comma:'two commas',dash:'two dashes',paren:'a pair of parentheses'};
const put=(s,ins,pred,o,c)=>`${s}${OPEN[o]}${ins}${CLOSE[c]}${pred}.`;
const said=(title,...texts)=>({t:'passages',title,texts});
const RULE='Rule: extra information is set off by a matching pair: two commas, two dashes or two parentheses.';
const lastWord=s=>s.split(' ').pop();
export default {
id:'language-m-parenthetical-commas',subject:'language',level:4,grade:6,standard:'CCSS L.6.2a',
title:'Commas, dashes and parentheses',
goal:'Find the extra information in a sentence, check that it has a matching mark on each side, and choose the version punctuated correctly.',
points:20,
skills:{find:'Find the extra information',rule:'Check the matching-pair rule',choose:'Choose the right version'},
steps:[
 {skill:'find',say:'Extra information tells more about a noun, but the sentence does not need it to say who or what. In Kai, my oldest cousin, won the spelling bee, the name Kai already tells us who, so my oldest cousin is extra.',pic:said('Core and extra','Kai won the spelling bee.','Kai, my oldest cousin, won the spelling bee.')},
 {skill:'find',say:'To find the extra part, take it out. What is left must still be a complete sentence with the same meaning: Kai won the spelling bee. The extra part sits between the name and what the name did.',pic:said('Take it out','Kai my oldest cousin won the spelling bee.','Kai won the spelling bee.'),
  check:{prompt:'Try it: which words in "Ms. Ford the school nurse checked my temperature." are extra information that should be set off?',answer:'the school nurse',options:['the school nurse','checked my temperature'],hint:'Take the words out: is what is left still a complete sentence about Ms. Ford?',pic:said('Read the sentence','Ms. Ford the school nurse checked my temperature.')}},
 {skill:'rule',say:'Extra information in the middle of a sentence needs a mark on each side, and the two marks must match: two commas, two dashes, or a pair of parentheses.',pic:said('Three matching pairs','Kai, my oldest cousin, won the spelling bee.','Kai—my oldest cousin—won the spelling bee.','Kai (my oldest cousin) won the spelling bee.')},
 {skill:'rule',say:'Commas are the usual choice. Dashes make the extra part stand out, and parentheses make it quieter. Never mix two kinds of mark, and never leave one side open.',pic:said('Two mistakes','Kai, my oldest cousin—won the spelling bee. Mixed marks.','Kai my oldest cousin, won the spelling bee. One side open.'),
  check:{prompt:'Try it: is "Mr. Hale—our bus driver, waved at us." punctuated correctly: yes or no?',answer:'no',options:['yes','no'],hint:'Look at the mark on each side of our bus driver. Do they match?',pic:said('Read the sentence','Mr. Hale—our bus driver, waved at us.')}},
 {skill:'choose',say:'To choose the right version, find the extra part first, then check both of its sides: the version with one matching pair around it is the right one.',pic:said('Check both sides','Maple Park (which opened last spring) hosted the summer fair.')},
 {skill:'choose',say:'Different versions can all look tidy, so check each one. A dash on one side and a comma on the other is wrong even though both marks are there.',pic:said('Check each version','Maple Park—which opened last spring—hosted the summer fair.','Maple Park—which opened last spring, hosted the summer fair.'),
  check:{prompt:'Try it: which is punctuated correctly: A "Lake Bell (the deepest lake around) froze in January." or B "Lake Bell (the deepest lake around, froze in January."?',answer:'A',options:['A','B'],hint:'Find the extra words, then look for a matching pair around them.',pic:said('Two versions','Lake Bell (the deepest lake around) froze in January.','Lake Bell (the deepest lake around, froze in January.')}}],
progression:{requires:['language-e-complete-sentences','language-e-joining-words'],operations:2,demand:'Separate a sentence’s core from a non-essential insert, then judge and choose punctuation by the matching-pair rule.'},
items(add){
 const pairs=[];CORE.forEach((c,i)=>c.ins.forEach((ins,n)=>pairs.push({...c,ins,i,n})));
 pairs.forEach((c,j)=>{
  const [p0,p1]=c.n?[c.pred[1],c.pred[0]]:c.pred,end=lastWord(c.ins);
  /* Find: the extra words in a sentence with no marks yet, and where a missing closing mark belongs. */
  const bare=put(c.s,c.ins,p0,'none','none');
  add('find',`Which words in "${bare}" are extra information that should be set off with commas, dashes or parentheses?`,c.ins,said('Read the sentence',bare),`Take out "${c.ins}" and "${c.s} ${p0}." is still complete, so those words are extra.`);
  const k=KINDS[j%3],open=put(c.s,c.ins,p1,k,'none');
  const ask=k==='comma'?`One comma is missing from "${open}" After which word does the missing comma belong?`:k==='dash'?`One dash is missing from "${open}" After which word does the missing dash belong?`:`The closing parenthesis is missing from "${open}" After which word does it belong?`;
  add('find',ask,end,said('Read the sentence',open),`The extra part is "${c.ins}", so the closing mark goes right after ${end}.`,[`after ${end}`]);
  /* Rule: one sentence that follows it and one that does not. */
  const good=KINDS[(j+1)%3],right=put(c.s,c.ins,p0,good,good);
  add('rule',`${RULE} Is "${right}" punctuated correctly: yes or no?`,'yes',said('Read the sentence',right),`"${c.ins}" has ${NAME[good]} around it, one on each side.`);
  const [wo,wc]=WRONG[j%WRONG.length],bad=put(c.s,c.ins,p1,wo,wc);
  add('rule',`${RULE} Is "${bad}" punctuated correctly: yes or no?`,'no',said('Read the sentence',bad),wo==='none'||wc==='none'?`One side of "${c.ins}" is left open.`:`"${c.ins}" has two different marks around it, so they do not match.`);
  /* Choose: one right version and two wrong ones. */
  const kind=KINDS[(j+2)%3],ok=put(c.s,c.ins,p1,kind,kind),w1=WRONG[(j+3)%WRONG.length],w2=WRONG[(j+6)%WRONG.length];
  const opts=[put(c.s,c.ins,p1,...w1),put(c.s,c.ins,p1,...w2)],at=j%3;opts.splice(at,0,ok);
  add('choose',`Which sentence is punctuated correctly: A "${opts[0]}", B "${opts[1]}" or C "${opts[2]}"?`,'ABC'[at],said('Three versions',...opts),`Only "${ok}" has a matching pair, ${NAME[kind]}, around "${c.ins}".`,[ok,ok.replace(/\.$/,'')]);
 });
}
};
