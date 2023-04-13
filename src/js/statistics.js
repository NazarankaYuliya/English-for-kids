import { pageContent, pageTitle } from './main.js'
import { Card } from './Card.js'
import { createStatItems } from './statItem.js'
import { setLocalStorage } from './localStorage.js'

export const wordStats = {}

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
    <th scope="col" data-column="word" data-direction="asc">Word</th>
    <th scope="col" data-column="clicks" data-direction="asc">Clicked</th>
    <th scope="col" data-column="translation" data-direction="asc">Translation</th>
    <th scope="col" data-column="guesses" data-direction="asc">Correct</th>
    <th scope="col" data-column="mistakes" data-direction="asc">Wrong</th>
    <th scope="col" data-column="percentage" data-direction="asc">%</th>
    <th scope="col" data-column="category" data-direction="asc">Category</th>
  </tr>`

  tableHead.addEventListener('click', (event) => {
    const header = event.target.closest('th')
    if (!header) return
    const column = header.dataset.column
    const direction = header.dataset.direction
    sortStatistics(column, direction)
  })

  const tableBody = document.createElement('tbody')
  table.append(tableBody)

  generateStatisticsRow()
}

function generateStatisticsRow() {
  const statArr = JSON.parse(localStorage.getItem('statistics')) || {}

  for (const word in statArr) {
    const arr = statArr[word]
    const row = document.createElement('tr')

    let cell = document.createElement('td')
    cell.dataset.column = 'word'
    cell.dataset.value = arr.word
    cell.textContent = arr.word
    row.append(cell)

    cell = document.createElement('td')
    cell.dataset.column = 'clicks'
    cell.dataset.value = arr.clicks
    cell.textContent = arr.clicks
    row.append(cell)

    cell = document.createElement('td')
    cell.dataset.column = 'translation'
    cell.dataset.value = arr.translation
    cell.textContent = arr.translation
    row.append(cell)

    cell = document.createElement('td')
    cell.dataset.column = 'guesses'
    cell.dataset.value = arr.guesses
    cell.textContent = arr.guesses
    row.append(cell)

    cell = document.createElement('td')
    cell.dataset.column = 'mistakes'
    cell.dataset.value = arr.mistakes
    cell.textContent = arr.mistakes
    row.append(cell)

    cell = document.createElement('td')
    cell.dataset.column = 'percentage'
    cell.dataset.value = arr.percentage

    cell.textContent = isNaN((100 * arr.guesses) / (arr.mistakes + arr.guesses))
      ? '0'
      : Math.ceil((100 * arr.guesses) / (arr.mistakes + arr.guesses))
    row.append(cell)

    cell = document.createElement('td')
    cell.dataset.column = 'category'
    cell.dataset.value = arr.category
    cell.textContent = arr.category
    row.append(cell)

    const tableBody = document.querySelector('tbody')
    tableBody.append(row)
  }
}

function resetStatistics() {
  for (const word in wordStats) {
    wordStats[word].clicks = 0
    wordStats[word].guesses = 0
    wordStats[word].mistakes = 0
  }
  createStatItems()
  setLocalStorage()
  generateStatistics()
}

function getCellValue(cell) {
  let value = cell.dataset.value || cell.textContent.trim()
  if (!isNaN(value)) {
    value = Number(value)
  }
  return value
}

function sortRows(rows, column, direction) {
  return rows.sort((rowA, rowB) => {
    const cellA = rowA.querySelector(`td[data-column="${column}"]`)
    const cellB = rowB.querySelector(`td[data-column="${column}"]`)
    const valueA = getCellValue(cellA)
    const valueB = getCellValue(cellB)
    if (valueA < valueB) {
      return direction === 'asc' ? -1 : 1
    } else if (valueA > valueB) {
      return direction === 'asc' ? 1 : -1
    } else {
      return 0
    }
  })
}

function updateTable(tableBody, rows) {
  tableBody.innerHTML = ''
  rows.forEach((row) => tableBody.appendChild(row))
}

function updateHeader(header, direction) {
  header.dataset.direction = direction === 'asc' ? 'desc' : 'asc'
}

function sortStatistics(column, direction) {
  const tableBody = document.querySelector('tbody')
  const rows = Array.from(tableBody.querySelectorAll('tr'))
  const sortedRows = sortRows(rows, column, direction)
  updateTable(tableBody, sortedRows)
  const header = document.querySelector(`th[data-column="${column}"]`)
  updateHeader(header, direction)
}

export function repeatDifficultWords() {
  const sortedWords = Object.entries(wordStats).sort(
    (a, b) => b[1].mistakes - a[1].mistakes
  )
  const numWordsToRepeat = 8
  const minMistakes = 1

  const wordsToRepeat = sortedWords
    .slice(0, numWordsToRepeat)
    .filter(([word, current]) => current.mistakes >= minMistakes)

  if (wordsToRepeat.length > 0) {
    const cards = wordsToRepeat.map(([word, current]) =>
      new Card(
        current.word,
        current.translation,
        current.image,
        current.audioSrc
      ).generateHTML()
    )
    const cardsHTML = cards.join('')

    pageContent.innerHTML = cardsHTML
    pageTitle.textContent = 'Repeat'
  } else {
    pageContent.innerHTML = '<p>No words to repeat.</p>'
    pageTitle.textContent = 'Repeat'
  }
}
