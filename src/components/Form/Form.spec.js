import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form'
import Display from '../Display/Display';

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
    />
  ));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <form/>', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render 3 <input/>\'s', () => {
    expect(wrapper.find('input').length).toEqual(3);
  });

  it('should render the Display Component', () => {
    expect(wrapper.containsMatchingElement(<Display displayValue={''} />)).toEqual(true);
  });
});
