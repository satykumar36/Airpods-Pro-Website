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

// <=======Gsap for cursor moving========>
var pagewrapper = document.querySelector("main"); // Selecting the <main> tag
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

// <=======Gsap for text scrolling========>

  // Initial setup: forward animation for the marquee
let marqueeAnimation = gsap.to(".marquee", {
  xPercent: 0, // Start from original position
  duration: 2,
  repeat: -1, // Infinite loop
  ease: "none",
});

// Function to handle scroll interaction (reverse or forward)
function handleScroll(deltaY) {
  marqueeAnimation.kill(); // Stop the current animation before setting a new one

  if (deltaY < 0) {
    // Scrolling upward, move marquee backward
    marqueeAnimation = gsap.to(".marquee", {
      xPercent: -200, // Move marquee in reverse
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marquee i", {
      rotate: -180, // Rotate arrow
      duration: 0.5, // Smooth transition
      ease: "power2.out",
    });
  } else {
    // Scrolling downward, move marquee forward
    marqueeAnimation = gsap.to(".marquee", {
      xPercent: 0, // Move marquee forward
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marquee i", {
      rotate: 0, // Reset arrow rotation
      duration: 0.5, // Smooth transition
      ease: "power2.out",
    });
  }
}

// Wheel event listener for desktop scrolling
window.addEventListener("wheel", function (e) {
  // Trigger marquee scroll on any direction change
  handleScroll(e.deltaY);
});






// GSAP animation to create a disco light effect for the cursor
gsap.to(".cursor", {
  borderColor: "hsl(+=360, 100%, 50%)", // Cycle through HSL colors smoothly
  duration: 5, // Increase duration for smoother transitions
  repeat: -1,  // Infinite loop
  ease: "linear", // Linear easing for smooth color change
});


