// Given two integer arrays nums1 and nums2, return an array of their
// intersection
// . Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
// var intersection = function (nums1, nums2) {
//   let j = 0;
//   let intr = [];

//   while (j < nums2.length) {
//     let searchNum = nums1.find((num) => num === nums2[j]);

//     if (searchNum|searchNum===0) {
//       intr.push(searchNum);
//       nums1 = nums1.filter((num) => num !== searchNum);
//     }
//     j++;
//   }
 
//   return intr;
// };

var intersection = function (nums1, nums2) {

  //  const set1 = new Set(nums1);
  const result=[...new Set(nums2.filter(num=>new Set(nums1).has(num)))]

   return result;

};
// console.log(intersection([4, 3, 9, 3, 1, 9, 7, 6, 9, 7], [5, 0, 8]));
// console.log(intersection([8, 0, 3], [0, 0]));
intersection([4, 3, 9, 3, 1, 9, 7, 6, 9, 7], [5, 0, 8]);
intersection([8, 0, 3], [0, 0]);
intersection([2,1], [1, 2]);
intersection([4,9,5],[9,4,9,8,4])
