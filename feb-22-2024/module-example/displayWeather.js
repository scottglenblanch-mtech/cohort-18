import { getIsCelsius } from './temperatureUnit.js'

export default async function displayWeather() {

    async function getCoordinates() {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
                resolve({ latitude, longitude })
            })
        })
    }


    async function getTemperature() {
        const { latitude, longitude } = await getCoordinates();
        const temperatureUnit = getIsCelsius() ? 'celsius': 'fahrenheit'
        const fetchUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=${temperatureUnit}`
        const response = await fetch(fetchUrl);
        const data = await response.json()

        // get current coordinate of the browser
        // get the temperature from an api

        return data.current.temperature_2m;
    }

    const element = document.querySelector('#display-temperature')
    const message = `Current temperature is ${await getTemperature()} ${getIsCelsius() ? 'C': 'F'}`

    element.textContent = message;
}