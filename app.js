const navBtn = document.getElementById("nav-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// navbar fixed
const navbar = document.getElementById("nav");
const fixed = navbar.offsetTop;
window.onscroll = fixedNav();

function fixedNav() {
  if (window.pageYOffset >= fixed) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
}

// button to the top

const mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
