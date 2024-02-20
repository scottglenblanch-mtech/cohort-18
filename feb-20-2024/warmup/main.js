let isPlayerOne = true;

function createTable(width, height) {
    /*
        create row, then the cells/
    */
    const tableContainer = document.querySelector('#table-container');
    const tableElement = document.createElement('table');

    for(let rowPosition = 0; rowPosition < height; rowPosition++) {
        const trElement = document.createElement('tr');
        for(let columnPosition = 0; columnPosition < width; columnPosition++) {
            const tdElement = getTableDataElement();

            trElement.appendChild(tdElement);

        }
        tableElement.appendChild(trElement);
    }
    tableContainer.innerHTML = '';
    tableContainer.appendChild(tableElement);
}

function getTableDataElement() {
    const tdElement = document.createElement('td');

    tdElement.addEventListener('click', handleClickTableDataElement)

    return tdElement;
}

function handleClickTableDataElement(event) {
    const tdClicked = event.target;
    const newCircleElement = getNewCircleElement()

    tdClicked.appendChild(newCircleElement);

    isPlayerOne = !isPlayerOne;
}

function getNewCircleElement() {
    const newCircleElement = document.createElement('div');
    const colorCssClass = isPlayerOne ? 'red': 'blue'

    newCircleElement.classList.add('circle');
    newCircleElement.classList.add(colorCssClass)

    return newCircleElement;
}

function handleButtonClick() {
    const width = parseInt(document.querySelector('input[name="width"]').value)
    const height = parseInt(document.querySelector('input[name="height"]').value)

    createTable(width, height)
}


document.querySelector('button').addEventListener('click', handleButtonClick);