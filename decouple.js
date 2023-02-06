const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

const power = (x, y) => {
  var res = x;
  for (var i = 1; i < y; i++) {
    res = res * x;
  }
  return res;
};

const final = (x, y) => {
  let x_F = factorial(x);
  let y_F = factorial(y);
  let xPower = power(x, y);
  let yPower = power(y, x);
  return x_F + y_F + xPower + yPower;
};
console.log('Start');
console.log(final(2, 6));
