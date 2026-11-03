const body = document.body;
const themeToggleBtn = document.querySelector("button#theme-toggle");
const menuToggleBtn = document.querySelector("button#menu-toggle");
const mainMenu = document.querySelector("nav#main-menu");
const mainMenuLinks = document.querySelectorAll("nav#main-menu a");

const updateMenuButton = () => {
  if (mainMenu.classList.contains("is-open")) {
    menuToggleBtn.setAttribute("aria-expanded", "true");
    menuToggleBtn.setAttribute("aria-label", "Fechar menu");
  } else {
    menuToggleBtn.setAttribute("aria-expanded", "false");
    menuToggleBtn.setAttribute("aria-label", "Abrir menu");
  }
};

const updateThemeButton = () => {
  if (body.classList.contains("light-theme")) {
    themeToggleBtn.textContent = "🌙";
    themeToggleBtn.setAttribute("aria-label", "Ativar modo escuro");
  } else {
    themeToggleBtn.textContent = "☀️";
    themeToggleBtn.setAttribute("aria-label", "Ativar modo claro");
  }
};

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  updateThemeButton();
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light-theme");
}

updateThemeButton();

menuToggleBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("is-open");

  updateMenuButton();
});

mainMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainMenu.classList.remove("is-open");

    updateMenuButton();
  });
});
