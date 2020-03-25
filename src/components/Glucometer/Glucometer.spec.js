import React from 'react';
import { shallow, mount } from 'enzyme';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import Glucometer from './Glucometer';

describe('Glucometer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Glucometer />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

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

describe('mounted Glucometer', () => {
  let wrapper;

  beforeEach(() => wrapper = mount(<Glucometer />));

  it('calls calculateBolus when the submit key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'calculateBolus');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.key-container').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});