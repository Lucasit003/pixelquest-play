import {rarPips} from './rarity.js';
import {affordableUpgrade,featuredUpgrade,smithTabs,equipComparison,betterPickup,setChanges,realGain,combatChange,SMITH_HELP,gearAtCap,tradeText,GEAR_SMALL} from './gear-guidance.js';
/* Gear screens (game/gear.js): the paper doll's gear slots, the compare panel, the set tracker, the next-upgrade hint and
   the Weaponsmith's five tabs (Buy, Craft, Stars, Finish, Salvage). HTML builders only; main.js shows them and wires the
   buttons. Every cost is shown in full before anything is pressed, and a disabled button says why. Gains and losses in a
   comparison carry an arrow and a sign (▲ +4 Power / ▼ -2 Defence), so the meaning never rests on colour alone. */
import {ITEMS,ITEM,MATS,SETS,TRICKS,FINISHES,SLOTS,SLOT_NAMES,GEAR_STAT,PCT,MAX_STARS,CHAPTER_NAMES,rarityOf,itemStats,gearBonus,statText,wholePct,starsOf,masteredTopics,wornOf,compare,setProgress,sourceText,
 recipe,recipeOpen,shopOpen,dropChance,firstLegendary,SET_DROP,starCost,finishCost,finishFits,salvageValue,wornBy,fits,SET_PIECES,starShows,firstVisibleStar,canAfford,costWhy,gearScore,chapterReached,bossBeaten,SCHOLAR_AT,familyOf,bossMat,shopLock} from '../game/gear.js';
import {LEVELS} from '../game/levels.js';
import {CLASSES} from '../game/data.js';
import {offenseLimited,equipmentDPS} from '../game/power.js';
import {BAG} from '../game/potions.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const gearIcon=(id,size=40)=>{const it=ITEM[id];return it?`<img class="gear-ico" src="ui/skin/gear/${it.icon}.png" width="${size}" height="${size}" alt="" draggable="false" onerror="this.hidden=true">`:'';};
export const matIcon=(k,size=24)=>`<img class="gear-ico mat-ico" src="ui/skin/gear/mat-${k}.png" width="${size}" height="${size}" alt="" draggable="false" onerror="this.hidden=true">`;
const stars=n=>n?`<span class="gear-stars" aria-label="${n} star${n>1?'s':''}">${'★'.repeat(n)}</span>`:'';
const rarTag=it=>`<span class="inv-tag" style="color:${rarityOf(it.rarity).color}">${rarPips(it.rarity)} ${rarityOf(it.rarity).name} ${SLOT_NAMES[it.slot].toLowerCase()}</span>`;
const bossName=k=>LEVELS.find(l=>l.boss===k)?.bossName||k;
/* An item's one special sentence: its trick, or its set's 3-piece effect. */
export const effectText=it=>it.trick?`Trick: ${TRICKS[it.trick].text}`:it.set?`${SETS[it.set].name} set: 2 pieces ${Object.entries(SETS[it.set].two).map(([k,v])=>statText(k,v)).join(', ')}; 3 pieces: ${SETS[it.set].three.text}`:'';
/* A cost, in full: gold and each material with how many you have. */
export function costHTML(s,cost){if(!cost)return '';const parts=[];if(cost.gold)parts.push(`<span class="cost-gold ${(s.gold||0)>=cost.gold?'':'short'}">◆ ${cost.gold}</span>`);
 for(const [m,n] of Object.entries(cost.mats||{})){const have=s.gear.mats[m]||0;parts.push(`<span class="cost-mat ${have>=n?'':'short'}" title="${esc(MATS[m].name)}">${matIcon(m,20)}${n} ${esc(MATS[m].name)} <small>(${have})</small></span>`);}
 return `<span class="gear-cost">${parts.join('')}</span>`;}
/* the compare lines: ▲ gains, ▼ losses, = unchanged */
const setLi=(s,hero,id)=>setChanges(s,hero,id).map(c=>`<li class="${c.up?'up':'down'} gear-setline">${c.up?'▲':'▼'} ${esc(c.text)}</li>`).join('');
export function compareHTML(s,hero,id){const rows=compare(s,hero,id),cur=wornOf(s,hero)[ITEM[id]?.slot];if(cur===id)return `<ul class="gear-lines">${rows.map(r=>`<li>${esc(statText(r.k,r.then))}</li>`).join('')}</ul>`;
 return `<ul class="gear-lines gear-compare" aria-label="Compared with what you wear">${rows.map(r=>{const d=r.d,up=d>0,down=d<0,v=PCT[r.k]?`${wholePct(d)}%`:Math.max(1,Math.round(Math.abs(d))),txt=up?`▲ +${v} ${GEAR_STAT[r.k]}`:down?`▼ -${v} ${GEAR_STAT[r.k]}`:`= ${GEAR_STAT[r.k]}`;
  return `<li class="${up?'up':down?'down':'same'}">${esc(r.k==='cdr'&&d?txt.replace('▲ +','▲ -').replace('▼ -','▼ +'):txt)}${r.then?`<small> (${esc(statText(r.k,r.then))})</small>`:''}</li>`;}).join('')}${setLi(s,hero,id)}</ul>`;}
/* The detail / compare panel for one gear item. */
export function itemDetailHTML(s,hero,id){const it=ITEM[id];if(!it)return '';const g=s.gear,o=g.owned[id],n=starsOf(g,id,masteredTopics(s)),worn=wornOf(s,hero)[it.slot]===id,fit=fits(hero,id,it.slot);
 return `<div class="inv-big" style="--rar:${rarityOf(it.rarity).color}">${gearIcon(id,64)}</div><div><h3 style="color:${rarityOf(it.rarity).color}">${esc(it.name)} ${stars(n)}</h3>${rarTag(it)}${o?.finish?`<span class="gear-finish">${esc(FINISHES[o.finish].name)} Finish</span>`:''}
  ${fit?cardNumbersHTML(s,hero,id):compareHTML(s,hero,id)}${effectText(it)?`<p class="gear-effect" ${it.set?'data-set-help':''}>${esc(effectText(it))}</p>`:''}<p class="subtle gear-from">Where from: ${esc(sourceText(id))}</p>
  ${o?(worn?(it.slot==='weapon'?'<p class="subtle">Worn.</p>':`<button data-gear-off="${it.slot}">Take off</button>`):fit?`<button class="primary" data-gear-on="${id}">Equip <kbd>E</kbd></button>`:`<p class="subtle">${it.slot==='weapon'?'Another hero’s weapon.':'Made for another hero.'}</p>`):'<p class="subtle">Not yours yet.</p>'}</div>`;}
/* The visible pity counter: each tier's chance of a set piece on the next kill, which rises after every miss. */
/* oct24-veil-econ: boss = the piece's own boss (the Dreamtide set has one per piece) */
export function pityHTML(s,set,boss=SETS[set]?.boss){const S=SETS[set];if(!boss)return '';const pct=t=>Math.round(dropChance(s,boss,t)*100),miss=t=>s.gear.pity[`${boss}:${t}`]||0;
 return `<p class="gear-pity" data-pity="${boss}">Set piece chance from ${esc(S.boss?S.bossName:bossName(boss))}: Normal ${pct('normal')}% · Heroic ${pct('heroic')}% · Legendary ${firstLegendary(s,boss)?'100% (first clear)':pct('legendary')+'%'}${['normal','heroic','legendary'].some(t=>miss(t))?' <small>(higher after each miss)</small>':''}</p>`;}
/* The set tracker: pieces worn of each set started, which bonus is on, and what is missing and where it comes from. */
export function setTrackerHTML(s,hero){const sets=setProgress(s,hero);if(!sets.length)return `<div class="gear-sets"><h4>Sets</h4><p class="subtle">Wear 2 or 3 pieces of one set for its bonuses. Bosses drop set pieces; the smith crafts them.</p></div>`;
 return `<div class="gear-sets"><h4>Sets</h4>${sets.map(p=>`<div class="gear-set" data-set="${p.key}"><strong>${esc(p.name)} ${p.on}/3</strong><ul>
  <li class="${p.on>=2?'on':''}">${p.on>=2?'✓':'○'} 2 pieces: ${esc(Object.entries(p.two).map(([k,v])=>statText(k,v)).join(', '))}</li>
  <li class="${p.on>=3?'on':''}">${p.on>=3?'✓':'○'} 3 pieces: ${esc(p.three.text)}${p.on<3?` <small>Missing: ${p.missing.map(id=>`${esc(ITEM[id].name)}${s.gear.owned[id]?' (in your bag)':` (${esc(sourceText(id))})`}`).join('; ')}</small>`:''}</li></ul>${p.owned<3?pityHTML(s,p.key):''}</div>`).join('')}</div>`;}
/* Where a material comes from, as a goal: the boss that pays it (one already beaten first), or elite foes. */
export function matSource(s,m){if(m==='elite-shard')return 'stronger enemies and victory chests give Essence';const ls=LEVELS.filter(l=>l.boss&&bossMat(l.boss)===m);if(!ls.length)return '';
 const won=ls.find(l=>bossBeaten(s,l.boss));return won?`beat ${won.bossName||won.boss} again`:`beat ${ls[0].bossName||ls[0].boss}`;}
/* A purchase the child can make now, compared with the combat stat of what they wear. */
/* oct24-veil-econ: the hint names its slot's number when that number rises, else the overall change it was chosen for
   (a pair of boots at the Defence cap read "Defence 27 → 27") */
/* improve20-r8a-nov1 #1: a pick that trades a little away says so, as its card does ("+13% damage, -2% speed") */
export const nextGainText=n=>{const tr=tradeText(n);if(tr)return tr;if(Math.round(n.after)>Math.round(n.before))return `${n.label} ${Math.round(n.before)} → ${Math.round(n.after)}`;const d=combatChange(n),[k,v]=Object.entries(d).sort((a,b)=>b[1]-a[1])[0];return `${{damage:'Overall damage',toughness:'Overall toughness',speed:'Speed'}[k]} +${Math.max(1,Math.round(v*100))}%`;};
/* follow6-oct29 (exploit6 E): at 1280x720 the card's "Buy · 350" sat below the stock's visible edge, so a kid had to scroll to buy.
   On the smith's Buy tab (buy:true) the line carries its own Buy button, the same data-gear-buy action as the card's.
   improve20-r16b-nov3 #1 (audit12 a8): that button is "Buy and wear" (data-gear-buywear): one tap buys the piece and puts it on, since it is
   featured only as a real upgrade (gear-guidance.js featuredUpgrade, +8% or more). The cards' own Buy keeps the post-buy Equip now / Not now prompt. */
/* improve20-r19b-nov3 #1: the piece whose red "Buy and wear" the strip shows on this tab (the Buy tab, a bought featured piece), or null */
export function stripBuyId(s,hero,tab){const n=tab==='buy'?featuredUpgrade(s,hero):null;return n&&n.kind!=='craft'?n.id:null;}
export function nextUpgradeHTML(s,hero,{buy=false}={}){const n=featuredUpgrade(s,hero),craft=n?.kind==='craft';return n?`<p class="gear-next ready" data-next-item="${esc(n.id)}"${craft?' data-next-tab="craft"':''}><span class="tag">NEXT UPGRADE</span> ${gearIcon(n.id,24)} <strong>${craft?'Craft':'Buy'} ${esc(ITEM[n.id].name)} · ◆ ${n.cost}${craft?Object.entries(n.mats).map(([m,k])=>` + ${k} ${esc(MATS[m]?.name||m)}`).join(''):''}</strong> <small>${nextGainText(n)}</small>${buy&&!craft?`<button class="primary gear-next-buy" data-gear-buywear="${esc(n.id)}">Buy and wear</button>`:''}</p>`:'';}
export const matsHTML=s=>{const m=Object.entries(s.gear.mats).filter(([,n])=>n>0);return `<div class="gear-mats"><h4>Materials</h4><p class="subtle">Use materials, including Essence, to upgrade gear at the smith.</p>${m.length?m.map(([k,n])=>`<span class="gear-mat" title="${esc(MATS[k].name)}">${matIcon(k,24)}<b>${n}</b><small>${esc(MATS[k].name)}</small></span>`).join(''):'<p class="subtle">Bosses drop materials. Stronger enemies drop Essence for gear upgrades.</p>'}</div>`;};
/* the bag for one slot: every owned item that fits this hero, worn ones marked */
export function bagHTML(s,hero,slot,sel){const items=ITEMS.filter(it=>it.slot===slot&&s.gear.owned[it.id]&&fits(hero,it.id,slot)),worn=wornOf(s,hero),topics=masteredTopics(s);
 return items.map(it=>`<button class="inv-cell ${worn[slot]===it.id?'worn':''} ${sel===it.id?'picked':''} ${s.gear.owned[it.id].new?'new':''}" data-gear="${it.id}" style="--rar:${rarityOf(it.rarity).color}" aria-label="${esc(it.name)}, ${rarityOf(it.rarity).name}${worn[slot]===it.id?', worn':''}" title="${esc(it.name)} (${rarityOf(it.rarity).name}${worn[slot]===it.id?', worn':''})">${gearIcon(it.id,32)}${stars(starsOf(s.gear,it.id,topics))}${rarPips(it.rarity,'rar-on-cell')}</button>`).join('')||'<p class="subtle">Nothing else for this slot yet.</p>';}
export const scoreHTML=(s,hero)=>`<div class="gear-score"><dt>Gear Score</dt><dd>${gearScore(s,hero)}</dd></div>`;
/* 24 Oct playtest: a Buy card said "+5 Power" when the swing only grew by 1 (Power reaches a swing at half; math.js
   basicStat). A card the hero could wear now shows the real change against what they wear, from the same final stats
   combat uses: Attack (a swing), Strength or Magic (abilities, whichever the class leans on), Defence, Health, and so on. */
export function realLinesHTML(s,hero,id){const c=equipComparison(s,hero,id),B=c.beforeStats,A=c.afterStats,cl=CLASSES[hero]||{},rows=[],r1=v=>Math.round(v);/* 25 Oct: whole numbers on the shop cards */
 const flat=(k,name)=>{const b=r1(B[k]),a=r1(A[k]);if(a===b)return;rows.push([A[k]>B[k],`${name} ${b} → ${a}`]);};
 const pct=(name,d,less)=>{if(Math.abs(d)<.0005)return;rows.push([less?d<0:d>0,`${d>0?'+':'-'}${wholePct(d)}% ${name}`]);};
 /* oct24-veil-econ review: at the 35% toughness limit math.js trims gear Health and Defence together, so a piece with more of both
    could read "Defence 27 -> 26.2" in red beside a Health gain. When the two move apart there, the card shows the one number the
    limit keeps, overall toughness (below), instead of a red line the item did not cause. */
 const it=ITEM[id],raw=gearBonus({...s,hero,gear:{...s.gear,worn:{...s.gear.worn,[hero]:{...wornOf(s,hero),[it.slot]:id}}}},hero),traded=(A.def<B.def&&A.hp>=B.hp||A.hp<B.hp&&A.def>=B.def)&&(A.gear.hp+1e-7<raw.hp||A.gear.def+1e-7<raw.def);
 flat('basic','Attack');flat((cl.atk||0)>=(cl.mag||0)?'atk':'mag',(cl.atk||0)>=(cl.mag||0)?'Strength':'Magic');if(!traded){flat('def','Defence');flat('hp','Health');}
 pct('Strong hit chance',A.crit-B.crit);pct('Speed',B.speed?A.speed/B.speed-1:0);/* oct24-exploit-b: cdr is a cut, so the wait time moves by minus its change (a -5% bow read "▼ +5% Ability wait time") */pct('Ability wait time',B.cdr-A.cdr,true);
 /* oct24-veil-econ: the overall verdict, in the numbers NEXT UPGRADE ranks by (gear-guidance.js combatChange), so a card whose Strong hit chance dips but whose damage rises says so */const d=combatChange(c);for(const [k,name] of [['damage','Overall damage'],['toughness','Overall toughness']])if(Math.abs(d[k])>=.005)rows.push([d[k]>0,`${name} ${d[k]>0?'+':'-'}${Math.round(Math.abs(d[k])*100)}%`]);else if(k==='toughness'&&traded)rows.push([null,`${name} the same (at the gear limit)`]);
 const sets=setLi(s,hero,id);return rows.length||sets?`<ul class="gear-lines gear-compare" aria-label="Compared with what you wear">${rows.map(([up,t])=>`<li class="${up==null?'same':up?'up':'down'}">${up==null?'•':up?'▲':'▼'} ${esc(t)}</li>`).join('')}${sets}</ul>`:null;}
/* Effective loadout numbers include the gear boundary; item ratings remain visible separately. oct24-polish2: "Gear limit applied:
   these totals include the 35% limit" sat on cards that show no totals; it now says what the limit is in one line (it repeats on
   every worn card); a star or Finish that the limit swallows says what raises it (CAP_WASTE). */
/* oct24-polish3: game/power.js (powercap) also bounds gear's share of damage at 40%, counting strong hits, ability wait and
   procs, on top of the 35% core-stat cap; the note now covers both in plain words, and shows when either one clips. */
/* oct24-overlevel (exploit hunt D1): with the capstone worn the note read "Gear limit reached: more gear won't make you stronger"
   right after its craft card promised "Overall damage +16%". It now says what is true and what to do next: the limit is a share
   of the hero's own power, so hero levels and mastered topics (the Library) raise it. */
export const capNote=(lvl,worn=true)=>worn?`This is the strongest gear can make you at hero level ${Math.max(1,lvl|0)}. Level up or master topics in the Library to grow stronger.`:`Your gear is already as strong as it can be at hero level ${Math.max(1,lvl|0)}, so this won't make you stronger. Level up or master topics in the Library to grow stronger.`;
/* Effective loadout numbers include the gear boundary; item ratings remain visible separately. */
/* oct24-veil-econ (playtest ch3 C1: by v3 every smith card said "Gear limit reached"). Emberkeep's armour already fills the
   Defence cap (then a flat 16; now gear.js defCap, 16/20/24 by chapter) and the 35% toughness limit, so every card that put armour on the hero, weapons included, was
   flagged although a weapon's damage still had room under the 40% bound. The note now speaks for the card's own item: one of
   its own lines is trimmed (Defence or Health by the toughness limit, Strength, Strong hits or ability wait by the damage
   bound) and, for an item not yet worn, wearing it would gain nothing (gear-guidance.js realGain). The limits are unchanged. */
const itemLimited=(it,a,raw)=>Object.keys(it.stats).some(k=>k==='hp'||k==='def'?a.gear[k]+1e-7<raw[k]:k==='power'||k==='crit'||k==='cdr'?offenseLimited(a)||k==='power'&&a.gear.power+1e-7<raw.power:false);
/* improve20-x-nov1 #20b: the same "at the gear limit" test cardNumbersHTML uses, for the Buy card's top line */
export function cardClipped(s,hero,id){const it=ITEM[id];if(!it||!fits(hero,id,it.slot))return false;const a=equipComparison(s,hero,id).afterStats,raw=gearBonus({...s,hero,gear:{...s.gear,worn:{...s.gear.worn,[hero]:{...wornOf(s,hero),[it.slot]:id}}}},hero);return itemLimited(it,a,raw)&&(wornOf(s,hero)[it.slot]===id||!realGain(equipComparison(s,hero,id)));}
export function cardNumbersHTML(s,hero,id){const it=ITEM[id];if(!fits(hero,id,it.slot))return '';const a=equipComparison(s,hero,id).afterStats,r=n=>Math.round(n),magic=(CLASSES[hero].mag||0)>(CLASSES[hero].atk||0),raw=gearBonus({...s,hero,gear:{...s.gear,worn:{...s.gear.worn,[hero]:{...wornOf(s,hero),[it.slot]:id}}}},hero),worn0=wornOf(s,hero)[it.slot]===id,clipped=itemLimited(it,a,raw)&&(worn0||!realGain(equipComparison(s,hero,id))),totals=`<p class="gear-lines">Your totals: Attack ${r(a.basic)} · ${magic?'Magic':'Strength'} ${r(a[magic?'mag':'atk'])} · Defence ${r(a.def)} · Health ${r(a.hp)}</p>`,worn=wornOf(s,hero)[it.slot]===id,ratings=`<p class="subtle">What this item adds</p><ul class="gear-lines">${Object.entries(itemStats(id,starsOf(s.gear,id,masteredTopics(s)),s.gear.owned[id]?.finish)).map(([k,v])=>`<li>${esc(statText(k,v))}</li>`).join('')}</ul>`;return (worn?ratings+(clipped?totals:''):realLinesHTML(s,hero,id)||'<p class="subtle">No change to displayed combat stats.</p>')+(clipped?`<p class="subtle gear-cap-note">${esc(capNote(s.level,worn))}</p>`:'');}
/* oct24-polish2 (playtest r3): at the 35% gear limit a star or Finish can raise the item rating and change nothing the hero
   has (a chest star at the limit traded Health for a sliver of Defence); the card says so before the gold and materials are
   spent. Same calculation as cardUpgradeHTML; toughness is compared as health x (100 + 3 x defence), as math.js caps it. */
/* oct24-polish3: under the 40% damage bound (offenseLimited) a star can lift strong hits while the bound trims Attack to match, so
   offence is judged by the same expected damage power.js bounds (equipmentDPS), not by any one number rising. */
export function capWaste(s,hero,id,record){const after={...s,gear:{...s.gear,owned:{...s.gear.owned,[id]:record}}},b=equipComparison(s,hero,id).afterStats,a=equipComparison(after,hero,id).afterStats;const ehp=x=>(x.hp||0)*(100+3*(x.def||0));const offense=offenseLimited(a)?equipmentDPS(a)>equipmentDPS(b)*1.001:['basic','atk','mag'].some(k=>(a[k]||0)-(b[k]||0)>=.05)||['crit','cdr'].some(k=>(a[k]||0)-(b[k]||0)>.0005);return !(offense||ehp(a)>ehp(b)*1.005||(a.speed||0)-(b.speed||0)>.0005);}
export const CAP_WASTE='At the gear limit: this raises the item’s own numbers but won\'t make you stronger. Hero levels and mastered topics raise the limit.';
/* kidfix-a-oct31 (kid-appeal playtest: "Attack 33 → 33"): the line names only the numbers that change, and a change too small for whole
   numbers shows its decimal (Attack 33.2 → 33.5), so no step ever reads "X → X"; a step that moves nothing says so in words */
export const upgradePairs=(b,a,magic)=>[['Attack',b.basic,a.basic],[magic?'Magic':'Strength',b[magic?'mag':'atk'],a[magic?'mag':'atk']],['Defence',b.def,a.def],['Health',b.hp,a.hp],['Strong hit',b.crit*100,a.crit*100,'%'],['Ability wait reduction',b.cdr*100,a.cdr*100,'%'],['Speed',b.speed,a.speed]].filter(([,x,y])=>Math.abs((y||0)-(x||0))>.0005);
export const changeText=([k,x,y,u=''])=>{let d=0;while(d<3&&(+x).toFixed(d)===(+y).toFixed(d))d++;return `${k} ${(+x).toFixed(d)}${u} → ${(+y).toFixed(d)}${u}`;};
export function cardUpgradeHTML(s,hero,id,record){const after={...s,gear:{...s.gear,owned:{...s.gear.owned,[id]:record}}},b=equipComparison(s,hero,id).afterStats,a=equipComparison(after,hero,id).afterStats,magic=(CLASSES[hero].mag||0)>(CLASSES[hero].atk||0),ch=upgradePairs(b,a,magic);return `<p class="gear-lines">${ch.length?'If worn: '+ch.map(changeText).join(' · '):'If worn: your numbers stay the same.'}</p>`;}
/* improve20-r8a-nov1 #1: the upgrade badge, with the trade it makes said plainly ("+14% damage, -2% speed") */
export const upBadgeHTML=(label,trade='',kind='up')=>`<p class="gear-up-badge${kind==='trade'?' gear-trade-badge':''}"><span>${kind==='trade'?'⇄':'▲'}</span> ${esc(label)}</p>${trade?`<p class="gear-trade">${esc(trade)}</p>`:''}`;
/* improve20-r9f-nov1 #4 (audit8 a16: Kingsbane, Celestial Warden and Forgefire were locked yet badged "Upgrade for you", and Emberbrand at
   +4% damage and -2% speed was a "Small upgrade"): ONE badge decision for the Buy and Craft cards. A locked item gets no badge (its card
   shows only the lock and what opens it); an item the judge passes that loses anything is a "Trade-off", with the trade said under it;
   only a gain that loses nothing is an upgrade. x: {grp, gain, trade, lock, owned, best}. Returns {kind:'up'|'trade', label} or null. */
export function gearBadge(x){if(!x||x.lock||x.grp!==0||!(x.gain>0))return null;const small=x.gain<GEAR_SMALL;
 /* improve20-r11c-nov2 #3 (audit9 a12: a +4% damage, -2% speed sword was "Best trade-off for you"): a small trade is called small, best or not */
 if(x.trade)return {kind:'trade',label:x.best?(small?'Small trade-off for you':'Best trade-off for you'):x.owned?'Trade-off against what you wear':small?'Small trade-off':'Trade-off'};
 return {kind:'up',label:x.best?(small?'Small upgrade for you':'Best upgrade for you'):x.owned?'Better than what you wear':small?'Small upgrade':'Upgrade for you'};}
/* every combat number worse (damage, toughness and speed all down or level, at least one down): a card to grey out, never to offer */
export const allWorse=c=>{const d=combatChange(c),v=Object.values(d);return v.every(x=>x<=1e-3)&&v.some(x=>x<-.005);};
/* a Craft card the one judge calls an upgrade (no set broken): the same badge as the Buy tab */
export function craftUp(s,hero,id){if(!fits(hero,id,ITEM[id].slot))return null;const c=equipComparison(s,hero,id);if(!(realGain(c)>0)||setChanges(s,hero,id).some(x=>!x.up))return null;const n=affordableUpgrade(s,hero),trade=tradeText(c),b=gearBadge({grp:0,gain:realGain(c),trade,best:n?.id===id});return b?{...b,trade}:null;}
/* ---- the Weaponsmith ---- */
const SLOT_ORDER=it=>it.slot==='weapon'?0:it.slot==='chest'&&it.cls?1:2;
export const SMITH_TABS=[['buy','Buy'],['craft','Craft'],['stars','Stars'],['finish','Finish'],['salvage','Salvage']];
/* ready2fix-oct30 #11: each tab keeps its name (the Journal, tasks and skills use it) with a plain-words line under it */
export const SMITH_TAB_SUB={buy:'new gear',craft:'make gear',stars:'upgrade',finish:'add a bonus',salvage:'trade in'};
/* what the comparison lines on a card mean, in kid words, under the Buy and Craft help */
export const GEAR_WORDS='Overall damage: how hard you hit in all. Overall toughness: how much damage you can take before you fall.';
const card=(s,hero,id,body,lines=null,cls='',top='')=>{const it=ITEM[id];return `<div class="card gear-card${cls?' '+cls:''}" data-item="${id}" style="--rar:${rarityOf(it.rarity).color}"><span class="tag">${esc(rarityOf(it.rarity).name.toUpperCase())} ${esc(SLOT_NAMES[it.slot].toUpperCase())}</span><span class="smith-ico">${gearIcon(id,48)}${rarPips(it.rarity,'rar-on-cell')}</span><h3>${esc(it.name)} ${stars(starsOf(s.gear,id,masteredTopics(s)))}</h3>${top?`<section class="gear-card-top">${top}</section>`:''}${lines||cardNumbersHTML(s,hero,id)||`<ul class="gear-lines">${Object.entries(itemStats(id,starsOf(s.gear,id,masteredTopics(s)),s.gear.owned[id]?.finish)).map(([k,v])=>`<li>${esc(statText(k,v))}</li>`).join('')}</ul>`}${effectText(it)?`<p class="gear-effect" ${it.set?'data-set-help':''}>${esc(effectText(it))}</p>`:''}${body}</div>`;};
/* oct24-polish2: Equip now is the red call to action only for a real gain; the Craft tab lit it on Bog King's Waders that lost
   Health and Speed and broke the worn Wayfarer's set, and the Buy tab printed the card's own top line a second time above it */
/* oct24-veil-econ: the same comparison as NEXT UPGRADE (gear-guidance.js realGain) */const worthEquip=(s,hero,id)=>realGain(equipComparison(s,hero,id))>0&&!setChanges(s,hero,id).some(c=>!c.up);
const btn=(attr,id,label,ok,why)=>`<button data-${attr}="${id}" ${ok?'class="primary"':'disabled'}${why?` aria-describedby="why-${attr}-${id}"`:''}>${label}</button>${why?`<p class="forge-reason" id="why-${attr}-${id}">${esc(why)}</p>`:''}`;
/* improve20-r13c-nov2 #5: the best real gain (ui/gear-guidance.js realGain, the badge's judge) of what is still open on the shelf or the
   affordable upgrade; SMITH_SMALL is the gain under which "the upgrades left are small" is true (a level-18 save's +3% shop weapon is; the audit's level-9 +5% chest is not) */
export const SMITH_SMALL=.04;
export function smithBestGain(s,hero,up,nx){const xs=(up||[]).filter(x=>x.open&&!x.owned&&!x.lock).map(x=>realGain(equipComparison(s,hero,x.it.id)));if(nx)xs.push(realGain(equipComparison(s,hero,nx.id)));return Math.max(0,...xs);}
export function smithHTML(s,hero,tab='buy',pick=null,confirm=null){const g=s.gear,fam=familyOf(hero),tabs=smithTabs(s);if(!tabs.includes(tab))tab='buy';let body='';
 if(tab==='buy'){/* by chapter, then weapon, class chest, the rest, then price: each chapter's second line (game/gear.js MID_LINE, MID_LINE2) sits after its first */const items=ITEMS.filter(it=>it.shop>0&&fits(hero,it.id,it.slot)).sort((a,b)=>a.chapter-b.chapter||SLOT_ORDER(a)-SLOT_ORDER(b)||a.shop-b.shop);
  /* improve20-t-oct31 #14 (audit2 #5): at level 9 the first row was two items worse than what the hero wears and two already worn, and
     the upgrade was under "More below". What helps this hero now leads, marked (smithBuyOrder); what you wear and what is no better
     than it fold away at the end */
  const capped=gearAtCap(s,hero),{up,side,rest}=smithBuyOrder(s,hero,items),nx=affordableUpgrade(s,hero),/* improve20-r18a-nov3 #3 (audit13 #5, shot 07: Emberbrand, +4% damage for −2% speed, was highlighted with the only red Buy): the card
   highlight and the red Buy follow featuredUpgrade() (+8% or more) like the NEXT UPGRADE line; no featured piece, no highlight */fx=featuredUpgrade(s,hero),best=fx&&fx.kind!=='craft'?up.find(x=>x.it.id===fx.id)||null:null,/* improve20-r19b-nov3 #1 (R18A lead review): one red per screen; when the NEXT UPGRADE strip carries its red "Buy and wear" for a piece, that piece's card keeps the same button in plain style */stripBuy=stripBuyId(s,hero,tab),one=x=>{const it=x.it,owned=x.owned,lock=x.lock,open=x.open;
   const bd=gearBadge({...x,best:x===best}),badge=bd?upBadgeHTML(bd.label,x.trade,bd.kind):'';
   /* improve20-x-nov1 #20b (audit4 #10): the price and Buy (or Equip, or the lock) come first, under the name, so a row of cards shows its
      prices without scrolling; "At the gear limit" sits before the price, not after it */
   const cap=x.dominated?`<p class="gear-cap-top gear-dominated">${esc(x.dominated)} costs less and is as strong</p>`:open&&!owned&&cardClipped(s,hero,it.id)?'<p class="gear-cap-top">At the gear limit: no stronger for you now</p>':'';
   return card(s,hero,it.id,'',badge+cardNumbersHTML(s,hero,it.id),x.grp===0&&!lock?'gear-up'+(x===best?' gear-best':''):x.grp===2?'gear-no-better':'',cap+(owned?(wornOf(s,hero)[it.slot]===it.id?'<p class="subtle">Equipped ✓</p>':`<button${worthEquip(s,hero,it.id)?' class="primary"':''} data-smith-equip="${it.id}">Equip now</button>`):!open?`<p class="forge-reason gear-locked">🔒 Locked · ${esc(lock)}</p>`:`${(x===best&&!x.dominated&&stripBuy!==it.id?s=>s:s=>s.replace(' class="primary"',''))(/* improve20-r18a-nov3 #3: a stronger piece's buy is one tap, "Buy and wear", as on the strip; a side piece keeps Buy (to the bag) */x.grp===0?btn('gear-buywear',it.id,`Buy and wear · ◆ ${it.shop}`,(s.gold||0)>=it.shop,(s.gold||0)>=it.shop?'':`Need ${it.shop-(s.gold||0)} more gold`):btn('gear-buy',it.id,`Buy · ◆ ${it.shop}`,(s.gold||0)>=it.shop,(s.gold||0)>=it.shop?'':`Need ${it.shop-(s.gold||0)} more gold`))}`));};
  /* improve20-x-nov1 #20a: with the gear at its limit, the smith says where gold can go */
  /* improve20-r8a-nov1 #1: the line and the badges read the same verdict: "at its limit" only with no upgrade on the shelf, "near" when what is left is small */
  /* improve20-r13c-nov2 #5 (audit10 a13): at level 9 it said "near its limit... save for a Showpiece" over a +5% chest. The line is said only
     when it is true: "near" when every piece left on the shelf (or craftable now) is worth under SMITH_SMALL, "at its limit" when none helps */
  const left=smithBestGain(s,hero,up,nx),limitLine=!capped||(s.gold|0)<600?'':left<=0?'Your gear is at its limit for now.':left<SMITH_SMALL?'Your gear is near its limit: the upgrades left are small.':'';
  body=`${limitLine?`<p class="smith-show-line">${limitLine} Save gold for a Showpiece at Home (Decorate tab): just for show.</p>`:''}${up.length||side.length?'':'<p class="subtle smith-all-worn">You already wear the best the smith sells for your hero. Craft set gear or add stars next.</p>'}${/* improve20-r11c-nov2 #3 (audit9 a12: at level 9 with 391 gold, 3 of 4 cards were locked): what can be bought or worn now leads, and the locked stock folds into one row that says what opens it */''}${(()=>{const now=[...up,...side].filter(x=>!x.lock),later=[...up,...side].filter(x=>x.lock),why=[...new Set(later.map(x=>x.lock))];return `<div class="grid gear-grid">${now.map(one).join('')}</div>${later.length?`<details class="smith-locked" data-locked="${later.length}"><summary>${later.length} more open later: ${esc(why.join(' · '))}</summary><div class="grid gear-grid">${later.map(one).join('')}</div></details>`:''}`;})()}${rest.length?`<details class="smith-no-better"${up.length||side.length?'':' open'}><summary>${rest.length} more: what you wear, and gear no better than it</summary><div class="grid gear-grid">${rest.map(one).join('')}</div></details>`:''}`;}
 else if(tab==='craft'){const items=ITEMS.filter(it=>(it.set&&!it.shop||it.trick)&&fits(hero,it.id,it.slot));
  body=`<div class="grid gear-grid">${items.map(it=>{if(it.scholar){const n=masteredTopics(s);return card(s,hero,it.id,g.owned[it.id]?'<p class="subtle">Earned. It grows a star for every 5 more topics past 15.</p>':`<p class="forge-reason">Earned in the Library: master ${it.scholar} topics (you have ${n}).</p>`);}
   if(g.owned[it.id])return card(s,hero,it.id,wornOf(s,hero)[it.slot]===it.id?'<p class="subtle">Equipped ✓</p>':`<button${worthEquip(s,hero,it.id)?' class="primary"':''} data-smith-equip="${it.id}">Equip now</button>`);
   if(!recipeOpen(s,it.id))return `<div class="card gear-card locked" data-item="${it.id}"><span class="tag">RECIPE LOCKED</span><span class="smith-ico gear-silhouette">${gearIcon(it.id,48)}</span><h3>???</h3><p class="forge-reason">Defeat ${esc(bossName(it.boss))} to learn this recipe.</p></div>`;
   const r=recipe(it.id),ok=canAfford(s,r),up=craftUp(s,hero,it.id),worse=!up&&allWorse(equipComparison(s,hero,it.id));return card(s,hero,it.id,`${worse?'<p class="forge-reason gear-worse">Weaker than what you wear in every way.</p>':''}${it.set?pityHTML(s,it.set,it.boss):''}${costHTML(s,r)}${btn('gear-craft',it.id,'Craft',ok,ok?'':costWhy(s,r))}`,up?upBadgeHTML(up.label,up.trade,up.kind)+cardNumbersHTML(s,hero,it.id):null,up?'gear-up':worse?'gear-no-better':'');}).join('')}</div>`;}
 else{const mine=ITEMS.filter(it=>g.owned[it.id]&&!it.scholar&&(tab!=='salvage'||it.shopTier!==0)).filter(it=>tab==='salvage'||fits(hero,it.id,it.slot)||!it.family&&!it.cls);
  if(tab==='stars'){/* late playtest 24 Oct: the starter sword and armour were listed first with "Add ★1 anyway"; what the hero wears comes first,
    and a piece in the bag says that its stars only help while it is worn */const on=it=>wornOf(s,hero)[it.slot]===it.id;mine.sort((a,b)=>on(b)-on(a));body=`<p class="subtle">Each star adds 6% to an item’s stats and always succeeds. Five stars at most.</p><div class="grid gear-grid">${mine.map(it=>{const n=g.owned[it.id].stars,bag=on(it)?'':'<p class="forge-reason">In your bag: stars only help while you wear it.</p>';if(n>=MAX_STARS)return card(s,hero,it.id,bag+'<p class="subtle">Fully upgraded.</p>');const c=starCost(it.id,n+1),ok=canAfford(s,c);
   const f=g.owned[it.id].finish,shows=starShows(it.id,n,f),at=shows?0:firstVisibleStar(it.id,n,f),waste=shows&&capWaste(s,hero,it.id,{...g.owned[it.id],stars:n+1});
   return card(s,hero,it.id,`${bag}<p>With ★${n+1} this item adds: ${Object.entries(itemStats(it.id,n+1,f)).map(([k,v])=>esc(statText(k,v))).join(', ')}</p>${cardUpgradeHTML(s,hero,it.id,{...g.owned[it.id],stars:n+1})}${shows?(waste?`<p class="forge-reason gear-cap-waste">${esc(CAP_WASTE)}</p>`:''):/* ready2fix-oct30 #9: what ★n+1 does give, truly (game/gear.js addStar pays 5 x the new star in Crafting XP; stars round on the
     item total, so a small item's numbers first move at firstVisibleStar) */`<p class="forge-reason star-step">★${n+1} is a step on the way: it gives +${5*(n+1)} Crafting skill XP. ${at?`This item’s numbers are small, so they first go up at ★${at}.`:'This item’s numbers are too small for stars to raise them.'}</p>`}${costHTML(s,c)}${shows&&!waste?btn('gear-star',it.id,`Add ★${n+1}`,ok,ok?'':costWhy(s,c)):`<button data-gear-star="${it.id}" ${ok?'':'disabled'}>Add ★${n+1} anyway</button>`}`);}).join('')}</div>`;}
  if(tab==='finish'){const sel=ITEM[pick]&&g.owned[pick]&&!ITEM[pick].scholar?pick:null;
   body=`<p class="subtle">A Finish adds a bonus, such as more health. Pick an item, then its bonus. Changing it later costs the same.</p><div class="gear-pick">${mine.map(it=>`<button class="inv-cell ${sel===it.id?'picked':''}" data-gear-fpick="${it.id}" style="--rar:${rarityOf(it.rarity).color}" aria-label="${esc(it.name)}, ${rarityOf(it.rarity).name}" title="${esc(it.name)} (${rarityOf(it.rarity).name})">${gearIcon(it.id,32)}${rarPips(it.rarity,'rar-on-cell')}</button>`).join('')}</div>`+
    (sel?(()=>{const c=finishCost(sel),o=g.owned[sel];return `<h3>${esc(ITEM[sel].name)}${o.finish?` · now ${esc(FINISHES[o.finish].name)}`:''}</h3>${costHTML(s,c)}<div class="grid gear-grid">${Object.entries(FINISHES).map(([k,F])=>{const fitsOk=finishFits(sel,k),ok=fitsOk&&o.finish!==k&&canAfford(s,c),why=!fitsOk?(F.weapon&&ITEM[sel].slot!=='weapon'?'Weapons only':'This bonus does not fit this item'):o.finish===k?'Already on this item':canAfford(s,c)?'':costWhy(s,c);
     return `<div class="card gear-finish-card"><h3>${esc(F.name)}</h3><p>${esc(statText(F.stat,F.v))} on this item</p>${fitsOk?cardUpgradeHTML(s,hero,sel,{...o,finish:k}):''}${fitsOk&&o.finish!==k&&capWaste(s,hero,sel,{...o,finish:k})?`<p class="forge-reason gear-cap-waste">${esc(CAP_WASTE)}</p>`:''}${btn('gear-finish',`${sel}:${k}`,`Apply ${esc(F.name)}`,ok,why)}</div>`;}).join('')}</div>`;})():'<p class="subtle">Pick an item above.</p>');}
  if(tab==='salvage')body=`<p class="subtle">Salvage an item you no longer want: you get half its materials (or half its price) back, plus every star’s materials. Worn items, starting gear and Scholar’s pieces are never salvaged.</p><div class="grid gear-grid">${mine.map(it=>{const v=salvageValue(s,it.id),worn=wornBy(s,it.id);
   return card(s,hero,it.id,worn.length?`<p class="forge-reason">Worn by your ${esc(worn.map(h=>CLASSES[h]?.name||h).join(', '))}. Take it off first.</p>`:`<p>You get back: ${costHTML(s,v).replace(/ short/g,'')}</p>${confirm===it.id?`<button class="primary danger" data-gear-salvage-yes="${it.id}">Yes, salvage it</button><button data-gear-salvage-no="1">Keep it</button>`:`<button data-gear-salvage="${it.id}">Salvage…</button>`}`);}).join('')||'<p class="subtle">Nothing to salvage.</p>'}</div>`;}
 return `<div class="tabs smith-tabs" role="tablist">${SMITH_TABS.filter(([k])=>tabs.includes(k)).map(([k,l])=>`<button role="tab" aria-selected="${tab===k}" class="${tab===k?'active':''}" data-smith-tab="${k}" title="${esc(SMITH_TAB_SUB[k]||'')}">${l}<small class="tab-sub">${esc(SMITH_TAB_SUB[k]||'')}</small></button>`).join('')}<span class="tag">◆ ${s.gold} gold</span></div>
 ${/* oct25-followups2: every tab opens with one plain line saying what it is for (it used to show on the first visit only, beside the hero) */''}<p class="smith-tab-help">${esc(SMITH_TAB_HELP[tab]||'')}</p>${nextUpgradeHTML(s,hero,{buy:tab==='buy'})}<div class="smith-stock" data-tab="${tab}" role="region" aria-label="${esc(SMITH_TABS.find(t=>t[0]===tab)[1])}" tabindex="0">${body}</div>${tab==='buy'||tab==='craft'?`<p class="subtle gear-words">${esc(GEAR_WORDS)}</p>`:''}${matsHTML(s)}`;}
/* improve20-t-oct31 #14: the Buy tab's three groups for this hero. up: stronger worn now, with no set broken: a gain with no loss
   (gear-guidance.js realGain, "Upgrade") or more gained than lost in damage, toughness and speed together ("Stronger overall"), open
   and affordable first, then by size of gain; side: trades one number for another and comes out behind; rest: worn, owned without a
   gain, or no better anywhere. Groups keep the stock's chapter order inside them. */
/* improve20-r14b-nov3 #4: x is dominated when another piece y of the same slot, open or already owned, costs no more and is at least as good for this
   hero in damage, toughness and speed (combatChange, the badge judge's numbers), and is cheaper or better somewhere. Owned x is never dominated (it is
   free to wear). Lead review: a set or trick piece is never dominated, since damage, toughness and speed leave out its set bonus or trick. -> y or null */
export const DOM_EPS=1e-3;
export function gearDominated(x,all){if(!x?.d||x.owned||x.it?.set||x.it?.trick)return null;const ks=['damage','toughness','speed'];return all.find(y=>y!==x&&y.d&&y.it.slot===x.it.slot&&(y.owned||y.open)&&(y.owned?0:y.it.shop)<=x.it.shop&&ks.every(k=>y.d[k]>=x.d[k]-DOM_EPS)&&((y.owned?0:y.it.shop)<x.it.shop||ks.some(k=>y.d[k]>x.d[k]+DOM_EPS))&&!(y.owned&&ks.every(k=>Math.abs(y.d[k])<DOM_EPS)&&ks.some(k=>x.d[k]>DOM_EPS)))||null;}
export function smithBuyOrder(s,hero,items){const g=s.gear,worn=wornOf(s,hero),out={up:[],side:[],rest:[]};
 for(const it of items){const owned=!!g.owned[it.id],lock=shopLock(s,it.id),x={it,owned,lock,open:!lock,afford:(s.gold||0)>=it.shop};
  if(worn[it.slot]===it.id){x.grp=2;x.d={damage:0,toughness:0,speed:0};out.rest.push(x);continue;}
  /* improve20-r8a-nov1 #1: an upgrade is what the one judge (gear-guidance.js realGain) says it is, a small trade included; "stronger overall"
     with a bigger loss is a side trade now, so the badge, the cap line, Equip and NEXT UPGRADE never disagree */
  const c=equipComparison(s,hero,it.id),gain=realGain(c),d=combatChange(c),breaks=setChanges(s,hero,it.id).some(ch=>!ch.up);x.d=d;
  if(!breaks&&gain>0){x.grp=0;x.trade=tradeText(c);x.strict=!x.trade;x.gain=gain;out.up.push(x);continue;}
  const better=Object.values(d).some(v=>v>1e-3);x.grp=owned||!better?2:1;(x.grp===1?out.side:out.rest).push(x);}
 /* improve20-r14b-nov3 #4 (audit11 #13, shot 02: Elderwood Mace at 600 for Attack 26-29 beside Dawnbringer at 350 for 26-30, both "Upgrade for you"):
    a piece another piece beats (gearDominated) folds into the rest, greyed, with no badge, and says what beats it */
 {const all=[...out.up,...out.side,...out.rest];for(const g of ['up','side']){out[g]=out[g].filter(x=>{const by=gearDominated(x,all);if(!by)return true;x.grp=2;x.dominated=by.it.name;out.rest.push(x);return false;});}}
 /* improve20-r11c-nov2 #3: affordable first: an owned upgrade (Equip now, free), then what the gold buys now, then open stock to save for, then locked */const rank=x=>!x.open?3:x.owned?0:x.afford?1:2;out.up.sort((a,b)=>rank(a)-rank(b)||b.gain-a.gain);out.side.sort((a,b)=>rank(a)-rank(b));
 return out;}
/* improve20-r18a-nov3 #3: a stronger piece is bought and worn in one tap now, so the help says so */
export const SMITH_TAB_HELP={buy:'Buy: new gear for your hero. Buy and wear puts a stronger piece on at once; anything else goes in your bag.',...SMITH_HELP};
/* the victory screen's Gear row: items found and materials banked */
/* oct24-veil-econ (playtest ch3, minor): the result's loot line read "Health potion · 1 health potion" when the first-clear
   potion and a secret's potion came in one run; every potion is one entry now ("2 health potions"), the other finds follow. */
/* guide-oct26 (oct26-midgame): a defeat said "Kept +8 gold" beside a Loot line of "20 gold" with nothing saying which was which; a
   secret spot's gold is paid on the spot, apart from the run's gold, and its line now says so. Amounts unchanged. */
/* ready2fix-oct30 #6: with the potion bag full, the first-clear potion and every secret potion that did not fit fold into ONE line,
   "Potion bag full: +16 gold for 2 potions" (amounts unchanged, game/potions.js BAG.overflow each); opts.quiet marks it as a small dim
   line once the save has seen it (main.js keeps s.settings.bagFullSeen). */
const BAGFULL=/^Potion bag full \(\d+ of \d+\): \+(\d+) gold instead$/;
/* improve20-r10a-nov2 (round 10 item 15): opts.secretGold false leaves out the "+N extra gold from a secret spot" lines (a defeat card shows them only the first time; the gold is paid all the same) */
export function resultLoot(st,opts={}){const pots=(st?.loot||[]).filter(x=>/^health potion$/i.test(x)).length+(st?.secrets||[]).filter(x=>x.kind==='potion').reduce((n,x)=>n+(x.n|0||1),0),
 sold=[...(st?.loot||[]).map(x=>BAGFULL.exec(x)).filter(Boolean).map(m=>+m[1]),...(st?.secrets||[]).filter(x=>x.kind==='bagfull').map(x=>x.n|0)],gold=sold.reduce((a,b)=>a+b,0),n=Math.max(sold.length,Math.round(gold/BAG.overflow)),
 rest=[...(st?.loot||[]).filter(x=>!/^health potion$/i.test(x)&&!BAGFULL.test(x)).map(x=>({icon:'potion',label:x})),...(st?.secrets||[]).filter(x=>x.kind!=='potion'&&x.kind!=='bagfull'&&!(opts.secretGold===false&&x.kind==='gold')).map(x=>({icon:'chest',label:x.kind==='gold'?`+${x.n} extra gold from a secret spot`:x.label}))];
 return [...(pots?[{icon:'potion',label:`${pots} health potion${pots>1?'s':''}`}]:[]),...rest,...(sold.length?[{icon:'potion',label:`Potion bag full: +${gold} gold for ${n} potion${n>1?'s':''}`,bagfull:true,quiet:!!opts.quiet}]:[])];}
export function lootHTML(gear=[],mats={},s=null){const items=gear.map(id=>ITEM[id]).filter(Boolean),m=Object.entries(mats||{}).filter(([,n])=>n>0);if(!items.length&&!m.length)return '';
 /* with the save, a set piece says how far its set has come: "Bog King's set 3/3" */
 const setNote=it=>it.set&&s?.gear?` <small class="gear-loot-set">· ${esc(SETS[it.set].name)} set ${SET_PIECES[it.set].filter(k=>s.gear.owned[k]).length}/3</small>`:'';
 return `<div class="level-loot level-gear"><span class="level-loot-label">${items.length?"Gear":"Materials"}</span>${items.map(it=>`<span class="level-loot-item gear-loot" hidden style="--rar:${rarityOf(it.rarity).color}">${gearIcon(it.id,32)}<span>${esc(it.name)} <small style="color:${rarityOf(it.rarity).color}">${rarPips(it.rarity)} (${rarityOf(it.rarity).name})</small>${setNote(it)}</span>${s&&betterPickup(s,it.id)?`<button type="button" class="primary" data-loot-equip="${it.id}" aria-label="Equip ${esc(it.name)} now">Equip now</button>`:''}</span>`).join('')}${items.length&&m.length?'<span class="level-loot-label">Materials</span>':''}${m.map(([k,n])=>`<span class="level-loot-item" hidden>${matIcon(k,28)}<span>${n} × ${esc(MATS[k].name)}</span></span>`).join('')}</div>`;}
export {SLOTS,SLOT_NAMES,ITEM,wornOf,bossBeaten,SCHOLAR_AT};
