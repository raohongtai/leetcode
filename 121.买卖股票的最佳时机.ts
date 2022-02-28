/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = prices[prices.length - 1]
  let result = 0

  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > max) {
      max = prices[i]
    } else {
      result = Math.max(max - prices[i], result)
    }
  }
  return result
}
// @lc code=end
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
