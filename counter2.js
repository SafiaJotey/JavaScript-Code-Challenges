var createCounter = function (init) {
  let value=init
  const increment = () => value =value+1;
  const reset = () => value=init;
  const decrement = () => value=value - 1;
  return {
    increment,
    reset,
    decrement,
  };
};
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.decrement());
