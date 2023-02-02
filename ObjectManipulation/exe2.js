//obj frozen or not
const user2 = {
  age: 26,
  mobile: 1993,
  name: "Talha",
};
console.log(Object.isFrozen(user2)); // false
Object.freeze(user2);
console.log(Object.isFrozen(user2)); // ture
