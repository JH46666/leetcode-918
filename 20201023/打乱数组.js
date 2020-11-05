/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const nums = this.nums.slice(0);
  let n = nums.length;

  // 产生的结果有 n! 种可能
  for (let i = 0; i < n; i++) {
      // 从 i 到 n-1 随机选一个
      const rand = randOne(i, n - 1); 
      console.log('rand: ', rand);
      // 交换nums数组i和rand下标的两个元素
      [ nums[i], nums[rand] ] = [ nums[rand], nums[i] ];
  }

  return nums;
};

// 获取闭区间 [n, m] 内的一个随机整数
function randOne(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
};


/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

 // 以数字集合 1, 2 和 3 初始化数组。
var num = [1 , 2, 3];
var solution = new Solution(num);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
console.log(solution.shuffle());

// 重设数组到它的初始状态[1,2,3]。
console.log(solution.reset());

// 随机返回数组[1,2,3]打乱后的结果。
console.log(solution.shuffle());


