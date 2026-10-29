// Titles (endfollow-oct29): cosmetic keepsakes earned by play. A title is a name shown on the pause hero panel and the hero
// card, nothing more. Pure rules; callers hold the save. Nothing here reads or writes mastery, answers, lessons, XP, gold,
// gear, stars or abilities, and no title changes a number in combat.
// Save: s.titles = [id, ...] (additive within save v9, cleaned by core/save.js normalize(); a save from before this field that
// already meets a title's rule gets it back on load, since it was earned by play).
import {LEVELS,gameFinale,levelDone} from './levels.js';

export const TITLES={
 'thorn-hero':{name:'Hero of the Thorn Kingdom',how:'Free the Thorn Kingdom: win the last Veilmoor level.',earned:s=>LEVELS.some(l=>gameFinale(l.id)&&levelDone(s,l.id))},
};
export const TITLE_IDS=Object.keys(TITLES);
export const cleanTitles=v=>Array.isArray(v)?[...new Set(v.filter(id=>typeof id==='string'&&TITLES[id]))]:[];
/* adds every title whose rule the save now meets; returns the ids added (none twice) */
export function earnTitles(s){const have=s.titles=cleanTitles(s.titles),add=TITLE_IDS.filter(id=>!have.includes(id)&&TITLES[id].earned(s));have.push(...add);return add;}
/* the title shown with the hero: the latest one earned, or null */
export const heroTitle=s=>{const t=cleanTitles(s?.titles);return t.length?TITLES[t[t.length-1]].name:null;};
