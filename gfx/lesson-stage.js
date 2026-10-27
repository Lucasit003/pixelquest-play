// One interface for every lesson picture (docs/MIDDLE_SCHOOL_SPEC.md §5): painter(spec) returns
// {draw(c, t), label}. t is progress 0..1, owned by the caller (the lesson player advances it in its
// frame loop; nothing here keeps time). label is alt text that never gives the answer.
//
// Today every painter draws the primitives in lesson-art.js. The lesson-theater agent's animated
// pixel-art scenes plug in through registerScene(kind, factory): a step whose pic carries
// {scene: kind} (or whose primitive type is kind) gets factory(spec) instead, which must return the
// same {draw(c, t), label}. If a scene is missing or throws, the primitive drawing is used, so a
// lesson never shows a blank picture.
import {drawPic,describe} from './lesson-art.js';

const SCENES=new Map();
export const registerScene=(kind,factory)=>{if(typeof factory!=='function')throw new Error('registerScene needs a factory');SCENES.set(kind,factory);};
export const unregisterScene=kind=>SCENES.delete(kind);
export const hasScene=kind=>SCENES.has(kind);

const base=spec=>({draw:(c,t)=>drawPic(c,spec,t),label:describe(spec)});
export function painter(spec){
 const one=Array.isArray(spec)&&spec.length===1?spec[0]:spec,kind=one&&!Array.isArray(one)&&(one.scene||one.t),f=kind&&SCENES.get(kind);
 if(f){try{const s=f(one);if(s&&typeof s.draw==='function'){const fall=base(spec);return {draw:(c,t)=>{try{s.draw(c,t);}catch{fall.draw(c,t);}},label:s.label||fall.label};}}catch{}}
 return base(spec);
}
/* A lesson step's painter. */
export const stepPainter=step=>painter(step.pic);
