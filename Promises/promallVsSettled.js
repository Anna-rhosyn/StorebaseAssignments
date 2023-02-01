//Example 1

function Exam1() {
  setTimeout(() => {
    console.log(
      `---------------------------Example 1------------------------------`
    );
    const p1 = Promise.resolve(1);
    // setTimeout(function, milliseconds, param1, param2, ...)
    const p2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 200, 2);
    });
    const p3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 3);
    });
    const final = [p1, p2, p3];

    Promise.all(final)
      .then((data) => console.log(data)) // data order is same as final order
      .catch((error) => console.log(error));

    /*
     * Note here we are not writing 'catch' because Promise.allSettled ALWAYS RESOLVES
     * with array containing information about resolved or rejected promises
     */
    Promise.allSettled(final).then((Ary) => console.log(Ary)); // Ary order is same as final order
  }, 1000);
}

function Exam2() {
  setTimeout(() => {
    console.log(
      `---------------------------Example 2------------------------------`
    );
    const s1 = Promise.resolve(1);
    const s2 = new Promise((resolve, reject) => {
      setTimeout(reject, 200, "200ms Err");
    });
    const s3 = new Promise((resolve, reject) => {
      setTimeout(reject, 100, "100ms Err"); //1st made error only comes in output
    });
    const Ex2 = [s1, s2, s3];

    Promise.all(Ex2)
      .then((resAry) => console.log(resAry))
      .catch((error) => console.log(error));

    Promise.allSettled(Ex2).then((res) => console.log(res));
  }, 2000);
}

Exam1();
Exam2();
