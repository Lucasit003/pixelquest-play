// Original language lesson. Each short story is built as first or third person narration, with or without a character's
// quoted words, so the narrator's point of view is known from construction (CCSS RL.5.6, building on RL.4.6).
const CAST=[['Nell','she','her'],['Owen','he','his'],['Mara','she','her'],['Ivo','he','his'],['Ruth','she','her'],['Sami','he','his']];
/* Each scene: an action, a thing that belongs to the character, what happened to it, and a line the character could say. */
const SCENES=[['walked to the mill at dawn','basket','was full of grain','I can hear the wheel turning'],['climbed the hill behind the school','kite','caught the wind at once','I have never seen it fly so high'],['waited at the bridge for the cart','coat','was wet from the rain','I hope the driver is not late'],['swept the steps of the old hall','broom','lost three bristles','I will need a new one soon'],['counted the geese by the pond','notebook','filled up with tally marks','I think there are more than yesterday'],['carried water from the well','bucket','sloshed over the edge','I should have filled it less']];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const ASK='Is this story told in first person or third person?';
/* first person: the narrator is "I" and takes part; third person: an outside narrator uses the character's name and he/she. */
const story=(pov,[name,he,his],[act,thing,what,line],quote)=>pov==='first'
 ?`I ${act}. My ${thing} ${what}.`+(quote?` "You look tired," ${name} said to me.`:` Then I walked home with ${name}.`)
 :`${name} ${act}. ${cap(his)} ${thing} ${what}.`+(quote?` "${line}," ${he} said.`:` Then ${he} went home.`);
export default {
id:"language-e-point-of-view",
subject:"language",
level:3,
grade:5,
title:"Who is telling the story",
goal:"Tell first person from third person narration, including when a character's own words use I.",
standard:"CCSS RL.5.6: describe how a narrator's point of view shapes a story (building on RL.4.6)",
points:20,
skills:{"pov":"First or third person","clue":"Find the clue word","quote":"Narrator or character"},
steps:[{"skill":"pov","say":"Every story has a narrator: the voice telling it. In first person, the narrator is a character in the story and says I, me and my.","pic":{"t":"passages","title":"First person","texts":["I walked to the mill at dawn. My basket was full of grain. Then I went home."]}},
{"skill":"pov","say":"In third person, the narrator is outside the story. It tells about the characters by name and with he, she, they, his and her.","pic":{"t":"passages","title":"Third person","texts":["Nell walked to the mill at dawn. Her basket was full of grain. Then she went home."]},"check":{"prompt":"\"Ivo fixed the fence. His hands were cold.\" Is this told in first person or third person?","answer":"third person","options":["third person","first person"],"hint":"The narrator tells about Ivo from outside.","pic":{"t":"passages","title":"Read it","texts":["Ivo fixed the fence. His hands were cold."]}}},
{"skill":"clue","say":"Look for the clue words in the narration: I, me, my and we point to first person; a name with he, she, his or her points to third person.","pic":{"t":"passages","title":"Clue words","texts":["First person: I, me, my, we, our","Third person: a name, he, she, his, her, they"]}},
{"skill":"quote","say":"Careful: here the quoted words are Owen speaking. Use the narration outside the quotation marks to find the point of view: it tells about Owen from outside, so the story is third person.","pic":{"t":"passages","title":"A character speaks","texts":["Owen climbed the hill behind the school. His kite caught the wind at once. \"I have never seen it fly so high,\" he said."]},"check":{"prompt":"\"Ruth counted the geese. 'I think there are more today,' she said.\" Who says I here: the narrator or Ruth?","answer":"Ruth","options":["Ruth","the narrator"],"hint":"The I is inside quotation marks.","pic":{"t":"passages","title":"Read it","texts":["Ruth counted the geese. \"I think there are more today,\" she said."]}}},
{"skill":"quote","say":"It works the other way too. A first person narrator can quote another character: \"You look tired,\" Mara said to me. The narration still says I and me, so it is first person.","pic":{"t":"passages","title":"First person with a quote","texts":["I swept the steps of the old hall. My broom lost three bristles. \"You look tired,\" Mara said to me."]}},
{"skill":"pov","say":"Point of view changes what we learn. A first person narrator can tell their own thoughts and report what others say or do; guesses about other people are not certain knowledge. A third person narrator can describe several characters from outside.","pic":{"t":"passages","title":"Why it matters","texts":["First person: we learn what the narrator saw and thought.","Third person: we watch the characters from outside."]},"check":{"prompt":"\"I carried water from the well. 'Slow down,' Sami told me.\" First person or third person?","answer":"first person","options":["first person","third person"],"hint":"Outside the quotation marks, the narrator says I and me.","pic":{"t":"passages","title":"Read it","texts":["I carried water from the well. \"Slow down,\" Sami told me."]}}}],
progression:{"requires":["language-e-compare-viewpoints","language-e-context-clues"],"operations":2,"demand":"Read the narration outside quotation marks for its pronouns, and tell a character's quoted I from the narrator's."},
items(add){
 CAST.forEach((c,ci)=>SCENES.forEach((s,si)=>{const quote=(ci+si)%2===0,pov=['first','third'][(ci*2+si)%2],third=story('third',c,s,quote),text=story(pov,c,s,quote),pic={t:'passages',title:'Read the story',texts:[text]};
  add('pov',`Story: ${text} ${ASK}`,pov+' person',pic,pov==='first'?'Outside the quotation marks, the narrator says I and my.':`The narrator tells about ${c[0]} from outside${quote?'; the I inside the quotation marks is the character speaking':''}.`,[pov]);
  const other=story(pov==='first'?'third':'first',c,s,!quote);
  add('pov',`Story: ${other} ${ASK}`,(pov==='first'?'third':'first')+' person',{t:'passages',title:'Read the story',texts:[other]},'Read the pronouns outside the quotation marks.',[pov==='first'?'third':'first']);
  const opts=[[c[2],'I','my'],['I',c[2],'my'],['my','I',c[2]]][(ci+si)%3];
  add('clue',`Story: ${third} Which word in the narration is a third person clue: ${opts[0]}, ${opts[1]} or ${opts[2]}?`,c[2],{t:'passages',title:'Read the story',texts:[third]},`${cap(c[2])} is used by the narrator about ${c[0]}.`);
  if(quote)add('quote',`Story: ${third} Who says the word I in this story: ${ci%2?c[0]+' or the narrator':'the narrator or '+c[0]}?`,c[0],{t:'passages',title:'Read the story',texts:[third]},`The I is inside quotation marks, so ${c[0]} is speaking; the narrator is outside the story.`);
 }));
}
};
