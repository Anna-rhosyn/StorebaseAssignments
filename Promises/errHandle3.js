//Calling reject() function
//Throwing an error has the same effect as calling the reject() as illustrated in the following example:

let authorized = false;

function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject("Unauthorized access to the user data");
    }

    resolve({
      id: id,
      username: "admin",
    });
  });
}

try {
  getUserById(10)
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Caught by .catch ${err}`));
} catch (error) {
  console.log(`Caught by try/catch ${error}`);
}

//-----------------------------------------------------------------------------------------------------------------------------------------

//Missing the catch() method
//The following example does not provide the catch() method to handle the error inside the promise. It will cause a runtime error and terminate the program:
function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject("Unauthorized access to the user data");
    }
    resolve({
      id: id,
      username: "admin",
    });
  });
}

try {
  getUserById(10).then((user) => console.log(user.username));
  // the following code will not execute
  console.log("next");
} catch (error) {
  console.log(`Caught by try/catch ${error}`);
}
