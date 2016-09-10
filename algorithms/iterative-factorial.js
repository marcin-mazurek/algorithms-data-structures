function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

describe('iterative factorial', () => {
  it('calculates factorial', () => {
    expect(factorial(0)).to.equal(1);
    expect(factorial(5)).to.equal(5*4*3*2*1);
    expect(factorial(7)).to.equal(7*6*5*4*3*2*1);
    expect(factorial(9)).to.equal(9*8*7*6*5*4*3*2*1);
  });
});
