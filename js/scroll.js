// About
const about = document.getElementById("btnAbout");
const secAbout = document.getElementById("about");
about.addEventListener("click", function (event) {
  event.preventDefault();
  secAbout.scrollIntoView({ behavior: "smooth" });
});

// Services

const servBtn = document.getElementById("btnServices");
const secServices = document.getElementById("services");

servBtn.addEventListener("click", function (event) {
  event.preventDefault();
  secServices.scrollIntoView({ behavior: "smooth" });
});
