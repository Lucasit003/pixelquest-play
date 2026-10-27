/* Original course unit. Review record: docs/review/lessons/high-completion/ap-physics1-u8-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "8.1",
  "name": "Internal Structure and Density",
  "skill": "s1",
  "boardTitle": "Structure and density",
  "teach": [
   "Fluids include liquids and gases: they continue to deform under a sustained shear influence instead of keeping a fixed shape. In typical liquids, particles remain close together but can change neighbors; in a dilute gas they are much farther apart on average. Solids usually resist shear and keep a shape while their particles can still vibrate. Particle interactions help explain these differences. This model does not say all liquids and gases have identical properties or that particles stop moving in a solid.",
   "Average density is ρ=m/V. Use the mass of the sample and the volume it occupies, with SI unit kg/m³. An original sample of mass 6kg and volume 0.003m³ has density 2000kg/m³. The same uniform material at the same conditions has twice the mass in twice the volume, so density stays fixed when merely splitting or combining equal-condition samples. Density is not weight per area, which involves a different kind of quantity.",
   "An ideal fluid in these activities is incompressible and has no viscosity. Incompressible means a fixed amount does not change volume under pressure in the model; nonviscous means internal shear resistance is neglected. These assumptions do not make the fluid massless or immune to gravity. Real gases often compress substantially: halving the volume of a sealed sample doubles its density at fixed mass. The compressible example must not be combined with the constant-density assumption without explanation.",
   "Measure density by a balance and a suitable volume measurement. A nonporous 120g object fully submerged without trapped air raises a cylinder from 50 to 90mL, so its volume 40mL gives density 3g/mL. A mass-versus-volume graph for one uniform fluid has slope ρ. Use consistent units:1g/cm³=1000kg/m³ and 1L=0.001m³. For mixtures, divide total mass by actual final volume; only add the initial volumes when that is explicitly justified. Repeat readings and consider meniscus, calibration and bubble errors."
  ],
  "eqs": [
   "Fluid: sustained shear produces continued deformation",
   "ρ=m/V=6/0.003=2000kg/m³",
   "Fixed gas mass, volume×½ ⇒ density×2",
   "Displaced volume=90−50=40mL; ρ=120/40=3g/mL"
  ],
  "boards": [
   [
    "Liquids and gases can flow",
    "Particle motion and interactions affect properties",
    "Fluid does not mean massless"
   ],
   [
    "Density = mass / volume",
    "SI density unit: kg/m³",
    "Uniform material: mass scales with volume"
   ],
   [
    "Ideal fluid: incompressible and nonviscous",
    "These are model assumptions",
    "A compressible gas can change density"
   ],
   [
    "Measure mass and occupied volume",
    "Use volume change for full displacement",
    "Check units, assumptions and uncertainty"
   ]
  ],
  "questions": [
   [
    "Why are both liquids and gases classified as fluids?",
    "They flow under sustained shear rather than retaining a fixed shape",
    "They always have the same density",
    "They contain no interacting particles",
    "A fluid's response to a shearing influence distinguishes it from a solid in the usual continuum model. Being a fluid does not fix a particular density or remove particle interactions."
   ],
   [
    "How do particles in a typical liquid differ from those in a typical dilute gas?",
    "Liquid particles are close together but can rearrange, while gas particles are much farther apart on average",
    "All liquid particles are motionless at fixed lattice sites",
    "Gas particles have no mass",
    "Liquids remain mobile despite close particle spacing. Dilute gases have larger average separations, and particles in either phase still have mass and motion."
   ],
   [
    "Why does a typical liquid keep a nearly fixed volume under ordinary modest pressure changes?",
    "Its particles are already close together and resist further compression",
    "Its particles cannot move at all",
    "Its density must equal the density of every solid",
    "Low compressibility concerns changes in particle spacing, not a ban on flow. It does not imply that all materials share one density."
   ],
   [
    "What is average density?",
    "Mass divided by occupied volume",
    "Weight divided by surface area",
    "Volume divided by mass",
    "Density compares mass with three-dimensional volume. Weight per area instead describes a pressure-like quantity; the inverse ratio is specific volume."
   ],
   [
    "Which is the SI unit of mass density?",
    "kg/m³",
    "N/m²",
    "kg/m",
    "Mass per volume gives kilograms per cubic meter. Pascals measure pressure, while kilograms per meter is mass per length."
   ],
   [
    "What assumptions define the ideal fluid used in this unit?",
    "Incompressible and nonviscous",
    "Massless and unaffected by gravity",
    "Always a gas with changing density",
    "The ideal model keeps density fixed and omits viscous resistance. It still has mass, can carry momentum and responds to gravity."
   ],
   [
    "What does viscosity describe in a fluid?",
    "Internal resistance associated with relative motion of neighboring layers",
    "Mass per cubic meter",
    "The pressure reference chosen by an instrument",
    "Viscosity concerns shear-related resistance, while density concerns mass per volume. Neither is set by an instrument's pressure zero."
   ],
   [
    "Two samples of the same homogeneous liquid are at the same conditions, with one sample twice the volume. How do their masses compare?",
    "The larger sample has twice the mass",
    "They must have equal masses",
    "The larger sample has half the mass",
    "At fixed density, mass is proportional to volume. Changing the amount does not change the homogeneous material's density."
   ],
   [
    "If a sealed gas sample is compressed to half its original volume without losing mass, what happens to its average density?",
    "It doubles",
    "It halves",
    "It stays fixed because every gas is incompressible",
    "Fixed mass in half the volume gives twice the mass per volume. This is a compressible-gas example, unlike the incompressible ideal-flow assumption."
   ],
   [
    "How can one determine an irregular nonporous object's volume using liquid displacement?",
    "Fully submerge it and measure the liquid-volume increase, avoiding trapped air and absorption",
    "Measure its mass and call that number its volume without units",
    "Use the container's total volume regardless of the level change",
    "The displaced volume equals the submerged object's volume under the stated conditions. Air bubbles, incomplete immersion or absorption can bias that measurement."
   ],
   [
    "For samples of one uniform fluid at fixed conditions, what is the slope of a mass-versus-volume graph?",
    "Density",
    "The reciprocal of density",
    "Pressure",
    "The line m=ρV has slope ρ when mass is vertical and volume horizontal. Reversing the axes would reverse the ratio."
   ],
   [
    "When combining two samples, why must a density calculation state whether volumes add?",
    "Mixing can change total volume, so combined mass alone does not fix the result",
    "Mass is never conserved during mixing",
    "An arithmetic average of densities is always exact for every mixture",
    "The correct average density uses total mass divided by actual final volume. A simple volume sum is an assumption, not a universal mixing law."
   ],
   [
    "A uniform sample has mass 6kg and volume 0.003m³. What is its density in kg/m³?",
    "2000",
    "0.018",
    "0.0005",
    "The density must reproduce the given mass when multiplied by the volume. Multiplying or reversing the ratio has different units and does not satisfy that check."
   ],
   [
    "A uniform sample has mass 4kg and volume 0.005m³. What is its density in kg/m³?",
    "800",
    "0.02",
    "0.00125",
    "The density must reproduce the given mass when multiplied by the volume. Multiplying or reversing the ratio has different units and does not satisfy that check."
   ],
   [
    "A uniform sample has mass 1.5kg and volume 0.002m³. What is its density in kg/m³?",
    "750",
    "0.003",
    "0.0013333333",
    "The density must reproduce the given mass when multiplied by the volume. Multiplying or reversing the ratio has different units and does not satisfy that check."
   ],
   [
    "A uniform fluid has density 800kg/m³ and volume 0.005m³. What is its mass in kilograms?",
    "4",
    "160000",
    "0.00000625",
    "A density 800 means 800kg in each cubic meter. The smaller volume 0.005m³ contains 4kg; dividing density by volume gives the wrong dimensions."
   ],
   [
    "A uniform liquid sample has mass 3kg and density 750kg/m³. What is its volume in cubic meters?",
    "0.004",
    "2250",
    "250",
    "A volume 0.004m³ contains 750×0.004=3kg. The product of mass and density is not volume."
   ],
   [
    "A sample density is 2g/cm³. What is that density in kg/m³?",
    "2000",
    "2",
    "0.002",
    "One gram is 0.001kg and one cubic centimeter is 0.000001m³. Their ratio is 1000kg/m³ for each g/cm³, so the value becomes 2000."
   ],
   [
    "A liquid volume is 2 liters. What is that volume in cubic meters?",
    "0.002",
    "2",
    "2000",
    "One liter is 0.001m³, so two liters are 0.002m³. Converting volume requires its own unit relationship, not a length factor alone."
   ],
   [
    "A nonporous object of mass 120g is fully submerged without trapped air or absorption. A cylinder reading rises from 50mL to 90mL. What is its average density in g/mL?",
    "3",
    "1.3333333",
    "2.4",
    "The object displaces 40mL, not the final 90mL or the initial 50mL. Mass 120g divided by displaced volume 40mL gives 3g/mL."
   ],
   [
    "A sealed gas sample initially has density 2kg/m³. It is compressed to one-quarter of its volume with no mass loss. What is its new average density in kg/m³?",
    "8",
    "0.5",
    "2",
    "The same mass occupies one-quarter the volume, so mass per volume increases by 4. The sample is explicitly compressible, not the ideal incompressible liquid model."
   ],
   [
    "Two samples have densities 600 and 1000kg/m³ and equal volumes. Assuming their volumes add without any mass loss, what is the combined density in kg/m³?",
    "800",
    "1600",
    "400",
    "For equal volumes, the total mass is proportional to 600+1000 while total volume is twice one sample volume. The ratio is 800, not the sum of the densities."
   ],
   [
    "Samples have masses 2kg and 6kg and volumes 0.001m³ and 0.003m³. Assuming volumes add with no mass loss, what is combined density in kg/m³?",
    "2000",
    "4000",
    "1000",
    "Total mass 8kg occupies 0.004m³, giving 2000kg/m³. Both initial samples already have this density, providing another consistency check."
   ],
   [
    "A mass-volume graph contains(V=0.002m³, m=1.6kg) and(V=0.005m³, m=4kg) on a line through zero. What density does its slope indicate in kg/m³?",
    "800",
    "480",
    "1.25",
    "The mass change 2.4kg over volume change 0.003m³ gives 800kg/m³, also matching each mass-to-volume ratio. The reciprocal is a different quantity."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Particle-spacing models (schematic)",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      115,
      180
     ],
     "P1": [
      295,
      180
     ],
     "P2": [
      295,
      70
     ],
     "P3": [
      115,
      70
     ],
     "P4": [
      355,
      180
     ],
     "P5": [
      535,
      180
     ],
     "P6": [
      535,
      70
     ],
     "P7": [
      355,
      70
     ],
     "P8": [
      135,
      89
     ],
     "P9": [
      156,
      87
     ],
     "P10": [
      179,
      88
     ],
     "P11": [
      202,
      90
     ],
     "P12": [
      226,
      87
     ],
     "P13": [
      250,
      89
     ],
     "P14": [
      274,
      88
     ],
     "P15": [
      146,
      108
     ],
     "P16": [
      168,
      108
     ],
     "P17": [
      191,
      108
     ],
     "P18": [
      214,
      108
     ],
     "P19": [
      238,
      107
     ],
     "P20": [
      262,
      108
     ],
     "P21": [
      136,
      130
     ],
     "P22": [
      159,
      128
     ],
     "P23": [
      182,
      129
     ],
     "P24": [
      204,
      130
     ],
     "P25": [
      228,
      128
     ],
     "P26": [
      251,
      129
     ],
     "P27": [
      274,
      129
     ],
     "P28": [
      377,
      157
     ],
     "P29": [
      458,
      160
     ],
     "P30": [
      515,
      134
     ],
     "P31": [
      400,
      95
     ],
     "P32": [
      476,
      91
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32",
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
       205,
       202
      ],
      "text": "Typical liquid",
      "col": 0
     },
     {
      "at": [
       445,
       202
      ],
      "text": "Dilute gas",
      "col": 1
     },
     {
      "at": [
       205,
       45
      ],
      "text": "Close and mobile",
      "col": 0
     },
     {
      "at": [
       445,
       45
      ],
      "text": "Widely separated",
      "col": 1
     }
    ],
    "circles": [
     {
      "c": "P8",
      "r": 8,
      "col": 0
     },
     {
      "c": "P9",
      "r": 8,
      "col": 0
     },
     {
      "c": "P10",
      "r": 8,
      "col": 0
     },
     {
      "c": "P11",
      "r": 8,
      "col": 0
     },
     {
      "c": "P12",
      "r": 8,
      "col": 0
     },
     {
      "c": "P13",
      "r": 8,
      "col": 0
     },
     {
      "c": "P14",
      "r": 8,
      "col": 0
     },
     {
      "c": "P15",
      "r": 8,
      "col": 0
     },
     {
      "c": "P16",
      "r": 8,
      "col": 0
     },
     {
      "c": "P17",
      "r": 8,
      "col": 0
     },
     {
      "c": "P18",
      "r": 8,
      "col": 0
     },
     {
      "c": "P19",
      "r": 8,
      "col": 0
     },
     {
      "c": "P20",
      "r": 8,
      "col": 0
     },
     {
      "c": "P21",
      "r": 8,
      "col": 0
     },
     {
      "c": "P22",
      "r": 8,
      "col": 0
     },
     {
      "c": "P23",
      "r": 8,
      "col": 0
     },
     {
      "c": "P24",
      "r": 8,
      "col": 0
     },
     {
      "c": "P25",
      "r": 8,
      "col": 0
     },
     {
      "c": "P26",
      "r": 8,
      "col": 0
     },
     {
      "c": "P27",
      "r": 8,
      "col": 0
     },
     {
      "c": "P28",
      "r": 5,
      "col": 1
     },
     {
      "c": "P29",
      "r": 5,
      "col": 1
     },
     {
      "c": "P30",
      "r": 5,
      "col": 1
     },
     {
      "c": "P31",
      "r": 5,
      "col": 1
     },
     {
      "c": "P32",
      "r": 5,
      "col": 1
     }
    ]
   },
   {
    "t": "figure",
    "title": "A uniform-fluid density experiment",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      120,
      61
     ],
     "P1": [
      535,
      61
     ],
     "P2": [
      120,
      61
     ],
     "P3": [
      120,
      201
     ],
     "P4": [
      120,
      61
     ],
     "P5": [
      120,
      56
     ],
     "P6": [
      276,
      61
     ],
     "P7": [
      276,
      56
     ],
     "P8": [
      510,
      61
     ],
     "P9": [
      510,
      56
     ],
     "P10": [
      115,
      61
     ],
     "P11": [
      120,
      61
     ],
     "P12": [
      115,
      113
     ],
     "P13": [
      120,
      113
     ],
     "P14": [
      115,
      191
     ],
     "P15": [
      120,
      191
     ],
     "P16": [
      120,
      61
     ],
     "P17": [
      510,
      191
     ],
     "P18": [
      276,
      113
     ],
     "P19": [
      510,
      191
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19",
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
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P16P17",
      "col": 0,
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
       27
      ],
      "text": "Volume (L)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Mass (kg)",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       276,
       41
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       97,
       56
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       97,
       108
      ],
      "text": "1.6",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       393,
       210
      ],
      "text": "Slope 0.8 kg/L = 800 kg/m³",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P18",
      "r": 4,
      "col": 0
     },
     {
      "c": "P19",
      "r": 4,
      "col": 0
     }
    ]
   },
   null,
   {
    "t": "setups",
    "title": "Displacement measurement: no bubbles or absorption",
    "head": "Quantity",
    "cols": [
     "Reading"
    ],
    "rows": [
     [
      "Object mass",
      "120 g"
     ],
     [
      "Initial liquid level",
      "50 mL"
     ],
     [
      "Final level, fully immersed",
      "90 mL"
     ]
    ]
   }
  ],
  "qpics": {
   "19": {
    "t": "setups",
    "title": "Fully submerged nonporous object",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Mass",
      "120 g"
     ],
     [
      "Initial / final level",
      "50 / 90 mL"
     ]
    ]
   },
   "21": {
    "t": "setups",
    "title": "Mixture: equal volumes, volumes add",
    "head": "Sample",
    "cols": [
     "Density (kg/m³)"
    ],
    "rows": [
     [
      "First",
      "600"
     ],
     [
      "Second",
      "1000"
     ]
    ]
   },
   "22": {
    "t": "setups",
    "title": "No mass loss; volumes add",
    "head": "Sample",
    "cols": [
     "Mass (kg)",
     "Volume (m³)"
    ],
    "rows": [
     [
      "First",
      "2",
      "0.001"
     ],
     [
      "Second",
      "6",
      "0.003"
     ]
    ]
   },
   "23": {
    "t": "setups",
    "title": "Mass versus volume: line through zero",
    "head": "Volume (m³)",
    "cols": [
     "Mass (kg)"
    ],
    "rows": [
     [
      "0.002",
      "1.6"
     ],
     [
      "0.005",
      "4"
     ]
    ]
   }
  }
 },
 {
  "code": "8.2",
  "name": "Pressure",
  "skill": "s2",
  "boardTitle": "Fluid pressure",
  "teach": [
   "Average pressure is normal force divided by surface area: P=Fperp/A. One pascal is 1N/m². A 60N perpendicular force spread uniformly over 0.02m² gives 3000Pa; doubling the area at the same force halves the pressure. Pressure is a scalar. Its force on an element of a wall is normal to that wall, so different wall orientations give different force directions without making pressure itself a vector. Microscopically, the force on a wall is the collective effect of fluid-particle interactions with that surface; gas collisions provide a familiar momentum-transfer example.",
   "Absolute pressure and gauge pressure use different references. Gauge pressure is the amount above or below a chosen reference, so Pabs=Pref+Pgauge. With atmosphere 100000Pa and gauge reading -20000Pa, absolute pressure is 80000Pa. A negative gauge reading can simply mean below atmospheric pressure. A surface open to the atmosphere has atmospheric absolute pressure and zero gauge pressure relative to that same atmosphere.",
   "For a constant-density fluid at rest in uniform gravity, balancing a vertical column gives P=Psurface+ρgh, where h is vertical depth below that surface. At density 1000kg/m³, g=10m/s² and depth 0.8m, the pressure increase is 8000Pa. The upward pressure-force difference supports the column weight, so a pressure gradient can exist without flow. At the same height in one connected uniform resting fluid, pressures match regardless of vessel width or shape.",
   "An added pressure is transmitted through an ideal confined resting fluid. For massless equal-height hydraulic pistons with equal outside atmospheric pressure, extra input force 40N on area 0.002m² produces pressure increment 20000Pa. On an output piston of area 0.01m², that increment supports extra force 200N. The output moves only 0.01m when the input moves 0.05m, because the same incompressible volume is displaced. Neglecting piston-height effects during the stroke, each ideal work is 2J; no extra energy is created.",
   "A graph of pressure against depth for a uniform static liquid has slope ρg and intercept equal to the surface pressure. A 15000Pa rise over 1.5m gives slope 10000Pa/m; with g=10m/s² this implies density 1000kg/m³. State the pressure reference, measure vertical distance and keep the sensor stationary before interpreting the slope. Compressible gases or varying density require a model beyond a single constant ρ across a large height range."
  ],
  "eqs": [
   "P=Fperp/A=60/0.02=3000Pa",
   "Pabs=100000+(−20000)=80000Pa",
   "(Pbottom−Ptop)A=ρAhg ⇒ ΔP=ρgh=8000Pa",
   "Fout = 200N; dout = 0.01m; work 40×0.05 = 200×0.01 = 2J",
   "Slope=15000/1.5=10000Pa/m; ρ=slope/g=1000"
  ],
  "boards": [
   [
    "Pressure = perpendicular force / area",
    "One pascal = one newton per square meter",
    "Pressure is scalar; wall force is normal"
   ],
   [
    "State the reference pressure",
    "Absolute = reference + gauge",
    "Gauge pressure can be below zero"
   ],
   [
    "Hydrostatic pressure rises with vertical depth",
    "Pressure forces support the liquid weight",
    "Same connected static level: equal pressure"
   ],
   [
    "Added pressure transmits through the ideal fluid",
    "Larger piston area gives larger force",
    "Equal volume displacement preserves ideal work"
   ],
   [
    "Pressure-depth slope = density × gravity",
    "Surface reference sets the intercept",
    "Check density, vertical depth and uncertainty"
   ]
  ],
  "questions": [
   [
    "Which force component determines average pressure on a flat surface?",
    "The component perpendicular to the surface, divided by area",
    "The component parallel to the surface, multiplied by area",
    "The entire object's weight regardless of the surface",
    "Pressure concerns normal force per area. A tangential force instead represents shear and cannot be substituted for the normal component."
   ],
   [
    "What is one pascal?",
    "One newton per square meter",
    "One kilogram per cubic meter",
    "One newton times one meter",
    "The pressure unit follows from force divided by area. Density and work use different combinations of units."
   ],
   [
    "Is pressure a vector because it can cause forces in different directions?",
    "No, pressure is a scalar and the surface normal sets the pressure-force direction",
    "Yes, pressure always points vertically downward",
    "Yes, pressure has the same direction everywhere on a closed object",
    "A scalar pressure at a point produces normal forces on surfaces of different orientations. The force direction is not an intrinsic direction of pressure itself."
   ],
   [
    "For a fluid at rest, in what direction does its pressure force act on a wall element?",
    "Normal to the wall element",
    "Always parallel to the wall",
    "Always vertically upward independent of wall orientation",
    "A resting ordinary fluid has no sustained shear stress in this model. Pressure therefore acts perpendicular to the local surface."
   ],
   [
    "At fixed normal force, how does doubling contact area affect average pressure?",
    "It halves",
    "It doubles",
    "It quadruples",
    "Spreading the same force over twice the area halves force per area. The force itself need not change."
   ],
   [
    "What is gauge pressure relative to a chosen reference?",
    "Absolute pressure minus the reference pressure",
    "Absolute pressure plus every possible reference pressure",
    "The same as density times volume",
    "Gauge pressure measures an excess or deficit from a specified reference. Recover absolute pressure by adding that reference back."
   ],
   [
    "Can gauge pressure be negative relative to atmospheric pressure?",
    "Yes, if absolute pressure is below the atmospheric reference",
    "No, a negative gauge reading always means negative mass",
    "No, reference choices cannot affect a pressure reading",
    "A negative relative reading means below the stated reference. It does not by itself imply negative absolute pressure or negative mass."
   ],
   [
    "In a constant-density liquid at rest under uniform gravity, what determines the pressure increase below a common surface?",
    "Density times gravity times vertical depth",
    "The total liquid volume in the vessel alone",
    "The length of an arbitrary curved path to the surface",
    "Hydrostatic balance depends on the vertical weight per area above a level. Container width or a longer curved route does not replace vertical depth."
   ],
   [
    "Two points lie at the same height in one connected, uniform liquid at rest under gravity. How do their pressures compare?",
    "They are equal",
    "The point in the wider section must have greater pressure",
    "The point in the narrower section must have greater pressure",
    "Hydrostatic equilibrium requires equal pressure at the same level in that connected fluid. Otherwise an unbalanced horizontal pressure force would disturb rest."
   ],
   [
    "Does a hydrostatic pressure gradient necessarily mean the liquid must be flowing?",
    "No, the pressure forces can balance gravity",
    "Yes, any pressure difference proves flow regardless of other forces",
    "Yes, a liquid at rest must have equal pressure at every depth",
    "The pressure increase with depth supplies an upward force that supports the fluid's weight. Net force, not a pressure difference alone, determines acceleration."
   ],
   [
    "What does the slope of pressure versus depth give for a uniform resting liquid with constant g?",
    "ρg",
    "ρ/g",
    "The total container volume",
    "The pressure change isρg times depth change. The surface reference affects the intercept, while density and gravity determine the slope."
   ],
   [
    "In an ideal hydraulic apparatus with equal-height pistons and equal exterior reference pressures, what is transmitted through the confined resting fluid?",
    "An added pressure, not an equal force on unequal piston areas",
    "An equal force regardless of piston area",
    "Extra energy created without input work",
    "The same pressure increment produces force proportional to piston area. Larger output force is balanced by smaller output displacement in an ideal device."
   ],
   [
    "Why does ideal hydraulic force multiplication not create energy?",
    "The larger-force piston moves a proportionally smaller distance",
    "Both pistons always move equal distances under unequal forces",
    "Work is unrelated to force and displacement",
    "Volume continuity makes piston area times displacement equal on the two sides. Equal ideal work follows when pressures match."
   ],
   [
    "What pressure should be used at a liquid's free surface open to an atmosphere in a hydrostatic calculation?",
    "The specified atmospheric pressure for absolute results, or zero gauge relative to that same atmosphere",
    "Zero absolute pressure automatically",
    "The bottom pressure regardless of depth",
    "A free surface shares the ambient pressure under the stated static conditions. Absolute and gauge references are different but can be used consistently."
   ],
   [
    "A uniform perpendicular force 60N acts on a flat area 0.02m². What is average pressure in pascals?",
    "3000",
    "1.2",
    "0.00033333333",
    "Multiplying the correct pressure by the stated area reproduces the force. The product of force and area or the inverse ratio does not have pressure units."
   ],
   [
    "A uniform perpendicular force 120N acts on a flat area 0.04m². What is average pressure in pascals?",
    "3000",
    "4.8",
    "0.00033333333",
    "Multiplying the correct pressure by the stated area reproduces the force. The product of force and area or the inverse ratio does not have pressure units."
   ],
   [
    "A uniform perpendicular force 15N acts on a flat area 0.005m². What is average pressure in pascals?",
    "3000",
    "0.075",
    "0.00033333333",
    "Multiplying the correct pressure by the stated area reproduces the force. The product of force and area or the inverse ratio does not have pressure units."
   ],
   [
    "A uniform pressure 2000Pa acts normally over area 0.03m². What is force magnitude in newtons?",
    "60",
    "66666.667",
    "0.000015",
    "Each square meter would experience 2000N, so area 0.03m² experiences 60N. Pressure times area gives force."
   ],
   [
    "A resting liquid has density 1000kg/m³ and uniform g=10m/s². At depth 0.8m below an open surface, what is gauge pressure relative to that surface, in pascals?",
    "8000",
    "800",
    "10000",
    "The liquid column's weight per area is 1000×10×0.8=8000Pa. The surface reference is subtracted for gauge pressure."
   ],
   [
    "A resting liquid has density 800kg/m³ and uniform g=10m/s². What pressure increase occurs over a downward depth change 2m, in pascals?",
    "16000",
    "1600",
    "4000",
    "Hydrostatic force balance gives an added column weight per area of 800×10×2=16000Pa. The density alone is not a pressure."
   ],
   [
    "Surface absolute pressure is 100000Pa. The hydrostatic gauge pressure below it is 12000Pa. What is absolute pressure there in pascals?",
    "112000",
    "88000",
    "12000",
    "Add the surface reference to the pressure increase:100000+12000=112000Pa. Gauge pressure alone omits the reference."
   ],
   [
    "An instrument reports gauge pressure -20000Pa relative to an atmospheric pressure 100000Pa. What is the absolute pressure in pascals?",
    "80000",
    "120000",
    "-20000",
    "The absolute value is reference plus signed gauge reading, 100000-20000=80000Pa. Being below atmosphere does not make absolute pressure negative here."
   ],
   [
    "A pressure-depth graph for a uniform resting liquid increases by 15000Pa over 1.5m. Use g=10m/s². What density does the slope imply in kg/m³?",
    "1000",
    "10000",
    "1500",
    "The slope is 10000Pa/m and equalsρg. A density 1000kg/m³ with g10 reproduces that slope."
   ],
   [
    "Ideal massless hydraulic pistons are at equal height with equal external atmospheric pressures. Input area 0.002m² receives extra force 40N; output area is 0.01m². What extra output force is supported, in newtons?",
    "200",
    "8",
    "40",
    "The added pressure is 20000Pa, acting over output area 0.01m² to give 200N. Equal pressure does not mean equal force on unequal areas."
   ],
   [
    "An ideal incompressible hydraulic device has input area 0.002m² and output area 0.01m². The input piston moves 0.05m. What distance does the output piston move, in meters?",
    "0.01",
    "0.25",
    "0.05",
    "The displaced volume is 0.002×0.05=0.0001m³. Dividing by the larger output area gives 0.01m. The displacement ratio follows from incompressibility, independently of the force required."
   ],
   [
    "A resting uniform liquid has density 1000kg/m³ and g=10m/s². What depth below a reference surface gives a pressure increase 25000Pa, in meters?",
    "2.5",
    "25",
    "0.25",
    "A column of depth 2.5m has weight per area 1000×10×2.5=25000Pa. The given increase is already relative to the surface."
   ],
   [
    "What is the microscopic origin of fluid pressure on a container wall?",
    "The collective interactions of the fluid particles with the wall",
    "Only the gravitational weight of the wall itself",
    "A requirement that every fluid particle have zero volume and zero mass",
    "Particle interactions transfer momentum and collectively exert normal force on the surface. Gravity can affect the pressure distribution, but wall pressure is not simply the weight of the wall."
   ]
  ],
  "pics": [
   null,
   {
    "t": "setups",
    "title": "Gauge relative to the specified atmosphere",
    "head": "Quantity",
    "cols": [
     "Pressure (Pa)"
    ],
    "rows": [
     [
      "Atmospheric reference",
      "100000"
     ],
     [
      "Gauge reading",
      "−20000"
     ],
     [
      "Absolute pressure",
      "80000"
     ]
    ]
   },
   null,
   {
    "t": "setups",
    "title": "Ideal hydraulics: equal pressure; height changes neglected",
    "head": "Piston",
    "cols": [
     "Area (m²)",
     "Force (N)",
     "Stroke (m)"
    ],
    "rows": [
     [
      "Input",
      "0.002",
      "40",
      "0.05"
     ],
     [
      "Output",
      "0.010",
      "200",
      "0.01"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Hydrostatic pressure balances gravity",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      120,
      61
     ],
     "P1": [
      535,
      61
     ],
     "P2": [
      120,
      61
     ],
     "P3": [
      120,
      201
     ],
     "P4": [
      120,
      61
     ],
     "P5": [
      120,
      56
     ],
     "P6": [
      315,
      61
     ],
     "P7": [
      315,
      56
     ],
     "P8": [
      510,
      61
     ],
     "P9": [
      510,
      56
     ],
     "P10": [
      115,
      61
     ],
     "P11": [
      120,
      61
     ],
     "P12": [
      115,
      126
     ],
     "P13": [
      120,
      126
     ],
     "P14": [
      115,
      191
     ],
     "P15": [
      120,
      191
     ],
     "P16": [
      120,
      61
     ],
     "P17": [
      510,
      191
     ],
     "P18": [
      412.5,
      158.5
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18",
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
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P16P17",
      "col": 0,
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
       27
      ],
      "text": "Vertical depth (m)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Gauge pressure (kPa)",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "1",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       97,
       56
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       364,
       172
      ],
      "text": "(1.5, 15)",
      "col": 0
     },
     {
      "at": [
       409,
       210
      ],
      "text": "ρ = 1000 kg/m³; g = 10 m/s²",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P18",
      "r": 4,
      "col": 0
     }
    ]
   }
  ],
  "qpics": {
   "22": {
    "t": "setups",
    "title": "Uniform resting liquid; g10 m/s²",
    "head": "Change",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Pressure rise",
      "15000 Pa"
     ],
     [
      "Depth increase",
      "1.5 m"
     ]
    ]
   },
   "23": {
    "t": "setups",
    "title": "Ideal pistons: equal height, equal outside pressure",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Input area / extra force",
      "0.002 m² / 40 N"
     ],
     [
      "Output area",
      "0.01 m²"
     ]
    ]
   },
   "24": {
    "t": "setups",
    "title": "Incompressible hydraulic displacement",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Input area / stroke",
      "0.002 m² / 0.05 m"
     ],
     [
      "Output area",
      "0.01 m²"
     ]
    ]
   }
  }
 },
 {
  "code": "8.3",
  "name": "Fluids and Newton’s Laws",
  "skill": "s3",
  "boardTitle": "Forces and buoyancy",
  "teach": [
   "Fluids obey Newton’s laws. A parcel of fluid has mass, and pressure forces, gravity and any other forces determine its acceleration. For a horizontal parcel of mass 2kg with equal end areas 0.01m², a left pressure 1000Pa higher than the right creates net horizontal force 10N and acceleration 5m/s² rightward when other horizontal forces are negligible. In hydrostatic equilibrium, the vertical pressure-force difference instead balances the parcel’s weight. At the particle scale, internal interactions transmit forces through the fluid, while external forces determine the total momentum change of the selected system.",
   "Buoyancy is the upward resultant of the pressure forces from a hydrostatic fluid in gravity. For an object that displaces fluid volume V, the surrounding pressure field supplies the weight that the displaced fluid would have had: B=ρfluid gV. At density 1000kg/m³, g=10m/s² and displaced volume 0.002m³, buoyancy is 20N. This is the displaced fluid’s weight, not automatically the object’s weight. The ordinary derivation requires the relevant fluid contact; an object sealed against the bottom can violate that setup.",
   "Apply a complete vertical force balance to the object. If its weight is 50N and buoyancy 20N, a string supporting it at rest has tension 30N. If a 2kg body instead displaces 0.003m³ in density 1000 liquid with g=10, buoyancy 30N exceeds weight 20N and gives initial upward acceleration 5m/s² in a model neglecting all other fluid forces. Buoyancy does not disappear when a body sinks; weight can simply exceed the upward support.",
   "For a body floating at rest with only weight and liquid buoyancy, neglecting air buoyancy and surface-tension support, displaced-liquid weight equals body weight. This gives Vsub/Vtotal=ρobject-average/ρliquid. Average object density 600 in liquid density 1000 gives submerged fraction 0.6. A hollow vessel may exclude a large liquid volume for its mass, but loading or flooding can change that balance. Do not use the same equilibrium ratio for an accelerating body or one held by another support.",
   "A rigid body fully immersed in a constant-density fluid has the same buoyancy at different depths if its volume and fluid contact stay unchanged. Absolute pressures increase with depth, but the integrated difference still supports the same displaced-fluid weight. A compressible object or changing fluid density can behave differently. Gas buoyancy also exists: a static atmosphere in gravity has a pressure gradient and displaceable mass, though the density may be much smaller.",
   "Apparent weight is a support-force reading. If an object weighs 40N in air with air buoyancy neglected and the scale reads 25N when fully immersed at rest, liquid buoyancy is 15N. For density 1000kg/m³ and g=10m/s², object volume is 0.0015m³. Combine mass and that volume to infer density, stating immersion, bubble and support assumptions. During partial immersion, buoyancy versus displaced volume has slope ρg. Once a rigid body is fully submerged, its displaced volume stays fixed; further depth alone does not increase buoyancy in the same uniform liquid."
  ],
  "eqs": [
   "Fnet=ΔP A=1000×0.01=10N; a=10/2=5m/s²",
   "B=ρfluid gV=1000×10×0.002=20N",
   "Static T=50−20=30N; released a=(30−20)/2=5m/s²",
   "ρliquid Vsub g=mg ⇒ Vsub/Vtotal=600/1000=0.6",
   "Fixed displaced volume and density ⇒ same buoyancy",
   "B=40−25=15N; V=15/(1000×10)=0.0015m³"
  ],
  "boards": [
   [
    "Fluid parcels have mass and inertia",
    "Add pressure, gravity and other forces",
    "A pressure difference alone need not mean flow"
   ],
   [
    "Hydrostatic pressure forces produce buoyancy",
    "Use the displaced fluid weight",
    "Check that the assumed surfaces contact fluid"
   ],
   [
    "Keep weight, buoyancy and support separate",
    "Static equilibrium requires their balance",
    "Net force determines acceleration when released"
   ],
   [
    "Floating at rest is a force-balance condition",
    "Use submerged volume, not always total volume",
    "State neglected extra forces"
   ],
   [
    "Fixed volume in uniform liquid: depth-independent B",
    "Rising absolute pressure is not rising buoyancy",
    "Compressibility or stratification can change this"
   ],
   [
    "A scale measures its supporting force",
    "Apparent weight change can reveal displaced volume",
    "Control immersion, bubbles and measurement error"
   ]
  ],
  "questions": [
   [
    "Why can pressure forces accelerate a fluid parcel?",
    "An unbalanced net force changes its momentum according to Newton's laws",
    "Fluids are exempt from inertia",
    "Pressure itself is a velocity",
    "A fluid parcel has mass and responds to the sum of pressure, gravity and other forces. Pressure is not motion; the net force determines acceleration."
   ],
   [
    "For a horizontal fluid parcel with no viscosity, if left-face pressure exceeds right-face pressure over equal areas, what is the net pressure-force direction?",
    "Toward the right",
    "Toward the left",
    "Zero automatically because both faces touch fluid",
    "The left pressure pushes right and the right pressure pushes left. The larger left pressure leaves an unbalanced rightward contribution."
   ],
   [
    "What causes ordinary hydrostatic buoyancy on a body surrounded by fluid in gravity?",
    "The pressure forces over its surface have an upward resultant",
    "The body's gravitational mass becomes smaller",
    "Only liquid touching its top pushes it upward",
    "Pressure increases with depth, so the integrated pressure forces give upward support. Gravity on the object remains a separate force."
   ],
   [
    "Archimedes' principle gives buoyant-force magnitude as what, in the hydrostatic setting?",
    "The weight of displaced fluid",
    "The weight of the object in every situation",
    "The mass of displaced fluid without multiplying by g",
    "Displaced fluid would need that support from the surrounding pressure field. Buoyancy equals object weight only under particular force-balance conditions."
   ],
   [
    "For a partially immersed floating object, which volume belongs in ρfluid gVdisplaced?",
    "Only the volume displacing the liquid",
    "Always the entire object volume including the part above the liquid",
    "The volume of all liquid in the container",
    "Only the immersed portion replaces liquid and contributes to liquid buoyancy. Air buoyancy is neglected in the usual stated approximation."
   ],
   [
    "If a rigid body is fully submerged deeper in the same constant-density resting liquid, with fluid contacting all surfaces, how does buoyant force change?",
    "It remains the same if its volume is unchanged",
    "It doubles whenever the top pressure doubles",
    "It becomes zero below the surface",
    "Absolute pressure rises at both top and bottom, but their net supporting effect depends on displaced volume and fluid density, not the absolute depth."
   ],
   [
    "In a model that treats the surrounding pressure as hydrostatic, does an object whose weight exceeds buoyancy still experience buoyant force?",
    "Yes, even when its weight exceeds buoyant force",
    "No, buoyancy exists only for objects that float",
    "No, the liquid cannot push on a dense object",
    "The modeled hydrostatic pressure field still exerts an upward resultant. A larger weight leaves a downward net force when other forces are neglected; real motion can also introduce additional fluid forces."
   ],
   [
    "A body floats at rest with only weight and liquid buoyancy acting vertically, neglecting air buoyancy. How do those forces compare?",
    "They have equal magnitudes",
    "Buoyancy must be greater because the object is above the bottom",
    "Weight must be zero because it floats",
    "Static vertical equilibrium requires zero net force. A larger buoyancy would cause upward acceleration instead of rest under these stated forces."
   ],
   [
    "Why can a hollow vessel float even if its solid material is denser than the liquid?",
    "Its total mass can be supported by a larger displaced exterior volume",
    "Its material loses all mass when shaped into a vessel",
    "Every shape floats regardless of loading or flooding",
    "The relevant average density includes the object's enclosed empty space in the volume it excludes from liquid. Loading or flooding can change the balance."
   ],
   [
    "What does a lower spring-scale reading for a fully immersed suspended object measure under static conditions?",
    "The reduction in supporting tension due to buoyancy",
    "A decrease in the object's actual gravitational force",
    "The object's mass permanently vanishing",
    "With weight downward and buoyancy plus tension upward, tension is weight minus buoyancy. The scale reads support force, not a changed mass."
   ],
   [
    "A freely released fully submerged rigid object has weight smaller than its buoyancy, with no other initial vertical force. What is its initial acceleration direction?",
    "Upward",
    "Downward",
    "Zero until it touches the surface",
    "The resultant of buoyancy and weight is upward, so Newton's law gives upward acceleration. Subsequent flow resistance may affect later motion."
   ],
   [
    "When is an object's submerged volume fraction equal to its average density divided by liquid density?",
    "When it floats at rest with only weight and liquid buoyancy, neglecting air buoyancy and surface-tension support",
    "For every fully submerged falling object",
    "Whenever the container volume is known",
    "The ratio follows from balancing object weight with displaced-liquid weight. Extra supports or acceleration invalidate that simple equilibrium relation."
   ],
   [
    "Can buoyancy occur in a gas in a gravitational field?",
    "Yes, a static gas also has a pressure gradient and displaced weight",
    "No, only liquids have mass density",
    "No, gas pressure can only act horizontally",
    "A gas can supply hydrostatic pressure forces and an upward resultant. The magnitude depends on the displaced gas density, often much smaller than a liquid's."
   ],
   [
    "Why must one be careful applying displaced-fluid buoyancy to an object sealed against a container bottom?",
    "The assumed surrounding pressure forces may be absent on the sealed surface",
    "Sealing the bottom makes the object's mass zero",
    "Hydrostatic pressure must then be identical at all heights",
    "The usual derivation presumes fluid pressure acts over the wetted surface in the expected way. A sealed contact can remove the lower-face pressure contribution."
   ],
   [
    "A rigid object is fully submerged with fluid contacting all surfaces in a resting liquid of density 1000kg/m³. It displaces 0.002m³. Use g=10m/s². What is buoyant force magnitude in newtons?",
    "20",
    "2",
    "40",
    "The displaced-fluid mass is density times volume, and its weight adds the factor g. This gives buoyancy regardless of the object weight under the stated hydrostatic conditions."
   ],
   [
    "A rigid object is fully submerged with fluid contacting all surfaces in a resting liquid of density 800kg/m³. It displaces 0.005m³. Use g=10m/s². What is buoyant force magnitude in newtons?",
    "40",
    "4",
    "80",
    "The displaced-fluid mass is density times volume, and its weight adds the factor g. This gives buoyancy regardless of the object weight under the stated hydrostatic conditions."
   ],
   [
    "A rigid object is fully submerged with fluid contacting all surfaces in a resting liquid of density 1000kg/m³. It displaces 0.003m³. Use g=10m/s². What is buoyant force magnitude in newtons?",
    "30",
    "3",
    "60",
    "The displaced-fluid mass is density times volume, and its weight adds the factor g. This gives buoyancy regardless of the object weight under the stated hydrostatic conditions."
   ],
   [
    "A suspended object has weight 50N and hydrostatic buoyancy 20N. It is at rest with one upward support string. What is string tension in newtons?",
    "30",
    "70",
    "20",
    "Upward tension plus buoyancy must balance 50N downward. Tension 30N supplies the remaining support; adding 50 and 20 would give an unbalanced force."
   ],
   [
    "A fully submerged rigid object has mass 2kg and volume 0.003m³ in a liquid of density 1000kg/m³. Use g=10m/s². Model only its weight and hydrostatic buoyancy, neglecting other fluid forces. What is its initial upward acceleration in m/s²?",
    "5",
    "10",
    "15",
    "Buoyancy is 30N and weight 20N, leaving 10N upward. Dividing by mass 2kg gives 5m/s²; buoyancy alone is not the net force."
   ],
   [
    "An object of average density 600kg/m³ floats at rest in liquid of density 1000kg/m³ with only weight and liquid buoyancy. Neglect air buoyancy. What fraction of its volume is submerged?",
    "0.6",
    "1.6666667",
    "0.4",
    "Balancing object and displaced-liquid weights gives fraction 600/1000=0.6. The exposed fraction 0.4 is not the requested submerged fraction."
   ],
   [
    "An object floats at rest with only weight and liquid buoyancy; 75 percent of its volume is submerged in liquid of density 800kg/m³. Neglect air buoyancy. What is its average density in kg/m³?",
    "600",
    "1066.6667",
    "800",
    "The object's mass per total volume is 0.75 times the liquid density, or 600kg/m³. Matching the liquid density would require full immersion under these assumptions."
   ],
   [
    "A floating body at rest has mass 3kg, with only weight and buoyancy from liquid of density 1000kg/m³. Neglect air buoyancy. What liquid volume does it displace in m³?",
    "0.003",
    "0.03",
    "3000",
    "The displaced liquid must also have mass 3kg for its weight to balance the body. A volume 0.003m³ at density 1000 supplies that mass."
   ],
   [
    "An object's weight is 40N and its supporting scale reads 25N when it is fully immersed at rest. Neglect air buoyancy. The liquid density is 1000kg/m³ and g=10m/s². What is object volume in m³?",
    "0.0015",
    "0.004",
    "0.0025",
    "The 15N decrease in supporting force is buoyancy. A displaced volume 15/(1000×10)=0.0015m³ gives that force; the scale reading itself is not buoyancy."
   ],
   [
    "A rigid object weighs 40N and displaces 0.002m³ when fully immersed. Neglect air buoyancy and use g=10m/s². What is its average density in kg/m³?",
    "2000",
    "20000",
    "500",
    "Its mass is 40/10=4kg. Dividing by volume 0.002m³ gives 2000kg/m³; using weight in place of mass introduces an extra factor g."
   ],
   [
    "A vertical rectangular object has top and bottom area 0.02m² fully wetted by static liquid. Bottom pressure exceeds top pressure by 1500Pa. What is their net vertical pressure force in newtons?",
    "30",
    "75",
    "0.000013333",
    "The opposing face forces differ by pressure difference times the common area. Their net is 1500×0.02=30N upward, not either absolute pressure force."
   ],
   [
    "A horizontal fluid parcel has mass 2kg and equal end-face areas 0.01m². Left pressure exceeds right pressure by 1000Pa and other horizontal forces are negligible. What is its rightward acceleration in m/s²?",
    "5",
    "10",
    "20",
    "The pressure-force difference is 10N rightward. Newton's law with mass 2kg gives acceleration 5m/s²."
   ]
  ],
  "check": [
   "A body is fully immersed at rest, suspended by one upward string. Its weight is 36N and liquid buoyancy is 12N. What is the string tension?",
   "24N",
   "48N",
   "12N",
   "The upward forces must total 36N, so tension=36-12=24N."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Pressure-force components on a horizontal parcel",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      240,
      160
     ],
     "P1": [
      400,
      160
     ],
     "P2": [
      400,
      90
     ],
     "P3": [
      240,
      90
     ],
     "P4": [
      180,
      125
     ],
     "P5": [
      240,
      125
     ],
     "P6": [
      440,
      125
     ],
     "P7": [
      400,
      125
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P6P7",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       173,
       165
      ],
      "text": "Left 3000 Pa",
      "col": 0
     },
     {
      "at": [
       463,
       165
      ],
      "text": "Right 2000 Pa",
      "col": 1
     },
     {
      "at": [
       188,
       90
      ],
      "text": "30 N →",
      "col": 0
     },
     {
      "at": [
       460,
       90
      ],
      "text": "← 20 N",
      "col": 1
     },
     {
      "at": [
       320,
       200
      ],
      "text": "Mass 2 kg; each face 0.01 m²",
      "col": 0
     },
     {
      "at": [
       320,
       53
      ],
      "text": "Net 10 N →; a = 5 m/s² →",
      "col": 0
     }
    ],
    "circles": []
   },
   null,
   {
    "t": "figure",
    "title": "Suspended at rest: upward positive",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      130,
      145
     ],
     "P1": [
      525,
      145
     ],
     "P2": [
      196,
      199
     ],
     "P3": [
      244,
      199
     ],
     "P4": [
      244,
      145
     ],
     "P5": [
      196,
      145
     ],
     "P6": [
      326,
      181
     ],
     "P7": [
      374,
      181
     ],
     "P8": [
      374,
      145
     ],
     "P9": [
      326,
      145
     ],
     "P10": [
      456,
      145
     ],
     "P11": [
      504,
      145
     ],
     "P12": [
      504,
      55
     ],
     "P13": [
      456,
      55
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
      "col": 2
     },
     {
      "v": "P10P11P12P13",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       220,
       214
      ],
      "text": "Tension +30 N",
      "col": 0
     },
     {
      "at": [
       350,
       214
      ],
      "text": "Buoyancy +20 N",
      "col": 2
     },
     {
      "at": [
       480,
       214
      ],
      "text": "Weight −50 N",
      "col": 1
     },
     {
      "at": [
       320,
       30
      ],
      "text": "Vertical force components: +30 +20 −50 = 0",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Floating at rest: weight and liquid buoyancy only",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      140,
      170
     ],
     "P1": [
      470,
      170
     ],
     "P2": [
      470,
      70
     ],
     "P3": [
      140,
      70
     ],
     "P4": [
      270,
      210
     ],
     "P5": [
      370,
      210
     ],
     "P6": [
      370,
      110
     ],
     "P7": [
      270,
      110
     ],
     "P8": [
      140,
      170
     ],
     "P9": [
      470,
      170
     ],
     "P10": [
      395,
      170
     ],
     "P11": [
      395,
      110
     ],
     "P12": [
      392,
      170
     ],
     "P13": [
      402,
      170
     ],
     "P14": [
      392,
      110
     ],
     "P15": [
      402,
      110
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P12P13",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 2,
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
     }
    ],
    "notes": [
     {
      "at": [
       450,
       135
      ],
      "text": "60% below",
      "col": 2
     },
     {
      "at": [
       199,
       194
      ],
      "text": "Surface",
      "col": 0
     },
     {
      "at": [
       320,
       46
      ],
      "text": "Uniform prism: ρobject = 600; ρliquid = 1000 kg/m³",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Rigid upright prism: partial to full immersion",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      120,
      61
     ],
     "P1": [
      535,
      61
     ],
     "P2": [
      120,
      61
     ],
     "P3": [
      120,
      201
     ],
     "P4": [
      120,
      61
     ],
     "P5": [
      120,
      56
     ],
     "P6": [
      315,
      61
     ],
     "P7": [
      315,
      56
     ],
     "P8": [
      510,
      61
     ],
     "P9": [
      510,
      56
     ],
     "P10": [
      115,
      61
     ],
     "P11": [
      120,
      61
     ],
     "P12": [
      115,
      104.33333333333331
     ],
     "P13": [
      120,
      104.33333333333331
     ],
     "P14": [
      115,
      147.66666666666666
     ],
     "P15": [
      120,
      147.66666666666666
     ],
     "P16": [
      115,
      191
     ],
     "P17": [
      120,
      191
     ],
     "P18": [
      120,
      61
     ],
     "P19": [
      315,
      147.66666666666666
     ],
     "P20": [
      315,
      147.66666666666666
     ],
     "P21": [
      510,
      147.66666666666666
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21",
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
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P16P17",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P18P19",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P20P21",
      "col": 0,
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
       27
      ],
      "text": "Bottom depth below surface (m)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Buoyancy (N)",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       97,
       56
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       97,
       99.33333333333331
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       97,
       142.66666666666666
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       397,
       212
      ],
      "text": "ρ = 1000; g = 10; area 0.001 m²",
      "col": 0
     },
     {
      "at": [
       393,
       177
      ],
      "text": "Prism height 2 m",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Apparent weight: fully immersed and at rest",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Weight / support reading",
      "40 N / 25 N"
     ],
     [
      "Liquid density / g",
      "1000 kg/m³ / 10 m/s²"
     ],
     [
      "Buoyancy / object volume",
      "15 N / 0.0015 m³"
     ]
    ]
   }
  ],
  "qpics": {
   "17": {
    "t": "setups",
    "title": "Suspended body at rest",
    "head": "Vertical force",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Weight downward",
      "50 N"
     ],
     [
      "Buoyancy upward",
      "20 N"
     ],
     [
      "String tension upward",
      "Unknown"
     ]
    ]
   },
   "18": {
    "t": "setups",
    "title": "Only weight and hydrostatic buoyancy modeled",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Object mass / volume",
      "2 kg / 0.003 m³"
     ],
     [
      "Liquid density / g",
      "1000 kg/m³ / 10 m/s²"
     ]
    ]
   },
   "22": {
    "t": "setups",
    "title": "Fully immersed object at rest",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Weight / scale reading",
      "40 N / 25 N"
     ],
     [
      "Liquid density / g",
      "1000 kg/m³ / 10 m/s²"
     ]
    ]
   },
   "24": {
    "t": "setups",
    "title": "Fully wetted horizontal faces",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Each face area",
      "0.02 m²"
     ],
     [
      "Bottom-minus-top pressure",
      "1500 Pa"
     ]
    ]
   },
   "25": {
    "t": "setups",
    "title": "Horizontal parcel: other horizontal forces negligible",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Mass / each end area",
      "2 kg / 0.01 m²"
     ],
     [
      "Left-minus-right pressure",
      "1000 Pa"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Try: submerged body at rest",
   "head": "Force",
   "cols": [
    "Magnitude"
   ],
   "rows": [
    [
     "Weight downward",
     "36 N"
    ],
    [
     "Buoyancy upward",
     "12 N"
    ]
   ]
  }
 },
 {
  "code": "8.4",
  "name": "Fluids and Conservation Laws",
  "skill": "s4",
  "boardTitle": "Flow and conservation",
  "teach": [
   "For steady flow through a full pipe without leaks or accumulation, mass entering a segment per time equals mass leaving. Volume rate is Q=Av using the mean speed normal to a cross section; mass rate is ρQ. If the fluid is incompressible with one density, this gives A 1v1=A 2v2. Area 0.02m² at 3m/s carries 0.06m³/s, so area 0.01m² needs 6m/s. If a circular radius halves, area becomes one-quarter and speed quadruples at the same flow rate.",
   "At a steady junction with one constant density and no storage or leaks, the inlet volume rates sum to the outlet volume rates. An inlet 0.05m³/s with one outlet 0.02m³/s leaves 0.03m³/s for a second outlet when there is no storage or leak. A collection experiment receiving 0.06m³ in 3s measures Q=0.02m³/s. For density 1000kg/m³ this corresponds to 20kg/s. Check whether the pipe is full, the relevant area is known and the flow has actually settled before applying a steady formula.",
   "Bernoulli’s equation is an energy account along a streamline for steady incompressible nonviscous flow, with no pump or turbine work, dissipative losses or other transfers beyond the pressure work included in the equation. It states P+½ρv²+ρgy=constant. Each term has units of energy per volume, equivalent to pressure. For P = 100000Pa, ρ = 1000kg/m³, v = 2m/s, y = 3m and g = 10m/s², the terms are 100000, 2000 and 30000Pa, totaling 132000Pa. Do not compare arbitrary points using only speed while ignoring height or different energy inputs.",
   "At equal height on the same ideal steady streamline, an increase in speed is paid for by a decrease in static pressure. For density 1000kg/m³ and speeds 2 and 4m/s, the kinetic term increases 6000Pa, so P1-P2=6000Pa. Starting at P1=150000Pa gives P2=144000Pa. If the speeds are equal but the second point is 2m higher with g = 10, the pressure drop is 20000Pa. These are conditional comparisons, not a universal claim that all faster fluids have lower pressure. In the separate pictured gauge-pressure example, pressure falls from 10 to 4kPa while the kinetic term rises from 2 to 8kPa; their sum remains 12kPa at the same height.",
   "Torricelli’s outlet relation follows from Bernoulli for a large reservoir with negligible free-surface speed, a small outlet at vertical distance h below it, and equal pressure at the surface and emerging jet. Under a quasi-steady ideal model with negligible losses, v=√(2gh). With h=0.8m and g=10m/s², the outlet speed is 4m/s. A sealed pressurized tank, substantial surface speed or significant losses requires extra terms. The exposed boundaries can share atmospheric pressure while the interior pressure varies.",
   "Test a flow model using independent measurements: collect Q over time, measure occupied area for mean speed, and compare pressure differences at known heights. For fixed Q, plotting mean speed against 1/A should give slope Q. Measure radii carefully because area depends on their square. A mismatch can reflect viscosity, unsteady motion, leaks, pump work or measurement error. Conservation of total energy still holds when real losses heat the fluid, but the simple lossless mechanical-energy equation then needs correction."
  ],
  "eqs": [
   "Q=A1v1=0.02×3=0.06m³/s; v2=0.06/0.01=6m/s",
   "Qother=0.05−0.02=0.03m³/s; mass rate 1000×0.02=20kg/s",
   "P+½ρv²+ρgy=100000+2000+30000=132000Pa",
   "P1−P2=½×1000×(4²−2²)=6000Pa",
   "v=√(2gh)=√(2×10×0.8)=4m/s",
   "At fixedQ, v=Q×(1/A); measure area and steady conditions"
  ],
  "boards": [
   [
    "Mass cannot accumulate in the steady segment",
    "Volume rate = area × mean normal speed",
    "Constant density: A1v1 = A2v2"
   ],
   [
    "Sum all inlet and outlet rates at a junction",
    "Volume per time can be measured directly",
    "Density converts volume rate to mass rate"
   ],
   [
    "Bernoulli compares energy per transported volume",
    "Keep pressure,speed and height terms",
    "Use one streamline and stated ideal conditions"
   ],
   [
    "Equal height: kinetic gain requires pressure drop",
    "Equal speed: height gain requires pressure drop",
    "Do not generalize beyond the assumptions"
   ],
   [
    "Large reservoir; small outlet; equal pressures",
    "Negligible surface speed and losses",
    "Use vertical drop below the free surface"
   ],
   [
    "Measure more than one quantity to test a model",
    "Area depends on radius squared",
    "Real energy losses need an expanded account"
   ]
  ],
  "questions": [
   [
    "What conservation principle underlies steady-flow continuity in a full pipe with no leaks or accumulation?",
    "Conservation of mass",
    "Creation of fluid in the narrow region",
    "Conservation of pressure alone",
    "The same mass rate must enter and leave the selected pipe segment. Pressure can change while mass is conserved."
   ],
   [
    "For steady incompressible flow through a full unbranched pipe, what stays equal between cross sections?",
    "Cross-sectional area times mean flow speed",
    "Cross-sectional area divided by speed in every case",
    "Pressure times pipe diameter in every case",
    "The volume carried per time is area times mean speed. Fixed density makes equality of volume rate equivalent to equality of mass rate here."
   ],
   [
    "If a circular pipe's radius is halved during steady incompressible flow with unchanged volume rate, what happens to mean speed?",
    "It quadruples",
    "It doubles",
    "It halves",
    "Cross-sectional area scales with radius squared, so it becomes one-quarter. Speed must become four times as large to keep area times speed fixed."
   ],
   [
    "What is volume flow rate Q?",
    "Volume passing a cross section per unit time",
    "The total mass of every particle in the pipe",
    "Pressure divided by density without a time scale",
    "Volume rate has unitsm³/s and can be measured by collecting a volume over a timed interval. It is different from mass rateρQ."
   ],
   [
    "At a steady incompressible pipe junction with one inlet and two outlets, what relation holds without leaks or accumulation?",
    "Inlet volume rate equals the sum of both outlet volume rates",
    "Each outlet must individually carry the entire inlet rate",
    "Both outlets must have equal rates regardless of their conditions",
    "The outgoing rates together must account for the incoming fluid. Conservation does not require an equal split unless additional conditions establish it."
   ],
   [
    "What assumptions support the usual Bernoulli equation between two points along one streamline?",
    "Steady incompressible nonviscous flow with no pumps, turbines or dissipative losses between the points",
    "Any turbulent dissipative flow across an arbitrary pump without correction",
    "Static pressure must be the same at every point regardless of height",
    "The simple relation combines pressure work, kinetic energy and gravitational potential under explicit ideal-flow conditions. Pumps, losses or other departures require additional terms or another model."
   ],
   [
    "What does each term P, one-half ρv² and ρgy represent dimensionally in Bernoulli's equation?",
    "Energy per volume, with the same units as pressure",
    "Total energy regardless of fluid volume",
    "A force vector in a fixed direction",
    "Each term has unitsJ/m³, equivalent to pascals. The equality compares energy per transported volume, not three unrelated kinds of units."
   ],
   [
    "Along the same ideal steady streamline at equal height and without pumps or losses, how does higher speed relate to static pressure?",
    "Higher speed corresponds to lower static pressure",
    "Higher speed always corresponds to higher static pressure",
    "The pressure must be identical because height matches",
    "At equal height the gravitational terms cancel, so an increase in kinetic energy density is balanced by a pressure decrease under these assumptions."
   ],
   [
    "Why is faster fluid means lower pressure not a universal rule across any two points?",
    "Different heights, energy inputs, losses or streamline constants can change the comparison",
    "Bernoulli says pressure is never measurable",
    "Speed has no relationship to any energy term",
    "The simplified tradeoff holds only after the other terms and model assumptions are controlled. Speed alone does not determine every pressure difference."
   ],
   [
    "At equal speeds along an ideal steady streamline with no pump or losses, what happens to pressure as height increases?",
    "It decreases to balance the gravitational energy increase",
    "It increases automatically by the height gain",
    "It must stay the same because the speeds match",
    "The kinetic terms cancel. Raising gravitational potential energy per volume must then be balanced by a lower pressure term."
   ],
   [
    "What assumptions give the simple outlet-speed relation v=√(2gh) for a hole below a reservoir surface?",
    "A large reservoir with negligible surface speed, equal surface and outlet pressures, and negligible losses under a quasi-steady ideal model",
    "Any sealed pressurized tank regardless of surface speed",
    "A hole above the liquid surface with no connecting liquid",
    "The height drop supplies kinetic energy only after the pressure terms cancel and surface motion is negligible. Other conditions add terms to the energy balance."
   ],
   [
    "Why can the free surface and free jet outlet share atmospheric pressure in an open ideal draining-reservoir example?",
    "Both contact the same atmosphere, with surface effects neglected",
    "The whole liquid then has zero absolute pressure everywhere",
    "The depth below the surface must also be zero",
    "Atmospheric pressure applies at the exposed boundaries. Inside a static or flowing liquid, pressure can differ even when both endpoints are exposed."
   ],
   [
    "What does pressure work do when an ideal horizontal flow speeds up through a constriction?",
    "It supplies the increase in kinetic energy",
    "It creates new mass in the constriction",
    "It must be zero whenever pipe height is constant",
    "The upstream and downstream pressure forces can do unequal work on a transported volume. The net work changes kinetic energy even without a height change."
   ],
   [
    "If viscosity causes significant losses in a real pipe, can the simple lossless Bernoulli equation be used unchanged over the dissipative segment?",
    "No, energy losses must be accounted for",
    "Yes, because conservation requires pressure never to fall",
    "Yes, viscosity has no effect on mechanical energy",
    "Total energy is conserved more broadly, but mechanical energy can become thermal energy. A lossless mechanical-energy relation would omit that transfer."
   ],
   [
    "What experiment can directly estimate volume flow rate from a steady outlet?",
    "Collect a measured volume over a measured time",
    "Measure only the pipe's color",
    "Record only an arbitrary pressure zero",
    "Collected volume divided by collection time estimatesQ. Speed additionally requires cross-sectional area and a suitable flow model."
   ],
   [
    "A pipe is only partly full and fluid can accumulate inside. What must be checked before using A 1v1=A 2v2 with the full pipe areas?",
    "Actual occupied flow areas and whether steady no-accumulation conditions hold",
    "Nothing, because every pipe automatically meets the formula's assumptions",
    "Whether the fluid has exactly zero mass",
    "The standard full-pipe relation assumes the whole stated section carries the incompressible steady flow. Storage or partly filled sections can require a different control-volume account."
   ],
   [
    "Steady incompressible flow fills a pipe with A 1=0.02m², v1=3m/s and A 2=0.01m², without leaks. What is mean speed v2 in m/s?",
    "6",
    "1.5",
    "3",
    "The first section carries 0.06m³/s. The second area 0.01m² needs speed 6m/s to carry the same volume rate."
   ],
   [
    "Steady incompressible flow fills a pipe with A 1=0.03m², v1=2m/s and A 2=0.015m², without leaks. What is mean speed v2 in m/s?",
    "4",
    "1",
    "2",
    "Both sections must carry 0.06m³/s. Dividing by the second area gives 4m/s; a smaller area does not reduce speed at fixed volume rate."
   ],
   [
    "A uniform mean flow speed 4m/s fills a cross-sectional area 0.005m². What is volume flow rate in m³/s?",
    "0.02",
    "800",
    "0.00125",
    "In one second, fluid advances 4m through area 0.005m², occupying 0.02m³. Area times speed gives volume per time."
   ],
   [
    "An outlet delivers 0.06m³ of liquid in 3s at a steady rate. What is volume flow rate in m³/s?",
    "0.02",
    "0.18",
    "50",
    "A rate 0.02m³/s supplies 0.06m³ over 3 seconds. The inverse or the product of volume and time has different units."
   ],
   [
    "A liquid of density 1000kg/m³ flows steadily at 0.02m³/s. What is its mass flow rate in kg/s?",
    "20",
    "0.00002",
    "50000",
    "Each second's volume contains 1000×0.02=20kg. Density converts volume rate into mass rate."
   ],
   [
    "A steady incompressible junction receives 0.05m³/s and one outlet carries 0.02m³/s, with no leaks or storage. What rate leaves the other outlet in m³/s?",
    "0.03",
    "0.07",
    "0.05",
    "The two outlets together must equal the inlet. Subtracting 0.02 from 0.05 leaves 0.03m³/s for the second outlet."
   ],
   [
    "An ideal steady horizontal flow has density 1000kg/m³. Along one streamline speed rises from 2 to 4m/s with no pump or losses. What is P1-P2 in pascals?",
    "6000",
    "2000",
    "-6000",
    "The kinetic energy density rises by one-half 1000×(16-4)=6000Pa. Upstream pressure exceeds downstream pressure by that amount to supply the increase."
   ],
   [
    "An ideal steady horizontal flow has density 800kg/m³. Along one streamline speed rises from 1 to 3m/s with no pump or losses. What is P1-P2 in pascals?",
    "3200",
    "1600",
    "-3200",
    "The speed-squared change is 9-1=8m²/s². One-half times density 800 times 8 gives the required pressure drop 3200Pa."
   ],
   [
    "Along an ideal steady streamline, fluid density is 1000kg/m³ and speed is the same at both points. The second point is 2m higher, with g=10m/s² and no pump or losses. What is P1-P2 in pascals?",
    "20000",
    "-20000",
    "2000",
    "The gravitational energy density rises by 1000×10×2=20000Pa. The pressure must fall by that amount because kinetic energy density is unchanged."
   ],
   [
    "A large open reservoir drains quasi-steadily through a small hole 0.8m below its surface. Surface and outlet pressures are equal, surface speed is negligible and losses are negligible. Use g=10m/s². What is ideal outlet speed in m/s?",
    "4",
    "16",
    "8",
    "The drop gives v²=2gh=16m²/s². Taking the positive square root gives 4m/s; 16 is speed squared."
   ],
   [
    "A large open reservoir drains quasi-steadily through a small hole 1.25m below its surface, with equal boundary pressures, negligible surface speed and negligible losses. Use g=10m/s². What is ideal outlet speed in m/s?",
    "5",
    "25",
    "2.5",
    "Energy per unit mass gives one-half v²=gh=12.5m²/s². Thusv²=25 and speed 5m/s."
   ],
   [
    "An ideal steady horizontal streamline has P1=150000Pa, v1=2m/s, v2=4m/s and density 1000kg/m³, with no pump or losses. What is P2 in pascals?",
    "144000",
    "156000",
    "150000",
    "The kinetic energy density increases 6000Pa, so pressure decreases from 150000 to 144000Pa. Keeping or increasing pressure would not conserve the stated mechanical energy."
   ],
   [
    "A circular pipe radius becomes one-third as large while steady incompressible volume rate stays fixed. By what factor does mean speed change?",
    "9",
    "3",
    "1/9",
    "Area becomes one-ninth because radius is squared. Continuity therefore requires nine times the speed, not merely three times."
   ],
   [
    "At a point in ideal flow, P=100000Pa, density=1000kg/m³, speed=2m/s, height=3m and g=10m/s². What is the Bernoulli sum P+ρv²/2+ρgy in pascals?",
    "132000",
    "102000",
    "130000",
    "The pressure term 100000, kinetic term 2000 and height term 30000 add to 132000Pa. Omitting either energy-density contribution gives an incomplete sum."
   ]
  ],
  "check": [
   "Steady incompressible flow fills a pipe with no leaks. Area 0.04m² has mean speed 2m/s. What speed is required where the full area is 0.01m²?",
   "8m/s",
   "0.5m/s",
   "2m/s",
   "The volume rate 0.04×2=0.08m³/s must pass the smaller area, requiring 0.08/0.01=8m/s."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Steady incompressible flow in a full channel",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      130,
      160
     ],
     "P1": [
      280,
      160
     ],
     "P2": [
      370,
      140
     ],
     "P3": [
      510,
      140
     ],
     "P4": [
      510,
      100
     ],
     "P5": [
      370,
      100
     ],
     "P6": [
      280,
      80
     ],
     "P7": [
      130,
      80
     ],
     "P8": [
      180,
      120
     ],
     "P9": [
      220,
      120
     ],
     "P10": [
      400,
      120
     ],
     "P11": [
      480,
      120
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3P4P5P6P7",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       320,
       205
      ],
      "text": "Rectangular sections: equal out-of-page depth",
      "col": 0
     },
     {
      "at": [
       211,
       177
      ],
      "text": "A1 0.02 m²",
      "col": 0
     },
     {
      "at": [
       442,
       158
      ],
      "text": "A2 0.01 m²",
      "col": 0
     },
     {
      "at": [
       205,
       57
      ],
      "text": "v1 3 m/s",
      "col": 1
     },
     {
      "at": [
       440,
       71
      ],
      "text": "v2 6 m/s",
      "col": 1
     },
     {
      "at": [
       320,
       32
      ],
      "text": "Same volume rate: 0.06 m³/s",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Steady junction: no storage or leaks",
    "head": "Branch",
    "cols": [
     "Volume rate (m³/s)"
    ],
    "rows": [
     [
      "Inlet",
      "0.05"
     ],
     [
      "First outlet",
      "0.02"
     ],
     [
      "Second outlet",
      "0.03"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Bernoulli terms: a common energy-density unit",
    "head": "Term",
    "cols": [
     "Value (Pa)"
    ],
    "rows": [
     [
      "Pressure P",
      "100000"
     ],
     [
      "Kinetic: ρv²/2",
      "2000"
     ],
     [
      "Gravity: ρgy",
      "30000"
     ],
     [
      "Total",
      "132000"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Same height, steady ideal flow: gauge pressure",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      213,
      160
     ],
     "P1": [
      277,
      160
     ],
     "P2": [
      277,
      60
     ],
     "P3": [
      213,
      60
     ],
     "P4": [
      213,
      180
     ],
     "P5": [
      277,
      180
     ],
     "P6": [
      277,
      160
     ],
     "P7": [
      213,
      160
     ],
     "P8": [
      403,
      100
     ],
     "P9": [
      467,
      100
     ],
     "P10": [
      467,
      60
     ],
     "P11": [
      403,
      60
     ],
     "P12": [
      403,
      180
     ],
     "P13": [
      467,
      180
     ],
     "P14": [
      467,
      100
     ],
     "P15": [
      403,
      100
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
       245,
       105
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       245,
       165
      ],
      "text": "2",
      "col": 1
     },
     {
      "at": [
       435,
       75
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       435,
       135
      ],
      "text": "8",
      "col": 1
     },
     {
      "at": [
       245,
       36
      ],
      "text": "Point 1",
      "col": 0
     },
     {
      "at": [
       435,
       36
      ],
      "text": "Point 2",
      "col": 0
     },
     {
      "at": [
       145,
       209
      ],
      "text": "Pressure (blue)",
      "col": 0
     },
     {
      "at": [
       442,
       209
      ],
      "text": "Kinetic term (orange)",
      "col": 1
     },
     {
      "at": [
       107,
       152
      ],
      "text": "kPa",
      "col": 0
     },
     {
      "at": [
       336,
       191
      ],
      "text": "Both total 12 kPa",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Ideal small outlet: equal boundary pressures",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      150,
      185
     ],
     "P1": [
      370,
      185
     ],
     "P2": [
      370,
      88
     ],
     "P3": [
      366,
      88
     ],
     "P4": [
      366,
      82
     ],
     "P5": [
      370,
      82
     ],
     "P6": [
      370,
      52
     ],
     "P7": [
      150,
      52
     ],
     "P8": [
      150,
      212
     ],
     "P9": [
      150,
      52
     ],
     "P10": [
      150,
      52
     ],
     "P11": [
      370,
      52
     ],
     "P12": [
      370,
      212
     ],
     "P13": [
      370,
      88
     ],
     "P14": [
      370,
      82
     ],
     "P15": [
      370,
      52
     ],
     "P16": [
      150,
      185
     ],
     "P17": [
      370,
      185
     ],
     "P18": [
      370,
      85
     ],
     "P19": [
      375,
      84.9375
     ],
     "P20": [
      375,
      84.9375
     ],
     "P21": [
      380,
      84.75
     ],
     "P22": [
      380,
      84.75
     ],
     "P23": [
      385,
      84.4375
     ],
     "P24": [
      385,
      84.4375
     ],
     "P25": [
      390,
      84
     ],
     "P26": [
      390,
      84
     ],
     "P27": [
      395,
      83.4375
     ],
     "P28": [
      395,
      83.4375
     ],
     "P29": [
      400,
      82.75
     ],
     "P30": [
      400,
      82.75
     ],
     "P31": [
      405,
      81.9375
     ],
     "P32": [
      405,
      81.9375
     ],
     "P33": [
      410,
      81
     ],
     "P34": [
      410,
      81
     ],
     "P35": [
      415,
      79.9375
     ],
     "P36": [
      415,
      79.9375
     ],
     "P37": [
      420,
      78.75
     ],
     "P38": [
      420,
      78.75
     ],
     "P39": [
      425,
      77.4375
     ],
     "P40": [
      425,
      77.4375
     ],
     "P41": [
      430,
      76
     ],
     "P42": [
      430,
      76
     ],
     "P43": [
      435,
      74.4375
     ],
     "P44": [
      435,
      74.4375
     ],
     "P45": [
      440,
      72.75
     ],
     "P46": [
      440,
      72.75
     ],
     "P47": [
      445,
      70.9375
     ],
     "P48": [
      445,
      70.9375
     ],
     "P49": [
      450,
      69
     ],
     "P50": [
      450,
      69
     ],
     "P51": [
      455,
      66.9375
     ],
     "P52": [
      455,
      66.9375
     ],
     "P53": [
      460,
      64.75
     ],
     "P54": [
      460,
      64.75
     ],
     "P55": [
      465,
      62.4375
     ],
     "P56": [
      465,
      62.4375
     ],
     "P57": [
      470,
      60
     ],
     "P58": [
      470,
      60
     ],
     "P59": [
      475,
      57.4375
     ],
     "P60": [
      475,
      57.4375
     ],
     "P61": [
      480,
      54.75
     ],
     "P62": [
      480,
      54.75
     ],
     "P63": [
      485,
      51.9375
     ],
     "P64": [
      485,
      51.9375
     ],
     "P65": [
      490,
      49
     ],
     "P66": [
      490,
      49
     ],
     "P67": [
      495,
      45.9375
     ],
     "P68": [
      495,
      45.9375
     ],
     "P69": [
      500,
      42.75
     ],
     "P70": [
      500,
      42.75
     ],
     "P71": [
      505,
      39.4375
     ],
     "P72": [
      505,
      39.4375
     ],
     "P73": [
      510,
      36
     ],
     "P74": [
      400,
      185
     ],
     "P75": [
      400,
      85
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P10P11",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P12P13",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P14P15",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P16P17",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P18P19",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P20P21",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P22P23",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P24P25",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P26P27",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P28P29",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P30P31",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P32P33",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P34P35",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P36P37",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P38P39",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P40P41",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P42P43",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P44P45",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P46P47",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P48P49",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P50P51",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P52P53",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P54P55",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P56P57",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P58P59",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P60P61",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P62P63",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P64P65",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P66P67",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P68P69",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P70P71",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P72P73",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P74P75",
      "col": 2,
      "arrows": 0,
      "dash": true,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3P4P5P6P7",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       467,
       135
      ],
      "text": "h = 0.8 m",
      "col": 2
     },
     {
      "at": [
       260,
       202
      ],
      "text": "Surface: Patm",
      "col": 0
     },
     {
      "at": [
       464,
       99
      ],
      "text": "Outlet: Patm",
      "col": 0
     },
     {
      "at": [
       255,
       120
      ],
      "text": "Large reservoir",
      "col": 0
     },
     {
      "at": [
       264,
       34
      ],
      "text": "g = 10 m/s²; ideal outlet speed 4 m/s",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Continuity tested at fixed volume rate",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      120,
      61
     ],
     "P1": [
      535,
      61
     ],
     "P2": [
      120,
      61
     ],
     "P3": [
      120,
      201
     ],
     "P4": [
      120,
      61
     ],
     "P5": [
      120,
      56
     ],
     "P6": [
      315,
      61
     ],
     "P7": [
      315,
      56
     ],
     "P8": [
      510,
      61
     ],
     "P9": [
      510,
      56
     ],
     "P10": [
      115,
      61
     ],
     "P11": [
      120,
      61
     ],
     "P12": [
      115,
      113
     ],
     "P13": [
      120,
      113
     ],
     "P14": [
      115,
      165
     ],
     "P15": [
      120,
      165
     ],
     "P16": [
      217.5,
      87
     ],
     "P17": [
      510,
      165
     ],
     "P18": [
      217.5,
      87
     ],
     "P19": [
      510,
      165
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19",
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
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P16P17",
      "col": 0,
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
       27
      ],
      "text": "Inverse area (1/m²)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Mean speed (m/s)",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "200",
      "col": 0
     },
     {
      "at": [
       97,
       56
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       97,
       108
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       97,
       160
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       402,
       209
      ],
      "text": "Slope Q = 0.02 m³/s",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P18",
      "r": 4,
      "col": 0
     },
     {
      "c": "P19",
      "r": 4,
      "col": 0
     }
    ]
   }
  ],
  "qpics": {
   "16": {
    "t": "setups",
    "title": "Steady incompressible flow; full cross sections",
    "head": "Section",
    "cols": [
     "Area (m²)",
     "Speed (m/s)"
    ],
    "rows": [
     [
      "1",
      "0.02",
      "3"
     ],
     [
      "2",
      "0.01",
      "Unknown"
     ]
    ]
   },
   "17": {
    "t": "setups",
    "title": "Steady incompressible flow; full cross sections",
    "head": "Section",
    "cols": [
     "Area (m²)",
     "Speed (m/s)"
    ],
    "rows": [
     [
      "1",
      "0.03",
      "2"
     ],
     [
      "2",
      "0.015",
      "Unknown"
     ]
    ]
   },
   "21": {
    "t": "setups",
    "title": "Steady incompressible junction; no storage",
    "head": "Branch",
    "cols": [
     "Volume rate (m³/s)"
    ],
    "rows": [
     [
      "Inlet",
      "0.05"
     ],
     [
      "First outlet",
      "0.02"
     ],
     [
      "Second outlet",
      "Unknown"
     ]
    ]
   },
   "22": {
    "t": "setups",
    "title": "Same ideal horizontal streamline; no pump/loss",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Density",
      "1000 kg/m³"
     ],
     [
      "Speed 1 / speed 2",
      "2 / 4 m/s"
     ]
    ]
   },
   "24": {
    "t": "setups",
    "title": "Same ideal streamline; equal speeds; no pump/loss",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Density / g",
      "1000 kg/m³ / 10 m/s²"
     ],
     [
      "Height rise",
      "2 m"
     ]
    ]
   },
   "27": {
    "t": "setups",
    "title": "Same ideal horizontal streamline; no pump/loss",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Density",
      "1000 kg/m³"
     ],
     [
      "Pressure 1",
      "150000 Pa"
     ],
     [
      "Speed 1 / speed 2",
      "2 / 4 m/s"
     ]
    ]
   },
   "29": {
    "t": "setups",
    "title": "Given point in ideal flow",
    "head": "Quantity",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Pressure / density",
      "100000 Pa / 1000 kg/m³"
     ],
     [
      "Speed / height",
      "2 m/s / 3 m"
     ],
     [
      "g",
      "10 m/s²"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Try: steady incompressible flow in a full pipe",
   "head": "Section",
   "cols": [
    "Area (m²)",
    "Speed (m/s)"
   ],
   "rows": [
    [
     "1",
     "0.04",
     "2"
    ],
    [
     "2",
     "0.01",
     "Unknown"
    ]
   ]
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Identify the fluid model and system before calculating. Density is mass per volume; pressure is normal force per area. State whether pressure is absolute or measured relative to a reference. Hydrostatic pressure depends on vertical depth and balances gravity. Buoyancy comes from the pressure forces and uses the displaced fluid, not automatically the whole object volume or the object weight. For steady flow, conserve mass through a full pipe with no accumulation or leaks. Apply Bernoulli along a streamline only with the stated ideal-flow and energy-transfer assumptions, keeping pressure, speed and height together. Check unit conversions, surface conditions and experimental uncertainty.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-physics-1-fluids","subject":"science","level":5,"grade":9,"standard":"AP Physics 1 CED, effective Fall 2024 with Fall 2026 clarifications, Unit 8, topics 8.1–8.4","title":"Fluids","goal":"Use particle models, density, pressure, force balances, mass continuity and mechanical-energy conservation to explain static and flowing fluids.","points":20,"progression":{"requires":["science-h-ap-physics-1-oscillations"],"operations":3,"demand":"Combine fluid properties, force diagrams, hydrostatic columns, flow continuity and energy accounts."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
