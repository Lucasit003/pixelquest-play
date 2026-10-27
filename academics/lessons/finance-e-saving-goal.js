// Elementary topic: saving toward a goal. Every total, week count and amount left is computed from the saving plan, never written by hand.
const HOPS=[1,2,3,4,5,10];
const WEEKS=[2,3,4,5,6,7,8];
const THINGS=['a kite','a book','a ball','a puzzle','a plant','a game','a hat'];
const GOALS=[10,15,20,25,30];
const SAVED=[2,3,5,6,8,9,11,12,14];

function list(parts) {
  return parts.length > 1 ? `${parts.slice(0, -1).join(', ')} and ${parts.at(-1)}` : parts[0];
}

export default {
  id: 'finance-e-saving-goal',
  subject: 'finance',
  level: 3,
  grade: 3,
  standard: 'NSPFE Saving (K-4); CCSS 3.OA.A.3, 2.NBT.B.5',
  title: 'Saving toward a goal',
  goal: 'Save the same amount each week, count how much you have, and find how long a goal takes.',
  points: 20,
  skills: {
    total: 'Saving each week',
    weeks: 'Weeks to a goal',
    left: 'How much more'
  },
  steps: [
    { skill: 'total', say: 'A saving goal is an amount of money you want to save for something. Leo wants a ball that costs $12.', pic: [{ t: 'line', max: 12, hop: 3, jumps: 0, mark: 12 }], eq: 'Goal: $12' },
    { skill: 'total', say: 'Leo saves $3 every week. Each week his savings jump up by 3 more dollars.', pic: [{ t: 'line', max: 12, hop: 3, jumps: 2, mark: 12, solve: true }], eq: '$3, $6' },
    { skill: 'total', say: 'Count by threes to find his savings. After 4 weeks he has $12.', pic: [{ t: 'line', max: 12, hop: 3, jumps: 4, mark: 12, solve: true }], eq: '$3 + $3 + $3 + $3 = $12', check: { prompt: 'Nia saves $5 every week, starting with $0. How many dollars has she saved after 3 weeks?', answer: 15, options: [15, 8, 5], hint: 'Count by fives, one count for each week.', pic: { t: 'line', max: 15, hop: 5, jumps: 3 } } },
    { skill: 'weeks', say: 'To find how many weeks a goal takes, count the jumps it takes to reach the goal.', pic: [{ t: 'line', max: 12, hop: 3, jumps: 4, mark: 12, solve: true }], eq: '4 jumps of $3 = $12, so 4 weeks' },
    { skill: 'weeks', say: 'Ana wants $10 and saves $2 a week. It takes 5 jumps of 2 to reach 10, so she needs 5 weeks.', pic: [{ t: 'line', max: 10, hop: 2, jumps: 5, mark: 10, solve: true }], eq: '$2, $4, $6, $8, $10', check: { prompt: 'Ben wants to save $20. He saves $5 each week, starting with $0. How many weeks does he need?', answer: 4, options: [4, 5, 15], hint: 'Count by fives until you reach 20. Count the jumps.', pic: { t: 'line', max: 20, hop: 5, jumps: 4, mark: 20 } } },
    { skill: 'left', say: 'Partway there, subtract to find how much is left. Leo has $9 and his goal is $12.', pic: [{ t: 'line', max: 12, hop: 9, jumps: 1, mark: 12, solve: true }], eq: '$12 - $9 = $3 more' },
    { skill: 'left', say: 'Your goal minus what you have saved is how much more you need.', pic: [{ t: 'line', max: 20, hop: 14, jumps: 1, mark: 20, solve: true }], eq: '$20 - $14 = $6 more', check: { prompt: 'Kim\'s goal is $25. She has saved $18. How many more dollars does she need?', answer: 7, options: [7, 43, 18], hint: 'Subtract what she has saved from her goal.', pic: { t: 'line', max: 25, hop: 18, jumps: 1, mark: 25 } } }
  ],
  items(add) {
    for (const h of HOPS) for (const n of WEEKS) add('total', `You start with $0 and save $${h} each week. How many dollars do you have after ${n} weeks?`, h * n, { t: 'line', max: h * n, hop: h, jumps: n, hint: true }, `Count by ${h} for ${n} weeks: ${list(Array.from({ length: n }, (_, i) => (i + 1) * h))}. That is $${h * n}.`);
    let k = 0;
    for (const h of HOPS) for (const n of WEEKS) {
      const g = h * n, thing = THINGS[k % THINGS.length];
      add('weeks', `You want to save $${g} for ${thing}. You save $${h} each week, starting from $0. How many weeks will it take?`, n, { t: 'line', max: g, hop: h, jumps: n, mark: g, hint: true }, `${n} jumps of $${h} reach $${g}, so it takes ${n} weeks.`);
      k++;
    }
    for (const g of GOALS) for (const s of SAVED) if (s < g) add('left', `Your saving goal is $${g}. You have saved $${s} so far. How many more dollars do you need?`, g - s, { t: 'line', max: g, hop: s, jumps: 1, mark: g, hint: true }, `$${g} - $${s} = $${g - s}. You need $${g - s} more.`);
  }
};
