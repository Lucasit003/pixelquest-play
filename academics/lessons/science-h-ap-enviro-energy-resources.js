/* Original course unit. Review record: docs/review/lessons/high-completion/ap-enviro-u6-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "6.1",
  "name": "Renewable and Nonrenewable Resources",
  "skill": "s1",
  "boardTitle": "Renewable and Nonrenewable Resources",
  "teach": [
   "Renewable resources are replenished by natural processes on human time scales. Sunlight, wind and flowing water provide renewable energy flows; biomass can regrow. Coal, petroleum, natural gas and uranium are classified as nonrenewable because usable supplies are not replaced on the time scale of their consumption. A renewable resource can still be overused locally: removing wood faster than forest growth reduces the stock. Renewable also does not mean available at every place and every moment.",
   "A primary energy resource occurs in nature. Electricity and manufactured hydrogen are energy carriers produced by converting other energy sources. Their impacts depend on that production process. Follow energy through the system: energy is conserved, but some becomes less useful dispersed heat. Efficiency is useful output divided by input over the same boundary. An output of 30 MJ from 100 MJ input is 30% efficient; the other 70 MJ has not disappeared."
  ],
  "eqs": [
   "Renewable forest: growth 40 tonnes/year − harvest 55 tonnes/year = stock change −15 tonnes/year",
   "Useful output 30 MJ ÷ input 100 MJ × 100 = 30% efficiency"
  ],
  "boards": [
   [
    "Replenishment is measured on a human time scale",
    "Renewable does not mean unlimited local supply",
    "Uranium is nonrenewable but is not a fossil fuel"
   ],
   [
    "Primary resource → conversion → useful service",
    "Electricity is an energy carrier",
    "Useful output ÷ input gives efficiency"
   ]
  ],
  "questions": [
   [
    "Which pair contains only nonrenewable energy resources?",
    "Uranium and coal",
    "Wind and coal",
    "Sunlight and growing wood",
    "Uranium and coal supplies are not replaced on human consumption time scales. Wind, sunlight and regrowing biomass are renewable categories."
   ],
   [
    "A forest adds 40 tonnes of wood annually while 55 tonnes are removed. Ignoring other changes, what happens to stored wood?",
    "It falls by 15 tonnes per year",
    "It rises by 15 tonnes per year",
    "It remains constant because wood is renewable",
    "Annual removals exceed growth by 15 tonnes. Renewable classification does not prevent local depletion."
   ],
   [
    "Solar panels produce less electricity after sunset. Which distinction explains this without reclassifying sunlight as nonrenewable?",
    "Resource renewal and moment-to-moment availability are different",
    "Every intermittent source is nonrenewable",
    "Renewable sources must deliver constant power",
    "Sunlight is renewable, but a panel’s available light varies with time. Storage and other resources can help match supply to demand."
   ],
   [
    "A factory buys electricity generated from natural gas. In this system, which is the secondary energy carrier?",
    "Electricity",
    "Natural gas before combustion",
    "The underground gas deposit",
    "Electricity is produced by conversion of the primary fuel. It is an energy carrier rather than the original underground resource."
   ],
   [
    "A converter receives 100 MJ and delivers 30 MJ of useful energy. What is its efficiency?",
    "30%",
    "70%",
    "333%",
    "Thirty of every 100 input megajoules become the specified useful output, so efficiency is 30%. The remaining energy is not destroyed."
   ],
   [
    "A machine delivers less useful energy than it receives. Which explanation is consistent with energy conservation?",
    "Some input energy leaves as less useful heat",
    "The missing energy has ceased to exist",
    "The machine creates negative energy",
    "Energy changes form or location. Useful-energy losses do not violate conservation of total energy."
   ],
   [
    "Why is uranium not classified as a fossil fuel?",
    "Its usable energy comes from nuclear reactions rather than combustion of ancient organic matter",
    "It is replenished annually by tree growth",
    "It must be burned with oxygen to release its nuclear energy",
    "Nuclear fuel and fossil fuel are both nonrenewable categories, but their energy-release mechanisms and origins differ."
   ],
   [
    "Which comparison addresses environmental effects most completely?",
    "Equal useful services with extraction, production, operation and waste included",
    "Equal equipment names with all upstream effects excluded",
    "Only whether each source is renewable",
    "A common useful service and consistent life-cycle boundaries make comparisons meaningful. Renewable status alone does not measure every impact."
   ],
   [
    "A wind farm and a coal plant supply electricity. Which claim follows from calling wind renewable?",
    "The wind resource is naturally replenished",
    "Wind turbine manufacturing has no impacts",
    "The wind farm always produces its rated power",
    "Renewability concerns the resource. Manufacturing, siting and variable output remain separate questions."
   ],
   [
    "A hydrogen tank is filled using an electrolyzer powered by coal-generated electricity. What additional information matters when evaluating the fuel’s climate impact?",
    "The emissions of producing and delivering its electricity and hydrogen",
    "Only the water emitted by the fuel cell",
    "Only the tank’s color",
    "A carrier’s point-of-use emissions do not reveal its upstream impacts. Production and delivery belong in a life-cycle comparison."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Renewal and local availability are different",
    "head": "Resource",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Sunlight and wind",
      "Renewable flows; output varies"
     ],
     [
      "Wood",
      "Regrowth can be slower than harvest"
     ],
     [
      "Coal, petroleum, gas and uranium",
      "Nonrenewable supplies"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Input energy divides among output pathways",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      85,
      155
     ],
     "P1": [
      238,
      155
     ],
     "P2": [
      238,
      77
     ],
     "P3": [
      85,
      77
     ],
     "P4": [
      373,
      192
     ],
     "P5": [
      548,
      192
     ],
     "P6": [
      548,
      126
     ],
     "P7": [
      373,
      126
     ],
     "P8": [
      243,
      115
     ],
     "P9": [
      367,
      159
     ],
     "P10": [
      373,
      90
     ],
     "P11": [
      548,
      90
     ],
     "P12": [
      548,
      24
     ],
     "P13": [
      373,
      24
     ],
     "P14": [
      243,
      115
     ],
     "P15": [
      367,
      57
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
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
      "v": "P10P11P12P13",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       161,
       124
      ],
      "text": "Input: 100 MJ",
      "col": 0
     },
     {
      "at": [
       460,
       166
      ],
      "text": "Useful output",
      "col": 1
     },
     {
      "at": [
       460,
       143
      ],
      "text": "30 MJ",
      "col": 1
     },
     {
      "at": [
       460,
       64
      ],
      "text": "Other heat",
      "col": 2
     },
     {
      "at": [
       460,
       41
      ],
      "text": "70 MJ",
      "col": 2
     },
     {
      "at": [
       196,
       35
      ],
      "text": "Useful efficiency: 30%",
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
     "Which pair contains only nonrenewable energy resources?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A forest adds 40 tonnes of wood annually while 55 tonnes are removed. Ignoring other changes, what happens to stored wood?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Solar panels produce less electricity after sunset. Which distinction explains this without reclassifying sunlight as nonrenewable?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A factory buys electricity generated from natural gas. In this system, which is the secondary energy carrier?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A converter receives 100 MJ and delivers 30 MJ of useful energy. What is its efficiency?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A machine delivers less useful energy than it receives. Which explanation is consistent with energy conservation?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is uranium not classified as a fossil fuel?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which comparison addresses environmental effects most completely?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A wind farm and a coal plant supply electricity. Which claim follows from calling wind renewable?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A hydrogen tank is filled using an electrolyzer powered by coal-generated electricity. What additional information matters when evaluating the fuel’s climate impact?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "6.2",
  "name": "Global Energy Consumption",
  "skill": "s2",
  "boardTitle": "Global Energy Consumption",
  "teach": [
   "Energy consumption varies among and within countries because of population, income, industry, climate, transport, technology and access. Economic development can raise demand for energy services, but it does not force every country to use the same fuel mix. Prices, policies and infrastructure affect choices. Fossil fuels remain a major part of global energy supply. Distinguish all energy use from electricity alone, and a source’s share from its absolute quantity. A smaller share can still mean more energy if total demand rises.",
   "Per-person consumption equals total consumption divided by population. A populous country can use more total energy but less per person than a smaller country. Comparisons need the same year, units and accounting method. Power measures the rate of energy transfer; energy equals power multiplied by time at constant power. One kilowatt operating for one hour transfers one kilowatt-hour, equal to 3.6 MJ. A high installed power rating alone does not reveal annual energy generation."
  ],
  "eqs": [
   "Country A: 100 PJ ÷ 2 million people = 50 GJ per person",
   "2 kW × 3 h = 6 kWh = 21.6 MJ"
  ],
  "boards": [
   [
    "Total demand and demand per person differ",
    "Development does not prescribe one fuel mix",
    "Energy includes more than electricity"
   ],
   [
    "Power: kW; energy: kWh or MJ",
    "1 kWh = 3.6 MJ",
    "Compare the same year and accounting boundary"
   ]
  ],
  "questions": [
   [
    "Fictional country A uses 100 PJ for 2 million residents; B uses 180 PJ for 6 million. Which comparison is correct?",
    "B uses more total energy, while A uses more per person",
    "B uses more energy both in total and per person",
    "A uses more energy both in total and per person",
    "A uses 50 GJ per person and B uses 30 GJ per person. Population changes the per-person comparison."
   ],
   [
    "A region’s coal share falls from 50% of 100 energy units to 40% of 150 units. What happens to its coal use?",
    "It rises from 50 to 60 units",
    "It falls from 50 to 40 units",
    "It stays at 50 units",
    "Multiply share by total: 0.50×100=50 and 0.40×150=60. A falling share need not mean a falling quantity."
   ],
   [
    "Which factor can help explain high heating-energy use in one region compared with a similar region?",
    "A colder climate and greater heating demand",
    "Latitude alone fixes every household’s fuel choice",
    "All regions must consume identical energy per person",
    "Climate affects demand, while buildings, technology, prices and behavior also matter. No single geographic factor determines every choice."
   ],
   [
    "Two reports compare renewable shares: one measures electricity, the other all primary energy. What must be resolved before treating the shares as directly comparable?",
    "Their different denominators and accounting boundaries",
    "Whether both reports use the word renewable",
    "Only the number of pages in each report",
    "Electricity is one part of energy use. Different denominators can produce different shares without a contradiction."
   ],
   [
    "A 2 kW device operates steadily for 3 hours. How much electrical energy does it use?",
    "6 kWh",
    "6 kW",
    "1.5 kWh",
    "Energy equals rate times duration: 2 kW×3 h=6 kWh. Kilowatts alone measure power, not energy."
   ],
   [
    "Using 1 kWh = 3.6 MJ, how much energy is 6 kWh?",
    "21.6 MJ",
    "1.67 MJ",
    "21600 MJ",
    "Six groups of 3.6 MJ total 21.6 MJ. The kilowatt-hour already includes both power and time."
   ],
   [
    "A country expands public transit and efficient buildings while incomes rise. Which statement is defensible?",
    "Policy and technology can change energy demand relative to income growth",
    "Rising income requires an identical rise in fossil-fuel use everywhere",
    "Energy use depends only on population",
    "Energy services can be delivered with differing fuel mixes and efficiencies. Income is influential but does not mechanically determine fossil demand."
   ],
   [
    "A chart shows total annual energy use but no population data. Which quantity cannot be calculated from that chart alone?",
    "Annual energy use per person",
    "Which plotted year has the largest total",
    "The change between two plotted totals",
    "Per-person use requires a population denominator. Totals alone support comparisons of totals, not per-person values."
   ],
   [
    "Two power plants have equal installed capacity. Why might their annual generation differ?",
    "They can operate at different outputs and for different amounts of time",
    "Equal capacity guarantees equal energy every year",
    "Capacity and annual energy are identical quantities",
    "Generation accumulates over time. Maintenance, resource availability and dispatch can change output even with the same rated capacity."
   ],
   [
    "A factory moves abroad, reducing one country’s recorded domestic energy use while its residents buy the imported goods. What limitation affects a consumption-impact claim?",
    "Energy used to make imports may lie outside the domestic accounting boundary",
    "Imports never require production energy",
    "The decline proves global energy use fell by the same amount",
    "Territorial and consumption-based accounting differ. Relocating production can shift where energy is counted without an equal global reduction."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Fictional countries: total and per person",
    "head": "Country",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "A: 100 PJ; 2 million people",
      "50 GJ per person"
     ],
     [
      "B: 180 PJ; 6 million people",
      "30 GJ per person"
     ],
     [
      "Compare",
      "B higher total; A higher per person"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "From power to energy",
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
      "text": "Power",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "2 kW",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Duration",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "3 hours",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Energy",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "6 kWh",
      "col": 2
     },
     {
      "at": [
       320,
       50
      ],
      "text": "6 kWh = 21.6 MJ; power and energy use different units",
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
     "Fictional country A uses 100 PJ for 2 million residents; B uses 180 PJ for 6 million. Which comparison is correct?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A region’s coal share falls from 50% of 100 energy units to 40% of 150 units. What happens to its coal use?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which factor can help explain high heating-energy use in one region compared with a similar region?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two reports compare renewable shares: one measures electricity, the other all primary energy. What must be resolved before treating the shares as directly comparable?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A 2 kW device operates steadily for 3 hours. How much electrical energy does it use?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Using 1 kWh = 3.6 MJ, how much energy is 6 kWh?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A country expands public transit and efficient buildings while incomes rise. Which statement is defensible?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A chart shows total annual energy use but no population data. Which quantity cannot be calculated from that chart alone?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two power plants have equal installed capacity. Why might their annual generation differ?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A factory moves abroad, reducing one country’s recorded domestic energy use while its residents buy the imported goods. What limitation affects a consumption-impact claim?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "6.3",
  "name": "Fuel Types and Uses",
  "skill": "s3",
  "boardTitle": "Fuel Types and Uses",
  "teach": [
   "Fuels differ in origin, composition and use. Wood can supply heat; charcoal is a carbon-rich fuel made by heating biomass with limited oxygen, with energy and emissions costs during production. Peat is partly decomposed organic material that accumulates slowly in waterlogged settings and is not replaced quickly when extracted for fuel. Coal forms through burial and transformation of ancient plant material. Its principal ranks, from lower to higher, are lignite, subbituminous, bituminous and anthracite; higher rank generally has higher carbon content.",
   "Natural gas is mainly methane. For equal heat released by combustion, it generally emits less carbon dioxide than coal or petroleum fuels, but methane leakage and other life-cycle effects also matter. Crude oil is refined into fuels such as gasoline, diesel and jet fuel. Oil sands contain viscous bitumen mixed with sand, water and clay; obtaining usable fuel requires extraction and processing. Neither the word natural nor the ability to refine a substance makes it renewable.",
   "Cogeneration, or combined heat and power, supplies useful heat along with electricity or mechanical power from the same energy input. Recovering heat that would otherwise be rejected can raise overall useful-energy efficiency when there is a suitable heat demand. It does not make the electrical portion alone equal to total useful output. With 100 MJ input, 30 MJ electricity and 45 MJ useful heat give 75% overall efficiency and 30% electrical efficiency."
  ],
  "eqs": [
   "Plant material → peat → lignite → subbituminous → bituminous → anthracite",
   "Equal combustion heat: compare CO₂; full life cycle: also include extraction and leaks",
   "(30 MJ electricity + 45 MJ useful heat) ÷ 100 MJ = 75% total useful efficiency"
  ],
  "boards": [
   [
    "Wood and charcoal can supply combustion heat",
    "Peat accumulates too slowly for rapid replacement",
    "Coal rank reflects transformation and carbon content"
   ],
   [
    "Natural gas is mainly methane",
    "Refining separates and processes petroleum products",
    "Oil sands require extracting and processing bitumen"
   ],
   [
    "Cogeneration uses otherwise rejected heat",
    "Useful heat demand is needed to obtain the benefit",
    "Electrical and total useful efficiencies differ"
   ]
  ],
  "questions": [
   [
    "Which sequence orders the four main coal ranks from lower to higher?",
    "Lignite, subbituminous, bituminous, anthracite",
    "Anthracite, bituminous, subbituminous, lignite",
    "Lignite, anthracite, bituminous, subbituminous",
    "Coal rank rises through lignite, subbituminous and bituminous to anthracite. Carbon content generally rises with rank."
   ],
   [
    "Which coal rank generally has the highest carbon content?",
    "Anthracite",
    "Lignite",
    "Subbituminous",
    "Anthracite is the highest of the four main ranks. Lignite is the lowest rank in this ordering."
   ],
   [
    "Which description identifies peat?",
    "Partly decomposed organic material accumulated in wet conditions",
    "Refined petroleum separated in a distillation column",
    "Pure uranium prepared for a reactor",
    "Peat contains partially decomposed plant material. It develops slowly and differs from refined petroleum and nuclear fuel."
   ],
   [
    "Why can harvesting peat for fuel deplete its store on a human time scale?",
    "Extraction can greatly exceed its slow accumulation",
    "All organic material regrows within one year",
    "Burning peat immediately rebuilds the deposit",
    "A biological origin does not guarantee rapid replenishment. Peat stores can accumulate far more slowly than they are removed."
   ],
   [
    "Which process makes charcoal from wood?",
    "Heating biomass with limited oxygen",
    "Distilling crude oil into gasoline",
    "Splitting uranium nuclei in a reactor",
    "Charcoal production thermally changes biomass with limited oxygen. It is different from petroleum refining and nuclear fission."
   ],
   [
    "What is the main component of natural gas?",
    "Methane",
    "Carbon dioxide",
    "Molecular hydrogen",
    "Natural gas is predominantly methane, although untreated gas can contain other compounds. It is not primarily carbon dioxide or hydrogen."
   ],
   [
    "A comparison reports less CO₂ from natural gas than coal per unit of heat released by combustion. What does it establish?",
    "A combustion CO₂ advantage under that comparison",
    "Zero greenhouse-gas impact for natural gas",
    "That methane leakage is irrelevant to climate impact",
    "The result concerns combustion emissions for equal heat. A life-cycle evaluation must also consider leakage and other stages."
   ],
   [
    "Which pair contains products commonly made by refining crude oil?",
    "Gasoline and diesel",
    "Uranium and lignite",
    "Wind and sunlight",
    "Petroleum refining produces gasoline, diesel and other products. It does not manufacture geological coal or renewable natural energy flows."
   ],
   [
    "What energy-bearing material is extracted from oil sands?",
    "Bitumen",
    "Enriched uranium",
    "Charcoal made directly by sunlight",
    "Oil sands contain bitumen, a viscous form of petroleum mixed with other materials. Extraction and processing are required."
   ],
   [
    "A plant uses one fuel input to generate electricity and deliver useful heating to nearby buildings. What is this arrangement?",
    "Cogeneration",
    "Radioactive decay",
    "A photovoltaic effect",
    "Cogeneration supplies power and useful thermal energy from one input. Its value depends partly on whether the recovered heat is needed."
   ],
   [
    "A cogeneration plant takes 100 MJ of fuel energy and supplies 30 MJ electricity plus 45 MJ useful heat. What is overall useful efficiency?",
    "75%",
    "30%",
    "45%",
    "Count both useful outputs: 30+45=75 MJ from 100 MJ. Thirty percent is the electrical efficiency alone."
   ],
   [
    "The 45 MJ of recoverable heat from a plant is discharged because no customer can use it. For that operation, can it be counted as useful delivered heat?",
    "No; recoverable heat is not automatically useful output",
    "Yes; every rejected joule is useful by definition",
    "Yes; the electrical efficiency must therefore be 75%",
    "Efficiency depends on the specified useful service and system boundary. Unused rejected heat is not delivered heating."
   ]
  ],
  "check": [
   "A plant uses 200 MJ of fuel and delivers 60 MJ electricity plus 80 MJ useful heat. What is its overall useful-energy efficiency?",
   "70%",
   "30%",
   "40%",
   "The two useful outputs total 140 MJ; compare that total with the 200 MJ input."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Four main coal ranks, lowest to highest",
    "head": "Rank",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "1",
      "Lignite"
     ],
     [
      "2",
      "Subbituminous"
     ],
     [
      "3",
      "Bituminous"
     ],
     [
      "4",
      "Anthracite"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Identify the fuel and process",
    "head": "Fuel",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Natural gas",
      "Mainly methane"
     ],
     [
      "Crude oil",
      "Refined into gasoline, diesel and more"
     ],
     [
      "Oil sands",
      "Bitumen requires extraction and processing"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Cogeneration: count the useful outputs",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      89,
      176
     ],
     "P1": [
      230,
      176
     ],
     "P2": [
      230,
      103
     ],
     "P3": [
      89,
      103
     ],
     "P4": [
      359,
      203
     ],
     "P5": [
      549,
      203
     ],
     "P6": [
      549,
      151
     ],
     "P7": [
      359,
      151
     ],
     "P8": [
      235,
      140
     ],
     "P9": [
      353,
      177
     ],
     "P10": [
      359,
      141
     ],
     "P11": [
      549,
      141
     ],
     "P12": [
      549,
      89
     ],
     "P13": [
      359,
      89
     ],
     "P14": [
      235,
      140
     ],
     "P15": [
      353,
      115
     ],
     "P16": [
      359,
      79
     ],
     "P17": [
      549,
      79
     ],
     "P18": [
      549,
      27
     ],
     "P19": [
      359,
      27
     ],
     "P20": [
      235,
      140
     ],
     "P21": [
      353,
      53
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
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
     },
     {
      "v": "P20P21",
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
      "v": "P10P11P12P13",
      "col": 2
     },
     {
      "v": "P16P17P18P19",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       159,
       144
      ],
      "text": "Fuel: 100 MJ",
      "col": 0
     },
     {
      "at": [
       159,
       120
      ],
      "text": "Energy input",
      "col": 0
     },
     {
      "at": [
       454,
       182
      ],
      "text": "Electricity",
      "col": 1
     },
     {
      "at": [
       454,
       160
      ],
      "text": "30 MJ useful",
      "col": 1
     },
     {
      "at": [
       454,
       120
      ],
      "text": "Recovered heat",
      "col": 2
     },
     {
      "at": [
       454,
       98
      ],
      "text": "45 MJ useful",
      "col": 2
     },
     {
      "at": [
       454,
       58
      ],
      "text": "Other heat",
      "col": 3
     },
     {
      "at": [
       454,
       36
      ],
      "text": "25 MJ rejected",
      "col": 3
     },
     {
      "at": [
       190,
       44
      ],
      "text": "Useful total: 75 MJ",
      "col": 0
     },
     {
      "at": [
       190,
       22
      ],
      "text": "75 / 100 = 75%",
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
     "Which sequence orders the four main coal ranks from lower to higher?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which coal rank generally has the highest carbon content?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which description identifies peat?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can harvesting peat for fuel deplete its store on a human time scale?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which process makes charcoal from wood?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is the main component of natural gas?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A comparison reports less CO₂ from natural gas than coal per unit of heat released by combustion. What does it establish?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which pair contains products commonly made by refining crude oil?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What energy-bearing material is extracted from oil sands?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A plant uses one fuel input to generate electricity and deliver useful heating to nearby buildings. What is this arrangement?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A cogeneration plant takes 100 MJ of fuel energy and supplies 30 MJ electricity plus 45 MJ useful heat. What is overall useful efficiency?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "The 45 MJ of recoverable heat from a plant is discharged because no customer can use it. For that operation, can it be counted as useful delivered heat?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A plant uses 200 MJ of fuel and delivers 60 MJ electricity plus 80 MJ useful heat. What is its overall useful-energy efficiency?"
   ],
   "small": false
  }
 },
 {
  "code": "6.4",
  "name": "Distribution of Natural Energy Resources",
  "skill": "s4",
  "boardTitle": "Distribution of Natural Energy Resources",
  "teach": [
   "Energy resources are unevenly distributed because geological processes, climate and topography differ. Ancient organic deposits, burial conditions and trapping structures help explain fossil-fuel locations. Uranium deposits require suitable geological concentration. Wind, sunlight and flowing water also vary geographically. Physical presence is only the starting point: depth, concentration, technology, access, costs and environmental constraints affect whether a resource can be used.",
   "A resource estimate and an economically recoverable reserve are not the same thing. Reserve estimates can change when prices, technology or knowledge change, even without forming new fuel. Resource-rich areas can export fuel, and areas with little domestic fuel can import it or generate electricity using other resources. Maps of deposits do not by themselves show national energy consumption, household access or the impacts of extraction. Compare the resource map with the infrastructure and demand data."
  ],
  "eqs": [
   "Favorable geology → possible deposit; deposit + feasible recovery → usable supply",
   "Better information or recovery technology can change reserves without renewing a deposit"
  ],
  "boards": [
   [
    "Geology helps explain coal, oil, gas and uranium",
    "Wind, sunlight and water also vary by location",
    "A deposit is not automatically economical to use"
   ],
   [
    "Resources and recoverable reserves differ",
    "Imports and infrastructure connect regions",
    "Location alone does not determine consumption"
   ]
  ],
  "questions": [
   [
    "Two regions have similar populations but very different coal deposits. Which explanation is most relevant?",
    "Different geological histories of deposition and burial",
    "Their populations must have created the coal recently",
    "Equal population guarantees equal underground resources",
    "Coal distribution reflects geological formation and preservation, not present population size."
   ],
   [
    "An oil deposit lies very deep offshore. What additional information is needed to judge practical recovery?",
    "Extraction technology, costs and environmental constraints",
    "Only whether petroleum molecules exist there",
    "Only the nearest country’s population",
    "A physical deposit may be technically or economically difficult to recover. Location alone does not establish usable reserves."
   ],
   [
    "A new technique makes some previously uneconomic gas recoverable. What can increase without creating new gas underground?",
    "Estimated recoverable reserves",
    "The natural rate at which fossil fuel forms",
    "The amount of sunlight converted to methane that day",
    "Reserves reflect recoverability under stated conditions. Improved recovery can change the estimate without replenishing the geological resource."
   ],
   [
    "A country has little domestic oil but high petroleum use. Which mechanism can explain this?",
    "Imports through trade and transport infrastructure",
    "Oil consumption must equal domestic production",
    "All imported energy must be counted as domestic extraction",
    "Consumption can be supplied by imports. Production and use need not occur in the same country."
   ],
   [
    "A map shows strong winds on a ridge. Which further check is needed before choosing a wind project there?",
    "Grid access, measured wind patterns and site impacts",
    "An assumption that strong wind eliminates all siting constraints",
    "Only whether the ridge is near a coal seam",
    "Resource quality is one factor. Transmission, variability and environmental or social effects also influence suitability."
   ],
   [
    "Which map would most directly help locate conventional hydroelectric opportunities?",
    "Water flow and elevation differences",
    "Only underground uranium concentration",
    "Only the number of households with gasoline cars",
    "Hydropower uses flowing water and hydraulic head. Geological uranium or car counts do not directly measure those conditions."
   ],
   [
    "An area contains uranium in rock at extremely low concentrations. Which conclusion follows?",
    "Presence alone does not establish economical fuel extraction",
    "Every rock containing uranium is a profitable mine",
    "Uranium must be renewable because it is widespread",
    "Concentration, processing, access and costs affect recoverability. Broad occurrence is not equivalent to economical supply."
   ],
   [
    "A fuel-reserve estimate falls after a price decline makes some deposits uneconomic. What need not have happened?",
    "Those deposits need not have physically disappeared",
    "All fuel prices must have risen",
    "The reserve definition must equal all fuel ever formed",
    "Reserve estimates depend on economics as well as geology. A lower estimate can reclassify material still physically present."
   ],
   [
    "A city imports most of its electricity. Why is a map of local power plants insufficient to describe its supply?",
    "Its electricity can be generated outside the city and transmitted in",
    "Electricity cannot cross political boundaries",
    "Every imported kilowatt-hour must come from local sunlight",
    "Transmission connects generation and consumption in different places. Local generators alone do not describe all supply."
   ],
   [
    "A proposed extraction site is close to an ecologically sensitive wetland. What is missing from an evaluation based only on fuel quantity?",
    "Potential habitat and water impacts of development",
    "The assumption that larger deposits erase ecological costs",
    "Proof that fuel quantity measures all environmental effects",
    "Resource size measures potential supply, not the full consequences of accessing it. Environmental effects require additional evidence."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "A deposit is only the beginning",
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
      "text": "Geology",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Resource occurs",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Recovery",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Cost and tools",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Delivery",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Infrastructure",
      "col": 2
     },
     {
      "at": [
       320,
       50
      ],
      "text": "Environmental constraints and local needs also matter",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "A changing reserve estimate",
    "head": "Change",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Better exploration data",
      "Changes knowledge of the resource"
     ],
     [
      "Improved recovery technology",
      "Can make more material recoverable"
     ],
     [
      "Different prices and costs",
      "Can change economic feasibility"
     ],
     [
      "None of these alone",
      "Creates new geological fuel"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two regions have similar populations but very different coal deposits. Which explanation is most relevant?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An oil deposit lies very deep offshore. What additional information is needed to judge practical recovery?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A new technique makes some previously uneconomic gas recoverable. What can increase without creating new gas underground?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A country has little domestic oil but high petroleum use. Which mechanism can explain this?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A map shows strong winds on a ridge. Which further check is needed before choosing a wind project there?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which map would most directly help locate conventional hydroelectric opportunities?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An area contains uranium in rock at extremely low concentrations. Which conclusion follows?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fuel-reserve estimate falls after a price decline makes some deposits uneconomic. What need not have happened?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A city imports most of its electricity. Why is a map of local power plants insufficient to describe its supply?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A proposed extraction site is close to an ecologically sensitive wetland. What is missing from an evaluation based only on fuel quantity?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "6.5",
  "name": "Fossil Fuels",
  "skill": "s5",
  "boardTitle": "Fossil Fuels",
  "teach": [
   "Fossil fuels store chemical energy from ancient organic material. Combustion releases heat when fuel reacts with oxygen. Complete combustion of methane produces carbon dioxide and water; incomplete combustion can also produce carbon monoxide and soot. In many power plants, heat produces steam that turns a turbine connected to a generator. Gas turbines instead use hot combustion gases, and combined-cycle plants recover some exhaust heat to run a steam cycle. Not every fossil-fuel plant uses the same equipment.",
   "Extraction and combustion create different impacts. Coal is extracted by surface or underground mining depending on deposit depth and conditions; oil and gas are commonly recovered through drilled wells. Coal mining disturbs land and can contaminate water; coal combustion can emit particulates, sulfur dioxide, nitrogen oxides, mercury and carbon dioxide, and produces ash. Petroleum spills can damage aquatic and coastal habitats. Hydraulic fracturing opens fractures in rock using pressurized fluid to aid oil or gas flow. Spills, faulty well construction or wastewater handling can contaminate water, and operations can release methane and volatile organic compounds. These are risks with identifiable pathways, not proof that every well causes the same harm.",
   "Compare equal useful outputs. A more efficient plant needs less fuel for the same electricity, all else equal. Pollution controls target particular pollutants: removing particles does not automatically remove carbon dioxide. Thermal power plants also reject heat, which can warm receiving water where cooling discharges are not adequately managed. Warming generally lowers water’s oxygen solubility. Evaluate fuel extraction, combustion, waste, cooling and upstream emissions within a consistent boundary."
  ],
  "eqs": [
   "Complete methane combustion: CH₄ + 2 O₂ → CO₂ + 2 H₂O + released energy",
   "Spill or failed well barrier → exposure pathway → possible water contamination",
   "120 MJ electricity ÷ 0.40 efficiency = 300 MJ fuel input"
  ],
  "boards": [
   [
    "Chemical energy → heat → motion → electricity",
    "Gas turbines and steam turbines use different flows",
    "Incomplete combustion can produce CO and soot"
   ],
   [
    "Mining, drilling and transport have distinct impacts",
    "Fracturing fluid and wastewater need management",
    "Trace an exposure pathway; do not assume certainty"
   ],
   [
    "Compare equal useful electricity",
    "A pollutant control has a specific target",
    "Waste heat can affect receiving water"
   ]
  ],
  "questions": [
   [
    "Which products result from complete combustion of methane with sufficient oxygen?",
    "Carbon dioxide and water",
    "Only carbon monoxide and hydrogen",
    "Uranium and oxygen",
    "Complete methane combustion forms CO₂ and H₂O. Carbon monoxide is associated with incomplete combustion, not the complete-reaction equation."
   ],
   [
    "A conventional coal-fired steam plant generates electricity. Which sequence best traces its energy conversion?",
    "Chemical energy to heat to turbine motion to electricity",
    "Electricity to uranium fission to sunlight",
    "Turbine motion directly creates new coal",
    "Burning coal supplies heat, steam moves the turbine, and the generator converts mechanical energy into electrical energy."
   ],
   [
    "What distinguishes a combined-cycle gas plant from a simple gas-turbine plant?",
    "It uses some hot exhaust energy in an additional steam cycle",
    "It converts all fuel energy to electricity without rejected heat",
    "It requires uranium fission to heat the exhaust",
    "The additional cycle recovers useful work from hot exhaust. Efficiency increases, but rejected heat and other losses remain."
   ],
   [
    "A 40%-efficient plant must deliver 120 MJ of electricity. How much fuel energy is required?",
    "300 MJ",
    "48 MJ",
    "160 MJ",
    "Forty percent of 300 MJ is 120 MJ. Multiplying 120 by 0.40 would apply the efficiency in the wrong direction."
   ],
   [
    "Two plants deliver equal electricity. One needs less of the same fuel per kilowatt-hour. What follows if all other conditions and emissions per fuel unit are equal?",
    "It emits less combustion CO₂ per kilowatt-hour",
    "It necessarily emits zero CO₂",
    "Its fuel is now renewable",
    "Less fuel burned for the same output reduces combustion emissions under the stated assumptions. It does not eliminate emissions or renew the fuel."
   ],
   [
    "A coal plant installs a filter that captures particulate matter. Which claim needs separate evidence?",
    "That the filter also removes its carbon dioxide emissions",
    "That the device can reduce the particles it is designed to capture",
    "That different pollutants may need different controls",
    "Particle capture does not by itself capture gaseous CO₂. A control’s target and actual performance must be checked."
   ],
   [
    "Which is an extraction-related impact rather than a combustion product?",
    "Habitat disturbance from coal mining",
    "Carbon dioxide formed during coal burning",
    "Sulfur dioxide released from burning sulfur-containing fuel",
    "Mining affects land before the fuel is burned. CO₂ and SO₂ in these examples are combustion-stage emissions."
   ],
   [
    "What is hydraulic fracturing intended to do?",
    "Create or extend rock fractures so oil or gas can flow more readily",
    "Turn wind into electricity at the wellhead",
    "Remove all need for water handling during drilling",
    "Pressurized fluids open flow pathways in low-permeability rock. Water and waste management remain important."
   ],
   [
    "Wastewater from gas extraction leaks from a poorly managed surface storage area. Which mechanism can affect a nearby stream?",
    "Contaminants can be carried by runoff or seepage",
    "Deep rock fractures are the only possible contamination pathway",
    "Natural gas cannot have environmental effects before burning",
    "Surface spills and leaks are possible exposure routes. Environmental evaluation must consider the whole operation."
   ],
   [
    "A gas pipeline leaks methane. Why does a combustion-only carbon dioxide inventory miss part of its climate effect?",
    "Unburned methane is itself a greenhouse gas",
    "Methane has no climate effect until converted to coal",
    "Only visible smoke can affect climate",
    "Methane leakage contributes to climate forcing without first being burned to CO₂. A full accounting includes relevant upstream emissions."
   ],
   [
    "A plant’s cooling discharge raises a stream’s temperature. What physical change can stress aquatic organisms?",
    "Lower oxygen solubility in warmer water",
    "A guaranteed increase in dissolved oxygen capacity",
    "Immediate conversion of water into a fossil fuel",
    "Warmer water generally holds less oxygen at equilibrium. Thermal discharge can combine with organisms’ changing oxygen demand."
   ],
   [
    "An oil spill coats shoreline habitat. What would a meaningful impact assessment examine?",
    "Exposure, affected habitats and recovery over time",
    "Only the energy content of the spilled oil",
    "An assumption that all spills have identical consequences",
    "Ecological harm depends on where and how organisms are exposed, the material and conditions, and the effectiveness of response and recovery."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "A simplified steam power pathway",
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
      "text": "Fuel",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Combustion heat",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Steam turbine",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Mechanical work",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Generator",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Electricity",
      "col": 2
     },
     {
      "at": [
       320,
       50
      ],
      "text": "Gas turbines and combined cycles use other arrangements",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Trace the pathway and the impact",
    "head": "Stage",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Mining and drilling",
      "Land disturbance and water risks"
     ],
     [
      "Fuel transport",
      "Leaks or spills can expose habitats"
     ],
     [
      "Combustion",
      "CO₂ and other pollutants; fuel-dependent"
     ],
     [
      "Cooling discharge",
      "Waste heat can warm receiving water"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Equal electrical output: fictional plants",
    "head": "Plant",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "A: 40% efficiency",
      "120 MJ output needs 300 MJ fuel"
     ],
     [
      "B: 50% efficiency",
      "120 MJ output needs 240 MJ fuel"
     ],
     [
      "Difference",
      "B needs 60 MJ less fuel"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which products result from complete combustion of methane with sufficient oxygen?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A conventional coal-fired steam plant generates electricity. Which sequence best traces its energy conversion?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What distinguishes a combined-cycle gas plant from a simple gas-turbine plant?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A 40%-efficient plant must deliver 120 MJ of electricity. How much fuel energy is required?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two plants deliver equal electricity. One needs less of the same fuel per kilowatt-hour. What follows if all other conditions and emissions per fuel unit are equal?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A coal plant installs a filter that captures particulate matter. Which claim needs separate evidence?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which is an extraction-related impact rather than a combustion product?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is hydraulic fracturing intended to do?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Wastewater from gas extraction leaks from a poorly managed surface storage area. Which mechanism can affect a nearby stream?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A gas pipeline leaks methane. Why does a combustion-only carbon dioxide inventory miss part of its climate effect?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A plant’s cooling discharge raises a stream’s temperature. What physical change can stress aquatic organisms?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An oil spill coats shoreline habitat. What would a meaningful impact assessment examine?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "6.6",
  "name": "Nuclear Power",
  "skill": "s6",
  "boardTitle": "Nuclear Power",
  "teach": [
   "In a nuclear reactor, fission splits heavy nuclei such as uranium-235 and releases energy and neutrons. A controlled chain reaction supplies heat, which is transferred to make steam that drives a turbine-generator system. Control rods absorb neutrons; coolant transfers heat. This is not chemical burning, and commercial nuclear electricity comes from fission rather than fusion. Uranium fuel is nonrenewable. The reactor does not emit combustion carbon dioxide, but fuel mining, construction and other life-cycle stages can have emissions.",
   "Radioactive decay is a spontaneous nuclear change that emits radiation. For a particular parent isotope, half-life is the time for half of a large initial population of its undecayed nuclei to decay. Repeated equal half-lives halve what remains; they do not subtract a fixed amount. If 80 g of a parent isotope has a 10-year half-life, 40 g remains after 10 years, 20 g after 20, and 10 g after 30. The daughter products remain matter and may themselves be radioactive. This simple calculation follows the parent isotope only.",
   "Spent nuclear fuel contains multiple radionuclides, including fission products and heavier elements formed in the reactor. Their half-lives differ, so waste does not have one universal half-life. It requires cooling initially, shielding and secure isolation appropriate to its hazards. Stopping the chain reaction does not instantly stop decay heat. Nuclear plants, like other thermal plants, can affect cooling-water temperatures; nuclear waste hazards and thermal discharge are different issues.",
   "Three Mile Island in the United States (1979), Chernobyl in the then Soviet Union, now Ukraine (1986), and Fukushima Daiichi in Japan (2011) illustrate different accident conditions and consequences. Three Mile Island involved a partial core meltdown with small releases; NRC assessments found no detectable health effects from those releases. Chernobyl’s reactor destruction released large quantities of radioactive material. At Fukushima, the earthquake and tsunami led to loss of power and cooling and severe reactor damage. Compare causes, releases and exposure evidence rather than assuming all nuclear accidents have identical outcomes."
  ],
  "eqs": [
   "Fission → heat → steam → turbine → generator; control rods absorb neutrons",
   "80 g → 40 g → 20 g → 10 g over three 10-year half-lives",
   "Shutdown stops the sustained chain reaction; radioactive decay still releases heat",
   "Accident comparison: cause → barrier failure → release → exposure → measured effects"
  ],
  "boards": [
   [
    "Fission splits nuclei; fusion combines light nuclei",
    "Fuel rods, control rods and coolant have different jobs",
    "No combustion CO₂ does not mean zero life-cycle impact"
   ],
   [
    "Halve the remaining parent isotope each half-life",
    "Three half-lives leave one eighth",
    "Daughter products are not destroyed matter"
   ],
   [
    "Waste contains a mixture of radionuclides",
    "Cooling, shielding and isolation serve different roles",
    "Decay heat continues after chain-reaction shutdown"
   ],
   [
    "1979: Three Mile Island, United States",
    "1986: Chernobyl, then Soviet Union",
    "2011: Fukushima Daiichi, Japan"
   ]
  ],
  "questions": [
   [
    "What process provides the principal heat in a commercial uranium-fueled nuclear reactor?",
    "Fission of heavy atomic nuclei",
    "Combustion of uranium with atmospheric oxygen",
    "Fusion of hydrogen as in the Sun",
    "Commercial uranium reactors use nuclear fission. This differs from chemical combustion and from fusion of light nuclei."
   ],
   [
    "What is the main role of control rods in a fission reactor?",
    "Absorb neutrons to help control the chain reaction",
    "Supply oxygen for the fuel to burn",
    "Convert steam directly into electrical current",
    "Neutron absorption changes the chain reaction. Coolant transfers heat, while turbines and generators convert energy to electricity."
   ],
   [
    "Which sequence describes a typical nuclear electricity system?",
    "Nuclear energy to heat to turbine motion to electricity",
    "Nuclear energy directly to sunlight in the fuel rods",
    "Coal combustion to uranium creation to electricity",
    "Fission releases energy that becomes heat; steam drives a turbine connected to a generator. The fuel is not burned like coal."
   ],
   [
    "Which statement correctly limits a nuclear emissions claim?",
    "The reactor has no combustion CO₂, while construction and fuel supply can cause emissions",
    "No stage of a nuclear project can have environmental impacts",
    "Uranium mining uses no energy by definition",
    "Operating the reactor is only one stage. Life-cycle comparisons also include mining, processing, construction and waste management."
   ],
   [
    "Why is uranium-fueled nuclear power classified as nonrenewable?",
    "Usable uranium is not replenished on the time scale of consumption",
    "Every nonrenewable source must be a fossil fuel",
    "Radioactive decay creates replacement fuel as quickly as it is used",
    "Nonrenewable classification concerns supply replenishment. Nuclear fuel need not be a fossil fuel to be nonrenewable."
   ],
   [
    "A parent isotope has a 10-year half-life. Starting with 80 g, how much parent isotope remains after 30 years in a closed sample?",
    "10 g",
    "20 g",
    "0 g",
    "Three half-lives give 80→40→20→10 g of the parent. Decayed material becomes daughter products rather than disappearing."
   ],
   [
    "A parent isotope has a 5-year half-life. What fraction remains after 10 years?",
    "One quarter",
    "One half",
    "None",
    "Ten years is two half-lives: half of a half is one quarter. Decay is multiplicative rather than a fixed subtraction."
   ],
   [
    "A single isolated parent isotope’s activity is 800 decays per second initially. Ignoring daughter activity, what is its activity after three half-lives?",
    "100 decays per second",
    "200 decays per second",
    "0 decays per second",
    "For the same parent isotope, activity is proportional to the remaining nuclei: 800→400→200→100. Daughter contributions are explicitly excluded."
   ],
   [
    "Which conclusion about a real spent-fuel mixture is justified by knowing only one isotope’s half-life?",
    "Its entire future hazard cannot be determined from that value alone",
    "Every isotope in the waste has that same half-life",
    "The waste becomes harmless exactly one half-life later",
    "Waste contains multiple radionuclides with different activities, half-lives and daughter products. One half-life does not define the mixture’s total hazard."
   ],
   [
    "Why does a reactor require heat removal after its sustained chain reaction has been stopped?",
    "Radioactive decay continues to produce heat",
    "Shutdown necessarily makes the chain reaction grow faster",
    "Coolant is needed only to provide oxygen for combustion",
    "Fission products and other radionuclides continue to decay after shutdown. Removing this decay heat is an important safety function."
   ],
   [
    "What is one purpose of water in a spent-fuel storage pool?",
    "Remove heat and provide radiation shielding",
    "Instantly eliminate every radioactive nucleus",
    "Convert all spent fuel into renewable biomass",
    "Pool water provides cooling and shielding. It does not instantly stop radioactivity or change the fuel into biomass."
   ],
   [
    "A statement says nuclear waste is hazardous only because unused uranium-235 remains. What is missing?",
    "Fission products and other radionuclides also contribute to the hazard",
    "All spent fuel consists only of stable water",
    "No nuclear reaction produces new nuclides",
    "Spent fuel is a mixture, including radioactive fission products and heavier elements. Its hazards cannot be attributed solely to original uranium."
   ],
   [
    "Which accident followed an earthquake and tsunami that disrupted power and cooling in Japan in 2011?",
    "Fukushima Daiichi",
    "Three Mile Island",
    "Chernobyl",
    "Fukushima Daiichi experienced the 2011 disaster in Japan. Three Mile Island occurred in the United States in 1979 and Chernobyl in 1986."
   ],
   [
    "Which accident occurred in 1986 at a plant in the then Soviet Union, in what is now Ukraine?",
    "Chernobyl",
    "Fukushima Daiichi",
    "Three Mile Island",
    "Chernobyl’s reactor accident occurred in 1986. The location was then part of the Soviet Union and is now in Ukraine."
   ],
   [
    "NRC assessments report no detectable health effects from the small radioactive releases at Three Mile Island. Which inference respects that finding?",
    "It should not be treated as having the same demonstrated release consequences as every other accident",
    "It proves no nuclear accident can harm anyone",
    "It proves the reactor suffered no damage",
    "A finding about one accident’s releases does not erase its reactor damage or establish consequences for every other event."
   ],
   [
    "A nuclear plant warms receiving water without releasing radioactive material into it. Which impact is being described?",
    "Thermal pollution",
    "Necessarily radioactive contamination",
    "A change in uranium’s half-life",
    "Heat discharge can alter water temperature independently of radioactive contamination. These are distinct exposure mechanisms."
   ]
  ],
  "check": [
   "A closed sample begins with 64 g of a parent isotope whose half-life is 8 years. How much parent isotope remains after 24 years?",
   "8 g",
   "16 g",
   "0 g",
   "Twenty-four years spans three half-lives. Halve the remaining parent amount three times."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "A simplified nuclear power pathway",
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
      "text": "Fission",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Nuclear heat",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Steam turbine",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Mechanical work",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Generator",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Electricity",
      "col": 2
     },
     {
      "at": [
       320,
       50
      ],
      "text": "Control rods absorb neutrons; coolant transfers heat",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Radioactive decay is repeated halving",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      98,
      182
     ],
     "P1": [
      154,
      182
     ],
     "P2": [
      154,
      70
     ],
     "P3": [
      98,
      70
     ],
     "P4": [
      226,
      126
     ],
     "P5": [
      282,
      126
     ],
     "P6": [
      282,
      70
     ],
     "P7": [
      226,
      70
     ],
     "P8": [
      354,
      98
     ],
     "P9": [
      410,
      98
     ],
     "P10": [
      410,
      70
     ],
     "P11": [
      354,
      70
     ],
     "P12": [
      482,
      84
     ],
     "P13": [
      538,
      84
     ],
     "P14": [
      538,
      70
     ],
     "P15": [
      482,
      70
     ],
     "P16": [
      87,
      69
     ],
     "P17": [
      553,
      69
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17",
    "dots": "",
    "segs": [
     {
      "v": "P16P17",
      "col": 3,
      "arrows": 0,
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
     },
     {
      "v": "P12P13P14P15",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Parent isotope only; half-life = 10 years",
      "col": 0
     },
     {
      "at": [
       126,
       194
      ],
      "text": "80 g",
      "col": 0
     },
     {
      "at": [
       126,
       41
      ],
      "text": "0 years",
      "col": 0
     },
     {
      "at": [
       254,
       138
      ],
      "text": "40 g",
      "col": 1
     },
     {
      "at": [
       254,
       41
      ],
      "text": "10 years",
      "col": 1
     },
     {
      "at": [
       382,
       110
      ],
      "text": "20 g",
      "col": 2
     },
     {
      "at": [
       382,
       41
      ],
      "text": "20 years",
      "col": 2
     },
     {
      "at": [
       510,
       96
      ],
      "text": "10 g",
      "col": 3
     },
     {
      "at": [
       510,
       41
      ],
      "text": "30 years",
      "col": 3
     },
     {
      "at": [
       320,
       13
      ],
      "text": "Each equal time interval halves the remaining parent",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Different nuclear-system concerns",
    "head": "Concern",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Spent fuel",
      "Cooling, shielding and isolation"
     ],
     [
      "Reactor shutdown",
      "Decay heat still needs removal"
     ],
     [
      "Cooling-water discharge",
      "Possible thermal effects"
     ],
     [
      "Life cycle",
      "Include fuel supply and construction"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Different accidents, different evidence",
    "head": "Event",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Three Mile Island, 1979",
      "United States; partial core meltdown"
     ],
     [
      "Chernobyl, 1986",
      "Then USSR, now Ukraine; large release"
     ],
     [
      "Fukushima Daiichi, 2011",
      "Japan; earthquake and tsunami"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What process provides the principal heat in a commercial uranium-fueled nuclear reactor?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is the main role of control rods in a fission reactor?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which sequence describes a typical nuclear electricity system?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement correctly limits a nuclear emissions claim?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is uranium-fueled nuclear power classified as nonrenewable?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A parent isotope has a 10-year half-life. Starting with 80 g, how much parent isotope remains after 30 years in a closed sample?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A parent isotope has a 5-year half-life. What fraction remains after 10 years?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A single isolated parent isotope’s activity is 800 decays per second initially. Ignoring daughter activity, what is its activity after three half-lives?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which conclusion about a real spent-fuel mixture is justified by knowing only one isotope’s half-life?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why does a reactor require heat removal after its sustained chain reaction has been stopped?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is one purpose of water in a spent-fuel storage pool?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A statement says nuclear waste is hazardous only because unused uranium-235 remains. What is missing?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which accident followed an earthquake and tsunami that disrupted power and cooling in Japan in 2011?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which accident occurred in 1986 at a plant in the then Soviet Union, in what is now Ukraine?"
    ],
    "small": false
   },
   "14": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "NRC assessments report no detectable health effects from the small radioactive releases at Three Mile Island. Which inference respects that finding?"
    ],
    "small": false
   },
   "15": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A nuclear plant warms receiving water without releasing radioactive material into it. Which impact is being described?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A closed sample begins with 64 g of a parent isotope whose half-life is 8 years. How much parent isotope remains after 24 years?"
   ],
   "small": false
  }
 },
 {
  "code": "6.7",
  "name": "Energy from Biomass",
  "skill": "s7",
  "boardTitle": "Energy from Biomass",
  "teach": [
   "Biomass includes recently living organic material such as wood, crop residues and organic wastes. It can be burned for heat or processed into fuels, including ethanol and biogas. Biomass combustion releases carbon dioxide and can emit particulates, carbon monoxide, nitrogen oxides and volatile organic compounds. In poorly ventilated settings, smoke can create substantial exposure. Harvesting fuelwood faster than regrowth depletes vegetation and can damage soils and habitats. A renewable category does not mean harmless combustion or sustainable harvesting.",
   "Ethanol can replace part of petroleum gasoline in suitable fuel systems, but burning it still releases carbon dioxide. Plants absorbed carbon while growing; whether this offsets emissions depends on regrowth, land-use change, production inputs and the time period considered. Fertilizer, transport and processing can add impacts, and using cropland for fuel can compete with other uses. Energy return on investment compares usable energy delivered with energy spent obtaining it. Its value depends on feedstock and production, not one fixed value for every biofuel."
  ],
  "eqs": [
   "Biomass carbon → combustion CO₂; renewed plant growth can take up CO₂ over time",
   "Energy return: 150 MJ delivered ÷ 100 MJ invested = 1.5; net gain = 50 MJ"
  ],
  "boards": [
   [
    "Biomass can supply heat, liquid fuels or biogas",
    "Smoke can contain harmful gases and particles",
    "Harvest must be compared with regrowth"
   ],
   [
    "Ethanol combustion emits carbon dioxide",
    "Life-cycle balances include land and processing",
    "Energy return depends on feedstock and methods"
   ]
  ],
  "questions": [
   [
    "Which material is a biomass energy feedstock?",
    "Wood residues from recently harvested trees",
    "Uranium ore",
    "Ancient petroleum in a reservoir",
    "Wood residues are recently living organic matter. Petroleum is a fossil fuel, and uranium is nuclear fuel."
   ],
   [
    "Wood is burned for household heat. Which statement is accurate?",
    "The combustion can release particulates and carbon monoxide",
    "Renewable fuel cannot produce air pollution",
    "All smoke consists only of harmless water vapor",
    "Biomass combustion can emit harmful particles and gases. Renewable origin does not determine whether smoke is harmless."
   ],
   [
    "Fuelwood removal exceeds forest regrowth over many years. Which outcome is most directly expected?",
    "Declining wood stocks and possible habitat degradation",
    "Automatic maintenance of the original stock",
    "Conversion of the forest into a fossil-fuel reserve",
    "Persistent removal above renewal depletes biomass. Associated soil and habitat effects depend on local conditions."
   ],
   [
    "Which statement about burning ethanol is chemically correct?",
    "It releases carbon dioxide from carbon in the fuel",
    "It releases no carbon dioxide because plants once absorbed carbon",
    "It transforms all carbon atoms into oxygen atoms",
    "Combustion releases carbon as CO₂. Prior plant uptake belongs in a carbon balance, not a denial of combustion emissions."
   ],
   [
    "A biofuel analysis counts crop uptake but omits forest clearing for new cropland. What is missing?",
    "Land-use change can alter the net carbon balance",
    "Plant growth makes all land conversion emissions irrelevant",
    "Only fuel color matters once the feedstock is renewable",
    "Land clearing can release stored carbon and change future uptake. A consistent life-cycle assessment includes those changes."
   ],
   [
    "A biofuel process delivers 150 MJ after requiring 100 MJ of invested energy. What is its energy return on investment?",
    "1.5",
    "0.5",
    "50",
    "The ratio is delivered energy divided by invested energy: 150/100=1.5. Fifty MJ is the net energy gain, not the ratio."
   ],
   [
    "For 150 MJ delivered and 100 MJ invested, what is the net energy gain under this stated accounting?",
    "50 MJ",
    "250 MJ",
    "1.5 MJ",
    "Net gain is output minus invested energy: 150−100=50 MJ. This differs from the dimensionless energy-return ratio."
   ],
   [
    "Why might two ethanol production systems have different climate impacts per unit of fuel energy?",
    "Their feedstocks, processing energy and land-use changes can differ",
    "All ethanol systems must have identical life cycles",
    "Combustion alone records every agricultural input",
    "Fuel identity alone does not specify the production chain. Land, fertilizer, process heat and other inputs influence the result."
   ],
   [
    "A project captures methane from decomposing organic waste and uses it as fuel. Which category best fits the captured fuel?",
    "Biogas derived from biomass",
    "Uranium produced by decay",
    "Unprocessed wind energy",
    "Anaerobic decomposition can produce methane-containing biogas. It is a biomass-derived fuel rather than nuclear or wind energy."
   ],
   [
    "A region diverts food-crop land to fuel crops. Which tradeoff should be examined?",
    "Potential competition for land, water and food production",
    "A guarantee that all food prices and water demand fall",
    "Proof that fuel crops require no agricultural inputs",
    "Fuel crops can compete with other uses for resources. The magnitude and outcome depend on local production and markets."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Biomass carbon: uptake and release",
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
      "text": "Plant growth",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Carbon uptake",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Biomass fuel",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Stored carbon",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Combustion",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "CO₂ released",
      "col": 2
     },
     {
      "at": [
       320,
       50
      ],
      "text": "Regrowth, land change and production affect net impacts",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "A fictional energy-return calculation",
    "head": "Quantity",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Usable energy delivered",
      "150 MJ"
     ],
     [
      "Energy invested",
      "100 MJ"
     ],
     [
      "Energy return on investment",
      "150 / 100 = 1.5"
     ],
     [
      "Net gain under this boundary",
      "150 − 100 = 50 MJ"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which material is a biomass energy feedstock?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Wood is burned for household heat. Which statement is accurate?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fuelwood removal exceeds forest regrowth over many years. Which outcome is most directly expected?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement about burning ethanol is chemically correct?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A biofuel analysis counts crop uptake but omits forest clearing for new cropland. What is missing?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A biofuel process delivers 150 MJ after requiring 100 MJ of invested energy. What is its energy return on investment?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "For 150 MJ delivered and 100 MJ invested, what is the net energy gain under this stated accounting?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why might two ethanol production systems have different climate impacts per unit of fuel energy?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A project captures methane from decomposing organic waste and uses it as fuel. Which category best fits the captured fuel?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A region diverts food-crop land to fuel crops. Which tradeoff should be examined?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "6.8",
  "name": "Solar Energy",
  "skill": "s8",
  "boardTitle": "Solar Energy",
  "teach": [
   "Photovoltaic cells convert incoming light directly into electrical energy. They do not first boil water or spin a turbine. Output changes with sunlight, shading and equipment conditions. Rated power is not a guarantee of continuous output. Electricity generation over an interval depends on actual power through time; storage can shift some energy to later use, with conversion losses. Solar systems can have low operating emissions while manufacturing, mining, installation and disposal still have environmental effects.",
   "Solar thermal systems collect heat. An active solar-heating system uses equipment such as pumps to move heated fluid. Concentrating solar power uses mirrors to focus sunlight and heat a working fluid; some installations store thermal energy for later generation. Passive solar design uses building orientation, windows, shading and thermal mass to collect, store and distribute heat with natural heat transfer. A sunlit masonry floor can store heat without a pump. Appropriate orientation and shading depend on hemisphere, latitude, climate and season.",
   "Compare solar projects using both energy output and site effects. Rooftop systems can use existing developed surfaces; large ground-mounted projects can disturb habitat and require transmission. No location is automatically impact-free. If a panel receives 1000 W of sunlight per square metre over 2 m² and converts 20% to electricity under stated conditions, its output is 400 W. Over five hours at that constant output, it produces 2 kWh; this is an idealized example rather than a prediction for every day."
  ],
  "eqs": [
   "Light → photovoltaic cell → electrical energy; no steam turbine is required",
   "Sunlight → masonry thermal mass → stored heat → later heat release",
   "1000 W/m² × 2 m² × 0.20 = 400 W; 0.4 kW × 5 h = 2 kWh"
  ],
  "boards": [
   [
    "Photovoltaics convert light directly to electricity",
    "Output depends on incoming light and conditions",
    "Storage shifts energy in time with losses"
   ],
   [
    "Active solar heating uses powered circulation",
    "Passive design can store heat in thermal mass",
    "Concentrating solar systems collect high-temperature heat"
   ],
   [
    "Compare output, land use and life-cycle effects",
    "Existing roofs can reduce new land disturbance",
    "Rated power differs from actual energy production"
   ]
  ],
  "questions": [
   [
    "Which conversion takes place in a photovoltaic cell?",
    "Light energy directly to electrical energy",
    "Light to steam to turbine motion in every cell",
    "Uranium fission directly to sunlight",
    "Photovoltaic cells generate electrical energy from light without a required steam-turbine stage."
   ],
   [
    "A pump circulates fluid through a roof-mounted solar heat collector. Which system is described?",
    "Active solar heating",
    "Strictly passive solar heating",
    "A nuclear fission system",
    "Powered circulation is characteristic of active solar heating. Passive heat transfer does not require that pump."
   ],
   [
    "Sunlight warms a masonry floor that releases heat after sunset without powered circulation. What does this demonstrate?",
    "Passive solar design can store thermal energy",
    "Passive solar systems cannot store any energy",
    "The floor must generate electricity through fission",
    "Thermal mass stores heat and releases it later. Passive design can include storage without mechanical circulation."
   ],
   [
    "Mirrors focus sunlight onto a receiver that heats a fluid for power generation. Which technology is described?",
    "Concentrating solar thermal power",
    "A photovoltaic effect inside every mirror",
    "Combustion of sunlight as a fossil fuel",
    "Concentrating solar power gathers solar heat, which can supply a thermal power cycle. Mirrors themselves are not photovoltaic cells."
   ],
   [
    "A solar installation stores daytime electricity in a battery for evening use. Which statement is accurate?",
    "Storage can shift delivery time but has energy losses",
    "The battery creates additional energy beyond its input",
    "The panels must keep receiving sunlight after sunset",
    "Storage preserves some earlier energy for later use. Charging and discharging do not create energy and are not perfectly efficient."
   ],
   [
    "A 2 m² panel receives 1000 W/m² and converts 20% into electricity. What is its output under those conditions?",
    "400 W",
    "2000 W",
    "10000 W",
    "Incoming power is 2000 W; one fifth becomes electricity, giving 400 W. Area and conversion efficiency both matter."
   ],
   [
    "A panel produces a constant 400 W for five hours in a stated example. How much energy is generated?",
    "2 kWh",
    "2000 kWh",
    "80 kWh",
    "Four hundred watts is 0.4 kW, and 0.4×5=2 kWh. Convert watts to kilowatts before using these units."
   ],
   [
    "A 5 kW-rated rooftop system is compared with a claim of 5 kWh generated every hour of every day. What is wrong with the claim?",
    "Rated power does not account for night, shading and changing output",
    "Kilowatts and kilowatt-hours are always identical",
    "A rating makes nighttime sunlight unnecessary",
    "Actual generation depends on available sunlight and operating conditions. A nameplate rating is not continuous delivered energy."
   ],
   [
    "Which siting choice can reduce new habitat disturbance for a solar installation?",
    "Using a suitable existing roof",
    "Assuming any desert has no organisms",
    "Clearing every vegetated area regardless of output",
    "An existing developed surface can reduce additional land disturbance. Deserts can contain valuable and sensitive ecosystems."
   ],
   [
    "A solar assessment counts no fuel burned during operation but ignores panel production. What boundary is being used?",
    "An operating-stage boundary rather than a complete life cycle",
    "A complete inventory of every environmental effect",
    "A proof that mining inputs do not matter",
    "Operating emissions and life-cycle effects are different scopes. Panel materials and production remain relevant to a full comparison."
   ],
   [
    "Why should a passive solar designer consider hemisphere and season before choosing window orientation and shading?",
    "The Sun’s path and desired heat gain vary with location and time",
    "South-facing windows are equally optimal in every climate worldwide",
    "Thermal mass eliminates all seasonal solar variation",
    "Solar geometry and climate affect when heat is useful and when shading is needed. A universal orientation rule is insufficient."
   ],
   [
    "Clouds reduce irradiance on a photovoltaic array while all other stated conditions remain fixed. Which result is generally expected?",
    "Reduced electrical output",
    "Unchanged output guaranteed by the nameplate rating",
    "The array must become a nonrenewable resource",
    "Less incoming solar energy generally reduces output. Resource variability does not change renewable classification."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Different solar conversions",
    "head": "System",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Photovoltaic cell",
      "Light directly to electricity"
     ],
     [
      "Active solar heating",
      "Collect heat; powered circulation"
     ],
     [
      "Concentrating solar power",
      "Concentrate heat for a power cycle"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Passive solar design can store heat",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      258,
      156
     ],
     "P1": [
      532,
      156
     ],
     "P2": [
      532,
      49
     ],
     "P3": [
      258,
      49
     ],
     "P4": [
      266,
      71
     ],
     "P5": [
      524,
      71
     ],
     "P6": [
      524,
      55
     ],
     "P7": [
      266,
      55
     ],
     "P8": [
      122,
      146
     ],
     "P9": [
      150,
      136
     ],
     "P10": [
      290,
      86
     ],
     "P11": [
      345,
      74
     ],
     "P12": [
      345,
      127
     ],
     "P13": [
      436,
      74
     ],
     "P14": [
      436,
      127
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14",
    "dots": "",
    "segs": [
     {
      "v": "P9P10",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P11P12",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P13P14",
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
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       211
      ],
      "text": "Schematic heat paths; building design varies by site",
      "col": 0
     },
     {
      "at": [
       394,
       32
      ],
      "text": "Masonry thermal mass",
      "col": 2
     },
     {
      "at": [
       122,
       180
      ],
      "text": "Sunlight",
      "col": 1
     },
     {
      "at": [
       175,
       74
      ],
      "text": "Absorb heat",
      "col": 1
     },
     {
      "at": [
       394,
       136
      ],
      "text": "Later heat release",
      "col": 2
     }
    ],
    "circles": [
     {
      "c": "P8",
      "r": 17,
      "col": 1
     }
    ]
   },
   {
    "t": "setups",
    "title": "A stated panel-output example",
    "head": "Quantity",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Incoming sunlight",
      "1000 W/m² over 2 m² = 2000 W"
     ],
     [
      "Conversion efficiency",
      "20%"
     ],
     [
      "Electrical output",
      "400 W = 0.4 kW"
     ],
     [
      "At that output for 5 hours",
      "2 kWh"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which conversion takes place in a photovoltaic cell?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A pump circulates fluid through a roof-mounted solar heat collector. Which system is described?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Sunlight warms a masonry floor that releases heat after sunset without powered circulation. What does this demonstrate?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Mirrors focus sunlight onto a receiver that heats a fluid for power generation. Which technology is described?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A solar installation stores daytime electricity in a battery for evening use. Which statement is accurate?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A 2 m² panel receives 1000 W/m² and converts 20% into electricity. What is its output under those conditions?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A panel produces a constant 400 W for five hours in a stated example. How much energy is generated?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A 5 kW-rated rooftop system is compared with a claim of 5 kWh generated every hour of every day. What is wrong with the claim?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which siting choice can reduce new habitat disturbance for a solar installation?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A solar assessment counts no fuel burned during operation but ignores panel production. What boundary is being used?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why should a passive solar designer consider hemisphere and season before choosing window orientation and shading?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Clouds reduce irradiance on a photovoltaic array while all other stated conditions remain fixed. Which result is generally expected?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "6.9",
  "name": "Hydroelectric Power",
  "skill": "s9",
  "boardTitle": "Hydroelectric Power",
  "teach": [
   "Hydropower uses moving water to turn turbines connected to generators. A reservoir can store water at height; as water flows downward, gravitational potential energy becomes motion and electricity. Run-of-river systems use river flow with limited storage and can still alter flow and habitats. Tidal turbines use tidal currents. Pumped storage uses electricity to lift water to an upper reservoir and recovers part of that energy later; it is an energy-storage system, not a net creator of energy.",
   "Hydropower generation does not require fuel combustion, but dams and reservoirs can flood habitats and settlements, impede fish migration, trap sediment and alter downstream flows and temperatures. Decomposition of organic matter in reservoirs can release methane and carbon dioxide, with strongly site-dependent amounts. Fish passages and environmental flow management can reduce particular impacts but do not erase every effect. Generation also depends on water availability; drought can reduce output."
  ],
  "eqs": [
   "Water stored at height → flowing water → turbine motion → electrical energy",
   "Pumping input 100 MWh; later recovery 80 MWh → 80% round-trip efficiency"
  ],
  "boards": [
   [
    "Reservoir and run-of-river designs differ in storage",
    "Tidal currents can drive turbines",
    "Pumped storage returns only part of its input"
   ],
   [
    "Dams alter migration, sediment and flows",
    "Reservoir greenhouse-gas emissions vary by site",
    "Drought can constrain generation"
   ]
  ],
  "questions": [
   [
    "What directly turns the turbine in a conventional hydroelectric plant?",
    "Moving water",
    "Combustion gases from burning water",
    "Radioactive decay inside the river",
    "Flowing water transfers mechanical energy to the turbine. Water is not burned as a fuel."
   ],
   [
    "Which change can increase available gravitational energy per kilogram of reservoir water, all else equal?",
    "A greater vertical drop",
    "A smaller vertical drop",
    "Changing only the reservoir’s name",
    "Greater height difference gives more gravitational potential energy per unit mass. Actual output also depends on flow and efficiency."
   ],
   [
    "What is a typical distinction between run-of-river and large reservoir hydropower?",
    "Run-of-river generally has less water storage",
    "Run-of-river never changes river habitat",
    "Large reservoirs require no water flow",
    "Limited storage is a common distinction. Run-of-river designs can still alter flows and habitats."
   ],
   [
    "A tidal-current turbine produces electricity. What moving medium supplies its immediate mechanical input?",
    "Water moving with the tides",
    "Air heated only by combustion",
    "Underground uranium moving through pipes",
    "Tidal currents are water flows that can rotate turbines. This differs from wind or nuclear power."
   ],
   [
    "A pumped-storage system uses 100 MWh to pump water uphill and later supplies 80 MWh. What is its round-trip efficiency?",
    "80%",
    "125%",
    "20%",
    "The returned energy is 80 of every 100 input MWh. Twenty percent is the fraction not returned, not the efficiency."
   ],
   [
    "Why is pumped storage not a net primary energy source over its charge-discharge cycle?",
    "It uses more energy for pumping than it returns",
    "Water has no gravitational energy at height",
    "It operates only through nuclear fission",
    "Pumping stores energy supplied from elsewhere, and losses make recovered energy smaller. It still has value for shifting delivery time."
   ],
   [
    "A dam blocks adult fish from reaching upstream spawning habitat. Which measure targets that particular mechanism?",
    "A suitably designed and monitored fish passage",
    "A claim that no fuel combustion means no habitat effects",
    "Adding more concrete without considering fish movement",
    "Fish passages can help migration when appropriate to the species and site. Their effectiveness needs monitoring and they do not solve every dam impact."
   ],
   [
    "Why can a reservoir emit methane even though its turbine burns no fuel?",
    "Organic matter can decompose under oxygen-poor conditions",
    "Water molecules contain carbon that must become methane",
    "Every turbine chemically converts steel to methane",
    "Anaerobic decomposition of organic matter can generate methane. Reservoir emissions depend on site conditions and are distinct from turbine combustion."
   ],
   [
    "A reservoir traps sediment that previously moved downstream. What issue should be evaluated?",
    "Changes to downstream sediment supply and habitats",
    "A guarantee that downstream erosion and habitat changes are impossible",
    "Only the reservoir’s electricity price",
    "Sediment transport shapes river and coastal environments. Trapping it can change downstream physical and ecological conditions."
   ],
   [
    "A prolonged drought lowers river flow and usable reservoir storage. What limitation does this show?",
    "Renewable hydropower output can be constrained by water availability",
    "Renewable classification guarantees fixed generation in drought",
    "Hydroelectricity does not depend on the water cycle",
    "Hydropower relies on usable water and head. Renewability does not guarantee constant output under changing hydrological conditions."
   ]
  ],
  "check": [
   "A storage project requires 200 MWh to pump water and later delivers 150 MWh. What is the round-trip efficiency?",
   "75%",
   "25%",
   "133%",
   "Compare the energy recovered with the energy used to charge the system."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Pumped water stores supplied energy",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      85,
      180
     ],
     "P1": [
      245,
      180
     ],
     "P2": [
      245,
      136
     ],
     "P3": [
      85,
      136
     ],
     "P4": [
      388,
      80
     ],
     "P5": [
      558,
      80
     ],
     "P6": [
      558,
      48
     ],
     "P7": [
      388,
      48
     ],
     "P8": [
      250,
      149
     ],
     "P9": [
      387,
      73
     ],
     "P10": [
      384,
      88
     ],
     "P11": [
      249,
      166
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
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       165,
       197
      ],
      "text": "Upper reservoir",
      "col": 0
     },
     {
      "at": [
       473,
       21
      ],
      "text": "Lower reservoir",
      "col": 2
     },
     {
      "at": [
       420,
       142
      ],
      "text": "Generate: 80 MWh",
      "col": 0
     },
     {
      "at": [
       218,
       53
      ],
      "text": "Pump: 100 MWh",
      "col": 1
     },
     {
      "at": [
       320,
       214
      ],
      "text": "Storage cycle: energy returned is less than energy in",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Hydropower tradeoffs depend on the site",
    "head": "Change",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Dam or diversion",
      "Can impede fish movement"
     ],
     [
      "Reservoir",
      "Can flood habitat and trap sediment"
     ],
     [
      "Organic matter decomposition",
      "Possible reservoir greenhouse gases"
     ],
     [
      "Drought or reduced flow",
      "Can limit generation"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What directly turns the turbine in a conventional hydroelectric plant?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which change can increase available gravitational energy per kilogram of reservoir water, all else equal?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is a typical distinction between run-of-river and large reservoir hydropower?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A tidal-current turbine produces electricity. What moving medium supplies its immediate mechanical input?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A pumped-storage system uses 100 MWh to pump water uphill and later supplies 80 MWh. What is its round-trip efficiency?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is pumped storage not a net primary energy source over its charge-discharge cycle?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A dam blocks adult fish from reaching upstream spawning habitat. Which measure targets that particular mechanism?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can a reservoir emit methane even though its turbine burns no fuel?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A reservoir traps sediment that previously moved downstream. What issue should be evaluated?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A prolonged drought lowers river flow and usable reservoir storage. What limitation does this show?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A storage project requires 200 MWh to pump water and later delivers 150 MWh. What is the round-trip efficiency?"
   ],
   "small": false
  }
 },
 {
  "code": "6.10",
  "name": "Geothermal Energy",
  "skill": "s10",
  "boardTitle": "Geothermal Energy",
  "teach": [
   "Geothermal systems use heat from within Earth. In suitable reservoirs, hot water or steam can provide heat for electricity generation. Dry-steam plants send steam through a turbine; flash systems reduce the pressure of hot water so some becomes steam. Binary-cycle plants transfer heat to a separate working fluid with a lower boiling point, whose vapor drives the turbine. The geothermal water need not pass through the turbine in every design. Accessibility, temperature and drilling costs affect site suitability.",
   "Geothermal electricity can operate without sunlight or wind, but the resource must be managed. Reinjection helps return fluids and maintain reservoir conditions; it does not guarantee unlimited local heat withdrawal. Some systems can release gases such as hydrogen sulfide and need appropriate controls, while closed-loop binary designs limit direct releases. Ground-source heat pumps are different: they use electricity to move heat between buildings and relatively stable shallow ground, rather than using a hot reservoir to generate electricity."
  ],
  "eqs": [
   "Hot geothermal water → heat exchanger → secondary-fluid vapor → turbine in a binary plant",
   "Ground-source heat pump: electricity + heat transfer, not underground steam generation"
  ],
  "boards": [
   [
    "Earth’s internal heat is the resource",
    "Dry steam, flash and binary designs differ",
    "Temperature, depth and cost constrain access"
   ],
   [
    "Reinjection helps manage reservoir fluids",
    "Gas releases depend on fluid and plant design",
    "Ground-source heat pumps move heat"
   ]
  ],
  "questions": [
   [
    "What is the primary resource used by a geothermal electricity plant?",
    "Heat stored within Earth",
    "Combustion energy in river water",
    "Direct sunlight striking a photovoltaic cell",
    "Geothermal systems access Earth’s internal heat. They differ from solar photovoltaic systems and combustion plants."
   ],
   [
    "A binary-cycle geothermal plant transfers heat to a second fluid. What normally passes through its turbine?",
    "Vapor of the secondary working fluid",
    "Every drop of raw geothermal water directly",
    "Solid uranium fuel rods",
    "The secondary fluid vapor drives the turbine. A heat exchanger separates that loop from the geothermal fluid."
   ],
   [
    "A flash geothermal system reduces the pressure of hot water. What can this cause?",
    "Some water changes to steam that can drive a turbine",
    "All water changes to coal",
    "Nuclear fission becomes the plant’s heat source",
    "At lower pressure, some hot water can flash into steam. This is a physical phase change, not fuel formation or fission."
   ],
   [
    "Why are high-temperature conventional geothermal power sites not equally accessible everywhere?",
    "Suitable temperatures, reservoirs and drilling depths vary",
    "Every location has an identical shallow steam reservoir",
    "Electricity demand alone creates a hot reservoir",
    "Geology and depth influence accessibility and cost. Demand does not by itself supply the necessary underground conditions."
   ],
   [
    "Which gas can require controls at some geothermal facilities?",
    "Hydrogen sulfide",
    "Only oxygen, with no other gas possible",
    "Methane manufactured by photovoltaic cells",
    "Hydrogen sulfide can occur in geothermal fluids. Releases depend on the resource and design, and controls can reduce exposure."
   ],
   [
    "What is one purpose of reinjecting used geothermal water?",
    "Help maintain reservoir fluids and pressure",
    "Guarantee unlimited heat production at any withdrawal rate",
    "Convert every dissolved mineral into sunlight",
    "Reinjection returns fluid and helps resource management. It does not remove all limits on heat extraction."
   ],
   [
    "Which statement distinguishes a ground-source heat pump from a geothermal electricity plant?",
    "The heat pump uses electricity to move heat between a building and shallow ground",
    "Every heat pump produces electricity by boiling underground water",
    "Both systems necessarily use the same high-temperature steam reservoir",
    "Ground-source heat pumps exploit shallow ground temperatures for heating and cooling. They are not necessarily electricity generators."
   ],
   [
    "Cloud cover blocks sunlight for several days. Which feature can support geothermal generation through that period?",
    "Its heat supply does not require contemporaneous sunlight",
    "Clouds create extra uranium fuel",
    "Geothermal plants must shut down whenever it is dark",
    "Earth’s internal heat is not tied to daytime sunlight. Actual operation still depends on the facility and reservoir."
   ],
   [
    "Why is a claim that all geothermal plants have identical emissions too broad?",
    "Reservoir chemistry and plant designs differ",
    "A binary plant must burn more coal than every other design",
    "Geothermal fluids are chemically identical worldwide",
    "Some designs contain fluids in closed loops while others release gases. Resource chemistry and controls affect outcomes."
   ],
   [
    "A geothermal field cools as heat extraction outpaces local replenishment. What does this show?",
    "A renewable category still requires local resource management",
    "Renewable resources cannot show local decline",
    "Reinjection automatically replaces every joule immediately",
    "Local heat and fluid balances matter. Long-term natural heat supply does not guarantee unchanged output at any extraction rate."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "A simplified binary geothermal system",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      86,
      187
     ],
     "P1": [
      230,
      187
     ],
     "P2": [
      230,
      74
     ],
     "P3": [
      86,
      74
     ],
     "P4": [
      276,
      166
     ],
     "P5": [
      365,
      166
     ],
     "P6": [
      365,
      96
     ],
     "P7": [
      276,
      96
     ],
     "P8": [
      411,
      187
     ],
     "P9": [
      556,
      187
     ],
     "P10": [
      556,
      74
     ],
     "P11": [
      411,
      74
     ],
     "P12": [
      233,
      131
     ],
     "P13": [
      271,
      131
     ],
     "P14": [
      369,
      131
     ],
     "P15": [
      406,
      131
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P12P13",
      "col": 0,
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
       158,
       160
      ],
      "text": "Geothermal",
      "col": 0
     },
     {
      "at": [
       158,
       138
      ],
      "text": "water loop",
      "col": 0
     },
     {
      "at": [
       320,
       140
      ],
      "text": "Heat",
      "col": 1
     },
     {
      "at": [
       320,
       119
      ],
      "text": "exchanger",
      "col": 1
     },
     {
      "at": [
       483,
       160
      ],
      "text": "Secondary",
      "col": 2
     },
     {
      "at": [
       483,
       138
      ],
      "text": "fluid loop",
      "col": 2
     },
     {
      "at": [
       160,
       44
      ],
      "text": "Returns to ground",
      "col": 0
     },
     {
      "at": [
       484,
       44
      ],
      "text": "Vapor drives turbine",
      "col": 2
     },
     {
      "at": [
       320,
       12
      ],
      "text": "Heat transfers between loops; the fluids stay separate",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Manage the resource and identify the system",
    "head": "Feature",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Reinjection",
      "Returns fluid; helps reservoir conditions"
     ],
     [
      "Some geothermal fluids",
      "May contain hydrogen sulfide"
     ],
     [
      "Ground-source heat pump",
      "Moves heat using electricity"
     ],
     [
      "Hot-reservoir power plant",
      "Uses geothermal heat to generate power"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is the primary resource used by a geothermal electricity plant?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A binary-cycle geothermal plant transfers heat to a second fluid. What normally passes through its turbine?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A flash geothermal system reduces the pressure of hot water. What can this cause?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why are high-temperature conventional geothermal power sites not equally accessible everywhere?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which gas can require controls at some geothermal facilities?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is one purpose of reinjecting used geothermal water?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement distinguishes a ground-source heat pump from a geothermal electricity plant?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Cloud cover blocks sunlight for several days. Which feature can support geothermal generation through that period?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is a claim that all geothermal plants have identical emissions too broad?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A geothermal field cools as heat extraction outpaces local replenishment. What does this show?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "6.11",
  "name": "Hydrogen Fuel Cell",
  "skill": "s11",
  "boardTitle": "Hydrogen Fuel Cell",
  "teach": [
   "A hydrogen fuel cell combines hydrogen with oxygen electrochemically to deliver electricity, water and heat. In a proton-exchange-membrane example, hydrogen is separated into protons and electrons; electrons travel through an external circuit, while protons cross the membrane. At the other electrode they combine with oxygen to form water. This is not a steam turbine or ordinary flame combustion. A pure-hydrogen fuel cell produces no carbon dioxide at the point of use because the fuel has no carbon.",
   "Hydrogen must be supplied, and producing, compressing, storing and transporting it requires resources and energy. Electrolysis uses electricity to split water; its upstream emissions depend on the electricity source. Hydrogen made from natural gas can involve carbon dioxide emissions and methane leakage. Hydrogen is an energy carrier, so water-only exhaust does not prove a zero-impact life cycle. Fuel-cell cost, infrastructure and storage requirements also affect feasibility. In a storage chain, losses at each conversion multiply."
  ],
  "eqs": [
   "Fuel-cell reaction: 2 H₂ + O₂ → 2 H₂O + electrical energy and heat",
   "100 kWh × 0.70 hydrogen-production efficiency × 0.50 fuel-cell efficiency = 35 kWh returned"
  ],
  "boards": [
   [
    "Hydrogen + oxygen → water + electricity + heat",
    "Electrons moving through a circuit supply current",
    "No carbon in pure hydrogen means no use-stage CO₂"
   ],
   [
    "Producing hydrogen requires energy",
    "Electrolysis impacts depend on the power supply",
    "Production, storage and delivery belong in the boundary"
   ]
  ],
  "questions": [
   [
    "What are the material reactants in a pure-hydrogen fuel cell using air as its oxygen supply?",
    "Hydrogen and oxygen",
    "Carbon dioxide and uranium",
    "Only water with no energy input or fuel",
    "Hydrogen reacts electrochemically with oxygen to form water, delivering electricity and heat. It needs a continuing fuel supply."
   ],
   [
    "Which outputs are expected from an operating pure-hydrogen fuel cell?",
    "Electricity, water and heat",
    "Only carbon dioxide and soot",
    "New fossil fuel with no energy conversion",
    "The electrochemical reaction supplies electricity and produces water and heat. Pure hydrogen contains no carbon to form combustion CO₂."
   ],
   [
    "In the stated proton-exchange-membrane example, what carries electrical current through the external circuit?",
    "Electrons",
    "Whole uranium nuclei",
    "Only oxygen molecules moving through a pipe",
    "Electrons travel through the external circuit while protons cross the membrane. These paths allow electrochemical energy conversion."
   ],
   [
    "A fuel-cell vehicle emits water at its point of use. What cannot be concluded from that fact alone?",
    "Its entire fuel production and vehicle life cycle has zero emissions",
    "Its pure-hydrogen fuel contains no carbon",
    "Its operation involves an electrochemical energy conversion",
    "Water exhaust describes use-stage products. Hydrogen production, electricity, equipment and delivery can have additional impacts."
   ],
   [
    "What does electrolysis use to split water into hydrogen and oxygen?",
    "Electrical energy",
    "A spontaneous process that needs no energy",
    "Coal ash as the only required energy carrier",
    "Electrolysis requires electricity. Its environmental effects depend partly on how that electricity is generated."
   ],
   [
    "Two electrolyzers use the same process, but one receives coal-generated electricity and the other low-emission electricity. What difference should be investigated?",
    "Upstream emissions associated with the electricity inputs",
    "Whether hydrogen atoms have different chemical identities",
    "An assumption that water feedstock makes both life cycles emission-free",
    "The production pathway changes environmental impacts even though both systems produce hydrogen. Water feedstock alone does not establish low emissions."
   ],
   [
    "Hydrogen is produced from natural gas. Which potential climate sources belong in the assessment?",
    "Carbon dioxide from production and methane leakage in the supply chain",
    "Only water released by the final fuel cell",
    "Only the color of the gas storage vessel",
    "A full boundary includes how hydrogen is made and supplied, not only its final electrochemical use."
   ],
   [
    "A simplified storage chain converts 100 kWh into hydrogen at 70% efficiency, then into electricity at 50%. Ignoring other losses, how much electricity returns?",
    "35 kWh",
    "70 kWh",
    "120 kWh",
    "The first stage stores 70 kWh of chemical energy; the second returns half, or 35 kWh. Stage efficiencies multiply."
   ],
   [
    "Why can compression and transport change hydrogen’s overall energy balance?",
    "They require additional energy beyond the ideal production and fuel-cell stages",
    "They always create more energy than they consume",
    "They make upstream electricity irrelevant",
    "Real supply chains include auxiliary energy requirements. An ideal two-stage calculation may omit those losses."
   ],
   [
    "Which factor can limit practical adoption of a hydrogen fuel-cell system even when its use-stage emissions are low?",
    "Production cost, storage and fueling infrastructure",
    "A rule that every low-emission system is cost-free",
    "An assumption that no delivery network is needed",
    "Environmental performance is one criterion; cost, reliable supply and infrastructure also affect feasibility."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Hydrogen fuel-cell inputs and outputs",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      90,
      158
     ],
     "P1": [
      205,
      158
     ],
     "P2": [
      205,
      83
     ],
     "P3": [
      90,
      83
     ],
     "P4": [
      266,
      158
     ],
     "P5": [
      379,
      158
     ],
     "P6": [
      379,
      83
     ],
     "P7": [
      266,
      83
     ],
     "P8": [
      440,
      158
     ],
     "P9": [
      551,
      158
     ],
     "P10": [
      551,
      83
     ],
     "P11": [
      440,
      83
     ],
     "P12": [
      210,
      121
     ],
     "P13": [
      261,
      121
     ],
     "P14": [
      383,
      121
     ],
     "P15": [
      435,
      121
     ],
     "P16": [
      322,
      193
     ],
     "P17": [
      322,
      163
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17",
    "dots": "",
    "segs": [
     {
      "v": "P12P13",
      "col": 0,
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
       148,
       131
      ],
      "text": "Hydrogen",
      "col": 0
     },
     {
      "at": [
       148,
       106
      ],
      "text": "H₂ input",
      "col": 0
     },
     {
      "at": [
       322,
       131
      ],
      "text": "Fuel cell",
      "col": 1
     },
     {
      "at": [
       322,
       106
      ],
      "text": "Electricity",
      "col": 1
     },
     {
      "at": [
       495,
       131
      ],
      "text": "Water",
      "col": 2
     },
     {
      "at": [
       495,
       106
      ],
      "text": "+ heat",
      "col": 2
     },
     {
      "at": [
       322,
       201
      ],
      "text": "O₂ input",
      "col": 0
     },
     {
      "at": [
       320,
       39
      ],
      "text": "2 H₂ + O₂ → 2 H₂O; no carbon in pure hydrogen",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "An idealized electricity-storage chain",
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
      "text": "Electricity",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "100 kWh input",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Hydrogen",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "70 kWh stored",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Electricity",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "35 kWh returned",
      "col": 2
     },
     {
      "at": [
       320,
       50
      ],
      "text": "70% first stage × 50% second stage = 35% overall",
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
     "What are the material reactants in a pure-hydrogen fuel cell using air as its oxygen supply?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which outputs are expected from an operating pure-hydrogen fuel cell?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "In the stated proton-exchange-membrane example, what carries electrical current through the external circuit?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fuel-cell vehicle emits water at its point of use. What cannot be concluded from that fact alone?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What does electrolysis use to split water into hydrogen and oxygen?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two electrolyzers use the same process, but one receives coal-generated electricity and the other low-emission electricity. What difference should be investigated?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Hydrogen is produced from natural gas. Which potential climate sources belong in the assessment?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A simplified storage chain converts 100 kWh into hydrogen at 70% efficiency, then into electricity at 50%. Ignoring other losses, how much electricity returns?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can compression and transport change hydrogen’s overall energy balance?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which factor can limit practical adoption of a hydrogen fuel-cell system even when its use-stage emissions are low?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "6.12",
  "name": "Wind Energy",
  "skill": "s12",
  "boardTitle": "Wind Energy",
  "teach": [
   "Wind turbines convert kinetic energy in moving air into rotor motion and electrical energy through a generator. Output varies with wind and the turbine’s operating limits. Turbines do not necessarily run in every wind condition, and a nameplate rating is a maximum reference rather than continuous generation. Capacity factor compares actual energy generated over a period with the energy that would result from full rated power throughout that period. It is different from the efficiency of converting energy passing through the rotor.",
   "Wind generation requires no fuel combustion and little operational cooling water, but manufacturing, construction, transmission and disposal have impacts. Birds and bats can be injured or killed, and siting can affect habitat and nearby communities. Careful siting, monitoring and targeted curtailment can reduce some risks; curtailment can also reduce energy output. Land between suitably sited turbines may remain available for farming or grazing. Evaluate ecological outcomes and delivered energy together rather than assuming either universal harmlessness or universal unsuitability."
  ],
  "eqs": [
   "2 MW × 10 h = 20 MWh maximum; actual 6 MWh ÷ 20 MWh = 30% capacity factor",
   "Wind kinetic energy → rotor motion → generator electricity"
  ],
  "boards": [
   [
    "Actual wind and turbine limits determine output",
    "Capacity factor compares energy over a period",
    "Capacity factor is not conversion efficiency"
   ],
   [
    "No operating fuel combustion; life-cycle impacts remain",
    "Wildlife risk depends on siting and operation",
    "Curtailment trades some output for reduced exposure"
   ]
  ],
  "questions": [
   [
    "What form of energy is directly captured by a wind turbine rotor?",
    "Kinetic energy of moving air",
    "Chemical energy released by burning air",
    "Radioactive energy emitted by clouds",
    "The moving air transfers kinetic energy to the rotor. A generator then converts mechanical energy into electricity."
   ],
   [
    "A 2 MW turbine generates 6 MWh during a 10-hour period. What is its capacity factor for that period?",
    "30%",
    "60%",
    "3%",
    "Full rated output for 10 hours would be 20 MWh. Actual output is 6/20=0.30, or 30%."
   ],
   [
    "What does a 30% capacity factor describe?",
    "Actual energy divided by continuous full-rated energy over the stated period",
    "The fraction of every passing air molecule converted into electricity",
    "A universal efficiency for all wind turbines",
    "Capacity factor compares observed generation with a rated-power benchmark over time. It is not rotor energy-conversion efficiency."
   ],
   [
    "A wind farm has no fuel-combustion emissions while generating. Which impacts still belong in a full assessment?",
    "Materials, construction, wildlife and end-of-life handling",
    "None; operating combustion is the only possible impact",
    "Only the cost of burning coal inside each turbine",
    "Life-cycle and site impacts remain even without combustion during generation. Their magnitude requires evidence."
   ],
   [
    "Which investigation most directly informs bird and bat risk at a proposed wind site?",
    "Monitoring local species movements and collision risk",
    "Counting only the number of nearby fuel tanks",
    "Assuming every open field has identical wildlife use",
    "Species, flight patterns, location and operations affect exposure. Site-specific monitoring supports better decisions."
   ],
   [
    "Turbines are temporarily stopped during periods of high bat activity. What tradeoff can follow?",
    "Reduced collision exposure with some lost electricity generation",
    "Guaranteed elimination of every ecological impact at no output cost",
    "An increase in fossil-fuel content inside the wind",
    "Targeted curtailment can reduce risk while reducing output during those periods. It does not eliminate every impact."
   ],
   [
    "Why does a wind farm need a plan for periods of low wind?",
    "Its electrical output can vary with resource availability",
    "Renewable status requires constant wind everywhere",
    "Every turbine stores unlimited electricity internally",
    "Grid connections, other generation, storage and demand management can help balance variable output and demand."
   ],
   [
    "A farmer continues growing crops between widely spaced turbines. What does this illustrate?",
    "Some wind-project land can support other uses",
    "The turbines and access roads occupy no land",
    "Every wind site is compatible with every agricultural activity",
    "Co-use is possible in appropriate settings. Towers, roads and ecological constraints still matter."
   ],
   [
    "Two sites have equal average wind speed but different hourly patterns and turbine shutdown periods. What is needed to compare generation reliably?",
    "Wind distributions and turbine performance over time",
    "Only the equal averages",
    "An assumption that equal averages always mean equal output",
    "Output depends nonlinearly on wind conditions and operating limits. Equal averages alone need not yield equal energy."
   ],
   [
    "Which advantage often distinguishes wind turbines from steam-cycle thermal power plants?",
    "They do not need water to condense a steam power cycle during generation",
    "They require no materials to construct",
    "They always operate at full capacity",
    "Wind turbines do not use a steam-condensing generation cycle. This can reduce operational cooling-water needs without removing all other impacts."
   ]
  ],
  "check": [
   "A 4 MW wind installation produces 24 MWh over 20 hours. What is its capacity factor for that period?",
   "30%",
   "60%",
   "6%",
   "Compare 24 MWh with the energy from 4 MW operating for all 20 hours."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Capacity factor uses energy over time",
    "head": "Quantity",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Rated power",
      "2 MW"
     ],
     [
      "Period",
      "10 hours"
     ],
     [
      "Full-rated benchmark",
      "20 MWh"
     ],
     [
      "Actual 6 MWh / 20 MWh",
      "30% capacity factor"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Wind: evaluate benefits and site effects",
    "head": "Issue",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Operating fuel combustion",
      "None for the turbine"
     ],
     [
      "Wildlife",
      "Siting and operations affect exposure"
     ],
     [
      "Targeted curtailment",
      "May reduce risk and generation"
     ],
     [
      "Materials and construction",
      "Included in life-cycle assessment"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What form of energy is directly captured by a wind turbine rotor?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A 2 MW turbine generates 6 MWh during a 10-hour period. What is its capacity factor for that period?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What does a 30% capacity factor describe?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A wind farm has no fuel-combustion emissions while generating. Which impacts still belong in a full assessment?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which investigation most directly informs bird and bat risk at a proposed wind site?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Turbines are temporarily stopped during periods of high bat activity. What tradeoff can follow?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why does a wind farm need a plan for periods of low wind?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A farmer continues growing crops between widely spaced turbines. What does this illustrate?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two sites have equal average wind speed but different hourly patterns and turbine shutdown periods. What is needed to compare generation reliably?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which advantage often distinguishes wind turbines from steam-cycle thermal power plants?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A 4 MW wind installation produces 24 MWh over 20 hours. What is its capacity factor for that period?"
   ],
   "small": false
  }
 },
 {
  "code": "6.13",
  "name": "Energy Conservation",
  "skill": "s13",
  "boardTitle": "Energy Conservation",
  "teach": [
   "Energy conservation reduces energy use, often by reducing unnecessary services or changing behavior; efficiency supplies a comparable service with less input. Turning off an unused light conserves energy, while replacing a lamp with a lower-power one delivering similar light improves efficiency. Insulation, air sealing and suitable building design can reduce heating and cooling demand. Appropriate thermostat settings, shading, efficient appliances and reduced hot-water use can also help. Choose measures suited to the equipment, climate and occupants rather than promising a fixed saving everywhere.",
   "For a fixed service, calculate energy before and after with consistent units. A 60 W lamp used 5 hours daily consumes 0.30 kWh per day; a 10 W replacement used equally consumes 0.05 kWh. The saving is 0.25 kWh daily. At a stated energy price of $0.20/kWh, that saves $0.05 per day, ignoring fixed charges. A kilowatt-hour is an energy amount, not power per hour. More use can offset part of an efficiency gain, so evaluate actual total consumption.",
   "Transport and community choices also affect demand. Higher vehicle fuel economy reduces fuel for a fixed distance; public transit, walking and cycling can reduce per-person transport energy when conditions and occupancy support them. Battery-electric vehicles have no tailpipe combustion, but electricity supply, batteries and production matter to life-cycle impacts. Hybrids combine propulsion technologies and can recover some braking energy. Green building design considers the whole building. Judge savings using comparable services, occupancy and boundaries, and distinguish simple payback from a complete lifetime-cost analysis."
  ],
  "eqs": [
   "Same light output with fewer watts = higher efficiency; fewer hours when unused = conservation",
   "(60 W − 10 W) × 5 h ÷ 1000 = 0.25 kWh saved per day",
   "Fixed distance 300 miles: 300/30 = 10 gallons; 300/50 = 6 gallons; save 4 gallons"
  ],
  "boards": [
   [
    "Conservation reduces unnecessary use",
    "Efficiency reduces input for comparable service",
    "Buildings, behavior and equipment work together"
   ],
   [
    "Energy = power × operating time",
    "Money saved = energy saved × stated unit price",
    "Check whether increased use offsets savings"
   ],
   [
    "Compare vehicles over the same distance",
    "Transit results depend partly on occupancy",
    "Simple payback omits several lifetime-cost factors"
   ]
  ],
  "questions": [
   [
    "Which action most directly illustrates efficiency at a comparable lighting service?",
    "Using a lower-power lamp that delivers similar illumination",
    "Leaving the original lamp on twice as long",
    "Turning an unused lamp off without changing its technology",
    "Lower input for the same useful service is efficiency. Turning off unused lighting is conservation through reduced use."
   ],
   [
    "Which action directly conserves energy by reducing unnecessary use?",
    "Switching off lights in an empty room",
    "Increasing the operating hours of an unchanged lamp",
    "Measuring only the lamp’s purchase price",
    "Avoiding unneeded operation reduces energy consumption. The lamp does not have to become technically more efficient for use to fall."
   ],
   [
    "A 60 W lamp runs for five hours. How much electricity does it use?",
    "0.30 kWh",
    "300 kWh",
    "12 kWh",
    "Sixty watts is 0.060 kW. Multiplying by five hours gives 0.30 kWh."
   ],
   [
    "A 10 W replacement runs for the same five hours instead of a 60 W lamp. How much energy is saved?",
    "0.25 kWh",
    "0.05 kWh",
    "0.35 kWh",
    "Old use is 0.30 kWh and new use is 0.05 kWh. Their difference is 0.25 kWh."
   ],
   [
    "Electricity costs a stated $0.20 per kWh. Ignoring fixed charges, what daily cost saving follows from saving 0.25 kWh?",
    "$0.05",
    "$0.50",
    "$5.00",
    "One quarter of a kilowatt-hour at twenty cents per kilowatt-hour costs five cents. Units cancel to dollars."
   ],
   [
    "Why can insulation reduce building heating demand in cold weather?",
    "It slows heat transfer through the building envelope",
    "It creates unlimited heat without an energy source",
    "It replaces every need for ventilation and moisture control",
    "Insulation reduces heat transfer for a given temperature difference. Other building functions still require appropriate design."
   ],
   [
    "A household uses less heated water for the same needed tasks. What energy benefit can result?",
    "Less energy is needed to heat that water",
    "Water heating is unrelated to energy demand",
    "All fixed utility charges necessarily disappear",
    "Reducing hot-water volume can reduce heating energy. Bills may also include fixed charges and other uses."
   ],
   [
    "A device uses half as much energy per hour after an efficiency upgrade, but runs three times as long. Relative to before, what happens to total energy use?",
    "It becomes 1.5 times as large",
    "It becomes one sixth as large",
    "It must fall by half",
    "Energy per hour is multiplied by hours: 0.5×3=1.5. Greater use more than offsets the efficiency gain in this example."
   ],
   [
    "For a 300-mile trip, how much fuel does a 30-miles-per-gallon vehicle use?",
    "10 gallons",
    "9000 gallons",
    "0.10 gallon",
    "Distance divided by miles per gallon gives gallons: 300/30=10. Multiplication would have incorrect units."
   ],
   [
    "For the same 300-mile trip, a vehicle improves from 30 to 50 miles per gallon. How many gallons are saved?",
    "4 gallons",
    "20 gallons",
    "6 gallons",
    "Fuel falls from 10 gallons to 6 gallons, saving 4. The difference in mpg is not itself gallons saved."
   ],
   [
    "A transit comparison claims lower energy per passenger-kilometre. Which input is essential to evaluate that claim?",
    "Vehicle energy use and actual passenger occupancy",
    "Only the vehicle’s total seating capacity",
    "Only the paint color of the vehicles",
    "Per-passenger performance depends on passengers carried as well as vehicle energy and distance. Capacity is not the same as actual occupancy."
   ],
   [
    "A battery-electric car has no tailpipe combustion emissions. Which broader comparison is still needed?",
    "Electricity generation and vehicle production over comparable travel",
    "Only whether it has a tailpipe",
    "A presumption that battery manufacturing needs no resources",
    "Life-cycle impacts include energy supply and manufacturing. Tailpipe information covers just one stage."
   ],
   [
    "An efficiency upgrade costs an additional $200 and saves a constant $50 each year. Ignoring discounting and maintenance, what is its simple payback?",
    "4 years",
    "0.25 year",
    "250 years",
    "Four annual savings of $50 total $200. Simple payback does not include all lifetime costs or the time value of money."
   ],
   [
    "Why can an integrated building design outperform evaluating each appliance in isolation?",
    "Envelope, shading, equipment and occupancy interact to determine demand",
    "Building heat loss is independent of insulation and windows",
    "Only the number of appliances determines energy use",
    "Whole-building interactions affect service needs and equipment operation. Considering them helps evaluate actual total energy use."
   ]
  ],
  "check": [
   "A 100 W device is replaced by a 40 W device providing the same service. Both run 10 hours daily. What daily electricity saving results?",
   "0.6 kWh",
   "6 kWh",
   "0.04 kWh",
   "The power reduction is 60 W. Multiply by 10 hours and convert watt-hours to kilowatt-hours."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Two ways to reduce energy demand",
    "head": "Action",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "Turn off unused lighting",
      "Reduce unnecessary service: conservation"
     ],
     [
      "Same light with lower power",
      "Improve efficiency"
     ],
     [
      "Insulation and air sealing",
      "Reduce heating and cooling demand"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Equal lighting use: five hours per day",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      116,
      60
     ],
     "P1": [
      529,
      60
     ],
     "P2": [
      116,
      60
     ],
     "P3": [
      116,
      189
     ],
     "P4": [
      177,
      158.57142857142858
     ],
     "P5": [
      273,
      158.57142857142858
     ],
     "P6": [
      273,
      60
     ],
     "P7": [
      177,
      60
     ],
     "P8": [
      392,
      76.42857142857144
     ],
     "P9": [
      488,
      76.42857142857144
     ],
     "P10": [
      488,
      60
     ],
     "P11": [
      392,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
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
    "polys": [
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
       96,
       56
      ],
      "text": "0",
      "col": 3
     },
     {
      "at": [
       320,
       214
      ],
      "text": "Daily electrical energy (kWh)",
      "col": 0
     },
     {
      "at": [
       225,
       167.57142857142858
      ],
      "text": "0.3",
      "col": 1
     },
     {
      "at": [
       225,
       37
      ],
      "text": "60 W lamp",
      "col": 1
     },
     {
      "at": [
       440,
       85.42857142857144
      ],
      "text": "0.05",
      "col": 2
     },
     {
      "at": [
       440,
       37
      ],
      "text": "10 W lamp",
      "col": 2
     },
     {
      "at": [
       320,
       14
      ],
      "text": "Saving: 0.25 kWh per day; $0.05 at $0.20/kWh",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Same 300-mile trip, different fuel economy",
    "head": "Vehicle",
    "cols": [
     "Meaning"
    ],
    "rows": [
     [
      "30 miles per gallon",
      "10 gallons"
     ],
     [
      "50 miles per gallon",
      "6 gallons"
     ],
     [
      "Fuel saved",
      "4 gallons"
     ],
     [
      "Comparison boundary",
      "Same trip; other effects considered separately"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which action most directly illustrates efficiency at a comparable lighting service?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which action directly conserves energy by reducing unnecessary use?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A 60 W lamp runs for five hours. How much electricity does it use?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A 10 W replacement runs for the same five hours instead of a 60 W lamp. How much energy is saved?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Electricity costs a stated $0.20 per kWh. Ignoring fixed charges, what daily cost saving follows from saving 0.25 kWh?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can insulation reduce building heating demand in cold weather?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A household uses less heated water for the same needed tasks. What energy benefit can result?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A device uses half as much energy per hour after an efficiency upgrade, but runs three times as long. Relative to before, what happens to total energy use?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "For a 300-mile trip, how much fuel does a 30-miles-per-gallon vehicle use?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "For the same 300-mile trip, a vehicle improves from 30 to 50 miles per gallon. How many gallons are saved?"
    ],
    "small": false
   },
   "10": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A transit comparison claims lower energy per passenger-kilometre. Which input is essential to evaluate that claim?"
    ],
    "small": false
   },
   "11": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A battery-electric car has no tailpipe combustion emissions. Which broader comparison is still needed?"
    ],
    "small": false
   },
   "12": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An efficiency upgrade costs an additional $200 and saves a constant $50 each year. Ignoring discounting and maintenance, what is its simple payback?"
    ],
    "small": false
   },
   "13": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can an integrated building design outperform evaluating each appliance in isolation?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A 100 W device is replaced by a 40 W device providing the same service. Both run 10 hours daily. What daily electricity saving results?"
   ],
   "small": false
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Identify the primary resource, its conversion to useful energy and the full system being compared. Renewable describes replenishment, not freedom from environmental impacts. Separate power from energy, total demand from demand per person, conversion efficiency from capacity factor, and operating emissions from life-cycle emissions. Check fuel production, extraction, waste, water, land and reliability as well as electricity output. Conservation and efficiency can reduce demand, while appropriate technology and siting reduce particular harms. Numerical answers need units and explicit assumptions; no single energy source has every advantage.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-enviro-energy-resources","subject":"science","level":5,"grade":9,"standard":"AP Environmental Science Unit 6: Energy Resources and Consumption; topics 6.1–6.13, ENG-3.A–T; 2026 CED","title":"Energy Resources","goal":"Trace energy conversions, interpret energy data and compare resource choices using efficiency, availability and environmental evidence.","points":20,"progression":{"requires":["science-h-ap-enviro-land-and-water-use"],"operations":3,"demand":"Interpret an energy system, calculate its performance and justify an environmental comparison with explicit boundaries."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
