const CustomError = require('../extensions/custom-error');

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value === '' ? this.arr.push('( )') : this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.arr[position] === undefined || this.arr === '') {
      this.arr = [];
      throw Error;
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = this.arr.join('~~');
    this.arr = [];
    return result;
  },
};

module.exports = chainMaker;
console.log(
  module.exports.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()
);
