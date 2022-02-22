function findLongestBinaryGap(N) {
  if (typeof N !== 'number' || /^\+?\d+$/.test(`${N}`) === false) throw new TypeError('Argument must be positive integer');
  const binary = (N).toString(2);
  const arrayResult = [];
  let count = 0;
  const array = binary.split('');
  array.forEach((value, index) => {
    if (index > 0) {
      if (value === '0') {
        count += 1;
      } else if (value === '1') {
        if (count > 0) arrayResult.push(count);
        count = 0;
      }
    }
  });
  return arrayResult.length > 0 ? Math.max(...arrayResult) : 0;
}

console.log(findLongestBinaryGap(809));
