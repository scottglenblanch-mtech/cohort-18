// add event listeners to buttons
const leftButton = document.querySelector('#previous');
const rightButton = document.querySelector('#next');
const primeNumberIterator = getPrimeNumberIterator();

leftButton.addEventListener('click', handleLeftButtonClick);
rightButton.addEventListener('click', handleRightButtonClick);

function handleLeftButtonClick() {
    const newNumber = primeNumberIterator.previous()
    updateDisplayPrimeNumber(newNumber)
}

function handleRightButtonClick() {
    const newNumber = primeNumberIterator.next()
    updateDisplayPrimeNumber(newNumber)
}

function updateDisplayPrimeNumber(number) {
    const displayElement = document.querySelector('#display-prime-number');

    displayElement.textContent = number
}