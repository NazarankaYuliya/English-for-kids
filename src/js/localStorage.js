export const wordStats = {};

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function updateLocalStorage(key, data) {
  const savedStats = localStorage.getItem(key);
  if (savedStats) {
    Object.assign(data, JSON.parse(savedStats));
  }
}
