// The hub's panels: a seller's shop and the Library opened at one subject's shelf.
// main.js owns show()/header() and the save; these only build markup and wire it. Colours and
// frames come from the UI skin's CSS variables (--skin-*, then --pq-*), with plain fallbacks, so
// the downloaded 9-slice skin the UI agent is building dresses this panel without changes here.
// Icons are cells of Shikashi's Fantasy Icons v2 (CC BY 4.0), drawn by CSS background-position.
import {shopById, wareById, boonsOf, MAX_PENDING, ICON_SHEET, ICON_COLS, ICON} from '../game/shops.js';

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const CSS = `
.pq-shop{display:grid;gap:12px}
.pq-shop .pq-keeper{display:flex;gap:10px;align-items:center;padding:10px 12px;border:1px solid var(--skin-line,var(--pq-line,#6d5c3c));background:var(--skin-panel-2,var(--pq-panel-2,#1a2a2e));border-radius:var(--skin-radius,var(--r,6px))}
.pq-shop .pq-keeper b{color:var(--skin-gold,var(--pq-gold,#e6c27a))}
.pq-shop .pq-wares{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px}
.pq-ware{display:grid;grid-template-columns:auto 1fr;gap:4px 10px;align-items:center;padding:10px;border:1px solid var(--skin-line,var(--pq-line,#6d5c3c));background:var(--skin-card,var(--pq-card,#152226));border-radius:var(--skin-radius,var(--r,6px))}
.pq-ware[data-packed="1"]{outline:2px solid var(--skin-gold,var(--pq-gold,#e6c27a))}
.pq-ware .pq-icon{grid-row:span 2;width:${ICON * 2}px;height:${ICON * 2}px;image-rendering:pixelated;background-image:url(${ICON_SHEET});background-size:${ICON_COLS * ICON * 2}px auto}
.pq-ware h3{margin:0;font-size:1rem}
.pq-ware p{margin:0;font-size:16px;line-height:1.25;opacity:.9}
.pq-ware button{grid-column:1/-1}
.pq-pack{font-size:.85rem;opacity:.9}
.pq-focus{outline:3px solid var(--skin-gold,var(--pq-gold,#e6c27a));outline-offset:2px;box-shadow:0 0 18px color-mix(in srgb,var(--skin-gold,var(--pq-gold,#e6c27a)) 45%,transparent)}
.pq-focus-note{margin:0 0 8px;font-weight:600;color:var(--skin-gold,var(--pq-gold,#e6c27a))}
`;
function style() {
  if (typeof document === 'undefined' || document.getElementById('pq-hub-style')) return;
  const el = document.createElement('style');
  el.id = 'pq-hub-style'; el.textContent = CSS;
  document.head?.appendChild(el);
}
const iconStyle = n => `background-position:-${(n % ICON_COLS) * ICON * 2}px -${Math.floor(n / ICON_COLS) * ICON * 2}px`;
/* uiicons-oct25: every boon on sale has its own PixelLab icon (ui/skin/boons/<id>.png, tools/bake-uiicons-oct25.py), drawn
   at the same 2x; retired boons are never shown as wares. */
const OWN_BOON = new Set(['basket-apples', 'honey-bun', 'spiced-cider', 'roast-fowl', 'fish-stew', 'hunters-steak', 'woundwort-salve', 'swiftroot-tonic', 'ironbark-tea', 'blessing-vigour', 'blessing-blade', 'blessing-grace']);
/* packicons3-oct25: the bounties too (an hourglass, a shield, the crossed swords), so the pack sheet is only a fallback */
const OWN_BOUNTY = {'bounty-swift': 'packicons3/hourglass', 'bounty-unscathed': 'packicons3/shield', 'bounty-hunter': 'uiicons/swords'};
const ownWare = id => OWN_BOON.has(id) ? `boons/${id}` : OWN_BOUNTY[id];
const wareIconStyle = (id, w) => ownWare(id) ? `background-image:url(ui/skin/${ownWare(id)}.png);background-size:${ICON * 2}px ${ICON * 2}px;background-position:0 0` : iconStyle(w.icon);

/**
 * What a seller's marker opens: {panel} for an existing panel (smith, alchemist, guild), {say} for a
 * shop this build does not know yet (the keeper greets you), or {title, greeting, html} for a shop.
 */
export function shopView(shopId, save, {keeper} = {}) {
  const shop = shopById(shopId);
  if (!shop) return {say: keeper ? `${keeper}: “Welcome! Have a look around.”` : 'The counter is unattended.'};
  const who = keeper || shop.keeper;
  if (shop.panel) return {panel: shop.panel, keeper: who, greeting: shop.greeting};
  style();
  const b = boonsOf(save);
  const cards = shop.wares.map(id => {
    const w = wareById(id), packed = w.kind === 'bounty' ? b.bounty === id : b.pending.includes(id);
    const label = w.kind === 'bounty' ? (packed ? 'Bounty taken' : `Take bounty · pays ◆ ${w.reward}`) : packed ? 'Packed' : `Buy · ◆ ${w.price}`;
    const off = packed || (w.kind === 'boon' && ((save.gold || 0) < w.price || b.pending.length >= MAX_PENDING));
    return `<div class="pq-ware" data-ware="${id}" data-packed="${packed ? 1 : 0}"><span class="pq-icon" style="${wareIconStyle(id, w)}" aria-hidden="true"></span><h3>${esc(w.name)}</h3><p>${esc(w.text)}</p><button data-buy-ware="${id}" class="${off ? '' : 'primary'}" ${off ? 'disabled' : ''}>${label}</button></div>`;
  }).join('');
  const pack = b.pending.length ? `Packed for your next adventure: ${b.pending.map(id => esc(wareById(id).name)).join(', ')} (${b.pending.length}/${MAX_PENDING}).` : 'Nothing packed yet. Food and blessings help for one adventure.';
  const bounty = b.bounty ? ` Bounty: <strong>${esc(wareById(b.bounty).name)}</strong>.` : '';
  const html = `<div class="pq-shop" data-shop="${shop.id}"><div class="pq-keeper"><span><b>${esc(who)}</b>: “${esc(shop.greeting)}”</span></div><div class="pq-wares">${cards}</div><p class="pq-pack">${pack}${bounty} ◆ ${save.gold || 0} gold. Gold never unlocks abilities; what you learn does.</p></div>`;
  return {title: shop.title, keeper: who, greeting: shop.greeting, html};
}

/** Open the Library panel's shelf for one subject: scroll to it, mark it, and point the level picker at it. */
export function focusSubject(root, subject, {scroll = true} = {}) {
  if (!root || !subject) return false;
  style();
  root.dataset.subject = subject;
  const btn = root.querySelector(`[data-study="${subject}"]`), card = btn?.closest('.card');
  const ladder = root.querySelector(`.grade-ladder[data-subject="${subject}"]`) ?? root.querySelector(`[data-subject="${subject}"]:not(#modal-content)`);
  if (!card && !ladder) return false;
  for (const c of root.querySelectorAll('.pq-focus')) c.classList.remove('pq-focus');
  /* this shelf's lessons and its training card move to the front of their lists, marked */
  for (const el of [ladder, card]) if (el) { el.parentElement?.prepend(el); el.classList.add('pq-focus'); el.setAttribute('data-focus', '1'); }
  const name = (ladder?.querySelector('h3') ?? card?.querySelector('h3'))?.textContent;
  if (ladder && name && !ladder.querySelector('.pq-focus-note')) ladder.insertAdjacentHTML('afterbegin', `<p class="pq-focus-note">Study ${esc(name)} here. Start a lesson, or practise below.</p>`);
  const first = ladder ?? card;
  if (scroll) {
    try { first.scrollIntoView?.({block: 'start'}); } catch {}
    try { (ladder?.querySelector('button') ?? btn)?.focus?.({preventScroll: true}); } catch {}
  }
  return true;
}
