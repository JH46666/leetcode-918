/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  var arrX = []
  var arrY = []
  var arr = []
  for(let u in nums){

  }

  for(let i ; i< arrX.length; i++){
    arr.push(arrX[i], arrY[i])    
  }

  return arr
};


var shuffle = function(nums, n) {
  var arr1 = nums.splice(n);
  var newArr = [];
  for(var i = 0 ; i < nums.length ; i ++ ){
      newArr.push(nums[i]);
      newArr.push(arr1[i]);
  }
  return newArr;
};



var nums = [2,5,1,3,4,7], n = 3

var value = shuffle(nums)
console.log('value: ', value);