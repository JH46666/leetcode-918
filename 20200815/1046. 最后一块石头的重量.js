/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // 先做对比  按照相关的规则 
  stones = stones.sort((a, b) => b-a);

  if(stones.length <= 1) {
    return stones
  } else {
    // 两块石头重量相同且个数大于2，全部粉碎
    if(stones[0] === stones[1] && stones.length > 2) {
      return lastStoneWeight(stones.splice(2, stones.length-2));
    } else {
      // 否则粉碎两块石头，并添加粉碎两块的差作为新的重量
      console.log('stones: ', stones);

      var a = stones[0], b = stones[1];
      stones.splice(0, 2, a- b);
      return lastStoneWeight(stones);
    }
  }

};


var num = lastStoneWeight([2,7,4,1,8,1])
console.log('num: ', num);