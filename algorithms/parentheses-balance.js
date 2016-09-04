const Stack = require('../data-structures/stack');

const isOpening = (char) => char === '(' || char === '[';
const isClosing = (char) => char === ')' || char === ']';
const areMatching = (opening, closing) => (opening === '(' && closing === ')') || (opening === '[' && closing === ']');

function areParenthesesBalanced(input) {
  const charsStack = new Stack();

  for (let char of input) {
    if (isOpening(char)) {
      charsStack.push(char);
    }
    else if (isClosing(char)) {
      let lastOpening = charsStack.pop();

      if (!areMatching(lastOpening, char)) {
        return false;
      }
    }
    else {
      throw new Error("Unexpected character - only (, ), [ and ] are allowed.");
    }
  }

  return charsStack.size === 0;
}

describe('areParenthesesBalanced', () => {
  it('returns true if balanced parenteses/brackets are given', () => {
    expect(areParenthesesBalanced('()')).to.be.true;
    expect(areParenthesesBalanced('([])')).to.be.true;
    expect(areParenthesesBalanced('([]())')).to.be.true;
    expect(areParenthesesBalanced('[([]())]')).to.be.true;
    expect(areParenthesesBalanced('[][()([]())]')).to.be.true;
  });

  it('returns false if unbalanced parenteses/brackets are given', () => {
    expect(areParenthesesBalanced(')(')).to.be.false;
    expect(areParenthesesBalanced('([)')).to.be.false;
    expect(areParenthesesBalanced('([]()')).to.be.false;
    expect(areParenthesesBalanced('[([[())]')).to.be.false;
  });
});
