// Level-stage presentation owned by the levels agent. Rule 0 (docs/STYLE_GUIDE.md): nothing here may draw art.
//  - stageBanners(w): WHAT the level is announcing this frame (fade, WAVE n/N, WAVE CLEARED, GO, the boss name card
//    with its intro line, VICTORY) as plain data. Pure, so the UI agent can render it however its skin needs.
//  - drawBanner(c,b): HOW one banner is drawn -- the single swap point. The UI agent registers its downloaded
//    9-slice plank/banner images and bitmap pixel font with setStageUI({banner(c,b){...;return true}}) (or by
//    setting globalThis.PQ_UI.stageBanner); until then the fallback is the same bitmap font, text only.
//  - drawStageHud(c,w,t): runs the above on the 480x270 canvas after drawWorld. Full-screen fades and the
//    letterbox are colour grading, the one code-made visual Rule 0 allows.
//  - bannerActive(w): true while a centre-screen beat is up, so main.js holds its toasts until it has gone.
//  - drawStageMap: the minimap in a level: the baked map's overview with your position, else plain markers.
import {enemyTop} from '../scenes/enemy-ai.js';
import {STAGE,BEATS,REBIRTH} from '../game/stage.js';
import {drawPixelText} from '../ui/canvas-ui.js';
import {wayAlpha} from '../ui/stage-banners.js';
import {potionCount} from '../game/potions.js';
import {clearLabelAt} from '../scenes/tier-fx.js';
import {firstFlashAlpha,FIRST_BANNER} from '../scenes/rune-fx.js';
import {GUARD} from '../scenes/boss-guard.js';
import {hallTellUp} from '../scenes/hall-patterns.js';
/* friends2-nov5 #2 */import {callsNow} from '../scenes/ability-seal-fx.js';
/* improve23-r23s-nov4 #3 */import {sealViewRect,/* improve24-r24n-nov5 #6 */cacheWordsUp} from '../scenes/ability-seal-fx.js';
const R=Math.round;
/* ---- the swap point ------------------------------------------------------------------------------------- */
let UI=null;
export function setStageUI(api){UI=api||null;}
/* Fallback text is the UI's baked bitmap font (ui/canvas-ui.js drawPixelText) at whole-pixel scales -- never canvas font
   text, which garbles pixel fonts at small sizes (playtest S2-1). Until the font atlas loads, nothing is drawn. */
const say=(c,s,x,y,size,col,align='center')=>drawPixelText(c,s,R(x),R(y),{scale:size>=12?2:1,bold:size>=10,color:col,outline:'#1a0f0b',align});
const GOLD='#e8c46a',PARCH='#f1e4c0';
export function drawBanner(c,b){
 const api=UI||globalThis.PQ_UI;if(api?.banner?.(c,b)||api?.stageBanner?.(c,b))return;
 c.save();c.globalAlpha*=b.alpha??1;
 if(b.kind==='intro'){say(c,b.title,240,130,16,PARCH);say(c,b.sub,240,148,8,GOLD);}
 else if(b.kind==='wave'){say(c,b.title,240,b.y,10,PARCH);}
 else if(b.kind==='cleared'){say(c,b.title,240,b.y,14,GOLD);}
 else if(b.kind==='go'&&b.way){for(let i=0;i<3;i++){c.globalAlpha=(b.alpha??1)*wayAlpha(b.phase,i);say(c,'>',R(b.x)+i*14,b.y,12,GOLD,'left');}}
 else if(b.kind==='go'){say(c,b.title,R(b.x),b.y,12,PARCH,'right');}
 else if(b.kind==='boss'){const off=R((1-b.slide)*-18);c.globalAlpha*=b.slide;say(c,b.title,240-off,168,12,PARCH);say(c,b.sub,240+off,183,8,GOLD);if(b.line)say(c,b.line,240,200,8,PARCH);}
 else if(b.kind==='victory'){say(c,b.title,240,118,22,GOLD);}
 else if(b.kind==='prompt'||b.kind==='quote'){say(c,b.title,240,b.y,10,b.kind==='quote'?GOLD:PARCH);}
 c.restore();}
/* ---- what is on screen ---------------------------------------------------------------------------------- */
/* improve20-f-nov1 #13 (audit5 #3): on a phone the potion prompt sat at the bottom over the joystick row, cut in half by the edge and
   stacked under the ability tip. It is one short line at the top centre under the boss bar now (main.js shows no other tip with it and
   points at the potion button). Desktop keeps its place. */
const potY=y=>globalThis.document?.documentElement?.classList?.contains('m-mode')?40:y;
export const potionPromptUp=w=>stageBanners(w).some(b=>b.step==='potion');
export function stageBanners(w){if(!w?.level)return [];const f=w.flow,k=w.flowT||0,out=[],step=w.save?.settings?.controlsSeen?null:w.tutorialStep?.();
 if(f==='intro')out.push({kind:'intro',title:w.level.name.toUpperCase(),sub:w.arena?'SURVIVE AS LONG AS YOU CAN':w.tierKey&&w.tierKey!=='normal'?`${w.tierKey.toUpperCase()} · WALK RIGHT`:'WALK RIGHT',tier:w.tierKey||'normal',alpha:Math.min(1,k/.25)});
 /* browser check 14 Oct: the intro runs under the loading curtain, so on Heroic and Legendary the tier stays up for the first steps */
 if(f==='walk'&&w.wave===0&&!w.arena&&w.tierKey&&w.tierKey!=='normal'&&k<2.4)out.push({kind:'intro',title:w.level.name.toUpperCase(),sub:`${w.tierKey.toUpperCase()} · WALK RIGHT`,tier:w.tierKey,alpha:Math.min(1,(2.4-k)/.6)});
 if(f==='wave'&&k<1.4&&w.group===0&&!step)out.push({kind:'wave',title:w.arena?`WAVE ${w.wave+1}`:w.waveDef?.()?.extra?'LAST STAND!':w.waveDef?.()?.ambush?'AMBUSH!':`WAVE ${w.wave+1} / ${w.level.waves.length}`,y:54,alpha:Math.min(1,k/.2,(1.4-k)/.3),prio:1,dur:1.4});
 /* the boss's rally: call to arms, then the opening */
 if(f==='boss'&&w.rally&&w.run){const t=w.run.time-w.rally.at,e=w.rally.ended!=null?w.run.time-w.rally.ended:null;if(e==null&&t<2)out.push({kind:'wave',title:`${(w.level.bossName||'THE BOSS').split(',')[0].toUpperCase()} CALLS FOR BACKUP!`,y:54,alpha:Math.min(1,t/.2,(2-t)/.3),prio:3,dur:2});else if(e==null)out.push({kind:'wave',title:'DEFEAT THE BACKUP FIRST',y:54,alpha:1,sticky:true});else if(e<1.5)out.push({kind:'wave',title:'GUARD DOWN, ATTACK!',y:54,alpha:Math.min(1,e/.2,(1.5-e)/.3),prio:3,dur:1.5});}
 /* improve20-r8b-nov1 #3 (audit7 d16): every fifth arena wave gets its own banner with the crest, "WAVE 10 CLEARED!" */
 if(f==='arenabreak'&&w.arena&&w.wave>0&&w.wave%5===0){if(k<BEATS.clear+.9)out.push({kind:'cleared',milestone:true,title:`WAVE ${w.wave} CLEARED!`,y:70,alpha:Math.min(1,k/.15,(BEATS.clear+.9-k)/.3),prio:2,dur:BEATS.clear+.9});}
 else if((f==='go'||f==='arenabreak'||f==='regroup')&&k<BEATS.clear+.9)out.push({kind:'cleared',title:'WAVE CLEARED',y:70,alpha:Math.min(1,k/.15,(BEATS.clear+.9-k)/.3),prio:1,dur:BEATS.clear+.9});
 /* the prologue's one prompt at a time, keyed to the player's own bindings */
 if(step){const kb=w.save?.settings?.bindings||{},K=v=>v===' '?'SPACE':String(v||'').toUpperCase();
  const text={move:`MOVE: ${[kb.up,kb.left,kb.down,kb.right].map(K).join(' ')}`,attack:`TAP ${K(kb.attack)} TO ATTACK`,walk:'WALK RIGHT →',dodge:`DODGE: ${K(kb.dodge)}`,power:'USE YOUR POWER: 1',finish:'DEFEAT THE SCOUTS!'}[step];
  /* a tip the player has not acted on fades after 8 s once a boss is up, so it never sits over a whole boss fight (playtest 14 Oct pass 2) */
  const now=w.run?.time||0,seen=w.tipSeen&&w.tipSeen.step===step?w.tipSeen:(w.tipSeen={step,at:now}),boss=w.enemies?.some?.(e=>e.boss&&e.hp>0),age=now-seen.at,fade=boss&&step!=='finish'?Math.max(0,Math.min(1,(8.6-age)/.6)):1;
  if(text&&fade>0)out.push({kind:'prompt',step,title:text,y:44,alpha:fade});}
 const paced=w.enemies?.some(e=>e.hp>0&&e.normalPacing),veil=w.level.encounter?.veilmoor,veilFx=veil&&(w.enemyFx||[]).find(f=>f.a?.label&&!f.hit&&(f.kind==='lure'||f.kind==='hazard'&&f.t<0)),links=veil&&w.enemies?.some(e=>e.hp>0&&e.linkTo),copies=veil&&w.enemies?.some(e=>e.hp>0&&e.decoy);
 /* improve20-r18b-nov3 #1: a Hall pattern's tell is the danger banner while it is up (scenes/hall-patterns.js hallTellUp); the boss's own warning waits */const hallCue=hallTellUp(w)?w.hallTellOn.text:null;if(hallCue)out.push({kind:'prompt',step:'danger',title:hallCue,/* improve20-r20h-nov4 #3: one short line on a phone */touchTitle:w.hallTellOn.touch||hallCue,y:60,alpha:1,hall:true});
 if(!hallCue&&(w.level.encounter?.readable||paced)){const z=w.tierFx?.current,move=w.enemies?.find(e=>e.hp>0&&(e.brain?.mode==='tele'||/* combatpolish-oct28: a Normal boss's dive (normal pacing, m3 Scorchtail) kept its warning only through the tell, so it faded before the circle showed; it now stays until the boss surfaces, as it already did on Heroic */(w.level.encounter?.emberkeep||w.level.encounter?.veilmoor||e.normalPacing)&&e.brain?.mode==='act'&&e.brain.atk?.kind==='vanish'&&e.brain.t<(e.brain.atk.out||.3)+e.brain.atk.appear)&&e.brain.atk?.label)?.brain.atk;const cue=z?.cue||move?.label||veilFx?.a.label||(links?(w.level.id==='v4'?'Break both linked pylons!':'Break the two linked lights!'):null)||(copies?'Hit REAL. Dotted copies pop in one hit.':null)||(w.level.encounter?.emberkeep&&w.dark?'Ash storm! Watch the glowing ground!':w.level.encounter?.veilmoor&&w.dark?'Ink! Watch the glowing ground!':null);if(cue)out.push({kind:'prompt',step:'danger',title:cue,y:60,alpha:1});}
 /* playtest ch2: the move warning drew straight over "DEFEAT THE BACKUP FIRST" (both at the top centre, placed separately); the rally banner steps aside while a warning is up and comes back after it */
 if(out.some(b=>b.step==='danger'))for(let i=out.length-1;i>=0;i--)if(out[i].kind==='wave')out.splice(i,1);
 /* low health: name the potion key once per run until one is drunk (playtest 14 Oct: the control strip never mentions it,
    and new players fell to the first bosses with potions still in the bag) */
 /* oct24-balance2: it covered a hazard's CLEAR label (late playtest 07), so it waits while a hazard warning is up: step to safety first */
 /* oct24-progress: never over the Thorn King's cutscene captions (a low hero now keeps that health into phase two) */
 const pl=w.player;
 /* hook-oct27: the prologue (a new player's first fight) says it sooner and plainly: the first time health falls under 40%, a short
    "press Q to drink" for 6 s (a kid who mashed through the first fight never knew the key). The regular reminder below is for levels. */
 if(w.level.tutorial){const pk=String(w.save?.settings?.bindings?.potion||'q').toUpperCase(),now=w.run?.time||0;
  if(!w.potHint&&w.run&&!w.run.drank&&(f==='wave'||f==='boss')&&pl?.hp>0&&pl.hp<pl.maxHp*.4&&potionCount(w.save||{},pl)>0)w.potHint={at:now};
  if(w.potHint&&!w.run?.drank&&now-w.potHint.at<6&&pl?.hp>0&&!w.cinematicTarget)out.push({kind:'prompt',step:'potion',title:`PRESS ${pk} TO DRINK A POTION`,touchTitle:'TAP THE POTION TO DRINK',y:potY(214),alpha:Math.min(1,(6-(now-w.potHint.at))/.4)});}
 else if(w.run&&!w.run.drank&&!w.tierFx?.current&&!w.cinematicTarget&&!out.some(b=>b.step==='danger')&&(f==='wave'||f==='boss')&&pl?.hp>0&&pl.hp<pl.maxHp*.35&&potionCount(w.save||{},pl)>0){const pk=String(w.save?.settings?.bindings?.potion||'q').toUpperCase();out.push({kind:'prompt',step:'potion',title:`LOW HEALTH! PRESS ${pk} FOR A POTION`,touchTitle:'LOW HEALTH! TAP THE POTION',y:potY(214),alpha:1});}
 /* Dialogue yields to actionable warnings; its reading time pauses rather than expiring underneath them. */
 const wood=w.level.encounter?.readable||paced,danger=wood&&(veilFx||links||copies||(w.level.encounter?.emberkeep||w.level.encounter?.veilmoor)&&w.dark||w.tierFx?.current||w.enemies?.some(e=>e.hp>0&&['tele','act'].includes(e.brain?.mode))),q=w.quote;
 if(wood&&q&&w.run){const dt=Math.max(0,w.run.time-(q.seenAt??w.run.time));if(danger)q.at+=dt;q.seenAt=w.run.time;}
 /* ready2fix-oct30 #8: on a phone (m-mode) the quote is a short wide card (one or two lines, high in the frame) for 2 s instead of a
    tall four-line box over the joystick side for 2.5 s */
 const phoneQ=!!globalThis.document?.documentElement?.classList?.contains('m-mode'),qFor=phoneQ?2:2.5;
 /* improve20-f-nov1 #13: the potion prompt is the one tip on screen (the boss quote waits; at 1280x720 it covered the prompt's second line) */if(!step&&!danger&&q&&w.run&&w.run.time-q.at<qFor&&!out.some(b=>b.step==='potion'))out.push({kind:'quote',title:`“${q.text}”`,y:wood?60:44,alpha:Math.min(1,(qFor-(w.run.time-q.at))/.3),prio:2,dur:qFor,...(phoneQ?{phone:true}:{})});
 /* Early Normal bosses also speak while the thumb arc is up. */
 if(wood||out.some(b=>b.kind==='quote'||b.step==='potion')){const obstacles=(w.enemies||[]).filter(e=>e.hp>0).map(e=>({left:e.x-(w.camX||0)-48,right:e.x-(w.camX||0)+48,top:enemyTop(e)-(w.camTop||0)-12,bottom:e.y-(w.camTop||0)+6}));for(const r of [...(w.tierFx?.current?.islands||[w.tierFx?.current?.safe]),...(w.enemies||[]).filter(e=>e.hp>0&&['tele','act'].includes(e.brain?.mode)).map(e=>e.brain.safeLane)].filter(Boolean)){/* the CLEAR word, where it is drawn (tier-fx.js clearLabelAt) */const at=clearLabelAt(w,r),x=at.x-(w.camX||0),y=at.y-3-(w.camTop||0);obstacles.push({left:x-20,right:x+20,top:y-8,bottom:y+8});}if(pl)obstacles.push({left:pl.x-(w.camX||0)-22,right:pl.x-(w.camX||0)+22,top:pl.y-(w.camTop||0)-54-(pl.z||0),bottom:pl.y-(w.camTop||0)+6});if(STAGE.camH>=240)obstacles.push({left:0,right:STAGE.camW,top:(w.layout?.floorTop??144)-(w.camTop||0),bottom:STAGE.camH});for(const b of out)if(b.kind==='quote'||b.step==='danger'||b.step==='potion'){b.obstacles=obstacles;if(b.step==='danger'&&pl)b.hardObstacles=[{left:pl.x-(w.camX||0)-22,right:pl.x-(w.camX||0)+22,top:pl.y-(w.camTop||0)-54-(pl.z||0),bottom:pl.y-(w.camTop||0)+6}];if(b.step==='danger')b.teleRects=teleRects(w);b.maxWidth=260;b.compact=true;b.mobileAvoid=true;if(b.phone&&b.kind==='quote'){b.maxWidth=STAGE.camW-16;b.limits=[300,240];b.y=30;}/* improve20-f-nov1 #13: the phone potion prompt is one line at the top centre under the boss bar: clear of the HUD only, never wrapped round a foe */if(b.step==='potion'){if(phoneQ){b.obstacles=[];b.compact=false;}b.maxWidth=STAGE.camW-8;}}}

 /* GO → is the in-level next-step marker: up whenever the way on is to walk right */
 /* improve20-r10b-nov2 #14 (kid sims nov2: Mia, Theo and Zoe stood in empty lanes between waves; the next wave waits for the hero to walk
    to its trigger, with no timer): after EMPTY_LANE_CUE s with no foe up, GO stops blinking and three code-drawn chevrons pulse just
    ahead of the hero, pointing the way on (a 'go' banner, so toasts never wait for it) */
 /* improve23-r23s-nov4 #3 */const sr=sealViewRect(w,STAGE.camW||480);/* improve24-r24n-nov5 #6: GO and the chevrons wait while a seal cache's words are up */const cacheUp=cacheWordsUp(w);
 const lull=f==='go'?k-BEATS.clear:f==='walk'&&!step?k:-1,lane=lull>=EMPTY_LANE_CUE&&!!pl&&!w.enemies?.some?.(e=>e.hp>0&&!e.ally)&&!!w.nextArena?.();
 if(!cacheUp&&((f==='go'&&k>=BEATS.clear)||(f==='walk'&&k>1.2&&!step))&&(Math.floor(k*2.5)%2===0||!w.motion||lane))out.push({kind:'go',title:'GO →',x:452+(w.motion?R(Math.sin(k*6)*3):0),y:134,alpha:1,/* improve23-r23s-nov4 #3: the arrow's lane keeps clear of a seal's pocket */...(sr?{avoid:[sr]}:{})});
 if(lane&&!cacheUp)out.push((b=>/* improve23-r23s-nov4 #3: the chevrons (3 x 22 units wide) step below a seal they would cross */sr&&b.x<sr.right&&b.x+66>sr.left&&b.y-8<sr.bottom&&b.y+8>sr.top?{...b,y:R(sr.bottom+10)}:b)({kind:'go',way:true,title:'→',x:Math.max(8,Math.min(STAGE.camW-72,R(pl.x-(w.camX||0)+26))),y:R(pl.y-(w.camTop||0)-30-(pl.z||0)),phase:w.motion===false?null:k,alpha:1}));
 if(f==='bossintro'){const e=w.boss||w.enemies.find(x=>x.boss);if(e)out.push({kind:'boss',title:(w.level.bossName||e.name).toUpperCase(),sub:w.level.name.toUpperCase(),line:e.intro||'',
  slide:Math.min(1,Math.max(0,(k-.25)/.35)),open:Math.min(1,k/.3),alpha:1,enemy:e.key,hero:heroCardBox(w)});}
 /* a second life: the risen form's own name card, its title as the subtitle and its line under it */
 if(f==='rebirth'){const e=w.boss,rb=e?.rebirth,kk=k-REBIRTH.fall-.25;if(e&&rb&&kk>=0)out.push({kind:'boss',title:String(e.name).toUpperCase(),sub:String(rb.title||'SECOND LIFE').toUpperCase(),line:rb.line||'',
  slide:Math.min(1,Math.max(0,kk/.35)),open:Math.min(1,kk/.3),alpha:Math.min(1,(REBIRTH.card-k)/.3),enemy:e.key,hero:heroCardBox(w)});}
 if(f==='victory'&&!w.cinematicTarget)out.push({kind:'victory',title:'VICTORY',alpha:Math.min(1,k/.3)});
 /* kidfix-b-oct31: the first-cast moment's one line, "<ABILITY>!", through the banner queue (scenes/rune-fx.js) */
 if(w.firstCast&&w.run&&f!=='victory'){const t=(w.run.time??0)-w.firstCast.at;if(t>=0&&t<FIRST_BANNER)out.push({kind:'wave',title:`${String(w.firstCast.name).toUpperCase()}!`,y:54,alpha:Math.min(1,t/.12,(FIRST_BANNER-t)/.3),prio:3,dur:FIRST_BANNER});}
 /* improve20-a-oct31 #4: the first time Grubnak's guard goes up (scenes/boss-guard.js), the one line that says how to break it */
 if(w.guardCue&&w.run&&f==='boss'){const t=(w.run.time??0)-w.guardCue.at;if(t>=0&&t<GUARD.cue)out.push({kind:'wave',title:'LIBRARY POWERS BREAK GUARDS!',touchTitle:'ABILITY BUTTONS BREAK GUARDS!',y:54,alpha:Math.min(1,t/.15,(GUARD.cue-t)/.3),prio:3,dur:GUARD.cue});}
 return queueBanners(w,out);}
/* kidfix-a-oct31 (kid-appeal playtest shot 02: the boss quote, "CALLS FOR BACKUP!" and "DEFEAT THE GUARDS!" stacked at the prologue boss):
   the top-of-screen announcements (wave, cleared, quote: the banners with a prio) show ONE at a time. The one up keeps its own timing; one that
   arrives meanwhile waits, highest prio first (the boss's rally 3, its quote 2, wave and cleared 1), and when its turn comes it plays on the
   queue's clock for QUEUED_SHARE of its own time (total time stays close to before). One that has waited BANNER_STALE s is dropped. A sticky
   instruction ("DEFEAT THE BACKUP FIRST") shows only while nothing else is up, and a danger warning (which already hides them) pauses all.
   Pure over w.bannerQ; the same frame asked twice gives the same answer. */
/* improve20-r10b-nov2 #9 (kid sims nov2: "CALLS FOR BACKUP" drew over the potion prompt): one banner ends, BANNER_GAP s of nothing, then the
   next (stale after BANNER_STALE s of waiting, raised from 3 so the boss's quote still follows its 2 s rally call and the gap). The potion
   prompt is the one tip that matters most at low health: while it is up a top banner waits (a live one keeps its own clock underneath). */
export const EMPTY_LANE_CUE=6,BANNER_STALE=4,QUEUED_SHARE=.8,BANNER_GAP=1.2;
export function queueBanners(w,out){const now=w.run?.time??w.time??0,Q=w.bannerQ&&w.bannerQ.level===w.level?.id?w.bannerQ:(w.bannerQ={level:w.level?.id,cur:null,wait:[],seen:new Map()});
 const isA=b=>b.prio>0||b.sticky,cand=out.filter(b=>b.prio>0),sticky=out.filter(b=>b.sticky),id=b=>b.kind+':'+b.title,rest=out.filter(b=>!isA(b));
 if(now<(Q.now??-1)-1e-9){Q.cur=null;Q.wait=[];Q.seen.clear();Q.ended=null;}Q.now=now;
 for(const [k,t] of Q.seen)if(now-t>1&&!cand.some(b=>id(b)===k))Q.seen.delete(k);
 for(const b of cand.filter(b=>!Q.seen.has(id(b))).sort((x,y)=>y.prio-x.prio)){const k=id(b);if(!Q.cur&&!(now-(Q.ended??-1e9)<BANNER_GAP))Q.cur={id:k,start:now,live:true};else if(Q.cur?.id!==k&&!Q.wait.some(x=>x.id===k))Q.wait.push({id:k,b,first:now});}
 for(const b of cand)Q.seen.set(id(b),now);
 if(rest.some(b=>b.step==='danger'))return rest;
 const live=b=>cand.find(x=>id(x)===b);
 if(Q.cur){const c=Q.cur;if(c.live){const b=live(c.id);if(!b){Q.cur=null;Q.ended=now;}}else if(now-c.start>=c.dur){Q.cur=null;Q.ended=now;}}
 if(!Q.cur&&!(now-(Q.ended??-1e9)<BANNER_GAP)){Q.wait=Q.wait.filter(x=>now-x.first<=BANNER_STALE).sort((a,b)=>b.b.prio-a.b.prio||a.first-b.first);const n=Q.wait.shift();if(n){const b=live(n.id);Q.cur=b&&now-n.first<.05?{id:n.id,start:now,live:true}:{id:n.id,start:now,live:false,b:n.b,dur:(n.b.dur||2)*QUEUED_SHARE};}}
 const c=Q.cur;if(rest.some(b=>b.step==='potion'))return rest;/* improve20-r11b-nov2 #5 (R10B's watch: "DEFEAT THE BACKUP FIRST" came about 6.4 s in): an instruction for right now fills the gap and the wait
   instead of sitting behind them; it still shows only while no other top banner is up, so nothing stacks */
 if(!c)return [...rest,...sticky];
 if(c.live)return [...rest,live(c.id)];
 const a=now-c.start,b={...c.b,alpha:Math.max(0,Math.min(1,c.b.kind==='quote'?1:a/.2,(c.dur-a)/.3))};return [...rest,b];}
/* combatpolish-oct28: the ground a telegraph covers this frame, in camera pixels (the boss's markers, as scenes/tier-fx.js softMarker
   draws them: a box's band grows by sqrt 2, a circle is an ellipse of r by .55 r; plus a hazard waiting to land and a tier hazard's zone).
   On a phone the danger banner treats them as hard obstacles, so a warning never sits on the thing it warns about. */
/* improve20-r14b-nov3 #7 (audit11 #10, shot 28: the boss card's foot sat on the hero's hair at 1280x720): the hero's box in view units, with
   room for his head and a gap, for the desktop boss card to keep off (ui/stage-banners.js) */
export function heroCardBox(w){const p=w?.player;if(!p)return null;const x=p.x-(w.camX||0),y=p.y-(w.camTop||0)-(p.z||0);return {left:x-20,right:x+20,top:y-60,bottom:y+6};}
export function teleRects(w){const ox=w.camX||0,oy=w.camTop||0,out=[],add=(x0,x1,y0,y1)=>out.push({left:x0-ox-3,right:x1-ox+3,top:y0-oy-3,bottom:y1-oy+3}),mk=m=>{if(!m||m.hide)return;if(m.shape==='box'){const b=(m.band||8)*Math.SQRT2;add(Math.min(m.x0,m.x1),Math.max(m.x0,m.x1),m.y-b,m.y+b);}else if(m.r)add(m.x-m.r,m.x+m.r,m.y-m.r*.55,m.y+m.r*.55);};
 for(const e of w.enemies||[])if(e.hp>0&&['tele','act'].includes(e.brain?.mode)){for(const m of e.brain.markers||[])mk(m);for(const m of e.brain.decoys||[])mk(m);}
 for(const f of w.enemyFx||[])if(f.r&&f.x!=null&&(f.kind==='hazard'||f.t<0)&&!f.hit)mk({shape:'circle',x:f.x,y:f.y,r:f.r});
 for(const m of [w.tierFx?.current?.marker,...(w.tierFx?.current?.markers||[])])mk(m);
 return out;}
/* A centre-screen beat is up (or about to be): toasts wait. The GO arrow sits at the edge and does not count. */
export const bannerActive=w=>!!w?.level&&(['intro','bossintro','rebirth','victory'].includes(w.flow)||stageBanners(w).some(b=>b.step==='danger'||b.kind!=='go'&&b.kind!=='prompt'));
export function drawStageHud(c,w,t){if(!w.level)return;const f=w.flow,k=w.flowT||0;c.save();c.imageSmoothingEnabled=false;
 /* grading: fade in from black, the boss letterbox, fade out after the victory beat */
 /* v2:ui-mobile */const VW=STAGE.camW,VH=STAGE.camH;
 if(f==='intro'){c.globalAlpha=Math.max(0,1-k/BEATS.fade);c.fillStyle='#0d0906';c.fillRect(0,0,VW,VH);c.globalAlpha=1;}
 /* the second life: the world dims while the boss falls, a white flash as it rises, the letterbox stays shut until it fights */
 if(f==='rebirth'){const dim=k<REBIRTH.fall?Math.min(.5,k/REBIRTH.fall*.5):Math.max(0,.5-(k-REBIRTH.fall)*.8);c.fillStyle='#0d0906';c.globalAlpha=dim;c.fillRect(0,0,VW,VH);
  const fl=k>=REBIRTH.fall?Math.max(0,.85-(k-REBIRTH.fall)/.4):0;if(fl>0&&w.motion!==false){c.fillStyle='#fff6e0';c.globalAlpha=fl;c.fillRect(0,0,VW,VH);}c.globalAlpha=1;const bar=R(14*Math.min(1,k/.35));c.fillStyle='#0d0906';c.fillRect(0,0,VW,bar);c.fillRect(0,VH-bar,VW,bar);}
 if(f==='bossintro'||(f==='boss'&&k<.5)){/* v2:ui -- 14 px bars: 26 cropped the tallest landmarks (war tent, willow) */const bar=R(14*(f==='bossintro'?Math.min(1,k/.35):Math.max(0,1-k/.5)));c.fillStyle='#0d0906';c.fillRect(0,0,VW,bar);c.fillRect(0,VH-bar,VW,bar);}
 /* kidfix-b-oct31: the first-cast moment's low white flash (none with Reduce motion) */{const fa=firstFlashAlpha(w);if(fa>0){c.fillStyle='#ffffff';c.globalAlpha=fa;c.fillRect(0,0,VW,VH);c.globalAlpha=1;}}
 for(const b of stageBanners(w))drawBanner(c,b);
 /* the Thorn King's fall (CINEMATIC_END) plays over the throne room, not over the fade to the result *//* oct24-endgame (playtest ch3 minor): nor after an epilogue, so its result sits over the arena it played in */if(f==='victory'&&!w.cinematicTarget&&!w.afterEpilogue){c.globalAlpha=Math.min(1,k/.3)*Math.max(0,(k-1.1)/.5);c.fillStyle='#0d0906';c.fillRect(0,0,VW,VH);c.globalAlpha=1;}
 c.restore();}
/* ---- minimap --------------------------------------------------------------------------------------------- */
const overviews=new Map();
function overviewOf(map,dir){if(!map?.overview||typeof Image==='undefined')return null;let im=overviews.get(map);if(!im){im=new Image();im.src=new URL(dir+map.overview,import.meta.url).href;overviews.set(map,im);}return im.complete&&im.naturalWidth?im:null;}
export function drawStageMap(canvas,w){const c=canvas.getContext('2d'),W=canvas.width,H=canvas.height;c.clearRect(0,0,W,H);c.imageSmoothingEnabled=false;
 const L=w.layout;if(!L)return;const ov=overviewOf(L.map,'../assets/biomes/levels/');
 if(ov){const k=Math.min(W/ov.width,H/ov.height),ox=R((W-ov.width*k)/2),oy=R((H-ov.height*k)/2),s=k*(L.map.overviewScale||1/8);c.drawImage(ov,ox,oy,R(ov.width*k),R(ov.height*k));
  c.strokeStyle='#f1e4c0aa';c.strokeRect(ox+R(w.camX*s)+.5,oy+R((w.camTop||0)*s)+.5,R(STAGE.camW*s),R(STAGE.camH*s));/* v2:ui-mobile */c.fillStyle='#f1e4c0';c.fillRect(ox+R(w.player.x*s)-1,oy+R(w.player.y*s)-1,3,3);/* friends2-nov5 #2: a seal the hero can break is marked in gold */{const z=w.aseal;if(z&&!z.broken&&w.save&&callsNow(w,z)){c.fillStyle='#ffd96b';const mx=ox+R(z.x*s),my=oy+R(z.cy*s);c.fillRect(mx-2,my-2,5,5);c.fillStyle='#18122a';c.fillRect(mx,my,1,1);}}return;}
 /* no overview yet: the run as markers -- arenas, the boss, you */
 const pad=12,y=R(H/2),sx=x=>pad+R(x/L.width*(W-pad*2));c.fillStyle='#3b2516';c.fillRect(pad,y-1,W-pad*2,3);c.fillStyle=GOLD;c.fillRect(pad,y,R(sx(w.player.x)-pad),1);
 (L.arenas||[]).forEach((a,i)=>{c.fillStyle=i<w.wave?GOLD:'#6b4528';c.fillRect(sx((a.x0+a.x1)/2)-3,y-3,7,7);});
 if(L.boss){c.fillStyle='#8a3a2a';c.fillRect(sx((L.boss.x0+L.boss.x1)/2)-5,y-5,11,11);}
 /* friends2-nov5 #2 */{const z=w.aseal;if(z&&callsNow(w,z)){c.fillStyle='#ffd96b';c.fillRect(sx(z.x)-3,y-6,7,5);}}c.fillStyle=PARCH;c.fillRect(sx(w.player.x)-1,y-1,3,3);}
