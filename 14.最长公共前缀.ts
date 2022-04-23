/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function extractPublicStr(str1: string, str2: string): string {
  const maxLength = str1.length > str2.length ? str1.length : str2.length
  //   console.log(str1)
  for (let i = 0; i < maxLength; i++) {
    if (str1[i] !== str2[i]) {
      return str1.slice(0, i)
    }
  }
  return str1
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length <= 1) {
    return strs[0]
  }

  let pre = strs[0]
  for (let i = 1; i < strs.length; i++) {
    pre = extractPublicStr(pre, strs[i])
  }
  return pre
}
// @lc code=end
console.log(longestCommonPrefix(['dog', 'dracecar', 'car']))
