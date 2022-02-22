function climbStairs(n = 0) {
  let numX = 0;
  let numY = 1;
  let sum;
  for (let i = 0; i < n; i += 1) {
    sum = numX + numY;
    numX = numY;
    numY = sum;
  }
  return numY;
}

// eslint-disable-next-line no-console
console.log(climbStairs(45));
