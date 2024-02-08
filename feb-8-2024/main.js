// add event listener to the button
// -  with event listener update the click counter *
// - after updating the click counter
//   - update the text in the div

let counter = 0;

function updateMessage() {

    const divElementWithMessage = document.querySelector('.count-message');

    const newCountMessage = 'Click Count: ' + counter;

    divElementWithMessage.textContent = newCountMessage
}

function handleButtonClick() {
    counter = counter + 1;
    
    updateMessage()
}

function addEventListenerToTheButton() {
    const buttonElement = document.querySelector('button');

    buttonElement.addEventListener('click', handleButtonClick)
}

addEventListenerToTheButton();