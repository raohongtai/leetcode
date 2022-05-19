/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 当天不持有股票利润
  let dp0 = 0
  // 当天持有股票💰
  let dp1 = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    // 比较前一天持有股票今天卖出或者前一天不持有股票今天不操作的利润
    const newDp0 = Math.max(dp0, dp1 + prices[i])
    // 比较前一天持有股票今天不操作或者前一天不持有股票但今天买入的利润
    const newDp1 = Math.max(dp1, dp0 - prices[i])

    dp0 = newDp0
    dp1 = newDp1
    console.log(dp0, dp1)
  }
  return dp0
}
// @lc code=end
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
