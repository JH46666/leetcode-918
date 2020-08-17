/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    // 这是其实是 先找数组项相等 在找 i<j arr push 进去

  for(let i = 0 ; i < nums.length;i++ ){

  }





  return 

};



var numIdenticalPairs = function(nums) {
  if (!nums.length) return 0
  let count = 0
  let j = 0
  for (let i = 0; i < nums.length; j++) {
      if (j === nums.length) i++, j = 0
      i < j && nums[j] === nums[i] && count++
  }
  return count
};

var  nums = [1,2,3,1,1,3];

console.log('numIdenticalPairs',numIdenticalPairs(nums))