/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  console.log('S: ', S.length);
    // 第一步 先拿原语 A + B
    let arr = [];
    for(let i = 0; i < S.length; i++){
      let index = 0; 
      if(S[i] == ')' && S[i + 1] == '('){

        arr.push(index, i)
        index = i;
      }
    }
    console.log('arr', arr)
    // 第二步 拆分 消掉

};
/*

有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。

如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。


输入："(()())(())"
输出："()()()"


*/
var removeOuterParentheses = function(S) {
  let res = '';
  let opened = 0;
  for(let c of S) {
    if(c === '(' && opened ++ > 0) res += c;   //这种情况是 先 opened 比较在相加 
    console.log('res: ', res);
    if(c === ')' && opened -- > 1) res += c;
  }

  return res;
};


var removeOuterParentheses = function(S) {
  let res = "";
  let cnt = 0;
  let start = 0;
  for (let i = 0; i < S.length; i++) {
      if (S[i] === '(') {
          cnt++;
          console.log('cnt', cnt)
      } else {
          if (--cnt === 0) {
              // 找到原语，拼接结果
              res += S.substring(start + 1, i);
              console.log('res: ', res);
              // 设置下一个原语起点，继续查找
              start = i + 1;
          }
      }
  }
  return res;
};

var removeOuterParentheses = function(S) {
  var stack = []
  var count = 0
  for (var i = 0; i < S.length; i++) {
      if (S[i] === '(') {
          count ++
          // 根据数量判断
          if (count >= 2) {
              stack.push(S[i])
          }
      } else if (S[i] === ')') {
          count --
          // 根据数量判断
          if (count >= 1) {
              stack.push(S[i])
          }
          console.log('stack', stack)
      }
  }
  return stack.join('')
};


var S = "(()())(())"
var value = removeOuterParentheses(S)
console.log('value: ', value);