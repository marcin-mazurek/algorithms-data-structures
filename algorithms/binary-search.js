let numberOfLookUps = 0;

const roundedAverage = (a, b) => Math.floor((a + b) / 2);

function isPrime(value) {
  if (value > 100) {
    throw new Error("Only values less than 100 are supported");
  }

  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  numberOfLookUps = 0; // reset the look ups counter - not a part of the algorithm, just for educational purposes
  let min = 0;
  let max = primes.length - 1;

  if (value > primes[max] || value < primes[min]) {
    return false;
  }

  while (max >= min) {
    let guess = roundedAverage(min, max);
    let found = primes[guess];
    numberOfLookUps++;

    if (found === value) {
      return true;
    }
    else if (found > value) {
      max = guess - 1;
    }
    else if (found < value) {
      min = guess + 1;
    }
  }

  return false;
}

describe('isPrime', () => {
  it('checks is a number prime using binary search', () => {
    expect(isPrime(3)).to.be.true;
    expect(numberOfLookUps).to.be.below(7); // log2(100)

    expect(isPrime(47)).to.be.true;
    expect(numberOfLookUps).to.be.below(7);

    expect(isPrime(73)).to.be.true;
    expect(numberOfLookUps).to.be.below(7);

    expect(isPrime(50)).to.be.false;
    expect(numberOfLookUps).to.be.below(7);

    expect(isPrime(26)).to.be.false;
    expect(numberOfLookUps).to.be.below(7);
  });

  it('handles edge cases', () => {
    expect(() => isPrime(101)).to.throw();

    expect(isPrime(99)).to.be.false;
    expect(numberOfLookUps).to.be.below(1);

    expect(isPrime(1)).to.be.false;
    expect(numberOfLookUps).to.be.below(1);

    expect(isPrime(0)).to.be.false;
    expect(numberOfLookUps).to.be.below(1);
  });
});
