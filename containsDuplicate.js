// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true
var containsDuplicate = function (nums) {
  const uniqueNum = new Set();

  for (let num of nums) {
    if ( uniqueNum.has(num)) {
      return true;
    } else {
      console.log(num)
      uniqueNum.add(num);
     
    }
  }

  return false;
};
console.log(containsDuplicate([2, 14, 18, 22, 22]));
// var containsDuplicate = function (nums) {
//   let count = new Map();
//   for (let num of nums) {
//     count.set(num, (count.get(num) || 0) + 1);
//   }
//   for (let [key, value] of count) {
//     console.log(key, value);
//     if (value > 1) {
//       return true;
//     }

//   }
//   return false;
// };
// console.log(containsDuplicate([2, 14, 18, 22, 22]));
