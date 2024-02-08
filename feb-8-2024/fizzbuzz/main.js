function updateMessage(message) {
    const divElement = document.querySelector('.message');

    divElement.textContent = message;
}

function getMessage(number) {

/*
Write a javascript program that takes a number and prints out “Fizz” 
if the number is a multiple of 3 and “Buzz” 
if it is a multiple of 5. 
For numbers which are multiples of both three and five print “FizzBuzz”. For numbers that are neither just print the number.
Examples:
25 would print out "Buzz"
15 would print out "FizzBuzz"
34 would print out 34

*/
    
    if (number % 5 === 0 && number  % 3 === 0) {
        return 'FizzBuzz'
    } else if (number % 3 === 0) {
        return 'Fizz'
    } else if (number % 5 === 0) {
        return 'Buzz'
    } else {
        return number;
    }
}

function isInputANumber(inputValue) {
    return inputValue.length > 0 && !isNaN(inputValue);
}

function handleInputChange(e) {
    const inputValue = e.target.value;
    
    if (isInputANumber(inputValue)) {
        const inputValueAsNumber = Number(inputValue);
        const newMessage = getMessage(inputValueAsNumber);
        updateMessage(newMessage);  
    } else {
        updateMessage('')
    }
}

function addEventListenerToInput() {
    const inputElement = document.querySelector('input');

    inputElement.addEventListener('input', handleInputChange)
}

function initializePage() {
    addEventListenerToInput()
}

initializePage()