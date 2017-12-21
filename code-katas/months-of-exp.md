# Calculate number of months of experience

For an array of freelance jobs with the following structure:

```js
[
    { from: '01-2015', to: '02-2016' },
    { from: '05-2015', to: '05-2016' },
    { from: '12-2015', to: '01-2016' },
    { from: '08-2016', to: '07-2017' },
    { from: '06-2016', to: '07-2017' }
]
```

Calculate number of months of experience, excluding duplicates.

### Solution

```javascript
const toArrayOfMonthDates = (from, to) => {
    const [currentMonthAsString, currentYearAsString] = from.split('-');
    let currentYear = Number(currentYearAsString);
    let currentMonth = Number(currentMonthAsString);

    const [endMonthAsString, endYearAsString] = to.split('-');
    const endYear = Number(endYearAsString);
    const endMonth = Number(endMonthAsString);

    const result = [];

    while (currentYear <= endYear) {
        if (currentYear === endYear && currentMonth > endMonth) {
            break;
        }

        const formattedMonth = currentMonth.toString().length === 1 ? '0' + currentMonth : currentMonth;
        result.push(`${formattedMonth}-${currentYear}`);

        if (currentMonth === 12) {
            currentYear++;
            currentMonth = 1;
        } else {
            currentMonth++;
        }
    }

    return result;
};

export const calculateMonthsOfExp = experienceData => {
    const monthsArray = experienceData.reduce((previous, experience) =>
        [...previous, ...toArrayOfMonthDates(experience.from, experience.to)], []
    );

    return new Set(monthsArray).size;
};
```
