var fs = require("fs");

fs.readFile("fsExample.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(`fsModule: ${data}`);
});
