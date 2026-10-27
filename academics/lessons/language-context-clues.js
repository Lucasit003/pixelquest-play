const contexts=[
 [
  "bank",
  "Mira sat on the bank. Water flowed below her, and reeds grew along the river edge.",
  "land beside a river",
  "a money business",
  "river edge",
  "Mira sat",
  "Mira was beside a river.",
  true
 ],
 [
  "bank",
  "Oren took coins to the bank. A clerk put the money into his savings account.",
  "a money business",
  "land beside a river",
  "savings account",
  "Oren took coins",
  "Oren withdrew money from his account.",
  false
 ],
 [
  "bark",
  "A rough piece of bark peeled off the old oak, exposing the wood beneath.",
  "outer covering of a tree",
  "a dog sound",
  "exposing the wood beneath",
  "a rough piece",
  "The covering came from a tree.",
  true
 ],
 [
  "bark",
  "A sharp bark came from the kennel. The dog made the same sound again when the gate opened.",
  "a dog sound",
  "outer covering of a tree",
  "The dog made the same sound",
  "when the gate opened",
  "The dog made the sound only once.",
  false
 ],
 [
  "bat",
  "The bat flew from the cave at dusk, spreading its wings above the path.",
  "a flying mammal",
  "a sports stick",
  "spreading its wings",
  "above the path",
  "The bat remained inside the cave.",
  false
 ],
 [
  "bat",
  "Lina gripped the bat with both hands and swung it to hit the ball across the field.",
  "a sports stick",
  "a flying mammal",
  "swung it to hit the ball",
  "with both hands",
  "Lina was using sports equipment.",
  true
 ],
 [
  "bright",
  "The bright lamp lit every corner, so we could read without another light.",
  "giving much light",
  "quick to learn",
  "lit every corner",
  "we could read",
  "Another lamp was needed for reading.",
  false
 ],
 [
  "bright",
  "The bright pupil quickly understood the unfamiliar puzzle and explained its tricky rule to the class.",
  "quick to learn",
  "giving much light",
  "quickly understood the unfamiliar puzzle",
  "to the class",
  "The pupil could explain the puzzle rule.",
  true
 ],
 [
  "charge",
  "The shop will charge five coins for the ribbon. Pay at the counter before taking it home.",
  "ask a price",
  "fill with electrical energy",
  "five coins for the ribbon",
  "taking it home",
  "The ribbon is being given away free.",
  false
 ],
 [
  "charge",
  "I need to charge the lantern. Its battery is empty, so I plugged it into the power socket.",
  "fill with electrical energy",
  "ask a price",
  "battery is empty",
  "the lantern",
  "The lantern battery needs more energy.",
  true
 ],
 [
  "current",
  "The current carried the leaf downstream. The moving river water swept it past the bridge.",
  "flow of water",
  "belonging to the present",
  "moving river water",
  "past the bridge",
  "The leaf moved with the water.",
  true
 ],
 [
  "current",
  "Use the current timetable. This new version replaces the old one, which lists the wrong departure times.",
  "belonging to the present",
  "flow of water",
  "new version replaces the old one",
  "departure times",
  "The old timetable should guide the trip.",
  false
 ],
 [
  "draft",
  "This is my first draft of the story. I will revise several sentences before making the final copy.",
  "an early version of writing",
  "a flow of air",
  "revise several sentences",
  "of the story",
  "The writing is ready as the final copy.",
  false
 ],
 [
  "draft",
  "A cold draft entered under the door. The moving air made the loose paper flutter.",
  "a flow of air",
  "an early version of writing",
  "moving air",
  "under the door",
  "Air entered the room.",
  true
 ],
 [
  "fair",
  "The judge was fair: the same rules applied to every contestant, including the judge's own friend.",
  "treating people equally",
  "a public festival",
  "same rules applied to every contestant",
  "own friend",
  "The friend received special rules.",
  false
 ],
 [
  "fair",
  "We visited the fair, where game booths, rides, and food stalls filled the village green.",
  "a public festival",
  "treating people equally",
  "game booths, rides, and food stalls",
  "village green",
  "There were several kinds of activities.",
  true
 ],
 [
  "fine",
  "The fine thread was so thin that I could hardly see it against the cloth.",
  "very thin",
  "a money penalty",
  "so thin",
  "against the cloth",
  "The thread was thick and easy to see.",
  false
 ],
 [
  "fine",
  "The driver paid a fine after parking where a sign forbade it. The penalty cost twenty coins.",
  "a money penalty",
  "very thin",
  "The penalty cost twenty coins",
  "a sign",
  "The driver lost money as a penalty.",
  true
 ],
 [
  "light",
  "This box is light. I can lift it easily with one hand, unlike the heavy chest.",
  "not heavy",
  "illumination",
  "lift it easily with one hand",
  "This box",
  "The box is harder to lift than the chest.",
  false
 ],
 [
  "light",
  "A beam of light from the torch revealed the steps in the dark cellar.",
  "illumination",
  "not heavy",
  "revealed the steps in the dark",
  "from the torch",
  "The torch made the steps visible.",
  true
 ],
 [
  "match",
  "Our team won the match by scoring two goals while the other team scored none.",
  "a sports contest",
  "a small fire-lighting stick",
  "scoring two goals",
  "Our team",
  "The other team scored more goals.",
  false
 ],
 [
  "match",
  "An adult struck a match against the box and used its small flame to light the candle.",
  "a small fire-lighting stick",
  "a sports contest",
  "its small flame",
  "against the box",
  "The match supplied a flame.",
  true
 ],
 [
  "park",
  "They played in the park, a public green space with paths and a playground.",
  "a public outdoor area",
  "leave a vehicle in a place",
  "public green space",
  "They played",
  "The passage describes a place for recreation.",
  true
 ],
 [
  "park",
  "Please park the cart beside the shed and leave it there while we unload the sacks.",
  "leave a vehicle in a place",
  "a public outdoor area",
  "leave it there",
  "beside the shed",
  "The cart should keep moving during unloading.",
  false
 ],
 [
  "point",
  "The point of the needle was sharp enough to pierce the thick cloth.",
  "a sharp tip",
  "a main idea",
  "sharp enough to pierce",
  "the thick cloth",
  "The needle tip could pass through the cloth.",
  true
 ],
 [
  "point",
  "The point of her speech was that everyone should save water. Each example supported that main message.",
  "a main idea",
  "a sharp tip",
  "that main message",
  "Each example",
  "The speech mainly argued against saving water.",
  false
 ],
 [
  "ring",
  "A silver ring fit around one finger. It was too narrow to fit around her wrist.",
  "a circular piece of jewelry",
  "a bell sound",
  "fit around one finger",
  "silver",
  "The ring fit her wrist.",
  false
 ],
 [
  "ring",
  "The ring of the bell echoed down the hallway, and everyone turned toward the sound.",
  "a bell sound",
  "a circular piece of jewelry",
  "echoed down the hallway",
  "everyone turned",
  "People heard a sound from the bell.",
  true
 ],
 [
  "scale",
  "The merchant placed apples on the scale to measure their weight before selling them.",
  "a weighing device",
  "a map-distance relationship",
  "measure their weight",
  "before selling them",
  "The merchant was checking how heavy the apples were.",
  true
 ],
 [
  "scale",
  "The map scale says one centimeter represents one kilometer, so a short line can show a long road.",
  "a map-distance relationship",
  "a weighing device",
  "one centimeter represents one kilometer",
  "a long road",
  "One centimeter on this map means one meter on the road.",
  false
 ],
 [
  "seal",
  "A seal swam beside the boat, lifting its whiskered face from the cold sea.",
  "a sea mammal",
  "close tightly",
  "swam beside the boat",
  "cold sea",
  "The seal was an animal in the water.",
  true
 ],
 [
  "seal",
  "Seal the envelope by pressing its sticky flap shut so the letter cannot slip out.",
  "close tightly",
  "a sea mammal",
  "pressing its sticky flap shut",
  "the letter",
  "The instruction asks us to open the envelope.",
  false
 ],
 [
  "spring",
  "The metal spring compressed when pressed and pushed the lid back when released.",
  "a coiled elastic part",
  "a season",
  "compressed when pressed",
  "the metal",
  "The spring helped push the lid back.",
  true
 ],
 [
  "spring",
  "In spring, after winter ended, new leaves appeared before the summer heat arrived.",
  "a season",
  "a coiled elastic part",
  "after winter ended",
  "new leaves",
  "The passage places spring after summer.",
  false
 ],
 [
  "wave",
  "A large wave rolled toward the beach and broke into white foam on the sand.",
  "moving ridge of water",
  "a greeting gesture",
  "broke into white foam",
  "toward the beach",
  "Water reached the sand.",
  true
 ],
 [
  "wave",
  "Nia gave a wave, moving her hand from side to side to greet the arriving visitors.",
  "a greeting gesture",
  "moving ridge of water",
  "moving her hand from side to side",
  "arriving visitors",
  "Nia was signaling a greeting.",
  true
 ]
];
export default {
 "id": "language-e-context-clues",
 "subject": "language",
 "level": 3,
 "grade": 4,
 "title": "Use context as evidence",
 "goal": "Use surrounding words to choose a meaning, identify its strongest clue, and test a conclusion against the passage.",
 "standard": "Language and reading reasoning",
 "points": 20,
 "skills": {
  "meaning": "Choose meaning in context",
  "evidence": "Find the strongest clue",
  "inference": "Test a conclusion"
 },
 "steps": [
  {
   "skill": "meaning",
   "say": "A word can have more than one meaning. Read the whole sentence before choosing. Here trunk means part of a tree because branches grow from it.",
   "pic": {
    "t": "passages",
    "title": "Use the surrounding words",
    "texts": [
     "Branches grew from the thick trunk of the oak."
    ]
   }
  },
  {
   "skill": "meaning",
   "say": "The surrounding words select the meaning that fits this use. A familiar meaning may be wrong in a new sentence.",
   "pic": {
    "t": "passages",
    "title": "Use the surrounding words",
    "texts": [
     "Branches grew from the thick trunk of the oak."
    ]
   },
   "check": {
    "prompt": "In the practice sentence, does trunk mean part of a tree or a storage chest?",
    "answer": "part of a tree",
    "options": [
     "part of a tree",
     "a storage chest"
    ],
    "hint": "The surrounding words select the meaning that fits this use. A familiar meaning may be wrong in a new sentence.",
    "pic": {
     "t": "passages",
     "title": "Use the surrounding words",
     "texts": [
      "Branches grew from the thick trunk of the oak."
     ]
    }
   }
  },
  {
   "skill": "evidence",
   "say": "Choose the clue that separates the meanings. Branches grew from it is stronger evidence for tree trunk than the adjective thick, which could also describe a chest.",
   "pic": {
    "t": "passages",
    "title": "Choose a clue that distinguishes",
    "texts": [
     "Branches grew from the thick trunk of the oak."
    ]
   }
  },
  {
   "skill": "evidence",
   "say": "A strong clue helps rule out the competing meaning. A detail can be true without helping you decide.",
   "pic": {
    "t": "passages",
    "title": "Choose a clue that distinguishes",
    "texts": [
     "Branches grew from the thick trunk of the oak."
    ]
   },
   "check": {
    "prompt": "Which practice clue best supports tree trunk: branches grew from it or thick?",
    "answer": "branches grew from it",
    "options": [
     "branches grew from it",
     "thick"
    ],
    "hint": "A strong clue helps rule out the competing meaning. A detail can be true without helping you decide.",
    "pic": {
     "t": "passages",
     "title": "Choose a clue that distinguishes",
     "texts": [
      "Branches grew from the thick trunk of the oak."
     ]
    }
   }
  },
  {
   "skill": "inference",
   "say": "A conclusion must follow from the passage. These words support identifying a tree, but they do not establish its exact age.",
   "pic": {
    "t": "passages",
    "title": "Keep conclusions within the evidence",
    "texts": [
     "Branches grew from the thick trunk of the oak."
    ]
   }
  },
  {
   "skill": "inference",
   "say": "Use what the passage gives you. Do not turn a possible guess into a fact.",
   "pic": {
    "t": "passages",
    "title": "Keep conclusions within the evidence",
    "texts": [
     "Branches grew from the thick trunk of the oak."
    ]
   },
   "check": {
    "prompt": "Does the practice passage establish that the oak is exactly fifty years old: yes or no?",
    "answer": "no",
    "options": [
     "yes",
     "no"
    ],
    "hint": "Use what the passage gives you. Do not turn a possible guess into a fact.",
    "pic": {
     "t": "passages",
     "title": "Keep conclusions within the evidence",
     "texts": [
      "Branches grew from the thick trunk of the oak."
     ]
    }
   }
  }
 ],
 "progression": {
  "requires": [
   "language-e-subject-agreement"
  ],
  "operations": 2,
  "demand": "Use surrounding words to choose a meaning, identify its strongest clue, and test a conclusion against the passage."
 },
items(add){

contexts.forEach(([word,text,meaning,other,clue,weak,claim,supported],i)=>{
 const pic={t:'passages',title:'Word in context: '+word,texts:[text]},given='Read: "'+text+'" ',choices=i%2?[other,meaning]:[meaning,other],clues=i%2?[clue,weak]:[weak,clue];
 add('meaning',given+'What does '+word+' mean here? 1: '+choices[0]+'. 2: '+choices[1]+'. Answer 1 or 2.',String(choices.indexOf(meaning)+1),pic,'The words "'+clue+'" support '+meaning+'.',[meaning]);
 add('evidence',given+'Which clue best distinguishes the meaning of '+word+'? 1: "'+clues[0]+'". 2: "'+clues[1]+'". Answer 1 or 2.',String(clues.indexOf(clue)+1),pic,'The words "'+clue+'" show that here '+word+' means "'+meaning+'", not "'+other+'".',[clue]);
 add('inference',given+'Does the passage support this conclusion: "'+claim+'"? Answer yes or no.',supported?'yes':'no',pic,supported?'The conclusion follows from the passage: '+claim:'That conclusion is not supported by these words. Check the details rather than adding or reversing them.');
});
}
};
