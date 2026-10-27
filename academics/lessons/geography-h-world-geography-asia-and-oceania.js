/* Original course unit. Review record: docs/review/lessons/high-completion/world-geography-u6-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "NGS 1",
  "name": "Maps, location and Pacific connections",
  "skill": "s1",
  "teach": [
   "Asia spans Arctic, temperate, tropical and arid environments across a vast part of Eurasia; it is not a single climate or culture. Oceania links Australia, New Zealand and many Pacific islands, with regional definitions that vary by purpose. Read latitude north or south of the Equator and longitude east or west of the prime meridian. For orientation, rounded reference positions put Tokyo near 36°N, 140°E, Sydney near 34°S, 151°E and Wellington near 41°S, 175°E. These are approximate reference points, not city boundaries. All unnamed places and numerical practice datasets in this unit are fictional.",
   "A Pacific-centered map helps show connections split by a map edge. Longitudes 170°E and 170°W are 20 degrees apart along the shorter longitudinal interval, not 340. That angular difference is not a fixed ground distance at all latitudes. The International Date Line roughly follows 180° longitude but bends around territories; civil time follows legal offsets, not longitude alone. In a fictional comparison, when UTC is Monday 18:00, a UTC+10 port reads Tuesday 04:00. Always include the date and the stated offset, and do not assume one time zone covers a large country.",
   "Choose a map for its task. An equal-area projection supports area comparisons, while every flat world map distorts some properties. A scale of 1:2,000,000 means 1 cm represents 20 km on the ground; 3 cm then represents 60 km along the measured map line. A straight-line map distance need not equal a ferry or road route. A GIS can overlay settlements, elevation and transport to examine access, but results depend on data resolution, dates and definitions. A map symbol locates selected information rather than representing every nearby person."
  ],
  "boards": [
   [
    "Asia and Oceania contain many environments",
    "Tokyo: about 36°N, 140°E",
    "Sydney: about 34°S, 151°E",
    "Wellington: about 41°S, 175°E"
   ],
   [
    "Across 180°: 170°E to 170°W is 20°",
    "The Date Line bends around territories",
    "UTC Monday 18:00 plus 10 h: Tuesday 04:00",
    "Use stated civil offsets and dates"
   ],
   [
    "At 1:2,000,000, one map cm represents 20 km",
    "3 cm represents 60 km along the measured line",
    "Projection and route choice affect interpretation",
    "GIS results inherit data quality and definitions"
   ]
  ],
  "eqs": [
   "Latitude gives north/south; longitude gives east/west",
   "Local time = UTC + stated offset, with date rollover",
   "3 cm × 2,000,000 = 6,000,000 cm = 60 km"
  ],
  "questions": [
   [
    "At the rounded reference position 36°N, 140°E, which hemispheres contain Tokyo?",
    "Northern and Eastern",
    "Southern and Eastern",
    "Northern and Western",
    "N identifies north of the Equator and E east of the prime meridian; neither symbol describes population or climate."
   ],
   [
    "At approximately 34°S, 151°E, which hemispheres contain Sydney?",
    "Southern and Eastern",
    "Northern and Western",
    "Southern and Western",
    "Sydney's stated south latitude and east longitude locate it in the Southern and Eastern Hemispheres."
   ],
   [
    "Using the rounded positions Sydney 34°S and Wellington 41°S, which is farther south?",
    "Wellington",
    "Sydney",
    "They have the same latitude",
    "A larger south-latitude magnitude is farther from the Equator toward the South Pole: 41°S lies south of 34°S."
   ],
   [
    "What is the shorter longitudinal angular separation between 170°E and 170°W?",
    "20 degrees",
    "340 degrees",
    "0 degrees",
    "Each location is ten degrees from 180°, so the shorter interval crossing that meridian is twenty degrees."
   ],
   [
    "Why does a 20-degree longitude interval not always mean the same ground distance?",
    "Meridians converge toward the poles",
    "Latitude lines are all equally long",
    "Longitude is a currency measure",
    "A degree of longitude spans less distance at higher absolute latitudes because meridians converge."
   ],
   [
    "What best describes the International Date Line?",
    "A civil-date boundary roughly following 180° with deviations",
    "The Equator without exceptions",
    "A line separating all land from all ocean",
    "The Date Line broadly follows the antimeridian but deviates around territories and is not the Equator."
   ],
   [
    "At UTC Monday 21:00, what is local time in a fictional port using UTC+8?",
    "Tuesday 05:00",
    "Monday 13:00",
    "Monday 05:00",
    "Adding eight hours to Monday 21:00 crosses midnight and gives Tuesday 05:00."
   ],
   [
    "At UTC Tuesday 03:00, what is local time in a fictional port using UTC-6?",
    "Monday 21:00",
    "Tuesday 09:00",
    "Wednesday 21:00",
    "Subtracting six hours moves back across midnight to Monday 21:00; the date changes as well as the clock."
   ],
   [
    "On a 1:3000000 map, a measured line is 4 cm long. What ground distance does it represent?",
    "120 km",
    "12 km",
    "12000 km",
    "Four map centimeters represent 12,000,000 ground centimeters, equivalent to 120 kilometers."
   ],
   [
    "Why might the actual shipping route between two islands exceed a straight line on a map?",
    "Navigation routes must account for land, channels and operating conditions",
    "All map scales are necessarily false",
    "Ships can only travel due north",
    "A scaled straight line measures one geometric distance, while a usable route follows additional constraints."
   ],
   [
    "Which projection property is most directly useful for comparing island land areas?",
    "Equal area",
    "Equal spelling of place names",
    "Making every route a straight line",
    "An equal-area projection preserves relative areas, though it still distorts other properties such as shapes or angles."
   ],
   [
    "Which GIS combination most directly supports a study of access to coastal evacuation shelters?",
    "Settlement locations, elevation, roads and shelter locations",
    "Only the color of national flags",
    "Only a list of city names without locations",
    "Spatial access depends on where people, hazards, routes and destinations are, and on the quality of those datasets."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Locate Asia–Pacific reference points",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      135,
      59
     ],
     "P1": [
      525,
      59
     ],
     "P2": [
      135,
      93
     ],
     "P3": [
      525,
      93
     ],
     "P4": [
      135,
      127
     ],
     "P5": [
      525,
      127
     ],
     "P6": [
      135,
      161
     ],
     "P7": [
      525,
      161
     ],
     "P8": [
      135,
      195
     ],
     "P9": [
      525,
      195
     ],
     "P10": [
      135,
      203.5
     ],
     "P11": [
      135,
      50.5
     ],
     "P12": [
      265,
      203.5
     ],
     "P13": [
      265,
      50.5
     ],
     "P14": [
      395,
      203.5
     ],
     "P15": [
      395,
      50.5
     ],
     "P16": [
      460,
      203.5
     ],
     "P17": [
      460,
      50.5
     ],
     "P18": [
      525,
      203.5
     ],
     "P19": [
      525,
      50.5
     ],
     "P20": [
      200,
      188.2
     ],
     "P21": [
      271.5,
      69.19999999999999
     ],
     "P22": [
      427.5,
      57.30000000000001
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22",
    "dots": "",
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
      "col": 3,
      "arrows": 0,
      "dash": true,
      "w": 1
     },
     {
      "v": "P18P19",
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
       320,
       217
      ],
      "text": "Rounded reference points; no city boundaries",
      "col": 0
     },
     {
      "at": [
       98,
       59
      ],
      "text": "40°S",
      "col": 0
     },
     {
      "at": [
       98,
       93
      ],
      "text": "20°S",
      "col": 0
     },
     {
      "at": [
       98,
       127
      ],
      "text": "0°",
      "col": 0
     },
     {
      "at": [
       98,
       161
      ],
      "text": "20°N",
      "col": 0
     },
     {
      "at": [
       98,
       195
      ],
      "text": "40°N",
      "col": 0
     },
     {
      "at": [
       135,
       31
      ],
      "text": "130°E",
      "col": 0
     },
     {
      "at": [
       265,
       31
      ],
      "text": "150°E",
      "col": 0
     },
     {
      "at": [
       395,
       31
      ],
      "text": "170°E",
      "col": 0
     },
     {
      "at": [
       525,
       31
      ],
      "text": "170°W",
      "col": 0
     },
     {
      "at": [
       258,
       189
      ],
      "text": "Tokyo",
      "col": 1
     },
     {
      "at": [
       222,
       81
      ],
      "text": "Sydney",
      "col": 2
     },
     {
      "at": [
       475,
       65
      ],
      "text": "Wellington",
      "col": 3
     },
     {
      "at": [
       460,
       197
      ],
      "text": "180°",
      "col": 3
     }
    ],
    "circles": [
     {
      "c": "P20",
      "r": 4,
      "col": 1
     },
     {
      "c": "P21",
      "r": 4,
      "col": 2
     },
     {
      "c": "P22",
      "r": 4,
      "col": 3
     }
    ]
   },
   {
    "t": "figure",
    "title": "Time changes can cross midnight",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      98,
      103
     ],
     "P1": [
      552,
      103
     ],
     "P2": [
      119,
      112
     ],
     "P3": [
      119,
      93
     ],
     "P4": [
      341,
      112
     ],
     "P5": [
      341,
      93
     ],
     "P6": [
      489,
      112
     ],
     "P7": [
      489,
      93
     ],
     "P8": [
      119,
      171
     ],
     "P9": [
      489,
      171
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
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
      "v": "P2P3",
      "col": 1,
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
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 2
     },
     {
      "v": "P8P9",
      "col": 2,
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
       211
      ],
      "text": "Fictional UTC+10 port: add ten hours",
      "col": 0
     },
     {
      "at": [
       119,
       135
      ],
      "text": "18:00",
      "col": 1
     },
     {
      "at": [
       119,
       65
      ],
      "text": "Monday UTC",
      "col": 1
     },
     {
      "at": [
       341,
       135
      ],
      "text": "00:00",
      "col": 0
     },
     {
      "at": [
       341,
       65
      ],
      "text": "Tuesday",
      "col": 0
     },
     {
      "at": [
       489,
       135
      ],
      "text": "04:00",
      "col": 2
     },
     {
      "at": [
       489,
       65
      ],
      "text": "Tuesday local",
      "col": 2
     },
     {
      "at": [
       320,
       183
      ],
      "text": "+10 hours",
      "col": 2
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Map scale is a unit conversion",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      170,
      139
     ],
     "P1": [
      270,
      139
     ],
     "P2": [
      270,
      117
     ],
     "P3": [
      170,
      117
     ],
     "P4": [
      270,
      139
     ],
     "P5": [
      370,
      139
     ],
     "P6": [
      370,
      117
     ],
     "P7": [
      270,
      117
     ],
     "P8": [
      370,
      139
     ],
     "P9": [
      470,
      139
     ],
     "P10": [
      470,
      117
     ],
     "P11": [
      370,
      117
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
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
     }
    ],
    "notes": [
     {
      "at": [
       320,
       213
      ],
      "text": "1:2,000,000 scale; schematic ruler",
      "col": 0
     },
     {
      "at": [
       170,
       154
      ],
      "text": "0 cm",
      "col": 0
     },
     {
      "at": [
       170,
       92
      ],
      "text": "0 km",
      "col": 0
     },
     {
      "at": [
       270,
       154
      ],
      "text": "1 cm",
      "col": 0
     },
     {
      "at": [
       270,
       92
      ],
      "text": "20 km",
      "col": 0
     },
     {
      "at": [
       370,
       154
      ],
      "text": "2 cm",
      "col": 0
     },
     {
      "at": [
       370,
       92
      ],
      "text": "40 km",
      "col": 0
     },
     {
      "at": [
       470,
       154
      ],
      "text": "3 cm",
      "col": 0
     },
     {
      "at": [
       470,
       92
      ],
      "text": "60 km",
      "col": 0
     },
     {
      "at": [
       320,
       46
      ],
      "text": "3 map cm represent 60 ground km; screen size varies",
      "col": 0
     }
    ],
    "circles": []
   }
  ]
 },
 {
  "code": "NGS 4",
  "name": "Physical features, climates and hazards",
  "skill": "s2",
  "teach": [
   "Asia’s physical contrasts include the Himalaya and Tibetan Plateau, interior deserts and steppes, major river plains and island arcs. The India-Eurasia continental collision helps explain Himalayan mountain building and seismic activity; it is not the same mechanism as a typical volcanic island arc above oceanic subduction. The Gobi extends across Mongolia and China. Western Asia includes the Arabian Peninsula, while Central Asian interior locations often face dry conditions and long overland connections. Latitude, elevation, continentality and atmospheric circulation interact, so no single description fits the whole continent.",
   "Rivers connect uplands, plains, cities and coasts. The Ganges-Brahmaputra-Meghna delta opens toward the Bay of Bengal; the Yangtze enters the East China Sea; and the Mekong reaches the South China Sea through its delta in Viet Nam. These are distinct river systems, not one river crossing all of Asia. Deltas accumulate river-borne sediment where it is deposited, and may support farming, fisheries and dense settlement. Flooding, erosion, subsidence and salinity can also create risks. Upstream water or sediment changes can affect downstream livelihoods across borders.",
   "A monsoon is a seasonal shift in prevailing winds and associated rainfall, not one storm. In much of South Asia, the warm-season circulation carries moisture toward land, while mountains and regional circulation shape where it falls. Northern Australia’s monsoon occurs mainly in the austral warm season; central Australia is generally much drier. Seasons in temperate Australia and New Zealand occur opposite those in temperate Northern Hemisphere places, while tropical places are often better described by wet and dry seasons. A seasonal tendency does not predict every day or every year.",
   "Read a climate graph by its units and months. A fictional Northern Hemisphere station has monthly rainfall, January to December, of 10, 10, 20, 40, 80, 180, 240, 220, 140, 50, 20 and 10 mm. Annual rainfall totals 1,020 mm; June through September contribute 780 mm, about 76.5%. This concentration is consistent with a summer-wet pattern but does not identify a country by itself. In New Zealand’s South Island, prevailing westerly air rising across the Southern Alps contributes to wetter western areas and a drier eastern rain shadow; actual weather varies.",
   "Oceania includes continental landmasses, volcanic high islands and low coral islands. New Zealand lies across an active plate-boundary zone, and many western Pacific island arcs are associated with subduction. Atolls are ringlike reefs or groups of low reef islands around a lagoon; growth around a subsiding volcanic island is a classic formation pathway, not a claim that every Pacific island formed this way. The Great Barrier Reef lies off northeastern Australia. Tectonic hazards are uneven: some seafloor earthquakes can generate tsunamis by displacing water, but not every earthquake produces a tsunami or volcanic eruption."
  ],
  "boards": [
   [
    "Himalaya: India-Eurasia continental collision",
    "Tibetan Plateau lies north of the Himalaya",
    "Gobi: Mongolia and China",
    "Interior dryness differs from tropical coasts"
   ],
   [
    "Ganges-Brahmaputra-Meghna: Bay of Bengal",
    "Yangtze: East China Sea",
    "Mekong delta: South China Sea",
    "Water and sediment connect upstream and downstream"
   ],
   [
    "Monsoon: seasonal wind and rainfall pattern",
    "South Asian summer and austral summer differ",
    "Northern Australia has a monsoonal wet season",
    "Central Australia is generally much drier"
   ],
   [
    "Fictional station: 1,020 mm annual rainfall",
    "June–September: 780 mm, about 76.5%",
    "Seasonal concentration is not a country identifier",
    "Southern Alps: wet west, drier eastern rain shadow"
   ],
   [
    "High islands and coral atolls have different forms",
    "Atolls surround lagoons; origins can vary",
    "Great Barrier Reef: northeastern Australia",
    "Some, not all, earthquakes generate tsunamis"
   ]
  ],
  "eqs": [
   "Continental collision → uplift and seismic deformation",
   "River flow and sediment → downstream connections",
   "Seasonal circulation + moisture + relief → rainfall pattern",
   "780 / 1,020 × 100 ≈ 76.5% of annual rainfall",
   "Hazard potential depends on process, location and exposure"
  ],
  "questions": [
   [
    "Which tectonic process is central to formation of the Himalaya?",
    "Collision of the Indian and Eurasian continental plates",
    "Separation of Australia from the Moon",
    "Daily tides alone building mountains",
    "Continental collision thickens and deforms crust, helping explain Himalayan uplift and earthquakes."
   ],
   [
    "The Tibetan Plateau lies generally on which side of the Himalaya?",
    "North",
    "Due south across the Indian Ocean",
    "West across the Atlantic",
    "The plateau lies north of the Himalayan mountain belt; their formation is linked to India-Eurasia collision."
   ],
   [
    "Across which pair of countries does the Gobi Desert extend?",
    "Mongolia and China",
    "Japan and New Zealand",
    "India and Sri Lanka",
    "The Gobi is an interior Asian desert spanning Mongolia and China, not a tropical island or Indian Ocean feature."
   ],
   [
    "Why can a high Asian plateau be colder than a nearby lowland at similar latitude?",
    "Elevation influences temperature",
    "Latitude is the only climate control",
    "Every inland place must be warmer than every coast",
    "Elevation contributes to cooler conditions, alongside circulation and other controls; latitude alone is insufficient."
   ],
   [
    "Which peninsula is a major part of Western Asia?",
    "The Arabian Peninsula",
    "The Iberian Peninsula",
    "The Antarctic Peninsula",
    "The Arabian Peninsula is in Western Asia; the other named peninsulas belong to different world regions."
   ],
   [
    "The Ganges-Brahmaputra-Meghna delta opens toward which body of water?",
    "Bay of Bengal",
    "Baltic Sea",
    "Great Australian Bight",
    "This South Asian delta reaches the Bay of Bengal, connecting large river basins to the northern Indian Ocean."
   ],
   [
    "The Yangtze River enters which sea?",
    "East China Sea",
    "Mediterranean Sea",
    "Tasman Sea",
    "The Yangtze reaches the East China Sea near Shanghai, a different outlet from the Mekong or Ganges systems."
   ],
   [
    "The Mekong delta in Viet Nam opens toward which sea?",
    "South China Sea",
    "Caspian Sea",
    "Red Sea",
    "The Mekong flows through its delta to the South China Sea; the Caspian is an inland basin and the Red Sea is elsewhere."
   ],
   [
    "What process builds a river delta when sediment supply and conditions allow?",
    "Deposition of river-borne sediment near the outlet",
    "Only removal of every grain by wind",
    "Freezing of the whole ocean into rock",
    "Deltas develop through sediment deposition, balanced against transport, erosion, subsidence and relative sea-level change."
   ],
   [
    "Why can upstream dams affect downstream deltas?",
    "They can change water flow and sediment delivery",
    "Political borders block all river effects",
    "Every dam necessarily increases all downstream sediment",
    "Reservoir operations and sediment trapping can alter downstream conditions; specific effects depend on the river and project."
   ],
   [
    "Which description defines a monsoon most accurately?",
    "A seasonal wind shift linked to a rainfall pattern",
    "One isolated afternoon thunderstorm",
    "Any earthquake near a coast",
    "Monsoons are seasonal circulation patterns, not individual storms or tectonic events."
   ],
   [
    "In much of South Asia, which process helps produce summer monsoon rainfall?",
    "Moist air moves toward land and rises under favorable conditions",
    "All ocean water becomes ice in summer",
    "Mountains remove the need for atmospheric moisture",
    "Seasonal circulation brings moisture, and lifting can produce rain; local amounts depend on relief and other conditions."
   ],
   [
    "Which part of Australia is most associated with a tropical monsoonal wet season?",
    "Northern Australia",
    "Only the central desert interior",
    "Every part equally throughout the year",
    "Northern Australia experiences the tropical monsoon; the continent contains distinct climate regions."
   ],
   [
    "Why is describing all Australia as humid tropical inaccurate?",
    "Large interior areas are arid or semiarid and climates vary",
    "Australia has no climatic variation",
    "Every Australian mountain is a rainforest",
    "Australian climates range across tropical, arid and temperate settings, so one coastal pattern cannot describe the whole country."
   ],
   [
    "When it is meteorological summer in temperate New Zealand, what broad season is it in temperate Japan?",
    "Winter",
    "Summer everywhere on Earth",
    "Neither hemisphere has seasons",
    "The two lie in opposite hemispheres, whose temperate seasonal cycles are opposite because of Earth's axial tilt."
   ],
   [
    "An original station has monthly rainfall of 10,10,20,40,80,180,240,220,140,50,20,10 mm from January onward. What is the annual total?",
    "1020 mm",
    "780 mm",
    "85 mm",
    "Adding all twelve monthly amounts gives 1,020 mm; 780 is a seasonal subtotal and 85 is the monthly mean."
   ],
   [
    "For an original station with 1020 mm annually and 780 mm in June–September, what percentage falls in those four months to one decimal place?",
    "76.5%",
    "24.0%",
    "130.8%",
    "The seasonal amount is the numerator: 780/1020 × 100 is about 76.5%."
   ],
   [
    "At an original station, July rainfall is 240 mm and January rainfall is 10 mm. What is the July-minus-January difference?",
    "230 mm",
    "24 mm",
    "250 mm",
    "A difference subtracts the two amounts, giving 240 - 10 = 230 mm; the ratio would be a different measure."
   ],
   [
    "Why are many western slopes of New Zealand's Southern Alps wetter than areas to the east?",
    "Prevailing westerly air rises and loses moisture before descending eastward",
    "The west is necessarily closer to the Equator at every latitude",
    "Mountains cannot affect precipitation",
    "Orographic lifting and a leeward rain shadow contribute to the contrast, although weather varies over time and place."
   ],
   [
    "What is an atoll?",
    "A ringlike reef or low reef islands surrounding a lagoon",
    "A large continental glacier",
    "Any inland freshwater reservoir",
    "Atolls characteristically surround lagoons; they differ from continental mountains or artificial inland lakes."
   ],
   [
    "Which is a classic pathway of atoll development?",
    "Reef growth around a gradually subsiding volcanic island",
    "An iceberg becoming a permanent tropical reef overnight",
    "A desert dune turning directly into a coral animal",
    "Reef growth and island subsidence can leave a ring surrounding a lagoon, under conditions that support reef growth."
   ],
   [
    "The Great Barrier Reef lies off which part of Australia?",
    "The northeast coast",
    "The southwest interior desert",
    "The inland center",
    "The reef system lies in waters along northeastern Australia, not in the dry interior or southwestern region."
   ],
   [
    "Which statement about earthquakes and tsunamis is accurate?",
    "Some seafloor earthquakes displace water enough to generate tsunamis",
    "Every earthquake creates the same tsunami",
    "Only wind can ever generate a tsunami",
    "Tsunami generation depends on water displacement and earthquake characteristics; many earthquakes do not generate one."
   ],
   [
    "Why should island hazard exposure be evaluated locally?",
    "Plate setting, elevation, coast shape and settlement differ",
    "Every Pacific island has identical geology and elevation",
    "An ocean region has only one kind of hazard",
    "Continental, volcanic and coral islands have different settings, and people and infrastructure face different exposures."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "The Himalaya and Tibetan Plateau",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      73,
      77
     ],
     "P1": [
      211,
      77
     ],
     "P2": [
      252,
      123
     ],
     "P3": [
      278,
      90
     ],
     "P4": [
      305,
      141
     ],
     "P5": [
      331,
      105
     ],
     "P6": [
      363,
      129
     ],
     "P7": [
      393,
      112
     ],
     "P8": [
      562,
      112
     ],
     "P9": [
      562,
      58
     ],
     "P10": [
      73,
      58
     ],
     "P11": [
      97,
      100
     ],
     "P12": [
      204,
      100
     ],
     "P13": [
      550,
      144
     ],
     "P14": [
      442,
      144
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14",
    "dots": "",
    "segs": [
     {
      "v": "P11P12",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P13P14",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3P4P5P6P7P8P9P10",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Simplified continental-collision cross-section",
      "col": 0
     },
     {
      "at": [
       146,
       131
      ],
      "text": "India / south",
      "col": 2
     },
     {
      "at": [
       488,
       177
      ],
      "text": "Eurasia / north",
      "col": 3
     },
     {
      "at": [
       298,
       163
      ],
      "text": "Himalaya",
      "col": 1
     },
     {
      "at": [
       454,
       88
      ],
      "text": "Plateau",
      "col": 1
     },
     {
      "at": [
       320,
       32
      ],
      "text": "Convergence deforms and thickens continental crust",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Different river systems and outlets",
    "head": "River system",
    "cols": [
     "Outlet"
    ],
    "rows": [
     [
      "Ganges–Brahmaputra–Meghna",
      "Bay of Bengal"
     ],
     [
      "Yangtze",
      "East China Sea"
     ],
     [
      "Mekong",
      "South China Sea"
     ]
    ]
   },
   null,
   {
    "t": "figure",
    "title": "Interpret seasonal rainfall",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      98,
      194
     ],
     "P1": [
      98,
      55
     ],
     "P2": [
      98,
      55
     ],
     "P3": [
      563,
      55
     ],
     "P4": [
      111,
      60
     ],
     "P5": [
      133,
      60
     ],
     "P6": [
      133,
      55
     ],
     "P7": [
      111,
      55
     ],
     "P8": [
      149,
      60
     ],
     "P9": [
      171,
      60
     ],
     "P10": [
      171,
      55
     ],
     "P11": [
      149,
      55
     ],
     "P12": [
      187,
      65
     ],
     "P13": [
      209,
      65
     ],
     "P14": [
      209,
      55
     ],
     "P15": [
      187,
      55
     ],
     "P16": [
      225,
      75
     ],
     "P17": [
      247,
      75
     ],
     "P18": [
      247,
      55
     ],
     "P19": [
      225,
      55
     ],
     "P20": [
      263,
      95
     ],
     "P21": [
      285,
      95
     ],
     "P22": [
      285,
      55
     ],
     "P23": [
      263,
      55
     ],
     "P24": [
      301,
      145
     ],
     "P25": [
      323,
      145
     ],
     "P26": [
      323,
      55
     ],
     "P27": [
      301,
      55
     ],
     "P28": [
      339,
      175
     ],
     "P29": [
      361,
      175
     ],
     "P30": [
      361,
      55
     ],
     "P31": [
      339,
      55
     ],
     "P32": [
      377,
      165
     ],
     "P33": [
      399,
      165
     ],
     "P34": [
      399,
      55
     ],
     "P35": [
      377,
      55
     ],
     "P36": [
      415,
      125
     ],
     "P37": [
      437,
      125
     ],
     "P38": [
      437,
      55
     ],
     "P39": [
      415,
      55
     ],
     "P40": [
      453,
      80
     ],
     "P41": [
      475,
      80
     ],
     "P42": [
      475,
      55
     ],
     "P43": [
      453,
      55
     ],
     "P44": [
      491,
      65
     ],
     "P45": [
      513,
      65
     ],
     "P46": [
      513,
      55
     ],
     "P47": [
      491,
      55
     ],
     "P48": [
      529,
      60
     ],
     "P49": [
      551,
      60
     ],
     "P50": [
      551,
      55
     ],
     "P51": [
      529,
      55
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51",
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
     },
     {
      "v": "P20P21P22P23",
      "col": 1
     },
     {
      "v": "P24P25P26P27",
      "col": 2
     },
     {
      "v": "P28P29P30P31",
      "col": 2
     },
     {
      "v": "P32P33P34P35",
      "col": 2
     },
     {
      "v": "P36P37P38P39",
      "col": 2
     },
     {
      "v": "P40P41P42P43",
      "col": 1
     },
     {
      "v": "P44P45P46P47",
      "col": 1
     },
     {
      "v": "P48P49P50P51",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional station: monthly rainfall, mm",
      "col": 0
     },
     {
      "at": [
       74,
       55
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       74,
       105
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       74,
       155
      ],
      "text": "200",
      "col": 0
     },
     {
      "at": [
       122,
       37
      ],
      "text": "1",
      "col": 0
     },
     {
      "at": [
       160,
       37
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       198,
       37
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       236,
       37
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       274,
       37
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       312,
       37
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       350,
       37
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       388,
       37
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       426,
       37
      ],
      "text": "9",
      "col": 0
     },
     {
      "at": [
       464,
       37
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       502,
       37
      ],
      "text": "11",
      "col": 0
     },
     {
      "at": [
       540,
       37
      ],
      "text": "12",
      "col": 0
     },
     {
      "at": [
       320,
       196
      ],
      "text": "Months 6–9: 780 of 1,020 mm",
      "col": 2
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Different Pacific island forms",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      76,
      78
     ],
     "P1": [
      290,
      78
     ],
     "P2": [
      89,
      78
     ],
     "P3": [
      183,
      175
     ],
     "P4": [
      278,
      78
     ],
     "P5": [
      534,
      121
     ],
     "P6": [
      531.7170303613676,
      103.6591239781311
     ],
     "P7": [
      531.7170303613676,
      103.6591239781311
     ],
     "P8": [
      525.0237020535574,
      87.5
     ],
     "P9": [
      525.0237020535574,
      87.5
     ],
     "P10": [
      514.3761543394987,
      73.62384566050133
     ],
     "P11": [
      514.3761543394987,
      73.62384566050133
     ],
     "P12": [
      500.5,
      62.97629794644263
     ],
     "P13": [
      500.5,
      62.97629794644263
     ],
     "P14": [
      484.3408760218689,
      56.28296963863244
     ],
     "P15": [
      484.3408760218689,
      56.28296963863244
     ],
     "P16": [
      467,
      54
     ],
     "P17": [
      467,
      54
     ],
     "P18": [
      449.6591239781311,
      56.28296963863244
     ],
     "P19": [
      449.6591239781311,
      56.28296963863244
     ],
     "P20": [
      433.5,
      62.9762979464426
     ],
     "P21": [
      433.5,
      62.9762979464426
     ],
     "P22": [
      419.62384566050133,
      73.6238456605013
     ],
     "P23": [
      419.62384566050133,
      73.6238456605013
     ],
     "P24": [
      408.9762979464426,
      87.5
     ],
     "P25": [
      408.9762979464426,
      87.5
     ],
     "P26": [
      402.28296963863244,
      103.6591239781311
     ],
     "P27": [
      402.28296963863244,
      103.6591239781311
     ],
     "P28": [
      400,
      121
     ],
     "P29": [
      400,
      121
     ],
     "P30": [
      402.28296963863244,
      138.3408760218689
     ],
     "P31": [
      402.28296963863244,
      138.3408760218689
     ],
     "P32": [
      408.9762979464426,
      154.5
     ],
     "P33": [
      408.9762979464426,
      154.5
     ],
     "P34": [
      419.6238456605013,
      168.37615433949867
     ],
     "P35": [
      419.6238456605013,
      168.37615433949867
     ],
     "P36": [
      433.5,
      179.02370205355737
     ],
     "P37": [
      433.5,
      179.02370205355737
     ],
     "P38": [
      449.6591239781311,
      185.71703036136756
     ],
     "P39": [
      449.6591239781311,
      185.71703036136756
     ],
     "P40": [
      467,
      188
     ],
     "P41": [
      467,
      188
     ],
     "P42": [
      484.34087602186884,
      185.7170303613676
     ],
     "P43": [
      484.34087602186884,
      185.7170303613676
     ],
     "P44": [
      500.5,
      179.02370205355737
     ],
     "P45": [
      500.5,
      179.02370205355737
     ],
     "P46": [
      514.3761543394987,
      168.3761543394987
     ],
     "P47": [
      514.3761543394987,
      168.3761543394987
     ],
     "P48": [
      525.0237020535574,
      154.50000000000003
     ],
     "P49": [
      525.0237020535574,
      154.50000000000003
     ],
     "P50": [
      531.7170303613675,
      138.34087602186895
     ],
     "P51": [
      531.7170303613675,
      138.34087602186895
     ],
     "P52": [
      534,
      121.00000000000003
     ],
     "P53": [
      534,
      121
     ],
     "P54": [
      514.3761543394987,
      73.62384566050133
     ],
     "P55": [
      467,
      54
     ],
     "P56": [
      419.62384566050133,
      73.6238456605013
     ],
     "P57": [
      400,
      121
     ],
     "P58": [
      419.6238456605013,
      168.37615433949867
     ],
     "P59": [
      467,
      188
     ],
     "P60": [
      514.3761543394987,
      168.3761543394987
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51P52P53P54P55P56P57P58P59P60",
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
      "v": "P5P6",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P7P8",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P9P10",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P11P12",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P13P14",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P15P16",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P17P18",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P19P20",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P21P22",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P23P24",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P25P26",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P27P28",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P29P30",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P31P32",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P33P34",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P35P36",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P37P38",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P39P40",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P41P42",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P43P44",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P45P46",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P47P48",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P49P50",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     },
     {
      "v": "P51P52",
      "col": 2,
      "arrows": 0,
      "dash": false,
      "w": 3
     }
    ],
    "polys": [
     {
      "v": "P2P3P4",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       183,
       212
      ],
      "text": "High island: section",
      "col": 0
     },
     {
      "at": [
       467,
       212
      ],
      "text": "Atoll: plan view",
      "col": 0
     },
     {
      "at": [
       183,
       104
      ],
      "text": "Volcanic",
      "col": 1
     },
     {
      "at": [
       183,
       35
      ],
      "text": "Sea surface shown",
      "col": 0
     },
     {
      "at": [
       467,
       121
      ],
      "text": "Lagoon",
      "col": 0
     },
     {
      "at": [
       467,
       33
      ],
      "text": "Reef rim and low islets",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P53",
      "r": 6,
      "col": 1
     },
     {
      "c": "P54",
      "r": 6,
      "col": 1
     },
     {
      "c": "P55",
      "r": 6,
      "col": 1
     },
     {
      "c": "P56",
      "r": 6,
      "col": 1
     },
     {
      "c": "P57",
      "r": 6,
      "col": 1
     },
     {
      "c": "P58",
      "r": 6,
      "col": 1
     },
     {
      "c": "P59",
      "r": 6,
      "col": 1
     },
     {
      "c": "P60",
      "r": 6,
      "col": 1
     }
    ]
   }
  ],
  "qpics": {
   "15": {
    "t": "figure",
    "title": "Original monthly rainfall evidence",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      98,
      194
     ],
     "P1": [
      98,
      55
     ],
     "P2": [
      98,
      55
     ],
     "P3": [
      563,
      55
     ],
     "P4": [
      111,
      60
     ],
     "P5": [
      133,
      60
     ],
     "P6": [
      133,
      55
     ],
     "P7": [
      111,
      55
     ],
     "P8": [
      149,
      60
     ],
     "P9": [
      171,
      60
     ],
     "P10": [
      171,
      55
     ],
     "P11": [
      149,
      55
     ],
     "P12": [
      187,
      65
     ],
     "P13": [
      209,
      65
     ],
     "P14": [
      209,
      55
     ],
     "P15": [
      187,
      55
     ],
     "P16": [
      225,
      75
     ],
     "P17": [
      247,
      75
     ],
     "P18": [
      247,
      55
     ],
     "P19": [
      225,
      55
     ],
     "P20": [
      263,
      95
     ],
     "P21": [
      285,
      95
     ],
     "P22": [
      285,
      55
     ],
     "P23": [
      263,
      55
     ],
     "P24": [
      301,
      145
     ],
     "P25": [
      323,
      145
     ],
     "P26": [
      323,
      55
     ],
     "P27": [
      301,
      55
     ],
     "P28": [
      339,
      175
     ],
     "P29": [
      361,
      175
     ],
     "P30": [
      361,
      55
     ],
     "P31": [
      339,
      55
     ],
     "P32": [
      377,
      165
     ],
     "P33": [
      399,
      165
     ],
     "P34": [
      399,
      55
     ],
     "P35": [
      377,
      55
     ],
     "P36": [
      415,
      125
     ],
     "P37": [
      437,
      125
     ],
     "P38": [
      437,
      55
     ],
     "P39": [
      415,
      55
     ],
     "P40": [
      453,
      80
     ],
     "P41": [
      475,
      80
     ],
     "P42": [
      475,
      55
     ],
     "P43": [
      453,
      55
     ],
     "P44": [
      491,
      65
     ],
     "P45": [
      513,
      65
     ],
     "P46": [
      513,
      55
     ],
     "P47": [
      491,
      55
     ],
     "P48": [
      529,
      60
     ],
     "P49": [
      551,
      60
     ],
     "P50": [
      551,
      55
     ],
     "P51": [
      529,
      55
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51",
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
     },
     {
      "v": "P20P21P22P23",
      "col": 1
     },
     {
      "v": "P24P25P26P27",
      "col": 2
     },
     {
      "v": "P28P29P30P31",
      "col": 2
     },
     {
      "v": "P32P33P34P35",
      "col": 2
     },
     {
      "v": "P36P37P38P39",
      "col": 2
     },
     {
      "v": "P40P41P42P43",
      "col": 1
     },
     {
      "v": "P44P45P46P47",
      "col": 1
     },
     {
      "v": "P48P49P50P51",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Original station: monthly rainfall, mm",
      "col": 0
     },
     {
      "at": [
       74,
       55
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       74,
       105
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       74,
       155
      ],
      "text": "200",
      "col": 0
     },
     {
      "at": [
       122,
       37
      ],
      "text": "1",
      "col": 0
     },
     {
      "at": [
       160,
       37
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       198,
       37
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       236,
       37
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       274,
       37
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       312,
       37
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       350,
       37
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       388,
       37
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       426,
       37
      ],
      "text": "9",
      "col": 0
     },
     {
      "at": [
       464,
       37
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       502,
       37
      ],
      "text": "11",
      "col": 0
     },
     {
      "at": [
       540,
       37
      ],
      "text": "12",
      "col": 0
     }
    ],
    "circles": []
   },
   "16": {
    "t": "figure",
    "title": "Original monthly rainfall evidence",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      98,
      194
     ],
     "P1": [
      98,
      55
     ],
     "P2": [
      98,
      55
     ],
     "P3": [
      563,
      55
     ],
     "P4": [
      111,
      60
     ],
     "P5": [
      133,
      60
     ],
     "P6": [
      133,
      55
     ],
     "P7": [
      111,
      55
     ],
     "P8": [
      149,
      60
     ],
     "P9": [
      171,
      60
     ],
     "P10": [
      171,
      55
     ],
     "P11": [
      149,
      55
     ],
     "P12": [
      187,
      65
     ],
     "P13": [
      209,
      65
     ],
     "P14": [
      209,
      55
     ],
     "P15": [
      187,
      55
     ],
     "P16": [
      225,
      75
     ],
     "P17": [
      247,
      75
     ],
     "P18": [
      247,
      55
     ],
     "P19": [
      225,
      55
     ],
     "P20": [
      263,
      95
     ],
     "P21": [
      285,
      95
     ],
     "P22": [
      285,
      55
     ],
     "P23": [
      263,
      55
     ],
     "P24": [
      301,
      145
     ],
     "P25": [
      323,
      145
     ],
     "P26": [
      323,
      55
     ],
     "P27": [
      301,
      55
     ],
     "P28": [
      339,
      175
     ],
     "P29": [
      361,
      175
     ],
     "P30": [
      361,
      55
     ],
     "P31": [
      339,
      55
     ],
     "P32": [
      377,
      165
     ],
     "P33": [
      399,
      165
     ],
     "P34": [
      399,
      55
     ],
     "P35": [
      377,
      55
     ],
     "P36": [
      415,
      125
     ],
     "P37": [
      437,
      125
     ],
     "P38": [
      437,
      55
     ],
     "P39": [
      415,
      55
     ],
     "P40": [
      453,
      80
     ],
     "P41": [
      475,
      80
     ],
     "P42": [
      475,
      55
     ],
     "P43": [
      453,
      55
     ],
     "P44": [
      491,
      65
     ],
     "P45": [
      513,
      65
     ],
     "P46": [
      513,
      55
     ],
     "P47": [
      491,
      55
     ],
     "P48": [
      529,
      60
     ],
     "P49": [
      551,
      60
     ],
     "P50": [
      551,
      55
     ],
     "P51": [
      529,
      55
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51",
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
     },
     {
      "v": "P20P21P22P23",
      "col": 1
     },
     {
      "v": "P24P25P26P27",
      "col": 2
     },
     {
      "v": "P28P29P30P31",
      "col": 2
     },
     {
      "v": "P32P33P34P35",
      "col": 2
     },
     {
      "v": "P36P37P38P39",
      "col": 2
     },
     {
      "v": "P40P41P42P43",
      "col": 1
     },
     {
      "v": "P44P45P46P47",
      "col": 1
     },
     {
      "v": "P48P49P50P51",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Original station: monthly rainfall, mm",
      "col": 0
     },
     {
      "at": [
       74,
       55
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       74,
       105
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       74,
       155
      ],
      "text": "200",
      "col": 0
     },
     {
      "at": [
       122,
       37
      ],
      "text": "1",
      "col": 0
     },
     {
      "at": [
       160,
       37
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       198,
       37
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       236,
       37
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       274,
       37
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       312,
       37
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       350,
       37
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       388,
       37
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       426,
       37
      ],
      "text": "9",
      "col": 0
     },
     {
      "at": [
       464,
       37
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       502,
       37
      ],
      "text": "11",
      "col": 0
     },
     {
      "at": [
       540,
       37
      ],
      "text": "12",
      "col": 0
     }
    ],
    "circles": []
   },
   "17": {
    "t": "figure",
    "title": "Original monthly rainfall evidence",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      98,
      194
     ],
     "P1": [
      98,
      55
     ],
     "P2": [
      98,
      55
     ],
     "P3": [
      563,
      55
     ],
     "P4": [
      111,
      60
     ],
     "P5": [
      133,
      60
     ],
     "P6": [
      133,
      55
     ],
     "P7": [
      111,
      55
     ],
     "P8": [
      149,
      60
     ],
     "P9": [
      171,
      60
     ],
     "P10": [
      171,
      55
     ],
     "P11": [
      149,
      55
     ],
     "P12": [
      187,
      65
     ],
     "P13": [
      209,
      65
     ],
     "P14": [
      209,
      55
     ],
     "P15": [
      187,
      55
     ],
     "P16": [
      225,
      75
     ],
     "P17": [
      247,
      75
     ],
     "P18": [
      247,
      55
     ],
     "P19": [
      225,
      55
     ],
     "P20": [
      263,
      95
     ],
     "P21": [
      285,
      95
     ],
     "P22": [
      285,
      55
     ],
     "P23": [
      263,
      55
     ],
     "P24": [
      301,
      145
     ],
     "P25": [
      323,
      145
     ],
     "P26": [
      323,
      55
     ],
     "P27": [
      301,
      55
     ],
     "P28": [
      339,
      175
     ],
     "P29": [
      361,
      175
     ],
     "P30": [
      361,
      55
     ],
     "P31": [
      339,
      55
     ],
     "P32": [
      377,
      165
     ],
     "P33": [
      399,
      165
     ],
     "P34": [
      399,
      55
     ],
     "P35": [
      377,
      55
     ],
     "P36": [
      415,
      125
     ],
     "P37": [
      437,
      125
     ],
     "P38": [
      437,
      55
     ],
     "P39": [
      415,
      55
     ],
     "P40": [
      453,
      80
     ],
     "P41": [
      475,
      80
     ],
     "P42": [
      475,
      55
     ],
     "P43": [
      453,
      55
     ],
     "P44": [
      491,
      65
     ],
     "P45": [
      513,
      65
     ],
     "P46": [
      513,
      55
     ],
     "P47": [
      491,
      55
     ],
     "P48": [
      529,
      60
     ],
     "P49": [
      551,
      60
     ],
     "P50": [
      551,
      55
     ],
     "P51": [
      529,
      55
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43P44P45P46P47P48P49P50P51",
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
     },
     {
      "v": "P20P21P22P23",
      "col": 1
     },
     {
      "v": "P24P25P26P27",
      "col": 2
     },
     {
      "v": "P28P29P30P31",
      "col": 2
     },
     {
      "v": "P32P33P34P35",
      "col": 2
     },
     {
      "v": "P36P37P38P39",
      "col": 2
     },
     {
      "v": "P40P41P42P43",
      "col": 1
     },
     {
      "v": "P44P45P46P47",
      "col": 1
     },
     {
      "v": "P48P49P50P51",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Original station: monthly rainfall, mm",
      "col": 0
     },
     {
      "at": [
       74,
       55
      ],
      "text": "0",
      "col": 0
     },
     {
      "at": [
       74,
       105
      ],
      "text": "100",
      "col": 0
     },
     {
      "at": [
       74,
       155
      ],
      "text": "200",
      "col": 0
     },
     {
      "at": [
       122,
       37
      ],
      "text": "1",
      "col": 0
     },
     {
      "at": [
       160,
       37
      ],
      "text": "2",
      "col": 0
     },
     {
      "at": [
       198,
       37
      ],
      "text": "3",
      "col": 0
     },
     {
      "at": [
       236,
       37
      ],
      "text": "4",
      "col": 0
     },
     {
      "at": [
       274,
       37
      ],
      "text": "5",
      "col": 0
     },
     {
      "at": [
       312,
       37
      ],
      "text": "6",
      "col": 0
     },
     {
      "at": [
       350,
       37
      ],
      "text": "7",
      "col": 0
     },
     {
      "at": [
       388,
       37
      ],
      "text": "8",
      "col": 0
     },
     {
      "at": [
       426,
       37
      ],
      "text": "9",
      "col": 0
     },
     {
      "at": [
       464,
       37
      ],
      "text": "10",
      "col": 0
     },
     {
      "at": [
       502,
       37
      ],
      "text": "11",
      "col": 0
     },
     {
      "at": [
       540,
       37
      ],
      "text": "12",
      "col": 0
     }
    ],
    "circles": []
   }
  }
 },
 {
  "code": "NGS 5",
  "name": "Regions and geographic conventions",
  "skill": "s3",
  "teach": [
   "Regions organize information using stated criteria. Eastern, Southern, Southeastern, Central and Western Asia are common subregional labels; other schemes may separately identify northern Asia. These divisions are conventions with a purpose, not barriers in nature. In a common example, Japan is East Asian, India South Asian and Viet Nam Southeast Asian. Oceania commonly includes Australia and New Zealand plus Melanesia, Micronesia and Polynesia. Using the UN statistical scheme, Fiji is in Melanesia, the Marshall Islands in Micronesia and Samoa in Polynesia. A statistical grouping does not prove that all members share one culture or political position.",
   "Distinguish countries, islands, cultural regions and organizations. New Guinea is an island whose western part is within Indonesia and whose eastern part is mostly Papua New Guinea; Papua New Guinea also includes other islands. Australia is both a country name and a continent name in the usual seven-continent convention, while Oceania is a broader regional term. The Pacific connects communities through navigation, kinship, trade and migration; a small land area does not imply an absence of important maritime connections. Map boundaries and place names have histories, and disputed or changing claims require date and source context."
  ],
  "boards": [
   [
    "Define the purpose and membership rule of a region",
    "Examples: Japan east; India south; Viet Nam southeast",
    "UN examples: Fiji Melanesia; Samoa Polynesia",
    "Regional labels do not imply cultural uniformity"
   ],
   [
    "Country, island and region are different units",
    "New Guinea is divided between two countries",
    "Papua New Guinea includes other islands too",
    "Oceania is broader than Australia alone"
   ]
  ],
  "eqs": [
   "Regional classification = selected criterion + stated purpose",
   "Island boundary ≠ state boundary ≠ cultural boundary"
  ],
  "questions": [
   [
    "Under common Asian subregional terminology, Japan is generally grouped in which region?",
    "East Asia",
    "Central Asia",
    "Western Asia",
    "Japan is normally grouped with East Asia; regional names are geographic conventions rather than measures of culture or worth."
   ],
   [
    "Under common subregional terminology, India is generally grouped in which region?",
    "South Asia",
    "Northern Europe",
    "Polynesia",
    "India is a major South Asian country; South Asia is distinct from the Pacific island regions."
   ],
   [
    "Under common subregional terminology, Viet Nam is generally grouped in which region?",
    "Southeast Asia",
    "Western Asia",
    "Central America",
    "Viet Nam lies in mainland Southeast Asia; the label is a regional classification, not a statement of uniform culture."
   ],
   [
    "In the UN statistical grouping used here, Fiji belongs to which Oceanian subregion?",
    "Melanesia",
    "Micronesia",
    "Western Asia",
    "The stated UN classification places Fiji in Melanesia; specifying the convention prevents treating all regional schemes as identical."
   ],
   [
    "In the same stated UN convention, the Marshall Islands belong to which subregion?",
    "Micronesia",
    "South Asia",
    "Eastern Europe",
    "The UN statistical scheme groups the Marshall Islands in Micronesia; this is different from a political federation."
   ],
   [
    "In the stated UN convention, Samoa belongs to which subregion?",
    "Polynesia",
    "Central Asia",
    "Melanesia",
    "Samoa is grouped in Polynesia under this convention; geographic grouping does not erase local identities."
   ],
   [
    "Why can two legitimate maps use different regional boundaries?",
    "They may classify places for different purposes",
    "Every region has one immutable natural border",
    "One must necessarily lack all geographic information",
    "Statistical, cultural, physical and functional regions use different criteria, so boundaries can differ meaningfully."
   ],
   [
    "Why is the island of New Guinea not identical to the country Papua New Guinea?",
    "The island includes Indonesian territory, and the country includes other islands",
    "Every part of the island is one independent country",
    "Papua New Guinea is only a name for Australia",
    "Island and national boundaries differ; Papua New Guinea covers the eastern portion plus other islands."
   ],
   [
    "Which statement best distinguishes Australia and Oceania in the convention used here?",
    "Oceania is a broader region including Australia and other Pacific places",
    "They are always exactly the same geographic unit",
    "Oceania means only Australia's capital city",
    "Oceania is used for a wider regional grouping than Australia alone; conventions should be stated."
   ],
   [
    "What does membership in a statistical region establish by itself?",
    "Placement under the scheme's stated classification",
    "Identical religion for every resident",
    "A shared government controlling all members",
    "Statistical grouping organizes data and does not automatically imply political unity or cultural uniformity."
   ],
   [
    "Why can maps showing only land area understate Pacific connections?",
    "Ocean routes link dispersed communities and economies",
    "Ocean travel has never occurred",
    "Every island is connected by a land highway",
    "Navigation, trade, kinship and migration create important relationships across water, beyond the amount of dry land."
   ],
   [
    "What should accompany a map of disputed or changing boundaries?",
    "A clear date, source and explanation of what the lines represent",
    "A claim that every line is timeless and uncontested",
    "No legend or source",
    "Boundary representations can reflect specific dates and conventions; a map should make these choices clear."
   ]
  ],
  "check": [
   "A map groups islands by language connections while another groups them by government jurisdiction. Why can their regions differ?",
   "They use different classification criteria",
   "One must necessarily be numerically wrong",
   "Physical islands cannot have human regions",
   "Cultural and administrative regions answer different questions and need not share boundaries."
  ],
  "pics": [
   {
    "t": "setups",
    "title": "Selected UN M49 regional examples",
    "head": "Place",
    "cols": [
     "Subregion"
    ],
    "rows": [
     [
      "Japan",
      "Eastern Asia"
     ],
     [
      "India",
      "Southern Asia"
     ],
     [
      "Viet Nam",
      "South-eastern Asia"
     ],
     [
      "Fiji",
      "Melanesia"
     ],
     [
      "Marshall Islands",
      "Micronesia"
     ],
     [
      "Samoa",
      "Polynesia"
     ]
    ]
   },
   null
  ]
 },
 {
  "code": "NGS 9",
  "name": "Population, migration and urban access",
  "skill": "s4",
  "teach": [
   "Population is unevenly distributed within Asia and Oceania. Productive river plains, coastal trade routes, jobs and services can support dense settlement, while aridity, steep terrain or extreme cold can constrain particular activities. History, infrastructure and policy also matter; physical conditions do not dictate every outcome. A country average can hide crowded urban districts and sparsely settled interiors. Arithmetic density divides population by land area: an original island with 180,000 residents on 600 km² averages 300 people per km². That average does not mean every square kilometer contains 300 people.",
   "Urbanization concerns the share living in urban places, whereas city growth concerns a headcount. In a fictional region, 2 million urban residents among 5 million people is 40%; 3 million among 6 million is 50%. A city proper and a wider metropolitan area may enclose different populations. Dense Asian urban regions and Australia’s coastal cities connect employment, migration and services, but each has internal inequalities. Compare housing affordability, transport access, water and sanitation with consistent definitions, rather than assuming a larger city necessarily offers better access for every resident.",
   "Population change combines births minus deaths and arrivals minus departures, when boundaries and counting methods stay fixed. An original district starting at 50,000 records 900 births, 400 deaths, 1,200 arrivals and 700 departures: its population becomes 51,000. Migration may be encouraged by employment, education and family networks or forced by conflict and hazards; these motives can overlap. Age structure matters for school, health and care needs, but a dependency ratio is a demographic convention rather than a count of everyone who actually works. Remittances connect migrants with households elsewhere without guaranteeing a particular development outcome."
  ],
  "boards": [
   [
    "Settlement depends on physical and human conditions",
    "180,000 residents / 600 km² = 300 per km²",
    "An average hides internal concentrations",
    "Avoid treating environment as destiny"
   ],
   [
    "Urban headcount and urban share are different",
    "2 million / 5 million = 40%",
    "3 million / 6 million = 50%",
    "City boundaries and access measures matter"
   ],
   [
    "Change combines births, deaths, arrivals and departures",
    "50,000 + 900 - 400 + 1,200 - 700 = 51,000",
    "Migration motives and age structures vary",
    "Demographic categories do not identify every worker"
   ]
  ],
  "eqs": [
   "Arithmetic density = population / land area",
   "Urban share = urban residents / all residents × 100",
   "Later population = initial + births - deaths + arrivals - departures"
  ],
  "questions": [
   [
    "A fictional island has 240000 residents on 800 km². What is its arithmetic population density?",
    "300 people per km²",
    "0.0033 people per km²",
    "192000000 people per km²",
    "Population divided by area gives 240,000/800 = 300 people per square kilometer on average."
   ],
   [
    "Island A has 90000 residents on 300 km²; Island B has 120000 on 600 km². Which has higher arithmetic density?",
    "Island A",
    "Island B",
    "They tie because both are islands",
    "A averages 300 people per km² and B 200; a higher population total need not mean higher density."
   ],
   [
    "Why might a fertile Asian river plain support dense settlement?",
    "Water, farming opportunities and transport can combine with historical investment",
    "All river plains guarantee equal incomes",
    "Fertility alone determines every resident's occupation",
    "Several physical and human advantages can support settlement, but none is a universal guarantee."
   ],
   [
    "What is a limitation of a country's average density?",
    "It can hide large internal differences in settlement",
    "It identifies the exact location of each household",
    "It is always identical to urban density",
    "A national population-to-area ratio averages across urban, rural and sparsely inhabited places."
   ],
   [
    "A fictional region has 3 million urban residents among 8 million people. What is its urban share?",
    "37.5%",
    "62.5%",
    "266.7%",
    "Urban residents are the numerator, so 3/8 × 100 = 37.5%; the remainder is the nonurban share."
   ],
   [
    "Urban residents rise from 2 million of 4 million to 3 million of 6 million. What happens to the urban share?",
    "It remains 50%",
    "It rises by 50 percentage points",
    "It falls to 25%",
    "Both urban and total populations rise proportionally, leaving the ratio at one-half despite the larger urban count."
   ],
   [
    "Why can a metropolitan population exceed the city-proper population?",
    "The metropolitan boundary includes linked surrounding settlements",
    "One count must necessarily be fraudulent",
    "Only the city proper may contain adults",
    "Different spatial boundaries enclose different people; administrative and functional areas are not interchangeable."
   ],
   [
    "A district starts at 60000, has 1000 births, 500 deaths, 1600 arrivals and 900 departures. What is its later population with unchanged boundaries?",
    "61200",
    "64000",
    "59800",
    "Natural increase adds 500 and net migration adds 700, so the total rises by 1,200 to 61,200."
   ],
   [
    "In an original district with 1000 births and 500 deaths, what is natural increase?",
    "500 people",
    "1500 people",
    "The number of arrivals alone",
    "Natural increase is births minus deaths; migration is accounted for separately."
   ],
   [
    "In an original district with 1600 arrivals and 900 departures, what is net migration?",
    "700 people",
    "2500 people",
    "900 people",
    "Net migration subtracts departures from arrivals, giving 1,600 - 900 = 700."
   ],
   [
    "Which scenario most clearly involves forced migration?",
    "Residents flee armed conflict threatening their safety",
    "A student freely chooses a preferred campus",
    "A tourist selects a weekend beach visit",
    "Flight from a threat illustrates forced migration, while voluntary study and tourism involve different immediate motives."
   ],
   [
    "An original example shows a worker sending earnings to family in Samoa. What does the term remittances describe here?",
    "Money migrants send to people elsewhere, often family",
    "The total land area of an island",
    "A requirement that all migrants return immediately",
    "Remittances are transfers connecting people across places; their effects depend on household needs and wider conditions."
   ],
   [
    "Why should an age-based dependency ratio not be read as the exact number of nonworkers?",
    "Some people work outside the chosen working-age range and some within it do not",
    "Every child and adult has identical employment",
    "Age categories directly measure each person's wages",
    "A conventional age ratio approximates demographic structure, not actual employment or economic contribution."
   ],
   [
    "Which evidence best evaluates unequal urban access?",
    "Travel time, cost and reliability of services by neighborhood",
    "Only the city's total population",
    "An assumption that every household has the average income",
    "Access depends on local services, transport, affordability and reliability, which can vary sharply within one city."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Density is not total population",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      87,
      170
     ],
     "P1": [
      219,
      170
     ],
     "P2": [
      219,
      80
     ],
     "P3": [
      87,
      80
     ],
     "P4": [
      120,
      147.5
     ],
     "P5": [
      120,
      125
     ],
     "P6": [
      120,
      102.5
     ],
     "P7": [
      153,
      147.5
     ],
     "P8": [
      153,
      125
     ],
     "P9": [
      153,
      102.5
     ],
     "P10": [
      186,
      147.5
     ],
     "P11": [
      186,
      125
     ],
     "P12": [
      186,
      102.5
     ],
     "P13": [
      295,
      170
     ],
     "P14": [
      559,
      170
     ],
     "P15": [
      559,
      80
     ],
     "P16": [
      295,
      80
     ],
     "P17": [
      347.8,
      147.5
     ],
     "P18": [
      347.8,
      125
     ],
     "P19": [
      347.8,
      102.5
     ],
     "P20": [
      400.6,
      147.5
     ],
     "P21": [
      400.6,
      125
     ],
     "P22": [
      400.6,
      102.5
     ],
     "P23": [
      453.4,
      147.5
     ],
     "P24": [
      453.4,
      125
     ],
     "P25": [
      453.4,
      102.5
     ],
     "P26": [
      506.2,
      147.5
     ],
     "P27": [
      506.2,
      125
     ],
     "P28": [
      506.2,
      102.5
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P13P14P15P16",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Fictional islands; areas shown in a 1:2 ratio",
      "col": 0
     },
     {
      "at": [
       153,
       189
      ],
      "text": "A: 180,000 / 600 km²",
      "col": 1
     },
     {
      "at": [
       427,
       189
      ],
      "text": "B: 240,000 / 1,200 km²",
      "col": 2
     },
     {
      "at": [
       154,
       58
      ],
      "text": "300 people/km²",
      "col": 1
     },
     {
      "at": [
       427,
       58
      ],
      "text": "200 people/km²",
      "col": 2
     },
     {
      "at": [
       320,
       31
      ],
      "text": "Each dot represents 20,000 residents",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 5,
      "col": 1
     },
     {
      "c": "P5",
      "r": 5,
      "col": 1
     },
     {
      "c": "P6",
      "r": 5,
      "col": 1
     },
     {
      "c": "P7",
      "r": 5,
      "col": 1
     },
     {
      "c": "P8",
      "r": 5,
      "col": 1
     },
     {
      "c": "P9",
      "r": 5,
      "col": 1
     },
     {
      "c": "P10",
      "r": 5,
      "col": 1
     },
     {
      "c": "P11",
      "r": 5,
      "col": 1
     },
     {
      "c": "P12",
      "r": 5,
      "col": 1
     },
     {
      "c": "P17",
      "r": 5,
      "col": 2
     },
     {
      "c": "P18",
      "r": 5,
      "col": 2
     },
     {
      "c": "P19",
      "r": 5,
      "col": 2
     },
     {
      "c": "P20",
      "r": 5,
      "col": 2
     },
     {
      "c": "P21",
      "r": 5,
      "col": 2
     },
     {
      "c": "P22",
      "r": 5,
      "col": 2
     },
     {
      "c": "P23",
      "r": 5,
      "col": 2
     },
     {
      "c": "P24",
      "r": 5,
      "col": 2
     },
     {
      "c": "P25",
      "r": 5,
      "col": 2
     },
     {
      "c": "P26",
      "r": 5,
      "col": 2
     },
     {
      "c": "P27",
      "r": 5,
      "col": 2
     },
     {
      "c": "P28",
      "r": 5,
      "col": 2
     }
    ]
   },
   {
    "t": "figure",
    "title": "Urban growth and urbanization",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      163,
      165
     ],
     "P1": [
      307,
      165
     ],
     "P2": [
      307,
      137
     ],
     "P3": [
      163,
      137
     ],
     "P4": [
      307,
      165
     ],
     "P5": [
      523,
      165
     ],
     "P6": [
      523,
      137
     ],
     "P7": [
      307,
      137
     ],
     "P8": [
      163,
      96
     ],
     "P9": [
      343,
      96
     ],
     "P10": [
      343,
      68
     ],
     "P11": [
      163,
      68
     ],
     "P12": [
      343,
      96
     ],
     "P13": [
      523,
      96
     ],
     "P14": [
      523,
      68
     ],
     "P15": [
      343,
      68
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
      "text": "Fictional region: urban shares, not just headcounts",
      "col": 0
     },
     {
      "at": [
       93,
       150
      ],
      "text": "Before",
      "col": 0
     },
     {
      "at": [
       340,
       177
      ],
      "text": "2 million urban / 5 million total",
      "col": 0
     },
     {
      "at": [
       93,
       81
      ],
      "text": "After",
      "col": 0
     },
     {
      "at": [
       340,
       108
      ],
      "text": "3 million urban / 6 million total",
      "col": 0
     },
     {
      "at": [
       235,
       34
      ],
      "text": "Urban",
      "col": 1
     },
     {
      "at": [
       435,
       34
      ],
      "text": "Nonurban",
      "col": 2
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Fictional district population account",
    "head": "Component",
    "cols": [
     "People"
    ],
    "rows": [
     [
      "Start",
      "50,000"
     ],
     [
      "Births minus deaths",
      "+500"
     ],
     [
      "Arrivals minus departures",
      "+500"
     ],
     [
      "Later population",
      "51,000"
     ]
    ]
   }
  ],
  "qpics": {
   "1": {
    "t": "figure",
    "title": "Original island density evidence",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      87,
      170
     ],
     "P1": [
      219,
      170
     ],
     "P2": [
      219,
      80
     ],
     "P3": [
      87,
      80
     ],
     "P4": [
      120,
      147.5
     ],
     "P5": [
      120,
      125
     ],
     "P6": [
      120,
      102.5
     ],
     "P7": [
      153,
      147.5
     ],
     "P8": [
      153,
      125
     ],
     "P9": [
      153,
      102.5
     ],
     "P10": [
      186,
      147.5
     ],
     "P11": [
      186,
      125
     ],
     "P12": [
      186,
      102.5
     ],
     "P13": [
      295,
      170
     ],
     "P14": [
      559,
      170
     ],
     "P15": [
      559,
      80
     ],
     "P16": [
      295,
      80
     ],
     "P17": [
      347.8,
      147.5
     ],
     "P18": [
      347.8,
      125
     ],
     "P19": [
      347.8,
      102.5
     ],
     "P20": [
      400.6,
      147.5
     ],
     "P21": [
      400.6,
      125
     ],
     "P22": [
      400.6,
      102.5
     ],
     "P23": [
      453.4,
      147.5
     ],
     "P24": [
      453.4,
      125
     ],
     "P25": [
      453.4,
      102.5
     ],
     "P26": [
      506.2,
      147.5
     ],
     "P27": [
      506.2,
      125
     ],
     "P28": [
      506.2,
      102.5
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P13P14P15P16",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       215
      ],
      "text": "Original islands; areas shown in a 1:2 ratio",
      "col": 0
     },
     {
      "at": [
       153,
       189
      ],
      "text": "A: 90,000 / 300 km²",
      "col": 1
     },
     {
      "at": [
       427,
       189
      ],
      "text": "B: 120,000 / 600 km²",
      "col": 2
     },
     {
      "at": [
       320,
       31
      ],
      "text": "Each dot represents 10,000 residents",
      "col": 0
     }
    ],
    "circles": [
     {
      "c": "P4",
      "r": 5,
      "col": 1
     },
     {
      "c": "P5",
      "r": 5,
      "col": 1
     },
     {
      "c": "P6",
      "r": 5,
      "col": 1
     },
     {
      "c": "P7",
      "r": 5,
      "col": 1
     },
     {
      "c": "P8",
      "r": 5,
      "col": 1
     },
     {
      "c": "P9",
      "r": 5,
      "col": 1
     },
     {
      "c": "P10",
      "r": 5,
      "col": 1
     },
     {
      "c": "P11",
      "r": 5,
      "col": 1
     },
     {
      "c": "P12",
      "r": 5,
      "col": 1
     },
     {
      "c": "P17",
      "r": 5,
      "col": 2
     },
     {
      "c": "P18",
      "r": 5,
      "col": 2
     },
     {
      "c": "P19",
      "r": 5,
      "col": 2
     },
     {
      "c": "P20",
      "r": 5,
      "col": 2
     },
     {
      "c": "P21",
      "r": 5,
      "col": 2
     },
     {
      "c": "P22",
      "r": 5,
      "col": 2
     },
     {
      "c": "P23",
      "r": 5,
      "col": 2
     },
     {
      "c": "P24",
      "r": 5,
      "col": 2
     },
     {
      "c": "P25",
      "r": 5,
      "col": 2
     },
     {
      "c": "P26",
      "r": 5,
      "col": 2
     },
     {
      "c": "P27",
      "r": 5,
      "col": 2
     },
     {
      "c": "P28",
      "r": 5,
      "col": 2
     }
    ]
   }
  }
 },
 {
  "code": "NGS 10",
  "name": "Cultural diversity and historical connections",
  "skill": "s5",
  "teach": [
   "Asia and Oceania contain many languages, religions, identities and ways of life. Neither a country’s most common language nor a regional label establishes what every individual speaks or believes. Indian Ocean and Silk Roads networks carried goods, technologies, languages and religious ideas in multiple directions. Buddhism spread along routes linking South, Central, East and Southeast Asia; local communities adapted ideas rather than simply becoming identical. Buddhist sites such as Sanchi in India and Borobudur in Indonesia illustrate connections across different historical settings, not proof that everyone in either country follows one religion.",
   "Pacific societies developed extensive voyaging and navigation traditions. Māori are Indigenous to Aotearoa New Zealand and have ancestral connections to Polynesian voyaging; the ocean was a route of connection as well as a source of challenges. Australia’s Aboriginal peoples and Torres Strait Islander peoples include many distinct communities, languages and traditions. Treat them as living, diverse peoples, not only as figures from the past. A broad cultural map is a generalization and may omit overlapping affiliations, migration and individual choices.",
   "Colonial rule, displacement, mission activity, schooling and unequal power changed many cultural landscapes, alongside older local and interregional connections. Colonial histories differed across places; contemporary communities also maintain, revive and change traditions on their own terms. A community-led language program can connect elders, younger speakers and historical recordings, but enrollment alone does not prove fluency or long-term survival. Use multiple sources and distinguish observation from stereotype. In a fictional school, offering lessons in three languages describes an institutional choice, not a claim that every pupil speaks all three."
  ],
  "boards": [
   [
    "Languages, religions and identities vary within places",
    "Trade routes moved ideas as well as goods",
    "Buddhism spread through connected Asian routes",
    "Local adaptation does not mean uniformity"
   ],
   [
    "Pacific voyaging connected distant communities",
    "Māori are Indigenous to Aotearoa New Zealand",
    "Aboriginal and Torres Strait Islander peoples are diverse",
    "Cultural maps generalize living, changing relationships"
   ],
   [
    "Colonial experiences differed across places",
    "Communities can maintain and revitalize languages",
    "Program enrollment does not prove fluency",
    "Institutional language policy is not individual behavior"
   ]
  ],
  "eqs": [
   "Exchange networks → movement of ideas → local adaptation",
   "Ocean routes connect people, knowledge and places",
   "Evaluate a cultural claim with evidence, context and limits"
  ],
  "questions": [
   [
    "What moved along the Silk Roads besides traded goods?",
    "Religious ideas, technologies and languages",
    "Only unchanging national borders",
    "No information of any kind",
    "Exchange networks carried people and knowledge as well as materials, with local adaptation along the routes."
   ],
   [
    "Which religion spread along networks linking South, Central and East Asia?",
    "Buddhism",
    "A single religion invented by every modern port simultaneously",
    "No religion ever spread between regions",
    "Buddhism's diffusion is documented along Silk Roads connections; diffusion did not make every community identical."
   ],
   [
    "Sanchi in India and Borobudur in Indonesia are associated with which religious tradition?",
    "Buddhism",
    "A claim that religion has no built landscapes",
    "Only modern industrial warehousing",
    "Both are major Buddhist heritage sites, though their histories, forms and surrounding societies differ."
   ],
   [
    "Why does a temple not prove that all residents of its country share one religion?",
    "A country can contain many religious communities and nonreligious people",
    "Buildings determine everyone's private beliefs",
    "National populations are always culturally uniform",
    "A cultural feature provides evidence of a tradition's presence, not of universal membership or belief."
   ],
   [
    "Which statement best describes cultural diffusion along trade networks?",
    "Ideas can spread and be adapted locally",
    "Everyone must adopt identical practices instantly",
    "Only physical goods can ever move",
    "Contact can transmit ideas while receiving communities select, reinterpret or combine them in different ways."
   ],
   [
    "Māori are Indigenous to which place?",
    "Aotearoa New Zealand",
    "The Arabian Peninsula",
    "The Gobi Desert",
    "Māori are the Indigenous people of Aotearoa New Zealand, with ancestral Polynesian connections."
   ],
   [
    "What does Polynesian voyaging demonstrate about the Pacific?",
    "The ocean connected communities through skilled navigation",
    "No deliberate travel occurred before European ships",
    "All islands were joined by roads",
    "Pacific voyaging traditions show purposeful connections across water, supported by accumulated navigation knowledge."
   ],
   [
    "Which statement accurately describes Australia's First Peoples?",
    "They include diverse Aboriginal and Torres Strait Islander peoples",
    "They form one community with a single language everywhere",
    "They exist only in the distant past",
    "These are living peoples with many distinct groups, languages, histories and traditions."
   ],
   [
    "Why can a broad cultural map fail to describe an individual?",
    "Identities and language practices can overlap and vary within mapped areas",
    "Every mapped area contains identical people",
    "Culture is fully determined by latitude",
    "Maps generalize spatial patterns and cannot establish every person's identity, beliefs or language use."
   ],
   [
    "How can colonial schooling affect language transmission?",
    "Policies can disrupt which languages children learn and use",
    "Schooling can never influence language use",
    "Every colonial system had exactly the same policy",
    "Institutions and unequal power can alter transmission, but specific policies and community responses must be examined."
   ],
   [
    "Which approach best supports a community's language-revitalization project?",
    "Work with community goals, speakers and appropriate learning resources",
    "Assume outsiders should replace all local decisions",
    "Count the number of posters as proof of fluent speakers",
    "Community participation and relevant resources support meaningful work; outcomes still need appropriate evaluation."
   ],
   [
    "A fictional school offers instruction in three languages. What can be inferred directly?",
    "The school provides three instructional language options",
    "Every student is fluent in all three",
    "Every family has identical cultural practices",
    "The evidence describes an institutional offering, not each student's skills or each family's identity."
   ],
   [
    "Why use oral histories alongside maps and written records?",
    "They can add perspectives and experiences absent from other sources",
    "They automatically make every other source false",
    "Only one source type can ever contain information",
    "Different sources can reveal different aspects of a place; all require attention to context and interpretation."
   ],
   [
    "What is wrong with describing an entire region by one traveler's impression?",
    "One experience may not represent diverse places and people",
    "Travelers can never observe anything",
    "Every resident must have the same experience",
    "A limited observation is not a sufficient basis for a sweeping cultural claim across a diverse region."
   ]
  ]
 },
 {
  "code": "NGS 11",
  "name": "Economic networks and regional cooperation",
  "skill": "s6",
  "teach": [
   "Asian and Pacific economies connect farming, fishing, extraction, manufacturing and services across many places. A product can involve raw materials from one location, components from another, assembly elsewhere and sales through a distant port. Value and bargaining power are not distributed equally at every stage. In a fictional supply chain, a product sells for 100 after imported inputs cost 60; value added at that stage is 40, before distinguishing wages, profits, taxes and other components. Do not add every intermediate sale to estimate final production or confuse revenue with profit.",
   "Transport shapes economic opportunity and risk. The Malacca-Singapore route connects shipping between the Indian Ocean and western Pacific, illustrating a strategic maritime chokepoint. Ports require links to inland producers and consumers; being coastal alone is not enough. Landlocked Central Asian economies depend on overland corridors and access arrangements, while scattered Pacific islands may face high transport costs for small, infrequent shipments. Tourism, fisheries, remittances, resource industries and services can all contribute, with different combinations across places. A decline in one market can affect linked workers far away.",
   "Regional cooperation can address trade, infrastructure, fisheries, hazards and environmental concerns. ASEAN is an association of Southeast Asian states, while the Pacific Islands Forum is a separate regional forum; neither is the name of a continent or a single country. Institutional goals are not evidence that every barrier has disappeared or that every member has identical policies. Evaluate an investment by local wages, skills, supplier links, revenues, costs and environmental impacts. In an original ferry project, travel time falls from 5 hours to 4: the reduction is 20%, but affordability and service frequency still determine who can use it."
  ],
  "boards": [
   [
    "Production chains connect several economic sectors",
    "Sales 100 minus imported inputs 60: value added 40",
    "Value added is not automatically profit",
    "Final output avoids intermediate double-counting"
   ],
   [
    "Malacca-Singapore links Indian and Pacific shipping",
    "Ports need inland and overseas connections",
    "Landlocked and dispersed-island settings pose costs",
    "Economic activities and benefits vary across places"
   ],
   [
    "ASEAN and Pacific Islands Forum have different roles",
    "Cooperation goals are not completed outcomes",
    "Ferry time 5 h → 4 h: 20% reduction",
    "Assess affordability, job quality and environmental costs"
   ]
  ],
  "eqs": [
   "Value added at a stage = output value - intermediate inputs",
   "Network disruption → changes in supplies, costs and livelihoods",
   "Percentage reduction = (old time - new time) / old time × 100"
  ],
  "questions": [
   [
    "A fictional workshop sells output for 150 after buying intermediate inputs for 90. What is its value added at that stage?",
    "60",
    "240",
    "150",
    "Value added excludes the purchased intermediate inputs: 150 - 90 = 60; it is not necessarily all profit."
   ],
   [
    "Why is value added not automatically business profit?",
    "It can include wages and other components besides profit",
    "Workers never receive pay",
    "Intermediate inputs are always free",
    "Value added is distributed among labor and other income components, whereas profit requires a fuller cost account."
   ],
   [
    "Which example illustrates an international production chain?",
    "Components, assembly and sales occur in linked places across countries",
    "Every stage is isolated from every other stage",
    "Only one household consumes its own garden crop",
    "A production chain connects different stages and places through goods, services, coordination and payments."
   ],
   [
    "Why avoid adding every intermediate sale when measuring final production?",
    "The same embodied inputs would be counted repeatedly",
    "Intermediate goods never have any use",
    "Only exports can be produced",
    "Final-goods or value-added accounting prevents counting the same production contribution multiple times."
   ],
   [
    "The Malacca-Singapore shipping route mainly links which ocean systems?",
    "Indian Ocean and western Pacific",
    "Arctic Ocean and Southern Ocean directly",
    "Atlantic Ocean and Great Lakes only",
    "This Southeast Asian route is a major connection between Indian Ocean shipping and the western Pacific network."
   ],
   [
    "Why is a narrow strategic shipping passage called a chokepoint?",
    "Disruption there can constrain connected routes",
    "No ship can ever pass through it",
    "It has no relation to transport networks",
    "Concentrated traffic and limited route choices can make disruption costly for a wider network."
   ],
   [
    "Why does a port need effective inland links?",
    "Cargo must connect with producers and consumers beyond the waterfront",
    "Ports only serve empty oceans",
    "Every coastal town automatically has identical access",
    "Rail, roads and logistics connect a port's overseas routes to its hinterland and influence its usefulness."
   ],
   [
    "Which challenge is especially relevant to a landlocked economy?",
    "Reliable access through overland corridors to external markets",
    "Managing its own open-ocean coastline",
    "Having no possibility of international trade",
    "Landlocked countries can trade, but depend on corridors, transport costs and relationships with transit countries."
   ],
   [
    "Why can dispersed Pacific islands face high shipping costs per unit?",
    "Small volumes and long routes can limit scale economies",
    "Every island has the same costs as every large port",
    "Distance and service frequency cannot affect cost",
    "Long distances and low shipment volumes can raise per-unit costs, though infrastructure and service arrangements also matter."
   ],
   [
    "Which activity is a service rather than direct extraction or manufacturing?",
    "Operating a tourism booking service",
    "Mining copper ore",
    "Assembling a refrigerator",
    "Booking is a service; mining extracts a resource and assembly transforms components into a manufactured product."
   ],
   [
    "A fictional island earns 24 of 80 export-revenue units from one product. What is that product's share?",
    "30%",
    "24%",
    "70%",
    "The share uses product receipts divided by total exports: 24/80 × 100 = 30%."
   ],
   [
    "If an exported product's price falls while its export quantity stays fixed, what happens directly to its export revenue?",
    "It falls",
    "It must rise",
    "It cannot change",
    "At fixed quantity, price times quantity falls with price; broader economic effects require more information."
   ],
   [
    "What is ASEAN?",
    "An association of Southeast Asian states",
    "Another name for the continent of Australia",
    "A single worldwide currency",
    "ASEAN is a regional organization with cooperation objectives; it is not a continent or a universal currency."
   ],
   [
    "Which statement best distinguishes the Pacific Islands Forum?",
    "It is a regional cooperation forum, not one country",
    "It is the name of every Pacific island's government",
    "It eliminates all differences among participants",
    "The Forum supports regional dialogue and cooperation while participants retain distinct circumstances and institutions."
   ],
   [
    "A fictional ferry trip falls from 6 hours to 4.5 hours. What is the percentage time reduction?",
    "25%",
    "33.3%",
    "1.5%",
    "The saving is 1.5 hours relative to 6 hours, so the reduction is 1.5/6 = 25%."
   ],
   [
    "Why does a faster ferry not prove everyone has better access?",
    "Fares, frequency, reliability and connections also matter",
    "Travel time never matters",
    "All residents necessarily own a ferry",
    "Access depends on several practical conditions, so a travel-time improvement alone cannot establish universal benefit."
   ]
  ],
  "check": [
   "A fictional exporter sells 50 units at 8 currency units each. If quantity stays 50 and price becomes 6, what is the new revenue?",
   "300",
   "400",
   "100",
   "Use the later price and unchanged quantity: 50 × 6 = 300; the difference from the earlier 400 is a separate question."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Separate output and value added",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      109,
      169
     ],
     "P1": [
      361,
      169
     ],
     "P2": [
      361,
      131
     ],
     "P3": [
      109,
      131
     ],
     "P4": [
      361,
      169
     ],
     "P5": [
      529,
      169
     ],
     "P6": [
      529,
      131
     ],
     "P7": [
      361,
      131
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
      "text": "Fictional production stage: output value 100",
      "col": 0
     },
     {
      "at": [
       235,
       148
      ],
      "text": "Inputs: 60",
      "col": 1
     },
     {
      "at": [
       445,
       148
      ],
      "text": "Added: 40",
      "col": 2
     },
     {
      "at": [
       320,
       89
      ],
      "text": "60 + 40 = 100",
      "col": 0
     },
     {
      "at": [
       320,
       53
      ],
      "text": "Value added includes more than just profit",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Trace maritime connections",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      69,
      154
     ],
     "P1": [
      207,
      154
     ],
     "P2": [
      207,
      81
     ],
     "P3": [
      69,
      81
     ],
     "P4": [
      239,
      167
     ],
     "P5": [
      400,
      167
     ],
     "P6": [
      400,
      68
     ],
     "P7": [
      239,
      68
     ],
     "P8": [
      432,
      154
     ],
     "P9": [
      570,
      154
     ],
     "P10": [
      570,
      81
     ],
     "P11": [
      432,
      81
     ],
     "P12": [
      208,
      123
     ],
     "P13": [
      238,
      123
     ],
     "P14": [
      238,
      100
     ],
     "P15": [
      208,
      100
     ],
     "P16": [
      401,
      123
     ],
     "P17": [
      431,
      123
     ],
     "P18": [
      431,
      100
     ],
     "P19": [
      401,
      100
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19",
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
     },
     {
      "v": "P16P17",
      "col": 1,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P18P19",
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
      "col": 0
     },
     {
      "v": "P8P9P10P11",
      "col": 0
     }
    ],
    "notes": [
     {
      "at": [
       137,
       130
      ],
      "text": "Indian",
      "col": 0
     },
     {
      "at": [
       137,
       103
      ],
      "text": "Ocean",
      "col": 0
     },
     {
      "at": [
       320,
       140
      ],
      "text": "Malacca–",
      "col": 0
     },
     {
      "at": [
       320,
       114
      ],
      "text": "Singapore",
      "col": 0
     },
     {
      "at": [
       320,
       89
      ],
      "text": "route",
      "col": 0
     },
     {
      "at": [
       501,
       130
      ],
      "text": "Western",
      "col": 0
     },
     {
      "at": [
       501,
       103
      ],
      "text": "Pacific",
      "col": 0
     },
     {
      "at": [
       320,
       215
      ],
      "text": "Network connection, not a scaled navigation map",
      "col": 0
     },
     {
      "at": [
       320,
       33
      ],
      "text": "A chokepoint can affect a much wider supply network",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ]
 },
 {
  "code": "NGS 14",
  "name": "Environmental change and shared management",
  "skill": "s7",
  "teach": [
   "Environmental management connects local choices with wider systems. Irrigation diversions from rivers feeding the Aral Sea contributed to its severe shrinkage; this is a water-budget problem with large ecological and livelihood consequences, not simply an example of ordinary seasonal tides. In any basin, withdrawals, return flows, evaporation and changes in storage must be considered together. A fictional reservoir receives 120 units of water while 30 evaporate and 70 are withdrawn, with no other flows: storage rises by 20. Saving water at one field does not automatically save the same amount across an entire basin if return flows or cropping choices change.",
   "The Mekong illustrates upstream-downstream interdependence across countries. Dams can provide electricity and change flood timing while also affecting sediment and fish movement; benefits and burdens can fall on different groups. Coastal mangroves, including the Sundarbans across parts of Bangladesh and India, support habitats and can reduce some wave and surge impacts under suitable conditions; they do not make every settlement flood-proof. Compare project alternatives, local knowledge and measured outcomes. Political borders do not stop water, fish or pollution from moving.",
   "Low-lying islands and coasts face interacting risks from sea-level change, waves, storms, erosion and groundwater salinity. Reef-building corals can bleach under stress such as unusual heat by losing symbiotic algae; a bleached coral is stressed and may recover or die, so bleaching is not automatically death. Reef and fishery management also involves water quality, harvest pressure and habitat protection. Adaptation can include freshwater protection, resilient infrastructure and community-led planning; its suitability depends on conditions and affected people. Do not infer an exact date of island disappearance from a simple sea-level trend.",
   "Evaluate evidence with consistent units and comparisons. A fictional coastal survey finds 120 of 400 monitored households had saltwater damage before a project and 90 of 450 afterward: the share falls from 30% to 20%, a 10 percentage-point drop. The count also falls, but the population denominator changed. The pattern alone does not prove the project caused it; storm intensity, survey methods and other changes may differ. A strong evaluation combines exposure maps, comparable monitoring, a suitable comparison and residents’ experiences, checking whether burdens were displaced elsewhere."
  ],
  "boards": [
   [
    "Aral Sea shrinkage is linked to river diversions",
    "Water budgets include flows and storage",
    "120 inflow - 30 evaporation - 70 withdrawal = +20",
    "Field efficiency and basin savings can differ"
   ],
   [
    "Mekong decisions have cross-border consequences",
    "Dams have benefits and ecological tradeoffs",
    "Sundarbans mangroves span India and Bangladesh",
    "Natural buffers reduce some risks, not all risks"
   ],
   [
    "Island risk combines sea level, storms and local factors",
    "Bleached coral is stressed, not automatically dead",
    "Freshwater, habitats and livelihoods are connected",
    "Adaptation needs local evidence and participation"
   ],
   [
    "Fictional survey: 120/400 = 30%; 90/450 = 20%",
    "Share drops 10 percentage points",
    "Changed storms or sampling could also matter",
    "A before-and-after pattern alone is not causal proof"
   ]
  ],
  "eqs": [
   "Storage change = inflows - outflows, under stated boundaries",
   "Evaluate energy, sediment, ecosystems and livelihoods together",
   "Hazard + exposure + vulnerability → possible losses",
   "Compare rates with consistent definitions and causal evidence"
  ],
  "questions": [
   [
    "What major human action contributed to shrinkage of the Aral Sea?",
    "Diversion of its inflowing rivers for irrigation",
    "Construction of a natural ocean tide every day",
    "Elimination of evaporation everywhere",
    "River diversions reduced inflow to an inland water body, contributing to a severe imbalance in its water budget."
   ],
   [
    "A fictional reservoir receives 150 water units, loses 40 to evaporation and 85 to withdrawals, with no other flows. What is storage change?",
    "An increase of 25 units",
    "A decrease of 275 units",
    "An increase of 150 units",
    "Inflow exceeds the two outflows by 150 - 40 - 85 = 25, so storage increases by that amount."
   ],
   [
    "Why can field-level irrigation efficiency fail to produce equal basin-wide savings?",
    "Return flows and total water use elsewhere can change",
    "All saved field water must vanish from Earth",
    "Basin boundaries have no relevance",
    "Water not consumed at one field may previously have returned downstream, and behavior can change after an efficiency gain."
   ],
   [
    "Why coordinate management across the Mekong basin?",
    "Upstream actions can affect downstream water, sediment, fish and livelihoods",
    "Each border stops all river water",
    "Every upstream and downstream interest is identical",
    "Connected river processes cross jurisdictions and can distribute benefits and costs unevenly."
   ],
   [
    "Which is a plausible tradeoff of a hydropower dam?",
    "Electricity production alongside altered sediment and fish passage",
    "Guaranteed electricity with no environmental change anywhere",
    "The permanent disappearance of all floods worldwide",
    "Dams can supply energy while changing river processes; actual benefits and impacts need site-specific assessment."
   ],
   [
    "The Sundarbans mangrove landscape extends across parts of which pair of countries?",
    "Bangladesh and India",
    "Mongolia and China",
    "Australia and New Zealand",
    "The Sundarbans occupy deltaic coastal areas of Bangladesh and India, distinct from inland deserts or distant Pacific countries."
   ],
   [
    "Why should mangrove protection not be called a guarantee against all flooding?",
    "Risk also depends on storms, topography, exposure and other conditions",
    "Mangroves can never affect waves",
    "Every flood has identical strength and route",
    "Mangroves can reduce some hazards under suitable conditions but cannot eliminate every source or scale of flood risk."
   ],
   [
    "What is coral bleaching?",
    "Stress-related loss of symbiotic algae or their pigments that makes coral pale",
    "Proof that every affected coral is already dead",
    "The conversion of coral animals into rocks by paint",
    "Bleaching reflects disruption of the coral-algal relationship; survival depends on stress and recovery conditions."
   ],
   [
    "Why can prolonged heat stress threaten reef ecosystems?",
    "Bleached corals may lose important energy support and die if stress persists",
    "All coral species become permanently immune to heat",
    "Heat stress can never affect marine organisms",
    "Symbiotic algae support many reef-building corals; prolonged disruption can increase mortality and habitat loss."
   ],
   [
    "Which process can threaten freshwater on a low coastal island?",
    "Saltwater intrusion or storm overwash",
    "A guarantee that sea salt turns into drinking water",
    "Permanent elimination of all rainfall",
    "Seawater can contaminate freshwater lenses or supplies, with effects depending on geology, pumping, rainfall and storms."
   ],
   [
    "Why is one sea-level trend insufficient to predict an exact disappearance date for an island?",
    "Land movement, waves, sediment, morphology and adaptation also matter",
    "Sea level has no relationship to coastal risk",
    "All islands have identical elevation and shape",
    "Coastal change involves interacting processes; a single trend is not a complete site-specific model."
   ],
   [
    "Original monitoring found 120 of 400 households damaged before and 90 of 450 afterward. What is the later damaged share?",
    "20%",
    "30%",
    "90%",
    "The later rate uses the later denominator: 90/450 = 0.20, or 20%."
   ],
   [
    "With original damaged shares of 30% before and 20% afterward, what is the change in percentage points?",
    "A decrease of 10 percentage points",
    "A decrease of 33.3 percentage points",
    "An increase of 50 percentage points",
    "Percentage-point change subtracts percentages: 20 - 30 = -10; a relative percent change is different."
   ],
   [
    "After a coastal project, saltwater damage falls from 120 of 400 monitored households to 90 of 450. What additional evidence best helps assess causation?",
    "Comparable storm exposure and a suitable comparison area",
    "Only a new project logo",
    "Assuming every later change was caused by the project",
    "Different storms, sampling or other interventions can change damage, so a causal claim needs stronger comparisons."
   ],
   [
    "Why combine residents' experiences with environmental monitoring?",
    "They can reveal access, livelihood and distributional effects omitted by aggregate measures",
    "Measurements and lived experience can never complement each other",
    "One interview automatically represents every resident",
    "Different evidence types can identify both physical outcomes and who benefits or bears costs, with sampling limits."
   ],
   [
    "Which management conclusion is best supported by geography?",
    "Compare alternatives across connected places, groups and times",
    "Treat a local short-term improvement as universal permanent success",
    "Ignore all upstream and downstream relationships",
    "Environmental decisions operate through connected systems, so sound evaluation considers spillovers, distribution and duration."
   ]
  ],
  "check": [
   "A fictional coastal survey finds 63 damaged households out of 252 monitored households. What share was damaged?",
   "25%",
   "63%",
   "4%",
   "Divide damaged households by monitored households: 63/252 = 0.25, or 25%; keep numerator and denominator from the same survey."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Account for a reservoir water budget",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      243,
      153
     ],
     "P1": [
      397,
      153
     ],
     "P2": [
      397,
      74
     ],
     "P3": [
      243,
      74
     ],
     "P4": [
      102,
      115
     ],
     "P5": [
      239,
      115
     ],
     "P6": [
      401,
      115
     ],
     "P7": [
      542,
      115
     ],
     "P8": [
      320,
      157
     ],
     "P9": [
      320,
      189
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 2,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
     {
      "v": "P6P7",
      "col": 3,
      "arrows": 1,
      "dash": false,
      "w": 3
     },
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
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       127
      ],
      "text": "Reservoir",
      "col": 1
     },
     {
      "at": [
       320,
       96
      ],
      "text": "Storage +20",
      "col": 1
     },
     {
      "at": [
       151,
       142
      ],
      "text": "Inflow 120",
      "col": 2
     },
     {
      "at": [
       490,
       144
      ],
      "text": "Withdrawal 70",
      "col": 3
     },
     {
      "at": [
       320,
       205
      ],
      "text": "Evaporation 30",
      "col": 0
     },
     {
      "at": [
       320,
       32
      ],
      "text": "Fictional water units; no other flows",
      "col": 0
     }
    ],
    "circles": []
   },
   null,
   null,
   {
    "t": "setups",
    "title": "Fictional coastal survey: comparable definitions",
    "head": "Households",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Monitored",
      "400",
      "450"
     ],
     [
      "Saltwater damage",
      "120",
      "90"
     ]
    ]
   }
  ],
  "qpics": {
   "11": {
    "t": "setups",
    "title": "Original coastal survey: comparable definitions",
    "head": "Households",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Monitored",
      "400",
      "450"
     ],
     [
      "Saltwater damage",
      "120",
      "90"
     ]
    ]
   },
   "12": {
    "t": "setups",
    "title": "Original coastal survey: comparable definitions",
    "head": "Households",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Monitored",
      "400",
      "450"
     ],
     [
      "Saltwater damage",
      "120",
      "90"
     ]
    ]
   },
   "13": {
    "t": "setups",
    "title": "Original coastal survey: comparable definitions",
    "head": "Households",
    "cols": [
     "Before",
     "After"
    ],
    "rows": [
     [
      "Monitored",
      "400",
      "450"
     ],
     [
      "Saltwater damage",
      "120",
      "90"
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
steps.push({skill:sections.at(-1).skill,summary:true,say:"Locate places with coordinates, scale and a stated regional convention before explaining their connections. Distinguish continental collision, volcanic arcs, coral atolls and river deltas, and relate climates to circulation, relief and hemisphere without assuming uniform conditions. Read population and climate data with the correct denominator and time period. Recognize diverse living cultures and historical exchange, colonial effects and community agency. Trace economic and environmental networks across land and ocean, assess who benefits and who bears costs, and distinguish a measured pattern from proof of its cause. Compare local and regional outcomes rather than relying on a single average or a policy label.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"geography-h-world-geography-asia-and-oceania","subject":"geography","level":5,"grade":9,"standard":"Geography for Life: National Geography Standards (2nd ed., 2012), standards 1, 4, 5, 9, 10, 11 and 14","title":"Asia and Oceania","goal":"Use spatial evidence to compare the environments, populations, cultures and economic connections of Asia and Oceania, and evaluate regional environmental decisions.","points":20,"progression":{"requires":["geography-h-world-geography-europe-and-africa","geography-h-world-geography-climate-and-weather"],"operations":3,"demand":"Use coordinates and scale, explain regional processes, compare population and economic data, and evaluate linked environmental evidence."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
