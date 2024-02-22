# Warmup - Weather App

- Create a date and weather app
- When the page loads
  - show a greeting
    - {Greeting}. Today's Date is {month as abbreviation} {day}, {4 digit year}. Time is {hour:minutes}{am/pm}.
    - Greeting Specs
        - 12am to 11:59am it is 'Good Morning'
        - 12pm to 4:49pm it is 'Good Afternoon'
        - 5pm to 8:59pm it is 'Good Evening'
        - 9pm to 11:59pm it is 'Good Night' 
    - example - `Good Morning. Today's Date Feb 22, 2024. Time is 7:30am.`
  - show the temperature
    - Current temperature is {temperature}
    - temperature will originally be in Farenheit
  - Show a toggle button below this
    - button will toggle between Celsius and Farenheit

Examples
- Page will look something like
```
Good Morning. Today's Date Feb 22, 2024. Time is 7:30am
Current temperature is 35°F
```

```
Good Afternoon. Today's Date Feb 22, 2024. Time is 1:30pm
Current temperature is 5°C
```

## User Actions
- When user clicks the toggle button the temperature will toggle from Farenheit to Celsius
- When user refreshes the page the page will remember the state of the toggle button being either Farenheit or Celsius

## Page Refresh
- The page will do the same as the load. However the toggle button if Celsius prior will be Celsius and the temperature will show in Celsius

## Resources
- To get current location
  - use Geolocation from the browser
  - https://stackoverflow.com/questions/2577305/get-gps-location-from-the-web-browser
  - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
- Weather API to use
  - https://open-meteo.com/en/docs