/* Original course unit. Review record: docs/review/lessons/high-completion/ap-hug-u6-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "6.1",
  "name": "The Origin and Influences of Urbanization",
  "skill": "s1",
  "teach": [
   "Urbanization is an increase in the share of a population living in urban places; urban population growth is an increase in the urban headcount. They need not move together. In an original country, urban residents rise from 2 million out of 5 million to 3 million out of 6 million: the share rises from 40% to 50%, a 10 percentage-point increase. If urban and total populations instead grow proportionally, the urban share stays unchanged. Definitions of urban places and boundary changes affect comparisons. All numerical datasets and unnamed places in this unit are fictional practice scenarios.",
   "A city’s site consists of characteristics at its location, such as terrain, water supply and harbor conditions. Its situation concerns connections and position relative to other places, such as trade routes and markets. A sheltered harbor is a site advantage; access to an inland trade network is a situation advantage. Food surpluses, specialized work, trade and political organization helped support early urban centers. No single physical advantage guarantees a city’s growth, because technology, institutions and historical decisions also matter.",
   "Migration, natural increase and reclassification can enlarge urban populations. Jobs and services may attract migrants while rural land pressure or conflict may encourage departure, but motives differ across people. Industrial investment, communication networks and government infrastructure can change accessibility and employment. Suburbanization shifts population or activities toward the metropolitan periphery. A highway and housing policy can encourage that shift, while transit investment can concentrate growth near stations. Explain a mechanism and its context rather than assuming that every city follows one inevitable sequence."
  ],
  "boards": [
   [
    "Urban headcount and urban share are different",
    "2/5 = 40%; 3/6 = 50%",
    "Share change: 10 percentage points",
    "Compare consistent urban definitions"
   ],
   [
    "Site: conditions at the location",
    "Situation: position relative to other places",
    "Sheltered harbor: site",
    "Connection to inland markets: situation"
   ],
   [
    "Growth: migration, natural increase, reclassification",
    "Transport and policy change accessibility",
    "Suburbanization shifts activity toward the periphery",
    "A plausible cause still requires evidence"
   ]
  ],
  "eqs": [
   "Urban share = urban population / total population × 100",
   "Local harbor + regional connections → potential port functions",
   "Infrastructure → accessibility → location choices"
  ],
  "questions": [
   [
    "An urban population rises from 4 million of 10 million to 6 million of 15 million. What happens to the urban share?",
    "It stays at 40%",
    "It rises by 20 percentage points",
    "It doubles to 80%",
    "Both urban and total populations increase proportionally, so 4/10 and 6/15 are both 0.40."
   ],
   [
    "A country has 9 million urban residents out of 15 million people. What is its urban share?",
    "60%",
    "40%",
    "150%",
    "The numerator is the urban population and the denominator is total population: 9/15 × 100 = 60%."
   ],
   [
    "A country’s urban share rises from 35% to 50%. What is the change in percentage points?",
    "15 percentage points",
    "42.86 percentage points",
    "85 percentage points",
    "Subtract the two percentages for a percentage-point change: 50 - 35 = 15; relative percentage change is a different measure."
   ],
   [
    "Which observation describes a city’s site?",
    "A deep sheltered harbor at its location",
    "Its travel-time connection to distant markets",
    "Its position halfway between two foreign capitals",
    "Site concerns local physical characteristics; relative connections to other places describe situation."
   ],
   [
    "Which observation describes a city’s situation?",
    "It connects inland producers to overseas shipping routes",
    "Its bedrock is granite",
    "Its ground has a gentle local slope",
    "Situation refers to a place’s relative location and connections, including regional transport and trade links."
   ],
   [
    "How can an agricultural surplus support early urban growth?",
    "It can support people specializing in nonfarm work",
    "It removes the need for exchange",
    "It requires every resident to become a farmer",
    "Food beyond producers’ immediate needs can support specialized occupations and exchange in dense settlements."
   ],
   [
    "Which process can raise a recorded urban population without anyone moving?",
    "Reclassification of a settlement as urban",
    "Rural-to-urban migration",
    "Emigration from the country",
    "Changing a statistical classification or boundary can add recorded urban residents even without physical migration."
   ],
   [
    "Which directly contributes to natural increase within a city?",
    "Births exceeding deaths",
    "Arrivals exceeding departures",
    "Annexation of neighboring territory",
    "Natural increase compares births and deaths, whereas migration and boundary changes are separate components."
   ],
   [
    "A new rail junction lowers travel time to several markets. Which urban growth mechanism is most direct?",
    "Improved accessibility can attract trade and employment",
    "Local bedrock must change",
    "All regional population must move immediately",
    "A transport connection can improve the city’s situation and access to customers, workers and supplies."
   ],
   [
    "Residents and offices relocate from the core to surrounding metropolitan districts. What process is illustrated?",
    "Suburbanization",
    "A change in longitude",
    "Agricultural intensification only",
    "Suburbanization moves people or activities toward the metropolitan periphery, without requiring the whole region to shrink."
   ],
   [
    "Why compare the same urban definitions across two censuses?",
    "A definition change can create an apparent trend",
    "A definition determines everyone’s income",
    "Urban shares cannot change naturally",
    "Boundary and classification differences can produce misleading comparisons unless the analyst accounts for them."
   ],
   [
    "Which explanation best evaluates a city’s growth?",
    "Combine site, connections, institutions and changing conditions",
    "Infer its future solely from latitude",
    "Assume every harbor becomes a major city",
    "Urban growth reflects interacting physical and social processes; one geographic feature is not sufficient evidence."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Urban population share and population totals",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      162,
      165
     ],
     "P1": [
      306,
      165
     ],
     "P2": [
      306,
      135
     ],
     "P3": [
      162,
      135
     ],
     "P4": [
      306,
      165
     ],
     "P5": [
      522,
      165
     ],
     "P6": [
      522,
      135
     ],
     "P7": [
      306,
      135
     ],
     "P8": [
      162,
      90
     ],
     "P9": [
      342,
      90
     ],
     "P10": [
      342,
      60
     ],
     "P11": [
      162,
      60
     ],
     "P12": [
      342,
      90
     ],
     "P13": [
      522,
      90
     ],
     "P14": [
      522,
      60
     ],
     "P15": [
      342,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
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
       215
      ],
      "text": "Fictional country: compare the urban share",
      "col": 0
     },
     {
      "at": [
       91,
       150
      ],
      "text": "Before",
      "col": 0
     },
     {
      "at": [
       342,
       178
      ],
      "text": "2 million urban / 5 million total",
      "col": 0
     },
     {
      "at": [
       91,
       75
      ],
      "text": "After",
      "col": 0
     },
     {
      "at": [
       342,
       103
      ],
      "text": "3 million urban / 6 million total",
      "col": 0
     },
     {
      "at": [
       260,
       33
      ],
      "text": "Urban",
      "col": 1
     },
     {
      "at": [
       412,
       33
      ],
      "text": "Nonurban",
      "col": 2
     }
    ],
    "circles": []
   },
   null,
   null
  ]
 },
 {
  "code": "6.2",
  "name": "Cities Across the World",
  "skill": "s2",
  "teach": [
   "City proper, continuously built-up urban area and metropolitan area measure different spaces. A city proper follows administrative limits; an urban agglomeration emphasizes the connected settlement; a metropolitan area includes a core and economically linked surrounding territory, often identified through commuting. A municipal core of 600,000 can belong to a metropolitan area of 2 million without either count being wrong. Compare the same unit and date before ranking cities. International urban definitions vary, and a functional region can cross several local governments.",
   "A megacity is conventionally an urban agglomeration with about 10 million or more residents. The term metacity is used for a much larger conurbation, commonly over 20 million. These are size descriptions, whereas a world city is identified by its global functions and connections. An original agglomeration of 24 million meets both size descriptions under these conventions; the labels are not mutually exclusive. Many large and rapidly growing urban areas lie in countries described in world-systems analysis as peripheral or semiperipheral, but neither size nor growth alone establishes a country’s economic position.",
   "Suburbanization and decentralization can produce varied forms. An edge city is a substantial concentration of jobs, offices and retail outside the traditional downtown. An exurb is farther beyond established suburbs yet remains linked to the metropolitan economy. A boomburb is a large, rapidly growing incorporated suburban municipality; the research term commonly concerns places over 100,000 that are not the region’s principal city. Sprawl describes extensive, often low-density or discontinuous outward development. It can consume land faster than population grows and increase infrastructure distances; not all suburban development has the same pattern."
  ],
  "boards": [
   [
    "City proper: administrative limits",
    "Urban area: connected built-up settlement",
    "Metropolitan area: core plus functional connections",
    "600,000 core residents can be part of a 2-million metro"
   ],
   [
    "Megacity: around 10 million or more",
    "Metacity: commonly over 20 million",
    "World city: global functions, not a population threshold",
    "24 million can meet both size descriptions"
   ],
   [
    "Edge city: jobs and services outside old downtown",
    "Exurb: farther out, with metropolitan ties",
    "Boomburb: large, rapidly growing suburban municipality",
    "Sprawl: extensive or discontinuous outward development"
   ]
  ],
  "eqs": [
   "Match boundary + date + definition before comparing city sizes",
   "Size category ≠ global economic role",
   "Decentralization can produce multiple suburban employment centers"
  ],
  "questions": [
   [
    "Why can one report list 600,000 people for a city and another list 2 million for its metropolitan area?",
    "They may use different geographic boundaries",
    "At least one must contain an arithmetic error",
    "The smaller number must count only children",
    "Administrative and functional metropolitan boundaries enclose different populations, so the definitions must be checked."
   ],
   [
    "Which boundary most directly captures a core city and surrounding commuting connections?",
    "A metropolitan area",
    "Only the city hall parcel",
    "A latitude line",
    "A metropolitan area describes a functional urban region rather than just one municipality’s administrative limits."
   ],
   [
    "Using a megacity convention of at least 10 million residents, which original agglomeration qualifies?",
    "12 million residents",
    "8 million residents",
    "900,000 residents",
    "The stated numerical convention places 12 million above the threshold; use the same spatial definition in comparisons."
   ],
   [
    "Using metacity for an agglomeration over 20 million, which qualifies?",
    "24 million residents",
    "14 million residents",
    "4 million residents",
    "The supplied convention requires more than 20 million; it is a size label rather than a ranking of global influence."
   ],
   [
    "Can an agglomeration of 24 million be both a megacity and a metacity under these conventions?",
    "Yes; the size categories overlap",
    "No; every category must be mutually exclusive",
    "Only if it is a national capital",
    "The larger size category also meets the smaller threshold, and neither requires capital-city status."
   ],
   [
    "A major office and retail cluster develops outside the old downtown near a highway junction. Which term fits?",
    "Edge city",
    "Agricultural hearth",
    "Central business district of the old core",
    "An edge city concentrates employment and services in a peripheral metropolitan location rather than the traditional center."
   ],
   [
    "A settlement beyond established suburbs has strong commuting links to the metropolis. Which term is most appropriate?",
    "Exurb",
    "Isolated subsistence village by definition",
    "Old downtown CBD",
    "Exurbs lie farther out while remaining functionally connected; distance alone does not make them economically independent."
   ],
   [
    "A nonprincipal incorporated suburban municipality exceeds 100,000 and grows rapidly. Which term fits the stated research convention?",
    "Boomburb",
    "Primate city necessarily",
    "Uninhabited greenbelt",
    "A boomburb is a large, rapidly growing suburban municipality, not necessarily the dominant city in its region."
   ],
   [
    "Population grows 10% while developed land expands 40%. What does this suggest, assuming consistent boundaries?",
    "Land consumption per resident increased",
    "Average density necessarily increased",
    "No outward development occurred",
    "Land grew faster than population, so developed area per resident rose and average density over that footprint fell."
   ],
   [
    "Which is a common infrastructure challenge of dispersed low-density expansion?",
    "More network distance per household can raise service costs",
    "All homes necessarily gain frequent rail service",
    "Water pipes become unnecessary",
    "Dispersed development can require longer roads and utility networks per household, although actual costs depend on local conditions."
   ],
   [
    "Why is a megacity not automatically a top world city?",
    "Population size and global network functions measure different things",
    "World cities have no residents",
    "Every megacity must be politically independent",
    "A city’s financial, service and decision-making connections cannot be inferred solely from its population total."
   ],
   [
    "What is needed to compare urban population growth across countries fairly?",
    "Check dates, spatial units and urban definitions",
    "Treat every municipality as equally sized",
    "Use each country’s largest available count regardless of boundary",
    "Different definitions and reporting units can create apparent differences unrelated to underlying settlement change."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Different city boundaries answer different questions",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      82,
      196
     ],
     "P1": [
      558,
      196
     ],
     "P2": [
      558,
      56
     ],
     "P3": [
      82,
      56
     ],
     "P4": [
      140,
      152
     ],
     "P5": [
      350,
      152
     ],
     "P6": [
      350,
      81
     ],
     "P7": [
      140,
      81
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 2
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
       175
      ],
      "text": "Metro: 2 million residents",
      "col": 2
     },
     {
      "at": [
       246,
       130
      ],
      "text": "City proper:",
      "col": 1
     },
     {
      "at": [
       246,
       102
      ],
      "text": "600,000 residents",
      "col": 1
     },
     {
      "at": [
       456,
       113
      ],
      "text": "Linked territory",
      "col": 2
     },
     {
      "at": [
       320,
       33
      ],
      "text": "Schematic boundaries; areas are not proportional",
      "col": 0
     }
    ],
    "circles": []
   },
   null,
   null
  ]
 },
 {
  "code": "6.3",
  "name": "Cities and Globalization",
  "skill": "s3",
  "teach": [
   "World cities connect production, finance, information and decision making across countries. Headquarters, specialized legal and financial services, international transport and communication networks can give a city influence beyond its population size. Research such as GaWC analyzes connections through advanced producer-service firms; this is one operational measure, not a complete score for every cultural or political function. In an original comparison, a smaller city with many cross-border coordinating offices may have stronger global service connections than a larger city focused mainly on its domestic market.",
   "Global connections affect local landscapes and livelihoods. A headquarters district may draw investment and high-wage jobs while also relying on lower-paid maintenance, transport and service work. International migration can create cultural networks, and a port links urban employment to distant producers and consumers. Interdependence also transmits disruptions: a shipment delay abroad can affect a local factory. Study both directions of connection and distribution of benefits; global integration does not imply that all residents share the same income or opportunities."
  ],
  "boards": [
   [
    "Global functions: finance, coordination and services",
    "Connections matter as well as population size",
    "A network measure captures particular kinds of influence",
    "World-city status is not a welfare score"
   ],
   [
    "Global flows shape local jobs and landscapes",
    "Ports connect producers, consumers and workers",
    "Disruptions can travel through supply networks",
    "Benefits and costs vary within the city"
   ]
  ],
  "eqs": [
   "Cross-border service links → coordination across places",
   "International disruption → local supply delay → local effects"
  ],
  "questions": [
   [
    "Which evidence most directly supports a city’s role as a global service center?",
    "Offices coordinating finance and legal work across many countries",
    "Its total number of street trees alone",
    "Its status as the highest-altitude town",
    "World-city functions concern connections and coordination in international networks, not a single physical characteristic."
   ],
   [
    "Why may a smaller city be more globally connected than a larger one?",
    "Its institutions can coordinate more cross-border activity",
    "Population rank alone fixes every global role",
    "Only the largest city can exchange information",
    "Functional influence depends on the type and extent of networks, which need not follow population rankings."
   ],
   [
    "What do advanced producer-service networks help measure?",
    "Connections supporting firms across cities",
    "Every household’s happiness directly",
    "Only agricultural output within city limits",
    "Financial, legal and related services connect business operations, providing one measure of a city’s global economic integration."
   ],
   [
    "A foreign port closure delays components for a city’s factory. What does this illustrate?",
    "Interdependence across urban production networks",
    "Complete local economic isolation",
    "A change in the city’s latitude",
    "A disruption can propagate through trade connections and affect work far from its point of origin."
   ],
   [
    "Which is a flow connecting cities?",
    "Information exchanged between corporate offices",
    "The fixed outline of a building lot",
    "A bedrock layer in one neighborhood",
    "Flows involve movement or exchange, such as information, people, capital and goods, between places."
   ],
   [
    "What is a limitation of a ranking based only on financial-service connections?",
    "It may omit other cultural or political roles",
    "It automatically measures all urban functions",
    "It removes the need to define indicators",
    "A ranking reflects its selected indicators; other forms of influence may require different data."
   ],
   [
    "How can global investment produce unequal effects within one city?",
    "Jobs and land-value gains can be distributed unevenly",
    "Every resident must receive an identical salary",
    "No local service worker can be affected",
    "Benefits depend on skills, ownership, access and policy, so city-level integration does not ensure equal household outcomes."
   ],
   [
    "Which urban activity most clearly coordinates a multinational production chain?",
    "A headquarters arranging production across several countries",
    "A household growing food solely for itself",
    "A closed local road with no connections",
    "Cross-border coordination links dispersed production decisions through an urban organization."
   ],
   [
    "How can migration strengthen connections between cities?",
    "Migrants can maintain family, business and cultural networks",
    "Migrants automatically erase all former relationships",
    "Only freight can connect places",
    "People maintain social and economic ties across locations, helping transmit information, remittances and cultural practices."
   ],
   [
    "Which conclusion is justified by evidence of extensive global business links?",
    "The city participates strongly in the measured networks",
    "Every resident has a high income",
    "The city must contain over 20 million residents",
    "The evidence supports the measured functional role, while household welfare and population size require separate observations."
   ]
  ],
  "check": [
   "A city has modest population but many firms coordinating international finance and law. Which evidence supports its world-city role?",
   "Its cross-border service connections",
   "Its population alone",
   "Its rainfall total",
   "World-city functions depend on participation in international networks, so the service links are the relevant evidence."
  ]
 },
 {
  "code": "6.4",
  "name": "The Size and Distribution of Cities",
  "skill": "s4",
  "teach": [
   "An urban hierarchy orders places by size or functions, while interdependence connects their services and markets. The rank-size rule is an idealized pattern Pr = P1/r: with a largest city of 6 million, the third-ranked city would have 2 million. It is a comparison model, not a law that every country obeys. A primate city is disproportionately dominant in size and influence within its national system, often far larger than the next city. Capital-city status alone does not establish primacy, and a two-to-one ratio by itself may fit rank-size rather than demonstrate unusual dominance.",
   "A gravity model represents stronger interaction between larger populations and weaker interaction with greater separation, other conditions equal. In one specified model, I = k P1 P2/d². Doubling one population doubles predicted interaction; doubling distance quarters it. Real models may use different distance exponents, travel time or additional variables. A border, language connection, transport link or competing destination can alter observed flows. Do not treat this analogy as a physical force acting on people.",
   "Christaller’s central place theory explains a hierarchy of service centers and their surrounding market areas under simplifying assumptions. Threshold is the minimum demand or customer base needed to support a service; range is the maximum distance consumers are willing to travel for it. Specialized services often need larger markets than everyday purchases. An ideal flat region with evenly distributed customers and similar transport conditions produces regularly spaced centers and hexagonal market areas that cover space without gaps. Mountains, uneven wealth, online services and transport corridors break these assumptions. If a service requires 4,000 regular customers and only 3,000 are reachable, its threshold is not met under the stated model."
  ],
  "boards": [
   [
    "Rank-size: Pr = P1/r",
    "Largest 6 million → third 2 million",
    "Primacy: disproportionate size and influence",
    "A model describes a pattern, not an unavoidable law"
   ],
   [
    "Specified gravity model: I = k P1 P2/d²",
    "Double one population → double I",
    "Double distance → one-quarter I",
    "Borders and transport can alter actual flows"
   ],
   [
    "Threshold: minimum supporting demand",
    "Range: farthest consumers will travel",
    "Ideal market areas can form hexagons",
    "Real terrain and uneven demand change the pattern"
   ]
  ],
  "eqs": [
   "P3 = 6 million / 3 = 2 million",
   "I(new)/I(old) = population factor / distance factor²",
   "Reachable demand 3,000 < threshold 4,000"
  ],
  "questions": [
   [
    "Under Pr = P1/r, the largest city has 8 million people. What is the predicted fourth-ranked population?",
    "2 million",
    "4 million",
    "32 million",
    "Divide the largest population by rank: 8/4 = 2 million under this idealized rule."
   ],
   [
    "Under Pr = P1/r, the largest city has 12 million people. What is the predicted third-ranked population?",
    "4 million",
    "6 million",
    "36 million",
    "The rank-size prediction is 12/3 = 4 million; it is a model value, not an observed census count."
   ],
   [
    "A largest city of 9 million greatly outweighs a second city of 1 million and dominates national institutions. Which interpretation fits?",
    "Urban primacy",
    "An exact rank-size sequence",
    "Equal-sized settlements",
    "Both exceptional size dominance and institutional concentration support primacy, unlike a balanced rank-size pattern."
   ],
   [
    "Does being a national capital automatically make a city primate?",
    "No; relative size and influence must be assessed",
    "Yes; capital is a population threshold",
    "Yes; every capital is the largest city worldwide",
    "Capital status is a political function, whereas primacy is a relationship within a national urban system."
   ],
   [
    "What does an urban hierarchy organize?",
    "Relative size or functions of settlements",
    "Only the ages of individual buildings",
    "The alphabetical order of street names",
    "A hierarchy compares levels in a settlement system, often through population and service functions."
   ],
   [
    "In I = k P1 P2/d² with other values fixed, what happens if one population doubles?",
    "Interaction doubles",
    "Interaction is halved",
    "Interaction is quartered",
    "One population enters linearly in the specified model, so a factor of two produces a factor of two in interaction."
   ],
   [
    "In I = k P1 P2/d² with populations fixed, what happens if distance doubles?",
    "Interaction falls to one-quarter",
    "Interaction doubles",
    "Interaction stays unchanged",
    "The squared denominator becomes four times as large, leaving one-quarter of the original modeled interaction."
   ],
   [
    "In I = k P1 P2/d², both populations double while distance doubles. What happens to predicted interaction?",
    "It stays unchanged",
    "It quadruples",
    "It falls to one-quarter",
    "The numerator grows fourfold and the denominator also grows fourfold, so their ratio is unchanged."
   ],
   [
    "Two equal-population destinations are 20 and 40 km away. In an inverse-square gravity model, how does interaction with the nearer compare?",
    "It is four times as large",
    "It is twice as large",
    "It is one-quarter as large",
    "With equal populations, the ratio is 40²/20² = 4 for the closer destination under the specified model."
   ],
   [
    "What is threshold in central place theory?",
    "Minimum demand needed to support a service",
    "Maximum distance a consumer will travel",
    "The highest building in a market town",
    "Threshold describes a supporting customer base or demand level, whereas range concerns travel distance."
   ],
   [
    "What is range in central place theory?",
    "The maximum distance consumers will travel for a service",
    "The minimum number of workers in a factory",
    "The population rank of the largest city",
    "Range limits the geographic reach of demand; it is distinct from the minimum demand needed for viability."
   ],
   [
    "Which service would typically require a larger market than a daily bread shop?",
    "A highly specialized surgical center",
    "A small everyday convenience kiosk",
    "An identical bread shop with identical costs",
    "Infrequently used specialized services generally need to draw customers from a wider area, with local conditions still relevant."
   ],
   [
    "Why are hexagons useful in the ideal central-place market model?",
    "They cover the surface without gaps or overlaps",
    "They reproduce every actual political boundary",
    "They prove all customers have identical incomes",
    "Hexagons simplify continuous market-area coverage; the shape is a model device, not a universal landscape observation."
   ],
   [
    "Which condition most clearly violates the uniform-plain assumption?",
    "A mountain barrier changes travel routes",
    "Customers are evenly distributed",
    "Transport costs are the same in every direction",
    "A barrier makes access direction-dependent, undermining the isotropic transport assumption of the simple model."
   ],
   [
    "A service needs 5000 regular customers, but only 3500 are within its range. What follows under the stated assumptions?",
    "Its threshold is not met",
    "Its threshold is exceeded by 1500",
    "Its range is necessarily infinite",
    "The available customer base is below the stated supporting minimum, so the model does not predict viability."
   ],
   [
    "Why might actual interaction be lower than a simple gravity prediction?",
    "A restrictive border adds friction",
    "Distance has no possible effect",
    "Every place must follow the equation exactly",
    "Institutional barriers and other omitted variables can change observed flows relative to a simplified model prediction."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Rank-size is a stated comparison model",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      112,
      198
     ],
     "P1": [
      112,
      51
     ],
     "P2": [
      112,
      51
     ],
     "P3": [
      546,
      51
     ],
     "P4": [
      138,
      183
     ],
     "P5": [
      184,
      183
     ],
     "P6": [
      184,
      51
     ],
     "P7": [
      138,
      51
     ],
     "P8": [
      243,
      117
     ],
     "P9": [
      289,
      117
     ],
     "P10": [
      289,
      51
     ],
     "P11": [
      243,
      51
     ],
     "P12": [
      348,
      95
     ],
     "P13": [
      394,
      95
     ],
     "P14": [
      394,
      51
     ],
     "P15": [
      348,
      51
     ],
     "P16": [
      453,
      84
     ],
     "P17": [
      499,
      84
     ],
     "P18": [
      499,
      51
     ],
     "P19": [
      453,
      51
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
      "v": "P2P3",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P4P5P6P7",
      "col": 1
     },
     {
      "v": "P8P9P10P11",
      "col": 1
     },
     {
      "v": "P12P13P14P15",
      "col": 1
     },
     {
      "v": "P16P17P18P19",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional rank-size model: largest city 6 million",
      "col": 0
     },
     {
      "at": [
       84,
       51
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       84,
       95
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       84,
       139
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       84,
       183
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       161,
       193
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       161,
       34
      ],
      "text": "1",
      "col": 0
     },
     {
      "at": [
       266,
       127
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       266,
       34
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       371,
       105
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       371,
       34
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       476,
       94
      ],
      "text": "1.5",
      "col": 0
     },
     {
      "at": [
       476,
       34
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       77,
       199
      ],
      "text": "Millions",
      "col": 0
     },
     {
      "at": [
       550,
       34
      ],
      "text": "Rank",
      "col": 0
     }
    ],
    "circles": []
   },
   null,
   {
    "t": "figure",
    "title": "Central-place market areas under ideal assumptions",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      350,
      126
     ],
     "P1": [
      335,
      100.01923788646684
     ],
     "P2": [
      305,
      100.01923788646684
     ],
     "P3": [
      290,
      126
     ],
     "P4": [
      305,
      151.98076211353316
     ],
     "P5": [
      335,
      151.98076211353316
     ],
     "P6": [
      320,
      126
     ],
     "P7": [
      395,
      100.01923788646684
     ],
     "P8": [
      380,
      74.03847577293368
     ],
     "P9": [
      350,
      74.03847577293368
     ],
     "P10": [
      335,
      100.01923788646684
     ],
     "P11": [
      350,
      126
     ],
     "P12": [
      380,
      126
     ],
     "P13": [
      365,
      100.01923788646684
     ],
     "P14": [
      350,
      74.03847577293368
     ],
     "P15": [
      335,
      48.05771365940052
     ],
     "P16": [
      305,
      48.05771365940052
     ],
     "P17": [
      290,
      74.03847577293368
     ],
     "P18": [
      305,
      100.01923788646684
     ],
     "P19": [
      335,
      100.01923788646684
     ],
     "P20": [
      320,
      74.03847577293368
     ],
     "P21": [
      305,
      100.01923788646684
     ],
     "P22": [
      290,
      74.03847577293368
     ],
     "P23": [
      260,
      74.03847577293368
     ],
     "P24": [
      245,
      100.01923788646684
     ],
     "P25": [
      260,
      126
     ],
     "P26": [
      290,
      126
     ],
     "P27": [
      275,
      100.01923788646684
     ],
     "P28": [
      305,
      151.98076211353316
     ],
     "P29": [
      290,
      126
     ],
     "P30": [
      260,
      126
     ],
     "P31": [
      245,
      151.98076211353316
     ],
     "P32": [
      260,
      177.96152422706632
     ],
     "P33": [
      290,
      177.96152422706632
     ],
     "P34": [
      275,
      151.98076211353316
     ],
     "P35": [
      350,
      177.96152422706632
     ],
     "P36": [
      335,
      151.98076211353316
     ],
     "P37": [
      305,
      151.98076211353316
     ],
     "P38": [
      290,
      177.96152422706632
     ],
     "P39": [
      305,
      203.94228634059948
     ],
     "P40": [
      335,
      203.94228634059948
     ],
     "P41": [
      320,
      177.96152422706632
     ],
     "P42": [
      395,
      151.98076211353313
     ],
     "P43": [
      380,
      125.99999999999997
     ],
     "P44": [
      350,
      125.99999999999997
     ],
     "P45": [
      335,
      151.98076211353313
     ],
     "P46": [
      350,
      177.9615242270663
     ],
     "P47": [
      380,
      177.9615242270663
     ],
     "P48": [
      365,
      151.98076211353313
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3P4P5",
      "col": 1
     },
     {
      "v": "P7P8P9P10P11P12",
      "col": 2
     },
     {
      "v": "P14P15P16P17P18P19",
      "col": 2
     },
     {
      "v": "P21P22P23P24P25P26",
      "col": 2
     },
     {
      "v": "P28P29P30P31P32P33",
      "col": 2
     },
     {
      "v": "P35P36P37P38P39P40",
      "col": 2
     },
     {
      "v": "P42P43P44P45P46P47",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Idealized adjacent market areas; not real boundaries",
      "col": 0
     },
     {
      "at": [
       107,
       156
      ],
      "text": "Uniform",
      "col": 0
     },
     {
      "at": [
       107,
       132
      ],
      "text": "customers",
      "col": 0
     },
     {
      "at": [
       531,
       156
      ],
      "text": "Comparable",
      "col": 0
     },
     {
      "at": [
       531,
       132
      ],
      "text": "access",
      "col": 0
     },
     {
      "at": [
       320,
       31
      ],
      "text": "Dots: service centers; hexagons cover space without gaps",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P6",
      "r": 3,
      "col": 0
     },
     {
      "c": "P13",
      "r": 3,
      "col": 0
     },
     {
      "c": "P20",
      "r": 3,
      "col": 0
     },
     {
      "c": "P27",
      "r": 3,
      "col": 0
     },
     {
      "c": "P34",
      "r": 3,
      "col": 0
     },
     {
      "c": "P41",
      "r": 3,
      "col": 0
     },
     {
      "c": "P48",
      "r": 3,
      "col": 0
     }
    ]
   }
  ]
 },
 {
  "code": "6.5",
  "name": "The Internal Structure of Cities",
  "skill": "s5",
  "teach": [
   "Urban land-use models simplify how activities and households occupy space. The central business district, or CBD, concentrates commercial and coordinating functions in many cities, but it need not sit at the geometric center. In the Burgess concentric-zone model, the CBD is surrounded by a transition zone and successive residential rings, including workers’ housing and outer commuter areas. The model grew from a particular historical setting; do not assume that every present-day city has a poor center or rich edge. Topography, policy, transport and redevelopment can modify the pattern.",
   "Hoyt’s sector model emphasizes wedges of land use extending outward, often along transport corridors. A rail-oriented industrial wedge is a useful example. Harris and Ullman’s multiple-nuclei model instead emphasizes several activity centers, such as a CBD, port, industrial district and outlying business area. Compatible activities can cluster, while incompatible uses may separate. The galactic city model extends the emphasis on dispersed suburban centers connected by roads in an automobile-oriented metropolitan landscape. These models distinguish rings, corridors and nodes rather than providing a perfect map of every place.",
   "Bid-rent theory compares what different users are willing and able to pay for locations. Accessibility can generate revenue or reduce travel costs, but users value it differently. In an original two-use example at distance d km, retail can bid 100 - 10d rent units and housing 60 - 2d. At d = 2, retail offers 80 and housing 56; at d = 6, retail offers 40 and housing 48. They tie at d = 5 with bids of 50. Under the stated competitive assumptions, the higher bidder obtains the site. Zoning, amenities, unequal access to credit and multiple centers can change the outcome; a high bid is not proof of the best social use.",
   "Regional models add histories that early North American diagrams omit. The Griffin-Ford Latin American model combines a central business/market area with a commercial spine and nearby elite residential sector; other areas include more established housing, incremental improvement and peripheral informal settlement. Versions differ, and no region is socially uniform. McGee’s Southeast Asian model emphasizes a historical port and differentiated commercial areas rather than requiring one North American-style CBD; colonial trade, local commerce and mixed uses influence the pattern. These are historical generalizations to compare with evidence, not rankings of cultures.",
   "A commonly taught sub-Saharan African city model distinguishes traditional commercial activity, a colonial-era business district and a market zone, with varied residential and peripheral settlements. Colonial planning and segregation can leave durable spatial effects, alongside older urban traditions and postcolonial change. Africa contains many different urban histories, including cities that do not fit this diagram. To apply any regional model, identify the proposed features, compare an actual map and history, and explain a mismatch. A port-centered pattern, a commercial spine and three different business zones are diagnostic clues under a stated model, not proof that all cities on a continent are identical."
  ],
  "boards": [
   [
    "Burgess: concentric land-use and residential rings",
    "CBD → transition → residential zones",
    "CBD need not be the geometric center",
    "Historical model; test against the city"
   ],
   [
    "Hoyt: sectors following directional growth",
    "Harris–Ullman: several activity nuclei",
    "Galactic city: dispersed suburban centers and roads",
    "Rings, wedges and nodes are different patterns"
   ],
   [
    "Retail bid: 100 - 10d",
    "Housing bid: 60 - 2d",
    "At 2 km: 80 versus 56; retail bids more",
    "At 6 km: 40 versus 48; housing bids more"
   ],
   [
    "Latin American model: CBD, spine and elite sector",
    "Also established and incremental housing zones",
    "Southeast Asian model: port and commercial districts",
    "Neither model describes every city in its region"
   ],
   [
    "African regional model: distinct commercial zones",
    "Traditional, colonial-era and market functions",
    "History and segregation can shape the landscape",
    "Compare a model with local evidence"
   ]
  ],
  "eqs": [
   "Burgess pattern: core surrounded by successive zones",
   "Corridor growth differs from growth around several nodes",
   "100 - 10d = 60 - 2d → d = 5; both bids 50",
   "Commercial spine or port structure → compare regional model features",
   "Model feature + city evidence + limitation → supported interpretation"
  ],
  "questions": [
   [
    "Which model uses successive rings around a CBD to represent urban structure?",
    "Burgess concentric-zone model",
    "Hoyt sector model",
    "A purely multiple-nuclei pattern",
    "The defining geometric feature is a sequence of zones surrounding one center, though actual cities can depart from it."
   ],
   [
    "In the Burgess model, which zone lies immediately outside the CBD?",
    "Zone of transition",
    "Outermost commuter zone",
    "A mandatory airport belt",
    "The transition zone around the core includes changing and mixed uses in the classic model; it is not the farthest commuter ring."
   ],
   [
    "An industrial district extends outward along a rail corridor as a wedge. Which model most directly emphasizes that shape?",
    "Hoyt sector model",
    "Rank-size rule",
    "A population pyramid",
    "The sector model gives direction and transport corridors a central role in the arrangement of urban land use."
   ],
   [
    "A city has distinct centers around its downtown, airport and university. Which model best emphasizes these separate clusters?",
    "Harris and Ullman multiple-nuclei model",
    "A single unbroken ring only",
    "Christaller’s uniform market hexagons only",
    "Several specialized nodes fit a multiple-nuclei interpretation of internal structure rather than a single-center ring pattern."
   ],
   [
    "Which feature is central to the galactic city model?",
    "Dispersed suburban centers connected through a metropolitan road network",
    "One dense CBD containing every job",
    "A region with no commuting links",
    "The model emphasizes dispersed metropolitan development and peripheral activity centers associated with automobile mobility."
   ],
   [
    "What is the CBD in urban geography?",
    "A concentration of central commercial and coordinating functions",
    "Every municipality’s exact geographic midpoint",
    "The entire national agricultural hinterland",
    "CBD describes a functional business concentration, not a requirement that it occupy the geometric center of all boundaries."
   ],
   [
    "Why may related firms cluster in one nucleus?",
    "Proximity can provide shared access and complementary services",
    "All firms require identical land areas",
    "Clustering eliminates every cost",
    "Agglomeration can provide benefits, although congestion, rents and incompatibilities can also limit concentration."
   ],
   [
    "In an original bid model, retail offers 120 - 12d and housing offers 72 - 3d. At d = 2 km, who bids more?",
    "Retail",
    "Housing",
    "They tie",
    "At d = 2, retail offers 96 and housing 66 rent units, so retail has the higher bid under the specified assumptions."
   ],
   [
    "In that model, retail offers 120 - 12d and housing offers 72 - 3d. At d = 6 km, who bids more?",
    "Housing",
    "Retail",
    "They tie",
    "At d = 6, retail offers 48 and housing 54 rent units, so housing bids more at that location."
   ],
   [
    "In an original model, retail bids 90 - 8d and housing bids 50 - 3d. At what d do they tie?",
    "8 km",
    "5 km",
    "28 km",
    "Equating bids gives 40 = 5d, so d = 8 km and both bids are 26 rent units."
   ],
   [
    "What can prevent the highest private bidder from obtaining a parcel under real urban conditions?",
    "A zoning restriction or other institutional constraint",
    "The model’s prediction is legally automatic",
    "Every parcel must have the same permitted use",
    "Bid-rent is a simplified allocation model; actual land markets are shaped by rules, ownership, finance and other constraints."
   ],
   [
    "Which feature is especially associated with the Griffin-Ford Latin American model?",
    "A commercial spine with an adjacent elite residential sector",
    "Only identical rings with no sectors",
    "A mandatory absence of any CBD",
    "The commercial spine and elite sector distinguish this model, alongside other zones with different settlement histories."
   ],
   [
    "In a Latin American model, incremental additions to housing most directly illustrate what?",
    "Gradual improvement or accretion",
    "Instant uniform replacement of the entire city",
    "Proof that all residents lack employment",
    "Incremental construction and service improvements can change neighborhoods over time; the model is not a judgment of residents."
   ],
   [
    "Which feature is emphasized in McGee’s Southeast Asian city model?",
    "A historical port and differentiated commercial districts",
    "A universal isolated inland CBD with no trade",
    "Exactly the same five rings in every city",
    "Historical port trade and multiple kinds of commercial activity are important to this regional model’s explanation."
   ],
   [
    "What does the commonly taught sub-Saharan African model distinguish near its commercial core?",
    "Traditional, colonial-era and market activities",
    "Three identical national capitals",
    "Only one uniform agricultural ring",
    "The model represents different historical commercial functions; it is a generalization with substantial local exceptions."
   ],
   [
    "Why should an African urban model not be applied uniformly to the whole continent?",
    "Cities have diverse precolonial, colonial and later histories",
    "Every city has the same founding date",
    "No African city has ever changed",
    "Regional diversity and local histories limit any single generalized diagram’s explanatory reach."
   ],
   [
    "What is the strongest way to use an urban model in an explanation?",
    "Match its mechanisms to evidence and state important limits",
    "Assume every feature exists because the model draws it",
    "Treat a simplified model as a census map",
    "A defensible explanation identifies relevant processes, compares observed patterns and accounts for deviations."
   ],
   [
    "A harbor and mountain barrier distort otherwise ring-like growth. What does this show?",
    "Site conditions can modify a simplified land-use model",
    "The city cannot be studied geographically",
    "All economic influences disappear",
    "Physical geography can make access and developable land uneven, altering patterns predicted under simplified assumptions."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Burgess concentric-zone structure",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      173,
      123
     ],
     "P1": [
      173,
      123
     ],
     "P2": [
      173,
      123
     ],
     "P3": [
      173,
      123
     ],
     "P4": [
      173,
      123
     ]
    },
    "hide": "P0P1P2P3P4",
    "dots": "",
    "segs": [],
    "polys": [],
    "notes": [
     {
      "at": [
       173,
       123
      ],
      "text": "CBD",
      "col": 0
     },
     {
      "at": [
       429,
       198
      ],
      "text": "Core: business district",
      "col": 0
     },
     {
      "at": [
       429,
       163
      ],
      "text": "Transition zone",
      "col": 1
     },
     {
      "at": [
       429,
       128
      ],
      "text": "Workers’ residential zone",
      "col": 2
     },
     {
      "at": [
       429,
       93
      ],
      "text": "Other residential zones",
      "col": 3
     },
     {
      "at": [
       429,
       58
      ],
      "text": "Outer commuter zone",
      "col": 4
     },
     {
      "at": [
       320,
       31
      ],
      "text": "Burgess: simplified rings; historical context matters",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 85,
      "col": 4
     },
     {
      "c": "P1",
      "r": 68,
      "col": 3
     },
     {
      "c": "P2",
      "r": 51,
      "col": 2
     },
     {
      "c": "P3",
      "r": 34,
      "col": 1
     },
     {
      "c": "P4",
      "r": 17,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Corridors and nuclei are different patterns",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      174,
      125
     ],
     "P1": [
      174,
      125
     ],
     "P2": [
      237,
      162
     ],
     "P3": [
      247,
      117
     ],
     "P4": [
      174,
      125
     ],
     "P5": [
      249,
      141
     ],
     "P6": [
      174,
      125
     ],
     "P7": [
      420,
      157
     ],
     "P8": [
      534,
      161
     ],
     "P9": [
      478,
      78
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [
     {
      "v": "P1P2P3",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       174,
       215
      ],
      "text": "Hoyt sectors",
      "col": 0
     },
     {
      "at": [
       174,
       35
      ],
      "text": "Corridor-oriented wedge",
      "col": 0
     },
     {
      "at": [
       420,
       157
      ],
      "text": "CBD",
      "col": 1
     },
     {
      "at": [
       534,
       161
      ],
      "text": "Port",
      "col": 2
     },
     {
      "at": [
       478,
       78
      ],
      "text": "Node",
      "col": 3
     },
     {
      "at": [
       477,
       215
      ],
      "text": "Multiple nuclei",
      "col": 0
     },
     {
      "at": [
       477,
       35
      ],
      "text": "Separate activity centers",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 73,
      "col": 0
     },
     {
      "c": "P6",
      "r": 11,
      "col": 0
     },
     {
      "c": "P7",
      "r": 24,
      "col": 1
     },
     {
      "c": "P8",
      "r": 24,
      "col": 2
     },
     {
      "c": "P9",
      "r": 25,
      "col": 3
     }
    ]
   },
   {
    "t": "figure",
    "title": "Compare bids at the same distance",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      103,
      200
     ],
     "P1": [
      103,
      49
     ],
     "P2": [
      103,
      49
     ],
     "P3": [
      533,
      49
     ],
     "P4": [
      103,
      189
     ],
     "P5": [
      495,
      77
     ],
     "P6": [
      103,
      133
     ],
     "P7": [
      495,
      110.6
     ],
     "P8": [
      348,
      119
     ],
     "P9": [
      348,
      124
     ],
     "P10": [
      395,
      139
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10",
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P9P10",
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
       103,
       32
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       201,
       32
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       299,
       32
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       397,
       32
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       495,
       32
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       74,
       49
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       74,
       119
      ],
      "text": "50",
      "col": 0
     },
     {
      "at": [
       74,
       189
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       219,
       208
      ],
      "text": "Retail: 100 - 10d",
      "col": 1
     },
     {
      "at": [
       455,
       208
      ],
      "text": "Housing: 60 - 2d",
      "col": 2
     },
     {
      "at": [
       433,
       153
      ],
      "text": "Tie: 5 km",
      "col": 0
     },
     {
      "at": [
       563,
       33
      ],
      "text": "km",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P8",
      "r": 4,
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Regional models highlight different processes",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      104,
      100
     ],
     "P1": [
      230,
      100
     ],
     "P2": [
      230,
      63
     ],
     "P3": [
      104,
      63
     ],
     "P4": [
      154,
      185
     ],
     "P5": [
      180,
      185
     ],
     "P6": [
      180,
      104
     ],
     "P7": [
      154,
      104
     ],
     "P8": [
      192,
      179
     ],
     "P9": [
      277,
      179
     ],
     "P10": [
      277,
      114
     ],
     "P11": [
      192,
      114
     ],
     "P12": [
      389,
      96
     ],
     "P13": [
      560,
      96
     ],
     "P14": [
      560,
      62
     ],
     "P15": [
      389,
      62
     ],
     "P16": [
      390,
      170
     ],
     "P17": [
      463,
      170
     ],
     "P18": [
      463,
      118
     ],
     "P19": [
      390,
      118
     ],
     "P20": [
      480,
      170
     ],
     "P21": [
      559,
      170
     ],
     "P22": [
      559,
      118
     ],
     "P23": [
      480,
      118
     ],
     "P24": [
      423,
      99
     ],
     "P25": [
      423,
      117
     ],
     "P26": [
      519,
      99
     ],
     "P27": [
      519,
      117
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27",
    "dots": "",
    "segs": [
     {
      "v": "P24P25",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P26P27",
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
      "v": "P4P5P6P7",
      "col": 1
     },
     {
      "v": "P8P9P10P11",
      "col": 2
     },
     {
      "v": "P12P13P14P15",
      "col": 1
     },
     {
      "v": "P16P17P18P19",
      "col": 2
     },
     {
      "v": "P20P21P22P23",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       177,
       214
      ],
      "text": "Latin American features",
      "col": 0
     },
     {
      "at": [
       167,
       80
      ],
      "text": "CBD / market",
      "col": 1
     },
     {
      "at": [
       110,
       137
      ],
      "text": "Spine",
      "col": 1
     },
     {
      "at": [
       235,
       158
      ],
      "text": "Elite",
      "col": 2
     },
     {
      "at": [
       235,
       135
      ],
      "text": "sector",
      "col": 2
     },
     {
      "at": [
       470,
       214
      ],
      "text": "Southeast Asian features",
      "col": 0
     },
     {
      "at": [
       474,
       78
      ],
      "text": "Historical port",
      "col": 1
     },
     {
      "at": [
       474,
       191
      ],
      "text": "Commercial districts",
      "col": 0
     },
     {
      "at": [
       320,
       33
      ],
      "text": "Selected model features, not complete maps or universal forms",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Commercial histories and urban structure",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      77,
      184
     ],
     "P1": [
      219,
      184
     ],
     "P2": [
      219,
      118
     ],
     "P3": [
      77,
      118
     ],
     "P4": [
      249,
      184
     ],
     "P5": [
      391,
      184
     ],
     "P6": [
      391,
      118
     ],
     "P7": [
      249,
      118
     ],
     "P8": [
      421,
      184
     ],
     "P9": [
      563,
      184
     ],
     "P10": [
      563,
      118
     ],
     "P11": [
      421,
      118
     ],
     "P12": [
      76,
      100
     ],
     "P13": [
      564,
      100
     ],
     "P14": [
      564,
      54
     ],
     "P15": [
      76,
      54
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
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
     },
     {
      "v": "P8P9P10P11",
      "col": 3
     },
     {
      "v": "P12P13P14P15",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Selected features of a generalized regional model",
      "col": 0
     },
     {
      "at": [
       148,
       163
      ],
      "text": "Traditional",
      "col": 1
     },
     {
      "at": [
       148,
       136
      ],
      "text": "commercial",
      "col": 1
     },
     {
      "at": [
       320,
       163
      ],
      "text": "Colonial-era",
      "col": 2
     },
     {
      "at": [
       320,
       136
      ],
      "text": "business",
      "col": 2
     },
     {
      "at": [
       492,
       163
      ],
      "text": "Market",
      "col": 3
     },
     {
      "at": [
       492,
       136
      ],
      "text": "district",
      "col": 3
     },
     {
      "at": [
       320,
       78
      ],
      "text": "Varied residential and peripheral settlement patterns",
      "col": 0
     },
     {
      "at": [
       320,
       33
      ],
      "text": "Compare with local histories; no single model fits all Africa",
      "col": 0
     }
    ],
    "circles": []
   }
  ]
 },
 {
  "code": "6.6",
  "name": "Density and Land Use",
  "skill": "s6",
  "teach": [
   "Residential density can mean people or dwellings per unit of land, so state the numerator and denominator. Low-rise does not necessarily mean low density: closely spaced row houses may fit many dwellings on a small area. Tall buildings may contain offices or have large open spaces around them. In an original neighborhood, 240 dwellings occupy 12 hectares, giving 20 dwellings per hectare; a second has 180 on 6 hectares, giving 30. Compare equivalent land-area definitions, such as gross neighborhood area versus residential parcels only.",
   "Land-use patterns reflect technology, culture, development cycles and power. Elevators and building methods can support taller construction, while zoning, household preferences and infrastructure influence what is built. Infilling adds development to vacant or underused land within an existing built-up area; redevelopment changes an already developed site. Infill can use existing services and increase density without expanding the urban edge, but those services may need upgrades. Density alone does not reveal crowding inside homes, affordability or quality of life; those require additional measures."
  ],
  "boards": [
   [
    "Density: specify people or dwellings per area",
    "240 dwellings /12 ha = 20 dwellings/ha",
    "180 dwellings /6 ha = 30 dwellings/ha",
    "Building height alone does not establish density"
   ],
   [
    "Infill uses land within an existing built-up area",
    "Technology, zoning and culture shape construction",
    "Existing infrastructure can help, but capacity matters",
    "Density differs from crowding inside a dwelling"
   ]
  ],
  "eqs": [
   "Comparable density = same numerator type / same area definition",
   "Vacant urban parcel → infill → added homes within the footprint"
  ],
  "questions": [
   [
    "A neighborhood has 360 dwellings on 12 hectares. What is dwelling density?",
    "30 dwellings per hectare",
    "4320 dwellings per hectare",
    "0.033 dwellings per hectare",
    "Divide dwellings by land area: 360/12 = 30 dwellings per hectare, using the stated area definition."
   ],
   [
    "Neighborhood A has 200 dwellings on 10 hectares; B has 180 on 6 hectares. Which is denser?",
    "Neighborhood B",
    "Neighborhood A",
    "They have equal density",
    "A has 20 dwellings per hectare and B has 30; the smaller total population or dwelling count need not mean lower density."
   ],
   [
    "Can closely spaced low-rise housing have high dwelling density?",
    "Yes; dwelling count and land area determine density",
    "No; only towers can be dense",
    "No; roof color determines density",
    "Height is only one feature; compact parcels and attached homes can produce many dwellings per hectare."
   ],
   [
    "What is infilling?",
    "Developing vacant or underused land within a built-up area",
    "Extending all growth onto distant farmland",
    "Removing every building from a region",
    "Infill uses spaces within an existing urban footprint rather than requiring outward greenfield expansion."
   ],
   [
    "A former warehouse is converted into apartments. Which process is most directly shown?",
    "Redevelopment or adaptive reuse",
    "Population decline by definition",
    "A new agricultural hearth",
    "Changing the use of an existing developed site reworks the built landscape; it does not itself establish population decline."
   ],
   [
    "Why distinguish gross and net residential density?",
    "Including roads and parks changes the land denominator",
    "The number of dwellings becomes irrelevant",
    "Both measures must always be numerically identical",
    "Different included areas can yield different densities from the same dwelling count, so comparisons require matching definitions."
   ],
   [
    "Which technology helped make routine use of tall residential buildings more feasible?",
    "Reliable elevators",
    "A ban on structural engineering",
    "Eliminating every utility connection",
    "Vertical circulation technology helps people access upper floors and works with structural and service systems."
   ],
   [
    "Why is density not the same as household crowding?",
    "Crowding concerns occupants relative to dwelling space or rooms",
    "Density counts only kitchen appliances",
    "Every dense district must have identical household size",
    "People per hectare and people per room describe different scales and can vary independently."
   ],
   [
    "What should be checked before adding many homes through infill?",
    "Service capacity and access as well as land availability",
    "Only the paint color of new buildings",
    "Whether the entire city can stop using water",
    "Existing infrastructure can be useful but may require upgrades to support added demand and equitable access."
   ],
   [
    "What additional information is needed to judge housing affordability from a density map?",
    "Housing costs and household resources",
    "Only the map’s compass direction",
    "No information; density proves affordability",
    "Density measures spatial concentration, while affordability depends on costs relative to what households can pay."
   ]
  ],
  "check": [
   "A residential district has 280 dwellings on 7 hectares. What is its dwelling density?",
   "40 dwellings per hectare",
   "1960 dwellings per hectare",
   "4 dwellings per hectare",
   "Divide the dwelling count by the matching land area: 280/7 = 40 dwellings per hectare."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Compare dwelling density on equal areas",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      78,
      193
     ],
     "P1": [
      286,
      193
     ],
     "P2": [
      286,
      52
     ],
     "P3": [
      78,
      52
     ],
     "P4": [
      99,
      175
     ],
     "P5": [
      119,
      175
     ],
     "P6": [
      119,
      155
     ],
     "P7": [
      99,
      155
     ],
     "P8": [
      133,
      175
     ],
     "P9": [
      153,
      175
     ],
     "P10": [
      153,
      155
     ],
     "P11": [
      133,
      155
     ],
     "P12": [
      167,
      175
     ],
     "P13": [
      187,
      175
     ],
     "P14": [
      187,
      155
     ],
     "P15": [
      167,
      155
     ],
     "P16": [
      201,
      175
     ],
     "P17": [
      221,
      175
     ],
     "P18": [
      221,
      155
     ],
     "P19": [
      201,
      155
     ],
     "P20": [
      235,
      175
     ],
     "P21": [
      255,
      175
     ],
     "P22": [
      255,
      155
     ],
     "P23": [
      235,
      155
     ],
     "P24": [
      99,
      141
     ],
     "P25": [
      119,
      141
     ],
     "P26": [
      119,
      121
     ],
     "P27": [
      99,
      121
     ],
     "P28": [
      133,
      141
     ],
     "P29": [
      153,
      141
     ],
     "P30": [
      153,
      121
     ],
     "P31": [
      133,
      121
     ],
     "P32": [
      167,
      141
     ],
     "P33": [
      187,
      141
     ],
     "P34": [
      187,
      121
     ],
     "P35": [
      167,
      121
     ],
     "P36": [
      201,
      141
     ],
     "P37": [
      221,
      141
     ],
     "P38": [
      221,
      121
     ],
     "P39": [
      201,
      121
     ],
     "P40": [
      235,
      141
     ],
     "P41": [
      255,
      141
     ],
     "P42": [
      255,
      121
     ],
     "P43": [
      235,
      121
     ],
     "P44": [
      352,
      193
     ],
     "P45": [
      560,
      193
     ],
     "P46": [
      560,
      52
     ],
     "P47": [
      352,
      52
     ],
     "P48": [
      373,
      175
     ],
     "P49": [
      393,
      175
     ],
     "P50": [
      393,
      155
     ],
     "P51": [
      373,
      155
     ],
     "P52": [
      407,
      175
     ],
     "P53": [
      427,
      175
     ],
     "P54": [
      427,
      155
     ],
     "P55": [
      407,
      155
     ],
     "P56": [
      441,
      175
     ],
     "P57": [
      461,
      175
     ],
     "P58": [
      461,
      155
     ],
     "P59": [
      441,
      155
     ],
     "P60": [
      475,
      175
     ],
     "P61": [
      495,
      175
     ],
     "P62": [
      495,
      155
     ],
     "P63": [
      475,
      155
     ],
     "P64": [
      509,
      175
     ],
     "P65": [
      529,
      175
     ],
     "P66": [
      529,
      155
     ],
     "P67": [
      509,
      155
     ],
     "P68": [
      373,
      141
     ],
     "P69": [
      393,
      141
     ],
     "P70": [
      393,
      121
     ],
     "P71": [
      373,
      121
     ],
     "P72": [
      407,
      141
     ],
     "P73": [
      427,
      141
     ],
     "P74": [
      427,
      121
     ],
     "P75": [
      407,
      121
     ],
     "P76": [
      441,
      141
     ],
     "P77": [
      461,
      141
     ],
     "P78": [
      461,
      121
     ],
     "P79": [
      441,
      121
     ],
     "P80": [
      475,
      141
     ],
     "P81": [
      495,
      141
     ],
     "P82": [
      495,
      121
     ],
     "P83": [
      475,
      121
     ],
     "P84": [
      509,
      141
     ],
     "P85": [
      529,
      141
     ],
     "P86": [
      529,
      121
     ],
     "P87": [
      509,
      121
     ],
     "P88": [
      373,
      107
     ],
     "P89": [
      393,
      107
     ],
     "P90": [
      393,
      87
     ],
     "P91": [
      373,
      87
     ],
     "P92": [
      407,
      107
     ],
     "P93": [
      427,
      107
     ],
     "P94": [
      427,
      87
     ],
     "P95": [
      407,
      87
     ],
     "P96": [
      441,
      107
     ],
     "P97": [
      461,
      107
     ],
     "P98": [
      461,
      87
     ],
     "P99": [
      441,
      87
     ],
     "P100": [
      475,
      107
     ],
     "P101": [
      495,
      107
     ],
     "P102": [
      495,
      87
     ],
     "P103": [
      475,
      87
     ],
     "P104": [
      509,
      107
     ],
     "P105": [
      529,
      107
     ],
     "P106": [
      529,
      87
     ],
     "P107": [
      509,
      87
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60P61P62P63P64P65P66P67P68P69P70P71P72P73P74P75P76P77P78P79P80P81P82P83P84P85P86P87P88P89P90P91P92P93P94P95P96P97P98P99P100P101P102P103P104P105P106P107",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 1
     },
     {
      "v": "P8P9P10P11",
      "col": 1
     },
     {
      "v": "P12P13P14P15",
      "col": 1
     },
     {
      "v": "P16P17P18P19",
      "col": 1
     },
     {
      "v": "P20P21P22P23",
      "col": 1
     },
     {
      "v": "P24P25P26P27",
      "col": 1
     },
     {
      "v": "P28P29P30P31",
      "col": 1
     },
     {
      "v": "P32P33P34P35",
      "col": 1
     },
     {
      "v": "P36P37P38P39",
      "col": 1
     },
     {
      "v": "P40P41P42P43",
      "col": 1
     },
     {
      "v": "P44P45P46P47",
      "col": 2
     },
     {
      "v": "P48P49P50P51",
      "col": 2
     },
     {
      "v": "P52P53P54P55",
      "col": 2
     },
     {
      "v": "P56P57P58P59",
      "col": 2
     },
     {
      "v": "P60P61P62P63",
      "col": 2
     },
     {
      "v": "P64P65P66P67",
      "col": 2
     },
     {
      "v": "P68P69P70P71",
      "col": 2
     },
     {
      "v": "P72P73P74P75",
      "col": 2
     },
     {
      "v": "P76P77P78P79",
      "col": 2
     },
     {
      "v": "P80P81P82P83",
      "col": 2
     },
     {
      "v": "P84P85P86P87",
      "col": 2
     },
     {
      "v": "P88P89P90P91",
      "col": 2
     },
     {
      "v": "P92P93P94P95",
      "col": 2
     },
     {
      "v": "P96P97P98P99",
      "col": 2
     },
     {
      "v": "P100P101P102P103",
      "col": 2
     },
     {
      "v": "P104P105P106P107",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Normalized panels: each is 1 hectare; square = 2 homes",
      "col": 0
     },
     {
      "at": [
       182,
       33
      ],
      "text": "20 homes/ha",
      "col": 1
     },
     {
      "at": [
       456,
       33
      ],
      "text": "30 homes/ha",
      "col": 2
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "6.7",
  "name": "Infrastructure",
  "skill": "s7",
  "teach": [
   "Infrastructure includes networks and facilities such as water supply, sewers, drainage, roads, transit, electricity and communications. Their location and reliability influence access to work, education and markets. A bridge can shorten a journey even if straight-line distance does not change. In an original case, a new connection lowers travel time from 50 to 35 minutes, a 15-minute or 30% reduction. Accessibility measures the ability to reach opportunities; mobility concerns movement. Faster movement is not the only way to improve access, because locating a school closer also helps.",
   "Infrastructure decisions distribute benefits, costs and risks. A highway can improve regional connections while dividing a neighborhood or exposing residents to noise and pollution. Water, drainage and sanitation networks can have very unequal coverage. Funding, governance and participation influence what is built and maintained; a line on a map does not show affordability or reliability. Evaluate alternatives with service coverage, travel times, environmental effects and who benefits. If 4,500 of 6,000 households receive reliable piped water, coverage is 75%, leaving 1,500 without that service."
  ],
  "boards": [
   [
    "Infrastructure supports access and services",
    "Accessibility: reaching opportunities",
    "Mobility: movement through space",
    "50 to 35 minutes: 15-minute reduction"
   ],
   [
    "Evaluate reliability, price and coverage",
    "Benefits and burdens vary by neighborhood",
    "4,500/6,000 households = 75% coverage",
    "Maintenance and participation matter"
   ]
  ],
  "eqs": [
   "Travel-time reduction = (50 - 35)/50 × 100 = 30%",
   "Coverage = reliably served households / all households × 100"
  ],
  "questions": [
   [
    "Which is an example of urban infrastructure?",
    "A sewage collection and treatment network",
    "Only a city nickname",
    "Only an individual’s opinion of a park",
    "Infrastructure consists of systems and facilities that support urban activities and services, including sanitation networks."
   ],
   [
    "A bridge reduces a trip from 60 to 45 minutes. What is the percent time reduction?",
    "25%",
    "15%",
    "33.3%",
    "The saving is 15 minutes relative to the original 60: 15/60 × 100 = 25%."
   ],
   [
    "Which change improves accessibility without requiring faster travel?",
    "Opening a needed clinic closer to residents",
    "Moving all services farther away",
    "Increasing fares while routes remain unchanged",
    "A nearby destination can reduce the effort needed to reach an opportunity even if travel speed does not increase."
   ],
   [
    "Of 8000 households, 6000 have the specified reliable water service. What is coverage?",
    "75%",
    "25%",
    "133.3%",
    "Reliable coverage is the served count divided by all households: 6000/8000 = 75%."
   ],
   [
    "In that 8000-household district, 6000 have the specified reliable water service. How many lack it?",
    "2000 households",
    "14000 households",
    "6000 households",
    "Subtract households with the service from the total: 8000 - 6000 = 2000 without the specified service."
   ],
   [
    "Why might a map of pipes overstate effective water access?",
    "Service may be unreliable or unaffordable",
    "Every mapped pipe guarantees continuous access",
    "Household connection costs cannot vary",
    "Physical proximity to a network does not establish a reliable, affordable household supply."
   ],
   [
    "A highway improves regional travel but divides a neighborhood. What should evaluation include?",
    "Both regional benefits and local burdens",
    "Only the regional travel-time saving",
    "Only the highway’s official name",
    "Infrastructure can create benefits at one scale and costs at another, requiring attention to their distribution."
   ],
   [
    "Which evidence best identifies unequal transit access?",
    "Comparable travel times and service availability by neighborhood",
    "Only the total number of buses citywide",
    "Only a photograph of one bus",
    "Spatially disaggregated measures reveal differences hidden by an aggregate fleet count."
   ],
   [
    "Why can maintenance matter as much as construction?",
    "Unmaintained systems can lose reliability or safety",
    "A completed network never deteriorates",
    "Maintenance changes every city boundary",
    "Infrastructure quality depends on continued operation and upkeep rather than merely its presence on an initial map."
   ],
   [
    "What role can public participation play in infrastructure planning?",
    "It can identify local needs and burdens omitted from aggregate data",
    "It guarantees unanimous agreement",
    "It removes all budget constraints",
    "Residents can contribute knowledge about access and impacts, though participation does not automatically resolve every tradeoff."
   ]
  ]
 },
 {
  "code": "6.8",
  "name": "Urban Sustainability",
  "skill": "s8",
  "teach": [
   "Urban sustainability considers environmental impacts, economic viability and access to a livable city over time. Mixed land use places compatible homes, shops and services near one another; walkable design adds safe connected routes. Transit-oriented development concentrates suitable development near useful public transport. New Urbanism emphasizes connected, walkable neighborhoods and a mix of uses and housing forms. A station surrounded by inaccessible parking or expensive housing alone does not guarantee these outcomes. Evaluate actual access, service frequency, housing options and inclusion.",
   "Smart-growth policies often direct development toward existing communities, compact designs and varied transport choices while conserving open space. A greenbelt is protected open land around or between settlements; an urban growth boundary defines where urban expansion is directed or limited. Slow-growth policies deliberately manage the pace or extent of development. These approaches can reduce outward land consumption, but design matters: constrained housing supply or leapfrog development beyond a boundary can undermine goals. Pair conservation with sufficient housing and transport rather than assuming every restriction has identical effects.",
   "Evaluate sustainable design using both benefits and tradeoffs. In an original comparison, a transit-linked district’s car trips fall from 1,000 to 800 per day, a 20% decline. That observation does not prove the project was the sole cause; household composition, fuel prices and other changes may matter. Investment can improve services while rising costs risk excluding lower-income residents or altering local character. Compare outcomes over time and across groups, include resident evidence, and examine housing affordability alongside environmental measures."
  ],
  "boards": [
   [
    "Mixed use: compatible daily activities near one another",
    "Walkability needs safe, connected routes",
    "Transit-oriented development needs useful service",
    "New Urbanism combines design and neighborhood functions"
   ],
   [
    "Smart growth directs development and transport choices",
    "Greenbelts conserve open land",
    "Growth boundaries guide outward expansion",
    "Housing supply and leapfrog effects need attention"
   ],
   [
    "Car trips: 1,000 to 800 means 20% fewer",
    "Before-and-after evidence alone does not prove cause",
    "Affordability and access are part of evaluation",
    "Look for different effects across groups"
   ]
  ],
  "eqs": [
   "Nearby destinations + connected routes → potential access gains",
   "Conserve land + plan housing and transport → evaluate tradeoffs",
   "Trip decline = (1,000 - 800)/1,000 × 100 = 20%"
  ],
  "questions": [
   [
    "Which design is an example of compatible mixed land use?",
    "Homes above shops near daily services",
    "Housing separated from every service by long trips",
    "An isolated industrial hazard placed beside homes without controls",
    "Mixed use combines compatible activities; it does not mean ignoring environmental or safety conflicts."
   ],
   [
    "What is central to transit-oriented development?",
    "Development arranged around accessible useful public transit",
    "Any building next to an unused rail line",
    "A rule requiring every trip to use a private car",
    "Proximity must work with actual service and safe access to provide the mobility and land-use benefits intended."
   ],
   [
    "Which feature most supports walkability?",
    "Connected sidewalks and safe crossings to destinations",
    "Long gaps with no legal crossing",
    "Removing nearby services",
    "Walkability depends on both route conditions and reachable destinations, not only the appearance of a street."
   ],
   [
    "Which combination best matches New Urbanism?",
    "Connected streets, walkable mixed uses and varied housing",
    "Separated activities accessible only by car",
    "A requirement that every district be identical",
    "New Urbanism promotes a related set of neighborhood design principles, not a universal architectural copy."
   ],
   [
    "What is a greenbelt intended to protect?",
    "Open land around or between built-up places",
    "Only the color of building roofs",
    "A mandatory ring of factories",
    "Greenbelts conserve open space and can influence the direction of development around urban settlements."
   ],
   [
    "What does an urban growth boundary principally address?",
    "Where urban expansion is allowed or directed",
    "The exact birth rate of every household",
    "The closing hours of every shop",
    "A growth boundary is a land-use planning device, with effects that depend on accompanying housing and transport policies."
   ],
   [
    "How can leapfrog development weaken a containment policy?",
    "Building jumps beyond the controlled area",
    "All new homes remain inside existing neighborhoods",
    "The policy automatically removes all travel demand",
    "Development beyond a boundary can consume distant land and lengthen trips, shifting rather than eliminating expansion."
   ],
   [
    "Why pair land protection with housing planning?",
    "Constrained supply can create affordability pressures under strong demand",
    "Protecting land makes housing demand disappear",
    "Every greenbelt automatically produces affordable homes",
    "Housing outcomes depend on demand, available capacity and implementation, so conservation alone does not guarantee affordability."
   ],
   [
    "Daily car trips fall from 1200 to 900 after a redesign. What is the relative decline?",
    "25%",
    "300%",
    "75%",
    "The decline is 300 relative to 1200: 300/1200 × 100 = 25%."
   ],
   [
    "Does a decline in car trips after a project prove the project caused the whole change?",
    "No; other changes and a comparison are needed",
    "Yes; timing alone proves sole causation",
    "Yes; household changes cannot affect trips",
    "Before-and-after patterns may be consistent with an effect but can also reflect confounding factors."
   ],
   [
    "Which concern is relevant when an attractive redevelopment raises local rents?",
    "Some residents may face affordability or displacement pressure",
    "Every current renter necessarily gains property wealth",
    "Environmental improvements have no social effects",
    "Rising costs can distribute benefits unevenly, so affordability and resident retention should be considered."
   ],
   [
    "Which evaluation best addresses urban sustainability?",
    "Combine environmental outcomes, access, housing and local evidence",
    "Use only one promotional rendering",
    "Count only expensive buildings",
    "Sustainability spans multiple outcomes and groups; a single aesthetic or price measure cannot establish success."
   ]
  ]
 },
 {
  "code": "6.9",
  "name": "Urban Data",
  "skill": "s9",
  "teach": [
   "Quantitative data measure counts or amounts, such as census population, dwelling density or a survey’s travel-time estimates. Qualitative data describe meanings and experiences, such as interviews about safety or displacement. Both can be systematic, and they answer different questions. A count shows how many households report a service problem; interviews can explain how and when it is experienced. Check the source, date, sample, wording and geographic unit. Census data can still contain measurement limitations, and an interview sample does not automatically represent the whole city.",
   "Rates and consistent boundaries improve comparisons. A district with 300 reported incidents among 30,000 residents has 10 per 1,000; another with 180 among 12,000 has 15 per 1,000. The district with more incidents has the lower per-resident rate. Aggregating small areas can hide unequal conditions, and a neighborhood average does not describe every resident. A map association is not proof of individual behavior or causation. Satellite images may reveal land cover and construction, but household tenure, income or motivations need additional evidence.",
   "Original linked evidence: before a transit change, a district has 10,000 residents and 2,000 daily transit trips; afterward, it has 12,000 residents and 3,000 daily trips. Trips rise 50%, while trips per resident rise from 0.20 to 0.25, a 25% increase. These are trips, not unique riders: one person can make several. Interviews report easier access but cannot by themselves establish the average experience. A comparable district, consistent dates and other contextual data help assess the project’s effect. Keep denominators and alternative explanations visible throughout a multipart argument."
  ],
  "boards": [
   [
    "Quantitative: counts, rates and measured amounts",
    "Qualitative: experiences and meanings",
    "Both require a clear sampling and collection method",
    "Combine methods to address different questions"
   ],
   [
    "300/30,000 × 1,000 = 10 per 1,000",
    "180/12,000 × 1,000 = 15 per 1,000",
    "An area average does not describe every resident",
    "Check boundaries, denominators and uncertainty"
   ],
   [
    "Residents: 10,000 before; 12,000 after",
    "Daily trips: 2,000 before; 3,000 after",
    "Per resident: 0.20 before; 0.25 after",
    "Trip counts do not identify unique riders"
   ]
  ],
  "eqs": [
   "Counts describe magnitude; interviews can explain lived experience",
   "Compare rates using consistent populations and boundaries",
   "Total trips +50%; trips per resident +25%"
  ],
  "questions": [
   [
    "Which is quantitative urban evidence?",
    "The number of households reporting unreliable water",
    "An interview quotation describing anxiety",
    "A resident’s narrative about neighborhood identity",
    "A numerical count is quantitative; accounts of meanings and experiences are qualitative evidence."
   ],
   [
    "Which is qualitative urban evidence?",
    "Interview accounts of how a street redesign feels to residents",
    "The total number of bus stops",
    "Median measured commute time in minutes",
    "Narratives about experience provide qualitative evidence, which can complement numerical access measures."
   ],
   [
    "A district reports 240 incidents among 20000 residents. What is the rate per 1000 residents?",
    "12",
    "120",
    "0.012",
    "Scale the incident-to-population ratio by 1000: 240/20000 × 1000 = 12."
   ],
   [
    "District A has 300 incidents among 30000 residents; B has 180 among 12000. Which has the higher per-resident rate?",
    "District B",
    "District A",
    "They are equal",
    "A has 10 per 1000 and B has 15 per 1000; larger raw counts alone do not establish a higher rate."
   ],
   [
    "Why can combining neighborhoods into one large district hide inequality?",
    "Different local conditions can be averaged together",
    "Averages preserve every individual difference",
    "Larger boundaries eliminate all measurement error",
    "Aggregation can conceal variation, and results can depend on the spatial units used for analysis."
   ],
   [
    "A neighborhood has high average income. What can be concluded about an individual resident from that alone?",
    "Their income cannot be determined from the area average",
    "Every resident has a high income",
    "Every resident has the mean income exactly",
    "Inferring individual characteristics directly from area averages is an ecological inference error."
   ],
   [
    "Original district evidence: residents 10000 before and 12000 after; daily transit trips 2000 before and 3000 after. What is the percentage increase in total trips?",
    "50%",
    "25%",
    "20%",
    "Trips increase by 1000 relative to the original 2000, so the total-trip increase is 50%."
   ],
   [
    "Original district evidence: residents 10000 before and 12000 after; daily transit trips 2000 before and 3000 after. What is the percentage increase in trips per resident?",
    "25%",
    "50%",
    "5%",
    "The rates are 0.20 and 0.25; the relative increase is 0.05/0.20 × 100 = 25%."
   ],
   [
    "Original district evidence: residents 10000 before and 12000 after; daily transit trips 2000 before and 3000 after. What would strengthen a causal claim about the new route?",
    "A comparable district and evidence about other changes",
    "Assuming the entire increase is caused by the route",
    "Treating every trip as a different person",
    "A comparison and contextual controls help distinguish a route effect from population change or other influences."
   ],
   [
    "Why are 3000 daily trips not necessarily 3000 daily riders?",
    "One person can make multiple trips",
    "A trip never involves a person",
    "Every rider must make exactly one trip",
    "A trip count records movements; estimating unique riders requires information that separates repeated trips by the same person."
   ],
   [
    "What can a satellite image alone most directly show?",
    "Patterns of visible built land cover",
    "Every household’s legal tenure",
    "Every resident’s reason for moving",
    "Imagery can reveal physical patterns, while legal status and personal motives generally require other evidence."
   ],
   [
    "Which practice improves an interview study of neighborhood change?",
    "Seek varied relevant perspectives and explain sampling limits",
    "Treat one convenient interview as the whole population",
    "Remove accounts that disagree with the expected conclusion",
    "Transparent sampling and attention to differing experiences make interpretation more credible without claiming automatic representativeness."
   ]
  ],
  "check": [
   "A district records 150 cases among 10000 residents. What is the rate per 1000 residents?",
   "15",
   "150",
   "1.5",
   "The rate is 150/10000 × 1000 = 15 per 1000; a raw count is not the same as a standardized rate."
  ],
  "pics": [
   null,
   null,
   {
    "t": "setups",
    "title": "Fictional district evidence: before and after",
    "head": "Measure",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Residents",
      "10,000",
      "12,000"
     ],
     [
      "Daily transit trips",
      "2,000",
      "3,000"
     ]
    ]
   }
  ],
  "qpics": {
   "6": {
    "t": "setups",
    "title": "Original district evidence: before and after",
    "head": "Measure",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Residents",
      "10,000",
      "12,000"
     ],
     [
      "Daily transit trips",
      "2,000",
      "3,000"
     ]
    ]
   },
   "7": {
    "t": "setups",
    "title": "Original district evidence: before and after",
    "head": "Measure",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Residents",
      "10,000",
      "12,000"
     ],
     [
      "Daily transit trips",
      "2,000",
      "3,000"
     ]
    ]
   },
   "8": {
    "t": "setups",
    "title": "Original district evidence: before and after",
    "head": "Measure",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Residents",
      "10,000",
      "12,000"
     ],
     [
      "Daily transit trips",
      "2,000",
      "3,000"
     ]
    ]
   }
  }
 },
 {
  "code": "6.10",
  "name": "Challenges of Urban Changes",
  "skill": "s10",
  "teach": [
   "Urban change can alter housing, jobs, services and exposure to hazards. Redlining refers to discriminatory denial or restriction of credit or related services to neighborhoods, historically often linked to racial composition. Historical appraisal maps are evidence of discriminatory institutions, not a neutral measure of residents’ worth. Blockbusting is different: real-estate actors exploit fears about incoming protected groups to induce owners to sell or rent. These mechanisms can contribute to segregation and unequal investment, but present conditions require evidence about multiple policies and processes rather than one map alone.",
   "Urban renewal can replace or rehabilitate built areas and infrastructure, sometimes displacing residents and businesses. Gentrification involves reinvestment and an influx of more affluent users into a lower-income neighborhood, often accompanied by higher housing costs and social change. Improvements may benefit some residents while others face displacement or exclusion; not every renovation has the same result. Housing affordability compares costs with resources. In an original household budget, 900 per month for housing out of 3,000 monthly income is 30%. Compare the same time period and stated cost definition; a threshold is an analytic convention, not a complete description of every household’s needs.",
   "Informal or squatter settlements can reflect shortages of affordable formal housing, insecure land tenure and gaps in services. Residents may hold varied rights and contribute substantial labor and local economic activity; informality does not make every resident a criminal or mean all homes are temporary. Responses include service upgrading, tenure protections and resident participation. Inclusionary housing policies require or encourage affordable homes within development, with design-dependent effects. Local food initiatives can improve access in some settings, but cannot alone solve every income or transport constraint.",
   "Environmental injustice concerns unequal exposure to burdens and unequal influence over decisions. A disamenity zone has undesirable conditions such as pollution or hazard exposure; a zone of abandonment has substantial disuse or vacant property. Such areas may overlap with housing insecurity and disinvestment, but the relationship must be investigated with data. Crime rates vary with local conditions and measurement; urbanization does not automatically make every neighborhood more dangerous. Government fragmentation can complicate action when separate municipalities and agencies manage interconnected housing, transport and water systems. Regional coordination can address cross-boundary problems while still requiring accountability and public input."
  ],
  "boards": [
   [
    "Redlining: discriminatory access to credit or services",
    "Blockbusting: exploiting prejudice to induce transactions",
    "Historical sources reveal institutions and biases",
    "A map alone is not a complete causal explanation"
   ],
   [
    "Renewal: rehabilitation or replacement of built areas",
    "Gentrification: reinvestment and socioeconomic change",
    "Benefits and displacement pressures can coexist",
    "900/3,000 monthly income = 30% housing share"
   ],
   [
    "Informal tenure and services vary among settlements",
    "Upgrading can include service and tenure improvements",
    "Inclusionary housing targets affordable units",
    "Resident participation helps identify local needs"
   ],
   [
    "Environmental burdens and decision power can be unequal",
    "Disinvestment can produce abandoned urban areas",
    "Crime claims require comparable evidence",
    "Fragmented governments face shared regional problems"
   ]
  ],
  "eqs": [
   "Discriminatory institutions → unequal opportunities and investment",
   "Housing cost share = same-period housing cost / income × 100",
   "Service upgrading + tenure security + participation → evaluate results",
   "Cross-boundary problem → coordination among responsible bodies"
  ],
  "questions": [
   [
    "A lender excludes neighborhoods because of their racial composition. Which historical urban mechanism is illustrated?",
    "Redlining",
    "Resource partitioning",
    "A neutral measure of every borrower’s creditworthiness",
    "Discriminatory geographic exclusion from credit is redlining; an area’s racial composition is not an individual credit assessment."
   ],
   [
    "An agent uses fears about an incoming racial group to pressure owners to sell. Which practice is illustrated?",
    "Blockbusting",
    "Transit-oriented development",
    "Population sampling",
    "Blockbusting exploits prejudice to induce housing transactions and differs from the credit-exclusion mechanism of redlining."
   ],
   [
    "Why should a historical discriminatory appraisal map be read critically?",
    "Its categories reflect institutions and biases, not residents’ inherent worth",
    "Its labels objectively measure the value of each human being",
    "Its colors alone prove every later neighborhood outcome",
    "Historical sources reveal the practices and perspectives of their creators; broader causal claims need additional evidence."
   ],
   [
    "A lower-income district receives investment and more affluent newcomers while rents rise. Which process is most directly indicated?",
    "Gentrification",
    "Rural depopulation alone",
    "The complete absence of reinvestment",
    "The combination of reinvestment and socioeconomic change fits gentrification, with potential benefits and displacement pressures."
   ],
   [
    "Can neighborhood improvement and displacement pressure occur together?",
    "Yes; benefits and costs can affect different residents",
    "No; every improvement benefits every person equally",
    "No; higher rents always benefit renters",
    "New amenities and investment can coexist with rising costs or exclusion, so outcomes need distributional analysis."
   ],
   [
    "A household pays 1200 per month in housing costs from 4000 monthly income. What share goes to housing?",
    "30%",
    "3%",
    "333%",
    "Use matching monthly amounts: 1200/4000 × 100 = 30%; annual and monthly quantities must not be mixed."
   ],
   [
    "What is urban renewal?",
    "Rehabilitating or replacing parts of the built environment",
    "Only increasing rural crop yields",
    "A guarantee that no one moves",
    "Renewal changes buildings or infrastructure and may have varied consequences, including displacement in some projects."
   ],
   [
    "What is land-tenure security relevant to?",
    "The stability and recognition of rights to occupy or use land",
    "Only the height of a building",
    "Only the number of buses",
    "Tenure concerns rights and security of occupancy or use, which influence risk, services and residents’ ability to improve housing."
   ],
   [
    "Which response addresses informal-settlement needs without assuming uniform circumstances?",
    "Resident-informed service upgrading and tenure measures",
    "Assuming every household has identical rights and income",
    "Treating all housing as uninhabited",
    "Settlement conditions and residents’ rights vary; participation and targeted measures can address actual service and tenure gaps."
   ],
   [
    "What is an inclusionary housing policy intended to increase?",
    "Affordable housing within or linked to development",
    "The exclusion of all low-income households",
    "The number of vacant roads only",
    "Such policies require or encourage affordable units, though outcomes depend on requirements, incentives and market conditions."
   ],
   [
    "A neighborhood receives more pollution exposure and less influence over siting decisions. Which concept is relevant?",
    "Environmental injustice",
    "Perfectly equal distribution of burdens",
    "Rank-size balance",
    "The distribution of environmental burdens and decision-making power is central to an environmental-justice analysis."
   ],
   [
    "Why can fragmented metropolitan government complicate transit planning?",
    "Routes and travel needs cross multiple jurisdictions",
    "Every journey stays within one municipality",
    "Separate agencies automatically share identical priorities",
    "Administrative boundaries may not match functional travel patterns, creating coordination and funding challenges."
   ],
   [
    "Does urban growth by itself prove that crime rates increased?",
    "No; comparable crime and population data are needed",
    "Yes; every growing city has rising crime per resident",
    "Yes; raw population is a crime rate",
    "Crime counts, rates, reporting practices and local circumstances must be examined; growth alone does not establish the trend."
   ],
   [
    "Why might a local food project need to be paired with other policies?",
    "Income, transport and opening hours can still limit access",
    "Growing any food eliminates every access barrier",
    "All households have identical dietary and mobility needs",
    "Food availability is one part of access, which also depends on affordability, transport and other household conditions."
   ]
  ]
 },
 {
  "code": "6.11",
  "name": "Challenges of Urban Sustainability",
  "skill": "s11",
  "teach": [
   "Urban sustainability challenges include outward sprawl, energy demand, waste, sanitation, air and water pollution, and climate risks. Impervious surfaces reduce infiltration and can speed runoff; vegetation, infiltration systems and maintained drainage can help, depending on soils and design. Heat islands arise from features such as heat-storing surfaces, limited vegetation and waste heat. Trees, cool roofs and suitable urban design can reduce some heat exposure but must fit local climate and water conditions. Dense development can shorten trips while still needing careful ventilation, green space and service provision.",
   "Brownfields are previously used properties whose reuse may be complicated by actual or potential contamination. They are not simply any empty lot. Assessment and suitable cleanup can permit new uses and reduce pressure to build on undeveloped land. Greenfields are previously undeveloped sites in the development context. Regional planning can coordinate transport, housing, water and land protection across municipal boundaries. Growth boundaries, farmland protection and infill work through different mechanisms; judge their results rather than their names.",
   "An ecological footprint estimates demand on biologically productive land and water associated with consumption and waste absorption; a carbon footprint concerns greenhouse-gas emissions. Neither is just the area inside city limits. Per-person and total impacts can move differently. In an original city, annual emissions fall from 5 to 4 units per resident while population rises from 100,000 to 130,000: totals rise from 500,000 to 520,000, or 4%. Evaluate the time period, system boundary and distribution of benefits. A cleanup, transit plan or boundary policy should be assessed with measured outcomes, costs and unintended effects."
  ],
  "boards": [
   [
    "Impervious cover can increase rapid runoff",
    "Trees and cool roofs can reduce some heat exposure",
    "Waste and sanitation require maintained systems",
    "Plan for local climate and service conditions"
   ],
   [
    "Brownfield: reuse complicated by possible contamination",
    "Assessment and cleanup must match intended use",
    "Regional planning crosses municipal boundaries",
    "Compare outcomes of infill and land protection"
   ],
   [
    "Per resident: 5 to 4 emissions units each year",
    "Population: 100,000 to 130,000",
    "Total: 500,000 to 520,000 units each year",
    "Per-capita improvement can coexist with total growth"
   ]
  ],
  "eqs": [
   "Surface, drainage and vegetation → runoff and heat effects",
   "Assessment → remediation where needed → suitable reuse",
   "Total impact = per-person impact × population"
  ],
  "questions": [
   [
    "How can more impervious cover affect urban stormwater under otherwise similar conditions?",
    "It can reduce infiltration and increase rapid runoff",
    "It guarantees all rain enters groundwater",
    "It removes the need for drainage",
    "Paved and sealed surfaces limit infiltration, potentially increasing runoff rates and volumes depending on drainage design."
   ],
   [
    "Which intervention can help reduce some urban heat exposure?",
    "Trees and appropriately designed cool roofs",
    "Removing all shade and increasing dark pavement",
    "Assuming air temperature is unrelated to surfaces",
    "Shade, evapotranspiration and reflective surfaces can reduce heating, with effectiveness depending on local conditions."
   ],
   [
    "What makes a property a brownfield in the relevant development context?",
    "Reuse is complicated by actual or possible contamination",
    "Any parcel has brown soil",
    "It has never had a previous use",
    "Brownfield status concerns prior use and contamination-related redevelopment barriers, not literal soil color."
   ],
   [
    "What should precede residential reuse of a potentially contaminated industrial parcel?",
    "Appropriate assessment and remediation for the intended use",
    "Assuming an empty building proves safety",
    "Changing only the parcel’s marketing name",
    "Site conditions must be evaluated and addressed as needed; cosmetic changes do not establish suitability for housing."
   ],
   [
    "How can suitable brownfield reuse support land conservation?",
    "It can accommodate activity on previously developed land",
    "It necessarily expands construction only onto farmland",
    "It makes all other planning unnecessary",
    "Reuse can reduce pressure for new development on undeveloped land while addressing a previously used site."
   ],
   [
    "Why coordinate urban water planning at a regional scale?",
    "Watersheds and service connections can cross municipal borders",
    "Water always stops at a city boundary",
    "Every municipality has an isolated atmosphere",
    "Functional environmental systems often extend beyond individual governments, requiring coordinated analysis and action."
   ],
   [
    "A city cuts per-person emissions from 6 to 5 units while population grows from 100000 to 140000. How do total emissions change?",
    "They rise from 600000 to 700000 units",
    "They fall from 600000 to 500000 units",
    "They stay at 600000 units",
    "Multiply each per-person value by its matching population; population growth more than offsets the lower individual rate."
   ],
   [
    "Using those totals of 600000 and 700000 units, what is the approximate total-emissions increase?",
    "16.7%",
    "20%",
    "83.3%",
    "The increase is 100000 relative to 600000, or about 16.7%; use the original total as the denominator."
   ],
   [
    "What is the ecological footprint intended to estimate?",
    "Biologically productive area associated with consumption and waste demands",
    "Only the paved area within legal city limits",
    "Only the size of residents’ shoes",
    "The measure represents resource and waste-related demand, which can involve places outside the city boundary."
   ],
   [
    "How does a carbon footprint differ from an ecological footprint?",
    "It focuses on greenhouse-gas emissions rather than a productive-area measure",
    "It counts only the number of buildings",
    "It is always identical to municipal land area",
    "These metrics address related impacts using different quantities and system boundaries, so they should not be interchanged."
   ],
   [
    "Which evidence most directly tests whether a farmland-protection policy worked?",
    "Comparable land-conversion trends and spillovers over time",
    "Only the policy’s appealing name",
    "Only one photograph after adoption",
    "Outcomes and displacement of development to other places must be assessed to judge effectiveness."
   ],
   [
    "What is the most defensible claim about a sustainability policy?",
    "Effectiveness depends on measured outcomes and implementation",
    "Every policy with a green label succeeds",
    "One policy eliminates all urban tradeoffs",
    "Policy mechanisms operate in particular contexts and should be evaluated with evidence, costs and distributional effects."
   ]
  ],
  "check": [
   "A city emits 4 units per resident with 150000 residents. What is the total for the same period?",
   "600000 units",
   "37500 units",
   "150004 units",
   "Total emissions equal the per-resident amount times the matching population: 4 × 150000 = 600000 units."
  ],
  "pics": [
   null,
   null,
   {
    "t": "figure",
    "title": "Per-person reductions can coexist with rising totals",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      106,
      190
     ],
     "P1": [
      106,
      54
     ],
     "P2": [
      106,
      54
     ],
     "P3": [
      552,
      54
     ],
     "P4": [
      199,
      174
     ],
     "P5": [
      275,
      174
     ],
     "P6": [
      275,
      54
     ],
     "P7": [
      199,
      54
     ],
     "P8": [
      413,
      178.8
     ],
     "P9": [
      489,
      178.8
     ],
     "P10": [
      489,
      54
     ],
     "P11": [
      413,
      54
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
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
     }
    ],
    "polys": [
     {
      "v": "P4P5P6P7",
      "col": 1
     },
     {
      "v": "P8P9P10P11",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional annual emissions: 5→4 units per person",
      "col": 0
     },
     {
      "at": [
       74,
       54
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       74,
       114
      ],
      "text": "250",
      "col": 0
     },
     {
      "at": [
       74,
       174
      ],
      "text": "500",
      "col": 0
     },
     {
      "at": [
       237,
       184
      ],
      "text": "500",
      "col": 0
     },
     {
      "at": [
       237,
       34
      ],
      "text": "Before",
      "col": 0
     },
     {
      "at": [
       451,
       188.8
      ],
      "text": "520",
      "col": 0
     },
     {
      "at": [
       451,
       34
      ],
      "text": "After",
      "col": 0
     },
     {
      "at": [
       147,
       196
      ],
      "text": "Thousand units",
      "col": 0
     },
     {
      "at": [
       342,
       79
      ],
      "text": "Population: 100,000 → 130,000",
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
steps.push({skill:sections.at(-1).skill,summary:true,say:"Start by defining the urban boundary, time period and scale. Distinguish a growing urban headcount from a rising urban share, and population size from global functions. Choose among rank-size, gravity, central-place and internal land-use models by matching the mechanism to the evidence and stating limits. Track density and access with consistent denominators, and compare private bids with actual planning and institutional constraints. Combine quantitative patterns with residents’ experiences when evaluating urban change. Assess housing costs, tenure, services and unequal burdens alongside environmental outcomes. Check whether a policy improves total and per-person measures, whether effects cross boundaries, and whether alternative causes could explain an observed change.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"geography-h-ap-hug-cities-and-urban-land-use","subject":"geography","level":5,"grade":9,"standard":"AP Human Geography, Unit 6","title":"Cities and Urban Land Use","goal":"Explain urban growth, city networks and land-use patterns, then evaluate housing, infrastructure and sustainability with spatial evidence and clear model assumptions.","points":20,"progression":{"requires":["geography-h-ap-hug-agriculture-and-rural-land-use","geography-h-ap-hug-population-and-migration"],"operations":3,"demand":"Compare spatial models, calculate urban shares and rates, interpret linked data and evaluate distributional and environmental effects."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
