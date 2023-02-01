let reference = (function () {
  let secret = "I cannot be changed by simple assignment";
  return secret;
})();
console.log(reference);
