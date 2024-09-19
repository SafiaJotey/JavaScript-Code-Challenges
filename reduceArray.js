var reduce = function (nums, fn, init) {
  return nums?.reduce(fn, init);
};
let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
  return accum + curr;
};
let init = 5;

console.log(reduce(nums,fn,init))