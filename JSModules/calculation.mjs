import factorial from "./fact.mjs";
import power from "./power.mjs";

function final(x, y) {
  let x_F = factorial(x);
  let y_F = factorial(y);
  let xPower = power(x, y);
  let yPower = power(y, x);
  return x_F + y_F + xPower + yPower;
}
console.log(`Final result is : ${final(2, 6)}`);
