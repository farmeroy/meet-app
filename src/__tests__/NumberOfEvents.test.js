import React from 'react';
import {shallow} from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  
  beforeAll(()=>{
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
  });

  test('default input value is 32', () => {
    expect(NumberOfEventsWrapper.find('.numberInput').prop('value')).toBe('32');
  });
})
