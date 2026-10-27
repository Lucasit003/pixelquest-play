/* Scene transitions (14 Oct world polish): instead of a hard cut between Oakhaven, the world map and a level, the game
   view dips to black and opens again. The cut itself still happens at once underneath, so nothing waits on the
   animation and input is never held. Reduced motion skips it (and the global CSS rule would flatten it anyway). */
export const FADES = {level: 460, town: 400, map: 320, begin: 650, travel: 620};
export const fadeMs = (kind, reduced = false) => reduced ? 0 : (FADES[kind] || 360);
export function sceneFade(kind, reduced = false) {
  const ms = fadeMs(kind, reduced);
  if (!ms || typeof document === 'undefined') return 0;
  const canvas = document.getElementById('world'), host = canvas?.parentElement;
  if (!host) return 0;
  let el = document.getElementById('scene-fade');
  if (!el) { el = document.createElement('div'); el.id = 'scene-fade'; el.setAttribute('aria-hidden', 'true'); canvas.after(el); }
  const a = canvas.getBoundingClientRect?.(), b = host.getBoundingClientRect?.();
  if (a && b && a.width) Object.assign(el.style, {left: `${a.left - b.left}px`, top: `${a.top - b.top}px`, width: `${a.width}px`, height: `${a.height}px`});
  el.style.setProperty('--fade-ms', `${ms}ms`);
  el.classList.remove('on'); void el.offsetWidth; el.classList.add('on');
  clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('on'), ms + 60);
  return ms;
}

/* Fast travel (25 Oct): the same dip with the place's name over it, under a second in all (FADES.travel). The hero is already
   there underneath; skipTravelFade() (any key or tap) lifts it at once. Reduced motion: no dip and no caption. */
export function travelFade(name, reduced = false) {
  const ms = sceneFade('travel', reduced), el = typeof document !== 'undefined' && document.getElementById('scene-fade');
  if (!ms || !el) return 0;
  let cap = el.querySelector('.travel-caption');
  if (!cap) { cap = document.createElement('div'); cap.className = 'travel-caption'; el.append(cap); }
  cap.textContent = name;
  el.classList.add('travel');
  clearTimeout(el._c); el._c = setTimeout(() => el.classList.remove('travel'), ms + 60);
  return ms;
}
export function skipTravelFade() {
  const el = typeof document !== 'undefined' && document.getElementById('scene-fade');
  if (!el || !el.classList.contains('travel') || !el.classList.contains('on')) return false;
  clearTimeout(el._t); clearTimeout(el._c); el.classList.remove('on', 'travel');
  return true;
}
