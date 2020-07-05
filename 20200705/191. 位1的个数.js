/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  console.log('n: ', n);
  var count = 0;
  for(let i of Object.keys(n)){
    console.log('i: ', n[i]);
    if(n[i] == 1){
      count ++;
    }
  }
  return count
};




//任何数字跟掩码1进行逻辑与运算，都可以获得这个数字都最低位
// 检查下一位时，将掩码左移一位
// 0000 0000 0000 0000 0000 0000 0000 0001 =>
// 0000 0000 0000 0000 0000 0000 0000 0010

var hammingWeight = function(n) {
  let count = 0;
  let mask = 1;
  for(let i = 0; i < 32; i++){
      if((n & mask) != 0){
          count++;
      }
      mask <<= 1;
  }
  return count;
};



// ">>>"为无符号左边填充0，">>"为有符号填充
/* 
按位与 AND	a & b	
在a,b的位表示中，每一个对应的位都为1则返回1， 否则返回0. */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while(n){
    console.log('n: ', n);
      // n % 2 == 1
      if(n & 1 == 1){
          count++;
      }
      console.log('n', n)
      n >>>= 1;
  }
  return count;
};

var hammingWeight = function(n) {
  let h = 1; //0000001
  let count = 0;
  for(let i=0;i<32;i++){
      //说明该i不等于1
      if((h & n) === 0){

      } else {
          count++;
      }
      h<<=1;//左移
  }
  return count;
};

var hammingWeight = function(n) {
  const numStr = n.toString(2);
  const numArr = numStr.split('');
  let count=0;
  numArr.forEach(val=>{
      parseInt(val) && (count++)
  })
  return count
};


var num1 = 00000000000000000000000000001011


var val = hammingWeight(num1)


console.log('val: ', val);
