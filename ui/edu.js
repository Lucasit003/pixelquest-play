/* v2:edu entry point. main.js imports this one module; it loads the education stylesheet
   (dist/ui/library.css, kept out of style.css, which the ui-audio agent owns) and re-exports the
   education hooks the integrator wires into the lesson player, Settings, the world map, the Stats
   screen and the pre-boss moment. Importing it in Node does nothing visible. */
export * from './edu-narration.js';
export * from './edu-study.js';
export * from './edu-knowledge-check.js';
export * from './edu-unlock.js';
export * from './edu-report.js';

/* One <link> for library.css, added once. If index.html already links it, nothing is added. */
export function ensureEduStyles(doc=globalThis.document){
 if(!doc?.head||doc.querySelector('link[data-edu-styles],link[href$="ui/library.css"]'))return false;
 const l=doc.createElement('link');l.rel='stylesheet';l.href=new URL('./library.css',import.meta.url).href;l.dataset.eduStyles='';doc.head.append(l);return true;
}
ensureEduStyles();

/* The lesson object sprites (gfx/lesson-sprites.js), loaded once; pictures fall back to plain shapes until then. */
import {setLessonSprites} from '../gfx/lesson-sprites.js';
let lessonSprites=null;
export function loadLessonSprites(){if(lessonSprites)return lessonSprites;
 if(typeof globalThis.Image!=='function'||!globalThis.document||/jsdom/i.test(globalThis.navigator?.userAgent||''))return Promise.resolve();
 return lessonSprites=new Promise(resolve=>{const img=new globalThis.Image();img.onload=()=>{setLessonSprites(img);resolve();};img.onerror=()=>resolve();img.src=new URL('../assets/lesson/sprites.png',import.meta.url).href;});}
/* Loaded on entering educational content, never at the title. */

/* "Read to me" buttons anywhere (data-edu-read): one delegated listener reads the button's text aloud. */
import {narrator} from './edu-narration.js';
export function wireReadButtons(doc=globalThis.document){
 if(!doc?.addEventListener||doc.__eduRead)return false;doc.__eduRead=true;
 doc.addEventListener('click',e=>{const b=e.target?.closest?.('[data-edu-read]');if(!b)return;narrator().speak(String(b.dataset.eduRead).split(/(?<=[.!?])\s+/));});
 return true;
}
wireReadButtons();
