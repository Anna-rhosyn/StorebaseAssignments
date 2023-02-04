const mathOperation = require("./calc");

describe("Calculator tests", () => {
  test("adding 1 and 2 to get 3", () => {
    expect(mathOperation.sum(1, 2)).toBe(3);
  });
});

//failing test
// describe("Calculator tests", () => {
//   test("adding 1 and 2 to return 10", () => {
//     var res = mathOperation.sum(1, 2);
//     expect(res).toBe(10);
//   });
// });
