class Student {
  constructor(name, age, std) {
    this.name = name;
    this.age = age;
    this.std = std;
  }
  //static method
  static msg() {
    console.log("it is  a static method");
  }
}

let s1 = new Student("manu", 20, "10th std");
console.log(s1.name);
console.log(s1);

Student.msg(); //uses class to call..no need for obj
