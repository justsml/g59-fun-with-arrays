const test = require('ava');
const map = require('./');

test('#multiplyBy10(): multiplies all elements in an array by 10', t => {
  const input = [45, 1, -10, 11, 250];
  const expected = [450, 10, -100, 110, 2500];
  const actual = map.multiplyBy10(input);
  t.deepEqual(actual, expected);
});

test('#onlyVowels()removes any non-vowel character from words in an array', t => {
  const input = ['average', 'exceptional', 'amazing'];
  const expected = ['aeae', 'eeioa', 'aai'];
  const actual = map.onlyVowels(input);

  t.deepEqual(actual, expected);
});

test('#doubleMatrix(): doubles the numbers in the matrix, maintaining the same structure', t => {
  const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
  const actual = map.doubleMatrix(input);

  t.deepEqual(actual, expected);
});
