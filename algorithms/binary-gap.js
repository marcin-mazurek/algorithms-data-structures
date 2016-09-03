function binaryGap(number) {
  const binary = number.toString(2);
  const zeroGroups = binary.split('1');
  const zeroGroupsCharCount = zeroGroups.map(zeroGroup => zeroGroup.length);

  // Is first group of 0s before first 1
  if (zeroGroupsCharCount[0] !== 0) {
    zeroGroupsCharCount.shift();
  }

  // Is last group of 0s after last 1
  if (zeroGroupsCharCount[zeroGroupsCharCount.length] !== 0) {
    zeroGroupsCharCount.pop();
  }

  return Math.max.apply(null, zeroGroupsCharCount);
}

describe('binary gap', () => {
  it('calculates the binary gap', () => {
    // 9 - 1001
    expect(binaryGap(9)).to.equal(2);
    // 529 - 1000010001
    expect(binaryGap(529)).to.equal(4);
    // 20 - 10100
    expect(binaryGap(20)).to.equal(1);
    // 15 - 1111
    expect(binaryGap(15)).to.equal(0);
  });
});
