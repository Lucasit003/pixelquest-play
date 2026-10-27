/* Original course unit. Review record: docs/review/lessons/high-completion/ap-chem-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "5.1",
  "name": "Reaction Rates",
  "skill": "s1",
  "teach": [
   "A reaction rate describes how quickly composition changes. Here M means mol/L, and all concentration-rate examples use constant volume. A reactant's concentration change is negative as it is consumed; its disappearance rate is reported as a positive number. In a fictional run, [A] falls from 0.80 M to 0.50 M in 15 s. Divide the 0.30 M decrease by 15 s to obtain an average disappearance rate of 0.020 M/s. A secant joins two observations; an instantaneous rate uses the tangent at one time. Do not label an interval average as an exact instantaneous rate.",
   "Stoichiometric coefficients connect species rates. For the formal model 2A → B, A disappears twice as fast as B appears. Define the normalized reaction rate as r = -(1/2)Δ[A]/Δt = Δ[B]/Δt. If A disappears at 0.020 M/s, B appears at 0.010 M/s. Concentration, temperature, accessible solid surface and catalysts can affect rates. To test one influence, keep other conditions comparable. Crushing a reacting solid exposes more surface; it does not change the amount of substance when no material is lost. All numerical data and letter-species mechanisms in this unit are original hypothetical models."
  ],
  "boards": [
   [
    "[A]: 0.80 M → 0.50 M",
    "Elapsed time: 15 s",
    "Disappearance: 0.30 / 15 = 0.020 M/s",
    "Secant: interval average; tangent: instant"
   ],
   [
    "2A → B at constant volume",
    "A disappearance = 2 × B formation",
    "0.020 / 2 = 0.010 M/s",
    "Change one experimental factor at a time"
   ]
  ],
  "eqs": [
   "Average disappearance = -Δ[A]/Δt = (0.80 - 0.50)/15 = 0.020 M/s",
   "r = -(1/2)Δ[A]/Δt = Δ[B]/Δt"
  ],
  "questions": [
   [
    "At constant volume, [A] falls from 0.90 M to 0.60 M in 20 s. What is its average disappearance rate?",
    "0.015 M/s",
    "-0.015 M/s",
    "6.0 M/s",
    "Disappearance is positive: (0.90 - 0.60)/20 = 0.015 M/s. The signed concentration slope is negative."
   ],
   [
    "At constant volume, [P] rises from 0.10 M to 0.34 M in 12 s. What is its average formation rate?",
    "0.020 M/s",
    "0.24 M/s",
    "-0.020 M/s",
    "Use the product increase divided by elapsed time: (0.34 - 0.10)/12 = 0.020 M/s."
   ],
   [
    "For 2A → B at constant volume, A disappears at 0.060 M/s. How fast does B form?",
    "0.030 M/s",
    "0.120 M/s",
    "0.060 M/s",
    "Two A units are consumed per B unit formed, so the B formation rate is half the A disappearance rate."
   ],
   [
    "For A → 3B at constant volume, A disappears at 0.040 M/s. How fast does B form?",
    "0.120 M/s",
    "0.040 M/s",
    "0.013 M/s",
    "Each A consumed produces three B, so the formation rate is 3 × 0.040 = 0.120 M/s."
   ],
   [
    "For 3A → 2B, define r = -(1/3)Δ[A]/Δt at constant volume. A disappears at 0.090 M/s. What is r?",
    "0.030 M/s",
    "0.270 M/s",
    "0.060 M/s",
    "Divide A disappearance by its coefficient: r = 0.090/3 = 0.030 M/s. B formation would be 0.060 M/s."
   ],
   [
    "Which feature of a concentration-versus-time curve gives its slope at one specified instant?",
    "The tangent at that time",
    "The secant across the entire run",
    "The vertical axis label alone",
    "A tangent describes the local slope at a single time. A secant instead measures an average over an interval."
   ],
   [
    "A learner reports a negative disappearance rate because a reactant concentration is falling. Which correction is appropriate?",
    "Reverse the sign of the concentration slope",
    "Change the concentration unit to seconds",
    "Multiply elapsed time by concentration",
    "The signed reactant slope is negative during consumption; the disappearance rate is its positive opposite."
   ],
   [
    "Two equal masses of the same solid react with excess acid at the same temperature. Why can the powdered sample initially react faster?",
    "It exposes more solid surface",
    "It necessarily contains more moles",
    "Crushing necessarily raises the equilibrium constant",
    "More exposed surface makes more solid available for contact with acid. Equal masses of the same material contain equal amounts."
   ],
   [
    "To isolate a temperature effect on initial rate, which comparison is strongest?",
    "Equal starting concentrations and surface areas at two temperatures",
    "Change temperature and concentration together",
    "Compare different reactants at unknown temperatures",
    "Holding concentrations and relevant surface areas comparable helps attribute the difference to temperature rather than a confounding factor."
   ],
   [
    "A reactant curve gets less steep as time passes. Which conclusion follows directly?",
    "Its instantaneous disappearance rate decreases",
    "Its rate constant must decrease at fixed temperature",
    "The balanced equation must change",
    "The magnitude of the concentration slope measures disappearance rate. A decreasing rate alone does not show that k changed."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Concentration and interval average: fictional run",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      105,
      214
     ],
     "P1": [
      105,
      54
     ],
     "P2": [
      105,
      54
     ],
     "P3": [
      550,
      54
     ],
     "P4": [
      105,
      174
     ],
     "P5": [
      117,
      170.2982680703162
     ],
     "P6": [
      117,
      170.2982680703162
     ],
     "P7": [
      129,
      166.7107263012927
     ],
     "P8": [
      129,
      166.7107263012927
     ],
     "P9": [
      141,
      163.23385218156483
     ],
     "P10": [
      141,
      163.23385218156483
     ],
     "P11": [
      153,
      159.86423186137432
     ],
     "P12": [
      153,
      159.86423186137432
     ],
     "P13": [
      165,
      156.59855680060184
     ],
     "P14": [
      165,
      156.59855680060184
     ],
     "P15": [
      177,
      153.4336205201996
     ],
     "P16": [
      177,
      153.4336205201996
     ],
     "P17": [
      189,
      150.36631545383557
     ],
     "P18": [
      189,
      150.36631545383557
     ],
     "P19": [
      201,
      147.39362989665682
     ],
     "P20": [
      201,
      147.39362989665682
     ],
     "P21": [
      213,
      144.51264504817743
     ],
     "P22": [
      213,
      144.51264504817743
     ],
     "P23": [
      225,
      141.720532146386
     ],
     "P24": [
      225,
      141.720532146386
     ],
     "P25": [
      237,
      139.01454969025988
     ],
     "P26": [
      237,
      139.01454969025988
     ],
     "P27": [
      249,
      136.39204074795882
     ],
     "P28": [
      249,
      136.39204074795882
     ],
     "P29": [
      261,
      133.85043034805443
     ],
     "P30": [
      261,
      133.85043034805443
     ],
     "P31": [
      273,
      131.38722295123452
     ],
     "P32": [
      273,
      131.38722295123452
     ],
     "P33": [
      285,
      129
     ],
     "P34": [
      285,
      129
     ],
     "P35": [
      297,
      126.68641754394761
     ],
     "P36": [
      297,
      126.68641754394761
     ],
     "P37": [
      309,
      124.44420393830796
     ],
     "P38": [
      309,
      124.44420393830796
     ],
     "P39": [
      321,
      122.27115761347801
     ],
     "P40": [
      321,
      122.27115761347801
     ],
     "P41": [
      333,
      120.16514491335892
     ],
     "P42": [
      333,
      120.16514491335892
     ],
     "P43": [
      345,
      118.12409800037614
     ],
     "P44": [
      345,
      118.12409800037614
     ],
     "P45": [
      357,
      116.14601282512473
     ],
     "P46": [
      357,
      116.14601282512473
     ],
     "P47": [
      369,
      114.2289471586472
     ],
     "P48": [
      369,
      114.2289471586472
     ],
     "P49": [
      381,
      112.37101868541052
     ],
     "P50": [
      381,
      112.37101868541052
     ],
     "P51": [
      393,
      110.57040315511091
     ],
     "P52": [
      393,
      110.57040315511091
     ],
     "P53": [
      405,
      108.82533259149125
     ],
     "P54": [
      405,
      108.82533259149125
     ],
     "P55": [
      417,
      107.13409355641244
     ],
     "P56": [
      417,
      107.13409355641244
     ],
     "P57": [
      429,
      105.49502546747425
     ],
     "P58": [
      429,
      105.49502546747425
     ],
     "P59": [
      441,
      103.906518967534
     ],
     "P60": [
      441,
      103.906518967534
     ],
     "P61": [
      453,
      102.36701434452158
     ],
     "P62": [
      453,
      102.36701434452158
     ],
     "P63": [
      465,
      100.875
     ],
     "P64": [
      465,
      100.875
     ],
     "P65": [
      477,
      99.42901096496726
     ],
     "P66": [
      477,
      99.42901096496726
     ],
     "P67": [
      489,
      98.02762746144245
     ],
     "P68": [
      489,
      98.02762746144245
     ],
     "P69": [
      501,
      96.66947350842375
     ],
     "P70": [
      501,
      96.66947350842375
     ],
     "P71": [
      513,
      95.35321557084933
     ],
     "P72": [
      513,
      95.35321557084933
     ],
     "P73": [
      525,
      94.07756125023508
     ],
     "P74": [
      105,
      174
     ],
     "P75": [
      285,
      129
     ],
     "P76": [
      105,
      174
     ],
     "P77": [
      285,
      129
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77",
    "dots": "",
    "polys": [],
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
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P12P13",
      "col": 1,
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
     },
     {
      "v": "P16P17",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P18P19",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P20P21",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P22P23",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P24P25",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P26P27",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P28P29",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P30P31",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P32P33",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P34P35",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P36P37",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P38P39",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P40P41",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P42P43",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P44P45",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P46P47",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P48P49",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P50P51",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P52P53",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P54P55",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P56P57",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P58P59",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P60P61",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P62P63",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P64P65",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P66P67",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P68P69",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P70P71",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P72P73",
      "col": 1,
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
     }
    ],
    "circles": [
     {
      "c": "P76",
      "r": 4,
      "col": 2
     },
     {
      "c": "P77",
      "r": 4,
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       105,
       35
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       285,
       35
      ],
      "text": "15",
      "col": 0
     },
     {
      "at": [
       465,
       35
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       73,
       54
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       73,
       129
      ],
      "text": "0.5",
      "col": 0
     },
     {
      "at": [
       73,
       174
      ],
      "text": "0.8",
      "col": 0
     },
     {
      "at": [
       321,
       205
      ],
      "text": "Secant: average over the first 15 s",
      "col": 2
     },
     {
      "at": [
       85,
       219
      ],
      "text": "[A] (M)",
      "col": 0
     },
     {
      "at": [
       531,
       35
      ],
      "text": "t (s)",
      "col": 0
     }
    ]
   },
   null
  ]
 },
 {
  "code": "5.2",
  "name": "Introduction to Rate Law",
  "skill": "s2",
  "teach": [
   "A differential rate law connects rate to concentration at a fixed temperature: r = k[A]^m[B]^n. The exponents describe observed concentration dependence, and their sum is the overall order. They are not generally the coefficients of the overall chemical equation. Compare experiments changing one concentration at a time. If doubling [A] with [B] fixed multiplies rate by four, 2^m = 4 and m = 2. If doubling [B] with [A] fixed doubles rate, n = 1. Together these results support r = k[A]^2[B] over the tested conditions.",
   "Solve for k only after finding the rate law. For r = k[A]^2 with r = 0.036 M/s and [A] = 0.30 M, k = 0.036/0.30^2 = 0.40 M^-1 s^-1. Because r has units M/s, k for overall order N has units M^(1-N)/s. Zero-order, first-order and second-order constants therefore have different units. At a fixed temperature for the same mechanism, changing concentration changes rate through the concentration terms, not by redefining k. An order of zero means no rate dependence on that species over the conditions studied; it does not mean that species cannot be consumed.",
   "Measure a property that reliably tracks a species, then relate its change to concentration and time. For a colored reactant measured at fixed wavelength and path length, suppose a validated calibration makes absorbance proportional to [A], with other species contributing negligibly. If absorbance drops from 0.50 to 0.30 while the initial concentration is 0.40 M, the final concentration is 0.40 × 0.30/0.50 = 0.24 M. Over 20 s, the average disappearance rate is (0.40 - 0.24)/20 = 0.0080 M/s. Pressure or gas-volume measurements can also track suitable reactions when temperature, volume and stoichiometry are accounted for. An instrument signal is not automatically a concentration without a justified relationship."
  ],
  "boards": [
   [
    "r = k[A]^m[B]^n",
    "Double A, hold B: rate ×4 → m = 2",
    "Double B, hold A: rate ×2 → n = 1",
    "Overall order = m + n = 3"
   ],
   [
    "r = k[A]^2; r = 0.036 M/s",
    "[A] = 0.30 M; k = 0.40 M^-1 s^-1",
    "Units of k depend on total order",
    "Overall coefficients do not determine orders"
   ],
   [
    "Absorbance proportional to [A] in this calibration",
    "Signal: 0.50 → 0.30; initial [A] = 0.40 M",
    "Final [A] = 0.40 × 0.30 / 0.50 = 0.24 M",
    "Over 20 s: disappearance = 0.0080 M/s"
   ]
  ],
  "eqs": [
   "Rate ratio = ([A]2/[A]1)^m when other factors are fixed",
   "k = r/[A]^2 = 0.036/0.09 = 0.40 M^-1 s^-1",
   "[A]final/[A]initial = signal final/signal initial = 0.30/0.50"
  ],
  "questions": [
   [
    "At fixed temperature and fixed [B], doubling [A] quadruples the initial rate. What is the order in A?",
    "2",
    "1",
    "4",
    "The rate ratio is 2^m = 4, so m = 2. The multiplier four is not itself the order."
   ],
   [
    "At fixed temperature and fixed [A], tripling [B] leaves the initial rate unchanged. What is the order in B over these conditions?",
    "0",
    "1",
    "3",
    "A zero exponent gives 3^0 = 1, explaining unchanged rate. It does not imply that B is absent from the reaction."
   ],
   [
    "For r = k[A]^2[B], what is the overall order?",
    "3",
    "2",
    "1",
    "Add the concentration exponents: 2 + 1 = 3. The rate constant is not another concentration factor."
   ],
   [
    "For r = k[A]^2, r = 0.050 M/s when [A] = 0.50 M. What is k?",
    "0.20 M^-1 s^-1",
    "0.10 s^-1",
    "0.025 M^3/s",
    "Divide 0.050 by 0.50 squared: k = 0.050/0.25 = 0.20 M^-1 s^-1."
   ],
   [
    "A first-order rate law gives r in M/s and [A] in M. Which units must k have?",
    "s^-1",
    "M/s",
    "M^-2 s^-1",
    "Since k = r/[A], dividing M/s by M leaves reciprocal seconds for first-order kinetics."
   ],
   [
    "A third-order rate law gives r in M/s. Which units must k have?",
    "M^-2 s^-1",
    "M^-1 s^-1",
    "M^2 s^-1",
    "Three concentration factors supply M^3, so k must supply M^-2 s^-1 to leave M/s."
   ],
   [
    "For r = k[A]^2[B], [A] doubles and [B] halves at the same temperature. By what factor does rate change?",
    "2",
    "4",
    "1/2",
    "The A change contributes 2^2 = 4 and the B change contributes 1/2, giving a total factor of 2."
   ],
   [
    "The overall reaction is 2A + B → P, but no elementary mechanism or rate data are supplied. What follows about its rate law?",
    "The overall equation alone is insufficient",
    "It must be k[A]^2[B]",
    "It must be zero order",
    "Overall coefficients specify net stoichiometry, not the empirical orders unless the reaction is established to be elementary."
   ],
   [
    "A rate law measured at a fixed temperature is r = k[A]. [A] is reduced while the mechanism remains the same. Which statement fits this law?",
    "Rate falls while k stays the same",
    "k must fall in the same proportion",
    "Rate must remain unchanged",
    "The concentration term accounts for the lower rate. Under these conditions k does not depend on the starting concentration."
   ],
   [
    "To infer the order in A from two initial-rate trials, what should be held fixed besides temperature?",
    "The other reactant concentrations",
    "The initial rate itself",
    "The concentration of A",
    "Change A while holding the other concentration factors fixed, so their effects do not mix with the effect of A."
   ],
   [
    "Initial-rate trials at one temperature: trial 1 has [A] = 0.10 M, [B] = 0.20 M, r = 0.0040 M/s; trial 2 has 0.20 M, 0.20 M, 0.0160 M/s; trial 3 has 0.10 M, 0.40 M, 0.0080 M/s. Comparing trials 1 and 2, what is the order in A?",
    "2",
    "1",
    "0",
    "B is fixed while A doubles and rate quadruples. Thus 2 raised to the A order equals 4, giving order 2."
   ],
   [
    "Initial-rate trials at one temperature: trial 1 has [A] = 0.10 M, [B] = 0.20 M, r = 0.0040 M/s; trial 2 has 0.20 M, 0.20 M, 0.0160 M/s; trial 3 has 0.10 M, 0.40 M, 0.0080 M/s. Comparing trials 1 and 3, what is the order in B?",
    "1",
    "2",
    "0",
    "A is fixed while B doubles and rate doubles. The B exponent is therefore 1 under these conditions."
   ],
   [
    "Initial-rate trials at one temperature: trial 1 has [A] = 0.10 M, [B] = 0.20 M, r = 0.0040 M/s; trial 2 has 0.20 M, 0.20 M, 0.0160 M/s; trial 3 has 0.10 M, 0.40 M, 0.0080 M/s. For the resulting r = k[A]^2[B], what is k?",
    "2.0 M^-2 s^-1",
    "0.20 M^-1 s^-1",
    "20 M/s",
    "Using trial 1, k = 0.0040/(0.10^2 × 0.20) = 2.0 M^-2 s^-1. The same value fits all three trials."
   ],
   [
    "A validated calibration makes absorbance proportional to [A]. Signal falls from 0.60 to 0.24; initially [A] = 0.50 M. What is the final concentration?",
    "0.20 M",
    "0.30 M",
    "1.25 M",
    "The signal retains 0.24/0.60 = 0.40 of its initial value, so concentration is 0.50 × 0.40 = 0.20 M."
   ]
  ],
  "qpics": {
   "2": {
    "t": "board",
    "title": "Read the rate law",
    "lines": [
     "r = k[A]^2[B]",
     "What is the overall order?"
    ],
    "box": true
   },
   "10": {
    "t": "setups",
    "title": "Initial-rate experiment at fixed temperature",
    "head": "Trial",
    "cols": [
     "[A] (M)",
     "[B] (M)",
     "r (M/s)"
    ],
    "rows": [
     [
      "1",
      "0.10",
      "0.20",
      "0.0040"
     ],
     [
      "2",
      "0.20",
      "0.20",
      "0.0160"
     ],
     [
      "3",
      "0.10",
      "0.40",
      "0.0080"
     ]
    ]
   },
   "11": {
    "t": "setups",
    "title": "Initial-rate experiment at fixed temperature",
    "head": "Trial",
    "cols": [
     "[A] (M)",
     "[B] (M)",
     "r (M/s)"
    ],
    "rows": [
     [
      "1",
      "0.10",
      "0.20",
      "0.0040"
     ],
     [
      "2",
      "0.20",
      "0.20",
      "0.0160"
     ],
     [
      "3",
      "0.10",
      "0.40",
      "0.0080"
     ]
    ]
   },
   "12": {
    "t": "setups",
    "title": "Initial-rate experiment at fixed temperature",
    "head": "Trial",
    "cols": [
     "[A] (M)",
     "[B] (M)",
     "r (M/s)"
    ],
    "rows": [
     [
      "1",
      "0.10",
      "0.20",
      "0.0040"
     ],
     [
      "2",
      "0.20",
      "0.20",
      "0.0160"
     ],
     [
      "3",
      "0.10",
      "0.40",
      "0.0080"
     ]
    ]
   }
  }
 },
 {
  "code": "5.3",
  "name": "Concentration Changes Over Time",
  "skill": "s3",
  "teach": [
   "For a single-reactant disappearance law -d[A]/dt = k[A]^n at constant temperature, integrated laws predict concentration over time. Zero order gives [A]t = [A]0 - kt; first order gives ln([A]t/[A]0) = -kt; second order gives 1/[A]t = 1/[A]0 + kt. Here the k is defined for A's disappearance, avoiding a hidden stoichiometric factor. The diagnostic straight-line plots are [A], ln[A], and 1/[A] against time, with slopes -k, -k, and +k. Comparing plots and their residuals across multiple observations is stronger than judging two points, which always define a line.",
   "First-order kinetics removes the same fraction in equal time intervals. With [A]0 = 0.64 M and a half-life of 12 s, concentrations at 12, 24 and 36 s are 0.32, 0.16 and 0.08 M. Its half-life is ln(2)/k, approximately 0.693/k, independent of the starting concentration for that law. Radioactive decay of a single isotope illustrates first-order behavior in the number of undecayed nuclei. Do not apply constant half-life to every reaction: zero-order and second-order half-lives depend on the initial concentration. Stop using a zero-order straight-line prediction once it would give a negative concentration."
  ],
  "boards": [
   [
    "Disappearance law: -d[A]/dt = k[A]^n",
    "n = 0: [A] vs t has slope -k",
    "n = 1: ln[A] vs t has slope -k",
    "n = 2: 1/[A] vs t has slope +k"
   ],
   [
    "First-order half-life = ln(2)/k",
    "Every 12 s: 0.64 → 0.32 → 0.16 → 0.08 M",
    "Same fraction removed, not same amount",
    "Do not predict negative concentrations"
   ]
  ],
  "eqs": [
   "[A]t = [A]0 - kt; ln([A]t/[A]0) = -kt; 1/[A]t = 1/[A]0 + kt",
   "First order: [A]t = [A]0 × (1/2)^(t/t½)"
  ],
  "questions": [
   [
    "For a single-reactant first-order disappearance law, which plot is linear at fixed temperature?",
    "ln[A] against time",
    "[A]^2 against time",
    "[A] against time",
    "The integrated law ln[A]t = ln[A]0 - kt is linear in time with slope -k."
   ],
   [
    "For -d[A]/dt = k[A]^2, which plot is linear at fixed temperature?",
    "1/[A] against time",
    "ln[A] against time",
    "[A] against time",
    "Second-order integration gives 1/[A]t = 1/[A]0 + kt, a straight line with positive slope k."
   ],
   [
    "A first-order ln[A]-versus-time graph has slope -0.025 s^-1. What is k?",
    "0.025 s^-1",
    "-0.025 s^-1",
    "40 s",
    "The slope is -k, so a slope of -0.025 s^-1 corresponds to positive k = 0.025 s^-1."
   ],
   [
    "A zero-order disappearance law has [A]0 = 0.70 M and k = 0.020 M/s. What is [A] after 15 s while this law holds?",
    "0.40 M",
    "0.30 M",
    "1.00 M",
    "The amount lost is kt = 0.020 × 15 = 0.30 M; subtract it from 0.70 M to obtain 0.40 M."
   ],
   [
    "A first-order sample starts at 0.80 M and has a 10 s half-life. What concentration remains after 30 s?",
    "0.10 M",
    "0.20 M",
    "0.00 M",
    "Thirty seconds is three half-lives, so 0.80 × (1/2)^3 = 0.10 M remains."
   ],
   [
    "A first-order rate constant is 0.0693 s^-1. Using ln(2) ≈ 0.693, what is the half-life?",
    "10 s",
    "0.048 s",
    "100 s",
    "Use t½ = 0.693/k = 0.693/0.0693 = 10 s; multiplying by k gives the wrong units."
   ],
   [
    "For -d[A]/dt = k[A]^2, [A]0 = 0.50 M and k = 2.0 M^-1 s^-1. What is [A] at 3.0 s?",
    "0.125 M",
    "0.250 M",
    "8.0 M",
    "The reciprocal concentration is 1/0.50 + 2.0 × 3.0 = 8.0 M^-1. Inverting gives 0.125 M."
   ],
   [
    "The initial concentration doubles for the same first-order law at the same temperature. What happens to its half-life?",
    "It stays the same",
    "It doubles",
    "It halves",
    "First-order t½ = ln(2)/k contains no initial concentration, provided the same law and rate constant apply."
   ],
   [
    "A learner extrapolates a zero-order concentration line below zero. How should this prediction be treated?",
    "The law cannot be extended into negative concentration",
    "Negative concentration means product is forming backward",
    "The negative value is physically valid",
    "A concentration cannot be negative. The zero-order regime must end by depletion, so that extrapolation is invalid."
   ],
   [
    "A closed sample contains one decaying radioactive isotope. Its expected number of undecayed nuclei halves every equal interval. Which kinetics model fits?",
    "First order in undecayed nuclei",
    "Zero order in undecayed nuclei",
    "A constant number decaying each interval",
    "Equal fractional losses in equal times give exponential decay, the signature of first-order behavior in the remaining nuclei."
   ]
  ],
  "check": [
   "A first-order reactant begins at 0.96 M and has an 8 s half-life. How much remains after 24 s?",
   "0.12 M",
   "0.32 M",
   "0.48 M",
   "There are three half-lives: 0.96/2 = 0.48, then 0.24, then 0.12 M."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Straight-line tests for a single-reactant law",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      70,
      190
     ],
     "P1": [
      70,
      69
     ],
     "P2": [
      70,
      69
     ],
     "P3": [
      205,
      69
     ],
     "P4": [
      80,
      170
     ],
     "P5": [
      190,
      95
     ],
     "P6": [
      250,
      190
     ],
     "P7": [
      250,
      69
     ],
     "P8": [
      250,
      69
     ],
     "P9": [
      385,
      69
     ],
     "P10": [
      260,
      170
     ],
     "P11": [
      370,
      95
     ],
     "P12": [
      430,
      190
     ],
     "P13": [
      430,
      69
     ],
     "P14": [
      430,
      69
     ],
     "P15": [
      565,
      69
     ],
     "P16": [
      440,
      95
     ],
     "P17": [
      550,
      170
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17",
    "dots": "",
    "polys": [],
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
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
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "circles": [],
    "notes": [
     {
      "at": [
       135,
       208
      ],
      "text": "[A]: zero order",
      "col": 1
     },
     {
      "at": [
       190,
       50
      ],
      "text": "t",
      "col": 0
     },
     {
      "at": [
       315,
       208
      ],
      "text": "ln[A]: first order",
      "col": 2
     },
     {
      "at": [
       370,
       50
      ],
      "text": "t",
      "col": 0
     },
     {
      "at": [
       495,
       208
      ],
      "text": "1/[A]: second order",
      "col": 3
     },
     {
      "at": [
       550,
       50
      ],
      "text": "t",
      "col": 0
     },
     {
      "at": [
       320,
       30
      ],
      "text": "Linear plots; slopes are -k, -k, +k respectively",
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "First-order disappearance: an example",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      100,
      211
     ],
     "P1": [
      100,
      56
     ],
     "P2": [
      100,
      56
     ],
     "P3": [
      555,
      56
     ],
     "P4": [
      100,
      196.8
     ],
     "P5": [
      112,
      188.89750322558245
     ],
     "P6": [
      112,
      188.89750322558245
     ],
     "P7": [
      124,
      181.43853951415977
     ],
     "P8": [
      124,
      181.43853951415977
     ],
     "P9": [
      136,
      174.398215267723
     ],
     "P10": [
      136,
      174.398215267723
     ],
     "P11": [
      148,
      167.75303405856124
     ],
     "P12": [
      148,
      167.75303405856124
     ],
     "P13": [
      160,
      161.48081821211838
     ],
     "P14": [
      160,
      161.48081821211838
     ],
     "P15": [
      172,
      155.56063479106592
     ],
     "P16": [
      172,
      155.56063479106592
     ],
     "P17": [
      184,
      149.97272573357043
     ],
     "P18": [
      184,
      149.97272573357043
     ],
     "P19": [
      196,
      144.6984419125991
     ],
     "P20": [
      196,
      144.6984419125991
     ],
     "P21": [
      208,
      139.72018089619155
     ],
     "P22": [
      208,
      139.72018089619155
     ],
     "P23": [
      220,
      135.02132820097987
     ],
     "P24": [
      220,
      135.02132820097987
     ],
     "P25": [
      232,
      130.58620184289438
     ],
     "P26": [
      232,
      130.58620184289438
     ],
     "P27": [
      244,
      126.4
     ],
     "P28": [
      244,
      126.4
     ],
     "P29": [
      256,
      122.44875161279123
     ],
     "P30": [
      256,
      122.44875161279123
     ],
     "P31": [
      268,
      118.71926975707987
     ],
     "P32": [
      268,
      118.71926975707987
     ],
     "P33": [
      280,
      115.1991076338615
     ],
     "P34": [
      280,
      115.1991076338615
     ],
     "P35": [
      292,
      111.87651702928062
     ],
     "P36": [
      292,
      111.87651702928062
     ],
     "P37": [
      304,
      108.74040910605919
     ],
     "P38": [
      304,
      108.74040910605919
     ],
     "P39": [
      316,
      105.78031739553296
     ],
     "P40": [
      316,
      105.78031739553296
     ],
     "P41": [
      328,
      102.98636286678521
     ],
     "P42": [
      328,
      102.98636286678521
     ],
     "P43": [
      340,
      100.34922095629955
     ],
     "P44": [
      340,
      100.34922095629955
     ],
     "P45": [
      352,
      97.86009044809578
     ],
     "P46": [
      352,
      97.86009044809578
     ],
     "P47": [
      364,
      95.51066410048992
     ],
     "P48": [
      364,
      95.51066410048992
     ],
     "P49": [
      376,
      93.2931009214472
     ],
     "P50": [
      376,
      93.2931009214472
     ],
     "P51": [
      388,
      91.19999999999999
     ],
     "P52": [
      388,
      91.19999999999999
     ],
     "P53": [
      400,
      89.22437580639561
     ],
     "P54": [
      400,
      89.22437580639561
     ],
     "P55": [
      412,
      87.35963487853994
     ],
     "P56": [
      412,
      87.35963487853994
     ],
     "P57": [
      424,
      85.59955381693075
     ],
     "P58": [
      424,
      85.59955381693075
     ],
     "P59": [
      436,
      83.9382585146403
     ],
     "P60": [
      436,
      83.9382585146403
     ],
     "P61": [
      448,
      82.3702045530296
     ],
     "P62": [
      448,
      82.3702045530296
     ],
     "P63": [
      460,
      80.89015869776648
     ],
     "P64": [
      460,
      80.89015869776648
     ],
     "P65": [
      472,
      79.4931814333926
     ],
     "P66": [
      472,
      79.4931814333926
     ],
     "P67": [
      484,
      78.17461047814976
     ],
     "P68": [
      484,
      78.17461047814976
     ],
     "P69": [
      496,
      76.93004522404789
     ],
     "P70": [
      496,
      76.93004522404789
     ],
     "P71": [
      508,
      75.75533205024496
     ],
     "P72": [
      508,
      75.75533205024496
     ],
     "P73": [
      520,
      74.6465504607236
     ],
     "P74": [
      520,
      74.6465504607236
     ],
     "P75": [
      532,
      73.6
     ],
     "P76": [
      100,
      196.8
     ],
     "P77": [
      244,
      126.4
     ],
     "P78": [
      388,
      91.19999999999999
     ],
     "P79": [
      532,
      73.6
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79",
    "dots": "",
    "polys": [],
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
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P12P13",
      "col": 1,
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
     },
     {
      "v": "P16P17",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P18P19",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P20P21",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P22P23",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P24P25",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P26P27",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P28P29",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P30P31",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P32P33",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P34P35",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P36P37",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P38P39",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P40P41",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P42P43",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P44P45",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P46P47",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P48P49",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P50P51",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P52P53",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P54P55",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P56P57",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P58P59",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P60P61",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P62P63",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P64P65",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P66P67",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P68P69",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P70P71",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P72P73",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P74P75",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "circles": [
     {
      "c": "P76",
      "r": 4,
      "col": 1
     },
     {
      "c": "P77",
      "r": 4,
      "col": 1
     },
     {
      "c": "P78",
      "r": 4,
      "col": 1
     },
     {
      "c": "P79",
      "r": 4,
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       113,
       209.8
      ],
      "text": "0.64",
      "col": 1
     },
     {
      "at": [
       100,
       36
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       257,
       139.4
      ],
      "text": "0.32",
      "col": 1
     },
     {
      "at": [
       244,
       36
      ],
      "text": "12",
      "col": 0
     },
     {
      "at": [
       401,
       104.19999999999999
      ],
      "text": "0.16",
      "col": 1
     },
     {
      "at": [
       388,
       36
      ],
      "text": "24",
      "col": 0
     },
     {
      "at": [
       545,
       86.6
      ],
      "text": "0.08",
      "col": 1
     },
     {
      "at": [
       532,
       36
      ],
      "text": "36",
      "col": 0
     },
     {
      "at": [
       82,
       219
      ],
      "text": "[A] (M)",
      "col": 0
     },
     {
      "at": [
       565,
       36
      ],
      "text": "t (s)",
      "col": 0
     },
     {
      "at": [
       387,
       204
      ],
      "text": "12 s per half-life",
      "col": 0
     }
    ]
   }
  ]
 },
 {
  "code": "5.4",
  "name": "Elementary Reactions",
  "skill": "s4",
  "teach": [
   "An elementary reaction describes one event in a proposed mechanism. Molecularity counts the reactant particles participating in that event, including identical particles separately. A → products is unimolecular, A + B → products is bimolecular, and 2A → products is also bimolecular. Their elementary rate laws are proportional to [A], [A][B], and [A]^2. This use of coefficients is justified because the step is explicitly elementary. Applying the same shortcut to a multi-step overall reaction is a common error.",
   "Simultaneous encounters among three appropriately oriented, energetic particles are much less likely than encounters between two; termolecular elementary steps are consequently uncommon. A net equation with several reactant particles may instead summarize multiple events. For an elementary A + B step, doubling each concentration multiplies the rate by four. A fitted third-order overall rate law alone does not establish a three-particle collision: a fast equilibrium followed by another step can produce third-order concentration dependence. Distinguish a mechanism's microscopic claim from the observations used to test it."
  ],
  "boards": [
   [
    "A → products: one particle, unimolecular",
    "A + B → products: two, bimolecular",
    "2A → products: two, also bimolecular",
    "Use coefficients only for elementary steps"
   ],
   [
    "Elementary A + B: rate = k[A][B]",
    "Double both concentrations: rate ×4",
    "Three simultaneous particles: uncommon",
    "Overall order does not prove molecularity"
   ]
  ],
  "eqs": [
   "Elementary A + B → products: r = k[A][B]",
   "2 × 2 = 4; molecularity counts particles, not distinct names"
  ],
  "questions": [
   [
    "An explicitly elementary A → P step has what molecularity?",
    "Unimolecular",
    "Bimolecular",
    "Zero-molecular",
    "Only one reactant particle participates in the stated elementary event, so it is unimolecular."
   ],
   [
    "An explicitly elementary 2A → P step has what molecularity?",
    "Bimolecular",
    "Unimolecular",
    "Termolecular",
    "The coefficient two means two A particles participate. Identical species still count as two particles."
   ],
   [
    "For an elementary A + B → P event, which rate law follows?",
    "k[A][B]",
    "k[A] alone",
    "k[P]",
    "An elementary event involving one A and one B has rate proportional to each reactant concentration to the first power."
   ],
   [
    "For an elementary 2A → P event, which rate law follows?",
    "k[A]^2",
    "k[A]",
    "k[P]^2",
    "The elementary event requires two A particles, giving second-order dependence on A."
   ],
   [
    "An elementary A + 2B → P event would have what molecularity?",
    "Termolecular",
    "Bimolecular",
    "Unimolecular",
    "One A and two B particles make three reactant particles in the specified elementary event."
   ],
   [
    "Why are termolecular elementary events uncommon?",
    "Three suitable particles must meet simultaneously",
    "Atoms cannot ever collide in groups of three",
    "All third-order rate laws are impossible",
    "A simultaneous appropriately energized and oriented three-particle encounter is less probable, but not forbidden."
   ],
   [
    "An overall reaction has experimental third-order kinetics. What can be concluded about its molecularity without a mechanism?",
    "The order alone does not establish an elementary molecularity",
    "It proves a single three-particle collision",
    "It proves three separate unimolecular steps",
    "Overall order describes concentration dependence. Multiple-step mechanisms can produce it without a termolecular event."
   ],
   [
    "For elementary A + B → P at fixed temperature, both [A] and [B] double. By what factor does its rate increase?",
    "4",
    "2",
    "8",
    "The elementary law has one factor for each concentration, so doubling both multiplies rate by 2 × 2 = 4."
   ],
   [
    "An elementary A → B + C event produces two particles. Why is it still unimolecular?",
    "Molecularity counts reactant particles",
    "Molecularity counts only products",
    "Molecularity counts all species on both sides",
    "One A undergoes the event; the number of products does not change the reactant molecularity."
   ],
   [
    "Which evidence permits directly using reactant coefficients as rate-law powers?",
    "The equation is explicitly an elementary step",
    "The equation is balanced overall",
    "The reaction is exothermic",
    "Elementary-step stoichiometry describes the actual participating particles. Balance or heat release alone is insufficient."
   ]
  ]
 },
 {
  "code": "5.5",
  "name": "Collision Model",
  "skill": "s5",
  "teach": [
   "Collision theory connects macroscopic rate with particle behavior. A potentially productive encounter needs sufficient energy and a suitable arrangement of the reactive parts. More collisions do not imply that every collision succeeds. In a model where A must contact the B end of BC, a high-energy approach at the C end can fail to form the intended product. Increasing a gas reactant's concentration at fixed temperature typically increases relevant collision encounters per volume, while the thermal energy distribution at that temperature is not raised merely by adding particles.",
   "A Maxwell–Boltzmann energy distribution spreads particles over many energies. For a normalized distribution, the total area stays one; heating broadens the distribution and increases the fraction above a fixed activation threshold. The area beyond the threshold matters, not the curve's peak height. Thus a warmer sample can have a lower, broader peak and more high-energy particles. At the same temperature a lower barrier allows a larger fraction to meet the energy condition, without heating the sample. These statements concern the energy requirement; suitable orientation is still needed."
  ],
  "boards": [
   [
    "Productive encounter: energy AND orientation",
    "Wrong reactive end can prevent reaction",
    "Concentration changes encounter frequency",
    "At fixed T, adding particles does not heat them"
   ],
   [
    "Normalized energy distribution: area = 1",
    "Higher T: more area beyond fixed threshold",
    "Peak height alone is not the reacting fraction",
    "Lower barrier does not require higher T"
   ]
  ],
  "eqs": [
   "Successful collision requires sufficient energy and suitable orientation",
   "Energy-qualified fraction = area above the activation threshold"
  ],
  "questions": [
   [
    "In a collision model, particles meet with enough energy but the wrong reactive ends facing. What can happen?",
    "They separate without the intended reaction",
    "They must form the intended products",
    "The activation barrier disappears",
    "Energy is necessary but orientation can also matter, so an energetic collision need not rearrange bonds successfully."
   ],
   [
    "Which collision conditions are needed in the basic model for an elementary bimolecular reaction?",
    "Sufficient energy and suitable orientation",
    "Any contact at any energy",
    "Suitable orientation with zero energy requirement in every reaction",
    "The basic model requires both reaching the activation requirement and an arrangement that permits the needed bond changes."
   ],
   [
    "For normalized energy distributions at two temperatures, what quantity remains the same?",
    "Total area under each curve",
    "The fraction above every fixed energy",
    "The most probable energy",
    "Normalization makes the full area one. Heating redistributes the population rather than increasing this total area."
   ],
   [
    "For a fixed positive activation threshold, heating a thermal sample generally changes the energy-qualified fraction in what way?",
    "It increases",
    "It becomes exactly one",
    "It must decrease",
    "The warmer distribution has more area beyond the fixed threshold; this does not mean all collisions become successful."
   ],
   [
    "A warmer energy distribution has a lower peak than a cooler one. Does that by itself show fewer energetic particles?",
    "No; compare the area beyond the threshold",
    "Yes; peak height equals the energetic fraction",
    "Yes; all particles have the peak energy",
    "The fraction above a threshold is an area, not the height at the most probable energy. The warmer tail can be larger."
   ],
   [
    "More gas particles are added to the same volume at the same temperature. In the ideal collision model, what increases for encounters with a fixed second reactant?",
    "Relevant collision frequency per volume",
    "Average thermal energy solely because concentration rose",
    "The activation barrier of the unchanged pathway",
    "More particles are available for encounters. Holding temperature fixed does not raise their average thermal kinetic energy."
   ],
   [
    "At fixed temperature, an alternative pathway has a lower positive activation barrier. What follows for the energy condition?",
    "A larger fraction of encounters can meet it",
    "All encounters necessarily have more kinetic energy",
    "The temperature must have risen",
    "The distribution can stay the same while a lower threshold includes more of it. Orientation and other pathway details still matter."
   ],
   [
    "A model predicts that A must contact the B end of BC. Which detail most directly tests the orientation requirement?",
    "Which end of BC faces incoming A",
    "The color chosen for the graph axes",
    "Only the container label",
    "The identity of the contacted end concerns the alignment of reactive sites, which is the orientation condition in the model."
   ],
   [
    "A reaction is faster when warmed. Which explanation is consistent with collision theory for a positive barrier?",
    "A greater fraction of collisions can cross the barrier",
    "Heating must lower the unchanged pathway barrier to zero",
    "Heating guarantees every collision reacts",
    "Raising temperature increases the energy-qualified fraction. It does not need to erase the barrier or make every orientation suitable."
   ],
   [
    "Why is counting all collisions alone insufficient to predict productive collision rate?",
    "Energy and orientation filter the encounters",
    "Collision energy can never vary",
    "Every collision is productive by definition",
    "Only some encounters satisfy the energy and geometric conditions, so total collision count alone is not enough."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Thermal energy distributions: normalized model",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      82,
      210
     ],
     "P1": [
      82,
      57
     ],
     "P2": [
      82,
      57
     ],
     "P3": [
      563,
      57
     ],
     "P4": [
      82,
      57
     ],
     "P5": [
      85,
      131.20679853345018
     ],
     "P6": [
      85,
      131.20679853345018
     ],
     "P7": [
      88,
      154.70969527339753
     ],
     "P8": [
      88,
      154.70969527339753
     ],
     "P9": [
      91,
      168.41976906004373
     ],
     "P10": [
      91,
      168.41976906004373
     ],
     "P11": [
      94,
      176.78724808960231
     ],
     "P12": [
      94,
      176.78724808960231
     ],
     "P13": [
      97,
      181.69371381108985
     ],
     "P14": [
      97,
      181.69371381108985
     ],
     "P15": [
      100,
      184.17863181102544
     ],
     "P16": [
      100,
      184.17863181102544
     ],
     "P17": [
      103,
      184.89881153154718
     ],
     "P18": [
      103,
      184.89881153154718
     ],
     "P19": [
      106,
      184.30382360109743
     ],
     "P20": [
      106,
      184.30382360109743
     ],
     "P21": [
      109,
      182.71777172405444
     ],
     "P22": [
      109,
      182.71777172405444
     ],
     "P23": [
      112,
      180.38273293113394
     ],
     "P24": [
      112,
      180.38273293113394
     ],
     "P25": [
      115,
      177.4840877723737
     ],
     "P26": [
      115,
      177.4840877723737
     ],
     "P27": [
      118,
      174.16636051211398
     ],
     "P28": [
      118,
      174.16636051211398
     ],
     "P29": [
      121,
      170.5436781040175
     ],
     "P30": [
      121,
      170.5436781040175
     ],
     "P31": [
      124,
      166.70698146115717
     ],
     "P32": [
      124,
      166.70698146115717
     ],
     "P33": [
      127,
      162.72917490985304
     ],
     "P34": [
      127,
      162.72917490985304
     ],
     "P35": [
      130,
      158.66891069519062
     ],
     "P36": [
      130,
      158.66891069519062
     ],
     "P37": [
      133,
      154.57343749723748
     ],
     "P38": [
      133,
      154.57343749723748
     ],
     "P39": [
      136,
      150.4807876104403
     ],
     "P40": [
      136,
      150.4807876104403
     ],
     "P41": [
      139,
      146.4214846954357
     ],
     "P42": [
      139,
      146.4214846954357
     ],
     "P43": [
      142,
      142.41989618374876
     ],
     "P44": [
      142,
      142.41989618374876
     ],
     "P45": [
      145,
      138.49531718199233
     ],
     "P46": [
      145,
      138.49531718199233
     ],
     "P47": [
      148,
      134.66284806122925
     ],
     "P48": [
      148,
      134.66284806122925
     ],
     "P49": [
      151,
      130.9341111681369
     ],
     "P50": [
      151,
      130.9341111681369
     ],
     "P51": [
      154,
      127.3178404606752
     ],
     "P52": [
      154,
      127.3178404606752
     ],
     "P53": [
      157,
      123.82036962493163
     ],
     "P54": [
      157,
      123.82036962493163
     ],
     "P55": [
      160,
      120.44603827727173
     ],
     "P56": [
      160,
      120.44603827727173
     ],
     "P57": [
      163,
      117.19753148704245
     ],
     "P58": [
      163,
      117.19753148704245
     ],
     "P59": [
      166,
      114.07616459965593
     ],
     "P60": [
      166,
      114.07616459965593
     ],
     "P61": [
      169,
      111.08212288038914
     ],
     "P62": [
      169,
      111.08212288038914
     ],
     "P63": [
      172,
      108.21466361740528
     ],
     "P64": [
      172,
      108.21466361740528
     ],
     "P65": [
      175,
      105.47228686584435
     ],
     "P66": [
      175,
      105.47228686584435
     ],
     "P67": [
      178,
      102.8528798751934
     ],
     "P68": [
      178,
      102.8528798751934
     ],
     "P69": [
      181,
      100.35383934174646
     ],
     "P70": [
      181,
      100.35383934174646
     ],
     "P71": [
      184,
      97.97217491012967
     ],
     "P72": [
      184,
      97.97217491012967
     ],
     "P73": [
      187,
      95.70459677080572
     ],
     "P74": [
      187,
      95.70459677080572
     ],
     "P75": [
      190,
      93.54758973301315
     ],
     "P76": [
      190,
      93.54758973301315
     ],
     "P77": [
      193,
      91.49747577124376
     ],
     "P78": [
      193,
      91.49747577124376
     ],
     "P79": [
      196,
      89.55046673023065
     ],
     "P80": [
      196,
      89.55046673023065
     ],
     "P81": [
      199,
      87.70270861476467
     ],
     "P82": [
      199,
      87.70270861476467
     ],
     "P83": [
      202,
      85.95031867582057
     ],
     "P84": [
      202,
      85.95031867582057
     ],
     "P85": [
      205,
      84.28941632513343
     ],
     "P86": [
      205,
      84.28941632513343
     ],
     "P87": [
      208,
      82.71614875995334
     ],
     "P88": [
      208,
      82.71614875995334
     ],
     "P89": [
      211,
      81.22671205301972
     ],
     "P90": [
      211,
      81.22671205301972
     ],
     "P91": [
      214,
      79.81736835567523
     ],
     "P92": [
      214,
      79.81736835567523
     ],
     "P93": [
      217,
      78.48445977113269
     ],
     "P94": [
      217,
      78.48445977113269
     ],
     "P95": [
      220.00000000000003,
      77.22441937751387
     ],
     "P96": [
      220.00000000000003,
      77.22441937751387
     ],
     "P97": [
      223,
      76.03377981418558
     ],
     "P98": [
      223,
      76.03377981418558
     ],
     "P99": [
      226.00000000000003,
      74.90917978832525
     ],
     "P100": [
      226.00000000000003,
      74.90917978832525
     ],
     "P101": [
      229,
      73.84736881006864
     ],
     "P102": [
      229,
      73.84736881006864
     ],
     "P103": [
      232,
      72.84521042279582
     ],
     "P104": [
      232,
      72.84521042279582
     ],
     "P105": [
      235.00000000000003,
      71.89968415908191
     ],
     "P106": [
      235.00000000000003,
      71.89968415908191
     ],
     "P107": [
      238,
      71.00788642172108
     ],
     "P108": [
      238,
      71.00788642172108
     ],
     "P109": [
      241.00000000000003,
      70.16703046231424
     ],
     "P110": [
      241.00000000000003,
      70.16703046231424
     ],
     "P111": [
      244,
      69.37444560659247
     ],
     "P112": [
      244,
      69.37444560659247
     ],
     "P113": [
      247,
      68.62757585542224
     ],
     "P114": [
      247,
      68.62757585542224
     ],
     "P115": [
      250.00000000000003,
      67.92397797287722
     ],
     "P116": [
      250.00000000000003,
      67.92397797287722
     ],
     "P117": [
      253,
      67.26131915749778
     ],
     "P118": [
      253,
      67.26131915749778
     ],
     "P119": [
      256,
      66.63737437958454
     ],
     "P120": [
      256,
      66.63737437958454
     ],
     "P121": [
      259,
      66.05002345582025
     ],
     "P122": [
      259,
      66.05002345582025
     ],
     "P123": [
      262,
      65.49724792245544
     ],
     "P124": [
      262,
      65.49724792245544
     ],
     "P125": [
      265,
      64.97712775953414
     ],
     "P126": [
      265,
      64.97712775953414
     ],
     "P127": [
      268,
      64.48783801100649
     ],
     "P128": [
      268,
      64.48783801100649
     ],
     "P129": [
      271,
      64.02764533893026
     ],
     "P130": [
      271,
      64.02764533893026
     ],
     "P131": [
      274,
      63.594904544177126
     ],
     "P132": [
      274,
      63.594904544177126
     ],
     "P133": [
      277,
      63.188055081022526
     ],
     "P134": [
      277,
      63.188055081022526
     ],
     "P135": [
      280,
      62.80561758861657
     ],
     "P136": [
      280,
      62.80561758861657
     ],
     "P137": [
      283,
      62.446190458523944
     ],
     "P138": [
      283,
      62.446190458523944
     ],
     "P139": [
      286,
      62.108446454212356
     ],
     "P140": [
      286,
      62.108446454212356
     ],
     "P141": [
      289,
      61.79112939549856
     ],
     "P142": [
      289,
      61.79112939549856
     ],
     "P143": [
      292,
      61.493050918475035
     ],
     "P144": [
      292,
      61.493050918475035
     ],
     "P145": [
      295,
      61.2130873192896
     ],
     "P146": [
      295,
      61.2130873192896
     ],
     "P147": [
      298,
      60.950176488293664
     ],
     "P148": [
      298,
      60.950176488293664
     ],
     "P149": [
      301,
      60.703314939476826
     ],
     "P150": [
      301,
      60.703314939476826
     ],
     "P151": [
      304,
      60.47155493873183
     ],
     "P152": [
      304,
      60.47155493873183
     ],
     "P153": [
      307,
      60.2540017333188
     ],
     "P154": [
      307,
      60.2540017333188
     ],
     "P155": [
      310,
      60.04981088389445
     ],
     "P156": [
      310,
      60.04981088389445
     ],
     "P157": [
      313,
      59.85818569962075
     ],
     "P158": [
      313,
      59.85818569962075
     ],
     "P159": [
      316,
      59.678374776147166
     ],
     "P160": [
      316,
      59.678374776147166
     ],
     "P161": [
      319,
      59.50966963565722
     ],
     "P162": [
      319,
      59.50966963565722
     ],
     "P163": [
      322,
      59.351402467664855
     ],
     "P164": [
      322,
      59.351402467664855
     ],
     "P165": [
      325,
      59.20294396883159
     ],
     "P166": [
      325,
      59.20294396883159
     ],
     "P167": [
      328,
      59.06370127973378
     ],
     "P168": [
      328,
      59.06370127973378
     ],
     "P169": [
      331,
      58.933116016236795
     ],
     "P170": [
      331,
      58.933116016236795
     ],
     "P171": [
      334,
      58.81066239291542
     ],
     "P172": [
      334,
      58.81066239291542
     ],
     "P173": [
      337,
      58.695845435793956
     ],
     "P174": [
      337,
      58.695845435793956
     ],
     "P175": [
      340,
      58.58819928155455
     ],
     "P176": [
      340,
      58.58819928155455
     ],
     "P177": [
      343.00000000000006,
      58.48728556027572
     ],
     "P178": [
      343.00000000000006,
      58.48728556027572
     ],
     "P179": [
      346,
      58.39269185870708
     ],
     "P180": [
      346,
      58.39269185870708
     ],
     "P181": [
      349,
      58.30403026105782
     ],
     "P182": [
      349,
      58.30403026105782
     ],
     "P183": [
      352,
      58.220935964270524
     ],
     "P184": [
      352,
      58.220935964270524
     ],
     "P185": [
      355,
      58.143065964765356
     ],
     "P186": [
      355,
      58.143065964765356
     ],
     "P187": [
      358.00000000000006,
      58.07009781367
     ],
     "P188": [
      358.00000000000006,
      58.07009781367
     ],
     "P189": [
      361,
      58.001728437593414
     ],
     "P190": [
      361,
      58.001728437593414
     ],
     "P191": [
      364,
      57.93767302205629
     ],
     "P192": [
      364,
      57.93767302205629
     ],
     "P193": [
      367,
      57.87766395475509
     ],
     "P194": [
      367,
      57.87766395475509
     ],
     "P195": [
      370.00000000000006,
      57.821449825906456
     ],
     "P196": [
      370.00000000000006,
      57.821449825906456
     ],
     "P197": [
      373.00000000000006,
      57.76879448299644
     ],
     "P198": [
      373.00000000000006,
      57.76879448299644
     ],
     "P199": [
      376,
      57.71947613733977
     ],
     "P200": [
      376,
      57.71947613733977
     ],
     "P201": [
      379,
      57.67328651993793
     ],
     "P202": [
      379,
      57.67328651993793
     ],
     "P203": [
      382,
      57.63003008421251
     ],
     "P204": [
      382,
      57.63003008421251
     ],
     "P205": [
      385.00000000000006,
      57.589523253276866
     ],
     "P206": [
      385.00000000000006,
      57.589523253276866
     ],
     "P207": [
      388.00000000000006,
      57.551593709498746
     ],
     "P208": [
      388.00000000000006,
      57.551593709498746
     ],
     "P209": [
      391,
      57.5160797241939
     ],
     "P210": [
      391,
      57.5160797241939
     ],
     "P211": [
      394,
      57.482829525379344
     ],
     "P212": [
      394,
      57.482829525379344
     ],
     "P213": [
      397,
      57.45170070160131
     ],
     "P214": [
      397,
      57.45170070160131
     ],
     "P215": [
      400.00000000000006,
      57.42255963993907
     ],
     "P216": [
      400.00000000000006,
      57.42255963993907
     ],
     "P217": [
      403.00000000000006,
      57.39528099636897
     ],
     "P218": [
      403.00000000000006,
      57.39528099636897
     ],
     "P219": [
      406,
      57.369747196755554
     ],
     "P220": [
      406,
      57.369747196755554
     ],
     "P221": [
      409,
      57.34584796681625
     ],
     "P222": [
      409,
      57.34584796681625
     ],
     "P223": [
      412,
      57.323479889483906
     ],
     "P224": [
      412,
      57.323479889483906
     ],
     "P225": [
      415.00000000000006,
      57.30254598816617
     ],
     "P226": [
      415.00000000000006,
      57.30254598816617
     ],
     "P227": [
      418.00000000000006,
      57.28295533447434
     ],
     "P228": [
      418.00000000000006,
      57.28295533447434
     ],
     "P229": [
      421,
      57.264622679063535
     ],
     "P230": [
      421,
      57.264622679063535
     ],
     "P231": [
      424,
      57.24746810429454
     ],
     "P232": [
      424,
      57.24746810429454
     ],
     "P233": [
      427,
      57.23141669749228
     ],
     "P234": [
      427,
      57.23141669749228
     ],
     "P235": [
      430.00000000000006,
      57.216398243638366
     ],
     "P236": [
      430.00000000000006,
      57.216398243638366
     ],
     "P237": [
      433.00000000000006,
      57.20234693639583
     ],
     "P238": [
      433.00000000000006,
      57.20234693639583
     ],
     "P239": [
      436,
      57.18920110642031
     ],
     "P240": [
      436,
      57.18920110642031
     ],
     "P241": [
      439,
      57.17690296596862
     ],
     "P242": [
      439,
      57.17690296596862
     ],
     "P243": [
      442,
      57.16539836886628
     ],
     "P244": [
      442,
      57.16539836886628
     ],
     "P245": [
      445.00000000000006,
      57.154636584947525
     ],
     "P246": [
      445.00000000000006,
      57.154636584947525
     ],
     "P247": [
      448.00000000000006,
      57.14457008812806
     ],
     "P248": [
      448.00000000000006,
      57.14457008812806
     ],
     "P249": [
      451,
      57.13515435731654
     ],
     "P250": [
      451,
      57.13515435731654
     ],
     "P251": [
      454,
      57.12634768941473
     ],
     "P252": [
      454,
      57.12634768941473
     ],
     "P253": [
      457,
      57.118111023697196
     ],
     "P254": [
      457,
      57.118111023697196
     ],
     "P255": [
      460.00000000000006,
      57.110407776900644
     ],
     "P256": [
      460.00000000000006,
      57.110407776900644
     ],
     "P257": [
      463.00000000000006,
      57.10320368839058
     ],
     "P258": [
      463.00000000000006,
      57.10320368839058
     ],
     "P259": [
      466,
      57.09646667480848
     ],
     "P260": [
      466,
      57.09646667480848
     ],
     "P261": [
      469,
      57.09016669363584
     ],
     "P262": [
      469,
      57.09016669363584
     ],
     "P263": [
      472,
      57.08427561514404
     ],
     "P264": [
      472,
      57.08427561514404
     ],
     "P265": [
      475.00000000000006,
      57.078767102228625
     ],
     "P266": [
      475.00000000000006,
      57.078767102228625
     ],
     "P267": [
      478.00000000000006,
      57.07361649765582
     ],
     "P268": [
      478.00000000000006,
      57.07361649765582
     ],
     "P269": [
      481,
      57.06880071827564
     ],
     "P270": [
      481,
      57.06880071827564
     ],
     "P271": [
      484,
      57.06429815578221
     ],
     "P272": [
      484,
      57.06429815578221
     ],
     "P273": [
      487,
      57.060088583625884
     ],
     "P274": [
      487,
      57.060088583625884
     ],
     "P275": [
      490.00000000000006,
      57.05615306970472
     ],
     "P276": [
      490.00000000000006,
      57.05615306970472
     ],
     "P277": [
      493.00000000000006,
      57.05247389448513
     ],
     "P278": [
      493.00000000000006,
      57.05247389448513
     ],
     "P279": [
      496,
      57.04903447422103
     ],
     "P280": [
      496,
      57.04903447422103
     ],
     "P281": [
      499,
      57.04581928896138
     ],
     "P282": [
      499,
      57.04581928896138
     ],
     "P283": [
      502,
      57.04281381505362
     ],
     "P284": [
      502,
      57.04281381505362
     ],
     "P285": [
      505.00000000000006,
      57.04000446186777
     ],
     "P286": [
      505.00000000000006,
      57.04000446186777
     ],
     "P287": [
      508.00000000000006,
      57.03737851248289
     ],
     "P288": [
      508.00000000000006,
      57.03737851248289
     ],
     "P289": [
      511,
      57.03492406809218
     ],
     "P290": [
      511,
      57.03492406809218
     ],
     "P291": [
      514,
      57.03262999589825
     ],
     "P292": [
      514,
      57.03262999589825
     ],
     "P293": [
      517,
      57.03048588028338
     ],
     "P294": [
      517,
      57.03048588028338
     ],
     "P295": [
      520,
      57.02848197705242
     ],
     "P296": [
      520,
      57.02848197705242
     ],
     "P297": [
      523,
      57.02660917055866
     ],
     "P298": [
      523,
      57.02660917055866
     ],
     "P299": [
      526,
      57.02485893353378
     ],
     "P300": [
      526,
      57.02485893353378
     ],
     "P301": [
      529,
      57.02322328945448
     ],
     "P302": [
      529,
      57.02322328945448
     ],
     "P303": [
      532,
      57.02169477728762
     ],
     "P304": [
      532,
      57.02169477728762
     ],
     "P305": [
      535,
      57.02026641846669
     ],
     "P306": [
      535,
      57.02026641846669
     ],
     "P307": [
      538,
      57.018931685959785
     ],
     "P308": [
      538,
      57.018931685959785
     ],
     "P309": [
      541,
      57.017684475299035
     ],
     "P310": [
      541,
      57.017684475299035
     ],
     "P311": [
      544,
      57.01651907744886
     ],
     "P312": [
      544,
      57.01651907744886
     ],
     "P313": [
      547,
      57.01543015339783
     ],
     "P314": [
      547,
      57.01543015339783
     ],
     "P315": [
      550,
      57.01441271036637
     ],
     "P316": [
      550,
      57.01441271036637
     ],
     "P317": [
      553,
      57.01346207952869
     ],
     "P318": [
      553,
      57.01346207952869
     ],
     "P319": [
      556,
      57.01257389515422
     ],
     "P320": [
      556,
      57.01257389515422
     ],
     "P321": [
      559,
      57.011744075078724
     ],
     "P322": [
      559,
      57.011744075078724
     ],
     "P323": [
      562,
      57.01096880242204
     ],
     "P324": [
      82,
      57
     ],
     "P325": [
      85,
      91.05997441565103
     ],
     "P326": [
      85,
      91.05997441565103
     ],
     "P327": [
      88,
      103.2023123495976
     ],
     "P328": [
      88,
      103.2023123495976
     ],
     "P329": [
      91,
      111.27673787616283
     ],
     "P330": [
      91,
      111.27673787616283
     ],
     "P331": [
      94,
      117.11564384784518
     ],
     "P332": [
      94,
      117.11564384784518
     ],
     "P333": [
      97,
      121.46840208616413
     ],
     "P334": [
      97,
      121.46840208616413
     ],
     "P335": [
      100,
      124.73949045960723
     ],
     "P336": [
      100,
      124.73949045960723
     ],
     "P337": [
      103,
      127.18102663223976
     ],
     "P338": [
      103,
      127.18102663223976
     ],
     "P339": [
      106,
      128.96479407515253
     ],
     "P340": [
      106,
      128.96479407515253
     ],
     "P341": [
      109,
      130.21511431846847
     ],
     "P342": [
      109,
      130.21511431846847
     ],
     "P343": [
      112,
      131.0259324683251
     ],
     "P344": [
      112,
      131.0259324683251
     ],
     "P345": [
      115,
      131.47056106571694
     ],
     "P346": [
      115,
      131.47056106571694
     ],
     "P347": [
      118,
      131.6076400600692
     ],
     "P348": [
      118,
      131.6076400600692
     ],
     "P349": [
      121,
      131.4849880807763
     ],
     "P350": [
      121,
      131.4849880807763
     ],
     "P351": [
      124,
      131.14220380698708
     ],
     "P352": [
      124,
      131.14220380698708
     ],
     "P353": [
      127,
      130.61248844475665
     ],
     "P354": [
      127,
      130.61248844475665
     ],
     "P355": [
      130,
      129.9239622441665
     ],
     "P356": [
      130,
      129.9239622441665
     ],
     "P357": [
      133,
      129.10064062212598
     ],
     "P358": [
      133,
      129.10064062212598
     ],
     "P359": [
      136,
      128.16317429752306
     ],
     "P360": [
      136,
      128.16317429752306
     ],
     "P361": [
      139,
      127.1294215079671
     ],
     "P362": [
      139,
      127.1294215079671
     ],
     "P363": [
      142,
      126.01489798995377
     ],
     "P364": [
      142,
      126.01489798995377
     ],
     "P365": [
      145,
      124.83313616876578
     ],
     "P366": [
      145,
      124.83313616876578
     ],
     "P367": [
      148,
      123.59597569749434
     ],
     "P368": [
      148,
      123.59597569749434
     ],
     "P369": [
      151,
      122.31380124812202
     ],
     "P370": [
      151,
      122.31380124812202
     ],
     "P371": [
      154,
      120.995739185675
     ],
     "P372": [
      154,
      120.995739185675
     ],
     "P373": [
      157,
      119.6498217717166
     ],
     "P374": [
      157,
      119.6498217717166
     ],
     "P375": [
      160,
      118.28312542041007
     ],
     "P376": [
      160,
      118.28312542041007
     ],
     "P377": [
      163,
      116.90188799547494
     ],
     "P378": [
      163,
      116.90188799547494
     ],
     "P379": [
      166,
      115.51160901005329
     ],
     "P380": [
      166,
      115.51160901005329
     ],
     "P381": [
      169,
      114.1171357536706
     ],
     "P382": [
      169,
      114.1171357536706
     ],
     "P383": [
      172,
      112.72273773935589
     ],
     "P384": [
      172,
      112.72273773935589
     ],
     "P385": [
      175,
      111.33217138302871
     ],
     "P386": [
      175,
      111.33217138302871
     ],
     "P387": [
      178,
      109.94873645677006
     ],
     "P388": [
      178,
      109.94873645677006
     ],
     "P389": [
      181,
      108.57532556932739
     ],
     "P390": [
      181,
      108.57532556932739
     ],
     "P391": [
      184,
      107.2144677008105
     ],
     "P392": [
      184,
      107.2144677008105
     ],
     "P393": [
      187,
      105.86836663917512
     ],
     "P394": [
      187,
      105.86836663917512
     ],
     "P395": [
      190,
      104.53893502282887
     ],
     "P396": [
      190,
      104.53893502282887
     ],
     "P397": [
      193,
      103.22782457838156
     ],
     "P398": [
      193,
      103.22782457838156
     ],
     "P399": [
      196,
      101.9364530490746
     ],
     "P400": [
      196,
      101.9364530490746
     ],
     "P401": [
      199,
      100.6660282331147
     ],
     "P402": [
      199,
      100.6660282331147
     ],
     "P403": [
      202,
      99.41756948844727
     ],
     "P404": [
      202,
      99.41756948844727
     ],
     "P405": [
      205,
      98.19192700869019
     ],
     "P406": [
      205,
      98.19192700869019
     ],
     "P407": [
      208,
      96.98979913187819
     ],
     "P408": [
      208,
      96.98979913187819
     ],
     "P409": [
      211,
      95.81174790766877
     ],
     "P410": [
      211,
      95.81174790766877
     ],
     "P411": [
      214,
      94.65821311841711
     ],
     "P412": [
      214,
      94.65821311841711
     ],
     "P413": [
      217,
      93.52952492399575
     ],
     "P414": [
      217,
      93.52952492399575
     ],
     "P415": [
      220.00000000000003,
      92.42591527857851
     ],
     "P416": [
      220.00000000000003,
      92.42591527857851
     ],
     "P417": [
      223,
      91.34752824916012
     ],
     "P418": [
      223,
      91.34752824916012
     ],
     "P419": [
      226.00000000000003,
      90.29442934979929
     ],
     "P420": [
      226.00000000000003,
      90.29442934979929
     ],
     "P421": [
      229,
      89.2666139920174
     ],
     "P422": [
      229,
      89.2666139920174
     ],
     "P423": [
      232,
      88.2640151400962
     ],
     "P424": [
      232,
      88.2640151400962
     ],
     "P425": [
      235.00000000000003,
      87.28651024990444
     ],
     "P426": [
      235.00000000000003,
      87.28651024990444
     ],
     "P427": [
      238,
      86.33392756110018
     ],
     "P428": [
      238,
      86.33392756110018
     ],
     "P429": [
      241.00000000000003,
      85.40605180490553
     ],
     "P430": [
      241.00000000000003,
      85.40605180490553
     ],
     "P431": [
      244,
      84.50262938296427
     ],
     "P432": [
      244,
      84.50262938296427
     ],
     "P433": [
      247,
      83.62337306693146
     ],
     "P434": [
      247,
      83.62337306693146
     ],
     "P435": [
      250.00000000000003,
      82.76796626329349
     ],
     "P436": [
      250.00000000000003,
      82.76796626329349
     ],
     "P437": [
      253,
      81.93606688337607
     ],
     "P438": [
      253,
      81.93606688337607
     ],
     "P439": [
      256,
      81.12731085448468
     ],
     "P440": [
      256,
      81.12731085448468
     ],
     "P441": [
      259,
      80.34131530456776
     ],
     "P442": [
      259,
      80.34131530456776
     ],
     "P443": [
      262,
      79.57768144963666
     ],
     "P444": [
      262,
      79.57768144963666
     ],
     "P445": [
      265,
      78.83599721036646
     ],
     "P446": [
      265,
      78.83599721036646
     ],
     "P447": [
      268,
      78.11583958179747
     ],
     "P448": [
      268,
      78.11583958179747
     ],
     "P449": [
      271,
      77.41677677781752
     ],
     "P450": [
      271,
      77.41677677781752
     ],
     "P451": [
      274,
      76.73837017010064
     ],
     "P452": [
      274,
      76.73837017010064
     ],
     "P453": [
      277,
      76.08017603937907
     ],
     "P454": [
      277,
      76.08017603937907
     ],
     "P455": [
      280,
      75.44174715530932
     ],
     "P456": [
      280,
      75.44174715530932
     ],
     "P457": [
      283,
      74.82263419973862
     ],
     "P458": [
      283,
      74.82263419973862
     ],
     "P459": [
      286,
      74.22238704686504
     ],
     "P460": [
      286,
      74.22238704686504
     ],
     "P461": [
      289,
      73.64055591260194
     ],
     "P462": [
      289,
      73.64055591260194
     ],
     "P463": [
      292,
      73.07669238438436
     ],
     "P464": [
      292,
      73.07669238438436
     ],
     "P465": [
      295,
      72.53035034168656
     ],
     "P466": [
      295,
      72.53035034168656
     ],
     "P467": [
      298,
      72.00108677663945
     ],
     "P468": [
      298,
      72.00108677663945
     ],
     "P469": [
      301,
      71.48846252333877
     ],
     "P470": [
      301,
      71.48846252333877
     ],
     "P471": [
      304,
      70.9920429037087
     ],
     "P472": [
      304,
      70.9920429037087
     ],
     "P473": [
      307,
      70.51139829712577
     ],
     "P474": [
      307,
      70.51139829712577
     ],
     "P475": [
      310,
      70.04610464040576
     ],
     "P476": [
      310,
      70.04610464040576
     ],
     "P477": [
      313,
      69.59574386420854
     ],
     "P478": [
      313,
      69.59574386420854
     ],
     "P479": [
      316,
      69.1599042714142
     ],
     "P480": [
      316,
      69.1599042714142
     ],
     "P481": [
      319,
      68.7381808625673
     ],
     "P482": [
      319,
      68.7381808625673
     ],
     "P483": [
      322,
      68.33017561306775
     ],
     "P484": [
      322,
      68.33017561306775
     ],
     "P485": [
      325,
      67.93549770640368
     ],
     "P486": [
      325,
      67.93549770640368
     ],
     "P487": [
      328,
      67.55376372737211
     ],
     "P488": [
      328,
      67.55376372737211
     ],
     "P489": [
      331,
      67.18459781891107
     ],
     "P490": [
      331,
      67.18459781891107
     ],
     "P491": [
      334,
      66.82763180587338
     ],
     "P492": [
      334,
      66.82763180587338
     ],
     "P493": [
      337,
      66.48250528880152
     ],
     "P494": [
      337,
      66.48250528880152
     ],
     "P495": [
      340,
      66.14886571051494
     ],
     "P496": [
      340,
      66.14886571051494
     ],
     "P497": [
      343.00000000000006,
      65.82636839809322
     ],
     "P498": [
      343.00000000000006,
      65.82636839809322
     ],
     "P499": [
      346,
      65.51467658262936
     ],
     "P500": [
      346,
      65.51467658262936
     ],
     "P501": [
      349,
      65.21346139893441
     ],
     "P502": [
      349,
      65.21346139893441
     ],
     "P503": [
      352,
      64.92240186719755
     ],
     "P504": [
      352,
      64.92240186719755
     ],
     "P505": [
      355,
      64.64118485844264
     ],
     "P506": [
      355,
      64.64118485844264
     ],
     "P507": [
      358.00000000000006,
      64.36950504547207
     ],
     "P508": [
      358.00000000000006,
      64.36950504547207
     ],
     "P509": [
      361,
      64.10706484085046
     ],
     "P510": [
      361,
      64.10706484085046
     ],
     "P511": [
      364,
      63.85357432335289
     ],
     "P512": [
      364,
      63.85357432335289
     ],
     "P513": [
      367,
      63.608751154185626
     ],
     "P514": [
      367,
      63.608751154185626
     ],
     "P515": [
      370.00000000000006,
      63.372320484178374
     ],
     "P516": [
      370.00000000000006,
      63.372320484178374
     ],
     "P517": [
      373.00000000000006,
      63.14401485304762
     ],
     "P518": [
      373.00000000000006,
      63.14401485304762
     ],
     "P519": [
      376,
      62.92357408173814
     ],
     "P520": [
      376,
      62.92357408173814
     ],
     "P521": [
      379,
      62.71074515876569
     ],
     "P522": [
      379,
      62.71074515876569
     ],
     "P523": [
      382,
      62.505282121404434
     ],
     "P524": [
      382,
      62.505282121404434
     ],
     "P525": [
      385.00000000000006,
      62.3069459324914
     ],
     "P526": [
      385.00000000000006,
      62.3069459324914
     ],
     "P527": [
      388.00000000000006,
      62.115504353552836
     ],
     "P528": [
      388.00000000000006,
      62.115504353552836
     ],
     "P529": [
      391,
      61.930731814896575
     ],
     "P530": [
      391,
      61.930731814896575
     ],
     "P531": [
      394,
      61.752409283256924
     ],
     "P532": [
      394,
      61.752409283256924
     ],
     "P533": [
      397,
      61.58032412752701
     ],
     "P534": [
      397,
      61.58032412752701
     ],
     "P535": [
      400.00000000000006,
      61.414269983064685
     ],
     "P536": [
      400.00000000000006,
      61.414269983064685
     ],
     "P537": [
      403.00000000000006,
      61.25404661501403
     ],
     "P538": [
      403.00000000000006,
      61.25404661501403
     ],
     "P539": [
      406,
      61.09945978104264
     ],
     "P540": [
      406,
      61.09945978104264
     ],
     "P541": [
      409,
      60.95032109385812
     ],
     "P542": [
      409,
      60.95032109385812
     ],
     "P543": [
      412,
      60.80644788383097
     ],
     "P544": [
      412,
      60.80644788383097
     ],
     "P545": [
      415.00000000000006,
      60.667663062020154
     ],
     "P546": [
      415.00000000000006,
      60.667663062020154
     ],
     "P547": [
      418.00000000000006,
      60.53379498386673
     ],
     "P548": [
      418.00000000000006,
      60.53379498386673
     ],
     "P549": [
      421,
      60.40467731379482
     ],
     "P550": [
      421,
      60.40467731379482
     ],
     "P551": [
      424,
      60.28014889093288
     ],
     "P552": [
      424,
      60.28014889093288
     ],
     "P553": [
      427,
      60.16005359614573
     ],
     "P554": [
      427,
      60.16005359614573
     ],
     "P555": [
      430.00000000000006,
      60.04424022054678
     ],
     "P556": [
      430.00000000000006,
      60.04424022054678
     ],
     "P557": [
      433.00000000000006,
      59.932562335639176
     ],
     "P558": [
      433.00000000000006,
      59.932562335639176
     ],
     "P559": [
      436,
      59.824878165217655
     ],
     "P560": [
      436,
      59.824878165217655
     ],
     "P561": [
      439,
      59.72105045914617
     ],
     "P562": [
      439,
      59.72105045914617
     ],
     "P563": [
      442,
      59.62094636911044
     ],
     "P564": [
      442,
      59.62094636911044
     ],
     "P565": [
      445.00000000000006,
      59.524437326431496
     ],
     "P566": [
      445.00000000000006,
      59.524437326431496
     ],
     "P567": [
      448.00000000000006,
      59.431398922013216
     ],
     "P568": [
      448.00000000000006,
      59.431398922013216
     ],
     "P569": [
      451,
      59.34171078848502
     ],
     "P570": [
      451,
      59.34171078848502
     ],
     "P571": [
      454,
      59.25525648459026
     ],
     "P572": [
      454,
      59.25525648459026
     ],
     "P573": [
      457,
      59.17192338186152
     ],
     "P574": [
      457,
      59.17192338186152
     ],
     "P575": [
      460.00000000000006,
      59.09160255361414
     ],
     "P576": [
      460.00000000000006,
      59.09160255361414
     ],
     "P577": [
      463.00000000000006,
      59.01418866628231
     ],
     "P578": [
      463.00000000000006,
      59.01418866628231
     ],
     "P579": [
      466,
      58.9395798731139
     ],
     "P580": [
      466,
      58.9395798731139
     ],
     "P581": [
      469,
      58.86767771023369
     ],
     "P582": [
      469,
      58.86767771023369
     ],
     "P583": [
      472,
      58.79838699507843
     ],
     "P584": [
      472,
      58.79838699507843
     ],
     "P585": [
      475.00000000000006,
      58.73161572720235
     ],
     "P586": [
      475.00000000000006,
      58.73161572720235
     ],
     "P587": [
      478.00000000000006,
      58.667274991445424
     ],
     "P588": [
      478.00000000000006,
      58.667274991445424
     ],
     "P589": [
      481,
      58.605278863453634
     ],
     "P590": [
      481,
      58.605278863453634
     ],
     "P591": [
      484,
      58.545544317535274
     ],
     "P592": [
      484,
      58.545544317535274
     ],
     "P593": [
      487,
      58.487991136834694
     ],
     "P594": [
      487,
      58.487991136834694
     ],
     "P595": [
      490.00000000000006,
      58.432541825800485
     ],
     "P596": [
      490.00000000000006,
      58.432541825800485
     ],
     "P597": [
      493.00000000000006,
      58.379121524923875
     ],
     "P598": [
      493.00000000000006,
      58.379121524923875
     ],
     "P599": [
      496,
      58.327657927718406
     ],
     "P600": [
      496,
      58.327657927718406
     ],
     "P601": [
      499,
      58.27808119991198
     ],
     "P602": [
      499,
      58.27808119991198
     ],
     "P603": [
      502,
      58.23032390081872
     ],
     "P604": [
      502,
      58.23032390081872
     ],
     "P605": [
      505.00000000000006,
      58.184320906856755
     ],
     "P606": [
      505.00000000000006,
      58.184320906856755
     ],
     "P607": [
      508.00000000000006,
      58.1400093371777
     ],
     "P608": [
      508.00000000000006,
      58.1400093371777
     ],
     "P609": [
      511,
      58.09732848137011
     ],
     "P610": [
      511,
      58.09732848137011
     ],
     "P611": [
      514,
      58.05621972920068
     ],
     "P612": [
      514,
      58.05621972920068
     ],
     "P613": [
      517,
      58.016626502353745
     ],
     "P614": [
      517,
      58.016626502353745
     ],
     "P615": [
      520,
      57.97849418813087
     ],
     "P616": [
      520,
      57.97849418813087
     ],
     "P617": [
      523,
      57.941770075070224
     ],
     "P618": [
      523,
      57.941770075070224
     ],
     "P619": [
      526,
      57.906403290445866
     ],
     "P620": [
      526,
      57.906403290445866
     ],
     "P621": [
      529,
      57.87234473960689
     ],
     "P622": [
      529,
      57.87234473960689
     ],
     "P623": [
      532,
      57.839547047115104
     ],
     "P624": [
      532,
      57.839547047115104
     ],
     "P625": [
      535,
      57.80796449964146
     ],
     "P626": [
      535,
      57.80796449964146
     ],
     "P627": [
      538,
      57.77755299057986
     ],
     "P628": [
      538,
      57.77755299057986
     ],
     "P629": [
      541,
      57.74826996633831
     ],
     "P630": [
      541,
      57.74826996633831
     ],
     "P631": [
      544,
      57.720074374266716
     ],
     "P632": [
      544,
      57.720074374266716
     ],
     "P633": [
      547,
      57.69292661218137
     ],
     "P634": [
      547,
      57.69292661218137
     ],
     "P635": [
      550,
      57.66678847944647
     ],
     "P636": [
      550,
      57.66678847944647
     ],
     "P637": [
      553,
      57.64162312957268
     ],
     "P638": [
      553,
      57.64162312957268
     ],
     "P639": [
      556,
      57.61739502429458
     ],
     "P640": [
      556,
      57.61739502429458
     ],
     "P641": [
      559,
      57.59406988908751
     ],
     "P642": [
      559,
      57.59406988908751
     ],
     "P643": [
      562,
      57.571614670086376
     ],
     "P644": [
      238,
      190
     ],
     "P645": [
      238,
      57
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323P324P325P326P327P328P329P330P331P332P333P334P335P336P337P338P339P340P341P342P343P344P345P346P347P348P349P350P351P352P353P354P355P356P357P358P359P360P361P362P363P364P365P366P367P368P369P370P371P372P373P374P375P376P377P378P379P380P381P382P383P384P385P386P387P388P389P390P391P392P393P394P395P396P397P398P399P400P401P402P403P404P405P406P407P408P409P410P411P412P413P414P415P416P417P418P419P420P421P422P423P424P425P426P427P428P429P430P431P432P433P434P435P436P437P438P439P440P441P442P443P444P445P446P447P448P449P450P451P452P453P454P455P456P457P458P459P460P461P462P463P464P465P466P467P468P469P470P471P472P473P474P475P476P477P478P479P480P481P482P483P484P485P486P487P488P489P490P491P492P493P494P495P496P497P498P499P500P501P502P503P504P505P506P507P508P509P510P511P512P513P514P515P516P517P518P519P520P521P522P523P524P525P526P527P528P529P530P531P532P533P534P535P536P537P538P539P540P541P542P543P544P545P546P547P548P549P550P551P552P553P554P555P556P557P558P559P560P561P562P563P564P565P566P567P568P569P570P571P572P573P574P575P576P577P578P579P580P581P582P583P584P585P586P587P588P589P590P591P592P593P594P595P596P597P598P599P600P601P602P603P604P605P606P607P608P609P610P611P612P613P614P615P616P617P618P619P620P621P622P623P624P625P626P627P628P629P630P631P632P633P634P635P636P637P638P639P640P641P642P643P644P645",
    "dots": "",
    "polys": [],
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
      "w": 2
     },
     {
      "v": "P6P7",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P8P9",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P12P13",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P16P17",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P18P19",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P20P21",
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 1,
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P326P327",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P328P329",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P330P331",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P332P333",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P334P335",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P336P337",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P338P339",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P340P341",
      "col": 2,
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
     },
     {
      "v": "P344P345",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P346P347",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P348P349",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P350P351",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P352P353",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P354P355",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P356P357",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P358P359",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P360P361",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P362P363",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P364P365",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P366P367",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P368P369",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P370P371",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P372P373",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P374P375",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P376P377",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P378P379",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P380P381",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P382P383",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P384P385",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P386P387",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P388P389",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P390P391",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P392P393",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P394P395",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P396P397",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P398P399",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P400P401",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P402P403",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P404P405",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P406P407",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P408P409",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P410P411",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P412P413",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P414P415",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P416P417",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P418P419",
      "col": 2,
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
     },
     {
      "v": "P422P423",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P424P425",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P426P427",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P428P429",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P430P431",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P432P433",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P434P435",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P436P437",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P438P439",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P440P441",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P442P443",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P444P445",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P446P447",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P448P449",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P450P451",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P452P453",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P454P455",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P456P457",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P458P459",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P460P461",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P462P463",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P464P465",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P466P467",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P468P469",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P470P471",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P472P473",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P474P475",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P476P477",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P478P479",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P480P481",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P482P483",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P484P485",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P486P487",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P488P489",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P490P491",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P492P493",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P494P495",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P496P497",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P498P499",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P500P501",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P502P503",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P504P505",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P506P507",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P508P509",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P510P511",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P512P513",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P514P515",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P516P517",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P518P519",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P520P521",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P522P523",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P524P525",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P526P527",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P528P529",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P530P531",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P532P533",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P534P535",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P536P537",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P538P539",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P540P541",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P542P543",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P544P545",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P546P547",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P548P549",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P550P551",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P552P553",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P554P555",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P556P557",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P558P559",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P560P561",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P562P563",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P564P565",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P566P567",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P568P569",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P570P571",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P572P573",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P574P575",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P576P577",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P578P579",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P580P581",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P582P583",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P584P585",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P586P587",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P588P589",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P590P591",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P592P593",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P594P595",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P596P597",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P598P599",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P600P601",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P602P603",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P604P605",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P606P607",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P608P609",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P610P611",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P612P613",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P614P615",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P616P617",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P618P619",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P620P621",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P622P623",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P624P625",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P626P627",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P628P629",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P630P631",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P632P633",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P634P635",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P636P637",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P638P639",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P640P641",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P642P643",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P644P645",
      "col": 3,
      "arrows": 0,
      "dash": true,
      "w": 2
     }
    ],
    "circles": [],
    "notes": [
     {
      "at": [
       374,
       207
      ],
      "text": "Cooler (orange), warmer (green)",
      "col": 0
     },
     {
      "at": [
       359,
       176
      ],
      "text": "Fixed threshold",
      "col": 3
     },
     {
      "at": [
       363,
       120
      ],
      "text": "Compare area to its right",
      "col": 0
     },
     {
      "at": [
       112,
       219
      ],
      "text": "Density",
      "col": 0
     },
     {
      "at": [
       435,
       36
      ],
      "text": "Energy (arbitrary units)",
      "col": 0
     }
    ]
   }
  ]
 },
 {
  "code": "5.6",
  "name": "Reaction Energy Profile",
  "skill": "s6",
  "teach": [
   "An energy profile follows reaction progress from reactants through a transition state to products. Its horizontal axis represents rearrangement along a reaction coordinate, not elapsed time. In a hypothetical profile measured in kJ/mol, reactants are at 20, the peak at 80 and products at 5. The forward activation energy is 80 - 20 = 60 kJ/mol; the reverse barrier is 80 - 5 = 75 kJ/mol. Subtract from the appropriate starting level, rather than reading the peak's absolute height as a barrier.",
   "The endpoint difference in that profile is 5 - 20 = -15 kJ/mol. If the vertical coordinate is enthalpy, it is ΔH: a negative value describes an exothermic direction. A downhill endpoint does not imply a fast reaction, because the activation barrier is a separate difference. Raising temperature can increase the rate constant by increasing the fraction that can reach the transition state; this is the qualitative Arrhenius relationship for a positive barrier. AP Chemistry's current outline excludes numerical Arrhenius-equation calculations, so this unit uses the relationship qualitatively."
  ],
  "boards": [
   [
    "Energy levels (kJ/mol): R 20, peak 80, P 5",
    "Forward barrier: 80 - 20 = 60",
    "Reverse barrier: 80 - 5 = 75",
    "Horizontal axis: reaction coordinate, not time"
   ],
   [
    "Enthalpy change: 5 - 20 = -15 kJ/mol",
    "Downhill endpoints can still have a high barrier",
    "Temperature affects access to transition state",
    "Do not confuse ΔH with activation energy"
   ]
  ],
  "eqs": [
   "Ea(forward) = Epeak - Ereactants; Ea(reverse) = Epeak - Eproducts",
   "ΔH = Hproducts - Hreactants = -15 kJ/mol; Ea(f) - Ea(r) = ΔH"
  ],
  "questions": [
   [
    "A profile has reactants at 10, a peak at 70 and products at 25 kJ/mol. What is the forward activation energy?",
    "60 kJ/mol",
    "70 kJ/mol",
    "45 kJ/mol",
    "Subtract the reactant level from the peak: 70 - 10 = 60 kJ/mol. The absolute peak value is not the barrier."
   ],
   [
    "A profile has reactants at 10, a peak at 70 and products at 25 kJ/mol. What is the reverse activation energy?",
    "45 kJ/mol",
    "60 kJ/mol",
    "15 kJ/mol",
    "The reverse direction starts at the product level, so its barrier is 70 - 25 = 45 kJ/mol."
   ],
   [
    "An enthalpy profile has reactants at 10 and products at 25 kJ/mol. What is forward ΔH?",
    "+15 kJ/mol",
    "-15 kJ/mol",
    "+35 kJ/mol",
    "Products minus reactants gives 25 - 10 = +15 kJ/mol, an endothermic direction."
   ],
   [
    "What does the horizontal axis of a standard reaction energy profile represent?",
    "Reaction coordinate",
    "Elapsed seconds necessarily",
    "Number of molecules remaining",
    "The coordinate tracks molecular rearrangement along a pathway; it is not a clock or a concentration axis."
   ],
   [
    "On a one-step energy profile, what does the maximum along the pathway represent?",
    "A transition state",
    "A stable intermediate valley",
    "The final product concentration",
    "The peak marks the transition state along the selected reaction coordinate, not a valley representing an intermediate."
   ],
   [
    "A reaction is exothermic but has a large forward activation barrier. Which statement is justified?",
    "Heat release alone does not establish a fast rate",
    "Every exothermic reaction is instantaneous",
    "A negative ΔH requires zero activation energy",
    "The endpoint energy change and barrier are different quantities. A large barrier can make an exothermic process slow."
   ],
   [
    "A one-step profile has Ea(forward) = 40 and Ea(reverse) = 65 kJ/mol. What is its forward endpoint energy change?",
    "-25 kJ/mol",
    "+25 kJ/mol",
    "105 kJ/mol",
    "Subtract reverse barrier from forward barrier: 40 - 65 = -25 kJ/mol, equal to product minus reactant energy."
   ],
   [
    "The same elementary pathway is warmed while its positive activation barrier remains approximately unchanged. What qualitative Arrhenius effect is expected?",
    "Its rate constant increases",
    "Its rate constant must become zero",
    "Its product energy must equal the transition state energy",
    "For a positive barrier and approximately fixed prefactor, increasing temperature raises the rate constant through greater barrier access."
   ],
   [
    "A learner calls the vertical energy difference between reactants and products the activation energy. What should replace that label?",
    "The overall energy change",
    "The elapsed reaction time",
    "The number of elementary steps",
    "The endpoint difference is the overall energy change. Activation energy instead compares a starting state with a transition-state peak."
   ],
   [
    "An enthalpy profile ends lower than it begins. Which direction is exothermic?",
    "The forward direction shown",
    "Only the reverse direction",
    "Neither direction can be classified",
    "Lower final enthalpy means ΔH is negative for the forward direction; reversing that direction reverses the sign."
   ]
  ],
  "check": [
   "An enthalpy profile has reactants at 30, a peak at 90 and products at 10 kJ/mol. What are forward Ea and ΔH?",
   "60 and -20 kJ/mol",
   "90 and +20 kJ/mol",
   "80 and -60 kJ/mol",
   "Subtract 30 from the peak for Ea = 60; subtract 30 from the product level for ΔH = -20 kJ/mol."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "One-step profile: hypothetical energies",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      215
     ],
     "P1": [
      86,
      47
     ],
     "P2": [
      86,
      47
     ],
     "P3": [
      567,
      47
     ],
     "P4": [
      120,
      110
     ],
     "P5": [
      325,
      170
     ],
     "P6": [
      325,
      170
     ],
     "P7": [
      530,
      95
     ],
     "P8": [
      120,
      110
     ],
     "P9": [
      325,
      170
     ],
     "P10": [
      530,
      95
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10",
    "dots": "",
    "polys": [],
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
     }
    ],
    "circles": [
     {
      "c": "P8",
      "r": 4,
      "col": 1
     },
     {
      "c": "P9",
      "r": 4,
      "col": 1
     },
     {
      "c": "P10",
      "r": 4,
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       120,
       126
      ],
      "text": "R 20",
      "col": 0
     },
     {
      "at": [
       325,
       186
      ],
      "text": "Peak 80",
      "col": 0
     },
     {
      "at": [
       530,
       111
      ],
      "text": "P 5",
      "col": 0
     },
     {
      "at": [
       170,
       219
      ],
      "text": "Energy (kJ/mol)",
      "col": 0
     },
     {
      "at": [
       390,
       29
      ],
      "text": "Reaction coordinate",
      "col": 0
     }
    ]
   },
   null
  ],
  "qpics": {
   "0": {
    "t": "figure",
    "title": "Read levels; compute each requested difference",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      215
     ],
     "P1": [
      86,
      47
     ],
     "P2": [
      86,
      47
     ],
     "P3": [
      567,
      47
     ],
     "P4": [
      120,
      100
     ],
     "P5": [
      325,
      160
     ],
     "P6": [
      325,
      160
     ],
     "P7": [
      530,
      115
     ],
     "P8": [
      120,
      100
     ],
     "P9": [
      325,
      160
     ],
     "P10": [
      530,
      115
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10",
    "dots": "",
    "polys": [],
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
     }
    ],
    "circles": [
     {
      "c": "P8",
      "r": 4,
      "col": 1
     },
     {
      "c": "P9",
      "r": 4,
      "col": 1
     },
     {
      "c": "P10",
      "r": 4,
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       120,
       116
      ],
      "text": "R 10",
      "col": 0
     },
     {
      "at": [
       325,
       176
      ],
      "text": "Peak 70",
      "col": 0
     },
     {
      "at": [
       530,
       131
      ],
      "text": "P 25",
      "col": 0
     },
     {
      "at": [
       170,
       219
      ],
      "text": "Energy (kJ/mol)",
      "col": 0
     },
     {
      "at": [
       390,
       29
      ],
      "text": "Reaction coordinate",
      "col": 0
     }
    ]
   },
   "1": {
    "t": "figure",
    "title": "Read levels; compute each requested difference",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      215
     ],
     "P1": [
      86,
      47
     ],
     "P2": [
      86,
      47
     ],
     "P3": [
      567,
      47
     ],
     "P4": [
      120,
      100
     ],
     "P5": [
      325,
      160
     ],
     "P6": [
      325,
      160
     ],
     "P7": [
      530,
      115
     ],
     "P8": [
      120,
      100
     ],
     "P9": [
      325,
      160
     ],
     "P10": [
      530,
      115
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10",
    "dots": "",
    "polys": [],
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
     }
    ],
    "circles": [
     {
      "c": "P8",
      "r": 4,
      "col": 1
     },
     {
      "c": "P9",
      "r": 4,
      "col": 1
     },
     {
      "c": "P10",
      "r": 4,
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       120,
       116
      ],
      "text": "R 10",
      "col": 0
     },
     {
      "at": [
       325,
       176
      ],
      "text": "Peak 70",
      "col": 0
     },
     {
      "at": [
       530,
       131
      ],
      "text": "P 25",
      "col": 0
     },
     {
      "at": [
       170,
       219
      ],
      "text": "Energy (kJ/mol)",
      "col": 0
     },
     {
      "at": [
       390,
       29
      ],
      "text": "Reaction coordinate",
      "col": 0
     }
    ]
   },
   "2": {
    "t": "figure",
    "title": "Read levels; compute each requested difference",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      215
     ],
     "P1": [
      86,
      47
     ],
     "P2": [
      86,
      47
     ],
     "P3": [
      567,
      47
     ],
     "P4": [
      120,
      100
     ],
     "P5": [
      325,
      160
     ],
     "P6": [
      325,
      160
     ],
     "P7": [
      530,
      115
     ],
     "P8": [
      120,
      100
     ],
     "P9": [
      325,
      160
     ],
     "P10": [
      530,
      115
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10",
    "dots": "",
    "polys": [],
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
     }
    ],
    "circles": [
     {
      "c": "P8",
      "r": 4,
      "col": 1
     },
     {
      "c": "P9",
      "r": 4,
      "col": 1
     },
     {
      "c": "P10",
      "r": 4,
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       120,
       116
      ],
      "text": "R 10",
      "col": 0
     },
     {
      "at": [
       325,
       176
      ],
      "text": "Peak 70",
      "col": 0
     },
     {
      "at": [
       530,
       131
      ],
      "text": "P 25",
      "col": 0
     },
     {
      "at": [
       170,
       219
      ],
      "text": "Energy (kJ/mol)",
      "col": 0
     },
     {
      "at": [
       390,
       29
      ],
      "text": "Reaction coordinate",
      "col": 0
     }
    ]
   }
  }
 },
 {
  "code": "5.7",
  "name": "Introduction to Reaction Mechanisms",
  "skill": "s7",
  "teach": [
   "A mechanism proposes a sequence of elementary events. Add the steps and cancel species appearing equally on both sides to obtain the net equation. For the formal sequence A + B → I, then I + B → P, cancellation of I leaves A + 2B → P. I is an intermediate: one step forms it and a later step consumes it. Cancellation does not mean I never existed; it means it is not a net reactant or product. The proposed steps must be consistent with the overall composition change and with measured kinetics.",
   "A catalyst has a different role from an intermediate. In C + A → I followed by I → C + P, C is consumed and regenerated, while I is formed and then consumed. The net transformation is A → P. Free C need not remain constant at every instant because some can be bound in I; regeneration concerns the completed catalytic cycle. Detecting a predicted intermediate can support a mechanism, but matching the net equation alone does not prove the steps. Distinct mechanisms can share a net equation and even the same measured rate law."
  ],
  "boards": [
   [
    "A + B → I; I + B → P",
    "Cancel I to get A + 2B → P",
    "I: formed, then consumed",
    "Net cancellation does not mean nonexistence"
   ],
   [
    "C + A → I; I → C + P",
    "C: consumed, then regenerated",
    "I: intermediate; C: catalyst",
    "Test proposed steps against experimental evidence"
   ]
  ],
  "eqs": [
   "(A + B → I) + (I + B → P) gives A + 2B → P",
   "(C + A → I) + (I → C + P) gives A → P"
  ],
  "questions": [
   [
    "Add the formal steps A + B → I and I + B → P. What is the net equation?",
    "A + 2B → P",
    "A + B → I + P",
    "2A + B → P",
    "I is produced once and consumed once, so it cancels. Two B are consumed across the two steps."
   ],
   [
    "In A + B → I followed by I + B → P, which species is an intermediate?",
    "Species I",
    "Species A",
    "Species P",
    "I is formed in the first step and consumed in the second; it is absent from the net equation."
   ],
   [
    "Add C + A → I and I → C + P. What is the net transformation?",
    "A → P",
    "C + A → P",
    "A → C + P",
    "Both C and I appear equally on both sides of the summed steps, leaving A → P."
   ],
   [
    "In C + A → I followed by I → C + P, what role does C play?",
    "Catalyst",
    "Net product",
    "Intermediate formed only after the first step",
    "C participates as a reactant and is regenerated, so the completed cycle has no net consumption of C."
   ],
   [
    "In C + A → I followed by I → C + P, what role does I play?",
    "Intermediate",
    "Catalyst initially supplied as C",
    "Net reactant consumed in the overall equation",
    "I is made and later consumed, distinguishing it from C, which is consumed then regenerated."
   ],
   [
    "What must the sum of proposed elementary steps reproduce after cancellation?",
    "The overall balanced transformation",
    "Only the number of graph axes",
    "Only the temperature unit",
    "A mechanism must account for the net reactants and products; mismatched stoichiometry rules out the proposal as written."
   ],
   [
    "A predicted transient species is detected during a reaction. What is the soundest interpretation?",
    "It provides evidence relevant to the proposed mechanism",
    "It proves every proposed step uniquely",
    "It shows intermediates must appear in the net equation",
    "Intermediate detection can support a proposed path, but other evidence is needed to distinguish alternatives and verify all steps."
   ],
   [
    "An intermediate cancels when steps are added. Does this imply it never exists during the reaction?",
    "No; it can exist transiently",
    "Yes; cancellation proves it is fictional",
    "Yes; only net products can ever exist",
    "Algebraic cancellation records zero net change across the completed sequence, not absence at every instant."
   ],
   [
    "Why can the concentration of free catalyst temporarily fall during a catalytic cycle?",
    "Some catalyst can be bound in an intermediate",
    "Catalysts must be net reactants in every cycle",
    "A catalyst cannot participate in a step",
    "A catalyst can be temporarily incorporated in an intermediate before regeneration; free and total catalyst are different quantities."
   ],
   [
    "Two proposed mechanisms sum to the same net equation. What additional evidence helps compare them?",
    "Their rate-law predictions and intermediate evidence",
    "Only the order in which the equation is printed",
    "Only whether both use arrows",
    "Net stoichiometry is a necessary check but not a unique mechanism identifier; kinetic and intermediate evidence can discriminate."
   ]
  ]
 },
 {
  "code": "5.8",
  "name": "Reaction Mechanism and Rate Law",
  "skill": "s8",
  "teach": [
   "When the first elementary step is rate limiting and later steps are fast under the stated conditions, the first step controls the leading rate-law prediction. For slow A + B → I followed by fast I + B → P, the net equation is A + 2B → P, but the predicted product formation rate is k[A][B]. The second B is used downstream and does not supply another exponent in this approximation. This is a concrete reason not to copy overall coefficients into a rate law.",
   "A candidate mechanism must agree with observed concentration dependence. If experiments give r = k[A]^2 with no B dependence over the tested range, the preceding k[A][B] prediction fails in that range. A slow elementary 2A → I followed by a fast step could instead produce an [A]^2 dependence. Agreement supports consistency, not unique proof. The designation 'fast' is conditional: severely depleting a later reactant can invalidate the assumption that its step stays fast. State the conditions under which a proposed bottleneck approximation is being used."
  ],
  "boards": [
   [
    "Slow: A + B → I",
    "Fast: I + B → P",
    "Net: A + 2B → P; predicted rate k[A][B]",
    "The downstream B does not add an exponent"
   ],
   [
    "Compare predicted law with measured orders",
    "Disagreement rejects this model in that regime",
    "Agreement does not establish a unique mechanism",
    "Keep the stated fast-step assumptions valid"
   ]
  ],
  "eqs": [
   "Slow first elementary A + B step: r ≈ k[A][B]",
   "Slow first elementary 2A step: r ≈ k[A]^2"
  ],
  "questions": [
   [
    "A + B → I is elementary and rate limiting; I + B → P is fast. What rate law is predicted under these assumptions?",
    "k[A][B]",
    "k[A][B]^2",
    "k[I] alone",
    "The slow first step involves one A and one B. The additional B in the fast step does not enter this approximation."
   ],
   [
    "For slow elementary A + B → I then fast I + B → P, why is a [B]^2 factor not justified?",
    "Overall coefficients do not replace the slow-step molecularity",
    "B is not consumed anywhere",
    "Every reaction must be first order overall",
    "The net equation consumes two B, but only one B participates in the stated rate-limiting elementary event."
   ],
   [
    "An elementary 2A → I step is rate limiting and subsequent steps are fast. What concentration dependence is predicted?",
    "Second order in A",
    "First order in A",
    "Zero order in A",
    "The slow event requires two A particles, giving rate proportional to [A]^2 under the assumed mechanism."
   ],
   [
    "An elementary A → I step is rate limiting, followed by fast I + B → P. What rate law is predicted?",
    "k[A]",
    "k[A][B]",
    "k[B]",
    "The rate-limiting unimolecular first step depends on A alone, provided the later B-dependent step remains fast."
   ],
   [
    "A candidate mechanism predicts rate proportional to [A][B], but reliable data show no B dependence in the same regime. What follows?",
    "The candidate prediction conflicts with those data",
    "The mechanism is uniquely proven",
    "The measured order must equal the overall coefficient",
    "A model that predicts a B effect disagrees with an observed zero order in B under the same conditions."
   ],
   [
    "A proposed mechanism matches the net equation and measured rate law. What is the strongest warranted claim?",
    "It is consistent with these tests",
    "It is the only possible mechanism",
    "No intermediate evidence could add information",
    "Different mechanisms can pass the same limited tests, so agreement supports consistency rather than uniqueness."
   ],
   [
    "For a mechanism predicting r = k[A][B], doubling only [B] at fixed temperature should change rate by what factor?",
    "2",
    "4",
    "1",
    "A first-power B factor makes the predicted rate proportional to B, so doubling it doubles the rate."
   ],
   [
    "For a slow first step predicting r = k[A]^2, tripling [A] at fixed temperature changes rate by what factor?",
    "9",
    "3",
    "6",
    "The squared dependence gives 3^2 = 9, provided the same mechanism and rate-limiting assumption remain valid."
   ],
   [
    "A later B-dependent step was assumed fast. B is then nearly exhausted. Which caution is appropriate?",
    "The original fast-step approximation may fail",
    "The step must stay fast under all concentrations",
    "The first-step coefficient automatically changes",
    "A step fast under one set of concentrations may no longer remain fast after its reactant becomes scarce."
   ],
   [
    "Which proposed rate-limiting first elementary step directly predicts a law proportional to [A]^2?",
    "2A → I",
    "A + B → I",
    "A → I",
    "The elementary 2A event supplies two A concentration factors; the other proposed first steps predict different dependence."
   ]
  ]
 },
 {
  "code": "5.9",
  "name": "Pre-Equilibrium Approximation",
  "skill": "s9",
  "teach": [
   "A slow step after a fast reversible step often contains an intermediate. Use an explicit pre-equilibrium assumption to eliminate it. Consider fast A + B ⇌ I with forward k1 and reverse k_1, then slow I + C → P with k2. If the first step re-equilibrates much faster than I is removed downstream, k1[A][B] ≈ k_1[I]. Therefore [I] ≈ (k1/k_1)[A][B]. Substitute this into r = k2[I][C] to obtain r ≈ (k2 k1/k_1)[A][B][C]. Equal forward and reverse rates do not mean equal concentrations or zero molecular activity.",
   "Different equilibria give different substitutions. For fast 2A ⇌ I followed by slow I + B → P, [I] ≈ (k1/k_1)[A]^2 and rate ≈ (k2 k1/k_1)[A]^2[B]. The overall third order arises from this sequence without a three-particle elementary event. For a hypothetical concentration-based ratio Kc = [I]/[A]^2 = 4.0 M^-1 and [A] = 0.20 M, [I] ≈ 0.16 M; if k2 = 3.0 M^-1 s^-1 and [B] = 0.50 M, rate ≈ 0.24 M/s. These stated concentration units keep the dimensional calculation explicit. Do not assume pre-equilibrium when downstream removal competes strongly with the reverse step."
  ],
  "boards": [
   [
    "Fast A + B ⇌ I; slow I + C → P",
    "k1[A][B] ≈ k_1[I]",
    "[I] ≈ (k1/k_1)[A][B]",
    "Rate ≈ (k2 k1/k_1)[A][B][C]"
   ],
   [
    "Fast 2A ⇌ I: [I] ≈ Kc[A]^2",
    "Kc = 4.0 M^-1; [A] = 0.20 M",
    "[I] = 4.0 × 0.20^2 = 0.16 M",
    "Rate = 3.0 × 0.16 × 0.50 = 0.24 M/s"
   ]
  ],
  "eqs": [
   "k1[A][B] ≈ k_1[I]; r ≈ k2(k1/k_1)[A][B][C]",
   "For 2A ⇌ I: r ≈ k2 Kc[A]^2[B]"
  ],
  "questions": [
   [
    "Fast A + B ⇌ I precedes slow I + C → P. Under pre-equilibrium, which equality is used?",
    "k1[A][B] ≈ k_1[I]",
    "[A] = [B] = [I]",
    "k1 = k_1 necessarily",
    "The fast forward and reverse reaction rates are approximately equal. Their constants and concentrations need not be equal."
   ],
   [
    "From k1[A][B] ≈ k_1[I], which expression eliminates I?",
    "[I] ≈ (k1/k_1)[A][B]",
    "[I] ≈ (k_1/k1)[A][B]",
    "[I] ≈ k1 + k_1",
    "Divide by the reverse rate constant k_1 to isolate the intermediate concentration; do not invert the constant ratio."
   ],
   [
    "Fast A + B ⇌ I gives [I] ≈ Kc[A][B]. The slow step has r = k2[I][C]. What is the substituted law?",
    "r ≈ k2 Kc[A][B][C]",
    "r ≈ k2 Kc[A][B]/[C]",
    "r ≈ k2[I] only",
    "Substitute the intermediate expression and retain the C concentration factor required by the slow elementary step."
   ],
   [
    "Fast 2A ⇌ I gives [I] ≈ Kc[A]^2. Slow I + B → P follows. What is the predicted law?",
    "r ≈ k2 Kc[A]^2[B]",
    "r ≈ k2 Kc[A][B]",
    "r ≈ k2 Kc[A]^2/[B]",
    "The fast equilibrium supplies the squared A dependence; the slow step supplies one B factor."
   ],
   [
    "For fast 2A ⇌ I, Kc = [I]/[A]^2 = 5.0 M^-1 and [A] = 0.20 M. What is the approximate [I]?",
    "0.20 M",
    "1.0 M",
    "0.04 M",
    "Multiply Kc by [A] squared: 5.0 × 0.20^2 = 0.20 M. The concentration-ratio units leave M."
   ],
   [
    "A slow elementary I + B step has k2 = 2.0 M^-1 s^-1, [I] = 0.15 M and [B] = 0.40 M. What rate does it predict?",
    "0.12 M/s",
    "0.30 M/s",
    "0.75 M/s",
    "The bimolecular law gives 2.0 × 0.15 × 0.40 = 0.12 M/s."
   ],
   [
    "Which condition supports a pre-equilibrium approximation for A + B ⇌ I before slow consumption of I?",
    "The reversible step re-equilibrates much faster than I is removed",
    "I is consumed far faster than the reverse step can respond",
    "Forward and reverse concentrations must be equal",
    "Rapid equilibration relative to downstream depletion allows the first step to stay near its equilibrium relation."
   ],
   [
    "Why remove an intermediate concentration when predicting a law in terms of starting reactants?",
    "To connect the prediction to experimentally controlled reactant concentrations",
    "To claim the intermediate never exists",
    "To force every exponent to equal the net coefficient",
    "The substitution expresses the mechanism prediction in measurable reactant terms while retaining the intermediate role in the mechanism."
   ],
   [
    "A pre-equilibrium model predicts r = keff[A]^2[B]. Doubling A with B fixed multiplies the predicted rate by what?",
    "4",
    "2",
    "8",
    "The squared A dependence contributes a factor 2^2 = 4 when the approximation remains valid."
   ],
   [
    "A fast reversible step is approximately at equilibrium during a slower reaction. What does this mean microscopically?",
    "Forward and reverse events continue at approximately equal rates",
    "Both directions have stopped entirely",
    "All involved species have equal concentrations",
    "Equilibrium is dynamic: balanced rates do not require stopped events or equal species concentrations."
   ]
  ],
  "check": [
   "Fast A + B ⇌ I gives [I] ≈ Kc[A][B], followed by slow I → P. Which overall rate law follows?",
   "r ≈ k2 Kc[A][B]",
   "r ≈ k2 Kc[A]^2[B]",
   "r ≈ k2 Kc/[A][B]",
   "The slow unimolecular step gives r = k2[I]. Substitution adds one A factor and one B factor."
  ]
 },
 {
  "code": "5.10",
  "name": "Multistep Reaction Energy Profile",
  "skill": "s10",
  "teach": [
   "A multistep energy profile has one transition-state peak for each elementary step shown and intermediate valleys between peaks. In a fictional two-step enthalpy profile, the levels are reactants 0, first peak 50, intermediate -20, second peak 40, and products -30 kJ/mol. Step 1 has a forward barrier of 50 - 0 = 50 kJ/mol. Step 2 has a forward barrier of 40 - (-20) = 60 kJ/mol, even though its peak is lower on the page. Always measure from that step's own starting valley.",
   "For that profile, step 1 changes enthalpy by -20 and step 2 by -10 kJ/mol; their sum is the overall -30 kJ/mol. Reading backward gives barriers 40 - (-30) = 70 for the last step and 50 - (-20) = 70 kJ/mol for the first. A larger local barrier can imply a smaller elementary rate constant when temperature and prefactors are comparable, but assigning an overall bottleneck also requires the mechanism and concentrations. Do not declare the highest absolute peak the slowest step solely from its height. A valley represents an intermediate; a peak represents a transition state."
  ],
  "boards": [
   [
    "Levels: R 0; peak 1 50; I -20; peak 2 40; P -30",
    "Step 1 forward barrier: 50 - 0 = 50",
    "Step 2 forward barrier: 40 - (-20) = 60",
    "Measure from the immediately preceding valley"
   ],
   [
    "Step enthalpies: -20 and -10 kJ/mol",
    "Overall: -20 + (-10) = -30 kJ/mol",
    "Peaks: transition states; inner valleys: intermediates",
    "Barrier comparison needs kinetic assumptions"
   ]
  ],
  "eqs": [
   "Ea1 = 50; Ea2 = 60 kJ/mol despite peak 2 being lower",
   "ΔHtotal = ΔH1 + ΔH2 = -30 kJ/mol"
  ],
  "questions": [
   [
    "A pathway diagram has three transition-state peaks and two intervening valleys. How many elementary steps are shown?",
    "3",
    "2",
    "5",
    "Each transition-state peak belongs to an elementary step, so three peaks represent three steps along the depicted pathway."
   ],
   [
    "A pathway diagram has three peaks and two valleys between them. How many intermediate states are shown?",
    "2",
    "3",
    "5",
    "The two internal valleys represent intermediate states. Reactant and product endpoints are not counted as intermediates."
   ],
   [
    "A two-step profile has R = 10, peak 1 = 65, I = -5, peak 2 = 45 and P = -20 kJ/mol. What is step 1 forward Ea?",
    "55 kJ/mol",
    "65 kJ/mol",
    "70 kJ/mol",
    "The first step begins at R = 10, so its barrier is 65 - 10 = 55 kJ/mol."
   ],
   [
    "A two-step profile has R = 10, peak 1 = 65, I = -5, peak 2 = 45 and P = -20 kJ/mol. What is step 2 forward Ea?",
    "50 kJ/mol",
    "45 kJ/mol",
    "35 kJ/mol",
    "The second step begins at I = -5, so its barrier is 45 - (-5) = 50 kJ/mol."
   ],
   [
    "A two-step enthalpy profile has R = 10, I = -5 and P = -20 kJ/mol. What is its overall ΔH?",
    "-30 kJ/mol",
    "-15 kJ/mol",
    "+30 kJ/mol",
    "Only the endpoints determine the net change: -20 - 10 = -30 kJ/mol. Each step changes enthalpy by -15."
   ],
   [
    "A profile has I = -5, peak 2 = 45 and P = -20 kJ/mol. What is the barrier for reversing step 2?",
    "65 kJ/mol",
    "50 kJ/mol",
    "25 kJ/mol",
    "The reverse of step 2 starts from P, so the required rise is 45 - (-20) = 65 kJ/mol."
   ],
   [
    "Two elementary steps have comparable prefactors at the same temperature and forward barriers 30 and 55 kJ/mol. Which has the smaller rate constant?",
    "The 55 kJ/mol step",
    "The 30 kJ/mol step",
    "They must have identical constants",
    "With comparable prefactors and the same temperature, the larger barrier gives the smaller Arrhenius factor and rate constant."
   ],
   [
    "Why can a lower absolute peak still have a larger local activation barrier than a higher peak?",
    "Its preceding intermediate can lie much lower",
    "All peaks use the same starting energy by definition",
    "Activation barriers ignore intermediate energies",
    "A barrier is a difference from the starting valley, so a deep intermediate can make the next energy rise larger."
   ],
   [
    "Step enthalpy changes are +25 and -40 kJ/mol. What is the overall change?",
    "-15 kJ/mol",
    "+15 kJ/mol",
    "-65 kJ/mol",
    "Add the step changes with signs: +25 + (-40) = -15 kJ/mol for the overall process."
   ],
   [
    "What additional information can matter when converting a multistep energy picture into a claim about the overall rate-limiting step?",
    "Concentrations and elementary-step kinetic assumptions",
    "Only the color of the tallest peak",
    "Only the direction of the title text",
    "Energy barriers influence elementary constants, but concentrations and the mechanism also affect flux and the validity of a bottleneck approximation."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Two-step profile: hypothetical energies",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      215
     ],
     "P1": [
      86,
      47
     ],
     "P2": [
      86,
      47
     ],
     "P3": [
      567,
      47
     ],
     "P4": [
      120,
      90
     ],
     "P5": [
      222.5,
      140
     ],
     "P6": [
      222.5,
      140
     ],
     "P7": [
      325,
      70
     ],
     "P8": [
      325,
      70
     ],
     "P9": [
      427.5,
      130
     ],
     "P10": [
      427.5,
      130
     ],
     "P11": [
      530,
      60
     ],
     "P12": [
      120,
      90
     ],
     "P13": [
      222.5,
      140
     ],
     "P14": [
      325,
      70
     ],
     "P15": [
      427.5,
      130
     ],
     "P16": [
      530,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16",
    "dots": "",
    "polys": [],
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
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "circles": [
     {
      "c": "P12",
      "r": 4,
      "col": 1
     },
     {
      "c": "P13",
      "r": 4,
      "col": 1
     },
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
     }
    ],
    "notes": [
     {
      "at": [
       120,
       106
      ],
      "text": "R 0",
      "col": 0
     },
     {
      "at": [
       222.5,
       156
      ],
      "text": "Peak 1 50",
      "col": 0
     },
     {
      "at": [
       325,
       51
      ],
      "text": "I -20",
      "col": 0
     },
     {
      "at": [
       427.5,
       146
      ],
      "text": "Peak 2 40",
      "col": 0
     },
     {
      "at": [
       530,
       41
      ],
      "text": "P -30",
      "col": 0
     },
     {
      "at": [
       170,
       219
      ],
      "text": "Energy (kJ/mol)",
      "col": 0
     },
     {
      "at": [
       390,
       29
      ],
      "text": "Reaction coordinate",
      "col": 0
     }
    ]
   },
   null
  ],
  "qpics": {
   "2": {
    "t": "figure",
    "title": "Two-step evidence: energies in kJ/mol",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      215
     ],
     "P1": [
      86,
      47
     ],
     "P2": [
      86,
      47
     ],
     "P3": [
      567,
      47
     ],
     "P4": [
      120,
      100
     ],
     "P5": [
      222.5,
      155
     ],
     "P6": [
      222.5,
      155
     ],
     "P7": [
      325,
      85
     ],
     "P8": [
      325,
      85
     ],
     "P9": [
      427.5,
      135
     ],
     "P10": [
      427.5,
      135
     ],
     "P11": [
      530,
      70
     ],
     "P12": [
      120,
      100
     ],
     "P13": [
      222.5,
      155
     ],
     "P14": [
      325,
      85
     ],
     "P15": [
      427.5,
      135
     ],
     "P16": [
      530,
      70
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16",
    "dots": "",
    "polys": [],
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
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "circles": [
     {
      "c": "P12",
      "r": 4,
      "col": 1
     },
     {
      "c": "P13",
      "r": 4,
      "col": 1
     },
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
     }
    ],
    "notes": [
     {
      "at": [
       120,
       116
      ],
      "text": "R 10",
      "col": 0
     },
     {
      "at": [
       222.5,
       171
      ],
      "text": "Peak 1 65",
      "col": 0
     },
     {
      "at": [
       325,
       66
      ],
      "text": "I -5",
      "col": 0
     },
     {
      "at": [
       427.5,
       151
      ],
      "text": "Peak 2 45",
      "col": 0
     },
     {
      "at": [
       530,
       51
      ],
      "text": "P -20",
      "col": 0
     },
     {
      "at": [
       170,
       219
      ],
      "text": "Energy (kJ/mol)",
      "col": 0
     },
     {
      "at": [
       390,
       29
      ],
      "text": "Reaction coordinate",
      "col": 0
     }
    ]
   },
   "3": {
    "t": "figure",
    "title": "Two-step evidence: energies in kJ/mol",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      215
     ],
     "P1": [
      86,
      47
     ],
     "P2": [
      86,
      47
     ],
     "P3": [
      567,
      47
     ],
     "P4": [
      120,
      100
     ],
     "P5": [
      222.5,
      155
     ],
     "P6": [
      222.5,
      155
     ],
     "P7": [
      325,
      85
     ],
     "P8": [
      325,
      85
     ],
     "P9": [
      427.5,
      135
     ],
     "P10": [
      427.5,
      135
     ],
     "P11": [
      530,
      70
     ],
     "P12": [
      120,
      100
     ],
     "P13": [
      222.5,
      155
     ],
     "P14": [
      325,
      85
     ],
     "P15": [
      427.5,
      135
     ],
     "P16": [
      530,
      70
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16",
    "dots": "",
    "polys": [],
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
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "circles": [
     {
      "c": "P12",
      "r": 4,
      "col": 1
     },
     {
      "c": "P13",
      "r": 4,
      "col": 1
     },
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
     }
    ],
    "notes": [
     {
      "at": [
       120,
       116
      ],
      "text": "R 10",
      "col": 0
     },
     {
      "at": [
       222.5,
       171
      ],
      "text": "Peak 1 65",
      "col": 0
     },
     {
      "at": [
       325,
       66
      ],
      "text": "I -5",
      "col": 0
     },
     {
      "at": [
       427.5,
       151
      ],
      "text": "Peak 2 45",
      "col": 0
     },
     {
      "at": [
       530,
       51
      ],
      "text": "P -20",
      "col": 0
     },
     {
      "at": [
       170,
       219
      ],
      "text": "Energy (kJ/mol)",
      "col": 0
     },
     {
      "at": [
       390,
       29
      ],
      "text": "Reaction coordinate",
      "col": 0
     }
    ]
   },
   "4": {
    "t": "figure",
    "title": "Two-step evidence: energies in kJ/mol",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      215
     ],
     "P1": [
      86,
      47
     ],
     "P2": [
      86,
      47
     ],
     "P3": [
      567,
      47
     ],
     "P4": [
      120,
      100
     ],
     "P5": [
      222.5,
      155
     ],
     "P6": [
      222.5,
      155
     ],
     "P7": [
      325,
      85
     ],
     "P8": [
      325,
      85
     ],
     "P9": [
      427.5,
      135
     ],
     "P10": [
      427.5,
      135
     ],
     "P11": [
      530,
      70
     ],
     "P12": [
      120,
      100
     ],
     "P13": [
      222.5,
      155
     ],
     "P14": [
      325,
      85
     ],
     "P15": [
      427.5,
      135
     ],
     "P16": [
      530,
      70
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16",
    "dots": "",
    "polys": [],
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
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "circles": [
     {
      "c": "P12",
      "r": 4,
      "col": 1
     },
     {
      "c": "P13",
      "r": 4,
      "col": 1
     },
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
     }
    ],
    "notes": [
     {
      "at": [
       120,
       116
      ],
      "text": "R 10",
      "col": 0
     },
     {
      "at": [
       222.5,
       171
      ],
      "text": "Peak 1 65",
      "col": 0
     },
     {
      "at": [
       325,
       66
      ],
      "text": "I -5",
      "col": 0
     },
     {
      "at": [
       427.5,
       151
      ],
      "text": "Peak 2 45",
      "col": 0
     },
     {
      "at": [
       530,
       51
      ],
      "text": "P -20",
      "col": 0
     },
     {
      "at": [
       170,
       219
      ],
      "text": "Energy (kJ/mol)",
      "col": 0
     },
     {
      "at": [
       390,
       29
      ],
      "text": "Reaction coordinate",
      "col": 0
     }
    ]
   },
   "5": {
    "t": "figure",
    "title": "Two-step evidence: energies in kJ/mol",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      215
     ],
     "P1": [
      86,
      47
     ],
     "P2": [
      86,
      47
     ],
     "P3": [
      567,
      47
     ],
     "P4": [
      120,
      100
     ],
     "P5": [
      222.5,
      155
     ],
     "P6": [
      222.5,
      155
     ],
     "P7": [
      325,
      85
     ],
     "P8": [
      325,
      85
     ],
     "P9": [
      427.5,
      135
     ],
     "P10": [
      427.5,
      135
     ],
     "P11": [
      530,
      70
     ],
     "P12": [
      120,
      100
     ],
     "P13": [
      222.5,
      155
     ],
     "P14": [
      325,
      85
     ],
     "P15": [
      427.5,
      135
     ],
     "P16": [
      530,
      70
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16",
    "dots": "",
    "polys": [],
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
     },
     {
      "v": "P10P11",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "circles": [
     {
      "c": "P12",
      "r": 4,
      "col": 1
     },
     {
      "c": "P13",
      "r": 4,
      "col": 1
     },
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
     }
    ],
    "notes": [
     {
      "at": [
       120,
       116
      ],
      "text": "R 10",
      "col": 0
     },
     {
      "at": [
       222.5,
       171
      ],
      "text": "Peak 1 65",
      "col": 0
     },
     {
      "at": [
       325,
       66
      ],
      "text": "I -5",
      "col": 0
     },
     {
      "at": [
       427.5,
       151
      ],
      "text": "Peak 2 45",
      "col": 0
     },
     {
      "at": [
       530,
       51
      ],
      "text": "P -20",
      "col": 0
     },
     {
      "at": [
       170,
       219
      ],
      "text": "Energy (kJ/mol)",
      "col": 0
     },
     {
      "at": [
       390,
       29
      ],
      "text": "Reaction coordinate",
      "col": 0
     }
    ]
   }
  }
 },
 {
  "code": "5.11",
  "name": "Catalysis",
  "skill": "s11",
  "teach": [
   "A catalyst provides a route that increases the reaction rate while being regenerated in the completed cycle. It can lower a relevant barrier, bring reactants into favorable orientations, or form intermediates along a different pathway. Comparing paths for the same reactant and product states, their endpoint energies and overall enthalpy change stay the same. At a fixed temperature a catalyst does not alter the equilibrium constant or the equilibrium composition of the same reaction; it helps the system approach equilibrium faster by accelerating the forward and reverse processes. It is not an extra source of net thermodynamic driving force.",
   "Catalysis takes different forms. A homogeneous catalyst occupies the same phase as the reactants; a heterogeneous catalyst provides a different phase, often a solid surface for fluid reactants. Adsorption can position reactants on surface sites, and blocking those sites can reduce the rate. Enzymes bind substrates and can assist orientation and transition-state stabilization; not every collision with an enzyme is productive. In an ideal catalytic cycle E + S ⇌ ES, then ES → E + P, E is regenerated and ES is an intermediate. Enzyme activity also depends on conditions; adding a catalyst does not guarantee a larger equilibrium yield."
  ],
  "boards": [
   [
    "Alternative pathway; catalyst regenerated",
    "Same reactants and products: same endpoint energies",
    "Faster approach to equilibrium",
    "At fixed T, the same reaction has unchanged K"
   ],
   [
    "Homogeneous: same phase",
    "Heterogeneous: different phase / surface sites",
    "E + S ⇌ ES; ES → E + P",
    "E regenerated; ES is an intermediate"
   ]
  ],
  "eqs": [
   "Catalyzed and uncatalyzed paths: identical ΔH for identical endpoints",
   "E + S ⇌ ES; ES → E + P; net S → P"
  ],
  "questions": [
   [
    "For the same reaction at fixed temperature, what does an ideal catalyst change?",
    "The rate of approach to equilibrium",
    "The equilibrium constant itself",
    "The net enthalpy difference between the same endpoint states",
    "A catalyst changes kinetic pathways while leaving the thermodynamic equilibrium and endpoint enthalpy difference unchanged."
   ],
   [
    "Which energy-profile comparison fits catalyzed and uncatalyzed routes between the same states?",
    "Same endpoint energies with a faster alternative pathway",
    "Different product energy necessarily",
    "No transition state can appear on the catalyzed route",
    "Catalysis changes the route, which can include different barriers and intermediates, while the specified endpoints remain the same."
   ],
   [
    "A catalyst is consumed in one step and regenerated later. Is that compatible with catalysis?",
    "Yes; there is no net consumption over the cycle",
    "No; it may never participate in any step",
    "No; every catalyst must be a net product",
    "Catalysts participate mechanistically and can be temporarily bound or transformed before they are regenerated."
   ],
   [
    "A dissolved catalyst assists a reaction between dissolved reactants in one liquid phase. What type is this?",
    "Homogeneous catalysis",
    "Heterogeneous catalysis",
    "No catalysis because the catalyst is dissolved",
    "The catalyst and reactants share one phase, which is the defining phase relationship for homogeneous catalysis."
   ],
   [
    "Gas reactants react on a solid catalyst surface. What type is this?",
    "Heterogeneous catalysis",
    "Homogeneous catalysis",
    "A reaction with no interfaces",
    "The solid catalyst and gaseous reactants occupy different phases, making this heterogeneous catalysis."
   ],
   [
    "A substance blocks many active sites on a solid catalyst. What kinetic consequence is plausible?",
    "Fewer sites are available for catalytic reaction",
    "The equilibrium constant must double",
    "Every remaining gas molecule gains kinetic energy",
    "Site blocking can reduce the number of places where the catalytic pathway operates, without requiring a change in equilibrium."
   ],
   [
    "In E + S ⇌ ES followed by ES → E + P, which species is regenerated as the catalyst?",
    "Species E",
    "Species ES",
    "Species P",
    "E binds substrate and is released in the product-forming step; ES is the intermediate complex."
   ],
   [
    "In E + S ⇌ ES followed by ES → E + P, which species is an intermediate complex?",
    "Species ES",
    "Species E",
    "Species P",
    "ES is produced during binding and consumed during product formation, while E is regenerated."
   ],
   [
    "A closed reaction mixture is already at equilibrium at fixed temperature. An ideal catalyst is added without changing volume or thermodynamic conditions. What is expected?",
    "No change in the equilibrium composition",
    "A permanent shift entirely to products",
    "A new equilibrium constant",
    "Catalysis accelerates both directions without changing their equilibrium balance; the same equilibrium composition remains."
   ],
   [
    "How can an enzyme help a reaction proceed?",
    "By positioning substrates and stabilizing a transition state",
    "By making energy conservation unnecessary",
    "By changing the element identities in the substrates",
    "Binding can favor reactive arrangements and lower an effective activation barrier; it does not remove physical conservation laws."
   ]
  ],
  "check": [
   "For the same endpoint states at fixed temperature, a catalyst lowers a forward barrier from 70 to 45 kJ/mol. Which statement is justified?",
   "The pathway changes while the endpoint energy difference stays fixed",
   "The products must be 25 kJ/mol lower than before",
   "The equilibrium constant must increase by 25",
   "Barrier lowering changes kinetics. It does not change the energy difference of the specified reactant and product states."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Catalysis: schematic profiles for identical endpoints",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      86,
      213
     ],
     "P1": [
      86,
      58
     ],
     "P2": [
      86,
      58
     ],
     "P3": [
      565,
      58
     ],
     "P4": [
      120,
      95
     ],
     "P5": [
      320,
      180
     ],
     "P6": [
      320,
      180
     ],
     "P7": [
      525,
      75
     ],
     "P8": [
      120,
      95
     ],
     "P9": [
      320,
      135
     ],
     "P10": [
      320,
      135
     ],
     "P11": [
      525,
      75
     ],
     "P12": [
      120,
      95
     ],
     "P13": [
      525,
      75
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13",
    "dots": "",
    "polys": [],
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
     }
    ],
    "circles": [
     {
      "c": "P12",
      "r": 4,
      "col": 0
     },
     {
      "c": "P13",
      "r": 4,
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       385,
       194
      ],
      "text": "Uncatalyzed",
      "col": 1
     },
     {
      "at": [
       385,
       149
      ],
      "text": "Catalyzed",
      "col": 2
     },
     {
      "at": [
       131,
       115
      ],
      "text": "Reactants",
      "col": 0
     },
     {
      "at": [
       523,
       50
      ],
      "text": "Products",
      "col": 0
     },
     {
      "at": [
       162,
       219
      ],
      "text": "Energy",
      "col": 0
     },
     {
      "at": [
       318,
       31
      ],
      "text": "Same endpoints, different pathways",
      "col": 0
     }
    ]
   },
   null
  ]
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Begin with the quantity being measured: species disappearance, product formation or stoichiometrically normalized rate. Infer empirical orders from controlled data and check units. Choose an integrated law consistent with the disappearance law and test its time dependence. Use elementary coefficients only for elementary events. A proposed mechanism must reproduce both net stoichiometry and observed kinetics; a fast pre-equilibrium can eliminate an intermediate under explicit assumptions. Read each energy barrier from its own starting state, distinguish intermediate valleys from transition-state peaks, and keep endpoint energy changes separate from kinetic barriers. Catalysts change pathways and rates while leaving the equilibrium of the same reaction unchanged at fixed temperature.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-chem-kinetics","subject":"science","level":5,"grade":9,"standard":"AP Chemistry, Unit 5","title":"Kinetics","goal":"Determine rates and rate laws from data, connect them to elementary mechanisms, and interpret energy profiles and catalysis.","points":20},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
