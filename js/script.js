/* Navbar #2 - Sticky Functioning */
const navbar = document.querySelector(".airpods-navbar");
const originalY = navbar.offsetTop; // 44

console.log(document.querySelector(".section-01").offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY >= originalY) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

/* ScrollMagic Controller */
let controller = new ScrollMagic.Controller();




// GSAP
var pagewrapper = document.querySelector(".section-01");
var cursor = document.querySelector(".cursor");
pagewrapper.addEventListener("mousemove", function (dots) {
  gsap.to(".cursor", {
    x: dots.x,
    y: dots.y,
    duration:1.2,
  });
});