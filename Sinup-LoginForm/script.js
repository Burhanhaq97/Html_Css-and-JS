'use strict';

let singup_link = document.querySelector(".a1");
let login_link = document.querySelector(".a2");

let singup_form = document.querySelector(".singup_form");
let login_form = document.querySelector(".login_form");

login_link.addEventListener("click", () => {
  singup_form.style.display = "none";
  login_form.style.display = "block";
  login_link.style.background = "#2981bc";
  singup_link.style.background = "#34495e";
});

singup_link.addEventListener("click", () => {
  login_form.style.display = "none";
  singup_form.style.display = "block";
  login_link.style.background = "#34495e";
  singup_link.style.background = "#2981bc";
});

// let singup_btn = document.querySelector(".singup_btn");

// singup_btn.addEventListener("click", () => {
//   alert("Form Successfully Submited");
// });

// let login_btn = document.querySelector(".login_btn");
// login_btn.addEventListener("click", () => {
//   alert("You Have Successfully Login");
// });

let firstname = document.forms["signupForm"]["firstname"];
let lastname = document.forms["signupForm"]["lastname"];
let email = document.forms["signupForm"]["email"];
let password = document.forms["signupForm"]["password"];

let signup_error = document.querySelector(".signup_error");

function signupValid() {
  if (firstname.value.length <= 2) {
    signup_error.style.display = "block";
    firstname.style.border = "1px solid red";
    signup_error.innerText = "Please fill up your first name";
    firstname.focus();
    return false;
  }
  if (lastname.value.length <= 2) {
    signup_error.style.display = "block";
    lastname.style.border = "1px solid red";
    signup_error.innerText = "Please fill up your last name";
    lastname.focus();
    return false;
  }
  if (email.value.length <= 10) {
    signup_error.style.display = "block";
    email.style.border = "1px solid red";
    signup_error.innerText = "Please fill up your email";
    email.focus();
    return false;
  }
  if (password.value.length <= 5) {
    signup_error.style.display = "block";
    password.style.border = "1px solid red";
    signup_error.innerText = "Please fill up your password";
    password.focus();
    return false;
  }
}

firstname.addEventListener("textInput", () => {
  if (firstname.value.length >= 3) {
    signup_error.style.display = "none";
    firstname.style.border = "1px solid #3498db";
    // signup_error.innerText = "Please fill up your first name";
    return true;
  }
});

lastname.addEventListener("textInput", () => {
  if (lastname.value.length >= 3) {
    signup_error.style.display = "none";
    lastname.style.border = "1px solid #3498db";
    // signup_error.innerText = "Please fill up your first name";
    return true;
  }
});
email.addEventListener("textInput", () => {
  if (email.value.length >= 8) {
    signup_error.style.display = "none";
    email.style.border = "1px solid #3498db";
    // signup_error.innerText = "Please fill up your first name";
    return true;
  }
});
password.addEventListener("textInput", () => {
  if (password.value.length >= 5) {
    signup_error.style.display = "none";
    password.style.border = "1px solid #3498db";
    // signup_error.innerText = "Please fill up your first name";
    return true;
  }
});
