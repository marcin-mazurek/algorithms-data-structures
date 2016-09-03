function fibonacci(limit) {
  let result = [], first = 0, second = 1, third;

  for (let i = 0; i < limit; i++) {
    result.push(first);
    third = first + second;
    first = second;
    second = third;
  }

  return result;
}

describe('fibbonaci sequence', () => {
  it('returns the sequence for one element', () => {
    expect(fibonacci(1)).to.eql([0]);
  });

  it('returns the sequence for two elements', () => {
    expect(fibonacci(2)).to.eql([0, 1]);
  });

  it('returns the sequence for three elements', () => {
    expect(fibonacci(3)).to.eql([0, 1, 1]);
  });

  it('returns the sequence for 10 elements', () => {
    expect(fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
