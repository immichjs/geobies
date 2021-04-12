const menu = document.querySelector("#menu-hamburguer")
const navMenu = document.querySelector('.header-container nav')
const navMenuList = navMenu.querySelector('ul')


menu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
    navMenuList.classList.toggle('list')
})
