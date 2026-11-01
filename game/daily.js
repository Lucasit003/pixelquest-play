/* Daily goals (herocard-oct27; docs/playtest/newplayer-oct27/REPORT.md idea 6). Up to three small optional goals per real
   day, all adventure-side (VISION pillar 4: dailies are adventure-only, never learning): one level goal, one feat in a
   level and one town visit, picked from the date alone (the same three for everyone on that day).
   Pillar 4 (no pressure): no streaks, no counters across days, no loss for a missed day, no timers or countdowns. On a new
   day the record is simply replaced; unfinished goals go away quietly. Rewards are a little gold or one crafting material,
   never XP, and gold never unlocks anything. The three together pay at most about a quarter of a typical replay's gold at the
   hero's level (kidfix-a-oct31: goalGold scales with it)
   (tests/herocard-oct27.test.js pins it).
   Save: s.daily = {day:'YYYY-MM-DD', n:{[goalId]:count}, done:[goalId]} -- additive within save v9, so no version bump;
   normalize() runs cleanDaily(), and a save without it starts empty. Pure: callers pass the save and the time.
   improve20-f-nov1 #10 (audit5 #2): each day's adventure goal pays a prize you can see instead of its gold: the cheapest Home piece
   (game/furniture.js, Decorate catalogue, Showpieces excepted) the save does not own yet, the day's date choosing among equally cheap
   ones. Nothing random: the prize is shown before the goal is done and is the same all day for the same save. A save that owns every
   piece gets the goal's gold as before. Cosmetic only (furniture never reads into a fight or learning); no new save field.
   improve20-r7a-nov1 #8 (audit6 #9: Day 1's prize was a "Small fern", day 2 and day 9 a "Red stool"): the prize is a keepsake a kid wants
   (game/prizes.js): a hero title, a trail colour, a hero-card backdrop or a Home piece. The date picks the kind (prizeKindFor) and then the
   piece among the ones this save does not own (any Home piece, not only the cheapest); a kind with nothing left passes to the next. Still
   nothing random-for-reward and nothing counted across days: the same save sees the same prize all day. */
import {FURNITURE,FURN} from './furniture.js';
import {PRIZES,PRIZE,PRIZE_KINDS,givePrize,owns,prizeLabel,prizeWhere} from './prizes.js';
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
 d.done=cleanIds(v.done);if(typeof v.prize==='string'&&(PRIZE[v.prize]||FURN[v.prize]&&FURN[v.prize].kind!=='show')&&d.day)d.prize=v.prize;if(v.paid&&typeof v.paid==='object'&&!Array.isArray(v.paid)){const p=trimPaid(v.paid);if(Object.keys(p).length)d.paid=p;}return d;}
/* a new day replaces the record: nothing carries over, nothing is lost but the unfinished goals (a remembered day comes back as it was paid) */
export function syncDay(s,now=Date.now()){const day=dayKey(now);if(!s.daily||s.daily.day!==day){const old=s.daily,paid={...(old?.paid||{})};if(old?.day&&old.done?.length)paid[old.day]=cleanIds([...(paid[old.day]||[]),...old.done]);
  const kept=trimPaid(paid),keys=Object.keys(kept).sort(),full=keys.length>=PAID_DAYS&&day<keys[0],done=full?goalsFor(day).map(g=>g.id):cleanIds(kept[day]);
  s.daily={day,n:{},done};if(keys.length)s.daily.paid=kept;}return s.daily;}
/* kidfix-a-oct31 (kid-appeal playtest: +8 to +12 gold to a level-9 hero holding 391): gold goals scale with the hero level and keep
   the header's ratio. REPLAY_GOLD[L-1] is the most Normal replay gold any level a level-L hero can replay pays (the richest level of
   tier <= L), measured with the herocard-oct27 replay simulation (tests/kidfix-a-oct31.test.js re-measures it). ELDERWOOD_REPLAY is the
   "typical replay" the base amounts were pinned against (the median Elderwood e1-e8 replay); a hero's goals pay
   base x REPLAY_GOLD/ELDERWOOD_REPLAY, never less than the base, so the three still pay at most about a quarter of that replay. */
export const ELDERWOOD_REPLAY=138;
export const REPLAY_GOLD=[97,116,123,126,145,180,180,180,180,180,180,180,180,180,180,180,180,180,197,202,213,213];
export const replayGoldAt=level=>REPLAY_GOLD[Math.max(1,Math.min(REPLAY_GOLD.length,Math.floor(+level)||1))-1];
export const goldScale=level=>Math.max(1,replayGoldAt(level)/ELDERWOOD_REPLAY);
export const goalGold=(g,level=1)=>g.gold?Math.round(g.gold*goldScale(level)):0;
export const rewardText=(g,level=1)=>g.gold?`+${goalGold(g,level)} gold`:`+${g.n||1} ${g.matName||'material'}`;
export const PRIZE_KIND='adventure';
/* the kind of keepsake a day offers first (from the date only), then the rest in order */
export const prizeKindFor=day=>{const i=hash('prizekind:'+day)%PRIZE_KINDS.length;return [...PRIZE_KINDS.slice(i),...PRIZE_KINDS.slice(0,i)];};
const decorOf=f=>f&&{key:f.id,kind:'decor',id:f.id,name:f.name,img:f.img};
/* the day's prize for this save: {key, kind, name, img?|color?}, or null once everything is owned */
/* a Home piece day picks among every unowned piece (Showpieces excepted) by the date, so a royal bed or a treasure chest can come, not only the
   cheapest stool (prizeFor, kept for older callers) */
export const decorPrizeFor=(s,day)=>{const free=FURNITURE.filter(f=>f.kind!=='show'&&!((s?.house?.owned?.[f.id]|0)>0));return free.length?free[hash('decor:'+day)%free.length]:null;};
export function dailyPrize(s,day){for(const k of prizeKindFor(day)){if(k==='decor'){const f=decorPrizeFor(s,day);if(f)return decorOf(f);continue;}
  const free=PRIZES.filter(p=>p.kind===k&&!owns(s,p.key));if(free.length)return free[hash('prize:'+k+':'+day)%free.length];}return null;}
const prizeByKey=key=>PRIZE[key]||decorOf(FURN[key]&&FURN[key].kind!=='show'?FURN[key]:null)||null;
/* the day's prize piece for this save: the cheapest unowned non-Showpiece, ties settled by the date; null once every piece is owned */
export function prizeFor(s,day){const free=FURNITURE.filter(f=>f.kind!=='show'&&!((s?.house?.owned?.[f.id]|0)>0));if(!free.length)return null;const low=Math.min(...free.map(f=>f.price)),pick=free.filter(f=>f.price===low);return pick[hash('prize:'+day)%pick.length];}
/* s.daily.prize: the piece today's prize goal paid (a FURN id), so the done goal still names it; additive, cleaned by cleanDaily, gone on a new day */
const prizeOf=(s,g,d)=>g.kind===PRIZE_KIND?dailyPrize(s,d.day):null;
export const prizeText=p=>p.kind==='title'?`Title: ${p.name}`:p.kind&&p.kind!=='decor'?p.name:`${p.name} for your Home`;
export function dailyView(s,now=Date.now()){const d=syncDay(s,now);return goalsFor(d.day).map(g=>{const done=d.done.includes(g.id),f=!done&&prizeOf(s,g,d),paid=done&&g.kind===PRIZE_KIND&&d.prize?prizeByKey(d.prize):null,p=f||paid;return {...g,gold:p?0:goalGold(g,s.level),have:done?g.need:Math.min(g.need,d.n[g.id]|0),done,reward:p?prizeText(p):done&&g.kind===PRIZE_KIND&&d.prize?'A keepsake':rewardText(g,s.level),...(p?{prize:p.key,prizeKind:p.kind,...(p.img?{prizeImg:p.img}:{}),...(p.color?{prizeColor:p.color,prizeSpark:p.spark}:{})}:{})};});}
/* An event from EVENTS ('visit' with arg = the room; 'foes', 'secret', 'star' with arg = how many). Returns the goals it finished, already paid. */
export function dailyEvent(s,on,arg,now=Date.now()){if(!EVENTS.includes(on))return [];const by=on==='foes'||on==='secret'||on==='star'?Math.max(0,Math.floor(+arg||0)):1;if(!by)return [];const d=syncDay(s,now),out=[];
 for(const g of goalsFor(d.day)){if(g.on!==on||d.done.includes(g.id)||(g.room&&g.room!==arg))continue;d.n[g.id]=Math.min(g.need,(d.n[g.id]|0)+by);
  if(d.n[g.id]>=g.need){d.done.push(g.id);const f=prizeOf(s,g,d);
   if(f){if(f.kind==='decor'){s.house??={owned:{},items:[]};s.house.owned??={};s.house.owned[f.id]=(s.house.owned[f.id]|0)+1;}else givePrize(s,f.key);d.prize=f.key;out.push({...g,gold:0,prize:f.key,prizeKind:f.kind,line:`Daily goal done: ${prizeLabel(f)}! ${prizeWhere(f)}`});continue;}
   if(g.gold)s.gold=(s.gold|0)+goalGold(g,s.level);else if(g.mat){s.gear??={};s.gear.mats??={};s.gear.mats[g.mat]=(s.gear.mats[g.mat]|0)+(g.n||1);}out.push({...g,gold:goalGold(g,s.level),line:`Daily goal done: ${rewardText(g,s.level)}`});}}
 if(out.length)d.paid=trimPaid({...(d.paid||{}),[d.day]:d.done});return out;}
/* the most gold any one day's three goals can pay (the balance pin) */
export const maxDailyGold=(level=1)=>KINDS.reduce((t,k)=>t+Math.max(...GOALS.filter(g=>g.kind===k).map(g=>goalGold(g,level))),0);
