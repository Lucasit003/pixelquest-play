// Oakhaven's sellers: who sells what, and what it does.
//
// Weapons, armour, potions and contracts already have panels (the Weaponsmith, the Alchemist, the
// Guild), so those shops just open them. Everything new is a boon for the NEXT level only: a meal,
// a remedy or a blessing is bought in town, packed into save.boons.pending, applied when a level
// starts (applyBoons, called from World.startLevel) and gone after that one level. A bounty is an
// optional goal for the next level that pays gold if it is met (settleBounty, at the level's end).
//
// INVARIANTS (CLAUDE.md): gold and items never unlock an ability, and nothing here reads or writes
// mastery, answers, XP or lessons. Boons change combat numbers for one level and nothing else.
// Names and greetings follow godot/data/shops.json where it has them.
//
// Icons are cells of Shikashi's Fantasy Icons v2 (CC BY 4.0, art/packs/shikashi-fantasy-icons),
// 16 columns of 32 px: `icon` is the cell index.
import {levelById, levelPar} from './levels.js';

export const ICON_SHEET = 'assets/town/icons.png', ICON_COLS = 16, ICON = 32;
export const MAX_PENDING = 4;

/* effect: hp = extra max health; atk = damage multiplier bonus; speed = move speed bonus;
   def = defence bonus; regen = health per second. All last one level.
   retired: no longer sold anywhere (24 Oct, the Inn merge: docs/design/COMPANIONS_AND_OAKHAVEN.md §6.2). It stays here so
   a pack bought before the merge (save.boons.pending) still applies once. */
export const BOONS = {
  /* The Lantern Inn: meals */
  'roast-fowl': {name: 'Roast fowl', price: 14, icon: 239, effect: {hp: 30}, text: '+30 max health'},
  'hunters-steak': {name: 'Hunter’s steak', price: 18, icon: 241, effect: {atk: .1}, text: '+10% damage'},
  'spiced-cider': {name: 'Spiced cider', price: 10, icon: 254, effect: {regen: 1.5}, text: 'Regain 1.5 health a second'},
  /* The bakery: bread */
  'seed-loaf': {name: 'Seed loaf', price: 7, icon: 237, effect: {hp: 15}, text: '+15 max health', retired: true},
  'honey-bun': {name: 'Honey bun', price: 6, icon: 253, effect: {speed: .06}, text: '+6% move speed'},
  'travel-ration': {name: 'Travel ration', price: 16, icon: 238, effect: {hp: 20, regen: .8}, text: '+20 max health, slow healing', retired: true},
  /* The fishmonger: fish dishes */
  'grilled-trout': {name: 'Grilled river trout', price: 9, icon: 244, effect: {hp: 20}, text: '+20 max health', retired: true},
  'smoked-eel': {name: 'Smoked eel', price: 14, icon: 261, effect: {atk: .06, hp: 10}, text: '+6% damage, +10 max health', retired: true},
  'fish-stew': {name: 'Fisher’s stew', price: 15, icon: 259, effect: {regen: 1.2, def: .05}, text: 'Slow healing, +5% defence'},
  /* The herbalist: remedies */
  'woundwort-salve': {name: 'Woundwort salve', price: 18, icon: 159, effect: {regen: 2.5}, text: 'Regain 2.5 health a second'},
  'swiftroot-tonic': {name: 'Swiftroot tonic', price: 16, icon: 150, effect: {speed: .12}, text: '+12% move speed'},
  'ironbark-tea': {name: 'Ironbark tea', price: 16, icon: 189, effect: {def: .15}, text: '+15% defence'},
  /* The farm: produce */
  'basket-apples': {name: 'Basket of apples', price: 6, icon: 224, effect: {hp: 12}, text: '+12 max health'},
  'fresh-eggs': {name: 'Fresh eggs', price: 8, icon: 245, effect: {atk: .04}, text: '+4% damage', retired: true},
  'carrot-bunch': {name: 'Bunch of carrots', price: 5, icon: 230, effect: {speed: .05}, text: '+5% move speed', retired: true},
  /* The chapel: blessings */
  'blessing-vigour': {name: 'Blessing of vigour', price: 25, icon: 337, effect: {hp: 40}, text: '+40 max health'},
  'blessing-blade': {name: 'Blessing of the blade', price: 30, icon: 338, effect: {atk: .12}, text: '+12% damage'},
  'blessing-grace': {name: 'Blessing of grace', price: 28, icon: 340, effect: {speed: .08, regen: 1}, text: '+8% move speed, slow healing'},
};

/* Bounties: one at a time, free to take, paid on a level won with the goal met. */
export const BOUNTIES = {
  'bounty-swift': {name: 'Swift as the wind', reward: 40, icon: 175, text: 'Win your next level within its 3-star time',
    met: (st, l) => st.time <= levelPar(l)},
  'bounty-unscathed': {name: 'Not a scratch', reward: 60, icon: 98, text: 'Win your next level taking less than 120 damage',
    met: st => st.taken < 120},
  'bounty-hunter': {name: 'Clear the road', reward: 35, icon: 0, text: 'Win your next level defeating 12 or more foes',
    met: st => st.kills >= 12},
};

/* Shops by the id their markers carry (shop=<id>). `panel` shops open an existing panel. */
export const SHOPS = {
  smith: {panel: 'smith', keeper: 'Brannoc the smith', greeting: 'Better steel makes you stronger. What you learn still buys the rest.'},
  smith_stall: {panel: 'smith', keeper: 'Brannoc', greeting: 'Nails, hinges, a blade if you need one.'},
  workshop: {panel: 'smith', keeper: 'Wright Aldis', greeting: 'Careful, that edge is new.'},
  alchemist: {panel: 'alchemist', keeper: 'Master Coll', greeting: 'Measure twice. Drink once.'},
  apothecary: {panel: 'alchemist', keeper: 'Master Coll', greeting: 'Measure twice. Drink once.'},
  guild: {panel: 'guild', keeper: 'Quartermaster Ilsa', greeting: 'Contracts on the board, gear on the shelf.'},
  /* One food menu (24 Oct, spec §6.2): the Lantern Inn cooks for the whole town. The market food stalls and Hob's farm
     open the Inn's menu with their keeper's own greeting; the bakeries and the fish shop closed. */
  inn: {title: 'The Lantern Inn', keeper: 'Innkeeper Odell', greeting: 'A hot meal before the road? It stays with you through your next adventure.', wares: ['basket-apples', 'honey-bun', 'spiced-cider', 'roast-fowl', 'fish-stew', 'hunters-steak']},
  bakery: {alias: 'inn', keeper: 'Tamsin', greeting: 'I bake for the Lantern Inn now. Here’s what their kitchen has today.'},
  baker: {alias: 'inn', keeper: 'Tamsin', greeting: 'I bake for the Lantern Inn now. Here’s what their kitchen has today.'},
  fish: {alias: 'inn', keeper: 'Netta', greeting: 'My catch goes to the Inn’s kitchen. Here’s what they cook today.'},
  fisher: {alias: 'inn', keeper: 'Netta', greeting: 'My catch goes to the Inn’s kitchen. Here’s what they cook today.'},
  farm: {alias: 'inn', keeper: 'Farmer Hob', greeting: 'Everything I grow goes to the Inn’s kitchen. Here’s what they cook today.'},
  produce: {alias: 'inn', keeper: 'Farmer Hob', greeting: 'Everything I grow goes to the Inn’s kitchen. Here’s what they cook today.'},
  /* remedies: Goodwife Enid's counter moved into the Apothecary beside Master Coll */
  herbalist: {title: 'Enid’s Remedies', keeper: 'Goodwife Enid', greeting: 'Mind the drying racks. A remedy keeps you on your feet out there.', wares: ['woundwort-salve', 'swiftroot-tonic', 'ironbark-tea']},
  herbs: {alias: 'herbalist'},
  chapel: {title: 'Starlight Chapel', keeper: 'Chaplain Aurel', greeting: 'Go with a blessing. It lasts the length of one road.', wares: ['blessing-vigour', 'blessing-blade', 'blessing-grace']},
  captain: {title: 'The Watch Captain’s Bounties', keeper: 'Watchman Garrick', greeting: 'The road needs clearing. Do it well and the watch pays.', wares: ['bounty-swift', 'bounty-unscathed', 'bounty-hunter'], bounties: true},
  watch: {alias: 'captain'},
};

/* An alias opens its shop's wares under its own keeper and greeting, if it names them. */
export const shopById = id => { const s = SHOPS[id]; if (!s) return null; if (!s.alias) return {...s, id}; const {alias, ...own} = s; return {...SHOPS[alias], ...own, id: alias}; };
export const wareById = id => BOONS[id] ? {...BOONS[id], id, kind: 'boon'} : BOUNTIES[id] ? {...BOUNTIES[id], id, kind: 'bounty', price: 0} : null;

/** The save's boon state, made safe to read and write (save v5 field, added with a default). */
export function boonsOf(save) {
  const b = save.boons && typeof save.boons === 'object' ? save.boons : {};
  save.boons = {pending: Array.isArray(b.pending) ? b.pending.filter(id => BOONS[id]).slice(0, MAX_PENDING) : [], bounty: BOUNTIES[b.bounty] ? b.bounty : null};
  return save.boons;
}

/** Buy one ware. Returns {ok, message}. Only gold and save.boons change. */
export function buyWare(save, shopId, wareId) {
  const shop = shopById(shopId), w = wareById(wareId), b = boonsOf(save);
  if (!shop?.wares?.includes(wareId) || !w) return {ok: false, message: 'That is not for sale here.'};
  if (w.kind === 'bounty') {
    if (b.bounty === wareId) return {ok: false, message: 'You already carry that bounty.'};
    b.bounty = wareId;
    return {ok: true, message: `Bounty taken: ${w.name}. ${w.text} for ◆ ${w.reward}.`};
  }
  if (b.pending.includes(wareId)) return {ok: false, message: `${w.name} is already packed for your next adventure.`};
  if (b.pending.length >= MAX_PENDING) return {ok: false, message: `Your pack holds ${MAX_PENDING} boons at most. Use them on an adventure first.`};
  if ((save.gold || 0) < w.price) return {ok: false, message: `You need ◆ ${w.price}.`};
  save.gold -= w.price;
  const healing = !!w.effect?.regen && b.pending.some(id => BOONS[id]?.effect?.regen);
  b.pending.push(wareId);
  return {ok: true, message: `${w.name} packed. ${w.text} for your next adventure.${healing ? ' Healing does not stack: only your strongest healing works.' : ''}`};
}

/** Sum of the pending boons' effects. Healing does not stack (24 Oct regen-stack sim,
 *  docs/playtest/oct24-polish/REGEN.md): cider + stew + salve + grace summed to 6.2 health a second, and a bot that never
 *  dodges then cleared every Normal level without a fall. Only the strongest healing boon counts; the rest of each
 *  boon (health, defence, speed) still applies. */
export function boonEffect(ids) {
  const e = {hp: 0, atk: 0, speed: 0, def: 0, regen: 0};
  for (const id of ids) for (const [k, v] of Object.entries(BOONS[id]?.effect ?? {})) e[k] = k === 'regen' ? Math.max(e[k], v) : e[k] + v;
  return e;
}

/**
 * Apply the packed boons to the level that is starting and clear them (World.startLevel calls this).
 * The World rebuilds base stats and the player at every level start, so nothing carries over.
 */
export function applyBoons(world) {
  const b = boonsOf(world.save), ids = b.pending;
  world.boons = {applied: [...ids], bounty: b.bounty};
  if (!ids.length) return world.boons;
  const e = boonEffect(ids), p = world.player, base = world.base;
  if (e.hp) { p.maxHp += e.hp; p.hp += e.hp; }
  if (e.atk) { base.atk *= 1 + e.atk; base.mag *= 1 + e.atk; p.atk = base.atk; p.mag = base.mag; }
  if (e.speed) { base.speed *= 1 + e.speed; p.speed = base.speed; }
  if (e.def) { base.def *= 1 + e.def; p.def = base.def; }
  if (e.regen) {
    const level = world.level, tick = () => {
      if (world.level !== level || world.player !== p || p.hp <= 0) return;
      p.hp = Math.min(p.maxHp, p.hp + e.regen);
      world.actions.push({delay: 1, fn: tick});
    };
    world.actions.push({delay: 1, fn: tick});
  }
  b.pending = [];
  world.events?.persist?.();
  world.events?.toast?.(`Packed for this level: ${ids.map(id => BOONS[id].name).join(', ')}.`);
  return world.boons;
}

/** At a level's end: pay a met bounty, and clear it either way. Returns {name, met, reward} or null. */
export function settleBounty(save, result) {
  const b = boonsOf(save), id = b.bounty;
  if (!id) return null;
  const bt = BOUNTIES[id], l = levelById(result?.id);
  b.bounty = null;
  if (!l || l.kind === 'shop' || l.kind === 'home') { b.bounty = id; return null; }
  const met = !!result.won && !!result.stats && bt.met(result.stats, l);
  if (met) save.gold = (save.gold || 0) + bt.reward;
  return {id, name: bt.name, met, reward: met ? bt.reward : 0};
}
