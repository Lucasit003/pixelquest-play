/* Daily goals (herocard-oct27; docs/playtest/newplayer-oct27/REPORT.md idea 6). Up to three small optional goals per real
   day, all adventure-side (VISION pillar 4: dailies are adventure-only, never learning): one level goal, one feat in a
   level and one town visit, picked from the date alone (the same three for everyone on that day).
   Pillar 4 (no pressure): no streaks, no counters across days, no loss for a missed day, no timers or countdowns. On a new
   day the record is simply replaced; unfinished goals go away quietly. Rewards are a little gold or one crafting material,
   never XP, and gold never unlocks anything. The three together pay at most about a quarter of a typical replay's gold
   (tests/herocard-oct27.test.js pins it).
   Save: s.daily = {day:'YYYY-MM-DD', n:{[goalId]:count}, done:[goalId]} -- additive within save v9, so no version bump;
   normalize() runs cleanDaily(), and a save without it starts empty. Pure: callers pass the save and the time. */
export const GOALS=[
 /* adventure: a fall still counts for "play" */
 {id:'play-1',kind:'adventure',on:'play',need:1,text:'Play any level (win or lose)',gold:10},
 {id:'win-1',kind:'adventure',on:'win',need:1,text:'Win any level',gold:12},
 {id:'win-2',kind:'adventure',on:'win',need:2,text:'Win two levels',gold:12},
 /* feats in a level, read from the run result when it ends (a fall counts too) */
 {id:'foes-20',kind:'feat',on:'foes',need:20,text:'Defeat 20 foes',gold:10},
 {id:'secret-1',kind:'feat',on:'secret',need:1,text:'Find a secret spot in a level',gold:10},
 {id:'star-1',kind:'feat',on:'star',need:1,text:'Earn a new star',gold:10},
 /* town: walk through a building's door (scenes/town.js visits). Every one is open and on the town map and fast travel: `spot` is
    its game/fasttravel.js TOWN_SPOTS id (tests/ready2fix-oct30.test.js checks the door leads to `room`). ready2fix-oct30 #2: the
    Herbalist closed in the Inn merge (24 Oct), so its goal became Hob's Farm in the same slot (every other day keeps its goals) */
 {id:'visit-apothecary',kind:'town',on:'visit',room:'apothecary',spot:'alchemist',text:'Visit the Apothecary',gold:8},
 {id:'visit-home',kind:'town',on:'visit',room:'home',spot:'home',text:'Stop by your Home',gold:8},
 {id:'visit-weaponsmith',kind:'town',on:'visit',room:'weaponsmith',spot:'smith',text:'Visit the Weaponsmith',mat:'elite-shard',matName:'Essence',n:1},
 {id:'visit-inn',kind:'town',on:'visit',room:'inn',spot:'inn',text:'Visit the Lantern Inn',gold:8},
 {id:'visit-chapel',kind:'town',on:'visit',room:'chapel',spot:'chapel',text:'Visit the Starlight Chapel',gold:8},
 {id:'visit-guild',kind:'town',on:'visit',room:'guild_shop',spot:'guild',text:'Visit the Adventurers’ Guild',gold:8},
 {id:'visit-farm',kind:'town',on:'visit',room:'farmhouse',spot:'farm',text:'Visit Hob’s Farm',mat:'elite-shard',matName:'Essence',n:1}];
/* rooms whose door is shut (scenes/town.js says "(closed)"): no daily goal may ever send a child there */
export const CLOSED_ROOMS=['herbalist'];
/* a retired goal id and the goal that took its slot: a save from before keeps its count and its paid record (cleanDaily) */
export const RETIRED={'visit-herbalist':'visit-farm'};
const live=id=>RETIRED[id]??id;
export const GOAL=Object.fromEntries(GOALS.map(g=>[g.id,{need:1,...g}]));
export const KINDS=['adventure','feat','town'];
/* the only events a daily goal can count: adventure and town, never answers, lessons or mastery */
export const EVENTS=['play','win','foes','secret','star','visit'];
const pad=n=>String(n).padStart(2,'0');
/* the player's own calendar day (local time) */
export const dayKey=(now=Date.now())=>{const d=new Date(now);return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;};
const DAY=/^\d{4}-\d\d-\d\d$/;
const hash=str=>{let h=2166136261;for(const c of String(str)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0;}return h>>>0;};
/* the day's goals: one per kind, from the date only */
export function goalsFor(day){const h=hash('daily:'+day);return KINDS.map((k,i)=>{const pool=GOALS.filter(g=>g.kind===k&&!CLOSED_ROOMS.includes(g.room));return GOAL[pool[(h>>>(i*8))%pool.length].id];});}
export const emptyDaily=()=>({day:null,n:{},done:[]});
/* exploit4-oct27 (playtest: the device clock moved back and forth between two dates re-paid both days' goals every switch, 174
   gold in three switches): s.daily.paid = {'YYYY-MM-DD':[goalId]} remembers which goals each of the last PAID_DAYS days already
   paid, so a day that comes back (a clock set back, then forward again) shows its goals as done and pays nothing twice. It is
   only that record: never shown, never counted, no streak, and a real new day still starts fresh. A date earlier than every
   remembered day while the record is full counts as paid out (a cycle through many dates cannot push a day out and back in).
   Only present once a goal has paid, so a save that never finished one keeps the {day,n,done} shape. */
export const PAID_DAYS=14;
const cleanIds=a=>Array.isArray(a)?[...new Set(a.map(live).filter(id=>GOAL[id]))].slice(0,KINDS.length):[];
function trimPaid(p){const out={};for(const k of Object.keys(p||{}).filter(k=>DAY.test(k)).sort().reverse().slice(0,PAID_DAYS)){const ids=cleanIds(p[k]);if(ids.length)out[k]=ids;}return out;}
export function cleanDaily(v){const d=emptyDaily();if(!v||typeof v!=='object'||Array.isArray(v))return d;if(typeof v.day==='string'&&DAY.test(v.day))d.day=v.day;
 if(v.n&&typeof v.n==='object')for(const [old,c] of Object.entries(v.n)){const id=live(old);if(GOAL[id]&&Number.isFinite(+c))d.n[id]=Math.max(d.n[id]|0,Math.min(GOAL[id].need,Math.floor(+c)));}
 d.done=cleanIds(v.done);if(v.paid&&typeof v.paid==='object'&&!Array.isArray(v.paid)){const p=trimPaid(v.paid);if(Object.keys(p).length)d.paid=p;}return d;}
/* a new day replaces the record: nothing carries over, nothing is lost but the unfinished goals (a remembered day comes back as it was paid) */
export function syncDay(s,now=Date.now()){const day=dayKey(now);if(!s.daily||s.daily.day!==day){const old=s.daily,paid={...(old?.paid||{})};if(old?.day&&old.done?.length)paid[old.day]=cleanIds([...(paid[old.day]||[]),...old.done]);
  const kept=trimPaid(paid),keys=Object.keys(kept).sort(),full=keys.length>=PAID_DAYS&&day<keys[0],done=full?goalsFor(day).map(g=>g.id):cleanIds(kept[day]);
  s.daily={day,n:{},done};if(keys.length)s.daily.paid=kept;}return s.daily;}
export const rewardText=g=>g.gold?`+${g.gold} gold`:`+${g.n||1} ${g.matName||'material'}`;
export function dailyView(s,now=Date.now()){const d=syncDay(s,now);return goalsFor(d.day).map(g=>{const done=d.done.includes(g.id);return {...g,have:done?g.need:Math.min(g.need,d.n[g.id]|0),done,reward:rewardText(g)};});}
/* An event from EVENTS ('visit' with arg = the room; 'foes', 'secret', 'star' with arg = how many). Returns the goals it finished, already paid. */
export function dailyEvent(s,on,arg,now=Date.now()){if(!EVENTS.includes(on))return [];const by=on==='foes'||on==='secret'||on==='star'?Math.max(0,Math.floor(+arg||0)):1;if(!by)return [];const d=syncDay(s,now),out=[];
 for(const g of goalsFor(d.day)){if(g.on!==on||d.done.includes(g.id)||(g.room&&g.room!==arg))continue;d.n[g.id]=Math.min(g.need,(d.n[g.id]|0)+by);
  if(d.n[g.id]>=g.need){d.done.push(g.id);if(g.gold)s.gold=(s.gold|0)+g.gold;else if(g.mat){s.gear??={};s.gear.mats??={};s.gear.mats[g.mat]=(s.gear.mats[g.mat]|0)+(g.n||1);}out.push({...g,line:`Daily goal done: ${rewardText(g)}`});}}
 if(out.length)d.paid=trimPaid({...(d.paid||{}),[d.day]:d.done});return out;}
/* the most gold any one day's three goals can pay (the balance pin) */
export const maxDailyGold=()=>KINDS.reduce((t,k)=>t+Math.max(...GOALS.filter(g=>g.kind===k).map(g=>g.gold||0)),0);
