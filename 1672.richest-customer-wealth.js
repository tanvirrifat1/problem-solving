/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxwealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;

    // console.log(accounts[i].length);

    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    maxwealth = Math.max(maxwealth, wealth);
  }
  return maxwealth;
};
// @lc code=end

maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);

// maximumWealth([
//   [1, 5],
//   [7, 3],
//   [3, 5],
// ]);
