let isCelsius = localStorage.getItem('isCelsius') === 'true';

async function initializePage() {
    displayGreeting()
    await displayWeather()
    initializeToggle()
}

function initializeToggle() {
    const toggleElement = document.querySelector('#temperature-unit-toggle');
    const toggleLabel = document.querySelector('#temperature-unit-label');

    toggleElement.checked = isCelsius
    toggleLabel.textContent = isCelsius ? 'Celsius': 'Farenheit'

    toggleElement.addEventListener('change', () => {
        isCelsius = !isCelsius;
        localStorage.setItem('isCelsius', `${isCelsius}`)
        toggleLabel.textContent = isCelsius ? 'Celsius': 'Farenheit'
        displayWeather()
    })

}

function displayGreeting() {

    function getGreeting() {
        const now = new Date();
        const currentHour = now.getHours();

        if (currentHour >=0 && currentHour < 12) {
            return 'Good Morning'
        } else  if (currentHour >= 12 && currentHour < 17 ) {
            return 'Good Afternoon'
        } else if (currentHour >= 17 && currentHour < 21) {
            return 'Good Evening'
        } else {
            return 'Good Night'
        }
    }

    function getDatePiece() {
        const now = new Date();
        const options = {
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
        }
        return now.toLocaleDateString('en-US', options);
    }

    function getTimePiece() {
        const now = new Date();
        const options = {
            hour: '2-digit', 
            minute: '2-digit', 
        }
        return now.toLocaleTimeString('en-US', options);
    }

    const element = document.querySelector('#display-date-and-time')
    const message = `${getGreeting()}. Today's date is ${getDatePiece()}. Time is ${getTimePiece()}`
    
    element.textContent = message;
}

async function displayWeather() {

    async function getCoordinates() {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
                resolve({ latitude, longitude })
            })
        })
    }


    async function getTemperature() {
        const { latitude, longitude } = await getCoordinates();
        const temperatureUnit = isCelsius ? 'celsius': 'fahrenheit'
        const fetchUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=${temperatureUnit}`
        const response = await fetch(fetchUrl);
        const data = await response.json()

        // get current coordinate of the browser
        // get the temperature from an api

        return data.current.temperature_2m;
    }

    const element = document.querySelector('#display-temperature')
    const message = `Current temperature is ${await getTemperature()} ${isCelsius ? 'C': 'F'}`

    element.textContent = message;
}


initializePage()