function Park(ride, swing, waterplay) {
  this.rides = ride;
  this.swing = swing;
  this.waterplay = waterplay;
}

Park.prototype.Details = function () {
  return `This Park has ${this.rides} for ridelovers, ${this.swing} for swing lovers and ${this.waterplay} to play in water`;
};

Park.prototype.Greet = function () {
  console.log("I enjoyed it here..");
};

let p1 = new Park("Rollercoaster", "Tire swings", "River caves");
let p2 = new Park("Pendulum ride", "Hoopla swing", "aqualoop");

console.log(p1.Details());
p1.Greet();
