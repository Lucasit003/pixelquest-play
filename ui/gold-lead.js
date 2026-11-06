/* improve26-r26e-nov6 #5 (kidsim9 #3: Leo ended 20 minutes with 2,512 unspent gold and Sam with 1,728-1,823; no line ever pointed at the smith, a
   plaque or the Home). One quiet gold lead, built on the win card's "next buy" (main.js nextBuyName, this file's featuredUpgrade): when the kid can
   afford something useful they don't own, one line names it and where. Useful: the next gear upgrade the judge calls better (featuredUpgrade, +8%
   or more, never a Scholar piece), else a plaque at Home for a boss they beat (game/furniture.js, R25R), the latest boss first. Shown in town
   under NEXT STEP (never the goal, never the red, never over a learning step's place) until the kid walks into the place it names, once per town
   visit (main.js), and as a win card's second line when that line is empty (game/card-lead.js). Nothing random, no timer, no price on learning. */
import {featuredUpgrade} from './gear-guidance.js';
import {ITEM} from '../game/gear.js';
import {PLAQUES_ALL,plaqueOpen} from '../game/furniture.js';
const num=n=>Math.max(0,n|0).toLocaleString('en-US');
const the=n=>/^the /i.test(n)?n.replace(/^The /,'the '):`the ${n}`;
/* -> {kind:'gear'|'plaque', id, name, cost, where:'smith'|'home', text} or null */
export function goldLead(save){const g=Math.max(0,save?.gold|0);if(!g||!save?.gear?.owned)return null;
 let u=null;try{u=featuredUpgrade(save);}catch{u=null;}
 if(u&&ITEM[u.id]&&!ITEM[u.id].scholar&&g>=(u.cost|0)){const n=ITEM[u.id].name;return {kind:'gear',id:u.id,name:n,cost:u.cost|0,where:'smith',text:u.kind==='craft'?`You have ${num(g)} gold: you can craft ${the(n)} at the Smith.`:`You have ${num(g)} gold: ${the(n)} is at the Smith.`};}
 const own=id=>(save.house?.owned?.[id]|0)>0,ps=PLAQUES_ALL.filter(f=>plaqueOpen(save,f.id)&&!own(f.id)&&g>=f.price);const f=ps.at(-1);
 if(f)return {kind:'plaque',id:f.id,name:f.name,cost:f.price,where:'home',text:`You have ${num(g)} gold: a plaque for ${the(String(f.boss||f.name).split(',')[0])} is at Home (Decorate).`};
 return null;}
export const goldLeadText=save=>goldLead(save)?.text||'';
