import { cards } from '../data/cards.js'
import {
  pageContent,
  categories,
  pageTitle,
  CARD_PATH,
  ROTATE_IMAGE_PATH,
} from './main'
import { isGameMode, togglePageToPlay } from './mode'

export class Card {
  constructor(word, translation, image, audioSrc) {
    this.word = word
    this.translation = translation
    this.image = `${CARD_PATH}${image}`
    this.audioSrc = `${CARD_PATH}${audioSrc}`
  }

  generateHTML(index) {
    return `
        <div class="card" id="${index + 1}">
            <div class="front">
                <div class="card-image">
                    <img src="${this.image}" alt="${this.word}">
                </div>
                <div class="card-description">
                    <h4>${this.word}</h4>
                    <img class="rotate" src="${ROTATE_IMAGE_PATH}" alt="rotate" width="20px">
                </div>
            </div>
            <div class="back">
                <div class="card-image">
                    <img src="${this.image}" alt="${this.word}">
                </div>
                <div class="card-description">
                    <h4>${this.translation}</h4>
                </div>
            </div>
            <audio class="card-audio " src="${this.audioSrc}"></audio>
        </div>
      `
  }
}

export function generateCards(id) {
  pageContent.innerHTML = ''
  pageContent.id = id
  pageTitle.textContent = categories[id - 1]

  cards[id].forEach((el, index) => {
    el = new Card(el.word, el.translation, el.image, el.audioSrc)
    const cardHTML = el.generateHTML(index)
    pageContent.insertAdjacentHTML('beforeend', cardHTML)
  })

  if (isGameMode) {
    togglePageToPlay()
  }
}
