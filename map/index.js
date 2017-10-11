function multiplyBy10(array) {
  return array.map(n => n * 10);
}

function onlyVowels(array) {
  return array.map(word => word.replace(/[^aeiou]*/gi, ''));
}

function doubleMatrix(array) {
  return array.map(nums => nums.map(n => n * 2)); // your code here
}

function doubleMatrix(array) {}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
