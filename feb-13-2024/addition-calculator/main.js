/*
- Use a function to calculate values and return the addition of two numbers
- Make the result display on the DOM in like a div or other HTML element
- If you get extra time. Try to make it look nicer with some CSS
*/

// bind a function to button click
const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    // grab the input values
    const number1 = parseFloat(document.querySelector('#number1').value);
    const number2 = parseFloat(document.querySelector('#number2').value);
    // add them together
    const sum = number1 + number2;
    // then update the page
    const displaySumElement = document.querySelector('#sum');

    displaySumElement.textContent = sum;
});
