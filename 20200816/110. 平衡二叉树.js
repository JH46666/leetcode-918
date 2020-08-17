/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

  // left  right 的深度 一直加  然后比较
  if(!root) return true

  var leftDeep = 0;
  var rightDeep = 0;

  var getDepth = function (root) {
    if(!root) return -1

    return 1 + Math.max(getDepth(node.left), getDepth(node.right))
  }

  leftDeep = getDepth(root.left)
  rightDeep = getDepth(root.right)


  return Math.abs( leftDeep - rightDeep ) <= 1 && isBalanced(root.left) && isBalanced(root.right)

};


// 这是 ts 版本


/**
 * 
 * 
 * 
 * 
 * function isBalanced(root: TreeNode | null): boolean {
  let result = true;
  try{
    getDepth(root);
  } catch(e){
    result = false;
  }

  return result;
};

function getDepth(node: TreeNode | null) : number {
  if (node === null){
    return 0
  }
  const depthL = getDepth(node.left);
  const depthR = getDepth(node.right);

  if (Math.abs(depthL - depthR) > 1){
    throw new Error("not AVL");
  }

  return Math.max(depthL, depthR) + 1;
}

作者：shikelong
链接：https://leetcode-cn.com/problems/balanced-binary-tree/solution/ts-liang-chong-zi-di-er-shang-de-fang-shi-by-shike/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

