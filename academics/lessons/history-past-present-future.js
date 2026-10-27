// Elementary topic: past, present and future. Every question states the year the story is in, so
// nothing here depends on today's real date. The event years and the "ago"/"until" gaps are picked
// by the generator and the answer follows mechanically: earlier than the story's year is the past,
// later is the future, and the gap between the two years is found by subtraction either way.
const STORY_YEARS=[1848,1863,1877,1901,1914,1932,1949,1966];
const OFFSETS=[2,5,9,14,21,27];
const PAST_EVENTS=['the school opened','a new well was dug','the mill was built','the bridge was painted','the fair was first held','a library opened in the hall','the church bell was cast','the market moved to the square','a clock was put on the hall','the pond was cleared'];
const FUT_EVENTS=['the school will open','a new well will be dug','the mill will be built','the bridge will be painted','the fair will be held for the first time','a library will open in the hall','the church bell will be cast','the market will move to the square','a clock will be put on the hall','the pond will be cleared'];
const pic=(S,E)=>({t:'passages',title:"The story's year",texts:[`In the story it is ${S}.`,`The event is in ${E}.`]});
const picYear=S=>({t:'passages',title:"The story's year",texts:[`In the story it is ${S}.`,`This year is ${S}.`]});
export default {
id:"history-e-past-present-future",
subject:"history",
level:3,
grade:2,
title:"Past, present and future",
goal:"Say whether a year is in the past, the present or the future compared with the story's own year, and find how many years ago or until.",
standard:"C3 D2.His.2.K-2: compare life in the past and present; use words for time",
points:20,
skills:{"when":"Past, present or future","ago":"How many years ago","until":"How many years until"},
steps:[
{"skill":"when","say":"A story can happen in any year. If a story's year is 1905, anything that happened before 1905 is in the past, anything happening in 1905 itself is the present, and anything still to come after 1905 is in the future.","pic":{"t":"passages","title":"The story's year","texts":["In the story it is 1905.","1890 is in the past.","1920 is in the future."]}},
{"skill":"when","say":"Yesterday is the day before today, and tomorrow is the day after today. In a story, an earlier year works like yesterday and a later year works like tomorrow.","pic":{"t":"passages","title":"Earlier and later","texts":["Yesterday came before today.","Tomorrow comes after today."]},"check":{"prompt":"In the story it is 1940. Is 1955 in the past, present or future?","answer":"future","options":["future","past","present"],"hint":"1955 comes after 1940.","pic":pic(1940,1955)}},
{"skill":"ago","say":"How many years ago something happened is found by subtracting: the story's year minus the earlier year. If the story's year is 1905 and something happened in 1890, that was 1905 minus 1890, or 15 years ago.","pic":{"t":"passages","title":"Years ago","texts":["Story's year: 1905.","Event: 1890.","1905 minus 1890 is 15 years ago."]}},
{"skill":"ago","say":"Last year means one year before the story's year. If the story's year is 1905, last year was 1904, which was 1 year ago.","pic":{"t":"passages","title":"Last year","texts":["This year: 1905.","Last year: 1904."]},"check":{"prompt":"In the story it is 1962. Something happened in 1945. How many years ago was it?","answer":17,"options":[17,13],"hint":"Subtract: 1962 minus 1945.","pic":pic(1962,1945)}},
{"skill":"until","say":"How many years until something will come is found by subtracting the other way: the later year minus the story's year. If the story's year is 1905 and something will happen in 1920, that is 1920 minus 1905, or 15 years until it comes.","pic":{"t":"passages","title":"Years until","texts":["Story's year: 1905.","Event: 1920.","1920 minus 1905 is 15 years until it comes."]}},
{"skill":"until","say":"Next year means one year after the story's year. If the story's year is 1905, next year will be 1906, which is 1 year until it comes.","pic":{"t":"passages","title":"Next year","texts":["This year: 1905.","Next year: 1906."]},"check":{"prompt":"In the story it is 1978. Something will happen in 1990. In how many years will it come?","answer":12,"options":[12,8],"hint":"Subtract: 1990 minus 1978.","pic":pic(1978,1990)}}],
progression:{"requires":["history-e-timelines"],"operations":1,"demand":"Compare a stated year with the story's own year and subtract to find how long ago or how soon."},
items(add){
 STORY_YEARS.forEach((S,si)=>{
  add('when',`In the story it is ${S}. Is ${S} in the past, present or future?`,'present',pic(S,S),`${S} is the story's own year, so it is the present.`,['the present','in the present']);
  add('when',`In the story it is ${S}. Right now, is this year in the past, present or future?`,'present',picYear(S),"The story's own year is always the present.",['the present','in the present']);
  OFFSETS.forEach((d,di)=>{
   const i=(si+di)%PAST_EVENTS.length,past=S-d,fut=S+d;
   add('when',`In the story it is ${S}. Is ${past} in the past, present or future?`,'past',pic(S,past),`${past} comes before ${S}, so it is in the past.`,['the past','in the past']);
   add('when',`In the story it is ${S}. Is ${fut} in the past, present or future?`,'future',pic(S,fut),`${fut} comes after ${S}, so it is in the future.`,['the future','in the future']);
   add('ago',`In the story it is ${S}. In ${past}, ${PAST_EVENTS[i]}. How many years ago was that?`,d,pic(S,past),`${S} minus ${past} is ${d} years ago.`);
   add('until',`In the story it is ${S}. In ${fut}, ${FUT_EVENTS[i]}. In how many years will that happen?`,d,pic(S,fut),`${fut} minus ${S} is ${d} years until it happens.`);
  });
 });
}
};
