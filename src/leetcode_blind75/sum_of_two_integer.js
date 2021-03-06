/* eslint-disable no-bitwise */
function sumOfTwoInteger(a, b) {
  let placeholderA = a;
  let placeholderB = b;
  while (placeholderB !== 0) {
    const carryBits = placeholderA & placeholderB;
    placeholderA ^= placeholderB;
    placeholderB = carryBits << 1;
  }
  return placeholderA;
}

// eslint-disable-next-line no-console
console.log(sumOfTwoInteger(2, 3));
