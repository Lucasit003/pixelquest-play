/* Original course unit. Review record: docs/review/lessons/high-completion/ap-physics1-u7-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "7.1",
  "name": "Defining Simple Harmonic Motion (SHM)",
  "skill": "s1",
  "boardTitle": "Defining SHM",
  "teach": [
   "An oscillation repeats about an equilibrium, but not every periodic motion is simple harmonic. For one-dimensional ideal SHM, the net force must be Fnet=-kx with constant positive k and constant mass. Here x is displacement from equilibrium, not an arbitrary coordinate measured from a wall. The negative sign makes the force restoring. For k=40N/m and x=+0.2m, force is -8N; at x=-0.2m it is +8N. A constant or nonlinear restoring force is a different model.",
   "Use Newton’s law with the restoring force: a=-(k/m)x. The acceleration opposes displacement, not necessarily velocity. At an endpoint the velocity is zero while acceleration is largest toward the center. At equilibrium the restoring acceleration is zero while a nonzero-amplitude oscillator has its greatest speed. For m=2kg, k=50N/m and x=+0.2m, force -10N gives acceleration -5m/s². Confusing an instant of zero speed with zero force prevents explaining the reversal.",
   "For an ideal massless vertical spring in uniform gravity, the equilibrium extension y0 satisfies ky0=mg. Taking extra displacement x downward from equilibrium, net downward force is mg-k(y0+x)=-kx. A 2kg mass with k=100N/m and g=10m/s² has equilibrium extension 0.2m. At an extra 0.1m downward, total extension is 0.3m, spring force 30N upward and net force 10N upward. Gravity shifts the equilibrium rather than changing the linear restoring coefficient.",
   "A simple pendulum idealizes a point-like bob on a fixed-length, negligible-mass support, with a stationary pivot and negligible resistance. Gravity provides restoring torque -mgL sinθ about the pivot. For small angles in radians, sinθ≈θ, giving approximately harmonic angular motion. It is an approximation, not a statement that every pendulum swing is exactly harmonic. For m=2kg, L=0.5m, g=10m/s² and sinθ=0.1 at positive θ, restoring torque is -1N·m.",
   "Identify an oscillator experimentally by measuring displacement from its equilibrium and the net restoring force. A straight force-displacement graph through zero with negative slope supports F=-kx over the measured range. If force changes from +8N at -0.2m to -8N at +0.2m, the slope is -40N/m and effective k=40N/m. Check repeated measurements, possible friction and the range where the spring remains linear. Diminishing amplitude requires losses beyond an ideal undamped model."
  ],
  "eqs": [
   "Fnet=−kx; −40×(+0.2)=−8N",
   "a=−kx/m=−50×0.2/2=−5m/s²",
   "y0=mg/k=20/100=0.2m; mg−k(y0+x)=−kx",
   "τ=−mgL sinθ=−2×10×0.5×0.1=−1N·m",
   "Force slope=(−8−8)/(0.2−(−0.2))=−40N/m"
  ],
  "boards": [
   [
    "SHM is a special case of periodic motion",
    "Net restoring force must be linear",
    "Measure x from the equilibrium"
   ],
   [
    "Acceleration points opposite displacement",
    "Endpoint: speed 0, largest restoring acceleration",
    "Equilibrium: acceleration 0, greatest speed"
   ],
   [
    "Static extension satisfies ky0 = mg",
    "Measure extra displacement from that balance",
    "Constant gravity shifts the equilibrium"
   ],
   [
    "Simple pendulum uses a point-like bob",
    "Small-angle sinθ ≈ θ uses radians",
    "Large swings need a nonlinear model"
   ],
   [
    "Plot net force against equilibrium displacement",
    "Negative linear slope has magnitude k",
    "Check the measured range and uncertainty"
   ]
  ],
  "questions": [
   [
    "Which condition defines ideal one-dimensional simple harmonic motion about x=0?",
    "Net force is -kx with constant positive k and constant mass",
    "Net force is a constant positive value",
    "Any motion that repeats, regardless of its force law",
    "A linear restoring net force gives acceleration proportional and opposite to displacement. Repetition alone is not enough to make an oscillation simple harmonic."
   ],
   [
    "What does the minus sign in a restoring-force relation F=-kx signify?",
    "Force points opposite displacement from equilibrium",
    "The force magnitude is always negative",
    "The spring stiffness is a negative material constant",
    "The coordinate sign describes direction. Positive stiffness gives a force back toward equilibrium on either side, without a negative magnitude."
   ],
   [
    "At the equilibrium position of a one-dimensional ideal mass-spring oscillator, which statement is true?",
    "Net force is zero, but the object may be moving",
    "Velocity must be zero whenever net force is zero",
    "Every individual force must separately be zero",
    "The force balance fixes acceleration, not instantaneous velocity. An oscillating mass normally passes through equilibrium with nonzero speed."
   ],
   [
    "At a turning point of a nonzero-amplitude ideal spring oscillator, what is true?",
    "Velocity is zero while restoring acceleration is nonzero",
    "Both velocity and acceleration must be zero",
    "Acceleration points farther away from equilibrium",
    "The mass momentarily stops before reversing, while the restoring force points back toward equilibrium. Zero speed at one instant does not imply zero acceleration."
   ],
   [
    "Is all periodic motion simple harmonic?",
    "No, SHM is the special case with a linear restoring net influence",
    "Yes, any repeated motion must have a sinusoidal position graph",
    "Yes, a constant-speed back-and-forth motion always obeys F=-kx",
    "A periodic trajectory can have other time profiles and force laws. The proportional restoring relation distinguishes simple harmonic motion."
   ],
   [
    "For F=-kx and x<0 with k>0, which way does the force point?",
    "In the positive x direction",
    "In the negative x direction",
    "It must be zero because x is negative",
    "A negative displacement produces a positive restoring force. The force points toward x=0 rather than away from it."
   ],
   [
    "What is oscillation amplitude?",
    "The maximum magnitude of displacement from equilibrium",
    "The total distance traveled in one full cycle",
    "The signed velocity at equilibrium",
    "Amplitude is a nonnegative displacement measure. A full back-and-forth path is4A, and velocity has different units."
   ],
   [
    "For a vertical ideal spring holding a mass, where is the oscillation equilibrium?",
    "Where the upward spring force balances the weight",
    "Always at the spring's unstretched length",
    "Where the mass's weight vanishes",
    "Gravity shifts the equilibrium extension. Oscillation displacement is measured from this balanced position, not automatically from the natural length."
   ],
   [
    "For a vertical ideal massless spring in uniform gravity, how does constant gravity affect small undamped oscillations around equilibrium?",
    "It shifts equilibrium while the net force in displacement from equilibrium remains -kx",
    "It removes the spring's restoring force at every position",
    "It makes the force point downward on both sides of equilibrium",
    "Subtracting the static force balance leaves the same linear restoring relation. Gravity need not be ignored; its constant term is absorbed by the equilibrium shift."
   ],
   [
    "Why is a simple pendulum approximately harmonic only for small angular displacements?",
    "Its restoring torque uses sinθ, which is approximately θ in radians at small angles",
    "Gravity ceases to act at larger angles",
    "The pendulum mass becomes negative at large angles",
    "The linear approximation to the sine makes torque proportional to angular displacement. At larger angles the exact restoring relation is nonlinear."
   ],
   [
    "What idealizations belong to a simple pendulum model?",
    "A point-like bob on a fixed-length, negligible-mass support with negligible resistance",
    "A massive flexible spring of arbitrary changing length",
    "An arbitrary extended object with no need to consider its mass distribution",
    "The simple-pendulum inertia and geometry rely on the stated point-mass and fixed-length assumptions. Extended or deforming systems require other models."
   ],
   [
    "What would a graph of net force versus equilibrium displacement look like for F=-kx?",
    "A straight line through zero with negative slope",
    "A horizontal line at a nonzero force",
    "A straight line through zero with positive slope",
    "The slope is -k, expressing a force toward equilibrium. A positive slope would push a displaced object farther away and would not be restoring."
   ],
   [
    "A measured force points toward equilibrium but has magnitude proportional to x cubed. Is the motion necessarily SHM?",
    "No, that restoring relation is nonlinear",
    "Yes, any restoring force gives exact SHM",
    "Yes, cubing displacement is identical to using displacement",
    "Restoring direction supports oscillation, but proportionality to the first power is needed for the ideal harmonic model. Amplitude can matter for a nonlinear oscillator."
   ],
   [
    "A real spring oscillation steadily loses amplitude. What does that suggest about an undamped SHM model?",
    "Energy losses or other effects must be included to explain the decay",
    "The undamped model predicts this loss automatically",
    "The equilibrium force must be infinite",
    "Ideal undamped motion keeps a fixed amplitude. Observed decay indicates that the energy account needs effects such as resistance, rather than claiming the ideal model includes them."
   ],
   [
    "An ideal horizontal spring supplies net force F=-kx with k=40N/m. At displacement x=0.2m from equilibrium, what is signed force in newtons?",
    "-8",
    "8",
    "-40",
    "The force is proportional to displacement and has the opposite sign. The stiffness by itself is not a force; its length factor must be included."
   ],
   [
    "An ideal horizontal spring supplies net force F=-kx with k=30N/m. At displacement x=-0.3m from equilibrium, what is signed force in newtons?",
    "9",
    "-9",
    "-30",
    "The force is proportional to displacement and has the opposite sign. The stiffness by itself is not a force; its length factor must be included."
   ],
   [
    "An ideal horizontal spring supplies net force F=-kx with k=80N/m. At displacement x=0.05m from equilibrium, what is signed force in newtons?",
    "-4",
    "4",
    "-80",
    "The force is proportional to displacement and has the opposite sign. The stiffness by itself is not a force; its length factor must be included."
   ],
   [
    "A mass 2kg on an ideal horizontal spring of stiffness 50N/m is at x=0.2m from equilibrium. What is signed acceleration in m/s²?",
    "-5",
    "5",
    "-10",
    "Find the restoring force and require F=ma. The force value alone is not acceleration, and the acceleration points toward equilibrium."
   ],
   [
    "A mass 3kg on an ideal horizontal spring of stiffness 24N/m is at x=-0.5m from equilibrium. What is signed acceleration in m/s²?",
    "4",
    "-4",
    "12",
    "Find the restoring force and require F=ma. The force value alone is not acceleration, and the acceleration points toward equilibrium."
   ],
   [
    "A mass 5kg on an ideal horizontal spring of stiffness 100N/m is at x=0.1m from equilibrium. What is signed acceleration in m/s²?",
    "-2",
    "2",
    "-10",
    "Find the restoring force and require F=ma. The force value alone is not acceleration, and the acceleration points toward equilibrium."
   ],
   [
    "A net-force graph is a straight line through(x=-0.2m,F=+8N) and(x=+0.2m,F=-8N). What positive effective stiffness does it indicate in N/m?",
    "40",
    "-40",
    "80",
    "The force change-16N over displacement change0.4m gives slope-40N/m. Stiffness is the positive magnitude of that negative slope."
   ],
   [
    "A 2kg mass hangs at rest from an ideal massless vertical spring with k=100N/m. Use g=10m/s². What is equilibrium extension in meters?",
    "0.2",
    "20",
    "5",
    "An extension0.2m gives upward spring force20N, balancing the weight20N. Force divided by stiffness has units of length."
   ],
   [
    "An ideal vertical spring has equilibrium extension 0.15m. The attached mass is 0.05m below that equilibrium. What is total extension from natural length in meters?",
    "0.20",
    "0.05",
    "0.10",
    "The equilibrium extension and the extra downward displacement add. Displacement from equilibrium is not the same quantity as total spring extension."
   ],
   [
    "An ideal oscillator's rightmost and leftmost coordinates are +0.7m and -0.1m. What is its equilibrium coordinate in meters?",
    "0.3",
    "0.4",
    "0.6",
    "For symmetric harmonic motion, equilibrium is the midpoint of the two extreme coordinates. The amplitude is their half-separation 0.4m, a different quantity."
   ],
   [
    "An ideal oscillator's extreme coordinates are +0.7m and -0.1m. What is amplitude in meters?",
    "0.4",
    "0.8",
    "0.3",
    "The distance between extremes is 0.8m, so the distance from the midpoint to either extreme is 0.4m. Equilibrium coordinate 0.3m is not amplitude."
   ],
   [
    "A simple pendulum has bob mass 2kg and length 0.5m. Use g=10m/s² and sinθ=0.1 at a positive angular displacement. What is signed gravitational restoring torque in N·m?",
    "-1",
    "1",
    "-10",
    "The restoring moment is -mgL sinθ=-1N·m. The negative sign directs the tendency back toward zero angular displacement."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "A linear restoring force changes direction",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      120,
      198
     ],
     "P1": [
      120,
      162
     ],
     "P2": [
      300,
      202
     ],
     "P3": [
      300,
      158
     ],
     "P4": [
      120,
      180
     ],
     "P5": [
      135,
      174
     ],
     "P6": [
      135,
      174
     ],
     "P7": [
      157.9,
      186
     ],
     "P8": [
      157.9,
      186
     ],
     "P9": [
      180.8,
      174
     ],
     "P10": [
      180.8,
      174
     ],
     "P11": [
      203.7,
      186
     ],
     "P12": [
      203.7,
      186
     ],
     "P13": [
      226.6,
      174
     ],
     "P14": [
      226.6,
      174
     ],
     "P15": [
      249.5,
      186
     ],
     "P16": [
      249.5,
      186
     ],
     "P17": [
      272.4,
      174
     ],
     "P18": [
      272.4,
      174
     ],
     "P19": [
      295.3,
      186
     ],
     "P20": [
      295.3,
      186
     ],
     "P21": [
      318.2,
      174
     ],
     "P22": [
      318.2,
      174
     ],
     "P23": [
      341.1,
      186
     ],
     "P24": [
      341.1,
      180
     ],
     "P25": [
      364,
      180
     ],
     "P26": [
      364,
      192
     ],
     "P27": [
      396,
      192
     ],
     "P28": [
      396,
      168
     ],
     "P29": [
      364,
      168
     ],
     "P30": [
      380,
      180
     ],
     "P31": [
      320,
      180
     ],
     "P32": [
      120,
      138
     ],
     "P33": [
      120,
      102
     ],
     "P34": [
      300,
      142
     ],
     "P35": [
      300,
      98
     ],
     "P36": [
      120,
      120
     ],
     "P37": [
      135,
      114
     ],
     "P38": [
      135,
      114
     ],
     "P39": [
      149.9,
      126
     ],
     "P40": [
      149.9,
      126
     ],
     "P41": [
      164.8,
      114
     ],
     "P42": [
      164.8,
      114
     ],
     "P43": [
      179.7,
      126
     ],
     "P44": [
      179.7,
      126
     ],
     "P45": [
      194.6,
      114
     ],
     "P46": [
      194.6,
      114
     ],
     "P47": [
      209.5,
      126
     ],
     "P48": [
      209.5,
      126
     ],
     "P49": [
      224.4,
      114
     ],
     "P50": [
      224.4,
      114
     ],
     "P51": [
      239.3,
      126
     ],
     "P52": [
      239.3,
      126
     ],
     "P53": [
      254.2,
      114
     ],
     "P54": [
      254.2,
      114
     ],
     "P55": [
      269.1,
      126
     ],
     "P56": [
      269.1,
      120
     ],
     "P57": [
      284,
      120
     ],
     "P58": [
      284,
      132
     ],
     "P59": [
      316,
      132
     ],
     "P60": [
      316,
      108
     ],
     "P61": [
      284,
      108
     ],
     "P62": [
      120,
      78
     ],
     "P63": [
      120,
      42
     ],
     "P64": [
      300,
      82
     ],
     "P65": [
      300,
      38
     ],
     "P66": [
      120,
      60
     ],
     "P67": [
      135,
      54
     ],
     "P68": [
      135,
      54
     ],
     "P69": [
      141.9,
      66
     ],
     "P70": [
      141.9,
      66
     ],
     "P71": [
      148.8,
      54
     ],
     "P72": [
      148.8,
      54
     ],
     "P73": [
      155.7,
      66
     ],
     "P74": [
      155.7,
      66
     ],
     "P75": [
      162.6,
      54
     ],
     "P76": [
      162.6,
      54
     ],
     "P77": [
      169.5,
      66
     ],
     "P78": [
      169.5,
      66
     ],
     "P79": [
      176.4,
      54
     ],
     "P80": [
      176.4,
      54
     ],
     "P81": [
      183.3,
      66
     ],
     "P82": [
      183.3,
      66
     ],
     "P83": [
      190.2,
      54
     ],
     "P84": [
      190.2,
      54
     ],
     "P85": [
      197.1,
      66
     ],
     "P86": [
      197.1,
      60
     ],
     "P87": [
      204,
      60
     ],
     "P88": [
      204,
      72
     ],
     "P89": [
      236,
      72
     ],
     "P90": [
      236,
      48
     ],
     "P91": [
      204,
      48
     ],
     "P92": [
      220,
      60
     ],
     "P93": [
      280,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93",
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
      "v": "P2P3",
      "col": 2,
      "arrows": 0,
      "dash": true,
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
      "v": "P30P31",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P32P33",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P34P35",
      "col": 2,
      "arrows": 0,
      "dash": true,
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
      "v": "P62P63",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P64P65",
      "col": 2,
      "arrows": 0,
      "dash": true,
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
      "v": "P92P93",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [
     {
      "v": "P26P27P28P29",
      "col": 0
     },
     {
      "v": "P58P59P60P61",
      "col": 0
     },
     {
      "v": "P88P89P90P91",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       485,
       176
      ],
      "text": "x = +0.2m; F = -8N",
      "col": 1
     },
     {
      "at": [
       485,
       116
      ],
      "text": "x = 0; F = 0",
      "col": 2
     },
     {
      "at": [
       485,
       56
      ],
      "text": "x = -0.2m; F = +8N",
      "col": 1
     },
     {
      "at": [
       290,
       214
      ],
      "text": "Force points toward equilibrium",
      "col": 0
     }
    ],
    "circles": []
   },
   null,
   {
    "t": "setups",
    "title": "Vertical spring: m = 2kg, k = 100N/m, g = 10m/s²",
    "head": "Position",
    "cols": [
     "Extension(m)",
     "Net downward F(N)"
    ],
    "rows": [
     [
      "Equilibrium",
      "0.2",
      "0"
     ],
     [
      "0.1m below equilibrium",
      "0.3",
      "-10"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "A pendulum needs a small-angle approximation",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      280,
      195
     ],
     "P1": [
      280,
      75
     ],
     "P2": [
      280,
      195
     ],
     "P3": [
      303.84031969540735,
      77.39201065905101
     ],
     "P4": [
      280,
      195
     ],
     "P5": [
      303.84031969540735,
      77.39201065905101
     ],
     "P6": [
      280,
      140
     ],
     "P7": [
      280.91662422898446,
      140.0076387120644
     ],
     "P8": [
      280.91662422898446,
      140.0076387120644
     ],
     "P9": [
      281.83299384602145,
      140.03055272644224
     ],
     "P10": [
      281.83299384602145,
      140.03055272644224
     ],
     "P11": [
      282.7488543098873,
      140.06873567827685
     ],
     "P12": [
      282.7488543098873,
      140.06873567827685
     ],
     "P13": [
      283.6639512207866,
      140.12217696143827
     ],
     "P14": [
      283.6639512207866,
      140.12217696143827
     ],
     "P15": [
      284.5780303910171,
      140.19086173146923
     ],
     "P16": [
      284.5780303910171,
      140.19086173146923
     ],
     "P17": [
      285.4908379155755,
      140.2747709097086
     ],
     "P18": [
      285.4908379155755,
      140.2747709097086
     ],
     "P19": [
      286.40212024268567,
      140.37388118859081
     ],
     "P20": [
      286.40212024268567,
      140.37388118859081
     ],
     "P21": [
      287.3116242442273,
      140.48816503812014
     ],
     "P22": [
      287.3116242442273,
      140.48816503812014
     ],
     "P23": [
      288.21909728604794,
      140.61759071351767
     ],
     "P24": [
      288.21909728604794,
      140.61759071351767
     ],
     "P25": [
      289.1242872981378,
      140.76212226403914
     ],
     "P26": [
      289.1242872981378,
      140.76212226403914
     ],
     "P27": [
      290.02694284464724,
      140.9217195429609
     ],
     "P28": [
      290.02694284464724,
      140.9217195429609
     ],
     "P29": [
      290.9268131937284,
      141.09633821873172
     ],
     "P30": [
      303.84031969540735,
      77.39201065905101
     ],
     "P31": [
      245.03632502493286,
      65.47185081134734
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P6P7",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P8P9",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
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
     },
     {
      "v": "P16P17",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P18P19",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P20P21",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P22P23",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P24P25",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P26P27",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P28P29",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P30P31",
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
       405,
       131
      ],
      "text": "Length L",
      "col": 0
     },
     {
      "at": [
       209,
       114
      ],
      "text": "Small θ",
      "col": 2
     },
     {
      "at": [
       443,
       60
      ],
      "text": "Restoring tangent direction",
      "col": 1
     },
     {
      "at": [
       320,
       214
      ],
      "text": "Gravity supplies restoring torque",
      "col": 0
     },
     {
      "at": [
       325,
       29
      ],
      "text": "Schematic force direction; not to force scale",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 4,
      "col": 3
     },
     {
      "c": "P5",
      "r": 9,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Test the restoring-force model",
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
      74
     ],
     "P11": [
      120,
      74
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
      178
     ],
     "P15": [
      120,
      178
     ],
     "P16": [
      120,
      178
     ],
     "P17": [
      510,
      74
     ],
     "P18": [
      120,
      126
     ],
     "P19": [
      510,
      126
     ],
     "P20": [
      120,
      178
     ],
     "P21": [
      510,
      74
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
       27
      ],
      "text": "Displacement x (m)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Net force F (N)",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "-0.2",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "0.2",
      "col": 0
     },
     {
      "at": [
       97,
       69
      ],
      "text": "-8",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       97,
       173
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       418,
       213
      ],
      "text": "Slope -40N/m; k = 40N/m",
      "col": 0
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
   }
  ],
  "qpics": {
   "20": {
    "t": "setups",
    "title": "Linear net-force data",
    "head": "Displacement(m)",
    "cols": [
     "Force(N)"
    ],
    "rows": [
     [
      "-0.2",
      "+8"
     ],
     [
      "+0.2",
      "-8"
     ]
    ]
   },
   "23": {
    "t": "setups",
    "title": "Oscillator extreme coordinates",
    "head": "Extreme",
    "cols": [
     "Coordinate(m)"
    ],
    "rows": [
     [
      "Left",
      "-0.1"
     ],
     [
      "Right",
      "+0.7"
     ]
    ]
   },
   "24": {
    "t": "setups",
    "title": "Oscillator extreme coordinates",
    "head": "Extreme",
    "cols": [
     "Coordinate(m)"
    ],
    "rows": [
     [
      "Left",
      "-0.1"
     ],
     [
      "Right",
      "+0.7"
     ]
    ]
   }
  }
 },
 {
  "code": "7.2",
  "name": "Frequency and Period of SHM",
  "skill": "s2",
  "boardTitle": "Frequency and period",
  "teach": [
   "One period T is the time to return to the same position and motion direction. Frequency f is complete cycles per second, with unit hertz, and f=1/T. Twelve full cycles in 6s mean f=2Hz and T=0.5s. Adjacent equilibrium crossings are only half a cycle apart because the directions differ. A return to one position alone is not sufficient to identify a full period.",
   "Angular frequency Ω=2πf=2π/T measures oscillation phase in radians per second. It is not the bob physically spinning around a fixed center. For an ideal mass m on a massless spring of effective stiffness k, Ω=√(k/m) and T=2π√(m/k). If m=1kg and k=4N/m, Ω=2rad/s and T=πs. Check that stiffness divided by mass has units 1/s² before taking the square root.",
   "For an ideal linear spring oscillator, mass and stiffness set the period while amplitude and initial phase do not. Quadrupling mass doubles T; quadrupling stiffness halves T. Uniform gravity shifts a vertical spring’s equilibrium but leaves the same period about that equilibrium if the spring stays ideal and linear. Real spring mass, resistance or nonlinear force can require corrections, so specify the assumptions before treating the formula as exact.",
   "For a simple pendulum at small angles, Ω≈√(g/L) and T≈2π√(L/g). Length runs from the pivot to the point-like bob’s center, not just to the top of a real bob. The bob mass cancels, while quadrupling length doubles period and quadrupling gravity halves it. For L=1m and g=4m/s², the small-angle period isπs. Larger angles produce amplitude dependence that this approximation omits.",
   "To estimate a period, time a stated number of complete cycles using the same crossing direction at the endpoints. Timing 15 cycles in 30s gives an average period 2s; repeated trials reveal scatter. A small-angle pendulum experiment can plot T² versus L, with ideal slope 4π²/g. If the slope is 4s²/m and π²≈10 is supplied, estimated g≈10m/s². Repeated timing reduces relative reaction-time error but does not remove calibration bias, incorrect length or a large-angle model error."
  ],
  "eqs": [
   "f=12/6=2Hz; T=6/12=0.5s",
   "Ω=√(k/m)=√4=2rad/s; T=2π/Ω=πs",
   "Mass×4 ⇒ T×2; stiffness×4 ⇒ T×½",
   "Pendulum T≈2π√(L/g); L = 1, g = 4 ⇒ T ≈ πs",
   "T²=(4π²/g)L; slope 4, π²≈10 ⇒ g≈10"
  ],
  "boards": [
   [
    "Period: seconds per complete cycle",
    "Frequency: complete cycles per second",
    "Return with the same motion direction"
   ],
   [
    "Ω measures phase rate in radians per second",
    "Spring Ω = √(k/m)",
    "Spring T = 2π√(m/k)"
   ],
   [
    "Larger mass slows ideal spring oscillation",
    "Larger stiffness speeds it up",
    "Amplitude does not set the ideal linear period"
   ],
   [
    "Pendulum: use length and local gravity",
    "Bob mass cancels in the simple model",
    "Small-angle approximation has limits"
   ],
   [
    "Time several complete cycles and repeat",
    "Plot period squared against pendulum length",
    "Slope and uncertainty inform the estimate"
   ]
  ],
  "questions": [
   [
    "What is an oscillation period?",
    "Time for one full cycle returning to the same motion state",
    "Number of cycles per second",
    "Time between every two adjacent equilibrium crossings",
    "A complete cycle returns to both the same position and motion direction. Adjacent crossings of equilibrium occur half a period apart."
   ],
   [
    "What is oscillation frequency measured in hertz?",
    "The number of complete cycles per second",
    "Seconds required for each cycle",
    "Maximum displacement in meters",
    "Frequency counts cycles per time and is the reciprocal of the period. It does not measure displacement or a time per cycle."
   ],
   [
    "What relation connects angular frequency Ω with ordinary frequency f?",
    "Ω=2πf",
    "Ω=f/2π",
    "Ω=f²",
    "Each cycle advances phase by2πradians. Angular frequency measures that phase advance per second, while ordinary frequency counts cycles per second."
   ],
   [
    "For a mass on an ideal massless spring, which parameters determine the undamped period?",
    "The attached mass and effective spring stiffness",
    "Only the oscillation amplitude",
    "Only the initial phase",
    "The period is2π√(m/k) for this model. Amplitude and starting phase do not change the ideal linear oscillator's period."
   ],
   [
    "If attached mass is quadrupled at fixed ideal spring stiffness, how does period change?",
    "It doubles",
    "It quadruples",
    "It halves",
    "Period scales with the square root of mass. A fourfold mass gives a factor2, not a linear factor4."
   ],
   [
    "If spring stiffness is quadrupled at fixed attached mass, how does period change?",
    "It halves",
    "It doubles",
    "It stays the same",
    "Period scales inversely with the square root of stiffness. A stiffer restoring influence makes the same mass oscillate faster."
   ],
   [
    "For a small-angle simple pendulum, which parameters determine the approximate period?",
    "Pendulum length and local gravitational acceleration",
    "Bob mass alone",
    "The bob's color and diameter regardless of model",
    "In the simple-pendulum approximation, period is2π√(L/g). The bob mass cancels when inertia and restoring torque are combined."
   ],
   [
    "At the same length and local gravity, how does doubling a simple pendulum's bob mass change its small-angle period?",
    "It does not change the ideal period",
    "It doubles the ideal period",
    "It halves the ideal period",
    "Both the gravitational restoring torque and inertia scale with bob mass. Their ratio, and therefore the ideal small-angle period, is unchanged."
   ],
   [
    "If simple-pendulum length is quadrupled at the same gravity, how does its small-angle period change?",
    "It doubles",
    "It quadruples",
    "It halves",
    "The period scales with the square root of length. The longer pendulum takes twice as long under the stated small-angle assumptions."
   ],
   [
    "If local gravity is quadrupled at fixed pendulum length, how does small-angle period change?",
    "It halves",
    "It doubles",
    "It is independent of gravity",
    "The restoring influence is stronger, and the period's inverse-square-root dependence on gravity gives a factor one-half."
   ],
   [
    "Why time many complete oscillations and divide by the cycle count in a lab?",
    "It can reduce the relative contribution of reaction-time error",
    "It automatically eliminates all bias and model error",
    "It changes the physical period to a larger value",
    "A similar start-stop timing uncertainty becomes a smaller fraction of a longer total interval. Calibration, counting and systematic errors still need attention."
   ],
   [
    "For small-angle pendulums at one location, what graph should ideally be linear through zero?",
    "Period squared versus length",
    "Period versus length squared",
    "Bob mass versus period with a required nonzero slope",
    "Squaring the period relation gives T²=(4π²/g)L. Its slope connects the measured periods and lengths to local gravity."
   ],
   [
    "Does doubling amplitude change the period of an ideal linear mass-spring oscillator?",
    "No, while the same ideal linear model remains valid",
    "Yes, it necessarily doubles the period",
    "Yes, it necessarily halves the period",
    "The stronger restoring force at larger displacement accompanies a greater distance to travel, preserving the ideal period. Nonlinear springs can behave differently."
   ],
   [
    "Why must a pendulum period measurement state that the release angle is small?",
    "The standard period formula is an approximation that neglects amplitude dependence at larger angles",
    "A pendulum never moves at large angles",
    "The length ceases to exist at large angles",
    "The sine restoring term is only approximately linear at small angles. A large-angle period can differ even if mass, length and gravity are unchanged."
   ],
   [
    "An oscillator completes 12 full cycles in 6s. What is frequency in hertz?",
    "2",
    "0.5",
    "72",
    "Frequency is cycles per elapsed second. Twelve cycles spread over 6seconds means 2Hz;0.5seconds is the period instead."
   ],
   [
    "An oscillator completes 15 full cycles in 30s. What is its period in seconds?",
    "2",
    "0.5",
    "450",
    "Each of the 15cycles takes an average 30/15=2seconds. The reciprocal 0.5 is the frequency in hertz."
   ],
   [
    "An ideal oscillator has period 0.25s. What is frequency in hertz?",
    "4",
    "0.25",
    "0.0625",
    "Four complete intervals of 0.25seconds fit into one second. Frequency is reciprocal period, not the same value or its square."
   ],
   [
    "An ideal oscillator has frequency 5Hz. What is period in seconds?",
    "0.2",
    "5",
    "25",
    "Five equal cycles fit into each second, so one takes 0.2seconds. The units distinguish frequency from period."
   ],
   [
    "An ideal mass-spring oscillator has m=1kg and k=4N/m. What is its period?",
    "π seconds",
    "2π seconds",
    "π/2 seconds",
    "The angular frequency is√(4/1)=2rad/s. Advancing one full2πradians of phase takesπseconds."
   ],
   [
    "An ideal mass-spring oscillator has m=4kg and k=16N/m. What is its angular frequency in rad/s?",
    "2",
    "4",
    "0.5",
    "The squared angular frequency is k/m=4s⁻². Taking its positive square root gives2rad/s, not the squared value4."
   ],
   [
    "An ideal mass-spring oscillator initially has period 3s. Its mass becomes 9 times as large with stiffness unchanged. What is the new period in seconds?",
    "9",
    "27",
    "1",
    "The mass factor 9 gives period factor 3. Multiplying the starting 3seconds by 3 produces 9seconds."
   ],
   [
    "An ideal mass-spring oscillator initially has period 4s. Its stiffness becomes 16 times as large at fixed mass. What is the new period in seconds?",
    "1",
    "16",
    "0.25",
    "The square root of the stiffness factor is 4, so the period is divided by 4. The new period is 1second."
   ],
   [
    "A small-angle simple pendulum has length 1m and g=4m/s². What is its approximate period?",
    "π seconds",
    "2π seconds",
    "π/2 seconds",
    "Its angular frequency is√(g/L)=2rad/s. A full phase cycle of 2πradians takesπseconds under the small-angle approximation."
   ],
   [
    "A small-angle pendulum initially has period 2s. Its length becomes 9 times as large at fixed gravity. What is the approximate new period in seconds?",
    "6",
    "18",
    "2/3",
    "The square-root length factor is 3, so the new period is 3 times 2seconds, or 6seconds."
   ],
   [
    "A small-angle pendulum initially has period 3s. Local gravity becomes 9 times as large at fixed length. What is the approximate new period in seconds?",
    "1",
    "9",
    "27",
    "The period is inversely proportional to the square root of gravity. Dividing 3seconds by 3 gives 1second."
   ],
   [
    "A pendulum experiment finds T²/L=4s²/m, within the small-angle model. Using π²≈10, what estimated g follows in m/s²?",
    "10",
    "40",
    "2.5",
    "The ratio equals4π²/g. With4π²≈40, a ratio4 requires g≈10m/s²; the estimate inherits the model and measurement uncertainty."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Count full cycles with repeated direction",
    "head": "Quantity",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Cycles / elapsed time",
      "12 / 6s"
     ],
     [
      "Frequency",
      "2Hz"
     ],
     [
      "Period",
      "0.5s"
     ]
    ]
   },
   null,
   {
    "t": "setups",
    "title": "Ideal spring: change one parameter",
    "head": "Change",
    "cols": [
     "Period factor"
    ],
    "rows": [
     [
      "Mass×4, stiffness fixed",
      "2"
     ],
     [
      "Stiffness×4, mass fixed",
      "1/2"
     ],
     [
      "Amplitude×2, same linear model",
      "1"
     ]
    ]
   },
   null,
   {
    "t": "figure",
    "title": "Linearize the pendulum-period data",
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
      380,
      61
     ],
     "P9": [
      380,
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
      104.33333333333331
     ],
     "P15": [
      120,
      104.33333333333331
     ],
     "P16": [
      115,
      147.66666666666666
     ],
     "P17": [
      120,
      147.66666666666666
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
      510,
      191
     ],
     "P22": [
      250,
      104.33333333333331
     ],
     "P23": [
      380,
      147.66666666666666
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23",
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
      "text": "Pendulum length L (m)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Period squared T² (s²)",
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
      "text": "0.5",
      "col": 0
     },
     {
      "at": [
       380,
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
      "text": "1.5",
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
      "text": "2",
      "col": 0
     },
     {
      "at": [
       97,
       142.66666666666666
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       419,
       212
      ],
      "text": "Slope 4s²/m",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P22",
      "r": 4,
      "col": 0
     },
     {
      "c": "P23",
      "r": 4,
      "col": 0
     }
    ]
   }
  ],
  "qpics": {
   "14": {
    "t": "setups",
    "title": "Complete cycles counted",
    "head": "Cycles",
    "cols": [
     "Elapsed(s)"
    ],
    "rows": [
     [
      "12",
      "6"
     ]
    ]
   },
   "15": {
    "t": "setups",
    "title": "Complete cycles counted",
    "head": "Cycles",
    "cols": [
     "Elapsed(s)"
    ],
    "rows": [
     [
      "15",
      "30"
     ]
    ]
   },
   "25": {
    "t": "setups",
    "title": "Small-angle pendulum measurement",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "T²/L",
      "4s²/m"
     ],
     [
      "Use for estimate",
      "π²≈10"
     ]
    ]
   }
  }
 },
 {
  "code": "7.3",
  "name": "Representing and Analyzing SHM",
  "skill": "s3",
  "boardTitle": "Representing SHM",
  "teach": [
   "A sinusoidal displacement can represent SHM. With phase chosen to start at the positive turning point, x=A cos(Ωt); starting at equilibrium moving in the positive direction can use x=A sin(Ωt). More generally an initial phase shifts the cycle along the time axis. The coefficient A is amplitude and Ω=2π/T, with phase angles in radians. For x=0.4cos(πt)m, A=0.4m and T=2s.",
   "Follow a cosine oscillator through quarter cycles. At t=0 it is at +A and at rest; at T/4 it crosses equilibrium moving negatively; at T/2 it rests at -A; at 3T/4 it crosses equilibrium moving positively; at T it returns to the original state. For x=0.4cos(πt), positions at 0, 0.5, 1, 1.5, 2 seconds are +0.4, 0, -0.4, 0, +0.4m. The same position can occur with opposite velocities, so graph position alone is not a full motion state.",
   "Graph slopes connect motion quantities. The displacement-time slope is velocity, and the velocity-time slope is acceleration. For the cosine phase choice, v=-AΩ sin(Ωt) and a=-AΩ² cos(Ωt)=-Ω²x. These formulas summarize the same restoring dynamics; calculating derivatives is not required here. Position and acceleration have opposite signs, while velocity reaches its greatest magnitude at the position zeros. Label each vertical axis and its units instead of identifying curves only by their shapes.",
   "The maximum speed is AΩ and maximum acceleration magnitude is AΩ². With A=0.3m and Ω=4rad/s, maximum speed is 1.2m/s and maximum acceleration 4.8m/s². At positive displacement, acceleration points negative whether the mass is moving toward or away from equilibrium: moving inward it speeds up, moving outward it slows. Doubling amplitude with Ω fixed doubles both maxima but leaves the period unchanged.",
   "Read amplitude as distance from the equilibrium line to a peak, and period between successive peaks with the same sign or repeated crossings in the same direction. Positive peaks at 1s and 4s give T=3s; two neighboring zero crossings would instead be half a period apart. A full-cycle path length is 4A although net displacement is zero. A=0.25m therefore gives path length 1m. Check time resolution and measurement uncertainty before inferring a period or a phase shift from a few samples."
  ],
  "eqs": [
   "x=0.4cos(πt)m: A = 0.4m, Ω = πrad/s, T = 2s",
   "At 0, T/4, T/2, 3T/4, T: x = A, 0, −A, 0, A",
   "v=−AΩ sin(Ωt); a=−Ω²x",
   "vmax=AΩ=1.2m/s; amax=AΩ²=4.8m/s²",
   "T=4−1=3s; distance per cycle=4A=1m"
  ],
  "boards": [
   [
    "Amplitude sets displacement scale",
    "Angular frequency sets the period",
    "Initial phase sets the starting motion state"
   ],
   [
    "Follow the same state through one cycle",
    "Quarter-cycle crossings have opposite directions",
    "A repeated position alone is not a repeated state"
   ],
   [
    "Position slope gives signed velocity",
    "Velocity slope gives signed acceleration",
    "Acceleration = −Ω² × displacement"
   ],
   [
    "Maximum speed = AΩ",
    "Maximum acceleration magnitude = AΩ²",
    "Acceleration follows position, not velocity sign"
   ],
   [
    "Use equivalent peaks or crossing directions",
    "Amplitude is half the extreme-to-extreme range",
    "Distance over a cycle differs from displacement"
   ]
  ],
  "questions": [
   [
    "For x=A cos(Ωt) with A>0, where is the oscillator at t=0?",
    "At x=+A with zero velocity",
    "At equilibrium moving toward positive x",
    "At x=-A with maximum speed",
    "Cosine starts at its positive maximum, so the mass starts at a turning point. A sine function would describe a different phase choice."
   ],
   [
    "For x=A sin(Ωt) with A>0 and Ω>0, what is the initial motion at t=0?",
    "At equilibrium moving toward positive x",
    "At x=+A at rest",
    "At equilibrium moving toward negative x",
    "The sine function starts at zero with positive slope. Position and its slope together specify the initial motion state."
   ],
   [
    "What does the local slope of a displacement-time graph give?",
    "Signed velocity",
    "Acceleration magnitude directly",
    "Spring stiffness without any mass information",
    "A graph's local change of position per time is velocity. A flat tangent at a position extremum means instantaneous velocity zero."
   ],
   [
    "What does the local slope of a velocity-time graph give?",
    "Signed acceleration",
    "Displacement itself",
    "Oscillation amplitude directly",
    "The local change of velocity per time is acceleration. It is not the same as the vertical velocity value or the position amplitude."
   ],
   [
    "For nonzero-amplitude ideal SHM, where is speed largest?",
    "At equilibrium",
    "At both turning points",
    "Only at maximum positive displacement",
    "The mass passes fastest through the minimum-potential position. At the endpoints its speed is zero before it reverses."
   ],
   [
    "For ideal SHM, where is acceleration magnitude largest?",
    "At the displacement extremes",
    "At equilibrium",
    "At every point equally",
    "The magnitude of a=-(k/m)x increases with distance from equilibrium. It is zero at equilibrium and greatest at the endpoints."
   ],
   [
    "For x=A cos(Ωt), how are acceleration and displacement related?",
    "They always have opposite signs when nonzero",
    "They always have the same sign",
    "Acceleration is zero whenever displacement is nonzero",
    "The restoring acceleration is -Ω²x, opposite to the displacement. Their zeros coincide, while velocity is phase-shifted."
   ],
   [
    "A mass is to the right of equilibrium and moving left toward it in ideal SHM. How does its speed change before reaching equilibrium?",
    "It increases because velocity and acceleration are both leftward",
    "It decreases because displacement is positive",
    "It stays constant because the force is restoring",
    "At positive displacement the restoring acceleration points left. Sharing the velocity direction increases speed until the equilibrium crossing."
   ],
   [
    "A mass is to the left of equilibrium and moving farther left in ideal SHM. How does its speed change before its next turning point?",
    "It decreases because acceleration points right",
    "It increases because position and velocity are both negative",
    "It cannot be moving left at negative displacement",
    "The restoring acceleration opposes the current velocity on this part of the cycle. The mass slows to rest and then reverses."
   ],
   [
    "Starting from the rightmost turning point, how long does it take to first reach equilibrium in ideal SHM?",
    "One-quarter period",
    "One-half period",
    "One whole period",
    "The sequence is right extreme, center, left extreme, center, right extreme at equal quarter-cycle intervals. The first center crossing is at T/4."
   ],
   [
    "Starting from one turning point, how long does it take to reach the opposite turning point in ideal SHM?",
    "One-half period",
    "One-quarter period",
    "Two whole periods",
    "Traveling from one extreme to the other is half the complete repeated motion. The intervening equilibrium crossing occurs halfway through that interval."
   ],
   [
    "What is the phase difference in time between a displacement maximum and the next speed maximum in ideal SHM?",
    "One-quarter period",
    "Zero",
    "One full period",
    "Displacement maximum occurs at rest at an endpoint; the next speed maximum is at the following center crossing. These are separated by T/4."
   ],
   [
    "Doubling amplitude with Ω fixed changes maximum speed and acceleration magnitude how?",
    "Both double",
    "Speed doubles but acceleration must stay fixed",
    "Both quadruple",
    "Their maxima are AΩ and AΩ², each linear in amplitude at fixed Ω. The squared-amplitude scaling belongs to energy."
   ],
   [
    "Why can two ideal oscillators with equal amplitude and period have different positions at the same clock time?",
    "They may have different initial phases",
    "Equal amplitude and period force identical phase",
    "One must have a negative mass",
    "The phase specifies where in the cycle an oscillator starts. It is independent of the amplitude and period, so equal sizes and rates need not synchronize positions."
   ],
   [
    "An oscillator follows x=0.4cos(πt)m with t in seconds. What is its period in seconds?",
    "2",
    "1",
    "4",
    "The phase must increase by2π for a full cycle. At phase rateπrad/s this takes2seconds."
   ],
   [
    "An oscillator follows x=0.4cos(πt)m. What is its displacement at t=0.5s in meters?",
    "0",
    "0.4",
    "-0.4",
    "The phase isπ/2 and cosine is zero, so it is crossing equilibrium. The two extremes occur at different quarter-cycle times."
   ],
   [
    "An oscillator follows x=0.4cos(πt)m. What is its displacement at t=1s in meters?",
    "-0.4",
    "0.4",
    "0",
    "The phase isπ and cosine equals-1. The oscillator has reached the opposite turning point after half a cycle."
   ],
   [
    "An oscillator follows x=0.4cos(πt)m. What is its displacement at t=2s in meters?",
    "0.4",
    "-0.4",
    "0",
    "The phase is2π, completing one cycle and returning to the positive extreme. Returning to equilibrium would not be a full cycle from this starting state."
   ],
   [
    "An ideal oscillator has amplitude 0.3m and angular frequency 4rad/s. What is its maximum speed in m/s?",
    "1.2",
    "4.8",
    "0.075",
    "AΩ gives 0.3×4=1.2m/s. Multiplying by Ω twice instead gives maximum acceleration with different units."
   ],
   [
    "An ideal oscillator has amplitude 0.2m and angular frequency 5rad/s. What is its maximum acceleration magnitude in m/s²?",
    "5",
    "1",
    "25",
    "The restoring coefficient is Ω²=25s⁻². At displacement magnitude 0.2m the acceleration magnitude is 5m/s²."
   ],
   [
    "An ideal oscillator has angular frequency 3rad/s. At x=-0.2m, what is signed acceleration in m/s²?",
    "1.8",
    "-1.8",
    "0.6",
    "The relation a=-Ω²x gives -9×(-0.2)=+1.8. The acceleration points toward equilibrium from the negative side."
   ],
   [
    "An ideal oscillator has period 8s and starts at its positive turning point. At what first positive time does it reach equilibrium, in seconds?",
    "2",
    "4",
    "8",
    "The first center crossing follows one-quarter cycle, which is 8/4=2seconds. Half a period reaches the opposite endpoint."
   ],
   [
    "An ideal oscillator has period 8s and starts at its positive turning point. At what first time does it reach the negative turning point, in seconds?",
    "4",
    "2",
    "8",
    "The opposite extreme occurs after half of the 8-second period. One quarter reaches the center, while a full cycle returns to the initial endpoint."
   ],
   [
    "A displacement-time graph has successive positive peaks at t=1s and t=4s with no positive peak between them. What is its period in seconds?",
    "3",
    "5",
    "1.5",
    "Successive equivalent maxima differ by one period, here4-1=3seconds. Adding their clock times or halving the interval does not give the period."
   ],
   [
    "An ideal oscillator follows x=0.5sin(2πt)m. What is its displacement at t=0.25s in meters?",
    "0.5",
    "-0.5",
    "0",
    "The phase isπ/2 and sine is1, giving the positive amplitude. Its start at equilibrium is a different phase from a cosine oscillator."
   ],
   [
    "An ideal oscillator has amplitude 0.25m. What total distance does it travel in one complete cycle in meters?",
    "1",
    "0.5",
    "0",
    "It travels from one extreme to the other and back, totaling 4A=1m. The displacement over the full cycle is zero, which differs from path length."
   ]
  ],
  "check": [
   "An oscillator starts at x=+A at rest and has period 12s. At t=3s, which state does it have?",
   "At equilibrium, moving in the negative direction",
   "At equilibrium, moving in the positive direction",
   "At x=-A, at rest",
   "Three seconds is one-quarter period, so the first center crossing is toward negative x."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Start at the positive turning point",
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
      217.5,
      61
     ],
     "P7": [
      217.5,
      56
     ],
     "P8": [
      315,
      61
     ],
     "P9": [
      315,
      56
     ],
     "P10": [
      412.5,
      61
     ],
     "P11": [
      412.5,
      56
     ],
     "P12": [
      510,
      61
     ],
     "P13": [
      510,
      56
     ],
     "P14": [
      115,
      74
     ],
     "P15": [
      120,
      74
     ],
     "P16": [
      115,
      126
     ],
     "P17": [
      120,
      126
     ],
     "P18": [
      115,
      178
     ],
     "P19": [
      120,
      178
     ],
     "P20": [
      120,
      126
     ],
     "P21": [
      510,
      126
     ],
     "P22": [
      120,
      178
     ],
     "P23": [
      123.9,
      177.89738987827013
     ],
     "P24": [
      123.9,
      177.89738987827013
     ],
     "P25": [
      127.8,
      177.58996446835283
     ],
     "P26": [
      127.8,
      177.58996446835283
     ],
     "P27": [
      131.7,
      177.07893703789182
     ],
     "P28": [
      131.7,
      177.07893703789182
     ],
     "P29": [
      135.6,
      176.36632437868883
     ],
     "P30": [
      135.6,
      176.36632437868883
     ],
     "P31": [
      139.5,
      175.454938847348
     ],
     "P32": [
      139.5,
      175.454938847348
     ],
     "P33": [
      143.4,
      174.34837726618906
     ],
     "P34": [
      143.4,
      174.34837726618906
     ],
     "P35": [
      147.3,
      173.051006728233
     ],
     "P36": [
      147.3,
      173.051006728233
     ],
     "P37": [
      151.2,
      171.5679473622809
     ],
     "P38": [
      151.2,
      171.5679473622809
     ],
     "P39": [
      155.1,
      169.9050521261048
     ],
     "P40": [
      155.1,
      169.9050521261048
     ],
     "P41": [
      159,
      168.06888370749726
     ],
     "P42": [
      159,
      168.06888370749726
     ],
     "P43": [
      162.9,
      166.06668862434105
     ],
     "P44": [
      162.9,
      166.06668862434105
     ],
     "P45": [
      166.8,
      163.9063686259134
     ],
     "P46": [
      166.8,
      163.9063686259134
     ],
     "P47": [
      170.7,
      161.5964495082918
     ],
     "P48": [
      170.7,
      161.5964495082918
     ],
     "P49": [
      174.60000000000002,
      159.14604746693186
     ],
     "P50": [
      174.60000000000002,
      159.14604746693186
     ],
     "P51": [
      178.5,
      156.5648331192086
     ],
     "P52": [
      178.5,
      156.5648331192086
     ],
     "P53": [
      182.4,
      153.8629933389078
     ],
     "P54": [
      182.4,
      153.8629933389078
     ],
     "P55": [
      186.3,
      151.0511910532892
     ],
     "P56": [
      186.3,
      151.0511910532892
     ],
     "P57": [
      190.2,
      148.14052316138378
     ],
     "P58": [
      190.2,
      148.14052316138378
     ],
     "P59": [
      194.1,
      145.14247673960327
     ],
     "P60": [
      194.1,
      145.14247673960327
     ],
     "P61": [
      198,
      142.06888370749726
     ],
     "P62": [
      198,
      142.06888370749726
     ],
     "P63": [
      201.89999999999998,
      138.93187413257246
     ],
     "P64": [
      201.89999999999998,
      138.93187413257246
     ],
     "P65": [
      205.8,
      135.74382835845768
     ],
     "P66": [
      205.8,
      135.74382835845768
     ],
     "P67": [
      209.7,
      132.5173281453438
     ],
     "P68": [
      209.7,
      132.5173281453438
     ],
     "P69": [
      213.6,
      129.2651070155243
     ],
     "P70": [
      213.6,
      129.2651070155243
     ],
     "P71": [
      217.5,
      126
     ],
     "P72": [
      217.5,
      126
     ],
     "P73": [
      221.4,
      122.73489298447572
     ],
     "P74": [
      221.4,
      122.73489298447572
     ],
     "P75": [
      225.3,
      119.48267185465616
     ],
     "P76": [
      225.3,
      119.48267185465616
     ],
     "P77": [
      229.20000000000002,
      116.25617164154232
     ],
     "P78": [
      229.20000000000002,
      116.25617164154232
     ],
     "P79": [
      233.1,
      113.06812586742757
     ],
     "P80": [
      233.1,
      113.06812586742757
     ],
     "P81": [
      237,
      109.93111629250274
     ],
     "P82": [
      237,
      109.93111629250274
     ],
     "P83": [
      240.9,
      106.85752326039676
     ],
     "P84": [
      240.9,
      106.85752326039676
     ],
     "P85": [
      244.8,
      103.85947683861622
     ],
     "P86": [
      244.8,
      103.85947683861622
     ],
     "P87": [
      248.70000000000002,
      100.94880894671081
     ],
     "P88": [
      248.70000000000002,
      100.94880894671081
     ],
     "P89": [
      252.60000000000002,
      98.13700666109216
     ],
     "P90": [
      252.60000000000002,
      98.13700666109216
     ],
     "P91": [
      256.5,
      95.4351668807914
     ],
     "P92": [
      256.5,
      95.4351668807914
     ],
     "P93": [
      260.4,
      92.85395253306814
     ],
     "P94": [
      260.4,
      92.85395253306814
     ],
     "P95": [
      264.3,
      90.40355049170819
     ],
     "P96": [
      264.3,
      90.40355049170819
     ],
     "P97": [
      268.2,
      88.09363137408661
     ],
     "P98": [
      268.2,
      88.09363137408661
     ],
     "P99": [
      272.1,
      85.93331137565895
     ],
     "P100": [
      272.1,
      85.93331137565895
     ],
     "P101": [
      276,
      83.93111629250274
     ],
     "P102": [
      276,
      83.93111629250274
     ],
     "P103": [
      279.9,
      82.09494787389522
     ],
     "P104": [
      279.9,
      82.09494787389522
     ],
     "P105": [
      283.79999999999995,
      80.4320526377191
     ],
     "P106": [
      283.79999999999995,
      80.4320526377191
     ],
     "P107": [
      287.7,
      78.948993271767
     ],
     "P108": [
      287.7,
      78.948993271767
     ],
     "P109": [
      291.6,
      77.65162273381094
     ],
     "P110": [
      291.6,
      77.65162273381094
     ],
     "P111": [
      295.5,
      76.54506115265201
     ],
     "P112": [
      295.5,
      76.54506115265201
     ],
     "P113": [
      299.4,
      75.63367562131117
     ],
     "P114": [
      299.4,
      75.63367562131117
     ],
     "P115": [
      303.29999999999995,
      74.92106296210818
     ],
     "P116": [
      303.29999999999995,
      74.92106296210818
     ],
     "P117": [
      307.2,
      74.41003553164717
     ],
     "P118": [
      307.2,
      74.41003553164717
     ],
     "P119": [
      311.1,
      74.10261012172987
     ],
     "P120": [
      311.1,
      74.10261012172987
     ],
     "P121": [
      315,
      74
     ],
     "P122": [
      315,
      74
     ],
     "P123": [
      318.9,
      74.10261012172987
     ],
     "P124": [
      318.9,
      74.10261012172987
     ],
     "P125": [
      322.8,
      74.41003553164714
     ],
     "P126": [
      322.8,
      74.41003553164714
     ],
     "P127": [
      326.70000000000005,
      74.92106296210818
     ],
     "P128": [
      326.70000000000005,
      74.92106296210818
     ],
     "P129": [
      330.6,
      75.63367562131117
     ],
     "P130": [
      330.6,
      75.63367562131117
     ],
     "P131": [
      334.5,
      76.54506115265201
     ],
     "P132": [
      334.5,
      76.54506115265201
     ],
     "P133": [
      338.40000000000003,
      77.65162273381094
     ],
     "P134": [
      338.40000000000003,
      77.65162273381094
     ],
     "P135": [
      342.29999999999995,
      78.94899327176697
     ],
     "P136": [
      342.29999999999995,
      78.94899327176697
     ],
     "P137": [
      346.2,
      80.4320526377191
     ],
     "P138": [
      346.2,
      80.4320526377191
     ],
     "P139": [
      350.1,
      82.0949478738952
     ],
     "P140": [
      350.1,
      82.0949478738952
     ],
     "P141": [
      354,
      83.93111629250274
     ],
     "P142": [
      354,
      83.93111629250274
     ],
     "P143": [
      357.9,
      85.93331137565895
     ],
     "P144": [
      357.9,
      85.93331137565895
     ],
     "P145": [
      361.8,
      88.09363137408658
     ],
     "P146": [
      361.8,
      88.09363137408658
     ],
     "P147": [
      365.7,
      90.40355049170819
     ],
     "P148": [
      365.7,
      90.40355049170819
     ],
     "P149": [
      369.6,
      92.85395253306814
     ],
     "P150": [
      369.6,
      92.85395253306814
     ],
     "P151": [
      373.5,
      95.4351668807914
     ],
     "P152": [
      373.5,
      95.4351668807914
     ],
     "P153": [
      377.40000000000003,
      98.13700666109219
     ],
     "P154": [
      377.40000000000003,
      98.13700666109219
     ],
     "P155": [
      381.3,
      100.94880894671081
     ],
     "P156": [
      381.3,
      100.94880894671081
     ],
     "P157": [
      385.20000000000005,
      103.85947683861625
     ],
     "P158": [
      385.20000000000005,
      103.85947683861625
     ],
     "P159": [
      389.09999999999997,
      106.8575232603967
     ],
     "P160": [
      389.09999999999997,
      106.8575232603967
     ],
     "P161": [
      393,
      109.93111629250274
     ],
     "P162": [
      393,
      109.93111629250274
     ],
     "P163": [
      396.9,
      113.06812586742751
     ],
     "P164": [
      396.9,
      113.06812586742751
     ],
     "P165": [
      400.8,
      116.25617164154232
     ],
     "P166": [
      400.8,
      116.25617164154232
     ],
     "P167": [
      404.7,
      119.48267185465616
     ],
     "P168": [
      404.7,
      119.48267185465616
     ],
     "P169": [
      408.6,
      122.73489298447572
     ],
     "P170": [
      408.6,
      122.73489298447572
     ],
     "P171": [
      412.5,
      126
     ],
     "P172": [
      412.5,
      126
     ],
     "P173": [
      416.4,
      129.26510701552428
     ],
     "P174": [
      416.4,
      129.26510701552428
     ],
     "P175": [
      420.3,
      132.5173281453438
     ],
     "P176": [
      420.3,
      132.5173281453438
     ],
     "P177": [
      424.2,
      135.74382835845768
     ],
     "P178": [
      424.2,
      135.74382835845768
     ],
     "P179": [
      428.1,
      138.93187413257246
     ],
     "P180": [
      428.1,
      138.93187413257246
     ],
     "P181": [
      432,
      142.06888370749726
     ],
     "P182": [
      432,
      142.06888370749726
     ],
     "P183": [
      435.90000000000003,
      145.14247673960327
     ],
     "P184": [
      435.90000000000003,
      145.14247673960327
     ],
     "P185": [
      439.79999999999995,
      148.14052316138373
     ],
     "P186": [
      439.79999999999995,
      148.14052316138373
     ],
     "P187": [
      443.7,
      151.0511910532892
     ],
     "P188": [
      443.7,
      151.0511910532892
     ],
     "P189": [
      447.59999999999997,
      153.8629933389078
     ],
     "P190": [
      447.59999999999997,
      153.8629933389078
     ],
     "P191": [
      451.5,
      156.56483311920857
     ],
     "P192": [
      451.5,
      156.56483311920857
     ],
     "P193": [
      455.4,
      159.14604746693186
     ],
     "P194": [
      455.4,
      159.14604746693186
     ],
     "P195": [
      459.3,
      161.5964495082918
     ],
     "P196": [
      459.3,
      161.5964495082918
     ],
     "P197": [
      463.2,
      163.9063686259134
     ],
     "P198": [
      463.2,
      163.9063686259134
     ],
     "P199": [
      467.1,
      166.06668862434105
     ],
     "P200": [
      467.1,
      166.06668862434105
     ],
     "P201": [
      471,
      168.06888370749726
     ],
     "P202": [
      471,
      168.06888370749726
     ],
     "P203": [
      474.90000000000003,
      169.9050521261048
     ],
     "P204": [
      474.90000000000003,
      169.9050521261048
     ],
     "P205": [
      478.8,
      171.5679473622809
     ],
     "P206": [
      478.8,
      171.5679473622809
     ],
     "P207": [
      482.70000000000005,
      173.051006728233
     ],
     "P208": [
      482.70000000000005,
      173.051006728233
     ],
     "P209": [
      486.59999999999997,
      174.34837726618906
     ],
     "P210": [
      486.59999999999997,
      174.34837726618906
     ],
     "P211": [
      490.5,
      175.454938847348
     ],
     "P212": [
      490.5,
      175.454938847348
     ],
     "P213": [
      494.4,
      176.36632437868883
     ],
     "P214": [
      494.4,
      176.36632437868883
     ],
     "P215": [
      498.3,
      177.07893703789182
     ],
     "P216": [
      498.3,
      177.07893703789182
     ],
     "P217": [
      502.2,
      177.58996446835283
     ],
     "P218": [
      502.2,
      177.58996446835283
     ],
     "P219": [
      506.1,
      177.89738987827013
     ],
     "P220": [
      506.1,
      177.89738987827013
     ],
     "P221": [
      510,
      178
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221",
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
      "col": 3,
      "arrows": 0,
      "dash": true,
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
      "v": "P160P161",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P162P163",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P164P165",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P166P167",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P168P169",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P170P171",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P172P173",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P174P175",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P176P177",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P178P179",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P180P181",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P182P183",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P184P185",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P186P187",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P188P189",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P190P191",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P192P193",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P194P195",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P196P197",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P198P199",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P200P201",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P202P203",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P204P205",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P206P207",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P208P209",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P210P211",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P212P213",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P214P215",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P216P217",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P218P219",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P220P221",
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
      "text": "Displacement x (m)",
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
       217.5,
       41
      ],
      "text": "0.5",
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
       412.5,
       41
      ],
      "text": "1.5",
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
       69
      ],
      "text": "-0.4",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       97,
       173
      ],
      "text": "0.4",
      "col": 0
     },
     {
      "at": [
       420,
       213
      ],
      "text": "A = 0.4m; Ω = πrad/s; T = 2s",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "One cycle: x=0.4cos(πt)m",
    "head": "Time(s)",
    "cols": [
     "x(m)",
     "Velocity direction"
    ],
    "rows": [
     [
      "0",
      "+0.4",
      "At rest"
     ],
     [
      "0.5",
      "0",
      "Negative"
     ],
     [
      "1",
      "-0.4",
      "At rest"
     ],
     [
      "1.5",
      "0",
      "Positive"
     ]
    ]
   },
   [
    {
     "t": "figure",
     "title": "Velocity follows the position slope",
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
       217.5,
       61
      ],
      "P7": [
       217.5,
       56
      ],
      "P8": [
       315,
       61
      ],
      "P9": [
       315,
       56
      ],
      "P10": [
       412.5,
       61
      ],
      "P11": [
       412.5,
       56
      ],
      "P12": [
       510,
       61
      ],
      "P13": [
       510,
       56
      ],
      "P14": [
       115,
       77.25
      ],
      "P15": [
       120,
       77.25
      ],
      "P16": [
       115,
       126
      ],
      "P17": [
       120,
       126
      ],
      "P18": [
       115,
       174.75
      ],
      "P19": [
       120,
       174.75
      ],
      "P20": [
       120,
       126
      ],
      "P21": [
       510,
       126
      ],
      "P22": [
       120,
       126
      ],
      "P23": [
       123.9,
       122.79448868338886
      ],
      "P24": [
       123.9,
       122.79448868338886
      ],
      "P25": [
       127.8,
       119.60162805548558
      ],
      "P26": [
       127.8,
       119.60162805548558
      ],
      "P27": [
       131.7,
       116.43401887850922
      ],
      "P28": [
       131.7,
       116.43401887850922
      ],
      "P29": [
       135.6,
       113.3041622587383
      ],
      "P30": [
       135.6,
       113.3041622587383
      ],
      "P31": [
       139.5,
       110.22441031035561
      ],
      "P32": [
       139.5,
       110.22441031035561
      ],
      "P33": [
       143.4,
       107.20691740729654
      ],
      "P34": [
       143.4,
       107.20691740729654
      ],
      "P35": [
       147.3,
       104.26359221548813
      ],
      "P36": [
       147.3,
       104.26359221548813
      ],
      "P37": [
       151.2,
       101.40605069478511
      ],
      "P38": [
       151.2,
       101.40605069478511
      ],
      "P39": [
       155.1,
       98.64557025608309
      ],
      "P40": [
       155.1,
       98.64557025608309
      ],
      "P41": [
       159,
       95.99304525453007
      ],
      "P42": [
       159,
       95.99304525453007
      ],
      "P43": [
       162.9,
       93.45894399448383
      ],
      "P44": [
       162.9,
       93.45894399448383
      ],
      "P45": [
       166.8,
       91.05326741589701
      ],
      "P46": [
       166.8,
       91.05326741589701
      ],
      "P47": [
       170.7,
       88.78550962517619
      ],
      "P48": [
       170.7,
       88.78550962517619
      ],
      "P49": [
       174.60000000000002,
       86.6646204262814
      ],
      "P50": [
       174.60000000000002,
       86.6646204262814
      ],
      "P51": [
       178.5,
       84.69896999993853
      ],
      "P52": [
       178.5,
       84.69896999993853
      ],
      "P53": [
       182.4,
       82.8963158703601
      ],
      "P54": [
       182.4,
       82.8963158703601
      ],
      "P55": [
       186.3,
       81.26377228984123
      ],
      "P56": [
       186.3,
       81.26377228984123
      ],
      "P57": [
       190.2,
       79.80778216205601
      ],
      "P58": [
       190.2,
       79.80778216205601
      ],
      "P59": [
       194.1,
       78.53409161486019
      ],
      "P60": [
       194.1,
       78.53409161486019
      ],
      "P61": [
       198,
       77.44772732294973
      ],
      "P62": [
       198,
       77.44772732294973
      ],
      "P63": [
       201.89999999999998,
       76.5529766698721
      ],
      "P64": [
       201.89999999999998,
       76.5529766698721
      ],
      "P65": [
       205.8,
       75.85337082768234
      ],
      "P66": [
       205.8,
       75.85337082768234
      ],
      "P67": [
       209.7,
       75.3516708210201
      ],
      "P68": [
       209.7,
       75.3516708210201
      ],
      "P69": [
       213.6,
       75.04985663060666
      ],
      "P70": [
       213.6,
       75.04985663060666
      ],
      "P71": [
       217.5,
       74.94911937916586
      ],
      "P72": [
       217.5,
       74.94911937916586
      ],
      "P73": [
       221.4,
       75.04985663060666
      ],
      "P74": [
       221.4,
       75.04985663060666
      ],
      "P75": [
       225.3,
       75.3516708210201
      ],
      "P76": [
       225.3,
       75.3516708210201
      ],
      "P77": [
       229.20000000000002,
       75.85337082768234
      ],
      "P78": [
       229.20000000000002,
       75.85337082768234
      ],
      "P79": [
       233.1,
       76.5529766698721
      ],
      "P80": [
       233.1,
       76.5529766698721
      ],
      "P81": [
       237,
       77.4477273229497
      ],
      "P82": [
       237,
       77.4477273229497
      ],
      "P83": [
       240.9,
       78.53409161486019
      ],
      "P84": [
       240.9,
       78.53409161486019
      ],
      "P85": [
       244.8,
       79.80778216205601
      ],
      "P86": [
       244.8,
       79.80778216205601
      ],
      "P87": [
       248.70000000000002,
       81.26377228984123
      ],
      "P88": [
       248.70000000000002,
       81.26377228984123
      ],
      "P89": [
       252.60000000000002,
       82.8963158703601
      ],
      "P90": [
       252.60000000000002,
       82.8963158703601
      ],
      "P91": [
       256.5,
       84.69896999993853
      ],
      "P92": [
       256.5,
       84.69896999993853
      ],
      "P93": [
       260.4,
       86.6646204262814
      ],
      "P94": [
       260.4,
       86.6646204262814
      ],
      "P95": [
       264.3,
       88.78550962517622
      ],
      "P96": [
       264.3,
       88.78550962517622
      ],
      "P97": [
       268.2,
       91.05326741589701
      ],
      "P98": [
       268.2,
       91.05326741589701
      ],
      "P99": [
       272.1,
       93.45894399448383
      ],
      "P100": [
       272.1,
       93.45894399448383
      ],
      "P101": [
       276,
       95.99304525453007
      ],
      "P102": [
       276,
       95.99304525453007
      ],
      "P103": [
       279.9,
       98.64557025608306
      ],
      "P104": [
       279.9,
       98.64557025608306
      ],
      "P105": [
       283.79999999999995,
       101.40605069478508
      ],
      "P106": [
       283.79999999999995,
       101.40605069478508
      ],
      "P107": [
       287.7,
       104.26359221548813
      ],
      "P108": [
       287.7,
       104.26359221548813
      ],
      "P109": [
       291.6,
       107.20691740729654
      ],
      "P110": [
       291.6,
       107.20691740729654
      ],
      "P111": [
       295.5,
       110.22441031035558
      ],
      "P112": [
       295.5,
       110.22441031035558
      ],
      "P113": [
       299.4,
       113.3041622587383
      ],
      "P114": [
       299.4,
       113.3041622587383
      ],
      "P115": [
       303.29999999999995,
       116.43401887850916
      ],
      "P116": [
       303.29999999999995,
       116.43401887850916
      ],
      "P117": [
       307.2,
       119.60162805548558
      ],
      "P118": [
       307.2,
       119.60162805548558
      ],
      "P119": [
       311.1,
       122.79448868338886
      ],
      "P120": [
       311.1,
       122.79448868338886
      ],
      "P121": [
       315,
       126
      ],
      "P122": [
       315,
       126
      ],
      "P123": [
       318.9,
       129.20551131661114
      ],
      "P124": [
       318.9,
       129.20551131661114
      ],
      "P125": [
       322.8,
       132.39837194451442
      ],
      "P126": [
       322.8,
       132.39837194451442
      ],
      "P127": [
       326.70000000000005,
       135.5659811214908
      ],
      "P128": [
       326.70000000000005,
       135.5659811214908
      ],
      "P129": [
       330.6,
       138.69583774126173
      ],
      "P130": [
       330.6,
       138.69583774126173
      ],
      "P131": [
       334.5,
       141.77558968964442
      ],
      "P132": [
       334.5,
       141.77558968964442
      ],
      "P133": [
       338.40000000000003,
       144.79308259270346
      ],
      "P134": [
       338.40000000000003,
       144.79308259270346
      ],
      "P135": [
       342.29999999999995,
       147.7364077845118
      ],
      "P136": [
       342.29999999999995,
       147.7364077845118
      ],
      "P137": [
       346.2,
       150.5939493052149
      ],
      "P138": [
       346.2,
       150.5939493052149
      ],
      "P139": [
       350.1,
       153.3544297439169
      ],
      "P140": [
       350.1,
       153.3544297439169
      ],
      "P141": [
       354,
       156.0069547454699
      ],
      "P142": [
       354,
       156.0069547454699
      ],
      "P143": [
       357.9,
       158.54105600551617
      ],
      "P144": [
       357.9,
       158.54105600551617
      ],
      "P145": [
       361.8,
       160.946732584103
      ],
      "P146": [
       361.8,
       160.946732584103
      ],
      "P147": [
       365.7,
       163.21449037482378
      ],
      "P148": [
       365.7,
       163.21449037482378
      ],
      "P149": [
       369.6,
       165.3353795737186
      ],
      "P150": [
       369.6,
       165.3353795737186
      ],
      "P151": [
       373.5,
       167.30103000006147
      ],
      "P152": [
       373.5,
       167.30103000006147
      ],
      "P153": [
       377.40000000000003,
       169.10368412963993
      ],
      "P154": [
       377.40000000000003,
       169.10368412963993
      ],
      "P155": [
       381.3,
       170.7362277101588
      ],
      "P156": [
       381.3,
       170.7362277101588
      ],
      "P157": [
       385.20000000000005,
       172.19221783794399
      ],
      "P158": [
       385.20000000000005,
       172.19221783794399
      ],
      "P159": [
       389.09999999999997,
       173.46590838513976
      ],
      "P160": [
       389.09999999999997,
       173.46590838513976
      ],
      "P161": [
       393,
       174.5522726770503
      ],
      "P162": [
       393,
       174.5522726770503
      ],
      "P163": [
       396.9,
       175.4470233301279
      ],
      "P164": [
       396.9,
       175.4470233301279
      ],
      "P165": [
       400.8,
       176.14662917231766
      ],
      "P166": [
       400.8,
       176.14662917231766
      ],
      "P167": [
       404.7,
       176.6483291789799
      ],
      "P168": [
       404.7,
       176.6483291789799
      ],
      "P169": [
       408.6,
       176.95014336939334
      ],
      "P170": [
       408.6,
       176.95014336939334
      ],
      "P171": [
       412.5,
       177.05088062083414
      ],
      "P172": [
       412.5,
       177.05088062083414
      ],
      "P173": [
       416.4,
       176.95014336939334
      ],
      "P174": [
       416.4,
       176.95014336939334
      ],
      "P175": [
       420.3,
       176.6483291789799
      ],
      "P176": [
       420.3,
       176.6483291789799
      ],
      "P177": [
       424.2,
       176.14662917231766
      ],
      "P178": [
       424.2,
       176.14662917231766
      ],
      "P179": [
       428.1,
       175.4470233301279
      ],
      "P180": [
       428.1,
       175.4470233301279
      ],
      "P181": [
       432,
       174.5522726770503
      ],
      "P182": [
       432,
       174.5522726770503
      ],
      "P183": [
       435.90000000000003,
       173.46590838513978
      ],
      "P184": [
       435.90000000000003,
       173.46590838513978
      ],
      "P185": [
       439.79999999999995,
       172.19221783794404
      ],
      "P186": [
       439.79999999999995,
       172.19221783794404
      ],
      "P187": [
       443.7,
       170.7362277101588
      ],
      "P188": [
       443.7,
       170.7362277101588
      ],
      "P189": [
       447.59999999999997,
       169.10368412963993
      ],
      "P190": [
       447.59999999999997,
       169.10368412963993
      ],
      "P191": [
       451.5,
       167.30103000006147
      ],
      "P192": [
       451.5,
       167.30103000006147
      ],
      "P193": [
       455.4,
       165.33537957371863
      ],
      "P194": [
       455.4,
       165.33537957371863
      ],
      "P195": [
       459.3,
       163.21449037482378
      ],
      "P196": [
       459.3,
       163.21449037482378
      ],
      "P197": [
       463.2,
       160.946732584103
      ],
      "P198": [
       463.2,
       160.946732584103
      ],
      "P199": [
       467.1,
       158.54105600551617
      ],
      "P200": [
       467.1,
       158.54105600551617
      ],
      "P201": [
       471,
       156.00695474546995
      ],
      "P202": [
       471,
       156.00695474546995
      ],
      "P203": [
       474.90000000000003,
       153.3544297439169
      ],
      "P204": [
       474.90000000000003,
       153.3544297439169
      ],
      "P205": [
       478.8,
       150.5939493052149
      ],
      "P206": [
       478.8,
       150.5939493052149
      ],
      "P207": [
       482.70000000000005,
       147.7364077845118
      ],
      "P208": [
       482.70000000000005,
       147.7364077845118
      ],
      "P209": [
       486.59999999999997,
       144.7930825927035
      ],
      "P210": [
       486.59999999999997,
       144.7930825927035
      ],
      "P211": [
       490.5,
       141.77558968964442
      ],
      "P212": [
       490.5,
       141.77558968964442
      ],
      "P213": [
       494.4,
       138.69583774126176
      ],
      "P214": [
       494.4,
       138.69583774126176
      ],
      "P215": [
       498.3,
       135.5659811214908
      ],
      "P216": [
       498.3,
       135.5659811214908
      ],
      "P217": [
       502.2,
       132.39837194451445
      ],
      "P218": [
       502.2,
       132.39837194451445
      ],
      "P219": [
       506.1,
       129.20551131661114
      ],
      "P220": [
       506.1,
       129.20551131661114
      ],
      "P221": [
       510,
       126
      ]
     },
     "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221",
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
       "col": 3,
       "arrows": 0,
       "dash": true,
       "w": 2
      },
      {
       "v": "P22P23",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P24P25",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P26P27",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P28P29",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P30P31",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P32P33",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P34P35",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P36P37",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P38P39",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P40P41",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P42P43",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P44P45",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P46P47",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P48P49",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P50P51",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P52P53",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P54P55",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P56P57",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P58P59",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P60P61",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P62P63",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P64P65",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P66P67",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P68P69",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P70P71",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P72P73",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P74P75",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P76P77",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P78P79",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P80P81",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P82P83",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P84P85",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P86P87",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P88P89",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P90P91",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P92P93",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P94P95",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P96P97",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P98P99",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P100P101",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P102P103",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P104P105",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P106P107",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P108P109",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P110P111",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P112P113",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P114P115",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P116P117",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P118P119",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P120P121",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P122P123",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P124P125",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P126P127",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P128P129",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P130P131",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P132P133",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P134P135",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P136P137",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P138P139",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P140P141",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P142P143",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P144P145",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P146P147",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P148P149",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P150P151",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P152P153",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P154P155",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P156P157",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P158P159",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P160P161",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P162P163",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P164P165",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P166P167",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P168P169",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P170P171",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P172P173",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P174P175",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P176P177",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P178P179",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P180P181",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P182P183",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P184P185",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P186P187",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P188P189",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P190P191",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P192P193",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P194P195",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P196P197",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P198P199",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P200P201",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P202P203",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P204P205",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P206P207",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P208P209",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P210P211",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P212P213",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P214P215",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P216P217",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P218P219",
       "col": 1,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P220P221",
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
       "text": "Velocity v (m/s)",
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
        217.5,
        41
       ],
       "text": "0.5",
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
        412.5,
        41
       ],
       "text": "1.5",
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
        72.25
       ],
       "text": "-1.2",
       "col": 0
      },
      {
       "at": [
        97,
        121
       ],
       "text": "0",
       "col": 0
      },
      {
       "at": [
        97,
        169.75
       ],
       "text": "1.2",
       "col": 0
      },
      {
       "at": [
        420,
        213
       ],
       "text": "A = 0.4m; Ω = πrad/s; T = 2s",
       "col": 0
      }
     ],
     "circles": []
    },
    {
     "t": "figure",
     "title": "Acceleration opposes displacement",
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
       217.5,
       61
      ],
      "P7": [
       217.5,
       56
      ],
      "P8": [
       315,
       61
      ],
      "P9": [
       315,
       56
      ],
      "P10": [
       412.5,
       61
      ],
      "P11": [
       412.5,
       56
      ],
      "P12": [
       510,
       61
      ],
      "P13": [
       510,
       56
      ],
      "P14": [
       115,
       74
      ],
      "P15": [
       120,
       74
      ],
      "P16": [
       115,
       126
      ],
      "P17": [
       120,
       126
      ],
      "P18": [
       115,
       178
      ],
      "P19": [
       120,
       178
      ],
      "P20": [
       120,
       126
      ],
      "P21": [
       510,
       126
      ],
      "P22": [
       120,
       74.67805711433533
      ],
      "P23": [
       123.9,
       74.7793292452375
      ],
      "P24": [
       123.9,
       74.7793292452375
      ],
      "P25": [
       127.8,
       75.08274596311011
      ],
      "P26": [
       127.8,
       75.08274596311011
      ],
      "P27": [
       131.7,
       75.58710982078568
      ],
      "P28": [
       131.7,
       75.58710982078568
      ],
      "P29": [
       135.6,
       76.29043032453987
      ],
      "P30": [
       135.6,
       76.29043032453987
      ],
      "P31": [
       139.5,
       77.18993178966093
      ],
      "P32": [
       139.5,
       77.18993178966093
      ],
      "P33": [
       143.4,
       78.28206429480917
      ],
      "P34": [
       143.4,
       78.28206429480917
      ],
      "P35": [
       147.3,
       79.56251769193466
      ],
      "P36": [
       147.3,
       79.56251769193466
      ],
      "P37": [
       151.2,
       81.02623861646242
      ],
      "P38": [
       151.2,
       81.02623861646242
      ],
      "P39": [
       155.1,
       82.66745043061385
      ],
      "P40": [
       155.1,
       82.66745043061385
      ],
      "P41": [
       159,
       84.47967602115685
      ],
      "P42": [
       159,
       84.47967602115685
      ],
      "P43": [
       162.9,
       86.45576336161267
      ],
      "P44": [
       162.9,
       86.45576336161267
      ],
      "P45": [
       166.8,
       88.58791373803695
      ],
      "P46": [
       166.8,
       88.58791373803695
      ],
      "P47": [
       170.7,
       90.8677125269808
      ],
      "P48": [
       170.7,
       90.8677125269808
      ],
      "P49": [
       174.60000000000002,
       93.28616240416525
      ],
      "P50": [
       174.60000000000002,
       93.28616240416525
      ],
      "P51": [
       178.5,
       95.83371885280971
      ],
      "P52": [
       178.5,
       95.83371885280971
      ],
      "P53": [
       182.4,
       98.50032783147918
      ],
      "P54": [
       182.4,
       98.50032783147918
      ],
      "P55": [
       186.3,
       101.27546545279267
      ],
      "P56": [
       186.3,
       101.27546545279267
      ],
      "P57": [
       190.2,
       104.14817951639859
      ],
      "P58": [
       190.2,
       104.14817951639859
      ],
      "P59": [
       194.1,
       107.1071327323061
      ],
      "P60": [
       194.1,
       107.1071327323061
      ],
      "P61": [
       198,
       110.14064746398918
      ],
      "P62": [
       198,
       110.14064746398918
      ],
      "P63": [
       201.89999999999998,
       113.23675181468292
      ],
      "P64": [
       201.89999999999998,
       113.23675181468292
      ],
      "P65": [
       205.8,
       116.38322687499067
      ],
      "P66": [
       205.8,
       116.38322687499067
      ],
      "P67": [
       209.7,
       119.5676549453371
      ],
      "P68": [
       209.7,
       119.5676549453371
      ],
      "P69": [
       213.6,
       122.77746854295535
      ],
      "P70": [
       213.6,
       122.77746854295535
      ],
      "P71": [
       217.5,
       126
      ],
      "P72": [
       217.5,
       126
      ],
      "P73": [
       221.4,
       129.22253145704462
      ],
      "P74": [
       221.4,
       129.22253145704462
      ],
      "P75": [
       225.3,
       132.4323450546629
      ],
      "P76": [
       225.3,
       132.4323450546629
      ],
      "P77": [
       229.20000000000002,
       135.61677312500933
      ],
      "P78": [
       229.20000000000002,
       135.61677312500933
      ],
      "P79": [
       233.1,
       138.76324818531705
      ],
      "P80": [
       233.1,
       138.76324818531705
      ],
      "P81": [
       237,
       141.85935253601082
      ],
      "P82": [
       237,
       141.85935253601082
      ],
      "P83": [
       240.9,
       144.89286726769387
      ],
      "P84": [
       240.9,
       144.89286726769387
      ],
      "P85": [
       244.8,
       147.85182048360144
      ],
      "P86": [
       244.8,
       147.85182048360144
      ],
      "P87": [
       248.70000000000002,
       150.72453454720733
      ],
      "P88": [
       248.70000000000002,
       150.72453454720733
      ],
      "P89": [
       252.60000000000002,
       153.49967216852082
      ],
      "P90": [
       252.60000000000002,
       153.49967216852082
      ],
      "P91": [
       256.5,
       156.1662811471903
      ],
      "P92": [
       256.5,
       156.1662811471903
      ],
      "P93": [
       260.4,
       158.71383759583475
      ],
      "P94": [
       260.4,
       158.71383759583475
      ],
      "P95": [
       264.3,
       161.13228747301918
      ],
      "P96": [
       264.3,
       161.13228747301918
      ],
      "P97": [
       268.2,
       163.41208626196305
      ],
      "P98": [
       268.2,
       163.41208626196305
      ],
      "P99": [
       272.1,
       165.5442366383873
      ],
      "P100": [
       272.1,
       165.5442366383873
      ],
      "P101": [
       276,
       167.52032397884312
      ],
      "P102": [
       276,
       167.52032397884312
      ],
      "P103": [
       279.9,
       169.33254956938612
      ],
      "P104": [
       279.9,
       169.33254956938612
      ],
      "P105": [
       283.79999999999995,
       170.97376138353758
      ],
      "P106": [
       283.79999999999995,
       170.97376138353758
      ],
      "P107": [
       287.7,
       172.43748230806534
      ],
      "P108": [
       287.7,
       172.43748230806534
      ],
      "P109": [
       291.6,
       173.71793570519083
      ],
      "P110": [
       291.6,
       173.71793570519083
      ],
      "P111": [
       295.5,
       174.81006821033907
      ],
      "P112": [
       295.5,
       174.81006821033907
      ],
      "P113": [
       299.4,
       175.70956967546016
      ],
      "P114": [
       299.4,
       175.70956967546016
      ],
      "P115": [
       303.29999999999995,
       176.41289017921434
      ],
      "P116": [
       303.29999999999995,
       176.41289017921434
      ],
      "P117": [
       307.2,
       176.91725403688986
      ],
      "P118": [
       307.2,
       176.91725403688986
      ],
      "P119": [
       311.1,
       177.2206707547625
      ],
      "P120": [
       311.1,
       177.2206707547625
      ],
      "P121": [
       315,
       177.32194288566467
      ],
      "P122": [
       315,
       177.32194288566467
      ],
      "P123": [
       318.9,
       177.2206707547625
      ],
      "P124": [
       318.9,
       177.2206707547625
      ],
      "P125": [
       322.8,
       176.91725403688986
      ],
      "P126": [
       322.8,
       176.91725403688986
      ],
      "P127": [
       326.70000000000005,
       176.41289017921434
      ],
      "P128": [
       326.70000000000005,
       176.41289017921434
      ],
      "P129": [
       330.6,
       175.70956967546016
      ],
      "P130": [
       330.6,
       175.70956967546016
      ],
      "P131": [
       334.5,
       174.81006821033907
      ],
      "P132": [
       334.5,
       174.81006821033907
      ],
      "P133": [
       338.40000000000003,
       173.71793570519083
      ],
      "P134": [
       338.40000000000003,
       173.71793570519083
      ],
      "P135": [
       342.29999999999995,
       172.43748230806534
      ],
      "P136": [
       342.29999999999995,
       172.43748230806534
      ],
      "P137": [
       346.2,
       170.97376138353758
      ],
      "P138": [
       346.2,
       170.97376138353758
      ],
      "P139": [
       350.1,
       169.33254956938615
      ],
      "P140": [
       350.1,
       169.33254956938615
      ],
      "P141": [
       354,
       167.52032397884312
      ],
      "P142": [
       354,
       167.52032397884312
      ],
      "P143": [
       357.9,
       165.5442366383873
      ],
      "P144": [
       357.9,
       165.5442366383873
      ],
      "P145": [
       361.8,
       163.41208626196305
      ],
      "P146": [
       361.8,
       163.41208626196305
      ],
      "P147": [
       365.7,
       161.1322874730192
      ],
      "P148": [
       365.7,
       161.1322874730192
      ],
      "P149": [
       369.6,
       158.71383759583475
      ],
      "P150": [
       369.6,
       158.71383759583475
      ],
      "P151": [
       373.5,
       156.1662811471903
      ],
      "P152": [
       373.5,
       156.1662811471903
      ],
      "P153": [
       377.40000000000003,
       153.4996721685208
      ],
      "P154": [
       377.40000000000003,
       153.4996721685208
      ],
      "P155": [
       381.3,
       150.72453454720733
      ],
      "P156": [
       381.3,
       150.72453454720733
      ],
      "P157": [
       385.20000000000005,
       147.8518204836014
      ],
      "P158": [
       385.20000000000005,
       147.8518204836014
      ],
      "P159": [
       389.09999999999997,
       144.89286726769393
      ],
      "P160": [
       389.09999999999997,
       144.89286726769393
      ],
      "P161": [
       393,
       141.85935253601082
      ],
      "P162": [
       393,
       141.85935253601082
      ],
      "P163": [
       396.9,
       138.76324818531708
      ],
      "P164": [
       396.9,
       138.76324818531708
      ],
      "P165": [
       400.8,
       135.61677312500933
      ],
      "P166": [
       400.8,
       135.61677312500933
      ],
      "P167": [
       404.7,
       132.4323450546629
      ],
      "P168": [
       404.7,
       132.4323450546629
      ],
      "P169": [
       408.6,
       129.22253145704462
      ],
      "P170": [
       408.6,
       129.22253145704462
      ],
      "P171": [
       412.5,
       126
      ],
      "P172": [
       412.5,
       126
      ],
      "P173": [
       416.4,
       122.77746854295538
      ],
      "P174": [
       416.4,
       122.77746854295538
      ],
      "P175": [
       420.3,
       119.5676549453371
      ],
      "P176": [
       420.3,
       119.5676549453371
      ],
      "P177": [
       424.2,
       116.3832268749907
      ],
      "P178": [
       424.2,
       116.3832268749907
      ],
      "P179": [
       428.1,
       113.23675181468292
      ],
      "P180": [
       428.1,
       113.23675181468292
      ],
      "P181": [
       432,
       110.14064746398921
      ],
      "P182": [
       432,
       110.14064746398921
      ],
      "P183": [
       435.90000000000003,
       107.1071327323061
      ],
      "P184": [
       435.90000000000003,
       107.1071327323061
      ],
      "P185": [
       439.79999999999995,
       104.14817951639861
      ],
      "P186": [
       439.79999999999995,
       104.14817951639861
      ],
      "P187": [
       443.7,
       101.27546545279267
      ],
      "P188": [
       443.7,
       101.27546545279267
      ],
      "P189": [
       447.59999999999997,
       98.50032783147924
      ],
      "P190": [
       447.59999999999997,
       98.50032783147924
      ],
      "P191": [
       451.5,
       95.83371885280971
      ],
      "P192": [
       451.5,
       95.83371885280971
      ],
      "P193": [
       455.4,
       93.28616240416528
      ],
      "P194": [
       455.4,
       93.28616240416528
      ],
      "P195": [
       459.3,
       90.8677125269808
      ],
      "P196": [
       459.3,
       90.8677125269808
      ],
      "P197": [
       463.2,
       88.58791373803697
      ],
      "P198": [
       463.2,
       88.58791373803697
      ],
      "P199": [
       467.1,
       86.45576336161267
      ],
      "P200": [
       467.1,
       86.45576336161267
      ],
      "P201": [
       471,
       84.47967602115688
      ],
      "P202": [
       471,
       84.47967602115688
      ],
      "P203": [
       474.90000000000003,
       82.66745043061383
      ],
      "P204": [
       474.90000000000003,
       82.66745043061383
      ],
      "P205": [
       478.8,
       81.02623861646242
      ],
      "P206": [
       478.8,
       81.02623861646242
      ],
      "P207": [
       482.70000000000005,
       79.56251769193463
      ],
      "P208": [
       482.70000000000005,
       79.56251769193463
      ],
      "P209": [
       486.59999999999997,
       78.28206429480917
      ],
      "P210": [
       486.59999999999997,
       78.28206429480917
      ],
      "P211": [
       490.5,
       77.18993178966093
      ],
      "P212": [
       490.5,
       77.18993178966093
      ],
      "P213": [
       494.4,
       76.29043032453987
      ],
      "P214": [
       494.4,
       76.29043032453987
      ],
      "P215": [
       498.3,
       75.58710982078568
      ],
      "P216": [
       498.3,
       75.58710982078568
      ],
      "P217": [
       502.2,
       75.08274596311011
      ],
      "P218": [
       502.2,
       75.08274596311011
      ],
      "P219": [
       506.1,
       74.7793292452375
      ],
      "P220": [
       506.1,
       74.7793292452375
      ],
      "P221": [
       510,
       74.67805711433533
      ]
     },
     "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221",
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
       "col": 3,
       "arrows": 0,
       "dash": true,
       "w": 2
      },
      {
       "v": "P22P23",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P24P25",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P26P27",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P28P29",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P30P31",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P32P33",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P34P35",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P36P37",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P38P39",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P40P41",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P42P43",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P44P45",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P46P47",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P48P49",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P50P51",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P52P53",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P54P55",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P56P57",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P58P59",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P60P61",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P62P63",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P64P65",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P66P67",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P68P69",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P70P71",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P72P73",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P74P75",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P76P77",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P78P79",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P80P81",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P82P83",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P84P85",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P86P87",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P88P89",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P90P91",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P92P93",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P94P95",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P96P97",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P98P99",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P100P101",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P102P103",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P104P105",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P106P107",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P108P109",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P110P111",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P112P113",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P114P115",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P116P117",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P118P119",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P120P121",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P122P123",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P124P125",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P126P127",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P128P129",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P130P131",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P132P133",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P134P135",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P136P137",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P138P139",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P140P141",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P142P143",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P144P145",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P146P147",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P148P149",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P150P151",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P152P153",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P154P155",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P156P157",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P158P159",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P160P161",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P162P163",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P164P165",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P166P167",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P168P169",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P170P171",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P172P173",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P174P175",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P176P177",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P178P179",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P180P181",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P182P183",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P184P185",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P186P187",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P188P189",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P190P191",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P192P193",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P194P195",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P196P197",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P198P199",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P200P201",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P202P203",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P204P205",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P206P207",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P208P209",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P210P211",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P212P213",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P214P215",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P216P217",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P218P219",
       "col": 2,
       "arrows": 0,
       "dash": false,
       "w": 2
      },
      {
       "v": "P220P221",
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
       "text": "Acceleration a (m/s²)",
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
        217.5,
        41
       ],
       "text": "0.5",
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
        412.5,
        41
       ],
       "text": "1.5",
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
        69
       ],
       "text": "-4",
       "col": 0
      },
      {
       "at": [
        97,
        121
       ],
       "text": "0",
       "col": 0
      },
      {
       "at": [
        97,
        173
       ],
       "text": "4",
       "col": 0
      },
      {
       "at": [
        420,
        213
       ],
       "text": "A = 0.4m; Ω = πrad/s; T = 2s",
       "col": 0
      }
     ],
     "circles": []
    }
   ],
   null,
   null
  ],
  "qpics": {
   "14": {
    "t": "setups",
    "title": "Given displacement model",
    "head": "Quantity",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "x(t)",
      "0.4cos(πt)m"
     ],
     [
      "Time unit",
      "Seconds"
     ]
    ]
   },
   "23": {
    "t": "setups",
    "title": "Successive positive peaks; none between",
    "head": "Peak",
    "cols": [
     "Time(s)"
    ],
    "rows": [
     [
      "First",
      "1"
     ],
     [
      "Second",
      "4"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Try: cosine-phase starting state",
   "head": "Quantity",
   "cols": [
    "Given"
   ],
   "rows": [
    [
     "Period",
     "12s"
    ],
    [
     "At t=0",
     "Positive extreme, at rest"
    ],
    [
     "Requested time",
     "3s"
    ]
   ]
  }
 },
 {
  "code": "7.4",
  "name": "Energy of Simple Harmonic Oscillators",
  "skill": "s4",
  "boardTitle": "Oscillator energy",
  "teach": [
   "For an ideal undamped horizontal mass on a massless spring with no external energy transfer, total mechanical energy is E=½mv²+½kx². Choose spring potential zero at equilibrium. At an endpoint x=±A the speed is zero, so E=½kA²; at equilibrium the spring potential is zero and kinetic energy is maximal. With k=100N/m and A=0.2m, total energy is 2J. The force can be largest when kinetic energy is zero, so energy and force graphs must not be confused.",
   "At any intermediate displacement, spring potential is U=½kx² and kinetic energy is E-U. With k=100N/m, A=0.2m and x=0.1m, potential is 0.5J and kinetic energy 1.5J. At half-amplitude, the potential fraction is 1/4 and kinetic fraction 3/4, not one-half each. Equal positive and negative displacements have equal potentials and equal speed magnitudes, but opposite travel directions are possible.",
   "Energy also gives speed without finding time. Equating kinetic energy to the available total minus potential gives speed=√[(k/m)(A²-x²)]. For m=1kg, k=100N/m and A=0.2m, maximum speed at equilibrium is 2m/s. This is consistent with AΩ using Ω=10rad/s. The square root gives speed magnitude; motion direction needs phase or history. A position with potential energy above the total is inaccessible in this ideal classical model.",
   "Total energy grows with amplitude squared and linearly with stiffness. Doubling amplitude at fixed k quadruples energy, even though the ideal period is unchanged. Reducing total energy to one-quarter halves amplitude: 0.3m becomes 0.15m. For an actual freely decaying oscillator, friction transfers energy to the surroundings and the amplitude shrinks; that is outside undamped energy conservation for the mass-spring mechanical energy alone. In the separate pictured example, the motion period is 2s and total energy 2J; each energy curve repeats after 1s because displacement and speed enter squared.",
   "Choose potential energies for the physical system. A pendulum bob dropping 0.1m from rest with mass 2kg and g=10m/s² gains 2J of kinetic energy if losses are negligible. For a vertical spring, the full energy includes gravity and spring extension from natural length. Measuring extra displacement x from static equilibrium gives a combined effective potential change ½kx² after those terms are combined. This does not say the spring’s elastic energy alone is ½kx² when it is already stretched at equilibrium."
  ],
  "eqs": [
   "E=½kA²=½×100×0.2²=2J",
   "U=½×100×0.1²=0.5J; K=2−0.5=1.5J",
   "vmax=√(k/m)A=10×0.2=2m/s",
   "Enew/Eold=1/4 ⇒ Anew/Aold=1/2",
   "Pendulum ΔK=mgh=2×10×0.1=2J"
  ],
  "boards": [
   [
    "Total = kinetic + potential energy",
    "Endpoint: K0, potential equals total",
    "Equilibrium: potential minimum, K maximum"
   ],
   [
    "Use current displacement for potential",
    "Use amplitude for total energy",
    "At half amplitude: U/E1/4 and K/E3/4"
   ],
   [
    "Subtract potential from total to find kinetic",
    "Energy gives speed magnitude, not direction",
    "Negative kinetic energy is not allowed"
   ],
   [
    "Total energy is proportional to amplitude squared",
    "Period and energy have different amplitude rules",
    "Dissipation needs a larger energy account"
   ],
   [
    "Include the actual forms of potential energy",
    "Pendulum: use vertical height change",
    "Vertical spring: combine elastic and gravity terms"
   ]
  ],
  "questions": [
   [
    "For an ideal undamped horizontal mass-spring oscillator with no external energy transfer, what stays constant?",
    "The sum of kinetic and spring potential energy",
    "Kinetic energy alone at every position",
    "Spring potential energy alone at every position",
    "The two forms exchange as the mass moves, but their total stays constant under the stated conservative assumptions."
   ],
   [
    "With spring potential energy zero at equilibrium, what happens at either turning point of ideal horizontal SHM?",
    "Kinetic energy is zero and potential energy equals the total",
    "Potential energy is zero and speed is largest",
    "Both energies must be zero despite nonzero amplitude",
    "The mass stops momentarily at maximal deformation. All its oscillation energy is then potential, even though the restoring force is nonzero."
   ],
   [
    "With spring potential zero at equilibrium, what happens when a nonzero-amplitude horizontal oscillator crosses equilibrium?",
    "Potential energy is zero and kinetic energy is maximum",
    "Both energy and velocity must be zero",
    "Potential energy is maximum because net force is zero",
    "At minimum deformation the potential is minimized. Conservation places the available oscillation energy in kinetic form at that instant."
   ],
   [
    "For the same ideal spring, what happens to total oscillation energy if amplitude doubles?",
    "It quadruples",
    "It doubles",
    "It is unchanged because period is unchanged",
    "Total energy is one-half kA². Period independence from amplitude does not imply energy independence."
   ],
   [
    "For fixed amplitude on the same ideal horizontal spring, how does changing attached mass affect total oscillation energy?",
    "It does not change the energy one-half kA²",
    "It necessarily doubles whenever mass doubles",
    "It makes energy depend only on initial phase",
    "At the turning point, energy is stored in the spring and depends on stiffness and amplitude. The mass instead affects speed and period for that given energy."
   ],
   [
    "Can spring potential energy differ at x=+a and x=-a for the same ideal horizontal spring and zero at equilibrium?",
    "No, both give the same one-half ka²",
    "Yes, compression always has negative potential energy",
    "Yes, stretching always stores twice as much as equal compression",
    "The squared deformation gives equal energy for equal magnitudes within the ideal linear model. Force direction changes sign, but this energy does not."
   ],
   [
    "Why does an energy equation alone usually determine speed rather than signed velocity?",
    "Kinetic energy contains velocity squared",
    "Kinetic energy must always be negative",
    "Energy conservation selects a unique travel direction at every position",
    "The same position can be passed in either direction with the same speed. A phase or motion history is needed to choose the velocity sign."
   ],
   [
    "For an ideal horizontal oscillator, what is the potential-energy-versus-displacement graph?",
    "An upward-opening parabola with minimum at equilibrium",
    "A straight line with negative slope",
    "A constant positive line independent of displacement",
    "The dependence U=one-half kx² is quadratic and nonnegative for this reference. The straight negative-slope graph belongs to force versus displacement."
   ],
   [
    "For fixed nonzero total energy in ideal horizontal SHM, where are the allowed turning points on the potential-energy graph?",
    "Where potential energy equals total energy",
    "Where potential energy exceeds total energy",
    "Only where potential energy is negative",
    "At a turning point kinetic energy is zero. A region with potential greater than total would require negative kinetic energy and is classically inaccessible."
   ],
   [
    "What does observed mechanical energy loss to resistance do to a freely decaying oscillator's amplitude?",
    "It decreases the amplitude",
    "It leaves amplitude fixed in every cycle",
    "It increases amplitude without any energy source",
    "The turning-point energy scales with amplitude squared. Loss of mechanical energy reduces the accessible displacement extremes unless another source supplies energy."
   ],
   [
    "For a vertical spring oscillator, can one use one-half kx² as the change in combined effective potential from equilibrium when x is extra displacement?",
    "Yes, after including both gravity and spring energy and choosing the equilibrium reference",
    "Yes, it is always the spring's full elastic energy alone",
    "No, gravity makes all potential energy descriptions impossible",
    "The linear gravitational term cancels the cross term from static extension. The remaining oscillation potential is quadratic, but the spring's own total elastic energy uses total extension."
   ],
   [
    "For a small-angle pendulum near its lowest point, how do kinetic and gravitational potential energies exchange?",
    "Speed is greatest at the lowest point and zero at turning points",
    "Speed is greatest at the highest turning point",
    "Potential is constant while speed changes with no work",
    "Gravity transfers energy between height and motion. For an ideal fixed support and negligible resistance, the total mechanical energy is conserved."
   ],
   [
    "If a horizontal spring oscillator has displacement magnitude A/2, what fraction of its total energy is potential?",
    "1/4",
    "1/2",
    "3/4",
    "The potential-to-total ratio is x²/A², so half the amplitude gives one-quarter. The other three-quarters is kinetic energy."
   ],
   [
    "If the total energy of an ideal spring oscillator becomes 9 times as large at fixed stiffness, how does amplitude change?",
    "It becomes 3 times as large",
    "It becomes 9 times as large",
    "It becomes one-ninth as large",
    "Amplitude is proportional to the positive square root of total energy at fixed stiffness. A factor9 in energy therefore gives a factor3 in amplitude."
   ],
   [
    "An ideal horizontal spring oscillator has k=100N/m and amplitude 0.2m, with potential zero at equilibrium. What is total oscillation energy in joules?",
    "2",
    "4",
    "10",
    "At a turning point all oscillation energy is stored in the spring. Its triangular force-displacement area is one-half kA², including the squared amplitude."
   ],
   [
    "An ideal horizontal spring oscillator has k=40N/m and amplitude 0.5m, with potential zero at equilibrium. What is total oscillation energy in joules?",
    "5",
    "10",
    "15",
    "At a turning point all oscillation energy is stored in the spring. Its triangular force-displacement area is one-half kA², including the squared amplitude."
   ],
   [
    "An ideal horizontal spring oscillator has k=200N/m and amplitude 0.1m, with potential zero at equilibrium. What is total oscillation energy in joules?",
    "1",
    "2",
    "10",
    "At a turning point all oscillation energy is stored in the spring. Its triangular force-displacement area is one-half kA², including the squared amplitude."
   ],
   [
    "An ideal horizontal spring oscillator has k=100N/m and amplitude 0.2m. At displacement x=0.1m, what is spring potential energy in joules?",
    "0.5",
    "1",
    "2",
    "The potential is one-half 100×0.1²=0.5J. The total energy 2J uses the amplitude rather than the current displacement."
   ],
   [
    "An ideal horizontal spring oscillator has k=100N/m and amplitude 0.2m. At displacement x=0.1m, what is kinetic energy in joules?",
    "1.5",
    "0.5",
    "2",
    "Total energy is 2J and current potential 0.5J. Their difference 1.5J is kinetic energy; the energy forms must not be confused."
   ],
   [
    "An ideal horizontal spring oscillator has mass 1kg, stiffness 100N/m and amplitude 0.2m. What is its maximum speed in m/s?",
    "2",
    "4",
    "20",
    "At equilibrium its total 2J is kinetic, so one-half times speed squared equals 2. The maximum speed is 2m/s, not its square 4."
   ],
   [
    "An ideal horizontal spring oscillator has total energy 8J and stiffness 100N/m. What is its amplitude in meters?",
    "0.4",
    "0.16",
    "4",
    "The amplitude must satisfy 50A²=8, so A²=0.16m² and A=0.4m. Squared amplitude is not a length."
   ],
   [
    "An ideal oscillator initially has amplitude 0.3m. Its total energy falls to one-quarter of its original value at unchanged stiffness. What is the new amplitude in meters?",
    "0.15",
    "0.075",
    "0.6",
    "Energy scales with amplitude squared, so an energy factor one-quarter gives an amplitude factor one-half. Half of 0.3m is 0.15m."
   ],
   [
    "An ideal horizontal spring oscillator has mass 2kg, stiffness 50N/m, displacement 0.2m and speed 3m/s at one instant. What is total mechanical energy in joules with potential zero at equilibrium?",
    "10",
    "9",
    "1",
    "The instantaneous kinetic energy is 9J and spring potential 1J. Their sum 10J determines the oscillation energy; either term alone is incomplete."
   ],
   [
    "A horizontal mass-spring system has mass 2kg and total oscillation energy 9J. At a position where potential energy is 5J, what is speed in m/s?",
    "2",
    "4",
    "3",
    "Kinetic energy is 4J. Since one-half times mass 2 times speed squared equals 4, the speed is 2m/s."
   ],
   [
    "A point-like pendulum bob of mass 2kg moves between a turning point and its lowest point, dropping vertically 0.1m with negligible losses. Use g=10m/s². What is its maximum kinetic energy in joules?",
    "2",
    "1",
    "0.2",
    "The gravitational potential decrease is mgh=2J. Starting at rest at the turning point, that entire decrease becomes kinetic energy at the bottom."
   ],
   [
    "An ideal horizontal oscillator has total energy 12J. At displacement magnitude A/2, what is kinetic energy in joules?",
    "9",
    "3",
    "6",
    "One-quarter of the total is potential at half amplitude, leaving three-quarters kinetic. Three-quarters of 12J is 9J."
   ]
  ],
  "check": [
   "An ideal horizontal oscillator has total energy 20J and potential energy 5J at one instant. What is its kinetic energy?",
   "15J",
   "25J",
   "5J",
   "Subtract the potential from the conserved total:20-5=15J."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "The energy total stays fixed",
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
      217.5,
      61
     ],
     "P7": [
      217.5,
      56
     ],
     "P8": [
      315,
      61
     ],
     "P9": [
      315,
      56
     ],
     "P10": [
      412.50000000000006,
      61
     ],
     "P11": [
      412.50000000000006,
      56
     ],
     "P12": [
      510,
      61
     ],
     "P13": [
      510,
      56
     ],
     "P14": [
      115,
      61
     ],
     "P15": [
      120,
      61
     ],
     "P16": [
      115,
      88.08333333333334
     ],
     "P17": [
      120,
      88.08333333333334
     ],
     "P18": [
      115,
      142.25
     ],
     "P19": [
      120,
      142.25
     ],
     "P20": [
      115,
      169.33333333333334
     ],
     "P21": [
      120,
      169.33333333333334
     ],
     "P22": [
      120,
      169.33333333333334
     ],
     "P23": [
      124.875,
      163.984375
     ],
     "P24": [
      120,
      61
     ],
     "P25": [
      124.875,
      66.34895833333331
     ],
     "P26": [
      124.875,
      163.984375
     ],
     "P27": [
      129.75,
      158.77083333333331
     ],
     "P28": [
      124.875,
      66.34895833333331
     ],
     "P29": [
      129.75,
      71.5625
     ],
     "P30": [
      129.75,
      158.77083333333331
     ],
     "P31": [
      134.625,
      153.69270833333331
     ],
     "P32": [
      129.75,
      71.5625
     ],
     "P33": [
      134.625,
      76.640625
     ],
     "P34": [
      134.625,
      153.69270833333331
     ],
     "P35": [
      139.50000000000003,
      148.75
     ],
     "P36": [
      134.625,
      76.640625
     ],
     "P37": [
      139.50000000000003,
      81.58333333333334
     ],
     "P38": [
      139.5,
      148.75000000000003
     ],
     "P39": [
      144.375,
      143.94270833333337
     ],
     "P40": [
      139.5,
      81.58333333333331
     ],
     "P41": [
      144.375,
      86.390625
     ],
     "P42": [
      144.375,
      143.94270833333337
     ],
     "P43": [
      149.25,
      139.27083333333334
     ],
     "P44": [
      144.375,
      86.390625
     ],
     "P45": [
      149.25,
      91.0625
     ],
     "P46": [
      149.25,
      139.27083333333334
     ],
     "P47": [
      154.125,
      134.734375
     ],
     "P48": [
      149.25,
      91.0625
     ],
     "P49": [
      154.125,
      95.59895833333331
     ],
     "P50": [
      154.125,
      134.734375
     ],
     "P51": [
      159,
      130.33333333333331
     ],
     "P52": [
      154.125,
      95.59895833333331
     ],
     "P53": [
      159,
      100
     ],
     "P54": [
      159,
      130.33333333333331
     ],
     "P55": [
      163.875,
      126.06770833333331
     ],
     "P56": [
      159,
      100
     ],
     "P57": [
      163.875,
      104.265625
     ],
     "P58": [
      163.875,
      126.06770833333337
     ],
     "P59": [
      168.75,
      121.9375
     ],
     "P60": [
      163.875,
      104.26562499999997
     ],
     "P61": [
      168.75,
      108.39583333333331
     ],
     "P62": [
      168.75,
      121.9375
     ],
     "P63": [
      173.625,
      117.94270833333334
     ],
     "P64": [
      168.75,
      108.39583333333331
     ],
     "P65": [
      173.625,
      112.390625
     ],
     "P66": [
      173.625,
      117.94270833333334
     ],
     "P67": [
      178.5,
      114.08333333333334
     ],
     "P68": [
      173.625,
      112.390625
     ],
     "P69": [
      178.5,
      116.25
     ],
     "P70": [
      178.5,
      114.08333333333334
     ],
     "P71": [
      183.375,
      110.359375
     ],
     "P72": [
      178.5,
      116.25
     ],
     "P73": [
      183.375,
      119.97395833333331
     ],
     "P74": [
      183.375,
      110.359375
     ],
     "P75": [
      188.25,
      106.77083333333334
     ],
     "P76": [
      183.375,
      119.97395833333331
     ],
     "P77": [
      188.25,
      123.5625
     ],
     "P78": [
      188.25,
      106.77083333333334
     ],
     "P79": [
      193.125,
      103.31770833333334
     ],
     "P80": [
      188.25,
      123.5625
     ],
     "P81": [
      193.125,
      127.015625
     ],
     "P82": [
      193.125,
      103.31770833333334
     ],
     "P83": [
      198,
      100
     ],
     "P84": [
      193.125,
      127.015625
     ],
     "P85": [
      198,
      130.33333333333331
     ],
     "P86": [
      198,
      100
     ],
     "P87": [
      202.875,
      96.81770833333334
     ],
     "P88": [
      198,
      130.33333333333331
     ],
     "P89": [
      202.875,
      133.515625
     ],
     "P90": [
      202.875,
      96.81770833333334
     ],
     "P91": [
      207.75,
      93.77083333333334
     ],
     "P92": [
      202.875,
      133.515625
     ],
     "P93": [
      207.75,
      136.5625
     ],
     "P94": [
      207.75,
      93.77083333333334
     ],
     "P95": [
      212.625,
      90.859375
     ],
     "P96": [
      207.75,
      136.5625
     ],
     "P97": [
      212.625,
      139.47395833333331
     ],
     "P98": [
      212.625,
      90.859375
     ],
     "P99": [
      217.5,
      88.08333333333334
     ],
     "P100": [
      212.625,
      139.47395833333331
     ],
     "P101": [
      217.5,
      142.25
     ],
     "P102": [
      217.5,
      88.08333333333334
     ],
     "P103": [
      222.375,
      85.44270833333334
     ],
     "P104": [
      217.5,
      142.25
     ],
     "P105": [
      222.375,
      144.890625
     ],
     "P106": [
      222.375,
      85.44270833333334
     ],
     "P107": [
      227.25,
      82.9375
     ],
     "P108": [
      222.375,
      144.890625
     ],
     "P109": [
      227.25,
      147.39583333333331
     ],
     "P110": [
      227.25,
      82.9375
     ],
     "P111": [
      232.125,
      80.56770833333334
     ],
     "P112": [
      227.25,
      147.39583333333331
     ],
     "P113": [
      232.125,
      149.765625
     ],
     "P114": [
      232.125,
      80.56770833333334
     ],
     "P115": [
      237,
      78.33333333333334
     ],
     "P116": [
      232.125,
      149.765625
     ],
     "P117": [
      237,
      152
     ],
     "P118": [
      237,
      78.33333333333334
     ],
     "P119": [
      241.875,
      76.234375
     ],
     "P120": [
      237,
      152
     ],
     "P121": [
      241.875,
      154.09895833333334
     ],
     "P122": [
      241.875,
      76.234375
     ],
     "P123": [
      246.75,
      74.27083333333334
     ],
     "P124": [
      241.875,
      154.09895833333334
     ],
     "P125": [
      246.75,
      156.0625
     ],
     "P126": [
      246.75,
      74.27083333333334
     ],
     "P127": [
      251.625,
      72.44270833333334
     ],
     "P128": [
      246.75,
      156.0625
     ],
     "P129": [
      251.625,
      157.890625
     ],
     "P130": [
      251.625,
      72.44270833333334
     ],
     "P131": [
      256.5,
      70.75
     ],
     "P132": [
      251.625,
      157.890625
     ],
     "P133": [
      256.5,
      159.58333333333331
     ],
     "P134": [
      256.5,
      70.75
     ],
     "P135": [
      261.375,
      69.19270833333334
     ],
     "P136": [
      256.5,
      159.58333333333334
     ],
     "P137": [
      261.375,
      161.140625
     ],
     "P138": [
      261.375,
      69.19270833333334
     ],
     "P139": [
      266.25,
      67.77083333333334
     ],
     "P140": [
      261.375,
      161.140625
     ],
     "P141": [
      266.25,
      162.5625
     ],
     "P142": [
      266.25,
      67.77083333333334
     ],
     "P143": [
      271.125,
      66.484375
     ],
     "P144": [
      266.25,
      162.5625
     ],
     "P145": [
      271.125,
      163.84895833333331
     ],
     "P146": [
      271.125,
      66.484375
     ],
     "P147": [
      276,
      65.33333333333334
     ],
     "P148": [
      271.125,
      163.84895833333331
     ],
     "P149": [
      276,
      165
     ],
     "P150": [
      276,
      65.33333333333334
     ],
     "P151": [
      280.875,
      64.31770833333334
     ],
     "P152": [
      276,
      165
     ],
     "P153": [
      280.875,
      166.015625
     ],
     "P154": [
      280.875,
      64.31770833333334
     ],
     "P155": [
      285.75,
      63.4375
     ],
     "P156": [
      280.875,
      166.015625
     ],
     "P157": [
      285.75,
      166.89583333333334
     ],
     "P158": [
      285.75,
      63.4375
     ],
     "P159": [
      290.625,
      62.69270833333334
     ],
     "P160": [
      285.75,
      166.89583333333334
     ],
     "P161": [
      290.625,
      167.640625
     ],
     "P162": [
      290.625,
      62.69270833333334
     ],
     "P163": [
      295.5,
      62.08333333333334
     ],
     "P164": [
      290.625,
      167.640625
     ],
     "P165": [
      295.5,
      168.25
     ],
     "P166": [
      295.5,
      62.08333333333334
     ],
     "P167": [
      300.375,
      61.609375
     ],
     "P168": [
      295.5,
      168.25
     ],
     "P169": [
      300.375,
      168.72395833333334
     ],
     "P170": [
      300.375,
      61.609375
     ],
     "P171": [
      305.25,
      61.27083333333334
     ],
     "P172": [
      300.375,
      168.72395833333334
     ],
     "P173": [
      305.25,
      169.0625
     ],
     "P174": [
      305.25,
      61.27083333333334
     ],
     "P175": [
      310.125,
      61.06770833333334
     ],
     "P176": [
      305.25,
      169.0625
     ],
     "P177": [
      310.125,
      169.265625
     ],
     "P178": [
      310.125,
      61.06770833333334
     ],
     "P179": [
      315,
      61
     ],
     "P180": [
      310.125,
      169.265625
     ],
     "P181": [
      315,
      169.33333333333334
     ],
     "P182": [
      315,
      61
     ],
     "P183": [
      319.875,
      61.06770833333334
     ],
     "P184": [
      315,
      169.33333333333334
     ],
     "P185": [
      319.875,
      169.265625
     ],
     "P186": [
      319.875,
      61.06770833333334
     ],
     "P187": [
      324.75,
      61.27083333333334
     ],
     "P188": [
      319.875,
      169.265625
     ],
     "P189": [
      324.75,
      169.0625
     ],
     "P190": [
      324.75,
      61.27083333333334
     ],
     "P191": [
      329.625,
      61.609375
     ],
     "P192": [
      324.75,
      169.0625
     ],
     "P193": [
      329.625,
      168.72395833333334
     ],
     "P194": [
      329.625,
      61.609375
     ],
     "P195": [
      334.5,
      62.08333333333334
     ],
     "P196": [
      329.625,
      168.72395833333334
     ],
     "P197": [
      334.5,
      168.25
     ],
     "P198": [
      334.5,
      62.08333333333334
     ],
     "P199": [
      339.375,
      62.69270833333334
     ],
     "P200": [
      334.5,
      168.25
     ],
     "P201": [
      339.375,
      167.640625
     ],
     "P202": [
      339.375,
      62.69270833333334
     ],
     "P203": [
      344.25,
      63.4375
     ],
     "P204": [
      339.375,
      167.640625
     ],
     "P205": [
      344.25,
      166.89583333333334
     ],
     "P206": [
      344.25,
      63.4375
     ],
     "P207": [
      349.125,
      64.31770833333334
     ],
     "P208": [
      344.25,
      166.89583333333334
     ],
     "P209": [
      349.125,
      166.015625
     ],
     "P210": [
      349.125,
      64.31770833333334
     ],
     "P211": [
      354,
      65.33333333333334
     ],
     "P212": [
      349.125,
      166.015625
     ],
     "P213": [
      354,
      165
     ],
     "P214": [
      354,
      65.33333333333331
     ],
     "P215": [
      358.875,
      66.484375
     ],
     "P216": [
      354,
      165
     ],
     "P217": [
      358.875,
      163.84895833333334
     ],
     "P218": [
      358.875,
      66.484375
     ],
     "P219": [
      363.75,
      67.77083333333334
     ],
     "P220": [
      358.875,
      163.84895833333334
     ],
     "P221": [
      363.75,
      162.5625
     ],
     "P222": [
      363.75,
      67.77083333333334
     ],
     "P223": [
      368.625,
      69.19270833333331
     ],
     "P224": [
      363.75,
      162.5625
     ],
     "P225": [
      368.625,
      161.140625
     ],
     "P226": [
      368.625,
      69.19270833333334
     ],
     "P227": [
      373.5,
      70.75
     ],
     "P228": [
      368.625,
      161.140625
     ],
     "P229": [
      373.5,
      159.58333333333334
     ],
     "P230": [
      373.5,
      70.75
     ],
     "P231": [
      378.375,
      72.44270833333334
     ],
     "P232": [
      373.5,
      159.58333333333334
     ],
     "P233": [
      378.375,
      157.890625
     ],
     "P234": [
      378.375,
      72.44270833333334
     ],
     "P235": [
      383.25,
      74.27083333333334
     ],
     "P236": [
      378.375,
      157.890625
     ],
     "P237": [
      383.25,
      156.0625
     ],
     "P238": [
      383.25,
      74.27083333333334
     ],
     "P239": [
      388.125,
      76.234375
     ],
     "P240": [
      383.25,
      156.0625
     ],
     "P241": [
      388.125,
      154.09895833333334
     ],
     "P242": [
      388.125,
      76.234375
     ],
     "P243": [
      393,
      78.33333333333334
     ],
     "P244": [
      388.125,
      154.09895833333334
     ],
     "P245": [
      393,
      152
     ],
     "P246": [
      393,
      78.33333333333334
     ],
     "P247": [
      397.875,
      80.56770833333334
     ],
     "P248": [
      393,
      152
     ],
     "P249": [
      397.875,
      149.765625
     ],
     "P250": [
      397.875,
      80.56770833333334
     ],
     "P251": [
      402.75000000000006,
      82.9375
     ],
     "P252": [
      397.875,
      149.765625
     ],
     "P253": [
      402.75000000000006,
      147.39583333333331
     ],
     "P254": [
      402.74999999999994,
      82.93749999999997
     ],
     "P255": [
      407.625,
      85.44270833333331
     ],
     "P256": [
      402.74999999999994,
      147.39583333333334
     ],
     "P257": [
      407.625,
      144.89062500000003
     ],
     "P258": [
      407.625,
      85.44270833333331
     ],
     "P259": [
      412.49999999999994,
      88.08333333333331
     ],
     "P260": [
      407.625,
      144.89062500000003
     ],
     "P261": [
      412.49999999999994,
      142.25
     ],
     "P262": [
      412.49999999999994,
      88.08333333333331
     ],
     "P263": [
      417.375,
      90.859375
     ],
     "P264": [
      412.49999999999994,
      142.25
     ],
     "P265": [
      417.375,
      139.47395833333334
     ],
     "P266": [
      417.375,
      90.859375
     ],
     "P267": [
      422.24999999999994,
      93.77083333333331
     ],
     "P268": [
      417.375,
      139.47395833333334
     ],
     "P269": [
      422.24999999999994,
      136.5625
     ],
     "P270": [
      422.24999999999994,
      93.77083333333331
     ],
     "P271": [
      427.125,
      96.81770833333334
     ],
     "P272": [
      422.24999999999994,
      136.5625
     ],
     "P273": [
      427.125,
      133.515625
     ],
     "P274": [
      427.125,
      96.81770833333334
     ],
     "P275": [
      432,
      100
     ],
     "P276": [
      427.125,
      133.515625
     ],
     "P277": [
      432,
      130.33333333333331
     ],
     "P278": [
      432,
      100
     ],
     "P279": [
      436.875,
      103.31770833333334
     ],
     "P280": [
      432,
      130.33333333333331
     ],
     "P281": [
      436.875,
      127.015625
     ],
     "P282": [
      436.875,
      103.31770833333334
     ],
     "P283": [
      441.75,
      106.77083333333334
     ],
     "P284": [
      436.875,
      127.015625
     ],
     "P285": [
      441.75,
      123.5625
     ],
     "P286": [
      441.75,
      106.77083333333334
     ],
     "P287": [
      446.625,
      110.359375
     ],
     "P288": [
      441.75,
      123.5625
     ],
     "P289": [
      446.625,
      119.97395833333331
     ],
     "P290": [
      446.625,
      110.359375
     ],
     "P291": [
      451.5,
      114.08333333333334
     ],
     "P292": [
      446.625,
      119.97395833333331
     ],
     "P293": [
      451.5,
      116.25
     ],
     "P294": [
      451.5,
      114.08333333333334
     ],
     "P295": [
      456.375,
      117.94270833333334
     ],
     "P296": [
      451.5,
      116.25
     ],
     "P297": [
      456.375,
      112.390625
     ],
     "P298": [
      456.375,
      117.94270833333334
     ],
     "P299": [
      461.25,
      121.9375
     ],
     "P300": [
      456.375,
      112.390625
     ],
     "P301": [
      461.25,
      108.39583333333331
     ],
     "P302": [
      461.25,
      121.9375
     ],
     "P303": [
      466.125,
      126.06770833333337
     ],
     "P304": [
      461.25,
      108.39583333333331
     ],
     "P305": [
      466.125,
      104.26562499999997
     ],
     "P306": [
      466.125,
      126.06770833333331
     ],
     "P307": [
      470.99999999999994,
      130.33333333333331
     ],
     "P308": [
      466.125,
      104.26562500000003
     ],
     "P309": [
      470.99999999999994,
      100.00000000000003
     ],
     "P310": [
      470.99999999999994,
      130.33333333333331
     ],
     "P311": [
      475.875,
      134.734375
     ],
     "P312": [
      470.99999999999994,
      100.00000000000003
     ],
     "P313": [
      475.875,
      95.59895833333337
     ],
     "P314": [
      475.875,
      134.734375
     ],
     "P315": [
      480.75,
      139.27083333333331
     ],
     "P316": [
      475.875,
      95.59895833333337
     ],
     "P317": [
      480.75,
      91.0625
     ],
     "P318": [
      480.75,
      139.27083333333331
     ],
     "P319": [
      485.625,
      143.94270833333334
     ],
     "P320": [
      480.75,
      91.0625
     ],
     "P321": [
      485.625,
      86.390625
     ],
     "P322": [
      485.625,
      143.94270833333334
     ],
     "P323": [
      490.5,
      148.75
     ],
     "P324": [
      485.625,
      86.390625
     ],
     "P325": [
      490.5,
      81.58333333333334
     ],
     "P326": [
      490.5,
      148.75
     ],
     "P327": [
      495.375,
      153.69270833333331
     ],
     "P328": [
      490.5,
      81.58333333333334
     ],
     "P329": [
      495.375,
      76.640625
     ],
     "P330": [
      495.375,
      153.69270833333331
     ],
     "P331": [
      500.25,
      158.77083333333331
     ],
     "P332": [
      495.375,
      76.640625
     ],
     "P333": [
      500.25,
      71.5625
     ],
     "P334": [
      500.25,
      158.77083333333331
     ],
     "P335": [
      505.125,
      163.984375
     ],
     "P336": [
      500.25,
      71.5625
     ],
     "P337": [
      505.125,
      66.34895833333331
     ],
     "P338": [
      505.125,
      163.984375
     ],
     "P339": [
      510,
      169.33333333333334
     ],
     "P340": [
      505.125,
      66.34895833333331
     ],
     "P341": [
      510,
      61
     ],
     "P342": [
      120,
      169.33333333333334
     ],
     "P343": [
      510,
      169.33333333333334
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323P324P325P326P327P328P329P330P331P332P333P334P335P336P337P338P339P340P341P342P343",
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "v": "P160P161",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P162P163",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P164P165",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P166P167",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P168P169",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P170P171",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P172P173",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P174P175",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P176P177",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P178P179",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P180P181",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P182P183",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P184P185",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P186P187",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P188P189",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P190P191",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P192P193",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P194P195",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P196P197",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P198P199",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P200P201",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P202P203",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P204P205",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P206P207",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P208P209",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P210P211",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P212P213",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P214P215",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P216P217",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P218P219",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P220P221",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P222P223",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P224P225",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P226P227",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P228P229",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P230P231",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P232P233",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P234P235",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P236P237",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P238P239",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P240P241",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P242P243",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P244P245",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P246P247",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P248P249",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P250P251",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P252P253",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P254P255",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P256P257",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P258P259",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P260P261",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P262P263",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P264P265",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P266P267",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P268P269",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P270P271",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P272P273",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P274P275",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P276P277",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P278P279",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P280P281",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P282P283",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P284P285",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P286P287",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P288P289",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P290P291",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P292P293",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P294P295",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P296P297",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P298P299",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P300P301",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P302P303",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P304P305",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P306P307",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P308P309",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P310P311",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P312P313",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P314P315",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P316P317",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P318P319",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P320P321",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P322P323",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P324P325",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P326P327",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P328P329",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P330P331",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P332P333",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P334P335",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P336P337",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P338P339",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P340P341",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P342P343",
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
       320,
       27
      ],
      "text": "Displacement x (m)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Energy (J)",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "-0.2",
      "col": 0
     },
     {
      "at": [
       217.5,
       41
      ],
      "text": "-0.1",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       412.50000000000006,
       41
      ],
      "text": "0.1",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "0.2",
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
       83.08333333333334
      ],
      "text": "0.5",
      "col": 0
     },
     {
      "at": [
       97,
       137.25
      ],
      "text": "1.5",
      "col": 0
     },
     {
      "at": [
       97,
       164.33333333333334
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       268,
       214
      ],
      "text": "Potential U",
      "col": 0
     },
     {
      "at": [
       390,
       214
      ],
      "text": "Kinetic K",
      "col": 1
     },
     {
      "at": [
       505,
       214
      ],
      "text": "Total 2J",
      "col": 2
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Horizontal oscillator: k = 100N/m, A = 0.2m",
    "head": "Position",
    "cols": [
     "U(J)",
     "K(J)"
    ],
    "rows": [
     [
      "x=0",
      "0",
      "2"
     ],
     [
      "x=0.1m",
      "0.5",
      "1.5"
     ],
     [
      "x=0.2m",
      "2",
      "0"
     ]
    ]
   },
   null,
   {
    "t": "figure",
    "title": "Energy exchanges during a whole motion cycle",
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
      217.5,
      61
     ],
     "P7": [
      217.5,
      56
     ],
     "P8": [
      315,
      61
     ],
     "P9": [
      315,
      56
     ],
     "P10": [
      412.5,
      61
     ],
     "P11": [
      412.5,
      56
     ],
     "P12": [
      510,
      61
     ],
     "P13": [
      510,
      56
     ],
     "P14": [
      115,
      61
     ],
     "P15": [
      120,
      61
     ],
     "P16": [
      115,
      115.16666666666669
     ],
     "P17": [
      120,
      115.16666666666669
     ],
     "P18": [
      115,
      169.33333333333334
     ],
     "P19": [
      120,
      169.33333333333334
     ],
     "P20": [
      120,
      169.33333333333334
     ],
     "P21": [
      123.9,
      168.90621298786755
     ],
     "P22": [
      120,
      61
     ],
     "P23": [
      123.9,
      61.427120345465795
     ],
     "P24": [
      123.9,
      168.90621298786755
     ],
     "P25": [
      127.8,
      167.63158789446754
     ],
     "P26": [
      123.9,
      61.427120345465795
     ],
     "P27": [
      127.8,
      62.70174543886583
     ],
     "P28": [
      127.8,
      167.63158789446754
     ],
     "P29": [
      131.7,
      165.52955965228028
     ],
     "P30": [
      127.8,
      62.70174543886583
     ],
     "P31": [
      131.7,
      64.80377368105306
     ],
     "P32": [
      131.7,
      165.52955965228028
     ],
     "P33": [
      135.6,
      162.63327850237596
     ],
     "P34": [
      131.7,
      64.80377368105306
     ],
     "P35": [
      135.6,
      67.70005483095738
     ],
     "P36": [
      135.6,
      162.63327850237596
     ],
     "P37": [
      139.5,
      158.98842052864296
     ],
     "P38": [
      135.6,
      67.70005483095738
     ],
     "P39": [
      139.5,
      71.34491280469035
     ],
     "P40": [
      139.5,
      158.98842052864296
     ],
     "P41": [
      143.4,
      154.6524673186598
     ],
     "P42": [
      139.5,
      71.34491280469035
     ],
     "P43": [
      143.4,
      75.68086601467354
     ],
     "P44": [
      143.4,
      154.6524673186598
     ],
     "P45": [
      147.3,
      149.6937994447207
     ],
     "P46": [
      143.4,
      75.68086601467354
     ],
     "P47": [
      147.3,
      80.63953388861265
     ],
     "P48": [
      147.3,
      149.6937994447207
     ],
     "P49": [
      151.2,
      144.19061806136233
     ],
     "P50": [
      147.3,
      80.63953388861265
     ],
     "P51": [
      151.2,
      86.14271527197101
     ],
     "P52": [
      151.2,
      144.19061806136233
     ],
     "P53": [
      155.1,
      138.22971162644143
     ],
     "P54": [
      151.2,
      86.14271527197101
     ],
     "P55": [
      155.1,
      92.10362170689191
     ],
     "P56": [
      155.1,
      138.22971162644143
     ],
     "P57": [
      159,
      131.90508719530965
     ],
     "P58": [
      155.1,
      92.10362170689191
     ],
     "P59": [
      159,
      98.42824613802367
     ],
     "P60": [
      159,
      131.90508719530965
     ],
     "P61": [
      162.9,
      125.31648787339341
     ],
     "P62": [
      159,
      98.42824613802367
     ],
     "P63": [
      162.9,
      105.0168454599399
     ],
     "P64": [
      162.9,
      125.31648787339341
     ],
     "P65": [
      166.8,
      118.56781980783782
     ],
     "P66": [
      162.9,
      105.0168454599399
     ],
     "P67": [
      166.8,
      111.76551352549552
     ],
     "P68": [
      166.8,
      118.56781980783782
     ],
     "P69": [
      170.7,
      111.76551352549552
     ],
     "P70": [
      166.8,
      111.76551352549552
     ],
     "P71": [
      170.7,
      118.56781980783782
     ],
     "P72": [
      170.7,
      111.76551352549552
     ],
     "P73": [
      174.60000000000002,
      105.0168454599399
     ],
     "P74": [
      170.7,
      118.56781980783782
     ],
     "P75": [
      174.60000000000002,
      125.31648787339341
     ],
     "P76": [
      174.60000000000002,
      105.0168454599399
     ],
     "P77": [
      178.5,
      98.42824613802367
     ],
     "P78": [
      174.60000000000002,
      125.31648787339341
     ],
     "P79": [
      178.5,
      131.90508719530965
     ],
     "P80": [
      178.5,
      98.42824613802367
     ],
     "P81": [
      182.4,
      92.10362170689189
     ],
     "P82": [
      178.5,
      131.90508719530965
     ],
     "P83": [
      182.4,
      138.22971162644143
     ],
     "P84": [
      182.4,
      92.10362170689189
     ],
     "P85": [
      186.3,
      86.14271527197101
     ],
     "P86": [
      182.4,
      138.22971162644143
     ],
     "P87": [
      186.3,
      144.19061806136233
     ],
     "P88": [
      186.3,
      86.14271527197101
     ],
     "P89": [
      190.2,
      80.63953388861265
     ],
     "P90": [
      186.3,
      144.19061806136233
     ],
     "P91": [
      190.2,
      149.6937994447207
     ],
     "P92": [
      190.2,
      80.63953388861265
     ],
     "P93": [
      194.1,
      75.68086601467354
     ],
     "P94": [
      190.2,
      149.6937994447207
     ],
     "P95": [
      194.1,
      154.65246731865977
     ],
     "P96": [
      194.1,
      75.68086601467354
     ],
     "P97": [
      198,
      71.34491280469035
     ],
     "P98": [
      194.1,
      154.65246731865977
     ],
     "P99": [
      198,
      158.98842052864296
     ],
     "P100": [
      198,
      71.34491280469035
     ],
     "P101": [
      201.89999999999998,
      67.70005483095741
     ],
     "P102": [
      198,
      158.98842052864296
     ],
     "P103": [
      201.89999999999998,
      162.63327850237596
     ],
     "P104": [
      201.89999999999998,
      67.70005483095741
     ],
     "P105": [
      205.8,
      64.80377368105306
     ],
     "P106": [
      201.89999999999998,
      162.63327850237596
     ],
     "P107": [
      205.8,
      165.52955965228028
     ],
     "P108": [
      205.8,
      64.80377368105306
     ],
     "P109": [
      209.7,
      62.70174543886583
     ],
     "P110": [
      205.8,
      165.52955965228028
     ],
     "P111": [
      209.7,
      167.63158789446754
     ],
     "P112": [
      209.7,
      62.70174543886583
     ],
     "P113": [
      213.6,
      61.427120345465795
     ],
     "P114": [
      209.7,
      167.63158789446754
     ],
     "P115": [
      213.6,
      168.90621298786755
     ],
     "P116": [
      213.6,
      61.427120345465795
     ],
     "P117": [
      217.5,
      61
     ],
     "P118": [
      213.6,
      168.90621298786755
     ],
     "P119": [
      217.5,
      169.33333333333334
     ],
     "P120": [
      217.5,
      61
     ],
     "P121": [
      221.4,
      61.427120345465795
     ],
     "P122": [
      217.5,
      169.33333333333334
     ],
     "P123": [
      221.4,
      168.90621298786755
     ],
     "P124": [
      221.4,
      61.427120345465795
     ],
     "P125": [
      225.3,
      62.70174543886583
     ],
     "P126": [
      221.4,
      168.90621298786755
     ],
     "P127": [
      225.3,
      167.6315878944675
     ],
     "P128": [
      225.3,
      62.70174543886583
     ],
     "P129": [
      229.20000000000002,
      64.80377368105306
     ],
     "P130": [
      225.3,
      167.6315878944675
     ],
     "P131": [
      229.20000000000002,
      165.52955965228028
     ],
     "P132": [
      229.20000000000002,
      64.80377368105306
     ],
     "P133": [
      233.1,
      67.70005483095738
     ],
     "P134": [
      229.20000000000002,
      165.52955965228028
     ],
     "P135": [
      233.1,
      162.63327850237596
     ],
     "P136": [
      233.1,
      67.70005483095738
     ],
     "P137": [
      237,
      71.34491280469035
     ],
     "P138": [
      233.1,
      162.63327850237596
     ],
     "P139": [
      237,
      158.988420528643
     ],
     "P140": [
      237,
      71.34491280469035
     ],
     "P141": [
      240.9,
      75.68086601467354
     ],
     "P142": [
      237,
      158.988420528643
     ],
     "P143": [
      240.9,
      154.65246731865977
     ],
     "P144": [
      240.9,
      75.68086601467354
     ],
     "P145": [
      244.8,
      80.63953388861265
     ],
     "P146": [
      240.9,
      154.65246731865977
     ],
     "P147": [
      244.8,
      149.6937994447207
     ],
     "P148": [
      244.8,
      80.63953388861265
     ],
     "P149": [
      248.70000000000002,
      86.14271527197104
     ],
     "P150": [
      244.8,
      149.6937994447207
     ],
     "P151": [
      248.70000000000002,
      144.19061806136233
     ],
     "P152": [
      248.70000000000002,
      86.14271527197104
     ],
     "P153": [
      252.60000000000002,
      92.10362170689194
     ],
     "P154": [
      248.70000000000002,
      144.19061806136233
     ],
     "P155": [
      252.60000000000002,
      138.22971162644143
     ],
     "P156": [
      252.60000000000002,
      92.10362170689194
     ],
     "P157": [
      256.5,
      98.42824613802367
     ],
     "P158": [
      252.60000000000002,
      138.22971162644143
     ],
     "P159": [
      256.5,
      131.90508719530965
     ],
     "P160": [
      256.5,
      98.42824613802367
     ],
     "P161": [
      260.4,
      105.01684545993993
     ],
     "P162": [
      256.5,
      131.90508719530965
     ],
     "P163": [
      260.4,
      125.31648787339341
     ],
     "P164": [
      260.4,
      105.01684545993993
     ],
     "P165": [
      264.3,
      111.76551352549552
     ],
     "P166": [
      260.4,
      125.31648787339341
     ],
     "P167": [
      264.3,
      118.5678198078378
     ],
     "P168": [
      264.3,
      111.76551352549552
     ],
     "P169": [
      268.2,
      118.5678198078378
     ],
     "P170": [
      264.3,
      118.5678198078378
     ],
     "P171": [
      268.2,
      111.76551352549555
     ],
     "P172": [
      268.2,
      118.5678198078378
     ],
     "P173": [
      272.1,
      125.31648787339341
     ],
     "P174": [
      268.2,
      111.76551352549555
     ],
     "P175": [
      272.1,
      105.01684545993993
     ],
     "P176": [
      272.1,
      125.31648787339341
     ],
     "P177": [
      276,
      131.90508719530965
     ],
     "P178": [
      272.1,
      105.01684545993993
     ],
     "P179": [
      276,
      98.4282461380237
     ],
     "P180": [
      276,
      131.90508719530965
     ],
     "P181": [
      279.9,
      138.2297116264414
     ],
     "P182": [
      276,
      98.4282461380237
     ],
     "P183": [
      279.9,
      92.10362170689194
     ],
     "P184": [
      279.9,
      138.2297116264414
     ],
     "P185": [
      283.79999999999995,
      144.19061806136227
     ],
     "P186": [
      279.9,
      92.10362170689194
     ],
     "P187": [
      283.79999999999995,
      86.14271527197104
     ],
     "P188": [
      283.79999999999995,
      144.19061806136227
     ],
     "P189": [
      287.7,
      149.69379944472067
     ],
     "P190": [
      283.79999999999995,
      86.14271527197104
     ],
     "P191": [
      287.7,
      80.63953388861268
     ],
     "P192": [
      287.7,
      149.69379944472067
     ],
     "P193": [
      291.6,
      154.65246731865977
     ],
     "P194": [
      287.7,
      80.63953388861268
     ],
     "P195": [
      291.6,
      75.68086601467357
     ],
     "P196": [
      291.6,
      154.65246731865977
     ],
     "P197": [
      295.5,
      158.98842052864296
     ],
     "P198": [
      291.6,
      75.68086601467357
     ],
     "P199": [
      295.5,
      71.34491280469035
     ],
     "P200": [
      295.5,
      158.98842052864296
     ],
     "P201": [
      299.4,
      162.63327850237596
     ],
     "P202": [
      295.5,
      71.34491280469035
     ],
     "P203": [
      299.4,
      67.70005483095738
     ],
     "P204": [
      299.4,
      162.63327850237596
     ],
     "P205": [
      303.29999999999995,
      165.52955965228028
     ],
     "P206": [
      299.4,
      67.70005483095738
     ],
     "P207": [
      303.29999999999995,
      64.80377368105306
     ],
     "P208": [
      303.29999999999995,
      165.52955965228028
     ],
     "P209": [
      307.2,
      167.6315878944675
     ],
     "P210": [
      303.29999999999995,
      64.80377368105306
     ],
     "P211": [
      307.2,
      62.70174543886583
     ],
     "P212": [
      307.2,
      167.6315878944675
     ],
     "P213": [
      311.1,
      168.90621298786755
     ],
     "P214": [
      307.2,
      62.70174543886583
     ],
     "P215": [
      311.1,
      61.427120345465795
     ],
     "P216": [
      311.1,
      168.90621298786755
     ],
     "P217": [
      315,
      169.33333333333334
     ],
     "P218": [
      311.1,
      61.427120345465795
     ],
     "P219": [
      315,
      61
     ],
     "P220": [
      315,
      169.33333333333334
     ],
     "P221": [
      318.9,
      168.90621298786755
     ],
     "P222": [
      315,
      61
     ],
     "P223": [
      318.9,
      61.427120345465795
     ],
     "P224": [
      318.9,
      168.90621298786755
     ],
     "P225": [
      322.8,
      167.63158789446754
     ],
     "P226": [
      318.9,
      61.427120345465795
     ],
     "P227": [
      322.8,
      62.70174543886583
     ],
     "P228": [
      322.8,
      167.63158789446754
     ],
     "P229": [
      326.70000000000005,
      165.52955965228028
     ],
     "P230": [
      322.8,
      62.70174543886583
     ],
     "P231": [
      326.70000000000005,
      64.80377368105306
     ],
     "P232": [
      326.70000000000005,
      165.52955965228028
     ],
     "P233": [
      330.6,
      162.63327850237596
     ],
     "P234": [
      326.70000000000005,
      64.80377368105306
     ],
     "P235": [
      330.6,
      67.70005483095741
     ],
     "P236": [
      330.6,
      162.63327850237596
     ],
     "P237": [
      334.5,
      158.98842052864296
     ],
     "P238": [
      330.6,
      67.70005483095741
     ],
     "P239": [
      334.5,
      71.34491280469038
     ],
     "P240": [
      334.5,
      158.98842052864296
     ],
     "P241": [
      338.40000000000003,
      154.65246731865977
     ],
     "P242": [
      334.5,
      71.34491280469038
     ],
     "P243": [
      338.40000000000003,
      75.68086601467357
     ],
     "P244": [
      338.40000000000003,
      154.65246731865977
     ],
     "P245": [
      342.29999999999995,
      149.69379944472072
     ],
     "P246": [
      338.40000000000003,
      75.68086601467357
     ],
     "P247": [
      342.29999999999995,
      80.63953388861262
     ],
     "P248": [
      342.29999999999995,
      149.69379944472072
     ],
     "P249": [
      346.2,
      144.19061806136233
     ],
     "P250": [
      342.29999999999995,
      80.63953388861262
     ],
     "P251": [
      346.2,
      86.14271527197099
     ],
     "P252": [
      346.2,
      144.19061806136233
     ],
     "P253": [
      350.1,
      138.22971162644146
     ],
     "P254": [
      346.2,
      86.14271527197099
     ],
     "P255": [
      350.1,
      92.10362170689189
     ],
     "P256": [
      350.1,
      138.22971162644146
     ],
     "P257": [
      354,
      131.90508719530965
     ],
     "P258": [
      350.1,
      92.10362170689189
     ],
     "P259": [
      354,
      98.42824613802367
     ],
     "P260": [
      354,
      131.90508719530965
     ],
     "P261": [
      357.9,
      125.31648787339341
     ],
     "P262": [
      354,
      98.42824613802367
     ],
     "P263": [
      357.9,
      105.0168454599399
     ],
     "P264": [
      357.9,
      125.31648787339341
     ],
     "P265": [
      361.8,
      118.56781980783782
     ],
     "P266": [
      357.9,
      105.0168454599399
     ],
     "P267": [
      361.8,
      111.76551352549552
     ],
     "P268": [
      361.8,
      118.56781980783782
     ],
     "P269": [
      365.7,
      111.76551352549558
     ],
     "P270": [
      361.8,
      111.76551352549552
     ],
     "P271": [
      365.7,
      118.5678198078378
     ],
     "P272": [
      365.7,
      111.76551352549558
     ],
     "P273": [
      369.6,
      105.01684545993987
     ],
     "P274": [
      365.7,
      118.5678198078378
     ],
     "P275": [
      369.6,
      125.31648787339344
     ],
     "P276": [
      369.6,
      105.01684545993987
     ],
     "P277": [
      373.5,
      98.4282461380237
     ],
     "P278": [
      369.6,
      125.31648787339344
     ],
     "P279": [
      373.5,
      131.90508719530965
     ],
     "P280": [
      373.5,
      98.4282461380237
     ],
     "P281": [
      377.40000000000003,
      92.10362170689186
     ],
     "P282": [
      373.5,
      131.90508719530965
     ],
     "P283": [
      377.40000000000003,
      138.22971162644149
     ],
     "P284": [
      377.40000000000003,
      92.10362170689186
     ],
     "P285": [
      381.3,
      86.14271527197101
     ],
     "P286": [
      377.40000000000003,
      138.22971162644149
     ],
     "P287": [
      381.3,
      144.19061806136233
     ],
     "P288": [
      381.3,
      86.14271527197101
     ],
     "P289": [
      385.20000000000005,
      80.63953388861259
     ],
     "P290": [
      381.3,
      144.19061806136233
     ],
     "P291": [
      385.20000000000005,
      149.69379944472075
     ],
     "P292": [
      385.20000000000005,
      80.63953388861259
     ],
     "P293": [
      389.09999999999997,
      75.6808660146736
     ],
     "P294": [
      385.20000000000005,
      149.69379944472075
     ],
     "P295": [
      389.09999999999997,
      154.65246731865972
     ],
     "P296": [
      389.09999999999997,
      75.6808660146736
     ],
     "P297": [
      393,
      71.34491280469035
     ],
     "P298": [
      389.09999999999997,
      154.65246731865972
     ],
     "P299": [
      393,
      158.98842052864296
     ],
     "P300": [
      393,
      71.34491280469035
     ],
     "P301": [
      396.9,
      67.70005483095741
     ],
     "P302": [
      393,
      158.98842052864296
     ],
     "P303": [
      396.9,
      162.6332785023759
     ],
     "P304": [
      396.9,
      67.70005483095741
     ],
     "P305": [
      400.8,
      64.80377368105306
     ],
     "P306": [
      396.9,
      162.6332785023759
     ],
     "P307": [
      400.8,
      165.52955965228028
     ],
     "P308": [
      400.8,
      64.80377368105306
     ],
     "P309": [
      404.7,
      62.70174543886583
     ],
     "P310": [
      400.8,
      165.52955965228028
     ],
     "P311": [
      404.7,
      167.6315878944675
     ],
     "P312": [
      404.7,
      62.70174543886583
     ],
     "P313": [
      408.6,
      61.427120345465795
     ],
     "P314": [
      404.7,
      167.6315878944675
     ],
     "P315": [
      408.6,
      168.90621298786755
     ],
     "P316": [
      408.6,
      61.427120345465795
     ],
     "P317": [
      412.5,
      61
     ],
     "P318": [
      408.6,
      168.90621298786755
     ],
     "P319": [
      412.5,
      169.33333333333334
     ],
     "P320": [
      412.5,
      61
     ],
     "P321": [
      416.4,
      61.42712034546577
     ],
     "P322": [
      412.5,
      169.33333333333334
     ],
     "P323": [
      416.4,
      168.90621298786755
     ],
     "P324": [
      416.4,
      61.42712034546577
     ],
     "P325": [
      420.3,
      62.70174543886583
     ],
     "P326": [
      416.4,
      168.90621298786755
     ],
     "P327": [
      420.3,
      167.63158789446754
     ],
     "P328": [
      420.3,
      62.70174543886583
     ],
     "P329": [
      424.2,
      64.80377368105303
     ],
     "P330": [
      420.3,
      167.63158789446754
     ],
     "P331": [
      424.2,
      165.52955965228028
     ],
     "P332": [
      424.2,
      64.80377368105303
     ],
     "P333": [
      428.1,
      67.70005483095738
     ],
     "P334": [
      424.2,
      165.52955965228028
     ],
     "P335": [
      428.1,
      162.63327850237596
     ],
     "P336": [
      428.1,
      67.70005483095738
     ],
     "P337": [
      432,
      71.34491280469032
     ],
     "P338": [
      428.1,
      162.63327850237596
     ],
     "P339": [
      432,
      158.988420528643
     ],
     "P340": [
      432,
      71.34491280469032
     ],
     "P341": [
      435.90000000000003,
      75.68086601467357
     ],
     "P342": [
      432,
      158.988420528643
     ],
     "P343": [
      435.90000000000003,
      154.65246731865977
     ],
     "P344": [
      435.90000000000003,
      75.68086601467357
     ],
     "P345": [
      439.79999999999995,
      80.63953388861256
     ],
     "P346": [
      435.90000000000003,
      154.65246731865977
     ],
     "P347": [
      439.79999999999995,
      149.69379944472075
     ],
     "P348": [
      439.79999999999995,
      80.63953388861256
     ],
     "P349": [
      443.7,
      86.14271527197099
     ],
     "P350": [
      439.79999999999995,
      149.69379944472075
     ],
     "P351": [
      443.7,
      144.1906180613624
     ],
     "P352": [
      443.7,
      86.14271527197099
     ],
     "P353": [
      447.59999999999997,
      92.10362170689183
     ],
     "P354": [
      443.7,
      144.1906180613624
     ],
     "P355": [
      447.59999999999997,
      138.22971162644154
     ],
     "P356": [
      447.59999999999997,
      92.10362170689183
     ],
     "P357": [
      451.5,
      98.42824613802367
     ],
     "P358": [
      447.59999999999997,
      138.22971162644154
     ],
     "P359": [
      451.5,
      131.9050871953097
     ],
     "P360": [
      451.5,
      98.42824613802367
     ],
     "P361": [
      455.4,
      105.01684545993987
     ],
     "P362": [
      451.5,
      131.9050871953097
     ],
     "P363": [
      455.4,
      125.3164878733935
     ],
     "P364": [
      455.4,
      105.01684545993987
     ],
     "P365": [
      459.3,
      111.76551352549552
     ],
     "P366": [
      455.4,
      125.3164878733935
     ],
     "P367": [
      459.3,
      118.56781980783782
     ],
     "P368": [
      459.3,
      111.76551352549552
     ],
     "P369": [
      463.2,
      118.5678198078378
     ],
     "P370": [
      459.3,
      118.56781980783782
     ],
     "P371": [
      463.2,
      111.76551352549558
     ],
     "P372": [
      463.2,
      118.5678198078378
     ],
     "P373": [
      467.1,
      125.31648787339341
     ],
     "P374": [
      463.2,
      111.76551352549558
     ],
     "P375": [
      467.1,
      105.0168454599399
     ],
     "P376": [
      467.1,
      125.31648787339341
     ],
     "P377": [
      471,
      131.90508719530965
     ],
     "P378": [
      467.1,
      105.0168454599399
     ],
     "P379": [
      471,
      98.42824613802372
     ],
     "P380": [
      471,
      131.90508719530965
     ],
     "P381": [
      474.90000000000003,
      138.22971162644149
     ],
     "P382": [
      471,
      98.42824613802372
     ],
     "P383": [
      474.90000000000003,
      92.10362170689186
     ],
     "P384": [
      474.90000000000003,
      138.22971162644149
     ],
     "P385": [
      478.8,
      144.19061806136233
     ],
     "P386": [
      474.90000000000003,
      92.10362170689186
     ],
     "P387": [
      478.8,
      86.14271527197101
     ],
     "P388": [
      478.8,
      144.19061806136233
     ],
     "P389": [
      482.70000000000005,
      149.69379944472072
     ],
     "P390": [
      478.8,
      86.14271527197101
     ],
     "P391": [
      482.70000000000005,
      80.63953388861259
     ],
     "P392": [
      482.70000000000005,
      149.69379944472072
     ],
     "P393": [
      486.59999999999997,
      154.65246731865972
     ],
     "P394": [
      482.70000000000005,
      80.63953388861259
     ],
     "P395": [
      486.59999999999997,
      75.6808660146736
     ],
     "P396": [
      486.59999999999997,
      154.65246731865972
     ],
     "P397": [
      490.5,
      158.98842052864296
     ],
     "P398": [
      486.59999999999997,
      75.6808660146736
     ],
     "P399": [
      490.5,
      71.34491280469035
     ],
     "P400": [
      490.5,
      158.98842052864296
     ],
     "P401": [
      494.4,
      162.6332785023759
     ],
     "P402": [
      490.5,
      71.34491280469035
     ],
     "P403": [
      494.4,
      67.70005483095741
     ],
     "P404": [
      494.4,
      162.6332785023759
     ],
     "P405": [
      498.3,
      165.52955965228028
     ],
     "P406": [
      494.4,
      67.70005483095741
     ],
     "P407": [
      498.3,
      64.80377368105306
     ],
     "P408": [
      498.3,
      165.52955965228028
     ],
     "P409": [
      502.2,
      167.6315878944675
     ],
     "P410": [
      498.3,
      64.80377368105306
     ],
     "P411": [
      502.2,
      62.70174543886583
     ],
     "P412": [
      502.2,
      167.6315878944675
     ],
     "P413": [
      506.1,
      168.90621298786755
     ],
     "P414": [
      502.2,
      62.70174543886583
     ],
     "P415": [
      506.1,
      61.427120345465795
     ],
     "P416": [
      506.1,
      168.90621298786755
     ],
     "P417": [
      510,
      169.33333333333334
     ],
     "P418": [
      506.1,
      61.427120345465795
     ],
     "P419": [
      510,
      61
     ],
     "P420": [
      120,
      169.33333333333334
     ],
     "P421": [
      510,
      169.33333333333334
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323P324P325P326P327P328P329P330P331P332P333P334P335P336P337P338P339P340P341P342P343P344P345P346P347P348P349P350P351P352P353P354P355P356P357P358P359P360P361P362P363P364P365P366P367P368P369P370P371P372P373P374P375P376P377P378P379P380P381P382P383P384P385P386P387P388P389P390P391P392P393P394P395P396P397P398P399P400P401P402P403P404P405P406P407P408P409P410P411P412P413P414P415P416P417P418P419P420P421",
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P160P161",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P162P163",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P164P165",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P166P167",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P168P169",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P170P171",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P172P173",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P174P175",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P176P177",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P178P179",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P180P181",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P182P183",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P184P185",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P186P187",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P188P189",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P190P191",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P192P193",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P194P195",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P196P197",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P198P199",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P200P201",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P202P203",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P204P205",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P206P207",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P208P209",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P210P211",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P212P213",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P214P215",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P216P217",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P218P219",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P220P221",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P222P223",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P224P225",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P226P227",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P228P229",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P230P231",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P232P233",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P234P235",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P236P237",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P238P239",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P240P241",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P242P243",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P244P245",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P246P247",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P248P249",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P250P251",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P252P253",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P254P255",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P256P257",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P258P259",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P260P261",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P262P263",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P264P265",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P266P267",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P268P269",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P270P271",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P272P273",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P274P275",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P276P277",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P278P279",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P280P281",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P282P283",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P284P285",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P286P287",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P288P289",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P290P291",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P292P293",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P294P295",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P296P297",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P298P299",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P300P301",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P302P303",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P304P305",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P306P307",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P308P309",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P310P311",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P312P313",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P314P315",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P316P317",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P318P319",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P320P321",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P322P323",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P324P325",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P326P327",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P328P329",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P330P331",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P332P333",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P334P335",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P336P337",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P338P339",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P340P341",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P342P343",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P344P345",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P346P347",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P348P349",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P350P351",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P352P353",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P354P355",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P356P357",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P358P359",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P360P361",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P362P363",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P364P365",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P366P367",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P368P369",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P370P371",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P372P373",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P374P375",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P376P377",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P378P379",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P380P381",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P382P383",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P384P385",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P386P387",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P388P389",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P390P391",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P392P393",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P394P395",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P396P397",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P398P399",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P400P401",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P402P403",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P404P405",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P406P407",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P408P409",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P410P411",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P412P413",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P414P415",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P416P417",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P418P419",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P420P421",
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
      "text": "Energy (J)",
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
       217.5,
       41
      ],
      "text": "0.5",
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
       412.5,
       41
      ],
      "text": "1.5",
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
       110.16666666666669
      ],
      "text": "1",
      "col": 0
     },
     {
      "at": [
       97,
       164.33333333333334
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       286,
       214
      ],
      "text": "U blue; K orange",
      "col": 0
     },
     {
      "at": [
       467,
       214
      ],
      "text": "Total 2J",
      "col": 2
     }
    ],
    "circles": []
   },
   null
  ],
  "qpics": {
   "17": {
    "t": "setups",
    "title": "Horizontal spring oscillator",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Stiffness",
      "100N/m"
     ],
     [
      "Amplitude",
      "0.2m"
     ],
     [
      "Current displacement",
      "0.1m"
     ]
    ]
   },
   "18": {
    "t": "setups",
    "title": "Horizontal spring oscillator",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Stiffness",
      "100N/m"
     ],
     [
      "Amplitude",
      "0.2m"
     ],
     [
      "Current displacement",
      "0.1m"
     ]
    ]
   },
   "22": {
    "t": "setups",
    "title": "One measured horizontal oscillator state",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Mass / stiffness",
      "2kg / 50N/m"
     ],
     [
      "Displacement / speed",
      "0.2m / 3m/s"
     ]
    ]
   },
   "23": {
    "t": "setups",
    "title": "Horizontal oscillator energy account",
    "head": "Quantity",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Mass",
      "2kg"
     ],
     [
      "Total energy",
      "9J"
     ],
     [
      "Current potential energy",
      "5J"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Try: split a conserved total",
   "head": "Quantity",
   "cols": [
    "J"
   ],
   "rows": [
    [
     "Total energy",
     "20"
    ],
    [
     "Potential energy",
     "5"
    ]
   ]
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Locate the equilibrium and measure displacement from it. Ideal simple harmonic motion requires a net restoring influence proportional to that displacement. Choose the mass-spring or small-angle pendulum period only under its assumptions. Read a complete repeated state to measure a period, and distinguish frequency from angular frequency. At an endpoint velocity is zero but restoring acceleration is largest; at equilibrium the reverse is true for nonzero amplitude. Energy exchanges explain the varying speed while the undamped total stays constant. Check units, signs, phase, potential-energy reference and the limits of real measurements.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-physics-1-oscillations","subject":"science","level":5,"grade":9,"standard":"AP Physics 1 CED, effective Fall 2024 with Fall 2026 clarifications, Unit 7, topics 7.1–7.4","title":"Oscillations","goal":"Explain when oscillations are simple harmonic, predict periods and phases, and connect restoring forces, motion graphs and energy.","points":20,"progression":{"requires":["science-h-ap-physics-1-energy-and-momentum-of-rotating-systems"],"operations":3,"demand":"Interpret oscillation models, graphs, experiment data and energy balances."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
