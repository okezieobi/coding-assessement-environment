function hammmingWeight(n) {
  return n.toString(2).split('').filter((val) => val === '1').length;
}

// eslint-disable-next-line no-console
console.log(hammmingWeight(1011));
