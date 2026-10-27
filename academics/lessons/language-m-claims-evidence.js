// Middle School topic (Grade 6, CCSS RI.6.8): claims, reasons and evidence. Every passage is put together here from
// one argument's parts, and each line's role is recorded as it is placed, so every answer comes from how the passage
// was built: one claim (the only line with "should"), two reasons, one piece of evidence for each reason, and one
// line that is on the topic but gives no reason or evidence. Each piece of evidence repeats a key word of its own
// reason and shares none with the other reason, and the off-topic line shares no key word with any other line, so
// "which reason does this back up" and "which line does not support the claim" each have one answer. Evidence lines
// hold a number, but so do many off-topic lines, so a digit alone never gives the answer. The schools, towns, surveys,
// studies and numbers are all made up, and every passage is called made-up; nothing here is a real-world fact. Every
// line is at most 80 characters so it fits its box in the picture. Extends language-e-compare-viewpoints (evidence)
// and language-e-text-structure (how a passage is built).
const ARGS=[
 {c:'Our school should start a garden club.',r:['Gardening is good exercise.','A garden would give the cafeteria fresh vegetables.'],
  e:[['Club members at a nearby school get 40 minutes of exercise each meeting.','A fictional study found an hour of weeding is as much exercise as a 3 km walk.'],['The garden club at Pine School grew 300 pounds of vegetables last year.','The cafeteria at Pine School served 40 salads a week from its own garden.']],
  x:['Our school was built in 1975.','The school colors are green and gold.']},
 {c:'Our school should make recess longer.',r:['Running around helps students focus in class.','Recess gives students time to make friends.'],
  e:[['Students with 30 minutes of recess could focus better in class, a study found.','After recess grew to 30 minutes, 8 of 10 teachers saw better focus in class.'],['In a fictional survey, 70 of 100 students said they made most friends at recess.','A fictional report says 6 of 10 new students met their first friends at recess.']],
  x:['Recess at our school starts at 11:45.','The school mascot is a blue heron.']},
 {c:'The town library should open on Saturdays.',r:['Many families are too busy to visit on weekdays.','Students need a quiet place to study on weekends.'],
  e:[['In a fictional survey, 45 of 60 families said weekdays are too busy to visit.','A fictional town report says 7 of 10 parents work late on weekdays.'],['Last spring, 80 students asked for a quiet room to study in on weekends.','A fictional survey found 3 of 4 students have no quiet place to study at home.']],
  x:['The library building has 3 floors and a red roof.','The front door of the library faces Elm Street.']},
 {c:'Our class should keep a class pet.',r:['Caring for a pet teaches responsibility.','A pet can make the classroom calmer.'],
  e:[['Students who cared for a fish showed more responsibility in 9 of 10 classes.','In one fictional class, 25 students took turns caring for a hamster.'],['In a fictional study, students were calmer in 7 of 10 classrooms with a pet.','Room 4 at Pine School got 30 percent quieter and calmer after a turtle arrived.']],
  x:['Our teacher has taught at this school for 6 years.','Our class photo is taken every May.']},
 {c:'Our town should build a skate park.',r:['Skaters need a safe place to ride.','A skate park would bring visitors to town.'],
  e:[['Last year, 15 skaters in Pinecrest had to ride on busy streets.','In a fictional survey, 8 of 10 skaters said they had no safe place to ride.'],['A fictional town nearby got 2,000 new visitors after its skate park opened.','Shops near a fictional skate park earned 20 percent more from visitors.']],
  x:['Our town has 3 bakeries on Main Street.','The town hall clock was fixed in May.']},
 {c:'Our school should have a longer lunch period.',r:['Students need enough time to finish their food.','A calm lunch helps students feel rested for afternoon classes.'],
  e:[['In a fictional survey, 40 of 50 students said they could not finish their food.','At Pine School, 6 of 10 students cannot finish their food before the bell.'],['Teachers saw 30 percent fewer sleepy students in afternoon classes.','With a longer lunch, 7 of 10 students in a study felt rested in the afternoon.']],
  x:['The lunchroom has 12 round tables.','Lunch is served by Mr. Ruiz and Ms. Cole.']},
 {c:'Our town should plant more trees on Main Street.',r:['Trees give shade on hot days.','Trees give birds a place to live.'],
  e:[['On one hot day, the shade under the old elms was 8 degrees cooler.','On a hot July day, the sidewalk in the shade was 15 degrees cooler.'],['Bird watchers counted 40 birds living in the 6 oak trees by the bakery.','A fictional report found 12 kinds of birds nesting in town trees.']],
  x:['Main Street is 2 kilometers long.','The post office opens at 9 every morning.']},
 {c:'Our school should start a reading buddies program.',r:['Older students can help younger ones learn to read.','The program helps students make friends in other grades.'],
  e:[['At Pine School, 20 younger students read better after 10 weeks with buddies.','In a study, 8 of 10 younger readers improved with help from older ones.'],['In a fictional survey, 9 of 10 buddies said they made friends in other grades.','At Pine School, 45 buddy pairs from different grades became friends.']],
  x:['Our school bus is painted yellow.','The first bell rings at 8:15 each morning.']},
 {c:'The town pool should stay open until September.',r:['Hot weather often lasts into September.','Swimming keeps children active.'],
  e:[['Last year, 12 days in September were over 30 degrees, a weather log shows.','A fictional weather report shows warm weather in 8 of the last 10 Septembers.'],['In a fictional survey, 7 of 10 children who swim stay active all summer.','Children at a fictional swim club were active for 5 more hours each week.']],
  x:['The pool lifeguard chair is 3 meters tall.','The snack stand at the pool sells lemonade.']},
 {c:'Our class should take a field trip to the science museum.',r:['Seeing real objects helps students remember lessons.','The museum is free for school groups.'],
  e:[['Students who saw real objects could remember 2 times as much, a study found.','After seeing real fossils, 7 of 10 students could remember the lesson.'],['The museum lets groups of 30 students in free on Tuesdays.','Last year, 40 school groups visited the museum for free.']],
  x:['The museum cafe sells 5 kinds of sandwiches.','The museum building is painted white.']},
 {c:'Our town should add more bike lanes.',r:['Bike lanes keep riders safe from cars.','More people would cycle to work instead of driving.'],
  e:[['In a fictional town, crashes between riders and cars fell from 20 to 8.','A fictional report says 9 of 10 riders feel safe from cars in a bike lane.'],['In a fictional survey, 30 of 100 drivers said they would cycle to work.','When a fictional city added lanes, 400 more people began to cycle to work.']],
  x:['Our main road was paved in 1990.','The town flag is blue and white.']},
 {c:'Our school should hold a weekly music class.',r:['Music practice can improve memory.','Playing in a group teaches teamwork.'],
  e:[['Music students who practice scored 15 points higher on a memory test.','After a year of lessons, 8 of 10 students in a study had better memory.'],['Band teachers at Pine School said 8 of 10 members got better at teamwork.','In a fictional survey, 6 of 10 choir members said singing taught them teamwork.']],
  x:['Our school hallway was painted in 2021.','Our gym has a wooden floor.']},
 {c:'Our town should hold a monthly farmers market.',r:['Local growers need more places to sell.','Fresh food is healthier for families.'],
  e:[['A fictional county report says 25 local growers have nowhere nearby to sell.','In a fictional survey, 12 of 20 local growers said they need places to sell.'],['In a fictional survey, 6 of 10 families said they would buy more fresh food.','Families in a fictional study ate 2 more servings of fresh food each day.']],
  x:['The town square has 4 benches.','The oldest house in town is painted green.']},
 {c:'Our school should collect cans for recycling.',r:['Recycling keeps trash out of the landfill.','The cans can be sold to raise money for trips.'],
  e:[['Last year, a fictional school kept 500 kilograms of trash out of the landfill.','Each recycled can is 15 grams less trash in the landfill, a report says.'],['Pine School sold 4,000 cans and used the money for 2 class trips.','A fictional class raised money for 3 trips by selling old cans.']],
  x:['The school front gate is made of iron.','Room 8 has 30 desks.']},
 {c:'Our town should open a dog park.',r:['Dogs need space to run off the leash.','A dog park helps neighbors meet each other.'],
  e:[['A fictional vet says 8 of 10 city dogs never run off the leash.','In a fictional survey, 70 of 100 owners said their dogs have no space to run.'],['In a fictional town, 7 of 10 dog park visitors meet neighbors there.','A fictional survey found 50 neighbors became friends at a dog park.']],
  x:['Our town library has a cat named Pepper.','The town hall was built in 1902.']},
 {c:'Our school should add a water fountain on every floor.',r:['Drinking water helps students think clearly.','Students waste class time walking to the only fountain.'],
  e:[['After drinking 2 cups of water, students in a study could think more clearly.','In a fictional study, drinking 2 cups of water helped students think faster.'],['Students on the third floor spend 6 minutes walking to the only fountain.','In a fictional survey, 4 of 5 teachers said fountain trips waste class time.']],
  x:['The school flag pole is 10 meters tall.','Our principal likes to garden.']}];
/* Line orders, by role: C claim, R0/R1 reasons, E0/E1 their evidence, X the line that gives no support. */
const ORDERS=[['C','R0','E0','R1','E1','X'],['C','R0','E0','X','R1','E1'],['R0','E0','R1','E1','X','C'],['C','X','R0','E0','R1','E1'],['R0','E0','X','R1','E1','C'],['C','R0','R1','E0','E1','X'],['C','R1','E1','R0','E0','X'],['X','C','R0','E0','R1','E1'],['R1','E1','X','R0','E0','C']];
const L='ABCDEF';
const lineAccept=(letter,text)=>[`line ${letter}`,`(${letter})`,text,text.replace(/\.$/,'')];
const passage=(lines,small=true)=>({t:'passages',title:'Read the passage',texts:lines,...(small?{small:true}:{})});
export default {
id:'language-m-claims-evidence',subject:'language',level:4,grade:6,standard:'CCSS RI.6.8',
title:'Claims, reasons and evidence',
goal:'Find the claim in an argument, match each piece of evidence to the reason it backs up, and spot the line that gives no support.',
points:20,
skills:{claim:'Find the claim',support:'Match evidence to its reason',relevant:'Spot the line that does not support'},
steps:[
 {skill:'claim',say:'An argument has one main claim: the point the writer wants you to accept. A claim often says what should happen, like Our school should start a garden club. Every other line is there to back it up, or it does not belong.',pic:passage(['Our school should start a garden club.','Gardening is good exercise.'],false)},
 {skill:'claim',say:'Reasons say why the claim is right. Evidence is a fact, a number or an example that shows one reason is true. A reason is general; evidence is specific.',pic:passage(['Claim: Our school should start a garden club.','Reason: Gardening is good exercise.','Evidence: Club members get 40 minutes of exercise each meeting.'],false),
  check:{prompt:'Try it: read the made-up passage. (A) Older walkers need places to rest. (B) Our park should get more benches. (C) In a fictional survey, 30 of 40 walkers said they had to stand. Which line states the main claim?',answer:'B',options:['A','B','C'],hint:'Which line says what the writer thinks should happen?',pic:passage(['Older walkers need places to rest.','Our park should get more benches.','In a fictional survey, 30 of 40 walkers said they had to stand.'],false)}},
 {skill:'support',say:'Each piece of evidence backs up one reason, and the two usually share key words. The reason says gardening is good exercise, and the evidence counts the minutes of exercise, so they belong together.',pic:passage(['Reason: Gardening is good exercise.','Evidence: Club members get 40 minutes of exercise each meeting.'],false)},
 {skill:'support',say:'A passage with two reasons has two pieces of evidence. Match each one to the reason it proves, not just to the line next to it.',pic:passage(['Gardening is good exercise.','A garden would give the cafeteria fresh vegetables.','The garden club at Pine School grew 300 pounds of vegetables last year.'],false),
  check:{prompt:'Try it: (A) Benches give older walkers a place to rest. (B) Benches let families eat lunch outdoors. (C) In a fictional survey, 30 of 40 older walkers said they had nowhere to rest. Which reason does line C back up: A or B?',answer:'A',options:['A','B'],hint:'Which reason talks about the same people and the same need as line C?',pic:passage(['Benches give older walkers a place to rest.','Benches let families eat lunch outdoors.','In a fictional survey, 30 of 40 older walkers said they had nowhere to rest.'],false)}},
 {skill:'relevant',say:'Some lines are about the topic but give no reason and no evidence. The school colors are green and gold says nothing about why a garden club is a good idea, so it does not support the claim.',pic:passage(['Our school should start a garden club.','The school colors are green and gold.'],false)},
 {skill:'relevant',say:'To test a line, ask whether it helps prove the claim or one of its reasons. A line can be true, and even mention the topic, and still give no support.',pic:passage(['Does it help prove the claim or a reason?','Yes: a reason or evidence.','No: it does not support the claim.'],false),
  check:{prompt:'Try it: the claim is "Our park should get more benches." Which line does not support it: (A) Older walkers need places to rest. (B) The park gate is painted black. (C) In a fictional survey, 30 of 40 walkers said they had to stand.',answer:'B',options:['A','B','C'],hint:'Which line says nothing about why more benches would help?',pic:passage(['Older walkers need places to rest.','The park gate is painted black.','In a fictional survey, 30 of 40 walkers said they had to stand.'],false)}}],
progression:{requires:['language-e-compare-viewpoints','language-e-text-structure'],operations:2,demand:'Trace an argument: tell the claim from its reasons, connect each piece of evidence to the reason it supports, and set aside a line that supports nothing.'},
items(add){
 let k=0;
 ARGS.forEach((g,i)=>{for(const v of [0,1]){
  const order=ORDERS[(i*2+v)%ORDERS.length],text={C:g.c,R0:g.r[0],R1:g.r[1],E0:g.e[0][v],E1:g.e[1][v],X:g.x[v]};
  const lines=order.map(role=>text[role]),at=role=>L[order.indexOf(role)];
  const intro='Read the made-up passage. '+lines.map((s,j)=>`(${L[j]}) ${s}`).join(' ')+' ',pic=passage(lines);
  add('claim',intro+'Which line states the writer’s main claim? Give its letter.',at('C'),pic,`Line ${at('C')} says what the writer wants to happen; the other lines give reasons and evidence, or nothing at all.`,lineAccept(at('C'),g.c));
  const c=(i+v)%2,o=1-c;
  add('support',intro+`Which line gives evidence for the reason in line ${at('R'+c)}?`,at('E'+c),pic,`Line ${at('E'+c)} shares the reason’s key words and shows it is true.`,lineAccept(at('E'+c),text['E'+c]));
  const first=k++%2===0,[p,q]=first?[at('R'+o),at('R'+c)]:[at('R'+c),at('R'+o)];
  add('support',intro+`Line ${at('E'+o)} gives evidence. Which reason does it back up: line ${p} or line ${q}?`,at('R'+o),pic,`Line ${at('E'+o)} shares its key words with the reason in line ${at('R'+o)}.`,lineAccept(at('R'+o),text['R'+o]));
  add('relevant',intro+'Apart from the claim itself, which line gives no reason or evidence for the claim?',at('X'),pic,`Line ${at('X')} is about the topic but does not help show the claim is right.`,lineAccept(at('X'),g.x[v]));
 }});
}
};
