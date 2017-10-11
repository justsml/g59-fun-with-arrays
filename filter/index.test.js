let test = require('ava');
const filter = require('./');

test('#onlyEven(): returns only those numbers that are even', function(t) {
  let input = [10, 15, 20, 25, 30, 35];
  let expected = [10, 20, 30];
  let actual = filter.onlyEven(input);

  t.deepEqual(actual, expected);
});

test('#onlyOneWord(): returns only those strings with a single word (no spaces)', function(t) {
  let input = ['return', 'phrases', 'with one word'];
  let expected = ['return', 'phrases'];
  let actual = filter.onlyOneWord(input);

  t.deepEqual(actual, expected);
});

test('#positiveRowsOnly(): return only the rows in the matrix that have all positive integers', function(t) {
  let input = [[1, 10, -100], [2, -20, 200], [3, 30, 300]];
  let expected = [[3, 30, 300]];
  let actual = filter.positiveRowsOnly(input);

  t.deepEqual(actual, expected);
});

test('#allSameVowels(): return only those words where all the vowels are the same', function(t) {
  let input = ['racecar', 'amalgam', 'oligopoly', 'zoom'];
  let expected = ['amalgam', 'zoom'];
  let actual = filter.allSameVowels(input);

  t.deepEqual(actual, expected);
});
