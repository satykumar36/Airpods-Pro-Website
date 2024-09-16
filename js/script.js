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
var pagewrapper = document.querySelector("main");  // Selecting the <main> tag
var cursor = document.querySelector(".cursor");

// Function to move the cursor
function moveCursor(x, y) {
  gsap.to(".cursor", {
    x: x,
    y: y,
    duration: 1.2,
  });
}

// Mousemove event for desktop
pagewrapper.addEventListener("mousemove", function (e) {
  moveCursor(e.clientX, e.clientY);
});

// Touchmove event for mobile
pagewrapper.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  moveCursor(touch.clientX, touch.clientY);
});



gsap.to(".marquee",{
  transform:"translateX(0%)",
  duration:2,
  repeat:-1,
  ease:"none",
})
gsap.to(".marquee i",{
  rotate:0,
})
window.addEventListener("wheel",function(position){
  if(position.deltaY <0){
  gsap.to(".marquee",{
    transform:"translateX(-200%)",
    duration:2,
    repeat:-1,
    ease:"none",
  })
  gsap.to(".marquee i",{
    rotate:-180,
  })
}
else{
  gsap.to(".marquee",{
    transform:"translateX(0%)",
    duration:2,
    repeat:-1,
    ease:"none",
  })
  gsap.to(".marquee i",{
    rotate:0,
  })
}
})