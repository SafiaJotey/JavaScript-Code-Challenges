// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function (s) {
  let i = 0
 while (i < (s.length-1)/2) {
    for (let j = s.length-1; j >= (s.length-1)/2; j--) {
    
      [s[i],s[j]]=[s[j],s[i]]
      i++
    }
    break;
  }
  return s
};

// var reverseString = function(s) {
//   let i = 0; // Start pointer
//   let j = s.length - 1; // End pointer

//   while (i < j) {
//     console.log(i,j);
//       // Swap characters at i and j
//       [s[i], s[j]] = [s[j], s[i]];
      
//       // Move the pointers towards the center
//       i++;
//       j--;
//   }

//   return s; // Return the modified array
// };


console.log(reverseString(["H","a","n","n","a","h"]));