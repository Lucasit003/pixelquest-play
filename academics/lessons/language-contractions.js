// UNVERIFIED: 38 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: A contraction squeezes two words together with an apostrophe. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"language-e-contractions",subject:"language",level:3,grade:2,standard:"CCSS L.2.2.C",
 title:"Short forms",goal:"A contraction squeezes two words together with an apostrophe.",points:20,
 skills:{"make":"Making one","split":"Splitting one"},
 steps:[
 {skill:"make",say:"A contraction is when two words are squished together with an apostrophe.  For example, 'do not' becomes 'don't'.",pic:[{"t":"pair","a":"do not","b":"don't"}],eq:"do not = don't",
  check:{prompt:"Squish 'was not' into one word with an apostrophe. What do you get?",answer:"wasn't",options:["wasn't","was not","wasnt"],hint:"Squish the two words together and put an apostrophe where the 'o' in 'not' was.",pic:{"t":"word","base":"was not"}}},
 {skill:"make",say:"Another example is 'cannot', which becomes 'can't'.",pic:[{"t":"pair","a":"cannot","b":"can't"}],eq:"can not = can't"},
 {skill:"split",say:"To split a contraction, we look for the apostrophe and add the missing word.  For example, 'don't' splits into 'do not'.",pic:[{"t":"pair","a":"don't","b":"do not"}],eq:"don't = do not",
  check:{prompt:"Split the contraction 'didn't' back into two words. What are they?",answer:"did not",options:["did not","do not","does not"],hint:"Find the apostrophe: the word before it stays, and n't is short for not.",pic:{"t":"word","base":"didn't"}}},
 {skill:"split",say:"Another example is 'can't', which splits into 'cannot'.",pic:[{"t":"pair","a":"can't","b":"cannot"}],eq:"can't = can not"},
 {skill:"make",say:"The apostrophe in a contraction shows where a letter is missing.  In 'don't', the 'o' is missing from 'not'.",pic:[{"t":"pair","a":"is not","b":"isn't"}],eq:"don't = do not",
  check:{prompt:"What is the short form of 'is not'?",answer:"isn't",options:["isn't","is'nt","isnt"],hint:"The apostrophe takes the place of the o in not.",pic:{"t":"word","base":"is not"}}},
 {skill:"make",say:"In 'can't', the apostrophe takes the place of the letters n and o from 'cannot'.",pic:[{"t":"pair","a":"can't","b":"cannot"}],eq:"can't = can not"}],
 items(add){
  const _SKIP=new Set(["What is the contraction for 'do not'?","What does 'don't' split into?","What is the short form of 'is not'?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
  /* Which letters the apostrophe stands for, worked out from the long and short forms. */
  const _GONE=(full,short)=>full==="will not"?"This one is special: will changes to wo, and the apostrophe stands for the o of not.":full==="cannot"?"The apostrophe stands for the n and the o that were left out.":/ not$/.test(full)?"The apostrophe stands for the o of not.":/ am$/.test(full)?"The apostrophe stands for the a of am.":/ are$/.test(full)?"The apostrophe stands for the a of are.":/ have$/.test(full)?"The apostrophe stands for the h and the a of have.":/ us$/.test(full)?"The apostrophe stands for the u of us.":"The apostrophe shows where letters were left out.";
{const _T=[["do not","don't"],["cannot","can't"],["should not","shouldn't"],["would not","wouldn't"],["could not","couldn't"],["must not","mustn't"],["have not","haven't"],["has not","hasn't"],["had not","hadn't"],["will not","won't"],["is not","isn't"],["are not","aren't"],["was not","wasn't"],["were not","weren't"]],_X={},_A=[(k,r)=>"What is the contraction for '"+(k)+"'?",(k,r)=>"How do you write '"+(k)+"' as a contraction?",(k,r)=>"What's the short way to write '"+(k)+"'?",(k,r)=>"How do we make '"+(k)+"' shorter with an apostrophe?"],_W=[(k,r)=>"A contraction combines two words with an apostrophe to show a missing letter."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("make",_A[_j](k,r),r,{"t":"word","base":k},"'"+k+"' becomes '"+r+"'. "+_GONE(k,r),_X[k]);}
{const _T=[["don't","do not"],["can't","cannot"],["shouldn't","should not"],["wouldn't","would not"],["couldn't","could not"],["mustn't","must not"],["haven't","have not"],["hasn't","has not"],["hadn't","had not"],["won't","will not"],["isn't","is not"],["aren't","are not"],["wasn't","was not"],["weren't","were not"],["doesn't","does not"],["let's","let us"],["I'm","I am"],["You're","You are"],["We're","We are"],["They're","They are"],["I've","I have"],["You've","You have"],["We've","We have"],["They've","They have"]],_X={"can't":["can not"]},_A=[(k,r)=>"What does '"+(k)+"' split into?",(k,r)=>"How do you split '"+(k)+"' into two words?",(k,r)=>"What are the two words that make up '"+(k)+"'?",(k,r)=>"Can you tell me the two separate words in '"+(k)+"'?"],_W=[(k,r)=>"The apostrophe in a contraction shows where a letter is missing."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("split",_A[_j](k,r),r,{"t":"word","base":k},"'"+k+"' splits into '"+r+"'. "+_GONE(r,k),_X[k]);}
 }};
