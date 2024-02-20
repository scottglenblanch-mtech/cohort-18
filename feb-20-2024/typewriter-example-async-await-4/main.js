const phrase = 'Hello World!';
const timeLapse = 500;
const timeLapseInBetween = 5000;

function waitSomeTime(amountOfTimeToWait) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, amountOfTimeToWait)
    })
}

async function writeOutPhrase() {

    for(let i = 0; i < phrase.length; i++) {
        const nextLetter = phrase[i];
        const displayElement = document.querySelector('#display-phrase');
        displayElement.textContent = displayElement.textContent + nextLetter;
        
        await waitSomeTime(timeLapse);
    }
}


async function runStuff() {
    await writeOutPhrase();
    await waitSomeTime(timeLapseInBetween);
    await writeOutPhrase()
}

runStuff();



