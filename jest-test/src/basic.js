// 1. 寻找最大值
export function findMax (arr) {
  return Math.max(...arr)
}

// 2. 给定一个整数数组 nums 和一个目标值 target，在该数组中找出和为目标值的那 两个 整数，如果存在，返回true，否则返回false
// 2. 给定一个整数数组 nums 和一个目标值 target，在该数组中找出和为目标值的那 两个 整数，
// 并返回他们的数组下标（假设每种输入只会对应一个答案，数组中同一个元素不能使用两遍）。
export function twoSum (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
     for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] + nums[j] === target) {
             return [i, j]
         }
     } 
  }
  return []
};