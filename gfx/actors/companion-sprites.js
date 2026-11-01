// Drawing a companion in a level (scenes/party-ai.js owns the actor). The atlas is the companion's ART entry in
// game/party.js, drawn unmodified at its own scale (Wil's is his own PixelLab atlas, owner-approved 25 Oct).
// Code draws only effects: the health bar, a soft ally ring at the feet and the get-up ring while Downed.
import {drawSprite} from './sprites.js';
import {drawPixelText} from '../../ui/canvas-ui.js';

const ring = (c, x, y, r, k, color, width = 2) => { c.save(); c.strokeStyle = color; c.lineWidth = width; c.beginPath(); c.ellipse(x, y, r, r * .4, 0, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * k); c.stroke(); c.restore(); };

/** One depth-sorted entry for a companion: {y, draw}. `shadow(c,x,y)` is the world's ground shadow. */
/* improve20-w-nov1 #14 (a9): when he overlaps the hero he sorts just behind the hero (hero = the player), so he never covers the hero's body */
export const companionDepth = (m, hero) => hero && Math.abs(m.x - hero.x) < 26 && Math.abs(m.y - hero.y) < 22 ? Math.min(m.y, hero.y - .5) : m.y;
export function companionEntity(c, m, t, shadow, {bar = true, hero = null, lift = false} = {}) {
  return {y: companionDepth(m, hero), draw: () => {
    const x = Math.round(m.x), y = Math.round(m.y), down = m.mode === 'downed', k = m.art?.scale || 1;
    shadow?.(c, x, y);
    ring(c, x, y + 1, 11, 1, down ? '#c9b48a55' : '#8fd9a055', 1);
    const blink = m.inv > 0 && !down && Math.floor(m.inv * 20) % 2 === 0;
    drawSprite(c, m.sprite, m.state, m.stateT, x, y, {facing: m.facing, scale: k, alpha: blink ? .6 : down ? .8 : 1, flash: m.flash > 0 ? 1 : 0});
    if (down) { const need = m.reviveT > 0 ? m.reviveT / 1.5 : 1 - Math.max(0, m.downT) / (m.downMax || 10); ring(c, x, y - 2, 15, Math.max(.02, Math.min(1, need)), '#ffe08a', 2); return; }
    /* latechap-oct27: no health bar over Wil during an epilogue (the hero's HUD hides there too) */
    if (!lift) companionPlate(c, m, {bar});
  }};
}
/* improve20-w-nov1 #14: his health bar and name while he is hurt (not while Downed). world.js draws it as its own entry above every actor
   (lift), so a boss standing in front of him never hides his name */
/* improve20-r7b-nov1 #4: the plate's box (name and bar); `avoid` holds boxes ({x0,x1,y0,y1}, the live bosses' pictures) it must never draw over */
export function plateBox(m) { const x = Math.round(m.x), y = Math.round(m.y), k = m.art?.scale || 1, top = y - Math.round(56 * k) - 8, hw = Math.max(12, (m.name || '').length * 3 + 2); return {x0: x - hw, x1: x + hw, y0: top - 10, y1: top + 4}; }
export const plateBlocked = (m, avoid = []) => { const b = plateBox(m); return avoid.some(r => b.x0 < r.x1 && b.x1 > r.x0 && b.y0 < r.y1 && b.y1 > r.y0); };
export function companionPlate(c, m, {bar = true, avoid = []} = {}) {
  if (!bar || m.mode === 'downed' || !(m.hp < m.maxHp) || plateBlocked(m, avoid)) return;
  const x = Math.round(m.x), y = Math.round(m.y), k = m.art?.scale || 1, w = 22, top = y - Math.round(56 * k) - 8, f = Math.max(0, m.hp / m.maxHp);
  c.save(); c.fillStyle = '#1b1f1c'; c.fillRect(x - w / 2 - 1, top - 1, w + 2, 4); c.fillStyle = f > .35 ? '#7fd36b' : '#e2b04a'; c.fillRect(x - w / 2, top, Math.round(w * f), 2); c.restore();
  if (m.name) drawPixelText(c, m.name, x, top - 3, {align: 'center', color: '#e9f2c6', outline: '#18241a'});
}
