// Code
// Testcase
// Test Result
// Test Result
// 136. Single Number
// Easy
// Topics
// Companies
// Hint
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// var singleNumber = function(nums){
//  let i=0
//   while( nums.length){
//     let countArr = nums.filter((num) => num === nums[i]);
//     console.log(countArr);
//     if (countArr.length > 1) {
//       nums = nums.filter((num) => num != nums[i]);
//     } else {
//       return countArr[0];
//     }
//   }
// };
// console.log(singleNumber([2,2,1]));
var singleNumber = function(nums) {
  const frequency = new Map();

  // Step 1: Count how often each number appears
  for (let num of nums) {
    if (frequency.has(num)) {
      frequency.set(num, frequency.get(num) + 1);
    } else {
      frequency.set(num, 1);
    }
  }

  // Step 2: Find the number that appears only once
  for (let [key, value] of frequency) {
    if (value === 1) {
      return key;  // Return the number that appears only once
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4