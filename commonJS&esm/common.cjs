exports.teacher = function teacher(name, sub) {
  return `hello I'm ${name} . I'm your ${sub} professor`;
};

exports.total = function sum(a, b, c) {
  let total = a + b + c;
  return `You know the sum of ${a},${b} and ${c} is ${total}`;
};
