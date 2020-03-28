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

  // it('should render the Display and Keypad Components', () => {
  //   expect(wrapper.containsAllMatchingElements([
  //     <Display displayValue={wrapper.instance().state.displayValue}/>,
  //     <Keypad 
  //       buttons={wrapper.instance().state.buttons}
  //       calculateBolus={wrapper.instance().calculateBolus}
  //     />
  //   ])).toEqual(true);
  // });
});

describe('mounted Glucometer', () => {
  let wrapper;

  beforeEach(() => wrapper = mount(<Glucometer />));

  // it('calls calculateBolus when the submit key is clicked', () => {
  //   const spy = jest.spyOn(wrapper.instance(), 'calculateBolus');
  //   wrapper.instance().forceUpdate();
  //   expect(spy).toHaveBeenCalledTimes(0);
  //   wrapper.find('.key-container').simulate('click');
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
});

describe('updateDisplay', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Glucometer/>));

  it('updates displayValue', () => {
    wrapper.instance().updateDisplay(6);
    expect(wrapper.state('displayValue')).toEqual('6 units');
  });

  it('updates displayValue to the argument passed to it', () => {
    wrapper.instance().updateDisplay(3);
    expect(wrapper.state('displayValue')).toEqual('3 units');
  });

  it('should add "units" to the end of the display value', () => {
    wrapper.instance().updateDisplay(8);
    expect(wrapper.state('displayValue')).toEqual("8 units");
  });

  it('should make "ERROR" the display value when "Infinity" is passed as an argument', () => {
    wrapper.instance().updateDisplay('Infinity');
    expect(wrapper.state('displayValue')).toEqual("ERROR");
  });
});

describe('calculateBolus', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Glucometer/>));

  it('should divide the ratio(2) by the amount of carbs(6)', () => {
    wrapper.instance().calculateBolus(6, 2, true);
    expect(wrapper.state('displayValue')).toEqual("3 units");
  });

  it('should round down when the result is a float', () => {
    wrapper.instance().calculateBolus(7, 2, true);
    expect(wrapper.state('displayValue')).toEqual("3 units");
  });

  it('should display "ERROR" if the ratio is "0"', () => {
    wrapper.instance().calculateBolus(2, 0, true);
    expect(wrapper.state('displayValue')).toEqual("ERROR");
  });

});
