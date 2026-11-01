/* The hero card's "Show" view (improve20-c-oct31, item 17). One clean, screenshot-ready card at Home, Hero card, Show: the hero as worn
   and customised (sprite at 3x), the pet travelling along, level, best grades, trophies, stars and runes placed, in the PixelLab frame.
   Safety (pillar 6): nothing leaves the device; there is no share button, no network call, and the only personal text is the hero name
   the player typed. heroShowModel(save) is pure; the HTML is built from it. */
import {CLASSES,PETS} from '../game/data.js';
import {LEVELS,totalStars,maxStars} from '../game/levels.js';
import {betterGrade,gradeRank,gradeFile} from '../game/grade.js';
import {trophyCount,TROPHY_TOTAL} from '../game/trophies.js';
import {runesPlaced} from '../game/runes.js';
import {heroTitle} from '../game/titles.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function heroShowModel(s={}){const hero=CLASSES[s.hero]?s.hero:'warrior',c=CLASSES[hero],typed=String(s.heroNames?.[hero]??'').trim().slice(0,20);
 let best=null,top=0;for(const l of LEVELS.filter(l=>l.kind==='level')){const r=s.levels?.[l.id];for(const t of [r,r?.tiers?.heroic,r?.tiers?.legendary]){const g=t?.done?t.best?.grade:null;if(!g)continue;best=best?betterGrade(best,g):g;}
  if([r,r?.tiers?.heroic,r?.tiers?.legendary].some(t=>t?.done&&gradeRank(t.best?.grade)>=gradeRank('S')))top++;}
 const pet=PETS.find(p=>p.key===s.pet)||null;
 return {hero,name:typed||c.name,className:c.name,color:c.color,level:Math.max(1,s.level|0),pet:pet?{name:pet.name,sprite:pet.sprite}:null,best,top,
  trophies:trophyCount(s),trophyTotal:TROPHY_TOTAL,stars:totalStars(s),maxStars:maxStars(),runes:runesPlaced(s,hero),honour:heroTitle(s)||''};}
export function heroShowHTML(m){const stat=(label,value,img)=>`<div class="hshow-stat">${img?`<img src="${img}" alt="" width="32" height="32">`:''}<strong>${value}</strong><span>${label}</span></div>`;
 return `<div class="hero-show" style="--accent:${esc(m.color)}"><div class="hshow-card" aria-label="Your hero, ready to show"><div class="hshow-title">PIXELQUEST · THE THORN KINGDOM</div>
<div class="hshow-body"><div class="hshow-figure"><canvas id="hshow-hero" width="180" height="196" aria-hidden="true"></canvas>${m.pet?`<canvas id="hshow-pet" data-sprite="${esc(m.pet.sprite)}" width="72" height="56" aria-hidden="true"></canvas>`:''}</div>
<div class="hshow-info"><h2 class="hshow-name">${esc(m.name)}</h2><p class="hshow-class">Level ${m.level} ${esc(m.className)}</p>${m.honour?`<p class="hshow-honour">${esc(m.honour)}</p>`:''}${m.pet?`<p class="hshow-pet">Travels with ${esc(m.pet.name)}</p>`:''}
<div class="hshow-stats">${stat('Best grade',m.best?esc(m.best):'none yet',m.best?`ui/skin/run/${gradeFile(m.best)}.png`:'')}${stat('S grades',m.top,'')}${stat('Trophies',`${m.trophies}/${m.trophyTotal}`,'ui/skin/rewards/chest.png')}${stat('Stars',`${m.stars}/${m.maxStars}`,'ui/skin/star-gold.png')}${stat('Runes placed',m.runes,'')}</div></div></div></div>
<div class="hshow-actions"><button id="hshow-back">Back</button><span class="subtle">Take a screenshot to keep it. Nothing is uploaded.</span></div></div>`;}
