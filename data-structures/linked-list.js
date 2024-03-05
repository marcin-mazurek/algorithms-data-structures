class LinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(node) {
    if (this.head == null) {
      this.head = node;
    } else {
      this.getLast().next = node;
    }

    this.size++;
  }

  remove(nodeToRemove) {
    if (this.head === nodeToRemove) {
      this.head = this.head.next;
      this.size--;
    } else {
      let previousNodePointer = this.head;
      let currentNodePointer = this.head.next;

      while (currentNodePointer) {
        if (currentNodePointer === nodeToRemove) {
          previousNodePointer.next = currentNodePointer.next;
          this.size--;
          break;
        }

        previousNodePointer = currentNodePointer;
        currentNodePointer = currentNodePointer.next;
      }
    }

  }

  getSize() {
    return this.size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.getElementAtIndex(this.size - 1);
  }

  getElementAtIndex(index) {
    if (index + 1 > this.size) {
      throw new Error('Out of bounds');
    }

    let counter = 0;
    let nodePointer = this.head;

    while (counter !== index) {
      nodePointer = nodePointer.next;
      counter++;
    }

    return nodePointer;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}

module.exports = { LinkedListNode, LinkedList };

describe('LinkedList', () => {
  it('can be constructed and filled with data', () => {
    const linkedList = new LinkedList();
    linkedList.add(new LinkedListNode(1));
    linkedList.add(new LinkedListNode(2));
    linkedList.add(new LinkedListNode(3));

    expect(linkedList.getElementAtIndex(0).data).to.equal(1);
    expect(linkedList.getElementAtIndex(1).data).to.equal(2);
    expect(linkedList.getElementAtIndex(2).data).to.equal(3);
  });

  it('maintains size property', () => {
    const linkedList = new LinkedList();
    expect(linkedList.getSize()).to.equal(0);

    linkedList.add(new LinkedListNode(1));
    linkedList.add(new LinkedListNode(2));
    expect(linkedList.getSize()).to.equal(2);

    const thirdNode = new LinkedListNode(3);
    linkedList.add(thirdNode);
    expect(linkedList.getSize()).to.equal(3);

    linkedList.remove(thirdNode);
    expect(linkedList.getSize()).to.equal(2);

    linkedList.remove(thirdNode);
    linkedList.remove(new LinkedListNode('non existent'));
    expect(linkedList.getSize()).to.equal(2);

    linkedList.clear();
    expect(linkedList.getSize()).to.equal(0);
  });

  it('handles node removal', () => {
    const linkedList = new LinkedList();
    const firstNode = new LinkedListNode(1);
    const secondNode = new LinkedListNode(2);
    const thirdNode = new LinkedListNode(3);
    linkedList.add(firstNode);
    linkedList.add(secondNode);
    linkedList.add(thirdNode);
    linkedList.remove(secondNode);

    expect(linkedList.getFirst().next).to.equal(thirdNode);

    linkedList.remove(firstNode);
    expect(linkedList.getFirst()).to.equal(thirdNode);

    linkedList.remove(thirdNode);
    expect(linkedList.getSize()).to.equal(0);
    expect(linkedList.getFirst()).to.be.undefined;
  });

  it('handles retriving first and last node', () => {
    const linkedList = new LinkedList();
    const firstNode = new LinkedListNode(1);
    linkedList.add(firstNode);
    linkedList.add(new LinkedListNode(2));
    const lastNode = new LinkedListNode(3);
    linkedList.add(lastNode);

    expect(linkedList.getFirst()).to.equal(firstNode);
    expect(linkedList.getLast()).to.equal(lastNode);
  });
});