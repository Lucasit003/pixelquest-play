/* Original course unit. Review record: docs/review/lessons/high-completion/ap-enviro-u7-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "7.1",
  "name": "Introduction to Air Pollution",
  "skill": "s1",
  "boardTitle": "Introduction to Air Pollution",
  "teach": [
   "Air pollution involves gases or particles present at concentrations and exposures that harm people or ecosystems. A primary pollutant enters the air directly from a source, such as soot from combustion or sulfur dioxide from burning sulfur-containing fuel. A secondary pollutant forms through reactions in the atmosphere, such as ozone formed from precursor pollutants in sunlight or sulfate particles formed from sulfur dioxide. These categories describe origin, not which pollutant is most dangerous. Particulate matter can be either directly emitted or formed secondarily.",
   "Combustion and other activities emit different mixtures. Incomplete combustion can produce carbon monoxide. High-temperature combustion can form nitrogen oxides, which contribute to ozone and nitric acid formation. Sulfur in coal and oil can become sulfur dioxide; major sources include power plants and industrial facilities, so it is misleading to treat diesel fuel as the universal main source. Coal burning can also emit particles and trace metals and releases carbon dioxide. Ground-level ozone is a respiratory irritant, while stratospheric ozone helps shield Earth from ultraviolet radiation.",
   "Particulate matter consists of suspended solid particles and liquid droplets. PM2.5 denotes fine particles generally 2.5 micrometres or smaller in aerodynamic diameter, not particles with a mass of 2.5 grams. Fine particles can reach deep into the lungs and are associated with respiratory and cardiovascular harm. Lead can damage the nervous system, especially during development. The United States phased lead out of gasoline for on-road vehicles, culminating in a 1996 ban under the Clean Air Act; this greatly reduced that source, without eliminating every source of lead pollution.",
   "An emission rate measures how much pollutant leaves a source per time; an ambient concentration measures how much is present in a volume of air. Weather, transport, reactions and removal affect concentrations as well as emissions. Use comparable instruments, times and locations in an experiment. A lower downwind reading on one windy day does not alone prove that a new control reduced emissions. A before-and-after study is stronger with repeated measurements and suitable comparison sites."
  ],
  "eqs": [
   "Directly emitted soot: primary; ozone formed in air from precursors: secondary",
   "Sulfur in fuel + oxidation → SO₂; incomplete carbon combustion can form CO",
   "PM2.5: particle size category; 1996 US on-road gasoline lead ban: source reduction",
   "Emission rate: grams/hour; concentration: micrograms/cubic metre"
  ],
  "boards": [
   [
    "Primary = directly emitted",
    "Secondary = formed after emission",
    "Particle pollution can have either origin"
   ],
   [
    "Pollutants differ in sources and mechanisms",
    "SO₂ sources depend on sulfur in fuel and industry",
    "CO and CO₂ are different compounds"
   ],
   [
    "Fine particle size affects exposure",
    "Lead can harm the developing nervous system",
    "Removing one source does not remove all lead"
   ],
   [
    "Emissions and ambient concentration are different",
    "Wind, chemistry and sampling conditions matter",
    "Use repeated and comparable measurements"
   ]
  ],
  "questions": [
   [
    "Soot leaves a smokestack already in particle form. How is this soot classified by origin?",
    "Primary pollutant",
    "Secondary pollutant formed only after emission",
    "A pollutant classified solely by its toxicity",
    "Direct emission makes it primary. The term does not rank its health effects or require an atmospheric reaction."
   ],
   [
    "Sulfur dioxide reacts in the atmosphere and contributes to sulfate particles. How are those newly formed particles classified?",
    "Secondary pollutants",
    "Necessarily primary because their precursor was emitted",
    "Nonpollutants because a reaction occurred",
    "The particles formed after precursor emission, so they are secondary. A reaction does not guarantee a harmless product."
   ],
   [
    "Which statement about particulate matter is correct?",
    "It can be emitted directly or formed from gaseous precursors",
    "It is always a primary pollutant",
    "It is always a gas with no solid or liquid component",
    "Particulate matter includes suspended solids and droplets. Some are direct emissions; others form through atmospheric processes."
   ],
   [
    "Which process is a common source of carbon monoxide?",
    "Incomplete combustion of carbon-containing fuel",
    "Complete conversion of every carbon atom to carbon dioxide",
    "Radioactive decay of radon as its only source",
    "Incomplete combustion can form CO. Complete combustion of carbon instead forms CO₂, a different compound."
   ],
   [
    "Why can high-temperature fuel combustion contribute to photochemical smog?",
    "It emits nitrogen oxides that participate in ozone-forming chemistry",
    "It directly emits all ground-level ozone as its only exhaust gas",
    "It removes the need for sunlight in every ozone-forming reaction",
    "Nitrogen oxides are precursors in the sunlight-driven chemistry. Ozone is largely formed in the atmosphere rather than directly emitted by engines."
   ],
   [
    "Burning a fuel with sulfur can directly produce which gaseous pollutant?",
    "Sulfur dioxide",
    "Ozone as the inevitable sulfur product",
    "Only nitrogen gas",
    "Oxidation of sulfur during combustion can form SO₂. Ozone and nitrogen do not contain the sulfur atoms in this process."
   ],
   [
    "Which claim about sulfur dioxide sources is most defensible?",
    "Sulfur-containing fuels burned at power plants and industrial facilities are major sources",
    "Diesel is always the main source in every region and year",
    "Only sources with visible smoke can emit sulfur dioxide",
    "SO₂ sources depend on fuel sulfur, fuel use and industrial processes. A universal diesel-only or visible-smoke rule is incorrect."
   ],
   [
    "What does the 2.5 in PM2.5 primarily describe?",
    "A particle-size cutoff in micrometres",
    "Each particle’s mass in grams",
    "The number of particles permitted in a room",
    "PM2.5 is a fine-particle size category based on aerodynamic diameter. It is not a mass per particle or an indoor count limit."
   ],
   [
    "Why can fine particles pose substantial health risks?",
    "They can be inhaled deep into the respiratory system",
    "They are always too large to enter the lungs",
    "Only visible particles can affect health",
    "Small particles can penetrate deeply and are associated with respiratory and cardiovascular effects. Visibility is not a reliable measure of risk."
   ],
   [
    "Which body system is especially relevant to developmental harm from lead exposure?",
    "The nervous system",
    "Only hair color, with no effect on development",
    "Only the digestive contents, with no absorbed effects",
    "Lead can harm the developing nervous system. Effects are not limited to cosmetic changes or material remaining in the gut."
   ],
   [
    "What did the 1996 US on-road gasoline lead ban accomplish as an air-pollution strategy?",
    "It removed a major vehicle-fuel source of lead emissions",
    "It proved every source of environmental lead had disappeared",
    "It converted lead atoms into harmless oxygen",
    "Removing lead from that fuel source reduced associated emissions. It did not eliminate lead from every other source or change the element into oxygen."
   ],
   [
    "Which ozone distinction is scientifically important?",
    "Ground-level ozone can harm breathing, while stratospheric ozone absorbs harmful ultraviolet radiation",
    "All ozone has identical effects regardless of location",
    "Ground-level ozone is the same substance as carbon monoxide",
    "Ozone is O₃ in both locations, but its role and exposure differ. CO is a different molecule."
   ],
   [
    "Which measurement is an emission rate?",
    "120 grams of pollutant released per hour",
    "120 micrograms of pollutant per cubic metre of outdoor air",
    "120 people living near a factory",
    "Mass per time describes source emissions. Mass per air volume describes concentration; population is neither."
   ],
   [
    "A downwind pollutant reading falls when wind speed rises, with no other evidence about source output. What cannot yet be concluded?",
    "The source must have reduced its emission rate",
    "Atmospheric conditions can affect the reading",
    "More measurements could help evaluate the cause",
    "Changing dispersion can change measured concentration without a source reduction. One reading does not isolate the cause."
   ],
   [
    "Which study better tests whether a new filter reduces factory emissions?",
    "Measure repeated inlet and outlet pollutant mass rates under comparable operating conditions",
    "Compare one indoor reading before installation with one distant outdoor reading afterward",
    "Compare only the filter’s color before and after use",
    "Comparable mass-rate measurements and repeated observations address the control’s performance. Unmatched conditions can confound the comparison."
   ],
   [
    "Why can two communities experience different exposure from sources emitting the same pollutant mass per hour?",
    "Dispersion, distance, terrain and time spent near the plume can differ",
    "Equal emission rates guarantee equal exposure everywhere",
    "Only the source’s name determines exposure",
    "Emissions are the starting point. Transport, concentration patterns and contact duration determine exposure at particular locations."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Classify origin, not severity",
    "head": "Example",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Soot emitted from combustion",
      "Primary particle"
     ],
     [
      "SO₂ emitted from sulfur in fuel",
      "Primary gas"
     ],
     [
      "Ozone formed by atmospheric chemistry",
      "Secondary gas"
     ],
     [
      "Sulfate particles formed from SO₂",
      "Secondary particles"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Trace the emitted pollutant",
    "head": "Process",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Incomplete fuel combustion",
      "Can form carbon monoxide"
     ],
     [
      "High-temperature combustion",
      "Can form nitrogen oxides"
     ],
     [
      "Oxidizing sulfur in fuel",
      "Can form sulfur dioxide"
     ],
     [
      "Coal combustion",
      "CO₂, particles and trace-metal emissions"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Particle diameter and exposure",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      195,
      127
     ],
     "P1": [
      445,
      127
     ]
    },
    "hide": "P0P1",
    "dots": "",
    "segs": [],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Illustrative diameters; larger circle is four times wider",
      "col": 0
     },
     {
      "at": [
       195,
       174
      ],
      "text": "2.5 µm",
      "col": 1
     },
     {
      "at": [
       195,
       68
      ],
      "text": "Fine-particle cutoff",
      "col": 1
     },
     {
      "at": [
       445,
       174
      ],
      "text": "10 µm",
      "col": 2
     },
     {
      "at": [
       445,
       68
      ],
      "text": "Larger size cutoff",
      "col": 2
     },
     {
      "at": [
       320,
       20
      ],
      "text": "PM2.5 is a size category, not a particle mass",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 7,
      "col": 1
     },
     {
      "c": "P1",
      "r": 28,
      "col": 2
     }
    ]
   },
   {
    "t": "setups",
    "title": "Keep the measured quantity clear",
    "head": "Quantity",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Emission rate",
      "Mass leaving a source per time"
     ],
     [
      "Ambient concentration",
      "Mass per volume of surrounding air"
     ],
     [
      "Exposure",
      "Contact depends on level and duration"
     ],
     [
      "Study design",
      "Compare conditions and repeat sampling"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Soot leaves a smokestack already in particle form. How is this soot classified by origin?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Sulfur dioxide reacts in the atmosphere and contributes to sulfate particles. How are those newly formed particles classified?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement about particulate matter is correct?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which process is a common source of carbon monoxide?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can high-temperature fuel combustion contribute to photochemical smog?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Burning a fuel with sulfur can directly produce which gaseous pollutant?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which claim about sulfur dioxide sources is most defensible?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What does the 2.5 in PM2.5 primarily describe?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can fine particles pose substantial health risks?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which body system is especially relevant to developmental harm from lead exposure?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What did the 1996 US on-road gasoline lead ban accomplish as an air-pollution strategy?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which ozone distinction is scientifically important?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which measurement is an emission rate?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A downwind pollutant reading falls when wind speed rises, with no other evidence about source output. What cannot yet be concluded?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which study better tests whether a new filter reduces factory emissions?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can two communities experience different exposure from sources emitting the same pollutant mass per hour?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "7.2",
  "name": "Photochemical Smog",
  "skill": "s2",
  "boardTitle": "Photochemical Smog",
  "teach": [
   "Photochemical smog is a mixture formed when sunlight drives reactions involving nitrogen oxides and volatile organic compounds, or VOCs. Ground-level ozone is a major secondary component. VOC sources include fuel evaporation, solvents and some plant emissions; nitrogen oxides arise from combustion and other sources. Warm, sunny and stagnant conditions often favor ozone accumulation. Sunlight supplies energy to the chemistry, but simply combining ordinary oxygen with warmth is not a sufficient explanation for polluted urban ozone.",
   "Traffic can create a morning peak in precursors, followed by higher ozone later as reactions proceed and air moves. An afternoon ozone peak is common on suitable days, not a rule for every place or season. Fresh nitric oxide can also consume ozone locally, so the highest ozone need not occur next to the largest exhaust source. Regional patterns depend on precursor amounts, chemistry, weather and transport. Controls should address relevant precursor emissions using local evidence; the response is not always proportional to a single emission change.",
   "Ozone and other smog components can irritate airways and eyes, damage plant tissues and reduce photosynthesis or crop performance. A tree can emit natural VOCs while also providing shade and other benefits; that fact alone does not justify removing all trees. A useful comparison identifies the pollutant, units, location and hour. In a fictional record, ozone readings of 20, 35, 70 and 45 ppb at 6, 10, 14 and 18 hours show the highest measured value at 14:00. Those four observations do not establish the exact daily maximum between samples."
  ],
  "eqs": [
   "NOx + VOCs + sunlight → reactions producing ozone and other smog components",
   "Morning precursors can precede afternoon ozone; weather and transport alter the pattern",
   "Fictional ozone: 20, 35, 70, 45 ppb → highest sampled value 70 ppb at 14:00"
  ],
  "boards": [
   [
    "Ground-level ozone is largely secondary",
    "VOCs and NOx participate in sunlight-driven chemistry",
    "Heat and stagnation can favor accumulation"
   ],
   [
    "Precursor and ozone peaks need not coincide",
    "Fresh NO can consume ozone locally",
    "Regional controls require chemical and weather context"
   ],
   [
    "Smog affects people and vegetation",
    "Natural VOC sources also exist",
    "Sampled maxima need not be exact daily maxima"
   ]
  ],
  "questions": [
   [
    "Which combination most directly supports photochemical smog formation?",
    "Nitrogen oxides, reactive VOCs and sunlight",
    "Only oxygen in completely clean air with no relevant precursors",
    "Only nighttime cooling with no atmospheric chemistry",
    "NOx and VOCs take part in sunlight-driven reactions that produce ozone and other smog components. Cooling can affect mixing but is not the defining chemistry."
   ],
   [
    "Which is a common secondary component of photochemical smog?",
    "Ground-level ozone",
    "Lead emitted directly from a source",
    "Freshly emitted soot before any atmospheric reaction",
    "Ozone forms through atmospheric chemistry. Directly emitted lead and soot are primary in the stated examples."
   ],
   [
    "Gasoline evaporates during handling. Which ozone-precursor category can increase?",
    "Volatile organic compounds",
    "Only stable mineral dust",
    "Only water vapor with no organic compounds",
    "Fuel contains volatile organic compounds that can enter the air. These gases can participate in ozone chemistry with NOx and sunlight."
   ],
   [
    "Some trees emit isoprene, an organic gas. What does this show?",
    "VOCs can have natural as well as human sources",
    "Every VOC is made only by petroleum refineries",
    "Natural gases cannot take part in atmospheric reactions",
    "Vegetation is a natural source of some reactive VOCs. Source origin does not prevent participation in atmospheric chemistry."
   ],
   [
    "Why can ozone peak after the morning traffic peak?",
    "Precursor reactions and transport require time under suitable sunlight",
    "Ozone must be emitted directly in identical proportions to every tailpipe gas",
    "Every pollutant is required to peak at the same time",
    "Secondary formation and transport can delay ozone accumulation relative to emissions. Different pollutants need not share a peak hour."
   ],
   [
    "Which weather combination often favors strong photochemical smog?",
    "Warm sunshine with stagnant air",
    "Strong ventilation and little sunlight in every case",
    "Only a cold dark period with no precursor sources",
    "Sunlight drives chemistry, warmth often accelerates relevant processes, and stagnation limits dispersion. Actual outcomes also depend on emissions and transport."
   ],
   [
    "Is an afternoon ozone maximum guaranteed in every location on every day?",
    "No; weather, transport and precursor chemistry can change the timing",
    "Yes; a clock alone determines ozone concentration",
    "Yes; morning and night ozone must always be zero",
    "The common daytime pattern is not universal. Local chemical and meteorological conditions can shift concentrations and timing."
   ],
   [
    "A roadside site has less ozone than a downwind suburb despite more fresh exhaust. Which process can help explain this?",
    "Fresh nitric oxide can consume ozone near the road",
    "Every primary pollutant must be lower at the roadside",
    "The downwind site cannot receive transported air",
    "Nitric oxide can react with ozone locally, while ozone forms and moves downwind. This does not imply roadside air is clean overall."
   ],
   [
    "A city reduces one ozone precursor by 20%. Why is a 20% ozone decline not guaranteed?",
    "Ozone response depends on interacting precursors, chemistry and weather",
    "Secondary pollutants never respond to source controls",
    "Percent changes in emissions and concentrations must always be identical",
    "Ozone formation is nonlinear and affected by transport and conditions. Controls can work without a one-to-one percentage response."
   ],
   [
    "Which response targets photochemical-smog precursors?",
    "Reduce appropriate NOx and VOC emissions from transport and industry",
    "Only capture large dust while leaving all relevant gas emissions unchanged",
    "Add more evaporating solvent as a universal control",
    "Precursor reductions address the formation pathway. Particle-only control does not necessarily remove the gases driving ozone chemistry."
   ],
   [
    "Fictional ozone readings are 20 ppb at 06:00, 35 at 10:00, 70 at 14:00 and 45 at 18:00. When is the highest measured value?",
    "14:00",
    "06:00",
    "18:00",
    "Among the four reported measurements, 70 ppb is the largest and occurs at 14:00. The samples do not reveal every intervening value."
   ],
   [
    "The highest of four ozone samples is 70 ppb. What can that sampling alone establish about the exact daily maximum?",
    "It was at least 70 ppb, but could have been higher between samples",
    "It must have been exactly 70 ppb",
    "It must have been lower than every observed sample",
    "An observed value is a lower bound on the true daily maximum. Unsampled times could contain a higher value."
   ],
   [
    "Which plant effect can result from damaging ground-level ozone exposure?",
    "Leaf injury and reduced photosynthetic performance",
    "A guarantee of increased yield for every crop",
    "No effects because plants use carbon dioxide",
    "Ozone can injure plant tissues and affect photosynthesis. Its effects differ from the role of CO₂ in photosynthesis."
   ],
   [
    "A report notes that trees emit some VOCs and concludes all urban trees should be removed. What is missing from that reasoning?",
    "A full evaluation of species, local chemistry and the trees’ other effects",
    "Proof that every VOC source has identical impacts",
    "A rule that one emission fact settles every management tradeoff",
    "Tree species, atmospheric conditions, shade and other services matter. One precursor fact alone is insufficient for a blanket management conclusion."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Photochemical smog forms through reactions",
    "view": [
     44,
     596,
     0,
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
      "text": "Precursors",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "NOx and VOCs",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Photochemistry",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Sunlight energy",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Smog mixture",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Includes ozone",
      "col": 2
     },
     {
      "at": [
       320,
       50
      ],
      "text": "Temperature, mixing and transport also affect the outcome",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Timing and place matter",
    "head": "Observation",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Morning traffic peak",
      "Can supply precursors before ozone rises"
     ],
     [
      "Sunny afternoon",
      "Often favors higher ozone"
     ],
     [
      "Fresh NO near a road",
      "Can consume ozone locally"
     ],
     [
      "A precursor reduction",
      "Ozone response need not be proportional"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Read the observed values, not an assumed peak",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      130,
      57
     ],
     "P1": [
      536,
      57
     ],
     "P2": [
      130,
      57
     ],
     "P3": [
      130,
      189
     ],
     "P4": [
      126,
      57
     ],
     "P5": [
      130,
      57
     ],
     "P6": [
      126,
      88
     ],
     "P7": [
      130,
      88
     ],
     "P8": [
      126,
      119
     ],
     "P9": [
      130,
      119
     ],
     "P10": [
      126,
      150
     ],
     "P11": [
      130,
      150
     ],
     "P12": [
      126,
      181
     ],
     "P13": [
      130,
      181
     ],
     "P14": [
      130,
      88
     ],
     "P15": [
      258,
      111.25
     ],
     "P16": [
      386,
      165.5
     ],
     "P17": [
      514,
      126.75
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17",
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
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P6P7",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P8P9",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P12P13",
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
       213
      ],
      "text": "Fictional ozone samples (ppb)",
      "col": 0
     },
     {
      "at": [
       104,
       52
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       104,
       83
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       104,
       114
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       104,
       145
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       104,
       176
      ],
      "text": "80",
      "col": 0
     },
     {
      "at": [
       130,
       33
      ],
      "text": "06:00",
      "col": 0
     },
     {
      "at": [
       130,
       101
      ],
      "text": "20",
      "col": 1
     },
     {
      "at": [
       258,
       33
      ],
      "text": "10:00",
      "col": 0
     },
     {
      "at": [
       258,
       124.25
      ],
      "text": "35",
      "col": 1
     },
     {
      "at": [
       386,
       33
      ],
      "text": "14:00",
      "col": 0
     },
     {
      "at": [
       386,
       178.5
      ],
      "text": "70",
      "col": 1
     },
     {
      "at": [
       514,
       33
      ],
      "text": "18:00",
      "col": 0
     },
     {
      "at": [
       514,
       139.75
      ],
      "text": "45",
      "col": 1
     },
     {
      "at": [
       320,
       6
      ],
      "text": "Only sampled values are shown; intervals are unmeasured",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P14",
      "r": 4,
      "col": 1
     },
     {
      "c": "P15",
      "r": 4,
      "col": 1
     },
     {
      "c": "P16",
      "r": 4,
      "col": 1
     },
     {
      "c": "P17",
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
     "Which combination most directly supports photochemical smog formation?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which is a common secondary component of photochemical smog?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Gasoline evaporates during handling. Which ozone-precursor category can increase?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Some trees emit isoprene, an organic gas. What does this show?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can ozone peak after the morning traffic peak?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which weather combination often favors strong photochemical smog?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Is an afternoon ozone maximum guaranteed in every location on every day?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A roadside site has less ozone than a downwind suburb despite more fresh exhaust. Which process can help explain this?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A city reduces one ozone precursor by 20%. Why is a 20% ozone decline not guaranteed?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which response targets photochemical-smog precursors?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fictional ozone readings are 20 ppb at 06:00, 35 at 10:00, 70 at 14:00 and 45 at 18:00. When is the highest measured value?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "The highest of four ozone samples is 70 ppb. What can that sampling alone establish about the exact daily maximum?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which plant effect can result from damaging ground-level ozone exposure?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A report notes that trees emit some VOCs and concludes all urban trees should be removed. What is missing from that reasoning?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "7.3",
  "name": "Thermal Inversion",
  "skill": "s3",
  "boardTitle": "Thermal Inversion",
  "teach": [
   "In much of the troposphere, temperature normally decreases with height. A thermal inversion is a layer in which temperature increases with height. Cool air below warmer air forms a stable arrangement that suppresses vertical mixing. If pollutants are emitted into the shallow layer near the ground, their concentration can rise because they disperse into a smaller volume. The inversion does not create the pollutants; it changes their dilution and transport.",
   "Clear, calm nights can allow the surface to cool and form a surface inversion. Valleys can collect cold air, and terrain can restrict ventilation. Other inversions form by different processes, including subsiding air warming aloft. Sun-driven heating and stronger mixing can weaken some surface inversions, but the timing varies. In a fictional profile, air at the surface is 5°C, at 100 m is 8°C and at 300 m is 12°C: temperature rises with height, identifying an inversion over that layer."
  ],
  "eqs": [
   "Temperature rising with height → stable layer → reduced vertical mixing",
   "Fictional profile: 5°C at 0 m; 8°C at 100 m; 12°C at 300 m"
  ],
  "boards": [
   [
    "Inversion: temperature increases with height",
    "Stable layering suppresses vertical mixing",
    "Existing emissions can accumulate near the ground"
   ],
   [
    "Nighttime surface cooling can create an inversion",
    "Valleys and weak winds can worsen accumulation",
    "Other inversion mechanisms also exist"
   ]
  ],
  "questions": [
   [
    "Which pair of measurements shows temperature increasing with height between the surface and 300 m?",
    "5°C at the surface and 12°C at 300 m",
    "12°C at the surface and 5°C at 300 m",
    "The same decreasing temperature at every higher level",
    "Temperature increases with height in the first profile. A decreasing profile is not an inversion over that interval."
   ],
   [
    "Why can an inversion worsen near-surface air pollution?",
    "It suppresses vertical mixing and limits dilution",
    "It directly creates all emitted pollutant molecules",
    "It guarantees strong upward mixing of surface air",
    "Stable layering restricts dispersion. Pollutants still need sources or transport into the layer."
   ],
   [
    "A valley has the same emissions on two days, but the inversion day has higher concentrations. What mechanism is consistent with this?",
    "Pollutants accumulate in a more weakly mixed air layer",
    "Higher concentration proves the source emitted more mass",
    "Inversions remove all particles from the air",
    "Dispersion conditions can change concentration independently of emissions. Stable air can hold pollutants near sources and people."
   ],
   [
    "Which condition can promote a nighttime surface inversion?",
    "Clear skies and calm winds allowing strong surface cooling",
    "Guaranteed vigorous mixing throughout the night",
    "An assumption that the ground cannot lose heat after sunset",
    "The surface can cool by radiation, chilling nearby air while air above remains warmer. Weak winds limit mixing."
   ],
   [
    "How can valley topography contribute to pollutant accumulation?",
    "Cold air can collect in low areas with limited ventilation",
    "Every valley forces unlimited vertical mixing",
    "Terrain has no influence on air movement",
    "Cold-air pooling and restricted airflow can combine with inversions to limit dispersion. Effects depend on weather and terrain."
   ],
   [
    "Which statement correctly separates an inversion from an emission source?",
    "The inversion affects dispersion; vehicles or other sources supply emitted pollutants",
    "An inversion is itself a fuel-combustion process",
    "Every inversion must contain dangerous concentrations even with negligible pollution input",
    "A stable temperature structure changes movement of air. The concentration also depends on sources, transport, reactions and removal."
   ],
   [
    "Morning solar heating warms surface air and increases mixing. What can happen to a surface inversion?",
    "It can weaken or break down",
    "It must become stronger in every case",
    "It turns into a new source of lead atoms",
    "Heating can reduce the stable temperature contrast and promote mixing. The outcome depends on the full temperature profile and weather."
   ],
   [
    "A surface inversion traps particles and ozone precursors. Does it replace the chemical explanation for photochemical smog?",
    "No; mixing and sunlight-driven chemistry are separate processes that can interact",
    "Yes; every inversion directly converts dust into ozone",
    "Yes; precursor gases are never needed when an inversion occurs",
    "The inversion affects dispersion while chemistry forms secondary pollutants. Both can influence a pollution episode."
   ],
   [
    "A study compares inversion and non-inversion days to explain air quality. Which extra variable should it track?",
    "Emission activity and wind conditions",
    "Only the weekday name, regardless of traffic or weather",
    "An assumption that all other factors are identical",
    "Source activity and weather can vary together. Measuring them helps separate inversion effects from other causes."
   ],
   [
    "If pollutant mass is the same but the air volume available for mixing is halved in an idealized example, what happens to average concentration?",
    "It doubles",
    "It halves",
    "It stays unchanged by definition",
    "Concentration is mass divided by volume. The same mass in half the volume has twice the concentration, under the stated simplified assumptions."
   ]
  ],
  "check": [
   "A fictional profile measures 4°C at the surface and 10°C at 200 m. Which interpretation follows?",
   "An inversion layer can suppress vertical mixing",
   "Temperature is decreasing with height over this layer",
   "The profile proves all pollutant emissions have stopped",
   "Compare the temperatures at the two heights; the higher air is warmer."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "An inversion restricts vertical dispersion",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      89,
      191
     ],
     "P1": [
      551,
      191
     ],
     "P2": [
      551,
      140
     ],
     "P3": [
      89,
      140
     ],
     "P4": [
      89,
      49
     ],
     "P5": [
      551,
      49
     ],
     "P6": [
      152,
      81
     ],
     "P7": [
      152,
      62
     ],
     "P8": [
      152,
      124
     ],
     "P9": [
      262,
      81
     ],
     "P10": [
      262,
      62
     ],
     "P11": [
      262,
      124
     ],
     "P12": [
      372,
      81
     ],
     "P13": [
      372,
      62
     ],
     "P14": [
      372,
      124
     ],
     "P15": [
      482,
      81
     ],
     "P16": [
      482,
      62
     ],
     "P17": [
      482,
      124
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P7P8",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P13P14",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P16P17",
      "col": 0,
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
       320,
       169
      ],
      "text": "Warmer air above",
      "col": 1
     },
     {
      "at": [
       320,
       148
      ],
      "text": "Stable inversion layer",
      "col": 1
     },
     {
      "at": [
       320,
       18
      ],
      "text": "Cooler surface air; pollutants can accumulate",
      "col": 0
     },
     {
      "at": [
       320,
       103
      ],
      "text": "Upward mixing suppressed",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P6",
      "r": 4,
      "col": 3
     },
     {
      "c": "P9",
      "r": 4,
      "col": 3
     },
     {
      "c": "P12",
      "r": 4,
      "col": 3
     },
     {
      "c": "P15",
      "r": 4,
      "col": 3
     }
    ]
   },
   {
    "t": "setups",
    "title": "A fictional inversion profile",
    "head": "Height",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "0 m",
      "5°C"
     ],
     [
      "100 m",
      "8°C"
     ],
     [
      "300 m",
      "12°C"
     ],
     [
      "Pattern",
      "Temperature increases with height"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pair of measurements shows temperature increasing with height between the surface and 300 m?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can an inversion worsen near-surface air pollution?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A valley has the same emissions on two days, but the inversion day has higher concentrations. What mechanism is consistent with this?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which condition can promote a nighttime surface inversion?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can valley topography contribute to pollutant accumulation?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement correctly separates an inversion from an emission source?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Morning solar heating warms surface air and increases mixing. What can happen to a surface inversion?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A surface inversion traps particles and ozone precursors. Does it replace the chemical explanation for photochemical smog?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A study compares inversion and non-inversion days to explain air quality. Which extra variable should it track?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "If pollutant mass is the same but the air volume available for mixing is halved in an idealized example, what happens to average concentration?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A fictional profile measures 4°C at the surface and 10°C at 200 m. Which interpretation follows?"
   ],
   "small": false
  }
 },
 {
  "code": "7.4",
  "name": "Atmospheric CO2 and Particulates",
  "skill": "s4",
  "boardTitle": "Atmospheric CO2 and Particulates",
  "teach": [
   "Carbon dioxide has natural sources, including respiration, decomposition, volcanic activity and release from ocean water. Photosynthesis removes CO₂ from air or water to build organic matter. The atmosphere’s amount changes according to the balance of inputs and removals, not whether any one natural source exists. Fossil-fuel burning transfers additional carbon from geological stores into the active carbon cycle. Human CO₂ emissions greatly exceed volcanic emissions in modern global comparisons; the existence of volcanoes does not explain away human influence.",
   "Natural particulate sources include windblown dust, sea spray, wildfire smoke and volcanic ash. Human activities can also raise dust or smoke and emit gases that form particles later. Natural origin does not imply harmlessness: particle size, composition, concentration and exposure matter. A fair study can compare upwind and downwind air while recording wind and sampling duration. Gravimetric concentration is collected particle mass divided by sampled air volume after appropriate blank correction; the filter’s original mass is not the collected pollutant mass."
  ],
  "eqs": [
   "Atmospheric stock change = total inputs − total removals within the stated boundary",
   "Filter gains 120 micrograms while sampling 4 m³ → particle concentration 30 micrograms/m³"
  ],
  "boards": [
   [
    "Respiration, decay, volcanoes and oceans release CO₂",
    "Photosynthesis removes CO₂",
    "A stock changes when inputs and removals differ"
   ],
   [
    "Dust, sea spray, ash and wildfire smoke are particles",
    "Natural does not mean harmless",
    "Collected mass ÷ sampled volume gives concentration"
   ]
  ],
  "questions": [
   [
    "Which is a natural process that releases carbon dioxide?",
    "Respiration by organisms",
    "Photosynthesis as its net carbon uptake process",
    "Permanent burial of all atmospheric carbon",
    "Respiration releases CO₂ during metabolism. Photosynthesis removes carbon dioxide when building organic matter."
   ],
   [
    "Why can decomposition be a natural carbon dioxide source?",
    "Organisms breaking down organic matter can respire and release CO₂",
    "Decomposition always locks all carbon away permanently",
    "Carbon atoms are destroyed whenever organisms die",
    "Biological breakdown can return organic carbon to the atmosphere. The exact products depend on conditions, including oxygen availability."
   ],
   [
    "A student says volcanoes emit CO₂, so humans cannot affect atmospheric CO₂. What is wrong with the inference?",
    "Multiple sources can operate, and their magnitudes and the removal balance matter",
    "The existence of one source excludes every other source",
    "Volcanic gas contains no carbon under any conditions",
    "Natural sources do not exclude human additions. Modern human emissions are much larger than volcanic emissions globally."
   ],
   [
    "In a fictional atmospheric box, inputs total 110 carbon units and removals total 100 during a period. What is the net stock change?",
    "An increase of 10 units",
    "A decrease of 10 units",
    "No change because some inputs are natural",
    "The box gains the difference between inputs and removals: 110−100=10 units. Natural origin does not make an input vanish from the balance."
   ],
   [
    "What distinguishes fossil-fuel carbon release from the immediate return of carbon recently taken up by a plant?",
    "It transfers carbon from long-stored geological deposits into the active cycle",
    "It creates new carbon atoms from nothing",
    "It cannot contribute to atmospheric concentration",
    "Fossil-fuel combustion moves previously stored geological carbon into circulation. It does not create or destroy the element."
   ],
   [
    "Which is a natural source of particulate matter?",
    "Sea spray droplets and salt particles",
    "Only pure gaseous oxygen",
    "Only carbon dioxide molecules, classified as solid particles",
    "Sea spray can produce suspended droplets and salt particles. Ordinary gaseous O₂ and CO₂ are not particulate matter."
   ],
   [
    "A wildfire emits smoke from burning vegetation. Which conclusion follows?",
    "Smoke can harm air quality even when the fire has a natural ignition source",
    "Natural ignition guarantees harmless smoke",
    "All wildfire pollution consists only of water vapor",
    "Natural origin does not eliminate the effects of smoke particles and gases. Exposure and composition matter."
   ],
   [
    "A blank-corrected filter gains 120 micrograms of particles while sampling 4 m³ of air. What is the average particle concentration?",
    "30 micrograms/m³",
    "480 micrograms/m³",
    "0.033 micrograms/m³",
    "Divide collected mass by sampled air volume: 120/4=30 micrograms per cubic metre."
   ],
   [
    "Why is an unused control filter handled with the same procedure in a particle-sampling study?",
    "It helps identify mass changes from handling or the method rather than sampled particles",
    "It replaces the need to measure sampled air volume",
    "It guarantees the atmosphere contains no particles",
    "A blank helps estimate contamination or handling effects. Air volume and proper sampling are still needed."
   ],
   [
    "A dust study finds a higher downwind concentration than upwind during repeated matched sampling. What does this support?",
    "A possible contribution from the intervening source, considered with wind and other evidence",
    "Proof that all particles worldwide came from that source",
    "Proof that particle chemistry and background never matter",
    "Matched spatial and weather information can support source attribution. It does not uniquely explain all particles or eliminate every competing source."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Natural and human sources share the carbon budget",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      245,
      170
     ],
     "P1": [
      401,
      170
     ],
     "P2": [
      401,
      76
     ],
     "P3": [
      245,
      76
     ],
     "P4": [
      90,
      129
     ],
     "P5": [
      238,
      129
     ],
     "P6": [
      408,
      129
     ],
     "P7": [
      553,
      129
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
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
       323,
       141
      ],
      "text": "Atmosphere",
      "col": 0
     },
     {
      "at": [
       323,
       115
      ],
      "text": "Stock change",
      "col": 0
     },
     {
      "at": [
       323,
       89
      ],
      "text": "+10 units",
      "col": 0
     },
     {
      "at": [
       151,
       175
      ],
      "text": "Inputs: 110",
      "col": 1
     },
     {
      "at": [
       481,
       175
      ],
      "text": "Removals: 100",
      "col": 2
     },
     {
      "at": [
       320,
       27
      ],
      "text": "Fictional box budget: all inputs and removals included",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "A particle-sampling calculation",
    "head": "Quantity",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Blank-corrected particle mass",
      "120 micrograms"
     ],
     [
      "Sampled air volume",
      "4 m³"
     ],
     [
      "Concentration",
      "30 micrograms/m³"
     ],
     [
      "Handling blank",
      "Checks non-sample mass changes"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which is a natural process that releases carbon dioxide?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can decomposition be a natural carbon dioxide source?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A student says volcanoes emit CO₂, so humans cannot affect atmospheric CO₂. What is wrong with the inference?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "In a fictional atmospheric box, inputs total 110 carbon units and removals total 100 during a period. What is the net stock change?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What distinguishes fossil-fuel carbon release from the immediate return of carbon recently taken up by a plant?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which is a natural source of particulate matter?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A wildfire emits smoke from burning vegetation. Which conclusion follows?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A blank-corrected filter gains 120 micrograms of particles while sampling 4 m³ of air. What is the average particle concentration?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is an unused control filter handled with the same procedure in a particle-sampling study?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A dust study finds a higher downwind concentration than upwind during repeated matched sampling. What does this support?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "7.5",
  "name": "Indoor Air Pollutants",
  "skill": "s5",
  "boardTitle": "Indoor Air Pollutants",
  "teach": [
   "Indoor air can contain pollutants from combustion, building materials, products, outdoor air and biological sources. Carbon monoxide is a colorless, odorless gas associated with incomplete combustion; it acts as a chemical asphyxiant by interfering with oxygen transport in the body. It is chemically different from carbon dioxide. Combustion can also produce nitrogen dioxide, smoke and particles. Properly maintained and vented combustion equipment and carbon monoxide alarms address different needs: source control reduces emissions or entry, while alarms warn of detected CO. An alarm does not remove the gas.",
   "Radon-222 is a naturally occurring radioactive gas in uranium decay chains in rock and soil. It can enter buildings through foundation openings, and dissolved radon in well water can be released into indoor air. Inhaled radon and its decay products increase lung-cancer risk; no smell identifies its presence. Testing measures radon, and appropriate mitigation addresses its entry and accumulation. A standard particle filter is not a way to remove the radon gas itself. Natural geological origin does not make the exposure harmless.",
   "Some building materials and consumer products emit VOCs, including formaldehyde. Emissions depend on the material and conditions; not all furniture or insulation has the same emissions. Asbestos is a group of mineral fibers historically used in some heat-resistant building products. Disturbing asbestos-containing materials can release respirable fibers, so damaged or suspect material needs appropriate professional assessment rather than casual cutting or sanding. Older lead-containing paint can generate contaminated dust when it deteriorates or is disturbed.",
   "Mold growth is associated with moisture, and indoor dust can contain biological material as well as other particles. Reducing a pollutant source, controlling moisture, and providing suitable ventilation or filtration can improve indoor air, but the method must match the pollutant. Ventilation with polluted outdoor air can introduce contaminants, and a particle filter does not automatically capture every gas. Compare air samples taken under matched conditions, and distinguish a monitor, which measures, from a control, which reduces exposure."
  ],
  "eqs": [
   "Combustion CO → inhalation → impaired oxygen transport; an alarm warns but does not remove CO",
   "Rock/soil uranium decay chain → radon gas → building entry → inhalation exposure",
   "Disturbed asbestos-containing material → airborne fibers; damaged lead paint → contaminated dust",
   "Source control + appropriate ventilation/filtration; moisture control limits mold growth"
  ],
  "boards": [
   [
    "CO is colorless and odorless",
    "CO differs from carbon dioxide",
    "Detection and source control do different jobs"
   ],
   [
    "Radon is a radioactive gas of geological origin",
    "It can enter through foundations or well water",
    "Testing and mitigation differ from particle filtration"
   ],
   [
    "Some products emit formaldehyde and other VOCs",
    "Asbestos risk involves inhaled mineral fibers",
    "Older lead paint can contaminate dust"
   ],
   [
    "Moisture can support mold growth",
    "Match treatment to gases or particles",
    "Outdoor air quality matters to ventilation choices"
   ]
  ],
  "questions": [
   [
    "Which description identifies carbon monoxide?",
    "A colorless, odorless toxic gas associated with incomplete combustion",
    "A visible mineral fiber from old insulation",
    "A harmless gas that can always be detected by smell",
    "CO cannot be reliably seen or smelled and can interfere with oxygen transport. It is different from fibrous particles."
   ],
   [
    "What physiological mechanism helps explain carbon monoxide’s danger?",
    "It binds to hemoglobin and interferes with oxygen delivery",
    "It provides extra oxygen to every tissue",
    "It works only by increasing the amount of visible dust",
    "Carbon monoxide forms carboxyhemoglobin and disrupts oxygen transport. Its effects are not dependent on visible particles."
   ],
   [
    "A building installs a carbon monoxide alarm. Which function does it provide?",
    "Warning when the device detects CO under its operating conditions",
    "Removal of all CO molecules from the room",
    "Guaranteed correction of a malfunctioning combustion appliance",
    "An alarm detects and warns. Source correction and exposure prevention are separate functions."
   ],
   [
    "Which action addresses a combustion pollutant at its source in a building?",
    "Proper maintenance and venting of the combustion equipment",
    "Only repainting the room a lighter color",
    "Assuming a smoke-free appearance proves no gas emissions",
    "Equipment condition and exhaust pathways affect indoor combustion emissions. Invisible pollutants can be present without visible smoke."
   ],
   [
    "Where does naturally occurring radon in soil originate?",
    "Radioactive decay chains involving uranium in rock and soil",
    "Only incomplete burning of gasoline",
    "Photosynthesis by houseplants",
    "Radon is a radioactive decay-chain product. It is not a combustion product or a product of photosynthesis."
   ],
   [
    "Which pathway can bring radon into a building?",
    "Movement from soil through foundation openings",
    "Only transport attached to visible pollen",
    "Only formation inside a refrigerator compressor",
    "Soil gas can enter through cracks and other openings. Some well water can also release dissolved radon indoors."
   ],
   [
    "Which health effect is strongly associated with long-term radon exposure?",
    "Increased lung-cancer risk",
    "A guarantee of immediate visible skin burns in every exposed person",
    "Improved oxygen transport through the blood",
    "Radon and its decay products expose lung tissue to radiation. Risk is not equivalent to a guaranteed immediate symptom."
   ],
   [
    "Can the absence of an unusual odor establish that indoor radon is low?",
    "No; radon requires testing because it cannot be identified by smell",
    "Yes; all radioactive gases have a strong odor",
    "Yes; odorlessness means a gas cannot enter buildings",
    "Radon is odorless. Measuring it is different from noticing a smell or visible dust."
   ],
   [
    "A homeowner uses a standard particle filter and assumes radon gas is removed. What is the scientific problem?",
    "A filter designed for particles does not remove the radon gas itself",
    "All gases behave as large dust particles",
    "Radioactivity automatically makes every atom too large to pass through a particle filter",
    "Gases and particles require different control approaches. Capturing particles is not the same as preventing radon entry or accumulation."
   ],
   [
    "What can occur when water containing dissolved radon is used indoors?",
    "Some radon can be released from the water into air",
    "Every radon atom must become nonradioactive immediately",
    "The water can release only oxygen and no dissolved gases",
    "Radon can transfer from water to air. This is an additional pathway alongside soil-gas entry."
   ],
   [
    "Which pollutant can be emitted as a gas by some pressed-wood products and other indoor materials?",
    "Formaldehyde",
    "Asbestos fibers as a gas",
    "Lead paint flakes as a gas",
    "Formaldehyde is a VOC that some products can emit. Asbestos fibers and paint flakes are particulate material, not gases in these examples."
   ],
   [
    "Why is saying “all insulation is an air pollutant” inaccurate?",
    "Insulation is a material category; emissions and fiber risks depend on its composition and condition",
    "Every insulation product necessarily emits identical asbestos levels",
    "Material condition never affects airborne exposure",
    "Different materials have different constituents and release mechanisms. The material’s name alone does not establish a pollutant concentration."
   ],
   [
    "Why can cutting or sanding asbestos-containing material raise exposure?",
    "It can release inhalable mineral fibers",
    "It converts all fibers into harmless water",
    "It guarantees complete removal of airborne particles",
    "Disturbance can release fibers into air. Suspect material requires appropriate assessment and management rather than casual disturbance."
   ],
   [
    "Older lead-containing paint deteriorates into chips and dust. Which exposure concern follows?",
    "Lead-contaminated material can be inhaled or ingested",
    "Lead becomes harmless solely because it is old",
    "Every paint chip contains only carbon dioxide",
    "Deterioration can make contaminated material accessible. Age does not remove the toxicity of lead."
   ],
   [
    "Which condition should be addressed to limit indoor mold growth?",
    "Persistent moisture and water intrusion",
    "Only the wall’s color",
    "An assumption that dry surfaces always produce the most growth",
    "Moisture supports mold growth. Controlling the moisture source addresses a key cause rather than only an appearance."
   ],
   [
    "Which claim about ventilation is too broad?",
    "Opening windows always improves every indoor pollutant concentration regardless of outdoor air",
    "Outdoor pollution can enter through ventilation",
    "Ventilation performance depends on airflow and pollutant sources",
    "Outdoor air can contain smoke or other pollutants. Ventilation choices must consider both indoor sources and incoming air quality."
   ],
   [
    "Two classrooms’ VOC readings are compared, but one was sampled immediately after painting and the other months later. What confounder matters?",
    "Time since the emitting material was applied",
    "Only whether the rooms have the same number",
    "An assumption that emissions never change over time",
    "Product emissions and ventilation can vary with time. Unequal sampling timing can obscure the cause of the difference."
   ],
   [
    "Which statement correctly distinguishes monitoring from pollution control?",
    "A monitor measures conditions; a suitable control reduces the source or exposure",
    "Measuring a gas automatically removes it",
    "Every filter measures every indoor pollutant",
    "Detection provides information. Reducing emissions, entry or exposure requires an appropriate separate action or treatment."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Carbon monoxide: source, effect and response",
    "head": "Feature",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Origin",
      "Can form during incomplete combustion"
     ],
     [
      "Appearance",
      "Colorless and odorless"
     ],
     [
      "Mechanism",
      "Interferes with oxygen transport"
     ],
     [
      "Alarm",
      "Warns; does not remove the gas"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Radon can enter a building from the ground",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      237,
      180
     ],
     "P1": [
      513,
      180
     ],
     "P2": [
      513,
      59
     ],
     "P3": [
      237,
      59
     ],
     "P4": [
      83,
      58
     ],
     "P5": [
      551,
      58
     ],
     "P6": [
      153,
      56
     ],
     "P7": [
      259,
      94
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P6P7",
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
     }
    ],
    "notes": [
     {
      "at": [
       375,
       151
      ],
      "text": "Indoor air",
      "col": 0
     },
     {
      "at": [
       140,
       23
      ],
      "text": "Soil gas",
      "col": 1
     },
     {
      "at": [
       133,
       108
      ],
      "text": "Radon",
      "col": 1
     },
     {
      "at": [
       386,
       98
      ],
      "text": "Foundation openings",
      "col": 2
     },
     {
      "at": [
       320,
       212
      ],
      "text": "One entry pathway; well water can also contribute",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Materials differ in their release mechanisms",
    "head": "Source",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Some pressed-wood products",
      "Can emit formaldehyde gas"
     ],
     [
      "Disturbed asbestos-containing material",
      "Can release mineral fibers"
     ],
     [
      "Deteriorating older lead paint",
      "Can release contaminated dust"
     ],
     [
      "Insulation as a category",
      "Not itself one universal pollutant"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Match an indoor response to the problem",
    "head": "Need",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Mold growth",
      "Control persistent moisture"
     ],
     [
      "Particle exposure",
      "Suitable source control and filtration"
     ],
     [
      "Gas exposure",
      "Pollutant-specific source control or treatment"
     ],
     [
      "Ventilation",
      "Consider incoming outdoor air quality"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which description identifies carbon monoxide?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What physiological mechanism helps explain carbon monoxide’s danger?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A building installs a carbon monoxide alarm. Which function does it provide?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which action addresses a combustion pollutant at its source in a building?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Where does naturally occurring radon in soil originate?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pathway can bring radon into a building?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which health effect is strongly associated with long-term radon exposure?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Can the absence of an unusual odor establish that indoor radon is low?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A homeowner uses a standard particle filter and assumes radon gas is removed. What is the scientific problem?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What can occur when water containing dissolved radon is used indoors?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pollutant can be emitted as a gas by some pressed-wood products and other indoor materials?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is saying “all insulation is an air pollutant” inaccurate?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can cutting or sanding asbestos-containing material raise exposure?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Older lead-containing paint deteriorates into chips and dust. Which exposure concern follows?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which condition should be addressed to limit indoor mold growth?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which claim about ventilation is too broad?"
    ],
    "small": false
   },
   "16": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two classrooms’ VOC readings are compared, but one was sampled immediately after painting and the other months later. What confounder matters?"
    ],
    "small": false
   },
   "17": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement correctly distinguishes monitoring from pollution control?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "7.6",
  "name": "Reduction of Air Pollutants",
  "skill": "s6",
  "boardTitle": "Reduction of Air Pollutants",
  "teach": [
   "Pollution can be reduced before it is formed or after it enters an exhaust stream. Using less fuel for the same service, reducing unnecessary travel, choosing suitable lower-emitting processes and applying effective emission rules can reduce source emissions. Benefits depend on the pollutant and full system. For example, electrifying a vehicle removes tailpipe combustion but shifts attention to electricity generation and production. Vapor-recovery equipment at a fuel station or on a vehicle captures fuel vapors, reducing VOC release during fuel handling.",
   "A three-way catalytic converter in a suitable gasoline-engine system promotes reactions that reduce carbon monoxide, hydrocarbons and nitrogen oxides. CO and hydrocarbons are oxidized largely to CO₂ and water; NOx is reduced largely to nitrogen. This reduces several harmful exhaust components but does not capture all carbon dioxide or every pollutant. Temperature, operating conditions and maintenance affect performance. A catalytic converter changes chemical compounds; a particle collector has a different mechanism.",
   "An electrostatic precipitator charges particles and collects them on surfaces. Fabric filters capture particles in filter media and the accumulated dust layer. Wet scrubbers contact exhaust with liquid to capture particular particles or soluble/reactive gases; sulfur dioxide can be removed using an appropriate alkaline reagent. Dry or semidry sorbent systems can also capture acid gases. Collected dust, liquid and reaction products need management. A control may transfer contaminants to another waste stream rather than make all matter disappear.",
   "Compare pollutant mass rates before and after treatment using compatible flow and measurement conditions. Removing 90 grams from 100 grams entering each hour is 90% removal, leaving 10 grams per hour. Concentration alone can mislead if exhaust volume changes: 100 mg/m³ at 1000 m³/hour is the same 100 grams/hour as 50 mg/m³ at 2000 m³/hour. Dilution changes concentration without necessarily changing emitted mass. Performance monitoring tests whether the control works under actual operating conditions."
  ],
  "eqs": [
   "Prevent emissions at source or treat exhaust; choose a method for the target pollutant",
   "Example converter reaction: 2 CO + 2 NO → 2 CO₂ + N₂",
   "Particle collector → captured dust; alkaline scrubber → SO₂ reaction products",
   "100 g/hour in − 10 g/hour out = 90 g/hour removed = 90%"
  ],
  "boards": [
   [
    "Efficiency and conservation can reduce source demand",
    "Cleaner processes need pollutant-specific comparisons",
    "Vapor recovery captures VOCs from fuel handling"
   ],
   [
    "Three-way catalyst treats CO, hydrocarbons and NOx",
    "CO₂ and water can remain in the exhaust",
    "Operating conditions affect conversion"
   ],
   [
    "Electrostatic and fabric systems collect particles",
    "Scrubbers or sorbents target selected pollutants",
    "Captured residuals still need management"
   ],
   [
    "Mass rate = concentration × flow rate",
    "Dilution alone need not reduce emitted mass",
    "Use consistent inlet and outlet measurements"
   ]
  ],
  "questions": [
   [
    "Which strategy reduces pollution formation at a source rather than only capturing it afterward?",
    "Use less fuel to deliver the same needed service",
    "Dilute unchanged exhaust with clean air before measuring concentration",
    "Move the monitor farther away without changing emissions",
    "Lower fuel demand can reduce associated emissions under comparable conditions. Dilution and relocating a monitor do not themselves reduce source mass."
   ],
   [
    "What pollutant group is directly targeted by fuel-vapor recovery equipment?",
    "Volatile organic compounds from evaporating fuel",
    "Only sulfur dioxide from distant coal combustion",
    "Only noise from passing vehicles",
    "Vapor recovery captures volatile fuel compounds during handling. It does not directly treat unrelated stack gases or sound."
   ],
   [
    "Which pollutants can a properly operating three-way gasoline-engine catalyst reduce?",
    "Carbon monoxide, hydrocarbons and nitrogen oxides",
    "Only carbon dioxide, leaving all other exhaust unchanged",
    "Only large road dust outside the exhaust system",
    "Three-way catalysts promote oxidation of CO and hydrocarbons and reduction of NOx. They are not general CO₂-capture or road-dust devices."
   ],
   [
    "A catalytic converter oxidizes carbon monoxide. Which carbon-containing product commonly results?",
    "Carbon dioxide",
    "New elemental uranium",
    "No carbon-containing product because carbon atoms disappear",
    "Oxidation can convert CO to CO₂. Carbon atoms remain in a product; the process does not eliminate greenhouse-gas carbon."
   ],
   [
    "Why does installing a catalytic converter not make a gasoline vehicle climate-impact-free?",
    "Carbon dioxide and upstream fuel impacts remain",
    "The converter automatically captures every CO₂ molecule",
    "Only carbon monoxide, never carbon dioxide, can affect the atmosphere",
    "Reducing CO, hydrocarbons and NOx has benefits, but CO₂ and life-cycle emissions require separate accounting."
   ],
   [
    "How does an electrostatic precipitator remove particulate matter?",
    "Charge particles and collect them on surfaces",
    "Convert every particle directly into oxygen",
    "Only dilute the gas with more air",
    "Electric forces move charged particles to collection surfaces. The captured material still needs handling."
   ],
   [
    "Which device uses fabric media and accumulated dust to capture particles?",
    "A fabric filter or baghouse",
    "A fuel-vapor recovery nozzle",
    "A sound-level meter",
    "A baghouse separates particles from a gas stream. Vapor recovery handles fuel gases, and a sound meter measures noise."
   ],
   [
    "A wet scrubber uses an alkaline liquid to treat sulfur dioxide in exhaust. What mechanism is involved?",
    "Gas transfer into liquid followed by appropriate chemical reaction",
    "Changing sulfur atoms into nitrogen atoms",
    "Only charging large solid particles with no gas-liquid contact",
    "Scrubbing can absorb and react with SO₂. Its chemistry differs from electrostatic particle collection."
   ],
   [
    "What remains necessary after a scrubber captures contaminants in liquid or solids?",
    "Manage the collected residual waste",
    "Assume captured matter has ceased to exist",
    "Release the concentrated waste without evaluating its contents",
    "Removal from air may transfer pollutants into another stream. Residuals can require treatment, recovery or proper disposal."
   ],
   [
    "Can a particle collector alone be assumed to remove all gaseous carbon monoxide?",
    "No; a particle-control mechanism does not establish gas removal",
    "Yes; all pollutants are identical particles",
    "Yes; CO must be trapped because its name contains carbon",
    "Gas treatment requires a suitable mechanism. A device’s effectiveness must be established for the target pollutant."
   ],
   [
    "A control receives 100 g/hour of pollutant and discharges 10 g/hour. What is removal efficiency?",
    "90%",
    "10%",
    "1000%",
    "Ninety grams per hour are removed from 100 entering, or 90%. Ten percent is the remaining fraction."
   ],
   [
    "Exhaust concentration is 100 mg/m³ and flow is 1000 m³/hour. What pollutant mass rate does this represent?",
    "100 g/hour",
    "100000 g/hour",
    "0.1 g/hour",
    "Multiply to obtain 100000 mg/hour, then divide by 1000 mg per gram to get 100 g/hour."
   ],
   [
    "An exhaust stream changes from 100 mg/m³ at 1000 m³/hour to 50 mg/m³ at 2000 m³/hour. What happens to pollutant mass per hour?",
    "It stays at 100 g/hour",
    "It falls by half to 50 g/hour",
    "It doubles to 200 g/hour",
    "The concentration halves while flow doubles, leaving their product unchanged. Dilution is not mass removal."
   ],
   [
    "A control has a high advertised efficiency but damaged components. What evidence best establishes current performance?",
    "Actual emissions measurements and operating checks",
    "Only the original advertisement",
    "An assumption that efficiency never changes after installation",
    "Real performance depends on conditions and maintenance. Measurement tests whether the intended reduction is achieved."
   ],
   [
    "A fleet changes from combustion vehicles to battery-electric vehicles. Which source-stage benefit is direct?",
    "Tailpipe combustion emissions are removed from those vehicles",
    "All manufacturing and electricity-supply impacts vanish",
    "Every pollutant at every power plant becomes zero",
    "Electric vehicles have no tailpipe combustion. Upstream electricity and production impacts still need evaluation."
   ],
   [
    "Why should an emissions policy evaluate compliance and observed outcomes?",
    "A rule’s stated limit does not alone establish actual reductions",
    "Writing a limit guarantees every source instantly complies",
    "Monitoring is unrelated to evaluating a control",
    "Implementation, compliance and measured results determine effectiveness. A policy statement is not itself an emissions measurement."
   ]
  ],
  "check": [
   "A treatment reduces a pollutant mass rate from 80 g/hour to 20 g/hour. What percentage of the incoming pollutant is removed?",
   "75%",
   "25%",
   "400%",
   "Subtract the outgoing rate from the incoming rate, then compare the removal with the incoming amount."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Prevent or capture emissions",
    "head": "Approach",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Reduce fuel demand for the same service",
      "Can reduce source emissions"
     ],
     [
      "Fuel-vapor recovery",
      "Captures volatile fuel compounds"
     ],
     [
      "Electric vehicle",
      "Removes tailpipe combustion"
     ],
     [
      "Full evaluation",
      "Also examine upstream impacts"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "A catalyst changes exhaust chemistry",
    "view": [
     44,
     596,
     0,
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
      "text": "Engine exhaust",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "CO, HC and NOx",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Catalyst",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Promotes reactions",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Products",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "CO₂, H₂O and N₂",
      "col": 2
     },
     {
      "at": [
       320,
       50
      ],
      "text": "A suitable three-way system does not capture all CO₂",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Control mechanisms have specific targets",
    "head": "Device",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Electrostatic precipitator",
      "Charge and collect particles"
     ],
     [
      "Fabric filter",
      "Capture particles in a filter/dust layer"
     ],
     [
      "Appropriate wet scrubber",
      "Capture particles or reactive/soluble gas"
     ],
     [
      "Dry or semidry sorbent",
      "Can capture selected acid gases"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "A fictional pollutant mass balance",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      239,
      170
     ],
     "P1": [
      405,
      170
     ],
     "P2": [
      405,
      76
     ],
     "P3": [
      239,
      76
     ],
     "P4": [
      90,
      137
     ],
     "P5": [
      233,
      137
     ],
     "P6": [
      412,
      137
     ],
     "P7": [
      556,
      137
     ],
     "P8": [
      322,
      72
     ],
     "P9": [
      322,
      34
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
       322,
       144
      ],
      "text": "Treatment",
      "col": 0
     },
     {
      "at": [
       322,
       117
      ],
      "text": "90% removal",
      "col": 0
     },
     {
      "at": [
       150,
       182
      ],
      "text": "In: 100 g/h",
      "col": 1
     },
     {
      "at": [
       483,
       182
      ],
      "text": "Out: 10 g/h",
      "col": 2
     },
     {
      "at": [
       470,
       34
      ],
      "text": "Captured: 90 g/h",
      "col": 3
     },
     {
      "at": [
       181,
       23
      ],
      "text": "Manage residuals",
      "col": 3
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
     "Which strategy reduces pollution formation at a source rather than only capturing it afterward?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What pollutant group is directly targeted by fuel-vapor recovery equipment?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pollutants can a properly operating three-way gasoline-engine catalyst reduce?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A catalytic converter oxidizes carbon monoxide. Which carbon-containing product commonly results?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why does installing a catalytic converter not make a gasoline vehicle climate-impact-free?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How does an electrostatic precipitator remove particulate matter?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which device uses fabric media and accumulated dust to capture particles?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A wet scrubber uses an alkaline liquid to treat sulfur dioxide in exhaust. What mechanism is involved?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What remains necessary after a scrubber captures contaminants in liquid or solids?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Can a particle collector alone be assumed to remove all gaseous carbon monoxide?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A control receives 100 g/hour of pollutant and discharges 10 g/hour. What is removal efficiency?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Exhaust concentration is 100 mg/m³ and flow is 1000 m³/hour. What pollutant mass rate does this represent?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An exhaust stream changes from 100 mg/m³ at 1000 m³/hour to 50 mg/m³ at 2000 m³/hour. What happens to pollutant mass per hour?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A control has a high advertised efficiency but damaged components. What evidence best establishes current performance?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fleet changes from combustion vehicles to battery-electric vehicles. Which source-stage benefit is direct?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why should an emissions policy evaluate compliance and observed outcomes?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A treatment reduces a pollutant mass rate from 80 g/hour to 20 g/hour. What percentage of the incoming pollutant is removed?"
   ],
   "small": false
  }
 },
 {
  "code": "7.7",
  "name": "Acid Rain",
  "skill": "s7",
  "boardTitle": "Acid Rain",
  "teach": [
   "Acid deposition includes acidic gases and particles settling onto surfaces and acids delivered in rain, snow or fog. Sulfur dioxide and nitrogen oxides from combustion, industry and natural sources can react in the atmosphere to form sulfuric and nitric acids. Wind can carry precursors and products across long distances and political boundaries. Acid deposition therefore can affect places far downwind, not only areas next to a coal plant. Wet deposition and dry deposition are related pathways; dry deposition does not require rainfall.",
   "Unpolluted rain is often mildly acidic because dissolved carbon dioxide forms carbonic acid. About pH 5.6 is a useful idealized reference for water equilibrated with atmospheric CO₂, not a universal measured value for every natural rain sample. Stronger sulfuric and nitric acid contributions can increase acidity. The pH scale is logarithmic: under the dilute-solution approximation, pH 4 corresponds to ten times the hydrogen-ion concentration of pH 5. A lower pH means greater hydrogen-ion activity, not a larger numeric pH.",
   "Acidification can stress aquatic organisms, mobilize aluminum from soils, and leach nutrient cations such as calcium. Sensitivity differs among species and sites. Carbonate-rich rocks such as limestone can neutralize added acid and provide buffering; thin soils over poorly buffering bedrock may be more vulnerable. Acids can also weather limestone and marble structures. Compare sites with similar exposure and measure pH, buffering capacity and relevant biology. Treating a lake can address a local symptom, while reducing precursor emissions targets the atmospheric cause."
  ],
  "eqs": [
   "SO₂ and NOx → atmospheric reactions → sulfuric/nitric acids → wet or dry deposition",
   "pH 4 versus pH 5: 10⁻⁴ / 10⁻⁵ = 10 times hydrogen-ion concentration",
   "Carbonate consumes added acid; buffering capacity affects the pH response"
  ],
  "boards": [
   [
    "Acid deposition can be wet or dry",
    "Precursors and products can travel downwind",
    "Sources include combustion and natural processes"
   ],
   [
    "CO₂ makes ordinary rain mildly acidic",
    "pH 5.6 is an idealized reference, not every sample",
    "One pH unit represents a tenfold hydrogen-ion ratio"
   ],
   [
    "Acid can mobilize aluminum and leach nutrients",
    "Limestone can buffer added acid",
    "Emission controls address the precursor source"
   ]
  ],
  "questions": [
   [
    "Which pair contains major gaseous precursors of sulfuric and nitric acid deposition?",
    "Sulfur dioxide and nitrogen oxides",
    "Only molecular oxygen and argon",
    "Only asbestos fibers and lead paint chips",
    "Atmospheric reactions involving SO₂ and NOx form sulfuric and nitric acids. The other pairs do not describe those principal precursor pathways."
   ],
   [
    "Acidic gases and particles settle onto vegetation without rain. What is this pathway?",
    "Dry deposition",
    "Only wet deposition",
    "No deposition because the surface is dry",
    "Dry deposition transfers gases or particles to surfaces without precipitation. Wet deposition involves rain, snow, fog or related water pathways."
   ],
   [
    "Rain delivers sulfuric and nitric acids from the atmosphere to a lake. How is this classified?",
    "Wet acid deposition",
    "Only direct dumping of industrial liquid waste",
    "A process that requires no atmospheric transport",
    "Acids delivered with precipitation are wet deposition. This differs from a direct liquid discharge into the lake."
   ],
   [
    "Why can acid deposition cross national boundaries?",
    "Winds transport precursor gases and reaction products",
    "Pollutants stop automatically at political borders",
    "Only the nearest house can receive atmospheric deposition",
    "Air masses and atmospheric compounds can move long distances. Political borders do not block their transport."
   ],
   [
    "Why is rain containing dissolved atmospheric CO₂ often mildly acidic even without substantial industrial acid input?",
    "Carbonic acid forms in the water",
    "Carbon dioxide always makes water strongly alkaline",
    "All natural rain must have exactly pH 7",
    "Dissolved CO₂ participates in carbonic-acid chemistry. Natural rain chemistry also varies with dust, gases and other conditions."
   ],
   [
    "How should the common pH 5.6 reference for ordinary rain be used?",
    "As an idealized CO₂-equilibrium reference, not a universal value for every sample",
    "As proof that every natural sample has exactly that pH",
    "As the pH of every acidified lake",
    "The reference illustrates carbonic-acid chemistry. Actual rainwater composition and pH depend on additional substances and conditions."
   ],
   [
    "For dilute solutions, how does hydrogen-ion concentration at pH 4 compare with pH 5?",
    "It is ten times as high",
    "It is twice as high",
    "It is one tenth as high",
    "A decrease of one pH unit corresponds to a tenfold increase in hydrogen-ion concentration under the stated approximation."
   ],
   [
    "For dilute solutions, how does hydrogen-ion concentration at pH 4 compare with pH 6?",
    "It is one hundred times as high",
    "It is two times as high",
    "It is one hundred times as low",
    "Two pH units correspond to two factors of ten, giving a hundredfold ratio. The lower-pH sample has the higher concentration."
   ],
   [
    "Which bedrock can often provide substantial acid-neutralizing capacity?",
    "Limestone rich in carbonate minerals",
    "Bedrock that supplies no acid-neutralizing material",
    "Any rock solely because it is hard",
    "Carbonate can react with added acid. Hardness alone is not a measure of chemical buffering capacity."
   ],
   [
    "Two lakes receive similar acid inputs, but one has greater carbonate buffering. What difference may result?",
    "A smaller pH decline in the better-buffered lake",
    "Identical pH changes are required regardless of chemistry",
    "Greater buffering means every added acid molecule raises hydrogen-ion concentration equally",
    "Buffers consume or moderate added acidity. Their amount and chemistry affect the response to a given input."
   ],
   [
    "How can acidification increase harm from aluminum in some watersheds?",
    "It can mobilize aluminum from soil minerals into water",
    "It must transform all aluminum into harmless oxygen",
    "Aluminum mobility is unaffected by all chemical conditions",
    "Acid conditions can increase aluminum release and transport. The response depends on the soil and water chemistry."
   ],
   [
    "Which soil change can accompany acid deposition?",
    "Leaching of nutrient cations such as calcium",
    "Automatic creation of unlimited plant nutrients",
    "A guarantee of higher fertility in every soil",
    "Acidification can promote loss of base cations. The effect depends on buffering and other site conditions."
   ],
   [
    "Why can acid deposition damage limestone or marble structures?",
    "Acid reacts with their carbonate minerals",
    "Only water pressure, never chemistry, can weather these rocks",
    "Acid permanently strengthens every carbonate surface",
    "Carbonate dissolves or reacts under acidic conditions, contributing to weathering. Atmospheric deposition can accelerate this damage."
   ],
   [
    "Which strategy most directly targets an atmospheric cause of acid deposition?",
    "Reduce relevant SO₂ and NOx emissions",
    "Only add a neutralizing material to one affected lake",
    "Only rename the affected watershed",
    "Reducing precursors addresses their atmospheric formation pathway. Local neutralization may address a symptom but does not reduce source emissions."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Acid deposition includes two pathways",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      79,
      181
     ],
     "P1": [
      215,
      181
     ],
     "P2": [
      215,
      111
     ],
     "P3": [
      79,
      111
     ],
     "P4": [
      253,
      181
     ],
     "P5": [
      389,
      181
     ],
     "P6": [
      389,
      111
     ],
     "P7": [
      253,
      111
     ],
     "P8": [
      427,
      181
     ],
     "P9": [
      563,
      181
     ],
     "P10": [
      563,
      111
     ],
     "P11": [
      427,
      111
     ],
     "P12": [
      220,
      146
     ],
     "P13": [
      247,
      146
     ],
     "P14": [
      394,
      146
     ],
     "P15": [
      421,
      146
     ],
     "P16": [
      496,
      105
     ],
     "P17": [
      389,
      57
     ],
     "P18": [
      496,
      105
     ],
     "P19": [
      542,
      57
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19",
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
     },
     {
      "v": "P16P17",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P18P19",
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
       147,
       154
      ],
      "text": "Precursors",
      "col": 0
     },
     {
      "at": [
       147,
       129
      ],
      "text": "SO₂ and NOx",
      "col": 0
     },
     {
      "at": [
       321,
       154
      ],
      "text": "Air reactions",
      "col": 1
     },
     {
      "at": [
       321,
       129
      ],
      "text": "Form acids",
      "col": 1
     },
     {
      "at": [
       495,
       154
      ],
      "text": "Transport",
      "col": 2
     },
     {
      "at": [
       495,
       129
      ],
      "text": "Moves downwind",
      "col": 2
     },
     {
      "at": [
       350,
       29
      ],
      "text": "Wet deposition",
      "col": 0
     },
     {
      "at": [
       515,
       29
      ],
      "text": "Dry deposition",
      "col": 1
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Logarithmic acidity: dilute-solution example",
    "head": "Sample",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "pH 4",
      "Hydrogen-ion concentration about 10⁻⁴ mol/L"
     ],
     [
      "pH 5",
      "Hydrogen-ion concentration about 10⁻⁵ mol/L"
     ],
     [
      "Ratio: pH 4 relative to pH 5",
      "10 to 1"
     ],
     [
      "Lower pH",
      "Greater hydrogen-ion activity"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Trace the environmental response",
    "head": "Process",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Soil acidification",
      "Can mobilize aluminum and leach calcium"
     ],
     [
      "Carbonate-rich bedrock",
      "Can neutralize added acid"
     ],
     [
      "Carbonate monuments",
      "Can react and weather under acid input"
     ],
     [
      "Precursor emission controls",
      "Address the atmospheric cause"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pair contains major gaseous precursors of sulfuric and nitric acid deposition?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Acidic gases and particles settle onto vegetation without rain. What is this pathway?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Rain delivers sulfuric and nitric acids from the atmosphere to a lake. How is this classified?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can acid deposition cross national boundaries?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is rain containing dissolved atmospheric CO₂ often mildly acidic even without substantial industrial acid input?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How should the common pH 5.6 reference for ordinary rain be used?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "For dilute solutions, how does hydrogen-ion concentration at pH 4 compare with pH 5?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "For dilute solutions, how does hydrogen-ion concentration at pH 4 compare with pH 6?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which bedrock can often provide substantial acid-neutralizing capacity?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two lakes receive similar acid inputs, but one has greater carbonate buffering. What difference may result?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can acidification increase harm from aluminum in some watersheds?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which soil change can accompany acid deposition?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can acid deposition damage limestone or marble structures?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which strategy most directly targets an atmospheric cause of acid deposition?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "7.8",
  "name": "Noise Pollution",
  "skill": "s8",
  "boardTitle": "Noise Pollution",
  "teach": [
   "Noise pollution is unwanted or harmful sound that interferes with activities, health or ecological functions. Transportation, machinery, construction and other human activities can increase sound exposure. Effects depend on intensity, frequency, duration and the organism or person exposed. High or prolonged exposures can damage hearing; noise can also disrupt sleep, create stress or interfere with communication without first causing permanent hearing damage. A single sound-level reading does not fully describe a long-term exposure.",
   "Animals use sound to communicate, locate prey or detect danger. Human noise can mask those signals, change behavior or reduce usable habitat. An animal’s response depends on the sound frequencies, timing and its hearing. Source reduction, quieter equipment, barriers, distance and appropriate scheduling can reduce particular exposures; their effectiveness depends on the setting. Compare repeated measurements with consistent equipment and observation periods, and evaluate effects beyond just whether people notice the sound.",
   "Decibels express a logarithmic ratio. For sound intensity levels measured against the same reference, a 10 dB increase corresponds to ten times the intensity, and a 20 dB increase to one hundred times. This is not the same as saying the sound is perceived as ten or one hundred times louder. Human loudness perception also depends on frequency and other factors. In a stated comparison, 90 dB versus 70 dB means a 100-fold intensity ratio; do not subtract the levels and call the result an intensity ratio."
  ],
  "eqs": [
   "Exposure depends on sound level, frequency and duration; effects are not limited to hearing loss",
   "Background noise overlapping a call → masking → reduced signal detection",
   "Intensity ratio = 10^(level difference/10); 90 dB − 70 dB = 20 dB → 100-fold"
  ],
  "boards": [
   [
    "Transport and machinery can be noise sources",
    "Duration and frequency matter as well as level",
    "Sleep, stress and communication can be affected"
   ],
   [
    "Masking makes useful sounds harder to detect",
    "Species differ in hearing and responses",
    "Evaluate source controls and actual exposure"
   ],
   [
    "Decibels are logarithmic",
    "10 dB difference = tenfold intensity ratio",
    "Intensity ratio is not a perceived-loudness ratio"
   ]
  ],
  "questions": [
   [
    "Which is a common human source of environmental noise?",
    "Road traffic and construction machinery",
    "Only chemical reactions that form ozone",
    "Only radioactive decay in soil",
    "Traffic and machinery generate sound. Ozone chemistry and soil radioactivity are different environmental mechanisms."
   ],
   [
    "Which pair of factors belongs in a sound-exposure assessment?",
    "Sound level and exposure duration",
    "Only the name of the machine",
    "Only whether the sound is visible",
    "Level and duration influence exposure, alongside frequency and individual or species sensitivity. Sound need not be visible."
   ],
   [
    "Which effect can occur from environmental noise without requiring permanent hearing loss first?",
    "Sleep disruption or interference with communication",
    "A guarantee that all exposed people become deaf immediately",
    "Conversion of noise into a new gaseous pollutant",
    "Noise can affect sleep, stress and communication. These effects are distinct from permanent hearing damage."
   ],
   [
    "A ship’s noise makes an animal’s call harder for others to detect. Which process is described?",
    "Acoustic masking",
    "Chemical neutralization",
    "Increased species richness by definition",
    "Masking occurs when background sound interferes with detecting a useful signal. It depends on the signal, noise and hearing system."
   ],
   [
    "Why can the same noise source affect two species differently?",
    "Their hearing ranges, behavior and exposure can differ",
    "Every species hears every frequency equally",
    "Only body color determines hearing sensitivity",
    "Species differ in auditory capabilities and uses of sound. The overlap with the source and behavioral context matters."
   ],
   [
    "A quieter machine replaces a noisy one at a work site. Which approach does this illustrate?",
    "Reducing sound at the source",
    "Only measuring sound with no control",
    "Increasing every nearby exposure by definition",
    "Quieter equipment can reduce emitted sound. Measurement alone documents conditions rather than lowering them."
   ],
   [
    "A barrier reduces sound reaching some homes but not homes above it on a hillside. What does this show?",
    "Barrier effectiveness depends on geometry and propagation paths",
    "Every barrier removes all sound everywhere",
    "Noise reduction is independent of source and receiver locations",
    "Sound paths, diffraction and receiver positions affect shielding. A barrier’s benefit is site-dependent."
   ],
   [
    "For intensity levels using the same reference, a sound is 10 dB above another. What is its intensity ratio?",
    "10 to 1",
    "2 to 1",
    "10 dB to 1 gram",
    "A ten-decibel difference represents a factor of ten in sound intensity. Decibels express a logarithmic ratio, not a mass."
   ],
   [
    "For the same reference, how does 90 dB sound intensity compare with 70 dB?",
    "It is 100 times as great",
    "It is 20 times as great",
    "It is 90/70 times as great",
    "The difference is 20 dB, so the intensity ratio is 10^(20/10)=100. Subtracting levels does not directly give the ratio."
   ],
   [
    "Does a tenfold sound-intensity increase mean every listener perceives exactly ten times the loudness?",
    "No; physical intensity and perceived loudness are different measures",
    "Yes; perceived loudness always equals intensity numerically",
    "Yes; frequency and hearing can never affect perception",
    "Loudness perception depends on hearing and frequency as well as intensity. A physical ratio does not specify an identical perceived ratio."
   ],
   [
    "Which design better evaluates a noise-reduction project?",
    "Repeated matched-time measurements before and after, with relevant comparison locations",
    "One measurement at midnight before and rush hour afterward with no context",
    "Only counting how many signs advertise the project",
    "Comparable timing, repeated observations and control locations help separate the project effect from traffic and other changes."
   ],
   [
    "After a new road opens, birds change singing times and avoid the noisiest habitat. What does this support?",
    "Noise can alter behavior and usable habitat, even without direct evidence of hearing damage",
    "Only deafness can produce any ecological response",
    "The road must have increased every species’ reproductive success",
    "Behavior and habitat use can respond to acoustic disturbance. Those observations do not by themselves measure every health or reproductive outcome."
   ]
  ],
  "check": [
   "Two sound intensity levels use the same reference and differ by 30 dB. What is the ratio of the higher intensity to the lower?",
   "1000 to 1",
   "30 to 1",
   "3 to 1",
   "Each 10 dB step multiplies intensity by ten; there are three such steps."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Noise exposure has several dimensions",
    "head": "Dimension",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Sound level",
      "Physical strength of the signal"
     ],
     [
      "Duration",
      "How long exposure lasts"
     ],
     [
      "Frequency",
      "Which sounds overlap hearing or calls"
     ],
     [
      "Outcome",
      "Hearing, sleep, stress or communication"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Noise can mask useful signals",
    "view": [
     44,
     596,
     0,
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
      "text": "Animal signal",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Call or prey sound",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Background noise",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Overlaps signal",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Detection",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Becomes harder",
      "col": 2
     },
     {
      "at": [
       320,
       50
      ],
      "text": "Responses differ with species, sound and setting",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Decibels express an intensity ratio",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      84,
      165
     ],
     "P1": [
      206,
      165
     ],
     "P2": [
      206,
      92
     ],
     "P3": [
      84,
      92
     ],
     "P4": [
      259,
      165
     ],
     "P5": [
      381,
      165
     ],
     "P6": [
      381,
      92
     ],
     "P7": [
      259,
      92
     ],
     "P8": [
      434,
      165
     ],
     "P9": [
      556,
      165
     ],
     "P10": [
      556,
      92
     ],
     "P11": [
      434,
      92
     ],
     "P12": [
      211,
      129
     ],
     "P13": [
      253,
      129
     ],
     "P14": [
      386,
      129
     ],
     "P15": [
      428,
      129
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
       320,
       214
      ],
      "text": "Same intensity reference; not a loudness-perception scale",
      "col": 0
     },
     {
      "at": [
       145,
       137
      ],
      "text": "70 dB",
      "col": 0
     },
     {
      "at": [
       145,
       111
      ],
      "text": "1 × intensity",
      "col": 0
     },
     {
      "at": [
       320,
       137
      ],
      "text": "80 dB",
      "col": 1
     },
     {
      "at": [
       320,
       111
      ],
      "text": "10 × intensity",
      "col": 1
     },
     {
      "at": [
       495,
       137
      ],
      "text": "90 dB",
      "col": 2
     },
     {
      "at": [
       495,
       111
      ],
      "text": "100 × intensity",
      "col": 2
     },
     {
      "at": [
       320,
       37
      ],
      "text": "Each +10 dB multiplies intensity by ten",
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
     "Which is a common human source of environmental noise?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pair of factors belongs in a sound-exposure assessment?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which effect can occur from environmental noise without requiring permanent hearing loss first?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A ship’s noise makes an animal’s call harder for others to detect. Which process is described?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can the same noise source affect two species differently?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A quieter machine replaces a noisy one at a work site. Which approach does this illustrate?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A barrier reduces sound reaching some homes but not homes above it on a hillside. What does this show?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "For intensity levels using the same reference, a sound is 10 dB above another. What is its intensity ratio?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "For the same reference, how does 90 dB sound intensity compare with 70 dB?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Does a tenfold sound-intensity increase mean every listener perceives exactly ten times the loudness?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which design better evaluates a noise-reduction project?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "After a new road opens, birds change singing times and avoid the noisiest habitat. What does this support?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "Two sound intensity levels use the same reference and differ by 30 dB. What is the ratio of the higher intensity to the lower?"
   ],
   "small": false
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Follow a pollutant from its source through transport and chemical changes to exposure and effects. Primary describes direct emission; secondary describes formation after emission, not severity. Ground-level ozone forms through sunlight-driven precursor chemistry, while inversions suppress mixing. Natural origin does not guarantee harmless exposure. Match controls to gases, particles or sound, and check whether a treatment removes a pollutant, transfers it to waste, or changes where people encounter it. Compare consistent sampling, flow rates, units and time periods. Percent removal, percentage-point changes, logarithmic pH and logarithmic sound levels describe different quantities.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-enviro-atmospheric-pollution","subject":"science","level":5,"grade":9,"standard":"AP Environmental Science Unit 7, topics 7.1–7.8, STB-2.A–J; 2026 CED","title":"Atmospheric Pollution","goal":"Trace pollutant sources, atmospheric transformations, exposures and effects, then use evidence to evaluate controls.","points":20,"progression":{"requires":["science-h-ap-enviro-energy-resources"],"operations":3,"demand":"Explain a pollution mechanism, interpret measurements and justify a source-specific control with its limits."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
