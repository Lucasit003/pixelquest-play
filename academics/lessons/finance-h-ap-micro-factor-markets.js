/* Original course unit. Review record: docs/review/lessons/high-completion/ap-micro-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "5.1",
  "name": "Introduction to Factor Markets",
  "skill": "s1",
  "teach": [
   "A factor market trades the services of productive inputs. Firms demand labor, land and capital services to produce output; households and other resource owners supply them. Wages pay for labor services, rent pays for use of land, and a rental payment can pay for using equipment. Interest is the cost of borrowed financial funds, which may finance physical capital. A machine is physical capital; a bond is a financial claim. An employer's demand for labor is derived from the revenue that labor can help produce, rather than from workers buying the firm's final product.",
   "Marginal product measures extra physical output from extra input with other inputs fixed. In an original workshop, output rises from 30 to 42 units per hour when labor rises from 2 to 3 worker-hours per hour; the extra worker adds 12 units. Average product at 3 workers is 42/3 = 14, a different calculation. Diminishing marginal returns means successive additions become smaller after some point with a fixed input; total output can still rise. It does not mean the later worker has less skill or that total product must immediately fall.",
   "Marginal revenue product, MRP, is the change in total revenue per extra unit of input. In a competitive output market, marginal revenue equals the output price, so MRP = MP × P. With an extra 12 units selling for a constant 4 dollars each, MRP is 48 dollars per extra worker-hour. If a firm must lower its output price to sell more, use marginal revenue, not simply the old price. In continuous models the chain rule gives MRP = MP × MR; for a discrete table, compare total revenue before and after so any repricing is included.",
   "Marginal resource cost, MRC, measures extra total input expenditure per extra input unit. When a wage-taking employer hires another worker-hour at a fixed wage of 20 dollars without changing other wages, MRC is 20 dollars. If attracting one more worker requires raising everyone's wage, the entire wage-bill change matters. In the standard competitive labor market, the market wage balances downward-sloping demand and upward-sloping supply. One small wage-taking firm's labor supply is horizontal at that market wage; it is not the whole market's supply curve. In the separate original diagrams, the market clears at wage 24 and labor 32. A small firm facing that wage has MRP=64−4L and hires 10. Its labor quantity is only part of the whole market."
  ],
  "boards": [
   [
    "Factors provide productive services",
    "Firms demand; resource owners supply",
    "Physical capital differs from a financial claim"
   ],
   [
    "Output 30 → 42; workers 2 → 3",
    "Marginal product = 12; average product = 14",
    "Falling marginal product can coexist with growth"
   ],
   [
    "Competitive output: MR = price",
    "Extra 12 units × $4 = MRP $48",
    "With repricing, use the total-revenue change"
   ],
   [
    "MRC = extra expenditure / extra input",
    "Fixed wage $20 ⇒ MRC $20",
    "Market supply differs from firm supply"
   ]
  ],
  "eqs": [
   "Derived factor demand depends on output revenue and input productivity",
   "MP = (42 − 30)/(3 − 2) = 12; AP = 42/3 = 14",
   "MRP = ΔTR/ΔL; with competitive output, MRP = MP × P = 48",
   "MRC = Δ(total labor cost)/ΔL; a wage taker has MRC = wage"
  ],
  "questions": [
   [
    "A bakery hires an hour of a baker's time. Which market is directly involved?",
    "A factor market for labor services",
    "Only a final bread market",
    "A foreign-exchange market even without any currency conversion",
    "The transaction purchases a productive labor input. Selling finished bread is an output-market transaction, and a domestic hiring decision does not itself require foreign exchange."
   ],
   [
    "In a labor market, who normally demands labor services?",
    "Employers using labor to produce output",
    "Workers solely because they seek a wage",
    "Only consumers buying finished products",
    "Employers demand the productive service; workers supply it. Final-product demand helps determine derived labor demand but is not itself the direct hiring side of the labor market."
   ],
   [
    "Why is an employer's labor demand called derived demand?",
    "It depends on demand and revenue for the output labor helps produce",
    "It exists only when workers buy the employer's output",
    "It is identical to the population's desire for leisure",
    "The value of an input depends on its contribution to output revenue. Workers need not buy that output, and leisure preferences affect labor supply rather than define derived demand."
   ],
   [
    "Which item is physical capital used in production?",
    "A firm's delivery vehicle",
    "A newly purchased bond by itself",
    "A currency note kept in a drawer by itself",
    "The vehicle is a produced productive resource. A bond is a financial claim and a note is money; neither alone is the physical productive equipment meant by capital here."
   ],
   [
    "Which definition describes marginal product of labor?",
    "Additional output per additional labor input with other inputs fixed",
    "Total output divided by the total labor input",
    "Total revenue divided by total output",
    "Marginal product is an increment with other inputs held fixed. Output per total labor is average product; revenue per output unit is an average-revenue measure."
   ],
   [
    "Marginal product is positive but declines as labor is added to fixed capital. What can happen to total output?",
    "It rises by progressively smaller increments",
    "It must decline whenever marginal product declines",
    "It must remain exactly constant",
    "Positive marginal additions increase total output even when each is smaller. Declining total output would require negative marginal product, while zero additions would leave it constant."
   ],
   [
    "What does marginal revenue product measure?",
    "Extra total revenue per extra unit of a factor",
    "The wage paid to every worker by definition",
    "Only extra physical output with no price dimension",
    "MRP measures the revenue contribution of an extra input. It is distinct from the input's cost, and physical marginal product needs a revenue conversion to become MRP."
   ],
   [
    "When does marginal revenue product equal marginal product times the output price?",
    "When the firm takes a constant output price so MR equals price",
    "For every seller regardless of repricing effects",
    "Only when output price is zero",
    "A price taker receives the same price for additional output. A seller facing downward-sloping demand must account for marginal revenue, which can differ from price; zero price is not required."
   ],
   [
    "A seller lowers its price on all units to sell the output from an extra worker. Which calculation reliably captures that worker's discrete revenue contribution?",
    "The change in total revenue between the two employment levels",
    "Extra physical output times the old price, ignoring repricing",
    "The new output level alone",
    "The total-revenue difference includes the revenue change on earlier units as well as added output. Using only the old price misses repricing, and physical output is not revenue."
   ],
   [
    "What defines marginal resource cost for labor?",
    "Change in total labor expenditure per added labor unit",
    "Total labor expenditure divided by total workers in every case",
    "Revenue earned on the employer's last product sold",
    "MRC is an expenditure increment. Average labor cost can differ when wages change for existing workers, and output marginal revenue is on the benefit side rather than the input-cost side."
   ],
   [
    "One wage-taking firm can hire additional comparable worker-hours at an unchanged market wage. What does its labor-supply curve look like in the model?",
    "Horizontal at the market wage",
    "Identical to the upward-sloping whole-market supply curve",
    "Vertical at zero hiring",
    "The individual employer takes the market wage as given. The market curve aggregates workers' choices, so it need not have the same shape as the supply facing a small employer."
   ],
   [
    "Does diminishing marginal product prove later workers are less skilled than earlier workers?",
    "No, fixed complementary inputs can produce diminishing additions even for comparable workers",
    "Yes, falling marginal product defines falling worker skill",
    "No, because marginal product can never diminish",
    "With fixed workspace or equipment, added comparable labor can have smaller contributions. The model does not define differences in workers' abilities, nor rule out diminishing marginal returns."
   ],
   [
    "With all other inputs fixed, adding one worker-hour raises an original workshop's output from 40 to 56 units. What is the marginal product of that worker-hour?",
    "16",
    "96",
    "56",
    "An increment of 16 added to the original 40 reconstructs 56. The final level and the sum of levels are not the added output."
   ],
   [
    "With all other inputs fixed, adding one worker-hour raises an original workshop's output from 54 to 72 units. What is the marginal product of that worker-hour?",
    "18",
    "126",
    "72",
    "An increment of 18 added to the original 54 reconstructs 72. The final level and the sum of levels are not the added output."
   ],
   [
    "With all other inputs fixed, adding one worker-hour raises an original workshop's output from 65 to 85 units. What is the marginal product of that worker-hour?",
    "20",
    "150",
    "85",
    "An increment of 20 added to the original 65 reconstructs 85. The final level and the sum of levels are not the added output."
   ],
   [
    "An extra worker-hour produces 8 additional units sold at a constant competitive price of 3 dollars each. What is MRP in dollars per worker-hour?",
    "24",
    "8",
    "11",
    "The additional revenue is 24 dollars; dividing by the 3-dollar price reconstructs 8 extra units. Physical output alone or adding a price to it does not measure revenue."
   ],
   [
    "An extra worker-hour produces 7 additional units sold at a constant competitive price of 4 dollars each. What is MRP in dollars per worker-hour?",
    "28",
    "7",
    "11",
    "The additional revenue is 28 dollars; dividing by the 4-dollar price reconstructs 7 extra units. Physical output alone or adding a price to it does not measure revenue."
   ],
   [
    "An extra worker-hour produces 6 additional units sold at a constant competitive price of 5 dollars each. What is MRP in dollars per worker-hour?",
    "30",
    "6",
    "11",
    "The additional revenue is 30 dollars; dividing by the 5-dollar price reconstructs 6 extra units. Physical output alone or adding a price to it does not measure revenue."
   ],
   [
    "An original firm adds 2 worker-hours and total revenue rises from 120 to 180 dollars. What is the average extra revenue per added worker-hour over this increment?",
    "30",
    "60",
    "150",
    "The extra revenue is 60; spreading it over 2 added worker-hours gives 30 dollars per hour. The total increment alone omits the input count, and summing revenue levels is not an increment."
   ],
   [
    "An original firm adds 3 worker-hours and total revenue rises from 200 to 320 dollars. What is the average extra revenue per added worker-hour over this increment?",
    "40",
    "120",
    "173",
    "The extra revenue is 120; spreading it over 3 added worker-hours gives 40 dollars per hour. The total increment alone omits the input count, and summing revenue levels is not an increment."
   ],
   [
    "An original firm adds 4 worker-hours and total revenue rises from 350 to 550 dollars. What is the average extra revenue per added worker-hour over this increment?",
    "50",
    "200",
    "225",
    "The extra revenue is 200; spreading it over 4 added worker-hours gives 50 dollars per hour. The total increment alone omits the input count, and summing revenue levels is not an increment."
   ],
   [
    "Hiring exactly one additional worker-hour raises total labor expenditure from 40 to 66 dollars. What is MRC for this increment?",
    "26",
    "66",
    "40",
    "MRC must satisfy old expenditure plus MRC equals new expenditure: 40 + 26 = 66. Neither total expenditure level is the incremental cost."
   ],
   [
    "Hiring exactly one additional worker-hour raises total labor expenditure from 72 to 104 dollars. What is MRC for this increment?",
    "32",
    "104",
    "72",
    "MRC must satisfy old expenditure plus MRC equals new expenditure: 72 + 32 = 104. Neither total expenditure level is the incremental cost."
   ],
   [
    "Hiring exactly one additional worker-hour raises total labor expenditure from 120 to 160 dollars. What is MRC for this increment?",
    "40",
    "160",
    "120",
    "MRC must satisfy old expenditure plus MRC equals new expenditure: 120 + 40 = 160. Neither total expenditure level is the incremental cost."
   ],
   [
    "At a point in a differentiable production model, MP of labor is 4, marginal revenue is 3 dollars and output price is 5 dollars. What is MRP at that point?",
    "12",
    "20",
    "7",
    "The chain rule links revenue to output and output to labor: MRP is 12. Using price instead gives value of marginal product here, not MRP; adding MP to MR mixes quantities."
   ],
   [
    "At a point in a differentiable production model, MP of labor is 5, marginal revenue is 4 dollars and output price is 6 dollars. What is MRP at that point?",
    "20",
    "30",
    "9",
    "The chain rule links revenue to output and output to labor: MRP is 20. Using price instead gives value of marginal product here, not MRP; adding MP to MR mixes quantities."
   ]
  ],
  "boardTitle": "Factor markets",
  "pics": [
   {
    "t": "figure",
    "title": "5.1 · Trading labor services",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      93,
      176
     ],
     "P1": [
      243,
      176
     ],
     "P2": [
      243,
      76
     ],
     "P3": [
      93,
      76
     ],
     "P4": [
      398,
      176
     ],
     "P5": [
      548,
      176
     ],
     "P6": [
      548,
      76
     ],
     "P7": [
      398,
      76
     ],
     "P8": [
      253,
      157
     ],
     "P9": [
      388,
      157
     ],
     "P10": [
      388,
      90
     ],
     "P11": [
      253,
      90
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
     }
    ],
    "notes": [
     {
      "at": [
       168,
       142
      ],
      "text": "Employers",
      "col": 0
     },
     {
      "at": [
       168,
       100
      ],
      "text": "Demand labor",
      "col": 0
     },
     {
      "at": [
       473,
       142
      ],
      "text": "Workers",
      "col": 1
     },
     {
      "at": [
       473,
       100
      ],
      "text": "Supply labor",
      "col": 1
     },
     {
      "at": [
       320,
       181
      ],
      "text": "Pay wages",
      "col": 0
     },
     {
      "at": [
       320,
       59
      ],
      "text": "Provide labor",
      "col": 0
     },
     {
      "at": [
       320,
       214
      ],
      "text": "Product-market transactions are a separate exchange",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "5.1 · Fictional production schedule",
    "head": "Worker-hours",
    "cols": [
     "Total output",
     "Output per worker"
    ],
    "rows": [
     [
      "2",
      "30",
      "15"
     ],
     [
      "3",
      "42",
      "14"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "5.1 · Competitive output market",
    "head": "Marginal quantity",
    "cols": [
     "Value"
    ],
    "rows": [
     [
      "Added physical output",
      "12 units"
     ],
     [
      "Constant output price",
      "$4 per unit"
     ],
     [
      "Added revenue",
      "$48"
     ]
    ]
   },
   [
    {
     "t": "figure",
     "title": "5.1 · Whole competitive labor market",
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
       363.75,
       61
      ],
      "P11": [
       363.75,
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
       169.33333333333334
      ],
      "P21": [
       510,
       82.66666666666666
      ],
      "P22": [
       120,
       82.66666666666666
      ],
      "P23": [
       510,
       169.33333333333334
      ],
      "P24": [
       315,
       126
      ]
     },
     "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24",
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
      }
     ],
     "polys": [],
     "notes": [
      {
       "at": [
        320,
        27
       ],
       "text": "Worker-hours in this market",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "Wage (dollars per hour)",
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
       "text": "16",
       "col": 0
      },
      {
       "at": [
        315,
        41
       ],
       "text": "32",
       "col": 0
      },
      {
       "at": [
        363.75,
        41
       ],
       "text": "40",
       "col": 0
      },
      {
       "at": [
        510,
        41
       ],
       "text": "64",
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
       "text": "24",
       "col": 0
      },
      {
       "at": [
        97,
        186
       ],
       "text": "48",
       "col": 0
      },
      {
       "at": [
        297,
        108
       ],
       "text": "E0",
       "col": 0
      },
      {
       "at": [
        506.625,
        96.08333333333334
       ],
       "text": "D0",
       "col": 0
      },
      {
       "at": [
        508.625,
        171.91666666666666
       ],
       "text": "S0",
       "col": 1
      }
     ],
     "circles": [
      {
       "c": "P24",
       "r": 4,
       "col": 0
      }
     ]
    },
    {
     "t": "figure",
     "title": "5.1 · One wage-taking firm",
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
       109.75
      ],
      "P15": [
       120,
       109.75
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
       191
      ],
      "P19": [
       510,
       69.125
      ],
      "P20": [
       120,
       109.75
      ],
      "P21": [
       510,
       109.75
      ],
      "P22": [
       380,
       109.75
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
      }
     ],
     "polys": [],
     "notes": [
      {
       "at": [
        320,
        27
       ],
       "text": "Labor hired by one firm",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "Dollars per worker-hour",
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
       "text": "5",
       "col": 0
      },
      {
       "at": [
        380,
        41
       ],
       "text": "10",
       "col": 0
      },
      {
       "at": [
        510,
        41
       ],
       "text": "15",
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
       "text": "24",
       "col": 0
      },
      {
       "at": [
        97,
        186
       ],
       "text": "64",
       "col": 0
      },
      {
       "at": [
        385,
        122.75
       ],
       "text": "Hire 10",
       "col": 2
      },
      {
       "at": [
        456,
        76.5
       ],
       "text": "MRP",
       "col": 0
      },
      {
       "at": [
        224,
        90.75
       ],
       "text": "Wage = MRC",
       "col": 1
      }
     ],
     "circles": [
      {
       "c": "P22",
       "r": 4,
       "col": 2
      }
     ]
    }
   ]
  ],
  "qpics": {
   "12": {
    "t": "setups",
    "title": "Original production; one added worker-hour",
    "head": "Observation",
    "cols": [
     "Output"
    ],
    "rows": [
     [
      "Before",
      "40"
     ],
     [
      "After",
      "56"
     ]
    ]
   },
   "21": {
    "t": "setups",
    "title": "Original labor cost; one added worker-hour",
    "head": "Observation",
    "cols": [
     "Total expenditure"
    ],
    "rows": [
     [
      "Before",
      "$40"
     ],
     [
      "After",
      "$66"
     ]
    ]
   }
  }
 },
 {
  "code": "5.2",
  "name": "Changes in Factor Demand and Factor Supply",
  "skill": "s2",
  "teach": [
   "Separate the wage plotted on the axis from determinants that shift a curve. A higher wage, with all determinants unchanged, moves along labor demand toward fewer worker-hours and along market supply toward more. A higher competitive output price raises MRP at each employment level if the production schedule is unchanged. Labor demand shifts right. For example, MP of 5 at a price of 6 dollars generates MRP of 30; a price of 8 raises it to 40. This shift is not caused by a change in the wage itself. The separate diagram uses MP=10−L and compares output prices 3 and 4: at labor 5, MRP rises from 15 to 20.",
   "Technology and other inputs need a stated relationship to labor. Equipment that increases workers' marginal productivity at each employment level can raise demand for that labor. Technology replacing a specific task can reduce demand for that occupation; greater output can create offsetting labor demand. Do not claim every innovation raises or lowers every job's demand. Education can increase an individual's productivity and, when more people become qualified for an occupation, expand that occupation's supply. Identify the channel rather than assuming one curve for every reference to education.",
   "Labor supply for a specified occupation and location can shift when the number of qualified people willing to work changes. More eligible workers entering that market at every wage increases supply; more retirements or better opportunities elsewhere can reduce it. Safer or more attractive conditions can raise willingness to work at the same monetary wage. Greater preference for leisure can reduce hours offered, other things fixed. Age distribution or immigration alone is not a numerical supply shift until the scenario states how available qualified labor changes.",
   "In a competitive market, increased labor demand raises both wage and employment with supply fixed. Increased supply lowers wage and raises employment with demand fixed. If both rise, employment rises but the wage direction depends on shift sizes; if demand rises and supply falls, wage rises but employment is ambiguous. In an original market Ld=80−2w and Ls=−16+2w, w=24 gives employment 32. Raising demand to 96−2w makes w=28 and employment 40. The new wage does not mean the supply curve itself shifted."
  ],
  "boards": [
   [
    "A wage change alone moves along curves",
    "Higher output price can shift labor demand",
    "MP 5: price $6 → $8; MRP $30 → $40"
   ],
   [
    "Technology may complement or replace tasks",
    "More productivity can raise labor demand",
    "More qualified entrants can raise labor supply"
   ],
   [
    "Specify occupation, place and qualifications",
    "More willing workers at every wage: supply ↑",
    "Alternatives and working conditions also matter"
   ],
   [
    "Demand ↑: wage ↑ and employment ↑",
    "Supply ↑: wage ↓ and employment ↑",
    "Both ↑: employment ↑; wage ambiguous"
   ]
  ],
  "eqs": [
   "With MP fixed, MRP changes with competitive output price",
   "Identify whether productivity, substitutes or worker availability changes",
   "Supply shifts compare quantities offered at the same wage",
   "80 − 2(24) = −16 + 2(24) = 32; demand shift ⇒ w = 28, L = 40"
  ],
  "questions": [
   [
    "A competitive seller receives a higher output price with its labor productivity schedule fixed. What happens to its demand for labor?",
    "It shifts right as MRP rises",
    "It shifts left because each worker becomes less productive",
    "Only labor supply shifts right",
    "The higher product price raises revenue from each marginal unit of output. Productivity need not fall, and the event directly changes employer demand rather than worker availability."
   ],
   [
    "A competitive seller's output price falls with its productivity schedule fixed. What happens to labor demand?",
    "It shifts left as MRP falls",
    "It shifts right solely because revenue per unit fell",
    "The wage change must move the unchanged curve instead",
    "Lower output price reduces MRP at each employment level. That changes a demand determinant, so it is a shift rather than solely a response to a new wage on the same curve."
   ],
   [
    "Training raises workers' MP at every employment level with output marginal revenue fixed. What is the direct employer-side effect?",
    "Labor demand shifts right",
    "Labor demand shifts left",
    "Only the market wage changes with no demand shift",
    "A higher MP produces more additional revenue per worker, increasing MRP and demand. The opposite demand shift or denying the determinant's change reverses this channel."
   ],
   [
    "A new machine directly replaces a task and reduces employers' demand for that occupation at every wage; hold other channels fixed. What happens?",
    "That occupation's labor-demand curve shifts left",
    "Its labor-supply curve must shift right",
    "Its labor demand rises by definition because all technology complements labor",
    "The stated task substitution reduces demand for the specified workers. It does not by itself increase worker availability, and technology need not complement every occupation."
   ],
   [
    "New equipment increases the MP of maintenance technicians at every employment level, with product MR fixed. What happens to technician demand?",
    "It shifts right",
    "It shifts left",
    "It cannot change because equipment is not labor",
    "Complementary equipment makes added technician labor generate more revenue, raising demand. Equipment can change labor productivity even though it is a separate factor."
   ],
   [
    "More qualified people enter a particular occupation and are willing to work at every wage. With demand fixed, what happens to its market supply?",
    "It shifts right",
    "It shifts left",
    "It stays fixed because only demand can change employment",
    "More qualified willing workers at each wage is an increase in labor supply. Demand need not shift, and the opposite direction would describe fewer workers."
   ],
   [
    "Retirements reduce qualified worker-hours offered at every wage in a stated market. With demand fixed, what happens to supply?",
    "It shifts left",
    "It shifts right",
    "Only movement along an unchanged supply curve occurs",
    "The number of hours available at each given wage has fallen, shifting supply left. A change in the wage alone would move along a curve, and a right shift would mean more hours."
   ],
   [
    "Better-paying jobs elsewhere draw workers out of this occupation at each of its own wage rates. What happens here?",
    "Labor supply shifts left",
    "Labor demand shifts right by definition",
    "Labor supply shifts right",
    "Improved outside options reduce hours offered in this market at a given wage. That is a supply decrease, not a guaranteed employer-demand increase or more local availability."
   ],
   [
    "Safer working conditions make more qualified people willing to accept this job at the same monetary wage. Which stated channel applies?",
    "Labor supply increases",
    "Labor supply decreases",
    "Only a movement caused by a higher monetary wage",
    "The premise holds the monetary wage fixed and increases willingness to supply labor, so supply shifts right. It is neither a wage-driven movement nor lower willingness."
   ],
   [
    "Workers prefer more leisure and offer fewer hours at every wage, other things fixed. What happens to market supply?",
    "It decreases",
    "It increases",
    "It remains fixed because preferences never affect supply",
    "A changed work-leisure preference can lower offered hours at each wage. That shifts supply left, opposite to an increase; preferences are part of the supply decision."
   ],
   [
    "The wage alone rises with all nonwage determinants fixed. What happens on a downward-sloping labor-demand curve?",
    "Quantity demanded falls along the same curve",
    "The entire demand curve shifts right",
    "The entire demand curve shifts left",
    "A change in the plotted wage causes movement along demand. A shift would require a changed determinant such as output price or productivity, which the premise holds fixed."
   ],
   [
    "More workers become qualified through education, while productivity of each qualified worker is unchanged. What is the stated direct effect?",
    "Labor supply rises",
    "Labor demand must rise through higher individual productivity",
    "Labor supply falls",
    "The scenario increases the count of qualified suppliers and holds individual productivity fixed. It therefore specifies a supply channel, not the different productivity channel or a supply reduction."
   ],
   [
    "Labor demand rises in a competitive market while upward-sloping supply is fixed. What happens to wage and employment?",
    "Both rise",
    "Wage rises and employment falls",
    "Both fall",
    "Higher demand moves the intersection up the unchanged supply curve, increasing both wage and employment. Falling employment or a falling wage contradicts that isolated shift."
   ],
   [
    "Labor supply rises in a competitive market while downward-sloping demand is fixed. What happens?",
    "Wage falls and employment rises",
    "Wage rises and employment falls",
    "Both wage and employment fall",
    "More supply moves the equilibrium down the demand curve to a lower wage and more employment. The other combinations reverse one or both responses."
   ],
   [
    "Both labor demand and labor supply rise in a competitive market. Which result is unambiguous?",
    "Employment rises; the wage direction is ambiguous",
    "The wage rises; employment is necessarily unchanged",
    "Employment falls; the wage direction is ambiguous",
    "Both shifts raise employment, while demand raises the wage and supply lowers it. Relative shift sizes are needed for the wage; an employment decrease is inconsistent with both shifts."
   ],
   [
    "Labor demand rises while labor supply falls in a competitive market. Which result is unambiguous?",
    "The wage rises; employment is ambiguous",
    "Employment rises; the wage must fall",
    "Both wage and employment must fall",
    "Both shifts push the wage up, but their employment effects oppose each other. Relative sizes determine employment, and neither a falling wage nor universally falling employment follows."
   ],
   [
    "After a stated shift, an original competitive labor market has Ld=96-2w and Ls=-16+2w, with w in dollars per hour and L in worker-hours. What equilibrium wage clears it?",
    "28",
    "32",
    "24",
    "At w=28, both labor-demand and supply schedules equal 40. The requested wage is 28; the alternatives do not describe their common equilibrium."
   ],
   [
    "After a stated shift, an original competitive labor market has Ld=96-2w and Ls=-16+2w, with w in dollars per hour and L in worker-hours. What equilibrium employment clears it?",
    "40",
    "48",
    "32",
    "At w=28, both labor-demand and supply schedules equal 40. The requested employment is 40; the alternatives do not describe their common equilibrium."
   ],
   [
    "After a stated shift, an original competitive labor market has Ld=80-2w and Ls=0+2w, with w in dollars per hour and L in worker-hours. What equilibrium wage clears it?",
    "20",
    "24",
    "16",
    "At w=20, both labor-demand and supply schedules equal 40. The requested wage is 20; the alternatives do not describe their common equilibrium."
   ],
   [
    "After a stated shift, an original competitive labor market has Ld=80-2w and Ls=0+2w, with w in dollars per hour and L in worker-hours. What equilibrium employment clears it?",
    "40",
    "48",
    "32",
    "At w=20, both labor-demand and supply schedules equal 40. The requested employment is 40; the alternatives do not describe their common equilibrium."
   ],
   [
    "After a stated shift, an original competitive labor market has Ld=64-2w and Ls=-16+2w, with w in dollars per hour and L in worker-hours. What equilibrium wage clears it?",
    "20",
    "24",
    "16",
    "At w=20, both labor-demand and supply schedules equal 24. The requested wage is 20; the alternatives do not describe their common equilibrium."
   ],
   [
    "After a stated shift, an original competitive labor market has Ld=64-2w and Ls=-16+2w, with w in dollars per hour and L in worker-hours. What equilibrium employment clears it?",
    "24",
    "32",
    "16",
    "At w=20, both labor-demand and supply schedules equal 24. The requested employment is 24; the alternatives do not describe their common equilibrium."
   ],
   [
    "After a stated shift, an original competitive labor market has Ld=80-2w and Ls=-32+2w, with w in dollars per hour and L in worker-hours. What equilibrium wage clears it?",
    "28",
    "32",
    "24",
    "At w=28, both labor-demand and supply schedules equal 24. The requested wage is 28; the alternatives do not describe their common equilibrium."
   ],
   [
    "After a stated shift, an original competitive labor market has Ld=80-2w and Ls=-32+2w, with w in dollars per hour and L in worker-hours. What equilibrium employment clears it?",
    "24",
    "32",
    "16",
    "At w=28, both labor-demand and supply schedules equal 24. The requested employment is 24; the alternatives do not describe their common equilibrium."
   ],
   [
    "At a fixed employment level, MP is 4 units and a competitive output price rises from 6 to 9 dollars. By how many dollars does MRP rise?",
    "12",
    "36",
    "24",
    "MRP starts at 24 and ends at 36. Their increase is 12; either level alone is not the change requested."
   ],
   [
    "At a fixed employment level, MP is 6 units and a competitive output price rises from 4 to 5 dollars. By how many dollars does MRP rise?",
    "6",
    "30",
    "24",
    "MRP starts at 24 and ends at 30. Their increase is 6; either level alone is not the change requested."
   ]
  ],
  "boardTitle": "Factor demand and supply",
  "pics": [
   {
    "t": "figure",
    "title": "5.2 · A higher product price changes MRP",
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
      100
     ],
     "P13": [
      120,
      100
     ],
     "P14": [
      115,
      139
     ],
     "P15": [
      120,
      139
     ],
     "P16": [
      115,
      165
     ],
     "P17": [
      120,
      165
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
      139
     ],
     "P21": [
      510,
      61
     ],
     "P22": [
      120,
      165
     ],
     "P23": [
      510,
      61
     ],
     "P24": [
      315,
      100
     ],
     "P25": [
      315,
      113
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
      "text": "Labor (other inputs fixed)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "MRP (dollars per labor unit)",
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
      "text": "5",
      "col": 0
     },
     {
      "at": [
       510,
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
       95
      ],
      "text": "15",
      "col": 0
     },
     {
      "at": [
       97,
       134
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       97,
       160
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "50",
      "col": 0
     },
     {
      "at": [
       237,
       153.6
      ],
      "text": "Price $4",
      "col": 2
     },
     {
      "at": [
       237,
       95
      ],
      "text": "Price $3",
      "col": 0
     },
     {
      "at": [
       397,
       204
      ],
      "text": "Fictional MP = 10 − L",
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
      "col": 2
     }
    ]
   },
   null,
   null,
   [
    {
     "t": "figure",
     "title": "5.2 · More labor demanded",
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
       363.75,
       61
      ],
      "P11": [
       363.75,
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
       169.33333333333334
      ],
      "P21": [
       510,
       82.66666666666666
      ],
      "P22": [
       120,
       82.66666666666666
      ],
      "P23": [
       510,
       169.33333333333334
      ],
      "P24": [
       315,
       126
      ],
      "P25": [
       120,
       191
      ],
      "P26": [
       510,
       104.33333333333331
      ],
      "P27": [
       363.75,
       136.83333333333334
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
       "v": "P25P26",
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
       "text": "Worker-hours in this market",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "Wage (dollars per hour)",
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
       "text": "16",
       "col": 0
      },
      {
       "at": [
        315,
        41
       ],
       "text": "32",
       "col": 0
      },
      {
       "at": [
        363.75,
        41
       ],
       "text": "40",
       "col": 0
      },
      {
       "at": [
        510,
        41
       ],
       "text": "64",
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
       "text": "24",
       "col": 0
      },
      {
       "at": [
        97,
        186
       ],
       "text": "48",
       "col": 0
      },
      {
       "at": [
        297,
        108
       ],
       "text": "E0",
       "col": 0
      },
      {
       "at": [
        506.625,
        96.08333333333334
       ],
       "text": "D0",
       "col": 0
      },
      {
       "at": [
        508.625,
        171.91666666666666
       ],
       "text": "S0",
       "col": 1
      },
      {
       "at": [
        380.75,
        148.83333333333334
       ],
       "text": "E1 (40,28)",
       "col": 2
      },
      {
       "at": [
        508.625,
        117.75
       ],
       "text": "D1",
       "col": 2
      }
     ],
     "circles": [
      {
       "c": "P24",
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
     "t": "figure",
     "title": "5.2 · More labor supplied",
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
       363.75,
       61
      ],
      "P11": [
       363.75,
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
       169.33333333333334
      ],
      "P21": [
       510,
       82.66666666666666
      ],
      "P22": [
       120,
       82.66666666666666
      ],
      "P23": [
       510,
       169.33333333333334
      ],
      "P24": [
       315,
       126
      ],
      "P25": [
       120,
       61
      ],
      "P26": [
       510,
       147.66666666666666
      ],
      "P27": [
       363.75,
       115.16666666666669
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
       "v": "P25P26",
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
       "text": "Worker-hours in this market",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "Wage (dollars per hour)",
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
       "text": "16",
       "col": 0
      },
      {
       "at": [
        315,
        41
       ],
       "text": "32",
       "col": 0
      },
      {
       "at": [
        363.75,
        41
       ],
       "text": "40",
       "col": 0
      },
      {
       "at": [
        510,
        41
       ],
       "text": "64",
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
       "text": "24",
       "col": 0
      },
      {
       "at": [
        97,
        186
       ],
       "text": "48",
       "col": 0
      },
      {
       "at": [
        297,
        108
       ],
       "text": "E0",
       "col": 0
      },
      {
       "at": [
        506.625,
        96.08333333333334
       ],
       "text": "D0",
       "col": 0
      },
      {
       "at": [
        508.625,
        171.91666666666666
       ],
       "text": "S0",
       "col": 1
      },
      {
       "at": [
        381.75,
        94.16666666666669
       ],
       "text": "E1 (40,20)",
       "col": 2
      },
      {
       "at": [
        509.625,
        150.25
       ],
       "text": "S1",
       "col": 2
      }
     ],
     "circles": [
      {
       "c": "P24",
       "r": 4,
       "col": 0
      },
      {
       "c": "P27",
       "r": 4,
       "col": 2
      }
     ]
    }
   ]
  ],
  "qpics": {
   "16": {
    "t": "setups",
    "title": "Original competitive market schedule",
    "head": "Wage",
    "cols": [
     "Ld",
     "Ls"
    ],
    "rows": [
     [
      "24",
      "48",
      "32"
     ],
     [
      "28",
      "40",
      "40"
     ],
     [
      "32",
      "32",
      "48"
     ]
    ]
   }
  }
 },
 {
  "code": "5.3",
  "name": "Profit-Maximizing Behavior in Perfectly Competitive Factor Markets",
  "skill": "s3",
  "teach": [
   "A price-taking employer in the labor market faces a given wage, so its MRC equals that wage for each extra comparable labor unit. With other inputs fixed, add labor while its extra revenue exceeds its extra cost. In a smooth model with declining MRP and a suitable interior maximum, the stopping point is MRP = MRC = wage. Read employment from that intersection. This does not require the firm to be a price taker in its product market: a monopolist selling output can still hire in a competitive labor market, using MP × MR rather than MP × price.",
   "Use discrete tables without inventing an exact equality. Suppose successive workers add 70, 55, 40, 25 and 10 dollars of revenue per hour, and each costs 30 dollars per hour. Hiring 3 gives revenue 165 and wage cost 90, leaving 75 before fixed costs. A fourth adds 25 but costs 30, reducing that amount. Thus 3 is the unique best quantity even though no MRP equals 30. If a worker's MRP exactly equals wage, that added worker leaves profit unchanged; two adjacent employment levels can tie. State a tie rule when a question needs one number.",
   "A wage change moves the employer along its MRP schedule if other determinants stay fixed. For MRP=60−4L and a wage of 20, the smooth optimum is L=10; a wage of 28 reduces it to 8. Total wage expenditure is wage times employment, which can rise or fall when a wage changes because both factors matter. Revenue minus wage cost is not necessarily economic profit if capital, other variable inputs or fixed costs remain to be counted. Compare total profits when there are discrete choices or unusual schedules.",
   "When both labor and capital can vary and smooth substitution is possible, cost minimization for a specified output uses equal marginal output per dollar at an interior optimum: MP_L/w = MP_K/r, where r here is the equipment rental price per period, not an interest percentage. If labor adds 12 units and costs 6 dollars while equipment adds 8 and costs 8, a marginal dollar produces 2 via labor and 1 via equipment. A small shift of spending toward labor can increase output at the same cost. Continue only until marginal conditions change; do not treat this local comparison as an unlimited hiring rule.",
   "Equal output per dollar identifies a cost-minimizing input mix under the usual smooth convex production conditions; it does not by itself choose the profit-maximizing output. With positive variable inputs and constant competitive factor prices, the profit condition adds MRP_L/w = MRP_K/r = 1 at an interior maximum. Corner solutions, indivisible equipment and fixed-proportion technologies may not satisfy an interior equality, so use the actual feasible options there. For MP_L=12,w=6,MP_K=8,r=4, both ratios equal 2; if output MR is 1, both input MRP/cost ratios are 2, suggesting expansion under the smooth interior model, not proof that profit is already maximized."
  ],
  "boards": [
   [
    "Competitive labor supply to a firm is horizontal",
    "At a smooth interior optimum: MRP = wage",
    "Output-market power is a separate issue"
   ],
   [
    "MRP: 70, 55, 40, 25, 10; wage $30",
    "Hire 3: revenue165 − wages90 = 75",
    "A fourth worker reduces that amount by5"
   ],
   [
    "MRP = 60 − 4L; wage 20 ⇒ L = 10",
    "Wage 28 ⇒ L = 8; hold the MRP curve fixed",
    "Total wage bill = wage × labor"
   ],
   [
    "Compare marginal output per dollar",
    "12/6 = 2 exceeds 8/8 = 1",
    "A small reallocation toward labor helps"
   ],
   [
    "Cost-minimizing mix differs from output choice",
    "Interior profit condition: MRP / input price = 1",
    "Discrete and corner cases need direct comparison"
   ]
  ],
  "eqs": [
   "Interior smooth optimum: MRP_L = MRC_L = w",
   "Revenue 165 − labor cost 90 = 75; worker 4 adds 25 − 30 = −5",
   "60 − 4(10) = 20; 60 − 4(8) = 28",
   "MP_L/w > MP_K/r ⇒ shift a little spending toward labor",
   "Least-cost mix: MP_L/w = MP_K/r; profit adds MRP/input price = 1"
  ],
  "questions": [
   [
    "A small employer takes the labor-market wage as given. Which marginal-cost condition applies when it hires another comparable labor hour?",
    "MRC equals the market wage",
    "MRC must exceed the wage because every firm is a monopsonist",
    "MRC is zero whenever the employer earns revenue",
    "Hiring at an unchanged wage adds exactly that wage to cost. A monopsony's rising-wage-bill mechanism is absent, and earning revenue does not make labor cost vanish."
   ],
   [
    "With diminishing MRP and competitive hiring, an additional worker's MRP exceeds wage. What is the marginal incentive?",
    "Hiring that worker raises profit, other costs fixed",
    "Hiring that worker reduces profit",
    "The worker must be rejected because MRP is not exactly equal to wage",
    "The added revenue exceeds the added cost, so the worker adds profit. Exact equality is the smooth stopping condition, not a reason to reject every profitable discrete increment."
   ],
   [
    "An additional worker's MRP is below the unchanged competitive wage. What does hiring that worker do, other costs fixed?",
    "Reduces profit",
    "Raises profit",
    "Leaves profit unchanged by definition",
    "The added wage cost exceeds extra revenue, so profit falls. Profit would rise for MRP above wage and be unchanged at equality, neither of which is stated."
   ],
   [
    "A discrete worker's MRP exactly equals wage. What follows if other costs are unchanged?",
    "Adding that worker leaves profit unchanged",
    "Adding that worker strictly raises profit",
    "Adding that worker strictly lowers profit",
    "The added revenue and cost cancel. Adjacent employment levels can tie, so a unique answer needs a stated tie rule; neither strict increase nor strict decrease follows."
   ],
   [
    "A firm has product-market power but takes the labor-market wage as given. Which statement is correct?",
    "It can face horizontal labor supply while using MP times MR for labor demand",
    "Product-market monopoly necessarily makes it the sole employer",
    "It must use output price in place of MR even when those differ",
    "Market structure is specific to each market. Output market power does not force labor monopsony, and MRP must use marginal revenue rather than price when repricing matters."
   ],
   [
    "Why might the optimum in a discrete worker table occur without any worker having MRP exactly equal to wage?",
    "The best whole-number choice can lie between profitable and unprofitable increments",
    "Profit maximization is impossible with whole workers",
    "Equality must be manufactured by changing the stated wage",
    "Whole-number choices need comparison of actual profit changes. A crossing between workers is enough; neither impossibility nor altering the given wage is justified."
   ],
   [
    "With MRP fixed, the competitive wage rises. How does a firm with downward-sloping MRP adjust in the standard model?",
    "It hires less labor along the same MRP curve",
    "Its MRP curve necessarily shifts right",
    "It hires more labor because the added cost rose",
    "A higher horizontal MRC meets the unchanged descending MRP at less labor. The wage change does not itself change productivity or output MR, and higher hiring reverses the cost incentive."
   ],
   [
    "At a smooth interior cost-minimizing input mix with positive labor and capital, which equality is appropriate?",
    "MP of labor per wage dollar equals MP of capital per rental dollar",
    "Total products of labor and capital must be identical",
    "Labor and capital must have identical purchase prices",
    "Marginal output per dollar governs efficient substitution. Equal total products or equal input prices is neither the relevant margin nor a necessary condition."
   ],
   [
    "Labor currently provides more marginal output per dollar than capital, with small smooth substitutions feasible. Which local reallocation helps at unchanged cost?",
    "Shift some spending from capital toward labor",
    "Shift some spending from labor toward capital",
    "Increase both inputs without changing total spending or giving up anything",
    "A marginal dollar buys more added output through labor in this case. Moving toward the lower ratio wastes potential output, and increasing both purchased inputs at fixed cost is not the stated feasible reallocation."
   ],
   [
    "Both factors have equal MP per dollar. Does that alone prove the firm chose its profit-maximizing output?",
    "No, it addresses the input mix rather than the optimal output scale",
    "Yes, regardless of output marginal revenue",
    "Yes, even if every extra dollar of inputs adds no revenue",
    "Equal productivity per dollar can minimize the cost of a given output. Profit also compares revenue with cost, so output MR and feasible scale cannot be ignored."
   ],
   [
    "When can the usual interior equality of MP per input dollar fail to describe a cost-minimizing choice?",
    "At a corner, indivisible choice or fixed-proportion technology",
    "Only when arithmetic is performed correctly",
    "Never, because every production technology is smoothly substitutable",
    "Interior tangency requires feasible smooth substitution and positive inputs. Corners and fixed or indivisible combinations may need direct cost comparison, so equality is not universal."
   ],
   [
    "A table reports total revenue minus labor wages but omits fixed costs and equipment costs. What can that difference safely be called?",
    "Revenue remaining before those omitted costs",
    "Complete economic profit in every case",
    "Total output in physical units",
    "Subtracting only wages leaves other costs unpaid in the accounting. It cannot establish total economic profit, and a revenue-cost difference is money rather than physical output."
   ],
   [
    "An original firm can hire 0 through 5 workers. Successive workers add 84, 66, 48, 30, 12 dollars of revenue per hour. Each worker costs 40 dollars per hour; all other costs are fixed. How many workers uniquely maximize profit?",
    "3",
    "4",
    "2",
    "Comparing total revenue minus 40L across feasible employment levels gives the unique maximum at 3. The next worker adds less than the wage, while removing the last profitable worker gives up positive net revenue."
   ],
   [
    "An original firm can hire 0 through 5 workers. Successive workers add 84, 66, 48, 30, 12 dollars of revenue per hour. Each worker costs 40 dollars per hour; all other costs are fixed. At the optimal employment of 3, what is the hourly total wage bill?",
    "120",
    "160",
    "40",
    "The wage bill is 120; dividing by the 40-dollar wage recovers 3 workers. One extra worker is not employed, and a single wage is not the whole bill."
   ],
   [
    "An original firm can hire 0 through 5 workers. Successive workers add 100, 80, 60, 40, 20 dollars of revenue per hour. Each worker costs 50 dollars per hour; all other costs are fixed. How many workers uniquely maximize profit?",
    "3",
    "4",
    "2",
    "Comparing total revenue minus 50L across feasible employment levels gives the unique maximum at 3. The next worker adds less than the wage, while removing the last profitable worker gives up positive net revenue."
   ],
   [
    "An original firm can hire 0 through 5 workers. Successive workers add 100, 80, 60, 40, 20 dollars of revenue per hour. Each worker costs 50 dollars per hour; all other costs are fixed. At the optimal employment of 3, what is the hourly total wage bill?",
    "150",
    "200",
    "50",
    "The wage bill is 150; dividing by the 50-dollar wage recovers 3 workers. One extra worker is not employed, and a single wage is not the whole bill."
   ],
   [
    "An original firm can hire 0 through 5 workers. Successive workers add 75, 60, 45, 30, 15 dollars of revenue per hour. Each worker costs 35 dollars per hour; all other costs are fixed. How many workers uniquely maximize profit?",
    "3",
    "4",
    "2",
    "Comparing total revenue minus 35L across feasible employment levels gives the unique maximum at 3. The next worker adds less than the wage, while removing the last profitable worker gives up positive net revenue."
   ],
   [
    "An original firm can hire 0 through 5 workers. Successive workers add 75, 60, 45, 30, 15 dollars of revenue per hour. Each worker costs 35 dollars per hour; all other costs are fixed. At the optimal employment of 3, what is the hourly total wage bill?",
    "105",
    "140",
    "35",
    "The wage bill is 105; dividing by the 35-dollar wage recovers 3 workers. One extra worker is not employed, and a single wage is not the whole bill."
   ],
   [
    "An original firm can hire 0 through 5 workers. Successive workers add 96, 72, 48, 24, 8 dollars of revenue per hour. Each worker costs 60 dollars per hour; all other costs are fixed. How many workers uniquely maximize profit?",
    "2",
    "3",
    "1",
    "Comparing total revenue minus 60L across feasible employment levels gives the unique maximum at 2. The next worker adds less than the wage, while removing the last profitable worker gives up positive net revenue."
   ],
   [
    "An original firm can hire 0 through 5 workers. Successive workers add 96, 72, 48, 24, 8 dollars of revenue per hour. Each worker costs 60 dollars per hour; all other costs are fixed. At the optimal employment of 2, what is the hourly total wage bill?",
    "120",
    "180",
    "60",
    "The wage bill is 120; dividing by the 60-dollar wage recovers 2 workers. One extra worker is not employed, and a single wage is not the whole bill."
   ],
   [
    "In a smooth original hiring model, MRP=72-6L and the competitive wage is 24 dollars. What labor level is the interior profit maximum?",
    "8",
    "10",
    "6",
    "At L=8, marginal revenue product equals 24. Below that level MRP exceeds wage and above it MRP is lower, so the crossing is the interior maximum."
   ],
   [
    "In a smooth original hiring model, MRP=90-5L and the competitive wage is 30 dollars. What labor level is the interior profit maximum?",
    "12",
    "14",
    "10",
    "At L=12, marginal revenue product equals 30. Below that level MRP exceeds wage and above it MRP is lower, so the crossing is the interior maximum."
   ],
   [
    "For a small feasible input-spending reallocation, MP_L=12, wage=6, MP_K=9 and capital rental price=9. Which direction raises output at the same cost, or is neither favored when the ratios match?",
    "Toward labor",
    "Toward capital",
    "Neither from this marginal comparison",
    "Output per dollar is 2 for labor and 1 for capital. Shift toward the greater ratio; if they are equal, this marginal comparison favors neither direction. This is a local mix comparison, not the full profit-scale decision."
   ],
   [
    "For a small feasible input-spending reallocation, MP_L=18, wage=9, MP_K=12 and capital rental price=4. Which direction raises output at the same cost, or is neither favored when the ratios match?",
    "Toward capital",
    "Toward labor",
    "Neither from this marginal comparison",
    "Output per dollar is 2 for labor and 3 for capital. Shift toward the greater ratio; if they are equal, this marginal comparison favors neither direction. This is a local mix comparison, not the full profit-scale decision."
   ],
   [
    "For a small feasible input-spending reallocation, MP_L=15, wage=5, MP_K=12 and capital rental price=4. Which direction raises output at the same cost, or is neither favored when the ratios match?",
    "Neither from this marginal comparison",
    "Toward labor",
    "Toward capital",
    "Output per dollar is 3 for labor and 3 for capital. Shift toward the greater ratio; if they are equal, this marginal comparison favors neither direction. This is a local mix comparison, not the full profit-scale decision."
   ],
   [
    "For a small feasible input-spending reallocation, MP_L=16, wage=8, MP_K=15 and capital rental price=5. Which direction raises output at the same cost, or is neither favored when the ratios match?",
    "Toward capital",
    "Toward labor",
    "Neither from this marginal comparison",
    "Output per dollar is 2 for labor and 3 for capital. Shift toward the greater ratio; if they are equal, this marginal comparison favors neither direction. This is a local mix comparison, not the full profit-scale decision."
   ]
  ],
  "check": [
   "Successive workers add 90, 65, 45 and 20 dollars of hourly revenue. Each costs 40 dollars per hour, and other costs are fixed. How many workers uniquely maximize profit?",
   "3",
   "4",
   "2",
   "The first three workers add more than their wage; the fourth adds 20 but costs 40. Total revenue minus wages is highest with 3."
  ],
  "boardTitle": "Competitive factor choices",
  "pics": [
   {
    "t": "figure",
    "title": "5.3 · Wage-taking hiring decision",
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
      101.625
     ],
     "P15": [
      120,
      101.625
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
      182.875
     ],
     "P19": [
      510,
      61
     ],
     "P20": [
      120,
      101.625
     ],
     "P21": [
      510,
      101.625
     ],
     "P22": [
      380,
      101.625
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
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Labor hired by one firm",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Dollars per worker-hour",
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
      "text": "5",
      "col": 0
     },
     {
      "at": [
       380,
       41
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "15",
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
       96.625
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "64",
      "col": 0
     },
     {
      "at": [
       385,
       114.625
      ],
      "text": "Hire 10",
      "col": 2
     },
     {
      "at": [
       456,
       68.375
      ],
      "text": "MRP",
      "col": 0
     },
     {
      "at": [
       224,
       82.625
      ],
      "text": "Wage = MRC",
      "col": 1
     }
    ],
    "circles": [
     {
      "c": "P22",
      "r": 4,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "5.3 · Compare discrete revenue additions",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      119,
      177
     ],
     "P1": [
      158,
      177
     ],
     "P2": [
      158,
      58
     ],
     "P3": [
      119,
      58
     ],
     "P4": [
      204,
      151.5
     ],
     "P5": [
      243,
      151.5
     ],
     "P6": [
      243,
      58
     ],
     "P7": [
      204,
      58
     ],
     "P8": [
      289,
      126
     ],
     "P9": [
      328,
      126
     ],
     "P10": [
      328,
      58
     ],
     "P11": [
      289,
      58
     ],
     "P12": [
      374,
      100.5
     ],
     "P13": [
      413,
      100.5
     ],
     "P14": [
      413,
      58
     ],
     "P15": [
      374,
      58
     ],
     "P16": [
      459,
      75
     ],
     "P17": [
      498,
      75
     ],
     "P18": [
      498,
      58
     ],
     "P19": [
      459,
      58
     ],
     "P20": [
      93,
      58
     ],
     "P21": [
      535,
      58
     ],
     "P22": [
      93,
      109
     ],
     "P23": [
      535,
      109
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23",
    "dots": "",
    "segs": [
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
      "dash": true,
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
      "col": 0
     },
     {
      "v": "P8P9P10P11",
      "col": 0
     },
     {
      "v": "P12P13P14P15",
      "col": 3
     },
     {
      "v": "P16P17P18P19",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional hourly MRP; wage is $30 for each worker",
      "col": 0
     },
     {
      "at": [
       138.5,
       187
      ],
      "text": "70",
      "col": 0
     },
     {
      "at": [
       138.5,
       35
      ],
      "text": "1",
      "col": 0
     },
     {
      "at": [
       223.5,
       161.5
      ],
      "text": "55",
      "col": 0
     },
     {
      "at": [
       223.5,
       35
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       308.5,
       136
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       308.5,
       35
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       393.5,
       110.5
      ],
      "text": "25",
      "col": 0
     },
     {
      "at": [
       393.5,
       35
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       478.5,
       85
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       478.5,
       35
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       568,
       104
      ],
      "text": "$30",
      "col": 1
     },
     {
      "at": [
       320,
       193
      ],
      "text": "Three profitable additions; the fourth loses $5",
      "col": 0
     }
    ],
    "circles": []
   },
   null,
   {
    "t": "figure",
    "title": "5.3 · Compare marginal output per dollar",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      178,
      158
     ],
     "P1": [
      233,
      158
     ],
     "P2": [
      233,
      58
     ],
     "P3": [
      178,
      58
     ],
     "P4": [
      416,
      108
     ],
     "P5": [
      471,
      108
     ],
     "P6": [
      471,
      58
     ],
     "P7": [
      416,
      58
     ],
     "P8": [
      143,
      58
     ],
     "P9": [
      508,
      58
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
       320,
       214
      ],
      "text": "Fictional marginal output per input dollar",
      "col": 0
     },
     {
      "at": [
       205.5,
       169
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       205.5,
       33
      ],
      "text": "Labor: 12/6",
      "col": 0
     },
     {
      "at": [
       443.5,
       119
      ],
      "text": "1",
      "col": 1
     },
     {
      "at": [
       443.5,
       33
      ],
      "text": "Capital: 8/8",
      "col": 1
     },
     {
      "at": [
       320,
       192
      ],
      "text": "Local reallocation toward labor raises output",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "5.3 · Equal mix ratios need a scale decision",
    "head": "Input",
    "cols": [
     "MP",
     "Input price",
     "MP / price"
    ],
    "rows": [
     [
      "Labor",
      "12",
      "6",
      "2"
     ],
     [
      "Capital",
      "8",
      "4",
      "2"
     ]
    ]
   }
  ],
  "qpics": {
   "12": {
    "t": "setups",
    "title": "Original hiring; each worker costs $40/hour",
    "head": "Worker added",
    "cols": [
     "Extra revenue"
    ],
    "rows": [
     [
      "1",
      "$84"
     ],
     [
      "2",
      "$66"
     ],
     [
      "3",
      "$48"
     ],
     [
      "4",
      "$30"
     ],
     [
      "5",
      "$12"
     ]
    ]
   },
   "22": {
    "t": "setups",
    "title": "Original inputs; small substitutions feasible",
    "head": "Input",
    "cols": [
     "MP",
     "Price"
    ],
    "rows": [
     [
      "Labor",
      "12",
      "6"
     ],
     [
      "Capital",
      "9",
      "9"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Fictional hiring; wage $40 per worker/hour",
   "head": "Worker added",
   "cols": [
    "Extra revenue"
   ],
   "rows": [
    [
     "1",
     "$90"
    ],
    [
     "2",
     "$65"
    ],
    [
     "3",
     "$45"
    ],
    [
     "4",
     "$20"
    ]
   ]
  }
 },
 {
  "code": "5.4",
  "name": "Monopsonistic Markets",
  "skill": "s4",
  "teach": [
   "A monopsony is a market with a single buyer; monopsony power more broadly means a buyer can influence the price paid because its suppliers have limited alternatives. In labor markets, an employer may face upward-sloping labor supply because attracting more workers requires a higher wage. Product monopoly describes a seller, so it is a different concept. The textbook uniform-wage monopsony pays the same wage to all comparable workers. Search frictions or switching costs can give employers some wage-setting power even when there is more than one employer; one buyer is the simplified extreme case.",
   "Under uniform wages, hiring one more worker can raise the wage bill for existing workers too. In an original table, 2 workers require 12 dollars each and 3 require 14 dollars each. The wage bill rises from 24 to 42, so the third worker's MRC is 18: the 14 paid to the newcomer plus 2 extra for each of 2 existing workers. The wage is 14, not 18. For smooth inverse supply w=10+2L, total labor expenditure is 10L+2L² and MRC is 10+4L. This derivative is not the exact discrete one-worker increment of that quadratic; use total-bill differences for discrete questions.",
   "Choose labor where MRP intersects MRC in the smooth uniform-wage model, then read the wage from supply at that labor level. Let MRP=70−2L and wage supply w=10+2L. MRC=10+4L, so profit-maximizing labor is 10 and the wage is 30. MRP and MRC at that employment are 50. Paying 50 confuses the marginal cost of expanding the whole workforce with the wage paid per worker. A competitive benchmark using the same labor demand and supply instead has L=15 and wage 40.",
   "The simple monopsony therefore hires fewer workers and pays a lower wage than that competitive benchmark. With a competitive output market and no external effects, the omitted labor between 10 and 15 has marginal benefit above its opportunity cost. The lost surplus is a triangle: one half times 5 workers times 20 dollars, or 50 per period in this original continuous example. This loss is not the entire wage bill and is not the transfer of surplus caused solely by a different wage on workers still employed. The welfare conclusion depends on the model's benefit and cost assumptions.",
   "A suitably placed wage floor can increase both wage and employment in a uniform-wage monopsony, so a competitive-market prediction cannot be applied automatically. In the original smooth example, a wage floor of 40 makes 15 workers available at that wage; the employer wants 15 where MRP=40, recovering the competitive benchmark. Up to that availability limit, adding labor no longer requires raising every earlier worker's wage. A much higher floor can reduce employment: at 60, MRP equals the floor at 5 while more workers want jobs. This is a model result, not a claim about the effect of every actual minimum-wage change."
  ],
  "boards": [
   [
    "Monopoly: seller power; monopsony: buyer power",
    "Uniform-wage model: same wage for comparable labor",
    "Limited alternatives can create wage-setting power"
   ],
   [
    "2×12 = 24; 3×14 = 42; extra cost18",
    "New worker14 + raises to existing workers4",
    "Smooth w=10+2L ⇒ MRC=10+4L"
   ],
   [
    "MRP70−2L meets MRC10+4L at L10",
    "Read wage from supply: w30",
    "Competitive benchmark: L15, w40"
   ],
   [
    "Missing beneficial hires: L10 to L15",
    "Surplus gap at L10: 50 − 30 = 20",
    "Lost surplus = 1/2 × 5 × 20 = 50"
   ],
   [
    "Floor40: wage40 and employment15",
    "A high floor60: employment5",
    "These are conditional model comparisons"
   ]
  ],
  "eqs": [
   "Fictional: 2 hired at $12, 3 need $14: MRC = 42 − 24 = 18",
   "For w=10+2L: total expenditure 10L+2L²; MRC = 10+4L",
   "70 − 2(10) = 10 + 4(10) =50; wage =10+2(10)=30",
   "DWL = (15−10) × (50−30) / 2 =50",
   "At floor 40: MRP = 70−2(15) = 40; at floor 60: MRP = 70−2(5) = 60"
  ],
  "questions": [
   [
    "Which description defines a pure monopsony in a particular factor market?",
    "One buyer of the factor's services",
    "One seller of the final product regardless of hiring conditions",
    "Many price-taking buyers with no individual wage-setting power",
    "Monopsony refers to the buying side of the defined market. Monopoly refers to selling, while many wage-taking buyers describe the competitive benchmark rather than a single buyer."
   ],
   [
    "Why can MRC exceed wage in a uniform-wage monopsony?",
    "Hiring more requires a higher wage for existing workers as well as the newcomer",
    "The new worker is always paid MRC while all earlier workers work free",
    "Marginal revenue is always zero",
    "The added labor cost includes raises for existing workers plus the new worker's wage. Equal wages do not mean unpaid earlier workers, and revenue need not be zero."
   ],
   [
    "A smooth uniform-wage monopsonist finds labor where MRP equals MRC. Where is the wage actually read?",
    "On the labor-supply curve at that labor quantity",
    "On MRC at that quantity in every case",
    "At the vertical intercept of labor demand regardless of quantity",
    "Supply gives the wage needed to attract the chosen labor. MRC includes the wider wage-bill effect and generally exceeds wage, while a demand intercept ignores employment."
   ],
   [
    "Using the same upward labor supply and downward MRP, how does a uniform-wage monopsony compare with the competitive benchmark?",
    "Lower employment and a lower wage",
    "Higher employment and a higher wage",
    "The same employment because market structure never matters",
    "MRC lies above wage supply, so its intersection with MRP selects less labor; the supply wage at that quantity is lower. The other results ignore the wage-setting cost incentive."
   ],
   [
    "A product-market monopolist buys labor in a large competitive labor market. Is it necessarily a monopsonist too?",
    "No, selling power and buying power concern different markets",
    "Yes, one seller automatically means one employer",
    "Yes, because every firm can force any wage without losing workers",
    "Product-market power does not establish labor-market buying power. The employer can still take wages as given, so neither automatic monopsony nor unrestricted wage choice follows."
   ],
   [
    "Can employer wage-setting power exist when a labor market has more than one employer?",
    "Yes, limited mobility or search frictions can restrict workers' alternatives",
    "No, only a literal single buyer can ever have any buying power",
    "Yes, but only if every worker has infinitely many costless alternatives",
    "Pure monopsony is an extreme model; imperfect alternatives can create some power with several firms. Costless unlimited alternatives would weaken that mechanism rather than be required for it."
   ],
   [
    "For an upward-sloping smooth wage supply, what must be differentiated to obtain MRC?",
    "Total labor expenditure, wage times labor",
    "The wage alone, while ignoring the number of workers",
    "Total output price alone",
    "MRC is the derivative of the entire labor bill Lw(L). Differentiating only wage omits the cost of paying additional labor; output price is not labor expenditure."
   ],
   [
    "Does the smooth derivative of a quadratic labor bill equal every discrete one-worker bill difference?",
    "No, a finite increment also includes the curve's change across that interval",
    "Yes, at every arbitrary starting point without adjustment",
    "No, because discrete labor expenditure has no meaning",
    "A derivative is a local rate; a finite difference spans an interval on a curved cost function. The two require appropriate treatment, while actual discrete expenditure remains meaningful."
   ],
   [
    "In the standard competitive-output monopsony comparison, what identifies the lost surplus from too little labor?",
    "For omitted units, marginal revenue benefit exceeds labor's opportunity cost",
    "Every dollar of wages paid to employed workers is wasted",
    "The entire firm's revenue disappears",
    "The omitted mutually beneficial hires create lost surplus between marginal benefit and supply cost. Wages to employed labor and total revenue are not themselves the deadweight loss."
   ],
   [
    "Can a suitably set wage floor raise employment in the uniform-wage monopsony model?",
    "Yes, by changing the marginal cost of hiring additional labor over the relevant range",
    "No, every wage floor must lower employment in every market structure",
    "Yes, and every possible floor raises employment without limit",
    "A floor can remove the need to raise earlier wages for additional hires over a range. A high enough floor can still reduce hiring, so neither universal claim is warranted."
   ],
   [
    "Why can a very high wage floor reduce monopsony employment?",
    "It can exceed MRP for labor units that would otherwise be profitable",
    "It makes every possible worker's MRP rise automatically",
    "It guarantees that no workers want the higher wage",
    "An employer will not add units whose extra revenue is below the imposed marginal wage cost. The law does not automatically raise productivity, and more workers may wish to supply labor."
   ],
   [
    "What is needed before translating the textbook wage-floor result into a claim about an actual market?",
    "Evidence about market structure, the floor's level and other responses",
    "Only the word monopsony, with no data or context",
    "An assumption that all real firms match the one original graph",
    "Model results depend on assumptions and policy magnitude. A label or one illustrative graph does not establish all actual hiring conditions and responses."
   ],
   [
    "A uniform-wage employer can hire 3 workers at 14 dollars each, but 4 workers require 16 dollars each for everyone. What is the marginal total labor cost of hiring that extra worker?",
    "22",
    "16",
    "64",
    "The old bill is 42 and the new bill is 64, so the extra cost is 22. The new wage omits raises to earlier workers; the new total bill includes costs that were already paid."
   ],
   [
    "A uniform-wage employer can hire 4 workers at 18 dollars each, but 5 workers require 20 dollars each for everyone. What is the marginal total labor cost of hiring that extra worker?",
    "28",
    "20",
    "100",
    "The old bill is 72 and the new bill is 100, so the extra cost is 28. The new wage omits raises to earlier workers; the new total bill includes costs that were already paid."
   ],
   [
    "A uniform-wage employer can hire 5 workers at 20 dollars each, but 6 workers require 23 dollars each for everyone. What is the marginal total labor cost of hiring that extra worker?",
    "38",
    "23",
    "138",
    "The old bill is 100 and the new bill is 138, so the extra cost is 38. The new wage omits raises to earlier workers; the new total bill includes costs that were already paid."
   ],
   [
    "In a smooth uniform-wage monopsony, supply is w=6+2L, MRC=6+4L and MRP=54-2L. What labor level maximizes profit?",
    "8",
    "12",
    "10",
    "At L=8, MRP and MRC both equal 38; below it the net marginal gain is positive and above it negative. Equating supply wage directly to MRP instead gives the competitive benchmark."
   ],
   [
    "In a smooth uniform-wage monopsony, supply is w=6+2L, MRC=6+4L and MRP=54-2L. At optimal labor L=8, what wage is paid to each worker?",
    "22",
    "38",
    "54",
    "The supply schedule requires 22 dollars at L=8. The larger MRC of 38 includes the cost of raising prior wages; the MRP intercept is not the wage either."
   ],
   [
    "In a smooth uniform-wage monopsony, supply is w=10+1L, MRC=10+2L and MRP=58-2L. What labor level maximizes profit?",
    "12",
    "16",
    "14",
    "At L=12, MRP and MRC both equal 34; below it the net marginal gain is positive and above it negative. Equating supply wage directly to MRP instead gives the competitive benchmark."
   ],
   [
    "In a smooth uniform-wage monopsony, supply is w=10+1L, MRC=10+2L and MRP=58-2L. At optimal labor L=12, what wage is paid to each worker?",
    "22",
    "34",
    "58",
    "The supply schedule requires 22 dollars at L=12. The larger MRC of 34 includes the cost of raising prior wages; the MRP intercept is not the wage either."
   ],
   [
    "In a smooth uniform-wage monopsony, supply is w=8+2L, MRC=8+4L and MRP=68-2L. What labor level maximizes profit?",
    "10",
    "15",
    "12",
    "At L=10, MRP and MRC both equal 48; below it the net marginal gain is positive and above it negative. Equating supply wage directly to MRP instead gives the competitive benchmark."
   ],
   [
    "In a smooth uniform-wage monopsony, supply is w=8+2L, MRC=8+4L and MRP=68-2L. At optimal labor L=10, what wage is paid to each worker?",
    "28",
    "48",
    "68",
    "The supply schedule requires 28 dollars at L=10. The larger MRC of 48 includes the cost of raising prior wages; the MRP intercept is not the wage either."
   ],
   [
    "A smooth labor-supply schedule is w=4+2L. At L=6, what is total labor expenditure?",
    "96",
    "16",
    "28",
    "Each of the 6 labor units receives 16, so total expenditure is 96. Wage alone and marginal resource cost are different per-unit measures, not the total bill."
   ],
   [
    "A smooth labor-supply schedule is w=8+3L. At L=4, what is total labor expenditure?",
    "80",
    "20",
    "32",
    "Each of the 4 labor units receives 20, so total expenditure is 80. Wage alone and marginal resource cost are different per-unit measures, not the total bill."
   ],
   [
    "The competitive benchmark for a monopsony comparison uses supply w=6+2L and demand MRP=54-2L. What labor quantity equates wage and MRP?",
    "12",
    "8",
    "15",
    "At L=12, both supply wage and MRP equal 30. Using the monopsony MRC instead picks too little labor for this competitive benchmark; the other quantity does not clear it."
   ],
   [
    "The competitive benchmark for a monopsony comparison uses supply w=10+1L and demand MRP=58-2L. What labor quantity equates wage and MRP?",
    "16",
    "12",
    "19",
    "At L=16, both supply wage and MRP equal 26. Using the monopsony MRC instead picks too little labor for this competitive benchmark; the other quantity does not clear it."
   ],
   [
    "In the original smooth model w=10+2L and MRP=70-2L, a uniform wage floor of 40 dollars is imposed. What employment maximizes profit when the firm must pay at least the floor?",
    "15",
    "10",
    "5",
    "At wage40, supply makes15 units available and MRP is40 at15. Hiring less leaves positive marginal net revenue; beyond15 the rising supply wage applies to the whole workforce, making expansion unprofitable."
   ]
  ],
  "check": [
   "A smooth uniform-wage monopsony has wage supply w=8+L, MRC=8+2L and MRP=44−L. What labor and wage pair maximizes profit?",
   "L = 12 and wage 20",
   "L = 12 and wage 32",
   "L = 18 and wage 26",
   "At L = 12, MRP and MRC both equal 32; then supply gives wage 8 + 12 = 20. The wage is not the marginal resource cost."
  ],
  "boardTitle": "Monopsonistic markets",
  "pics": [
   null,
   {
    "t": "figure",
    "title": "5.4 · Include raises for existing workers",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      180,
      130
     ],
     "P1": [
      231,
      130
     ],
     "P2": [
      231,
      58
     ],
     "P3": [
      180,
      58
     ],
     "P4": [
      411,
      184
     ],
     "P5": [
      462,
      184
     ],
     "P6": [
      462,
      58
     ],
     "P7": [
      411,
      58
     ],
     "P8": [
      148,
      58
     ],
     "P9": [
      495,
      58
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
       213
      ],
      "text": "Fictional uniform-wage bill; common scale",
      "col": 0
     },
     {
      "at": [
       205.5,
       141
      ],
      "text": "$24",
      "col": 0
     },
     {
      "at": [
       205.5,
       35
      ],
      "text": "2 workers × $12",
      "col": 0
     },
     {
      "at": [
       436.5,
       195
      ],
      "text": "$42",
      "col": 2
     },
     {
      "at": [
       436.5,
       35
      ],
      "text": "3 workers × $14",
      "col": 2
     },
     {
      "at": [
       320,
       192
      ],
      "text": "Extra cost $18; new wage $14",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "5.4 · Choose labor, then find the wage",
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
      104.33333333333331
     ],
     "P17": [
      120,
      104.33333333333331
     ],
     "P18": [
      115,
      118.77777777777777
     ],
     "P19": [
      120,
      118.77777777777777
     ],
     "P20": [
      115,
      133.22222222222223
     ],
     "P21": [
      120,
      133.22222222222223
     ],
     "P22": [
      115,
      162.11111111111111
     ],
     "P23": [
      120,
      162.11111111111111
     ],
     "P24": [
      115,
      191
     ],
     "P25": [
      120,
      191
     ],
     "P26": [
      120,
      162.11111111111111
     ],
     "P27": [
      510,
      104.33333333333331
     ],
     "P28": [
      120,
      75.44444444444446
     ],
     "P29": [
      510,
      133.22222222222223
     ],
     "P30": [
      120,
      75.44444444444446
     ],
     "P31": [
      510,
      191
     ],
     "P32": [
      315,
      104.33333333333331
     ],
     "P33": [
      315,
      133.22222222222223
     ],
     "P34": [
      315,
      133.22222222222223
     ],
     "P35": [
      315,
      104.33333333333331
     ],
     "P36": [
      412.5,
      118.77777777777777
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36",
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
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P30P31",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P32P33",
      "col": 2,
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
      "text": "Labor per period",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Dollars per labor unit",
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
      "text": "5",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       412.5,
       41
      ],
      "text": "15",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "20",
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
      "text": "30",
      "col": 0
     },
     {
      "at": [
       97,
       113.77777777777777
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       97,
       128.22222222222223
      ],
      "text": "50",
      "col": 0
     },
     {
      "at": [
       97,
       157.11111111111111
      ],
      "text": "70",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "90",
      "col": 0
     },
     {
      "at": [
       287,
       145.22222222222223
      ],
      "text": "Choose L",
      "col": 3
     },
     {
      "at": [
       293,
       87.33333333333331
      ],
      "text": "Pay w",
      "col": 1
     },
     {
      "at": [
       432.5,
       133.77777777777777
      ],
      "text": "Competition",
      "col": 0
     },
     {
      "at": [
       509.5,
       89.22222222222223
      ],
      "text": "MRP",
      "col": 0
     },
     {
      "at": [
       506.5,
       139.33333333333331
      ],
      "text": "Supply",
      "col": 1
     },
     {
      "at": [
       510.5,
       194.22222222222223
      ],
      "text": "MRC",
      "col": 3
     }
    ],
    "circles": [
     {
      "c": "P34",
      "r": 4,
      "col": 3
     },
     {
      "c": "P35",
      "r": 4,
      "col": 1
     },
     {
      "c": "P36",
      "r": 4,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "5.4 · Surplus lost from omitted labor",
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
      104.33333333333331
     ],
     "P17": [
      120,
      104.33333333333331
     ],
     "P18": [
      115,
      118.77777777777777
     ],
     "P19": [
      120,
      118.77777777777777
     ],
     "P20": [
      115,
      133.22222222222223
     ],
     "P21": [
      120,
      133.22222222222223
     ],
     "P22": [
      115,
      162.11111111111111
     ],
     "P23": [
      120,
      162.11111111111111
     ],
     "P24": [
      115,
      191
     ],
     "P25": [
      120,
      191
     ],
     "P26": [
      315,
      104.3333333333
     ],
     "P27": [
      315,
      133.2222222222
     ],
     "P28": [
      412.5,
      118.7777777778
     ],
     "P29": [
      120,
      162.11111111111111
     ],
     "P30": [
      510,
      104.33333333333331
     ],
     "P31": [
      120,
      75.44444444444446
     ],
     "P32": [
      510,
      133.22222222222223
     ],
     "P33": [
      120,
      75.44444444444446
     ],
     "P34": [
      510,
      191
     ],
     "P35": [
      315,
      104.33333333333331
     ],
     "P36": [
      315,
      133.22222222222223
     ],
     "P37": [
      315,
      133.22222222222223
     ],
     "P38": [
      315,
      104.33333333333331
     ],
     "P39": [
      412.5,
      118.77777777777777
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39",
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
      "v": "P29P30",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P31P32",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P33P34",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P35P36",
      "col": 2,
      "arrows": 0,
      "dash": true,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P26P27P28",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Labor per period",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Dollars per labor unit",
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
      "text": "5",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       412.5,
       41
      ],
      "text": "15",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "20",
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
      "text": "30",
      "col": 0
     },
     {
      "at": [
       97,
       113.77777777777777
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       97,
       128.22222222222223
      ],
      "text": "50",
      "col": 0
     },
     {
      "at": [
       97,
       157.11111111111111
      ],
      "text": "70",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "90",
      "col": 0
     },
     {
      "at": [
       287,
       145.22222222222223
      ],
      "text": "Choose L",
      "col": 3
     },
     {
      "at": [
       293,
       87.33333333333331
      ],
      "text": "Pay w",
      "col": 1
     },
     {
      "at": [
       432.5,
       133.77777777777777
      ],
      "text": "Competition",
      "col": 0
     },
     {
      "at": [
       509.5,
       89.22222222222223
      ],
      "text": "MRP",
      "col": 0
     },
     {
      "at": [
       506.5,
       139.33333333333331
      ],
      "text": "Supply",
      "col": 1
     },
     {
      "at": [
       510.5,
       194.22222222222223
      ],
      "text": "MRC",
      "col": 3
     }
    ],
    "circles": [
     {
      "c": "P37",
      "r": 4,
      "col": 3
     },
     {
      "c": "P38",
      "r": 4,
      "col": 1
     },
     {
      "c": "P39",
      "r": 4,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "5.4 · A floor can change hiring costs",
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
      104.33333333333331
     ],
     "P17": [
      120,
      104.33333333333331
     ],
     "P18": [
      115,
      118.77777777777777
     ],
     "P19": [
      120,
      118.77777777777777
     ],
     "P20": [
      115,
      133.22222222222223
     ],
     "P21": [
      120,
      133.22222222222223
     ],
     "P22": [
      115,
      162.11111111111111
     ],
     "P23": [
      120,
      162.11111111111111
     ],
     "P24": [
      115,
      191
     ],
     "P25": [
      120,
      191
     ],
     "P26": [
      120,
      162.11111111111111
     ],
     "P27": [
      510,
      104.33333333333331
     ],
     "P28": [
      120,
      75.44444444444446
     ],
     "P29": [
      510,
      133.22222222222223
     ],
     "P30": [
      120,
      118.77777777777777
     ],
     "P31": [
      412.5,
      118.77777777777777
     ],
     "P32": [
      412.5,
      118.77777777777777
     ],
     "P33": [
      412.5,
      162.11111111111111
     ],
     "P34": [
      412.5,
      162.11111111111111
     ],
     "P35": [
      510,
      191
     ],
     "P36": [
      412.5,
      118.77777777777777
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36",
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
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P30P31",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P32P33",
      "col": 3,
      "arrows": 0,
      "dash": true,
      "w": 2
     },
     {
      "v": "P34P35",
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
       27
      ],
      "text": "Labor per period",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Dollars per labor unit",
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
      "text": "5",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       412.5,
       41
      ],
      "text": "15",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "20",
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
      "text": "30",
      "col": 0
     },
     {
      "at": [
       97,
       113.77777777777777
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       97,
       128.22222222222223
      ],
      "text": "50",
      "col": 0
     },
     {
      "at": [
       97,
       157.11111111111111
      ],
      "text": "70",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "90",
      "col": 0
     },
     {
      "at": [
       404.5,
       97.77777777777777
      ],
      "text": "Hire 15 at $40",
      "col": 2
     },
     {
      "at": [
       198,
       128.77777777777777
      ],
      "text": "Floor = MRC",
      "col": 3
     },
     {
      "at": [
       509.5,
       89.22222222222223
      ],
      "text": "MRP",
      "col": 0
     },
     {
      "at": [
       506.5,
       139.33333333333331
      ],
      "text": "Supply",
      "col": 1
     },
     {
      "at": [
       510.5,
       194.22222222222223
      ],
      "text": "MRC",
      "col": 3
     }
    ],
    "circles": [
     {
      "c": "P36",
      "r": 4,
      "col": 2
     }
    ]
   }
  ],
  "qpics": {
   "12": {
    "t": "setups",
    "title": "Original uniform-wage offers",
    "head": "Workers hired",
    "cols": [
     "Wage for each"
    ],
    "rows": [
     [
      "3",
      "$14"
     ],
     [
      "4",
      "$16"
     ]
    ]
   }
  },
  "checkPic": {
   "t": "setups",
   "title": "Fictional smooth monopsony",
   "head": "Schedule",
   "cols": [
    "Expression"
   ],
   "rows": [
    [
     "Wage supply",
     "8 + L"
    ],
    [
     "MRC",
     "8 + 2L"
    ],
    [
     "MRP",
     "44 − L"
    ]
   ]
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Identify the factor and the market before deciding who buys and who sells. Separate physical marginal product, marginal revenue product and marginal resource cost. A wage movement is not a curve shift, and output-market power does not by itself imply buying power in labor. Compare actual revenue and expenditure changes for discrete choices; use marginal equalities only when their smooth interior assumptions apply. Distinguish a cost-minimizing input mix from the profit-maximizing output scale. For uniform-wage monopsony choose labor using MRP and MRC, then read the wage from supply. Evaluate wage floors and welfare using the stated structure and evidence rather than a universal slogan.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"finance-h-ap-micro-factor-markets","subject":"finance","level":5,"grade":9,"standard":"AP Microeconomics Course and Exam Description, effective Fall 2026, Unit 5, topics 5.1–5.4","title":"Factor Markets","goal":"Analyze derived input demand, changing labor markets, competitive hiring and monopsony using revenue, cost, feasible input choices and explicit model assumptions.","points":20,"progression":{"requires":["finance-h-ap-micro-imperfect-competition"],"operations":3,"demand":"Reconstruct marginal and total accounts, analyze shifts, compare feasible hiring choices and distinguish competitive and monopsony outcomes."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
