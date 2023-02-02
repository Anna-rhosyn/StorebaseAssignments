const form = document.getElementById("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pswd = document.getElementById("pswd");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isUnameValid = nameCheck(),
    isMailValid = mailCheck(),
    isNumberValid = phoneCheck(),
    isPswdValid = pswdCheck();

  let isFormValid = isUnameValid && isMailValid && isNumberValid && isPswdValid;

  if (isFormValid) {
    getRes();
  }
});

function nameCheck() {
  let valid = false;
  if (uname.value.length < 4) {
    funErr(uname, "Name is too  short");
  } else {
    success(uname);
    valid = true;
  }
  return valid;
}

function mailCheck() {
  let em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  let valid = false;
  if (email.value.match(em)) {
    success(email);
    valid = true;
  } else {
    funErr(email, "Enter valid email");
  }
  return valid;
}

function phoneCheck() {
  let valid = false;
  let phno = /^\d{10}$/;
  if (phone.value.match(phno) && phone.value.length >= 10) {
    success(phone);
    valid = true;
  } else {
    funErr(phone, "Phone number should be 10 digits & no characters");
  }
  return valid;
}

function pswdCheck() {
  let valid = false;
  if (pswd.value.length < 6) {
    funErr(pswd, "Password should be atleast 6 characters");
  } else {
    success(pswd);
    valid = true;
  }
  return valid;
}

//error function
function funErr(ele, msg) {
  const parent = ele.parentElement;
  const err = parent.querySelector("div");
  err.textContent = msg;
}

//success function / error msg removal
function success(ele) {
  const parent = ele.parentElement;
  const err = parent.querySelector("div");
  err.textContent = "";
}

function getRes() {
  const cont1 = document.getElementsByClassName("p");
  cont1[0].innerHTML =
    `<b>Name:  </b>` + document.getElementById("uname").value;
  cont1[1].innerHTML =
    `<b>Email:  </b>` + document.getElementById("email").value;
  cont1[2].innerHTML =
    `<b>Phone:  </b>` + document.getElementById("phone").value;
  cont1[3].innerHTML =
    `<b>Password:  </b>` + document.getElementById("pswd").value;
  const parent2 = document.querySelector("p").parentElement;
  parent2.classList.add("content");
}
