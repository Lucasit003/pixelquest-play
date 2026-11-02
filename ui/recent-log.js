/* improve20-r10d-nov2 #1 (kid sims nov2, polish list: "put toasts dropped from the queue into the Journal"). The toast queue keeps 3 lines
   and drops the oldest tip or reminder when it overflows (ui/toast-hold.js pushToast), so a line can go by unread. Every line main.js
   toast() accepts is also kept here: the last RECENT_MAX this session, newest first, plain text, one entry per line (a repeat moves to the
   top). Session only: nothing is written to the save (it stays v9). The Journal shows it on a slim "Recent" tab. Pure: no DOM. */
export const RECENT_MAX=20;
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function logRecent(list,message,max=RECENT_MAX){const m=String(message??'').replace(/\s+/g,' ').trim();if(!m)return list;const i=list.indexOf(m);if(i>=0)list.splice(i,1);list.unshift(m);if(list.length>max)list.length=max;return list;}
export function recentHTML(list){return list.length?`<p class="subtle recent-lead">Messages from this session, newest first.</p><ol class="recent-log" aria-label="Recent messages">${list.map(m=>`<li>${esc(m)}</li>`).join('')}</ol>`:'<p class="subtle recent-lead">No messages yet this session.</p>';}
