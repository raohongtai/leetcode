/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map()
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [i, map.get(diff) as number]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}
// @lc code=end
console.log(twoSum([3, 2, 4], 6))
