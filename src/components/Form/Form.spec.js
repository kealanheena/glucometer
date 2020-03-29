import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form'

describe('Form', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(
  <Form
    submitHandler={jest.fn}
    carbs={''}
    ratio={''}
    carbsChangeHandler={jest.fn}
    ratioChangeHandler={jest.fn}
    displayValue={''} 
  />));

  it('should render a <form/>', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render 3 <input/>\'s', () => {
    expect(wrapper.find('input').length).toEqual(3);
  });
});
