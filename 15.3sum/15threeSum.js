// 1.数组排序
// 2.循环获得a
// 3.设定边界 L和R，判断 a+b+c的结果做相应处理。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return [];
    const list = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      //nums is sorted,so it's impossible to have a sum = 0
      if (nums[i] > 0) break;
      // skip duplicated result without set
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
  
      // for each index i
      // we want to find the triplet [i, left, right] which sum to 0
      while (left < right) {
        // since left < right, and left > i, no need to compare i === left and i === right.
        if (nums[left] + nums[right] + nums[i] === 0) {
          list.push([nums[left], nums[right], nums[i]]);
          // skip duplicated result without set
          while (nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          // skip duplicated result without set
          while (nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
          continue;
        } 
        //triple > 0 due to right after sort, so --right
        else if (nums[left] + nums[right] + nums[i] > 0) {
          right--;
        } 
        //triple < 0 due to left after sort, so ++right
        else {
          left++;
        }
      }
    }
    return list;
  };
  