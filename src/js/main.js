import { cards } from '../data/cards.js'
import { isGameMode, toggleMode, togglePageToPlay } from './mode.js'

export const pageContent = document.querySelector('.page-content')
export const categories = cards[0]
const pageTitle = document.querySelector('.page-title')

class Category {
  constructor(categoryName, id) {
    this.id = id + 1
    this.categoryName = categoryName
    this.image = './data/' + cards[id + 1][0].image
  }
}

class Card {
  constructor(word, translation, image, audioSrc) {
    this.word = word
    this.translation = translation
    this.image = '../data/' + image
    this.audioSrc = '../data/' + audioSrc
  }
}

export function generateCategory() {
  pageContent.innerHTML = ''
  pageContent.id = 0
  pageTitle.textContent = 'Main'
  categories.forEach((el, index) => {
    el = new Category(categories[index], index)
    const categoryCard = document.createElement('div')
    categoryCard.className = 'category-card'
    categoryCard.id = el.id
    categoryCard.insertAdjacentHTML(
      'afterbegin',
      `
        <div class='category-image'>
            <img src='${el.image}' alt='${el.categoryName}'>
         </div>
         <div class='category-description'>
            <h4>${el.categoryName}</h4>
            <h5>${cards[el.id].length} cards</h5>
         </div>
        `
    )
    pageContent.append(categoryCard)
  })
}

export function generateCards(id) {
  pageContent.innerHTML = ''
  pageContent.id = id
  pageTitle.textContent = categories[id - 1]

  cards[id].forEach((el, index) => {
    el = new Card(el.word, el.translation, el.image, el.audioSrc)

    const card = document.createElement('div')
    card.className = 'card'
    card.id = index + 1

    card.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="front">
            <div class="card-image">
                <img src='${el.image}' alt='${el.word}'>
            </div>
            <div class="card-description">
                <h4>${el.word}</h4>
                <img class='rotate' src='../data/img/rotate.svg' alt='rotate' width='20px'>
            </div>
        </div>

        <div class="back">
            <div class="card-image">
                <img src='${el.image}' alt='${el.word}'>
            </div>
            <div class="card-description">
                <h4>${el.translation}</h4>
            </div>
        </div>
        <audio class='card-audio audio${card.id}' src='${el.audioSrc}'></audio>
    `
    )

    pageContent.append(card)
  })
  if (isGameMode) {
    togglePageToPlay()
  }
}

function playAudio(event) {
  const target = event.target.closest('.card')
  const audioSrc = document.querySelector(`.audio${target.id}`).src
  const audio = new Audio(audioSrc)
  audio.play()
}

function flipCard() {
  const card = event.target.closest('.card')
  const front = event.target.closest('.front')
  const back = front.nextElementSibling

  front.style.transform = 'rotateY(-180deg)'
  back.style.transform = 'perspective(800px) rotateY(0deg)'

  card.addEventListener(
    'mouseleave',
    function () {
      front.style.transform = 'rotateY(0deg)'
      back.style.transform = 'perspective(800px) rotateY(-180deg)'
    },
    { once: true }
  )
}

document.addEventListener('click', function (event) {
  if (event.target.closest('.category-card')) {
    const target = event.target.closest('.category-card')
    generateCards(target.id)
  }
  if (event.target.closest('.front') && !isGameMode) {
    playAudio(event)
  }
  if (event.target.closest('.rotate')) {
    flipCard()
  }
  if (event.target.closest('.header-title')) {
    generateCategory()
  }
  if (event.target.closest('.switch-input')) {
    toggleMode()
    if (pageContent.id > 0) {
      generateCards(pageContent.id)
    }
  }
})
