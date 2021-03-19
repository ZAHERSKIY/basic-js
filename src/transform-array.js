const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev') {
      array.pop();
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        // чтобы мы не ушли за границу конца массива
        array.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0) {
        //чтобы мы не ушли за границу начала массива
        array.push(arr[i - 1]);
      }
    } else {
      array.push(arr[i]);
    }
  }
  return array;
};

console.log(
  module.exports([1, 2, 3, '--discard-prev', 4, 5, 6, 7, 8, 9, 10, 11])
);
