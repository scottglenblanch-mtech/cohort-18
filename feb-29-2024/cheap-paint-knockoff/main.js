let shapesStack = []

document.querySelector('.display')
    .addEventListener('click', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
    
        shapesStack = [{ x, y }, ...shapesStack]

        renderInputs()
    })

document.querySelector('#undo')
    .addEventListener('click', () => {
        shapesStack = shapesStack.slice(1)

        renderInputs()
    })


function renderInputs() {

    let html = ''

    shapesStack.forEach(({x, y}) => {
        html += `<div class="circle" style="top: ${y}px; left: ${x}px"></div>`
    })
    
    document.querySelector('.display').innerHTML = html;
    
}