/* The Trophy Hall at Home (improve20-c-oct31, item 16). One plaque per boss level, read only from the records a save already keeps
   (levels[id] and levels[id].tiers): the frame's metal is the hardest tier won (bronze Normal, silver Heroic, gold Legendary), the
   grade is the best run grade on any tier, and the line is the boss's own last words (game/enemies.js defeat). No new save data.
   Pure: callers pass the save. */
import {LEVELS,levelDone,tierDone} from './levels.js';
import {ENEMY_TYPES} from './enemies.js';
import {betterGrade} from './grade.js';
export const METAL={normal:'bronze',heroic:'silver',legendary:'gold'};
export const METAL_TINT={bronze:'#c07a3a',silver:'#cfd6e2',gold:'#ffc928'};
export const TROPHY_LEVELS=LEVELS.filter(l=>l.kind==='level'&&l.boss&&ENEMY_TYPES[l.boss]);
const gradeIn=r=>r?.done?r.best?.grade||null:null;
export function trophyOf(s,l){const e=ENEMY_TYPES[l.boss],won=levelDone(s,l.id),rec=s?.levels?.[l.id],tier=!won?null:tierDone(s,l.id,'legendary')?'legendary':tierDone(s,l.id,'heroic')?'heroic':'normal';
 let grade=null;if(won)for(const r of [rec,rec?.tiers?.heroic,rec?.tiers?.legendary]){const g=gradeIn(r);if(g)grade=grade?betterGrade(grade,g):g;}
 return {id:l.id,level:l.name,boss:l.boss,sprite:e.sprite,name:l.bossName||e.name,line:e.defeat||'',won,tier,metal:tier?METAL[tier]:null,grade};}
export const trophies=s=>TROPHY_LEVELS.map(l=>trophyOf(s,l));
export const trophyCount=s=>TROPHY_LEVELS.filter(l=>levelDone(s,l.id)).length;
export const TROPHY_TOTAL=TROPHY_LEVELS.length;
