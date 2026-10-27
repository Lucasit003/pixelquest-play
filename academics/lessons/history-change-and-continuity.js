const names=['bench','noticeboard','book stall','planter'];
const state=n=>n===1?'present':n===0?'absent':'not recorded';
const record=(label,values)=>({label,values});
const picture=(records,set)=>({t:'villageRecords',records,...(set?{set}:{})});
const words=r=>r.label+': '+r.values.map((v,i)=>names[i]+' '+state(v)).join(', ');
export default {
 "id": "history-e-change-and-continuity",
 "subject": "history",
 "level": 3,
 "grade": 4,
 "title": "Change and continuity",
 "goal": "Compare two dated surveys, tell what changed and what stayed the same, and do not make up the date or reason for a change.",
 "standard": "Historical inquiry using fictional village records",
 "points": 20,
 "skills": {
  "compare": "Compare two surveys",
  "gap": "Spot a missing entry",
  "date": "Say when a change happened"
 },
 "steps": [
  {
   "skill": "compare",
   "say": "Compare two surveys of the same corner of the village. The bench is present in both, so it stayed the same. Staying the same is called continuity. The noticeboard was absent, then present: that is a change.",
   "pic": {"t":"theater","scene":"records","part":"survey"}
  },
  {
   "skill": "compare",
   "say": "Look at the same thing in both surveys. Seeing the bench in 1900 and in 1910 does not prove it was there every year in between.",
   "pic": {"t":"theater","scene":"records","part":"between"},
   "check": {
    "prompt": "In the practice surveys the noticeboard is absent in 1900 and present in 1910. Choose: appeared, disappeared, stayed the same, or cannot tell.",
    "answer": "appeared",
    "options": [
     "appeared",
     "disappeared",
     "stayed the same",
     "cannot tell"
    ],
    "hint": "Look at the same thing in both surveys. Seeing the bench in 1900 and in 1910 does not prove it was there every year in between.",
    "pic": {
     "t": "villageRecords",
     "records": [
      {
       "label": "Survey, 1900",
       "values": [
        1,
        0,
        1,
        0
       ]
      },
      {
       "label": "Survey, 1910",
       "values": [
        1,
        1,
        0,
        0
       ]
      }
     ]
    }
   }
  },
  {
   "skill": "gap",
   "say": "If one survey did not write a thing down, you cannot tell if it changed. A missing entry does not mean the thing was gone.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       -1,
       1,
       0,
       1
      ]
     },
     {
      "label": "Survey, 1910",
      "values": [
       1,
       1,
       1,
       0
      ]
     }
    ]
   }
  },
  {
   "skill": "gap",
   "say": "When one entry is missing, the right choice is cannot tell. A later survey cannot fill in what an earlier one left out.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       -1,
       1,
       0,
       1
      ]
     },
     {
      "label": "Survey, 1910",
      "values": [
       1,
       1,
       1,
       0
      ]
     }
    ]
   },
   "check": {
    "prompt": "One practice survey did not write the bench down, and the later survey shows it present. Can you tell if the bench changed: yes or no?",
    "answer": "no",
    "options": [
     "yes",
     "no"
    ],
    "hint": "When one entry is missing, the right choice is cannot tell. A later survey cannot fill in what an earlier one left out.",
    "pic": {
     "t": "villageRecords",
     "records": [
      {
       "label": "Survey, 1900",
       "values": [
        -1,
        1,
        0,
        1
       ]
      },
      {
       "label": "Survey, 1910",
       "values": [
        1,
        1,
        1,
        0
       ]
      }
     ]
    }
   }
  },
  {
   "skill": "date",
   "say": "Absent in 1900 and present in 1910 means it was put in some time after 1900 and by 1910. The surveys do not tell us the exact year, why it was put in, or who did it.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       0,
       1,
       1,
       0
      ]
     },
     {
      "label": "Survey, 1910",
      "values": [
       1,
       1,
       1,
       0
      ]
     }
    ]
   }
  },
  {
   "skill": "date",
   "say": "The two surveys only tell us the change happened somewhere between them. To find a closer date, we need another dated record.",
   "pic": {
    "t": "villageRecords",
    "records": [
     {
      "label": "Survey, 1900",
      "values": [
       0,
       1,
       1,
       0
      ]
     },
     {
      "label": "Survey, 1910",
      "values": [
       1,
       1,
       1,
       0
      ]
     }
    ]
   },
   "check": {
    "prompt": "The practice bench was absent in 1900 and present in 1910. Do we know the exact year it was put in: yes or no?",
    "answer": "no",
    "options": [
     "yes",
     "no"
    ],
    "hint": "The two surveys only tell us the change happened somewhere between them. To find a closer date, we need another dated record.",
    "pic": {
     "t": "villageRecords",
     "records": [
      {
       "label": "Survey, 1900",
       "values": [
        0,
        1,
        1,
        0
       ]
      },
      {
       "label": "Survey, 1910",
       "values": [
        1,
        1,
        1,
        0
       ]
      }
     ]
    }
   }
  }
 ],
 "progression": {
  "requires": [
   "history-e-reading-records"
  ],
  "operations": 2,
  "demand": "Compare two dated surveys, tell what changed and what stayed the same, and do not make up the date or reason for a change."
 },
items(add){
/* 26 Oct (histwords): prompts, choices, steps and whys rewritten in grade 4 words (ELEMCHECK_OCT26 P3). Same reasoning and keys: unchanged -> stayed the same, uncertain -> cannot tell. Old ids map through QUESTION_REVISIONS. */

/* Lead review 26 Oct: each pair of surveys is named ("set 12") and shown in the picture, whose alt text lists every entry, so the question is never pushed out of the quiz box. */
for(let code=0;code<81;code++){let n=code;const v=Array.from({length:4},()=>{const x=n%3;n=Math.floor(n/3);return x-1;});
 const a=record('Survey, 1900',[v[0],v[2],1,0]),b=record('Survey, 1910',[v[1],v[3],0,1]),pic=picture([a,b],code+1),given='Fictional Oakhaven surveys, set '+(code+1)+', in the picture. ';
 for(let i=0;i<2;i++){const x=a.values[i],y=b.values[i],answer=x===-1||y===-1?'cannot tell':x===y?'stayed the same':x===0?'appeared':'disappeared';add('compare',given+'What happened to the '+names[i]+' from 1900 to 1910? Choose: appeared, disappeared, stayed the same, or cannot tell.',answer,pic,'Look at the '+names[i]+' in both surveys. If either one did not record it, you cannot tell.');}
 add('gap',given+'Do both surveys say if the bench was present or absent, so you can compare them: yes or no?',v[0]===-1||v[1]===-1?'no':'yes',pic,'You can compare only when both surveys say present or absent. Even if they match, the bench could have changed in the years between.');
 if(v[0]===0&&v[1]===1)add('date',given+'When was the bench put in: by 1900, after 1900 and by 1910, or exactly 1905?','after 1900 and by 1910',pic,'It was absent in 1900 and present in 1910, so it was put in after 1900 and by 1910. The surveys do not give the exact year.');
}
}
};
