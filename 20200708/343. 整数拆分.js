/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let MaxVal = null;
  if(n <= 0) return 0
  if(0 < n < 2) return 1;
  MaxVal = Math.max(MaxVal, generateArr(n));
  return MaxVal
};
generateArr = function(n){;
  const arr = []
  for(let i = 1; i < n -1; i++){
    generateArr(n-i)
  }
}

var Math = function(arguments){
  const arr = Array.prototype.slice.apply(arguments)
  var value = 1;
  for(var  i of arr){
    value = value * i
  }
  return value
}


var integerBreak = (n) => {
  const dp = new Array(n + 1);
  dp[1] = 1;  
  dp[2] = 1; 
  for (let i = 3; i <= n; i++) {
    dp[i] = 0;
    // 对于数字 i，它可以分为两份：j 和 i-j，j 的范围是 1 到 i-j
    for (let j = 1; j <= i - j; j++) {
      // 对于 i-j 这部分可以拆或不拆，不拆就是 i-j，拆就是 dp[i-j]
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
};


const n  = 10; 
const value = integerBreak(n);
console.log('value: ', value);




























