/* Original course unit. Review record: docs/review/lessons/high-completion/world-geography-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "NGS 1",
  "name": "Maps, location and scale",
  "skill": "s1",
  "teach": [
   "Europe occupies the western part of Eurasia, north of the Mediterranean Sea; Africa extends south of that sea across the Equator. Both continents include places east and west of the prime meridian. Latitude measures north or south of the Equator, and longitude measures east or west of the prime meridian. On a north-up map, east is to the right. For an approximate reference grid, Paris is near 49° N, 2° E; Cairo near 30° N, 31° E; and Lagos near 6° N, 3° E. Cairo is east and south of Paris, while Lagos is closer to the Equator. These rounded locations are reference points, not surveyed coordinates. Do not read longitude as distance north.",
   "A map's scale relates map distance to ground distance. If a fictional map uses 1 cm for 80 km, a 4.5 cm segment represents 360 km. A ratio of 1:8,000,000 gives the same result because 8,000,000 cm is 80 km. A straight segment estimates straight-line distance, not a road route. To compare population concentrations, use a density map with a stated denominator instead of total population alone. Read the legend, date, units and projection: a projection can enlarge areas at high latitudes. An equal-area projection preserves relative area, but does not preserve every distance or shape. Enlarging a digital image changes a printed ratio's physical scale; a scale bar resized with the image still works."
  ],
  "boards": [
   [
    "Latitude: north or south of the Equator",
    "Longitude: east or west of the prime meridian",
    "Paris ~49° N, 2° E; Cairo ~30° N, 31° E",
    "Lagos ~6° N, 3° E"
   ],
   [
    "Fictional scale: 1 cm represents 80 km",
    "4.5 cm × 80 km/cm = 360 km",
    "Straight-line distance differs from road distance",
    "Read the legend, date, units and projection"
   ]
  ],
  "eqs": [
   "30° N is south of 49° N; 31° E is east of 2° E",
   "4.5 × 80 = 360 km; 8,000,000 cm = 80 km"
  ],
  "questions": [
   [
    "What sea lies between southern Europe and northern Africa?",
    "Mediterranean Sea",
    "Baltic Sea",
    "Arabian Sea",
    "The Mediterranean borders southern Europe and northern Africa; it is a useful regional reference feature."
   ],
   [
    "A reference grid gives Paris as 49° N, 2° E and Cairo as 30° N, 31° E. Where is Cairo relative to Paris?",
    "Southeast",
    "Northwest",
    "Southwest",
    "Cairo has a lower northern latitude and a higher eastern longitude, so it lies south and east of Paris."
   ],
   [
    "Which reference point is closest to the Equator: Paris at 49° N, Cairo at 30° N or Lagos at 6° N?",
    "Lagos",
    "Cairo",
    "Paris",
    "Compare absolute latitude with zero. Six degrees north is closer to the Equator than 30 or 49 degrees north."
   ],
   [
    "A traveler at 12° S, 18° E is in which hemispheres?",
    "Southern and Eastern",
    "Northern and Eastern",
    "Southern and Western",
    "S indicates south of the Equator; E indicates east of the prime meridian, independently of latitude."
   ],
   [
    "A fictional European route measures 6 cm on a map where 1 cm represents 75 km. What straight-line distance does it represent?",
    "450 km",
    "12.5 km",
    "81 km",
    "Multiply map distance by the scale: 6 times 75 gives 450 kilometers, not the length of a winding road."
   ],
   [
    "On a map with ratio 1:5,000,000, what distance does 1 cm represent? Use 100,000 cm = 1 km.",
    "50 km",
    "500 km",
    "5 km",
    "Divide 5,000,000 centimeters by 100,000 centimeters per kilometer to obtain 50 kilometers."
   ],
   [
    "An analyst compares population concentration in differently sized African districts. Which map is most directly useful?",
    "People per square kilometer",
    "Total people without district area",
    "Total road length without district area",
    "Density divides population by area, allowing a comparison of concentration across unequal district sizes."
   ],
   [
    "A high-latitude region looks enormous on a Mercator map. What should a student check before comparing its area with an equatorial region?",
    "Projection distortion",
    "Only the font size",
    "Only the north arrow",
    "Mercator enlarges areas away from the Equator, so displayed area is not a direct comparison of true area."
   ],
   [
    "A map is enlarged to twice its printed width and height. Which scale remains usable if enlarged with it?",
    "Its graphic scale bar",
    "Its unchanged printed ratio as a physical scale",
    "Its original centimeters-per-kilometer statement",
    "The scale bar stretches with the map features; the original numerical scale no longer describes physical centimeters."
   ],
   [
    "A city road winds around a mountain. What does a straight line between its endpoints measure?",
    "Straight-line separation",
    "The exact driving distance",
    "The exact travel time",
    "A straight-line measurement does not include the road's bends or information about travel speed and traffic."
   ],
   [
    "A student compares two choropleth maps of unemployment. What must be checked before treating darker areas as equally unemployed?",
    "The legends and class intervals",
    "Only whether both use blue",
    "Only whether both show Europe",
    "Maps can assign the same color to different value ranges; compare definitions, dates and legend intervals."
   ],
   [
    "What does an equal-area map projection preserve?",
    "Relative areas",
    "Every local shape and distance",
    "Every travel bearing and distance",
    "Equal-area projections preserve area relationships while other properties, such as shape, can be distorted."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Reference grid: rounded locations, unequal axis scales",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      150,
      212
     ],
     "P1": [
      150,
      56
     ],
     "P2": [
      230,
      212
     ],
     "P3": [
      230,
      56
     ],
     "P4": [
      310,
      212
     ],
     "P5": [
      310,
      56
     ],
     "P6": [
      390,
      212
     ],
     "P7": [
      390,
      56
     ],
     "P8": [
      470,
      212
     ],
     "P9": [
      470,
      56
     ],
     "P10": [
      150,
      56
     ],
     "P11": [
      470,
      56
     ],
     "P12": [
      150,
      108
     ],
     "P13": [
      470,
      108
     ],
     "P14": [
      150,
      160
     ],
     "P15": [
      470,
      160
     ],
     "P16": [
      150,
      212
     ],
     "P17": [
      470,
      212
     ],
     "P18": [
      166,
      183.4
     ],
     "P19": [
      398,
      134
     ],
     "P20": [
      174,
      71.6
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20",
    "dots": "",
    "polys": [],
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P2P3",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P4P5",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P6P7",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P8P9",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P10P11",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P12P13",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P14P15",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P16P17",
      "col": 0,
      "arrows": 0,
      "dash": true,
      "w": 1
     }
    ],
    "circles": [
     {
      "c": "P18",
      "r": 5,
      "col": 1
     },
     {
      "c": "P19",
      "r": 5,
      "col": 2
     },
     {
      "c": "P20",
      "r": 5,
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       150,
       38
      ],
      "text": "0°",
      "col": 0
     },
     {
      "at": [
       230,
       38
      ],
      "text": "10° E",
      "col": 0
     },
     {
      "at": [
       310,
       38
      ],
      "text": "20° E",
      "col": 0
     },
     {
      "at": [
       390,
       38
      ],
      "text": "30° E",
      "col": 0
     },
     {
      "at": [
       470,
       38
      ],
      "text": "40° E",
      "col": 0
     },
     {
      "at": [
       110,
       56
      ],
      "text": "Equator",
      "col": 0
     },
     {
      "at": [
       110,
       108
      ],
      "text": "20° N",
      "col": 0
     },
     {
      "at": [
       110,
       160
      ],
      "text": "40° N",
      "col": 0
     },
     {
      "at": [
       110,
       212
      ],
      "text": "60° N",
      "col": 0
     },
     {
      "at": [
       191,
       195.4
      ],
      "text": "Paris",
      "col": 1
     },
     {
      "at": [
       436,
       136
      ],
      "text": "Cairo",
      "col": 2
     },
     {
      "at": [
       208,
       78.6
      ],
      "text": "Lagos",
      "col": 3
     },
     {
      "at": [
       525,
       200
      ],
      "text": "N ↑",
      "col": 0
     },
     {
      "at": [
       525,
       178
      ],
      "text": "E →",
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Fictional map scale: lengths shown proportionally",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      110,
      160
     ],
     "P1": [
      290,
      160
     ],
     "P2": [
      110,
      160
     ],
     "P3": [
      290,
      160
     ],
     "P4": [
      390,
      160
     ],
     "P5": [
      470,
      160
     ],
     "P6": [
      390,
      167
     ],
     "P7": [
      390,
      153
     ],
     "P8": [
      430,
      167
     ],
     "P9": [
      430,
      153
     ],
     "P10": [
      470,
      167
     ],
     "P11": [
      470,
      153
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "polys": [],
    "segs": [
     {
      "v": "P0P1",
      "col": 1,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P4P5",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 4
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
     }
    ],
    "circles": [
     {
      "c": "P2",
      "r": 5,
      "col": 1
     },
     {
      "c": "P3",
      "r": 5,
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       110,
       180
      ],
      "text": "P",
      "col": 1
     },
     {
      "at": [
       290,
       180
      ],
      "text": "Q",
      "col": 1
     },
     {
      "at": [
       200,
       134
      ],
      "text": "4.5 cm on the map",
      "col": 1
     },
     {
      "at": [
       390,
       134
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       430,
       134
      ],
      "text": "80",
      "col": 0
     },
     {
      "at": [
       470,
       134
      ],
      "text": "160 km",
      "col": 0
     },
     {
      "at": [
       430,
       180
      ],
      "text": "2 cm scale bar",
      "col": 2
     },
     {
      "at": [
       320,
       78
      ],
      "text": "1 cm = 80 km; P to Q = 360 km",
      "col": 0
     }
    ]
   }
  ]
 },
 {
  "code": "NGS 4",
  "name": "Physical features and climates",
  "skill": "s2",
  "teach": [
   "Europe's irregular coast includes the Iberian Peninsula in the southwest, the Italian Peninsula extending into the Mediterranean, and Scandinavia in the north. The Pyrenees separate much of Spain from France; the Alps form a major mountain arc north of much of Italy. The North European Plain offers broad lowland corridors, although actual transport also depends on infrastructure and borders. The Rhine reaches the North Sea; the Danube reaches the Black Sea. A drainage basin includes land whose runoff reaches a shared river system. Rivers cross political boundaries, so an upstream action can affect a different country downstream. Never assume all European rivers have the same outlet.",
   "Africa contains deserts, rainforests, grasslands, highlands and large cities. The Sahara lies across North Africa. Immediately south, the Sahel is a semiarid transition toward wetter savanna environments, not another name for the whole continent. The Atlas Mountains lie in northwestern Africa, while the Ethiopian Highlands and East African Rift lie farther east. The Congo Basin contains extensive equatorial rainforest. The Nile flows generally north toward the Mediterranean; the Congo River reaches the Atlantic. River directions follow terrain, not a rule that all rivers flow south. Compare a basin boundary with national borders to see why water management often requires cooperation.",
   "Latitude, elevation, winds and nearby water interact to shape climate. Atlantic influence helps moderate temperatures in western Europe; more continental interiors often have larger annual temperature ranges. Mediterranean climates typically have dry summers and wetter winters. Alpine elevations can be cold even south of northern European lowlands. For two fictional stations at similar latitudes, a coast's coldest and warmest monthly means of 6 and 20 °C give a 14 °C range, while an interior's -4 and 24 °C give 28 °C. This comparison is consistent with maritime moderation, but two stations alone cannot isolate the ocean's effect from all other causes.",
   "African rainfall is spatially and seasonally varied. Equatorial rainforest areas contrast with the arid Sahara and the seasonally wet savannas. Seasonal movement of tropical rain belts helps produce the Sahel's wet and dry seasons; a wet-season flood can occur in a region that also experiences drought. Some northern coasts and the southwestern Cape have Mediterranean-type winter rainfall. Seasons are reversed between the Northern and Southern Hemispheres, so January is summer in the Cape. Higher African terrain is generally cooler than nearby lowlands. Use a stated rate for an elevation model, not a universal exact rule: a fictional 26 °C lowland with a 6 °C decrease per 1,000 m gives 14 °C at 2,000 m."
  ],
  "boards": [
   [
    "Iberian southwest; Italian south; Scandinavian north",
    "Pyrenees: Spain-France mountain boundary",
    "Alps: major mountain arc in Europe",
    "Rhine → North Sea; Danube → Black Sea"
   ],
   [
    "Sahara north; Sahel along its southern margin",
    "Atlas northwest; highlands and rift farther east",
    "Congo Basin: extensive equatorial rainforest",
    "Nile → Mediterranean; Congo → Atlantic"
   ],
   [
    "Ocean influence can moderate temperature range",
    "Continental interiors often have larger ranges",
    "Mediterranean: dry summer, wetter winter",
    "Fictional ranges: coast 14 °C; interior 28 °C"
   ],
   [
    "Rain belts shift; the Sahel has seasonal rain",
    "Rainforest, savanna, desert and highland differ",
    "Cape summer is in the Southern Hemisphere summer",
    "Fictional altitude model: 26 - 2 × 6 = 14 °C"
   ]
  ],
  "eqs": [
   "Rhine → North Sea; Danube → Black Sea",
   "Nile: generally north; Congo outlet: Atlantic",
   "20 - 6 = 14 °C; 24 - (-4) = 28 °C",
   "26 - (2,000 / 1,000) × 6 = 14 °C"
  ],
  "questions": [
   [
    "Which European peninsula contains most of Spain and Portugal?",
    "Iberian Peninsula",
    "Scandinavian Peninsula",
    "Balkan Peninsula",
    "Spain and Portugal occupy most of the Iberian Peninsula in southwestern Europe."
   ],
   [
    "Which mountain range forms much of the land boundary between Spain and France?",
    "Pyrenees",
    "Alps",
    "Atlas",
    "The Pyrenees extend between Spain and France; the Alps and Atlas occupy different parts of the region."
   ],
   [
    "Which mountain range forms a major arc north of much of Italy?",
    "Alps",
    "Atlas",
    "Ethiopian Highlands",
    "The Alps form an arc across several European countries, including northern Italy."
   ],
   [
    "Which physical feature offers a broad lowland corridor across part of northern continental Europe?",
    "North European Plain",
    "Atlas Mountains",
    "Ethiopian Highlands",
    "A plain is relatively low-relief terrain; infrastructure and political conditions still affect the ease of travel."
   ],
   [
    "Into which sea does the Rhine river system discharge?",
    "North Sea",
    "Black Sea",
    "Red Sea",
    "The Rhine drains toward the North Sea through its delta system, unlike the Danube's Black Sea outlet."
   ],
   [
    "Into which sea does the Danube discharge?",
    "Black Sea",
    "Baltic Sea",
    "North Sea",
    "The Danube crosses central and southeastern Europe before reaching the Black Sea."
   ],
   [
    "A north-to-south transect passes from the Sahara into a semiarid transition zone. Which region has it entered?",
    "Sahel",
    "Congo rainforest",
    "Scandinavian Peninsula",
    "The Sahel lies along the southern margin of the Sahara and transitions toward wetter environments farther south."
   ],
   [
    "Where are the Atlas Mountains?",
    "Northwestern Africa",
    "Northern Scandinavia",
    "The Congo Basin lowlands",
    "The Atlas Mountains occupy northwestern Africa, including parts of Morocco, Algeria and Tunisia."
   ],
   [
    "Which African region contains extensive equatorial rainforest?",
    "Congo Basin",
    "Central Sahara",
    "Iberian Peninsula",
    "The Congo Basin supports extensive tropical rainforest; Africa also contains very different dry and highland environments."
   ],
   [
    "What is the Nile's general downstream direction toward its sea outlet?",
    "North toward the Mediterranean",
    "South toward the Indian Ocean",
    "West toward the North Sea",
    "The Nile flows generally north to the Mediterranean; downstream direction follows elevation and drainage, not map orientation."
   ],
   [
    "Which ocean receives the Congo River?",
    "Atlantic Ocean",
    "Indian Ocean",
    "Arctic Ocean",
    "The Congo River drains a large central African basin and reaches the Atlantic on the continent's western side."
   ],
   [
    "The Ethiopian Highlands are compared with nearby lowlands. Which factor most directly helps explain cooler highland conditions?",
    "Greater elevation",
    "Greater ocean depth",
    "A position below sea level",
    "Air temperature generally decreases with elevation in the lower atmosphere; local conditions also matter."
   ],
   [
    "Which seasonal pattern is characteristic of a Mediterranean climate?",
    "Dry summers and wetter winters",
    "Rain only during summer and none in winter",
    "The same rainfall every day",
    "Mediterranean climates are characterized by relatively dry summers and wetter winters, with local variation in amounts."
   ],
   [
    "Fictional coastal monthly mean temperatures range from 7 to 21 °C. What is the annual temperature range?",
    "14 °C",
    "28 °C",
    "3 °C",
    "Subtract the coldest monthly mean from the warmest: 21 minus 7 is 14 degrees Celsius."
   ],
   [
    "Fictional interior monthly means range from -6 to 25 °C. What is the annual temperature range?",
    "31 °C",
    "19 °C",
    "-31 °C",
    "Subtracting a negative minimum adds its magnitude: 25 minus negative 6 equals 31 degrees Celsius."
   ],
   [
    "At similar latitude and elevation, a west European coastal station has a smaller annual temperature range than an inland station. Which explanation fits?",
    "Maritime moderation",
    "Latitude alone must differ",
    "The coast must have no seasons",
    "Nearby ocean water can moderate seasonal temperatures; this is an explanation to test, not proof that no other factors matter."
   ],
   [
    "A fictional African plateau is 1,500 m above a nearby lowland at 29 °C. Using a decrease of 6 °C per 1,000 m, what temperature does the model predict?",
    "20 °C",
    "23 °C",
    "38 °C",
    "The modeled decrease is 1.5 times 6, or 9 degrees; 29 minus 9 gives 20 degrees Celsius."
   ],
   [
    "Why can the Sahel experience both droughts and wet-season floods?",
    "Rainfall varies by season and year",
    "Semiarid regions cannot receive rain",
    "Floods prove there is no dry season",
    "Seasonal concentration and variation in rainfall can produce flooding in a generally water-limited region."
   ],
   [
    "A Cape-area climate graph is labeled January. Which Southern Hemisphere season does that month fall in?",
    "Summer",
    "Winter",
    "Autumn",
    "January falls in the Southern Hemisphere summer; seasonal labels reverse across the Equator."
   ],
   [
    "Which evidence most directly contradicts the claim that all of Africa is desert?",
    "Rainforests in the Congo Basin",
    "Sand in part of the Sahara",
    "Low rainfall at one desert station",
    "A substantial rainforest region is a counterexample to a continent-wide claim of universal desert conditions."
   ],
   [
    "A student compares two river maps. What does a drainage-basin boundary enclose?",
    "Land draining to the specified river system",
    "Only land within one country",
    "Only the river channel itself",
    "A drainage basin includes the contributing land area, which can extend across multiple national boundaries."
   ],
   [
    "A fictional Mediterranean station receives 90 mm in January and 10 mm in July. How much greater is January rainfall?",
    "80 mm",
    "100 mm",
    "9 mm",
    "The difference is 90 minus 10, or 80 millimeters; a ratio would answer a different question."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Europe: approximate relative reference positions",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      120,
      76
     ],
     "P1": [
      150,
      88
     ],
     "P2": [
      195,
      100
     ],
     "P3": [
      210,
      84
     ],
     "P4": [
      225,
      172
     ],
     "P5": [
      245,
      128
     ],
     "P6": [
      160,
      140
     ],
     "P7": [
      320,
      92
     ],
     "P8": [
      225,
      60
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8",
    "dots": "",
    "polys": [],
    "segs": [],
    "circles": [
     {
      "c": "P0",
      "r": 5,
      "col": 1
     },
     {
      "c": "P1",
      "r": 5,
      "col": 2
     },
     {
      "c": "P2",
      "r": 5,
      "col": 3
     },
     {
      "c": "P3",
      "r": 5,
      "col": 0
     },
     {
      "c": "P4",
      "r": 5,
      "col": 1
     },
     {
      "c": "P5",
      "r": 5,
      "col": 2
     },
     {
      "c": "P6",
      "r": 5,
      "col": 3
     },
     {
      "c": "P7",
      "r": 5,
      "col": 0
     },
     {
      "c": "P8",
      "r": 5,
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       133,
       79
      ],
      "text": "1",
      "col": 1
     },
     {
      "at": [
       473,
       210
      ],
      "text": "1. Iberian Peninsula",
      "col": 1
     },
     {
      "at": [
       163,
       91
      ],
      "text": "2",
      "col": 2
     },
     {
      "at": [
       473,
       191
      ],
      "text": "2. Pyrenees",
      "col": 2
     },
     {
      "at": [
       208,
       103
      ],
      "text": "3",
      "col": 3
     },
     {
      "at": [
       473,
       172
      ],
      "text": "3. Alps",
      "col": 3
     },
     {
      "at": [
       223,
       87
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       473,
       153
      ],
      "text": "4. Italian Peninsula",
      "col": 0
     },
     {
      "at": [
       238,
       175
      ],
      "text": "5",
      "col": 1
     },
     {
      "at": [
       473,
       134
      ],
      "text": "5. Scandinavia",
      "col": 1
     },
     {
      "at": [
       258,
       131
      ],
      "text": "6",
      "col": 2
     },
     {
      "at": [
       473,
       115
      ],
      "text": "6. N. European Plain",
      "col": 2
     },
     {
      "at": [
       173,
       143
      ],
      "text": "7",
      "col": 3
     },
     {
      "at": [
       473,
       96
      ],
      "text": "7. North Sea",
      "col": 3
     },
     {
      "at": [
       333,
       95
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       473,
       77
      ],
      "text": "8. Black Sea",
      "col": 0
     },
     {
      "at": [
       238,
       63
      ],
      "text": "9",
      "col": 1
     },
     {
      "at": [
       473,
       58
      ],
      "text": "9. Mediterranean",
      "col": 1
     },
     {
      "at": [
       105,
       180
      ],
      "text": "Atlantic",
      "col": 0
     },
     {
      "at": [
       300,
       211
      ],
      "text": "N ↑",
      "col": 0
     },
     {
      "at": [
       300,
       192
      ],
      "text": "E →",
      "col": 0
     },
     {
      "at": [
       211,
       33
      ],
      "text": "Reference points; not boundaries",
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Africa: selected physical reference features",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      203,
      174.8
     ],
     "P1": [
      203,
      161.6
     ],
     "P2": [
      224,
      139.6
     ],
     "P3": [
      254,
      139.6
     ],
     "P4": [
      284,
      137.39999999999998
     ],
     "P5": [
      284,
      124.19999999999999
     ],
     "P6": [
      290,
      115.39999999999998
     ],
     "P7": [
      293,
      100
     ],
     "P8": [
      296,
      80.19999999999999
     ],
     "P9": [
      308,
      53.79999999999998
     ],
     "P10": [
      329,
      53.79999999999998
     ],
     "P11": [
      350,
      71.39999999999998
     ],
     "P12": [
      359,
      84.6
     ],
     "P13": [
      374,
      102.19999999999999
     ],
     "P14": [
      374,
      128.6
     ],
     "P15": [
      407,
      155
     ],
     "P16": [
      386,
      155
     ],
     "P17": [
      380,
      163.8
     ],
     "P18": [
      362,
      181.4
     ],
     "P19": [
      353,
      194.6
     ],
     "P20": [
      329,
      199
     ],
     "P21": [
      314,
      199
     ],
     "P22": [
      287,
      201.2
     ],
     "P23": [
      284,
      210
     ],
     "P24": [
      254,
      207.8
     ],
     "P25": [
      230,
      196.8
     ],
     "P26": [
      215,
      188
     ],
     "P27": [
      344,
      128.6
     ],
     "P28": [
      350,
      161.6
     ],
     "P29": [
      350,
      161.6
     ],
     "P30": [
      347,
      194.6
     ],
     "P31": [
      233,
      196.8
     ],
     "P32": [
      266,
      205.6
     ],
     "P33": [
      218,
      159.4
     ],
     "P34": [
      329,
      159.4
     ],
     "P35": [
      175,
      200
     ],
     "P36": [
      245,
      201.2
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36",
    "dots": "",
    "polys": [
     {
      "v": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26",
      "col": 2
     }
    ],
    "segs": [
     {
      "v": "P27P28",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P29P30",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P31P32",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 4
     },
     {
      "v": "P33P34",
      "col": 1,
      "arrows": 0,
      "dash": true,
      "w": 3
     },
     {
      "v": "P35P36",
      "col": 3,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "circles": [],
    "notes": [
     {
      "at": [
       285,
       177
      ],
      "text": "Sahara",
      "col": 0
     },
     {
      "at": [
       280,
       156
      ],
      "text": "Sahel",
      "col": 1
     },
     {
      "at": [
       318,
       112
      ],
      "text": "Congo Basin",
      "col": 0
     },
     {
      "at": [
       146,
       205
      ],
      "text": "Atlas",
      "col": 3
     },
     {
      "at": [
       454,
       195
      ],
      "text": "Mediterranean",
      "col": 0
     },
     {
      "at": [
       445,
       170
      ],
      "text": "Nile ↑",
      "col": 0
     },
     {
      "at": [
       120,
       100
      ],
      "text": "Atlantic",
      "col": 0
     },
     {
      "at": [
       480,
       77
      ],
      "text": "Indian Ocean",
      "col": 0
     },
     {
      "at": [
       320,
       36
      ],
      "text": "Reference sketch; not a navigation map",
      "col": 0
     }
    ]
   },
   {
    "t": "figure",
    "title": "Fictional stations: annual temperature ranges",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      110,
      64
     ],
     "P1": [
      560,
      64
     ],
     "P2": [
      185,
      120
     ],
     "P3": [
      250,
      120
     ],
     "P4": [
      250,
      64
     ],
     "P5": [
      185,
      64
     ],
     "P6": [
      410,
      176
     ],
     "P7": [
      475,
      176
     ],
     "P8": [
      475,
      64
     ],
     "P9": [
      410,
      64
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "polys": [
     {
      "v": "P2P3P4P5",
      "col": 1
     },
     {
      "v": "P6P7P8P9",
      "col": 2
     }
    ],
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "circles": [],
    "notes": [
     {
      "at": [
       217,
       48
      ],
      "text": "Coast",
      "col": 1
     },
     {
      "at": [
       217,
       134
      ],
      "text": "14 °C",
      "col": 1
     },
     {
      "at": [
       442,
       48
      ],
      "text": "Interior",
      "col": 2
     },
     {
      "at": [
       442,
       190
      ],
      "text": "28 °C",
      "col": 2
     },
     {
      "at": [
       320,
       206
      ],
      "text": "Range = warmest minus coldest monthly mean",
      "col": 0
     },
     {
      "at": [
       210,
       90
      ],
      "text": "20 - 6",
      "col": 0
     },
     {
      "at": [
       450,
       90
      ],
      "text": "24 - (-4)",
      "col": 0
     }
    ]
   },
   null
  ]
 },
 {
  "code": "NGS 5",
  "name": "Regions and changing boundaries",
  "skill": "s3",
  "teach": [
   "A region groups places using a stated criterion. A formal region shares a selected attribute, such as a mapped language zone or a climate class. A functional region is connected through activities, such as commuting into a city or shipping through a port. A perceptual region reflects people's ideas about an area; different people may draw its limits differently. The Mediterranean can be studied as a basin linking shores of Europe, Africa and Asia, while a climate map draws different boundaries. An African country can belong simultaneously to a river basin, a trade region and a language region. Do not confuse overlap with a mistake.",
   "Europe and Africa are geographic groupings; political and economic organizations have membership rules. The European Union is not a synonym for the continent of Europe. The euro area concerns a shared currency, and Schengen concerns border-travel arrangements; these are different memberships. As checked in October 2026, Denmark belongs to the EU but uses the krone. The African Union is a continental organization, not a single state. A map of colonial borders, an independence-era map and a current map can show change over time. Neither present borders nor broad labels such as North Africa make populations culturally uniform. Explain which criterion and date answer the question."
  ],
  "boards": [
   [
    "Formal: a selected shared characteristic",
    "Functional: connections around a node",
    "Perceptual: an idea of a region",
    "Regions can overlap and have different boundaries"
   ],
   [
    "Europe, EU, euro area and Schengen differ",
    "A continent is not a single political organization",
    "Use the map date and the membership criterion",
    "Political boundaries do not erase cultural variation"
   ]
  ],
  "eqs": [
   "Region = chosen criterion + scale + time",
   "Geography, currency and border rules are different maps"
  ],
  "questions": [
   [
    "A planner maps all towns whose workers commute to the same city. What type of region is this?",
    "Functional region",
    "Climate region",
    "Perceptual region based only on reputation",
    "Commuting links organize the region around a center of activity, which is the defining functional connection."
   ],
   [
    "A map groups places with the same specified climate classification. What type of region is it?",
    "Formal region",
    "Commuting region",
    "Region defined only by opinion",
    "A formal region is delimited by a stated shared attribute; here that attribute is a climate class."
   ],
   [
    "Residents draw different boundaries for an area they call their cultural heartland. What kind of region is illustrated?",
    "Perceptual region",
    "A universally fixed climate zone",
    "A drainage basin defined only by topography",
    "The boundaries depend on people's perceptions and identities rather than one agreed physical measurement."
   ],
   [
    "A Mediterranean-basin study includes coasts on three continents. What does this demonstrate?",
    "A region can cross continental groupings",
    "All regional boundaries must match continents",
    "A sea cannot connect places",
    "A sea basin can define a region of interaction across parts of Europe, Africa and Asia."
   ],
   [
    "An African city belongs to a river basin and a transport corridor. Must one regional classification be wrong?",
    "No; regions based on different criteria can overlap",
    "Yes; each place can belong to only one region",
    "Yes; transport corridors cannot be regions",
    "The same place can be part of multiple regions because each classification answers a different spatial question."
   ],
   [
    "Why should a map of the European Union not be labeled simply all of Europe?",
    "EU membership differs from continental geography",
    "Europe is only a currency",
    "Every European place is in the EU",
    "The EU is a political and economic organization; the geographic region includes places outside that organization."
   ],
   [
    "A map highlights countries using the euro as members of the euro area. What criterion defines this grouping?",
    "Participation in the shared currency",
    "Latitude north of 50 degrees",
    "Drainage into the Mediterranean",
    "Euro-area membership is monetary; it is not defined by latitude or the direction of river drainage."
   ],
   [
    "What is the main subject of a Schengen membership map?",
    "Border-travel arrangements",
    "A single shared language",
    "Rainfall classes",
    "Schengen concerns arrangements for border travel; its membership is distinct from climate, language or euro-area maps."
   ],
   [
    "Denmark is an EU member and uses the krone, as checked in October 2026. What does this show?",
    "EU membership does not require every member to use the euro already",
    "All EU countries use the same currency",
    "Denmark lies outside geographic Europe",
    "The example separates organizational membership from participation in the shared currency."
   ],
   [
    "A classroom treats the African Union as if it were one country. What is the correction?",
    "It is an organization of states",
    "It is one city government",
    "It is one language region",
    "The African Union is a continental organization whose member states remain distinct political entities."
   ],
   [
    "A historian compares political maps of Africa from 1900 and 2000. What is essential for interpreting differences?",
    "The historical dates and political context",
    "Assuming boundaries never change",
    "Ignoring the map legends",
    "Political control and borders can change; dates and legends identify what each historical map represents."
   ],
   [
    "A language region crosses a national border. Which interpretation is justified?",
    "Cultural boundaries need not match state boundaries",
    "Everyone in both countries speaks only that language",
    "The national border cannot exist",
    "Languages and other cultural patterns can cross political borders without eliminating variation within either state."
   ]
  ],
  "check": [
   "A North African port serves inland towns in several countries. A map includes places using that port. Which regional criterion is being used?",
   "Functional connections",
   "One uniform climate",
   "A shared currency is required",
   "The region is defined by transport and trade connections to a node, even when it crosses national borders."
  ]
 },
 {
  "code": "NGS 9",
  "name": "Population, migration and cities",
  "skill": "s4",
  "teach": [
   "People are distributed unevenly within both continents. Water access, productive land, employment, transport, history and public policy all help explain settlement; no single cause explains every city. The Nile valley and delta support dense settlement within an otherwise largely arid setting. London and Paris are major European cities; Cairo, Lagos and Johannesburg illustrate African urban life. Avoid claims about the largest city without a date and boundary definition. A city's administrative area is different from its connected metropolitan area. Population density divides people by land area: a fictional district with 900,000 people on 3,000 km² averages 300 people/km². That average does not mean every square kilometer has 300 people.",
   "Urbanization means an increasing share of people living in urban areas, not merely an increase in the number of city residents. In a fictional country, an urban population rising from 4 to 5 million while total population rises from 8 to 10 million leaves the urban share at 50%. Population change equals births minus deaths plus arrivals minus departures when other adjustments are excluded. Migration occurs within countries and across borders, and motives can combine jobs, family, education and safety. Forced displacement differs from voluntary job relocation, though real circumstances can overlap. Remittances are money migrants send back. An age structure can inform school or elder-care planning; it cannot by itself prove that every person in an age group has the same needs."
  ],
  "boards": [
   [
    "Density = people divided by land area",
    "Fictional: 900,000 / 3,000 = 300 people/km²",
    "City proper and metro boundaries differ",
    "An average does not describe every neighborhood"
   ],
   [
    "Urban share = urban people divided by all people",
    "More urban people need not mean a higher share",
    "Change = births - deaths + arrivals - departures",
    "Migration can be internal, cross-border or forced"
   ]
  ],
  "eqs": [
   "900,000 / 3,000 = 300 people/km²",
   "4 / 8 = 50%; 5 / 10 = 50%"
  ],
  "questions": [
   [
    "Why is the Nile valley a useful counterexample to the claim that an arid country must be sparsely settled everywhere?",
    "River water supports concentrated settlement",
    "Every part has identical water access",
    "Deserts prohibit all cities",
    "Settlement can concentrate where water, transport and cultivated land are available, even within a much drier surrounding region."
   ],
   [
    "Which group consists of cities in Africa?",
    "Cairo, Lagos and Johannesburg",
    "Paris, Madrid and Rome",
    "Oslo, Berlin and Vienna",
    "Cairo is in Egypt, Lagos in Nigeria and Johannesburg in South Africa; Africa has diverse and substantial urban systems."
   ],
   [
    "A fictional district has 1,200,000 people and an area of 4,000 km². What is its average population density?",
    "300 people/km²",
    "3,000 people/km²",
    "30 people/km²",
    "Divide 1,200,000 people by 4,000 square kilometers; the average is 300 people per square kilometer."
   ],
   [
    "District A has 600,000 people on 2,000 km²; District B has 900,000 on 9,000 km². Which is denser?",
    "District A",
    "District B",
    "They have equal density",
    "A has 300 people per square kilometer while B has 100; the larger total population does not imply higher density."
   ],
   [
    "A district's average density is 200 people/km². What can be concluded about each individual square kilometer?",
    "Its population may differ from 200",
    "Every one contains exactly 200 people",
    "None can contain more than 200",
    "Average density combines concentrated and sparse areas; it does not impose equal settlement within the district."
   ],
   [
    "A fictional country has 7 million urban residents among 20 million people. What share is urban?",
    "35%",
    "70%",
    "13%",
    "Divide 7 by 20 and multiply by 100; the denominator must be the country's total population."
   ],
   [
    "Urban population rises from 3 to 4 million while total population rises from 6 to 8 million. What happens to the urban share?",
    "It stays at 50%",
    "It rises to 75%",
    "It falls to 25%",
    "Both ratios equal one half, so urban population grows without an increase in the urban share."
   ],
   [
    "A fictional city's annual counts are 12,000 births, 5,000 deaths, 8,000 arrivals and 6,000 departures. With no other adjustments, what is net population change?",
    "An increase of 9,000",
    "An increase of 31,000",
    "A decrease of 9,000",
    "Natural increase is 7,000 and net migration is 2,000, giving a total increase of 9,000 people."
   ],
   [
    "A person moves from one Nigerian city to another without leaving Nigeria. What is this?",
    "Internal migration",
    "International migration",
    "A change of continent",
    "Migration within one country's borders is internal, even when the move is long-distance or between major cities."
   ],
   [
    "A family is compelled to leave its home because of armed conflict. Which description fits best?",
    "Forced displacement",
    "Tourism",
    "Daily commuting",
    "Compulsion to leave because of danger distinguishes displacement from a holiday or a routine journey to work."
   ],
   [
    "A migrant sends part of their earnings to relatives in their former home community. What is that transfer called?",
    "A remittance",
    "A birth rate",
    "A watershed",
    "Remittances are transfers migrants send to people elsewhere, often supporting households in the place of origin."
   ],
   [
    "Two sources disagree on a city's population because one counts the municipality and one the metropolitan area. What should be checked first?",
    "Geographic boundary definitions",
    "Which number has more digits",
    "Whether all cities have equal area",
    "Different spatial boundaries can produce different legitimate totals; compare definitions and dates before treating them as contradictory."
   ],
   [
    "A fictional district has a growing share of residents over 65. Which planning question is most directly supported by that evidence?",
    "Whether elder-care access meets changing needs",
    "Whether all residents have retired",
    "Whether no schools are needed",
    "Age structure can guide service planning, but it does not establish the employment or needs of every individual."
   ],
   [
    "A city gains jobs after a rail connection opens. Which explanation could help account for migration into it?",
    "Improved access to employment",
    "Latitude alone changed",
    "Every migrant must have the same motive",
    "Transport and labor-market connections can attract migrants; family, education and safety may matter too."
   ],
   [
    "What distinguishes urbanization from growth in the number of city residents?",
    "Urbanization concerns an increasing urban share",
    "Urbanization requires a falling national population",
    "Any new city resident proves a rising urban share",
    "Urbanization is a change in proportion, so both urban and total population are needed to assess it."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Fictional population: totals grow, share stays equal",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      150,
      118
     ],
     "P1": [
      210,
      118
     ],
     "P2": [
      210,
      78
     ],
     "P3": [
      150,
      78
     ],
     "P4": [
      220,
      158
     ],
     "P5": [
      280,
      158
     ],
     "P6": [
      280,
      78
     ],
     "P7": [
      220,
      78
     ],
     "P8": [
      380,
      128
     ],
     "P9": [
      440,
      128
     ],
     "P10": [
      440,
      78
     ],
     "P11": [
      380,
      78
     ],
     "P12": [
      450,
      178
     ],
     "P13": [
      510,
      178
     ],
     "P14": [
      510,
      78
     ],
     "P15": [
      450,
      78
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
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
    "segs": [],
    "circles": [],
    "notes": [
     {
      "at": [
       180,
       130
      ],
      "text": "4",
      "col": 1
     },
     {
      "at": [
       250,
       170
      ],
      "text": "8",
      "col": 2
     },
     {
      "at": [
       215,
       50
      ],
      "text": "Year A",
      "col": 0
     },
     {
      "at": [
       410,
       140
      ],
      "text": "5",
      "col": 1
     },
     {
      "at": [
       480,
       190
      ],
      "text": "10",
      "col": 2
     },
     {
      "at": [
       445,
       50
      ],
      "text": "Year B",
      "col": 0
     },
     {
      "at": [
       320,
       211
      ],
      "text": "Millions: urban (orange), total (green)",
      "col": 0
     },
     {
      "at": [
       320,
       188
      ],
      "text": "Urban share stays 50%: 4/8 = 5/10",
      "col": 0
     }
    ]
   }
  ]
 },
 {
  "code": "NGS 10",
  "name": "Cultural mosaics and historical connections",
  "skill": "s5",
  "teach": [
   "Languages, religions, identities and ways of life vary within every broad region. A state can be multilingual, and the same language can cross many states. Switzerland recognizes German, French, Italian and Romansh as national languages; this does not mean each resident speaks all four. Across North Africa, Arabic-speaking and Amazigh communities illustrate cultural diversity rather than one uniform identity. European and African cities contain varied religious and nonreligious communities. Official status, household language and individual identity are different measures. In a fictional survey where respondents may select multiple languages, 60% using one language and 55% using another is possible; the categories overlap.",
   "African societies had cities, states and long-distance trade networks before modern European colonial rule. Kilwa on the East African coast participated in Indian Ocean exchange with Arabia, India and China. Trade, migration and communication can spread practices and create new cultural combinations. European colonial conquest imposed control across much of Africa and influenced boundaries, institutions, land use and language. The transatlantic slave trade forcibly carried enslaved Africans to the Americas and created lasting diasporic connections; describing this movement as ordinary voluntary migration erases coercion. A historical explanation needs specific actors, places and times, rather than treating continents as single actors with one experience.",
   "Many African independence movements in the twentieth century challenged colonial rule and claimed self-government. This does not mean all African states became independent in one year or had identical colonial histories. Contemporary communities continue to shape their own identities, preserve heritage and develop new practices. Compare sources with different viewpoints: an imperial map may omit local land rights, while oral histories can document experiences missing from official records. No one source automatically supplies the entire account. Evidence that a border split a language community supports that specific claim; it does not prove that all later conflict has only one cause. Keep cultural description separate from judgments that rank groups by inherent ability."
  ],
  "boards": [
   [
    "National language is not every person's language",
    "Switzerland has four national languages",
    "North Africa includes diverse language communities",
    "Multiple-response surveys can exceed 100% in sum"
   ],
   [
    "African cities and trade predate colonial conquest",
    "Kilwa linked East Africa with Indian Ocean trade",
    "Colonial power reshaped institutions and land use",
    "The transatlantic slave trade was forced movement"
   ],
   [
    "Independence histories differ across countries",
    "Communities preserve and create cultural practices",
    "Compare maps, records and community testimony",
    "A historical influence is not the only cause"
   ]
  ],
  "eqs": [
   "60% + 55% = 115% is possible with overlap",
   "Connections spread practices; coercion changes the story",
   "Specific evidence supports a specific historical claim"
  ],
  "questions": [
   [
    "What does Switzerland's recognition of German, French, Italian and Romansh as national languages demonstrate?",
    "A state can recognize multiple languages",
    "Every resident speaks all four",
    "Every language has exactly equal numbers of speakers",
    "Recognition of several national languages illustrates multilingual institutions, not identical individual language use."
   ],
   [
    "A country declares one language official. What additional evidence is needed to know languages used at home?",
    "Household language data",
    "Only the official-language law",
    "Only the country's total area",
    "Legal status and actual household use are different measures; neither can automatically substitute for the other."
   ],
   [
    "A fictional survey permits multiple language choices. Sixty percent select L and 55% select M. Is the sum of 115% necessarily an error?",
    "No; respondents may select both",
    "Yes; each person must use only one language",
    "Yes; a country cannot be multilingual",
    "The categories overlap when multiple selections are allowed, so their percentages need not add to 100."
   ],
   [
    "A fictional class has 40 students; 24 report using more than one language. What share is multilingual in this survey?",
    "60%",
    "24%",
    "16%",
    "The share is 24 divided by 40, or 0.60; multiply by 100 to express it as a percentage."
   ],
   [
    "Which statement best describes the relationship between Arabic-speaking and Amazigh communities in a North African regional study?",
    "They illustrate diversity within the region",
    "They prove everyone has identical language use",
    "They require that each country have only one identity",
    "The presence of multiple language communities shows why a broad regional label cannot describe every individual's identity."
   ],
   [
    "Evidence of Kilwa's Indian Ocean trade before modern European colonial rule challenges which claim?",
    "African societies had no earlier international connections",
    "East African ports could trade by sea",
    "Cultural contact can occur through trade",
    "Kilwa's exchange with Arabia, India and China is evidence of long-distance connections predating modern colonial control."
   ],
   [
    "Archaeologists find imported ceramics at an East African trading settlement. What claim does that evidence most directly support?",
    "Connections to exchange networks",
    "Every resident came from the exporting country",
    "The settlement had no local production",
    "Imported objects support exchange connections; they do not by themselves establish the birthplace of all residents or the absence of local goods."
   ],
   [
    "How should the transatlantic movement of enslaved Africans be characterized?",
    "Forced transportation and enslavement",
    "Ordinary voluntary job migration",
    "Seasonal tourism",
    "Enslaved people were coerced and denied freedom; calling this ordinary migration removes the central role of violence and coercion."
   ],
   [
    "Which is a plausible lasting geographic influence of European colonial rule in Africa?",
    "Political borders and official institutions",
    "The creation of all African societies from nothing",
    "The disappearance of all African languages",
    "Colonial control affected boundaries and institutions, but African societies existed earlier and languages and communities persisted."
   ],
   [
    "Why is the statement all African countries gained independence in the same year inaccurate?",
    "Independence histories and dates differ",
    "Independence never occurred anywhere",
    "Africa is one state with one founding date",
    "Different states followed different political histories; many twentieth-century independence movements did not produce one universal date."
   ],
   [
    "A researcher uses only an imperial map to study land rights. What would strengthen the investigation?",
    "Compare it with local records and community testimony",
    "Assume omitted claims never existed",
    "Treat the map as a complete neutral account",
    "Maps reflect purposes and power; other evidence can reveal land use and claims absent from an official imperial document."
   ],
   [
    "A community keeps a heritage language while adopting new musical styles through migration. What does this illustrate?",
    "Cultural continuity and change can coexist",
    "Adopting one practice erases all older identity",
    "Cultures cannot change",
    "Communities can preserve selected traditions while adapting or creating others through new connections."
   ],
   [
    "A national border divides a language community. Which conclusion is directly supported?",
    "The political and language boundaries differ",
    "Every later conflict has a single cause",
    "Everyone on each side shares one opinion",
    "The evidence shows a mismatch between boundaries; broader causal or individual claims require additional evidence."
   ],
   [
    "A city contains several religious communities and residents with no religious affiliation. Which description is supported?",
    "Religious diversity within one place",
    "A single belief shared by every resident",
    "Religion determined solely by latitude",
    "Residents can have different beliefs and identities within the same city; geographic location does not establish one universal affiliation."
   ],
   [
    "Why compare colonial records with accounts produced by colonized communities?",
    "To examine differing perspectives and missing evidence",
    "To guarantee that one source is always false",
    "To avoid considering historical context",
    "Comparing sources helps identify viewpoint, omissions and corroboration; all sources still require critical evaluation."
   ]
  ]
 },
 {
  "code": "NGS 11",
  "name": "Economic networks and cooperation",
  "skill": "s6",
  "teach": [
   "European and African economies include services, manufacturing, agriculture, mining and many other activities in varying combinations. A resource deposit does not guarantee broad prosperity: ownership, skills, infrastructure, prices and policy shape outcomes. A commodity chain can connect an African cocoa farm, a processor, a European manufacturer and consumers in several regions. The retail price is not the farmer's income; transport, processing, labor and other costs enter along the chain. If a fictional economy earns 60 of 100 export dollars from one mineral, that commodity has a 60% share and a price decline can affect export earnings. Diversification can reduce dependence on that one market without eliminating all risk.",
   "Transport corridors, ports and communication networks connect producers and customers. The Suez Canal links the Mediterranean and Red seas, providing a route between those seas without sailing around southern Africa. A blocked corridor can affect distant supply chains. The European Union coordinates economic policies and a single market among members; its membership is different from geographic Europe. The African Continental Free Trade Area aims to expand intra-African trade by reducing trade barriers and supporting integration. An agreement's goals do not prove that every barrier has already disappeared. For a fictional shipment, reducing border delay from 10 to 6 days saves 4 days, or 40% of the original delay. Evaluate actual costs, rules and distribution of benefits."
  ],
  "boards": [
   [
    "Services, manufacturing and farming vary by place",
    "Resource wealth does not guarantee shared income",
    "Trace producers, processors, sellers and buyers",
    "Fictional export dependence: 60 / 100 = 60%"
   ],
   [
    "Ports and corridors connect distant economies",
    "Suez links the Mediterranean and Red seas",
    "AfCFTA aims to expand intra-African trade",
    "Goals, implementation and outcomes are different"
   ]
  ],
  "eqs": [
   "60 / 100 × 100 = 60% of export earnings",
   "(10 - 6) / 10 × 100 = 40% less border delay"
  ],
  "questions": [
   [
    "A fictional cocoa chain runs from an African farm through a processor to a European chocolate factory and retailers. What does this illustrate?",
    "A cross-border commodity chain",
    "Complete economic isolation",
    "Only local household consumption",
    "Production, processing and sales in different places form a connected chain across national and regional boundaries."
   ],
   [
    "A chocolate bar's retail price rises. Why is it unsafe to assume the farmer's income rises by the same amount?",
    "Costs and revenue shares differ along the chain",
    "Farmers always receive the whole retail price",
    "Retail prices cannot change",
    "Processing, transport, retail margins and farm prices are distinct; the final price alone does not reveal the grower's earnings."
   ],
   [
    "A fictional country earns 72 million dollars from a mineral out of 120 million dollars in total exports. What is the mineral's export share?",
    "60%",
    "72%",
    "48%",
    "Divide 72 by 120 and multiply by 100; the mineral provides three fifths of the stated export earnings."
   ],
   [
    "An economy relies on one mineral for most export earnings. Which change most directly threatens those earnings, holding exported quantity fixed?",
    "A fall in that mineral's world price",
    "A rise in the value of each unit sold",
    "Unchanged prices and quantities",
    "With quantity fixed, lower price reduces revenue; concentration makes the economy particularly exposed to that commodity market."
   ],
   [
    "Why can developing several export industries reduce dependence on one commodity?",
    "Revenue comes from more than one market",
    "It guarantees that no industry can decline",
    "It eliminates all transport costs",
    "Diversification spreads exposure, though different markets can still suffer shocks and other risks remain."
   ],
   [
    "A new railway connects an inland producer with a seaport. Which mechanism could improve market access?",
    "Lower transport time or cost",
    "The producer becomes coastal in latitude",
    "All trade regulations disappear automatically",
    "Improved transport can reduce the difficulty of reaching a port without changing geography or automatically removing legal barriers."
   ],
   [
    "Which seas does the Suez Canal directly link?",
    "Mediterranean and Red seas",
    "North and Baltic seas",
    "Black and Caspian seas",
    "The canal crosses Egypt between the Mediterranean and the Red Sea, connecting major shipping routes."
   ],
   [
    "A fictional shipping route is 16,000 km around southern Africa and 10,000 km via a canal. How many kilometers does the canal route save?",
    "6,000 km",
    "26,000 km",
    "60,000 km",
    "Subtract the shorter route from the longer: 16,000 minus 10,000 equals 6,000 kilometers."
   ],
   [
    "What is a stated aim of the African Continental Free Trade Area?",
    "Expand trade among African economies",
    "Replace every African state with one municipality",
    "End all production for export",
    "AfCFTA seeks greater economic integration and intra-African trade; an aim must be distinguished from completed implementation."
   ],
   [
    "A trade agreement is signed. Which conclusion still requires evidence?",
    "All border delays have already disappeared",
    "Governments have announced an agreement",
    "An agreement can set shared trade rules",
    "Signing rules does not establish their full implementation or eliminate infrastructure, administrative and other sources of delay."
   ],
   [
    "A fictional border delay falls from 15 days to 9 days. What is the percentage reduction?",
    "40%",
    "60%",
    "6%",
    "The delay falls by 6 days; 6 divided by the original 15 equals 0.40, or a 40 percent reduction."
   ],
   [
    "Why should a regional economy not be described only by its best-known mineral export?",
    "Other sectors and regional differences also matter",
    "All workers necessarily mine that mineral",
    "Services never contribute to income",
    "A prominent export does not summarize all employment, production or regional variation within an economy."
   ],
   [
    "A port closure delays a distant factory's imported components. Which concept does this demonstrate?",
    "Economic interdependence",
    "Complete local self-sufficiency",
    "An absence of trade networks",
    "A disruption in one location can affect production elsewhere because supplies move through connected networks."
   ],
   [
    "A mine increases national output. Which evidence is needed to evaluate how local households benefit?",
    "Wages, ownership, tax revenue and local costs",
    "Output growth alone",
    "Only the ore's color",
    "Aggregate production does not show who receives income or bears environmental and social costs."
   ],
   [
    "A fictional exporter sells 200 units for 30 dollars each, with total costs of 4,500 dollars. What is profit?",
    "1,500 dollars",
    "6,000 dollars",
    "10,500 dollars",
    "Revenue is 200 times 30, or 6,000 dollars; subtracting all stated costs leaves 1,500 dollars in profit."
   ]
  ],
  "check": [
   "A fictional African manufacturer faces a border delay falling from 12 to 9 days. What is the percentage reduction from the original delay?",
   "25%",
   "75%",
   "3%",
   "The reduction is 3 days out of the original 12. Three divided by twelve is one quarter, or 25 percent."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Illustrative international cocoa commodity chain",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      52,
      180
     ],
     "P1": [
      158,
      180
     ],
     "P2": [
      158,
      122
     ],
     "P3": [
      52,
      122
     ],
     "P4": [
      158,
      151
     ],
     "P5": [
      195,
      151
     ],
     "P6": [
      195,
      180
     ],
     "P7": [
      301,
      180
     ],
     "P8": [
      301,
      122
     ],
     "P9": [
      195,
      122
     ],
     "P10": [
      301,
      151
     ],
     "P11": [
      338,
      151
     ],
     "P12": [
      338,
      180
     ],
     "P13": [
      444,
      180
     ],
     "P14": [
      444,
      122
     ],
     "P15": [
      338,
      122
     ],
     "P16": [
      444,
      151
     ],
     "P17": [
      481,
      151
     ],
     "P18": [
      481,
      180
     ],
     "P19": [
      587,
      180
     ],
     "P20": [
      587,
      122
     ],
     "P21": [
      481,
      122
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21",
    "dots": "",
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
     },
     {
      "v": "P18P19P20P21",
      "col": 0
     }
    ],
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
     },
     {
      "v": "P16P17",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "circles": [],
    "notes": [
     {
      "at": [
       105,
       160
      ],
      "text": "Cocoa",
      "col": 1
     },
     {
      "at": [
       105,
       139
      ],
      "text": "farm",
      "col": 1
     },
     {
      "at": [
       248,
       160
      ],
      "text": "Processor",
      "col": 2
     },
     {
      "at": [
       391,
       160
      ],
      "text": "Chocolate",
      "col": 3
     },
     {
      "at": [
       391,
       139
      ],
      "text": "factory",
      "col": 3
     },
     {
      "at": [
       534,
       160
      ],
      "text": "Retailer",
      "col": 0
     },
     {
      "at": [
       320,
       86
      ],
      "text": "An illustrative chain can cross several borders",
      "col": 0
     },
     {
      "at": [
       320,
       59
      ],
      "text": "Retail price does not equal the grower’s income",
      "col": 0
     }
    ]
   },
   null
  ]
 },
 {
  "code": "NGS 14",
  "name": "Environmental change and shared management",
  "skill": "s7",
  "teach": [
   "People modify environments through farming, urban growth, mining, dams and transport. Changes can bring benefits and costs at different locations. A dam can provide stored water and electricity while altering downstream flows, sediment and habitats. In a shared river basin such as the Nile or Danube, national borders do not stop water or dissolved pollution. Cooperation can include monitoring, information sharing and rules for releases or pollution control. Avoid the claim that every dam has the same effects: design, operation, location and affected communities matter. A river-management proposal should name who gains, who faces risk and what evidence would measure results.",
   "Desertification is degradation of land in dryland regions through climatic variations and human activities. It is not simply a desert edge moving across a map. Loss of vegetation and soil can reduce productive capacity; drought and unsuitable land use can interact. Restoration must fit local ecology and livelihoods: maintaining soil cover or adjusting grazing pressure can help, while planting any tree anywhere is not automatically suitable. Clearing forest changes habitats, water cycling and carbon storage. In a fictional reserve, forest area falling from 8,000 to 7,200 hectares loses 800 hectares, or 10% of its starting area. The percentage denominator is the original area, not the remaining forest.",
   "Coastal and river cities can reduce flood risk through combinations of drainage, floodplain protection, warnings and land-use planning. A wall may protect one site while transferring risk elsewhere; compare the wider basin and include residents in planning. A fictional town records exposed homes falling from 600 to 450 after a project. That is a 25% decrease, but a before-and-after comparison alone cannot prove the project caused all of it. Flood severity, boundary definitions and other changes may differ. An exam explanation should identify the pattern, calculate with units, propose a mechanism, and state the evidence needed to test the mechanism. Regional labels alone do not explain environmental outcomes."
  ],
  "boards": [
   [
    "Dams can supply water and electricity",
    "Operations alter flows, sediment and habitats",
    "Shared river basins need shared evidence",
    "Assess benefits and costs in different places"
   ],
   [
    "Desertification: degradation in drylands",
    "Drought and land use can interact",
    "Restoration must fit local ecology and livelihoods",
    "Fictional loss: (8,000 - 7,200) / 8,000 = 10%"
   ],
   [
    "Flood risk depends on hazards and exposure",
    "Planning can combine several risk-reduction tools",
    "A project can shift risk to another location",
    "Observed change alone does not prove its cause"
   ]
  ],
  "eqs": [
   "Upstream decisions can create downstream effects",
   "8,000 - 7,200 = 800 ha lost; 800 / 8,000 = 10%",
   "(600 - 450) / 600 × 100 = 25% fewer exposed homes"
  ],
  "questions": [
   [
    "Why does managing pollution in the Danube require attention beyond one country's borders?",
    "Water carries substances downstream across boundaries",
    "National borders stop river flow",
    "Only a river's mouth can be polluted",
    "Upstream inputs can affect downstream water quality, making the basin an appropriate scale for cooperation."
   ],
   [
    "Which pair describes a possible benefit and cost of a river dam?",
    "Electricity generation and altered downstream habitats",
    "New ocean water and removal of all flood risk",
    "Unlimited irrigation and no effect on flows",
    "A dam can generate electricity while changing flow, sediment transport and habitats; impacts depend on its design and operation."
   ],
   [
    "A Nile-basin proposal changes reservoir releases. Which information is most directly relevant to downstream effects?",
    "Timing and volume of water released",
    "Only the dam's name",
    "Only the builder's national flag",
    "Downstream conditions depend on how much water arrives and when, along with other environmental and social factors."
   ],
   [
    "Which description best defines desertification?",
    "Land degradation in dryland regions",
    "Every seasonal dry period anywhere",
    "Only the outward movement of sand dunes",
    "Desertification concerns degradation in drylands from climatic and human influences, not merely a moving desert boundary."
   ],
   [
    "Why can repeated heavy grazing during drought damage dryland soil?",
    "Vegetation loss can expose soil to erosion",
    "Grazing automatically creates new topsoil",
    "Drought guarantees increased plant growth",
    "If grazing pressure exceeds forage recovery, declining cover can expose soil; the result depends on local conditions and management."
   ],
   [
    "Which question best guides a dryland restoration project?",
    "Which practices fit local soils, water and livelihoods?",
    "Which single tree must be planted in every ecosystem?",
    "How can all local knowledge be excluded?",
    "Effective restoration requires ecological and social fit; a uniform intervention can be unsuitable for particular places."
   ],
   [
    "A fictional forest declines from 5,000 to 4,400 hectares. What percent of its original area was lost?",
    "12%",
    "88%",
    "600%",
    "The loss is 600 hectares; 600 divided by the starting 5,000 equals 0.12, or 12 percent."
   ],
   [
    "Clearing a forest for a road most directly raises which environmental concern?",
    "Habitat loss and fragmentation",
    "Automatic creation of identical forest elsewhere",
    "An end to all local rainfall immediately",
    "Clearing can remove and divide habitat; the size and pattern of disturbance influence ecological effects."
   ],
   [
    "A European city protects a floodplain from new building. How can this help manage flood risk?",
    "Keep more development out of flood-prone land",
    "Guarantee that heavy rain will stop",
    "Make upstream land irrelevant",
    "Land-use planning can reduce exposure in areas likely to flood, without preventing the rainfall hazard itself."
   ],
   [
    "A flood wall redirects water toward a neighboring district. What should an evaluation include?",
    "Risk transferred beyond the protected site",
    "Only the protected site's new property values",
    "A claim that water disappears at the wall",
    "Local protection can redistribute water and risk; assessment must consider effects on neighboring places."
   ],
   [
    "River-town case, part 1: a fictional project report lists 800 exposed homes before and 600 after. What is the percentage decrease?",
    "25%",
    "75%",
    "200%",
    "There are 200 fewer exposed homes; dividing by the initial 800 gives one quarter, or a 25 percent decrease."
   ],
   [
    "River-town case, part 2: exposed homes fall from 800 to 600, but the later flood is milder. Can the entire decline be attributed to the project from these facts alone?",
    "No; flood severity also changed",
    "Yes; before-and-after data always prove causation",
    "Yes; hazard intensity cannot affect exposure counts",
    "A change in the hazard is an alternative explanation; a causal estimate needs a fair comparison and consistent measurement."
   ],
   [
    "River-town case, part 3: what would most improve evaluation of the project's effect on exposed homes?",
    "Compare similar flood conditions and consistent boundaries",
    "Compare only the project brochure's colors",
    "Ignore every district outside the construction site",
    "Holding measurement definitions and flood conditions comparable helps distinguish the project's effects from other changes."
   ],
   [
    "Why include downstream communities in a dam-management discussion?",
    "They can bear effects of changed releases",
    "Only upstream residents use river water",
    "Downstream impacts cannot cross borders",
    "Flow changes can affect downstream water users, ecosystems and livelihoods, so those communities have relevant evidence and interests."
   ],
   [
    "A project claims it restored a Sahelian grazing area. Which evidence would best assess land recovery over time?",
    "Vegetation cover and soil condition measured consistently",
    "One publicity photograph with no date",
    "Only the number of speeches at its launch",
    "Repeated, comparable ecological measurements can test recovery; a single undated image cannot establish sustained improvement."
   ]
  ],
  "check": [
   "A fictional dryland plot loses soil cover during drought and heavy grazing. Which response best fits the evidence?",
   "Evaluate grazing pressure and locally suited soil cover",
   "Assume all drylands need the same imported tree",
   "Ignore land management because only climate can matter",
   "Climate and land use can interact, so investigate both and choose restoration suited to local conditions."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Shared river: simplified downstream effects",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      85,
      134
     ],
     "P1": [
      557,
      134
     ],
     "P2": [
      320,
      209
     ],
     "P3": [
      320,
      67
     ],
     "P4": [
      229,
      154
     ],
     "P5": [
      241,
      154
     ],
     "P6": [
      241,
      114
     ],
     "P7": [
      229,
      114
     ],
     "P8": [
      393,
      115
     ],
     "P9": [
      416,
      115
     ],
     "P10": [
      416,
      94
     ],
     "P11": [
      393,
      94
     ],
     "P12": [
      430,
      115
     ],
     "P13": [
      453,
      115
     ],
     "P14": [
      453,
      94
     ],
     "P15": [
      430,
      94
     ],
     "P16": [
      467,
      115
     ],
     "P17": [
      490,
      115
     ],
     "P18": [
      490,
      94
     ],
     "P19": [
      467,
      94
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19",
    "dots": "",
    "polys": [
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
      "col": 2
     },
     {
      "v": "P16P17P18P19",
      "col": 2
     }
    ],
    "segs": [
     {
      "v": "P0P1",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 4
     },
     {
      "v": "P2P3",
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
       184,
       200
      ],
      "text": "Upstream country",
      "col": 1
     },
     {
      "at": [
       456,
       200
      ],
      "text": "Downstream country",
      "col": 2
     },
     {
      "at": [
       235,
       173
      ],
      "text": "Dam",
      "col": 1
     },
     {
      "at": [
       450,
       68
      ],
      "text": "Water users and habitat",
      "col": 2
     },
     {
      "at": [
       320,
       42
      ],
      "text": "Flow crosses the boundary; effects can cross it too",
      "col": 0
     }
    ]
   },
   null,
   null
  ],
  "qpics": {
   "10": {
    "t": "setups",
    "title": "River-town project: fictional observations",
    "head": "",
    "cols": [
     "Exposed homes",
     "Flood"
    ],
    "rows": [
     [
      "Before",
      "800",
      "Stronger"
     ],
     [
      "After",
      "600",
      "Milder"
     ]
    ]
   },
   "11": {
    "t": "setups",
    "title": "River-town project: fictional observations",
    "head": "",
    "cols": [
     "Exposed homes",
     "Flood"
    ],
    "rows": [
     [
      "Before",
      "800",
      "Stronger"
     ],
     [
      "After",
      "600",
      "Milder"
     ]
    ]
   },
   "12": {
    "t": "setups",
    "title": "River-town project: fictional observations",
    "head": "",
    "cols": [
     "Exposed homes",
     "Flood"
    ],
    "rows": [
     [
      "Before",
      "800",
      "Stronger"
     ],
     [
      "After",
      "600",
      "Milder"
     ]
    ]
   }
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Begin with location, scale and the map legend. Explain landforms and climate without treating a continent as uniform. Define regional membership rather than confusing geography, states and organizations. Calculate density, urban share and change with the right denominator. Trace cultural and economic connections, including the effects of coercion and colonial power. Assess environmental benefits and costs across places, and distinguish an observed pattern from proof of its cause. Use specific evidence, clearly dated facts and appropriate limits for every claim.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"geography-h-world-geography-europe-and-africa","subject":"geography","level":5,"grade":9,"standard":"Geography for Life: National Geography Standards (2nd ed., 2012), standards 1, 4, 5, 9, 10, 11 and 14","title":"Europe and Africa","goal":"Use maps, regional comparisons and evidence to explain the physical and human geography of Europe and Africa.","points":20},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
