/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

function swap(nums: number[], left: number, right: number) {
  const temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}
function moveZeroes(nums: number[]): void {
  let left = 0
  let right = 0
  let n = nums.length
  while (right < n) {
    if (nums[right] !== 0) {
      swap(nums, left, right)
      left++
    }
    right++
  }
}
// @lc code=end
