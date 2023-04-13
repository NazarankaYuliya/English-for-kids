import { pageContent } from './main.js'
import { startGame, repeatWord } from './game.js'

export let isGameMode = false
const mode = document.querySelector('.mode')
const switchButton = document.querySelector('.switch-input')

export function toggleMode() {
  isGameMode = switchButton.checked
  mode.textContent = isGameMode ? 'Play' : 'Train'
}

export const startButton = document.createElement('button')
startButton.className = 'start-game'

export const stars = document.createElement('div')
stars.className = 'stars'
const gameContainer = document.createElement('div')
gameContainer.className = 'game-container'
gameContainer.append(stars, startButton)

export function togglePageToPlay() {
  stars.innerHTML = ''
  pageContent.prepend(gameContainer)

  const cardImages = pageContent.querySelectorAll('.card-image')
  const cardDescriptions = pageContent.querySelectorAll('.card-description')
  const rotateElements = pageContent.querySelectorAll('.rotate')

  cardImages.forEach((el) => (el.style.height = '100%'))
  cardDescriptions.forEach((el) => (el.style.display = 'none'))
  rotateElements.forEach((el) => (el.style.display = 'none'))

  startButton.textContent = 'START'
  startButton.removeEventListener('click', repeatWord)
  startButton.addEventListener('click', startGame)
}
