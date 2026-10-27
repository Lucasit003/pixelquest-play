/* The pause menu's Abilities list (14 Oct, owner: "have a place on the screen that shows abilities"): every unlocked
   ability of the current hero with its icon, its hotbar key when equipped, what it does in plain words, its cost and
   cooldown. Pure: main.js passes the ability list, the loadout, the readiness test and the icon renderer.
   Damage numbers are left out on purpose: real damage scales with the hero's stats, so a quoted base number would be wrong. */
import {stats,abilityGuard} from '../game/math.js';
import {CLASSES} from '../game/data.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const STATUS={stun:'stuns',freeze:'freezes',root:'roots',slow:'slows',poison:'poisons'};
const sec=n=>`${+(+n).toFixed(1)} s`;
/* oct25-tryit (P10: the unlock card said "54 shield" while the HUD showed 64 at hero level 4): a shield or heal grows with
   the hero's max health (abilityGuard, game/math.js), so the number a card shows is the one combat gives today: the same
   formula on the same max health (stats(), which combat's player starts with). Shield rounds up like the HUD's "◇ N shield";
   heal rounds like combat's "+N". Returns {} without a save (the raw base numbers are then never quoted). */
export function abilityNumbers(save,a){
 const c=CLASSES[save?.hero];if(!save||!c||!a)return {};
 const hp=stats(save,c).hp,out={};
 if(a.shield>0)out.shield=Math.ceil(abilityGuard(a.shield,hp,c.hp));
 if(a.heal>0)out.heal=Math.round(abilityGuard(a.heal,hp,c.hp));
 return out;
}
export function abilityLine(a,nums=null){
 const st=a.status&&STATUS[a.status]?`${STATUS[a.status]}${a.statusTime>0?' '+sec(a.statusTime):''}`:'';
 const parts=[];
 switch(a.kind){
  case 'melee':parts.push('A close-range hit');break;
  case 'aoe':parts.push(a.trap?'Sets a trap that hits foes in an area':'Hits every foe around you');break;
  case 'projectile':parts.push('A shot from far away');break;
  case 'chain':parts.push(`Strikes up to ${Math.max(2,a.count|0)} foes in a chain`);break;
  case 'heal':parts.push(`Heals ${nums?.heal??Math.round(a.heal)} health`);break;
  case 'mark':parts.push(`Marks a foe: +50% damage for ${sec(a.duration)}`);break;
  case 'aura':parts.push(`An aura: you take less damage for ${sec(a.duration)}`);break;
  case 'totem':parts.push(a.damage>0?`A totem that strikes nearby foes for ${sec(a.life)}`:`A totem that guards you for ${sec(a.life)}`);break;
  case 'buff':{const b=[];if(a.shield>0)b.push(`a ${nums?.shield??Math.round(a.shield)} shield`);if(a.attackBuff>1)b.push(`attack ×${+a.attackBuff.toFixed(2)}`);if(a.speedBuff>1)b.push(`speed ×${+a.speedBuff.toFixed(2)}`);parts.push(b.length?`Gives you ${b.join(', ')} for ${sec(a.duration)}`:`Empowers you for ${sec(a.duration)}`);break;}
  default:parts.push('A special ability');
 }
 if(st)parts.push(st);
 return parts.join(' · ');
}
/* oct25-followups2 (first-hour playtest: Fireball and Ember Dart side by side in the Library read as the same thing): one
   short "what it does" line for an ability card. A cheap quick shot says so, and a class resource it builds or spends is
   named (Ember Dart builds Arcane Flow; Fireball spends it for a bigger hit). signature: the class's resource name. */
export function abilityWhat(a,signature='',nums=null){
 if(!a)return '';
 let line=abilityLine(a,nums);
 if(a.kind==='projectile'&&a.cd<=1)line='A quick, cheap shot from far away';
 const extra=[];
 if(signature&&a.buildStacks>0)extra.push(`builds ${signature}`);
 if(signature&&a.spendStacks)extra.push(a.stackBonus>0?`spends ${signature} for a bigger hit`:`spends ${signature}`);
 return [line,...extra].join(' · ')+'.';
}
/* list: the hero's 8 abilities; loadout: the 4 equipped ids (null for empty); ready(a): unlocked and awake;
   iconFor(a): the icon HTML; resource: the class's resource word ("Momentum", "Mana"...). */
export function pauseAbilitiesHTML({list=[],loadout=[],ready=()=>true,iconFor=()=>'',resource='',keys=['1','2','3','4'],touch=false,save=null}){
 const slotOf=a=>{const i=loadout.indexOf(a.id);return i<0?9:i;};
 /* the bar's four first, in key order, then the rest in ladder order */
 const open=list.filter(ready).map((a,i)=>[a,i]).sort((x,y)=>slotOf(x[0])-slotOf(y[0])||x[1]-y[1]).map(x=>x[0]);if(!open.length)return '';
 const rows=open.map(a=>{const slot=loadout.indexOf(a.id);return `<li class="${slot<0?'off':'on'}"><span class="glyph">${iconFor(a)}</span><b>${slot>=0?`<kbd>${esc(keys[slot])}</kbd>`:''}${esc(a.name)}</b><small>${esc(abilityLine(a,abilityNumbers(save,a)))}. ${a.cost>0?`${Math.round(a.cost)} ${esc(resource)} · `:''}${+(+a.cd).toFixed(1)} s between uses${slot<0?' · not on your bar':''}</small></li>`;}).join('');
 return `<section class="pause-abilities" aria-label="Your abilities"><h3>Your abilities · ${touch?'tap their buttons during play':'use the keys shown on your bar'}</h3><ul>${rows}</ul></section>`;
}
