// Drawing a companion in a level (scenes/party-ai.js owns the actor). The atlas is the companion's ART entry in
// game/party.js, drawn unmodified at its own scale (Wil's is his own PixelLab atlas, owner-approved 25 Oct).
// Code draws only effects: the health bar, a soft ally ring at the feet and the get-up ring while Downed.
import {drawSprite} from './sprites.js';

const ring = (c, x, y, r, k, color, width = 2) => { c.save(); c.strokeStyle = color; c.lineWidth = width; c.beginPath(); c.ellipse(x, y, r, r * .4, 0, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * k); c.stroke(); c.restore(); };

/** One depth-sorted entry for a companion: {y, draw}. `shadow(c,x,y)` is the world's ground shadow. */
export function companionEntity(c, m, t, shadow, {bar = true} = {}) {
  return {y: m.y, draw: () => {
    const x = Math.round(m.x), y = Math.round(m.y), down = m.mode === 'downed', k = m.art?.scale || 1;
    shadow?.(c, x, y);
    ring(c, x, y + 1, 11, 1, down ? '#c9b48a55' : '#8fd9a055', 1);
    const blink = m.inv > 0 && !down && Math.floor(m.inv * 20) % 2 === 0;
    drawSprite(c, m.sprite, m.state, m.stateT, x, y, {facing: m.facing, scale: k, alpha: blink ? .6 : down ? .8 : 1, flash: m.flash > 0 ? 1 : 0});
    if (down) { const need = m.reviveT > 0 ? m.reviveT / 1.5 : 1 - Math.max(0, m.downT) / (m.downMax || 10); ring(c, x, y - 2, 15, Math.max(.02, Math.min(1, need)), '#ffe08a', 2); return; }
    /* latechap-oct27: no health bar over Wil during an epilogue (the hero's HUD hides there too) */
    if (bar && m.hp < m.maxHp) { const w = 22, top = y - Math.round(56 * k) - 8, f = Math.max(0, m.hp / m.maxHp); c.save(); c.fillStyle = '#1b1f1c'; c.fillRect(x - w / 2 - 1, top - 1, w + 2, 4); c.fillStyle = f > .35 ? '#7fd36b' : '#e2b04a'; c.fillRect(x - w / 2, top, Math.round(w * f), 2); c.restore(); }
  }};
}
