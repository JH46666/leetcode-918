/**
 * @param {number} n
 * @return {boolean}
 */
/* var isPowerOfTwo = function(n) {
  if(n == 0) return false 
  if(n != 1){
    while(n != 1){
      if(n % 2 == 0){
        n = n/ 2
      } else {
        return false
      }
    }
    return true;
  } else  {
    return true;
  }
}; */


// 　如何判断一个数是否是2的n次方幂，其简单判断方法就是这个数num直接除2，若余数为0，则num/2再除2，再判断是不是余数是不是0，是的话继续按上一步来，直到最后为num=1。
var isPowerOfTwo = function(n) {
  if(n<=0) return false;
  if((n&n-1)==0) return true;
  return false;

}

//  一个知识点是了解 十进制转二进制
// 通过二进制的方法可以判断一个数num是不是2的n次方幂，规律可知，只要是2的次方幂，必然是最高位为1，其余为0，当num-1时，则最高位是0，其余是1.
// A/2=a(2^0)/2+b(2^1)/2+c(2^2)/2+d(2^3)/2+e(2^4)/2

//  8/ 2 = 4  0
//  4/ 2 = 2  0
//  2/ 2 = 1  0
//  1/ 2 = 0  1
　/* 　 2     --->   10                   3    --->   11            

 　　 4     --->   100                 6    --->   110           

  　　8     --->   1000               7    --->   111 */

//  按位与运算  1&1=1  0&1=0 0&0=0 1&0=0
//  
var j = 9;
var j = 0;
var j = 1;


const  value = isPowerOfTwo(j)

console.log('value', value)
