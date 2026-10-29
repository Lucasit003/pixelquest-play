// "Your adventure" (endfollow-oct29, endgame-oct29 proposal): the victory card after THE END (the first Normal clear of the
// last level) sums up the whole game in one block: the hero's name and class, topics mastered, abilities unlocked, total stars,
// and the keepsake title just earned (game/titles.js). HTML only; reads the save, never writes it.
import {CLASSES} from '../game/data.js';
import {ABILITIES} from '../game/abilities.js';
import {unlocked} from '../game/math.js';
import {TOPICS,mastered} from '../academics/lessons.js';
import {totalStars,maxStars} from '../game/levels.js';
import {heroTitle} from '../game/titles.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function adventureSummary(s={}){
 const hero=CLASSES[s.hero]?s.hero:'warrior',cls=CLASSES[hero].name,typed=String(s.heroNames?.[hero]??'').trim().slice(0,24),ab=ABILITIES[hero]||[];
 return {name:typed||null,className:cls,level:Math.max(1,s.level|0),topics:TOPICS.filter(t=>mastered(s,t)).length,abilities:ab.filter(a=>unlocked(s,a)).length,ofAbilities:ab.length,stars:totalStars(s),maxStars:maxStars(),title:heroTitle(s)};}

export function adventureHTML(s,icon=''){const m=adventureSummary(s),stat=(n,label,key)=>`<span class="adv-stat" data-adv="${key}"><strong>${esc(n)}</strong> ${esc(label)}</span>`;
 return `<div class="level-adventure" data-adventure><small class="adv-eyebrow">YOUR ADVENTURE</small><strong class="adv-hero">${m.name?`${esc(m.name)} · `:''}Level ${m.level} ${esc(m.className)}</strong>`+
  `<div class="adv-stats">${stat(m.topics,m.topics===1?'topic mastered':'topics mastered','topics')}${stat(`${m.abilities} of ${m.ofAbilities}`,'abilities unlocked','abilities')}${stat(`${m.stars} of ${m.maxStars}`,'stars','stars')}</div>`+
  (m.title?`<p class="adv-title" data-title>${icon}<span>New title: <strong>${esc(m.title)}</strong></span></p><small class="adv-title-note">Shown on your hero card and in the pause menu.</small>`:'')+`</div>`;}
