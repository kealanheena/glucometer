import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../Form/Form'
import Glucometer from './Glucometer';

describe('Glucometer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Glucometer />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Form Component', () => {
    expect(wrapper.containsMatchingElement(
      <Form
        submitHandler={wrapper.instance().calculateBolus}
        carbs={wrapper.instance().state.carbs}
        ratio={wrapper.instance().state.ratio}
        carbsChangeHandler={wrapper.instance().setCarbs}
        ratioChangeHandler={wrapper.instance().setRatio}
        displayValue={wrapper.instance().state.displayValue} 
      />
    )).toEqual(true);
  });
});

describe('mounted Glucometer', () => {
  let wrapper;

  beforeEach(() => wrapper = mount(<Glucometer />));

  it('should update the state of carbs when the carbs input is changed', () => {
    const input = wrapper.find('input').first();
    input.simulate('change', { target: { value: 10 } })
    expect(wrapper.state('carbs')).toEqual(10);
  });

  it('should update the state of ratios when the ratio input is changed', () => {
    const input = wrapper.find('input').at(1);
    input.simulate('change', { target: { value: 6 } })
    expect(wrapper.state('ratio')).toEqual(6);
  });

  // it('calls calculateBolus when the submit key is clicked', () => {
  //   const spy = jest.spyOn(wrapper.instance(), 'updateDisplay');
  //   wrapper.instance().forceUpdate(); 
  //   expect(spy).toHaveBeenCalledTimes(0);
  //   wrapper.find('.submit-button').first().simulate('click');
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

  it('should make "ERROR" the display value when "Infinity" is passed as an argument', () => {
    wrapper.instance().updateDisplay('NaN');
    expect(wrapper.state('displayValue')).toEqual("ERROR");
  });
});

describe('calculateBolus', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Glucometer/>));

  it('should divide the ratio(2) by the amount of carbs(6)', () => {
    wrapper.instance().calculateBolus(6, 2);
    expect(wrapper.state('displayValue')).toEqual("3 units");
  });

  it('should round down when the result is a float', () => {
    wrapper.instance().calculateBolus(7, 2);
    expect(wrapper.state('displayValue')).toEqual("3 units");
  });

  it('should display "ERROR" if the ratio is "0"', () => {
    wrapper.instance().calculateBolus(2, 0);
    expect(wrapper.state('displayValue')).toEqual("ERROR");
  });

});
