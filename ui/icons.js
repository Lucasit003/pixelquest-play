/* The icon strip: Shikashi's Fantasy Icons Pack v2 (CC BY 4.0, shikashipx), cut into a 32 px strip
   by tools/bake-ui-skin.py, except the names in OWN (our PixelLab icons). icon(name) returns markup; CSS (.ico) scales it by whole pixels. */
import {ICON_NAMES} from './icon-names.js';
import {ABILITY_ICON_IDS} from './ability-icon-names.js';
import {JEWEL_ICON_IDS} from './jewel-icon-names.js';
const JW=Object.fromEntries(JEWEL_ICON_IDS.map((n,i)=>[n,i]));
const AB=Object.fromEntries(ABILITY_ICON_IDS.map((n,i)=>[n,i]));
const IDX=Object.fromEntries(ICON_NAMES.map((n,i)=>[n,i]));
export const hasIcon=n=>n in IDX;
/* rewards-oct25: the reward and potion cells are our own PixelLab icons (ui/skin/rewards, tools/bake-rewards-oct25.py),
   one 32 px file each, drawn by the same .ico rule at --i:0; the rest of the strip is still the pack's. */
/* uiicons-oct25: the profile chips, Gear/Bestiary/Journal books, the subject books, quill, map, crossed swords and the leaf
   are ours too (ui/skin/uiicons, tools/bake-uiicons-oct25.py); sparkle reuses the XP sparkle. Values are paths under ui/skin. */
/* packicons3-oct25: the HUD hourglass and up arrow, the turn-your-device arrows and the tent are ours (ui/skin/packicons3,
   tools/bake-packicons3-oct25.py); the math and coding books there are the uiicons books with a 1 px outline and shading.
   gearImgIcon draws a gear item's own PixelLab icon file the same way (the stats Gear rows, the smith fallback). */
const OWN={potion:'rewards/potion','potion-green':'rewards/potion-green',coin:'rewards/gold',coins:'rewards/coins',chest:'rewards/chest',key:'rewards/key',scroll:'rewards/scroll',
 sparkle:'rewards/xp','book-open':'uiicons/book-open','book-arcane':'uiicons/book-arcane','book-blue':'uiicons/book-blue','book-green':'uiicons/book-green',swords:'uiicons/swords',leaf:'uiicons/leaf',quill:'uiicons/quill',map:'uiicons/map',
 hourglass:'packicons3/hourglass',up:'packicons3/up',rotate:'packicons3/rotate',tent:'packicons3/tent','book-blue':'packicons3/book-blue','book-green':'packicons3/book-green'};
/* the file for a strip name we drew ourselves, or null (the Library's .edu-ico reads it too) */
export const ownIconURL=name=>OWN[name]?`ui/skin/${OWN[name]}.png`:null;
export function gearImgIcon(file,{size=32}={}){return `<i class="ico" style="--i:0;--s:${size}px;background-image:url(ui/skin/gear/${file}.png)" aria-hidden="true"></i>`;}
export function icon(name,{size=32,label=''}={}){
 const i=IDX[name]??IDX.sparkle,own=ownIconURL(IDX[name]===undefined?'sparkle':name);
 return `<i class="ico" style="--i:${own?0:i};--s:${size}px${own?`;background-image:url(${own})`:''}"${label?` role="img" aria-label="${String(label).replace(/"/g,'&quot;')}"`:' aria-hidden="true"'}></i>`;
}
/* An ability's icon follows what it does (kind), then its element, then the class's fighting style. */
const ELEMENT={fire:'flame-skull',ice:'snow',storm:'lightning',poison:'poison',holy:'skill-sun',nature:'leaf'};
const KIND={buff:'skill-aura',aoe:'skill-ring',chain:'lightning',mark:'skill-portal',heal:'heart',aura:'skill-sun',totem:'skill-ward'};
const MELEE={warrior:'skill-blade',berserker:'skill-axes',rogue:'skill-claw',paladin:'skill-bulwark',ranger:'skill-volley',mage:'skill-burst',summoner:'skill-bone'};
const SHOT={ranger:'skill-volley',mage:'skill-shard',summoner:'skill-portal',rogue:'skill-gale'};
export function abilityIconName(a,hero=''){
 if(!a)return 'lock';
 if(a.heal)return 'heart';
 if(a.shield||a.guardSpend)return 'skill-guard';
 if(ELEMENT[a.element])return ELEMENT[a.element];
 if(a.aheadUnits||a.speedBuff)return 'skill-dash';
 if(KIND[a.kind])return KIND[a.kind];
 if(a.kind==='projectile')return SHOT[hero]||'skill-gale';
 return MELEE[hero]||'skill-blade';
}
/* every ability has its own PixelLab icon (9 Oct, tools/bake-ability-icons.mjs); the shared pack icon is the fallback */
export function abilityIcon(a,hero,size=32){if(a&&a.id in AB)return `<i class="ico ico-ab" style="--i:${AB[a.id]};--s:${size}px" aria-hidden="true"></i>`;return a?icon(abilityIconName(a,hero),{size}):'<i class="ico ico-empty" aria-hidden="true"></i>';}
export const SUBJECT_ICON={math:'book-blue',cs:'book-green',science:'book-arcane',geography:'map',history:'scroll',language:'quill',finance:'coins'};
export const WEAPON_ICON={sword:'sword',staff:'staff',dagger:'dagger',bow:'bow',hammer:'hammer',axe:'axe',focus:'focus'};
/* Static markup asks for an icon with data-icon="name" (index.html, mobile prompts); this fills them. */
export function fillIcons(root=globalThis.document){root?.querySelectorAll?.('[data-icon]:empty').forEach(el=>{el.innerHTML=icon(el.dataset.icon,{size:+(el.dataset.size||32)});});}
/* a jewel's PixelLab icon (9 Oct, tools/bake-jewel-icons.mjs) */
export function jewelIcon(id,size=32){return id in JW?`<i class="ico ico-jw" style="--i:${JW[id]};--s:${size}px" aria-hidden="true"></i>`:'<i class="ico ico-empty" aria-hidden="true"></i>';}
