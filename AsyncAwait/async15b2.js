<<<<<<< HEAD
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function factorial(x, y) {
 await delay(2000).then(async function () {
    let a = x;
    if (a === 0 || a === 1) return 1;
    for (let i = a - 1; i >= 1; i--) {
      a *= i;
    }
    let x_F = a;
    console.log(`xFactorial is ${x_F}`);
    await delay(2000).then(async function () {
      let b = y;
      if (b === 0 || b === 1) return 1;
      for (let i = b - 1; i >= 1; i--) {
        b *= i;
      }
      let y_F = b;
      console.log(`yFactorial is ${y_F}`);
      await delay(2000).then(async function () {
        let x1 = x;let y1 = y;
        var res = x1;
        for (var i = 1; i < y1; i++) {
          res *= x1;
        }
        let xPy = res;
        console.log(`xPowery is ${xPy}`);
        await delay(2000).then(async function () {
          var res = y;
          for (var i = 1; i < x; i++) {
            res = res * y;
          }
          let yPx = res;
          console.log(`yPowerx is ${yPx}`);
          await delay(2000).then(async function () {
            let final = x_F + y_F + xPy + yPx;
            console.log(`Total is ${final}`);
          });
        });
      });
    });
  });
}
factorial(2, 6);
=======
async function factorial(x) {
  return new Promise((resolve) => {
    if (x === 0 || x === 1) return 1;
    for (let i = x - 1; i >= 1; i--) {
      x *= i;
    }
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

function power(x, y) {
  return new Promise((resolve) => {
    var res = x;
    for (var i = 1; i < y; i++) {
      res = res * x;
    }
    setTimeout(() => {
      resolve(res);
    }, 2000);
  });
}

async function final(x, y) {
  let total = 0;
  total += await factorial(x);
  total += await factorial(y);
  total += await power(x, y);
  total += await power(y, x);
  console.log(`final result is ${total}`);
}

final(2, 6);
>>>>>>> abf0e16 (sec commit)
