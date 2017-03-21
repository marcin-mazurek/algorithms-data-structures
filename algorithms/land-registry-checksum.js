// http://geo-oko.blogspot.com/2013/08/jak-obliczyc-cyfre-kontrolna-w-numerze.html
const weights = Array.from('137137137137');
const charValues = Array.from('0123456789XABCDEFGHIJKLMNOPRSTUWYZ');

function calculateChecksum(courtCode, id) {
  const chars = Array.from(courtCode + id);
  let sum = 0;

  chars.forEach((character, position) => {
    sum += weights[position] * charValues.indexOf(character);
  });

  return sum % 10;
};
