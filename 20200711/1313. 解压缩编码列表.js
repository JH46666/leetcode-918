/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  if(nums.length == 0) return []
  var arr = [];
  for(let i in nums){
    if( i % 2 == 0){
      for(let j = 0; j < nums[i]; j++){
        arr.push(nums[Number(i)+1]) 
      };
    }
  }
  return arr
};
var nums = [1,2,3,4];
var value = decompressRLElist(nums)
console.log('value: ', value);