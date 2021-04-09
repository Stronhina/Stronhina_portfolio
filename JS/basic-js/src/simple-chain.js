const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length > 0) {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`( )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position <= 0) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
