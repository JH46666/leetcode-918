/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function(n) {
  let arr = n.toString().split('');
  let a = eval(arr.join('*'));
  console.log('a: ', a);
  let b = eval(arr.join('+'));
  return a-b;
};

n = 234

subtractProductAndSum(n)