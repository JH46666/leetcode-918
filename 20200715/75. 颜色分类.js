/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* 
var sortColors = function(nums) {
  const arr = [];
  for(let i of nums){
    if(i == 0){
      arr.push(i)
    }
  }
  for(let i of nums){
    if(i == 1){
      arr.push(i)
    }
  }

  for(let i of nums){
    if(i == 2){
      arr.push(i)
    }
  }

  return arr
}; */

var sortColors = function(nums) {
  let arr = [0, 0, 0]
  for(let i = 0; i < nums.length; i++){
      if(nums[i] == 0){
          arr[0]++
      }
      if(nums[i] == 1){
          arr[1]++
      }
      if(nums[i] == 2){
          arr[2]++
      }
  }

  for(let i = 0; i < arr[0]; i++){
      nums[i] = 0
  }
  for(let i = 0; i < arr[1]; i++){
      nums[arr[0] + i] = 1
  }
  for(let i = 0; i< arr[2]; i++){
      nums[arr[0] + arr[1] + i] = 2
  }
  return nums
};


/* var sortColors = function(nums) {
  let countSort = (arr,maxVal) => {
      let bucketLen = maxVal + 1;
      let bucket = new Array(bucketLen).fill(0);
      let sortedI = 0;
      let arrLen = arr.length;
      for(let i = 0;i < arrLen;i++){
          bucket[arr[i]]++;
      }
      for(let j = 0;j < bucketLen;j++){
          while(bucket[j] > 0){
              arr[sortedI++] = j;
              bucket[j]--;
          }
      }
      return arr;
  }
  return countSort(nums,2);
}; */


// 两路替换
var sortColors = function(nums) {
    let left = 0;
    let n = nums.length;
    for(let i = 0;i < n;i++){
        if(nums[i] === 0){
          console.log(nums[left],nums[i], [nums[i],nums[left]]);
            [nums[left],nums[i]] = [nums[i],nums[left]];
            left++;
        }
    }
    let right = n - 1;
    for(let i = right;i >= left;i--){
        if(nums[i] === 2){
            console.log(nums[right],nums[i], [nums[i],nums[right]]);

            [nums[right],nums[i]] = [nums[i],nums[right]];
            right--;
        }
    }
};


/**
 * 0, 1, 2 红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 */
var n = [2,0,2,1,1,0];
var value =  sortColors(n) //[2,0,2,1,1,0]
console.log('value: ', value);  //[0,0,1,1,2,2]



// 计数排序