const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.body.classList.toggle("first-rect");
  document.body.classList.toggle("second-rect");
  document.body.classList.toggle("third-rect");
});
