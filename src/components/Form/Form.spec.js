import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form'

describe('Form', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Form/>));

  it('should render a <form/>', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render 3 <input/>\'s', () => {
    expect(wrapper.find('input').length).toEqual(3);
  });
  
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
});
