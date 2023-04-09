import { pageContent } from './main.js'

export let isGameMode = false

export function toggleMode() {
  const mode = document.querySelector('.mode')
  const switchButton = document.querySelector('.switch-input')

  if (switchButton.checked) {
    isGameMode = true
    mode.textContent = 'Play'
  } else {
    isGameMode = false
    mode.textContent = 'Train'
  }
}

export function togglePageToPlay() {
  pageContent
    .querySelectorAll('.card-image')
    .forEach((el) => (el.style.height = '100%'))
  pageContent
    .querySelectorAll('.card-description')
    .forEach((el) => (el.style.display = 'none'))
  pageContent
    .querySelectorAll('.rotate')
    .forEach((el) => (el.style.display = 'none'))

  const startButton = document.createElement('button')
  startButton.className = 'start-game'
  startButton.textContent = 'Start game'
  pageContent.append(startButton)
}
