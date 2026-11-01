/* improve20-r7a-nov1 #10 (audit6 #11): "Help" in the pause menu, one page of how to play in kid words. The learning loop (lesson ->
   practice -> mastery -> ability -> adventure) is drawn with the game's own icons (the 32 px icon strip, the tier star, the hero's next
   ability icon); nothing here is new art. Pure: the caller passes the key labels and the icon markup. Nothing on this page changes a
   rule: an ability still needs its mastery and the hero level (game/math.js unlocked()). */
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* the five steps of the loop, in order */
export const LOOP=Object.freeze([
 {id:'lesson',name:'Lesson',text:'Read a short lesson at the Library.'},
 {id:'practice',name:'Practice',text:'Answer questions. There is no timer, so take your time.'},
 {id:'mastery',name:'Mastery',text:'Pass the mastery test to master the topic.'},
 {id:'ability',name:'Ability',text:'A new power wakes up when you also reach its hero level.'},
 {id:'adventure',name:'Adventure',text:'Use it to beat levels and bosses, and earn XP and gold.'}]);
/* keys: {move, attack, heavy, dodge, interact, map, journal, pause} as labels; icons: {[step id]: html}; touch: phone words */
export function helpHTML({keys={},icons={},touch=false}={}){
 const k=n=>`<kbd>${esc(keys[n]||'?')}</kbd>`;
 const loop=LOOP.map((st,i)=>`<li class="help-step" data-step="${st.id}"><span class="help-ico">${icons[st.id]||''}</span><b>${esc(st.name)}</b><small>${esc(st.text)}</small></li>${i<LOOP.length-1?'<li class="help-arrow" aria-hidden="true">→</li>':''}`).join('');
 const play=touch?[['Move','Drag the joystick under your left thumb.'],['Attack','Tap the big Attack button. Abilities sit around it.'],['Use','The hand button shows up when something is in reach.'],['Menu','Map, Journal and Menu are at the top right.']]
  :[['Move',`${k('move')} or the arrow keys`],['Attack',`${k('attack')}, hold it for a Power Swing`],['Dodge',k('dodge')],['Talk, open, enter',k('interact')],['Map and Journal',`${k('map')} and ${k('journal')}`],['Pause',k('pause')]];
 return `<div class="help-page"><section class="help-loop" aria-label="How you get stronger"><h3>How you get stronger</h3><p>Learning is your power. Every ability you use in a fight comes from a topic you mastered.</p><ol class="help-loop-row">${loop}</ol></section>
<section class="help-play" aria-label="Playing"><h3>Playing</h3><dl>${play.map(([a,b])=>`<div><dt>${esc(a)}</dt><dd>${touch?esc(b):b}</dd></div>`).join('')}</dl></section>
<section class="help-tips" aria-label="Tips"><h3>Tips</h3><ul><li>Not sure what to do? The goal at the top right always says what comes next.</li><li>Gold buys gear at the Weaponsmith and potions at the Apothecary. Only learning wakes up abilities.</li><li>Today's goals are small extras. Skip any you like: nothing is lost.</li><li>Your game saves by itself.</li></ul></section></div>`;}
