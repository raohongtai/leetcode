/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s) {
  if (s.length <= 1) {
    return s
  }
  const dp = Array(s.length)
    .fill([])
    .map(() => Array(s.length).fill(false))
  // 单个字符一定是回文
  for (let i = 0; i < dp.length; i++) {
    // dp[0][0] 这种表示是单字符串
    dp[i][i] = true
  }

  let start = 0
  let max = 0

  for (let gap = 1; gap <= s.length; gap++) {
    for (let i = 0; i < s.length; i++) {
      const j = i + gap
      if (j >= s.length) {
        break
      }
      if (s[i] === s[j]) {
        // 距离小于等于3个字符 一定是回文 bab 第1和第3个 3-1=2<3
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          // 否则应该判断子串
          dp[i][j] = dp[i + 1][j - 1]
        }
      } else {
        dp[i][j] = false
      }
      // 更新max max初始为0 j-i 说明至少存在两个字符串
      if (dp[i][j] && j - i > max) {
        max = j - i
        start = i
      }
    }
  }
  return s.slice(start, start + max + 1)
}
// @lc code=end

console.log(longestPalindrome('ac'))
