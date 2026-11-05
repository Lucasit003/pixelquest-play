/* improve20-r22f-nov4 #3 (audit15 section 8, plan item 7): the Hall boss diary, a page in the Journal's Bestiary for each Hall boss.
   A page fills when that boss is beaten in a Hall fight on any rung (game/hall.js hallBossBeat): the boss's own portrait (its atlas idle
   frame, ui/bestiary.js paintSpriteTile), one line on how the kid beat it, naming the move whose wind-up or banner it read (`move` is that
   move's name in the boss's own attack list; tests check it is there), and one joke about the creature. The jokes are made-up fun about
   the game's monsters and make no claim about the real world. An unbeaten boss shows a locked page naming the rung that has it.
   Display only: nothing here writes the save, and nothing reads it for stats, abilities or learning. */
import {HALL_CHAPTERS,hallBosses,hallBossBeat,ROMAN} from './hall.js';
import {levelById,CHAPTERS} from './levels.js';
import {baseDef} from './roster.js';
export const DIARY=Object.freeze({
 e1:{move:'ground pound',how:'You watched Grubnak wind up his Ground Pound and stepped back before it landed.',joke:'Grubnak’s favourite school subject? Smash-ematics.'},
 e2:{move:'belly flop',how:'When the Bog King wound up a Belly Flop, you moved away from where he would land.',joke:'The Bog King is never lonely. There is always a slime or two stuck to him.'},
 e3:{move:'war charge',how:'You saw the War Charge coming and stepped out of Gorrak’s path, then hit back.',joke:'Gorrak’s war horn only plays one note. He says it is his best song.'},
 e4:{move:'bull rush',how:'You read the long wind-up of the Bull Rush and dodged to the side.',joke:'The Hollow Minotaur once got lost in his own maze. He calls it practice.'},
 e5:{move:'shadow thorns',how:'You stepped clear when the Shadow Thorns wound up, and struck between his spells.',joke:'Why is the Skeleton King never scared? He has no guts.'},
 e6:{move:'earth spikes',how:'When Mother Ruk raised her Earth Spikes, you stepped off their line.',joke:'Mother Ruk tells Gorrak to wear a helmet. He says his head is hard enough.'},
 e7:{move:'falling rocks',how:'You kept moving when the Falling Rocks came down, and hit the Golem between them.',joke:'What music does the Watch Golem like best? Rock, of course.'},
 e8:{move:'thorn line',how:'You stepped off the Thorn Line after its wind-up, then struck the king.',joke:'The Thorn King tried to hug a balloon once. Only once.'},
 m1:{move:'firefall',how:'You moved out from under the Firefall before it landed.',joke:'The Dungeon Master’s rule book says “No running in the dungeon.” He runs anyway.'},
 m2:{move:'core laser',how:'You saw the long wind-up of the Core Laser and got out of its way.',joke:'The Forge Golem has a warm heart. Very warm. Please do not touch it.'},
 m3:{move:'fire-breath arc',how:'When the FIRE-BREATH ARC banner showed, you got clear of the sweep.',joke:'Scorchtail never needs a toaster. Breakfast is ready in one breath.'},
 m4:{move:'riposte lunge',how:'When RIPOSTE! flashed, you stepped aside from Sir Cinder’s lunge.',joke:'Sir Cinder always says “En garde!” He has never once said “please”.'},
 m5:{move:'fire rain',how:'You watched for the Fire Rain wind-up and kept on the move.',joke:'Vexx wants a day off. His imps want a day off from Vexx.'},
 m6:{move:'void wave',how:'When VOID WAVE flashed, you got out of the wave’s path.',joke:'The Obsidian Sentinel loves mirrors. It says it is only checking for smudges.'},
 m7:{move:'meteor rain',how:'You read the Meteor Rain wind-up and kept clear of where it fell.',joke:'Moltar cooks with a cleaver and a volcano. Nobody asks for seconds.'},
 v1:{move:'tide ring',how:'When TIDE RING flashed, you got clear of the water.',joke:'The Drowned Priest’s speeches are always a little bit soggy.'},
 v2:{move:'mist veil',how:'When MIST VEIL flashed, you waited for the Wisp Mother to show herself again.',joke:'The Wisp Mother never needs a night light. She is one.'},
 v3:{move:'shadow step',how:'When SHADOW STEP flashed, you dodged your Shadow’s dash.',joke:'Your Shadow copies every move you make. It still can’t copy your homework.'},
 v4:{move:'crystal ram',how:'When CRYSTAL RAM flashed, you got out of the Golem’s way.',joke:'The Crystal Golem is so shiny it waves at itself.'},
 v5:{move:'frost nova',how:'You backed away from the Frost Nova’s wind-up, then struck the Lich.',joke:'The Choir Lich’s choir sings beautifully. They have had a very long time to practise.'},
 v6:{move:'rift step',how:'When RIFT STEP flashed, you got ready for where the Void Knight would come back.',joke:'The Void Knight’s cape is full of stars. He still can’t find his socks.'},
 v7:{move:'tentacle grab',how:'When TENTACLE GRAB flashed, you stepped out of reach.',joke:'The Sleeper in the Deep slept so long it needs a very, very big alarm clock.'},
});
const chName=ch=>(CHAPTERS.find(c=>c.id===ch)?.name||ch).replace(/^The /,'');
/* every Hall boss's page, in chapter and Hall order: {id, chapter, name, sprite, beat, how, joke, lock} */
export function diaryPages(s){return HALL_CHAPTERS.flatMap(ch=>hallBosses(ch).map(id=>{const l=levelById(id),d=baseDef(l?.boss)||{},e=DIARY[id]||{},beat=hallBossBeat(s,id);
 return {id,chapter:ch,name:l?.bossName||d.name||id,sprite:d.sprite||'',beat,how:beat?e.how||'':'',joke:beat?e.joke||'':'',lock:beat?'':`Locked. Beat this boss in the Hall of Echoes: ${chName(ch)}, Rung ${ROMAN[0]} (any rung counts).`};}));}
export const diaryCount=s=>diaryPages(s).filter(p=>p.beat).length;
/* improve25-r25f-nov5 #3 (audit16 plan 6): the diary as a collection with a payoff. A chapter's pages are its Hall bosses (hall.js hallBosses);
   filling every one earns that chapter's keepsake: a pack bookcase given free at Home (game/furniture.js, kind 'keep', never sold) and a title
   (game/titles.js). Nothing random; pages are never lost (hallBossBeat reads records that never go back), so neither is the keepsake. A save
   that already has a full chapter gets its bookcase on load (core/save.js normalize) as titles do. */
export const DIARY_KEEPSAKES=Object.freeze({elderwood:Object.freeze({furn:'keep-elderwood',title:'lore-elderwood',name:'Elderwood Lorekeeper'}),emberkeep:Object.freeze({furn:'keep-emberkeep',title:'lore-emberkeep',name:'Emberkeep Lorekeeper'}),veilmoor:Object.freeze({furn:'keep-veilmoor',title:'lore-veilmoor',name:'Veilmoor Lorekeeper'})});
export const diaryChapterDone=(s,ch)=>{const xs=hallBosses(ch);return xs.length>0&&xs.every(id=>hallBossBeat(s,id));};
/* per chapter: {chapter, name, have, total, done, furn, title, titleName} */
export function diaryChapters(s){return HALL_CHAPTERS.filter(ch=>DIARY_KEEPSAKES[ch]).map(ch=>{const xs=hallBosses(ch),have=xs.filter(id=>hallBossBeat(s,id)).length,k=DIARY_KEEPSAKES[ch];return {chapter:ch,name:chName(ch),have,total:xs.length,done:xs.length>0&&have===xs.length,furn:k.furn,title:k.title,titleName:k.name};});}
/* gives every earned bookcase not yet owned (s.house.owned[id] = 1); returns the furniture ids added */
export function grantDiaryKeepsakes(s){if(!s?.house?.owned)return [];const add=[];for(const c of diaryChapters(s))if(c.done&&!((s.house.owned[c.furn]|0)>0)){s.house.owned[c.furn]=1;add.push(c.furn);}return add;}
