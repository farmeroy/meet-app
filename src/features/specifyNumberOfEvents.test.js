import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import { mockData } from "../mock-data";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("32 events are displayed by default", ({ given, when, then }) => {
    let AppWrapper;
    const defaultEventsNumber = mockData.length < 32 ? mockData.length : 32;
    given("that the user hasn't specified a number", () => {});

    when("the user views the page", () => {
      AppWrapper = mount(<App />);
    });

    then("32 event elements are displayed", () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(defaultEventsNumber);
    });
  });

  test("The user can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper = mount(<App />);
    given("that the user wants to see a different number of events", () => {});

    when("the user enters a new number in the input", () => {
      AppWrapper.find('.numberInput').simulate('change', {target: {value: 1 }
    });
  });
    then("the user specified number of events is displayed", () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(1);
    });
});
});
