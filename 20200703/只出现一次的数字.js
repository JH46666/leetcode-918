/* ### [136\. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

Difficulty: **简单**


给定一个**非空**整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

**说明：**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例 1:**

```
输入: [2,2,1]
输出: 1
```

**示例 2:**

```
输入: [4,1,2,1,2]
输出: 4
```


#### Solution

Language: **全部题目**

```全部题目
​ */


/**
 * @param {number[]} nums
 * @return {number}
 */
/* var singleNumber = function(nums) {
  var hashMap = {};
  for(let i of nums){
    let k = 0;
    if(hashMap[i]){
      hashMap[i] +=1
    } else {
      hashMap[i] = ++k
    }
  }
  for(let i in hashMap){
    if(hashMap[i] < 2){
      return i
    }
  }
}; */

//
/* 时间复杂度O(n)，空间复杂度O(1)
只操作 nums 数组本身，不使用额外空间

n ^ n === 0 且 n ^ 0 === n
并且，异或遵循交换律
[4,1,2,1,2] 将数字全部异或运算一遍：
4 ^ 1 ^ 2 ^ 1 ^ 2 => 1 ^ 1 ^ 2 ^ 2 ^ 4 => 0 ^ 2 ^ 2 ^ 4 => 2 ^ 2 ^ 4 => 0 ^ 4 => 4
出现 2 次的数字在异或中都抵消了，最后得出只出现 1 次的数 */

// ![位运算](https://tva1.sinaimg.cn/large/007S8ZIlgy1ggdwfa4xqej31120gagmo.jpg)

var singleNumber = function(nums) {
  let ans = 0;
  for(const num of nums) {
      ans ^= num;
      console.log('ans: ', ans);
  }
  return ans;
};
var nums = [2,2,1]

var nums = [4,1,2,1,2]
var value = singleNumber(nums)
console.log('value: ', value);

