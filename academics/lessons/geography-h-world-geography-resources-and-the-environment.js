/* Original course unit. Review record: docs/review/lessons/high-completion/world-geography-u7-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "NGS 1",
  "name": "Resource maps, access and measurement",
  "skill": "s1",
  "teach": [
   "Resource geography asks where useful materials and energy occur, who can access them, and how extraction and use connect places. A deposit map alone cannot establish that a resource is affordable or accessible: transport, technology, rights, institutions and environmental constraints also matter. Use a GIS to combine relevant layers and check their dates, resolution and definitions. A watershed boundary follows drainage rather than necessarily matching a political border. All unnamed places, numerical datasets and policy comparisons in this unit are original fictional examples.",
   "Compare totals and rates separately. In an original dataset, Region A uses 600 million cubic meters of water annually and has 3 million residents; Region B uses 400 million cubic meters and has 1 million residents. A uses more in total, but B has higher annual use per resident: 400 rather than 200 cubic meters. Regional use divided by population includes the uses counted in that dataset; it is not automatically household drinking-water use. A regional average also does not show how use or access is distributed among households.",
   "A resource map is evidence with a scale and a purpose. On a 1:250,000 map, a 4 cm line represents 10 km, but a road or pipe may follow a longer route. Proportional symbols can represent total production; a choropleth can compare a defined rate. Classification choices affect apparent patterns. Similar spatial patterns of mines and low vegetation do not alone show whether mining caused the difference; prior land cover, climate and a suitable comparison matter. Repeat observations should use comparable boundaries, seasons and measurement methods."
  ],
  "boards": [
   [
    "Map deposits together with access and constraints",
    "Watersheds follow drainage, not national borders",
    "Check date, scale, resolution and definitions",
    "Practice places and numerical data are fictional"
   ],
   [
    "A: 600 million m³ / 3 million people = 200 m³",
    "B: 400 million m³ / 1 million people = 400 m³",
    "A has the larger total; B the higher per-person rate",
    "Averages do not show every household’s use"
   ],
   [
    "1:250,000 means 1 map cm represents 2.5 km",
    "4 cm represents 10 km along the measured line",
    "Symbol size, bins and boundaries affect the map",
    "A spatial association alone does not prove cause"
   ]
  ],
  "eqs": [
   "Resource access = location considered with social and physical constraints",
   "Per-person annual use = annual regional use / residents",
   "4 × 250,000 cm = 1,000,000 cm = 10 km"
  ],
  "questions": [
   [
    "Which combination best supports evaluating access to a mineral deposit?",
    "Deposit locations, transport, extraction costs and use restrictions",
    "Only the country's flag colors",
    "Only the name of the mineral",
    "Physical presence alone does not establish practical access; transport, costs and constraints affect extraction."
   ],
   [
    "Which boundary is most directly relevant to tracing upstream runoff into a lake?",
    "The lake's drainage basin",
    "An unrelated school district",
    "A continent's alphabetical list of cities",
    "A drainage basin connects land whose surface water drains toward the chosen outlet, even across political boundaries."
   ],
   [
    "Why should an analyst check the dates of GIS layers before combining them?",
    "Layers may describe different conditions or time periods",
    "Newer dates guarantee every value is correct",
    "Dates determine map north automatically",
    "A land-cover layer and population layer from different years can give a misleading picture of simultaneous conditions."
   ],
   [
    "Why can a coarse regional map miss a small wetland?",
    "Its spatial resolution may not distinguish a small feature",
    "All wetlands are invisible at every scale",
    "Map legends remove all uncertainty",
    "Resolution limits what can be distinguished; a regional dataset is not necessarily suitable for a local siting decision."
   ],
   [
    "In a fictional year, A uses 600 million m³ with 3 million residents; B uses 400 million m³ with 1 million residents. Which uses more water in total?",
    "Region A",
    "Region B",
    "They use the same total",
    "Six hundred million is greater than four hundred million, regardless of the populations used in rate calculations."
   ],
   [
    "A fictional region uses 600 million m³ in a year and has 3 million residents. What is annual use per resident?",
    "200 m³",
    "1800 m³",
    "0.005 m³",
    "Dividing 600 million cubic meters by three million residents gives 200 cubic meters per resident for that year."
   ],
   [
    "A uses 600 million m³ yearly for 3 million residents; B uses 400 million m³ yearly for 1 million residents. Which has higher use per resident?",
    "Region B",
    "Region A",
    "They must be equal because both use water",
    "A's rate is 200 and B's is 400 cubic meters per resident, so B's per-person rate is higher despite its smaller total."
   ],
   [
    "What does annual regional water use divided by population necessarily reveal?",
    "A per-person average for the uses included in the dataset",
    "Exactly how much every household drinks",
    "Every resident's legal water entitlement",
    "The quotient is an aggregate rate; it need not isolate household use or describe individual consumption and rights."
   ],
   [
    "On a 1:500000 map, a measured line is 3 cm. What distance does that line represent?",
    "15 km",
    "1.5 km",
    "1500 km",
    "Three times 500,000 centimeters is 1,500,000 centimeters, which equals fifteen kilometers."
   ],
   [
    "Why can a pipeline route be longer than the scaled straight line joining two towns?",
    "Terrain, land access and routing constraints may require detours",
    "The map ratio is always meaningless",
    "All pipes follow the Equator",
    "The map line and feasible route represent different paths; constraints can increase the actual route length."
   ],
   [
    "Which mapping method can directly use symbol area to represent total mine output?",
    "Proportional symbols with a clear legend",
    "An unlabeled color chosen for each mine",
    "An alphabetical list without quantities",
    "A proportional-symbol map scales symbols to stated values; its legend must identify how quantity is represented."
   ],
   [
    "Why should a choropleth legend state its numerical class boundaries?",
    "Changing bins can change the visual impression of differences",
    "All bins always contain the same number of places",
    "Color alone establishes causation",
    "The same observations can appear more or less divided depending on class boundaries, so readers need the legend."
   ],
   [
    "A map shows low vegetation around mines. What is needed before attributing the whole pattern to mining?",
    "Evidence on earlier conditions, other causes and comparison areas",
    "Only a larger title font",
    "An assumption that every correlation is causal",
    "Prior cover and factors such as climate can affect vegetation, so the spatial pattern alone does not identify a cause."
   ],
   [
    "Which change most directly improves comparison of forest cover between two years?",
    "Use comparable boundaries, seasons and measurement methods",
    "Change all three without explanation",
    "Compare one region's hectares with another's currency",
    "Consistent observation methods reduce misleading differences from classification or seasonal and boundary changes."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Drainage connects places",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      160,
      195
     ],
     "P1": [
      360,
      194
     ],
     "P2": [
      360,
      194
     ],
     "P3": [
      472,
      139
     ],
     "P4": [
      472,
      139
     ],
     "P5": [
      407,
      55
     ],
     "P6": [
      407,
      55
     ],
     "P7": [
      326,
      55
     ],
     "P8": [
      326,
      55
     ],
     "P9": [
      253,
      56
     ],
     "P10": [
      253,
      56
     ],
     "P11": [
      130,
      122
     ],
     "P12": [
      130,
      122
     ],
     "P13": [
      160,
      195
     ],
     "P14": [
      295,
      190
     ],
     "P15": [
      326,
      55
     ],
     "P16": [
      207,
      169
     ],
     "P17": [
      311.0740740740741,
      120
     ],
     "P18": [
      405,
      165
     ],
     "P19": [
      316.35555555555555,
      97
     ],
     "P20": [
      99,
      106
     ],
     "P21": [
      550,
      106
     ],
     "P22": [
      326,
      55
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P4P5",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P6P7",
      "col": 1,
      "arrows": 0,
      "dash": true,
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
     },
     {
      "v": "P12P13",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 3
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
     },
     {
      "v": "P20P21",
      "col": 3,
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
      "text": "Fictional drainage map; schematic, not to scale",
      "col": 0
     },
     {
      "at": [
       488,
       118
      ],
      "text": "Border",
      "col": 3
     },
     {
      "at": [
       354,
       39
      ],
      "text": "Outlet",
      "col": 2
     },
     {
      "at": [
       224,
       177
      ],
      "text": "Upstream",
      "col": 2
     },
     {
      "at": [
       153,
       41
      ],
      "text": "Basin boundary",
      "col": 1
     },
     {
      "at": [
       507,
       175
      ],
      "text": "North ↑",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P22",
      "r": 5,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "Totals versus rates",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      135,
      140
     ],
     "P1": [
      179,
      140
     ],
     "P2": [
      179,
      60
     ],
     "P3": [
      135,
      60
     ],
     "P4": [
      200,
      113.33333333333334
     ],
     "P5": [
      244,
      113.33333333333334
     ],
     "P6": [
      244,
      60
     ],
     "P7": [
      200,
      60
     ],
     "P8": [
      394,
      100
     ],
     "P9": [
      438,
      100
     ],
     "P10": [
      438,
      60
     ],
     "P11": [
      394,
      60
     ],
     "P12": [
      459,
      140
     ],
     "P13": [
      503,
      140
     ],
     "P14": [
      503,
      60
     ],
     "P15": [
      459,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     },
     {
      "v": "P8P9P10P11",
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
       215
      ],
      "text": "Fictional annual use: totals and rates differ",
      "col": 0
     },
     {
      "at": [
       202,
       190
      ],
      "text": "Total use",
      "col": 0
     },
     {
      "at": [
       202,
       172
      ],
      "text": "million m³",
      "col": 0
     },
     {
      "at": [
       157,
       149
      ],
      "text": "600",
      "col": 1
     },
     {
      "at": [
       157,
       40
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       222,
       122.33333333333334
      ],
      "text": "400",
      "col": 2
     },
     {
      "at": [
       222,
       40
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       461,
       190
      ],
      "text": "Per resident",
      "col": 0
     },
     {
      "at": [
       461,
       172
      ],
      "text": "m³ per year",
      "col": 0
     },
     {
      "at": [
       416,
       109
      ],
      "text": "200",
      "col": 1
     },
     {
      "at": [
       416,
       40
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       481,
       149
      ],
      "text": "400",
      "col": 2
     },
     {
      "at": [
       481,
       40
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       320,
       25
      ],
      "text": "A: 3 million people; B: 1 million people",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "NGS 7",
  "name": "Water cycles, budgets and shared basins",
  "skill": "s2",
  "teach": [
   "Water circulates through evaporation, transpiration, condensation, precipitation, infiltration and runoff. Solar energy drives much evaporation, while gravity moves water downhill and through drainage systems. Stores such as lakes, snow and aquifers have different turnover times. Renewable water cycling does not guarantee enough clean water at a particular place and time. Rain that infiltrates soil is not all groundwater recharge: some returns through plants or evaporation. A watershed budget needs a stated boundary and period.",
   "Account for changes in storage using all specified inflows and outflows. An original reservoir begins with 500 units, receives 140 units and loses 90 through releases and 30 through evaporation; it ends with 520. In a simplified aquifer with recharge 60, pumping 70 and other discharge 10 per year, storage falls by 20 units annually. A pumping limit based only on recharge can still affect streams and ecosystems: pumping may reduce natural discharge or induce additional inflow. A steady water level alone does not prove an acceptable ecological outcome.",
   "Withdrawal means taking water from a source; consumptive use is the part not promptly available for reuse within the relevant system, for example because of evaporation. Suppose one field withdraws 100 units, consumes 60 and returns 40 usable units to the same basin. A new method withdraws 80, still consumes 60 and returns 20: withdrawals fall, but consumption does not. Basin savings require accounting for return flows, water quality and any expansion of use. Desalination can add usable freshwater from saline sources but needs energy and management of concentrated brine.",
   "Drought, demand, infrastructure, contamination and unequal access can all contribute to water scarcity. An upstream project can alter downstream timing, sediment and ecosystems even if the annual volume looks unchanged. Shared monitoring and negotiated rules can help users evaluate tradeoffs across a basin. An original town cuts leakage from 30 to 18 units per day, saving 12 units daily under unchanged supply and use conditions. That is a 40% reduction in the original leak volume, not a forty-percentage-point reduction in every water-use share."
  ],
  "boards": [
   [
    "Water moves among air, surface, soil and aquifers",
    "Sunlight supports evaporation; gravity moves runoff",
    "Infiltration is not automatically aquifer recharge",
    "Local availability depends on place, time and quality"
   ],
   [
    "Reservoir: 500 + 140 − 90 − 30 = 520 units",
    "Aquifer: 60 − 70 − 10 = −20 units per year",
    "Count every specified flow across the boundary",
    "Stable storage need not preserve stream ecosystems"
   ],
   [
    "Old field: 100 withdrawn, 60 consumed, 40 returned",
    "New field: 80 withdrawn, 60 consumed, 20 returned",
    "Withdrawal falls by 20; consumption is unchanged",
    "Check basin flows, quality and expanded use"
   ],
   [
    "Availability and access have physical and social causes",
    "Upstream timing changes can matter downstream",
    "Leakage: 30 → 18 means 12 units saved per day",
    "12 / 30 × 100 = 40% reduction in leaks"
   ]
  ],
  "eqs": [
   "Storage change = total inflows − total outflows",
   "Ending reservoir storage = 500 + 140 − 90 − 30 = 520",
   "Withdrawal = consumption + recoverable return flow in this example",
   "Leak reduction = (30 − 18) / 30 × 100 = 40%"
  ],
  "questions": [
   [
    "Which process transfers liquid surface water into water vapor?",
    "Evaporation",
    "Condensation",
    "Sediment deposition",
    "Evaporation changes liquid water into vapor; condensation reverses that phase change and deposition here concerns sediment."
   ],
   [
    "Which process describes water entering the soil surface?",
    "Infiltration",
    "Only evaporation",
    "Only surface runoff",
    "Infiltration is entry into soil; some infiltrated water may later recharge groundwater while some returns to the atmosphere."
   ],
   [
    "Why is infiltration not identical to groundwater recharge?",
    "Some infiltrated water is stored in soil or used by plants before reaching an aquifer",
    "All infiltrated water immediately leaves Earth",
    "Recharge means water flowing only uphill",
    "The water budget includes soil storage, evaporation and plant use; not every infiltrated drop reaches the saturated zone."
   ],
   [
    "What mainly moves surface runoff downhill?",
    "Gravity",
    "A country's currency",
    "The alphabetic order of river names",
    "Gravity moves water down elevation gradients, while surface conditions influence the amount and routing of runoff."
   ],
   [
    "A reservoir starts at 700 units, receives 180, releases 120 and loses 40 to evaporation. What is ending storage?",
    "720 units",
    "940 units",
    "680 units",
    "The net inflow is 180 minus 120 minus 40, or twenty units, so storage rises from 700 to 720."
   ],
   [
    "A simplified aquifer receives recharge 80 units, loses 90 to pumping and 15 to other discharge in a year. What is its storage change?",
    "A decrease of 25 units",
    "An increase of 5 units",
    "An increase of 185 units",
    "All outflows count: 80 minus 90 minus 15 equals minus 25, so aquifer storage decreases."
   ],
   [
    "In a simplified aquifer, recharge is 90 units and other discharge is fixed at 20. What pumping gives zero storage change for that accounting period?",
    "70 units",
    "90 units",
    "110 units",
    "For zero storage change, pumping plus the stated other discharge must equal recharge, giving 90 minus 20."
   ],
   [
    "Why is pumping at a rate equal to natural recharge not automatically ecologically harmless?",
    "Pumping can change discharge to streams and other connected ecosystems",
    "Natural discharge can never change",
    "Ecological effects depend only on well color",
    "Recharge previously supported other flows; diverting it to pumping may change those flows even with little storage change."
   ],
   [
    "Which effect can sustained groundwater depletion cause in susceptible sediments?",
    "Land subsidence",
    "Guaranteed mountain growth",
    "Creation of unlimited freshwater",
    "Removal of groundwater can allow compressible sediments to compact, lowering the land surface; the response depends on geology."
   ],
   [
    "Why can heavy pumping near a coast threaten groundwater quality?",
    "It can encourage saltwater intrusion under suitable conditions",
    "Pumping turns every salt ion into oxygen",
    "All coastal aquifers are disconnected from saline water",
    "Changing groundwater pressure and flow can allow saline water to move into freshwater zones, though conditions vary."
   ],
   [
    "A field withdraws 120 units and returns 45 usable units to the same basin, with no storage change or other flow. How much is consumed in this accounting?",
    "75 units",
    "165 units",
    "45 units",
    "With the stated closed accounting, consumption is withdrawal minus recoverable returns: 120 minus 45 equals 75."
   ],
   [
    "A field changes from withdrawing 100 and returning 40 to withdrawing 80 and returning 20, with no storage change. What happens to consumption?",
    "It stays at 60 units",
    "It falls by 20 units",
    "It becomes zero",
    "The differences are 100 minus 40 and 80 minus 20; both equal sixty, so reduced withdrawals do not show reduced consumption."
   ],
   [
    "Which additional information is needed to assess real basin savings from new irrigation equipment?",
    "Return flows, total consumption, water quality and changes in irrigated use",
    "Only the equipment's paint color",
    "Only the seller's claim of efficiency",
    "A field-scale reduction can be offset by lower downstream returns or greater use, so the whole basin accounting matters."
   ],
   [
    "Which tradeoff should be included when evaluating desalination?",
    "Energy demand and management of concentrated brine",
    "It always requires no energy",
    "It produces only freshwater and no residual stream",
    "Desalination separates salts but has energy and residual-brine implications; local conditions affect its costs and impacts."
   ],
   [
    "Why can water scarcity occur where annual rainfall is relatively high?",
    "Seasonal timing, contamination, demand and access may constrain usable supply",
    "High rainfall guarantees safe water to every home",
    "Rainfall eliminates all infrastructure needs",
    "Annual totals do not reveal seasonal shortages, water quality, delivery systems or unequal access to reliable supplies."
   ],
   [
    "A town reduces daily leakage from 50 units to 30. How many units are saved per day under otherwise unchanged conditions?",
    "20 units",
    "80 units",
    "50 units",
    "The saved leak volume is the difference between the old and new amounts, 50 minus 30, or twenty units each day."
   ],
   [
    "Leakage falls from 50 to 30 units per day. What percent reduction in leakage is this?",
    "40%",
    "20%",
    "60%",
    "The reduction is twenty out of the original fifty, giving 20 divided by 50 times 100, or forty percent."
   ],
   [
    "Why might downstream users object when a dam preserves annual flow volume but changes its timing?",
    "Seasonal flow timing can affect farming, fish and habitats",
    "Only annual totals can ever affect ecosystems",
    "Every timing change improves all downstream uses",
    "Ecological processes and livelihoods can depend on seasonal flows, so matching annual volume alone does not preserve conditions."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "A reservoir budget",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      123,
      123
     ],
     "P1": [
      170,
      123
     ],
     "P2": [
      170,
      53
     ],
     "P3": [
      123,
      53
     ],
     "P4": [
      206,
      142.60000000000002
     ],
     "P5": [
      253,
      142.60000000000002
     ],
     "P6": [
      253,
      123.00000000000003
     ],
     "P7": [
      206,
      123.00000000000003
     ],
     "P8": [
      289,
      142.60000000000002
     ],
     "P9": [
      336,
      142.60000000000002
     ],
     "P10": [
      336,
      130.00000000000003
     ],
     "P11": [
      289,
      130.00000000000003
     ],
     "P12": [
      372,
      130
     ],
     "P13": [
      419,
      130
     ],
     "P14": [
      419,
      125.80000000000001
     ],
     "P15": [
      372,
      125.80000000000001
     ],
     "P16": [
      455,
      125.80000000000001
     ],
     "P17": [
      502,
      125.80000000000001
     ],
     "P18": [
      502,
      53
     ],
     "P19": [
      455,
      53
     ],
     "P20": [
      103,
      53
     ],
     "P21": [
      535,
      53
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21",
    "dots": "",
    "segs": [
     {
      "v": "P20P21",
      "col": 0,
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
     },
     {
      "v": "P8P9P10P11",
      "col": 3
     },
     {
      "v": "P12P13P14P15",
      "col": 3
     },
     {
      "v": "P16P17P18P19",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional reservoir: all amounts in volume units",
      "col": 0
     },
     {
      "at": [
       146.5,
       133
      ],
      "text": "500",
      "col": 1
     },
     {
      "at": [
       146.5,
       33
      ],
      "text": "Start",
      "col": 0
     },
     {
      "at": [
       229.5,
       152.60000000000002
      ],
      "text": "+140",
      "col": 2
     },
     {
      "at": [
       229.5,
       33
      ],
      "text": "In",
      "col": 0
     },
     {
      "at": [
       312.5,
       152.60000000000002
      ],
      "text": "−90",
      "col": 3
     },
     {
      "at": [
       312.5,
       33
      ],
      "text": "Release",
      "col": 0
     },
     {
      "at": [
       395.5,
       140
      ],
      "text": "−30",
      "col": 3
     },
     {
      "at": [
       395.5,
       33
      ],
      "text": "Evap.",
      "col": 0
     },
     {
      "at": [
       478.5,
       135.8
      ],
      "text": "520",
      "col": 1
     },
     {
      "at": [
       478.5,
       33
      ],
      "text": "End",
      "col": 0
     },
     {
      "at": [
       320,
       195
      ],
      "text": "500 + 140 − 90 − 30 = 520",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Withdrawal versus consumption",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      143,
      154
     ],
     "P1": [
      359,
      154
     ],
     "P2": [
      359,
      126
     ],
     "P3": [
      143,
      126
     ],
     "P4": [
      359,
      154
     ],
     "P5": [
      503,
      154
     ],
     "P6": [
      503,
      126
     ],
     "P7": [
      359,
      126
     ],
     "P8": [
      143,
      95
     ],
     "P9": [
      359,
      95
     ],
     "P10": [
      359,
      67
     ],
     "P11": [
      143,
      67
     ],
     "P12": [
      359,
      95
     ],
     "P13": [
      431,
      95
     ],
     "P14": [
      431,
      67
     ],
     "P15": [
      359,
      67
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     },
     {
      "v": "P8P9P10P11",
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
       215
      ],
      "text": "Fictional field accounts; no storage change",
      "col": 0
     },
     {
      "at": [
       96,
       140
      ],
      "text": "Old",
      "col": 0
     },
     {
      "at": [
       251,
       135
      ],
      "text": "60",
      "col": 1
     },
     {
      "at": [
       431,
       135
      ],
      "text": "40",
      "col": 2
     },
     {
      "at": [
       96,
       81
      ],
      "text": "New",
      "col": 0
     },
     {
      "at": [
       251,
       76
      ],
      "text": "60",
      "col": 1
     },
     {
      "at": [
       395,
       76
      ],
      "text": "20",
      "col": 2
     },
     {
      "at": [
       320,
       187
      ],
      "text": "Scale: bar length represents withdrawal",
      "col": 0
     },
     {
      "at": [
       216,
       43
      ],
      "text": "Consumed",
      "col": 1
     },
     {
      "at": [
       455,
       43
      ],
      "text": "Recoverable return",
      "col": 2
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "NGS 14",
  "name": "Land use, pollution and material flows",
  "skill": "s3",
  "teach": [
   "Land use changes water, soils and habitats. Removing vegetation can expose soil to erosion, and impervious pavement often increases rapid runoff while reducing infiltration. Effects depend on slope, soil, storms and management. Contour farming follows lines of similar elevation and can help slow runoff; maintaining soil cover also reduces exposure. Desertification is land degradation in drylands associated with climatic variations and human activities, not simply the outward movement of every sandy desert. Deforestation is a change away from forest land use; a temporarily harvested forest is not automatically permanently converted land.",
   "Excess nitrogen and phosphorus can stimulate aquatic blooms. Respiration and decomposition of organic matter can lower dissolved oxygen, harming aquatic life; some blooms also produce toxins, but not every bloom is toxic. A discharge from an identifiable pipe is a point source, while diffuse runoff across fields is a nonpoint-source pattern. Concentration and total load are different: with stable concentration, doubling flow doubles transported mass over the same interval. Original stream samples of 2 mg/L at 100 L/s give 200 mg/s, or 0.2 g/s, of a dissolved substance.",
   "Habitat area, quality and connectivity matter. Dividing habitat into isolated patches can impede movement for some species, while corridors can help particular organisms when designed for their needs. The same total forest area need not preserve the same species or ecological functions. In an original map, forest falls from 80 to 60 hectares: a 20-hectare loss, or 25% of the original forest. If the whole study area is 100 hectares, forest cover falls from 80% to 60%, a change of 20 percentage points. These are different denominators.",
   "Materials have impacts during extraction, production, transport, use and disposal. A life-cycle comparison must provide the same useful service and state its boundaries. Preventing waste and reusing products can reduce demand for new materials; recycling can recover material but does not automatically eliminate extraction or energy use. In an original process, 100 kg of discarded metal are collected and 80% is recovered as usable material, giving 80 kg recovered and 20 kg residue. A recycling label or a larger collection total does not by itself prove a smaller overall environmental burden."
  ],
  "boards": [
   [
    "Vegetation removal can increase erosion risk",
    "Pavement often increases runoff and reduces infiltration",
    "Contour practices and soil cover can reduce erosion",
    "Dryland degradation is not simply desert expansion"
   ],
   [
    "Excess nutrients → blooms → oxygen stress can follow",
    "Not every bloom is toxic",
    "Point: identifiable outlet; nonpoint: diffuse runoff",
    "2 mg/L × 100 L/s = 200 mg/s = 0.2 g/s"
   ],
   [
    "Fictional forest area: 80 ha → 60 ha",
    "Loss: 20 ha, equal to 25% of original forest",
    "In a 100 ha study area: 80% → 60%, down 20 points",
    "Equal areas can have different habitat connections"
   ],
   [
    "Compare the same useful service across life stages",
    "Prevention and reuse can avoid new material demand",
    "100 kg × 80% recovery = 80 kg usable material",
    "The remaining 20 kg needs appropriate management"
   ]
  ],
  "eqs": [
   "Erosion risk depends on cover, slope, soil, rainfall and management",
   "Mass flow rate = concentration × water flow rate",
   "Relative forest loss = (80 − 60) / 80 × 100 = 25%",
   "Recovered mass = collected mass × recovery fraction"
  ],
  "questions": [
   [
    "Which land-cover change commonly increases rapid storm runoff under otherwise comparable conditions?",
    "Replacing permeable ground with impervious pavement",
    "Adding effective infiltration areas",
    "Keeping all conditions identical",
    "Impervious surfaces reduce entry into soil and can route water rapidly; actual runoff also depends on drainage and storms."
   ],
   [
    "Why can removing vegetation increase soil erosion?",
    "It reduces protective cover and root-related stabilization",
    "It makes wind and water disappear",
    "All exposed soils instantly become rock",
    "Vegetation can intercept rain and help hold soil; removing it can increase exposure to erosion depending on site conditions."
   ],
   [
    "What does contour farming follow?",
    "Lines of similar elevation across a slope",
    "Only the steepest downhill direction",
    "The names of neighboring countries",
    "Following elevation contours can slow downslope water movement and reduce erosion when suited to the site."
   ],
   [
    "Which description best matches desertification?",
    "Land degradation in drylands linked to climatic variations and human activities",
    "Every desert expanding in a perfectly circular ring",
    "Any winter snowfall outside a desert",
    "Desertification concerns degradation in arid, semiarid and dry subhumid areas, rather than a single universal sand-front process."
   ],
   [
    "Why is temporary timber harvesting not always classified as deforestation?",
    "Land may remain in forest use with expected regeneration",
    "Harvesting never changes any ecosystem",
    "Deforestation means only trees losing leaves each autumn",
    "Forest land-use definitions can include temporarily unstocked areas expected to regenerate; permanent conversion is a different change."
   ],
   [
    "What can excess nitrogen and phosphorus do in a lake?",
    "Promote excessive growth of algae and similar organisms",
    "Guarantee oxygen increases forever",
    "Prevent every organism from growing",
    "Nutrient enrichment can stimulate blooms, with effects on light, oxygen and sometimes toxicity rather than guaranteed improvement."
   ],
   [
    "Why can a large algal bloom lead to low dissolved oxygen after organisms die?",
    "Decomposers consume oxygen while breaking down organic matter",
    "Dead algae manufacture unlimited oxygen in darkness",
    "Nitrogen atoms remove Earth's gravity",
    "Microbial decomposition uses oxygen and can contribute to hypoxia, alongside respiration and other water-body conditions."
   ],
   [
    "Which statement about algal blooms is accurate?",
    "Some produce toxins, but not all do",
    "Every bloom is harmless",
    "Every bloom produces the same toxin",
    "Bloom impacts differ by organisms and conditions; toxicity is possible but should not be assumed for every bloom."
   ],
   [
    "Which is the clearest example of a point-source discharge?",
    "Wastewater leaving an identifiable outfall pipe",
    "Diffuse runoff from many fields",
    "Rainfall across an entire continent",
    "A discrete identifiable outlet is a point source, unlike diffuse runoff from broad land areas."
   ],
   [
    "A stream has concentration 3 mg/L and flow 200 L/s. What is the transported mass rate?",
    "600 mg/s",
    "150 mg/s",
    "600 kg/s",
    "Multiplying concentration by volumetric flow cancels liters: three milligrams per liter times two hundred liters per second."
   ],
   [
    "A stream's flow doubles while dissolved concentration stays unchanged. What happens to mass transported per second?",
    "It doubles",
    "It stays the same",
    "It necessarily halves",
    "Mass flow is concentration times water flow; with concentration fixed, doubling the flow doubles the transported mass rate."
   ],
   [
    "Why can two streams with equal concentration transport different total pollutant loads over the same time?",
    "Their water flow rates may differ",
    "Concentration alone always fixes total mass",
    "Liters and milligrams are identical units",
    "Concentration is mass per volume, while load over time also depends on how much water moves through the stream."
   ],
   [
    "How can habitat fragmentation affect some wildlife?",
    "It can make movement between suitable patches more difficult",
    "It always increases every population",
    "It guarantees that each patch has the same habitat quality",
    "Separating habitat can impede movement and change edges and access, but effects differ among organisms and landscapes."
   ],
   [
    "What should determine whether a proposed wildlife corridor is suitable?",
    "The target organisms, habitat needs, route and potential effects",
    "Only whether it is a straight line on a map",
    "Only the total length of its name",
    "Connectivity has to function for actual organisms; design and side effects matter, so a label alone is insufficient."
   ],
   [
    "Forest in a fictional area falls from 120 ha to 90 ha. What percent of the original forest was lost?",
    "25%",
    "30%",
    "75%",
    "Thirty hectares were lost from an original 120, so the relative loss is thirty divided by 120, or twenty-five percent."
   ],
   [
    "In a fixed 200 ha study area, forest falls from 120 ha to 90 ha. By how many percentage points does forest cover fall?",
    "15 percentage points",
    "25 percentage points",
    "30 percentage points",
    "Cover changes from 60% to 45% of the study area, a fifteen-percentage-point decrease, using the fixed total area."
   ],
   [
    "Why might two landscapes with equal total forest area support different ecological outcomes?",
    "Patch arrangement, habitat quality and connectivity can differ",
    "Equal area forces identical species everywhere",
    "Forest area contains every possible ecological measurement",
    "The total area omits spatial arrangement and habitat characteristics that influence ecological processes and organisms."
   ],
   [
    "What is essential for a fair life-cycle comparison of two packaging systems?",
    "A comparable useful service and clearly stated boundaries",
    "Counting only whichever stage makes a favored option look best",
    "Assuming transport and disposal never matter",
    "A consistent functional service and scope make the comparison meaningful across production, use and end-of-life stages."
   ],
   [
    "A plant collects 150 kg of scrap and recovers 80% as usable material. How much usable material results?",
    "120 kg",
    "187.5 kg",
    "30 kg",
    "Eighty percent of 150 kilograms is 120 kilograms; the remaining thirty kilograms is not recovered as usable material."
   ],
   [
    "Why does recycling not automatically eliminate new extraction?",
    "Collection and recovery are incomplete, quality may change, and demand may grow",
    "Recycling creates infinite material from nothing",
    "All products are always collected and perfectly recovered",
    "Material recovery can reduce virgin demand, but losses, quality constraints and demand affect the total balance."
   ]
  ],
  "check": [
   "A fictional river has 4 mg/L of a dissolved substance and flows at 50 L/s. What mass passes each second?",
   "200 mg",
   "12.5 mg",
   "200 kg",
   "Multiply four milligrams per liter by fifty liters per second; the volume units cancel, giving two hundred milligrams per second."
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Concentration and load",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      85,
      158
     ],
     "P1": [
      229,
      158
     ],
     "P2": [
      229,
      91
     ],
     "P3": [
      85,
      91
     ],
     "P4": [
      248,
      158
     ],
     "P5": [
      392,
      158
     ],
     "P6": [
      392,
      91
     ],
     "P7": [
      248,
      91
     ],
     "P8": [
      413,
      158
     ],
     "P9": [
      557,
      158
     ],
     "P10": [
      557,
      91
     ],
     "P11": [
      413,
      91
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     },
     {
      "v": "P8P9P10P11",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional stream: units determine mass flow",
      "col": 0
     },
     {
      "at": [
       157,
       168
      ],
      "text": "Concentration",
      "col": 1
     },
     {
      "at": [
       157,
       117
      ],
      "text": "2 mg/L",
      "col": 1
     },
     {
      "at": [
       320,
       168
      ],
      "text": "Water flow",
      "col": 2
     },
     {
      "at": [
       320,
       117
      ],
      "text": "100 L/s",
      "col": 2
     },
     {
      "at": [
       485,
       168
      ],
      "text": "Mass flow",
      "col": 3
     },
     {
      "at": [
       485,
       117
      ],
      "text": "200 mg/s",
      "col": 3
     },
     {
      "at": [
       320,
       61
      ],
      "text": "2 × 100 = 200 mg/s = 0.2 g/s",
      "col": 0
     },
     {
      "at": [
       320,
       38
      ],
      "text": "Equal concentration does not imply equal total load",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Forest area and denominators",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      130,
      180
     ],
     "P1": [
      142,
      180
     ],
     "P2": [
      142,
      170
     ],
     "P3": [
      130,
      170
     ],
     "P4": [
      143,
      180
     ],
     "P5": [
      155,
      180
     ],
     "P6": [
      155,
      170
     ],
     "P7": [
      143,
      170
     ],
     "P8": [
      156,
      180
     ],
     "P9": [
      168,
      180
     ],
     "P10": [
      168,
      170
     ],
     "P11": [
      156,
      170
     ],
     "P12": [
      169,
      180
     ],
     "P13": [
      181,
      180
     ],
     "P14": [
      181,
      170
     ],
     "P15": [
      169,
      170
     ],
     "P16": [
      182,
      180
     ],
     "P17": [
      194,
      180
     ],
     "P18": [
      194,
      170
     ],
     "P19": [
      182,
      170
     ],
     "P20": [
      195,
      180
     ],
     "P21": [
      207,
      180
     ],
     "P22": [
      207,
      170
     ],
     "P23": [
      195,
      170
     ],
     "P24": [
      208,
      180
     ],
     "P25": [
      220,
      180
     ],
     "P26": [
      220,
      170
     ],
     "P27": [
      208,
      170
     ],
     "P28": [
      221,
      180
     ],
     "P29": [
      233,
      180
     ],
     "P30": [
      233,
      170
     ],
     "P31": [
      221,
      170
     ],
     "P32": [
      234,
      180
     ],
     "P33": [
      246,
      180
     ],
     "P34": [
      246,
      170
     ],
     "P35": [
      234,
      170
     ],
     "P36": [
      247,
      180
     ],
     "P37": [
      259,
      180
     ],
     "P38": [
      259,
      170
     ],
     "P39": [
      247,
      170
     ],
     "P40": [
      130,
      169
     ],
     "P41": [
      142,
      169
     ],
     "P42": [
      142,
      159
     ],
     "P43": [
      130,
      159
     ],
     "P44": [
      143,
      169
     ],
     "P45": [
      155,
      169
     ],
     "P46": [
      155,
      159
     ],
     "P47": [
      143,
      159
     ],
     "P48": [
      156,
      169
     ],
     "P49": [
      168,
      169
     ],
     "P50": [
      168,
      159
     ],
     "P51": [
      156,
      159
     ],
     "P52": [
      169,
      169
     ],
     "P53": [
      181,
      169
     ],
     "P54": [
      181,
      159
     ],
     "P55": [
      169,
      159
     ],
     "P56": [
      182,
      169
     ],
     "P57": [
      194,
      169
     ],
     "P58": [
      194,
      159
     ],
     "P59": [
      182,
      159
     ],
     "P60": [
      195,
      169
     ],
     "P61": [
      207,
      169
     ],
     "P62": [
      207,
      159
     ],
     "P63": [
      195,
      159
     ],
     "P64": [
      208,
      169
     ],
     "P65": [
      220,
      169
     ],
     "P66": [
      220,
      159
     ],
     "P67": [
      208,
      159
     ],
     "P68": [
      221,
      169
     ],
     "P69": [
      233,
      169
     ],
     "P70": [
      233,
      159
     ],
     "P71": [
      221,
      159
     ],
     "P72": [
      234,
      169
     ],
     "P73": [
      246,
      169
     ],
     "P74": [
      246,
      159
     ],
     "P75": [
      234,
      159
     ],
     "P76": [
      247,
      169
     ],
     "P77": [
      259,
      169
     ],
     "P78": [
      259,
      159
     ],
     "P79": [
      247,
      159
     ],
     "P80": [
      130,
      158
     ],
     "P81": [
      142,
      158
     ],
     "P82": [
      142,
      148
     ],
     "P83": [
      130,
      148
     ],
     "P84": [
      143,
      158
     ],
     "P85": [
      155,
      158
     ],
     "P86": [
      155,
      148
     ],
     "P87": [
      143,
      148
     ],
     "P88": [
      156,
      158
     ],
     "P89": [
      168,
      158
     ],
     "P90": [
      168,
      148
     ],
     "P91": [
      156,
      148
     ],
     "P92": [
      169,
      158
     ],
     "P93": [
      181,
      158
     ],
     "P94": [
      181,
      148
     ],
     "P95": [
      169,
      148
     ],
     "P96": [
      182,
      158
     ],
     "P97": [
      194,
      158
     ],
     "P98": [
      194,
      148
     ],
     "P99": [
      182,
      148
     ],
     "P100": [
      195,
      158
     ],
     "P101": [
      207,
      158
     ],
     "P102": [
      207,
      148
     ],
     "P103": [
      195,
      148
     ],
     "P104": [
      208,
      158
     ],
     "P105": [
      220,
      158
     ],
     "P106": [
      220,
      148
     ],
     "P107": [
      208,
      148
     ],
     "P108": [
      221,
      158
     ],
     "P109": [
      233,
      158
     ],
     "P110": [
      233,
      148
     ],
     "P111": [
      221,
      148
     ],
     "P112": [
      234,
      158
     ],
     "P113": [
      246,
      158
     ],
     "P114": [
      246,
      148
     ],
     "P115": [
      234,
      148
     ],
     "P116": [
      247,
      158
     ],
     "P117": [
      259,
      158
     ],
     "P118": [
      259,
      148
     ],
     "P119": [
      247,
      148
     ],
     "P120": [
      130,
      147
     ],
     "P121": [
      142,
      147
     ],
     "P122": [
      142,
      137
     ],
     "P123": [
      130,
      137
     ],
     "P124": [
      143,
      147
     ],
     "P125": [
      155,
      147
     ],
     "P126": [
      155,
      137
     ],
     "P127": [
      143,
      137
     ],
     "P128": [
      156,
      147
     ],
     "P129": [
      168,
      147
     ],
     "P130": [
      168,
      137
     ],
     "P131": [
      156,
      137
     ],
     "P132": [
      169,
      147
     ],
     "P133": [
      181,
      147
     ],
     "P134": [
      181,
      137
     ],
     "P135": [
      169,
      137
     ],
     "P136": [
      182,
      147
     ],
     "P137": [
      194,
      147
     ],
     "P138": [
      194,
      137
     ],
     "P139": [
      182,
      137
     ],
     "P140": [
      195,
      147
     ],
     "P141": [
      207,
      147
     ],
     "P142": [
      207,
      137
     ],
     "P143": [
      195,
      137
     ],
     "P144": [
      208,
      147
     ],
     "P145": [
      220,
      147
     ],
     "P146": [
      220,
      137
     ],
     "P147": [
      208,
      137
     ],
     "P148": [
      221,
      147
     ],
     "P149": [
      233,
      147
     ],
     "P150": [
      233,
      137
     ],
     "P151": [
      221,
      137
     ],
     "P152": [
      234,
      147
     ],
     "P153": [
      246,
      147
     ],
     "P154": [
      246,
      137
     ],
     "P155": [
      234,
      137
     ],
     "P156": [
      247,
      147
     ],
     "P157": [
      259,
      147
     ],
     "P158": [
      259,
      137
     ],
     "P159": [
      247,
      137
     ],
     "P160": [
      130,
      136
     ],
     "P161": [
      142,
      136
     ],
     "P162": [
      142,
      126
     ],
     "P163": [
      130,
      126
     ],
     "P164": [
      143,
      136
     ],
     "P165": [
      155,
      136
     ],
     "P166": [
      155,
      126
     ],
     "P167": [
      143,
      126
     ],
     "P168": [
      156,
      136
     ],
     "P169": [
      168,
      136
     ],
     "P170": [
      168,
      126
     ],
     "P171": [
      156,
      126
     ],
     "P172": [
      169,
      136
     ],
     "P173": [
      181,
      136
     ],
     "P174": [
      181,
      126
     ],
     "P175": [
      169,
      126
     ],
     "P176": [
      182,
      136
     ],
     "P177": [
      194,
      136
     ],
     "P178": [
      194,
      126
     ],
     "P179": [
      182,
      126
     ],
     "P180": [
      195,
      136
     ],
     "P181": [
      207,
      136
     ],
     "P182": [
      207,
      126
     ],
     "P183": [
      195,
      126
     ],
     "P184": [
      208,
      136
     ],
     "P185": [
      220,
      136
     ],
     "P186": [
      220,
      126
     ],
     "P187": [
      208,
      126
     ],
     "P188": [
      221,
      136
     ],
     "P189": [
      233,
      136
     ],
     "P190": [
      233,
      126
     ],
     "P191": [
      221,
      126
     ],
     "P192": [
      234,
      136
     ],
     "P193": [
      246,
      136
     ],
     "P194": [
      246,
      126
     ],
     "P195": [
      234,
      126
     ],
     "P196": [
      247,
      136
     ],
     "P197": [
      259,
      136
     ],
     "P198": [
      259,
      126
     ],
     "P199": [
      247,
      126
     ],
     "P200": [
      130,
      125
     ],
     "P201": [
      142,
      125
     ],
     "P202": [
      142,
      115
     ],
     "P203": [
      130,
      115
     ],
     "P204": [
      143,
      125
     ],
     "P205": [
      155,
      125
     ],
     "P206": [
      155,
      115
     ],
     "P207": [
      143,
      115
     ],
     "P208": [
      156,
      125
     ],
     "P209": [
      168,
      125
     ],
     "P210": [
      168,
      115
     ],
     "P211": [
      156,
      115
     ],
     "P212": [
      169,
      125
     ],
     "P213": [
      181,
      125
     ],
     "P214": [
      181,
      115
     ],
     "P215": [
      169,
      115
     ],
     "P216": [
      182,
      125
     ],
     "P217": [
      194,
      125
     ],
     "P218": [
      194,
      115
     ],
     "P219": [
      182,
      115
     ],
     "P220": [
      195,
      125
     ],
     "P221": [
      207,
      125
     ],
     "P222": [
      207,
      115
     ],
     "P223": [
      195,
      115
     ],
     "P224": [
      208,
      125
     ],
     "P225": [
      220,
      125
     ],
     "P226": [
      220,
      115
     ],
     "P227": [
      208,
      115
     ],
     "P228": [
      221,
      125
     ],
     "P229": [
      233,
      125
     ],
     "P230": [
      233,
      115
     ],
     "P231": [
      221,
      115
     ],
     "P232": [
      234,
      125
     ],
     "P233": [
      246,
      125
     ],
     "P234": [
      246,
      115
     ],
     "P235": [
      234,
      115
     ],
     "P236": [
      247,
      125
     ],
     "P237": [
      259,
      125
     ],
     "P238": [
      259,
      115
     ],
     "P239": [
      247,
      115
     ],
     "P240": [
      130,
      114
     ],
     "P241": [
      142,
      114
     ],
     "P242": [
      142,
      104
     ],
     "P243": [
      130,
      104
     ],
     "P244": [
      143,
      114
     ],
     "P245": [
      155,
      114
     ],
     "P246": [
      155,
      104
     ],
     "P247": [
      143,
      104
     ],
     "P248": [
      156,
      114
     ],
     "P249": [
      168,
      114
     ],
     "P250": [
      168,
      104
     ],
     "P251": [
      156,
      104
     ],
     "P252": [
      169,
      114
     ],
     "P253": [
      181,
      114
     ],
     "P254": [
      181,
      104
     ],
     "P255": [
      169,
      104
     ],
     "P256": [
      182,
      114
     ],
     "P257": [
      194,
      114
     ],
     "P258": [
      194,
      104
     ],
     "P259": [
      182,
      104
     ],
     "P260": [
      195,
      114
     ],
     "P261": [
      207,
      114
     ],
     "P262": [
      207,
      104
     ],
     "P263": [
      195,
      104
     ],
     "P264": [
      208,
      114
     ],
     "P265": [
      220,
      114
     ],
     "P266": [
      220,
      104
     ],
     "P267": [
      208,
      104
     ],
     "P268": [
      221,
      114
     ],
     "P269": [
      233,
      114
     ],
     "P270": [
      233,
      104
     ],
     "P271": [
      221,
      104
     ],
     "P272": [
      234,
      114
     ],
     "P273": [
      246,
      114
     ],
     "P274": [
      246,
      104
     ],
     "P275": [
      234,
      104
     ],
     "P276": [
      247,
      114
     ],
     "P277": [
      259,
      114
     ],
     "P278": [
      259,
      104
     ],
     "P279": [
      247,
      104
     ],
     "P280": [
      130,
      103
     ],
     "P281": [
      142,
      103
     ],
     "P282": [
      142,
      93
     ],
     "P283": [
      130,
      93
     ],
     "P284": [
      143,
      103
     ],
     "P285": [
      155,
      103
     ],
     "P286": [
      155,
      93
     ],
     "P287": [
      143,
      93
     ],
     "P288": [
      156,
      103
     ],
     "P289": [
      168,
      103
     ],
     "P290": [
      168,
      93
     ],
     "P291": [
      156,
      93
     ],
     "P292": [
      169,
      103
     ],
     "P293": [
      181,
      103
     ],
     "P294": [
      181,
      93
     ],
     "P295": [
      169,
      93
     ],
     "P296": [
      182,
      103
     ],
     "P297": [
      194,
      103
     ],
     "P298": [
      194,
      93
     ],
     "P299": [
      182,
      93
     ],
     "P300": [
      195,
      103
     ],
     "P301": [
      207,
      103
     ],
     "P302": [
      207,
      93
     ],
     "P303": [
      195,
      93
     ],
     "P304": [
      208,
      103
     ],
     "P305": [
      220,
      103
     ],
     "P306": [
      220,
      93
     ],
     "P307": [
      208,
      93
     ],
     "P308": [
      221,
      103
     ],
     "P309": [
      233,
      103
     ],
     "P310": [
      233,
      93
     ],
     "P311": [
      221,
      93
     ],
     "P312": [
      234,
      103
     ],
     "P313": [
      246,
      103
     ],
     "P314": [
      246,
      93
     ],
     "P315": [
      234,
      93
     ],
     "P316": [
      247,
      103
     ],
     "P317": [
      259,
      103
     ],
     "P318": [
      259,
      93
     ],
     "P319": [
      247,
      93
     ],
     "P320": [
      130,
      92
     ],
     "P321": [
      142,
      92
     ],
     "P322": [
      142,
      82
     ],
     "P323": [
      130,
      82
     ],
     "P324": [
      143,
      92
     ],
     "P325": [
      155,
      92
     ],
     "P326": [
      155,
      82
     ],
     "P327": [
      143,
      82
     ],
     "P328": [
      156,
      92
     ],
     "P329": [
      168,
      92
     ],
     "P330": [
      168,
      82
     ],
     "P331": [
      156,
      82
     ],
     "P332": [
      169,
      92
     ],
     "P333": [
      181,
      92
     ],
     "P334": [
      181,
      82
     ],
     "P335": [
      169,
      82
     ],
     "P336": [
      182,
      92
     ],
     "P337": [
      194,
      92
     ],
     "P338": [
      194,
      82
     ],
     "P339": [
      182,
      82
     ],
     "P340": [
      195,
      92
     ],
     "P341": [
      207,
      92
     ],
     "P342": [
      207,
      82
     ],
     "P343": [
      195,
      82
     ],
     "P344": [
      208,
      92
     ],
     "P345": [
      220,
      92
     ],
     "P346": [
      220,
      82
     ],
     "P347": [
      208,
      82
     ],
     "P348": [
      221,
      92
     ],
     "P349": [
      233,
      92
     ],
     "P350": [
      233,
      82
     ],
     "P351": [
      221,
      82
     ],
     "P352": [
      234,
      92
     ],
     "P353": [
      246,
      92
     ],
     "P354": [
      246,
      82
     ],
     "P355": [
      234,
      82
     ],
     "P356": [
      247,
      92
     ],
     "P357": [
      259,
      92
     ],
     "P358": [
      259,
      82
     ],
     "P359": [
      247,
      82
     ],
     "P360": [
      130,
      81
     ],
     "P361": [
      142,
      81
     ],
     "P362": [
      142,
      71
     ],
     "P363": [
      130,
      71
     ],
     "P364": [
      143,
      81
     ],
     "P365": [
      155,
      81
     ],
     "P366": [
      155,
      71
     ],
     "P367": [
      143,
      71
     ],
     "P368": [
      156,
      81
     ],
     "P369": [
      168,
      81
     ],
     "P370": [
      168,
      71
     ],
     "P371": [
      156,
      71
     ],
     "P372": [
      169,
      81
     ],
     "P373": [
      181,
      81
     ],
     "P374": [
      181,
      71
     ],
     "P375": [
      169,
      71
     ],
     "P376": [
      182,
      81
     ],
     "P377": [
      194,
      81
     ],
     "P378": [
      194,
      71
     ],
     "P379": [
      182,
      71
     ],
     "P380": [
      195,
      81
     ],
     "P381": [
      207,
      81
     ],
     "P382": [
      207,
      71
     ],
     "P383": [
      195,
      71
     ],
     "P384": [
      208,
      81
     ],
     "P385": [
      220,
      81
     ],
     "P386": [
      220,
      71
     ],
     "P387": [
      208,
      71
     ],
     "P388": [
      221,
      81
     ],
     "P389": [
      233,
      81
     ],
     "P390": [
      233,
      71
     ],
     "P391": [
      221,
      71
     ],
     "P392": [
      234,
      81
     ],
     "P393": [
      246,
      81
     ],
     "P394": [
      246,
      71
     ],
     "P395": [
      234,
      71
     ],
     "P396": [
      247,
      81
     ],
     "P397": [
      259,
      81
     ],
     "P398": [
      259,
      71
     ],
     "P399": [
      247,
      71
     ],
     "P400": [
      377,
      180
     ],
     "P401": [
      389,
      180
     ],
     "P402": [
      389,
      170
     ],
     "P403": [
      377,
      170
     ],
     "P404": [
      390,
      180
     ],
     "P405": [
      402,
      180
     ],
     "P406": [
      402,
      170
     ],
     "P407": [
      390,
      170
     ],
     "P408": [
      403,
      180
     ],
     "P409": [
      415,
      180
     ],
     "P410": [
      415,
      170
     ],
     "P411": [
      403,
      170
     ],
     "P412": [
      416,
      180
     ],
     "P413": [
      428,
      180
     ],
     "P414": [
      428,
      170
     ],
     "P415": [
      416,
      170
     ],
     "P416": [
      429,
      180
     ],
     "P417": [
      441,
      180
     ],
     "P418": [
      441,
      170
     ],
     "P419": [
      429,
      170
     ],
     "P420": [
      442,
      180
     ],
     "P421": [
      454,
      180
     ],
     "P422": [
      454,
      170
     ],
     "P423": [
      442,
      170
     ],
     "P424": [
      455,
      180
     ],
     "P425": [
      467,
      180
     ],
     "P426": [
      467,
      170
     ],
     "P427": [
      455,
      170
     ],
     "P428": [
      468,
      180
     ],
     "P429": [
      480,
      180
     ],
     "P430": [
      480,
      170
     ],
     "P431": [
      468,
      170
     ],
     "P432": [
      481,
      180
     ],
     "P433": [
      493,
      180
     ],
     "P434": [
      493,
      170
     ],
     "P435": [
      481,
      170
     ],
     "P436": [
      494,
      180
     ],
     "P437": [
      506,
      180
     ],
     "P438": [
      506,
      170
     ],
     "P439": [
      494,
      170
     ],
     "P440": [
      377,
      169
     ],
     "P441": [
      389,
      169
     ],
     "P442": [
      389,
      159
     ],
     "P443": [
      377,
      159
     ],
     "P444": [
      390,
      169
     ],
     "P445": [
      402,
      169
     ],
     "P446": [
      402,
      159
     ],
     "P447": [
      390,
      159
     ],
     "P448": [
      403,
      169
     ],
     "P449": [
      415,
      169
     ],
     "P450": [
      415,
      159
     ],
     "P451": [
      403,
      159
     ],
     "P452": [
      416,
      169
     ],
     "P453": [
      428,
      169
     ],
     "P454": [
      428,
      159
     ],
     "P455": [
      416,
      159
     ],
     "P456": [
      429,
      169
     ],
     "P457": [
      441,
      169
     ],
     "P458": [
      441,
      159
     ],
     "P459": [
      429,
      159
     ],
     "P460": [
      442,
      169
     ],
     "P461": [
      454,
      169
     ],
     "P462": [
      454,
      159
     ],
     "P463": [
      442,
      159
     ],
     "P464": [
      455,
      169
     ],
     "P465": [
      467,
      169
     ],
     "P466": [
      467,
      159
     ],
     "P467": [
      455,
      159
     ],
     "P468": [
      468,
      169
     ],
     "P469": [
      480,
      169
     ],
     "P470": [
      480,
      159
     ],
     "P471": [
      468,
      159
     ],
     "P472": [
      481,
      169
     ],
     "P473": [
      493,
      169
     ],
     "P474": [
      493,
      159
     ],
     "P475": [
      481,
      159
     ],
     "P476": [
      494,
      169
     ],
     "P477": [
      506,
      169
     ],
     "P478": [
      506,
      159
     ],
     "P479": [
      494,
      159
     ],
     "P480": [
      377,
      158
     ],
     "P481": [
      389,
      158
     ],
     "P482": [
      389,
      148
     ],
     "P483": [
      377,
      148
     ],
     "P484": [
      390,
      158
     ],
     "P485": [
      402,
      158
     ],
     "P486": [
      402,
      148
     ],
     "P487": [
      390,
      148
     ],
     "P488": [
      403,
      158
     ],
     "P489": [
      415,
      158
     ],
     "P490": [
      415,
      148
     ],
     "P491": [
      403,
      148
     ],
     "P492": [
      416,
      158
     ],
     "P493": [
      428,
      158
     ],
     "P494": [
      428,
      148
     ],
     "P495": [
      416,
      148
     ],
     "P496": [
      429,
      158
     ],
     "P497": [
      441,
      158
     ],
     "P498": [
      441,
      148
     ],
     "P499": [
      429,
      148
     ],
     "P500": [
      442,
      158
     ],
     "P501": [
      454,
      158
     ],
     "P502": [
      454,
      148
     ],
     "P503": [
      442,
      148
     ],
     "P504": [
      455,
      158
     ],
     "P505": [
      467,
      158
     ],
     "P506": [
      467,
      148
     ],
     "P507": [
      455,
      148
     ],
     "P508": [
      468,
      158
     ],
     "P509": [
      480,
      158
     ],
     "P510": [
      480,
      148
     ],
     "P511": [
      468,
      148
     ],
     "P512": [
      481,
      158
     ],
     "P513": [
      493,
      158
     ],
     "P514": [
      493,
      148
     ],
     "P515": [
      481,
      148
     ],
     "P516": [
      494,
      158
     ],
     "P517": [
      506,
      158
     ],
     "P518": [
      506,
      148
     ],
     "P519": [
      494,
      148
     ],
     "P520": [
      377,
      147
     ],
     "P521": [
      389,
      147
     ],
     "P522": [
      389,
      137
     ],
     "P523": [
      377,
      137
     ],
     "P524": [
      390,
      147
     ],
     "P525": [
      402,
      147
     ],
     "P526": [
      402,
      137
     ],
     "P527": [
      390,
      137
     ],
     "P528": [
      403,
      147
     ],
     "P529": [
      415,
      147
     ],
     "P530": [
      415,
      137
     ],
     "P531": [
      403,
      137
     ],
     "P532": [
      416,
      147
     ],
     "P533": [
      428,
      147
     ],
     "P534": [
      428,
      137
     ],
     "P535": [
      416,
      137
     ],
     "P536": [
      429,
      147
     ],
     "P537": [
      441,
      147
     ],
     "P538": [
      441,
      137
     ],
     "P539": [
      429,
      137
     ],
     "P540": [
      442,
      147
     ],
     "P541": [
      454,
      147
     ],
     "P542": [
      454,
      137
     ],
     "P543": [
      442,
      137
     ],
     "P544": [
      455,
      147
     ],
     "P545": [
      467,
      147
     ],
     "P546": [
      467,
      137
     ],
     "P547": [
      455,
      137
     ],
     "P548": [
      468,
      147
     ],
     "P549": [
      480,
      147
     ],
     "P550": [
      480,
      137
     ],
     "P551": [
      468,
      137
     ],
     "P552": [
      481,
      147
     ],
     "P553": [
      493,
      147
     ],
     "P554": [
      493,
      137
     ],
     "P555": [
      481,
      137
     ],
     "P556": [
      494,
      147
     ],
     "P557": [
      506,
      147
     ],
     "P558": [
      506,
      137
     ],
     "P559": [
      494,
      137
     ],
     "P560": [
      377,
      136
     ],
     "P561": [
      389,
      136
     ],
     "P562": [
      389,
      126
     ],
     "P563": [
      377,
      126
     ],
     "P564": [
      390,
      136
     ],
     "P565": [
      402,
      136
     ],
     "P566": [
      402,
      126
     ],
     "P567": [
      390,
      126
     ],
     "P568": [
      403,
      136
     ],
     "P569": [
      415,
      136
     ],
     "P570": [
      415,
      126
     ],
     "P571": [
      403,
      126
     ],
     "P572": [
      416,
      136
     ],
     "P573": [
      428,
      136
     ],
     "P574": [
      428,
      126
     ],
     "P575": [
      416,
      126
     ],
     "P576": [
      429,
      136
     ],
     "P577": [
      441,
      136
     ],
     "P578": [
      441,
      126
     ],
     "P579": [
      429,
      126
     ],
     "P580": [
      442,
      136
     ],
     "P581": [
      454,
      136
     ],
     "P582": [
      454,
      126
     ],
     "P583": [
      442,
      126
     ],
     "P584": [
      455,
      136
     ],
     "P585": [
      467,
      136
     ],
     "P586": [
      467,
      126
     ],
     "P587": [
      455,
      126
     ],
     "P588": [
      468,
      136
     ],
     "P589": [
      480,
      136
     ],
     "P590": [
      480,
      126
     ],
     "P591": [
      468,
      126
     ],
     "P592": [
      481,
      136
     ],
     "P593": [
      493,
      136
     ],
     "P594": [
      493,
      126
     ],
     "P595": [
      481,
      126
     ],
     "P596": [
      494,
      136
     ],
     "P597": [
      506,
      136
     ],
     "P598": [
      506,
      126
     ],
     "P599": [
      494,
      126
     ],
     "P600": [
      377,
      125
     ],
     "P601": [
      389,
      125
     ],
     "P602": [
      389,
      115
     ],
     "P603": [
      377,
      115
     ],
     "P604": [
      390,
      125
     ],
     "P605": [
      402,
      125
     ],
     "P606": [
      402,
      115
     ],
     "P607": [
      390,
      115
     ],
     "P608": [
      403,
      125
     ],
     "P609": [
      415,
      125
     ],
     "P610": [
      415,
      115
     ],
     "P611": [
      403,
      115
     ],
     "P612": [
      416,
      125
     ],
     "P613": [
      428,
      125
     ],
     "P614": [
      428,
      115
     ],
     "P615": [
      416,
      115
     ],
     "P616": [
      429,
      125
     ],
     "P617": [
      441,
      125
     ],
     "P618": [
      441,
      115
     ],
     "P619": [
      429,
      115
     ],
     "P620": [
      442,
      125
     ],
     "P621": [
      454,
      125
     ],
     "P622": [
      454,
      115
     ],
     "P623": [
      442,
      115
     ],
     "P624": [
      455,
      125
     ],
     "P625": [
      467,
      125
     ],
     "P626": [
      467,
      115
     ],
     "P627": [
      455,
      115
     ],
     "P628": [
      468,
      125
     ],
     "P629": [
      480,
      125
     ],
     "P630": [
      480,
      115
     ],
     "P631": [
      468,
      115
     ],
     "P632": [
      481,
      125
     ],
     "P633": [
      493,
      125
     ],
     "P634": [
      493,
      115
     ],
     "P635": [
      481,
      115
     ],
     "P636": [
      494,
      125
     ],
     "P637": [
      506,
      125
     ],
     "P638": [
      506,
      115
     ],
     "P639": [
      494,
      115
     ],
     "P640": [
      377,
      114
     ],
     "P641": [
      389,
      114
     ],
     "P642": [
      389,
      104
     ],
     "P643": [
      377,
      104
     ],
     "P644": [
      390,
      114
     ],
     "P645": [
      402,
      114
     ],
     "P646": [
      402,
      104
     ],
     "P647": [
      390,
      104
     ],
     "P648": [
      403,
      114
     ],
     "P649": [
      415,
      114
     ],
     "P650": [
      415,
      104
     ],
     "P651": [
      403,
      104
     ],
     "P652": [
      416,
      114
     ],
     "P653": [
      428,
      114
     ],
     "P654": [
      428,
      104
     ],
     "P655": [
      416,
      104
     ],
     "P656": [
      429,
      114
     ],
     "P657": [
      441,
      114
     ],
     "P658": [
      441,
      104
     ],
     "P659": [
      429,
      104
     ],
     "P660": [
      442,
      114
     ],
     "P661": [
      454,
      114
     ],
     "P662": [
      454,
      104
     ],
     "P663": [
      442,
      104
     ],
     "P664": [
      455,
      114
     ],
     "P665": [
      467,
      114
     ],
     "P666": [
      467,
      104
     ],
     "P667": [
      455,
      104
     ],
     "P668": [
      468,
      114
     ],
     "P669": [
      480,
      114
     ],
     "P670": [
      480,
      104
     ],
     "P671": [
      468,
      104
     ],
     "P672": [
      481,
      114
     ],
     "P673": [
      493,
      114
     ],
     "P674": [
      493,
      104
     ],
     "P675": [
      481,
      104
     ],
     "P676": [
      494,
      114
     ],
     "P677": [
      506,
      114
     ],
     "P678": [
      506,
      104
     ],
     "P679": [
      494,
      104
     ],
     "P680": [
      377,
      103
     ],
     "P681": [
      389,
      103
     ],
     "P682": [
      389,
      93
     ],
     "P683": [
      377,
      93
     ],
     "P684": [
      390,
      103
     ],
     "P685": [
      402,
      103
     ],
     "P686": [
      402,
      93
     ],
     "P687": [
      390,
      93
     ],
     "P688": [
      403,
      103
     ],
     "P689": [
      415,
      103
     ],
     "P690": [
      415,
      93
     ],
     "P691": [
      403,
      93
     ],
     "P692": [
      416,
      103
     ],
     "P693": [
      428,
      103
     ],
     "P694": [
      428,
      93
     ],
     "P695": [
      416,
      93
     ],
     "P696": [
      429,
      103
     ],
     "P697": [
      441,
      103
     ],
     "P698": [
      441,
      93
     ],
     "P699": [
      429,
      93
     ],
     "P700": [
      442,
      103
     ],
     "P701": [
      454,
      103
     ],
     "P702": [
      454,
      93
     ],
     "P703": [
      442,
      93
     ],
     "P704": [
      455,
      103
     ],
     "P705": [
      467,
      103
     ],
     "P706": [
      467,
      93
     ],
     "P707": [
      455,
      93
     ],
     "P708": [
      468,
      103
     ],
     "P709": [
      480,
      103
     ],
     "P710": [
      480,
      93
     ],
     "P711": [
      468,
      93
     ],
     "P712": [
      481,
      103
     ],
     "P713": [
      493,
      103
     ],
     "P714": [
      493,
      93
     ],
     "P715": [
      481,
      93
     ],
     "P716": [
      494,
      103
     ],
     "P717": [
      506,
      103
     ],
     "P718": [
      506,
      93
     ],
     "P719": [
      494,
      93
     ],
     "P720": [
      377,
      92
     ],
     "P721": [
      389,
      92
     ],
     "P722": [
      389,
      82
     ],
     "P723": [
      377,
      82
     ],
     "P724": [
      390,
      92
     ],
     "P725": [
      402,
      92
     ],
     "P726": [
      402,
      82
     ],
     "P727": [
      390,
      82
     ],
     "P728": [
      403,
      92
     ],
     "P729": [
      415,
      92
     ],
     "P730": [
      415,
      82
     ],
     "P731": [
      403,
      82
     ],
     "P732": [
      416,
      92
     ],
     "P733": [
      428,
      92
     ],
     "P734": [
      428,
      82
     ],
     "P735": [
      416,
      82
     ],
     "P736": [
      429,
      92
     ],
     "P737": [
      441,
      92
     ],
     "P738": [
      441,
      82
     ],
     "P739": [
      429,
      82
     ],
     "P740": [
      442,
      92
     ],
     "P741": [
      454,
      92
     ],
     "P742": [
      454,
      82
     ],
     "P743": [
      442,
      82
     ],
     "P744": [
      455,
      92
     ],
     "P745": [
      467,
      92
     ],
     "P746": [
      467,
      82
     ],
     "P747": [
      455,
      82
     ],
     "P748": [
      468,
      92
     ],
     "P749": [
      480,
      92
     ],
     "P750": [
      480,
      82
     ],
     "P751": [
      468,
      82
     ],
     "P752": [
      481,
      92
     ],
     "P753": [
      493,
      92
     ],
     "P754": [
      493,
      82
     ],
     "P755": [
      481,
      82
     ],
     "P756": [
      494,
      92
     ],
     "P757": [
      506,
      92
     ],
     "P758": [
      506,
      82
     ],
     "P759": [
      494,
      82
     ],
     "P760": [
      377,
      81
     ],
     "P761": [
      389,
      81
     ],
     "P762": [
      389,
      71
     ],
     "P763": [
      377,
      71
     ],
     "P764": [
      390,
      81
     ],
     "P765": [
      402,
      81
     ],
     "P766": [
      402,
      71
     ],
     "P767": [
      390,
      71
     ],
     "P768": [
      403,
      81
     ],
     "P769": [
      415,
      81
     ],
     "P770": [
      415,
      71
     ],
     "P771": [
      403,
      71
     ],
     "P772": [
      416,
      81
     ],
     "P773": [
      428,
      81
     ],
     "P774": [
      428,
      71
     ],
     "P775": [
      416,
      71
     ],
     "P776": [
      429,
      81
     ],
     "P777": [
      441,
      81
     ],
     "P778": [
      441,
      71
     ],
     "P779": [
      429,
      71
     ],
     "P780": [
      442,
      81
     ],
     "P781": [
      454,
      81
     ],
     "P782": [
      454,
      71
     ],
     "P783": [
      442,
      71
     ],
     "P784": [
      455,
      81
     ],
     "P785": [
      467,
      81
     ],
     "P786": [
      467,
      71
     ],
     "P787": [
      455,
      71
     ],
     "P788": [
      468,
      81
     ],
     "P789": [
      480,
      81
     ],
     "P790": [
      480,
      71
     ],
     "P791": [
      468,
      71
     ],
     "P792": [
      481,
      81
     ],
     "P793": [
      493,
      81
     ],
     "P794": [
      493,
      71
     ],
     "P795": [
      481,
      71
     ],
     "P796": [
      494,
      81
     ],
     "P797": [
      506,
      81
     ],
     "P798": [
      506,
      71
     ],
     "P799": [
      494,
      71
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323P324P325P326P327P328P329P330P331P332P333P334P335P336P337P338P339P340P341P342P343P344P345P346P347P348P349P350P351P352P353P354P355P356P357P358P359P360P361P362P363P364P365P366P367P368P369P370P371P372P373P374P375P376P377P378P379P380P381P382P383P384P385P386P387P388P389P390P391P392P393P394P395P396P397P398P399P400P401P402P403P404P405P406P407P408P409P410P411P412P413P414P415P416P417P418P419P420P421P422P423P424P425P426P427P428P429P430P431P432P433P434P435P436P437P438P439P440P441P442P443P444P445P446P447P448P449P450P451P452P453P454P455P456P457P458P459P460P461P462P463P464P465P466P467P468P469P470P471P472P473P474P475P476P477P478P479P480P481P482P483P484P485P486P487P488P489P490P491P492P493P494P495P496P497P498P499P500P501P502P503P504P505P506P507P508P509P510P511P512P513P514P515P516P517P518P519P520P521P522P523P524P525P526P527P528P529P530P531P532P533P534P535P536P537P538P539P540P541P542P543P544P545P546P547P548P549P550P551P552P553P554P555P556P557P558P559P560P561P562P563P564P565P566P567P568P569P570P571P572P573P574P575P576P577P578P579P580P581P582P583P584P585P586P587P588P589P590P591P592P593P594P595P596P597P598P599P600P601P602P603P604P605P606P607P608P609P610P611P612P613P614P615P616P617P618P619P620P621P622P623P624P625P626P627P628P629P630P631P632P633P634P635P636P637P638P639P640P641P642P643P644P645P646P647P648P649P650P651P652P653P654P655P656P657P658P659P660P661P662P663P664P665P666P667P668P669P670P671P672P673P674P675P676P677P678P679P680P681P682P683P684P685P686P687P688P689P690P691P692P693P694P695P696P697P698P699P700P701P702P703P704P705P706P707P708P709P710P711P712P713P714P715P716P717P718P719P720P721P722P723P724P725P726P727P728P729P730P731P732P733P734P735P736P737P738P739P740P741P742P743P744P745P746P747P748P749P750P751P752P753P754P755P756P757P758P759P760P761P762P763P764P765P766P767P768P769P770P771P772P773P774P775P776P777P778P779P780P781P782P783P784P785P786P787P788P789P790P791P792P793P794P795P796P797P798P799",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 2
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     },
     {
      "v": "P8P9P10P11",
      "col": 2
     },
     {
      "v": "P12P13P14P15",
      "col": 2
     },
     {
      "v": "P16P17P18P19",
      "col": 2
     },
     {
      "v": "P20P21P22P23",
      "col": 2
     },
     {
      "v": "P24P25P26P27",
      "col": 2
     },
     {
      "v": "P28P29P30P31",
      "col": 2
     },
     {
      "v": "P32P33P34P35",
      "col": 2
     },
     {
      "v": "P36P37P38P39",
      "col": 2
     },
     {
      "v": "P40P41P42P43",
      "col": 2
     },
     {
      "v": "P44P45P46P47",
      "col": 2
     },
     {
      "v": "P48P49P50P51",
      "col": 2
     },
     {
      "v": "P52P53P54P55",
      "col": 2
     },
     {
      "v": "P56P57P58P59",
      "col": 2
     },
     {
      "v": "P60P61P62P63",
      "col": 2
     },
     {
      "v": "P64P65P66P67",
      "col": 2
     },
     {
      "v": "P68P69P70P71",
      "col": 2
     },
     {
      "v": "P72P73P74P75",
      "col": 2
     },
     {
      "v": "P76P77P78P79",
      "col": 2
     },
     {
      "v": "P80P81P82P83",
      "col": 2
     },
     {
      "v": "P84P85P86P87",
      "col": 2
     },
     {
      "v": "P88P89P90P91",
      "col": 2
     },
     {
      "v": "P92P93P94P95",
      "col": 2
     },
     {
      "v": "P96P97P98P99",
      "col": 2
     },
     {
      "v": "P100P101P102P103",
      "col": 2
     },
     {
      "v": "P104P105P106P107",
      "col": 2
     },
     {
      "v": "P108P109P110P111",
      "col": 2
     },
     {
      "v": "P112P113P114P115",
      "col": 2
     },
     {
      "v": "P116P117P118P119",
      "col": 2
     },
     {
      "v": "P120P121P122P123",
      "col": 2
     },
     {
      "v": "P124P125P126P127",
      "col": 2
     },
     {
      "v": "P128P129P130P131",
      "col": 2
     },
     {
      "v": "P132P133P134P135",
      "col": 2
     },
     {
      "v": "P136P137P138P139",
      "col": 2
     },
     {
      "v": "P140P141P142P143",
      "col": 2
     },
     {
      "v": "P144P145P146P147",
      "col": 2
     },
     {
      "v": "P148P149P150P151",
      "col": 2
     },
     {
      "v": "P152P153P154P155",
      "col": 2
     },
     {
      "v": "P156P157P158P159",
      "col": 2
     },
     {
      "v": "P160P161P162P163",
      "col": 2
     },
     {
      "v": "P164P165P166P167",
      "col": 2
     },
     {
      "v": "P168P169P170P171",
      "col": 2
     },
     {
      "v": "P172P173P174P175",
      "col": 2
     },
     {
      "v": "P176P177P178P179",
      "col": 2
     },
     {
      "v": "P180P181P182P183",
      "col": 2
     },
     {
      "v": "P184P185P186P187",
      "col": 2
     },
     {
      "v": "P188P189P190P191",
      "col": 2
     },
     {
      "v": "P192P193P194P195",
      "col": 2
     },
     {
      "v": "P196P197P198P199",
      "col": 2
     },
     {
      "v": "P200P201P202P203",
      "col": 2
     },
     {
      "v": "P204P205P206P207",
      "col": 2
     },
     {
      "v": "P208P209P210P211",
      "col": 2
     },
     {
      "v": "P212P213P214P215",
      "col": 2
     },
     {
      "v": "P216P217P218P219",
      "col": 2
     },
     {
      "v": "P220P221P222P223",
      "col": 2
     },
     {
      "v": "P224P225P226P227",
      "col": 2
     },
     {
      "v": "P228P229P230P231",
      "col": 2
     },
     {
      "v": "P232P233P234P235",
      "col": 2
     },
     {
      "v": "P236P237P238P239",
      "col": 2
     },
     {
      "v": "P240P241P242P243",
      "col": 2
     },
     {
      "v": "P244P245P246P247",
      "col": 2
     },
     {
      "v": "P248P249P250P251",
      "col": 2
     },
     {
      "v": "P252P253P254P255",
      "col": 2
     },
     {
      "v": "P256P257P258P259",
      "col": 2
     },
     {
      "v": "P260P261P262P263",
      "col": 2
     },
     {
      "v": "P264P265P266P267",
      "col": 2
     },
     {
      "v": "P268P269P270P271",
      "col": 2
     },
     {
      "v": "P272P273P274P275",
      "col": 2
     },
     {
      "v": "P276P277P278P279",
      "col": 2
     },
     {
      "v": "P280P281P282P283",
      "col": 2
     },
     {
      "v": "P284P285P286P287",
      "col": 2
     },
     {
      "v": "P288P289P290P291",
      "col": 2
     },
     {
      "v": "P292P293P294P295",
      "col": 2
     },
     {
      "v": "P296P297P298P299",
      "col": 2
     },
     {
      "v": "P300P301P302P303",
      "col": 2
     },
     {
      "v": "P304P305P306P307",
      "col": 2
     },
     {
      "v": "P308P309P310P311",
      "col": 2
     },
     {
      "v": "P312P313P314P315",
      "col": 2
     },
     {
      "v": "P316P317P318P319",
      "col": 2
     },
     {
      "v": "P320P321P322P323",
      "col": 0
     },
     {
      "v": "P324P325P326P327",
      "col": 0
     },
     {
      "v": "P328P329P330P331",
      "col": 0
     },
     {
      "v": "P332P333P334P335",
      "col": 0
     },
     {
      "v": "P336P337P338P339",
      "col": 0
     },
     {
      "v": "P340P341P342P343",
      "col": 0
     },
     {
      "v": "P344P345P346P347",
      "col": 0
     },
     {
      "v": "P348P349P350P351",
      "col": 0
     },
     {
      "v": "P352P353P354P355",
      "col": 0
     },
     {
      "v": "P356P357P358P359",
      "col": 0
     },
     {
      "v": "P360P361P362P363",
      "col": 0
     },
     {
      "v": "P364P365P366P367",
      "col": 0
     },
     {
      "v": "P368P369P370P371",
      "col": 0
     },
     {
      "v": "P372P373P374P375",
      "col": 0
     },
     {
      "v": "P376P377P378P379",
      "col": 0
     },
     {
      "v": "P380P381P382P383",
      "col": 0
     },
     {
      "v": "P384P385P386P387",
      "col": 0
     },
     {
      "v": "P388P389P390P391",
      "col": 0
     },
     {
      "v": "P392P393P394P395",
      "col": 0
     },
     {
      "v": "P396P397P398P399",
      "col": 0
     },
     {
      "v": "P400P401P402P403",
      "col": 2
     },
     {
      "v": "P404P405P406P407",
      "col": 2
     },
     {
      "v": "P408P409P410P411",
      "col": 2
     },
     {
      "v": "P412P413P414P415",
      "col": 2
     },
     {
      "v": "P416P417P418P419",
      "col": 2
     },
     {
      "v": "P420P421P422P423",
      "col": 2
     },
     {
      "v": "P424P425P426P427",
      "col": 2
     },
     {
      "v": "P428P429P430P431",
      "col": 2
     },
     {
      "v": "P432P433P434P435",
      "col": 2
     },
     {
      "v": "P436P437P438P439",
      "col": 2
     },
     {
      "v": "P440P441P442P443",
      "col": 2
     },
     {
      "v": "P444P445P446P447",
      "col": 2
     },
     {
      "v": "P448P449P450P451",
      "col": 2
     },
     {
      "v": "P452P453P454P455",
      "col": 2
     },
     {
      "v": "P456P457P458P459",
      "col": 2
     },
     {
      "v": "P460P461P462P463",
      "col": 2
     },
     {
      "v": "P464P465P466P467",
      "col": 2
     },
     {
      "v": "P468P469P470P471",
      "col": 2
     },
     {
      "v": "P472P473P474P475",
      "col": 2
     },
     {
      "v": "P476P477P478P479",
      "col": 2
     },
     {
      "v": "P480P481P482P483",
      "col": 2
     },
     {
      "v": "P484P485P486P487",
      "col": 2
     },
     {
      "v": "P488P489P490P491",
      "col": 2
     },
     {
      "v": "P492P493P494P495",
      "col": 2
     },
     {
      "v": "P496P497P498P499",
      "col": 2
     },
     {
      "v": "P500P501P502P503",
      "col": 2
     },
     {
      "v": "P504P505P506P507",
      "col": 2
     },
     {
      "v": "P508P509P510P511",
      "col": 2
     },
     {
      "v": "P512P513P514P515",
      "col": 2
     },
     {
      "v": "P516P517P518P519",
      "col": 2
     },
     {
      "v": "P520P521P522P523",
      "col": 2
     },
     {
      "v": "P524P525P526P527",
      "col": 2
     },
     {
      "v": "P528P529P530P531",
      "col": 2
     },
     {
      "v": "P532P533P534P535",
      "col": 2
     },
     {
      "v": "P536P537P538P539",
      "col": 2
     },
     {
      "v": "P540P541P542P543",
      "col": 2
     },
     {
      "v": "P544P545P546P547",
      "col": 2
     },
     {
      "v": "P548P549P550P551",
      "col": 2
     },
     {
      "v": "P552P553P554P555",
      "col": 2
     },
     {
      "v": "P556P557P558P559",
      "col": 2
     },
     {
      "v": "P560P561P562P563",
      "col": 2
     },
     {
      "v": "P564P565P566P567",
      "col": 2
     },
     {
      "v": "P568P569P570P571",
      "col": 2
     },
     {
      "v": "P572P573P574P575",
      "col": 2
     },
     {
      "v": "P576P577P578P579",
      "col": 2
     },
     {
      "v": "P580P581P582P583",
      "col": 2
     },
     {
      "v": "P584P585P586P587",
      "col": 2
     },
     {
      "v": "P588P589P590P591",
      "col": 2
     },
     {
      "v": "P592P593P594P595",
      "col": 2
     },
     {
      "v": "P596P597P598P599",
      "col": 2
     },
     {
      "v": "P600P601P602P603",
      "col": 2
     },
     {
      "v": "P604P605P606P607",
      "col": 2
     },
     {
      "v": "P608P609P610P611",
      "col": 2
     },
     {
      "v": "P612P613P614P615",
      "col": 2
     },
     {
      "v": "P616P617P618P619",
      "col": 2
     },
     {
      "v": "P620P621P622P623",
      "col": 2
     },
     {
      "v": "P624P625P626P627",
      "col": 2
     },
     {
      "v": "P628P629P630P631",
      "col": 2
     },
     {
      "v": "P632P633P634P635",
      "col": 2
     },
     {
      "v": "P636P637P638P639",
      "col": 2
     },
     {
      "v": "P640P641P642P643",
      "col": 0
     },
     {
      "v": "P644P645P646P647",
      "col": 0
     },
     {
      "v": "P648P649P650P651",
      "col": 0
     },
     {
      "v": "P652P653P654P655",
      "col": 0
     },
     {
      "v": "P656P657P658P659",
      "col": 0
     },
     {
      "v": "P660P661P662P663",
      "col": 0
     },
     {
      "v": "P664P665P666P667",
      "col": 0
     },
     {
      "v": "P668P669P670P671",
      "col": 0
     },
     {
      "v": "P672P673P674P675",
      "col": 0
     },
     {
      "v": "P676P677P678P679",
      "col": 0
     },
     {
      "v": "P680P681P682P683",
      "col": 0
     },
     {
      "v": "P684P685P686P687",
      "col": 0
     },
     {
      "v": "P688P689P690P691",
      "col": 0
     },
     {
      "v": "P692P693P694P695",
      "col": 0
     },
     {
      "v": "P696P697P698P699",
      "col": 0
     },
     {
      "v": "P700P701P702P703",
      "col": 0
     },
     {
      "v": "P704P705P706P707",
      "col": 0
     },
     {
      "v": "P708P709P710P711",
      "col": 0
     },
     {
      "v": "P712P713P714P715",
      "col": 0
     },
     {
      "v": "P716P717P718P719",
      "col": 0
     },
     {
      "v": "P720P721P722P723",
      "col": 0
     },
     {
      "v": "P724P725P726P727",
      "col": 0
     },
     {
      "v": "P728P729P730P731",
      "col": 0
     },
     {
      "v": "P732P733P734P735",
      "col": 0
     },
     {
      "v": "P736P737P738P739",
      "col": 0
     },
     {
      "v": "P740P741P742P743",
      "col": 0
     },
     {
      "v": "P744P745P746P747",
      "col": 0
     },
     {
      "v": "P748P749P750P751",
      "col": 0
     },
     {
      "v": "P752P753P754P755",
      "col": 0
     },
     {
      "v": "P756P757P758P759",
      "col": 0
     },
     {
      "v": "P760P761P762P763",
      "col": 0
     },
     {
      "v": "P764P765P766P767",
      "col": 0
     },
     {
      "v": "P768P769P770P771",
      "col": 0
     },
     {
      "v": "P772P773P774P775",
      "col": 0
     },
     {
      "v": "P776P777P778P779",
      "col": 0
     },
     {
      "v": "P780P781P782P783",
      "col": 0
     },
     {
      "v": "P784P785P786P787",
      "col": 0
     },
     {
      "v": "P788P789P790P791",
      "col": 0
     },
     {
      "v": "P792P793P794P795",
      "col": 0
     },
     {
      "v": "P796P797P798P799",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional fixed 100 ha area; each cell = 1 ha",
      "col": 0
     },
     {
      "at": [
       193,
       192
      ],
      "text": "Before: 80 ha forest",
      "col": 0
     },
     {
      "at": [
       440,
       192
      ],
      "text": "After: 60 ha forest",
      "col": 0
     },
     {
      "at": [
       320,
       42
      ],
      "text": "20 ha lost = 25% of original forest",
      "col": 0
     },
     {
      "at": [
       320,
       25
      ],
      "text": "Forest cover: 80% → 60%, a 20-point decrease",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Collection and recovery",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      165,
      162
     ],
     "P1": [
      535,
      162
     ],
     "P2": [
      535,
      133
     ],
     "P3": [
      165,
      133
     ],
     "P4": [
      165,
      97
     ],
     "P5": [
      461,
      97
     ],
     "P6": [
      461,
      68
     ],
     "P7": [
      165,
      68
     ],
     "P8": [
      461,
      97
     ],
     "P9": [
      535,
      97
     ],
     "P10": [
      535,
      68
     ],
     "P11": [
      461,
      68
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 1
     },
     {
      "v": "P8P9P10P11",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional metal recovery; widths scale with mass",
      "col": 0
     },
     {
      "at": [
       103,
       144
      ],
      "text": "Collected",
      "col": 0
     },
     {
      "at": [
       350,
       142
      ],
      "text": "100 kg",
      "col": 1
     },
     {
      "at": [
       103,
       79
      ],
      "text": "Output",
      "col": 0
     },
     {
      "at": [
       313,
       77
      ],
      "text": "80 kg",
      "col": 1
     },
     {
      "at": [
       498,
       77
      ],
      "text": "20 kg",
      "col": 3
     },
     {
      "at": [
       297,
       42
      ],
      "text": "80 kg usable",
      "col": 1
     },
     {
      "at": [
       500,
       42
      ],
      "text": "20 kg residue",
      "col": 3
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "14": {
    "t": "figure",
    "title": "Forest change: given areas",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      153,
      176
     ],
     "P1": [
      264,
      176
     ],
     "P2": [
      264,
      56
     ],
     "P3": [
      153,
      56
     ],
     "P4": [
      153,
      128
     ],
     "P5": [
      264,
      128
     ],
     "P6": [
      264,
      56
     ],
     "P7": [
      153,
      56
     ],
     "P8": [
      376,
      176
     ],
     "P9": [
      487,
      176
     ],
     "P10": [
      487,
      56
     ],
     "P11": [
      376,
      56
     ],
     "P12": [
      376,
      110
     ],
     "P13": [
      487,
      110
     ],
     "P14": [
      487,
      56
     ],
     "P15": [
      376,
      56
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
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
      "col": 0
     },
     {
      "v": "P12P13P14P15",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Original fixed study area: 200 ha",
      "col": 0
     },
     {
      "at": [
       208,
       186
      ],
      "text": "Before",
      "col": 0
     },
     {
      "at": [
       208,
       41
      ],
      "text": "120 ha forest",
      "col": 1
     },
     {
      "at": [
       431,
       186
      ],
      "text": "After",
      "col": 0
     },
     {
      "at": [
       431,
       41
      ],
      "text": "90 ha forest",
      "col": 1
     },
     {
      "at": [
       320,
       25
      ],
      "text": "Each rectangle represents the same 200 ha area",
      "col": 0
     }
    ],
    "circles": []
   },
   "15": {
    "t": "figure",
    "title": "Forest change: given areas",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      153,
      176
     ],
     "P1": [
      264,
      176
     ],
     "P2": [
      264,
      56
     ],
     "P3": [
      153,
      56
     ],
     "P4": [
      153,
      128
     ],
     "P5": [
      264,
      128
     ],
     "P6": [
      264,
      56
     ],
     "P7": [
      153,
      56
     ],
     "P8": [
      376,
      176
     ],
     "P9": [
      487,
      176
     ],
     "P10": [
      487,
      56
     ],
     "P11": [
      376,
      56
     ],
     "P12": [
      376,
      110
     ],
     "P13": [
      487,
      110
     ],
     "P14": [
      487,
      56
     ],
     "P15": [
      376,
      56
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
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
      "col": 0
     },
     {
      "v": "P12P13P14P15",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Original fixed study area: 200 ha",
      "col": 0
     },
     {
      "at": [
       208,
       186
      ],
      "text": "Before",
      "col": 0
     },
     {
      "at": [
       208,
       41
      ],
      "text": "120 ha forest",
      "col": 1
     },
     {
      "at": [
       431,
       186
      ],
      "text": "After",
      "col": 0
     },
     {
      "at": [
       431,
       41
      ],
      "text": "90 ha forest",
      "col": 1
     },
     {
      "at": [
       320,
       25
      ],
      "text": "Each rectangle represents the same 200 ha area",
      "col": 0
     }
    ],
    "circles": []
   }
  }
 },
 {
  "code": "NGS 15",
  "name": "Climate change, hazards and response",
  "skill": "s4",
  "teach": [
   "Weather describes shorter-term atmospheric conditions; climate describes their longer-term patterns and variability. The natural greenhouse effect involves gases absorbing and emitting infrared radiation. Human activities, especially greenhouse-gas emissions, have caused the observed global warming assessed by the IPCC; a cold day in one town does not contradict that long-term global result. Ozone-layer depletion and global warming are different problems with some connections, not interchangeable explanations. An anomaly compares a value with a specified baseline, and changing the baseline changes the anomaly without changing the measured temperature.",
   "Climate impacts involve interacting hazards, exposure and vulnerability. Higher global mean sea level results mainly from warming seawater expanding and land ice losing mass; local relative sea level also depends on land movement and ocean conditions. A hazard map alone does not show who can evacuate or recover. Two towns experiencing similar flood depth can face different harm because building conditions, population exposure and response capacity differ. Vulnerability is shaped by social and physical conditions, not an inevitable property of a cultural identity.",
   "A flood with 1% annual exceedance probability has a one-in-one-hundred chance of reaching or exceeding that magnitude in a given year under the stated model. It is not scheduled once each century. Assuming a constant 1% annual probability and independent years, the chance of at least one exceedance in 30 years is 1 minus 0.99 to the thirtieth power, about 26.0%. Real probabilities can change with climate, land use and river management; the calculation states assumptions rather than guaranteeing the next thirty years.",
   "Climate mitigation reduces greenhouse-gas emissions or enhances removals; adaptation adjusts to actual or expected impacts. Replacing fossil-based electricity with a lower-emissions alternative can mitigate, while raising a flood-prone building is adaptation. A project may serve both goals and can have tradeoffs. In an original energy account, output rises from 100 to 150 units while emissions intensity falls from 5 to 4 kg per unit. Total emissions still rise from 500 to 600 kg. Evaluate totals, rates, affected people and unintended effects rather than assuming that every efficiency improvement reduces total emissions."
  ],
  "boards": [
   [
    "Weather varies over days; climate tracks longer patterns",
    "Greenhouse gases absorb and emit infrared radiation",
    "Human emissions have caused recent global warming",
    "Anomaly = measured value − specified baseline"
   ],
   [
    "Risk involves hazard, exposure and vulnerability",
    "Warming seawater and land-ice loss raise mean sea level",
    "Local land movement also affects relative sea level",
    "Similar hazards can have unequal consequences"
   ],
   [
    "1% annual exceedance is a probability, not a timetable",
    "Independent constant-risk model: 1 − 0.99^30",
    "At least one exceedance in 30 years: about 26.0%",
    "Actual annual probabilities can change over time"
   ],
   [
    "Mitigation changes emissions; adaptation changes risk",
    "Fictional account: 100 × 5 = 500 kg emissions",
    "Then 150 × 4 = 600 kg despite lower intensity",
    "Check total impacts and distributional effects"
   ]
  ],
  "eqs": [
   "Temperature anomaly = observed temperature − reference mean",
   "Risk assessment considers hazard, exposure and vulnerability",
   "P(at least one in n independent years) = 1 − (1 − p)^n",
   "Total emissions = output × emissions per unit"
  ],
  "questions": [
   [
    "Which observation alone cannot overturn evidence of long-term global warming?",
    "One unusually cold day in one town",
    "A rigorously evaluated global long-term dataset",
    "Independent evidence analyzed over appropriate time and space",
    "A local daily weather event is not a measure of the long-term global climate trend, so scale and time matter."
   ],
   [
    "Which process is central to the greenhouse effect?",
    "Gases absorb and emit infrared radiation",
    "Atmospheric gases block gravity",
    "All sunlight is permanently stopped above the atmosphere",
    "Greenhouse gases interact with outgoing and atmospheric infrared radiation, affecting Earth's energy balance."
   ],
   [
    "Which statement reflects the IPCC assessment of recent global warming?",
    "Human activities, especially greenhouse-gas emissions, have caused it",
    "It is explained solely by changes in weekday names",
    "Human emissions have no effect on Earth's energy balance",
    "The assessment attributes observed global warming to human activities, with greenhouse-gas emissions central to the cause."
   ],
   [
    "Why should ozone depletion and global warming not be treated as the same process?",
    "They concern different atmospheric mechanisms despite some connections",
    "They are identical terms for rainfall",
    "Neither involves atmospheric chemistry or radiation",
    "Stratospheric ozone depletion and greenhouse-driven warming have distinct principal mechanisms and require accurate distinctions."
   ],
   [
    "A fictional station's annual mean is 17°C and its stated baseline mean is 15°C. What is the anomaly?",
    "+2°C",
    "+32°C",
    "−2°C",
    "An anomaly is measured value minus the chosen baseline: seventeen minus fifteen equals positive two degrees Celsius."
   ],
   [
    "The same measured mean is 17°C. If its reference baseline changes from 15°C to 16°C, what happens to its anomaly?",
    "It falls from +2°C to +1°C",
    "The measured temperature necessarily falls by 1°C",
    "The anomaly rises to +33°C",
    "Only the reference changes; subtracting a larger baseline gives a smaller anomaly while the measured mean remains seventeen."
   ],
   [
    "Which pair of processes contributes to rising global mean sea level?",
    "Thermal expansion of seawater and loss of land ice",
    "Only ice melting inside already floating cups",
    "A universal fall in ocean temperature and volume",
    "Warmer seawater expands and land-ice loss adds ocean water; regional relative changes also involve additional processes."
   ],
   [
    "Why can relative sea level rise faster in one coastal town than the global mean?",
    "The local land may be subsiding",
    "Every coast must rise at exactly the same rate",
    "Global averages include no measurements",
    "Relative sea level is measured against land, so land motion and regional ocean conditions can alter local change."
   ],
   [
    "Which dataset most directly adds exposure information to a flood-hazard map?",
    "Locations of people and assets within inundation zones",
    "Only the color of ocean water",
    "Only national spelling conventions",
    "Exposure concerns who and what are in places where hazards occur, complementing the mapped physical hazard."
   ],
   [
    "Two towns face similar flood depth but different losses. Which factor can help explain this?",
    "Different buildings, exposed assets and ability to respond",
    "Similar depth guarantees identical losses",
    "Town names determine structural strength",
    "Damage depends on exposure and vulnerability as well as hazard, so a similar water depth need not produce the same outcome."
   ],
   [
    "What does a 1% annual exceedance probability mean under the stated flood model?",
    "A 1% chance of reaching or exceeding that flood magnitude in a given year",
    "A flood guaranteed only on every hundredth birthday",
    "A 100% chance in every year",
    "The term describes an annual probability, not a fixed waiting period or an assurance that a recent flood prevents another."
   ],
   [
    "After a 1% annual-chance flood, can another occur the following year?",
    "Yes; the label does not impose a hundred-year waiting period",
    "No; the river must wait exactly 99 years",
    "Only if the calendar has no leap years",
    "Recurrence terminology is probabilistic; a flood in one year does not create a scheduled prohibition on the next year's flood."
   ],
   [
    "Assume independent years and a constant 2% annual exceedance probability. What is the chance of at least one exceedance over 10 years, rounded to one decimal percent?",
    "18.3%",
    "2.0%",
    "98.0%",
    "The complement of no exceedances is one minus 0.98 to the tenth power, approximately 0.1829, or 18.3 percent."
   ],
   [
    "Why should a flood-probability calculation state whether annual risk is assumed constant?",
    "Land use, climate and river management can change flood probabilities",
    "All flood probabilities are immutable physical constants",
    "Only the font can change an annual probability",
    "Stationarity is an assumption; changing physical and human conditions can change the relevant probability over time."
   ],
   [
    "Which action is primarily climate adaptation?",
    "Elevating a flood-prone building to reduce expected damage",
    "Removing greenhouse gases from the atmosphere",
    "Reducing fossil-fuel use in electricity generation",
    "Elevation addresses vulnerability to impacts; emissions cuts or removals primarily address the causes of climate change."
   ],
   [
    "Which action is primarily climate mitigation?",
    "Reducing greenhouse-gas emissions from electricity production",
    "Only drawing an evacuation route",
    "Only elevating furniture above a flood level",
    "Mitigation addresses emissions or removals, while the other actions focus directly on coping with impacts."
   ],
   [
    "Output rises from 200 to 250 units while emissions intensity falls from 6 to 5 kg per unit. What happens to total emissions?",
    "They rise from 1200 to 1250 kg",
    "They fall from 1200 to 1000 kg",
    "They must remain exactly 1200 kg",
    "Multiply each period's output by its own intensity: 200 times six is 1200, and 250 times five is 1250."
   ],
   [
    "Why can an adaptation project still need an environmental and social review?",
    "It may shift risk elsewhere or distribute benefits and costs unevenly",
    "Adaptation eliminates every possible tradeoff",
    "A project name proves universal effectiveness",
    "For example, protective works may affect neighboring areas; evaluating impacts and participation is part of sound planning."
   ]
  ],
  "pics": [
   null,
   null,
   {
    "t": "figure",
    "title": "Flood probability over time",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      125,
      56
     ],
     "P1": [
      535,
      56
     ],
     "P2": [
      125,
      56
     ],
     "P3": [
      125,
      175
     ],
     "P4": [
      125,
      56
     ],
     "P5": [
      125,
      51
     ],
     "P6": [
      255,
      56
     ],
     "P7": [
      255,
      51
     ],
     "P8": [
      385,
      56
     ],
     "P9": [
      385,
      51
     ],
     "P10": [
      515,
      56
     ],
     "P11": [
      515,
      51
     ],
     "P12": [
      121,
      94
     ],
     "P13": [
      526,
      94
     ],
     "P14": [
      121,
      132
     ],
     "P15": [
      526,
      132
     ],
     "P16": [
      121,
      170
     ],
     "P17": [
      526,
      170
     ],
     "P18": [
      125,
      56
     ],
     "P19": [
      138,
      59.80000000000001
     ],
     "P20": [
      138,
      59.80000000000001
     ],
     "P21": [
      151,
      63.56200000000001
     ],
     "P22": [
      151,
      63.56200000000001
     ],
     "P23": [
      164,
      67.28637999999998
     ],
     "P24": [
      164,
      67.28637999999998
     ],
     "P25": [
      177,
      70.9735162
     ],
     "P26": [
      177,
      70.9735162
     ],
     "P27": [
      190,
      74.62378103800003
     ],
     "P28": [
      190,
      74.62378103800003
     ],
     "P29": [
      203,
      78.23754322762
     ],
     "P30": [
      203,
      78.23754322762
     ],
     "P31": [
      216,
      81.81516779534383
     ],
     "P32": [
      216,
      81.81516779534383
     ],
     "P33": [
      229,
      85.35701611739037
     ],
     "P34": [
      229,
      85.35701611739037
     ],
     "P35": [
      242,
      88.86344595621648
     ],
     "P36": [
      242,
      88.86344595621648
     ],
     "P37": [
      255,
      92.33481149665431
     ],
     "P38": [
      255,
      92.33481149665431
     ],
     "P39": [
      268,
      95.77146338168777
     ],
     "P40": [
      268,
      95.77146338168777
     ],
     "P41": [
      281,
      99.17374874787089
     ],
     "P42": [
      281,
      99.17374874787089
     ],
     "P43": [
      294,
      102.54201126039223
     ],
     "P44": [
      294,
      102.54201126039223
     ],
     "P45": [
      307,
      105.87659114778828
     ],
     "P46": [
      307,
      105.87659114778828
     ],
     "P47": [
      320,
      109.17782523631041
     ],
     "P48": [
      320,
      109.17782523631041
     ],
     "P49": [
      333,
      112.4460469839473
     ],
     "P50": [
      333,
      112.4460469839473
     ],
     "P51": [
      346,
      115.68158651410783
     ],
     "P52": [
      346,
      115.68158651410783
     ],
     "P53": [
      359,
      118.88477064896676
     ],
     "P54": [
      359,
      118.88477064896676
     ],
     "P55": [
      372,
      122.05592294247708
     ],
     "P56": [
      372,
      122.05592294247708
     ],
     "P57": [
      385,
      125.1953637130523
     ],
     "P58": [
      385,
      125.1953637130523
     ],
     "P59": [
      398,
      128.30341007592182
     ],
     "P60": [
      398,
      128.30341007592182
     ],
     "P61": [
      411,
      131.38037597516256
     ],
     "P62": [
      411,
      131.38037597516256
     ],
     "P63": [
      424,
      134.42657221541094
     ],
     "P64": [
      424,
      134.42657221541094
     ],
     "P65": [
      437,
      137.44230649325686
     ],
     "P66": [
      437,
      137.44230649325686
     ],
     "P67": [
      450,
      140.42788342832426
     ],
     "P68": [
      450,
      140.42788342832426
     ],
     "P69": [
      463,
      143.38360459404106
     ],
     "P70": [
      463,
      143.38360459404106
     ],
     "P71": [
      476,
      146.30976854810064
     ],
     "P72": [
      476,
      146.30976854810064
     ],
     "P73": [
      489,
      149.2066708626196
     ],
     "P74": [
      489,
      149.2066708626196
     ],
     "P75": [
      502,
      152.07460415399345
     ],
     "P76": [
      502,
      152.07460415399345
     ],
     "P77": [
      515,
      154.9138581124535
     ],
     "P78": [
      515,
      154.9138581124535
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 0,
      "arrows": 1,
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
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P12P13",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P14P15",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P16P17",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P18P19",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P20P21",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P22P23",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P24P25",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P26P27",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P28P29",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P30P31",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P32P33",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P34P35",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P36P37",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P38P39",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P40P41",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P42P43",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P44P45",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P46P47",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P48P49",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P50P51",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P52P53",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P54P55",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P56P57",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P58P59",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P60P61",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P62P63",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P64P65",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P66P67",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P68P69",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P70P71",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P72P73",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P74P75",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P76P77",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "At least one exceedance: constant p = 0.01",
      "col": 0
     },
     {
      "at": [
       320,
       193
      ],
      "text": "Independent years; model, not a prediction",
      "col": 0
     },
     {
      "at": [
       125,
       32
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       255,
       32
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       385,
       32
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       515,
       32
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       94,
       89
      ],
      "text": "10%",
      "col": 0
     },
     {
      "at": [
       94,
       127
      ],
      "text": "20%",
      "col": 0
     },
     {
      "at": [
       94,
       165
      ],
      "text": "30%",
      "col": 0
     },
     {
      "at": [
       483,
       161
      ],
      "text": "≈26.0%",
      "col": 2
     },
     {
      "at": [
       556,
       34
      ],
      "text": "years",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P78",
      "r": 4,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "Intensity and total emissions",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      178,
      138.33333333333331
     ],
     "P1": [
      248,
      138.33333333333331
     ],
     "P2": [
      248,
      55
     ],
     "P3": [
      178,
      55
     ],
     "P4": [
      395,
      155
     ],
     "P5": [
      465,
      155
     ],
     "P6": [
      465,
      55
     ],
     "P7": [
      395,
      55
     ],
     "P8": [
      126,
      55
     ],
     "P9": [
      523,
      55
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 0,
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
       215
      ],
      "text": "Fictional emissions account: output × intensity",
      "col": 0
     },
     {
      "at": [
       213,
       151.33333333333331
      ],
      "text": "100 × 5 = 500 kg",
      "col": 1
     },
     {
      "at": [
       213,
       35
      ],
      "text": "Before",
      "col": 1
     },
     {
      "at": [
       430,
       168
      ],
      "text": "150 × 4 = 600 kg",
      "col": 2
     },
     {
      "at": [
       430,
       35
      ],
      "text": "After",
      "col": 2
     },
     {
      "at": [
       320,
       191
      ],
      "text": "Intensity falls, but total emissions rise",
      "col": 0
     }
    ],
    "circles": []
   }
  ]
 },
 {
  "code": "NGS 16",
  "name": "Resource stocks, energy systems and tradeoffs",
  "skill": "s5",
  "teach": [
   "A resource becomes useful through the relationship between physical properties, knowledge, technology, needs and institutions. Renewable biological stocks such as forests can replenish but can be depleted when loss exceeds renewal. Solar and wind are renewable energy flows whose usable output varies across places and time. Coal, petroleum, natural gas and uranium are treated as nonrenewable sources on human timescales. Uranium is not a fossil fuel; it provides energy through nuclear reactions. Minerals can often be recycled, but recycling does not make the geological stock renewable.",
   "Distinguish a physical resource from an economically recoverable reserve under stated conditions. Prices, technology, knowledge and constraints can change what counts as a reserve without creating new geological material. A simple reserves-to-annual-production ratio is a conditional indicator, not a guaranteed depletion date. An original mine has 900 tonnes of reserves and produces 30 tonnes per year, giving thirty years only if reserves and production remain unchanged. Resource abundance can support trade and jobs, but outcomes depend on institutions, distribution, market exposure and environmental management.",
   "Power is a rate of energy transfer; electrical energy over time is measured in units such as kilowatt-hours or megawatt-hours. A 10 MW generator operating at full output for 24 hours would deliver 240 MWh. If it actually delivers 72 MWh in that period, its capacity factor relative to that stated capacity is 30%. Capacity factor is not the same as conversion efficiency. An original daily electricity mix generates 40 MWh from solar, 30 from wind and 130 from gas: renewables supply 70 of 200 MWh, or 35%, for that day, not necessarily for the year.",
   "Energy choices depend on place and system design. Solar output depends on sunlight and wind generation on wind conditions; grids can combine sources, storage, transmission and flexible demand. Dams can provide electricity and storage while altering sediment transport, ecosystems and communities. Nuclear electricity has low direct operational carbon dioxide emissions but still involves mining, construction, waste and safety management. Burning biomass releases carbon dioxide; its net climate effects depend on regrowth, supply chains, land use and the alternative scenario. Compare reliable service, full life-cycle effects, costs, access and local participation rather than labeling any source impact-free."
  ],
  "boards": [
   [
    "Resource usefulness depends on nature and society",
    "Renewable stocks can still be depleted",
    "Solar and wind provide variable renewable flows",
    "Uranium is nonrenewable but is not a fossil fuel"
   ],
   [
    "Reserves depend on economic and technical conditions",
    "900 tonnes / 30 tonnes per year = 30 years",
    "A conditional ratio is not a certain depletion date",
    "Trade gains depend on institutions and distribution"
   ],
   [
    "10 MW × 24 h = 240 MWh maximum for this example",
    "72 / 240 × 100 = 30% capacity factor",
    "Renewables: (40 + 30) / 200 × 100 = 35%",
    "Capacity, generation and efficiency are distinct"
   ],
   [
    "Solar and wind vary across places and time",
    "Hydropower can alter sediment, habitat and livelihoods",
    "Nuclear has low direct operational CO₂, with other impacts",
    "Compare full service, life cycle and affected communities"
   ]
  ],
  "eqs": [
   "Stock change = renewal − harvest − other losses, for the stated boundary",
   "Reserves-to-production ratio = 900 / 30 = 30 years, conditionally",
   "Capacity factor = actual energy / (capacity × elapsed time)",
   "Energy evaluation = reliable service with stated costs, impacts and limits"
  ],
  "questions": [
   [
    "Why can a previously little-used mineral become an important resource?",
    "New uses, technology and demand can change its usefulness",
    "Its atomic identity must change every morning",
    "Only the mineral's color determines all economic value",
    "A material's usefulness depends on human needs, knowledge and feasible uses as well as its physical properties."
   ],
   [
    "Which is a renewable energy flow?",
    "Sunlight",
    "A coal deposit",
    "An extracted uranium stockpile",
    "Sunlight is replenished as an energy flow, while coal and uranium supplies are extracted from finite geological stocks."
   ],
   [
    "Why can a renewable forest stock still decline?",
    "Harvest and other losses can exceed regrowth",
    "Renewable means no losses are possible",
    "Trees never require space or time to grow",
    "Renewability describes a capacity to replenish, not an assurance that a stock grows under every rate of use."
   ],
   [
    "A simplified forest stock is 1000 units, regrowth is 80, harvest is 100 and other losses are 20 in a year. What is ending stock?",
    "960 units",
    "1020 units",
    "1200 units",
    "Adding regrowth and subtracting both losses gives 1000 plus 80 minus 100 minus 20, or 960 units."
   ],
   [
    "Why is coal classified as nonrenewable on human timescales?",
    "Its geological formation is far slower than contemporary extraction",
    "Burning coal instantly creates an equal new seam",
    "Coal is replenished by daily sunlight at the mine",
    "Coal forms through long geological processes, so using the stock does not produce comparable replacement on human timescales."
   ],
   [
    "Which statement about uranium is correct?",
    "It is nonrenewable and is not a fossil fuel",
    "It is a form of wind energy",
    "It is produced by burning petroleum",
    "Uranium is a mined nuclear fuel, distinct from fossil fuels formed from ancient organic material."
   ],
   [
    "Does recycling a metal make its geological deposits renewable?",
    "No; it recirculates material and can reduce demand for new extraction",
    "Yes; every mine automatically refills overnight",
    "Yes; recovery always creates more mass than collected",
    "Recycling extends use of extracted material, while geological deposits remain finite and collection and processing can have losses."
   ],
   [
    "What distinguishes economically recoverable reserves from a broader physical resource estimate?",
    "Reserves meet stated economic and technical recovery conditions",
    "Reserves contain every atom on Earth without qualification",
    "A reserve is a unit of electrical power",
    "Recoverability depends on conditions such as prices and technology, whereas a broad resource estimate is not the same category."
   ],
   [
    "How can reported reserves increase without new geological material forming?",
    "Improved knowledge, prices or technology can make more recoverable",
    "Extraction creates unlimited new ore through accounting",
    "Every price change changes the planet's mass",
    "The classification can change as known deposits become feasible to extract; this does not create new mineral matter."
   ],
   [
    "An original deposit has 1200 tonnes of reserves and produces 40 tonnes yearly. What is its reserves-to-production ratio?",
    "30 years",
    "48000 years",
    "0.033 years",
    "Dividing tonnes by tonnes per year gives years: 1200 divided by forty equals thirty, under the stated snapshot."
   ],
   [
    "Why is a 30-year reserves-to-production ratio not a guaranteed exhaustion date?",
    "Production rates, reserves, demand and recovery conditions may change",
    "The ratio contains no quantities at all",
    "A year has no defined duration",
    "The ratio is conditional on a snapshot; changing rates and what counts as recoverable alters the implied duration."
   ],
   [
    "Why does resource abundance not guarantee broadly shared prosperity?",
    "Institutions, distribution, market exposure and environmental costs affect outcomes",
    "Every resident automatically receives identical revenues",
    "Resource prices can never change",
    "Physical abundance alone does not determine who gains, how income is managed or what costs and risks arise."
   ],
   [
    "Which unit measures electrical energy rather than power?",
    "Megawatt-hour",
    "Megawatt",
    "Kilowatt",
    "A megawatt-hour measures energy delivered over time, while watts and their multiples measure the rate of energy transfer."
   ],
   [
    "A 20 MW generator runs continuously at full output for 12 hours. How much energy does it produce?",
    "240 MWh",
    "1.67 MWh",
    "32 MWh",
    "Multiplying twenty megawatts by twelve hours gives 240 megawatt-hours when output stays at the stated rate."
   ],
   [
    "A generator's stated capacity is 20 MW. It produces 120 MWh over 24 hours. What is its capacity factor for that period?",
    "25%",
    "50%",
    "600%",
    "Full-capacity production would be twenty times twenty-four, or 480 MWh; actual generation is one quarter of that."
   ],
   [
    "Why is capacity factor different from conversion efficiency?",
    "Capacity factor compares output over time with possible output at stated capacity",
    "Capacity factor measures only fuel-to-electricity conversion losses",
    "The two terms are always numerically identical",
    "Conversion efficiency compares useful energy output with energy input, while capacity factor uses capacity and elapsed time."
   ],
   [
    "A fictional daily mix supplies solar 50 MWh, wind 30 MWh and gas 120 MWh. What share comes from the two renewable sources?",
    "40%",
    "60%",
    "80%",
    "Solar and wind provide eighty of two hundred megawatt-hours, giving a forty-percent share for that specified day."
   ],
   [
    "Why can one sunny day's renewable share not establish the yearly share?",
    "Generation and demand vary over the year",
    "All days have identical sunlight and demand",
    "A day contains the same hours as a year",
    "A daily observation covers one period; annual shares require generation across the relevant full year."
   ],
   [
    "Which combination can help integrate variable wind and solar output?",
    "Transmission, storage, other sources and flexible demand",
    "Only renaming megawatts as kilometers",
    "Assuming the wind never changes",
    "System flexibility can balance variable production and demand, with feasibility depending on the network and resources."
   ],
   [
    "Which tradeoff can accompany a hydropower dam?",
    "Electricity benefits alongside changes to sediment, ecosystems and communities",
    "Guaranteed improvement for every fish population",
    "No possible effects beyond the generator building",
    "Dams change river systems and land use as well as generating electricity, so benefits and costs require spatial assessment."
   ],
   [
    "Which statement accurately characterizes nuclear electricity?",
    "Low direct operational CO₂ emissions do not eliminate fuel-cycle, waste and other impacts",
    "It burns coal inside every reactor",
    "It has no material inputs or waste",
    "Nuclear generation does not burn fossil fuel in the reactor, but mining, construction, waste and other concerns remain relevant."
   ],
   [
    "Why is burning biomass not automatically carbon neutral over every period?",
    "Regrowth, land use, supply chains and the alternative scenario affect net emissions",
    "Combustion never releases carbon dioxide",
    "All trees regrow instantly to their former size",
    "Biomass combustion releases carbon; the net effect depends on how and when stocks recover and what would otherwise occur."
   ],
   [
    "Which comparison best supports choosing between energy systems?",
    "Equivalent reliable service, costs, life-cycle impacts and community effects",
    "Only the largest advertised capacity",
    "Only the source with the shortest name",
    "The same service and a consistent boundary allow meaningful comparison of reliability, costs and environmental and social effects."
   ],
   [
    "Why can mineral-resource supply chains connect distant places?",
    "Extraction, processing, manufacture and use can occur in different regions",
    "All production must occur within one building",
    "Trade removes every environmental impact",
    "Linked stages can distribute jobs, revenue and impacts across regions, so the extraction site alone is not the whole system."
   ]
  ],
  "pics": [
   null,
   null,
   {
    "t": "figure",
    "title": "Generation shares",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      100,
      154
     ],
     "P1": [
      188,
      154
     ],
     "P2": [
      188,
      112
     ],
     "P3": [
      100,
      112
     ],
     "P4": [
      188,
      154
     ],
     "P5": [
      254,
      154
     ],
     "P6": [
      254,
      112
     ],
     "P7": [
      188,
      112
     ],
     "P8": [
      254,
      154
     ],
     "P9": [
      540,
      154
     ],
     "P10": [
      540,
      112
     ],
     "P11": [
      254,
      112
     ],
     "P12": [
      100,
      99
     ],
     "P13": [
      254,
      99
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13",
    "dots": "",
    "segs": [
     {
      "v": "P12P13",
      "col": 2,
      "arrows": 0,
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
     },
     {
      "v": "P8P9P10P11",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional daily mix: 200 MWh in total",
      "col": 0
     },
     {
      "at": [
       144,
       167
      ],
      "text": "Solar 40",
      "col": 1
     },
     {
      "at": [
       221,
       167
      ],
      "text": "Wind 30",
      "col": 2
     },
     {
      "at": [
       397,
       167
      ],
      "text": "Gas 130",
      "col": 3
     },
     {
      "at": [
       179,
       75
      ],
      "text": "Renewable: 70 MWh",
      "col": 2
     },
     {
      "at": [
       320,
       40
      ],
      "text": "70 / 200 × 100 = 35% for this day",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "NGS 18",
  "name": "Evidence, policy and sustainable planning",
  "skill": "s6",
  "teach": [
   "Use geography to compare realistic alternatives and who is affected. A planning process should state its objective, time horizon, geographic boundary, evidence and criteria. Include affected communities and knowledge relevant to local conditions. A low-cost site far from customers may increase transport needs, while a convenient site may expose nearby residents to pollution. National averages can hide unequal access or risk. Sustainability requires examining environmental conditions alongside human well-being, distribution and future needs; a single label does not establish those outcomes.",
   "An original city compares three water plans with all costs measured over the same period. Repair costs 30 units and saves 15 units of water; reuse costs 50 and saves 20; expansion costs 40 and supplies 10 additional units. Cost per unit is 2 for repair, 2.5 for reuse and 4 for expansion. These values inform one criterion, but reliability, water quality, ecological effects and access also matter. A weighted score is a transparent decision aid only when scales and weights are stated; it does not convert value judgments into universal facts.",
   "Evaluate policies with outcomes and suitable comparisons. In an original study, annual household water use falls from 100 to 80 units in a program area and from 100 to 90 in a comparison area. The program area’s before-after change is minus 20, but the difference between changes is minus 10. Interpreting that estimate causally requires assumptions about what would have happened without the program, comparable trends and other changes. A before-after decrease by itself does not identify the program’s effect. Record uncertainty and whether impacts shifted beyond the study boundary.",
   "A resource policy can use rules, monitoring, incentives and participation. A pollution charge can encourage reductions when avoiding pollution costs less than paying the charge, while a cap-and-trade system fixes a stated allowance quantity and permits covered trading under its rules. Outcomes depend on design, enforcement and scope; neither automatically eliminates pollution or inequity. Adapt plans as new evidence arrives, while explaining which observations would change a decision. International cooperation can help address shared rivers or atmospheric pollution, but agreements need implementation and cannot guarantee that every goal is met."
  ],
  "boards": [
   [
    "State the goal, boundaries, period and criteria",
    "Include affected communities and local evidence",
    "Compare who gains, who pays and who remains exposed",
    "Sustainability cannot be established by a label"
   ],
   [
    "Repair: 30 / 15 = 2 cost units per water unit",
    "Reuse: 50 / 20 = 2.5; expansion: 40 / 10 = 4",
    "Same period and comparable water-service definition",
    "Cost is one criterion; assess reliability and access"
   ],
   [
    "Program area: 100 → 80, change −20",
    "Comparison: 100 → 90, change −10",
    "Difference between changes: −20 − (−10) = −10",
    "Causal use requires a credible comparison and assumptions"
   ],
   [
    "Rules and incentives need scope and enforcement",
    "A charge changes incentives; a cap sets allowances",
    "Monitor outcomes, uncertainty and impacts elsewhere",
    "Update decisions when relevant evidence changes"
   ]
  ],
  "eqs": [
   "Evaluate alternatives using stated evidence and criteria",
   "Cost per water unit = comparable total cost / water saved or supplied",
   "Difference between changes = program change − comparison change",
   "Decision → implementation → monitoring → justified revision"
  ],
  "questions": [
   [
    "What should a resource-management proposal state before alternatives are ranked?",
    "Its objective, boundaries, period, evidence and criteria",
    "Only a preferred answer with no rationale",
    "Only a decorative project name",
    "A clear scope and explicit criteria make comparisons reviewable and reveal what the analysis includes or omits."
   ],
   [
    "Why include affected communities in environmental planning?",
    "They can identify local conditions, priorities and distributional effects",
    "Their participation makes all physical data unnecessary",
    "Every community member always has the same view",
    "Participation adds relevant experience and priorities while working alongside technical evidence and diverse perspectives."
   ],
   [
    "Why can a national average be insufficient for assessing water access?",
    "It can hide differences among neighborhoods and groups",
    "It reports every household separately",
    "It proves everyone has the same service",
    "An aggregate can conceal unequal reliability, price, quality and connection levels, so disaggregated evidence may be needed."
   ],
   [
    "What would best support a claim that a new facility is more sustainable?",
    "Evidence comparing environmental and social outcomes over a stated life cycle",
    "Only its green-colored logo",
    "Only the developer's preferred adjective",
    "A sustainability claim needs defined outcomes, scope and comparisons rather than relying on branding or one isolated measure."
   ],
   [
    "Plan Repair costs 30 units and saves 15 water units; Reuse costs 50 and saves 20; Expansion costs 40 and supplies 10. Which has the lowest cost per water unit?",
    "Repair",
    "Reuse",
    "Expansion",
    "Comparable cost-per-unit values are two, two and a half, and four respectively, making repair lowest on this criterion."
   ],
   [
    "An original plan costs 72 units over a stated period and saves 24 water units during that period. What is cost per unit saved?",
    "3 cost units",
    "1728 cost units",
    "0.333 cost units",
    "The ratio is seventy-two divided by twenty-four, or three cost units per water unit saved, using matching periods."
   ],
   [
    "Why does the lowest cost per water unit not automatically establish the best overall plan?",
    "Reliability, quality, ecological effects and distribution can differ",
    "Cost ratios include all social values by definition",
    "Every unit of supply is always equally useful at all times",
    "The cost metric measures one dimension; other outcomes and constraints are needed for an overall decision."
   ],
   [
    "What should accompany a weighted score used to compare resource plans?",
    "The criteria, scales, weights and reasons for those choices",
    "A claim that the weights are universal natural constants",
    "A ban on checking alternative weights",
    "Scores depend on stated judgments and measurements; sensitivity to reasonable weight changes helps readers assess the ranking."
   ],
   [
    "In an original study, program-area use falls 100 to 80 units and comparison-area use falls 100 to 90. What is the program area’s before-after change?",
    "−20 units",
    "−10 units",
    "+20 units",
    "The program area's own change is eighty minus one hundred, or negative twenty; the comparison adjustment is a separate calculation."
   ],
   [
    "Program-area use changes from 100 to 80 units and comparison-area use from 100 to 90. What is the difference between changes, program minus comparison?",
    "−10 units",
    "−30 units",
    "+10 units",
    "The calculation is negative twenty minus negative ten, or negative ten, distinguishing a comparison-adjusted difference from a simple change."
   ],
   [
    "What is needed before treating a difference between area trends as the program's causal effect?",
    "A credible account of comparable trends and other changes without the program",
    "Only that the program's name contains the word save",
    "An assumption that all observed change must be caused by the program",
    "Causal interpretation depends on the comparison approximating what would have happened without treatment and addressing other changes."
   ],
   [
    "Why should a policy review examine impacts beyond its immediate boundary?",
    "Activity or pollution may shift to another place",
    "Political borders stop all environmental processes",
    "Only the location of the report's author matters",
    "A local improvement may partly reflect displaced impacts, so relevant connected places belong in the assessment."
   ],
   [
    "How can a pollution charge encourage reductions?",
    "Avoiding pollution may cost less than paying the charge for it",
    "It mechanically removes all pollutants without action",
    "It guarantees identical costs for every firm",
    "A charge changes incentives at the margin, but responses depend on available options, prices, monitoring and enforcement."
   ],
   [
    "What is the defining quantity restriction in a cap-and-trade system?",
    "A stated total allowance quantity for covered emissions under the program's rules",
    "An unlimited permission to emit without accounting",
    "A requirement that all firms emit identical amounts",
    "The cap constrains covered allowances while trading can redistribute them; actual program details and compliance rules matter."
   ],
   [
    "Why does announcing an environmental rule not guarantee its intended outcome?",
    "Coverage, implementation, monitoring and compliance affect results",
    "Written rules instantly change every physical process",
    "Environmental measurements become unnecessary",
    "Policy performance depends on how the rule operates and is enforced, including what activities fall within its scope."
   ],
   [
    "Which action demonstrates evidence-based adaptive management?",
    "Monitoring outcomes and revising a plan when relevant evidence warrants it",
    "Changing the goal secretly after every measurement",
    "Ignoring every result that differs from a forecast",
    "Adaptive management links observation to explicit, justified revisions while retaining a clear record of goals and evidence."
   ],
   [
    "Why can shared rivers motivate international cooperation?",
    "Upstream actions can affect downstream users across borders",
    "Water obeys every border without crossing",
    "All river countries necessarily have identical interests",
    "Hydrologic connections can create shared benefits and conflicts, making coordination and agreements useful without ensuring unanimity."
   ],
   [
    "Which conclusion best combines this unit's geographic approach?",
    "Compare linked places, time periods, totals, rates and unequal effects using evidence",
    "Choose any policy that has a reassuring name",
    "Assume one local indicator proves global sustainability",
    "Resource decisions connect physical systems and human choices; multiple scales and clearly defined measures support sound evaluation."
   ]
  ],
  "check": [
   "A program area falls from 90 to 60 water units, while a comparison area falls from 80 to 70. What is the program-minus-comparison difference between changes?",
   "−20 units",
   "−40 units",
   "+20 units",
   "The program change is negative thirty and the comparison change is negative ten; negative thirty minus negative ten equals negative twenty."
  ],
  "pics": [
   null,
   {
    "t": "setups",
    "title": "Fictional water plans: same period",
    "head": "Plan",
    "cols": [
     "Cost",
     "Water units"
    ],
    "rows": [
     [
      "Repair",
      "30",
      "15 saved"
     ],
     [
      "Reuse",
      "50",
      "20 saved"
     ],
     [
      "Expansion",
      "40",
      "10 supplied"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "A policy comparison",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      144,
      51
     ],
     "P1": [
      497,
      51
     ],
     "P2": [
      144,
      51
     ],
     "P3": [
      144,
      174
     ],
     "P4": [
      145,
      51
     ],
     "P5": [
      480,
      51
     ],
     "P6": [
      145,
      86
     ],
     "P7": [
      480,
      86
     ],
     "P8": [
      145,
      121
     ],
     "P9": [
      480,
      121
     ],
     "P10": [
      145,
      156
     ],
     "P11": [
      480,
      156
     ],
     "P12": [
      177,
      156
     ],
     "P13": [
      442,
      121
     ],
     "P14": [
      177,
      156
     ],
     "P15": [
      442,
      86
     ],
     "P16": [
      442,
      121
     ],
     "P17": [
      442,
      86
     ],
     "P18": [
      177,
      156
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P4P5",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P6P7",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P8P9",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P10P11",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P12P13",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P14P15",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional annual household use: water units",
      "col": 0
     },
     {
      "at": [
       320,
       195
      ],
      "text": "Counterfactual requires a credible trend assumption",
      "col": 0
     },
     {
      "at": [
       115,
       46
      ],
      "text": "70",
      "col": 0
     },
     {
      "at": [
       115,
       81
      ],
      "text": "80",
      "col": 0
     },
     {
      "at": [
       115,
       116
      ],
      "text": "90",
      "col": 0
     },
     {
      "at": [
       115,
       151
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       510,
       121
      ],
      "text": "Compare",
      "col": 2
     },
     {
      "at": [
       510,
       86
      ],
      "text": "Program",
      "col": 1
     },
     {
      "at": [
       177,
       31
      ],
      "text": "Before",
      "col": 0
     },
     {
      "at": [
       442,
       31
      ],
      "text": "After",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P16",
      "r": 4,
      "col": 2
     },
     {
      "c": "P17",
      "r": 4,
      "col": 1
     },
     {
      "c": "P18",
      "r": 4,
      "col": 0
     }
    ]
   },
   null
  ],
  "qpics": {
   "8": {
    "t": "setups",
    "title": "Original annual household water use",
    "head": "Area",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Program",
      "100",
      "80"
     ],
     [
      "Comparison",
      "100",
      "90"
     ]
    ]
   },
   "9": {
    "t": "setups",
    "title": "Original annual household water use",
    "head": "Area",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Program",
      "100",
      "80"
     ],
     [
      "Comparison",
      "100",
      "90"
     ]
    ]
   },
   "10": {
    "t": "setups",
    "title": "Original annual household water use",
    "head": "Area",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Program",
      "100",
      "80"
     ],
     [
      "Comparison",
      "100",
      "90"
     ]
    ]
   }
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Connect resource location and access with water, land, climate and energy systems. State boundaries and time periods before comparing stocks, flows, totals and rates. Distinguish renewable potential from sustainable use, capacity from generation, and intensity from total impact. Use maps and original evidence to examine who benefits, who bears costs and what changes beyond the immediate study area. Compare alternatives against stated criteria, separate observed patterns from causal claims, and revise conclusions when better evidence warrants it.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"geography-h-world-geography-resources-and-the-environment","subject":"geography","level":5,"grade":9,"standard":"Geography for Life: National Geography Standards (2nd ed., 2012), thematic applications of standards 1, 7, 14, 15, 16 and 18","title":"Resources and the Environment","goal":"Evaluate resource use and environmental decisions using spatial evidence, physical processes, clear accounting and explicit policy comparisons.","points":20,"progression":{"requires":["geography-h-world-geography-asia-and-oceania","geography-h-world-geography-climate-and-weather"],"operations":3,"demand":"Apply spatial reasoning, resource accounts, climate-risk models and policy comparisons with explicit assumptions."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
