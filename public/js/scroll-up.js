const topScrollBtn = document.querySelector(".top-scroll-btn");
window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {                      //si se hace un scroll vertical (Y) mayor que 100px, agregar clase show
    topScrollBtn.classList.add("show");
  } else {
    topScrollBtn.classList.remove("show");
  }
});

topScrollBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});