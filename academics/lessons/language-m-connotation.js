// Middle School topic (Grade 7, CCSS L.7.5c): connotation and denotation. Every question is built from a table of
// word pairs that share a basic meaning (their denotation) but differ in feeling (their connotation): the first word
// of each row is the more positive choice and the second the more negative. Answers follow from the row a word is
// in and its place there; words from different rows never share a meaning. The rows are standard classroom pairs.
const ROWS=[
 ['slender','skinny','thin','The model in the painting is ___.'],['thrifty','stingy','careful with money','My uncle is ___ and never buys anything extra.'],
 ['confident','arrogant','sure of yourself','The new captain is ___ about winning.'],['curious','nosy','wanting to know things','Our neighbour is ___ about everyone’s visitors.'],
 ['relaxed','lazy','taking it easy','On Sundays my brother is ___ all day.'],['determined','stubborn','not giving up','She was ___ and would not change her plan.'],
 ['youthful','childish','young in manner','His ___ jokes made the room go quiet.'],['aroma','stench','a smell','The ___ from the kitchen filled the hall.'],
 ['cottage','shack','a small house','They spent the summer in a ___ by the lake.'],['inexpensive','cheap','low in price','The shop sells ___ sandals.'],
 ['unique','weird','unusual','Her hat was certainly ___.'],['assertive','pushy','firm in asking','The salesperson was ___ with every customer.'],
 ['frank','blunt','honest in speech','His ___ answer surprised the class.'],['gathering','mob','a crowd','A ___ formed outside the town hall.'],
 ['proud','conceited','pleased with yourself','After the race he was ___.'],['firm','harsh','strict','The coach was ___ with the late players.'],
 ['clever','sly','good at getting your way','The fox in the story was ___.'],['energetic','hyper','full of energy','The puppy was ___ after its nap.']];
const pic=(rows,hint)=>({t:'setups',title:'Same meaning, different feeling',head:'Word',rows,cols:['Feeling'],...(hint?{hint:true}:{})});
export default {
id:'language-m-connotation',subject:'language',level:4,grade:7,standard:'CCSS L.7.5c',
title:'Connotation: same meaning, different feeling',
goal:'Tell a word’s basic meaning from the feeling it carries, pick the more positive or more negative of two words, and choose a word that fits a purpose.',
points:20,
skills:{feeling:'Positive or negative',meaning:'Denotation and connotation',choose:'Choosing a word for a purpose'},
steps:[
 {skill:'feeling',say:'A word’s denotation is its basic dictionary meaning. Its connotation is the feeling it carries. "Slender" and "skinny" both mean thin, but "slender" sounds admiring and "skinny" sounds unkind.',pic:pic([['slender','positive'],['skinny','negative']])},
 {skill:'feeling',say:'Many pairs work this way. A thrifty person and a stingy person both spend little, but thrifty praises them and stingy criticises them. Curious and nosy both describe wanting to know; nosy suggests prying where you should not.',pic:pic([['thrifty','positive'],['stingy','negative'],['curious','positive'],['nosy','negative']]),
  check:{prompt:'Try it: "confident" and "arrogant" both mean sure of yourself. Which has the more positive connotation: confident or arrogant?',answer:'confident',options:['confident','arrogant'],hint:'Which word would you rather be called?',pic:pic([['confident','?'],['arrogant','?']])}},
 {skill:'meaning',say:'Two words can share a denotation and differ in connotation. Words with different denotations are not a pair at all: "slender" and "stingy" carry different feelings because they mean different things, not because one is kinder.',pic:pic([['slender, skinny','same meaning: thin'],['slender, stingy','different meanings']])},
 {skill:'meaning',say:'To name the shared meaning, strip the feeling away: "aroma" and "stench" are both a smell; "cottage" and "shack" are both a small house. The feeling is what the writer adds on top.',pic:pic([['aroma, stench','a smell'],['cottage, shack','a small house']]),
  check:{prompt:'Try it: do the words "relaxed" and "lazy" share the same basic meaning, taking it easy: yes or no?',answer:'yes',options:['yes','no'],hint:'Strip the feeling away. What do both describe?',pic:pic([['relaxed','?'],['lazy','?']])}},
 {skill:'choose',say:'Writers choose words to steer the reader. To praise someone who will not give up, call them determined; to criticise the same person, call them stubborn. Same facts, different picture.',pic:pic([['to praise','determined'],['to criticise','stubborn']])},
 {skill:'choose',say:'When a sentence has a purpose, pick the word whose feeling matches it. In "The ___ from the kitchen filled the hall", aroma makes the smell welcome and stench makes it awful.',pic:pic([['aroma','a welcome smell'],['stench','an awful smell']]),
  check:{prompt:'Try it: a reviewer wants to praise a hotel’s low prices. Which word fits: inexpensive or cheap?',answer:'inexpensive',options:['inexpensive','cheap'],hint:'Which word sounds like praise?',pic:pic([['inexpensive','?'],['cheap','?']])}}],
progression:{requires:['language-e-context-clues','language-e-antonyms'],operations:2,demand:'Separate a word’s meaning from its feeling, compare two words with the same meaning, and match a word’s feeling to a writer’s purpose.'},
items(add){
 const yn=[];
 ROWS.forEach(([pos,neg,mean,frame],k)=>{const sw=k%2===1,[x,y]=sw?[neg,pos]:[pos,neg];
  /* More positive, more negative, and labelling one word (the Try-it's confident and arrogant question is left out). */
  if(pos!=='confident')add('feeling',`"${x}" and "${y}" both mean ${mean}. Which has the more positive connotation: ${x} or ${y}?`,pos,pic([[x,'?'],[y,'?']]),`"${pos}" sounds approving; "${neg}" sounds critical.`);
  add('feeling',`"${y}" and "${x}" both mean ${mean}. Which has the more negative connotation: ${y} or ${x}?`,neg,pic([[y,'?'],[x,'?']]),`"${neg}" carries the unkind feeling; "${pos}" is the kinder word.`);
  add('feeling',`Paired with "${k%2?neg:pos}", does the word "${k%2?pos:neg}" have a positive or a negative connotation?`,k%2?'positive':'negative',pic([[k%2?pos:neg,'?']]),`"${k%2?pos:neg}" is the ${k%2?'kinder':'harsher'} of the two words for ${mean}.`);
  /* Denotation: same meaning or not, and naming the shared meaning by choice. */
  const other=ROWS[(k+5)%ROWS.length],same=k%2===0,w2=same?neg:other[1];
  add('meaning',`Do the words "${pos}" and "${w2}" share the same basic meaning: yes or no?`,same?'yes':'no',pic([[pos,'?'],[w2,'?']]),same?`Both mean ${mean}; only the feeling differs.`:`"${pos}" means ${mean}, but "${w2}" means ${other[2]}.`);yn.push(same);
  const opts=[mean,other[2],ROWS[(k+9)%ROWS.length][2]],ord=[opts[k%3],opts[(k+1)%3],opts[(k+2)%3]];
  add('meaning',`What basic meaning do "${pos}" and "${neg}" share: ${ord[0]}, ${ord[1]} or ${ord[2]}?`,mean,pic([[pos,'positive'],[neg,'negative']],true),`Strip away the feeling and both words mean ${mean}.`);
  /* Choosing a word for a purpose in a sentence frame. */
  const praise=k%3!==1,word=praise?pos:neg;
  add('choose',`A writer wants this sentence to ${praise?"praise":"criticise"}: "${frame}" Which word fits: ${x} or ${y}?`,word,pic([[x,'?'],[y,'?']]),`To ${praise?'praise':'criticise'}, use the ${praise?'positive':'negative'} word: "${frame.replace('___',word)}"`);
  if(k%2===0)add('choose',`In the sentence "${frame.replace('___',neg)}", which word could replace "${neg}" to make the sentence sound kinder without changing its meaning: ${ROWS[(k+3)%ROWS.length][0]} or ${pos}?`,pos,pic([[neg,'negative'],[pos,'?']]),`"${pos}" keeps the meaning, ${mean}, with a kinder feeling; "${ROWS[(k+3)%ROWS.length][0]}" means something else.`);});
}
};
