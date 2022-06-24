// loader
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none"
})
// end loader

// Relace text js
let typed = new Typed(".auto-input", {
  strings: ["HTML", "CSS", "JAVA"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})
// end replace

// hamburger ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlinks");
const navLink = document.querySelectorAll(".navlink");

hamburger.addEventListener("click",mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// end hamburger
