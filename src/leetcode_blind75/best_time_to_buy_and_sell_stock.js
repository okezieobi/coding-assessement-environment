function bestTimeToBuyAndSellStock(prices = []) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  prices.forEach((value) => {
    if (value < minPrice) minPrice = value;
    else if (value - minPrice > maxProfit) maxProfit = value - minPrice;
  });
  return maxProfit;
}

// eslint-disable-next-line no-console
console.log(bestTimeToBuyAndSellStock([2, 1, 2, 1, 0, 1, 2]));
