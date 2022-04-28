/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let max = nums[0]
  for (let i = 1; i < nums.length - 1; i++) {
    if (max >= i) {
      max = Math.max(nums[i] + i, max)
    } else {
      return false
    }
  }
  return nums.length - 1 <= max
}
// @lc code=end

console.log(canJump([1, 2, 3]))
