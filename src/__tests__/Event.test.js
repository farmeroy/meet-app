import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  const eventDetails = {
    summary: mockData[0].summary,
    description: mockData[0].description,
    location: mockData[0].location,
    startTime: mockData[0].start.dateTime,
  };
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("render event title", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("renders summary text correctly", () => {
    expect(EventWrapper.find(".summary").text()).toBe(mockData[0].summary);
  });

  test("when component first loads, event state is collapsed", () => {
    expect(EventWrapper.state("isCollapsed")).toBe(true);
  });

  test("when an event is collapsed, display event summary and location", () => {
    EventWrapper.setState({ isCollapsed: true });
    expect(EventWrapper.find(".summary").text()).toBe(eventDetails.summary);
    expect(EventWrapper.find(".location").text()).toBe(eventDetails.location);
  });

  test("when user clicks on details button, isCollapsed is set to false", () => {
    EventWrapper.setState({ isCollapsed: true });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("isCollapsed")).toBe(false);
  });

  test("when an event is expanded, show the event details", () => {
    EventWrapper.setState({ isCollapsed: false });
    expect(EventWrapper.find(".eventDetails")).toHaveLength(1);
  });

  test("renders list of details of event", () => {
    EventWrapper.setState({ isCollapsed: false });
    expect(EventWrapper.find(".eventDetails li")).toHaveLength(1);
  });

  test("renders details of event correctly", () => {
    EventWrapper.setState({ isCollapsed: false });
    expect(EventWrapper.find(".description").text()).toBe(
      eventDetails.description
    );
    expect(EventWrapper.find(".startTime").text()).toBe(eventDetails.startTime);
  });

  test("If the event is not collapsed, when the user clicks, collapse event", () => {
    EventWrapper.setState({ isCollapsed: false });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("isCollapsed")).toBe(true);
  });
});
