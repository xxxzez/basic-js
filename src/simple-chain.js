const chainMaker = {
  myString: [],

  getLength() {
    return this.myString.length;
  },

  addLink(value) {
    this.myString.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if ( typeof position !== 'number' || !Number.isInteger(position)) {
      throw new Error('Error');
    }
    if ( position < 1 || position > this.myString.length) {
      this.myString = [];
      throw new Error('Error');
    }
    this.myString.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.myString.reverse();
    return this;
  },
  
  finishChain() {
    let finalString = this.myString.slice();
    this.myString = [];
    return finalString.join('~~');
  }
};
module.exports = chainMaker;