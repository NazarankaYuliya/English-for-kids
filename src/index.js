import './index.html';
import './style.css';
import { generateCategory } from './js/main';
import addNav from './js/nav';
import createStatItems from './js/statItem';
import {
  setLocalStorage,
  updateLocalStorage,
  wordStats,
} from './js/localStorage';

generateCategory();
addNav();

createStatItems();
updateLocalStorage('statistics', wordStats);
setLocalStorage('statistics', wordStats);
