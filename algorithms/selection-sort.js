function getIndexOfMinValue(array, offset) {
  var minValue = array[offset];
  var minIndex = offset;

  for (let i = offset + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }

  return minIndex;
};

function sort(array) {
  for (var i = 0; i < array.length; i++) {
    let indexOfMinimum = getIndexOfMinValue(array, i);
    var currentValue = array[i];
    array[i] = array[indexOfMinimum];
    array[indexOfMinimum] = currentValue;
  }

  return array;
};

describe('selection sort function', () => {
  it('sorts the array', () => {
    expect(sort([5, 3, 1, 4, 2])).to.deep.equal([1, 2, 3, 4, 5]);
    expect(sort([22, 11, 99, 88, 9, 7, 42])).to.deep.equal([7, 9, 11, 22, 42, 88, 99]);
  });
});
