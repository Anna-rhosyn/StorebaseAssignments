<<<<<<< HEAD
const fs = require("fs");

const data = fs.readFileSync("file.txt");
console.log(`${data}`);
console.log("this is blocking code");

fs.readFile("./file.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(`${data}`);
});
console.log("this is non-blocking code");
=======
const fs = require("fs");

const data = fs.readFileSync("./txtfiles/file.txt");
console.log(`${data}`);
console.log("this is blocking code");

fs.readFile("./txtfiles/file.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(`${data}`);
});
console.log("this is non-blocking code");
>>>>>>> abf0e16 (sec commit)
