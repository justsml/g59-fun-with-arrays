function sumNumbers(array) {
  // TODO: REPLACE THIS WITH A .REDUCE
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   sum = sum + array[i]
  // }
  return array.reduce((sum, value) => sum + value, 0);
}

// 'Transform' an Array to Another Size Array w/ .reduce
function squareEvenNumbers(array) {
  // TODO: Use at least 1 .reduce,
  // square ONLY the even numbers
  // & push the results into the return array
  return array.reduce(function(arr, num) {
    if (num % 2 == 0) arr.push(num * num);
    return arr;
  }, []);
}

// Use reduce to group an array of
// objects on a specified key
function groupByKey(array, key = "key") {
  return array.reduce((actual, current) => {
    if (actual[current.key] === undefined) {
      actual[current.key] = [];
    }
    actual[current.key].push(current);
    return actual;
  }, {});
}

module.exports = {
  sumNumbers,
  squareEvenNumbers,
  groupByKey
};
