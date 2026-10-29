/* polish3-oct29: diminishing returns on crowd control for bosses only (lead decision under the owner's 26 Oct balance delegation,
   docs/reference/SPEC_DECISIONS.md, docs/design/BALANCE.md). exploit7 found a Mage could keep a Heroic boss frozen or stunned 31-48%
   of a fight. A boss now takes a freeze, stun or root for BOSS_CC.scale of its time, then shrugs off the next one for BOSS_CC.guard s
   after it ends ("RESISTS!" over its head). Ordinary enemies are untouched. Pure: the caller holds the enemy and the clock. */
export const CC_STATUS=['stun','freeze','root'];
export const BOSS_CC={guard:5,scale:.75};
export const isCC=s=>CC_STATUS.includes(s);
export const controlled=e=>!!e&&e.statusTime>0&&isCC(e.status);
/* How long a status lands for: t for anything that is not a boss or not crowd control; a boss inside its guard gets 0 (resisted),
   otherwise BOSS_CC.scale of t and a guard of that time plus BOSS_CC.guard. */
export function controlTime(e,status,t){if(!e?.boss||!isCC(status))return t;if(e.ccGuard>0)return 0;const d=Math.round(t*BOSS_CC.scale*100)/100;e.ccGuard=d+BOSS_CC.guard;return d;}
