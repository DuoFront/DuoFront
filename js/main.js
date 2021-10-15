let menu = document.querySelector(".menu")
let menuNavigation = document.querySelector(".menu-navigation")
let x = document.querySelector(".close")

function menuLateral() {
    menuNavigation.classList.toggle("active")
    menu.classList.toggle("active")
    x.classList.toggle("active")
}

menu.addEventListener('click', menuLateral)

x.addEventListener('click',  menuLateral)
