/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */
// f(x) = f(x-1)+f(x-2)
// 等于求[1,2,3,5,8,13..]等比数列的第n项
// [p, q] = [q, r] 表示q指向上一个项 p指向再上一个项 r就是当前项
// @lc code=start
// function climbStairs(n: number): number {
//   let [p, q] = [0, 0]
//   let r = 1
//   for (let i = 1; i <= n; i++) {
//     // r是前一项 所以q赋值后指向前一项 在上一轮循环 q指向r 所以p赋值后是前前一项
//     ;[p, q] = [q, r]
//     // r修改为当前项
//     r = p + q
//   }
//   return r
// }
function climbStairs(n: number): number {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let first = 1
  let second = 2
  let temp = 0
  for (let i = 3; i <= n; i++) {
    temp = first
    first = second
    second = temp + first
  }
  return second
}
// @lc code=end
