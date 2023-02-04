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

function final(x, y) {
  let x_F = factorial(x);
  let y_F = factorial(y);
  let xPower = power(x, y);
  let yPower = power(y, x);
  end = x_F + y_F + xPower + yPower;
  return end;
}
// console.log(final(2, 6));
module.exports = final;
