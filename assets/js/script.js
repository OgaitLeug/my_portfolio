// Hide/Show Navbar
document.getElementById("nav-toggle").addEventListener("click", function () {
  const navbar = document.getElementById("header");
  navbar.classList.toggle("mobile-nav-active");

  // Change the icon Button
  const toggleIcon = document.getElementById("nav-toggle");
  toggleIcon.classList.toggle("bi-list");
  toggleIcon.classList.toggle("bi-x");
});
// Event Listener for navbar links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Removes mobile-nav-active class to close navbar
    const navbar = document.getElementById("header");
    navbar.classList.remove("mobile-nav-active");

    // Reset the Icon
    const toggleIcon = document.getElementById("nav-toggle");
    toggleIcon.classList.add("bi-list");
    toggleIcon.classList.remove("bi-x");
  });
});
//Typed.js
var options = {
  strings: ["Junior-FullStack.", "Learning new Technologies"], //Content
  typeSpeed: 50, // Typing speed
  backSpeed: 30, // Backspacing speed
  backDelay: 1000, // Delay before deleting the text
  loop: true, // Whether it should keep looping or not
};

var typed = new Typed("#type", options);
