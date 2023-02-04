import greet, { User } from "./greet1.mjs";

var say = new greet();
console.log(say.hello());
console.log(say.bye());

const user = new User("anna", 21);
console.log(user);
