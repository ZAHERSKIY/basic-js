const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        const tmp = this.calculateDepth(arr[i]);
        if (result < tmp + 1) {
          result = tmp + 1;
        }
      }
    }
    return result;
  }
};

const depthCalc = new module.exports();
console.log(depthCalc.calculateDepth([[[]]]));
