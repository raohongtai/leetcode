/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const dp: number[][] = []
  dp.push([1])
  for (let i = 1; i < numRows; i++) {
    const curRow: number[] = []
    const prevRow = dp[i - 1]
    const prevRowLength = prevRow.length
    curRow.push(1)
    for (let j = 1; j < prevRowLength; j++) {
      curRow.push(prevRow[j] + prevRow[j - 1])
    }
    curRow.push(1)
    dp.push(curRow)
  }
  return dp
}
// @lc code=end
console.log(generate(5))
