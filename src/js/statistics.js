import Card from './card';
import createStatItems from './statItem';
import { setLocalStorage, wordStats } from './localStorage';

const pageContent = document.querySelector('.page-content');
const pageTitle = document.querySelector('.page-title');

function createStatsCotainer() {
  const statsContainer = document.createElement('div');
  statsContainer.classList.add('stats-container');

  const statsHeader = document.createElement('div');
  statsHeader.classList.add('stats-header');

  const statsRowHeader = document.createElement('div');
  statsRowHeader.classList.add('stats-row');
  statsRowHeader.innerHTML = `
    <div class="stats-item stats-item-word">En <span class="sort-indicator">&#x25B2</span></div>
    <div class="stats-item stats-item-clicks">Clicks </div>
    <div class="stats-item stats-item-translation">Ru</div>
    <div class="stats-item stats-item-guesses">Right</div>
    <div class="stats-item stats-item-mistakes">Wrong </div>
    <div class="stats-item stats-item-percentage">%</div>
    <div class="stats-item stats-item-category">Group</div>
  `;

  const statsBody = document.createElement('div');
  statsBody.classList.add('stats-body');

  statsHeader.append(statsRowHeader);
  statsContainer.append(statsHeader, statsBody);

  return statsContainer;
}

function createStatsItem(itemValue, itemClass) {
  const statsItem = document.createElement('div');
  statsItem.classList.add('stats-item', itemClass);
  statsItem.textContent = itemValue || '0';
  return statsItem;
}

function createStatsRow() {
  const statArr = JSON.parse(localStorage.getItem('statistics')) || {};

  const statsBody = document.querySelector('.stats-body');
  const fragment = new DocumentFragment();

  Object.entries(statArr).forEach(([word, stat]) => {
    const statRow = document.createElement('div');
    statRow.className = 'stats-row';

    statRow.append(
      createStatsItem(word, 'stats-item-word'),
      createStatsItem(stat.clicks ?? 0, 'stats-item-clicks'),
      createStatsItem(stat.translation, 'stats-item-translation'),
      createStatsItem(stat.guesses ?? 0, 'stats-item-guesses'),
      createStatsItem(stat.mistakes ?? 0, 'stats-item-mistakes'),
      createStatsItem(
        (stat.guesses ?? 0) + (stat.mistakes ?? 0) > 0
          ? `${Math.round(
              (stat.guesses / (stat.guesses + stat.mistakes)) * 100
            )}`
          : '0',
        'stats-item-percentage'
      ),
      createStatsItem(stat.category, 'stats-item-category')
    );

    fragment.append(statRow);
  });

  statsBody.append(fragment);
}

function createStatsButtons() {
  const statsButtons = document.createElement('div');
  statsButtons.classList.add('stats-buttons');

  const statsRepeat = document.createElement('button');
  statsRepeat.classList.add('stats-repeat', 'btn');
  statsRepeat.textContent = 'Repeat difficult words';

  const statsReset = document.createElement('button');
  statsReset.classList.add('stats-reset', 'btn');
  statsReset.textContent = 'Reset';

  statsButtons.append(statsRepeat, statsReset);

  return statsButtons;
}

function createStatsWrapper() {
  const statsWrapper = document.createElement('div');
  statsWrapper.classList.add('stats');

  const statsButtons = createStatsButtons();
  const statsContainer = createStatsCotainer();

  statsWrapper.append(statsButtons, statsContainer);
  pageContent.append(statsWrapper);
}

function sortStatistics(column, ascending) {
  const statsBody = document.querySelector('.stats-body');
  const rows = Array.from(statsBody.children);
  const sortType =
    column === 'word' || column === 'translation' || column === 'category'
      ? 'text'
      : 'number';

  rows.sort((rowA, rowB) => {
    const valueA = rowA.querySelector(`.stats-item-${column}`).textContent;
    const valueB = rowB.querySelector(`.stats-item-${column}`).textContent;
    let comparison = 0;

    if (sortType === 'text') {
      comparison = valueA.localeCompare(valueB);
    } else if (sortType === 'number') {
      comparison = Number(valueA) - Number(valueB);
    }

    return ascending ? comparison : -comparison;
  });

  statsBody.innerHTML = '';
  rows.forEach((row) => statsBody.appendChild(row));
}

function repeatDifficultWords() {
  const sortedWords = Object.entries(wordStats).sort(
    (a, b) => b[1].mistakes - a[1].mistakes
  );
  const numWordsToRepeat = 8;
  const minMistakes = 1;

  const wordsToRepeat = sortedWords
    .slice(0, numWordsToRepeat)
    .filter(([, current]) => current.mistakes >= minMistakes);

  const cardsHTML = wordsToRepeat.length
    ? wordsToRepeat
        .map(([, current]) => new Card({ ...current }).generateCardHTML())
        .join('')
    : '<p>No words to repeat.</p>';

  pageContent.innerHTML = cardsHTML;
  pageTitle.textContent = 'Repeat';
}

function resetStatistics() {
  Object.keys(wordStats).forEach((word) => {
    wordStats[word].clicks = 0;
    wordStats[word].guesses = 0;
    wordStats[word].mistakes = 0;
  });
  createStatItems();
  setLocalStorage('statistics', wordStats);
  generateStatistics();
}

function addListeners() {
  const statsButtons = document.querySelector('.stats-buttons');

  statsButtons.addEventListener('click', (e) => {
    const repeat = e.target.closest('.stats-repeat');
    const reset = e.target.closest('.stats-reset');

    if (repeat) repeatDifficultWords();
    if (reset) resetStatistics();
  });

  const statsHeader = document.querySelector('.stats-header');

  statsHeader.addEventListener('click', (e) => {
    const headerCell = e.target.closest('.stats-item');
    if (!headerCell) return;

    const column = headerCell.classList[1].replace('stats-item-', '');
    const isAscending = headerCell.classList.contains('asc');

    sortStatistics(column, !isAscending);

    const sortIndicator = statsHeader.querySelector('.sort-indicator');
    if (sortIndicator) sortIndicator.remove();
    headerCell.classList.toggle('asc');
    headerCell.insertAdjacentHTML(
      'beforeend',
      `
      <span class="sort-indicator">
        ${isAscending ? '&#x25B2;' : '&#x25BC;'}
      </span>
    `
    );
  });
}

export default function generateStatistics() {
  pageTitle.textContent = 'Statistics';
  pageContent.innerHTML = '';

  createStatsWrapper();
  createStatsRow();
  addListeners();
}
