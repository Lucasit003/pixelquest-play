/* Save codes (v2:ui): the whole save as one line of text a learner can copy into another browser.
   Format: "PQ5-" + base64(deflate-raw(JSON)) with '.' and '_' for '+' and '/', split into groups of 8 with dashes so it is easy to
   check by eye. Decoding is tolerant of spaces, line breaks and missing dashes. Loading a code goes
   through main.js's own import (#import-save), so normalize() and the "replace progress?" confirm
   always run; this module never writes the save itself. */
import {VERSION,LADDER} from '../core/save.js';
const PREFIX='PQ5-';
/* base64 with '.' and '_' for '+' and '/', so '-' is free to separate groups */
const b64u={enc:u8=>{let s='';for(let i=0;i<u8.length;i+=0x8000)s+=String.fromCharCode(...u8.subarray(i,i+0x8000));return btoa(s).replace(/\+/g,'.').replace(/\//g,'_').replace(/=+$/,'');},
 dec:t=>{t=t.replace(/\./g,'+').replace(/_/g,'/');while(t.length%4)t+='=';const s=atob(t),u=new Uint8Array(s.length);for(let i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u;}};
async function pipe(u8,Stream){const st=new Blob([u8]).stream().pipeThrough(new Stream('deflate-raw'));return new Uint8Array(await new Response(st).arrayBuffer());}
export const saveCodeSupported=()=>typeof globalThis.CompressionStream==='function'&&typeof globalThis.DecompressionStream==='function';
export async function encodeSave(save){
 /* oct25 R3: a code always names the current version and ladder, like an exported file */
 const raw=new TextEncoder().encode(JSON.stringify({...save,version:VERSION,ladder:LADDER}));
 const body=b64u.enc(await pipe(raw,globalThis.CompressionStream));
 return PREFIX+body.match(/.{1,8}/g).join('-');
}
export async function decodeSave(code){
 const t=String(code||'').replace(/\s+/g,'');
 if(!t.toUpperCase().startsWith('PQ5'))throw Error('That is not a PixelQuest save code.');
 const body=t.replace(/^PQ5-?/i,'').split('-').join('');
 let json;
 try{json=new TextDecoder().decode(await pipe(b64u.dec(body),globalThis.DecompressionStream));}catch{throw Error('This save code is incomplete. Copy all of it and try again.');}
 return JSON.parse(json);
}
/* Hands the decoded save to main.js's file import, which validates it and asks before replacing. */
export function importThroughMain(save,doc=globalThis.document){
 const input=doc.querySelector('#import-save');if(!input||typeof DataTransfer!=='function')return false;
 const dt=new DataTransfer();dt.items.add(new File([JSON.stringify(save)],'pixelquest-save.json',{type:'application/json'}));
 input.files=dt.files;input.dispatchEvent(new Event('change',{bubbles:true}));return true;
}
