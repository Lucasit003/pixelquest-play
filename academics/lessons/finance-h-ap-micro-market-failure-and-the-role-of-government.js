/* Original course unit. Review record: docs/review/lessons/high-completion/ap-micro-u6-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "6.1",
  "name": "Socially Efficient and Inefficient Market Outcomes",
  "skill": "s1",
  "teach": [
   "Social efficiency concerns the total gains from allocating scarce resources, including effects on third parties. Marginal social benefit, MSB, is the benefit of one more unit to everyone affected; marginal social cost, MSC, includes all opportunity costs of that unit. If MSB exceeds MSC, an additional unit adds surplus. If MSC exceeds MSB, it reduces surplus. In the usual smooth model with declining MSB and rising MSC, their intersection is the interior efficient quantity. Maximizing this surplus does not by itself decide whether its distribution is fair or whether everyone can afford the good.",
   "For discrete units, compare each additional benefit and cost and then the totals. In an original project, the first four units have social benefits 15, 11, 7 and 3 dollars and costs 4, 6, 8 and 10 dollars. The gains are 11, 5, -1 and -7, so two units maximize total net benefit at 16 dollars. A unit with exactly equal marginal benefit and cost would create a tie. In a separate continuous example, MSB=40-Q and MSC=8+Q meet at Q=16, with both equal to 24. Neither equality of total benefits and total costs nor the highest possible output is the efficiency rule.",
   "A competitive equilibrium is efficient in the standard model when private marginal benefits and costs capture all relevant social effects, information is adequate and market power is absent. These assumptions matter. A single-price monopolist chooses output where MR=MC under the usual interior conditions, then charges the demand price; its output can be below the social optimum. With P=60-Q and MC=12, MR=60-2Q gives Q=24 and price 36, while the no-externality efficient quantity is 48. Asymmetric information can also prevent beneficial trades: hidden product quality can create adverse selection, and unobserved behavior after a contract can create moral hazard. Neither problem requires people to be irrational.",
   "Deadweight loss measures the net social surplus forgone relative to an efficient feasible benchmark. For MSB=40-Q and MSC=8+Q, stopping at Q=10 loses a triangle between the curves from 10 to 16: width 6 and height 12, area 36 dollars. Producing 22 also loses 36 because the last six units cost more than they benefit society. A transfer from buyers to sellers or to government is not automatically a resource loss. Policy analysis compares additional social benefits with additional social costs, including administration and unintended effects; identifying a market failure alone does not establish that any intervention will improve it."
  ],
  "boards": [
   [
    "Count all relevant social benefits and costs",
    "MSB > MSC: one more unit adds surplus",
    "Efficiency does not settle fairness"
   ],
   [
    "Discrete gains: 11, 5, -1, -7",
    "Best quantity 2; total gain 16",
    "Smooth example: Q 16 and marginal value 24"
   ],
   [
    "Private incentives may omit social effects",
    "Monopoly: Q 24; efficient benchmark Q 48",
    "Information differences can prevent good trades"
   ],
   [
    "At Q 10: missing width 6, marginal gap 12",
    "DWL = half × 6 × 12 = 36",
    "Transfers and resource losses are different"
   ]
  ],
  "eqs": [
   "Net social gain of an extra unit = MSB − MSC",
   "Discrete net benefits: 11 + 5 = 16; smooth: 40−Q = 8+Q ⇒ Q=16",
   "Monopoly: 60−2Q=12 ⇒ Q=24; efficient: 60−Q=12 ⇒ Q=48",
   "DWL = lost net benefit; triangular example: 0.5 × 6 × 12 = 36"
  ],
  "questions": [
   [
    "What does marginal social cost include in an output decision?",
    "All relevant opportunity costs of one more unit, including external costs",
    "Only the seller's accounting payment",
    "The total benefit from all existing units",
    "The social measure includes costs borne outside the transaction. A private payment omits some effects, and total benefit is neither marginal nor a cost."
   ],
   [
    "In a smooth market model, MSB exceeds MSC at the current quantity. What would a small increase do?",
    "Increase net social surplus locally",
    "Necessarily reduce net social surplus locally",
    "Prove the existing distribution is fair",
    "The extra benefit exceeds the extra opportunity cost. This marginal comparison says nothing by itself about distributional fairness."
   ],
   [
    "MSB is below MSC for the next unit of an activity. What does that unit do to surplus?",
    "Reduce net social surplus",
    "Increase net social surplus",
    "Leave surplus unchanged merely because revenue rises",
    "The next unit costs society more than it benefits society. A rise in a producer's revenue does not reverse that social comparison."
   ],
   [
    "In the standard smooth model, what identifies an interior efficient quantity?",
    "MSB equals MSC with net gains positive before and negative after",
    "Total benefit equals total cost regardless of marginal values",
    "Output is as large as physically possible",
    "With the stated crossing, total net benefit reaches a maximum. Equality of totals and maximum physical output are different criteria."
   ],
   [
    "Why does an efficient allocation not by itself establish equity?",
    "It maximizes the specified total surplus without deciding a fair distribution",
    "It guarantees equal incomes for every household",
    "It guarantees that every person's essential needs are met",
    "Surplus efficiency and judgments about fairness address different questions. Ability to pay and the distribution of income may still differ at an efficient allocation."
   ],
   [
    "Which condition supports the standard competitive-efficiency result?",
    "All relevant social effects are internalized and other competitive assumptions hold",
    "Buyers and sellers ignore every third-party effect",
    "One firm restricts output using market power",
    "Private choices align with social marginal costs and benefits under the stated conditions. Omitted spillovers and market power undermine that result."
   ],
   [
    "In a single-price monopoly with no externalities, why can restricted output create deadweight loss?",
    "Some unproduced units would benefit consumers more than they cost to produce",
    "Every dollar of monopoly profit is destroyed",
    "Consumers' willingness to pay is always zero",
    "Lost mutually beneficial units cause the loss. Monopoly profit is a transfer or surplus component, not automatically destroyed resources."
   ],
   [
    "A seller knows an item's hidden defects better than potential buyers. What market issue is present?",
    "Asymmetric information about quality",
    "Perfect information on both sides",
    "A public good solely because the item can be sold",
    "One side has relevant information the other lacks. Saleability does not determine whether a good is public, and the information is explicitly unequal."
   ],
   [
    "Hidden high-risk types disproportionately seek an insurance contract. Which information problem is illustrated?",
    "Adverse selection",
    "Moral hazard caused only by actions after coverage begins",
    "An absence of private information",
    "Selection into a contract depends on hidden characteristics. Post-contract hidden actions are a distinct information problem."
   ],
   [
    "Coverage makes a person's costly care effort harder to observe and less privately rewarding. Which problem can arise?",
    "Moral hazard through changed behavior",
    "Adverse selection solely from fixed hidden types",
    "Proof that no contract can ever improve welfare",
    "This scenario concerns incentives for unobserved actions after coverage. It does not establish that all contracts are ineffective or describe only hidden types."
   ],
   [
    "What does deadweight loss measure relative to a stated efficient benchmark?",
    "Net social surplus forgone",
    "All payments made by buyers",
    "All tax revenue without considering who receives it",
    "Deadweight loss is the loss of gains after relevant costs and benefits are counted. Payments and tax revenue can be transfers rather than destroyed surplus."
   ],
   [
    "A proposed correction yields social benefits of 90 dollars and real implementation costs of 110 dollars. What follows for this comparison?",
    "Its net social benefit is negative",
    "It must improve welfare because a market failure exists",
    "Its net social benefit is positive 200 dollars",
    "The real costs exceed the benefits by 20. A diagnosed failure does not make every proposed remedy worthwhile, and adding costs to benefits is not net-benefit analysis."
   ],
   [
    "A discrete extra unit has social benefit exactly equal to social cost. What happens to total net benefit if it is added?",
    "It is unchanged by that unit",
    "It strictly rises by the whole benefit",
    "It strictly falls by the whole cost",
    "The incremental benefit and cost cancel. A zero marginal net gain can create a tie rather than a unique strict optimum."
   ],
   [
    "Why can a privately rational decision still be socially inefficient?",
    "The decision maker may ignore uncompensated effects on other people",
    "Rationality means knowing and valuing every social consequence",
    "Private profit must always equal social surplus",
    "Responding coherently to private incentives can omit external costs or benefits. Rationality alone does not align those incentives with the social objective."
   ],
   [
    "In an original smooth model, MSB=40-Q and MSC=8+Q. What quantity maximizes net social benefit?",
    "16",
    "20",
    "12",
    "The marginal gap is 32-2Q. It is positive below 16 and negative above 16, so the accumulated net benefit peaks at Q=16."
   ],
   [
    "In an original smooth model, MSB=50-Q and MSC=10+Q. What quantity maximizes net social benefit?",
    "20",
    "24",
    "16",
    "The marginal gap is 40-2Q. It is positive below 20 and negative above 20, so the accumulated net benefit peaks at Q=20."
   ],
   [
    "In an original smooth model, MSB=64-Q and MSC=16+Q. What quantity maximizes net social benefit?",
    "24",
    "28",
    "20",
    "The marginal gap is 48-2Q. It is positive below 24 and negative above 24, so the accumulated net benefit peaks at Q=24."
   ],
   [
    "With MSB=40-Q and MSC=8+Q, output is fixed at Q=10. What is the deadweight loss in dollars?",
    "36",
    "72",
    "6",
    "The efficient quantity is 16. Over the six missing or excess units, the absolute marginal gap runs from 0 to 12. The lost net benefit is the triangular area 36, not the rectangle 72 or the quantity gap 6."
   ],
   [
    "With MSB=40-Q and MSC=8+Q, output is fixed at Q=22. What is the deadweight loss in dollars?",
    "36",
    "72",
    "6",
    "The efficient quantity is 16. Over the six missing or excess units, the absolute marginal gap runs from 0 to 12. The lost net benefit is the triangular area 36, not the rectangle 72 or the quantity gap 6."
   ],
   [
    "Successive units have social benefits 18,13,8,3 and costs 5,7,9,11 dollars. How many units maximize net benefit?",
    "2",
    "3",
    "4",
    "The successive net gains are 13,6,-1,-8. Cumulative gains 0,13,19,18,10 peak uniquely at two units."
   ],
   [
    "An unregulated single-price monopolist faces P=72-Q and MC=12 with no externalities or fixed costs. What is its profit-maximizing quantity?",
    "30",
    "60",
    "42",
    "Total profit is(72-Q)Q-12Q=60Q-Q², peaking at 30. The efficient quantity 60 equates willingness to pay and marginal cost, a different target."
   ],
   [
    "For demand P=72-Q and constant MC=12, a single-price monopoly sells Q=30. What is deadweight loss relative to efficient production?",
    "450",
    "900",
    "30",
    "Efficient output is 60. The missing units span 30, with a marginal benefit-cost gap 30 at the monopoly quantity falling to 0. The triangle is 450 dollars; monopoly profit 900 is a different quantity."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Marginal benefits meet marginal costs",
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
      241.875,
      61
     ],
     "P7": [
      241.875,
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
      "text": "Quantity Q",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Marginal value (dollars)",
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
       241.875,
       41
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "16",
      "col": 0
     },
     {
      "at": [
       412.5,
       41
      ],
      "text": "24",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "32",
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
       357,
       141
      ],
      "text": "Q = 16, value 24",
      "col": 0
     },
     {
      "at": [
       507.625,
       81.08333333333334
      ],
      "text": "MSB",
      "col": 0
     },
     {
      "at": [
       507.625,
       170.91666666666666
      ],
      "text": "MSC",
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
    "title": "Monopoly and the efficient benchmark",
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
      432,
      61
     ],
     "P9": [
      432,
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
      84.63636363636363
     ],
     "P15": [
      120,
      84.63636363636363
     ],
     "P16": [
      115,
      131.9090909090909
     ],
     "P17": [
      120,
      131.9090909090909
     ],
     "P18": [
      115,
      179.1818181818182
     ],
     "P19": [
      120,
      179.1818181818182
     ],
     "P20": [
      120,
      179.1818181818182
     ],
     "P21": [
      510,
      61
     ],
     "P22": [
      120,
      179.1818181818182
     ],
     "P23": [
      315,
      61
     ],
     "P24": [
      120,
      84.63636363636363
     ],
     "P25": [
      510,
      84.63636363636363
     ],
     "P26": [
      276,
      131.9090909090909
     ],
     "P27": [
      276,
      84.63636363636363
     ],
     "P28": [
      276,
      131.9090909090909
     ],
     "P29": [
      432,
      84.63636363636363
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
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P22P23",
      "col": 3,
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
      "v": "P27P28",
      "col": 0,
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
      "text": "Quantity Q",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Price / cost (dollars)",
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
      "text": "24",
      "col": 0
     },
     {
      "at": [
       432,
       41
      ],
      "text": "48",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "60",
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
       79.63636363636363
      ],
      "text": "12",
      "col": 0
     },
     {
      "at": [
       97,
       126.9090909090909
      ],
      "text": "36",
      "col": 0
     },
     {
      "at": [
       97,
       174.1818181818182
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       491,
       76.78787878787878
      ],
      "text": "D",
      "col": 0
     },
     {
      "at": [
       312,
       66.87878787878788
      ],
      "text": "MR",
      "col": 3
     },
     {
      "at": [
       522,
       90.63636363636363
      ],
      "text": "MC",
      "col": 1
     },
     {
      "at": [
       318,
       140.9090909090909
      ],
      "text": "Monopoly",
      "col": 0
     },
     {
      "at": [
       424,
       60.636363636363626
      ],
      "text": "Efficient",
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
      "c": "P29",
      "r": 4,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "Forgone gains from stopping at Q = 10",
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
      241.875,
      61
     ],
     "P7": [
      241.875,
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
      241.875,
      142.25
     ],
     "P21": [
      241.875,
      109.75
     ],
     "P22": [
      315,
      126
     ],
     "P23": [
      120,
      169.33333333333334
     ],
     "P24": [
      510,
      82.66666666666666
     ],
     "P25": [
      120,
      82.66666666666666
     ],
     "P26": [
      510,
      169.33333333333334
     ],
     "P27": [
      315,
      126
     ],
     "P28": [
      241.875,
      61
     ],
     "P29": [
      241.875,
      142.25
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
      "v": "P23P24",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P25P26",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P28P29",
      "col": 2,
      "arrows": 0,
      "dash": true,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P20P21P22",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Quantity Q",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Marginal value (dollars)",
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
       241.875,
       41
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "16",
      "col": 0
     },
     {
      "at": [
       412.5,
       41
      ],
      "text": "24",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "32",
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
       357,
       141
      ],
      "text": "Q = 16, value 24",
      "col": 0
     },
     {
      "at": [
       507.625,
       81.08333333333334
      ],
      "text": "MSB",
      "col": 0
     },
     {
      "at": [
       507.625,
       170.91666666666666
      ],
      "text": "MSC",
      "col": 1
     },
     {
      "at": [
       217.5,
       166.625
      ],
      "text": "Lost gain 36",
      "col": 2
     }
    ],
    "circles": [
     {
      "c": "P27",
      "r": 4,
      "col": 0
     }
    ]
   }
  ],
  "qpics": {
   "19": {
    "t": "setups",
    "title": "Social value of successive units",
    "head": "Unit",
    "cols": [
     "Benefit",
     "Cost"
    ],
    "rows": [
     [
      "1",
      "18",
      "5"
     ],
     [
      "2",
      "13",
      "7"
     ],
     [
      "3",
      "8",
      "9"
     ],
     [
      "4",
      "3",
      "11"
     ]
    ]
   }
  },
  "boardTitle": "Social efficiency"
 },
 {
  "code": "6.2",
  "name": "Externalities",
  "skill": "s2",
  "teach": [
   "An externality is an uncompensated effect of an activity on people outside its market transaction. Suppose a fictional workshop's waste imposes measurable harm on nearby residents that neither the buyer nor seller pays for. With no other spillovers, MSC=MPC+MEC: marginal social cost equals marginal private cost plus marginal external cost. In a competitive market the private intersection can then produce too much output. A negative consumption spillover can instead be represented by MSB below MPB. The graph placement depends on whether the omitted effect is a cost or a benefit; do not move both curves for the same harm.",
   "In an original negative-production-externality model, demand MSB=MPB=80-Q, private supply MPC=20+Q and external harm MEC=12 per unit. The private market sells Q=30 at price 50. Social cost is 32+Q, so the efficient quantity is 24 with social marginal value 56. A corrective tax of 12 per unit makes private sellers face the missing marginal cost and implements that quantity in this competitive model. Buyers pay 56; sellers receive 44 after tax; tax revenue is 288. The unregulated deadweight loss is 36, while total external damage at Q 30 is 360. Total damage and avoidable net surplus loss are not the same area.",
   "Positive spillovers can create too little activity. Suppose learning sessions provide benefits to others that attendees do not count: MPB=60-Q, marginal external benefit 12, and MSC=MPC=12+Q. The private quantity is 24, while MSB=72-Q intersects MSC at 30. A subsidy of 12 per session can implement Q 30 under the stated competitive assumptions. Buyers pay 30 and sellers receive 42; government pays 360 overall. A subsidy is a fiscal transfer, while its financing and administration can carry additional real costs outside this simplified model. Positive production spillovers can equivalently be modeled with social cost below private cost when that convention fits the activity.",
   "Policies should target the actual missing incentive. An emissions charge prices each unit of pollution; a tradable permit program fixes a total permitted quantity and allows exchanges. Firms with low abatement costs then have an incentive to reduce more under competitive permit trading with effective monitoring. Technology mandates or emissions standards can also reduce harm, though equal requirements need not minimize cost when firms differ. In a separate abatement model, marginal abatement cost is 2a and marginal benefit is 24-a. The efficient reduction is a=8, not automatically elimination of all pollution. The correct policy rate depends on marginal harm at the efficient outcome, not total damage divided arbitrarily.",
   "Clear enforceable rights and low bargaining costs can let affected parties negotiate an efficient allocation in the standard bargaining model, with the initial rights affecting who pays whom. This is not a claim that any real dispute solves itself. Many affected people, incomplete information, strategic behavior, enforcement costs or unclear rights can obstruct agreement. Governments can clarify rights, arrange public provision, regulate, tax or subsidize, but each approach requires information and implementation. Compare the actual social benefits and costs; a poorly targeted policy can worsen an existing distortion."
  ],
  "boards": [
   [
    "Negative production effect: MSC = MPC + MEC",
    "Negative consumption effect: MSB below MPB",
    "Count the same spillover only once"
   ],
   [
    "Private Q 30; efficient Q 24",
    "Corrective unit tax 12: buyer 56, seller 44",
    "DWL 36 differs from total harm 360"
   ],
   [
    "Private Q 24; efficient Q 30",
    "External benefit 12 supports subsidy 12",
    "Buyer 30, seller 42; fiscal cost 360"
   ],
   [
    "Charge: a price per unit of emissions",
    "Permits: a cap with allowed trading",
    "Abatement example: 2a = 24-a ⇒ a 8"
   ],
   [
    "Rights and low transaction costs allow bargaining",
    "Initial rights affect distribution of payments",
    "Information, enforcement and costs still matter"
   ]
  ],
  "eqs": [
   "MSC = MPC + MEC; for a consumption harm, MSB = MPB − marginal external harm",
   "80−Q = 32+Q ⇒ Q 24; tax 12 × 24 = revenue 288",
   "72−Q = 12+Q ⇒ Q 30; subsidy 12 × 30 = cost 360",
   "Marginal abatement benefit = marginal abatement cost: 24−a = 2a ⇒ a=8",
   "A feasible bargain can capture a positive net gain; transaction costs can absorb it"
  ],
  "questions": [
   [
    "A factory harms nearby residents who receive no compensation and are outside the sale. What is the omitted effect?",
    "A negative production externality",
    "Only a private input cost already fully paid by the factory",
    "Proof that demand must slope upward",
    "The harm falls on third parties and is omitted from the transaction. That makes it an external production cost; it does not determine the slope of demand."
   ],
   [
    "With a positive marginal external production cost and no other spillovers, which relation holds?",
    "MSC is above MPC at the same quantity",
    "MSC equals MPC minus the external cost",
    "MPB must be above MSB by the same cost as well",
    "Social cost adds the omitted harm to private cost. Subtracting it reverses the sign, and shifting benefits too would double-count the same effect."
   ],
   [
    "A consumption activity creates an uncompensated nuisance for bystanders. Which benefit-curve representation fits?",
    "MSB below MPB by the marginal external harm",
    "MSB above MPB because every effect is a benefit",
    "MPC must be zero",
    "The decision maker's private benefit overstates the net social benefit when consumption harms others. Private production cost need not vanish."
   ],
   [
    "A study activity helps classmates beyond the benefit its participant receives. With no other spillovers, which relation fits?",
    "MSB exceeds MPB",
    "MSB must equal zero",
    "MSC must exceed MPC because the spillover is beneficial",
    "The additional benefit belongs in the social benefit measure. It does not imply a higher social cost or zero social benefit."
   ],
   [
    "In the standard competitive model with an unpriced negative production externality, how does private output compare with efficient output?",
    "Private output is too high",
    "Private output is necessarily too low",
    "The two are always equal because both involve supply and demand",
    "Ignoring external marginal cost makes some privately worthwhile units socially costly. Including the harm reduces the efficient output under the usual slopes."
   ],
   [
    "In the standard competitive model with an unpriced positive consumption spillover, what is the usual output problem?",
    "Too little activity relative to the social optimum",
    "Too much activity solely because the spillover is positive",
    "No difference between private and social incentives by definition",
    "Participants omit benefits received by others. With usual slopes this leaves socially beneficial additional units unproduced."
   ],
   [
    "What identifies the corrective per-unit tax in the simple competitive external-cost model?",
    "Marginal external cost at the efficient quantity",
    "Total external damage at the unregulated quantity",
    "All of the consumer's willingness to pay",
    "The tax aligns the private margin with the omitted social margin. Total harm is an accumulated amount, not the per-unit incentive needed at the optimum."
   ],
   [
    "How does a tradable emissions-permit system differ from an emissions charge in its direct control?",
    "The permit system sets an allowed total quantity; the charge sets a price per emitted unit",
    "Both necessarily force every firm to use identical equipment",
    "The charge sets the exact emissions quantity regardless of firms' responses",
    "An enforced cap directly limits authorized emissions, while a charge induces responses to a set price. Neither requires identical technology, and actual response to a price can vary."
   ],
   [
    "With effective competitive permit trading, which firms have an incentive to abate more at a given permit price?",
    "Firms whose marginal abatement cost is below the permit price",
    "Only firms with the highest marginal abatement cost",
    "No firms, since permits have no opportunity cost",
    "Avoiding an emission saves or frees a permit with market value. A reduction is attractive when its marginal cost is below that value."
   ],
   [
    "Why need a socially efficient pollution policy not eliminate every emission?",
    "The marginal cost of the last reduction may exceed its marginal benefit",
    "Every emission has exactly zero harm",
    "Efficiency requires maximum physical pollution",
    "Efficiency compares additional avoided harm with additional abatement cost. A nonzero optimum does not imply pollution is harmless."
   ],
   [
    "Which condition helps the standard private-bargaining solution to an externality?",
    "Enforceable rights and sufficiently low transaction costs",
    "An unlimited number of unidentifiable affected parties at no cost by assumption",
    "A guarantee that initial rights never affect payments",
    "Clear rights and feasible negotiation can capture gains. Many parties can make bargaining costly, and initial rights affect the distribution of payments even when efficiency is attained."
   ],
   [
    "Why can bargaining fail when pollution affects thousands of households?",
    "Coordination, information and enforcement can be costly",
    "External harms become private benefits merely because many people are affected",
    "No household can have any willingness to reduce the harm",
    "Numerous parties can face collective-action and transaction-cost obstacles. The number affected does not reverse the harm or eliminate their preferences."
   ],
   [
    "An original competitive market has MPB=MSB=80-Q, MPC=20+Q and MEC=12. With no corrective policy, what quantity trades?",
    "30",
    "24",
    "42",
    "Private parties equate their own benefit and cost, giving Q 30. Adding the external harm instead yields the lower efficient quantity 24."
   ],
   [
    "For MSB=80-Q, MPC=20+Q and MEC=12, what quantity is socially efficient?",
    "24",
    "30",
    "12",
    "Social cost is 32+Q. The net marginal gain is 48-2Q, changing sign at Q 24; private output 30 omits the external cost."
   ],
   [
    "For MSB=80-Q, MPC=20+Q and constant MEC=12, what per-unit tax implements the efficient quantity in the simple competitive model?",
    "12",
    "288",
    "0",
    "The missing marginal cost is 12 at every unit here, including the efficient output. Total revenue 288 is the tax times quantity, not the per-unit charge."
   ],
   [
    "For MSB=80-Q, MPC=20+Q and MEC=12, what is the unregulated deadweight loss in dollars?",
    "36",
    "360",
    "72",
    "The private output exceeds the social optimum by 6. Across that interval the marginal harm net of benefits rises from 0 to 12. The triangle is 36; total external harm 360 includes harm from efficient units too."
   ],
   [
    "An original competitive market has MPB=MSB=100-Q, MPC=20+Q and MEC=16. With no corrective policy, what quantity trades?",
    "40",
    "32",
    "56",
    "Private parties equate their own benefit and cost, giving Q 40. Adding the external harm instead yields the lower efficient quantity 32."
   ],
   [
    "For MSB=100-Q, MPC=20+Q and MEC=16, what quantity is socially efficient?",
    "32",
    "40",
    "16",
    "Social cost is 36+Q. The net marginal gain is 64-2Q, changing sign at Q 32; private output 40 omits the external cost."
   ],
   [
    "For MSB=100-Q, MPC=20+Q and constant MEC=16, what per-unit tax implements the efficient quantity in the simple competitive model?",
    "16",
    "512",
    "0",
    "The missing marginal cost is 16 at every unit here, including the efficient output. Total revenue 512 is the tax times quantity, not the per-unit charge."
   ],
   [
    "For MSB=100-Q, MPC=20+Q and MEC=16, what is the unregulated deadweight loss in dollars?",
    "64",
    "640",
    "128",
    "The private output exceeds the social optimum by 8. Across that interval the marginal harm net of benefits rises from 0 to 16. The triangle is 64; total external harm 640 includes harm from efficient units too."
   ],
   [
    "An original positive-spillover market has MPB=60-Q, MEB=12 and MSC=MPC=12+Q. What quantity trades without a subsidy?",
    "24",
    "30",
    "36",
    "The private market equates 60-Q and 12+Q at 24. Adding the external benefit gives a different social optimum 30."
   ],
   [
    "For MPB=60-Q, MEB=12 and MSC=MPC=12+Q, what quantity is socially efficient?",
    "30",
    "24",
    "36",
    "MSB is 72-Q. Its excess over social cost is 60-2Q, positive below 30 and negative above 30."
   ],
   [
    "A 12-dollar corrective subsidy supports 30 sessions in the stated positive-spillover model. What is the direct fiscal cost?",
    "360",
    "12",
    "30",
    "The government pays 12 for each of 30 sessions, so total outlay is 360 dollars. A per-unit amount and a quantity are not the total spending."
   ],
   [
    "In an original continuous abatement model, marginal benefit is 30-a and marginal cost is 2a. What abatement level maximizes net benefit?",
    "10",
    "15",
    "30",
    "Net benefit from another unit is 30-3a. Integrated net benefit rises up to 10 and falls after 10; setting benefit alone to zero would over-abate."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Unpriced production harm",
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
      307.2,
      61
     ],
     "P7": [
      307.2,
      56
     ],
     "P8": [
      354,
      61
     ],
     "P9": [
      354,
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
      133.22222222222223
     ],
     "P15": [
      120,
      133.22222222222223
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
      307.2,
      141.88888888888889
     ],
     "P19": [
      354,
      133.22222222222223
     ],
     "P20": [
      354,
      150.55555555555554
     ],
     "P21": [
      120,
      176.55555555555554
     ],
     "P22": [
      510,
      104.33333333333331
     ],
     "P23": [
      120,
      89.88888888888889
     ],
     "P24": [
      510,
      162.11111111111111
     ],
     "P25": [
      120,
      107.22222222222223
     ],
     "P26": [
      510,
      179.44444444444446
     ],
     "P27": [
      354,
      133.22222222222223
     ],
     "P28": [
      307.2,
      141.88888888888889
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28",
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
      "v": "P21P22",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P23P24",
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
    "polys": [
     {
      "v": "P18P19P20",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Quantity Q",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Marginal value (dollars)",
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
       307.2,
       41
      ],
      "text": "24",
      "col": 0
     },
     {
      "at": [
       354,
       41
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "50",
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
       128.22222222222223
      ],
      "text": "50",
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
       389,
       118.22222222222223
      ],
      "text": "Private",
      "col": 1
     },
     {
      "at": [
       283.2,
       159.88888888888889
      ],
      "text": "Social",
      "col": 2
     },
     {
      "at": [
       510.4,
       103.22222222222223
      ],
      "text": "MSB",
      "col": 0
     },
     {
      "at": [
       510.4,
       156.22222222222223
      ],
      "text": "MPC",
      "col": 1
     },
     {
      "at": [
       510.4,
       185.55555555555554
      ],
      "text": "MSC",
      "col": 2
     }
    ],
    "circles": [
     {
      "c": "P27",
      "r": 4,
      "col": 1
     },
     {
      "c": "P28",
      "r": 4,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "Unpriced consumption benefit",
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
      328,
      61
     ],
     "P7": [
      328,
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
      328,
      119.5
     ],
     "P19": [
      328,
      139
     ],
     "P20": [
      380,
      129.25
     ],
     "P21": [
      120,
      158.5
     ],
     "P22": [
      510,
      85.375
     ],
     "P23": [
      120,
      178
     ],
     "P24": [
      510,
      104.875
     ],
     "P25": [
      120,
      80.5
     ],
     "P26": [
      510,
      153.625
     ],
     "P27": [
      328,
      119.5
     ],
     "P28": [
      380,
      129.25
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28",
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
      "v": "P21P22",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P23P24",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P25P26",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P18P19P20",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Quantity Q",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Marginal value (dollars)",
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
       328,
       41
      ],
      "text": "24",
      "col": 0
     },
     {
      "at": [
       380,
       41
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "45",
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
      "text": "40",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "80",
      "col": 0
     },
     {
      "at": [
       298,
       102.5
      ],
      "text": "Private",
      "col": 0
     },
     {
      "at": [
       415,
       138.25
      ],
      "text": "Social",
      "col": 2
     },
     {
      "at": [
       509.6666666666667,
       79.625
      ],
      "text": "MPB",
      "col": 0
     },
     {
      "at": [
       509.6666666666667,
       113.125
      ],
      "text": "MSB",
      "col": 2
     },
     {
      "at": [
       509.6666666666667,
       155.375
      ],
      "text": "MSC",
      "col": 1
     }
    ],
    "circles": [
     {
      "c": "P27",
      "r": 4,
      "col": 0
     },
     {
      "c": "P28",
      "r": 4,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "An efficient abatement margin",
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
      432,
      61
     ],
     "P9": [
      432,
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
      113
     ],
     "P15": [
      120,
      113
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
      139
     ],
     "P19": [
      510,
      74
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
      276,
      113
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
      "text": "Units of pollution reduced",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Marginal value (dollars)",
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
      "text": "8",
      "col": 0
     },
     {
      "at": [
       432,
       41
      ],
      "text": "16",
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
       108
      ],
      "text": "16",
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
       276,
       129
      ],
      "text": "a = 8; value 16",
      "col": 0
     },
     {
      "at": [
       488,
       75.5
      ],
      "text": "MB",
      "col": 0
     },
     {
      "at": [
       488,
       187
      ],
      "text": "MC",
      "col": 1
     }
    ],
    "circles": [
     {
      "c": "P22",
      "r": 4,
      "col": 0
     }
    ]
   },
   null
  ],
  "qpics": {
   "12": {
    "t": "setups",
    "title": "Negative spillover: given schedules",
    "head": "Item",
    "cols": [
     "Schedule"
    ],
    "rows": [
     [
      "Private benefit",
      "80 - Q"
     ],
     [
      "Private cost",
      "20 + Q"
     ],
     [
      "External cost",
      "12 per unit"
     ]
    ]
   },
   "20": {
    "t": "setups",
    "title": "Positive spillover: given schedules",
    "head": "Item",
    "cols": [
     "Schedule"
    ],
    "rows": [
     [
      "Private benefit",
      "60 - Q"
     ],
     [
      "Private cost",
      "12 + Q"
     ],
     [
      "External benefit",
      "12 per unit"
     ]
    ]
   }
  },
  "boardTitle": "Externalities"
 },
 {
  "code": "6.3",
  "name": "Public and Private Goods",
  "skill": "s3",
  "teach": [
   "Classify a good by use and access, not by who pays for it. Rivalry means one person's use reduces what remains available to others. Excludability means access can feasibly be restricted to those allowed to use it. A sandwich is rival and excludable, a private good. A noncongested subscription stream can be excludable and nonrival over the stated capacity, a club good. Fish in an uncontrolled open-access pond are rival and difficult to exclude people from, a common resource. A noncongested warning broadcast freely receivable across a community can be nonrival and nonexcludable, a public good.",
   "Nonexcludability creates an incentive to free ride: a person may enjoy a shared benefit while hoping others pay. Voluntary provision can then fall short of the efficient amount. It does not follow that only government can ever produce a public good. Tax financing, charities, community cooperation or advertising may support provision. A government-provided service is not automatically a pure public good: a limited classroom seat is rival and access can be controlled even if tuition is zero. Conversely, a privately funded open warning signal can retain public-good characteristics. Congestion and access technology can change classification.",
   "All users can enjoy the same unit of a nonrival public good. To value an extra shared unit, add individuals' marginal willingness to pay for that same unit vertically. Suppose two residents value the first three units of a shared warning improvement at 12,8,4 and 9,6,3 dollars respectively. Social marginal benefits are 21,14,7. With marginal cost 12 per unit, the first two units add 9 and 2 of surplus while the third subtracts 5, so the efficient discrete quantity is 2 and total gain 11. Do not add different quantities horizontally as if each resident must receive a separate rival unit.",
   "Common resources have a different problem: consumption is rival, and an open-access user may ignore the reduced availability left to others. A catch that earns one fisher 8 dollars but causes an unpriced 10-dollar loss to others has negative net social value. Access rules, quotas, enforceable rights or community agreements may improve incentives when well designed. Overuse is a risk, not an unavoidable law about every shared resource. A managed commons with monitoring and agreed rules is different from uncontrolled open access. Compare the costs of management with the benefits of avoiding excessive use."
  ],
  "boards": [
   [
    "Private: rival and excludable",
    "Public: nonrival and nonexcludable",
    "Club and common resources have mixed traits"
   ],
   [
    "Free riding can reduce voluntary provision",
    "Ownership and free pricing do not define the type",
    "Congestion can change rivalry"
   ],
   [
    "Shared-unit benefits: 21, 14, 7",
    "Each unit costs 12; net gains 9, 2, -5",
    "Efficient amount 2; total net gain 11"
   ],
   [
    "Open-access use can impose costs on others",
    "A private gain 8 with external harm 10 loses 2",
    "Managed commons differ from uncontrolled access"
   ]
  ],
  "eqs": [
   "Private (rival, excludable); public (nonrival, nonexcludable)",
   "Nonexcludable access can separate receiving a benefit from paying for it",
   "Shared-unit MSB = sum of individual marginal benefits: 12+9=21",
   "Net social gain = private net gain − external harm = 8−10 = −2"
  ],
  "questions": [
   [
    "What does rivalry in consumption mean?",
    "One person's use reduces availability for others",
    "Only one government owns the item",
    "A seller can always collect payment",
    "Rivalry concerns how use affects others' available consumption. Ownership and the ability to exclude are separate characteristics."
   ],
   [
    "What does excludability describe?",
    "The feasibility of restricting access to users who are allowed to consume",
    "Whether one more user necessarily uses up the good",
    "Whether the good has no production cost",
    "Excludability is about access control, while rivalry concerns competing use. A nonrival good can still be costly to create."
   ],
   [
    "A sandwich can be withheld from nonbuyers and eaten only once. What type is it?",
    "A private good",
    "A pure public good",
    "A nonrival club good",
    "It is excludable and rival: the seller controls access and consumption uses it up. Both conditions define a private good here."
   ],
   [
    "An uncongested digital service requires a working subscriber login. What type best fits those conditions?",
    "A club good: excludable and nonrival within capacity",
    "A common resource: rival and nonexcludable",
    "A pure public good solely because it is digital",
    "The login permits exclusion while another viewer need not reduce others' service under the stated capacity. Digital delivery alone does not imply public access."
   ],
   [
    "Fish can be freely taken from an uncontrolled pond, and one catch leaves fewer fish for others. What type fits?",
    "A common resource",
    "A pure public good",
    "A nonrival club good",
    "The fish are rival and access is uncontrolled. Nonexcludability by itself does not make a rival resource a pure public good."
   ],
   [
    "A warning signal freely reaches all residents, and another listener does not diminish reception. What type fits?",
    "A public good under the stated conditions",
    "A private good because someone built the transmitter",
    "A common resource because listening consumes the signal",
    "It is nonexcludable and nonrival as specified. Private production does not change those consumption and access conditions."
   ],
   [
    "A household enjoys a community benefit but hopes neighbors will fund it. Which incentive is illustrated?",
    "Free riding",
    "Perfect price discrimination by the household",
    "A requirement that every shared good be rival",
    "The household can obtain a benefit without contributing. This describes a financing incentive, not a claim about monopoly pricing or necessary rivalry."
   ],
   [
    "Why can voluntary funding underprovide a public good?",
    "People may withhold payment while still expecting access to the benefit",
    "Nonrival goods always cost nothing to produce",
    "All individuals necessarily place zero value on the good",
    "Nonexcludability can weaken payment incentives even when people value the service and provision is costly."
   ],
   [
    "A publicly funded class has limited seats and controlled enrollment. Must it be a pure public good?",
    "No; funding does not remove rivalry or feasible exclusion",
    "Yes; government payment alone defines a public good",
    "Yes; zero tuition proves unlimited capacity",
    "A seat can be rival and access controlled despite public financing. Public provision and the economic public-good definition differ."
   ],
   [
    "Can a privately funded freely accessible broadcast have public-good characteristics?",
    "Yes, if reception is nonrival and nonexcludable as specified",
    "No, because only government may produce such goods",
    "No, because all broadcasts are necessarily rival",
    "Classification follows access and use. Private funding through donations or advertising can coexist with the specified public-good features."
   ],
   [
    "A previously uncongested shared road becomes crowded enough that another car delays others. What has changed?",
    "Use has become rival at that level of congestion",
    "Access automatically becomes excludable without any access rule",
    "The road necessarily stops costing anything",
    "Congestion means an additional user reduces service available to others. It does not itself install an exclusion mechanism or eliminate costs."
   ],
   [
    "How is willingness to pay aggregated for one additional shared nonrival unit?",
    "Add individuals' marginal values for the same unit",
    "Add separate private quantities at a given price instead",
    "Use only the largest value and discard every other benefit",
    "The same unit serves multiple users, so all of their marginal benefits count. Horizontal addition applies to quantities of separate rival units."
   ],
   [
    "Why can open-access harvesting exceed the socially efficient amount?",
    "Users may omit the depletion cost imposed on other users",
    "Each caught unit is automatically available again to everyone",
    "Rivalry guarantees that individual and social costs coincide",
    "An individual's private calculation may leave out reduced availability to others. Rivalry creates the depletion effect rather than eliminating it."
   ],
   [
    "Which statement about shared resources is most defensible?",
    "Agreed access rules and monitoring can sometimes control overuse",
    "Every commons inevitably collapses even with effective governance",
    "Only the word public determines whether scarcity exists",
    "Institutional arrangements can change incentives and outcomes. Open access and a managed commons are not the same, and scarcity depends on resources and demand."
   ],
   [
    "Does making access free prove a good is nonrival?",
    "No; zero price and rivalry measure different things",
    "Yes; a zero price creates unlimited units",
    "Yes; free access means production has zero opportunity cost",
    "A free meal still uses scarce food and a seat still occupies capacity. Price does not determine rivalry or opportunity cost."
   ],
   [
    "Why should a public-provision proposal include its real administrative costs?",
    "Those resources are part of the social opportunity cost",
    "All government spending is automatically deadweight loss",
    "Nonexcludability makes implementation resources unlimited",
    "Efficiency requires counting the relevant costs as well as benefits. A payment can be a transfer, but administration can consume real resources."
   ],
   [
    "Two users value the same additional public-good unit at 20 and 15 dollars. It costs 30 dollars. What is its net social benefit?",
    "5",
    "35",
    "-10",
    "The shared benefit is 35; after the real cost 30, the increment is 5. Ignoring the second user understates the benefit; omitting cost overstates the net gain."
   ],
   [
    "Two users value the same additional public-good unit at 18 and 14 dollars. It costs 25 dollars. What is its net social benefit?",
    "7",
    "32",
    "-7",
    "The shared benefit is 32; after the real cost 25, the increment is 7. Ignoring the second user understates the benefit; omitting cost overstates the net gain."
   ],
   [
    "Two users value shared units at 12,8,4 and 9,6,3 dollars. Every unit costs 12. What is the efficient discrete quantity?",
    "2",
    "1",
    "3",
    "Aggregate marginal benefits 21,14,7 exceed cost 12 for the first two units only. Cumulative net gains 0,9,11,6 peak at two."
   ],
   [
    "A harvester gains 15 dollars after all private costs, while imposing unpriced depletion harm of 21 dollars on others. What is the net social gain?",
    "-6",
    "15",
    "36",
    "Start with the private net gain 15 and include the omitted harm 21: the net social change is-6 dollars. Adding harm as a benefit gives the wrong sign."
   ]
  ],
  "check": [
   "Two users value three shared units at 14,9,4 and 10,7,4 dollars. Each unit costs 13. How many units maximize net social benefit?",
   "2",
   "1",
   "3",
   "The shared marginal benefits are 24,16,8. Subtracting 13 gives 11,3,-5; cumulative net benefit peaks at two units."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Use and access determine the category",
    "head": "Rival?",
    "cols": [
     "Excludable",
     "Nonexcludable"
    ],
    "rows": [
     [
      "Yes",
      "Private",
      "Common resource"
     ],
     [
      "No",
      "Club",
      "Public"
     ]
    ]
   },
   null,
   {
    "t": "figure",
    "title": "Value the same shared unit for both users",
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
      217.5,
      61
     ],
     "P5": [
      217.5,
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
      197.5,
      126
     ],
     "P17": [
      237.5,
      126
     ],
     "P18": [
      237.5,
      61
     ],
     "P19": [
      197.5,
      61
     ],
     "P20": [
      197.5,
      174.75
     ],
     "P21": [
      237.5,
      174.75
     ],
     "P22": [
      237.5,
      126
     ],
     "P23": [
      197.5,
      126
     ],
     "P24": [
      295,
      104.33333333333334
     ],
     "P25": [
      335,
      104.33333333333334
     ],
     "P26": [
      335,
      61
     ],
     "P27": [
      295,
      61
     ],
     "P28": [
      295,
      136.83333333333331
     ],
     "P29": [
      335,
      136.83333333333331
     ],
     "P30": [
      335,
      104.33333333333331
     ],
     "P31": [
      295,
      104.33333333333331
     ],
     "P32": [
      392.5,
      82.66666666666666
     ],
     "P33": [
      432.5,
      82.66666666666666
     ],
     "P34": [
      432.5,
      61
     ],
     "P35": [
      392.5,
      61
     ],
     "P36": [
      392.5,
      98.91666666666666
     ],
     "P37": [
      432.5,
      98.91666666666666
     ],
     "P38": [
      432.5,
      82.66666666666666
     ],
     "P39": [
      392.5,
      82.66666666666666
     ],
     "P40": [
      120,
      126
     ],
     "P41": [
      510,
      126
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41",
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
      "v": "P40P41",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P16P17P18P19",
      "col": 0
     },
     {
      "v": "P20P21P22P23",
      "col": 2
     },
     {
      "v": "P24P25P26P27",
      "col": 0
     },
     {
      "v": "P28P29P30P31",
      "col": 2
     },
     {
      "v": "P32P33P34P35",
      "col": 0
     },
     {
      "v": "P36P37P38P39",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Additional shared unit",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Marginal value (dollars)",
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
      "text": "12",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "24",
      "col": 0
     },
     {
      "at": [
       217.5,
       184.75
      ],
      "text": "21",
      "col": 0
     },
     {
      "at": [
       315,
       146.83333333333331
      ],
      "text": "14",
      "col": 0
     },
     {
      "at": [
       412.5,
       108.91666666666666
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       502.75,
       124
      ],
      "text": "MC = 12",
      "col": 1
     },
     {
      "at": [
       401,
       216
      ],
      "text": "Blue + green = shared benefit",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ],
  "qpics": {
   "18": {
    "t": "setups",
    "title": "Shared-unit benefits; cost 12 each",
    "head": "Unit",
    "cols": [
     "User 1",
     "User 2"
    ],
    "rows": [
     [
      "1",
      "12",
      "9"
     ],
     [
      "2",
      "8",
      "6"
     ],
     [
      "3",
      "4",
      "3"
     ]
    ]
   }
  },
  "boardTitle": "Public and private goods",
  "checkPic": {
   "t": "setups",
   "title": "Try: shared-unit benefits; cost 13 each",
   "head": "Unit",
   "cols": [
    "User 1",
    "User 2"
   ],
   "rows": [
    [
     "1",
     "14",
     "10"
    ],
    [
     "2",
     "9",
     "7"
    ],
    [
     "3",
     "4",
     "4"
    ]
   ]
  }
 },
 {
  "code": "6.4",
  "name": "The Effects of Government Intervention in Different Market Structures",
  "skill": "s4",
  "teach": [
   "A per-unit tax creates a wedge between what a buyer pays and what a seller keeps. In an original competitive market with demand P=60-Q and supply P=Q, the unregulated quantity and price are 30. A tax 12 gives buyer price 36, seller price 24 and quantity 24. Consumer and producer surplus each become 288, government revenue is 288, and total surplus falls from 900 to 864: deadweight loss 36. Count the tax revenue as a transfer in this no-externality model, while separately recognizing any omitted collection cost. Which side legally remits the tax does not alone determine who bears it; the less elastic side generally bears more of a small tax, other conditions fixed.",
   "A per-unit subsidy works in the other direction: the seller receives more than the buyer pays. With the same competitive curves and subsidy 12, quantity rises to 36, buyers pay 24 and sellers receive 36. Each private surplus is 648, but government spending is 432; net total surplus is 864, below the no-externality benchmark 900. The overproduction loss is 36. This does not contradict a corrective subsidy for an unpriced positive spillover: the social benchmark changes when external benefits exist. Always include government revenue or outlay and external effects in the welfare calculation.",
   "A fixed lump-sum payment changes total and average fixed costs but not marginal cost if it is independent of output. Conditional on continuing to operate, a firm facing an unchanged demand curve keeps its short-run optimal quantity after a genuinely fixed tax. A per-unit tax changes marginal cost and can change that quantity. For a single-price monopolist with P=60-Q and MC=12, a unit tax 12 moves the operating optimum from Q 24 to Q 18, with price 42. A fixed tax alone does not do that. Large fixed charges can affect entry or exit over time, so unchanged short-run output is not a claim about every long-run outcome.",
   "Price controls depend on market structure and enforcement. In the competitive example P=60-Q and supply P=Q, a ceiling 20 yields demand 40 but supply 20; with voluntary trade and no other supply, at most 20 units sell, leaving a shortage 20. A floor 40 gives supply 40 and demand 20; without government purchases or other outlets, at most 20 trade and excess supply is 20. Welfare also depends on who receives scarce units. In a monopoly, a carefully chosen cap can instead expand output; with P=60-Q, MC=12 and no fixed costs, a cap at 12 can support the efficient Q 48 if service is provided. A cap below operating cost can make provision unviable. In uniform-wage monopsony, an appropriate wage floor can increase employment; an excessively high floor can reduce it.",
   "A natural monopoly can supply relevant demand at lower total cost than competing smaller suppliers because of its cost structure. Consider P=60-Q and total cost 180+12Q for Q>0. Average total cost is 180/Q+12, which declines over this range; marginal cost is 12. Marginal-cost pricing at 12 serves Q = 48 and leaves a loss 180, because revenue 576 cannot cover cost 756. A lump-sum subsidy 180 can cover that loss without changing the marginal cost. Average-cost pricing covers economic costs, including normal return, but generally leaves output below the efficient level when price remains above marginal cost. Regulation must also consider cost information and incentives to economize.",
   "Antitrust policy aims to protect competition against anticompetitive practices and mergers; it is not a general rule that a large firm must be broken up. Natural-monopoly costs, innovation, entry and actual competitive effects matter. A monopolistically competitive firm also faces a downward-sloping demand curve, so the operating effect of a unit tax differs from a fixed charge; entry and exit can alter the longer-run outcome. Evaluate each policy with the relevant structure, external effects and feasible implementation. A tax on an already restricted monopoly can deepen underproduction, while a correctly targeted externality tax can improve efficiency; the label tax alone does not settle welfare."
  ],
  "boards": [
   [
    "Tax 12: buyer 36, seller 24, Q 24",
    "CS 288 + PS 288 + revenue 288 = 864",
    "No-externality benchmark 900; DWL 36"
   ],
   [
    "Subsidy 12: buyer 24, seller 36, Q 36",
    "CS 648 + PS 648 - outlay 432 = 864",
    "Corrective spillovers change the benchmark"
   ],
   [
    "Lump sum: fixed cost changes, not marginal cost",
    "Unit tax 12: monopoly Q 24 → Q 18",
    "Entry and exit may change longer-run outcomes"
   ],
   [
    "Competitive ceiling 20: shortage 20",
    "Competitive floor 40: excess supply 20",
    "Monopoly caps and monopsony floors differ"
   ],
   [
    "Natural monopoly: TC 180 + 12Q",
    "At P=MC=12: Q 48, revenue 576, cost 756",
    "Fixed subsidy 180 covers the operating loss"
   ],
   [
    "Antitrust aims to protect competition",
    "Compare structures, incentives and real costs",
    "Policy effects depend on the stated setting"
   ]
  ],
  "eqs": [
   "Tax wedge: (60−Q)−Q=12 ⇒ Q 24; revenue 12×24=288",
   "Subsidy wedge: Q−(60−Q)=12 ⇒ Q 36; outlay 12×36=432",
   "Monopoly unit tax: 60−2Q=12+12 ⇒ Q 18, P 42",
   "At ceiling 20: Qd 40−Qs 20=shortage 20; at floor 40: Qs 40−Qd 20=surplus 20",
   "At Q 48: TC=180+12×48=756; TR=12×48=576; gap 180",
   "A unit tax changes a marginal incentive; a fixed payment alone does not"
  ],
  "questions": [
   [
    "For a per-unit sales tax in a competitive market, which wedge applies?",
    "Buyer price minus seller net price equals the tax",
    "Seller net price exceeds buyer price by the tax",
    "The tax must equal all consumer surplus",
    "The same transaction has a gross buyer payment and a net seller receipt separated by the unit tax. This accounting does not equate the tax to total surplus."
   ],
   [
    "Which factor generally bears more of a small tax burden in a standard competitive market?",
    "The less price-elastic side of the market",
    "Always the party legally required to remit the tax",
    "Always buyers regardless of elasticities",
    "The side less able to change quantity in response to price bears more of the incidence. Legal collection rules alone do not determine the economic burden."
   ],
   [
    "In a no-externality tax welfare calculation, why include government revenue?",
    "It is a received transfer, not automatically vanished surplus",
    "It proves the tax has zero deadweight loss",
    "It belongs in consumer surplus as well, so count it twice",
    "Revenue belongs in total surplus once. Distortion can still remove beneficial trades, but the transferred revenue is not itself destroyed resources."
   ],
   [
    "For a per-unit subsidy in a competitive market, which wedge applies?",
    "Seller receipts minus buyer payment equal the subsidy",
    "Buyer payment exceeds seller receipts by the subsidy",
    "The subsidy must leave quantity unchanged",
    "Government supplements the buyer's payment to the seller. The wedge can change incentives and quantity; its direction is opposite a tax wedge."
   ],
   [
    "Why can a subsidy improve efficiency with a positive externality but reduce it without one?",
    "The relevant social marginal benefit differs between the two cases",
    "Government spending is never a cost to taxpayers",
    "All subsidies mechanically create identical welfare gains",
    "Unpriced external benefits can justify additional activity. Without that missing benefit, extra output can cost more than it is worth socially."
   ],
   [
    "A genuinely output-independent fixed tax is added while a firm continues operating with unchanged demand. Which cost changes directly?",
    "Fixed cost and average total cost, but not marginal cost",
    "Marginal cost by the full tax on every extra unit",
    "Neither total cost nor profit",
    "The fixed payment changes the level of cost, not the cost of an additional unit. Profit falls at the same output, conditional on continued operation."
   ],
   [
    "Why must an unchanged-output claim after a lump-sum tax specify continued operation and a time horizon?",
    "A sufficiently burdensome fixed charge can affect entry or exit",
    "Every fixed tax automatically raises marginal cost",
    "Fixed costs are identical to unit costs by definition",
    "The short-run marginal choice can remain unchanged while participation incentives change. A true fixed charge is not incurred again for each unit."
   ],
   [
    "A monopolistically competitive firm continues operating after a fixed charge, with demand and marginal cost unchanged. What happens to its short-run operating optimum?",
    "Its profit-maximizing quantity is unchanged under these conditions",
    "Its marginal cost rises by the charge on each unit",
    "Its demand curve automatically becomes horizontal",
    "The charge subtracts the same amount from profit at every operating output. Entry or exit and demand changes are excluded from this short-run comparison."
   ],
   [
    "A competitive price ceiling is below equilibrium and voluntary supply limits sales. What can result?",
    "A shortage and quantity traded limited by the short side",
    "A guarantee that every buyer gets all units demanded",
    "An increase in supply caused solely by the lower price along an upward supply curve",
    "At a binding ceiling quantity demanded exceeds quantity supplied. The lower price alone reduces supply along the stated curve; rationing affects allocation."
   ],
   [
    "A competitive price floor is above equilibrium, with no government purchases or other outlets. What can result?",
    "Excess supply and sales limited by demand",
    "Every offered unit necessarily sells at the floor",
    "A shortage because quantity demanded always rises with price",
    "A binding floor raises supply and lowers demand in the standard model. Unsold excess is not automatically purchased when the prompt excludes such purchases."
   ],
   [
    "Why is a price ceiling's effect in a monopoly not identical to its effect in perfect competition?",
    "A suitable monopoly cap can reduce a markup and expand output",
    "Every ceiling must reduce output in every market",
    "A monopoly never faces any production cost",
    "An unregulated monopoly can restrict output below the efficient amount. A suitable cap can alter that incentive, though an excessive cap reduction can jeopardize supply."
   ],
   [
    "In a uniform-wage monopsony model, what can an appropriately placed wage floor do?",
    "Raise both the wage and employment relative to the unregulated outcome",
    "Always eliminate every distortion at every floor level",
    "Necessarily lower employment for every possible floor",
    "An appropriate floor can flatten marginal hiring cost and expand employment. A very high floor can reduce employment, so the result depends on its level and structure."
   ],
   [
    "A natural monopoly has declining average cost at efficient output. What difficulty can marginal-cost pricing create?",
    "Revenue may fail to cover total economic cost",
    "Marginal cost must exceed average cost in that range",
    "Consumers must pay the unregulated monopoly price",
    "When average cost exceeds marginal cost, charging marginal cost leaves a revenue gap. A subsidy or different pricing arrangement may be needed for viability."
   ],
   [
    "What does average-cost pricing aim to cover for a regulated firm?",
    "Total economic cost including a normal return",
    "Only variable cost while guaranteeing an economic loss",
    "Any monopoly profit the firm chooses to demand",
    "Price equal to average total economic cost produces zero economic profit at the specified quantity. Normal return is already included in economic cost."
   ],
   [
    "What is the general purpose of antitrust policy?",
    "Protect competition against anticompetitive conduct and mergers",
    "Guarantee that every large firm is broken up regardless of evidence",
    "Guarantee every competitor an identical market share",
    "Competition policy focuses on competitive effects, not equal outcomes for firms or automatic breakup based solely on size."
   ],
   [
    "Why must policy analysis identify existing distortions before predicting welfare effects?",
    "The same instrument can offset one distortion or intensify another",
    "The name of an instrument determines its welfare effect in all markets",
    "An existing market failure makes implementation costs irrelevant",
    "A corrective externality tax can align incentives, while taxing a restricted monopoly without a matching spillover can worsen underproduction. Real costs still matter."
   ],
   [
    "In a competitive market with demand P=60-Q, supply P=Q and tax 12 per unit, what is the quantity traded?",
    "24",
    "30",
    "36",
    "The buyer-seller wedge is 60-2Q=12, so Q=24. The listed alternatives confuse the pre-policy outcome, the other side of the wedge or a total with a unit value."
   ],
   [
    "In a competitive market with demand P=60-Q, supply P=Q and tax 12 per unit, what is the price paid by buyers?",
    "36",
    "24",
    "30",
    "Demand values quantity 24 at 36; sellers keep 24 after the tax. The listed alternatives confuse the pre-policy outcome, the other side of the wedge or a total with a unit value."
   ],
   [
    "In a competitive market with demand P=60-Q, supply P=Q and tax 12 per unit, what is the net price received by sellers?",
    "24",
    "36",
    "30",
    "Supply requires 24 at quantity 24; the remainder of the buyer payment is the tax. The listed alternatives confuse the pre-policy outcome, the other side of the wedge or a total with a unit value."
   ],
   [
    "In a competitive market with demand P=60-Q, supply P=Q and tax 12 per unit, what is the government tax revenue?",
    "288",
    "12",
    "900",
    "24 units each pay 12, producing revenue 288. The listed alternatives confuse the pre-policy outcome, the other side of the wedge or a total with a unit value."
   ],
   [
    "In a competitive market with demand P=60-Q, supply P=Q and tax 20 per unit, what is the quantity traded?",
    "20",
    "30",
    "40",
    "The buyer-seller wedge is 60-2Q=20, so Q=20. The listed alternatives confuse the pre-policy outcome, the other side of the wedge or a total with a unit value."
   ],
   [
    "In a competitive market with demand P=60-Q, supply P=Q and tax 20 per unit, what is the price paid by buyers?",
    "40",
    "20",
    "30",
    "Demand values quantity 20 at 40; sellers keep 20 after the tax. The listed alternatives confuse the pre-policy outcome, the other side of the wedge or a total with a unit value."
   ],
   [
    "In a competitive market with demand P=60-Q, supply P=Q and tax 20 per unit, what is the net price received by sellers?",
    "20",
    "40",
    "30",
    "Supply requires 20 at quantity 20; the remainder of the buyer payment is the tax. The listed alternatives confuse the pre-policy outcome, the other side of the wedge or a total with a unit value."
   ],
   [
    "In a competitive market with demand P=60-Q, supply P=Q and tax 20 per unit, what is the government tax revenue?",
    "400",
    "20",
    "900",
    "20 units each pay 20, producing revenue 400. The listed alternatives confuse the pre-policy outcome, the other side of the wedge or a total with a unit value."
   ],
   [
    "For competitive demand P=60-Q and supply P=Q, a 12-dollar subsidy per unit raises quantity to 36. What is total surplus after subtracting government outlay, with no externalities?",
    "864",
    "1296",
    "432",
    "Consumer and producer surplus are 648 each; subtract subsidy outlay 12×36=432. Net surplus 864 is below the efficient benchmark 900 by 36."
   ],
   [
    "A continuing single-price monopoly has demand P=60-Q, MC=12 and an added unit tax 12. What is its profit-maximizing quantity?",
    "18",
    "24",
    "36",
    "Total operating profit is(60-Q)Q-(12+12)Q=36Q-Q², maximized at 18. The pre-tax quantity 24 no longer maximizes that objective."
   ],
   [
    "Competitive demand is Qd=60-P and supply is Qs=P. An enforced ceiling 20 applies, with voluntary sales. What is the shortage?",
    "20",
    "40",
    "0",
    "At price 20 buyers want 40 and sellers offer 20. Excess demand is 20; quantity demanded 40 is not the shortage itself."
   ],
   [
    "Competitive demand is Qd=60-P and supply is Qs=P. A floor 40 applies with no government purchases. What is the excess supply?",
    "20",
    "40",
    "60",
    "At price 40 sellers offer 40 and buyers want 20. The difference is 20; the offered amount is not all purchased."
   ],
   [
    "A regulated natural monopoly has total cost TC=180+12Q and demand P=60-Q. At P=MC=12 and Q=48, what fixed subsidy covers its economic loss?",
    "180",
    "576",
    "756",
    "Revenue is 12×48=576 and cost is 180+576=756. The shortfall is 180; revenue and total cost are not themselves the required transfer."
   ],
   [
    "A firm sells 40 units at a regulated price 15 while average total economic cost is 18. What fixed subsidy closes the total-cost gap?",
    "120",
    "3",
    "720",
    "The per-unit gap is 3 across 40 units, so the needed fixed payment is 120. A three-dollar unit gap and total cost 720 are different amounts."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Competitive tax wedge",
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
      104.33333333333331
     ],
     "P13": [
      120,
      104.33333333333331
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
      169.33333333333334
     ],
     "P17": [
      120,
      169.33333333333334
     ],
     "P18": [
      120,
      169.33333333333334
     ],
     "P19": [
      510,
      61
     ],
     "P20": [
      120,
      61
     ],
     "P21": [
      510,
      169.33333333333334
     ],
     "P22": [
      120,
      82.66666666666666
     ],
     "P23": [
      510,
      191
     ],
     "P24": [
      276,
      126
     ],
     "P25": [
      276,
      104.33333333333334
     ],
     "P26": [
      315,
      115.16666666666666
     ],
     "P27": [
      276,
      126
     ],
     "P28": [
      276,
      104.33333333333331
     ],
     "P29": [
      276,
      126
     ],
     "P30": [
      276,
      104.33333333333331
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30",
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P29P30",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P24P25P26",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Quantity Q",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Price (dollars)",
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
      "text": "24",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "60",
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
      "text": "24",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "36",
      "col": 0
     },
     {
      "at": [
       97,
       164.33333333333334
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       464.5,
       183.36111111111111
      ],
      "text": "S + tax",
      "col": 2
     },
     {
      "at": [
       212,
       134
      ],
      "text": "Buyer 36",
      "col": 0
     },
     {
      "at": [
       212,
       92.33333333333331
      ],
      "text": "Seller 24",
      "col": 1
     },
     {
      "at": [
       495.5,
       67.02777777777777
      ],
      "text": "D",
      "col": 0
     },
     {
      "at": [
       499,
       170.11111111111111
      ],
      "text": "S",
      "col": 1
     },
     {
      "at": [
       355,
       216
      ],
      "text": "Unit tax = 12",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P27",
      "r": 4,
      "col": 0
     },
     {
      "c": "P28",
      "r": 4,
      "col": 1
     }
    ]
   },
   {
    "t": "figure",
    "title": "Competitive subsidy wedge",
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
      354,
      61
     ],
     "P7": [
      354,
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
      126
     ],
     "P15": [
      120,
      126
     ],
     "P16": [
      115,
      169.33333333333334
     ],
     "P17": [
      120,
      169.33333333333334
     ],
     "P18": [
      120,
      169.33333333333334
     ],
     "P19": [
      510,
      61
     ],
     "P20": [
      120,
      61
     ],
     "P21": [
      510,
      169.33333333333334
     ],
     "P22": [
      198,
      61
     ],
     "P23": [
      510,
      147.66666666666666
     ],
     "P24": [
      354,
      104.33333333333334
     ],
     "P25": [
      354,
      126
     ],
     "P26": [
      315,
      115.16666666666666
     ],
     "P27": [
      354,
      104.33333333333331
     ],
     "P28": [
      354,
      126
     ],
     "P29": [
      354,
      104.33333333333331
     ],
     "P30": [
      354,
      126
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30",
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P29P30",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P24P25P26",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Quantity Q",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Price (dollars)",
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
       354,
       41
      ],
      "text": "36",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "60",
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
      "text": "24",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "36",
      "col": 0
     },
     {
      "at": [
       97,
       164.33333333333334
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       484,
       133.44444444444446
      ],
      "text": "S - subsidy",
      "col": 2
     },
     {
      "at": [
       290,
       86.33333333333331
      ],
      "text": "Buyer 24",
      "col": 0
     },
     {
      "at": [
       290,
       138
      ],
      "text": "Seller 36",
      "col": 1
     },
     {
      "at": [
       495.5,
       67.02777777777777
      ],
      "text": "D",
      "col": 0
     },
     {
      "at": [
       499,
       170.11111111111111
      ],
      "text": "S",
      "col": 1
     },
     {
      "at": [
       355,
       216
      ],
      "text": "Unit subsidy = 12",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P27",
      "r": 4,
      "col": 0
     },
     {
      "c": "P28",
      "r": 4,
      "col": 1
     }
    ]
   },
   null,
   [
    {
     "t": "figure",
     "title": "Competitive ceiling at 20",
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
       191
      ],
      "P21": [
       510,
       61
      ],
      "P22": [
       120,
       61
      ],
      "P23": [
       510,
       191
      ],
      "P24": [
       120,
       104.33333333333331
      ],
      "P25": [
       510,
       104.33333333333331
      ],
      "P26": [
       250,
       104.33333333333331
      ],
      "P27": [
       380,
       104.33333333333331
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
       "text": "Quantity Q",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "Price (dollars)",
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
       "text": "20",
       "col": 0
      },
      {
       "at": [
        380,
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
       "text": "60",
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
       "text": "20",
       "col": 0
      },
      {
       "at": [
        97,
        142.66666666666666
       ],
       "text": "40",
       "col": 0
      },
      {
       "at": [
        97,
        186
       ],
       "text": "60",
       "col": 0
      },
      {
       "at": [
        315,
        119.33333333333331
       ],
       "text": "Shortage 20",
       "col": 2
      },
      {
       "at": [
        479.5,
        78.33333333333334
       ],
       "text": "D",
       "col": 0
      },
      {
       "at": [
        479.5,
        183.83333333333331
       ],
       "text": "S",
       "col": 1
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
       "col": 1
      }
     ]
    },
    {
     "t": "figure",
     "title": "Competitive floor at 40",
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
       191
      ],
      "P21": [
       510,
       61
      ],
      "P22": [
       120,
       61
      ],
      "P23": [
       510,
       191
      ],
      "P24": [
       120,
       147.66666666666666
      ],
      "P25": [
       510,
       147.66666666666666
      ],
      "P26": [
       250,
       147.66666666666666
      ],
      "P27": [
       380,
       147.66666666666666
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
       "text": "Quantity Q",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "Price (dollars)",
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
       "text": "20",
       "col": 0
      },
      {
       "at": [
        380,
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
       "text": "60",
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
       "text": "20",
       "col": 0
      },
      {
       "at": [
        97,
        142.66666666666666
       ],
       "text": "40",
       "col": 0
      },
      {
       "at": [
        97,
        186
       ],
       "text": "60",
       "col": 0
      },
      {
       "at": [
        315,
        162.66666666666666
       ],
       "text": "Excess supply 20",
       "col": 2
      },
      {
       "at": [
        479.5,
        78.33333333333334
       ],
       "text": "D",
       "col": 0
      },
      {
       "at": [
        479.5,
        183.83333333333331
       ],
       "text": "S",
       "col": 1
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
       "col": 1
      }
     ]
    }
   ],
   {
    "t": "figure",
    "title": "Natural monopoly: declining average cost",
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
      432,
      61
     ],
     "P9": [
      432,
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
      84.63636363636363
     ],
     "P15": [
      120,
      84.63636363636363
     ],
     "P16": [
      115,
      131.9090909090909
     ],
     "P17": [
      120,
      131.9090909090909
     ],
     "P18": [
      115,
      179.1818181818182
     ],
     "P19": [
      120,
      179.1818181818182
     ],
     "P20": [
      120,
      179.1818181818182
     ],
     "P21": [
      510,
      61
     ],
     "P22": [
      120,
      179.1818181818182
     ],
     "P23": [
      315,
      61
     ],
     "P24": [
      120,
      84.63636363636363
     ],
     "P25": [
      510,
      84.63636363636363
     ],
     "P26": [
      276,
      131.9090909090909
     ],
     "P27": [
      276,
      84.63636363636363
     ],
     "P28": [
      276,
      131.9090909090909
     ],
     "P29": [
      432,
      84.63636363636363
     ],
     "P30": [
      146,
      173.27272727272728
     ],
     "P31": [
      152.5,
      155.54545454545456
     ],
     "P32": [
      152.5,
      155.54545454545456
     ],
     "P33": [
      159,
      143.72727272727272
     ],
     "P34": [
      159,
      143.72727272727272
     ],
     "P35": [
      172,
      128.95454545454544
     ],
     "P36": [
      172,
      128.95454545454544
     ],
     "P37": [
      185,
      120.0909090909091
     ],
     "P38": [
      185,
      120.0909090909091
     ],
     "P39": [
      198,
      114.18181818181819
     ],
     "P40": [
      198,
      114.18181818181819
     ],
     "P41": [
      224,
      106.79545454545456
     ],
     "P42": [
      224,
      106.79545454545456
     ],
     "P43": [
      250,
      102.36363636363637
     ],
     "P44": [
      250,
      102.36363636363637
     ],
     "P45": [
      276,
      99.4090909090909
     ],
     "P46": [
      276,
      99.4090909090909
     ],
     "P47": [
      315,
      96.45454545454544
     ],
     "P48": [
      315,
      96.45454545454544
     ],
     "P49": [
      354,
      94.4848484848485
     ],
     "P50": [
      354,
      94.4848484848485
     ],
     "P51": [
      393,
      93.07792207792207
     ],
     "P52": [
      393,
      93.07792207792207
     ],
     "P53": [
      432,
      92.02272727272728
     ],
     "P54": [
      432,
      92.02272727272728
     ],
     "P55": [
      471,
      91.20202020202021
     ],
     "P56": [
      471,
      91.20202020202021
     ],
     "P57": [
      510,
      90.54545454545453
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57",
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
      "col": 3,
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
      "v": "P27P28",
      "col": 0,
      "arrows": 0,
      "dash": true,
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
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Quantity Q",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Price / cost (dollars)",
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
      "text": "24",
      "col": 0
     },
     {
      "at": [
       432,
       41
      ],
      "text": "48",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "60",
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
       79.63636363636363
      ],
      "text": "12",
      "col": 0
     },
     {
      "at": [
       97,
       126.9090909090909
      ],
      "text": "36",
      "col": 0
     },
     {
      "at": [
       97,
       174.1818181818182
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       491,
       76.78787878787878
      ],
      "text": "D",
      "col": 0
     },
     {
      "at": [
       312,
       66.87878787878788
      ],
      "text": "MR",
      "col": 3
     },
     {
      "at": [
       522,
       90.63636363636363
      ],
      "text": "MC",
      "col": 1
     },
     {
      "at": [
       318,
       140.9090909090909
      ],
      "text": "Monopoly",
      "col": 0
     },
     {
      "at": [
       424,
       60.636363636363626
      ],
      "text": "Efficient",
      "col": 2
     },
     {
      "at": [
       504,
       105.96753246753246
      ],
      "text": "ATC",
      "col": 2
     },
     {
      "at": [
       385,
       216
      ],
      "text": "TC = 180 + 12Q",
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
      "c": "P29",
      "r": 4,
      "col": 2
     }
    ]
   },
   null
  ],
  "qpics": {
   "16": {
    "t": "setups",
    "title": "Competitive market: a unit tax",
    "head": "Item",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Demand price",
      "60 - Q"
     ],
     [
      "Supply price",
      "Q"
     ],
     [
      "Tax per unit",
      "12"
     ]
    ]
   },
   "24": {
    "t": "setups",
    "title": "Subsidy accounting",
    "head": "Item",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Demand price",
      "60 - Q"
     ],
     [
      "Supply price",
      "Q"
     ],
     [
      "Subsidy / quantity",
      "12 / 36"
     ]
    ]
   },
   "28": {
    "t": "setups",
    "title": "A regulated monopoly",
    "head": "Item",
    "cols": [
     "Given"
    ],
    "rows": [
     [
      "Total cost",
      "180 + 12Q"
     ],
     [
      "Price / quantity",
      "12 / 48"
     ]
    ]
   }
  },
  "boardTitle": "Government policy"
 },
 {
  "code": "6.5",
  "name": "Inequality",
  "skill": "s5",
  "teach": [
   "Income is a flow measured over a period, such as annual wages, interest or rental income. Wealth is a stock measured at a date: assets minus liabilities. A household with assets 90000 and debt 35000 has net wealth 55000, which is not its annual income. Poverty concerns resources relative to a stated threshold or standard, while inequality describes how unevenly resources are distributed. A population can have equal but very low incomes, or rising real incomes with a wider relative gap. Always identify the variable, unit, period, household adjustment and whether taxes or transfers are included before comparing figures.",
   "A Lorenz curve ranks people from lowest to highest income and shows cumulative population share horizontally and cumulative income share vertically. With nonnegative incomes, equal shares lie on the diagonal; a curve farther below it represents more concentration when one curve lies below the other throughout. In an original example, the bottom 40% receive 15% of income, so the top 60% receive 85%. A Gini coefficient summarizes inequality, commonly from 0 to 1 or as an index from 0 to 100: zero means equality, and a higher value on the same scale indicates more inequality. It does not tell you average income or a poverty rate. Different distributions can share a Gini, and crossing Lorenz curves need more analysis than one point.",
   "Unequal earnings and wealth have multiple sources. Education, experience and skills can affect productivity and opportunities; networks can influence access to information and jobs. Inheritance transfers assets independently of current labor earnings. Discrimination, unequal access to credit or schooling, mobility barriers and differences in bargaining power can also influence outcomes. In a competitive factor-market model, pay relates to marginal revenue product, but that model does not establish that every observed income difference measures effort, merit or productivity. A comparison of two groups' average incomes alone cannot identify how much each mechanism caused.",
   "A progressive tax has a rising average tax rate as income rises; a proportional tax keeps that rate constant; a regressive tax has a falling average rate. Compare percentages, not just dollar payments. In an original schedule, income 20000 with tax 2000 has rate 10%, while income 80000 with tax 16000 has rate 20%, a progressive comparison. A marginal rate applies to an additional part of income and need not equal the average rate on all income. Taxes, transfers, education and access policies can change disposable resources and future opportunities, but their effects depend on design, eligibility, behavior and costs. The numbers in this lesson are hypothetical, not current tax rules."
  ],
  "boards": [
   [
    "Income is a flow; wealth is a stock",
    "Net wealth 90000 - debt 35000 = 55000",
    "Poverty and inequality ask different questions"
   ],
   [
    "Rank people from lowest to highest income",
    "Bottom 40% receives 15%; top 60% receives 85%",
    "Gini summarizes inequality, not average income"
   ],
   [
    "Skills, access, networks and inheritance matter",
    "Discrimination and bargaining power can matter",
    "A group average alone cannot identify a cause"
   ],
   [
    "Average tax rate = total tax / income",
    "10% at 20000; 20% at 80000: progressive",
    "Marginal and average tax rates can differ"
   ]
  ],
  "eqs": [
   "Net wealth = assets − liabilities = 90000 − 35000 = 55000",
   "Cumulative income shares sum to 100%; upper share = 100% − lower share",
   "Observed income gaps can reflect several mechanisms; association alone is not a causal decomposition",
   "Average rates: 2000/20000=10%; 16000/80000=20%"
  ],
  "questions": [
   [
    "Which statement distinguishes income from wealth?",
    "Income is a flow over time; net wealth is assets minus liabilities at a date",
    "Income and wealth are both always annual wages",
    "Wealth counts debts as extra assets",
    "The time dimension differs: income accrues over a period while wealth is a balance-sheet stock. Debts reduce net wealth rather than increase it."
   ],
   [
    "Can a household with a high current income have low net wealth?",
    "Yes; debt, recent earnings and saving history can make the measures differ",
    "No; annual income must equal net wealth",
    "No; liabilities cannot affect wealth",
    "Income and accumulated net assets are distinct. High earnings in one period do not guarantee that assets already exceed liabilities by a large amount."
   ],
   [
    "How does poverty differ from income inequality?",
    "Poverty compares resources with a specified standard; inequality concerns distribution",
    "Poverty is always identical to the Gini coefficient",
    "Inequality measures only the number of people below one threshold",
    "A threshold-based poverty measure and a distributional inequality measure can move differently. Neither definition reduces to the other."
   ],
   [
    "All households have the same low income below a stated poverty threshold. What can be true?",
    "Income inequality is zero while poverty is widespread",
    "Equal incomes prove that nobody is poor",
    "A Gini of zero means everyone has high income",
    "Equality does not fix the level of income. The stated threshold can put an equal-income population in poverty."
   ],
   [
    "What does the horizontal axis of a standard income Lorenz curve show?",
    "Cumulative population share ranked from lowest to highest income",
    "The tax rate paid by the wealthiest person",
    "The total number of dollars received by one household",
    "The horizontal ranking accumulates people; the vertical measure accumulates income. Tax rates and individual dollar levels are not these axes."
   ],
   [
    "What does the vertical axis of an income Lorenz curve show?",
    "Cumulative share of total income",
    "Only annual GDP growth",
    "Only the marginal tax rate",
    "The curve links a population share to the fraction of income it receives. Growth and tax rates are different measures."
   ],
   [
    "For nonnegative incomes, what does the equality diagonal on a Lorenz graph mean?",
    "Each cumulative population share receives the same income share",
    "The richest person receives every dollar",
    "Everyone's nominal income must be exactly one dollar",
    "Equal shares imply equal incomes within the measured population, regardless of the common dollar level. Complete concentration is the opposite extreme."
   ],
   [
    "Two noncrossing Lorenz curves use comparable definitions. Curve A lies below B throughout the interior. What follows?",
    "A represents more unequal income shares",
    "A necessarily has lower average income",
    "B must have a higher poverty rate",
    "The lower curve assigns less cumulative income to lower-ranked groups. Relative shares alone do not establish income levels or poverty rates."
   ],
   [
    "A Gini index falls from 40 to 30 on the same 0-to-100 scale with comparable data. What does this indicate?",
    "Lower measured inequality",
    "An exact ten-dollar increase in every person's income",
    "A poverty rate that must equal 30%",
    "A lower Gini indicates less inequality in the measured distribution. It is not a dollar amount or a poverty percentage."
   ],
   [
    "What does a Gini coefficient of 0 mean in the standard nonnegative-income interpretation?",
    "Perfect equality of the measured incomes",
    "Zero national income necessarily",
    "All income goes to one person",
    "Zero measures no dispersion, which can occur at many positive income levels. Maximum concentration would give the opposite extreme."
   ],
   [
    "Can two distributions have the same Gini but different income patterns?",
    "Yes; one summary number does not uniquely identify the full distribution",
    "No; one Gini specifies every person's income",
    "No; matching Ginis require matching population sizes and average incomes",
    "Different Lorenz shapes can enclose the same area, and the relative measure does not determine scale or every individual value."
   ],
   [
    "Why compare survey definitions before comparing two countries' inequality measures?",
    "Income, consumption, household units and tax treatment can differ",
    "A numerical Gini automatically makes all surveys identical",
    "All countries necessarily use the same year and variable",
    "Measurement differences can affect comparability. A common label alone does not remove differences in underlying data."
   ],
   [
    "An inherited asset raises a household's net worth without current labor earnings. Which mechanism is illustrated?",
    "Intergenerational wealth transfer",
    "Only an increase in the household's present hourly productivity",
    "Proof that wealth and wages are identical",
    "Inheritance transfers ownership across people or generations. It need not result from the recipient's current labor productivity or wage income."
   ],
   [
    "Why can professional networks affect earnings opportunities?",
    "They can influence access to information, referrals and jobs",
    "They guarantee equal offers for every applicant",
    "They prove that education never affects productivity",
    "Networks are one mechanism of access, not a guarantee of equal outcomes or proof that other mechanisms are absent."
   ],
   [
    "Two groups have different average incomes. Does that statistic alone identify the complete cause?",
    "No; multiple mechanisms and relevant evidence must be examined",
    "Yes; it proves the entire gap is caused by effort",
    "Yes; it proves the entire gap is caused by a single stated institution",
    "A group average describes a difference without decomposing its causes. Skills, access, discrimination, institutions and other factors require additional evidence."
   ],
   [
    "Which definition describes a progressive tax across the stated income range?",
    "Average tax rate rises with income",
    "Tax dollars rise even if the rate falls",
    "Every extra dollar of income is taxed at 100%",
    "Progressivity concerns the average fraction paid as income changes. Paying more dollars alone is insufficient, and the marginal rate need not be 100%."
   ],
   [
    "A tax collects the same fixed percentage at all positive incomes. How is it classified?",
    "Proportional",
    "Progressive solely because richer people pay more dollars",
    "Regressive solely because the rate is positive",
    "The average tax rate is constant, so the schedule is proportional. Dollar amounts can rise without the rate changing."
   ],
   [
    "Why distinguish marginal from average tax rates?",
    "The rate on additional income need not equal total tax divided by total income",
    "They are always equal under every schedule",
    "The average rate counts only the last dollar",
    "A bracketed or otherwise nonlinear schedule can tax different portions differently. The overall average uses total tax over total income."
   ],
   [
    "A household has assets 120000 dollars and liabilities 45000 dollars. What is its net wealth?",
    "75000",
    "165000",
    "45000",
    "Net assets are what remains after debt is subtracted:75000 dollars. Adding liabilities overstates wealth and debt alone is not net wealth."
   ],
   [
    "A Lorenz table says the bottom 60% of people receive 35% of income. What income share goes to the top 40%?",
    "65%",
    "40%",
    "35%",
    "The two groups exhaust the population and total income, so the remaining income share is 100%-35%=65%. Population share is not income share."
   ],
   [
    "Income 20000 pays tax 2000, while income 80000 pays tax 8000 in an original schedule. How is the comparison classified?",
    "Proportional",
    "Progressive",
    "Regressive",
    "Both average rates are 10%. Higher dollar payments at higher income do not make the unchanged percentage progressive."
   ],
   [
    "Income 20000 pays tax 2000, while income 80000 pays tax 4000 in an original schedule. How is the comparison classified?",
    "Regressive",
    "Progressive",
    "Proportional",
    "The average rate falls from 10% to 5%, even though the higher-income household pays more dollars. That falling share defines regressivity here."
   ],
   [
    "Annual market income is 24000 dollars, cash transfers are 6000 and direct taxes are 3000. In this stated accounting, what is disposable income?",
    "27000",
    "33000",
    "21000",
    "Add received cash transfers and subtract direct taxes:24000+6000-3000=27000. Reversing or omitting those flows produces the alternatives."
   ],
   [
    "A hypothetical schedule taxes the first 10000 dollars at 0% and the next 10000 at 20%. At total income 20000, what is the average tax rate?",
    "10%",
    "20%",
    "0%",
    "The second portion owes 2000 and the first owes 0. Total tax 2000 divided by total income 20000 is 10%;20% is the marginal bracket rate."
   ]
  ],
  "check": [
   "In a fictional tax comparison, income 30000 has tax 3000 and income 90000 has tax 18000. Which classification fits the average rates?",
   "Progressive: the average rate rises from 10% to 20%",
   "Proportional: the average rate is unchanged",
   "Regressive: the average rate falls as income rises",
   "Compare 3000/30000=10% with 18000/90000=20%; the higher income has the higher average rate."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "A household balance sheet",
    "head": "Item",
    "cols": [
     "Dollars"
    ],
    "rows": [
     [
      "Assets",
      "90000"
     ],
     [
      "Liabilities",
      "35000"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "A fictional income Lorenz curve",
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
      354,
      61
     ],
     "P9": [
      354,
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
      87
     ],
     "P15": [
      120,
      87
     ],
     "P16": [
      115,
      139
     ],
     "P17": [
      120,
      139
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
      61
     ],
     "P23": [
      198,
      67.5
     ],
     "P24": [
      198,
      67.5
     ],
     "P25": [
      276,
      80.5
     ],
     "P26": [
      276,
      80.5
     ],
     "P27": [
      354,
      100
     ],
     "P28": [
      354,
      100
     ],
     "P29": [
      432,
      132.5
     ],
     "P30": [
      432,
      132.5
     ],
     "P31": [
      510,
      191
     ],
     "P32": [
      276,
      80.5
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32",
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
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Cumulative population (%)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "Cumulative income (%)",
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
      "text": "40",
      "col": 0
     },
     {
      "at": [
       354,
       41
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       510,
       41
      ],
      "text": "100",
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
       82
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       97,
       134
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       284,
       93.5
      ],
      "text": "(40%,15%)",
      "col": 0
     },
     {
      "at": [
       268.2,
       129.9
      ],
      "text": "Equality",
      "col": 3
     },
     {
      "at": [
       428.2,
       98.69999999999999
      ],
      "text": "Lorenz curve",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P32",
      "r": 4,
      "col": 0
     }
    ]
   },
   null,
   {
    "t": "setups",
    "title": "Fictional tax comparison",
    "head": "Income",
    "cols": [
     "Tax"
    ],
    "rows": [
     [
      "20000",
      "2000"
     ],
     [
      "80000",
      "16000"
     ]
    ]
   }
  ],
  "qpics": {
   "18": {
    "t": "setups",
    "title": "Net wealth: given balances",
    "head": "Item",
    "cols": [
     "Dollars"
    ],
    "rows": [
     [
      "Assets",
      "120000"
     ],
     [
      "Liabilities",
      "45000"
     ]
    ]
   },
   "19": {
    "t": "setups",
    "title": "Original Lorenz data",
    "head": "Population",
    "cols": [
     "Income share"
    ],
    "rows": [
     [
      "Bottom60%",
      "35%"
     ]
    ]
   },
   "23": {
    "t": "setups",
    "title": "Original tax brackets",
    "head": "Income slice",
    "cols": [
     "Rate"
    ],
    "rows": [
     [
      "First10000",
      "0%"
     ],
     [
      "Next10000",
      "20%"
     ]
    ]
   }
  },
  "boardTitle": "Inequality",
  "checkPic": {
   "t": "setups",
   "title": "Try: compare average tax rates",
   "head": "Income",
   "cols": [
    "Tax"
   ],
   "rows": [
    [
     "30000",
     "3000"
    ],
    [
     "90000",
     "18000"
    ]
   ]
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Start with the social benchmark and count each relevant cost and benefit once. Distinguish marginal from total values, private payments from real resource costs, and market power from externalities or information problems. Identify rivalry and exclusion instead of classifying a good by its owner. Trace tax or subsidy wedges, fixed versus marginal costs, and participation as well as output. Policy effects depend on structure and implementation. Keep income, wealth, poverty and inequality separate; compare definitions and evidence before making a causal or fairness claim.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"finance-h-ap-micro-market-failure-and-the-role-of-government","subject":"finance","level":5,"grade":9,"standard":"AP Microeconomics Course and Exam Description, effective Fall 2026, Unit 6, topics 6.1–6.5","title":"Market Failure and the Role of Government","goal":"Compare private and social incentives, identify spillovers and goods, evaluate policies under explicit market assumptions, and interpret income and wealth inequality.","points":20,"progression":{"requires":["finance-h-ap-micro-factor-markets"],"operations":3,"demand":"Compare feasible social gains, solve policy wedges and interpret graphical and distributional evidence."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
