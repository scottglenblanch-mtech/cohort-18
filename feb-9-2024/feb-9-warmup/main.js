/*
User clicks on the the button which trigger an action
The action will take the input from the input element
The input text will be converted to a letter grade

Letter grades will be
A (90-100)
B (80-89.999...)
C (70-79.999...)
D (60-69.999...)
F (0 - 59.999...)

The letter grade will be displayed in the aforementioned div

If input is not a number 0 through 100 you can have a message in the div 
say 'Number input needs to be 0 to 100'
*/

document.querySelector("button").addEventListener("click", function () {
    const input = document.querySelector(".percentage-grade-input").value;
    const div = document.querySelector(".show-letter-grade");
    const percentage = parseFloat(input);
    let message;
  
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      message = "Number input needs to be 0 to 100";
    } else if (percentage >= 90) {
      message = "A";
    } else if (percentage >= 80) {
      message = "B";
    } else if (percentage >= 70) {
      message = "C";
    } else if (percentage >= 60) {
      message = "D";
    } else {
      message = "F";
    }
    div.textContent = message;
  });
  