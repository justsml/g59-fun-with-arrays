function onlyEven(array) {
  return array.filter(n => n % 2 === 0);
}

function onlyOneWord(array) {
  // stretch return array.filter(w => !/ /.test(w));
  // return array.reduce((out, word) => {
  //   if (word.indexOf(' ') === -1) {
  //     out.push(word);
  //   }
  //   return out;
  // }, []);
  return array.filter(w => w.indexOf(' ') === -1);
}

function positiveRowsOnly(array) {
  return array.filter(nums => nums.filter(n => n >= 0));
}

//Stretch!!!!!!!
function allSameVowels(array) {
  return array.filter(v => {
    return v
      .replace(/[^aeiou]*/gi, '')
      .split('')
      .every((letter, index, arr) => letter === arr[0]);
  });
}
// .replace(/[^aeiou]*/gi, '');
module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
