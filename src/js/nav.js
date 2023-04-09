import { categories, generateCards, generateCategory } from './main.js'

export function addNav() {
  const menu = document.querySelector('.menu')
  const menu_list = document.querySelector('.menu-list')
  const burger_icon = document.querySelector('.burger-icon')
  const menu_item_main = document.createElement('li')
  menu_item_main.textContent = 'Main page'
  menu_item_main.classList.add('menu_item_main', 'menu-item')
  menu_list.append(menu_item_main)

  categories.forEach((el) => {
    const menu_item = document.createElement('li')
    menu_item.classList.add('menu-item')
    menu_item.textContent = el
    menu_list.append(menu_item)
  })

  menu.addEventListener('click', (event) => {
    const targ = event.target.closest('li').textContent

    switch (targ) {
      case 'Main page':
        generateCategory()
        menuToggle()
        break
      default:
        const id = categories.indexOf(targ) + 1
        generateCards(id)
        menuToggle()
    }
  })

  burger_icon.addEventListener('click', menuToggle)

  function menuToggle() {
    menu.classList.toggle('menu-active')
  }
}
