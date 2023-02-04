export default function power(x, y) {
  var res = x;
  for (var i = 1; i < y; i++) {
    res = res * x;
  }
  return res;
}
