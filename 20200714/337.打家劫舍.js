/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
  输入: [3,2,3,null,3,null,1]

  3
  / \
  2   3
    \   \ 
    3   1

  输出: 7 
  解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.




输入: [3,4,5,1,3,null,1]

   3
  / \
  4   5
/ \   \ 
1   3   1

输出: 9
解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.


 */


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var rob = function (nums) {


  var genTree = function (num){
    var root = new TreeNode(num[0]);
    root.left = num  % 2  == 0|| genTree(num);
    root.right = num  % 2  != 0 || genTree(num);


    return root
  }
  
};


const rob = (root) => { // 打劫root为根节点的子树的最大收益
  if (root == null) return 0;
  let robIncludeRoot = root.val; 
  if (root.left) {
    robIncludeRoot += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    robIncludeRoot += rob(root.right.left) + rob(root.right.right);
  }
  const robExcludeRoot = rob(root.left) + rob(root.right); 
  return Math.max(robIncludeRoot, robExcludeRoot); // 二者取其大
};


var value = rob([3, 2, 3, null, 3, null, 1])
console.log('value: ', value);