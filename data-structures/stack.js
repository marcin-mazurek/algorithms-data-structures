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
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.pop()).to.equal('c');
    expect(stack.pop()).to.equal('b');
    expect(stack.pop()).to.equal('a');
  });
});

module.exports = Stack;
