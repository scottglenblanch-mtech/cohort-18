function createTable(width, height) {
    /*
        create row, then the cells/
    */
    const tableContainer = document.querySelector('#table-container');
    const tableElement = document.createElement('table');

    for(let rowPosition = 0; rowPosition < height; rowPosition++) {
        const trElement = document.createElement('tr');
        for(let columnPosition = 0; columnPosition < width; columnPosition++) {
            const tdElement = document.createElement('td');
            const cellText = `x: ${columnPosition}, y: ${rowPosition}`

            tdElement.classList.add('font');
            tdElement.textContent = cellText;

            trElement.appendChild(tdElement);

        }
        tableElement.appendChild(trElement);
    }
    tableContainer.innerHTML = '';
    tableContainer.appendChild(tableElement);
}

function handleButtonClick() {
    const width = parseInt(document.querySelector('input[name="width"]').value)
    const height = parseInt(document.querySelector('input[name="height"]').value)

    createTable(width, height)
}


document.querySelector('button').addEventListener('click', handleButtonClick);