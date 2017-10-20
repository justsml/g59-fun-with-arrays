const test = require('ava');
const reduce = require('./');


test('#  sumNumbers: ', t => {
  const input  = [45, 4, -10, 140, 11, 250];
  const result = 420;
  const actual = reduce.sumNumbers(input);
  t.is(actual, result);
});


test('#  squareEvenNumbers: ', t => {
  const input  = [5, 10, 15];
  const result = [100];
  const actual = reduce.squareEvenNumbers(input);
  t.deepEqual(actual, result);
});

test('#  groupByKey: ', t => {
  const input  = [
    {name: 'a1', key: 'A'},
    {name: 'a1', key: 'A'},
    {name: 'b1', key: 'B'},
    {name: 'b2', key: 'B'},
    {name: 'c1', key: 'C'},
  ];
  const result = {
    A: [
      {name: 'a1', key: 'A'},
      {name: 'a1', key: 'A'},
    ],
    B: [
      {name: 'b1', key: 'B'},
      {name: 'b2', key: 'B'},
    ],
    C: [
      {name: 'c1', key: 'C'},
    ]
  };
  const actual = reduce.groupByKey(input, 'key');
  t.deepEqual(actual, result);
});
