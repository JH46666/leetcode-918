/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let num = {};
  for(let i = 0; i < A.length;i++ ){
    for(let j = 0; j < B.length;j++ ){
      while(A[i] === B[j]){
        num[i] = j
        i++;
        j++;
      }
    }
  }
};

//前面都没问题 不过我犯了一个错误, i++; j++ 求出来后没做什么操作

var findLength = function(A, B) {
  const m = A.length;
  const n = B.length;
  let res = 0;
  let num = {};
  for(let i = 0; i < n;i++ ){
    if (res > A.length - i) break; // 提前跳出
    for(let j = 0; j < m;j++ ){
      if (res > B.length - j) break; // 提前跳出
      if(A[i] === B[j]){
        let subLen = 1;
        while(A[i+ subLen] == B[j + subLen] && i + subLen < m && j + subLen < n){
          subLen++;
        }
        res = Math.max(subLen, res)
      }
    }
  }
  return res
};



//这题是动态规划的一种
var findLength = function(A, B) {
  let resMax = 0;
  let n1 = A.length,n2 = B.length;
  let dp = Array.from(new Array(n1 + 1),() => new Array(n2 + 1).fill(0));
  console.log('dp: ', dp);
  for(let i = 1;i <= n1;i++){
      for(let j = 1;j <= n2;j++){
          if(A[i - 1] === B[j - 1]){
              dp[i][j] = dp[i-1][j-1] + 1;
              resMax = Math.max(resMax,dp[i][j]);
          }
      }
  }
  return resMax;
};
var findLength = (A, B) => {
  const m = A.length;
  const n = B.length;
  let res = 0;
  // A固定，移动B
  for (let i = 0; i <= n; i++) {
    const len = Math.min(m, n - i); // 当前窗口的长度
    const maxLen = getMaxLen(A, B, 0, i, len); //窗口左端是A[0]，窗口左端是B[i]
    res = Math.max(res, maxLen);
  }
  // B固定，移动A
  for (let i = 0; i <= m; i++) {
    const len = Math.min(n, m - i); // 当前窗口的长度
    const maxLen = getMaxLen(A, B, i, 0, len);//窗口左端是A[i]，窗口左端是B[0]
    res = Math.max(res, maxLen);
  }
  return res;
};
// 窗口左端对应A的位置是aStart，窗口左端对应B的位置是bStart
function getMaxLen(A, B, aStart, bStart, windowLen) {
  let res = 0;
  let subLen = 0;
  for (let i = 0; i < windowLen; i++) { // 遍历的范围是窗口的长度
    if (
      A[aStart + i] !== undefined &&    // 没有越界
      B[bStart + i] !== undefined &&    // 没有越界
      A[aStart + i] == B[bStart + i]    // 当前项相同
    ) {
      subLen++;                         // subLen累加1
    } else {
      subLen = 0;                       // 这个窗口有“杂质”，废了
    }
    res = Math.max(res, subLen);        
  }
  return res;
}

var A =  [1,2,3,2,1]
var B =  [3,2,1,4,7]

var value = findLength(A,B)
console.log('value: ', value);