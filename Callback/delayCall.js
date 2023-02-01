function delay(data, call) {
  call(data);
}
function Print(data) {
  setTimeout(() => console.log(data), 3000);
}

delay("this is the delay content", Print);
