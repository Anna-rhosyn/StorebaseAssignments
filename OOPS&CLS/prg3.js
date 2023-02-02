class Person {
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi I'm ${this.name}`);
  }
}

const anna = new Person("Anna");
anna.introduceSelf();

class Professor extends Person {
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }
  introduceSelf() {
    console.log(
      `My name is ${this.name}, I will be your ${this.teaches} professor`
    );
  }
}

const Harry = new Professor("Harry", "Physics");
Harry.introduceSelf();
