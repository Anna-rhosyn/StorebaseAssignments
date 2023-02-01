const fs = require("fs");

function Read(start, end, call) {
  fs.readFile(start, (err, data) => {
    if (err) {
      console.log("error reading");
    } else {
      console.log("Read the file");
      call(end, data, Result);
    }
  });
}

function Write(end, src, call) {
  fs.writeFile(end, src, (err) => {
    if (err) {
      console.log("error copying");
    }
    console.log(`Succesfully copied the file.`);
    call(end);
  });
}

function Result(end) {
  fs.readFile(end, (err, data) => {
    if (err) {
      console.log("error printing Content");
    }
    console.log(`Content in the Destination file is : \n ${data}`);
  });
}

function copy(start, end, call) {
  call(start, end, Write);
}

copy("src.txt", "dest.txt", Read);
