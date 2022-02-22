/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
// function compareVersion(version1: string, version2: string): number {
//   const version1Arr = version1.split('.')
//   const version2Arr = version2.split('.')
//   let v1 = 0
//   let v2 = 0
//   const v1Length = version1Arr.length
//   const v2Length = version2Arr.length
//   while (v1 < v1Length || v2 < v2Length) {
//     if (v1 >= v1Length) {
//       if (parseInt(version2Arr[v2]) !== 0) {
//         return -1
//       }
//     } else if (v2 >= v2Length) {
//       if (parseInt(version1Arr[v1]) !== 0) {
//         return 1
//       }
//     } else if (parseInt(version1Arr[v1]) > parseInt(version2Arr[v2])) {
//       return 1
//     } else if (parseInt(version1Arr[v1]) < parseInt(version2Arr[v2])) {
//       return -1
//     }
//     v1++
//     v2++
//   }
//   return 0
// }

function compareVersion(version1: string, version2: string): number {
  let v1 = 0
  let v2 = 0
  const v1Length = version1.length
  const v2Length = version2.length
  const zeroPosition = '0'.charCodeAt(0)
  while (v1 < v1Length || v2 < v2Length) {
    let v1Sum = 0
    let v2Sum = 0
    for (; v1 < v1Length && version1[v1] !== '.'; v1++) {
      v1Sum = v1Sum * 10 + version1[v1].charCodeAt(0) - zeroPosition
    }
    v1++
    for (; v2 < v2Length && version2[v2] !== '.'; v2++) {
      v2Sum = v2Sum * 10 + version2[v2].charCodeAt(0) - zeroPosition
    }
    v2++
    if (v1Sum !== v2Sum) {
      return v1Sum > v2Sum ? 1 : -1
    }
  }
  return 0
}
// @lc code=end
console.log(compareVersion('1.0.1', '1.001'))
