/* Original course unit. Review record: docs/review/lessons/high-completion/ap-physics1-u6-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "6.1",
  "name": "Rotational Kinetic Energy",
  "skill": "s1",
  "boardTitle": "Rotational Kinetic Energy",
  "teach": [
   "For a rigid body rotating about a fixed axis, Krot=½Iω². This comes from adding ½mv² for the mass elements and using v=r|ω|. The inertia and angular speed must refer to that same axis. For two 1kg point masses at radius 2m on a massless frame, I=8kg·m². At angular speed 3rad/s each point moves at 6m/s and has 18J, so total energy is 36J. A stationary center does not mean all particles are at rest.",
   "Rotational kinetic energy is a nonnegative scalar. With fixed I=2kg·m², angular velocities +3 and -3rad/s both give 9J. Doubling angular speed gives four times the energy, while doubling inertia at fixed speed gives twice the energy. Equal angular speeds therefore do not imply equal energies. Distinguish the sign of a change in energy, which can be negative, from the energy itself.",
   "A freely translating rigid body can also spin. Decompose its kinetic energy as ½Mvcm²+½Icmω², with the spin inertia about the center of mass. An original body with M=4kg, vcm=3m/s, Icm=2kg·m² and angular speed 4rad/s has 18J of translation and 16J of spin, totaling 34J. If instead using ½Iaxisω² for a body rotating about a fixed axis, that expression already includes all its particle motion; do not add the center-of-mass term again.",
   "For an experiment at constant inertia, plot rotational kinetic energy vertically against angular speed squared horizontally. The ideal slope is I/2 and the intercept zero. A slope 3kg·m² corresponds to inertia 6kg·m². Measuring energy through calibrated work requires accounting for losses and the starting energy. Compare repeated trials and residuals; a straight graph alone cannot establish that no friction or calibration bias exists."
  ],
  "eqs": [
   "Σ½mv²=2×½×1×6²=36J; ½Iω²=½×8×3²=36J",
   "½×2×(±3)²=9J; speed×2 gives energy×4",
   "Ktotal=½×4×3²+½×2×4²=18+16=34J",
   "K=(I/2)ω²; slope 3 ⇒ I = 6kg·m²"
  ],
  "boards": [
   [
    "Add the energy of moving mass elements",
    "Use inertia about the stated fixed axis",
    "Krot = ½Iω²"
   ],
   [
    "Kinetic energy has no clockwise sign",
    "Reversal alone preserves endpoint energy",
    "Speed enters squared; inertia enters linearly"
   ],
   [
    "Translation of CM + rotation about CM",
    "Use Icm in this two-term decomposition",
    "Avoid counting center motion twice"
   ],
   [
    "Vertical axis: rotational energy",
    "Horizontal axis: angular speed squared",
    "Slope = half the fixed inertia"
   ]
  ],
  "questions": [
   [
    "A rigid rotor spins about a fixed axis while its center of mass remains at rest. Can it have kinetic energy?",
    "Yes, its off-axis mass elements have linear speeds",
    "No, every part is motionless when the center is fixed",
    "Only if its mass changes",
    "Individual elements move even when the center does not. Summing their kinetic energies gives the rotational kinetic energy."
   ],
   [
    "What kind of quantity is rotational kinetic energy?",
    "A nonnegative scalar",
    "A signed clockwise or counterclockwise vector",
    "A force measured in newtons",
    "Energy has magnitude without a rotational direction. Reversing angular velocity does not make kinetic energy negative."
   ],
   [
    "At fixed positive inertia, doubling angular speed changes rotational kinetic energy by what factor?",
    "4",
    "2",
    "1/2",
    "The speed enters quadratically, so a twofold speed gives four times the energy. The linear factor belongs to angular momentum at fixed inertia."
   ],
   [
    "At fixed angular speed, doubling rotational inertia changes rotational kinetic energy by what factor?",
    "2",
    "4",
    "1/2",
    "Inertia enters the energy expression linearly. Its doubling does not square or invert the energy change."
   ],
   [
    "A rotor reverses from angular velocity +5rad/s to -5rad/s with unchanged inertia. How do its initial and final kinetic energies compare?",
    "They are equal",
    "The final energy is negative",
    "The final energy is zero",
    "Both velocities have the same square. The reversal can involve transfers in between, but the two endpoint energies match."
   ],
   [
    "When adding center-of-mass translation and spin energy, which inertia belongs in the spin term?",
    "Inertia about the center-of-mass rotation axis",
    "Any convenient axis, even if its inertia differs",
    "The mass alone with no distance factors",
    "The decomposition uses center-of-mass translation plus rotation relative to that center. An arbitrary shifted-axis term can double-count part of the motion."
   ],
   [
    "For a body rotating about a stationary axis, the expression one-half Iaxis times angular speed squared already includes what?",
    "The kinetic energy of all its moving mass elements",
    "Only energy unrelated to center-of-mass translation",
    "The gravitational potential energy automatically",
    "The fixed-axis expression sums every particle's squared speed about that axis. Adding another center-of-mass term to it would double-count motion."
   ],
   [
    "What does a graph of rotational kinetic energy versus angular speed squared look like for fixed inertia?",
    "A straight line through the origin with slope I/2",
    "A straight line with slope I squared",
    "A negative line because rotation can be clockwise",
    "With the squared speed on the horizontal axis, the coefficient is half the inertia. The energy remains nonnegative for either rotation sense."
   ],
   [
    "Two bodies have the same nonzero angular speed but different inertias. Which has greater rotational kinetic energy?",
    "The body with greater inertia about the stated axis",
    "The body with smaller inertia in every case",
    "They must have equal energy because speeds match",
    "At fixed angular speed, energy scales with inertia. Mass distribution and axis still matter even when angular rates agree."
   ],
   [
    "Why must an experiment hold the axis and mass arrangement fixed when testing energy versus squared angular speed?",
    "Otherwise a change in inertia could also change the energy",
    "The energy equation forbids nonzero mass",
    "Changing the axis never changes inertia",
    "Controlling inertia isolates the predicted speed dependence. Repeated measurements and uncertainty checks are still necessary."
   ],
   [
    "A fixed-axis rotor has I=2kg·m² and angular speed 4rad/s. What is rotational kinetic energy in joules?",
    "16",
    "32",
    "8",
    "Summing the kinetic energies of the rotating mass elements gives one-half I times squared speed. The correct value includes both the square and the one-half factor."
   ],
   [
    "A fixed-axis rotor has I=3kg·m² and angular speed 2rad/s. What is rotational kinetic energy in joules?",
    "6",
    "12",
    "18",
    "Summing the kinetic energies of the rotating mass elements gives one-half I times squared speed. The correct value includes both the square and the one-half factor."
   ],
   [
    "A fixed-axis rotor has I=0.5kg·m² and angular speed 6rad/s. What is rotational kinetic energy in joules?",
    "9",
    "18",
    "3",
    "Summing the kinetic energies of the rotating mass elements gives one-half I times squared speed. The correct value includes both the square and the one-half factor."
   ],
   [
    "A rotor with inertia 2kg·m² has rotational kinetic energy 36J. What is angular speed in rad/s?",
    "6",
    "3",
    "18",
    "For this inertia the energy equals the numerical value of angular speed squared. The positive speed is the square root of36, not36 divided by inertia again."
   ],
   [
    "A rigid body has mass 4kg, center speed 3m/s, center-axis inertia 2kg·m² and angular speed 4rad/s. What is total kinetic energy in joules?",
    "34",
    "18",
    "16",
    "Center translation contributes18J and spin relative to the center contributes16J. Their sum is34J; either term alone omits a kind of motion."
   ],
   [
    "Two 1kg point masses lie 2m from a fixed axis on a massless frame rotating at 3rad/s. What is total kinetic energy in joules?",
    "36",
    "18",
    "72",
    "Each mass moves at6m/s and therefore has18J of kinetic energy. Adding the two particle energies gives36J, agreeing with inertia8kg·m²."
   ],
   [
    "A graph of K in joules versus angular speed squared in rad²/s² has slope 3kg·m². What is the rotor inertia in kg·m²?",
    "6",
    "3",
    "1.5",
    "The graph coefficient is I/2. An inertia6 gives coefficient3; identifying the coefficient directly as I misses the half."
   ],
   [
    "A rotor's inertia stays fixed while its kinetic energy rises from 5J to 20J. By what factor does its angular speed magnitude increase?",
    "2",
    "4",
    "16",
    "The energy ratio is4, so the speed ratio is its positive square root2. The energy ratio is not itself the speed ratio."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Add the particle kinetic energies",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      180,
      119
     ],
     "P1": [
      420,
      119
     ],
     "P2": [
      300,
      119
     ],
     "P3": [
      180,
      119
     ],
     "P4": [
      420,
      119
     ],
     "P5": [
      180,
      119
     ],
     "P6": [
      180,
      59
     ],
     "P7": [
      420,
      119
     ],
     "P8": [
      420,
      179
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P5P6",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P7P8",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       237,
       91
      ],
      "text": "2m",
      "col": 0
     },
     {
      "at": [
       365,
       91
      ],
      "text": "2m",
      "col": 0
     },
     {
      "at": [
       161,
       185
      ],
      "text": "1kg",
      "col": 0
     },
     {
      "at": [
       460,
       124
      ],
      "text": "1kg",
      "col": 0
     },
     {
      "at": [
       232,
       55
      ],
      "text": "6m/s",
      "col": 1
     },
     {
      "at": [
       460,
       189
      ],
      "text": "6m/s",
      "col": 1
     },
     {
      "at": [
       320,
       214
      ],
      "text": "Fixed center; ω = 3rad/s",
      "col": 0
     },
     {
      "at": [
       320,
       31
      ],
      "text": "Each mass 18J; total 36J",
      "col": 2
     }
    ],
    "circles": [
     {
      "c": "P2",
      "r": 4,
      "col": 3
     },
     {
      "c": "P3",
      "r": 12,
      "col": 0
     },
     {
      "c": "P4",
      "r": 12,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Same energy for either rotation sense",
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
      339.375,
      61
     ],
     "P7": [
      339.375,
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
      134.125
     ],
     "P13": [
      120,
      134.125
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
      339.375,
      134.125
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
      "text": "Angular speed squared (rad²/s²)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Rotational energy (J)",
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
       339.375,
       41
      ],
      "text": "9",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "16",
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
       129.125
      ],
      "text": "9",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "16",
      "col": 0
     },
     {
      "at": [
       359.375,
       110.125
      ],
      "text": "9J at either ±3rad/s",
      "col": 0
     },
     {
      "at": [
       407,
       214
      ],
      "text": "I = 2kg·m²",
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
   },
   {
    "t": "setups",
    "title": "Separate center motion from spin",
    "head": "Energy term",
    "cols": [
     "Calculation",
     "J"
    ],
    "rows": [
     [
      "Translation",
      "½×4×3²",
      "18"
     ],
     [
      "Spin about CM",
      "½×2×4²",
      "16"
     ],
     [
      "Total",
      "18+16",
      "34"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Energy versus squared angular speed",
    "head": "ω²(rad²/s²)",
    "cols": [
     "K(J)"
    ],
    "rows": [
     [
      "0",
      "0"
     ],
     [
      "4",
      "12"
     ],
     [
      "9",
      "27"
     ]
    ]
   }
  ],
  "qpics": {
   "14": {
    "t": "setups",
    "title": "Rigid body translating and spinning",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Mass / center speed",
      "4kg / 3m/s"
     ],
     [
      "CM inertia / angular speed",
      "2kg·m² / 4rad/s"
     ]
    ]
   },
   "15": {
    "t": "setups",
    "title": "Two masses on a massless rigid frame",
    "head": "Mass(kg)",
    "cols": [
     "Radius(m)",
     "ω(rad/s)"
    ],
    "rows": [
     [
      "1",
      "2",
      "3"
     ],
     [
      "1",
      "2",
      "3"
     ]
    ]
   },
   "16": {
    "t": "setups",
    "title": "K versus angular speed squared",
    "head": "ω²(rad²/s²)",
    "cols": [
     "K(J)"
    ],
    "rows": [
     [
      "0",
      "0"
     ],
     [
      "4",
      "12"
     ],
     [
      "9",
      "27"
     ]
    ]
   }
  }
 },
 {
  "code": "6.2",
  "name": "Torque and Work",
  "skill": "s2",
  "boardTitle": "Torque and Work",
  "teach": [
   "A torque can transfer energy when its point of application moves as the body turns. For fixed-axis rotation and constant signed torque, W=τΔθ with angle in radians. A +6N·m torque through +3rad gives +18J; a -4N·m resistance through +5rad gives -20J. No angular displacement means no rotational work on the ideal rotor. Torque uses N·m and work uses joules even though these share dimensions.",
   "For variable torque, the signed area under a torque-versus-angle graph gives work. If net torque rises linearly from 2N·m at 0rad to 6N·m at 4rad, a rectangle contributes 8J and the extra triangle 8J, so work is 16J. Do not multiply the final torque by the entire interval. A graph with time on the horizontal axis instead gives angular impulse; a similar area shape can have a different physical meaning.",
   "The net work on a rigid fixed-axis rotor equals its change in rotational kinetic energy. If initial energy is 10J, drive work 30J and brake work -8J, final energy is 32J. A rotor starting from rest with I=4kg·m² and receiving 18J ends with angular speed 3rad/s. The energy equation gives the speed magnitude; the rotation sense needs other information. Include every torque and do not count the same energy transfer twice.",
   "Power measures how quickly work is transferred. Instantaneously P=τω for a torque about a fixed axis, with consistent signs. A +5N·m drive at +4rad/s supplies 20W; an opposing torque has negative power for that motion. In a brake experiment, energy leaving rotation can heat the brake, shaft or surroundings. A measured work-energy mismatch calls for checking friction, calibration and the initial energy; it does not establish that energy has disappeared."
  ],
  "eqs": [
   "W=τΔθ; (+6)×(+3)=+18J",
   "Work=2×4+½×4×(6−2)=16J",
   "Kfinal=10+30−8=32J; 18=½×4×ω² ⇒ speed 3",
   "P=τω=5×4=20W"
  ],
  "boards": [
   [
    "Work needs torque and angular displacement",
    "Use radians and consistent signs",
    "Opposing torque can remove energy"
   ],
   [
    "Read the horizontal axis",
    "Torque versus angle: signed work",
    "Add rectangles and triangles when applicable"
   ],
   [
    "Net work = final K minus initial K",
    "Include drive and resistance",
    "Energy determines speed magnitude"
   ],
   [
    "Power = energy transferred per time",
    "Instantaneous fixed-axis P = τω",
    "Thermal energy belongs in the full account"
   ]
  ],
  "questions": [
   [
    "What graph area gives rotational work about a fixed axis?",
    "Signed area under torque versus angular position",
    "Area under torque versus time",
    "Area under angular velocity versus time",
    "Torque acting through an angular displacement transfers energy. Torque-time area measures angular impulse, while angular-velocity-time area gives angular displacement."
   ],
   [
    "A rotor turns through a positive angular displacement under a negative torque. What is the sign of work by that torque?",
    "Negative",
    "Positive automatically because it moves",
    "Always zero",
    "Torque opposing the displacement removes rotational energy. Motion alone does not determine the sign of each force's work."
   ],
   [
    "Which angle unit belongs in W=τΔθ without an extra conversion factor?",
    "Radians",
    "Degrees",
    "Bare revolutions",
    "Radians connect the rim's arc length to its radius. Degrees or revolutions require conversion before multiplying by torque."
   ],
   [
    "Which work equals the change of kinetic energy for a rigid rotor about a fixed axis?",
    "The net work of all external torques",
    "Only the motor's positive work regardless of resistance",
    "Always zero because the axis is stationary",
    "Opposing torques can remove energy while the motor adds it. The total work, including each contribution, equals the energy change."
   ],
   [
    "A constant torque holds an ideal rotor with no angular displacement. How much rotational work does it do?",
    "Zero",
    "A positive amount equal to the torque regardless of units",
    "An infinite amount",
    "Work requires displacement as well as torque. Static holding can involve a force without mechanical energy transfer to the stationary ideal rotor."
   ],
   [
    "When is multiplying one torque value by the entire angular displacement valid directly?",
    "When that torque is constant over the displacement, or is the appropriate angle average",
    "For every variable torque without averaging",
    "Only when the angle is measured in degrees",
    "Changing torque requires adding its angle-dependent contributions. A suitable angle average preserves the area; an arbitrary endpoint value need not."
   ],
   [
    "Why can net work determine final angular speed but fail to determine its sign alone?",
    "Kinetic energy contains angular velocity squared",
    "Kinetic energy is always a negative vector",
    "Work supplies every detail of the time history",
    "Opposite angular velocities have identical energy. Additional information about direction or the motion history selects the sign."
   ],
   [
    "Which quantity measures the rate of doing rotational work?",
    "Power, with instantaneous value τω for a fixed-axis torque",
    "Rotational inertia alone",
    "Angular displacement without a time factor",
    "Dividing a small work increment by elapsed time gives torque times angular velocity. The units are watts, not inertia or angle."
   ],
   [
    "If a brake brings a rotor to rest, what happens to its initial kinetic energy in a system including the warmed brake?",
    "It is transferred into other energy forms such as thermal energy",
    "Energy is destroyed by friction",
    "It must all remain rotational kinetic energy",
    "The rotor loses mechanical energy, but total energy accounting includes heating and possibly other transfers. Dissipation is not destruction of energy."
   ],
   [
    "Why label the horizontal axis before interpreting the area of a torque graph?",
    "Torque-angle area is work, while torque-time area is angular impulse",
    "Every torque graph area has the same physical units",
    "Axis labels cannot affect the interpretation",
    "Area units include the horizontal variable. Angular displacement and time produce different quantities despite similar-looking plots."
   ],
   [
    "A constant torque 6N·m acts through angular displacement +3rad about a fixed axis. What work does it do in joules?",
    "18",
    "-18",
    "6",
    "The signed torque and signed angular displacement determine the signed work. The opposite sign reverses the energy transfer, while torque alone omits the displacement."
   ],
   [
    "A constant torque -4N·m acts through angular displacement +5rad about a fixed axis. What work does it do in joules?",
    "-20",
    "20",
    "-4",
    "The signed torque and signed angular displacement determine the signed work. The opposite sign reverses the energy transfer, while torque alone omits the displacement."
   ],
   [
    "A constant torque 8N·m acts through angular displacement +2rad about a fixed axis. What work does it do in joules?",
    "16",
    "-16",
    "8",
    "The signed torque and signed angular displacement determine the signed work. The opposite sign reverses the energy transfer, while torque alone omits the displacement."
   ],
   [
    "Net torque rises linearly from 2N·m at angle 0rad to 6N·m at angle 4rad. What net work is done in joules?",
    "16",
    "24",
    "8",
    "The angle-average torque is 4N·m over 4rad, giving 16J. A rectangle at either endpoint ignores the linear change."
   ],
   [
    "A fixed-axis rotor initially has kinetic energy 10J. A motor does 30J and a brake does -8J of work, with no other work. What is final kinetic energy in joules?",
    "32",
    "40",
    "22",
    "The net addition is 22J, which must be added to the starting 10J. Ignoring the brake gives 40; omitting the initial energy gives 22."
   ],
   [
    "A rotor starts from rest with inertia 4kg·m². Net work 18J is done about its fixed axis. What is final angular speed in rad/s?",
    "3",
    "9",
    "4.5",
    "The final energy is 18J and equals 2ω². The positive speed is 3rad/s;9 is its square, not the speed."
   ],
   [
    "A brake exerts constant torque -3N·m while a rotor turns positively through 5rad. How much mechanical energy is removed, as a positive amount in joules?",
    "15",
    "-15",
    "3",
    "Work by the brake is -15J. The question asks the positive amount removed,15J, rather than the signed work."
   ],
   [
    "A drive applies torque 5N·m to a fixed-axis shaft rotating at +4rad/s in the same sense. What instantaneous power does it deliver in watts?",
    "20",
    "1.25",
    "9",
    "Every second,4radians of motion receive 5joules per radian from the drive. The rate is 20J/s; neither a quotient nor a sum has the required meaning."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Torque-angle area is work",
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
      93.5
     ],
     "P13": [
      120,
      93.5
     ],
     "P14": [
      115,
      158.5
     ],
     "P15": [
      120,
      158.5
     ],
     "P16": [
      120,
      61
     ],
     "P17": [
      120,
      93.5
     ],
     "P18": [
      510,
      158.5
     ],
     "P19": [
      510,
      61
     ],
     "P20": [
      120,
      93.5
     ],
     "P21": [
      510,
      158.5
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
      "v": "P20P21",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P16P17P18P19",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Angle (rad)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Net torque (N·m)",
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
       88.5
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       97,
       153.5
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       354,
       93.5
      ],
      "text": "Work 16J",
      "col": 2
     },
     {
      "at": [
       405,
       214
      ],
      "text": "Area under torque versus angle",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Keep the initial energy in the account",
    "head": "Term",
    "cols": [
     "J"
    ],
    "rows": [
     [
      "Initial kinetic energy",
      "10"
     ],
     [
      "Drive work",
      "+30"
     ],
     [
      "Brake work",
      "-8"
     ],
     [
      "Final kinetic energy",
      "32"
     ]
    ]
   },
   null
  ],
  "qpics": {
   "13": {
    "t": "setups",
    "title": "Linear torque versus angle",
    "head": "Angle(rad)",
    "cols": [
     "Torque(N·m)"
    ],
    "rows": [
     [
      "0",
      "2"
     ],
     [
      "4",
      "6"
     ]
    ]
   },
   "14": {
    "t": "setups",
    "title": "Fixed-axis rotor work account",
    "head": "Term",
    "cols": [
     "J"
    ],
    "rows": [
     [
      "Initial energy",
      "10"
     ],
     [
      "Motor work",
      "+30"
     ],
     [
      "Brake work",
      "-8"
     ]
    ]
   }
  }
 },
 {
  "code": "6.3",
  "name": "Angular Momentum and Angular Impulse",
  "skill": "s3",
  "boardTitle": "Momentum and impulse",
  "teach": [
   "For planar rigid rotation, signed angular momentum about the rotation axis is L=Iω. This unit uses one-axis signs, with a stated positive sense, without requiring three-dimensional direction rules. A rotor with I=2kg·m² and ω=-3rad/s has L=-6kg·m²/s but kinetic energy +9J. Angular momentum and energy are different quantities; only energy squares the angular speed.",
   "A point particle can have angular momentum even while moving in a straight line. Its magnitude about a fixed point is L=rmv sinφ=mvb, where b is the perpendicular distance from that point to the line of motion and φ is the angle between radial position and velocity. A 2kg particle moving at 3m/s along a line 4m from the origin has magnitude 24kg·m²/s. If the line passes through the origin, the magnitude is zero. Do not substitute the changing radial distance for the constant perpendicular arm.",
   "Angular impulse is accumulated torque over time. For a constant or appropriate time-average torque, Jangular=τΔt. More generally it is the signed area under the torque-time graph. A torque rising linearly from 0 to 6N·m over 4s gives triangular area 12kg·m²/s. The area of a torque-angle graph instead measures work. Label axes and units before deciding which principle a graph represents.",
   "About a fixed point in an inertial frame, net external angular impulse equals the change in total angular momentum: ΔL=Lfinal-Linitial. Starting at +5 and receiving -8kg·m²/s gives final -3, not +13. A positive torque can slow a negatively rotating fixed-inertia body before reversing it. The local slope of an L-time graph is net external torque; a line from L = 2 to L = 14 over 3s has slope 4N·m.",
   "Sum torques and momenta about the same reference. Equal and opposite torque-time areas can leave the final angular momentum equal to the initial value even though it changed in between. For a torque +4N·m for 2s followed by -2N·m for 4s, the impulses +8 and -8 cancel. In a lab, estimate areas from measured torque over time and compare with the momentum change using independently measured inertia and angular velocities. Report uncertainty and possible bearing torques rather than forcing agreement."
  ],
  "eqs": [
   "L=Iω=2×(−3)=−6kg·m²/s; K=9J",
   "Magnitude L=mvb=2×3×4=24kg·m²/s",
   "Angular impulse=½×4×6=12kg·m²/s",
   "Lfinal=5−8=−3; slope=(14−2)/3=4N·m",
   "Net angular impulse=4×2−2×4=0"
  ],
  "boards": [
   [
    "Angular momentum uses a reference axis",
    "For planar rigid rotation: L = Iω",
    "Keep signs; energy instead uses ω²"
   ],
   [
    "A straight path can have angular momentum",
    "Use perpendicular distance to momentum line",
    "Zero arm gives zero angular momentum"
   ],
   [
    "Torque-time area is angular impulse",
    "Keep the signs of separate areas",
    "Torque-angle area is a different quantity"
   ],
   [
    "Net external impulse = change in total L",
    "Slope of L versus time is net torque",
    "A signed change can reverse the motion"
   ],
   [
    "Choose one system and one reference",
    "Opposite impulses may cancel at endpoints",
    "Measurements require uncertainty checks"
   ]
  ],
  "questions": [
   [
    "For planar rigid rotation about the specified fixed axis, how is the signed angular momentum calculated?",
    "L=Iω",
    "L=one-half Iω²",
    "L=mass divided by angular speed",
    "Angular momentum is linear in angular velocity for fixed inertia. The squared expression is kinetic energy, a different quantity."
   ],
   [
    "What unit measures angular momentum?",
    "kg·m²/s",
    "joules",
    "kg·m/s²",
    "The inertia-times-angular-velocity product has units kg·m²/s. Joules measure energy and kg·m/s² measures force."
   ],
   [
    "Can a particle traveling in a straight line have angular momentum about a fixed reference point off that line?",
    "Yes, because its momentum has a nonzero perpendicular arm",
    "No, angular momentum requires a curved trajectory",
    "Only if the reference point moves with the particle",
    "Angular momentum depends on position relative to the chosen origin and linear momentum. Curved motion is not required."
   ],
   [
    "A particle moves directly along a line through the chosen reference point. What is its angular momentum about that point?",
    "Zero",
    "Necessarily its mass times speed times any radius",
    "Infinite at every position",
    "Its momentum line has zero perpendicular arm about the reference point. Nonzero linear momentum can coexist with zero angular momentum there."
   ],
   [
    "Why must a particle's angular momentum calculation specify a reference point?",
    "The perpendicular distance to its momentum line depends on that point",
    "The particle's physical mass changes with the origin",
    "Its actual speed becomes zero for every origin",
    "The same straight-line motion can have different angular momentum about different origins. That is a reference dependence, not a change in the physical mass or motion."
   ],
   [
    "What graph area gives angular impulse?",
    "Signed area under external torque versus time",
    "Area under torque versus angle",
    "Area under kinetic energy versus angle",
    "A torque accumulated over time changes angular momentum. Accumulation over angle instead measures rotational work."
   ],
   [
    "Which change equals net external angular impulse about a fixed inertial origin?",
    "Final total angular momentum minus initial total angular momentum",
    "Always final kinetic energy minus initial kinetic energy",
    "Final angular position minus initial angular position",
    "The impulse relation concerns angular momentum, with signs retained. Energy and angle have different units and conservation conditions."
   ],
   [
    "What does the local slope of an angular-momentum-versus-time graph represent?",
    "Net external torque about the stated reference",
    "Angular position",
    "Rotational kinetic energy",
    "A local momentum change per time is net torque. The vertical value itself is angular momentum, not its rate of change."
   ],
   [
    "Angular momentum changes from a negative value toward zero under positive torque. Must angular speed increase for fixed positive inertia before reversal?",
    "No, its magnitude decreases toward zero",
    "Yes, every positive torque increases speed",
    "The initial negative momentum is impossible",
    "Positive change can reduce the magnitude of a negative angular momentum. The signed quantity and its magnitude must be distinguished."
   ],
   [
    "Why can equal positive and negative torque-time areas leave the endpoint angular momentum unchanged?",
    "Their signed angular impulses cancel",
    "Each torque is individually zero at every instant",
    "Angular momentum cannot change during the interval",
    "Net endpoint change can be zero even though angular momentum changes and then returns. Cancellation of areas does not mean no intervening dynamics."
   ],
   [
    "A rigid fixed-axis rotor has I=2kg·m² and signed angular velocity 5rad/s. What is signed angular momentum in kg·m²/s?",
    "10",
    "-10",
    "25",
    "Use the stated signed angular velocity with the same-axis inertia. Energy is not angular momentum, and reversing the sign changes the rotational sense."
   ],
   [
    "A rigid fixed-axis rotor has I=3kg·m² and signed angular velocity -4rad/s. What is signed angular momentum in kg·m²/s?",
    "-12",
    "12",
    "24",
    "Use the stated signed angular velocity with the same-axis inertia. Energy is not angular momentum, and reversing the sign changes the rotational sense."
   ],
   [
    "A rigid fixed-axis rotor has I=0.5kg·m² and signed angular velocity 8rad/s. What is signed angular momentum in kg·m²/s?",
    "4",
    "-4",
    "16",
    "Use the stated signed angular velocity with the same-axis inertia. Energy is not angular momentum, and reversing the sign changes the rotational sense."
   ],
   [
    "A 2kg particle travels at 3m/s along a straight line whose perpendicular distance from a fixed reference point is 4m. What is angular momentum magnitude in kg·m²/s?",
    "24",
    "12",
    "6",
    "The linear momentum magnitude is 6kg·m/s and its perpendicular arm 4m. Their product 24 is independent of the particle's changing distance along that line."
   ],
   [
    "A particle of mass 2kg has speed 5m/s at distance 3m from an origin. Its velocity makes 30 degrees with its radial position; use sin 30°=0.5. What is angular momentum magnitude in kg·m²/s?",
    "15",
    "30",
    "10",
    "Only the tangential velocity component contributes about the origin. The perpendicular factor halves the maximum radius-times-momentum value 30."
   ],
   [
    "A constant net torque -3N·m acts for 4s about a fixed inertial axis. What is angular impulse in kg·m²/s?",
    "-12",
    "12",
    "-3",
    "The signed torque-time area is -12. The sign follows the torque, while the value -3 alone has torque rather than impulse units."
   ],
   [
    "An angular-momentum graph is a straight line from L=2kg·m²/s at t=0s to L=14kg·m²/s at t=3s. What net torque does its slope give in N·m?",
    "4",
    "12",
    "14",
    "The momentum change12 occurs over3seconds. The rate4N·m is the slope;12 is the impulse and14 the final momentum."
   ],
   [
    "Net torque rises linearly from 0N·m to 6N·m over 4s. What angular impulse is delivered in kg·m²/s?",
    "12",
    "24",
    "6",
    "The triangular torque-time area is half of 4×6, giving 12. Using the full endpoint-height rectangle would double the impulse."
   ],
   [
    "A system starts with signed angular momentum 5kg·m²/s and receives net angular impulse -8kg·m²/s. What is final angular momentum in kg·m²/s?",
    "-3",
    "3",
    "13",
    "Adding the signed change gives 5-8=-3. Crossing zero reverses the sign; adding magnitudes would produce a different physical impulse."
   ],
   [
    "A fixed-axis rotor changes angular momentum by +9kg·m²/s in 3s. What is the average net torque in N·m?",
    "3",
    "27",
    "9",
    "An average 3N·m acting for 3s supplies the given angular impulse 9. A product or the impulse alone does not give a rate."
   ]
  ],
  "check": [
   "A system has initial angular momentum -4 kg·m²/s. Net external torque +3 N·m acts for 3 s about the same fixed inertial axis. What is final angular momentum in kg·m²/s?",
   "5",
   "-13",
   "9",
   "The positive impulse is 9 kg·m²/s; adding it to the initial -4 gives final +5."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Same rotor, different quantities",
    "head": "Given I = 2; ω = -3",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Angular momentum",
      "-6kg·m²/s"
     ],
     [
      "Kinetic energy",
      "+9J"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "A straight path can carry angular momentum",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      110,
      165
     ],
     "P1": [
      510,
      165
     ],
     "P2": [
      360,
      165
     ],
     "P3": [
      360,
      165
     ],
     "P4": [
      470,
      165
     ],
     "P5": [
      250,
      65
     ],
     "P6": [
      250,
      65
     ],
     "P7": [
      250,
      165
     ],
     "P8": [
      250,
      65
     ],
     "P9": [
      360,
      165
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P3P4",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P6P7",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P8P9",
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
       430,
       189
      ],
      "text": "m = 2kg; v = 3m/s",
      "col": 0
     },
     {
      "at": [
       186,
       110
      ],
      "text": "b = 4m",
      "col": 2
     },
     {
      "at": [
       192,
       45
      ],
      "text": "Reference O",
      "col": 3
     },
     {
      "at": [
       358,
       91
      ],
      "text": "Radial distance varies",
      "col": 3
     },
     {
      "at": [
       320,
       214
      ],
      "text": "Straight path: magnitude L = 24kg·m²/s",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P2",
      "r": 6,
      "col": 0
     },
     {
      "c": "P5",
      "r": 5,
      "col": 3
     }
    ]
   },
   {
    "t": "figure",
    "title": "Torque-time area is angular impulse",
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
      109.75
     ],
     "P13": [
      120,
      109.75
     ],
     "P14": [
      115,
      158.5
     ],
     "P15": [
      120,
      158.5
     ],
     "P16": [
      120,
      61
     ],
     "P17": [
      510,
      158.5
     ],
     "P18": [
      510,
      61
     ],
     "P19": [
      120,
      61
     ],
     "P20": [
      510,
      158.5
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20",
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
      "v": "P19P20",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P16P17P18",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Time (s)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Net torque (N·m)",
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
       104.75
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       97,
       153.5
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       373.5,
       82.125
      ],
      "text": "Impulse 12kg·m²/s",
      "col": 2
     },
     {
      "at": [
       408,
       213
      ],
      "text": "Triangle area = change in L",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Momentum slope gives net torque",
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
      250,
      61
     ],
     "P7": [
      250,
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
      77.25
     ],
     "P13": [
      120,
      77.25
     ],
     "P14": [
      115,
      126
     ],
     "P15": [
      120,
      126
     ],
     "P16": [
      115,
      174.75
     ],
     "P17": [
      120,
      174.75
     ],
     "P18": [
      120,
      77.25
     ],
     "P19": [
      510,
      174.75
     ],
     "P20": [
      120,
      77.25
     ],
     "P21": [
      510,
      174.75
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
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Time (s)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Angular momentum (kg·m²/s)",
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
       250,
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
      "text": "3",
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
       72.25
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       97,
       169.75
      ],
      "text": "14",
      "col": 0
     },
     {
      "at": [
       416,
       213
      ],
      "text": "Slope 4N·m",
      "col": 0
     },
     {
      "at": [
       367,
       93.5
      ],
      "text": "Rise 12 over 3s",
      "col": 2
     }
    ],
    "circles": [
     {
      "c": "P20",
      "r": 4,
      "col": 0
     },
     {
      "c": "P21",
      "r": 4,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Endpoint cancellation permits intervening change",
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
      250,
      61
     ],
     "P7": [
      250,
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
      87
     ],
     "P11": [
      120,
      87
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
      120,
      113
     ],
     "P17": [
      120,
      165
     ],
     "P18": [
      250,
      165
     ],
     "P19": [
      250,
      113
     ],
     "P20": [
      120,
      165
     ],
     "P21": [
      250,
      165
     ],
     "P22": [
      250,
      113
     ],
     "P23": [
      250,
      87
     ],
     "P24": [
      510,
      87
     ],
     "P25": [
      510,
      113
     ],
     "P26": [
      250,
      87
     ],
     "P27": [
      510,
      87
     ],
     "P28": [
      120,
      113
     ],
     "P29": [
      510,
      113
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29",
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
      "v": "P20P21",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P26P27",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P28P29",
      "col": 3,
      "arrows": 0,
      "dash": true,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P16P17P18P19",
      "col": 2
     },
     {
      "v": "P22P23P24P25",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Time (s)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Net torque (N·m)",
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
       250,
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
      "text": "6",
      "col": 0
     },
     {
      "at": [
       97,
       82
      ],
      "text": "-2",
      "col": 0
     },
     {
      "at": [
       97,
       108
      ],
      "text": "0",
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
       178.5,
       139
      ],
      "text": "+8",
      "col": 2
     },
     {
      "at": [
       380,
       96
      ],
      "text": "-8",
      "col": 1
     },
     {
      "at": [
       420,
       214
      ],
      "text": "Net impulse 0; L can vary between",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "16": {
    "t": "setups",
    "title": "Straight angular-momentum graph",
    "head": "t(s)",
    "cols": [
     "L(kg·m²/s)"
    ],
    "rows": [
     [
      "0",
      "2"
     ],
     [
      "3",
      "14"
     ]
    ]
   },
   "17": {
    "t": "setups",
    "title": "Linearly increasing torque",
    "head": "t(s)",
    "cols": [
     "Torque(N·m)"
    ],
    "rows": [
     [
      "0",
      "0"
     ],
     [
      "4",
      "6"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Try: add a signed angular impulse",
   "head": "Quantity",
   "cols": [
    "Given"
   ],
   "rows": [
    [
     "Initial L",
     "-4 kg·m²/s"
    ],
    [
     "Net torque / duration",
     "+3 N·m / 3 s"
    ]
   ]
  }
 },
 {
  "code": "6.4",
  "name": "Conservation of Angular Momentum",
  "skill": "s4",
  "boardTitle": "Conservation of Angular Momentum",
  "teach": [
   "For a chosen system about a fixed inertial reference point, zero net external torque means constant total angular momentum. Add the parts about the same axis using one sign convention. Internal torques can exchange momentum between parts without changing their sum. A torque from a second disk is external if the system is only the first disk, but internal if both disks and their interaction are included. Check the system boundary before asserting conservation.",
   "A rotating system can redistribute its mass without receiving appreciable external angular impulse. Between states of common rotation, Iiωi=Ifωf. If inertia changes from 6 to 3kg·m² while initial angular velocity is 2rad/s, final angular velocity is 4rad/s. Rotational energy rises from 12 to 24J. Work by internal actuators or muscles can supply that increase from other energy forms; conservation of angular momentum does not by itself conserve rotational kinetic energy.",
   "When two coaxial rotors couple, conserve their summed angular momentum if external axle torque is negligible during contact. For I1=2kg·m² at 6rad/s and I2=4kg·m² initially at rest, initial momentum is 12 and combined inertia 6, so common angular velocity is 2rad/s. Initial rotational energy 36J falls to 12J as 24J becomes other forms such as thermal energy. The contact friction is internal to the pair, but it still changes each rotor separately.",
   "Include incoming objects when choosing a collision system. A 1kg point mass moving tangentially at 6m/s at radius 1m brings angular momentum 6kg·m²/s. If it sticks to a stationary rotor with inertia 2kg·m² and axle torque is negligible, the combined inertia is 3 and angular speed 2rad/s. For a real collision, estimate external angular impulse and compare it with the momenta; a brief event alone does not prove exact conservation. Distinguish a negligible impulse approximation from an exact ideal model."
  ],
  "eqs": [
   "Ltotal=ΣLparts; zero net external torque ⇒ constant L",
   "6×2=3×4; Kinitial = 12J, Kfinal = 24J",
   "2×6+4×0=(2+4)×2; energy 36−12=24J",
   "Initial L=1×6×1=6; final I=2+1×1²=3"
  ],
  "boards": [
   [
    "Name the system and reference axis",
    "Internal exchange may change each part",
    "Zero net external torque conserves total L"
   ],
   [
    "Moving mass inward can increase spin speed",
    "Compare Iiωi with Ifωf",
    "Rotational energy may change through internal work"
   ],
   [
    "Use the combined system for coupling",
    "Sum signed momenta, then add inertias",
    "Friction can transfer energy to heat"
   ],
   [
    "An incoming particle can carry angular momentum",
    "Include its added inertia after capture",
    "Estimate any external angular impulse"
   ]
  ],
  "questions": [
   [
    "When is a selected system's angular momentum constant about a fixed inertial reference point?",
    "When net external torque about that point is zero throughout the interval",
    "Whenever any internal friction exists",
    "Whenever its kinetic energy changes",
    "Conservation for the selected system follows from zero net external torque about that reference. Internal exchanges do not automatically prevent it; energy is a separate account."
   ],
   [
    "If internal torques transfer angular momentum between two rotors, what can remain constant with no net external torque?",
    "The sum for both rotors",
    "Each rotor's angular momentum separately in every case",
    "Only the faster rotor's angular momentum",
    "Internal interactions can change the two parts while conserving their total. Looking at one part alone leaves the other's torque external to that smaller system."
   ],
   [
    "A spinning system reduces its inertia while maintaining nonzero angular momentum about the same axis. What happens to angular speed magnitude?",
    "It increases",
    "It must decrease",
    "It must stay constant",
    "For the stated common rotation before and after, inertia times angular velocity is fixed. Reducing inertia requires a larger speed magnitude."
   ],
   [
    "Does conserved angular momentum guarantee unchanged rotational kinetic energy when inertia changes?",
    "No, internal work or dissipative processes can change rotational kinetic energy",
    "Yes, momentum and energy are the same quantity",
    "Yes, because all internal work is always zero",
    "At fixed nonzero L, rotational energy is L²/(2I). Changes in inertia can change that energy, with other energy forms supplying or receiving the difference."
   ],
   [
    "Two coaxial disks rub until they spin together, with negligible external torque about their common axis. Which quantity is conserved for the pair?",
    "Total angular momentum about that axis",
    "Rotational kinetic energy in every rubbing process",
    "The angular speed of each disk",
    "The frictional torques exchange angular momentum internally, while relative motion can convert kinetic energy to thermal energy. Individual speeds need not remain fixed."
   ],
   [
    "A disk interacts with a second disk, but the selected system includes only the first. How is their contact torque classified?",
    "External to that selected one-disk system",
    "Internal regardless of the chosen system",
    "Always zero because contact forces are paired",
    "Whether an interaction crosses the system boundary depends on which objects are included. A torque internal to the pair is external to either disk alone."
   ],
   [
    "Why retain signs when combining angular momenta of coaxial rotors?",
    "Opposite rotation senses can partially or completely cancel",
    "Every inertia must be negative for clockwise motion",
    "Angular momenta always add as positive magnitudes",
    "Inertias stay nonnegative. Signed angular velocities distinguish opposite contributions to total angular momentum about the common axis."
   ],
   [
    "A net external angular impulse is small but not known to be zero during a collision. What is justified?",
    "Angular momentum conservation may be an approximation whose error depends on that impulse",
    "Exact conservation is proved because collisions are brief",
    "The entire energy account must be zero",
    "A short interval can make an external impulse negligible relative to the momenta, but its size must be evaluated. Duration alone is not a proof."
   ],
   [
    "A rotor captures an incoming point mass tangentially at its rim. What belongs in the pre-capture angular-momentum total?",
    "Both the rotor's spin and the particle's angular momentum about the axle",
    "Only the rotor because the particle follows a straight path",
    "Only the captured mass after impact",
    "A particle's straight-line motion can carry angular momentum about the axle. Omitting it changes the conserved total for the combined system."
   ],
   [
    "A system with no external torque changes its mass arrangement. What comparison is essential before and after?",
    "Use inertias and angular momenta about the same reference axis",
    "Switch axes whenever it makes either inertia smaller",
    "Assume inertia cannot change even though the shape changes",
    "The balance compares one defined conserved quantity. Changing the reference in mid-calculation can compare unlike angular momenta."
   ],
   [
    "A system initially rotates with I=6kg·m² and ω=2rad/s about a fixed inertial axis. With zero net external torque, its final rigid rotation has I=3kg·m². What is final signed angular velocity in rad/s?",
    "4",
    "-4",
    "2",
    "The initial signed angular momentum must equal final inertia times final angular velocity. Check both the magnitude and the rotation sense rather than conserving kinetic energy instead."
   ],
   [
    "A system initially rotates with I=4kg·m² and ω=3rad/s about a fixed inertial axis. With zero net external torque, its final rigid rotation has I=2kg·m². What is final signed angular velocity in rad/s?",
    "6",
    "-6",
    "3",
    "The initial signed angular momentum must equal final inertia times final angular velocity. Check both the magnitude and the rotation sense rather than conserving kinetic energy instead."
   ],
   [
    "A system initially rotates with I=3kg·m² and ω=-4rad/s about a fixed inertial axis. With zero net external torque, its final rigid rotation has I=6kg·m². What is final signed angular velocity in rad/s?",
    "-2",
    "2",
    "-4",
    "The initial signed angular momentum must equal final inertia times final angular velocity. Check both the magnitude and the rotation sense rather than conserving kinetic energy instead."
   ],
   [
    "Two coaxial rotors have I1=2kg·m², ω1=6rad/s and I2=4kg·m², ω2=0. They couple with negligible external torque. What is their common final angular velocity in rad/s?",
    "2",
    "3",
    "6",
    "Initial angular momentum is12kg·m²/s and total inertia6kg·m². The common rate2 reproduces that total; inertia-weighted, not unweighted, averaging is needed."
   ],
   [
    "Two coaxial rotors have I1=2kg·m², ω1=6rad/s and I2=2kg·m², ω2=-2rad/s. They couple with negligible external torque. What is final angular velocity in rad/s?",
    "2",
    "4",
    "-2",
    "Signed initial momentum is12-4=8 and combined inertia4, giving2rad/s. Adding speed magnitudes would ignore the counterrotation."
   ],
   [
    "A rotor of inertia 2kg·m² initially spins at 4rad/s and couples to an identical stationary rotor with negligible external torque. How much rotational kinetic energy is converted to other forms, in joules?",
    "8",
    "16",
    "0",
    "Initial energy is 16J. Their conserved momentum 8 with combined inertia 4 gives final speed 2 and energy 8J, leaving 8J transferred to other forms."
   ],
   [
    "A system's angular momentum remains 12kg·m²/s while its inertia changes from 6 to 3kg·m². What is final rotational kinetic energy in joules, comparing rigid rotation before and after?",
    "24",
    "12",
    "48",
    "Final angular speed is 4rad/s, giving 24J. Initial rotational energy was 12J; internal energy transfer supplies the increase rather than violating momentum conservation."
   ],
   [
    "A stationary rotor of inertia 2kg·m² captures a 1kg point mass moving tangentially at 6m/s at radius 1m. Axle torque is negligible and they rotate together. What is final angular speed in rad/s?",
    "2",
    "3",
    "6",
    "The particle brings angular momentum 6. Its added inertia is 1, so combined inertia 3 gives final speed 2rad/s. Leaving out the captured mass's inertia gives 3 instead."
   ],
   [
    "A rotor has initial angular momentum 8kg·m²/s and receives external angular impulse +4kg·m²/s. Its final inertia is 3kg·m². What is final angular velocity in rad/s?",
    "4",
    "8/3",
    "12",
    "The final momentum is 12, not the initial 8. Dividing by inertia 3 gives 4rad/s; this is an impulse balance rather than zero-impulse conservation."
   ],
   [
    "Two coaxial rotors have angular momenta +7 and -7kg·m²/s. With no external torque they couple into a single rigid rotor of positive inertia. What is final angular velocity in rad/s?",
    "0",
    "14",
    "7",
    "The total signed angular momentum is zero, so the final common rotation is at rest. Initial kinetic energy need not be zero and can become thermal energy."
   ]
  ],
  "pics": [
   null,
   {
    "t": "setups",
    "title": "No external torque: compare two states",
    "head": "State",
    "cols": [
     "I(kg·m²)",
     "ω(rad/s)",
     "K(J)"
    ],
    "rows": [
     [
      "Before",
      "6",
      "2",
      "12"
     ],
     [
      "After",
      "3",
      "4",
      "24"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Two coaxial rotors couple",
    "head": "State",
    "cols": [
     "I(kg·m²)",
     "ω(rad/s)",
     "K(J)"
    ],
    "rows": [
     [
      "Rotor 1 before",
      "2",
      "6",
      "36"
     ],
     [
      "Rotor 2 before",
      "4",
      "0",
      "0"
     ],
     [
      "Together after",
      "6",
      "2",
      "12"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Include the incoming particle",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      330,
      115
     ],
     "P1": [
      330,
      115
     ],
     "P2": [
      330,
      115
     ],
     "P3": [
      330,
      175
     ],
     "P4": [
      210,
      175
     ],
     "P5": [
      210,
      175
     ],
     "P6": [
      308,
      175
     ],
     "P7": [
      190,
      175
     ],
     "P8": [
      465,
      175
     ],
     "P9": [
      330,
      175
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P2P3",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P5P6",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P7P8",
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
       208,
       199
      ],
      "text": "m = 1kg; v = 6m/s",
      "col": 1
     },
     {
      "at": [
       428,
       147
      ],
      "text": "Tangential capture",
      "col": 2
     },
     {
      "at": [
       377,
       87
      ],
      "text": "R = 1m",
      "col": 0
     },
     {
      "at": [
       320,
       33
      ],
      "text": "Rotor I = 2; added I = 1; final speed 2rad/s",
      "col": 0
     },
     {
      "at": [
       441,
       208
      ],
      "text": "Initially stationary rotor",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 60,
      "col": 0
     },
     {
      "c": "P1",
      "r": 4,
      "col": 3
     },
     {
      "c": "P4",
      "r": 8,
      "col": 1
     },
     {
      "c": "P9",
      "r": 6,
      "col": 2
     }
    ]
   }
  ],
  "qpics": {
   "13": {
    "t": "setups",
    "title": "Coaxial rotors before coupling",
    "head": "Rotor",
    "cols": [
     "I(kg·m²)",
     "ω(rad/s)"
    ],
    "rows": [
     [
      "1",
      "2",
      "6"
     ],
     [
      "2",
      "4",
      "0"
     ]
    ]
   },
   "14": {
    "t": "setups",
    "title": "Opposite spins before coupling",
    "head": "Rotor",
    "cols": [
     "I(kg·m²)",
     "ω(rad/s)"
    ],
    "rows": [
     [
      "1",
      "2",
      "6"
     ],
     [
      "2",
      "2",
      "-2"
     ]
    ]
   },
   "17": {
    "t": "setups",
    "title": "Tangential capture at the rim",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Rotor I / initial ω",
      "2kg·m² / 0"
     ],
     [
      "Particle mass / speed",
      "1kg / 6m/s"
     ],
     [
      "Radius",
      "1m"
     ]
    ]
   }
  }
 },
 {
  "code": "6.5",
  "name": "Rolling",
  "skill": "s5",
  "boardTitle": "Rolling",
  "teach": [
   "Rolling combines center-of-mass translation and rotation. On a stationary plane, no slipping means the touching rim point has zero instantaneous velocity relative to the ground. Therefore vcm=R|ω|, and with a fixed radius and consistent signs acm=Rα. At radius 0.5m and angular speed 6rad/s, center speed is 3m/s. The top point moves at 6m/s in the ground frame, while the bottom point has zero speed at that instant. A contact point need not remain at rest afterward.",
   "Use Ktotal=½Mvcm²+½Icmω². With no slip and Icm=cMR², this becomes Ktotal=½M(1+c)vcm². For a solid disk with M=4kg, R=0.5m and supplied Icm=MR²/2, rolling at 2m/s gives translation 8J and spin 4J, totaling 12J. A hoop with the same mass and speed needs more energy because its c=1 rather than 1/2. Do not omit one kind of kinetic energy.",
   "For ideal rigid rolling without slip on a stationary surface, static friction does zero actual contact work because the point where it acts has zero instantaneous velocity. Yet it can exert a torque and change how energy is divided between translation and spin. It need not always be nonzero: uniform rolling on an ideal level surface needs no horizontal force. Real deformation and rolling resistance are separate effects omitted from this ideal model; no-slip alone is not a promise that every real wheel has no losses.",
   "A round body released down an incline under gravity rolls without slip if sufficient static friction is available. Friction points uphill in this unpowered case and supplies the spin torque. Combining Mg sinθ-f=Ma with fR=Icmα and a=Rα gives a=g sinθ/(1+c). For a hoop with c=1, g=10 and sinθ=0.4, a=2m/s². Energy from a vertical drop gives Mgh=½M(1+c)v². A solid disk descending 1.2m with g=10 and no losses reaches 4m/s.",
   "When slipping occurs, do not impose vcm=R|ω|. For a nonspinning wheel initially sliding right on a rough stationary floor, kinetic friction points left: it decreases center speed and increases clockwise spin. Friction opposes relative motion at contact, so its direction in other driven or overspinning situations need not be the same. Sliding friction transfers mechanical energy into thermal energy in the wheel-floor system. Qualitatively check whether the relative contact motion shrinks; the full quantitative slipping transition is outside this unit."
  ],
  "eqs": [
   "vcm=R|ω|=0.5×6=3m/s; vtop=2vcm=6m/s",
   "K=½×4×2²+½×0.5×4²=8+4=12J",
   "Contact power = friction force · contact velocity = 0",
   "a=10×0.4/(1+1)=2; 10×1.2=(3/4)v² ⇒ v = 4",
   "Initial sliding right, no spin: friction left, spin clockwise"
  ],
  "boards": [
   [
    "No slip refers to motion at the contact",
    "For stationary ground: vcm = R|ω|",
    "Top speed2vcm; bottom instantaneous speed0"
   ],
   [
    "Use both translation and spin energies",
    "Inertia for the spin term is about the CM",
    "Ktotal = ½M(1+c)vcm² when no slip"
   ],
   [
    "Ideal stationary contact: no frictional work",
    "Static friction can still exert a torque",
    "Uniform horizontal rolling can need no friction"
   ],
   [
    "Uphill friction spins an unpowered rolling body",
    "Use force, torque and no-slip equations together",
    "Energy method also includes both kinetic terms"
   ],
   [
    "Slipping breaks the no-slip speed constraint",
    "Friction opposes relative contact motion",
    "Include heating in the full energy account"
   ]
  ],
  "questions": [
   [
    "What relation connects center speed and angular speed for rolling without slipping on a stationary plane?",
    "vcm=R times angular speed",
    "vcm=angular speed divided by R",
    "vcm and angular speed must both be zero",
    "No relative motion at the contact point links center translation to rim rotation. The relation requires no slip and the stated stationary surface."
   ],
   [
    "What is the instantaneous ground-frame speed of the bottom contact point in ideal rolling without slipping on stationary ground?",
    "Zero",
    "The same as the center speed",
    "Twice the center speed",
    "The center translation and rim rotation cancel at the bottom at that instant. The contact point is not permanently at rest as the wheel rolls onward."
   ],
   [
    "What is the instantaneous ground-frame speed of the top point on a wheel rolling without slipping on stationary ground at center speed v?",
    "2v",
    "Zero",
    "v/2",
    "At the top, translation and the rotational rim velocity point forward and add. At the bottom they cancel instead."
   ],
   [
    "Which kinetic-energy terms belong in a freely rolling rigid body's total?",
    "Center-of-mass translation plus rotation about the center",
    "Only center translation",
    "Only spin because the body rolls",
    "Both kinds of particle motion contribute. Use center-of-mass inertia in the spin term to avoid double counting."
   ],
   [
    "Does ideal rolling without slipping always require a nonzero friction force?",
    "No, uniform rolling on an ideal horizontal surface can need zero friction",
    "Yes, static friction must always equal its maximum",
    "Yes, friction always points backward at full strength",
    "A friction force is only required when the dynamics demand it. No slip is a kinematic condition; static friction may be zero and need not reach its limiting value."
   ],
   [
    "On a stationary rigid surface, what work does ideal static friction at an instantaneous no-slip contact do on the rigid rolling body?",
    "Zero actual contact work",
    "Always negative work equal to force times center displacement",
    "Always positive work equal to the body's total energy",
    "The contact point has zero instantaneous ground-frame velocity, so contact power is zero. Center-of-mass motion alone does not give the work of a force applied elsewhere."
   ],
   [
    "A round rigid body is released from rest down a rough stationary incline and rolls without slipping under gravity, with no motor. Which way does static friction act?",
    "Up the incline, providing the spin-up torque",
    "Down the incline in this stated case",
    "Always zero even while spin increases",
    "Gravity acts through the center and does not spin the body about it. Uphill contact friction supplies the required torque while reducing translational acceleration."
   ],
   [
    "A wheel slides right without spinning on a rough stationary horizontal floor and no other horizontal force acts. What does kinetic friction initially do?",
    "Reduce center speed and increase clockwise spin",
    "Increase center speed while leaving spin zero",
    "Act to the right because the center moves right",
    "The slipping contact moves right, so friction acts left. Applied below the center, it also produces a clockwise turning effect."
   ],
   [
    "When a wheel slips on a surface, can vcm=R times angular speed be imposed automatically?",
    "No, relative contact motion breaks that no-slip constraint",
    "Yes, every rotating body obeys it regardless of sliding",
    "Yes, because friction guarantees instantaneous no slip",
    "Sliding means the contact velocity is not matched to the surface. Translational and rotational motion then require separate dynamics."
   ],
   [
    "Equal-mass, equal-radius hoop and solid disk roll without slipping from rest down the same vertical drop. Given Ihoop=MR² and Idisk=MR²/2, which reaches a larger center speed?",
    "The disk",
    "The hoop",
    "They must have equal center speed because mass matches",
    "The disk puts a smaller share of a given speed's total kinetic energy into rotation. The same available potential energy therefore produces a larger center speed."
   ],
   [
    "A wheel rolls without slipping on stationary ground with radius 0.5m and angular speed 6rad/s. What is center speed in m/s?",
    "3",
    "12",
    "6",
    "Each radian rolls 0.5m of rim onto the ground. Six radians per second therefore correspond to center speed 3m/s."
   ],
   [
    "A wheel rolls without slipping on stationary ground at center speed 4m/s with radius 0.2m. What is angular speed in rad/s?",
    "20",
    "0.8",
    "4",
    "A rate 20rad/s gives 0.2×20=4m/s at the rim. Multiplying speed by radius instead has the wrong dimensions for angular speed."
   ],
   [
    "A wheel rolling without slipping on stationary ground has radius 0.4m and increasing angular speed at 5rad/s². What is center acceleration magnitude in m/s²?",
    "2",
    "12.5",
    "5",
    "For constant radius and continued no-slip rolling, the center-speed change is radius times angular-speed change. The result is 2m/s²."
   ],
   [
    "A wheel rolls without slipping on stationary ground with center speed 3m/s. What is its top-point speed in m/s?",
    "6",
    "3",
    "0",
    "The top rotational velocity is 3m/s forward relative to the center, and center translation adds another 3. The bottom, not the top, has zero instantaneous speed."
   ],
   [
    "A solid disk has M=4kg, R=0.5m, Icm=MR²/2 and rolls without slipping at center speed 2m/s on stationary ground. What is total kinetic energy in joules?",
    "12",
    "8",
    "4",
    "Translation contributes 8J. The inertia 0.5 and angular speed 4 give 4J of spin, so the total is 12J."
   ],
   [
    "A hoop has M=2kg, Icm=MR² and rolls without slipping at center speed 3m/s on stationary ground. What is total kinetic energy in joules?",
    "18",
    "9",
    "36",
    "No slip makes the rotational energy equal to one-half Mv² for a hoop. It adds 9J to the 9J of translation, yielding 18J."
   ],
   [
    "A solid disk with Icm=MR²/2 rolls without slipping from rest down a vertical drop 1.2m with no dissipative losses. Use g=10m/s². What is final center speed in m/s?",
    "4",
    "16",
    "2",
    "Energy per unit mass gives 12=(1/2+1/4)v², so v²=16 and speed 4m/s. Taking the squared result as speed gives wrong units."
   ],
   [
    "A hoop with Icm=MR² rolls without slipping from rest down a vertical drop 1.6m with no dissipative losses. Use g=10m/s². What is final center speed in m/s?",
    "4",
    "8",
    "16",
    "The two equal kinetic terms sum to Mv². Dividing the potential-energy loss by mass gives 16=v², so the speed is 4m/s."
   ],
   [
    "A solid disk has Icm=MR²/2 and rolls without slipping on stationary ground. What fraction of its total kinetic energy is rotational?",
    "1/3",
    "1/2",
    "2/3",
    "The translational term is one-half Mv² and the spin term one-quarter Mv². The spin share is one-quarter divided by three-quarters, or one-third."
   ],
   [
    "A hoop with Icm=MR² rolls without slipping down a stationary incline from rest. Use g=10m/s² and sinθ=0.4, with sufficient static friction. What is center acceleration magnitude in m/s²?",
    "2",
    "4",
    "8",
    "The force and torque equations give a=g sinθ/(1+I/(MR²)). For a hoop the denominator is2, so the4m/s² gravitational component produces2m/s² acceleration."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Ground-frame velocities during pure rolling",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      260,
      122
     ],
     "P1": [
      260,
      122
     ],
     "P2": [
      130,
      58
     ],
     "P3": [
      545,
      58
     ],
     "P4": [
      260,
      122
     ],
     "P5": [
      325,
      122
     ],
     "P6": [
      260,
      186
     ],
     "P7": [
      390,
      186
     ],
     "P8": [
      260,
      58
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8",
    "dots": "",
    "segs": [
     {
      "v": "P2P3",
      "col": 3,
      "arrows": 0,
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
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       458,
       181
      ],
      "text": "Top 6m/s",
      "col": 2
     },
     {
      "at": [
       439,
       119
      ],
      "text": "Center 3m/s",
      "col": 2
     },
     {
      "at": [
       438,
       69
      ],
      "text": "Bottom 0",
      "col": 1
     },
     {
      "at": [
       320,
       213
      ],
      "text": "R = 0.5m; angular speed 6rad/s",
      "col": 0
     },
     {
      "at": [
       358,
       30
      ],
      "text": "No slip on stationary ground",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 64,
      "col": 0
     },
     {
      "c": "P1",
      "r": 4,
      "col": 3
     },
     {
      "c": "P8",
      "r": 4,
      "col": 1
     }
    ]
   },
   {
    "t": "setups",
    "title": "Disk: mass 4kg, radius 0.5m, center speed 2m/s",
    "head": "Energy term",
    "cols": [
     "J"
    ],
    "rows": [
     [
      "Translation",
      "8"
     ],
     [
      "Rotation about CM",
      "4"
     ],
     [
      "Total",
      "12"
     ]
    ]
   },
   null,
   {
    "t": "setups",
    "title": "A disk rolls down a vertical drop",
    "head": "Quantity",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Inertia ratio c",
      "1/2"
     ],
     [
      "Vertical drop / g",
      "1.2m / 10m/s²"
     ],
     [
      "Final center speed",
      "4m/s"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Sliding and spin respond differently",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      260,
      122
     ],
     "P1": [
      260,
      122
     ],
     "P2": [
      130,
      58
     ],
     "P3": [
      545,
      58
     ],
     "P4": [
      260,
      122
     ],
     "P5": [
      325,
      122
     ],
     "P6": [
      260,
      58
     ],
     "P7": [
      185,
      58
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [
     {
      "v": "P2P3",
      "col": 3,
      "arrows": 0,
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
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       182,
       76
      ],
      "text": "Friction left",
      "col": 1
     },
     {
      "at": [
       425,
       147
      ],
      "text": "Center initially right",
      "col": 2
     },
     {
      "at": [
       412,
       106
      ],
      "text": "Initial spin 0 → clockwise",
      "col": 0
     },
     {
      "at": [
       320,
       210
      ],
      "text": "Initial contact slips right",
      "col": 0
     },
     {
      "at": [
       365,
       30
      ],
      "text": "Stationary rough floor",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 64,
      "col": 0
     },
     {
      "c": "P1",
      "r": 4,
      "col": 3
     }
    ]
   }
  ],
  "qpics": {
   "14": {
    "t": "setups",
    "title": "Disk rolling without slip",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "M / R",
      "4kg / 0.5m"
     ],
     [
      "Center speed",
      "2m/s"
     ],
     [
      "CM inertia",
      "MR²/2"
     ]
    ]
   },
   "16": {
    "t": "setups",
    "title": "Disk rolls from rest without slip or losses",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "CM inertia",
      "MR²/2"
     ],
     [
      "Vertical drop",
      "1.2m"
     ],
     [
      "g",
      "10m/s²"
     ]
    ]
   },
   "19": {
    "t": "setups",
    "title": "Hoop rolls down a stationary incline",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "CM inertia",
      "MR²"
     ],
     [
      "g / sinθ",
      "10m/s² / 0.4"
     ],
     [
      "Contact",
      "Sufficient static friction"
     ]
    ]
   }
  }
 },
 {
  "code": "6.6",
  "name": "Motion of Orbiting Satellites",
  "skill": "s6",
  "boardTitle": "Motion of Orbiting Satellites",
  "teach": [
   "Model a satellite much less massive than a spherical central body, with gravity as the only force and the central body approximately fixed in an inertial frame. Use separation r from center to center, not altitude alone. Gravitational potential energy of the pair is U=-GMm/r when its zero is at infinite separation. For an original hypothetical body with GM=100m³/s², a 2kg satellite at radius 4m has U=-50J. Increasing separation makes this potential less negative.",
   "In a circular orbit, gravitational acceleration supplies the inward acceleration: GM/r²=v²/r. Hence v=√(GM/r), and period T=2πr/v. At GM=100 and r=4 in SI units, speed is 5m/s. For satellite mass 2kg, K=25J, U=-50J and total E=-25J. Radius, speed, kinetic and potential energy remain constant along this circle, but the velocity direction changes. No engine is required to maintain the ideal orbit without resistance.",
   "Gravity is radial, so its torque about the fixed central body is zero and orbital angular momentum is conserved. In a noncircular ellipse, total mechanical energy also stays constant, while kinetic and potential energies exchange. At closest and farthest approach the velocity is perpendicular to the radial position, so rp vp=ra va. In a separate hypothetical orbit with GM=48m³/s², rp=2m, ra=6m and vp=6m/s, va=2m/s. At other points use the perpendicular velocity component; do not assume rv is constant when velocity is not tangent.",
   "Threshold escape speed follows from total energy zero: ½mv²-GMm/r=0, so vesc=√(2GM/r). In this ideal model a noncolliding outward escape trajectory launched at that threshold reaches arbitrarily large separation with speed approaching zero; it does not arrive at infinity in finite time. If GM/r=18m²/s², vesc=6m/s. At a given radius it is √2 times the circular speed. Ignore atmospheric drag, additional bodies and later propulsion only when the model explicitly allows it.",
   "Compare complete orbital states carefully. At four times the circular radius around the same central mass, speed is half, period is eight times, and angular momentum for the same satellite mass is twice as large. Reaching that new circular orbit needs interaction such as propulsion; these state comparisons do not describe a spontaneous change between circles with no torque. Plotting U=-GMm/r shows a negative curve approaching zero as separation grows. If U changes from -40 to -25J during gravity-only motion, K changes by -15J to keep E constant."
  ],
  "eqs": [
   "U=−GMm/r=−100×2/4=−50J",
   "v²=100/4=25; K = 25J, U = −50J, E = −25J",
   "rp vp=ra va: 2×6=6×2",
   "½mv²−GMm/r=0; vesc=√(2×18)=6m/s",
   "r×4 ⇒ vc×½, T×8, L×2; ΔK=−ΔU=−15J"
  ],
  "boards": [
   [
    "Small satellite, fixed central-body approximation",
    "Use center separation and gravity-only conditions",
    "Potential zero at infinity gives U = −GMm/r"
   ],
   [
    "Circular gravity supplies inward acceleration",
    "Speed and radius stay fixed along one circle",
    "K positive, U negative, total E negative"
   ],
   [
    "Central force: zero torque about the center",
    "Ellipse: total E and angular momentum conserved",
    "At near/far turning points: rp vp = ra va"
   ],
   [
    "Threshold escape has total mechanical energy0",
    "Escape speed = square root of2GM/r",
    "Speed approaches zero only at infinite separation"
   ],
   [
    "Compare states with the same assumptions",
    "Changing circular orbit requires an interaction",
    "Gravity-only exchanges satisfy ΔK = −ΔU"
   ]
  ],
  "questions": [
   [
    "For the ideal satellite model with a much smaller satellite mass, what approximation is made about the central body?",
    "Its motion can be neglected while its gravity acts on the satellite",
    "Its gravitational force is zero",
    "The satellite has no inertia at all",
    "The large mass ratio makes central-body motion negligible in this approximation. It does not eliminate gravity or the satellite's inertial response."
   ],
   [
    "In U=-GMm/r for a satellite outside a spherical central body, what does r measure?",
    "Center-to-center separation",
    "Altitude above the surface alone",
    "The circumference of the orbit",
    "Gravity depends on separation from the central mass, not just height above its surface. For altitude h above radius R, r=R+h."
   ],
   [
    "With gravitational potential energy defined as zero at infinite separation, what is its sign at any finite external separation?",
    "Negative",
    "Positive automatically",
    "Always zero in an orbit",
    "The attractive force requires positive work to separate the masses to infinity. The finite-separation potential is therefore below the chosen zero."
   ],
   [
    "Why is angular momentum about the central body conserved in the ideal fixed-center gravity-only satellite model?",
    "Gravity is radial and has zero torque about that center",
    "Gravity vanishes in space",
    "The satellite speed must be constant in every orbit",
    "A central force has zero perpendicular arm. Angular momentum can stay fixed even while orbital speed changes in an ellipse."
   ],
   [
    "Along a gravity-only circular orbit around a fixed center, which quantities stay constant in magnitude or value?",
    "Kinetic energy, gravitational potential energy, total mechanical energy and angular momentum",
    "Only total mechanical energy; radius varies around the circle",
    "None, because an inward force destroys energy continuously",
    "Constant orbital radius and speed keep both energies fixed, and central gravity supplies no torque. The velocity direction still changes."
   ],
   [
    "Along a noncircular elliptical gravity-only orbit around a fixed center, which statement is correct?",
    "Total mechanical energy and angular momentum stay constant while kinetic and potential energies vary",
    "Kinetic energy and speed must stay constant",
    "Gravity does negative work over every segment of the path",
    "As radius changes, potential and kinetic energy exchange while their sum remains fixed. Angular momentum is conserved by zero central torque."
   ],
   [
    "At the nearest and farthest points of one noncircular elliptical orbit, where is satellite speed larger?",
    "At the nearest point",
    "At the farthest point",
    "Equal at both points regardless of radius",
    "Velocity is tangent at both ends, and conserved angular momentum gives rnear vnear=rfar vfar. Smaller radius therefore pairs with larger speed."
   ],
   [
    "How does circular orbital speed change when orbital radius increases around the same central mass?",
    "It decreases as the inverse square root of radius",
    "It increases directly with radius",
    "It is independent of radius",
    "Balancing inward gravitational and centripetal acceleration gives v²=GM/r. A larger radius requires a smaller circular speed."
   ],
   [
    "What total mechanical energy corresponds to the threshold escape speed, using zero potential at infinity in the ideal gravity-only model?",
    "Zero",
    "Always negative",
    "Always equal to the instantaneous potential energy",
    "At threshold escape, both potential energy and asymptotic speed approach zero at infinity. The conserved total is zero throughout that noncolliding trajectory."
   ],
   [
    "Does zero net gravitational torque guarantee zero work along a noncircular orbital path?",
    "No, gravity can change kinetic energy while its torque about the center remains zero",
    "Yes, zero torque makes every force powerless",
    "Yes, angular momentum and kinetic energy are identical",
    "A radial displacement component allows gravity to do work. Its line of action still passes through the center, so angular momentum remains conserved."
   ],
   [
    "An ideal circular orbit has GM=72m³/s² and radius 8m from a fixed central body. What is circular speed in m/s?",
    "3",
    "9",
    "6",
    "Gravity requires v²=72/8=9. The speed is the positive square root 3, not the squared speed 9."
   ],
   [
    "A 2kg satellite is at radius 4m outside a hypothetical spherical body with GM=100m³/s². With zero potential at infinity, what is gravitational potential energy in joules?",
    "-50",
    "50",
    "-25",
    "The potential is minus 100×2/4=-50J. The minus sign follows the chosen reference; -25J would be the total energy of the circular orbit at this radius."
   ],
   [
    "A 2kg satellite has a circular orbit of radius 4m about a fixed central body with GM=100m³/s². What is kinetic energy in joules?",
    "25",
    "50",
    "-25",
    "Circular speed squared is 25, so one-half times mass 2 times 25 gives 25J. Kinetic energy is nonnegative and is half the magnitude of the gravitational potential here."
   ],
   [
    "A 2kg satellite has a circular orbit of radius 4m about a fixed central body with GM=100m³/s². What is total mechanical energy in joules?",
    "-25",
    "25",
    "-50",
    "Kinetic energy 25J plus gravitational potential -50J gives total -25J. The potential alone is not the full mechanical energy."
   ],
   [
    "At an external radius r around a fixed central body, GM/r=18m²/s². What is threshold escape speed in m/s, neglecting atmosphere and other bodies?",
    "6",
    "18",
    "3",
    "Zero total energy requires speed squared2GM/r=36. The threshold speed is6m/s, distinct from circular speed at that radius."
   ],
   [
    "A satellite in a gravity-only ellipse has nearest radius 2m and farthest radius 6m around a fixed center. Its speed at the nearest point is 6m/s. What is its speed at the farthest point in m/s?",
    "2",
    "18",
    "6",
    "At these two turning points the velocities are perpendicular to the radial positions. Constant angular momentum gives 2×6=6×vfar, so vfar=2m/s."
   ],
   [
    "A satellite moves from a circular orbit of radius r to another circular orbit of radius 4r around the same fixed central mass. What is the ratio of final to initial circular speed?",
    "1/2",
    "2",
    "1/4",
    "Circular speed squared scales as 1/r. Increasing the radius by 4 makes the speed half; the transfer requires an energy change and is not a gravity-only circular transition."
   ],
   [
    "For two circular orbits of radii r and 4r around the same fixed central mass, what is the ratio of the larger orbit's period to the smaller orbit's period?",
    "8",
    "4",
    "2",
    "The larger orbit has 4 times the circumference and half the speed. Its period is therefore 8 times as large, consistent with period squared proportional to radius cubed."
   ],
   [
    "A 1kg satellite follows a circular orbit at radius 4m with speed 3m/s about a fixed central body. What is angular momentum magnitude about that center in kg·m²/s?",
    "12",
    "6",
    "3",
    "The circular velocity is perpendicular to the radial position, so momentum 3kg·m/s has arm 4m. Their product gives 12."
   ],
   [
    "A satellite's gravitational potential energy changes from -40J to -25J along a gravity-only trajectory. What is its change in kinetic energy in joules?",
    "-15",
    "15",
    "-65",
    "Potential energy increases by 15J. With constant total mechanical energy, kinetic energy must decrease by 15J; adding the two endpoint potentials is not an energy change."
   ]
  ],
  "check": [
   "For an ideal circular satellite orbit around a fixed central mass, radius becomes 9 times as large in a second circular state. What is the ratio of the second circular speed to the first?",
   "1/3",
   "3",
   "1/9",
   "Circular speed squared is proportional to 1/r. A ninefold radius makes the speed one-third; transfer between those circular states requires an interaction."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Potential energy below its distant zero",
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
      175.71428571428572,
      61
     ],
     "P7": [
      175.71428571428572,
      56
     ],
     "P8": [
      287.1428571428571,
      61
     ],
     "P9": [
      287.1428571428571,
      56
     ],
     "P10": [
      510,
      61
     ],
     "P11": [
      510,
      56
     ],
     "P12": [
      115,
      61
     ],
     "P13": [
      120,
      61
     ],
     "P14": [
      115,
      126
     ],
     "P15": [
      120,
      126
     ],
     "P16": [
      115,
      158.5
     ],
     "P17": [
      120,
      158.5
     ],
     "P18": [
      115,
      191
     ],
     "P19": [
      120,
      191
     ],
     "P20": [
      120,
      61
     ],
     "P21": [
      126.96428571428571,
      75.44444444444446
     ],
     "P22": [
      126.96428571428571,
      75.44444444444446
     ],
     "P23": [
      133.92857142857142,
      87
     ],
     "P24": [
      133.92857142857142,
      87
     ],
     "P25": [
      140.89285714285714,
      96.45454545454544
     ],
     "P26": [
      140.89285714285714,
      96.45454545454544
     ],
     "P27": [
      147.85714285714286,
      104.33333333333331
     ],
     "P28": [
      147.85714285714286,
      104.33333333333331
     ],
     "P29": [
      154.82142857142856,
      111
     ],
     "P30": [
      154.82142857142856,
      111
     ],
     "P31": [
      161.78571428571428,
      116.71428571428572
     ],
     "P32": [
      161.78571428571428,
      116.71428571428572
     ],
     "P33": [
      168.75,
      121.66666666666666
     ],
     "P34": [
      168.75,
      121.66666666666666
     ],
     "P35": [
      175.71428571428572,
      126
     ],
     "P36": [
      175.71428571428572,
      126
     ],
     "P37": [
      182.67857142857144,
      129.8235294117647
     ],
     "P38": [
      182.67857142857144,
      129.8235294117647
     ],
     "P39": [
      189.64285714285714,
      133.22222222222223
     ],
     "P40": [
      189.64285714285714,
      133.22222222222223
     ],
     "P41": [
      196.60714285714286,
      136.26315789473685
     ],
     "P42": [
      196.60714285714286,
      136.26315789473685
     ],
     "P43": [
      203.57142857142856,
      139
     ],
     "P44": [
      203.57142857142856,
      139
     ],
     "P45": [
      210.53571428571428,
      141.47619047619048
     ],
     "P46": [
      210.53571428571428,
      141.47619047619048
     ],
     "P47": [
      217.5,
      143.72727272727272
     ],
     "P48": [
      217.5,
      143.72727272727272
     ],
     "P49": [
      224.46428571428572,
      145.7826086956522
     ],
     "P50": [
      224.46428571428572,
      145.7826086956522
     ],
     "P51": [
      231.42857142857142,
      147.66666666666663
     ],
     "P52": [
      231.42857142857142,
      147.66666666666663
     ],
     "P53": [
      238.39285714285714,
      149.4
     ],
     "P54": [
      238.39285714285714,
      149.4
     ],
     "P55": [
      245.35714285714286,
      151
     ],
     "P56": [
      245.35714285714286,
      151
     ],
     "P57": [
      252.32142857142858,
      152.48148148148147
     ],
     "P58": [
      252.32142857142858,
      152.48148148148147
     ],
     "P59": [
      259.2857142857143,
      153.85714285714286
     ],
     "P60": [
      259.2857142857143,
      153.85714285714286
     ],
     "P61": [
      266.25,
      155.1379310344828
     ],
     "P62": [
      266.25,
      155.1379310344828
     ],
     "P63": [
      273.2142857142857,
      156.33333333333331
     ],
     "P64": [
      273.2142857142857,
      156.33333333333331
     ],
     "P65": [
      280.17857142857144,
      157.4516129032258
     ],
     "P66": [
      280.17857142857144,
      157.4516129032258
     ],
     "P67": [
      287.1428571428571,
      158.5
     ],
     "P68": [
      287.1428571428571,
      158.5
     ],
     "P69": [
      294.1071428571429,
      159.48484848484847
     ],
     "P70": [
      294.1071428571429,
      159.48484848484847
     ],
     "P71": [
      301.07142857142856,
      160.41176470588235
     ],
     "P72": [
      301.07142857142856,
      160.41176470588235
     ],
     "P73": [
      308.0357142857143,
      161.28571428571428
     ],
     "P74": [
      308.0357142857143,
      161.28571428571428
     ],
     "P75": [
      315,
      162.1111111111111
     ],
     "P76": [
      315,
      162.1111111111111
     ],
     "P77": [
      321.9642857142857,
      162.8918918918919
     ],
     "P78": [
      321.9642857142857,
      162.8918918918919
     ],
     "P79": [
      328.92857142857144,
      163.63157894736844
     ],
     "P80": [
      328.92857142857144,
      163.63157894736844
     ],
     "P81": [
      335.89285714285717,
      164.33333333333334
     ],
     "P82": [
      335.89285714285717,
      164.33333333333334
     ],
     "P83": [
      342.85714285714283,
      165
     ],
     "P84": [
      342.85714285714283,
      165
     ],
     "P85": [
      349.82142857142856,
      165.6341463414634
     ],
     "P86": [
      349.82142857142856,
      165.6341463414634
     ],
     "P87": [
      356.7857142857143,
      166.23809523809524
     ],
     "P88": [
      356.7857142857143,
      166.23809523809524
     ],
     "P89": [
      363.75,
      166.81395348837208
     ],
     "P90": [
      363.75,
      166.81395348837208
     ],
     "P91": [
      370.7142857142857,
      167.36363636363637
     ],
     "P92": [
      370.7142857142857,
      167.36363636363637
     ],
     "P93": [
      377.67857142857144,
      167.8888888888889
     ],
     "P94": [
      377.67857142857144,
      167.8888888888889
     ],
     "P95": [
      384.64285714285717,
      168.39130434782606
     ],
     "P96": [
      384.64285714285717,
      168.39130434782606
     ],
     "P97": [
      391.60714285714283,
      168.87234042553192
     ],
     "P98": [
      391.60714285714283,
      168.87234042553192
     ],
     "P99": [
      398.57142857142856,
      169.33333333333331
     ],
     "P100": [
      398.57142857142856,
      169.33333333333331
     ],
     "P101": [
      405.5357142857143,
      169.77551020408163
     ],
     "P102": [
      405.5357142857143,
      169.77551020408163
     ],
     "P103": [
      412.5,
      170.2
     ],
     "P104": [
      412.5,
      170.2
     ],
     "P105": [
      419.4642857142857,
      170.60784313725492
     ],
     "P106": [
      419.4642857142857,
      170.60784313725492
     ],
     "P107": [
      426.42857142857144,
      171
     ],
     "P108": [
      426.42857142857144,
      171
     ],
     "P109": [
      433.39285714285717,
      171.37735849056602
     ],
     "P110": [
      433.39285714285717,
      171.37735849056602
     ],
     "P111": [
      440.35714285714283,
      171.74074074074076
     ],
     "P112": [
      440.35714285714283,
      171.74074074074076
     ],
     "P113": [
      447.32142857142856,
      172.09090909090907
     ],
     "P114": [
      447.32142857142856,
      172.09090909090907
     ],
     "P115": [
      454.2857142857143,
      172.42857142857142
     ],
     "P116": [
      454.2857142857143,
      172.42857142857142
     ],
     "P117": [
      461.25,
      172.75438596491227
     ],
     "P118": [
      461.25,
      172.75438596491227
     ],
     "P119": [
      468.2142857142857,
      173.0689655172414
     ],
     "P120": [
      468.2142857142857,
      173.0689655172414
     ],
     "P121": [
      475.17857142857144,
      173.3728813559322
     ],
     "P122": [
      475.17857142857144,
      173.3728813559322
     ],
     "P123": [
      482.14285714285717,
      173.66666666666669
     ],
     "P124": [
      482.14285714285717,
      173.66666666666669
     ],
     "P125": [
      489.10714285714283,
      173.95081967213116
     ],
     "P126": [
      489.10714285714283,
      173.95081967213116
     ],
     "P127": [
      496.07142857142856,
      174.2258064516129
     ],
     "P128": [
      496.07142857142856,
      174.2258064516129
     ],
     "P129": [
      503.0357142857143,
      174.4920634920635
     ],
     "P130": [
      503.0357142857143,
      174.4920634920635
     ],
     "P131": [
      510,
      174.75
     ],
     "P132": [
      175.71428571428572,
      126
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132",
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
     },
     {
      "v": "P22P23",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P24P25",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P26P27",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P28P29",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P30P31",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P32P33",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P34P35",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P36P37",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P38P39",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P40P41",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P42P43",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P44P45",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P46P47",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P48P49",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P50P51",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P52P53",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P54P55",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P56P57",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P58P59",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P60P61",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P62P63",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P64P65",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P66P67",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P68P69",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P70P71",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P72P73",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P74P75",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P76P77",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P78P79",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P80P81",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P82P83",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P84P85",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P86P87",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P88P89",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P90P91",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P92P93",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P94P95",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P96P97",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P98P99",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P100P101",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P102P103",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P104P105",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P106P107",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P108P109",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P110P111",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P112P113",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P114P115",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P116P117",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P118P119",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P120P121",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P122P123",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P124P125",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P126P127",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P128P129",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P130P131",
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
      "text": "Center separation r (m)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Potential energy U (J)",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       175.71428571428572,
       41
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       287.1428571428571,
       41
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "16",
      "col": 0
     },
     {
      "at": [
       97,
       56
      ],
      "text": "-100",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "-50",
      "col": 0
     },
     {
      "at": [
       97,
       153.5
      ],
      "text": "-25",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       202.71428571428572,
       104
      ],
      "text": "(4,-50)",
      "col": 0
     },
     {
      "at": [
       421,
       213
      ],
      "text": "GM = 100; m = 2kg; U = -200/r",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P132",
      "r": 4,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Gravity changes direction, not speed here",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      265,
      114
     ],
     "P1": [
      265,
      114
     ],
     "P2": [
      331,
      114
     ],
     "P3": [
      331,
      114
     ],
     "P4": [
      331,
      184
     ],
     "P5": [
      331,
      114
     ],
     "P6": [
      282,
      114
     ]
    },
    "hide": "P0P1P2P3P4P5P6",
    "dots": "",
    "segs": [
     {
      "v": "P3P4",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P5P6",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       418,
       178
      ],
      "text": "Velocity tangent",
      "col": 2
     },
     {
      "at": [
       448,
       111
      ],
      "text": "Gravity inward",
      "col": 1
     },
     {
      "at": [
       254,
       31
      ],
      "text": "Same speed; changing direction",
      "col": 0
     },
     {
      "at": [
       316,
       212
      ],
      "text": "Circular orbit about a fixed center",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 66,
      "col": 0
     },
     {
      "c": "P1",
      "r": 8,
      "col": 3
     },
     {
      "c": "P2",
      "r": 5,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Compare the two ends of an ellipse",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      393,
      118
     ],
     "P1": [
      392.759552031184,
      112.70008953545502
     ],
     "P2": [
      392.759552031184,
      112.70008953545502
     ],
     "P3": [
      392.03969056642075,
      107.43285478132304
     ],
     "P4": [
      392.03969056642075,
      107.43285478132304
     ],
     "P5": [
      390.84485379101875,
      102.23076999139658
     ],
     "P6": [
      390.84485379101875,
      102.23076999139658
     ],
     "P7": [
      389.182408271022,
      97.12590774827424
     ],
     "P8": [
      389.182408271022,
      97.12590774827424
     ],
     "P9": [
      387.0626035358804,
      92.14974122522383
     ],
     "P10": [
      387.0626035358804,
      92.14974122522383
     ],
     "P11": [
      384.49850888669266,
      87.33295014360328
     ],
     "P12": [
      384.49850888669266,
      87.33295014360328
     ],
     "P13": [
      381.5059328196192,
      82.70523162217631
     ],
     "P14": [
      381.5059328196192,
      82.70523162217631
     ],
     "P15": [
      378.1033255612459,
      78.29511708450008
     ],
     "P16": [
      378.1033255612459,
      78.29511708450008
     ],
     "P17": [
      374.3116653168024,
      74.1297963532113
     ],
     "P18": [
      374.3116653168024,
      74.1297963532113
     ],
     "P19": [
      370.1543289325507,
      70.23495001572803
     ],
     "P20": [
      370.1543289325507,
      70.23495001572803
     ],
     "P21": [
      365.6569477697543,
      66.63459109488872
     ],
     "P22": [
      365.6569477697543,
      66.63459109488872
     ],
     "P23": [
      360.8472496788129,
      63.350917000681136
     ],
     "P24": [
      360.8472496788129,
      63.350917000681136
     ],
     "P25": [
      355.754888047844,
      60.404172675828534
     ],
     "P26": [
      355.754888047844,
      60.404172675828534
     ],
     "P27": [
      350.41125897968465,
      57.81252577898556
     ],
     "P28": [
      350.41125897968465,
      57.81252577898556
     ],
     "P29": [
      344.849307724477,
      55.5919546750813
     ],
     "P30": [
      344.849307724477,
      55.5919546750813
     ],
     "P31": [
      339.1033255612459,
      53.75614992338609
     ],
     "P32": [
      339.1033255612459,
      53.75614992338609
     ],
     "P33": [
      333.2087383807606,
      52.31642987066124
     ],
     "P34": [
      333.2087383807606,
      52.31642987066124
     ],
     "P35": [
      327.201888273138,
      51.28167086978726
     ],
     "P36": [
      327.201888273138,
      51.28167086978726
     ],
     "P37": [
      321.1198094667719,
      50.658252554096805
     ],
     "P38": [
      321.1198094667719,
      50.658252554096805
     ],
     "P39": [
      315,
      50.450018504813784
     ],
     "P40": [
      315,
      50.450018504813784
     ],
     "P41": [
      308.8801905332281,
      50.658252554096805
     ],
     "P42": [
      308.8801905332281,
      50.658252554096805
     ],
     "P43": [
      302.79811172686203,
      51.28167086978726
     ],
     "P44": [
      302.79811172686203,
      51.28167086978726
     ],
     "P45": [
      296.7912616192394,
      52.31642987066124
     ],
     "P46": [
      296.7912616192394,
      52.31642987066124
     ],
     "P47": [
      290.89667443875413,
      53.75614992338609
     ],
     "P48": [
      290.89667443875413,
      53.75614992338609
     ],
     "P49": [
      285.150692275523,
      55.5919546750813
     ],
     "P50": [
      285.150692275523,
      55.5919546750813
     ],
     "P51": [
      279.58874102031535,
      57.81252577898556
     ],
     "P52": [
      279.58874102031535,
      57.81252577898556
     ],
     "P53": [
      274.245111952156,
      60.404172675828534
     ],
     "P54": [
      274.245111952156,
      60.404172675828534
     ],
     "P55": [
      269.1527503211871,
      63.350917000681136
     ],
     "P56": [
      269.1527503211871,
      63.350917000681136
     ],
     "P57": [
      264.3430522302457,
      66.63459109488869
     ],
     "P58": [
      264.3430522302457,
      66.63459109488869
     ],
     "P59": [
      259.8456710674493,
      70.23495001572803
     ],
     "P60": [
      259.8456710674493,
      70.23495001572803
     ],
     "P61": [
      255.68833468319758,
      74.12979635321128
     ],
     "P62": [
      255.68833468319758,
      74.12979635321128
     ],
     "P63": [
      251.8966744387541,
      78.29511708450008
     ],
     "P64": [
      251.8966744387541,
      78.29511708450008
     ],
     "P65": [
      248.4940671803808,
      82.70523162217629
     ],
     "P66": [
      248.4940671803808,
      82.70523162217629
     ],
     "P67": [
      245.5014911133073,
      87.33295014360326
     ],
     "P68": [
      245.5014911133073,
      87.33295014360326
     ],
     "P69": [
      242.93739646411962,
      92.14974122522383
     ],
     "P70": [
      242.93739646411962,
      92.14974122522383
     ],
     "P71": [
      240.81759172897802,
      97.12590774827424
     ],
     "P72": [
      240.81759172897802,
      97.12590774827424
     ],
     "P73": [
      239.15514620898122,
      102.23076999139656
     ],
     "P74": [
      239.15514620898122,
      102.23076999139656
     ],
     "P75": [
      237.96030943357925,
      107.43285478132304
     ],
     "P76": [
      237.96030943357925,
      107.43285478132304
     ],
     "P77": [
      237.240447968816,
      112.70008953545502
     ],
     "P78": [
      237.240447968816,
      112.70008953545502
     ],
     "P79": [
      237,
      118
     ],
     "P80": [
      237,
      118
     ],
     "P81": [
      237.240447968816,
      123.29991046454492
     ],
     "P82": [
      237.240447968816,
      123.29991046454492
     ],
     "P83": [
      237.96030943357925,
      128.56714521867696
     ],
     "P84": [
      237.96030943357925,
      128.56714521867696
     ],
     "P85": [
      239.15514620898122,
      133.76923000860342
     ],
     "P86": [
      239.15514620898122,
      133.76923000860342
     ],
     "P87": [
      240.81759172897802,
      138.87409225172573
     ],
     "P88": [
      240.81759172897802,
      138.87409225172573
     ],
     "P89": [
      242.93739646411962,
      143.85025877477617
     ],
     "P90": [
      242.93739646411962,
      143.85025877477617
     ],
     "P91": [
      245.5014911133073,
      148.66704985639672
     ],
     "P92": [
      245.5014911133073,
      148.66704985639672
     ],
     "P93": [
      248.49406718038082,
      153.29476837782371
     ],
     "P94": [
      248.49406718038082,
      153.29476837782371
     ],
     "P95": [
      251.8966744387541,
      157.70488291549992
     ],
     "P96": [
      251.8966744387541,
      157.70488291549992
     ],
     "P97": [
      255.68833468319755,
      161.8702036467887
     ],
     "P98": [
      255.68833468319755,
      161.8702036467887
     ],
     "P99": [
      259.8456710674493,
      165.76504998427197
     ],
     "P100": [
      259.8456710674493,
      165.76504998427197
     ],
     "P101": [
      264.34305223024563,
      169.36540890511128
     ],
     "P102": [
      264.34305223024563,
      169.36540890511128
     ],
     "P103": [
      269.1527503211871,
      172.64908299931886
     ],
     "P104": [
      269.1527503211871,
      172.64908299931886
     ],
     "P105": [
      274.245111952156,
      175.59582732417147
     ],
     "P106": [
      274.245111952156,
      175.59582732417147
     ],
     "P107": [
      279.58874102031535,
      178.18747422101444
     ],
     "P108": [
      279.58874102031535,
      178.18747422101444
     ],
     "P109": [
      285.150692275523,
      180.4080453249187
     ],
     "P110": [
      285.150692275523,
      180.4080453249187
     ],
     "P111": [
      290.8966744387541,
      182.2438500766139
     ],
     "P112": [
      290.8966744387541,
      182.2438500766139
     ],
     "P113": [
      296.7912616192393,
      183.68357012933873
     ],
     "P114": [
      296.7912616192393,
      183.68357012933873
     ],
     "P115": [
      302.798111726862,
      184.71832913021274
     ],
     "P116": [
      302.798111726862,
      184.71832913021274
     ],
     "P117": [
      308.8801905332281,
      185.3417474459032
     ],
     "P118": [
      308.8801905332281,
      185.3417474459032
     ],
     "P119": [
      315,
      185.54998149518622
     ],
     "P120": [
      315,
      185.54998149518622
     ],
     "P121": [
      321.1198094667719,
      185.3417474459032
     ],
     "P122": [
      321.1198094667719,
      185.3417474459032
     ],
     "P123": [
      327.20188827313797,
      184.71832913021274
     ],
     "P124": [
      327.20188827313797,
      184.71832913021274
     ],
     "P125": [
      333.2087383807606,
      183.68357012933876
     ],
     "P126": [
      333.2087383807606,
      183.68357012933876
     ],
     "P127": [
      339.10332556124587,
      182.2438500766139
     ],
     "P128": [
      339.10332556124587,
      182.2438500766139
     ],
     "P129": [
      344.84930772447694,
      180.40804532491873
     ],
     "P130": [
      344.84930772447694,
      180.40804532491873
     ],
     "P131": [
      350.41125897968465,
      178.18747422101444
     ],
     "P132": [
      350.41125897968465,
      178.18747422101444
     ],
     "P133": [
      355.75488804784396,
      175.59582732417147
     ],
     "P134": [
      355.75488804784396,
      175.59582732417147
     ],
     "P135": [
      360.8472496788129,
      172.64908299931886
     ],
     "P136": [
      360.8472496788129,
      172.64908299931886
     ],
     "P137": [
      365.6569477697543,
      169.36540890511128
     ],
     "P138": [
      365.6569477697543,
      169.36540890511128
     ],
     "P139": [
      370.1543289325507,
      165.76504998427197
     ],
     "P140": [
      370.1543289325507,
      165.76504998427197
     ],
     "P141": [
      374.3116653168024,
      161.8702036467887
     ],
     "P142": [
      374.3116653168024,
      161.8702036467887
     ],
     "P143": [
      378.1033255612459,
      157.70488291549992
     ],
     "P144": [
      378.1033255612459,
      157.70488291549992
     ],
     "P145": [
      381.50593281961915,
      153.29476837782374
     ],
     "P146": [
      381.50593281961915,
      153.29476837782374
     ],
     "P147": [
      384.49850888669266,
      148.66704985639674
     ],
     "P148": [
      384.49850888669266,
      148.66704985639674
     ],
     "P149": [
      387.0626035358803,
      143.8502587747762
     ],
     "P150": [
      387.0626035358803,
      143.8502587747762
     ],
     "P151": [
      389.182408271022,
      138.87409225172578
     ],
     "P152": [
      389.182408271022,
      138.87409225172578
     ],
     "P153": [
      390.84485379101875,
      133.76923000860342
     ],
     "P154": [
      390.84485379101875,
      133.76923000860342
     ],
     "P155": [
      392.03969056642075,
      128.56714521867696
     ],
     "P156": [
      392.03969056642075,
      128.56714521867696
     ],
     "P157": [
      392.759552031184,
      123.29991046454495
     ],
     "P158": [
      392.759552031184,
      123.29991046454495
     ],
     "P159": [
      393,
      118.00000000000003
     ],
     "P160": [
      276,
      118
     ],
     "P161": [
      237,
      118
     ],
     "P162": [
      393,
      118
     ],
     "P163": [
      237,
      118
     ],
     "P164": [
      237,
      52
     ],
     "P165": [
      393,
      118
     ],
     "P166": [
      393,
      140
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166",
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
     },
     {
      "v": "P22P23",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P24P25",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P26P27",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P28P29",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P30P31",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P32P33",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P34P35",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P36P37",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P38P39",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P40P41",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P42P43",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P44P45",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P46P47",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P48P49",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P50P51",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P52P53",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P54P55",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P56P57",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P58P59",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P60P61",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P62P63",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P64P65",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P66P67",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P68P69",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P70P71",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P72P73",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P74P75",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P76P77",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P78P79",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P80P81",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P82P83",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P84P85",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P86P87",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P88P89",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P90P91",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P92P93",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P94P95",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P96P97",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P98P99",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P100P101",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P102P103",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P104P105",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P106P107",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P108P109",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P110P111",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P112P113",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P114P115",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P116P117",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P118P119",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P120P121",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P122P123",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P124P125",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P126P127",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P128P129",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P130P131",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P132P133",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P134P135",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P136P137",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P138P139",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P140P141",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P142P143",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P144P145",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P146P147",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P148P149",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P150P151",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P152P153",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P154P155",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P156P157",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P158P159",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P163P164",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P165P166",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       158,
       143
      ],
      "text": "Near: r = 2m",
      "col": 1
     },
     {
      "at": [
       158,
       107
      ],
      "text": "v = 6m/s",
      "col": 1
     },
     {
      "at": [
       469,
       99
      ],
      "text": "Far: r = 6m",
      "col": 2
     },
     {
      "at": [
       469,
       68
      ],
      "text": "v = 2m/s",
      "col": 2
     },
     {
      "at": [
       320,
       210
      ],
      "text": "Central mass at a focus; GM = 48m³/s²",
      "col": 0
     },
     {
      "at": [
       320,
       31
      ],
      "text": "Equal rv only at these two turning points",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P160",
      "r": 7,
      "col": 3
     },
     {
      "c": "P161",
      "r": 5,
      "col": 1
     },
     {
      "c": "P162",
      "r": 5,
      "col": 2
     }
    ]
   },
   {
    "t": "setups",
    "title": "Threshold escape energy per unit mass",
    "head": "Quantity",
    "cols": [
     "m²/s²"
    ],
    "rows": [
     [
      "GM/r",
      "18"
     ],
     [
      "Initial v²/2",
      "18"
     ],
     [
      "Total E/m",
      "0"
     ]
    ]
   },
   null
  ],
  "qpics": {
   "11": {
    "t": "setups",
    "title": "Hypothetical central body and satellite",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "GM",
      "100m³/s²"
     ],
     [
      "Satellite mass",
      "2kg"
     ],
     [
      "Center separation",
      "4m"
     ]
    ]
   },
   "12": {
    "t": "setups",
    "title": "Ideal circular orbit",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "GM",
      "100m³/s²"
     ],
     [
      "Satellite mass / radius",
      "2kg / 4m"
     ]
    ]
   },
   "13": {
    "t": "setups",
    "title": "Ideal circular orbit",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "GM",
      "100m³/s²"
     ],
     [
      "Satellite mass / radius",
      "2kg / 4m"
     ]
    ]
   },
   "15": {
    "t": "setups",
    "title": "One elliptical orbit at its turning points",
    "head": "Position",
    "cols": [
     "Radius(m)",
     "Speed(m/s)"
    ],
    "rows": [
     [
      "Nearest",
      "2",
      "6"
     ],
     [
      "Farthest",
      "6",
      "?"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Try: compare two circular states",
   "head": "Quantity",
   "cols": [
    "Ratio: second / first"
   ],
   "rows": [
    [
     "Orbit radius",
     "9"
    ],
    [
     "Central mass",
     "1"
    ]
   ]
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Choose the system and a consistent reference axis. Kinetic energy is a nonnegative scalar, while angular momentum uses a signed convention in the one-axis model. Torque-angle area transfers energy; torque-time area transfers angular momentum. Zero external torque can conserve angular momentum without conserving rotational kinetic energy. For rolling, include both center-of-mass motion and spin and justify any no-slip relation. For satellites, use center-to-center distance, the gravitational potential zero at infinity and the correct circular, elliptical or escape conditions. Check graphs, units, energy accounts and limiting cases.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-physics-1-energy-and-momentum-of-rotating-systems","subject":"science","level":5,"grade":9,"standard":"AP Physics 1 CED, effective Fall 2024 with Fall 2026 clarifications, Unit 6, topics 6.1–6.6","title":"Energy and Momentum of Rotating Systems","goal":"Choose energy, angular impulse or angular momentum conservation to explain rotating, rolling and orbiting systems with explicit system boundaries.","points":20,"progression":{"requires":["science-h-ap-physics-1-torque-and-rotational-dynamics"],"operations":3,"demand":"Interpret graphs, select system boundaries and solve energy and angular-momentum balances."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
