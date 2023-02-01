const counter = (() => {
  let counterValue = 0;
  return {
    increment() {
      ++counterValue;
    },
    get value() {
      return counterValue;
    },
  };
})();
counter.increment();
console.log(counter.value); //1
console.log(counter.value); //1
counter.increment();
console.log(counter.value); //2
counter.increment();
counter.increment();
console.log(counter.value); //4
