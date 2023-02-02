const disp1 = document.getElementById("msg1");
const disp2 = document.getElementById("msg2");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

function show2() {
  let val1 = document.getElementById("p1").value;
  disp2.innerHTML += `<p>${val1}</p>`;
}
function show1() {
  let val2 = document.getElementById("p2").value;
  disp1.innerHTML += `<p>${val2}</p>`;
}

p1.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    show2();
  }
});

p2.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    show1();
  }
});
