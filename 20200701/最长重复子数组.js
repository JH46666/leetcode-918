/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let num = {};
  for(let i = 0; i < A.length;i++ ){
    for(let j = 0; j < B.length;j++ ){
      while(A[i] === B[j]){
        console.log(i, j, A[i], B[j])
        num[i] = j
        i++;
        j++;
      }
    }
  }
  let n = []
  for(let i of Object.keys(num)){
    console.log(i)
    // n.push()
  }
  n = Object.keys(num).sort((a,b)=> {return a-b <= 1})

  return n
};


function memoize(fn) {
  const cache = {};
  return function() {
    const key = JSON.stringify(arguments);
    var value = cache[key];
    if(!value) {
      value = [fn.apply(null, arguments)];  // 放在一个数组中，方便应对 undefined，null 等异常情况
      cache[key] = value; 
    }
    return value[0];
  }
}

//这题是动态规划的一种



var A =  [1,2,3,2,1]
var B =  [3,2,1,4,7]

var value = findLength(A,B)
console.log('value: ', value);