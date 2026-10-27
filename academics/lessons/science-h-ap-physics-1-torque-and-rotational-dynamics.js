/* Original course unit. Review record: docs/review/lessons/high-completion/ap-physics1-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "5.1",
  "name": "Rotational Kinematics",
  "skill": "s1",
  "teach": [
   "Describe rotation about a specified axis and from a specified viewing side. In this unit, counterclockwise as viewed in the diagram is positive unless a question states otherwise. Angular position uses radians: one revolution is 2π radians, and one radian subtends an arc as long as its radius. Angular displacement is a signed change in the unwrapped angle; angular distance counts the total amount turned. One complete positive turn has displacement +2π even though the marker returns to the same orientation. Treating a spinning wheel as a point at its center loses information about the wheel's orientation and mass distribution.",
   "Average angular velocity is Δθ/Δt and average angular acceleration is Δω/Δt. Their units are rad/s and rad/s². A marker going from angle 2 to angle 14 radians in 3 seconds has average angular velocity 4rad/s. A wheel changing from -6 to -2rad/s in 2 seconds has angular acceleration +2rad/s² on average: it is rotating clockwise but slowing down. The signs of angular velocity and acceleration distinguish speeding up from slowing down. The instantaneous angular velocity is the local slope of an angle-time graph; an average over a wide interval need not equal it at every instant.",
   "When angular acceleration is constant, ω=ω0+αt and Δθ=ω0t+½αt². Eliminating time gives ω²=ω0²+2αΔθ, but a squared value alone does not determine the sign of ω. For an original wheel with ω0=2rad/s, α=3rad/s² and t=4s, the final angular velocity is 14rad/s and displacement 32rad. The angular-velocity graph rises linearly from 2 to 14; its trapezoid area is 32. Apply these constant-acceleration formulas only over an interval where that assumption holds, and split motion at changes of acceleration.",
   "An angular-velocity graph gives signed angular displacement by its area and angular acceleration by its slope. If ω=+4rad/s for 2 seconds and then -2rad/s for 2 seconds, displacement is 8-4=4rad, while angular distance is 8+4=12rad. A flat nonzero velocity graph means zero angular acceleration, not zero motion. In an experiment, track a marker's angle over known time intervals, unwrap full turns, and estimate slopes rather than confusing orientation repeated modulo 2π with no motion. Use repeated measurements to judge scatter and test whether a constant-acceleration model fits; do not assume it from one pair of readings."
  ],
  "boards": [
   [
    "Counterclockwise positive from the stated view",
    "One revolution = 2π radians",
    "Signed displacement differs from total distance"
   ],
   [
    "Average ω = Δθ / Δt",
    "Average α = Δω / Δt",
    "Negative ω and positive α can mean slowing"
   ],
   [
    "ω0=2, α=3, t=4: final ω14",
    "Angle turned = 8 + 24 = 32rad",
    "Only use these formulas for constant α"
   ],
   [
    "Signed areas: +8 - 4 = +4rad",
    "Total angular distance: 8 + 4 = 12rad",
    "Unwrap full turns in experimental data"
   ]
  ],
  "eqs": [
   "Δθ = θfinal − θinitial; 1rev = 2πrad",
   "Average ω=(14−2)/3=4rad/s; average α=[−2−(−6)]/2=2rad/s²",
   "ω=2+3×4=14rad/s; Δθ=2×4+½×3×4²=32rad",
   "Δθ=4×2+(−2)×2=4rad; angular distance=|8|+|−4|=12rad"
  ],
  "questions": [
   [
    "A wheel makes one complete counterclockwise turn from the stated viewing side. What is its unwrapped angular displacement with counterclockwise positive?",
    "+2π radians",
    "Zero radians because its orientation repeats",
    "-2π radians",
    "A full positive turn accumulates 2π radians. Returning to the same orientation does not erase the signed angle traversed."
   ],
   [
    "Why must a rotational description identify the viewing side and sign convention?",
    "Clockwise versus counterclockwise reverses when viewed from the opposite side",
    "Radians change their physical size when the observer moves",
    "The object's mass changes with the observer's viewpoint",
    "The description of rotational sense depends on viewpoint. The angle unit and the object's mass do not change because the observer changes sides."
   ],
   [
    "What does average angular velocity measure?",
    "Signed angular displacement divided by elapsed time",
    "Total angular distance multiplied by time",
    "The force multiplied by distance from a pivot",
    "A signed displacement over time defines the average rate. Distance times time and a torque-like product describe different quantities."
   ],
   [
    "Which unit is appropriate for angular acceleration?",
    "rad/s²",
    "rad/s",
    "N·m",
    "Angular acceleration is change in angular velocity per time, adding a second time factor in the denominator. The other units describe angular velocity and torque."
   ],
   [
    "A wheel has negative angular velocity and positive angular acceleration over a short interval without reversal. What happens to angular speed?",
    "It decreases",
    "It necessarily increases",
    "It stays constant merely because one sign is negative",
    "The acceleration moves negative angular velocity toward zero. Speed is the magnitude, so it falls before a possible reversal."
   ],
   [
    "What does the local slope of an angular-position-versus-time graph represent?",
    "Instantaneous angular velocity",
    "Rotational inertia",
    "Net torque without knowing inertia",
    "The slope is the local rate of change of angle. Inertia and torque require other physical information."
   ],
   [
    "What does the signed area under an angular-velocity-versus-time graph represent?",
    "Angular displacement",
    "Angular acceleration",
    "Always the total angular distance even across reversals",
    "Integrating the signed rate gives signed displacement. Oppositely signed areas cancel for displacement but add in magnitude for distance."
   ],
   [
    "When can the equations ω=ω0+αt and Δθ=ω0t+½αt² be used directly over an interval?",
    "When angular acceleration is constant over that interval",
    "Whenever the wheel exists, regardless of changing acceleration",
    "Only when angular velocity is zero for the entire interval",
    "The familiar quadratic and linear forms assume constant acceleration. Rotation alone does not establish it, and nonzero velocities are allowed."
   ],
   [
    "What information is missing if a calculation gives only ω²=36rad²/s²?",
    "The sign of angular velocity without additional motion information",
    "The magnitude of angular velocity",
    "Every possible value of angular speed",
    "Both+6 and-6 have the same square. The magnitude is 6, but the direction needs other information."
   ],
   [
    "Why unwrap the angle of a rotating marker in a video analysis?",
    "To retain full turns instead of mistaking repeated orientation for zero displacement",
    "To make every measured acceleration constant by definition",
    "To eliminate every measurement error automatically",
    "Angles recorded modulo one turn can hide accumulated rotation. Unwrapping restores that count but does not remove noise or prove constant acceleration."
   ],
   [
    "A wheel completes three positive revolutions without reversal. What angle has it turned?",
    "6π radians",
    "3π radians",
    "6 radians",
    "Each revolution contributes 2π radians, so three contribute 6π. Multiplying the revolution count by π or droppingπ gives the wrong conversion."
   ],
   [
    "An unwrapped angle changes from 5rad to 29rad in 4s. What is the average angular velocity in rad/s?",
    "6",
    "24",
    "8",
    "The signed change is 24rad over 4s. A rate of 6rad/s reproduces that change;24 is the displacement, not the rate."
   ],
   [
    "Angular velocity changes from -8rad/s to -2rad/s in 3s. What is the average angular acceleration in rad/s²?",
    "2",
    "-2",
    "6",
    "The signed change is +6rad/s, which over 3s gives +2rad/s². The wheel is slowing its clockwise rotation, so a negative answer has the wrong sign."
   ],
   [
    "With constant α=2rad/s², ω0=4rad/s and elapsed time 3s, what is final angular velocity in rad/s?",
    "10",
    "6",
    "22",
    "Angular velocity gains 2rad/s each second for 3s, adding 6 to its initial 4. Neither the increase alone nor the other listed value equals initial angular velocity plus its change."
   ],
   [
    "A wheel starts at ω0=4rad/s and has constant α=2rad/s² for 3s. What is angular displacement in radians?",
    "21",
    "30",
    "9",
    "Velocity rises from 4 to 10, so its time-average is 7 and the 3-second displacement is 21rad. The 9rad acceleration contribution alone omits the initial-motion contribution."
   ],
   [
    "A wheel initially rotates at +12rad/s with constant α=-3rad/s². After how many seconds does it first stop?",
    "4",
    "3",
    "36",
    "It loses 3rad/s each second and must lose 12rad/s, so stopping takes 4s. The 36rad²/s³ product is not a time."
   ],
   [
    "An ω-time graph joins(0s,0rad/s),(2s,4rad/s),(4s,4rad/s) with straight segments. What is angular displacement in radians?",
    "12",
    "16",
    "8",
    "The first interval contributes a triangle of area 4 and the second a rectangle of area 8. Their sum is 12rad; using a rectangle throughout overcounts the rising part."
   ],
   [
    "A wheel turns at +3rad/s for 2s and then -1rad/s for 2s, with ideal instantaneous changes. What is total angular distance in radians?",
    "8",
    "4",
    "-4",
    "The two angular path lengths are 6 and 2rad, so distance is 8. Signed displacement is 4rad, a different quantity."
   ]
  ],
  "boardTitle": "Angular motion",
  "pics": [
   {
    "t": "figure",
    "title": "Track the signed angle about an axis",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      270,
      121
     ],
     "P1": [
      270,
      121
     ],
     "P2": [
      270,
      121
     ],
     "P3": [
      338,
      121
     ],
     "P4": [
      270,
      121
     ],
     "P5": [
      270,
      189
     ],
     "P6": [
      338,
      121
     ],
     "P7": [
      337.4182505734191,
      129.8757810709635
     ],
     "P8": [
      337.4182505734191,
      129.8757810709635
     ],
     "P9": [
      335.68295618765666,
      138.5996950669714
     ],
     "P10": [
      335.68295618765666,
      138.5996950669714
     ],
     "P11": [
      332.8238082107675,
      147.0224734008261
     ],
     "P12": [
      332.8238082107675,
      147.0224734008261
     ],
     "P13": [
      328.88972745734185,
      155
     ],
     "P14": [
      328.88972745734185,
      155
     ],
     "P15": [
      323.94802713980397,
      162.395777172593
     ],
     "P16": [
      323.94802713980397,
      162.395777172593
     ],
     "P17": [
      318.0832611206852,
      169.08326112068522
     ],
     "P18": [
      318.0832611206852,
      169.08326112068522
     ],
     "P19": [
      311.395777172593,
      174.948027139804
     ],
     "P20": [
      311.395777172593,
      174.948027139804
     ],
     "P21": [
      304,
      179.88972745734182
     ],
     "P22": [
      304,
      179.88972745734182
     ],
     "P23": [
      296.02247340082613,
      183.82380821076748
     ],
     "P24": [
      296.02247340082613,
      183.82380821076748
     ],
     "P25": [
      287.59969506697144,
      186.68295618765666
     ],
     "P26": [
      287.59969506697144,
      186.68295618765666
     ],
     "P27": [
      278.8757810709635,
      188.4182505734191
     ],
     "P28": [
      278.8757810709635,
      188.4182505734191
     ],
     "P29": [
      270,
      189
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29",
    "dots": "",
    "segs": [
     {
      "v": "P2P3",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P4P5",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
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
      "w": 3
     },
     {
      "v": "P14P15",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P16P17",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P18P19",
      "col": 2,
      "arrows": 1,
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
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       420,
       155
      ],
      "text": "Positive quarter turn",
      "col": 2
     },
     {
      "at": [
       423,
       121
      ],
      "text": "π/2 radians",
      "col": 2
     },
     {
      "at": [
       421,
       82
      ],
      "text": "Viewed in this page",
      "col": 0
     },
     {
      "at": [
       218,
       38
      ],
      "text": "Fixed axis at the center",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 68,
      "col": 0
     },
     {
      "c": "P1",
      "r": 3,
      "col": 3
     }
    ]
   },
   null,
   {
    "t": "figure",
    "title": "Constant angular acceleration",
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
      61
     ],
     "P19": [
      120,
      77.25
     ],
     "P20": [
      510,
      174.75
     ],
     "P21": [
      510,
      61
     ],
     "P22": [
      120,
      77.25
     ],
     "P23": [
      510,
      174.75
     ],
     "P24": [
      120,
      77.25
     ],
     "P25": [
      510,
      174.75
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25",
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
      "v": "P22P23",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P18P19P20P21",
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
      "text": "Angular velocity (rad/s)",
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
       373.5,
       93.5
      ],
      "text": "Area 32rad",
      "col": 2
     },
     {
      "at": [
       407,
       214
      ],
      "text": "Slope 3rad/s²",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P24",
      "r": 4,
      "col": 0
     },
     {
      "c": "P25",
      "r": 4,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Displacement and angular distance differ",
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
      120,
      113
     ],
     "P17": [
      120,
      165
     ],
     "P18": [
      315,
      165
     ],
     "P19": [
      315,
      113
     ],
     "P20": [
      315,
      113
     ],
     "P21": [
      315,
      87
     ],
     "P22": [
      510,
      87
     ],
     "P23": [
      510,
      113
     ],
     "P24": [
      120,
      113
     ],
     "P25": [
      510,
      113
     ],
     "P26": [
      120,
      165
     ],
     "P27": [
      315,
      165
     ],
     "P28": [
      315,
      87
     ],
     "P29": [
      510,
      87
     ],
     "P30": [
      315,
      165
     ],
     "P31": [
      315,
      87
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31",
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
      "v": "P24P25",
      "col": 3,
      "arrows": 0,
      "dash": true,
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
      "v": "P20P21P22P23",
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
      "text": "Angular velocity (rad/s)",
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
      "text": "-4",
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
       202.875,
       139
      ],
      "text": "+8rad",
      "col": 2
     },
     {
      "at": [
       412.5,
       97
      ],
      "text": "-4rad",
      "col": 1
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "16": {
    "t": "setups",
    "title": "Piecewise linear angular-velocity graph",
    "head": "Time(s)",
    "cols": [
     "ω(rad/s)"
    ],
    "rows": [
     [
      "0",
      "0"
     ],
     [
      "2",
      "4"
     ],
     [
      "4",
      "4"
     ]
    ]
   },
   "17": {
    "t": "setups",
    "title": "Ideal piecewise constant motion",
    "head": "Interval",
    "cols": [
     "ω(rad/s)"
    ],
    "rows": [
     [
      "0 to2s",
      "+3"
     ],
     [
      "2 to4s",
      "-1"
     ]
    ]
   }
  }
 },
 {
  "code": "5.2",
  "name": "Connecting Linear and Rotational Motion",
  "skill": "s2",
  "teach": [
   "A point fixed at perpendicular distance r from a fixed rotation axis follows a circle. Its arc length is s=rθ when θ is an angular distance in radians; a signed tangential coordinate can similarly track signed displacement along the circle. At r=0.4m, a turn through 1.5rad covers 0.6m of arc. This curved path length differs from the straight-line displacement between endpoints: after a full revolution the endpoint displacement is zero while the path length is 2πr. Degrees must be converted to radians before using s=rθ without a conversion factor.",
   "All points on one rigid system rotating about a fixed axis share its angular velocity and angular acceleration. Their linear speeds depend on radius: v=r|ω|. If ω=4rad/s, points at 0.25m and 0.50m have speeds 1 and 2m/s. Each instantaneous velocity is tangent to its circle, not directed radially outward. Opposite points can have equal speed but opposite velocity directions. A point exactly on the fixed axis has zero rotational linear speed even while the rigid system has nonzero angular velocity.",
   "Tangential acceleration changes speed and has signed component at=rα along the chosen positive tangent. Centripetal acceleration changes the velocity direction and has inward magnitude ar=rω²=v²/r. At r=2m, ω=3rad/s and α=12rad/s², tangential acceleration is 24m/s² and inward acceleration is 18m/s². These perpendicular components give total magnitude 30m/s² by the Pythagorean theorem. Zero angular acceleration removes the tangential component but not the inward one if the point is still rotating. The rotating-axis formulas describe the rotational contribution; a translating center can add motion that must be handled separately.",
   "A taut belt or string that does not slip on a rim matches the rim's tangential speed, so v=r|ω|. If a belt joins fixed pulleys with radii 0.10m and 0.20m, the smaller pulley rotates twice as fast in magnitude for the same belt speed. No slipping and a fixed radius are essential assumptions; belts can slip in real systems. Experimental checks can compare marked points at different radii: equal angular displacements over the same time support rigid rotation, while arc distances and speeds should scale with radius. A twofold radius change doubles speed at fixed ω and doubles inward acceleration at fixed ω, not quadruples it."
  ],
  "boards": [
   [
    "Arc length uses radians: s = rθ",
    "At r = 0.4m and θ = 1.5rad: s = 0.6m",
    "Arc length differs from endpoint displacement"
   ],
   [
    "Rigid rotation: common ω and α",
    "At ω4: r0.25 → v1; r0.50 → v2",
    "Linear velocity is tangent to the circle"
   ],
   [
    "Tangential rα24; inward rω²18",
    "Perpendicular components: total30",
    "Constant angular speed still has inward acceleration"
   ],
   [
    "No-slip belt: speed equals rim speed",
    "Radii0.10 and0.20: angular speeds2 to1",
    "Check radius, rigidity and slipping assumptions"
   ]
  ],
  "eqs": [
   "s=rθ=0.4×1.5=0.6m for an angle in radians",
   "v=r|ω|: 0.25×4=1m/s and 0.50×4=2m/s",
   "at=rα=24m/s²; ar=rω²=18m/s²; |a|=√(24²+18²)=30m/s²",
   "Same no-slip belt speed: r1|ω1| = r2|ω2|"
  ],
  "questions": [
   [
    "Which angle unit makes s=rθ valid without a degree-conversion factor?",
    "Radians",
    "Degrees",
    "Revolutions counted as bare integers",
    "Radians are defined by the arc-to-radius ratio. Degree and revolution values need conversion factors before multiplication by radius."
   ],
   [
    "A marked point completes a full circle about a fixed axis. How do path length and endpoint displacement compare?",
    "Path length is 2πr while endpoint displacement is zero",
    "Both are zero because the point returns",
    "Both must equal 2πr",
    "The route traveled is the circumference, while the final and initial positions coincide. Distance along the path and vector displacement differ."
   ],
   [
    "Two points on one rigid wheel at different nonzero radii rotate about its fixed axis. What is shared?",
    "Angular velocity and angular acceleration",
    "Linear speed at every radius",
    "The direction of both points' linear velocities at all locations",
    "Rigid rotation turns the points through the same angle in the same time. Linear speed scales with radius and velocity direction depends on position."
   ],
   [
    "At an instant, in what direction is a point's velocity from fixed-axis rotation?",
    "Tangent to its circular path",
    "Radially outward solely because it rotates",
    "Always toward the center",
    "The instantaneous motion follows the tangent. Inward acceleration can change that direction without making the velocity inward."
   ],
   [
    "With fixed nonzero angular speed, doubling a point's radius changes its linear speed by what factor?",
    "2",
    "4",
    "1",
    "The distance covered in the same angular sweep doubles, so speed doubles. The squared-radius relation belongs to a point mass's rotational inertia, not this speed relation."
   ],
   [
    "A wheel rotates at constant nonzero angular speed about a fixed axis. What acceleration does an off-axis point have?",
    "Inward centripetal acceleration with zero tangential acceleration",
    "Zero total acceleration",
    "Only an outward acceleration",
    "Velocity changes direction continuously, requiring inward acceleration. Constant speed eliminates the tangential component but not the radial one."
   ],
   [
    "Which relation gives the magnitude of centripetal acceleration in fixed-axis rotation?",
    "rω²",
    "rα alone",
    "r²ω",
    "Centripetal acceleration depends on angular speed squared and radius. Tangential acceleration involvesα and is a different perpendicular component."
   ],
   [
    "Why must tangential and centripetal accelerations be combined as vectors?",
    "They are perpendicular components, so magnitudes generally do not simply add",
    "They always point in the same direction",
    "One must always be zero whenever the other is nonzero",
    "Tangential motion and radial direction are perpendicular. Both components can coexist, so the total magnitude follows the Pythagorean relation in this setting."
   ],
   [
    "What is the rotational linear speed of a point exactly on a fixed axis?",
    "Zero",
    "The same nonzero speed as every rim point",
    "Infinite because division by radius is required",
    "At zero radius, rotational motion does not change that point's position. The product r|ω| gives zero without dividing by radius."
   ],
   [
    "What assumption lets a belt's speed be equated to a pulley rim's speed?",
    "No slipping between the belt and rim",
    "The pulley has zero radius",
    "The belt must have no tension",
    "No slip prevents relative tangential motion at contact. Nonzero radius and tension are compatible with the relation."
   ],
   [
    "A point at radius 0.5m rotates through an angular distance 4rad. What arc length does it cover in meters?",
    "2",
    "8",
    "0.5",
    "At radius 0.5, each radian corresponds to 0.5m of arc. The stated angle therefore covers 2m; dividing by radius reverses the relationship."
   ],
   [
    "A point at radius 0.2m rotates through an angular distance 6rad. What arc length does it cover in meters?",
    "1.2",
    "30",
    "0.2",
    "At radius 0.2, each radian corresponds to 0.2m of arc. The stated angle therefore covers 1.2m; dividing by radius reverses the relationship."
   ],
   [
    "A point rotates about a fixed axis at radius 0.3m with angular speed 10rad/s. What is its linear speed in m/s?",
    "3",
    "10",
    "30",
    "In one second the point sweeps 10 radians, each spanning 0.3m. Its speed is 3m/s;30 is the radial acceleration value, with different units."
   ],
   [
    "A point rotates about a fixed axis at radius 0.5m with angular speed 8rad/s. What is its linear speed in m/s?",
    "4",
    "8",
    "32",
    "In one second the point sweeps 8 radians, each spanning 0.5m. Its speed is 4m/s;32 is the radial acceleration value, with different units."
   ],
   [
    "A rim point has radius 0.5m and angular acceleration 6rad/s² about a fixed axis. What is its tangential acceleration magnitude in m/s²?",
    "3",
    "12",
    "18",
    "The rate of change of tangential speed is 0.5 times the rate of change of angular speed, giving 3m/s². Squaringα would not have acceleration units."
   ],
   [
    "A point at radius 0.5m has angular speed 4rad/s about a fixed axis. What is its centripetal acceleration magnitude in m/s²?",
    "8",
    "2",
    "4",
    "Linear speed is 2m/s, so v²/r=4/0.5=8m/s². The value 2 is speed and 4 is its square, not the requested acceleration."
   ],
   [
    "At a rotating point, tangential acceleration is 12m/s² and inward acceleration is 5m/s². What is total acceleration magnitude in m/s²?",
    "13",
    "17",
    "7",
    "The components are perpendicular, and 12²+5²=169. The magnitude is 13; simple addition or subtraction would require collinear components."
   ],
   [
    "A no-slip belt moves at 2m/s around a fixed pulley of radius 0.25m. What is the pulley angular speed in rad/s?",
    "8",
    "0.5",
    "2",
    "An angular speed 8rad/s sweeps 0.25×8=2m of rim per second. Multiplying speed by radius has the wrong units for angular speed."
   ]
  ],
  "boardTitle": "Linear and angular motion",
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Common angular speed, different linear speeds",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      244,
      109
     ],
     "P1": [
      244,
      109
     ],
     "P2": [
      244,
      109
     ],
     "P3": [
      384,
      109
     ],
     "P4": [
      279,
      109
     ],
     "P5": [
      314,
      109
     ],
     "P6": [
      279,
      109
     ],
     "P7": [
      279,
      144
     ],
     "P8": [
      314,
      109
     ],
     "P9": [
      314,
      179
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
      "v": "P6P7",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P8P9",
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
       424,
       158
      ],
      "text": "Outer: r = 0.50m, v = 2m/s",
      "col": 2
     },
     {
      "at": [
       424,
       122
      ],
      "text": "Inner: r = 0.25m, v = 1m/s",
      "col": 1
     },
     {
      "at": [
       399,
       78
      ],
      "text": "Both ω = 4rad/s",
      "col": 0
     },
     {
      "at": [
       270,
       29
      ],
      "text": "Tangent speeds grow with radius",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 70,
      "col": 0
     },
     {
      "c": "P1",
      "r": 3,
      "col": 3
     },
     {
      "c": "P4",
      "r": 4,
      "col": 1
     },
     {
      "c": "P5",
      "r": 4,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "Radial and tangential acceleration",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      270,
      105
     ],
     "P1": [
      270,
      105
     ],
     "P2": [
      340,
      105
     ],
     "P3": [
      340,
      105
     ],
     "P4": [
      340,
      105
     ],
     "P5": [
      280,
      105
     ],
     "P6": [
      340,
      105
     ],
     "P7": [
      340,
      185
     ],
     "P8": [
      340,
      105
     ],
     "P9": [
      280,
      185
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P1P2",
      "col": 3,
      "arrows": true,
      "dash": false,
      "w": 2
     },
     {
      "v": "P4P5",
      "col": 1,
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
     },
     {
      "v": "P8P9",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       415,
       103
      ],
      "text": "Inward 18m/s²",
      "col": 1
     },
     {
      "at": [
       425,
       165
      ],
      "text": "Tangent 24m/s²",
      "col": 2
     },
     {
      "at": [
       247,
       196
      ],
      "text": "Total 30m/s²",
      "col": 3
     },
     {
      "at": [
       320,
       214
      ],
      "text": "r = 2m; ω = 3rad/s; α = 12rad/s²",
      "col": 0
     },
     {
      "at": [
       402,
       49
      ],
      "text": "Perpendicular components",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 70,
      "col": 0
     },
     {
      "c": "P3",
      "r": 4,
      "col": 0
     }
    ]
   },
   {
    "t": "setups",
    "title": "Same no-slip belt speed:2m/s",
    "head": "Radius(m)",
    "cols": [
     "Angular speed(rad/s)"
    ],
    "rows": [
     [
      "0.10",
      "20"
     ],
     [
      "0.20",
      "10"
     ]
    ]
   }
  ],
  "qpics": {
   "16": {
    "t": "setups",
    "title": "Perpendicular acceleration components",
    "head": "Component",
    "cols": [
     "m/s²"
    ],
    "rows": [
     [
      "Tangential",
      "12"
     ],
     [
      "Inward",
      "5"
     ]
    ]
   }
  }
 },
 {
  "code": "5.3",
  "name": "Torque",
  "skill": "s3",
  "teach": [
   "Torque describes the turning effect of a force about a chosen axis. Its magnitude is τ=rFsinφ, where r runs from the axis to the application point and φ is the angle between that radial position and the force. Equivalently τ=Fℓ, where ℓ is the shortest perpendicular distance from the axis to the force's line of action. The force component parallel to the radial position produces no torque about that axis. A perpendicular 12N force applied 0.5m from an axis gives 6N·m. Use newton-meters for torque; although these have the dimensions of joules, torque is not energy.",
   "Draw forces where they actually act on an extended object. Moving every arrow to the center loses lever-arm information. For a rod pointing right from a left pivot, an upward force at the right end tends to turn it counterclockwise, and a downward one clockwise. With counterclockwise positive, give those torques positive and negative signs respectively. A force applied at the pivot has zero moment about that pivot but can still change the net force. A force whose line of action passes through the axis also has zero lever arm even if it acts far away.",
   "Changing the force angle changes the perpendicular component. For F=20N and r=0.4m, a 30-degree angle between force and radial position gives torque magnitude 0.4×20×sin 30°=4N·m. A 90-degree angle gives 8N·m, and a 0-degree angle gives zero. The angle in the torque formula is between the two vectors; it is not automatically the force's angle to the floor. For the same force magnitude and radial distance, perpendicular application maximizes torque magnitude. The shortest distance to the force's line of action gives the same answer as resolving the perpendicular component.",
   "Find net torque by adding signed contributions about the same chosen axis. A downward 10N force 1m left of a pivot produces +10N·m, while a downward 6N force 2m right produces -12N·m. Net torque is -2N·m, tending to change the motion clockwise. This does not prove the body is currently rotating clockwise: torque determines the angular-acceleration sense in the fixed-axis rigid-body model, not the existing angular velocity. Two equal opposite forces along separate parallel lines can cancel net force while producing a nonzero couple torque. Keep translational and rotational effects distinct."
  ],
  "boards": [
   [
    "Torque magnitude = rFsinφ = Fℓ",
    "ℓ is perpendicular to the force line",
    "12N at perpendicular0.5m gives6N·m"
   ],
   [
    "Keep force application points on the diagram",
    "Right-side upward force tends counterclockwise",
    "A pivot force can matter even with zero moment"
   ],
   [
    "r0.4m, F20N: φ30° gives4N·m",
    "At90° torque8; at0° torque0",
    "Use the angle between r and F"
   ],
   [
    "Left10N at1m: +10N·m",
    "Right6N at2m: -12N·m",
    "Net -2N·m does not specify current rotation"
   ]
  ],
  "eqs": [
   "|τ|=rFsinφ=Fℓ; 0.5×12=6N·m",
   "About a left pivot: right-end up is positive; right-end down is negative",
   "0.4×20×sin 30°=4N·m; perpendicular case 0.4×20=8N·m",
   "τnet=+10×1−6×2=−2N·m"
  ],
  "questions": [
   [
    "What is the lever arm of a force about an axis?",
    "The perpendicular distance from the axis to the force's line of action",
    "Always the distance to the application point regardless of direction",
    "The length of the entire object in every case",
    "The shortest perpendicular distance is what multiplies force magnitude. The application-point distance equals it only when the force is perpendicular to that radius."
   ],
   [
    "Which force component produces torque about a chosen axis in planar rotation?",
    "The component perpendicular to the radial position vector",
    "Only the component parallel to the radial position vector",
    "Every component produces identical torque regardless of direction",
    "Only the perpendicular component has a turning moment. A radial force's line of action passes through the axis and has zero lever arm."
   ],
   [
    "A force acts far from a pivot but its line of action passes through the pivot. What is its torque about that pivot?",
    "Zero",
    "Necessarily large because the application point is far away",
    "Equal to the force magnitude with no length factor",
    "The perpendicular lever arm is zero even if the radial distance is large. Force magnitude alone is not a torque."
   ],
   [
    "Why retain application points in a force diagram for an extended body?",
    "They determine moments about the selected axis",
    "They change the value of gravitational acceleration automatically",
    "Every force must be treated as acting at the center",
    "The same force at a different location can have a different moment. Moving all arrows to the center would discard that information."
   ],
   [
    "An upward force acts at the right end of a rod pivoted at its left end. What rotational tendency does it have in the page view?",
    "Counterclockwise",
    "Clockwise",
    "None because the force is vertical",
    "The right end is pushed upward around the left pivot, a counterclockwise tendency. Vertical forces can exert torque when their lines miss the pivot."
   ],
   [
    "A force is exerted exactly at the pivot. Which statement is correct?",
    "Its moment about that pivot is zero, but it can contribute to net force",
    "It contributes neither force nor torque to any analysis",
    "It must create the largest possible torque",
    "Zero lever arm removes its moment about this pivot, not the force itself. Translation or support-force balance can still depend on it."
   ],
   [
    "For fixed force magnitude and radial distance, which angle maximizes torque magnitude?",
    "90 degrees between force and radial position",
    "0 degrees between force and radial position",
    "180 degrees between force and radial position",
    "The perpendicular component is largest at 90 degrees. Parallel and antiparallel forces have zero perpendicular component."
   ],
   [
    "Which unit is normally used for torque rather than labeling it as energy?",
    "N·m",
    "N/m",
    "kg·m/s",
    "Force times perpendicular distance has units N·m. The inverse-length quantity and momentum unit do not measure torque."
   ],
   [
    "A rigid body has clockwise net torque about its fixed axis. Does that alone establish its current rotation direction?",
    "No; the torque determines angular acceleration, not the existing angular velocity",
    "Yes; it must already be rotating clockwise",
    "Yes; its angular speed must already be zero",
    "An initially counterclockwise body can slow under clockwise torque before reversing. The current angular velocity requires additional information."
   ],
   [
    "Two equal opposite forces act along different parallel lines on a body. Can net force vanish while net torque remains nonzero?",
    "Yes; their turning effects can add as a couple",
    "No; zero net force guarantees zero net torque",
    "No; opposite forces always act along the same line",
    "Separate lever arms can produce the same rotational sense while force vectors cancel. Net force and net torque are independent conditions."
   ],
   [
    "A force of 12N acts with perpendicular lever arm 0.5m about an axis. What is torque magnitude in N·m?",
    "6",
    "24",
    "12",
    "The moment is the force times the perpendicular distance: 6N·m. Dividing by the arm or using force alone has the wrong dimensions."
   ],
   [
    "A force of 16N acts with perpendicular lever arm 0.25m about an axis. What is torque magnitude in N·m?",
    "4",
    "64",
    "16",
    "The moment is the force times the perpendicular distance: 4N·m. Dividing by the arm or using force alone has the wrong dimensions."
   ],
   [
    "A force of 5N acts with perpendicular lever arm 0.8m about an axis. What is torque magnitude in N·m?",
    "4",
    "6.25",
    "5",
    "The moment is the force times the perpendicular distance: 4N·m. Dividing by the arm or using force alone has the wrong dimensions."
   ],
   [
    "A 20N force is applied at radius 0.4m, making 30 degrees with the radial position. Use sin 30°=0.5. What is torque magnitude in N·m?",
    "4",
    "8",
    "10",
    "The perpendicular component is 10N and its radius is 0.4m, giving 4N·m. The 8N·m answer assumes a perpendicular force, while 10 is only the component."
   ],
   [
    "A 15N force at radius 2m points radially away from the pivot. What is torque magnitude about the pivot in N·m?",
    "0",
    "30",
    "7.5",
    "Its line of action crosses the pivot, so the perpendicular lever arm is zero. Multiplying force by radius without the angle factor incorrectly gives 30."
   ],
   [
    "About a fixed axis, torques are +9N·m and -4N·m with counterclockwise positive. What is their net torque in N·m?",
    "5",
    "13",
    "-5",
    "The opposite tendencies partly cancel, leaving +5. Adding magnitudes gives 13 but ignores their opposing signs."
   ],
   [
    "A downward 7N force acts 2m to the right of a pivot. With counterclockwise positive in the page view, what is its torque in N·m?",
    "-14",
    "14",
    "-3.5",
    "The right-side downward force tends clockwise, so the 2×7=14N·m magnitude has a negative sign."
   ],
   [
    "A downward 4N force acts 3m to the left of a pivot. With counterclockwise positive in the page view, what is its torque in N·m?",
    "12",
    "-12",
    "7",
    "Pushing the left side downward gives a counterclockwise tendency. The magnitude is 3×4=12N·m, so the signed moment is positive."
   ],
   [
    "A perpendicular force must produce torque 18N·m at lever arm 0.6m. What force magnitude is needed in newtons?",
    "30",
    "10.8",
    "18",
    "A 30N force acting through 0.6m gives the required 18N·m. Multiplying torque by arm instead produces the wrong units."
   ],
   [
    "Two opposite 10N forces have parallel lines separated by 0.4m and form a couple. What is the couple torque magnitude in N·m?",
    "4",
    "0",
    "8",
    "Taking an axis on either force line removes that force moment; the other contributes 10×0.4=4N·m. The separation already spans both lines, so doubling it double-counts."
   ]
  ],
  "check": [
   "Viewed in the page, a downward 6 N force acts 2 m left of a pivot and a downward 5 N force acts 3 m right. With counterclockwise positive, what is net torque in N·m?",
   "-3",
   "3",
   "27",
   "The left force contributes +12 and the right -15, so the signed sum is -3 N·m."
  ],
  "boardTitle": "Torque",
  "pics": [
   {
    "t": "figure",
    "title": "A force and its perpendicular arm",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      170,
      90
     ],
     "P1": [
      450,
      90
     ],
     "P2": [
      170,
      90
     ],
     "P3": [
      450,
      90
     ],
     "P4": [
      450,
      198
     ],
     "P5": [
      430,
      90
     ],
     "P6": [
      430,
      110
     ],
     "P7": [
      430,
      110
     ],
     "P8": [
      450,
      110
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
      "w": 5
     },
     {
      "v": "P3P4",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P5P6",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P7P8",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       456,
       215
      ],
      "text": "12N",
      "col": 0
     },
     {
      "at": [
       159,
       63
      ],
      "text": "Pivot",
      "col": 0
     },
     {
      "at": [
       303,
       57
      ],
      "text": "0.5m",
      "col": 0
     },
     {
      "at": [
       303,
       172
      ],
      "text": "Perpendicular force: τ = 6N·m",
      "col": 2
     }
    ],
    "circles": [
     {
      "c": "P2",
      "r": 5,
      "col": 3
     }
    ]
   },
   null,
   {
    "t": "figure",
    "title": "The force angle changes the moment",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      200,
      120
     ],
     "P1": [
      350,
      120
     ],
     "P2": [
      200,
      120
     ],
     "P3": [
      350,
      120
     ],
     "P4": [
      453.92304845413264,
      180
     ],
     "P5": [
      237.5,
      55.0480947161671
     ],
     "P6": [
      453.92304845413264,
      180
     ],
     "P7": [
      200,
      120
     ],
     "P8": [
      237.5,
      55.0480947161671
     ],
     "P9": [
      350,
      120
     ],
     "P10": [
      350,
      180
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 4
     },
     {
      "v": "P3P4",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P5P6",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P7P8",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P9P10",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       413,
       194
      ],
      "text": "F = 20N",
      "col": 0
     },
     {
      "at": [
       305,
       200
      ],
      "text": "Fperp = 10N",
      "col": 1
     },
     {
      "at": [
       272,
       141
      ],
      "text": "r = 0.4m",
      "col": 0
     },
     {
      "at": [
       404,
       127
      ],
      "text": "φ = 30°",
      "col": 0
     },
     {
      "at": [
       271,
       35
      ],
      "text": "Lever arm 0.2m",
      "col": 2
     },
     {
      "at": [
       161,
       100
      ],
      "text": "Pivot",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P2",
      "r": 5,
      "col": 3
     }
    ]
   },
   {
    "t": "figure",
    "title": "Downward forces on one pivot; counterclockwise is +",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      140,
      150
     ],
     "P1": [
      520,
      150
     ],
     "P2": [
      240,
      212
     ],
     "P3": [
      240,
      152
     ],
     "P4": [
      480,
      188
     ],
     "P5": [
      480,
      152
     ],
     "P6": [
      320,
      148
     ],
     "P7": [
      306,
      124
     ],
     "P8": [
      334,
      124
     ],
     "P9": [
      240,
      108
     ],
     "P10": [
      320,
      108
     ],
     "P11": [
      480,
      108
     ],
     "P12": [
      240,
      100
     ],
     "P13": [
      240,
      116
     ],
     "P14": [
      320,
      100
     ],
     "P15": [
      320,
      116
     ],
     "P16": [
      480,
      100
     ],
     "P17": [
      480,
      116
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
      "w": 4
     },
     {
      "v": "P2P3",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P4P5",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P9P10",
      "col": 3,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P12P13",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
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
      "v": "P6P7P8",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       212,
       190
      ],
      "text": "10N",
      "col": 0
     },
     {
      "at": [
       506,
       176
      ],
      "text": "6N",
      "col": 1
     },
     {
      "at": [
       280,
       96
      ],
      "text": "1m",
      "col": 3
     },
     {
      "at": [
       400,
       96
      ],
      "text": "2m",
      "col": 3
     },
     {
      "at": [
       200,
       72
      ],
      "text": "+10N·m (counterclockwise)",
      "col": 0
     },
     {
      "at": [
       450,
       72
      ],
      "text": "−12N·m (clockwise)",
      "col": 1
     },
     {
      "at": [
       320,
       44
      ],
      "text": "Net torque: +10 − 12 = −2N·m (clockwise)",
      "col": 4
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "15": {
    "t": "setups",
    "title": "Signed torque contributions",
    "head": "Torque",
    "cols": [
     "N·m"
    ],
    "rows": [
     [
      "First",
      "+9"
     ],
     [
      "Second",
      "-4"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Try: downward forces about one pivot",
   "head": "Side",
   "cols": [
    "Force(N)",
    "Arm(m)"
   ],
   "rows": [
    [
     "Left",
     "6",
     "2"
    ],
    [
     "Right",
     "5",
     "3"
    ]
   ]
  }
 },
 {
  "code": "5.4",
  "name": "Rotational Inertia",
  "skill": "s4",
  "teach": [
   "Rotational inertia I measures a rigid system's resistance to angular acceleration about a specified axis. For a point-like mass, I=mr², with r the perpendicular distance to that axis. For several point masses, add the contributions: I=Σmr². A 2kg mass 1m from the axis and a 3kg mass 2m away on a massless rigid frame give I=2×1²+3×2²=14kg·m². Both positive contributions count even if the masses lie on opposite sides. Inertia depends on the mass arrangement and axis, not on how fast the body happens to spin.",
   "Putting the same mass farther from an axis increases its contribution with the square of distance. Doubling every distance while keeping the masses fixed multiplies I by 4; doubling the masses at fixed distances multiplies it by 2. A point mass exactly on the axis contributes zero in that point-particle model; an extended object's own size may still matter. For a hoop and uniform solid disk of the same mass and radius about their central symmetry axes, the hoop has larger inertia because more mass is far from the axis. When numerical extended-body formulas are needed here, they are supplied rather than assumed from a shape name.",
   "The parallel-axis theorem connects axes with the same direction: I=Icm+Md², where Icm is about a parallel axis through the center of mass, M is total mass and d is the perpendicular separation. If Icm=2kg·m², M=4kg and d=0.5m, the shifted value is 3kg·m². Within this family of parallel axes, the center-of-mass axis gives the minimum inertia. Do not add Md² to an arbitrary noncentral-axis value and call it the theorem, and do not use the relation unchanged between tilted or perpendicular axes.",
   "Check the selected axis before combining parts. For an original light frame with two 2kg point masses at x=-1m and x=+1m, the center is x=0. About an axis perpendicular to the page through the center, I=4kg·m². About a parallel axis at x=+1m, the distances are 2m and 0, giving 8kg·m²; the same result follows from 4+4×1². In a lab, compare angular accelerations under the same measured net torque for mass arrangements placed closer to or farther from an axis. Control friction and torque changes before attributing a difference entirely to rotational inertia."
  ],
  "boards": [
   [
    "Point mass: I = mr²",
    "Same axis: add all mr² contributions",
    "2×1² + 3×2² = 14kg·m²"
   ],
   [
    "Double distances at fixed mass: I ×4",
    "Double masses at fixed distance: I ×2",
    "Distribution and axis matter, not spin speed"
   ],
   [
    "Parallel-axis theorem: I = Icm + Md²",
    "2 + 4×0.5² = 3kg·m²",
    "The starting axis must pass through the center"
   ],
   [
    "Two2kg masses at x=-1 and+1",
    "Center axis: I4; axis at x=+1: I8",
    "Same net torque is essential in a comparison"
   ]
  ],
  "eqs": [
   "I=Σmr²=2×1²+3×2²=14kg·m²",
   "I scales with mass and with the square of perpendicular distance",
   "I=Icm+Md²=2+4×0.5²=3kg·m²",
   "Direct distances: 2×2²+2×0²=8; parallel-axis check: 4+4×1²=8"
  ],
  "questions": [
   [
    "What information is needed to specify rotational inertia of a rigid body?",
    "Its mass distribution and the chosen rotation axis",
    "Only its angular speed",
    "Only the current net torque",
    "The distances of mass from a stated axis determine inertia. Speed and torque can vary without changing that mass arrangement."
   ],
   [
    "In I=mr² for a point mass, what does r represent?",
    "Perpendicular distance to the rotation axis",
    "Distance traveled since the motion began",
    "Always the total length of its supporting frame",
    "Only perpendicular distance determines the mass's circular path about the axis. Travel history and frame length are not generally that distance."
   ],
   [
    "Two point masses lie on opposite sides of one axis. How are their inertia contributions combined?",
    "Add their positive mr² contributions",
    "Subtract the left contribution from the right",
    "Cancel them whenever their distances match",
    "Inertia contains squared distances and nonnegative masses, so sides do not create negative contributions. Signed addition is for torques, not inertia."
   ],
   [
    "At fixed masses, doubling all perpendicular distances to the axis changes inertia by what factor?",
    "4",
    "2",
    "1",
    "Every squared distance becomes four times as large. A linear factor of 2 would ignore the square."
   ],
   [
    "At fixed perpendicular distances, doubling all masses changes inertia by what factor?",
    "2",
    "4",
    "1",
    "Mass appears linearly in each mr² contribution. Doubling mass alone does not square the change."
   ],
   [
    "A point-like mass lies exactly on the axis. What is its contribution in the point-mass model?",
    "Zero",
    "Its mass regardless of units",
    "Infinite",
    "The perpendicular distance is zero, so its mr² contribution vanishes. An extended mass would require considering its distributed parts instead."
   ],
   [
    "A hoop and uniform disk have equal mass and radius about central symmetry axes. Which has greater rotational inertia?",
    "The hoop",
    "The disk",
    "They must be equal because mass alone determines inertia",
    "The hoop places all its mass at the outer radius while the disk spreads mass inward. More distant mass contributes more strongly through r²."
   ],
   [
    "What must be true when applying I=Icm+Md²?",
    "The new axis is parallel to a center-of-mass axis used for Icm",
    "The two axes can have arbitrary orientations",
    "The starting inertia can be about any axis without adjustment",
    "The theorem relates a center-of-mass axis to a parallel displaced axis. Arbitrary angles or noncentral starting values require other analysis."
   ],
   [
    "Among parallel axes of a given direction through a rigid body, which gives minimum inertia?",
    "The axis through its center of mass",
    "The axis farthest from every mass",
    "Every axis gives the same inertia",
    "The offset term Md² is nonnegative and is zero at the center-of-mass axis. The comparison is restricted to parallel axes."
   ],
   [
    "Why control the net torque when comparing angular acceleration for two inertia arrangements?",
    "A change in torque could also change angular acceleration",
    "Angular acceleration depends only on inertia and never on torque",
    "Controlling torque automatically removes every experimental error",
    "Both net torque and inertia affect angular acceleration. Keeping torque fixed isolates that relation more effectively, but measurement error can remain."
   ],
   [
    "A point-like mass 2kg is perpendicular distance 3m from an axis. What is its rotational inertia in kg·m²?",
    "18",
    "6",
    "5",
    "The contribution is 2 times the squared distance 3², giving 18kg·m². The alternatives use distance linearly or add unlike quantities."
   ],
   [
    "A point-like mass 4kg is perpendicular distance 0.5m from an axis. What is its rotational inertia in kg·m²?",
    "1",
    "2",
    "4.5",
    "The contribution is 4 times the squared distance 0.5², giving 1kg·m². The alternatives use distance linearly or add unlike quantities."
   ],
   [
    "A point-like mass 3kg is perpendicular distance 2m from an axis. What is its rotational inertia in kg·m²?",
    "12",
    "6",
    "5",
    "The contribution is 3 times the squared distance 2², giving 12kg·m². The alternatives use distance linearly or add unlike quantities."
   ],
   [
    "Two point masses 2kg and 3kg are respectively 1m and 2m from the same axis on a massless frame. What is total inertia in kg·m²?",
    "14",
    "8",
    "5",
    "The contributions are 2 and 12kg·m², summing to 14. A sum of masses or unsquared distance products omits the distribution correctly weighted by r²."
   ],
   [
    "A rigid system has inertia 3kg·m² about an axis. Every perpendicular mass distance is doubled without changing any mass. What is its new inertia in kg·m²?",
    "12",
    "6",
    "3",
    "Every contribution scales by the square of 2, so the original 3 becomes 12. Angular speed is irrelevant to this geometric change."
   ],
   [
    "A body has center-of-mass inertia 2kg·m² and total mass 4kg. What is its inertia about a parallel axis 0.5m away, in kg·m²?",
    "3",
    "1",
    "2",
    "The offset adds 1kg·m² to the existing central value 2, giving 3. The added term alone omits central inertia; the unchanged value omits the shift."
   ],
   [
    "A body has center-of-mass inertia 3kg·m² and total mass 2kg. What is its inertia about a parallel axis 2m away, in kg·m²?",
    "11",
    "8",
    "3",
    "The offset adds 8kg·m² to the existing central value 3, giving 11. The added term alone omits central inertia; the unchanged value omits the shift."
   ],
   [
    "A body has center-of-mass inertia 1kg·m² and total mass 3kg. What is its inertia about a parallel axis 1m away, in kg·m²?",
    "4",
    "3",
    "1",
    "The offset adds 3kg·m² to the existing central value 1, giving 4. The added term alone omits central inertia; the unchanged value omits the shift."
   ],
   [
    "Two 2kg point masses at x=-1m and x=+1m form a massless rigid frame. For an axis perpendicular to the page at x=+1m, what is inertia in kg·m²?",
    "8",
    "4",
    "0",
    "The perpendicular distances to this axis are 2m and 0. The contributions are 8 and 0kg·m²; using both original 1m distances would choose the wrong axis."
   ],
   [
    "A uniform disk has mass 8kg and radius 0.5m. Given I=(1/2)MR² about its central symmetry axis, what is I in kg·m²?",
    "1",
    "2",
    "4",
    "The squared radius is 0.25m², so half of 8×0.25 is 1kg·m². The value 2 omits the one-half factor and 4 omits the radius factor."
   ]
  ],
  "boardTitle": "Rotational inertia",
  "pics": [
   {
    "t": "figure",
    "title": "Add point-mass contributions",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      180,
      115
     ],
     "P1": [
      440,
      115
     ],
     "P2": [
      180,
      115
     ],
     "P3": [
      300,
      115
     ],
     "P4": [
      420,
      115
     ],
     "P5": [
      180,
      65
     ],
     "P6": [
      420,
      65
     ]
    },
    "hide": "P0P1P2P3P4P5P6",
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       300,
       156
      ],
      "text": "2kg",
      "col": 0
     },
     {
      "at": [
       420,
       161
      ],
      "text": "3kg",
      "col": 1
     },
     {
      "at": [
       240,
       89
      ],
      "text": "1m",
      "col": 0
     },
     {
      "at": [
       300,
       40
      ],
      "text": "2m from axis to outer mass",
      "col": 0
     },
     {
      "at": [
       322,
       210
      ],
      "text": "I = 2×1² + 3×2² = 14kg·m²",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P2",
      "r": 5,
      "col": 3
     },
     {
      "c": "P3",
      "r": 13,
      "col": 0
     },
     {
      "c": "P4",
      "r": 16,
      "col": 1
     }
    ]
   },
   null,
   null,
   {
    "t": "figure",
    "title": "Inertia changes with the selected axis",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      180,
      120
     ],
     "P1": [
      420,
      120
     ],
     "P2": [
      180,
      120
     ],
     "P3": [
      420,
      120
     ],
     "P4": [
      300,
      120
     ],
     "P5": [
      300,
      120
     ],
     "P6": [
      420,
      120
     ],
     "P7": [
      420,
      120
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
      "w": 3
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       180,
       150
      ],
      "text": "2kg",
      "col": 0
     },
     {
      "at": [
       420,
       150
      ],
      "text": "2kg",
      "col": 0
     },
     {
      "at": [
       250,
       210
      ],
      "text": "CM axis: I = 4kg·m²",
      "col": 1
     },
     {
      "at": [
       450,
       210
      ],
      "text": "Shifted: I = 8kg·m²",
      "col": 2
     },
     {
      "at": [
       240,
       85
      ],
      "text": "1m",
      "col": 0
     },
     {
      "at": [
       359,
       85
      ],
      "text": "1m",
      "col": 0
     },
     {
      "at": [
       320,
       38
      ],
      "text": "Axes perpendicular to the page",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P2",
      "r": 14,
      "col": 0
     },
     {
      "c": "P3",
      "r": 14,
      "col": 0
     },
     {
      "c": "P4",
      "r": 6,
      "col": 1
     },
     {
      "c": "P5",
      "r": 1,
      "col": 1
     },
     {
      "c": "P6",
      "r": 6,
      "col": 2
     },
     {
      "c": "P7",
      "r": 1,
      "col": 2
     }
    ]
   }
  ],
  "qpics": {
   "13": {
    "t": "setups",
    "title": "Point masses about the same axis",
    "head": "Mass(kg)",
    "cols": [
     "Distance(m)"
    ],
    "rows": [
     [
      "2",
      "1"
     ],
     [
      "3",
      "2"
     ]
    ]
   },
   "18": {
    "t": "setups",
    "title": "Point masses; axis at x=+1m",
    "head": "Mass(kg)",
    "cols": [
     "x(m)"
    ],
    "rows": [
     [
      "2",
      "-1"
     ],
     [
      "2",
      "+1"
     ]
    ]
   }
  }
 },
 {
  "code": "5.5",
  "name": "Rotational Equilibrium and Newton’s First Law in Rotational Form",
  "skill": "s5",
  "teach": [
   "For a rigid body rotating about a fixed axis with constant nonzero inertia, zero net torque gives zero angular acceleration, so angular velocity remains constant. It may be zero or nonzero. Static equilibrium is more restrictive: the body remains at rest and has both zero net force and zero net torque. Translational equilibrium concerns constant center-of-mass velocity; rotational equilibrium concerns constant angular velocity in the one-axis model. Balanced forces do not automatically mean balanced torques, and balanced torques do not automatically mean balanced forces.",
   "To solve a static problem, identify the whole body, draw all external forces at their application points, and choose a convenient axis. Include the object's weight and support forces when present. In a uniform gravitational field the weight acts effectively at the center of mass; a uniform straight beam has that center at its midpoint. A hinge force contributes no moment about the hinge, making that axis useful, but it still belongs in the force-balance equations. With full static equilibrium, torque balance can be checked about any other origin as well because net force is zero.",
   "Consider an original horizontal 4m uniform beam supported vertically at each end. Its weight is 40N at the midpoint and an extra downward 20N load acts at the right end. About the left support, the right reaction R gives 4R=40×2+20×4, so R=40N. Vertical force balance then gives left reaction L=60-40=20N. Check about the right support: L×4=40×2, with the load at that axis contributing no moment. Both the net force and net moment vanish. Equal supports would be incorrect here because the extra load is not centered.",
   "For a massless level seesaw, an 8N downward force 3m left of the pivot balances a 12N force 2m right: each torque magnitude is 24N·m. The upward pivot force must also equal 20N for static equilibrium. If one downward force changes, balancing only vertical forces does not restore rotational balance unless the moments also match. In experimental equilibrium tests, measure perpendicular arms, include the beam's own weight and any frictional moment, and consider measurement uncertainty. A small residual compared with uncertainty may be inconclusive; do not report exact balance merely because rounded readings look equal."
  ],
  "boards": [
   [
    "Zero net torque ⇒ constant ω in this model",
    "Constant ω can be nonzero",
    "Static equilibrium also needs rest and force balance"
   ],
   [
    "Draw weight and support forces at their locations",
    "Uniform beam: weight acts at its midpoint",
    "A hinge force has zero moment about that hinge"
   ],
   [
    "Beam4m: weight40N; right-end load20N",
    "Right support40N; left support20N",
    "Check both forces and torques"
   ],
   [
    "Left8N×3m balances right12N×2m",
    "Pivot support must also supply20N upward",
    "Include beam weight, friction and uncertainty"
   ]
  ],
  "eqs": [
   "Στ=0 ⇒ α=0 for the fixed-axis constant-I model; static: ΣF=0 too",
   "Static balance: ΣFx=0, ΣFy=0 and Στ=0",
   "4R=40×2+20×4 ⇒ R = 40N; L+R=60 ⇒ L = 20N",
   "8×3=12×2=24N·m; pivot reaction=8+12=20N"
  ],
  "questions": [
   [
    "A rigid body has zero net torque about its fixed axis and constant inertia. What must be true?",
    "Angular acceleration is zero",
    "Angular velocity must be zero",
    "Its orientation can never change",
    "Zero net torque means constant angular velocity, which may be nonzero. A rotating body can continue changing orientation without angular acceleration."
   ],
   [
    "What extra condition distinguishes static equilibrium from merely constant angular velocity?",
    "The body remains at rest as well as satisfying force and torque balance",
    "Its mass must be zero",
    "Its supports must exert no forces",
    "Static means no motion, along with balanced external forces and moments. Supports can exert substantial forces while balancing the weight."
   ],
   [
    "Can equal and opposite forces produce zero net force but nonzero net torque?",
    "Yes, if their lines of action are separated",
    "No, because net force and net torque are identical",
    "No, because every force must act at the same point",
    "A couple demonstrates separate force and torque conditions. The separated moments can add even though force vectors cancel."
   ],
   [
    "Can a net force through a free rigid body's center of mass change its translational motion without changing its spin in the planar model?",
    "Yes, if net torque about the center of mass is zero",
    "No, every force must change angular velocity",
    "No, zero torque always means zero net force",
    "A force through the center has no moment about it, yet can accelerate the center of mass. Translation and rotation are separate equations."
   ],
   [
    "Where can the weight of a uniform straight beam be represented in a uniform gravitational field?",
    "At its midpoint, which is its center of mass",
    "Always at the right end",
    "Always at whichever pivot makes the arithmetic easiest",
    "The mass distribution fixes the center of mass. Choosing an axis cannot relocate the physical line of action of the weight."
   ],
   [
    "Why choose the hinge as the torque origin in many beam problems?",
    "The hinge force then has zero lever arm about that origin",
    "The hinge force stops existing physically",
    "The beam's weight automatically becomes zero",
    "The convenient origin removes the hinge moment from that one equation, but the hinge force still contributes to force balance."
   ],
   [
    "A beam is balanced in both net force and net torque. What happens if torque is recomputed about another fixed point?",
    "The net torque is still zero",
    "The beam must cease to be balanced",
    "The weight moves to the new point",
    "Changing the origin changes net torque by a term involving the net force, which is zero here. The physical forces do not move."
   ],
   [
    "Why may the two end supports of a loaded beam carry different forces?",
    "The loads can act at different distances from the supports",
    "Vertical force balance alone requires equal supports",
    "Every support force must equal the beam's full weight",
    "Torque balance depends on load positions as well as magnitudes. Equal reactions require suitable symmetry, not just vertical balance."
   ],
   [
    "Why include the mass of a non-negligible beam in a seesaw calculation?",
    "Its weight may exert a moment about the pivot",
    "Only hanging objects can exert gravitational forces",
    "Beam weight is automatically canceled by every torque equation",
    "The beam's weight acts at its center of mass and can have a lever arm. Omitting it is justified only if negligible or its moment is otherwise accounted for."
   ],
   [
    "A measured torque residual is smaller than the experiment's uncertainty. What is a justified conclusion?",
    "The data may be consistent with balance, but do not prove exact zero torque",
    "The net torque has been proved mathematically equal to zero",
    "The uncertainty can be ignored because the number is small",
    "Measurement limits restrict the precision of the inference. Consistency with zero differs from proving an exact value."
   ],
   [
    "A massless horizontal seesaw is static. A downward 8N force acts 3m left of its pivot. What downward force 2m right balances the moments, in newtons?",
    "12",
    "24",
    "5.33",
    "The left moment is 24N·m. A force 12N at the right arm 2m supplies the equal opposite moment. A moment value is not itself the required force."
   ],
   [
    "A massless horizontal seesaw is static. A downward 10N force acts 2m left of its pivot. What downward force 4m right balances the moments, in newtons?",
    "5",
    "20",
    "10",
    "The left moment is 20N·m. A force 5N at the right arm 4m supplies the equal opposite moment. A moment value is not itself the required force."
   ],
   [
    "A massless horizontal seesaw is static. A downward 12N force acts 1m left of its pivot. What downward force 3m right balances the moments, in newtons?",
    "4",
    "12",
    "36.00",
    "The left moment is 12N·m. A force 4N at the right arm 3m supplies the equal opposite moment. A moment value is not itself the required force."
   ],
   [
    "A massless seesaw is static with downward loads 9N and 15N and one vertical pivot support. What is the upward support force in newtons?",
    "24",
    "6",
    "15",
    "Net vertical force must vanish, so the single support balances the sum 24N. The difference or one load alone would leave a net downward force."
   ],
   [
    "A uniform 6m beam weighs 60N and carries a 30N downward load 2m from its left end. Both ends support it vertically in static equilibrium. What is the right reaction in newtons?",
    "40",
    "45",
    "50",
    "About the left end, the downward moments total 60×3+30×2=240N·m. A 40N reaction 6m away balances them. The total weight 90 alone does not determine an equal split."
   ],
   [
    "A uniform 6m beam weighs 60N and carries a 30N downward load 2m from its left end. Both ends support it vertically in static equilibrium. What is the left reaction in newtons?",
    "50",
    "40",
    "45",
    "Torque balance gives right reaction 40N, while total downward force is 90N. The left reaction is therefore 50N; equal 45N reactions would not balance moments."
   ],
   [
    "A horizontal beam has clockwise moments totaling 18N·m. The only opposing moment comes from an upward force at a point 3m right of the pivot. What force keeps rotational equilibrium, in newtons?",
    "6",
    "54",
    "18",
    "The counterclockwise moment must be 18N·m. A 6N force at 3m produces that moment; multiplying the moment by distance is dimensionally incorrect."
   ],
   [
    "A fixed-axis rotor with constant inertia has zero net torque and initial angular velocity -5rad/s. What is its angular velocity after 4s, in rad/s?",
    "-5",
    "0",
    "-20",
    "With no angular acceleration the existing angular velocity remains -5rad/s. The product -20rad would be angular displacement, not velocity."
   ]
  ],
  "boardTitle": "Equilibrium",
  "pics": [
   null,
   null,
   {
    "t": "figure",
    "title": "Both support forces are needed",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      130,
      138
     ],
     "P1": [
      510,
      138
     ],
     "P2": [
      130,
      138
     ],
     "P3": [
      130,
      178
     ],
     "P4": [
      510,
      138
     ],
     "P5": [
      510,
      218
     ],
     "P6": [
      320,
      138
     ],
     "P7": [
      320,
      58
     ],
     "P8": [
      510,
      138
     ],
     "P9": [
      510,
      98
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
      "w": 5
     },
     {
      "v": "P2P3",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
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
     },
     {
      "v": "P8P9",
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
       129,
       195
      ],
      "text": "L = 20N",
      "col": 0
     },
     {
      "at": [
       461,
       214
      ],
      "text": "R = 40N",
      "col": 0
     },
     {
      "at": [
       371,
       69
      ],
      "text": "Weight 40N",
      "col": 1
     },
     {
      "at": [
       510,
       75
      ],
      "text": "Load 20N",
      "col": 2
     },
     {
      "at": [
       223,
       115
      ],
      "text": "2m",
      "col": 0
     },
     {
      "at": [
       418,
       115
      ],
      "text": "2m",
      "col": 0
     },
     {
      "at": [
       320,
       35
      ],
      "text": "Uniform 4m beam in static equilibrium",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Balanced torques and balanced forces",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      100,
      112
     ],
     "P1": [
      515,
      112
     ],
     "P2": [
      350,
      112
     ],
     "P3": [
      110,
      112
     ],
     "P4": [
      110,
      72
     ],
     "P5": [
      510,
      112
     ],
     "P6": [
      510,
      52
     ],
     "P7": [
      350,
      112
     ],
     "P8": [
      350,
      212
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
      "w": 4
     },
     {
      "v": "P3P4",
      "col": 0,
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
     },
     {
      "v": "P7P8",
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
       124,
       48
      ],
      "text": "8N",
      "col": 0
     },
     {
      "at": [
       510,
       31
      ],
      "text": "12N",
      "col": 1
     },
     {
      "at": [
       390,
       214
      ],
      "text": "Support 20N",
      "col": 2
     },
     {
      "at": [
       230,
       89
      ],
      "text": "3m",
      "col": 0
     },
     {
      "at": [
       430,
       89
      ],
      "text": "2m",
      "col": 0
     },
     {
      "at": [
       220,
       178
      ],
      "text": "Massless beam",
      "col": 0
     },
     {
      "at": [
       281,
       38
      ],
      "text": "Equal moments:24N·m each",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P2",
      "r": 4,
      "col": 3
     }
    ]
   }
  ],
  "qpics": {
   "14": {
    "t": "setups",
    "title": "Uniform beam with vertical end supports",
    "head": "Given",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Length / weight",
      "6m / 60N"
     ],
     [
      "Extra load",
      "30N at x=2m"
     ]
    ]
   },
   "15": {
    "t": "setups",
    "title": "Uniform beam with vertical end supports",
    "head": "Given",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Length / weight",
      "6m / 60N"
     ],
     [
      "Extra load",
      "30N at x=2m"
     ]
    ]
   }
  }
 },
 {
  "code": "5.6",
  "name": "Newton’s Second Law in Rotational Form",
  "skill": "s6",
  "teach": [
   "For a rigid body about a fixed axis in an inertial frame, use net external torque about that axis: Στ=Iα. The same scalar relation applies to planar rotation about the center of mass when used with the corresponding inertia. Do not combine a torque about one axis with inertia about another, or generalize this constant-I formula to any deforming system or arbitrary accelerating axis. If I=2kg·m² and net torque is +6N·m, α=+3rad/s². Doubling the net torque doubles α at fixed I; doubling I halves α at fixed torque. Torque sets angular acceleration, not angular velocity directly.",
   "Find the net torque before dividing by I. A motor applies +10N·m while friction opposes it with -2N·m, giving +8N·m. For I=4kg·m² the acceleration is +2rad/s². Starting from rest under that constant net torque for 3s gives ω=6rad/s and Δθ=9rad. A torque-time change means the acceleration can change too; solve each interval or use a graph rather than applying a constant value across the whole motion. An axis reaction through a frictionless bearing can constrain translation while exerting no torque about that axis.",
   "Some systems need both translation and rotation. In an original ideal apparatus, a 2kg mass hangs from a massless inextensible string wrapped without slip around a fixed pulley of radius 0.5m and inertia 0.5kg·m². The bearing has negligible friction. Using g=9.8m/s², downward motion of the mass obeys mg-T=ma, while pulley rotation obeys TR=Iα and the string condition is a=Rα. Combining them gives a=mg/(m+I/R²)=4.9m/s², tension 9.8N and α=9.8rad/s². Tension is not mg because the mass accelerates; the pulley's inertia prevents the mass from freely falling at g.",
   "Design experiments to distinguish torque and inertia effects. For a rigid rotor with fixed I, plot measured net torque vertically against angular acceleration horizontally: the ideal straight-line slope is I. If you instead plot applied driving torque and a roughly constant opposing frictional torque is present, the intercept represents that resistance over a consistent motion direction. A no-slip string gives α=a/R, so radius and linear-acceleration measurements can connect the graphs. Repeat trials, control mass distribution and bearing conditions, and check uncertainties. A fitted line alone is not proof that slipping, friction or a changing effective radius was absent."
  ],
  "boards": [
   [
    "Choose the axis before calculating torque and I",
    "Net torque 6 / inertia 2 gives α = 3",
    "Constant-I planar model: Στ = Iα"
   ],
   [
    "Motor +10 and friction -2: net +8N·m",
    "I = 4 gives α = 2; from rest, 3s gives ω = 6",
    "Constant torque and fixed inertia are assumptions"
   ],
   [
    "Hanging mass: mg-T=ma",
    "Pulley: TR=Iα; no slip: a=Rα",
    "m2, R0.5, I0.5: a4.9; T9.8"
   ],
   [
    "Graph net torque versus α: slope I",
    "Applied torque may include a friction intercept",
    "Test for slipping and control the mass layout"
   ]
  ],
  "eqs": [
   "Στ=Iα; α=6/2=3rad/s²",
   "α=(10−2)/4=2rad/s²; ω=2×3=6rad/s; Δθ=½×2×3²=9rad",
   "a=mg/(m+I/R²)=19.6/(2+2)=4.9m/s²; T=m(g−a)=9.8N",
   "Net torque = I×α; applied drive torque = I×α + opposing friction magnitude"
  ],
  "questions": [
   [
    "Which quantities must use the same selected axis in Στ=Iα?",
    "Net torque and rotational inertia",
    "Only total mass and elapsed time",
    "Only the initial angle and the final speed",
    "Torque and inertia depend on axis choice. Combining values from different axes can give an incorrect angular acceleration even with correct arithmetic."
   ],
   [
    "For a fixed-axis rigid rotor with constant inertia, what directly determines angular acceleration?",
    "Net external torque divided by that axis's inertia",
    "Applied drive torque alone even if friction acts",
    "Angular velocity divided by mass",
    "All external moments about the chosen axis contribute to the net. Ignoring opposing friction or dividing unrelated quantities does not implement the law."
   ],
   [
    "At fixed inertia, doubling net torque changes angular acceleration by what factor?",
    "2",
    "4",
    "1/2",
    "The rotational equation is linear in net torque for the stated fixed inertia. It does not square the torque or invert that change."
   ],
   [
    "At fixed net torque, doubling rotational inertia changes angular acceleration by what factor?",
    "1/2",
    "2",
    "4",
    "A larger inertia resists the same turning influence more strongly. The inverse relation halves acceleration when inertia doubles."
   ],
   [
    "Why subtract an opposing frictional torque before computing a motor-driven rotor's acceleration?",
    "The law uses the sum of all external torques, not the drive torque alone",
    "Friction changes the SI unit of inertia",
    "Friction always makes the rotor's angular velocity zero instantly",
    "Opposing torque reduces the net turning influence. It does not change units or force an instantaneous stop."
   ],
   [
    "A bearing force acts through the fixed rotation axis. Can it constrain translation without a moment about that axis?",
    "Yes, its lever arm is zero about that axis",
    "No, every force has nonzero torque about every axis",
    "No, a fixed axis requires all forces to vanish",
    "A support force can balance or supply linear forces while having no turning moment about the point through which it acts. A bearing frictional couple would be separate."
   ],
   [
    "Why is tension below mg for a downward-accelerating hanging mass in the stated pulley model?",
    "The difference mg-T provides the positive downward net force",
    "Tension must be zero whenever acceleration is nonzero",
    "The mass's weight becomes zero once it moves",
    "Newton's translational law requires a downward force difference. Tension can be positive and less than weight; motion does not remove gravity."
   ],
   [
    "Which relation links the mass's acceleration and pulley's angular acceleration for an inextensible no-slip string?",
    "a=Rα in consistent directions",
    "a=α/R",
    "a=Rω² for the string's tangential acceleration",
    "The no-slip contact matches changes in tangential speed. The centripetal expression describes a different acceleration component of a rim point."
   ],
   [
    "What is the slope when net torque is graphed vertically against angular acceleration for a fixed-I rotor?",
    "Rotational inertia I",
    "Its reciprocal 1/I",
    "The rotor's angular speed",
    "The straight-line equation is torque=I×acceleration. Reversing the axes would produce the reciprocal slope instead."
   ],
   [
    "An applied-torque-versus-α graph has a positive intercept under a constant opposing-friction model. What can that intercept represent?",
    "The opposing frictional torque over that motion direction",
    "Proof that the rotor has negative inertia",
    "An unavoidable zero-force condition",
    "Applied torque must overcome resistance as well as accelerate the rotor. A positive intercept is compatible with positive inertia and does not prove all other model assumptions."
   ],
   [
    "A rigid rotor about a fixed axis has inertia 3kg·m² and net torque 12N·m. What is angular acceleration in rad/s²?",
    "4",
    "36",
    "-4",
    "The acceleration must satisfy Iα=12N·m, giving 4rad/s². Multiplication by I gives the wrong units, while reversing the sign contradicts the torque sense."
   ],
   [
    "A rigid rotor about a fixed axis has inertia 2kg·m² and net torque -10N·m. What is angular acceleration in rad/s²?",
    "-5",
    "-20",
    "5",
    "The acceleration must satisfy Iα=-10N·m, giving -5rad/s². Multiplication by I gives the wrong units, while reversing the sign contradicts the torque sense."
   ],
   [
    "A rigid rotor about a fixed axis has inertia 1.5kg·m² and net torque 9N·m. What is angular acceleration in rad/s²?",
    "6",
    "13.5",
    "-6",
    "The acceleration must satisfy Iα=9N·m, giving 6rad/s². Multiplication by I gives the wrong units, while reversing the sign contradicts the torque sense."
   ],
   [
    "Drive torque is +14N·m and opposing friction is -2N·m on a fixed-axis rotor with I=4kg·m². What is angular acceleration in rad/s²?",
    "3",
    "3.5",
    "4",
    "The net torque is 12N·m and inertia 4, giving 3rad/s². Using 14 alone ignores friction; adding magnitudes uses the wrong sign."
   ],
   [
    "A fixed-axis rotor with I=2kg·m² needs angular acceleration 5rad/s². What net torque magnitude is required in N·m?",
    "10",
    "2.5",
    "0.4",
    "The required moment must equal the inertia times angular acceleration, so 10N·m. The quotients correspond to different rearrangements and do not satisfy Iα."
   ],
   [
    "A rotor starts from rest with I=4kg·m² and constant net torque 8N·m about its fixed axis. What is angular velocity after 3s in rad/s?",
    "6",
    "2",
    "9",
    "The constant acceleration is 2rad/s², producing 6rad/s after 3s. The value 2 is acceleration and 9 is angular displacement in radians, not velocity."
   ],
   [
    "A 2kg mass descends on a massless inextensible no-slip string around a fixed pulley with R=0.5m and I=0.5kg·m². Bearing friction is negligible and g=9.8m/s². What is its downward acceleration in m/s²?",
    "4.9",
    "9.8",
    "2.45",
    "The pulley requires tension to gain angular speed. Combining mg-T=ma with TR=I(a/R) gives an effective accelerating mass 2+0.5/0.5²=4kg and acceleration 19.6/4=4.9m/s²."
   ],
   [
    "A 2kg mass descends on a massless inextensible no-slip string around a fixed pulley with negligible bearing friction, R=0.5m and I=0.5kg·m². With g=9.8m/s² its downward acceleration is 4.9m/s². What is string tension in newtons?",
    "9.8",
    "19.6",
    "0",
    "The weight is 19.6N and the required net downward force is 2×4.9=9.8N, leaving tension 9.8N. Setting tension equal to weight would predict zero acceleration."
   ],
   [
    "A no-slip string accelerates tangentially at 4.9m/s² around a fixed radius 0.5m pulley. What is angular acceleration magnitude in rad/s²?",
    "9.8",
    "2.45",
    "4.9",
    "The angular rate of speed change must give the stated rim acceleration when multiplied by 0.5m. Thus α=9.8rad/s²; multiplying by radius reverses that relation."
   ],
   [
    "A rotor graph gives net torque 6N·m at α=2rad/s² and net torque 12N·m at α=4rad/s². What fixed rotational inertia does the slope indicate, in kg·m²?",
    "3",
    "2",
    "6",
    "The torque rise 6N·m accompanies an acceleration rise 2rad/s², so the slope is 3kg·m². It also satisfies both individual torque-to-acceleration ratios."
   ]
  ],
  "check": [
   "A fixed-axis rotor has I=3kg·m². Drive torque is +11N·m and frictional torque -2N·m. Starting from rest, what is angular velocity after 2s if torques remain constant?",
   "6rad/s",
   "3rad/s",
   "22rad/s",
   "Net torque is 9N·m, so α=3rad/s²; over 2s from rest this gives 6rad/s."
  ],
  "boardTitle": "Rotational dynamics",
  "pics": [
   null,
   null,
   {
    "t": "setups",
    "title": "An ideal hanging-mass and pulley model",
    "head": "Quantity",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Hanging mass / g",
      "2kg / 9.8m/s²"
     ],
     [
      "Pulley radius / inertia",
      "0.5m / 0.5kg·m²"
     ],
     [
      "No-slip results",
      "a = 4.9m/s²; T = 9.8N"
     ],
     [
      "Angular acceleration",
      "9.8rad/s²"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Measure the net torque and acceleration",
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
      120,
      61
     ],
     "P17": [
      510,
      165
     ],
     "P18": [
      412.5,
      139
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
      "text": "Angular acceleration (rad/s²)",
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
       108
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       97,
       160
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       427.5,
       154
      ],
      "text": "(3,6)",
      "col": 0
     },
     {
      "at": [
       375,
       209
      ],
      "text": "Slope I = 2kg·m²",
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
   "16": {
    "t": "setups",
    "title": "Fixed pulley: no slip, negligible friction",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Hanging mass",
      "2kg"
     ],
     [
      "Radius / inertia",
      "0.5m / 0.5kg·m²"
     ],
     [
      "g",
      "9.8m/s²"
     ]
    ]
   },
   "19": {
    "t": "setups",
    "title": "Net torque versus angular acceleration",
    "head": "α(rad/s²)",
    "cols": [
     "Torque(N·m)"
    ],
    "rows": [
     [
      "2",
      "6"
     ],
     [
      "4",
      "12"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Try: fixed-axis rotor starts from rest",
   "head": "Quantity",
   "cols": [
    "Given"
   ],
   "rows": [
    [
     "Inertia",
     "3kg·m²"
    ],
    [
     "Drive / friction",
     "+11 / -2N·m"
    ],
    [
     "Elapsed time",
     "2s"
    ]
   ]
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Choose the body, axis, viewing side and positive sense first. Radians connect angular quantities to arc length and tangential motion. Keep inward acceleration separate from tangential acceleration, and use constant-acceleration equations only when justified. Torque uses a perpendicular lever arm and a sign; inertia uses positive squared distances about that same axis. Static equilibrium requires rest and both force and moment balance. In dynamics, include every external torque and solve any linked translational motion as well. Check units, limiting cases, graph meanings, slipping assumptions and experimental uncertainty before accepting a result.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-physics-1-torque-and-rotational-dynamics","subject":"science","level":5,"grade":9,"standard":"AP Physics 1 CED, effective Fall 2024 with Fall 2026 clarifications, Unit 5, topics5.1–5.6","title":"Torque and Rotational Dynamics","goal":"Describe rigid rotation, connect angular and linear motion, calculate moments and axis-dependent inertia, and solve force and torque balances with explicit physical assumptions.","points":20,"progression":{"requires":["science-h-ap-physics-1-linear-momentum"],"operations":3,"demand":"Interpret signed angular graphs, resolve perpendicular moments, sum mass-distance contributions and solve linked force/torque equations."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
