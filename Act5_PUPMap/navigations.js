
const homePage = document.getElementById("home");
const mapPage = document.getElementById("map");
const goMapBtn = document.getElementById("btnMap");
const goHomeBtn = document.getElementById("back");

goMapBtn.addEventListener("click", () => {
  homePage.classList.remove("active");
  mapPage.classList.add("active");
});

goHomeBtn.addEventListener("click", () => {
  mapPage.classList.remove("active");
  homePage.classList.add("active");
});
