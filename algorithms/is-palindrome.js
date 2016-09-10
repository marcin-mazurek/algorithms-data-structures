function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  if (string[0] !== string[string.length - 1]) {
    return false;
  }

  return isPalindrome(string.substr(1, string.length - 2));
}

describe('isPalindrome', () => {
  it('returns true if given string is a palindrome', () => {
    expect(isPalindrome('rotor')).to.be.true;
    expect(isPalindrome('level')).to.be.true;
    expect(isPalindrome('redivider')).to.be.true;
    expect(isPalindrome('racecar')).to.be.true;
  });

  it('returns false if given string is not a palindrome', () => {
    expect(isPalindrome('rater')).to.be.false;
    expect(isPalindrome('lever')).to.be.false;
    expect(isPalindrome('divider')).to.be.false;
    expect(isPalindrome('racercar')).to.be.false;
  });

  it('handles edge cases', () => {
    expect(isPalindrome('a')).to.be.true;
    expect(isPalindrome('z')).to.be.true;
    expect(isPalindrome('')).to.be.true;
  });
});
