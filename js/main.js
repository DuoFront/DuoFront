let menu = document.querySelector(".menu")
let menuNavigation = document.querySelector(".menu-navigation")

menu.addEventListener('click', () => {
    menuNavigation.classList.toggle("active")
})
