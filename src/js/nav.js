import { categories, generateCategory } from './main.js'
import { generateCards } from './Card.js'
import { generateStatistics } from './statistics.js'

const menu = document.querySelector('.menu')
const menu_list = document.querySelector('.menu-list')
const burger_icon = document.querySelector('.burger-icon')
const BURGER_ICON_PATH = './data/img/burger-icon.png'

export function addNav() {
  burger_icon.src = BURGER_ICON_PATH
  const menu_item_main = document.createElement('li')
  menu_item_main.textContent = 'Main page'
  menu_item_main.classList.add('menu_item_main', 'menu-item')
  menu_list.append(menu_item_main)

  categories.forEach((category) => {
    const menu_item = document.createElement('li')
    menu_item.className = 'menu-item'
    menu_item.textContent = category
    menu_list.append(menu_item)
  })

  const menu_item_stat = document.createElement('li')
  menu_item_stat.textContent = 'Statistics'
  menu_item_stat.classList.add('menu_item_stat', 'menu-item')
  menu_list.append(menu_item_stat)

  menu_list.addEventListener('click', (event) => {
    const targ = event.target.closest('li')
    switch (targ.textContent) {
      case 'Main page':
        generateCategory()
        menuToggle()
        break
      case 'Statistics':
        generateStatistics()
        menuToggle()
        break
      default:
        const id = categories.indexOf(targ.textContent) + 1
        generateCards(id)
        menuToggle()
    }
  })

  document.addEventListener('click', (event) => {
    if (event.target.closest('.burger-icon')) {
      menuToggle()
    } else if (
      !event.target.closest('.menu') &&
      menu.classList.contains('menu-active')
    ) {
      menuToggle()
    }
  })
}

function menuToggle() {
  menu.classList.toggle('menu-active')
  burger_icon.classList.toggle('burger-icon-rotate')
  document.body.classList.toggle('stop-scrolling')
}
