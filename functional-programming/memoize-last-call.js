function areArgumentsEqual(previous, current) {
  if (previous.length !== current.length) {
    return false;
  }

  for (let index = 0; index < current.length; index++) {
    if (previous[index] !== current[index]) {
      return false;
    }
  }

  return true;
}

function memoizeLastCall(fn) {
  let lastArgs = [];
  let lastResult = null;

  return (...args) => {
    if (!areArgumentsEqual(lastArgs, args)) {
      lastArgs = args;
      lastResult = fn(...args);
    }

    return lastResult;
  };
}

describe('memoizeLastCall', () => {
  it('if the function is being called twice with the same arguments, ' +
     'returns cached result without calling the original function', () => {
    let callsCount = 0;
    const fn = (value) => {
      callsCount++;
      return value;
    };
    const memoizedFn = memoizeLastCall(fn);

    expect(memoizedFn('test')).to.equal('test');
    expect(memoizedFn('test')).to.equal('test');
    expect(callsCount).to.equal(1);
  });
});