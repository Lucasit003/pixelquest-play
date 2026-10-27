/* Original course unit. Review record: docs/review/lessons/high-completion/ap-macro-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "5.1",
  "name": "Fiscal and Monetary Policy Actions in the Short Run",
  "skill": "s1",
  "teach": [
   "Start by identifying the output gap and the time horizon. In the standard short-run AD–AS model, a negative demand shock can leave real output below potential and unemployment above its natural rate. Expansionary fiscal policy increases purchases or reduces taxes; expansionary monetary policy lowers policy interest rates to support interest-sensitive spending. Both can raise aggregate demand. For an original economy producing 900 against potential output of 1000, the gap is -100, or -10% of potential. A policy can reduce a gap without immediately increasing productive capacity.",
   "Trace each policy's effects before combining them. With upward-sloping short-run aggregate supply and other influences held fixed, two demand expansions raise real output and the price level in the short run. Fiscal expansion tends to raise market rates through borrowing or higher income and money demand; monetary easing tends to lower rates. Their combined interest-rate effect is not fixed without knowing relative strength and the policy regime. An original pair of policy effects pushes demand in the same direction but rates in opposite directions: do not infer that every variable must move together.",
   "For a positive demand-driven output gap, contractionary fiscal and monetary actions can reduce demand toward potential. A fiscal expansion combined with monetary tightening pushes demand in opposite directions; its net demand effect is ambiguous without magnitudes. In a conventional rate-transmission comparison, both push market rates upward, other influences fixed. Reversing both actions reverses these pressures. Policy timing and transmission can differ, so the model is a conditional prediction rather than a guarantee about next month's data.",
   "Distinguish implementation regimes. With limited reserves, textbook monetary expansion can be represented by increased money supply and a lower nominal market rate. With ample reserves, a central bank can steer short-term rates by changing administered rates, including interest on reserve balances, without using a fixed reserve-multiplier rule to predict broad money. In a deliberately simplified fixed-price expenditure model with multiplier 4, a 25-unit autonomous spending increase raises equilibrium output by 100. If prices, interest rates or imports respond, the actual increase can differ."
  ],
  "boards": [
   [
    "Fictional output: 900; potential: 1000",
    "Gap: -100, or -10% of potential",
    "Demand recovery is not capacity growth"
   ],
   [
    "Two expansions: AD rises in the short run",
    "Real output and price level tend to rise",
    "Interest-rate pressures can oppose"
   ],
   [
    "Opposing demand policies: compare magnitudes",
    "Expansionary fiscal + tight money",
    "AD: ambiguous; rate pressures: upward"
   ],
   [
    "Limited reserves and ample reserves differ",
    "Administered rates can steer market rates",
    "Fixed-price example: 4 × 25 = 100"
   ]
  ],
  "eqs": [
   "(900 − 1000)/1000 × 100 = -10%",
   "Fiscal expansion: AD ↑; monetary easing: AD ↑",
   "Opposing AD shifts → net change needs magnitudes",
   "A fixed-price multiplier of 4: 25 + 75 induced = 100"
  ],
  "questions": [
   [
    "An original economy has a recessionary gap caused by weak demand. Which policy pair is expansionary in the standard short-run model?",
    "Higher government purchases and lower policy interest rates",
    "Lower government purchases and higher policy interest rates",
    "Higher taxes and lower government purchases",
    "The first pair supports aggregate demand; the other pairs restrain spending under the stated demand-side conditions."
   ],
   [
    "In an original economy with upward-sloping SRAS, two effective expansionary demand policies are combined. What is the short-run direction of real output and the price level, other things equal?",
    "Both rise",
    "Both necessarily fall",
    "Output falls while the price level is fixed by definition",
    "A rightward aggregate-demand shift moves equilibrium upward along SRAS, raising output and the price level in this model."
   ],
   [
    "An original fiscal expansion raises rate pressure while monetary easing lowers it. What determines the combined market-rate change?",
    "Their relative strength and other specified conditions",
    "The word expansionary alone",
    "A rule that both pressures must raise rates",
    "The stated forces oppose each other; direction requires their magnitudes and the relevant policy setting."
   ],
   [
    "An original economy has a positive demand-driven output gap. Which pair tends to reduce aggregate demand?",
    "Higher taxes and higher policy interest rates",
    "Lower taxes and lower policy interest rates",
    "Higher public purchases and lower policy interest rates",
    "Higher taxes restrain disposable-income spending and higher rates restrain interest-sensitive spending, other things equal."
   ],
   [
    "An original fiscal expansion is combined with monetary tightening. What can be concluded about aggregate demand from directions alone?",
    "The net effect is ambiguous",
    "It must rise regardless of magnitudes",
    "It must fall regardless of magnitudes",
    "Fiscal expansion and monetary tightening exert opposing demand effects; their sizes are needed to determine the net shift."
   ],
   [
    "In a conventional original model, fiscal expansion raises borrowing demand and monetary tightening raises rates. What is their combined rate pressure, other things fixed?",
    "Upward",
    "Downward",
    "Necessarily zero",
    "Both specified channels push market interest rates upward, unlike the ambiguous aggregate-demand effect of this policy mix."
   ],
   [
    "An original fiscal contraction is combined with monetary easing. What is the net demand effect from directions alone?",
    "Ambiguous without magnitudes",
    "Necessarily expansionary in every case",
    "Necessarily contractionary in every case",
    "Fiscal contraction lowers demand while monetary easing supports it; directions alone do not reveal which effect dominates."
   ],
   [
    "An original economy moves from below potential to its existing potential output after demand stimulus. What has this directly demonstrated?",
    "Closing an output gap, not necessarily growth of productive capacity",
    "A necessary outward shift of the production possibilities frontier",
    "A permanent elimination of all unemployment",
    "Using previously idle resources differs from increasing the economy's potential; natural unemployment can remain at potential output."
   ],
   [
    "An original central bank operates with ample reserves and lowers its administered policy rates. Which mechanism fits?",
    "It can guide market rates downward without a fixed broad-money multiplier prediction",
    "It must eliminate all reserves for policy to work",
    "Every one-unit change in reserves always creates the same money increase",
    "Ample-reserve implementation uses administered rates to influence market rates; a fixed reserve multiplier is not a universal prediction."
   ],
   [
    "An original policymaker estimates a spending effect using a fixed-price multiplier. What limitation should be stated?",
    "Price, interest-rate and import responses can alter the realized effect",
    "The multiplier guarantees identical outcomes in every economy",
    "Timing and economic conditions cannot matter",
    "The fixed-price calculation is a model with assumptions; other responses and lags can change the observed result."
   ],
   [
    "In an original policy comparison, actual output is 840 and potential output is 1000. Using potential output as the base, what is the output gap as a percent?",
    "-16%",
    "16%",
    "-32%",
    "Subtract potential from actual and use potential as the denominator. A negative gap means below potential; a positive gap means above it."
   ],
   [
    "In an original policy comparison, actual output is 1140 and potential output is 1200. Using potential output as the base, what is the output gap as a percent?",
    "-5%",
    "5%",
    "-10%",
    "Subtract potential from actual and use potential as the denominator. A negative gap means below potential; a positive gap means above it."
   ],
   [
    "In an original policy comparison, actual output is 1320 and potential output is 1200. Using potential output as the base, what is the output gap as a percent?",
    "10%",
    "-10%",
    "20%",
    "Subtract potential from actual and use potential as the denominator. A negative gap means below potential; a positive gap means above it."
   ],
   [
    "An original fixed-price model specifies a spending multiplier of 2 and an autonomous spending increase of 35 units. Assuming no crowding out or import leakage beyond the stated multiplier, what is the modeled output increase?",
    "70",
    "35",
    "37",
    "The multiplier links the autonomous change to the total modeled change. The answer is conditional on the stated fixed-price assumptions, not a universal policy forecast."
   ],
   [
    "An original fixed-price model specifies a spending multiplier of 3 and an autonomous spending increase of 45 units. Assuming no crowding out or import leakage beyond the stated multiplier, what is the modeled output increase?",
    "135",
    "45",
    "48",
    "The multiplier links the autonomous change to the total modeled change. The answer is conditional on the stated fixed-price assumptions, not a universal policy forecast."
   ],
   [
    "An original fixed-price model specifies a spending multiplier of 5 and an autonomous spending increase of 28 units. Assuming no crowding out or import leakage beyond the stated multiplier, what is the modeled output increase?",
    "140",
    "28",
    "33",
    "The multiplier links the autonomous change to the total modeled change. The answer is conditional on the stated fixed-price assumptions, not a universal policy forecast."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Demand recovery toward potential",
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
      126
     ],
     "P17": [
      120,
      126
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
      93.5
     ],
     "P21": [
      510,
      158.5
     ],
     "P22": [
      120,
      126
     ],
     "P23": [
      510,
      61
     ],
     "P24": [
      120,
      158.5
     ],
     "P25": [
      510,
      93.5
     ],
     "P26": [
      315,
      61
     ],
     "P27": [
      315,
      191
     ],
     "P28": [
      217.5,
      109.75
     ],
     "P29": [
      315,
      126
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
      "col": 1,
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P26P27",
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
      "text": "Real output (model units)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Price level",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "800",
      "col": 0
     },
     {
      "at": [
       217.5,
       41
      ],
      "text": "900",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "1000",
      "col": 0
     },
     {
      "at": [
       412.5,
       41
      ],
      "text": "1100",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "1200",
      "col": 0
     },
     {
      "at": [
       97,
       56
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "140",
      "col": 0
     },
     {
      "at": [
       200.5,
       118.75
      ],
      "text": "E0",
      "col": 0
     },
     {
      "at": [
       298,
       135
      ],
      "text": "E1",
      "col": 2
     },
     {
      "at": [
       480.75,
       166.5
      ],
      "text": "SRAS",
      "col": 1
     },
     {
      "at": [
       515.625,
       70.75
      ],
      "text": "AD0",
      "col": 0
     },
     {
      "at": [
       515.625,
       106.5
      ],
      "text": "AD1",
      "col": 2
     },
     {
      "at": [
       345,
       195
      ],
      "text": "LRAS",
      "col": 3
     }
    ],
    "circles": [
     {
      "c": "P28",
      "r": 4,
      "col": 0
     },
     {
      "c": "P29",
      "r": 4,
      "col": 2
     }
    ]
   },
   null,
   null,
   null
  ]
 },
 {
  "code": "5.2",
  "name": "The Phillips Curve",
  "skill": "s2",
  "teach": [
   "A Phillips-curve graph places unemployment on the horizontal axis and inflation on the vertical axis. With expected inflation and supply conditions fixed, a demand expansion moves the economy toward lower unemployment and higher inflation along a downward-sloping short-run Phillips curve. A contraction moves in the opposite direction. In an original schedule, unemployment of 4%, 5% and 6% corresponds to inflation of 5%, 3% and 1%. Moving between those points differs from changing the entire curve.",
   "The long-run Phillips curve is vertical at the natural unemployment rate in the standard model. It does not imply zero unemployment or a permanent inflation-unemployment tradeoff. When unemployment is below its natural rate, output is above potential in the model; unemployment above the natural rate corresponds to a recessionary gap. For an original natural rate of 5%, a point at 7% unemployment lies to the right of the LRPC. Long-run equilibrium is where the current SRPC meets the LRPC.",
   "Changes in expectations and supply conditions shift the SRPC. Higher expected inflation raises inflation at each unemployment rate, shifting it upward; lower expectations shift it downward. An adverse supply shock can raise both inflation and unemployment, which a movement along an unchanged downward-sloping curve cannot explain. Changes in structural or frictional unemployment can shift the natural rate and therefore the LRPC. Do not move the LRPC merely because aggregate demand rises temporarily.",
   "An original expectations-augmented example uses inflation = expected inflation − 2 × (unemployment − natural rate), with all rates in percentage points. If expected inflation is 3%, the natural rate 5% and unemployment 4%, actual inflation is 5%. Once expected inflation adjusts upward, keeping unemployment permanently below its natural rate would require further inflation surprises in this model. A one-time demand expansion does not sustain permanently lower unemployment after full adjustment."
  ],
  "boards": [
   [
    "Horizontal: unemployment; vertical: inflation",
    "Fictional SRPC: (4,5), (5,3), (6,1)",
    "Demand shock: movement along the curve"
   ],
   [
    "Fictional natural unemployment rate: 5%",
    "LRPC is vertical at unemployment = 5%",
    "7% unemployment lies to its right"
   ],
   [
    "Expected inflation ↑ → SRPC shifts upward",
    "Adverse supply shock: inflation and joblessness ↑",
    "Natural-rate change shifts LRPC"
   ],
   [
    "Fictional rule: pi = pie − 2(u − un)",
    "pie = 3, u = 4, un = 5 → pi = 5",
    "Rates here are percentage-point values"
   ]
  ],
  "eqs": [
   "4% → 5% unemployment: inflation 5% → 3% on this SRPC",
   "7% unemployment − 5% natural rate = 2-point gap",
   "Demand changes position; expectations change the curve",
   "3 − 2(4 − 5) = 5% inflation"
  ],
  "questions": [
   [
    "Which axes fit an original Phillips-curve diagram?",
    "Unemployment horizontally and inflation vertically",
    "Real output horizontally and the price level vertically",
    "Money quantity horizontally and the nominal interest rate vertically",
    "Phillips curves relate unemployment to inflation; AD–AS and money-market diagrams use different variables."
   ],
   [
    "An original demand expansion occurs with expected inflation and supply conditions fixed. What happens in the Phillips-curve model?",
    "Movement toward lower unemployment and higher inflation along the SRPC",
    "An automatic rightward shift of the LRPC",
    "Movement toward higher unemployment and lower inflation",
    "A demand expansion moves along the fixed SRPC; it does not itself change the natural unemployment rate."
   ],
   [
    "An original contraction in aggregate demand occurs with the SRPC fixed. What movement is expected?",
    "Higher unemployment and lower inflation",
    "Lower unemployment and higher inflation",
    "Higher unemployment and necessarily higher inflation",
    "The downward-sloping SRPC describes opposite directions for inflation and unemployment under a demand change."
   ],
   [
    "What does an original vertical LRPC represent in the standard model?",
    "No permanent long-run tradeoff between inflation and unemployment",
    "A natural unemployment rate of zero in every economy",
    "A guarantee that inflation can never change",
    "Long-run unemployment returns to its natural rate in the model, while inflation can differ across equilibria."
   ],
   [
    "An original economy has unemployment above its natural rate. Which gap does this indicate in the model?",
    "A recessionary output gap",
    "An inflationary output gap",
    "A necessary expansion of potential output",
    "Unemployment above the natural rate corresponds to output below potential in the standard gap comparison."
   ],
   [
    "An original economy has unemployment below its natural rate. Where is it relative to its LRPC?",
    "To the left, associated with an inflationary output gap",
    "To the right, associated with a recessionary gap",
    "Exactly on it by definition",
    "With unemployment on the horizontal axis, a lower unemployment rate lies left of the vertical natural-rate line."
   ],
   [
    "An original rise in expected inflation leaves the natural rate unchanged. Which curve change follows?",
    "SRPC shifts upward while LRPC stays in place",
    "LRPC must move to zero unemployment",
    "SRPC shifts downward solely because expectations rose",
    "Higher expected inflation raises inflation at each unemployment rate; it does not by itself change the natural rate."
   ],
   [
    "An original adverse supply shock raises inflation and unemployment. Why is an unchanged SRPC insufficient?",
    "The shock shifts the SRPC rather than just moving along it",
    "An unchanged downward-sloping curve always raises both variables together",
    "Supply shocks can never affect inflation",
    "Moving along a downward-sloping SRPC changes the variables oppositely; a supply shock changes the relationship."
   ],
   [
    "An original improvement in job matching reduces the natural unemployment rate, other things equal. What happens to the LRPC?",
    "It shifts left",
    "It necessarily becomes horizontal",
    "It shifts right because unemployment falls",
    "The LRPC is located at the natural rate, so a lower natural rate moves that vertical line left."
   ],
   [
    "An original economy reaches the intersection of its current SRPC and LRPC. What does that represent?",
    "Long-run equilibrium in the Phillips-curve model",
    "Zero inflation and zero unemployment necessarily",
    "A point outside every possible equilibrium",
    "Their intersection combines unemployment at the natural rate with inflation consistent with the current short-run relation."
   ],
   [
    "An original central bank creates a one-time demand expansion. What is the standard long-run result after wages and expectations fully adjust, with potential and the natural rate unchanged?",
    "Unemployment returns to its natural rate",
    "Unemployment remains permanently below the natural rate without further surprises",
    "The natural rate automatically becomes zero",
    "Temporary demand effects do not permanently change the natural rate; adjustment shifts the short-run relationship."
   ],
   [
    "In an original Phillips model, what is disinflation?",
    "A decrease in the inflation rate, which may remain positive",
    "A necessary decrease in the price level",
    "A permanent elimination of all price changes",
    "Disinflation means slower price growth; deflation means a falling price level. Positive inflation can slow without turning negative."
   ],
   [
    "An original Phillips rule is inflation = expected inflation - 2 × (unemployment - natural rate). Expected inflation is 4%, unemployment is 5% and the natural rate is 6%. All rates are percentage-point values. What is inflation?",
    "6%",
    "8%",
    "4%",
    "Apply the unemployment gap to the stated original rule. When unemployment equals the natural rate, the gap vanishes and actual inflation equals expected inflation."
   ],
   [
    "An original Phillips rule is inflation = expected inflation - 2 × (unemployment - natural rate). Expected inflation is 5%, unemployment is 6% and the natural rate is 5%. All rates are percentage-point values. What is inflation?",
    "3%",
    "5%",
    "1%",
    "Apply the unemployment gap to the stated original rule. When unemployment equals the natural rate, the gap vanishes and actual inflation equals expected inflation."
   ],
   [
    "An original Phillips rule is inflation = expected inflation - 2 × (unemployment - natural rate). Expected inflation is 2%, unemployment is 4% and the natural rate is 4%. All rates are percentage-point values. What is inflation?",
    "2%",
    "4%",
    "0%",
    "Apply the unemployment gap to the stated original rule. When unemployment equals the natural rate, the gap vanishes and actual inflation equals expected inflation."
   ],
   [
    "An original Phillips rule is inflation = expected inflation - 2 × (unemployment - natural rate). Expected inflation is 6%, unemployment is 7% and the natural rate is 5%. All rates are percentage-point values. What is inflation?",
    "2%",
    "4%",
    "0%",
    "Apply the unemployment gap to the stated original rule. When unemployment equals the natural rate, the gap vanishes and actual inflation equals expected inflation."
   ],
   [
    "In an original Phillips comparison, inflation falls from 6% to 4% while remaining positive. How many percentage points does it fall?",
    "2",
    "10",
    "24",
    "Subtract the two rates to measure a percentage-point fall. Both rates remain positive, so this is disinflation rather than deflation."
   ],
   [
    "In an original Phillips comparison, inflation falls from 5% to 2% while remaining positive. How many percentage points does it fall?",
    "3",
    "7",
    "10",
    "Subtract the two rates to measure a percentage-point fall. Both rates remain positive, so this is disinflation rather than deflation."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "A short-run tradeoff",
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
      185,
      61
     ],
     "P5": [
      185,
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
      445,
      61
     ],
     "P9": [
      445,
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
      185,
      174.75
     ],
     "P17": [
      412.5,
      61
     ],
     "P18": [
      315,
      61
     ],
     "P19": [
      315,
      191
     ],
     "P20": [
      315,
      109.75
     ],
     "P21": [
      250,
      142.25
     ],
     "P22": [
      380,
      77.25
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22",
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
      "text": "Unemployment rate (%)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Inflation rate (%)",
      "col": 0
     },
     {
      "at": [
       185,
       41
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       445,
       41
      ],
      "text": "7",
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
      "text": "4",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       295,
       99.75
      ],
      "text": "E0",
      "col": 0
     },
     {
      "at": [
       427.5,
       83.75
      ],
      "text": "SRPC0",
      "col": 0
     },
     {
      "at": [
       347,
       195
      ],
      "text": "LRPC",
      "col": 3
     },
     {
      "at": [
       235,
       153.25
      ],
      "text": "(4,5)",
      "col": 2
     },
     {
      "at": [
       365,
       88.25
      ],
      "text": "(6,1)",
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
      "col": 2
     },
     {
      "c": "P22",
      "r": 4,
      "col": 2
     }
    ]
   },
   null,
   {
    "t": "figure",
    "title": "Higher expected inflation",
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
      185,
      61
     ],
     "P5": [
      185,
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
      445,
      61
     ],
     "P9": [
      445,
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
      185,
      174.75
     ],
     "P17": [
      412.5,
      61
     ],
     "P18": [
      315,
      61
     ],
     "P19": [
      315,
      191
     ],
     "P20": [
      315,
      109.75
     ],
     "P21": [
      217.5,
      191
     ],
     "P22": [
      477.5,
      61
     ],
     "P23": [
      315,
      142.25
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
      "col": 3,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P21P22",
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
      "text": "Unemployment rate (%)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Inflation rate (%)",
      "col": 0
     },
     {
      "at": [
       185,
       41
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       445,
       41
      ],
      "text": "7",
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
      "text": "4",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       295,
       99.75
      ],
      "text": "E0",
      "col": 0
     },
     {
      "at": [
       427.5,
       83.75
      ],
      "text": "SRPC0",
      "col": 0
     },
     {
      "at": [
       347,
       195
      ],
      "text": "LRPC",
      "col": 3
     },
     {
      "at": [
       335,
       150.25
      ],
      "text": "E1",
      "col": 2
     },
     {
      "at": [
       476,
       104.75
      ],
      "text": "SRPC1",
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
      "c": "P23",
      "r": 4,
      "col": 2
     }
    ]
   },
   null
  ]
 },
 {
  "code": "5.3",
  "name": "Money Growth and Inflation",
  "skill": "s3",
  "teach": [
   "The quantity equation is M × V = P × Y: money stock times income velocity equals the price-level multiplier times real output. Velocity is how often, on average, a unit of money supports nominal GDP during the stated period; use a consistent money measure and period. In an original example, M=200, V=4 and Y=400 imply P=2 because both sides equal 800. Here P=2 is a price-level multiplier, equivalent to index 200 when the base multiplier is 1. Do not mix an index of 200 with a multiplier of 2.",
   "The identity alone does not establish causation. The long-run quantity-theory prediction adds assumptions: real output is determined by productive capacity, and velocity is stable. With both Y and V fixed, doubling M doubles P while real output remains unchanged. In an original economy with Y=400 and V=4, increasing M from 200 to 220 raises P from 2 to 2.2, a 10% rise. This long-run neutrality result is not a claim that money has no short-run real effects or that every observed price increase has a single cause.",
   "For finite percentage changes, compare growth factors. With constant velocity, the exact price-growth factor is the money-growth factor divided by the real-output-growth factor. If money rises 20% and real output 10%, P changes by 1.20/1.10 − 1, about 9.09%, not exactly 10%. Subtracting growth rates is an approximation when changes are small. A falling inflation rate is not necessarily falling prices; sustained negative price growth is deflation. State which growth convention a question uses."
  ],
  "boards": [
   [
    "M × V = P × Y, using a consistent period",
    "Example: 200 × 4 = 2 × 400",
    "P = 2 means index 200 if base P = 1"
   ],
   [
    "Quantity theory adds assumptions",
    "Hold velocity and real output fixed",
    "200 → 220 money; 2 → 2.2 price multiplier"
   ],
   [
    "Exact growth uses growth factors",
    "1.20 / 1.10 − 1 ≈ 9.09%",
    "Subtracting growth rates is approximate"
   ]
  ],
  "eqs": [
   "M × V = P × Y: 200 × 4 = 2 × 400 = 800",
   "220 × 4 = 2.2 × 400; real output stays 400",
   "100 × (1.20/1.10 − 1) ≈ 9.09%"
  ],
  "questions": [
   [
    "In an original quantity equation M × V = P × Y, what does P × Y measure?",
    "Nominal output for the stated period",
    "Only the physical money stock",
    "The unemployment rate",
    "The price-level multiplier times real output gives nominal output; it matches money times income velocity when definitions are consistent."
   ],
   [
    "What does velocity mean in an original income-based quantity equation?",
    "Nominal GDP per period divided by the chosen money stock",
    "The physical speed of a banknote",
    "The unemployment rate divided by taxes",
    "Income velocity connects a specified money stock with nominal spending over a stated period; it is not a measure of physical motion."
   ],
   [
    "An original model holds velocity and real output fixed and doubles money. What happens to the price level?",
    "It doubles",
    "It necessarily falls by half",
    "It remains fixed by the equation",
    "With V and Y unchanged, proportional changes in M require the same proportional changes in P to preserve M × V = P × Y."
   ],
   [
    "Why does the quantity equation alone not prove that money causes every price movement?",
    "It is an identity until behavioral assumptions and other conditions are supplied",
    "Identities can never be mathematically true",
    "Velocity and real output cannot change by definition",
    "The equation relates measured quantities; a causal theory also specifies what determines them and which variables are held fixed."
   ],
   [
    "An original long-run quantity-theory model leaves productive capacity unchanged after a money-stock increase. Which variable is not permanently raised by money alone in that model?",
    "Real output",
    "The price level when velocity is fixed",
    "Nominal output when velocity is fixed",
    "The model determines real output from real productive conditions; a money increase with fixed velocity changes nominal magnitudes."
   ],
   [
    "An original account uses P=1.5 as a price multiplier with base 1. Which corresponding price index uses base 100?",
    "150",
    "1.5",
    "15",
    "Multiplying the price multiplier by 100 gives its index form; using the wrong scale creates a hundredfold accounting error."
   ],
   [
    "In an original model, money and real output grow at the same proportional rate while velocity stays fixed. What happens to the price level?",
    "It is unchanged",
    "It necessarily doubles",
    "It necessarily becomes zero",
    "The equal growth factors cancel in P = M × V / Y; the price level need not change under these assumptions."
   ],
   [
    "An original forecaster subtracts real-output growth from money growth to estimate inflation with constant velocity. How should this finite-growth calculation be labeled?",
    "An approximation rather than an exact general identity for percentages",
    "Exact for every possible size of change",
    "Unrelated to the quantity equation under any assumptions",
    "Exact finite growth uses a ratio of growth factors; subtraction approximates that ratio for small changes."
   ],
   [
    "An original economy's prices keep rising, but annual inflation falls from 6% to 2%. What is this called?",
    "Disinflation",
    "Deflation necessarily",
    "A price-level decrease of 4% necessarily",
    "Inflation remains positive, so prices still rise more slowly; deflation would require a negative inflation rate."
   ],
   [
    "An original short-run supply disruption raises prices. What would be an overstatement of long-run quantity theory?",
    "Claiming the theory proves every short-run price change comes only from money",
    "Stating the model's assumptions about velocity and real output",
    "Distinguishing long-run predictions from short-run shocks",
    "A conditional long-run model does not eliminate supply shocks or other short-run mechanisms."
   ],
   [
    "In an original quantity-equation exercise, M=150, V=4 and Y=300. What is the price-level multiplier P?",
    "2",
    "4",
    "1",
    "Use M × V = P × Y with P expressed as a multiplier, not a base-100 index. Check that both sides yield the same nominal-output amount."
   ],
   [
    "In an original quantity-equation exercise, M=240, P=2 and Y=600. What is velocity V?",
    "5",
    "10",
    "2.5",
    "Use M × V = P × Y with P expressed as a multiplier, not a base-100 index. Check that both sides yield the same nominal-output amount."
   ],
   [
    "In an original quantity-equation exercise, V=3, P=2 and Y=540. What is money stock M?",
    "360",
    "720",
    "180",
    "Use M × V = P × Y with P expressed as a multiplier, not a base-100 index. Check that both sides yield the same nominal-output amount."
   ],
   [
    "In an original quantity-equation exercise, M=280, V=4 and P=2. What is real output Y?",
    "560",
    "1120",
    "280",
    "Use M × V = P × Y with P expressed as a multiplier, not a base-100 index. Check that both sides yield the same nominal-output amount."
   ],
   [
    "In an original quantity model, velocity is constant, money grows 10% and real output grows 0%. What is the exact inflation rate rounded to two decimal places?",
    "10.00%",
    "15.00%",
    "20.00%",
    "Use the money growth factor divided by the real-output growth factor, then subtract one. This finite-change calculation avoids treating the subtraction approximation as exact."
   ],
   [
    "In an original quantity model, velocity is constant, money grows 20% and real output grows 10%. What is the exact inflation rate rounded to two decimal places?",
    "9.09%",
    "14.09%",
    "19.09%",
    "Use the money growth factor divided by the real-output growth factor, then subtract one. This finite-change calculation avoids treating the subtraction approximation as exact."
   ],
   [
    "In an original quantity model, velocity is constant, money grows 25% and real output grows 0%. What is the exact inflation rate rounded to two decimal places?",
    "25.00%",
    "30.00%",
    "35.00%",
    "Use the money growth factor divided by the real-output growth factor, then subtract one. This finite-change calculation avoids treating the subtraction approximation as exact."
   ],
   [
    "In an original quantity model, velocity is constant, money grows 20% and real output grows 0%. What is the exact inflation rate rounded to two decimal places?",
    "20.00%",
    "25.00%",
    "30.00%",
    "Use the money growth factor divided by the real-output growth factor, then subtract one. This finite-change calculation avoids treating the subtraction approximation as exact."
   ]
  ],
  "check": [
   "A fictional quantity-theory model keeps velocity and real output fixed. The money stock rises from 300 to 330. What is the price-level change?",
   "A 10% increase",
   "A 30% increase",
   "No change",
   "With V and Y fixed, the price level has the same growth factor as money: 330/300 = 1.10."
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Quantity theory under fixed conditions",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      145,
      152
     ],
     "P1": [
      192,
      152
     ],
     "P2": [
      192,
      52
     ],
     "P3": [
      145,
      52
     ],
     "P4": [
      220,
      162
     ],
     "P5": [
      267,
      162
     ],
     "P6": [
      267,
      52
     ],
     "P7": [
      220,
      52
     ],
     "P8": [
      387,
      152
     ],
     "P9": [
      434,
      152
     ],
     "P10": [
      434,
      52
     ],
     "P11": [
      387,
      52
     ],
     "P12": [
      462,
      162
     ],
     "P13": [
      509,
      162
     ],
     "P14": [
      509,
      52
     ],
     "P15": [
      462,
      52
     ],
     "P16": [
      129,
      52
     ],
     "P17": [
      287,
      52
     ],
     "P18": [
      372,
      52
     ],
     "P19": [
      529,
      52
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19",
    "dots": "",
    "segs": [
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
       214
      ],
      "text": "Fictional comparison: velocity and real output fixed",
      "col": 0
     },
     {
      "at": [
       205,
       190
      ],
      "text": "Money stock",
      "col": 0
     },
     {
      "at": [
       445,
       190
      ],
      "text": "Price multiplier",
      "col": 0
     },
     {
      "at": [
       168.5,
       163
      ],
      "text": "200",
      "col": 1
     },
     {
      "at": [
       168.5,
       32
      ],
      "text": "Before",
      "col": 1
     },
     {
      "at": [
       243.5,
       173
      ],
      "text": "220",
      "col": 2
     },
     {
      "at": [
       243.5,
       32
      ],
      "text": "After",
      "col": 2
     },
     {
      "at": [
       410.5,
       163
      ],
      "text": "2",
      "col": 1
     },
     {
      "at": [
       410.5,
       32
      ],
      "text": "Before",
      "col": 1
     },
     {
      "at": [
       485.5,
       173
      ],
      "text": "2.2",
      "col": 2
     },
     {
      "at": [
       485.5,
       32
      ],
      "text": "After",
      "col": 2
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "5.4",
  "name": "Government Deficits and the National Debt",
  "skill": "s4",
  "teach": [
   "A deficit is a flow over a period: outlays exceed revenues. Debt is a stock of outstanding borrowing at a point in time. A surplus reverses the budget inequality. For original annual revenues of 500 and total outlays of 560, the deficit is 60. Outlays here include purchases, transfers and interest; do not omit transfers just because they are not current government purchases in GDP. In a simplified account with no other financing adjustments, a deficit adds to debt and a surplus used to retire borrowing reduces it.",
   "Compare debt with the economy's scale without confusing nominal and real measures. Original nominal debt of 900 and annual nominal GDP of 1500 give a debt-to-GDP ratio of 60%. If debt becomes 990 while GDP becomes 1800, the ratio falls to 55% even though nominal debt rises. Ratios help comparison but are not a complete measure of fiscal capacity. Keep the debt definition and dates consistent; real government accounting can contain adjustments beyond the simple deficit-to-debt rule used in these exercises.",
   "Interest payments have opportunity costs and depend on borrowing terms; refinancing and the mix of maturities affect how quickly rates change total interest expense. In an original one-year, fixed-rate illustration, debt of 800 at 5% entails 40 of interest. Interest is part of the total deficit calculation, not an additional amount to add a second time. Debt does not necessarily increase merely because interest is paid if revenues cover total outlays. Evaluate financing, uses of borrowing and productive effects rather than assuming every deficit has identical consequences."
  ],
  "boards": [
   [
    "Deficit: outlays exceed revenue during a period",
    "Example: 560 − 500 = 60 deficit",
    "Debt is outstanding borrowing at a date"
   ],
   [
    "900 / 1500 = 60% debt-to-GDP",
    "990 / 1800 = 55% debt-to-GDP",
    "Debt can rise while this ratio falls"
   ],
   [
    "Fictional fixed-rate debt: 800 at 5%",
    "Annual interest = 40",
    "Do not count interest twice in total outlays"
   ]
  ],
  "eqs": [
   "500 revenue + 60 borrowing = 560 total outlays",
   "900/1500 = 0.60; 990/1800 = 0.55",
   "800 × 0.05 = 40; total outlays already include interest"
  ],
  "questions": [
   [
    "An original government's outlays exceed its revenues during a year. What is the difference called?",
    "A budget deficit",
    "The entire outstanding national debt",
    "A budget surplus",
    "The excess of annual outlays over revenues is a deficit flow; debt is the accumulated outstanding borrowing stock."
   ],
   [
    "Which original item is a stock rather than an annual flow?",
    "Debt outstanding on the last day of the year",
    "Total tax revenue during the year",
    "Interest paid during the year",
    "A stock is measured at a point in time, while revenue and interest payments occur over a period."
   ],
   [
    "An original annual budget counts purchases, transfers and interest as total outlays. What must be compared with revenue to find the total deficit?",
    "All those outlays together",
    "Purchases only, ignoring transfers and interest",
    "Only the number of taxpayers",
    "Budget accounting includes outlays beyond government purchases in GDP; omitting them would understate this defined deficit."
   ],
   [
    "In an original simplified account with no other adjustments, how does a deficit financed entirely by borrowing affect debt?",
    "Debt rises by that deficit",
    "Debt necessarily falls by that deficit",
    "Debt and deficit must always be equal levels",
    "The current deficit adds to the earlier stock; the resulting debt need not equal the size of the year's deficit."
   ],
   [
    "An original government uses its budget surplus to repay borrowing. What happens to the debt stock, with no other adjustments?",
    "It falls",
    "It necessarily rises",
    "It becomes zero regardless of the starting amount",
    "A surplus used for repayment reduces outstanding borrowing by the repayment amount, not necessarily to zero."
   ],
   [
    "An original government's nominal debt rises more slowly than nominal GDP. What can happen to debt-to-GDP?",
    "The ratio can fall while debt rises",
    "The ratio must rise whenever debt rises",
    "The ratio must equal the inflation rate",
    "A ratio depends on both numerator and denominator; faster denominator growth can lower it despite higher debt."
   ],
   [
    "Why does an original debt-to-GDP ratio not by itself settle fiscal sustainability?",
    "Interest costs, financing conditions, revenues and other factors also matter",
    "A ratio contains every possible future budget outcome",
    "Every economy has the same borrowing conditions forever",
    "The ratio is useful context, but fiscal capacity and future obligations depend on more than a single statistic."
   ],
   [
    "An original budget already includes interest in total outlays. What error would adding the interest bill again make?",
    "Double-counting interest",
    "Correctly excluding all financing costs",
    "Converting nominal GDP into real GDP",
    "The first total already contains interest; adding it again inflates outlays and the calculated deficit."
   ],
   [
    "An original government pays interest but has revenues equal to all its outlays. What follows in a simple no-adjustment debt account?",
    "Interest payment alone does not require a rise in debt",
    "Debt must rise by the interest bill regardless of revenue",
    "A balanced total budget means interest was not paid",
    "If revenues cover purchases, transfers and interest, there is no total deficit requiring new net borrowing in this model."
   ],
   [
    "What is an opportunity cost of original government interest spending?",
    "Resources cannot simultaneously finance some other use",
    "It makes all alternative public uses costless",
    "It necessarily destroys the entire physical capital stock",
    "Money devoted to debt service has alternative uses; the tradeoff is not a claim of automatic total economic destruction."
   ],
   [
    "An original annual budget has revenue 480, purchases 420, transfers 80 and interest 20, all in billions. Using a positive number for a deficit and a negative number for a surplus, what is outlays minus revenue?",
    "40",
    "-40",
    "60",
    "Add the three specified outlay categories once and compare their total with revenue. A negative outlays-minus-revenue balance indicates a surplus."
   ],
   [
    "An original annual budget has revenue 650, purchases 500, transfers 100 and interest 30, all in billions. Using a positive number for a deficit and a negative number for a surplus, what is outlays minus revenue?",
    "-20",
    "20",
    "10",
    "Add the three specified outlay categories once and compare their total with revenue. A negative outlays-minus-revenue balance indicates a surplus."
   ],
   [
    "An original simplified debt account starts at 720 billion and adds a 45 billion deficit financed entirely by borrowing. With no other adjustments, what is ending debt in billions?",
    "765",
    "675",
    "45",
    "Ending debt must equal the starting stock plus the new net borrowing. The deficit is an addition during the year, not the entire debt stock."
   ],
   [
    "An original simplified debt account starts at 940 billion and adds a 70 billion deficit financed entirely by borrowing. With no other adjustments, what is ending debt in billions?",
    "1010",
    "870",
    "70",
    "Ending debt must equal the starting stock plus the new net borrowing. The deficit is an addition during the year, not the entire debt stock."
   ],
   [
    "An original nominal debt stock is 840 billion and annual nominal GDP is 1400 billion. What is debt as a percentage of GDP?",
    "60%",
    "40%",
    "166.67%",
    "Divide comparable nominal debt by nominal GDP: 840/1400 is three fifths. Reversing the ratio measures GDP relative to debt instead."
   ],
   [
    "An original one-year fixed-rate debt of 600 billion carries a 4% annual interest rate. What is the annual interest cost in billions?",
    "24",
    "150",
    "604",
    "Four hundredths of the 600-billion principal is the interest payment. Principal and interest are different amounts; the rate applies for the specified year."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "A deficit is a flow",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      159,
      156
     ],
     "P1": [
      231,
      156
     ],
     "P2": [
      231,
      56
     ],
     "P3": [
      159,
      56
     ],
     "P4": [
      407,
      168
     ],
     "P5": [
      479,
      168
     ],
     "P6": [
      479,
      56
     ],
     "P7": [
      407,
      56
     ],
     "P8": [
      125,
      56
     ],
     "P9": [
      518,
      56
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
      "text": "Fictional annual account: same currency units",
      "col": 0
     },
     {
      "at": [
       195,
       168
      ],
      "text": "500",
      "col": 1
     },
     {
      "at": [
       195,
       35
      ],
      "text": "Revenue",
      "col": 1
     },
     {
      "at": [
       443,
       180
      ],
      "text": "560",
      "col": 2
     },
     {
      "at": [
       443,
       35
      ],
      "text": "Outlays",
      "col": 2
     },
     {
      "at": [
       320,
       192
      ],
      "text": "560 − 500 = 60 deficit during the year",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Debt and its denominator",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      148,
      157
     ],
     "P1": [
      448,
      157
     ],
     "P2": [
      448,
      137
     ],
     "P3": [
      148,
      137
     ],
     "P4": [
      148,
      157
     ],
     "P5": [
      328,
      157
     ],
     "P6": [
      328,
      137
     ],
     "P7": [
      148,
      137
     ],
     "P8": [
      148,
      88
     ],
     "P9": [
      508,
      88
     ],
     "P10": [
      508,
      68
     ],
     "P11": [
      148,
      68
     ],
     "P12": [
      148,
      88
     ],
     "P13": [
      346,
      88
     ],
     "P14": [
      346,
      68
     ],
     "P15": [
      148,
      68
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
      "col": 2
     },
     {
      "v": "P8P9P10P11",
      "col": 0
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
       214
      ],
      "text": "Fictional nominal debt and annual nominal GDP",
      "col": 0
     },
     {
      "at": [
       94,
       142
      ],
      "text": "First",
      "col": 0
     },
     {
      "at": [
       328,
       170
      ],
      "text": "Debt 900 / GDP 1500 = 60%",
      "col": 0
     },
     {
      "at": [
       94,
       73
      ],
      "text": "Second",
      "col": 0
     },
     {
      "at": [
       328,
       101
      ],
      "text": "Debt 990 / GDP 1800 = 55%",
      "col": 0
     },
     {
      "at": [
       320,
       29
      ],
      "text": "Green overlay: debt; blue whole bar: GDP",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ],
  "qpics": {
   "10": {
    "t": "setups",
    "title": "Original annual budget; billions",
    "head": "Category",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Revenue",
      "480"
     ],
     [
      "Purchases",
      "420"
     ],
     [
      "Transfers",
      "80"
     ],
     [
      "Interest",
      "20"
     ]
    ]
   },
   "14": {
    "t": "setups",
    "title": "Original comparable nominal amounts",
    "head": "Measure",
    "cols": [
     "Billions"
    ],
    "rows": [
     [
      "Debt",
      "840"
     ],
     [
      "Annual GDP",
      "1400"
     ]
    ]
   }
  }
 },
 {
  "code": "5.5",
  "name": "Crowding Out",
  "skill": "s5",
  "teach": [
   "Crowding out occurs when government borrowing raises interest rates and reduces interest-sensitive private spending in the standard loanable-funds model. Draw the real interest rate vertically and funds per period horizontally. In this unit's convention, demand includes private borrowing plus government borrowing; more government borrowing shifts total demand right while the saving-supply curve stays fixed. An alternative national-saving diagram can show lower public saving shifting supply left. Do not count the same deficit twice by applying both conventions to one diagram.",
   "Solve both equilibria before measuring the private response. An original closed-economy model has saving supplied S=40+10r and private investment demanded I=100−10r, where r is the real rate in percentage points and quantities are billions per year. With government borrowing zero, r=3 and private investment is 70. If government borrowing becomes 40, equilibrium requires S=I+40: r=5, total funds=90 and private investment=50. Borrowing rises by 40 but investment falls by only 20 because saving also rises by 20.",
   "Less private investment can slow capital accumulation and future productive growth, other things equal. The size of crowding out depends on saving responses, foreign capital, slack and monetary conditions; it is not necessarily complete. Public borrowing can also finance productive infrastructure. In the original 40-unit borrowing example, private investment falls 20 and public borrowing uses 40, but the arithmetic alone does not tell us whether the public project creates net social benefits. Evaluate both financing effects and what the resources produce."
  ],
  "boards": [
   [
    "Real interest rate: vertical axis",
    "Here, demand = private + government borrowing",
    "Do not also shift saving for the same deficit"
   ],
   [
    "Example: S = 40 + 10r; I = 100 − 10r",
    "Before: r = 3, I = 70",
    "After G borrowing = 40: r = 5, I = 50"
   ],
   [
    "Borrowing +40; private investment -20",
    "Saving rises from 70 to 90",
    "Financing effects and project benefits both matter"
   ]
  ],
  "eqs": [
   "Government borrowing ↑ → total funds demand right → real r ↑",
   "40 + 10(5) = [100 − 10(5)] + 40 = 90",
   "40 extra borrowing = 20 extra saving + 20 less private I"
  ],
  "questions": [
   [
    "What defines crowding out in an original standard loanable-funds example?",
    "Government borrowing raises rates and reduces interest-sensitive private spending",
    "Every government purchase necessarily eliminates all private activity",
    "An automatic decline in all prices whenever taxes change",
    "The mechanism links borrowing, rates and private spending; it need not eliminate every investment or occur in a fixed amount."
   ],
   [
    "In this unit's original diagram, total funds demand includes government borrowing. What happens when that borrowing rises while the saving schedule stays fixed?",
    "Total demand shifts right",
    "Both demand and supply must shift for the same change",
    "The vertical axis becomes the price level",
    "The stated convention records borrowing on the demand side; shifting both sides for the same deficit would double-count it."
   ],
   [
    "Which axes fit an original loanable-funds diagram used to analyze crowding out?",
    "Funds per period horizontally and the real interest rate vertically",
    "Inflation horizontally and unemployment vertically",
    "Real output horizontally and the price level vertically",
    "Loanable funds connects saving and borrowing to the real interest rate; the other axes describe different models."
   ],
   [
    "An original loanable-funds market has upward-sloping saving supply and downward-sloping borrowing demand. More government borrowing shifts demand right. What happens to the equilibrium real rate?",
    "It rises",
    "It necessarily falls",
    "It must remain fixed without any additional assumption",
    "At the old rate, borrowing exceeds supplied saving; the new intersection has a higher real rate in this model."
   ],
   [
    "An original investment-demand schedule slopes downward in the real interest rate. How does a higher rate affect desired private investment, other things equal?",
    "It reduces it",
    "It necessarily raises it",
    "It makes every project equally profitable",
    "A higher financing and opportunity cost makes some projects unattractive, producing a movement along investment demand."
   ],
   [
    "Why need an original 40-billion rise in government borrowing not reduce private investment by exactly 40 billion?",
    "Higher rates may also induce more saving",
    "Private saving can never respond to rates",
    "Crowding out is defined to be complete in every case",
    "With responsive saving, some additional borrowing is financed by extra saving and some by lower private investment."
   ],
   [
    "An original economy can receive foreign financial inflows. Why should a closed-economy crowding-out calculation be used cautiously?",
    "Foreign financing can alter domestic rate and spending effects",
    "Foreign inflows are impossible by definition in every economy",
    "A closed-economy assumption automatically holds everywhere",
    "Opening the economy adds a financing channel; results depend on which flows and responses the model permits."
   ],
   [
    "What is a possible long-run effect of lower original private investment, other things equal?",
    "Slower physical-capital accumulation",
    "A necessary rise in every worker's productivity",
    "Automatic elimination of depreciation",
    "Reduced investment can slow additions to the capital stock; the consequence is conditional rather than an unavoidable total collapse."
   ],
   [
    "An original debt-financed public project builds useful transport infrastructure. Why is financing analysis alone incomplete?",
    "The project's productive benefits and costs also need evaluation",
    "Crowding out proves every infrastructure project has zero benefit",
    "Borrowing guarantees every public project succeeds",
    "Interest-rate effects are one channel; public investment may create benefits that must be assessed with its costs."
   ],
   [
    "What would double-count an original deficit in this unit's total-borrowing convention?",
    "Increasing government loan demand and also reducing the same saving supply for that identical deficit",
    "Drawing one new total-demand curve",
    "Comparing the old and new equilibrium rates",
    "Either convention can represent the fiscal change, but applying both to the same single change in one model duplicates the effect."
   ],
   [
    "An original closed-economy loanable-funds model has S=20+10r, private I=80-10r and government borrowing 20, all quantities in billions. With r in percentage points, what equilibrium real rate makes S=I+government borrowing?",
    "4%",
    "5%",
    "3%",
    "At equilibrium, supplied saving must equal private investment plus the separately specified government borrowing. Verify the chosen rate by substituting on both sides."
   ],
   [
    "In an original model with private investment I=80-10r billion, the equilibrium real rate is 4 percentage points after government borrowing rises. What is private investment in billions?",
    "40",
    "60",
    "50",
    "Use the private investment schedule, not total loan demand. Government borrowing is separate from private investment in this original model."
   ],
   [
    "An original closed-economy loanable-funds model has S=30+10r, private I=90-10r and government borrowing 40, all quantities in billions. With r in percentage points, what equilibrium real rate makes S=I+government borrowing?",
    "5%",
    "6%",
    "4%",
    "At equilibrium, supplied saving must equal private investment plus the separately specified government borrowing. Verify the chosen rate by substituting on both sides."
   ],
   [
    "In an original model with private investment I=90-10r billion, the equilibrium real rate is 5 percentage points after government borrowing rises. What is private investment in billions?",
    "40",
    "80",
    "50",
    "Use the private investment schedule, not total loan demand. Government borrowing is separate from private investment in this original model."
   ],
   [
    "An original closed-economy loanable-funds model has S=40+10r, private I=120-10r and government borrowing 20, all quantities in billions. With r in percentage points, what equilibrium real rate makes S=I+government borrowing?",
    "5%",
    "6%",
    "4%",
    "At equilibrium, supplied saving must equal private investment plus the separately specified government borrowing. Verify the chosen rate by substituting on both sides."
   ],
   [
    "In an original model with private investment I=120-10r billion, the equilibrium real rate is 5 percentage points after government borrowing rises. What is private investment in billions?",
    "70",
    "90",
    "80",
    "Use the private investment schedule, not total loan demand. Government borrowing is separate from private investment in this original model."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Government borrowing in loan demand",
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
      266.25,
      61
     ],
     "P7": [
      266.25,
      56
     ],
     "P8": [
      363.75,
      61
     ],
     "P9": [
      363.75,
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
      109.75
     ],
     "P15": [
      120,
      109.75
     ],
     "P16": [
      115,
      142.25
     ],
     "P17": [
      120,
      142.25
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
      120,
      158.5
     ],
     "P23": [
      412.5,
      61
     ],
     "P24": [
      217.5,
      191
     ],
     "P25": [
      510,
      93.5
     ],
     "P26": [
      266.25,
      109.75
     ],
     "P27": [
      363.75,
      142.25
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27",
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
      "col": 1,
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
      "text": "Funds (billions per year)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Real interest rate (%)",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       266.25,
       41
      ],
      "text": "70",
      "col": 0
     },
     {
      "at": [
       363.75,
       41
      ],
      "text": "90",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "120",
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
       137.25
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       249.25,
       117.75
      ],
      "text": "E0",
      "col": 0
     },
     {
      "at": [
       343.75,
       153.25
      ],
      "text": "E1",
      "col": 2
     },
     {
      "at": [
       498.75,
       189.25
      ],
      "text": "S",
      "col": 1
     },
     {
      "at": [
       414.875,
       74.875
      ],
      "text": "D0",
      "col": 0
     },
     {
      "at": [
       515.375,
       108.375
      ],
      "text": "D1",
      "col": 2
     }
    ],
    "circles": [
     {
      "c": "P26",
      "r": 4,
      "col": 0
     },
     {
      "c": "P27",
      "r": 4,
      "col": 2
     }
    ]
   },
   {
    "t": "setups",
    "title": "Fictional loanable-funds account",
    "head": "Quantity",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Government borrowing",
      "0",
      "40"
     ],
     [
      "Saving supplied",
      "70",
      "90"
     ],
     [
      "Private investment",
      "70",
      "50"
     ],
     [
      "Real rate",
      "3%",
      "5%"
     ]
    ]
   }
  ]
 },
 {
  "code": "5.6",
  "name": "Economic Growth",
  "skill": "s6",
  "teach": [
   "Long-run growth expands productive capacity. Real GDP measures price-adjusted total output; real GDP per capita divides by the whole population and helps compare average material output. In an original economy, real output of 1200 and population 100 yield 12 per person. If output rises to 1320 but population rises to 120, output per person falls to 11 despite higher total output. Per-capita GDP is an average, not a complete measure of distribution, leisure or environmental quality.",
   "Labor productivity is output per worker or per worker-hour, depending on the stated denominator. Physical capital provides equipment and structures, human capital includes skills, and technology improves methods of production. With other inputs fixed, employing more workers can raise total output without necessarily raising output per worker. In an original factory, 900 units divided by 30 workers equals 30 units per worker. More workers and more productive workers are different channels.",
   "An aggregate production function relates inputs to output. With technology and other conditions fixed, additional capital per worker raises output per worker but often with diminishing marginal gains. An original schedule with 1, 2 and 3 capital units per worker produces 20, 28 and 34 output units per worker: the additional gains fall from 8 to 6. Better technology can shift the whole production relationship upward. Diminishing marginal returns do not mean total output must fall as capital rises.",
   "Greater resources or productivity can shift a production possibilities curve outward and the long-run aggregate-supply curve right. Using idle resources instead moves production toward an existing frontier. In an original index comparison, potential output increases from 100 to 110, a 10% capacity gain; an economy merely recovering from 90 to unchanged potential of 100 has closed a gap. Use real quantities and consistent denominators to distinguish these changes, and compound annual growth rather than adding percentages for long spans."
  ],
  "boards": [
   [
    "Real output per capita uses all people",
    "1200/100 = 12; 1320/120 = 11",
    "A total can rise while its per-person value falls"
   ],
   [
    "Output per worker differs from total output",
    "Example: 900 units / 30 workers = 30",
    "Capital, skills and technology affect productivity"
   ],
   [
    "Fictional capital per worker: 1, 2, 3",
    "Output per worker: 20, 28, 34",
    "Marginal gains: 8, then 6"
   ],
   [
    "Capacity growth: PPC out; LRAS right",
    "Recovery: toward an existing frontier",
    "Fictional potential: 100 → 110 is +10%"
   ]
  ],
  "eqs": [
   "1200/100 = 12; 1320/120 = 11 per person",
   "30 workers × 30 units per worker = 900 units",
   "28 − 20 = 8; 34 − 28 = 6: positive but smaller gain",
   "110/100 − 1 = 10%; idle-resource recovery is distinct"
  ],
  "questions": [
   [
    "Which original measure adjusts total output both for prices and population size?",
    "Real GDP per capita",
    "Nominal GDP alone",
    "Total government debt",
    "Real GDP removes price-level changes and the per-capita denominator adjusts for population; neither nominal totals nor debt does both."
   ],
   [
    "An original economy's real GDP rises 5% while its population rises 10%. What happens to real GDP per capita?",
    "It falls",
    "It necessarily rises 5%",
    "It is unchanged because both totals increased",
    "The output growth factor is smaller than the population growth factor, so their ratio and output per person decline."
   ],
   [
    "Why is an original real-GDP-per-capita figure an incomplete description of wellbeing?",
    "It is an average and does not capture every distributional or nonmarket condition",
    "It exactly measures every person's happiness",
    "It records each household receiving identical income",
    "Average output does not reveal the full distribution or all social, environmental and nonmarket conditions."
   ],
   [
    "Which original investment primarily increases human capital?",
    "Training that improves workers' productive skills",
    "A larger stock of idle paper currency alone",
    "A change in the name of a factory",
    "Skills and knowledge embodied in people are human capital; physical assets and labels are different concepts."
   ],
   [
    "Which original asset is physical capital used in production?",
    "A machine used to manufacture goods",
    "A worker's acquired welding skill",
    "The natural unemployment rate",
    "Produced equipment used to make output is physical capital; acquired skills are human capital."
   ],
   [
    "An original production method creates more output from the same inputs. What has improved?",
    "Technology or productive efficiency",
    "Only the printed price labels necessarily",
    "The population necessarily doubled",
    "Improved methods can raise output without more inputs; a nominal price change alone is not a real productivity gain."
   ],
   [
    "In an original production schedule, extra capital raises output but by progressively smaller amounts. What is this?",
    "Diminishing marginal returns to capital",
    "A necessary decline in total output",
    "A guarantee of negative output",
    "The marginal addition falls while total output can keep rising; marginal and total changes are distinct."
   ],
   [
    "An original technological improvement raises output at every stated capital-per-worker level. How is this represented?",
    "An upward shift of the per-worker production function",
    "Only movement along the unchanged function",
    "A required fall in every output level",
    "A changed technology changes the relationship itself; adding capital under unchanged technology is movement along it."
   ],
   [
    "An original economy uses previously idle factories without changing its resources or technology. What happens to its PPC?",
    "Production moves toward the existing PPC",
    "The PPC must shift outward solely because idle capacity is used",
    "The PPC becomes a money-demand curve",
    "Greater utilization closes a gap inside the existing frontier; it does not by itself expand productive possibilities."
   ],
   [
    "An original sustained increase in productive capacity affects which two diagrams consistently?",
    "PPC shifts outward and LRAS shifts right",
    "PPC shifts inward and LRAS shifts left",
    "Only the Phillips curve's vertical label changes",
    "Both an outward frontier and rightward LRAS represent more potential real output, given the defined resource and productivity change."
   ],
   [
    "An original factory doubles workers and output while hours per worker stay fixed. What happens to output per worker?",
    "It stays unchanged",
    "It necessarily doubles",
    "It necessarily falls to zero",
    "Equal proportional changes in output and worker count leave their ratio unchanged."
   ],
   [
    "An original index grows by 10% in each of two years. Why is total growth not merely 20%?",
    "The second year's growth applies to the already increased base",
    "Percentage growth never depends on its base",
    "The second year cannot grow",
    "Compounding makes the second increase larger in levels: multiplying growth factors captures the changing base."
   ],
   [
    "An original growth comparison reports real output 1560 and total population 120 in consistent units. What is real output per person?",
    "13",
    "26",
    "15",
    "Use the whole population as the per-capita denominator. Multiplying the proposed per-person value by population should reproduce total real output."
   ],
   [
    "An original growth comparison reports real output 2240 and total population 140 in consistent units. What is real output per person?",
    "16",
    "32",
    "18",
    "Use the whole population as the per-capita denominator. Multiplying the proposed per-person value by population should reproduce total real output."
   ],
   [
    "An original productivity study records 1120 units of output from 40 workers over one period. What is output per worker?",
    "28",
    "56",
    "33",
    "The specified measure divides output by workers. Its units are output units per worker for the stated period, not output per member of the whole population."
   ],
   [
    "An original productivity study records 1620 units of output from 45 workers over one period. What is output per worker?",
    "36",
    "72",
    "41",
    "The specified measure divides output by workers. Its units are output units per worker for the stated period, not output per member of the whole population."
   ],
   [
    "An original real-GDP-per-capita index rises from 80 to 92. What is its percentage increase?",
    "15%",
    "12%",
    "115%",
    "The increase is 12 relative to the initial 80. A final level equal to 115% of the original is a 15% increase."
   ],
   [
    "An original potential-output index starts at 100 and grows 10% in each of two years. What is the final index?",
    "121",
    "120",
    "110",
    "The first year ends at 110 and the second adds 11, so the final index is 121. Equal growth rates apply to different starting levels."
   ]
  ],
  "check": [
   "A fictional economy has real output of 1800 and population 150, then real output of 2160 and population 180. What happens to real output per person?",
   "It stays at 12",
   "It rises from 15 to 18",
   "It falls to zero",
   "Both output and population rise by the same factor; 1800/150 and 2160/180 both equal 12."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Fictional output and population",
    "head": "Quantity",
    "cols": [
     "First",
     "Second"
    ],
    "rows": [
     [
      "Real output",
      "1200",
      "1320"
     ],
     [
      "Population",
      "100",
      "120"
     ],
     [
      "Output per person",
      "12",
      "11"
     ]
    ]
   },
   null,
   {
    "t": "figure",
    "title": "Diminishing marginal gains",
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
      126
     ],
     "P17": [
      120,
      126
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
      217.5,
      126
     ],
     "P21": [
      315,
      152
     ],
     "P22": [
      315,
      152
     ],
     "P23": [
      412.5,
      171.5
     ],
     "P24": [
      217.5,
      126
     ],
     "P25": [
      315,
      152
     ],
     "P26": [
      412.5,
      171.5
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26",
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
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Capital units per worker",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Output per worker",
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
      "text": "1",
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
       412.5,
       41
      ],
      "text": "3",
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
       121
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       240.5,
       133
      ],
      "text": "(1,20)",
      "col": 1
     },
     {
      "at": [
       338,
       159
      ],
      "text": "(2,28)",
      "col": 1
     },
     {
      "at": [
       435.5,
       178.5
      ],
      "text": "(3,34)",
      "col": 1
     },
     {
      "at": [
       438,
       204
      ],
      "text": "Fictional schedule",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P24",
      "r": 4,
      "col": 1
     },
     {
      "c": "P25",
      "r": 4,
      "col": 1
     },
     {
      "c": "P26",
      "r": 4,
      "col": 1
     }
    ]
   },
   [
    {
     "t": "figure",
     "title": "Capacity versus use of capacity",
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
       445,
       61
      ],
      "P9": [
       445,
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
       169.33333333333334
      ],
      "P15": [
       120,
       169.33333333333334
      ],
      "P16": [
       120,
       169.33333333333334
      ],
      "P17": [
       136.25,
       169.19783192529013
      ],
      "P18": [
       136.25,
       169.19783192529013
      ],
      "P19": [
       152.5,
       168.79030568655048
      ],
      "P20": [
       152.5,
       168.79030568655048
      ],
      "P21": [
       168.75,
       168.10764963862812
      ],
      "P22": [
       168.75,
       168.10764963862812
      ],
      "P23": [
       185,
       167.14455552060437
      ],
      "P24": [
       185,
       167.14455552060437
      ],
      "P25": [
       201.25,
       165.8932989597842
      ],
      "P26": [
       201.25,
       165.8932989597842
      ],
      "P27": [
       217.5,
       164.34341348683577
      ],
      "P28": [
       217.5,
       164.34341348683577
      ],
      "P29": [
       233.75,
       162.48121747397397
      ],
      "P30": [
       233.75,
       162.48121747397397
      ],
      "P31": [
       250,
       160.28914005737653
      ],
      "P32": [
       250,
       160.28914005737653
      ],
      "P33": [
       266.25,
       157.744760122247
      ],
      "P34": [
       266.25,
       157.744760122247
      ],
      "P35": [
       282.5,
       154.8194187433142
      ],
      "P36": [
       282.5,
       154.8194187433142
      ],
      "P37": [
       298.75,
       151.47617089598785
      ],
      "P38": [
       298.75,
       151.47617089598785
      ],
      "P39": [
       315,
       147.66666666666666
      ],
      "P40": [
       315,
       147.66666666666666
      ],
      "P41": [
       331.25,
       143.3262058318411
      ],
      "P42": [
       331.25,
       143.3262058318411
      ],
      "P43": [
       347.5,
       138.36547464254755
      ],
      "P44": [
       347.5,
       138.36547464254755
      ],
      "P45": [
       363.75,
       132.655764674666
      ],
      "P46": [
       363.75,
       132.655764674666
      ],
      "P47": [
       380,
       125.99999999999997
      ],
      "P48": [
       380,
       125.99999999999997
      ],
      "P49": [
       396.25,
       118.06812449461901
      ],
      "P50": [
       396.25,
       118.06812449461901
      ],
      "P51": [
       412.5,
       108.22140522169062
      ],
      "P52": [
       412.5,
       108.22140522169062
      ],
      "P53": [
       428.75,
       94.82707249132466
      ],
      "P54": [
       428.75,
       94.82707249132466
      ],
      "P55": [
       445,
       61
      ],
      "P56": [
       120,
       180.16666666666666
      ],
      "P57": [
       137.875,
       180.01761511781913
      ],
      "P58": [
       137.875,
       180.01761511781913
      ],
      "P59": [
       155.75,
       179.56933625520554
      ],
      "P60": [
       155.75,
       179.56933625520554
      ],
      "P61": [
       173.625,
       178.81841460249092
      ],
      "P62": [
       173.625,
       178.81841460249092
      ],
      "P63": [
       191.5,
       177.7590110726648
      ],
      "P64": [
       191.5,
       177.7590110726648
      ],
      "P65": [
       209.375,
       176.38262885576262
      ],
      "P66": [
       209.375,
       176.38262885576262
      ],
      "P67": [
       227.25,
       174.67775483551935
      ],
      "P68": [
       227.25,
       174.67775483551935
      ],
      "P69": [
       245.125,
       172.62933922137137
      ],
      "P70": [
       245.125,
       172.62933922137137
      ],
      "P71": [
       263,
       170.21805406311418
      ],
      "P72": [
       263,
       170.21805406311418
      ],
      "P73": [
       280.875,
       167.41923613447167
      ],
      "P74": [
       280.875,
       167.41923613447167
      ],
      "P75": [
       298.75,
       164.2013606176456
      ],
      "P76": [
       298.75,
       164.2013606176456
      ],
      "P77": [
       316.625,
       160.52378798558664
      ],
      "P78": [
       316.625,
       160.52378798558664
      ],
      "P79": [
       334.5,
       156.33333333333334
      ],
      "P80": [
       334.5,
       156.33333333333334
      ],
      "P81": [
       352.375,
       151.5588264150252
      ],
      "P82": [
       352.375,
       151.5588264150252
      ],
      "P83": [
       370.25,
       146.10202210680228
      ],
      "P84": [
       370.25,
       146.10202210680228
      ],
      "P85": [
       388.125,
       139.8213411421326
      ],
      "P86": [
       388.125,
       139.8213411421326
      ],
      "P87": [
       406,
       132.5
      ],
      "P88": [
       406,
       132.5
      ],
      "P89": [
       423.875,
       123.7749369440809
      ],
      "P90": [
       423.875,
       123.7749369440809
      ],
      "P91": [
       441.75,
       112.94354574385969
      ],
      "P92": [
       441.75,
       112.94354574385969
      ],
      "P93": [
       459.62499999999994,
       98.20977974045712
      ],
      "P94": [
       459.62499999999994,
       98.20977974045712
      ],
      "P95": [
       477.5,
       61
      ],
      "P96": [
       250,
       104.33333333333331
      ],
      "P97": [
       315,
       147.66666666666666
      ],
      "P98": [
       250,
       104.33333333333331
      ],
      "P99": [
       315,
       147.66666666666666
      ]
     },
     "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99",
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
       "v": "P98P99",
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
       "text": "Consumer goods (original units)",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "Capital goods",
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
       "text": "6",
       "col": 0
      },
      {
       "at": [
        445,
        41
       ],
       "text": "10",
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
       "text": "6",
       "col": 0
      },
      {
       "at": [
        97,
        164.33333333333334
       ],
       "text": "10",
       "col": 0
      },
      {
       "at": [
        290,
        84.33333333333331
       ],
       "text": "Idle resources",
       "col": 3
      },
      {
       "at": [
        397.25,
        124.83333333333334
       ],
       "text": "PPC0",
       "col": 0
      },
      {
       "at": [
        397.25,
        160.91666666666669
       ],
       "text": "PPC1",
       "col": 2
      }
     ],
     "circles": [
      {
       "c": "P96",
       "r": 4,
       "col": 3
      },
      {
       "c": "P97",
       "r": 4,
       "col": 0
      }
     ]
    },
    {
     "t": "figure",
     "title": "A growing productive capacity",
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
       412.5,
       61
      ],
      "P9": [
       412.5,
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
       191
      ],
      "P17": [
       120,
       191
      ],
      "P18": [
       315,
       61
      ],
      "P19": [
       315,
       191
      ],
      "P20": [
       412.5,
       61
      ],
      "P21": [
       412.5,
       191
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
       "text": "Potential output index",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "Price multiplier",
       "col": 0
      },
      {
       "at": [
        120,
        41
       ],
       "text": "80",
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
        412.5,
        41
       ],
       "text": "110",
       "col": 0
      },
      {
       "at": [
        510,
        41
       ],
       "text": "120",
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
       "text": "2",
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
        295,
        197
       ],
       "text": "LRAS0",
       "col": 0
      },
      {
       "at": [
        442.5,
        197
       ],
       "text": "LRAS1",
       "col": 2
      },
      {
       "at": [
        230,
        134
       ],
       "text": "Capacity grows",
       "col": 0
      },
      {
       "at": [
        230,
        109
       ],
       "text": "100 → 110",
       "col": 0
      }
     ],
     "circles": []
    }
   ]
  ],
  "qpics": {
   "16": {
    "t": "setups",
    "title": "Original real output per person",
    "head": "Period",
    "cols": [
     "Index"
    ],
    "rows": [
     [
      "First",
      "80"
     ],
     [
      "Second",
      "92"
     ]
    ]
   }
  }
 },
 {
  "code": "5.7",
  "name": "Public Policy and Economic Growth",
  "skill": "s7",
  "teach": [
   "Policies can affect productive capacity through skills, capital, technology and participation. Education and training can raise human capital; infrastructure can lower transport or communication costs; research can improve production methods. In an original project, a road reduces the cost of moving inputs and allows more output from existing resources. This is a possible productive channel, not proof that every road project pays for itself. Compare costs, implementation and alternatives as well as the stated goal.",
   "Supply-side fiscal policy aims to change incentives and productive capacity through spending or tax rules. A tax incentive for equipment can increase the expected after-tax return to investing; outcomes depend on responses and financing. Such a policy can also affect aggregate demand before capital is installed. In an original model, planned investment rises now while useful productive capacity increases later. Do not assume every tax cut automatically pays for itself, changes potential output immediately, or has no budget cost.",
   "Separate participation, employment and productivity. More people willing and able to work can expand potential resources, but a higher participation rate does not guarantee that everyone immediately finds a job. Output per capita equals output per employed worker times the employed share of the whole population. In an original economy, 20 units per worker and 50 employed out of 100 people give 10 per person. Raising employment to 60 with the same productivity gives 12. To evaluate a growth policy, check comparable real outcomes and a credible alternative explanation, not only a favorable before-after change."
  ],
  "boards": [
   [
    "Skills, infrastructure and research can help",
    "Identify the productive mechanism",
    "Compare benefits, costs and alternatives"
   ],
   [
    "Supply-side policy changes incentives",
    "Demand effects can precede capacity effects",
    "No automatic self-financing guarantee"
   ],
   [
    "Productivity and employed share are distinct",
    "20 × (50/100) = 10 output per person",
    "20 × (60/100) = 12 output per person"
   ]
  ],
  "eqs": [
   "Lower input-transport cost → possible capacity improvement",
   "Investment incentive now → installed productive capital later",
   "Output/person = output/worker × workers/population"
  ],
  "questions": [
   [
    "An original training program improves productive skills. Through which channel can it support long-run growth?",
    "Higher human capital",
    "A necessary permanent increase in inflation alone",
    "A guaranteed elimination of every opportunity cost",
    "Better skills can improve production; the program's actual benefits still depend on effectiveness and costs."
   ],
   [
    "An original public transport link reduces the time firms spend moving inputs. What is a plausible growth mechanism?",
    "Improved productive infrastructure",
    "A necessary reduction in all physical capital",
    "A guarantee that no resources were used to build it",
    "Infrastructure can lower production and distribution costs, but construction has costs and outcomes need evaluation."
   ],
   [
    "An original research program discovers a more efficient production method. How can it affect potential output?",
    "It can raise productivity and expand potential output",
    "It must only raise price labels with no real change",
    "It necessarily reduces every possible output",
    "Technology can allow more output from given inputs; this is a real productive channel rather than only a nominal price change."
   ],
   [
    "What is the aim of original supply-side fiscal policies in the standard growth discussion?",
    "Influence incentives and productive capacity",
    "Make every price fixed forever",
    "Replace all saving with printed labels",
    "Tax and spending rules can affect work, saving, investment and technology; their effects depend on behavior and implementation."
   ],
   [
    "An original equipment tax incentive makes some projects more attractive after tax. What is a plausible response, other things equal?",
    "Higher desired investment",
    "Every firm necessarily stops investing",
    "A guarantee that every investment is socially beneficial",
    "A higher after-tax return can encourage investment; it does not establish equal responses or benefits for every project."
   ],
   [
    "Why might an original supply-side policy affect aggregate demand before potential output?",
    "Spending can respond before new productive capital is installed",
    "Installed capital always appears instantly",
    "A policy cannot affect more than one curve over time",
    "Investment expenditure can increase demand now while completed equipment adds capacity later."
   ],
   [
    "An original tax-cut proposal claims it must always pay for itself. What is the accurate evaluation?",
    "Revenue effects depend on the tax base and behavioral response",
    "Every tax cut necessarily raises revenue by definition",
    "Tax rates never affect collected revenue",
    "A lower rate and a possibly changed base jointly determine receipts; there is no universal self-financing guarantee."
   ],
   [
    "An original labor-force participation rate rises. What should not be assumed?",
    "That every new participant immediately finds employment",
    "That more people have entered the labor force",
    "That participation and employment are distinct measures",
    "Participation includes employed people and those seeking work; entering the labor force is not identical to obtaining a job."
   ],
   [
    "An original policy is followed by higher real output per person. Why is the timing alone insufficient for a causal claim?",
    "Other changes may also explain the increase",
    "A before-after increase proves the policy was the sole cause",
    "Causal evaluation never needs a comparison",
    "A credible analysis examines mechanisms, alternatives and comparable evidence rather than assigning all change to the preceding policy."
   ],
   [
    "Which original infrastructure review is most complete?",
    "Compare productive benefits, financing costs, implementation and alternatives",
    "Judge only the project's announced size",
    "Assume a large budget proves large net benefits",
    "Resources have alternative uses, and implementation and financing can change outcomes; an announcement is not measured success."
   ],
   [
    "An original policy model has output per employed worker of 30, employment of 40 people and population 100. What is output per person?",
    "12",
    "30",
    "36",
    "Combine the two denominators: output per worker times workers per person gives output per person. Do not confuse employment with the whole population."
   ],
   [
    "An original policy model has output per employed worker of 25, employment of 60 people and population 100. What is output per person?",
    "15",
    "25",
    "45",
    "Combine the two denominators: output per worker times workers per person gives output per person. Do not confuse employment with the whole population."
   ],
   [
    "An original policy model has output per employed worker of 24, employment of 75 people and population 150. What is output per person?",
    "12",
    "24",
    "36",
    "Combine the two denominators: output per worker times workers per person gives output per person. Do not confuse employment with the whole population."
   ],
   [
    "An original capital-policy account starts with 500 productive capital units, adds gross investment of 70 and loses 20 to depreciation. What is the end-of-period capital stock?",
    "550",
    "570",
    "450",
    "Gross investment adds new capital while depreciation removes worn-out capital. The ending stock reconciles both flows with the original stock."
   ],
   [
    "An original capital-policy account starts with 800 productive capital units, adds gross investment of 90 and loses 30 to depreciation. What is the end-of-period capital stock?",
    "860",
    "890",
    "740",
    "Gross investment adds new capital while depreciation removes worn-out capital. The ending stock reconciles both flows with the original stock."
   ],
   [
    "An original capital-policy account starts with 1000 productive capital units, adds gross investment of 80 and loses 50 to depreciation. What is the end-of-period capital stock?",
    "1030",
    "1080",
    "970",
    "Gross investment adds new capital while depreciation removes worn-out capital. The ending stock reconciles both flows with the original stock."
   ]
  ],
  "check": [
   "A fictional economy produces 24 units per employed worker, with 60 employed people in a population of 120. What is output per person?",
   "12 units per person",
   "24 units per person",
   "48 units per person",
   "Multiply productivity by the employed population share: 24 × 60/120 = 12."
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "From policy to productive capacity",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      87,
      165
     ],
     "P1": [
      233,
      165
     ],
     "P2": [
      233,
      89
     ],
     "P3": [
      87,
      89
     ],
     "P4": [
      235,
      127
     ],
     "P5": [
      255,
      127
     ],
     "P6": [
      259,
      165
     ],
     "P7": [
      405,
      165
     ],
     "P8": [
      405,
      89
     ],
     "P9": [
      259,
      89
     ],
     "P10": [
      407,
      127
     ],
     "P11": [
      427,
      127
     ],
     "P12": [
      431,
      165
     ],
     "P13": [
      577,
      165
     ],
     "P14": [
      577,
      89
     ],
     "P15": [
      431,
      89
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
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
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P6P7P8P9",
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
      "text": "Example growth-policy sequence; schematic",
      "col": 0
     },
     {
      "at": [
       160,
       134
      ],
      "text": "Policy",
      "col": 1
     },
     {
      "at": [
       160,
       106
      ],
      "text": "Incentive",
      "col": 1
     },
     {
      "at": [
       332,
       134
      ],
      "text": "Response",
      "col": 2
     },
     {
      "at": [
       332,
       106
      ],
      "text": "Investment",
      "col": 2
     },
     {
      "at": [
       504,
       134
      ],
      "text": "Capacity",
      "col": 3
     },
     {
      "at": [
       504,
       106
      ],
      "text": "Installed capital",
      "col": 3
     },
     {
      "at": [
       320,
       41
      ],
      "text": "Timing, financing and implementation affect results",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Employment share and output",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      161,
      147
     ],
     "P1": [
      230,
      147
     ],
     "P2": [
      230,
      57
     ],
     "P3": [
      161,
      57
     ],
     "P4": [
      407,
      165
     ],
     "P5": [
      476,
      165
     ],
     "P6": [
      476,
      57
     ],
     "P7": [
      407,
      57
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
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
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Fictional population: 100; output per worker: 20",
      "col": 0
     },
     {
      "at": [
       195.5,
       158
      ],
      "text": "50 employed",
      "col": 1
     },
     {
      "at": [
       195.5,
       36
      ],
      "text": "Before",
      "col": 1
     },
     {
      "at": [
       441.5,
       176
      ],
      "text": "60 employed",
      "col": 2
     },
     {
      "at": [
       441.5,
       36
      ],
      "text": "After",
      "col": 2
     },
     {
      "at": [
       320,
       192
      ],
      "text": "20 × 50/100 = 10; 20 × 60/100 = 12 per person",
      "col": 0
     }
    ],
    "circles": []
   }
  ]
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Choose the model and horizon before predicting policy effects. Combine fiscal and monetary channels without assuming their rate effects agree. Distinguish movement along the SRPC from shifts and the natural-rate LRPC. Use the quantity equation with consistent price scales and explicit growth assumptions. Reconcile budget flows with debt stocks without double-counting interest. Separate private investment from total borrowing in crowding-out analysis. Evaluate real output per person, productivity and capacity rather than nominal totals alone, and assess policy mechanisms, costs and evidence before claiming a growth benefit.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"finance-h-ap-macro-long-run-consequences-of-stabilization-policies","subject":"finance","level":5,"grade":9,"standard":"AP Macroeconomics Course and Exam Description, effective Fall 2026, Unit 5, topics 5.1–5.7","title":"Long-Run Consequences of Stabilization Policies","goal":"Trace combined policies, inflation expectations, money growth, debt and investment through explicit models, and distinguish demand recovery from long-run capacity growth.","points":20,"progression":{"requires":["finance-h-ap-macro-financial-sector","finance-h-ap-macro-national-income-and-price-determination"],"operations":3,"demand":"Integrate graphs and policy mechanisms, solve original accounts and equilibria, and distinguish conditional model predictions from causal evidence."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
