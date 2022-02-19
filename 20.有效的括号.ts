/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const map: {
    [index: string]: string
  } = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  const stack = []
  const stringLength = s.length
  for (const i of s) {
    // 如果是左边的括号
    if (map.hasOwnProperty(i)) {
      // 出栈并判断是否等于右边的括号
      if (stack[stack.length - 1] !== map[i]) {
        return false
      }
      stack.pop()
    } else {
      //如果是右边的括号 入栈
      stack.push(i)
    }
  }
  return stack.length === 0
}
// @lc code=end
