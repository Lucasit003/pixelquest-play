/* One binding catalogue for saved keys, settings, teaching and input. */
export const DEFAULT_BINDINGS={up:'w',down:'s',left:'a',right:'d',attack:'j',heavy:'k',dodge:'shift',jump:' ',run:'r',interact:'e',potion:'q',ability1:'1',ability2:'2',ability3:'3',ability4:'4',ability5:'5',map:'m',localMap:'n',travel:'t',journal:'tab',menu:'escape',settings:'o',fullscreen:'f'};
export const ACTION_LABELS={up:'Move up',down:'Move down',left:'Move left',right:'Move right',attack:'Basic attack',heavy:'Heavy attack',dodge:'Dodge',jump:'Jump',run:'Run',interact:'Interact',potion:'Potion',ability1:'Ability 1',ability2:'Ability 2',ability3:'Ability 3',ability4:'Ability 4',ability5:'Echo (borrowed power)',map:'Map',localMap:'Level map',travel:'Fast travel',journal:'Journal',menu:'Menu',settings:'Settings',fullscreen:'Fullscreen'};
export const abilityKeys=s=>[1,2,3,4].map(i=>s.settings.bindings['ability'+i]);
/* improve20-r13c-nov2 #3: the hotbar's keys with the Echo's own fifth button (game/echo.js ECHO_SLOT); its key is ability5 (5) */
export const slotKeys=s=>[...abilityKeys(s),s.settings.bindings.ability5||'5'];
/* Keep older custom bindings; give newly introduced actions an unused key. */
export function normalizeBindings(saved={}){const out={};for(const a of Object.keys(DEFAULT_BINDINGS)){const k=saved[a];if(typeof k==='string'&&k.length&&k.length<=16)out[a]=k.toLowerCase();}for(const [a,k]of Object.entries(DEFAULT_BINDINGS))if(!out[a])out[a]=[k,...'abcdefghijklmnopqrstuvwxyz0123456789',...['f6','f7','f8','f9','f10']].find(v=>!Object.values(out).includes(v));return out;}
const NAV_KEYS=['escape','enter','arrowup','arrowdown','arrowleft','arrowright','control','alt','meta','capslock','dead','unidentified'];
/* owner Nov 1 (a player's note, "like Fortnite"): a key that another action already uses is taken anyway, and the two actions swap keys, so
   nobody has to free a key first. Only a swap that would hand Escape (or another navigation key) to an action is still refused. */
export const bindingClash=(bindings,action,key)=>Object.keys(ACTION_LABELS).find(a=>a!==action&&bindings[a]===key)||'';
export function bindingError(bindings,action,key){if(NAV_KEYS.includes(key))return 'That key is used for navigation. Choose another key.';const used=bindingClash(bindings,action,key);return used&&NAV_KEYS.includes(bindings[action])?`That key is already used for ${ACTION_LABELS[used]}. Choose another.`:'';}
/* Sets the key and returns the action that swapped onto this action's old key ('' when the key was free). */
export function applyBinding(bindings,action,key){const used=bindingClash(bindings,action,key),old=bindings[action];bindings[action]=key;if(used)bindings[used]=old;return used;}
/* oct24-progress (playtest r3): a Ranger looses a Power Shot and a Mage or Summoner a Power Blast; only melee heroes swing */
export const heavyName=s=>s?.hero==='ranger'?'Power Shot':['mage','summoner'].includes(s?.hero)?'Power Blast':'Power Swing';
/* improve20-q-oct31 (audit2 #22): the basic attack named for the class, as heavyName is ("Tap J for a basic swing" read wrong for a Ranger's arrow) */
export const basicName=s=>s?.hero==='ranger'?'shot':['mage','summoner'].includes(s?.hero)?'blast':'swing';
