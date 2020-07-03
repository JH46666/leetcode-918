/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  if(n < 1) return 0


  const num = n + sumNums(n - 1)

  return num
};

var s = 3;

var j = 9;
const  value = sumNums(j)

console.log('value', value)