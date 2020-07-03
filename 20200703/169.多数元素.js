/* ### [169\. 多数元素](https://leetcode-cn.com/problems/majority-element/)

Difficulty: **简单**


给定一个大小为 _n_ 的数组，找到其中的多数元素。多数元素是指在数组中出现次数**大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**示例 1:**

```
输入: [3,2,3]
输出: 3
```

**示例 2:**

```
输入: [2,2,1,1,1,2,2]
输出: 2
```


#### Solution

Language: **全部题目**

```全部题目
​
```
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 1;
  let majority = nums[0];
  for(let i =0; i < nums.length; i++) {
    if(count == 0){
      majority = nums[i]
    }
    if(nums[i] != majority) {
      count --;
    } else {
      count ++;
    }
  }
  return majority
};

var majorityElement = function(nums) {
  nums.sort((a,b) => a - b)
  console.log('nums: ', nums);
  return nums[Math.floor(nums.length / 2)]
};


var s  = [2,2,1,1,1,2,2]
var s  = [3,3,4,1,2]

var value = majorityElement(s)

console.log('value: ', value);