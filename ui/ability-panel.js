/* The pause menu's Abilities list (14 Oct, owner: "have a place on the screen that shows abilities"): every unlocked
   ability of the current hero with its icon, its hotbar key when equipped, what it does in plain words, its cost and
   cooldown. Pure: main.js passes the ability list, the loadout, the readiness test and the icon renderer.
   Damage numbers are left out on purpose: real damage scales with the hero's stats, so a quoted base number would be wrong. */
import {stats,abilityGuard} from '../game/math.js';
import {CLASSES} from '../game/data.js';
import {ABILITIES} from '../game/abilities.js';
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
/* classes-oct28 (every class played): many cards read the same ("A close-range hit." for seven different moves) and the
   costs and catches a child must know were missing: Bloodletting takes 12% of your health, Smoke Bomb makes you untouchable,
   Sanctuary is a circle that stays where you cast it, Rain of Arrows lands in front of you. The line now names each
   ability's own mechanic, read from its generated fields (game/abilities.js), never from the English notes. */
const CLASS_OF=Object.fromEntries(Object.entries(ABILITIES).flatMap(([h,l])=>l.map(a=>[a.id,h])));
function lineParts(a,nums){
 const st=a.status==='poison'?'poisons for 4 s':a.status&&STATUS[a.status]?`${STATUS[a.status]}${a.statusTime>0?' '+sec(a.statusTime):''}`:'';
 const sig=CLASSES[CLASS_OF[a.id]]?.signature||'';let head;const rest=[];
 switch(a.kind){
  case 'melee':head=a.finisher?'A heavy close-range finisher':a.range>=36?'A wide close-range swing':'A close-range hit';break;
  case 'aoe':head=a.trap?'Sets a trap in front of you for 8 s':a.id==='rampage'?'Charges forward and hits every foe there':a.aheadUnits?'Hits every foe in front of you':'Hits every foe around you';break;
  case 'projectile':head=a.cd<=1?(a.homing?'A quick, cheap homing shot from far away':'A quick, cheap shot from far away'):a.homing?'A homing shot from far away':'A shot from far away';break;
  case 'chain':head=`Strikes up to ${Math.max(2,a.count|0)} foes in a chain${a.fromTotems?' from each totem (from you with none)':''}`;break;
  case 'heal':head=`Heals ${nums?.heal??Math.round(a.heal)} health`;break;
  case 'mark':head=`Marks a foe: +50% damage for ${sec(a.duration)}`;break;
  case 'aura':head=`A circle of light on the ground: you take less damage inside it for ${sec(a.duration)}`;break;
  case 'totem':head=a.damage>0?`A totem whose spirit wolf bites nearby foes for ${sec(a.life)}`:`A totem whose stone guardian fights beside it; you take less damage near it for ${sec(a.life)}`;break;
  case 'buff':{const b=[];if(a.shield>0)b.push(`a ${nums?.shield??Math.round(a.shield)} shield`);if(a.attackBuff>1)b.push(`attack ×${+a.attackBuff.toFixed(2)}`);if(a.speedBuff>1)b.push(`speed ×${+a.speedBuff.toFixed(2)}`);
   head=a.id==='vanish'?`Hides you from foes for ${sec(a.duration)}, until you strike${a.speedBuff>1?` · speed ×${+a.speedBuff.toFixed(2)}`:''}`:b.length?`Gives you ${b.join(', ')} for ${sec(a.duration)}`:`Empowers you for ${sec(a.duration)}`;break;}
  default:head='A special ability';
 }
 if(st)rest.push(st);
 if(a.id==='smoke-bomb')rest.push('you can’t be hurt for 1.2 s','speed ×1.5 for 2.5 s');
 if(a.fromTotems)rest.push('raises an ancestor at each totem');
 if(a.appliesExposed)rest.push('leaves the foe Exposed');
 if(a.primesExposed)rest.push('your first strike leaves the foe Exposed');
 if(a.consumesExposed)rest.push(`×${+a.consumesExposed} on an Exposed foe`);
 if(a.executeBelow)rest.push(`double damage below ${Math.round(a.executeBelow*100)}% health`);
 if(a.benefitsFromMark||CLASS_OF[a.id]==='ranger'&&a.branch==='Precision'&&a.kind!=='mark')rest.push('+50% on a marked foe');
 if(a.momentumGain>1&&sig==='Momentum')rest.push(`builds ${a.momentumGain} Momentum`);
 if(a.holdStacks&&sig)rest.push(`keeps your ${sig}`);
 if(a.guardSpend)rest.push(a.guardSpend>=1?`spends all your ${sig} for a bigger hit`:`spends ${Math.round(a.guardSpend*100)}% of your ${sig} for a bigger hit`);
 if(a.kind==='buff'&&a.shield>0&&CLASSES[CLASS_OF[a.id]]?.mechanic==='guard')rest.push(`blocked damage fills your ${sig}`);
 if(a.selfHpCost)rest.push(`costs ${Math.round(a.selfHpCost*100)}% of your health`);
 if(sig&&a.buildStacks>0)rest.push(`builds ${sig}`);
 if(sig&&a.spendStacks)rest.push(a.stackBonus>0?`spends ${sig} for a bigger hit`:`spends ${sig}`);
 return {head,rest};
}
export function abilityLine(a,nums=null){const {head,rest}=lineParts(a,nums);return [head,...rest].join(' · ');}
/* oct25-followups2 (first-hour playtest: Fireball and Ember Dart side by side in the Library read as the same thing): one
   short "what it does" line for an ability card. A cheap quick shot says so, and a class resource it builds or spends is
   named (Ember Dart builds Arcane Flow; Fireball spends it for a bigger hit). signature: kept for callers; the class's
   resource is now read from the ability's own class. */
export function abilityWhat(a,signature='',nums=null){
 if(!a)return '';
 const {head,rest}=lineParts(a,nums);
 return [head,...rest].join(' · ')+'.';
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
