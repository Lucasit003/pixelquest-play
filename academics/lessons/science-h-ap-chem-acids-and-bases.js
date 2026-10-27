/* Original course unit. Review record: docs/review/lessons/high-completion/ap-chem-u8-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "8.1",
  "name": "Introduction to Acids and Bases",
  "skill": "s1",
  "teach": [
   "A Brønsted–Lowry acid donates a proton, and a base accepts one. In HA + H2O ⇌ H3O+ + A-, HA and A- are a conjugate pair differing by one proton. Water acts as the base here but can donate a proton in another reaction. In dilute aqueous examples, pH = -log[H3O+] and pOH = -log[OH-], using molar concentrations and base-10 logarithms. Thus [H3O+] = 1.0e-3 M gives pH 3.00, while pH 5.00 gives [H3O+] = 1.0e-5 M. Strictly pH uses activity; the concentration approximation is the model used here. Generic species, constants and datasets in this unit are hypothetical unless explicitly identified.",
   "Water autoionization links the two ion concentrations: Kw = [H3O+][OH-]. At 25°C, Kw = 1.0e-14, so pH + pOH = 14.00. If pOH is 3.00, pH is 11.00. Neutrality means equal hydronium and hydroxide concentrations, not an unchanging numerical pH at every temperature. At a stated temperature where pKw = 13.20, neutral pH is 6.60. A lower pH corresponds to more hydronium: changing from pH 5 to pH 3 increases its concentration 100-fold. Do not treat the logarithmic scale as an ordinary linear concentration scale."
  ],
  "boards": [
   [
    "HA donates H+; water accepts it",
    "HA / A- differ by one proton",
    "pH = -log[H3O+]; pOH = -log[OH-]",
    "1.0e-3 M hydronium gives pH 3.00"
   ],
   [
    "At 25°C: Kw 1.0e-14; pH + pOH 14.00",
    "Neutral: [H3O+] equals [OH-]",
    "If pKw is 13.20, neutral pH is 6.60",
    "Two pH units represent a 100-fold ratio"
   ]
  ],
  "eqs": [
   "HA + H2O ⇌ H3O+ + A-",
   "pH + pOH = pKw; neutral pH = pKw/2"
  ],
  "questions": [
   [
    "In HA + H2O ⇌ H3O+ + A-, which species donates a proton in the forward reaction?",
    "HA",
    "A-",
    "H3O+",
    "HA loses a proton to water in the forward reaction; the products are hydronium and the conjugate base A-."
   ],
   [
    "Which is the conjugate base of H2PO4- after it donates one proton?",
    "HPO4^2-",
    "PO4^3-",
    "H3PO4",
    "Removing one H+ lowers the hydrogen count by one and makes the charge one unit more negative."
   ],
   [
    "Using the dilute-solution model, what is pH when [H3O+] = 1.0e-4 M?",
    "4.00",
    "10.00",
    "-4.00",
    "Taking the negative base-10 logarithm of 1.0e-4 gives pH 4.00; pH is not the exponent itself."
   ],
   [
    "Using the dilute-solution model, what [H3O+] corresponds to pH 6.00?",
    "1.0e-6 M",
    "1.0e6 M",
    "6.0 M",
    "Invert the logarithm: [H3O+] = 10^(-pH) = 1.0e-6 M for the stated concentration approximation."
   ],
   [
    "At 25°C, a solution has pOH 4.00. What is its pH?",
    "10.00",
    "4.00",
    "18.00",
    "At 25°C, pH + pOH = 14.00, so pH is 14.00 - 4.00 = 10.00."
   ],
   [
    "At 25°C, [H3O+] = 2.0e-5 M. What is [OH-] in the concentration model?",
    "5.0e-10 M",
    "2.0e-9 M",
    "5.0e-5 M",
    "The product is 1.0e-14, so [OH-] = 1.0e-14/(2.0e-5) = 5.0e-10 M."
   ],
   [
    "At a temperature where pKw = 13.60, what is the pH of a neutral solution in the concentration model?",
    "6.80",
    "7.00",
    "13.60",
    "Equal ion concentrations mean equal pH and pOH, each half of pKw: 13.60/2 = 6.80."
   ],
   [
    "A solution changes from pH 5.00 to pH 2.00. By what factor does its hydronium concentration increase in the dilute model?",
    "1000",
    "3",
    "100",
    "A three-unit pH decrease means a factor of 10^3 increase in hydronium concentration."
   ],
   [
    "Which relation defines an acidic aqueous solution, including at temperatures other than 25°C?",
    "[H3O+] > [OH-]",
    "[H3O+] = [OH-]",
    "[H3O+] < [OH-]",
    "Acidity compares hydronium with hydroxide; the numerical neutral pH changes when Kw changes with temperature."
   ],
   [
    "Water accepts a proton from HA but donates one to NH3. What does this illustrate?",
    "Water can act as either an acid or a base",
    "Water cannot participate in proton transfer",
    "Water is always a strong acid",
    "Water is amphiprotic: its acid or base role depends on the proton-transfer reaction being considered."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Relate pH to ion concentrations",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      100,
      139
     ],
     "P1": [
      545,
      139
     ],
     "P2": [
      144,
      139
     ],
     "P3": [
      320,
      139
     ],
     "P4": [
      496,
      139
     ]
    },
    "hide": "P0P1P2P3P4",
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
       144,
       170
      ],
      "text": "pH 3",
      "col": 1
     },
     {
      "at": [
       144,
       103
      ],
      "text": "H3O+ 1.0e-3 M",
      "col": 1
     },
     {
      "at": [
       144,
       78
      ],
      "text": "OH- 1.0e-11 M",
      "col": 1
     },
     {
      "at": [
       320,
       170
      ],
      "text": "pH 7",
      "col": 0
     },
     {
      "at": [
       320,
       103
      ],
      "text": "H3O+ 1.0e-7 M",
      "col": 0
     },
     {
      "at": [
       320,
       78
      ],
      "text": "OH- 1.0e-7 M",
      "col": 0
     },
     {
      "at": [
       496,
       170
      ],
      "text": "pH 11",
      "col": 2
     },
     {
      "at": [
       496,
       103
      ],
      "text": "H3O+ 1.0e-11 M",
      "col": 2
     },
     {
      "at": [
       496,
       78
      ],
      "text": "OH- 1.0e-3 M",
      "col": 2
     },
     {
      "at": [
       320,
       214
      ],
      "text": "25°C · dilute concentration model",
      "col": 0
     },
     {
      "at": [
       320,
       39
      ],
      "text": "Each +1 pH step divides [H3O+] by 10",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P2",
      "r": 7,
      "col": 1
     },
     {
      "c": "P3",
      "r": 7,
      "col": 0
     },
     {
      "c": "P4",
      "r": 7,
      "col": 2
     }
    ]
   },
   null
  ]
 },
 {
  "code": "8.2",
  "name": "pH and pOH of Strong Acids and Bases",
  "skill": "s2",
  "teach": [
   "A dissolved strong monoprotic acid such as HCl transfers essentially all of its acidic protons to water in the usual dilute introductory model. When the acid concentration is much larger than the hydronium contribution from water, [H3O+] is approximately the analytical acid concentration. For 0.020 M HCl, pH = -log(0.020) = 1.70. Strength describes ionization behavior; concentration describes amount per volume. A dilute strong acid can have less hydronium than a concentrated weak acid. Do not apply [H3O+] = C blindly to an extremely dilute acid near or below 1.0e-7 M at 25°C: water matters.",
   "A dissolved strong hydroxide base supplies hydroxide according to its formula. Fully dissolved 0.0040 M Ba(OH)2 supplies approximately 0.0080 M OH-, giving pOH 2.10 and pH 11.90 at 25°C. Complete dissociation of the dissolved portion does not imply unlimited solubility of every hydroxide. Dilution preserves solute moles: diluting 10.0 mL of 0.10 M HCl to a total of 100.0 mL gives 0.010 M HCl and pH 2.00. Use final volume, count hydroxide or acid equivalents correctly, and avoid assuming every proton of every polyprotic acid dissociates completely."
  ],
  "boards": [
   [
    "Strong monoprotic acid: [H3O+] ≈ C",
    "0.020 M HCl gives pH 1.70",
    "Strength and concentration describe different things",
    "Near pure-water ion levels, include water"
   ],
   [
    "Ba(OH)2 supplies two OH- per dissolved formula unit",
    "0.0040 M base gives 0.0080 M OH-",
    "At 25°C: pOH 2.10; pH 11.90",
    "Dilution conserves moles: C1V1 = C2V2"
   ]
  ],
  "eqs": [
   "pH ≈ -log C for sufficiently concentrated strong monoprotic acid",
   "[OH-] ≈ 2 C for fully dissolved Ba(OH)2"
  ],
  "questions": [
   [
    "Neglecting water autoionization, what is the pH of 0.0010 M HCl?",
    "3.00",
    "11.00",
    "1.00",
    "HCl is a strong monoprotic acid; [H3O+] is approximately 0.0010 M, whose negative logarithm is 3.00."
   ],
   [
    "At 25°C, what is the pH of 0.0010 M NaOH when its dissociation is complete and water is negligible?",
    "11.00",
    "3.00",
    "13.00",
    "NaOH supplies 0.0010 M OH-, so pOH is 3.00 and pH is 14.00 - 3.00 = 11.00."
   ],
   [
    "A solution contains fully dissolved 0.0030 M Ba(OH)2. Neglecting water, what is [OH-]?",
    "0.0060 M",
    "0.0030 M",
    "0.0015 M",
    "Each dissolved formula unit releases two hydroxide ions, so the hydroxide concentration is twice the base concentration."
   ],
   [
    "At 25°C, fully dissolved 0.0050 M Ba(OH)2 supplies hydroxide. What is its approximate pH?",
    "12.00",
    "2.00",
    "11.70",
    "The hydroxide concentration is 0.010 M, giving pOH 2.00 and pH 12.00 at 25°C."
   ],
   [
    "A 20.0 mL sample of 0.030 M HCl is diluted to 120.0 mL total volume. Neglecting water, what is [H3O+]?",
    "0.0050 M",
    "0.0060 M",
    "0.180 M",
    "The acid amount stays 0.00060 mol; dividing by the final 0.1200 L gives 0.0050 M."
   ],
   [
    "A strong monoprotic acid is diluted tenfold while remaining far above the water-ion background. What happens to its pH?",
    "It increases by about 1",
    "It decreases by about 1",
    "It is multiplied by 10",
    "Tenfold dilution reduces hydronium by a factor of ten, so its negative logarithm increases by one."
   ],
   [
    "What does calling HCl a strong acid describe?",
    "Its nearly complete proton transfer to water under ordinary dilute conditions",
    "A requirement that every HCl solution be concentrated",
    "A requirement that its pH always equal zero",
    "Acid strength concerns ionization equilibrium, whereas concentration can be chosen independently by dilution."
   ],
   [
    "Why is pH = 8.00 an invalid prediction for pure water containing only 1.0e-8 M added HCl at 25°C?",
    "It neglects water autoionization and would incorrectly predict a basic solution",
    "HCl becomes a strong base at low concentration",
    "All dilute acid solutions have exactly pH zero",
    "At such low acid concentration, water contributes appreciably; added HCl makes the water slightly acidic, not basic."
   ],
   [
    "What must be specified before using two OH- per formula unit for a sparingly soluble group 2 hydroxide?",
    "The actual dissolved concentration",
    "Only the mass of undissolved solid",
    "Only the color of the container",
    "Hydroxide counts follow the dissolved formula units; a suspension does not mean all added solid has dissolved."
   ],
   [
    "Why should 0.010 M H2SO4 not automatically be treated as exactly 0.020 M hydronium in every calculation?",
    "Its second ionization must be assessed separately",
    "Neither proton can ionize",
    "Every diprotic acid is a strong base",
    "Sulfuric acid has a strong first ionization, while the second has its own equilibrium and need not be complete."
   ]
  ]
 },
 {
  "code": "8.3",
  "name": "Weak Acid and Base Equilibria",
  "skill": "s3",
  "teach": [
   "For a weak monoprotic acid, HA + H2O ⇌ H3O+ + A-, the concentration-model expression is Ka = [H3O+][A-]/[HA]. Starting with only 0.10 M HA and negligible water contribution, let x ionize: [H3O+] = [A-] = x and [HA] = 0.10 - x. For hypothetical Ka = 1.0e-5, assuming x is small gives x ≈ sqrt(Ka C) = 0.0010 M, pH ≈ 3.00 and about 1.0% ionization. The exact positive root is about 0.000995 M, confirming the approximation. Reject a negative concentration root. Weak means incomplete ionization, not a guarantee of a tiny ionized fraction at every dilution.",
   "For B + H2O ⇌ BH+ + OH-, use Kb = [BH+][OH-]/[B]. A hypothetical 0.040 M base with Kb = 1.0e-6 gives [OH-] ≈ 0.00020 M, pOH ≈ 3.70 and pH ≈ 10.30 at 25°C; the 0.5% change supports the small-x approximation. Conjugate partners obey Ka Kb = Kw at the same temperature: Ka = 2.0e-5 gives Kb = 5.0e-10 at 25°C. This explains salt hydrolysis: A- from a weak acid can accept a proton from water, while BH+ from a weak base can donate one. Percent ionization is 100x/C; dilution usually increases that fraction for an isolated weak acid even while [H3O+] decreases."
  ],
  "boards": [
   [
    "HA initially C: equilibrium HA C-x; H3O+ and A- x",
    "Ka = x²/(C-x); check the small-x assumption",
    "C 0.10 M, Ka 1.0e-5: x ≈ 0.0010 M",
    "Ionization about 1.0%; pH about 3.00"
   ],
   [
    "Weak base: solve for OH-, then pOH and pH",
    "C 0.040 M, Kb 1.0e-6: OH- ≈ 0.00020 M",
    "At 25°C: pH about 10.30",
    "Conjugate partners: Ka Kb = Kw"
   ]
  ],
  "eqs": [
   "Ka = x²/(C-x); percent ionization = 100x/C",
   "Kb = [BH+][OH-]/[B]; pKa + pKb = pKw"
  ],
  "questions": [
   [
    "For HA + H2O ⇌ H3O+ + A- in dilute water, which is the Ka expression?",
    "[H3O+][A-]/[HA]",
    "[HA]/([H3O+][A-])",
    "[H3O+][HA]/[A-]",
    "The aqueous products appear in the numerator and HA in the denominator; the solvent water is omitted."
   ],
   [
    "A hypothetical 0.090 M weak acid has Ka = 1.0e-6. With small ionization and negligible water, what is approximate [H3O+]?",
    "3.0e-4 M",
    "9.0e-8 M",
    "0.090 M",
    "The small-x relation gives sqrt(1.0e-6 × 0.090) = 3.0e-4 M; x/C is about 0.33%."
   ],
   [
    "A hypothetical 0.10 M weak acid has Ka = 1.0e-7. With small ionization and negligible water, what is approximate pH?",
    "4.00",
    "7.00",
    "1.00",
    "The predicted hydronium is sqrt(1.0e-8) = 1.0e-4 M, giving pH about 4.00 and only 0.1% ionization."
   ],
   [
    "An initially 0.080 M monoprotic weak acid alone in water produces 0.0016 M hydronium at equilibrium; water is negligible. What percent ionizes?",
    "2.0%",
    "0.20%",
    "20%",
    "Divide the ionized amount by the initial acid concentration: 100 × 0.0016/0.080 = 2.0%."
   ],
   [
    "At 25°C, HA has Ka = 4.0e-6. What is Kb for its conjugate base A-?",
    "2.5e-9",
    "4.0e-20",
    "4.0e8",
    "For the conjugate pair, Kb = Kw/Ka = 1.0e-14/(4.0e-6) = 2.5e-9."
   ],
   [
    "At 25°C, a conjugate acid has pKa 5.20. What is its conjugate base pKb?",
    "8.80",
    "5.20",
    "19.20",
    "The two logarithmic constants sum to pKw = 14.00 at 25°C, so pKb = 14.00 - 5.20 = 8.80."
   ],
   [
    "For B + H2O ⇌ BH+ + OH-, which expression is Kb?",
    "[BH+][OH-]/[B]",
    "[B]/([BH+][OH-])",
    "[BH+][H3O+]/[B]",
    "Base ionization produces BH+ and hydroxide; both product concentrations divide by the remaining B concentration."
   ],
   [
    "At 25°C, a hypothetical 0.020 M weak base has Kb = 5.0e-7. With small ionization, what is approximate pH?",
    "10.00",
    "4.00",
    "7.00",
    "The hydroxide concentration is approximately sqrt(1.0e-8) = 1.0e-4 M; pOH 4.00 gives pH 10.00."
   ],
   [
    "A proposed small-x solution gives x/C = 0.30 for a weak acid. What should be done?",
    "Solve without neglecting x in C-x",
    "Treat 30% as negligible automatically",
    "Replace Ka with the initial concentration",
    "A 30% change substantially alters the denominator, so the small-change approximation is not justified."
   ],
   [
    "An isolated weak acid is diluted in a range where water autoionization stays negligible. What typically happens?",
    "Percent ionization increases while [H3O+] decreases",
    "Percent ionization and [H3O+] both increase",
    "Ka necessarily decreases because of dilution",
    "At fixed temperature Ka stays constant; dilution favors a larger dissociated fraction, but fewer hydronium ions per volume."
   ],
   [
    "Why can an aqueous sodium salt of a weak monoprotic acid be basic?",
    "Its anion accepts a proton from water and forms OH-",
    "Na+ must donate a proton",
    "Every salt is neutral in water",
    "The weak acid conjugate base can hydrolyze: A- + H2O ⇌ HA + OH-, making the solution basic."
   ],
   [
    "At 25°C, a hypothetical weak base has Kb = 1.0e-5. What is its pKb?",
    "5.00",
    "9.00",
    "-5.00",
    "The definition is pKb = -log Kb, so the negative logarithm of 1.0e-5 is 5.00."
   ]
  ],
  "check": [
   "At 25°C, a hypothetical acid has Ka = 2.0e-8. What is Kb of its conjugate base?",
   "5.0e-7",
   "2.0e-22",
   "5.0e7",
   "Use the same-temperature product Ka Kb = 1.0e-14, giving Kb = 5.0e-7."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Weak acid: conserve amount before approximating",
    "head": "Stage",
    "cols": [
     "HA (M)",
     "H3O+ (M)",
     "A- (M)"
    ],
    "rows": [
     [
      "Initial",
      "0.10",
      "Negligible",
      "0"
     ],
     [
      "Change",
      "-x",
      "+x",
      "+x"
     ],
     [
      "Equilibrium",
      "0.10 - x",
      "x",
      "x"
     ]
    ]
   },
   null
  ]
 },
 {
  "code": "8.4",
  "name": "Acid-Base Reactions and Buffers",
  "skill": "s4",
  "teach": [
   "For mixtures, account for the dominant proton-transfer reaction in moles before calculating concentrations or equilibrium. Mixing 30.0 mL of 0.10 M HCl with 20.0 mL of 0.10 M NaOH leaves 0.0010 mol hydronium in 0.0500 L: approximately 0.020 M, pH 1.70. The net reaction H3O+ + OH- → 2H2O consumes equal amounts. Do not average the starting pH values or subtract molarities when volumes differ. At exact strong-acid/strong-base equivalence, the dilute solution is neutral if spectator ions do not hydrolyze.",
   "Partial neutralization can create a buffer. In the standard stoichiometric approximation, adding 0.0040 mol OH- to 0.0100 mol weak HA leaves 0.0060 mol HA and forms 0.0040 mol A-. Both partners remain. At equivalence, mainly A- is present and its reaction with water controls the basic pH; with excess strong base, leftover OH- usually controls pH. Similarly, partly protonating a weak base B creates a B/BH+ buffer, and its equivalence solution is acidic. A weak acid mixed with a weak base is an equilibrium problem; do not assume arbitrary weak partners react completely. These classifications require the stated conjugate-pair and concentration conditions."
  ],
  "boards": [
   [
    "H3O+ + OH- → 2H2O",
    "Example: 0.0030 mol acid; 0.0020 mol base",
    "Excess hydronium 0.0010 mol in 0.0500 L",
    "[H3O+] 0.020 M; pH 1.70"
   ],
   [
    "HA + OH- → A- + H2O",
    "0.0100 mol HA and 0.0040 mol OH-",
    "Remaining HA 0.0060 mol; formed A- 0.0040 mol",
    "Before / at / after equivalence: different models"
   ]
  ],
  "eqs": [
   "n = CV; excess concentration = excess moles / total volume",
   "B + H3O+ → BH+ + H2O"
  ],
  "questions": [
   [
    "Mix 40.0 mL of 0.10 M HCl and 20.0 mL of 0.10 M NaOH. Assuming additive volumes and negligible water contribution, what [H3O+] remains?",
    "0.0333 M",
    "0.0500 M",
    "0.0667 M",
    "The excess is 0.0040 - 0.0020 = 0.0020 mol in 0.0600 L, or about 0.0333 M."
   ],
   [
    "Mix 10.0 mL of 0.10 M HCl and 30.0 mL of 0.10 M NaOH. Assuming additive volumes, what approximate [OH-] remains?",
    "0.050 M",
    "0.025 M",
    "0.100 M",
    "Base excess is 0.0030 - 0.0010 = 0.0020 mol in 0.0400 L, giving 0.050 M hydroxide."
   ],
   [
    "In the neutralization approximation, 0.012 mol HA reacts with 0.005 mol OH-. How many moles of HA remain?",
    "0.007 mol",
    "0.017 mol",
    "0.005 mol",
    "Each hydroxide neutralizes one HA, so the remaining amount is 0.012 - 0.005 = 0.007 mol."
   ],
   [
    "In the neutralization approximation, 0.012 mol HA reacts with 0.005 mol OH-, starting with no A-. How much A- forms?",
    "0.005 mol",
    "0.012 mol",
    "0.007 mol",
    "One A- forms per hydroxide consumed, so 0.005 mol forms while some HA remains."
   ],
   [
    "What solution can result when a suitable weak monoprotic acid is partially neutralized by strong base?",
    "A buffer containing HA and A-",
    "Only pure water with no solutes",
    "A solution containing only excess strong base",
    "Partial neutralization leaves weak acid and produces its conjugate base, provided appreciable amounts of both remain."
   ],
   [
    "At equivalence in a weak-acid/strong-base titration, why is the solution generally basic at 25°C?",
    "The conjugate base reacts with water to produce OH-",
    "Unreacted strong base must be in stoichiometric excess",
    "The weak acid turns into a strong acid",
    "At equivalence there is no stoichiometric strong-base excess; hydrolysis of the acid conjugate base produces hydroxide."
   ],
   [
    "At equivalence in a weak-base/strong-acid titration, which species causes the acidic character?",
    "The conjugate acid BH+",
    "A mandatory excess of strong acid",
    "The neutral water solvent alone",
    "The weak base has been converted mostly to BH+, which can donate a proton to water."
   ],
   [
    "After a weak acid has been completely neutralized, a substantial excess of strong base is added. What usually controls pH?",
    "The excess hydroxide concentration",
    "The original weak-acid concentration alone",
    "The arithmetic mean of initial pH values",
    "Once strong base is in substantial excess, its remaining moles divided by total volume dominate hydroxide concentration."
   ],
   [
    "Why is subtracting starting molarities unreliable when unequal volumes of acid and base are mixed?",
    "Reaction amounts depend on moles, and total volume changes",
    "Molarity has no connection to amount",
    "Equal molarities always mean equal moles",
    "Use n = CV for each reagent, apply stoichiometry, then divide leftover amount by the final volume."
   ],
   [
    "For HA + B ⇌ A- + BH+, where both initial partners are weak, what determines the extent of proton transfer?",
    "The relevant equilibrium constant and initial amounts",
    "A rule that every weak acid-base mixture reacts completely",
    "Only the order in which the beakers were poured",
    "Weak-partner proton transfer is governed by equilibrium; relative acid strengths and starting composition matter."
   ]
  ]
 },
 {
  "code": "8.5",
  "name": "Acid-Base Titrations",
  "skill": "s5",
  "teach": [
   "A titration curve plots pH against titrant volume. For 25.0 mL of 0.0800 M monoprotic acid titrated with 0.100 M NaOH, equivalence requires 0.00200 mol NaOH, or 20.0 mL. The curve shape also reveals chemistry: strong acid/strong base has a neutral equivalence solution at 25°C, weak acid/strong base a basic one, and weak base/strong acid an acidic one under the usual dilute assumptions. Equivalence means stoichiometric amounts, not necessarily pH 7 or equal volumes. The endpoint is an observed signal, such as an indicator color change, that should occur close to equivalence.",
   "For a weak monoprotic acid titrated by strong base, before equivalence both HA and A- are present; near half-equivalence their concentrations are approximately equal and pH ≈ pKa. If equivalence is at 20.0 mL and the pH at 10.0 mL is 4.60, the inferred pKa is about 4.60. At equivalence use conjugate-base hydrolysis, not a buffer formula with zero HA from the stoichiometric table. Beyond equivalence use excess strong base and the total volume. A weak-base/strong-acid curve falls instead of rises; at its half-equivalence point pH is approximately pKa of BH+, or pOH is approximately pKb of B.",
   "For a hypothetical weak base with pKb 4.70 at 25°C, the conjugate acid has pKa 9.30. Titrating 25.0 mL of 0.0800 M base with 0.100 M strong acid reaches equivalence at 20.0 mL. At 10.0 mL the solution has similar B and BH+ amounts, giving pH about 9.30; at equivalence BH+ hydrolysis produces an acidic solution. The plotted curves use charge and mass balances, including water, so they remain continuous around equivalence. The separate diprotic curve uses invented pKa values 4.00 and 8.00 with the same initial concentration and titrant concentration; its equivalence volumes are 20.0 and 40.0 mL.",
   "A polyprotic acid can have several equivalence points when successive dissociations are sufficiently separated to resolve them. For a diprotic H2A titrated by strong base, the first equivalence corresponds to one mole OH- per mole H2A and the second to two. Between these points HA- and A2- can form a buffer pair. In a well-separated idealized curve, pH near the first half-equivalence estimates pKa1 and pH halfway between the first and second equivalence points estimates pKa2. Not every polyprotic titration displays clearly separated jumps. AP questions here use stoichiometric amounts and qualitative species reasoning, not full polyprotic species-concentration calculations."
  ],
  "boards": [
   [
    "25.0 mL × 0.0800 M acid = 0.00200 mol",
    "NaOH 0.100 M: equivalence at 20.0 mL",
    "Equivalence pH depends on the remaining species",
    "Observed endpoint should be near equivalence"
   ],
   [
    "Weak HA titrated by strong base",
    "Half-equivalence: [HA] ≈ [A-]; pH ≈ pKa",
    "Equivalence: A- hydrolysis sets pH",
    "After equivalence: excess strong base"
   ],
   [
    "Weak B: pKb 4.70; conjugate BH+ pKa 9.30",
    "25.0 mL of 0.0800 M B; acid titrant 0.100 M",
    "At 10.0 mL: pH about 9.30",
    "At 20.0 mL: BH+ hydrolysis makes solution acidic"
   ],
   [
    "H2A consumes one OH- per acid at first equivalence",
    "Second equivalence consumes two OH- per acid",
    "Between: HA- and A2- form a conjugate pair",
    "Distinct jumps require sufficient pKa separation"
   ]
  ],
  "eqs": [
   "At monoprotic equivalence: Cacid Vacid = Cbase Vbase",
   "At half-equivalence: pH ≈ pKa of the relevant acid",
   "At 25°C: pKa(BH+) = 14.00 - pKb(B) = 9.30",
   "H2A + 2OH- → A2- + 2H2O"
  ],
  "questions": [
   [
    "A 30.0 mL monoprotic acid sample requires 24.0 mL of 0.100 M NaOH at equivalence. What was the acid concentration?",
    "0.0800 M",
    "0.125 M",
    "0.0240 M",
    "The NaOH amount is 0.00240 mol, equal to acid moles; dividing by 0.0300 L gives 0.0800 M."
   ],
   [
    "A weak monoprotic acid reaches equivalence after 32.0 mL of strong base. At which volume is its half-equivalence point?",
    "16.0 mL",
    "32.0 mL",
    "64.0 mL",
    "Half the equivalence amount requires half the titrant volume when the titrant concentration stays fixed."
   ],
   [
    "For a weak acid titrated by strong base, pH at half-equivalence is 5.10 in the usual buffer approximation. What is pKa?",
    "5.10",
    "8.90",
    "10.20",
    "At half-equivalence the conjugate concentrations are approximately equal, so pH is approximately pKa."
   ],
   [
    "For HCl titrated with NaOH at 25°C under ideal dilute conditions, what is equivalence pH?",
    "7.00",
    "Always 14.00",
    "Always 1.00",
    "At stoichiometric equivalence the spectator ions do not appreciably hydrolyze, leaving a neutral solution at 25°C."
   ],
   [
    "Which feature distinguishes a typical weak-acid/strong-base curve from a strong-acid/strong-base curve at 25°C?",
    "Its equivalence pH is above 7",
    "Its equivalence always occurs at zero added volume",
    "It cannot have a buffer region",
    "The weak acid conjugate base hydrolyzes at equivalence, giving a basic solution and a buffer region earlier."
   ],
   [
    "In a weak-base/strong-acid titration, what equals pH approximately at half-equivalence?",
    "The pKa of the conjugate acid",
    "The pKb of the base in every case",
    "Always 7.00",
    "The conjugate acid/base concentrations are approximately equal, so pH matches the conjugate acid pKa."
   ],
   [
    "What is the distinction between a titration endpoint and equivalence point?",
    "Endpoint is an observed signal; equivalence is a stoichiometric condition",
    "Both always mean pH 7",
    "Endpoint requires twice the equivalence amount",
    "An indicator change or instrument signal estimates the stoichiometric point; the two can differ experimentally."
   ],
   [
    "A student overshoots a monoprotic acid titration endpoint with extra NaOH and treats that volume as exact equivalence. How is the calculated acid concentration affected?",
    "It is too high",
    "It is too low",
    "It is unchanged for any overshoot",
    "The calculation assigns all recorded base moles to acid, so an excessive volume overestimates the initial acid amount."
   ],
   [
    "A well-resolved diprotic H2A titration has its first equivalence at 12.0 mL. With the same strong-base titrant, where is the second equivalence?",
    "24.0 mL",
    "6.0 mL",
    "12.0 mL",
    "The second equivalence consumes two base equivalents per H2A rather than one, doubling total titrant volume."
   ],
   [
    "In a well-separated diprotic H2A titration, which conjugate pair is important between first and second equivalence?",
    "HA- and A2-",
    "H2A and an unrelated strong base only",
    "Only H3O+ and OH- at equal concentration",
    "The first proton has been largely removed; adding more base converts HA- into its conjugate base A2-."
   ],
   [
    "Why might a polyprotic acid fail to show clearly separate titration jumps?",
    "Its successive dissociation constants may be insufficiently separated",
    "All polyprotic acids are nonreactive",
    "A buret cannot deliver two equivalents",
    "Overlapping dissociation ranges can obscure individual equivalence features even though stoichiometry still applies."
   ],
   [
    "Why cannot the buffer formula use a stoichiometric HA amount of zero exactly at weak-acid/strong-base equivalence?",
    "Hydrolysis equilibrium must establish the small HA and OH- concentrations",
    "Logarithms of zero equal one",
    "The conjugate base ceases to exist",
    "The simple before-equivalence buffer inventory no longer applies; the conjugate base reacts with water at equivalence."
   ],
   [
    "Original titration data: 20.0 mL of weak monoprotic HA requires 30.0 mL of 0.100 M NaOH at equivalence; pH at 15.0 mL is 4.80. What was initial [HA]?",
    "0.150 M",
    "0.0667 M",
    "0.100 M",
    "Equivalence gives 0.00300 mol acid; dividing by the original 0.0200 L yields 0.150 M."
   ],
   [
    "Original titration data: 20.0 mL of weak monoprotic HA requires 30.0 mL of 0.100 M NaOH at equivalence; pH at 15.0 mL is 4.80. What is approximate pKa?",
    "4.80",
    "9.20",
    "2.40",
    "The measured 15.0 mL point is halfway to equivalence, where pH approximately equals the acid pKa."
   ],
   [
    "Original titration data: 20.0 mL of weak monoprotic HA requires 30.0 mL of 0.100 M NaOH at equivalence; pH at 15.0 mL is 4.80. At 25°C, what explains a basic equivalence solution?",
    "A- reacts with water to produce OH-",
    "The recorded equivalence necessarily contains excess NaOH",
    "HA has become a strong acid",
    "The conjugate base formed at equivalence hydrolyzes; basic pH does not require a stoichiometric strong-base excess."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Model: strong acid titrated by strong base",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      100,
      214
     ],
     "P1": [
      100,
      62
     ],
     "P2": [
      100,
      62
     ],
     "P3": [
      566,
      62
     ],
     "P4": [
      100,
      73.29817313397598
     ],
     "P5": [
      102.3,
      73.3787741103489
     ],
     "P6": [
      102.3,
      73.3787741103489
     ],
     "P7": [
      104.6,
      73.45954974620614
     ],
     "P8": [
      104.6,
      73.45954974620614
     ],
     "P9": [
      106.9,
      73.54051382442293
     ],
     "P10": [
      106.9,
      73.54051382442293
     ],
     "P11": [
      109.2,
      73.62168031576664
     ],
     "P12": [
      109.2,
      73.62168031576664
     ],
     "P13": [
      111.5,
      73.70306339427691
     ],
     "P14": [
      111.5,
      73.70306339427691
     ],
     "P15": [
      113.8,
      73.7846774531688
     ],
     "P16": [
      113.8,
      73.7846774531688
     ],
     "P17": [
      116.1,
      73.86653712130573
     ],
     "P18": [
      116.1,
      73.86653712130573
     ],
     "P19": [
      118.4,
      73.94865728029242
     ],
     "P20": [
      118.4,
      73.94865728029242
     ],
     "P21": [
      120.7,
      74.03105308224056
     ],
     "P22": [
      120.7,
      74.03105308224056
     ],
     "P23": [
      123,
      74.11373996826345
     ],
     "P24": [
      123,
      74.11373996826345
     ],
     "P25": [
      125.30000000000001,
      74.1967336877602
     ],
     "P26": [
      125.30000000000001,
      74.1967336877602
     ],
     "P27": [
      127.6,
      74.2800503185534
     ],
     "P28": [
      127.6,
      74.2800503185534
     ],
     "P29": [
      129.9,
      74.36370628794973
     ],
     "P30": [
      129.9,
      74.36370628794973
     ],
     "P31": [
      132.2,
      74.44771839479674
     ],
     "P32": [
      132.2,
      74.44771839479674
     ],
     "P33": [
      134.5,
      74.53210383261651
     ],
     "P34": [
      134.5,
      74.53210383261651
     ],
     "P35": [
      136.8,
      74.61688021390043
     ],
     "P36": [
      136.8,
      74.61688021390043
     ],
     "P37": [
      139.1,
      74.70206559565884
     ],
     "P38": [
      139.1,
      74.70206559565884
     ],
     "P39": [
      141.4,
      74.78767850632426
     ],
     "P40": [
      141.4,
      74.78767850632426
     ],
     "P41": [
      143.7,
      74.87373797411684
     ],
     "P42": [
      143.7,
      74.87373797411684
     ],
     "P43": [
      146,
      74.96026355698854
     ],
     "P44": [
      146,
      74.96026355698854
     ],
     "P45": [
      148.3,
      75.04727537427289
     ],
     "P46": [
      148.3,
      75.04727537427289
     ],
     "P47": [
      150.60000000000002,
      75.13479414017837
     ],
     "P48": [
      150.60000000000002,
      75.13479414017837
     ],
     "P49": [
      152.9,
      75.22284119927497
     ],
     "P50": [
      152.9,
      75.22284119927497
     ],
     "P51": [
      155.2,
      75.31143856413706
     ],
     "P52": [
      155.2,
      75.31143856413706
     ],
     "P53": [
      157.5,
      75.4006089553211
     ],
     "P54": [
      157.5,
      75.4006089553211
     ],
     "P55": [
      159.8,
      75.49037584387196
     ],
     "P56": [
      159.8,
      75.49037584387196
     ],
     "P57": [
      162.1,
      75.58076349657108
     ],
     "P58": [
      162.1,
      75.58076349657108
     ],
     "P59": [
      164.4,
      75.67179702415899
     ],
     "P60": [
      164.4,
      75.67179702415899
     ],
     "P61": [
      166.7,
      75.76350243278804
     ],
     "P62": [
      166.7,
      75.76350243278804
     ],
     "P63": [
      169,
      75.85590667898524
     ],
     "P64": [
      169,
      75.85590667898524
     ],
     "P65": [
      171.3,
      75.94903772843435
     ],
     "P66": [
      171.3,
      75.94903772843435
     ],
     "P67": [
      173.6,
      76.04292461891703
     ],
     "P68": [
      173.6,
      76.04292461891703
     ],
     "P69": [
      175.9,
      76.13759752778716
     ],
     "P70": [
      175.9,
      76.13759752778716
     ],
     "P71": [
      178.2,
      76.23308784439345
     ],
     "P72": [
      178.2,
      76.23308784439345
     ],
     "P73": [
      180.5,
      76.32942824790752
     ],
     "P74": [
      180.5,
      76.32942824790752
     ],
     "P75": [
      182.8,
      76.42665279106569
     ],
     "P76": [
      182.8,
      76.42665279106569
     ],
     "P77": [
      185.1,
      76.52479699038764
     ],
     "P78": [
      185.1,
      76.52479699038764
     ],
     "P79": [
      187.4,
      76.62389792349782
     ],
     "P80": [
      187.4,
      76.62389792349782
     ],
     "P81": [
      189.7,
      76.72399433424806
     ],
     "P82": [
      189.7,
      76.72399433424806
     ],
     "P83": [
      192,
      76.82512674641788
     ],
     "P84": [
      192,
      76.82512674641788
     ],
     "P85": [
      194.29999999999998,
      76.92733758686308
     ],
     "P86": [
      194.29999999999998,
      76.92733758686308
     ],
     "P87": [
      196.6,
      77.03067131908477
     ],
     "P88": [
      196.6,
      77.03067131908477
     ],
     "P89": [
      198.9,
      77.13517458831086
     ],
     "P90": [
      198.9,
      77.13517458831086
     ],
     "P91": [
      201.20000000000002,
      77.24089637931624
     ],
     "P92": [
      201.20000000000002,
      77.24089637931624
     ],
     "P93": [
      203.5,
      77.34788818836279
     ],
     "P94": [
      203.5,
      77.34788818836279
     ],
     "P95": [
      205.8,
      77.45620421081776
     ],
     "P96": [
      205.8,
      77.45620421081776
     ],
     "P97": [
      208.1,
      77.5659015462125
     ],
     "P98": [
      208.1,
      77.5659015462125
     ],
     "P99": [
      210.4,
      77.67704042273866
     ],
     "P100": [
      210.4,
      77.67704042273866
     ],
     "P101": [
      212.7,
      77.78968444344997
     ],
     "P102": [
      212.7,
      77.78968444344997
     ],
     "P103": [
      215,
      77.90390085675304
     ],
     "P104": [
      215,
      77.90390085675304
     ],
     "P105": [
      217.3,
      78.01976085413435
     ],
     "P106": [
      217.3,
      78.01976085413435
     ],
     "P107": [
      219.6,
      78.13733989849723
     ],
     "P108": [
      219.6,
      78.13733989849723
     ],
     "P109": [
      221.9,
      78.25671808697956
     ],
     "P110": [
      221.9,
      78.25671808697956
     ],
     "P111": [
      224.2,
      78.37798055270497
     ],
     "P112": [
      224.2,
      78.37798055270497
     ],
     "P113": [
      226.5,
      78.50121791060644
     ],
     "P114": [
      226.5,
      78.50121791060644
     ],
     "P115": [
      228.8,
      78.62652675326916
     ],
     "P116": [
      228.8,
      78.62652675326916
     ],
     "P117": [
      231.1,
      78.7540102036964
     ],
     "P118": [
      231.1,
      78.7540102036964
     ],
     "P119": [
      233.4,
      78.88377853304013
     ],
     "P120": [
      233.4,
      78.88377853304013
     ],
     "P121": [
      235.7,
      79.01594985269486
     ],
     "P122": [
      235.7,
      79.01594985269486
     ],
     "P123": [
      238,
      79.15065089177733
     ],
     "P124": [
      238,
      79.15065089177733
     ],
     "P125": [
      240.3,
      79.28801787296985
     ],
     "P126": [
      240.3,
      79.28801787296985
     ],
     "P127": [
      242.6,
      79.42819750206448
     ],
     "P128": [
      242.6,
      79.42819750206448
     ],
     "P129": [
      244.9,
      79.57134808941038
     ],
     "P130": [
      244.9,
      79.57134808941038
     ],
     "P131": [
      247.2,
      79.71764082495807
     ],
     "P132": [
      247.2,
      79.71764082495807
     ],
     "P133": [
      249.5,
      79.86726123287448
     ],
     "P134": [
      249.5,
      79.86726123287448
     ],
     "P135": [
      251.8,
      80.0204108369752
     ],
     "P136": [
      251.8,
      80.0204108369752
     ],
     "P137": [
      254.1,
      80.17730907475288
     ],
     "P138": [
      254.1,
      80.17730907475288
     ],
     "P139": [
      256.4,
      80.33819550592233
     ],
     "P140": [
      256.4,
      80.33819550592233
     ],
     "P141": [
      258.7,
      80.50333237161314
     ],
     "P142": [
      258.7,
      80.50333237161314
     ],
     "P143": [
      261,
      80.67300757323241
     ],
     "P144": [
      261,
      80.67300757323241
     ],
     "P145": [
      263.3,
      80.84753815640812
     ],
     "P146": [
      263.3,
      80.84753815640812
     ],
     "P147": [
      265.6,
      81.02727440641812
     ],
     "P148": [
      265.6,
      81.02727440641812
     ],
     "P149": [
      267.9,
      81.21260468861564
     ],
     "P150": [
      267.9,
      81.21260468861564
     ],
     "P151": [
      270.2,
      81.40396120265851
     ],
     "P152": [
      270.2,
      81.40396120265851
     ],
     "P153": [
      272.5,
      81.60182686573074
     ],
     "P154": [
      272.5,
      81.60182686573074
     ],
     "P155": [
      274.8,
      81.80674360148774
     ],
     "P156": [
      274.8,
      81.80674360148774
     ],
     "P157": [
      277.1,
      82.019322393974
     ],
     "P158": [
      277.1,
      82.019322393974
     ],
     "P159": [
      279.4,
      82.24025557765651
     ],
     "P160": [
      279.4,
      82.24025557765651
     ],
     "P161": [
      281.7,
      82.47033198830525
     ],
     "P162": [
      281.7,
      82.47033198830525
     ],
     "P163": [
      284,
      82.7104558130653
     ],
     "P164": [
      284,
      82.7104558130653
     ],
     "P165": [
      286.3,
      82.96167027946231
     ],
     "P166": [
      286.3,
      82.96167027946231
     ],
     "P167": [
      288.59999999999997,
      83.22518775505063
     ],
     "P168": [
      288.59999999999997,
      83.22518775505063
     ],
     "P169": [
      290.90000000000003,
      83.50242845925055
     ],
     "P170": [
      290.90000000000003,
      83.50242845925055
     ],
     "P171": [
      293.2,
      83.79507092482459
     ],
     "P172": [
      293.2,
      83.79507092482459
     ],
     "P173": [
      295.5,
      84.10511876660911
     ],
     "P174": [
      295.5,
      84.10511876660911
     ],
     "P175": [
      297.8,
      84.4349905210643
     ],
     "P176": [
      297.8,
      84.4349905210643
     ],
     "P177": [
      300.09999999999997,
      84.78764283761609
     ],
     "P178": [
      300.09999999999997,
      84.78764283761609
     ],
     "P179": [
      302.40000000000003,
      85.16674307971911
     ],
     "P180": [
      302.40000000000003,
      85.16674307971911
     ],
     "P181": [
      304.7,
      85.57691720667393
     ],
     "P182": [
      304.7,
      85.57691720667393
     ],
     "P183": [
      307,
      86.02411613506297
     ],
     "P184": [
      307,
      86.02411613506297
     ],
     "P185": [
      309.3,
      86.51617578705299
     ],
     "P186": [
      309.3,
      86.51617578705299
     ],
     "P187": [
      311.6,
      87.06370838933157
     ],
     "P188": [
      311.6,
      87.06370838933157
     ],
     "P189": [
      313.9,
      87.6815920676421
     ],
     "P190": [
      313.9,
      87.6815920676421
     ],
     "P191": [
      316.2,
      88.39161649794221
     ],
     "P192": [
      316.2,
      88.39161649794221
     ],
     "P193": [
      318.5,
      89.22756255914754
     ],
     "P194": [
      318.5,
      89.22756255914754
     ],
     "P195": [
      320.8,
      90.24602249462379
     ],
     "P196": [
      320.8,
      90.24602249462379
     ],
     "P197": [
      323.1,
      91.55308668873363
     ],
     "P198": [
      323.1,
      91.55308668873363
     ],
     "P199": [
      325.4,
      93.38693107844475
     ],
     "P200": [
      325.4,
      93.38693107844475
     ],
     "P201": [
      327.7,
      96.507554364393
     ],
     "P202": [
      327.7,
      96.507554364393
     ],
     "P203": [
      329.885,
      109.92700418963545
     ],
     "P204": [
      329.885,
      109.92700418963545
     ],
     "P205": [
      330,
      134.09999999997342
     ],
     "P206": [
      330,
      134.09999999997342
     ],
     "P207": [
      330.115,
      158.2710077872158
     ],
     "P208": [
      330.115,
      158.2710077872158
     ],
     "P209": [
      332.3,
      171.65268330525655
     ],
     "P210": [
      332.3,
      171.65268330525655
     ],
     "P211": [
      334.6,
      174.73354268387513
     ],
     "P212": [
      334.6,
      174.73354268387513
     ],
     "P213": [
      336.9,
      176.52762002534524
     ],
     "P214": [
      336.9,
      176.52762002534524
     ],
     "P215": [
      339.2,
      177.79491245723847
     ],
     "P216": [
      339.2,
      177.79491245723847
     ],
     "P217": [
      341.5,
      178.7735943431452
     ],
     "P218": [
      341.5,
      178.7735943431452
     ],
     "P219": [
      343.8,
      179.56975449269288
     ],
     "P220": [
      343.8,
      179.56975449269288
     ],
     "P221": [
      346.1,
      180.2399835726842
     ],
     "P222": [
      346.1,
      180.2399835726842
     ],
     "P223": [
      348.4,
      180.8180608832435
     ],
     "P224": [
      348.4,
      180.8180608832435
     ],
     "P225": [
      350.7,
      181.32577451892448
     ],
     "P226": [
      350.7,
      181.32577451892448
     ],
     "P227": [
      353,
      181.77800102107147
     ],
     "P228": [
      353,
      181.77800102107147
     ],
     "P229": [
      355.3,
      182.18535102859664
     ],
     "P230": [
      355.3,
      182.18535102859664
     ],
     "P231": [
      357.6,
      182.5556588721313
     ],
     "P232": [
      357.6,
      182.5556588721313
     ],
     "P233": [
      359.9,
      182.89487387257765
     ],
     "P234": [
      359.9,
      182.89487387257765
     ],
     "P235": [
      362.2,
      183.2076203890237
     ],
     "P236": [
      362.2,
      183.2076203890237
     ],
     "P237": [
      364.5,
      183.49756417978912
     ],
     "P238": [
      364.5,
      183.49756417978912
     ],
     "P239": [
      366.8,
      183.7676602838498
     ],
     "P240": [
      366.8,
      183.7676602838498
     ],
     "P241": [
      369.1,
      184.02032562150424
     ],
     "P242": [
      369.1,
      184.02032562150424
     ],
     "P243": [
      371.4,
      184.25756218531671
     ],
     "P244": [
      371.4,
      184.25756218531671
     ],
     "P245": [
      373.7,
      184.48104687926295
     ],
     "P246": [
      373.7,
      184.48104687926295
     ],
     "P247": [
      376,
      184.6921982870556
     ],
     "P248": [
      376,
      184.6921982870556
     ],
     "P249": [
      378.3,
      184.8922271332084
     ],
     "P250": [
      378.3,
      184.8922271332084
     ],
     "P251": [
      380.6,
      185.08217499445806
     ],
     "P252": [
      380.6,
      185.08217499445806
     ],
     "P253": [
      382.9,
      185.26294439899127
     ],
     "P254": [
      382.9,
      185.26294439899127
     ],
     "P255": [
      385.2,
      185.43532251502498
     ],
     "P256": [
      385.2,
      185.43532251502498
     ],
     "P257": [
      387.5,
      185.60000000044732
     ],
     "P258": [
      387.5,
      185.60000000044732
     ],
     "P259": [
      389.8,
      185.75758615326163
     ],
     "P260": [
      389.8,
      185.75758615326163
     ],
     "P261": [
      392.1,
      185.90862120117737
     ],
     "P262": [
      392.1,
      185.90862120117737
     ],
     "P263": [
      394.4,
      186.05358635507912
     ],
     "P264": [
      394.4,
      186.05358635507912
     ],
     "P265": [
      396.7,
      186.19291209751705
     ],
     "P266": [
      396.7,
      186.19291209751705
     ],
     "P267": [
      399,
      186.32698506546598
     ],
     "P268": [
      399,
      186.32698506546598
     ],
     "P269": [
      401.3,
      186.45615380408603
     ],
     "P270": [
      401.3,
      186.45615380408603
     ],
     "P271": [
      403.6,
      186.58073360667123
     ],
     "P272": [
      403.6,
      186.58073360667123
     ],
     "P273": [
      405.9,
      186.70101060959442
     ],
     "P274": [
      405.9,
      186.70101060959442
     ],
     "P275": [
      408.2,
      186.8172452757579
     ],
     "P276": [
      408.2,
      186.8172452757579
     ],
     "P277": [
      410.5,
      186.92967537295527
     ],
     "P278": [
      410.5,
      186.92967537295527
     ],
     "P279": [
      412.8,
      187.0385185325539
     ],
     "P280": [
      412.8,
      187.0385185325539
     ],
     "P281": [
      415.1,
      187.14397445752098
     ],
     "P282": [
      415.1,
      187.14397445752098
     ],
     "P283": [
      417.4,
      187.24622683592293
     ],
     "P284": [
      417.4,
      187.24622683592293
     ],
     "P285": [
      419.7,
      187.34544500581868
     ],
     "P286": [
      419.7,
      187.34544500581868
     ],
     "P287": [
      422,
      187.44178540932523
     ],
     "P288": [
      422,
      187.44178540932523
     ],
     "P289": [
      424.3,
      187.53539286710156
     ],
     "P290": [
      424.3,
      187.53539286710156
     ],
     "P291": [
      426.6,
      187.62640169922406
     ],
     "P292": [
      426.6,
      187.62640169922406
     ],
     "P293": [
      428.9,
      187.71493671414697
     ],
     "P294": [
      428.9,
      187.71493671414697
     ],
     "P295": [
      431.2,
      187.80111408395015
     ],
     "P296": [
      431.2,
      187.80111408395015
     ],
     "P297": [
      433.5,
      187.88504212120952
     ],
     "P298": [
      433.5,
      187.88504212120952
     ],
     "P299": [
      435.8,
      187.96682197046908
     ],
     "P300": [
      435.8,
      187.96682197046908
     ],
     "P301": [
      438.1,
      188.04654822533547
     ],
     "P302": [
      438.1,
      188.04654822533547
     ],
     "P303": [
      440.4,
      188.12430948059347
     ],
     "P304": [
      440.4,
      188.12430948059347
     ],
     "P305": [
      442.7,
      188.20018882738356
     ],
     "P306": [
      442.7,
      188.20018882738356
     ],
     "P307": [
      445,
      188.27426429834463
     ],
     "P308": [
      445,
      188.27426429834463
     ],
     "P309": [
      447.3,
      188.34660926866803
     ],
     "P310": [
      447.3,
      188.34660926866803
     ],
     "P311": [
      449.6,
      188.4172928182016
     ],
     "P312": [
      449.6,
      188.4172928182016
     ],
     "P313": [
      451.9,
      188.48638005905502
     ],
     "P314": [
      451.9,
      188.48638005905502
     ],
     "P315": [
      454.2,
      188.55393243257794
     ],
     "P316": [
      454.2,
      188.55393243257794
     ],
     "P317": [
      456.5,
      188.62000797908178
     ],
     "P318": [
      456.5,
      188.62000797908178
     ],
     "P319": [
      458.8,
      188.68466158325418
     ],
     "P320": [
      458.8,
      188.68466158325418
     ],
     "P321": [
      461.1,
      188.74794519784672
     ],
     "P322": [
      461.1,
      188.74794519784672
     ],
     "P323": [
      463.4,
      188.80990804790457
     ],
     "P324": [
      463.4,
      188.80990804790457
     ],
     "P325": [
      465.7,
      188.87059681753325
     ],
     "P326": [
      465.7,
      188.87059681753325
     ],
     "P327": [
      468,
      188.9300558209648
     ],
     "P328": [
      468,
      188.9300558209648
     ],
     "P329": [
      470.30000000000007,
      188.9883271594801
     ],
     "P330": [
      470.30000000000007,
      188.9883271594801
     ],
     "P331": [
      472.6,
      189.04545086556774
     ],
     "P332": [
      472.6,
      189.04545086556774
     ],
     "P333": [
      474.9,
      189.10146503554532
     ],
     "P334": [
      474.9,
      189.10146503554532
     ],
     "P335": [
      477.19999999999993,
      189.15640595173284
     ],
     "P336": [
      477.19999999999993,
      189.15640595173284
     ],
     "P337": [
      479.5,
      189.21030819515124
     ],
     "P338": [
      479.5,
      189.21030819515124
     ],
     "P339": [
      481.80000000000007,
      189.26320474961335
     ],
     "P340": [
      481.80000000000007,
      189.26320474961335
     ],
     "P341": [
      484.1,
      189.3151270979848
     ],
     "P342": [
      484.1,
      189.3151270979848
     ],
     "P343": [
      486.4,
      189.36610531130998
     ],
     "P344": [
      486.4,
      189.36610531130998
     ],
     "P345": [
      488.69999999999993,
      189.4161681314297
     ],
     "P346": [
      488.69999999999993,
      189.4161681314297
     ],
     "P347": [
      491,
      189.46534304765123
     ],
     "P348": [
      491,
      189.46534304765123
     ],
     "P349": [
      493.30000000000007,
      189.51365636797715
     ],
     "P350": [
      493.30000000000007,
      189.51365636797715
     ],
     "P351": [
      495.6,
      189.56113328535088
     ],
     "P352": [
      495.6,
      189.56113328535088
     ],
     "P353": [
      497.9,
      189.60779793932983
     ],
     "P354": [
      497.9,
      189.60779793932983
     ],
     "P355": [
      500.19999999999993,
      189.65367347356047
     ],
     "P356": [
      500.19999999999993,
      189.65367347356047
     ],
     "P357": [
      502.5,
      189.69878208939357
     ],
     "P358": [
      502.5,
      189.69878208939357
     ],
     "P359": [
      504.80000000000007,
      189.74314509594575
     ],
     "P360": [
      504.80000000000007,
      189.74314509594575
     ],
     "P361": [
      507.1,
      189.78678295688673
     ],
     "P362": [
      507.1,
      189.78678295688673
     ],
     "P363": [
      509.4,
      189.8297153342057
     ],
     "P364": [
      509.4,
      189.8297153342057
     ],
     "P365": [
      511.7,
      189.87196112918764
     ],
     "P366": [
      511.7,
      189.87196112918764
     ],
     "P367": [
      514,
      189.91353852081016
     ],
     "P368": [
      514,
      189.91353852081016
     ],
     "P369": [
      516.3,
      189.95446500175365
     ],
     "P370": [
      516.3,
      189.95446500175365
     ],
     "P371": [
      518.6,
      189.9947574122
     ],
     "P372": [
      518.6,
      189.9947574122
     ],
     "P373": [
      520.9,
      190.0344319715806
     ],
     "P374": [
      520.9,
      190.0344319715806
     ],
     "P375": [
      523.2,
      190.07350430842212
     ],
     "P376": [
      523.2,
      190.07350430842212
     ],
     "P377": [
      525.5,
      190.11198948842372
     ],
     "P378": [
      525.5,
      190.11198948842372
     ],
     "P379": [
      527.8,
      190.14990204089082
     ],
     "P380": [
      527.8,
      190.14990204089082
     ],
     "P381": [
      530.1,
      190.18725598363935
     ],
     "P382": [
      530.1,
      190.18725598363935
     ],
     "P383": [
      532.4,
      190.2240648464749
     ],
     "P384": [
      532.4,
      190.2240648464749
     ],
     "P385": [
      534.7,
      190.26034169334417
     ],
     "P386": [
      534.7,
      190.26034169334417
     ],
     "P387": [
      537,
      190.29609914324695
     ],
     "P388": [
      537,
      190.29609914324695
     ],
     "P389": [
      539.3,
      190.33134938999166
     ],
     "P390": [
      539.3,
      190.33134938999166
     ],
     "P391": [
      541.6,
      190.3661042208695
     ],
     "P392": [
      541.6,
      190.3661042208695
     ],
     "P393": [
      543.9,
      190.40037503431816
     ],
     "P394": [
      543.9,
      190.40037503431816
     ],
     "P395": [
      546.2,
      190.43417285663946
     ],
     "P396": [
      546.2,
      190.43417285663946
     ],
     "P397": [
      548.5,
      190.46750835783087
     ],
     "P398": [
      548.5,
      190.46750835783087
     ],
     "P399": [
      550.8,
      190.5003918665874
     ],
     "P400": [
      550.8,
      190.5003918665874
     ],
     "P401": [
      553.1,
      190.53283338452457
     ],
     "P402": [
      553.1,
      190.53283338452457
     ],
     "P403": [
      555.4,
      190.56484259967092
     ],
     "P404": [
      555.4,
      190.56484259967092
     ],
     "P405": [
      557.7,
      190.59642889927457
     ],
     "P406": [
      557.7,
      190.59642889927457
     ],
     "P407": [
      560,
      190.62760138196484
     ],
     "P408": [
      330,
      212
     ],
     "P409": [
      330,
      62
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323P324P325P326P327P328P329P330P331P332P333P334P335P336P337P338P339P340P341P342P343P344P345P346P347P348P349P350P351P352P353P354P355P356P357P358P359P360P361P362P363P364P365P366P367P368P369P370P371P372P373P374P375P376P377P378P379P380P381P382P383P384P385P386P387P388P389P390P391P392P393P394P395P396P397P398P399P400P401P402P403P404P405P406P407P408P409",
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
     },
     {
      "v": "P76P77",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P78P79",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P80P81",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P82P83",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P84P85",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P86P87",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P88P89",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P90P91",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P92P93",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P94P95",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P96P97",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P98P99",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P100P101",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P102P103",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P104P105",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P106P107",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P108P109",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P110P111",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P112P113",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P114P115",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P116P117",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P118P119",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P120P121",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P122P123",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P124P125",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P126P127",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P128P129",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P130P131",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P132P133",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P134P135",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P136P137",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P138P139",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P140P141",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P142P143",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P144P145",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P146P147",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P148P149",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P150P151",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P152P153",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P154P155",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P156P157",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P158P159",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P160P161",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P162P163",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P164P165",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P166P167",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P168P169",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P170P171",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P172P173",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P174P175",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P176P177",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P178P179",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P180P181",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P182P183",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P184P185",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P186P187",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P188P189",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P190P191",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P192P193",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P194P195",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P196P197",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P198P199",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P200P201",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P202P203",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P204P205",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P206P207",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P208P209",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P210P211",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P212P213",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P214P215",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P216P217",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P218P219",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P220P221",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P222P223",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P224P225",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P226P227",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P228P229",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P230P231",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P232P233",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P234P235",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P236P237",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P238P239",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P240P241",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P242P243",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P244P245",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P246P247",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P248P249",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P250P251",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P252P253",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P254P255",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P256P257",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P258P259",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P260P261",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P262P263",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P264P265",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P266P267",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P268P269",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P270P271",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P272P273",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P274P275",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P276P277",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P278P279",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P280P281",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P282P283",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P284P285",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P286P287",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P288P289",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P290P291",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P292P293",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P294P295",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P296P297",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P298P299",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P300P301",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P302P303",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P304P305",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P306P307",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P308P309",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P310P311",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P312P313",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P314P315",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P316P317",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P318P319",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P320P321",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P322P323",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P324P325",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P326P327",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P328P329",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P330P331",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P332P333",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P334P335",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P336P337",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P338P339",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P340P341",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P342P343",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P344P345",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P346P347",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P348P349",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P350P351",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P352P353",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P354P355",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P356P357",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P358P359",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P360P361",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P362P363",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P364P365",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P366P367",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P368P369",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P370P371",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P372P373",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P374P375",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P376P377",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P378P379",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P380P381",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P382P383",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P384P385",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P386P387",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P388P389",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P390P391",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P392P393",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P394P395",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P396P397",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P398P399",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P400P401",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P402P403",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P404P405",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P406P407",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P408P409",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       53,
       178
      ],
      "text": "pH",
      "col": 0
     },
     {
      "at": [
       76,
       62
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       76,
       103.19999999999999
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       76,
       134.10000000000002
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       76,
       165
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       76,
       206.20000000000002
      ],
      "text": "14",
      "col": 0
     },
     {
      "at": [
       100,
       46
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       215,
       46
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       330,
       46
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       445,
       46
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       560,
       46
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       397,
       29
      ],
      "text": "Added strong base (mL)",
      "col": 0
     },
     {
      "at": [
       322,
       215
      ],
      "text": "Equivalence: 20.0 mL, pH 7.00",
      "col": 2
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Model: weak HA titrated by strong base",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      100,
      214
     ],
     "P1": [
      100,
      62
     ],
     "P2": [
      100,
      62
     ],
     "P3": [
      566,
      62
     ],
     "P4": [
      100,
      91.88940828811855
     ],
     "P5": [
      102.3,
      93.32331685274045
     ],
     "P6": [
      102.3,
      93.32331685274045
     ],
     "P7": [
      104.6,
      94.64119114607266
     ],
     "P8": [
      104.6,
      94.64119114607266
     ],
     "P9": [
      106.9,
      95.7936949460163
     ],
     "P10": [
      106.9,
      95.7936949460163
     ],
     "P11": [
      109.2,
      96.78661265907994
     ],
     "P12": [
      109.2,
      96.78661265907994
     ],
     "P13": [
      111.5,
      97.64556673474965
     ],
     "P14": [
      111.5,
      97.64556673474965
     ],
     "P15": [
      113.8,
      98.39705199793664
     ],
     "P16": [
      113.8,
      98.39705199793664
     ],
     "P17": [
      116.1,
      99.06296361295097
     ],
     "P18": [
      116.1,
      99.06296361295097
     ],
     "P19": [
      118.4,
      99.66024254149286
     ],
     "P20": [
      118.4,
      99.66024254149286
     ],
     "P21": [
      120.7,
      100.20179548497478
     ],
     "P22": [
      120.7,
      100.20179548497478
     ],
     "P23": [
      123,
      100.69749077524432
     ],
     "P24": [
      123,
      100.69749077524432
     ],
     "P25": [
      125.30000000000001,
      101.1549564805822
     ],
     "P26": [
      125.30000000000001,
      101.1549564805822
     ],
     "P27": [
      127.6,
      101.58016876133209
     ],
     "P28": [
      127.6,
      101.58016876133209
     ],
     "P29": [
      129.9,
      101.97787500902453
     ],
     "P30": [
      129.9,
      101.97787500902453
     ],
     "P31": [
      132.2,
      102.3518973971695
     ],
     "P32": [
      132.2,
      102.3518973971695
     ],
     "P33": [
      134.5,
      102.7053521506468
     ],
     "P34": [
      134.5,
      102.7053521506468
     ],
     "P35": [
      136.8,
      103.04080968108008
     ],
     "P36": [
      136.8,
      103.04080968108008
     ],
     "P37": [
      139.1,
      103.36041301207865
     ],
     "P38": [
      139.1,
      103.36041301207865
     ],
     "P39": [
      141.4,
      103.6659664964773
     ],
     "P40": [
      141.4,
      103.6659664964773
     ],
     "P41": [
      143.7,
      103.95900312594628
     ],
     "P42": [
      143.7,
      103.95900312594628
     ],
     "P43": [
      146,
      104.24083622311196
     ],
     "P44": [
      146,
      104.24083622311196
     ],
     "P45": [
      148.3,
      104.51259959916331
     ],
     "P46": [
      148.3,
      104.51259959916331
     ],
     "P47": [
      150.60000000000002,
      104.77527908998547
     ],
     "P48": [
      150.60000000000002,
      104.77527908998547
     ],
     "P49": [
      152.9,
      105.02973757403115
     ],
     "P50": [
      152.9,
      105.02973757403115
     ],
     "P51": [
      155.2,
      105.27673500834948
     ],
     "P52": [
      155.2,
      105.27673500834948
     ],
     "P53": [
      157.5,
      105.5169446179452
     ],
     "P54": [
      157.5,
      105.5169446179452
     ],
     "P55": [
      159.8,
      105.75096608634573
     ],
     "P56": [
      159.8,
      105.75096608634573
     ],
     "P57": [
      162.1,
      105.97933638725257
     ],
     "P58": [
      162.1,
      105.97933638725257
     ],
     "P59": [
      164.4,
      106.2025387449433
     ],
     "P60": [
      164.4,
      106.2025387449433
     ],
     "P61": [
      166.7,
      106.42101009855858
     ],
     "P62": [
      166.7,
      106.42101009855858
     ],
     "P63": [
      169,
      106.63514736139936
     ],
     "P64": [
      169,
      106.63514736139936
     ],
     "P65": [
      171.3,
      106.84531270305541
     ],
     "P66": [
      171.3,
      106.84531270305541
     ],
     "P67": [
      173.6,
      107.05183803406959
     ],
     "P68": [
      173.6,
      107.05183803406959
     ],
     "P69": [
      175.9,
      107.2550288359601
     ],
     "P70": [
      175.9,
      107.2550288359601
     ],
     "P71": [
      178.2,
      107.45516745093346
     ],
     "P72": [
      178.2,
      107.45516745093346
     ],
     "P73": [
      180.5,
      107.65251592344993
     ],
     "P74": [
      180.5,
      107.65251592344993
     ],
     "P75": [
      182.8,
      107.84731846843113
     ],
     "P76": [
      182.8,
      107.84731846843113
     ],
     "P77": [
      185.1,
      108.03980362719972
     ],
     "P78": [
      185.1,
      108.03980362719972
     ],
     "P79": [
      187.4,
      108.23018616137043
     ],
     "P80": [
      187.4,
      108.23018616137043
     ],
     "P81": [
      189.7,
      108.41866872624391
     ],
     "P82": [
      189.7,
      108.41866872624391
     ],
     "P83": [
      192,
      108.60544335830338
     ],
     "P84": [
      192,
      108.60544335830338
     ],
     "P85": [
      194.29999999999998,
      108.79069280582141
     ],
     "P86": [
      194.29999999999998,
      108.79069280582141
     ],
     "P87": [
      196.6,
      108.97459172706425
     ],
     "P88": [
      196.6,
      108.97459172706425
     ],
     "P89": [
      198.9,
      109.15730777692366
     ],
     "P90": [
      198.9,
      109.15730777692366
     ],
     "P91": [
      201.20000000000002,
      109.33900259983827
     ],
     "P92": [
      201.20000000000002,
      109.33900259983827
     ],
     "P93": [
      203.5,
      109.51983274446457
     ],
     "P94": [
      203.5,
      109.51983274446457
     ],
     "P95": [
      205.8,
      109.69995051361357
     ],
     "P96": [
      205.8,
      109.69995051361357
     ],
     "P97": [
      208.1,
      109.87950476141134
     ],
     "P98": [
      208.1,
      109.87950476141134
     ],
     "P99": [
      210.4,
      110.05864164840156
     ],
     "P100": [
      210.4,
      110.05864164840156
     ],
     "P101": [
      212.7,
      110.23750536434616
     ],
     "P102": [
      212.7,
      110.23750536434616
     ],
     "P103": [
      215,
      110.4162388277527
     ],
     "P104": [
      215,
      110.4162388277527
     ],
     "P105": [
      217.3,
      110.59498437064579
     ],
     "P106": [
      217.3,
      110.59498437064579
     ],
     "P107": [
      219.6,
      110.77388441677999
     ],
     "P108": [
      219.6,
      110.77388441677999
     ],
     "P109": [
      221.9,
      110.95308216135538
     ],
     "P110": [
      221.9,
      110.95308216135538
     ],
     "P111": [
      224.2,
      111.13272226034061
     ],
     "P112": [
      224.2,
      111.13272226034061
     ],
     "P113": [
      226.5,
      111.31295153773056
     ],
     "P114": [
      226.5,
      111.31295153773056
     ],
     "P115": [
      228.8,
      111.49391971947793
     ],
     "P116": [
      228.8,
      111.49391971947793
     ],
     "P117": [
      231.1,
      111.675780203454
     ],
     "P118": [
      231.1,
      111.675780203454
     ],
     "P119": [
      233.4,
      111.85869087563628
     ],
     "P120": [
      233.4,
      111.85869087563628
     ],
     "P121": [
      235.7,
      112.04281498382329
     ],
     "P122": [
      235.7,
      112.04281498382329
     ],
     "P123": [
      238,
      112.22832208158036
     ],
     "P124": [
      238,
      112.22832208158036
     ],
     "P125": [
      240.3,
      112.41538905688202
     ],
     "P126": [
      240.3,
      112.41538905688202
     ],
     "P127": [
      242.6,
      112.60420126210954
     ],
     "P128": [
      242.6,
      112.60420126210954
     ],
     "P129": [
      244.9,
      112.79495376478036
     ],
     "P130": [
      244.9,
      112.79495376478036
     ],
     "P131": [
      247.2,
      112.98785274174958
     ],
     "P132": [
      247.2,
      112.98785274174958
     ],
     "P133": [
      249.5,
      113.18311704379147
     ],
     "P134": [
      249.5,
      113.18311704379147
     ],
     "P135": [
      251.8,
      113.3809799626425
     ],
     "P136": [
      251.8,
      113.3809799626425
     ],
     "P137": [
      254.1,
      113.58169123903261
     ],
     "P138": [
      254.1,
      113.58169123903261
     ],
     "P139": [
      256.4,
      113.78551935829654
     ],
     "P140": [
      256.4,
      113.78551935829654
     ],
     "P141": [
      258.7,
      113.99275419029922
     ],
     "P142": [
      258.7,
      113.99275419029922
     ],
     "P143": [
      261,
      114.20371004323985
     ],
     "P144": [
      261,
      114.20371004323985
     ],
     "P145": [
      263.3,
      114.41872921723464
     ],
     "P146": [
      263.3,
      114.41872921723464
     ],
     "P147": [
      265.6,
      114.63818616452494
     ],
     "P148": [
      265.6,
      114.63818616452494
     ],
     "P149": [
      267.9,
      114.86249239021956
     ],
     "P150": [
      267.9,
      114.86249239021956
     ],
     "P151": [
      270.2,
      115.09210226273973
     ],
     "P152": [
      270.2,
      115.09210226273973
     ],
     "P153": [
      272.5,
      115.32751994948183
     ],
     "P154": [
      272.5,
      115.32751994948183
     ],
     "P155": [
      274.8,
      115.56930775472449
     ],
     "P156": [
      274.8,
      115.56930775472449
     ],
     "P157": [
      277.1,
      115.81809621929673
     ],
     "P158": [
      277.1,
      115.81809621929673
     ],
     "P159": [
      279.4,
      116.07459645339242
     ],
     "P160": [
      279.4,
      116.07459645339242
     ],
     "P161": [
      281.7,
      116.33961532747992
     ],
     "P162": [
      281.7,
      116.33961532747992
     ],
     "P163": [
      284,
      116.61407435984802
     ],
     "P164": [
      284,
      116.61407435984802
     ],
     "P165": [
      286.3,
      116.89903344070174
     ],
     "P166": [
      286.3,
      116.89903344070174
     ],
     "P167": [
      288.59999999999997,
      117.19572096466752
     ],
     "P168": [
      288.59999999999997,
      117.19572096466752
     ],
     "P169": [
      290.90000000000003,
      117.50557257337738
     ],
     "P170": [
      290.90000000000003,
      117.50557257337738
     ],
     "P171": [
      293.2,
      117.83028164567315
     ],
     "P172": [
      293.2,
      117.83028164567315
     ],
     "P173": [
      295.5,
      118.17186609309283
     ],
     "P174": [
      295.5,
      118.17186609309283
     ],
     "P175": [
      297.8,
      118.53275822418095
     ],
     "P176": [
      297.8,
      118.53275822418095
     ],
     "P177": [
      300.09999999999997,
      118.91592795846191
     ],
     "P178": [
      300.09999999999997,
      118.91592795846191
     ],
     "P179": [
      302.40000000000003,
      119.32505544767238
     ],
     "P180": [
      302.40000000000003,
      119.32505544767238
     ],
     "P181": [
      304.7,
      119.76477897457022
     ],
     "P182": [
      304.7,
      119.76477897457022
     ],
     "P183": [
      307,
      120.24106132669937
     ],
     "P184": [
      307,
      120.24106132669937
     ],
     "P185": [
      309.3,
      120.76174984921363
     ],
     "P186": [
      309.3,
      120.76174984921363
     ],
     "P187": [
      311.6,
      121.33746773353693
     ],
     "P188": [
      311.6,
      121.33746773353693
     ],
     "P189": [
      313.9,
      121.98310357015609
     ],
     "P190": [
      313.9,
      121.98310357015609
     ],
     "P191": [
      316.2,
      122.72045688291743
     ],
     "P192": [
      316.2,
      122.72045688291743
     ],
     "P193": [
      318.5,
      123.58331746050442
     ],
     "P194": [
      318.5,
      123.58331746050442
     ],
     "P195": [
      320.8,
      124.6282845406044
     ],
     "P196": [
      320.8,
      124.6282845406044
     ],
     "P197": [
      323.1,
      125.96144995723989
     ],
     "P198": [
      323.1,
      125.96144995723989
     ],
     "P199": [
      325.4,
      127.82096649049834
     ],
     "P200": [
      325.4,
      127.82096649049834
     ],
     "P201": [
      327.7,
      130.9665795523872
     ],
     "P202": [
      327.7,
      130.9665795523872
     ],
     "P203": [
      329.885,
      144.22099056832212
     ],
     "P204": [
      329.885,
      144.22099056832212
     ],
     "P205": [
      330,
      151.3420265490475
     ],
     "P206": [
      330,
      151.3420265490475
     ],
     "P207": [
      330.115,
      158.46037916468293
     ],
     "P208": [
      330.115,
      158.46037916468293
     ],
     "P209": [
      332.3,
      171.65318989412364
     ],
     "P210": [
      332.3,
      171.65318989412364
     ],
     "P211": [
      334.6,
      174.7336699077475
     ],
     "P212": [
      334.6,
      174.7336699077475
     ],
     "P213": [
      336.9,
      176.52767681973398
     ],
     "P214": [
      336.9,
      176.52767681973398
     ],
     "P215": [
      339.2,
      177.794944544469
     ],
     "P216": [
      339.2,
      177.794944544469
     ],
     "P217": [
      341.5,
      178.7736149687293
     ],
     "P218": [
      341.5,
      178.7736149687293
     ],
     "P219": [
      343.8,
      179.56976887832116
     ],
     "P220": [
      343.8,
      179.56976887832116
     ],
     "P221": [
      346.1,
      180.23999418748434
     ],
     "P222": [
      346.1,
      180.23999418748434
     ],
     "P223": [
      348.4,
      180.8180690452367
     ],
     "P224": [
      348.4,
      180.8180690452367
     ],
     "P225": [
      350.7,
      181.32578099558856
     ],
     "P226": [
      350.7,
      181.32578099558856
     ],
     "P227": [
      353,
      181.7780062895908
     ],
     "P228": [
      353,
      181.7780062895908
     ],
     "P229": [
      355.3,
      182.18535540127453
     ],
     "P230": [
      355.3,
      182.18535540127453
     ],
     "P231": [
      357.6,
      182.55566256196514
     ],
     "P232": [
      357.6,
      182.55566256196514
     ],
     "P233": [
      359.9,
      182.8948770298445
     ],
     "P234": [
      359.9,
      182.8948770298445
     ],
     "P235": [
      362.2,
      183.2076231227997
     ],
     "P236": [
      362.2,
      183.2076231227997
     ],
     "P237": [
      364.5,
      183.4975665711762
     ],
     "P238": [
      364.5,
      183.4975665711762
     ],
     "P239": [
      366.8,
      183.76766239441253
     ],
     "P240": [
      366.8,
      183.76766239441253
     ],
     "P241": [
      369.1,
      184.0203274988262
     ],
     "P242": [
      369.1,
      184.0203274988262
     ],
     "P243": [
      371.4,
      184.25756386676113
     ],
     "P244": [
      371.4,
      184.25756386676113
     ],
     "P245": [
      373.7,
      184.4810483945814
     ],
     "P246": [
      373.7,
      184.4810483945814
     ],
     "P247": [
      376,
      184.6921996602354
     ],
     "P248": [
      376,
      184.6921996602354
     ],
     "P249": [
      378.3,
      184.89222838380675
     ],
     "P250": [
      378.3,
      184.89222838380675
     ],
     "P251": [
      380.6,
      185.08217613858162
     ],
     "P252": [
      380.6,
      185.08217613858162
     ],
     "P253": [
      382.9,
      185.26294545002673
     ],
     "P254": [
      382.9,
      185.26294545002673
     ],
     "P255": [
      385.2,
      185.43532348419112
     ],
     "P256": [
      385.2,
      185.43532348419112
     ],
     "P257": [
      387.5,
      185.60000089721797
     ],
     "P258": [
      387.5,
      185.60000089721797
     ],
     "P259": [
      389.8,
      185.75758698569297
     ],
     "P260": [
      389.8,
      185.75758698569297
     ],
     "P261": [
      392.1,
      185.90862197616434
     ],
     "P262": [
      392.1,
      185.90862197616434
     ],
     "P263": [
      394.4,
      186.05358707855805
     ],
     "P264": [
      394.4,
      186.05358707855805
     ],
     "P265": [
      396.7,
      186.1929127746269
     ],
     "P266": [
      396.7,
      186.1929127746269
     ],
     "P267": [
      399,
      186.32698570067856
     ],
     "P268": [
      399,
      186.32698570067856
     ],
     "P269": [
      401.3,
      186.45615440131104
     ],
     "P270": [
      401.3,
      186.45615440131104
     ],
     "P271": [
      403.6,
      186.58073416934235
     ],
     "P272": [
      403.6,
      186.58073416934235
     ],
     "P273": [
      405.9,
      186.70101114073958
     ],
     "P274": [
      405.9,
      186.70101114073958
     ],
     "P275": [
      408.2,
      186.81724577805815
     ],
     "P276": [
      408.2,
      186.81724577805815
     ],
     "P277": [
      410.5,
      186.9296758487928
     ],
     "P278": [
      410.5,
      186.9296758487928
     ],
     "P279": [
      412.8,
      187.03851898405307
     ],
     "P280": [
      412.8,
      187.03851898405307
     ],
     "P281": [
      415.1,
      187.1439748865822
     ],
     "P282": [
      415.1,
      187.1439748865822
     ],
     "P283": [
      417.4,
      187.2462272442517
     ],
     "P284": [
      417.4,
      187.2462272442517
     ],
     "P285": [
      419.7,
      187.34544539495
     ],
     "P286": [
      419.7,
      187.34544539495
     ],
     "P287": [
      422,
      187.4417857806444
     ],
     "P288": [
      422,
      187.4417857806444
     ],
     "P289": [
      424.3,
      187.5353932218622
     ],
     "P290": [
      424.3,
      187.5353932218622
     ],
     "P291": [
      426.6,
      187.62640203856333
     ],
     "P292": [
      426.6,
      187.62640203856333
     ],
     "P293": [
      428.9,
      187.71493703909908
     ],
     "P294": [
      428.9,
      187.71493703909908
     ],
     "P295": [
      431.2,
      187.80111439545755
     ],
     "P296": [
      431.2,
      187.80111439545755
     ],
     "P297": [
      433.5,
      187.88504242013312
     ],
     "P298": [
      433.5,
      187.88504242013312
     ],
     "P299": [
      435.8,
      187.96682225759682
     ],
     "P300": [
      435.8,
      187.96682225759682
     ],
     "P301": [
      438.1,
      188.04654850138985
     ],
     "P302": [
      438.1,
      188.04654850138985
     ],
     "P303": [
      440.4,
      188.12430974623848
     ],
     "P304": [
      440.4,
      188.12430974623848
     ],
     "P305": [
      442.7,
      188.20018908323033
     ],
     "P306": [
      442.7,
      188.20018908323033
     ],
     "P307": [
      445,
      188.27426454495657
     ],
     "P308": [
      445,
      188.27426454495657
     ],
     "P309": [
      447.3,
      188.34660950656573
     ],
     "P310": [
      447.3,
      188.34660950656573
     ],
     "P311": [
      449.6,
      188.41729304786642
     ],
     "P312": [
      449.6,
      188.41729304786642
     ],
     "P313": [
      451.9,
      188.48638028093316
     ],
     "P314": [
      451.9,
      188.48638028093316
     ],
     "P315": [
      454.2,
      188.5539326470833
     ],
     "P316": [
      454.2,
      188.5539326470833
     ],
     "P317": [
      456.5,
      188.62000818659902
     ],
     "P318": [
      456.5,
      188.62000818659902
     ],
     "P319": [
      458.8,
      188.68466178414116
     ],
     "P320": [
      458.8,
      188.68466178414116
     ],
     "P321": [
      461.1,
      188.74794539243692
     ],
     "P322": [
      461.1,
      188.74794539243692
     ],
     "P323": [
      463.4,
      188.80990823650905
     ],
     "P324": [
      463.4,
      188.80990823650905
     ],
     "P325": [
      465.7,
      188.87059700044256
     ],
     "P326": [
      465.7,
      188.87059700044256
     ],
     "P327": [
      468,
      188.9300559984507
     ],
     "P328": [
      468,
      188.9300559984507
     ],
     "P329": [
      470.30000000000007,
      188.988327331797
     ],
     "P330": [
      470.30000000000007,
      188.988327331797
     ],
     "P331": [
      472.6,
      189.0454510329541
     ],
     "P332": [
      472.6,
      189.0454510329541
     ],
     "P333": [
      474.9,
      189.10146519822484
     ],
     "P334": [
      474.9,
      189.10146519822484
     ],
     "P335": [
      477.19999999999993,
      189.15640610991568
     ],
     "P336": [
      477.19999999999993,
      189.15640610991568
     ],
     "P337": [
      479.5,
      189.21030834903496
     ],
     "P338": [
      479.5,
      189.21030834903496
     ],
     "P339": [
      481.80000000000007,
      189.263204899384
     ],
     "P340": [
      481.80000000000007,
      189.263204899384
     ],
     "P341": [
      484.1,
      189.31512724381744
     ],
     "P342": [
      484.1,
      189.31512724381744
     ],
     "P343": [
      486.4,
      189.3661054533698
     ],
     "P344": [
      486.4,
      189.3661054533698
     ],
     "P345": [
      488.69999999999993,
      189.41616826987263
     ],
     "P346": [
      488.69999999999993,
      189.41616826987263
     ],
     "P347": [
      491,
      189.4653431826244
     ],
     "P348": [
      491,
      189.4653431826244
     ],
     "P349": [
      493.30000000000007,
      189.5136564996198
     ],
     "P350": [
      493.30000000000007,
      189.5136564996198
     ],
     "P351": [
      495.6,
      189.56113341379464
     ],
     "P352": [
      495.6,
      189.56113341379464
     ],
     "P353": [
      497.9,
      189.60779806469935
     ],
     "P354": [
      497.9,
      189.60779806469935
     ],
     "P355": [
      500.19999999999993,
      189.65367359597394
     ],
     "P356": [
      500.19999999999993,
      189.65367359597394
     ],
     "P357": [
      502.5,
      189.698782208963
     ],
     "P358": [
      502.5,
      189.698782208963
     ],
     "P359": [
      504.80000000000007,
      189.74314521277748
     ],
     "P360": [
      504.80000000000007,
      189.74314521277748
     ],
     "P361": [
      507.1,
      189.7867830710817
     ],
     "P362": [
      507.1,
      189.7867830710817
     ],
     "P363": [
      509.4,
      189.82971544585988
     ],
     "P364": [
      509.4,
      189.82971544585988
     ],
     "P365": [
      511.7,
      189.87196123839223
     ],
     "P366": [
      511.7,
      189.87196123839223
     ],
     "P367": [
      514,
      189.91353862765197
     ],
     "P368": [
      514,
      189.91353862765197
     ],
     "P369": [
      516.3,
      189.9544651063154
     ],
     "P370": [
      516.3,
      189.9544651063154
     ],
     "P371": [
      518.6,
      189.9947575145604
     ],
     "P372": [
      518.6,
      189.9947575145604
     ],
     "P373": [
      520.9,
      190.03443207181482
     ],
     "P374": [
      520.9,
      190.03443207181482
     ],
     "P375": [
      523.2,
      190.07350440660176
     ],
     "P376": [
      523.2,
      190.07350440660176
     ],
     "P377": [
      525.5,
      190.11198958461713
     ],
     "P378": [
      525.5,
      190.11198958461713
     ],
     "P379": [
      527.8,
      190.1499021351633
     ],
     "P380": [
      527.8,
      190.1499021351633
     ],
     "P381": [
      530.1,
      190.1872560760533
     ],
     "P382": [
      530.1,
      190.1872560760533
     ],
     "P383": [
      532.4,
      190.22406493709
     ],
     "P384": [
      532.4,
      190.22406493709
     ],
     "P385": [
      534.7,
      190.26034178221744
     ],
     "P386": [
      534.7,
      190.26034178221744
     ],
     "P387": [
      537,
      190.29609923043301
     ],
     "P388": [
      537,
      190.29609923043301
     ],
     "P389": [
      539.3,
      190.3313494755428
     ],
     "P390": [
      539.3,
      190.3313494755428
     ],
     "P391": [
      541.6,
      190.36610430483583
     ],
     "P392": [
      541.6,
      190.36610430483583
     ],
     "P393": [
      543.9,
      190.4003751167477
     ],
     "P394": [
      543.9,
      190.4003751167477
     ],
     "P395": [
      546.2,
      190.43417293757818
     ],
     "P396": [
      546.2,
      190.43417293757818
     ],
     "P397": [
      548.5,
      190.467508437323
     ],
     "P398": [
      548.5,
      190.467508437323
     ],
     "P399": [
      550.8,
      190.50039194467536
     ],
     "P400": [
      550.8,
      190.50039194467536
     ],
     "P401": [
      553.1,
      190.53283346124903
     ],
     "P402": [
      553.1,
      190.53283346124903
     ],
     "P403": [
      555.4,
      190.56484267507102
     ],
     "P404": [
      555.4,
      190.56484267507102
     ],
     "P405": [
      557.7,
      190.59642897338787
     ],
     "P406": [
      557.7,
      190.59642897338787
     ],
     "P407": [
      560,
      190.62760145482747
     ],
     "P408": [
      330,
      212
     ],
     "P409": [
      330,
      62
     ],
     "P410": [
      215,
      110.4162388277527
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323P324P325P326P327P328P329P330P331P332P333P334P335P336P337P338P339P340P341P342P343P344P345P346P347P348P349P350P351P352P353P354P355P356P357P358P359P360P361P362P363P364P365P366P367P368P369P370P371P372P373P374P375P376P377P378P379P380P381P382P383P384P385P386P387P388P389P390P391P392P393P394P395P396P397P398P399P400P401P402P403P404P405P406P407P408P409P410",
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
     },
     {
      "v": "P76P77",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P78P79",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P80P81",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P82P83",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P84P85",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P86P87",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P88P89",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P90P91",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P92P93",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P94P95",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P96P97",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P98P99",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P100P101",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P102P103",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P104P105",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P106P107",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P108P109",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P110P111",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P112P113",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P114P115",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P116P117",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P118P119",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P120P121",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P122P123",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P124P125",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P126P127",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P128P129",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P130P131",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P132P133",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P134P135",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P136P137",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P138P139",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P140P141",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P142P143",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P144P145",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P146P147",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P148P149",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P150P151",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P152P153",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P154P155",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P156P157",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P158P159",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P160P161",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P162P163",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P164P165",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P166P167",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P168P169",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P170P171",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P172P173",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P174P175",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P176P177",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P178P179",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P180P181",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P182P183",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P184P185",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P186P187",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P188P189",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P190P191",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P192P193",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P194P195",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P196P197",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P198P199",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P200P201",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P202P203",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P204P205",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P206P207",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P208P209",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P210P211",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P212P213",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P214P215",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P216P217",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P218P219",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P220P221",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P222P223",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P224P225",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P226P227",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P228P229",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P230P231",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P232P233",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P234P235",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P236P237",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P238P239",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P240P241",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P242P243",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P244P245",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P246P247",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P248P249",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P250P251",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P252P253",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P254P255",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P256P257",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P258P259",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P260P261",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P262P263",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P264P265",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P266P267",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P268P269",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P270P271",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P272P273",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P274P275",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P276P277",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P278P279",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P280P281",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P282P283",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P284P285",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P286P287",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P288P289",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P290P291",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P292P293",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P294P295",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P296P297",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P298P299",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P300P301",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P302P303",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P304P305",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P306P307",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P308P309",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P310P311",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P312P313",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P314P315",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P316P317",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P318P319",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P320P321",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P322P323",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P324P325",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P326P327",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P328P329",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P330P331",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P332P333",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P334P335",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P336P337",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P338P339",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P340P341",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P342P343",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P344P345",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P346P347",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P348P349",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P350P351",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P352P353",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P354P355",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P356P357",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P358P359",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P360P361",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P362P363",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P364P365",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P366P367",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P368P369",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P370P371",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P372P373",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P374P375",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P376P377",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P378P379",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P380P381",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P382P383",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P384P385",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P386P387",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P388P389",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P390P391",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P392P393",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P394P395",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P396P397",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P398P399",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P400P401",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P402P403",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P404P405",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P406P407",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P408P409",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       53,
       178
      ],
      "text": "pH",
      "col": 0
     },
     {
      "at": [
       76,
       62
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       76,
       103.19999999999999
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       76,
       134.10000000000002
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       76,
       165
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       76,
       206.20000000000002
      ],
      "text": "14",
      "col": 0
     },
     {
      "at": [
       100,
       46
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       215,
       46
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       330,
       46
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       445,
       46
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       560,
       46
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       397,
       29
      ],
      "text": "Added strong base (mL)",
      "col": 0
     },
     {
      "at": [
       325,
       215
      ],
      "text": "Half-equivalence: pH ≈ pKa 4.70",
      "col": 2
     }
    ],
    "circles": [
     {
      "c": "P410",
      "r": 5,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "Model: weak B titrated by strong acid",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      100,
      214
     ],
     "P1": [
      100,
      62
     ],
     "P2": [
      100,
      62
     ],
     "P3": [
      566,
      62
     ],
     "P4": [
      100,
      176.3105917118815
     ],
     "P5": [
      102.3,
      174.8766831472596
     ],
     "P6": [
      102.3,
      174.8766831472596
     ],
     "P7": [
      104.6,
      173.55880885392736
     ],
     "P8": [
      104.6,
      173.55880885392736
     ],
     "P9": [
      106.9,
      172.40630505398371
     ],
     "P10": [
      106.9,
      172.40630505398371
     ],
     "P11": [
      109.2,
      171.4133873409201
     ],
     "P12": [
      109.2,
      171.4133873409201
     ],
     "P13": [
      111.5,
      170.55443326525037
     ],
     "P14": [
      111.5,
      170.55443326525037
     ],
     "P15": [
      113.8,
      169.80294800206337
     ],
     "P16": [
      113.8,
      169.80294800206337
     ],
     "P17": [
      116.1,
      169.13703638704905
     ],
     "P18": [
      116.1,
      169.13703638704905
     ],
     "P19": [
      118.4,
      168.53975745850715
     ],
     "P20": [
      118.4,
      168.53975745850715
     ],
     "P21": [
      120.7,
      167.99820451502524
     ],
     "P22": [
      120.7,
      167.99820451502524
     ],
     "P23": [
      123,
      167.50250922475567
     ],
     "P24": [
      123,
      167.50250922475567
     ],
     "P25": [
      125.30000000000001,
      167.04504351941782
     ],
     "P26": [
      125.30000000000001,
      167.04504351941782
     ],
     "P27": [
      127.6,
      166.61983123866793
     ],
     "P28": [
      127.6,
      166.61983123866793
     ],
     "P29": [
      129.9,
      166.2221249909755
     ],
     "P30": [
      129.9,
      166.2221249909755
     ],
     "P31": [
      132.2,
      165.84810260283052
     ],
     "P32": [
      132.2,
      165.84810260283052
     ],
     "P33": [
      134.5,
      165.4946478493532
     ],
     "P34": [
      134.5,
      165.4946478493532
     ],
     "P35": [
      136.8,
      165.1591903189199
     ],
     "P36": [
      136.8,
      165.1591903189199
     ],
     "P37": [
      139.1,
      164.83958698792134
     ],
     "P38": [
      139.1,
      164.83958698792134
     ],
     "P39": [
      141.4,
      164.53403350352272
     ],
     "P40": [
      141.4,
      164.53403350352272
     ],
     "P41": [
      143.7,
      164.24099687405374
     ],
     "P42": [
      143.7,
      164.24099687405374
     ],
     "P43": [
      146,
      163.95916377688806
     ],
     "P44": [
      146,
      163.95916377688806
     ],
     "P45": [
      148.3,
      163.6874004008367
     ],
     "P46": [
      148.3,
      163.6874004008367
     ],
     "P47": [
      150.60000000000002,
      163.42472091001454
     ],
     "P48": [
      150.60000000000002,
      163.42472091001454
     ],
     "P49": [
      152.9,
      163.17026242596887
     ],
     "P50": [
      152.9,
      163.17026242596887
     ],
     "P51": [
      155.2,
      162.92326499165054
     ],
     "P52": [
      155.2,
      162.92326499165054
     ],
     "P53": [
      157.5,
      162.68305538205482
     ],
     "P54": [
      157.5,
      162.68305538205482
     ],
     "P55": [
      159.8,
      162.44903391365432
     ],
     "P56": [
      159.8,
      162.44903391365432
     ],
     "P57": [
      162.1,
      162.22066361274744
     ],
     "P58": [
      162.1,
      162.22066361274744
     ],
     "P59": [
      164.4,
      161.99746125505675
     ],
     "P60": [
      164.4,
      161.99746125505675
     ],
     "P61": [
      166.7,
      161.77898990144143
     ],
     "P62": [
      166.7,
      161.77898990144143
     ],
     "P63": [
      169,
      161.56485263860066
     ],
     "P64": [
      169,
      161.56485263860066
     ],
     "P65": [
      171.3,
      161.35468729694458
     ],
     "P66": [
      171.3,
      161.35468729694458
     ],
     "P67": [
      173.6,
      161.1481619659304
     ],
     "P68": [
      173.6,
      161.1481619659304
     ],
     "P69": [
      175.9,
      160.94497116403988
     ],
     "P70": [
      175.9,
      160.94497116403988
     ],
     "P71": [
      178.2,
      160.74483254906653
     ],
     "P72": [
      178.2,
      160.74483254906653
     ],
     "P73": [
      180.5,
      160.5474840765501
     ],
     "P74": [
      180.5,
      160.5474840765501
     ],
     "P75": [
      182.8,
      160.3526815315689
     ],
     "P76": [
      182.8,
      160.3526815315689
     ],
     "P77": [
      185.1,
      160.16019637280027
     ],
     "P78": [
      185.1,
      160.16019637280027
     ],
     "P79": [
      187.4,
      159.9698138386296
     ],
     "P80": [
      187.4,
      159.9698138386296
     ],
     "P81": [
      189.7,
      159.7813312737561
     ],
     "P82": [
      189.7,
      159.7813312737561
     ],
     "P83": [
      192,
      159.5945566416966
     ],
     "P84": [
      192,
      159.5945566416966
     ],
     "P85": [
      194.29999999999998,
      159.4093071941786
     ],
     "P86": [
      194.29999999999998,
      159.4093071941786
     ],
     "P87": [
      196.6,
      159.22540827293574
     ],
     "P88": [
      196.6,
      159.22540827293574
     ],
     "P89": [
      198.9,
      159.04269222307636
     ],
     "P90": [
      198.9,
      159.04269222307636
     ],
     "P91": [
      201.20000000000002,
      158.86099740016175
     ],
     "P92": [
      201.20000000000002,
      158.86099740016175
     ],
     "P93": [
      203.5,
      158.68016725553548
     ],
     "P94": [
      203.5,
      158.68016725553548
     ],
     "P95": [
      205.8,
      158.50004948638644
     ],
     "P96": [
      205.8,
      158.50004948638644
     ],
     "P97": [
      208.1,
      158.32049523858868
     ],
     "P98": [
      208.1,
      158.32049523858868
     ],
     "P99": [
      210.4,
      158.14135835159846
     ],
     "P100": [
      210.4,
      158.14135835159846
     ],
     "P101": [
      212.7,
      157.96249463565385
     ],
     "P102": [
      212.7,
      157.96249463565385
     ],
     "P103": [
      215,
      157.78376117224732
     ],
     "P104": [
      215,
      157.78376117224732
     ],
     "P105": [
      217.3,
      157.60501562935423
     ],
     "P106": [
      217.3,
      157.60501562935423
     ],
     "P107": [
      219.6,
      157.42611558322
     ],
     "P108": [
      219.6,
      157.42611558322
     ],
     "P109": [
      221.9,
      157.2469178386446
     ],
     "P110": [
      221.9,
      157.2469178386446
     ],
     "P111": [
      224.2,
      157.0672777396594
     ],
     "P112": [
      224.2,
      157.0672777396594
     ],
     "P113": [
      226.5,
      156.88704846226946
     ],
     "P114": [
      226.5,
      156.88704846226946
     ],
     "P115": [
      228.8,
      156.7060802805221
     ],
     "P116": [
      228.8,
      156.7060802805221
     ],
     "P117": [
      231.1,
      156.524219796546
     ],
     "P118": [
      231.1,
      156.524219796546
     ],
     "P119": [
      233.4,
      156.34130912436373
     ],
     "P120": [
      233.4,
      156.34130912436373
     ],
     "P121": [
      235.7,
      156.1571850161767
     ],
     "P122": [
      235.7,
      156.1571850161767
     ],
     "P123": [
      238,
      155.97167791841963
     ],
     "P124": [
      238,
      155.97167791841963
     ],
     "P125": [
      240.3,
      155.784610943118
     ],
     "P126": [
      240.3,
      155.784610943118
     ],
     "P127": [
      242.6,
      155.5957987378905
     ],
     "P128": [
      242.6,
      155.5957987378905
     ],
     "P129": [
      244.9,
      155.40504623521966
     ],
     "P130": [
      244.9,
      155.40504623521966
     ],
     "P131": [
      247.2,
      155.21214725825047
     ],
     "P132": [
      247.2,
      155.21214725825047
     ],
     "P133": [
      249.5,
      155.01688295620855
     ],
     "P134": [
      249.5,
      155.01688295620855
     ],
     "P135": [
      251.8,
      154.81902003735752
     ],
     "P136": [
      251.8,
      154.81902003735752
     ],
     "P137": [
      254.1,
      154.6183087609674
     ],
     "P138": [
      254.1,
      154.6183087609674
     ],
     "P139": [
      256.4,
      154.4144806417035
     ],
     "P140": [
      256.4,
      154.4144806417035
     ],
     "P141": [
      258.7,
      154.2072458097008
     ],
     "P142": [
      258.7,
      154.2072458097008
     ],
     "P143": [
      261,
      153.99628995676017
     ],
     "P144": [
      261,
      153.99628995676017
     ],
     "P145": [
      263.3,
      153.78127078276538
     ],
     "P146": [
      263.3,
      153.78127078276538
     ],
     "P147": [
      265.6,
      153.56181383547505
     ],
     "P148": [
      265.6,
      153.56181383547505
     ],
     "P149": [
      267.9,
      153.33750760978046
     ],
     "P150": [
      267.9,
      153.33750760978046
     ],
     "P151": [
      270.2,
      153.10789773726032
     ],
     "P152": [
      270.2,
      153.10789773726032
     ],
     "P153": [
      272.5,
      152.87248005051822
     ],
     "P154": [
      272.5,
      152.87248005051822
     ],
     "P155": [
      274.8,
      152.6306922452755
     ],
     "P156": [
      274.8,
      152.6306922452755
     ],
     "P157": [
      277.1,
      152.38190378070328
     ],
     "P158": [
      277.1,
      152.38190378070328
     ],
     "P159": [
      279.4,
      152.1254035466076
     ],
     "P160": [
      279.4,
      152.1254035466076
     ],
     "P161": [
      281.7,
      151.8603846725201
     ],
     "P162": [
      281.7,
      151.8603846725201
     ],
     "P163": [
      284,
      151.585925640152
     ],
     "P164": [
      284,
      151.585925640152
     ],
     "P165": [
      286.3,
      151.30096655929827
     ],
     "P166": [
      286.3,
      151.30096655929827
     ],
     "P167": [
      288.59999999999997,
      151.0042790353325
     ],
     "P168": [
      288.59999999999997,
      151.0042790353325
     ],
     "P169": [
      290.90000000000003,
      150.6944274266226
     ],
     "P170": [
      290.90000000000003,
      150.6944274266226
     ],
     "P171": [
      293.2,
      150.36971835432686
     ],
     "P172": [
      293.2,
      150.36971835432686
     ],
     "P173": [
      295.5,
      150.02813390690716
     ],
     "P174": [
      295.5,
      150.02813390690716
     ],
     "P175": [
      297.8,
      149.66724177581906
     ],
     "P176": [
      297.8,
      149.66724177581906
     ],
     "P177": [
      300.09999999999997,
      149.2840720415381
     ],
     "P178": [
      300.09999999999997,
      149.2840720415381
     ],
     "P179": [
      302.40000000000003,
      148.87494455232763
     ],
     "P180": [
      302.40000000000003,
      148.87494455232763
     ],
     "P181": [
      304.7,
      148.4352210254298
     ],
     "P182": [
      304.7,
      148.4352210254298
     ],
     "P183": [
      307,
      147.95893867330062
     ],
     "P184": [
      307,
      147.95893867330062
     ],
     "P185": [
      309.3,
      147.43825015078636
     ],
     "P186": [
      309.3,
      147.43825015078636
     ],
     "P187": [
      311.6,
      146.86253226646306
     ],
     "P188": [
      311.6,
      146.86253226646306
     ],
     "P189": [
      313.9,
      146.21689642984393
     ],
     "P190": [
      313.9,
      146.21689642984393
     ],
     "P191": [
      316.2,
      145.47954311708259
     ],
     "P192": [
      316.2,
      145.47954311708259
     ],
     "P193": [
      318.5,
      144.61668253949563
     ],
     "P194": [
      318.5,
      144.61668253949563
     ],
     "P195": [
      320.8,
      143.5717154593956
     ],
     "P196": [
      320.8,
      143.5717154593956
     ],
     "P197": [
      323.1,
      142.23855004276012
     ],
     "P198": [
      323.1,
      142.23855004276012
     ],
     "P199": [
      325.4,
      140.37903350950168
     ],
     "P200": [
      325.4,
      140.37903350950168
     ],
     "P201": [
      327.7,
      137.2334204476128
     ],
     "P202": [
      327.7,
      137.2334204476128
     ],
     "P203": [
      329.885,
      123.9790094316779
     ],
     "P204": [
      329.885,
      123.9790094316779
     ],
     "P205": [
      330,
      116.8579734509525
     ],
     "P206": [
      330,
      116.8579734509525
     ],
     "P207": [
      330.115,
      109.73962083531706
     ],
     "P208": [
      330.115,
      109.73962083531706
     ],
     "P209": [
      332.3,
      96.54681010587638
     ],
     "P210": [
      332.3,
      96.54681010587638
     ],
     "P211": [
      334.6,
      93.46633009225252
     ],
     "P212": [
      334.6,
      93.46633009225252
     ],
     "P213": [
      336.9,
      91.67232318026603
     ],
     "P214": [
      336.9,
      91.67232318026603
     ],
     "P215": [
      339.2,
      90.40505545553106
     ],
     "P216": [
      339.2,
      90.40505545553106
     ],
     "P217": [
      341.5,
      89.42638503127068
     ],
     "P218": [
      341.5,
      89.42638503127068
     ],
     "P219": [
      343.8,
      88.63023112167883
     ],
     "P220": [
      343.8,
      88.63023112167883
     ],
     "P221": [
      346.1,
      87.96000581251567
     ],
     "P222": [
      346.1,
      87.96000581251567
     ],
     "P223": [
      348.4,
      87.38193095476328
     ],
     "P224": [
      348.4,
      87.38193095476328
     ],
     "P225": [
      350.7,
      86.87421900441143
     ],
     "P226": [
      350.7,
      86.87421900441143
     ],
     "P227": [
      353,
      86.42199371040923
     ],
     "P228": [
      353,
      86.42199371040923
     ],
     "P229": [
      355.3,
      86.01464459872548
     ],
     "P230": [
      355.3,
      86.01464459872548
     ],
     "P231": [
      357.6,
      85.64433743803488
     ],
     "P232": [
      357.6,
      85.64433743803488
     ],
     "P233": [
      359.9,
      85.30512297015551
     ],
     "P234": [
      359.9,
      85.30512297015551
     ],
     "P235": [
      362.2,
      84.99237687720029
     ],
     "P236": [
      362.2,
      84.99237687720029
     ],
     "P237": [
      364.5,
      84.70243342882381
     ],
     "P238": [
      364.5,
      84.70243342882381
     ],
     "P239": [
      366.8,
      84.43233760558749
     ],
     "P240": [
      366.8,
      84.43233760558749
     ],
     "P241": [
      369.1,
      84.17967250117383
     ],
     "P242": [
      369.1,
      84.17967250117383
     ],
     "P243": [
      371.4,
      83.94243613323886
     ],
     "P244": [
      371.4,
      83.94243613323886
     ],
     "P245": [
      373.7,
      83.71895160541862
     ],
     "P246": [
      373.7,
      83.71895160541862
     ],
     "P247": [
      376,
      83.50780033976463
     ],
     "P248": [
      376,
      83.50780033976463
     ],
     "P249": [
      378.3,
      83.30777161619326
     ],
     "P250": [
      378.3,
      83.30777161619326
     ],
     "P251": [
      380.6,
      83.1178238614184
     ],
     "P252": [
      380.6,
      83.1178238614184
     ],
     "P253": [
      382.9,
      82.93705454997328
     ],
     "P254": [
      382.9,
      82.93705454997328
     ],
     "P255": [
      385.2,
      82.7646765158089
     ],
     "P256": [
      385.2,
      82.7646765158089
     ],
     "P257": [
      387.5,
      82.59999910278205
     ],
     "P258": [
      387.5,
      82.59999910278205
     ],
     "P259": [
      389.8,
      82.44241301430705
     ],
     "P260": [
      389.8,
      82.44241301430705
     ],
     "P261": [
      392.1,
      82.29137802383568
     ],
     "P262": [
      392.1,
      82.29137802383568
     ],
     "P263": [
      394.4,
      82.14641292144196
     ],
     "P264": [
      394.4,
      82.14641292144196
     ],
     "P265": [
      396.7,
      82.00708722537311
     ],
     "P266": [
      396.7,
      82.00708722537311
     ],
     "P267": [
      399,
      81.87301429932143
     ],
     "P268": [
      399,
      81.87301429932143
     ],
     "P269": [
      401.3,
      81.74384559868895
     ],
     "P270": [
      401.3,
      81.74384559868895
     ],
     "P271": [
      403.6,
      81.61926583065767
     ],
     "P272": [
      403.6,
      81.61926583065767
     ],
     "P273": [
      405.9,
      81.49898885926041
     ],
     "P274": [
      405.9,
      81.49898885926041
     ],
     "P275": [
      408.2,
      81.38275422194187
     ],
     "P276": [
      408.2,
      81.38275422194187
     ],
     "P277": [
      410.5,
      81.2703241512072
     ],
     "P278": [
      410.5,
      81.2703241512072
     ],
     "P279": [
      412.8,
      81.16148101594695
     ],
     "P280": [
      412.8,
      81.16148101594695
     ],
     "P281": [
      415.1,
      81.05602511341777
     ],
     "P282": [
      415.1,
      81.05602511341777
     ],
     "P283": [
      417.4,
      80.95377275574828
     ],
     "P284": [
      417.4,
      80.95377275574828
     ],
     "P285": [
      419.7,
      80.85455460505003
     ],
     "P286": [
      419.7,
      80.85455460505003
     ],
     "P287": [
      422,
      80.75821421935561
     ],
     "P288": [
      422,
      80.75821421935561
     ],
     "P289": [
      424.3,
      80.66460677813782
     ],
     "P290": [
      424.3,
      80.66460677813782
     ],
     "P291": [
      426.6,
      80.57359796143669
     ],
     "P292": [
      426.6,
      80.57359796143669
     ],
     "P293": [
      428.9,
      80.48506296090093
     ],
     "P294": [
      428.9,
      80.48506296090093
     ],
     "P295": [
      431.2,
      80.39888560454247
     ],
     "P296": [
      431.2,
      80.39888560454247
     ],
     "P297": [
      433.5,
      80.31495757986687
     ],
     "P298": [
      433.5,
      80.31495757986687
     ],
     "P299": [
      435.8,
      80.2331777424032
     ],
     "P300": [
      435.8,
      80.2331777424032
     ],
     "P301": [
      438.1,
      80.15345149861017
     ],
     "P302": [
      438.1,
      80.15345149861017
     ],
     "P303": [
      440.4,
      80.07569025376154
     ],
     "P304": [
      440.4,
      80.07569025376154
     ],
     "P305": [
      442.7,
      79.99981091676969
     ],
     "P306": [
      442.7,
      79.99981091676969
     ],
     "P307": [
      445,
      79.92573545504342
     ],
     "P308": [
      445,
      79.92573545504342
     ],
     "P309": [
      447.3,
      79.85339049343429
     ],
     "P310": [
      447.3,
      79.85339049343429
     ],
     "P311": [
      449.6,
      79.7827069521336
     ],
     "P312": [
      449.6,
      79.7827069521336
     ],
     "P313": [
      451.9,
      79.71361971906686
     ],
     "P314": [
      451.9,
      79.71361971906686
     ],
     "P315": [
      454.2,
      79.6460673529167
     ],
     "P316": [
      454.2,
      79.6460673529167
     ],
     "P317": [
      456.5,
      79.579991813401
     ],
     "P318": [
      456.5,
      79.579991813401
     ],
     "P319": [
      458.8,
      79.51533821585883
     ],
     "P320": [
      458.8,
      79.51533821585883
     ],
     "P321": [
      461.1,
      79.4520546075631
     ],
     "P322": [
      461.1,
      79.4520546075631
     ],
     "P323": [
      463.4,
      79.39009176349097
     ],
     "P324": [
      463.4,
      79.39009176349097
     ],
     "P325": [
      465.7,
      79.32940299955743
     ],
     "P326": [
      465.7,
      79.32940299955743
     ],
     "P327": [
      468,
      79.26994400154928
     ],
     "P328": [
      468,
      79.26994400154928
     ],
     "P329": [
      470.30000000000007,
      79.21167266820302
     ],
     "P330": [
      470.30000000000007,
      79.21167266820302
     ],
     "P331": [
      472.6,
      79.15454896704591
     ],
     "P332": [
      472.6,
      79.15454896704591
     ],
     "P333": [
      474.9,
      79.09853480177517
     ],
     "P334": [
      474.9,
      79.09853480177517
     ],
     "P335": [
      477.19999999999993,
      79.04359389008434
     ],
     "P336": [
      477.19999999999993,
      79.04359389008434
     ],
     "P337": [
      479.5,
      78.98969165096503
     ],
     "P338": [
      479.5,
      78.98969165096503
     ],
     "P339": [
      481.80000000000007,
      78.93679510061602
     ],
     "P340": [
      481.80000000000007,
      78.93679510061602
     ],
     "P341": [
      484.1,
      78.88487275618257
     ],
     "P342": [
      484.1,
      78.88487275618257
     ],
     "P343": [
      486.4,
      78.8338945466302
     ],
     "P344": [
      486.4,
      78.8338945466302
     ],
     "P345": [
      488.69999999999993,
      78.78383173012736
     ],
     "P346": [
      488.69999999999993,
      78.78383173012736
     ],
     "P347": [
      491,
      78.73465681737562
     ],
     "P348": [
      491,
      78.73465681737562
     ],
     "P349": [
      493.30000000000007,
      78.68634350038022
     ],
     "P350": [
      493.30000000000007,
      78.68634350038022
     ],
     "P351": [
      495.6,
      78.63886658620538
     ],
     "P352": [
      495.6,
      78.63886658620538
     ],
     "P353": [
      497.9,
      78.59220193530066
     ],
     "P354": [
      497.9,
      78.59220193530066
     ],
     "P355": [
      500.19999999999993,
      78.54632640402605
     ],
     "P356": [
      500.19999999999993,
      78.54632640402605
     ],
     "P357": [
      502.5,
      78.50121779103699
     ],
     "P358": [
      502.5,
      78.50121779103699
     ],
     "P359": [
      504.80000000000007,
      78.45685478722254
     ],
     "P360": [
      504.80000000000007,
      78.45685478722254
     ],
     "P361": [
      507.1,
      78.41321692891833
     ],
     "P362": [
      507.1,
      78.41321692891833
     ],
     "P363": [
      509.4,
      78.37028455414014
     ],
     "P364": [
      509.4,
      78.37028455414014
     ],
     "P365": [
      511.7,
      78.32803876160779
     ],
     "P366": [
      511.7,
      78.32803876160779
     ],
     "P367": [
      514,
      78.28646137234801
     ],
     "P368": [
      514,
      78.28646137234801
     ],
     "P369": [
      516.3,
      78.24553489368458
     ],
     "P370": [
      516.3,
      78.24553489368458
     ],
     "P371": [
      518.6,
      78.20524248543961
     ],
     "P372": [
      518.6,
      78.20524248543961
     ],
     "P373": [
      520.9,
      78.16556792818517
     ],
     "P374": [
      520.9,
      78.16556792818517
     ],
     "P375": [
      523.2,
      78.12649559339823
     ],
     "P376": [
      523.2,
      78.12649559339823
     ],
     "P377": [
      525.5,
      78.08801041538288
     ],
     "P378": [
      525.5,
      78.08801041538288
     ],
     "P379": [
      527.8,
      78.05009786483672
     ],
     "P380": [
      527.8,
      78.05009786483672
     ],
     "P381": [
      530.1,
      78.01274392394669
     ],
     "P382": [
      530.1,
      78.01274392394669
     ],
     "P383": [
      532.4,
      77.97593506291003
     ],
     "P384": [
      532.4,
      77.97593506291003
     ],
     "P385": [
      534.7,
      77.93965821778258
     ],
     "P386": [
      534.7,
      77.93965821778258
     ],
     "P387": [
      537,
      77.90390076956697
     ],
     "P388": [
      537,
      77.90390076956697
     ],
     "P389": [
      539.3,
      77.86865052445722
     ],
     "P390": [
      539.3,
      77.86865052445722
     ],
     "P391": [
      541.6,
      77.83389569516419
     ],
     "P392": [
      541.6,
      77.83389569516419
     ],
     "P393": [
      543.9,
      77.7996248832523
     ],
     "P394": [
      543.9,
      77.7996248832523
     ],
     "P395": [
      546.2,
      77.7658270624218
     ],
     "P396": [
      546.2,
      77.7658270624218
     ],
     "P397": [
      548.5,
      77.73249156267701
     ],
     "P398": [
      548.5,
      77.73249156267701
     ],
     "P399": [
      550.8,
      77.69960805532466
     ],
     "P400": [
      550.8,
      77.69960805532466
     ],
     "P401": [
      553.1,
      77.66716653875096
     ],
     "P402": [
      553.1,
      77.66716653875096
     ],
     "P403": [
      555.4,
      77.63515732492897
     ],
     "P404": [
      555.4,
      77.63515732492897
     ],
     "P405": [
      557.7,
      77.60357102661214
     ],
     "P406": [
      557.7,
      77.60357102661214
     ],
     "P407": [
      560,
      77.57239854517252
     ],
     "P408": [
      330,
      212
     ],
     "P409": [
      330,
      62
     ],
     "P410": [
      215,
      157.78376117224732
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323P324P325P326P327P328P329P330P331P332P333P334P335P336P337P338P339P340P341P342P343P344P345P346P347P348P349P350P351P352P353P354P355P356P357P358P359P360P361P362P363P364P365P366P367P368P369P370P371P372P373P374P375P376P377P378P379P380P381P382P383P384P385P386P387P388P389P390P391P392P393P394P395P396P397P398P399P400P401P402P403P404P405P406P407P408P409P410",
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
     },
     {
      "v": "P76P77",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P78P79",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P80P81",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P82P83",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P84P85",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P86P87",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P88P89",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P90P91",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P92P93",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P94P95",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P96P97",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P98P99",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P100P101",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P102P103",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P104P105",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P106P107",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P108P109",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P110P111",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P112P113",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P114P115",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P116P117",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P118P119",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P120P121",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P122P123",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P124P125",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P126P127",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P128P129",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P130P131",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P132P133",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P134P135",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P136P137",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P138P139",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P140P141",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P142P143",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P144P145",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P146P147",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P148P149",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P150P151",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P152P153",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P154P155",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P156P157",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P158P159",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P160P161",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P162P163",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P164P165",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P166P167",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P168P169",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P170P171",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P172P173",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P174P175",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P176P177",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P178P179",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P180P181",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P182P183",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P184P185",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P186P187",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P188P189",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P190P191",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P192P193",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P194P195",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P196P197",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P198P199",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P200P201",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P202P203",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P204P205",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P206P207",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P208P209",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P210P211",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P212P213",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P214P215",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P216P217",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P218P219",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P220P221",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P222P223",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P224P225",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P226P227",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P228P229",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P230P231",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P232P233",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P234P235",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P236P237",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P238P239",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P240P241",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P242P243",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P244P245",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P246P247",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P248P249",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P250P251",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P252P253",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P254P255",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P256P257",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P258P259",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P260P261",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P262P263",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P264P265",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P266P267",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P268P269",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P270P271",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P272P273",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P274P275",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P276P277",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P278P279",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P280P281",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P282P283",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P284P285",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P286P287",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P288P289",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P290P291",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P292P293",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P294P295",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P296P297",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P298P299",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P300P301",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P302P303",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P304P305",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P306P307",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P308P309",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P310P311",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P312P313",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P314P315",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P316P317",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P318P319",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P320P321",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P322P323",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P324P325",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P326P327",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P328P329",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P330P331",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P332P333",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P334P335",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P336P337",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P338P339",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P340P341",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P342P343",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P344P345",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P346P347",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P348P349",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P350P351",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P352P353",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P354P355",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P356P357",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P358P359",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P360P361",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P362P363",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P364P365",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P366P367",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P368P369",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P370P371",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P372P373",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P374P375",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P376P377",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P378P379",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P380P381",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P382P383",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P384P385",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P386P387",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P388P389",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P390P391",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P392P393",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P394P395",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P396P397",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P398P399",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P400P401",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P402P403",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P404P405",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P406P407",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P408P409",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       53,
       178
      ],
      "text": "pH",
      "col": 0
     },
     {
      "at": [
       76,
       62
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       76,
       103.19999999999999
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       76,
       134.10000000000002
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       76,
       165
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       76,
       206.20000000000002
      ],
      "text": "14",
      "col": 0
     },
     {
      "at": [
       100,
       46
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       215,
       46
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       330,
       46
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       445,
       46
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       560,
       46
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       397,
       29
      ],
      "text": "Added strong acid (mL)",
      "col": 0
     },
     {
      "at": [
       329,
       215
      ],
      "text": "Half-equivalence: pH ≈ pKa(BH+) 9.30",
      "col": 2
     }
    ],
    "circles": [
     {
      "c": "P410",
      "r": 5,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "Model: diprotic H2A; pKa values 4 and 8",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      100,
      214
     ],
     "P1": [
      100,
      62
     ],
     "P2": [
      100,
      62
     ],
     "P3": [
      566,
      62
     ],
     "P4": [
      100,
      88.3281426864599
     ],
     "P5": [
      102.3,
      89.33122046185025
     ],
     "P6": [
      102.3,
      89.33122046185025
     ],
     "P7": [
      104.6,
      90.2956977940872
     ],
     "P8": [
      104.6,
      90.2956977940872
     ],
     "P9": [
      106.9,
      91.19602431430559
     ],
     "P10": [
      106.9,
      91.19602431430559
     ],
     "P11": [
      109.2,
      92.02209690385826
     ],
     "P12": [
      109.2,
      92.02209690385826
     ],
     "P13": [
      111.5,
      92.77490112292509
     ],
     "P14": [
      111.5,
      92.77490112292509
     ],
     "P15": [
      113.8,
      93.46096389184623
     ],
     "P16": [
      113.8,
      93.46096389184623
     ],
     "P17": [
      116.1,
      94.0885872698351
     ],
     "P18": [
      116.1,
      94.0885872698351
     ],
     "P19": [
      118.4,
      94.66595106501404
     ],
     "P20": [
      118.4,
      94.66595106501404
     ],
     "P21": [
      120.7,
      95.20036615038742
     ],
     "P22": [
      120.7,
      95.20036615038742
     ],
     "P23": [
      123,
      95.69809202269008
     ],
     "P24": [
      123,
      95.69809202269008
     ],
     "P25": [
      125.3,
      96.16438984338544
     ],
     "P26": [
      125.3,
      96.16438984338544
     ],
     "P27": [
      127.6,
      96.60365435168063
     ],
     "P28": [
      127.6,
      96.60365435168063
     ],
     "P29": [
      129.9,
      97.01955773541673
     ],
     "P30": [
      129.9,
      97.01955773541673
     ],
     "P31": [
      132.2,
      97.41518031680991
     ],
     "P32": [
      132.2,
      97.41518031680991
     ],
     "P33": [
      134.5,
      97.79312097781445
     ],
     "P34": [
      134.5,
      97.79312097781445
     ],
     "P35": [
      136.8,
      98.15558745193005
     ],
     "P36": [
      136.8,
      98.15558745193005
     ],
     "P37": [
      139.1,
      98.5044690733645
     ],
     "P38": [
      139.1,
      98.5044690733645
     ],
     "P39": [
      141.4,
      98.84139508111156
     ],
     "P40": [
      141.4,
      98.84139508111156
     ],
     "P41": [
      143.7,
      99.16778134491193
     ],
     "P42": [
      143.7,
      99.16778134491193
     ],
     "P43": [
      146,
      99.48486792873882
     ],
     "P44": [
      146,
      99.48486792873882
     ],
     "P45": [
      148.3,
      99.79374944136333
     ],
     "P46": [
      148.3,
      99.79374944136333
     ],
     "P47": [
      150.6,
      100.09539971490167
     ],
     "P48": [
      150.6,
      100.09539971490167
     ],
     "P49": [
      152.9,
      100.39069201782576
     ],
     "P50": [
      152.9,
      100.39069201782576
     ],
     "P51": [
      155.2,
      100.68041574437262
     ],
     "P52": [
      155.2,
      100.68041574437262
     ],
     "P53": [
      157.5,
      100.96529031666628
     ],
     "P54": [
      157.5,
      100.96529031666628
     ],
     "P55": [
      159.8,
      101.24597687749412
     ],
     "P56": [
      159.8,
      101.24597687749412
     ],
     "P57": [
      162.1,
      101.52308823026544
     ],
     "P58": [
      162.1,
      101.52308823026544
     ],
     "P59": [
      164.4,
      101.79719738984014
     ],
     "P60": [
      164.4,
      101.79719738984014
     ],
     "P61": [
      166.7,
      102.06884503709384
     ],
     "P62": [
      166.7,
      102.06884503709384
     ],
     "P63": [
      169,
      102.3385461162737
     ],
     "P64": [
      169,
      102.3385461162737
     ],
     "P65": [
      171.3,
      102.60679577363771
     ],
     "P66": [
      171.3,
      102.60679577363771
     ],
     "P67": [
      173.6,
      102.87407480577085
     ],
     "P68": [
      173.6,
      102.87407480577085
     ],
     "P69": [
      175.9,
      103.14085476432152
     ],
     "P70": [
      175.9,
      103.14085476432152
     ],
     "P71": [
      178.2,
      103.40760284928564
     ],
     "P72": [
      178.2,
      103.40760284928564
     ],
     "P73": [
      180.5,
      103.67478671446707
     ],
     "P74": [
      180.5,
      103.67478671446707
     ],
     "P75": [
      182.8,
      103.94287930586944
     ],
     "P76": [
      182.8,
      103.94287930586944
     ],
     "P77": [
      185.1,
      104.21236385641635
     ],
     "P78": [
      185.1,
      104.21236385641635
     ],
     "P79": [
      187.4,
      104.48373916885055
     ],
     "P80": [
      187.4,
      104.48373916885055
     ],
     "P81": [
      189.7,
      104.75752533364292
     ],
     "P82": [
      189.7,
      104.75752533364292
     ],
     "P83": [
      192,
      105.03427005150735
     ],
     "P84": [
      192,
      105.03427005150735
     ],
     "P85": [
      194.3,
      105.31455576258921
     ],
     "P86": [
      194.3,
      105.31455576258921
     ],
     "P87": [
      196.6,
      105.599007829425
     ],
     "P88": [
      196.6,
      105.599007829425
     ],
     "P89": [
      198.9,
      105.8883040825028
     ],
     "P90": [
      198.9,
      105.8883040825028
     ],
     "P91": [
      201.2,
      106.1831861216948
     ],
     "P92": [
      201.2,
      106.1831861216948
     ],
     "P93": [
      203.5,
      106.48447288275611
     ],
     "P94": [
      203.5,
      106.48447288275611
     ],
     "P95": [
      205.8,
      106.7930771383904
     ],
     "P96": [
      205.8,
      106.7930771383904
     ],
     "P97": [
      208.1,
      107.11002582732635
     ],
     "P98": [
      208.1,
      107.11002582732635
     ],
     "P99": [
      210.4,
      107.43648542155935
     ],
     "P100": [
      210.4,
      107.43648542155935
     ],
     "P101": [
      212.7,
      107.77379399624735
     ],
     "P102": [
      212.7,
      107.77379399624735
     ],
     "P103": [
      215,
      108.12350232907278
     ],
     "P104": [
      215,
      108.12350232907278
     ],
     "P105": [
      217.3,
      108.48742733890813
     ],
     "P106": [
      217.3,
      108.48742733890813
     ],
     "P107": [
      219.6,
      108.86772266208627
     ],
     "P108": [
      219.6,
      108.86772266208627
     ],
     "P109": [
      221.9,
      109.26697346900485
     ],
     "P110": [
      221.9,
      109.26697346900485
     ],
     "P111": [
      224.2,
      109.68832628100847
     ],
     "P112": [
      224.2,
      109.68832628100847
     ],
     "P113": [
      226.5,
      110.13567051479745
     ],
     "P114": [
      226.5,
      110.13567051479745
     ],
     "P115": [
      228.8,
      110.61389852637649
     ],
     "P116": [
      228.8,
      110.61389852637649
     ],
     "P117": [
      231.10000000000002,
      111.12928844058746
     ],
     "P118": [
      231.10000000000002,
      111.12928844058746
     ],
     "P119": [
      233.39999999999998,
      111.6900858338303
     ],
     "P120": [
      233.39999999999998,
      111.6900858338303
     ],
     "P121": [
      235.7,
      112.30742069139063
     ],
     "P122": [
      235.7,
      112.30742069139063
     ],
     "P123": [
      238,
      112.99681675549311
     ],
     "P124": [
      238,
      112.99681675549311
     ],
     "P125": [
      240.3,
      113.78080619670902
     ],
     "P126": [
      240.3,
      113.78080619670902
     ],
     "P127": [
      242.6,
      114.69373985019968
     ],
     "P128": [
      242.6,
      114.69373985019968
     ],
     "P129": [
      244.9,
      115.79126300053798
     ],
     "P130": [
      244.9,
      115.79126300053798
     ],
     "P131": [
      247.2,
      117.17024185705804
     ],
     "P132": [
      247.2,
      117.17024185705804
     ],
     "P133": [
      249.5,
      119.01028963999775
     ],
     "P134": [
      249.5,
      119.01028963999775
     ],
     "P135": [
      251.8,
      121.6100439633507
     ],
     "P136": [
      251.8,
      121.6100439633507
     ],
     "P137": [
      253.25666666666666,
      123.69115088203944
     ],
     "P138": [
      253.25666666666666,
      123.69115088203944
     ],
     "P139": [
      253.33333333333334,
      123.8050758241964
     ],
     "P140": [
      253.33333333333334,
      123.8050758241964
     ],
     "P141": [
      253.41,
      123.91900090124818
     ],
     "P142": [
      253.41,
      123.91900090124818
     ],
     "P143": [
      254.1,
      124.93316684179575
     ],
     "P144": [
      254.1,
      124.93316684179575
     ],
     "P145": [
      256.4,
      127.83410665752436
     ],
     "P146": [
      256.4,
      127.83410665752436
     ],
     "P147": [
      258.7,
      129.89063127889332
     ],
     "P148": [
      258.7,
      129.89063127889332
     ],
     "P149": [
      261,
      131.39775488641288
     ],
     "P150": [
      261,
      131.39775488641288
     ],
     "P151": [
      263.3,
      132.5756461977314
     ],
     "P152": [
      263.3,
      132.5756461977314
     ],
     "P153": [
      265.6,
      133.54272996463817
     ],
     "P154": [
      265.6,
      133.54272996463817
     ],
     "P155": [
      267.9,
      134.36538634875987
     ],
     "P156": [
      267.9,
      134.36538634875987
     ],
     "P157": [
      270.2,
      135.0836626896549
     ],
     "P158": [
      270.2,
      135.0836626896549
     ],
     "P159": [
      272.5,
      135.72333764548557
     ],
     "P160": [
      272.5,
      135.72333764548557
     ],
     "P161": [
      274.8,
      136.3019037683579
     ],
     "P162": [
      274.8,
      136.3019037683579
     ],
     "P163": [
      277.1,
      136.83174846708187
     ],
     "P164": [
      277.1,
      136.83174846708187
     ],
     "P165": [
      279.4,
      137.3219556875983
     ],
     "P166": [
      279.4,
      137.3219556875983
     ],
     "P167": [
      281.7,
      137.7793830084272
     ],
     "P168": [
      281.7,
      137.7793830084272
     ],
     "P169": [
      284,
      138.20933566531556
     ],
     "P170": [
      284,
      138.20933566531556
     ],
     "P171": [
      286.3,
      138.6160050302289
     ],
     "P172": [
      286.3,
      138.6160050302289
     ],
     "P173": [
      288.6,
      139.00276349279807
     ],
     "P174": [
      288.6,
      139.00276349279807
     ],
     "P175": [
      290.9,
      139.3723685460643
     ],
     "P176": [
      290.9,
      139.3723685460643
     ],
     "P177": [
      293.2,
      139.72710761632982
     ],
     "P178": [
      293.2,
      139.72710761632982
     ],
     "P179": [
      295.5,
      140.06890313704233
     ],
     "P180": [
      295.5,
      140.06890313704233
     ],
     "P181": [
      297.8,
      140.39939029414808
     ],
     "P182": [
      297.8,
      140.39939029414808
     ],
     "P183": [
      300.1,
      140.71997557886596
     ],
     "P184": [
      300.1,
      140.71997557886596
     ],
     "P185": [
      302.4,
      141.03188160373873
     ],
     "P186": [
      302.4,
      141.03188160373873
     ],
     "P187": [
      304.7,
      141.33618192048755
     ],
     "P188": [
      304.7,
      141.33618192048755
     ],
     "P189": [
      307,
      141.63382845216742
     ],
     "P190": [
      307,
      141.63382845216742
     ],
     "P191": [
      309.3,
      141.92567339839513
     ],
     "P192": [
      309.3,
      141.92567339839513
     ],
     "P193": [
      311.6,
      142.21248695847297
     ],
     "P194": [
      311.6,
      142.21248695847297
     ],
     "P195": [
      313.9,
      142.49497186093484
     ],
     "P196": [
      313.9,
      142.49497186093484
     ],
     "P197": [
      316.2,
      142.7737754374143
     ],
     "P198": [
      316.2,
      142.7737754374143
     ],
     "P199": [
      318.5,
      143.04949980021937
     ],
     "P200": [
      318.5,
      143.04949980021937
     ],
     "P201": [
      320.8,
      143.3227105545645
     ],
     "P202": [
      320.8,
      143.3227105545645
     ],
     "P203": [
      323.1,
      143.59394438336884
     ],
     "P204": [
      323.1,
      143.59394438336884
     ],
     "P205": [
      325.4,
      143.86371577496936
     ],
     "P206": [
      325.4,
      143.86371577496936
     ],
     "P207": [
      327.7,
      144.13252311527282
     ],
     "P208": [
      327.7,
      144.13252311527282
     ],
     "P209": [
      330,
      144.40085433118048
     ],
     "P210": [
      330,
      144.40085433118048
     ],
     "P211": [
      332.3,
      144.6691922484565
     ],
     "P212": [
      332.3,
      144.6691922484565
     ],
     "P213": [
      334.6,
      144.93801981253705
     ],
     "P214": [
      334.6,
      144.93801981253705
     ],
     "P215": [
      336.9,
      145.20782531387036
     ],
     "P216": [
      336.9,
      145.20782531387036
     ],
     "P217": [
      339.2,
      145.47910775967483
     ],
     "P218": [
      339.2,
      145.47910775967483
     ],
     "P219": [
      341.5,
      145.75238254153075
     ],
     "P220": [
      341.5,
      145.75238254153075
     ],
     "P221": [
      343.8,
      146.02818756361225
     ],
     "P222": [
      343.8,
      146.02818756361225
     ],
     "P223": [
      346.1,
      146.30709002091757
     ],
     "P224": [
      346.1,
      146.30709002091757
     ],
     "P225": [
      348.4,
      146.5896940527091
     ],
     "P226": [
      348.4,
      146.5896940527091
     ],
     "P227": [
      350.70000000000005,
      146.8766495467871
     ],
     "P228": [
      350.70000000000005,
      146.8766495467871
     ],
     "P229": [
      353,
      147.16866244000937
     ],
     "P230": [
      353,
      147.16866244000937
     ],
     "P231": [
      355.29999999999995,
      147.4665069567153
     ],
     "P232": [
      355.29999999999995,
      147.4665069567153
     ],
     "P233": [
      357.6,
      147.7710403598424
     ],
     "P234": [
      357.6,
      147.7710403598424
     ],
     "P235": [
      359.9,
      148.08322097505788
     ],
     "P236": [
      359.9,
      148.08322097505788
     ],
     "P237": [
      362.20000000000005,
      148.40413050954498
     ],
     "P238": [
      362.20000000000005,
      148.40413050954498
     ],
     "P239": [
      364.5,
      148.73500205997652
     ],
     "P240": [
      364.5,
      148.73500205997652
     ],
     "P241": [
      366.79999999999995,
      149.07725574448762
     ],
     "P242": [
      366.79999999999995,
      149.07725574448762
     ],
     "P243": [
      369.1,
      149.43254468990406
     ],
     "P244": [
      369.1,
      149.43254468990406
     ],
     "P245": [
      371.4,
      149.80281530259376
     ],
     "P246": [
      371.4,
      149.80281530259376
     ],
     "P247": [
      373.7,
      150.19038759023084
     ],
     "P248": [
      373.7,
      150.19038759023084
     ],
     "P249": [
      376,
      150.5980641963866
     ],
     "P250": [
      376,
      150.5980641963866
     ],
     "P251": [
      378.3,
      151.02928149320462
     ],
     "P252": [
      378.3,
      151.02928149320462
     ],
     "P253": [
      380.6,
      151.4883238943529
     ],
     "P254": [
      380.6,
      151.4883238943529
     ],
     "P255": [
      382.9,
      151.98063606940374
     ],
     "P256": [
      382.9,
      151.98063606940374
     ],
     "P257": [
      385.2,
      152.51329209726964
     ],
     "P258": [
      385.2,
      152.51329209726964
     ],
     "P259": [
      387.5,
      153.0957266182328
     ],
     "P260": [
      387.5,
      153.0957266182328
     ],
     "P261": [
      389.8,
      153.74092502374805
     ],
     "P262": [
      389.8,
      153.74092502374805
     ],
     "P263": [
      392.1,
      154.46746632365614
     ],
     "P264": [
      392.1,
      154.46746632365614
     ],
     "P265": [
      394.4,
      155.3032683500387
     ],
     "P266": [
      394.4,
      155.3032683500387
     ],
     "P267": [
      396.7,
      156.29305571570808
     ],
     "P268": [
      396.7,
      156.29305571570808
     ],
     "P269": [
      399,
      157.51498883078503
     ],
     "P270": [
      399,
      157.51498883078503
     ],
     "P271": [
      401.3,
      159.12363731923432
     ],
     "P272": [
      401.3,
      159.12363731923432
     ],
     "P273": [
      403.6,
      161.4846408267477
     ],
     "P274": [
      403.6,
      161.4846408267477
     ],
     "P275": [
      405.9,
      165.58480204656695
     ],
     "P276": [
      405.9,
      165.58480204656695
     ],
     "P277": [
      406.59000000000003,
      167.30412443619582
     ],
     "P278": [
      406.59000000000003,
      167.30412443619582
     ],
     "P279": [
      406.6666666666667,
      167.50105332246596
     ],
     "P280": [
      406.6666666666667,
      167.50105332246596
     ],
     "P281": [
      406.7433333333333,
      167.6978780636827
     ],
     "P282": [
      406.7433333333333,
      167.6978780636827
     ],
     "P283": [
      408.2,
      171.04196180186108
     ],
     "P284": [
      408.2,
      171.04196180186108
     ],
     "P285": [
      410.5,
      174.30971521168
     ],
     "P286": [
      410.5,
      174.30971521168
     ],
     "P287": [
      412.8,
      176.2632972322355
     ],
     "P288": [
      412.8,
      176.2632972322355
     ],
     "P289": [
      415.1,
      177.6263323281934
     ],
     "P290": [
      415.1,
      177.6263323281934
     ],
     "P291": [
      417.4,
      178.66677853551047
     ],
     "P292": [
      417.4,
      178.66677853551047
     ],
     "P293": [
      419.7,
      179.5056264150682
     ],
     "P294": [
      419.7,
      179.5056264150682
     ],
     "P295": [
      422,
      180.20694412697236
     ],
     "P296": [
      422,
      180.20694412697236
     ],
     "P297": [
      424.3,
      180.80857686118702
     ],
     "P298": [
      424.3,
      180.80857686118702
     ],
     "P299": [
      426.6,
      181.33469195794413
     ],
     "P300": [
      426.6,
      181.33469195794413
     ],
     "P301": [
      428.9,
      181.80164472132907
     ],
     "P302": [
      428.9,
      181.80164472132907
     ],
     "P303": [
      431.2,
      182.22101107325295
     ],
     "P304": [
      431.2,
      182.22101107325295
     ],
     "P305": [
      433.5,
      182.6012813441737
     ],
     "P306": [
      433.5,
      182.6012813441737
     ],
     "P307": [
      435.8,
      182.94886586664862
     ],
     "P308": [
      435.8,
      182.94886586664862
     ],
     "P309": [
      438.1,
      183.2687222708488
     ],
     "P310": [
      438.1,
      183.2687222708488
     ],
     "P311": [
      440.4,
      183.56476312499836
     ],
     "P312": [
      440.4,
      183.56476312499836
     ],
     "P313": [
      442.7,
      183.84013009271467
     ],
     "P314": [
      442.7,
      183.84013009271467
     ],
     "P315": [
      445,
      184.09738379256822
     ],
     "P316": [
      445,
      184.09738379256822
     ],
     "P317": [
      447.3,
      184.33863863977547
     ],
     "P318": [
      447.3,
      184.33863863977547
     ],
     "P319": [
      449.6,
      184.5656607417879
     ],
     "P320": [
      449.6,
      184.5656607417879
     ],
     "P321": [
      451.9,
      184.77994035757473
     ],
     "P322": [
      451.9,
      184.77994035757473
     ],
     "P323": [
      454.2,
      184.98274645578115
     ],
     "P324": [
      454.2,
      184.98274645578115
     ],
     "P325": [
      456.5,
      185.1751684264469
     ],
     "P326": [
      456.5,
      185.1751684264469
     ],
     "P327": [
      458.8,
      185.35814841135823
     ],
     "P328": [
      458.8,
      185.35814841135823
     ],
     "P329": [
      461.1,
      185.53250667502914
     ],
     "P330": [
      461.1,
      185.53250667502914
     ],
     "P331": [
      463.4,
      185.69896173915572
     ],
     "P332": [
      463.4,
      185.69896173915572
     ],
     "P333": [
      465.7,
      185.85814652567876
     ],
     "P334": [
      465.7,
      185.85814652567876
     ],
     "P335": [
      468,
      186.01062142144883
     ],
     "P336": [
      468,
      186.01062142144883
     ],
     "P337": [
      470.3,
      186.1568849428579
     ],
     "P338": [
      470.3,
      186.1568849428579
     ],
     "P339": [
      472.6,
      186.2973825106237
     ],
     "P340": [
      472.6,
      186.2973825106237
     ],
     "P341": [
      474.9,
      186.43251372274597
     ],
     "P342": [
      474.9,
      186.43251372274597
     ],
     "P343": [
      477.2,
      186.5626384238032
     ],
     "P344": [
      477.2,
      186.5626384238032
     ],
     "P345": [
      479.5,
      186.68808180192335
     ],
     "P346": [
      479.5,
      186.68808180192335
     ],
     "P347": [
      481.8,
      186.80913869450956
     ],
     "P348": [
      481.8,
      186.80913869450956
     ],
     "P349": [
      484.1,
      186.92607724565156
     ],
     "P350": [
      484.1,
      186.92607724565156
     ],
     "P351": [
      486.4,
      187.03914202891553
     ],
     "P352": [
      486.4,
      187.03914202891553
     ],
     "P353": [
      488.7,
      187.14855672660946
     ],
     "P354": [
      488.7,
      187.14855672660946
     ],
     "P355": [
      491,
      187.25452643901338
     ],
     "P356": [
      491,
      187.25452643901338
     ],
     "P357": [
      493.3,
      187.35723968324365
     ],
     "P358": [
      493.3,
      187.35723968324365
     ],
     "P359": [
      495.6,
      187.4568701304877
     ],
     "P360": [
      495.6,
      187.4568701304877
     ],
     "P361": [
      497.9,
      187.55357812164792
     ],
     "P362": [
      497.9,
      187.55357812164792
     ],
     "P363": [
      500.2,
      187.64751199446357
     ],
     "P364": [
      500.2,
      187.64751199446357
     ],
     "P365": [
      502.5,
      187.73880924956103
     ],
     "P366": [
      502.5,
      187.73880924956103
     ],
     "P367": [
      504.8,
      187.82759757833207
     ],
     "P368": [
      504.8,
      187.82759757833207
     ],
     "P369": [
      507.1,
      187.9139957718297
     ],
     "P370": [
      507.1,
      187.9139957718297
     ],
     "P371": [
      509.4,
      187.99811452683159
     ],
     "P372": [
      509.4,
      187.99811452683159
     ],
     "P373": [
      511.7,
      188.0800571627219
     ],
     "P374": [
      511.7,
      188.0800571627219
     ],
     "P375": [
      514,
      188.15992026077274
     ],
     "P376": [
      514,
      188.15992026077274
     ],
     "P377": [
      516.3,
      188.23779423569056
     ],
     "P378": [
      516.3,
      188.23779423569056
     ],
     "P379": [
      518.6,
      188.31376384785926
     ],
     "P380": [
      518.6,
      188.31376384785926
     ],
     "P381": [
      520.9,
      188.38790866351218
     ],
     "P382": [
      520.9,
      188.38790866351218
     ],
     "P383": [
      523.2,
      188.4603034690578
     ],
     "P384": [
      523.2,
      188.4603034690578
     ],
     "P385": [
      525.5,
      188.53101864493092
     ],
     "P386": [
      525.5,
      188.53101864493092
     ],
     "P387": [
      527.8,
      188.6001205036236
     ],
     "P388": [
      527.8,
      188.6001205036236
     ],
     "P389": [
      530.1,
      188.6676715959349
     ],
     "P390": [
      530.1,
      188.6676715959349
     ],
     "P391": [
      532.4,
      188.73373098895854
     ],
     "P392": [
      532.4,
      188.73373098895854
     ],
     "P393": [
      534.7,
      188.79835451888067
     ],
     "P394": [
      534.7,
      188.79835451888067
     ],
     "P395": [
      537,
      188.86159502127805
     ],
     "P396": [
      537,
      188.86159502127805
     ],
     "P397": [
      539.3,
      188.92350254127615
     ],
     "P398": [
      539.3,
      188.92350254127615
     ],
     "P399": [
      541.6,
      188.98412452564443
     ],
     "P400": [
      541.6,
      188.98412452564443
     ],
     "P401": [
      543.9,
      189.04350599865975
     ],
     "P402": [
      543.9,
      189.04350599865975
     ],
     "P403": [
      546.2,
      189.1016897233559
     ],
     "P404": [
      546.2,
      189.1016897233559
     ],
     "P405": [
      548.5,
      189.15871634959208
     ],
     "P406": [
      548.5,
      189.15871634959208
     ],
     "P407": [
      550.8,
      189.2146245502127
     ],
     "P408": [
      550.8,
      189.2146245502127
     ],
     "P409": [
      553.1,
      189.26945114642857
     ],
     "P410": [
      553.1,
      189.26945114642857
     ],
     "P411": [
      555.4,
      189.32323122342734
     ],
     "P412": [
      555.4,
      189.32323122342734
     ],
     "P413": [
      557.7,
      189.3759982371128
     ],
     "P414": [
      557.7,
      189.3759982371128
     ],
     "P415": [
      560,
      189.4277841127771
     ],
     "P416": [
      253.33333333333334,
      212
     ],
     "P417": [
      253.33333333333334,
      62
     ],
     "P418": [
      406.6666666666667,
      212
     ],
     "P419": [
      406.6666666666667,
      62
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323P324P325P326P327P328P329P330P331P332P333P334P335P336P337P338P339P340P341P342P343P344P345P346P347P348P349P350P351P352P353P354P355P356P357P358P359P360P361P362P363P364P365P366P367P368P369P370P371P372P373P374P375P376P377P378P379P380P381P382P383P384P385P386P387P388P389P390P391P392P393P394P395P396P397P398P399P400P401P402P403P404P405P406P407P408P409P410P411P412P413P414P415P416P417P418P419",
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
     },
     {
      "v": "P76P77",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P78P79",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P80P81",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P82P83",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P84P85",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P86P87",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P88P89",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P90P91",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P92P93",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P94P95",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P96P97",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P98P99",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P100P101",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P102P103",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P104P105",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P106P107",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P108P109",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P110P111",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P112P113",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P114P115",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P116P117",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P118P119",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P120P121",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P122P123",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P124P125",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P126P127",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P128P129",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P130P131",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P132P133",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P134P135",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P136P137",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P138P139",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P140P141",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P142P143",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P144P145",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P146P147",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P148P149",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P150P151",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P152P153",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P154P155",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P156P157",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P158P159",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P160P161",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P162P163",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P164P165",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P166P167",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P168P169",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P170P171",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P172P173",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P174P175",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P176P177",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P178P179",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P180P181",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P182P183",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P184P185",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P186P187",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P188P189",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P190P191",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P192P193",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P194P195",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P196P197",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P198P199",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P200P201",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P202P203",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P204P205",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P206P207",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P208P209",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P210P211",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P212P213",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P214P215",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P216P217",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P218P219",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P220P221",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P222P223",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P224P225",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P226P227",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P228P229",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P230P231",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P232P233",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P234P235",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P236P237",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P238P239",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P240P241",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P242P243",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P244P245",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P246P247",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P248P249",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P250P251",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P252P253",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P254P255",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P256P257",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P258P259",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P260P261",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P262P263",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P264P265",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P266P267",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P268P269",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P270P271",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P272P273",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P274P275",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P276P277",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P278P279",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P280P281",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P282P283",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P284P285",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P286P287",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P288P289",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P290P291",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P292P293",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P294P295",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P296P297",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P298P299",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P300P301",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P302P303",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P304P305",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P306P307",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P308P309",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P310P311",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P312P313",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P314P315",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P316P317",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P318P319",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P320P321",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P322P323",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P324P325",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P326P327",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P328P329",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P330P331",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P332P333",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P334P335",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P336P337",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P338P339",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P340P341",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P342P343",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P344P345",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P346P347",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P348P349",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P350P351",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P352P353",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P354P355",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P356P357",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P358P359",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P360P361",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P362P363",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P364P365",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P366P367",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P368P369",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P370P371",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P372P373",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P374P375",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P376P377",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P378P379",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P380P381",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P382P383",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P384P385",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P386P387",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P388P389",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P390P391",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P392P393",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P394P395",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P396P397",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P398P399",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P400P401",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P402P403",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P404P405",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P406P407",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P408P409",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P410P411",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P412P413",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P414P415",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P416P417",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P418P419",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       53,
       178
      ],
      "text": "pH",
      "col": 0
     },
     {
      "at": [
       76,
       62
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       76,
       103.19999999999999
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       76,
       134.10000000000002
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       76,
       165
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       76,
       206.20000000000002
      ],
      "text": "14",
      "col": 0
     },
     {
      "at": [
       100,
       46
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       176.66666666666669,
       46
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       253.33333333333334,
       46
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       330,
       46
      ],
      "text": "30",
      "col": 0
     },
     {
      "at": [
       406.6666666666667,
       46
      ],
      "text": "40",
      "col": 0
     },
     {
      "at": [
       483.3333333333333,
       46
      ],
      "text": "50",
      "col": 0
     },
     {
      "at": [
       560,
       46
      ],
      "text": "60",
      "col": 0
     },
     {
      "at": [
       397,
       29
      ],
      "text": "Added strong base (mL)",
      "col": 0
     },
     {
      "at": [
       329,
       215
      ],
      "text": "Distinct equivalences: 20 and 40 mL",
      "col": 2
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "12": {
    "t": "setups",
    "title": "Original weak-acid titration evidence",
    "head": "Quantity",
    "cols": [
     "Observed / specified"
    ],
    "rows": [
     [
      "HA sample volume",
      "20.0 mL"
     ],
     [
      "NaOH concentration",
      "0.100 M"
     ],
     [
      "Equivalence volume",
      "30.0 mL"
     ],
     [
      "pH at 15.0 mL",
      "4.80"
     ]
    ]
   },
   "13": {
    "t": "setups",
    "title": "Original weak-acid titration evidence",
    "head": "Quantity",
    "cols": [
     "Observed / specified"
    ],
    "rows": [
     [
      "HA sample volume",
      "20.0 mL"
     ],
     [
      "NaOH concentration",
      "0.100 M"
     ],
     [
      "Equivalence volume",
      "30.0 mL"
     ],
     [
      "pH at 15.0 mL",
      "4.80"
     ]
    ]
   },
   "14": {
    "t": "setups",
    "title": "Original weak-acid titration evidence",
    "head": "Quantity",
    "cols": [
     "Observed / specified"
    ],
    "rows": [
     [
      "HA sample volume",
      "20.0 mL"
     ],
     [
      "NaOH concentration",
      "0.100 M"
     ],
     [
      "Equivalence volume",
      "30.0 mL"
     ],
     [
      "pH at 15.0 mL",
      "4.80"
     ]
    ]
   }
  }
 },
 {
  "code": "8.6",
  "name": "Molecular Structure of Acids and Bases",
  "skill": "s6",
  "teach": [
   "Molecular structure helps explain proton donation by comparing the stability of the conjugate base with that of the acid. In a carboxylic acid RCOOH, the O-H proton is the ordinarily acidic proton; the resulting carboxylate distributes negative charge over two oxygens through resonance. These are contributing drawings of one delocalized ion, not two ions switching places. An electron-withdrawing substituent near the acid group can stabilize the conjugate base by an inductive effect. For example, replacing a methyl hydrogen of acetic acid with chlorine strengthens the acid. Compare related structures; the mere presence of any hydrogen does not make all protons equally acidic.",
   "Nitrogen bases such as ammonia accept a proton using an available lone pair: NH3 + H3O+ ⇌ NH4+ + H2O. Carboxylate ions can also accept a proton and are weak bases in water. Across related binary hydrides in a period, increasing electronegativity tends to increase acidity; down a halogen group, weakening the H-X bond helps explain why HF is weak in water whereas HCl, HBr and HI are strong. No single electronegativity rule explains every trend. A stronger acid has a weaker conjugate base in the same solvent at the same temperature, because the conjugate constants have a fixed product."
  ],
  "boards": [
   [
    "RCOOH: ordinary acidic proton is on oxygen",
    "Carboxylate charge is delocalized over two oxygens",
    "Nearby electron withdrawal can stabilize the base",
    "Compare conjugate-base and acid stabilization"
   ],
   [
    "NH3 accepts H+ using a lone pair",
    "Conjugate pair: NH4+ / NH3",
    "Across a period: electronegativity can matter",
    "Down halogens: weaker H-X bonds favor acidity"
   ]
  ],
  "eqs": [
   "RCOOH ⇌ H+ + RCOO-",
   "NH3 + H3O+ ⇌ NH4+ + H2O"
  ],
  "questions": [
   [
    "Which proton is ordinarily donated by a carboxylic acid RCOOH in an aqueous acid-base reaction?",
    "The O-H proton",
    "Every C-H proton equally",
    "A proton inside a carbon nucleus",
    "Loss of the O-H proton forms a resonance-stabilized carboxylate; the other hydrogens need not have comparable acidity."
   ],
   [
    "How does resonance help explain carboxylic-acid acidity?",
    "The carboxylate conjugate base delocalizes negative charge over two oxygens",
    "It makes two separate carboxylate ions from one acid",
    "It destroys charge conservation",
    "Delocalization stabilizes the conjugate base relative to a localized charge description, supporting proton loss."
   ],
   [
    "What do the two usual resonance contributors of a carboxylate represent?",
    "One ion with a delocalized electronic structure",
    "Two distinct ions rapidly moving between containers",
    "Two added protons",
    "Resonance contributors describe one electronic structure; they are not separate chemical species in equilibrium."
   ],
   [
    "Relative to acetic acid, why is chloroacetic acid stronger?",
    "The nearby electron-withdrawing chlorine helps stabilize the conjugate base",
    "Chlorine supplies an extra acidic proton",
    "Every chlorine-containing compound is a strong acid",
    "The substituent draws electron density through bonds, stabilizing the conjugate base and favoring proton donation."
   ],
   [
    "What feature of ammonia allows it to accept H+?",
    "An available nitrogen lone pair",
    "A hydroxide group in the NH3 formula",
    "A negative overall charge on every NH3 molecule",
    "The nitrogen lone pair can form a bond to a proton, producing NH4+ even though NH3 itself is neutral."
   ],
   [
    "Which pair differs by one proton and can act as a conjugate acid-base pair?",
    "NH4+ and NH3",
    "NH4+ and NO3-",
    "NH3 and N2",
    "Removing one proton from NH4+ produces NH3; conjugate partners differ by one H+ only."
   ],
   [
    "Why is HCl a much stronger acid in water than HF despite fluorine being more electronegative?",
    "The stronger H-F bond helps resist proton loss; bond strength also matters",
    "Electronegativity alone decides every acid trend",
    "HF contains no hydrogen",
    "Down the hydrogen halides, bond weakening is important; a single electronegativity comparison misses this structural factor."
   ],
   [
    "For conjugate pairs in the same solvent at the same temperature, how does increasing acid strength affect conjugate-base strength?",
    "The conjugate base becomes weaker",
    "The conjugate base necessarily becomes stronger",
    "The conjugate base disappears from the balanced equation",
    "A larger Ka corresponds to a smaller conjugate Kb because their product is fixed at Kw."
   ],
   [
    "Why can a carboxylate ion RCOO- act as a weak base in water?",
    "It can accept a proton to form RCOOH",
    "It must release all of its oxygen atoms",
    "Its negative charge makes it a strong acid",
    "A carboxylate accepts H+ from water to some extent, forming its conjugate acid and hydroxide."
   ],
   [
    "What is a sound approach when comparing acid strengths from structure?",
    "Consider bond strength and relative conjugate-base stabilization",
    "Count hydrogens and declare the largest count strongest",
    "Use molecular mass as the only criterion",
    "Acidity depends on the energetics of proton transfer, which structural factors such as bond strength and charge stabilization influence."
   ]
  ],
  "check": [
   "A substituent stabilizes a conjugate base relative to its acid. All else comparable, what acid-strength change is expected?",
   "Greater acid strength",
   "Less acid strength",
   "No possible effect on acidity",
   "Relative stabilization of the product conjugate base favors proton donation, increasing acid strength."
  ]
 },
 {
  "code": "8.7",
  "name": "pH and pKa",
  "skill": "s7",
  "teach": [
   "For a conjugate HA/A- pair in the dilute equilibrium model, pH relative to pKa tells which form predominates. At pH = pKa, the forms have equal concentrations. One pH unit below pKa gives [A-]/[HA] = 0.10, so HA is ten times as abundant; one unit above gives ratio 10 and favors A-. For a hypothetical pair with pKa 6.00 at pH 7.00, about 10/11, or 91%, is A-. Predominant does not mean exclusive: the minority form generally remains. For a base B, compare pH with the pKa of BH+, not indiscriminately with pKb of B.",
   "An acid-base indicator has protonated and deprotonated forms with different colors. In an invented HIn/In- indicator with pKa 5.00, HIn is yellow and In- is blue. Near pH 4 the yellow form dominates; near pH 6 the blue form dominates. A visible transition usually spans a range rather than one exact pH. For titration, choose an indicator whose transition interval lies within the steep pH change near equivalence. Selecting by the starting solution color alone can cause a biased endpoint. Color interpretation also depends on concentration and observation conditions, so it is not an exact substitute for a calibrated pH measurement."
  ],
  "boards": [
   [
    "pH below pKa: protonated form dominates",
    "pH equals pKa: equal conjugate concentrations",
    "pH above pKa: deprotonated form dominates",
    "One unit above: base/acid ratio 10"
   ],
   [
    "Invented indicator: HIn yellow; In- blue",
    "pKa 5.00: yellow near pH 4; blue near pH 6",
    "Color transition spans a range",
    "Choose a transition within the equivalence jump"
   ]
  ],
  "eqs": [
   "[A-]/[HA] = 10^(pH-pKa)",
   "At pH = pKa: [HIn] = [In-]"
  ],
  "questions": [
   [
    "A hypothetical HA/A- pair has pKa 5.00 and solution pH 3.00. Which form predominates?",
    "HA",
    "A-",
    "Both must be exactly equal",
    "The pH is below pKa, so the protonated form HA is more abundant; here [A-]/[HA] is 0.01."
   ],
   [
    "A hypothetical HA/A- pair has pKa 4.00 and solution pH 6.00. Which form predominates?",
    "A-",
    "HA",
    "Neither can exist",
    "The pH exceeds pKa, favoring the deprotonated form; the ratio [A-]/[HA] is 100."
   ],
   [
    "For an HA/A- pair at pH equal to pKa, what is [A-]/[HA] in the dilute equilibrium model?",
    "1",
    "0",
    "10",
    "The logarithmic difference is zero, so the ratio is 10^0 = 1 and the two concentrations are equal."
   ],
   [
    "For an HA/A- pair, pH is 2.00 units above pKa. What is [A-]/[HA]?",
    "100",
    "0.01",
    "2",
    "The ratio is 10^(pH-pKa) = 10^2 = 100; pH differences represent powers of ten."
   ],
   [
    "For an HA/A- pair, pH is 1.00 unit below pKa. What is [A-]/[HA]?",
    "0.10",
    "10",
    "1",
    "The ratio is 10^(-1) = 0.10, so the protonated acid has ten times the concentration of its conjugate base."
   ],
   [
    "A weak base B has conjugate acid BH+ with pKa 9.00. At pH 7.00, which partner predominates?",
    "BH+",
    "B",
    "OH- must be the only species",
    "Compare pH with the conjugate acid pKa: below 9.00, the protonated BH+ form predominates."
   ],
   [
    "An invented indicator has yellow HIn, blue In-, and pKa 5.00. Near pH 6.00, which form dominates?",
    "Blue In-",
    "Yellow HIn",
    "Both forms must be absent",
    "At pH one unit above pKa, the deprotonated indicator has about ten times the protonated concentration."
   ],
   [
    "A titration has a steep pH change from about 7 to 10 near equivalence. Which indicator transition interval is best among these choices?",
    "8 to 9",
    "2 to 3",
    "12 to 13",
    "An interval inside the steep equivalence-region change gives an endpoint close to the required stoichiometric volume."
   ],
   [
    "Does saying A- predominates at a given pH mean HA is exactly absent?",
    "No; predominance concerns relative concentrations",
    "Yes; the minority form must be mathematically zero",
    "Yes; equilibrium removes all minority species",
    "Equilibrium typically retains both forms; predominance only identifies which concentration is larger."
   ],
   [
    "Why is comparing pH directly with pKb of B generally the wrong test for whether B or BH+ predominates?",
    "pH should be compared with pKa of BH+",
    "pKb is always numerically zero",
    "B and BH+ are not conjugate partners",
    "The hydronium-based relation uses the acid dissociation constant of BH+; pKb belongs to the hydroxide-based relation."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Protonated and deprotonated fractions",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      105,
      196
     ],
     "P1": [
      105,
      56
     ],
     "P2": [
      105,
      56
     ],
     "P3": [
      557,
      56
     ],
     "P4": [
      105,
      188.86713286713288
     ],
     "P5": [
      108.74999999999999,
      188.85093879500067
     ],
     "P6": [
      108.74999999999999,
      188.85093879500067
     ],
     "P7": [
      112.49999999999997,
      188.83277344598974
     ],
     "P8": [
      112.5,
      188.83277344598974
     ],
     "P9": [
      116.25,
      188.81239750213686
     ],
     "P10": [
      116.25,
      188.81239750213686
     ],
     "P11": [
      119.99999999999999,
      188.78954275765335
     ],
     "P12": [
      120.00000000000001,
      188.78954275765335
     ],
     "P13": [
      123.75,
      188.76390867480728
     ],
     "P14": [
      123.75,
      188.76390867480728
     ],
     "P15": [
      127.49999999999999,
      188.73515854029316
     ],
     "P16": [
      127.49999999999999,
      188.73515854029316
     ],
     "P17": [
      131.24999999999997,
      188.70291517863993
     ],
     "P18": [
      131.25,
      188.70291517863993
     ],
     "P19": [
      135,
      188.66675617525098
     ],
     "P20": [
      135,
      188.66675617525098
     ],
     "P21": [
      138.74999999999997,
      188.62620855756305
     ],
     "P22": [
      138.75,
      188.62620855756305
     ],
     "P23": [
      142.5,
      188.5807428786264
     ],
     "P24": [
      142.5,
      188.5807428786264
     ],
     "P25": [
      146.25,
      188.5297666432298
     ],
     "P26": [
      146.25,
      188.5297666432298
     ],
     "P27": [
      149.99999999999997,
      188.47261701265273
     ],
     "P28": [
      150,
      188.47261701265273
     ],
     "P29": [
      153.75,
      188.40855272039343
     ],
     "P30": [
      153.75,
      188.40855272039343
     ],
     "P31": [
      157.49999999999997,
      188.3367451280205
     ],
     "P32": [
      157.5,
      188.3367451280205
     ],
     "P33": [
      161.25,
      188.25626834792496
     ],
     "P34": [
      161.25,
      188.25626834792496
     ],
     "P35": [
      165,
      188.1660883585893
     ],
     "P36": [
      165,
      188.1660883585893
     ],
     "P37": [
      168.74999999999997,
      188.065051038528
     ],
     "P38": [
      168.75,
      188.065051038528
     ],
     "P39": [
      172.5,
      187.9518690479061
     ],
     "P40": [
      172.5,
      187.9518690479061
     ],
     "P41": [
      176.25,
      187.82510749277483
     ],
     "P42": [
      176.25,
      187.82510749277483
     ],
     "P43": [
      180,
      187.68316831683168
     ],
     "P44": [
      180,
      187.68316831683168
     ],
     "P45": [
      183.75,
      187.5242733807811
     ],
     "P46": [
      183.75,
      187.5242733807811
     ],
     "P47": [
      187.49999999999997,
      187.34644621115916
     ],
     "P48": [
      187.5,
      187.34644621115916
     ],
     "P49": [
      191.25,
      187.14749243058668
     ],
     "P50": [
      191.25,
      187.14749243058668
     ],
     "P51": [
      195,
      186.92497892183667
     ],
     "P52": [
      195,
      186.92497892183667
     ],
     "P53": [
      198.75,
      186.67621183118715
     ],
     "P54": [
      198.75,
      186.67621183118715
     ],
     "P55": [
      202.5,
      186.39821358494694
     ],
     "P56": [
      202.5,
      186.39821358494694
     ],
     "P57": [
      206.24999999999997,
      186.08769917978498
     ],
     "P58": [
      206.25,
      186.08769917978498
     ],
     "P59": [
      210,
      185.74105211580533
     ],
     "P60": [
      210,
      185.74105211580533
     ],
     "P61": [
      213.75,
      185.35430047456822
     ],
     "P62": [
      213.75,
      185.35430047456822
     ],
     "P63": [
      217.5,
      184.92309380578183
     ],
     "P64": [
      217.5,
      184.92309380578183
     ],
     "P65": [
      221.25,
      184.4426816791183
     ],
     "P66": [
      221.25,
      184.4426816791183
     ],
     "P67": [
      224.99999999999997,
      183.90789498366013
     ],
     "P68": [
      225,
      183.90789498366013
     ],
     "P69": [
      228.75,
      183.3131313175107
     ],
     "P70": [
      228.75,
      183.3131313175107
     ],
     "P71": [
      232.5,
      182.6523461024509
     ],
     "P72": [
      232.5,
      182.6523461024509
     ],
     "P73": [
      236.25,
      181.91905137813103
     ],
     "P74": [
      236.25,
      181.91905137813103
     ],
     "P75": [
      240,
      181.1063245673319
     ],
     "P76": [
      240,
      181.1063245673319
     ],
     "P77": [
      243.74999999999997,
      180.206829842153
     ],
     "P78": [
      243.75,
      180.20682984215296
     ],
     "P79": [
      247.5,
      179.21285503636273
     ],
     "P80": [
      247.5,
      179.21285503636273
     ],
     "P81": [
      251.24999999999997,
      178.1163673075648
     ],
     "P82": [
      251.25,
      178.1163673075648
     ],
     "P83": [
      255,
      176.9090909090909
     ],
     "P84": [
      255,
      176.9090909090909
     ],
     "P85": [
      258.75,
      175.58261042855582
     ],
     "P86": [
      258.75,
      175.58261042855582
     ],
     "P87": [
      262.5,
      174.12850261951047
     ],
     "P88": [
      262.5,
      174.12850261951047
     ],
     "P89": [
      266.25,
      172.53849941783162
     ],
     "P90": [
      266.25,
      172.5384994178316
     ],
     "P91": [
      270,
      170.80468381577305
     ],
     "P92": [
      270,
      170.80468381577305
     ],
     "P93": [
      273.75,
      168.919718890894
     ],
     "P94": [
      273.75,
      168.919718890894
     ],
     "P95": [
      277.5,
      166.87710840139727
     ],
     "P96": [
      277.5,
      166.87710840139727
     ],
     "P97": [
      281.25,
      164.67148494859657
     ],
     "P98": [
      281.25,
      164.67148494859657
     ],
     "P99": [
      285,
      162.29891881455748
     ],
     "P100": [
      285,
      162.29891881455745
     ],
     "P101": [
      288.75,
      159.75723733109007
     ],
     "P102": [
      288.75,
      159.75723733109007
     ],
     "P103": [
      292.5,
      157.0463412441784
     ],
     "P104": [
      292.5,
      157.0463412441784
     ],
     "P105": [
      296.25,
      154.1685013278757
     ],
     "P106": [
      296.25,
      154.1685013278757
     ],
     "P107": [
      300,
      151.12861588954343
     ],
     "P108": [
      300,
      151.12861588954343
     ],
     "P109": [
      303.75,
      147.9344082711635
     ],
     "P110": [
      303.75,
      147.93440827116345
     ],
     "P111": [
      307.5,
      144.59654346955523
     ],
     "P112": [
      307.5,
      144.59654346955523
     ],
     "P113": [
      311.25,
      141.1286449737837
     ],
     "P114": [
      311.25,
      141.1286449737837
     ],
     "P115": [
      315,
      137.54719708036805
     ],
     "P116": [
      315,
      137.54719708036805
     ],
     "P117": [
      318.75,
      133.8713242633507
     ],
     "P118": [
      318.75,
      133.8713242633507
     ],
     "P119": [
      322.5,
      130.12244729038497
     ],
     "P120": [
      322.5,
      130.1224472903849
     ],
     "P121": [
      326.25,
      126.3238249976717
     ],
     "P122": [
      326.25,
      126.3238249976717
     ],
     "P123": [
      330,
      122.5
     ],
     "P124": [
      330,
      122.5
     ],
     "P125": [
      333.75,
      118.6761750023283
     ],
     "P126": [
      333.75,
      118.6761750023283
     ],
     "P127": [
      337.5,
      114.87755270961509
     ],
     "P128": [
      337.5,
      114.87755270961509
     ],
     "P129": [
      341.25,
      111.12867573664937
     ],
     "P130": [
      341.25,
      111.12867573664931
     ],
     "P131": [
      345,
      107.45280291963198
     ],
     "P132": [
      345,
      107.45280291963198
     ],
     "P133": [
      348.75,
      103.87135502621629
     ],
     "P134": [
      348.75,
      103.87135502621629
     ],
     "P135": [
      352.5,
      100.40345653044477
     ],
     "P136": [
      352.5,
      100.40345653044477
     ],
     "P137": [
      356.25,
      97.06559172883655
     ],
     "P138": [
      356.25,
      97.06559172883655
     ],
     "P139": [
      360,
      93.87138411045663
     ],
     "P140": [
      360,
      93.87138411045657
     ],
     "P141": [
      363.75,
      90.83149867212433
     ],
     "P142": [
      363.75,
      90.83149867212433
     ],
     "P143": [
      367.5,
      87.9536587558216
     ],
     "P144": [
      367.5,
      87.9536587558216
     ],
     "P145": [
      371.25,
      85.24276266890993
     ],
     "P146": [
      371.25,
      85.24276266890993
     ],
     "P147": [
      375,
      82.70108118544255
     ],
     "P148": [
      375,
      82.70108118544255
     ],
     "P149": [
      378.74999999999994,
      80.32851505140346
     ],
     "P150": [
      378.75,
      80.32851505140343
     ],
     "P151": [
      382.5,
      78.12289159860273
     ],
     "P152": [
      382.5,
      78.12289159860273
     ],
     "P153": [
      386.25,
      76.08028110910601
     ],
     "P154": [
      386.25,
      76.08028110910601
     ],
     "P155": [
      390,
      74.19531618422693
     ],
     "P156": [
      390,
      74.19531618422693
     ],
     "P157": [
      393.75,
      72.46150058216841
     ],
     "P158": [
      393.75,
      72.46150058216841
     ],
     "P159": [
      397.49999999999994,
      70.87149738048959
     ],
     "P160": [
      397.5,
      70.87149738048953
     ],
     "P161": [
      401.25,
      69.4173895714442
     ],
     "P162": [
      401.25,
      69.4173895714442
     ],
     "P163": [
      405,
      68.0909090909091
     ],
     "P164": [
      405,
      68.0909090909091
     ],
     "P165": [
      408.75,
      66.88363269243521
     ],
     "P166": [
      408.75,
      66.88363269243521
     ],
     "P167": [
      412.5,
      65.78714496363727
     ],
     "P168": [
      412.5,
      65.78714496363727
     ],
     "P169": [
      416.24999999999994,
      64.79317015784702
     ],
     "P170": [
      416.25,
      64.79317015784702
     ],
     "P171": [
      420,
      63.89367543266809
     ],
     "P172": [
      420,
      63.89367543266809
     ],
     "P173": [
      423.75,
      63.080948621869
     ],
     "P174": [
      423.75,
      63.080948621869
     ],
     "P175": [
      427.5,
      62.34765389754912
     ],
     "P176": [
      427.5,
      62.34765389754912
     ],
     "P177": [
      431.25,
      61.68686868248929
     ],
     "P178": [
      431.25,
      61.68686868248929
     ],
     "P179": [
      434.99999999999994,
      61.09210501633987
     ],
     "P180": [
      435,
      61.09210501633987
     ],
     "P181": [
      438.75,
      60.557318320881734
     ],
     "P182": [
      438.75,
      60.557318320881734
     ],
     "P183": [
      442.5,
      60.07690619421817
     ],
     "P184": [
      442.5,
      60.07690619421817
     ],
     "P185": [
      446.25,
      59.64569952543178
     ],
     "P186": [
      446.25,
      59.64569952543178
     ],
     "P187": [
      450,
      59.2589478841947
     ],
     "P188": [
      450,
      59.2589478841947
     ],
     "P189": [
      453.74999999999994,
      58.91230082021505
     ],
     "P190": [
      453.75,
      58.91230082021502
     ],
     "P191": [
      457.5,
      58.601786415053084
     ],
     "P192": [
      457.5,
      58.601786415053084
     ],
     "P193": [
      461.25,
      58.323788168812854
     ],
     "P194": [
      461.25,
      58.323788168812854
     ],
     "P195": [
      465,
      58.07502107816333
     ],
     "P196": [
      465,
      58.07502107816333
     ],
     "P197": [
      468.75,
      57.85250756941332
     ],
     "P198": [
      468.75,
      57.85250756941332
     ],
     "P199": [
      472.49999999999994,
      57.65355378884084
     ],
     "P200": [
      472.5,
      57.65355378884084
     ],
     "P201": [
      476.25,
      57.47572661921893
     ],
     "P202": [
      476.25,
      57.47572661921893
     ],
     "P203": [
      480,
      57.31683168316832
     ],
     "P204": [
      480,
      57.31683168316832
     ],
     "P205": [
      483.75,
      57.17489250722517
     ],
     "P206": [
      483.75,
      57.17489250722517
     ],
     "P207": [
      487.5,
      57.04813095209394
     ],
     "P208": [
      487.5,
      57.04813095209394
     ],
     "P209": [
      491.24999999999994,
      56.93494896147203
     ],
     "P210": [
      491.25,
      56.93494896147203
     ],
     "P211": [
      495,
      56.83391164141071
     ],
     "P212": [
      495,
      56.83391164141071
     ],
     "P213": [
      498.75,
      56.74373165207501
     ],
     "P214": [
      498.75,
      56.74373165207501
     ],
     "P215": [
      502.5,
      56.66325487197949
     ],
     "P216": [
      502.5,
      56.66325487197949
     ],
     "P217": [
      506.25,
      56.59144727960657
     ],
     "P218": [
      506.25,
      56.59144727960657
     ],
     "P219": [
      509.99999999999994,
      56.52738298734724
     ],
     "P220": [
      510,
      56.52738298734724
     ],
     "P221": [
      513.75,
      56.470233356770194
     ],
     "P222": [
      513.75,
      56.470233356770194
     ],
     "P223": [
      517.5,
      56.41925712137362
     ],
     "P224": [
      517.5,
      56.41925712137362
     ],
     "P225": [
      521.25,
      56.37379144243695
     ],
     "P226": [
      521.25,
      56.37379144243695
     ],
     "P227": [
      525,
      56.33324382474899
     ],
     "P228": [
      525,
      56.33324382474899
     ],
     "P229": [
      528.75,
      56.29708482136007
     ],
     "P230": [
      528.75,
      56.29708482136007
     ],
     "P231": [
      532.5,
      56.26484145970687
     ],
     "P232": [
      532.5,
      56.26484145970687
     ],
     "P233": [
      536.25,
      56.23609132519269
     ],
     "P234": [
      536.25,
      56.23609132519269
     ],
     "P235": [
      540,
      56.21045724234662
     ],
     "P236": [
      540,
      56.21045724234662
     ],
     "P237": [
      543.75,
      56.18760249786314
     ],
     "P238": [
      543.75,
      56.18760249786314
     ],
     "P239": [
      547.5,
      56.167226554010256
     ],
     "P240": [
      547.5,
      56.167226554010256
     ],
     "P241": [
      551.25,
      56.14906120499933
     ],
     "P242": [
      551.25,
      56.14906120499933
     ],
     "P243": [
      555,
      56.13286713286712
     ],
     "P244": [
      105,
      56.13286713286712
     ],
     "P245": [
      108.74999999999999,
      56.14906120499933
     ],
     "P246": [
      108.74999999999999,
      56.14906120499933
     ],
     "P247": [
      112.49999999999997,
      56.167226554010256
     ],
     "P248": [
      112.5,
      56.167226554010256
     ],
     "P249": [
      116.25,
      56.18760249786314
     ],
     "P250": [
      116.25,
      56.18760249786314
     ],
     "P251": [
      119.99999999999999,
      56.21045724234662
     ],
     "P252": [
      120.00000000000001,
      56.21045724234662
     ],
     "P253": [
      123.75,
      56.23609132519269
     ],
     "P254": [
      123.75,
      56.23609132519269
     ],
     "P255": [
      127.49999999999999,
      56.26484145970687
     ],
     "P256": [
      127.49999999999999,
      56.26484145970687
     ],
     "P257": [
      131.24999999999997,
      56.29708482136007
     ],
     "P258": [
      131.25,
      56.29708482136007
     ],
     "P259": [
      135,
      56.33324382474899
     ],
     "P260": [
      135,
      56.33324382474899
     ],
     "P261": [
      138.74999999999997,
      56.37379144243695
     ],
     "P262": [
      138.75,
      56.37379144243695
     ],
     "P263": [
      142.5,
      56.41925712137362
     ],
     "P264": [
      142.5,
      56.41925712137362
     ],
     "P265": [
      146.25,
      56.470233356770194
     ],
     "P266": [
      146.25,
      56.470233356770194
     ],
     "P267": [
      149.99999999999997,
      56.52738298734724
     ],
     "P268": [
      150,
      56.52738298734724
     ],
     "P269": [
      153.75,
      56.59144727960654
     ],
     "P270": [
      153.75,
      56.59144727960654
     ],
     "P271": [
      157.49999999999997,
      56.66325487197949
     ],
     "P272": [
      157.5,
      56.66325487197949
     ],
     "P273": [
      161.25,
      56.74373165207501
     ],
     "P274": [
      161.25,
      56.74373165207501
     ],
     "P275": [
      165,
      56.83391164141071
     ],
     "P276": [
      165,
      56.83391164141071
     ],
     "P277": [
      168.74999999999997,
      56.93494896147203
     ],
     "P278": [
      168.75,
      56.93494896147203
     ],
     "P279": [
      172.5,
      57.04813095209394
     ],
     "P280": [
      172.5,
      57.04813095209394
     ],
     "P281": [
      176.25,
      57.17489250722517
     ],
     "P282": [
      176.25,
      57.17489250722517
     ],
     "P283": [
      180,
      57.31683168316832
     ],
     "P284": [
      180,
      57.31683168316832
     ],
     "P285": [
      183.75,
      57.47572661921893
     ],
     "P286": [
      183.75,
      57.47572661921893
     ],
     "P287": [
      187.49999999999997,
      57.65355378884084
     ],
     "P288": [
      187.5,
      57.65355378884084
     ],
     "P289": [
      191.25,
      57.85250756941332
     ],
     "P290": [
      191.25,
      57.85250756941332
     ],
     "P291": [
      195,
      58.07502107816333
     ],
     "P292": [
      195,
      58.07502107816333
     ],
     "P293": [
      198.75,
      58.323788168812854
     ],
     "P294": [
      198.75,
      58.323788168812854
     ],
     "P295": [
      202.5,
      58.601786415053084
     ],
     "P296": [
      202.5,
      58.601786415053084
     ],
     "P297": [
      206.24999999999997,
      58.91230082021502
     ],
     "P298": [
      206.25,
      58.91230082021505
     ],
     "P299": [
      210,
      59.2589478841947
     ],
     "P300": [
      210,
      59.2589478841947
     ],
     "P301": [
      213.75,
      59.64569952543175
     ],
     "P302": [
      213.75,
      59.64569952543178
     ],
     "P303": [
      217.5,
      60.07690619421817
     ],
     "P304": [
      217.5,
      60.07690619421817
     ],
     "P305": [
      221.25,
      60.557318320881734
     ],
     "P306": [
      221.25,
      60.557318320881734
     ],
     "P307": [
      224.99999999999997,
      61.09210501633987
     ],
     "P308": [
      225,
      61.09210501633987
     ],
     "P309": [
      228.75,
      61.68686868248929
     ],
     "P310": [
      228.75,
      61.68686868248929
     ],
     "P311": [
      232.5,
      62.34765389754912
     ],
     "P312": [
      232.5,
      62.34765389754912
     ],
     "P313": [
      236.25,
      63.080948621869
     ],
     "P314": [
      236.25,
      63.080948621869
     ],
     "P315": [
      240,
      63.89367543266809
     ],
     "P316": [
      240,
      63.89367543266809
     ],
     "P317": [
      243.74999999999997,
      64.79317015784702
     ],
     "P318": [
      243.75,
      64.79317015784702
     ],
     "P319": [
      247.5,
      65.78714496363727
     ],
     "P320": [
      247.5,
      65.78714496363727
     ],
     "P321": [
      251.24999999999997,
      66.88363269243521
     ],
     "P322": [
      251.25,
      66.88363269243521
     ],
     "P323": [
      255,
      68.0909090909091
     ],
     "P324": [
      255,
      68.0909090909091
     ],
     "P325": [
      258.75,
      69.4173895714442
     ],
     "P326": [
      258.75,
      69.4173895714442
     ],
     "P327": [
      262.5,
      70.87149738048953
     ],
     "P328": [
      262.5,
      70.87149738048953
     ],
     "P329": [
      266.25,
      72.46150058216838
     ],
     "P330": [
      266.25,
      72.46150058216841
     ],
     "P331": [
      270,
      74.19531618422693
     ],
     "P332": [
      270,
      74.19531618422693
     ],
     "P333": [
      273.75,
      76.08028110910601
     ],
     "P334": [
      273.75,
      76.08028110910601
     ],
     "P335": [
      277.5,
      78.12289159860273
     ],
     "P336": [
      277.5,
      78.12289159860273
     ],
     "P337": [
      281.25,
      80.3285150514034
     ],
     "P338": [
      281.25,
      80.3285150514034
     ],
     "P339": [
      285,
      82.70108118544249
     ],
     "P340": [
      285,
      82.70108118544255
     ],
     "P341": [
      288.75,
      85.24276266890993
     ],
     "P342": [
      288.75,
      85.24276266890993
     ],
     "P343": [
      292.5,
      87.9536587558216
     ],
     "P344": [
      292.5,
      87.9536587558216
     ],
     "P345": [
      296.25,
      90.83149867212433
     ],
     "P346": [
      296.25,
      90.83149867212433
     ],
     "P347": [
      300,
      93.87138411045657
     ],
     "P348": [
      300,
      93.87138411045657
     ],
     "P349": [
      303.75,
      97.0655917288365
     ],
     "P350": [
      303.75,
      97.06559172883655
     ],
     "P351": [
      307.5,
      100.40345653044477
     ],
     "P352": [
      307.5,
      100.40345653044477
     ],
     "P353": [
      311.25,
      103.87135502621629
     ],
     "P354": [
      311.25,
      103.87135502621629
     ],
     "P355": [
      315,
      107.45280291963195
     ],
     "P356": [
      315,
      107.45280291963195
     ],
     "P357": [
      318.75,
      111.12867573664931
     ],
     "P358": [
      318.75,
      111.12867573664931
     ],
     "P359": [
      322.5,
      114.87755270961503
     ],
     "P360": [
      322.5,
      114.87755270961509
     ],
     "P361": [
      326.25,
      118.67617500232828
     ],
     "P362": [
      326.25,
      118.67617500232828
     ],
     "P363": [
      330,
      122.5
     ],
     "P364": [
      330,
      122.5
     ],
     "P365": [
      333.75,
      126.3238249976717
     ],
     "P366": [
      333.75,
      126.3238249976717
     ],
     "P367": [
      337.5,
      130.1224472903849
     ],
     "P368": [
      337.5,
      130.1224472903849
     ],
     "P369": [
      341.25,
      133.87132426335063
     ],
     "P370": [
      341.25,
      133.8713242633507
     ],
     "P371": [
      345,
      137.54719708036805
     ],
     "P372": [
      345,
      137.54719708036805
     ],
     "P373": [
      348.75,
      141.1286449737837
     ],
     "P374": [
      348.75,
      141.1286449737837
     ],
     "P375": [
      352.5,
      144.59654346955523
     ],
     "P376": [
      352.5,
      144.59654346955523
     ],
     "P377": [
      356.25,
      147.93440827116348
     ],
     "P378": [
      356.25,
      147.93440827116348
     ],
     "P379": [
      360,
      151.12861588954337
     ],
     "P380": [
      360,
      151.12861588954343
     ],
     "P381": [
      363.75,
      154.16850132787567
     ],
     "P382": [
      363.75,
      154.16850132787567
     ],
     "P383": [
      367.5,
      157.0463412441784
     ],
     "P384": [
      367.5,
      157.0463412441784
     ],
     "P385": [
      371.25,
      159.75723733109004
     ],
     "P386": [
      371.25,
      159.75723733109004
     ],
     "P387": [
      375,
      162.29891881455745
     ],
     "P388": [
      375,
      162.29891881455745
     ],
     "P389": [
      378.74999999999994,
      164.67148494859657
     ],
     "P390": [
      378.75,
      164.67148494859657
     ],
     "P391": [
      382.5,
      166.87710840139727
     ],
     "P392": [
      382.5,
      166.87710840139727
     ],
     "P393": [
      386.25,
      168.919718890894
     ],
     "P394": [
      386.25,
      168.919718890894
     ],
     "P395": [
      390,
      170.80468381577305
     ],
     "P396": [
      390,
      170.80468381577305
     ],
     "P397": [
      393.75,
      172.5384994178316
     ],
     "P398": [
      393.75,
      172.5384994178316
     ],
     "P399": [
      397.49999999999994,
      174.12850261951044
     ],
     "P400": [
      397.5,
      174.12850261951047
     ],
     "P401": [
      401.25,
      175.58261042855582
     ],
     "P402": [
      401.25,
      175.58261042855582
     ],
     "P403": [
      405,
      176.9090909090909
     ],
     "P404": [
      405,
      176.9090909090909
     ],
     "P405": [
      408.75,
      178.11636730756476
     ],
     "P406": [
      408.75,
      178.11636730756476
     ],
     "P407": [
      412.5,
      179.21285503636273
     ],
     "P408": [
      412.5,
      179.21285503636273
     ],
     "P409": [
      416.24999999999994,
      180.20682984215296
     ],
     "P410": [
      416.25,
      180.20682984215298
     ],
     "P411": [
      420,
      181.1063245673319
     ],
     "P412": [
      420,
      181.1063245673319
     ],
     "P413": [
      423.75,
      181.91905137813103
     ],
     "P414": [
      423.75,
      181.91905137813103
     ],
     "P415": [
      427.5,
      182.65234610245088
     ],
     "P416": [
      427.5,
      182.65234610245088
     ],
     "P417": [
      431.25,
      183.31313131751068
     ],
     "P418": [
      431.25,
      183.31313131751068
     ],
     "P419": [
      434.99999999999994,
      183.90789498366013
     ],
     "P420": [
      435,
      183.90789498366013
     ],
     "P421": [
      438.75,
      184.44268167911827
     ],
     "P422": [
      438.75,
      184.44268167911827
     ],
     "P423": [
      442.5,
      184.92309380578183
     ],
     "P424": [
      442.5,
      184.92309380578183
     ],
     "P425": [
      446.25,
      185.35430047456822
     ],
     "P426": [
      446.25,
      185.35430047456822
     ],
     "P427": [
      450,
      185.7410521158053
     ],
     "P428": [
      450,
      185.7410521158053
     ],
     "P429": [
      453.74999999999994,
      186.08769917978498
     ],
     "P430": [
      453.75,
      186.08769917978498
     ],
     "P431": [
      457.5,
      186.39821358494692
     ],
     "P432": [
      457.5,
      186.39821358494692
     ],
     "P433": [
      461.25,
      186.67621183118715
     ],
     "P434": [
      461.25,
      186.67621183118715
     ],
     "P435": [
      465,
      186.92497892183667
     ],
     "P436": [
      465,
      186.92497892183667
     ],
     "P437": [
      468.75,
      187.14749243058668
     ],
     "P438": [
      468.75,
      187.14749243058668
     ],
     "P439": [
      472.49999999999994,
      187.34644621115916
     ],
     "P440": [
      472.5,
      187.34644621115916
     ],
     "P441": [
      476.25,
      187.52427338078107
     ],
     "P442": [
      476.25,
      187.52427338078107
     ],
     "P443": [
      480,
      187.68316831683168
     ],
     "P444": [
      480,
      187.68316831683168
     ],
     "P445": [
      483.75,
      187.82510749277483
     ],
     "P446": [
      483.75,
      187.82510749277483
     ],
     "P447": [
      487.5,
      187.9518690479061
     ],
     "P448": [
      487.5,
      187.9518690479061
     ],
     "P449": [
      491.24999999999994,
      188.06505103852797
     ],
     "P450": [
      491.25,
      188.06505103852797
     ],
     "P451": [
      495,
      188.1660883585893
     ],
     "P452": [
      495,
      188.1660883585893
     ],
     "P453": [
      498.75,
      188.25626834792496
     ],
     "P454": [
      498.75,
      188.25626834792496
     ],
     "P455": [
      502.5,
      188.33674512802048
     ],
     "P456": [
      502.5,
      188.33674512802048
     ],
     "P457": [
      506.25,
      188.40855272039343
     ],
     "P458": [
      506.25,
      188.40855272039343
     ],
     "P459": [
      509.99999999999994,
      188.47261701265276
     ],
     "P460": [
      510,
      188.47261701265276
     ],
     "P461": [
      513.75,
      188.5297666432298
     ],
     "P462": [
      513.75,
      188.5297666432298
     ],
     "P463": [
      517.5,
      188.58074287862638
     ],
     "P464": [
      517.5,
      188.58074287862638
     ],
     "P465": [
      521.25,
      188.62620855756305
     ],
     "P466": [
      521.25,
      188.62620855756305
     ],
     "P467": [
      525,
      188.66675617525098
     ],
     "P468": [
      525,
      188.66675617525098
     ],
     "P469": [
      528.75,
      188.70291517863993
     ],
     "P470": [
      528.75,
      188.70291517863993
     ],
     "P471": [
      532.5,
      188.73515854029313
     ],
     "P472": [
      532.5,
      188.73515854029313
     ],
     "P473": [
      536.25,
      188.7639086748073
     ],
     "P474": [
      536.25,
      188.7639086748073
     ],
     "P475": [
      540,
      188.78954275765338
     ],
     "P476": [
      540,
      188.78954275765338
     ],
     "P477": [
      543.75,
      188.81239750213686
     ],
     "P478": [
      543.75,
      188.81239750213686
     ],
     "P479": [
      547.5,
      188.83277344598974
     ],
     "P480": [
      547.5,
      188.83277344598974
     ],
     "P481": [
      551.25,
      188.85093879500067
     ],
     "P482": [
      551.25,
      188.85093879500067
     ],
     "P483": [
      555,
      188.86713286713288
     ],
     "P484": [
      330,
      195
     ],
     "P485": [
      330,
      56
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323P324P325P326P327P328P329P330P331P332P333P334P335P336P337P338P339P340P341P342P343P344P345P346P347P348P349P350P351P352P353P354P355P356P357P358P359P360P361P362P363P364P365P366P367P368P369P370P371P372P373P374P375P376P377P378P379P380P381P382P383P384P385P386P387P388P389P390P391P392P393P394P395P396P397P398P399P400P401P402P403P404P405P406P407P408P409P410P411P412P413P414P415P416P417P418P419P420P421P422P423P424P425P426P427P428P429P430P431P432P433P434P435P436P437P438P439P440P441P442P443P444P445P446P447P448P449P450P451P452P453P454P455P456P457P458P459P460P461P462P463P464P465P466P467P468P469P470P471P472P473P474P475P476P477P478P479P480P481P482P483P484P485",
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
     },
     {
      "v": "P76P77",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P78P79",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P80P81",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P82P83",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P84P85",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P86P87",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P88P89",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P90P91",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P92P93",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P94P95",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P96P97",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P98P99",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P100P101",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P102P103",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P104P105",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P106P107",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P108P109",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P110P111",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P112P113",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P114P115",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P116P117",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P118P119",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P120P121",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P122P123",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P124P125",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P126P127",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P128P129",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P130P131",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P132P133",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P134P135",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P136P137",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P138P139",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P140P141",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P142P143",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P144P145",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P146P147",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P148P149",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P150P151",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P152P153",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P154P155",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P156P157",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P158P159",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P160P161",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P162P163",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P164P165",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P166P167",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P168P169",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P170P171",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P172P173",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P174P175",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P176P177",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P178P179",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P180P181",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P182P183",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P184P185",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P186P187",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P188P189",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P190P191",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P192P193",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P194P195",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P196P197",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P198P199",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P200P201",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P202P203",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P204P205",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P206P207",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P208P209",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P210P211",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P212P213",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P214P215",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P216P217",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P218P219",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P220P221",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P222P223",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P224P225",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P226P227",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P228P229",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P230P231",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P232P233",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P234P235",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P236P237",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P238P239",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P240P241",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P242P243",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P244P245",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P246P247",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P248P249",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P250P251",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P252P253",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P254P255",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P256P257",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P258P259",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P260P261",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P262P263",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P264P265",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P266P267",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P268P269",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P270P271",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P272P273",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P274P275",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P276P277",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P278P279",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P280P281",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P282P283",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P284P285",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P286P287",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P288P289",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P290P291",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P292P293",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P294P295",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P296P297",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P298P299",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P300P301",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P302P303",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P304P305",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P306P307",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P308P309",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P310P311",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P312P313",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P314P315",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P316P317",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P318P319",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P320P321",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P322P323",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P324P325",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P326P327",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P328P329",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P330P331",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P332P333",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P334P335",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P336P337",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P338P339",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P340P341",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P342P343",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P344P345",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P346P347",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P348P349",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P350P351",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P352P353",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P354P355",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P356P357",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P358P359",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P360P361",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P362P363",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P364P365",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P366P367",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P368P369",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P370P371",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P372P373",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P374P375",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P376P377",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P378P379",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P380P381",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P382P383",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P384P385",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P386P387",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P388P389",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P390P391",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P392P393",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P394P395",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P396P397",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P398P399",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P400P401",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P402P403",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P404P405",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P406P407",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P408P409",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P410P411",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P412P413",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P414P415",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P416P417",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P418P419",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P420P421",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P422P423",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P424P425",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P426P427",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P428P429",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P430P431",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P432P433",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P434P435",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P436P437",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P438P439",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P440P441",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P442P443",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P444P445",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P446P447",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P448P449",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P450P451",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P452P453",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P454P455",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P456P457",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P458P459",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P460P461",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P462P463",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P464P465",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P466P467",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P468P469",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P470P471",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P472P473",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P474P475",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P476P477",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P478P479",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P480P481",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P482P483",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P484P485",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       105,
       34
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       180,
       34
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       255,
       34
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       330,
       34
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       405,
       34
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       480,
       34
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       555,
       34
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       78,
       56
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       78,
       122.5
      ],
      "text": "0.5",
      "col": 0
     },
     {
      "at": [
       78,
       189
      ],
      "text": "1",
      "col": 0
     },
     {
      "at": [
       273,
       216
      ],
      "text": "Fraction of the conjugate pair; pKa 5.00",
      "col": 0
     },
     {
      "at": [
       206,
       168
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       494,
       168
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       569,
       35
      ],
      "text": "pH",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "8.8",
  "name": "Properties of Buffers",
  "skill": "s8",
  "teach": [
   "A buffer contains appreciable amounts of a weak acid and its conjugate base, or a weak base and its conjugate acid. Added hydronium is consumed mainly by the base member: A- + H3O+ → HA + H2O. Added hydroxide is consumed mainly by the acid member: HA + OH- → A- + H2O. An invented particle inventory initially has six HA and six A- icons, each representing equal amounts; neutralizing two acid equivalents converts it to eight HA and four A-. These icons track buffer components only and omit water and counterions. A buffer limits pH change rather than locking pH at one exact value.",
   "For a B/BH+ buffer, B consumes added acid and BH+ consumes added base. A mixture of NH3 and NH4Cl can provide such a pair, with chloride acting as a spectator in the introductory model. A mixture of strong acid and its essentially nonbasic conjugate anion is not an effective ordinary buffer. Nor does mixing arbitrary weak acids automatically give a conjugate pair. If an added amount uses up a component, the buffer loses its ability to resist further change in that direction. Preparing and testing a buffer therefore requires known amounts, controlled additions and a meaningful comparison with an unbuffered sample."
  ],
  "boards": [
   [
    "A- consumes added H3O+ and becomes HA",
    "HA consumes added OH- and becomes A-",
    "Start: 6 HA + 6 A- icons",
    "Add 2 acid equivalents: 8 HA + 4 A-"
   ],
   [
    "B / BH+ also forms a buffer pair",
    "NH3 consumes acid; NH4+ consumes base",
    "Appreciable amounts of both partners are needed",
    "A buffer resists change; it does not freeze pH"
   ]
  ],
  "eqs": [
   "A- + H3O+ → HA + H2O",
   "BH+ + OH- → B + H2O"
  ],
  "questions": [
   [
    "Which mixture can serve as a conventional buffer when both components are appreciable?",
    "A weak acid and its conjugate base",
    "Only HCl and NaCl",
    "Only pure water",
    "A conjugate weak acid-base pair can consume small added amounts of either strong acid or strong base."
   ],
   [
    "In an HA/A- buffer, which member primarily consumes a small added amount of hydronium?",
    "A-",
    "The spectator sodium ion",
    "Only the glass container",
    "The base member accepts a proton: A- + H3O+ → HA + H2O, limiting the hydronium increase."
   ],
   [
    "In an HA/A- buffer, which member primarily consumes a small added amount of hydroxide?",
    "HA",
    "The spectator chloride ion",
    "Only A- donating a nonexistent extra proton",
    "The acid member donates a proton: HA + OH- → A- + H2O, consuming added hydroxide."
   ],
   [
    "A component-only buffer model starts with 7 HA and 5 A- equal-amount icons. After neutralizing 2 added acid equivalents, what inventory results?",
    "9 HA and 3 A-",
    "5 HA and 7 A-",
    "7 HA and 7 A-",
    "Each acid equivalent protonates one A-, so two A- become two HA while the total component count stays 12."
   ],
   [
    "A component-only buffer model starts with 8 HA and 4 A- equal-amount icons. After neutralizing 3 added base equivalents, what inventory results?",
    "5 HA and 7 A-",
    "11 HA and 1 A-",
    "8 HA and 1 A-",
    "Three HA donate protons to hydroxide and become three A-, preserving the 12 buffer-component equivalents."
   ],
   [
    "Which member of an NH3/NH4+ buffer reacts with a small added amount of strong acid?",
    "NH3",
    "NH4+ as the proton acceptor",
    "Cl- as a strong base",
    "Ammonia accepts the incoming proton and forms ammonium, increasing the acid member while consuming added hydronium."
   ],
   [
    "Which member of an NH3/NH4+ buffer reacts with a small added amount of strong base?",
    "NH4+",
    "NH3 by accepting another proton from OH-",
    "Na+",
    "Ammonium donates a proton to hydroxide, producing ammonia and water and consuming the added base."
   ],
   [
    "Why is HCl mixed with NaCl not an effective ordinary acid-base buffer?",
    "Cl- is too weak a base in water to provide appreciable buffering",
    "HCl is a weak acid with a large conjugate base reserve",
    "All salts prevent any proton transfer",
    "A conventional buffer needs an effective weak conjugate pair; the conjugate base of strong HCl has negligible basicity in water."
   ],
   [
    "What happens when strong acid added to an HA/A- buffer uses up nearly all available A-?",
    "Resistance to further acid addition is greatly reduced",
    "The acid-neutralizing reserve becomes infinite",
    "pH is forced to remain exactly at pKa",
    "The base component supplies the acid-neutralizing reserve; depleting it undermines further buffering in that direction."
   ],
   [
    "Which statement accurately describes a buffer after a small acid addition within its useful capacity?",
    "Its pH changes less than a comparable unbuffered sample",
    "Its pH cannot change at all",
    "Its temperature must stay exactly constant",
    "Buffer reactions consume most added acid, reducing the pH change while the component ratio and pH can still change."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Buffer responds to added acid",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      65,
      185
     ],
     "P1": [
      285,
      185
     ],
     "P2": [
      285,
      72
     ],
     "P3": [
      65,
      72
     ],
     "P4": [
      90,
      164
     ],
     "P5": [
      114,
      164
     ],
     "P6": [
      138,
      164
     ],
     "P7": [
      162,
      164
     ],
     "P8": [
      90,
      135
     ],
     "P9": [
      114,
      135
     ],
     "P10": [
      200,
      164
     ],
     "P11": [
      224,
      164
     ],
     "P12": [
      248,
      164
     ],
     "P13": [
      272,
      164
     ],
     "P14": [
      200,
      135
     ],
     "P15": [
      224,
      135
     ],
     "P16": [
      346,
      185
     ],
     "P17": [
      566,
      185
     ],
     "P18": [
      566,
      72
     ],
     "P19": [
      346,
      72
     ],
     "P20": [
      371,
      164
     ],
     "P21": [
      395,
      164
     ],
     "P22": [
      419,
      164
     ],
     "P23": [
      443,
      164
     ],
     "P24": [
      371,
      135
     ],
     "P25": [
      395,
      135
     ],
     "P26": [
      419,
      135
     ],
     "P27": [
      443,
      135
     ],
     "P28": [
      481,
      164
     ],
     "P29": [
      505,
      164
     ],
     "P30": [
      529,
      164
     ],
     "P31": [
      553,
      164
     ],
     "P32": [
      293,
      130
     ],
     "P33": [
      332,
      130
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33",
    "dots": "",
    "segs": [
     {
      "v": "P32P33",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     },
     {
      "v": "P16P17P18P19",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       90,
       164
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       114,
       164
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       138,
       164
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       162,
       164
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       90,
       135
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       114,
       135
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       200,
       164
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       224,
       164
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       248,
       164
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       272,
       164
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       200,
       135
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       224,
       135
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       175,
       203
      ],
      "text": "Before",
      "col": 0
     },
     {
      "at": [
       371,
       164
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       395,
       164
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       419,
       164
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       443,
       164
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       371,
       135
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       395,
       135
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       419,
       135
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       443,
       135
      ],
      "text": "H",
      "col": 1
     },
     {
      "at": [
       481,
       164
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       505,
       164
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       529,
       164
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       553,
       164
      ],
      "text": "A",
      "col": 2
     },
     {
      "at": [
       456,
       203
      ],
      "text": "After 2 acid equivalents",
      "col": 0
     },
     {
      "at": [
       320,
       49
      ],
      "text": "H = HA; A = A-; equal amounts per icon",
      "col": 0
     },
     {
      "at": [
       320,
       26
      ],
      "text": "Component inventory only; water and counterions omitted",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 10,
      "col": 1
     },
     {
      "c": "P5",
      "r": 10,
      "col": 1
     },
     {
      "c": "P6",
      "r": 10,
      "col": 1
     },
     {
      "c": "P7",
      "r": 10,
      "col": 1
     },
     {
      "c": "P8",
      "r": 10,
      "col": 1
     },
     {
      "c": "P9",
      "r": 10,
      "col": 1
     },
     {
      "c": "P10",
      "r": 10,
      "col": 2
     },
     {
      "c": "P11",
      "r": 10,
      "col": 2
     },
     {
      "c": "P12",
      "r": 10,
      "col": 2
     },
     {
      "c": "P13",
      "r": 10,
      "col": 2
     },
     {
      "c": "P14",
      "r": 10,
      "col": 2
     },
     {
      "c": "P15",
      "r": 10,
      "col": 2
     },
     {
      "c": "P20",
      "r": 10,
      "col": 1
     },
     {
      "c": "P21",
      "r": 10,
      "col": 1
     },
     {
      "c": "P22",
      "r": 10,
      "col": 1
     },
     {
      "c": "P23",
      "r": 10,
      "col": 1
     },
     {
      "c": "P24",
      "r": 10,
      "col": 1
     },
     {
      "c": "P25",
      "r": 10,
      "col": 1
     },
     {
      "c": "P26",
      "r": 10,
      "col": 1
     },
     {
      "c": "P27",
      "r": 10,
      "col": 1
     },
     {
      "c": "P28",
      "r": 10,
      "col": 2
     },
     {
      "c": "P29",
      "r": 10,
      "col": 2
     },
     {
      "c": "P30",
      "r": 10,
      "col": 2
     },
     {
      "c": "P31",
      "r": 10,
      "col": 2
     }
    ]
   },
   null
  ],
  "qpics": {
   "3": {
    "t": "figure",
    "title": "Initial inventory; then add 2 acid equivalents",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      88,
      194
     ],
     "P1": [
      553,
      194
     ],
     "P2": [
      553,
      66
     ],
     "P3": [
      88,
      66
     ],
     "P4": [
      127,
      164
     ],
     "P5": [
      176,
      164
     ],
     "P6": [
      225,
      164
     ],
     "P7": [
      274,
      164
     ],
     "P8": [
      127,
      126
     ],
     "P9": [
      176,
      126
     ],
     "P10": [
      225,
      126
     ],
     "P11": [
      362,
      164
     ],
     "P12": [
      411,
      164
     ],
     "P13": [
      460,
      164
     ],
     "P14": [
      509,
      164
     ],
     "P15": [
      362,
      126
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       127,
       164
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       176,
       164
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       225,
       164
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       274,
       164
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       127,
       126
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       176,
       126
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       225,
       126
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       362,
       164
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       411,
       164
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       460,
       164
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       509,
       164
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       362,
       126
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       320,
       215
      ],
      "text": "Equal-amount icons; buffer components only",
      "col": 0
     },
     {
      "at": [
       320,
       38
      ],
      "text": "Water and counterions omitted from this model",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 15,
      "col": 1
     },
     {
      "c": "P5",
      "r": 15,
      "col": 1
     },
     {
      "c": "P6",
      "r": 15,
      "col": 1
     },
     {
      "c": "P7",
      "r": 15,
      "col": 1
     },
     {
      "c": "P8",
      "r": 15,
      "col": 1
     },
     {
      "c": "P9",
      "r": 15,
      "col": 1
     },
     {
      "c": "P10",
      "r": 15,
      "col": 1
     },
     {
      "c": "P11",
      "r": 15,
      "col": 2
     },
     {
      "c": "P12",
      "r": 15,
      "col": 2
     },
     {
      "c": "P13",
      "r": 15,
      "col": 2
     },
     {
      "c": "P14",
      "r": 15,
      "col": 2
     },
     {
      "c": "P15",
      "r": 15,
      "col": 2
     }
    ]
   },
   "4": {
    "t": "figure",
    "title": "Initial inventory; then add 3 base equivalents",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      88,
      194
     ],
     "P1": [
      553,
      194
     ],
     "P2": [
      553,
      66
     ],
     "P3": [
      88,
      66
     ],
     "P4": [
      127,
      164
     ],
     "P5": [
      176,
      164
     ],
     "P6": [
      225,
      164
     ],
     "P7": [
      274,
      164
     ],
     "P8": [
      127,
      126
     ],
     "P9": [
      176,
      126
     ],
     "P10": [
      225,
      126
     ],
     "P11": [
      274,
      126
     ],
     "P12": [
      362,
      164
     ],
     "P13": [
      411,
      164
     ],
     "P14": [
      460,
      164
     ],
     "P15": [
      509,
      164
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       127,
       164
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       176,
       164
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       225,
       164
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       274,
       164
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       127,
       126
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       176,
       126
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       225,
       126
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       274,
       126
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       362,
       164
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       411,
       164
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       460,
       164
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       509,
       164
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       320,
       215
      ],
      "text": "Equal-amount icons; buffer components only",
      "col": 0
     },
     {
      "at": [
       320,
       38
      ],
      "text": "Water and counterions omitted from this model",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 15,
      "col": 1
     },
     {
      "c": "P5",
      "r": 15,
      "col": 1
     },
     {
      "c": "P6",
      "r": 15,
      "col": 1
     },
     {
      "c": "P7",
      "r": 15,
      "col": 1
     },
     {
      "c": "P8",
      "r": 15,
      "col": 1
     },
     {
      "c": "P9",
      "r": 15,
      "col": 1
     },
     {
      "c": "P10",
      "r": 15,
      "col": 1
     },
     {
      "c": "P11",
      "r": 15,
      "col": 1
     },
     {
      "c": "P12",
      "r": 15,
      "col": 2
     },
     {
      "c": "P13",
      "r": 15,
      "col": 2
     },
     {
      "c": "P14",
      "r": 15,
      "col": 2
     },
     {
      "c": "P15",
      "r": 15,
      "col": 2
     }
    ]
   }
  }
 },
 {
  "code": "8.9",
  "name": "Henderson-Hasselbalch Equation",
  "skill": "s9",
  "teach": [
   "The Henderson–Hasselbalch relation is pH = pKa + log([A-]/[HA]) in the dilute concentration model. It uses equilibrium concentrations; for an ordinary buffer with sufficiently large component amounts, analytical amounts after preparation are good approximations. An invented pair with pKa 4.70, [A-] = 0.20 M and [HA] = 0.10 M gives pH = 4.70 + log 2 = 5.00. The ratio is base over acid. Reversing it gives the wrong direction: more base at fixed acid should raise the predicted pH. Using equal concentrations gives pH = pKa, independent of the shared concentration within the approximation.",
   "Moles may replace concentrations in the ratio when both refer to the same final solution volume. A hypothetical buffer with 0.030 mol A- and 0.010 mol HA has ratio 3, not a ratio of the stock solutions before mixing. For a target pH 6.00 using an acid of pKa 5.00, the required base/acid ratio is 10. Choose a pair with pKa reasonably near the target, commonly within about one unit for useful buffering in both directions. Very dilute or nearly exhausted mixtures require fuller equilibrium treatment. AP practice here calculates prepared-buffer pH and ratios; numerical pH changes after adding acid or base to an existing buffer are outside the current AP exam outline."
  ],
  "boards": [
   [
    "pH = pKa + log([A-]/[HA])",
    "pKa 4.70; base 0.20 M; acid 0.10 M",
    "Base/acid ratio 2; pH about 5.00",
    "Use equilibrium values or justified approximations"
   ],
   [
    "Same final volume: concentration ratio = mole ratio",
    "Target pH 6.00, pKa 5.00: ratio 10",
    "Select pKa near the target pH",
    "Do not use the formula blindly after depletion"
   ]
  ],
  "eqs": [
   "pH = 4.70 + log(0.20/0.10) ≈ 5.00",
   "n(A-)/n(HA) = 10^(target pH-pKa)"
  ],
  "questions": [
   [
    "A prepared buffer has pKa 6.00 and equal HA and A- concentrations. What is approximate pH?",
    "6.00",
    "7.00",
    "12.00",
    "The base/acid ratio is one, whose logarithm is zero, so the buffer pH is approximately its pKa."
   ],
   [
    "A prepared buffer has pKa 5.00, [A-] = 0.20 M and [HA] = 0.020 M. What is approximate pH?",
    "6.00",
    "4.00",
    "5.00",
    "The base/acid ratio is ten, so pH = 5.00 + log 10 = 6.00 in the buffer approximation."
   ],
   [
    "A prepared buffer has pKa 5.00, [A-] = 0.020 M and [HA] = 0.20 M. What is approximate pH?",
    "4.00",
    "6.00",
    "5.00",
    "The base/acid ratio is 0.10, whose logarithm is -1, so pH is approximately 4.00."
   ],
   [
    "A prepared buffer has pKa 4.50 and base/acid concentration ratio 2.0. What is approximate pH?",
    "4.80",
    "4.20",
    "9.00",
    "Add log 2, about 0.301, to pKa 4.50 to obtain pH about 4.80."
   ],
   [
    "For target pH 7.20 using a conjugate pair with pKa 6.20, what base/acid ratio is needed?",
    "10",
    "0.10",
    "1",
    "The target exceeds pKa by one, so the required base/acid ratio is 10^1 = 10."
   ],
   [
    "For target pH 4.00 using an acid with pKa 5.00, what base/acid ratio is needed?",
    "0.10",
    "10",
    "1",
    "The target is one unit below pKa, so the required base/acid ratio is 10^(-1) = 0.10."
   ],
   [
    "A buffer has 0.040 mol A- and 0.020 mol HA in one final solution, with pKa 6.00. What is approximate pH?",
    "6.30",
    "5.70",
    "3.00",
    "The shared volume cancels, giving ratio 2 and pH = 6.00 + log 2 ≈ 6.30."
   ],
   [
    "Which hypothetical acid pKa is best for a buffer intended to operate near pH 6.5 among these options?",
    "6.4",
    "2.0",
    "11.0",
    "A pKa close to the target lets both conjugate components remain appreciable instead of requiring an extreme ratio."
   ],
   [
    "Why can mole amounts replace concentrations in the Henderson–Hasselbalch ratio for one mixed buffer?",
    "Both concentrations have the same final volume denominator",
    "Moles and molarity always have identical units",
    "Volumes never matter in chemistry",
    "Dividing n(A-)/V by n(HA)/V cancels the common final volume; separate stock concentrations need not have that property."
   ],
   [
    "Which ratio belongs inside the logarithm for pH = pKa + log(ratio) of an HA/A- buffer?",
    "Conjugate base concentration divided by acid concentration",
    "Acid concentration divided by conjugate base concentration",
    "Hydroxide concentration divided by container mass",
    "The relation follows acid dissociation: increasing A- relative to HA lowers hydronium and raises pH."
   ]
  ],
  "check": [
   "A prepared buffer has pKa 8.00 and [A-]/[HA] = 0.10. What is approximate pH?",
   "7.00",
   "9.00",
   "8.10",
   "The logarithm of 0.10 is -1, so the buffer approximation gives pH 8.00 - 1.00 = 7.00."
  ],
  "qpics": {
   "1": {
    "t": "board",
    "title": "Prepared buffer",
    "lines": [
     "pKa 5.00",
     "Conjugate base 0.20 M",
     "Weak acid 0.020 M",
     "What is approximate pH?"
    ],
    "box": true
   },
   "2": {
    "t": "board",
    "title": "Prepared buffer",
    "lines": [
     "pKa 5.00",
     "Conjugate base 0.020 M",
     "Weak acid 0.20 M",
     "What is approximate pH?"
    ],
    "box": true
   }
  }
 },
 {
  "code": "8.10",
  "name": "Buffer Capacity",
  "skill": "s10",
  "teach": [
   "Buffer pH and capacity answer different questions. The component ratio largely sets pH, while the amount of available partners limits how much acid or base can be neutralized before a large pH change. Compare equal 100 mL samples: one has 0.020 M HA and 0.020 M A-, the other 0.20 M of each. Their ratios are equal and their approximate pH values match, but the second has ten times as much of each component and greater capacity. Under the concentration approximation, moderate dilution leaves the ratio and approximate pH similar but lowers capacity per liter. Diluting one entire sample does not remove its total buffer moles.",
   "The direction of a challenge matters. A sample richer in A- has a larger stoichiometric reserve for added acid; a sample richer in HA has a larger reserve for added base. Equal component amounts give balanced reserves for both directions, rather than universal superiority for every task. If two equal-volume buffers have the same ratio but one accidentally receives extra water, a test on equal-volume aliquots will show reduced capacity in the diluted one. A useful experiment controls sample volume, titrant concentration, temperature and the chosen pH-change criterion. Capacity is finite, and the onset of a large pH change occurs before a claim of perfect zero remaining component is justified."
  ],
  "boards": [
   [
    "Same ratio can give similar pH but different capacity",
    "Equal 100 mL samples: 0.020 M each vs 0.20 M each",
    "Concentrated sample has tenfold component amounts",
    "Dilution lowers capacity per liter"
   ],
   [
    "A- is the reserve for added acid",
    "HA is the reserve for added base",
    "Equal amounts balance the two reserves",
    "Compare equal volumes and a defined pH-change criterion"
   ]
  ],
  "eqs": [
   "At fixed ratio: more buffer per volume → greater capacity per volume",
   "n(component) = C(component) × sample volume"
  ],
  "questions": [
   [
    "Two equal-volume buffers use the same pair and ratio; one has ten times both component concentrations. Which has greater capacity?",
    "The more concentrated buffer",
    "The less concentrated buffer",
    "Their capacities must be equal because pH is similar",
    "The concentrated sample contains more moles of both partners to react with added acid or base."
   ],
   [
    "Why can two buffers have nearly the same pH but different capacities?",
    "pH mainly depends on ratio, while capacity also depends on component amounts",
    "pH measures total buffer mass directly",
    "Every solution at a given pH has the same composition",
    "Matching ratios can give matching pH even when the available neutralizing amounts differ greatly."
   ],
   [
    "An HA/A- buffer contains more A- than HA. Which added reagent has the larger stoichiometric neutralization reserve?",
    "Strong acid",
    "Strong base",
    "Neither can react with a buffer",
    "The larger A- amount can accept more incoming protons; HA supplies the reserve for incoming hydroxide."
   ],
   [
    "An HA/A- buffer contains more HA than A-. Which added reagent has the larger stoichiometric neutralization reserve?",
    "Strong base",
    "Strong acid",
    "Only an inert gas",
    "More HA means more proton-donor equivalents available to consume added hydroxide."
   ],
   [
    "A buffer sample is moderately diluted with pure water without removing solute. What happens to capacity per liter in the usual model?",
    "It decreases",
    "It increases",
    "It must become infinite",
    "Both component concentrations decrease, leaving fewer neutralizing equivalents in each liter even though total sample moles remain."
   ],
   [
    "A whole buffer sample is diluted with water without removing solute. What happens to total moles of HA and A- before small equilibrium readjustments?",
    "They are unchanged",
    "They both become zero",
    "They both double automatically",
    "Dilution changes volume and concentrations, not the stoichiometric amounts of components placed in the sample."
   ],
   [
    "What comparison fairly tests buffer capacity using equal titrant concentration?",
    "Equal sample volumes and the same chosen pH-change criterion",
    "Arbitrary sample volumes and different endpoint definitions",
    "Only the color of each container",
    "Capacity comparisons require consistent amounts sampled and a defined pH change, along with controlled titrant conditions."
   ],
   [
    "A 0.050 L buffer aliquot contains 0.20 M HA. What is its HA amount?",
    "0.010 mol",
    "4.0 mol",
    "0.25 mol",
    "Amount is concentration times volume: 0.20 mol/L × 0.050 L = 0.010 mol HA."
   ],
   [
    "For a fixed total buffer amount, why might approximately equal conjugate amounts be useful?",
    "They provide balanced reserves against acid and base additions",
    "They guarantee zero pH change for any addition",
    "They make the equilibrium constant infinite",
    "Each component handles one direction of acid-base challenge, so similar amounts support resistance in both directions."
   ],
   [
    "A sample has the desired pH but almost no conjugate base left. What cannot be inferred from its pH alone?",
    "That it has adequate capacity against more acid",
    "That the pH is a measured property",
    "That the solution contains water",
    "A pH reading does not establish the remaining neutralizing reserve; depleted A- can leave poor resistance to further acid."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Buffer ratio and capacity differ",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      80,
      63
     ],
     "P1": [
      260,
      63
     ],
     "P2": [
      113,
      75
     ],
     "P3": [
      153,
      75
     ],
     "P4": [
      153,
      63
     ],
     "P5": [
      113,
      63
     ],
     "P6": [
      187,
      75
     ],
     "P7": [
      227,
      75
     ],
     "P8": [
      227,
      63
     ],
     "P9": [
      187,
      63
     ],
     "P10": [
      372,
      63
     ],
     "P11": [
      552,
      63
     ],
     "P12": [
      405,
      183
     ],
     "P13": [
      445,
      183
     ],
     "P14": [
      445,
      63
     ],
     "P15": [
      405,
      63
     ],
     "P16": [
      479,
      183
     ],
     "P17": [
      519,
      183
     ],
     "P18": [
      519,
      63
     ],
     "P19": [
      479,
      63
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
      "v": "P10P11",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P2P3P4P5",
      "col": 1
     },
     {
      "v": "P6P7P8P9",
      "col": 2
     },
     {
      "v": "P12P13P14P15",
      "col": 1
     },
     {
      "v": "P16P17P18P19",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       170,
       195
      ],
      "text": "Dilute sample",
      "col": 0
     },
     {
      "at": [
       133,
       48
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       207,
       48
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       170,
       30
      ],
      "text": "0.02 M each; 100 mL",
      "col": 0
     },
     {
      "at": [
       462,
       195
      ],
      "text": "Concentrated sample",
      "col": 0
     },
     {
      "at": [
       425,
       48
      ],
      "text": "HA",
      "col": 1
     },
     {
      "at": [
       499,
       48
      ],
      "text": "A-",
      "col": 2
     },
     {
      "at": [
       462,
       30
      ],
      "text": "0.2 M each; 100 mL",
      "col": 0
     },
     {
      "at": [
       321,
       215
      ],
      "text": "Same pair and ratio; vertical bar height tracks moles",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "8.11",
  "name": "pH and Solubility",
  "skill": "s11",
  "teach": [
   "Changing pH can alter salt solubility if a dissolved ion participates in acid-base chemistry. For a sparingly soluble, non-amphoteric hydroxide M(OH)2, dissolution gives M2+ + 2OH-. Adding acid consumes OH-, initially reducing the ion product and favoring further dissolution while solid remains. Increasing hydroxide instead tends to suppress dissolution through the common-ion effect, provided other reactions do not intervene. At fixed temperature, these shifts do not themselves change Ksp; they change the equilibrium composition needed to satisfy it. The AP outline here calls for qualitative reasoning, not calculation of solubility as a function of pH.",
   "Carbonate is a base, so acid can protonate dissolved carbonate from a carbonate solid. For example, acid dissolving calcium carbonate can ultimately form aqueous calcium, water and carbon dioxide; removing dissolved carbonate drives further dissolution, and escaping gas can help drive the net process. By contrast, an ion such as chloride has negligible basicity in ordinary aqueous conditions, so acid does not substantially enhance its salt solubility through chloride protonation alone. Real systems can have competing complexation, common-ion or amphoteric behavior. State that these are neglected before claiming every acid addition increases every salt solubility. Compare equilibrated dissolved amounts at fixed temperature rather than confusing faster dissolution with greater equilibrium solubility."
  ],
  "boards": [
   [
    "M(OH)2(s) ⇌ M2+ + 2OH-",
    "Added acid consumes OH-",
    "Lower ion product favors more dissolution",
    "Fixed temperature: Ksp is unchanged"
   ],
   [
    "Carbonate accepts protons from acid",
    "CaCO3 + 2H+ → Ca2+ + CO2 + H2O",
    "Cl- protonation is negligible in ordinary water",
    "Consider common ions and competing equilibria"
   ]
  ],
  "eqs": [
   "H3O+ + OH- → 2H2O",
   "Solubility response depends on coupled equilibria"
  ],
  "questions": [
   [
    "For non-amphoteric M(OH)2(s) in water, neglecting complexation, what does adding acid usually do to equilibrium solubility?",
    "It increases solubility by consuming OH-",
    "It decreases solubility because every acid is a common ion",
    "It changes M into a different element",
    "Removing hydroxide from the dissolution equilibrium lowers the ion product and permits more solid to dissolve."
   ],
   [
    "For non-amphoteric M(OH)2(s), neglecting other reactions, what does added OH- do to solubility?",
    "It decreases solubility through the common-ion effect",
    "It always dissolves all solid",
    "It eliminates the meaning of Ksp",
    "Hydroxide is a dissolution product; increasing it shifts the balance toward solid under the stated assumptions."
   ],
   [
    "At fixed temperature, does acid-induced dissolution of a hydroxide itself change Ksp?",
    "No; it changes equilibrium ion concentrations",
    "Yes; Ksp must become zero",
    "Yes; Ksp always equals the added acid volume",
    "The equilibrium constant remains fixed in the model while coupled acid-base reactions change the concentrations satisfying it."
   ],
   [
    "Why can acid enhance the dissolution of a carbonate solid?",
    "It protonates carbonate, reducing free carbonate concentration",
    "Carbonate cannot accept protons",
    "Acid must raise the carbonate ion concentration",
    "Consumption of a dissolution product by protonation allows further dissolution while satisfying the solubility equilibrium."
   ],
   [
    "Which gas can form when calcium carbonate reacts with sufficient aqueous acid?",
    "Carbon dioxide",
    "Hydrogen from reduction of calcium metal",
    "Nitrogen",
    "Carbonate protonation can produce carbonic acid that yields CO2 and water; the calcium remains an aqueous ion."
   ],
   [
    "Why is protonation of Cl- not usually a major way for acid to increase chloride-salt solubility in water?",
    "Cl- is an extremely weak base in water",
    "Cl- is always a strong base",
    "Chloride contains two removable protons",
    "The conjugate base of strong HCl has negligible proton-accepting tendency in ordinary water, unlike carbonate."
   ],
   [
    "Which assumption is needed for the simple claim that added OH- suppresses metal-hydroxide solubility?",
    "No competing amphoteric dissolution or complex formation dominates",
    "Every metal hydroxide has unlimited solubility",
    "Temperature never affects any equilibrium",
    "Some hydroxides form soluble hydroxo complexes in excess base; the simple common-ion argument must exclude those competing processes."
   ],
   [
    "How can loss of CO2 gas affect acid-driven dissolution of a carbonate solid?",
    "Removing a product can favor continued net reaction",
    "It necessarily creates more carbonate solid in every case",
    "It changes calcium nuclei into carbon",
    "Escape of a gaseous product can pull the coupled reaction forward under suitable conditions."
   ],
   [
    "A solid disappears faster after stirring. Does that alone prove its equilibrium solubility increased?",
    "No; stirring can change the rate of reaching equilibrium",
    "Yes; rate and equilibrium amount are identical",
    "Yes; stirring must alter Ksp at fixed temperature",
    "Faster mass transfer or dissolution kinetics does not by itself establish a different equilibrium dissolved amount."
   ],
   [
    "Which comparison best tests a pH effect on equilibrium solubility?",
    "Equilibrated dissolved amounts at controlled temperature with competing effects considered",
    "Only the first second of visible bubbling",
    "Samples at unrelated temperatures with unknown reagents",
    "Equilibrium solubility requires time to equilibrate and control of temperature, common ions and other relevant reactions."
   ]
  ],
  "check": [
   "Acid consumes OH- above a non-amphoteric hydroxide solid at fixed temperature, with other reactions neglected. What response is favored?",
   "Further dissolution while solid remains",
   "A mandatory increase in Ksp",
   "Conversion of all water into solid",
   "Removing a dissolution product lowers the ion product and favors more dissolution without changing fixed-temperature Ksp."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Coupled acid-base and dissolution processes",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      267,
      181
     ],
     "P1": [
      326,
      181
     ],
     "P2": [
      490,
      149
     ],
     "P3": [
      490,
      99
     ],
     "L": [
      326,
      170
     ],
     "R": [
      267,
      170
     ]
    },
    "hide": "P0P1P2P3LR",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "LR",
      "col": 0,
      "arrows": 1,
      "w": 2
     },
     {
      "v": "P2P3",
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
       183,
       175
      ],
      "text": "M(OH)2(s)",
      "col": 1
     },
     {
      "at": [
       442,
       175
      ],
      "text": "M2+ + 2OH-",
      "col": 2
     },
     {
      "at": [
       398,
       131
      ],
      "text": "Add H3O+",
      "col": 1
     },
     {
      "at": [
       490,
       76
      ],
      "text": "Water",
      "col": 1
     },
     {
      "at": [
       320,
       39
      ],
      "text": "Consuming OH- can favor further dissolution",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Identify the proton donor and acceptor, then choose a model suited to the mixture. Convert between pH and ion concentrations with the temperature-appropriate Kw. Distinguish strength from concentration and check weak-ionization approximations. In mixtures, count reacting moles before using total volume or an equilibrium relation. Interpret titration regions, equivalence, half-equivalence and indicator behavior from the remaining species. Relate structure to conjugate-base stabilization, use pH relative to pKa to compare forms, and distinguish a buffer ratio from its finite neutralizing reserves. Explain pH-dependent dissolution through coupled equilibria while keeping fixed-temperature constants and competing processes straight.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-chem-acids-and-bases","subject":"science","level":5,"grade":9,"standard":"AP Chemistry, Unit 8","title":"Acids and Bases","goal":"Connect proton transfer, logarithmic concentration scales, equilibrium, titration evidence, structure, buffers and pH-dependent solubility.","points":20},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
