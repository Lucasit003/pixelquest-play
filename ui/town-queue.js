/* improve20-r16b-nov3 #6 (audit12 a14, shot 22: at the south gate "New: fast travel!", "Travel tips 1/2" and "Leave Oakhaven" showed at once): town
   overlays take turns, in this order: the held fast-travel tip (#travel-tip), then the Travel tips / Getting started card (#controls-tutorial),
   then the interact prompt. The card waits while the tip is up (main.js passes tipsWait() into the tutorial's `blocked`). The prompt waits
   while the tip is up, for at most PROMPT_WAIT s (game time) after the hero comes in reach of something (E still works meanwhile); then the
   tip steps aside (hidden with .town-wait, not closed) until the hero walks out of reach. While a prompt shows, the card steps aside too,
   unless its current step is the one teaching that prompt (teaches(), the "interact" step), so a new game's prompt is never held back.
   deps: tip() and card() return the elements (or null), inTown() whether the hero is in the town hub, teaches() whether the card is on its
   interact step, now() the clock in ms. */
export const PROMPT_WAIT=4;
export function createTownQueue({tip=()=>null,card=()=>null,inTown=()=>true,teaches=()=>false,now=()=>globalThis.performance?.now?.()??Date.now()}={}){let key='',since=0,turn=false,showing=false;
 const tipUp=()=>!!tip()&&!tip().classList.contains('town-wait'),set=on=>{turn=on;tip()?.classList.toggle('town-wait',on);};
 return {tipsWait:()=>tipUp()||showing&&inTown()&&!teaches(),
  /* hp: the hub's prompt ({text}) or null; true when the prompt may show this frame */
  prompt(hp){const k=hp?.text||'',t=now();if(!hp){key='';showing=false;if(turn)set(false);return false;}if(k!==key){key=k;since=t;}if(tipUp()&&(t-since)/1000<PROMPT_WAIT){showing=false;return false;}if(tipUp())set(true);showing=true;return true;},
  get turn(){return turn;},get showing(){return showing;}};}
/* improve20-r16b-nov3 #10 (audit12 a18, shot 26: on a phone the "Welcome back to Oakhaven. Last: ... · Next: ..." recap sat over the hero's legs and
   sword): on a phone the returning player's greeting fades as soon as the hero has walked HELLO_MOVE px from where it was when the line came up
   (the line is also on the title's Continue button, and the HUD goal says the same Next). */
export const HELLO_MOVE=14;
export const helloMoved=(from,p)=>!!from&&!!p&&Math.hypot(p.x-from.x,p.y-from.y)>=HELLO_MOVE;
