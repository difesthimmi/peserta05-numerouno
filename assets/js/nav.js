const navbar = document.querySelector("nav");
const li = navbar.querySelectorAll("a");
const hamburgerIcon = document.querySelector(".hamburgericon");
const profileIcon = document.querySelector(".profile");
const dropDownNav = document.querySelector("ul");
const dropDownProfile = document.querySelector("#accountmenu");
let scrollPos = 0;

window.addEventListener("scroll", () => {
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        navbar.style.transform = "translateY(0)";
    }
    else {
        navbar.style.transform = "translateY(-100%)";
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
});

let visiblingHamburger = true;
hamburgerIcon.addEventListener("click", () => {
    if (visiblingHamburger) {
        dropDownNav.classList.add("visible");
        visiblingHamburger = false;
    }
    else {
        dropDownNav.classList.remove("visible");
        visiblingHamburger = true;
    }
})

let visiblingaccount = true;
profileIcon.addEventListener("click", () => {
    if (visiblingaccount) {
        dropDownProfile.classList.add("visible");
        visiblingaccount = false;
    }
    else {
        dropDownProfile.classList.remove("visible");
        visiblingaccount = true;
    }
})

const scrollNav = () => {
    if (window.innerWidth >= 770) window.scrollTo(0, 5000);
};