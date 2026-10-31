const body = document.body;
const themeToggleBtn = document.querySelector("#theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌙";
    themeToggleBtn.setAttribute("aria-label", "Ativar modo escuro");
  } else {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "☀️";
    themeToggleBtn.setAttribute("aria-label", "Ativar modo claro");
  }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light-theme");
  themeToggleBtn.textContent = "🌙";
  themeToggleBtn.setAttribute("arial-label", "Ativar modo escuro");
}
