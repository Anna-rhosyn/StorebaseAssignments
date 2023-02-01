<<<<<<< HEAD
var fs = require("fs");

fs.readFile("fsExample.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(`fsModule: ${data}`);
});
=======
var fs = require("fs");

fs.readFile("./txtfiles/fsExample.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(`fsModule: ${data}`);
});
>>>>>>> abf0e16 (sec commit)
