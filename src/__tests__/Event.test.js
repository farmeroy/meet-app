import React from 'react';
import {shallow} from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event eventData={mockData[0]}/>);
  });
  
  test("render event title", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("renders summary text correctly", () => {
      expect(EventWrapper.find('.summary').text()).toBe(mockData[0].summary)
  });

  test('when component first loads, event state is collapsed', () => {
    expect(EventWrapper.state('isCollapsed')).toBe(true);
  });

});
