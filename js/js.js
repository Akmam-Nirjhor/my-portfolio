// Typing Script Js

var typed = new Typed(".typing", {
  strings: [
    "Web Developer",
    " Software Quality Asuurance ",
    "Automation Testing",
    "Manual Testing",
  ],
  typeSpeed: 80,
  backSpeed: 80,
});

var typed = new Typed(".typing-2", {
  strings: [
    "Web Developer",
    " Software Quality Asuurance Engineer ",
    "Automation Tester",
    "Manual Tester",
  ],
  typeSpeed: 100,
  backSpeed: 60,
});

// Show and hide nav_menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
// Close Nav Menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// Nav Color change on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});
