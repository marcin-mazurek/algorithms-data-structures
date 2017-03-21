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
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.dequeue()).to.equal('a');
    expect(queue.dequeue()).to.equal('b');
    expect(queue.dequeue()).to.equal('c');
  });
});
