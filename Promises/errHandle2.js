//Errors inside the Promises
let authorized = false;

function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      throw new Error("Unauthorized access to the user data");
    }

    resolve({
      id: id,
      username: "admin",
    });
  });
}

//method1
// getUserById(8).then((resolve) => console.log(resolve));

//method2
try {
  getUserById(10)
    .then((user) => console.log(user.username))
    .catch((error) => console.log(`Caught by .catch ${error}`)); //If you throw an error inside the promise, the catch() method will catch it, not the try/catch.
} catch (error) {
  console.log(`Caught by try/catch ${error}`);
}
