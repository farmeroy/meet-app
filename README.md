<h1>Meet App</h1>


   <h2>Feature 1: Filter Events by City</h2>
   * Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
   * Scenario 2: User should see a list of suggestions when they search for a city.
   * Scenario 3: User can select a city from the suggested list.
  <h2>Feature 2: show/hide an event's details</h2>
* Scenario 1: 
   * Given that the user hasn't interacted with the page
   * When the user views the page
   * Then all event elements are collapsed

* Scenario 2: Given that the user is interested in an event
   * When the user clicks on the event
   * Then the event element expands and shows its details

* Scenario 3: Given that the event element is expanded
   * When the user is finished reading the details
   * Then the user can click on the event to collapse it

<h2>FEATURE 3: SPECIFY THE NUMBER OF EVENTS</h2>
* Scenario 1: Given that the user hasn't specified a number
   * When the user views the page
   * Then 32 event elements are displayed
* Scenario 2: Given that the user wants to see a different number of events
  * When thhe user enters a new number in the input
  * Then the user specified number of events is displayed

<h2>FEATURE 4: USE THE APP OFFLINE</h2>
* Scenario 1: Given the user has accessed the app before
              When the user loses or disconnets from the internet
              Then the app will show cached data
* Scenario 2: Given the user has no internet access
              When the user changes the settings
              Then the app displays an error message

FEATURE 5: DATA VISUALIZATION
* Scenario 1: Given that the app is open
              When the user requests an event chart
 
