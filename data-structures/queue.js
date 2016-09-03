class Queue {
  constructor() {
    this.elements = [];
  }
  push(element) {
    this.elements.unshift(element);
  }
  pop() {
    return this.elements.pop();
  }
}

describe('queue', () => {
  it('stores elements in FIFO order', () => {
    const myStack = new Queue();
    myStack.push('a');
    myStack.push('b');
    myStack.push('c');
    expect(myStack.pop()).to.equal('a');
    expect(myStack.pop()).to.equal('b');
    expect(myStack.pop()).to.equal('c');
  });
});
