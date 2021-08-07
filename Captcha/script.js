let captcha = document.querySelector(".captcha");
let relode_btn = document.querySelector(".captcha_relode");
let input_flied = document.querySelector("input");
let check_btn = document.querySelector(".captcha_btn");
let status_txt = document.querySelector(".status_txt");

let allCharecter = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                     "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                     "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
                     "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                     "o","p", "q", "r", "s", "t", "u", "v", "w", "x", 
                     "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];


function getCptcha() {
  for (let i = 0; i < 6; i++) {
    const randomChar =
      allCharecter[Math.floor(Math.random() * allCharecter.length)];
    captcha.innerHTML += ` ${randomChar}`;
  }
}
getCptcha();

relode_btn.addEventListener("click", () => {
  captcha.innerHTML = "";
  getCptcha();
});

check_btn.addEventListener("click", (e) => {
  e.preventDefault();
  status_txt.style.display = "block";
  let inputVal = input_flied.value.split("").join(" ");
  if (inputVal == captcha.innerText) {
    status_txt.innerText = "Nice! You don't appear to be a robot";
    status_txt.style.color = "#48aaed";
    setTimeout(() => {
      status_txt.style.display = "";
      input_flied.value = "";
      captcha.innerText = "";
      getCptcha();
    }, 4000);
  } else {
    status_txt.innerText = "Captcha not matched. Plase try again!";
  }
});
