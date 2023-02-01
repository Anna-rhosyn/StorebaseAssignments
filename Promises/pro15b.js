function factorial(x) {
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

function final(x, y) {
  let total = 0;
  return new Promise((resolve) => {
    factorial(x)
      .then((xfact) => {
        total += xfact;
        return factorial(y);
      })
      .then((yfact) => {
        total += yfact;
        return power(x, y);
      })
      .then((xpower) => {
        total += xpower;
        return power(y, x);
      })
      .then((ypower) => {
        total += ypower;
        resolve(total);
      });
  }).then((final) => {
    console.log(`final result is ${final}`);
  });
}

final(2, 6);
