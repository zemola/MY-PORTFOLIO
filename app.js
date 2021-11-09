// Menu item fetched with query selector
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Individual bar for the mobile menu icon
const portfolio = document.querySelector(".portfolio-link");
const aboutUs = document.querySelector(".about-link");
const contactLink = document.querySelector(".contact-link");

const closeMobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};
