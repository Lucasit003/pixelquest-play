// Titles (endfollow-oct29): cosmetic keepsakes earned by play. A title is a name shown on the pause hero panel and the hero
// card, nothing more. Pure rules; callers hold the save. Nothing here reads or writes mastery, answers, lessons, XP, gold,
// gear, stars or abilities, and no title changes a number in combat.
// Save: s.titles = [id, ...] (additive within save v9, cleaned by core/save.js normalize(); a save from before this field that
// already meets a title's rule gets it back on load, since it was earned by play).
import {LEVELS,gameFinale,levelDone} from './levels.js';
import {worn} from './prizes.js';
/* improve20-r20j-nov4 #2: each chapter's first opened seal cache gives its keepsake title (game/ability-seals.js) */
import {SEAL_TITLES,sealChapterDone} from './ability-seals.js';

export const TITLES={
 'thorn-hero':{name:'Hero of the Thorn Kingdom',how:'Free the Thorn Kingdom: win the last Veilmoor level.',earned:s=>LEVELS.some(l=>gameFinale(l.id)&&levelDone(s,l.id))},
 /* improve20-r22w-nov4 #1: Wil's second chapter (game/quests.js 'wils-shield', reward.title); read from the save's done quest, which never goes back */
 'shield-friend':{name:'Wil’s Shield-Friend',how:'Finish The Farm-Gate Shield, Wil’s second quest.',earned:s=>!!s?.quests?.q?.['wils-shield']?.done},
 ...Object.fromEntries(Object.entries(SEAL_TITLES).map(([ch,[id,name]])=>[id,{name,how:`Open a rune seal's cache in the ${ch[0].toUpperCase()+ch.slice(1)}.`,earned:s=>sealChapterDone(s,ch)}])),
};
export const TITLE_IDS=Object.keys(TITLES);
export const cleanTitles=v=>Array.isArray(v)?[...new Set(v.filter(id=>typeof id==='string'&&TITLES[id]))]:[];
/* adds every title whose rule the save now meets; returns the ids added (none twice) */
export function earnTitles(s){const have=s.titles=cleanTitles(s.titles),add=TITLE_IDS.filter(id=>!have.includes(id)&&TITLES[id].earned(s));have.push(...add);return add;}
/* the title shown with the hero: the latest one earned, or null */
/* improve20-r7a-nov1 #8: a worn title (s.prizes.title, game/prizes.js) wins: a daily keepsake, an earned title, or 'none' for no title */
export const heroTitle=s=>{const t=cleanTitles(s?.titles),w=s?.prizes?.title;if(w==='none')return null;if(w&&TITLES[w]&&t.includes(w))return TITLES[w].name;const p=worn(s,'title');if(p)return p.name;return t.length?TITLES[t[t.length-1]].name:null;};
