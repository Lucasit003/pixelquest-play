/* Presentation rules use the same final stats as combat, including caps and set bonuses. */
import {ITEMS,ITEM,MATS,shopOpen,fits,wornOf,MAX_STARS,FINISHES,finishFits,wornBy,SETS,SET_PIECES,statText,recipeOpen,recipe,canAfford} from '../game/gear.js';
import {stats} from '../game/math.js';
import {equipmentDPS} from '../game/power.js';
import {CLASSES} from '../game/data.js';
export function equipComparison(s,hero,id){const it=ITEM[id],before=stats({...s,hero},CLASSES[hero]),after=stats({...s,hero,gear:{...s.gear,worn:{...s.gear.worn,[hero]:{...wornOf(s,hero),[it.slot]:id}}}},CLASSES[hero]),key=it.slot==='weapon'?'basic':'def';const b=Math.round(before[key]*10)/10,a=Math.round(after[key]*10)/10;return {before:b,after:a,gain:a-b,label:key==='basic'?'Attack':'Defence',beforeStats:before,afterStats:after};}
/* oct24-veil-econ (playtest ch3, minor): NEXT UPGRADE never offered the Celestial Arc over a 3-star Thornstring, because the stars had
   lifted Thornstring's Strong hit chance a sliver above the Arc's and the hint refused any stat that went down, while the card
   showed the Arc's much bigger Strength. The hint, the card's verdict and the Equip-now button now share one comparison, in
   the numbers combat really uses: expected damage (game/power.js equipmentDPS, the same measure the 40% damage bound uses, so
   Strength, Strong hits, ability wait and tricks all count), toughness (Health x (100 + 3 x Defence), as math.js caps it) and
   Speed. An upgrade loses none of the three and gains in at least one; the biggest total gain goes first. */
/* LOSS: a dip under half a percent is rounding at the limits (math.js rounds Health), not a loss; cards show no line under it either */
const ehpOf=x=>(x.hp||0)*(100+3*(x.def||0)),rel=(a,b)=>b>0?a/b-1:0,EPS=1e-3,LOSS=.005;
export function combatChange(c){const B=c.beforeStats,A=c.afterStats;return {damage:rel(equipmentDPS(A),equipmentDPS(B)),toughness:rel(ehpOf(A),ehpOf(B)),speed:rel(A.speed||0,B.speed||0)};}
/* improve20-r8a-nov1 #1 (audit7 d1): ONE upgrade judge. The smith's "Best upgrade" badge read "stronger overall" while this test refused any
   piece that lost more than half a percent anywhere, so a +14% damage sword that cost 2% Speed (the Swift Finish on the old one) was badged
   "Best upgrade" under a line that said the gear was at its limit, and NEXT UPGRADE, Equip and the goal never offered it. Now a small trade
   counts: every loss at most TRADE (3%) and the gains at least TRADE_RATIO (2) times the losses. Everything reads this one verdict: the
   badge, the cap line, Equip, NEXT UPGRADE, the gold chip's next buy and the goal; tradeText says the trade on the card. */
export const TRADE=.03,TRADE_RATIO=2;
const STAT_WORD={damage:'damage',toughness:'toughness',speed:'speed'};
export function judge(c){const d=combatChange(c),e=Object.entries(d),ups=e.filter(([,x])=>x>EPS),downs=e.filter(([,x])=>x<-LOSS),up=ups.reduce((t,[,x])=>t+x,0),down=-downs.reduce((t,[,x])=>t+x,0),sum=e.reduce((t,[,x])=>t+x,0);
 const ok=ups.length>0&&downs.every(([,x])=>x>=-TRADE)&&up>=TRADE_RATIO*down&&sum>EPS;return {ok,value:ok?sum:0,ups,downs,change:d};}
export const realGain=c=>judge(c).value;
const pctWord=v=>Math.max(1,Math.round(Math.abs(v)*100));
/* "+14% damage, -2% speed" for a judged upgrade that trades something away; '' when nothing is lost */
export function tradeText(c){const j=judge(c);if(!j.ok||!j.downs.length)return '';return [...j.ups.sort((a,b)=>b[1]-a[1]),...j.downs].map(([k,v])=>`${v>0?'+':'-'}${pctWord(v)}% ${STAT_WORD[k]}`).join(', ');}
const best=xs=>xs.map(x=>({...x,value:realGain(x)})).filter(x=>x.value>0).sort((a,b)=>b.value-a.value||a.cost-b.cost||a.id.localeCompare(b.id))[0]||null;
/* A shop buy first; with none, a craft the child can afford now (playtest ch2: from m1 to m7 the line stayed empty while a Thornwarden Helm,
   a plain upgrade, sat craftable on the Craft tab). A craft that breaks a worn set's bonus is never suggested. */
/* improve20-r8a-nov1 #1: shop buys and crafts whose materials and gold are in hand are ranked together (crafts came only when no shop piece
   helped, and most callers dropped them), so "3 Forge Slag + 450 gold: Forgeplate" is offered as the next buy when it is the best step */
export function affordableUpgrade(s,hero=s.hero){return best([...ITEMS.filter(it=>!s.gear.owned[it.id]&&shopOpen(s,it.id)&&fits(hero,it.id,it.slot)&&s.gold>=it.shop&&!setChanges(s,hero,it.id).some(c=>!c.up)).map(it=>({id:it.id,cost:it.shop,...equipComparison(s,hero,it.id)})),
 ...ITEMS.filter(it=>!s.gear.owned[it.id]&&!it.shop&&!it.scholar&&fits(hero,it.id,it.slot)&&recipeOpen(s,it.id)&&canAfford(s,recipe(it.id))&&!setChanges(s,hero,it.id).some(c=>!c.up)).map(it=>({id:it.id,kind:'craft',cost:recipe(it.id).gold||0,mats:recipe(it.id).mats||{},...equipComparison(s,hero,it.id)}))]);}
/* improve20-x-nov1 #20a (audit4 #4): "gear at the cap" for the next goal. The best real gain any open shop piece could still give this hero
   (affordable or not) is under GEAR_SMALL (+3-6% at a level-18 save), so gold has nothing in the smithy worth saving for. Cached on what it
   reads (hero, hero level, worn and owned gear, levels won), since the HUD asks four times a second. */
export const GEAR_SMALL=.08;let capKey='',capVal=false;
export function gearAtCap(s,hero=s?.hero){if(!s?.gear||!CLASSES[hero])return false;const k=[hero,s.level|0,JSON.stringify(wornOf(s,hero)),Object.entries(s.gear.owned||{}).map(([id,o])=>id+(o?.stars|0)+(o?.finish||'')).join(','),Object.values(s.levels||{}).filter(r=>r?.done).length,JSON.stringify(s.gear.mats||{})].join('|');if(k===capKey)return capVal;
 /* improve20-r8a-nov1 #1: the same judge as the badge (a set it would break rules a piece out there too), and a craft whose materials are
    in hand counts like a shop piece, so the smith never says "at its limit" over a +34% Craft card */
 const matsOwned=id=>Object.entries(recipe(id)?.mats||{}).every(([m,n])=>(s.gear.mats?.[m]|0)>=n);
 const top=Math.max(0,...ITEMS.filter(it=>!s.gear.owned[it.id]&&fits(hero,it.id,it.slot)&&(it.shop>0?shopOpen(s,it.id):!it.scholar&&recipeOpen(s,it.id)&&matsOwned(it.id))&&!setChanges(s,hero,it.id).some(c=>!c.up)).map(it=>realGain(equipComparison(s,hero,it.id))));capKey=k;return capVal=top<GEAR_SMALL;}
export function smithTabs(s){const owned=Object.entries(s.gear.owned).filter(([id])=>ITEM[id]),earned=s.settings?.smithTabs||[],advanced=owned.filter(([id])=>!ITEM[id].scholar&&ITEM[id].shopTier!==0),used=owned.some(([,o])=>o.stars||o.finish),crafted=advanced.some(([id])=>!ITEM[id].shop);return ['buy',...['craft','stars','finish','salvage'].filter(k=>earned.includes(k)||(k==='craft'?(Object.values(s.gear.mats).some(n=>n>0)||crafted||used):k==='stars'?(advanced.some(([,o])=>o.stars<MAX_STARS)||used):k==='finish'?(advanced.some(([id])=>Object.keys(FINISHES).some(f=>finishFits(id,f)))||used):advanced.some(([id])=>!wornBy(s,id).length)||crafted))];}
export const SMITH_HELP={craft:'Craft: turn materials from your adventures into gear.',stars:'Stars: make an item stronger with gold and materials.',finish:'Finish: give one item an extra bonus, such as more health.',salvage:'Salvage: break down gear you no longer need to get gold and materials back.'};
export function firstHelp(s,key,text){s.settings??={};s.settings.gearHelp??={};if(s.settings.gearHelp[key])return '';s.settings.gearHelp[key]=true;return text;}

/* Offer a found item only when its final combat stats improve without sacrificing another stat or set bonus. */
export function betterPickup(s,id,hero=s.hero){const it=ITEM[id];if(!it||!s.gear.owned[id]||!fits(hero,id,it.slot)||wornOf(s,hero)[it.slot]===id)return false;if(setChanges(s,hero,id).some(c=>!c.up))return false;const c=equipComparison(s,hero,id);return realGain(c)>0;}
export const adventureSkillsReady=s=>!!(s.delve?.runs||s.delve?.xp||s.skills?.crafting);

/* oct24-progress (playtest r3): the Wayfarer's Coat card showed only a red ▼ although it finished the set, and wearing the
   Waders hid the Wayfarer's bonus it switched off. What equipping `id` does to every worn set: [{up, text}], one line per
   bonus switched on (up) or off. The 2-piece stats are already in the numbers; the line names where they come from. */
export function setChanges(s,hero,id){const it=ITEM[id];if(!it)return [];const w=wornOf(s,hero),after={...w,[it.slot]:id},n=(worn,k)=>SET_PIECES[k].filter(p=>Object.values(worn).includes(p)).length,out=[];
 for(const [k,S] of Object.entries(SETS)){const a=n(w,k),b=n(after,k);if(a===b)continue;const two=Object.entries(S.two).map(([st,v])=>statText(st,v)).join(', ');
  if(b>a){if(b>=3&&a<3)out.push({up:true,text:`Completes ${S.name} set (3/3): ${S.three.text}`});else if(b>=2&&a<2)out.push({up:true,text:`${S.name} set 2/3: ${two}`});}
  else{if(a>=3&&b<3)out.push({up:false,text:`Breaks ${S.name} set (${a} → ${b}): loses “${S.three.text}”`});if(a>=2&&b<2)out.push({up:false,text:`Breaks ${S.name} set (${a} → ${b}): loses ${two}`});}}
 return out;}

/* improve20-r8a-nov1 #1 (audit7 d1): the result card's Forge Slag, Imp Horn and Magma Core never said what they were for. A material from this
   run that completes a recipe (short of it before the run, enough now) gets one line: "3/3 Forge Slag: craft Forgeplate at Brannoc". runMats
   is what the run banked ({mat:n}); the save already holds it. A recipe the one judge calls an upgrade is named first, then a set to collect.
   Reads only; crafting still happens at the smith. */
export function recipeChips(s,runMats,hero=s?.hero,max=1){if(!s?.gear||!runMats)return [];const have=s.gear.mats||{},out=[],seen=new Set();
 const rows=ITEMS.filter(it=>!it.shop&&!it.scholar&&!s.gear.owned[it.id]&&fits(hero,it.id,it.slot)&&recipeOpen(s,it.id)).map(it=>{const r=recipe(it.id),need=Object.entries(r?.mats||{});if(!need.length||!need.every(([m,n])=>(have[m]|0)>=n))return null;
  const done=need.find(([m,n])=>(runMats[m]|0)>0&&(have[m]|0)-(runMats[m]|0)<n);if(!done)return null;let gain=0;try{gain=setChanges(s,hero,it.id).some(c=>!c.up)?0:realGain(equipComparison(s,hero,it.id));}catch{gain=0;}
  return {id:it.id,mat:done[0],need:done[1],name:it.set?SETS[it.set].name:it.name,gain};}).filter(Boolean).sort((a,b)=>b.gain-a.gain);
 for(const x of rows){if(seen.has(x.name))continue;seen.add(x.name);out.push({...x,text:`${x.need}/${x.need} ${MATS[x.mat]?.name||x.mat}: craft ${x.name} at Brannoc`});if(out.length>=max)break;}
 return out;}
