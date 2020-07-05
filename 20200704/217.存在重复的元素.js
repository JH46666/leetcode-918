/* ### [217\. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

Difficulty: **简单**


给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回 `true` 。如果数组中每个元素都不相同，则返回 `false` 。

**示例 1:**

```
输入: [1,2,3,1]
输出: true
```

**示例 2:**

```
输入: [1,2,3,4]
输出: false
```

**示例 3:**

```
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```


#### Solution

Language: **全部题目**

```全部题目
​
``` */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let arm = 1;

  for(let num of nums){
    console.log('num: ', num);
    arm ^= num;
  }
  return arm
};

var containsDuplicate = function(nums) {
  console.log('nums: ', nums);
  const obj = {}
  for(let num of nums){
    console.log('num: ', num);
    if(obj[num]) return true
    if(num == 0){
      obj[num] = 1
    } else {
      obj[num] = num
    }
  }
  return false
};

var val  = [1,2,3,1]

var val = [1,2,3,4];

var val = [1,1,1,3,3,4,3,2,4,2];
var val = [0,4,5,3,0,6]


var value = containsDuplicate(val)

console.log('vale', value)


var containsDuplicate = function(nums) {
  let set = new Set();
  for(let i = 0,len = nums.length;i<len;i++){
      if(set.has(nums[i])){
          return true;
      }
      set.add(nums[i]);
  }
  return false;
};


// set size
var containsDuplicate = function(nums) {
  return new Set(nums).size != nums.length;
};


// set排重数组对比

var containsDuplicate = function(nums) {
  return Array.from(new Set(nums)).length != nums.length;
};

