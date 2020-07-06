/* ### [155\. 最小栈](https://leetcode-cn.com/problems/min-stack/)

Difficulty: **简单**


设计一个支持 `push` ，`pop` ，`top` 操作，并能在常数时间内检索到最小元素的栈。

*   `push(x)` —— 将元素 x 推入栈中。
*   `pop()` —— 删除栈顶的元素。
*   `top()` —— 获取栈顶元素。
*   `getMin()` —— 检索栈中的最小元素。

**示例:**

```
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

**提示：**

*   `pop`、`top` 和 `getMin` 操作总是在 **非空栈** 上调用。


#### Solution

Language: **全部题目**

```全部题目
/**
 * initialize your data structure here.
 *
*/

var MinStack = function() {
  this.size = 0;
  this._storage = {};
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  var size = ++this.size;
  this._storage[size] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var size = this.size,
    deletedData;
    if(size){
      deletedData = this._storage[size]
    
      delete this._storage[size];
      
      this.size--;
      
    }
    return deletedData;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  var size = this.size
  return this._storage[size]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  var size = this.size
  var data = Object.values(this._storage)
  return Math.min.apply(null, data);
};



var MinStack = function() {
  this.x_stack = [];
  this.min_stack = [Infinity];
};

MinStack.prototype.push = function(x) {
  this.x_stack.push(x);
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
  console.log('this', this.min_stack)
};

MinStack.prototype.pop = function() {
  this.x_stack.pop();
  this.min_stack.pop();
};

MinStack.prototype.top = function() {
  return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length - 1];
};


var obj = new MinStack();
obj.push(-2);
obj.push(5);
obj.push(-3);
obj.pop();
var param_3 = obj.top();
console.log('param_3: ', param_3);
var param_4 = obj.getMin()
console.log('param_4: ', param_4);


