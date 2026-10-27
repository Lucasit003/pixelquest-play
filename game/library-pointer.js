/* oct24-endgame (playtest ch3 C2): from e8 to v7 the kid earned no new ability and nothing sent them to the Library. A gentle
   pointer: when the hero's next ability waits on learning and the Library has not been opened in the last LIBRARY_RECENT level
   runs, the result screen names that ability and the real number of topics left (one line, at most once per result), and the
   Library on the Oakhaven map shows its icon. No timers, streaks, popups or penalties: it counts runs, never time, and it
   never changes what unlocks an ability (game/math.js unlocked). Pure: reads the save; markLibraryVisit writes one number. */
import {learningRoad} from '../academics/learning-road.js';
import {xpLevel} from './math.js';
export const LIBRARY_RECENT=3;
/* every level and arena run ever recorded, on every tier (levels.js recordLevel counts plays) */
export const runsPlayed=save=>Object.values(save?.levels||{}).reduce((n,r)=>n+(r?.plays|0)+Object.values(r?.tiers||{}).reduce((m,t)=>m+(t?.plays|0),0),0);
export function markLibraryVisit(save){(save.settings??={}).libraryRuns=runsPlayed(save);}
export function libraryPointer(save){
 const r=learningRoad(save);if(!r||r.sleeping||!r.reachable||!(r.remaining>0))return null;
 if(runsPlayed(save)-(save.settings?.libraryRuns|0)<LIBRARY_RECENT)return null;
 const a=r.ability,n=r.remaining,level=(save.level||1)>=xpLevel(a)?'':` You also need hero level ${xpLevel(a)}.`;
 return {ability:a,remaining:n,text:`Next ability: ${a.name}. Master ${n} more topic${n===1?'':'s'} in the Library to unlock it.${level}`};
}
