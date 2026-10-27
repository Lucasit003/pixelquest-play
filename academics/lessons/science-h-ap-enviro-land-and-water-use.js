/* Original course unit. Review record: docs/review/lessons/high-completion/ap-enviro-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "5.1",
  "name": "The Tragedy of the Commons",
  "skill": "s1",
  "boardTitle": "The Tragedy of the Commons",
  "teach": [
   "A common-pool resource is difficult to exclude people from using, and one person’s use reduces what remains for others. Fish in an open-access lake illustrate this combination. If each fisher gains from an extra catch while sharing the cost of depleted breeding stock with everyone, individually attractive choices can cause collective damage. The tragedy of the commons describes this incentive problem; it does not mean every shared resource inevitably collapses.",
   "People can govern shared resources with locally appropriate rules, monitoring and enforcement, sometimes through community institutions. Catch limits, seasons or access arrangements can reduce pressure when matched to ecological conditions and followed in practice. Privatization or government control is not the only conceivable solution. In a simplified stock model, next year’s stock equals current stock plus net natural increase minus harvest. Real management also considers uncertainty, habitat and changing reproduction."
  ],
  "eqs": [
   "Private gain from an extra catch + shared depletion cost → an incentive to overharvest",
   "Stock 1000 + net natural increase 150 − harvest 200 = next stock 950"
  ],
  "boards": [
   [
    "One user’s withdrawal leaves less for others",
    "Private benefits can accompany shared costs",
    "Depletion is a risk, not an inevitable outcome"
   ],
   [
    "Agree on rules suited to the resource",
    "Monitor use and enforce limits",
    "Compare removal with renewal and uncertainty"
   ]
  ],
  "questions": [
   [
    "Fishers freely enter a lake, and each extra fish caught leaves fewer for others. Which feature makes this a common-pool resource problem?",
    "Difficult exclusion combined with subtractive use",
    "Every catch increases the fish available to everyone",
    "Each fisher bears every ecological cost alone",
    "The resource is hard to exclude users from, and catches subtract from the shared stock. Benefits and depletion costs can be distributed differently."
   ],
   [
    "A fisher keeps the profit from extra harvest while the loss of breeding fish affects all users. What incentive can result?",
    "Harvesting beyond the collectively sustainable level",
    "Automatic protection of the stock without any coordination",
    "A guarantee that all fish reproduce faster",
    "Private gain and shared costs can encourage overuse. The incentive does not guarantee conservation or faster reproduction."
   ],
   [
    "Residents maintain a shared forest using agreed harvest rules and monitoring. What does their success show?",
    "Shared resources can be managed through effective institutions",
    "All shared resources must inevitably be depleted",
    "Community rules cannot influence resource use",
    "Working rules can change incentives and behavior. Common ownership does not by itself imply inevitable failure."
   ],
   [
    "A lake has 1000 fish and a net natural increase of 150 during a year. Harvest is 200, with no other changes in this simplified model. What stock remains?",
    "950 fish",
    "1350 fish",
    "1050 fish",
    "Add net increase and subtract harvest:1000+150−200=950 fish. Harvest is an outflow from the stock."
   ],
   [
    "A shared aquifer is pumped faster than it is replenished for many years. Which outcome is expected, all else equal?",
    "A decline in stored groundwater",
    "Unlimited growth of the stored groundwater",
    "Conversion of the aquifer into a nonphysical resource",
    "Persistent withdrawal greater than replenishment reduces storage. A renewable flow does not imply an unlimited stored supply."
   ],
   [
    "A catch limit exists on paper but nobody checks compliance. What weakness most directly threatens its effectiveness?",
    "Lack of monitoring and enforcement",
    "The mere presence of a written limit guarantees success",
    "A limit necessarily causes all fish to stop reproducing",
    "Rules must influence actual behavior. Without compliance checks, harvest may exceed the intended limit."
   ],
   [
    "Fishers agree to protect breeding habitat as well as limit catch. Why can both measures matter?",
    "Harvest pressure and habitat quality both affect stock recovery",
    "Catch is the only process that can affect fish abundance",
    "Protecting habitat makes every harvest level sustainable",
    "Stock dynamics depend on ecological production as well as removals. Habitat protection does not justify unlimited catch."
   ],
   [
    "Which statement about solutions to common-pool overuse is most defensible?",
    "Different combinations of community rules, regulation and rights can work in different settings",
    "Only private ownership can ever prevent overuse",
    "All resources require exactly the same management rule",
    "Evidence supports multiple governance arrangements. Their effectiveness depends on the resource, users and implementation."
   ],
   [
    "A manager uses an unusually productive year to set a permanent harvest level. What risk is overlooked?",
    "Renewal can vary, so that harvest may be excessive in poorer years",
    "Natural renewal is identical in every year by definition",
    "An annual harvest can never affect a stock",
    "Ecological renewal changes with conditions. A permanent rule based on one favorable year may overestimate sustainable removals."
   ],
   [
    "Two villages share a lake. A conservation rule applies only to one village, while the other increases harvest. What coordination problem remains?",
    "Total removals may still exceed the lake’s renewal",
    "One village’s rule automatically controls every other user",
    "Conservation depends only on the name of the lake",
    "The stock experiences combined removals. Management must consider all significant users and ecological limits."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Common-pool withdrawals affect other users",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      226,
      179
     ],
     "P1": [
      414,
      179
     ],
     "P2": [
      414,
      89
     ],
     "P3": [
      226,
      89
     ],
     "P4": [
      235,
      162
     ],
     "P5": [
      151,
      190
     ],
     "P6": [
      405,
      162
     ],
     "P7": [
      489,
      190
     ],
     "P8": [
      235,
      100
     ],
     "P9": [
      151,
      65
     ],
     "P10": [
      405,
      100
     ],
     "P11": [
      489,
      65
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P6P7",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P8P9",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       320,
       143
      ],
      "text": "Shared fish stock",
      "col": 0
     },
     {
      "at": [
       320,
       117
      ],
      "text": "Finite at a given time",
      "col": 0
     },
     {
      "at": [
       129,
       203
      ],
      "text": "User A",
      "col": 2
     },
     {
      "at": [
       511,
       203
      ],
      "text": "User B",
      "col": 2
     },
     {
      "at": [
       129,
       49
      ],
      "text": "User C",
      "col": 2
     },
     {
      "at": [
       511,
       49
      ],
      "text": "User D",
      "col": 2
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "A simplified annual stock balance",
    "head": "Term",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Starting stock",
      "1000 fish"
     ],
     [
      "Net natural increase",
      "+150 fish"
     ],
     [
      "Harvest",
      "−200 fish"
     ],
     [
      "Ending stock",
      "950 fish"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fishers freely enter a lake, and each extra fish caught leaves fewer for others. Which feature makes this a common-pool resource problem?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fisher keeps the profit from extra harvest while the loss of breeding fish affects all users. What incentive can result?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Residents maintain a shared forest using agreed harvest rules and monitoring. What does their success show?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A lake has 1000 fish and a net natural increase of 150 during a year. Harvest is 200, with no other changes in this simplified model. What stock remains?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A shared aquifer is pumped faster than it is replenished for many years. Which outcome is expected, all else equal?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A catch limit exists on paper but nobody checks compliance. What weakness most directly threatens its effectiveness?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fishers agree to protect breeding habitat as well as limit catch. Why can both measures matter?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement about solutions to common-pool overuse is most defensible?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A manager uses an unusually productive year to set a permanent harvest level. What risk is overlooked?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two villages share a lake. A conservation rule applies only to one village, while the other increases harvest. What coordination problem remains?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.2",
  "name": "Clearcutting",
  "skill": "s2",
  "boardTitle": "Clearcutting",
  "teach": [
   "Clearcutting removes all or most trees from a defined stand in one harvest operation. It can make timber extraction efficient and create open conditions for regeneration of light-demanding species. Removing canopy and disturbing soil can also increase erosion, runoff and stream warming, especially where roads, steep slopes or missing stream buffers expose soil and water. Effects depend on site, scale, weather and management; cutting trees does not guarantee the same flood outcome in every watershed.",
   "Trees store carbon in organic matter after taking up atmospheric carbon dioxide through photosynthesis. Burning or decomposition can return that carbon to the atmosphere, while some harvested carbon remains in wood products for a time. Replanting supports future uptake but does not instantly replace an older forest’s carbon stock or habitat. Streamside buffers, careful road design and soil protection can reduce some harvest impacts, and follow-up measurements test whether those measures work."
  ],
  "eqs": [
   "Canopy removal near a stream → less shade → possible higher water temperature",
   "Forest carbon → wood products, residues and emissions; regrowth takes time"
  ],
  "boards": [
   [
    "Canopy removal changes light and water movement",
    "Exposed or disturbed soil is more vulnerable",
    "Effects depend on the site and harvest practices"
   ],
   [
    "Trees store carbon in organic matter",
    "Burning and decay can release carbon dioxide",
    "Buffers and soil protection reduce some impacts"
   ]
  ],
  "questions": [
   [
    "A harvest removes nearly all trees from one stand at once. Which method is described?",
    "Clearcutting",
    "Selective removal of a few marked trees",
    "A ban on all timber harvest",
    "Clearcutting removes the stand’s trees in one major operation. Selective harvesting retains more of the existing stand."
   ],
   [
    "Clearcutting leaves disturbed soil on a steep slope before heavy rain. Which impact is most directly increased?",
    "Soil erosion and sediment delivery downslope",
    "Guaranteed elimination of runoff",
    "Instant replacement of all lost roots by bedrock",
    "Exposed disturbed soil can be detached and transported by rain and runoff. Slope and storm conditions increase that vulnerability."
   ],
   [
    "Trees shading a narrow stream are removed. What mechanism can raise stream temperature?",
    "More sunlight reaches the water",
    "Less sunlight necessarily reaches the water",
    "Water temperature depends only on the stream’s name",
    "Reduced shade increases incoming solar energy. Actual temperature response also depends on flow and other conditions."
   ],
   [
    "Why can clearcutting be economically attractive to a timber operator?",
    "Many trees can be harvested efficiently in one area",
    "It requires no labor, equipment or transport",
    "It guarantees no environmental costs",
    "Concentrating harvest can reduce operating costs. Economic advantages do not imply absence of inputs or ecological effects."
   ],
   [
    "Where is much of a tree’s stored carbon located?",
    "In organic compounds in its tissues",
    "As an intact tank of gaseous carbon dioxide inside every leaf",
    "Only in the water flowing outside its roots",
    "Photosynthesis incorporates carbon into organic matter. Forest carbon is not simply stored as unchanged carbon dioxide gas."
   ],
   [
    "Harvested wood is burned completely. What happens to much of its carbon?",
    "It is released to the atmosphere as carbon dioxide",
    "It permanently disappears from the carbon cycle",
    "It all becomes new living tree roots immediately",
    "Combustion oxidizes much of the organic carbon to carbon dioxide. Carbon changes form and location rather than vanishing."
   ],
   [
    "A company replants seedlings after harvest. Which claim is accurate?",
    "Regrowth can take up carbon, but does not instantly restore the former stock",
    "Planting seedlings instantly recreates mature-forest carbon and habitat",
    "New trees can never take up atmospheric carbon",
    "Regrowth supports future uptake. Mature biomass, structure and habitat take time to develop."
   ],
   [
    "Which practice most directly helps preserve shade and filter runoff beside a harvested forest stream?",
    "Retain a vegetated streamside buffer",
    "Remove all bank vegetation and expose bare soil",
    "Route every logging road directly through the stream",
    "A vegetated buffer retains shade and can intercept sediment. Clearing banks or concentrating road runoff increases risk."
   ],
   [
    "A harvested watershed has more runoff after a storm. Which comparison best helps evaluate the harvest’s role?",
    "Compare similar storm conditions and an appropriate unharvested reference watershed",
    "Compare only two storms with completely unknown rainfall",
    "Assume any later flood was caused solely by harvest",
    "A meaningful comparison accounts for rainfall and other relevant differences. Timing alone does not isolate a cause."
   ],
   [
    "A light-demanding tree species establishes well in an open harvest area. What does this show?",
    "Some species can benefit from open conditions even while other impacts need evaluation",
    "Clearcutting must benefit every forest species equally",
    "Open conditions eliminate all soil and water concerns",
    "Species respond differently to habitat change. A regeneration benefit does not erase other ecological effects."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Clearcutting: mechanisms vary by site",
    "head": "Change",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Canopy removed",
      "More light and less stream shade"
     ],
     [
      "Soil disturbed or exposed",
      "Greater erosion potential"
     ],
     [
      "Open regeneration area",
      "May favor light-demanding trees"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Harvested carbon has different pathways",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      242,
      206
     ],
     "P1": [
      398,
      206
     ],
     "P2": [
      398,
      144
     ],
     "P3": [
      242,
      144
     ],
     "P4": [
      85,
      103
     ],
     "P5": [
      275,
      103
     ],
     "P6": [
      275,
      47
     ],
     "P7": [
      85,
      47
     ],
     "P8": [
      365,
      103
     ],
     "P9": [
      555,
      103
     ],
     "P10": [
      555,
      47
     ],
     "P11": [
      365,
      47
     ],
     "P12": [
      275,
      141
     ],
     "P13": [
      186,
      108
     ],
     "P14": [
      365,
      141
     ],
     "P15": [
      455,
      108
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P12P13",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 2,
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
       181
      ],
      "text": "Forest carbon",
      "col": 0
     },
     {
      "at": [
       320,
       158
      ],
      "text": "Organic matter",
      "col": 0
     },
     {
      "at": [
       180,
       80
      ],
      "text": "Wood products",
      "col": 1
     },
     {
      "at": [
       180,
       60
      ],
      "text": "Some carbon retained",
      "col": 1
     },
     {
      "at": [
       460,
       80
      ],
      "text": "Burning or decay",
      "col": 2
     },
     {
      "at": [
       460,
       60
      ],
      "text": "Carbon dioxide",
      "col": 2
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A harvest removes nearly all trees from one stand at once. Which method is described?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Clearcutting leaves disturbed soil on a steep slope before heavy rain. Which impact is most directly increased?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Trees shading a narrow stream are removed. What mechanism can raise stream temperature?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can clearcutting be economically attractive to a timber operator?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Where is much of a tree’s stored carbon located?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Harvested wood is burned completely. What happens to much of its carbon?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A company replants seedlings after harvest. Which claim is accurate?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which practice most directly helps preserve shade and filter runoff beside a harvested forest stream?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A harvested watershed has more runoff after a storm. Which comparison best helps evaluate the harvest’s role?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A light-demanding tree species establishes well in an open harvest area. What does this show?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.3",
  "name": "The Green Revolution",
  "skill": "s3",
  "boardTitle": "The Green Revolution",
  "teach": [
   "The historical Green Revolution expanded high-yield crop varieties and input-intensive farming, especially during the mid-twentieth century. Breeding semi-dwarf wheat and improved rice varieties, along with fertilizer, irrigation, pest control and mechanization, increased yields in many settings. Historical varieties were developed through conventional breeding and selection; modern genetic engineering is a distinct, later technology that can introduce particular traits. Neither method makes every crop automatically high-yielding under every condition.",
   "Higher yield means more harvested product per unit area. A field rising from 2 to 5 tonnes per hectare gains 3 tonnes per hectare, a 150% increase relative to its original yield. Productivity gains can improve food supply, but access, costs and distribution also affect food security. Fertilizer losses, water depletion, reduced crop diversity and fossil-fuel use can create tradeoffs. Evaluate claims with local evidence and distinguish increased production from guaranteed affordability for everyone."
  ],
  "eqs": [
   "Improved varieties + suitable water and nutrients → potential yield gains",
   "Yield change: (5−2)/2 ×100% =150%"
  ],
  "boards": [
   [
    "Historical gains combined breeding and farm inputs",
    "Conventional breeding differs from gene engineering",
    "Benefits depend on conditions and access to inputs"
   ],
   [
    "Yield is output per unit area",
    "Compare gains with water, soil and energy costs",
    "More food produced does not ensure equal access"
   ]
  ],
  "questions": [
   [
    "Which combination most closely describes the historical Green Revolution?",
    "Improved high-yield varieties with irrigation, fertilizers and other intensive practices",
    "A universal end to crop breeding and irrigation",
    "A movement to replace all farms with unmanaged forests",
    "The Green Revolution combined improved varieties and supporting farm practices to raise production. It did not end cultivation or breeding."
   ],
   [
    "Semi-dwarf wheat used in the historical Green Revolution was developed through breeding and selection. Which inference should be avoided?",
    "That every historical variety was produced with modern transgenic engineering",
    "That breeders selected useful heritable traits",
    "That shorter stems could be part of a selected variety",
    "Conventional breeding and modern genetic engineering are distinct. The historical breeding statement does not imply transgenic methods."
   ],
   [
    "A farm’s yield rises from 2 to 5 tonnes per hectare. What is the percentage increase relative to the original yield?",
    "150%",
    "60%",
    "250%",
    "The increase is 3 tonnes per hectare. Divide 3 by the original 2 and multiply by 100 to obtain 150%."
   ],
   [
    "Two farms harvest the same crop. Which measure directly compares yield?",
    "Tonnes of crop harvested per hectare",
    "Only total hectares owned",
    "Only the number of tractors painted green",
    "Yield relates output to area. Total land or equipment appearance alone does not measure it."
   ],
   [
    "A new variety gives high yields only with irrigation and adequate nutrients. What should an adoption decision consider?",
    "Whether those inputs are available and affordable under local conditions",
    "An assumption that seed alone guarantees the advertised result",
    "Only the color of the seed packaging",
    "The stated performance depends on supporting conditions. Local access and costs affect whether that performance is attainable."
   ],
   [
    "Mechanization lets a farm cultivate more area per worker but uses diesel machinery. What tradeoff is illustrated?",
    "Labor productivity can rise while fossil-fuel dependence increases",
    "Mechanization necessarily eliminates all energy use",
    "Higher productivity proves no emissions occur",
    "Machines can save labor while consuming fuel. Productivity and environmental burdens must be evaluated separately."
   ],
   [
    "Crop output increases nationally, but some households cannot afford food. Which conclusion follows?",
    "Production gains alone do not guarantee food access for everyone",
    "More production logically means every household can buy enough food",
    "Food prices and incomes cannot affect access",
    "Food security includes economic and physical access. A larger harvest alone does not establish those conditions for each household."
   ],
   [
    "A region replaces many locally adapted crop varieties with one widely planted variety. What risk can increase?",
    "Genetic uniformity and shared vulnerability to a matching threat",
    "A guarantee that no disease can spread",
    "Automatic increases in crop genetic diversity",
    "Planting a narrow genetic range can expose many fields to the same susceptibility. It does not guarantee resilience."
   ],
   [
    "A fertilizer-supported yield increase is accompanied by nutrient runoff into a lake. What is a balanced assessment?",
    "Recognize the production benefit and investigate the water-quality cost",
    "Ignore runoff because yields increased",
    "Conclude fertilizers never affect production",
    "The observations identify both an agricultural benefit and an environmental cost. Neither should erase the other."
   ],
   [
    "A seed advertisement claims a variety will double every farm’s yield. What evidence best tests that broad claim?",
    "Replicated comparisons under varied relevant farming conditions",
    "One favorable demonstration with no comparison plot",
    "Only the advertisement’s repeated claim",
    "A universal performance claim needs evidence across conditions and suitable controls. One favorable example is insufficient."
   ]
  ],
  "check": [
   "A plot yields 3 tonnes per hectare before a change and 4.5 afterward. What is the increase relative to the original yield?",
   "50%",
   "150%",
   "1.5%",
   "Subtract 3 from 4.5, then divide the 1.5 gain by 3 and multiply by 100."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "A combined change in farming",
    "head": "Practice",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Conventional crop breeding",
      "Select useful heritable traits"
     ],
     [
      "Irrigation and nutrients",
      "Supply inputs needed for growth"
     ],
     [
      "Mechanization",
      "Increase work done per worker"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "A fictional yield comparison",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      116,
      60
     ],
     "P1": [
      529,
      60
     ],
     "P2": [
      116,
      60
     ],
     "P3": [
      116,
      189
     ],
     "P4": [
      177,
      98.33333333333334
     ],
     "P5": [
      273,
      98.33333333333334
     ],
     "P6": [
      273,
      60
     ],
     "P7": [
      177,
      60
     ],
     "P8": [
      392,
      155.83333333333331
     ],
     "P9": [
      488,
      155.83333333333331
     ],
     "P10": [
      488,
      60
     ],
     "P11": [
      392,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 3,
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
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       96,
       56
      ],
      "text": "0",
      "col": 3
     },
     {
      "at": [
       320,
       214
      ],
      "text": "Yield (tonnes per hectare)",
      "col": 0
     },
     {
      "at": [
       225,
       107.33333333333334
      ],
      "text": "2",
      "col": 1
     },
     {
      "at": [
       225,
       37
      ],
      "text": "Before",
      "col": 1
     },
     {
      "at": [
       440,
       164.83333333333331
      ],
      "text": "5",
      "col": 2
     },
     {
      "at": [
       440,
       37
      ],
      "text": "After",
      "col": 2
     },
     {
      "at": [
       320,
       14
      ],
      "text": "Increase: 3/2 × 100% = 150%",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which combination most closely describes the historical Green Revolution?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Semi-dwarf wheat used in the historical Green Revolution was developed through breeding and selection. Which inference should be avoided?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A farm’s yield rises from 2 to 5 tonnes per hectare. What is the percentage increase relative to the original yield?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two farms harvest the same crop. Which measure directly compares yield?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A new variety gives high yields only with irrigation and adequate nutrients. What should an adoption decision consider?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Mechanization lets a farm cultivate more area per worker but uses diesel machinery. What tradeoff is illustrated?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Crop output increases nationally, but some households cannot afford food. Which conclusion follows?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A region replaces many locally adapted crop varieties with one widely planted variety. What risk can increase?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fertilizer-supported yield increase is accompanied by nutrient runoff into a lake. What is a balanced assessment?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A seed advertisement claims a variety will double every farm’s yield. What evidence best tests that broad claim?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A plot yields 3 tonnes per hectare before a change and 4.5 afterward. What is the increase relative to the original yield?"
   ],
   "small": false
  }
 },
 {
  "code": "5.4",
  "name": "Impact of Agricultural Practices",
  "skill": "s4",
  "boardTitle": "Impact of Agricultural Practices",
  "teach": [
   "Agriculture changes soil cover, structure and nutrient movement. Tillage can prepare a seedbed and control weeds, but frequent disturbance can expose soil to wind and water erosion and disrupt soil structure. Clearing and burning vegetation releases carbon and temporarily adds some nutrients in ash. If cultivation continues without adequate recovery, fertility and ground cover can decline. Effects depend on slope, climate, soil, intensity and the length of any fallow period.",
   "Fertilizers supply nutrients that can support crop growth. Applying more than plants can use, or applying before heavy rain, can increase losses to water. Excess nutrients can stimulate aquatic production; decomposition of dead organic matter consumes dissolved oxygen and can create hypoxic conditions. Nitrate can also leach through soil to groundwater. Match application rate and timing to crop needs, and use soil cover and buffers to reduce transport."
  ],
  "eqs": [
   "Bare disturbed soil + rain or wind → greater potential erosion",
   "Excess nutrients → algal growth → decomposition → oxygen demand"
  ],
  "boards": [
   [
    "Tillage changes cover and soil structure",
    "Burning releases carbon and changes nutrient supply",
    "Intensity and recovery time affect outcomes"
   ],
   [
    "Match nutrient supply to crop needs",
    "Runoff and leaching are different pathways",
    "Decomposition can reduce dissolved oxygen"
   ]
  ],
  "questions": [
   [
    "A farmer repeatedly tills a bare field before windy weather. Which risk increases?",
    "Wind erosion of exposed soil",
    "Guaranteed growth of a protective plant canopy immediately",
    "Permanent elimination of soil disturbance",
    "Tillage can expose and loosen soil. With little cover, wind can remove particles more easily."
   ],
   [
    "After forest clearing, vegetation is burned to prepare a field. What is one immediate carbon-cycle effect?",
    "Combustion releases carbon dioxide",
    "All carbon is permanently removed from the Earth system",
    "Every carbon atom becomes a crop seed",
    "Burning transfers much stored organic carbon to atmospheric carbon dioxide. It does not destroy the element."
   ],
   [
    "Ash temporarily supplies nutrients, but a tropical field is continuously cropped without restoring fertility. What can happen?",
    "Soil fertility can decline as nutrients are removed or lost",
    "Ash guarantees unlimited fertility forever",
    "Continuous harvest automatically adds every removed nutrient back",
    "Harvest and losses can exceed nutrient replenishment. A short-term nutrient pulse does not ensure long-term fertility."
   ],
   [
    "Fertilizer is applied in excess just before intense rain. Which pathway can carry nutrients to a nearby stream?",
    "Surface runoff",
    "Photosynthesis directly converting the stream into soil",
    "A guarantee that every nutrient stays at the application point",
    "Rain-driven runoff can transport dissolved nutrients and sediment. Excess application increases the material available for loss."
   ],
   [
    "Dissolved nitrate moves downward with water through soil to an aquifer. Which process is described?",
    "Leaching",
    "Wind erosion of dry rock only",
    "Evaporation of nitrate into harmless sunlight",
    "Leaching transports dissolved substances through soil with infiltrating water. It differs from surface runoff and wind erosion."
   ],
   [
    "A nutrient-rich lake develops a bloom. Why can oxygen fall after much of the biomass dies?",
    "Decomposers consume oxygen while breaking down organic matter",
    "Dead algae generate unlimited oxygen in darkness",
    "Nutrients directly remove every oxygen atom by definition",
    "Microbial decomposition raises oxygen demand. A large organic input can cause low dissolved oxygen, especially when replenishment is limited."
   ],
   [
    "Which fertilizer practice most directly reduces excess application?",
    "Use soil and crop information to match rate and timing to need",
    "Apply the largest possible amount regardless of crop uptake",
    "Apply before every predicted heavy storm",
    "Nutrient management targets crop demand and reduces surplus available for loss. More fertilizer is not automatically better."
   ],
   [
    "Two comparable plots differ only in whether soil is covered between crops. What outcome best evaluates erosion control?",
    "Mass of sediment lost from each plot under comparable rainfall",
    "The color of the labels on the plots",
    "The number of letters in each crop’s name",
    "Sediment loss directly measures erosion from the plots. Comparable conditions help attribute differences to cover."
   ],
   [
    "A field produces more grain after fertilization. Does this prove the application had no environmental costs?",
    "No; production and off-site nutrient losses require separate evaluation",
    "Yes; any yield increase proves zero pollution",
    "Yes; nutrients cannot move outside a field",
    "An agricultural benefit does not rule out runoff, leaching or other costs. Different outcomes need relevant measurements."
   ],
   [
    "Why can a longer vegetation-recovery period change the impacts of shifting cultivation?",
    "Regrowth can restore cover and some nutrient cycling before reuse",
    "Time alone guarantees every soil is fully restored",
    "Vegetation cannot affect erosion or nutrients",
    "Recovery allows ecological processes to rebuild cover and nutrient cycling. The amount of recovery remains dependent on local conditions."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Agricultural practices change soil and water",
    "head": "Practice",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Repeated tillage of bare soil",
      "Can increase erosion vulnerability"
     ],
     [
      "Burning cleared vegetation",
      "Releases carbon; ash adds some nutrients"
     ],
     [
      "Excess nutrient application",
      "Raises risk of nutrient losses"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Nutrients and oxygen demand",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      82,
      175
     ],
     "P1": [
      222,
      175
     ],
     "P2": [
      222,
      103
     ],
     "P3": [
      82,
      103
     ],
     "P4": [
      224,
      140
     ],
     "P5": [
      256,
      140
     ],
     "P6": [
      260,
      175
     ],
     "P7": [
      400,
      175
     ],
     "P8": [
      400,
      103
     ],
     "P9": [
      260,
      103
     ],
     "P10": [
      402,
      140
     ],
     "P11": [
      434,
      140
     ],
     "P12": [
      438,
      175
     ],
     "P13": [
      578,
      175
     ],
     "P14": [
      578,
      103
     ],
     "P15": [
      438,
      103
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
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
      "v": "P6P7P8P9",
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
       152,
       145
      ],
      "text": "Nutrient input",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Enters a lake",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "More biomass",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "May form a bloom",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Decomposition",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Consumes oxygen",
      "col": 2
     },
     {
      "at": [
       320,
       56
      ],
      "text": "Low oxygen can result when demand exceeds replenishment",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A farmer repeatedly tills a bare field before windy weather. Which risk increases?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "After forest clearing, vegetation is burned to prepare a field. What is one immediate carbon-cycle effect?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Ash temporarily supplies nutrients, but a tropical field is continuously cropped without restoring fertility. What can happen?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fertilizer is applied in excess just before intense rain. Which pathway can carry nutrients to a nearby stream?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Dissolved nitrate moves downward with water through soil to an aquifer. Which process is described?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A nutrient-rich lake develops a bloom. Why can oxygen fall after much of the biomass dies?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which fertilizer practice most directly reduces excess application?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two comparable plots differ only in whether soil is covered between crops. What outcome best evaluates erosion control?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A field produces more grain after fertilization. Does this prove the application had no environmental costs?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can a longer vegetation-recovery period change the impacts of shifting cultivation?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.5",
  "name": "Irrigation Methods",
  "skill": "s5",
  "boardTitle": "Irrigation Methods",
  "teach": [
   "Irrigation supplies water to crops. Furrow systems move water along channels between rows; flood systems spread it across fields; sprinklers spray it; drip systems deliver small amounts near roots. Well-managed drip can reduce evaporation and runoff, but installation, maintenance and clogging are tradeoffs. Sprinklers need pressure and can lose water in wind or heat. Efficiency varies with design, soil, crop, climate and operation; fixed textbook percentages are examples, not universal performance guarantees.",
   "Waterlogging fills soil pore spaces with water and restricts root oxygen supply. Salinization occurs when dissolved salts accumulate as water is removed, including by evaporation; adequate drainage and appropriate leaching can help manage salts but require water and disposal care. Pumping faster than aquifer replenishment lowers storage. Agriculture accounts for roughly 70% of global freshwater withdrawals, not 70% of all freshwater on Earth; withdrawals and consumptive use are different measures because some withdrawn water returns to the system."
  ],
  "eqs": [
   "At 80% application efficiency, root-zone need 100 L requires 100/0.80=125 L applied",
   "Water leaves through evaporation; dissolved salts can remain and accumulate"
  ],
  "boards": [
   [
    "Compare furrow, flood, sprinkler and drip delivery",
    "Compare local efficiency, cost and maintenance",
    "Example percentages are not universal constants"
   ],
   [
    "Waterlogging restricts oxygen in the root zone",
    "Salt accumulation differs from waterlogging",
    "Withdrawals and consumptive use are distinct"
   ]
  ],
  "questions": [
   [
    "Water flows through small channels between crop rows. Which irrigation method is described?",
    "Furrow irrigation",
    "Drip emitters delivering water at individual roots",
    "A method using no added water",
    "Furrow irrigation conveys water along channels beside rows. It differs from localized drip delivery."
   ],
   [
    "A farmer supplies small amounts of water through emitters close to plant roots. Which method is this?",
    "Drip irrigation",
    "Uncontrolled flooding of the whole watershed",
    "Clearcutting",
    "Drip places water near the root zone. Its performance depends on design and maintenance, including keeping emitters working."
   ],
   [
    "A sprinkler operates during hot, windy weather. Which loss can increase?",
    "Evaporation and wind drift before water reaches the target",
    "Guaranteed conversion of every drop into crop tissue",
    "Permanent removal of every dissolved salt from the region",
    "Heat and wind can increase losses from sprayed water. Timing and system design influence efficiency."
   ],
   [
    "A crop needs 100 L delivered to its root zone. Assume application efficiency is 80%, defined as useful root-zone water divided by applied water. How much must be applied?",
    "125 L",
    "80 L",
    "180 L",
    "Applied water equals 100/0.80=125 L. Multiplying by 0.80 would calculate useful water from an already known applied amount."
   ],
   [
    "Excess irrigation saturates the soil and reduces air in its pores. What problem can this cause?",
    "Waterlogging that restricts oxygen available to roots",
    "Automatic improvement in oxygen supply to every root",
    "Elimination of all groundwater",
    "Water-filled pore space limits gas exchange. Roots need oxygen for respiration, so prolonged saturation can injure many crops."
   ],
   [
    "Irrigation water contains dissolved salts. Water evaporates repeatedly from a poorly drained field. What can accumulate?",
    "Salts in the soil",
    "New freshwater created from salt",
    "Only atmospheric nitrogen with no salt change",
    "Evaporation removes water while leaving dissolved salts behind. Repeated input without adequate removal can raise soil salinity."
   ],
   [
    "Groundwater pumping exceeds aquifer replenishment for decades. Which trend is expected, other flows held constant?",
    "Declining groundwater storage",
    "Unlimited groundwater creation",
    "A guaranteed rise in every local water table",
    "A persistent imbalance between removal and replenishment reduces storage. Local details depend on the aquifer and other flows."
   ],
   [
    "A report says agriculture accounts for roughly 70% of global freshwater withdrawals. What does “withdrawals” mean?",
    "Water removed from surface or groundwater sources for use",
    "All freshwater stored anywhere on Earth",
    "Only water that can never return to the water system",
    "Withdrawal is removal for use. Some water returns, so it is distinct from consumptive use and from the planet’s total freshwater stock."
   ],
   [
    "A field’s drip system saves applied water but emitters clog. Which tradeoff is illustrated?",
    "Efficiency benefits can require maintenance and suitable water management",
    "Drip systems never need maintenance",
    "Clogging proves no drip system can ever save water",
    "Localized delivery can reduce some losses while maintenance remains necessary. A problem in operation does not erase all potential benefits."
   ],
   [
    "A manager proposes leaching salts below crop roots. What must also be considered?",
    "Adequate drainage and the destination of saline drainage water",
    "An assumption that adding water can never cause waterlogging",
    "A claim that salts cease to exist once moved downward",
    "Leaching moves salts rather than destroying them. Drainage, water supply and effects of saline discharge are part of the evaluation."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Four irrigation methods",
    "head": "Method",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Furrow",
      "Water travels in channels between rows"
     ],
     [
      "Flood",
      "Water spreads across the field"
     ],
     [
      "Sprinkler",
      "Pressurized water is sprayed"
     ],
     [
      "Drip",
      "Small deliveries near the root zone"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Separate saturation from salt accumulation",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      92,
      175
     ],
     "P1": [
      270,
      175
     ],
     "P2": [
      270,
      59
     ],
     "P3": [
      92,
      59
     ],
     "P4": [
      370,
      135
     ],
     "P5": [
      548,
      135
     ],
     "P6": [
      548,
      59
     ],
     "P7": [
      370,
      59
     ],
     "P8": [
      459,
      140
     ],
     "P9": [
      459,
      182
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
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
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       181,
       197
      ],
      "text": "Waterlogged soil",
      "col": 1
     },
     {
      "at": [
       181,
       137
      ],
      "text": "Water fills pores",
      "col": 1
     },
     {
      "at": [
       181,
       104
      ],
      "text": "Root oxygen limited",
      "col": 1
     },
     {
      "at": [
       459,
       197
      ],
      "text": "Salinizing soil",
      "col": 2
     },
     {
      "at": [
       459,
       106
      ],
      "text": "Salts remain",
      "col": 2
     },
     {
      "at": [
       459,
       155
      ],
      "text": "Water evaporates",
      "col": 0
     },
     {
      "at": [
       320,
       25
      ],
      "text": "Distinct problems; both depend on site and management",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Water flows through small channels between crop rows. Which irrigation method is described?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A farmer supplies small amounts of water through emitters close to plant roots. Which method is this?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A sprinkler operates during hot, windy weather. Which loss can increase?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A crop needs 100 L delivered to its root zone. Assume application efficiency is 80%, defined as useful root-zone water divided by applied water. How much must be applied?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Excess irrigation saturates the soil and reduces air in its pores. What problem can this cause?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Irrigation water contains dissolved salts. Water evaporates repeatedly from a poorly drained field. What can accumulate?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Groundwater pumping exceeds aquifer replenishment for decades. Which trend is expected, other flows held constant?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A report says agriculture accounts for roughly 70% of global freshwater withdrawals. What does “withdrawals” mean?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A field’s drip system saves applied water but emitters clog. Which tradeoff is illustrated?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A manager proposes leaching salts below crop roots. What must also be considered?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.6",
  "name": "Pest Control Methods",
  "skill": "s6",
  "boardTitle": "Pest Control Methods",
  "teach": [
   "Pest management aims to reduce damage from organisms that interfere with a particular goal. Insecticides target insects, herbicides target unwanted plants, and fungicides target fungi; all are categories of pesticides. A treatment may reduce crop losses while also harming beneficial organisms or contaminating water. Select a method for the identified pest and setting. Biological controls use living natural enemies, but introducing an organism requires evaluating possible effects on non-target species.",
   "Repeated pesticide exposure can select for heritable resistance already present or arising through genetic variation. Susceptible individuals are more likely to die, while resistant survivors may reproduce; the resistant fraction can increase over generations. This is natural selection under human-imposed pressure, not pests choosing to change. Engineered crop traits can resist particular pests, but effects depend on the trait, pest and management. Planting a narrow range of varieties can reduce diversity regardless of how those varieties were bred."
  ],
  "eqs": [
   "Herbicide → unwanted plants; insecticide → insects; fungicide → fungi",
   "Heritable variation + differential survival and reproduction → resistance becomes more common"
  ],
  "boards": [
   [
    "Identify the pest before choosing a control",
    "Pesticides include several target-specific categories",
    "Evaluate effects on beneficial organisms"
   ],
   [
    "Selection changes populations across generations",
    "Pests do not choose a needed mutation",
    "Trait and management determine crop outcomes"
   ]
  ],
  "questions": [
   [
    "A product is designed to control unwanted plants. Which pesticide category best describes it?",
    "Herbicide",
    "Insecticide by definition",
    "A fertilizer that only supplies nitrogen",
    "Herbicides target plants considered weeds in a setting. Insecticides target insects; fertilizers supply nutrients."
   ],
   [
    "A spray reduces crop-eating insects but also kills pollinators. What tradeoff is shown?",
    "Pest reduction can accompany harm to non-target organisms",
    "Every pesticide affects only the intended pest",
    "Pollinators cannot be affected by insecticides",
    "Insecticides can affect beneficial insects as well as pests. Benefits and non-target risks require evaluation."
   ],
   [
    "Some pests have heritable resistance before spraying. They survive more often and leave more offspring. What explains increasing resistance?",
    "Natural selection favoring resistant variants",
    "Every pest deliberately changes its genes because it needs to",
    "The pesticide teaches each survivor a new behavior that must be inherited",
    "Differential survival and reproduction of heritable variants changes population composition. Need does not direct a purposeful genetic change."
   ],
   [
    "A pesticide kills most susceptible insects but leaves resistant ones. Which repeated practice can intensify selection for that resistance?",
    "Repeated use of the same effective mode of action against the population",
    "Assuming every survivor is genetically identical to every dead insect",
    "Calling the insects by a different common name",
    "Repeated exposure favors variants able to survive that mode of action. Renaming organisms does not alter selection."
   ],
   [
    "A farmer wants to use a natural predator as a control. What should be assessed before introducing it?",
    "Its effects on the target pest and on other species",
    "Only whether the predator has an appealing name",
    "An assumption that every introduced predator is harmless",
    "Biological controls can have non-target effects. Host specificity and ecological context matter."
   ],
   [
    "A crop has an engineered trait resisting one insect species. Which conclusion is warranted?",
    "The trait targets that pest; it does not imply resistance to every pest or disease",
    "The crop is automatically immune to all pathogens",
    "The crop no longer needs water or nutrients",
    "A specific resistance trait has a defined mechanism and scope. It does not confer universal protection or remove growth requirements."
   ],
   [
    "Many farms plant the same few crop varieties, whether conventionally bred or engineered. What diversity concern can arise?",
    "Reduced genetic diversity across planted crops",
    "A guarantee of maximum genetic diversity",
    "Proof that breeding method alone determines every ecological outcome",
    "The range of planted varieties affects diversity. Narrow adoption can reduce diversity under either breeding approach."
   ],
   [
    "A fungicide is being selected for a crop problem. Which organism should first be confirmed as the relevant cause?",
    "A fungus causing the targeted disease",
    "A deer eating leaves, with no fungal disease",
    "A weed competing for sunlight, with no fungal disease",
    "Fungicides target fungi. Correct identification avoids treating an unrelated problem with an inappropriate method."
   ],
   [
    "A field trial reports fewer pests after treatment but has no untreated comparison. What limitation remains?",
    "Other changes could have contributed to the decline",
    "The treatment is proven to be the sole cause",
    "Pest abundance can never vary without pesticide use",
    "Weather, natural enemies and other factors may change pest numbers. A comparison improves causal interpretation."
   ],
   [
    "Why can changing only a pesticide’s brand name fail to manage resistance?",
    "Different brands may use the same mode of action",
    "Brand names determine insect genes directly",
    "Every new label contains a different biological mechanism",
    "Resistance relates to biological mechanisms. Different products can share the same active ingredient or mode of action."
   ]
  ],
  "check": [
   "A few insects carry inherited resistance before a spray. After repeated spraying, resistant descendants become common. Which process explains the change?",
   "Differential survival and reproduction of heritable variants",
   "Every insect intentionally invents the same mutation",
   "The insects become a nonliving resource",
   "The spray creates a selective pressure; inherited variants affect who survives and reproduces."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Identify the control method and target",
    "head": "Category",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Herbicide",
      "Unwanted plants"
     ],
     [
      "Insecticide",
      "Insects"
     ],
     [
      "Fungicide",
      "Fungi"
     ],
     [
      "Biological control",
      "Living natural enemies"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Selection acts on heritable differences",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      133,
      150
     ],
     "P1": [
      163,
      150
     ],
     "P2": [
      193,
      150
     ],
     "P3": [
      223,
      150
     ],
     "P4": [
      253,
      150
     ],
     "P5": [
      133,
      110
     ],
     "P6": [
      163,
      110
     ],
     "P7": [
      193,
      110
     ],
     "P8": [
      223,
      110
     ],
     "P9": [
      253,
      110
     ],
     "P10": [
      435,
      131
     ],
     "P11": [
      471,
      131
     ],
     "P12": [
      291,
      132
     ],
     "P13": [
      393,
      132
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13",
    "dots": "",
    "segs": [
     {
      "v": "P12P13",
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
       320,
       216
      ],
      "text": "Toy example: susceptible die; resistant survive",
      "col": 0
     },
     {
      "at": [
       193,
       181
      ],
      "text": "Before spray: 10 insects",
      "col": 0
     },
     {
      "at": [
       453,
       181
      ],
      "text": "Survivors: 2 insects",
      "col": 0
     },
     {
      "at": [
       197,
       63
      ],
      "text": "8 susceptible; 2 resistant",
      "col": 0
     },
     {
      "at": [
       451,
       63
      ],
      "text": "Both resistant",
      "col": 2
     },
     {
      "at": [
       320,
       24
      ],
      "text": "Inherited variation changes who survives and reproduces",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P0",
      "r": 8,
      "col": 1
     },
     {
      "c": "P1",
      "r": 8,
      "col": 1
     },
     {
      "c": "P2",
      "r": 8,
      "col": 1
     },
     {
      "c": "P3",
      "r": 8,
      "col": 1
     },
     {
      "c": "P4",
      "r": 8,
      "col": 1
     },
     {
      "c": "P5",
      "r": 8,
      "col": 1
     },
     {
      "c": "P6",
      "r": 8,
      "col": 1
     },
     {
      "c": "P7",
      "r": 8,
      "col": 1
     },
     {
      "c": "P8",
      "r": 8,
      "col": 2
     },
     {
      "c": "P9",
      "r": 8,
      "col": 2
     },
     {
      "c": "P10",
      "r": 8,
      "col": 2
     },
     {
      "c": "P11",
      "r": 8,
      "col": 2
     }
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A product is designed to control unwanted plants. Which pesticide category best describes it?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A spray reduces crop-eating insects but also kills pollinators. What tradeoff is shown?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Some pests have heritable resistance before spraying. They survive more often and leave more offspring. What explains increasing resistance?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A pesticide kills most susceptible insects but leaves resistant ones. Which repeated practice can intensify selection for that resistance?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A farmer wants to use a natural predator as a control. What should be assessed before introducing it?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A crop has an engineered trait resisting one insect species. Which conclusion is warranted?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Many farms plant the same few crop varieties, whether conventionally bred or engineered. What diversity concern can arise?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fungicide is being selected for a crop problem. Which organism should first be confirmed as the relevant cause?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A field trial reports fewer pests after treatment but has no untreated comparison. What limitation remains?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can changing only a pesticide’s brand name fail to manage resistance?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A few insects carry inherited resistance before a spray. After repeated spraying, resistant descendants become common. Which process explains the change?"
   ],
   "small": false
  }
 },
 {
  "code": "5.7",
  "name": "Meat Production Methods",
  "skill": "s7",
  "boardTitle": "Meat Production Methods",
  "teach": [
   "Meat production includes confined feeding operations and pasture-based systems. Concentrated operations can use feed and facilities efficiently but collect large amounts of manure in a small area, requiring careful storage and nutrient management. Pasture distributes manure and can support grazing-based livelihoods, but excessive stocking or inadequate recovery can damage vegetation and soil. Rotating animals among pastures helps only when stocking rates and rest periods allow regrowth. Free-range does not automatically mean antibiotic-free.",
   "Livestock impacts vary by species, feed, land use and management. Ruminants such as cattle produce methane through microbial digestion, and manure can generate methane under anaerobic conditions. Nitrogen in manure or fertilizer can also contribute to nitrous oxide emissions. Meat production, especially many ruminant systems, often has higher impacts per unit of protein than plant alternatives. Compare like quantities and system boundaries; neither all meat systems nor all plant systems have identical impacts. Antibiotic use can select resistant bacteria."
  ],
  "eqs": [
   "High manure concentration + inadequate management → nutrient and pathogen losses",
   "Grazing removal exceeds plant regrowth → declining cover and greater erosion risk"
  ],
  "boards": [
   [
    "Confined and pasture systems have different tradeoffs",
    "Manage manure, stocking rates and recovery time",
    "Free-range does not guarantee no antibiotic use"
   ],
   [
    "Compare species and production practices",
    "Ruminant digestion can release methane",
    "Specify the amount of food or protein compared"
   ]
  ],
  "questions": [
   [
    "Many animals are kept in a small feeding area. Which environmental management issue becomes concentrated?",
    "Storage and handling of large manure quantities",
    "Elimination of all nutrient waste",
    "A guarantee that no runoff can occur",
    "Confinement concentrates manure in space. Managing nutrients, runoff and storage becomes especially important."
   ],
   [
    "A manure storage area overflows into a stream. Which concern follows?",
    "Nutrients and pathogens can enter the water",
    "Manure cannot affect water quality because it is natural",
    "All stream oxygen necessarily increases permanently",
    "Manure can carry nutrients, organic matter and pathogens. Natural origin does not make an uncontrolled discharge harmless."
   ],
   [
    "Cattle graze vegetation faster than it can regrow. What condition is described?",
    "Overgrazing",
    "Guaranteed sustainable yield",
    "A complete absence of plant consumption",
    "Overgrazing occurs when removal exceeds the vegetation’s capacity to recover under the prevailing conditions."
   ],
   [
    "How can well-managed rotational grazing reduce damage?",
    "Move animals and allow sufficient recovery before returning",
    "Move animals daily while ignoring total stocking pressure and regrowth",
    "Remove every plant root to prevent competition",
    "Rest periods and suitable stocking can allow recovery. Rotation alone is insufficient if grazing pressure remains excessive."
   ],
   [
    "Which livestock process is a direct source of methane in ruminants?",
    "Microbial digestion through enteric fermentation",
    "Photosynthesis in the animal’s bones",
    "Conversion of every feed molecule directly into oxygen",
    "Microbes involved in ruminant digestion produce methane. This is distinct from photosynthesis or complete conversion to oxygen."
   ],
   [
    "Manure decomposes without oxygen in a storage system. Which greenhouse gas can be produced?",
    "Methane",
    "Only oxygen, with no other gases possible",
    "Helium as the main biological product",
    "Anaerobic decomposition can produce methane. Actual emissions depend on conditions and manure management."
   ],
   [
    "A meat label says “free-range.” What cannot be concluded from those words alone?",
    "That no antibiotics were ever used",
    "That the product came from an animal",
    "That production practices deserve closer examination",
    "Access or grazing descriptions do not by themselves establish antibiotic use. Specific standards and evidence are needed."
   ],
   [
    "Why can routine antibiotic exposure in livestock systems contribute to resistance problems?",
    "It can select for resistant bacteria that survive and reproduce",
    "It makes cattle choose to become bacteria",
    "It proves all bacteria are killed forever",
    "Antibiotic exposure can favor resistant bacterial variants. The population of bacteria evolves; the animal does not become a bacterium."
   ],
   [
    "One study reports land use per kilogram of food; another reports land use per gram of protein. Before comparing them, what is needed?",
    "A common functional unit and compatible system boundaries",
    "An assumption that a kilogram of any food contains identical protein",
    "Only the page count of each study",
    "Foods differ in composition, and accounting scopes can differ. Comparable units and boundaries are needed for a meaningful comparison."
   ],
   [
    "A dry grassland loses cover and suffers soil compaction under excessive grazing. Which response addresses the mechanism?",
    "Reduce pressure, allow recovery and restore protective vegetation",
    "Increase stocking without considering plant regrowth",
    "Assume all drylands are naturally incapable of degradation",
    "Reducing overuse and restoring cover can limit further damage. Dryland degradation is influenced by both climate and land management."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Meat production: compare management",
    "head": "System",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Concentrated feeding",
      "Manure accumulates in a small area"
     ],
     [
      "Pasture-based grazing",
      "Stocking and recovery affect cover"
     ],
     [
      "Rotational grazing",
      "Needs suitable pressure and rest"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "Trace greenhouse-gas mechanisms",
    "head": "Source",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Ruminant microbial digestion",
      "Can release methane"
     ],
     [
      "Anaerobic manure decomposition",
      "Can release methane"
     ],
     [
      "Nitrogen cycling in soils/manure",
      "Can produce nitrous oxide"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Many animals are kept in a small feeding area. Which environmental management issue becomes concentrated?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A manure storage area overflows into a stream. Which concern follows?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Cattle graze vegetation faster than it can regrow. What condition is described?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can well-managed rotational grazing reduce damage?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which livestock process is a direct source of methane in ruminants?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Manure decomposes without oxygen in a storage system. Which greenhouse gas can be produced?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A meat label says “free-range.” What cannot be concluded from those words alone?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can routine antibiotic exposure in livestock systems contribute to resistance problems?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "One study reports land use per kilogram of food; another reports land use per gram of protein. Before comparing them, what is needed?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A dry grassland loses cover and suffers soil compaction under excessive grazing. Which response addresses the mechanism?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.8",
  "name": "Impacts of Overfishing",
  "skill": "s8",
  "boardTitle": "Impacts of Overfishing",
  "teach": [
   "Overfishing is a rate problem: fishing pressure is too high to sustain the stock’s productive capacity over time. An overfished stock is an abundance problem: biomass is below a specified threshold. The two can occur together, but a depleted stock may remain overfished after fishing pressure is reduced. Loss of stock affects food webs and people who depend on fishing. Removing breeding adults, damaging habitat and catching unintended species can compound impacts.",
   "Management can combine science-based catch limits, gear changes, protected habitats, seasonal closures and monitoring. Bycatch includes unintended captures such as sea turtles caught in fishing nets; reducing it protects affected populations. Some bottom-contact fishing gear can damage seabed habitat. A simplified stock balance helps explain pressure: 800 fish plus net natural increase of 120 minus harvest of 160 leaves 760. Real decisions need more detailed data and uncertainty estimates."
  ],
  "eqs": [
   "Overfishing concerns fishing pressure; overfished concerns stock abundance",
   "Simplified stock: 800 + 120 − 160 = 760 fish"
  ],
  "boards": [
   [
    "Distinguish removal rate from stock condition",
    "Breeding populations and habitats support recovery",
    "Food webs and fishing communities can be affected"
   ],
   [
    "Use limits, suitable gear and habitat protection",
    "Monitor catch and unintended captures",
    "Management must account for uncertainty"
   ]
  ],
  "questions": [
   [
    "Fishing pressure is above the level that can sustain a stock’s productive capacity. Which term describes that rate problem?",
    "Overfishing",
    "A guarantee of increasing biomass",
    "Biocapacity reserve by definition",
    "Overfishing concerns excessive fishing pressure. Stock abundance is a related but distinct measure."
   ],
   [
    "A stock’s biomass remains below its management threshold after fishing pressure is reduced. Which distinction explains this?",
    "An overfished stock can need time to rebuild even after overfishing ends",
    "Ending excessive fishing instantly restores all biomass",
    "Biomass and fishing pressure are exactly the same quantity",
    "Abundance reflects past removals and biological recovery. Reducing pressure does not instantly recreate fish."
   ],
   [
    "A turtle is unintentionally caught in a net targeting shrimp. What is this an example of?",
    "Bycatch",
    "Intentional planting of a crop",
    "A guaranteed improvement in turtle survival",
    "The turtle is an unintended capture. Bycatch can harm non-target organisms and requires management attention."
   ],
   [
    "Heavy fishing removes a large fraction of breeding adults. What risk follows?",
    "Reduced reproductive capacity and slower recovery",
    "Guaranteed faster reproduction under every condition",
    "No possible effect on future population size",
    "Removing breeders can reduce recruitment and recovery. Responses depend on species and ecological conditions."
   ],
   [
    "A bottom-contact trawl passes through fragile coral habitat. Which impact is plausible?",
    "Physical damage to seabed habitat",
    "Automatic restoration of every coral colony",
    "Only atmospheric effects with no seabed contact",
    "Gear contacting fragile habitat can damage it. The impact depends on gear, substrate and intensity."
   ],
   [
    "A stock starts with 800 fish, gains a net 120 naturally and loses 160 to harvest, with no other changes. What is the final stock?",
    "760 fish",
    "1080 fish",
    "840 fish",
    "The stock balance is 800+120−160=760. Net natural increase is an inflow and harvest is an outflow."
   ],
   [
    "Which measure directly addresses unintended turtle capture in a shrimp fishery?",
    "Use and evaluate gear that lets turtles escape while retaining target catch",
    "Increase netting everywhere without considering bycatch",
    "Ignore non-target captures when assessing impacts",
    "Appropriate gear changes can reduce bycatch. Their effectiveness should be monitored in the relevant fishery."
   ],
   [
    "A catch limit is based on stock assessments with substantial uncertainty. What approach recognizes that uncertainty?",
    "Use precautionary limits and update them as evidence improves",
    "Assume the highest possible estimate is certainly correct",
    "Stop monitoring because a number has been published",
    "Uncertain assessments need margins and continued evaluation. A published estimate is not a guarantee of stock size."
   ],
   [
    "A protected breeding area is established, but fishing effort moves heavily just outside it. What should managers evaluate?",
    "Both habitat benefits and displaced fishing pressure",
    "Only whether the boundary has a memorable name",
    "An assumption that any protected area makes all outside harvest harmless",
    "Protection can help while displaced effort changes other impacts. The whole fishery and connected habitats matter."
   ],
   [
    "A fish stock declines sharply in a community that depends on it. Which consequence is directly plausible?",
    "Reduced food availability and fishing income",
    "Guaranteed higher long-term catches for every fisher",
    "No social effect because fish are nonhuman",
    "Stock depletion can reduce harvest opportunities, livelihoods and food supply. Ecological changes can have social consequences."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "A rate and a condition are different",
    "head": "Term",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Overfishing",
      "Fishing pressure is too high"
     ],
     [
      "Overfished",
      "Stock abundance is below a threshold"
     ],
     [
      "Bycatch",
      "Unintended capture, such as turtles"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "A simplified fish-stock calculation",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      82,
      175
     ],
     "P1": [
      222,
      175
     ],
     "P2": [
      222,
      103
     ],
     "P3": [
      82,
      103
     ],
     "P4": [
      224,
      140
     ],
     "P5": [
      256,
      140
     ],
     "P6": [
      260,
      175
     ],
     "P7": [
      400,
      175
     ],
     "P8": [
      400,
      103
     ],
     "P9": [
      260,
      103
     ],
     "P10": [
      402,
      140
     ],
     "P11": [
      434,
      140
     ],
     "P12": [
      438,
      175
     ],
     "P13": [
      578,
      175
     ],
     "P14": [
      578,
      103
     ],
     "P15": [
      438,
      103
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
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
      "v": "P6P7P8P9",
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
       152,
       145
      ],
      "text": "Start: 800",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Fish in stock",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Net gain: 120",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Add naturally",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Harvest: 160",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Remove by fishing",
      "col": 2
     },
     {
      "at": [
       320,
       56
      ],
      "text": "Ending stock: 800 + 120 − 160 = 760 fish",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Fishing pressure is above the level that can sustain a stock’s productive capacity. Which term describes that rate problem?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A stock’s biomass remains below its management threshold after fishing pressure is reduced. Which distinction explains this?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A turtle is unintentionally caught in a net targeting shrimp. What is this an example of?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Heavy fishing removes a large fraction of breeding adults. What risk follows?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A bottom-contact trawl passes through fragile coral habitat. Which impact is plausible?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A stock starts with 800 fish, gains a net 120 naturally and loses 160 to harvest, with no other changes. What is the final stock?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which measure directly addresses unintended turtle capture in a shrimp fishery?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A catch limit is based on stock assessments with substantial uncertainty. What approach recognizes that uncertainty?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A protected breeding area is established, but fishing effort moves heavily just outside it. What should managers evaluate?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fish stock declines sharply in a community that depends on it. Which consequence is directly plausible?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.9",
  "name": "Impacts of Mining",
  "skill": "s9",
  "boardTitle": "Impacts of Mining",
  "teach": [
   "Mining extracts geological materials. Ore contains material valuable enough to extract under specified economic and technological conditions. Surface mining removes overburden to reach shallow deposits; underground mining accesses deeper deposits through shafts or tunnels. Lower-grade ore contains less target material per unit mass, so producing the same amount generally requires processing more rock, other factors equal. Method depends on deposit geometry, depth, costs and technology; depletion does not make every operation follow the same sequence.",
   "Waste rock and overburden differ from tailings, the residual material from processing ore, and slag, a byproduct of smelting. Disturbance can destroy habitat, release dust and increase erosion. Exposed sulfide minerals can react with oxygen and water, sometimes aided by microbes, generating acidic drainage that mobilizes metals. Not all mine drainage is acidic. Reclamation can stabilize land and restore vegetation, but contaminated water and long-term maintenance may still require attention."
  ],
  "eqs": [
   "At 2% target-metal content and complete recovery: 1 tonne/0.02 = 50 tonnes of ore",
   "Sulfide minerals + oxygen + water → possible acidic drainage and metal release"
  ],
  "boards": [
   [
    "Deposit conditions influence extraction method",
    "Lower ore grade means more rock per target amount",
    "Overburden, tailings and slag have different origins"
   ],
   [
    "Disturbance can affect habitat, soil and water",
    "Sulfide exposure can generate acid drainage",
    "Reclamation may require long-term monitoring"
   ]
  ],
  "questions": [
   [
    "A shallow ore deposit is reached by removing soil and rock above it. What is that covering material called?",
    "Overburden",
    "The recovered pure metal",
    "A living crop canopy by definition",
    "Overburden is material removed to access an underlying deposit. It is distinct from the target metal."
   ],
   [
    "A plant must recover 1 tonne of metal from ore containing 2% metal by mass. Assume complete recovery. How much ore is required?",
    "50 tonnes",
    "2 tonnes",
    "0.02 tonnes",
    "Required ore mass is 1/0.02=50 tonnes. The percentage is a mass fraction, not the ore mass itself."
   ],
   [
    "Ore grade falls from 2% to 1%, with recovery fraction unchanged. For the same recovered metal amount, how does required ore mass change?",
    "It doubles",
    "It halves",
    "It stays identical regardless of grade",
    "Halving the metal fraction requires twice as much ore for the same metal output, assuming equal recovery."
   ],
   [
    "What are tailings?",
    "Residual material left after processing ore to separate valuable components",
    "Only the soil above an unmined deposit",
    "The same thing as every living plant removed from a site",
    "Tailings result from ore processing. Overburden and vegetation have different origins."
   ],
   [
    "Which mining-related material is a byproduct of smelting?",
    "Slag",
    "A crop seed",
    "Freshly grown forest litter",
    "Slag is associated with smelting and removal of unwanted constituents. It differs from unprocessed overburden and milling tailings."
   ],
   [
    "Sulfide-bearing waste rock is exposed to oxygen and water. Which water-quality problem can develop?",
    "Acidic drainage that can mobilize metals",
    "Guaranteed neutral water with no dissolved constituents",
    "Conversion of all metals into harmless sunlight",
    "Sulfide oxidation can generate acidity, which can increase metal mobility. Not every mine has identical chemistry."
   ],
   [
    "Which statement about mine drainage is accurate?",
    "It can be acidic or have other harmful chemistry depending on minerals and conditions",
    "All mine drainage is necessarily acidic at exactly the same pH",
    "Neutral pH proves no dissolved contaminant can be present",
    "Drainage chemistry varies. Even nonacidic water can contain elevated contaminants, so testing must examine relevant constituents."
   ],
   [
    "An abandoned mine is replanted with vegetation. What may still require monitoring?",
    "Water quality and stability of mine wastes",
    "Only the artistic shape of the entrance sign",
    "Nothing, because planting guarantees all contamination is gone",
    "Vegetation can stabilize land but does not automatically eliminate contaminated drainage or unstable waste structures."
   ],
   [
    "A proposal chooses underground mining for a deep deposit. Which factor most directly supports that choice?",
    "Depth and geometry of the deposit",
    "The assumption that every deposit is near the surface",
    "A rule that all mining methods have identical costs and risks",
    "Deposit characteristics influence access methods. Costs, safety and environmental risks also vary by method and site."
   ],
   [
    "A mine clears vegetation and leaves loose waste material beside a stream. Which measure addresses sediment transport?",
    "Stabilize exposed surfaces and manage runoff",
    "Direct all stormwater rapidly through loose waste into the stream",
    "Assume heavy particles can never move in flowing water",
    "Stabilization and runoff controls reduce detachment and transport. Uncontrolled flow through loose material increases sediment risk."
   ]
  ],
  "check": [
   "Ore is 4% metal by mass, and recovery is complete. What ore mass supplies 2 tonnes of metal?",
   "50 tonnes",
   "8 tonnes",
   "0.08 tonnes",
   "Divide the required metal mass by the mass fraction: 2/0.04."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Mining and processing terms",
    "head": "Term",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Overburden",
      "Material above a deposit"
     ],
     [
      "Tailings",
      "Residue after ore processing"
     ],
     [
      "Slag",
      "Byproduct of smelting"
     ],
     [
      "Lower ore grade",
      "More ore per target amount, all else equal"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "One possible mine-drainage pathway",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      82,
      175
     ],
     "P1": [
      222,
      175
     ],
     "P2": [
      222,
      103
     ],
     "P3": [
      82,
      103
     ],
     "P4": [
      224,
      140
     ],
     "P5": [
      256,
      140
     ],
     "P6": [
      260,
      175
     ],
     "P7": [
      400,
      175
     ],
     "P8": [
      400,
      103
     ],
     "P9": [
      260,
      103
     ],
     "P10": [
      402,
      140
     ],
     "P11": [
      434,
      140
     ],
     "P12": [
      438,
      175
     ],
     "P13": [
      578,
      175
     ],
     "P14": [
      578,
      103
     ],
     "P15": [
      438,
      103
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
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
      "v": "P6P7P8P9",
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
       152,
       145
      ],
      "text": "Sulfide minerals",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Exposed by mining",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Oxidation",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Oxygen and water",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Acidic drainage",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Can mobilize metals",
      "col": 2
     },
     {
      "at": [
       320,
       56
      ],
      "text": "Not all mine drainage is acidic; test relevant chemistry",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A shallow ore deposit is reached by removing soil and rock above it. What is that covering material called?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A plant must recover 1 tonne of metal from ore containing 2% metal by mass. Assume complete recovery. How much ore is required?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Ore grade falls from 2% to 1%, with recovery fraction unchanged. For the same recovered metal amount, how does required ore mass change?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What are tailings?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which mining-related material is a byproduct of smelting?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Sulfide-bearing waste rock is exposed to oxygen and water. Which water-quality problem can develop?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement about mine drainage is accurate?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An abandoned mine is replanted with vegetation. What may still require monitoring?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A proposal chooses underground mining for a deep deposit. Which factor most directly supports that choice?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A mine clears vegetation and leaves loose waste material beside a stream. Which measure addresses sediment transport?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "Ore is 4% metal by mass, and recovery is complete. What ore mass supplies 2 tonnes of metal?"
   ],
   "small": false
  }
 },
 {
  "code": "5.10",
  "name": "Impacts of Urbanization",
  "skill": "s10",
  "boardTitle": "Impacts of Urbanization",
  "teach": [
   "Urbanization replaces land cover and changes water and energy flows. Conventional pavement and roofs are relatively impervious: they reduce infiltration at their surfaces and route more rainfall into runoff. Fast runoff can carry pollutants and raise peak stream flow. Dark surfaces, less vegetation and waste heat can contribute to urban heat islands. Compact development and transport choices can reduce some per-person land and travel demands, although cities still require resources and infrastructure.",
   "Coastal groundwater pumping can reduce freshwater pressure and allow saltwater to move into an aquifer. Urban sprawl spreads low-density development into surrounding land, often increasing habitat fragmentation and driving distances. Distinguish local impacts from per-person or total impacts. In a simplified runoff model, volume equals rain depth times area times the runoff fraction: 0.03 m of rain on 1000 m² at a fraction of 0.8 produces 24 m³ of runoff."
  ],
  "eqs": [
   "More impervious cover → less local infiltration and potentially faster runoff",
   "Runoff volume = 0.03 m × 1000 m² × 0.8 = 24 m³"
  ],
  "boards": [
   [
    "Pavement and roofs change infiltration and runoff",
    "Urban heat has several contributing mechanisms",
    "Compact design can reduce some per-person demands"
   ],
   [
    "Coastal pumping can promote saltwater intrusion",
    "Sprawl can fragment habitat and increase travel",
    "Use consistent units in runoff calculations"
   ]
  ],
  "questions": [
   [
    "A vegetated area is replaced with conventional pavement. What hydrologic change is expected at that surface?",
    "Less infiltration and more runoff, other conditions equal",
    "Every raindrop infiltrates more easily through the pavement",
    "Rainfall necessarily stops over the city",
    "Impervious cover limits entry into soil and directs more water into surface runoff. Rainfall itself is not eliminated."
   ],
   [
    "Why can rapid urban runoff increase stream flood peaks?",
    "Water reaches channels more quickly and with less local infiltration",
    "Pavement creates unlimited underground storage automatically",
    "All roofs remove stormwater permanently from the water cycle",
    "Impervious cover and drainage systems can concentrate delivery to streams. Timing and volume influence peak flow."
   ],
   [
    "Runoff from roads carries oil residues and metals to a stream. What is the relevant transport mechanism?",
    "Stormwater washes pollutants from surfaces into drainage pathways",
    "Pollutants cannot move because roads are human-made",
    "All contaminants are destroyed on contact with rain",
    "Runoff can transport surface pollutants. It does not automatically destroy them."
   ],
   [
    "A city has dark surfaces, little vegetation and substantial waste heat. Which effect can these contribute to?",
    "An urban heat island",
    "Guaranteed cooling below all nearby rural areas",
    "Elimination of all solar energy absorption",
    "Surface properties, reduced evapotranspiration and waste heat can elevate urban temperatures. The effect varies with setting and weather."
   ],
   [
    "Heavy pumping lowers freshwater pressure in a coastal aquifer. What risk increases?",
    "Saltwater intrusion",
    "Automatic conversion of seawater to freshwater",
    "Guaranteed expansion of freshwater storage",
    "Lower freshwater pressure can allow saline water to move toward pumping zones. The response depends on aquifer conditions."
   ],
   [
    "Low-density housing and roads spread into surrounding farmland and habitat. Which term best describes this pattern?",
    "Urban sprawl",
    "A complete absence of land-use change",
    "Reforestation by definition",
    "Sprawl involves outward, often low-density development. It can consume land and fragment habitats."
   ],
   [
    "Which consequence can follow from habitat fragmented by roads and scattered development?",
    "Reduced connectivity for some organisms",
    "Guaranteed easier movement for every species",
    "No ecological change unless a whole continent is paved",
    "Fragmentation can isolate populations or hinder movement. Effects differ among species and landscapes."
   ],
   [
    "A simplified model uses rainfall depth 0.03 m, area 1000 m² and runoff fraction 0.8. What runoff volume results?",
    "24 m³",
    "2400 m³",
    "0.024 m³",
    "Multiply depth by area and fraction: 0.03×1000×0.8=24 m³. Metres times square metres gives cubic metres."
   ],
   [
    "A compact district supports walking and transit and uses less land per resident. Which claim is supported?",
    "Its design can reduce some per-person land and transport demands",
    "Compact design guarantees zero environmental impact",
    "Every resident’s total impact must be identical",
    "The specified design can reduce particular demands. Total impacts still depend on buildings, consumption, energy and behavior."
   ],
   [
    "A growing city lowers emissions per resident while its population rises. What is needed to determine total emissions?",
    "Both the per-person emissions and the population",
    "Only the direction of per-person change",
    "Only the city’s geographic name",
    "Total emissions depend on population multiplied by per-person emissions. Opposing changes must be quantified."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Land cover changes water pathways",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      91,
      110
     ],
     "P1": [
      269,
      110
     ],
     "P2": [
      269,
      47
     ],
     "P3": [
      91,
      47
     ],
     "P4": [
      371,
      110
     ],
     "P5": [
      549,
      110
     ],
     "P6": [
      549,
      96
     ],
     "P7": [
      371,
      96
     ],
     "P8": [
      139,
      177
     ],
     "P9": [
      139,
      126
     ],
     "P10": [
      181,
      177
     ],
     "P11": [
      181,
      126
     ],
     "P12": [
      223,
      177
     ],
     "P13": [
      223,
      126
     ],
     "P14": [
      419,
      177
     ],
     "P15": [
      419,
      126
     ],
     "P16": [
      461,
      177
     ],
     "P17": [
      461,
      126
     ],
     "P18": [
      503,
      177
     ],
     "P19": [
      503,
      126
     ],
     "P20": [
      139,
      104
     ],
     "P21": [
      139,
      62
     ],
     "P22": [
      181,
      104
     ],
     "P23": [
      181,
      62
     ],
     "P24": [
      223,
      104
     ],
     "P25": [
      223,
      62
     ],
     "P26": [
      384,
      117
     ],
     "P27": [
      545,
      117
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27",
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
     },
     {
      "v": "P12P13",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P14P15",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P16P17",
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
     },
     {
      "v": "P20P21",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P22P23",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P24P25",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P26P27",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
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
       180,
       205
      ],
      "text": "Permeable ground",
      "col": 2
     },
     {
      "at": [
       460,
       205
      ],
      "text": "Impervious surface",
      "col": 1
     },
     {
      "at": [
       180,
       22
      ],
      "text": "More entry into soil",
      "col": 2
     },
     {
      "at": [
       460,
       22
      ],
      "text": "More surface runoff",
      "col": 1
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "A simplified runoff calculation",
    "head": "Quantity",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Rain depth",
      "0.03m"
     ],
     [
      "Surface area",
      "1000m²"
     ],
     [
      "Runoff fraction",
      "0.8"
     ],
     [
      "Volume = depth × area × fraction",
      "24m³"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A vegetated area is replaced with conventional pavement. What hydrologic change is expected at that surface?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can rapid urban runoff increase stream flood peaks?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Runoff from roads carries oil residues and metals to a stream. What is the relevant transport mechanism?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A city has dark surfaces, little vegetation and substantial waste heat. Which effect can these contribute to?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Heavy pumping lowers freshwater pressure in a coastal aquifer. What risk increases?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Low-density housing and roads spread into surrounding farmland and habitat. Which term best describes this pattern?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which consequence can follow from habitat fragmented by roads and scattered development?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A simplified model uses rainfall depth 0.03 m, area 1000 m² and runoff fraction 0.8. What runoff volume results?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A compact district supports walking and transit and uses less land per resident. Which claim is supported?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A growing city lowers emissions per resident while its population rises. What is needed to determine total emissions?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.11",
  "name": "Ecological Footprints",
  "skill": "s11",
  "boardTitle": "Ecological Footprints",
  "teach": [
   "An ecological footprint estimates demand on biologically productive land and water associated with consumption and waste absorption, including an area equivalent for carbon dioxide uptake. Biocapacity estimates the regenerative capacity available. Both can be expressed in global hectares, adjusted to world-average biological productivity. These are accounting estimates, not a literal map of the pavement beneath someone’s feet and not a complete measure of every toxic pollutant or biodiversity impact.",
   "Compare demand and capacity at the same scale and with compatible assumptions. A hypothetical population of 2000 people averaging 3 global hectares per person has a total footprint of 6000 global hectares. If regional biocapacity is 8000, the arithmetic reserve is 2000. A region with demand above local capacity may rely on imports or depletion; local deficit alone does not mean every resident immediately runs out of food. Per-person and total demand answer different questions."
  ],
  "eqs": [
   "2000 people × 3 global hectares/person = 6000 global hectares",
   "Biocapacity 8000 − footprint 6000 = reserve 2000 global hectares"
  ],
  "boards": [
   [
    "Footprint estimates demand on biological capacity",
    "Biocapacity estimates regenerative supply",
    "Global hectares adjust for biological productivity"
   ],
   [
    "Use matching scales and accounting assumptions",
    "Separate per-person demand from total demand",
    "The metric does not capture every environmental harm"
   ]
  ],
  "questions": [
   [
    "What does an ecological footprint estimate?",
    "Demand on biologically productive area associated with consumption and waste absorption",
    "Only the area of a person’s shoe prints",
    "Every environmental impact with perfect certainty",
    "The metric expresses demand on biological capacity. It is an accounting estimate with a defined scope, not a complete measure of every harm."
   ],
   [
    "What does biocapacity describe?",
    "The regenerative capacity of biologically productive ecosystems",
    "Only the number of roads in a region",
    "The total mass of all manufactured plastics",
    "Biocapacity concerns ecosystems’ ability to generate biological resources and provide relevant uptake capacity."
   ],
   [
    "What is a global hectare in footprint accounting?",
    "A productivity-adjusted hectare representing world-average biological productivity",
    "A hectare that is always exactly one country’s territory",
    "A measure of sound intensity",
    "Global hectares make biological capacity more comparable by accounting for productivity. They are not sound units or political boundaries."
   ],
   [
    "A fictional town has 2000 residents and a footprint of 3 global hectares per person. What is its total footprint?",
    "6000 global hectares",
    "667 global hectares",
    "2003 global hectares",
    "Multiply population by per-person demand: 2000×3=6000 global hectares."
   ],
   [
    "A region’s biocapacity is 8000 global hectares and its footprint is 6000. What is the numerical biocapacity reserve?",
    "2000 global hectares",
    "14000 global hectares",
    "A deficit of 6000 global hectares",
    "The reserve is capacity minus demand: 8000−6000=2000 global hectares."
   ],
   [
    "A region’s footprint exceeds its local biocapacity. Which statement is warranted?",
    "Its demand exceeds local regenerative capacity under the accounting assumptions",
    "Every resident must immediately starve",
    "The region cannot trade with any other region",
    "A local deficit can be supported by imports or depletion. The metric does not imply an immediate identical outcome for every person."
   ],
   [
    "Town A has 100 residents at 4 global hectares each; Town B has 500 residents at 1 each. Which has the larger total footprint?",
    "Town B: 500 versus 400 global hectares",
    "Town A: 4 versus 1 total global hectares",
    "They both have 600 global hectares",
    "Totals are 100×4=400 and 500×1=500. A larger per-person footprint need not mean a larger total."
   ],
   [
    "A factory reduces its footprint estimate but releases a toxic chemical not captured by that measure. What is the limitation?",
    "A lower footprint does not guarantee that every environmental impact improved",
    "Footprint accounting proves all toxic releases are zero",
    "One environmental metric automatically measures every possible effect",
    "Metrics have boundaries. Toxicity and other effects may need separate indicators and evidence."
   ],
   [
    "Which change would tend to reduce the carbon-related component of a footprint, other conditions equal?",
    "Reduce fossil-carbon emissions associated with consumption",
    "Increase fossil-carbon emissions without any other change",
    "Rename emissions as harmless without reducing them",
    "Lower carbon emissions reduce the associated biological uptake demand in this accounting framework, other factors equal."
   ],
   [
    "A household’s comparable footprint estimate falls from 10 to 8 global hectares. What is the percentage reduction?",
    "20%",
    "25%",
    "80%",
    "The decrease is 2 relative to the original 10: 2/10×100=20%. Use the original value as the denominator."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Use the same scale and accounting units",
    "head": "Concept",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Ecological footprint",
      "Demand on biological capacity"
     ],
     [
      "Biocapacity",
      "Available regenerative capacity"
     ],
     [
      "Global hectare",
      "World-average productive hectare"
     ]
    ]
   },
   {
    "t": "setups",
    "title": "A fictional regional comparison",
    "head": "Quantity",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Population × per-person footprint",
      "2000 × 3 = 6000 global hectares"
     ],
     [
      "Regional biocapacity",
      "8000 global hectares"
     ],
     [
      "Reserve = capacity − demand",
      "2000 global hectares"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What does an ecological footprint estimate?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What does biocapacity describe?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is a global hectare in footprint accounting?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fictional town has 2000 residents and a footprint of 3 global hectares per person. What is its total footprint?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A region’s biocapacity is 8000 global hectares and its footprint is 6000. What is the numerical biocapacity reserve?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A region’s footprint exceeds its local biocapacity. Which statement is warranted?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Town A has 100 residents at 4 global hectares each; Town B has 500 residents at 1 each. Which has the larger total footprint?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A factory reduces its footprint estimate but releases a toxic chemical not captured by that measure. What is the limitation?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which change would tend to reduce the carbon-related component of a footprint, other conditions equal?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A household’s comparable footprint estimate falls from 10 to 8 global hectares. What is the percentage reduction?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.12",
  "name": "Introduction to Sustainability",
  "skill": "s12",
  "boardTitle": "Introduction to Sustainability",
  "teach": [
   "Sustainability considers whether present resource use and well-being can be maintained without undermining future people’s needs and ecological support systems. For renewable resources, removals must be compatible with regeneration and ecosystem function. In a simplified annual balance, net natural addition of 80 units and harvest of 90 reduces the stock by 10 units. Sustainable yield is not a fixed label that remains valid through drought, habitat loss or changes in reproduction.",
   "Assess more than one indicator: soil condition, water quality, biodiversity, resource stocks, food production and greenhouse-gas trends can reveal different pressures. Recycling and efficiency can reduce demands but do not make finite mineral or fossil-fuel stocks regenerate on human timescales. A resource plan needs measurable goals, monitoring and revision when conditions change. A short-term output gain is insufficient evidence of long-term ecological and social sustainability."
  ],
  "eqs": [
   "Annual stock change = net natural addition 80 − harvest 90 = −10 units",
   "Measure multiple indicators → compare with goals → revise management"
  ],
  "boards": [
   [
    "Preserve the capacity to meet future needs",
    "Match renewable harvest to regeneration and function",
    "Yield estimates depend on ecological conditions"
   ],
   [
    "Use multiple environmental and social indicators",
    "Efficiency does not make finite stocks renewable",
    "Monitor outcomes and revise practices"
   ]
  ],
  "questions": [
   [
    "Which statement best expresses sustainability?",
    "Meet present needs while preserving future capacity and ecological support systems",
    "Maximize this year’s extraction regardless of later effects",
    "Assume all resources regenerate instantly",
    "Sustainability connects present use to future needs and ecosystem function. It does not mean unlimited extraction."
   ],
   [
    "A renewable stock gains a net 80 units naturally and loses 90 to harvest, with no other changes. What is its annual change?",
    "A decline of 10 units",
    "An increase of 170 units",
    "No change because it is called renewable",
    "The net change is 80−90=−10 units. Renewable resources can still be depleted by excessive removal."
   ],
   [
    "A drought reduces a forest’s net growth. What should happen to an unchanged harvest plan?",
    "Reassess it against the reduced growth and ecosystem needs",
    "Assume the previous yield estimate remains valid forever",
    "Increase harvest automatically because drought lowers growth",
    "Sustainable removals depend on current conditions. Lower renewal may require lower harvest or other adjustments."
   ],
   [
    "Why is biodiversity useful as one sustainability indicator?",
    "It reveals aspects of ecosystem condition not captured by output alone",
    "It measures every economic and environmental issue perfectly",
    "It makes water-quality measurement unnecessary",
    "Biodiversity can reflect ecological condition, but multiple indicators are needed because each has limits."
   ],
   [
    "A mine recycles more metal. Does this make the geological ore deposit renewable on human timescales?",
    "No; recycling can reduce new extraction without rapidly regenerating the deposit",
    "Yes; each recycled item instantly recreates the mined ore body",
    "Yes; finite deposits become unlimited whenever prices fall",
    "Recycling conserves material already extracted. It does not change the geological timescale of deposit formation."
   ],
   [
    "A farm raises output while its soil erodes faster than it forms. What long-term concern remains?",
    "Productive soil capacity may decline despite the short-term gain",
    "Higher output proves erosion cannot matter",
    "Soil loss automatically improves future fertility",
    "Current yield can coexist with degradation of the resource supporting future production."
   ],
   [
    "A plan calls itself sustainable but has no measurements or follow-up. What is most needed to evaluate it?",
    "Defined indicators, baseline conditions and continuing monitoring",
    "Only a more attractive title",
    "An assumption that the label proves the result",
    "Evaluation requires evidence relative to explicit goals and initial conditions. A label is not a measurement."
   ],
   [
    "An efficient irrigation upgrade lowers water used per hectare, but irrigated area expands greatly. What must be checked?",
    "Total water use as well as use per hectare",
    "Only the efficiency percentage, because total use must fall",
    "Only the number of equipment manuals",
    "Efficiency gains can be offset by increased scale. Total demand requires combining intensity with the extent of activity."
   ],
   [
    "A fishery keeps catch below estimated renewal but destroys essential breeding habitat. Why is the plan incomplete?",
    "Long-term renewal depends on habitat and ecosystem function as well as current removals",
    "Current catch alone guarantees every future population outcome",
    "Habitat cannot affect fish reproduction",
    "Sustainability includes maintaining the processes that regenerate the resource, not only satisfying one arithmetic comparison."
   ],
   [
    "A community compares water quality, soil loss, household access and resource stocks over time. What strength does this approach have?",
    "It examines several dimensions of sustainability",
    "It guarantees there are no remaining uncertainties",
    "It proves every indicator must move in the same direction",
    "Multiple indicators reveal tradeoffs and different outcomes. They improve understanding without removing all uncertainty."
   ]
  ],
  "check": [
   "A renewable resource gains a net 60 units annually under the stated conditions. Harvest is 75, with no other changes. What happens to its stock in one year?",
   "It falls by 15 units",
   "It rises by 135 units",
   "It is unchanged because the resource is renewable",
   "Compare the net natural addition with removal: 60−75."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Renewable does not mean unlimited",
    "head": "Annual balance",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Net natural addition",
      "80 units"
     ],
     [
      "Harvest",
      "90 units"
     ],
     [
      "Stock change",
      "80 − 90 = −10 units"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Sustainability requires follow-up",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      82,
      175
     ],
     "P1": [
      222,
      175
     ],
     "P2": [
      222,
      103
     ],
     "P3": [
      82,
      103
     ],
     "P4": [
      224,
      140
     ],
     "P5": [
      256,
      140
     ],
     "P6": [
      260,
      175
     ],
     "P7": [
      400,
      175
     ],
     "P8": [
      400,
      103
     ],
     "P9": [
      260,
      103
     ],
     "P10": [
      402,
      140
     ],
     "P11": [
      434,
      140
     ],
     "P12": [
      438,
      175
     ],
     "P13": [
      578,
      175
     ],
     "P14": [
      578,
      103
     ],
     "P15": [
      438,
      103
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
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
      "v": "P6P7P8P9",
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
       152,
       145
      ],
      "text": "Set goals",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Multiple goals",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Measure",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Baseline check",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Revise",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Use evidence",
      "col": 2
     },
     {
      "at": [
       320,
       56
      ],
      "text": "A label alone does not establish sustainable outcomes",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which statement best expresses sustainability?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A renewable stock gains a net 80 units naturally and loses 90 to harvest, with no other changes. What is its annual change?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A drought reduces a forest’s net growth. What should happen to an unchanged harvest plan?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why is biodiversity useful as one sustainability indicator?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A mine recycles more metal. Does this make the geological ore deposit renewable on human timescales?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A farm raises output while its soil erodes faster than it forms. What long-term concern remains?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A plan calls itself sustainable but has no measurements or follow-up. What is most needed to evaluate it?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An efficient irrigation upgrade lowers water used per hectare, but irrigated area expands greatly. What must be checked?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A fishery keeps catch below estimated renewal but destroys essential breeding habitat. Why is the plan incomplete?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A community compares water quality, soil loss, household access and resource stocks over time. What strength does this approach have?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A renewable resource gains a net 60 units annually under the stated conditions. Harvest is 75, with no other changes. What happens to its stock in one year?"
   ],
   "small": false
  }
 },
 {
  "code": "5.13",
  "name": "Methods to Reduce Urban Runoff",
  "skill": "s13",
  "boardTitle": "Methods to Reduce Urban Runoff",
  "teach": [
   "Urban runoff can be reduced by capturing, storing, infiltrating or evapotranspiring rainfall closer to where it falls. Rain gardens and vegetated swales slow and treat runoff; permeable pavement lets water enter a storage layer and, where suitable, the underlying soil. Green roofs retain some rain in vegetation and growing media and release it later through drainage and evapotranspiration. The best design depends on soil, groundwater, pollutants, space and storm size. Green infrastructure needs maintenance and cannot prevent every flood.",
   "To test a treatment, compare similar plots under comparable rainfall, measure runoff volume or pollutant load, and use replication. Keep relevant factors such as area and slope consistent or account for them. If conventional paving yields 24 m³ of runoff and a treatment yields 10 m³ in the same test, the measured reduction is 14 m³. Compact development and transit can indirectly reduce demand for paved land, but do not make an existing impermeable slab absorb water by themselves."
  ],
  "eqs": [
   "Rainfall → surface storage, infiltration and evapotranspiration → less rapid runoff",
   "Measured runoff reduction = 24 m³ − 10 m³ = 14 m³"
  ],
  "boards": [
   [
    "Capture rain near where it falls",
    "Match infiltration designs to site conditions",
    "Maintain systems and plan for large storms"
   ],
   [
    "Compare appropriate controls under similar conditions",
    "Measure runoff volume or pollutant load",
    "Separate direct infiltration from reduced paving demand"
   ]
  ],
  "questions": [
   [
    "Which feature most directly lets rain pass through a paved surface into a designed storage layer?",
    "Permeable pavement",
    "A sealed asphalt surface with no openings",
    "Painting conventional pavement blue",
    "Permeable pavement has pathways for water. Color alone does not change conventional pavement into an infiltration system."
   ],
   [
    "A planted shallow depression receives runoff from nearby paving. What stormwater feature is described?",
    "A rain garden",
    "An untreated smokestack",
    "A new ore deposit",
    "Rain gardens collect and treat runoff using vegetation and soil or engineered media. Their design must match site conditions."
   ],
   [
    "How can a green roof reduce rapid runoff?",
    "Retain some rain in vegetation and media and release it more slowly",
    "Guarantee that no rainfall ever leaves the building",
    "Make every roof structurally suitable without assessment",
    "Storage, drainage and evapotranspiration change runoff timing and volume. Capacity and structural suitability require design."
   ],
   [
    "Why must permeable pavement be maintained?",
    "Clogging can reduce water entry and performance",
    "It is immune to sediment accumulation",
    "Maintenance permanently eliminates all future storms",
    "Sediment and debris can obstruct openings. Maintenance helps preserve the intended hydrologic function."
   ],
   [
    "An infiltration project is proposed above contaminated soil and shallow groundwater. What should be evaluated?",
    "Whether infiltrating runoff could mobilize contaminants or create other site risks",
    "An assumption that infiltration is suitable everywhere",
    "Only the color of the project sign",
    "Infiltration is context-dependent. Groundwater depth, existing contamination and pollutant pathways influence appropriate design."
   ],
   [
    "Comparable test areas produce 24 m³ and 10 m³ of runoff under the same rain. What is the measured volume reduction?",
    "14 m³",
    "34 m³",
    "2.4 m³",
    "Subtract the treated volume from the reference volume: 24−10=14 m³."
   ],
   [
    "Which design most directly tests the effect of pavement type on runoff?",
    "Replicated similar plots differing in pavement type under comparable rainfall",
    "One steep paved slope in a storm versus a flat garden on a dry day",
    "A survey asking only which pavement looks nicer",
    "A controlled comparison isolates the treatment more effectively. Slope, rainfall and area can otherwise confound results."
   ],
   [
    "Why should pollutant load sometimes be measured as well as concentration?",
    "Total transported mass also depends on runoff volume",
    "Concentration always equals total mass regardless of flow",
    "Pollutants cannot be transported in water",
    "Load depends on both concentration and water volume. A lower concentration does not necessarily mean a lower total mass."
   ],
   [
    "A transit-oriented plan reduces the need for new parking lots. How can it help runoff management?",
    "It can avoid adding some impervious surface",
    "It instantly makes every existing road permeable",
    "It removes the need for all stormwater planning",
    "Reducing new paving can preserve infiltration opportunities. Existing surfaces and future storms still need management."
   ],
   [
    "A rain garden works during small storms but overflows in a very large storm. What does this show?",
    "The feature has finite capacity and needs an appropriate overflow plan",
    "All green infrastructure is useless under every condition",
    "A designed system can store unlimited water",
    "Performance depends on capacity and storm size. Overflow planning complements the benefits during smaller events."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "A rain garden manages nearby runoff",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      104,
      135
     ],
     "P1": [
      535,
      135
     ],
     "P2": [
      205,
      135
     ],
     "P3": [
      250,
      85
     ],
     "P4": [
      389,
      85
     ],
     "P5": [
      435,
      135
     ],
     "P6": [
      107,
      161
     ],
     "P7": [
      218,
      136
     ],
     "P8": [
      278,
      79
     ],
     "P9": [
      278,
      42
     ],
     "P10": [
      357,
      79
     ],
     "P11": [
      357,
      42
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P6P7",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
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
      "v": "P2P3P4P5",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Capture, slow, infiltrate or evapotranspire",
      "col": 0
     },
     {
      "at": [
       163,
       179
      ],
      "text": "Runoff",
      "col": 0
     },
     {
      "at": [
       320,
       113
      ],
      "text": "Planted basin",
      "col": 2
     },
     {
      "at": [
       320,
       19
      ],
      "text": "Infiltration where site conditions allow",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Matched fictional runoff trial",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      116,
      60
     ],
     "P1": [
      529,
      60
     ],
     "P2": [
      116,
      60
     ],
     "P3": [
      116,
      189
     ],
     "P4": [
      177,
      152
     ],
     "P5": [
      273,
      152
     ],
     "P6": [
      273,
      60
     ],
     "P7": [
      177,
      60
     ],
     "P8": [
      392,
      98.33333333333334
     ],
     "P9": [
      488,
      98.33333333333334
     ],
     "P10": [
      488,
      60
     ],
     "P11": [
      392,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [
     {
      "v": "P0P1",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P2P3",
      "col": 3,
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
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       96,
       56
      ],
      "text": "0",
      "col": 3
     },
     {
      "at": [
       320,
       214
      ],
      "text": "Runoff volume (m³)",
      "col": 0
     },
     {
      "at": [
       225,
       161
      ],
      "text": "24",
      "col": 1
     },
     {
      "at": [
       225,
       37
      ],
      "text": "Reference",
      "col": 1
     },
     {
      "at": [
       440,
       107.33333333333334
      ],
      "text": "10",
      "col": 2
     },
     {
      "at": [
       440,
       37
      ],
      "text": "Treatment",
      "col": 2
     },
     {
      "at": [
       320,
       14
      ],
      "text": "Reduction: 24 − 10 = 14m³",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which feature most directly lets rain pass through a paved surface into a designed storage layer?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A planted shallow depression receives runoff from nearby paving. What stormwater feature is described?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can a green roof reduce rapid runoff?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why must permeable pavement be maintained?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An infiltration project is proposed above contaminated soil and shallow groundwater. What should be evaluated?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Comparable test areas produce 24 m³ and 10 m³ of runoff under the same rain. What is the measured volume reduction?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which design most directly tests the effect of pavement type on runoff?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why should pollutant load sometimes be measured as well as concentration?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A transit-oriented plan reduces the need for new parking lots. How can it help runoff management?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A rain garden works during small storms but overflows in a very large storm. What does this show?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.14",
  "name": "Integrated Pest Management",
  "skill": "s14",
  "boardTitle": "Integrated Pest Management",
  "teach": [
   "Integrated pest management, or IPM, combines identification, monitoring, prevention and controls selected for the actual problem. An action threshold identifies when pest abundance or damage warrants action in the setting. The presence of one organism does not automatically justify treatment. Crop rotation, habitat management, barriers and natural enemies can reduce pressure. When needed, a carefully chosen pesticide can be part of IPM; IPM is not defined as either never using pesticides or spraying on a fixed calendar regardless of evidence.",
   "Evaluate effectiveness, risk and cost, then check the results. A hypothetical field has an action threshold of 5 damaging insects per square metre. A comparable sample estimate of 3 is below that stated threshold, so continued monitoring and prevention fit the rule; 7 exceeds it and calls for evaluating control. Thresholds depend on crop stage, pest biology and acceptable damage. IPM may require more knowledge, monitoring and labor while reducing unnecessary chemical use and some associated risks."
  ],
  "eqs": [
   "Identify → monitor → compare with threshold → select control → evaluate",
   "At threshold 5 insects/m², estimate 3 is below; estimate 7 exceeds it"
  ],
  "boards": [
   [
    "Identify and monitor before selecting controls",
    "Use prevention and an appropriate action threshold",
    "Targeted pesticide use can be part of IPM"
   ],
   [
    "Consider effectiveness, risk, cost and timing",
    "Thresholds are specific to pest and setting",
    "Evaluate the result and adjust management"
   ]
  ],
  "questions": [
   [
    "Which sequence best represents IPM?",
    "Identify and monitor pests, prevent problems and choose controls when justified",
    "Spray the same pesticide every day regardless of evidence",
    "Assume every visible organism is a crop pest",
    "IPM uses evidence and multiple methods. Routine spraying without identification or need does not follow that approach."
   ],
   [
    "What is an action threshold in pest management?",
    "A level of pest abundance or damage that warrants action in a specific setting",
    "A rule that every insect must always be eliminated",
    "The minimum height of every farm fence",
    "Thresholds connect observations to a management decision. They depend on the pest, crop and context."
   ],
   [
    "A stated action threshold is 5 damaging insects/m². Monitoring estimates 3, and no other trigger applies. Which response fits the rule?",
    "Continue monitoring and preventive management below the threshold",
    "Declare the threshold exceeded because 3 is greater than 5",
    "Apply every available chemical automatically",
    "The estimate is below the stated trigger. Continued monitoring can detect later changes."
   ],
   [
    "The action threshold is 5 damaging insects/m² and monitoring estimates 7. What follows under that rule?",
    "Evaluate an appropriate control because the threshold is exceeded",
    "Ignore all evidence because IPM forbids control",
    "Conclude that 7 is below 5",
    "The measured level exceeds the trigger. The control should be chosen for effectiveness and risk, not automatically maximized."
   ],
   [
    "Can pesticide use be part of IPM?",
    "Yes, when justified and selected within the broader management strategy",
    "No, IPM universally prohibits every pesticide",
    "Yes, but only if no monitoring is ever done",
    "IPM can include targeted chemical control along with prevention and other methods. It is not a blanket pesticide ban."
   ],
   [
    "A pest depends on one crop host. A suitable rotation includes a crop it cannot use. What benefit can follow?",
    "Disruption of the pest’s host availability",
    "Guaranteed elimination of every pest species forever",
    "An increase in host availability in every season",
    "Host-specific pests may be reduced by interrupting access to their host. Effects depend on pest biology and rotation design."
   ],
   [
    "A barrier keeps a crop pest away without killing all insects in the area. Which control category is illustrated?",
    "Physical control",
    "A change in the crop’s chromosome number by definition",
    "A fertilizer application",
    "Barriers physically prevent access. They are distinct from nutrient additions or genetic changes."
   ],
   [
    "Why preserve beneficial natural enemies in an IPM program?",
    "They can help suppress pest populations",
    "They guarantee that no monitoring is needed",
    "Every predator eats only the target pest by definition",
    "Natural enemies can contribute to control, but their effects and the resulting pest levels still require evaluation."
   ],
   [
    "An IPM program lowers pesticide use but requires frequent scouting. What tradeoff is shown?",
    "Reduced chemical reliance can involve additional knowledge and labor",
    "IPM always eliminates every cost",
    "Monitoring is unrelated to pest management",
    "Scouting provides decision-relevant information and can require time and expertise. Reduced inputs do not imply zero management cost."
   ],
   [
    "After a control action, what should an IPM team do?",
    "Monitor pest damage and non-target effects to evaluate the result",
    "Assume any action is permanently effective",
    "Discard all records so no comparison is possible",
    "Follow-up evidence shows whether the method worked and whether changes are needed. Effects can vary over time."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Integrated pest management",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      82,
      175
     ],
     "P1": [
      222,
      175
     ],
     "P2": [
      222,
      103
     ],
     "P3": [
      82,
      103
     ],
     "P4": [
      224,
      140
     ],
     "P5": [
      256,
      140
     ],
     "P6": [
      260,
      175
     ],
     "P7": [
      400,
      175
     ],
     "P8": [
      400,
      103
     ],
     "P9": [
      260,
      103
     ],
     "P10": [
      402,
      140
     ],
     "P11": [
      434,
      140
     ],
     "P12": [
      438,
      175
     ],
     "P13": [
      578,
      175
     ],
     "P14": [
      578,
      103
     ],
     "P15": [
      438,
      103
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 3,
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
      "v": "P6P7P8P9",
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
       152,
       145
      ],
      "text": "Identify",
      "col": 0
     },
     {
      "at": [
       152,
       120
      ],
      "text": "Pest and setting",
      "col": 0
     },
     {
      "at": [
       330,
       145
      ],
      "text": "Monitor",
      "col": 1
     },
     {
      "at": [
       330,
       120
      ],
      "text": "Compare threshold",
      "col": 1
     },
     {
      "at": [
       508,
       145
      ],
      "text": "Select controls",
      "col": 2
     },
     {
      "at": [
       508,
       120
      ],
      "text": "Evaluate afterward",
      "col": 2
     },
     {
      "at": [
       320,
       56
      ],
      "text": "Prevention and targeted controls work together",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "A fictional action rule",
    "head": "Monitoring result",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Threshold",
      "5 damaging insects/m²"
     ],
     [
      "Estimate: 3 insects/m²",
      "Below threshold: continue monitoring"
     ],
     [
      "Estimate: 7 insects/m²",
      "Above threshold: evaluate control"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which sequence best represents IPM?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is an action threshold in pest management?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A stated action threshold is 5 damaging insects/m². Monitoring estimates 3, and no other trigger applies. Which response fits the rule?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "The action threshold is 5 damaging insects/m² and monitoring estimates 7. What follows under that rule?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Can pesticide use be part of IPM?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A pest depends on one crop host. A suitable rotation includes a crop it cannot use. What benefit can follow?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A barrier keeps a crop pest away without killing all insects in the area. Which control category is illustrated?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why preserve beneficial natural enemies in an IPM program?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "An IPM program lowers pesticide use but requires frequent scouting. What tradeoff is shown?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "After a control action, what should an IPM team do?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.15",
  "name": "Sustainable Agriculture",
  "skill": "s15",
  "boardTitle": "Sustainable Agriculture",
  "teach": [
   "Soil conservation keeps soil protected and limits erosive movement. Contour farming follows lines of similar elevation across a slope; terraces shorten and reshape steep slopes; windbreaks slow wind; strips of different crops and perennial cover interrupt erosion pathways. No-till reduces soil disturbance and can retain residues, while cover crops protect soil between cash crops. These methods must fit local conditions, machinery and weed management; no-till alone does not guarantee zero herbicide use or perfect yields.",
   "Crop rotation diversifies management and can interrupt pest cycles. Legume-associated nitrogen-fixing bacteria can add biologically available nitrogen, and green manure returns plant material to soil. Agricultural limestone can raise the pH of overly acidic soil when appropriately applied; it is not a substitute for every nutrient or a way to turn all clay into sand. Rotational grazing allows recovery when stocking and rest periods fit plant growth. Evaluate soil loss, infiltration, fertility and yields over time."
  ],
  "eqs": [
   "Contour rows run across a slope, slowing downslope water movement",
   "Acidic soil + appropriate agricultural lime → higher pH, not universal nutrient replacement"
  ],
  "boards": [
   [
    "Keep cover and reduce unnecessary disturbance",
    "Match contouring, terraces and windbreaks to the site",
    "Evaluate erosion and production together"
   ],
   [
    "Use rotations and appropriate organic inputs",
    "Legume-associated bacteria can fix nitrogen",
    "Lime addresses acidity; grazing needs recovery time"
   ]
  ],
  "questions": [
   [
    "Crop rows follow equal-elevation contours across a hillside. Which practice is this?",
    "Contour farming",
    "Plowing straight down the steepest slope",
    "Aquaculture",
    "Contouring follows the slope’s level lines and can slow downslope runoff. It differs from rows directed downhill."
   ],
   [
    "A steep slope is reshaped into level or gently sloping steps for cultivation. What practice is described?",
    "Terracing",
    "Removing every soil barrier to accelerate runoff",
    "Saltwater intrusion",
    "Terraces shorten and reshape slopes to help manage water and erosion. Their design and maintenance still matter."
   ],
   [
    "Rows of trees are planted to slow wind across an exposed field. What is their main erosion-control role?",
    "Act as windbreaks",
    "Increase wind speed at all soil surfaces",
    "Create new mineral ore",
    "Windbreaks reduce wind exposure and can limit soil transport. Their effectiveness depends on placement and structure."
   ],
   [
    "A farmer leaves residues and plants without conventional plowing. Which practice is most directly described?",
    "No-till agriculture",
    "Clearcutting a forest stand",
    "Deep surface mining",
    "No-till reduces tillage disturbance and can retain protective residues. It still requires management of crops and weeds."
   ],
   [
    "A crop is grown between cash crops primarily to protect bare soil. What is it called?",
    "A cover crop",
    "Overburden",
    "A fossil fuel",
    "Cover crops maintain cover and living roots during otherwise bare periods and can provide additional soil benefits."
   ],
   [
    "How can legumes contribute new biologically available nitrogen to a cropping system?",
    "Through nitrogen-fixing bacteria associated with their roots",
    "By making nitrogen atoms from sunlight alone",
    "By converting all phosphorus atoms into nitrogen",
    "Symbiotic microbes can convert atmospheric nitrogen into biologically usable forms. The plants do not create nitrogen atoms."
   ],
   [
    "Plant material is grown and returned to the soil to improve it. Which practice is described?",
    "Green manure",
    "An automatic elimination of every nutrient loss",
    "Smelting",
    "Returning plant material adds organic matter and nutrients through decomposition. It does not guarantee that all losses stop."
   ],
   [
    "A soil test shows excessive acidity for the intended crop. What can appropriate agricultural limestone do?",
    "Raise soil pH",
    "Supply every needed nutrient in all circumstances",
    "Convert all clay particles into sand instantly",
    "Lime neutralizes acidity and raises pH. Its use should follow soil needs; it is not a universal fertilizer or texture converter."
   ],
   [
    "Why can alternating crops help manage a host-specific pest?",
    "A nonhost crop can interrupt the pest’s life cycle or food supply",
    "Every rotation guarantees removal of every organism",
    "Rotation eliminates all need to understand pest biology",
    "Benefits depend on whether the new crop supports the pest and on its life history. A relevant rotation can interrupt persistence."
   ],
   [
    "A farm adopts no-till but relies on herbicides for some weed control. Which conclusion is valid?",
    "Reduced tillage does not automatically mean zero herbicide use",
    "The farm cannot be no-till if any herbicide is used",
    "No-till guarantees identical results on every soil",
    "Tillage intensity and chemical weed control are different management choices. Systems combine practices in different ways."
   ]
  ],
  "check": [
   "A field is losing dry topsoil during strong winds. Which proposed measure most directly addresses that transport mechanism?",
   "Install suitable windbreaks and retain protective cover",
   "Remove all vegetation to expose more bare soil",
   "Increase wind speed across the field",
   "Reducing wind exposure and protecting the surface can limit wind erosion."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Contour farming across a slope",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      110,
      170
     ],
     "P1": [
      230,
      182
     ],
     "P2": [
      230,
      182
     ],
     "P3": [
      390,
      182
     ],
     "P4": [
      390,
      182
     ],
     "P5": [
      525,
      170
     ],
     "P6": [
      110,
      139
     ],
     "P7": [
      230,
      151
     ],
     "P8": [
      230,
      151
     ],
     "P9": [
      390,
      151
     ],
     "P10": [
      390,
      151
     ],
     "P11": [
      525,
      139
     ],
     "P12": [
      110,
      108
     ],
     "P13": [
      230,
      120
     ],
     "P14": [
      230,
      120
     ],
     "P15": [
      390,
      120
     ],
     "P16": [
      390,
      120
     ],
     "P17": [
      525,
      108
     ],
     "P18": [
      110,
      77
     ],
     "P19": [
      230,
      89
     ],
     "P20": [
      230,
      89
     ],
     "P21": [
      390,
      89
     ],
     "P22": [
      390,
      89
     ],
     "P23": [
      525,
      77
     ],
     "P24": [
      564,
      166
     ],
     "P25": [
      564,
      68
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
      "w": 3
     },
     {
      "v": "P2P3",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P4P5",
      "col": 0,
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
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P20P21",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P22P23",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P24P25",
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
       320,
       213
      ],
      "text": "Contour rows follow similar elevations",
      "col": 0
     },
     {
      "at": [
       520,
       34
      ],
      "text": "Downslope direction",
      "col": 3
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Different soil needs, different responses",
    "head": "Need",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Protect soil between cash crops",
      "Use an appropriate cover crop"
     ],
     [
      "Reduce excessive acidity",
      "Apply lime according to soil needs"
     ],
     [
      "Interrupt a host-specific pest",
      "Use a suitable rotation"
     ],
     [
      "Recover grazed vegetation",
      "Allow rest and manage stocking"
     ]
    ]
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Crop rows follow equal-elevation contours across a hillside. Which practice is this?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A steep slope is reshaped into level or gently sloping steps for cultivation. What practice is described?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Rows of trees are planted to slow wind across an exposed field. What is their main erosion-control role?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A farmer leaves residues and plants without conventional plowing. Which practice is most directly described?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A crop is grown between cash crops primarily to protect bare soil. What is it called?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can legumes contribute new biologically available nitrogen to a cropping system?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Plant material is grown and returned to the soil to improve it. Which practice is described?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A soil test shows excessive acidity for the intended crop. What can appropriate agricultural limestone do?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why can alternating crops help manage a host-specific pest?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A farm adopts no-till but relies on herbicides for some weed control. Which conclusion is valid?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A field is losing dry topsoil during strong winds. Which proposed measure most directly addresses that transport mechanism?"
   ],
   "small": false
  }
 },
 {
  "code": "5.16",
  "name": "Aquaculture",
  "skill": "s16",
  "boardTitle": "Aquaculture",
  "teach": [
   "Aquaculture farms aquatic organisms, including finfish, shellfish and seaweeds. It can add food production and support restoration, but impacts differ greatly among organisms and systems. Fed finfish operations require feed and produce waste; shellfish and seaweed often use naturally available food or nutrients without added feed. Open systems exchange with surrounding water; recirculating systems treat and reuse much of their water but require equipment, energy and waste handling. Neither type is impact-free.",
   "Uneaten feed and waste can add nutrients and oxygen-demanding organic matter. Disease can spread in crowded conditions, and escaped farmed organisms may compete, transmit disease or interbreed with wild populations depending on species and setting. Good siting, appropriate density, biosecurity, containment and effluent management can reduce risks. Compare feed sources and energy needs as well as harvest output. A system using less water may still use more electricity; evaluate the full tradeoff."
  ],
  "eqs": [
   "Fed fish + uneaten feed and waste → nutrient and organic loads to manage",
   "Recirculation reduces new-water demand but requires treatment and energy"
  ],
  "boards": [
   [
    "Aquaculture includes fish, shellfish and seaweed",
    "Species and system design change environmental impacts",
    "Open and recirculating systems have tradeoffs"
   ],
   [
    "Manage feed, waste, density and disease",
    "Containment helps reduce escape risks",
    "Evaluate water, energy and ecological effects together"
   ]
  ],
  "questions": [
   [
    "Which activity is aquaculture?",
    "Farming oysters in a managed growing area",
    "Only catching wild fish without cultivating them",
    "Mining limestone from a quarry",
    "Aquaculture cultivates aquatic organisms. It is distinct from capture fishing and mineral extraction."
   ],
   [
    "Why should fed finfish farming be distinguished from seaweed farming?",
    "Feed inputs and nutrient pathways can differ substantially",
    "Every aquaculture system has identical inputs and wastes",
    "Seaweed cannot use dissolved nutrients",
    "Different organisms and production methods have different input needs and ecological effects."
   ],
   [
    "Uneaten feed accumulates beneath a fish farm. Which impact can follow?",
    "Organic decomposition increases oxygen demand",
    "The feed guarantees unlimited dissolved oxygen",
    "Organic matter cannot affect aquatic conditions",
    "Microbial breakdown consumes oxygen. Excess organic loading can harm water or sediment conditions if not adequately dispersed or managed."
   ],
   [
    "Farmed fish escape into a river with compatible wild populations. Which concern is plausible?",
    "Competition or interbreeding can affect wild populations",
    "Every escaped fish is guaranteed harmless in every ecosystem",
    "Escapes always create exactly the same effect for all species",
    "Effects depend on species, genetics and ecology. Competition, disease and interbreeding are possible risks rather than universal outcomes."
   ],
   [
    "High stocking density increases close contact among farmed fish. Which management concern follows?",
    "Disease transmission and water-quality stress",
    "Guaranteed elimination of all pathogens",
    "Complete independence from water-quality monitoring",
    "Density can affect contact and waste accumulation. Appropriate stocking and health management reduce risks."
   ],
   [
    "A recirculating system reuses treated water but requires pumps and filters. What tradeoff is shown?",
    "Lower new-water demand can come with energy and equipment requirements",
    "Water reuse guarantees zero electricity use",
    "Filtration makes waste cease to exist",
    "Recirculation can conserve water while requiring treatment, energy and residual-waste management."
   ],
   [
    "Which measure directly reduces the risk of farmed fish escaping from cages?",
    "Maintain suitable containment equipment and inspect it regularly",
    "Ignore damaged nets until after harvest",
    "Assume cage names prevent escape",
    "Containment design, inspection and maintenance address physical escape pathways."
   ],
   [
    "A feed formulation replaces some wild-fish-derived ingredients with suitable alternatives. What pressure can it reduce?",
    "Demand for wild fish used as feed inputs",
    "Every environmental impact of the farm automatically",
    "The need for the farmed fish to obtain nutrients",
    "Appropriate alternatives can reduce a particular input demand. Nutritional performance and other impacts still need evaluation."
   ],
   [
    "Shellfish and seaweed are harvested from a well-managed farm. What potential ecosystem service can accompany production?",
    "Removal of some nutrients incorporated into harvested biomass",
    "Guaranteed removal of every pollutant from the entire ocean",
    "Permanent elimination of all need for site assessment",
    "Harvest can remove nutrients contained in biomass. Scale, species and local conditions determine the effect."
   ],
   [
    "Two aquaculture systems produce equal edible output. One uses less freshwater but more electricity. What is the sound comparison?",
    "Evaluate both resource demands and the electricity source under matching boundaries",
    "Declare the first impact-free solely because it uses less water",
    "Ignore all effects beyond the farm gate regardless of the question",
    "Different impact categories can move in opposite directions. Comparable system boundaries and energy sources help assess the tradeoff."
   ]
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Aquaculture systems vary",
    "head": "System",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Fed finfish",
      "Feed and waste require management"
     ],
     [
      "Shellfish or seaweed",
      "Often no added feed input"
     ],
     [
      "Open water systems",
      "Exchange with surrounding water"
     ],
     [
      "Recirculating systems",
      "Treatment, reuse and energy demands"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "A simplified recirculating system",
    "view": [
     44,
     596,
     0,
     224
    ],
    "pts": {
     "P0": [
      93,
      174
     ],
     "P1": [
      273,
      174
     ],
     "P2": [
      273,
      82
     ],
     "P3": [
      93,
      82
     ],
     "P4": [
      367,
      174
     ],
     "P5": [
      547,
      174
     ],
     "P6": [
      547,
      82
     ],
     "P7": [
      367,
      82
     ],
     "P8": [
      278,
      157
     ],
     "P9": [
      361,
      157
     ],
     "P10": [
      362,
      96
     ],
     "P11": [
      279,
      96
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
      "col": 2,
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
     }
    ],
    "notes": [
     {
      "at": [
       183,
       141
      ],
      "text": "Culture tank",
      "col": 0
     },
     {
      "at": [
       183,
       114
      ],
      "text": "Aquatic organisms",
      "col": 0
     },
     {
      "at": [
       457,
       141
      ],
      "text": "Water treatment",
      "col": 2
     },
     {
      "at": [
       457,
       114
      ],
      "text": "Manage residuals",
      "col": 2
     },
     {
      "at": [
       320,
       52
      ],
      "text": "Water reused; pumping and treatment require energy",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which activity is aquaculture?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why should fed finfish farming be distinguished from seaweed farming?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Uneaten feed accumulates beneath a fish farm. Which impact can follow?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Farmed fish escape into a river with compatible wild populations. Which concern is plausible?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "High stocking density increases close contact among farmed fish. Which management concern follows?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A recirculating system reuses treated water but requires pumps and filters. What tradeoff is shown?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which measure directly reduces the risk of farmed fish escaping from cages?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A feed formulation replaces some wild-fish-derived ingredients with suitable alternatives. What pressure can it reduce?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Shellfish and seaweed are harvested from a well-managed farm. What potential ecosystem service can accompany production?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Two aquaculture systems produce equal edible output. One uses less freshwater but more electricity. What is the sound comparison?"
    ],
    "small": false
   }
  }
 },
 {
  "code": "5.17",
  "name": "Sustainable Forestry",
  "skill": "s17",
  "boardTitle": "Sustainable Forestry",
  "teach": [
   "Sustainable forestry aims to maintain forest functions while meeting human needs. Practices can include retaining habitat features and stream buffers, planning roads carefully, supporting appropriate regeneration and matching harvest to long-term ecological capacity. Reusing wood and reducing waste can lower demand for new extraction. Replanting one tree for each harvested tree is not by itself proof that carbon, species diversity, soil and habitat are restored; size, age, species, survival and location matter.",
   "Forest health measures depend on the disturbance and ecosystem. Integrated pest management can combine surveillance and targeted controls, sometimes including removal of affected trees when evidence supports it. In suitable fire-adapted systems, prescribed fire under an approved professional plan can reduce hazardous fuels and support ecological processes. It produces smoke and carries risks, and it cannot prevent all wildfires. Evaluate local conditions, public health, safety, habitat and long-term monitoring rather than applying one technique everywhere."
  ],
  "eqs": [
   "Regeneration + retained habitat + soil and water protection → multiple forest functions",
   "Appropriate prescribed fire → lower fuel loads, with smoke and implementation risks"
  ],
  "boards": [
   [
    "Manage timber alongside habitat, soil, water and carbon",
    "Tree counts alone do not measure recovery",
    "Reuse wood and reduce unnecessary demand"
   ],
   [
    "Choose pest controls using evidence",
    "Prescribed fire fits some ecosystems and conditions",
    "No treatment prevents every wildfire or pest impact"
   ]
  ],
  "questions": [
   [
    "Which plan best supports multiple forest functions?",
    "Combine suitable regeneration with habitat retention and soil and water protection",
    "Judge success only by this year’s timber volume",
    "Remove every stream buffer to simplify transport",
    "Sustainable forestry considers ecological functions alongside timber. One short-term output measure is insufficient."
   ],
   [
    "A logger plants one seedling per mature tree cut. Why does this count alone not prove full recovery?",
    "Tree size, age, species, survival and habitat roles differ",
    "Every seedling instantly stores as much carbon as a mature tree",
    "Tree species and survival never matter",
    "Counts do not capture biomass, structure, survival or ecosystem roles. Recovery must be evaluated with relevant evidence."
   ],
   [
    "How can reuse of structural wood reduce forest pressure?",
    "It can reduce demand for newly harvested material",
    "It creates unlimited new forest area instantly",
    "It prevents every forest disease",
    "Reuse can displace some new extraction. It does not guarantee all forest problems disappear."
   ],
   [
    "A forest road is planned beside an erodible streambank. Which change addresses a water-quality risk?",
    "Choose a less damaging route and control drainage and sediment",
    "Direct runoff from exposed road surfaces into the stream",
    "Remove all vegetation from both banks",
    "Road placement and drainage influence sediment delivery. Avoiding sensitive areas and controlling runoff can reduce impacts."
   ],
   [
    "A pest outbreak affects part of a forest. Which approach fits integrated management?",
    "Identify the pest, monitor effects and select justified targeted responses",
    "Remove all trees everywhere without identifying the problem",
    "Assume every insect is harmful",
    "Correct identification and evidence guide proportional controls. Some organisms are beneficial or harmless."
   ],
   [
    "What is one purpose of professionally planned prescribed fire in an appropriate fire-adapted forest?",
    "Reduce hazardous fuels and support selected ecological objectives",
    "Guarantee that no future wildfire can occur",
    "Make smoke production physically impossible",
    "Prescribed fire can reduce fuels and support ecosystem processes. It still has smoke and implementation risks and cannot eliminate all wildfire."
   ],
   [
    "Why should prescribed-fire plans consider weather and smoke-sensitive communities?",
    "Fire behavior and smoke impacts depend on conditions and exposure",
    "Smoke never affects anything outside the ignition point",
    "A written plan makes all weather conditions identical",
    "Weather affects fire spread and smoke transport, while exposure shapes impacts. Planning must account for those variables."
   ],
   [
    "A forestry technique works in one ecosystem. What should be checked before applying it elsewhere?",
    "Local species, disturbance regimes, soils and management objectives",
    "Only whether the forests share a nickname",
    "An assumption that every forest responds identically",
    "Forest responses vary by ecological setting and goals. A successful technique is not automatically suitable everywhere."
   ],
   [
    "A forest’s timber volume recovers but old-tree nesting habitat remains scarce. What does this show?",
    "One recovery metric can improve while another ecological function remains limited",
    "Timber volume perfectly measures every habitat requirement",
    "Nesting species cannot depend on forest structure",
    "Volume and habitat structure measure different properties. Multiple indicators are needed to evaluate recovery."
   ],
   [
    "Which evidence best evaluates a long-term forestry plan?",
    "Repeated measurements of regeneration, harvest, habitat, soils and water",
    "Only a one-day photograph of the entrance sign",
    "Only the claim that the plan is sustainable",
    "Repeated relevant measurements reveal trends and tradeoffs. Labels and isolated images cannot establish long-term performance."
   ]
  ],
  "check": [
   "A manager claims planting equal numbers of seedlings fully replaces a harvested mature forest immediately. What evidence is missing?",
   "Growth, survival, carbon stocks and habitat recovery over time",
   "Only proof that seedlings and mature trees share the word tree",
   "No evidence is needed if the seedling count matches",
   "Matching counts do not establish matching biomass, structure, survival or ecological function."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Evaluate more than a tree count",
    "head": "Forest function",
    "cols": [
     "Mechanism or meaning"
    ],
    "rows": [
     [
      "Regeneration",
      "Species, survival and growth"
     ],
     [
      "Habitat",
      "Structure and connectivity"
     ],
     [
      "Soils and water",
      "Erosion and water quality"
     ],
     [
      "Carbon",
      "Stocks and flows over time"
     ]
    ]
   },
   {
    "t": "passages",
    "title": "Prescribed fire is a context-dependent tool",
    "texts": [
     "Under an appropriate professional plan, fire can reduce hazardous fuels and support selected ecological processes.",
     "Smoke, weather, safety and ecological effects still require evaluation. It cannot prevent every wildfire."
    ],
    "small": true
   }
  ],
  "qpics": {
   "0": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which plan best supports multiple forest functions?"
    ],
    "small": false
   },
   "1": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A logger plants one seedling per mature tree cut. Why does this count alone not prove full recovery?"
    ],
    "small": false
   },
   "2": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "How can reuse of structural wood reduce forest pressure?"
    ],
    "small": false
   },
   "3": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A forest road is planned beside an erodible streambank. Which change addresses a water-quality risk?"
    ],
    "small": false
   },
   "4": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A pest outbreak affects part of a forest. Which approach fits integrated management?"
    ],
    "small": false
   },
   "5": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "What is one purpose of professionally planned prescribed fire in an appropriate fire-adapted forest?"
    ],
    "small": false
   },
   "6": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Why should prescribed-fire plans consider weather and smoke-sensitive communities?"
    ],
    "small": false
   },
   "7": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A forestry technique works in one ecosystem. What should be checked before applying it elsewhere?"
    ],
    "small": false
   },
   "8": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "A forest’s timber volume recovers but old-tree nesting habitat remains scarce. What does this show?"
    ],
    "small": false
   },
   "9": {
    "t": "passages",
    "title": "Read and decide",
    "texts": [
     "Which evidence best evaluates a long-term forestry plan?"
    ],
    "small": false
   }
  },
  "checkPic": {
   "t": "passages",
   "title": "Try it: use the evidence",
   "texts": [
    "A manager claims planting equal numbers of seedlings fully replaces a harvested mature forest immediately. What evidence is missing?"
   ],
   "small": false
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Connect resource use to changes in soil, water, organisms and people. Compare agriculture, fisheries, mining, cities and forestry by explaining a specific mechanism and a feasible response. Match interventions to local conditions and evaluate their tradeoffs. Distinguish withdrawals from consumptive water use, natural selection from purposeful change, and resource demand from regenerative capacity. Check units, denominators and assumptions in calculations. Sustainable management requires evidence, monitoring and attention to future needs; no single technique guarantees zero impact.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"science-h-ap-enviro-land-and-water-use","subject":"science","level":5,"grade":9,"standard":"AP Environmental Science Unit5, topics5.1–5.17; EIN-2.A–N and STB-1.A–G; 2026 CED and clarifications","title":"Land and Water Use","goal":"Explain land and water impacts, compare management choices and justify solutions using ecological mechanisms and quantitative evidence.","points":20,"progression":{"requires":["science-h-ap-enviro-earth-systems-and-resources"],"operations":3,"demand":"Trace an environmental mechanism, calculate a stated scenario and evaluate a context-dependent management response."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
