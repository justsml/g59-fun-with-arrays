
function sumNumbers(array) {
  return array.reduce( (sum, value) => sum + value)
}

// 'Transform' an Array to Another Size Array w/ .reduce
function squareEvenNumbers(values) {
  return values.filter( (value) => value % 2 === 0).reduce( (total, amount) => {
    total.push(amount * amount)
    return total
  }, [])
}
// Use reduce to group an array of
// objects on a specified key
function groupByKey(array, key = 'key') {
  return array.reduce( (acc, cur) => {
    if (acc[cur.key] === undefined) {
      acc[cur.key] = [] 
    }
    acc[cur.key].push(cur)
    return acc
  }, {})
}

module.exports = {
  sumNumbers,
  squareEvenNumbers,
  groupByKey
}
