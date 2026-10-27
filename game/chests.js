/* Victory Chests (SKYBLOCK_DUNGEONS_PROGRESSION.md section 5.3): after a won map level, one chest per grade step reached.
   All of them are free and all of them are yours: no keys, no rerolls, no paid opens, no "choose one" (guardrail D3).
   - Wooden (any win): what the boss itself paid (its material and any gear or jewel it dropped, game/gear.js rollGear with
     its bad-luck protection) and the level's gold. Nothing extra is rolled here: the boss roll stays on every win.
   - Iron (B): +1 Essence. Gold (A): +2 Essence and +1 boss material. Crystal (S): +2 Essence and +1 boss material.
   - Star (S+): +3 Essence and a double Boss Meter tick (game/meter.js).
   Essence is the Elite Shard (one currency, GEAR_SYSTEM.md section 8.5). The doc's 2/3/4/5 was halved (its own balance
   option) so an S run adds 5 shards, not 9, on top of elite kills: star costs stay as tuned. */
import {bossMat} from './gear.js';
import {gradeRank} from './grade.js';
export const ESSENCE='elite-shard';
export const CHESTS=[
 {key:'wooden',name:'Wooden Chest',at:null,essence:0,mat:0},
 {key:'iron',name:'Iron Chest',at:'B',essence:1,mat:0},
 {key:'gold',name:'Gold Chest',at:'A',essence:2,mat:1},
 {key:'crystal',name:'Crystal Chest',at:'S',essence:2,mat:1},
 {key:'star',name:'Star Chest',at:'S+',essence:3,mat:0,meter:2}];
/* The chests a grade earns, in opening order. No grade (a loss) earns none. */
export const chestsFor=grade=>!grade?[]:CHESTS.filter(c=>!c.at||gradeRank(grade)>=gradeRank(c.at));
/* Fills save.gear.mats with every earned chest's contents and returns the row for the result card:
   [{key, name, items:[{mat,n}|{gold}|{note}]}]. boss: the level's boss key (its material); kill: what the boss kill
   already paid ({mats, items}) and gold: the level's gold, both shown in the Wooden chest. */
export function openChests(s,{grade,boss,kill={},gold=0}){const out=[];if(!grade)return out;const g=s.gear??={};g.mats??={};
 const add=(m,n)=>{if(n>0)g.mats[m]=(g.mats[m]||0)+n;};
 for(const c of chestsFor(grade)){const items=[];
  if(c.key==='wooden'){for(const [m,n] of Object.entries(kill.mats||{}))items.push({mat:m,n});for(const id of kill.items||[])items.push({item:id});if(gold>0)items.push({gold});}
  if(c.essence){add(ESSENCE,c.essence);items.push({mat:ESSENCE,n:c.essence});}
  if(c.mat&&boss){const m=bossMat(boss);add(m,c.mat);items.push({mat:m,n:c.mat});}
  if(c.meter)items.push({note:'Boss Meter x2'});
  out.push({key:c.key,name:c.name,items});}
 return out;}
/* The Essence the chests of a grade pay in all (for tests and the balance note). */
export const chestEssence=grade=>chestsFor(grade).reduce((t,c)=>t+c.essence,0);
