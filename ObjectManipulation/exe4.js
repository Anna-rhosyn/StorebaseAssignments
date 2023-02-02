//defining obj using constructor function
//accesing name only
//retriveing values from obj
//retrieving keys from obj
//retrieving both key & values

function User(name, age, mobile) {
  this.name = name;
  this.age = age;
  this.mobile = mobile;
}

let user1 = new User("anu", 18, 991765243);
console.log(user1);
//name only
console.log(`Name : ${user1.name}`);
//values only
let userValue = Object.values(user1);
console.log(userValue);
//keys only
let userKeys = Object.keys(user1);
console.log(userKeys);
//retrieving both key & values
let userEntry = Object.entries(user1);
console.log(userEntry);
