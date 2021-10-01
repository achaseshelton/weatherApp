# Weather App

User wants to know the weather in their current location. They input their current zip code into the search tab and click the button to get their current city, temperature, weather condtions, and an image based on the current temperature.

### Requirements
1. Execute an axios call using an api key to get the weather based on the zip code entered by the user.
2. Update the page after the call has been executed with the info, in the event of an error alert the user that the request did not go through.
3. Style the page using bootstrap.

### Need to figure out
1. Maybe a function that runs the axios call when the user clicks the get weather button or how to make that happen?
2. How to parse through the data retrieved by the call to only take out the info needed.
    - What form is the parsed data in?
    - Can i set parsed data to the variables i need.

### Variables and Functions

#### Variables
1. pages => variable to store the state of the page, hide the main div when a page opens, hide the error div unless there is an error.
2. api => variable to store the api key for the axios call based on the zip code entered in the search bar.
3. city => linked to the city div, equal to the city name data in the json file, if pages == 2 populate in the city div.
4. kelvin => linked to the kelvin div, equal to the temp data in the json file, if pages == 2 populate in the kelvin div.
5. celcius => linked to the celcius div, equal to the temp data in the json file converted to the celcius rounded, if pages == 2 populate in the celcius div.
6. farenheit => linked the farenheit div, equal to the temp data in the json file converted to farenheit rounded, if pages == 2 populate in the farenheit div.
7. conditions => linked to the conditions div, equal to ??? data in the json file, if pages == 2 populate in the conditions div.
8. image => linked to the image div, set a different image equal to this variable based on the current weather conditions in the json file. if pages == 2
9. zipcode => zip code variable bassed on what is entered into the search bar.
10. error => connected to error div. updates the page to display the error message if the call is unsuccesful.

#### Functions

1. INIT => onLoad sets the page state, hides main and error containers.
2. ??? call function => executes the axios call when the user clicks the get weather button
    - what kind of data do i get back?
3. ??? parse data function => do i need a function to parse through the data to extract what i need.
4. display weather function => on successful call back sets the variables to diplay the correct information parsed from the json file.
5. error function => in the event of a catch displays the error message to the user on the page.
6. pickImage function => determines what image to display based on the condition information returned from the json file, use in the display weather function

### Example

START

INIT() =>
CREATE api variable
CREATE city variable
CREATE kelvin variable
CREATE celcius variable
CREATE farenheit variable
CREATE conditions variable
CREATE image variable
CREATE create error variable
CREATE zipcode variable
sets the main div to display none
sets the error div to display none

call function => on button click executes the axios call using the api key to get back the json file.

parse function => parses through the json file to get the temperature, conditions, city name.

update weather function => used in a succesful axios call. sets the main div to display block. sets the error div to display none. takes the info parsed from the json file and uses it to supply the variables with what to show on the page.

pickImage function => helps inside the update weather function to pick the correct image to display based on the weather conditions in the json file

error function => used in a catch on the axios call. sets the error div to display block.