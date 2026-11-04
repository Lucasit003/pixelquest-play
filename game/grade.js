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
/* improve20-r11a-nov2 #5 (audit9 a8): switched on. Stars come from the grade (game/levels.js runStars); see gradeStars below. */
export const GRADE_STARS=true;
export const GRADES=[['S+',297],['S',290],['A',258],['B',210],['C',140],['D',0]];
export const GRADE_KEYS=GRADES.map(g=>g[0]);
export const gradeOf=total=>(GRADES.find(([,min])=>total>=min)||GRADES[GRADES.length-1])[0];
/* rank: higher is better (D 0 .. S+ 5); -1 for no grade */
export const gradeRank=g=>g?GRADE_KEYS.length-1-GRADE_KEYS.indexOf(g):-1;
export const betterGrade=(a,b)=>gradeRank(a)>=gradeRank(b)?a:b;
/* the asset name of a grade's badge (ui/skin/run/grade-*.png) */
export const gradeFile=g=>`grade-${String(g||'d').toLowerCase().replace('+','plus')}`;
/* Stars from the grade (GRADE_STARS). Owner decision 1a sketched a win 1, A 2, S and S+ 3; improve20-r11a-nov2 #5 measured it first
   (tools/balance-sim.mjs, Normal campaign, 7 classes): the scrappy kid (--bot=masher --skill=.5 --find=0) wins mostly B (its Paladin
   mostly C), so 1a gave it 10-13 stars before m1's 15-star gate and 18-24 before v1's 35: the gates would close on it. So every ordinary
   win is 2: S and S+ 3 (a clean run), A, B and C 2 (a scrappy win), D 1 (a win that nearly fell). Measured: the kid bot gets 3 on 54% and
   2 on 46% of its wins, the good bot 70/30, the scrappy kid 2 on 98%; every bot reaches m1's gate on the main road (16+ of 15), and v1's
   (35+ on the main road for the kid and good bots; the scrappy kid had 30, so v1's gate went 35 -> 30 at merge: a struggling kid must not be
   stuck at a chapter gate; better grades and Heroic replays still add stars, as v1's gate line says). */
export const gradeStars=g=>!g?0:gradeRank(g)>=gradeRank('S')?3:gradeRank(g)>=gradeRank('C')?2:1;
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
/* improve20-r8a-nov1 #4 (audit7 d7): all 17 Normal wins in the audit were B, and the card face never said what an A needs. gradeTip(run) is the
   one line for the card face, in kid words with the points: "A is 48 points away: find the secret (+40)". Exploration's secret is named first
   (it is exact and a kid can plan for it); then whichever of Skill or Speed has the most room ("up to", since those are earned by degree); a
   second step is added only when the first cannot reach the next grade alone. part is what the world-map card remembers (best.tip). */
export function gradeOptions(run){const need=Math.max(1,run?.need|0||1),found=Math.max(0,run?.found|0),o=[];
 if(found<need){const n=need-found;o.push({part:'explore',pts:Math.round(40*Math.min(1,n/need)),text:need===1?'find the secret':`find ${n} more secret${n>1?'s':''}`,exact:true});}
 const rest=[];if((run?.skill??100)<100)rest.push({part:'skill',pts:100-run.skill,text:'take fewer hits'});if((run?.speed??100)<100)rest.push({part:'speed',pts:100-run.speed,text:'finish faster'});
 return [...o,...rest.sort((a,b)=>b.pts-a.pts)];}
/* improve20-r16a-nov3 #8 (audit12 finding 20: a B-grade kid was pointed at A, which earns the same 2 stars): the tip points at the nearest grade
   above that earns a star more (gradeStars): from B, C or A that is S (3 stars), from D it is C; at S (all stars earned) it stays S+, as before.
   Up to three steps are named when the first ones cannot reach it alone. */
export function starGrade(total,grade){const i=GRADES.findIndex(([,min])=>total>=min);if(i<=0)return null;const have=gradeStars(grade||GRADES[i][0]);for(let j=i-1;j>=0;j--)if(gradeStars(GRADES[j][0])>have)return {grade:GRADES[j][0],need:GRADES[j][1]-total,stars:gradeStars(GRADES[j][0])};return null;}
export function gradeTip(run){if(!run?.grade)return null;const ng=starGrade(run.total,run.grade)||nextGrade(run.total);if(!ng)return null;const o=gradeOptions(run),star=ng.stars?` (${ng.stars}★)`:'';if(!o.length)return {grade:ng.grade,need:ng.need,part:'bonus',text:`${ng.grade}${star} is ${ng.need} point${ng.need>1?'s':''} away: beat elites and find the Mimic for bonus points`};
 const say=x=>`${x.text} (${x.exact?'':'up to '}+${x.pts})`,steps=[];let sum=0;for(const x of o){steps.push(x);sum+=x.pts;if(sum>=ng.need||steps.length>=3)break;}const said=[...steps.map(say),...(sum<ng.need?['earn bonus points (elites, the Mimic)']:[])];
 return {grade:ng.grade,need:ng.need,part:o[0].part,text:`${ng.grade}${star} is ${ng.need} point${ng.need>1?'s':''} away: ${said.length>1?said.slice(0,-1).join(', ')+' and '+said[said.length-1]:said[0]}`};}
/* the world-map card's short line from a record's best grade and remembered part: "Best: B. Find the secret for A" */
export function padGradeLine(best,tier='normal'){const g=best?.grade;if(!g||!GRADE_KEYS.includes(g))return '';const i=GRADE_KEYS.indexOf(g);if(i<=0)return `Best: ${g}. The top grade!`;/* improve20-r16a-nov3 #8: the same star target as the win card's tip (S from A, B or C) */const up=GRADES.slice(0,i).reverse().find(([k])=>gradeStars(k)>gradeStars(g))?.[0]||GRADE_KEYS[i-1],need=NEED_SECRETS[tier]||1;
 const what={explore:need===1?'Find the secret':`Find all ${need} secrets`,skill:'Take fewer hits',speed:'Finish faster'}[best.tip];return what?`Best: ${g}. ${what} for ${up}`:`Best: ${g}. Next: ${up}`;}
