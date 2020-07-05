/**
 * @param {number} num
 * @return {number[]}
 */
// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
var countBits = function(num) {
  var value = num.toString(2)
  console.log('value: ', value);
};


var  num1 = 5


var val = countBits(num1)


console.log('val: ', val);
