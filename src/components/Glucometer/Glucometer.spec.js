import React from 'react';
import { shallow } from 'enzyme';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import Glucometer from './Glucometer';

describe('Glucometer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Glucometer />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display and Keypad Components', () => {
    expect(wrapper.containsAllMatchingElements([
      <Display displayValue={wrapper.instance().state.displayValue}/>,
      <Keypad buttons={wrapper.instance().state.buttons}/>
    ])).toEqual(true);
  });
});