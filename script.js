const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
