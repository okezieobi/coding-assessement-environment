function hammingWeight(n = 0) {
  return n.toString(2).split('').filter((val) => val === '1').length;
}

// eslint-disable-next-line no-console
console.log(hammingWeight(1011));
