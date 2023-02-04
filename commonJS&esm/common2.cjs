//method1
const myModule = require("./common.cjs");

const teacher = myModule.teacher;
const sum = myModule.total;

console.log(teacher("Riya", "Chemistry"));
console.log(sum(3, 6, 8));
