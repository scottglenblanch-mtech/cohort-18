/*
- Create a site that will be display either
'Good Morning', 'Good Afternoon', 'Good Evening', or 'Good Night'

- 12am to 11:59am it is 'Good Morning'
- 12pm to 4:49pm it is 'Good Afternoon'
- 5pm to 8:59pm it is 'Good Evening'
- 9pm to 11:59pm it is 'Good Night' 

This will display when the page loads
Use the machine's time. 
Hint: Look into the Date object in JavaScript
*/


const elementToUpdate = document.querySelector('#display-greeting')
const dateRightNow = new Date()
const currentHour = dateRightNow.getHours();
let greeting;

if (currentHour >=0 && currentHour < 12) {
    greeting = 'Good Morning'
} else  if (currentHour >= 12 && currentHour < 17 ) {
    greeting = 'Good Afternoon'
} else if (currentHour >= 17 && currentHour < 21) {
    greeting = 'Good Evening'
} else {
    greeting = 'Good Night'
}


elementToUpdate.textContent = greeting;