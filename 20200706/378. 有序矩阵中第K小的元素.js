/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  var arr =[];
  for(let i = 0; i< matrix.length;i++){
    for(let j of matrix[i]){
      arr.push(j)
    }
  }
  

  return  arr
};


var matrix = [
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
],k = 8;

var val = kthSmallest(matrix, k)
console.log('val: ', val);