<h1>Meet App</h1>
An app that allows a user to look for events in a city.
View the live deployment here: https://farmeroy.github.io/meet-app/

> ![meet app screenshot](https://github.com/farmeroy/portfolio2.0/blob/main/public/meet-app.gif)

<h3>Feature 1: Filter Events by City</h3>

* Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
  * Given user hasn’t searched for any city
  * When the user opens the app
  * Then the user should see a list of all upcoming events

* Scenario 2: User should see a list of suggestions when they search for a city.
  * Given the main page is open
  * When user starts typing in the city textbox
  * Then the user should see a list of cities (suggestions) that match what they’ve typed

* Scenario 3: User can select a city from the suggested list.
  * Given the user was typing “Berlin” in the city textbox
  * And the list of suggested cities is showing
  * When the user selects a city (e.g., “Berlin, Germany”) from the list
  * Then their city should be changed to that city (i.e., “Berlin, Germany”)
  * And the user should receive a list of upcoming events in that city

<h3>Feature 2: show/hide an event's details</h3>

* Scenario 1:
  * Given that the user hasn't interacted with the page
  * When the user views the page
  * Then all event elements are collapsed

* Scenario 2: 
  * Given that the user is interested in an event
  * When the user clicks on the event
  * Then the event element expands and shows its details

* Scenario 3: 
  * Given that the event element is expanded
  * When the user is finished reading the details
  * Then the user can click on the event to collapse it

<h3>Feature 3: Specify The Number of Events</h3>

* Scenario 1:
  * Given that the user hasn't specified a number
  * When the user views the page
  * Then 32 event elements are displayed

* Scenario 2:
  * Given that the user wants to see a different number of events
  * When thhe user enters a new number in the input
  * Then the user specified number of events is displayed

<h3>Feature 4: Use the App Offline</h3>

* Scenario 1: 
  * Given the user has accessed the app before
  * When the user loses or disconnets from the internet
  * Then the app will show cached data

* Scenario 2: 
  * Given the user has no internet access
  * When the user changes the settings
  * Then the app displays an error message

<h3>Feature 5: Data Visualization</h3>

* Scenario 1: 
  * Given that the app is open
  * When the user requests an event chart
 
<h2>User Stories</h2>

<h3>Feature 2:</h3>
  * As a user I should be able to expand or collapse event cards so I can see or hide its details.

<h3>Feature 3:</h3>
  * As a I user, I should be able to change the number of events that I want to see. If I don't care, the number should be 32.

 <h3>Feature 4:</h3>
  * As a user, I should be able to access the app offline, in case I am in a subway tunnel or have a break in connectivity. If I try to access new data, I should be shown an error so that I know it isn't possible until the connection is re-established.

<h3>Feature 5:</h3>
  * As I user, I should be able to see a chart of the number of events in a city, so I can quickly judge how active that city is. 
