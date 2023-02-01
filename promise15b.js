function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function factorial(x, y) {
  delay(2000).then(function () {
    let a = x;
    if (a === 0 || a === 1) return 1;
    for (let i = a - 1; i >= 1; i--) {
      a *= i;
    }
    let x_F = a;
    console.log(`xFactorial is ${x_F}`);
    return delay(2000).then(function () {
      let b = y;
      if (b === 0 || b === 1) return 1;
      for (let i = b - 1; i >= 1; i--) {
        b *= i;
      }
      let y_F = b;
      console.log(`yFactorial is ${y_F}`);
      return delay(2000).then(function () {
        let x1 = x;let y1 = y;
        var res = x1;
        for (var i = 1; i < y1; i++) {
          res *= x1;
        }
        let xPy = res;
        console.log(`xPowery is ${xPy}`);
        return delay(2000).then(function () {
          var res = y;
          for (var i = 1; i < x; i++) {
            res = res * y;
          }
          let yPx = res;
          console.log(`yPowerx is ${yPx}`);
          return delay(2000).then(function () {
            let final = x_F + y_F + xPy + yPx;
            console.log(`Total is ${final}`);
          });
        });
      });
    });
  });
}
factorial(2, 6);
