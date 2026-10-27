/* Original course unit. Review record: docs/review/lessons/high-completion/ap-chem-u7-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "7.1",
  "name": "Introduction to Equilibrium",
  "skill": "s1",
  "teach": [
   "Chemical equilibrium is dynamic: forward and reverse transformations continue at equal rates, leaving no net composition change under fixed conditions. In a hypothetical closed A ⇌ B system, an equilibrium sample can have [A] = 0.60 M and [B] = 0.30 M. Equal forward and reverse rates do not require equal concentrations. Rate-versus-time curves approach the same value, whereas concentration-versus-time curves can approach different constant levels. The rates need not be zero. All numerical examples and generic letter-species models in this unit are hypothetical, and numerical calculations use the stated idealized concentration or pressure convention.",
   "Reversible physical processes also establish equilibria. In a closed container with liquid water and vapor present at fixed temperature, evaporation and condensation can balance even though individual molecules keep crossing the interface. A saturated solution in contact with excess solid can balance dissolution and precipitation. An open system that loses vapor need not attain the same equilibrium. A single unchanging observation is not by itself proof of equilibrium: a very slow reaction or an open steady flow can look constant. Use evidence of reversibility and balanced opposing processes, together with the specified conditions."
  ],
  "boards": [
   [
    "Dynamic equilibrium: forward rate = reverse rate",
    "Concentrations stay constant under fixed conditions",
    "Example: [A] 0.60 M; [B] 0.30 M",
    "Equal rates do not require equal concentrations"
   ],
   [
    "Closed liquid/vapor: evaporation = condensation",
    "Saturated solution with solid: opposing processes",
    "Microscopic events continue",
    "A constant reading alone does not prove equilibrium"
   ]
  ],
  "eqs": [
   "At equilibrium: rforward = rreverse; net rate = 0",
   "For a closed system at fixed conditions: no net macroscopic composition change"
  ],
  "questions": [
   [
    "At dynamic chemical equilibrium, which relation holds between forward and reverse rates?",
    "They are equal",
    "Both must be zero",
    "The forward rate is always larger",
    "The opposing processes continue at equal rates, so there is no net composition change under fixed conditions."
   ],
   [
    "A closed A ⇌ B sample at equilibrium has [A] = 0.60 M and [B] = 0.30 M. Is unequal concentration compatible with equilibrium?",
    "Yes; rates rather than concentrations must balance",
    "No; every equilibrium requires equal concentrations",
    "No; products must be absent",
    "Equilibrium constrains the opposing rates and the concentration ratio for the given K, not equality of concentrations."
   ],
   [
    "Which concentration-versus-time pattern is consistent with a closed system approaching equilibrium at fixed conditions?",
    "Both concentrations approach constant levels that may differ",
    "Both concentrations must reach zero",
    "Every concentration must keep increasing forever",
    "Constant macroscopic composition can result from balanced ongoing reactions, and the plateau levels need not be equal."
   ],
   [
    "Which rate-versus-time pattern indicates approach to dynamic equilibrium for a reversible reaction?",
    "The opposing rates approach the same value",
    "Only the forward rate remains nonzero at equilibrium",
    "Both rates must increase without limit",
    "Balanced forward and reverse rates give zero net rate while allowing both directions to continue."
   ],
   [
    "In a closed container with liquid and vapor present at fixed temperature, what balances at vapor–liquid equilibrium?",
    "Evaporation and condensation rates",
    "The masses of vapor and liquid necessarily",
    "All molecular speeds become zero",
    "Equal opposing phase-transfer rates maintain constant macroscopic phase amounts; the two phases need not have equal mass."
   ],
   [
    "In a saturated salt solution in contact with excess solid, what can continue at equilibrium?",
    "Dissolution and precipitation",
    "Only dissolution forever",
    "Only net precipitation forever",
    "Ions can enter and leave the solid while the opposing rates balance and the solution composition stays constant."
   ],
   [
    "Why can a container open to escaping vapor behave differently from a closed vapor–liquid equilibrium system?",
    "Matter can leave and disrupt the balance",
    "Open containers eliminate all evaporation",
    "A lid determines molecular identity",
    "Loss of vapor changes the available amounts and can prevent the closed-system balance from being maintained."
   ],
   [
    "Does one constant concentration reading alone prove equilibrium?",
    "No; slow change or steady flow can also appear constant",
    "Yes; all constant readings uniquely prove reversibility",
    "Yes; measurements never have limited resolution",
    "A constant observation needs context; it may arise from slow kinetics or compensating flows rather than chemical equilibrium."
   ],
   [
    "At equilibrium, are individual particles permanently assigned to the reactant or product group?",
    "No; transformations can continue both ways",
    "Yes; all chemical events stop",
    "Yes; only particles at absolute zero can move groups",
    "Dynamic equilibrium maintains population-level balance while individual particles continue to undergo transformations."
   ],
   [
    "Why must conditions such as temperature be stated when describing an equilibrium composition?",
    "Changing conditions can change the equilibrium state",
    "Equilibrium composition is independent of every condition",
    "Temperature is the same as concentration",
    "An equilibrium description applies to specified conditions; changing them can alter the relevant balance and composition."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Reversible A ⇌ B: concentrations",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      102,
      207
     ],
     "P1": [
      102,
      58
     ],
     "P2": [
      102,
      58
     ],
     "P3": [
      565,
      58
     ],
     "P4": [
      102,
      193
     ],
     "P5": [
      107.5,
      189.74845688478487
     ],
     "P6": [
      107.5,
      189.74845688478487
     ],
     "P7": [
      113,
      186.73185893912762
     ],
     "P8": [
      113,
      186.73185893912762
     ],
     "P9": [
      118.5,
      183.93322984417196
     ],
     "P10": [
      118.5,
      183.93322984417196
     ],
     "P11": [
      124,
      181.33681993067728
     ],
     "P12": [
      124,
      181.33681993067728
     ],
     "P13": [
      129.5,
      178.92801754559375
     ],
     "P14": [
      129.5,
      178.92801754559375
     ],
     "P15": [
      135,
      176.6932668229798
     ],
     "P16": [
      135,
      176.6932668229798
     ],
     "P17": [
      140.5,
      174.6199913965067
     ],
     "P18": [
      140.5,
      174.6199913965067
     ],
     "P19": [
      146,
      172.6965236242312
     ],
     "P20": [
      146,
      172.6965236242312
     ],
     "P21": [
      151.5,
      170.91203892733972
     ],
     "P22": [
      151.5,
      170.91203892733972
     ],
     "P23": [
      157,
      169.25649487334567
     ],
     "P24": [
      157,
      169.25649487334567
     ],
     "P25": [
      162.5,
      167.72057466092272
     ],
     "P26": [
      162.5,
      167.72057466092272
     ],
     "P27": [
      168,
      166.29563468832697
     ],
     "P28": [
      168,
      166.29563468832697
     ],
     "P29": [
      173.5,
      164.97365591034205
     ],
     "P30": [
      173.5,
      164.97365591034205
     ],
     "P31": [
      179,
      163.74719871000198
     ],
     "P32": [
      179,
      163.74719871000198
     ],
     "P33": [
      184.5,
      162.60936103112573
     ],
     "P34": [
      184.5,
      162.60936103112573
     ],
     "P35": [
      190,
      161.55373953604908
     ],
     "P36": [
      190,
      161.55373953604908
     ],
     "P37": [
      195.5,
      160.57439356996332
     ],
     "P38": [
      195.5,
      160.57439356996332
     ],
     "P39": [
      201,
      159.66581172906513
     ],
     "P40": [
      201,
      159.66581172906513
     ],
     "P41": [
      206.5,
      158.8228808443754
     ],
     "P42": [
      206.5,
      158.8228808443754
     ],
     "P43": [
      212,
      158.04085720667933
     ],
     "P44": [
      212,
      158.04085720667933
     ],
     "P45": [
      217.5,
      157.31533987065185
     ],
     "P46": [
      217.5,
      157.31533987065185
     ],
     "P47": [
      223,
      156.64224588793394
     ],
     "P48": [
      223,
      156.64224588793394
     ],
     "P49": [
      228.5,
      156.01778732978045
     ],
     "P50": [
      228.5,
      156.01778732978045
     ],
     "P51": [
      234,
      155.4384499699714
     ],
     "P52": [
      234,
      155.4384499699714
     ],
     "P53": [
      239.5,
      154.90097350802176
     ],
     "P54": [
      239.5,
      154.90097350802176
     ],
     "P55": [
      245,
      154.4023332213931
     ],
     "P56": [
      245,
      154.4023332213931
     ],
     "P57": [
      250.5,
      153.93972294345235
     ],
     "P58": [
      250.5,
      153.93972294345235
     ],
     "P59": [
      256,
      153.51053927138418
     ],
     "P60": [
      256,
      153.51053927138418
     ],
     "P61": [
      261.5,
      153.11236691518437
     ],
     "P62": [
      261.5,
      153.11236691518437
     ],
     "P63": [
      267,
      152.7429651052839
     ],
     "P64": [
      267,
      152.7429651052839
     ],
     "P65": [
      272.5,
      152.40025498231074
     ],
     "P66": [
      272.5,
      152.40025498231074
     ],
     "P67": [
      278,
      152.08230789802354
     ],
     "P68": [
      278,
      152.08230789802354
     ],
     "P69": [
      283.5,
      151.78733456157897
     ],
     "P70": [
      283.5,
      151.78733456157897
     ],
     "P71": [
      289,
      151.5136749700519
     ],
     "P72": [
      289,
      151.5136749700519
     ],
     "P73": [
      294.5,
      151.25978906654132
     ],
     "P74": [
      294.5,
      151.25978906654132
     ],
     "P75": [
      300,
      151.02424807328873
     ],
     "P76": [
      300,
      151.02424807328873
     ],
     "P77": [
      305.5,
      150.8057264510353
     ],
     "P78": [
      305.5,
      150.8057264510353
     ],
     "P79": [
      311,
      150.6029944393677
     ],
     "P80": [
      311,
      150.6029944393677
     ],
     "P81": [
      316.5,
      150.41491113607285
     ],
     "P82": [
      316.5,
      150.41491113607285
     ],
     "P83": [
      322,
      150.24041807655388
     ],
     "P84": [
      322,
      150.24041807655388
     ],
     "P85": [
      327.5,
      150.0785332771756
     ],
     "P86": [
      327.5,
      150.0785332771756
     ],
     "P87": [
      333,
      149.9283457090168
     ],
     "P88": [
      333,
      149.9283457090168
     ],
     "P89": [
      338.5,
      149.78901017092994
     ],
     "P90": [
      338.5,
      149.78901017092994
     ],
     "P91": [
      344,
      149.6597425330558
     ],
     "P92": [
      344,
      149.6597425330558
     ],
     "P93": [
      349.5,
      149.53981532402497
     ],
     "P94": [
      349.5,
      149.53981532402497
     ],
     "P95": [
      355,
      149.42855363701307
     ],
     "P96": [
      355,
      149.42855363701307
     ],
     "P97": [
      360.5,
      149.32533133160985
     ],
     "P98": [
      360.5,
      149.32533133160985
     ],
     "P99": [
      366,
      149.22956751012816
     ],
     "P100": [
      366,
      149.22956751012816
     ],
     "P101": [
      371.5,
      149.14072324852262
     ],
     "P102": [
      371.5,
      149.14072324852262
     ],
     "P103": [
      377,
      149.0582985635204
     ],
     "P104": [
      377,
      149.0582985635204
     ],
     "P105": [
      382.5,
      148.98182959889692
     ],
     "P106": [
      382.5,
      148.98182959889692
     ],
     "P107": [
      388,
      148.91088601506118
     ],
     "P108": [
      388,
      148.91088601506118
     ],
     "P109": [
      393.5,
      148.8450685672608
     ],
     "P110": [
      393.5,
      148.8450685672608
     ],
     "P111": [
      399,
      148.78400685877722
     ],
     "P112": [
      399,
      148.78400685877722
     ],
     "P113": [
      404.5,
      148.72735725646746
     ],
     "P114": [
      404.5,
      148.72735725646746
     ],
     "P115": [
      410,
      148.6748009569215
     ],
     "P116": [
      410,
      148.6748009569215
     ],
     "P117": [
      415.5,
      148.6260421923522
     ],
     "P118": [
      415.5,
      148.6260421923522
     ],
     "P119": [
      421,
      148.5808065661216
     ],
     "P120": [
      421,
      148.5808065661216
     ],
     "P121": [
      426.5,
      148.53883950853617
     ],
     "P122": [
      426.5,
      148.53883950853617
     ],
     "P123": [
      432,
      148.4999048442209
     ],
     "P124": [
      432,
      148.4999048442209
     ],
     "P125": [
      437.5,
      148.46378346301003
     ],
     "P126": [
      437.5,
      148.46378346301003
     ],
     "P127": [
      443,
      148.43027208687445
     ],
     "P128": [
      443,
      148.43027208687445
     ],
     "P129": [
      448.5,
      148.39918212594677
     ],
     "P130": [
      448.5,
      148.39918212594677
     ],
     "P131": [
      454,
      148.3703386172059
     ],
     "P132": [
      454,
      148.3703386172059
     ],
     "P133": [
      459.5,
      148.34357923984868
     ],
     "P134": [
      459.5,
      148.34357923984868
     ],
     "P135": [
      465,
      148.31875340180733
     ],
     "P136": [
      465,
      148.31875340180733
     ],
     "P137": [
      470.5,
      148.29572139227184
     ],
     "P138": [
      470.5,
      148.29572139227184
     ],
     "P139": [
      476,
      148.2743535954482
     ],
     "P140": [
      476,
      148.2743535954482
     ],
     "P141": [
      481.5,
      148.2545297611279
     ],
     "P142": [
      481.5,
      148.2545297611279
     ],
     "P143": [
      487,
      148.23613832796315
     ],
     "P144": [
      487,
      148.23613832796315
     ],
     "P145": [
      492.5,
      148.21907579564032
     ],
     "P146": [
      492.5,
      148.21907579564032
     ],
     "P147": [
      498,
      148.20324614241756
     ],
     "P148": [
      498,
      148.20324614241756
     ],
     "P149": [
      503.5,
      148.18856028474931
     ],
     "P150": [
      503.5,
      148.18856028474931
     ],
     "P151": [
      509,
      148.17493557595643
     ],
     "P152": [
      509,
      148.17493557595643
     ],
     "P153": [
      514.5,
      148.16229534112068
     ],
     "P154": [
      514.5,
      148.16229534112068
     ],
     "P155": [
      520,
      148.1505684455862
     ],
     "P156": [
      520,
      148.1505684455862
     ],
     "P157": [
      525.5,
      148.13968889463922
     ],
     "P158": [
      525.5,
      148.13968889463922
     ],
     "P159": [
      531,
      148.12959546211397
     ],
     "P160": [
      531,
      148.12959546211397
     ],
     "P161": [
      536.5,
      148.120231345834
     ],
     "P162": [
      536.5,
      148.120231345834
     ],
     "P163": [
      542,
      148.11154384794997
     ],
     "P164": [
      102,
      58
     ],
     "P165": [
      107.5,
      61.25154311521513
     ],
     "P166": [
      107.5,
      61.25154311521513
     ],
     "P167": [
      113,
      64.26814106087238
     ],
     "P168": [
      113,
      64.26814106087238
     ],
     "P169": [
      118.5,
      67.06677015582804
     ],
     "P170": [
      118.5,
      67.06677015582804
     ],
     "P171": [
      124,
      69.66318006932269
     ],
     "P172": [
      124,
      69.66318006932269
     ],
     "P173": [
      129.5,
      72.07198245440625
     ],
     "P174": [
      129.5,
      72.07198245440625
     ],
     "P175": [
      135,
      74.30673317702019
     ],
     "P176": [
      135,
      74.30673317702019
     ],
     "P177": [
      140.5,
      76.38000860349331
     ],
     "P178": [
      140.5,
      76.38000860349331
     ],
     "P179": [
      146,
      78.30347637576881
     ],
     "P180": [
      146,
      78.30347637576881
     ],
     "P181": [
      151.5,
      80.08796107266028
     ],
     "P182": [
      151.5,
      80.08796107266028
     ],
     "P183": [
      157,
      81.74350512665433
     ],
     "P184": [
      157,
      81.74350512665433
     ],
     "P185": [
      162.5,
      83.27942533907728
     ],
     "P186": [
      162.5,
      83.27942533907728
     ],
     "P187": [
      168,
      84.70436531167303
     ],
     "P188": [
      168,
      84.70436531167303
     ],
     "P189": [
      173.5,
      86.02634408965793
     ],
     "P190": [
      173.5,
      86.02634408965793
     ],
     "P191": [
      179,
      87.25280128999802
     ],
     "P192": [
      179,
      87.25280128999802
     ],
     "P193": [
      184.5,
      88.39063896887427
     ],
     "P194": [
      184.5,
      88.39063896887427
     ],
     "P195": [
      190,
      89.44626046395089
     ],
     "P196": [
      190,
      89.44626046395089
     ],
     "P197": [
      195.5,
      90.42560643003668
     ],
     "P198": [
      195.5,
      90.42560643003668
     ],
     "P199": [
      201,
      91.33418827093487
     ],
     "P200": [
      201,
      91.33418827093487
     ],
     "P201": [
      206.5,
      92.17711915562461
     ],
     "P202": [
      206.5,
      92.17711915562461
     ],
     "P203": [
      212,
      92.95914279332067
     ],
     "P204": [
      212,
      92.95914279332067
     ],
     "P205": [
      217.5,
      93.68466012934812
     ],
     "P206": [
      217.5,
      93.68466012934812
     ],
     "P207": [
      223,
      94.35775411206606
     ],
     "P208": [
      223,
      94.35775411206606
     ],
     "P209": [
      228.5,
      94.98221267021955
     ],
     "P210": [
      228.5,
      94.98221267021955
     ],
     "P211": [
      234,
      95.5615500300286
     ],
     "P212": [
      234,
      95.5615500300286
     ],
     "P213": [
      239.5,
      96.09902649197824
     ],
     "P214": [
      239.5,
      96.09902649197824
     ],
     "P215": [
      245,
      96.59766677860688
     ],
     "P216": [
      245,
      96.59766677860688
     ],
     "P217": [
      250.5,
      97.06027705654765
     ],
     "P218": [
      250.5,
      97.06027705654765
     ],
     "P219": [
      256,
      97.48946072861582
     ],
     "P220": [
      256,
      97.48946072861582
     ],
     "P221": [
      261.5,
      97.88763308481563
     ],
     "P222": [
      261.5,
      97.88763308481563
     ],
     "P223": [
      267,
      98.2570348947161
     ],
     "P224": [
      267,
      98.2570348947161
     ],
     "P225": [
      272.5,
      98.59974501768926
     ],
     "P226": [
      272.5,
      98.59974501768926
     ],
     "P227": [
      278,
      98.91769210197643
     ],
     "P228": [
      278,
      98.91769210197643
     ],
     "P229": [
      283.5,
      99.21266543842103
     ],
     "P230": [
      283.5,
      99.21266543842103
     ],
     "P231": [
      289,
      99.48632502994809
     ],
     "P232": [
      289,
      99.48632502994809
     ],
     "P233": [
      294.5,
      99.74021093345868
     ],
     "P234": [
      294.5,
      99.74021093345868
     ],
     "P235": [
      300,
      99.97575192671127
     ],
     "P236": [
      300,
      99.97575192671127
     ],
     "P237": [
      305.5,
      100.1942735489647
     ],
     "P238": [
      305.5,
      100.1942735489647
     ],
     "P239": [
      311,
      100.39700556063227
     ],
     "P240": [
      311,
      100.39700556063227
     ],
     "P241": [
      316.5,
      100.58508886392713
     ],
     "P242": [
      316.5,
      100.58508886392713
     ],
     "P243": [
      322,
      100.75958192344612
     ],
     "P244": [
      322,
      100.75958192344612
     ],
     "P245": [
      327.5,
      100.92146672282439
     ],
     "P246": [
      327.5,
      100.92146672282439
     ],
     "P247": [
      333,
      101.07165429098319
     ],
     "P248": [
      333,
      101.07165429098319
     ],
     "P249": [
      338.5,
      101.21098982907003
     ],
     "P250": [
      338.5,
      101.21098982907003
     ],
     "P251": [
      344,
      101.3402574669442
     ],
     "P252": [
      344,
      101.3402574669442
     ],
     "P253": [
      349.5,
      101.46018467597503
     ],
     "P254": [
      349.5,
      101.46018467597503
     ],
     "P255": [
      355,
      101.57144636298693
     ],
     "P256": [
      355,
      101.57144636298693
     ],
     "P257": [
      360.5,
      101.67466866839015
     ],
     "P258": [
      360.5,
      101.67466866839015
     ],
     "P259": [
      366,
      101.77043248987184
     ],
     "P260": [
      366,
      101.77043248987184
     ],
     "P261": [
      371.5,
      101.85927675147738
     ],
     "P262": [
      371.5,
      101.85927675147738
     ],
     "P263": [
      377,
      101.9417014364796
     ],
     "P264": [
      377,
      101.9417014364796
     ],
     "P265": [
      382.5,
      102.01817040110308
     ],
     "P266": [
      382.5,
      102.01817040110308
     ],
     "P267": [
      388,
      102.08911398493882
     ],
     "P268": [
      388,
      102.08911398493882
     ],
     "P269": [
      393.5,
      102.1549314327392
     ],
     "P270": [
      393.5,
      102.1549314327392
     ],
     "P271": [
      399,
      102.21599314122278
     ],
     "P272": [
      399,
      102.21599314122278
     ],
     "P273": [
      404.5,
      102.27264274353251
     ],
     "P274": [
      404.5,
      102.27264274353251
     ],
     "P275": [
      410,
      102.3251990430785
     ],
     "P276": [
      410,
      102.3251990430785
     ],
     "P277": [
      415.5,
      102.3739578076478
     ],
     "P278": [
      415.5,
      102.3739578076478
     ],
     "P279": [
      421,
      102.4191934338784
     ],
     "P280": [
      421,
      102.4191934338784
     ],
     "P281": [
      426.5,
      102.46116049146383
     ],
     "P282": [
      426.5,
      102.46116049146383
     ],
     "P283": [
      432,
      102.50009515577909
     ],
     "P284": [
      432,
      102.50009515577909
     ],
     "P285": [
      437.5,
      102.53621653698997
     ],
     "P286": [
      437.5,
      102.53621653698997
     ],
     "P287": [
      443,
      102.56972791312555
     ],
     "P288": [
      443,
      102.56972791312555
     ],
     "P289": [
      448.5,
      102.60081787405323
     ],
     "P290": [
      448.5,
      102.60081787405323
     ],
     "P291": [
      454,
      102.6296613827941
     ],
     "P292": [
      454,
      102.6296613827941
     ],
     "P293": [
      459.5,
      102.65642076015129
     ],
     "P294": [
      459.5,
      102.65642076015129
     ],
     "P295": [
      465,
      102.68124659819267
     ],
     "P296": [
      465,
      102.68124659819267
     ],
     "P297": [
      470.5,
      102.70427860772816
     ],
     "P298": [
      470.5,
      102.70427860772816
     ],
     "P299": [
      476,
      102.72564640455181
     ],
     "P300": [
      476,
      102.72564640455181
     ],
     "P301": [
      481.5,
      102.74547023887212
     ],
     "P302": [
      481.5,
      102.74547023887212
     ],
     "P303": [
      487,
      102.76386167203682
     ],
     "P304": [
      487,
      102.76386167203682
     ],
     "P305": [
      492.5,
      102.78092420435965
     ],
     "P306": [
      492.5,
      102.78092420435965
     ],
     "P307": [
      498,
      102.79675385758242
     ],
     "P308": [
      498,
      102.79675385758242
     ],
     "P309": [
      503.5,
      102.81143971525069
     ],
     "P310": [
      503.5,
      102.81143971525069
     ],
     "P311": [
      509,
      102.82506442404357
     ],
     "P312": [
      509,
      102.82506442404357
     ],
     "P313": [
      514.5,
      102.83770465887929
     ],
     "P314": [
      514.5,
      102.83770465887929
     ],
     "P315": [
      520,
      102.8494315544138
     ],
     "P316": [
      520,
      102.8494315544138
     ],
     "P317": [
      525.5,
      102.86031110536078
     ],
     "P318": [
      525.5,
      102.86031110536078
     ],
     "P319": [
      531,
      102.87040453788603
     ],
     "P320": [
      531,
      102.87040453788603
     ],
     "P321": [
      536.5,
      102.87976865416601
     ],
     "P322": [
      536.5,
      102.87976865416601
     ],
     "P323": [
      542,
      102.88845615205003
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323",
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P166P167",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P168P169",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P170P171",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P172P173",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P174P175",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P176P177",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P178P179",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P180P181",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P182P183",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P184P185",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P186P187",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P188P189",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P190P191",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P192P193",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P194P195",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P196P197",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P198P199",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P200P201",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P202P203",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P204P205",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P206P207",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P208P209",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P210P211",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P212P213",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P214P215",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P216P217",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P218P219",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P220P221",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P222P223",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P224P225",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P226P227",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P228P229",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P230P231",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P232P233",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P234P235",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P236P237",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P238P239",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P240P241",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P242P243",
      "col": 2,
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
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       102,
       39
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       322,
       39
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       542,
       39
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       551,
       27
      ],
      "text": "t (s)",
      "col": 0
     },
     {
      "at": [
       90,
       218
      ],
      "text": "M",
      "col": 0
     },
     {
      "at": [
       70,
       58
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       70,
       103
      ],
      "text": "0.3",
      "col": 0
     },
     {
      "at": [
       70,
       148
      ],
      "text": "0.6",
      "col": 0
     },
     {
      "at": [
       70,
       193
      ],
      "text": "0.9",
      "col": 0
     },
     {
      "at": [
       407,
       203
      ],
      "text": "A (orange): tends to 0.60 M",
      "col": 1
     },
     {
      "at": [
       407,
       181
      ],
      "text": "B (green): tends to 0.30 M",
      "col": 2
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "7.2",
  "name": "Direction of Reversible Reactions",
  "skill": "s2",
  "teach": [
   "Compare forward and reverse reaction rates to identify the net direction. For a one-to-one A ⇌ B model, if the forward rate is 0.070 M/s and the reverse rate is 0.020 M/s, B has a net formation rate of 0.050 M/s. Both directions occur even while the net change favors B. If the reverse rate becomes greater, B is consumed overall. Subtract comparable rates expressed for the same stoichiometric reaction amount; do not compare unnormalized species rates with different coefficients.",
   "Stoichiometry connects the net reaction rate to each species. For 2A ⇌ B, define both directional rates as B formation or consumption rates. A forward value 0.040 M/s and reverse value 0.010 M/s give net B formation of 0.030 M/s and net A disappearance of 0.060 M/s. In a simple reversible elementary A ⇌ B model that starts with only A, the reverse rate initially vanishes because no B is present. As B forms, reverse events become possible. A direction label describes the net conversion at that moment, not a claim that the other direction is forbidden."
  ],
  "boards": [
   [
    "A ⇌ B: forward 0.070, reverse 0.020 M/s",
    "Net B formation: 0.070 - 0.020 = 0.050 M/s",
    "Both processes occur during a net change",
    "Compare rates on the same stoichiometric basis"
   ],
   [
    "2A ⇌ B: forward 0.040, reverse 0.010 M/s",
    "Net B gain: 0.030 M/s",
    "Net A loss: 2 × 0.030 = 0.060 M/s",
    "A zero initial product amount can give zero reverse rate"
   ]
  ],
  "eqs": [
   "Net forward reaction rate = rforward - rreverse",
   "For 2A ⇌ B: -d[A]/dt = 2 d[B]/dt"
  ],
  "questions": [
   [
    "For one-to-one A ⇌ B, forward and reverse rates are 0.080 and 0.030 M/s. What is net B formation rate?",
    "0.050 M/s",
    "0.110 M/s",
    "0.030 M/s",
    "Subtract B consumption from B formation: 0.080 - 0.030 = 0.050 M/s."
   ],
   [
    "For one-to-one A ⇌ B, reverse rate exceeds forward rate. Which net change occurs?",
    "B is converted to A",
    "A is converted to B",
    "No net change is possible",
    "More reverse than forward events produce net reactant formation, even though both directions may still occur."
   ],
   [
    "For one-to-one A ⇌ B, forward and reverse rates are both 0.025 M/s. What is the net rate?",
    "0 M/s",
    "0.050 M/s",
    "0.025 M/s",
    "The two equal rates cancel in the net balance: 0.025 - 0.025 = 0 M/s."
   ],
   [
    "For 2A ⇌ B, the B-based forward and reverse rates are 0.060 and 0.020 M/s. What is the net A disappearance rate?",
    "0.080 M/s",
    "0.040 M/s",
    "0.160 M/s",
    "Net B formation is 0.040 M/s; two A are consumed per B, so A disappears at 0.080 M/s."
   ],
   [
    "A reversible elementary A ⇌ B model begins with only A. Why is its initial reverse rate zero?",
    "No B is available for the reverse event",
    "Reverse reactions are impossible at all times",
    "The equilibrium constant must be zero",
    "The initial reverse reactant is absent. Its concentration can rise as forward events produce B."
   ],
   [
    "A sample is changing net from reactants to products. Does that imply reverse events are absent?",
    "No; the forward rate can simply be larger",
    "Yes; only one direction can ever occur",
    "Yes; a nonzero reverse rate forces exact equilibrium",
    "Net direction is determined by the difference between opposing rates, not by requiring one direction to vanish."
   ],
   [
    "Why must rates be put on the same stoichiometric basis before comparing opposite directions?",
    "Different species coefficients can give different numerical rates",
    "Rates never have units",
    "All species always change one-to-one",
    "Species disappearance and formation rates scale with coefficients; normalized rates allow a valid directional comparison."
   ],
   [
    "Over an interval in a one-to-one A ⇌ B particle model, 18 forward and 11 reverse events occur. What is the net change in B count?",
    "7 more B particles",
    "29 more B particles",
    "7 fewer B particles",
    "Forward events add B and reverse events remove B, giving a net increase of 18 - 11 = 7."
   ],
   [
    "Over an interval in a one-to-one A ⇌ B model, 6 forward and 14 reverse events occur. What is the net change in A count?",
    "8 more A particles",
    "8 fewer A particles",
    "20 more A particles",
    "Reverse events make A and forward events consume it, leaving a net increase of 14 - 6 = 8."
   ],
   [
    "The forward and reverse rates approach equal nonzero values under fixed conditions. What happens to the net conversion rate?",
    "It approaches zero",
    "It approaches their sum",
    "It must approach the forward rate alone",
    "The net rate is their difference, which tends to zero as the opposing rates become equal."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Reversible A ⇌ B: opposing rates",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      102,
      207
     ],
     "P1": [
      102,
      58
     ],
     "P2": [
      102,
      58
     ],
     "P3": [
      565,
      58
     ],
     "P4": [
      102,
      193
     ],
     "P5": [
      107.5,
      189.74845688478487
     ],
     "P6": [
      107.5,
      189.74845688478487
     ],
     "P7": [
      113,
      186.73185893912762
     ],
     "P8": [
      113,
      186.73185893912762
     ],
     "P9": [
      118.5,
      183.933229844172
     ],
     "P10": [
      118.5,
      183.933229844172
     ],
     "P11": [
      124,
      181.33681993067728
     ],
     "P12": [
      124,
      181.33681993067728
     ],
     "P13": [
      129.5,
      178.92801754559378
     ],
     "P14": [
      129.5,
      178.92801754559378
     ],
     "P15": [
      135,
      176.6932668229798
     ],
     "P16": [
      135,
      176.6932668229798
     ],
     "P17": [
      140.5,
      174.6199913965067
     ],
     "P18": [
      140.5,
      174.6199913965067
     ],
     "P19": [
      146,
      172.6965236242312
     ],
     "P20": [
      146,
      172.6965236242312
     ],
     "P21": [
      151.5,
      170.91203892733972
     ],
     "P22": [
      151.5,
      170.91203892733972
     ],
     "P23": [
      157,
      169.25649487334567
     ],
     "P24": [
      157,
      169.25649487334567
     ],
     "P25": [
      162.5,
      167.72057466092272
     ],
     "P26": [
      162.5,
      167.72057466092272
     ],
     "P27": [
      168,
      166.29563468832697
     ],
     "P28": [
      168,
      166.29563468832697
     ],
     "P29": [
      173.5,
      164.97365591034205
     ],
     "P30": [
      173.5,
      164.97365591034205
     ],
     "P31": [
      179,
      163.74719871000198
     ],
     "P32": [
      179,
      163.74719871000198
     ],
     "P33": [
      184.5,
      162.60936103112573
     ],
     "P34": [
      184.5,
      162.60936103112573
     ],
     "P35": [
      190,
      161.55373953604908
     ],
     "P36": [
      190,
      161.55373953604908
     ],
     "P37": [
      195.5,
      160.57439356996332
     ],
     "P38": [
      195.5,
      160.57439356996332
     ],
     "P39": [
      201,
      159.66581172906513
     ],
     "P40": [
      201,
      159.66581172906513
     ],
     "P41": [
      206.5,
      158.8228808443754
     ],
     "P42": [
      206.5,
      158.8228808443754
     ],
     "P43": [
      212,
      158.04085720667936
     ],
     "P44": [
      212,
      158.04085720667936
     ],
     "P45": [
      217.5,
      157.31533987065185
     ],
     "P46": [
      217.5,
      157.31533987065185
     ],
     "P47": [
      223,
      156.64224588793394
     ],
     "P48": [
      223,
      156.64224588793394
     ],
     "P49": [
      228.5,
      156.01778732978045
     ],
     "P50": [
      228.5,
      156.01778732978045
     ],
     "P51": [
      234,
      155.4384499699714
     ],
     "P52": [
      234,
      155.4384499699714
     ],
     "P53": [
      239.5,
      154.9009735080218
     ],
     "P54": [
      239.5,
      154.9009735080218
     ],
     "P55": [
      245,
      154.40233322139312
     ],
     "P56": [
      245,
      154.40233322139312
     ],
     "P57": [
      250.5,
      153.93972294345235
     ],
     "P58": [
      250.5,
      153.93972294345235
     ],
     "P59": [
      256,
      153.51053927138418
     ],
     "P60": [
      256,
      153.51053927138418
     ],
     "P61": [
      261.5,
      153.11236691518437
     ],
     "P62": [
      261.5,
      153.11236691518437
     ],
     "P63": [
      267,
      152.7429651052839
     ],
     "P64": [
      267,
      152.7429651052839
     ],
     "P65": [
      272.5,
      152.40025498231074
     ],
     "P66": [
      272.5,
      152.40025498231074
     ],
     "P67": [
      278,
      152.08230789802354
     ],
     "P68": [
      278,
      152.08230789802354
     ],
     "P69": [
      283.5,
      151.78733456157897
     ],
     "P70": [
      283.5,
      151.78733456157897
     ],
     "P71": [
      289,
      151.5136749700519
     ],
     "P72": [
      289,
      151.5136749700519
     ],
     "P73": [
      294.5,
      151.25978906654132
     ],
     "P74": [
      294.5,
      151.25978906654132
     ],
     "P75": [
      300,
      151.02424807328873
     ],
     "P76": [
      300,
      151.02424807328873
     ],
     "P77": [
      305.5,
      150.8057264510353
     ],
     "P78": [
      305.5,
      150.8057264510353
     ],
     "P79": [
      311,
      150.60299443936773
     ],
     "P80": [
      311,
      150.60299443936773
     ],
     "P81": [
      316.5,
      150.41491113607287
     ],
     "P82": [
      316.5,
      150.41491113607287
     ],
     "P83": [
      322,
      150.24041807655388
     ],
     "P84": [
      322,
      150.24041807655388
     ],
     "P85": [
      327.5,
      150.0785332771756
     ],
     "P86": [
      327.5,
      150.0785332771756
     ],
     "P87": [
      333,
      149.9283457090168
     ],
     "P88": [
      333,
      149.9283457090168
     ],
     "P89": [
      338.5,
      149.78901017092994
     ],
     "P90": [
      338.5,
      149.78901017092994
     ],
     "P91": [
      344,
      149.6597425330558
     ],
     "P92": [
      344,
      149.6597425330558
     ],
     "P93": [
      349.5,
      149.53981532402497
     ],
     "P94": [
      349.5,
      149.53981532402497
     ],
     "P95": [
      355,
      149.42855363701307
     ],
     "P96": [
      355,
      149.42855363701307
     ],
     "P97": [
      360.5,
      149.32533133160985
     ],
     "P98": [
      360.5,
      149.32533133160985
     ],
     "P99": [
      366,
      149.22956751012816
     ],
     "P100": [
      366,
      149.22956751012816
     ],
     "P101": [
      371.5,
      149.14072324852262
     ],
     "P102": [
      371.5,
      149.14072324852262
     ],
     "P103": [
      377,
      149.0582985635204
     ],
     "P104": [
      377,
      149.0582985635204
     ],
     "P105": [
      382.5,
      148.98182959889692
     ],
     "P106": [
      382.5,
      148.98182959889692
     ],
     "P107": [
      388,
      148.91088601506118
     ],
     "P108": [
      388,
      148.91088601506118
     ],
     "P109": [
      393.5,
      148.8450685672608
     ],
     "P110": [
      393.5,
      148.8450685672608
     ],
     "P111": [
      399,
      148.78400685877722
     ],
     "P112": [
      399,
      148.78400685877722
     ],
     "P113": [
      404.5,
      148.72735725646746
     ],
     "P114": [
      404.5,
      148.72735725646746
     ],
     "P115": [
      410,
      148.6748009569215
     ],
     "P116": [
      410,
      148.6748009569215
     ],
     "P117": [
      415.5,
      148.6260421923522
     ],
     "P118": [
      415.5,
      148.6260421923522
     ],
     "P119": [
      421,
      148.5808065661216
     ],
     "P120": [
      421,
      148.5808065661216
     ],
     "P121": [
      426.5,
      148.53883950853617
     ],
     "P122": [
      426.5,
      148.53883950853617
     ],
     "P123": [
      432,
      148.4999048442209
     ],
     "P124": [
      432,
      148.4999048442209
     ],
     "P125": [
      437.5,
      148.46378346301003
     ],
     "P126": [
      437.5,
      148.46378346301003
     ],
     "P127": [
      443,
      148.43027208687445
     ],
     "P128": [
      443,
      148.43027208687445
     ],
     "P129": [
      448.5,
      148.39918212594677
     ],
     "P130": [
      448.5,
      148.39918212594677
     ],
     "P131": [
      454,
      148.3703386172059
     ],
     "P132": [
      454,
      148.3703386172059
     ],
     "P133": [
      459.5,
      148.34357923984868
     ],
     "P134": [
      459.5,
      148.34357923984868
     ],
     "P135": [
      465,
      148.31875340180733
     ],
     "P136": [
      465,
      148.31875340180733
     ],
     "P137": [
      470.5,
      148.29572139227184
     ],
     "P138": [
      470.5,
      148.29572139227184
     ],
     "P139": [
      476,
      148.2743535954482
     ],
     "P140": [
      476,
      148.2743535954482
     ],
     "P141": [
      481.5,
      148.2545297611279
     ],
     "P142": [
      481.5,
      148.2545297611279
     ],
     "P143": [
      487,
      148.23613832796315
     ],
     "P144": [
      487,
      148.23613832796315
     ],
     "P145": [
      492.5,
      148.21907579564032
     ],
     "P146": [
      492.5,
      148.21907579564032
     ],
     "P147": [
      498,
      148.20324614241756
     ],
     "P148": [
      498,
      148.20324614241756
     ],
     "P149": [
      503.5,
      148.18856028474931
     ],
     "P150": [
      503.5,
      148.18856028474931
     ],
     "P151": [
      509,
      148.17493557595643
     ],
     "P152": [
      509,
      148.17493557595643
     ],
     "P153": [
      514.5,
      148.1622953411207
     ],
     "P154": [
      514.5,
      148.1622953411207
     ],
     "P155": [
      520,
      148.1505684455862
     ],
     "P156": [
      520,
      148.1505684455862
     ],
     "P157": [
      525.5,
      148.13968889463922
     ],
     "P158": [
      525.5,
      148.13968889463922
     ],
     "P159": [
      531,
      148.12959546211397
     ],
     "P160": [
      531,
      148.12959546211397
     ],
     "P161": [
      536.5,
      148.120231345834
     ],
     "P162": [
      536.5,
      148.120231345834
     ],
     "P163": [
      542,
      148.11154384794997
     ],
     "P164": [
      102,
      58
     ],
     "P165": [
      107.5,
      64.50308623043026
     ],
     "P166": [
      107.5,
      64.50308623043026
     ],
     "P167": [
      113,
      70.53628212174479
     ],
     "P168": [
      113,
      70.53628212174479
     ],
     "P169": [
      118.5,
      76.13354031165608
     ],
     "P170": [
      118.5,
      76.13354031165608
     ],
     "P171": [
      124,
      81.32636013864538
     ],
     "P172": [
      124,
      81.32636013864538
     ],
     "P173": [
      129.5,
      86.1439649088125
     ],
     "P174": [
      129.5,
      86.1439649088125
     ],
     "P175": [
      135,
      90.61346635404041
     ],
     "P176": [
      135,
      90.61346635404041
     ],
     "P177": [
      140.5,
      94.76001720698665
     ],
     "P178": [
      140.5,
      94.76001720698665
     ],
     "P179": [
      146,
      98.60695275153762
     ],
     "P180": [
      146,
      98.60695275153762
     ],
     "P181": [
      151.5,
      102.17592214532058
     ],
     "P182": [
      151.5,
      102.17592214532058
     ],
     "P183": [
      157,
      105.48701025330868
     ],
     "P184": [
      157,
      105.48701025330868
     ],
     "P185": [
      162.5,
      108.55885067815456
     ],
     "P186": [
      162.5,
      108.55885067815456
     ],
     "P187": [
      168,
      111.40873062334609
     ],
     "P188": [
      168,
      111.40873062334609
     ],
     "P189": [
      173.5,
      114.05268817931588
     ],
     "P190": [
      173.5,
      114.05268817931588
     ],
     "P191": [
      179,
      116.50560257999604
     ],
     "P192": [
      179,
      116.50560257999604
     ],
     "P193": [
      184.5,
      118.78127793774854
     ],
     "P194": [
      184.5,
      118.78127793774854
     ],
     "P195": [
      190,
      120.89252092790181
     ],
     "P196": [
      190,
      120.89252092790181
     ],
     "P197": [
      195.5,
      122.85121286007336
     ],
     "P198": [
      195.5,
      122.85121286007336
     ],
     "P199": [
      201,
      124.66837654186975
     ],
     "P200": [
      201,
      124.66837654186975
     ],
     "P201": [
      206.5,
      126.35423831124922
     ],
     "P202": [
      206.5,
      126.35423831124922
     ],
     "P203": [
      212,
      127.91828558664133
     ],
     "P204": [
      212,
      127.91828558664133
     ],
     "P205": [
      217.5,
      129.36932025869626
     ],
     "P206": [
      217.5,
      129.36932025869626
     ],
     "P207": [
      223,
      130.71550822413212
     ],
     "P208": [
      223,
      130.71550822413212
     ],
     "P209": [
      228.5,
      131.96442534043913
     ],
     "P210": [
      228.5,
      131.96442534043913
     ],
     "P211": [
      234,
      133.12310006005723
     ],
     "P212": [
      234,
      133.12310006005723
     ],
     "P213": [
      239.5,
      134.19805298395644
     ],
     "P214": [
      239.5,
      134.19805298395644
     ],
     "P215": [
      245,
      135.19533355721376
     ],
     "P216": [
      245,
      135.19533355721376
     ],
     "P217": [
      250.5,
      136.1205541130953
     ],
     "P218": [
      250.5,
      136.1205541130953
     ],
     "P219": [
      256,
      136.97892145723165
     ],
     "P220": [
      256,
      136.97892145723165
     ],
     "P221": [
      261.5,
      137.77526616963127
     ],
     "P222": [
      261.5,
      137.77526616963127
     ],
     "P223": [
      267,
      138.5140697894322
     ],
     "P224": [
      267,
      138.5140697894322
     ],
     "P225": [
      272.5,
      139.1994900353785
     ],
     "P226": [
      272.5,
      139.1994900353785
     ],
     "P227": [
      278,
      139.83538420395286
     ],
     "P228": [
      278,
      139.83538420395286
     ],
     "P229": [
      283.5,
      140.42533087684205
     ],
     "P230": [
      283.5,
      140.42533087684205
     ],
     "P231": [
      289,
      140.97265005989624
     ],
     "P232": [
      289,
      140.97265005989624
     ],
     "P233": [
      294.5,
      141.48042186691737
     ],
     "P234": [
      294.5,
      141.48042186691737
     ],
     "P235": [
      300,
      141.95150385342254
     ],
     "P236": [
      300,
      141.95150385342254
     ],
     "P237": [
      305.5,
      142.3885470979294
     ],
     "P238": [
      305.5,
      142.3885470979294
     ],
     "P239": [
      311,
      142.79401112126453
     ],
     "P240": [
      311,
      142.79401112126453
     ],
     "P241": [
      316.5,
      143.17017772785428
     ],
     "P242": [
      316.5,
      143.17017772785428
     ],
     "P243": [
      322,
      143.51916384689224
     ],
     "P244": [
      322,
      143.51916384689224
     ],
     "P245": [
      327.5,
      143.84293344564878
     ],
     "P246": [
      327.5,
      143.84293344564878
     ],
     "P247": [
      333,
      144.14330858196638
     ],
     "P248": [
      333,
      144.14330858196638
     ],
     "P249": [
      338.5,
      144.42197965814006
     ],
     "P250": [
      338.5,
      144.42197965814006
     ],
     "P251": [
      344,
      144.6805149338884
     ],
     "P252": [
      344,
      144.6805149338884
     ],
     "P253": [
      349.5,
      144.92036935195006
     ],
     "P254": [
      349.5,
      144.92036935195006
     ],
     "P255": [
      355,
      145.1428927259739
     ],
     "P256": [
      355,
      145.1428927259739
     ],
     "P257": [
      360.5,
      145.34933733678037
     ],
     "P258": [
      360.5,
      145.34933733678037
     ],
     "P259": [
      366,
      145.54086497974367
     ],
     "P260": [
      366,
      145.54086497974367
     ],
     "P261": [
      371.5,
      145.71855350295476
     ],
     "P262": [
      371.5,
      145.71855350295476
     ],
     "P263": [
      377,
      145.88340287295918
     ],
     "P264": [
      377,
      145.88340287295918
     ],
     "P265": [
      382.5,
      146.03634080220615
     ],
     "P266": [
      382.5,
      146.03634080220615
     ],
     "P267": [
      388,
      146.1782279698776
     ],
     "P268": [
      388,
      146.1782279698776
     ],
     "P269": [
      393.5,
      146.3098628654784
     ],
     "P270": [
      393.5,
      146.3098628654784
     ],
     "P271": [
      399,
      146.43198628244556
     ],
     "P272": [
      399,
      146.43198628244556
     ],
     "P273": [
      404.5,
      146.5452854870651
     ],
     "P274": [
      404.5,
      146.5452854870651
     ],
     "P275": [
      410,
      146.650398086157
     ],
     "P276": [
      410,
      146.650398086157
     ],
     "P277": [
      415.5,
      146.74791561529563
     ],
     "P278": [
      415.5,
      146.74791561529563
     ],
     "P279": [
      421,
      146.8383868677568
     ],
     "P280": [
      421,
      146.8383868677568
     ],
     "P281": [
      426.5,
      146.92232098292766
     ],
     "P282": [
      426.5,
      146.92232098292766
     ],
     "P283": [
      432,
      147.00019031155819
     ],
     "P284": [
      432,
      147.00019031155819
     ],
     "P285": [
      437.5,
      147.07243307397994
     ],
     "P286": [
      437.5,
      147.07243307397994
     ],
     "P287": [
      443,
      147.1394558262511
     ],
     "P288": [
      443,
      147.1394558262511
     ],
     "P289": [
      448.5,
      147.20163574810647
     ],
     "P290": [
      448.5,
      147.20163574810647
     ],
     "P291": [
      454,
      147.2593227655882
     ],
     "P292": [
      454,
      147.2593227655882
     ],
     "P293": [
      459.5,
      147.31284152030258
     ],
     "P294": [
      459.5,
      147.31284152030258
     ],
     "P295": [
      465,
      147.36249319638532
     ],
     "P296": [
      465,
      147.36249319638532
     ],
     "P297": [
      470.5,
      147.4085572154563
     ],
     "P298": [
      470.5,
      147.4085572154563
     ],
     "P299": [
      476,
      147.4512928091036
     ],
     "P300": [
      476,
      147.4512928091036
     ],
     "P301": [
      481.5,
      147.49094047774423
     ],
     "P302": [
      481.5,
      147.49094047774423
     ],
     "P303": [
      487,
      147.52772334407368
     ],
     "P304": [
      487,
      147.52772334407368
     ],
     "P305": [
      492.5,
      147.56184840871933
     ],
     "P306": [
      492.5,
      147.56184840871933
     ],
     "P307": [
      498,
      147.59350771516486
     ],
     "P308": [
      498,
      147.59350771516486
     ],
     "P309": [
      503.5,
      147.6228794305014
     ],
     "P310": [
      503.5,
      147.6228794305014
     ],
     "P311": [
      509,
      147.65012884808715
     ],
     "P312": [
      509,
      147.65012884808715
     ],
     "P313": [
      514.5,
      147.67540931775858
     ],
     "P314": [
      514.5,
      147.67540931775858
     ],
     "P315": [
      520,
      147.6988631088276
     ],
     "P316": [
      520,
      147.6988631088276
     ],
     "P317": [
      525.5,
      147.72062221072156
     ],
     "P318": [
      525.5,
      147.72062221072156
     ],
     "P319": [
      531,
      147.74080907577206
     ],
     "P320": [
      531,
      147.74080907577206
     ],
     "P321": [
      536.5,
      147.75953730833203
     ],
     "P322": [
      536.5,
      147.75953730833203
     ],
     "P323": [
      542,
      147.77691230410005
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107P108P109P110P111P112P113P114P115P116P117P118P119P120P121P122P123P124P125P126P127P128P129P130P131P132P133P134P135P136P137P138P139P140P141P142P143P144P145P146P147P148P149P150P151P152P153P154P155P156P157P158P159P160P161P162P163P164P165P166P167P168P169P170P171P172P173P174P175P176P177P178P179P180P181P182P183P184P185P186P187P188P189P190P191P192P193P194P195P196P197P198P199P200P201P202P203P204P205P206P207P208P209P210P211P212P213P214P215P216P217P218P219P220P221P222P223P224P225P226P227P228P229P230P231P232P233P234P235P236P237P238P239P240P241P242P243P244P245P246P247P248P249P250P251P252P253P254P255P256P257P258P259P260P261P262P263P264P265P266P267P268P269P270P271P272P273P274P275P276P277P278P279P280P281P282P283P284P285P286P287P288P289P290P291P292P293P294P295P296P297P298P299P300P301P302P303P304P305P306P307P308P309P310P311P312P313P314P315P316P317P318P319P320P321P322P323",
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P166P167",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P168P169",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P170P171",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P172P173",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P174P175",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P176P177",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P178P179",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P180P181",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P182P183",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P184P185",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P186P187",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P188P189",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P190P191",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P192P193",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P194P195",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P196P197",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P198P199",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P200P201",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P202P203",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P204P205",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P206P207",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P208P209",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P210P211",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P212P213",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P214P215",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P216P217",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P218P219",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P220P221",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P222P223",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P224P225",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P226P227",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P228P229",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P230P231",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P232P233",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P234P235",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P236P237",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P238P239",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P240P241",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P242P243",
      "col": 2,
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
     }
    ],
    "polys": [],
    "notes": [
     {
      "at": [
       102,
       39
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       322,
       39
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       542,
       39
      ],
      "text": "20",
      "col": 0
     },
     {
      "at": [
       551,
       27
      ],
      "text": "t (s)",
      "col": 0
     },
     {
      "at": [
       90,
       218
      ],
      "text": "M/s",
      "col": 0
     },
     {
      "at": [
       70,
       58
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       70,
       103
      ],
      "text": "0.03",
      "col": 0
     },
     {
      "at": [
       70,
       148
      ],
      "text": "0.06",
      "col": 0
     },
     {
      "at": [
       70,
       193
      ],
      "text": "0.09",
      "col": 0
     },
     {
      "at": [
       407,
       203
      ],
      "text": "Forward (orange)",
      "col": 1
     },
     {
      "at": [
       407,
       181
      ],
      "text": "Reverse (green)",
      "col": 2
     },
     {
      "at": [
       380,
       78
      ],
      "text": "Both rates tend to 0.060 M/s",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "7.3",
  "name": "Reaction Quotient and Equilibrium Constant",
  "skill": "s3",
  "teach": [
   "For a balanced reversible reaction aA + bB ⇌ cC + dD, the concentration quotient is Qc = [C]^c[D]^d/([A]^a[B]^b). Use stoichiometric powers here: this is an equilibrium quotient, not an empirical kinetic rate law. Q uses the current composition; at equilibrium it equals K for the stated temperature and reaction. For A + 2B ⇌ C, the denominator contains [A][B]^2. A pressure quotient Qp instead uses gas partial pressures, not total pressure. Numerical examples use concentration values in mol/L or partial pressures in the stated consistent unit; their supplied constants use that same convention.",
   "Pure solids and pure liquids are omitted from the usual equilibrium expression because their activities are fixed at unity in the introductory model while those phases are present. For X(s) ⇌ Y(g) + Z(g), Qp = PY PZ; there is no mass-of-X term. For an aqueous reaction using pure liquid water as the solvent, water is normally omitted. This does not mean those species do not participate in the balanced equation. Distinguish pure liquid solvent from a dissolved reactant, whose concentration generally does appear. The current AP outline requires Kc and Kp concepts but excludes numerical conversion between them."
  ],
  "boards": [
   [
    "aA + bB ⇌ cC + dD",
    "Qc = [C]^c[D]^d / ([A]^a[B]^b)",
    "Use current values for Q; equilibrium values for K",
    "Qp uses each gas partial pressure"
   ],
   [
    "X(s) ⇌ Y(g) + Z(g): Qp = PY PZ",
    "Omit pure solids and pure liquids",
    "Keep them in the balanced chemical equation",
    "A dissolved reactant is not a pure liquid"
   ]
  ],
  "eqs": [
   "For A + 2B ⇌ C: Qc = [C]/([A][B]^2)",
   "At equilibrium and the stated temperature: Qc = Kc or Qp = Kp"
  ],
  "questions": [
   [
    "For A + 2B ⇌ C, what is Qc?",
    "[C]/([A][B]^2)",
    "[A][B]^2/[C]",
    "[C]/([A]+2[B])",
    "Products go in the numerator and reactants in the denominator, with coefficients becoming exponents."
   ],
   [
    "For 2A ⇌ B + C, what is Qc?",
    "[B][C]/[A]^2",
    "[A]^2/([B][C])",
    "([B]+[C])/[A]",
    "The product concentrations multiply, and the coefficient two on A becomes a squared denominator term."
   ],
   [
    "What distinguishes Qc from Kc for the same reaction at a specified temperature?",
    "Q uses current concentrations; K uses equilibrium concentrations",
    "Q is always a rate constant",
    "K uses initial concentrations even before equilibration",
    "The mathematical form is the same, but only an equilibrium composition gives the equilibrium constant."
   ],
   [
    "For a gas equilibrium, which quantities belong in Qp?",
    "Individual species partial pressures",
    "The total pressure substituted for every gas",
    "Liquid sample masses only",
    "Each gas has its own partial-pressure factor; total pressure alone cannot replace all species pressures."
   ],
   [
    "For X(s) ⇌ Y(g) + Z(g), which is the usual Qp expression?",
    "PY PZ",
    "PY PZ divided by grams of X",
    "PX/(PY PZ)",
    "The pure solid is omitted from the activity-based expression while present, leaving the product gas pressure factors."
   ],
   [
    "Why is a pure solid omitted from the usual equilibrium expression?",
    "Its activity is fixed in the model while that phase is present",
    "It has no atoms",
    "It cannot participate in any reaction",
    "The omission reflects the constant activity of the pure phase, not an absence of chemical participation."
   ],
   [
    "Should an aqueous reactant generally be omitted merely because the mixture is liquid?",
    "No; a dissolved reactant concentration generally appears",
    "Yes; every liquid mixture removes all concentration terms",
    "Yes; only gas reactions have equilibrium expressions",
    "A solute in solution is different from a pure liquid phase; its variable concentration can enter the quotient."
   ],
   [
    "For A(g) ⇌ 2B(g), which pressure quotient matches the balanced reaction?",
    "PB^2/PA",
    "PA/PB^2",
    "2PB/PA",
    "The coefficient two becomes an exponent on B partial pressure, and product factors are divided by reactant factors."
   ],
   [
    "Must pure liquid water omitted from an aqueous equilibrium expression also be removed from the balanced equation?",
    "No; the equation still records its participation",
    "Yes; it cannot be a reactant",
    "Yes; atoms in solvent need not balance",
    "Balanced equations track atoms and species, whereas the quotient omits a pure solvent factor treated as constant."
   ],
   [
    "Why may overall coefficients be used as powers in Q even when they cannot generally give a kinetic rate law?",
    "Equilibrium mass action and empirical kinetics are different relations",
    "Every overall reaction must be elementary",
    "Equilibrium quotients are independent of stoichiometry",
    "The equilibrium expression follows the balanced net stoichiometry; kinetic orders must be established by a mechanism or measurements."
   ]
  ],
  "check": [
   "For A(g) + B(g) ⇌ 2C(g), which quotient should be compared with Kp?",
   "PC^2/(PA PB)",
   "PA PB/PC^2",
   "PC/(PA + PB)",
   "Use products over reactants, with the coefficient on C as an exponent, and use individual gas partial pressures."
  ]
 },
 {
  "code": "7.4",
  "name": "Calculating the Equilibrium Constant",
  "skill": "s4",
  "teach": [
   "Calculate K from measured equilibrium values, after writing the expression. For A + B ⇌ C with equilibrium [A] = 0.20 M, [B] = 0.30 M and [C] = 0.12 M, Kc = 0.12/(0.20 × 0.30) = 2.0 in the stated concentration convention. For A ⇌ 2B, square the B value before dividing by A. An initial mixture generally gives Q rather than K unless it is known to be at equilibrium. Substituting total moles into a concentration expression can be wrong when stoichiometric powers do not cancel the volume.",
   "For a gas model A + B ⇌ C at equilibrium, PA = 0.40 bar, PB = 0.50 bar and PC = 0.20 bar give Kp = 1.0 using the stated pressure convention. All pressure terms must use the convention associated with the supplied constant. Multiple equilibrium trials at the same temperature for the same reaction should give consistent K values even when their individual concentrations differ. Disagreement can indicate that equilibrium was not reached, temperature differed or measurements or assumptions need review; it is not evidence that K must equal the initial amount of product."
  ],
  "boards": [
   [
    "Equilibrium A + B ⇌ C",
    "[A] 0.20; [B] 0.30; [C] 0.12 M",
    "Kc = 0.12/(0.20 × 0.30) = 2.0",
    "Initial values give Q unless already at equilibrium"
   ],
   [
    "Gas model A + B ⇌ C",
    "PA 0.40; PB 0.50; PC 0.20 bar",
    "Kp = 0.20/(0.40 × 0.50) = 1.0",
    "Same reaction and temperature: consistent K"
   ]
  ],
  "eqs": [
   "Kc = [C]eq/([A]eq[B]eq) = 2.0",
   "Kp = PC/(PA PB) = 1.0 in the stated pressure convention"
  ],
  "questions": [
   [
    "For A ⇌ B at equilibrium, [A] = 0.25 M and [B] = 0.75 M. What is Kc?",
    "3",
    "1/3",
    "1",
    "Use the equilibrium product-to-reactant ratio: 0.75/0.25 = 3 for the one-to-one model."
   ],
   [
    "For A + B ⇌ C at equilibrium, [A] = 0.20 M, [B] = 0.50 M and [C] = 0.30 M. What is Kc in the stated convention?",
    "3",
    "0.03",
    "0.43",
    "The denominator is 0.20 × 0.50 = 0.10, so Kc = 0.30/0.10 = 3."
   ],
   [
    "For A ⇌ 2B at equilibrium, [A] = 0.40 M and [B] = 0.20 M. What is Kc in the stated convention?",
    "0.10",
    "0.50",
    "2.0",
    "Square the B concentration: Kc = 0.20^2/0.40 = 0.10."
   ],
   [
    "For 2A ⇌ B at equilibrium, [A] = 0.30 M and [B] = 0.18 M. What is Kc in the stated convention?",
    "2.0",
    "0.60",
    "0.0162",
    "The denominator is [A]^2 = 0.09, giving Kc = 0.18/0.09 = 2.0."
   ],
   [
    "For A(g) ⇌ B(g), equilibrium partial pressures are PA = 0.20 bar and PB = 0.60 bar. What is Kp?",
    "3",
    "0.12",
    "1/3",
    "With equal total pressure powers, the ratio PB/PA is 0.60/0.20 = 3."
   ],
   [
    "For A(g) + B(g) ⇌ C(g), equilibrium PA = 0.50, PB = 0.40 and PC = 0.10 bar. What is Kp using that pressure convention?",
    "0.50",
    "2.0",
    "0.020",
    "Evaluate PC/(PA PB) = 0.10/(0.50 × 0.40) = 0.50 in the stated convention."
   ],
   [
    "For A + B ⇌ C, a 2.0 L vessel contains equilibrium amounts 0.40 mol A, 0.60 mol B and 0.24 mol C. What is Kc using M concentrations?",
    "2.0",
    "1.0",
    "4.0",
    "The concentrations are 0.20, 0.30 and 0.12 M, giving 0.12/(0.20 × 0.30) = 2.0."
   ],
   [
    "A learner substitutes initial values into the mass-action expression before a reaction equilibrates. What quantity is obtained?",
    "The initial reaction quotient",
    "The equilibrium constant necessarily",
    "The forward rate constant",
    "The expression evaluated at a nonequilibrium composition is Q. It gives K only when the composition is at equilibrium."
   ],
   [
    "Two equilibrium trials for the same reaction at the same temperature have different individual concentrations. What should agree in the ideal model?",
    "Their calculated equilibrium constants",
    "Every individual concentration necessarily",
    "Their initial product amounts necessarily",
    "Different compositions can satisfy the same mass-action ratio, so K remains consistent at that temperature."
   ],
   [
    "Why is dividing moles by vessel volume important before evaluating Kc for A + B ⇌ C?",
    "The expression contains concentration factors with unequal total powers",
    "Volume is always numerically one liter",
    "Moles and molarity are identical quantities",
    "There is one concentration factor above and two below, so a volume factor would not cancel if raw moles were used."
   ]
  ]
 },
 {
  "code": "7.5",
  "name": "Magnitude of the Equilibrium Constant",
  "skill": "s5",
  "teach": [
   "The size of K describes the equilibrium position for a specified reaction and temperature, not the speed of getting there. For a one-to-one A ⇌ B model, Kc = [B]/[A]. A value of 100 means the equilibrium concentration of B is 100 times that of A; Kc = 0.010 means A is 100 times B. In more complicated reactions, K relates products of concentrations raised to stoichiometric powers. It is not generally a raw product-molecule count divided by a reactant-molecule count, nor a direct percentage converted without a material balance.",
   "A very large K indicates a strongly product-favored equilibrium for the reaction as written under its stated convention. A very small K indicates a strongly reactant-favored equilibrium. Neither means the opposing species must be mathematically absent. For A ⇌ B with only these isomers and total concentration 1.0 M, K = 4 gives B = 4A and A + B = 1.0, so A = 0.20 M and B = 0.80 M. Starting from either side can lead to the same final balance when the same total composition and conditions are used and equilibration is possible. A large K does not remove a kinetic barrier."
  ],
  "boards": [
   [
    "For A ⇌ B: Kc = [B]/[A]",
    "K = 100: [B] is 100 × [A]",
    "K = 0.010: [A] is 100 × [B]",
    "Magnitude describes equilibrium, not speed"
   ],
   [
    "A ⇌ B; total 1.0 M; K = 4",
    "B = 4A; A + B = 1.0",
    "A = 0.20 M; B = 0.80 M",
    "A finite K does not require complete disappearance"
   ]
  ],
  "eqs": [
   "For A ⇌ B: fraction present as B = K/(1 + K) at fixed total A + B",
   "K = 4 gives [B] = 4[A], not [B] = 4 M automatically"
  ],
  "questions": [
   [
    "For A ⇌ B, Kc = 50. At equilibrium, how does [B] compare with [A]?",
    "[B] is 50 times [A]",
    "[A] is 50 times [B]",
    "[B] must be exactly 50 M",
    "The one-to-one equilibrium expression is [B]/[A] = 50, a ratio rather than an absolute concentration."
   ],
   [
    "For A ⇌ B, Kc = 0.020. Which species has the larger equilibrium concentration?",
    "Species A",
    "Species B",
    "They must be equal",
    "Since [B]/[A] = 0.020, the B concentration is only two percent of the A concentration."
   ],
   [
    "What does a very large K generally indicate for the reaction as written?",
    "A strongly product-favored equilibrium",
    "A necessarily instantaneous reaction",
    "An impossible reverse process",
    "K describes equilibrium composition through the mass-action expression; it does not specify a reaction speed."
   ],
   [
    "What does a very small positive K generally indicate for the reaction as written?",
    "A strongly reactant-favored equilibrium",
    "A negative reaction rate",
    "A system with no possible products at all",
    "A small K favors reactants in the equilibrium expression but does not require an exactly zero product concentration."
   ],
   [
    "Does a large equilibrium constant prove a reaction will happen rapidly?",
    "No; kinetics determines the approach rate",
    "Yes; all large-K reactions have zero barriers",
    "Yes; K is the forward rate in M/s",
    "Equilibrium position and kinetic rate are different questions; a favorable reaction can still be slow."
   ],
   [
    "For A ⇌ B with Kc = 3 and [A] + [B] = 1.0 M, what fraction of this total is B at equilibrium?",
    "0.75",
    "0.25",
    "3.0",
    "B = 3A and the total is 4A, so B accounts for 3/4 = 0.75 of the total."
   ],
   [
    "For A ⇌ B with Kc = 0.25 and a total concentration of 1.0 M, what is equilibrium [B]?",
    "0.20 M",
    "0.25 M",
    "0.80 M",
    "B = 0.25A and A + B = 1.0; solving gives A = 0.80 and B = 0.20 M."
   ],
   [
    "Why is K not generally equal to percent conversion for a reaction?",
    "Stoichiometry and initial amounts also affect the material balance",
    "K has no relationship to composition",
    "Every reaction always converts exactly half its reactants",
    "A concentration-product ratio does not by itself specify the fraction converted from a particular initial mixture."
   ],
   [
    "For A + 2B ⇌ C, can Kc always be read as the count of C molecules divided by the total count of A and B molecules?",
    "No; its expression uses [C]/([A][B]^2)",
    "Yes; all stoichiometric powers disappear",
    "Yes; molecule totals are always interchangeable with concentration products",
    "The balanced quotient includes a squared B factor, so a simple count ratio loses the required concentration dependence."
   ],
   [
    "A closed reversible isomer system can reach the same equilibrium from either side when total composition and conditions match. What does that support?",
    "Equilibrium depends on the specified constraints rather than the chosen starting direction",
    "The forward and reverse rates must both be zero",
    "Its equilibrium constant must equal one",
    "The final balance is set by the system constraints and K, while the path and time of approach can differ."
   ]
  ]
 },
 {
  "code": "7.6",
  "name": "Properties of the Equilibrium Constant",
  "skill": "s6",
  "teach": [
   "Changing the written reaction changes its constant. Reversing A ⇌ B turns K = [B]/[A] into 1/K = [A]/[B]. Multiplying every coefficient by two squares the quotient, so the new constant is K^2, not 2K. If A ⇌ B has K = 5, the reverse has K = 0.20 and 2A ⇌ 2B has K = 25. These are algebraic transformations for the same temperature and consistent concentration or pressure convention; they do not represent adding extra material to a vessel.",
   "When equilibria add to a net equation, multiply their constants. For A ⇌ B with K1 = 3 and B ⇌ C with K2 = 4, multiplying [B]/[A] by [C]/[B] cancels B and leaves [C]/[A] = 12. If one equation must first be reversed, invert its constant before multiplication. Raising all coefficients by a fractional factor similarly raises K to that power. The same algebra applies to Q when all quotients are evaluated using the same current composition. Do not borrow Hess’s-law addition of enthalpies and incorrectly add equilibrium constants."
  ],
  "boards": [
   [
    "A ⇌ B: K = 5",
    "B ⇌ A: K = 1/5 = 0.20",
    "2A ⇌ 2B: K = 5^2 = 25",
    "Scaling an equation is not adding material"
   ],
   [
    "A ⇌ B: K1 = 3; B ⇌ C: K2 = 4",
    "Multiply ratios: ([B]/[A])([C]/[B])",
    "Net A ⇌ C has K = 12",
    "Add reactions; multiply their constants"
   ]
  ],
  "eqs": [
   "Reverse: Knew = 1/K; multiply coefficients by n: Knew = K^n",
   "Add reactions: Knet = product of the component constants"
  ],
  "questions": [
   [
    "For A ⇌ B, K = 8. What is K for B ⇌ A at the same temperature?",
    "0.125",
    "-8",
    "8",
    "Reversing the equation inverts the equilibrium expression, so the constant becomes 1/8 = 0.125."
   ],
   [
    "For A ⇌ B, K = 6. What is K for 2A ⇌ 2B?",
    "36",
    "12",
    "3",
    "Doubling every coefficient squares every concentration factor and therefore squares K: 6^2 = 36."
   ],
   [
    "For 2A ⇌ 2B, K = 49. What is K for A ⇌ B?",
    "7",
    "24.5",
    "2401",
    "Halving all coefficients takes the square root of the constant: 49^(1/2) = 7."
   ],
   [
    "A ⇌ B has K1 = 2 and B ⇌ C has K2 = 5. What is K for A ⇌ C?",
    "10",
    "7",
    "0.40",
    "The equations add and B cancels, so their equilibrium constants multiply: 2 × 5 = 10."
   ],
   [
    "A ⇌ B has K1 = 4 and C ⇌ B has K2 = 2. What is K for A ⇌ C?",
    "2",
    "8",
    "6",
    "Reverse the second equation, giving a constant 1/2, then multiply by 4 to obtain 2."
   ],
   [
    "A ⇌ B has K = 3. What is K for 2B ⇌ 2A?",
    "1/9",
    "9",
    "-6",
    "The target reverses and doubles the original reaction, so Knew = (1/3)^2 = 1/9."
   ],
   [
    "Why is doubling all coefficients different from doubling the reactant concentration in a container?",
    "One rewrites the equilibrium expression; the other changes the mixture",
    "Both operations always square the physical equilibrium constant",
    "Neither operation can affect any quotient",
    "Rewriting changes which equation K describes; changing concentration changes Q for the original equation at fixed temperature."
   ],
   [
    "When two equilibrium equations add, should their constants normally be added like enthalpy changes?",
    "No; multiply the constants for the added equations",
    "Yes; constants always add",
    "No; choose only the larger constant",
    "The concentration quotients multiply with cancellation of shared terms, unlike additive enthalpy bookkeeping."
   ],
   [
    "For A ⇌ B, a current mixture has Q = 0.20. What is the reverse quotient using that same composition?",
    "5",
    "-0.20",
    "0.20",
    "Reversing swaps numerator and denominator, so Qreverse = 1/0.20 = 5."
   ],
   [
    "For a reaction, K = 2. All coefficients are tripled. What is the new constant?",
    "8",
    "6",
    "2/3",
    "Tripling every coefficient cubes the quotient and K, giving 2^3 = 8."
   ]
  ],
  "check": [
   "A ⇌ B has K = 5 and B ⇌ C has K = 2 at the same temperature. What is K for C ⇌ A?",
   "0.10",
   "10",
   "7",
   "A ⇌ C has K = 5 × 2 = 10; reversing this net equation gives 1/10 = 0.10."
  ]
 },
 {
  "code": "7.7",
  "name": "Calculating Equilibrium Concentrations",
  "skill": "s7",
  "teach": [
   "An initial-change-equilibrium table combines conservation with the mass-action equation. For A ⇌ B with initial [A] = 0.80 M and [B] = 0, let x M of A convert. Equilibrium concentrations are 0.80 - x and x. If Kc = 3, x/(0.80 - x) = 3, giving x = 0.60 M; thus [A] = 0.20 M and [B] = 0.60 M. Check both the total 0.80 M and the ratio 3. A negative concentration or an x exceeding the available amount is physically invalid.",
   "Use coefficients in the change row. For A ⇌ 2B beginning with [A] = 0.75 M and no B, the change is -x for A and +2x for B. With Kc = 0.50 in the concentration convention, (2x)^2/(0.75 - x) = 0.50. Rearranging gives 4x^2 + 0.50x - 0.375 = 0, whose roots are 0.25 and -0.375 M. The negative root would give negative B and is rejected. The physical root x = 0.25 gives [A] = 0.50 M and [B] = 0.50 M. Check K: 0.50^2/0.50 = 0.50. Even when the species concentrations happen to be equal, the stoichiometric changes are not: A lost 0.25 M while B gained 0.50 M."
  ],
  "boards": [
   [
    "A ⇌ B; initial A 0.80 M, B 0",
    "Change: A -x, B +x",
    "K = 3: x/(0.80 - x) = 3",
    "Equilibrium: A 0.20 M, B 0.60 M"
   ],
   [
    "A ⇌ 2B: change row is -x, +2x",
    "K = 0.50; initial A = 0.75 M; B = 0",
    "x = 0.25 → A 0.50 M and B 0.50 M",
    "Check: 0.50^2/0.50 = 0.50"
   ]
  ],
  "eqs": [
   "[A]eq + [B]eq = 0.80 M; [B]eq/[A]eq = 3",
   "For A ⇌ 2B: [A]eq = [A]0 - x; [B]eq = [B]0 + 2x"
  ],
  "questions": [
   [
    "For A ⇌ B, initial [A] = 0.90 M and [B] = 0, and Kc = 2. What is equilibrium [B]?",
    "0.60 M",
    "0.30 M",
    "1.80 M",
    "Let B = x and A = 0.90 - x. The ratio x/(0.90 - x) = 2 gives x = 0.60 M."
   ],
   [
    "For A ⇌ B, the equilibrium total [A] + [B] is 1.20 M and Kc = 3. What is [A]?",
    "0.30 M",
    "0.90 M",
    "0.40 M",
    "B = 3A and A + B = 1.20, so 4A = 1.20 and A = 0.30 M."
   ],
   [
    "For A ⇌ 2B, a net forward change consumes x M of A at constant volume. What is the change in [B]?",
    "+2x M",
    "+x M",
    "-2x M",
    "Each A consumed produces two B, so the stoichiometric increase in B concentration is twice x."
   ],
   [
    "For A ⇌ 2B, initial [A] = 0.60 M and [B] = 0. At equilibrium [A] = 0.40 M. What is [B]?",
    "0.40 M",
    "0.20 M",
    "0.80 M",
    "A decreases by 0.20 M; the 1:2 stoichiometry produces 0.40 M B."
   ],
   [
    "For A ⇌ 2B, equilibrium [A] = 0.40 M and [B] = 0.40 M. What Kc does this composition satisfy?",
    "0.40",
    "1.0",
    "0.16",
    "The quotient is [B]^2/[A] = 0.40^2/0.40 = 0.40, which is K at equilibrium."
   ],
   [
    "For A + B ⇌ C, initial concentrations are 0.50 M A, 0.40 M B and no C. If equilibrium [C] = 0.10 M, what is [B]?",
    "0.30 M",
    "0.40 M",
    "0.50 M",
    "One B is consumed per C formed, so B falls by 0.10 M from 0.40 to 0.30 M."
   ],
   [
    "An equilibrium calculation gives a root that makes a species concentration negative. What should be done?",
    "Reject that physically invalid root",
    "Report the negative concentration as depletion",
    "Take its absolute value without checking",
    "Concentrations cannot be negative, so a mathematical root outside the material constraints is not a physical solution."
   ],
   [
    "For A ⇌ B with K = 4, a proposed equilibrium has [A] = 0.20 M and [B] = 0.60 M. Does it satisfy K?",
    "No; its quotient is 3",
    "Yes; its quotient is 4",
    "Yes; any positive concentrations work",
    "The ratio 0.60/0.20 is 3, which disagrees with the required equilibrium constant 4."
   ],
   [
    "For A + B ⇌ C at fixed temperature, current Q = 0.25 and K = 1.0. Which direction should a change table initially represent?",
    "Net forward conversion",
    "Net reverse conversion",
    "No net conversion",
    "Q below K indicates the product-to-reactant quotient must rise, so the reaction proceeds net toward products."
   ],
   [
    "Why check an equilibrium solution against both a material balance and the mass-action equation?",
    "A candidate must satisfy both constraints",
    "Either one alone always fixes every concentration",
    "The equations must always give identical numbers for every species",
    "Stoichiometry constrains amounts while K constrains the equilibrium ratio; a valid composition must meet both."
   ],
   [
    "A hypothetical A ⇌ 2B system starts at [A] = 0.90 M and [B] = 0. After equilibration, [A] = 0.50 M at the same volume. How much A concentration was consumed?",
    "0.40 M",
    "0.50 M",
    "0.90 M",
    "The decrease in A is 0.90 - 0.50 = 0.40 M, which defines the forward extent in concentration units."
   ],
   [
    "A hypothetical A ⇌ 2B system starts at [A] = 0.90 M and [B] = 0. After equilibration, [A] = 0.50 M at the same volume. What is equilibrium [B]?",
    "0.80 M",
    "0.40 M",
    "1.00 M",
    "Each A consumed produces two B. The 0.40 M A decrease therefore gives a 0.80 M B increase from zero."
   ],
   [
    "A hypothetical A ⇌ 2B system starts at [A] = 0.90 M and [B] = 0. After equilibration, [A] = 0.50 M at the same volume. What Kc does the resulting equilibrium satisfy?",
    "1.28",
    "0.80",
    "1.60",
    "The B concentration is 0.80 M. Substitution gives Kc = 0.80^2/0.50 = 1.28 in the concentration convention."
   ]
  ],
  "pics": [
   null,
   {
    "t": "setups",
    "title": "A ⇌ 2B: worked example equilibrium (M)",
    "head": "",
    "cols": [
     "A",
     "B"
    ],
    "rows": [
     [
      "Initial",
      "0.75",
      "0"
     ],
     [
      "Change",
      "-0.25",
      "+0.50"
     ],
     [
      "Equilibrium",
      "0.50",
      "0.50"
     ]
    ]
   }
  ],
  "qpics": {
   "7": {
    "t": "board",
    "title": "Check the proposed composition",
    "lines": [
     "A ⇌ B; required K = 4",
     "Proposed [A] = 0.20 M; [B] = 0.60 M",
     "Does this composition satisfy K?"
    ],
    "box": true
   },
   "10": {
    "t": "setups",
    "title": "A ⇌ 2B at constant volume: measured [A]",
    "head": "",
    "cols": [
     "[A] (M)",
     "[B] (M)"
    ],
    "rows": [
     [
      "Initial",
      "0.90",
      "0"
     ],
     [
      "Equilibrium",
      "0.50",
      "Find from balance"
     ]
    ]
   },
   "11": {
    "t": "setups",
    "title": "A ⇌ 2B at constant volume: measured [A]",
    "head": "",
    "cols": [
     "[A] (M)",
     "[B] (M)"
    ],
    "rows": [
     [
      "Initial",
      "0.90",
      "0"
     ],
     [
      "Equilibrium",
      "0.50",
      "Find from balance"
     ]
    ]
   },
   "12": {
    "t": "setups",
    "title": "A ⇌ 2B at constant volume: measured [A]",
    "head": "",
    "cols": [
     "[A] (M)",
     "[B] (M)"
    ],
    "rows": [
     [
      "Initial",
      "0.90",
      "0"
     ],
     [
      "Equilibrium",
      "0.50",
      "Find from balance"
     ]
    ]
   }
  }
 },
 {
  "code": "7.8",
  "name": "Representations of Equilibrium",
  "skill": "s8",
  "teach": [
   "Particle pictures connect a microscopic count to a macroscopic concentration model. For A ⇌ B in one fixed-volume box, the particle ratio NB/NA equals [B]/[A] because the same volume and count-to-mole factor cancel. A drawing with four A particles and eight B particles therefore represents Kc = 2 if it is at equilibrium. This does not mean every equilibrium has twice as many products; the ratio follows from this model and its K. Labels and particle shapes must make each species unambiguous.",
   "For unequal stoichiometric powers, counts alone are not enough without a concentration scale. Suppose a same-volume A ⇌ 2B picture defines one icon as 0.050 M of that species. Four A icons and six B icons then represent [A] = 0.20 M and [B] = 0.30 M, giving Qc = 0.30^2/0.20 = 0.45. The formal ratio 6^2/4 = 9 is not the concentration quotient. Conservation also matters: if an A particle represents two bonded atoms and each B one atom, every A split must add two B while conserving the total atom count. Particle pictures show populations, not stopped molecular motion."
  ],
  "boards": [
   [
    "A ⇌ B in one fixed-volume box",
    "4 A icons and 8 B icons",
    "At equilibrium: Kc = 8/4 = 2",
    "Volume cancels for this one-to-one ratio"
   ],
   [
    "A ⇌ 2B; each icon represents 0.050 M",
    "4 A and 6 B → 0.20 M and 0.30 M",
    "Qc = 0.30^2/0.20 = 0.45",
    "For unequal powers, retain the concentration scale"
   ]
  ],
  "eqs": [
   "For A ⇌ B in one box: [B]/[A] = NB/NA",
   "For A ⇌ 2B with scale c per icon: Qc = c NB^2/NA"
  ],
  "questions": [
   [
    "An equilibrium A ⇌ B picture in one volume shows 3 A icons and 9 B icons. What is Kc?",
    "3",
    "1/3",
    "12",
    "Each icon represents the same particle amount and the volume cancels, so Kc = 9/3 = 3."
   ],
   [
    "Two same-volume A ⇌ B equilibrium pictures show A:B counts 2:6 and 4:12. Can they represent the same Kc?",
    "Yes; both have B/A = 3",
    "No; total icon counts must match",
    "No; the second constant must be twice as large",
    "Both count ratios are 3; different total amounts can still satisfy the same one-to-one equilibrium ratio."
   ],
   [
    "An A ⇌ B picture shows 8 A and 2 B icons in one volume. What is its current Qc?",
    "0.25",
    "4",
    "10",
    "For one-to-one interconversion in one volume, Qc = NB/NA = 2/8 = 0.25."
   ],
   [
    "An A ⇌ 2B picture defines one icon as 0.10 M. It shows 2 A icons and 4 B icons. What is Qc?",
    "0.80",
    "8.0",
    "2.0",
    "The concentrations are 0.20 and 0.40 M, giving Qc = 0.40^2/0.20 = 0.80."
   ],
   [
    "Why is a concentration scale needed to obtain Qc from counts for A ⇌ 2B?",
    "The concentration conversion factor does not fully cancel",
    "The coefficients are irrelevant",
    "Every icon must represent one mole",
    "There are two concentration powers above and one below, leaving one factor of the count-to-concentration scale."
   ],
   [
    "In A ⇌ 2B, each A contains two atoms and each B one. A drawing starts with 5 A and 2 B. If one A splits, what counts conserve atoms?",
    "4 A and 4 B",
    "4 A and 3 B",
    "6 A and 0 B",
    "Splitting one two-atom A makes two B: A falls from 5 to 4 and B rises from 2 to 4, keeping 12 atoms."
   ],
   [
    "A picture of A ⇌ 2B has 4 A dimers and 6 B single atoms. How many atoms are represented?",
    "14",
    "10",
    "20",
    "Four dimers contain eight atoms and six single particles contain six, giving 8 + 6 = 14 atoms."
   ],
   [
    "Does a single particle snapshot at equilibrium show that the pictured particles have stopped reacting?",
    "No; a snapshot does not show ongoing balanced events",
    "Yes; equilibrium forbids molecular change",
    "Yes; symbols on a page prove zero reaction rates",
    "A static representation records composition, while the actual equilibrium system can continue reacting dynamically."
   ],
   [
    "What is necessary before comparing concentration ratios between two particle diagrams?",
    "Know their volume and icon-amount conventions",
    "Assume all boxes have identical volume regardless of labels",
    "Ignore species identities",
    "Counts translate to concentrations only through a volume and amount scale; consistent labels and conventions are essential."
   ],
   [
    "An A ⇌ B model has Kc = 2. Which same-volume particle count is compatible with that equilibrium?",
    "5 A and 10 B",
    "10 A and 5 B",
    "5 A and 5 B",
    "The required ratio is NB/NA = 2, which is satisfied by 10/5 and not by the other count ratios."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Worked particle model: equilibrium A ⇌ B",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      115,
      197
     ],
     "P1": [
      523,
      197
     ],
     "P2": [
      523,
      58
     ],
     "P3": [
      115,
      58
     ],
     "P4": [
      153,
      168
     ],
     "P5": [
      198,
      168
     ],
     "P6": [
      243,
      168
     ],
     "P7": [
      288,
      168
     ],
     "P8": [
      357,
      168
     ],
     "P9": [
      399,
      168
     ],
     "P10": [
      441,
      168
     ],
     "P11": [
      483,
      168
     ],
     "P12": [
      357,
      133
     ],
     "P13": [
      399,
      133
     ],
     "P14": [
      441,
      133
     ],
     "P15": [
      483,
      133
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
       153,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       198,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       243,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       288,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       357,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       399,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       441,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       483,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       357,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       399,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       441,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       483,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       320,
       216
      ],
      "text": "Equal icon amount; one fixed-volume box",
      "col": 0
     },
     {
      "at": [
       320,
       35
      ],
      "text": "A ⇌ B",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 11,
      "col": 1
     },
     {
      "c": "P5",
      "r": 11,
      "col": 1
     },
     {
      "c": "P6",
      "r": 11,
      "col": 1
     },
     {
      "c": "P7",
      "r": 11,
      "col": 1
     },
     {
      "c": "P8",
      "r": 11,
      "col": 2
     },
     {
      "c": "P9",
      "r": 11,
      "col": 2
     },
     {
      "c": "P10",
      "r": 11,
      "col": 2
     },
     {
      "c": "P11",
      "r": 11,
      "col": 2
     },
     {
      "c": "P12",
      "r": 11,
      "col": 2
     },
     {
      "c": "P13",
      "r": 11,
      "col": 2
     },
     {
      "c": "P14",
      "r": 11,
      "col": 2
     },
     {
      "c": "P15",
      "r": 11,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "Worked particle model: A ⇌ 2B",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      115,
      197
     ],
     "P1": [
      523,
      197
     ],
     "P2": [
      523,
      58
     ],
     "P3": [
      115,
      58
     ],
     "P4": [
      153,
      168
     ],
     "P5": [
      198,
      168
     ],
     "P6": [
      243,
      168
     ],
     "P7": [
      288,
      168
     ],
     "P8": [
      357,
      168
     ],
     "P9": [
      399,
      168
     ],
     "P10": [
      441,
      168
     ],
     "P11": [
      483,
      168
     ],
     "P12": [
      357,
      133
     ],
     "P13": [
      399,
      133
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13",
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
       153,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       198,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       243,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       288,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       357,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       399,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       441,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       483,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       357,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       399,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       320,
       216
      ],
      "text": "Each icon = 0.05 M",
      "col": 0
     },
     {
      "at": [
       320,
       35
      ],
      "text": "A ⇌ 2B",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 11,
      "col": 1
     },
     {
      "c": "P5",
      "r": 11,
      "col": 1
     },
     {
      "c": "P6",
      "r": 11,
      "col": 1
     },
     {
      "c": "P7",
      "r": 11,
      "col": 1
     },
     {
      "c": "P8",
      "r": 11,
      "col": 2
     },
     {
      "c": "P9",
      "r": 11,
      "col": 2
     },
     {
      "c": "P10",
      "r": 11,
      "col": 2
     },
     {
      "c": "P11",
      "r": 11,
      "col": 2
     },
     {
      "c": "P12",
      "r": 11,
      "col": 2
     },
     {
      "c": "P13",
      "r": 11,
      "col": 2
     }
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "figure",
    "title": "Count each species in the same volume",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      115,
      197
     ],
     "P1": [
      523,
      197
     ],
     "P2": [
      523,
      58
     ],
     "P3": [
      115,
      58
     ],
     "P4": [
      153,
      168
     ],
     "P5": [
      198,
      168
     ],
     "P6": [
      243,
      168
     ],
     "P7": [
      357,
      168
     ],
     "P8": [
      399,
      168
     ],
     "P9": [
      441,
      168
     ],
     "P10": [
      483,
      168
     ],
     "P11": [
      357,
      133
     ],
     "P12": [
      399,
      133
     ],
     "P13": [
      441,
      133
     ],
     "P14": [
      483,
      133
     ],
     "P15": [
      357,
      98
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
       153,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       198,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       243,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       357,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       399,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       441,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       483,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       357,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       399,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       441,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       483,
       133
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       357,
       98
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       320,
       216
      ],
      "text": "Equal icon amount; one fixed-volume box",
      "col": 0
     },
     {
      "at": [
       320,
       35
      ],
      "text": "A ⇌ B",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 11,
      "col": 1
     },
     {
      "c": "P5",
      "r": 11,
      "col": 1
     },
     {
      "c": "P6",
      "r": 11,
      "col": 1
     },
     {
      "c": "P7",
      "r": 11,
      "col": 2
     },
     {
      "c": "P8",
      "r": 11,
      "col": 2
     },
     {
      "c": "P9",
      "r": 11,
      "col": 2
     },
     {
      "c": "P10",
      "r": 11,
      "col": 2
     },
     {
      "c": "P11",
      "r": 11,
      "col": 2
     },
     {
      "c": "P12",
      "r": 11,
      "col": 2
     },
     {
      "c": "P13",
      "r": 11,
      "col": 2
     },
     {
      "c": "P14",
      "r": 11,
      "col": 2
     },
     {
      "c": "P15",
      "r": 11,
      "col": 2
     }
    ]
   },
   "2": {
    "t": "figure",
    "title": "Count each species in the same volume",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      115,
      197
     ],
     "P1": [
      523,
      197
     ],
     "P2": [
      523,
      58
     ],
     "P3": [
      115,
      58
     ],
     "P4": [
      153,
      168
     ],
     "P5": [
      198,
      168
     ],
     "P6": [
      243,
      168
     ],
     "P7": [
      288,
      168
     ],
     "P8": [
      153,
      133
     ],
     "P9": [
      198,
      133
     ],
     "P10": [
      243,
      133
     ],
     "P11": [
      288,
      133
     ],
     "P12": [
      357,
      168
     ],
     "P13": [
      399,
      168
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13",
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
       153,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       198,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       243,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       288,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       153,
       133
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       198,
       133
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       243,
       133
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       288,
       133
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       357,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       399,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       320,
       216
      ],
      "text": "Equal icon amount; one fixed-volume box",
      "col": 0
     },
     {
      "at": [
       320,
       35
      ],
      "text": "A ⇌ B",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 11,
      "col": 1
     },
     {
      "c": "P5",
      "r": 11,
      "col": 1
     },
     {
      "c": "P6",
      "r": 11,
      "col": 1
     },
     {
      "c": "P7",
      "r": 11,
      "col": 1
     },
     {
      "c": "P8",
      "r": 11,
      "col": 1
     },
     {
      "c": "P9",
      "r": 11,
      "col": 1
     },
     {
      "c": "P10",
      "r": 11,
      "col": 1
     },
     {
      "c": "P11",
      "r": 11,
      "col": 1
     },
     {
      "c": "P12",
      "r": 11,
      "col": 2
     },
     {
      "c": "P13",
      "r": 11,
      "col": 2
     }
    ]
   },
   "3": {
    "t": "figure",
    "title": "Count each species in the same volume",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      115,
      197
     ],
     "P1": [
      523,
      197
     ],
     "P2": [
      523,
      58
     ],
     "P3": [
      115,
      58
     ],
     "P4": [
      153,
      168
     ],
     "P5": [
      198,
      168
     ],
     "P6": [
      357,
      168
     ],
     "P7": [
      399,
      168
     ],
     "P8": [
      441,
      168
     ],
     "P9": [
      483,
      168
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
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
       153,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       198,
       168
      ],
      "text": "A",
      "col": 1
     },
     {
      "at": [
       357,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       399,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       441,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       483,
       168
      ],
      "text": "B",
      "col": 2
     },
     {
      "at": [
       320,
       216
      ],
      "text": "Each icon = 0.1 M",
      "col": 0
     },
     {
      "at": [
       320,
       35
      ],
      "text": "A ⇌ 2B",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 11,
      "col": 1
     },
     {
      "c": "P5",
      "r": 11,
      "col": 1
     },
     {
      "c": "P6",
      "r": 11,
      "col": 2
     },
     {
      "c": "P7",
      "r": 11,
      "col": 2
     },
     {
      "c": "P8",
      "r": 11,
      "col": 2
     },
     {
      "c": "P9",
      "r": 11,
      "col": 2
     }
    ]
   }
  }
 },
 {
  "code": "7.9",
  "name": "Introduction to Le Châtelier’s Principle",
  "skill": "s9",
  "teach": [
   "Le Châtelier’s principle predicts a system’s response to a disturbance: the net change tends to oppose the imposed change as equilibrium is re-established. Adding a reactant to A + B ⇌ C at fixed temperature favors net C formation; removing C also favors net forward reaction. This response does not necessarily undo the disturbance completely. For gases at fixed temperature, compression favors the side with fewer gas particles, while expansion favors the side with more. Count gaseous coefficients rather than solids or liquids. If the gas-mole totals are equal, an ideal uniform compression does not shift the equilibrium.",
   "Temperature changes can change K. For an exothermic forward reaction, warming favors the endothermic reverse direction; for an endothermic forward reaction, warming favors products. A catalyst speeds equilibration without changing K or the equilibrium composition of the same reaction at fixed temperature. Adding inert gas at fixed volume and temperature does not change reactive partial pressures in the ideal-gas model; raising total pressure that way is different from compression. Adding pure solid while that phase is already present does not change its activity. Dilution can favor the side with more dissolved particles in the ideal concentration model, so inspect the actual quotient."
  ],
  "boards": [
   [
    "Add reactant or remove product: net forward response",
    "Compression: favor fewer gas particles",
    "Expansion: favor more gas particles",
    "Equal gas totals: no ideal pressure shift"
   ],
   [
    "Warm an exothermic forward reaction: favor reverse",
    "Catalyst changes rate, not equilibrium K",
    "Inert gas at fixed V and T: no ideal shift",
    "Dilution: use the dissolved-species quotient"
   ]
  ],
  "eqs": [
   "At fixed temperature, a composition or volume change alters Q rather than K",
   "For exothermic forward reaction: raising T favors the reverse direction"
  ],
  "questions": [
   [
    "At fixed temperature, A is added to equilibrium A + B ⇌ C without other changes. What net response is expected?",
    "More C forms",
    "More A must form by net reverse reaction",
    "K must increase permanently",
    "Adding a reactant lowers the product-to-reactant quotient, favoring forward conversion as equilibrium is re-established."
   ],
   [
    "At fixed temperature, C is removed from equilibrium A + B ⇌ C. What net response is expected?",
    "Net forward reaction",
    "Net reverse reaction",
    "No response because C is a product",
    "Removing product lowers Q, so forward reaction replaces some of the removed C while approaching equilibrium."
   ],
   [
    "At fixed temperature, C is added to equilibrium A + B ⇌ C. What net response is expected?",
    "Net reverse reaction",
    "Net forward reaction",
    "A permanent increase in K",
    "Adding product raises Q relative to K, favoring net consumption of C in the reverse direction."
   ],
   [
    "An ideal gas equilibrium A(g) + 2B(g) ⇌ C(g) is compressed at fixed temperature. Which side is favored?",
    "The C side",
    "The A and B side",
    "Neither, because gas coefficients never matter",
    "The right side has one gas particle per reaction amount versus three on the left; compression favors the fewer-gas side."
   ],
   [
    "An ideal A(g) + B(g) ⇌ C(g) + D(g) mixture is uniformly compressed at fixed temperature. What shift is expected?",
    "No equilibrium shift from this compression",
    "Always toward products",
    "Always toward reactants",
    "Both sides have two gas concentration factors, so uniform scaling cancels in Q under the ideal model."
   ],
   [
    "Inert gas is added to an ideal gas equilibrium at fixed volume and temperature. What is expected?",
    "No shift from the inert gas alone",
    "Always a shift toward fewer gas moles",
    "A necessary change in K",
    "Reactive species amounts, volume and temperature are unchanged, so their partial pressures and Q remain unchanged."
   ],
   [
    "A forward reaction is exothermic. What equilibrium response is favored by raising temperature?",
    "The reverse direction",
    "The forward direction always",
    "No possible response to temperature",
    "Warming favors the direction that absorbs heat, which is the reverse of an exothermic forward reaction."
   ],
   [
    "A catalyst is added to a system at equilibrium at fixed temperature without other changes. What happens to the equilibrium composition?",
    "It remains the same",
    "It shifts completely to products",
    "It shifts completely to reactants",
    "Catalysis changes the speed of both directions without changing the equilibrium constant for the same reaction."
   ],
   [
    "More pure solid X is added to X(s) ⇌ Y(g) while X is already present, at fixed volume and temperature. What shift is expected in the ideal model?",
    "No shift from the extra solid alone",
    "Always toward Y",
    "Always toward X",
    "The pure solid activity is unchanged while the phase is present, so adding more does not change Q."
   ],
   [
    "A + B ⇌ C involves dissolved species only. The equilibrium solution is diluted at fixed temperature in the ideal model. Which side is favored?",
    "The A and B side",
    "The C side",
    "Neither for every possible stoichiometry",
    "Dilution favors the side with more dissolved species here; directly, all concentrations halve on doubling volume and Q doubles."
   ],
   [
    "In a hypothetical exothermic A ⇌ B equilibrium, A is colorless and B is blue. Warming changes no optical path or other color effect. What equilibrium color trend is expected?",
    "Less intense blue as [B] decreases",
    "More intense blue because B is favored",
    "No color change is possible",
    "Heating favors the reverse endothermic direction, lowering B concentration and therefore the stated blue contribution."
   ],
   [
    "For an endothermic forward reaction, which direction is favored when temperature rises?",
    "Forward",
    "Reverse",
    "Neither because K cannot depend on temperature",
    "Increasing temperature favors the heat-absorbing direction, which is forward for an endothermic reaction."
   ]
  ],
  "check": [
   "An ideal gas equilibrium 2A(g) ⇌ B(g) is expanded at fixed temperature. Which net direction is favored?",
   "Toward A",
   "Toward B",
   "No shift because coefficients differ",
   "Expansion favors the side with more gas particles; the A side has two compared with one B."
  ]
 },
 {
  "code": "7.10",
  "name": "Reaction Quotient and Le Châtelier’s Principle",
  "skill": "s10",
  "teach": [
   "Comparing Q with K explains why the disturbance causes a particular direction. For A + B ⇌ C initially at equilibrium, doubling [A] alone halves Q. Since Q is then below the unchanged K, the net reaction is forward. Doubling [C] alone doubles Q and favors reverse conversion. If Q = K, there is no net thermodynamic drive for a composition change under those conditions. A reaction that is too slow may approach the new equilibrium only gradually; a direction prediction is not a clock.",
   "Volume and temperature require care. In A ⇌ 2B, halving the volume at fixed temperature doubles each concentration, so Q = [B]^2/[A] doubles and the net response is reverse. For A + B ⇌ C, doubling the solution volume halves all concentrations and doubles Q, also favoring reverse conversion. Temperature changes K; it can change Q too if partial pressures or concentrations change in the specified setup. Compare the new Q with the new K rather than assuming that every disturbance changes only one number. At fixed temperature, neither a catalyst nor extra pure solid already present changes the relevant K."
  ],
  "boards": [
   [
    "A + B ⇌ C initially at equilibrium",
    "Double only [A]: Q becomes K/2 → forward",
    "Double only [C]: Q becomes 2K → reverse",
    "Compare Q with the appropriate K"
   ],
   [
    "A ⇌ 2B: halve volume → Q doubles",
    "A + B ⇌ C: double volume → Q doubles",
    "Temperature changes K; recompute Q as needed",
    "A direction prediction does not give a reaction time"
   ]
  ],
  "eqs": [
   "Q < K: net forward; Q > K: net reverse; Q = K: equilibrium",
   "Uniform concentration factor f changes Q by f^(sum product powers - sum reactant powers)"
  ],
  "questions": [
   [
    "For a reversible reaction, current Q = 0.20 and K = 0.80. Which net direction is favored?",
    "Forward",
    "Reverse",
    "Neither",
    "Q is below K, so net product formation increases the quotient toward its equilibrium value."
   ],
   [
    "For a reversible reaction, current Q = 6 and K = 2. Which net direction is favored?",
    "Reverse",
    "Forward",
    "Neither",
    "Q exceeds K, so net consumption of products lowers the quotient toward the equilibrium value."
   ],
   [
    "For a reversible reaction, current Q = K under the stated conditions. What is the net equilibrium direction?",
    "Neither direction has a net advantage",
    "Only forward events occur",
    "Only reverse events occur",
    "At equilibrium the forward and reverse rates balance, although both types of event can continue."
   ],
   [
    "A + B ⇌ C is initially at equilibrium with Kc = 4. Doubling only [A] gives what immediate Qc?",
    "2",
    "8",
    "4",
    "A occurs to the first power in the denominator, so doubling it halves the original Q from 4 to 2."
   ],
   [
    "A + B ⇌ C is initially at equilibrium with Kc = 3. Doubling only [C] gives what immediate Qc?",
    "6",
    "1.5",
    "3",
    "C is the numerator factor, so doubling C doubles Q from 3 to 6 before the system responds."
   ],
   [
    "A ⇌ 2B is initially at equilibrium with Kc = 0.50. Halving volume at fixed temperature doubles all concentrations. What is the immediate Qc?",
    "1.0",
    "0.25",
    "0.50",
    "The numerator gains a factor four and denominator a factor two, so Q doubles from 0.50 to 1.0."
   ],
   [
    "A + B ⇌ C is initially at equilibrium with Kc = 2. Doubling solution volume at fixed temperature halves all concentrations. What is immediate Qc?",
    "4",
    "1",
    "2",
    "The numerator halves while the denominator becomes one-quarter as large, so Q doubles from 2 to 4."
   ],
   [
    "Which specified change can alter K for the same reaction?",
    "A change in temperature",
    "Adding a reactant at unchanged temperature",
    "Adding a catalyst at unchanged temperature",
    "The equilibrium constant depends on temperature for a specified reaction; changing composition alone changes Q instead."
   ],
   [
    "After a temperature change, a model has new Q = 3 and new K = 6. Which net direction is favored?",
    "Forward",
    "Reverse",
    "Neither because only the old K matters",
    "Compare values under the new conditions: 3 is below 6, so net forward conversion is favored."
   ],
   [
    "Why is it unsafe to claim that temperature changes K but can never change Q?",
    "The setup may also change concentrations or partial pressures",
    "Q and K are always unrelated",
    "Temperature cannot affect any gas pressure",
    "For example, heating a fixed-volume gas changes partial pressures, so Q may change along with the temperature-dependent K."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Compare the quotient with the equilibrium constant",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      151,
      137
     ],
     "P1": [
      281,
      137
     ],
     "P2": [
      489,
      137
     ],
     "P3": [
      359,
      137
     ]
    },
    "hide": "P0P1P2P3",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P2P3",
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
       125,
       168
      ],
      "text": "Q < K",
      "col": 1
     },
     {
      "at": [
       125,
       93
      ],
      "text": "Net forward",
      "col": 1
     },
     {
      "at": [
       320,
       168
      ],
      "text": "Q = K",
      "col": 0
     },
     {
      "at": [
       320,
       93
      ],
      "text": "Equilibrium",
      "col": 0
     },
     {
      "at": [
       515,
       168
      ],
      "text": "Q > K",
      "col": 2
     },
     {
      "at": [
       515,
       93
      ],
      "text": "Net reverse",
      "col": 2
     },
     {
      "at": [
       320,
       42
      ],
      "text": "Responses bring Q toward the current K",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ],
  "qpics": {
   "8": {
    "t": "board",
    "title": "Compare values after the temperature change",
    "lines": [
     "New reaction quotient: Q = 3",
     "New equilibrium constant: K = 6",
     "Which net direction is favored?"
    ],
    "box": true
   }
  }
 },
 {
  "code": "7.11",
  "name": "Introduction to Solubility Equilibria",
  "skill": "s11",
  "teach": [
   "A sparingly soluble salt can reach equilibrium between a pure solid and its dissolved ions. For hypothetical MX(s) ⇌ M+(aq) + X-(aq), Ksp = [M+][X-] in the ideal concentration model. In otherwise pure water, if the molar solubility is s, both ion concentrations are s and Ksp = s^2. With Ksp = 4.0e-8, s = 2.0e-4 mol/L. The pure solid is omitted from the expression. A larger Ksp generally indicates stronger dissolution tendency; comparing molar solubilities directly from Ksp requires matching stoichiometry and conditions.",
   "For hypothetical MX2(s) ⇌ M2+(aq) + 2X-(aq), pure-water dissolution gives [M2+] = s and [X-] = 2s, so Ksp = s(2s)^2 = 4s^3. A value 4.0e-12 then gives s = 1.0e-4 M, not the square root used for a 1:1 salt. Compare an ion product Qsp with Ksp to assess saturation: below Ksp the solution is unsaturated and added solid can dissolve; above Ksp precipitation is thermodynamically favored. When solutions mix, use the diluted concentrations after mixing before evaluating Qsp. These models neglect other reactions and activity corrections."
  ],
  "boards": [
   [
    "MX(s) ⇌ M+(aq) + X-(aq)",
    "In pure water: [M+] = [X-] = s",
    "Ksp = s^2; 4.0e-8 gives s = 2.0e-4 M",
    "Compare salts using their own stoichiometry"
   ],
   [
    "MX2(s) ⇌ M2+(aq) + 2X-(aq)",
    "Ksp = s(2s)^2 = 4s^3",
    "Qsp > Ksp: precipitation favored",
    "Mixing changes concentrations through dilution"
   ]
  ],
  "eqs": [
   "For 1:1 MX in pure water: s^2 = Ksp",
   "For 1:2 MX2 in pure water: 4s^3 = Ksp"
  ],
  "questions": [
   [
    "For hypothetical MX(s) ⇌ M+(aq) + X-(aq), what is Ksp?",
    "[M+][X-]",
    "[M+][X-]/mass(MX)",
    "[M+]+[X-]",
    "The pure solid is omitted, and the two dissolved ion concentrations multiply with their stoichiometric powers."
   ],
   [
    "A hypothetical 1:1 salt MX has Ksp = 9.0e-8. What is its molar solubility in pure water in the ideal model?",
    "3.0e-4 M",
    "9.0e-4 M",
    "4.5e-8 M",
    "Each ion has concentration s, so s^2 = 9.0e-8 and s = 3.0e-4 M."
   ],
   [
    "A hypothetical 1:1 salt has molar solubility 2.0e-3 M in pure water. What is Ksp?",
    "4.0e-6",
    "2.0e-3",
    "4.0e-3",
    "The two ion concentrations each equal 2.0e-3 M, so their product is 4.0e-6 in the stated convention."
   ],
   [
    "For hypothetical MX2(s) ⇌ M2+(aq) + 2X-(aq), what is Ksp in terms of pure-water molar solubility s?",
    "4s^3",
    "s^2",
    "2s^2",
    "The metal concentration is s and anion concentration is 2s, giving s × (2s)^2 = 4s^3."
   ],
   [
    "A hypothetical MX2 salt has Ksp = 4.0e-12. What is its pure-water molar solubility in the ideal model?",
    "1.0e-4 M",
    "2.0e-6 M",
    "4.0e-4 M",
    "For 1:2 dissolution, 4s^3 = 4.0e-12, so s^3 = 1.0e-12 and s = 1.0e-4 M."
   ],
   [
    "Why can two salts with different dissolution stoichiometries not always be ranked in molar solubility by Ksp alone?",
    "Their Ksp-to-solubility equations have different powers and factors",
    "Ksp never relates to solubility",
    "All salts have identical molar solubility",
    "A 1:1 salt has Ksp = s^2, while a 1:2 salt has Ksp = 4s^3, so raw constant sizes are not directly comparable."
   ],
   [
    "For a salt, Qsp is greater than Ksp. What process is thermodynamically favored under the model?",
    "Precipitation",
    "Further net dissolution only",
    "No possible change because Qsp is large",
    "An ion product above Ksp is supersaturated; removing dissolved ions into solid lowers it toward equilibrium."
   ],
   [
    "For a salt, Qsp is less than Ksp and undissolved solid is available. What can occur toward equilibrium?",
    "Net dissolution",
    "Net precipitation necessarily",
    "No ions may enter solution",
    "The unsaturated solution can accept more dissolved ions from the solid until saturation is reached or the solid is exhausted."
   ],
   [
    "Equal volumes containing 0.010 M M+ and 0.020 M X- are mixed with additive volumes. What is their immediate ion product [M+][X-]?",
    "5.0e-5",
    "2.0e-4",
    "1.0e-5",
    "Mixing doubles each original solution volume, giving 0.0050 M and 0.010 M; their product is 5.0e-5."
   ],
   [
    "Why does adding more pure solid not change the saturated ion concentrations at fixed temperature if that solid phase was already present?",
    "The solid activity and Ksp remain unchanged in the model",
    "The extra solid has zero mass",
    "The ion concentrations must double with solid mass",
    "While solid remains present, the same Ksp condition fixes saturation under the specified solution conditions."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Dissolution stoichiometry: hypothetical MX2",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      73,
      193
     ],
     "P1": [
      223,
      193
     ],
     "P2": [
      223,
      60
     ],
     "P3": [
      73,
      60
     ],
     "P4": [
      86,
      131
     ],
     "P5": [
      210,
      131
     ],
     "P6": [
      210,
      73
     ],
     "P7": [
      86,
      73
     ],
     "P8": [
      241,
      129
     ],
     "P9": [
      306,
      129
     ],
     "P10": [
      354,
      129
     ],
     "P11": [
      443,
      129
     ],
     "P12": [
      519,
      129
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
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
      "v": "P4P5P6P7",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       148,
       170
      ],
      "text": "Excess solid",
      "col": 3
     },
     {
      "at": [
       148,
       145
      ],
      "text": "MX2(s)",
      "col": 3
     },
     {
      "at": [
       354,
       129
      ],
      "text": "M2+",
      "col": 1
     },
     {
      "at": [
       443,
       129
      ],
      "text": "X-",
      "col": 2
     },
     {
      "at": [
       519,
       129
      ],
      "text": "X-",
      "col": 2
     },
     {
      "at": [
       442,
       178
      ],
      "text": "One formula unit dissolves",
      "col": 0
     },
     {
      "at": [
       320,
       32
      ],
      "text": "Ion ratio 1:2 → [M2+] = s and [X-] = 2s",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P10",
      "r": 18,
      "col": 1
     },
     {
      "c": "P11",
      "r": 18,
      "col": 2
     },
     {
      "c": "P12",
      "r": 18,
      "col": 2
     }
    ]
   }
  ]
 },
 {
  "code": "7.12",
  "name": "Common-Ion Effect",
  "skill": "s12",
  "teach": [
   "A common ion is already a product of the salt’s dissolution equilibrium. Adding it generally reduces the additional amount of salt that dissolves, while Ksp stays the same at fixed temperature in the ideal model. For MX(s) ⇌ M+ + X-, putting the salt into a solution initially containing c M of X- gives [M+] = s and [X-] = c + s, so Ksp = s(c + s). If s is much smaller than c, approximate s ≈ Ksp/c and check the approximation afterward. Lower solubility does not mean the equilibrium constant has become smaller.",
   "For hypothetical MX with Ksp = 1.0e-8 in 0.10 M X-, the approximation gives s ≈ 1.0e-7 M. This is one-millionth of the initial common-ion concentration, so neglecting s in 0.10 + s is well justified. The pure-water value is 1.0e-4 M, much larger. For MX2 in an X- background, the corresponding expression is Ksp = s(c + 2s)^2, not s(c + s). A common-ion prediction assumes no competing chemistry such as significant complex formation; if other equilibria are important, they must be included. A noncommon spectator ion alone does not enter this simple Ksp expression."
  ],
  "boards": [
   [
    "MX(s) ⇌ M+ + X-; initial [X-] = c",
    "After dissolution: [M+] = s; [X-] = c + s",
    "Ksp = s(c + s)",
    "If s << c, use s ≈ Ksp/c and check"
   ],
   [
    "Ksp = 1.0e-8; initial X- = 0.10 M",
    "s ≈ 1.0e-7 M; s/c = 1.0e-6",
    "Pure-water s = 1.0e-4 M",
    "Same Ksp; less additional salt dissolves"
   ]
  ],
  "eqs": [
   "Common ion reduces solubility without changing Ksp at fixed T in the ideal model",
   "For MX2 in initial X- concentration c: Ksp = s(c + 2s)^2"
  ],
  "questions": [
   [
    "A common ion is added at fixed temperature to a simple saturated salt system without competing chemistry. What generally happens to additional salt solubility?",
    "It decreases",
    "It increases necessarily",
    "It equals the added ion concentration",
    "Increasing a dissolution product suppresses further dissolution through the equilibrium condition."
   ],
   [
    "In the ideal common-ion model at fixed temperature, does adding the common ion change Ksp?",
    "No",
    "Yes; it always lowers Ksp",
    "Yes; it always raises Ksp",
    "The changed composition alters Q and the amount that dissolves; the equilibrium constant for the same salt remains fixed."
   ],
   [
    "For MX(s) ⇌ M+ + X-, initial [X-] is c and no M+ is present. If s mol/L of salt dissolves, what is final [X-]?",
    "c + s",
    "s alone",
    "c - s",
    "The background X- remains and each dissolved formula unit adds one more X-, giving c + s."
   ],
   [
    "For MX(s) ⇌ M+ + X- in initial common-ion concentration c, which expression is exact in the ideal model?",
    "Ksp = s(c + s)",
    "Ksp = sc only in every case",
    "Ksp = (c - s)^2",
    "The metal concentration is s and the anion concentration is c + s; neglecting s requires an additional small-change approximation."
   ],
   [
    "For hypothetical MX, Ksp = 2.0e-8 and initial [X-] = 0.20 M. Assuming s is negligible beside 0.20, what is s?",
    "1.0e-7 M",
    "4.0e-9 M",
    "1.0e-4 M",
    "Use s ≈ Ksp/[X-] = 2.0e-8/0.20 = 1.0e-7 M, then verify that it is small relative to 0.20."
   ],
   [
    "For hypothetical MX, Ksp = 6.0e-9 and initial [X-] = 0.030 M. Assuming a small solubility contribution, what is s?",
    "2.0e-7 M",
    "1.8e-10 M",
    "2.0e-6 M",
    "Dividing 6.0e-9 by 0.030 gives 2.0e-7 M; this is much smaller than the common-ion background."
   ],
   [
    "When is replacing c + s by c in a common-ion calculation justified?",
    "When the calculated s is sufficiently small relative to c",
    "Whenever any common ion is present, regardless of s",
    "Only when c is exactly zero",
    "The approximation neglects the added dissolved contribution; its relative size must be checked against the background."
   ],
   [
    "For MX2(s) ⇌ M2+ + 2X- dissolving by s M into an initial X- concentration c, what is Ksp?",
    "s(c + 2s)^2",
    "s(c + s)",
    "(2s + c)^3",
    "Each dissolved formula unit gives one metal ion and two anions, so [M2+] = s and [X-] = c + 2s."
   ],
   [
    "Why can a simple common-ion prediction fail when a ligand strongly complexes the metal ion?",
    "An additional equilibrium changes the free ion concentration",
    "The salt no longer contains atoms",
    "Ksp must always become zero",
    "Complex formation changes the free dissolved metal concentration entering Ksp, so the coupled equilibrium must be considered."
   ],
   [
    "Which added species is a common ion for the model salt MX(s) ⇌ M+(aq) + X-(aq)?",
    "Ion X-",
    "Unrelated spectator ion Z+",
    "An inert gas that stays outside the solution",
    "X- is already one of the dissolution products; the other listed species is not a common ion in this model."
   ]
  ],
  "check": [
   "Hypothetical MX has Ksp = 3.0e-8 in 0.15 M X-. If s is negligible beside 0.15, what is its approximate molar solubility?",
   "2.0e-7 M",
   "4.5e-9 M",
   "2.0e-4 M",
   "The approximation gives s = Ksp/[X-] = 3.0e-8/0.15 = 2.0e-7 M, far smaller than the background."
  ],
  "pics": [
   null,
   {
    "t": "setups",
    "title": "Hypothetical MX: same Ksp = 1.0e-8, fixed T",
    "head": "",
    "cols": [
     "Initial [X-]",
     "Molar solubility"
    ],
    "rows": [
     [
      "Pure water",
      "0",
      "1.0e-4 M"
     ],
     [
      "Common-ion case",
      "0.10 M",
      "≈ 1.0e-7 M"
     ]
    ]
   }
  ]
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Distinguish equal opposing rates from equal species concentrations. Write a quotient from the balanced equation with correct powers and the appropriate concentration or partial-pressure convention; omit only the pure phases treated as constant. Q describes the current mixture, while K describes equilibrium at the specified temperature. Use conservation and a physical root to solve concentrations, then substitute back. Particle pictures require an amount and volume scale unless it cancels. Explain disturbances by comparing the new Q and K, recognizing temperature, volume and composition conditions. For salts, connect Ksp to dissolution stoichiometry, include mixing dilution and common-ion backgrounds, and check any small-change approximation. Equilibrium position alone does not determine speed.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-chem-equilibrium","subject":"science","level":5,"grade":9,"standard":"AP Chemistry, Unit 7","title":"Equilibrium","goal":"Use dynamic rates, mass action, particle models and material balances to explain equilibrium composition, disturbances and salt solubility.","points":20},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
