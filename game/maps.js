// One connected route. Named regions control art, ambience, and encounter bounds.
export const MAP={width:700,height:2250};
export const REGIONS=[{id:'forest',name:'Elderwood Forest',start:0,end:640,color:'#425f43'},{id:'castle',name:'The Broken Gate',start:640,end:1100,color:'#74776a'},{id:'hall',name:'The Rootbound Halls',start:1100,end:1600,color:'#515954'},{id:'chamber',name:'The King’s Chamber',start:1600,end:2250,color:'#444e4a'}];
// The road's centreline. Canonical here because both the renderer and combat need
// it: the road wanders, so spawns, travel markers and props must wander with it.
// Eases to centre before the interiors so it meets the throne carpet without a kink.
export function pathX(y,town=false){if(town)return 337;
 const k=y>1150?0:y>1000?(1150-y)/150:1;
 return 330+(Math.sin(y/230)*54+Math.sin(y/97)*18)*k;}
export function regionAt(y){return REGIONS.find(r=>y>=r.start&&y<r.end)||REGIONS.at(-1);}
export const BUILDINGS=[{name:'The Library',action:'library',x:225,y:204,w:118,h:128,art:0,sign:'LIBRARY',color:'#8eb6d8'},{name:'Adventurer’s Guild',action:'guild',x:455,y:205,w:134,h:127,art:1,sign:'GUILD',color:'#d6a582'},{name:'Weaponsmith',action:'smith',x:138,y:373,w:116,h:116,art:2,sign:'WEAPONSMITH',color:'#d6b389'},{name:'Alchemist',action:'alchemist',x:553,y:367,w:112,h:112,art:3,sign:'ALCHEMIST',color:'#af9fd1'},{name:'Home',action:'home',x:330,y:485,w:122,h:113,art:4,sign:'HOME',color:'#adc58b'}];
export const TOWN={width:700,height:580,spawn:{x:337,y:330},fountain:{x:339,y:284}};
export const ENCOUNTERS=[{contract:0,wave:0,y:170},{contract:0,wave:1,y:290},{contract:0,wave:2,y:420},{contract:0,wave:3,y:530},{contract:0,wave:4,y:610},{contract:1,wave:0,y:780},{contract:1,wave:1,y:900},{contract:1,wave:2,y:1010},{contract:1,wave:3,y:1110},{contract:2,wave:0,y:1300},{contract:2,wave:1,y:1480},{contract:2,wave:2,y:1940}];
