// Level stage geometry (contract: docs/GAME_V2_PLAN.md §Stage and §Art rethink). Castle Crashers shape: a
// level is a short horizontal belt-scroller. x runs left to right across the stage; y is depth inside the
// walkable floor band (floorTop = far edge, floorBottom = near edge); actors are drawn feet-anchored and
// depth-sorted by y. Levels agent owns this file; the biomes agent bakes the maps it reads.
//
// Rendering (docs/STYLE_GUIDE.md rules 1-2): the stage view is 480x270 world units drawn at exactly 1x onto
// the 480x270 canvas, the same whole-number rule as the Oakhaven hub. One world unit = one art pixel = one
// screen pixel. The camera and actors sit on whole units.
//
// ---- Per-level geometry comes from the level's baked Tiled map (8 Oct, Rule 0) ------------------------------
// The biomes agent authors every level as a Tiled map (art/tiled/levels/<biome>.tmx) and bakes it twice:
//   dist/assets/biomes/<biome>/map.js   the art, drawn by gfx/biomes/index.js drawStage/drawStageForeground
//   dist/game/stage-maps.js             the geometry, STAGE_MAPS[biome] = {w,h,width,band:[top,bottom],
//                                       collision:{cell,w,h,bits}, spawn:[x,y], arena:[x0,x1] (the boss arena),
//                                       secrets:[{x,y,loot,name}]}; stageBlocked(level,x,y) reads the grid.
// levelGeometry(level) turns that into what the World uses: the stage width and band, blocking cells, the hero's
// start, the boss arena from the map, the wave arenas spread evenly between the intro walk and the boss arena,
// and the secrets (loot 'gold' | 'gold:40' | 'potion' | 'potion:2', paid once per level). A level whose biome has
// no baked geometry (e.g. the prologue's forest-gate until it is baked) uses the computed layout below; its art
// still comes from drawStage, which falls back to a baked map of the same family -- nothing is ever code-drawn.
//
// Drawing contract (gfx/world.js calls these; the biomes agent implements them):
//   drawStage(c,{level,biome,camX,camTop,width,height,t,motion})            before actors
//   drawStageForeground(c,{level,biome,camX,camTop,width,height,t,motion})  after actors, with the stage's grade
// Both get the camera transform already applied (scale 1, integer translate): draw in world units.
/* v2:ui-mobile -- viewW/viewH are the GAMEPLAY view (arena widths, spawns); camW/camH are the rendered camera,
   which phones shrink (setView) so the world fills the screen at 2x without cropping. Desktop: both 480x270. */
export const STAGE={height:270,floorTop:140,floorBottom:236,viewW:480,viewH:270,camW:480,camH:270,zoom:1,camTop:0,segment:480,
 /* walking room before the first arena, and the default walk between arenas (x level.gap) */
 intro:200,gap:160,
 /* how far into an arena the player walks before the camera locks and the wave arrives */
 trigger:90,
 /* the bottom 34 px of the canvas sit under the HUD hotbar: the floor band is framed above it */
 hudBottom:34};
/* Stage beats, in seconds: the fade in, the boss walking on under its name card, the hold after a boss
   falls, the WAVE CLEARED beat before GO appears, and the breather between arena waves. */
export const BEATS={fade:.7,bossIntro:2.4,victory:1.6,clear:.6,arenaBreak:1.4};
/* A boss's second life, in seconds of the 'rebirth' flow (combat.js rebirth/reform): it falls until `fall`, rises changed
   under its new name card, and fights again at `card`. */
export const REBIRTH={fall:1.6,card:4.4};
/* The vertical centre of the default view, for anything that needs it. */
STAGE.camY=STAGE.camTop+STAGE.viewH/2;
/* A wave is either a plain list of ENEMY_TYPES keys (one group, entering from the right) or
   {groups:[[keys],[keys]],side:'right'|'left'|'both'}: later groups arrive when the one before is down.
   An entry can be a key or {type,elite}: an elite is a boss type fought as a tougher regular. */
/* Every stage is at least two waves (owner, 8 Oct: waves, then walk on, then the boss). A stage written as a plain list
   plays as two waves: 3+ enemies split in half, a lone pair comes twice. {groups} stages say exactly what they mean. */
export const waveGroups=w=>{if(!Array.isArray(w))return w?.groups||[];if(w.length>=3){const h=Math.ceil(w.length/2);return[w.slice(0,h),w.slice(h)];}return[w,w];};
export const waveSide=w=>Array.isArray(w)?'right':(w?.side||'right');
export const waveKeys=w=>waveGroups(w).flat().map(e=>typeof e==='string'?e:e.type);
/* The computed layout, used when a level has no baked map: intro walk, one camera-width arena per wave joined
   by walking room, then the boss arena. Each arena locks the camera at [x0,x1] once the player passes
   `trigger`. An arena level is a single arena that never unlocks. */
export function stageLayout(level){
 const w=STAGE.viewW,gap=STAGE.gap*(level?.gap??1);
 if(level?.kind==='arena')return {width:w,arenas:[],boss:null,arena:{x0:0,x1:w,trigger:0},spawn:{x:w/2,y:190}};
 const arenas=[];let x=STAGE.intro;
 for(let i=0;i<(level?.waves?.length||0);i++){arenas.push({x0:x,x1:x+w,trigger:x+STAGE.trigger});x+=w+gap;}
 const boss=level?.boss?{x0:x,x1:x+w,trigger:x+STAGE.trigger}:null;
 return {width:Math.round(boss?boss.x1:Math.max(w,x-gap)),arenas,boss,spawn:{x:60,y:190}};}
/* Stage width in world units (the baked map's when there is one). */
export const stageWidth=level=>stageMap(stageKey(level)||'')?.width||stageLayout(level).width;
/* The visual family a level's own biome key belongs to: forest-bog -> forest. */
export const chapterBiome=key=>String(key||'forest').split('-')[0];
/* v2:biomes -- per-level geometry baked from the Tiled level maps (art/tiled/levels, tools/bake-biome-maps.mjs): width, walkable band, collision grid, spawn, boss arena and secrets. */
export {STAGE_MAPS,stageMap,stageBlocked} from './stage-maps.js';
import {stageMap,stageBlocked} from './stage-maps.js';

/* ---- level geometry from the baked maps ---------------------------------------------------------------------- */
/* Every pad can start: a level's art always comes from a baked map (its own, or its family's). Kept as a seam. */
/* The map a level plays on: its own biome, or `stage` while its own map is not baked yet (the prologue). */
export const stageKey=level=>level?.biome||level?.stage||null;
export const levelReady=level=>!!level&&(level.kind!=='level'||!!stageKey(level));
/* Wave arenas spaced evenly from the intro walk to the boss arena, so every walk between fights is the same length
   (Goblin Camp: about 6 s of road between its two waves and the boss). */
function spreadArenas(n,bossX0){const W=STAGE.viewW,step=Math.max(W+40,(bossX0-STAGE.intro)/Math.max(1,n));
 return Array.from({length:n},(_,i)=>{const x=Math.round(STAGE.intro+i*step);return {x0:x,x1:x+W,trigger:x+STAGE.trigger};});}
/* One arena per wave, but a wave may share the arena of the wave before it: an ambush always does (it hits right after
   the last group falls, from behind), and on a short map the latest waves double up until the arenas fit before the
   boss. Shared waves get the same arena object, and the World regroups there instead of unlocking. */
export function waveArenas(waves,bossX0){const n=waves?.length||0,W=STAGE.viewW,fit=Math.max(1,Math.floor((bossX0-STAGE.intro)/(W+40)));
 const share=waves.map((w,i)=>i>0&&!!w?.ambush);let distinct=n-share.filter(Boolean).length;
 for(let i=n-1;i>0&&distinct>fit;i--)if(!share[i]){share[i]=true;distinct--;}
 const spots=spreadArenas(distinct,bossX0),out=[];let k=-1;for(let i=0;i<n;i++){if(!share[i])k++;out.push(spots[Math.max(0,k)]);}return out;}
/* Everything the World needs about a level's ground: {width,height,floorTop,floorBottom,arenas,boss,arena,spawn,
   lanes,secrets,blocked(x,y),map}. From the baked geometry when the level's biome has it, else the computed layout. */
export function levelGeometry(level){
 const base=stageLayout(level),key=stageKey(level),sm=['level','arena'].includes(level?.kind)&&key?stageMap(key):null;
 const geo={...base,height:STAGE.height,floorTop:STAGE.floorTop,floorBottom:STAGE.floorBottom,lanes:[],secrets:[],blocked:()=>false,map:sm};
 if(!sm)return geo;
 geo.width=sm.width||sm.w;geo.height=Math.max(STAGE.viewH,sm.h||STAGE.viewH);
 if(sm.band){geo.floorTop=sm.band[0];geo.floorBottom=sm.band[1];}
 geo.blocked=(x,y)=>x>=0&&x<geo.width&&stageBlocked(key,x,y);
 if(sm.spawn)geo.spawn={x:sm.spawn[0],y:Math.max(geo.floorTop+4,Math.min(geo.floorBottom-2,sm.spawn[1]))};
 geo.secrets=(sm.secrets||[]).map(o=>({id:String(o.id??`${Math.round(o.x)},${Math.round(o.y)}`),x:o.x,y:Math.max(geo.floorTop+4,Math.min(geo.floorBottom-2,o.y)),loot:o.loot||'gold',name:o.name||'Secret'}));
 if(level.kind==='arena'){geo.arena={x0:sm.arena?.[0]??0,x1:sm.arena?.[1]??geo.width,trigger:0};return geo;}
 const W=STAGE.viewW,bx=sm.arena?sm.arena[0]:geo.width-W;
 geo.boss=level.boss?{x0:bx,x1:bx+W,trigger:bx+STAGE.trigger}:null;
 /* the biomes agent's boss mark: open floor two-thirds across the boss arena, clear of statues and steps */
 geo.bossMark=level.boss&&sm.bossMark?{x:sm.bossMark[0],y:Math.max(geo.floorTop+6,Math.min(geo.floorBottom-4,sm.bossMark[1]))}:null;
 geo.arenas=waveArenas(level.waves||[],level.boss?bx:Math.min(geo.width+STAGE.gap,STAGE.intro+(level.waves?.length||1)*(W+40)+STAGE.gap));
 return geo;}
/* The camera's top edge: a band that fits above the hotbar is framed once; a taller one follows the hero. */
/* v2:ui-mobile */export function setView(w=480,h=270){STAGE.camW=Math.max(64,Math.min(480,Math.round(w)));STAGE.camH=Math.max(64,Math.min(270,Math.round(h)));return {w:STAGE.camW,h:STAGE.camH};}
export function camTopFor(geo,y){const H=/* v2:ui-mobile */STAGE.camH,maxTop=Math.max(0,(geo?.height||H)-H),vis=H-(/* camface-oct28: phones (ui/mobile.js measurePads) */STAGE.padB??STAGE.hudBottom);if(!geo)return 0;
 const fixed=geo.floorBottom-geo.floorTop<=vis-20;if(!fixed)return Math.max(0,Math.min(maxTop,Math.round(y-vis/2)));
 /* tallfields-oct31: a fixed frame puts the band's near edge at the bottom of the visible strip. A taller band on a phone camera
    then leaves a hero at the far edge with his head (46 px) under the top HUD. Such a frame moves up by half that shortfall (head
    room wanted: 30 px), never so far that the near edge leaves the screen: both edges stay in view, the frame stays fixed (a frame
    that slid with the hero's depth stepped against the camface/campad pads when it rounded). Desktop views and 96-unit bands keep
    the fixed frame exactly (tests/campad-oct28 and camface-oct28 pin those). */
 let top=geo.floorBottom-vis;const room=geo.floorTop-46-top;if(geo.floorBottom-geo.floorTop>STAGE.floorBottom-STAGE.floorTop&&room<30)top-=Math.max(0,Math.min(top-(geo.floorBottom-H),Math.round((30-room)/2)));
 return Math.max(0,Math.min(maxTop,Math.round(top)));}
