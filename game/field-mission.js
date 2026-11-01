/* Applied arithmetic, independently derived in tests/field-mission.test.js.
   Optional field work awards gold once; it never changes academic mastery or retirement. */
import {addPotions} from './potions.js';
import {replayGoldAt} from './daily.js';
export const FIELD_REWARD=10;
/* improve20-t-oct31 #19 (audit2 #20: it paid 10 gold at level 9): the delivery pays what a Normal level replay pays at the hero's level
   (daily.js REPLAY_GOLD: the richest Normal replay a level-L hero can play; 97 at level 1, 180 at level 9), never less than the old
   FIELD_REWARD, and every screen that offers the mission says so before the first task. Gold only (no XP, nothing unlocked), paid once
   as before. record.gold keeps what was paid; an older rewarded record without it was paid FIELD_REWARD and is never back-paid. */
export const fieldGold=level=>Math.max(FIELD_REWARD,replayGoldAt(level));
/* kidfix-a-oct31 (kid-appeal playtest: "+10 gold" felt like nothing): the delivery also packs FIELD_POTION health potion, through the
   potion bag (game/potions.js addPotions: a full bag sells it for BAG.overflow gold). record.potion = 'added' | 'sold' says which, for the
   delivery screen; a save rewarded before this keeps its record as it was (nothing is paid twice or back-paid) */
export const FIELD_POTION=1;
/* improve20-r7b-nov1 #2 (audit6 #20): the counted things are pictures, not dots: the apple is a PixelLab icon made for this
   (art/pixellab/gear/provenance.json), the water bottle the Library's blue potion prop (PixelLab, assets/sprites/theater-potion-blue.png cropped to its picture as ui/skin/rewards/bottle-blue.png). One picture per thing counted. */
export const SUPPLY_ART={apple:{src:'ui/skin/rewards/apple.png',alt:'apple'},bottle:{src:'ui/skin/rewards/bottle-blue.png',alt:'bottle'}};
export const supplyIcons=(q,n)=>{const a=SUPPLY_ART[q?.item];return a?Array.from({length:n|0},()=>`<img class="supply-icon supply-${q.item}" src="${a.src}" alt="" width="32" height="32" draggable="false">`).join(''):'● '.repeat(n|0);};
export const FIELD_TASKS={
 elementary:[
  {title:'Pack the supplies',prompt:'Two crates hold 4 apples each. Add 3 loose apples. How many apples can you send to the south gate?',hint:'Count both crates first: 4 + 4. Then add the 3 loose apples.',answer:11,explanation:'4 + 4 + 3 = 11 apples.',visual:[4,4,3],item:'apple'},
  {title:'Share with the guards',prompt:'You packed 11 apples. The guards eat 6. How many apples are left?',hint:'Start with 11 and take away 6.',answer:5,explanation:'11 − 6 = 5 apples left.'},
  {title:'Fill the water rack',prompt:'There are 3 rows of bottles, with 2 bottles in each row. How many bottles are there?',hint:'Add 2 three times, one row at a time.',answer:6,explanation:'2 + 2 + 2 = 6 bottles.',visual:[2,2,2],visualLayout:'rows',item:'bottle'}
 ],
 middle:[
  {title:'Pack the supplies',prompt:'The storehouse has 24 ration packs. Send three quarters of them to the south gate. How many packs do you send?',hint:'Find one quarter of 24, then multiply by 3.',answer:18,explanation:'24 ÷ 4 = 6; 6 × 3 = 18 packs.'},
  {title:'Mix the repair mortar',prompt:'Mortar uses 2 parts lime to 3 parts sand. For 25 buckets in total, how many buckets of sand are needed?',hint:'There are 5 equal parts altogether. Sand takes 3 of those parts.',answer:15,explanation:'25 ÷ (2 + 3) = 5 buckets per part. 3 × 5 = 15 buckets of sand.'},
  {title:'Plan the delivery',prompt:'A cart travels 1.5 kilometres in 15 minutes at a constant speed. How many kilometres will it travel in 40 minutes?',hint:'Find the distance per minute, then multiply by 40.',answer:4,explanation:'1.5 ÷ 15 = 0.1 km per minute. 0.1 × 40 = 4 km.'}
 ],
 high:[
  {title:'Check the manifest',prompt:'Four equally loaded crates and 6 loose ration packs contain 38 packs in total. How many packs are in each crate?',hint:'Model the count as 4c + 6 = 38. Remove the loose packs before dividing.',answer:8,explanation:'4c + 6 = 38, so 4c = 32 and c = 8 packs per crate.'},
  {title:'Audit the stock',prompt:'Of 30 lanterns, 12 need repairs. What percentage of the lanterns need repairs? Enter the number without the percent sign.',hint:'Divide the number needing repair by the total, then multiply by 100.',answer:40,explanation:'(12 ÷ 30) × 100 = 40%.'},
  {title:'Plan within a budget',prompt:'A repair order has x planks at 3 gold each and (x + 4) nails at 2 gold each. With a budget of 48 gold, what is the largest whole-number value of x?',hint:'Use 3x + 2(x + 4) ≤ 48 and collect the x terms.',answer:8,explanation:'3x + 2x + 8 ≤ 48 gives 5x ≤ 40, so x ≤ 8. At x = 8, the cost is 24 + 24 = 48 gold.'}
 ]};
export const fieldStage=s=>['middle','high'].includes(s.schoolMode)?s.schoolMode:'elementary';
export function cleanFieldMission(value){return {at:Object.fromEntries(Object.keys(FIELD_TASKS).map(k=>[k,Math.max(0,Math.min(3,Math.floor(Number(value?.at?.[k])||0)))])),rewarded:value?.rewarded===true,...(value?.rewarded===true&&['added','sold'].includes(value?.potion)?{potion:value.potion}:{}),...(value?.rewarded===true&&Number(value?.gold)>0?{gold:Math.floor(Number(value.gold))}:{})};}
export function fieldMission(save){const stage=fieldStage(save),record=cleanFieldMission(save.fieldMission),at=record.at[stage];return {stage,at,task:FIELD_TASKS[stage][at]||null,done:at===3,rewarded:record.rewarded,potion:record.potion||null,gold:record.rewarded?record.gold||FIELD_REWARD:0,reward:fieldGold(save.level)};}
export function answerFieldMission(save,input){const state=fieldMission(save),text=String(input).trim();if(!state.task||!text||!/^[-+]?\d+(\.\d+)?$/.test(text)||Number(text)!==state.task.answer)return {ok:false,gold:0};const record=cleanFieldMission(save.fieldMission);record.at[state.stage]++;const gold=record.at[state.stage]===3&&!record.rewarded?fieldGold(save.level):0;let potion=null;if(gold){record.rewarded=true;record.gold=gold;save.gold=(Number(save.gold)||0)+gold;potion=addPotions(save,FIELD_POTION);record.potion=potion.added?'added':'sold';}save.fieldMission=record;return {ok:true,gold,potion,done:record.at[state.stage]===3};}
