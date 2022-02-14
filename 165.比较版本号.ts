/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
// function compareVersion(version1: string, version2: string): number {
//   const v1 = version1.split('.')
//   const v2 = version2.split('.')
//   let p1 = 0,
//     p2 = 0
//   const length1 = v1.length
//   const length2 = v2.length
//   while (p1 < length1 || p2 < length2) {
//     if (p1 >= length1) {
//       if (parseInt(v2[p2]) !== 0) {
//         return -1
//       }
//     }
//     if (p2 >= length2) {
//       if (parseInt(v1[p1]) !== 0) {
//         return 1
//       }
//     }
//     if (parseInt(v1[p1]) > parseInt(v2[p2])) {
//       return 1
//     }
//     if (parseInt(v1[p1]) < parseInt(v2[p2])) {
//       return -1
//     }
//     p1++
//     p2++
//   }
//   return 0
// }
function compareVersion(version1: string, version2: string): number {
  let p1 = 0,
    p2 = 0
  const length1 = version1.length
  const length2 = version2.length
  const zeroPosition = '0'.charCodeAt(0)
  while (p1 < length1 || p2 < length2) {
    let x = 0
    for (; p1 < length1 && version1[p1] !== '.'; p1++) {
      x = x * 10 + version1[p1].charCodeAt(0) - zeroPosition
    }
    p1++

    let y = 0
    for (; p2 < length2 && version2[p2] !== '.'; p2++) {
      y = y * 10 + version2[p2].charCodeAt(0) - zeroPosition
    }
    p2++

    if (x !== y) {
      return x > y ? 1 : -1
    }
  }
  return 0
}
// @lc code=end
console.log(compareVersion('1.0.1', '1.001'))
