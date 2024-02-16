// render the local storage
let todos = JSON.parse(localStorage.getItem('todos')) ?? [];

/*

- When the user clicks the delete on a todo item
    - that item will be removed
- When the user refreshes the page
    - the todo list will be the same as before the refresh
    - hint: look into localStorage
*/
function saveTodosToLocalStorage() {
    const todosAsString = JSON.stringify(todos);

    localStorage.setItem("todos", todosAsString);
}


function getNewElementFromTemplateElement(querySelector) {
    const templateElement = document.querySelector(querySelector);
    
    return templateElement.content.firstElementChild.cloneNode(true);
}

function getNewListElement(todoItem) {
    const newLiItem = getNewElementFromTemplateElement('#todo-list-item')
  
    newLiItem.querySelector('#delete-todo').addEventListener('click', handleClickDeleteButton);

    newLiItem.querySelector('span').textContent = todoItem.text;
    newLiItem.setAttribute('data-todoId', todoItem.id);

    return newLiItem
}

function handleClickDeleteButton(event) {
    const clickedElement = event.target;
    const todoIdToBeRemoved = Number(clickedElement.parentElement.getAttribute("data-todoId"));

    todos = todos.filter(todoItem => todoItem.id !== todoIdToBeRemoved);
    saveTodosToLocalStorage()

    renderList()
}


function getRandomId() {
    return Math.floor(Math.random() * 100);
}

function handleButtonClick() {
/*
    - When user clicks the button, 
        - take the input in the input box and display it in a list below
        - the list will be a running list, so each time the user does this it will add another todo item
        - The todo item will have a delete button next to it
*/
    const newTodoItem = {
        text: document.querySelector('input').value,
        id: getRandomId()
    }

    todos.push(newTodoItem)
    saveTodosToLocalStorage()

    renderList()

}

function renderList() {
    const ulElement = document.querySelector('ul');

    ulElement.innerHTML = '';

    todos.forEach(todoItem => {

        const newLiItem = getNewListElement(todoItem);

        ulElement.appendChild(newLiItem);
    });
}



document.querySelector('#add-todo').addEventListener('click', handleButtonClick);
renderList()



