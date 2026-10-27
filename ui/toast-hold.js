/* oct25-quizpolish: how long a toast stays up, and the Try-it key line's place in the queue (docs/playtest/oct25-tryit "Left over").
   A message can carry a hold (the Try-it key line: 6 s, a key to remember, read once); every other message stays
   max(3 s, 60 ms a character), as before. The hold is kept by message, so a key line that a banner interrupts and
   that comes back from the queue gets its full time again. When the key line takes the toast over, a message already
   showing (a level's "This visit: ... mini-boss") goes back to the front of the queue, right after it, instead of being lost. */
export const toastMs=(message,hold)=>hold?.get(message)||Math.max(3000,String(message??'').length*60);
export function requeueShowing(queue,showing,next,max=3){if(showing&&showing!==next&&!queue.includes(showing)){queue.unshift(showing);if(queue.length>max)queue.pop();}return queue;}
/* A message that asks to show at once (an armour or ability hint) waits while a held message is still within its hold. */
export const heldUp=({shown,text,message,hold,now,free})=>!!(shown&&hold?.has(text)&&text!==message&&!hold.has(message)&&now<free);
