function getUserById(id) {
  if (typeof id !== "number" || id <= 0) {
    throw new Error("Invalid id argument");
  }

  return new Promise((resolve, reject) => {
    resolve({
      id: id,
      username: "admin",
    });
  });
}

//method1
getUserById(7).then((a) => console.log(a));

//method 2
//using then and catch
getUserById(8).then((user) => console.log(user));
//   .catch((err) => console.log(err));

//method3
//When you raise an exception outside the promise, you must catch it with try/catch:
try {
  getUserById(9)
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`Caught by .catch ${err}`));
} catch (error) {
  console.log(`Caught by try/catch ${error}`);
}
