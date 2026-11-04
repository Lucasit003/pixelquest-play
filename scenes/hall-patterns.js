/* hall5-nov3: the Hall of Echoes' Rung III patterns (game/hall.js HALL_PATTERN_RUNG). hall3 and hall4 showed that class-blind numbers (heal,
   hits, boss HP, potions) cannot make Rung III a skill test: the good bot dodged almost every telegraph and the numbers walled a kid-skill
   class first. These are new boss patterns instead, built from the move kinds the bosses already use (aoe, wave, summon) and the effects
   they already draw. Every one has a tell (a red-orange ground warning drawn for its whole wind-up, a banner and its own sound) before any
   damage, and a safe answer that needs no ability:
     echo rows   two beats: every other column of the floor lights, then the other columns. Stand in a dark column, then step into the
                 column that just burst.
     echo ring   a ring of floor round the boss lights, centred on the hero's own distance from it (RING_BAND either side), and bursts;
                 then the spot the hero stands on is marked for a slam: step in or out of the ring, then off the mark. hall5 follow-up: it was
                 a ring rolling out from a safe start circle, which a melee hero stood inside for free and a ranged one had to jump (the kid
                 class gap went 29 -> 42); built round the hero's own distance, every class is the same step from safety.
     echo storm  three bursts, one after another, each marked under the hero's feet with a full outlined warning: keep moving.
     echo pylon  an Echo Pylon rises at the far side and shields the boss (it soaks about a third of each hit) while it stands; it sends a
                 ring along the floor every few seconds (jump it, or stand next to it). Three weapon hits or one ability break it, and it
                 crumbles by itself after PYLON.life seconds, so it never doubles a fight's length.
   Each pattern comes when the boss's health first falls past its mark (PATTERN_MARKS: rows and the ring twice, the others once), never on a timer: a class with long fights
   (the Ranger) meets exactly as many patterns as one with short fights (the Berserker), which is what walled a class in hall3/hall4. Only a
   Hall fight on a rung listed in HALL_PATTERN_RUNG has them: story levels, Heroic and Legendary story tiers and Rungs I-II never read this.
   Nothing here is random-for-reward; it changes no reward. docs/playtest/hall5-nov3. */
import {hallPatterns} from '../game/hall.js';
import {STAGE} from '../game/stage.js';
/* the marks: each pattern starts the first time the boss's health falls past its share; rows and the ring come twice a fight */
export const PATTERN_MARKS=Object.freeze([['echo rows',.85],['echo ring',.7],['echo storm',.55],['echo pylon',.4],['echo rows',.25],['echo ring',.12]].map(m=>Object.freeze(m)));
/* each hit's damage as a share of the hero's max health, the same for every class (combat.js hurt reads `pct`): a class's defence would
   otherwise decide who survives a pattern, which is the class gap hall3 and hall4 could not close. HALL_PIERCE: an ability shield does not
   soak it either; only the Warrior, Mage, Paladin and Berserker have one, so soaking would favour them over the Rogue, Ranger and Summoner */
export const HALL_PIERCE=true;
/* hall5 follow-up: a pattern hit never takes the hero below this share of max health (combat.js hurt), so a pattern alone never ends a run */
export const PATTERN_FLOOR=.15;
/* the scale on PATTERN_DMG (hall5 follow-up, kid bot 24 reps: .45 gives every class 71% or more and a 29-point gap; .5-.6 dropped the
   Summoner to 56-60 and widened the gap to 40-44; docs/playtest/hall5-nov3/sim) */
export const PATTERN_SCALE=.45;
export const PATTERN_DMG=Object.freeze({rows:.3,ring:.45,strike:.2,storm:.15,pulse:.15});
/* what the hero is told when each pattern begins (held like a signature move's banner) */
/* improve20-r20h-nov4 #3 (audit14 #13, shots 14-16: "STAND IN THE DARK" read as the dark-filled boxes, which are the danger, and "STEP IN OR OUT"
   named no place): each line names the safe ground. Rows: between the lit rows. Ring: the dark circle inside it (drawn cool and dark,
   enemy-ai.js hallSafe), or, when the hero hugs the boss and the ring is a plain disc (ringMarkers inner 0), out of it (RING_OUT).
   PATTERN_BANNER_TOUCH is the phone's one short line (gfx/stage-view.js touchTitle). Patterns, timings and damage are unchanged. */
export const PATTERN_BANNER=Object.freeze({'echo rows':'ECHO ROWS! STAND BETWEEN THE ROWS!','echo ring':'ECHO RING! STAND IN THE DARK CIRCLE!','echo storm':'ECHO STORM! KEEP MOVING!','echo pylon':'ECHO PYLON! BREAK IT!'});
export const PATTERN_BANNER_TOUCH=Object.freeze({'echo rows':'STAND BETWEEN THE ROWS!','echo ring':'STAND IN THE DARK CIRCLE!','echo storm':'ECHO STORM! KEEP MOVING!','echo pylon':'ECHO PYLON! BREAK IT!'});
export const RING_OUT=Object.freeze({text:'ECHO RING! STEP OUT OF THE RING!',touch:'STEP OUT OF THE RING!'});
export const PATTERN_SOUND=Object.freeze({'echo rows':'tell.echo.rows','echo ring':'tell.echo.ring','echo storm':'tell.echo.storm','echo pylon':'tell.echo.pylon'});
/* the Echo Pylon: the share of each hit on the boss it soaks, the hits that break it, seconds between its rings, and seconds before it crumbles */
export const ROW_COLUMNS=6,RING_BAND=24,PYLON={share:.35,hits:3,every:4.5,life:14};
const clampN=(v,a,b)=>v<a?a:v>b?b:v;
/* the boss's own casting pose for the patterns: the state of its first area or melee move */
const poseOf=e=>(e.attacks||[]).find(a=>(a.kind==='aoe'||a.kind==='melee')&&a.state)?.state||'attack';
/* -> the pattern moves for this boss (forced: only the Hall tick calls them; pickAttack never does) */
export function patternMoves(e,names){const st=poseOf(e),D=Object.fromEntries(Object.entries(PATTERN_DMG).map(([k,v])=>[k,v*PATTERN_SCALE])),base={state:st,forced:true,bossOnly:true,range:999,cd:1,hall:true},out=[];
 for(const n of names){
  if(n==='echo rows')out.push({...base,name:'echo rows',kind:'aoe',pattern:'rows',odd:0,windup:.85,recover:.1,pct:D.rows,impact:'fx-col-arcane',then:'echo rows ii',first:true},{...base,name:'echo rows ii',kind:'aoe',pattern:'rows',odd:1,windup:.85,pct:D.rows,impact:'fx-col-arcane'});
  if(n==='echo ring')out.push({...base,name:'echo ring',kind:'aoe',pattern:'band',windup:.8,recover:.05,pct:D.ring,impact:'fx-col-arcane',then:'echo strike',first:true},{...base,name:'echo strike',kind:'aoe',at:'player',radius:30,count:1,windup:.75,pct:D.strike,feint:true,impact:'fx-explosion'});
  if(n==='echo storm')out.push({...base,name:'echo storm',kind:'aoe',at:'player',radius:26,count:1,repeat:3,sequential:true,fullTell:true,windup:.65,pct:D.storm,impact:'fx-col-shadow',first:true});
  if(n==='echo pylon')out.push({...base,name:'echo pylon',kind:'summon',key:'prism-pylon',spots:'hall',count:1,max:1,link:true,linkShare:PYLON.share,linkColor:'#d9c4ff',propHits:PYLON.hits,visibleTell:true,windup:.8,fx:'fx-aura-arcane',first:true,
   assign:{hallAdd:true,hallLife:PYLON.life,ai:'still',atk:e.atk,attacks:[{name:'echo pulse',state:'idle',kind:'wave',shape:'ring',r0:24,arm:40,speed:100,reach:200,th:8,step:15,fx:'fx-col-arcane',fxs:'rise',range:999,cd:PYLON.every,windup:.8,pct:D.pulse,uses:3,hall:true}]}});}
 return out.map(a=>({...a,sound:PATTERN_SOUND[a.name]||PATTERN_SOUND[out.find(x=>x.first&&x.then===a.name)?.name]||'tell.aoe'}));}
/* called once when a boss's brain is made (scenes/enemy-ai.js): a Hall boss on a pattern rung gets the moves and the marks */
export function armHallPatterns(e,w){const r=w?.hall?.rung;if(!e?.boss||e.summoned||e.decoy||e.hallP||!r)return false;const names=hallPatterns(r);if(!names.length)return false;
 e.attacks=[...(e.attacks||[]),...patternMoves(e,names)];e.hallP={i:0,list:PATTERN_MARKS.filter(([n])=>names.includes(n)).map(([name,at])=>({name,at}))};return true;}
/* each frame of a live Hall boss: the next pattern starts once its mark is passed, from walking or a recovery, never over a move in play */
export function hallPatternTick(e,w,b){const P=e.hallP;if(!P||P.i>=P.list.length||b.force||!['move','recover'].includes(b.mode))return false;const n=P.list[P.i];if(e.hp>e.maxHp*n.at)return false;
 P.i++;b.force=n.name;return true;}
/* the banner, when a pattern's first beat starts its tell */
/* improve20-r18b-nov3 #1 (audit13 #2, shots 02 and 03: the word was drawn over the boss, so with the boss at the arena's right edge
   "ECHO RING! STEP IN OR OUT!" ran off screen, and the armour toast and the boss's own "Swing!" warning stacked on the tell): the pattern's
   banner is the stage's danger banner now (gfx/stage-view.js stageBanners), centred at the top and placed inside the view like every move
   warning, and while it is up (hallTellUp) main.js holds every other tip and toast and core/audio.js ducks the boss's own tells and the
   chimes (#2). It stays up for TELL_HOLD seconds, and on through the pattern's own beats (rows ii, the strike, the storm's bursts). */
export const TELL_HOLD=2.4;
export function hallTell(e,w,a,top,SIG){const t=PATTERN_BANNER[a.name];if(!t||!a.first)return;/* improve20-r20h-nov4 #3: a ring with no inner circle says "out" */const disc=a.name==='echo ring'&&e?.brain?.markers?.[0]?.shape==='circle'&&!(e.brain.markers[0].inner>0);
 w.hallTellOn={text:disc?RING_OUT.text:t,touch:disc?RING_OUT.touch:PATTERN_BANNER_TOUCH[a.name],name:a.name,at:w.time||0,boss:e};}
export function hallTellUp(w){const h=w?.hallTellOn;if(!h||!w.level)return false;const e=h.boss,B=e?.brain;if(!e||!(e.hp>0)||!w.enemies?.includes(e)){w.hallTellOn=null;return false;}if((w.time||0)-h.at<TELL_HOLD)return true;if(B?.atk?.hall&&['tele','act'].includes(B.mode))return true;w.hallTellOn=null;return false;}
/* improve20-r18b-nov3 #1: a Hall boss on a pattern rung keeps its centre at least HALL_EDGE px inside the locked arena (combat.js bossInset), so a
   ring or a row centred on it is on screen; the camera keeps its clamp (it already frames the boss with the hero when they fit) */
export const HALL_EDGE=120;
export const hallEdge=(w,e)=>w?.hall&&e?.boss&&e.hallP?HALL_EDGE:0;
/* the floor this pattern plays on: the arena's walkable rect, inside the camera */
export function patternView(w,B){const cx=w.camX??B.x0,cw=STAGE.camW||480;return {x0:Math.max(B.x0,cx+6),x1:Math.min(B.x1,cx+cw-6),y0:B.y0,y1:B.y1};}
/* echo rows: ROW_COLUMNS columns across the view, every other one lit (odd 0 lights the first, odd 1 the second); the second beat keeps the
   first beat's columns (e.hallRows), so a moving camera can never shift them onto each other */
export function rowMarkers(w,a,B,e){const V=a.odd&&e?.hallRows?e.hallRows:patternView(w,B);if(e)e.hallRows=V;const cw=(V.x1-V.x0)/ROW_COLUMNS,y=(V.y0+V.y1)/2,band=(V.y1-V.y0)/2+6,out=[];
 for(let i=a.odd?1:0;i<ROW_COLUMNS;i+=2)out.push({shape:'box',x0:V.x0+i*cw+3,x1:V.x0+(i+1)*cw-3,y,band,outline:true});return out;}
/* echo ring: one ring of floor round the boss, RING_BAND either side of the hero's own distance (the floor's .55 squash, as every
   ground ellipse); inside it, nearer the boss, is safe and drawn dark (m.inner), and so is everything beyond it. A hero hugging the boss gets a
   plain disc (no room to step in), so steps out like everyone else */
export function ringMarkers(w,a,B,e){const p=w.player,d=Math.hypot(p.x-e.x,(p.y-e.y)/.55),inner=d-RING_BAND;return [{shape:'circle',x:e.x,y:e.y,r:d+RING_BAND,inner:inner<14?0:inner,outline:true}];}
/* the bursts round the ring when it lands, at the middle of the band */
export function ringBursts(m){const r=(m.r+(m.inner||0))/2,n=Math.max(6,Math.min(14,Math.round(r/14))),pts=[];for(let i=0;i<n;i++){const t=i/n*Math.PI*2;pts.push({x:m.x+Math.cos(t)*r,y:m.y+Math.sin(t)*r*.55});}return pts;}
/* echo pylon: it rises on the side of the view away from the hero, 150 px in (clear of a phone's thumb controls), mid floor */
export function pylonSpot(w,p,B){const V=patternView(w,B),mid=(V.x0+V.x1)/2;return {x:p.x<mid?V.x1-150:V.x0+150,y:clampN((V.y0+V.y1)/2,V.y0+8,V.y1-8)};}
/* the bursts along each lit column when echo rows lands (code timing, the existing column effect) */
export function rowBursts(m){const lo=Math.min(m.x0,m.x1),hi=Math.max(m.x0,m.x1),pts=[];for(const k of [-.7,0,.7])pts.push({x:(lo+hi)/2,y:m.y+k*(m.band-6)});return pts;}
