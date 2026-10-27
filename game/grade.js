/* The run grade (docs/design/research/SKYBLOCK_DUNGEONS_PROGRESSION.md section 5.1): every won map level gets a grade,
   D to S+, from four parts. Pure arithmetic: callers pass what happened in the run.
   - Skill (100): starts at 100, -15 per knockout (a fall that a wave retry brought back), -5 per 10% of max health lost
     (from the first hit), at most -80 for health. Potions are never penalised: `lost` is NET of what potions healed back
     (scenes/run-fx.js netLost, since oct24-progress).
   - Exploration (100): 60 for the waves (all of it on a win), 40 x secrets found / secrets needed (1/2/3 by tier).
   - Speed (100): full at or under half the tier's par, 50 at par, 20 at 2x par, 0 at 4x par. The clock is never shown in play.
   - Bonus (10 at most): +2 per elite (up to 6), +3 Mimic, +3 Scholar's Seal, +2 Blessing used, +2 a clear with no potion.
   A clean run (no hit taken, fast, the secrets found) with no bonus scores exactly 300 (S+), so S+ never needs anything
   optional (guardrail D1). S+ also needs no knockout and learned abilities doing at least a third of the damage
   (ABILITY_SHARE; `abilities` is that share, and a caller that does not know it passes nothing). A loss gets no grade and
   nothing marks the child down.
   Re-curved 24 Oct (oct24-balance2): S+ had become the usual Normal result for the kid-skill bot after Elderwood (77% of
   wins), so grades and chests meant little. Health lost used to be free up to 100% of max health and speed was full at
   par; the kid bot now averages B/A on Normal, A/S needs clean play and S+ is rare. Records keep their best grade, so a
   grade already in a save is never lowered.
   Re-curved again 24 Oct (oct24-progress, playtest r3 D2): with potions netted out of Skill the cut-offs moved up a little
   (S+ 297, S 290, A 258, B 210), so in tools/balance-sim.mjs the r3 playtest's kid (--bot=masher --skill=.5 --find=0) gets
   a B about three times in four, the careful kid bot (default) an A about two times in three, and S+ stays rare (7%).
   Owner, 14 Oct (provisional): the grade is shown BESIDE the time stars; stars are still earned from time. GRADE_STARS is
   the switch for the later change (stars from the grade); while it is false nothing reads gradeStars. */
export const GRADE_STARS=false;
export const GRADES=[['S+',297],['S',290],['A',258],['B',210],['C',140],['D',0]];
export const GRADE_KEYS=GRADES.map(g=>g[0]);
export const gradeOf=total=>(GRADES.find(([,min])=>total>=min)||GRADES[GRADES.length-1])[0];
/* rank: higher is better (D 0 .. S+ 5); -1 for no grade */
export const gradeRank=g=>g?GRADE_KEYS.length-1-GRADE_KEYS.indexOf(g):-1;
export const betterGrade=(a,b)=>gradeRank(a)>=gradeRank(b)?a:b;
/* the asset name of a grade's badge (ui/skin/run/grade-*.png) */
export const gradeFile=g=>`grade-${String(g||'d').toLowerCase().replace('+','plus')}`;
/* For the later switch (owner decision 1a): a win is 1 star, A 2, S and S+ 3. Unused while GRADE_STARS is false. */
export const gradeStars=g=>!g?0:gradeRank(g)>=gradeRank('S')?3:g==='A'?2:1;
export const NEED_SECRETS={normal:1,heroic:2,legendary:3};
export const KO_COST=15,HP_COST=50,HP_COST_CAP=80,FAST=.5,ABILITY_SHARE=1/3,BONUS_CAP=10,ELITE_BONUS=2,ELITE_BONUS_CAP=6;
export const BONUS={mimic:3,seal:3,blessing:2,noPotion:2};
export function speedPoints(time,par){if(!(par>0)||!Number.isFinite(time))return 100;const r=time/par;
 if(r<=FAST)return 100;if(r<=1)return Math.round(100-50*(r-FAST)/(1-FAST));if(r<=2)return Math.round(50-30*(r-1));if(r<=4)return Math.max(0,Math.round(20-10*(r-2)));return 0;}
/* run: {won, time, par, tier, waves, wavesTotal, knockouts, lost (max-health fractions lost in all), found (active secrets
   found), elites, mimic, seal, blessing, potions, abilities (share of damage from learned abilities, 0-1, optional)}. Returns {skill, explore, speed, bonus, total, grade, tips[], parts}. */
export function scoreRun(run={}){const tier=NEED_SECRETS[run.tier]?run.tier:'normal',won=!!run.won;
 const hpCost=Math.min(HP_COST_CAP,Math.floor(Math.max(0,+run.lost||0)*HP_COST+1e-9));
 const skill=Math.max(0,100-KO_COST*Math.max(0,run.knockouts|0)-hpCost);
 const total=Math.max(1,run.wavesTotal|0),need=NEED_SECRETS[tier],found=Math.max(0,run.found|0);
 const wavePts=won?60:Math.round(60*Math.min(1,Math.max(0,run.waves|0)/total)),secretPts=Math.round(40*Math.min(1,found/need));
 const explore=wavePts+secretPts;
 const speed=won?speedPoints(+run.time,+run.par):0;
 const parts={elites:Math.min(ELITE_BONUS_CAP,ELITE_BONUS*Math.max(0,run.elites|0)),mimic:run.mimic?BONUS.mimic:0,seal:run.seal?BONUS.seal:0,blessing:run.blessing?BONUS.blessing:0,noPotion:won&&!(run.potions>0)?BONUS.noPotion:0};
 const bonus=Math.min(BONUS_CAP,Object.values(parts).reduce((t,v)=>t+v,0));
 const sum=skill+explore+speed+bonus,ko=(run.knockouts|0)>0,abilShort=run.abilities!=null&&+run.abilities<ABILITY_SHARE;let grade=won?gradeOf(sum):null;if(grade==='S+'&&(ko||abilShort))grade='S';
 const tips=[];
 if(won){if(found<need)tips.push({part:'explore',text:`Find ${need-found} more secret${need-found>1?'s':''} for full Exploration.`});
  if(speed<100)tips.push({part:'speed',text:'A clear is a clear! Finishing faster fills Speed and can earn extra stars. There is no countdown.'});
  if(run.knockouts>0)tips.push({part:'skill',text:'Fewer falls fill Skill. Potions never cost points.'});
  else if(hpCost>0)tips.push({part:'skill',text:'Dodge a few more hits to fill Skill.'});
  /* oct24-r3 playtest: only two tips fit, so the part that lost the most points speaks first (an e1 clear with Skill 20 showed
     the secret and speed tips and never said to dodge). Ties keep the order above. */
  const gap={explore:40-secretPts,speed:100-speed,skill:100-skill};tips.sort((a,b)=>gap[b.part]-gap[a.part]);
  if(grade==='S'&&sum>=GRADES[0][1]&&!ko&&abilShort)tips.unshift({part:'skill',text:'Use your learned abilities more for S+.'});
  if(!tips.length&&sum<300&&bonus<BONUS_CAP)tips.push({part:'bonus',text:'Elites, the Mimic and the Blessing shrine all add Bonus.'});}
 return {skill,explore,speed,bonus,total:sum,grade,tips:tips.slice(0,2),parts,need,found};}
/* The next grade up and how many points it needs ({grade, need}); null at S+ or with no grade. */
export function nextGrade(total){const i=GRADES.findIndex(([,min])=>total>=min);if(i<=0)return null;const [g,min]=GRADES[i-1];return {grade:g,need:min-total};}
