// Middle School topic (Grade 6, CCSS L.6.4b): Greek and Latin roots. SOURCED: every root and affix meaning, and the
// meaning of every built word, was checked on 8 October 2026 against its English Wiktionary page (CC BY-SA), fetched
// as page source (index.php?title=<page>&action=raw). SOURCES and WORD_SOURCES below list each page with a quote of at
// most 25 words in the page's own words. Wiki markup is removed and Greek and Latin headwords are kept, but their
// transliterations are left out. Nothing is in this file unless its quote supports it, and no root was dropped. Only
// words whose dictionary meaning really is the sum of their parts are used (biography: a written story of a life;
// portable: able to be carried). Words that look like they share a root but do not, or whose meaning drifted from
// their parts (portrait, microphone, symphony, verdict, dictionary, geography, chronology), are left out. Questions
// never offer two roots with the same or a near meaning together: graph and scrib/script (write); spect, scope and
// vis/vid (look, see); aud and phon (hear, sound); dict and logy (-logy comes from a Greek word for "to say"). So
// "which root means X" always has exactly one answer. Extends language-e-prefixes and language-e-suffixes.
const W='https://en.wiktionary.org/wiki/';
const SOURCES=[
 {root:'bio',meaning:'life',url:W+'bio-',quote:'From Ancient Greek βιο-, combining form and stem of βίος (“life”).'},
 {root:'graph',meaning:'write',url:W+'-graph',quote:'From Ancient Greek -γράφος (“that writes, describes”)'},
 {root:'tele',meaning:'far',url:W+'tele-',quote:'From Ancient Greek τῆλε (“at a distance, far off, far away, far from”).'},
 {root:'port',meaning:'carry',url:W+'porto#Latin',quote:'to carry, bear; to convey, bring'},
 {root:'rupt',meaning:'break',url:W+'rumpo#Latin',quote:'to break, burst, tear, rend, rupture; break asunder, force open'},
 {root:'dict',meaning:'say',url:W+'dico#Latin',quote:'to say, talk, speak, utter, mention'},
 {root:'spect',meaning:'look',url:W+'spectator',quote:'Borrowed from Latin spectātor, from frequentative verb spectō (“watch”), from speciō (“look at”).'},
 {root:'aud',meaning:'hear',url:W+'audio#Latin',quote:'to hear, listen to'},
 {root:'geo',meaning:'earth',url:W+'geo-',quote:'From Ancient Greek γεω-, combining form of γῆ (“earth”).'},
 {root:'therm',meaning:'heat',url:W+'thermo-',quote:'From Ancient Greek θερμός (“warm, hot”). Of, being, or pertaining to heat or temperature.'},
 {root:'chron',meaning:'time',url:W+'chronometer',quote:'ultimately from Ancient Greek χρόνος (“time”) + μέτρον (“meter, measuring device”).'},
 {root:'phon',meaning:'sound',url:W+'phono-',quote:'From Ancient Greek φωνή (“voice, sound”). Relating to sound'},
 {root:'scrib/script',meaning:'write',url:W+'manuscript',quote:'equivalent to manū (ablative of manus, “hand”) + scrīptus (past participle of scribere, “to write”).'},
 {root:'struct',meaning:'build',url:W+'struo#Latin',quote:'to compose, construct, build'},
 {root:'vis/vid',meaning:'see',url:W+'visible',quote:'from Late Latin visibilis (“that may be seen”), from Latin videre (“to see”), past participle visus'},
 {root:'auto',meaning:'self',url:W+'auto-',quote:'Learned borrowing from Ancient Greek αὐτο- (auto-, “self-”). Reflexive, regarding or to oneself.'},
 {root:'micro',meaning:'small',url:W+'microscope',quote:'from Ancient Greek μικρός (“small”) + σκοπέω (“to look at”), equivalent to micro- + -scope.'},
 {root:'scope',meaning:'look at',url:W+'telescope',quote:'from Ancient Greek τηλεσκόπος (“far-seeing”), from τῆλε (“afar”) + σκοπέω (“to look at”).'},
 {root:'meter',meaning:'measure',url:W+'chronometer',quote:'ultimately from Ancient Greek χρόνος (“time”) + μέτρον (“meter, measuring device”).'},
 {root:'logy',meaning:'study of',url:W+'geology',quote:'from Ancient Greek γεω- (“earth”) + Latin -logia (“the study of”), from Ancient Greek -λογία.'},
 {root:'in',meaning:'not',url:W+'in-',quote:'borrowed (in words of latinate origin) from Latin in- (“not”).'},
 {root:'pre',meaning:'before',url:W+'pre-',quote:'Before; earlier in time; beforehand.'},
 {root:'inter',meaning:'between',url:W+'inter-',quote:'Borrowed from Latin inter- (“between, amid”), a form of prepositional inter (“between”).'},
 {root:'trans',meaning:'across',url:W+'trans-',quote:'Extending across, through, or over.'},
 {root:'ex',meaning:'out',url:W+'ex-',quote:'from Latin ex (“out of, from”)'},
 {root:'e',meaning:'out',url:W+'erupt',quote:'past participle of ērumpō (“to break out (of), to burst out (from)”), from e (“out”) + rumpō (“to break”).'},
 {root:'re',meaning:'again',url:W+'re-',quote:'again, anew'},
 {root:'post',meaning:'after',url:W+'post-',quote:'From Latin post (“after, behind”).'},
 {root:'con',meaning:'together',url:W+'con-',quote:'Together: the root is done together.'},
 {root:'contra',meaning:'against',url:W+'contra-',quote:'From Latin contrā (“against”). Against; in opposition to.'},
 {root:'manu',meaning:'hand',url:W+'manuscript',quote:'equivalent to manū (ablative of manus, “hand”) + scrīptus (past participle of scribere, “to write”).'},
 {root:'able',meaning:'able to be',url:W+'-able',quote:'able to be done; fit to be done.'},
 {root:'ible',meaning:'able to be',url:W+'-ible',quote:'An adjective suffix, now usually in a passive sense; forms adjectives meaning “able to be”'},
 {root:'ator',meaning:'a person who',url:W+'-ator',quote:'Used to form agent nouns, usually from verbs that have the ending -ate'},
 {root:'al',meaning:'relating to',url:W+'-al',quote:'Of or pertaining to.'}];
/* The dictionary meaning of every built word, so its meaning from parts is checked against the real one. */
const WORD_SOURCES=[
 {word:'biography',url:W+'biography',quote:'A person’s life story, especially one published. The art of writing this kind of story.'},
 {word:'biology',url:W+'biology',quote:'The study of all life or living matter.'},
 {word:'autobiography',url:W+'autobiography',quote:'A self-written biography; the story of one’s own life.'},
 {word:'autograph',url:W+'autograph',quote:'A person’s own handwriting, especially the signature of a famous or admired person.'},
 {word:'telegraph',url:W+'telegraph',quote:'any process for transmitting arbitrarily long messages over a long distance using a symbolic code'},
 {word:'telescope',url:W+'telescope',quote:'A monocular optical instrument that magnifies distant objects, especially in astronomy.'},
 {word:'telephone',url:W+'telephone',quote:'A telecommunication device which converts data or sounds (usually speech) into electrical signals which are then transmitted'},
 {word:'microscope',url:W+'microscope',quote:'An optical instrument used for observing small objects.'},
 {word:'thermometer',url:W+'thermometer',quote:'An apparatus used to measure temperature.'},
 {word:'geology',url:W+'geology',quote:'The science that studies the structure of the Earth (or other planets), together with its origin and development'},
 {word:'chronometer',url:W+'chronometer',quote:'A device for measuring time, particularly a precision mechanism for measuring time of day.'},
 {word:'portable',url:W+'portable',quote:'Able to be carried or easily moved.'},
 {word:'transport',url:W+'transport',quote:'To carry or bear from one place to another; to remove; to convey.'},
 {word:'export',url:W+'export',quote:'To carry away. To sell (goods) to a foreign country.'},
 {word:'interrupt',url:W+'interrupt',quote:'To disturb or halt (an ongoing process or action, or the person performing it) by interfering suddenly, especially by speaking.'},
 {word:'erupt',url:W+'erupt',quote:'To burst forth; to break out.'},
 {word:'predict',url:W+'predict',quote:'To make a prediction: to forecast, foretell, or estimate a future event on the basis of knowledge and reasoning'},
 {word:'contradict',url:W+'contradict',quote:'To deny the truth or validity of (a statement or statements). To say things that conflict with each other.'},
 {word:'audible',url:W+'audible',quote:'Able to be heard.'},
 {word:'inaudible',url:W+'inaudible',quote:'Unable to be heard or not loud enough to be heard.'},
 {word:'visible',url:W+'visible',quote:'Able to be seen.'},
 {word:'invisible',url:W+'invisible',quote:'Unable to be seen; out of sight; not visible.'},
 {word:'spectator',url:W+'spectator',quote:'One who watches an event; especially, an event held outdoors.'},
 {word:'construct',url:W+'construct',quote:'To build or form (something) by assembling parts.'},
 {word:'reconstruct',url:W+'reconstruct',quote:'To construct again; to restore.'},
 {word:'manuscript',url:W+'manuscript',quote:'A book, composition or any other document, written by hand (or manually typewritten), not mechanically reproduced.'},
 {word:'postscript',url:W+'postscript',quote:'An addendum to a letter, added after the author’s signature.'},
 {word:'geothermal',url:W+'geothermal',quote:'Pertaining to heat energy extracted from reservoirs in the earth’s interior.'}];
/* The roots a child is asked about. g groups roots with the same or a near meaning; two from one group are never offered together. */
const ROOTS=[
 {root:'bio',from:'Greek',means:'life',also:['living things','living'],g:'life'},
 {root:'graph',from:'Greek',means:'write',also:['to write','writing','written','draw'],g:'write'},
 {root:'tele',from:'Greek',means:'far',also:['far away','far off','distant','at a distance','a distance'],g:'far'},
 {root:'port',from:'Latin',means:'carry',also:['to carry','carrying','bear'],g:'carry'},
 {root:'rupt',from:'Latin',means:'break',also:['to break','breaking','burst'],g:'break'},
 {root:'dict',from:'Latin',means:'say',also:['to say','saying','speak','to speak','talk','tell'],g:'say'},
 {root:'spect',from:'Latin',means:'look',also:['to look','look at','looking','watch'],g:'look'},
 {root:'aud',from:'Latin',means:'hear',also:['to hear','hearing','listen'],g:'hear'},
 {root:'geo',from:'Greek',means:'earth',also:['the earth'],g:'earth'},
 {root:'therm',from:'Greek',means:'heat',also:['hot','warm','warmth','temperature'],g:'heat'},
 {root:'chron',from:'Greek',means:'time',also:[],g:'time'},
 {root:'phon',from:'Greek',means:'sound',also:['sounds','voice'],g:'hear'},
 {root:'scrib/script',from:'Latin',means:'write',also:['to write','writing','written'],g:'write'},
 {root:'struct',from:'Latin',means:'build',also:['to build','building'],g:'build'},
 {root:'vis/vid',from:'Latin',means:'see',also:['to see','seeing','look'],g:'look'},
 {root:'auto',from:'Greek',means:'self',also:['oneself','yourself','own','your own','by oneself'],g:'self'},
 {root:'micro',from:'Greek',means:'small',also:['very small','tiny'],g:'small'},
 {root:'scope',from:'Greek',means:'look at',also:['look','see','view','viewing','examine'],g:'look'},
 {root:'meter',from:'Greek',means:'measure',also:['to measure','measuring','measurement'],g:'measure'},
 {root:'logy',from:'Greek',means:'study of',also:['study','the study of','a study of','branch of learning'],g:'say'}];
/* Built words: their parts (keys of SOURCES), the meaning the parts give, two wrong meanings, and a word to pair with. */
const WORDS=[
 {w:'biography',parts:['bio','graph'],means:'a written story of a person’s life',not:['the study of living things','a drawing of the earth'],vs:'biology'},
 {w:'biology',parts:['bio','logy'],means:'the study of life and living things',not:['a written story of a person’s life','the study of the earth'],vs:'geology'},
 {w:'autobiography',parts:['auto','bio','graph'],means:'the story of your own life, written by you',not:['a life story written by someone else','a machine that writes by itself'],vs:'autograph'},
 {w:'autograph',parts:['auto','graph'],means:'a person’s own handwriting, such as their signature',not:['a person’s own voice','a written story of a person’s life'],vs:'autobiography'},
 {w:'telegraph',parts:['tele','graph'],means:'a way of sending written messages far away',not:['a way of sending a voice far away','an instrument for looking at faraway things'],vs:'telephone'},
 {w:'telescope',parts:['tele','scope'],means:'an instrument for looking at faraway things',not:['an instrument for looking at very small things','a device that sends sound far away'],vs:'microscope'},
 {w:'telephone',parts:['tele','phon'],means:'a device that sends sound far away',not:['an instrument for looking at faraway things','a device that measures sound'],vs:'telescope'},
 {w:'microscope',parts:['micro','scope'],means:'an instrument for looking at very small things',not:['an instrument for looking at faraway things','a tool that measures small amounts'],vs:'telescope'},
 {w:'thermometer',parts:['therm','meter'],means:'a device that measures how hot something is',not:['a device that measures time','a machine that makes heat'],vs:'chronometer'},
 {w:'geology',parts:['geo','logy'],means:'the study of the earth',not:['the study of living things','the study of time'],vs:'biology'},
 {w:'chronometer',parts:['chron','meter'],means:'a device that measures time',not:['a device that measures how hot something is','a story about the past'],vs:'thermometer'},
 {w:'portable',parts:['port','able'],means:'able to be carried',not:['able to be heard','able to be broken'],vs:'audible'},
 {w:'transport',parts:['trans','port'],means:'to carry from one place to another',not:['to break into pieces','to say something again'],vs:'interrupt'},
 {w:'export',parts:['ex','port'],means:'to carry goods out of a country',not:['to carry goods into a country','to break out suddenly'],vs:'erupt'},
 {w:'interrupt',parts:['inter','rupt'],means:'to break in on something that is going on, like someone talking',not:['to carry something between two places','to say what will happen'],vs:'predict'},
 {w:'erupt',parts:['e','rupt'],means:'to break out or burst out',not:['to carry out','to look out'],vs:'export'},
 {w:'predict',parts:['pre','dict'],means:'to say what will happen before it happens',not:['to say the opposite of what someone said','to look back at the past'],vs:'contradict'},
 {w:'contradict',parts:['contra','dict'],means:'to say the opposite of what someone said',not:['to say what will happen before it happens','to build against something'],vs:'predict'},
 {w:'audible',parts:['aud','ible'],means:'able to be heard',not:['able to be seen','not able to be heard'],vs:'visible'},
 {w:'inaudible',parts:['in','aud','ible'],means:'not able to be heard',not:['able to be heard','not able to be seen'],vs:'invisible'},
 {w:'visible',parts:['vis/vid','ible'],means:'able to be seen',not:['not able to be seen','able to be heard'],vs:'audible'},
 {w:'invisible',parts:['in','vis/vid','ible'],means:'not able to be seen',not:['able to be seen','not able to be heard'],vs:'inaudible'},
 {w:'spectator',parts:['spect','ator'],means:'a person who watches',not:['a person who speaks','a person who builds'],vs:'telescope'},
 {w:'construct',parts:['con','struct'],means:'to build by putting parts together',not:['to break into parts','to write by hand'],vs:'interrupt'},
 {w:'reconstruct',parts:['re','con','struct'],means:'to build or put together again',not:['to break again','to write again'],vs:'construct'},
 {w:'manuscript',parts:['manu','scrib/script'],means:'a document written by hand',not:['a note written after the end of a letter','a message sent far away'],vs:'telegraph'},
 {w:'postscript',parts:['post','scrib/script'],means:'a note written after the end of a letter',not:['a note written before a letter begins','a book about a person’s life'],vs:'manuscript'},
 {w:'geothermal',parts:['geo','therm','al'],means:'relating to heat from inside the earth',not:['relating to the study of life','relating to the time of day'],vs:'thermometer'}];
/* How each part is spelled inside its words, for the prompts (therm is thermo in thermometer, and so on). */
const SHOWN={'scrib/script':'script','vis/vid':'vis',ator:'ator',in:'in',e:'e'};
const showPart=p=>SHOWN[p]||p;
const rootOf=r=>ROOTS.find(x=>x.root===r);
const straight=s=>s.replace(/’/g,"'");
const withStraight=list=>[...new Set(list.flatMap(s=>[s,straight(s)]))];
const rootForms=r=>r.split('/').concat(r.includes('/')?[r]:[]).flatMap(f=>[f,f+'-','-'+f,'-'+f+'-']).filter(f=>f!==r);
const rot=(list,k)=>list.slice(k%list.length).concat(list.slice(0,k%list.length));
const three=(a,b,c)=>`${a}, ${b} or ${c}`;
const card=(a,b)=>({t:'pair',a,b:b??null});
const cap=s=>s[0].toUpperCase()+s.slice(1);
/* Two wrong choices from two different meaning groups, neither in the right root's group. */
const pickTwo=(r,n,m)=>{const others=ROOTS.filter(o=>o.g!==r.g),d1=others[n%others.length],rest=others.filter(o=>o.g!==d1.g);return [d1,rest[m%rest.length]];};
export default {
id:'language-m-greek-latin-roots',subject:'language',level:4,grade:6,standard:'CCSS L.6.4b',
title:'Greek and Latin roots',
goal:'Know what common Greek and Latin roots mean, pick the root that carries a meaning, and work out a word’s meaning from its parts.',
points:20,
sources:SOURCES,wordSources:WORD_SOURCES,
skills:{meaning:'What a root means',which:'Which root fits',words:'Words built from roots'},
steps:[
 {skill:'meaning',say:'Many English words are built from Greek and Latin roots, and each root carries a meaning. The Greek root tele means far, and scope means look at, so a telescope is for looking at faraway things.',pic:{t:'word',base:'tele',suffix:'scope'}},
 {skill:'meaning',say:'A root keeps its meaning in every word it is in. The Greek root bio means life in biology, biography and autobiography.',pic:{t:'passages',title:'One root, many words',texts:['biology: bio (life) + logy (study of)','biography: bio (life) + graph (write)','autobiography: auto (self) + bio + graph']},
  check:{prompt:'Try it: the Latin root rupt is in erupt and interrupt. What does rupt mean: break, carry or hear?',answer:'break',options:['break','carry','hear'],hint:'A volcano that erupts breaks out.',pic:{t:'tiles',seq:['erupt','interrupt']}}},
 {skill:'which',say:'Some meanings have two roots. The Greek root graph and the Latin root scrib or script both mean write: an autograph and a manuscript are both written.',pic:{t:'passages',title:'Two roots that mean write',texts:['graph (Greek): autograph, telegraph','scrib or script (Latin): manuscript, postscript']}},
 {skill:'which',say:'To pick a root, match its meaning to the word’s job. Port means carry, dict means say, and spect means look.',pic:{t:'passages',title:'Latin roots',texts:['port: carry','dict: say','spect: look']},
  check:{prompt:'Try it: which of these words has a root that means "carry": transport, audience or chronicle?',answer:'transport',options:['transport','audience','chronicle'],hint:'Look for the root that means carry inside one of the words.',pic:{t:'tiles',seq:['transport','audience','chronicle']}}},
 {skill:'words',say:'To read a new word, split it into its parts and put their meanings together. Thermometer is therm, heat, plus meter, measure: a device that measures how hot something is.',pic:{t:'word',base:'thermo',suffix:'meter'}},
 {skill:'words',say:'The parts only help when the word’s real meaning matches them, so check a dictionary when you can. Biography is a written story of a person’s life, just as bio and graph say.',pic:{t:'word',base:'bio',suffix:'graphy'},
  check:{prompt:'Try it: split audible into its parts and put their meanings together. Does audible mean A "able to be heard" or B "a person who hears"?',answer:'A',options:['A','B'],hint:'Aud means hear, and -ible means able to be.',pic:{t:'word',base:'aud',suffix:'ible'}}}],
progression:{requires:['language-e-prefixes','language-e-suffixes'],operations:2,demand:'Recall what a Greek or Latin root means, choose the root for a meaning without mixing up roots of near meaning, and build a word’s meaning from its parts.'},
items(add){
 /* Meaning: two questions per root, each with two wrong meanings taken from roots of other groups. */
 ROOTS.forEach((r,i)=>{const ex=WORDS.find(w=>w.parts.includes(r.root)).w;
  for(const v of [0,1]){const [d1,d2]=pickTwo(r,i*3+v*5,i*3+v*5+7),opts=rot([r.means,d1.means,d2.means],i+v);
   const ask=v?`The ${r.from} root ${r.root} is in ${ex}. What does ${r.root} mean: ${three(...opts)}?`:`What does the ${r.from} root ${r.root} mean: ${three(...opts)}?`;
   add('meaning',ask,r.means,card(r.root),`The ${r.from} root ${r.root} means ${r.means}, as in ${ex}.`,r.also);}});
 /* Which: two questions per root, each with two other roots from other groups. */
 ROOTS.forEach((r,i)=>{
  for(const v of [0,1]){const [d1,d2]=pickTwo(r,i*5+v*3+1,i*5+v*3+9),opts=rot([r.root,d1.root,d2.root],i+v+1);
   const ask=v?`Pick the root that means "${r.means}": ${three(...opts)}.`:`Which root means "${r.means}": ${three(...opts)}?`;
   add('which',ask,r.root,card(`"${r.means}"`),`${r.root} means ${r.means}; ${d1.root} means ${d1.means} and ${d2.root} means ${d2.means}.`,rootForms(r.root));}});
 /* Which, odd one out: two words hold a root with the meaning and one does not. */
 const ODD=[['life',['bio']],['write',['graph','scrib/script']],['far',['tele']],['carry',['port']],['break',['rupt']],['say',['dict']],['build',['struct']],['earth',['geo']],['heat',['therm']],['self',['auto']],['measure',['meter']],['study of',['logy']]];
 ODD.forEach(([means,roots],i)=>{const has=WORDS.filter(w=>w.parts.some(p=>roots.includes(p))).map(w=>w.w);
  /* The odd word holds no root of the same meaning group (so no -logy word is odd one out for "say"). */
  const group=new Set(roots.map(r=>rootOf(r).g)),lacks=WORDS.filter(w=>!w.parts.some(p=>rootOf(p)&&group.has(rootOf(p).g))).map(w=>w.w);
  for(const v of [0,1]){const a=has[(v*2)%has.length],b=has[(v*2+1)%has.length],odd=lacks[(i*7+v*11)%lacks.length],opts=rot([odd,a,b],i*2+v);
   add('which',`Which word does not have a root that means "${means}": ${three(...opts)}?`,odd,{t:'tiles',seq:opts},`${cap(a)} and ${b} have a root that means ${means}; ${odd} does not.`);}});
 /* Words: the meaning from the parts (two wrong meanings, one at a time), and the word for a meaning. */
 let k=0;
 WORDS.forEach(wd=>{const parts=wd.parts.map(showPart),built=parts.length===2?`${parts[0]} and ${parts[1]}`:`${parts[0]}, ${parts[1]} and ${parts[2]}`;
  const why=wd.parts.map(p=>`${showPart(p)} (${SOURCES.find(s=>s.root===p).meaning})`).join(' + ');
  wd.not.forEach(wrong=>{const first=k++%2===0,[a,b]=first?[wd.means,wrong]:[wrong,wd.means];
   add('words',`${cap(wd.w)} is built from ${built}. Using the parts, what does ${wd.w} mean: A "${a}" or B "${b}"?`,first?'A':'B',{t:'word',base:wd.w},`${cap(wd.w)} is ${why}: ${wd.means}.`,withStraight([wd.means]));});
  const first=k++%2===0,[a,b]=first?[wd.w,wd.vs]:[wd.vs,wd.w];
  add('words',`Which word means "${wd.means}": ${a} or ${b}?`,wd.w,card(a,b),`${cap(wd.w)} is ${why}: ${wd.means}.`);
 });
}
};
