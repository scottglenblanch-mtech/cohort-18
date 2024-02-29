let inputStack = []

// add listener to button add to list
document.querySelector('#add-to-list')
    .addEventListener('click', () => {
        console.log("asdf")
        const input = document.querySelector('input');
        const value = input.value
    
        inputStack = [value, ...inputStack]

        renderInputs()
    })

document.querySelector('#undo')
    .addEventListener('click', () => {
        inputStack = inputStack.slice(1)

        renderInputs()
    })


function renderInputs() {
    const copyOfInputStack = inputStack.slice(0);
    let html = ''

    copyOfInputStack.sort();

    copyOfInputStack.forEach((inputItem) => {
        html += `<li>${inputItem}</li>`
    })

    document.querySelector('ul').innerHTML = html;
}
// add listener to undo