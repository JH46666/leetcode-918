/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return Boolean(n % 4 ) 
};

var num = 2;
var value = canWinNim(num)
console.log('value: ', value);