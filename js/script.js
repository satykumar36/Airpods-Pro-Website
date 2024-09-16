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




// Function to handle both scroll and touch events
gsap.to(".marquee", {
  transform: "translateX(0%)",
  duration: 2,
  repeat: -1,
  ease: "none",
});

gsap.to(".marquee i", {
  rotate: 0,
});

// Function to handle both scroll and touch events
function handleScrollOrTouch(deltaY) {
  if (deltaY < 0) {
    gsap.to(".marquee", {
      transform: "translateX(-200%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marquee i", {
      rotate: -180,
    });
  } else {
    gsap.to(".marquee", {
      transform: "translateX(0%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marquee i", {
      rotate: 0,
    });
  }
}

// Wheel event for desktop
window.addEventListener("wheel", function (position) {
  handleScrollOrTouch(position.deltaY);
});

// Variables to track touch start and end
let touchStartY = 0;

// Touch start event
window.addEventListener("touchstart", function (e) {
  touchStartY = e.touches[0].clientY; // Record the Y-coordinate where the touch started
});

// Touch end event to determine the final direction
window.addEventListener("touchend", function (e) {
  const touchEndY = e.changedTouches[0].clientY; // Get the Y-coordinate where the touch ended
  const deltaY = touchStartY - touchEndY; // Calculate the difference (positive for upward swipe, negative for downward)
  
  // If deltaY is significant enough, handle the swipe action
  if (Math.abs(deltaY) > 30) { // Only trigger on significant touch movement (30px)
    handleScrollOrTouch(deltaY);
  }
});
