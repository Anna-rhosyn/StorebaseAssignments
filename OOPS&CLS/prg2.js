//Inheritance
// Base cls| parent cls - Bike
//child cls | derived cls -SportsBike

class Bike {
  constructor(model, price, color) {
    this.model = model;
    this.price = price;
    this.color = color;
  }

  bikeDetails() {
    console.log("Model : " + this.model);
    console.log("Price : " + this.price);
    console.log("Color : " + this.color);
  }
}

class SportsBike extends Bike {}

let b1 = new Bike("Hero splendid", 90000, "Red");
let b2 = new Bike("Honda", 60000, "black");

let sb1 = new SportsBike("ktm", 7000, "yellow");
sb1.bikeDetails();
