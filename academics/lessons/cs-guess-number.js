// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Guess a hidden number by halving what is left each time, instead of trying every number. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-guess-number",subject:"cs",level:3,grade:5,standard:"CSTA 1B-AP-08 (extends to 2-AP-10)",
 title:"Halving the search",goal:"Guess a hidden number by halving what is left each time, instead of trying every number.",points:20,
 skills:{"middle":"Guessing the middle","next":"Using the answer","count":"How many guesses"},
 steps:[
 {skill:"middle",say:"A friend hides a number between 1 and 100.  You could try 1, then 2, then 3, but that can take a hundred guesses.",pic:[{"t":"line","max":100,"jumps":1,"hop":100}],eq:"1 to 100"},
 {skill:"middle",say:"Guess the middle instead.  Halfway between 1 and 100 is 50, rounding down when it is not exact.",pic:[{"t":"line","max":100,"jumps":2,"hop":50}],eq:"(1 + 100) halved = 50",
  check:{prompt:"A number is hidden between 1 and 40. What is your first guess, halfway between them?",answer:20,options:[20,1,40,10],hint:"Add the two ends and halve the total.",pic:{"t":"word","base":"1 to 40"}}},
 {skill:"next",say:"Your friend says the number is higher.  Every number from 1 to 50 is gone in one guess, and 51 to 100 is left.",pic:[{"t":"line","max":100,"jumps":2,"hop":50}],eq:"51 to 100"},
 {skill:"next",say:"Guess the middle of what is left.  Halfway between 51 and 100 is 75.  If your friend says lower, 51 to 74 is left.",pic:[{"t":"halving","left":[100,50,25]}],eq:"(51 + 100) halved = 75",
  check:{prompt:"The number is between 1 and 100, you guessed 50, and you are told it is lower. Which numbers are left?",answer:"1 to 49",options:["1 to 49","51 to 100","1 to 50"],hint:"50 was wrong, and everything above it is too high.",pic:{"t":"word","base":"1 to 49"}}},
 {skill:"count",say:"Each guess throws away the number tried and the half that cannot hold it.  From 100, at most 50 are left, then 25, 12, 6, 3 and 1, and the next guess finds it.",pic:[{"t":"halving","left":[100,50,25,12,6,3,1],"found":true}],eq:"100, 50, 25, 12, 6, 3, 1"},
 {skill:"count",say:"That is why 100 numbers need at most 7 guesses, wherever the number hides.",pic:[{"t":"halving","left":[100,50,25,12,6,3,1],"found":true}],eq:"100 numbers: at most 7 guesses",
  check:{"prompt":"There are 7 numbers, 1 to 7. Guessing the middle each time, what is the most guesses you could need?","answer":3,"options":[3,7,4,2],"hint":"7 leaves at most 3, then 1, and the next guess finds it.","pic":{"t":"word","base":"7 numbers"}}},
 {skill:"middle",say:"Guess the middle, listen to the answer, throw away the half that cannot hold the number.",pic:[{"t":"halving","left":[100,50,25,12,6,3,1],"found":true}]}],
 items(add){
  /* 28 Oct (elfact): the middle why said the middle guess "throws away the most" (it throws away about half, whichever way the answer goes), and the count why now says how many numbers there are, counting both ends, as step 1 does (1 to 100 is a hundred). */
  const _SKIP=new Set(["A number is hidden between 1 and 40. What is your first guess, halfway between them?","The number is between 1 and 100, you guessed 50, and you are told it is lower. Which numbers are left?","There are 7 numbers, 1 to 7. Guessing the middle each time, what is the most guesses you could need?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let low=1;low<=40;low++)for(let high=low+7;high<=100;high++)_P.push([low,high]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [low,high]=_P[_i],guess=Math.floor((low+high)/2),
 _up=(low+high)%2===0,word=_up?'higher':'lower',
 r=guess;
add("middle","A number is hidden between "+(low)+" and "+(high)+". What is your first guess, halfway between them (round down if it is not exact)?",r,{"t":"word","base":""+(low)+" to "+(high)+""},"Halfway between "+(low)+" and "+(high)+" is "+(r)+((low+high)%2?", rounding down":"")+". Guessing the middle throws away about half of the numbers, whichever way the answer goes.");}}
{const _P=[];
for(let low=1;low<=40;low++)for(let high=low+7;high<=100;high++)_P.push([low,high]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [low,high]=_P[_i],guess=Math.floor((low+high)/2),
 _up=(low+high)%2===0,word=_up?'higher':'lower',
 r=(_up?Math.floor((guess+1+high)/2):Math.floor((low+guess-1)/2));
add("next","The number is between "+(low)+" and "+(high)+". You guessed "+(guess)+" and were told the number is "+(word)+". What do you guess next?",r,{"t":"word","base":guess},""+(guess)+" is out and so is everything on the wrong side of it, so guess the middle of what is left: "+(r)+".");}}
{const _P=[];
for(let low=1;low<=40;low++)for(let high=low+7;high<=100;high++)_P.push([low,high]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [low,high]=_P[_i],guess=Math.floor((low+high)/2),
 _up=(low+high)%2===0,word=_up?'higher':'lower',
 r=Math.ceil(Math.log2(high-low+2));
add("count","A number is hidden between "+(low)+" and "+(high)+". Halving each time, how many guesses does the worst case need?",r,{"t":"word","base":""+(low)+" to "+(high)+""},"From "+(low)+" to "+(high)+" is "+(high-low+1)+" numbers, counting both ends. Each guess rules out the number tried and the half that cannot hold it, so that takes "+(r)+" guesses at worst.");}}
 }};
