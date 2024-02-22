let isCelsius = window.localStorage.getItem('isCelsius') === 'true';

function toggleCelsius() {
    isCelsius = !isCelsius
    localStorage.setItem('isCelsius', `${isCelsius}`)
}

function getIsCelsius() {
    return isCelsius
}

export {
    getIsCelsius,
    toggleCelsius,

}