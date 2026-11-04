/* The Trophy Hall at Home (improve20-c-oct31, item 16). One plaque per boss level, read only from the records a save already keeps
   (levels[id] and levels[id].tiers): the frame's metal is the hardest tier won (bronze Normal, silver Heroic, gold Legendary), the
   grade is the best run grade on any tier, and the line is the boss's own last words (game/enemies.js defeat). No new save data.
   Pure: callers pass the save. */
import {LEVELS,levelDone,tierDone} from './levels.js';
import {ENEMY_TYPES} from './enemies.js';
import {betterGrade} from './grade.js';
import {CHAPTERS,tiered} from './levels.js';
import {HALL_CHAPTERS,rungCleared} from './hall.js';
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
/* improve20-r20e-nov4 #4 (audit14 plan item 8: a Story kid could fill the wall only by winning Heroic): the Story row. Five bronze tiles a
   Story kid can fill without Heroic: each chapter with every one of its levels won (side paths too, on any tier: the Normal record is the
   Story clear), a Story Rift won (s.rift.story, counted by game/rift.js riftFinish), and Hall of Echoes Rung I cleared in any chapter
   (s.hall.cleared, which game/hall.js opens after m7). Read only; the Heroic and Legendary frames on the plaques are unchanged. Art: existing
   pictures only (the chapter finale scenes, the Rift portal, the tier star). -> [{id,name,text,won,have,need,img}] */
const chapterLevels=ch=>LEVELS.filter(l=>l.chapter===ch&&tiered(l));
export const STORY_ROW_ART={elderwood:'ui/skin/stages/chapter-elderwood.png',emberkeep:'ui/skin/stages/chapter-emberkeep.png',veilmoor:'ui/skin/stages/chapter-veilmoor.png',rift:'assets/worldmap/rift-portal.png',hall:'ui/skin/pl-icons/tier-star.png'};
export function storyTrophies(s){const out=CHAPTERS.map(c=>{const ls=chapterLevels(c.id),have=ls.filter(l=>levelDone(s,l.id)).length;return {id:c.id,name:`${c.name.replace(/^The /,'')}: every level`,text:have>=ls.length?'Every level won, side paths too.':`${have} of ${ls.length} levels won, side paths too.`,won:ls.length>0&&have>=ls.length,have,need:ls.length,img:STORY_ROW_ART[c.id]};});
 const rw=Math.max(0,s?.rift?.story|0);out.push({id:'rift',name:'Story Rift',text:rw?`Won ${rw} week${rw===1?'':'s'}.`:'Win a Rift of the Week on Story.',won:rw>0,have:Math.min(rw,1),need:1,img:STORY_ROW_ART.rift});
 const hk=HALL_CHAPTERS.filter(ch=>rungCleared(s,ch,1)).length;out.push({id:'hall',name:'Hall Rung I',text:hk?`Cleared in ${hk} of ${HALL_CHAPTERS.length} chapters.`:'Clear Rung I in the Hall of Echoes.',won:hk>0,have:hk,need:HALL_CHAPTERS.length,img:STORY_ROW_ART.hall});
 return out;}
