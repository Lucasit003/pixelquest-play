/* What each scene needs (v2:perf). Pure: game data in, asset items out; no DOM, so node tests and the manifest tool
   (tools/build-asset-manifest.mjs) run it too. core/loader.js loads a group through the game's own loaders, so
   nothing is fetched or decoded twice.
   Item kinds:
     {t:'sprite', id}   an atlas, assets/sprites/<id>.json + its image (gfx/actors/sprites.js loadSprite)
     {t:'biome', key}   a level stage, assets/biomes/<key>/ (gfx/biomes/index.js preloadBiome)
     {t:'img', url}     a plain image (url relative to dist/)
     {t:'mod', url}     a data module (dynamic import)
     {t:'audio', url}   a music track or sting, fetched into the cache only (core/audio.js decodes on play)
   Groups: title (key art), select (small previews and the selected hero), hub (the whole
   village), room:<key>, hero:<class>, worldmap, level:<id>, music:<scene>, theater. */
import {LEVELS,levelById,levelOpen,levelDone,levelFogged,CHAPTERS} from '../game/levels.js';
import {stageKey,waveKeys} from '../game/stage.js';
import {baseDef,ENEMY_TYPES_LOADED} from '../game/roster.js';
import {biomeKey} from '../gfx/biomes/defs.js';
import {ELEMENTS} from '../gfx/combat-fx.js';
import {ABILITIES} from '../game/abilities.js';
import VILLAGE from '../assets/town/oakhaven-approaches-oct13.js';
import ROOMS from '../assets/town/interiors-reviewed-oct13.js';
import {heroSpriteIds,allHeroSpriteIds} from '../gfx/actors/hero-directions.js';
import {petSpriteIds} from '../gfx/actors/pet-directions.js';
import {musicFile,musicKey} from './audio.js';

export const HEROES=['warrior','mage','rogue','ranger','paladin','berserker','summoner'];
/* combat-fx.js builds fx-<shape>-<element> ids from colours at draw time, so every level wants the set */
export const COMBAT_FX=ELEMENTS.flatMap(el=>['slash','hit','spark','bolt','col','aura'].map(k=>`fx-${k}-${el}`));
/* drawn by every scene with actors: two atlases and the two plain shadow images (hero-sprites.js, world.js) */
export const SHARED_SPRITES=['fx-shadow','fx-marker'];
export const SHARED_IMAGES=['assets/sprites/hero-shadow.png','assets/town/shadow.png'];
const TOWN='assets/town/';
const sceneImages=(D,dir)=>[...D.chunks.map(c=>c[4]),...D.pages.map(p=>p[0]),D.anim?.tiles,D.anim?.cellsImage,D.overview].filter(Boolean).map(f=>({t:'img',url:dir+f}));
/* The title's backdrop is the hub drawn around ui/title.js DUSK_AT (tests/perf-loader.test.js keeps the two in
   step): the chunks under that view, with a margin for the camera's clamp, and the sprite pages. The title waits
   for these alone; the rest of the village streams in behind the menu. */
export const TITLE_VIEW={x:1440,y:1000,w:480+256,h:270+256};
function backdrop(){const {x,y,w,h}=TITLE_VIEW,x0=x-w/2,x1=x+w/2,y0=y-h/2,y1=y+h/2;
 return [...VILLAGE.chunks.filter(([cx,cy,cw,ch])=>cx<x1&&cx+cw>x0&&cy<y1&&cy+ch>y0).map(c=>c[4]),...VILLAGE.pages.map(p=>p[0]),VILLAGE.anim?.tiles,VILLAGE.anim?.cellsImage].filter(Boolean).map(f=>({t:'img',url:TOWN+f}));}
const uniq=list=>{const seen=new Set();return list.filter(i=>{const k=i.t+':'+(i.id||i.key||i.url);if(seen.has(k))return false;seen.add(k);return true;});};

/* Every sprite an enemy type can show: its own atlas, any fx-* sheet its definition names (projectiles, impacts,
   portals), and the full set of whatever it summons. */
export function enemySprites(key,seen=new Set()){if(seen.has(key))return [];seen.add(key);
 const d=baseDef(key),src=ENEMY_TYPES_LOADED()[d.standIn||key]||{},out=[];if(d.sprite)out.push(d.sprite);
 const walk=v=>{if(typeof v==='string'){if(/^fx-[a-z0-9-]+$/.test(v))out.push(v);}else if(Array.isArray(v))v.forEach(walk);else if(v&&typeof v==='object')for(const [k,x] of Object.entries(v)){walk(x);if(k==='key'&&v.kind==='summon'&&typeof x==='string')out.push(...enemySprites(x,seen));}};
 walk(src);return [...new Set(out)];}
/* The enemy keys a level can field: every wave, the boss's adds and the boss; an arena, its chapter's pool. */
export function levelEnemies(l){if(!l)return [];const keys=new Set();
 if(l.kind==='arena'){const ch=CHAPTERS.find(c=>c.id===l.chapter)||{};for(const k of [...(ch.pool||[]),...(ch.elites||[])])keys.add(k);}
 for(const w of l.waves||[])for(const k of waveKeys(w))keys.add(k);
 for(const k of l.bossAdds||[])keys.add(typeof k==='string'?k:k.type);if(l.boss)keys.add(l.boss);
 return [...keys];}
export const levelBiome=l=>biomeKey(stageKey(l));
export const levelInfo=id=>levelById(id)||null;
/* Totems and traps still draw from the pre-v2 env sheets (gfx/assets.js drawAsset 'props'): only a loadout that
   can place one needs those 4.5 MB. */
/* Atlases the loader may let go of between scenes: enemies (and what they throw) and the other classes' heroes.
   Effects shared by every fight, lesson sprites and theater actors are never released. */
let RELEASABLE=null;
export function releasable(){if(RELEASABLE)return RELEASABLE;const keep=new Set([...SHARED_SPRITES,...COMBAT_FX]);
 RELEASABLE=new Set([...LEVELS.flatMap(l=>levelEnemies(l).flatMap(k=>enemySprites(k))),...HEROES.flatMap(allHeroSpriteIds)].filter(id=>!keep.has(id)));return RELEASABLE;}

export function group(name,{hero='warrior',started=true}={}){const [kind,arg]=String(name).split(/:(.*)/);
 if(kind==='hero')return heroSpriteIds(arg).map(id=>({t:'sprite',id}));
 if(kind==='pet')return arg?petSpriteIds({key:arg}).map(id=>({t:'sprite',id})):[];
 if(kind==='room'){const D=ROOMS[arg];return D?sceneImages(D,TOWN):[];}
 if(kind==='hub')return uniq([...sceneImages(VILLAGE,TOWN),{t:'img',url:TOWN+'fx.webp'},{t:'img',url:'ui/skin/packicons3/town-markers.png'},{t:'img',url:TOWN+'shadow.png'},
  /* a new game wakes at Home (scenes/town.js beatDue('new-game')) */...(started?[]:group('room:home'))]);
 /* The title uses key art; class selection streams small previews and only its selected hero. */
 if(kind==='title')return [{t:'img',url:'ui/skin/keyart.webp'}];
 if(kind==='select')return [...group('hero:'+hero),...HEROES.map(h=>({t:'img',url:`ui/skin/heroes/${h}-turn.png`}))];
 if(kind==='worldmap')return [{t:'mod',url:'assets/worldmap/elderwood.js'},{t:'img',url:'assets/worldmap/ui-oct25.png'}];
 if(kind==='level'){const l=levelById(arg);if(!l||(l.kind!=='level'&&l.kind!=='arena'))return [];
  return uniq([{t:'biome',key:levelBiome(l)},...group('hero:'+hero),...SHARED_SPRITES.map(id=>({t:'sprite',id})),...SHARED_IMAGES.map(url=>({t:'img',url})),
   ...levelEnemies(l).flatMap(k=>enemySprites(k)).map(id=>({t:'sprite',id})),...COMBAT_FX.map(id=>({t:'sprite',id}))]);}
 /* the file the current soundtrack really plays for that key (prune-oct26: was audio/<key>.mp3, which named tracks no soundtrack plays) */
 if(kind==='music')return [{t:'audio',url:'audio/'+musicFile(musicKey(arg==='level'?'forest':arg))}];
 if(kind==='theater')return [{t:'img',url:'assets/theater/ui.png'},{t:'img',url:'assets/theater/lake.webp'},{t:'img',url:'assets/theater/lake-front.webp'},{t:'img',url:'assets/theater/bridge.webp'},{t:'img',url:'assets/theater/bridge-front.webp'}];
 return [];}

/* The level a player is most likely to start next: the prologue until it is won, else the first open, unfogged,
   unbeaten level in map order (else the last one played). */
export function nextLevel(save,after=null){
 if(!levelDone(save,'prologue')&&levelById('prologue'))return 'prologue';
 const playable=LEVELS.filter(l=>(l.kind==='level'||l.kind==='arena')&&l.id!=='prologue'&&!levelFogged(l));
 if(after){const n=playable.find(l=>l.requires?.includes(after)&&!levelDone(save,l.id));if(n)return n.id;}
 return (playable.find(l=>levelOpen(save,l.id)&&!levelDone(save,l.id))||playable.find(l=>levelOpen(save,l.id)))?.id||null;}
