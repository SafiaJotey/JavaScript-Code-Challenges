var sortBy = function (arr, fn) {
 return arr.sort((a, b) => fn(a) - fn(b));
};
console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x))
