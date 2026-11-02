/* Your Shadow takes the hero's shape (shadow-boss-nov1). v3 Mirror Woods promises "You beat your own shadow!", so the
   boss (ENEMY_TYPES 'shadow-twin') is drawn from the hero's own PixelLab character (art/enemies/pl-shadow-<class>, imported by
   tools/pixellab-shadow.mjs, same frame counts, fps, contact frames, width and floor shadow as the fallback), named for the
   class on the intro card, and its Echo takes the shape of the hero's first two abilities until the hero casts one of their
   own. Only the look and the echo's shape change: health, damage and every timing stay the fallback's. One body per class:
   the female body (s.heroBody) meets the same shadow. Pure. */
import {CLASSES} from './data.js';
import {ABILITIES} from './abilities.js';
export const SHADOW_KEY='shadow-twin',SHADOW_FALLBACK='pl-shadow-twin';
export const SHADOW_SPRITES={warrior:'pl-shadow-warrior',mage:'pl-shadow-mage',rogue:'pl-shadow-rogue',ranger:'pl-shadow-ranger',paladin:'pl-shadow-paladin',berserker:'pl-shadow-berserker',summoner:'pl-shadow-summoner'};
/* the sprite for a save's hero (body is accepted for a later female set; today both bodies share one shadow) */
export function shadowSprite(hero,body){void body;return SHADOW_SPRITES[hero]||SHADOW_FALLBACK;}
/* the shapes the Echo borrows before the hero has cast: the class's first two abilities, as boss-moves.js echoAttack reads them */
export function shadowEchoKit(hero){return (ABILITIES[hero]||[]).slice(0,2).map(a=>({id:a.id,name:a.name,kind:a.kind,radius:a.radius}));}
export function shadowIntro(hero){const n=CLASSES[hero]?.name;return n?`A shadow ${n} steps out of the mist!`:null;}
/* a spawnable definition dressed as the hero's shadow; any other enemy comes back untouched */
export function shadowDef(def,save){if(!def||def.key!==SHADOW_KEY||!save)return def;const hero=save.hero,sprite=shadowSprite(hero,save.heroBody);if(sprite===SHADOW_FALLBACK)return def;
 return {...def,sprite,intro:shadowIntro(hero)||def.intro,echoKit:shadowEchoKit(hero),shadowOf:hero};}
