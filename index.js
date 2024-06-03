const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Wait for the page to finish loading
window.addEventListener("load", function () {
  // Get the element by ID
  var myName = document.getElementById("my-name");
  // Add the class to start the animation
  myName.classList.add("jump-animation");
});
