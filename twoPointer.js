// 1. two sum with two pointers

function twoSum(arr, target) {
  //[2, 3, 4, 7, 11, 15]
let left=0;
let right=arr.length-1
while(left<right){
  let sum=arr[left]+arr[right]
  if(sum===target){
    return [left, right]
  }
 else if(sum<target){
    left++
  }
  else{
    right--

  }
}
return []
}

// Example usage:
const arr = [2, 3, 4, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target)); // Output: [0, 3] (2 + 7 = 9)




//reverse String
const reverseString=(str)=>{
  const strArr=str.split('')
  let left=0, right= str.length-1
  while(left<right){

[strArr[left],strArr[right]]=[strArr[right],strArr[left]]
console.log(strArr,str)
// [ 't', 'h', 'a', 'w' ] what
// [ 't', 'a', 'h', 'w' ] what
left++
right--
  }
return strArr.join('')
}
console.log(reverseString('what'))