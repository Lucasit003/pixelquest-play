/* Original course unit. Review record: docs/review/lessons/high-completion/ap-csp-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "5.1",
  "name": "Beneficial and Harmful Effects",
  "skill": "s1",
  "boardTitle": "Trace the impact",
  "teach": [
   "A computing innovation uses computation as a central part of its function. To evaluate its impact, identify the intended purpose, the affected people and the mechanism connecting use to an outcome. In a hypothetical navigation app, routing saves drivers time but sends more traffic past residents’ homes. The same routing effect can benefit drivers and burden residents; a benefit for one group does not establish a benefit for everyone.",
   "Intended purpose and observed effects are different questions. Imagine a shared drawing app built for artists that teachers later use for remote geometry lessons. That new use is an unintended benefit. A separate feature that exposes private drafts could cause unintended harm. Neither the good intention of the designer nor the mere presence of a computer establishes whether a particular consequence is beneficial.",
   "Effects can change as adoption grows. A shortcut that works for a few drivers may become congested when thousands receive it. Responsible development considers affected groups, tests plausible misuse and monitors outcomes after release. No designer can anticipate every future use. Claims about a real innovation need evidence; the hypothetical examples here illustrate mechanisms, not measured outcomes of a named product."
  ],
  "eqs": [
   "Faster routes → driver benefit; extra neighborhood traffic → resident cost",
   "Drawing app → later remote geometry use → unintended educational benefit",
   "Few users → usable shortcut; many users → possible congestion"
  ],
  "boards": [
   [
    "Identify the purpose and the affected people",
    "Trace the mechanism of each effect",
    "Benefits and costs can coexist"
   ],
   [
    "Intended use differs from later use",
    "Unexpected effects can help or harm",
    "Good intentions do not settle outcomes"
   ],
   [
    "Scale can change an effect",
    "Consult affected groups and monitor use",
    "Future uses cannot all be predicted"
   ]
  ],
  "questions": [
   [
    "A routing app reduces drivers’ travel times but increases noise on residential streets. Which conclusion follows?",
    "The routing effect benefits some people while imposing costs on others",
    "Every resident must benefit because drivers save time",
    "The app has no social impact because its output is a route",
    "Travel time and neighborhood noise affect different stakeholders. The reported benefit does not erase the reported cost."
   ],
   [
    "A captioning tool helps a student follow a lecture, but its transcript retains remarks the student wanted private. What does this illustrate?",
    "One person can experience both a benefit and a harm",
    "A benefit makes the privacy concern impossible",
    "Privacy concerns prove the captions cannot be useful",
    "Access and privacy are different consequences. The same person can value the captions while objecting to storage of remarks."
   ],
   [
    "A game chat was designed for players. Neighbors later use it to coordinate storm cleanup, a use the designers did not anticipate. How is that later use classified?",
    "An unintended beneficial use",
    "An intended gaming feature merely because it is useful",
    "Proof that unintended consequences are always harmful",
    "The stem explicitly says the cleanup use was unanticipated and helpful. Intended describes the original purpose, not whether an outcome is good."
   ],
   [
    "A public fitness leaderboard was intended to motivate runners. Its detailed location records let strangers infer runners’ home addresses. Which unintended impact is supported?",
    "A privacy risk from revealing location patterns",
    "A guaranteed improvement in every runner’s health",
    "A change that makes locations impossible to infer",
    "The stated records enable an inference about home locations. Motivation does not prevent that privacy risk or prove health outcomes."
   ],
   [
    "A recommendation system is designed to keep users watching. A researcher wants to know whether it also narrows the range of views users encounter. What is needed?",
    "Evidence about exposure to different views and a suitable comparison",
    "Only the developers’ statement that they intended to entertain",
    "Only the fact that recommendations run on computers",
    "The claim concerns observed exposure, so it requires relevant observations and comparison. Intent and computer use alone cannot establish the effect."
   ],
   [
    "A scheduling tool reduces a clinic’s wait times in a pilot. Which statement stays within that evidence?",
    "The pilot provides evidence of shorter waits in that setting",
    "The tool must shorten waits in every clinic worldwide",
    "No patient could experience any disadvantage from the tool",
    "A result in one pilot supports a claim about that setting. It does not establish universal performance or eliminate other effects."
   ],
   [
    "A translation program allows two researchers who lack a shared language to exchange early ideas. Which benefit is directly illustrated?",
    "Computing can expand collaboration across language barriers",
    "Translation programs never make errors",
    "Computing removes the need to evaluate scientific claims",
    "The scenario demonstrates communication access. It does not guarantee perfect translation or correct research conclusions."
   ],
   [
    "A small sharing app becomes popular. A private joke is copied by thousands of users beyond its original audience. What explains the changed impact?",
    "Rapid distribution and scale amplify an effect beyond the original context",
    "Copies always remain under the original poster’s control",
    "A larger audience automatically preserves the original meaning",
    "Copying allows information to reach new audiences at scale. The original audience and purpose no longer bound its effect."
   ],
   [
    "A city introduces online permit applications but keeps staffed counters for people unable to use the site. Which concern does that choice directly address?",
    "Unequal ability to access the new digital service",
    "The physical weight of the city’s servers",
    "The assumption that every applicant already has reliable Internet",
    "Keeping another route addresses access barriers. It does not assume those barriers have disappeared."
   ],
   [
    "A warehouse automation system raises output while eliminating some tasks workers previously performed. Which evaluation is best supported?",
    "Consider both productivity gains and effects on the affected workers",
    "Output gains prove that every worker benefits equally",
    "Eliminating a task proves that total employment everywhere must fall",
    "The given facts identify gains and affected tasks. They do not settle every worker’s outcome or economy-wide employment."
   ],
   [
    "A designer says, “We meant well, so our app cannot cause harm.” What is the flaw?",
    "Good intentions do not rule out harmful effects or misuse",
    "Only intentionally harmful designs can have consequences",
    "An app’s consequences are determined solely by its name",
    "Purpose is distinct from consequences. Harm can arise through unanticipated uses, design limitations or interactions with a broader setting."
   ],
   [
    "An app’s location feature can help locate a lost device and can expose a user’s movements if misused. Which evaluation fits?",
    "Weigh the recovery benefit against the privacy risk and safeguards",
    "Any recovery benefit proves unrestricted tracking is harmless",
    "Any privacy risk proves location can never help a user",
    "Both mechanisms are stated. A defensible evaluation considers both effects and how access, retention and permissions shape them."
   ],
   [
    "A team builds a public reporting tool. Which action best helps it identify unintended harms before release?",
    "Consult people who could be affected and test plausible misuse scenarios",
    "Ask only whether the code executes without syntax errors",
    "Assume a user agreement prevents every harmful use",
    "Technical correctness alone does not examine social outcomes. Affected people and misuse scenarios can reveal risks, although they cannot reveal every future effect."
   ],
   [
    "A study shows an app is associated with an outcome but does not rule out other causes. Which claim is justified?",
    "An association is evidence to investigate, not by itself proof of causation",
    "The app is proven to be the only cause",
    "The association establishes that no further study could help",
    "Other factors may explain or contribute to the pattern. The evidence supports investigation without the stronger causal conclusion."
   ],
   [
    "An image-analysis method developed for astronomy is later adapted to inspect manufactured parts, as an unplanned use. What is illustrated?",
    "A computing innovation can contribute to progress in another field",
    "An innovation can be useful only in its original field",
    "The new use retroactively becomes the original intended purpose",
    "Methods can be adapted across fields. The explicitly unplanned later use remains distinct from the initial purpose."
   ],
   [
    "After release, users discover a harmful use that the design team had not anticipated. Which response best fits responsible development?",
    "Investigate the harm, revise safeguards and monitor the results",
    "Dismiss the harm because it was not in the original plan",
    "Conclude that monitoring is unnecessary once code is released",
    "New evidence should inform revisions. Unanticipated use is a reason to evaluate and respond, not evidence that the harm can be ignored."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "One effect, different stakeholders",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      240,
      208
     ],
     "P1": [
      400,
      208
     ],
     "P2": [
      400,
      150
     ],
     "P3": [
      240,
      150
     ],
     "P4": [
      84,
      111
     ],
     "P5": [
      289,
      111
     ],
     "P6": [
      289,
      53
     ],
     "P7": [
      84,
      53
     ],
     "P8": [
      351,
      111
     ],
     "P9": [
      556,
      111
     ],
     "P10": [
      556,
      53
     ],
     "P11": [
      351,
      53
     ],
     "P12": [
      283,
      146
     ],
     "P13": [
      191,
      115
     ],
     "P14": [
      357,
      146
     ],
     "P15": [
      449,
      115
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P12P13",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     },
     {
      "v": "P4P5P6P7",
      "col": 1
     },
     {
      "v": "P8P9P10P11",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       172
      ],
      "text": "New route",
      "col": 0
     },
     {
      "at": [
       186,
       86
      ],
      "text": "Drivers: less time",
      "col": 1
     },
     {
      "at": [
       186,
       64
      ],
      "text": "A benefit",
      "col": 1
     },
     {
      "at": [
       453,
       86
      ],
      "text": "Residents: more noise",
      "col": 2
     },
     {
      "at": [
       453,
       64
      ],
      "text": "A cost",
      "col": 2
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Purpose and later consequences",
    "head": "Hypothetical event",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "Artists draw together",
      "Intended use of the drawing app"
     ],
     [
      "Teachers use it for geometry",
      "Unintended benefit"
     ],
     [
      "Private drafts are exposed",
      "Possible unintended harm"
     ]
    ]
   },
   {
    "t": "passages",
    "title": "Scale can change an outcome",
    "texts": [
     "A shortcut saves time when a few drivers use it.",
     "Thousands receiving the same route may create congestion.",
     "Monitor actual outcomes as use changes."
    ],
    "small": true
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A routing app reduces drivers’ travel times but increases noise on residential streets. Which conclusion follows?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A captioning tool helps a student follow a lecture, but its transcript retains remarks the student wanted private. What does this illustrate?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A game chat was designed for players. Neighbors later use it to coordinate storm cleanup, a use the designers did not anticipate. How is that later use classified?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A public fitness leaderboard was intended to motivate runners. Its detailed location records let strangers infer runners’ home addresses. Which unintended impact is supported?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A recommendation system is designed to keep users watching. A researcher wants to know whether it also narrows the range of views users encounter. What is needed?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A scheduling tool reduces a clinic’s wait times in a pilot. Which statement stays within that evidence?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A translation program allows two researchers who lack a shared language to exchange early ideas. Which benefit is directly illustrated?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A small sharing app becomes popular. A private joke is copied by thousands of users beyond its original audience. What explains the changed impact?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A city introduces online permit applications but keeps staffed counters for people unable to use the site. Which concern does that choice directly address?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A warehouse automation system raises output while eliminating some tasks workers previously performed. Which evaluation is best supported?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A designer says, “We meant well, so our app cannot cause harm.” What is the flaw?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An app’s location feature can help locate a lost device and can expose a user’s movements if misused. Which evaluation fits?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A team builds a public reporting tool. Which action best helps it identify unintended harms before release?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A study shows an app is associated with an outcome but does not rule out other causes. Which claim is justified?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An image-analysis method developed for astronomy is later adapted to inspect manufactured parts, as an unplanned use. What is illustrated?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "After release, users discover a harmful use that the design team had not anticipated. Which response best fits responsible development?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.2",
  "name": "Digital Divide",
  "skill": "s2",
  "boardTitle": "Access is more than a signal",
  "teach": [
   "The digital divide concerns unequal access to computing devices and the Internet across people and groups. A connection may be unavailable, unaffordable, unreliable or unsuitable for the task. A family sharing one phone may technically have Internet access but struggle with simultaneous video classes. Access differences occur within a community as well as between countries; a national average can hide local gaps.",
   "Match a proposed remedy to the barrier. Infrastructure can extend service to an unserved area; affordability assistance can help when a service exists but costs too much; device lending can address lack of suitable equipment. Accessibility and relevant digital skills also affect meaningful use. None of these measures automatically solves every other barrier. Consider actual needs without assuming that everyone in a demographic group has the same experience.",
   "Evaluate changes with relevant evidence. In a hypothetical survey, 60 of 100 households have reliable service before a program and 75 of 100 afterward: access rises by 15 percentage points. That observation alone does not prove the program caused the entire increase. Break results down by location and need, and check who the survey missed. An online-only survey can exclude people whose access is weakest."
  ],
  "eqs": [
   "One phone + two simultaneous classes → a device-sharing barrier",
   "Service exists but is unaffordable → an affordability intervention",
   "75% − 60% = 15 percentage points; causal attribution needs more evidence"
  ],
  "boards": [
   [
    "Availability, affordability and suitable devices matter",
    "Access can differ within a community",
    "Averages may hide unmet needs"
   ],
   [
    "Match the intervention to the barrier",
    "Check accessibility and skills for meaningful use",
    "One remedy rarely removes every barrier"
   ],
   [
    "Measure reliable access, not just advertised coverage",
    "Check who the survey reaches",
    "Separate percentage points from causal claims"
   ]
  ],
  "questions": [
   [
    "A rural settlement has no provider offering Internet service. Which measure most directly addresses the stated barrier?",
    "Extend network infrastructure and service to the settlement",
    "Change the color of existing users’ screens",
    "Provide a password manager without providing connectivity",
    "The stated barrier is service availability. Security software can be useful but cannot supply a missing network connection."
   ],
   [
    "Service is available throughout a neighborhood, but some households cannot afford its monthly cost. Which intervention directly targets that barrier?",
    "Financial assistance for affordable service",
    "A faster processor only for households already connected",
    "A rule requiring all forms to be submitted online",
    "The obstacle is cost, so affordability support addresses it directly. More demanding online requirements could make exclusion worse."
   ],
   [
    "Two students share one phone and must attend different video classes at the same time. What barrier is illustrated?",
    "Insufficient access to suitable devices for simultaneous use",
    "Proof that neither student has any Internet connection",
    "A lack of computation in the video service",
    "Having some connectivity does not ensure enough suitable equipment. The scenario identifies a shared-device constraint, not total absence of Internet."
   ],
   [
    "A town reports average broadband availability of 95%, while one outlying area remains unserved. What is the best interpretation?",
    "The high average can coexist with a serious local access gap",
    "An average above 90% proves every area is served",
    "The outlying area must have the same availability as the average",
    "An average summarizes the whole population. It does not require each subgroup or location to have that same value."
   ],
   [
    "A job application site requires large video uploads from applicants with strict data limits. Which change directly reduces that access burden?",
    "Offer a lower-bandwidth application path that captures the needed information",
    "Require even larger video files",
    "Assume a visible signal means unlimited affordable data",
    "Data limits affect usable access. A lower-bandwidth path can reduce that specific burden without assuming that connectivity is unlimited."
   ],
   [
    "A library lends laptops but has not changed Internet service in users’ homes. Which claim is warranted?",
    "The program addresses equipment access but may leave connectivity barriers",
    "Every borrower now necessarily has reliable home broadband",
    "Device lending cannot help anyone under any conditions",
    "A suitable device can help, but lending it does not by itself create affordable, reliable home service."
   ],
   [
    "A public website cannot be operated using a screen reader. A student has broadband and a computer but cannot use it. What additional issue is shown?",
    "An accessibility barrier to meaningful use",
    "Proof that the student has no physical device",
    "Evidence that faster download speeds alone will fix the interface",
    "Device ownership and connectivity do not guarantee an accessible interface. The stated interface problem needs an accessibility response."
   ],
   [
    "A training center teaches new users how to complete online forms. Which barrier does this intervention most directly target?",
    "Lack of relevant digital skills",
    "Absence of regional network cables by itself",
    "The price of every device on the market",
    "Instruction can develop the skills needed to use a service. It does not by itself build a network or change all device prices."
   ],
   [
    "A school surveys home Internet access only through a form that must be completed online. What is a likely limitation?",
    "People with the weakest access may be underrepresented",
    "Every household without access is guaranteed to answer first",
    "The survey automatically becomes a random sample of all households",
    "Requiring access to answer can systematically miss the very people being studied. The sampling method must account for them."
   ],
   [
    "A fictional district measures reliable access at 60% before a project and 75% afterward. What is the increase in percentage points?",
    "15 percentage points",
    "25 percentage points",
    "75 percentage points",
    "Subtract the percentages: 75 minus 60 equals 15 percentage points. The relative percentage increase is 25%, which is a different measure."
   ],
   [
    "Reliable access rises after a subsidy begins, but other network upgrades occurred at the same time. What conclusion fits?",
    "The increase is observed, but the subsidy’s separate causal effect is not established",
    "The timing proves the subsidy caused the entire increase",
    "The network upgrades cannot have influenced access",
    "Concurrent changes are possible explanations. Timing alone does not isolate the effect of one intervention."
   ],
   [
    "Which comparison most directly measures an access gap within a city?",
    "Reliable home Internet availability across neighborhoods",
    "The number of letters in neighborhood names",
    "The brand colors of two websites",
    "Reliable availability by neighborhood describes access differences. Names and website colors do not measure that gap."
   ],
   [
    "A student uses a public hotspot that closes before the student can finish evening assignments. What limitation remains?",
    "Access is restricted by time and place",
    "Public access guarantees unrestricted home access",
    "The presence of any hotspot eliminates the digital divide",
    "A hotspot can help while its hours and location still constrain use. Some access does not mean access whenever and wherever needed."
   ],
   [
    "A government, a nonprofit and residents cooperate to establish a community network. What does this illustrate?",
    "Actions by institutions and individuals can affect the digital divide",
    "Only a single type of organization can influence access",
    "Access differences can never change",
    "Infrastructure and service decisions by multiple actors can improve access. The digital divide is not fixed or controlled by only one type of actor."
   ],
   [
    "An online-only public hearing excludes residents who lack usable Internet service. Which broader concern follows directly?",
    "Unequal access can limit participation and influence",
    "Every excluded resident must oppose the same policy",
    "Internet access determines each person’s political beliefs",
    "The barrier affects the ability to participate. It does not establish what excluded residents believe or how they would vote."
   ],
   [
    "A planner has only a country’s average device-ownership rate. Before choosing where to lend devices, what additional evidence is most useful?",
    "Local data about who lacks suitable devices and what tasks they need to perform",
    "An assumption that all residents have the national average experience",
    "Only the country’s most popular wallpaper design",
    "Local needs and task requirements identify where equipment support may help. A national mean cannot reveal every household’s circumstances."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Some access may still be insufficient",
    "head": "Situation",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "One phone, two concurrent classes",
      "Device sharing limits participation"
     ],
     [
      "Service too unreliable for video",
      "Connection quality limits use"
     ],
     [
      "Public hotspot closes early",
      "Time and location limit access"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Match the remedy to the barrier",
    "head": "Barrier",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "No available service",
      "Extend infrastructure and service"
     ],
     [
      "Unaffordable service",
      "Address ongoing cost"
     ],
     [
      "No suitable device",
      "Provide suitable equipment"
     ],
     [
      "Inaccessible interface",
      "Improve accessibility"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Describe the measured change",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      146,
      144
     ],
     "P1": [
      248,
      144
     ],
     "P2": [
      248,
      60
     ],
     "P3": [
      146,
      60
     ],
     "P4": [
      369,
      165
     ],
     "P5": [
      471,
      165
     ],
     "P6": [
      471,
      60
     ],
     "P7": [
      369,
      60
     ],
     "P8": [
      110,
      60
     ],
     "P9": [
      531,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       213
      ],
      "text": "Hypothetical reliable-access survey",
      "col": 0
     },
     {
      "at": [
       197,
       36
      ],
      "text": "Before: 60%",
      "col": 1
     },
     {
      "at": [
       420,
       36
      ],
      "text": "After: 75%",
      "col": 2
     },
     {
      "at": [
       320,
       191
      ],
      "text": "Increase: 15 percentage points",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A rural settlement has no provider offering Internet service. Which measure most directly addresses the stated barrier?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Service is available throughout a neighborhood, but some households cannot afford its monthly cost. Which intervention directly targets that barrier?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two students share one phone and must attend different video classes at the same time. What barrier is illustrated?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A town reports average broadband availability of 95%, while one outlying area remains unserved. What is the best interpretation?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A job application site requires large video uploads from applicants with strict data limits. Which change directly reduces that access burden?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A library lends laptops but has not changed Internet service in users’ homes. Which claim is warranted?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A public website cannot be operated using a screen reader. A student has broadband and a computer but cannot use it. What additional issue is shown?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A training center teaches new users how to complete online forms. Which barrier does this intervention most directly target?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A school surveys home Internet access only through a form that must be completed online. What is a likely limitation?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional district measures reliable access at 60% before a project and 75% afterward. What is the increase in percentage points?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Reliable access rises after a subsidy begins, but other network upgrades occurred at the same time. What conclusion fits?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which comparison most directly measures an access gap within a city?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A student uses a public hotspot that closes before the student can finish evening assignments. What limitation remains?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A government, a nonprofit and residents cooperate to establish a community network. What does this illustrate?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An online-only public hearing excludes residents who lack usable Internet service. Which broader concern follows directly?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A planner has only a country’s average device-ownership rate. Before choosing where to lend devices, what additional evidence is most useful?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.3",
  "name": "Computing Bias",
  "skill": "s3",
  "boardTitle": "Investigate sources of bias",
  "teach": [
   "Computing systems can reproduce bias through their data, rules, objectives and use in a social setting. A hiring model trained on historically selective hiring decisions can learn those patterns rather than a neutral measure of job performance. A rule written directly by a programmer can also disadvantage a group. Automation and consistent execution do not establish that the chosen rule or training target is fair.",
   "Check representation and performance across relevant groups. Suppose a speech recognizer is tested on 100 recordings from each of two groups and makes 5 errors in one and 20 in the other. Error rates are 5% and 20%; the combined 12.5% rate hides that disparity. The figures identify a performance difference requiring investigation. They do not, by themselves, establish the cause, malicious intent or the result for every individual.",
   "Reducing bias involves the full process: who helps define the problem, how data are gathered and labeled, what outcomes are optimized, how the system is evaluated and how people can challenge mistakes. Removing an explicit sensitive field may leave correlated proxy information. More data from the same narrow source may repeat the same limitation. Review with affected users and monitor after deployment; no single check proves a system is fair in every context."
  ],
  "eqs": [
   "Historical selection labels → learned selection pattern, not automatically job ability",
   "5/100 = 5%; 20/100 = 20%; combined 25/200 = 12.5%",
   "Remove group label, keep a correlated proxy → bias can still persist"
  ],
  "boards": [
   [
    "Bias can enter data, rules, goals and deployment",
    "Consistent execution does not prove fairness",
    "Look beyond the model alone"
   ],
   [
    "Compare relevant groups and denominators",
    "An overall rate can hide unequal performance",
    "A disparity calls for investigation of causes"
   ],
   [
    "Inspect proxies, labels and missing perspectives",
    "Evaluate changes with affected users",
    "Keep monitoring after release"
   ]
  ],
  "questions": [
   [
    "A hiring model learns from past decisions that systematically excluded a qualified group. What risk follows?",
    "It may reproduce the historical exclusion in its predictions",
    "Machine learning guarantees those past patterns disappear",
    "A larger file size by itself proves the predictions are fair",
    "Learning from historical labels can preserve their biases. Neither the use of machine learning nor file size guarantees correction."
   ],
   [
    "A developer writes a rule rejecting every applicant from one neighborhood, regardless of relevant qualifications. Where can bias enter?",
    "In the explicitly programmed decision rule",
    "Only in a missing network cable",
    "Only in the color of the monitor",
    "The rule itself uses neighborhood as a blanket exclusion. Bias need not come exclusively from training data or machine learning."
   ],
   [
    "A speech tool is trained almost entirely on one accent and performs poorly on others. Which data problem is illustrated?",
    "Underrepresentation of relevant speech patterns",
    "Proof that all accents were represented equally",
    "Evidence that training data can never affect performance",
    "The training sample provides limited coverage of other accents. This can affect performance and calls for representative evaluation."
   ],
   [
    "A team removes a group label, but keeps a postcode that closely predicts that group in its dataset. Why can bias persist?",
    "A retained feature can act as a proxy for the removed label",
    "Deleting any one column guarantees fairness",
    "Postcodes cannot be related to any social pattern",
    "Correlated features can carry information related to the removed field. Removing an explicit label does not eliminate every route to biased results."
   ],
   [
    "A fictional classifier makes 5 errors on 100 examples in Group A and 20 on 100 in Group B. Which group has the higher error rate?",
    "Group B, at 20%",
    "Group A, at 50%",
    "Both have 25%",
    "Divide each error count by its group’s 100 examples: 5% and 20%. Group B has the higher observed rate."
   ],
   [
    "A fictional classifier makes 5 errors on 100 Group A examples and 20 on 100 Group B examples. What is its combined error rate?",
    "12.5%",
    "25%",
    "2.5%",
    "There are 25 errors in 200 examples, so 25/200 = 0.125 = 12.5%. Dividing by only one group’s size would use the wrong denominator."
   ],
   [
    "An evaluation reports only a combined accuracy rate. What additional evidence helps reveal unequal performance?",
    "Error rates for relevant groups with their sample sizes",
    "Only a new logo for the model",
    "Only the claim that code runs identically each time",
    "Group-specific rates and denominators can reveal disparities hidden by an overall average. A logo and deterministic execution cannot do that."
   ],
   [
    "A product’s training sample omits night-shift workers. The team adds many more records from the same daytime-only collection process. What limitation can remain?",
    "Night-shift workers may still be unrepresented",
    "More rows guarantee all missing groups are represented",
    "The additional rows prove the model has no assumptions",
    "Increasing quantity without changing coverage can preserve the original sampling gap. Representation depends on how observations are obtained."
   ],
   [
    "A system consistently applies a rule that favors applicants who could afford unpaid internships. Does consistency alone establish fairness?",
    "No; the choice of criterion can still create unequal treatment or opportunity",
    "Yes; every consistently applied rule is necessarily fair",
    "Yes; socioeconomic circumstances cannot relate to access to internships",
    "Consistency describes execution of a rule. Evaluating fairness also requires examining the rule’s relevance and its effects on people with different opportunities."
   ],
   [
    "A team wants to reduce bias in a public-service application. Which approach best addresses multiple sources?",
    "Review data, decision rules and deployment with affected users",
    "Inspect only whether variable names are spelled correctly",
    "Assume fairness follows from keeping the algorithm secret",
    "Bias can arise at multiple stages. Reviewing those stages and affected users’ experiences is more relevant than spelling checks or secrecy."
   ],
   [
    "Human labelers disagree about whether comments are rude, and one cultural perspective dominates the final labels. What should the team examine?",
    "How labeling choices and perspectives shape the training target",
    "Only whether the comments are stored in binary",
    "Only whether the server has a larger hard drive",
    "Labels express judgments used by the model. Their criteria and perspectives can influence learned behavior; binary storage does not settle those judgments."
   ],
   [
    "A model performs differently across groups. What does that observation alone establish?",
    "A measured performance disparity that needs investigation",
    "That the programmers deliberately intended discrimination",
    "That every individual in one group gets the same result",
    "The disparity is evidence about observed performance. Causation, intent and universal individual outcomes require additional evidence."
   ],
   [
    "An app was tested in one region and then deployed where languages and usage patterns differ. Which action addresses a relevant risk?",
    "Evaluate it with users and conditions in the new setting",
    "Assume the old evaluation guarantees identical performance everywhere",
    "Skip testing because the source code has not changed",
    "Deployment conditions can differ even when code remains the same. Relevant local evaluation can reveal failures the earlier test did not cover."
   ],
   [
    "A recommendation system promotes what receives the most clicks, even when accurate notices attract fewer clicks. What design choice should be examined?",
    "The optimization objective and what it rewards",
    "Only the alphabetical order of file names",
    "An assumption that clicks measure every kind of public value",
    "The objective rewards clicks, which need not coincide with accuracy or public value. Examining the selected target addresses the stated mechanism."
   ],
   [
    "A loan-screening tool makes a mistake and gives affected applicants no way to request correction. Which addition addresses that problem?",
    "A process to review and challenge erroneous decisions",
    "A claim that automated decisions cannot be mistaken",
    "A larger advertisement for the tool",
    "An appeal or review process can help detect and correct errors. Advertising and claims of infallibility do not provide that path."
   ],
   [
    "A team improves group representation and sees smaller error gaps in one test. Which conclusion is appropriately limited?",
    "The test shows improvement on the measured cases, with continued evaluation needed",
    "All possible bias has been permanently eliminated",
    "No deployment monitoring can provide further information",
    "The result supports the observed improvement. Fairness in all future contexts is a broader claim than one test can establish."
   ]
  ],
  "check": [
   "A camera model trained only on bright daytime scenes will be used at night. Which evaluation best checks the stated coverage gap?",
   "Test relevant nighttime scenes and compare error patterns",
   "Measure only the size of the daytime training file",
   "Assume unchanged code guarantees unchanged accuracy",
   "The intended use includes lighting conditions absent from training, so evaluate those conditions directly."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Bias can enter at several stages",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      82,
      175
     ],
     "P1": [
      222,
      175
     ],
     "P2": [
      222,
      103
     ],
     "P3": [
      82,
      103
     ],
     "P4": [
      224,
      140
     ],
     "P5": [
      256,
      140
     ],
     "P6": [
      260,
      175
     ],
     "P7": [
      400,
      175
     ],
     "P8": [
      400,
      103
     ],
     "P9": [
      260,
      103
     ],
     "P10": [
      402,
      140
     ],
     "P11": [
      434,
      140
     ],
     "P12": [
      438,
      175
     ],
     "P13": [
      578,
      175
     ],
     "P14": [
      578,
      103
     ],
     "P15": [
      438,
      103
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     },
     {
      "v": "P6P7P8P9",
      "col": 1
     },
     {
      "v": "P12P13P14P15",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       152,
       145
      ],
      "text": "Data",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Who is included?",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Decision rule",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "What is rewarded?",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Use in context",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Who is affected?",
      "col": 2
     },
     {
      "at": [
       320,
       58
      ],
      "text": "Review each stage; consistent code can repeat bias",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Fictional classifier: examine group rates",
    "head": "Group",
    "cols": [
     "Errors",
     "Examples",
     "Error rate"
    ],
    "rows": [
     [
      "A",
      "5",
      "100",
      "5%"
     ],
     [
      "B",
      "20",
      "100",
      "20%"
     ],
     [
      "Combined",
      "25",
      "200",
      "12.5%"
     ]
    ]
   },
   {
    "t": "passages",
    "title": "A removed label can leave a proxy",
    "texts": [
     "The group label is removed from the dataset.",
     "A retained postcode closely predicts that group here.",
     "Removing one field alone does not establish fairness."
    ],
    "small": true
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A hiring model learns from past decisions that systematically excluded a qualified group. What risk follows?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A developer writes a rule rejecting every applicant from one neighborhood, regardless of relevant qualifications. Where can bias enter?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A speech tool is trained almost entirely on one accent and performs poorly on others. Which data problem is illustrated?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A team removes a group label, but keeps a postcode that closely predicts that group in its dataset. Why can bias persist?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional classifier makes 5 errors on 100 examples in Group A and 20 on 100 in Group B. Which group has the higher error rate?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional classifier makes 5 errors on 100 Group A examples and 20 on 100 Group B examples. What is its combined error rate?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An evaluation reports only a combined accuracy rate. What additional evidence helps reveal unequal performance?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A product’s training sample omits night-shift workers. The team adds many more records from the same daytime-only collection process. What limitation can remain?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A system consistently applies a rule that favors applicants who could afford unpaid internships. Does consistency alone establish fairness?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A team wants to reduce bias in a public-service application. Which approach best addresses multiple sources?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Human labelers disagree about whether comments are rude, and one cultural perspective dominates the final labels. What should the team examine?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A model performs differently across groups. What does that observation alone establish?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An app was tested in one region and then deployed where languages and usage patterns differ. Which action addresses a relevant risk?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A recommendation system promotes what receives the most clicks, even when accurate notices attract fewer clicks. What design choice should be examined?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A loan-screening tool makes a mistake and gives affected applicants no way to request correction. Which addition addresses that problem?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A team improves group representation and sees smaller error gaps in one test. Which conclusion is appropriately limited?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A camera model trained only on bright daytime scenes will be used at night. Which evaluation best checks the stated coverage gap?"
   ],
   "small": false
  }
 },
 {
  "code": "5.4",
  "name": "Crowdsourcing",
  "skill": "s4",
  "boardTitle": "Many contributors, checked evidence",
  "teach": [
   "Crowdsourcing gathers contributions from many people over the Internet. In a hypothetical mapping project, residents submit observations of broken sidewalks, which a team combines into a repair map. Citizen science involves public participation in scientific research, such as volunteers uploading bird observations for a study. Not every crowdsourced project is scientific research. Crowdfunding gathers financial contributions; its purpose differs from classifying images or reporting observations.",
   "Computing can connect contributions made in different places and at different times. Shared datasets, communication tools and published methods can help people identify problems, compare results and build on one another’s work. Distributed computing instead divides computational work among machines. A project may combine both approaches, but volunteers judging images and processors calculating simulations contribute different kinds of work.",
   "Scale does not guarantee quality or representativeness. Duplicate reports, mistaken identifications and unequal participation can distort a dataset. Clear collection instructions, independent checks and appropriate expert review can improve reliability. If a map contains few observations from one area, that may reflect few contributors rather than few events. Track how contributions were collected and respect the privacy of people and sensitive locations."
  ],
  "eqs": [
   "Residents submit sidewalk observations online → crowdsourced repair map",
   "People label images → human contributions; machines compute → distributed computation",
   "Few reports = possibly few events OR few contributors; investigate coverage"
  ],
  "boards": [
   [
    "Crowdsourcing gathers contributions from many people",
    "Citizen science contributes to scientific research",
    "Crowdfunding gathers financial support"
   ],
   [
    "Internet tools coordinate distributed contributions",
    "Shared data and methods enable follow-up work",
    "Human input differs from processor time"
   ],
   [
    "Check coverage, duplicates and reliability",
    "Many contributions can repeat the same error",
    "Protect people and sensitive locations"
   ]
  ],
  "questions": [
   [
    "Thousands of residents submit road-condition observations to a shared website. What process is most directly illustrated?",
    "Crowdsourcing",
    "Encryption of every observation with a single secret key",
    "A lone developer inventing every observation without contributors",
    "The project obtains input from many people through the Internet. The stem supplies no claim about its encryption method."
   ],
   [
    "Volunteers upload observations of migrating birds to help researchers study seasonal movement. What is this an example of?",
    "Citizen science",
    "A guarantee that every observation is correct",
    "Scientific research that excludes public participation",
    "Members of the public contribute observations to a research effort. Their participation does not remove the need for quality checks."
   ],
   [
    "A community raises small online donations from many people to fund a public garden. Which term most specifically describes the funding method?",
    "Crowdfunding",
    "Public-key decryption",
    "Automatic elimination of all project risk",
    "The contributions are financial support gathered from many people. Funding does not guarantee that the project will succeed."
   ],
   [
    "One project asks people to classify galaxy images; another runs calculations on volunteers’ idle processors without asking them to classify anything. What distinguishes them?",
    "The first gathers human judgments; the second supplies distributed computation",
    "Both require each volunteer to personally perform every calculation",
    "Only the second can involve Internet communication",
    "Human classification and machine computation are different contributions. Both can be coordinated online and can support research."
   ],
   [
    "A crowdsourced map has many reports near a university and few elsewhere. Why should analysts be cautious?",
    "Participation may be uneven, so report counts may not reflect underlying event rates",
    "Few reports prove that no relevant events occur elsewhere",
    "Each location must have the same number of contributors",
    "The dataset reflects who reports as well as what occurs. Unequal participation can produce misleading spatial patterns."
   ],
   [
    "Several volunteers submit the same pothole under different descriptions. Which quality step directly addresses this issue?",
    "Check for duplicate reports before counting distinct potholes",
    "Count every report as a guaranteed new pothole",
    "Discard all locations and count only user names",
    "Duplicate detection helps separate reports from distinct events. More submissions need not mean more physical potholes."
   ],
   [
    "A team asks multiple independent volunteers to label an image and sends disagreements for expert review. Why can this help?",
    "It can reveal uncertain or inconsistent classifications",
    "It guarantees that all volunteers share no possible bias",
    "It makes the original image unnecessary for all future checks",
    "Independent labeling and review can expose disagreement. They improve the process without guaranteeing perfect or unbiased results."
   ],
   [
    "A research group publishes its data and collection method so others can investigate a result. Which benefit is supported?",
    "Others can examine, reuse and test the work subject to relevant permissions",
    "Publication proves the original conclusion cannot be wrong",
    "Everyone who downloads the data becomes its original collector",
    "Access to evidence and methods enables follow-up analysis. It does not prove conclusions or change authorship."
   ],
   [
    "A crowd identifies letters in historical manuscripts for an archive. Must this be citizen science solely because many people participate online?",
    "No; crowdsourcing need not be scientific research",
    "Yes; all online group activity is scientific research",
    "No; crowdsourcing requires every contributor to be a scientist",
    "The online contributions qualify as crowdsourcing. Citizen science additionally involves scientific research, which participation alone does not establish."
   ],
   [
    "A sensor project supplies all volunteers with the same measurement instructions and calibration procedure. What problem does this most directly reduce?",
    "Inconsistency in how observations are collected",
    "The impossibility of ever making a measurement error",
    "All differences in Internet access across the country",
    "Common procedures can make observations more comparable. They neither eliminate all errors nor provide universal connectivity."
   ],
   [
    "A project publishes exact nest locations of a vulnerable species. Which concern should be considered before release?",
    "Detailed locations could expose the species to disturbance or misuse",
    "Scientific data can never create risks when shared",
    "All data must always be published with every identifying detail",
    "Open sharing can have benefits and risks. Sensitive locations may warrant controlled access or less precise public reporting."
   ],
   [
    "A crowdsourced survey receives one million responses from people who chose to visit a fan website. What does the large size alone fail to establish?",
    "That the responses represent the entire population",
    "That at least one person submitted a response",
    "That the website received more than ten responses",
    "A large self-selected sample can still have selection bias. Size does not establish representativeness."
   ],
   [
    "An online collaboration platform lets contributors in different time zones edit at different times. What advantage is illustrated?",
    "People can contribute without being present simultaneously",
    "Every participant must live in the same building",
    "All contributions are automatically correct because they are asynchronous",
    "Asynchronous collaboration permits work at different times and places. Accuracy still requires evaluation."
   ],
   [
    "A citizen-science team invites participants to inspect possible anomalies flagged by software. What does this combination illustrate?",
    "Human judgment and computing can complement each other",
    "Using software means people cannot contribute to science",
    "People and computers must always perform identical roles",
    "Computing can organize or flag data while people contribute interpretation. The combined process uses different capabilities."
   ],
   [
    "A crowdfunding campaign reaches its financial target. Which conclusion is justified by that fact alone?",
    "The campaign obtained the targeted amount of funding",
    "The promised product is guaranteed to work",
    "Every donor is guaranteed a financial profit",
    "Meeting a funding target establishes the money raised, not technical success or a financial return."
   ],
   [
    "A community mapping team wants to understand why one district has few submissions. What should it investigate?",
    "Both actual conditions and barriers to contributing from that district",
    "Only the total file size of the completed map",
    "An assumption that unreported problems do not exist",
    "Low submissions can reflect conditions, participation or access. Investigating these possibilities avoids equating missing reports with absence of problems."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Identify the contribution",
    "head": "Activity",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "Residents upload road observations",
      "Crowdsourced information"
     ],
     [
      "Volunteers contribute to research",
      "Citizen science"
     ],
     [
      "People donate toward a project",
      "Crowdfunding"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Coordinate and evaluate contributions",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      82,
      175
     ],
     "P1": [
      222,
      175
     ],
     "P2": [
      222,
      103
     ],
     "P3": [
      82,
      103
     ],
     "P4": [
      224,
      140
     ],
     "P5": [
      256,
      140
     ],
     "P6": [
      260,
      175
     ],
     "P7": [
      400,
      175
     ],
     "P8": [
      400,
      103
     ],
     "P9": [
      260,
      103
     ],
     "P10": [
      402,
      140
     ],
     "P11": [
      434,
      140
     ],
     "P12": [
      438,
      175
     ],
     "P13": [
      578,
      175
     ],
     "P14": [
      578,
      103
     ],
     "P15": [
      438,
      103
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     },
     {
      "v": "P6P7P8P9",
      "col": 1
     },
     {
      "v": "P12P13P14P15",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       152,
       145
      ],
      "text": "Contributors",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Observations",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Shared system",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Combines inputs",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Review",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Checks quality",
      "col": 2
     },
     {
      "at": [
       320,
       58
      ],
      "text": "More input does not automatically mean better evidence",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Quality depends on the process",
    "head": "Problem",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "Same event reported several times",
      "Check for duplicates"
     ],
     [
      "Few reports from one district",
      "Investigate participation and events"
     ],
     [
      "Disputed image classifications",
      "Use independent checks and review"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Thousands of residents submit road-condition observations to a shared website. What process is most directly illustrated?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Volunteers upload observations of migrating birds to help researchers study seasonal movement. What is this an example of?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A community raises small online donations from many people to fund a public garden. Which term most specifically describes the funding method?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "One project asks people to classify galaxy images; another runs calculations on volunteers’ idle processors without asking them to classify anything. What distinguishes them?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A crowdsourced map has many reports near a university and few elsewhere. Why should analysts be cautious?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Several volunteers submit the same pothole under different descriptions. Which quality step directly addresses this issue?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A team asks multiple independent volunteers to label an image and sends disagreements for expert review. Why can this help?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A research group publishes its data and collection method so others can investigate a result. Which benefit is supported?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A crowd identifies letters in historical manuscripts for an archive. Must this be citizen science solely because many people participate online?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A sensor project supplies all volunteers with the same measurement instructions and calibration procedure. What problem does this most directly reduce?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A project publishes exact nest locations of a vulnerable species. Which concern should be considered before release?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A crowdsourced survey receives one million responses from people who chose to visit a fan website. What does the large size alone fail to establish?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An online collaboration platform lets contributors in different time zones edit at different times. What advantage is illustrated?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A citizen-science team invites participants to inspect possible anomalies flagged by software. What does this combination illustrate?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A crowdfunding campaign reaches its financial target. Which conclusion is justified by that fact alone?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A community mapping team wants to understand why one district has few submissions. What should it investigate?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.5",
  "name": "Legal and Ethical Concerns",
  "skill": "s5",
  "boardTitle": "Permission, credit and consequences",
  "teach": [
   "Digital copying makes sharing easy, but availability does not settle ownership or permission. Under United States copyright principles, original human-authored expression can be protected when fixed in a tangible medium, including a saved digital file; facts and ideas themselves are not protected by copyright. The creator is not always the current rightsholder. Plagiarism means presenting another person’s work or ideas as one’s own. Attribution addresses honesty about sources, while a license, permission or an applicable legal exception addresses whether a use is allowed. Credit alone does not grant permission.",
   "Read the actual license. Creative Commons licenses grant specified permissions subject to conditions: BY requires attribution; NC limits licensed uses to noncommercial purposes; ND restricts sharing adaptations; SA requires a qualifying adaptation to be shared under the required same or compatible terms. For example, a CC BY 4.0 image may be adapted when its conditions, including appropriate credit and indicating changes, are met. Open-source software permits source access, modification and redistribution under its license; publicly visible code alone is insufficient. Open-access research reduces access barriers, but check the particular reuse terms.",
   "Legal and ethical judgments involve context. In United States fair-use analysis, purpose, the nature of the work, the amount and significance used, and market effects are considered together; educational intent or a fixed percentage does not automatically settle a case. A legally permitted practice can still raise ethical questions about privacy, exclusion, attribution or harm. In a project, identify what you intend to reuse, the rightsholder and the applicable terms; document sources and seek an authorized alternative when permission is absent and no exception applies."
  ],
  "eqs": [
   "A credit line identifies a source; it does not itself grant reuse rights",
   "CC BY adaptation → follow attribution and change-notice conditions",
   "Educational purpose is one fair-use consideration, not an automatic exemption"
  ],
  "boards": [
   [
    "Online availability does not imply permission",
    "Distinguish attribution from authorization",
    "U.S. copyright protects expression, not facts alone"
   ],
   [
    "Read the named license and its conditions",
    "Public source code is not automatically open source",
    "Open access does not erase all reuse conditions"
   ],
   [
    "Fair use requires context, not a fixed percentage",
    "Legal permission does not settle every ethical issue",
    "Document sources and comply with applicable terms"
   ]
  ],
  "questions": [
   [
    "A student copies a classmate’s original code and submits it as entirely their own. Which ethical problem is directly shown?",
    "Plagiarism through misrepresented authorship",
    "Proof that the code is in the public domain",
    "Automatic permission created by being classmates",
    "Presenting another person’s work as one’s own misrepresents authorship. The relationship between the students does not establish permission or public-domain status."
   ],
   [
    "A developer finds a copyrighted photograph on a publicly accessible website with no reuse permission stated. What does public accessibility alone establish?",
    "The image can be viewed there, not that any reuse is authorized",
    "The image is automatically in the public domain",
    "The developer automatically owns its copyright after downloading it",
    "Access and copyright permission are different. Viewing or downloading an image does not by itself transfer ownership or grant unrestricted reuse."
   ],
   [
    "A student adds a credit line to an image but has no applicable permission, license or legal exception for the intended reuse. What remains unresolved?",
    "Authorization for that reuse",
    "The spelling of the image’s file extension alone",
    "Whether attribution automatically transferred the copyright",
    "Attribution names the source but does not itself grant rights. The scenario explicitly leaves authorization or an exception absent."
   ],
   [
    "Under United States copyright principles, which distinction is correct?",
    "Original expression may be protected while underlying facts themselves are not",
    "Every fact becomes owned by the first person to type it",
    "Copyright applies only to printed books and never to software",
    "Copyright can protect original expression in many media, including software. It does not give ownership of facts themselves."
   ],
   [
    "A student writes an original story and saves it as a file in the United States. Is paid registration generally required before copyright protection can begin?",
    "No; qualifying original expression is protected when fixed",
    "Yes; all saved writing is unprotected until a fee is paid",
    "Yes; protection begins only after a million downloads",
    "Protection generally arises upon creation and fixation of qualifying expression. Registration serves other legal purposes and is not the basic condition for protection to begin."
   ],
   [
    "An author has transferred the relevant copyright to a publisher. From whom should a developer seek that rightsholder’s permission?",
    "The publisher that holds the relevant rights",
    "Any person who can download the work",
    "A stranger who reposted the work without authorization",
    "The current holder of the relevant rights can authorize their use. Original authorship and present ownership need not coincide."
   ],
   [
    "A CC BY 4.0 photograph is adapted for a poster, with no other rights implicated. Which condition must the reuser follow?",
    "Provide appropriate credit and indicate the changes as the license requires",
    "Claim to have created the original photograph",
    "Assume adaptation removes the attribution requirement",
    "CC BY permits adaptation subject to its terms, including attribution and indicating modifications. Making an adaptation does not erase those conditions."
   ],
   [
    "A license is CC BY-NC 4.0. A proposed reuse is clearly primarily directed toward commercial advantage. Does the NC license grant that commercial reuse?",
    "No; separate authorization or an applicable exception would be needed",
    "Yes; NC expressly permits every commercial reuse",
    "Yes; any credit line overrides the noncommercial condition",
    "NC limits the license grant to noncommercial uses. Attribution alone does not override that limitation."
   ],
   [
    "A work uses CC BY-ND 4.0. A person plans to publicly distribute an adapted version and relies only on that license. What is the problem?",
    "The license does not grant permission to share the adaptation",
    "The license forbids every unmodified sharing of the work",
    "ND requires everyone to produce and publish an adaptation",
    "ND restricts sharing adapted material under the license. This is different from saying that no unmodified redistribution is allowed."
   ],
   [
    "An adaptation is shared under CC BY-SA 4.0 conditions. What does ShareAlike require about the adaptation’s license?",
    "Use the same or a permitted compatible license",
    "Use no license and remove all credit",
    "Transfer all rights to every viewer without conditions",
    "ShareAlike specifies licensing conditions for shared adaptations. It does not erase attribution or require a rights transfer to every viewer."
   ],
   [
    "A repository allows anyone to read its source but explicitly prohibits modification and redistribution. Is visibility alone enough to make it open source under the Open Source Definition?",
    "No; open source also requires qualifying rights to modify and redistribute",
    "Yes; all publicly readable source is open source",
    "Yes; prohibiting redistribution is required for open source",
    "Source availability alone is insufficient. The stated restrictions conflict with the modification and redistribution rights required for open-source licensing."
   ],
   [
    "A company distributes open-source software. Which statement about charging money is accurate?",
    "Open-source licensing can allow selling software while preserving the license’s rights and conditions",
    "Open source always prohibits commercial use",
    "Charging any price automatically makes source code private",
    "Open source is about specified freedoms and licensing conditions, not a universal zero-price requirement. The Open Source Definition permits commercial use and redistribution."
   ],
   [
    "A research article is freely readable online and has a separate reuse license. Before republishing its figures, what should a user examine?",
    "The figure rights, applicable license terms and any relevant exception",
    "Only whether the article can be opened without payment",
    "An assumption that free reading always means unrestricted reuse",
    "Reading access and reuse rights are related but distinct. Particular figures may also have separately identified rights."
   ],
   [
    "A United States student claims that any copying for education is automatically fair use. What is the correct response?",
    "Educational purpose is relevant, but the full circumstances and fair-use factors matter",
    "The claim is always correct regardless of amount or market effect",
    "Fair use is determined only by whether a file is digital",
    "Educational purpose can support fair use, but it is not an automatic exemption. Other factors and the specific use must be considered."
   ],
   [
    "A user says, “Copying under 10% is always fair use in the United States.” What is wrong with that rule?",
    "There is no universal percentage that guarantees fair use",
    "The guaranteed threshold is always 20% instead",
    "All copying of any amount is necessarily prohibited",
    "Fair use depends on context, including the significance of the portion and the other factors. There is no universal safe percentage."
   ],
   [
    "A service has permission to store user data but publishes an unnecessarily detailed public profile that exposes people to harassment. What should an ethical review consider?",
    "The foreseeable privacy and harm concerns, even when some processing is permitted",
    "Only whether the database query is fast",
    "An assumption that permission for storage settles every later use",
    "Permission for one activity does not settle every reuse or its ethical effects. The stated exposure creates a distinct concern."
   ],
   [
    "A student has permission to use a public-domain text but claims to be its original author in an assignment. Which distinction matters?",
    "Lack of copyright restrictions does not make false authorship honest",
    "Public-domain status makes any authorship claim true",
    "Plagiarism is impossible whenever a work is old",
    "Academic honesty and copyright are different questions. A work can be reusable while a claim to have authored it is false."
   ],
   [
    "A developer lacks permission for a desired image, and no applicable exception allows the planned use. Which option addresses the rights problem?",
    "Create an original image or choose one licensed for the intended use and follow its terms",
    "Remove the original creator’s name and use it anyway",
    "Change the file extension to obtain unrestricted rights",
    "An original or appropriately licensed alternative can address authorization. Removing credit or changing a filename does not create reuse rights."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Separate two questions",
    "head": "Question",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "Who created this work?",
      "Acknowledge authorship and sources"
     ],
     [
      "May I make this use?",
      "Check rights, terms and exceptions"
     ],
     [
      "Can I view it online?",
      "Access alone does not grant reuse"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Read the specific license",
    "head": "Term",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "BY",
      "Provide required attribution"
     ],
     [
      "NC",
      "Licensed use must be noncommercial"
     ],
     [
      "ND",
      "No licensed sharing of adaptations"
     ],
     [
      "SA",
      "Follow adaptation licensing terms"
     ]
    ]
   },
   {
    "t": "passages",
    "title": "United States fair-use analysis",
    "texts": [
     "Consider purpose, nature of the work, amount and significance, and market effects.",
     "Educational intent and a fixed percentage do not automatically decide the result.",
     "Legal permission and ethical judgment are different questions."
    ],
    "small": true
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A student copies a classmate’s original code and submits it as entirely their own. Which ethical problem is directly shown?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A developer finds a copyrighted photograph on a publicly accessible website with no reuse permission stated. What does public accessibility alone establish?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A student adds a credit line to an image but has no applicable permission, license or legal exception for the intended reuse. What remains unresolved?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Under United States copyright principles, which distinction is correct?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A student writes an original story and saves it as a file in the United States. Is paid registration generally required before copyright protection can begin?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An author has transferred the relevant copyright to a publisher. From whom should a developer seek that rightsholder’s permission?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A CC BY 4.0 photograph is adapted for a poster, with no other rights implicated. Which condition must the reuser follow?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A license is CC BY-NC 4.0. A proposed reuse is clearly primarily directed toward commercial advantage. Does the NC license grant that commercial reuse?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A work uses CC BY-ND 4.0. A person plans to publicly distribute an adapted version and relies only on that license. What is the problem?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An adaptation is shared under CC BY-SA 4.0 conditions. What does ShareAlike require about the adaptation’s license?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A repository allows anyone to read its source but explicitly prohibits modification and redistribution. Is visibility alone enough to make it open source under the Open Source Definition?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A company distributes open-source software. Which statement about charging money is accurate?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A research article is freely readable online and has a separate reuse license. Before republishing its figures, what should a user examine?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A United States student claims that any copying for education is automatically fair use. What is the correct response?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A user says, “Copying under 10% is always fair use in the United States.” What is wrong with that rule?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A service has permission to store user data but publishes an unnecessarily detailed public profile that exposes people to harassment. What should an ethical review consider?"
    ],
    "small": false
   },
   "16": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A student has permission to use a public-domain text but claims to be its original author in an assignment. Which distinction matters?"
    ],
    "small": false
   },
   "17": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A developer lacks permission for a desired image, and no applicable exception allows the planned use. Which option addresses the rights problem?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.6",
  "name": "Safe Computing",
  "skill": "s6",
  "boardTitle": "Match the safeguard to the threat",
  "teach": [
   "Personal information can identify someone directly or become identifying when combined with other records. A name, account identifier, medical record or location trail may be sensitive in context. Removing names from a file does not guarantee anonymity: a distinctive route can link it to a known person. Search history, site activity and location records can support convenient features and also reveal private patterns. Limit collection to what is needed, review permissions and consider retention and sharing.",
   "Authentication checks evidence that a user is who they claim to be. Use long, unique passwords, with a reputable password manager where appropriate, and enable multifactor authentication. Different factors include something known, possessed or inherent to a person. A password plus a PIN are both knowledge factors; a password plus a separately possessed authenticator supplies two types. A second factor reduces some account-takeover risks but does not make all attacks impossible. Be cautious of unexpected approval requests and messages seeking codes.",
   "Encryption transforms readable data into ciphertext using a key; decryption recovers the message with the appropriate key. In the symmetric model, both parties use the same secret key. In the public-key encryption model taught here, a sender encrypts for a recipient using that recipient’s public key; the matching private key is kept secret and decrypts the message. Publishing a public key does not expose the private key. A public key must be authentically associated with the intended recipient; the wrong key can direct a secret to the wrong person.",
   "Certificate authorities issue signed certificates that bind public keys to identities such as domain names under a trust model. A browser checks a certificate and the hostname as part of establishing an authenticated HTTPS connection. For a domain-validated certificate, this is about domain control and the public key, not a guarantee that a business is honest. Correctly validated HTTPS protects data in transit against network eavesdropping and tampering; the destination still receives the data, and a compromised endpoint remains a risk.",
   "Malware is malicious software; a virus is a type that can replicate, commonly by attaching to other programs or files. Malicious keylogging records keystrokes and may capture secrets before transport encryption occurs. Trusted updates fix known vulnerabilities, and security software can detect some threats, but no single measure ensures perfect security. Restrict unnecessary permissions and get software from trustworthy sources. A free download is not necessarily malicious, and a paid download is not automatically safe.",
   "Phishing uses deception to obtain sensitive information or induce unsafe actions. A familiar display name or a known sender’s compromised account can carry an attack. Independently open a known official channel to verify an unexpected request rather than trusting its link. An unauthorized wireless access point can create a route into a network; a deceptive hotspot can also lure users. Avoid treating all public Wi-Fi as readable plaintext: correctly validated HTTPS protects its encrypted contents, though metadata and endpoint risks can remain."
  ],
  "eqs": [
   "Names removed + distinctive route + another record → possible re-identification",
   "Password + PIN = one factor type; password + authenticator = two types",
   "Encrypt with recipient public key → decrypt with matching private key",
   "Validated HTTPS protects the connection; the receiving site still sees submitted data",
   "Keylogger reads typing before encryption → encrypted transport is not a cure",
   "Unexpected account request → verify using a separately known official channel"
  ],
  "boards": [
   [
    "Separate direct identifiers from combined clues",
    "Data can bring convenience and privacy risk",
    "Collect less and review access and retention"
   ],
   [
    "Use unique passwords and more than one factor type",
    "Password plus PIN are both knowledge factors",
    "Extra protection is not an absolute guarantee"
   ],
   [
    "Symmetric: one shared secret key",
    "Public-key encryption: public key to encrypt",
    "Matching private key decrypts and stays secret"
   ],
   [
    "Certificates bind keys to stated identities",
    "Validate the hostname and the trust relationship",
    "An encrypted connection can lead to a dishonest site"
   ],
   [
    "Updates, trusted software and limited permissions",
    "A keylogger can capture input before encryption",
    "No scanner detects every possible threat"
   ],
   [
    "Phishing can impersonate familiar senders",
    "Verify unexpected requests independently",
    "Network encryption has boundaries"
   ]
  ],
  "questions": [
   [
    "A dataset removes names but includes precise daily location trails that can be linked to public home addresses. What privacy risk remains?",
    "Individuals may be re-identified by combining records",
    "Removing names guarantees nobody can be identified",
    "Location data cannot relate to any individual",
    "Distinctive locations and auxiliary information can link records to people. Name removal alone does not guarantee anonymity."
   ],
   [
    "A shopping service saves a delivery address to simplify checkout. Which evaluation recognizes both sides?",
    "It offers convenience while creating a need to protect personal data",
    "Convenience makes the address nonpersonal",
    "Storing an address guarantees identity theft will occur",
    "The stored address can help the user and also requires protection. A risk is neither eliminated by convenience nor a certainty of harm."
   ],
   [
    "A user deletes a public post after others have copied it. What is the limitation?",
    "Deletion from the original account may not remove existing copies",
    "Deleting the original necessarily erases every screenshot",
    "A copied post can never be viewed again",
    "Copies may remain outside the original account’s control. Deletion can reduce availability without guaranteeing removal everywhere."
   ],
   [
    "A flashlight app requests continuous location access unrelated to its stated function. Which action most directly limits this collection?",
    "Deny unnecessary location permission or choose a suitable alternative",
    "Grant every permission merely because the app asks",
    "Assume a privacy policy prevents all collection automatically",
    "Limiting unnecessary permissions reduces the app’s authorized access. A request or policy statement alone is not a reason to grant unrelated collection."
   ],
   [
    "A company combines browsing history, location and purchases. Why can the combined data create a greater privacy concern?",
    "Together the records may reveal patterns not apparent in each source alone",
    "Combining records necessarily makes them anonymous",
    "Only a password can ever reveal private information",
    "Aggregation can support new inferences about routines and interests. Privacy is not limited to passwords or explicit names."
   ],
   [
    "Two accounts use the same password. One service exposes it in a breach. What risk is increased?",
    "Attackers may try the exposed password on the other account",
    "The other account automatically gains stronger authentication",
    "Unique passwords would force the same password to work everywhere",
    "Password reuse lets a stolen credential be tried elsewhere. Unique credentials help limit that cross-account risk."
   ],
   [
    "Which pair uses two different authentication factor categories?",
    "A password and a separately possessed authenticator",
    "A password and a memorized PIN",
    "Two different memorized passwords",
    "The first combines knowledge and possession. Passwords and PINs are both knowledge factors even when there are two entry steps."
   ],
   [
    "A login asks for a password and a second memorized PIN. Why is this not two different factor categories?",
    "Both pieces of evidence are things the user knows",
    "A PIN is always a physical possession",
    "A password is always a biometric trait",
    "The classification concerns the type of evidence. Two knowledge secrets do not become different factor types merely because they are entered separately."
   ],
   [
    "A user enables multifactor authentication. Which statement is accurate?",
    "It adds protection but does not guarantee immunity from all account attacks",
    "It makes every phishing attempt impossible",
    "It removes the need to protect recovery methods",
    "MFA can reduce risk while phishing, recovery weaknesses and other attacks can remain. Additional protection is not a guarantee."
   ],
   [
    "In a symmetric-encryption model, what key relationship is used?",
    "The same secret key is used to encrypt and decrypt",
    "The decryption key must be published to everyone",
    "No key or secret is involved",
    "Symmetric encryption uses a shared secret key. Publishing that secret undermines confidentiality rather than being a requirement."
   ],
   [
    "Nia wants to encrypt a message so Omar can decrypt it using the public-key encryption model. Which key should Nia use for encryption?",
    "Omar’s authenticated public key",
    "Nia’s public key merely because Nia is the sender",
    "Omar’s private key obtained by publishing it online",
    "Encryption for Omar uses Omar’s public key. The matching private key stays with Omar and is used for decryption."
   ],
   [
    "A message was encrypted with Omar’s public key using the corresponding public-key scheme. Which key is needed to decrypt it?",
    "Omar’s matching private key",
    "Every unrelated user’s public key",
    "The name of the website alone",
    "The public and private keys form a matching pair. An unrelated key or a site name does not provide the required decryption key."
   ],
   [
    "A recipient publishes a public encryption key. What must remain secret in this model?",
    "The matching private key",
    "The fact that encryption is being used",
    "Every copy of the public key",
    "The public key is intended for distribution. Confidentiality depends on protecting the matching private key, not hiding the public key or the existence of encryption."
   ],
   [
    "An attacker substitutes their public key while claiming it belongs to a recipient. Why must the sender verify the key’s association?",
    "Otherwise the sender could encrypt for the attacker rather than the intended recipient",
    "Any public key automatically belongs to every possible recipient",
    "Key ownership never matters when encryption is used",
    "Encryption protects for the holder of the matching private key. Authenticating the recipient-key association prevents this substitution from redirecting a secret."
   ],
   [
    "What is a certificate authority’s relevant role in authenticated web communication?",
    "Issue signed certificates associating public keys with stated identities such as domains",
    "Guarantee that every certified website sells honest products",
    "Publish every website’s private key for visitors",
    "A certificate supports a key-identity binding within a trust system. It does not certify business honesty or require disclosure of private keys."
   ],
   [
    "A phishing site has a valid HTTPS certificate for its own domain. Which conclusion is correct?",
    "The connection can be encrypted while the site itself is deceptive",
    "HTTPS proves the site’s operator is honest",
    "A valid certificate means the site cannot collect submitted passwords",
    "HTTPS protects the connection to the named site. A deceptive destination still receives information submitted to it."
   ],
   [
    "A device sends a password to the intended site over correctly validated HTTPS. A passive observer on the Wi-Fi lacks endpoint access and keys. What protection applies?",
    "The observer cannot simply read the password from the encrypted network traffic",
    "Public Wi-Fi necessarily exposes the password as plaintext despite HTTPS",
    "HTTPS guarantees the receiving site cannot see the password",
    "Encryption protects the contents in transit from that observer. The destination still receives the submitted information."
   ],
   [
    "Malicious software records a user’s keystrokes before the browser encrypts a login request. Which threat is this?",
    "Keylogging that can expose input despite transport encryption",
    "Proof that the browser never encrypts network traffic",
    "A certificate authority approving a domain",
    "Capturing input occurs at the endpoint before encryption. An encrypted connection does not undo a compromised input path."
   ],
   [
    "A malicious program attaches to other program files and replicates when they run. Which description best fits?",
    "A computer virus, which is a type of malware",
    "Every possible kind of malware, all of which must replicate this way",
    "A harmless file merely because it can be copied",
    "Replication through infected program files is characteristic of a virus. Malware is broader and includes threats that do not replicate in this way."
   ],
   [
    "A vendor releases a trusted security update that repairs a known vulnerability. Why is installing it useful?",
    "It can close the repaired weakness that attackers might exploit",
    "It proves no other vulnerability can exist afterward",
    "It changes every weak password automatically",
    "The update addresses the known weakness. It does not establish that all other weaknesses or account problems are eliminated."
   ],
   [
    "A malware scan finds nothing. Which conclusion is justified?",
    "The scan detected no threat, but that is not proof that none exists",
    "The device is guaranteed free of every possible threat",
    "Software updates are permanently unnecessary",
    "Detection tools have limits. A negative result reports what was detected, not a proof of absence of all malware."
   ],
   [
    "An unexpected message claims to be a school administrator and demands a password through a link. What is the safest listed response?",
    "Verify the request through a separately known official channel without using the message’s link",
    "Enter the password because the display name is familiar",
    "Reply with all recovery codes to speed up verification",
    "Independent verification avoids relying on an untrusted link or claimed identity. Familiar display names do not establish authenticity."
   ],
   [
    "A familiar sender’s account has been compromised. Can a message from that account carry a phishing attack?",
    "Yes; a known account can be used to send malicious requests",
    "No; a familiar address makes every message safe",
    "No; phishing must always come from a visibly random address",
    "Compromised accounts can exploit existing trust. An expected name or address does not rule out a deceptive message."
   ],
   [
    "An employee connects an unauthorized wireless access point to a protected internal network. What risk does this create?",
    "An unapproved wireless route into the network",
    "Automatic encryption of every internal file",
    "Proof that all devices have current security updates",
    "The access point may expose network access outside approved controls. It does not imply file encryption or updated devices."
   ],
   [
    "An unknown hotspot imitates a café’s network name. Which assumption should a user reject?",
    "A familiar-looking network name proves the hotspot is legitimate",
    "Correctly validated encryption can protect data in transit",
    "A deceptive hotspot can pose a security risk",
    "Network names can be copied. The other statements describe relevant protections and risks rather than the unsafe assumption."
   ],
   [
    "An app is free to download. What does price alone tell a user about malware risk?",
    "Too little to conclude it is safe or malicious",
    "Every free app necessarily contains malware",
    "Every paid app is guaranteed safe",
    "Price does not establish trustworthiness. Source, permissions, updates and security evidence matter more than whether a fee is charged."
   ]
  ],
  "check": [
   "A login page uses HTTPS but belongs to an impostor’s domain. Why is submitting a password still unsafe?",
   "The encrypted connection delivers the password to the impostor’s site",
   "HTTPS prevents the destination from receiving entered data",
   "A certificate guarantees that a site is the organization it imitates",
   "Check the intended domain and request independently; connection encryption does not make a deceptive recipient trustworthy."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Data can become revealing in combination",
    "head": "Data or action",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "Precise location trail",
      "May reveal routines or home location"
     ],
     [
      "Names removed from a dataset",
      "Other clues may permit identification"
     ],
     [
      "Review access and retention",
      "Limit unnecessary collection and use"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Authentication factor types",
    "head": "Category",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "Knowledge",
      "Password or memorized PIN"
     ],
     [
      "Possession",
      "Separately possessed authenticator"
     ],
     [
      "Inherence",
      "Biometric characteristic"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Encrypt for the intended recipient",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      82,
      175
     ],
     "P1": [
      222,
      175
     ],
     "P2": [
      222,
      103
     ],
     "P3": [
      82,
      103
     ],
     "P4": [
      224,
      140
     ],
     "P5": [
      256,
      140
     ],
     "P6": [
      260,
      175
     ],
     "P7": [
      400,
      175
     ],
     "P8": [
      400,
      103
     ],
     "P9": [
      260,
      103
     ],
     "P10": [
      402,
      140
     ],
     "P11": [
      434,
      140
     ],
     "P12": [
      438,
      175
     ],
     "P13": [
      578,
      175
     ],
     "P14": [
      578,
      103
     ],
     "P15": [
      438,
      103
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     },
     {
      "v": "P6P7P8P9",
      "col": 1
     },
     {
      "v": "P12P13P14P15",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Public-key encryption for Omar",
      "col": 0
     },
     {
      "at": [
       152,
       145
      ],
      "text": "Nia encrypts",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Omar public key",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Ciphertext",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Sent over network",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Omar decrypts",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Omar private key",
      "col": 2
     },
     {
      "at": [
       320,
       64
      ],
      "text": "Verify the public key; keep the private key secret",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Understand the boundary of HTTPS",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      88,
      166
     ],
     "P1": [
      250,
      166
     ],
     "P2": [
      250,
      96
     ],
     "P3": [
      88,
      96
     ],
     "P4": [
      390,
      166
     ],
     "P5": [
      552,
      166
     ],
     "P6": [
      552,
      96
     ],
     "P7": [
      390,
      96
     ],
     "P8": [
      255,
      129
     ],
     "P9": [
      384,
      129
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       169,
       138
      ],
      "text": "Browser",
      "col": 1
     },
     {
      "at": [
       169,
       113
      ],
      "text": "Submits data",
      "col": 1
     },
     {
      "at": [
       471,
       138
      ],
      "text": "Named site",
      "col": 2
     },
     {
      "at": [
       471,
       113
      ],
      "text": "Receives data",
      "col": 2
     },
     {
      "at": [
       320,
       182
      ],
      "text": "Validated encrypted connection",
      "col": 0
     },
     {
      "at": [
       320,
       55
      ],
      "text": "A protected connection does not prove an honest site",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Match a threat and a safeguard",
    "head": "Issue",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "Known software vulnerability",
      "Install a trusted security update"
     ],
     [
      "Unnecessary program access",
      "Restrict permissions"
     ],
     [
      "Malicious code",
      "Use defenses; scans have limits"
     ],
     [
      "Keylogging before encryption",
      "Transport encryption alone cannot fix it"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Verify unexpected requests independently",
    "head": "Situation",
    "cols": [
     "Meaning or response"
    ],
    "rows": [
     [
      "Familiar sender name",
      "Identity may still be impersonated"
     ],
     [
      "Unexpected request for a secret",
      "Verify through a known official channel"
     ],
     [
      "Familiar hotspot name",
      "Name alone does not prove legitimacy"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A dataset removes names but includes precise daily location trails that can be linked to public home addresses. What privacy risk remains?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A shopping service saves a delivery address to simplify checkout. Which evaluation recognizes both sides?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A user deletes a public post after others have copied it. What is the limitation?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A flashlight app requests continuous location access unrelated to its stated function. Which action most directly limits this collection?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A company combines browsing history, location and purchases. Why can the combined data create a greater privacy concern?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two accounts use the same password. One service exposes it in a breach. What risk is increased?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pair uses two different authentication factor categories?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A login asks for a password and a second memorized PIN. Why is this not two different factor categories?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A user enables multifactor authentication. Which statement is accurate?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "In a symmetric-encryption model, what key relationship is used?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Nia wants to encrypt a message so Omar can decrypt it using the public-key encryption model. Which key should Nia use for encryption?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A message was encrypted with Omar’s public key using the corresponding public-key scheme. Which key is needed to decrypt it?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A recipient publishes a public encryption key. What must remain secret in this model?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An attacker substitutes their public key while claiming it belongs to a recipient. Why must the sender verify the key’s association?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is a certificate authority’s relevant role in authenticated web communication?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A phishing site has a valid HTTPS certificate for its own domain. Which conclusion is correct?"
    ],
    "small": false
   },
   "16": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A device sends a password to the intended site over correctly validated HTTPS. A passive observer on the Wi-Fi lacks endpoint access and keys. What protection applies?"
    ],
    "small": false
   },
   "17": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Malicious software records a user’s keystrokes before the browser encrypts a login request. Which threat is this?"
    ],
    "small": false
   },
   "18": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A malicious program attaches to other program files and replicates when they run. Which description best fits?"
    ],
    "small": false
   },
   "19": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A vendor releases a trusted security update that repairs a known vulnerability. Why is installing it useful?"
    ],
    "small": false
   },
   "20": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A malware scan finds nothing. Which conclusion is justified?"
    ],
    "small": false
   },
   "21": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An unexpected message claims to be a school administrator and demands a password through a link. What is the safest listed response?"
    ],
    "small": false
   },
   "22": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A familiar sender’s account has been compromised. Can a message from that account carry a phishing attack?"
    ],
    "small": false
   },
   "23": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An employee connects an unauthorized wireless access point to a protected internal network. What risk does this create?"
    ],
    "small": false
   },
   "24": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An unknown hotspot imitates a café’s network name. Which assumption should a user reject?"
    ],
    "small": false
   },
   "25": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An app is free to download. What does price alone tell a user about malware risk?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A login page uses HTTPS but belongs to an impostor’s domain. Why is submitting a password still unsafe?"
   ],
   "small": false
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Trace who benefits and who bears costs, including unintended effects. Explain access barriers and investigate bias in data, design and deployment. Distinguish collective human contributions from distributed computation and check their quality. Respect attribution, licenses and privacy. Match a security measure to a specific threat and describe its limits. The scenarios are original hypotheticals; the legal examples use stated license terms and, where identified, United States copyright principles. This lesson covers Big Idea 5, organized here as Unit 5, and does not replace the broader programming and Create performance task work.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"cs-h-ap-csp-impact-of-computing","subject":"cs","level":5,"grade":9,"standard":"AP CSP Big Idea 5, topics 5.1–5.6; IOC-1.A–F and IOC-2.A–C","title":"Impact of Computing","goal":"Evaluate computing impacts using evidence about people, access, data, rights and security.","points":20,"progression":{"requires":["cs-h-ap-csp-computer-systems-and-networks"],"operations":3,"demand":"Use a stated mechanism and evidence to evaluate an impact or safeguard without assuming fairness, permission or perfect security."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
