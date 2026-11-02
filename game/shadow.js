/* Your Shadow takes the hero's shape (shadow-boss-nov1). v3 Mirror Woods promises "You beat your own shadow!", so the
   boss (ENEMY_TYPES 'shadow-twin') is drawn from the hero's own PixelLab character (art/enemies/pl-shadow-<class>, imported by
   tools/pixellab-shadow.mjs, same frame counts, fps, contact frames, width and floor shadow as the fallback), named for the
   class on the intro card, and its Echo takes the shape of the hero's first two abilities until the hero casts one of their
   own. Only the look and the echo's shape change: health, damage and every timing stay the fallback's.
   shadow-female-nov2: each body meets its own shadow. A female body (s.heroBody[class] === 'f') wears pl-shadow-<class>-f, made
   the same way from the female hero's own PixelLab character with the same contract as the male one; a body without its own
   set (or the male body) wears the male shadow, and an unknown hero the fallback pl-shadow-twin. The level preload and the
   Mirror Split copies read the same shadowDef, so they wear the body's shadow too. Pure. */
import {CLASSES} from './data.js';
import {ABILITIES} from './abilities.js';
export const SHADOW_KEY='shadow-twin',SHADOW_FALLBACK='pl-shadow-twin';
export const SHADOW_SPRITES={warrior:'pl-shadow-warrior',mage:'pl-shadow-mage',rogue:'pl-shadow-rogue',ranger:'pl-shadow-ranger',paladin:'pl-shadow-paladin',berserker:'pl-shadow-berserker',summoner:'pl-shadow-summoner'};
export const SHADOW_SPRITES_F={warrior:'pl-shadow-warrior-f',mage:'pl-shadow-mage-f',rogue:'pl-shadow-rogue-f',ranger:'pl-shadow-ranger-f',paladin:'pl-shadow-paladin-f',berserker:'pl-shadow-berserker-f',summoner:'pl-shadow-summoner-f'};
/* the sprite for a save's hero and body; body is the body letter ('f') or a save's whole heroBody map ({class:'f'}) */
export function shadowSprite(hero,body){const b=body&&typeof body==='object'?body[hero]:body;return (b==='f'&&SHADOW_SPRITES_F[hero])||SHADOW_SPRITES[hero]||SHADOW_FALLBACK;}
/* the shapes the Echo borrows before the hero has cast: the class's first two abilities, as boss-moves.js echoAttack reads them */
export function shadowEchoKit(hero){return (ABILITIES[hero]||[]).slice(0,2).map(a=>({id:a.id,name:a.name,kind:a.kind,radius:a.radius}));}
export function shadowIntro(hero){const n=CLASSES[hero]?.name;return n?`A shadow ${n} steps out of the mist!`:null;}
/* a spawnable definition dressed as the hero's shadow; any other enemy comes back untouched */
export function shadowDef(def,save){if(!def||def.key!==SHADOW_KEY||!save)return def;const hero=save.hero,sprite=shadowSprite(hero,save.heroBody);if(sprite===SHADOW_FALLBACK)return def;
 return {...def,sprite,intro:shadowIntro(hero)||def.intro,echoKit:shadowEchoKit(hero),shadowOf:hero};}
