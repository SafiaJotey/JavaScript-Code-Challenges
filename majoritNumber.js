// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// var majorityElement = function(nums) {
//   let count=new Map()
//     for(num of nums){

//             count.set(num, (count.get(num)||0)+1)
//     }
//     let majorityElement=0;
//     let majorityKey=null
//     for(let[key,value] of count){
//         if(value> majorityElement){
//         majorityElement=value
//         majorityKey=key
//         }
//     }
//     return majorityKey
// };
// var majorityElement = function(nums) {
//   const frequency = new Map();

//   // Count frequencies of each element
//   for (let num of nums) {
//     frequency.set(num, (frequency.get(num) || 0) + 1);

//     // If we find a majority element, return it early
//     if (frequency.get(num) > Math.floor(nums.length / 2)) {
//       return num;
//     }
//   }
// };
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
