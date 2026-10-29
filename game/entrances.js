/* How an enemy arrives (owner, 8 Oct: "a skeleton coming out of the ground or a goblin coming out of a tent").
   An enemy with an entrance appears inside the arena instead of walking in from the edge, and for its entrance time it
   neither acts nor can be hit (combat.js), so the show never costs the player anything. Kept short so fights flow.
   rise: claws (or sprouts) up out of the ground   drop: falls from the treetops   tent: bursts out of a tent   fade: shimmers in */
export const ENTRANCES={
 skeleton:'rise','skeleton-warrior':'rise','skeleton-mage':'rise','fire-skeleton':'rise','executioner-spirit':'fade',
 slime:'drop','magma-slime':'drop',sporeling:'rise','bandit-thug':'drop',thornling:'rise','pebble-golem':'rise',wisp:'fade',shade:'fade',imp:'fade',cultist:'fade',
 goblin:'tent','orc-rogue':'tent','goblin-king':'tent','skeleton-king':'rise',
};
export const ENTRANCE_TIME={rise:.9,drop:.7,tent:.6,fade:.7,vine:1.25};
/* Tents only stand in goblin country; elsewhere a goblin walks in like everyone else. */
const TENT_BIOMES=/camp|warcamp|gate|road/;
/* owner, 9 Oct: "some goblins swing through on a vine from the forest and have them like jump on the field": in goblin
   country every third of them (the i-th of a group, i%3===1) swings in from the treeline instead of leaving a tent */
const VINE_KEYS=new Set(['goblin','orc-rogue']);
export const entranceFor=(key,biome='',i=0)=>{const k=ENTRANCES[key];if(k==='tent'&&!TENT_BIOMES.test(biome))return null;return k==='tent'&&VINE_KEYS.has(key)&&i%3===1?'vine':k||null;};
/* the tent an entrance stands at the back of the arena: the camp's own Epic RPG World tents (tools/bake-camp-props.mjs),
   so they match the stage around them (owner, review board 01 and 09: the old ones didn't); the chief gets the red one */
/* the Orc Warcamp has its own hide tents (looks-oct29, PixelLab, tools/bake-level-identity.mjs) so it never reads as Goblin Camp again */
export const TENT_SPRITE=(boss,i=0,biome='')=>/warcamp/.test(biome)?(boss?'prop-orc-tent-b':['prop-orc-tent-a','prop-orc-tent-b'][i%2]):boss?'prop-camp-tent-a':['prop-camp-tent-b','prop-camp-tent-a'][i%2];
export const VINE_SPRITE='fx-vine';
