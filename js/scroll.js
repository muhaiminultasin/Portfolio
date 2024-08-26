// controller is header section
const controller = document.querySelector("#header-controller")

const secAbout = document.getElementById("about");
const secServices = document.getElementById("services");


controller.addEventListener("click", (e) => {
  let target = e.target;

  switch(target.id) {
    case "btnAbout" :
      secAbout.scrollIntoView({
        behavior: 'smooth'
      });
      break;
    case "btnServices" :
      secServices.scrollIntoView({
        behavior: 'smooth'
      });
  };
});