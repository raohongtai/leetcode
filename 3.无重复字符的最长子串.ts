/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const occ = new Set<string>()
  const n = s.length
  let rk = -1,
    ans = 0
  for (let i = 0; i < n; i++) {
    // i理解为左指针 每次i移动了 就从set里面删掉上一个i 不参与比较了
    if (i !== 0) {
      occ.delete(s.charAt(i - 1))
    }

    //临时+1 这里的判断并没有真正的移动指针 取右指针当前位置的后一个元素 因为rk初始为0
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 把这个元素加入到set里面
      occ.add(s.charAt(rk + 1))
      // 真正的右移 rk+1了
      rk++
    }
    // 和上一个到最大值比较
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
}
// @lc code=end
// console.log(lengthOfLongestSubstring('ab'))
