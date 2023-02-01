let uniqueId = (function () {
  let count = 0;
  return function () {
    ++count;
    return `id_${count}`;
  };
})();
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
