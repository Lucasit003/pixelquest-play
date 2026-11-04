import {readHold} from '../game/controls-tutorial.js';/* improve20-r20k-nov4 #1 */
/* oct25-quizpolish: how long a toast stays up, and the Try-it key line's place in the queue (docs/playtest/oct25-tryit "Left over").
   A message can carry a hold (the Try-it key line: 6 s, a key to remember, read once); every other message stays
   max(3 s, 60 ms a character), as before. The hold is kept by message, so a key line that a banner interrupts and
   that comes back from the queue gets its full time again. When the key line takes the toast over, a message already
   showing (a level's "This visit: ... mini-boss") goes back to the front of the queue, right after it, instead of being lost. */
/* improve20-r10b-nov2 #8: and never under about 1 s per 4 words (a short line with long words read too fast) */
/* improve20-r12c-nov2 #6 (kidsim2 #12: Zoe, reading about 70 words a minute, lost 14 toasts and Nia 8; max(3 s, 60 ms a character) is
   200-240 words a minute): outside a fight a toast stays max(KID_FLOOR, KID_MS a character); in a fight (`fight`, main.js toastFight) the
   old timing stands, so fight lines never sit over the action longer than before. A held message keeps its hold. */
export const KID_MS=90,KID_FLOOR=4000;
export const FIGHT_FLOOR=4000;
/* improve20-r17b-nov3 #5 (kidsim4 k12): in a fight a toast keeps a 4 s floor (FIGHT_FLOOR; it was 3 s) */
/* improve20-r20k-nov4 #1 (kidsim5 #15: "Found: Bramblejaw's Thorn Charm (Rare)! Wear it from Home →" and "Secret 1/3: 1 health potion" went before a kid
   read them): a find (FIND_TOAST) stays up at least its reading time, R20I's readHold (4 s or 200 words a minute), in a fight too; while it is within that
   time a line that asks to show at once waits behind it (findHeld), instead of cutting it. The result card lists every find of the run as well */
export const FIND_TOAST=/^(Found: |Secret)/;
export const findHeld=({shown,text,message,now,free})=>!!(shown&&text&&text!==message&&FIND_TOAST.test(text)&&now<free);
export const toastMs=(message,hold,fight=false)=>hold?.get(message)||Math.max(FIND_TOAST.test(String(message??''))?readHold(message)*1000:0,toastBase(message,fight));
const toastBase=(message,fight)=>(fight?Math.max(FIGHT_FLOOR,String(message??'').length*60,(String(message??'').match(/\S+/g)||[]).length*250):Math.max(KID_FLOOR,String(message??'').length*KID_MS,(String(message??'').match(/\S+/g)||[]).length*250));
export function requeueShowing(queue,showing,next,max=3){if(showing&&showing!==next&&!queue.includes(showing)){queue.unshift(showing);if(queue.length>max)queue.pop();}return queue;}
/* A message that asks to show at once (an armour or ability hint) waits while a held message is still within its hold. */
export const heldUp=({shown,text,message,hold,now,free})=>!!(shown&&text!==message&&now<free&&hold?.has(text)&&!hold.has(message));
/* improve20-r14c-nov3 #8 (kidsim3 k16): outside a fight a line that has not had its read time (toastMs: 90 ms a character, 4 s floor) and is
   cut by a line that must show at once (a key's answer, "Finish the conversation first") is not lost: it goes back to the front of the queue
   and shows again, in full, after the new one. In a fight the old rule stands (the newer line wins) */
export const cutShowing=({shown,text,message,now,free,fight})=>!!(shown&&!fight&&text&&text!==message&&now<free);
/* improve20-r10b-nov2 (kid sims nov2, items 8 and 13).
   Level tips: the boss tips (armour, blue guards) and the level's "This visit" line. Once one is up it stays for its read time under the fight
   banners (a stage banner used to hide it and put it back in the queue, so "Plain hits glance off..." showed 6 times for under 2.5 s each).
   A boss tip shows once per level visit (until the hero is back in town) and never twice within TIP_GAP ms. */
/* (on a phone the visit line is its short form, game/draft.js: "The Imp Warchief mini-boss · Blessing of Life shrine") */
/* improve20-r12c-nov2 #7 (kidsim2 #13): the retry potion line ("+1 health potion for this try") is a level tip too; main.js raises it once
   per try, after the level's title and boss cards (RETRY_POTION) */
export const LEVEL_TIP=/^(Plain hits glance off|Break blue guards|This visit:|Echoes of |\+1 health potion for this try)|( mini-boss| shrine)( · |$)/,BOSS_TIP=/^(Plain hits glance off|Break blue guards)/,TIP_GAP=30000;
export function tipAllowed(seen,message,visit,now){if(!BOSS_TIP.test(String(message??'')))return true;const o=seen.get(message);return !o||(o.visit!==visit&&now-o.at>=TIP_GAP);}
export function markTip(seen,message,visit,now){if(BOSS_TIP.test(String(message??'')))seen.set(message,{visit,at:now});}
/* The same line again soon after it was shown in full ("Secret 2/3" twice) is merged into the first: dropped within DUP_MS of its end. */
export const DUP_MS=12000;
export const recentDup=(done,message,now)=>done.has(message)&&now-done.get(message)<DUP_MS;
/* The queue keeps at most `max` lines. When it overflows, the oldest line that is only a tip or a reminder goes, never a reward, an unlock
   or a found secret (IMPORTANT_TOAST); only when every line is one of those does the oldest go. Duplicates by text merge. Returns the dropped line. */
export const IMPORTANT_TOAST=/^(Earned by learning|Found: |Save imported|Secret|Daily goal done|Level \d+ reached|New: )|unlocked|again: \+\d+ gold/i;
export function pushToast(queue,message,max=3){if(queue.includes(message))return null;queue.push(message);if(queue.length<=max)return null;let i=queue.findIndex(m=>!IMPORTANT_TOAST.test(m));if(i<0)i=0;return queue.splice(i,1)[0];}
/* improve20-r10b-nov2 #13: a line a fight banner takes down after it has been up long enough to read (READ_MS_WORD a word, at least 1.5 s)
   is done; only one cut short goes back in the queue (a secret's line came back a second time 3 s later) */
export const READ_MS_WORD=300;
export const readEnough=(message,shownMs)=>shownMs>=Math.max(1500,(String(message??'').match(/\S+/g)||[]).length*READ_MS_WORD);
/* kidsim2-nov2: a boss drop's "Found: X (Rare)! ..." line fires a moment before the victory card, is cut short by it and went back in the queue,
   so it popped up again at the start of the NEXT level, 20 s later (Theo e1->e2, e3->e4; Nia m3). The victory card already shows the item: a
   Found line naming an item the card shows is done once the card is up. findName reads the item's name; cardFinds picks those lines. */
export const findName=m=>(/^Found: (.+?) \(/.exec(String(m??''))||[])[1]||null;
/* improve20-r20k-nov4 #1: the card lists the run's secret finds too (ui/result-strip.js), so a waiting Secret line is done once a card that names them is up */
export const cardFinds=(lines,cardText)=>lines.filter(m=>{const n=findName(m),c=String(cardText??'');return n?c.includes(n):/^Secret/.test(String(m??''))&&/Secrets? (\d+\/\d+|found): /.test(c);});
/* improve20-r13c-nov2 #5 (audit10 a14): the top (page px) that keeps a toast box clear of the hero's box in town: just above him (GAP px) when it
   fits under bounds.top, else just below him when it fits over bounds.bottom; null when they do not cross or neither fits. Pure */
export const TOWN_TOAST_GAP=8;
/* improve20-r14c-nov3 #4 (audit11 b18): the same idea against everything a town toast must keep off: the hero, the people, the canvas name plates
   (SOUTH GATE · WORLD MAP) and the HUD chips. Boxes are {left,top,right,bottom} in one coordinate space; bounds also. Returns null when the box
   already crosses nothing; else the {left,top} nearest its own spot that crosses nothing (a sideways move costs twice an up or down one, so a
   toast keeps to its band and only steps aside when it must), inside bounds; null when nothing fits (it stays where it was). Pure */
export function townToastSpot(box,obstacles,bounds,gap=TOWN_TOAST_GAP){if(!box)return null;const w=box.right-box.left,h=box.bottom-box.top,obs=obstacles.filter(Boolean),hits=(l,t)=>obs.some(o=>l<o.right&&l+w>o.left&&t<o.bottom&&t+h>o.top);if(!hits(box.left,box.top))return null;
 const L=bounds.left??-Infinity,R=bounds.right??Infinity,ls=[box.left],ts=[box.top,bounds.top];if(Number.isFinite(L))ls.push(L);if(Number.isFinite(R))ls.push(R-w);for(const o of obs){ts.push(o.top-gap-h,o.bottom+gap);ls.push(o.left-gap-w,o.right+gap);}
 let best=null,bd=Infinity;for(const l of ls){if(l<L||l+w>R)continue;for(const t of ts){if(t<bounds.top||t+h>bounds.bottom||hits(l,t))continue;const d=Math.hypot((l-box.left)*2,t-box.top);if(d<bd){bd=d;best={left:l,top:t};}}}return best;}
export function townToastTop(box,hero,bounds){if(!box||!hero)return null;const cross=box.left<hero.right&&box.right>hero.left&&box.top<hero.bottom&&box.bottom>hero.top;if(!cross)return null;const h=box.bottom-box.top,up=hero.top-TOWN_TOAST_GAP-h;if(up>=bounds.top)return up;const down=hero.bottom+TOWN_TOAST_GAP;return down+h<=bounds.bottom?down:null;}
