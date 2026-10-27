/* The Run Draft (SKYBLOCK_DUNGEONS_PROGRESSION.md section 5.5): every run of a map level is seeded with a few changes so
   no two runs are quite the same, without new maps. Pure: the seed is the save's run counter, the level and the tier, so
   a draft is reproducible from the save (guardrail D6). Waves and the boss never change; only the extras do:
   - mini: one elite from the chapter's elite pool joins the last group of one wave (a modifier on Heroic and up).
   - active: which secret spots are live this run (3; a map's visible chests are always among them).
   - blessing: one in two runs, a one-run buff shrine near the start (never touches learning or XP).
   - mimic: Heroic and up, one run in eight (owner, 14 Oct): one hidden active spot is a Mimic that wakes with a warning.
   - echo: Legendary only, the extra wave also brings one or two earlier bosses of the chapter, fought as elites.
   - seal: one run in two, a Scholar's Seal stone stands in a walk (game/seal.js; lit only for a child who has studied).
   No gambling here: nothing is bought, rerolled or chosen from a box; the draft only sets up the run. */
import {MODS,MOD_KEYS,seedOf} from './tiers.js';
import {CHAPTERS,LEVELS} from './levels.js';
import {waveGroups} from './stage.js';
export const ACTIVE_SECRETS=3,MIMIC_ODDS=8,BLESSING_ODDS=2;
export const BLESSINGS={
 power:{key:'power',name:'Blessing of Power',text:'+10% damage this run.',color:'#ff8a5c',atk:1.1},
 life:{key:'life',name:'Blessing of Life',text:'+15% max health this run.',color:'#7fe07a',hp:1.15},
 wisdom:{key:'wisdom',name:'Blessing of Wisdom',text:'Abilities recharge 10% faster this run.',color:'#8fb8ff',cdr:.1},
 stone:{key:'stone',name:'Blessing of Stone',text:'+3 defence this run.',color:'#c9c2b0',def:3},
 time:{key:'time',name:'Blessing of Time',text:'+10% speed this run.',color:'#ffe066',speed:1.1}};
export const BLESSING_KEYS=Object.keys(BLESSINGS);
/* a small seeded generator (mulberry32) */
export function rng(seed){let a=seed>>>0;return ()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};}
const pick=(r,a)=>a[Math.floor(r()*a.length)%a.length];
/* Which levels get a draft: shown map levels on any tier. The prologue and Goblin Camp (gentle) only get the secrets. */
export const drafted=l=>!!l&&l.kind==='level'&&!l.hidden;
/* spots: [{id, chest}] -- chests are the map's visible secret chests and are always active. */
export function draftRun(level,tier='normal',runs=0,spots=[]){
 const out={seed:0,mini:null,active:[],blessing:null,mimic:null,echo:[],seal:false};if(!level)return out;
 const seed=seedOf(`${runs|0}:${level.id}:${tier}`),r=rng(seed);out.seed=seed;
 const chests=spots.filter(s=>s.chest).map(s=>s.id),hidden=spots.filter(s=>!s.chest).map(s=>s.id);
 const pool=[...hidden];while(chests.length+out.active.length<ACTIVE_SECRETS&&pool.length)out.active.push(pool.splice(Math.floor(r()*pool.length)%pool.length,1)[0]);
 out.active=[...chests,...out.active];
 if(!drafted(level)||level.gentle)return out;
 const ch=CHAPTERS.find(c=>c.id===level.chapter)||CHAPTERS[0],waves=level.waves||[];
 /* oct24-progress (playtest r3 F16): on Normal the mini-boss is never a boss the child has not reached yet (e3 drew e4's Minotaur,
    whose Bestiary page then opened a level early); harder tiers are played after the whole chapter, so they keep the pool */
 if(waves.length&&ch.elites?.length){const later=new Set(tier==='normal'?LEVELS.filter(o=>o.kind==='level'&&o.chapter===level.chapter&&o.tier>level.tier).flatMap(o=>[o.boss,o.duo]).filter(Boolean):[]),own=(level.mini?[level.mini]:ch.elites).filter(k=>k!==level.boss&&k!==level.duo),fair=own.filter(k=>!later.has(k));const type=pick(r,fair.length?fair:own.length?own:ch.elites);out.mini={wave:Math.floor(r()*waves.length)%waves.length,type,mod:tier==='normal'?null:pick(r,MOD_KEYS)};}
 if(r()<1/BLESSING_ODDS)out.blessing=pick(r,BLESSING_KEYS);else r();
 const hiddenActive=out.active.filter(id=>hidden.includes(id));
 if(tier!=='normal'&&hiddenActive.length&&r()<1/MIMIC_ODDS)out.mimic=pick(r,hiddenActive);
 if(tier==='legendary'){const earlier=LEVELS.filter(o=>o.kind==='level'&&!o.hidden&&o.chapter===level.chapter&&o.boss&&o.tier<level.tier&&o.boss!==level.boss).map(o=>o.boss);
  const uniq=[...new Set(earlier)];const n=Math.min(uniq.length,1+(r()<.5?1:0));for(let i=0;i<n;i++)out.echo.push(uniq.splice(Math.floor(r()*uniq.length)%uniq.length,1)[0]);}
 out.seal=rng(seed^0x5ea1)()<.5;
 return out;}
/* The level's waves with the draft's extras added (new arrays; the level's own objects are never changed). The mini-boss
   leads the last group of its wave; the echo bosses join the Legendary extra wave (tiers.js tierWaves). */
export function draftWaves(waves,d,bounded=false){if(!d||(!d.mini&&!d.echo?.length))return waves;
 const norm=w=>({...(Array.isArray(w)?{}:w),groups:waveGroups(w).map(g=>g.map(e=>typeof e==='string'?e:{...e}))});
 const out=waves.map(norm);
 if(d.mini&&out[d.mini.wave]){const gs=out[d.mini.wave].groups;if(gs.length){const g=bounded?(gs.find(g=>g.some(e=>e.mod||e.elite))||gs[gs.length-1]):gs[gs.length-1],e={type:d.mini.type,elite:true,...(d.mini.mod?{mod:d.mini.mod}:{}),mini:true};if(bounded){const i=g.findIndex(e=>e.mod||e.elite);g.splice(Math.max(0,i),1,e);}else g.unshift(e);}}
 if(d.echo?.length){const x=out.findIndex(w=>w.extra);if(x>=0){const gs=out[x].groups;const g=gs[gs.length-1],es=d.echo.slice(0,bounded?2:Infinity).map(type=>({type,elite:true,echo:true}));if(bounded)g.splice(0,Math.min(g.length,es.length),...es);else g.unshift(...es);}}
 return out;}
/* What the start-of-run banner says ("This run: Swift Minotaur mini-boss · Blessing of Life shrine"). */
/* oct25-phone2: `short` (phones) drops the "This visit:" lead-in, so the line fits one row under the fight */
export function draftBanner(d,nameOf=k=>k,short=false){if(!d)return '';const bits=[];
 /* "Shielded Minotaur mini-boss", never "Shielded The Minotaur" (a boss's own name keeps its article only when it stands alone) */
 if(d.mini){const n=String(nameOf(d.mini.type));bits.push(`${d.mini.mod?MODS[d.mini.mod].label+' '+n.replace(/^The /,''):n} mini-boss`);}
 if(d.blessing)bits.push(`${BLESSINGS[d.blessing].name} shrine`);
 if(d.echo?.length)bits.push(`Echoes of ${d.echo.map(nameOf).join(' and ')}`);
 return bits.length?`${short?'':'This visit: '}${bits.join(' · ')}`:'';}

/* Large mini-bosses do not get recursive pressure or indefinite healing; the banner uses this same compatible draft. */
export function compatibleDraft(d){return {...d,mini:d.mini?{...d.mini,mod:d.mini.mod&&!['shielded','swift','enraged'].includes(d.mini.mod)?'shielded':d.mini.mod}:null,echo:(d.echo||[]).slice(0,2)};}
