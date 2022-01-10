Feature: show/hide an event's details
  Scenario: 
    Given that the user hasn't interacted with the page
    When the user views the page
    Then all event elements are collapsed

  Scenario: 
    Given that the user is interested in an event
    When the user clicks on the event
    Then the event element expands and shows its details

  Scenario: 
    Given that the event element is expanded
    When the user is finished reading the details
    Then the user can click on the event to collapse it

