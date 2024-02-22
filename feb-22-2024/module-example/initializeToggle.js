import { getIsCelsius, toggleCelsius } from './temperatureUnit.js'

export default function initializeToggle() {
    const toggleElement = document.querySelector('#temperature-unit-toggle');
    const toggleLabel = document.querySelector('#temperature-unit-label');

    toggleElement.checked = getIsCelsius()
    toggleLabel.textContent = getIsCelsius() ? 'Celsius': 'Farenheit'

    toggleElement.addEventListener('change', () => {
        toggleCelsius()

        toggleLabel.textContent = getIsCelsius() ? 'Celsius': 'Farenheit'
        displayWeather()
    })

}