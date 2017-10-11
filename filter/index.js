function onlyEven(array) {
  const evens = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }
  return evens;
}
// refactor with filter!! OMG!

function onlyOneWord(array) {
  //where are the snacks?
}

function positiveRowsOnly(array) {
  //is Dan human?
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
