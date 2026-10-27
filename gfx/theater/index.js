/* Lesson Theater registry and the lesson-picture adapter.
   A lesson step shows a scene through the existing picture interface (gfx/lesson-art.js):
     pic: {t:'theater', scene:'bridge', part:'cross'}
   drawPic(ctx,pic,p,o) calls drawTheater: p is the step's progress 0..1, o.t (optional) the seconds since
   the step began, o.reduced the reduced-motion end state. A part plays at least as long as its narration
   clip (assets/theater/timing.json, written by tools/theater-clips.mjs); the beats stretch up to 1.6x to
   fill it, then the picture holds with its loops still running. */
import {drawScene,partRange,preloadScene,atlasesOf,validateScene,compile,VIEW_W,VIEW_H} from './engine.js';
import {loadSprite} from '../actors/sprites.js';
import bridge from './scenes/bridge.js';
import waterCycle from './scenes/water-cycle.js';
import foodChain from './scenes/food-chain.js';
import helpers from './scenes/helpers.js';
import garden from './scenes/garden.js';
import dayNight from './scenes/day-night.js';
import river from './scenes/river.js';
import habitat from './scenes/habitat.js';
import plurals from './scenes/plurals.js';
import coins from './scenes/coins.js';
import savings from './scenes/savings.js';
import needs from './scenes/needs.js';
import weather from './scenes/weather.js';
import records from './scenes/records.js';
import plantCycle from './scenes/plant-cycle.js';
import ratios from './scenes/ratios.js';

export const SCENES=Object.freeze({[bridge.id]:bridge,[waterCycle.id]:waterCycle,[foodChain.id]:foodChain,[helpers.id]:helpers,[garden.id]:garden,[dayNight.id]:dayNight,[river.id]:river,[habitat.id]:habitat,
 [plurals.id]:plurals,[coins.id]:coins,[savings.id]:savings,[needs.id]:needs,[weather.id]:weather,[records.id]:records,[plantCycle.id]:plantCycle,[ratios.id]:ratios});
export {validateScene,partRange,compile,atlasesOf,VIEW_W,VIEW_H};
export const MAX_STRETCH=1.6,TAIL=.8;
const TIMING={};
/* parts: {'scene/part': seconds of narration}. The game loads the baked table; the video tool passes real clip lengths. */
export function setTiming(parts){for(const [k,v] of Object.entries(parts||{}))TIMING[k]=typeof v==='number'?v:v?.secs;}
if(typeof window!=='undefined'&&typeof fetch==='function')
 fetch(new URL('../../assets/theater/timing.json',import.meta.url)).then(r=>r.ok?r.json():null).then(j=>setTiming(j?.parts)).catch(()=>{});

export function scene(spec){const s=SCENES[spec?.scene];if(!s)throw new Error(`theater: unknown scene ${spec?.scene}`);return s;}
const preloaded=new Set();
function preload(s){if(preloaded.has(s.id))return;preloaded.add(s.id);preloadScene(s);for(const a of atlasesOf(s))loadSprite(a);}
/* Seconds the step's picture runs: the part, or its narration plus a beat of rest, whichever is longer. */
export function theaterLength(spec){const s=scene(spec),[a,b]=partRange(s,spec.part),clip=TIMING[`${s.id}/${spec.part}`];return Math.max(b-a,clip?clip+TAIL:0);}
export function drawTheater(ctx,spec,p=1,o={}){const s=scene(spec);preload(s);
 const [a,b]=partRange(s,spec.part),nat=b-a,L=theaterLength(spec),k=Math.min(MAX_STRETCH,Math.max(1,L/(nat||1)));
 const u=o.reduced?L:o.t!=null?Math.max(0,o.t):Math.max(0,Math.min(1,p))*L;
 /* [a,b): the last moment of a part is just before the next part's first beat */
 const t=a+Math.min(nat-1e-3,u/k),wall=o.reduced?b:a+u;
 ctx.save();ctx.beginPath();ctx.rect(0,0,VIEW_W,VIEW_H);ctx.clip();drawScene(ctx,s,t,{wall,rate:k,solve:!!spec.solve});ctx.restore();}
export const describeTheater=spec=>{const s=scene(spec);return s.alt?.[spec.part]||s.alt?.default||s.title;};
/* The lesson player keeps drawing a theater picture after its part ends, so idle loops keep breathing. */
export const theaterLive=spec=>!!SCENES[spec?.scene];
