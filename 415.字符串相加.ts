/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let p1 = num1.length - 1,
    p2 = num2.length - 1,
    add = 0
  const zeroCharCode = '0'.charCodeAt(0)
  const arr: number[] = []
  while (p1 >= 0 || p2 >= 0 || add !== 0) {
    const x = p1 >= 0 ? num1.charCodeAt(p1) - zeroCharCode : 0
    const y = p2 >= 0 ? num2.charCodeAt(p2) - zeroCharCode : 0
    const result = x + y + add
    arr.push(result % 10)
    add = Math.floor(result / 10)
    p1--
    p2--
  }
  return arr.reverse().join('')
}
// @lc code=end
console.log(addStrings('0', '0'))
