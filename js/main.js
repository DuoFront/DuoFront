let menu = document.querySelector(".menu")
let menuNavigation = document.querySelector(".menu-navigation")
let close = document.querySelector(".close")

menu.addEventListener('click', () => {
    menuNavigation.classList.toggle("active")
    menu.classList.toggle("active")
    close.classList.toggle("active")
})

close.addEventListener('click', () => {
    menu.classList.toggle("active")
    close.classList.toggle("active")
    menuNavigation.classList.toggle("active")
})
