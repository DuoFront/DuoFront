const menuOpen = document.querySelector(".open")
const menuClose = document.querySelector(".close")
const list = document.querySelector(".list")

function showMenu() {
    menuOpen.classList.toggle("active")
    menuClose.classList.toggle("active")
    list.classList.toggle("active")
}

menuOpen.addEventListener("click", showMenu)
menuClose.addEventListener("click", showMenu)