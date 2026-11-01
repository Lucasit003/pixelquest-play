/* The near learning goal (kidfix-b-oct31, kid-appeal playtest problem 1): after ability 2 the next ability is 3, 4 or 7 topics
   away in one subject, so wherever the game names the next learning goal it now leads with the near one, a rune:
   "Master 1 more topic: earn a rune" (or, with runes waiting, where to place them), then the ability gate as topic dots,
   "Wolf Totem ○○○ Geography". When every owned ability is at rank III there is no rune lead and the gate leads as before.
   Read-only: nothing here changes what unlocks an ability. */
import {SUBJECTS} from './data.js';
import {learningRoad} from '../academics/learning-road.js';
import {runesPlaceable,runeRoom,runesShown} from './runes.js';
export const RUNE_EARN='Master 1 more topic: earn a rune';
export const runePlaceText=n=>`${n===1?'A rune is':`${n} runes are`} ready: place ${n===1?'it':'them'} at Home → Abilities`;
/* {kind:'place'|'earn', text} or null; null until the save has its first rune and an ability to hold it (improve20-q-oct31, runesShown) */
export function runeLead(s){if(!s||!runesShown(s)||!runeRoom(s))return null;const n=runesPlaceable(s);return n>0?{kind:'place',text:runePlaceText(n)}:{kind:'earn',text:RUNE_EARN};}
/* the ability gate as topic dots: one dot per topic on the road, filled for those mastered (counted when the road is long) */
export function gateDots(s,road=learningRoad(s)){if(!road||road.sleeping||!road.reachable||road.knowledge)return null;const a=road.ability,sub=SUBJECTS[a.subject]?.name||a.subject,{done,total}=road;
 const dots=total<=10?'●'.repeat(done)+'○'.repeat(Math.max(0,total-done)):`${done}/${total}`;return `${a.name} ${dots} ${sub}`;}
