/* polish2-oct29 (docs/design/GAME_READINESS_OCT29.md #10): the victory card looked the same after every win. Each level now has its
   own cheer under the banner ("Grubnak's camp falls!"), and one tag beside the time says what kind of win this was: a first clear,
   a new best time, all three stars at last, or, on a replay, the best time to beat. Words only, read from the run's own record
   (levels.js recordLevel): no reward, XP, star or score rule is read differently or changed. */
export const VICTORY_CHEERS={
 prologue:'The south gate holds!',
 e1:'Grubnak’s camp falls!',e2:'The bog goes quiet.',e3:'Gorrak’s warcamp falls!',e4:'Out of the hollow in one piece!',
 e5:'The dead lie down again.',e6:'The grove’s wards are broken!',e7:'The old watchtower is yours!',e8:'The Thorn King falls!',
 ex1:'The road is safe again.',ex2:'The mire stops moving.',
 m1:'The Ashen Gate swings open!',m2:'The forge fires go out.',m3:'The bridges are clear!',m4:'Sir Cinder’s barracks fall!',
 m5:'The imps scatter!',m6:'The Obsidian Halls fall silent.',m7:'Moltar’s throne goes cold!',mx1:'The wastes are still.',
 v1:'The shrine is free!',v2:'The wisp lights go out.',v3:'You beat your own shadow!',v4:'The crystals go dark.',
 v5:'The choir stops singing.',v6:'The Veil Gate stands open!',v7:'The Sleeper sleeps for good.',vx1:'The garden is yours tonight.'};
/* a level without its own line (a new one) still cheers, by its name */
export const victoryCheer=l=>l?VICTORY_CHEERS[l.id]||`${String(l.name||'The level').replace(/^the /,'The ')} is clear!`:'';
const clock=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
/* One tag, the most special first. st: the run's stats (first, recordTime, newStars, stars, best.time); stars: the stars shown. */
export function victoryTag(st,stars=0){if(!st)return null;
 if(st.first)return {kind:'first',text:'First clear!'};
 if(st.recordTime)return {kind:'record',text:'New best time!'};
 if(st.newStars&&stars===3)return {kind:'stars',text:'All 3 stars!'};
 if(st.best?.time!=null)return {kind:'replay',text:`Your best: ${clock(st.best.time)}`};
 return null;}
