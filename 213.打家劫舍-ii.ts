/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  return Math.max(
    robRange(nums, 0, nums.length - 2),
    robRange(nums, 1, nums.length - 1)
  )
}

function robRange(nums: number[], start: number, end: number): number {
  let first = nums[start]
  let second = Math.max(nums[start], nums[start + 1])
  let temp = 0
  for (let i = start + 2; i <= end; i++) {
    temp = second
    second = Math.max(first + nums[i], second)
    first = temp
  }
  return second
}

// @lc code=end

console.log(rob([0, 0]))
