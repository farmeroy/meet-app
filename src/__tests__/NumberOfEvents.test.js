import React from 'react';
import {shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  
  beforeAll(()=>{
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
  });

  test('default input value is the default state', () => {
    const defaultNumber = NumberOfEventsWrapper.state('numberInputValue');
    expect(NumberOfEventsWrapper.find('.numberInput').prop('value')).toBe(defaultNumber);
  });

  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({numberInputValue: '32'});
    NumberOfEventsWrapper.find('.numberInput').simulate('change', {target: {value: "18"}});
    expect(NumberOfEventsWrapper.state('numberInputValue')).toEqual("18");
  })
})


