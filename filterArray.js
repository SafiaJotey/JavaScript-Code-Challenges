var filter = function(arr, fn) {
  return arr?.filter(fn)
};
let arr = [0,10,20,30,50]; let fn = function greaterThan10(n) {  }
const newArray = filter(arr, fn); // [20, 30]
console.log(newArray)