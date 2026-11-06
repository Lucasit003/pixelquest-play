/* improve25-r25t-nov5 #1 #2 #3 (audit16 plan 7, audit15: "nothing new opens between topics"): study looks, hero looks earned only by
   learning. Each one is a milestone of topics learned: the count is the Scholar badges count (academics/learning-road.js scholarBadges, one for
   every topic mastered, shown on the next-ability card), so "8 topics learned" here is "8 Scholar badges" there. Mastery is never removed, so
   a look once earned stays earned. Two slots, one look worn in each:
   - 'trail': footfall sparkles in the look's colour while the hero walks (town, the Home and levels; gfx/study-looks.js);
   - 'glow': a soft glow round the hero's weapon or hands, brighter on the swing (gfx/study-looks.js).
   Code-drawn effects only, drawn under the hero sprite and never on it (heroes stay unmodified).
   Pillars: earned by mastered topics only; never bought (gold cannot buy one and no shop lists one), never a daily prize, a chest or a
   Rift drop, never random, no timer. Nothing here unlocks anything or changes a number in a fight; unlocked() never reads it.
   Milestones (the lead asked that every gap between two power gates, up to the 30 gate, holds at least one look and that none falls on a
   gate's own count). The gates are mastery points, not topics, so the real counts were read from the ladder: following the game's own
   lead (power-gate.js nextPower, every class, tests/improve25-r25t-nov5.test.js re-runs it) the 2nd ability wakes at 1 topic, the 3rd at
   4, the 4th at 7-10, the 5th at 14-20, the 6th at 23-36 and the 7th at 45-66. The suggested 4 and 14 are wake counts (every class's 3rd
   power wakes at 4 topics, the Rogue's 5th at 14), so they moved to 5 and 16; 20 is the Warrior's and the Mage's 5th, so it moved to 22;
   and the 6th-to-7th gap (Rogue 31-44 ... Mage 37-50) had none below 30, so the last look is at 40.
   Save: s.studyLooks = {worn:{trail,glow}, seen:[id]} -- additive within v9, cleaned by core/save.js normalize (cleanStudyLooks). `seen` lists
   the looks the child has been told about (a mastery card, or one summary line in town for an older save); s.heroLook (the creator) is
   unrelated. */
/* lead (R25T review): the weapon looks are named "Shine", not "Glow", so they never read as R25F's next-power glow ("Your glow: 1 of 3") on the same mastery card; ids and the 'glow' slot key are unchanged */
export const LOOK_SLOTS=Object.freeze(['trail','glow']);
/* [id, slot, name, topics learned, colour, light colour, shape (trail) or style (glow)] */
const ROWS=[['spark-steps','trail','Spark Steps',2,'#ffcf4d','#fff3c2','spark'],['moon-glow','glow','Moonlit Shine',5,'#9fc4ff','#e6f0ff','soft'],
 ['clover-steps','trail','Clover Steps',8,'#6fd86a','#d4ffc4','leaf'],['sun-glow','glow','Sunbeam Shine',12,'#ffb43c','#ffe9a6','soft'],
 ['snow-steps','trail','Snowflake Steps',16,'#a9e4ff','#ffffff','flake'],['blossom-glow','glow','Blossom Shine',22,'#ff8fc8','#ffd9ee','soft'],
 ['comet-steps','trail','Comet Steps',27,'#b28cff','#efe4ff','star'],['rainbow-glow','glow','Rainbow Shine',40,'#ff7a7a','#ffffff','rainbow']];
export const STUDY_LOOKS=Object.freeze(ROWS.map(([id,slot,name,at,color,light,shape])=>Object.freeze({id,slot,name,at,color,light,shape})));
export const LOOK=Object.freeze(Object.fromEntries(STUDY_LOOKS.map(l=>[l.id,l])));
export const LOOK_AT=Object.freeze(STUDY_LOOKS.map(l=>l.at));
/* topics learned: the Scholar badges count (scholarBadges in academics/learning-road.js, kept as the same expression so this module stays a leaf) */
export const topicsLearned=s=>Object.values(s?.lessons||{}).filter(l=>l?.pts>0).length;
export const lookEarned=(s,id,n=topicsLearned(s))=>!!LOOK[id]&&n>=LOOK[id].at;
export const earnedLooks=(s,n=topicsLearned(s))=>STUDY_LOOKS.filter(l=>n>=l.at);
/* the next look still to earn, or null when every one is earned */
export const nextLook=(s,n=topicsLearned(s))=>STUDY_LOOKS.find(l=>n<l.at)||null;
export const emptyStudyLooks=()=>({worn:{trail:null,glow:null},seen:[]});
export function cleanStudyLooks(v,s){const o=emptyStudyLooks();if(!v||typeof v!=='object'||Array.isArray(v))return o;const n=topicsLearned(s);
 o.seen=Array.isArray(v.seen)?[...new Set(v.seen.filter(id=>typeof id==='string'&&LOOK[id]))]:[];
 const w=v.worn&&typeof v.worn==='object'?v.worn:{};for(const k of LOOK_SLOTS){const id=w[k];if(typeof id==='string'&&LOOK[id]?.slot===k&&lookEarned(s,id,n))o.worn[k]=id;}
 return o;}
const rec=s=>{const r=s.studyLooks;if(!r||typeof r!=='object'||!r.worn||!Array.isArray(r.seen))s.studyLooks=cleanStudyLooks(r,s);return s.studyLooks;};
/* wears an earned look in its slot (id null with a slot takes that slot off); true when it changed */
export function wearLook(s,id,slot=LOOK[id]?.slot){if(!s||!LOOK_SLOTS.includes(slot))return false;const r=rec(s);
 if(id==null){if(r.worn[slot]==null)return false;r.worn[slot]=null;return true;}
 if(LOOK[id]?.slot!==slot||!lookEarned(s,id)||r.worn[slot]===id)return false;r.worn[slot]=id;return true;}
/* what is worn in a slot (an earned look), or null */
export const wornLook=(s,slot)=>{const id=s?.studyLooks?.worn?.[slot];return id&&LOOK[id]?.slot===slot&&lookEarned(s,id)?LOOK[id]:null;};
/* the same for the frame loop (town.js, world.js), without counting topics every frame: only wearLook and cleanStudyLooks set `worn`, both
   check the look is earned, and mastery is never removed */
export const wornFx=(s,slot)=>{const id=s?.studyLooks?.worn?.[slot];return id&&LOOK[id]?.slot===slot?LOOK[id]:null;};
/* the earned looks the child has not been told about yet, oldest first */
export const unseenLooks=(s,n=topicsLearned(s))=>{const seen=s?.studyLooks?.seen||[];return earnedLooks(s,n).filter(l=>!seen.includes(l.id));};
export function markSeen(s,looks){const r=rec(s);let ch=false;for(const l of looks||[]){const id=typeof l==='string'?l:l?.id;if(LOOK[id]&&!r.seen.includes(id)){r.seen.push(id);ch=true;}}return ch;}
/* the kid words */
export const lookLine=l=>`New look: ${l.name}, for ${l.at} topics learned`;
export const lockedLine=(l,n)=>{const k=Math.max(1,l.at-n);return `Learn ${k} more topic${k===1?'':'s'}`;};
export const slotName=slot=>slot==='trail'?'Step sparkles':'Weapon shine';
export const slotWhat=slot=>slot==='trail'?'Little sparkles where you step, in town, at Home and in levels.':'A soft shine round your weapon, brighter when you swing.';
/* one summary line for looks earned before this showed (an older save) or on a path with no mastery card: "New look: Spark Steps, for 2 topics
   learned. Find it at Home → Looks." or "3 new looks for your 9 topics learned! Find them at Home → Looks." ("Find" here: improve20-r12c-nov2 #8
   keeps every "Wear it" line on the one Home → Inventory wording for gear and charms) */
export function summaryLine(s,looks=unseenLooks(s)){if(!looks.length)return '';if(looks.length===1)return `${lookLine(looks[0])}. Find it at Home → Looks.`;return `${looks.length} new looks for your ${topicsLearned(s)} topics learned! Find them at Home → Looks.`;}
/* #3 the near beat: the next look on the way to the next power (road = academics/learning-road.js learningRoad). Following the road, each of its
   topics is one more topic learned, so the look lands after `left` more of them. On the way: before the power wakes (left < remaining), or
   while the road waits on the hero level or cannot be finished by lessons (then the look is the learning beat left). Not while the first
   ability sleeps (its starter lesson is the one step). -> {look, left, at (the road's topic it lands on, 1-based, or 0 off the road)} or null */
export function lookMarker(s,road){if(road?.sleeping)return null;const n=topicsLearned(s),l=nextLook(s,n);if(!l)return null;const left=l.at-n;
 if(!road)return {look:l,left,at:0};if(road.knowledge||!road.reachable)return {look:l,left,at:0};
 if(!(left<(road.remaining|0)))return null;return {look:l,left,at:(road.done|0)+left};}
export const markerText=m=>m?`${m.left} more topic${m.left===1?'':'s'}: ${m.look.name}`:'';
