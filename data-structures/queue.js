class Queue {
  constructor(initialElements = []) {
    this.elements = initialElements.reverse();
  }
  enqueue(element) {
    this.elements.unshift(element);
  }
  dequeue() {
    return this.elements.pop();
  }
  get size() {
    return this.elements.length;
  }
}

module.exports = Queue;

describe('queue', () => {
  it('stores elements in FIFO order', () => {
    const myStack = new Queue();
    myStack.enqueue('a');
    myStack.enqueue('b');
    myStack.enqueue('c');
    expect(myStack.dequeue()).to.equal('a');
    expect(myStack.dequeue()).to.equal('b');
    expect(myStack.dequeue()).to.equal('c');
  });
});
