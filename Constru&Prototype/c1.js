//The constructor pattern defines the object properties.
//The prototype pattern defines the object methods.

//constructor function
function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

//getFullName() method in prototype
Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

let p1 = new Person("john", "carter");
console.log(`Full name: ${p1.getFullName()}`);
console.log(`First name: ${p1.fname}`);
