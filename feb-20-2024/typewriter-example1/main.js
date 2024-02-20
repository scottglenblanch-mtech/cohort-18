const phrase = 'Hello World!';
const timeLapse = 500;
let i = 0;

const intervalId = setInterval(function() {
    const nextLetter = phrase[i];
    const displayElement = document.querySelector('#display-phrase');

    if (nextLetter) {
        displayElement.textContent = displayElement.textContent + nextLetter;
        i = i + 1;
    } else {
        console.log(intervalId, 'finished with interval')
        clearInterval(intervalId)
    }
}, timeLapse)