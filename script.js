// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

let toInject= document.getElementById("setYear")

let year = new Date().getFullYear();

toInject.innerHTML = year + " ";