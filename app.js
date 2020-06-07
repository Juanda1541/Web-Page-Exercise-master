let menu = document.getElementById("icon");
let links = document.getElementById("links");
let counter = 0;

menu.addEventListener("click", function () {
  if (counter == 0) {
    links.className = "uList dropList2";
    counter = 1;
  } else {
    links.classList.remove("dropList2");
    links.className = "uList dropList";
    counter = 0;
  }
});
