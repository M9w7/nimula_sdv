const loginForm = document.forms["login-form"];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent browser newstart

  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData);

  console.log(data);

  const payload = {
    email: data.mail,
    password: data.password,
    rememberMe: !!data.rememberMe, //check if rememberMe == "on" -> true else false
  };

  console.log(payload);
});

const burgerBtn = document.querySelector(".header__nav-toggle");
const closeBtn = document.querySelector(".header__close-toggle");
const navHeader = document.querySelector(".header__nav");

const toggleButtons = () => {
  burgerBtn.classList.toggle("header__nav-toggle--hidden");
  closeBtn.classList.toggle("header__close-toggle--hidden");
  navHeader.classList.toggle("header__nav--hidden");
};

burgerBtn.addEventListener("click", toggleButtons);
closeBtn.addEventListener("click", toggleButtons);

// typewriter
document.addEventListener("DOMContentLoaded", () => {
  new Typed(".main__typewriter", {
    strings: ["Pause.", "Reset.", "Weiter.", "Yoga &amp; Meditation"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: false,
    showCursor: false,
  });
});
