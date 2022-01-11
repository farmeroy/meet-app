import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from "enzyme";
import { mockData } from "../mock-data";
import App from "../App";
import Event from '../Event';
import EventList from "../EventList";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("When the user opens the page, all event details are collapsed by default", ({
    given,
    when,
    then,
  }) => {
    given("that the user hasn't interacted with the page", () => {});
    let AppWrapper;
    when("the user views the page", () => {
      AppWrapper = mount(<App />);
    });

    then("all event elements are collapsed", () => {
      AppWrapper.update();
      expect(AppWrapper.find('.eventDetails')).toHaveLength(0);
    });
  });

  test("The user can click on an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let EventWrapper; 
    let event = mockData[0];
    given("that the user is interested in an event", () => {
      EventWrapper = shallow(<Event event={event} />)
    });

    when("the user clicks on the event", () => {
      EventWrapper.find('.details-btn').simulate('click');
    });

    then("the event element expands and shows its details", () => {
      expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
    });
  });

  test("The user can close an event's details by clicking on it", ({
    given,
    when,
    then,
  }) => {
    given("that the event element is expanded", () => {});

    when("the user is finished reading the details", () => {});

    then("the user can click on the event to collapse it", () => {});
  });
});
