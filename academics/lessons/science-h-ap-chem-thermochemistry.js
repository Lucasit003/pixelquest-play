/* Original course unit. Review record: docs/review/lessons/high-completion/ap-chem-u6-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "6.1",
  "name": "Endothermic and Exothermic Processes",
  "skill": "s1",
  "teach": [
   "Choose a system before assigning an energy sign. The system is the part being studied; its surroundings include the rest of the experimental setup. Heat q is positive when energy transfers into the system because of a temperature difference, and negative when it leaves. If a reacting system releases 180 J to an otherwise isolated surrounding solution, q(reaction) = -180 J and q(solution) = +180 J. An exothermic reaction can therefore warm the surrounding solution. Calling the reaction positive just because the thermometer rises confuses the two energy accounts.",
   "An endothermic process absorbs heat; an exothermic process releases it. Melting and vaporizing a substance require energy, while freezing and condensing release it under comparable phase-transition conditions. Dissolving a substance can have either sign because separating existing particles costs energy and making new interactions releases energy. A salt dissolving in an insulated cup while the mixture cools indicates endothermic dissolution in the usual calorimetry model. Do not assume all dissolution releases heat or that a substance must change temperature whenever it gains energy: a phase change can absorb heat at constant temperature."
  ],
  "boards": [
   [
    "Define the system before choosing the sign",
    "Reaction releases 180 J: q(reaction) = -180 J",
    "Solution gains 180 J: q(solution) = +180 J",
    "The two heat accounts sum to zero"
   ],
   [
    "Endothermic: system absorbs heat",
    "Exothermic: system releases heat",
    "Dissolution can have either sign",
    "Phase change can absorb heat without warming"
   ]
  ],
  "eqs": [
   "q(system) + q(surroundings) = 0 for an isolated heat exchange",
   "Sign convention: heat in is positive; heat out is negative"
  ],
  "questions": [
   [
    "A specified reacting system releases 240 J of heat. What is q for that system?",
    "-240 J",
    "+240 J",
    "0 J",
    "Heat leaving the specified system has a negative sign. The surroundings gain the same energy in an isolated exchange."
   ],
   [
    "A specified sample absorbs 350 J of heat. What is q for the sample?",
    "+350 J",
    "-350 J",
    "0 J",
    "Heat entering the sample is positive under the system sign convention, regardless of what the surroundings do."
   ],
   [
    "A reaction transfers 120 J to an otherwise isolated solution. What is q for that surrounding solution?",
    "+120 J",
    "-120 J",
    "+240 J",
    "The solution receives the released heat, so its heat change is +120 J while the reaction heat is -120 J."
   ],
   [
    "An insulated cup warms as a salt dissolves, with no external heater or other process. What sign describes the dissolution heat?",
    "Negative; exothermic",
    "Positive; endothermic",
    "Zero because temperature changed",
    "In the usual calorimetry model, warming of the surrounding mixture reflects energy released by the dissolution process."
   ],
   [
    "An insulated cup cools as a salt dissolves, with no other energy source or process. How is the dissolution classified?",
    "Endothermic",
    "Exothermic",
    "Always energy-neutral",
    "The dissolving process absorbs energy from the mixture, lowering its temperature under the stated conditions."
   ],
   [
    "Which phase transition is endothermic for the substance undergoing it?",
    "Melting",
    "Freezing",
    "Condensation",
    "Melting requires energy input to change a solid into a liquid. The other listed transitions release heat."
   ],
   [
    "Which phase transition is exothermic for the substance undergoing it?",
    "Condensation",
    "Vaporization",
    "Sublimation",
    "Gas-to-liquid condensation releases energy; vaporization and solid-to-gas sublimation require energy input."
   ],
   [
    "Why can dissolution be either endothermic or exothermic?",
    "The costs of separation and gains from new interactions compete",
    "Separating particles always releases heat",
    "Every dissolved salt has identical interactions",
    "Separating prior interactions requires energy, while forming new solute-solvent interactions releases it; the net can have either sign."
   ],
   [
    "Why is a temperature rise in the surrounding solution not a positive q for an exothermic reaction?",
    "The reaction and solution have opposite heat-transfer signs",
    "The thermometer measures negative temperature only",
    "An exothermic reaction absorbs all the solution heat",
    "The reaction loses energy while the surrounding solution gains it; the system chosen determines the sign."
   ],
   [
    "A pure substance absorbs heat while melting at its melting point and constant pressure. Must its temperature rise during the transition?",
    "No; the energy can drive the phase change",
    "Yes; every heat input raises temperature",
    "Yes; melting means no energy is needed",
    "During an equilibrium phase transition, energy changes the phase while the pure substance can remain at constant temperature."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Heat transfer: define the system first",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      83,
      187
     ],
     "P1": [
      243,
      187
     ],
     "P2": [
      243,
      105
     ],
     "P3": [
      83,
      105
     ],
     "P4": [
      394,
      187
     ],
     "P5": [
      554,
      187
     ],
     "P6": [
      554,
      105
     ],
     "P7": [
      394,
      105
     ],
     "P8": [
      248,
      141
     ],
     "P9": [
      386,
      141
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
       163,
       167
      ],
      "text": "Reacting system",
      "col": 1
     },
     {
      "at": [
       163,
       138
      ],
      "text": "q = -180 J",
      "col": 1
     },
     {
      "at": [
       474,
       167
      ],
      "text": "Surroundings",
      "col": 2
     },
     {
      "at": [
       474,
       138
      ],
      "text": "q = +180 J",
      "col": 2
     },
     {
      "at": [
       320,
       163
      ],
      "text": "180 J heat",
      "col": 0
     },
     {
      "at": [
       320,
       65
      ],
      "text": "Same transfer, opposite signs in the two accounts",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "6.2",
  "name": "Energy Diagrams",
  "skill": "s2",
  "teach": [
   "An enthalpy-level diagram compares initial and final states on one energy scale. Suppose an original hypothetical process starts at 40 kJ and ends at 10 kJ for the stated amount. Its enthalpy change is final minus initial, 10 - 40 = -30 kJ: the forward process is exothermic. Draw the final level below the initial level and indicate the 30 kJ downward change. The zero of the diagram is a chosen reference; moving both levels upward by the same amount does not change the difference.",
   "Reversing a process swaps its endpoints, so the sign reverses. The same diagram read backward gives +30 kJ. An endothermic process instead ends above its initial enthalpy. Level diagrams describe energy changes; they do not by themselves give reaction speed or elapsed time. A full reaction-path diagram can also show a transition-state barrier, but that barrier is different from the net endpoint change. When reading a scale, include its units and the quantity of material represented. A doubled reaction amount doubles the total enthalpy change when all states are otherwise the same."
  ],
  "boards": [
   [
    "Initial level 40 kJ; final level 10 kJ",
    "ΔH = 10 - 40 = -30 kJ",
    "Final below initial: exothermic",
    "A common vertical shift changes no differences"
   ],
   [
    "Reverse: 40 - 10 = +30 kJ",
    "Endpoint difference is not the activation barrier",
    "Reaction coordinate is not elapsed time",
    "Total energy change scales with reaction amount"
   ]
  ],
  "eqs": [
   "ΔH = Hfinal - Hinitial = 10 - 40 = -30 kJ",
   "ΔH(reverse) = -ΔH(forward)"
  ],
  "questions": [
   [
    "An enthalpy diagram starts at 15 kJ and ends at 55 kJ for the stated amount. What is ΔH?",
    "+40 kJ",
    "-40 kJ",
    "+70 kJ",
    "Final minus initial gives 55 - 15 = +40 kJ, so this direction absorbs heat at constant pressure."
   ],
   [
    "An enthalpy diagram starts at 80 kJ and ends at 25 kJ for the stated amount. What is ΔH?",
    "-55 kJ",
    "+55 kJ",
    "+105 kJ",
    "The final enthalpy is 55 kJ lower, so the change is 25 - 80 = -55 kJ."
   ],
   [
    "A diagram for a forward exothermic process should place the final state where relative to the initial state?",
    "Lower on the enthalpy axis",
    "Higher on the enthalpy axis",
    "At an unrelated level with no scale",
    "An exothermic forward process has negative ΔH, so final enthalpy is below initial enthalpy."
   ],
   [
    "A forward process has ΔH = -65 kJ. What is ΔH for the same amount undergoing its exact reverse?",
    "+65 kJ",
    "-65 kJ",
    "0 kJ",
    "Reversing the process swaps initial and final states, preserving the magnitude and reversing the sign."
   ],
   [
    "Both endpoints of a level diagram are raised by 100 kJ. How does its ΔH change?",
    "It stays unchanged",
    "It increases by 100 kJ",
    "It doubles necessarily",
    "The added reference offset cancels when final minus initial enthalpy is taken."
   ],
   [
    "A path diagram rises from reactants to a peak, then ends below the reactants. Which difference is the overall enthalpy change?",
    "Products minus reactants",
    "Peak minus reactants",
    "Peak minus products",
    "The endpoint difference gives ΔH. Differences involving the peak are activation barriers for a pathway."
   ],
   [
    "Can a two-level enthalpy diagram alone establish how quickly a process occurs?",
    "No; kinetic information is also needed",
    "Yes; every downhill diagram means instantaneous reaction",
    "Yes; the horizontal spacing is always seconds",
    "Endpoint energies describe thermochemistry. Rates require information about kinetic pathways and conditions."
   ],
   [
    "A level diagram gives ΔH = +18 kJ for one stated reaction amount. What is the total ΔH for three such amounts?",
    "+54 kJ",
    "+6 kJ",
    "-54 kJ",
    "Total enthalpy change is extensive: three copies of the stated process absorb 3 × 18 = 54 kJ."
   ],
   [
    "An upward arrow connects the initial enthalpy level to a higher final level. What sign does the forward ΔH have?",
    "Positive",
    "Negative",
    "Necessarily zero",
    "The final level is greater than the initial level, so final minus initial is positive."
   ],
   [
    "Why must an energy diagram identify the amount represented when it labels total ΔH in kJ?",
    "The total change depends on the amount transformed",
    "Energy changes never have units",
    "All reaction amounts release the same heat",
    "A total energy change scales with amount, unlike a molar value explicitly defined per mole of a stated process."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Enthalpy levels: hypothetical process",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      88,
      210
     ],
     "P1": [
      88,
      55
     ],
     "P2": [
      140,
      123
     ],
     "P3": [
      265,
      123
     ],
     "P4": [
      377,
      72
     ],
     "P5": [
      502,
      72
     ],
     "P6": [
      320,
      123
     ],
     "P7": [
      320,
      72
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 4
     },
     {
      "v": "P4P5",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 4
     },
     {
      "v": "P6P7",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       105,
       219
      ],
      "text": "H (kJ)",
      "col": 0
     },
     {
      "at": [
       202,
       139
      ],
      "text": "Initial 40",
      "col": 1
     },
     {
      "at": [
       440,
       88
      ],
      "text": "Final 10",
      "col": 2
     },
     {
      "at": [
       320,
       34
      ],
      "text": "Energy for the stated amount; read final minus initial",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ],
  "qpics": {
   "0": {
    "t": "figure",
    "title": "Assessment: read the two endpoint levels",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      88,
      210
     ],
     "P1": [
      88,
      55
     ],
     "P2": [
      140,
      80.5
     ],
     "P3": [
      265,
      80.5
     ],
     "P4": [
      377,
      148.5
     ],
     "P5": [
      502,
      148.5
     ],
     "P6": [
      320,
      80.5
     ],
     "P7": [
      320,
      148.5
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 4
     },
     {
      "v": "P4P5",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 4
     },
     {
      "v": "P6P7",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       105,
       219
      ],
      "text": "H (kJ)",
      "col": 0
     },
     {
      "at": [
       202,
       96.5
      ],
      "text": "Initial 15",
      "col": 1
     },
     {
      "at": [
       440,
       164.5
      ],
      "text": "Final 55",
      "col": 2
     },
     {
      "at": [
       320,
       34
      ],
      "text": "Energy for the stated amount; read final minus initial",
      "col": 0
     }
    ],
    "circles": []
   },
   "1": {
    "t": "figure",
    "title": "Assessment: read the two endpoint levels",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      88,
      210
     ],
     "P1": [
      88,
      55
     ],
     "P2": [
      140,
      191
     ],
     "P3": [
      265,
      191
     ],
     "P4": [
      377,
      97.5
     ],
     "P5": [
      502,
      97.5
     ],
     "P6": [
      320,
      191
     ],
     "P7": [
      320,
      97.5
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 4
     },
     {
      "v": "P4P5",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 4
     },
     {
      "v": "P6P7",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       105,
       219
      ],
      "text": "H (kJ)",
      "col": 0
     },
     {
      "at": [
       202,
       207
      ],
      "text": "Initial 80",
      "col": 1
     },
     {
      "at": [
       440,
       113.5
      ],
      "text": "Final 25",
      "col": 2
     },
     {
      "at": [
       320,
       34
      ],
      "text": "Energy for the stated amount; read final minus initial",
      "col": 0
     }
    ],
    "circles": []
   }
  }
 },
 {
  "code": "6.3",
  "name": "Heat Transfer and Thermal Equilibrium",
  "skill": "s3",
  "teach": [
   "When bodies at different temperatures make thermal contact without external work or other processes, net heat flows from the warmer body to the cooler one. Particle interactions transfer energy until thermal equilibrium is reached. At equilibrium the temperatures are equal and there is no net heat flow between them, but particles still move and exchange energy microscopically. Equal temperature does not mean equal total internal energy: samples can have different amounts and compositions. In the ideal-gas model, temperature tracks average translational kinetic energy, rather than the total energy of all particles.",
   "For an insulated exchange without phase changes, the final temperature follows energy conservation. Take two equal heat-capacity bodies initially at 70°C and 30°C. The warmer loses the amount the cooler gains, so they meet at 50°C. Equal heat capacity is the reason an arithmetic average works here. If the cooler body has three times the heat capacity of the warmer one, its temperature shifts less and the final value is 40°C: the warm body drops 30 degrees while the cool body rises 10. Do not average temperatures without checking masses and heat capacities."
  ],
  "boards": [
   [
    "Net heat flows from warmer to cooler",
    "Equilibrium: equal T, no net heat transfer",
    "Particles continue moving and interacting",
    "Equal T does not imply equal total energy"
   ],
   [
    "Equal capacities: 70°C and 30°C → 50°C",
    "Cool body has 3× capacity: final 40°C",
    "Warm loss: C × 30; cool gain: 3C × 10",
    "Use the heat capacities to weight the changes"
   ]
  ],
  "eqs": [
   "For an insulated exchange: qhot + qcold = 0",
   "Chot(Thot - Tf) = Ccold(Tf - Tcold)"
  ],
  "questions": [
   [
    "A 75°C body contacts a 20°C body, with no work, reaction or phase change. Which direction has the initial net heat transfer?",
    "From 75°C to 20°C",
    "From 20°C to 75°C",
    "Neither direction until temperatures become equal",
    "Thermal energy transfers spontaneously from the higher-temperature body to the lower-temperature body under these conditions."
   ],
   [
    "What condition characterizes thermal equilibrium between bodies in contact?",
    "Equal temperatures and no net heat flow",
    "Equal masses necessarily",
    "All particle motion has stopped",
    "Thermal equilibrium means equal temperatures. Microscopic motion continues, and the bodies need not have equal masses."
   ],
   [
    "Two samples have the same temperature but different amounts of matter. Must they have the same total internal energy?",
    "No",
    "Yes, regardless of material or amount",
    "Yes, because temperature is total energy",
    "Temperature is an intensive property; total internal energy also depends on the amount and nature of the material."
   ],
   [
    "Equal heat-capacity bodies initially at 80°C and 20°C exchange heat in isolation without phase changes. What is the final temperature?",
    "50°C",
    "100°C",
    "30°C",
    "Equal capacities require equal-magnitude temperature changes: a 30-degree drop balances a 30-degree rise."
   ],
   [
    "A hot body of heat capacity C starts at 80°C; a cool body of capacity 3C starts at 20°C. In an isolated exchange without phase changes, what is Tf?",
    "35°C",
    "50°C",
    "65°C",
    "At 35°C, the hot body loses C × 45 while the cooler gains 3C × 15. Those energies balance."
   ],
   [
    "Why is the final temperature closer to the initial temperature of the body with larger heat capacity?",
    "A given heat transfer changes its temperature less",
    "It cannot exchange any heat",
    "Heat capacity is the same as temperature",
    "A larger heat capacity means more energy is needed per degree, so that body undergoes the smaller temperature shift."
   ],
   [
    "Two bodies reach thermal equilibrium. What still occurs microscopically?",
    "Particle motion and energy exchanges",
    "Permanent rest of all particles",
    "Net heat flow only toward the originally hotter body",
    "Thermal equilibrium removes a net directional heat flow, not molecular motion or individual energy exchanges."
   ],
   [
    "In an isolated two-body exchange, the warmer object loses 600 J as heat. How much heat does the cooler object gain?",
    "600 J",
    "300 J",
    "1200 J",
    "Conservation of energy makes the heat gained equal in magnitude to the heat lost when no other energy store participates."
   ],
   [
    "For the same ideal monatomic gas, a higher absolute temperature means a higher value of what?",
    "Average translational kinetic energy per particle",
    "Mass of each atom",
    "Number of atoms necessarily",
    "The ideal-gas kinetic model relates absolute temperature to average translational kinetic energy, not atomic mass or particle count."
   ],
   [
    "When is simply averaging two initial temperatures justified for an isolated exchange without phase changes?",
    "When the bodies have equal total heat capacities",
    "Whenever their volumes are equal",
    "Whenever their colors match",
    "Equal total heat capacities make their temperature changes equal in magnitude; equal volume alone does not ensure this."
   ]
  ],
  "check": [
   "A hot body of heat capacity 2C is at 80°C and a cool body of capacity C is at 20°C. With isolated heat exchange and no phase change, what is Tf?",
   "60°C",
   "50°C",
   "40°C",
   "At 60°C, the hot body loses 2C × 20 and the cool body gains C × 40, which balance."
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Unequal heat capacities: isolated exchange",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      85,
      177
     ],
     "P1": [
      200,
      177
     ],
     "P2": [
      200,
      119
     ],
     "P3": [
      85,
      119
     ],
     "P4": [
      376,
      194
     ],
     "P5": [
      562,
      194
     ],
     "P6": [
      562,
      102
     ],
     "P7": [
      376,
      102
     ],
     "P8": [
      208,
      142
     ],
     "P9": [
      366,
      142
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
       142,
       158
      ],
      "text": "Hot: C",
      "col": 1
     },
     {
      "at": [
       142,
       133
      ],
      "text": "70°C",
      "col": 1
     },
     {
      "at": [
       469,
       162
      ],
      "text": "Cool: 3C",
      "col": 2
     },
     {
      "at": [
       469,
       132
      ],
      "text": "30°C",
      "col": 2
     },
     {
      "at": [
       286,
       166
      ],
      "text": "Net heat",
      "col": 0
     },
     {
      "at": [
       320,
       68
      ],
      "text": "Final 40°C: C × 30 K = 3C × 10 K",
      "col": 0
     }
    ],
    "circles": []
   }
  ]
 },
 {
  "code": "6.4",
  "name": "Heat Capacity and Calorimetry",
  "skill": "s4",
  "teach": [
   "For warming or cooling without a phase change, q = mcΔT when the specific heat c is approximately constant over the interval. The temperature difference is final minus initial; a difference of 1°C equals a difference of 1 K. A 60 g hypothetical liquid with c = 2.0 J/(g·K), heated from 18°C to 28°C, absorbs 60 × 2.0 × 10 = 1200 J. Total heat capacity C = mc has units J/K. A molar heat capacity Cm instead uses amount n: q = n Cm ΔT. Do not multiply a molar value by grams or confuse a whole-object heat capacity with a per-gram value.",
   "Calorimetry follows all the heat accounts. In an insulated constant-pressure setup, q(reaction) + q(solution) + q(calorimeter) = 0, neglecting other heat losses and non-pressure-volume work. Suppose 50 g of solution with c = 4.0 J/(g·K) rises by 6 K and the calorimeter has C = 25 J/K. The solution gains 1200 J, the calorimeter gains 150 J, and the reaction releases 1350 J: q(reaction) = -1350 J. Omitting the calorimeter would underestimate the magnitude of the released heat.",
   "Use the mass that belongs to the stated specific heat: a solution calculation normally uses total solution mass, not just the added solute. Measure initial and final temperatures under comparable conditions, mix adequately, and account for container heat capacity where specified. For an exothermic trial that loses heat to the room, the observed rise is smaller than in ideal insulation, so a simple calculation that ignores this loss gives a less negative reaction heat. Significant figures should reflect the given measurements; carrying extra digits through intermediate arithmetic reduces rounding error."
  ],
  "boards": [
   [
    "q = mc(Tfinal - Tinitial)",
    "60 g × 2.0 J/(g·K) × 10 K = 1200 J",
    "C = mc; q = CΔT",
    "Molar version: q = n Cm ΔT"
   ],
   [
    "Solution: 50 × 4.0 × 6 = 1200 J",
    "Calorimeter: 25 × 6 = 150 J",
    "Reaction: -(1200 + 150) = -1350 J",
    "Include every stated energy reservoir"
   ],
   [
    "Use solution mass with solution specific heat",
    "Heat loss reduces an observed temperature rise",
    "Ignored loss makes exothermic heat less negative",
    "Carry digits, then round the reported result"
   ]
  ],
  "eqs": [
   "q = mcΔT = 1200 J; C = mc = 120 J/K",
   "qreaction = -(msolution csolution + Ccal)ΔT = -1350 J",
   "At fixed q: ΔT = q/(mc); larger mc means smaller temperature change"
  ],
  "questions": [
   [
    "A 25 g sample has c = 2.0 J/(g·K) and warms by 8.0 K without a phase change. What heat does it absorb?",
    "400 J",
    "100 J",
    "16 J",
    "Multiply mass, specific heat and temperature rise: 25 × 2.0 × 8.0 = 400 J."
   ],
   [
    "A 40 g sample has c = 3.0 J/(g·K) and cools from 35°C to 25°C. What is q for the sample?",
    "-1200 J",
    "+1200 J",
    "-120 J",
    "Its temperature change is -10 K, so q = 40 × 3.0 × (-10) = -1200 J."
   ],
   [
    "A 20 g sample absorbs 600 J and warms by 15 K without a phase change. What is its specific heat?",
    "2.0 J/(g·K)",
    "30 J/(g·K)",
    "0.50 J/(g·K)",
    "Divide heat by mass and temperature rise: c = 600/(20 × 15) = 2.0 J/(g·K)."
   ],
   [
    "A sample has total heat capacity 75 J/K and absorbs 900 J without a phase change. What is its temperature rise?",
    "12 K",
    "67500 K",
    "0.083 K",
    "A whole-object heat capacity needs no mass factor: ΔT = q/C = 900/75 = 12 K."
   ],
   [
    "A 2.0 mol sample has Cm = 30 J/(mol·K) and warms by 5.0 K. What is q?",
    "300 J",
    "75 J",
    "12 J",
    "Use amount in moles with molar heat capacity: q = 2.0 × 30 × 5.0 = 300 J."
   ],
   [
    "Two equal-mass samples absorb equal heat without phase changes. One has twice the specific heat of the other. How does its temperature rise compare?",
    "It is half as large",
    "It is twice as large",
    "It must be identical",
    "For the same q and mass, ΔT is inversely proportional to c, so doubling c halves the temperature rise."
   ],
   [
    "A 30 g object has c = 0.80 J/(g·K). What is its total heat capacity?",
    "24 J/K",
    "37.5 J/K",
    "0.027 J/K",
    "Total heat capacity is mass times specific heat: 30 × 0.80 = 24 J/K."
   ],
   [
    "In an insulated trial the solution gains 700 J and the calorimeter gains 100 J. What is the reaction heat?",
    "-800 J",
    "-600 J",
    "+800 J",
    "The reaction balances both positive gains: q(reaction) = -(700 + 100) = -800 J."
   ],
   [
    "An exothermic calorimetry trial loses heat to the room, but the analysis ignores this loss. How is the calculated reaction heat biased?",
    "Its magnitude is too small",
    "Its magnitude is necessarily too large",
    "It becomes exact automatically",
    "Some released energy bypasses the measured solution and calorimeter, so the inferred exothermic heat is less negative than the true value."
   ],
   [
    "A specific heat is supplied for the whole solution. Which mass belongs in q = mcΔT for that solution?",
    "Total solution mass",
    "Only solute mass",
    "Only the empty cup mass",
    "The mass must match the material whose specific heat is used; for a solution value this is the solution mass."
   ],
   [
    "A thermometer rises from 19°C to 26°C. What temperature difference should be used in a J/(g·K) calculation?",
    "7 K",
    "299 K",
    "45 K",
    "Celsius and kelvin increments are equal, so the difference is 26 - 19 = 7 K; no 273.15 offset is added to a difference."
   ],
   [
    "Why can omitting a calorimeter heat capacity underestimate heat released by an exothermic reaction?",
    "Some released energy warms the container",
    "The container must have zero temperature change",
    "The reaction absorbs all container heat",
    "If the container also warms, it receives energy that must be included in the reaction energy balance."
   ],
   [
    "An insulated trial uses 40 g solution with c = 4.0 J/(g·K), Ccal = 20 J/K, and a rise from 20°C to 25°C. How much heat does the solution alone gain?",
    "800 J",
    "900 J",
    "100 J",
    "The solution gain is 40 × 4.0 × 5 = 800 J. The separate 100 J container gain is not part of this requested quantity."
   ],
   [
    "An insulated trial uses 40 g solution with c = 4.0 J/(g·K), Ccal = 20 J/K, and a rise from 20°C to 25°C. What is the reaction heat?",
    "-900 J",
    "-800 J",
    "+900 J",
    "The solution gains 800 J and the calorimeter gains 20 × 5 = 100 J; the reaction therefore loses 900 J."
   ],
   [
    "An insulated trial gives q(reaction) = -900 J when 0.030 mol reacts completely in a 1:1 process. What is the molar reaction enthalpy at constant pressure?",
    "-30 kJ/mol",
    "-27 kJ/mol",
    "-30000 kJ/mol",
    "Convert -900 J to -0.900 kJ, then divide by 0.030 mol to obtain -30 kJ/mol."
   ],
   [
    "A material has specific heat 0.50 J/(g·K) and molar mass 60 g/mol. What is its molar heat capacity?",
    "30 J/(mol·K)",
    "120 J/(mol·K)",
    "0.0083 J/(mol·K)",
    "Multiply by grams per mole: 0.50 × 60 = 30 J/(mol·K), so the gram unit cancels."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Both solution and container absorb reaction heat",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      123,
      187
     ],
     "P1": [
      363,
      187
     ],
     "P2": [
      363,
      63
     ],
     "P3": [
      123,
      63
     ],
     "P4": [
      143,
      165
     ],
     "P5": [
      343,
      165
     ],
     "P6": [
      343,
      83
     ],
     "P7": [
      143,
      83
     ],
     "P8": [
      380,
      160
     ],
     "P9": [
      366,
      135
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 2
     },
     {
      "v": "P4P5P6P7",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       243,
       143
      ],
      "text": "Solution gains",
      "col": 1
     },
     {
      "at": [
       243,
       116
      ],
      "text": "1200 J",
      "col": 1
     },
     {
      "at": [
       470,
       180
      ],
      "text": "Container gains",
      "col": 2
     },
     {
      "at": [
       470,
       156
      ],
      "text": "150 J",
      "col": 2
     },
     {
      "at": [
       464,
       108
      ],
      "text": "Reaction loses",
      "col": 0
     },
     {
      "at": [
       464,
       82
      ],
      "text": "1350 J",
      "col": 0
     },
     {
      "at": [
       244,
       203
      ],
      "text": "Insulated calorimetry model",
      "col": 0
     },
     {
      "at": [
       320,
       32
      ],
      "text": "q(reaction) + q(solution) + q(container) = 0",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ],
  "qpics": {
   "12": {
    "t": "setups",
    "title": "Insulated trial: original hypothetical measurements",
    "head": "",
    "cols": [
     "Value",
     "Unit"
    ],
    "rows": [
     [
      "Solution mass",
      "40",
      "g"
     ],
     [
      "Solution c",
      "4.0",
      "J/(g·K)"
     ],
     [
      "Container C",
      "20",
      "J/K"
     ],
     [
      "Initial T",
      "20",
      "°C"
     ],
     [
      "Final T",
      "25",
      "°C"
     ]
    ]
   },
   "13": {
    "t": "setups",
    "title": "Insulated trial: original hypothetical measurements",
    "head": "",
    "cols": [
     "Value",
     "Unit"
    ],
    "rows": [
     [
      "Solution mass",
      "40",
      "g"
     ],
     [
      "Solution c",
      "4.0",
      "J/(g·K)"
     ],
     [
      "Container C",
      "20",
      "J/K"
     ],
     [
      "Initial T",
      "20",
      "°C"
     ],
     [
      "Final T",
      "25",
      "°C"
     ]
    ]
   }
  }
 },
 {
  "code": "6.5",
  "name": "Energy of Phase Changes",
  "skill": "s5",
  "teach": [
   "A phase transition changes the arrangement and interactions of particles. For a pure substance at its equilibrium melting or boiling point and fixed pressure, added heat changes the phase while the temperature stays constant. Use q = nΔHtransition rather than mcΔT for that segment. If a hypothetical substance has ΔHfus = 7.5 kJ/mol, melting 0.40 mol absorbs 3.0 kJ. Freezing the same amount between the same states releases 3.0 kJ. Temperature staying constant does not imply that no energy was transferred.",
   "A heating curve combines sloped temperature-change segments with phase-change plateaus under those assumptions. Add the energy for every segment that actually occurs. If warming a sample to its melting point takes 1.2 kJ, melting it takes 4.8 kJ and warming the liquid takes 2.0 kJ, the total input is 8.0 kJ. Vaporizing liquid water separates molecules by overcoming intermolecular attractions; it does not normally split their O–H covalent bonds. A horizontal axis labeled heat added differs from time; equal-width segments represent equal energy only on the heat axis, or under a stated constant heating power with no losses."
  ],
  "boards": [
   [
    "At equilibrium transition T and fixed pressure",
    "q = nΔHtransition during the phase change",
    "0.40 mol × 7.5 kJ/mol = 3.0 kJ",
    "Reverse transition releases the same magnitude"
   ],
   [
    "Warm solid → melt → warm liquid",
    "Energy: 1.2 + 4.8 + 2.0 = 8.0 kJ",
    "Vaporization separates intact molecules",
    "Read whether the horizontal axis is heat or time"
   ]
  ],
  "eqs": [
   "qmelting = nΔHfus; qfreezing = -nΔHfus for the same states",
   "qtotal = sum of heating/cooling and transition contributions"
  ],
  "questions": [
   [
    "A hypothetical substance has ΔHfus = 8.0 kJ/mol. How much heat melts 0.50 mol at its melting point?",
    "+4.0 kJ",
    "+16 kJ",
    "-4.0 kJ",
    "Melting is endothermic: q = 0.50 × 8.0 = +4.0 kJ for the stated amount."
   ],
   [
    "A hypothetical substance has ΔHvap = 30 kJ/mol. What heat does 0.20 mol release on condensing between the same phase states?",
    "-6.0 kJ",
    "+6.0 kJ",
    "-150 kJ",
    "Condensation reverses vaporization, so q = -0.20 × 30 = -6.0 kJ for the condensing substance."
   ],
   [
    "During equilibrium melting of a pure substance at fixed pressure, why can temperature stay constant while heat is supplied?",
    "The energy changes the phase and particle interactions",
    "No energy actually enters",
    "All particles stop moving",
    "Heat can change potential-energy relationships and phase amounts rather than raising temperature during the transition."
   ],
   [
    "Which expression directly applies to heat for a pure phase-change segment at its transition temperature?",
    "q = nΔHtransition",
    "q = mcΔT with a nonzero invented ΔT",
    "q = n/ΔHtransition",
    "Amount times molar transition enthalpy gives the latent heat; an artificial temperature increase would misrepresent the plateau."
   ],
   [
    "Warming a solid takes 0.8 kJ, melting it takes 3.6 kJ, and warming the resulting liquid takes 1.6 kJ. What is the total input?",
    "6.0 kJ",
    "3.6 kJ",
    "2.8 kJ",
    "All three required contributions add: 0.8 + 3.6 + 1.6 = 6.0 kJ."
   ],
   [
    "What primarily changes when liquid water vaporizes without chemical decomposition?",
    "Intermolecular separations and attractions",
    "Every O–H bond breaks into atoms",
    "Hydrogen atoms become oxygen atoms",
    "Vaporization separates water molecules; their covalent O–H bonds remain within the molecules."
   ],
   [
    "A heating curve has temperature vertically and heat added horizontally. What does a plateau width represent?",
    "Energy absorbed in that constant-temperature transition",
    "A necessary increase in temperature",
    "Elapsed time without any additional assumptions",
    "The horizontal variable is heat, so the width measures heat input while temperature remains constant."
   ],
   [
    "A heating curve instead uses time horizontally. When can segment duration be used directly to compare heat input?",
    "When heating power is constant and losses are negligible",
    "Whenever the horizontal axis says time",
    "Only when the sample has zero mass",
    "With constant effective power, energy equals power times time. Changing power or losses breaks that direct proportionality."
   ],
   [
    "A 36 g sample has molar mass 18 g/mol and ΔHvap = 40 kJ/mol in the stated model. What heat vaporizes it completely?",
    "80 kJ",
    "20 kJ",
    "1440 kJ",
    "The sample contains 36/18 = 2 mol, requiring 2 × 40 = 80 kJ for vaporization."
   ],
   [
    "Fusion of 1.0 mol between specified phase states has ΔH = +9.0 kJ. What is ΔH for freezing 1.0 mol between those same states?",
    "-9.0 kJ",
    "+9.0 kJ",
    "0 kJ",
    "Reversing the transition reverses the sign without changing the energy magnitude for the same amount and states."
   ],
   [
    "For a pure substance melting at equilibrium and fixed pressure, what happens to average thermal motion associated with temperature during the plateau?",
    "It does not increase with a temperature rise because T stays fixed",
    "It increases because the temperature must rise",
    "It stops entirely",
    "The temperature remains fixed during the ideal plateau; energy input changes phase and interactions rather than raising temperature."
   ],
   [
    "Why should mcΔT not be applied alone to a full process that includes melting?",
    "It omits the latent heat of fusion",
    "It already includes every phase-change energy automatically",
    "Mass no longer exists during melting",
    "The temperature-change terms account for warming or cooling; a separate transition-enthalpy term accounts for melting."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Heating curve: pure hypothetical substance, fixed P",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      102,
      210
     ],
     "P1": [
      102,
      60
     ],
     "P2": [
      102,
      60
     ],
     "P3": [
      565,
      60
     ],
     "P4": [
      102,
      78
     ],
     "P5": [
      164.4,
      118
     ],
     "P6": [
      164.4,
      118
     ],
     "P7": [
      414,
      118
     ],
     "P8": [
      414,
      118
     ],
     "P9": [
      518,
      158
     ],
     "P10": [
      102,
      78
     ],
     "P11": [
      164.4,
      118
     ],
     "P12": [
      414,
      118
     ],
     "P13": [
      518,
      158
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P4P5",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P6P7",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P8P9",
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
       102,
       41
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       164.4,
       41
      ],
      "text": "1.2",
      "col": 0
     },
     {
      "at": [
       414,
       41
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       518,
       41
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       72,
       78
      ],
      "text": "-20",
      "col": 0
     },
     {
      "at": [
       72,
       118
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       72,
       158
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       90,
       219
      ],
      "text": "T (°C)",
      "col": 0
     },
     {
      "at": [
       551,
       26
      ],
      "text": "Heat (kJ)",
      "col": 0
     },
     {
      "at": [
       315,
       139
      ],
      "text": "Melting: 4.8 kJ",
      "col": 1
     },
     {
      "at": [
       476,
       189
      ],
      "text": "Warm liquid",
      "col": 1
     },
     {
      "at": [
       171,
       83
      ],
      "text": "Warm solid",
      "col": 1
     }
    ],
    "circles": [
     {
      "c": "P10",
      "r": 4,
      "col": 1
     },
     {
      "c": "P11",
      "r": 4,
      "col": 1
     },
     {
      "c": "P12",
      "r": 4,
      "col": 1
     },
     {
      "c": "P13",
      "r": 4,
      "col": 1
     }
    ]
   }
  ]
 },
 {
  "code": "6.6",
  "name": "Introduction to Enthalpy of Reaction",
  "skill": "s6",
  "teach": [
   "At constant pressure with only pressure-volume work, the heat of a reaction equals its enthalpy change. A thermochemical equation specifies both stoichiometry and the energy for one stoichiometric reaction amount. Suppose the hypothetical equation 2A + B → 2P has ΔH = -160 kJ as written: consuming 2 mol A and 1 mol B to form 2 mol P releases 160 kJ. Consuming 0.50 mol A with excess B corresponds to one-quarter of that amount, so q = -40 kJ. The coefficient matters: -160 kJ is not automatically the heat per mole of A.",
   "Convert measured mass to moles before using the thermochemical ratio, and use the limiting reactant when more than one starting amount is supplied. For A + 2B → P with ΔH = -90 kJ as written, 0.40 mol A and 0.50 mol B permit only 0.25 reaction amounts: B limits, producing 0.25 mol P and releasing 22.5 kJ. Physical-state labels are part of the equation because forming liquid and gaseous products can have different enthalpy changes. Reversing the equation reverses ΔH; multiplying every coefficient multiplies ΔH by the same factor."
  ],
  "boards": [
   [
    "2A + B → 2P; ΔH = -160 kJ as written",
    "0.50 mol A uses 0.50/2 reaction amounts",
    "q = (0.50/2) × (-160) = -40 kJ",
    "Match the named species to its coefficient"
   ],
   [
    "A + 2B → P; ΔH = -90 kJ as written",
    "Available: A 0.40 mol; B 0.50 mol",
    "B permits only 0.25 reaction amounts",
    "q = 0.25 × (-90) = -22.5 kJ"
   ]
  ],
  "eqs": [
   "Reaction amount = moles of a consumed reactant / its coefficient",
   "q = min(nA/1, nB/2) × ΔH = -22.5 kJ"
  ],
  "questions": [
   [
    "For 2A + B → 2P, ΔH = -200 kJ as written. What heat accompanies consumption of 0.50 mol A with excess B at constant pressure?",
    "-50 kJ",
    "-100 kJ",
    "-400 kJ",
    "The extent is 0.50/2 = 0.25 of the stated reaction amount, giving 0.25 × (-200) = -50 kJ."
   ],
   [
    "For A → 2P, ΔH = +60 kJ as written. What heat is absorbed when 0.30 mol P forms at constant pressure?",
    "+9.0 kJ",
    "+18 kJ",
    "+200 kJ",
    "Formation of 0.30 mol P corresponds to 0.30/2 = 0.15 reaction amounts, requiring 0.15 × 60 = 9.0 kJ."
   ],
   [
    "A hypothetical 1:1 reaction releases 75 kJ per mole of A consumed. A has molar mass 50 g/mol. What is q when 20 g A reacts completely?",
    "-30 kJ",
    "-1500 kJ",
    "+30 kJ",
    "Twenty grams is 20/50 = 0.40 mol; release means q = -0.40 × 75 = -30 kJ."
   ],
   [
    "For A + 2B → P, ΔH = -120 kJ as written. Starting with 0.40 mol A and 0.60 mol B, what is q on complete reaction?",
    "-36 kJ",
    "-48 kJ",
    "-72 kJ",
    "B limits at 0.60/2 = 0.30 reaction amounts, so the released heat is 0.30 × (-120) = -36 kJ."
   ],
   [
    "For A + 2B → P, 0.40 mol A and 0.60 mol B are supplied. Which reactant limits complete conversion?",
    "Species B",
    "Species A",
    "Both are exactly stoichiometric",
    "The available A permits 0.40 reaction amounts, but B permits only 0.30, so B is limiting."
   ],
   [
    "A reaction releases 45 kJ per mole of A consumed in a 1:1 process. How many moles A must react to release 18 kJ?",
    "0.40 mol",
    "2.5 mol",
    "810 mol",
    "The required amount is 18/45 = 0.40 mol, using the magnitude of released heat for the amount calculation."
   ],
   [
    "When does q at constant pressure equal the reaction enthalpy change in the usual thermochemistry model?",
    "When only pressure-volume work is involved",
    "Regardless of any electrical work or other energy transfer",
    "Only when no atoms react",
    "The equality assumes constant pressure and no other work modes, as in the usual introductory reaction calorimetry model."
   ],
   [
    "Why are physical-state labels required for a precise thermochemical equation?",
    "Different phases have different enthalpies",
    "The labels change the element identities",
    "Liquid and gas products always have identical enthalpy",
    "The energy balance depends on the specific initial and final states, including whether a substance is solid, liquid or gas."
   ],
   [
    "A thermochemical equation has ΔH = -84 kJ. Every coefficient is doubled. What is the new ΔH?",
    "-168 kJ",
    "-42 kJ",
    "+84 kJ",
    "Doubling the entire reaction doubles the amount transformed and therefore doubles the enthalpy change."
   ],
   [
    "A thermochemical equation has ΔH = +72 kJ. What is ΔH for the exact reverse with unchanged coefficients?",
    "-72 kJ",
    "+72 kJ",
    "+144 kJ",
    "Reversal exchanges initial and final states, giving the opposite sign for the same energy magnitude."
   ],
   [
    "For 3A → P, ΔH = -150 kJ as written. What heat is released per mole of A consumed?",
    "50 kJ per mol A",
    "150 kJ per mol A",
    "450 kJ per mol A",
    "The stated 150 kJ release consumes 3 mol A, so the magnitude per mole of A is 150/3 = 50 kJ."
   ],
   [
    "An experiment measures q(reaction) = -2.4 kJ after 0.060 mol reacts in a 1:1 process. What is the molar enthalpy?",
    "-40 kJ/mol",
    "-0.144 kJ/mol",
    "+40 kJ/mol",
    "Divide the signed heat by the amount: -2.4/0.060 = -40 kJ/mol for the specified 1:1 process."
   ]
  ],
  "check": [
   "For 2A → P with ΔH = -100 kJ as written, what is q for 0.80 mol A consumed at constant pressure?",
   "-40 kJ",
   "-80 kJ",
   "+40 kJ",
   "The reaction amount is 0.80/2 = 0.40, so q = 0.40 × (-100) = -40 kJ."
  ]
 },
 {
  "code": "6.7",
  "name": "Bond Enthalpies",
  "skill": "s7",
  "teach": [
   "Breaking a covalent bond into separated gas-phase atoms requires energy; forming that bond from the atoms releases energy. To estimate a gas-phase reaction enthalpy using average bond enthalpies, add the costs of bonds broken and subtract the energy released by bonds formed. In a hypothetical X2 + Y2 → 2XY model, let X–X, Y–Y and X–Y bond enthalpies be 300, 200 and 280 kJ/mol of bonds. Break one X–X and one Y–Y bond, costing 500 kJ per reaction amount; form two X–Y bonds, releasing 560 kJ. The estimate is 500 - 560 = -60 kJ. Bond breaking alone does not release the reaction heat.",
   "Count bonds from structures and coefficients before substituting values. Two molecules of XY contain two X–Y bonds, not one. For hydrogenation H2C=CH2 + H2 → H3C–CH3, four C–H bonds occur on each side and cancel in the formal bond-energy accounting. The net inventory is one C=C and one H–H broken, with one C–C and two C–H formed. Average bond enthalpies are estimates because a bond type has somewhat different energies in different molecular environments. Gas-phase bond data also do not automatically include the energy of condensing a product to a liquid; phase changes need separate treatment."
  ],
  "boards": [
   [
    "Hypothetical X2 + Y2 → 2XY, all gases",
    "Broken: 300 + 200 = 500 kJ",
    "Formed: 2 × 280 = 560 kJ",
    "Estimated ΔH = 500 - 560 = -60 kJ"
   ],
   [
    "Hydrogenation: C=C + H–H → C–C + 2 C–H",
    "Four C–H bonds cancel in formal accounting",
    "Use bond counts and reaction coefficients",
    "Average gas-phase bonds give an estimate"
   ]
  ],
  "eqs": [
   "ΔHestimated = Σ(bond enthalpies broken) - Σ(bond enthalpies formed)",
   "Net hydrogenation estimate: D(C=C) + D(H–H) - D(C–C) - 2D(C–H)"
  ],
  "questions": [
   [
    "What sign describes the energy required to break an isolated gas-phase covalent bond into separated atoms?",
    "Positive",
    "Negative",
    "Always zero",
    "Separating the bonded atoms requires energy input; release occurs in the reverse bond-formation process."
   ],
   [
    "What happens energetically when a covalent bond forms from separated gas-phase atoms?",
    "Energy is released",
    "Energy must always be absorbed",
    "The atoms lose their identities",
    "Bond formation lowers the energy relative to separated atoms and releases the corresponding bond energy."
   ],
   [
    "A hypothetical gas reaction requires 450 kJ to break its reactant bonds and releases 620 kJ on forming product bonds. What is the estimated ΔH?",
    "-170 kJ",
    "+170 kJ",
    "+1070 kJ",
    "Subtract the energy released on bond formation from the bond-breaking cost: 450 - 620 = -170 kJ."
   ],
   [
    "For hypothetical X2 + Y2 → 2XY gases, D(X–X) = 250, D(Y–Y) = 150 and D(X–Y) = 230 kJ/mol. What is estimated ΔH as written?",
    "-60 kJ",
    "+170 kJ",
    "+60 kJ",
    "Break one bond of each reactant type and form two XY bonds: 250 + 150 - 2 × 230 = -60 kJ."
   ],
   [
    "For hypothetical 2XY → X2 + Y2 gases, D(X–X) = 250, D(Y–Y) = 150 and D(X–Y) = 230 kJ/mol. What is estimated ΔH as written?",
    "+60 kJ",
    "-60 kJ",
    "+860 kJ",
    "Two XY bonds cost 460 kJ to break, while forming X2 and Y2 releases 400 kJ, leaving +60 kJ."
   ],
   [
    "Why do average bond enthalpies give approximate reaction enthalpies?",
    "The same bond type varies with molecular environment",
    "Energy conservation fails for molecules",
    "Bond counts are never relevant",
    "Tabulated average bond values combine environments whose exact bond energies differ, so the resulting reaction estimate is approximate."
   ],
   [
    "In X2 + Y2 → 2XY, how many moles of X–Y bonds form per stoichiometric reaction amount?",
    "2 mol",
    "1 mol",
    "4 mol",
    "The coefficient two specifies two moles of XY molecules, each with one X–Y bond."
   ],
   [
    "In H2C=CH2 + H2 → H3C–CH3, which net bond inventory is appropriate for an average-bond estimate?",
    "Break C=C and H–H; form C–C and two C–H",
    "Break only H–H; form no bonds",
    "Break two C=C; form one C–H",
    "The four pre-existing C–H bonds cancel in formal accounting, leaving C=C plus H–H replaced by C–C plus two C–H."
   ],
   [
    "Why can a gas-phase bond estimate differ from a reaction enthalpy whose product is liquid?",
    "It omits the product condensation contribution unless added",
    "A liquid contains no bonds",
    "The phase label never affects enthalpy",
    "Gas-phase bond accounting does not by itself include changing gaseous product into liquid, which has its own enthalpy change."
   ],
   [
    "A hypothetical gas reaction breaks two bonds of 180 kJ/mol each and forms three bonds of 150 kJ/mol each. What is estimated ΔH?",
    "-90 kJ",
    "+90 kJ",
    "-30 kJ",
    "The breaking cost is 2 × 180 = 360 kJ and formation releases 3 × 150 = 450 kJ, giving -90 kJ."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Bond-energy accounting: count bonds first",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      335,
      162
     ],
     "P1": [
      390,
      162
     ]
    },
    "hide": "P0P1",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       105,
       168
      ],
      "text": "X–X",
      "col": 0
     },
     {
      "at": [
       265,
       168
      ],
      "text": "Y–Y",
      "col": 0
     },
     {
      "at": [
       485,
       168
      ],
      "text": "2 X–Y",
      "col": 0
     },
     {
      "at": [
       105,
       130
      ],
      "text": "300 kJ",
      "col": 1
     },
     {
      "at": [
       265,
       130
      ],
      "text": "200 kJ",
      "col": 1
     },
     {
      "at": [
       485,
       130
      ],
      "text": "560 kJ",
      "col": 2
     },
     {
      "at": [
       182,
       200
      ],
      "text": "Break: cost",
      "col": 1
     },
     {
      "at": [
       483,
       200
      ],
      "text": "Form: release",
      "col": 2
     },
     {
      "at": [
       320,
       61
      ],
      "text": "Hypothetical gas model: 500 - 560 = -60 kJ",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "6.8",
  "name": "Enthalpy of Formation",
  "skill": "s8",
  "teach": [
   "Standard enthalpy of formation, ΔHf°, refers to forming one mole of a substance from its elements in their reference states under the specified standard conditions. For water liquid at 298.15 K, the equation is H2(g) + (1/2)O2(g) → H2O(l); fractional coefficients are acceptable because exactly one mole of the named product is formed. An element in its reference state has ΔHf° = 0 by convention. This is not a claim that its absolute internal energy is zero. O2(g), rather than isolated O atoms or ozone, is the oxygen reference at ordinary reference temperature. Standard pressure is 1 bar; a table must also specify temperature, commonly 298.15 K.",
   "Calculate reaction enthalpy from formation values by summing coefficient-weighted products and subtracting coefficient-weighted reactants. Suppose a hypothetical reaction A + 2B → P has supplied ΔHf° values A = -20, B = -30 and P = -140 kJ/mol. Products contribute -140 kJ, reactants contribute -20 + 2(-30) = -80 kJ, and ΔH° = -140 - (-80) = -60 kJ as written. Keep every coefficient, minus sign and physical state. If a product changes phase, use the value for the stated phase; subtracting a negative reactant sum increases the result."
  ],
  "boards": [
   [
    "Formation equation makes exactly one mole",
    "H2(g) + (1/2)O2(g) → H2O(l)",
    "Elements in reference states: ΔHf° = 0",
    "Standard pressure 1 bar; specify temperature"
   ],
   [
    "Hypothetical A + 2B → P",
    "Formation values: A -20; B -30; P -140 kJ/mol",
    "Reactants: -20 + 2(-30) = -80 kJ",
    "ΔH° = -140 - (-80) = -60 kJ"
   ]
  ],
  "eqs": [
   "ΔH°reaction = ΣνΔHf°(products) - ΣνΔHf°(reactants)",
   "-140 - [-20 + 2(-30)] = -60 kJ"
  ],
  "questions": [
   [
    "A standard formation equation must produce how much of the named substance?",
    "Exactly 1 mol",
    "Exactly 2 mol",
    "Any amount without rescaling the enthalpy",
    "The molar formation enthalpy is defined for one mole of the specified substance formed from reference-state elements."
   ],
   [
    "Which is a standard formation equation for one mole of H2O(l) at 298.15 K?",
    "H2(g) + (1/2)O2(g) → H2O(l)",
    "2H2(g) + O2(g) → 2H2O(l)",
    "H2O(g) → H2O(l)",
    "The correct equation uses elemental reference forms and produces exactly one mole of liquid water."
   ],
   [
    "What is ΔHf° of O2(g) in its elemental reference state at 298.15 K?",
    "0 kJ/mol",
    "Always +1 kJ/mol",
    "Its O=O bond enthalpy",
    "Formation enthalpy of a reference-state element is zero by convention; its bond dissociation energy is a different quantity."
   ],
   [
    "Does ΔHf° = 0 for a reference-state element mean its absolute internal energy is zero?",
    "No; it is a reference convention for formation changes",
    "Yes; its particles contain no energy",
    "Yes; it must be at absolute zero",
    "The zero defines a reference for enthalpy differences, not an absence of kinetic or potential energy in the material."
   ],
   [
    "For hypothetical A → B, ΔHf°(A) = -40 and ΔHf°(B) = -100 kJ/mol. What is ΔH° as written?",
    "-60 kJ",
    "+60 kJ",
    "-140 kJ",
    "Products minus reactants gives -100 - (-40) = -60 kJ for this one-to-one reaction."
   ],
   [
    "For hypothetical 2A → B, ΔHf°(A) = -25 and ΔHf°(B) = -90 kJ/mol. What is ΔH° as written?",
    "-40 kJ",
    "-65 kJ",
    "+40 kJ",
    "Include the reactant coefficient: -90 - 2(-25) = -90 + 50 = -40 kJ."
   ],
   [
    "For hypothetical A + B → P, the product formation sum is -180 kJ and the reactant formation sum is -70 kJ. What is ΔH°?",
    "-110 kJ",
    "-250 kJ",
    "+110 kJ",
    "Subtract the signed reactant sum: -180 - (-70) = -110 kJ, not the sum of the two negative values."
   ],
   [
    "Why must formation-enthalpy data match the physical states in the reaction?",
    "Different phases can have different formation enthalpies",
    "Every phase has the same formation enthalpy",
    "Only gas-phase equations need to be balanced",
    "Formation values refer to specified states, so substituting a liquid value for a gas changes the energy balance."
   ],
   [
    "Does the standard-state symbol alone require a temperature of exactly 298.15 K?",
    "No; the temperature must be specified separately",
    "Yes; no other temperature can have a standard state",
    "Yes; it means 0°C by definition",
    "Standard pressure and reference conventions do not fix a unique temperature; 298.15 K is a common tabulation temperature."
   ],
   [
    "For hypothetical A + 2B → P, ΔHf° values are A = -10, B = -20 and P = -130 kJ/mol. What is ΔH° as written?",
    "-80 kJ",
    "-100 kJ",
    "-180 kJ",
    "The reactant sum is -10 + 2(-20) = -50 kJ; subtracting it from -130 gives -80 kJ."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Formation route: subtract the reactant sum",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      115,
      182
     ],
     "P1": [
      538,
      182
     ],
     "P2": [
      175,
      177
     ],
     "P3": [
      175,
      123
     ],
     "P4": [
      478,
      177
     ],
     "P5": [
      478,
      75
     ],
     "P6": [
      115,
      118
     ],
     "P7": [
      237,
      118
     ],
     "P8": [
      421,
      70
     ],
     "P9": [
      543,
      70
     ],
     "P10": [
      253,
      118
     ],
     "P11": [
      402,
      70
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P2P3",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P4P5",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P6P7",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P8P9",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P10P11",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       328,
       204
      ],
      "text": "Elemental reference states",
      "col": 0
     },
     {
      "at": [
       175,
       97
      ],
      "text": "A + 2B: -80 kJ",
      "col": 1
     },
     {
      "at": [
       479,
       49
      ],
      "text": "P: -140 kJ",
      "col": 2
     },
     {
      "at": [
       323,
       150
      ],
      "text": "Hypothetical",
      "col": 0
     },
     {
      "at": [
       323,
       130
      ],
      "text": "formation sums",
      "col": 0
     },
     {
      "at": [
       330,
       75
      ],
      "text": "ΔH = -60 kJ",
      "col": 3
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "9": {
    "t": "board",
    "title": "Read the thermochemical data",
    "lines": [
     "A + 2B → P",
     "ΔHf° in kJ/mol: A -10; B -20; P -130",
     "Find ΔH° for the equation as written."
    ],
    "box": true
   }
  }
 },
 {
  "code": "6.9",
  "name": "Hess’s Law",
  "skill": "s9",
  "teach": [
   "Hess’s law lets a thermochemical target be built from other equations. Add enthalpy changes when adding equations; reverse the sign when reversing an equation; multiply the enthalpy when multiplying every coefficient. For hypothetical isomers, A → B has ΔH = +25 kJ and B → C has ΔH = -70 kJ. Adding cancels B and gives A → C with ΔH = -45 kJ. This is energy bookkeeping between the same endpoints; the sequence used for calculation does not have to be the actual molecular mechanism.",
   "Arrange the equations to obtain the target species and coefficients, then check the sum explicitly. Suppose A → B has ΔH = +30 kJ and C → B has ΔH = -20 kJ. To obtain A → C, reverse the second equation to B → C with +20 kJ. The sum is +50 kJ. A common mistake is reversing the arrow without reversing the energy sign, or canceling a gas against a liquid with the same formula. Those are different states; a phase-change equation is needed to connect them. Use a closed energy cycle as a check: a route back to the exact starting state should sum to zero."
  ],
  "boards": [
   [
    "A → B: +25 kJ",
    "B → C: -70 kJ",
    "Cancel B: A → C, -45 kJ",
    "The calculation path need not be the mechanism"
   ],
   [
    "A → B: +30 kJ; C → B: -20 kJ",
    "Reverse second: B → C, +20 kJ",
    "Sum: A → C, +50 kJ",
    "Cancel only identical species in identical states"
   ]
  ],
  "eqs": [
   "ΔH(A → C) = +25 + (-70) = -45 kJ",
   "ΔH(A → C) = +30 - (-20) = +50 kJ"
  ],
  "questions": [
   [
    "For hypothetical isomers, A → B has ΔH = +40 kJ and B → C has ΔH = -95 kJ. What is ΔH for A → C?",
    "-55 kJ",
    "+55 kJ",
    "-135 kJ",
    "The equations add with B canceling, so their enthalpies add: +40 + (-95) = -55 kJ."
   ],
   [
    "For hypothetical isomers, A → B has ΔH = +35 kJ and C → B has ΔH = -15 kJ. What is ΔH for A → C?",
    "+50 kJ",
    "+20 kJ",
    "-50 kJ",
    "Reverse C → B to B → C and change its sign to +15 kJ; add +35 and +15 to obtain +50 kJ."
   ],
   [
    "A → B has ΔH = -24 kJ. What is ΔH for 3B → 3A?",
    "+72 kJ",
    "-72 kJ",
    "+8 kJ",
    "Reversal changes -24 to +24, and tripling the equation multiplies that value by three to give +72 kJ."
   ],
   [
    "A → B has ΔH = -90 kJ. What is ΔH for (1/2)A → (1/2)B?",
    "-45 kJ",
    "-180 kJ",
    "+45 kJ",
    "Scaling every coefficient by one-half scales the enthalpy by one-half while preserving the direction and sign."
   ],
   [
    "What rule applies when two thermochemical equations are added?",
    "Their enthalpy changes add with their signs",
    "Their enthalpy magnitudes always multiply",
    "Only the larger enthalpy is retained",
    "Energy accounting follows the algebraic sum of the processes, including both endothermic and exothermic signs."
   ],
   [
    "Can H2O(g) and H2O(l) be canceled directly in a Hess-law sum as if they were identical states?",
    "No; their phase difference requires accounting",
    "Yes; phase labels never affect energy",
    "Yes; only their atom counts matter",
    "They have the same chemical formula but different enthalpies; a connecting phase change must be included when needed."
   ],
   [
    "Must a Hess-law calculation sequence be the actual microscopic mechanism?",
    "No",
    "Yes, every step must occur in that order",
    "Yes, every equation must be elementary",
    "The construction accounts for the same net transformation and energy difference without proving a molecular pathway."
   ],
   [
    "A closed energy cycle has steps +20 kJ, -65 kJ and an unknown final step returning to the exact starting state. What is the missing ΔH?",
    "+45 kJ",
    "-45 kJ",
    "+85 kJ",
    "Returning to the same state requires a net zero: +20 - 65 + 45 = 0 kJ."
   ],
   [
    "A student reverses an equation but keeps its original ΔH sign. What correction is needed?",
    "Reverse the sign of ΔH",
    "Change all coefficients to zero",
    "Keep the sign but change kJ to mol",
    "Reversing a process exchanges its initial and final states, so its enthalpy change must also reverse sign."
   ],
   [
    "Add the hypothetical equations A + X → B and B → C + X. Which net equation results?",
    "A → C",
    "A + X → C",
    "A → B + C",
    "B and X occur equally on opposite sides of the sum and cancel, leaving A → C."
   ]
  ],
  "check": [
   "For hypothetical isomers, A → B has ΔH = -18 kJ and B → C has ΔH = +42 kJ. What is ΔH for C → A?",
   "-24 kJ",
   "+24 kJ",
   "-60 kJ",
   "The forward sum A → C is +24 kJ. Reversing that net process gives C → A with -24 kJ."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Hess’s law: two routes, same endpoints",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      130,
      101
     ],
     "P1": [
      300,
      189
     ],
     "P2": [
      339,
      189
     ],
     "P3": [
      510,
      101
     ],
     "P4": [
      136,
      74
     ],
     "P5": [
      500,
      74
     ]
    },
    "hide": "P0P1P2P3P4P5",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P2P3",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       114,
       89
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       320,
       197
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       526,
       89
      ],
      "text": "C",
      "col": 3
     },
     {
      "at": [
       167,
       166
      ],
      "text": "+25 kJ",
      "col": 1
     },
     {
      "at": [
       473,
       166
      ],
      "text": "-70 kJ",
      "col": 2
     },
     {
      "at": [
       320,
       44
      ],
      "text": "Net A → C: -45 kJ",
      "col": 3
     }
    ],
    "circles": []
   },
   null
  ],
  "checkPic": {
   "t": "board",
   "title": "Read the thermochemical data",
   "lines": [
    "A → B: ΔH = -18 kJ",
    "B → C: ΔH = +42 kJ",
    "Find ΔH for C → A."
   ],
   "box": true
  },
  "qpics": {
   "0": {
    "t": "board",
    "title": "Read the thermochemical data",
    "lines": [
     "A → B: ΔH = +40 kJ",
     "B → C: ΔH = -95 kJ",
     "Find ΔH for A → C."
    ],
    "box": true
   },
   "1": {
    "t": "board",
    "title": "Read the thermochemical data",
    "lines": [
     "A → B: ΔH = +35 kJ",
     "C → B: ΔH = -15 kJ",
     "Find ΔH for A → C."
    ],
    "box": true
   },
   "3": {
    "t": "board",
    "title": "Read the thermochemical data",
    "lines": [
     "A → B: ΔH = -90 kJ",
     "Find ΔH for (1/2)A → (1/2)B."
    ],
    "box": true
   }
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Define the system and track signs before calculating. Use mcΔT for temperature changes and nΔHtransition for phase changes, adding every required segment and every relevant heat reservoir. Match units to mass, moles or whole-object heat capacity. For reaction heat, balance the equation, find the limiting reaction amount and preserve physical states. Bond estimates use broken minus formed; formation data use coefficient-weighted products minus reactants. Hess’s law adds signed energy changes while equations are reversed or scaled consistently. Check a result against energy conservation and the stated assumptions. Neither a temperature rise nor an energy diagram by itself proves a reaction rate.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-chem-thermochemistry","subject":"science","level":5,"grade":9,"standard":"AP Chemistry, Unit 6","title":"Thermochemistry","goal":"Track heat and enthalpy using system boundaries, calorimetry, phase-change data, reaction stoichiometry and thermochemical equations.","points":20},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
