let clickMenu = document.querySelector(".click-menu");
let burgerBtn = document.querySelector(".burger-container");

burgerBtn.addEventListener("click", () => {
  if (clickMenu.style.display === "none") {
    clickMenu.style.display = "block";
  } else {
    clickMenu.style.display = "none";
  }
});
