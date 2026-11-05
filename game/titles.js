// Titles (endfollow-oct29): cosmetic keepsakes earned by play. A title is a name shown on the pause hero panel and the hero
// card, nothing more. Pure rules; callers hold the save. Nothing here reads or writes mastery, answers, lessons, XP, gold,
// gear, stars or abilities, and no title changes a number in combat.
// Save: s.titles = [id, ...] (additive within save v9, cleaned by core/save.js normalize(); a save from before this field that
// already meets a title's rule gets it back on load, since it was earned by play).
import {LEVELS,gameFinale,levelDone} from './levels.js';
import {worn} from './prizes.js';
/* improve20-r20j-nov4 #2: each chapter's first opened seal cache gives its keepsake title (game/ability-seals.js) */
import {SEAL_TITLES,sealChapterDone} from './ability-seals.js';
/* improve25-r25f-nov5 #2, #3: the Rift tower's marker titles and the Hall diary's chapter titles */
import {TOWER_MARKS,riftTower} from './rift.js';
import {DIARY_KEEPSAKES,diaryChapterDone} from './hall-diary.js';

export const TITLES={
 'thorn-hero':{name:'Hero of the Thorn Kingdom',how:'Free the Thorn Kingdom: win the last Veilmoor level.',earned:s=>LEVELS.some(l=>gameFinale(l.id)&&levelDone(s,l.id))},
 /* improve20-r22w-nov4 #1: Wil's second chapter (game/quests.js 'wils-shield', reward.title); read from the save's done quest, which never goes back */
 'shield-friend':{name:'Wil’s Shield-Friend',how:'Finish The Farm-Gate Shield, Wil’s second quest.',earned:s=>!!s?.quests?.q?.['wils-shield']?.done},
 /* improve25-r25q-nov5 #1: Wil's third chapter (game/quests.js 'wils-mirror', reward.title), read from the done quest the same way */
 'true-friend':{name:'Wil’s True Friend',how:'Finish The Still Pond, Wil’s third quest.',earned:s=>!!s?.quests?.q?.['wils-mirror']?.done},
 /* improve25-r25f-nov5 #2: a Rift tower marker reached (4, 8, 12 Story Rift floors) */
 ...Object.fromEntries(TOWER_MARKS.map(m=>[m.id,{name:m.name,how:`Climb ${m.at} floors of the Rift tower: win Story Rifts.`,earned:s=>riftTower(s).floors>=m.at}])),
 /* improve25-r25f-nov5 #3: every Hall diary page of a chapter filled */
 ...Object.fromEntries(Object.entries(DIARY_KEEPSAKES).map(([ch,k])=>[k.title,{name:k.name,how:`Fill every ${ch[0].toUpperCase()+ch.slice(1)} page of the Hall boss diary.`,earned:s=>diaryChapterDone(s,ch)}])),
 ...Object.fromEntries(Object.entries(SEAL_TITLES).map(([ch,[id,name]])=>[id,{name,how:`Open a rune seal's cache in the ${ch[0].toUpperCase()+ch.slice(1)}.`,earned:s=>sealChapterDone(s,ch)}])),
};
export const TITLE_IDS=Object.keys(TITLES);
export const cleanTitles=v=>Array.isArray(v)?[...new Set(v.filter(id=>typeof id==='string'&&TITLES[id]))]:[];
/* adds every title whose rule the save now meets; returns the ids added (none twice) */
export function earnTitles(s){const have=s.titles=cleanTitles(s.titles),add=TITLE_IDS.filter(id=>!have.includes(id)&&TITLES[id].earned(s));have.push(...add);return add;}
/* the title shown with the hero: the latest one earned, or null */
/* improve20-r7a-nov1 #8: a worn title (s.prizes.title, game/prizes.js) wins: a daily keepsake, an earned title, or 'none' for no title */
export const heroTitle=s=>{const t=cleanTitles(s?.titles),w=s?.prizes?.title;if(w==='none')return null;if(w&&TITLES[w]&&t.includes(w))return TITLES[w].name;const p=worn(s,'title');if(p)return p.name;return t.length?TITLES[t[t.length-1]].name:null;};
