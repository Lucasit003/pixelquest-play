/* Original course unit. Review record: docs/review/lessons/high-completion/ap-enviro-u8-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "8.1",
  "name": "Sources of Pollution",
  "skill": "s1",
  "boardTitle": "Sources of Pollution",
  "teach": [
   "A point source releases pollution through an identifiable, concentrated outlet, such as an industrial discharge pipe. Nonpoint pollution comes from diffuse inputs, such as rain washing fertilizer from many fields. These descriptions concern delivery, not toxicity. A single watershed can receive both. Runoff may start diffusely and later enter a channel or storm-drain outlet; collecting it does not erase the upstream sources. Legal classifications have specific definitions and exceptions, so a simple classroom source map does not decide every permit requirement.",
   "A watershed is the land area draining toward a common outlet. Tracing water flow connects upstream activities to downstream observations. Compare upstream and downstream samples, tributaries, rainfall and timing before assigning a cause. Concentration is mass per water volume, whereas pollutant load is mass per time. In an original example, 3 milligrams per litre carried by 2000 litres per day is 6000 milligrams, or 6 grams per day. A lower concentration during high flow can still accompany a larger load."
  ],
  "eqs": [
   "Field runoff: diffuse inputs; factory discharge pipe: identifiable outlet",
   "3 mg/L × 2000 L/day = 6000 mg/day = 6 g/day"
  ],
  "boards": [
   [
    "Point source: identifiable outlet",
    "Nonpoint source: diffuse inputs",
    "Source type does not rank toxicity"
   ],
   [
    "Trace the watershed and transport",
    "Load = concentration × water flow",
    "Compare timing, flow and concentrations"
   ]
  ],
  "questions": [
   [
    "A factory releases wastewater through one identified discharge pipe. Which source description fits?",
    "Point source",
    "Diffuse nonpoint source only",
    "A source defined solely by how poisonous the water is",
    "The pipe is an identifiable outlet. The source category describes delivery rather than the pollutant’s toxicity."
   ],
   [
    "Rain carries fertilizer from many separate fields into a stream. Which description fits the distributed inputs?",
    "Nonpoint pollution",
    "One identified industrial outfall",
    "A pollutant with no transport pathway",
    "Runoff gathers contaminants across many locations. The diffuse origins distinguish this example from a single discharge outlet."
   ],
   [
    "Can one watershed contain both point and nonpoint pollution inputs?",
    "Yes; pipes and diffuse runoff can feed the same waters",
    "No; the first source excludes all other types",
    "Only if every pollutant has the same chemical composition",
    "Source categories can coexist in a drainage area. Their pollutants need not share composition or magnitude."
   ],
   [
    "Why does calling a source nonpoint not establish that it is harmless?",
    "The term describes diffuse delivery rather than toxicity",
    "All diffuse pollution is chemically neutral",
    "Toxicity is determined only by whether a pipe exists",
    "Effects depend on the pollutant, amount and exposure. A source’s spatial pattern does not determine its hazard."
   ],
   [
    "A stream sample is taken downstream of farms and a treatment-plant outlet. What is needed before attributing all nutrients to the farms?",
    "Evidence comparing the inputs, flows and timing",
    "Only the fact that farms are visible",
    "An assumption that treated effluent contains no nutrients",
    "Several sources can contribute. Comparative measurements are needed to distinguish their loads and transport."
   ],
   [
    "What does a watershed boundary identify?",
    "Land draining toward a specified common outlet",
    "Only the land legally owned by one town",
    "Only the water already inside a lake",
    "Drainage divides define which land contributes flow to an outlet. Political ownership and the current water surface are different boundaries."
   ],
   [
    "A fictional discharge carries 3 mg/L of pollutant at 2000 L/day. What is its pollutant load?",
    "6 g/day",
    "6000 g/day",
    "0.0015 g/day",
    "The product is 6000 mg/day. Dividing by 1000 milligrams per gram gives 6 grams per day."
   ],
   [
    "Two streams have the same pollutant concentration but one has twice the water flow. How do their loads compare?",
    "The higher-flow stream carries twice the mass per time",
    "Their loads must be equal",
    "The higher-flow stream carries half the mass per time",
    "Load equals concentration times flow. Equal concentration with double flow gives double mass transport per time."
   ],
   [
    "Diffuse street runoff enters a single storm-drain outlet. Which statement preserves both parts of its history?",
    "Contaminants can originate diffusely and then be conveyed through an outlet",
    "A pipe proves every contaminant originated inside the pipe",
    "Collection makes the original runoff disappear",
    "Origins and final conveyance are different parts of the pathway. Specific legal classifications require their own definitions."
   ],
   [
    "Which response directly targets fertilizer carried off fields?",
    "Match applications to crop needs and reduce runoff transport",
    "Move the downstream sampling site without changing land use",
    "Treat only airborne noise from vehicles",
    "Source reduction and runoff controls address the stated pathway. Moving a measurement point does not itself reduce pollution."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Sources can share the same receiving water",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      86,
      182
     ],
     "P1": [
      238,
      182
     ],
     "P2": [
      238,
      125
     ],
     "P3": [
      86,
      125
     ],
     "P4": [
      366,
      191
     ],
     "P5": [
      552,
      191
     ],
     "P6": [
      552,
      122
     ],
     "P7": [
      366,
      122
     ],
     "P8": [
      159,
      119
     ],
     "P9": [
      233,
      73
     ],
     "P10": [
      395,
      116
     ],
     "P11": [
      365,
      73
     ],
     "P12": [
      452,
      116
     ],
     "P13": [
      422,
      73
     ],
     "P14": [
      508,
      116
     ],
     "P15": [
      478,
      73
     ],
     "P16": [
      95,
      60
     ],
     "P17": [
      549,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P12P13",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P16P17",
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
     }
    ],
    "notes": [
     {
      "at": [
       162,
       158
      ],
      "text": "Factory outlet",
      "col": 0
     },
     {
      "at": [
       162,
       135
      ],
      "text": "Point input",
      "col": 0
     },
     {
      "at": [
       459,
       165
      ],
      "text": "Fields and streets",
      "col": 1
     },
     {
      "at": [
       459,
       138
      ],
      "text": "Diffuse runoff",
      "col": 1
     },
     {
      "at": [
       321,
       23
      ],
      "text": "Receiving stream: both source types can contribute",
      "col": 2
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "A concentration-to-load conversion",
    "head": "Quantity",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Concentration",
      "3 mg/L"
     ],
     [
      "Water flow",
      "2000 L/day"
     ],
     [
      "Product",
      "6000 mg/day"
     ],
     [
      "Mass load",
      "6 g/day"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A factory releases wastewater through one identified discharge pipe. Which source description fits?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Rain carries fertilizer from many separate fields into a stream. Which description fits the distributed inputs?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Can one watershed contain both point and nonpoint pollution inputs?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why does calling a source nonpoint not establish that it is harmless?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A stream sample is taken downstream of farms and a treatment-plant outlet. What is needed before attributing all nutrients to the farms?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What does a watershed boundary identify?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional discharge carries 3 mg/L of pollutant at 2000 L/day. What is its pollutant load?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two streams have the same pollutant concentration but one has twice the water flow. How do their loads compare?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Diffuse street runoff enters a single storm-drain outlet. Which statement preserves both parts of its history?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which response directly targets fertilizer carried off fields?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.2",
  "name": "Human Impacts on Ecosystems",
  "skill": "s2",
  "boardTitle": "Human Impacts on Ecosystems",
  "teach": [
   "Aquatic organisms differ in their tolerance of temperature, oxygen, salinity and contaminants. Conditions outside a suitable range can reduce growth or reproduction before they cause death. There is no universal optimum at the midpoint of every graph, and one species cannot represent all others. Coral reefs can be stressed by heat, sediment, pollution and destructive fishing. Excess sediment reduces light and can smother habitat; oil can harm organisms chemically and disrupt feather water repellency or fur insulation. Oil can mix into the water column or become associated with settling particles and sediments, exposing bottom-dwelling organisms. Economic effects can include lost fishing and tourism.",
   "Organic waste and nutrient-driven growth can raise oxygen demand during decomposition. An oxygen-sag profile plots dissolved oxygen against downstream distance: oxygen can fall after an input and later recover as demand declines and oxygen is replenished. Recovery is conditional, not guaranteed. A fictional profile gives 8, 5, 2 and 6 mg/L at 0, 2, 4 and 8 km. The lowest sampled concentration is at 4 km; a sparse profile does not identify every value between stations.",
   "Industrial and mining contaminants can reach surface water or groundwater through runoff, seepage or atmospheric deposition. Some microorganisms convert inorganic mercury into methylmercury under suitable conditions; not every mercury atom is immediately converted. Methylmercury can enter food webs. Litter can cause ingestion or entanglement, and sediment can carry attached contaminants. A useful investigation measures the relevant chemical form, exposure and response, with comparison sites. A fish kill alone does not uniquely identify oil, oxygen shortage, heat or a metal as its cause."
  ],
  "eqs": [
   "Stress can reduce reproduction before mortality; tolerance differs among species",
   "Fictional profile: 8 → 5 → 2 → 6 mg/L; minimum sampled at 4 km",
   "Source → transport → chemical form → exposure → biological effect"
  ],
  "boards": [
   [
    "Match the stressor to its mechanism",
    "Sublethal effects can precede death",
    "Species and life stages differ"
   ],
   [
    "Distance is the horizontal variable",
    "Oxygen demand can cause a downstream sag",
    "Recovery depends on replenishment and demand"
   ],
   [
    "Mercury form and conditions matter",
    "Litter can injure through physical pathways",
    "One effect can have several possible causes"
   ]
  ],
  "questions": [
   [
    "Fish reproduce less at a contaminant concentration that causes no observed deaths. Which interpretation fits?",
    "A sublethal effect is present",
    "No biological effect can exist without death",
    "All fish species must have identical responses",
    "Reproductive impairment is an effect even when survival is unchanged during observation. Different endpoints and species can differ."
   ],
   [
    "Why should a tolerance curve for one fish species not be treated as universal?",
    "Species and life stages can have different responses",
    "All organisms share exactly the same optimum",
    "The midpoint of any graph defines every organism’s optimum",
    "Tolerance is biological and context dependent. A graph’s geometric center does not establish an ecological optimum."
   ],
   [
    "How can sediment runoff harm a coral reef?",
    "Reduce available light and bury or irritate organisms",
    "Guarantee more light reaches every coral",
    "Remove all other stresses automatically",
    "Suspended sediment limits light, and deposited material can damage or cover habitat. These effects can combine with other stressors."
   ],
   [
    "Why can oil coating a seabird increase cold stress?",
    "It disrupts the feathers’ water-repelling and insulating function",
    "It always improves the feather barrier",
    "It changes the bird into a cold-blooded organism",
    "Feather fouling compromises protection from water and heat loss. Oil toxicity and ingestion can also cause harm."
   ],
   [
    "Is direct chemical poisoning the only way an oil spill can harm wildlife?",
    "No; physical coating and habitat damage can also matter",
    "Yes; oil can never affect insulation",
    "Yes; every affected organism must swallow the same dose",
    "Oil has physical and chemical effects. Exposure route and the affected organism determine which mechanisms matter."
   ],
   [
    "Which economic consequence can follow coastal oil contamination?",
    "Disruption of fishing and tourism",
    "Guaranteed increases in every fishery’s income",
    "Loss only to industries that directly purchased the spilled oil",
    "Contaminated resources and damaged beaches can affect livelihoods beyond the company handling the oil."
   ],
   [
    "Fictional dissolved oxygen is 8 mg/L at 0 km, 5 at 2 km, 2 at 4 km and 6 at 8 km downstream. Which station has the lowest measured oxygen?",
    "4 km",
    "0 km",
    "8 km",
    "The smallest reported concentration is 2 mg/L at 4 km. This identifies a sampled minimum, not every intervening value."
   ],
   [
    "In a fictional oxygen profile, concentration falls from 8 to 2 mg/L. What percentage decrease is that?",
    "75%",
    "25%",
    "300%",
    "The loss is 6 mg/L relative to the initial 8. Six divided by eight is 0.75, or a 75% decrease."
   ],
   [
    "What can cause oxygen to recover farther downstream after an organic-waste input?",
    "Oxygen replenishment exceeds the remaining oxygen demand",
    "All microorganisms instantly vanish at a fixed distance",
    "The pollution source must always have moved upstream",
    "Reaeration and other oxygen inputs can overtake declining demand. Flow and biological conditions determine whether recovery occurs."
   ],
   [
    "A coastal dead zone is described as hypoxic. What does that mean?",
    "Dissolved oxygen is low",
    "Every organism and microbe is absent",
    "The water contains no dissolved substances",
    "Hypoxia describes low oxygen, often harmful to animals. It does not mean literally no life or no dissolved material."
   ],
   [
    "Which process can produce methylmercury in aquatic environments?",
    "Microbial methylation of inorganic mercury under suitable conditions",
    "Immediate conversion of every metal into mercury by sunlight",
    "The creation of mercury atoms by fish respiration",
    "Microorganisms can change mercury’s chemical form. The process does not create the element or occur equally under all conditions."
   ],
   [
    "Why can discarded fishing line harm wildlife even without dissolving?",
    "It can entangle animals",
    "Only dissolved substances can cause environmental harm",
    "Its solid state prevents all contact",
    "Physical entanglement is a pollution pathway. A material need not dissolve to impair movement, feeding or survival."
   ],
   [
    "Which measurement helps assess sediment’s effect on underwater plant light?",
    "Water clarity or light transmission at relevant depths",
    "Only the sediment’s purchase price",
    "Only the total number of boats in the county",
    "Light measurements test the proposed shading mechanism. Unrelated economic or administrative counts do not establish it."
   ],
   [
    "A fish kill follows both a heat wave and a discharge. What conclusion is justified before further measurements?",
    "Several interacting causes should be investigated",
    "The discharge alone is proven to be the cause",
    "Heat is proven irrelevant because a discharge exists",
    "Temperature, oxygen and contaminants can interact. Timing alone does not uniquely identify the mechanism."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Biological effects need a specified endpoint",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      100,
      174
     ],
     "P1": [
      260,
      174
     ],
     "P2": [
      260,
      73
     ],
     "P3": [
      100,
      73
     ],
     "P4": [
      380,
      174
     ],
     "P5": [
      540,
      174
     ],
     "P6": [
      540,
      73
     ],
     "P7": [
      380,
      73
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     },
     {
      "v": "P4P5P6P7",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       213
      ],
      "text": "Different organisms can respond differently",
      "col": 0
     },
     {
      "at": [
       180,
       148
      ],
      "text": "Species A",
      "col": 0
     },
     {
      "at": [
       180,
       117
      ],
      "text": "Growth reduced",
      "col": 0
     },
     {
      "at": [
       180,
       91
      ],
      "text": "No deaths seen",
      "col": 0
     },
     {
      "at": [
       460,
       148
      ],
      "text": "Species B",
      "col": 1
     },
     {
      "at": [
       460,
       117
      ],
      "text": "Different response",
      "col": 1
     },
     {
      "at": [
       460,
       91
      ],
      "text": "Needs own data",
      "col": 1
     },
     {
      "at": [
       320,
       28
      ],
      "text": "Same pollutant exposure does not imply identical effects",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "An oxygen-sag sampling example",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      120,
      60
     ],
     "P1": [
      523,
      60
     ],
     "P2": [
      120,
      60
     ],
     "P3": [
      120,
      200
     ],
     "P4": [
      120,
      180
     ],
     "P5": [
      216,
      135
     ],
     "P6": [
      312,
      90
     ],
     "P7": [
      504,
      150
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       216
      ],
      "text": "Fictional dissolved oxygen (mg/L)",
      "col": 0
     },
     {
      "at": [
       100,
       55
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       100,
       85
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       100,
       115
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       100,
       145
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       100,
       175
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       120,
       34
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       137,
       192
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       216,
       34
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       233,
       147
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       312,
       34
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       329,
       102
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       504,
       34
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       521,
       162
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       320,
       6
      ],
      "text": "Downstream distance (km); points are sampled values",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 4,
      "col": 0
     },
     {
      "c": "P5",
      "r": 4,
      "col": 0
     },
     {
      "c": "P6",
      "r": 4,
      "col": 0
     },
     {
      "c": "P7",
      "r": 4,
      "col": 0
     }
    ]
   },
   {
    "t": "setups",
    "title": "Aquatic impacts have different pathways",
    "head": "Stressor",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Inorganic mercury",
      "Can be methylated by microorganisms"
     ],
     [
      "Litter or fishing gear",
      "Ingestion or entanglement"
     ],
     [
      "Suspended sediment",
      "Reduced light; possible attached contaminants"
     ],
     [
      "An observed fish kill",
      "Investigate heat, oxygen and chemicals"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fish reproduce less at a contaminant concentration that causes no observed deaths. Which interpretation fits?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why should a tolerance curve for one fish species not be treated as universal?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can sediment runoff harm a coral reef?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can oil coating a seabird increase cold stress?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Is direct chemical poisoning the only way an oil spill can harm wildlife?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which economic consequence can follow coastal oil contamination?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fictional dissolved oxygen is 8 mg/L at 0 km, 5 at 2 km, 2 at 4 km and 6 at 8 km downstream. Which station has the lowest measured oxygen?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "In a fictional oxygen profile, concentration falls from 8 to 2 mg/L. What percentage decrease is that?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What can cause oxygen to recover farther downstream after an organic-waste input?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A coastal dead zone is described as hypoxic. What does that mean?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which process can produce methylmercury in aquatic environments?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can discarded fishing line harm wildlife even without dissolving?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which measurement helps assess sediment’s effect on underwater plant light?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fish kill follows both a heat wave and a discharge. What conclusion is justified before further measurements?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.3",
  "name": "Endocrine Disruptors",
  "skill": "s3",
  "boardTitle": "Endocrine Disruptors",
  "teach": [
   "The endocrine system uses hormones as chemical signals affecting growth, metabolism and reproduction. Endocrine-disrupting chemicals can mimic a hormone, block a receptor or alter hormone production, transport or breakdown. They can be natural or human-made. A molecule that binds to a receptor need not produce the normal signal. Effects depend on the compound, dose, timing and organism, especially during sensitive development. Reproductive changes in fish can include altered gonadal development or sex ratios; these are biological effects, not human gender identity.",
   "A study needs an appropriate unexposed or vehicle control, replicated groups and comparable temperature, food and life stages. An association near a wastewater outlet is evidence to investigate, but other contaminants may confound it. In a fictional experiment, a specified developmental effect occurs in 2 of 40 controls and 12 of 40 exposed fish. That is 5% versus 30%, a difference of 25 percentage points and a sixfold proportion ratio. These observations do not prove the same response at every dose or in humans."
  ],
  "eqs": [
   "Mimic or block a hormone signal → altered cellular response",
   "2/40 = 5%; 12/40 = 30%; difference 25 percentage points"
  ],
  "boards": [
   [
    "Hormones carry biological signals",
    "Disruptors can mimic, block or alter signaling",
    "Dose and developmental timing matter"
   ],
   [
    "Use controls and replicated groups",
    "Percentage points differ from relative change",
    "Do not transfer one result to every species"
   ]
  ],
  "questions": [
   [
    "A chemical blocks a normal hormone from activating its receptor. Which process does this illustrate?",
    "Endocrine disruption",
    "Only nutrient enrichment",
    "Only mechanical entanglement",
    "Blocking hormone signaling can alter biological responses. Nutrient loading and physical injury are different mechanisms."
   ],
   [
    "Can an endocrine-disrupting chemical mimic a hormone rather than block it?",
    "Yes; either mechanism can disturb signaling",
    "No; all disruptors act only by physical blockage",
    "No; mimicry always preserves normal timing and amount",
    "An abnormal signal can be produced by mimicry. The effect depends on when, where and how strongly the signal acts."
   ],
   [
    "Why does developmental timing matter in endocrine studies?",
    "Hormones guide processes that can be especially sensitive during particular stages",
    "A dose has identical effects at every life stage",
    "Development begins only after exposure ends",
    "Sensitive windows can change the effect of an exposure. The same dose need not have the same consequences at every age."
   ],
   [
    "Are all endocrine-disrupting substances synthetic?",
    "No; natural and human-made substances can affect hormonal signaling",
    "Yes; natural molecules cannot bind hormone receptors",
    "Yes; endocrine effects require a manufactured label",
    "Origin alone does not determine the ability to interact with the endocrine system."
   ],
   [
    "Which observation most directly concerns a reproductive endocrine endpoint in fish?",
    "Altered gonadal development after exposure",
    "The color of the laboratory building",
    "The number printed on the water tank",
    "Gonadal development is related to reproductive biology. A study still needs controls to evaluate the cause."
   ],
   [
    "A solvent carries the test chemical in an experiment. Why include a solvent-only control?",
    "To distinguish chemical effects from effects of the solvent or handling",
    "To guarantee all exposed animals respond identically",
    "To replace every other comparison",
    "The vehicle itself may affect the endpoint. A matched control helps isolate the chemical’s contribution."
   ],
   [
    "A fictional effect occurs in 2 of 40 control fish and 12 of 40 exposed fish. What is the difference in percentages?",
    "25 percentage points",
    "25 percent of the control percentage",
    "10 percentage points",
    "The proportions are 5% and 30%. Their subtraction is 25 percentage points; relative change uses a different denominator."
   ],
   [
    "For a fictional effect occurring in 5% of controls and 30% of exposed fish, what is the exposed-to-control proportion ratio?",
    "6",
    "25",
    "0.167",
    "Dividing 30% by 5% gives six. Subtraction gives a percentage-point difference, not a ratio."
   ],
   [
    "Fish near an outlet show an altered sex ratio. Why should investigators measure other site conditions?",
    "Other pollutants or habitat differences could contribute",
    "A nearby outlet automatically proves a single chemical caused it",
    "Sex ratios cannot be measured in a field study",
    "Potential confounders can affect both location and outcome. Mechanistic and controlled evidence strengthens attribution."
   ],
   [
    "Does one endocrine experiment establish the response to every dose in every species?",
    "No; dose, timing and biological context limit the inference",
    "Yes; every hormone receptor is identical",
    "Yes; one observed effect establishes universal causation",
    "The experimental conditions define what was tested. Extrapolation to different exposures and organisms requires additional evidence."
   ]
  ],
  "check": [
   "A fictional developmental effect occurs in 8 of 50 exposed fish and 2 of 50 control fish. What is the percentage-point difference?",
   "12 percentage points",
   "6 percentage points",
   "400 percentage points",
   "Convert each count to a percentage of its group, then subtract."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Endocrine disruption changes signaling",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      80,
      170
     ],
     "P1": [
      224,
      170
     ],
     "P2": [
      224,
      96
     ],
     "P3": [
      80,
      96
     ],
     "P4": [
      227,
      133
     ],
     "P5": [
      252,
      133
     ],
     "P6": [
      258,
      170
     ],
     "P7": [
      402,
      170
     ],
     "P8": [
      402,
      96
     ],
     "P9": [
      258,
      96
     ],
     "P10": [
      405,
      133
     ],
     "P11": [
      430,
      133
     ],
     "P12": [
      436,
      170
     ],
     "P13": [
      580,
      170
     ],
     "P14": [
      580,
      96
     ],
     "P15": [
      436,
      96
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
       140
      ],
      "text": "Chemical",
      "col": 0
     },
     {
      "at": [
       152,
       115
      ],
      "text": "Mimics or blocks",
      "col": 0
     },
     {
      "at": [
       330,
       140
      ],
      "text": "Hormone system",
      "col": 1
     },
     {
      "at": [
       330,
       115
      ],
      "text": "Signal altered",
      "col": 1
     },
     {
      "at": [
       508,
       140
      ],
      "text": "Response",
      "col": 2
     },
     {
      "at": [
       508,
       115
      ],
      "text": "Biological effect",
      "col": 2
     },
     {
      "at": [
       320,
       40
      ],
      "text": "Effects depend on compound, dose, timing and organism",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Fictional developmental-effect experiment",
    "head": "Group",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Control",
      "2 of 40 = 5%"
     ],
     [
      "Exposed",
      "12 of 40 = 30%"
     ],
     [
      "Absolute difference",
      "25 percentage points"
     ],
     [
      "Exposed/control ratio",
      "6"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A chemical blocks a normal hormone from activating its receptor. Which process does this illustrate?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Can an endocrine-disrupting chemical mimic a hormone rather than block it?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why does developmental timing matter in endocrine studies?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Are all endocrine-disrupting substances synthetic?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which observation most directly concerns a reproductive endocrine endpoint in fish?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A solvent carries the test chemical in an experiment. Why include a solvent-only control?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional effect occurs in 2 of 40 control fish and 12 of 40 exposed fish. What is the difference in percentages?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "For a fictional effect occurring in 5% of controls and 30% of exposed fish, what is the exposed-to-control proportion ratio?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fish near an outlet show an altered sex ratio. Why should investigators measure other site conditions?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does one endocrine experiment establish the response to every dose in every species?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A fictional developmental effect occurs in 8 of 50 exposed fish and 2 of 50 control fish. What is the percentage-point difference?"
   ],
   "small": false
  }
 },
 {
  "code": "8.4",
  "name": "Human Impacts on Wetlands and Mangroves",
  "skill": "s4",
  "boardTitle": "Human Impacts on Wetlands and Mangroves",
  "teach": [
   "Wetlands have soil inundated or saturated for sufficient periods to support wetland conditions; they need not be covered by standing water every day. They can store floodwater, trap sediment, transform or retain nutrients and provide habitat. Their capacity depends on soils, hydrology, vegetation and loading. A wetland is not an unlimited filter that makes any wastewater safe. Mangrove forests are coastal wetlands dominated by salt-tolerant trees and shrubs, often providing nursery habitat, carbon storage and protection against waves and erosion.",
   "Filling, draining or fragmenting wetlands can remove habitat and change flood storage. Dams or diverted flows can change freshwater and sediment supply; coastal development, pollution and some aquaculture conversions can damage mangroves. Overharvesting can disrupt their food webs. Restoration must address tidal exchange, elevation and watershed conditions, not simply plant trees anywhere. In a fictional wetland, a decline from 120 to 90 hectares removes 30 hectares, or 25% of the original area. Area alone does not measure every ecological function."
  ],
  "eqs": [
   "Slow water + vegetation + suitable soils → storage, settling and biological processing",
   "(120 − 90) / 120 × 100 = 25% area lost"
  ],
  "boards": [
   [
    "Wetlands may be seasonal",
    "Functions depend on hydrology and loading",
    "Mangroves link land and coastal habitats"
   ],
   [
    "Protect habitat and water connections",
    "Restoration needs suitable site conditions",
    "Area change is not a complete function measure"
   ]
  ],
  "questions": [
   [
    "A wetland dries at the surface during part of the year. Does that alone mean it cannot be a wetland?",
    "No; wetland hydrology can be seasonal",
    "Yes; every wetland must be a permanent lake",
    "Yes; wetland plants cannot tolerate any fluctuation",
    "Wetlands can be periodically saturated or flooded. A single dry observation does not describe their full hydrology."
   ],
   [
    "How can a wetland reduce a downstream flood peak?",
    "Store and slow some incoming water",
    "Destroy incoming water molecules permanently",
    "Force every storm to produce no downstream flow",
    "Storage and slower movement can moderate peaks. The effect depends on available capacity and storm conditions."
   ],
   [
    "Why is unlimited pollutant removal an inaccurate claim about wetlands?",
    "Retention and processing capacities depend on loading and site conditions",
    "All wetlands remove exactly the same mass each day",
    "Water residence time has no effect on treatment",
    "Wetlands have finite capacity and differing processes. Excessive loading can damage them or pass through."
   ],
   [
    "Which ecosystem is dominated by salt-tolerant coastal trees and shrubs?",
    "Mangrove forest",
    "An upland desert grassland",
    "A deep-ocean coral reef",
    "Mangroves occupy coastal settings and can tolerate saline conditions. The other habitats have different defining organisms and locations."
   ],
   [
    "How can mangrove roots benefit some juvenile fish?",
    "Provide structurally complex nursery habitat",
    "Guarantee every fish species lives there",
    "Make predation impossible in all coastal waters",
    "Root habitat can offer shelter and feeding opportunities. Benefits are species-specific and do not eliminate predation."
   ],
   [
    "A dam reduces sediment reaching a coastal wetland. Why could that matter?",
    "It can change the material available to maintain wetland elevation",
    "Sediment supply never influences coastal land",
    "Every dam automatically increases downstream sediment delivery",
    "Sediment contributes to wetland building and maintenance. Changes interact with water levels, erosion and biological processes."
   ],
   [
    "Which action directly removes wetland habitat?",
    "Filling it for development",
    "Monitoring its water level",
    "Mapping its existing vegetation",
    "Filling changes the physical area and hydrology. Observation alone is not habitat conversion."
   ],
   [
    "Why might planting mangroves fail where tidal exchange and elevation are unsuitable?",
    "The environmental conditions needed for establishment are missing",
    "Every mangrove species grows equally well anywhere",
    "Tree number alone determines restoration success",
    "Successful restoration needs suitable physical conditions and appropriate species. Planting cannot substitute for hydrological suitability."
   ],
   [
    "A fictional wetland shrinks from 120 to 90 hectares. What fraction of the original area is lost?",
    "25%",
    "75%",
    "33.3%",
    "The loss is 30 of the original 120 hectares. Dividing by the remaining area would use the wrong baseline."
   ],
   [
    "A project restores 15 of 30 previously lost wetland hectares. What percentage of the lost area has been restored?",
    "50%",
    "15%",
    "200%",
    "The restored area is half the stated lost area. This measures area recovery, not proof of complete ecological recovery."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Wetland functions have limits",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      71,
      168
     ],
     "P1": [
      217,
      168
     ],
     "P2": [
      217,
      94
     ],
     "P3": [
      71,
      94
     ],
     "P4": [
      247,
      168
     ],
     "P5": [
      393,
      168
     ],
     "P6": [
      393,
      94
     ],
     "P7": [
      247,
      94
     ],
     "P8": [
      423,
      168
     ],
     "P9": [
      569,
      168
     ],
     "P10": [
      569,
      94
     ],
     "P11": [
      423,
      94
     ],
     "P12": [
      220,
      132
     ],
     "P13": [
      243,
      132
     ],
     "P14": [
      396,
      132
     ],
     "P15": [
      419,
      132
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P12P13",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
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
       144,
       140
      ],
      "text": "Incoming water",
      "col": 0
     },
     {
      "at": [
       144,
       114
      ],
      "text": "Sediment, nutrients",
      "col": 0
     },
     {
      "at": [
       320,
       140
      ],
      "text": "Wetland",
      "col": 1
     },
     {
      "at": [
       320,
       114
      ],
      "text": "Storage, processing",
      "col": 1
     },
     {
      "at": [
       496,
       140
      ],
      "text": "Outflow",
      "col": 2
     },
     {
      "at": [
       496,
       114
      ],
      "text": "Some inputs remain",
      "col": 2
     },
     {
      "at": [
       320,
       39
      ],
      "text": "Capacity depends on hydrology, soils, vegetation and loading",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "A fictional wetland-area comparison",
    "head": "Measure",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Original area",
      "120 hectares"
     ],
     [
      "Remaining area",
      "90 hectares"
     ],
     [
      "Lost area",
      "30 hectares"
     ],
     [
      "Percent of original lost",
      "25%; function also needs assessment"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A wetland dries at the surface during part of the year. Does that alone mean it cannot be a wetland?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can a wetland reduce a downstream flood peak?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is unlimited pollutant removal an inaccurate claim about wetlands?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which ecosystem is dominated by salt-tolerant coastal trees and shrubs?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can mangrove roots benefit some juvenile fish?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A dam reduces sediment reaching a coastal wetland. Why could that matter?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which action directly removes wetland habitat?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why might planting mangroves fail where tidal exchange and elevation are unsuitable?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional wetland shrinks from 120 to 90 hectares. What fraction of the original area is lost?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A project restores 15 of 30 previously lost wetland hectares. What percentage of the lost area has been restored?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.5",
  "name": "Eutrophication",
  "skill": "s5",
  "boardTitle": "Eutrophication",
  "teach": [
   "Eutrophication is nutrient enrichment of a water body. Excess nitrogen or phosphorus from fertilizer, wastewater (including inputs from phosphate-containing detergents) or other sources can stimulate algal or plant growth when conditions allow. As organic material is respired and decomposed, oxygen demand can rise and dissolved oxygen can fall. Respiration also occurs in living algae; photosynthesis produces oxygen in light. Thus a bloom can coincide with high daytime surface oxygen yet contribute to nighttime or deeper-water oxygen depletion. Not every bloom produces toxins, and low oxygen can arise from other processes too.",
   "Hypoxia means low dissolved oxygen; anoxia means oxygen is effectively absent. Stratification can limit oxygen replenishment to bottom water while decomposition continues. Oligotrophic waters generally have low nutrient concentrations and low productivity, but oxygen depends on depth, mixing and temperature as well as nutrient status. Avoid claiming that every oligotrophic sample has high oxygen. Management can reduce nutrient inputs, improve wastewater nutrient removal and intercept runoff. Aeration may address an oxygen symptom without eliminating the nutrient source.",
   "Biochemical oxygen demand, or BOD, estimates oxygen consumed by biological processes under specified test conditions. It is different from the oxygen currently dissolved in a stream. In a fictional valid, undiluted five-day bottle test with no relevant blank or seed correction, oxygen decreases from 9 to 3 mg/L. BOD5 is 6 mg/L, not 3 mg/L and not 6 mg/L each day. Diluted samples require the dilution factor and appropriate corrections. Comparable time, temperature and procedures are essential."
  ],
  "eqs": [
   "Nutrient input → growth → organic matter → respiration/decomposition → oxygen demand",
   "Limited mixing + continuing oxygen demand → possible bottom-water hypoxia",
   "Undiluted example: BOD5 = 9 − 3 = 6 mg/L over five days"
  ],
  "boards": [
   [
    "Nutrients can stimulate growth",
    "Respiration consumes dissolved oxygen",
    "Bloom toxicity and oxygen loss are different"
   ],
   [
    "Mixing affects oxygen replenishment",
    "Nutrient status does not fix every oxygen reading",
    "Source control targets nutrient inputs"
   ],
   [
    "BOD measures demand under a defined test",
    "DO measures present dissolved oxygen",
    "Dilution and corrections affect BOD calculations"
   ]
  ],
  "questions": [
   [
    "What process defines eutrophication?",
    "Nutrient enrichment of a water body",
    "Only the addition of heat",
    "Only the removal of all dissolved salts",
    "Nutrient enrichment can change productivity and oxygen demand. Thermal changes and desalination describe different processes."
   ],
   [
    "Which pair commonly contributes to excessive aquatic nutrient loading?",
    "Fertilizer runoff and nutrient-bearing wastewater",
    "Only oxygen and argon from air",
    "Only shadows from shoreline buildings",
    "Fertilizers and wastewater can supply nitrogen or phosphorus. Their loads and receiving-water conditions determine effects."
   ],
   [
    "Why can a large algal bloom be followed by oxygen depletion?",
    "Respiration and decomposition consume oxygen",
    "Dead algae permanently create unlimited oxygen",
    "Nitrogen atoms directly erase all oxygen atoms",
    "Organic matter supplies substrates for respiration. Oxygen use can exceed replenishment as organisms and microbes metabolize it."
   ],
   [
    "Do living algae use oxygen in respiration?",
    "Yes; they respire even though they can also photosynthesize",
    "No; only dead algae participate in oxygen-related processes",
    "No; photosynthesis makes respiration unnecessary",
    "Photosynthesis and respiration are distinct processes. Net oxygen change depends on their rates and environmental conditions."
   ],
   [
    "A lake surface has high oxygen in afternoon sunlight. Does that rule out bloom-related low oxygen at night or depth?",
    "No; oxygen varies with light, respiration, mixing and depth",
    "Yes; one surface reading determines every depth and time",
    "Yes; photosynthesis continues at the same rate in darkness",
    "A single sample does not describe the whole lake or day. Nighttime respiration and isolated bottom water can lower oxygen."
   ],
   [
    "Must every algal bloom release toxins?",
    "No; harmful oxygen or habitat effects can occur without toxin production",
    "Yes; every algal cell produces identical toxins",
    "Yes; toxin production is the definition of photosynthesis",
    "Bloom composition and mechanism matter. Oxygen depletion and toxin production are separate possible pathways of harm."
   ],
   [
    "What distinguishes anoxia from hypoxia?",
    "Anoxia is effectively absent oxygen; hypoxia is low oxygen",
    "Anoxia means excessive nutrients with guaranteed high oxygen",
    "Hypoxia means no organisms of any kind can remain",
    "The terms describe oxygen availability, not nutrient concentration or the literal absence of all life."
   ],
   [
    "How can strong stratification contribute to low bottom-water oxygen?",
    "It restricts replenishment while oxygen demand continues",
    "It guarantees oxygen production in dark bottom water",
    "It removes every decomposer from the lake",
    "Limited mixing can isolate deeper water from oxygen-rich surface water. Respiration can continue consuming the existing supply."
   ],
   [
    "Which statement about oligotrophic waters is most accurate?",
    "They generally have low nutrients and productivity, while oxygen still depends on conditions",
    "Every sample must have the highest possible oxygen",
    "They are defined by unlimited fertilizer inputs",
    "Nutrient status is not a universal oxygen measurement. Depth, circulation and temperature also affect dissolved oxygen."
   ],
   [
    "In a valid fictional undiluted five-day BOD test needing no corrections, oxygen falls from 9 to 3 mg/L. What is BOD5?",
    "6 mg/L",
    "3 mg/L",
    "1.2 mg/L",
    "The five-day oxygen use is the difference, 6 mg/L. Dividing by five would report an average rate rather than BOD5."
   ],
   [
    "Which statement correctly compares BOD and dissolved oxygen?",
    "BOD measures oxygen demand in a defined test; dissolved oxygen measures oxygen present",
    "They always measure exactly the same quantity",
    "High BOD guarantees high dissolved oxygen everywhere",
    "Demand and supply are distinct. High biological demand can deplete oxygen unless replenishment offsets consumption."
   ],
   [
    "Which response addresses a nutrient source rather than only low oxygen after it develops?",
    "Improve removal of nitrogen or phosphorus from relevant wastewater",
    "Only aerate the affected water while nutrient loading is unchanged",
    "Only move the oxygen probe to the surface",
    "Nutrient removal reduces an input driving enrichment. Aeration can relieve oxygen shortage without removing its nutrient cause."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Follow the nutrient-to-oxygen pathway",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      80,
      170
     ],
     "P1": [
      224,
      170
     ],
     "P2": [
      224,
      96
     ],
     "P3": [
      80,
      96
     ],
     "P4": [
      227,
      133
     ],
     "P5": [
      252,
      133
     ],
     "P6": [
      258,
      170
     ],
     "P7": [
      402,
      170
     ],
     "P8": [
      402,
      96
     ],
     "P9": [
      258,
      96
     ],
     "P10": [
      405,
      133
     ],
     "P11": [
      430,
      133
     ],
     "P12": [
      436,
      170
     ],
     "P13": [
      580,
      170
     ],
     "P14": [
      580,
      96
     ],
     "P15": [
      436,
      96
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
       140
      ],
      "text": "Nutrients",
      "col": 0
     },
     {
      "at": [
       152,
       115
      ],
      "text": "Enrichment",
      "col": 0
     },
     {
      "at": [
       330,
       140
      ],
      "text": "Growth",
      "col": 1
     },
     {
      "at": [
       330,
       115
      ],
      "text": "Organic matter",
      "col": 1
     },
     {
      "at": [
       508,
       140
      ],
      "text": "Respiration",
      "col": 2
     },
     {
      "at": [
       508,
       115
      ],
      "text": "Oxygen consumed",
      "col": 2
     },
     {
      "at": [
       320,
       40
      ],
      "text": "Decomposition can add demand; replenishment also matters",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Interpret the water body, depth and time",
    "head": "Condition",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Hypoxia",
      "Low dissolved oxygen"
     ],
     [
      "Anoxia",
      "Effectively absent dissolved oxygen"
     ],
     [
      "Stratification",
      "Can limit replenishment at depth"
     ],
     [
      "Oligotrophic water",
      "Low nutrients; oxygen still varies"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Fictional undiluted five-day BOD test",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      91,
      60
     ],
     "P1": [
      551,
      60
     ],
     "P2": [
      105,
      176
     ],
     "P3": [
      165,
      176
     ],
     "P4": [
      165,
      60
     ],
     "P5": [
      105,
      60
     ],
     "P6": [
      415,
      98.66666666666666
     ],
     "P7": [
      475,
      98.66666666666666
     ],
     "P8": [
      475,
      60
     ],
     "P9": [
      415,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P2P3P4P5",
      "col": 0
     },
     {
      "v": "P6P7P8P9",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Dissolved oxygen (mg/L)",
      "col": 0
     },
     {
      "at": [
       135,
       188
      ],
      "text": "9",
      "col": 0
     },
     {
      "at": [
       135,
       33
      ],
      "text": "Initial DO",
      "col": 0
     },
     {
      "at": [
       445,
       110.66666666666666
      ],
      "text": "3",
      "col": 1
     },
     {
      "at": [
       445,
       33
      ],
      "text": "Final DO",
      "col": 1
     },
     {
      "at": [
       320,
       4
      ],
      "text": "No corrections needed in this example; BOD5 = 6 mg/L",
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
     "What process defines eutrophication?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pair commonly contributes to excessive aquatic nutrient loading?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can a large algal bloom be followed by oxygen depletion?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Do living algae use oxygen in respiration?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A lake surface has high oxygen in afternoon sunlight. Does that rule out bloom-related low oxygen at night or depth?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Must every algal bloom release toxins?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What distinguishes anoxia from hypoxia?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can strong stratification contribute to low bottom-water oxygen?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement about oligotrophic waters is most accurate?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "In a valid fictional undiluted five-day BOD test needing no corrections, oxygen falls from 9 to 3 mg/L. What is BOD5?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement correctly compares BOD and dissolved oxygen?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which response addresses a nutrient source rather than only low oxygen after it develops?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.6",
  "name": "Thermal Pollution",
  "skill": "s6",
  "boardTitle": "Thermal Pollution",
  "teach": [
   "Thermal pollution occurs when a human-caused temperature change harms receiving-water organisms or processes. Heated cooling-water discharge is one example; loss of streamside shade can also warm a stream. At the same pressure and salinity, equilibrium oxygen solubility generally decreases as water warms. Actual dissolved oxygen also reflects respiration, photosynthesis and mixing, so temperature alone does not determine a measured concentration. Organisms may experience increased metabolic demand, altered growth or reproduction, or stress from a rapid temperature change.",
   "A heat balance can estimate a mixed temperature when water is fully mixed, has the same heat capacity and loses negligible heat to surroundings. Equal masses at 20°C and 30°C mix to 25°C; an unequal mixture needs mass weighting. This is an idealized calculation, not a model of every river plume. Cooling ponds, towers, recirculating systems and riparian shade can reduce particular thermal inputs, with water, energy or land tradeoffs. Upstream/downstream comparisons should track flow, temperature and oxygen over time."
  ],
  "eqs": [
   "Warming can lower oxygen solubility while biological oxygen demand rises",
   "Equal water masses: (20°C + 30°C) / 2 = 25°C"
  ],
  "boards": [
   [
    "Compare equal pressure and salinity",
    "Solubility differs from actual oxygen concentration",
    "Rate and magnitude of temperature change matter"
   ],
   [
    "Use heat balance with explicit assumptions",
    "Unequal masses require weighting",
    "Match controls to the heat source"
   ]
  ],
  "questions": [
   [
    "Which example describes thermal pollution?",
    "Heated discharge changes stream temperature enough to harm aquatic organisms",
    "Any naturally warm water regardless of effects",
    "Only a chemical that stains water blue",
    "Thermal pollution concerns harmful temperature alteration. Natural warmth alone is not this source-and-effect claim."
   ],
   [
    "At equal pressure and salinity, what usually happens to equilibrium oxygen solubility as water warms?",
    "It decreases",
    "It necessarily doubles",
    "It becomes independent of temperature",
    "Warmer water generally holds less oxygen at equilibrium under comparable pressure and salinity."
   ],
   [
    "Does water temperature alone determine its actual dissolved-oxygen concentration?",
    "No; mixing, photosynthesis and respiration also matter",
    "Yes; biological processes cannot change oxygen",
    "Yes; all samples at the same temperature have identical oxygen",
    "Solubility constrains equilibrium conditions, while oxygen production, consumption and transport affect actual measurements."
   ],
   [
    "Why can warming place a double stress on some aquatic animals?",
    "Oxygen supply capacity can fall while metabolic oxygen demand rises",
    "Warm water always creates more oxygen than any organism needs",
    "Warming removes the need for animal respiration",
    "Lower solubility and greater metabolic demand can combine. Biological responses depend on the species and temperature range."
   ],
   [
    "What is thermal shock in an aquatic context?",
    "Stress caused by a rapid temperature change",
    "Only poisoning by a heavy metal",
    "A guarantee that every animal dies at the same temperature",
    "Rapid change can exceed an organism’s capacity to adjust. The outcome depends on the magnitude, direction and organism."
   ],
   [
    "How can removing trees beside a stream increase thermal stress?",
    "Less shade can increase solar heating of the water",
    "Roots are the only possible source of stream heat",
    "Tree removal always lowers water temperature",
    "Riparian shade affects incoming sunlight. Effects depend on channel geometry, flow and other conditions."
   ],
   [
    "Equal masses of water at 20°C and 30°C mix with equal heat capacity and no external heat loss. What is the final temperature?",
    "25°C",
    "50°C",
    "10°C",
    "Heat lost by the warmer half equals heat gained by the cooler half. With equal masses, the result is the average."
   ],
   [
    "Why is a simple average of temperatures generally wrong for unequal water masses?",
    "Each portion’s heat contribution depends on its mass",
    "Temperature has no relationship to heat transfer",
    "The smaller portion always determines the final temperature",
    "A heat balance weights each portion by its mass and heat capacity. Equal weighting requires equal thermal capacities."
   ],
   [
    "Which measure directly targets excess heat in a cooling-water discharge?",
    "Use an appropriate cooling or recirculating system",
    "Only add a particle filter with no heat exchange",
    "Only measure the water’s color",
    "Cooling changes heat transfer before or during release. Particle capture alone does not establish thermal control."
   ],
   [
    "Which comparison better evaluates a thermal-discharge change?",
    "Repeated upstream/downstream temperature and oxygen readings with flow data",
    "One shaded upstream sample and one sunny downstream sample on different seasons",
    "Only the factory’s electricity bill",
    "Matched measurements and flow information help separate the discharge effect from weather and hydrological differences."
   ]
  ],
  "check": [
   "Equal masses of water at 18°C and 26°C mix with equal heat capacity and negligible external heat exchange. What is the mixed temperature?",
   "22°C",
   "44°C",
   "8°C",
   "For equal masses with these assumptions, heat lost by the warmer water equals heat gained by the cooler water."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Temperature and oxygen are related, not identical",
    "head": "Change",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Warming at equal pressure and salinity",
      "Generally lowers equilibrium oxygen solubility"
     ],
     [
      "Animal metabolism",
      "Can increase oxygen demand"
     ],
     [
      "Actual measured oxygen",
      "Also reflects biology and mixing"
     ],
     [
      "Rapid temperature change",
      "Can cause thermal stress"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Mix water using a heat balance",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      95,
      188
     ],
     "P1": [
      267,
      188
     ],
     "P2": [
      267,
      111
     ],
     "P3": [
      95,
      111
     ],
     "P4": [
      373,
      188
     ],
     "P5": [
      545,
      188
     ],
     "P6": [
      545,
      111
     ],
     "P7": [
      373,
      111
     ],
     "P8": [
      185,
      105
     ],
     "P9": [
      276,
      69
     ],
     "P10": [
      455,
      105
     ],
     "P11": [
      364,
      69
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 1,
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
     }
    ],
    "notes": [
     {
      "at": [
       181,
       158
      ],
      "text": "Equal mass: 20°C",
      "col": 0
     },
     {
      "at": [
       181,
       132
      ],
      "text": "Gains heat",
      "col": 0
     },
     {
      "at": [
       459,
       158
      ],
      "text": "Equal mass: 30°C",
      "col": 1
     },
     {
      "at": [
       459,
       132
      ],
      "text": "Loses heat",
      "col": 1
     },
     {
      "at": [
       320,
       44
      ],
      "text": "Mixed water: 25°C",
      "col": 2
     },
     {
      "at": [
       320,
       9
      ],
      "text": "Equal heat capacity; no heat lost to surroundings",
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
     "Which example describes thermal pollution?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "At equal pressure and salinity, what usually happens to equilibrium oxygen solubility as water warms?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does water temperature alone determine its actual dissolved-oxygen concentration?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can warming place a double stress on some aquatic animals?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is thermal shock in an aquatic context?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can removing trees beside a stream increase thermal stress?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Equal masses of water at 20°C and 30°C mix with equal heat capacity and no external heat loss. What is the final temperature?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is a simple average of temperatures generally wrong for unequal water masses?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which measure directly targets excess heat in a cooling-water discharge?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which comparison better evaluates a thermal-discharge change?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "Equal masses of water at 18°C and 26°C mix with equal heat capacity and negligible external heat exchange. What is the mixed temperature?"
   ],
   "small": false
  }
 },
 {
  "code": "8.7",
  "name": "Persistent Organic Pollutants (POPs)",
  "skill": "s7",
  "boardTitle": "Persistent Organic Pollutants (POPs)",
  "teach": [
   "Persistent organic pollutants are carbon-based chemicals with a combination of environmental persistence, transport potential, accumulation and harmful effects. DDT and PCBs are familiar examples. Slow breakdown results from chemical properties and environmental conditions, not simply from being synthetic or containing carbon. Many classic POPs partition into fatty tissues, but fat solubility alone does not prove toxicity, and not every contaminant behaves identically. Production restrictions can reduce new inputs while older residues remain in soils, sediments, products or organisms.",
   "Wind, water and movement of organisms can transport pollutants beyond the places where they were used. Evaporation and redeposition can redistribute some compounds. A decline at one sampling site may reflect transport rather than destruction. In a fictional closed system with first-order breakdown, no new input and a four-year half-life, 80 milligrams of a parent compound become 20 milligrams after eight years. This is an illustrative rate model, not a universal half-life for POPs. Transformation products may still require evaluation."
  ],
  "eqs": [
   "Persistent means resistant to breakdown; carbon content alone does not establish persistence",
   "80 mg → 40 mg after 4 years → 20 mg after 8 years"
  ],
  "boards": [
   [
    "DDT and PCBs are classic examples",
    "Chemical properties control environmental fate",
    "Old reservoirs can remain after new inputs stop"
   ],
   [
    "Track transport separately from breakdown",
    "Half-life models require stated conditions",
    "Transformation products do not automatically vanish"
   ]
  ],
  "questions": [
   [
    "What does persistence describe for a pollutant?",
    "Resistance to environmental breakdown",
    "A requirement that it remain only at its release point",
    "Proof that it is harmless at every exposure",
    "Persistence concerns how long a substance remains. A persistent chemical can still move among environmental compartments."
   ],
   [
    "Which pair contains familiar persistent organic pollutant examples?",
    "DDT and PCBs",
    "Only dissolved oxygen and ordinary table salt",
    "Only sound waves and heat",
    "DDT and PCBs are carbon-based contaminants known for persistence and accumulation. Sound and heat are not organic chemicals."
   ],
   [
    "Why is “all synthetic carbon compounds are persistent pollutants” incorrect?",
    "Breakdown and toxicity depend on chemical properties and conditions",
    "Every carbon compound has an identical half-life",
    "Synthetic origin alone fixes every environmental effect",
    "Carbon content and origin do not establish the full combination of persistence, transport, accumulation and harm."
   ],
   [
    "How can a POP appear far from where it was used?",
    "Transport by air, water or organisms followed by deposition or transfer",
    "Only local manufacture could explain any detection",
    "Political borders prevent all chemical movement",
    "Persistent chemicals can move across regions. Detection does not by itself demonstrate local production."
   ],
   [
    "Does fat solubility alone prove that a substance is toxic?",
    "No; toxicity requires evidence about effects as well as exposure",
    "Yes; every fat-soluble substance has identical toxicity",
    "Yes; chemical identity becomes irrelevant",
    "Partitioning affects where a chemical can accumulate. It is not, by itself, a complete toxicity assessment."
   ],
   [
    "Why can contamination continue after new production of a persistent chemical stops?",
    "Older environmental and product reservoirs can remain",
    "A ban instantly destroys every existing molecule",
    "Stopping manufacture must increase natural creation of the element carbon",
    "Stored residues can persist and move over time. Reducing new inputs does not instantly remove past releases."
   ],
   [
    "A pollutant concentration falls at one site after a flood. What cannot be concluded from that observation alone?",
    "All missing pollutant was chemically destroyed",
    "Some pollutant may have moved downstream",
    "Additional sampling could help establish its fate",
    "Dilution and transport can lower local readings. Tracking the full mass and products is needed to infer destruction."
   ],
   [
    "A fictional parent compound starts at 80 mg and has a four-year half-life in a closed system with no new inputs. How much parent remains after eight years?",
    "20 mg",
    "40 mg",
    "0 mg",
    "Eight years contains two stated half-lives. The parent amount halves twice; the calculation does not describe every real pollutant."
   ],
   [
    "Does breakdown of a parent pollutant prove its transformation products are harmless?",
    "No; the products need their own evaluation",
    "Yes; every chemical reaction eliminates all hazard",
    "Yes; transformed matter no longer exists",
    "Chemical transformation changes identity. Product persistence, mobility and toxicity can differ and require assessment."
   ],
   [
    "Which monitoring design better investigates long-range pollutant movement?",
    "Comparable chemical measurements across source and downwind or downstream locations",
    "Only counting factories at the final sampling site",
    "Assuming every remote detection is a laboratory error",
    "Spatial measurements combined with transport evidence can test movement. Local source counts alone cannot resolve the pathway."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Persistent chemicals require a full fate analysis",
    "head": "Property",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Persistence",
      "Slow environmental breakdown"
     ],
     [
      "Transport",
      "Air, water or organism movement"
     ],
     [
      "Accumulation",
      "Uptake relative to elimination"
     ],
     [
      "Harm",
      "Depends on compound and exposure"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "An illustrative parent-compound decay model",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      91,
      60
     ],
     "P1": [
      551,
      60
     ],
     "P2": [
      105,
      176
     ],
     "P3": [
      165,
      176
     ],
     "P4": [
      165,
      60
     ],
     "P5": [
      105,
      60
     ],
     "P6": [
      260,
      118
     ],
     "P7": [
      320,
      118
     ],
     "P8": [
      320,
      60
     ],
     "P9": [
      260,
      60
     ],
     "P10": [
      415,
      89
     ],
     "P11": [
      475,
      89
     ],
     "P12": [
      475,
      60
     ],
     "P13": [
      415,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P2P3P4P5",
      "col": 0
     },
     {
      "v": "P6P7P8P9",
      "col": 1
     },
     {
      "v": "P10P11P12P13",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Parent compound (mg)",
      "col": 0
     },
     {
      "at": [
       135,
       188
      ],
      "text": "80",
      "col": 0
     },
     {
      "at": [
       135,
       33
      ],
      "text": "0 years",
      "col": 0
     },
     {
      "at": [
       290,
       130
      ],
      "text": "40",
      "col": 1
     },
     {
      "at": [
       290,
       33
      ],
      "text": "4 years",
      "col": 1
     },
     {
      "at": [
       445,
       101
      ],
      "text": "20",
      "col": 2
     },
     {
      "at": [
       445,
       33
      ],
      "text": "8 years",
      "col": 2
     },
     {
      "at": [
       320,
       4
      ],
      "text": "Closed system, no new input; stated half-life is four years",
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
     "What does persistence describe for a pollutant?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pair contains familiar persistent organic pollutant examples?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is “all synthetic carbon compounds are persistent pollutants” incorrect?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can a POP appear far from where it was used?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does fat solubility alone prove that a substance is toxic?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can contamination continue after new production of a persistent chemical stops?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A pollutant concentration falls at one site after a flood. What cannot be concluded from that observation alone?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional parent compound starts at 80 mg and has a four-year half-life in a closed system with no new inputs. How much parent remains after eight years?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does breakdown of a parent pollutant prove its transformation products are harmless?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which monitoring design better investigates long-range pollutant movement?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.8",
  "name": "Bioaccumulation and Biomagnification",
  "skill": "s8",
  "boardTitle": "Bioaccumulation and Biomagnification",
  "teach": [
   "Bioaccumulation is the buildup of a substance in an organism from its environment and diet when uptake exceeds elimination. Biomagnification is an increase in tissue concentration across successive trophic levels. A growing contaminant amount in one fish does not by itself demonstrate a food-web pattern; compare concentration per tissue mass. Persistent chemicals can be retained as predators eat many prey, but not every pollutant biomagnifies in every food web. Chemical form, metabolism, diet, growth and age influence the result.",
   "Methylmercury and some persistent organic chemicals can reach high concentrations in predatory organisms. Mercury can harm the nervous system. DDT-related residues, especially its metabolite DDE, can thin eggshells in susceptible birds and impair reproduction. These are chemical-specific effects, not a rule that every pollutant causes the same damage. Humans may be exposed through contaminated food webs. A study should compare the same chemical form, tissue basis and food-web relationships rather than simply choose the largest animal.",
   "In a fictional food chain, concentrations are 0.02 mg/kg in zooplankton, 0.10 in small fish and 0.50 in larger fish. Each predator step is fivefold; the larger-fish to zooplankton ratio is 25. A 0.50-kilogram small fish at 0.10 mg/kg contains 0.05 milligrams. Total amount and concentration are distinct. These data are an invented illustration with comparable tissue measurements, not real species values or a consumption recommendation."
  ],
  "eqs": [
   "Within one organism: accumulation; across trophic levels: magnification",
   "Persistent residue in prey → dietary uptake by predator → possible concentration increase",
   "0.50/0.02 = 25-fold; 0.10 mg/kg × 0.50 kg = 0.05 mg"
  ],
  "boards": [
   [
    "Compare concentration per tissue mass",
    "Uptake and elimination control body burden",
    "Not every contaminant magnifies"
   ],
   [
    "Chemical identity determines possible effects",
    "DDE can impair eggshell formation",
    "Size alone does not identify trophic position"
   ],
   [
    "Use comparable tissue measurements",
    "Ratios compare concentrations",
    "Multiply concentration by mass for total amount"
   ]
  ],
  "questions": [
   [
    "One organism takes in a contaminant faster than it eliminates it over time. What process can result?",
    "Bioaccumulation",
    "Proof of biomagnification across a food web",
    "A guaranteed loss of all contaminant",
    "A body burden can increase when uptake exceeds removal. Establishing a trophic pattern requires comparisons among organisms."
   ],
   [
    "A contaminant has higher tissue concentrations at successive trophic levels. What is this called?",
    "Biomagnification",
    "Only dilution",
    "Only increasing total ecosystem biomass",
    "Biomagnification concerns concentration across a food chain, not simply how much biomass exists at each level."
   ],
   [
    "Why does a larger total contaminant amount in a larger fish not alone prove higher concentration?",
    "Concentration also depends on tissue mass",
    "Total amount and concentration are always identical",
    "Fish mass is irrelevant to mg/kg",
    "The same concentration can produce a larger total amount in more tissue. The denominator must be considered."
   ],
   [
    "Must every pollutant biomagnify in every food web?",
    "No; uptake, elimination and chemical properties differ",
    "Yes; every dissolved substance rises tenfold per level",
    "Yes; predators cannot eliminate any substance",
    "Food-web transfer depends on retention, metabolism and exposure. There is no universal fixed multiplier."
   ],
   [
    "Which contaminant form is especially relevant to mercury accumulation in aquatic food webs?",
    "Methylmercury",
    "Only molecular oxygen",
    "Only sodium chloride",
    "Methylmercury can accumulate and magnify in aquatic food webs. Mercury’s chemical form affects its environmental behavior."
   ],
   [
    "Which DDT-related compound is especially associated with eggshell thinning in susceptible birds?",
    "DDE",
    "Dissolved nitrogen gas",
    "Ordinary glucose",
    "DDE is a persistent DDT metabolite linked to eggshell thinning. The response is not a universal effect of all chemicals."
   ],
   [
    "Which human health system is particularly vulnerable to methylmercury toxicity?",
    "The nervous system",
    "Only tooth color",
    "Only the volume of the stomach",
    "Methylmercury is neurotoxic. This identifies a mechanism of concern rather than predicting an outcome from any unspecified exposure."
   ],
   [
    "Fictional comparable tissue concentrations are 0.10 mg/kg in prey fish and 0.50 mg/kg in their predators. What is the predator-to-prey concentration ratio?",
    "5",
    "0.2",
    "0.40",
    "Dividing 0.50 by 0.10 gives five. Subtraction gives an absolute concentration difference, not the ratio."
   ],
   [
    "A fictional food chain has 0.02 mg/kg in zooplankton and 0.50 mg/kg in larger fish. What is the fish-to-zooplankton concentration ratio?",
    "25",
    "0.48",
    "0.04",
    "The ratio is 0.50 divided by 0.02, or 25. Both measurements must use comparable concentration units."
   ],
   [
    "A fictional 0.50 kg fish has a whole-body concentration of 0.10 mg/kg. What total contaminant amount does it contain?",
    "0.05 mg",
    "0.20 mg",
    "5 mg",
    "Multiplying mass by mass-normalized concentration cancels kilograms and leaves 0.05 milligrams."
   ],
   [
    "Why should investigators compare matching tissue types and age classes where appropriate?",
    "Tissue composition and exposure history can influence measured concentration",
    "Every tissue has an identical contaminant level",
    "Age affects only the length of the animal’s name",
    "Unmatched tissues or ages can confound a trophic comparison. Consistent sampling improves interpretation."
   ],
   [
    "A large herbivore and a small predator are compared. Does body size alone identify which is at a higher trophic level?",
    "No; diet and food-web relationships determine trophic position",
    "Yes; the larger animal is always higher",
    "Yes; all small animals are primary producers",
    "Trophic position describes feeding relationships. Body size is not its definition."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Distinguish the two concentration patterns",
    "head": "Pattern",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "One organism over time",
      "Possible bioaccumulation"
     ],
     [
      "Successive trophic levels",
      "Possible biomagnification"
     ],
     [
      "Larger total contaminant amount",
      "Need tissue mass to compare concentration"
     ],
     [
      "Matching samples",
      "Same chemical form and tissue basis"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Effects are chemical-specific",
    "head": "Example",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Methylmercury",
      "Can harm the nervous system"
     ],
     [
      "DDE from DDT",
      "Can thin eggshells in susceptible birds"
     ],
     [
      "Predatory feeding",
      "Can increase exposure to retained residues"
     ],
     [
      "Body size alone",
      "Does not define trophic position"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Fictional comparable food-chain concentrations",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      91,
      60
     ],
     "P1": [
      551,
      60
     ],
     "P2": [
      105,
      64.63999999999999
     ],
     "P3": [
      165,
      64.63999999999999
     ],
     "P4": [
      165,
      60
     ],
     "P5": [
      105,
      60
     ],
     "P6": [
      260,
      83.19999999999999
     ],
     "P7": [
      320,
      83.19999999999999
     ],
     "P8": [
      320,
      60
     ],
     "P9": [
      260,
      60
     ],
     "P10": [
      415,
      176
     ],
     "P11": [
      475,
      176
     ],
     "P12": [
      475,
      60
     ],
     "P13": [
      415,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P2P3P4P5",
      "col": 0
     },
     {
      "v": "P6P7P8P9",
      "col": 1
     },
     {
      "v": "P10P11P12P13",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Tissue concentration (mg/kg)",
      "col": 0
     },
     {
      "at": [
       135,
       76.63999999999999
      ],
      "text": "0.02",
      "col": 0
     },
     {
      "at": [
       135,
       33
      ],
      "text": "Zooplankton",
      "col": 0
     },
     {
      "at": [
       290,
       95.19999999999999
      ],
      "text": "0.1",
      "col": 1
     },
     {
      "at": [
       290,
       33
      ],
      "text": "Small fish",
      "col": 1
     },
     {
      "at": [
       445,
       188
      ],
      "text": "0.5",
      "col": 2
     },
     {
      "at": [
       445,
       33
      ],
      "text": "Larger fish",
      "col": 2
     },
     {
      "at": [
       320,
       4
      ],
      "text": "Fivefold per step; 25-fold from zooplankton to larger fish",
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
     "One organism takes in a contaminant faster than it eliminates it over time. What process can result?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A contaminant has higher tissue concentrations at successive trophic levels. What is this called?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why does a larger total contaminant amount in a larger fish not alone prove higher concentration?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Must every pollutant biomagnify in every food web?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which contaminant form is especially relevant to mercury accumulation in aquatic food webs?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which DDT-related compound is especially associated with eggshell thinning in susceptible birds?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which human health system is particularly vulnerable to methylmercury toxicity?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fictional comparable tissue concentrations are 0.10 mg/kg in prey fish and 0.50 mg/kg in their predators. What is the predator-to-prey concentration ratio?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional food chain has 0.02 mg/kg in zooplankton and 0.50 mg/kg in larger fish. What is the fish-to-zooplankton concentration ratio?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional 0.50 kg fish has a whole-body concentration of 0.10 mg/kg. What total contaminant amount does it contain?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why should investigators compare matching tissue types and age classes where appropriate?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A large herbivore and a small predator are compared. Does body size alone identify which is at a higher trophic level?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.9",
  "name": "Solid Waste Disposal",
  "skill": "s9",
  "boardTitle": "Solid Waste Disposal",
  "teach": [
   "Municipal solid waste includes discarded household and commercial materials such as packaging and food scraps. In this lesson, the focus is ordinary discarded solids; legal waste categories can also include certain liquids or sludges. Engineered landfills use barriers and management systems to reduce releases. A liner limits seepage, leachate collection removes contaminated liquid for treatment, stormwater controls reduce incoming runoff, and a cover limits infiltration and exposure. These measures reduce risks rather than guarantee that leakage can never occur.",
   "Microbial decomposition depends on the waste, moisture, temperature and oxygen conditions. Oxygen-poor decomposition of biodegradable material can generate methane and carbon dioxide. Gas collection can reduce methane release and support energy recovery; gas is distinct from liquid leachate. Incineration reduces waste volume and can recover energy, but leaves ash and produces emissions requiring control. Metals do not disappear when organic material burns. Landfill capacity calculations must state assumptions about compaction, cover and daily input.",
   "Discarded electronics may contain recoverable metals and hazardous constituents, so appropriate recovery matters. Illegal dumping can contaminate land or water. Water collected in discarded tires can provide mosquito habitat, while litter and fishing gear can be ingested or entangle wildlife. Ocean garbage patches are broad, shifting accumulation areas, often containing many small plastic pieces; they are not continuous solid islands one could stand on. Prevention and collection near sources can reduce new inputs, while cleanup has practical limits."
  ],
  "eqs": [
   "Waste + infiltrating water → leachate; liner and collection reduce release",
   "Fictional capacity: 10,000 m³ / 50 m³/day = 200 days",
   "Discarded material → water/land transport → ingestion, entanglement or chemical exposure"
  ],
  "boards": [
   [
    "Liners and collection have different roles",
    "Keep stormwater separate where designed",
    "Engineered controls still need maintenance"
   ],
   [
    "Anaerobic decomposition can generate methane",
    "Incineration leaves ash and emissions",
    "Capacity depends on volume added per day"
   ],
   [
    "E-waste can contain valuable and hazardous materials",
    "Standing water in tires can support mosquitoes",
    "Garbage patches are dispersed accumulation areas"
   ]
  ],
  "questions": [
   [
    "What is the main protective role of a landfill liner?",
    "Limit movement of leachate into underlying soil and groundwater",
    "Disinfect every waste item",
    "Collect methane by itself",
    "A liner is a barrier to liquid movement. Gas collection and disinfection are different mechanisms."
   ],
   [
    "What does a leachate collection system manage?",
    "Contaminated liquid draining through waste",
    "Only clean atmospheric nitrogen",
    "Only the electricity produced by a generator",
    "Water contacting waste can carry dissolved or suspended contaminants. Collection allows controlled treatment or disposal."
   ],
   [
    "Why manage stormwater at a landfill?",
    "Reduce uncontrolled runoff and water entering the waste",
    "Guarantee that decomposition requires no moisture",
    "Replace the need for every other control",
    "Water management limits transport and leachate generation. It complements liners, covers and monitoring."
   ],
   [
    "Which conditions commonly support methane generation in decomposing landfill organics?",
    "Oxygen-poor conditions with suitable microbial activity",
    "Only completely dry, sterile glass",
    "Only abundant oxygen with no organic matter",
    "Methanogenic decomposition depends on organic material and anaerobic conditions, with moisture and temperature also influencing activity."
   ],
   [
    "Does landfill gas collection replace leachate collection?",
    "No; gas and contaminated liquid require different systems",
    "Yes; methane wells automatically remove all liquid contaminants",
    "Yes; all landfill pollution is one phase",
    "Controls address different transport pathways. Capturing gas does not establish that leachate is managed."
   ],
   [
    "What remains after waste incineration even when volume is reduced?",
    "Ash and a gas stream requiring appropriate management",
    "No matter of any kind",
    "Only reusable drinking water",
    "Combustion transforms materials into gases and residues. Reduced volume does not mean all pollution or mass has disappeared."
   ],
   [
    "Why must incinerator ash be evaluated for contaminants?",
    "Noncombustible constituents such as metals can remain in it",
    "Burning destroys every metal atom",
    "All ash is automatically suitable for unrestricted use",
    "Metals and other residues can remain or concentrate in ash. Its management depends on its composition and applicable requirements."
   ],
   [
    "A fictional landfill has 10,000 m³ available and receives a net 50 m³/day, with cover and compaction already included. How long does that capacity last?",
    "200 days",
    "500000 days",
    "20 days",
    "Divide available volume by net daily use. The stated net input avoids counting cover or compaction twice."
   ],
   [
    "Why can discarded electronics need specialized recovery?",
    "They may contain both valuable materials and hazardous constituents",
    "Every electronic device contains exactly the same chemicals",
    "Electronics cannot release substances under any conditions",
    "Recovery can conserve materials and manage hazards. Device composition and processing methods matter."
   ],
   [
    "How can discarded tires contribute to mosquito exposure?",
    "They can hold water that supports mosquito development",
    "Rubber directly creates viruses from sunlight",
    "Dry tires always contain every mosquito species",
    "Container water can provide breeding habitat for some mosquitoes. The material does not itself create a pathogen."
   ],
   [
    "Which description of ocean garbage patches is accurate?",
    "Large accumulation areas with dispersed debris, including small plastics",
    "Continuous solid islands of plastic land",
    "Areas containing only intact bottles and no small particles",
    "Currents concentrate debris unevenly over broad regions. The term does not imply a solid surface or one uniform material."
   ],
   [
    "Does calling a material recyclable guarantee it is collected and processed in every community?",
    "No; collection systems, material condition and facilities vary",
    "Yes; a label proves actual recovery everywhere",
    "Yes; transport and contamination are irrelevant",
    "A material property or label is not evidence of local collection and successful processing. Actual systems determine recovery."
   ]
  ],
  "check": [
   "A fictional landfill has 7200 m³ remaining and uses a net 40 m³ per day, including cover and compaction. How many days remain at that rate?",
   "180 days",
   "288000 days",
   "18 days",
   "Use remaining volume divided by the net daily volume requirement."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Landfill barriers and collection serve different roles",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      125,
      180
     ],
     "P1": [
      510,
      180
     ],
     "P2": [
      510,
      81
     ],
     "P3": [
      125,
      81
     ],
     "P4": [
      114,
      72
     ],
     "P5": [
      525,
      72
     ],
     "P6": [
      145,
      90
     ],
     "P7": [
      525,
      90
     ],
     "P8": [
      357,
      169
     ],
     "P9": [
      357,
      202
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 5
     },
     {
      "v": "P6P7",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P8P9",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       312,
       147
      ],
      "text": "Waste under cover",
      "col": 1
     },
     {
      "at": [
       312,
       122
      ],
      "text": "Leachate drains downward",
      "col": 1
     },
     {
      "at": [
       198,
       33
      ],
      "text": "Liner barrier",
      "col": 2
     },
     {
      "at": [
       474,
       34
      ],
      "text": "Collection → treatment",
      "col": 0
     },
     {
      "at": [
       430,
       203
      ],
      "text": "Gas collection",
      "col": 3
     },
     {
      "at": [
       197,
       201
      ],
      "text": "Cover limits entry",
      "col": 1
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Incineration changes waste into residual streams",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      239,
      171
     ],
     "P1": [
      399,
      171
     ],
     "P2": [
      399,
      95
     ],
     "P3": [
      239,
      95
     ],
     "P4": [
      86,
      134
     ],
     "P5": [
      232,
      134
     ],
     "P6": [
      405,
      136
     ],
     "P7": [
      546,
      136
     ],
     "P8": [
      319,
      89
     ],
     "P9": [
      319,
      50
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P6P7",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P8P9",
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
     }
    ],
    "notes": [
     {
      "at": [
       319,
       142
      ],
      "text": "Combustion",
      "col": 0
     },
     {
      "at": [
       319,
       116
      ],
      "text": "Energy recovery",
      "col": 0
     },
     {
      "at": [
       153,
       168
      ],
      "text": "Solid waste",
      "col": 1
     },
     {
      "at": [
       484,
       172
      ],
      "text": "Gas + controls",
      "col": 2
     },
     {
      "at": [
       319,
       24
      ],
      "text": "Ash still needs management",
      "col": 3
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Discarded materials have several impact pathways",
    "head": "Material",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Electronics",
      "Recoverable materials and possible hazards"
     ],
     [
      "Water-holding tires",
      "Can provide mosquito habitat"
     ],
     [
      "Fishing gear or litter",
      "Entanglement and ingestion"
     ],
     [
      "Ocean garbage patch",
      "Dispersed debris, not a solid island"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is the main protective role of a landfill liner?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What does a leachate collection system manage?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why manage stormwater at a landfill?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which conditions commonly support methane generation in decomposing landfill organics?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does landfill gas collection replace leachate collection?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What remains after waste incineration even when volume is reduced?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why must incinerator ash be evaluated for contaminants?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional landfill has 10,000 m³ available and receives a net 50 m³/day, with cover and compaction already included. How long does that capacity last?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can discarded electronics need specialized recovery?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can discarded tires contribute to mosquito exposure?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which description of ocean garbage patches is accurate?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does calling a material recyclable guarantee it is collected and processed in every community?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A fictional landfill has 7200 m³ remaining and uses a net 40 m³ per day, including cover and compaction. How many days remain at that rate?"
   ],
   "small": false
  }
 },
 {
  "code": "8.10",
  "name": "Waste Reduction Methods",
  "skill": "s10",
  "boardTitle": "Waste Reduction Methods",
  "teach": [
   "Source reduction prevents waste, for example by avoiding unnecessary packaging or designing durable products. Reuse extends an item’s service without first processing it into raw material. Recycling processes discarded materials into new products; composting biologically transforms suitable organic material. These approaches can reduce disposal and demand for virgin resources, but collection, sorting, contamination, energy and markets affect the outcome. Recycling can use substantially less energy than virgin production for materials such as aluminum; it is not automatically more energy-intensive than extraction.",
   "Managed composting of suitable food scraps, yard material and accepted paper uses oxygen, moisture and appropriate feedstock mixtures to support decomposition into a stable soil amendment. Poor aeration or management can create odors and attract pests. Not every plastic labeled biodegradable belongs in every compost system. Electronic repair and appropriate recycling can extend use and recover materials while controlling hazardous constituents. Landfill gas recovery uses methane generated by decomposition, while burning solid waste directly is a different process. A generator does not itself empty the landfill; final covers and monitoring still matter if a closed site becomes a park.",
   "Define the accounting boundary before calculating a diversion rate. In a fictional community, 1000 tonnes are generated, 250 are recycled and 150 composted, with no overlap or other diversion. Diversion is 400 tonnes, or 40%, leaving 600 tonnes for disposal. If generation later falls to 800 tonnes with the same 40% diversion, disposal becomes 480 tonnes. A higher percentage can coexist with more total waste if generation rises, so report both amounts and rates."
  ],
  "eqs": [
   "Prevent waste → extend use → recover materials; compare full-system effects",
   "Landfill gas → combustion → energy; buried solids remain under management",
   "(250 + 150) / 1000 = 40%; disposal = 600 tonnes"
  ],
  "boards": [
   [
    "Source reduction prevents generation",
    "Reuse preserves the product’s service",
    "Recycling transforms recovered materials"
   ],
   [
    "Composting needs suitable process conditions",
    "Gas recovery differs from burning solid waste",
    "Closed-site reuse requires continued care"
   ],
   [
    "Count each waste stream once",
    "Report quantities as well as percentages",
    "Prevention reduces the generation denominator"
   ]
  ],
  "questions": [
   [
    "Which action is source reduction?",
    "Design packaging to use less material for the same function",
    "Place unchanged waste in a larger landfill",
    "Move a recycling bin farther from the building",
    "Source reduction prevents material from becoming waste. Changing its disposal location does not reduce generation."
   ],
   [
    "A functional laptop is repaired and used longer. Which strategy does this most directly illustrate?",
    "Reuse and life extension",
    "Incineration",
    "Landfill compaction",
    "Continued use preserves the product’s service. It differs from burning the item or processing it into recovered raw materials."
   ],
   [
    "What distinguishes recycling from direct reuse?",
    "Recycling processes discarded material into new products",
    "Recycling requires every item to remain unchanged",
    "Reuse always melts materials into raw feedstock",
    "The distinction concerns the process. Repairing and continuing use differ from material reprocessing."
   ],
   [
    "Why should recycling be compared with virgin-material production using a life-cycle boundary?",
    "Collection and processing have costs, while avoided extraction can save resources and energy",
    "Recycling never uses any energy",
    "Virgin extraction always uses less energy for every material",
    "A fair comparison includes both burdens and avoided production. Results depend on the material and system."
   ],
   [
    "Which conditions support managed aerobic composting?",
    "Suitable organic feedstocks, moisture and oxygen",
    "Complete exclusion of oxygen as its defining requirement",
    "Only intact metal and glass as feedstocks",
    "Aerobic decomposition needs oxygen and suitable material. Moisture and management affect performance and odors."
   ],
   [
    "Why can a poorly managed compost pile develop odors or pest problems?",
    "Process conditions and exposed food can be unsuitable",
    "Composting always sterilizes all nearby material instantly",
    "Every odor proves the material cannot decompose",
    "Aeration, moisture, feedstock balance and handling affect decomposition and nuisance conditions."
   ],
   [
    "Is every product labeled biodegradable suitable for any home compost pile?",
    "No; breakdown conditions and accepted feedstocks differ",
    "Yes; labels guarantee rapid breakdown under all conditions",
    "Yes; temperature and time never matter",
    "Biodegradation depends on conditions and time. A label alone does not establish compatibility with a particular system."
   ],
   [
    "What fuel does a landfill-gas energy project primarily seek to use?",
    "Methane from decomposition",
    "The liner’s plastic as its only required fuel",
    "Only oxygen collected from rainwater",
    "Methane-containing gas can fuel energy generation. Gas recovery is distinct from directly burning the buried solid waste."
   ],
   [
    "Does installing a landfill-gas generator itself remove the buried solid waste?",
    "No; it uses produced gas while the landfill still needs management",
    "Yes; all solids disappear when the generator starts",
    "Yes; covers and groundwater monitoring become unnecessary",
    "Decomposition produces gas, but burning that gas is not excavation or direct combustion of the whole waste mass."
   ],
   [
    "A fictional community generates 1000 tonnes, recycles 250 and composts 150, with no overlap or other diversion. What is the diversion rate?",
    "40%",
    "60%",
    "25%",
    "Recycling plus composting diverts 400 of 1000 tonnes. The 60% remainder is the disposal fraction."
   ],
   [
    "For 1000 tonnes generated with 250 recycled and 150 composted and no other diversion, how much remains for disposal?",
    "600 tonnes",
    "400 tonnes",
    "850 tonnes",
    "Subtract both nonoverlapping diverted streams from generation: 1000−250−150=600 tonnes."
   ],
   [
    "Generation falls to 800 tonnes while 40% is diverted. What amount remains for disposal?",
    "480 tonnes",
    "320 tonnes",
    "800 tonnes",
    "The disposal fraction is 60%. Multiplying 800 by 0.60 gives 480 tonnes; 320 tonnes is diverted."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Choose a waste strategy by its process",
    "head": "Strategy",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Reduce",
      "Prevent unnecessary material use"
     ],
     [
      "Reuse",
      "Extend a product’s useful service"
     ],
     [
      "Recycle",
      "Process material into new products"
     ],
     [
      "Compare",
      "Include collection and avoided extraction"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Landfill-gas energy uses a produced gas stream",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      78,
      171
     ],
     "P1": [
      238,
      171
     ],
     "P2": [
      238,
      86
     ],
     "P3": [
      78,
      86
     ],
     "P4": [
      378,
      171
     ],
     "P5": [
      554,
      171
     ],
     "P6": [
      554,
      86
     ],
     "P7": [
      378,
      86
     ],
     "P8": [
      244,
      135
     ],
     "P9": [
      371,
      135
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 1,
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
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       158,
       143
      ],
      "text": "Buried organics",
      "col": 0
     },
     {
      "at": [
       158,
       114
      ],
      "text": "Decomposition",
      "col": 0
     },
     {
      "at": [
       466,
       143
      ],
      "text": "Captured gas",
      "col": 2
     },
     {
      "at": [
       466,
       114
      ],
      "text": "Fuel for energy",
      "col": 2
     },
     {
      "at": [
       307,
       166
      ],
      "text": "Methane",
      "col": 1
     },
     {
      "at": [
       320,
       32
      ],
      "text": "Using gas does not remove all the remaining buried solids",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Track every stream in the waste account",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      90,
      153
     ],
     "P1": [
      205,
      153
     ],
     "P2": [
      205,
      95
     ],
     "P3": [
      90,
      95
     ],
     "P4": [
      205,
      153
     ],
     "P5": [
      274,
      153
     ],
     "P6": [
      274,
      95
     ],
     "P7": [
      205,
      95
     ],
     "P8": [
      274,
      153
     ],
     "P9": [
      550,
      153
     ],
     "P10": [
      550,
      95
     ],
     "P11": [
      274,
      95
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [],
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
       196
      ],
      "text": "Fictional generation: 1000 tonnes; each tonne counted once",
      "col": 0
     },
     {
      "at": [
       159,
       62
      ],
      "text": "Recycled: 250",
      "col": 0
     },
     {
      "at": [
       320,
       62
      ],
      "text": "Composted: 150",
      "col": 1
     },
     {
      "at": [
       486,
       62
      ],
      "text": "Disposed: 600",
      "col": 2
     },
     {
      "at": [
       320,
       17
      ],
      "text": "400 tonnes diverted = 40%; 600 tonnes disposed = 60%",
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
     "Which action is source reduction?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A functional laptop is repaired and used longer. Which strategy does this most directly illustrate?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What distinguishes recycling from direct reuse?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why should recycling be compared with virgin-material production using a life-cycle boundary?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which conditions support managed aerobic composting?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can a poorly managed compost pile develop odors or pest problems?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Is every product labeled biodegradable suitable for any home compost pile?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What fuel does a landfill-gas energy project primarily seek to use?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does installing a landfill-gas generator itself remove the buried solid waste?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional community generates 1000 tonnes, recycles 250 and composts 150, with no overlap or other diversion. What is the diversion rate?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "For 1000 tonnes generated with 250 recycled and 150 composted and no other diversion, how much remains for disposal?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Generation falls to 800 tonnes while 40% is diverted. What amount remains for disposal?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.11",
  "name": "Sewage Treatment",
  "skill": "s11",
  "boardTitle": "Sewage Treatment",
  "teach": [
   "Wastewater treatment separates solids, reduces oxygen-demanding material and pathogens, and may remove specific nutrients or other contaminants. Screening and grit removal are preliminary physical steps. Primary settling slows flow so settleable solids form sludge while some floating material is removed. Dissolved salts and many dissolved pollutants do not simply settle out. A clear-looking primary effluent is not proof of pathogen removal or drinking-water quality. Match each process to what it actually removes.",
   "Conventional secondary treatment uses microorganisms to consume biodegradable organic matter. In an activated-sludge process, aeration supplies oxygen and mixing; microorganisms form biomass, and a secondary clarifier separates biological solids. Some biomass is returned to maintain the process and excess solids are removed. Products include carbon dioxide, water and new cells; sludge is not purely inorganic. Other secondary systems use attached microbial growth. Sludge requires separate treatment and management, and raw sewage is not automatically a suitable fertilizer.",
   "Advanced treatment targets specified remaining pollutants, for example filtration, phosphorus removal or biological nitrogen removal. Nitrification converts ammonium to nitrate under aerobic conditions; denitrification can convert nitrate to nitrogen gas under suitable low-oxygen conditions. Merely converting ammonium to nitrate does not remove nitrogen from the water. Chlorine, ozone or UV can disinfect when correctly applied; UV inactivates microbes without filtering out dissolved chemicals. Disinfection is not a guarantee that every chemical or organism has vanished.",
   "Treatment performance can be calculated from concentrations only when comparable flow conditions are stated. In a fictional plant at equal inlet and outlet flow, BOD falls from 200 to 20 mg/L, a 90% concentration and load reduction. At an outlet flow of one million litres per day, 20 mg/L represents 20 kilograms of oxygen-demand equivalent per day. This BOD load is not the mass of a single chemical. Plant operation, disinfection, residuals and receiving-water effects still need evaluation."
  ],
  "eqs": [
   "Screening → grit removal → primary settling; dissolved substances can remain",
   "Organic matter + oxygen → microbial metabolism + new biomass; clarify and manage solids",
   "Ammonium → nitrate: conversion; nitrate → N₂ gas: possible nitrogen removal",
   "(200 − 20)/200 = 90%; 20 mg/L × 1,000,000 L/day = 20 kg/day"
  ],
  "boards": [
   [
    "Physical separation removes particular solids",
    "Settling produces primary sludge",
    "Clear appearance does not establish safety"
   ],
   [
    "Secondary treatment is biological",
    "Aeration supports aerobic microorganisms",
    "Sludge includes organic microbial biomass"
   ],
   [
    "Advanced treatment has specific targets",
    "Nitrification alone is not nitrogen removal",
    "Disinfection differs from chemical removal"
   ],
   [
    "Check comparable flow and sampling",
    "BOD load is oxygen-demand equivalent",
    "Evaluate effluent and residuals together"
   ]
  ],
  "questions": [
   [
    "Which process most directly removes large debris before later wastewater treatment?",
    "Screening",
    "Denitrification alone",
    "UV exposure alone",
    "Screens physically intercept suitable debris. Biological nitrogen conversion and UV disinfection do not serve the same mechanical role."
   ],
   [
    "What happens in primary settling?",
    "Settleable solids separate as flow slows",
    "Every dissolved ion falls out of solution",
    "All pathogens are guaranteed destroyed",
    "Sedimentation removes material able to settle under the conditions. Dissolved constituents and pathogens can remain."
   ],
   [
    "Which statement identifies conventional secondary treatment?",
    "Microorganisms consume biodegradable organic matter",
    "Only coarse screens intercept large sticks",
    "Only a cover prevents rainfall entering a landfill",
    "Biological oxidation and biomass formation distinguish secondary treatment from preliminary screening and landfill management."
   ],
   [
    "Why is an activated-sludge aeration basin supplied with air?",
    "Provide oxygen and mixing for the biological process",
    "Guarantee every dissolved metal disappears",
    "Replace all microorganisms with oxygen bubbles",
    "Aeration supports aerobic metabolism and contact. It does not establish complete removal of every contaminant."
   ],
   [
    "Why is calling all secondary sludge inorganic inaccurate?",
    "It includes microbial biomass and other organic material",
    "Microorganisms contain no carbon",
    "Every organic molecule becomes a mineral before settling",
    "New cells and retained material contribute to sludge. Biological treatment does not convert every solid into purely inorganic matter."
   ],
   [
    "What is the purpose of returning some activated sludge from the clarifier?",
    "Maintain microorganisms in the biological treatment process",
    "Return all captured pollutants directly to the river",
    "Remove the need for every future treatment step",
    "Returning biomass helps sustain the microbial population. Excess solids still need controlled removal and management."
   ],
   [
    "Which process converts ammonium to nitrate under suitable aerobic conditions?",
    "Nitrification",
    "Denitrification to nitrogen gas",
    "Only physical screening",
    "Nitrifying microorganisms oxidize ammonium to nitrate. This changes nitrogen’s form rather than removing all nitrogen from the water."
   ],
   [
    "Why is nitrification alone not complete nitrogen removal?",
    "Nitrate still contains nitrogen in the water",
    "Nitrification destroys nitrogen atoms",
    "Ammonium contains no nitrogen to begin with",
    "Conversion preserves the element in another dissolved form. Removal needs an additional pathway such as denitrification or separation."
   ],
   [
    "What can denitrification do under suitable conditions?",
    "Convert nitrate to nitrogen gas",
    "Convert every solid into chlorine",
    "Increase dissolved oxygen by photosynthesis",
    "Microbial nitrate reduction can release nitrogen as gas. Appropriate environmental conditions and substrates are needed."
   ],
   [
    "Which claim correctly describes UV wastewater disinfection?",
    "It can inactivate microorganisms without physically filtering dissolved chemicals",
    "It removes every dissolved chemical by sieving",
    "It guarantees drinking-water quality regardless of the rest of treatment",
    "UV acts on microbes when exposure conditions are adequate. Chemical removal and overall water quality require additional evaluation."
   ],
   [
    "Why does clear-looking treated water still require performance measurements?",
    "Pathogens or dissolved pollutants may remain despite clarity",
    "Clarity proves every pollutant is absent",
    "Only visible particles can affect receiving waters",
    "Appearance does not measure all hazards. Treatment verification must test the relevant endpoints."
   ],
   [
    "At equal inlet and outlet flow, fictional BOD decreases from 200 to 20 mg/L. What percentage reduction is achieved?",
    "90%",
    "10%",
    "1000%",
    "The decrease is 180 of the initial 200 mg/L. Equal flow makes the load reduction fraction match the concentration reduction."
   ],
   [
    "An effluent has BOD of 20 mg/L and flow of 1,000,000 L/day. What BOD load is discharged?",
    "20 kg of oxygen-demand equivalent per day",
    "20000 kg of oxygen-demand equivalent per day",
    "0.02 kg of oxygen-demand equivalent per day",
    "The product is 20 million mg/day, equal to 20 kg/day. BOD expresses oxygen demand rather than one pollutant’s chemical mass."
   ],
   [
    "Why must sewage sludge be managed separately from treated effluent?",
    "Removed solids can contain organic matter, pathogens and contaminants",
    "Settling makes every captured contaminant cease to exist",
    "Sludge is always pure fertilizer ready for any use",
    "Separation transfers material into a residual stream. Further treatment and appropriate handling depend on its composition and intended use."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Begin wastewater treatment with physical separation",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      80,
      170
     ],
     "P1": [
      224,
      170
     ],
     "P2": [
      224,
      96
     ],
     "P3": [
      80,
      96
     ],
     "P4": [
      227,
      133
     ],
     "P5": [
      252,
      133
     ],
     "P6": [
      258,
      170
     ],
     "P7": [
      402,
      170
     ],
     "P8": [
      402,
      96
     ],
     "P9": [
      258,
      96
     ],
     "P10": [
      405,
      133
     ],
     "P11": [
      430,
      133
     ],
     "P12": [
      436,
      170
     ],
     "P13": [
      580,
      170
     ],
     "P14": [
      580,
      96
     ],
     "P15": [
      436,
      96
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
       140
      ],
      "text": "Screens",
      "col": 0
     },
     {
      "at": [
       152,
       115
      ],
      "text": "Large debris",
      "col": 0
     },
     {
      "at": [
       330,
       140
      ],
      "text": "Grit removal",
      "col": 1
     },
     {
      "at": [
       330,
       115
      ],
      "text": "Dense particles",
      "col": 1
     },
     {
      "at": [
       508,
       140
      ],
      "text": "Settling",
      "col": 2
     },
     {
      "at": [
       508,
       115
      ],
      "text": "Primary sludge",
      "col": 2
     },
     {
      "at": [
       320,
       40
      ],
      "text": "Dissolved substances and pathogens can remain",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Secondary treatment uses and separates biomass",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      83,
      172
     ],
     "P1": [
      245,
      172
     ],
     "P2": [
      245,
      90
     ],
     "P3": [
      83,
      90
     ],
     "P4": [
      389,
      172
     ],
     "P5": [
      547,
      172
     ],
     "P6": [
      547,
      90
     ],
     "P7": [
      389,
      90
     ],
     "P8": [
      251,
      138
     ],
     "P9": [
      382,
      138
     ],
     "P10": [
      391,
      76
     ],
     "P11": [
      246,
      76
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 2,
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
      "v": "P4P5P6P7",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       164,
       144
      ],
      "text": "Aerated microbes",
      "col": 0
     },
     {
      "at": [
       164,
       117
      ],
      "text": "Consume organics",
      "col": 0
     },
     {
      "at": [
       468,
       145
      ],
      "text": "Clarifier",
      "col": 1
     },
     {
      "at": [
       468,
       118
      ],
      "text": "Separates biomass",
      "col": 1
     },
     {
      "at": [
       317,
       170
      ],
      "text": "Mixed liquid",
      "col": 2
     },
     {
      "at": [
       320,
       46
      ],
      "text": "Some biomass returns; excess solids removed",
      "col": 3
     },
     {
      "at": [
       320,
       7
      ],
      "text": "Sludge contains organic microbial biomass",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Nitrogen conversion is not always nitrogen removal",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      75,
      160
     ],
     "P1": [
      211,
      160
     ],
     "P2": [
      211,
      91
     ],
     "P3": [
      75,
      91
     ],
     "P4": [
      252,
      160
     ],
     "P5": [
      388,
      160
     ],
     "P6": [
      388,
      91
     ],
     "P7": [
      252,
      91
     ],
     "P8": [
      429,
      160
     ],
     "P9": [
      565,
      160
     ],
     "P10": [
      565,
      91
     ],
     "P11": [
      429,
      91
     ],
     "P12": [
      216,
      126
     ],
     "P13": [
      247,
      126
     ],
     "P14": [
      393,
      126
     ],
     "P15": [
      424,
      126
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P12P13",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
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
       143,
       134
      ],
      "text": "Ammonium",
      "col": 0
     },
     {
      "at": [
       143,
       107
      ],
      "text": "NH₄⁺",
      "col": 0
     },
     {
      "at": [
       320,
       134
      ],
      "text": "Nitrate",
      "col": 1
     },
     {
      "at": [
       320,
       107
      ],
      "text": "NO₃⁻",
      "col": 1
     },
     {
      "at": [
       497,
       134
      ],
      "text": "Nitrogen gas",
      "col": 2
     },
     {
      "at": [
       497,
       107
      ],
      "text": "N₂",
      "col": 2
     },
     {
      "at": [
       222,
       183
      ],
      "text": "Nitrification",
      "col": 0
     },
     {
      "at": [
       422,
       183
      ],
      "text": "Denitrification",
      "col": 1
     },
     {
      "at": [
       320,
       37
      ],
      "text": "Nitrate still contains nitrogen; gas can leave the water",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Fictional BOD treatment performance",
    "head": "Measurement",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Inlet BOD, equal inlet/outlet flow",
      "200 mg/L"
     ],
     [
      "Outlet BOD",
      "20 mg/L; 90% reduction"
     ],
     [
      "Outlet flow",
      "1,000,000 L/day"
     ],
     [
      "Outlet BOD load",
      "20 kg oxygen-demand equivalent/day"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which process most directly removes large debris before later wastewater treatment?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What happens in primary settling?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement identifies conventional secondary treatment?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is an activated-sludge aeration basin supplied with air?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is calling all secondary sludge inorganic inaccurate?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is the purpose of returning some activated sludge from the clarifier?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which process converts ammonium to nitrate under suitable aerobic conditions?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is nitrification alone not complete nitrogen removal?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What can denitrification do under suitable conditions?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which claim correctly describes UV wastewater disinfection?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why does clear-looking treated water still require performance measurements?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "At equal inlet and outlet flow, fictional BOD decreases from 200 to 20 mg/L. What percentage reduction is achieved?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An effluent has BOD of 20 mg/L and flow of 1,000,000 L/day. What BOD load is discharged?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why must sewage sludge be managed separately from treated effluent?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.12",
  "name": "Lethal Dose 50% (LD50)",
  "skill": "s12",
  "boardTitle": "Lethal Dose 50% (LD50)",
  "teach": [
   "LD50 is a median lethal dose estimated for a defined test population and observation period. It corresponds to 50% mortality under the specified species, route and study conditions, often reported as milligrams of substance per kilogram of body mass. It is not 50% of a container, a time until death or a universal human dose. Under comparable conditions, a smaller LD50 indicates greater acute lethal toxicity. Different routes, species and durations can produce different values, and the estimate has uncertainty.",
   "A fictional fitted mortality curve reaches 50% at 20 mg/kg; that is the estimated LD50 for that stated model. A separate fictional group with 10 deaths among 20 organisms has 50% observed mortality, but the small sample does not prove an exact population response. Doses below an LD50 may still cause deaths or nonlethal effects. LD50 alone says little about chronic effects or realistic exposure, and animal data cannot simply be treated as a precise human safety limit. LC50 instead reports a lethal concentration in an exposure medium for a specified duration."
  ],
  "eqs": [
   "Comparable fictional LD50 values: 20 mg/kg is more acutely toxic than 200 mg/kg",
   "Observed mortality = 10/20 × 100 = 50%; estimate is not a safety threshold"
  ],
  "boards": [
   [
    "LD50 describes a defined lethality endpoint",
    "Compare matched species, route and duration",
    "Lower comparable LD50 means greater acute toxicity"
   ],
   [
    "Separate an estimate from individual outcomes",
    "Lower doses can still cause harm",
    "LC50 is a concentration, not a body-mass dose"
   ]
  ],
  "questions": [
   [
    "What does the 50 in LD50 represent?",
    "A median lethal endpoint of 50% mortality under specified conditions",
    "Fifty minutes of exposure in every study",
    "Fifty percent of the chemical container",
    "The subscript refers to the fraction of the test population associated with the lethality estimate, not a universal time or container fraction."
   ],
   [
    "Which unit commonly expresses an LD50 dose normalized to body mass?",
    "mg/kg",
    "Only hours",
    "Only litres per second",
    "Milligrams of substance per kilogram of body mass expresses a mass-normalized dose. Time and flow are different quantities."
   ],
   [
    "Two fictional chemicals have LD50 values of 20 and 200 mg/kg under matched conditions. Which has greater acute lethal toxicity by this measure?",
    "The chemical with 20 mg/kg",
    "The chemical with 200 mg/kg",
    "They must be identical because both have an LD50",
    "A smaller dose associated with the same lethal endpoint indicates greater acute toxicity in that comparison."
   ],
   [
    "Why should oral LD50 in one species not be directly ranked against skin-exposure LD50 in another without qualification?",
    "Species and exposure route differ",
    "Body-mass units automatically eliminate every biological difference",
    "The chemical name alone guarantees comparability",
    "Toxicity estimates depend on test conditions. Shared units do not remove route and species differences."
   ],
   [
    "A fictional fitted mortality curve reaches 50% at 20 mg/kg. What is the curve’s estimated LD50?",
    "20 mg/kg",
    "50 mg/kg",
    "0.4 mg/kg",
    "Read the dose corresponding to the 50% mortality level. The response percentage is not itself a dose."
   ],
   [
    "In a fictional test group, 10 of 20 organisms die during the observation period. What mortality percentage was observed?",
    "50%",
    "10%",
    "200%",
    "Divide the number of deaths by the number observed. Ten out of twenty is half the group."
   ],
   [
    "Does exposure below an LD50 guarantee survival and no other harm?",
    "No; deaths or nonlethal effects can occur below it",
    "Yes; LD50 is the first possible harmful dose",
    "Yes; every organism has the same response threshold",
    "An LD50 is a population-level lethal endpoint. It is not a universal no-effect threshold."
   ],
   [
    "Does an acute LD50 alone establish the consequences of years of repeated exposure?",
    "No; chronic endpoints and exposure patterns require other evidence",
    "Yes; all time scales have identical effects",
    "Yes; repeated exposure cannot change risk",
    "Duration, accumulation and different endpoints matter. One acute lethality measure does not answer every chronic-health question."
   ],
   [
    "How does LC50 differ from LD50?",
    "LC50 specifies a concentration in an exposure medium for stated conditions and duration",
    "LC50 always means 50 kilograms of chemical",
    "LC50 measures only the chemical’s color",
    "Concentration-based exposures differ from a dose normalized to body mass. Conditions and observation duration must still be specified."
   ],
   [
    "Why does observing 50% mortality in a small group not prove the exact population LD50?",
    "Sampling variation and the fitted relationship create uncertainty",
    "A percentage can never be calculated for a group",
    "Every organism outside the study must respond identically",
    "Observed proportions are samples. Estimating a population dose-response relationship requires statistical treatment and defined conditions."
   ]
  ],
  "check": [
   "Two fictional chemicals tested by the same route in the same species and observation period have LD50 values of 40 and 400 mg/kg. Which is more acutely toxic by this measure?",
   "The one with LD50 of 40 mg/kg",
   "The one with LD50 of 400 mg/kg",
   "They must have identical acute toxicity",
   "Compare the dose needed to reach the same mortality endpoint under matched conditions."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Read an LD50 with its study conditions",
    "head": "Feature",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Endpoint",
      "Estimated 50% mortality"
     ],
     [
      "Dose units",
      "Often mg substance/kg body mass"
     ],
     [
      "Comparison",
      "Match species, route and duration"
     ],
     [
      "Limit",
      "Not a guaranteed safe dose"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Read dose at the median lethal response",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      120,
      58
     ],
     "P1": [
      517,
      58
     ],
     "P2": [
      120,
      58
     ],
     "P3": [
      120,
      201
     ],
     "P4": [
      120,
      58
     ],
     "P5": [
      210,
      71.19999999999999
     ],
     "P6": [
      210,
      71.19999999999999
     ],
     "P7": [
      300,
      124
     ],
     "P8": [
      300,
      124
     ],
     "P9": [
      480,
      176.8
     ],
     "P10": [
      120,
      124
     ],
     "P11": [
      300,
      124
     ],
     "P12": [
      300,
      124
     ],
     "P13": [
      300,
      58
     ],
     "P14": [
      300,
      124
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P4P5",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P6P7",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P8P9",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P12P13",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 2
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       216
      ],
      "text": "Illustrative fitted mortality (%)",
      "col": 0
     },
     {
      "at": [
       120,
       33
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       210,
       33
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       300,
       33
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       480,
       33
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       94,
       53
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       94,
       119
      ],
      "text": "50",
      "col": 0
     },
     {
      "at": [
       94,
       185
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       423,
       185
      ],
      "text": "LD50: 20 mg/kg",
      "col": 1
     },
     {
      "at": [
       320,
       6
      ],
      "text": "Dose (mg/kg); fictional model with specified conditions",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P14",
      "r": 4,
      "col": 1
     }
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What does the 50 in LD50 represent?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which unit commonly expresses an LD50 dose normalized to body mass?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two fictional chemicals have LD50 values of 20 and 200 mg/kg under matched conditions. Which has greater acute lethal toxicity by this measure?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why should oral LD50 in one species not be directly ranked against skin-exposure LD50 in another without qualification?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional fitted mortality curve reaches 50% at 20 mg/kg. What is the curve’s estimated LD50?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "In a fictional test group, 10 of 20 organisms die during the observation period. What mortality percentage was observed?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does exposure below an LD50 guarantee survival and no other harm?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does an acute LD50 alone establish the consequences of years of repeated exposure?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How does LC50 differ from LD50?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why does observing 50% mortality in a small group not prove the exact population LD50?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "Two fictional chemicals tested by the same route in the same species and observation period have LD50 values of 40 and 400 mg/kg. Which is more acutely toxic by this measure?"
   ],
   "small": false
  }
 },
 {
  "code": "8.13",
  "name": "Dose Response Curve",
  "skill": "s13",
  "boardTitle": "Dose Response Curve",
  "teach": [
   "A dose-response graph specifies an exposure measure on one axis and a defined effect on the other. The effect might be mortality, an enzyme change or reduced growth; a 50% response is an LD50 only when the endpoint is lethality. Compare curves using matched units, species, exposure routes and times. Under matched conditions, a mortality curve shifted toward lower doses indicates that the same lethal response occurs at a smaller dose. Do not assume every biological response is linear or follows an identical curve shape.",
   "Interpolation estimates between measured doses only with a stated model. In an invented study, 20 mg/kg corresponds to 20% mortality and 40 mg/kg to 60%. If the segment is assumed linear, 50% occurs at 35 mg/kg: the 30-percentage-point rise is three quarters of the 40-point interval, so the dose rises 15 mg/kg above 20. Without that assumption, the exact value is not established by those two observations. No observed effect in a finite sample also does not prove zero population risk."
  ],
  "eqs": [
   "Read the endpoint first: 50% reduced growth is not 50% mortality",
   "20 + [(50 − 20)/(60 − 20)] × (40 − 20) = 35 mg/kg"
  ],
  "boards": [
   [
    "Identify dose units and the response endpoint",
    "Match conditions before comparing curves",
    "Curve shape must be supported by evidence"
   ],
   [
    "Interpolation needs a model",
    "Do not infer outside the observed range casually",
    "No observed effect is not proof of zero risk"
   ]
  ],
  "questions": [
   [
    "A graph’s vertical axis is percent mortality. What does the horizontal coordinate at 50% mortality estimate?",
    "LD50, if the horizontal axis is dose and test conditions are specified",
    "The time until every organism dies",
    "The highest guaranteed safe dose",
    "The median lethal dose is read from a dose-mortality relationship under defined conditions. It is not a universal safety limit."
   ],
   [
    "A graph shows a 50% reduction in plant growth. Is that automatically an LD50?",
    "No; growth reduction is a different endpoint from mortality",
    "Yes; every percentage of fifty means lethality",
    "Yes; growth and death are identical measurements",
    "The response label determines the endpoint. A sublethal growth effect cannot be relabeled as a lethal dose."
   ],
   [
    "Under matched conditions, chemical A reaches 50% mortality at a lower dose than B. What follows?",
    "A has greater acute lethal toxicity by that endpoint",
    "B is necessarily more acutely toxic by that endpoint",
    "Their real-world risks are identical under every exposure",
    "A lower dose for the same lethal response indicates greater acute toxicity. Risk also depends on actual exposure and other endpoints."
   ],
   [
    "Why must axis units be checked before comparing two curves?",
    "A numerical dose in grams differs from the same number in milligrams",
    "Units never affect a numerical comparison",
    "The curve with the larger printed numbers is always safer",
    "Units set the scale. Comparable effects require compatible dose measures and matching study conditions."
   ],
   [
    "In a fictional study, mortality is 20% at 20 mg/kg and 60% at 40 mg/kg. Assuming a straight line between those points, where is 50% mortality?",
    "35 mg/kg",
    "30 mg/kg",
    "50 mg/kg",
    "Fifty percent is three quarters of the way from 20% to 60%. Three quarters of the 20 mg/kg dose interval is 15 mg/kg."
   ],
   [
    "Without an interpolation model, do observations of 20% mortality at 20 mg/kg and 60% at 40 mg/kg establish an exact LD50?",
    "No; the relationship between observations remains uncertain",
    "Yes; the arithmetic midpoint must always be the LD50",
    "Yes; the higher tested dose is always the exact LD50",
    "A smooth or linear relationship cannot simply be assumed from two data points. Additional data or a justified model are needed."
   ],
   [
    "What is extrapolation in a dose-response analysis?",
    "Estimating responses outside the studied dose range",
    "Only reading a measured point directly",
    "Only converting milligrams to grams",
    "Extrapolation goes beyond observed doses and can add model uncertainty. Unit conversion alone does not extend the data range."
   ],
   [
    "A small test group has no observed adverse effects at one dose. What conclusion is too strong?",
    "The dose has zero risk for every individual in every circumstance",
    "No effects were observed in that group during the study",
    "More sensitive endpoints or larger studies could add information",
    "Absence of observed effects is limited by sample size, endpoints and conditions. It does not establish universal zero risk."
   ],
   [
    "Why include replicate groups at a given dose?",
    "Estimate variation and distinguish a consistent response from chance",
    "Guarantee every replicate has identical outcomes",
    "Eliminate the need to state the exposure route",
    "Replication reveals variability. It does not force equal outcomes or replace a clear description of the experiment."
   ],
   [
    "May all endocrine endpoints be assumed to have the same linear dose-response shape?",
    "No; the relationship must be established for the specific endpoint and conditions",
    "Yes; a ruler determines every biological response",
    "Yes; all receptors respond identically at every dose",
    "Different mechanisms and endpoints can have different responses. A model should follow evidence rather than a universal shape assumption."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "The response label determines the meaning",
    "head": "Axis or feature",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Dose axis",
      "Check units and exposure route"
     ],
     [
      "Mortality axis",
      "Supports a lethal-response measure"
     ],
     [
      "Growth endpoint",
      "Not automatically a lethal endpoint"
     ],
     [
      "Curve comparison",
      "Match species and observation conditions"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Estimate between observations only with a model",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      110,
      58
     ],
     "P1": [
      516,
      58
     ],
     "P2": [
      110,
      58
     ],
     "P3": [
      110,
      191
     ],
     "P4": [
      290,
      90
     ],
     "P5": [
      470,
      154
     ],
     "P6": [
      290,
      90
     ],
     "P7": [
      470,
      154
     ],
     "P8": [
      110,
      138
     ],
     "P9": [
      425,
      138
     ],
     "P10": [
      425,
      138
     ],
     "P11": [
      425,
      58
     ],
     "P12": [
      425,
      138
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P4P5",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P8P9",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 2
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       217
      ],
      "text": "Fictional mortality (%); assumed linear segment",
      "col": 0
     },
     {
      "at": [
       110,
       33
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       290,
       33
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       425,
       33
      ],
      "text": "35",
      "col": 0
     },
     {
      "at": [
       470,
       33
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       87,
       53
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       87,
       85
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       87,
       133
      ],
      "text": "50",
      "col": 0
     },
     {
      "at": [
       87,
       149
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       228,
       171
      ],
      "text": "Estimate: 35 mg/kg",
      "col": 1
     },
     {
      "at": [
       320,
       6
      ],
      "text": "Dose (mg/kg); interpolation depends on this model",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P6",
      "r": 4,
      "col": 0
     },
     {
      "c": "P7",
      "r": 4,
      "col": 0
     },
     {
      "c": "P12",
      "r": 4,
      "col": 1
     }
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A graph’s vertical axis is percent mortality. What does the horizontal coordinate at 50% mortality estimate?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A graph shows a 50% reduction in plant growth. Is that automatically an LD50?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Under matched conditions, chemical A reaches 50% mortality at a lower dose than B. What follows?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why must axis units be checked before comparing two curves?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "In a fictional study, mortality is 20% at 20 mg/kg and 60% at 40 mg/kg. Assuming a straight line between those points, where is 50% mortality?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Without an interpolation model, do observations of 20% mortality at 20 mg/kg and 60% at 40 mg/kg establish an exact LD50?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is extrapolation in a dose-response analysis?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A small test group has no observed adverse effects at one dose. What conclusion is too strong?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why include replicate groups at a given dose?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "May all endocrine endpoints be assumed to have the same linear dose-response shape?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.14",
  "name": "Pollution and Human Health",
  "skill": "s14",
  "boardTitle": "Pollution and Human Health",
  "teach": [
   "A pollutant can have the capacity to cause harm while actual risk depends on exposure, susceptibility and the endpoint. Exposure can occur through inhalation, ingestion or skin contact, and duration matters. Toxic effects from a chemical and infection by a pathogen are different mechanisms. Untreated sewage can carry pathogens that cause dysentery, including certain bacteria or parasites; sewage is a vehicle, not itself a single disease organism. Clean-looking water can still contain pathogens or dissolved chemicals.",
   "Asbestos exposure is a major cause of mesothelioma, a cancer of tissue lining organs such as the lungs and abdomen. Illness may appear long after exposure, and exposure does not guarantee disease in every individual. Ground-level ozone can irritate airways and impair lung function. These examples connect an agent, pathway and effect; they do not mean every breathing problem has the same cause. A study must consider smoking, occupation, age, other pollutants and access to diagnosis where those factors may confound the comparison.",
   "Environmental-health studies often compare observed groups because deliberately assigning harmful exposure would be inappropriate. Association alone is not proof of a single cause; temporal order, exposure measurements, mechanistic evidence and alternative explanations help assess causation. In a fictional study, 20 cases among 1000 exposed people and 5 among 1000 comparison people give risks of 2% and 0.5%. The ratio is four, and the absolute difference is 1.5 percentage points. Counts without denominators would not support the same comparison."
  ],
  "eqs": [
   "Hazard + relevant exposure and susceptibility → possible health risk",
   "Asbestos fibers → inhalation exposure → increased mesothelioma risk",
   "20/1000 = 2%; 5/1000 = 0.5%; ratio 4; difference 1.5 percentage points"
  ],
  "boards": [
   [
    "Identify the agent and exposure route",
    "Chemical toxicity differs from infection",
    "Appearance does not establish water safety"
   ],
   [
    "Agent-specific mechanisms matter",
    "Latency can separate exposure and diagnosis",
    "Account for relevant confounding variables"
   ],
   [
    "Compare denominators and observation periods",
    "Relative and absolute differences are distinct",
    "Study limitations remain after correct arithmetic"
   ]
  ],
  "questions": [
   [
    "What is the difference between a hazard and a health-risk estimate?",
    "Risk also considers exposure and susceptibility, not only the capacity to cause harm",
    "Hazard means every exposed person will become ill",
    "Risk is determined only by whether a substance is natural",
    "A hazard identifies potential harm. Exposure level, route and biological context influence the chance and severity of an outcome."
   ],
   [
    "Which pair distinguishes exposure routes?",
    "Inhaling contaminated air and ingesting contaminated water",
    "Only naming two factories",
    "Only comparing two calendar years",
    "Breathing and swallowing describe how an agent enters the body. Source names and dates do not by themselves specify a route."
   ],
   [
    "How can untreated sewage contribute to dysentery?",
    "Carry disease-causing bacteria or parasites into exposure pathways",
    "Create dysentery solely through its brown color",
    "Cause only chemical poisoning with no pathogen involvement",
    "Sewage can transmit infectious agents through contaminated water, food or contact. Dysentery is not caused by appearance alone."
   ],
   [
    "Does clear water prove that disease-causing organisms are absent?",
    "No; pathogens can be present without visible cloudiness",
    "Yes; all microbes are individually visible",
    "Yes; chemical clarity is identical to disinfection",
    "Visual appearance cannot establish microbial safety. Appropriate testing and treatment address different evidence."
   ],
   [
    "Which exposure is a major established risk factor for mesothelioma?",
    "Asbestos fibers",
    "Only loud music",
    "Only ordinary dietary glucose",
    "Asbestos is strongly linked to mesothelioma. A risk factor does not imply that every exposed individual develops the disease."
   ],
   [
    "Why can a long delay between asbestos exposure and diagnosis complicate a study?",
    "Investigators may need reliable historical exposure information",
    "A delayed disease can never have an environmental cause",
    "Only current-day exposures can affect disease",
    "Latency separates exposure from observed illness. Reconstructing earlier conditions is therefore important."
   ],
   [
    "Which effect can elevated ground-level ozone have?",
    "Irritate airways and reduce lung function",
    "Always improve breathing because it contains oxygen",
    "Only change the color of water",
    "Ozone’s reactivity can injure the respiratory system. It is not equivalent to the oxygen used in respiration."
   ],
   [
    "A polluted neighborhood also has different smoking rates. Why consider smoking in a respiratory-health study?",
    "It could confound the pollution-outcome comparison",
    "It proves pollution has no possible effect",
    "It automatically proves pollution is the only cause",
    "A factor associated with exposure group and health outcome can distort attribution if it is not considered."
   ],
   [
    "A fictional study finds 20 cases among 1000 exposed people and 5 among 1000 comparison people over the same period. What is the risk ratio?",
    "4",
    "15",
    "0.25",
    "The risks are 0.02 and 0.005. Dividing the exposed risk by the comparison risk gives four."
   ],
   [
    "A fictional exposed group has a 2% risk and its comparison group a 0.5% risk. What is the absolute difference?",
    "1.5 percentage points",
    "4 percentage points",
    "150 percentage points",
    "Subtract the percentages to obtain 1.5 percentage points. Four is the risk ratio, a different quantity."
   ],
   [
    "Why are case counts alone insufficient for comparing two communities’ disease risks?",
    "The population sizes and observation periods may differ",
    "A larger count always proves a higher individual risk",
    "Population denominators cannot affect a percentage",
    "Risk comparisons need suitable denominators and comparable follow-up. A larger population can have more cases without greater per-person risk."
   ],
   [
    "Which combination strengthens a causal interpretation beyond a single correlation?",
    "Exposure preceding the outcome, plausible mechanisms and careful assessment of alternatives",
    "Only repeating that two measurements occurred together",
    "Only selecting data points that fit the preferred explanation",
    "Converging evidence and study design help evaluate causation. Selective reporting or correlation alone is insufficient."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Follow the health-exposure pathway",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      80,
      170
     ],
     "P1": [
      224,
      170
     ],
     "P2": [
      224,
      96
     ],
     "P3": [
      80,
      96
     ],
     "P4": [
      227,
      133
     ],
     "P5": [
      252,
      133
     ],
     "P6": [
      258,
      170
     ],
     "P7": [
      402,
      170
     ],
     "P8": [
      402,
      96
     ],
     "P9": [
      258,
      96
     ],
     "P10": [
      405,
      133
     ],
     "P11": [
      430,
      133
     ],
     "P12": [
      436,
      170
     ],
     "P13": [
      580,
      170
     ],
     "P14": [
      580,
      96
     ],
     "P15": [
      436,
      96
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
       140
      ],
      "text": "Agent",
      "col": 0
     },
     {
      "at": [
       152,
       115
      ],
      "text": "Chemical or germ",
      "col": 0
     },
     {
      "at": [
       330,
       140
      ],
      "text": "Exposure",
      "col": 1
     },
     {
      "at": [
       330,
       115
      ],
      "text": "Route and duration",
      "col": 1
     },
     {
      "at": [
       508,
       140
      ],
      "text": "Possible effect",
      "col": 2
     },
     {
      "at": [
       508,
       115
      ],
      "text": "Host susceptibility",
      "col": 2
     },
     {
      "at": [
       320,
       40
      ],
      "text": "Hazard does not specify the outcome of every exposure",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Different agents have different health mechanisms",
    "head": "Agent",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Sewage-borne pathogens",
      "Can cause dysentery through infection"
     ],
     [
      "Asbestos fibers",
      "Major mesothelioma risk factor"
     ],
     [
      "Ground-level ozone",
      "Can irritate airways and affect lung function"
     ],
     [
      "Confounders",
      "Other factors can affect group comparisons"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Fictional comparable health-study groups",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      91,
      60
     ],
     "P1": [
      551,
      60
     ],
     "P2": [
      105,
      176
     ],
     "P3": [
      165,
      176
     ],
     "P4": [
      165,
      60
     ],
     "P5": [
      105,
      60
     ],
     "P6": [
      415,
      89
     ],
     "P7": [
      475,
      89
     ],
     "P8": [
      475,
      60
     ],
     "P9": [
      415,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P2P3P4P5",
      "col": 0
     },
     {
      "v": "P6P7P8P9",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Observed risk (%)",
      "col": 0
     },
     {
      "at": [
       135,
       188
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       135,
       33
      ],
      "text": "Exposed",
      "col": 0
     },
     {
      "at": [
       445,
       101
      ],
      "text": "0.5",
      "col": 1
     },
     {
      "at": [
       445,
       33
      ],
      "text": "Comparison",
      "col": 1
     },
     {
      "at": [
       320,
       4
      ],
      "text": "20/1000 versus 5/1000: ratio 4; difference 1.5 points",
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
     "What is the difference between a hazard and a health-risk estimate?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pair distinguishes exposure routes?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can untreated sewage contribute to dysentery?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does clear water prove that disease-causing organisms are absent?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which exposure is a major established risk factor for mesothelioma?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can a long delay between asbestos exposure and diagnosis complicate a study?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which effect can elevated ground-level ozone have?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A polluted neighborhood also has different smoking rates. Why consider smoking in a respiratory-health study?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional study finds 20 cases among 1000 exposed people and 5 among 1000 comparison people over the same period. What is the risk ratio?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional exposed group has a 2% risk and its comparison group a 0.5% risk. What is the absolute difference?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why are case counts alone insufficient for comparing two communities’ disease risks?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which combination strengthens a causal interpretation beyond a single correlation?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "8.15",
  "name": "Pathogens and Infectious Diseases",
  "skill": "s15",
  "boardTitle": "Pathogens and Infectious Diseases",
  "teach": [
   "A pathogen is an infectious agent, such as a bacterium, virus or parasite. A vector carries an agent between hosts; a reservoir is a population or environment where it is maintained. Transmission requires the relevant pathway, not merely a place looking dirty. Water and sanitation infrastructure, housing, exposure and access to care influence disease burden. Poverty can limit protective resources without making any population inherently infectious. Pathogen populations can evolve over generations; an individual pathogen does not consciously adapt because it needs to spread.",
   "Plague is caused by the bacterium Yersinia pestis. Infected fleas and contact with infected animals are important pathways; pneumonic plague can also spread through infectious respiratory droplets. Tuberculosis is caused by bacteria and spreads through the air from people with infectious disease of the lungs or throat. It is not ordinarily spread by touching a shared surface, and latent TB infection does not itself make a person contagious. Disease-specific pathways guide prevention and explain why one control is not sufficient for every infection.",
   "Malaria is caused by Plasmodium parasites transmitted mainly by infected female Anopheles mosquitoes. The mosquito is the vector, not the parasite. Malaria burden is especially high in sub-Saharan Africa, though transmission is not limited to that region. West Nile virus is maintained largely in a bird–mosquito cycle, with humans infected through mosquito bites. Zika is also viral and commonly mosquito-borne, but it can spread through sexual contact and from an infected pregnant person to the fetus. A bite alone does not create a virus; the mosquito must carry the agent. Mosquito habitat control and reducing bites target relevant transmission opportunities.",
   "The disease SARS associated with the 2002–2003 outbreak was caused by SARS-CoV, a coronavirus distinct from SARS-CoV-2, which causes COVID-19. Close respiratory contact was a major pathway. MERS is caused by MERS-CoV; infected dromedary camels are an important animal source, and person-to-person transmission can occur, particularly in close-contact health-care settings. Cholera is caused by the bacterium Vibrio cholerae, commonly acquired through contaminated food or water. Sanitation addresses fecal contamination; it does not substitute for every airborne or vector-control measure.",
   "Climate, rainfall, land use and travel can change where vectors and pathogens encounter hosts. Warming can expand suitable conditions in some places or seasons while excessive heat or dryness can reduce suitability elsewhere. Disease occurrence also depends on the agent being introduced, competent vectors, hosts and public-health conditions; climate alone does not guarantee an outbreak. Compare surveillance effort and testing when interpreting trends. An increase in detected cases may reflect more transmission, better detection or both."
  ],
  "eqs": [
   "Agent → reservoir or infected host → transmission pathway → susceptible host",
   "Plague: bacteria with flea/animal pathways; infectious pulmonary TB: airborne pathway",
   "Malaria: parasite + mosquito vector; West Nile and Zika: viruses + possible mosquito transmission",
   "SARS and MERS: coronaviruses; cholera: bacterium transmitted through contaminated food/water",
   "Environmental suitability + agent and host contact + exposure → possible transmission"
  ],
  "boards": [
   [
    "Separate pathogen, vector and reservoir",
    "Transmission needs a relevant pathway",
    "Infrastructure affects opportunities for exposure"
   ],
   [
    "A vector is not the disease-causing bacterium",
    "Pneumonic plague has a respiratory route",
    "Latent TB infection is not contagious"
   ],
   [
    "Agent identity and carrier differ",
    "Mosquitoes must be infected to transmit the agent",
    "Some infections have additional routes"
   ],
   [
    "Do not equate different coronaviruses",
    "Zoonotic and human transmission can coexist",
    "Match the intervention to the route"
   ],
   [
    "Climate effects depend on location and organism",
    "Suitability alone does not prove transmission",
    "Surveillance changes affect detected case counts"
   ]
  ],
  "questions": [
   [
    "Which description identifies a pathogen?",
    "An infectious agent capable of causing disease",
    "Any insect regardless of whether it carries an agent",
    "Every unpleasant smell",
    "A pathogen is the disease-causing agent. A carrier or environmental observation is not automatically a pathogen."
   ],
   [
    "An infected mosquito transmits a parasite between hosts. What role does the mosquito play?",
    "Vector",
    "The parasite species itself",
    "A guaranteed cure",
    "The carrier transmits the agent. The mosquito and the parasite remain different organisms with different roles."
   ],
   [
    "What does a reservoir describe in an infectious-disease cycle?",
    "A host population or environment in which the agent is maintained",
    "Only a drinking-water storage tank in every disease",
    "Only the most recently diagnosed person",
    "Reservoirs help sustain agents between transmission events. The term is broader than a particular engineered water container."
   ],
   [
    "Which statement about poor sanitation and disease is scientifically defensible?",
    "Limited protective infrastructure can increase exposure opportunities",
    "Every low-income person is inherently infectious",
    "Visible cleanliness guarantees the absence of every pathogen",
    "Risk reflects exposure pathways and protective resources. Economic status is not an intrinsic infectious property."
   ],
   [
    "What causes plague?",
    "The bacterium Yersinia pestis",
    "A flea that contains no microorganism",
    "The malaria parasite",
    "Fleas can transmit plague bacteria, but they are not the bacterium itself. Malaria is caused by different agents."
   ],
   [
    "Which pathway can transmit plague to a person?",
    "An infected flea bite or contact with an infected animal",
    "Any mosquito bite whether infected or not",
    "Only drinking salty seawater",
    "The agent must be present in the relevant exposure pathway. Pneumonic plague additionally has a respiratory transmission route."
   ],
   [
    "Which plague form can spread through infectious respiratory droplets?",
    "Pneumonic plague",
    "Every uninfected flea population",
    "Only a noninfectious skin scar",
    "Lung involvement can permit respiratory spread. This does not make every environmental contact a transmission event."
   ],
   [
    "How does infectious pulmonary tuberculosis commonly spread?",
    "Through air containing TB bacteria from an infectious person",
    "Ordinarily by touching any shared table alone",
    "Only through mosquito bites",
    "Airborne exposure is central to pulmonary TB transmission. Routine surface contact and mosquitoes are not the usual pathways."
   ],
   [
    "Can a person with latent TB infection alone spread TB bacteria to others?",
    "No; latent infection is not contagious",
    "Yes; every latent infection is equally infectious",
    "Yes; TB spreads only from people with no disease",
    "Latent infection differs from infectious active disease. This distinction is essential for describing the transmission cycle."
   ],
   [
    "Which pairing correctly describes malaria?",
    "Plasmodium parasite transmitted mainly by infected female Anopheles mosquitoes",
    "A virus created by any mosquito bite",
    "A bacterium spread only through sewage",
    "Malaria is parasitic, and its vector is a particular mosquito group. A bite must involve an infected vector to transmit the parasite."
   ],
   [
    "Which cycle is especially important in maintaining West Nile virus?",
    "Birds and mosquitoes",
    "Only fish and algae",
    "Only humans drinking contaminated lake water",
    "Mosquitoes acquire and transmit the virus in a bird-associated cycle. Humans can be infected through mosquito bites."
   ],
   [
    "Which statement about Zika transmission is correct?",
    "It can spread through infected mosquitoes, sexual contact and pregnancy-related transmission",
    "It is caused by a parasite and never transmitted sexually",
    "Every mosquito bite spontaneously creates Zika virus",
    "Zika is viral and has multiple documented routes. Transmission depends on the virus being present, not simply on a bite occurring."
   ],
   [
    "Why distinguish SARS-CoV from SARS-CoV-2 in a history of respiratory disease?",
    "They are distinct coronaviruses associated with SARS and COVID-19 respectively",
    "They are two names for the same bacterial species",
    "Neither has any connection to respiratory illness",
    "The names refer to different viruses. Sharing a virus family does not make the agents or outbreak histories identical."
   ],
   [
    "Which statement about MERS transmission is accurate?",
    "Infected dromedary camels are an important source, and person-to-person spread can also occur",
    "It can only spread by mosquitoes",
    "An animal source means human-to-human transmission is impossible",
    "Zoonotic introduction and subsequent human transmission are compatible. The pathways are not mutually exclusive."
   ],
   [
    "Which agent and pathway are correctly paired for cholera?",
    "Vibrio cholerae through contaminated food or water",
    "Only asbestos fibers inhaled from insulation",
    "Only a virus carried by ticks",
    "Cholera is a bacterial infection commonly acquired through contaminated food or water. Asbestos toxicity is not an infection."
   ],
   [
    "Which intervention most directly interrupts fecal contamination of drinking water?",
    "Safe sanitation and appropriately treated water supplies",
    "Only noise barriers along roads",
    "Only dimmer streetlights",
    "Sanitation limits contamination, and water treatment reduces relevant exposure. Controls unrelated to the pathway do not serve the same function."
   ],
   [
    "Does warming guarantee that a mosquito-borne disease will establish in every newly warmer place?",
    "No; agent introduction, vectors, hosts and local conditions also matter",
    "Yes; temperature alone creates every pathogen",
    "Yes; extreme heat always improves every vector’s survival",
    "Climate can change suitability, but transmission requires an agent and suitable ecological and social conditions. Effects can differ by location."
   ],
   [
    "Reported infections increase after a surveillance program expands testing. What should analysts consider?",
    "Improved detection as well as possible changes in transmission",
    "Every additional detected case proves an equal increase in true incidence",
    "Testing effort has no relationship to recorded cases",
    "Detection systems affect observed counts. Comparable surveillance is needed to interpret changes in underlying infection rates."
   ]
  ],
  "check": [
   "A community has both fecally contaminated drinking water and mosquito-borne transmission. Why are clean-water measures alone insufficient for both problems?",
   "The two exposure pathways require appropriate different controls",
   "Every pathogen uses only drinking water",
   "Water treatment automatically removes all mosquitoes",
   "Identify how each agent reaches a susceptible host, then match the intervention to that route."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "An infection needs a transmission pathway",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      80,
      170
     ],
     "P1": [
      224,
      170
     ],
     "P2": [
      224,
      96
     ],
     "P3": [
      80,
      96
     ],
     "P4": [
      227,
      133
     ],
     "P5": [
      252,
      133
     ],
     "P6": [
      258,
      170
     ],
     "P7": [
      402,
      170
     ],
     "P8": [
      402,
      96
     ],
     "P9": [
      258,
      96
     ],
     "P10": [
      405,
      133
     ],
     "P11": [
      430,
      133
     ],
     "P12": [
      436,
      170
     ],
     "P13": [
      580,
      170
     ],
     "P14": [
      580,
      96
     ],
     "P15": [
      436,
      96
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
       140
      ],
      "text": "Agent reservoir",
      "col": 0
     },
     {
      "at": [
       152,
       115
      ],
      "text": "Agent maintained",
      "col": 0
     },
     {
      "at": [
       330,
       140
      ],
      "text": "Transmission",
      "col": 1
     },
     {
      "at": [
       330,
       115
      ],
      "text": "Relevant exposure",
      "col": 1
     },
     {
      "at": [
       508,
       140
      ],
      "text": "Host",
      "col": 2
     },
     {
      "at": [
       508,
       115
      ],
      "text": "Susceptible",
      "col": 2
     },
     {
      "at": [
       320,
       40
      ],
      "text": "A pathogen, a vector and a reservoir are different roles",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Plague and TB do not share every pathway",
    "head": "Example",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Plague agent",
      "Yersinia pestis bacteria"
     ],
     [
      "Plague exposure",
      "Infected fleas or animals; pneumonic droplets"
     ],
     [
      "Infectious pulmonary TB",
      "Airborne bacteria from an infectious person"
     ],
     [
      "Latent TB infection",
      "Not contagious"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Mosquito-associated diseases differ",
    "head": "Disease",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Malaria",
      "Plasmodium parasites; infected Anopheles vector"
     ],
     [
      "West Nile",
      "Virus maintained in bird–mosquito cycles"
     ],
     [
      "Zika",
      "Virus; mosquito, sexual and pregnancy routes"
     ],
     [
      "A mosquito bite alone",
      "Does not create a pathogen"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Match each infection to its agent and route",
    "head": "Disease",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "SARS, 2002–2003",
      "SARS-CoV; important respiratory spread"
     ],
     [
      "MERS",
      "MERS-CoV; camel and human transmission"
     ],
     [
      "Cholera",
      "V. cholerae; contaminated food or water"
     ],
     [
      "COVID-19",
      "SARS-CoV-2, distinct from SARS-CoV"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Disease distribution has several determinants",
    "head": "Factor",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Climate and land use",
      "Change suitability and contact opportunities"
     ],
     [
      "Agent and competent vector",
      "Must be present for that transmission cycle"
     ],
     [
      "Infrastructure and public health",
      "Can reduce exposure and onward spread"
     ],
     [
      "Surveillance effort",
      "Affects detected case counts"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which description identifies a pathogen?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An infected mosquito transmits a parasite between hosts. What role does the mosquito play?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What does a reservoir describe in an infectious-disease cycle?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement about poor sanitation and disease is scientifically defensible?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What causes plague?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pathway can transmit plague to a person?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which plague form can spread through infectious respiratory droplets?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How does infectious pulmonary tuberculosis commonly spread?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Can a person with latent TB infection alone spread TB bacteria to others?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pairing correctly describes malaria?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which cycle is especially important in maintaining West Nile virus?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement about Zika transmission is correct?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why distinguish SARS-CoV from SARS-CoV-2 in a history of respiratory disease?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement about MERS transmission is accurate?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which agent and pathway are correctly paired for cholera?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which intervention most directly interrupts fecal contamination of drinking water?"
    ],
    "small": false
   },
   "16": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does warming guarantee that a mosquito-borne disease will establish in every newly warmer place?"
    ],
    "small": false
   },
   "17": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Reported infections increase after a surveillance program expands testing. What should analysts consider?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A community has both fecally contaminated drinking water and mosquito-borne transmission. Why are clean-water measures alone insufficient for both problems?"
   ],
   "small": false
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Identify the source, pathway, exposed organism and measured effect before choosing a response. Nutrient enrichment, oxygen demand, heat, persistent chemicals and pathogens act through different mechanisms. A control must address the relevant pathway, and captured material still needs management. Compare loads as well as concentrations, and distinguish within-organism accumulation from increases across trophic levels. Toxicity data specify a species, route, duration and endpoint; an LD50 is not a safe dose or a prediction for every individual. Study design, confounding and uncertainty matter when linking environmental exposure to health. Evaluate prevention, treatment and residuals together.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-enviro-aquatic-and-terrestrial-pollution","subject":"science","level":5,"grade":9,"standard":"AP Environmental Science Unit 8, topics 8.1–8.15, STB-3.A–N and EIN-3.A–D; 2026 CED","title":"Aquatic and Terrestrial Pollution","goal":"Trace pollutants and pathogens through environmental pathways, interpret exposure data and evaluate controls with their limits.","points":20,"progression":{"requires":["science-h-ap-enviro-atmospheric-pollution"],"operations":3,"demand":"Use a mechanism, quantitative evidence and study limitations to explain a pollution effect and justify a response."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
