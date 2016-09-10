function sort(array) {
  // iterate over each element in the array starting from 2nd element
  for (let i = 1; i < array.length; i++) {
    const current = array[i];

    // copy the previous element onto current position until the previous one is smaller than current
    for (let j = i; j > 0; j--) {
      if (array[j - 1] > current) {
        array[j] = array[j - 1];
        array[j - 1] = current;
      } else {
        break;
      }
    }
  }

  return array;
}

describe('insertion sort function', () => {
  it('sorts an array', () => {
    expect(sort([5, 3, 1, 4, 2])).to.deep.equal([1, 2, 3, 4, 5]);
    expect(sort([22, 11, 99, 88, 9, 7, 42])).to.deep.equal([7, 9, 11, 22, 42, 88, 99]);
  });
});
