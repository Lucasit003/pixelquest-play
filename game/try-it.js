/* "Try it in a fight" (oct25-tryit, learning-loop playtest P9): right after an ability unlocks, one button takes the
   child out of the Library into a short, safe fight where the new ability is on the bar and its key is named.
   Pure: it reads a save and returns a choice; main.js starts the level the normal way, so the normal replay rules
   (no first-clear reward again, half kill gold, over-level XP damping) apply and nothing new can be farmed.

   Which fight: the highest Normal level the hero has already cleared whose advised hero level (tiers.js adviceLevel,
   the number the tier card shows) the hero has reached. It is a fight the child has already won at a power they now
   have, so it is safe, and it is the most recent real challenge, so the ability is tried on foes that matter. A hero
   who has cleared nothing (or nothing at their level) gets the next open level instead, which is where the
   adventure would send them anyway (Goblin Camp for a new hero). There is no training dummy or practice arena in the
   game, and the arenas are endless-wave runs, so they are never picked. */
import {LEVELS,levelOpen,levelDone,levelFogged} from './levels.js';
import {adviceLevel} from './tiers.js';
import {levelReady} from './stage.js';

const playable=save=>LEVELS.filter(l=>l.kind==='level'&&!l.hidden&&!levelFogged(l)&&levelReady(l)&&levelOpen(save,l.id));
/* main path first among equals: an optional side level is only picked when it is the higher tier */
const byTier=(a,b)=>(b.tier|0)-(a.tier|0)||(a.optional?1:0)-(b.optional?1:0);

/* -> {id, name, replay, why} or null when no level can be played. */
export function tryItLevel(save){
 const lv=save?.level||1,open=playable(save),fits=l=>adviceLevel(l,'normal')<=lv;
 const won=open.filter(l=>levelDone(save,l.id));
 const pick=(l,replay,why)=>l?{id:l.id,name:l.name,replay,why}:null;
 const safe=won.filter(fits).sort(byTier)[0];if(safe)return pick(safe,true,'cleared');
 const ahead=open.filter(l=>!levelDone(save,l.id)&&!l.optional).sort((a,b)=>(a.tier|0)-(b.tier|0))[0];
 if(ahead&&fits(ahead))return pick(ahead,false,'next');
 const easiest=[...won].sort((a,b)=>(a.tier|0)-(b.tier|0))[0];if(easiest)return pick(easiest,true,'easiest');
 return pick(ahead,false,'next');
}

/* The bar slot for the ability: where it already is, else the first empty slot, else slot 4 (the old one is named so
   the hint can say what it replaced). Returns {slot, replaced}; the caller writes loadout[slot]=id. */
export function tryItSlot(loadout,id){
 const ids=(loadout||[]).slice(0,4);
 const at=ids.indexOf(id);if(at>=0)return {slot:at,replaced:null};
 for(let i=0;i<4;i++)if(ids[i]==null)return {slot:i,replaced:null};
 return {slot:3,replaced:ids[3]};
}

/* The one line shown when the fight starts, e.g. "New: Fireball — press 3". Phone ability buttons carry no numbers, so a touch
   player is pointed at the slot, which glows for the same 6 s (main.js .try-new). */
export function tryItHint(name,{key='1',touch=false,replaced=''}={}){
 return `New: ${name} — ${touch?'tap its glowing button':`press ${key}`}${replaced?` (in place of ${replaced})`:''}`;
}
