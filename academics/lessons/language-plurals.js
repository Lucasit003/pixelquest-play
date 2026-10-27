// Elementary topic: plural nouns with -s and -es. One rule, applied by code to a checked word list:
// add -es after s, x, z, sh or ch; otherwise add -s. Words ending in y, f and irregular plurals
// (child, mouse, fish) are left for a later topic, so every answer here follows the one rule.
const ES=/(s|x|z|sh|ch)$/,plural=w=>w+(ES.test(w)?'es':'s'),suffix=w=>ES.test(w)?'es':'s';
const WORDS=['cat','dog','book','car','tree','bird','cup','hat','ball','bed','pen','frog','map','star','duck','drum','kite','boat','cake','shoe','egg','bus','box','fox','dish','brush','lunch','bench','glass','dress','wish','peach','watch','class','tax','ax','buzz','church','match','beach','bush','kiss'];
const ending=w=>(w.match(ES)||[''])[0]||w.slice(-1);
export default {
 id:'language-e-plurals',subject:'language',level:3,grade:1,standard:'CCSS L.1.1.C',
 title:'One and more than one',goal:'Add -s or -es to a noun to show more than one.',points:20,
 skills:{s:'Adding -s',es:'Adding -es',choose:'Choosing -s or -es'},
 steps:[
  {skill:'s',say:'A noun names a person, place or thing. One cat is singular. More than one is plural.',pic:[{"t":"theater","scene":"plurals","part":"one"}],eq:'1 cat'},
  {skill:'s',say:'For most nouns, add -s to show more than one: cat becomes cats.',pic:[{"t":"theater","scene":"plurals","part":"add-s"}],eq:'5 cats',
   check:{prompt:'Mia sees two of the same animal. One is a frog. What are two of them called?',answer:'frogs',options:['frogs','frog','froges'],hint:'Frog does not end in s, x, z, sh or ch, so just add -s.'}},
  {skill:'es',say:'Our practice words ending in s, x, z, sh or ch take -es: box becomes boxes.',pic:[{"t":"theater","scene":"plurals","part":"es"}],eq:'box + es = boxes'},
  {skill:'es',say:'The -es makes an extra sound you can hear: bus, buses. Dish, dishes.',pic:[{t:'word',base:'dish',suffix:'es',mark:2,n:2}],eq:'dish + es = dishes',
   check:{prompt:'Leo packs one lunch for himself and one for his sister. What do we call the two of them?',answer:'lunches',options:['lunches','lunchs','lunch'],hint:'Lunch ends in ch, so add -es.'}},
  {skill:'choose',say:'For these practice words, look at the ending. Is it s, x, z, sh or ch? Then add -es.',pic:[{"t":"theater","scene":"plurals","part":"look"}],eq:'s, x, z, sh, ch: add -es'},
  {skill:'choose',say:'Words with other endings usually just add -s: ball becomes balls. A few nouns change in other ways, like baby becoming babies.',pic:[{t:'word',base:'ball',suffix:'s',n:2}],eq:'ball + s = balls',
   check:{prompt:'Which ending makes more than one bench: -s or -es?',answer:'-es',options:['-es','-s'],hint:'Bench ends in ch.'}},
  {skill:'choose',say:'Look at the end, then add -s or -es. That is how to make most plurals.',pic:[{"t":"theater","scene":"plurals","part":"foxes"}]}],
 items(add){
  for(const w of WORDS){const k=ES.test(w)?'es':'s',mark=ES.test(w)?ending(w).length:0;
   add(k,`What is the plural of ${w}?`,plural(w),{t:'word',base:w,suffix:suffix(w),mark:mark||null,n:2,solve:true,hint:true},ES.test(w)?`${w} ends in ${ending(w)}, so add -es: ${plural(w)}.`:`${w} does not end in s, x, z, sh or ch, so add -s: ${plural(w)}.`);
   add('choose',`To make ${w} mean more than one, do you add -s or -es?`,`-${suffix(w)}`,{t:'word',base:w,mark:mark||null,hint:true},ES.test(w)?`${w} ends in ${ending(w)}, so it takes -es.`:`${w} does not end in s, x, z, sh or ch, so it takes -s.`);
   add('choose',`Fill in the blank: one ${w}, two ___.`,plural(w),{t:'word',base:w,suffix:suffix(w),n:2,solve:true,hint:true},`Two ${plural(w)}.`);}}};
