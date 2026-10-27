const names=['bench','noticeboard','book stall','planter'];
const state=n=>n===1?'present':n===0?'absent':'not recorded';
const record=(label,values)=>({label,values});
const picture=(records,set)=>({t:'villageRecords',records,...(set?{set}:{})});
const words=r=>r.label+': '+r.values.map((v,i)=>names[i]+' '+state(v)).join(', ');
/* 26 Oct (histwords): prompts, choices, steps and whys rewritten in grade 4-5 words (ELEMCHECK_OCT26 P3). Same reasoning and
   keys: agree present -> agree it was there, agree absent -> agree it was not there, conflict -> disagree, insufficient -> not
   enough to tell, same-time independent record -> someone else who looked that noon. Old ids map through QUESTION_REVISIONS. */
const SEEN=[record('A looked at noon',[1,0,1,0]),record('B copied A',[1,0,1,0]),record('C looked at noon',[0,0,1,0])];
const GAP=[record('A looked at noon',[-1,0,1,0]),record('B copied A',[-1,0,1,0]),record('C looked at noon',[1,0,1,0])];
export default {
 "id": "history-e-weighing-evidence",
 "subject": "history",
 "level": 3,
 "grade": 5,
 "title": "Weighing evidence",
 "goal": "Find out who really looked, compare reports from the same time, and say how sure we can be.",
 "standard": "Historical inquiry using fictional village records",
 "points": 20,
 "skills": {
  "independent": "Find who really looked",
  "judge": "Agree or disagree",
  "followup": "Pick the next report"
 },
 "steps": [
  {
   "skill": "independent",
   "say": "These made-up reports are about the same square at noon on the same day. A and C each looked for themselves. B only copied A, so B is not a new look.",
   "pic": picture(SEEN)
  },
  {
   "skill": "independent",
   "say": "Find out where each report got its facts. Count the people who looked, not the pages.",
   "pic": picture(SEEN),
   "check": {
    "prompt": "In the practice reports, A and C each looked for themselves, and B copied A. How many people really looked?",
    "answer": 2,
    "options": [1, 2, 3],
    "hint": "Find out where each report got its facts. Count the people who looked, not the pages.",
    "pic": picture(SEEN)
   }
  },
  {
   "skill": "judge",
   "say": "Now check if the people who looked agree. The choices are: agree it was there, agree it was not there, disagree, or not enough to tell. To agree, at least two people who looked must have written it down. A has the bench present and C has it absent, so they disagree. Two copies of A would not settle it.",
   "pic": picture(SEEN)
  },
  {
   "skill": "judge",
   "say": "When people agree, we can be more sure, but they could still be wrong. When they disagree, check each report again: who wrote it, where they stood, and what they meant.",
   "pic": picture(SEEN),
   "check": {"prompt":"In the practice reports A has a book stall, B copied A, and C, who also looked, has a book stall too. Choose: disagree or agree it was there.","answer":"agree it was there","options":["agree it was there","disagree"],"hint":"Compare only A and C; B is a copy of A.","pic":picture(SEEN)}
  },
  {
   "skill": "followup",
   "say": "When the people who looked disagree, or one left something out, find someone else who looked at the same place at the same time. A picture from years later shows a later time, and another copy adds nothing new.",
   "pic": picture(GAP)
  },
  {
   "skill": "followup",
   "say": "Pick a next report that answers the question you still have. Check when it was made, who made it, and where its facts came from.",
   "pic": picture(GAP),
   "check": {
    "prompt": "To fill the gap in the practice reports, choose: someone else who looked that noon, or a copy of A.",
    "answer": "someone else who looked that noon",
    "options": ["someone else who looked that noon", "a copy of A"],
    "hint": "Pick a next report that answers the question you still have. Check when it was made, who made it, and where its facts came from.",
    "pic": picture(GAP)
   }
  }
 ],
 "progression": {
  "requires": [
   "history-e-change-and-continuity"
  ],
  "operations": 3,
  "demand": "Find out who really looked, compare reports from the same time, and say how sure we can be."
 },
items(add){
/* Lead review 26 Oct: the record lists made the prompt overflow the quiz box, hiding the question. Each record set is now named
   ("set 12") and shown in the picture (its alt text lists every entry); the prompt asks the question first. */
for(let code=0;code<81;code++)for(const copied of [true,false]){let n=code;const v=Array.from({length:4},()=>{const x=n%3;n=Math.floor(n/3);return x-1;});
 const set=code*2+(copied?1:2),a=record('A looked at noon',[v[0],v[2],1,0]),b=record(copied?'B copied A':'B looked at noon',copied?[...a.values]:[v[1],v[3],1,0]),c=record('C looked at noon',[v[1],v[3],0,1]),pic=picture([a,b,c],set),given='Fictional Oakhaven reports, set '+set+', in the picture. '+(copied?'B copied A. ':'All three looked. ');
 add('independent',given+'How many people really looked at the square?',copied?2:3,pic,'A copy is not a new look. Count the people who looked for themselves, not the pages.');
 for(let i=0;i<2;i++){const entries=(copied?[a,c]:[a,b,c]).map(r=>r.values[i]),known=entries.filter(x=>x!==-1),answer=known.includes(0)&&known.includes(1)?'disagree':known.length<2?'not enough to tell':known[0]===1?'agree it was there':'agree it was not there';add('judge',given+'About the '+names[i]+', choose: agree it was there, agree it was not there, disagree, or not enough to tell.',answer,pic,'Count only the people who looked, not copies. If one has the '+names[i]+' present and another has it absent, they disagree. To agree, at least two must have written it down; if fewer did, there is not enough to tell.');}
 if(v[0]!==v[1]||v[0]===-1)add('followup',given+'To learn more about the bench, choose: someone else who looked that noon, a copy of A, or a 1950 picture.','someone else who looked that noon',pic,'A copy adds nothing new, and a 1950 picture shows a later time. Look for someone else who saw the same place at the same time, then ask how well they could see.');
}
}
};
