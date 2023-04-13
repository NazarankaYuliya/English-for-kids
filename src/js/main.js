import { cards } from '../data/cards.js'
import { generateCards } from './Card.js'
import { isGameMode, toggleMode, togglePageToPlay } from './mode.js'
import { wordStats, repeatDifficultWords } from './statistics.js'
import { updateLocalStorage, setLocalStorage } from './localStorage.js'

export const pageContent = document.querySelector('.page-content')
export const categories = cards[0]
export const pageTitle = document.querySelector('.page-title')

export const CARD_PATH = './data/'
export const ROTATE_IMAGE_PATH = './data/img/rotate.svg'

class Category {
  constructor(categoryName, id) {
    this.id = id + 1
    this.categoryName = categoryName
    this.image = `${CARD_PATH}${cards[this.id][0].image}`
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

function playAudio(event) {
  const target = event.target.closest('.card')
  const audioSrc = target.querySelector('audio').src
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

    const front = event.target.closest('.front')
    const word = front.querySelector('h4').textContent

    updateLocalStorage()
    wordStats[word].clicks++
    setLocalStorage()
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

  if (event.target.closest('.stat-repeat')) {
    repeatDifficultWords()
  }
})
