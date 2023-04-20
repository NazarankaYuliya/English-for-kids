import cards from '../data/cards';
import Card from './card';
import { toggleMode, togglePageToPlay } from './mode';
import { wordStats, setLocalStorage, updateLocalStorage } from './localStorage';

const pageContent = document.querySelector('.page-content');
const categories = cards[0];
const pageTitle = document.querySelector('.page-title');

const switchButton = document.querySelector('.switch-input');
let isGameMode;

export function generateCategory() {
  pageContent.innerHTML = '';
  pageContent.id = 0;
  pageTitle.textContent = 'Choose a category to study';

  categories.forEach((category, index) => {
    category = new Card({ categoryName: category, id: index });

    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    categoryCard.id = category.id;
    categoryCard.insertAdjacentHTML(
      'beforeend',
      category.generateCategoryHTML()
    );
    pageContent.append(categoryCard);
  });
}

export function generateCards(id) {
  pageContent.innerHTML = '';
  pageContent.id = id;
  pageTitle.textContent = categories[id - 1];

  cards[id].forEach((card, index) => {
    card = new Card({ ...card });
    pageContent.insertAdjacentHTML('beforeend', card.generateCardHTML(index));
  });

  if (isGameMode) {
    togglePageToPlay(pageContent);
  }
}

function playAudio(event) {
  const targetCard = event.target.closest('.card');
  const audioSrc = targetCard.querySelector('audio').src;
  const audio = new Audio(audioSrc);
  audio.play();
}

function flipCard(event) {
  const card = event.target.closest('.card');
  const front = event.target.closest('.front');
  const back = front.nextElementSibling;

  front.style.transform = 'rotateY(-180deg)';
  back.style.transform = 'perspective(800px) rotateY(0deg)';

  card.addEventListener(
    'mouseleave',
    () => {
      front.style.transform = 'rotateY(0deg)';
      back.style.transform = 'perspective(800px) rotateY(-180deg)';
    },
    { once: true }
  );
}

function handleSwitchButton() {
  isGameMode = switchButton.checked;

  toggleMode(isGameMode);

  if (pageContent.id > 0) {
    generateCards(pageContent.id, pageContent, pageTitle);
  }
}

function handleClicks(event) {
  const front = event.target.closest('.front');
  const word = front.querySelector('h4').textContent;

  updateLocalStorage('statistics', wordStats);
  wordStats[word].clicks += 1;
  setLocalStorage('statistics', wordStats);
}

document.addEventListener('click', (event) => {
  if (event.target.closest('.category-card')) {
    const target = event.target.closest('.category-card');
    generateCards(target.id, pageContent, pageTitle);
  }

  if (event.target.closest('.front') && !isGameMode) {
    playAudio(event);
    handleClicks(event);
  }

  if (event.target.closest('.rotate')) {
    flipCard(event);
  }

  if (event.target.closest('.switch-input')) {
    handleSwitchButton();
  }
});
