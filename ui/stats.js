/* Stats screen. The world map's "Stats" button calls openStats(save). Read-only: it never writes
   the save. save.levels arrives with save v5 (levels agent); a v4 save without it shows the old
   contracts instead, and every field is optional so a fresh or partial save cannot throw. */
import {CLASSES,SUBJECTS,WEAPONS,PETS,CONTRACTS,armorName} from '../game/data.js';
import {mastery,abilityMastery,xpFor,unlocked} from '../game/math.js';
import {asleep} from '../academics/awakening.js';
import {ABILITIES} from '../game/abilities.js';
import {LEVELS,CHAPTERS} from '../game/levels.js';
import {portrait} from '../gfx/world.js';
import {wornOf,ITEM,RARITIES} from '../game/gear.js';
import {icon,gearImgIcon,hasIcon,SUBJECT_ICON,WEAPON_ICON} from './icons.js';
import {openSheet,sheetHeader} from './sheet.js';
/* exploit7-oct29: the potions chip counts the whole bag (both kinds, game/potions.js), not only healing potions */
import {bagCount} from '../game/potions.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const title=k=>String(k||'').split(/[-_]/).filter(Boolean).map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
const num=(v,d=0)=>Number.isFinite(Number(v))?Number(v):d;
const safe=(f,d)=>{try{const v=f();return v===undefined||Number.isNaN(v)?d:v;}catch{return d;}};

export function statsModel(save={}){
 const hero=CLASSES[save.hero]?save.hero:'warrior',c=CLASSES[hero],level=Math.max(1,num(save.level,1)),xp=num(save.xp),need=safe(()=>xpFor(level),100);
 /* gear (save v7): the worn weapon and chest; tier is the shop tier, or the item's rarity step for boss gear. img (packicons3-oct25):
    the worn item's own PixelLab icon in ui/skin/gear, or the class's tier-0 shop picture, in place of the pack's tier cells */
 const gw=safe(()=>wornOf(save,hero),{}),wi=ITEM[gw.weapon],ci=ITEM[gw.chest],tierOf=it=>it?(it.shopTier??Math.min(3,Math.max(0,RARITIES.indexOf(it.rarity)-1))):0,wt=tierOf(wi),at=tierOf(ci);
 const subjects=Object.entries(SUBJECTS).map(([id,v])=>({id,name:v.name,color:v.color,mastery:safe(()=>mastery(save,id),0),ability:safe(()=>abilityMastery(save,id),0)}));
 const levels=save.levels&&typeof save.levels==='object'?save.levels:null;
 const playable=LEVELS.filter(l=>l.kind==='level'&&!l.hidden);
 const done=id=>!!levels?.[id]?.done;
 const chapters=CHAPTERS.map(ch=>({id:ch.id,name:ch.name,levels:playable.filter(l=>l.chapter===ch.id).map(l=>({id:l.id,name:l.name,done:done(l.id),boss:l.boss,best:levels?.[l.id]?.best??levels?.[l.id]?.stars??null}))}));
 const bosses=playable.filter(l=>l.boss&&done(l.id)).map(l=>({id:l.boss,name:title(l.boss),where:l.name}));
 /* v4 saves: the three contracts, and the Thorn King once the last one is cleared. */
 const cleared=Array.isArray(save.cleared)?save.cleared.filter(i=>CONTRACTS[i]):[];
 if(!levels&&cleared.includes(2)&&!bosses.some(b=>b.id==='thorn-king'))bosses.push({id:'thorn-king',name:'The Thorn King',where:CONTRACTS[2].name});
 /* uiicons-oct25 review: count only kept ids that are in the total (gated abilities of any class); a kept list carried from an older
    build, or an id since renamed or made free, never reads "56 of 49" */
 const gated=new Set(Object.values(ABILITIES).flat().filter(a=>a.gate>0).map(a=>a.id)),kept=Array.isArray(save.kept)?new Set(save.kept.filter(id=>gated.has(id))).size:0,total=gated.size;
 /* polish3-oct29 (exploit7 finding): the chip said "5 of 49 abilities" (every class) while the hero card said "3 of 8". It now counts
    this hero's eight the way the hero card does (learned and awake); the all-heroes count stays in the model as abilities.all */
 const own=ABILITIES[hero]||[],on=own.filter(a=>{try{return unlocked(save,a)&&!asleep(save,a);}catch{return false;}}).length;
 const lessons=save.lessons&&typeof save.lessons==='object'?Object.values(save.lessons):[];
 /* Bestiary: save.bestiary when the levels agent writes it ({id:entry} or [ids]); until then, what the
    cleared levels' waves and bosses imply. The total is every enemy and boss in the level graph. */
 const all=new Set(playable.flatMap(l=>[...(l.waves||[]).flat(),l.boss].filter(Boolean)));
 const seen=save.bestiary?new Set(Array.isArray(save.bestiary)?save.bestiary:Object.keys(save.bestiary)):new Set(playable.filter(l=>done(l.id)).flatMap(l=>[...(l.waves||[]).flat(),l.boss].filter(Boolean)));
 return {hero,name:c.name,color:c.color,level,xp,need,gold:num(save.gold),potions:bagCount(save),
  weapon:{name:wi?.name||WEAPONS[c.weapon]?.[0]||'—',tier:wt,icon:hasIcon(`${c.weapon}-${wt+1}`)?`${c.weapon}-${wt+1}`:WEAPON_ICON[c.weapon]||'sword',img:wi?.icon||`${c.weapon||'sword'}-0`},armor:{name:ci?.name||'No chest armour',tier:at,icon:`armor-${at+1}`,img:ci?.icon||`armor-${hero}-0`},
  pet:PETS.find(p=>p.key===save.pet)?.name||'—',subjects,chapters,hasLevels:!!levels,cleared:cleared.map(i=>CONTRACTS[i].name),
  levelsDone:playable.filter(l=>done(l.id)).length,levelsTotal:playable.length,bosses,abilities:{on,total:own.length,all:{kept,total}},
  lessonsDone:lessons.filter(r=>r&&r.done).length,topicsMastered:lessons.filter(r=>r&&num(r.pts)>0).length,
  bestiary:{seen:[...seen].filter(k=>all.has(k)||save.bestiary).length,total:all.size}};
}
const roman=n=>['I','II','III','IV'][n]||'I';
const bar=(pct,cls='')=>`<div class="meter ${cls}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(pct)}"><i style="width:${Math.max(0,Math.min(100,pct))}%"></i></div>`;
export function statsHTML(m){
 const subj=m.subjects.map(s=>`<li style="--accent:${s.color}">${icon(SUBJECT_ICON[s.id]||'book-open',{size:32})}<div><span class="row"><strong>${esc(s.name)}</strong><b>${s.ability.toFixed(1)}%</b></span>${bar(s.ability)}${/* v2:edu playtest S2-12: show the number the ability gates use, lessons included */s.ability-s.mastery>.05?`<small>includes your lessons</small>`:''}</div></li>`).join('');
 const lv=m.hasLevels?m.chapters.map(ch=>`<div class="stat-chapter"><h4>${esc(ch.name)} <span>${ch.levels.filter(l=>l.done).length} / ${ch.levels.length}</span></h4><ol>${ch.levels.map(l=>`<li class="${l.done?'done':''}" title="${esc(l.name)}"><span class="pip-mark" aria-hidden="true"></span>${esc(l.name)}${l.done?'<span class="sr">, cleared</span>':''}</li>`).join('')}</ol></div>`).join('')
  :`<p class="subtle">${m.cleared.length?`Contracts cleared: ${m.cleared.map(esc).join(', ')}.`:'No levels cleared yet. Pick a pad on the world map to begin.'}</p>`;
 const boss=m.bosses.length?`<ul class="boss-list">${m.bosses.map(b=>`<li>${icon('swords',{size:32})}<span><strong>${esc(b.name)}</strong><small>${esc(b.where)}</small></span></li>`).join('')}</ul>`:'<p class="subtle">No bosses defeated yet.</p>';
 return `<div class="stats">
<section class="stat-hero" style="--accent:${m.color}"><div class="portrait-frame"><canvas data-stats-portrait width="160" height="180" aria-hidden="true"></canvas></div>
<div class="stat-hero-main"><h3>${esc(m.name)}</h3><span class="lvl">Level ${m.level}</span>${bar(m.xp/Math.max(1,m.need)*100,'xp')}<small>${m.xp} / ${m.need} XP to level ${m.level+1}</small>
<ul class="stat-chips"><li>${icon('coin',{size:32})}<b>${m.gold}</b><span>gold</span></li><li>${icon('potion',{size:32})}<b>${m.potions}</b><span>potions</span></li><li>${icon('sparkle',{size:32})}<b>${m.abilities.on}</b><span>of ${m.abilities.total} abilities</span></li><li>${icon('book-open',{size:32})}<b>${m.topicsMastered}</b><span>topics mastered</span></li><li>${icon('book-arcane',{size:32})}<b>${m.bestiary.seen}</b><span>of ${m.bestiary.total} in the Bestiary</span></li></ul></div></section>
<section class="stat-gear"><h3>Gear</h3><ul><li>${m.weapon.img?gearImgIcon(m.weapon.img):icon(m.weapon.icon,{size:32})}<span><strong>${esc(m.weapon.name)}</strong><small>Weapon</small></span></li><li>${m.armor.img?gearImgIcon(m.armor.img):icon(m.armor.icon||'armor',{size:32})}<span><strong>${esc(m.armor.name)}</strong><small>Chest armour</small></span></li><li>${icon('leaf',{size:32})}<span><strong>${esc(m.pet)}</strong><small>Pet</small></span></li></ul></section>
<section class="stat-mastery"><h3>Mastery</h3><ul>${subj}</ul></section>
<section class="stat-levels"><h3>Levels cleared <span>${m.levelsDone} / ${m.levelsTotal}</span></h3>${lv}</section>
<section class="stat-bosses"><h3>Bosses defeated <span>${m.bosses.length}</span></h3>${boss}</section>
</div>`;
}
export function openStats(save,{onClose}={}){
 const m=statsModel(save||{});
 const d=openSheet('stats',sheetHeader('Hero profile','YOUR JOURNEY',`${m.name} · Level ${m.level}`)+statsHTML(m),{onClose});
 const cv=d.querySelector('[data-stats-portrait]');if(cv)try{portrait(cv,CLASSES[m.hero]);}catch{}
 return d;
}
