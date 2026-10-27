/* Try-it giveaways (17 Oct learning-flow review). Many lesson steps teach with a worked example and then ask a Try-it on
   the same problem, so the line above the picture (eq) or the picture's own labels show the Try-it's answer. heldBack(step)
   says what the lesson player keeps back until the Try-it is answered: the eq line (eq:true) and/or the worked picture, shown
   instead as the Try-it's own unsolved picture (pic). A worked example with different numbers is left alone, and so is text
   the Try-it's prompt already states. tools/scan-lesson-giveaways.mjs lists every step this touches and every one it can't fix. */
const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const plain=s=>String(s).replace(/(\d),(\d{3})/g,'$1$2');
export const isNum=a=>/^-?\d+(\.\d+)?$/.test(String(a).trim().replace(/^\$/,'').replace(/,/g,''));
export const nums=s=>plain(s).match(/\d+(?:\.\d+)?/g)||[];
/* Every string or number a picture spec can draw (its type and its blank's fill excepted). */
export function picText(v,out=[]){if(v==null)return out;if(typeof v==='string'||typeof v==='number')out.push(String(v));else if(Array.isArray(v))v.forEach(x=>picText(x,out));else if(typeof v==='object')for(const[k,x]of Object.entries(v))if(k!=='t'&&k!=='fill'&&k!=='solve')picText(x,out);return out;}
/* shows(answer,prompt)(text): the text shows the answer (whole number or whole words) and is not already in the prompt. */
export function shows(answer,prompt=''){const a=String(answer).trim(),n=a.replace(/^\$/,'').replace(/,/g,''),p=String(prompt).toLowerCase();
 const re=isNum(a)?new RegExp(`(?<![\\d.,])${esc(n)}(?![\\d]|[.,]\\d)`):a.length<2?null:new RegExp(`(?<![\\w])${esc(a)}(?![\\w])`,'i');
 return s=>!!re&&re.test(plain(s))&&!p.includes(String(s).toLowerCase());}
const norm=p=>JSON.stringify(p,(k,v)=>k==='solve'||k==='fill'?undefined:v);
const filled=c=>{const rep=v=>Array.isArray(v)?v.map(x=>x===null?c.fill:rep(x)):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,rep(x)])):v;return rep(c);};
/* Same problem: the worked picture is the Try-it's picture (blank filled or not), or every number in the prompt is on show. */
export function sameProblem(st){const c=st.check,sp=[].concat(st.pic)[0];if(c.pic&&(norm(filled(c.pic))===norm(sp)||norm(c.pic)===norm(sp)))return true;
 const pn=nums(c.prompt),sn=new Set([st.eq||'',...picText(st.pic)].flatMap(nums));return pn.length>0&&pn.every(x=>sn.has(x));}
/* -> null, or {eq, pic, stuck}: eq true = hold the eq line back; pic = the picture to show instead; stuck = the worked
   picture shows the answer and there is no clean Try-it picture to show instead (the scan reports these). */
export function heldBack(st){const c=st?.check;if(!c||c.answer==null)return null;const f=shows(c.answer,c.prompt);
 const eqHit=!!st.eq&&f(st.eq),picHit=picText(st.pic).some(f);if(!eqHit&&!picHit)return null;
 if(isNum(c.answer)&&!sameProblem(st))return null;
 /* the Try-it's own picture is clean when it doesn't show the answer, or shows it only beside every other choice */
 const cp=c.pic&&picText(c.pic),clean=cp&&(!cp.some(f)||(c.options?.length>1&&c.options.every(o=>cp.some(x=>shows(o)(x)))));
 const alt=picHit&&clean?(Array.isArray(c.pic)?c.pic.map(x=>({...x,solve:false})):{...c.pic,solve:false}):undefined;
 return {eq:eqHit,pic:alt,stuck:picHit&&!alt};}
/* inPrompt(check): the Try-it's own prompt gives its answer away (19 Oct review: "A baby duck is called a duckling. What does a
   duckling grow up to be?" -> "a duck"). Every content word of the answer (articles dropped, case ignored) is in the prompt as a
   word or a stem (duck in duckling, plant in planting). Number answers are left out (a sum's numbers are its inputs), and so are lettered choices (A, B), and so is a
   prompt that lists the choices: when two or more options are named in it, the child still has to choose between them. */
const STOP=new Set(['a','an','the','of','to','in','on','and','or','it','is','its','for','with','at','by']);
const stem=w=>w.replace(/(lings?|ies|es|s|ed|ing|ers?|ly)$/,'')||w;
const words=s=>String(s).toLowerCase().replace(/[^a-z0-9'\s-]/g,' ').split(/[\s-]+/).map(w=>w.replace(/^'+|'+$/g,'')).filter(Boolean);
const named=(ans,pw)=>{const aw=words(ans).filter(w=>!STOP.has(w));return aw.length>0&&aw.every(a=>{const s=stem(a);return pw.some(p=>p===a||stem(p)===s||(s.length>=3&&p.startsWith(s)));});};
export function inPrompt(c){if(!c||c.answer==null||isNum(c.answer)||String(c.answer).trim().length<2)return false;const pw=words(c.prompt),a=String(c.answer).trim();
 /* an answer with a number in it (3/6, 8 am, 8 g) counts only when the whole answer is written in the prompt */
 if(/\d/.test(a)?!new RegExp(`(?<![\\w/.])${esc(a)}(?![\\w/])`,'i').test(c.prompt):!named(a,pw))return false;return (c.options||[]).filter(o=>named(o,pw)).length<2;}
