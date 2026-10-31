/* Presentation rules use the same final stats as combat, including caps and set bonuses. */
import {ITEMS,ITEM,shopOpen,fits,wornOf,MAX_STARS,FINISHES,finishFits,wornBy,SETS,SET_PIECES,statText,recipeOpen,recipe,canAfford} from '../game/gear.js';
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
export const realGain=c=>{const d=combatChange(c),v=Object.values(d);return v.every(x=>x>=-LOSS)&&v.some(x=>x>EPS)?v.reduce((t,x)=>t+x,0):0;};
const best=xs=>xs.map(x=>({...x,value:realGain(x)})).filter(x=>x.value>0).sort((a,b)=>b.value-a.value||a.cost-b.cost||a.id.localeCompare(b.id))[0]||null;
/* A shop buy first; with none, a craft the child can afford now (playtest ch2: from m1 to m7 the line stayed empty while a Thornwarden Helm,
   a plain upgrade, sat craftable on the Craft tab). A craft that breaks a worn set's bonus is never suggested. */
export function affordableUpgrade(s,hero=s.hero){return best(ITEMS.filter(it=>!s.gear.owned[it.id]&&shopOpen(s,it.id)&&fits(hero,it.id,it.slot)&&s.gold>=it.shop).map(it=>({id:it.id,cost:it.shop,...equipComparison(s,hero,it.id)})))
 ||best(ITEMS.filter(it=>!s.gear.owned[it.id]&&!it.shop&&!it.scholar&&fits(hero,it.id,it.slot)&&recipeOpen(s,it.id)&&canAfford(s,recipe(it.id))&&!setChanges(s,hero,it.id).some(c=>!c.up)).map(it=>({id:it.id,kind:'craft',cost:recipe(it.id).gold||0,mats:recipe(it.id).mats||{},...equipComparison(s,hero,it.id)})));}
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
