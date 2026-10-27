/* The Delver level and class ranks (SKYBLOCK_DUNGEONS_PROGRESSION.md sections 5.7-5.8): PixelQuest's Catacombs level.
   Every finished map-level run pays Delver XP, a win by its grade and tier, a loss up to a quarter, for the share of waves completed on that attempt, plus
   a one-time bonus the first time a level-tier reaches a new best grade. No daily caps, boosts or streaks (guardrail D7).
   The hero who played earns the same amount as class XP; the other six earn a quarter of it.
   - Delver level 0-50, XP to the next = 50 + 14 x L. Class rank 0-30, the same curve.
   - Rewards are identity only here: titles at 10/20/30/40/50 and class titles at 5/15/25. No stats, no ability, and the
     level is never a gate: Legendary pads show a recommended level only (owner, 14 Oct).
   Pure: callers hold the save (s.delve = {xp, runs, meters, classXP, seals}). */
import {gradeRank} from './grade.js';
import {CLASSES} from './data.js';
export const DELVE_MAX=50,RANK_MAX=30;
export const GRADE_MULT={D:.5,C:.75,B:1,A:1.2,S:1.4,'S+':1.6};
export const TIER_MULT={normal:1,heroic:1.5,legendary:2};
export const LOSS_SHARE=.25,OTHER_CLASS=.25;
export const xpStep=L=>50+14*L;
/* {level, into, need, total} for an XP total on the 50 + 14L curve, capped at max. */
export function levelFrom(xp,max=DELVE_MAX){let L=0,left=Math.max(0,Math.floor(+xp||0));while(L<max&&left>=xpStep(L)){left-=xpStep(L);L++;}return {level:L,into:L>=max?0:left,need:L>=max?0:xpStep(L),total:Math.floor(+xp||0)};}
/* The XP a finished run pays (before the new-best bonus). */
export function runXP(level,{won,grade,tier='normal',progress=0}){if(!level||level.kind!=='level'||level.hidden)return 0;const base=(20+2*Math.max(1,level.tier|0))*(TIER_MULT[tier]||1);
 return Math.round(won?base*(GRADE_MULT[grade]||1):base*LOSS_SHARE*Math.max(0,Math.min(1,+progress||0)));}
export const emptyDelve=()=>({xp:0,runs:0,meters:{},classXP:{},seals:{}});
const HEROES=Object.keys(CLASSES);
/* Pays a finished run. prevBest: the level-tier's best grade before this run. Returns {xp, bonus, before, after,
   rankBefore, rankAfter} (levels as levelFrom objects). */
export function awardRun(s,level,{won,grade,tier='normal',prevBest=null,progress=0},hero=s?.hero){const d=s.delve??=emptyDelve();d.classXP??={};
 const xp=runXP(level,{won,grade,tier,progress}),bonus=won&&grade&&gradeRank(grade)>gradeRank(prevBest)?xp:0,all=xp+bonus;
 const before=levelFrom(d.xp),rankBefore=levelFrom(d.classXP[hero]||0,RANK_MAX);
 d.xp=(d.xp|0)+all;for(const h of HEROES)d.classXP[h]=(d.classXP[h]||0)+(h===hero?all:Math.round(all*OTHER_CLASS));
 return {xp,bonus,before,after:levelFrom(d.xp),rankBefore,rankAfter:levelFrom(d.classXP[hero],RANK_MAX)};}
export const delverLevel=s=>levelFrom(s?.delve?.xp||0);
export const classRank=(s,hero=s?.hero)=>levelFrom(s?.delve?.classXP?.[hero]||0,RANK_MAX);
export const DELVER_TITLES={10:'Delver',20:'Pathfinder',30:'Vaultbreaker',40:'Deepwarden',50:'Master Delver'};
export const delverTitle=L=>{let t='';for(const [at,name] of Object.entries(DELVER_TITLES))if(L>=+at)t=name;return t;};
export const RANK_TITLES={5:'Adept',15:'Veteran',25:'Champion'};
export const rankTitle=(hero,R)=>{let t='';for(const [at,name] of Object.entries(RANK_TITLES))if(R>=+at)t=`${CLASSES[hero]?.name||hero} ${name}`;return t;};
/* SkyBlock's role for each class (section 5.7), shown on the class rank. */
export const ROLES={paladin:'Tank',berserker:'Berserk',warrior:'Berserk',ranger:'Archer',rogue:'Archer',mage:'Mage',summoner:'Healer'};
/* The Delver level a Legendary pad recommends, by chapter (owner decision 3: advice only, never a gate). */
export const REC_DELVER={elderwood:5,emberkeep:12,veilmoor:20};
export const recDelver=(level,tier)=>tier==='legendary'&&level?.kind==='level'&&!level.hidden?REC_DELVER[level.chapter]||0:0;
/* Back-fill for an older save (save v8 migration): half of what its past clears would have paid, from each tier record's
   plays (wins are not recorded apart, so a cleared record's plays count at its stars' grade: 3 stars A, 2 B, 1 C). */
export function backfillDelve(levels,levelById){let xp=0;for(const [id,top] of Object.entries(levels||{})){const l=levelById(id);if(!l||l.kind!=='level'||l.hidden)continue;
 for(const [k,r] of [['normal',top],...Object.entries(top?.tiers||{})]){if(!r?.done)continue;const g=(r.stars|0)>=3?'A':(r.stars|0)===2?'B':'C';xp+=runXP(l,{won:true,grade:g,tier:k})*Math.max(1,r.plays|0)*.5;}}
 return Math.round(xp);}
