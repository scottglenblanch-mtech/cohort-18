const phrase = 'Hello World!';
const timeLapse = 500;
const timeLapseInBetween = 5000;


function writeOutPhrase() {

    return new Promise(function(resolveFunction) {
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
                resolveFunction()
            }
        }, timeLapse)
    })
}

function waitSomeTime(amountOfTimeToWait) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, amountOfTimeToWait)
    })
}

writeOutPhrase()
    .then(() => waitSomeTime(timeLapseInBetween))
    .then(() => writeOutPhrase())



