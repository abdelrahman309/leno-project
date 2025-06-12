const toggleBtn = document.querySelector(".navbar__mobile-menu-toggle");
const mobileMenu = document.querySelector(".navbar__mobile-menu");
// for mobile menu
toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("navbar__mobile-menu--active");
});
// for navbar
window.addEventListener("scroll", function () {
  const navBar = this.document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navBar.classList.add("navbar__scroll");
  } else {
    navBar.classList.remove("navbar__scroll");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const videoModel = document.getElementById("model");
  const videoBtn = document.querySelector(".previw__buttton");
  const closeBtn = document.querySelector(".model__close-button");
  const videoFrame = document.querySelector(".model__frame");

  videoBtn.addEventListener("click", function () {
    videoModel.style.display = "block";
    videoFrame.src = "https://www.youtube.com/watch?v=-4taOcZ4kNM";
  });
  closeBtn.addEventListener("click", function () {
    videoModel.style.display = "none";
    videoFrame.src = "";
  });
  window.addEventListener("click", function (event) {
    if (event.target == videoModel) {
      videoModel.style.display = "none";
      videoFrame.src = "";
    }
  });
});
