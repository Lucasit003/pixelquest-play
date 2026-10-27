/* Supplementary, original PixelLab locomotion. Base atlases retain every combat pose and weapon anchor. */
/* Every class (15 Oct): the Warrior's walks north/south; the others carry standing front/back views only, for the creator
   and the class select (heroRenderPose never turns the town hero without a walk row). */
export const HERO_DIRECTION_ATLASES=Object.freeze(Object.fromEntries(['warrior','mage','rogue','ranger','paladin','berserker','summoner'].map(c=>[c,`hero-${c}-directions-v1`])));
/* Body variants (14 Oct): art/heroes/<class>-<body>/ baked as hero-<class>-<body> (tools/pixellab-hero.mjs <class>-f),
   the same class design, moves and timings on another body. A save picks one per class with s.heroBody[class]='f';
   anything else, or a class without that variant, keeps the original atlas. The creator UI is a later job. */
export const HERO_BODIES=Object.freeze({warrior:['f'],mage:['f'],ranger:['f'],rogue:['f'],paladin:['f'],berserker:['f'],summoner:['f']});
const BODY_DIRECTION_ATLASES=Object.freeze(Object.fromEntries(Object.keys(HERO_BODIES).map(c=>[c+'-f',`hero-${c}-f-directions-v1`])));
let bodies={};
/* main.js hands over s.heroBody whenever a save is loaded or changed */
export function setHeroBodies(map){bodies={};if(map&&typeof map==='object')for(const [k,v] of Object.entries(map))if(HERO_BODIES[k]?.includes(v))bodies[k]=v;return bodies;}
export function heroBody(look){return bodies[look]||null;}
/* 'warrior' or 'warrior-f': the art key of a class under the chosen (or a given) body */
export function heroArtKey(look,body=heroBody(look)){return body&&HERO_BODIES[look]?.includes(body)?look+'-'+body:look;}
export function heroDirectionAtlas(look,body){const k=heroArtKey(look,body);return k===look?HERO_DIRECTION_ATLASES[look]||null:BODY_DIRECTION_ATLASES[k]||null;}
export function heroSpriteIds(look,body){const dir=heroDirectionAtlas(look,body);return ['hero-'+heroArtKey(look,body),...(dir?[dir]:[])];}
/* every atlas a class can show, all bodies (the loader may release them between scenes) */
export function allHeroSpriteIds(look){return [...heroSpriteIds(look,null),...(HERO_BODIES[look]||[]).flatMap(b=>heroSpriteIds(look,b))];}
