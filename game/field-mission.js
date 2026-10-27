/* Applied arithmetic, independently derived in tests/field-mission.test.js.
   Optional field work awards gold once; it never changes academic mastery or retirement. */
export const FIELD_REWARD=10;
export const FIELD_TASKS={
 elementary:[
  {title:'Pack the supplies',prompt:'Two crates hold 4 apples each. Add 3 loose apples. How many apples can you send to the south gate?',hint:'Count both crates first: 4 + 4. Then add the 3 loose apples.',answer:11,explanation:'4 + 4 + 3 = 11 apples.',visual:[4,4,3]},
  {title:'Share with the guards',prompt:'You packed 11 apples. The guards eat 6. How many apples are left?',hint:'Start with 11 and take away 6.',answer:5,explanation:'11 − 6 = 5 apples left.'},
  {title:'Fill the water rack',prompt:'There are 3 rows of bottles, with 2 bottles in each row. How many bottles are there?',hint:'Add 2 three times, one row at a time.',answer:6,explanation:'2 + 2 + 2 = 6 bottles.',visual:[2,2,2],visualLayout:'rows'}
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
export function cleanFieldMission(value){return {at:Object.fromEntries(Object.keys(FIELD_TASKS).map(k=>[k,Math.max(0,Math.min(3,Math.floor(Number(value?.at?.[k])||0)))])),rewarded:value?.rewarded===true};}
export function fieldMission(save){const stage=fieldStage(save),record=cleanFieldMission(save.fieldMission),at=record.at[stage];return {stage,at,task:FIELD_TASKS[stage][at]||null,done:at===3,rewarded:record.rewarded};}
export function answerFieldMission(save,input){const state=fieldMission(save),text=String(input).trim();if(!state.task||!text||!/^[-+]?\d+(\.\d+)?$/.test(text)||Number(text)!==state.task.answer)return {ok:false,gold:0};const record=cleanFieldMission(save.fieldMission);record.at[state.stage]++;const gold=record.at[state.stage]===3&&!record.rewarded?FIELD_REWARD:0;if(gold){record.rewarded=true;save.gold=(Number(save.gold)||0)+gold;}save.fieldMission=record;return {ok:true,gold,done:record.at[state.stage]===3};}
