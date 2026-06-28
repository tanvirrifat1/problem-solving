/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];

    if (map.has(remaining)) {
      return [map.get(remaining), i];
    }

    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// @lc code=end
