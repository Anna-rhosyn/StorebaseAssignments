<<<<<<< HEAD
function helloworld(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function world() {
  await helloworld(1000).then(function () {
    console.log("h");
  });
  await helloworld(1000).then(function () {
    console.log("e");
  });
  await helloworld(1000).then(function () {
    console.log("l");
  });
  await helloworld(1000).then(function () {
    console.log("l");
  });
  await helloworld(1000).then(function () {
    console.log("o");
  });
  await helloworld(1000).then(function () {
    console.log("w");
  });
  await helloworld(1000).then(function () {
    console.log("o");
  });
  await helloworld(1000).then(function () {
    console.log("r");
  });
  await helloworld(1000).then(function () {
    console.log("l");
  });
  await helloworld(1000).then(function () {
    console.log("d");
  });
}

world();
=======
async function Delay(a) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a), 1000);
  });
}

async function hello() {
  a = await Delay("h");
  console.log(a);
  a = await Delay("e");
  console.log(a);
  a = await Delay("l");
  console.log(a);
  a = await Delay("l");
  console.log(a);
  a = await Delay("o");
  console.log(a);
  a = await Delay("w");
  console.log(a);
  a = await Delay("o");
  console.log(a);
  a = await Delay("r");
  console.log(a);
  a = await Delay("l");
  console.log(a);
  a = await Delay("d");
  console.log(a);
}

hello();
>>>>>>> abf0e16 (sec commit)
