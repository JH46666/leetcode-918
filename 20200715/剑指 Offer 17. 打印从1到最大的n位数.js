/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {

  var num = 1;
  for(let i = 1; i <= n; i++){
    num  = num * 10;
  }
  var arr = [];
  for (let  i = 1 ; i < num; i++ ){
    arr.push(i)
  }
  return arr
};

var printNumbers = function(n) {

  //console.log(Math.pow(10, 2)); 还有这种方式
  const maxNumPlusOne = 10**n ;  //这能求出幂啊
  console.log('maxNumPlusOne: ', maxNumPlusOne);
  const numList = [];
  let index = 1;
  while (index < maxNumPlusOne) {
      numList.push(index);
      index++;
  }
  return numList;
};

var  n = 2;
var value =  printNumbers(n) //[1,2,3,4,5,6,7,8, 9]
console.log('value: ', value);