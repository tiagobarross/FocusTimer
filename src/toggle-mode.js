let darkMode = true
const buttonToggle = document.getElementById("toggle-mode")

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light")

  const mode = darkMode ? "light" : "dark"
  
  event.currentTarget
    .querrySelector("span").textContent = `${mode} Mode Ativado`

  darkMode = !darkMode
}) 