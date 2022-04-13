/* Responsive Navbar */

const navMenu = () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navList = document.querySelector(".nav-list");

  navbarToggler.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    navbarToggler.classList.toggle("toggle");
  });
};

navMenu();
