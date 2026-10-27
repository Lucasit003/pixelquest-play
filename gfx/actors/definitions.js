// Combat timing contract shared by combat.js (damage on the contact time) and the hero sprite atlases
// (contact frames sit at floor(contact*fps), tests/heroes.test.js). The procedural limb figure that used to
// live here was removed on 8 Oct: heroes are downloaded sprites only (dist/gfx/actors/hero-sprites.js).
export const TRACKS={idle:{fps:1,loop:true},walk:{fps:14,loop:true},run:{fps:16,loop:true},light0:{fps:18,duration:.28,contact:.11},light1:{fps:18,duration:.28,contact:.11},light2:{fps:18,duration:.28,contact:.13},heavy:{fps:12,duration:.5,contact:.27},cast:{fps:12,duration:.42,contact:.17},dodge:{fps:12.5,duration:.32},hurt:{fps:14,duration:.29},knockback:{fps:14,duration:.29},block:{fps:1,loop:true},parry:{fps:18,duration:.17,contact:.06},death:{fps:9,duration:.56,hold:true}};
export function appearance(a){return a.appearance||({sword:'warrior',staff:'mage',dagger:'rogue',bow:'ranger',hammer:'paladin',axe:'berserker',focus:'summoner'}[a.weapon]||'warrior');}
