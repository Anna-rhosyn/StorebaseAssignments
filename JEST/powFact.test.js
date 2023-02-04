const final = require("./powFact");

test("sum of xf + yf + xpy + ypx of x=2 y=6 is 822", () => {
  expect(final(2, 6)).toBe(822);
});
