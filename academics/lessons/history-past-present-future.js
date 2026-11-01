// Elementary topic: past, present and future. Every question states the year the story is in, so
// nothing here depends on today's real date. The event years and the "ago"/"until" gaps are picked
// by the generator and the answer follows mechanically: earlier than the story's year is the past,
// later is the future, and the gap between the two years is found by subtraction either way.
const STORY_YEARS=[1848,1863,1877,1901,1914,1932,1949,1966];
const OFFSETS=[2,5,9,14,21,27];
/* improve20-n-nov1 (audit4 a2): "how many years ago / until" uses small gaps a Grade 2 child can count on or back (1848 back to 1845),
   not 4-digit subtraction with regrouping (1962 - 1945), which is past the Grade 2 standard (2.NBT.7 is within 1000). Gaps up to 9
   keep their questions; the three larger offsets ask ago/until with these gaps instead. The past/present/future questions keep every offset. */
const GAPS=[2,5,9,3,7,4];
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
{"skill":"when","say":"A story can happen in any year. Say the story's year is 1905. Before 1905 is the past. 1905 itself is the present. After 1905 is the future.","pic":{"t":"passages","title":"The story's year","texts":["In the story it is 1905.","1890 is in the past.","1920 is in the future."]}},
{"skill":"when","say":"Yesterday came before today. Tomorrow comes after today. An earlier year is like yesterday. A later year is like tomorrow.","pic":{"t":"passages","title":"Earlier and later","texts":["Yesterday came before today.","Tomorrow comes after today."]},"check":{"prompt":"In the story it is 1940. Is 1955 in the past, present or future?","answer":"future","options":["future","past","present"],"hint":"1955 comes after 1940.","pic":pic(1940,1955)}},
{"skill":"ago","say":"How long ago was it? Count back from the story's year. The story is in 1905. Something happened in 1903. Count back: 1904, 1903. That was 2 years ago.","pic":{"t":"passages","title":"Years ago","texts":["Story's year: 1905.","Event: 1903.","Count back: 1904, 1903.","That was 2 years ago."]}},
{"skill":"ago","say":"Last year is one year before. The story is in 1905. Last year was 1904. That was 1 year ago.","pic":{"t":"passages","title":"Last year","texts":["This year: 1905.","Last year: 1904."]},"check":{"prompt":"In the story it is 1962. Something happened in 1958. How many years ago was it?","answer":4,"options":[4,3],"hint":"Count back from 1962: 1961, 1960, 1959, 1958.","pic":pic(1962,1958)}},
{"skill":"until","say":"How long until it comes? Count on from the story's year. The story is in 1905. Something will happen in 1908. Count on: 1906, 1907, 1908. That is 3 years until it comes.","pic":{"t":"passages","title":"Years until","texts":["Story's year: 1905.","Event: 1908.","Count on: 1906, 1907, 1908.","That is 3 years until it comes."]}},
{"skill":"until","say":"Next year is one year after. The story is in 1905. Next year will be 1906. That is 1 year until it comes.","pic":{"t":"passages","title":"Next year","texts":["This year: 1905.","Next year: 1906."]},"check":{"prompt":"In the story it is 1978. Something will happen in 1983. In how many years will it come?","answer":5,"options":[5,4],"hint":"Count on from 1978: 1979, 1980, 1981, 1982, 1983.","pic":pic(1978,1983)}}],
progression:{"requires":["history-e-timelines"],"operations":1,"demand":"Compare a stated year with the story's own year, and count back or on (gaps up to 9 years) to find how long ago or how soon."},
items(add){
 STORY_YEARS.forEach((S,si)=>{
  add('when',`In the story it is ${S}. Is ${S} in the past, present or future?`,'present',pic(S,S),`${S} is the story's own year, so it is the present.`,['the present','in the present']);
  add('when',`In the story it is ${S}. Right now, is this year in the past, present or future?`,'present',picYear(S),"The story's own year is always the present.",['the present','in the present']);
  OFFSETS.forEach((d,di)=>{
   const i=(si+di)%PAST_EVENTS.length,past=S-d,fut=S+d;
   add('when',`In the story it is ${S}. Is ${past} in the past, present or future?`,'past',pic(S,past),`${past} comes before ${S}, so it is in the past.`,['the past','in the past']);
   add('when',`In the story it is ${S}. Is ${fut} in the past, present or future?`,'future',pic(S,fut),`${fut} comes after ${S}, so it is in the future.`,['the future','in the future']);
   const g=GAPS[di],was=S-g,will=S+g,yrs=g===1?'year':'years';
   add('ago',`In the story it is ${S}. In ${was}, ${PAST_EVENTS[i]}. How many years ago was that?`,g,pic(S,was),`Count back from ${S} to ${was}: that is ${g} ${yrs} ago.`);
   add('until',`In the story it is ${S}. In ${will}, ${FUT_EVENTS[i]}. In how many years will that happen?`,g,pic(S,will),`Count on from ${S} to ${will}: that is ${g} ${yrs} until it happens.`);
  });
 });
}
};
