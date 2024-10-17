// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
var intersection = function (nums1, nums2) {
  const compareArray=[]
  for(let num1 of nums1){
    for(let num2 of nums2){
      console.log(num1===num2)
    }

  }
//   const result = nums1.filter((num) => nums2.includes(num));
// console.log(result)
//   return result;
};
intersection([1, 2, 2, 1], [2, 2]);
intersection([4, 3, 9, 3, 1, 9, 7, 6, 9, 7], [5, 0, 8]);
intersection([8, 0, 3], [0, 0]);
intersection([2,1], [1, 2]);
intersection([4,9,5],[9,4,9,8,4])
intersection([1,2,2,1],[2])