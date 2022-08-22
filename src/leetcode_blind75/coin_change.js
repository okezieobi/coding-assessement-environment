/* eslint-disable max-len */
/*
Coin Change
Medium
You are given an integer array coins representing coins of different denominations and
an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
*/
function coinChange(coinArray = [], amt = 0) {
  let fewestNoOfCoins = 0;
  function coinChangeRunner(coins = [], amount = 0) {
    if (amount === 0) return 0;
    let placeholderAmt = amount;
    const maxCoinAmt = Math.max(...coins);
    while (placeholderAmt >= maxCoinAmt) {
      placeholderAmt -= maxCoinAmt;
      fewestNoOfCoins += 1;
    }
    if (placeholderAmt > 0) {
      const remainder = coins.filter((val) => val < maxCoinAmt);
      if (remainder.length === 0) {
        fewestNoOfCoins = -1;
      } else {
        coinChangeRunner(remainder, placeholderAmt);
      }
    }
    return fewestNoOfCoins;
  }
  return coinChangeRunner(coinArray, amt);
}

// eslint-disable-next-line no-console
console.log(coinChange([186, 83, 408, 419], 6249));

// const coinChange = (coins, amount) => {
//   const dp = Array(amount + 1).fill(Infinity); // This arr tells us how many coins we need for each amount.
//   dp[0] = 0; // To make 0, we need 0 coins.
//   for (const coin of coins) { // Check each coin
//     for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
//       dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
//     }
//   }
//   return dp[amount] === Infinity ? -1 : dp[amount]; // If the last element is Infinity, then we cannot make the amount.
// };
