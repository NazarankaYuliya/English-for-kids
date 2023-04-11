import './index.html'
import './style.css'
import { generateCategory } from './js/main.js'
import { addNav } from './js/nav'
import { createStatItems, setLocalStorage } from './js/statistics.js'

generateCategory()
addNav()
createStatItems()
