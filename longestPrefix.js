// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
var longestCommonPrefix = function(strs) {
    let prefix=[]
  for(let i=0 ; i<strs.length;i++){
  for(let j=0 ; j<strs[i].length;j++){
   
  
if(strs[i+1]&&strs[i+1][j]&&strs[i][j]!==strs[i+1][j]){
prefix.push(strs[i].substring(0,j+1))
  }

  }
  
}

console.log(prefix)
};
longestCommonPrefix(["flower","flow","flight"])