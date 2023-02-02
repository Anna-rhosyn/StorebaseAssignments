function Person() {
  this.name = "Sam";
}

let p1 = new Person();
let p2 = new Person();

console.log(`Person 1 name: ${p1.name}`);
p2.age = 20;
console.log(`${p2.name} is ${p2.age} years old`); //age only available in p2.
