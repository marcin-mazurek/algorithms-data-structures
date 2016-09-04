class Stack {
  constructor() {
    this.elements = [];
  }
  push(element) {
    this.elements.push(element);
  }
  pop() {
    return this.elements.pop();
  }
  get size() {
    return this.elements.length;
  }
}

describe('stack', () => {
  it('stores elements in LIFO order', () => {
    const myStack = new Stack();
    myStack.push('a');
    myStack.push('b');
    myStack.push('c');
    expect(myStack.pop()).to.equal('c');
    expect(myStack.pop()).to.equal('b');
    expect(myStack.pop()).to.equal('a');
  });
});

module.exports = Stack;
