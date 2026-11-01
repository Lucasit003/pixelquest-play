/* Try-it pictures (improve20-q-oct31, audit2 item 1). The lesson canvas belongs to the step: its worked example stays on show
   beside the Try-it, as before. It went wrong in two ways when the picture was another question's:
   - a step picture that is itself a puzzle (a '?' blank: a tile, a timeline stop, a hidden map name) beside a Try-it on a
     different problem read as the Try-it's picture (red, blue, red, blue, red, ? over "Green, yellow, ... which comes next?");
   - a miss "solved" the step's picture when the Try-it had none of its own, so a wrong pick filled in the answer to a question
     the child was not asked (yellow, under "Blue, red, blue, ___...", whose answer is red).
   tryItPics(step) says what the canvas shows: ask (the Try-it unanswered), miss (after a first wrong pick; null keeps what is
   on show) and after (once answered; null keeps it). A puzzle picture shows only when it is this Try-it's own or the same
   problem; otherwise the Try-it's own unsolved picture, or a neutral version of the step's (the blank and the marking taken
   away), or none. A picture is only ever solved when it is the Try-it's own or the same problem. Pure.
   tests/improve20-q-oct31.test.js walks every Try-it in the bank. */
import {heldBack,sameProblem,picText,shows} from './giveaway.js';
const first=p=>Array.isArray(p)?p[0]:p;
export const solved=(p,v=true)=>p==null?null:Array.isArray(p)?p.map(x=>({...x,solve:v})):{...p,solve:v};
/* a picture that asks its own question: a '?' blank (a null in a sequence or a timeline, a hidden name) that is not solved */
export const puzzle=v=>Array.isArray(v)?v.some(x=>x===null||puzzle(x)):!!v&&typeof v==='object'&&!v.solve&&Object.entries(v).some(([k,x])=>k!=='fill'&&(x===null||(k==='blank'&&x!=null&&x!==false&&x!==-1)||(typeof x==='object'&&puzzle(x))));
/* the picture carries no answer: it does not show this Try-it's answer, or shows it only beside every other choice */
export const clean=(p,c)=>{const t=picText(p),f=shows(c.answer,c.prompt);return !t.some(f)||(c.options?.length>1&&c.options.every(o=>t.some(shows(o))));};
/* the step's picture without its blank and its marking (a plain world map instead of one with '?' on Europe) */
export const plain=p=>Array.isArray(p)?p.map(plain):p&&typeof p==='object'?Object.fromEntries(Object.entries(p).filter(([k])=>k!=='blank'&&k!=='mark'&&k!=='solve')):p;
/* -> {ask, miss, after, held, other}: other = the step's picture is a puzzle on another problem; held = heldBack(step) */
export function tryItPics(st,{retired=false}={}){const c=st?.check;if(!c)return {ask:st?.pic??null,miss:null,after:null,held:null,other:false};
 const own=c.pic||null,same=sameProblem(st),other=puzzle(st.pic)&&!same,mine=own&&solved(own,false),flat=plain(st.pic);
 const swap=!other?null:mine&&clean(mine,c)?mine:!puzzle(flat)&&clean(flat,c)?flat:null,done=other?(own?solved(own):swap):null;
 if(retired)return {ask:other?done:st.pic,miss:null,after:null,held:null,other};
 const held=heldBack(st);
 return {ask:held?.pic||(other?swap:st.pic),miss:own?solved(own):same?solved(first(st.pic)):null,after:other?done:held?st.pic:null,held,other};}
