
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const greetButton = document.getElementById("greet-button");
const greeting = document.getElementById("greeting");
const year = document.getElementById("year");

// Mobile navigation menu
menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close the menu after selecting a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Interactive greeting button
greetButton.addEventListener("click", function () {
  greeting.textContent = "Hello! Thank you for visiting my portfolio.";
});

// Automatically update the copyright year
year.textContent = new Date().getFullYear();
