// when the input changes do the following
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function runOnInputChange() {
    const inputElement = document.querySelector('input');
    // - get the input's value
    const inputValue = inputElement.value;
    const backwardsElement = document.querySelector('#backwards');
    const inputValueAsBackwards = reverseString(inputValue);
    // - update the backwards text in the div

    backwardsElement.textContent = inputValueAsBackwards;
}

function initializeStuffForInput() {
    const inputElement = document.querySelector('input');

    inputElement.addEventListener('input', runOnInputChange)
}

function initializePage() {
    console.log('initialize page is running')
    initializeStuffForInput()

}

initializePage()