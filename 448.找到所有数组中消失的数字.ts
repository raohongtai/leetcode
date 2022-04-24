/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const length = nums.length
  const res = []
  for (let i = 0; i < length; i++) {
    // num[i] 是数字 转下标要-1 %length 防止这个地方已经加过length
    const flagIndex = (nums[i] - 1) % length
    nums[flagIndex] = nums[flagIndex] + length
  }

  console.log(nums)
  for (let i = 0; i < length; i++) {
    if (nums[i] <= length) {
      res.push(i + 1)
    }
  }

  return res
}
// @lc code=end
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
