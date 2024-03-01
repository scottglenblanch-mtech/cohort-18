const rows = Array.from(document.querySelectorAll('tr'))

let previouslyClickedStack = []

rows.forEach(function(rowItem, rowIndex) {
    const cells = Array.from(rowItem.querySelectorAll('td'));

    cells.forEach(function(cellItem, cellIndex) {
    
        cellItem.addEventListener('click', function handleClick(e) {
            const element = e.target;
            const isEmpty = e.target.innerHTML === '';
    
            if (isEmpty) {
    
                const colorForClass = previouslyClickedStack.length % 2 === 0 ? 'red': 'blue';
                const circleClass = `circle ${colorForClass}`;
                const circleHtml = `<div class="${circleClass}"></div>`
                const storedPosition = { rowIndex, cellIndex }
    
                element.innerHTML = circleHtml;

                previouslyClickedStack = [storedPosition, ...previouslyClickedStack]
    
                if(previouslyClickedStack.length >= 9) {
                    const displayGameOverElement = document.querySelector('#display-game-over');
    
                    displayGameOverElement.textContent = 'Game Over';

                }
            }
    
        })
    })
})




document.querySelector('#undo-button').addEventListener('click', function() {
    const positionToRemove = previouslyClickedStack?.[0] ?? {}

    if (positionToRemove) {
        const {rowIndex, cellIndex} = positionToRemove
        const cellItem = document.querySelector(`table tr:nth-child(${rowIndex + 1}) td:nth-child(${cellIndex + 1})`)

        if (cellItem) {
            cellItem.innerHTML = ''
        }
        

        previouslyClickedStack = previouslyClickedStack.slice(1)

    }
})

function resetBoard() {
    const cells = document.querySelectorAll('td')

    cells.forEach(cellItem => {
        cellItem.innerHTML = ''
    })

    previouslyClickedStack = []
}