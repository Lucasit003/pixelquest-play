// Stage biomes: one Tiled map per key (art/tiled/levels/<key>.tmx, baked to dist/assets/biomes/<key>/). This file only
// names them and sets the two code-made visuals Rule 0 allows: a subtle colour grade (time of day) and a vignette.
// Pure data, no DOM. Unknown keys fall back by family prefix (forest-/lava-/mystic-).
import {stageMap} from '../../game/stage-maps.js';
const g = (c, a, op = 'soft-light') => ({c, a, op});
export const BIOMES = {
  'forest-arena': {chapter: 'elderwood', name: 'Woodland Arena', time: 'afternoon', grade: g('#ffd890', .06), vignette: .22, fallback: '#3f6a3a'},
  'lava-arena': {chapter: 'emberkeep', name: 'Cinder Pit', time: 'embers', grade: g('#ff7040', .08), vignette: .28, fallback: '#33262a'},
  'mystic-arena': {chapter: 'veilmoor', name: 'Astral Ring', time: 'starlit', grade: g('#6a60c8', .10), vignette: .28, fallback: '#28284a'},
  'forest-gate': {chapter: 'elderwood', name: 'Thorns at the Gate', time: 'morning', grade: g('#fff0c8', .06), vignette: .24, fallback: '#3f6a3a'},
  'forest-road': {chapter: 'elderwood', name: 'Bandit Road', time: 'midday', grade: g('#fff0c0', .06), vignette: .22, fallback: '#3f6a3a'},
  'forest-camp': {chapter: 'elderwood', name: 'Goblin Camp', time: 'afternoon', grade: g('#ffd890', .10), vignette: .26, fallback: '#3f6a3a'},
  'forest-bog': {chapter: 'elderwood', name: 'Slime Bog', time: 'overcast', grade: g('#7fae9c', .16), vignette: .34, fallback: '#35553a'},
  'forest-warcamp': {chapter: 'elderwood', name: 'Orc Warcamp', time: 'dusk', grade: g('#ff8c50', .18), vignette: .34, fallback: '#4a4a30'},
  'forest-hollow': {chapter: 'elderwood', name: 'Minotaur Hollow', time: 'deep shade', grade: g('#3c6a60', .22), vignette: .42, fallback: '#2a3f30'},
  'forest-graveyard': {chapter: 'elderwood', name: 'Old Graveyard', time: 'night', grade: g('#3a4a8a', .34), vignette: .46, fallback: '#22303a'},
  'forest-grove': {chapter: 'elderwood', name: 'Shaman Grove', time: 'twilight', grade: g('#6a60c0', .20), vignette: .38, fallback: '#2c4040'},
  'forest-ruins': {chapter: 'elderwood', name: 'Ruined Watch', time: 'golden hour', grade: g('#ffb860', .16), vignette: .26, fallback: '#55603e'},
  'forest-keep': {chapter: 'elderwood', name: 'Thorn Keep', time: 'storm dusk', grade: g('#5a6478', .26), vignette: .42, fallback: '#38423a'},
  'forest-mire': {chapter: 'elderwood', name: 'Mushroom Mire', time: 'glowing dusk', grade: g('#8a6ab0', .18), vignette: .38, fallback: '#2e4234'},
  'lava-gate': {chapter: 'emberkeep', name: 'Ashen Gate', time: 'ash dusk', grade: g('#ff6a3a', .16), vignette: .40, fallback: '#3a2a26'},
  'lava-forge': {chapter: 'emberkeep', name: 'Cinder Forge', time: 'forge glow', grade: g('#ff8040', .18), vignette: .44, fallback: '#33262a'},
  'lava-bridge': {chapter: 'emberkeep', name: 'Magma Bridges', time: 'eruption', grade: g('#ff5a2a', .18), vignette: .42, fallback: '#3a2420'},
  'lava-barracks': {chapter: 'emberkeep', name: 'Ember Barracks', time: 'forge glow', grade: g('#ffc890', .30), vignette: .26, fallback: '#302624'},
  'lava-furnace': {chapter: 'emberkeep', name: 'Furnace Depths', time: 'cavern', grade: g('#ff5a2a', .22), vignette: .48, fallback: '#2a1e1e'},
  'lava-halls': {chapter: 'emberkeep', name: 'Obsidian Halls', time: 'cold fire', grade: g('#8a4a8a', .20), vignette: .48, fallback: '#2a2228'},
  'lava-throne': {chapter: 'emberkeep', name: 'Molten Throne', time: 'throne room', grade: g('#ff7040', .18), vignette: .46, fallback: '#2e2020'},
  'lava-wastes': {chapter: 'emberkeep', name: 'Ash Wastes', time: 'ashfall', grade: g('#c08868', .16), vignette: .36, fallback: '#4a3e34'},
  'mystic-shrine': {chapter: 'veilmoor', name: 'Drowned Shrine', time: 'moonlit', grade: g('#6a58c8', .22), vignette: .44, fallback: '#28284a'},
  'mystic-fen': {chapter: 'veilmoor', name: 'Glimmer Fen', time: 'violet mist', grade: g('#a070e0', .18), vignette: .40, fallback: '#2e2c48'},
  'mystic-mirror': {chapter: 'veilmoor', name: 'Mirror Woods', time: 'silver night', grade: g('#6a8ad0', .20), vignette: .42, fallback: '#26304a'},
  'mystic-ruins': {chapter: 'veilmoor', name: 'Starfall Ruins', time: 'starlit', grade: g('#5a58c0', .22), vignette: .44, fallback: '#2a2844'},
  'mystic-choir': {chapter: 'veilmoor', name: 'Hollow Choir', time: 'aurora night', grade: g('#3a88b8', .20), vignette: .42, fallback: '#1e2c40'},
  'mystic-gate': {chapter: 'veilmoor', name: 'Veil Gate', time: 'eclipse', grade: g('#8a48c0', .24), vignette: .48, fallback: '#24203a'},
  'mystic-abyss': {chapter: 'veilmoor', name: 'The Deep Below', time: 'abyssal glow', grade: g('#5a40c0', .28), vignette: .52, fallback: '#16142a'},
  'mystic-garden': {chapter: 'veilmoor', name: 'Moonlit Garden', time: 'moonlit', grade: g('#6a60c8', .20), vignette: .42, fallback: '#24304a'},
};
/* Older names, and the chapter names, so nothing resolves to the wrong look. */
export const ALIASES = {'lava-falls': 'lava-furnace', 'lava-dungeon': 'lava-barracks', 'mystic-crystal': 'mystic-abyss', 'mystic-sanctum': 'mystic-choir', 'mystic-marsh': 'mystic-fen', 'mystic-grove': 'mystic-garden',
  forest: 'forest-road', lava: 'lava-gate', mystic: 'mystic-shrine', elderwood: 'forest-road', emberkeep: 'lava-gate', veilmoor: 'mystic-shrine'};
const CHAPTER_OF = {forest: 'elderwood', lava: 'emberkeep', mystic: 'veilmoor'};
export const BIOME_KEYS = Object.keys(BIOMES);
/* Unknown keys fall back by prefix to a chapter biome picked by a stable hash of the key. */
export function biomeKey(key) {
  /* An arena without its bake keeps the original forest-opening fallback. */
  if (key?.endsWith('-arena') && !stageMap(key)) return biomeKey(null);
  if (key && BIOMES[key]) return key;
  if (key && ALIASES[key]) return ALIASES[key];
  const k = String(key || 'forest'), chapter = CHAPTER_OF[k.split('-')[0]] || 'elderwood';
  const pool = BIOME_KEYS.filter(b => BIOMES[b].chapter === chapter && !b.endsWith('-arena'));
  let h = 2166136261; for (const ch of k) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return pool[(h >>> 0) % pool.length];
}
