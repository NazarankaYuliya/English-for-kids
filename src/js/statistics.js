import { cards } from '../data/cards.js'
import { pageContent, pageTitle, categories } from './main.js'

export const wordStats = {}

export const savedStats = JSON.parse(localStorage.getItem('statistics')) || {}

export function setLocalStorage() {
  localStorage.setItem('statistics', JSON.stringify(wordStats))
}

class StatItem {
  constructor(category, word, translation) {
    this.category = category
    this.word = word
    this.translation = translation
    this.clicks = 0
    this.guesses = 0
    this.mistakes = 0
  }
}

export function createStatItems() {
  for (let i = 1; i < cards.length; i++) {
    cards[i].forEach((item) => {
      const stat = new StatItem(categories[i - 1], item.word, item.translation)
      wordStats[stat.word] = stat
    })
  }
}

export function generateStatistics() {
  pageTitle.textContent = 'Statistics'
  pageContent.innerHTML = ''
  const statistics = document.createElement('div')
  statistics.classList.add('stat')

  pageContent.append(statistics)

  const statButtons = document.createElement('div')
  statButtons.classList.add('stat-buttons')
  statistics.append(statButtons)
  const repeatDiff = document.createElement('button')
  repeatDiff.classList.add('stat-repeat', 'btn', 'btn-info')
  repeatDiff.textContent = 'Repeat difficult words'
  const statReset = document.createElement('button')
  statReset.classList.add('stat-reset', 'btn', 'btn-info')
  statReset.textContent = 'Reset'
  statReset.addEventListener('click', resetStatistics)

  statButtons.append(repeatDiff)
  statButtons.append(statReset)

  const table = document.createElement('table')
  table.classList.add('table')

  const tableContainer = document.createElement('div')
  tableContainer.classList.add('table-container')

  tableContainer.append(table)
  statistics.append(tableContainer)
  const tableHead = document.createElement('thead')
  table.append(tableHead)
  tableHead.innerHTML = `
  <tr>
    <th>Word</th>
    <th>Clicked</th>
    <th>Translation</th>
    <th>Correct</th>
    <th>Wrong</th>
    <th>%</th>
    <th>Category</th>
  </tr>`

  const tableBody = document.createElement('tbody')
  table.append(tableBody)

  generateStatisticsRow()
}

export function generateStatisticsRow() {
  const statArr = JSON.parse(localStorage.getItem('statistics')) || {}
  console.log(statArr)

  for (const word in statArr) {
    const arr = statArr[word]
    const row = document.createElement('tr')
    let cell = document.createElement('td')
    cell.textContent = arr.word
    row.append(cell)
    cell = document.createElement('td')
    cell.textContent = arr.clicks
    row.append(cell)
    cell = document.createElement('td')
    cell.textContent = arr.translation
    row.append(cell)
    cell = document.createElement('td')
    cell.textContent = arr.guesses
    row.append(cell)
    cell = document.createElement('td')
    cell.textContent = arr.mistakes
    row.append(cell)
    cell = document.createElement('td')
    cell.textContent = isNaN((100 * arr.guesses) / (arr.mistakes + arr.guesses))
      ? '0'
      : Math.ceil((100 * arr.guesses) / (arr.mistakes + arr.guesses))
    row.append(cell)
    cell = document.createElement('td')
    cell.textContent = arr.category
    row.append(cell)
    const tableBody = document.querySelector('tbody')
    tableBody.append(row)
  }
}

export function resetStatistics() {
  for (const word in wordStats) {
    wordStats[word].clicks = 0
    wordStats[word].guesses = 0
    wordStats[word].mistakes = 0
  }
  createStatItems()
  setLocalStorage()
  generateStatistics()
}
