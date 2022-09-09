// Grab the HTML elements
const navMenu = document.getElementsByClassName("nav_links")[0],
  open = document.getElementById("open"),
  close = document.getElementById("close"),
  show = document.getElementsByClassName("show")[0];

close.style.display = "none";
navMenu.classList.remove("show");

// Toggle Menu Open
if (open) {
  open.addEventListener("click", () => {
    navMenu.classList.add("show");
    close.style.display = "block";
    open.style.display = "none";
  });
}

// Close Menu
if (close) {
  close.addEventListener("click", () => {
    navMenu.classList.remove("show");
    open.style.display = "block";
    close.style.display = "none";
  });
}

// Close Menu if link is click on

// Get the links
const links = document.querySelectorAll(".link");

function linkAction() {
  navMenu.classList.remove("show");
  close.style.display = "none";
  open.style.display = "block";
}

links.forEach((n) => n.addEventListener("click", linkAction));

// HIGHLIGHT LINK ON ACTIVE PAGE

let current = 0;
for (var i = 0; i < document.links.length; i++) {
  if (document.links[i].href === document.URL) {
    current = i;
  }
}
document.links[current].className = "current";

