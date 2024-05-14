let darkModeToggle = document.querySelector("input")
let darkMode = localStorage.getItem("darkMode")

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkMode", "enabled")
    console.log("enaBLEd")
    // Inspect if it's checked or not, to positionate the toggle button to the left or right
    darkModeToggle.checked = true
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkMode", null)
    darkModeToggle.checked = false
}

if (darkMode === "enabled") enableDarkMode()

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")
    if(darkMode !== "enabled") enableDarkMode()
    else disableDarkMode()
})