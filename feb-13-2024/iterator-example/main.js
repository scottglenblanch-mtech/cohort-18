const leftButton = document.querySelector('#left')
const rightButton = document.querySelector('#right');


const iterator = getIterator()
leftButton.addEventListener('click', goLeft)
rightButton.addEventListener('click', goRight)

function goLeft() {
    iterator.previous()
}

function goRight() {
    iterator.next()
}

