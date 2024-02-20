const phrase = 'Hello World!';
const timeLapse = 500;
const timeLapseInBetween = 5000;


function writeOutPhrase(callbackWhenFinished) {
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
            callbackWhenFinished()
        }
    }, timeLapse)
}

writeOutPhrase(function callbackWhenFinished() {
    setTimeout(() => {
        writeOutPhrase(function() {
            console.log('now we are done, like really done!')
        })
    }, timeLapseInBetween)

})



