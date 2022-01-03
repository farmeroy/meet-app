import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event eventData={mockData[0]} />);
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

  test("when user clicks on a collapsed event, isCollapsed is set to false", () => {
    EventWrapper.setState({ isCollapsed: true });
    EventWrapper.find(".Event").simulate("click");
    expect(EventWrapper.state("isCollapsed")).toBe(false);
  });

  test("when an event is expanded, show the event details", () => {
    EventWrapper.setState({ isCollapsed: false });
    expect(EventWrapper.find(".eventDetails")).toHaveLength(1);
  });

  test("renders details of event correctly", () => {

  })
});
