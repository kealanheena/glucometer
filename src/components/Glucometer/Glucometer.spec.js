import React from 'react';
import { shallow } from 'enzyme';
import Display from '../Display/Display'
import Glucometer from './Glucometer'

describe('Glucometer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Glucometer />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display Component', () => {
    expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue}/>)).toEqual(true);
  });
});