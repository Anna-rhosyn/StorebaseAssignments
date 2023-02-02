//obj sealing
//seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
//Values of present properties can still be changed as long as they are writable.
const user1 = {
  mobile: 1993,
  name: "Talha",
};
Object.seal(user1);
user1.name = "ABU";
console.log(user1.name); //"abu"
user1.age = 26;
console.log(user1.age); //undefined

//obj sealed or not
const user2 = {
  mobile: 1993,
  name: "Talha",
};
console.log(Object.isSealed(user2)); //false
Object.seal(user2);
console.log(Object.isSealed(user2)); // t
