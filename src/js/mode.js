/* eslint-disable no-param-reassign */
import { startGame, repeatWord } from './game';

const mode = document.querySelector('.mode');

export function toggleMode(isGameMode) {
  mode.textContent = isGameMode ? 'Play' : 'Train';
}

function createGameContainer(pageContent) {
  const startButton = document.createElement('button');
  startButton.className = 'start-game';
  startButton.innerText = 'START';

  const stars = document.createElement('div');
  stars.className = 'stars';
  stars.innerHTML = '';

  const gameContainer = document.createElement('div');
  gameContainer.className = 'game-container';
  gameContainer.append(stars, startButton);

  startButton.textContent = 'START';
  startButton.removeEventListener('click', repeatWord);
  startButton.addEventListener('click', startGame);

  pageContent.prepend(gameContainer);
}

export function togglePageToPlay(pageContent) {
  createGameContainer(pageContent);

  const cardImages = pageContent.querySelectorAll('.card-image');
  const cardDescriptions = pageContent.querySelectorAll('.card-description');
  const rotateElements = pageContent.querySelectorAll('.rotate');

  cardImages.forEach((el) => {
    el.style.height = '100%';
  });
  cardDescriptions.forEach((el) => {
    el.style.display = 'none';
  });
  rotateElements.forEach((el) => {
    el.style.display = 'none';
  });
}
