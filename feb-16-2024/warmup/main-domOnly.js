/*

- When the user clicks the delete on a todo item
    - that item will be removed
- When the user refreshes the page
    - the todo list will be the same as before the refresh
    - hint: look into localStorage
*/
function getNewElementFromTemplateElement(querySelector) {
    const templateElement = document.querySelector(querySelector);
    
    return templateElement.content.firstElementChild.cloneNode(true);
}

function handleClickDeleteButton(event) {
    const clickedElement = event.target;

    clickedElement.parentNode.remove();
}

function getNewListElement() {
    const userInput = document.querySelector('input').value;
    const newLiItem = getNewElementFromTemplateElement('#todo-list-item')
  
    newLiItem.querySelector('button').addEventListener('click', handleClickDeleteButton);

    newLiItem.querySelector('span').textContent = userInput;

    return newLiItem
}


function handleButtonClick() {
/*
    - When user clicks the button, 
        - take the input in the input box and display it in a list below
        - the list will be a running list, so each time the user does this it will add another todo item
        - The todo item will have a delete button next to it
*/

  const ulElement = document.querySelector('ul');
  const newLiItem = getNewListElement()

  ulElement.appendChild(newLiItem)
}

document.querySelector('button').addEventListener('click', handleButtonClick);


