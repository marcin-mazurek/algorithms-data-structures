const Queue = require('../data-structures/queue');

// Fake synchronous Promise for simpler testing
class Promise {
  constructor(resolve) {
    this.actionChain = [];
    resolve(result => {
      this.actionChain.forEach(fn => fn(result));
    });
  }
  then(next) {
    this.actionChain.push(next);
  }
}

function executeAsyncActionsWithThrottling(actions, limit) {
  const results = [];
  const queue = new Queue(actions);
  let numberOfRequestsPending = actions.length;

  return new Promise(resolve => {
    const handleResult = result => {
      numberOfRequestsPending--;
      results.push(result);

      if (numberOfRequestsPending === 0) {
        resolve(results);
      } else {
        handleNext();
      }
    }

    const handleNext = () => {
      if (queue.size) {
        const next = queue.dequeue();
        next().then(handleResult);
      }
    }

    for (let i = 0; i < limit; i++) {
      handleNext();
    }
  });
}

describe('executeAsyncActionsWithThrottling', () => {
  it('runs no more than a given number of actions at the same time', (done) => {
    let resolve1;
    let action1Started = false;
    const action1 = () => {
      action1Started = true;
      return new Promise(resolve => resolve1 = resolve);
    };

    let resolve2;
    let action2Started = false;
    const action2 = () => {
      action2Started = true;
      return new Promise(resolve => resolve2 = resolve);
    };

    let resolve3;
    let action3Started = false;
    const action3 = () => {
      action3Started = true;
      return new Promise(resolve => resolve3 = resolve);
    };

    executeAsyncActionsWithThrottling([action1, action2, action3], 2)
      .then(() => done());

    expect(action1Started).to.be.true;
    expect(action2Started).to.be.true;
    expect(action3Started).to.be.false;

    resolve1();

    expect(action3Started).to.be.true;

    resolve3();
    resolve2();
  });

  it('collects results into an array', (done) => {
    let resolve1;
    const action1 = () => new Promise(resolve => resolve1 = resolve);
    let resolve2;
    const action2 = () => new Promise(resolve => resolve2 = resolve);
    let resolve3;
    const action3 = () => new Promise(resolve => resolve3 = resolve);
    let resolve4;
    const action4 = () => new Promise(resolve => resolve4 = resolve);

    executeAsyncActionsWithThrottling([action1, action2, action3, action4], 2)
      .then(results => {
        expect(results).to.eql(['result2', 'result1', 'result4', 'result3']);
        done();
      });

    resolve2('result2');
    resolve1('result1');
    resolve4('result4');
    resolve3('result3');
  });

  it('does not crash when the number of actions is smaller than the limit', (done) => {
    let resolve1;
    const action1 = () => new Promise(resolve => resolve1 = resolve);
    let resolve2;
    const action2 = () => new Promise(resolve => resolve2 = resolve);
    let resolve3;
    const action3 = () => new Promise(resolve => resolve3 = resolve);

    executeAsyncActionsWithThrottling([action1, action2, action3], 5)
      .then(() => done());

    resolve1();
    resolve2();
    resolve3();
  });
});
