/* Original course unit. Review record: docs/review/lessons/high-completion/ap-macro-u6-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "6.1",
  "name": "Balance of Payments Accounts",
  "skill": "s1",
  "teach": [
   "International accounts record transactions between residents of an economy and the rest of the world during a period. Residence, not citizenship alone, determines the side of the account. The current account includes trade in goods and services, primary income such as investment income, and current transfers. Selling a produced machine abroad is a goods export; buying a foreign bond is a financial transaction. The word capital does not make every machine purchase a financial-account entry. Follow what is exchanged, not a familiar label.",
   "For the AP convention used here, combine the capital and financial accounts as CFA and give net financial inflows a positive sign. A foreign resident's purchase of a newly issued home-country bond is an inflow; a home resident's purchase of a foreign bond is an outflow. Interest paid later on a bond is primary income in the current account, not another purchase of principal. Capital transfers are distinct from ordinary current transfers. Modern statistical tables separate the capital account from the financial account and can report financial balances with a different sign; always read their definitions.",
   "With complete double-entry records, credits and debits offset. In our simplified AP accounts, ignoring measurement discrepancies, CA + CFA = 0. An original economy exports 240 and imports 280, receives net primary income of 15 and has net current transfers of -5. Its current account is -30, so its CFA is +30. A current-account deficit does not mean the entire accounting system fails to balance. Nor does it mean every bilateral trade relationship is in deficit. A published statistical discrepancy reflects measurement differences, not a new export.",
   "Each transaction has a counterpart, even when a question asks for only one entry. Suppose a home exporter sells 50 of goods abroad and adds 50 to its foreign bank deposit. The goods entry is a +50 current-account credit; acquiring the foreign financial asset is a -50 CFA entry under our AP convention. Net entries sum to zero. By contrast, an existing foreign asset rising in market price is a valuation change in the investment position, not a new purchase in this period's transaction account. Separate flows from end-of-period stocks."
  ],
  "boards": [
   [
    "Residents trade with nonresidents",
    "Goods + services → trade balance",
    "Income + current transfers also enter CA"
   ],
   [
    "AP CFA: inflows positive, outflows negative",
    "Bond purchase and interest are different",
    "Read the sign convention of actual tables"
   ],
   [
    "240 − 280 + 15 − 5 = −30",
    "CA deficit 30 ↔ CFA surplus 30",
    "Complete accounts; no discrepancy assumed"
   ],
   [
    "Export goods: CA +50",
    "Acquire foreign deposit: CFA −50",
    "A valuation change is not a new transaction"
   ]
  ],
  "eqs": [
   "CA = exports − imports + net primary income + net current transfers",
   "AP CFA = net inflows; bond principal ≠ bond interest",
   "CA = −30; CFA = +30; CA + CFA = 0",
   "+50 − 50 = 0; transactions are flows, positions are stocks"
  ],
  "questions": [
   [
    "An economy sells domestically produced software services to a foreign resident. Which entry records that sale itself under the AP convention?",
    "A current-account credit",
    "A financial outflow for buying a bond",
    "A current-account debit",
    "A service exported to a nonresident is a current-account credit. No foreign bond is bought in the stated sale, and a debit would describe an import rather than this export."
   ],
   [
    "A resident buys a newly issued foreign government bond. Which entry records that asset purchase under the AP inflow-positive convention?",
    "A CFA debit, or financial outflow",
    "A current-account credit for interest received",
    "A CFA credit, or financial inflow",
    "Buying a foreign financial asset is an outward investment and therefore a CFA debit here. The principal purchase is not interest income, and its direction is not an inflow."
   ],
   [
    "A foreign resident purchases a newly issued bond from a home business. How is that financing recorded in the home's AP CFA?",
    "A credit, representing financial inflow",
    "A debit, representing financial outflow",
    "A goods export in the current account",
    "A nonresident finances the home business by acquiring its bond, so the home economy has an inflow. A financial claim is not a produced export, and reversing the investor reverses the entry."
   ],
   [
    "A domestic investor receives interest on a foreign bond already owned. Which account contains the interest receipt?",
    "Current account: primary income credit",
    "CFA: another purchase of bond principal",
    "Current account: goods import debit",
    "Interest is investment income in the current account. The investor has not made a new principal purchase, and income received is a credit rather than a goods import."
   ],
   [
    "A household sends an ordinary cash gift to a relative who resides abroad. Which entry describes the gift itself?",
    "Current-account debit for a current transfer",
    "Current-account credit for an export",
    "CFA credit for a newly issued domestic bond",
    "An ordinary personal gift to a nonresident is an outgoing current transfer. It neither sells a produced good nor issues a domestic bond; the payment also has a counterpart entry."
   ],
   [
    "A firm buys an imported machine for its factory. Which entry records the purchase of the machine itself?",
    "A goods import in the current account",
    "Only a financial-account asset purchase because it is capital equipment",
    "A current-account export credit",
    "A newly produced machine is a good, so crossing the resident/nonresident boundary as a purchase records an import. Its productive use as physical capital does not turn it into a bond or an export."
   ],
   [
    "An AP account has a current-account deficit and no statistical discrepancy. What must be true about its combined capital and financial account?",
    "It has an equal-sized surplus",
    "It must have an equal-sized deficit",
    "It must be zero regardless of the deficit",
    "With complete records and this sign convention, CA + CFA = 0. A negative CA therefore pairs with positive CFA; zero or another deficit would not offset it."
   ],
   [
    "Can a trade deficit coexist with a current-account surplus?",
    "Yes, if net income and current transfers more than offset it",
    "No, because trade balance and current account are identical",
    "No, because current transfers are always zero",
    "Trade is only one part of the current account. Sufficient positive net income and transfers can outweigh a trade deficit; neither identity nor an assumed zero transfer balance rules that out."
   ],
   [
    "A statistical table defines its financial balance as net asset acquisition minus net liability incurrence. How should it be compared with the lesson's inflow-positive AP CFA?",
    "Read and reconcile the sign convention and separate capital entries first",
    "Assume both labels require the same sign",
    "Rename every financial transaction as a goods export",
    "Financial balance presentations can use different signs and account groupings. Comparing definitions first avoids reversing inflows; neither a shared name nor relabeling assets as goods fixes the mismatch."
   ],
   [
    "An already-owned foreign share rises in price without being bought or sold. What does that change directly represent?",
    "A valuation change in the stock of foreign assets",
    "A new goods export equal to the price gain",
    "A new bond purchase equal to the price gain",
    "Market revaluation changes an investment position without a transaction. Neither a goods sale nor a fresh financial purchase is stated, so the gain alone is not such a flow."
   ],
   [
    "An exporter receives payment by adding to its own foreign bank deposit. In the home's AP records, what offsets the goods-export credit?",
    "A CFA debit for acquiring a foreign financial asset",
    "Another current-account credit of the same size",
    "No counterpart because the goods were paid for",
    "An added foreign deposit is acquisition of an external asset, an AP CFA debit. That offsets the export credit; adding another credit or omitting the payment entry violates double entry."
   ],
   [
    "A report lists only the goods balance and claims it has measured the whole current account. What is missing?",
    "Services, primary income and current transfers",
    "Only the domestic unemployment rate",
    "Nothing, because goods are the entire current account",
    "The current account covers more than goods: services, income and current transfers also matter. Unemployment is a separate domestic labor measure, not the omitted account components."
   ],
   [
    "An original annual account has exports 180, imports 230, net primary income 20 and net current transfers -10. All values share one currency unit. What is its current-account balance?",
    "-40",
    "40",
    "-50",
    "Add the signed components: 180 − 230 + (20) + (-10) = -40. Reversing that sign gives the offsetting AP CFA, while exports minus imports alone omits income and transfers."
   ],
   [
    "An original annual account has exports 320, imports 260, net primary income -15 and net current transfers 5. All values share one currency unit. What is its current-account balance?",
    "50",
    "-50",
    "60",
    "Add the signed components: 320 − 260 + (-15) + (5) = 50. Reversing that sign gives the offsetting AP CFA, while exports minus imports alone omits income and transfers."
   ],
   [
    "An original annual account has exports 450, imports 510, net primary income 35 and net current transfers 10. All values share one currency unit. What is its current-account balance?",
    "-15",
    "15",
    "-60",
    "Add the signed components: 450 − 510 + (35) + (10) = -15. Reversing that sign gives the offsetting AP CFA, while exports minus imports alone omits income and transfers."
   ],
   [
    "Under the AP inflow-positive CFA convention, an original current-account balance is -45 billion. With complete accounts and no statistical discrepancy, what CFA balance offsets it?",
    "45",
    "-45",
    "0",
    "The two signed balances must sum to zero: -45 + (45) = 0. Matching the CA sign or assigning zero would leave the original imbalance unoffset."
   ],
   [
    "Under the AP inflow-positive CFA convention, an original current-account balance is 28 billion. With complete accounts and no statistical discrepancy, what CFA balance offsets it?",
    "-28",
    "28",
    "0",
    "The two signed balances must sum to zero: 28 + (-28) = 0. Matching the CA sign or assigning zero would leave the original imbalance unoffset."
   ],
   [
    "Under the AP inflow-positive CFA convention, an original current-account balance is -65 billion. With complete accounts and no statistical discrepancy, what CFA balance offsets it?",
    "65",
    "-65",
    "0",
    "The two signed balances must sum to zero: -65 + (65) = 0. Matching the CA sign or assigning zero would leave the original imbalance unoffset."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "6.1 · Classify the current account",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      78,
      176
     ],
     "P1": [
      224,
      176
     ],
     "P2": [
      224,
      87
     ],
     "P3": [
      78,
      87
     ],
     "P4": [
      250,
      176
     ],
     "P5": [
      396,
      176
     ],
     "P6": [
      396,
      87
     ],
     "P7": [
      250,
      87
     ],
     "P8": [
      422,
      176
     ],
     "P9": [
      568,
      176
     ],
     "P10": [
      568,
      87
     ],
     "P11": [
      422,
      87
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
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
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       213
      ],
      "text": "Current-account components: classify the transaction",
      "col": 0
     },
     {
      "at": [
       151,
       145
      ],
      "text": "Trade",
      "col": 0
     },
     {
      "at": [
       151,
       109
      ],
      "text": "Goods + services",
      "col": 0
     },
     {
      "at": [
       323,
       145
      ],
      "text": "Primary income",
      "col": 1
     },
     {
      "at": [
       323,
       109
      ],
      "text": "Interest / dividends",
      "col": 1
     },
     {
      "at": [
       495,
       145
      ],
      "text": "Current transfers",
      "col": 2
     },
     {
      "at": [
       495,
       109
      ],
      "text": "Ordinary gifts",
      "col": 2
     },
     {
      "at": [
       320,
       42
      ],
      "text": "A bond purchase belongs to financial transactions",
      "col": 0
     }
    ],
    "circles": []
   },
   null,
   {
    "t": "setups",
    "title": "6.1 · Fictional annual account",
    "head": "Component",
    "cols": [
     "Signed amount"
    ],
    "rows": [
     [
      "Exports",
      "240"
     ],
     [
      "Imports",
      "−280"
     ],
     [
      "Net primary income",
      "15"
     ],
     [
      "Net current transfers",
      "−5"
     ],
     [
      "CA balance",
      "−30"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "6.1 · Two entries for one transaction",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      88,
      181
     ],
     "P1": [
      277,
      181
     ],
     "P2": [
      277,
      69
     ],
     "P3": [
      88,
      69
     ],
     "P4": [
      363,
      181
     ],
     "P5": [
      552,
      181
     ],
     "P6": [
      552,
      69
     ],
     "P7": [
      363,
      69
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
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
       320,
       212
      ],
      "text": "Fictional transaction: export paid into a foreign deposit",
      "col": 0
     },
     {
      "at": [
       182.5,
       150
      ],
      "text": "Goods entry",
      "col": 0
     },
     {
      "at": [
       182.5,
       116
      ],
      "text": "Export +50",
      "col": 0
     },
     {
      "at": [
       182.5,
       87
      ],
      "text": "Current-account credit",
      "col": 0
     },
     {
      "at": [
       457.5,
       150
      ],
      "text": "Asset entry",
      "col": 1
     },
     {
      "at": [
       457.5,
       116
      ],
      "text": "Foreign deposit +50",
      "col": 1
     },
     {
      "at": [
       457.5,
       87
      ],
      "text": "AP CFA debit −50",
      "col": 1
     },
     {
      "at": [
       320,
       37
      ],
      "text": "Opposite entries sum to zero: +50 − 50 = 0",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "12": {
    "t": "setups",
    "title": "Original annual account",
    "head": "Component",
    "cols": [
     "Signed input"
    ],
    "rows": [
     [
      "Exports",
      "180"
     ],
     [
      "Imports",
      "−230"
     ],
     [
      "Net primary income",
      "20"
     ],
     [
      "Net current transfers",
      "−10"
     ]
    ]
   }
  }
 },
 {
  "code": "6.2",
  "name": "Exchange Rates",
  "skill": "s2",
  "teach": [
   "Write the units before converting. Let e be crowns per dollar: e = 1.5 means one dollar buys 1.5 crowns. Then 80 dollars buy 120 crowns, while an item priced at 90 crowns costs 60 dollars, ignoring fees. Multiplying dollars by crowns per dollar cancels dollars; dividing crowns by crowns per dollar leaves dollars. Do not multiply in both directions. All currencies and values in this unit's examples are hypothetical; they are not live quotations.",
   "If crowns per dollar rises from 1.5 to 1.8, the dollar appreciates against the crown: each dollar buys more crowns. The crown depreciates against the dollar. The dollar's appreciation is 20%, using the initial 1.5 as the denominator. The inverse quote falls from 2/3 to 5/9 dollars per crown, a 16.67% fall, not 20%. Opposite directions do not imply equal percentage magnitudes, because each percentage uses its own starting value.",
   "A bilateral nominal exchange rate compares two currencies. It does not by itself say how much a currency buys within its own country, and appreciation against one currency need not mean appreciation against every currency. A real exchange rate also compares price levels: with e measured in foreign currency per home currency, an index e × home price index / foreign price index rises when home goods become relatively dearer. A change in the quote's numerical size alone is meaningless until the units and time comparison are identified."
  ],
  "boards": [
   [
    "e = crowns per dollar",
    "80 dollars × 1.5 = 120 crowns",
    "90 crowns ÷ 1.5 = 60 dollars"
   ],
   [
    "1.5 → 1.8 crowns per dollar",
    "Dollar appreciates 20%",
    "Inverse quote falls about 16.67%"
   ],
   [
    "Nominal rate: currency for currency",
    "Real comparison also uses price levels",
    "Bilateral does not mean every partner"
   ]
  ],
  "eqs": [
   "foreign amount = home amount × e; home amount = foreign amount ÷ e",
   "Dollar gain = 1.8/1.5 − 1 = 20%; crown change = 1.5/1.8 − 1 ≈ −16.67%",
   "Real exchange-rate index = e × P_home / P_foreign"
  ],
  "questions": [
   [
    "An exchange quote is 2 crowns per dollar. Which reading has the units correct?",
    "One dollar exchanges for two crowns",
    "One crown exchanges for two dollars",
    "Two dollars exchange for one crown",
    "The denominator identifies one dollar and the numerator gives two crowns. The inverse is half a dollar per crown, so both alternatives reverse the quote incorrectly."
   ],
   [
    "The quote in crowns per dollar rises while both currencies remain freely traded. What happens to the dollar relative to the crown?",
    "The dollar appreciates",
    "The dollar depreciates",
    "The dollar's bilateral value is unchanged",
    "A dollar now purchases more crowns, which defines appreciation against that currency. Depreciation would mean fewer crowns, and an unchanged value would require the same quote."
   ],
   [
    "The quote in crowns per dollar falls. What happens to the crown relative to the dollar?",
    "The crown appreciates",
    "The crown depreciates",
    "Both currencies depreciate against each other",
    "The inverse quote in dollars per crown rises, so a crown buys more dollars. In one bilateral pair, one currency's depreciation corresponds to the other's appreciation."
   ],
   [
    "A student converts a dollar amount to crowns using a crowns-per-dollar quote. Which operation cancels the units correctly?",
    "Multiply the dollar amount by the quote",
    "Divide the dollar amount by the quote",
    "Add the quote to the dollar amount",
    "Dollars multiplied by crowns per dollar leaves crowns. Division gives inappropriate squared-dollar units per crown, and adding quantities with different units is not a conversion."
   ],
   [
    "A dollar appreciates 25% against a crown. Must the crown depreciate exactly 25% against the dollar?",
    "No, because the reciprocal quote uses a different starting denominator",
    "Yes, because opposite directions always have equal percentage changes",
    "No, because the crown must also appreciate",
    "Reciprocal exchange values move in opposite directions, but percentage bases differ. A factor of 1.25 for the dollar implies a factor of 0.8 for the crown, a 20% decline."
   ],
   [
    "A dollar rises against the crown but falls against the mark. What can be concluded?",
    "Bilateral exchange-rate movements can differ across partners",
    "The observations are logically impossible",
    "The dollar must have risen against all currencies",
    "A currency can strengthen against one partner and weaken against another. Bilateral quotations are pair-specific, so neither universal appreciation nor a contradiction follows."
   ],
   [
    "With nominal e fixed, the home price index rises and the foreign price index stays fixed. What happens to e times home prices divided by foreign prices?",
    "The real exchange-rate index rises",
    "The real exchange-rate index falls",
    "The real exchange-rate index cannot change unless e changes",
    "The product e × P_home/P_foreign rises with the numerator. Holding only the nominal rate fixed does not hold relative prices or the real exchange rate fixed."
   ],
   [
    "An exchange rate is quoted without naming its numerator or denominator currency. What is needed before interpreting an increase?",
    "Which currency is being priced in which other currency",
    "Only the color used to draw the graph",
    "An assumption that every increase means home appreciation",
    "An increase means different things under reciprocal quotations. Currency units resolve the direction; graph color and a universal appreciation rule cannot supply the missing information."
   ],
   [
    "With no fees, the rate is 1.25 crowns per dollar. How many crowns does a traveler receive for 72 dollars?",
    "90",
    "57.6",
    "73.25",
    "The received amount divided by the 72 dollars must equal 1.25 crowns per dollar. That gives 90 crowns; dividing in the wrong direction or adding the rate cannot satisfy that unit price."
   ],
   [
    "With no fees, the rate is 2.5 crowns per dollar. How many crowns does a traveler receive for 48 dollars?",
    "120",
    "19.2",
    "50.5",
    "The received amount divided by the 48 dollars must equal 2.5 crowns per dollar. That gives 120 crowns; dividing in the wrong direction or adding the rate cannot satisfy that unit price."
   ],
   [
    "With no fees, the rate is 0.8 crowns per dollar. How many crowns does a traveler receive for 140 dollars?",
    "112",
    "175",
    "140.8",
    "The received amount divided by the 140 dollars must equal 0.8 crowns per dollar. That gives 112 crowns; dividing in the wrong direction or adding the rate cannot satisfy that unit price."
   ],
   [
    "At 1.4 crowns per dollar and no fees, an item costs 84 crowns. What is its price in dollars?",
    "60",
    "117.6",
    "85.4",
    "A dollar price of 60 buys exactly 84 crowns at 1.4 per dollar. Multiplication instead of division reverses the conversion, and adding a rate to a price is invalid."
   ],
   [
    "At 2.5 crowns per dollar and no fees, an item costs 150 crowns. What is its price in dollars?",
    "60",
    "375",
    "152.5",
    "A dollar price of 60 buys exactly 150 crowns at 2.5 per dollar. Multiplication instead of division reverses the conversion, and adding a rate to a price is invalid."
   ],
   [
    "At 0.8 crowns per dollar and no fees, an item costs 96 crowns. What is its price in dollars?",
    "120",
    "76.8",
    "96.8",
    "A dollar price of 120 buys exactly 96 crowns at 0.8 per dollar. Multiplication instead of division reverses the conversion, and adding a rate to a price is invalid."
   ],
   [
    "A no-fee quote is 1.25 crowns per dollar. What is the reciprocal quote in dollars per crown?",
    "0.8",
    "1.25",
    "2.25",
    "The two reciprocal quotes must multiply to 1: 1.25 × 0.8 = 1. Keeping or adding to the original quote fails this consistency check."
   ],
   [
    "A no-fee quote is 2.5 crowns per dollar. What is the reciprocal quote in dollars per crown?",
    "0.4",
    "2.5",
    "3.5",
    "The two reciprocal quotes must multiply to 1: 2.5 × 0.4 = 1. Keeping or adding to the original quote fails this consistency check."
   ],
   [
    "The quote changes from 1.2 to 1.5 crowns per dollar. What is the signed percentage change in the dollar's crown value, rounded to the nearest whole percent?",
    "25%",
    "-25%",
    "30%",
    "Use the initial quote as the base: (1.5/1.2 − 1) × 100 = 25%. The opposite sign describes the wrong direction, and a raw difference is not a percentage of the starting value."
   ],
   [
    "The quote changes from 2 to 1.6 crowns per dollar. What is the signed percentage change in the dollar's crown value, rounded to the nearest whole percent?",
    "-20%",
    "20%",
    "-40%",
    "Use the initial quote as the base: (1.6/2 − 1) × 100 = -20%. The opposite sign describes the wrong direction, and a raw difference is not a percentage of the starting value."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "6.2 · Currency units guide conversion",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      92,
      189
     ],
     "P1": [
      239,
      189
     ],
     "P2": [
      239,
      136
     ],
     "P3": [
      92,
      136
     ],
     "P4": [
      399,
      189
     ],
     "P5": [
      546,
      189
     ],
     "P6": [
      546,
      136
     ],
     "P7": [
      399,
      136
     ],
     "P8": [
      247,
      164
     ],
     "P9": [
      391,
      164
     ],
     "P10": [
      92,
      107
     ],
     "P11": [
      239,
      107
     ],
     "P12": [
      239,
      54
     ],
     "P13": [
      92,
      54
     ],
     "P14": [
      399,
      107
     ],
     "P15": [
      546,
      107
     ],
     "P16": [
      546,
      54
     ],
     "P17": [
      399,
      54
     ],
     "P18": [
      247,
      82
     ],
     "P19": [
      391,
      82
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19",
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
      "v": "P18P19",
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
      "col": 2
     },
     {
      "v": "P10P11P12P13",
      "col": 0
     },
     {
      "v": "P14P15P16P17",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       213
      ],
      "text": "Fictional quote: 1.5 crowns per dollar; no fees",
      "col": 0
     },
     {
      "at": [
       165,
       159
      ],
      "text": "80 dollars",
      "col": 0
     },
     {
      "at": [
       472,
       159
      ],
      "text": "120 crowns",
      "col": 2
     },
     {
      "at": [
       320,
       181
      ],
      "text": "× 1.5",
      "col": 0
     },
     {
      "at": [
       165,
       77
      ],
      "text": "90 crowns",
      "col": 0
     },
     {
      "at": [
       472,
       77
      ],
      "text": "60 dollars",
      "col": 2
     },
     {
      "at": [
       320,
       99
      ],
      "text": "÷ 1.5",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "6.2 · Reciprocal percentage changes",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      178,
      152
     ],
     "P1": [
      235,
      152
     ],
     "P2": [
      235,
      62
     ],
     "P3": [
      178,
      62
     ],
     "P4": [
      416,
      170
     ],
     "P5": [
      473,
      170
     ],
     "P6": [
      473,
      62
     ],
     "P7": [
      416,
      62
     ],
     "P8": [
      145,
      62
     ],
     "P9": [
      502,
      62
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
       212
      ],
      "text": "Crowns per dollar: one common scale",
      "col": 0
     },
     {
      "at": [
       206.5,
       163
      ],
      "text": "1.5",
      "col": 0
     },
     {
      "at": [
       206.5,
       39
      ],
      "text": "Before",
      "col": 0
     },
     {
      "at": [
       444.5,
       181
      ],
      "text": "1.8",
      "col": 2
     },
     {
      "at": [
       444.5,
       39
      ],
      "text": "After",
      "col": 2
     },
     {
      "at": [
       320,
       193
      ],
      "text": "Dollar +20%; inverse crown value −16.67%",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "6.3",
  "name": "The Foreign Exchange Market",
  "skill": "s3",
  "teach": [
   "Name the currency traded on the horizontal axis. In a market for dollars, plot quantity of dollars per period horizontally and crowns per dollar vertically. Foreign buyers who need dollars for home-country exports or assets demand dollars. Home buyers exchanging dollars to buy foreign goods or assets supply dollars. In the standard competitive model, a higher crown price of a dollar reduces quantity demanded and increases quantity supplied, holding the underlying schedules fixed. A movement along a curve is not a change in the curve's entire demand or supply.",
   "An equilibrium clears the chosen currency market. In an original schedule Qd = 120 − 20e and Qs = 20 + 20e, where quantities are millions of dollars per day and e is crowns per dollar, e = 2.5 makes both quantities 70. At e = 3, supply 80 exceeds demand 60: a surplus of 20 pushes the floating rate downward in this model. At e = 2, demand 80 exceeds supply 60: a shortage of 20 pushes the rate upward. Neither pressure guarantees immediate adjustment in every real market.",
   "Trading dollars for crowns involves both currencies. Someone supplying dollars demands crowns; someone demanding dollars supplies crowns. At a frictionless equilibrium quote of 2.5 crowns per dollar, the inverse quote is 0.4 dollars per crown. A dollar appreciates if its own foreign-currency price rises, even though the vertical rate falls in the reciprocal crown market. Quantities on the two horizontal axes use different currencies and need not have equal numbers. Always identify both axis labels before reading a shift."
  ],
  "boards": [
   [
    "Horizontal: dollars traded per period",
    "Vertical: crowns per dollar",
    "Demand dollars ↔ supply crowns"
   ],
   [
    "Qd = 120 − 20e; Qs = 20 + 20e",
    "At e = 2.5, both quantities are 70",
    "Above equilibrium: surplus pushes e down"
   ],
   [
    "Same trade, two currency markets",
    "2.5 crowns/dollar ↔ 0.4 dollars/crown",
    "Axes change when the currency changes"
   ]
  ],
  "eqs": [
   "At a fixed schedule: e ↑ ⇒ Qd ↓ and Qs ↑",
   "120 − 20(2.5) = 20 + 20(2.5) = 70",
   "Dollar supplied ⇔ crown demanded; reciprocal quotes multiply to 1"
  ],
  "questions": [
   [
    "On a graph for the market in dollars, e is measured in crowns per dollar. What belongs on the horizontal axis?",
    "Quantity of dollars traded per period",
    "Quantity of crowns per dollar",
    "The domestic inflation rate",
    "The horizontal axis measures the currency whose price appears vertically: dollars per period. Crowns per dollar is the vertical price, and inflation is not this market's traded quantity."
   ],
   [
    "A foreign buyer exchanges crowns for dollars to buy a home-country service. What role does the buyer play in the dollar market?",
    "Demands dollars",
    "Supplies dollars in exchange for crowns",
    "Directly reduces the supply of home labor",
    "Obtaining dollars to pay for a home service contributes to dollar demand. The buyer supplies crowns in the other currency market; no labor-supply change is stated."
   ],
   [
    "A home resident exchanges dollars for crowns to buy a foreign share. What is the resident doing in the dollar market?",
    "Supplying dollars",
    "Demanding dollars with crowns",
    "Exporting a domestically produced good",
    "The resident gives up dollars to acquire crowns, so supplies dollars. A foreign share is a financial asset, and this purchase does not describe a produced export."
   ],
   [
    "The crown price of a dollar rises with all dollar-demand determinants unchanged. What is shown on the demand curve?",
    "Movement to a smaller quantity of dollars demanded",
    "A rightward shift of dollar demand",
    "A leftward shift of dollar demand",
    "Changing the plotted price alone moves along the fixed demand curve. A shift requires a changed determinant, so neither proposed shift describes the stated event."
   ],
   [
    "The crown price of a dollar rises with all dollar-supply determinants unchanged. What is shown in the standard model?",
    "Movement to a larger quantity of dollars supplied",
    "A rightward shift of the entire supply curve",
    "Movement to a smaller quantity of dollars supplied",
    "A higher price moves along an upward-sloping fixed supply schedule toward more dollars supplied. It does not shift the schedule or move quantity in the opposite direction."
   ],
   [
    "At a floating quote, dollars supplied exceed dollars demanded. Which market pressure follows in the standard model?",
    "Downward pressure on crowns per dollar",
    "Upward pressure on crowns per dollar",
    "No adjustment pressure because every surplus is equilibrium",
    "A surplus gives sellers an incentive to accept a lower price in crowns. Raising the price would worsen the surplus, and unequal quantities do not clear the market."
   ],
   [
    "At a floating quote, dollars demanded exceed dollars supplied. Which market pressure follows in the standard model?",
    "Upward pressure on crowns per dollar",
    "Downward pressure on crowns per dollar",
    "A requirement that both curves shift right immediately",
    "A shortage encourages buyers to bid more crowns per dollar. A lower price worsens it; price adjustment along existing curves does not require those curves to shift."
   ],
   [
    "What defines equilibrium in the competitive market for dollars?",
    "Dollar quantity demanded equals dollar quantity supplied at that rate",
    "Exports must equal imports with every trading partner",
    "The dollar and crown must each have a quote of exactly one",
    "Currency-market clearing concerns quantities at a rate, not bilateral trade balance or numerical parity. Asset and other flows also trade currencies, and equilibrium can occur at many rates."
   ],
   [
    "An investor supplies dollars to obtain crowns. What is the corresponding role in the crown market?",
    "Demanding crowns",
    "Supplying crowns in the same exchange",
    "Neither buying nor selling any currency",
    "A currency exchange has two sides: giving up dollars means acquiring crowns. Calling both sides supply or denying a currency trade contradicts the described exchange."
   ],
   [
    "The dollar appreciates against the crown. On a graph priced in dollars per crown, what happens to the crown's equilibrium price?",
    "It falls",
    "It rises",
    "It is forced to remain at one",
    "A dollar buying more crowns means a crown buys fewer dollars, so the reciprocal price falls. Numerical parity is not required by market clearing."
   ],
   [
    "An original dollar market has Qd=140-20e and Qs=20+20e, with e in crowns per dollar. What equilibrium e makes the quantities equal?",
    "3",
    "4",
    "2",
    "At e=3, demand and supply both equal 80. Increasing or decreasing that rate by one separates the schedules by 40, so those alternatives do not clear the market."
   ],
   [
    "For Qd=140-20e and Qs=20+20e, the equilibrium quote is 3 crowns per dollar. How many millions of dollars are traded per day?",
    "80",
    "100",
    "60",
    "At the stated rate both schedules produce 80 million dollars. An answer 20 above or below that amount disagrees with both the demand and supply schedules."
   ],
   [
    "An original dollar market has Qd=160-20e and Qs=40+20e, with e in crowns per dollar. What equilibrium e makes the quantities equal?",
    "3",
    "4",
    "2",
    "At e=3, demand and supply both equal 100. Increasing or decreasing that rate by one separates the schedules by 40, so those alternatives do not clear the market."
   ],
   [
    "For Qd=160-20e and Qs=40+20e, the equilibrium quote is 3 crowns per dollar. How many millions of dollars are traded per day?",
    "100",
    "120",
    "80",
    "At the stated rate both schedules produce 100 million dollars. An answer 20 above or below that amount disagrees with both the demand and supply schedules."
   ],
   [
    "An original dollar market has Qd=180-20e and Qs=20+20e, with e in crowns per dollar. What equilibrium e makes the quantities equal?",
    "4",
    "5",
    "3",
    "At e=4, demand and supply both equal 100. Increasing or decreasing that rate by one separates the schedules by 40, so those alternatives do not clear the market."
   ],
   [
    "For Qd=180-20e and Qs=20+20e, the equilibrium quote is 4 crowns per dollar. How many millions of dollars are traded per day?",
    "100",
    "120",
    "80",
    "At the stated rate both schedules produce 100 million dollars. An answer 20 above or below that amount disagrees with both the demand and supply schedules."
   ],
   [
    "In an original market Qd=160-20e and Qs=20+20e, a posted quote is e=2. What disequilibrium exists in millions of dollars?",
    "A 60 million shortage",
    "A 60 million surplus",
    "No shortage or surplus",
    "Demand is 120 and supply is 60, leaving a 60 million shortage. Reversing the label swaps the larger side, and equal quantities are not present."
   ],
   [
    "In an original market Qd=160-20e and Qs=20+20e, a posted quote is e=4. What disequilibrium exists in millions of dollars?",
    "A 20 million surplus",
    "A 20 million shortage",
    "No shortage or surplus",
    "Demand is 80 and supply is 100, leaving a 20 million surplus. Reversing the label swaps the larger side, and equal quantities are not present."
   ]
  ],
  "check": [
   "A fictional dollar market has Qd=150−30e and Qs=30+30e. What e, in crowns per dollar, clears the market?",
   "2",
   "3",
   "4",
   "Check both schedules at each rate. At e=2, demand and supply are each 90; at 3 or 4 they differ."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "6.3 · Market for dollars",
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
      315,
      61
     ],
     "P9": [
      315,
      56
     ],
     "P10": [
      354,
      61
     ],
     "P11": [
      354,
      56
     ],
     "P12": [
      393,
      61
     ],
     "P13": [
      393,
      56
     ],
     "P14": [
      510,
      61
     ],
     "P15": [
      510,
      56
     ],
     "P16": [
      115,
      61
     ],
     "P17": [
      120,
      61
     ],
     "P18": [
      115,
      100
     ],
     "P19": [
      120,
      100
     ],
     "P20": [
      115,
      126
     ],
     "P21": [
      120,
      126
     ],
     "P22": [
      115,
      152
     ],
     "P23": [
      120,
      152
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
      191
     ],
     "P27": [
      510,
      61
     ],
     "P28": [
      120,
      61
     ],
     "P29": [
      510,
      191
     ],
     "P30": [
      315,
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
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       320,
       27
      ],
      "text": "Dollars (millions per day)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "e: crowns per dollar",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       276,
       41
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "70",
      "col": 0
     },
     {
      "at": [
       354,
       41
      ],
      "text": "80",
      "col": 0
     },
     {
      "at": [
       393,
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
       95
      ],
      "text": "1.5",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "2.5",
      "col": 0
     },
     {
      "at": [
       97,
       147
      ],
      "text": "3.5",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       298,
       108
      ],
      "text": "E0",
      "col": 0
     },
     {
      "at": [
       493.90000000000003,
       81.69999999999999
      ],
      "text": "D0",
      "col": 0
     },
     {
      "at": [
       502.70000000000005,
       181.9
      ],
      "text": "S0",
      "col": 1
     }
    ],
    "circles": [
     {
      "c": "P30",
      "r": 4,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "6.3 · A surplus above the clearing rate",
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
      315,
      61
     ],
     "P9": [
      315,
      56
     ],
     "P10": [
      354,
      61
     ],
     "P11": [
      354,
      56
     ],
     "P12": [
      393,
      61
     ],
     "P13": [
      393,
      56
     ],
     "P14": [
      510,
      61
     ],
     "P15": [
      510,
      56
     ],
     "P16": [
      115,
      61
     ],
     "P17": [
      120,
      61
     ],
     "P18": [
      115,
      100
     ],
     "P19": [
      120,
      100
     ],
     "P20": [
      115,
      126
     ],
     "P21": [
      120,
      126
     ],
     "P22": [
      115,
      152
     ],
     "P23": [
      120,
      152
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
      191
     ],
     "P27": [
      510,
      61
     ],
     "P28": [
      120,
      61
     ],
     "P29": [
      510,
      191
     ],
     "P30": [
      315,
      126
     ],
     "P31": [
      276,
      139
     ],
     "P32": [
      354,
      139
     ],
     "P33": [
      276,
      139
     ],
     "P34": [
      354,
      139
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34",
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
      "v": "P31P32",
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
      "text": "Dollars (millions per day)",
      "col": 0
     },
     {
      "at": [
       180,
       213
      ],
      "text": "e: crowns per dollar",
      "col": 0
     },
     {
      "at": [
       120,
       41
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       276,
       41
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "70",
      "col": 0
     },
     {
      "at": [
       354,
       41
      ],
      "text": "80",
      "col": 0
     },
     {
      "at": [
       393,
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
       95
      ],
      "text": "1.5",
      "col": 0
     },
     {
      "at": [
       97,
       121
      ],
      "text": "2.5",
      "col": 0
     },
     {
      "at": [
       97,
       147
      ],
      "text": "3.5",
      "col": 0
     },
     {
      "at": [
       97,
       186
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       298,
       108
      ],
      "text": "E0",
      "col": 0
     },
     {
      "at": [
       493.90000000000003,
       81.69999999999999
      ],
      "text": "D0",
      "col": 0
     },
     {
      "at": [
       502.70000000000005,
       181.9
      ],
      "text": "S0",
      "col": 1
     },
     {
      "at": [
       299.4,
       166.5
      ],
      "text": "At e = 3: excess supply 20",
      "col": 3
     }
    ],
    "circles": [
     {
      "c": "P30",
      "r": 4,
      "col": 0
     },
     {
      "c": "P33",
      "r": 4,
      "col": 3
     },
     {
      "c": "P34",
      "r": 4,
      "col": 3
     }
    ]
   },
   {
    "t": "setups",
    "title": "6.3 · The same fictional exchange",
    "head": "Quantity or quote",
    "cols": [
     "Dollar market",
     "Crown market"
    ],
    "rows": [
     [
      "Price of traded currency",
      "2.5 crowns/dollar",
      "0.4 dollars/crown"
     ],
     [
      "Millions traded per day",
      "70 dollars",
      "175 crowns"
     ]
    ]
   }
  ],
  "qpics": {
   "10": {
    "t": "setups",
    "title": "Original dollar market",
    "head": "Quote e",
    "cols": [
     "Qd",
     "Qs"
    ],
    "rows": [
     [
      "2",
      "100",
      "60"
     ],
     [
      "3",
      "80",
      "80"
     ],
     [
      "4",
      "60",
      "100"
     ]
    ]
   }
  }
 },
 {
  "code": "6.4",
  "name": "Effect of Changes in Policies and Economic Conditions on the Foreign Exchange Market",
  "skill": "s4",
  "teach": [
   "Use a floating exchange rate and isolate the changed determinant. If foreign residents want more home exports at every exchange rate, dollar demand shifts right: the dollar's crown price rises and the equilibrium dollar quantity rises with unchanged upward-sloping supply. If home residents want more foreign imports at each rate, dollar supply shifts right: the dollar depreciates and the traded quantity rises with demand fixed. Growing home income can raise imports; growing foreign income can raise home exports. These are conditional channels, not rules that ignore every other change.",
   "Relative prices and preferences also matter. Higher home inflation than abroad can make home goods relatively expensive, reducing demand for dollars to buy exports and increasing supply of dollars for imports. Both shifts put downward pressure on crowns per dollar, but their quantity effects oppose each other. In an isolated imports channel, a home tariff that reduces imports can reduce dollar supply and support appreciation. Retaliation, capital flows and income effects can change that result; a tariff is not guaranteed to eliminate a trade deficit.",
   "Trace policy through interest rates rather than jumping from its name to an exchange result. In the standard short-run model, with comparable risk, unchanged expected currency changes and foreign rates fixed, a monetary easing that lowers the domestic real return reduces the attraction of home assets. Net capital inflows tend to fall and the currency tends to depreciate. Fiscal expansion that raises the domestic real interest rate can instead attract capital and support appreciation. If a question does not specify the rate response or other channels, an unconditional exchange prediction is too strong.",
   "Simultaneous shifts need separate price and quantity reasoning. A rise in dollar demand and a fall in dollar supply both raise crowns per dollar, but the traded quantity depends on their relative sizes. If both demand and supply rise, quantity rises while the exchange-rate direction is ambiguous. In an original market Qd=120−20e and Qs=20+20e, adding 40 to demand raises equilibrium e from 2.5 to 3.5 and quantity from 70 to 90. The curve shifts; the new equilibrium is then a movement along the unchanged supply curve."
  ],
  "boards": [
   [
    "Foreign demand for home exports ↑ ⇒ D dollars →",
    "Home demand for imports ↑ ⇒ S dollars →",
    "Specify what remains fixed"
   ],
   [
    "Relatively dearer home goods: D ← and S →",
    "Both shifts lower the price of a dollar",
    "Tariff channel alone is not a full forecast"
   ],
   [
    "Policy → relative return → capital flows",
    "Lower relative return tends to weaken currency",
    "Hold risk and currency expectations fixed"
   ],
   [
    "D ↑ and S ↓: rate ↑; quantity ambiguous",
    "D ↑ and S ↑: quantity ↑; rate ambiguous",
    "Demand +40: e 2.5 → 3.5; Q 70 → 90"
   ]
  ],
  "eqs": [
   "D dollars ↑ ⇒ e ↑; S dollars ↑ ⇒ e ↓, other curve fixed",
   "Relative home prices ↑ ⇒ export demand ↓ and import demand ↑",
   "Domestic real return ↓ relative to abroad ⇒ net inflow tends to fall",
   "160 − 20(3.5) = 20 + 20(3.5) = 90"
  ],
  "questions": [
   [
    "Foreign consumers develop a stronger preference for home exports at every exchange rate. With dollar supply fixed, what happens in the dollar market?",
    "Demand shifts right and the dollar appreciates",
    "Supply shifts right and the dollar depreciates",
    "Demand shifts left and the dollar depreciates",
    "Buying more home exports requires more dollars in the stated channel, raising demand. With supply fixed the dollar's foreign-currency price rises; neither a supply increase nor a demand fall fits."
   ],
   [
    "Home consumers demand more imports at every exchange rate. With dollar demand fixed, which change follows in the dollar market?",
    "Supply shifts right and the dollar depreciates",
    "Demand shifts right and the dollar appreciates",
    "Supply shifts left and the dollar appreciates",
    "Home importers exchange more dollars for foreign currency, increasing dollar supply. That lowers crowns per dollar with demand fixed; the other choices reverse either the curve or its direction."
   ],
   [
    "Foreign income rises and purchases of home exports rise at every quote. Isolating this channel, what happens to demand for dollars?",
    "It increases",
    "It decreases",
    "Only a movement along the old curve occurs",
    "The demand determinant is export purchases at every price, so dollar demand shifts right. A decrease contradicts the purchases, and an unchanged-curve movement would require only the quoted price to change."
   ],
   [
    "Home income rises and its imports rise at every quote. Isolating this channel, what happens to supply of dollars?",
    "It increases",
    "It decreases",
    "It stays fixed because imports never require currency exchange",
    "More imports mean more home dollars exchanged for foreign currency in the stated model. Supply therefore increases; neither reduced supply nor denying the import channel describes it."
   ],
   [
    "Home inflation exceeds foreign inflation and makes home goods relatively dearer. Through trade channels alone, what combination puts downward pressure on the dollar?",
    "Dollar demand falls and dollar supply rises",
    "Dollar demand rises and dollar supply falls",
    "Both dollar demand and dollar supply must stay fixed",
    "Fewer home exports reduce demand for dollars, while more imports increase dollar supply. Both lower its foreign-currency price; the opposite pair supports appreciation instead."
   ],
   [
    "A home tariff reduces imports; ignore retaliation, income and all other changes. What does the isolated payment channel predict for dollars?",
    "Supply falls, supporting appreciation",
    "Supply rises, supporting depreciation",
    "Demand must fall to zero",
    "Fewer imports require fewer dollars exchanged for foreign currency, so dollar supply falls. The opposite supply shift reverses the channel, and nothing makes all dollar demand disappear."
   ],
   [
    "Why does the isolated tariff channel not prove a real-world trade deficit will vanish?",
    "Other responses, capital flows and relative prices also affect the outcome",
    "A tariff always reduces exports and imports to zero",
    "Currency markets never respond to trade restrictions",
    "The isolated model deliberately holds other influences fixed. Actual responses can include retaliation, income and capital flows; neither universal zero trade nor no currency response is justified."
   ],
   [
    "Monetary easing lowers the home real interest rate relative to abroad. With comparable risk and fixed currency expectations, which financial channel is expected?",
    "Lower net capital inflows and downward pressure on the home currency",
    "Higher net capital inflows solely because the return fell",
    "An automatic increase in foreign demand for every home good",
    "The lower relative return weakens the attraction of home assets under the stated assumptions. Higher inflows from that return change reverse the mechanism, and export demand does not automatically rise for every good."
   ],
   [
    "Fiscal expansion raises the home real interest rate with foreign rates, risk and currency expectations fixed. Which capital-flow effect is expected?",
    "More net capital inflow and appreciation pressure",
    "More net capital outflow and depreciation pressure",
    "No investor can change asset holdings",
    "A higher comparable relative return attracts funds and supports the home currency. The opposite flow reverses the incentive; the model does not freeze all investors' portfolios."
   ],
   [
    "Dollar demand increases and dollar supply decreases. What is unambiguous with standard sloping curves?",
    "The crown price of a dollar rises; traded quantity is ambiguous",
    "The crown price falls; traded quantity must rise",
    "Both the rate and quantity must remain unchanged",
    "Both shifts push the price up. Demand growth raises quantity while reduced supply lowers it, so quantity needs relative shift sizes; a falling or unchanged price conflicts with both effects."
   ],
   [
    "Dollar demand and supply both increase. What is unambiguous with standard sloping curves?",
    "Traded dollar quantity rises; the exchange-rate direction is ambiguous",
    "The exchange rate must rise and quantity must fall",
    "Both effects are necessarily zero",
    "Both shifts increase the traded quantity, but demand pushes the price up and supply pushes it down. Without sizes, neither a definite price rise nor zero change is established."
   ],
   [
    "Dollar demand and supply both decrease. What is unambiguous with standard sloping curves?",
    "Traded dollar quantity falls; the exchange-rate direction is ambiguous",
    "Traded dollar quantity rises and the exchange rate must rise",
    "The exchange rate cannot change under any circumstances",
    "Both shifts lower quantity, but reduced demand lowers price while reduced supply raises it. The price needs relative magnitudes; the other choices ignore those competing effects."
   ],
   [
    "A prompt says only that fiscal policy is expansionary and gives no exchange regime, rate response or other conditions. What is the most defensible response?",
    "Specify the channels and assumptions before making a definite exchange-rate forecast",
    "Guarantee the home currency appreciates in every economy",
    "Guarantee the home currency depreciates in every economy",
    "Policy can work through several channels, and the exchange regime and rate response matter. Universal opposite forecasts are both too strong for the information given."
   ],
   [
    "An unexpected improvement in perceived safety raises foreign demand for home assets, all else fixed. What is the direct dollar-market demand effect?",
    "Demand for dollars increases",
    "Demand for dollars decreases",
    "Only the physical supply of domestically produced goods changes",
    "Greater desired home asset purchases increase demand for the dollars used to buy them. Lower dollar demand reverses the premise, and a financial preference is not solely a goods-supply change."
   ],
   [
    "After an isolated shift, an original floating dollar market has Qd=160-20e and Qs=20+20e. What is its equilibrium rate e in crowns per dollar?",
    "3.5",
    "4.5",
    "2.5",
    "Market clearing occurs at e=3.5, where both schedules give Q=90. The requested rate is 3.5; the other values do not satisfy both schedules at their common equilibrium."
   ],
   [
    "After an isolated shift, an original floating dollar market has Qd=160-20e and Qs=20+20e. What is its equilibrium quantity in millions of dollars?",
    "90",
    "110",
    "70",
    "Market clearing occurs at e=3.5, where both schedules give Q=90. The requested quantity is 90; the other values do not satisfy both schedules at their common equilibrium."
   ],
   [
    "After an isolated shift, an original floating dollar market has Qd=120-20e and Qs=60+20e. What is its equilibrium rate e in crowns per dollar?",
    "1.5",
    "2.5",
    "0.5",
    "Market clearing occurs at e=1.5, where both schedules give Q=90. The requested rate is 1.5; the other values do not satisfy both schedules at their common equilibrium."
   ],
   [
    "After an isolated shift, an original floating dollar market has Qd=120-20e and Qs=60+20e. What is its equilibrium quantity in millions of dollars?",
    "90",
    "110",
    "70",
    "Market clearing occurs at e=1.5, where both schedules give Q=90. The requested quantity is 90; the other values do not satisfy both schedules at their common equilibrium."
   ]
  ],
  "pics": [
   [
    {
     "t": "figure",
     "title": "6.4 · Dollar demand increases",
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
       315,
       61
      ],
      "P9": [
       315,
       56
      ],
      "P10": [
       354,
       61
      ],
      "P11": [
       354,
       56
      ],
      "P12": [
       393,
       61
      ],
      "P13": [
       393,
       56
      ],
      "P14": [
       510,
       61
      ],
      "P15": [
       510,
       56
      ],
      "P16": [
       115,
       61
      ],
      "P17": [
       120,
       61
      ],
      "P18": [
       115,
       100
      ],
      "P19": [
       120,
       100
      ],
      "P20": [
       115,
       126
      ],
      "P21": [
       120,
       126
      ],
      "P22": [
       115,
       152
      ],
      "P23": [
       120,
       152
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
       191
      ],
      "P27": [
       510,
       61
      ],
      "P28": [
       120,
       61
      ],
      "P29": [
       510,
       191
      ],
      "P30": [
       315,
       126
      ],
      "P31": [
       276,
       191
      ],
      "P32": [
       510,
       113
      ],
      "P33": [
       393,
       152
      ]
     },
     "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33",
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
       "v": "P31P32",
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
       "text": "Dollars (millions per day)",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "e: crowns per dollar",
       "col": 0
      },
      {
       "at": [
        120,
        41
       ],
       "text": "20",
       "col": 0
      },
      {
       "at": [
        276,
        41
       ],
       "text": "60",
       "col": 0
      },
      {
       "at": [
        315,
        41
       ],
       "text": "70",
       "col": 0
      },
      {
       "at": [
        354,
        41
       ],
       "text": "80",
       "col": 0
      },
      {
       "at": [
        393,
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
        95
       ],
       "text": "1.5",
       "col": 0
      },
      {
       "at": [
        97,
        121
       ],
       "text": "2.5",
       "col": 0
      },
      {
       "at": [
        97,
        147
       ],
       "text": "3.5",
       "col": 0
      },
      {
       "at": [
        97,
        186
       ],
       "text": "5",
       "col": 0
      },
      {
       "at": [
        298,
        108
       ],
       "text": "E0",
       "col": 0
      },
      {
       "at": [
        493.90000000000003,
        81.69999999999999
       ],
       "text": "D0",
       "col": 0
      },
      {
       "at": [
        502.70000000000005,
        181.9
       ],
       "text": "S0",
       "col": 1
      },
      {
       "at": [
        374,
        164
       ],
       "text": "E1",
       "col": 2
      },
      {
       "at": [
        505.70000000000005,
        122.1
       ],
       "text": "D1",
       "col": 2
      }
     ],
     "circles": [
      {
       "c": "P30",
       "r": 4,
       "col": 0
      },
      {
       "c": "P33",
       "r": 4,
       "col": 2
      }
     ]
    },
    {
     "t": "figure",
     "title": "6.4 · Dollar supply increases",
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
       315,
       61
      ],
      "P9": [
       315,
       56
      ],
      "P10": [
       354,
       61
      ],
      "P11": [
       354,
       56
      ],
      "P12": [
       393,
       61
      ],
      "P13": [
       393,
       56
      ],
      "P14": [
       510,
       61
      ],
      "P15": [
       510,
       56
      ],
      "P16": [
       115,
       61
      ],
      "P17": [
       120,
       61
      ],
      "P18": [
       115,
       100
      ],
      "P19": [
       120,
       100
      ],
      "P20": [
       115,
       126
      ],
      "P21": [
       120,
       126
      ],
      "P22": [
       115,
       152
      ],
      "P23": [
       120,
       152
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
       191
      ],
      "P27": [
       510,
       61
      ],
      "P28": [
       120,
       61
      ],
      "P29": [
       510,
       191
      ],
      "P30": [
       315,
       126
      ],
      "P31": [
       276,
       61
      ],
      "P32": [
       510,
       139
      ],
      "P33": [
       393,
       100
      ]
     },
     "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33",
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
       "v": "P31P32",
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
       "text": "Dollars (millions per day)",
       "col": 0
      },
      {
       "at": [
        180,
        213
       ],
       "text": "e: crowns per dollar",
       "col": 0
      },
      {
       "at": [
        120,
        41
       ],
       "text": "20",
       "col": 0
      },
      {
       "at": [
        276,
        41
       ],
       "text": "60",
       "col": 0
      },
      {
       "at": [
        315,
        41
       ],
       "text": "70",
       "col": 0
      },
      {
       "at": [
        354,
        41
       ],
       "text": "80",
       "col": 0
      },
      {
       "at": [
        393,
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
        95
       ],
       "text": "1.5",
       "col": 0
      },
      {
       "at": [
        97,
        121
       ],
       "text": "2.5",
       "col": 0
      },
      {
       "at": [
        97,
        147
       ],
       "text": "3.5",
       "col": 0
      },
      {
       "at": [
        97,
        186
       ],
       "text": "5",
       "col": 0
      },
      {
       "at": [
        298,
        108
       ],
       "text": "E0",
       "col": 0
      },
      {
       "at": [
        493.90000000000003,
        81.69999999999999
       ],
       "text": "D0",
       "col": 0
      },
      {
       "at": [
        502.70000000000005,
        181.9
       ],
       "text": "S0",
       "col": 1
      },
      {
       "at": [
        413,
        110
       ],
       "text": "E1",
       "col": 2
      },
      {
       "at": [
        514.5999999999999,
        141.2
       ],
       "text": "S1",
       "col": 2
      }
     ],
     "circles": [
      {
       "c": "P30",
       "r": 4,
       "col": 0
      },
      {
       "c": "P33",
       "r": 4,
       "col": 2
      }
     ]
    }
   ],
   null,
   {
    "t": "figure",
    "title": "6.4 · Isolate the policy channel",
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
      "text": "Other returns, risk and expected currency changes fixed",
      "col": 0
     },
     {
      "at": [
       160,
       134
      ],
      "text": "Real return ↓",
      "col": 1
     },
     {
      "at": [
       160,
       106
      ],
      "text": "Home vs abroad",
      "col": 1
     },
     {
      "at": [
       332,
       134
      ],
      "text": "Net inflow ↓",
      "col": 2
     },
     {
      "at": [
       332,
       106
      ],
      "text": "Tendency",
      "col": 2
     },
     {
      "at": [
       504,
       134
      ],
      "text": "Currency ↓",
      "col": 3
     },
     {
      "at": [
       504,
       106
      ],
      "text": "Depreciation",
      "col": 3
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "6.4 · Standard sloping curves",
    "head": "Shifts",
    "cols": [
     "Exchange rate",
     "Traded quantity"
    ],
    "rows": [
     [
      "Demand up, supply down",
      "Rises",
      "Ambiguous"
     ],
     [
      "Demand up, supply up",
      "Ambiguous",
      "Rises"
     ],
     [
      "Demand down, supply down",
      "Ambiguous",
      "Falls"
     ]
    ]
   }
  ],
  "boardTitle": "Policies and exchange markets"
 },
 {
  "code": "6.5",
  "name": "Changes in the Foreign Exchange Market and Net Exports",
  "skill": "s5",
  "teach": [
   "Translate the price before predicting purchases. If e is crowns per dollar and rises from 2 to 2.5, a home export with a fixed dollar price of 40 rises from 80 to 100 crowns for foreign buyers. A foreign item fixed at 100 crowns falls from 50 to 40 dollars for home buyers. Dollar appreciation therefore makes home goods dearer abroad and foreign goods cheaper at home under these pricing assumptions. Depreciation reverses the price effects. Do not confuse the seller's unchanged posted price with the buyer's converted price.",
   "In the standard AP model, appreciation tends to reduce export quantity and increase import quantity, lowering net exports and aggregate demand, other determinants fixed. Depreciation tends to do the opposite. This describes a conditional model response, not an immediate guarantee about the measured trade balance. Existing contracts, currency of invoicing, firms' margins and buyers' price responsiveness affect timing and size. With unchanged quantities, a more expensive imported bill can initially worsen a deficit after depreciation. A cheaper export is not automatically a larger export revenue.",
   "Net exports equals exports minus imports measured on a consistent basis. In an original real-spending table, exports fall from 200 to 180 while imports rise from 170 to 190; real net exports changes from +30 to -10, a decline of 40. With other planned spending fixed, aggregate demand shifts left. On an upward-sloping short-run aggregate supply curve, the standard demand-shock model predicts lower real output and price level. This is not a left shift of productive capacity, and it is not a claim that every future price must fall.",
   "Keep initial spending changes separate from total output responses. In a stated fixed-price spending model with a multiplier of 3, an autonomous net-export increase of 12 raises equilibrium output by 36. That calculation assumes the given multiplier already reflects any specified leakages and that there are no additional offsetting changes. In a short-run AD–AS model with price adjustment, the same multiplication alone cannot determine the final output change. Use the model the question supplies and do not count the initial export change twice."
  ],
  "boards": [
   [
    "Dollar export 40: 80 → 100 crowns",
    "Foreign item 100: 50 → 40 dollars",
    "Appreciation changes the buyer price"
   ],
   [
    "Standard model: appreciation lowers real NX",
    "Contracts and responses affect timing",
    "A trade-balance improvement is not instant"
   ],
   [
    "NX: 200 − 170 = 30",
    "Then: 180 − 190 = −10",
    "Change −40 shifts AD left, other spending fixed"
   ],
   [
    "Given multiplier 3; autonomous NX +12",
    "Fixed-price output response = +36",
    "Do not apply this blindly with price adjustment"
   ]
  ],
  "eqs": [
   "Foreign export price = dollar price × e; home import price = crown price ÷ e",
   "e ↑ ⇒ exports tend to fall, imports tend to rise ⇒ real NX and AD tend to fall",
   "ΔNX = (180 − 190) − (200 − 170) = −40",
   "In the stated fixed-price model: ΔY = 3 × 12 = 36"
  ],
  "questions": [
   [
    "The dollar appreciates against the crown while a home export's dollar price stays fixed. What happens to its crown price?",
    "It rises",
    "It falls",
    "It must stay fixed because its dollar price did",
    "Multiplying the same dollar price by more crowns per dollar raises the foreign buyer's price. A fixed seller-currency price does not fix the converted price or make it fall."
   ],
   [
    "The dollar appreciates while a foreign product's crown price stays fixed. What happens to the home buyer's dollar price?",
    "It falls",
    "It rises",
    "It must equal the crown price numerically",
    "Fewer dollars are needed to obtain a fixed crown amount when each dollar buys more crowns. A rise reverses the conversion, and numerical equality would require a one-to-one quote."
   ],
   [
    "In the standard AP trade-response model, home appreciation occurs with other determinants fixed. Which response is expected?",
    "Exports fall, imports rise and net exports fall",
    "Exports rise, imports fall and net exports rise",
    "Both imports and exports must become zero",
    "Home goods become dearer to foreigners and foreign goods cheaper to home buyers. Those price incentives lower net exports under the model; they do not eliminate trade or reverse both responses."
   ],
   [
    "In the standard AP trade-response model, home depreciation occurs with other determinants fixed. Which response is expected?",
    "Exports rise, imports fall and net exports rise",
    "Exports fall, imports rise and net exports fall",
    "Imports and exports must be numerically equal immediately",
    "The standard price-response channel favors home exports and discourages imports, increasing net exports. It neither reverses the incentives nor forces an immediate zero trade balance."
   ],
   [
    "Real net exports falls while other planned spending is fixed. What happens to aggregate demand?",
    "AD shifts left",
    "AD shifts right",
    "Only long-run aggregate supply shifts right",
    "Net exports is a component of planned spending, so its decrease lowers AD. Productive capacity has not been increased, and a rightward AD shift would require more spending."
   ],
   [
    "A fall in real net exports shifts AD left along an unchanged upward-sloping SRAS. What does the short-run model predict?",
    "Lower real output and a lower price level",
    "Higher real output and a higher price level",
    "An automatic rightward shift of LRAS",
    "The new intersection moves down the unchanged SRAS, reducing output and price level. This is a demand change, not an improvement in long-run productive capacity."
   ],
   [
    "A currency depreciates, but import contracts keep quantities fixed immediately and the home-currency import bill rises. What does this illustrate?",
    "The measured trade balance need not improve immediately",
    "The currency must actually have appreciated",
    "Contracts can never affect the timing of trade responses",
    "Price changes can precede quantity responses, so the immediate import bill may rise. That does not reverse the stated depreciation, and contracts can matter for timing."
   ],
   [
    "A cheaper foreign-currency export price leads to more units sold. Is higher total export revenue guaranteed?",
    "No, revenue depends on both price and quantity responses",
    "Yes, any increase in quantity guarantees more revenue",
    "No, because every increase in quantity lowers revenue to zero",
    "Revenue is price times quantity; a lower price can outweigh a quantity increase. Neither a universal increase nor a universal zero follows without magnitudes."
   ],
   [
    "A fixed-price multiplier problem supplies an autonomous net-export change and a multiplier that already includes import leakage. What avoids double-counting?",
    "Apply that multiplier once to the autonomous change",
    "Multiply again by the export change after using the multiplier",
    "Add a second arbitrary import leakage adjustment",
    "The supplied multiplier already represents the model's rounds of spending. Reapplying the initial change or inventing another leakage adjustment changes the specified model rather than solving it."
   ],
   [
    "Why cannot an exchange-rate movement alone determine the exact observed trade balance?",
    "Prices, quantities, other demand changes and timing also matter",
    "Trade balances depend only on the currency's name",
    "Export and import quantities never change",
    "The trade balance combines prices and quantities influenced by multiple conditions. A currency name has no such causal role, and assuming quantities never respond contradicts the stated price-response channel."
   ],
   [
    "A home export keeps a price of 36 dollars. At 2.5 crowns per dollar, what crown price does a foreign buyer pay, ignoring fees?",
    "90",
    "14.4",
    "38.5",
    "A crown bill of 90 divided by the quote 2.5 returns the fixed 36-dollar price. Division in the forward direction or adding the quote does not preserve that price."
   ],
   [
    "A home export keeps a price of 75 dollars. At 1.2 crowns per dollar, what crown price does a foreign buyer pay, ignoring fees?",
    "90",
    "62.5",
    "76.2",
    "A crown bill of 90 divided by the quote 1.2 returns the fixed 75-dollar price. Division in the forward direction or adding the quote does not preserve that price."
   ],
   [
    "A foreign import keeps a price of 126 crowns. At 1.8 crowns per dollar, what dollar price does a home buyer pay, ignoring fees?",
    "70",
    "226.8",
    "127.8",
    "The correct dollar price, 70, buys 126 crowns at the stated quote. Multiplying the crown amount by crowns per dollar or adding the rate gives incompatible units."
   ],
   [
    "A foreign import keeps a price of 180 crowns. At 2.4 crowns per dollar, what dollar price does a home buyer pay, ignoring fees?",
    "75",
    "432",
    "182.4",
    "The correct dollar price, 75, buys 180 crowns at the stated quote. Multiplying the crown amount by crowns per dollar or adding the rate gives incompatible units."
   ],
   [
    "An original real-spending table changes exports/imports from 260/230 to 240/250, all in the same units. What is the signed change in real net exports?",
    "-40",
    "40",
    "-10",
    "Initially net exports is 30; afterward it is -10. The change is -40, which added to the initial balance yields the final balance. The final level alone is not the change."
   ],
   [
    "An original real-spending table changes exports/imports from 150/190 to 180/170, all in the same units. What is the signed change in real net exports?",
    "50",
    "-50",
    "10",
    "Initially net exports is -40; afterward it is 10. The change is 50, which added to the initial balance yields the final balance. The final level alone is not the change."
   ],
   [
    "In a fixed-price model, the given spending multiplier is 4 and autonomous real net exports changes by 15. There are no additional offsets or leakages beyond this multiplier. What is the signed output change?",
    "60",
    "15",
    "-60",
    "The output response must be 4 times the initial change: 60. Dividing that response by 15 recovers the multiplier; the unmultiplied change and reversed sign fail this condition."
   ],
   [
    "In a fixed-price model, the given spending multiplier is 3 and autonomous real net exports changes by -18. There are no additional offsets or leakages beyond this multiplier. What is the signed output change?",
    "-54",
    "-18",
    "54",
    "The output response must be 3 times the initial change: -54. Dividing that response by -18 recovers the multiplier; the unmultiplied change and reversed sign fail this condition."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "6.5 · Appreciation changes buyer prices",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      156,
      140
     ],
     "P1": [
      193,
      140
     ],
     "P2": [
      193,
      60
     ],
     "P3": [
      156,
      60
     ],
     "P4": [
      216,
      160
     ],
     "P5": [
      253,
      160
     ],
     "P6": [
      253,
      60
     ],
     "P7": [
      216,
      60
     ],
     "P8": [
      419,
      110
     ],
     "P9": [
      456,
      110
     ],
     "P10": [
      456,
      60
     ],
     "P11": [
      419,
      60
     ],
     "P12": [
      479,
      100
     ],
     "P13": [
      516,
      100
     ],
     "P14": [
      516,
      60
     ],
     "P15": [
      479,
      60
     ],
     "P16": [
      140,
      60
     ],
     "P17": [
      271,
      60
     ],
     "P18": [
      405,
      60
     ],
     "P19": [
      532,
      60
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
       213
      ],
      "text": "Fictional prices: e rises from 2 to 2.5 crowns/dollar",
      "col": 0
     },
     {
      "at": [
       174.5,
       150
      ],
      "text": "80",
      "col": 0
     },
     {
      "at": [
       174.5,
       39
      ],
      "text": "Old",
      "col": 0
     },
     {
      "at": [
       234.5,
       170
      ],
      "text": "100",
      "col": 2
     },
     {
      "at": [
       234.5,
       39
      ],
      "text": "New",
      "col": 2
     },
     {
      "at": [
       437.5,
       120
      ],
      "text": "50",
      "col": 0
     },
     {
      "at": [
       437.5,
       39
      ],
      "text": "Old",
      "col": 0
     },
     {
      "at": [
       497.5,
       110
      ],
      "text": "40",
      "col": 2
     },
     {
      "at": [
       497.5,
       39
      ],
      "text": "New",
      "col": 2
     },
     {
      "at": [
       205,
       189
      ],
      "text": "Export: crowns paid",
      "col": 0
     },
     {
      "at": [
       466,
       189
      ],
      "text": "Import: dollars paid",
      "col": 0
     }
    ],
    "circles": []
   },
   null,
   {
    "t": "figure",
    "title": "6.5 · Lower net exports shifts AD left",
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
      158.5
     ],
     "P23": [
      510,
      93.5
     ],
     "P24": [
      120,
      126
     ],
     "P25": [
      510,
      61
     ],
     "P26": [
      315,
      126
     ],
     "P27": [
      217.5,
      109.75
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
       297,
       136
      ],
      "text": "E0",
      "col": 0
     },
     {
      "at": [
       199.5,
       119.75
      ],
      "text": "E1",
      "col": 2
     },
     {
      "at": [
       480.75,
       167.5
      ],
      "text": "SRAS",
      "col": 1
     },
     {
      "at": [
       514.625,
       106.5
      ],
      "text": "AD0",
      "col": 0
     },
     {
      "at": [
       514.625,
       72.375
      ],
      "text": "AD1",
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
   null
  ],
  "qpics": {
   "14": {
    "t": "setups",
    "title": "Original real-spending observations",
    "head": "Period",
    "cols": [
     "Exports",
     "Imports"
    ],
    "rows": [
     [
      "Initial",
      "260",
      "230"
     ],
     [
      "Later",
      "240",
      "250"
     ]
    ]
   }
  }
 },
 {
  "code": "6.6",
  "name": "Real Interest Rates and International Capital Flows",
  "skill": "s6",
  "teach": [
   "Investors compare returns with risk, liquidity and expected currency changes. In the simplified AP model, holding those other influences fixed, a higher domestic real interest rate relative to abroad attracts net financial capital inflows. Buyers demand home currency for home assets, and residents may supply less home currency to buy foreign assets; both channels support appreciation. These are financial flows, not shipments of physical machinery. A higher nominal yield caused only by higher expected inflation does not establish a higher real return.",
   "For an asset paying a nominal rate i with expected inflation pi, the exact expected real-rate relationship is (1+r)=(1+i)/(1+pi), with rates written as decimals. Subtracting expected inflation from nominal interest is an approximation commonly used in introductory problems. For nominal interest 8% and expected inflation 3%, the approximation is 5%, while the exact calculation is about 4.85%. State which method is requested and distinguish expected inflation for a planned investment from inflation that is realized afterward.",
   "Capital flows also affect loanable funds. Isolate an exogenous increase in foreign saving offered to domestic borrowers, with domestic investment demand fixed: total funds supply shifts right, tending to lower the domestic real interest rate and raise borrowing for investment. This adjustment can narrow an initial return gap. In an original example, domestic supply is S=20+10r and demand is I=100−10r, with r in percentage points. Without foreign funds, r=4 and I=60. Adding 20 of foreign funds to supply makes r=3 and I=70. An initial higher rate attracting funds and the subsequent downward pressure are different steps, not contradictory claims.",
   "Currency risk can overturn a nominal-yield comparison. Suppose a home investor exchanges 100 dollars at 2 crowns per dollar, earns 5% in crowns, and then converts 210 crowns at an expected 2.1 crowns per dollar. The investment returns only 100 dollars, a zero dollar return before inflation and fees. In an open economy with zero capital transfers and no statistical discrepancy, national saving minus domestic investment equals the current-account balance. With net primary income and current transfers also zero, that balance equals net exports. Identify these assumptions before equating a financial inflow directly with a goods-trade deficit."
  ],
  "boards": [
   [
    "Compare real returns, risk and expectations",
    "Higher relative return tends to attract funds",
    "Financial capital is not a shipment of machines"
   ],
   [
    "Approximate real rate: nominal − expected inflation",
    "Exact: 1 + r = (1 + i)/(1 + pi)",
    "8% and 3%: about 5%, exactly about 4.85%"
   ],
   [
    "Foreign saving adds to total funds supply",
    "Rate 4 → 3; domestic investment 60 → 70",
    "Initial incentive and adjustment are separate"
   ],
   [
    "100 dollars → 200 crowns → 210 crowns",
    "210 crowns ÷ 2.1 = 100 dollars",
    "Saving − investment = CA under stated conditions"
   ]
  ],
  "eqs": [
   "Higher relative real return ⇒ net inflow tends to rise; e tends to rise",
   "(1.08/1.03 − 1) × 100 ≈ 4.85%; subtraction gives about 5%",
   "20 + 10r + 20 = 100 − 10r ⇒ r = 3; I = 70",
   "Home-currency return = (1 + foreign yield) × e_start/e_end − 1"
  ],
  "questions": [
   [
    "Home real interest rates rise relative to abroad while risk and expected currency changes are fixed. What does the simplified AP model predict?",
    "Net capital inflow toward home assets tends to increase",
    "Funds must leave solely because home real returns improved",
    "Physical machines must immediately cross the border instead of financial claims",
    "Higher comparable real returns attract financial funds in the model. Outflow reverses that incentive, and a financial capital flow need not be a shipment of productive equipment."
   ],
   [
    "Home real interest rates fall relative to abroad with other investment conditions fixed. What happens to the attraction of home assets?",
    "It falls, tending to reduce net capital inflows",
    "It rises solely because the relative return fell",
    "It cannot change because only nominal currency names matter",
    "The stated lower relative real return reduces the asset incentive. Increased attraction reverses the mechanism, and currency names do not determine real yields."
   ],
   [
    "Foreign real rates rise while the home real rate, risk and currency expectations stay fixed. Which flow tendency is expected?",
    "Toward foreign assets and away from home assets",
    "Toward home assets solely because foreign returns rose",
    "No relative-return change has occurred",
    "The foreign return has improved relative to the unchanged home return, so funds tend toward foreign assets. The opposite flow and no-change claim both ignore that differential."
   ],
   [
    "A home bond's nominal yield is higher only because expected inflation is higher by the same number of percentage points. Under the subtraction approximation, what happens to its real yield?",
    "It is unchanged",
    "It rises by the full nominal-yield increase",
    "It must become zero",
    "Subtracting the equally increased expected inflation cancels the nominal increase. The starting real yield need not be zero, and treating the nominal change alone as real ignores inflation."
   ],
   [
    "What additional condition is needed for a simple cross-country real-rate comparison to predict capital flows reliably within the model?",
    "Hold differences in risk and expected currency movements fixed",
    "Assume that every foreign bond is risk-free in reality",
    "Ignore the currency in which eventual proceeds are measured",
    "Risk and expected exchange-rate changes affect comparable returns. The model isolates a rate difference by holding them fixed, not by declaring real assets universally safe or ignoring conversion."
   ],
   [
    "Foreign investors increase purchases of home assets using home currency, all else fixed. What is the direct effect in the home currency market?",
    "Home-currency demand increases, supporting appreciation",
    "Home-currency demand falls, supporting depreciation",
    "Home-currency supply must become infinite",
    "Buying more home assets requires more home currency in this channel. Reduced demand reverses the transaction, and no infinite supply follows from additional investment."
   ],
   [
    "Residents substitute home assets for foreign assets and exchange fewer home currency units abroad. What is the direct currency-supply effect?",
    "Home-currency supply falls, supporting appreciation",
    "Home-currency supply rises, supporting depreciation",
    "The exchange market has no supply side",
    "Less outward investment supplies less home currency to obtain foreign currency. With other conditions fixed that supports appreciation, not depreciation or disappearance of the supply side."
   ],
   [
    "An exogenous increase in foreign saving is offered to domestic borrowers while investment demand stays fixed. What happens in the loanable-funds model?",
    "Supply shifts right, lowering the real rate and raising investment",
    "Demand shifts left, raising the real rate and lowering investment",
    "Supply shifts left, lowering the real rate and raising investment",
    "The extra offered funds shift supply right; the new intersection has a lower rate and more investment. Calling the change a demand decrease or a supply decrease misidentifies the side and effects."
   ],
   [
    "How can a high initial real rate attract inflows while those inflows put downward pressure on that rate?",
    "The initial return incentive and subsequent supply adjustment are different steps",
    "The two statements are necessarily contradictory",
    "The inflow must permanently increase the rate in every model",
    "The rate gap can motivate inflows, which then expand available funds and partly narrow it. This is adjustment over stages, not a contradiction or a guaranteed further rate rise."
   ],
   [
    "A foreign asset has a higher local nominal yield, but its currency is expected to depreciate against the investor's currency. What can be concluded without magnitudes?",
    "The converted return may be lower; compare both yield and currency change",
    "The higher local yield guarantees a higher home-currency return",
    "Currency conversion can never affect investment returns",
    "The investor receives and converts foreign-currency proceeds, so an unfavorable rate can offset the yield. Without sizes, neither guaranteed superiority nor irrelevance of conversion is justified."
   ],
   [
    "With zero capital transfers and no statistical discrepancy, which identity links national saving, investment and the current account?",
    "National saving minus domestic investment equals the current-account balance",
    "National saving plus domestic investment always equals zero",
    "Domestic investment is always identical to the goods balance",
    "The resource-account identity relates net lending or borrowing to saving less investment under the assumptions. A sum of zero or equating investment with goods trade has no such basis."
   ],
   [
    "When may the current-account balance in this unit's simplified model be equated with net exports?",
    "When net primary income and net current transfers are both zero",
    "Whenever there is any international financial transaction",
    "Only when every individual firm exports as much as it imports",
    "The current account adds income and current transfers to net exports. Their zero net balances make CA equal NX; financial activity or firm-level trade equality is not the required condition."
   ],
   [
    "Using the subtraction approximation, an asset pays nominal interest 7% with expected inflation 2%. What is its approximate expected real rate?",
    "5%",
    "9%",
    "7%",
    "The nominal rate must be the approximate real rate plus expected inflation: 5 + 2 = 7. Adding inflation or leaving it unadjusted fails that approximation; the exact Fisher ratio is a different calculation."
   ],
   [
    "Using the subtraction approximation, an asset pays nominal interest 9% with expected inflation 4%. What is its approximate expected real rate?",
    "5%",
    "13%",
    "9%",
    "The nominal rate must be the approximate real rate plus expected inflation: 5 + 4 = 9. Adding inflation or leaving it unadjusted fails that approximation; the exact Fisher ratio is a different calculation."
   ],
   [
    "Using the exact Fisher ratio, nominal interest is 10% and expected inflation is 5%. What expected real rate results, rounded to two decimal places?",
    "4.76%",
    "5.00%",
    "15.00%",
    "A real gross factor of about 1.047619, multiplied by the inflation factor 1.05, recovers the nominal factor 1.1. Thus the real rate is 4.76%; subtraction is only approximate and adding inflation has the wrong adjustment."
   ],
   [
    "Using the exact Fisher ratio, nominal interest is 12% and expected inflation is 4%. What expected real rate results, rounded to two decimal places?",
    "7.69%",
    "8.00%",
    "16.00%",
    "A real gross factor of about 1.076923, multiplied by the inflation factor 1.04, recovers the nominal factor 1.12. Thus the real rate is 7.69%; subtraction is only approximate and adding inflation has the wrong adjustment."
   ],
   [
    "An original economy has national saving 210 and domestic investment 250. With zero capital transfers and no statistical discrepancy, what is its current-account balance?",
    "-40",
    "40",
    "460",
    "The balance plus investment must recover saving: -40 + 250 = 210. Reversing the subtraction gives the net financial inflow under the AP convention; adding the two totals is not net lending or borrowing."
   ],
   [
    "An original economy has national saving 310 and domestic investment 270. With zero capital transfers and no statistical discrepancy, what is its current-account balance?",
    "40",
    "-40",
    "580",
    "The balance plus investment must recover saving: 40 + 270 = 310. Reversing the subtraction gives the net financial inflow under the AP convention; adding the two totals is not net lending or borrowing."
   ]
  ],
  "check": [
   "A fictional economy has national saving of 170 and domestic investment of 205. With zero capital transfers, no discrepancy, and zero net primary income and current transfers, what are its CA and inflow-positive AP CFA?",
   "CA −35 and CFA +35",
   "CA +35 and CFA −35",
   "CA −35 and CFA −35",
   "Investment exceeds saving by 35, so the economy uses net foreign funding. CA is −35 and the offsetting AP CFA is +35."
  ],
  "pics": [
   null,
   {
    "t": "setups",
    "title": "6.6 · Nominal 8%, expected inflation 3%",
    "head": "Calculation",
    "cols": [
     "Result"
    ],
    "rows": [
     [
      "Subtraction approximation",
      "5%"
     ],
     [
      "Exact gross-factor ratio",
      "4.85% (rounded)"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "6.6 · Foreign saving adds to funds supply",
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
      109.75
     ],
     "P17": [
      120,
      109.75
     ],
     "P18": [
      115,
      126
     ],
     "P19": [
      120,
      126
     ],
     "P20": [
      115,
      191
     ],
     "P21": [
      120,
      191
     ],
     "P22": [
      120,
      191
     ],
     "P23": [
      510,
      61
     ],
     "P24": [
      120,
      61
     ],
     "P25": [
      510,
      191
     ],
     "P26": [
      217.5,
      61
     ],
     "P27": [
      510,
      158.5
     ],
     "P28": [
      315,
      126
     ],
     "P29": [
      363.75,
      109.75
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
      "text": "20",
      "col": 0
     },
     {
      "at": [
       217.5,
       41
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       315,
       41
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       363.75,
       41
      ],
      "text": "70",
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
       104.75
      ],
      "text": "3",
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
       297,
       136
      ],
      "text": "E0",
      "col": 0
     },
     {
      "at": [
       345.75,
       119.75
      ],
      "text": "E1",
      "col": 2
     },
     {
      "at": [
       499.75,
       67.75
      ],
      "text": "I",
      "col": 0
     },
     {
      "at": [
       509.75,
       181.25
      ],
      "text": "S0",
      "col": 1
     },
     {
      "at": [
       509.75,
       148.75
      ],
      "text": "S1",
      "col": 2
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
   {
    "t": "figure",
    "title": "6.6 · Convert the proceeds, too",
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
      "text": "Fictional investment: 5% crown yield, e changes 2 → 2.1",
      "col": 0
     },
     {
      "at": [
       160,
       134
      ],
      "text": "Start",
      "col": 1
     },
     {
      "at": [
       160,
       106
      ],
      "text": "200 crowns",
      "col": 1
     },
     {
      "at": [
       332,
       134
      ],
      "text": "After interest",
      "col": 2
     },
     {
      "at": [
       332,
       106
      ],
      "text": "210 crowns",
      "col": 2
     },
     {
      "at": [
       504,
       134
      ],
      "text": "Convert back",
      "col": 3
     },
     {
      "at": [
       504,
       106
      ],
      "text": "100 dollars",
      "col": 3
     },
     {
      "at": [
       320,
       42
      ],
      "text": "Start cost: 100 dollars; home-currency return: 0%",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "checkPic": {
   "t": "setups",
   "title": "Fictional economy; no omitted flows",
   "head": "Component",
   "cols": [
    "Amount"
   ],
   "rows": [
    [
     "National saving",
     "170"
    ],
    [
     "Domestic investment",
     "205"
    ]
   ]
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Start with the account definition, sign convention and currency units. Separate a trade or income transaction from financing and from asset revaluation. Reciprocal quotes move in opposite directions but not by equal percentages. Name the currency market before shifting demand or supply, and distinguish a shift from movement along a curve. Trace relative prices and returns through conditional channels while holding the stated influences fixed. Separate a model tendency from an immediate real-world forecast. Use consistent spending measures, exact or approximate real-rate calculations as requested, and saving-investment identities only with their assumptions.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"finance-h-ap-macro-open-economy","subject":"finance","level":5,"grade":9,"standard":"AP Macroeconomics Course and Exam Description, effective Fall 2026, Unit 6, topics 6.1–6.6","title":"Open Economy","goal":"Reconcile international accounts, convert currency quotations and trace policy and return changes through exchange markets, trade and domestic spending.","points":20,"progression":{"requires":["finance-h-ap-macro-long-run-consequences-of-stabilization-policies"],"operations":3,"demand":"Integrate international accounting, reciprocal prices, currency and funds markets, and conditional policy effects using original scenarios and independently solvable data."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
