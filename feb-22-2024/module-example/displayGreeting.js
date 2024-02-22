export default function displayGreeting() {

    function getGreeting() {
        const now = new Date();
        const currentHour = now.getHours();

        if (currentHour >=0 && currentHour < 12) {
            return 'Good Morning'
        } else  if (currentHour >= 12 && currentHour < 17 ) {
            return 'Good Afternoon'
        } else if (currentHour >= 17 && currentHour < 21) {
            return 'Good Evening'
        } else {
            return 'Good Night'
        }
    }

    function getDatePiece() {
        const now = new Date();
        const options = {
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
        }
        return now.toLocaleDateString('en-US', options);
    }

    function getTimePiece() {
        const now = new Date();
        const options = {
            hour: '2-digit', 
            minute: '2-digit', 
        }
        return now.toLocaleTimeString('en-US', options);
    }

    const element = document.querySelector('#display-date-and-time')
    const message = `${getGreeting()}. Today's date is ${getDatePiece()}. Time is ${getTimePiece()}`
    
    element.textContent = message;
}