import {nudgeTier,nudgeWanted} from './hints.js';
import {ABILITIES} from './abilities.js';
import {unlocked} from './math.js';
import {activeLoadout} from '../academics/awakening.js';
/* settings is field-tolerant in v8. Mark on entry, so skipping, leaving and reloading never replay it.
   improve20-f-nov1 #11 (audit5 #12): "Tap J for a basic blast" showed in town with nothing to hit. Town teaches moving and using things;
   attack, dodge and heavy wait (TIP_WHEN: fight) until the first wave is on, and Interact is done on entering a level (tickControls). */
/* libraryfirst-nov1: a Library-first game (its first power wakes at the Library before the prologue) passes ability=true, and the ability step
   comes right after the first attack, so the power's key is taught on the prologue's first goblins, before the boss closes the card */
export function beginControls(s,id,tier,ability=false){if(id!=='home'||s.settings.controlsSeen)return null;s.settings.controlsSeen=true;if(s.levels?.e1?.done)return null;return {steps:['move','interact','attack',...(ability?['ability']:[]),'dodge','heavy'],index:0};}
/* improve20-r9d-nov1 #1 (audit8 a2): an action done ahead of its step (a dodge during the attack step, the power cast before its turn) is
   remembered in t.done, and its step is passed over when the card gets there, so the card never asks for something already done. */
export function advanceControls(t,action){if(!t)return null;if(action&&t.steps.indexOf(action)>t.index&&!(t.done||=[]).includes(action))t.done.push(action);if(t.steps[t.index]===action)t.index++;while(t.index<t.steps.length&&t.done?.includes(t.steps[t.index]))t.index++;return t.index<t.steps.length?t:null;}
/* A fight step (attack, dodge, heavy, the power) needs a foe. With none alive in a level (the wave is cleared, the next not yet in), the
   card says "Next wave:" and its clock waits (ui/controls-tutorial.js), so it is never an order that cannot be carried out. */
export const FOE_STEPS=Object.freeze(['attack','dodge','heavy','ability']);
export const waitsForFoe=(t,w)=>!!t&&!!w?.level&&FOE_STEPS.includes(t.steps?.[t.index])&&!(w.enemies||[]).some(e=>e.hp>0&&!e.ally);

/* A hint stays until the player does the thing (r3 playtest: 8 s was gone before a child read it). HINT_WAIT is only a
   safety net for a player who never tries; age counts on-screen time only, so a hint never runs out behind a panel. */
export const HINT_WAIT=90;
/* polish-oct29 (#9): "Getting started 5/5: press K for a Power Swing" sat over the whole prologue boss when K was never pressed, and
   "Travel tips 1/2" sat over the Library for minutes. In a level a Getting started step has a 30 s safety net (the fight is short; the
   ability hint already gives itself 15 s a level), and the card is done once a boss fight starts (as Interact is done on entering
   combat): the boss and its health bar stay clear. Travel tips are optional extras and get 30 s each anywhere. */
export const LEVEL_HINT_WAIT=30,TIP_WAIT=30;
/* improve20-r14c-nov3 #11 (kidsim3 k22: "5/6 Press Shift to roll" moved on before it was read): a step that has been on screen stays at least
   STEP_HOLD seconds of on-screen time, or until its action is done, whichever is later. ui/controls-tutorial.js keeps showing the step the
   card had (a held copy) while the game's own step has moved on; a step skipped without being shown, and the boss-fight close, are not held. */
export const STEP_HOLD=3;
/* improve20-r20i-nov4 #7 (kidsim5 #13: "Getting started · 5/6 · next wave: Press Shift to roll" changed before a 150 wpm reader finished it, 9 times): the card
   holds what it shows for at least its reading time, READ_FLOOR s or READ_WPM words a minute, whichever is longer (ui/controls-tutorial.js passes it as hold) */
export const READ_FLOOR=4,READ_WPM=200;
export const readHold=text=>{const n=String(text||'').trim().split(/\s+/).filter(Boolean).length;return Math.max(READ_FLOOR,n*60/READ_WPM);};
export const holdStep=(cur,shown,t,vis,hold=STEP_HOLD)=>!!cur&&shown>=0&&shown<cur.steps.length&&vis>0&&vis<hold&&(t===cur&&t.index!==shown||!t&&cur.index>=cur.steps.length);
export function tickControls(t,age,inLevel=false,bossFight=false){const step=t?.steps[t.index],tips=t?.steps[0]==='run';if(t&&bossFight&&!tips)return null;return t&&(age>(tips?TIP_WAIT:inLevel?LEVEL_HINT_WAIT:HINT_WAIT)||inLevel&&step==='interact')?advanceControls(t,step):t;}

/* improve20-u-nov1 #2: the first hit Grubnak's guard soaks (w.guardNudge, scenes/boss-guard.js) shows the tip and pulses the button at once,
   whatever the clock and the three-a-save count say, once a fight. */
/* One quiet reminder per living boss encounter, three per save. Only successful casts reset the clock;
   a busy toast channel retries with current readiness instead of queuing a stale combat instruction. */
export function tickAbilityNudge(w,dt,show){const boss=w.enemies.find(e=>e.boss&&e.hp>0);if(!boss){w.abilityNudge=null;return false;}let h=w.abilityNudge;if(!h||!w.enemies.includes(h.boss)||h.boss.hp<=0)h=w.abilityNudge={boss,age:0,said:false,cast:w.lastCast};if(w.paused||w.player.hp<=0||['bossintro','rebirth','victory'].includes(w.flow))return false;if(h.cast!==w.lastCast){h.cast=w.lastCast;h.age=0;}else h.age+=dt;const count=Math.max(0,Math.floor(Number(w.save.settings.abilityNudges)||0));const guard=!!w.guardNudge&&!h.guardSaid;if(!guard&&(h.said||count>=3||h.age<20)||!nudgeTier(w.save))return false;const ids=activeLoadout(w.save),slot=ids.findIndex(id=>{const a=ABILITIES[w.save.hero].find(a=>a.id===id);return a&&(guard||nudgeWanted(w.save,id))&&unlocked(w.save,a)&&!(w.player.cooldowns[id]>0)&&w.player.mp>=a.cost;});if(slot<0)return false;const a=ABILITIES[w.save.hero].find(a=>a.id===ids[slot]);if(!show(a,slot,guard))return false;h.said=true;if(guard)h.guardSaid=true;w.save.settings.abilityNudges=count+1;w.events.persist?.();return true;}

/* improve20-q-oct31 (audit2 #22): every tip has a when rule (TIP_WHEN). A tip whose moment has not come waits, hidden, with its
   clock stopped (ui/controls-tutorial.js); a tip for a system the save has not unlocked is skipped (TIP_LOCKED). The moment comes
   from tipContext: town (in Oakhaven), level, fight (a level's waves, boss and everything but its open path) and ability (an awake
   ability equipped). The Travel tips (run across town, jump while exploring) are for getting about Oakhaven: they showed on the
   prologue's open path between two fights, so they wait for town now. Interact needs no rule: in a level it is done on entering
   combat (tickControls). */
const hasAbility=s=>!!s&&activeLoadout(s).some(id=>{const a=id&&(ABILITIES[s.hero]||[]).find(x=>x.id===id);return !!a&&unlocked(s,a);});
/* libraryfirst-nov1: the first awake ability on the bar and its slot, so the ability step can name it ("Press 1 to use Fireball") and light its
   button; null when none is equipped */
export function firstPower(s){if(!s)return null;const ids=activeLoadout(s);for(let i=0;i<ids.length;i++){const a=ids[i]&&(ABILITIES[s.hero]||[]).find(x=>x.id===ids[i]);if(a&&unlocked(s,a))return {a,slot:i};}return null;}
export const tipContext=(w,s)=>{const level=!!w?.level;return {town:w?.zone==='town'&&!level,level,fight:level&&!['walk','go'].includes(w?.flow),ability:hasAbility(s)};};
export const TIP_WHEN=Object.freeze({move:()=>true,attack:c=>c.fight,dodge:c=>c.fight,heavy:c=>c.fight,interact:()=>true,ability:c=>c.ability,run:c=>c.town,jump:c=>c.town});
export const TIP_LOCKED=Object.freeze({ability:c=>!c.ability});
const stepOf=t=>t?.steps?.[t.index];
export const tipWaits=(t,c)=>{const k=stepOf(t);return !!k&&!!c&&!!TIP_WHEN[k]&&!TIP_WHEN[k](c);};
export const tipLocked=(t,c)=>{const k=stepOf(t);return !!k&&!!c&&!!TIP_LOCKED[k]?.(c);};

/* Once, when the player begins travelling after the introductory controls. */
export function beginTraversal(s,input){if(s.settings.traversalSeen||!['up','down','left','right'].some(k=>input[k]))return null;s.settings.traversalSeen=true;return {steps:['run','jump'],index:0};}
