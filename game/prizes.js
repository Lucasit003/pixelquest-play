/* Daily prizes (improve20-r7a-nov1 #8, audit6 #9: "the daily prize is a fern or a stool"). The day's adventure goal pays one keepsake a
   7-12-year-old wants, picked from the date alone (game/daily.js), never random, never bought:
   - a hero title (text on the HUD name plate, the pause panel and the hero card: "Slime Squasher");
   - a trail colour (a cosmetic effect behind the hero while running, drawn by code as an effect: gfx/hero-trail.js);
   - a hero-card backdrop (the seven PixelLab class stages, ui/skin/stages/<class>.png, the art lane S showed in the hero select);
   - a Home piece (the old prize, game/furniture.js, Showpieces excepted).
   Pillars 3 and 4: earned only by finishing the day's goal, no streaks, nothing counted across days, nothing lost by a missed day; a
   keepsake never changes a number in a fight or anything to do with learning (nothing here is read by combat, math.js or academics/).
   Save: s.prizes = {own:[key], title, trail, backdrop} -- additive within save v9, cleaned by core/save.js normalize() (cleanPrizes);
   keys are "title:<id>", "trail:<id>", "backdrop:<id>". The worn title may also be an earned title's id (game/titles.js) or 'none'. */
export const PRIZE_TITLES=Object.freeze([['slime-squasher','Slime Squasher'],['goblin-chaser','Goblin Chaser'],['bog-stomper','Bog Stomper'],['star-seeker','Star Seeker'],['secret-finder','Secret Finder'],['lantern-bearer','Lantern Bearer'],['brave-explorer','Brave Explorer'],['dragon-dreamer','Dragon Dreamer'],['mushroom-scout','Mushroom Scout'],['storm-chaser','Storm Chaser'],['coin-collector','Coin Collector'],['moon-wanderer','Moon Wanderer']]);
/* trail colours: [id, name, main colour, spark colour] */
export const PRIZE_TRAILS=Object.freeze([['ember','Ember trail','#ff8a3d','#ffd27a'],['frost','Frost trail','#8fdcff','#eafaff'],['leaf','Leaf trail','#7fdc5a','#d8ff9e'],['star','Starlight trail','#ffd95a','#fff6c4'],['rose','Rose trail','#ff7fbf','#ffd1ea'],['violet','Violet trail','#a984ff','#e6d8ff']]);
/* hero-card backdrops: [id, name, picture relative to dist/] (the class stages, PixelLab, 15 Oct) */
export const PRIZE_BACKDROPS=Object.freeze([['castle','Castle Gate backdrop','ui/skin/stages/warrior.png'],['crystal','Crystal Library backdrop','ui/skin/stages/mage.png'],['moonlit','Moonlit Alley backdrop','ui/skin/stages/rogue.png'],['forest','Green Forest backdrop','ui/skin/stages/ranger.png'],['chapel','Chapel Window backdrop','ui/skin/stages/paladin.png'],['mountain','Mountain Camp backdrop','ui/skin/stages/berserker.png'],['grove','Spirit Grove backdrop','ui/skin/stages/summoner.png']]);
/* improve20-r8a-nov1 #7 (audit7 d17): keepsakes for the big wins, earned (never in the daily pool: `earned:true`). Each chapter's first clear gives
   its backdrop, a scene cropped from that chapter's own world-map art (its finale's landmark); the ending gives the Champion trail.
   [id, name, picture, the level whose first Normal clear grants it] */
export const CHAPTER_BACKDROPS=Object.freeze([['thorn-keep','Thorn Keep backdrop','ui/skin/stages/chapter-elderwood.png','e8'],['molten-throne','Molten Throne backdrop','ui/skin/stages/chapter-emberkeep.png','m7'],['deep-below','The Deep Below backdrop','ui/skin/stages/chapter-veilmoor.png','v7']]);
export const ENDING_TRAIL=Object.freeze(['champion','Champion trail','#ffd34d','#ffffff','v7']);
export const TITLE_ART='ui/skin/rewards/scroll.png';
export const PRIZES=Object.freeze([
 ...PRIZE_TITLES.map(([id,name])=>Object.freeze({key:'title:'+id,kind:'title',id,name,img:TITLE_ART})),
 ...PRIZE_TRAILS.map(([id,name,color,spark])=>Object.freeze({key:'trail:'+id,kind:'trail',id,name,color,spark})),
 ...PRIZE_BACKDROPS.map(([id,name,img])=>Object.freeze({key:'backdrop:'+id,kind:'backdrop',id,name,img})),
 ...CHAPTER_BACKDROPS.map(([id,name,img,level])=>Object.freeze({key:'backdrop:'+id,kind:'backdrop',id,name,img,earned:true,level})),
 Object.freeze({key:'trail:'+ENDING_TRAIL[0],kind:'trail',id:ENDING_TRAIL[0],name:ENDING_TRAIL[1],color:ENDING_TRAIL[2],spark:ENDING_TRAIL[3],earned:true,level:ENDING_TRAIL[4]})]);
/* the keepsakes a first clear of `levelId` grants (chapter backdrops, the ending's trail) */
export const winKeepsakes=levelId=>PRIZES.filter(p=>p.earned&&p.level===levelId);
/* gives every big-win keepsake this save has earned (a level done on Normal); returns the newly given. normalize() back-fills with it. */
export function grantWinKeepsakes(s,done=id=>!!s?.levels?.[id]?.done){const out=[];for(const p of PRIZES)if(p.earned&&done(p.level)&&givePrize(s,p.key))out.push(p);return out;}
export const PRIZE=Object.freeze(Object.fromEntries(PRIZES.map(p=>[p.key,p])));
/* the order the day's kind is chosen from; 'decor' is a Home piece */
export const PRIZE_KINDS=Object.freeze(['title','trail','backdrop','decor']);
export const SLOTS=Object.freeze(['title','trail','backdrop']);
export const emptyPrizes=()=>({own:[],title:null,trail:null,backdrop:null});
export function cleanPrizes(v,earnedTitle=()=>false){const p=emptyPrizes();if(!v||typeof v!=='object'||Array.isArray(v))return p;
 p.own=Array.isArray(v.own)?[...new Set(v.own.filter(k=>typeof k==='string'&&PRIZE[k]))]:[];
 for(const k of SLOTS){const w=v[k];if(typeof w==='string'&&PRIZE[w]?.kind===k&&p.own.includes(w))p[k]=w;else if(k==='title'&&typeof w==='string'&&(w==='none'||earnedTitle(w)))p[k]=w;}
 return p;}
export const owns=(s,key)=>!!s?.prizes?.own?.includes(key);
/* gives a prize (once); returns true when it was new */
export function givePrize(s,key){if(!PRIZE[key])return false;s.prizes??=emptyPrizes();s.prizes.own??=[];if(s.prizes.own.includes(key))return false;s.prizes.own.push(key);return true;}
/* wears a keepsake (or null to take it off); a title may be an earned title id or 'none' */
export function wearPrize(s,slot,key,earnedTitle=()=>false){if(!SLOTS.includes(slot))return false;s.prizes??=emptyPrizes();
 if(key==null||key===''){s.prizes[slot]=null;return true;}
 if(PRIZE[key]?.kind===slot&&owns(s,key)){s.prizes[slot]=key;return true;}
 if(slot==='title'&&(key==='none'||earnedTitle(key))){s.prizes.title=key;return true;}return false;}
export const worn=(s,slot)=>{const k=s?.prizes?.[slot];return k&&PRIZE[k]&&owns(s,k)?PRIZE[k]:null;};
export const trailOf=s=>worn(s,'trail');
export const backdropOf=s=>worn(s,'backdrop');
/* "the title “Slime Squasher”", "a Frost trail", "the Castle Gate backdrop" */
export const prizeLabel=p=>p.kind==='title'?`the title “${p.name}”`:p.kind==='trail'?`a ${p.name}`:p.kind==='backdrop'?`the ${p.name}`:`a ${p.name} for your Home`;
/* where it is worn */
export const prizeWhere=p=>p.kind==='decor'?'Place it from Home → Decorate.':'Wear it from your Hero card (Home → Card).';
