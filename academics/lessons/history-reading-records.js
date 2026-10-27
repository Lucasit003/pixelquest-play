const names=['bench','noticeboard','book stall','planter'];
const state=n=>n===1?'present':n===0?'absent':'not recorded';
const record=(label,values)=>({label,values});
const picture=records=>({t:'villageRecords',records});
const words=r=>r.label+': '+r.values.map((v,i)=>names[i]+' '+state(v)).join(', ');
export default {
 "id": "history-e-reading-records",
 "subject": "history",
 "level": 3,
 "grade": 3,
 "title": "Read a village source",
 "goal": "Tell what a record says, what it leaves out, and what it cannot explain.",
 "standard": "Historical inquiry using fictional village records",
 "points": 20,
 "skills": {
  "read": "Read an entry",
  "missing": "Spot a gap",
  "limits": "Know what it cannot tell"
 },
 "steps": [
  {
   "skill": "read",
   "say": "These fictional Oakhaven records were made for this game. The picture is drawn from a survey; it is not a photograph. A drawn object means present; an empty box with a dash means absent; ? means not recorded.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       1,
       0,
       1,
       -1
      ]
     }
    ]
   }
  },
  {
   "skill": "read",
   "say": "Read what the survey says before you decide. Present means it was there; absent means it was not.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       1,
       0,
       1,
       -1
      ]
     }
    ]
   },
   "check": {
    "prompt": "The practice survey records the bench present and noticeboard absent. Which is recorded present?",
    "answer": "bench",
    "options": [
     "bench",
     "noticeboard"
    ],
    "hint": "Read what the survey says before you decide. Present means it was there; absent means it was not.",
    "pic": {
     "t": "villageRecords",
     "records": [
      {
       "label": "Survey, 1900",
       "values": [
        1,
        0,
        1,
        -1
       ]
      }
     ]
    }
   }
  },
  {
   "skill": "missing",
   "say": "A source can leave things out. Not recorded does not mean absent. This survey tells us about the bench and noticeboard, but says nothing about the planter.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       1,
       0,
       1,
       -1
      ]
     }
    ]
   }
  },
  {
   "skill": "missing",
   "say": "A question mark marks missing evidence. Look for another source to learn more.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       1,
       0,
       1,
       -1
      ]
     }
    ]
   },
   "check": {
    "prompt": "The practice survey says nothing about the planter. Is it known or unknown if the planter was there?",
    "answer": "unknown",
    "options": [
     "known",
     "unknown"
    ],
    "hint": "A question mark marks missing evidence. Look for another source to learn more.",
    "pic": {
     "t": "villageRecords",
     "records": [
      {
       "label": "Survey, 1900",
       "values": [
        1,
        0,
        1,
        -1
       ]
      }
     ]
    }
   }
  },
  {
   "skill": "limits",
   "say": "A record of an object does not tell us why it was there. A bench in a survey cannot prove that everyone enjoyed sitting there.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       1,
       0,
       1,
       -1
      ]
     }
    ]
   }
  },
  {
   "skill": "limits",
   "say": "Keep apart what the survey says and the reasons it never gives. A record can still help you, even if it does not answer every question.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       1,
       0,
       1,
       -1
      ]
     }
    ]
   },
   "check": {
    "prompt": "A practice survey shows a bench. Does that alone prove that everyone liked it: yes or no?",
    "answer": "no",
    "options": [
     "yes",
     "no"
    ],
    "hint": "Keep apart what the survey says and the reasons it never gives. A record can still help you, even if it does not answer every question.",
    "pic": {
     "t": "villageRecords",
     "records": [
      {
       "label": "Survey, 1900",
       "values": [
        1,
        0,
        1,
        -1
       ]
      }
     ]
    }
   }
  }
 ],
 "progression": {
  "requires": [
   "history-e-timelines"
  ],
  "operations": 1,
  "demand": "Tell what a record says, what it leaves out, and what it cannot explain."
 },
items(add){
/* 26 Oct (histwords): the missing and limits prompts, the whys and the steps rewritten in grade 3 words; same answers. Old ids map through QUESTION_REVISIONS. */

for(let code=0;code<81;code++){let n=code;const values=names.map(()=>{const v=n%3;n=Math.floor(n/3);return v-1;}),r=record('Survey, 1900',values),pic=picture([r]),given='Fictional Oakhaven '+words(r)+'. ';
 const i=code%4;add('read',given+'What does it record about the '+names[i]+'? Answer present, absent, or not recorded.',state(values[i]),pic,'Find the '+names[i]+' in the survey. Not recorded means the survey left it out, not that it was absent.');
 add('missing',given+'Does the survey say if the '+names[(i+1)%4]+' was present or absent: yes or no?',values[(i+1)%4]===-1?'no':'yes',pic,'Present and absent are both written down. Not recorded means the survey says nothing about it.');
 if(values.includes(1)){const j=values.indexOf(1);add('limits',given+'Does this survey by itself tell you why the '+names[j]+' was there: yes or no?','no',pic,'The survey shows that the '+names[j]+' was there, not why. You would need another record about why.');}
}
}
};
