function factorial(x) {
  if (x === 0 || x === 1) return 1;
  for (let i = x - 1; i >= 1; i--) {
    x *= i;
  }

  return x;
}

function power(x, y) {
  var res = x;
  for (var i = 1; i < y; i++) {
    res = res * x;
  }
  return res;
}

function final(x, y, call, call2) {
  let total = 0;
  total += call(x);
  total += call(y);
  total += call2(x, y);
  total += call2(y, x);
  console.log(`final result is : ${total}`);
}

final(2, 6, factorial, power);
