// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

var compose = function (functions) {
  return function (x) {
    let value = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      value = functions[i](value);
    }
    return value;
  };
};
const fn = compose([(x) => x + 1, (x) => 2 * x]);
// fn(4);
console.log(fn(4)); // 9
