// Toggle class active
const navbarSatu = document.querySelector(".navbar-satu");
// Ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarSatu.classList.toggle("active");
};

// Klik di luar side bar (menghilangkan nav)
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarSatu.contains(e.target)) {
    navbarSatu.classList.remove("active");
  }
});

DONE;
