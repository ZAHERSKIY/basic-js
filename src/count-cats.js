const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  let result = 0;
  let arr = matrix.reduce((prev, item) => prev.concat(item), []);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '^^') {
      result++;
    }
  }
  return result;
};

console.log(
  module.exports([
    [0, 1],
    [0, 2],
    [1, 2],
  ])
);
