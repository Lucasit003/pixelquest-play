// The 'level' scene in the shape docs/GAME_V2_PLAN.md asks of every scene: enter/update/draw/exit.
// main.js already runs the World each frame; this adapter lets the integrator switch to it like any other
// scene. start is main.js startLevel (it handles shop pads and locked pads, and returns false for them).
import {drawWorld} from '../gfx/world.js';
import {drawStageHud} from '../gfx/stage-view.js';
export function levelScene(world,{start}){return {
 enter({id,onLevelEnd}){return start(id,{onLevelEnd});},
 update(dt,input){world.update(dt,input);},
 draw(c,t){drawWorld(c,world,t);if(world.level)drawStageHud(c,world,t);},
 exit(){world.town();}};}
