/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  // 不能的条件是 互相依赖
  let res = 0;
  if( prerequisites.length == 1) return true
  for(let i = 0; i < prerequisites.length; i++ ){
    console.log('prerequisites[i][j-1: ', prerequisites[i][1]);
    res ^= prerequisites[i][1];
    console.log('res: ', res);
  }
  return res == 1 ? false : true
};
var  numCourses = 6;
/* var prerequisites = [[1, 0]];
var prerequisites = [[0, 1]]; */
// var prerequisites = [[1,0],[0,1]];
// var prerequisites = [[1,0],[2,1]];
var prerequisites = [[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]];

var canFinish = function(numCourses, prerequisites) {
  // 运用了拓扑排序

  // 有向无环图



  //bfs 先广度搜索一遍

  let inDegree = new Array(numCourses).fill(0);
  console.log('inBigArr: ', inDegree); // [ 0, 0, 0, 0, 0, 0 ]

  let map = {};

  for(let i = 0; i < prerequisites.length; i++){
    inDegree[prerequisites[i][0]]++;  //这是筛选出入度的数 对应需要的次数[ 0, 0, 0, 2, 2, 2 ]
    if(map[prerequisites[i][1]]){
      map[prerequisites[i][1]].push(prerequisites[i][0]); // 添加依赖它的后续课
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }

  console.log('map', map)  // { '0': [ 3 ], '1': [ 3, 4 ], '2': [ 4 ], '3': [ 5 ], '4': [ 5 ] }

  let queue = [];

  for(let i  = 0; i < inDegree.length; i++ ){  // 所有入度为0的课入列
    if(inDegree[i] == 0) queue.push(i)
  }

  console.log('queue', queue)  //求出入度为 0 的数字

  let count = 0;

  while(queue.length) {
    const selected = queue.shift(); // 当前选的课，出列
    console.log('selected: ', selected);
    count++;
    const toEnQueue = map[selected];          // 获取这门课对应的后续课
    console.log('toEnQueue: ', toEnQueue);

    if(toEnQueue && toEnQueue.length){
      for(let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;             // 依赖它的后续课的入度-1
        if (inDegree[toEnQueue[i]] == 0) {    // 如果因此减为0，入列
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return count == numCourses; // 选了的课等于总课数，true，否则false
}
/* 
总结：拓扑排序问题
根据依赖关系，构建邻接表、入度数组。
选取入度为 0 的数据，根据邻接表，减小依赖它的数据的入度。
找出入度变为 0 的数据，重复第 2 步。
直至所有数据的入度为 0，得到排序，如果还有数据的入度不为 0，说明图中存在环 */


var value = canFinish( numCourses, prerequisites );
console.log('value: ', value);