/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var res = [];

    //  构建一个可以取各个位数的方法:
    
    
    for(let i = left ; i < right; i++){
      console.log('tyof', typeof i, i.toString());
     // i % 10  各位
     // i / 10 % 10  十位
     // i / 100 % 10 百位
      const arr = i.toString().split('');
      console.log('arr: ', arr);
      arr.every(num=>i%parseInt(num)===0)&&res.push(i)
    }
    return res
};




/*

j / 10 >> 0 就是每次删掉最后一个数
例如：1234 -> 123 -> 12 -> 1 -> 0
j % 10 就是每次取最后一个
例如: 1234 -> 4
然后不符合条件的就break掉，这样速度快

*/


var selfDividingNumbers = function (left, right) {
  let ans = [];
  for (let i = left; i <= right; i++) {
      let flag = true;
      for (let j = i; j > 0; j = j / 10 >> 0) {
          let n = j % 10;
          if (!(i % n === 0 && n !== 0)) {
              flag = false;
              break;
          }
      }
      if(flag) ans.push(i);
  }
  return ans;
};


/**
 * 输入： 
上边界left = 1, 下边界right = 22
输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 * 
 * 
 * 
 */
var val = selfDividingNumbers(1, 22)
console.log('val', val)

