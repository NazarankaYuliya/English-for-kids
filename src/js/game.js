import { generateCategory, pageContent } from './main'
import { startButton, stars } from './mode.js'
import { wordStats } from './statistics.js'
import { updateLocalStorage, setLocalStorage } from './localStorage.js'

const errorAudio = new Audio('./data/audio/error.mp3')
const correctAudio = new Audio('./data/audio/correct.mp3')
const successAudio = new Audio('./data/audio/success.mp3')
const failureAudio = new Audio('./data/audio/failure.mp3')

const IMAGE_PATH = './data/img/'

let currentIndex = 0
let correctGuesses = 0
let wrongGuesses = 0
const audioSrcs = []
const words = []
const MAX_STARS = 8

export function startGame() {
  initGame()
  let isFirstClick = true

  if (isFirstClick) {
    startButton.innerText = 'REPEAT'
    startButton.removeEventListener('click', startGame)
    startButton.addEventListener('click', repeatWord)
    isFirstClick = false
  } else {
    repeatWord()
  }
}

function initGame() {
  currentIndex = 0
  correctGuesses = 0
  wrongGuesses = 0
  audioSrcs.length = 0
  words.length = 0
  stars.innerHTML = ''

  const cards = Array.from(pageContent.querySelectorAll('.card'))
  const randomCards = cards.sort(() => Math.random() - 0.5)

  randomCards.forEach((card) => {
    const audioSrc = card.querySelector('audio').src
    const word = card.querySelector('.front h4').textContent
    audioSrcs.push(audioSrc)
    words.push(word)

    card.addEventListener('click', checkGuess)
  })
  playAudio()
}

function playAudio() {
  const audio = new Audio(audioSrcs[currentIndex])
  audio.play()
}

function checkGuess(event) {
  const card = event.currentTarget
  const word = card.querySelector('.front h4').textContent

  if (word === words[currentIndex]) {
    correctAudio.play()
    card.classList.add('inactive')
    card.removeEventListener('click', checkGuess)

    updateLocalStorage()
    wordStats[word].guesses++
    setLocalStorage()

    currentIndex++
    correctGuesses++

    const star = document.createElement('span')
    star.classList.add('star-win')
    addStar('star-win')

    if (currentIndex < audioSrcs.length) {
      playAudio()
    } else {
      if (wrongGuesses === 0) {
        successAudio.play()
        pageContent.innerHTML = `
        <div class="success">
            <img src="${IMAGE_PATH}success.jpeg">
            <p class='game-over'>Awesome job! You guessed all the words!</p>
        </div>`
      } else {
        failureAudio.play()

        pageContent.innerHTML = `
        <div class="failure">
            <img src="${IMAGE_PATH}failure.jpeg">
            <p class='game-over'> You made ${wrongGuesses} mistakes.</p>
        </div>`
      }
      setTimeout(() => {
        generateCategory()
      }, 3000)
    }
  } else {
    errorAudio.play()
    wrongGuesses++
    updateLocalStorage()
    wordStats[word].mistakes++
    setLocalStorage()

    const star = document.createElement('span')
    star.classList.add('star')
    addStar('star')
  }
}

function addStar(className) {
  const star = document.createElement('span')
  star.classList.add(className)
  const isFull = stars.children.length >= MAX_STARS
  isFull ? stars.removeChild(stars.children[0]) : null
  stars.append(star)
}

export function repeatWord() {
  playAudio()
}
