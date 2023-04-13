import './index.html'
import './style.css'
import { generateCategory } from './js/main.js'
import { addNav } from './js/nav'
import { createStatItems } from './js/statItem.js'
import { updateLocalStorage, setLocalStorage } from './js/localStorage.js'

generateCategory()
addNav()
createStatItems()
updateLocalStorage()
setLocalStorage()
