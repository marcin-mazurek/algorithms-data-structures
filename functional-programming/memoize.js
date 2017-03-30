function memoize(fn) {
  let cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache[key] === undefined) {
      cache[key] = fn(...args);
    }

    return cache[key];
  };
}

describe('memoize', () => {
  it('does not call a given function twice with the same arguments, gets the result from cache instead', () => {
    let callsCount = 0;
    const fn = (a, b) => {
      callsCount++;
      return a * b;
    };
    const memoizedFn = memoize(fn);

    expect(memoizedFn(2, 4)).to.equal(8);
    expect(memoizedFn(3, 4)).to.equal(12);
    expect(callsCount).to.equal(2);
    expect(memoizedFn(2, 4)).to.equal(8);
    expect(callsCount).to.equal(2);
  });
});