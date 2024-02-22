import displayWeather from './displayWeather.js'
import displayGreeting from './displayGreeting.js'
import initializeToggle from './initializeToggle.js'

async function initializePage() {
    displayGreeting()
    await displayWeather()
    initializeToggle()
}

initializePage()
