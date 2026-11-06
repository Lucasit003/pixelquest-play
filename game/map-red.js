/* improve25-r25s-nov5 #1 (kidsim8 #2, shot 02: Mia failed the first test, closed the card with x over the map a first clear had walked on to
   Bandit Road, and Enter took her into that optional, unbeaten level). Pure: it reads the save, writes nothing. The world map's default stop and
   its GO (Enter) follow the card's red and NEXT GOAL:
   - a Library card's red that names a level (the failed first-topic test's won break level, R24K; a quiz's fight break) leads while it waits
     (main.js mapBreak, set by that card, cleared by the next level, lesson or sitting): {at, brk: the red's words};
   - else the next goal's pad when it is open, or held by a power gate (whose Enter opens the Library on its step, R12A);
   - else, for a Library step, the power-gated pad the map opens on (frontier), or Oakhaven, whose Enter goes on to the Library: {at:'home', home};
   - any other goal (a shop, the Guild, the south gate) gives null: the map keeps its own stop (its memory, else frontier).
   An optional level leads only when it is the red. */
import {nextStep} from './next-step.js';
import {levelById,levelOpen} from './levels.js';
import {gateInfo} from './power-gate.js';
import {gateShut} from '../academics/starter-lesson.js';
export function mapRedAt(save,brk=null,{frontier}={}){if(!save||gateShut(save))return null;if(brk?.id&&levelOpen(save,brk.id))return {at:brk.id,brk:String(brk.text||'').trim().replace(/\.?$/,'.')};
 let n=null;try{n=nextStep(save);}catch{return null;}const t=n?.target;if(!t)return null;
 if(t.kind==='pad'&&levelById(t.id)&&(levelOpen(save,t.id)||gateInfo(save,t.id)))return {at:t.id};
 if(t.kind==='library'){const f=frontier?.(save);if(f&&gateInfo(save,f))return {at:f};return {at:'home',home:{text:n.text,subject:t.subject||''}};}
 return null;}
