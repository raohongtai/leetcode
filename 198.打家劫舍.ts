/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }

  let first = nums[0]
  let second = Math.max(nums[0], nums[1])
  let temp = 0
  //从第三项开始 比较i和i-2 和i-1的大小 1 3 5
  for (let i = 2; i < nums.length; i++) {
    temp = first
    first = second
    second = Math.max(second, temp + nums[i])
  }
  return second
}
// @lc code=end
console.log(rob([2, 1, 1]))
