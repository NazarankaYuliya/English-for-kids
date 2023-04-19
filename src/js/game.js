/* eslint-disable no-use-before-define */
import { generateCategory } from './main';
import { setLocalStorage, updateLocalStorage, wordStats } from './localStorage';

const errorAudio = new Audio('./data/audio/error.mp3');
const correctAudio = new Audio('./data/audio/correct.mp3');
const successAudio = new Audio('./data/audio/success.mp3');
const failureAudio = new Audio('./data/audio/failure.mp3');

const IMAGE_PATH = './data/img/';
const key = 'statistics';

let currentIndex = 0;
let wrongGuesses = 0;
const audioSrcs = [];
const words = [];

const pageContent = document.querySelector('.page-content');

function playGameAudio() {
  const audio = new Audio(audioSrcs[currentIndex]);
  audio.play();
}

export function repeatWord() {
  playGameAudio();
}

function initGame() {
  currentIndex = 0;
  wrongGuesses = 0;
  audioSrcs.length = 0;
  words.length = 0;
  const stars = document.querySelector('.stars');
  stars.innerHTML = '';

  const cards = Array.from(pageContent.querySelectorAll('.card'));
  const randomCards = cards.sort(() => Math.random() - 0.5);

  randomCards.forEach((card) => {
    const audioSrc = card.querySelector('audio').src;
    const word = card.querySelector('.front h4').textContent;
    audioSrcs.push(audioSrc);
    words.push(word);

    card.addEventListener('click', checkGuess);
  });
  playGameAudio();
}

export function startGame() {
  initGame(pageContent);
  let isFirstClick = true;

  const startButton = document.querySelector('.start-game');

  if (isFirstClick) {
    startButton.innerText = 'REPEAT';
    startButton.removeEventListener('click', startGame);
    startButton.addEventListener('click', repeatWord);
    isFirstClick = false;
  } else {
    repeatWord();
  }
}

function addStar(className) {
  const MAX_STARS = 8;

  const stars = document.querySelector('.stars');
  const star = document.createElement('span');
  star.classList.add(className);

  const isFull = stars.children.length >= MAX_STARS;
  if (isFull) {
    stars.removeChild(stars.children[0]);
  }

  stars.append(star);
}

function checkGuess(event) {
  const card = event.currentTarget;
  const word = card.querySelector('.front h4').textContent;

  const isCorrect = word === words[currentIndex];
  handleGuess(card, word, isCorrect);
}

function handleGuess(card, word, isCorrect) {
  if (isCorrect) {
    correctAudio.play();
    card.classList.add('inactive');
    card.removeEventListener('click', checkGuess);

    updateLocalStorage(key, wordStats);
    wordStats[word].guesses += 1;

    currentIndex += 1;
    addStar('star-win');

    if (currentIndex < audioSrcs.length) {
      playGameAudio();
    } else {
      handleGameOver();
    }
  } else {
    errorAudio.play();
    wrongGuesses += 1;

    updateLocalStorage(key, wordStats);
    wordStats[word].mistakes += 1;

    addStar('star');
  }
  setLocalStorage(key, wordStats);
}

function handleGameOver() {
  let imageSrc;
  let message;

  if (wrongGuesses === 0) {
    successAudio.play();
    imageSrc = `${IMAGE_PATH}success.jpeg`;
    message = 'Awesome job! You guessed all the words!';
  } else {
    failureAudio.play();
    imageSrc = `${IMAGE_PATH}failure.jpeg`;
    message = `You made ${wrongGuesses} mistakes.`;
  }

  const gameOverContent = `
    <div class="${wrongGuesses === 0 ? 'success' : 'failure'}">
      <img src="${imageSrc}">
      <p class='game-over'>${message}</p>
    </div>
  `;
  pageContent.innerHTML = gameOverContent;

  setTimeout(() => {
    generateCategory();
  }, 3000);
}
