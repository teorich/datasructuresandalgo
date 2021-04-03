// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  const convertToString = n.toString();
  const reversestring = convertToString.split('').reverse().join('');
  const revNumber = sign * parseInt(reversestring, 10);
  return revNumber;
}

module.exports = reverseInt;
