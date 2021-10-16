let menu = document.querySelector(".menu")
let menuNavigation = document.querySelector(".menu-navigation")
let aside = document.querySelector(".aside")
let x = document.querySelector(".close")

function menuLateral() {
    menuNavigation.classList.toggle("active")
    menu.classList.toggle("active")
    x.classList.toggle("active")
    aside.classList.toggle("active")
}

menu.addEventListener('click', menuLateral)

x.addEventListener('click',  menuLateral)
