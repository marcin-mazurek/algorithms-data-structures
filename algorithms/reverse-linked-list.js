const { LinkedList, LinkedListNode } = require('../data-structures/linked-list');

function reverseLinkedList(linkedList) {
  return reverseLinkedListNode(linkedList.getFirst());
}

function reverseLinkedListNode(current, previous) {
  if (!current) {
    return;
  }

  const next = current.next;
  current.next = previous;

  reverseLinkedListNode(next, current);
}

describe('reverseLinkedList', () => {
  it('reverses linked list', () => {
    const linkedList = new LinkedList();
    const firstNode = new LinkedListNode(1);
    const secondNode = new LinkedListNode(2);
    const thirdNode = new LinkedListNode(3);

    linkedList.add(firstNode);
    linkedList.add(secondNode);
    linkedList.add(thirdNode);

    reverseLinkedList(linkedList);

    expect(thirdNode.next).to.equal(secondNode);
    expect(secondNode.next).to.equal(firstNode);
    expect(firstNode.next).to.be.undefined;
  });
})