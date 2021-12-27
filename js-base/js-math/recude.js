const arr = [1, 2, 3];

let res = arr.reduce(function (per, next) {
  return per + next;
});

//console.log(res)

let res1 = arr.reduce((a, b) => a + b);

console.log(res1);

// reduce 数组去重

let arr1 = [1, 2, 3, 4, 4, 1];
// let newArr = arr.reduce((pre,cur)=>{
//   return !pre.includes(cur) ?  pre.concat(cur) :  pre
// },[])

// 普通数组去重
let newArr = arr.reduce(
  (cur, next) => (!cur.includes(next) ? [...cur, next] : cur),
  []
);

console.log(newArr);

let arr2 = [1, 1, 2, 3, 4];

const arrayRepeat = (args) => {
  const { arr, flag } = args;
  if (!flag) {
    return [...new Set(arr)];
  } else {
    let hash = {};
    res = arr.reduce(
      (cur, next) => (!hash[next.id] ? cur.push(next) : cur),
      []
    );
    return res;
  }
};
console.log(arrayRepeat({ arr: arr2 }));
