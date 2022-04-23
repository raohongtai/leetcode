/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if (n === 0 || n === 1) {
    return n
  }
  let first = 0
  let second = 1

  for (let i = 2; i <= n; i++) {
    let temp = second
    second = second + first
    first = temp
  }
  return second
}
// @lc code=end
