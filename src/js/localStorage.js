import { wordStats } from './statistics'

export function updateLocalStorage() {
  const savedStats = localStorage.getItem('statistics')
  if (savedStats) {
    Object.assign(wordStats, JSON.parse(savedStats))
  }
}

export function setLocalStorage() {
  localStorage.setItem('statistics', JSON.stringify(wordStats))
}
