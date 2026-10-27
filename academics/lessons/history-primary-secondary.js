// Original history lesson. Fictional Oakhaven events; each answer follows from one fact the source states:
// whether its maker was there (or it is an object from that time), which is what makes a source primary.
const EVENTS=['the 1948 snowstorm','the 1950 flood','the 1956 school opening','the 1962 bridge opening','the 1971 harvest fair'];
const PRIMARY=[e=>`a diary entry written on the day of ${e} by someone who was there`,e=>`a photograph taken during ${e}`,e=>`a letter written the next week by a person who saw ${e}`,e=>`a notice put up in the village during ${e}`,e=>`a drawing made during ${e} by someone watching it`,e=>`a story told in 2015 by a woman remembering ${e}, which she saw as a girl`];
const SECONDARY=[e=>`a school textbook about ${e}, written in 1995 by an author who was not there`,e=>`a website about ${e}, made last year from old records by people who were not there`,e=>`a painting of ${e}, made many years later by an artist who was not there`,e=>`a book about ${e} by a historian, born long after it, who read old letters`,e=>`a museum sign about ${e}, written in 2005 from other sources by staff who were not there`,e=>`a video about ${e}, made in 2020 by people who were not there`];
const RULE={t:'rule',cond:'Firsthand evidence?',yes:'primary',no:'secondary'};
export default {
id:"history-e-primary-secondary",
subject:"history",
level:3,
grade:3,
title:"Primary and secondary sources",
goal:"Sort sources by whether their maker was there, and choose the source that comes from the event itself.",
standard:"C3 D2.His.9-10.3-5: use different kinds of historical sources",
points:20,
skills:{"sort":"Primary or secondary","choose":"Pick the primary source","why":"Say what makes it primary"},
steps:[{"skill":"sort","say":"Historians learn about the past from sources: anything people made or left behind. A primary source is firsthand evidence: made at the time, like a notice or a photograph, or made by someone who was there telling what they saw.","pic":RULE},
{"skill":"sort","say":"A secondary source was made later by someone who was not there. It explains what happened using other sources. A textbook, a museum sign and a website are usually secondary sources.","pic":RULE,"check":{"prompt":"Oakhaven's harvest fair was in 1971. A photograph was taken at the fair on that day. Is the photograph a primary or secondary source?","answer":"primary","options":["primary","secondary"],"hint":"It was made at the time of the fair.","pic":{"t":"rule","cond":"Firsthand evidence?","yes":"primary","no":"secondary"}}},
{"skill":"why","say":"The question to ask is: does it give firsthand evidence of the event? A letter from someone who saw the flood is primary. A painting of the flood by an artist who was not there is secondary, even though it shows the flood.","pic":RULE},
{"skill":"why","say":"A memory can be primary even if it is told many years later. A woman who saw the 1950 flood as a girl and tells about it in 2015 was there, so her story is a primary source.","pic":RULE,"check":{"prompt":"In 1990 an artist who never saw the 1962 bridge opening painted a picture of it. Primary or secondary source?","answer":"secondary","options":["secondary","primary"],"hint":"The artist was not there, even though the painting shows the event.","pic":{"t":"rule","cond":"Firsthand evidence?","yes":"primary","no":"secondary"}}},
{"skill":"choose","say":"To learn what people saw on the day, look first for a primary source. A secondary source is still useful: it can explain and connect many primary sources.","pic":RULE},
{"skill":"choose","say":"Both kinds can have mistakes. A person who was there can misremember; a writer later can misread a letter. Knowing which kind you have tells you what questions to ask about it.","pic":RULE,"check":{"prompt":"Which is a primary source about Oakhaven's 1956 school opening: A, a museum poster made in 2012, or B, a class photograph taken on the opening day?","answer":"B","options":["B","A"],"hint":"Which one was made at the opening itself?","pic":RULE}}],
progression:{"requires":["history-e-timelines","history-e-reading-records"],"operations":1,"demand":"Decide from who made a source, and when, whether it is primary or secondary."},
items(add){
 EVENTS.forEach((e,ei)=>{
  PRIMARY.forEach(f=>add('sort',`${f(e)[0].toUpperCase()+f(e).slice(1)}. Is it a primary or secondary source?`,'primary',RULE,'Its maker was there, or it comes from that time.',['primary source']));
  SECONDARY.forEach(f=>add('sort',`${f(e)[0].toUpperCase()+f(e).slice(1)}. Is it a primary or secondary source?`,'secondary',RULE,'It was made later by someone who was not there.',['secondary source']));
  PRIMARY.forEach((f,i)=>add('why',`${f(e)[0].toUpperCase()+f(e).slice(1)}. Was its maker there, or is it from that time: yes or no?`,'yes',RULE,'The source itself says it was made at the event or by someone who saw it.'));
  SECONDARY.forEach((f,i)=>add('why',`${f(e)[0].toUpperCase()+f(e).slice(1)}. Was its maker there, or is it from that time: yes or no?`,'no',RULE,'It was made later, from other sources, by someone who was not there.'));
  PRIMARY.forEach((p,i)=>[0,1,2].forEach(k=>{const s=SECONDARY[(i+k+ei)%6],pFirst=(i+k+ei)%2===0,a=pFirst?p(e):s(e),b=pFirst?s(e):p(e);
   add('choose',`Which is a primary source about ${e}: A, ${a}, or B, ${b}?`,pFirst?'A':'B',RULE,'Choose the one made by someone who was there, or at the time.');}));
 });
}
};
