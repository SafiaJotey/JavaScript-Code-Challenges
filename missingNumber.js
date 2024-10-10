var missingNumber = function (nums) {
  for (let i = 0; i <= Math.max(...nums); i++) {
  
    if (nums.find((item) => item === i) === undefined) {
      return i;
    }
  }
  return Math.max(...nums)+1
};
console.log(missingNumber([0, 1]));
