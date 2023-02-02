//merging 2 obj
//combining 2 obj

const student1 = {
  age: 16,
  fname: "manu",
  gender: "male",
};

const extra = {
  ...student1,
  location: "thrissur",
};
console.log(extra); //merging

const combine = Object.assign(student1, extra);
console.log(combine);
