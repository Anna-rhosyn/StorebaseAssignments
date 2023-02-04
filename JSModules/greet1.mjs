export default function greet() {
  this.hello = function () {
    return "hello";
  };
  this.bye = function () {
    return "goodbye";
  };
}

export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
