//accessing obj with []  | object.key

const user = {
  name: "Talha",
  age: 26,
  marks: {
    math: 20,
    eng: 30,
  },
};
console.log(user["marks"]["math"]); //20
console.log(user.marks.eng); //30
