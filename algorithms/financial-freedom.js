function calculateNumberOfMonthsOfSaving(savingsPerMonth, monthlyInterestRate, expectedAmount) {
  let currentMonth = 1;
  let currentlySaved = 0;

  while (currentlySaved < expectedAmount) {
    currentlySaved = currentlySaved * (1 + monthlyInterestRate) + savingsPerMonth;
    currentMonth++;
  }

  return currentMonth - 1;
}

function calculateMonthsToReachFinancialFreedom(initialCapital, savingsPerMonth, interestRate, expectedMonthlyPension) {
  const monthlyInterestRate = interestRate / 12;
  const moneyToSave = expectedMonthlyPension / monthlyInterestRate - initialCapital;
  return calculateNumberOfMonthsOfSaving(savingsPerMonth, monthlyInterestRate, moneyToSave);
}

describe('calculateNumberOfMonthsOfSaving()', () => {
  it('calculates a number of months of saving to reach a given amount of money considering compound interest', () => {
    expect(calculateNumberOfMonthsOfSaving(1000, .01, 1000)).to.equal(1);
    expect(calculateNumberOfMonthsOfSaving(1000, .01, 2000)).to.equal(2);
    expect(calculateNumberOfMonthsOfSaving(1000, .01, 2010)).to.equal(2);
    expect(calculateNumberOfMonthsOfSaving(1000, .01, 2011)).to.equal(3);
    expect(calculateNumberOfMonthsOfSaving(1000, .05, 5525)).to.equal(5);
    expect(calculateNumberOfMonthsOfSaving(1000, .05, 5526)).to.equal(6);
  });
});

describe('calculateMonthsToReachFinancialFreedom()', () => {
  it('calculates a number of months to reach financial freedom and live off the interest', () => {
    expect(calculateMonthsToReachFinancialFreedom(0, 1000, .05, 100)).to.equal(23);
    expect(calculateMonthsToReachFinancialFreedom(10000, 5000, .05, 1000)).to.equal(43);
    expect(calculateMonthsToReachFinancialFreedom(10000, 8000, .05, 4000)).to.equal(97);
  });
});
