/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let pre = 0
  let maxAns = nums[0]
  nums.forEach((item) => {
    // pre有可能是负数 负数+item<item 直接舍去之前pre
    pre = Math.max(pre + item, item)
    maxAns = Math.max(maxAns, pre)
  })

  return maxAns
}
// @lc code=end
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
