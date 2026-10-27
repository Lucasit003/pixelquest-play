const subjects=[['child','children','near the gates','near the gate'],['person','people','beside the carts','beside the cart'],['guard','guards','by the doors','by the door'],['farmer','farmers','near the stalls','near the stall'],['helper','helpers','beside the shelves','beside the shelf'],['baker','bakers','by the windows','by the window']];
const actions=[['carries','carry','a basket'],['checks','check','a map'],['opens','open','a parcel']];
export default {
 "id": "language-e-subject-agreement",
 "subject": "language",
 "level": 3,
 "grade": 3,
 "title": "Find the subject; match the verb",
 "goal": "Find the subject noun across an intervening phrase and match a present-tense verb to its number.",
 "standard": "Language and reading reasoning",
 "points": 20,
 "skills": {
  "subject": "Find the subject noun",
  "number": "Recognize subject number",
  "agree": "Match the verb"
 },
 "steps": [
  {
   "skill": "subject",
   "say": "The subject tells who or what the sentence is about. In this sentence, the gardener waters. The phrase beside the trees adds information about the gardener; trees does not control the verb.",
   "pic": {
    "t": "passages",
    "title": "Who does the action?",
    "texts": [
     "The gardener beside the trees waters a flower."
    ]
   }
  },
  {
   "skill": "subject",
   "say": "Find the noun doing the action. Do not simply choose the noun closest to the verb.",
   "pic": {
    "t": "passages",
    "title": "Who does the action?",
    "texts": [
     "The gardener beside the trees waters a flower."
    ]
   },
   "check": {
    "prompt": "In the practice sentence, which noun names who waters: gardener or trees?",
    "answer": "gardener",
    "options": [
     "gardener",
     "trees"
    ],
    "hint": "Find the noun doing the action. Do not simply choose the noun closest to the verb.",
    "pic": {
     "t": "passages",
     "title": "Who does the action?",
     "texts": [
      "The gardener beside the trees waters a flower."
     ]
    }
   }
  },
  {
   "skill": "number",
   "say": "A singular subject names one; a plural subject names more than one. Children is plural even though it does not end in s. The child near the gates is singular: gates belongs to the added phrase.",
   "pic": {
    "t": "passages",
    "title": "One or more than one?",
    "texts": [
     "The child near the gates waits.",
     "The children near the gate wait."
    ]
   }
  },
  {
   "skill": "number",
   "say": "Use the subject noun to decide number. A nearby plural noun does not make a singular subject plural.",
   "pic": {
    "t": "passages",
    "title": "One or more than one?",
    "texts": [
     "The child near the gates waits.",
     "The children near the gate wait."
    ]
   },
   "check": {"prompt":"In 'The dog beside the cats barks', is the subject noun dog singular or plural?","answer":"singular","options":["singular","plural"],"hint":"The dog is one animal. The nearby plural noun cats does not change it.","pic":{"t":"passages","title":"Find the subject","texts":["The dog beside the cats barks."]}}
  },
  {
   "skill": "agree",
   "say": "In these third-person present-tense sentences, a singular subject takes waits, carries, or checks. A plural subject takes wait, carry, or check. Change the verb to match the subject, not the nearby noun.",
   "pic": {
    "t": "passages",
    "title": "Match the subject",
    "texts": [
     "The gardener beside the trees waits.",
     "The gardeners beside the tree wait."
    ]
   }
  },
  {
   "skill": "agree",
   "say": "Identify the subject first, decide one or more than one, then choose the matching verb.",
   "pic": {
    "t": "passages",
    "title": "Match the subject",
    "texts": [
     "The gardener beside the trees waits.",
     "The gardeners beside the tree wait."
    ]
   },
   "check": {
    "prompt": "Complete the practice sentence: The gardeners beside the tree ___ . Choose waits or wait.",
    "answer": "wait",
    "options": [
     "waits",
     "wait"
    ],
    "hint": "Identify the subject first, decide one or more than one, then choose the matching verb.",
    "pic": {
     "t": "passages",
     "title": "Choose the matching verb",
     "texts": ["The gardeners beside the tree ___ ."]
    }
   }
  }
 ],
 "progression": {
  "requires": [
   "language-e-parts-of-speech"
  ],
  "operations": 1,
  "demand": "Find the subject noun across an intervening phrase and match a present-tense verb to its number."
 },
items(add){

for(const [one,many,singularPhrase,pluralPhrase] of subjects)for(const plural of [false,true])for(const [singularVerb,pluralVerb,object] of actions){
 const noun=plural?many:one,phrase=plural?pluralPhrase:singularPhrase,verb=plural?pluralVerb:singularVerb,sentence='The '+noun+' '+phrase+' '+verb+' '+object+'.',pic={t:'passages',title:'Find the subject',texts:[sentence]},given='Read: "'+sentence+'" ';
 add('subject',given+'Which noun is the subject noun?',noun,pic,'The '+noun+' '+verb+'; '+phrase+' adds information about the subject.', ['the '+noun]);
 add('number',given+'Is the subject noun singular or plural?',plural?'plural':'singular',pic,'The subject is '+noun+', which names '+(plural?'more than one.':'one.')+' The nearby noun is part of an added phrase.');
 const gap='The '+noun+' '+phrase+' ___ '+object+'.';add('agree','Complete in the present tense: "'+gap+'" Choose '+singularVerb+' or '+pluralVerb+'.',verb,{t:'passages',title:'Choose the matching verb',texts:[gap]},'The subject '+noun+' is '+(plural?'plural':'singular')+', so use '+verb+'.');
}
}
};
