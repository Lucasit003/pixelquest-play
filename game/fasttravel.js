/* Fast travel (owner, 25 Oct: "i like fast travel"; first-hour playtest item 7: walks to the gate took 10-30 s every time).
   Free: no gold, no energy, no cooldown. A place unlocks the first time the hero reaches it on foot: Oakhaven's key spots
   (scenes/town.js hubTravelSpots says where each one is) and every world-map stop the hero has stood on. Only places already
   reached are offered, so it can never skip a star gate or a locked chapter.
   Save (v9, additive, no version bump): s.travel = {places:[id...], hinted:bool}. A town spot is 'town:<id>', a stop is its
   level id. normalize() (core/save.js) calls cleanTravel(): a save from before this field counts every place it has clearly
   reached -- its played or cleared levels' stops, and the town spots once it has been out of the gate. Pure; no DOM. */
import {LEVELS,CHAPTERS,levelById,levelDone,levelOpen} from './levels.js';
import {PADS} from './worldmap-layout.js';

/* guide-oct26: Farmer Hob's farmhouse, where Wil's quest starts, under one name on the town map, here and in the Journal */
export const FARM_NAME='Hob’s Farm';
export const TOWN_SPOTS=[{id:'gate',name:'South gate',note:'Road to the world map'},{id:'library',name:'Library',note:'Lessons and quizzes'},{id:'guild',name:'Adventurers’ Guild',note:'Choose an adventure'},{id:'smith',name:'Weaponsmith',note:'Weapons and armour'},{id:'alchemist',name:'Apothecary',note:'Potions'},{id:'inn',name:'Lantern Inn',note:'Food'},{id:'chapel',name:'Starlight Chapel',note:'A quiet place'},{id:'home',name:'Home',note:'Abilities and pets'},{id:'barracks',name:'Barracks',note:'Companions and bounties'},{id:'farm',name:FARM_NAME,note:'Farmer Hob'}];
/* the Barracks (25 Oct) is new to every save: an older save that walked the village before it was built still finds it on foot */
const LEGACY_SPOTS=TOWN_SPOTS.filter(t=>t.id!=='barracks');
export const MAX_PLACES=96;
export const townPlace=id=>'town:'+id;
const TOWN_IDS=new Set(TOWN_SPOTS.map(t=>townPlace(t.id)));
/* a world-map stop: a pad on a chapter board that is not Oakhaven itself (home) and not a hidden level (the prologue) */
export const isStop=id=>{const l=levelById(id);return !!l&&!!PADS[id]&&l.kind!=='home'&&!l.hidden;};
export const validPlace=id=>typeof id==='string'&&(TOWN_IDS.has(id)||isStop(id));
const obj=v=>!!v&&typeof v==='object'&&!Array.isArray(v);
const played=(s,id)=>levelDone(s,id)||(s?.levels?.[id]?.plays|0)>0;

/* the save's travel record, made if missing (a save object built by hand in a test, or before normalize ran) */
export function travelOf(s){if(!obj(s.travel))s.travel={places:[],hinted:false};if(!Array.isArray(s.travel.places))s.travel.places=[];return s.travel;}
/* stops a save has clearly reached: every level it has cleared or played */
export function syncTravel(s){const t=travelOf(s);let added=false;for(const l of LEVELS)if(isStop(l.id)&&played(s,l.id)&&!t.places.includes(l.id)&&t.places.length<MAX_PLACES){t.places.push(l.id);added=true;}return added;}
/* normalize(): value is the raw saved field (or undefined on an older save); s is the save being built, levels already cleaned */
export function cleanTravel(value,s){
 if(obj(value)){s.travel={places:[...new Set((Array.isArray(value.places)?value.places:[]).filter(validPlace))].slice(0,MAX_PLACES),hinted:value.hinted===true};syncTravel(s);return s.travel;}
 /* a save from before fast travel: out of the gate once (the prologue or any level) means the whole village was walked; a save
    that has only studied knows Home (where the first morning starts) and the Library */
 s.travel={places:[],hinted:false};const t=s.travel;
 const out=played(s,'prologue')||LEVELS.some(l=>l.kind!=='home'&&played(s,l.id));
 const studied=Object.values(obj(s.lessons)?s.lessons:{}).some(l=>l?.done||l?.quiz>0)||Object.keys(obj(s.answers)?s.answers:{}).length>0;
 if(out)t.places.push(...LEGACY_SPOTS.map(x=>townPlace(x.id)));else if(studied)t.places.push(townPlace('home'),townPlace('library'));
 syncTravel(s);return t;}

/* The hero reached a place: true when it is new. */
export function visitPlace(s,id){if(!validPlace(id))return false;const t=travelOf(s);if(t.places.includes(id)||t.places.length>=MAX_PLACES)return false;t.places.push(id);return true;}
export const placeUnlocked=(s,id)=>travelOf(s).places.includes(id);
/* Can the hero go there right now: reached once, and (a stop) still open by the level rules, so a star gate or a closed
   chapter is never skipped even by a hand-edited save. */
export function canTravel(s,id){if(!placeUnlocked(s,id))return false;if(TOWN_IDS.has(id))return true;return isStop(id)&&levelOpen(s,id);}
export const placeName=id=>id.startsWith('town:')?TOWN_SPOTS.find(t=>townPlace(t.id)===id)?.name||id:levelById(id)?.name||id;

/* What the picker lists: Oakhaven's spots, then each chapter's stops in board order; locked rows stay so a child sees what is
   still to find. A chapter with no stop reached is one locked line (its stop names would give the road away). */
export function travelList(s){const town=TOWN_SPOTS.map(t=>({id:townPlace(t.id),name:t.name,note:t.note,open:canTravel(s,townPlace(t.id))}));
 const chapters=CHAPTERS.map(c=>{const stops=LEVELS.filter(l=>l.chapter===c.id&&isStop(l.id)).map(l=>({id:l.id,name:l.name,kind:l.kind,optional:!!l.optional,open:canTravel(s,l.id)}));return {id:c.id,name:c.name,stops,reached:stops.some(x=>x.open)};});
 const count=town.filter(x=>x.open).length+chapters.reduce((n,c)=>n+c.stops.filter(x=>x.open).length,0);
 return {town,chapters,count};}

/* The "New: fast travel" hint shows once, the first time a second place is unlocked (an older save that arrives with many
   places shows it on its first visit to town). Returns true when the caller should show it now; marks it shown. */
export function takeTravelHint(s){const t=travelOf(s);if(t.hinted||t.places.length<2)return false;t.hinted=true;return true;}

/* Why fast travel cannot open now ('' when it can). st: {cine, level (a run is going, even paused under the world map),
   dialogue (a conversation holds the game), modal (an open panel other than the town map or the picker: lessons, quizzes,
   tests, shops), placing (furniture being put down at Home)} */
export function travelBlocked(st={}){
 if(st.cine)return 'Not during a story scene';
 if(st.level)return 'Fast travel works in Oakhaven and on the world map, not during an adventure';
 if(st.dialogue)return 'Finish the conversation first';
 if(st.modal)return 'Finish this first';
 if(st.placing)return 'Put the furniture down first';
 return '';}

