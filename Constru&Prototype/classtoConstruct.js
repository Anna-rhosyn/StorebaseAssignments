//OOPS & Cls prg4 to constructor and prototype fun

function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

Cat.prototype.catDetails = function () {
  console.log("Cat:" + this.name);
  console.log("Age:" + this.age);
  console.log("Color:" + this.color);

  console.log(`\n`);
};

let b1 = new Cat("kitty", "3", "white");
let b2 = new Cat("simba", "1", "black");

b1.catDetails();
b2.catDetails();

function Hobby(name, age, color, h1, h2) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.hobby1 = h1;
  this.hobby2 = h2;
}

Hobby.prototype.shortIntro = function () {
  console.log(
    ` ${this.name} is  ${this.age} years old and his hobbies are ${this.hobby1} and ${this.hobby2}\n  `
  );
};
let intro1 = new Hobby("Snow", 1, "", "eating", "sleeping");
let intro2 = new Hobby("Amy", 2, "", "eating", "Travel");
let intro3 = new Cat("Peelu", 13, "Mixed");
intro1.shortIntro();
intro2.shortIntro();
intro3.catDetails();
