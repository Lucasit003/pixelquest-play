import {ABILITIES} from './abilities.js';
import {unlocked} from './math.js';
import {activeLoadout} from '../academics/awakening.js';
/* settings is field-tolerant in v8. Mark on entry, so skipping, leaving and reloading never replay it. */
export function beginControls(s,id,tier,ability=false){if(id!=='home'||s.settings.controlsSeen)return null;s.settings.controlsSeen=true;if(s.levels?.e1?.done)return null;return {steps:['move','attack','interact','dodge','heavy',...(ability?['ability']:[])],index:0};}
export function advanceControls(t,action){if(t&&t.steps[t.index]===action)t.index++;return t&&t.index<t.steps.length?t:null;}

/* A hint stays until the player does the thing (r3 playtest: 8 s was gone before a child read it). HINT_WAIT is only a
   safety net for a player who never tries; age counts on-screen time only, so a hint never runs out behind a panel. */
export const HINT_WAIT=90;
/* polish-oct29 (#9): "Getting started 5/5: press K for a Power Swing" sat over the whole prologue boss when K was never pressed, and
   "Travel tips 1/2" sat over the Library for minutes. In a level a Getting started step has a 30 s safety net (the fight is short; the
   ability hint already gives itself 15 s a level), and the card is done once a boss fight starts (as Interact is done on entering
   combat): the boss and its health bar stay clear. Travel tips are optional extras and get 30 s each anywhere. */
export const LEVEL_HINT_WAIT=30,TIP_WAIT=30;
export function tickControls(t,age,inLevel=false,bossFight=false){const step=t?.steps[t.index],tips=t?.steps[0]==='run';if(t&&bossFight&&!tips)return null;return t&&(age>(tips?TIP_WAIT:inLevel?LEVEL_HINT_WAIT:HINT_WAIT)||inLevel&&step==='interact')?advanceControls(t,step):t;}

/* One quiet reminder per living boss encounter, three per save. Only successful casts reset the clock;
   a busy toast channel retries with current readiness instead of queuing a stale combat instruction. */
export function tickAbilityNudge(w,dt,show){const boss=w.enemies.find(e=>e.boss&&e.hp>0);if(!boss){w.abilityNudge=null;return false;}let h=w.abilityNudge;if(!h||!w.enemies.includes(h.boss)||h.boss.hp<=0)h=w.abilityNudge={boss,age:0,said:false,cast:w.lastCast};if(w.paused||w.player.hp<=0||['bossintro','rebirth','victory'].includes(w.flow))return false;if(h.cast!==w.lastCast){h.cast=w.lastCast;h.age=0;}else h.age+=dt;const count=Math.max(0,Math.floor(Number(w.save.settings.abilityNudges)||0));if(h.said||count>=3||h.age<20)return false;const ids=activeLoadout(w.save),slot=ids.findIndex(id=>{const a=ABILITIES[w.save.hero].find(a=>a.id===id);return a&&unlocked(w.save,a)&&!(w.player.cooldowns[id]>0)&&w.player.mp>=a.cost;});if(slot<0)return false;const a=ABILITIES[w.save.hero].find(a=>a.id===ids[slot]);if(!show(a,slot))return false;h.said=true;w.save.settings.abilityNudges=count+1;w.events.persist?.();return true;}

/* Once, when the player begins travelling after the introductory controls. */
export function beginTraversal(s,input){if(s.settings.traversalSeen||!['up','down','left','right'].some(k=>input[k]))return null;s.settings.traversalSeen=true;return {steps:['run','jump'],index:0};}
