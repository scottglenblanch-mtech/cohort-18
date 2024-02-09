/*
“Good Morning” if input is between 0-12
“Good Afternoon” if input is between 13-16
“Good Evening” if input is between 17-19
“Good Night” if input is between 20-24
*/

const button = document.querySelector('.click-to-get-greeting');
button.addEventListener('click', function() {
    const input = document.querySelector('.number-input').value;
    const inputAsNumber = parseInt(input);
    
    let message;
    if (isNaN(input) || inputAsNumber < 0 || inputAsNumber > 24) {
        message = "Number input needs to be between 0 to 24";
      } else if (inputAsNumber >= 20) {
        message = "Good Night";
      } else if (inputAsNumber >= 17) {
        message = "Good Evening";
      } else if (inputAsNumber >= 13) {
        message = "Good Afternoon";
      } else if (inputAsNumber >= 0) {
        message = "Good Morning";
      } else {
        message = "Issue with logic";
      }
      
      document.querySelector('.display-greeting').textContent = message;


})