const disp = document.getElementById("input");

function display(val) {
  disp.value += val;
}

function solve() {
  let x = disp.value;
  let y = eval(x);
  disp.value = y;
}

function clr() {
  disp.value = "";
}
