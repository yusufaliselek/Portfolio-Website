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

/* Drop Down Menu*/ 
const dropDownMenu = () => {
  const dropDown1 = document.querySelector(".drop-down-1");
  const dropDown2 = document.querySelector(".drop-down-2");
  const frondendDevSkills = document.querySelector(".frontend-developer-skills");
  const mobileDevSkills = document.querySelector(".mobile-app-developer-skills");

  dropDown1.addEventListener("click", () => {
    frondendDevSkills.classList.toggle("drop-down-inactive");
    dropDown1.classList.toggle("chevron-down");
    /*dropDown1.setAttribute("data-icon","akar-icons:chevron-down");*/
  });

  dropDown2.addEventListener("click", () => {
    mobileDevSkills.classList.toggle("drop-down-inactive");
    dropDown2.classList.toggle("chevron-down");
  });

};

dropDownMenu();


