/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let u = []
  for(let i of num1){
    u.push(i)
  }
  return u
};


/* 提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */



var  addStrings = (num1, num2)=> {
  while (num1.length > num2.length) num2 = '0' + num2;
  while (num1.length < num2.length) num1 = '0' + num1; // 先补0对齐

  let res = "";
  let carry = 0;
  for(let i = num1.length -1; i >= 0; i--){
    const sum  = +num1[i] +  +num2[i] + carry
    res = sum % 10 + res;
    carry = sum > 9 ? 1 : 0;
  }

  return carry == 1 ? '1' + res : res
}



var str1 = '23';
var str2 = '34';





var value = addStrings(str1, str2)
console.log('value: ', value);





















