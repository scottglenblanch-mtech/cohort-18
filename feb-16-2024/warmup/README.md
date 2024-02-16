# Warmup

Today's warmup will be a small piece of the Todo List project

## Specifications

HTML
- Input box
- Button
- unordered list
    - will start as empty

User Actions

- When user clicks the button, 
    - take the input in the input box and display it in a list below
    - the list will be a running list, so each time the user does this it will add another todo item
    - The todo item will have a delete button next to it
- When the user clicks the delete on a todo item
    - that item will be removed
- When the user refreshes the page
    - the todo list will be the same as before the refresh
    - hint: look into localStorage


## Post Warmup Notes

- main.js file uses the 'data driven approach'
- main-domOnly.js shows only manipulating the DOM without using the 'data driven approach'
- both approaches work, but data driven gives us the capability to store the app's state in localStorage
