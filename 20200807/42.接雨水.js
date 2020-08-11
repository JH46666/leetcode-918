/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // 每列的面积  Min(left, right) - height[i]

  let n=height.length;
  if(n===0) return 0;
  let res=0;


  // 看了三遍 还是没能理解 后面看了这个解析 总算懂了一下 
  /*每根柱子上方的雨水的深度取决于什么呢？
  1.取决于该根柱子左右两边最高的两根柱子中较短的那根的长度
  2.在其大于该根柱子长度的情况下，雨水的深度为其减去该根柱子的长度的值
  3.若小于该根柱子的长度，则其雨水深度为 0
  */
  
  // 动态规划
  //  ![左右扫描](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghmxv91c1wj30n809qwen.jpg)
  let left_max=[] ,right_max=[];
  //记录左边数组的最大值
  left_max[0]=height[0];
  for(let i=1;i<n;i++){
    left_max[i]=Math.max(left_max[i-1],height[i]);
  }
  console.log('left_max', left_max)
  //记录右边数组的最大值
  right_max[n-1]=height[n-1];
  for(let i=n-2;i>=0;i--){
    right_max[i]=Math.max(right_max[i+1],height[i]);
  }
  console.log('right_max', right_max)
  //统计每一列的面积之和
  for(let i=0;i<n;i++){
    res+=Math.min(left_max[i],right_max[i])-height[i];
  }
  return res;

}

;

//计算出相邻格子之间的差值


const value = trap([0,1,0,2,1,0,1,3,2,1,2,1])
console.log('value', value)