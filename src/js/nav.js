import cards from '../data/cards';
import { generateCategory, generateCards } from './main';
import generateStatistics from './statistics';

const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const burgerIcon = document.querySelector('.burger-icon');
const BURGER_ICON_PATH = './data/img/burger-icon.png';
const categories = cards[0];

function menuToggle() {
  menu.classList.toggle('menu-active');
  burgerIcon.classList.toggle('burger-icon-rotate');
}

function createMenuItemMain() {
  const menuItemMain = document.createElement('li');
  menuItemMain.textContent = 'Main page';
  menuItemMain.classList.add('menu_item_main', 'menu-item');
  return menuItemMain;
}

function createMenuItemStats() {
  const menuItemStats = document.createElement('li');
  menuItemStats.textContent = 'Statistics';
  menuItemStats.classList.add('menu_item_stat', 'menu-item');
  return menuItemStats;
}

function createMenuItem(category) {
  const menuItem = document.createElement('li');
  menuItem.className = 'menu-item';
  menuItem.textContent = category;
  return menuItem;
}

export default function addNav() {
  burgerIcon.src = BURGER_ICON_PATH;

  const menuItemMain = createMenuItemMain();
  menuList.append(menuItemMain);

  categories.forEach((category) => {
    const menuItem = createMenuItem(category);
    menuList.append(menuItem);
  });

  const menuItemStats = createMenuItemStats();
  menuList.append(menuItemStats);

  menuList.addEventListener('click', (event) => {
    const targetMenuItem = event.target.closest('li');
    let id;
    switch (targetMenuItem.textContent) {
      case 'Main page':
        generateCategory();
        menuToggle();
        break;
      case 'Statistics':
        generateStatistics();
        menuToggle();
        break;
      default:
        id = categories.indexOf(targetMenuItem.textContent) + 1;
        generateCards(id);
        menuToggle();
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.burger-icon')) {
      menuToggle();
    } else if (
      !event.target.closest('.menu') &&
      menu.classList.contains('menu-active')
    ) {
      menuToggle();
    }
  });
}
