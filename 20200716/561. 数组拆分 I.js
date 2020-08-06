/**
 * @param {string} S
 * @return {number[]}
 */
var arrayPairSum = function(S) {

  var nums=S.sort(function(a,b){return a-b});//先排序
  
  console.log('nums: ', nums);
  var value = 0;
  for(let i = 0; i < nums.length; i++) {
    if(i % 2 ==0){
      value += Math.min(nums[i], nums[Number(i)+1])
    }
  }
  

  // 快速排序 - 双指针
  var quickSort = (arr)=> {
    　　if (arr.length <= 1) return arr;
        const pivotIndex = Math.floor(arr.length / 2);
        const [pivot] = arr.splice(pivotIndex, 1);
        let left = [], right = [];
        for( let i=0, len=arr.length; i<len; i++){
            if(arr[i] < pivot ){
                left.push(arr[i])
            }else {
                right.push(arr[i])
            }
        }
        return quickSort(left).concat([pivot], quickSort(right))
    }
  
  return value
};

//给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。

var  nums = [1,4,3,2];

var value = diStringMatch(nums)
console.log('value: ', value);