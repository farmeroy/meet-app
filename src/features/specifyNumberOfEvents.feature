Feature: Specify the number of events
  Scenario: 32 events are displayed by default
      Given that the user hasn't specified a number
      When the user views the page
      Then 32 event elements are displayed

  Scenario: The user can change the number of events displayed
      Given that the user wants to see a different number of events
      When the user enters a new number in the input
      Then the user specified number of events is displayed

