/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const left = '0'.charCodeAt(0);

  if (num1 == "0" || num2 == "0") return "0";

  //实际运算
  // num1Arr 取较短的数字， num2Arr 取较长的数字，短数乘长数速度较快。
/*   const num1Arr = (num1.length > num2.length ? num2 : num1).split('').map(item => item.charCodeAt(0) - left);
  const num2Arr = (num1.length > num2.length ? num1 : num2).split('').map(item => item.charCodeAt(0) - left);
  console.log('num2Arr: ', num1Arr, num2Arr);

  carry = temp % 10; */

  let res = ''
  let carry = 0;
  let i  = num1.length -1;
  let j  = num2.length -1;
  while(i >= 0 || j >= 0) {
    console.log('i', i, j)
    let temp = Number(num1[i]) + Number(num2[j]) + carry
    if(i < 0) {
      console.log('i: ', i);
      temp = Number(num2[j]) + carry
      i = 0
    }
    if(j < 0) {
      console.log('j: ', j);
        temp = Number(num1[i]) + carry
        j = 0
    }


    carry = temp >= 10 ? 1 : 0
    res = temp % 10 + res
    i --
    j --

  }
 
  return carry > 0 ? `${carry}${res}` : `${res}`

};

// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

var num1 = "2", num2 = "3";

var  num1 = "9", num2 = "99";


var val = addStrings(num1, num2)


console.log('val: ', val);