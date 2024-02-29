const cells = Array.from(document.querySelectorAll('td'));
let countTurns = 0;

cells.forEach(function(cellItem) {
    
    cellItem.addEventListener('click', function handleClick(e) {
        const element = e.target;
        const isEmpty = e.target.innerHTML === '';

        if (isEmpty) {

            const colorForClass = countTurns % 2 === 0 ? 'red': 'blue';
            const circleClass = `circle ${colorForClass}`;
            const circleHtml = `<div class="${circleClass}"></div>`
    

            element.innerHTML = circleHtml;
            countTurns = countTurns + 1;

            if(countTurns >= 9) {
                const displayGameOverElement = document.querySelector('#display-game-over');

                displayGameOverElement.textContent = 'Game Over';
            }
        }

    })
})

function resetBoard() {
    cells.forEach(cellItem => {
        cellItem.innerHTML = ''
    })
}