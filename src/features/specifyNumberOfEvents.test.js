import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from "enzyme";
import { mockData } from "../mock-data";
import App from "../App";
import Event from "../Event";
import EventList from "../EventList";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("32 events are displayed by default", ({ given, when, then }) => {
    given("that the user hasn't specified a number", () => {});

    when("the user views the page", () => {});

    then(/^(\d+) event elements are displayed$/, (arg0) => {});
  });

  test("The user can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    given("that the user wants to see a different number of events", () => {});

    when("the user enters a new number in the input", () => {});

    then("the user specified number of events is displayed", () => {});
  });
});
