// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
var generate = function (numRows) {
  let arr = [],
    subArr = [];
  for (let i = 1; i <= numRows; i++) {
    if (i === 2) {
        console.log(arr);
        break;
      }
    for (let j = 1; j <= i; j++) {
        console.log(i,j)
     if(i===1){  subArr.push(j);}
    
    }
  }
  arr.push(subArr);
  subArr = [];
  return arr;
};
console.log(generate(5));
