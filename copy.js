const fs = require("fs");
const process = require("process");
const file1 = process.argv[2];
const file2 = process.argv[3];

console.log("Total no.of arguments are:", process.argv.length);
copy(file1, file2);

function Read(start, end) {
  return new Promise((resolve) => {
    fs.readFile(start, (err, data) => {
      if (err) {
        console.log("error reading");
      }
      resolve(Write(end, data));
    });
  });
}

function Write(end, src) {
  return new Promise((resolve) => {
    fs.writeFile(end, src, (err) => {
      if (err) {
        console.log("error copying");
      }
      console.log(`Succesfully copied the file.`);
      resolve(end);
    });
  });
}

function copy(start, end) {
  Read(start, end).then((final) => {
    fs.readFile(final, (err, data) => {
      if (err) {
        console.log("error printing Content");
      }
      console.log(`Content in the Destination file is : \n ${data}`);
    });
  });
}

// copy("src.txt", "dest.txt");
