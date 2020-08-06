/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  let min = 0,
    max = S.length;

  let result = [];
  for (let i = 0; i < S.length + 1; i++) {
    if (S[i] === "I") {
      result.push(min);
      min += 1;
    } else {
      result.push(max);
      max -= 1;
    }
  }
  return result;
};




var diStringMatch = function(S) {let a = 0,b = S.length;return (S+S[S.length - 1]).split('').map((x) => x=='I'?a++:b--)}

