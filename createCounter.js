var createCounter = function (n) {
  let count = 0;
  return function () {
    let newCount = count === 0 ? n : n + count;
    count++;
    return newCount;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
